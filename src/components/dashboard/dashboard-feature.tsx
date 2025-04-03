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
    "4R522eNgkAzFC9ffiSosBchHd3XJgtkdNfxLdsyKX38ebgv7oG6L5jArR7a6hF9bt6p5u454xx4atQKQFeAazn1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xERBycJTcxfBZHqJEohPAZkMnka493JyS12fuaZdvgxMXxbfY8gSrLGBGQZeXqfPhzVvrtb7mptJypgHK5LUKuu",
  "key1": "o1xQLYqwyFKmmkDuaVJ5jtekFo9KzFH1u4B1PodgXFk7jBgeFBRbgJe2NS9w3LJpQSBaJa8miH2wY93UoeQ3oK3",
  "key2": "6L67oAYJhfHsNkbmubzC2VvQWKZMvZW1JQJ2tWqnxpPvnA5ECPdeEQTB6Uc43w7gXGF5ySCq98LgLSkSpJcqsfh",
  "key3": "jvbRDDtvwhXYBPMV8Z9bHNK81PN2eYE9kV1oGeMjoHbYAyKh7UEvc6PRMguHc6g4bkAhg7QrcxxUKKiHLYyp9ag",
  "key4": "3qVeLxWJSu75oJzbhrupnrZumARXhazy4sA8pJ2RYHfT7tq8VfiVEu4ac27FL5E5TPbomDoLyYRgWy3xUDjAxw97",
  "key5": "fYTUXdB5Nqu3XMNFQayo4AmoiSCyydd44ovqRXDCzC3rZcQHcxXp8YCNckfNxqCK3QrYSoawDcs38u9PD4dFhFh",
  "key6": "4H3AqdGeY2ANqqXjCHMFdhharEzYrcNMMGkDoL3DPh32z9i82ZTUZMXEpTL8HUZ5FVmnn3rgpVuAi9bk923o8Mfn",
  "key7": "3LJCjukvy2dzVKtji3GMZHzypCSyepyv3YucMdkaF5vcezNjGw2Yy4JR2ATm5nVjWMcbnxq56fBZNU4EAozgA6nW",
  "key8": "5cGMBBTepkNptKTXncZh7sYBdCdzKbHibnpe8dTxVTthQRn1NTxxBUXv2aoLk3eBMji2Pum2QMvftA45cCKrWqEe",
  "key9": "5hxUjqx2GoUBhLdaGpgXdQBuFv6GL4ift4qH3C1MDonaoreqm8DUsmBPMW8NMC3uwk4Hk3gKwqkpSFbdMVNvyYNX",
  "key10": "4RtQEszqo6BHvwuwvzW8a1ZwTTZ1zfmVmpTGxTQTznK3VuQF1dD24eyEzESUW81mbgoPkE6EuYiMWsPxnYc97TPP",
  "key11": "4w3MMnSNETq3hA4GiXmqBWCDPnZeaFZUASmTxaAHn5sprcQFj8T41rUypKNusxfmY6LLfDV2x4zo5NkecT6cbqTi",
  "key12": "4n45RWf5aZCrRHott3HhsVABeXWrECW7yuBhuDB2NB7RtUXzmR9vxCvtk3Dpatw3o4NeuH7GxDyrKEfUgsnis4eR",
  "key13": "4sNfcH6LwZmHQEtH9kvjWEijkwAJLwGZHQfeKHZnR2gDGKo326pHGHG9FcZF4SMBox1o4cSw728KHLNUQVaKcKT7",
  "key14": "5HU7aDTDLwuawjrfmk6A59FWm6Csq5RZEwbkPDLNSmSuqZnEaA4EveKrBzhf3wHavvFEBYZcTKh1kjTcxCzJBwsV",
  "key15": "3jko1zYhCtFnQZRRqFpTg8TszQyShyW1v9Tsih4AE4HB4KcxfZtcMXjW7GHkoEbJGWjH7X5SY4hZgPMwHsuHquyj",
  "key16": "4JtTZ2QX9RTzyn6DFVWNrFhjT3gEvkXJEL5nsRrSUE78wzV7Ys3ZudDpKcRWwUDWCX8S7HUiMYpPikCEbMF9dtqq",
  "key17": "42LYt5HJ9Lar83Hd9sh547akm5v2E1yofnjvYcdDYZ1SvvJdMzvvmB1ERRmJaFoXVhyY8XN3kMDaRL7qCZnq4a6R",
  "key18": "5D8ymGY697uGSg5dQa5muQ1cE2wPXYuJ3otLMHTTFnfDovYeNXFqtrXSTtMf1vJJjUw8YrnxX9VA9pBUXpNgtn7Z",
  "key19": "64Y4yDem6HSYU8NBkSSRSJk78qNCwrdQjs6AB2ffmV6PmFXHjPFTG6cj93js9gHUcsKtahTbUBBrjHetZUAwdNAc",
  "key20": "5ffcUZUME9KB4Vo7ao8bwNpZjJVamiwqG9y4frw5hv18gBmJPYudt7FYcCN94jBrftdsZ2rXTP33aUkpLDfY3DCA",
  "key21": "4q8j8boY6m5QrBDfhd8vSXCV7agQBSSwr6zmCGa2VjL4yy8UC6n7bwbK4jDEVb3ufmwT2yUxqVni6PULrvYDpiEF",
  "key22": "3v1yrSimSMHgaCZWTZ3q6FzGxbmiLdH1npe7MA5CRKagX1HsuHiS2NxSSQLQKkce51AtUw9oswjLNQbA5jo1v7L4",
  "key23": "m22vXaEuDqkK9c81nkajhpXhPo63Aj7kCA9vixA6nGXNP5rrZMtFdefbKzCZfGvvn8ChuR4jubSwyXfnuuH3yd1",
  "key24": "4fiS2cJFZvCFsKeB2qHYSJgR92yH3RMFJRoLcpvhAXbeWnzi7wvjbsZRdRGUPYepxkdNRqudL1MQ5v3r5HxPgTND",
  "key25": "28cra2MmNjP5x2gqfwPwJVaZj5ES8TUJ9E85HVuuhvaDLm1P5GW6vZks1AUKKDh4HVwB92N7vbeV8i3xXRVCK1R9",
  "key26": "sMfQYKyrYa8bzAkTwgMxWZxyoVZ93XLbZ7aGW6qz4C8vK1wDP9E5otLNJE8xzrmSSLtGs2jE9WX2BdCPndkJyhC",
  "key27": "W46EXrKGSSJLF2HmdZj1oCxGKyhFtd4Us4dzrXBCwu8ce15aGH1Qqc9ur9y7LPuqkAGBkcfN1eDmZ1zSD5UQP2v",
  "key28": "BpsGSfjaWTvYWUYmgL1i9jZanaeYaym2CFq8dLTnVZcVVsgR2j6f724uFRa8yNxzXQ7pvVEAMaNRiUFC7y8Fo3r",
  "key29": "eHEu2cznX5JMcyP5nYoWoTYfELbdtKfEzTTNouoWNxhoZpUnsCX7GTtLEsnXRvozFCHT3tSSHG8FhBFBQjcWVEN",
  "key30": "3Pi6n91c6MEbfZUnd2H1dP7yAQdU3JVx5qLWTp12LDKAutdf6RDmhBVR4xTEM9W2TKzyvwVTgGsSwxJg3oRfyq3u",
  "key31": "64oBsspg5sK59j8DakPn7VxNK49JbCFfVWwBZQ2jzpTpMTWbmZW64QQLAznDpYKkvqyEQcubyna9BL48xLU7bXt",
  "key32": "5uBheWnxKnfzUCEu3VepDB6QDLcY3aNmvAbMur6Di5VP1cL6qks2uMoBfQDNrgxoqzeACX9dMyxkd6sftF2obivS",
  "key33": "59zozsyKBm5spf5pAfbzBeMHxQPoPY9WG7ae5jTgKjztb7uBVDimmj6Ce4Wmt4yfHvhh696DdsT8BQdYS9TQPEeH",
  "key34": "4dSkDbsyYY5Y4M1qzQMgFC76TNBFixUazuD9rtimTfotVi2n6HtzehjGvVsHnMdApL7rnHdUxUmz3eP1u2qr7AxR",
  "key35": "3aPFNksS56Py8yRDJHqjUJ6dFYRzXioYaZDHLnWzFwP4LVyvLwrPbQTdbgpJVaeJMhNSpB3SQjyfHTL4SVeg9D1d",
  "key36": "pyE1B2R14ExkMRLYGWGmh21k64GPoe13eS5uXAKTWpix7Zavv3uKyMPo9pwUSFZzCN8ZpcEkfNNfkigWZAVoZ41",
  "key37": "4CxMyDHWws1Um9x1e4c3w86U6fRqSob3Z2MdsiDQgF7MGUgdJ74wJ5CGvnuXnvba6oaBEt3UqFjwziVPG2Sx2A12",
  "key38": "9DxvBsMvtkt2JZGJmiAJ3XbJKA2QannkwWdcDhqSZLKdoZMSAVWk2tnGL9ymF7SXUjoEQeoZjxZJLCMRCJSaGJa",
  "key39": "wy9AYMBZVWLfvoGxyZGxDa25phZztzarHyt5M4joW64JppUM5FwgvmMW95mCKeqVRKXFyXoymNTazMf3i3p7yn7",
  "key40": "m1595KYCeAr3b5Wwp53k6wPAP9WogiE6H2v1cS4V63WxvG1PjCdd1RyDT6RvcwdsHQQfBBF7coTb5MrUiFujqzQ",
  "key41": "2LQzPztJGJTJ8sMBqXwPekwqyxX3KWixPcAC3vd8RUrmad4KB4Md427zUtHvA8rUyFwMsKReGukjuDUEgkd5QZ4j",
  "key42": "4eyiYK97iLB86y5iTMZacoZUsY6EXiA9GT8Czzyz4xKJkxUFuBQhcHXtRSqqEHtYLADFMdj7NQVocQj8uKDJyZ8w",
  "key43": "3Qy7QiQmdXWj7LTU2hTiHcB1bzNma9CUtgB3J2kMEtiY1hE77gHvpVsxrB1Ws7VLmMwxAVnF5Lpn9swiqMnRyek1",
  "key44": "34QqPoKEEGF29BKt8CNTyVBqdi7Ly5Unhab42zYqRrmDBnT9TEjN6TzH3p5WUPdqTHXumTFq89HE1pDSji8DzF6D",
  "key45": "2iW3vQeBCxkAyB2RypYAuWpGo4oU66Vjagaeu2jZnnFSpncY7FBvyLSkSXyB82qGXTMgSscr7JKbaZsyhb6dbH7r"
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
