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
    "4Yr8zQkfdsaD2ZYukxzw5g67sF5prmgZy7NKdUr3bsFpCgzLMWsPuDNyu6Pb3vnLJe4pDYNTGtoCDzSXoPqMxB7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GcTUYXSxGFEaWgRsszobaBYfJjux9VvhqVwmDYaBe34t1yRzD3PoG3CXPhk3yiKGwmUcoqGiF8d8tcgMg7RhMhr",
  "key1": "37K14rKrsyVJ7xBygXc54pSZd5gt42UrzqZQcHSKzBNPKwBA2xYrMPS9aTvmpD16JorkL6Uk7NyFP43bk35kU14D",
  "key2": "2BTVr82uoNTUMgi7YxgNCasj9KgRzaCVUr7JcQTfk4PStnrBuJcanrbmNBpD5p14fBVpfEEoLaCbUJjeoWizQmxk",
  "key3": "gshhWLZgHrqeAhs6CFkKuJ7qVNnhGqCRijvYQ5bwKM7kgTJP7XJEDnHjYFfLo4xP7juAU1ogJ7B2B1BrKB7Grq9",
  "key4": "T8Pq3maY5fcjKZ8njvTuKF4akyEhtXYDCVEV4eATusCcMeusahUo9PpiJnQRzt8ykrbgqRLdyLNPsZLE9z6KRH5",
  "key5": "63e8f8SB7QAqvshU4bFRrW5Mha4pVxXLPeWohjC9DDiL9ZLTkRpF28zf45EKaD25kkabyvWhPtHqk4tZaD5t78qp",
  "key6": "3hFeJU1H7zzmTW5VqEyg3KqxAoEcn4nfHTDGHB2LMqFXjpy6ZycwyNq35bfMf8aAia98CAtiCmcWrcoxxVbSd1ym",
  "key7": "JZyLzcSaruLvLFWBFJcrRw5pg2tSwUiJByTVUJy1b1Vpkw2jqfnf7294DgL23FLfgFHk3foBEX5QAQ1t9Za4aF7",
  "key8": "3yaGGKfXiG67a55vLvcsCoK9z57Xh2SkPBQydUWBkyN6R7PBoZymwaeWUSVVP83MJZiWids5FUrFni1opXJXXREx",
  "key9": "ujWk9144Cv8TSHkFyAytHNpLJcmPCmrZx5aXvDWYStWRzbRm3TU4g1RuL1UrogS39mTPDHRnh9w7oMP64Y7jPxD",
  "key10": "4H5VFwrV8Pjro1w6PVTXzMsVnMxHAhJVHXSdbSFbLjm78AR4UsCSdJy34fyqr1Ejk5y7ADYkQL35ZmcQ5FZN5dVp",
  "key11": "3o8Ykt1Brbjy1NLWkswgRMBjdvZPqju9fFf2xCcX4wkzaZn6fU788VpbXtHrRraY2SK8VXMQuSe6soabFZwMwe8y",
  "key12": "62RAfdU2z8WrxipQNHWWv9sx75D1rWcysmb1zDQ7eWCp4ddxvUqeE7VP6QyrpVyfmQ2ZfEok3A7L23S1iyL8cxGk",
  "key13": "23KYUS8oJEmZJmdTvDYRNWs73pS3qT1nLgpknTUj5XuE2wE2VEoWTScx4LQbheivYZ7iuavjoJsdqEiiMVMTbk5M",
  "key14": "3hCNEy57NFQ8zZWgt4eQDepuHzkKbBxdkdBxBoZxkU1dZ2GyQTNwmQatLEASKsVKX366BtM4fsvPw4o5Atxb7ZSG",
  "key15": "3ZGZ9mmhQpq8MPRqxxgcfhvywTVsCf13Pvwqj2MoGDbJd7DVakS45YUYazyapsfteMiLpnK55fT1QDER3ZqTgsf2",
  "key16": "2XJ9WqomVrXTceQE4iFHhdUUuBtDm3h6AraJyZmLEhLYr49cErVkvDdt5Wxq64CE923V3mosWB6KuoVbJGNXL5ge",
  "key17": "2Bd5wwrKV8vvknB14ZKnsZbVyV5wGYqP2jbKDxmJEmasACJinmUDrk2vhgY5kHYMYRf8BPXntqxppMqDt7mBcqsG",
  "key18": "2o1QXLvFzwZ2fQgpkkfWMtYre4dyV7W2wDvwu7HyHYiFGbzbYxyMjiaf8tiLxmCBXPFSdiLc6ZnF9C3CbmAkFwWX",
  "key19": "2naGCZ89v1vYhpR7yGaQV5Gj3PLc5hUGPNu9gsAZamUfdPtvNfUK4rtRtAVAxbUM1pzBtVFZtPPpA3Lgk5Ekx7bL",
  "key20": "2M51gvrUgBbcCfoGMUWYsp29pHBUZ9BgZSaGFWv1DcuHXUEVCpyhBwP18em7XPYesRGUK6bHWSvgJfhusKQKDP6R",
  "key21": "4arFN66SxXjoxA4g55ycaQpuFvxpwWRC6BATpMXL7jy7YupYWyVcUeLEd9GQWCtiQuNwPS8EzBcqVWJU1WEiB75r",
  "key22": "oBxyxgP9YnX4Rc5J6GmbbpqCJ6XewxR7xjUiX8smYFSwUPL2VsUSbdEsk1g3qkQ89tftjHLzP1SPdkBL3zRGoWW",
  "key23": "28tds718ukSLHGZjbaXbTBPAWofXZCnznjFvwmYv9ZWGJe2Z3qjSh5m5SSuWVCmxbBQDFbxv6Z48Dk49y94Na9ZN",
  "key24": "2sXaTTGcnMJW7Y4u39oowbNr5wXtuB9UsmoUkbcbwHuEhNJJzazihQhs46bEzFEJGJKYUxt9KZwXM67znw1y6Fsg",
  "key25": "2maYyqzYkmTqzkCGgnfQ6k6nTYeEoqpFdRgNp9Sbk2QmEnu1pjM6PJ2DhecHqC5p7MDVLGRCkHPMnnkTRKgo3yHR",
  "key26": "2NPk4etLCAzaCjDjZRmCjZWezdF9dEyxTiEQDgGqP9LrBaCYZjuWZXwG94HB7eGVTbXA8fvXo6FHyyRzuoypKJV",
  "key27": "5fusFKPrQkSqGEXCEVmyqhejdvQ3X4EfagE6NZqoJomNGoUDNG3hPvPGaxrynvqoszewdi4FxYqsLp5r1RQdrtwk",
  "key28": "3MCQkXwLqZyn2oe1iDmmqYNQr29xhFKo5pz4VJo1mWzWsTHMLfmo6DtyW9AdfRqcgW7zXpcmqcPMW46VngUSvFFE",
  "key29": "31mZuWzgRcQPPEUTuyiWMVfMysts3QRAKNYC5KSSCW3MPYpm6GDPKcfCFB6XuAiW8a9gkejgQqYYA36BA7QPoSsB",
  "key30": "7hUe2nx1agnuckwJMeEvJRxBKe1MUMS3bv5H9CLjgWCzfCHseShd4Y1nUmQxoNhQmLXDhA1jt1FzWDXRqvPnMcr",
  "key31": "ebgj6H34W59pZ2xa6dDewu6PNghtLf9sTMGAMdpAdnEJqLAamgwdaNZ3Y34qZBHzuQuX4Tuonimsxc8khonzN3N",
  "key32": "2HAJbZk1KK5QTE7nt99uhcCG1XDcD9shdXDEaKwFVBCKWgv3yHj3CbeRnJduTProkib9j63wjpYcF1FZJy452FXK",
  "key33": "tzmHUhCukHaDecKXSGwgPD4QBLpHThwKxc5bVj4QH3DsHCreq55s1BaSfZUCzZeMNxsSyLWMR1cbnzmvTzGmdAC",
  "key34": "HFEoHqfhwUnfdh9gfBmN6zzGrJw4s7XfTZHzkBy2Ny1DXnnyMp2aqssA9S4eaXtURV6Gj9gWjRKaAMcqtKCKwnu",
  "key35": "5zUnU1JTKvfpz3qMmg2DQPBuYGP2EZ3xqmQL2fWDb1numiFmDHK4FGyu6iQFKM8FCjBFLoRiPYWhoXgkmqdWCX9x",
  "key36": "45UsyEtuL53PifjkiuEGS5ETh9A2E6b3aeAkd4WqpmfqBQD7BtkjEcLAXLxoCxu2wN7JvYB2HLbtx2Me536HxMuR",
  "key37": "3Le5QidBk3uBDiRLpLBzaB7aZyUtLoiqhNB258XzR3bcaBPM455Ds3vUq5Q6vNdU4oXDiJzBYn7AqA8Ew64unPC8",
  "key38": "5ytUmnLbA56iVknLWanRoFq8Wch6EsBs9tAAJfuJUfgW1TMdgASbm9VCe2e5fAoQh47bh8Mt583vz9pxM22NkJEo"
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
