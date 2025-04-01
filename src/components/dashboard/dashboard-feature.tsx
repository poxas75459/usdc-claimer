/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4LWg7RLgah32o9HwyfcFZQZkUprcMBMcED3wxSa4hnyvboXscotwUgp1LXjXw3PzvzsZYEi2Ejh1qmRfrK5jg4MX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VSnbEfEQvDcRAnQTxjqpbSswy7PhUhmj6aA4pyPZfJ8dPZ2xsvRoAVvPXN61xJGtuLefSLHK8NYcFA9GCcuHf5Z",
  "key1": "5JvAuMNSp1vVdjwgo7xSkWCnSg5BMTgXVpv42ELsFmUTwjaJgu24BFgBSNvyo4g6K7FCBqsbUACUHcdMa2MBme2E",
  "key2": "39aHeinHZcCZcfyFFraJNz9mkQWvpbJwGGm9LFzV2enfjha8WiQuwmtxHxZjd5jZXWLNzorNBPiM1KNg8Zg4mWsk",
  "key3": "4eL2zBGdQPvdmiYz6z1EHdHcTDvtLGuyADzAV8YotVnudTZYxKjrLGC5ojFWvrDe5N2pNCQWuxueoW6GCPhoRCJP",
  "key4": "45v9awMKXwcrYFaDrKvkF8wvMVdHAiMkNQovnzqXv4SjLmaaxc72K73QSJAPramcrn9MNDN5FXVan54TiTzKb1Ey",
  "key5": "3cXgxHLcXn6HAg9NJ1HpHPRZHB2XqdnDaQWDWo8F9PiiyxCrwEm5wcETyWJ2nrNgJSKkHYdnNMApUUTAJy1cqYCP",
  "key6": "436vcPQN2i5fn7433Zo3ZZiMDkLhNJWcPWW6XTRbdGZufSjaGHMJkw53X8UYqW8asmgLdJq7NZCujg54kSXaxevD",
  "key7": "5jxBtiHW1wnAZpq43D5P9GoKn3vap76aZGbYve4fTg23Li9C4oG2VfdBR2DyHugfdZZBaTkyntYcbLjZQkfaLP1c",
  "key8": "5Mtkqv4WnGvgTspx7Qu3UmQa1ShjSHNzJC6Yfepm8ybKEtFRg6Rae92BY7hTMvfwMEKhVMqb1gQ18dcv4bSMrgaY",
  "key9": "4JB6Grpcz7xTFjdW7PJrGLRL3dSsUuuLSFLz5KBq5uvpkFVCNtree6o4jsyf4uArFN1xNPmCXKh9ApcFZVkokNnu",
  "key10": "3FCu3tgLsjUHptEByawmfuG3mTbynPYTRfSzoeWjDyAQNkiH5ses656wBWt5zNwQzH7Edo884T8jAD4b535D7bQ",
  "key11": "4iSfPkSiLG5riQcDzE5bTJ5ChW6djgp3VrJWY9aBVw14eR5zKUaNGxrmSxBnSsa1KfgJbVbv35nsuzHAo97mnoxC",
  "key12": "3MuSczBDT6cLKKiJsx4xok81XgLHXGEhpkFiSQgbJrNqbAu2DB2GNS7GcHN23QMdhJoRU4AgoTyJrbzDZMvsBqBY",
  "key13": "48d5tpp1fUVn84stMNRBYQyb3G2W5KnU41131u9EbgddUvobXPcDVFTSPGnyjypw6bp8m22fqpRNGz6zqYYep6w3",
  "key14": "4uESTnJbN5wvrqJay5GxvKcj1YxXm5DhxCkjb4V4J1SjQ2UYMQjG9NpAx7TLxmaxvcBEkD3Ns6dF4mkVAT1AcLUT",
  "key15": "23wRNY85D92D66khZ3tnvopZcfVFXvvsDe6HGBV63imJttaYMmpgxwa5MnuKDGh8UeZmmMgRw1taJSb7Db6exF16",
  "key16": "5hZ6MYuFCWbffx5kZJgFN3o2JkC9jNGx7twK519UBULQSPEGbYjLJYHXjh1zeZqQnc8Q43NvyJy1Vz6VxNtNhxii",
  "key17": "G2uxvKe594XLewfpHRSBm8iEnh61UcUTKME8PPxWhLtUyo5spJ2YuLhhsWpk5b15Dz69QRsQDHJqrGS8hTC3PbC",
  "key18": "2TcNYfkxvPyCSuqjG4jagS9wSUnKK1m4C1VyqPiVWnUioJDrt8X7EMX7ioNcXTwVzh6hhAYyqChv8oCnLeqwSXrY",
  "key19": "5KnnXiYFA2e9eLTowoMPchom5UedTZu17XVZ6voFG3QVpSUu7vxDzTPPbT4WEaQc8phhMj5z7BkhrsdFe532fMi2",
  "key20": "2rCHyj3Wrwb9Bm2g1icotkoZdTdCuEZG6wvTRgJJFUMUMpS9AYLzbGoei5sioGigvdgtFpH9qqKEgmHVXytEnGZD",
  "key21": "igbDdxL2vuawz2tgMat1TDWiUgcB4jAExShNDqy5dfmmn2ptSSmUZT3cfSDSW8ZJ3Fx2WY4zk2Jt1jVwEaVq8x7",
  "key22": "4uU35Ro95kfBdBf4LBx3F7ppJj3pM38K61G1qEQkYNhaNFR6McsqDryfS88WkSVAahJdgGqjcXhfNpDtCY4mtBp2",
  "key23": "QJG4YqhJf9PaS16Vco4v6gfKv5AXccrESX9uW8eB3cqUHpWj81uzqHtsQtndAr4HxwBCh8Es87sd3wZUwwL3rCJ",
  "key24": "MpwXBvyJ7NdDSHafaPoiAHyHj3GuoYj2s1gJHxNjit1pyigU9S1d7JvTf8qb94sqHzZiEQYx3mpNgFfh84NsGxF",
  "key25": "45eGenm44cMgRpNe3xWR9AZKXqqiJWLbEUVJcqnU6VLD7oL6rJYcAsefGXPpCRpJLcatmvE8risgudtj41SopdEM",
  "key26": "2u799NitdXfzGq6HeV9tEUNPG8HJh6wVMeCDcXJr7LEzKqWi1rT77VChBMbtog4XFZRA8g6dRJCFA5DHrqShjfoK",
  "key27": "fUicwUPKaVKnmysxPWtfPUYgtZxe8YxF7qWpMvbZdDaNCHCvAMcUCiwzzqDHerHFw5bkCQcdVaXaVGogL2YxvCh",
  "key28": "3SPbYjQJhUjer9ade47ZpEmibasKjMrzd5QxvWsNUGN12SmT1uvA9RZAQiUh7cojK5PXNJqsvdkV2hdsfgKDYSQs",
  "key29": "4cMJHeyN8t9g26K18EFFaK7ZuiUoqSAk8kmVroHGbNfdSxYeCw7xpWjjYkPSHQjuBGd2tL3Hzdv6vs5PW4PDsxHL",
  "key30": "593AHQ4dvyU8QfMTLwpqQviA6VyXBiQGpEmUZc1tnjyvBcojDAXTyXrFscNx3s4u6dpCxTZfdNfEKVQFPsSJpgDG",
  "key31": "3g4iJFLYvyRbERTzPqPDMQn1fwYoPwywX6MsKgnZQtovkZ3X9bjLUae4WmV5VwJ9opEeqobBd22LPNQXGnTMrNqs",
  "key32": "3T5iYSmt9QvNuRJuDojjREoBNKJkQQUmxV4WMjruJKgEJiGJwDjYvvmJpsxM8wVHtUwhwvR3pAovEm4cdzxPjjf4",
  "key33": "5NuR4F4QxqpJyLiCwPNkkBE4A96d5FEmE9xEXqws4rgZe2EDdwxpVVtrW9UGw9MxF7fZ2Ndf2PAcdHd5QENuEQSk",
  "key34": "5gUZHMmW8mZJRmbw5BbTeMGn3ar4c2k4exumnXFc5uHZTu2wun7ty833y6vKFQxgwL51kRYEJeumZ5yF5mb3tchm",
  "key35": "3ksWmYGSQWkSQnUGmBJRogXj5sw7YKEPVHFzZdHii56KgDXkRmG7x56YQWtRA77aqGB5hsS4sKVgNBBrNEVqNRbM",
  "key36": "5cxa9DGqdGiiLB5Dr5awG2LT67XvjZagtjES9L9JbPbwAwf5toD1W6b7squ3z3KPsrvKeGSv47x3whKtJoDWGCaK",
  "key37": "3ymNwVaurxrvQNeHV5bdV571ZQu6ud3sefCzNbFKJnFMdrJUpu5npPqSjuwHuzZhFrYSVGMaErxAHpkim1jedQr3",
  "key38": "bnhrAhhzsso5faUndsyecJvpEMdcVAHoXRCSN9TV4AoGTS5G8SpJX8HLEs9zUdEa3YAqGaY76ZMzEWC7RVvgpVH",
  "key39": "3kwQJXtXSaJzmPCM1KshNhPwKVRqh6DtU5rpfC3Y3PYUcyGfExv7vUFyA3LZECsJT2hX29ewJ4nBBt4y1MXwQRhV",
  "key40": "zGjJAszdNHCBdbXBgEzSABKkxDvQnecexdUeG27nJg21VWZuRraLwBFi6x4ECdrZk7dZo3zniEfEpuA5Vx7uQYy",
  "key41": "4BPHSViYkxRozpBDx5MSLuvhYT9EvquiaJMiba7c251gfste18ZVRz99pzfxoYSnN6mFgUsQDN9beSxBtUgmzhSY",
  "key42": "36wiUfFjTECL5Rkv5hcnssF8GdtHRrYvrwXqSrr77J9Mw7fHjYLbLMsFNvXztPyP4dwqhX1dSwN9BwQWhPUSD3Un",
  "key43": "4C5aY3ppZibWK6x84yLtGJybbxSNWFzWdSpyWR7D46QPgKzjpDd9Kz8rXqhvCvDtKUz35NqdD6uunhQf1XUGGU3s",
  "key44": "4ns7RLSWwN2jtLgYyzEii3wwKmiaPi957jLS9x1rHcLJbk8RSdGFqTcSvaFWvqaR5VVsFGTJTsPLsmqnDBDUwPDv",
  "key45": "4DdjPcPPMoDAEEvfjd61279xxct3S8MwKSbEfzzCH7c32vCqjjbPhjp2zRGigwBgPbSHChR69LteEWD22xhpSW8",
  "key46": "2NeM5qAQPxfgT2jgMBMua51HfAX7bGi3z4jXsRgTcJovHQzTgn7xYbZ2twrjnT6uXpq6Mo1cFExXJP6pfWixCj5D",
  "key47": "56NLuC2cibPUBqcvUTYbWHAmQzvRmNx63NMPtB8Jhy15yCHgZCHVfD7hYZo24mKhGcgPcnFGQyLWUAmEYj1LVZaM"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
