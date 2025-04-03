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
    "2MgubCr4uPgQg79XSFecFu4dngUdLVcX9nM4iYf53vXgRmKJ9LN9k3ZQrxAPbMNm72xU65NRtHLQf5b5BcETXznQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hy4VF7rGozwJFfHEho8HYTnfbwgCXoB1sHbrXTEkdm5mB9D4HAG5EnAvKQfMDWgDKFUZJ7avYVoeZVB5YRFrGxC",
  "key1": "4NPjr19nmjqc2Mc3RgTyt1jDh69CEMPxfbG1P5y7EuBFbfr8hD7E5gKBXvDek4pt1hdZ3WXy5DaRtgBPRJuJHVsU",
  "key2": "4wUCWGoEVhxf9XCpSRawq3a6Y6dZLHXiYsLAFhgVDUwW3siXL461DuERuMxGXDRAYogYbsJHTpri9nF7TDJEU5yp",
  "key3": "2GESabYezuzr51WZhaFsBS3GxjvdEDYbmvHEtGUgfvt3FhwWeZvTdwL91ZWNrKtGuKd6rJGByXzEyTADCrJNK93q",
  "key4": "52xESyh3f9iPG8HPNqbckQhLTsDHX1t6pycJaSJ7ebmc8ADhdNad39HdJ5QA5qbNDV8kpRqmDaHYKuv1q4K6txSG",
  "key5": "3149V9EgR8Q94nKuE7zoTfb4wk4hSEowYDiNYAXM3v1E5573PangPwZTHNisizxDPEFq364emAMYYWLGNSAQ2Ujt",
  "key6": "3TJhsWUnmAsmjhGp9ruxjUKkXxdKjYcxmbhhjB3XtCWgcWRRnzd6WxAbZWWswos32NH56ei19f42tu6u1q9UEcPw",
  "key7": "5BV5n9Mi1JBbG8zadao66ijo43mPwTosgcndtgaZrFvUCMQGqqnzeSMHkiPwUuBQKWERd47yaUv6PbxUDqzcnVyN",
  "key8": "4yNNJRsLUrnhxadYtLw6HdrkxtCvb7SUnK4a61hmDGp6Yjzi4ahLvHCJQtJ33Wxe4B3tqrWRZcERBPscZucBFf9b",
  "key9": "3Qs3wLrMpPefXugRgu7eYh6jrS98YarbWuP8R1G2qdzQWzB6PY9MsLovFFTLjCdNFkRFE3uZv3RkyZUTarstB7Xg",
  "key10": "4ktc3hqZzffwFudzb4rrf3RyS2khd1rBSUtNKSLsTotSexJQ4diZTEKvW9mA5E7Z6KjaK4MnPJXtmNXXCqEvBMgL",
  "key11": "4Cd3GFZf2Qz4sgZKaLWqKVGvTry2fPytH4v6HE89eXShpSu9cpKSZTRSyUPvyAtTMscuDxdoDU11NRVoS5tDhxPb",
  "key12": "2KZcawvcztX1mqp7XAM5Zurr4Ec6Xh29soSQd7fQqgjFdrAgjX6KUqEUCPVKeQF6CAgMswzr32GJH6TbCGeK3CS7",
  "key13": "5MZJYqJG2oEDgFTZZzY8US8MfkTjhNWV2gUepRbsQ13pXPMx2bubHk7esAGumLa2wy6BhF19zUiRp3Ss88QYH8ZZ",
  "key14": "3A9Cpuim3AXcmdyGXUBWdoWbW9JnTTefzfYUsANmmHeHiD5efAh2Abbaeo7jQgz4eZTPuK2g2ig7yQZQmxsD7iTp",
  "key15": "2ggj1zaXWf4z5nAjywqHHEPH6YrSiXSYgtUaUcePbHUJb6coy5qyiPspYpHTghkR3FfZYYFwZkufAbzT8VDfkBSb",
  "key16": "JZTURq9KkL4AMbbh1AyofE5SerJ2EYhz8ueEw4B7dibsVd4cpcB8GXkkkG3xaue36MCCbFxSgysE5Q2XqVEs81A",
  "key17": "sgmLXCb6bFXo7hKnZPqXi9t4JKyNZgseYmcNVMT1mCxMXjxvApsoN67TSbskDkyHBJmHJPsn2aaM1mLk1QL1sLK",
  "key18": "Ruvy1EjGMLmfhcYC1xxYB2YWCRVj3Qz85hg3it2zwRjZoyetD9KaxgNFtWGLmqYQV1184KxULdnRk7UKFAwvkff",
  "key19": "XoGr8k16jD41UVxaRcJVrd4yADNQGG1a6P6Pyp6vs6bnAL4efU47zD6Tvhg5WqWb1gsPHDjKaUYpTQhCYT3KMst",
  "key20": "3VAUzkZyadEGHgRz47TPEcxsoNM1SuMyrLBwsV2H5aJoGMrGswS3zpMwzvAWR8uJgeGLAqN3YocnbmyXFsbwJJsz",
  "key21": "3wP1GYfycVFFtVjo8j2sZGSxP9XiZM1jG4XXkbwgmLCjHos3tLa6MvTM9h3aFXNdoy8wPKxkP4qvSRMQtyjiSGCW",
  "key22": "4PP1zodLnxDNkKJ95MV1k7z9CwiGYjWYDsTz6noK8kztBsAh7ijWxb18tZWPKw5PTFDYG71PfyUsGeyN38QWH81x",
  "key23": "3mgp8P2t7rXnsAEPVYavwfNzA7BUodpiiQQFXitRPgE6TzSMNRBR1D6qsEnzGQKX246KSSwvR79bHBKQbx5fiyQx",
  "key24": "5Dkx7bQ4ZqH4Q8d47dCZHC6yKeuEjkTujRjazkMeRToDaDmhdgB5a9U591kvHKsjM6mVXQk4Y8crdegYTsMu5EAi",
  "key25": "3JPAX9sDcno2Rx5zGGTr3wA2iim8Uqpd9BiRDJCniqjPHnS7ZJBE6RyMwqiosj2Kp5rMLqHYFDgjDYtgdywG1YwQ",
  "key26": "qVmmpBAaAyjHpsFNvFRtRamNkAYWekpZwvHBTctft5i8nTaM3P9WxTKpX6Qdn2yzz19yXGMDMduC9eV9rjgcbHL",
  "key27": "4gZhA2tiWXLR5RAvFLmkaFD2123BH27yTuEXtDANQS8n8C3h3CS39w3vjLoDUF7mf1e9uGDFLSJ8LKhPHBsTREAz",
  "key28": "3pCA9Jr5kXGNW8M9foxcp1rki7h5mov8y2NAA7dUWPeYzKnLM3ePfHmw8v7mR9PP2AWD3o4yKwmN2LprKZrk9kRq",
  "key29": "5GFKDv8ofnFKSUuRYtBp842QBV7wetQCxNkguQ75vpuTKWXgTMsgW5bPrq2VQdvqVv2CqwKSDj2TRzJ7PNAKSQYm"
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
