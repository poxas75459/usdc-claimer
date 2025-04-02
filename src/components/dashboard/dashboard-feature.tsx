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
    "QXnhBjqDQoECU4vmPJafmNyRs4q76NAUdwQebP1wPj2XvxxUAG5Zw7hDKdaggRY9dDh9aAD6eyKkNgaVf49MjBU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FaGE7irpsxQuqP5S3TxZxQTAzJhR4StwginUaStkqEHiDSc1Le2die9YSJ5rR82CmB4MZnmb1VVCJqkybkzd6hK",
  "key1": "48NFHWarHRNhHxZ9EFxPyAhJHp1fNng3qSh8sURXvtwY8ugXJtMzvKFJDhFUsix45NBdS2W6VQYqxhLraCUC75jS",
  "key2": "58egfGef9sgVnoNf9zE6LuLw2JGPBD6TAsh85AMisLgcbFMvnWZrkAi41y6xXTPAGL3D1MyZwR8SsXK3Hju58XFm",
  "key3": "3DnTsENCBzG7aSqzH1XYHF3quFh7uWHmPfiYWkRAnAEEpwcwoiuWeqyUvbDwYVik91gWWVBZq4bGfLvmS8KHHP1H",
  "key4": "2YboEDHDZWV62tsSqusHKPH2MMCyat2ngXmyk3co9gagewQRCiy6fxGEEF9bJaHfthabiiqC29yxGx6Q2bAg27mt",
  "key5": "5wCe7q14tT8gXvtzAPWhuL4iGZSRQXpSoyXHTX21ZkVRSiqtakjfZsdnW1UxidLuBCiRmuaFZmpHU5yGJD4sBasE",
  "key6": "2ubeFbRAe3cLHa7HjPV7SzoBrRwnVqd4M9HwdfgPthEy4u8JMSf2sdyStKAfb2mkEGY9PYUj1enwgqar7Jen3cvJ",
  "key7": "46JHNjMt6Qus5C5SF4YyRMXgr7YZhbmEvJ7bBM64vGyQxGHLWCjJQsfEtXKHkmE9c4MGsZDZeFeVm1YUyN4xWupU",
  "key8": "3N4sUWakz8ikvfY3wRaNvPawtorgr5ThRFBv862MpEA7zuWbxyaoRzF38p357NzBTMDAGF4mYJr7PqEE5hHjn57L",
  "key9": "5kGX2p4mMPHmShZSzWY6PwGfe3ENmiMuRaUWESAWAD2Nxk1FC3wkctEuQiMfUsR6SXgjdzAfFigQYxWSnJYdmyKS",
  "key10": "3RyKyYwQuPW28jYPrSpXSbG8KXxaiKmzn9aKsuBdwnrsTo4F6SuuKW3haZKoZECUArLke8k6H9rXmHetq1hozhc3",
  "key11": "4Ddfb3z8LC78hoUfeEBmHi1p1JyWEtz7vdxSf3DzJVnUBdFBdT3zdzrT55XUZps3LM3bQYxtYsTMM13NhXjmVsC4",
  "key12": "4uisdttv45XLH2SHtHXX12haMvcqWtJfN1y4sGMbsBqdDYjCvyW4sr6w3kPYTV5Pc4X3uvJLiNNfSCmcWotKUqSz",
  "key13": "5H1bGNPymuhFDe3HhWJnnTn1cd4pLL7r7aEBFcx1fkiTEthNZkhpuoBr2bTNuPuLW22YAmW4qwb5ydDathaWBdbE",
  "key14": "T6PFkUmB1yDbyHJFBo3is9AtvgXYCUDxGwM2ppoUeizg73MqnrwNLC75GicFnMNCLLQHJPedefFqjLTxU68gFJb",
  "key15": "2eRVHMV2qmDgpY3JvtscD8DRm7jb4KYmqyVnRuFQK8iKGRxhzL6c2Qd8neYQz9VXsCuGHh7Kvh5w36PSvEgVbToX",
  "key16": "5bosgT8RuFVs2qJ3p63Yr5psPwGjWcqhzy5HYa7jLmdeUSAK3H43QALuh4FWo9aJ3t3xEoY1jV7SnUx8TWtELoJ9",
  "key17": "2zYXUFLdpkraDgajE5ty74Trr5xxVzY2TxGFFf196yyroWH8rPxvQZgV2iwsfXaTwNXck9FmAAFEofJ238BZN3vX",
  "key18": "43inHRZKTeA7vira9X5ef3M8ec8W6mE9ew3MCNKREg1NaGGW9FzNRzL4fjPvxCKpexycvQG7bd4FQQvsyXN7uK7t",
  "key19": "3kxitsrNHX64jpvAjv8RHqbmC124zQHYwcjS59dceN446eyX1SLBsRoJSeRqGgsUTfpmE14EtAWTB7pA3RbN5mWm",
  "key20": "2H74GAtF7a6mQaZEqer25QgmxAeEfxz1XPuzWxgLkxX9FT4nwCkxcTFCEmaTiHjBEhYfxtMLYHPZAE7wowfNfSPB",
  "key21": "4yNqwYHkyng4AFKAbjcYvFogYheuTApx7hU1NBcPB5bGxHx69jY4senjd9jMYWRYT48BKGv398d3sKoAkdSe4VRi",
  "key22": "5LjxFWkYkzUL732DLK5mnA5kGRAyLhM4StTZ6EbDz1FcdExVRNBkgZagv6YkJuYSEZWJAXACLfi7csnTULfmkPVq",
  "key23": "Fo2pEoB6qVSLnwFe4frXD664KWmUpTdeTVpQinLTVhqYifzmxh9SFRiqNoHVMxVhkY3nNCLPZJdQuSWGyDjXoHu",
  "key24": "5sQC5AvUp5aFTzd9qujAFfcU5u4Kjpn4yXiRcqFcR8D28BQsWqz2ZEKQsLmgoioMW9QRcEieDwMs3X436u1KHNBa",
  "key25": "2fDXbq2N3PmTk6RUEgsqBZjZDExsBDRfAzHGy6vqr9g6b71aRRNEXp7rhiPyxsgUun4yF517en8VwaQ4YZY1GHSq",
  "key26": "XopUTahcKHAGdwUxHp1GSDsCtwtvqLQjorTfRRKzEbCQmcLLqDYtFSds74qqpEkAj3eaM8mx6K5jz4AtTsSjfXz",
  "key27": "4ZAqq7ADvxxHJyViKX4828sGpjkhWSz9gEgC7bta9j9tzeyaMmMLGp7ssrzfCSMLaoP5sBmUshfBchw3cJLEjaw6",
  "key28": "2CTvY4m134mV8BXi4JoqiRuaeSqGW8Rw3RKxVpHt5NkpEEyEoZm8EtLt2mVad79Ednzw7cMsneXexazz9yS6iXZH",
  "key29": "2LqeyQLL1cN5vt9pNpPUt5LaKWygk3NiuCDotFvc3hb7EjdqZzEVPLeyYs32SDVnTjiwAqCJ6N9BESJUuq9Sj1GN",
  "key30": "5dbRpGWpH2A4Ss9oiXSHUujhQf4pzqypFKPNr9cnFJhq5PRTCTBXFdpdsFTnLKUc7XMbwfwoWozS7AF3DpTg56PP",
  "key31": "66PJyMzG313hC9asJqb9MTrbp8sb3QfRMn5v6eTSAbC7xzYRTT6rQj8mh6nURvJ7pkhG6YNoXQzH8hAhN8Ludmxp",
  "key32": "5Qjt5zcBrf2L5MY6LShigbhiLk3kQGKW88sjbBPeJytMaLWpJepQhdJcP8ndKNcbZVuuhmaXpbqzGTeWP8mqouuP",
  "key33": "4NZNZyAGb4F3tBfyNKgbFY4vCWJcoCkKmNMeh993ApybbjL23GahrMppuW5A8HiCSYE6rVMdby7pzxhEqLEj2vWi",
  "key34": "5i3Qjyj7QW2f4EPGLdPwR9eGntx36Px7aEuGn2smRJEtoNxLMfDpKoKo9UnGZ7rv5RGFQHsAybfJuwA9nuTUABZW",
  "key35": "3C7yRUbDjSYFPNMTUEtFt7Z23qqt4i7q2emhEpsu1sHqxNmfpCfK7gbiNQj7u9VToZDwbsK3949uzfZtAeBTEsyD",
  "key36": "24Xm24cFwaVpGmaM7DMLziQCSmtKLQuTs2x8HNqZPk4UrniWDKneDTpWXPWPg71c4YTBc8sYxXvzDvr5qpon2qcY",
  "key37": "251siHGUXStGQfrSvXHdvC5iHuahhHwiL4G6mhkpj1sCrNhgAywP37dx5aNHXDndtQBiPhzZzS85XdV8Wh8ohwBd",
  "key38": "96WXTk1cAkEf8SynXXWJTuv6Na7yo4BgcxNfXtcpjtY4XJnnbzqaTuoYo1sbVzGwn8zjeEKh1ZTGsy6rF6hEVQS",
  "key39": "2vRVu7QA4sjJZda6X7tiPcQ6JPCKgKuypRHZLu5WXns2HUrnuRLU9Y7seGxDsjC3nCcWA3rPi4qBWrfZ4jSK2oUB",
  "key40": "5iEQhqrPXxvsB8hBGLNa4njakquyNegYe1piQNhf75UMaYnjwiGwVpZ95jRRXnniMaHLFA2oHSjZWLy3N4sVwv6b",
  "key41": "3QZkQ8TbrXWPafjMJH6FU2BqZgpdEe73DhDVK6GnFBCA3mY8d39XtMtYx4ofAN394VgXPchsF1bBLe1KgYTzVxJx"
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
