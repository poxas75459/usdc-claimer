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
    "kSjWfLAEN1GNrupSMefDCHx2ZiSAv7unSzcRuQcs2RaaUQz5NLswbypcdcBdEHEtz1WiKqr4LP7AThaHwehe7de"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cAQe94L11roE42wAFC7AybNZaRvkcZ9vLSf5XUWuDP3MKgBqRCYZQ1oje228MQuXZemuqzcfs6V1Ba2DRJWmp9k",
  "key1": "AkVnpuHfp2KPAGgVjcRYCFXENEEyJHZTFfxAaQd8mxLgjvuHAUQjaf8YHYrRUgEXFJNd8GypHMXTs8SnFop9yQa",
  "key2": "h8f79EHk5LTrDQBzVMuu8i5hctBWVuxLDgpTmoSfRmyaoBL8jzQ81k1ofVbTu8RcNVGRb1feogCBcxQipviCcdh",
  "key3": "4gBrrpmxfec7Dhvnvett2eTrWZUSgrkcUBzZPTebw321NiwpSGMXMkuwWbdfNqQBU9EbMCGwTTACaHLe4xurajNN",
  "key4": "125jdLiPYo1PNGjNp22kDnPtHFvueypYW7pb5k614gr1UbQ4Fp3mSD1rTf7dyjX1EoL8bT2Yv3rimsDi2ooTgCGU",
  "key5": "3ksj6JLG4XxTegg6y3pAqG2AsaX88k338odioFmEq6dgB92wShkp58YhxEjRasSNnGUGfjkjgWbdxtRV1XYmA7f1",
  "key6": "H1RDAmCBZJW98mbmB5LFx7LYXkcNG66VTJGSLKAiTpC8YJtmt9H2SsddMVtvWAvoe1B64RRo6rbeT6yPPu8fBp2",
  "key7": "5cNQ17p5uo4f8fhmuAobx9TQA3vteKqb7VSamS3bcirT6AZhdxvTXkpjrUgsKxgpf19fqUvvZis8VtVn1S2jSfFC",
  "key8": "4RFJxZ5U544pBMxx7mpb8fhpj9LQgQoGVcSFSzef2fH8Yq73MLJ1Wt4NZkcybSL7oMawaNAgwSu4nSNZRa7hSfhd",
  "key9": "3jnUVynGyK25tZ2EXjT58o5LBQHrMRKy135UfgE2erJdRVaqyVhrkfBbPEJS3GMsMoeCNigvGcnMSB1MEAePj7hv",
  "key10": "5LMT1RSnRoLkc5B1k2VynsoqjfzTdJxE81kVpFgsF9DYXFEdRQxFQyjT7fz2C29GstGcoKLVGNDk6cq6Zoi8aw64",
  "key11": "2gDDovQUdqrCibqjeQZh5SEh2vmKEiGn5CKzjngkrrtgjSGRZTQJPRJycGgeq9UCNGzNa8RJoXVx86cYGSac7wqE",
  "key12": "5jMHQUNCKve7GGxUv6mB2EDg4pt1hn7UoCMyimVVH4tr4VuTfjKjuCaaAUvgRp4dgZwdKgkpWw5Kv9hS3UELUosP",
  "key13": "4GanYPZvrCCDkezdauHP8WKygj5nwFsKHP6XeN8hMKDUd5Nt7eDExZJbxW1aqZz8mPe5a1c8UDEZRbyJVimNd9N7",
  "key14": "2xAieAUxrsQBS5WffihyDta6UZ3bw7N3hd1uAdBg6qyBHiQfwagV4tEbMSLDXkyqGPKtNQmmn8CgVWGePKTLopSn",
  "key15": "2dskJXd2H9GLKj15KgLWAmifqiH1ajq15A8RWag839bKshsQdVQLQ2esCh1hKZBNjuuSzR2cGHsXuSR9KLwSyJn7",
  "key16": "5MnBnMFP8ZFPxjnadk3YkPaiGvoYDN9smFiEqCEntWo2Me6qBg6RmWkzcjCMQoy46iKRdEDdd2MqQGsJ4xb46CsA",
  "key17": "2pm37q8CVcrm82bVPtPTT57K8Dm6SGnrfAZUS6juFMZTCwL6NBjKLK9UGbU4LRyH4H9S8AMfMLgN956BGjKRUmnu",
  "key18": "Ggwu8t3oN6QNbTpsbPfxqU26SMREVq4AuzRNKCc6SBz5aFUarWuq9ssCnet9DGaDusVuu6Gk93zPL9egQdzhGbf",
  "key19": "w7GQPGVtzub4cz5RP4jrxdLkaXdEpYWU5peLMLvRfjz89DoUwKhipjVqa3215LehCRDsi1qZ8A9Vb5W5Hry5C4D",
  "key20": "2RGsbBsxAt6ZxZEsbFZAKyrMJWYy3xGcgoTKMnvAtDVyjgWbjKZvwUWtVySPfqNZg1NghN6YmWY4aKEcKBxcw3pv",
  "key21": "2Aq4ndAxLLKTv8xH7EbeLXNY3huGNBa7AbH4Epx7kCyiTAsReME76X9NsLNvBEKnZLtZXvsBHQcQAX8RrtzEMnrQ",
  "key22": "28bLMTTrjjB6xxqPvTa5YppfjBBxS3hVKww84Zb4r24d8mUmpup5axtL5mqV6NdbFacAhL3DSJVjnBTqztsRqm6w",
  "key23": "2LxkUsuiomFo4vUKZ1UhwUH4ACyYjs2gyKMXfRNNPhMEemHt1M6qEkD9VHxRwHbtsEsRwcwJZXWDxGZWZkHp8DqV",
  "key24": "3VdrqYzBE3aqRVJPXcbFSLBiA3ZCmvAL7rasccUfpkhWuq5U1CUyBB1rG2hoC69s5psknDnEpRyg2TjJxqfU7tz7",
  "key25": "4ad7rjdkmq2MVDK2586V1FxPATDXk57iceZ8wdc6st9sZh99CSyv7C9cRzSr517CC8nWT1AkPxPzunXC6SgGuVLK",
  "key26": "21iMkjaR5yXGFKSmEhS1pBgY9rUbeRchwbXEoTZfZorquMFmfm3Dhn8wHydfFuv7TMKNu328T9VPvpegC6fJCQS5",
  "key27": "88aHgQSmVgwrooa53Xf7FR2h5NAjHsbH3rxaMgKhppmjrYv7yJAjiB6Kng5aNc6kNd2jvXU1fYT8Yug8ShKMj9F",
  "key28": "gHo81bzAWPhrWmLkmu13PCjaDMD6enHMhpayBPPwaXVavK4ep6wxLCW7cH2ymHpBCyiS9zFtqLZWZUSpVukAJvP",
  "key29": "gcdM4AF26ACzmbekmfcMmPexPi6fDnFbJCnsvjw1BUDmG3CtT1dUwm2qBTiySFzZUCrobet8g7FWNpH1obPsM6n",
  "key30": "5TUq1HVvrJqqXRhcco3D33pCLtHQWDyip6LPH9n57DXasSbQggo7GtmmytAsw9GoLA38E6PGZLgPicL9Fi78g7Ew",
  "key31": "3fjKme6Cv9cE5oyVQnSsEowMFkxJRCRY7R2RPNtH9nqLuHV2uWVE3iMR1oXFAE7xk1VgHDaG1sJRertctPrdRPSa",
  "key32": "2FbjFQiGjqHqBCmYUih7KLWYCBTGUEDQkurAkfhdr7S5bjuQKVS8aqCMzCHV7SboDstSdirKun2oJSEhgrfzEwb5",
  "key33": "4CkSvkxE6HNCkqf6N7ZqRemuAR996Q383de8vwqYY6uozza1LHxSuMKStCVNDstdVEm2vq3CGeUkxPGQxk41WYze",
  "key34": "yhYZD2zZ7qrXdZwXDekcmTWAc3HbuL3FN9K8canhiyvTktPB4b521KnDyAt7wpv8sPpfeGmtMRGJ1ZvdHAwXVnS",
  "key35": "28JasZiX5vow4hfTMfTXKN9hzEyCdjiPU5EM9VMHC4xMxSudD4Wmrf3ARa9vzEcRNneyR72kmFxzd6WdQsK4Qvde",
  "key36": "j6zG9Ng4t7kLCvPw3ueReqdFu7EN873SzK2uUCdMyKtsbqC2ysB1Zia3eUSYbTHRCuXvaUTrceT9rDzx77Kk94U",
  "key37": "3DYoSjYbVsFyDBuENugqejF94FavqS293tenUfHTyASsj2udU2QJkJVfsiZasoix1G7dkCxT8Qx9k1Utgbcphq4q",
  "key38": "2oXRy1TNVhpkRCRA7KvyowAJQ5uAgHcz5TgAQEav7eK4N7xLzyb4tW93hwqSaet7BZChd9tCQtmPyMKjdvQZdWTs",
  "key39": "2pzxJ8ZZwHJEuaSjBmFSnJdFsqcZuv2rKaQaeY7LNxwsy1aNGi6ZWronxsH1PrHD3KTdAwoETXCbRQ4xnuTzSzEj",
  "key40": "2ugneSAgWi9sPUtDrip5Z46kH8hCQruYQAt2hUKSHdytShQisS8v4dCCTAshTZkMmqheprWWtnMF5pBEnjYeSEBR",
  "key41": "32wULPJQYCE1ZFMgWdVNXY9iATUpLYFQHn62vLc4z1bHw3ye3JHvjUjwS3zFs5J2bHU3xdeHuj8jxt28PrmZeDhe",
  "key42": "3HFC61tLBEHCqeCwY1RR5Gme7PSgEAX2GQMbjV4NMzFQdiRVYgSkaWanCCckYPCZMH6Ycr3KLS4HPGASFeganc7P",
  "key43": "2qv1csqXAzYVx6Cprn7ZwG2eqPZ3SN2B1iGonw8GZiQsDuEYjLHnHArLqEyXVnGZg5Fzo1kDw3SBstbUtSuTkFj8",
  "key44": "xWEAWzhYYxPtfR2fJkChtCbeUUWM81UfW5xobzomJxDoaweZNVJ6NTDhdpYC9KGGBbDkLwwDRQ6iKXi2XXedj4P",
  "key45": "2VDhcsHJY7YZ4Mdua4fLbiFywjKci5JKMo1XVgnYFUrjAvTV1S4k1yBMSeTo3umjFvwcrgoj7fxZ25Ejqb7uxkFS"
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
