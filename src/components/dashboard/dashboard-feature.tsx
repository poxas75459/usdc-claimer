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
    "3eLCudzwGGAaKEYJ5EbbuH7icFGwf7UA1YjohgyasoAX2HYM3A2NMfSSJJ55vskVvxY8yRHiiy2eHSecEmsiU3Er"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JG9NPMaDderFm2UnjHSHPENgpE7WA9xibautBoi3Uji8zp14VvSNFRpiHrpHH4aZSekN5wLgSY3Qcq1CmtaeZiB",
  "key1": "4gfYv1c5VbUDvfXiPY9x7kqhjVL8UMHhTqoiFBN1cj83asmru9xd53BrhJj2Pkyu7QsEgacvPVwKKNWdz5fRB363",
  "key2": "4e8scE2WcE24HPsuYMSFrmvvZwWLm3DmZt1MWt6VoXZp4fAttezDfyyTvY3a9hsHaFfQcNdveWd3M1K5vv9K1rTi",
  "key3": "VjPkLYAidxjF3rv8ZmzVEvJSa4wMdtQayGdPTYWgYfnxAUoQWRwUgdzz14n2jVTh7aRsLUiqiVDqE4t62euwKiv",
  "key4": "3W1cBc58PGQmRQoQnJU4NKinD8Wa3QY2SV7Bkqn1te3suZfSfjneSJyebNZh4jKnsV7Wj32K2B3FwnrbBKwrnbZ8",
  "key5": "517vkMmC2MaVQBct4s3htZbdXEuX2sgj3rMudo5mpaYz7jneAZnVJ4GZCiRBSn5wU5QvKB4RDtdXneA9gfMCNjgz",
  "key6": "4dmyD9HJbWusU7ccz2iMDPtkrgW4v7eibRzwGLX3W7bozVxLwPTKSaLFkr9uzAhL68hXwhN33b8zSAEzAxuYwDCS",
  "key7": "594x81uHSig2KbBz7Nb5wPz5x5RENRAZJdocue2TVG8pzkVkuDnDWJG6Qd6jZrA2XXopvjyLAu325XMuJaM2G5rK",
  "key8": "5aunnZSVcwPboaRT6qHZz33Uw53YcxrXxzaHdKYS3WXLVNz9qqMYFqAiWYQeJAXMk61aZDMRTbV4TtXXwMnzHjac",
  "key9": "2cjbX7XkesXH6aCcyrAPYdgpDozwMexiFeKMseHdunahKSrPoLsPfisyzmSFfoioVzAgiPVhX1YUQPdqgFuMgvAE",
  "key10": "2B7WTDa4EaJ8rgXKxDMmEbSPidTpcxXjc6XsC7L2uLk7sF6s1DZY3sdDAfzhjMRgorvxsnv81xGnmjn725HRc66t",
  "key11": "5G3Pj9mBVcvCcTpPETo9tb77gNfsBD1wtVvAQC4oKZPnYRhtq4Xv1TymaJ6LxTPH2JJYpuup4hRxjYgvjNr721pm",
  "key12": "5PzFSQiia84Wm7ffV5UykxdXSWroqJVNjx5jasHB2tdoEXUcUn739ka5JknUxcHPgpfUp8FXw1eAtmfoXrLgJbpX",
  "key13": "3Lw49wqqZTUpAXVvG5fBzVUroZH7L5ZenXKNnogV5FRWTG74ec1QK9aMuPsqT9QsHUDGPmAF1G4P5Jer5Lfexzww",
  "key14": "5phuVSL2DdvLBEXH8C1Ee9QW7fE5TpADqvAjwnPZ2LEd3kWqUeQRTtEXao1Mm72Do1AhXf1o2dhPEC1MLWtgKUaQ",
  "key15": "HjdDWjscKFuvsBxMpicbAuPNo9Gj66oXzgeDCbEJZRWGWMVmzQVvZazY77FUUYAtbuyQWGU76ZdApadFyZnYgmG",
  "key16": "3gykF4LiRe7bQjuv3VE3Qfbca8oT3vo3DxeS59r3d1sF4ZVDCAVPJwyX2WHvuaCKbjen6vauJ2qcLVDNU32KzocE",
  "key17": "gfjYtaXghLwhEW6CpbXHfyYAp2vMybVtkC1MzPMnZ9BGyW2bMPRSVPRnMHrGQfTE1mw8VwhPd5HaSDR2TVai67p",
  "key18": "5qpQpfXrHRnwSUEL3TR8GXtqpWo6JzVcoAH5f32zare2cRfGx47rPAADrXYtTZL1BCxA9mLuEcP1gsTupqVu6PPj",
  "key19": "ny7xDcTRpancvQQoSKabPFsneFXsPQphfrYQ6FS8NT4ehMBmaQf7YbDknVA9xBzNDuuQE6gJoULMLS1RKqqaxr8",
  "key20": "5E3rH8VTkKgRsz4wErTjCCoCAnwPeLX7cTubWsMe4SeuCfQUgwG68JLpsJK2kS7fjBsmVWopZEsZSHVsDiTsDk33",
  "key21": "12255XSGeEEnoCw4KffD8kpRY9DDCrrDQ58XdfhBmRs7ikoqdcqL4Vncx4odnHxkaZS6NRMgSTUE2eBLxHE4KBeF",
  "key22": "4Kp8HKn83Ptdj84wpMBDYUNcwYEL5psDMbZxxGSNSMN5kdsvG95qevZoEPE6yNeKwopLftJc3pqVHh3nB1zyeQdX",
  "key23": "W98NnHvkkCdeQEEyjNPYinxiEFunGwtKhFqT6Yw5BqGdHFkfehjJeKMHWb2jvWNXVEvDdrL8B3MioNRxodphU5W",
  "key24": "5AtYG28zb555nU98i8bhWx1h2exPUAy3H1mLNFy9NyvwbTW8xSK55numLW97V2iT51e2XJk72QMxjKqKFcgzdpzX",
  "key25": "4f6FPvRrUSAx9nE4PUNDZUbSSkSQCKTYXkTpv6ufrWiMkFBaFu5Yuy3tpAsxKGYfzYd7Fw7v8fcMGHsgKkfaNxpE",
  "key26": "zin3F7GQEVhmp4a9YqvLebB4haxmud5b5tSxD69FP5i1jNnpPdJq24t2godmseR9buDf2SdEu6rXy6CVN5MEVD8",
  "key27": "283VMsMBdxYochXYnE8ZdDyKvF7smRimRGUGb7nRLhDxvxGkzgpY8avfCjMzEhfz8WyZGdE2oWfJJP6xeiQoP4V8",
  "key28": "VN5kz9Yz8YTwjsbe2wmHwwR3oyLzVtyn376wJ8aywa5mdVJwkeLXyDurmHBT42wbZZjV5uMFAzgTczJvMNjd8dn",
  "key29": "4X65gr3AeXZ8L3c5NMCDKzpKePNDDSbrJwLWPXn1RniT4xbg7mJk13ivv1HGZQqnHAQVNXWHELXDmKFB96t3wbAn",
  "key30": "xKU6FmiXRQqQ1he538x2ApsMUW3Pgv9XjJLoYZxswYpV5yRkXdLFq54kNEyQQQovYz8TSyoD58uSMU2YqqDDcy5",
  "key31": "4w51KVKsHkgGz78VxBcJWi1AqMSHf4rfnZqDi6RXZDRBPYd5vzWpcRFKF99dXcBYVccUG8SGTMbespYqDxwaGc12",
  "key32": "5oxM2B9Aop8vNu6CxVmpGZicueN3MDgwfY5iaFqrPhmkFizDzjXreHShgMVzDK7VtFimN58MK7nwUybumM24pYcj",
  "key33": "3K1fcXFG4kMRWkbUHZGLALiW8kdkFCs3UGA3joGVAE7G3uMGDuoGidQ3FwPRRBWbt5HRjCqBeaEQp65AiGwatFwh",
  "key34": "bjHRJqvaku5mxsFaMqratHLRaBweRa9u6QFjJ68DBP3J3tbJykNzK5CwTegtHy4oGkWfWjAW9CMjw2Cd9ZWxjsW",
  "key35": "2jjXn1eWgdFMySpqFRDYMaBTW48yLi4SkzRwJkUV8ndX7kHphqG1k4hfPEMawyNADjCVXVRsXqMx5AyysQ4UTmGf",
  "key36": "5PsRyu5U5v6kcRXjYrv1PDx1cxbQNwiSLwrEeY7SG6Vi7ezKpkHdEaarkcFnpuxJkuTbuzCVuHRWXPM4FaWhaNBd",
  "key37": "zwoG93jURDbGpM2R1Xqhxnz77apnzWtuyBepFcLPtpcfLjRETj9uLW5Nfdtst7uo58Wt7pR7zbUqDCLDDoy9pSH",
  "key38": "bYiACD4yZEZdhCGsJJChWBw62oNjoeXUJexaAVKwyN1B4sJn5b8bCv3Z8Np5CFunXW73Bk7m9XMs6oNPYVunMWV",
  "key39": "3oxKDXDcBtyEZ5CjtgFRJkHrxT7ZNbmC37z8RzUP29gEAxWPqAEeZbxWGfZs9AcBMLxDwPeS4kdhavWXt59yY9kK",
  "key40": "UoPjH7RiaJC8BMP4qEkpQmVgBMcjjnqjoLrRrR3NXFajjn2iovrrHAqTK4s6krj4ZFWPBAAvE1RnP32fGfynLFG",
  "key41": "36onrpcQtA5FQBMr6oXG2y2gu1BfuNxmVHws87QFabAaRYoitL5mdYSQ5cXriiny9pqEWs4HSfti93ryuYkJA5ie"
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
