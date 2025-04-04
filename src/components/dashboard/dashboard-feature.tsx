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
    "3H6EcLxP3uTQdT9KYpx61WGkxHfHFEoNVj5iwCa8v74SXsMZJDGypw8mnx7ExFoZzKgWqDu45VqccigZbEKCC9Y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yo9JMUnyRMkkzLR1T3FYR9mJRBZmjJRfyTQUDwicv5VqeMbTPvVPiFdLWp1CKhe9AK3LEGz88eNCpVMmNyLqao6",
  "key1": "5NriZL2Awb9HZnpqtnJJMu2jdAXoUHGYEBWVDFq56MkShnudp1QtSPsGBkUq4H81sCyZ53pxDa22B61j1j3NnGxN",
  "key2": "TnrYYGaChwmUGjVR7x6PbHnKNAXCE3ZKJ69onJB1QAg11PBsKv22nyDN4bXFsxNnp2qcT1trk2i12PDZJqHyENu",
  "key3": "q8zoDq8QbgeTpkTvTApeokzXZTgm2G8vASEzPz5wxSUrHsbrvtX9iZyEzXvqPUKDf3Y28VbmEV51UPX7ZRAHmMn",
  "key4": "3bhBqerdwC46S5JEUk5b4KVPfVQvgabThHVUrYCsmdWwzCQ3pPjcYDgftZzjXSUG8VL7RXykypLtjy36B9xoFAxi",
  "key5": "4VA7B6UdYYUSG8yZTnf2FB3927y9GFLY8MLwAK3CcNHF4hHkWs7P3tDJ8RMx1xnkKNSecH5yBGRZ2vcmXK5FJ2Tk",
  "key6": "4QzyFXrLSL1tYsSQMmnyrpkrp846HCCyFqnrQpvLBn6qP59EknJJeCqVuuVi1UNEhw35ZhCX4ptm7jcnDcXm31uP",
  "key7": "4pUVTzTgkrBzUbJvg5No1RaK2dHpxBMbfaMjYGzP5fWzf796eeUd6YRzjt8oqskqNe7LuQcfPLygXpwX5bf5vRc1",
  "key8": "HAMA67RKDSPhWjTZDaEM81DikaP81Fqc5Bgtdy2M4yY1egaKCez2XQvvXCPbEod8py6LtG5V33J7ve6vk17wG5N",
  "key9": "2VucMhpCYwroVg1LkEStRppUk6mRCkPKQveET94wErchKU6gr5w58KMPDx8pqnib5zXgHttWaLH639NNkozaojRf",
  "key10": "56rJ2dnWPVHew7j5r1AdCBGcZCWt5AgHg27hf9xAvGkW6TBxAwjN5fs7Jid9FaHsHQXmtkDuuNHwbCzekELKESQH",
  "key11": "318LGqtLoNYaK7DSumkrsgp7pk7KLqnWicbyxeWQJfYiM84pirjs6Tk7czU3A1x2qjSCR3p7rvvsaVwP1VJMFoa4",
  "key12": "3CQkphyd9Bjoy1ZByCWqjViPM4eo74GWV4BXWqEiCiqsgkKbwcMW4RQmAuPXFKcJLiiteX5mnZgEg2E9RPvNtDxm",
  "key13": "VHxj9fm5RH4gnUsog4dFb5R2P1LRhM58CLDCEwMGK6tuusEeEiVRirQ6QMNCs89C3eTcH1RaMk5T6FtqNtCz479",
  "key14": "4Ag7ZwEWp4ERsHRGUnTE6DMqGJvaeGonYgNaUwSsTZkR7XFTMuR7e5M2Tjs2huwxNkm3zubqcDtUb1aPAXqAj8si",
  "key15": "3TaTt369M9M1CRMRBKs9fTFmecdXgVknPVTb64hZHi9Put8Vxb6L34gxFm6pXXAv1WNXbgQ2Z1PAko44RKzGfaus",
  "key16": "f6GtRjyFeeeZUekekHVZVLny2jUfkfNiwCi7Amnv5pGzhiNkhJn71y3jtTPxvjt8DLAykXWV5cq7VzuZJDiDAvT",
  "key17": "5qHsdVcYfLhLjxqJgo7QZ9UB6CAuq9ioFJ7muGZnPgzzmmQdVDmqBe5R6KSDa4pSZ1gYvsos9f7iFJLkSgJApeRb",
  "key18": "3TdZp5muJai4fQXMUzQGZdSqcSWHAN3utTEDoCg91Yi9ZMTRxaTe2pZp4n6LVoxsCj7XHmGK3Jj2mr5oYz4N9ZAK",
  "key19": "3dmviTVrVead4kbF8sQY393y18KM6cvRa67bDRwkKZE4dBUjtA8wTajCsGFpeoG2EgnG2jRbF5iPXmYEZd1wuQx5",
  "key20": "QRbpMPFuKBNCUN7MU8rGgtrQKYesBDnKwvcxy2crhzzv1gZc8aCK9dAoCYvWhH37xPhXCJ4dzqsjeRaofWwW7e2",
  "key21": "61asANsETAttsZ4a5HELHm78RSELzcUw8x4RKG9NhQEHhAZqPwoedhLKjyZyJNWQEjLPCsRykNCCetFG2Hf7hL13",
  "key22": "2MJxspW8g4oX56CpXfwPwMRjtmQoXFn8aKRenvs3a347kiW6eirAcL9EPFk1pmB9rM6HB6PHVGDdNHodux7tYNEP",
  "key23": "2tdDGTeqHzrycVXEUgvD28oPZMNptXzLxWLzSR4hMXwT7tBJnBMQn7QsgF7oW6vJi2r9QBm3dN5dSAQLBxjgyvBX",
  "key24": "5qwRzffc4mbhaAhnXHjyN6vLzBouvQFsRQWTRLdqKsJjtV7Ac5b3tJPr6yqa4HsFmhgJf8aZK3Z9nLCLZvKEuWVJ",
  "key25": "2oN2xiyiej46gBENzUgFoxEfYxZRcCfzaLkGLMgrZyj9ykJxoamTEu1kNvPskhwz6XpkmVQHL4N3TBgS35Nif8uw",
  "key26": "5RpfNwhNTvEtcmJ5VhHfvGgKwN3r7hqiVWpdkJ7mcXRoNLqFJ4JsZL8x9tk6A9kxGrsATp3UkaYmAwKGfvYmMoyV",
  "key27": "gKCMzMzQ9Cj6ueweQadQKZRLry278HJZZXpwBPyFm7BxJ7q6TtoEZRPWQHnopUBtUVeuGb7JWvJwN5QZAmaVne4",
  "key28": "3PQSooxfSNSQoESkH4p9Kf1uoprKT5w92wZvy7L4dM7MLUmaubfpbxieJPvjiU1nVRfZn1822xM8LDREUbtGHs8V",
  "key29": "XSnJTPBLeZ2WZprMoV3veyeBze5FEdAR4nji5TN1mWQqKgdYip1HpnY1uWzTjGDVTmSpDPiF5PtygQzZYALnV1Q",
  "key30": "4cH7yuo1asmyPEzPq81CqAVYDGpvzkAaGDn6C4rEv8LRnd9qZz7ZzUSyaqifzFpTR5RFP7QaHTmkshxyy1hDdFGe",
  "key31": "66RYs5Nbb2PQ7hatRbZSdGGCURATJLUqcfhcvVr5uz9nsTE4wofE98EziU96m9p1Lj5WJD4nw8u2ijoQSZ8EWQwR",
  "key32": "4fSKZGce1316uSsMHSUWjdVQL8hHuZRrSrEMh6iFjjm92cHW339iMDAZK8uhc7vtUCqNjbShKKhJf2mrcYcdu4gQ",
  "key33": "oYYm8LHwnQrr5krLt7ce5dRqJiR3sLPYH6tW2WeEHv3XPwKMRuLVUpbMvdWinmQduupJKZyd1LVuBNp7knajBb7",
  "key34": "2Qj5CsbG2m4Be5WX1JYYsp5iFDeKu1dr5WN7TpEnZHEfDPfK1zc8A6QvCgFLqYvBUoGyem1yGvibczyKRqfXnXvx",
  "key35": "27Ky2fhRm3aKZe4PdspXBPytP3kQ2qrDW7Dcc2Hr9V7nw3prxGhoUTbeDscGhfWzJmSLiKpuaU3gknrKAZa2Mzwo",
  "key36": "3aLXs7SE6V2fXYARM461wgcWviypomKbYGKQS92FJ7CSjzFPiHjTcvqKmq6EJQCgq3n61xER79iLsLA7YqoJ4kWf",
  "key37": "2yHoS9TPAWK4ZhvWkyQUFc2eH1ZdPz8Htkjme1GvK33xCnnW2Ao3yYDsNox3umz1YY5o5Ng1WZwvLrektRAtS96r",
  "key38": "3YtDrAF7R6Nx4R5VtsRdUFbvysPSRFb9M1J1Pn1LDB1syPokQU8no4GCdFV4BrwkQZi6vrN7efsiXb82fo74P9qu",
  "key39": "3CFYe6bB36f8j9Dm1zUtJc3qG53RfoemHT5CDVUU6LtT473JQR2DcAfdqKjbEDg41vdfvBA1xRZ1nBVdEYrsmipS",
  "key40": "4H7hrVfc5F2q2jK8o95VyXSMngdsgXFPgAXLrdMgccgppkEHHoc1hiSn1etrHVRCQstG7g2XfoDcHvoPyPTcyY3G"
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
