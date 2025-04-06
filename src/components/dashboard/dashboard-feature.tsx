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
    "2AsnNKEWKCPX7WHeZQUPgsbN6tiuH9EXExTFRJm1ope8SQbATZ8MJwgZyaLzCG5y7x4wxJ3A29scABAPMAN6V7PM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3U9zdFGN6sE6dmSABQy8ABWhbLWAyvYQmSMUe1tDaqAhXRfNSBBAFgZ5gch26dYKASGYxTy1Zj7KiHHDEBFkmrrw",
  "key1": "8PQ4YJMpRg1Dkm2QP2dN2XPJvBnwGuKdrpcBg5B2y3eJJCwk9zJxx9d4yFPJgAmposppR5JocxS97tmUpytVJJr",
  "key2": "4od385VZn66f3cHf6e3G33XshGUZyFfAN3JvpqHX9D2w1B8mmbTGmknjngLpp9xoP7xhwLFD6gcCprvqDyrgQW56",
  "key3": "2zPuLbywWQGrrk7RGiZRJuLnAAmSewb2BiGMU3QrhqiWkWxHDrf5HWJHGt4PPy7YFnK9LDdq5L6xRVxtKCE7Hytb",
  "key4": "7omgw5hsgTfGWm5EEWZ4jcF66n2vK2NgtpVX4fmSXQrkebY1hbFGm88XKoYDxAWgtAf9Euwdgt4NxkH4TB7prKe",
  "key5": "36YtKZ6WTxSyqvUX2E4nRiMU6i3YVTmsBCEAdoShBUckynPXyxnwzMwTbrLtNXyoKTuRr31MDRk113tTfrqZsQHP",
  "key6": "rvzfsJYvP3vK7CRkNZuxVrki9U2YiTVHPpDxgg7G7dUuF5eGzXcKEdWfqf7h3YWztWCKnSUChvzdi2w3aiNmRgJ",
  "key7": "5Hm72BcSV7sDBkjc1hbLZV7bLvEjpFuWHqX9mEq12wX6scYyWFGgiR7sksGsjPmPSaJ48W5x841nsMgfmXCMHZUs",
  "key8": "2PmeWKAQz9YqjDUj8ajHuoGzQscUW83eRRAN2LTArS9p7weQ6YE8FfUwYRE5UVoMv6hwJWKDdzJTaWo48u6CuA8c",
  "key9": "5rsY9bYFvZYepNTzVSnY3QPDgM1Ximc8zQQMfzizJLTD4EZuiwsttfuwBEQrGxuUur4TwUx7XNe9EAMxAjtLMs6j",
  "key10": "5pRaVaAE89KCRv72vjzQAp86Pv8WvJnZoa2DfpPAZyojzyTY5GKqJotGCgzLfkEZdJpnXmwZfxfRkErXBcnLfbrC",
  "key11": "2bBwDDKPbxfdho3qDfoQUcLR9CkSe2qYtsCMx7gfDc3DgwsNMp2XM7CxX6q6wRpbKzcVyLh772oFkuKH2p4wieMA",
  "key12": "2uY4GFatgnWhZ7gLi1bn1XhWXNfNqUmx22AYbpXBKprtvgLaANDUwiUXvbCk5V22UuBR5Y9aNCYchBYu4CqeHXfz",
  "key13": "2cDXhYXk2Gk16V6mmA1Zu3dKsgbrbqUoD8NTuLs1MmuTbvWfUU7vXPZhzZUCEyEo4LsPAePEzEnmerLiYvTpcP6u",
  "key14": "4yfGPcWF6CQJi3yEmVUMys3MLUX5FC8mdw1Wm7hxr5Rif9wohqVZPA2mGBtAu45c7usxkEzYYo3uc4LWZyKiQfAX",
  "key15": "27UU4U7LdFQaqG7ATZpmKebPsUSduV8JdyZ1Dezt1wgv6rMZeBv8K3Nb5K8Xjm6agPMevtBnKuMVSGL2wXEmQveS",
  "key16": "26T4a7PhCQdHL3GLNaq4SJriQDg1kdQ5AMAknafRudTsMXx1kPp7ubHiYfhBVyt1SfvybvPBwNSBDGVDRowGyQfq",
  "key17": "EHgCbExnKGnew3oWfzH9M3uJKRt6jv4DEMVsNmkTSkyUxBanvD2Wvc3vBZrDfnGieHG1fkYyvPY3gbMcmYgpgHi",
  "key18": "5WqaLCvxeCVoFBGnoyu3xi473ojXRMR6ZNGYi4i2zk79AaBytdXkCeV7W1fRDJZ2J9Ao4dNdVdz8FbNVQk7kxGX9",
  "key19": "7GWgxD4veTSGKV5AD8Wyiy66brS6LAGsdYQTw8mM5wx425rQn4kbaYqsQMgkEKYGkpSFooFHJd6i5YpL92JwVT9",
  "key20": "5jwfUMHayUjpDeEkq2NXwm54td32DVCAdv7PnxFFeFftm5MT1kXHP9U3dSuHBijg5PQvj4jBRxv2ZZK6SaccsE4M",
  "key21": "4PCqdAmyrLVkP9dBjeEsbsY8fcNGtHUU9priVJ42uPQqi6pQ4rm67f2yRRTQcaaWUMCNcMezSc2i88Ab4GoMY9Ed",
  "key22": "2HQqtxN6Uit1ypUJwmxcYyYqdBG3aWeYUMBPgQBxagFZkiGDpEsdA1B2mMBseK96r49hoB9Q3AgkcyVXcQWgqSsy",
  "key23": "UoajUBwPwWgfG6F6Vy2VTVRgojMHSfWJ8BtuGDZydXeqpPaXSqBuRPYdeqwym4fD3ArE2iVeim8wkosPojgoG5h",
  "key24": "2kFarNVwxvCG5nkonuvHVGzkuQjX1C6GKRhyyqjVNoKUTWqq8kFWhyNbiBe9B3y1ugMZtuhz3DtLAQyuT3SmjXSz",
  "key25": "65LtskaMQ2Vf1s8GwrsJncaHRtuBcjJpmD4gCF1b7j68z6KzJfTWYgnun1ajmk78tbk8bv7m15wYro19XM2riKq4",
  "key26": "wuNQpDNkphhrArCdhZA7rgg2u872yQ3JrqEFLCTw8eZwQ2agiiZQrgrkHnUyp7vfZDPhmoW73PSQWvR8zeiJMfV",
  "key27": "5WA86QvL1nKfyxkcrGvjqQFutDSD8kWhedgcpkfUDWy5WzYapp62YZF8onu4FwBaLnM3mdFsyZMgbnimGXN4zfss",
  "key28": "34yWzXGRx3y4B9MxqbTVT5KgarriWTxRDkDT5b92sWogAfbERY8HG6TxHKBvrPkGknsmPH26VJgZzovs37iV5TZY",
  "key29": "3uaWhHL2HMmFEWmL2H1sSoZsYmBrAix4b6JXtMcpm68Bh3Nq4P4BqZVTuq4NxZkzcWQKakNZp3VLESW9kaXySoht",
  "key30": "2Npv8Ajodn1Jcnutzp8Fi1FzQ2yd4xG7rTp6c7Ce6vQ7sr9ue5Ueb8xvfjbUv8Nw2fQ4NkVQZBYRiNEbP59Z5kPM",
  "key31": "2dzma84d5zzdDxYhaDJyw5wz13QwB9kmxq8pBDHWcYC8f1LQ6nZmh41KZmvZtWSCZBUabeDrhMz1vPu35rqC1xgX",
  "key32": "3rUBkvhRUADYomHQjMyqirdUwsBaGYXrwnjyg5Qpae9LkAXuUfFfRDSgxjQf8BidNkiPShfM6UB1W79rB1oZFPAn",
  "key33": "4AN437zeGtdy7fbCSzDsQzMzPfmsEJi2c4GPzGsaXrmjAWXMtsXyTMjgUu98n5bAKEx4BMfbN8oGZrmWtDnAaCJF",
  "key34": "E7GkaS63PERE1Q1Eq6T74hvzjz6EbLnvzZUnwBn8kr2Yp6VSZ5dgXRAcq6hSKrCNAmsq2uLJxZuRMauZMp6EHnD",
  "key35": "2gHRyxnJM5Uhj7WjKaSfHjjTKSmcmUbaUine7x6BiYycm2zKuHmoGZFfjf5ebqMsPHZBMRLx2NCG6SvXYd6qeVUT",
  "key36": "2BMaH2VuZEvpD8ZLrBB26B45VhMnZKPf5cnVpuwCNbpGShSgEjB7qe3G8Cbd6ppaEtKfKePi2Ca9SUDwpAjQMMbF",
  "key37": "5kod8GtJfBsJYNHr93Kj3Zs9XdXyLy61aFShS4NmJogvd95x7cM1SKKK7KDCrWqiwCTZ1WarUoPdsMSHyf3mNihE",
  "key38": "5ZJFNjn82R7dHuiKTtjB2vDgSrvptKmTCzktTSxx2R1YWhsqzWccMUAQAzb57Wj554chkWPgPY1CSCurh8V5HFRo",
  "key39": "581ZAxsRvqzWS7DMpUVKFiZog9744sQw4XTo34z79XYSgL7RhmRhLoy278R6QSjuq7YH9WmV8V7scemn62ChZ2W7",
  "key40": "2BJY5LTEx7cXuBy2FWzRHwvEg4Kb1pT1cXmRbYpkiLiiXXbeQRZ8pgnRyJn6WmGUfeaYjDWiYEPxefuGxKDXsTDW",
  "key41": "4nTWv9kGudxR7M8DFA4WqmbLizARZKaCpB8dRQZ9b1XCjFdoAoRyTGqZXPaNiL3FaojTKuDCqD4BaPeVkmwpwkNb"
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
