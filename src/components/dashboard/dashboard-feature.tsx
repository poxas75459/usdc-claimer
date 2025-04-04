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
    "4FFpHKLc3oWXGEtpmpKhhPKzomKEWsmbLSM8MhGbYpo8ivnLvCMenXmAEdHS7S81W3xwcnNxL7kXpohT2BPXqmCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rgwtEBxsNy2B5Jzchp1pmVuV9wEEARXrjdK3qqEvseHGFMHwu5pKN9vve7FTjQrCNprtgatoxFvGam9HibWybGG",
  "key1": "4ipNZYoNrYJBM3QGqLGMpbcqSuMBpnFGQvkmpDV77LzH4QVbpgxciXoCr6BZtaaNBFceu7pHDEaoCiDXuZ9eWci5",
  "key2": "4bD3d9YdZKUx41yTb1yUZqvR9eJzuUdcexrBeJgCosnn1GBDXN2AVTdCPrcbHED2dtEWEFm81dGt5yo97AKft2Pz",
  "key3": "4trfajYjVQXJAqo9P7nfFcf7AwtJeope4XMwkZ51G7WTcLDqQAFHj3tTx9jmLR3RBix9Xq8TxgkjfBffHNhdHrGz",
  "key4": "2prbCsU18uJ2q7NPgLUnTd6TTTahZm6sDHXP18osPDYsZxewURpNBAmaBBD8qcA8mcwG7Eh4CtdBhpqn7A6xzrRV",
  "key5": "4p11Surdxsjkm2dHspD6NRLRmCVXTG459zaG7rjVayK829FCyLDXjHVjzjBmKPGtrMv44q8WEye8Squmc3fDDcah",
  "key6": "5zFpUbpeWviyerCrDgH2Avu61eScskL6ZCDXfk1gVCWD7AjixhV4RFgHnzSgrV7GU2fTvAxSCTFM7Hffhp8DPdDj",
  "key7": "5Sb3EJW1ZPN28gbx1CsVSdErCEi9qdquBWLZmM4Djj3mVVTaokVFogWikanpWKtHom6M442zHeiCSfQnb4o4dgJU",
  "key8": "3nfzUAhJSNnYEjwVKzZMaFTPQx7bgk6KLKSJ2kb6gnFTTfauMndrW3vvKVRyRJeAdDHqHkS261h7TVJwWFLYz5KC",
  "key9": "2CeM3PgwC4LUZC7nMhdTmaRFbHnxA115Bzvf2WMxppKZCiK2nU5NvRy4HxSQ43Mm2dRcFY5kLWRZhppquzkAkuWa",
  "key10": "3JdyNURsejNYqf8JpHcYyhNannJreitak5dnFxDxGwnR5YfhHCsb2FzoXLhzThXxVmKnXdhoiCyNFvtwJUkmsFwG",
  "key11": "33HinLGsLizsoHGGrjP5Y4RfLmo4gN4ivJMmXPjSvg5EFFMCNSXXLbMe3ro2xJp4oSnY2XVmkxNf4xCTjtE3vD8X",
  "key12": "3o8Z3e35N5XUsa91EYAqDViKnFzRLgCDg3SAt1qZg89u5wFKSVzmZ4hsvvqaLbvenETDxUG724U6ZfXHqqH7HXvD",
  "key13": "3RAAnVufRDzHMWQVFmpVWTuRvTKKquG5ioCg6UCbRmMPQYyg9mbZC4KTmET5Ud5HUA27wGyLibHJw5XkEn9xdPWd",
  "key14": "5M7UPj7uhvfpYJ8eag88msEFfGEKkGgmu5CjyC7qfgfA5sTGNeoDUmCV4As6eTYMECuQNdxyfJS9JuYeUud8uzhV",
  "key15": "24F7rYx6UbjnroLzinsudvnBFrdMY3yMk3m8Gq6FDr3HY8Paf5PPHfA9VnsECGDviGnneZuKTVFjhTeoQBh3PD6p",
  "key16": "3hJuEHqaRJwLF9u2hxkyHDS6KbnXywdiuzAEtTAmGUkXoufQFdTppPhVGBZToti6bnANMMZ1aQtcWrbjDQ3Lpzre",
  "key17": "2FR93irHpuT77W6QCwwSRdH9G2MQeFhhzV4rYQgLU3H11999nShvHLrRXuCK2pXfVJ3CkBCicm2QNfWSxJq3Fpg7",
  "key18": "3PTKLGut215TZrdYTNXgv9R9Qyw8KdaSow4Q2vzzzFZ2oBdvfFreB9UjCwNjF1m2dBoEnxSFGHsCzuTFuPVmsPMt",
  "key19": "2cjQF1izQgKbYjCHW4U8ae5FQhSTWYCWBZFQqzLoUW5ozFsYAU8qBK2QZicCxZ333MmiSGhfQU4RTct6izCco6Ty",
  "key20": "5fQjc3R6HcFbnnJ9C4At4qf8waUG7gAJWeZPhj1dUENmDKQZG9e8j3ceTTiLeWevvoTEDUyuM62eJVyaXCE4WeW3",
  "key21": "5SQjetx7mfuENYyEjKdAguD6tTfeGrBi3UWpNjq7d8PHzTXnGAMz87xGu2F2xzKWuEijKHTMaEc71DHJ6TVh4eNK",
  "key22": "3k8uodB188nQNjxxdtcJb2EwSfSAvyBmVfUSuej3woG83a3Jbrg3rfy3Z9FyUEDrVTDYT3ZLLZPmDYoXbi2LbKwc",
  "key23": "4sfzbxS5CG2PVmZ7ejEbqBBcehfTVhtPGs3u21g1Fv8zvgCAig927BjEMs7X2xKjZn9qtQhVKf8JSxhyF9JmcKGh",
  "key24": "5B38jci8Zt7gzfNX4J9zYZm1SsCiddVdyxLTtdw6fsSnyAErSk5RQNLFuhLpBuCjgMC2gi4GWxqipaMKfEdKqddC",
  "key25": "78yV7hgK4jFHyZt98n1uxZSDvBWBANgzde7FTBVXnV1h17B6twMfxAPMfWkRk9fyDPq96hu8FFn1kr8913wmJLn",
  "key26": "3YmtBMr8noijcmKgsJDEjD9L5eKs84WesT6Frq7upjtSH4CvriogASDYB6oa1iAKhhMsLcjymWGDcsceXvWeyAhn",
  "key27": "27iC93KcUdQgYwLm6Wd9Z3qAkaWZqcBS2FKVAtxj8rg3dYcnJcHYrw7Xs63BK73SwLuUEEWAr6PyBXFsKnYux4ja",
  "key28": "4dNeTWQr1kem172qt6oA6uAL4SocBaUudkecoY7CrG7sEUPfxsvY6y1N91deqmweM8r8ByikxScE7UQwGhXQFh16",
  "key29": "3eJjDh7BPGTGYvG5AYzjHpLJ51DADDB24DHQUkVjqj7SB7X7UWofZBYHvabs1ZDcs6dWr65b9QKGjnn4YYK5k8j7",
  "key30": "5ncAGJutFUagvZpRYjuZUaBAbNto5cvPj861xXwGWuixussYgZfFAbiZeyioV899XtPxhspvZyQKPu6UjzvbaTY5",
  "key31": "56dtHSFvZ6cDVHJqZ4fR4Romot6uCdRWVcNa1agLFSs5javjynturZjmuEFbMHtVesz1kzdQCPSsU3CmSDuHig6J",
  "key32": "5UiT69QtcXaSBQ9XXpq9XALBh6YPaKAk5mH7ozS6BCsjeVJwAkhF1JE3ib1Be1JwkYQsoCfDtpFVjqVASyE1ArNL",
  "key33": "WKDTHrkZjm9twUsECvwJ9GTkTUCJYmDLjsCqp4xTh2N9mDkhZLoB2YkyZiqeWEtjj5hhAMa2n2cfpuef2T6teEq",
  "key34": "4wT3CtgMUJw9UoVM1d782A6dAQyUQmTB6gwEFRGd9KitojgYtSYsMyHidtESk8mtvrCfEQKKWvqxjXaXutyE6kMQ",
  "key35": "2MHZejM5hwjDPUXkcxMZ8SedrkG7ELxAfzfWhDoAFFuhXedxmQHKS4ka2R2dpDcB7pYN7e73YK2cYufRs6ZM9HCc",
  "key36": "9Am3i5kkzvzYtgt6eatT4FxwartTBwGmBjnsgboCHMGu6BnGJ6TDZpuFkb8Gks5GCBULfL7MMZjSJku9aayj5nK",
  "key37": "Hqj4XrBNBvGvJunvYsbPvfZx2q1hjnBjVdt4vT4uFbZkQU7MUK35KBHkZf8L8jGZpQ4feDgSLGDDa52SL7hgVHX",
  "key38": "5H1ccNJqMiBgjD1E81oHJyGHVbmnYYfxA5GfRtamr3NhxBRzLjBgS3MQbTzVsMdixGHWtxU6rznJpx4UrVGwQVxM",
  "key39": "2gXkrKwo67CDoR2WZvW7Mjt5GEvSdouaLh3N7uyQKBiXBRcFZtmuBUBcMjbrUp6Y7Xdj7evg1ECvK9rdRH21h6SE"
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
