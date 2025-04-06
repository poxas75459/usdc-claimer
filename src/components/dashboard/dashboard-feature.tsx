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
    "fpDKKR19oWJyA3mHfPj426NHD6xRowxpRj19GY2r5TsFf8KYov9ymmqZz7gEjFEdX449KYNHVPdMgUeazUL3zKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jCbVAUgZqQrePyUnbdv7g9tRT3EeAYX4CY9e6pQsaRYqiJoRxu8nshmR528xkJv6x7Cxs2cRsqeUfEJtSYzH4cn",
  "key1": "2rx7mheAeTBFQo41mmqkbcjb5vbYxGBHWVb2DmBYhz6NCSJvChPtjGbKLH7RQzRhdCpAb1X2b2D3azSCktKpXqay",
  "key2": "8GUUzYVnXiUHho8NxQQX8yaDBKGKbkbTAqU2mdrjdvBdecVCuoHwqnWVQPXJtEkm6U89S39QAd3BtHw8KiNsLs1",
  "key3": "3fxfWVqRTzZ1WiSDYGtXrL62pCvrHa4rJCz8dXg1vk1F3sdJpfyJshCuNvfMtmnu8XSuqBbbXnv2aKj17E99fTA2",
  "key4": "4zqMRdNKbM3wjxajkNuNT3qnU8qimRG4vVscFVGsZFAWJvhpcajeQxwrafk3znJn2nXjsN2L8GxwmFfsqYt474iB",
  "key5": "26t3TCLxcZ7nekjsi6Y3CvyVRzk6rQWmKYyyNuo3Vo6o73jhZjzxjcR6mEeyZnFVZ78FG49fubdeUDNuLzFxViui",
  "key6": "2kg89WbjH8jBHGT4gUCpE35f5LR4s5dQj3cRRpkraoceYVdAGmD9nj9EPJQsFqSJgNxWWZ2RJjCVDiw8mDtCZTTr",
  "key7": "4VrVmdism8YeqXbYkNuyMDyXKPTJZnj45KsgcmgyccWQNJSfLyLP2bkp8n6uvTMHv6VtdD3yNKLnaZ5pDWvJXfLc",
  "key8": "2T8Wn4k7fRSfXqXUqNscUNUS9aN42zcq9krnz63V6aFXVoGf2v3PMki495jBskaE9h3HLXFv5NncS7qdw4zCiiax",
  "key9": "3VYpvsVV938iYUSyqHtFPTSKwEPPhK39VB6mGmBAVG7qbSnxf7C9XoE45ZghXX2xpmqUiiUbB9ogmmHkwei1m7iW",
  "key10": "5z2HPCYehkFjHkGW1YgLgfxtALRXmmKvJBPRrjm14yBSq1f8TehiXCG9mUW2Gw93BhBfPdefsAyg9fhcx8B6EMhf",
  "key11": "4NFdBL3eHtfAnSYMteBos8dgdvvZZYwQmRdgeYWzvc7uDV42NrdPzJ9AsJ9dhAszVXnuFbdKqLi7tFQ2xeg9XnzF",
  "key12": "3pokhRjphJ9fVpcmpYbbAbr3Kf6zK6JniQy2owevR5AEyrmPELgpnRDtLpK1EeqLQyJC6oVScHwQasbQQBAjAFG",
  "key13": "3ABihDCTyXJdDntqdsKExhw3ABaTGSSuayU36gCSKr8SfhBgvZoMKch13HFveA7ht6QKGXvgXYw5JYFiGFy8fk9X",
  "key14": "4E37LyPZxBzt9ztAuFq1rDrBWaSRMbTGEFQdk22us5fSB7aQwbFfdpYsyEe1C9iQ8U2NrdaUJgPSUpJSqcgYvesC",
  "key15": "GvAtPyXtpi9QkVCAdxcjVMiXAkBfKkChNtXz27eKHKhFALzGZHP5QhkSYRCmdDrEaJfdWCSat9nEUurWdhtBetz",
  "key16": "2T7xdidenpL421S5cdofqkkTjmBwoP7Q6J8W3hj8NU9vsShdiqZtbFBoajckvVSeFNd89wHD3jHPz2yMNtzEoaNY",
  "key17": "4KJMV4o9yjRvYaswAQCbMwRAnXaAytF73qrHNMBtptEnpFxvE1C2fotMJAmMWLkrSsQEn7GYEzttMVq8K3rxQ31W",
  "key18": "41cwzE9RdhKYdcBgS7k5AyXKpJGiRxGHtUCUKxyALxpxWDdWfron6ep5aLLvTGFPxwJyLgBMrYQC8MEDgoUY5TeJ",
  "key19": "2RTpuSjc7xoVthVKij872MCe3aQe5b1JupyNjutBP65dimva6wCNLEwzAVd2yDkphFqAwNLNojiutSVm7ne6wVMh",
  "key20": "2SLkK3fBrEYA8if7uHkA7S2iLj6dULcY2CTWnxxQf3g6Rn5jwn8TeNAsovS2ftGcsP4YHvHxkRHH2bfcr2kFwXqo",
  "key21": "vTvfhZqasaTTZnWaEAmQCekWh6ktTew9ZiWEr2bQoiUEPuGivnPWWvdwx8SW4UDZePK2kDoCtf9qFRahukWDWNq",
  "key22": "3aCgS7QmuN3gu5ykwLUvxhmUJeVj2rKRMB4RocgGyTF3UwNz3BnqaTADd5rixBS6Zs5zmVHCLzYa9crJbZZLx4bK",
  "key23": "49EacxRXa6uVyZZrBXwY8i2PYGHN5XyJULVRH6N8hsDAKcjVjfRU4ndFqdj5vcsqWKBJq3bt74o5T79Y1TWS7ATR",
  "key24": "26bxKdWxU5hxDdWmrfK1bpYTRBBorAZ3Z3M2NEKhYajVt4X9ZY9tfZU2vKTE8mwDvaHbGGAURwwm9x2iiDP9T9o8",
  "key25": "2KkMQQvSLAQpVzzLCXGsTkbbsXP96xk9rkayKGjwGaf9zPhYV6abD3yy1VSZ1jpRQewmqzFdRbs8CqChubDri15z",
  "key26": "2RGqrNeX6zCBKPpBVuJSRqYjWFsBRZbrkYPSqjCSNsp7qQA7ohuxdVB2rfMr1A9pdf5U3DjTz4ghsc1RAcDSpKaM",
  "key27": "3adgPogyHsaeCpVr4XRMfnAbUCkizDX1u7RSzF3MLy45UyVjPV9tuAZDT1CLT2hbMovMg5k4QUbrUjidxjXVEEiZ",
  "key28": "2LfS7AjrxvnEGYqGbRL9BNLj4msc8dFT2gPcXh7syErsMe6AKPnF5QLFNzbdp6mB983PJhVd6H5PNwoHw9fHeijA",
  "key29": "yWka8S7mupbCKeXggo56NH5zZC8nbJJxQh9Da8EXMZru9nP1YQ22WdHKcNbRfPNCVWkX5yUW3vtNB1zuVegutcz",
  "key30": "4aY119Eheh9sRAxC9anskAWy165kiBynfGTR42Jg9bWdmm371nGfijAMFhsXAJ9ZzW72Hx9kCHorEot1e6Cymbi9",
  "key31": "1UzHCHgCxYwBUhtSQ8gyn54d3H7TqhKip2sXBniKFP3v7JMXhSdhNEiP5XPXoCSGA3kkizmayz47HdJwzf6gFei",
  "key32": "4PVFCS1dixKjtDtFJbC4vu1xR5TVhte6K5GgQZ1w3RRGgnPJvAyBeEK4Tkth6bftJiBo42gdjYn6ibWUjHqyPtR3",
  "key33": "hZ5bgdwbArukLorTUKYLCVAxgW3DyMvzs8z7KTbp6MTXyEMRN9Uy2GiFjEno9tQKrSwEnQcyL3xYEUn36MukSDy",
  "key34": "jKo2PtndSp1joWNVdB7VJnwV7DTGbqzi6qCB6ZpPe4KZc9i6WMQw1CKSTMkfoieVMNiMpXDVHJhqSAY6RudnQxf",
  "key35": "XYcWD1tXQKTX1pt91oaYEbgPWg3Gnf8MQtX1AjaEzGRZeywYtLoYbhQTTRZNcGfAMb7wKd5WotV6AUvKxMmCwxj",
  "key36": "4ZJeNWr7jUxceDQdJf8XF6vpCyjiTm264R5xjYMXFEqijYHRbzg41oeV14qoJHRtyERVfh33FcF2YxM2mcNWiHj8",
  "key37": "3VftCHz1KqJinZ2ei7o5rwUA9JSAm66vN4EizgLWsTaVV1YaJAW8xUBpg4LLz2Ypg1WKHm7id85uDNctqZ5BGA3Z",
  "key38": "2Cx4jAhv8JG4fkU35F2T2F5sGBVhaupPgcspSEXkg8eft9sDUDVqFVo4CiwLhLRYgcxc66xaZtLQjASAztRFfAYZ",
  "key39": "vsq1ZgtHrKzqnMMx7oKEWs6Pusvg1vzG4R2cMpVytMDN9KSGakv4XJsxovgDNzTrDRT67sCiAWbbsuRBuihmzMV",
  "key40": "61yyNAKxrZempU76C2KK3xqoGHtebyhdBFAUyqSKWFsRfvLstfny69UyWdpr6D8ibzUPQLLs4o54LsSLJA18ra8N",
  "key41": "5fvqpbr4vXPeaNsReyKPfGsHe7cjBCGu1p5nd3rdFPwYxMJpCEQykVEpKss2z2W2UWTedTdQsiJKCJqiiQnqx2rQ",
  "key42": "37nZYhj83L8zbXCHRAXcZuHF442gFyQ3iQU1NRgvcq4nQEgDFBmnSZJoKeeccBBh6cGT5bc4ekreDyt6XE84hDbr",
  "key43": "4yV3oNVgsHd8GW4XmowKuY8MEYRtq1Q7JwK7ckuYpdz9bEp7KFk3pnx1PpVmFjKLx6iDz2JPW8r2PrJcLcLAvqz7",
  "key44": "5Z6bF53f6D3VzhQUMZ724HiZWQxFRCNgqZX7Lk82yGm3x37VCvqHUxN977MVqB6HKXKFTJsHh6N32FfUNx2BD6Yc"
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
