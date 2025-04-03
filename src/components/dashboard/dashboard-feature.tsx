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
    "3Ut9dRKAKEeaNP6QLfFMBtEwbWWSyVLcjVKY39ewKJNAPjLk2QbBPPdLvLzbBbwL5ijUF4ik1GmZYbT2vCsLBj1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i3yvfdJeFos5uN5YtNJzHcqecHTYmBLYwzgAL1ujY6JXn4wX7WSChc8rwwZf3YTGJ3NuFjRAmEB59gNBYuQG3vb",
  "key1": "4viF7mbgC82La4LRzLUGcuP459D29h9PuZjobMjMMq5xbrKHxDwygKfHXGosmWT2F9FiLECx185n8AmWxGPFfaYm",
  "key2": "449F61ZKxGu5UahoCuGowiX45WMmvi7L17YGhLWov6Caqto6joCXG7NgXbPzdFyPGnDgrB9JEK3MJ3XSyWjWgYbt",
  "key3": "63WSq7rZymKmiKyr7fAsAm3e2p5Vo7CibhepX6dv7d854QZRWMXHZR8KH9F5bruqJXfsYy2prYZuMmcEuRuT35Sz",
  "key4": "2eT1Ut56g5zSkTDMPsANj5iuPJSTb2f6kiKr6PNnh5paJg1FRWSBuroBdsdW4A4z5JCPC3AG7oGU5csegw6Rf69k",
  "key5": "UEX2XwKE4xvySujhv2MTmdHjgi3ubWkZYbH229iAjvvCSYrxtSkxjFsi4uN8aGpUXAotDqfW2aHRKAK38RFCcyT",
  "key6": "3E4mYd546LRCn8GuRUSNQj7yb1cxPagWrnJshWw4toESo2S4anjcoZZmY7so13JZ7VQ32r6YkVXYsfJqj7Qamw4D",
  "key7": "5zf3KjW9Uid1Hn7924YE5LSGj7y71ANLDeesxtgm1EGuAH6n7brwBAno6UUhM9fTRNjRcVfQuiC1SDH3PLaL8kcM",
  "key8": "2MsCjskycMdxU1nrTH9qDUNUt63wWwUrwKatCM763hKAsD93fzHVSzP4PbwVTddWA5isEAUp1uvMgM5Gw2tPe7q",
  "key9": "48AA8aFVTv78UsBu9WWFnEHCStDhLvTTcNw3cqQhHfqPAR2Bc2aRKRjMzvCjf2fds31cozFZSEs7gVoL16k4xpWS",
  "key10": "3sE59MrJk4Fh9PbMeVbQfi6Z5Zm3oRRxAo9UZ4b3QhAf1XNJ6rPsQD7pDq1J9zxzbRkksaZrkHbxMR4uFGXP9iZr",
  "key11": "muvbgswcD423MPSrgD4d3HL4Tea4ouUrtXwjfwrcLngRnYA58Ac7EkhWseVygSpTyYnxgvLcUFJCW4v2Wdvux3m",
  "key12": "47S4A8WyM3b6oFX4Y4Y9SkrnadBW5XZUVj4KxeRtxxwCESNUnK9gM9LuZrGk6jmcsNZnUH3nytR5x4RT2bYpRTFk",
  "key13": "4dgYJCjEFHdEQsbzxcitpRQsG5F3CfVsLk1GSinTXxZL9foitRBPDxW6UGFsRszzL3wm4XseD2bHtn2Ct3UELcuq",
  "key14": "47DdBmAS8g2CQfMSJfVCJTZ3GAA97PWDdvjhuHskcBULdQAQJNFDmYwcmZej27icHbBNs1LyGdGxpBcWqMhHrwcQ",
  "key15": "PM4gNQS6rh88zSq6yUsGHQ9eTRYY599x953DxgR9hpRVPGvKNJMvoL8x5uMt97Bwr2vgNBvMUsmBT7VAateETwA",
  "key16": "5cmkE4XX6CD2DHofEMZbDpFEMv5MhBccWg4r4HUpLymt296TqVs6GwpwgSNJoZBYDqAGhYu9ZF1yS4jsD9NaCocQ",
  "key17": "2k2ZQ3otvR9eEmvSjDpQwtJqEqBsKh7A4vryYCXJKgzwbH8KoRU1Crk9kVrTKQgKys8Uo8zyH8QsEkapcN6NeSGg",
  "key18": "5wbfi1e3FtHvmybu3kLEHX8kPYhczjY99q5UTgYhQS2W6Wr6M76SHe8mKkxkb1cE464fA9w6qkgyhaK7WLC7aMMk",
  "key19": "5u9pLVGLBFyqnQQcBHj699UjK86AESSxa4Vadx8cgp6fZjQ8hthyScusDU56LhS2bVsrvxAvghtXSBBeRiWH35CQ",
  "key20": "5FiVCtgajnK7vWbKVESkQdiwYpgQ9MVLAdEzSW5X5EqDT7EdywcJgWtxm9APGaC1pWjvbbW1PytkzvEGM9vck12v",
  "key21": "46yRRCbXhoHiTKLQtrRbBMfWFPX7duJiE1tqZpkuQSw3ntPCc4cEvTJ4RF54ndDbeUeJs6HRaTXQUQ4NYEjphN18",
  "key22": "5i6RR7iqg2rqL4bLRWHFoXYr4Vw3PKSjquJMxu2oqYLawZGebWoig5bxvNRY5mUVT8pwwVHt7BhvSx2BxD3ukTUi",
  "key23": "63PFosvaEZmEsp7ZxADBopwqpd9Dv1TVRPjiDviAw4cizZTJ9dDahTvyxyT5zZnmgEfKv9MtnceFyx5SzRcw8Wdw",
  "key24": "3sh59FFT6dhgaTgHsj8coCzjgkvCWsHtPockgjp7stvqnsqwT235chHEQyLCax3kTUvgY6wN393E69ghGb1a7VQZ",
  "key25": "39HrpXmU11ScDZ19uHqxKSyBSVRDUKhU6FnXUTELxR486WUAdxB4r5WxnSELZ8yZMbmp8NKyUkKEy49iKbtmkxYy",
  "key26": "2GZ8SjyLNPEe6zFnLwMV2AWe8RUKj1FaP7AEB8rQ81AthX8xKjCBVNgJGzEKbFtpz5QyhVCieWoZ7dGFrcqXR53R",
  "key27": "cBHiBcesTaAW9LMjjAEosUyVec223UjM5xK2py7sBPMX6Jkk7KkkVnzZZxdYGcoMPeTU53LjfVrwX8pz7N5gnmz",
  "key28": "2TqeW22omNogwtegdePvovbk7LCVPJHuMFRyZJGV1v1BmKg6Qn7PYXcQnTecijDcbFDvQ3ANDtRnH2hbGe7iXx9S",
  "key29": "3C4yCE4HEGukCDs39MCsaXCaLNcHfmMEVc1LTbNuz85yDapgmakZgHP3qhtHkZdp7PPWfY6SBtRYnDb7Z3SU6gF1",
  "key30": "gAWWrk3cP9rVsEedPYE5w4m5ZvkS4Efobj78VPHYroYoGsHRuxezHuTczrTdhShEqiuNtPj2xUaxCNoNATbcPhT",
  "key31": "5avaGEi3qhRkFxQhJs3Wk7boQdYPajPu9FbfFkreR9Qkjr2UcFaZq9JeN5Dz7iUCfPzJi58BDFTmfXrNCGC265w3",
  "key32": "44xMoAPpQGy7TYU7nQKPenRmNeZjbshq8wqngWhGzaMBUgbeXqetmKde2aKFdS4w8vVYcKexKX1VgzwPQXSmEEX7",
  "key33": "2Fk8Tuxiw2sMw3zJfrY1BXWuW4gCTf6ZdZefA55UZpEDdqhBd45V6o5gfF58wMaQhzjxE2hXET4aiZ9k6jQV92u6",
  "key34": "5Jda2CmpziKtfGs8s9JK4uVUNyXC4LdZ8M9aTsZMdQZi7N5WzyUbnV6jbACKKQh4W6y3EQgkAWcej1WVHgVPKeDx",
  "key35": "DCTWD5JEmwayyhxKn89MuA4SVfmRf9k4pMN8p4DXJ924gJ46k4NPjoo3qGafRwN4PP6qx2rH7ToprvBWrz2FBhy",
  "key36": "1UUGCQoRtkR122b9GKqa7PBwnfNttcYvYrzYphGi4Mfa3QzwkjbutEt83LvcRGtDidtHDDH9rmxe4EqfzDr9PDc",
  "key37": "3fnxq7FKuUUGVwvRmvHwmFDqnaauafC7FXuWxLEjD3NmKib5Age3KRba8FzrLhCHAaqShs62S6AEunod42pgeXsd",
  "key38": "5n6SqQAchsY6AqQh78GAf9HNaURgLuc6XCb5bMS85fVDmeTfuN5nnqbnsvZQgLD1P3bZhXzooBRXuLpQPqMvcgdh",
  "key39": "2NFwBVwgEhAuTVgfMu3YSg1GMQTpBhVbxSf8qwvrC5iXhh2eYdajvUHVnhra37VMRHaa4vCN45AWhA92DXDcTfQR",
  "key40": "toZHAovnSs6r2DpBv7qn6sQkdCJyDbW7gPKw8KEtMXxiYfKCXtVAEtwVJuLzBJe1zyhXoRavkFZRYDUQG46mJAP",
  "key41": "5FkeXgLbB7cQFYubxqFhhivMza4vkxu7iDVPoYBN1acCETQ7xNgY7xg6MYrPhmio2s1AyjHMkjRDbvG6kNc4wsrc"
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
