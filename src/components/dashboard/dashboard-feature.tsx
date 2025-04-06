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
    "5jGwUu4okDMJNy7KP8DPH9rXZsQ2YiL5V6dALmpFnm9NqWoexZH6tXWsZNzFqmnQ2fxxue1gDvnDFjg3EfirGt8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42pDSMsXrtyGpWMKfvseFsuqgvGsQLnT8gNLAXkkwNRrbFvGVEuVKLfvvv8GZMn68eky1xmLFjqwym6gz1MQDthM",
  "key1": "3VycmJXbAFhhsdNYg3c9ZKRZ4oZ2hFez8oDN8ptN5M5EqV9JDGbumdioHUNYDD5wfjnkwtyWdxCaih5kDERcMW71",
  "key2": "5DJWbZPqGtCeoKqzwoQCa1tSpfr1zGZNkF1u7qhCdzdJckcitPzWPR7tF2faJSZk9zN2AgFCcB5cEWuVpdgphS69",
  "key3": "bh9JLyHVWkA16zPoPpYT6JfJ6YFBSJQB8neodsuZ12Q7eEnwo4UravjbhFASzZrSDwq8VVCu2BYMBEBmXZKndn8",
  "key4": "66UEE52g4hv7vwvcnM9ECnpNQR7F5uJHgBdmPL5rQNmKmEp9Lv3DARrA1dYqqYfd3K1bFxWUP2roXuzz8mc2ffPr",
  "key5": "4zhXfhdKwWWqzu62iHwQ1bFLSq5RG9vvYUJ4Y9VFSjMRNnjL5NffFVjaivsvJn9xQKvaaSCpUm4WMAPkGGLNBkyC",
  "key6": "5yHxhvC2BqiSenghPVzaC1Lxm9msAkXpgqhy71dRLRDJ8MGsQ8tcc5CjMQFWb6cxf2CsWUL9PiTapoc1eHTCF3Ng",
  "key7": "4ntz4F6Mn5PFhvdbpZEt3DMin8GAjsYJMe4VjLG83rP94w7kT8GrZivDNpXWe24riaUQ6iRB6wMD1xRFoP4ZZvac",
  "key8": "L2sYaN7nsRfXW4MMevgQ8kNdLfiFWYWuxah566SexS32Usk1UqpXkKAQ3hEaZeyTAF4wHaKfn2xHwUYtrgffTxo",
  "key9": "4wMWQfH2Qa96RufKavGdawn7CuFeE4ZFRYq9uvbCSsXxmSU9xbYpkhvLCmZZf7aDjmj9ibZ5XvmF6vgjTh9JPEey",
  "key10": "3E1vEWSH91T3eJArVUTtxLDJguET1WvoShjXnJvXsaJcchVvfYhLS5LiHdRKbMKCwmHwWFBPEHB8vtHk3ZQaSJh1",
  "key11": "2NyoE8qdVzkuoESZLKUqqVzCH9ALXH9fs8CWrz6XtrHpuShyYCCsD7tfEWDpQiH5DL5DoLFazaxqbGzYGy3q331V",
  "key12": "5dAhg4DcUpwBQCfeoNytNmcGuaKRVZFPz5WXxc5jgtxB1pDU3zhmenzq2v2ybh9MfXwfA7bwWtQAkKmDsD5KSH9N",
  "key13": "w5gBidXWRzZDV2oWU7Jo49J68PYnsDjEaqZt8W1yXKhw1M8R5sVg7wLbd64tXwVcNpc7LT3e4p38sdycjzU3qvE",
  "key14": "3DVKr5aurCVhAaVxyZBw7kJFjhQkfH8NLAtTS664QMdhC8pL8fYMvziwFNKwo3Nag8RmpHRuJK4mxn72nVMoTFYc",
  "key15": "65JqMzvs46YQE5r9GyYG61Excc4tohS6FsurSSEaRZzF9rxjBDPv3c1mwdXX3bmnkbXE6bCVQN3ifo2du8yKHvhq",
  "key16": "qBWxBHkuAbUa7qVvY1M7NkuWE1NPeQUYMnsuS9zN2XDyEqYAzFr34RFkZvPZcK5ETFSE6DPtXynV6reZDR7dj6v",
  "key17": "4QhtQzDm2u51fLWkGQhzNdiMbKcSTC7nsw78HFdTmpYEoZQmSkkawUHZdwPtvhnXuGgFpsdwTzbEfyq4hjsUVY3P",
  "key18": "4k6DTWt9RLxrsFgcYgiu1oHkCfwPo1HJM9n7tiWC2YMQameWCE54TDrinh2KtRpdJd1kYZGzCkG3cifHdR2h1LYB",
  "key19": "fopFz1oe2sZKuExszh1J9BMoetEdfQgbj8ZjRSM8Hb2KkyDgySEKaEZSA2ESjjYPHNF1LisQAYiW4PXmtJN8KgU",
  "key20": "4gRnzEiU7M2tPM7WTFopm1LRQ4oddsKffgo4MrLuoiXkdwbHtaprvDZoNsfQKm65EipZ6uAsuwsrNo2viHfF8Cx6",
  "key21": "3tuNVmaAbNiQasj36bbvmPn4yPMKPHsnQXmoUQXwcsDKxrQswUWyaFJ8HXm9FjgnXZjcfatFTVs5FFg8tZzzLMRz",
  "key22": "33ooM1CHdYprQrJF6j4WbTp4m8CZ73v3vA7cpzns6nkSaJNE37wDpwwTcQ6ShiTN13hs44yEuDT9NH6oz9sdg6vJ",
  "key23": "66GDofeisw37fR4RwfUhPt5Utgpupyouq9Vsao7rFhnng8KUX5kj9mhiUGC4nQuSAaMYPyRmGRpmSV7RpsrUzayv",
  "key24": "3QdpBQfmjZgJwG5PJaWwx8VASDMTSjNoaiFzgziE7DLYNSf17nTh8mc1q6eVA3wKbVYizomG9p6gEd9wF689JRkT",
  "key25": "3wrHN7LP2wUTAoLpHU3YGZ319Cf9NsxNQFN424kwz7ipyQSHj2QhFyVr3axfxjLKQCjJZnjrbPbQ1L2RpuwKZM6",
  "key26": "4JhuGKQp6iHwRGe5KV2S6QCgvf5m2GaSfrkEQCBVDg9RycBcDD5kVXvxUUGsZRztah7836r9jYF7m6LVsUS92g8p",
  "key27": "4t2mpFhNPMYxsJye4JTVr1GdzPVRACmMSy34WaXGJ8aamrz5Tj4ikjv21yi9YuXYnepZSrm59cmPiqJNryLZnTBG",
  "key28": "3ZYaEowEkUZUd7D2eNyhM7HrGeckLndDtVYrDBckzgmV9MKeRuqkupTaeuQg4my84GX69SW9nWEaqjocJSagCU1S",
  "key29": "3J2CiUXa9zfg5Gt3qjWUuNbM8TgfQbj4dpdM7gavp84Ka4H4vxvVmoDx3ixMh8gRngsquK2ViiNezv18hBeYneTo",
  "key30": "4FwVJQYN67mAjTGUNTV2TrVcg5UbpXnh19r4zaXeoftmzjs6PzKbA7b2gQXwGQFkXK4PGnGwG6hC1uoiwhQsnwK",
  "key31": "2EYLTA8tUNR7UoAmGaCEHBss1RVPtd6b27m7c18M9zeAXwPNEMULvQDAhbFUuU2vk8628xpsypZQRdWECmDLtuN2",
  "key32": "5sEHuuC9ELwQEAJnTWk5Y94nvprpQEWpF1pNiGUBQKTvBDHeBmeHFM8X1HTMEMMBAsvq6tsyU96mLK1K94ASusqS",
  "key33": "65kx6RuXHiCZzKE6LCqfz2DfbHzH4T2RNWRCiyRJZmnDzyJsE6FYVPXvYzvu2tQzus37uPSW35N55JoAzZAfC9Pa",
  "key34": "316A3ArWZrXxGup3TM4yg6GdNNp5f2ymgp2JoGrXNrjnNh1rvGJRh1EwdnQQJTbyxk9EGhqZX1vGEn5afYApHQwB",
  "key35": "7jYEc6YLfiwrEWfRzxv3iyMY2DEjVPXtsYT19a4yviDJHCQsuAME8unwac83heTDehDPrFVSTnFKjSY9zg1FF4z",
  "key36": "4iBUMvaHVLNyygmxyVKerDc2hNhYxF66dXmvjZYwC1faBZQwA7HeZ8mQSXEnrY7FJMXxCH2qvfFkrBpgWMJoso4w",
  "key37": "3XjcrQ9LjWQ16AfkuJeaZAwtyrC37HWiigHD574VgVsXasRUrpG1x7eTw5aHSUaJdE7qL1AeZhbw9YpCcXtTwCyH",
  "key38": "RdeUb9DKZVtV2R6rKkLrB6WymcpKvhBETgxVPmGYbyVWvx52PnwGfRUNVBrGM6fHWAZrHhJXkVEzpSLetpUzJ2R",
  "key39": "5ahiZUuZu3yentkpJFBu9URKcvFbWwEDKoXV43fz78EFdfoTca8sUrQ3nbjSX8JgKmerifjqqJCyZ4oQXM1MSfvf",
  "key40": "U68YCZUKNyQH7Kv1gwBYviuAVjYhCspJuLFX81WqduFdnJmqCC6FecywfMkvjfz1ab9Us1Z128LtuyFPMp1C1b2"
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
