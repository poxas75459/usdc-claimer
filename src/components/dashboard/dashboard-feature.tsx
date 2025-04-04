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
    "2sqZG5hPgk9oWABfCT9LAY9r2wWciVd22uGp3PTX5WK6X7nsifE54emPsed6zFHWFUr57jtE6dNc5MKdeiJyqn7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "H8BJAmWNKRZy31kUvAbhLSK7Fxnjy1naHifguYtJqmLmTLUvzmhR26ACExntGKtWDRbQAwhqQy6msabYFtdFq86",
  "key1": "4ZbYPwdwpRvXo26koWD9xfL21gVvDHGQ9hs2n1y9x4v3mAYWmmoMt9aPKVG3Yhp1xru5nwBYUAkdFxxGro4kg2x1",
  "key2": "4st8tXcnBn5L5vX1fLFxxWPQhfh4cFUkv8BFfxEoAuL7PBk6gXG8oCxm4J71ZayTQegg27XALed4YCeUEec5JCfv",
  "key3": "4PzZtiko6jBhY2KnUGciG8QdYY2RhWXb7SXnPUtDruaCPGdjThLwaG3M3sU8ovN9Jy3YnC4HR7VoQKbG3e3HkX4Y",
  "key4": "2Tx28JSuYeJTnCFJNRkNX8jtgrPPc8gdNrQVDCNsv3HAnw9VGMfGVw7aHfqMEYyyK3JMsCNXJZcG2McL5wWYF7wq",
  "key5": "3YE2kcoiPe6ttG6ZC9ydHsFJ7mzG4T1TEGvcwqJm1qz7NBodYRvvh1EKWDmWz7Tq8wwUDJ11ad3tqc7JBzCLvV4U",
  "key6": "3gsn57CVjXodTuP3y4oXKhbSWUgWWnqLDUkvADWUML2q1ZTpqZVfMsq5MCeuVa4XCgN1bEtvjBKv7MuTkWsdP2Sq",
  "key7": "3BkLfNPzoD34yeRaX8kW7PJHhXt1nJeZWXaMbYn4e769RcsNmvnpQcz3UYVR8eKRT5nncFbLsdMNbh7dEqBdK5cj",
  "key8": "21Gf3FxZ2NEY2jtJnq4vG7Fb8NCiosgDBdU4x57yb8tzXv7iPrQ29ZnaB1GbU3T9YJRDgSbSa2AA8AcCjT6zSjF5",
  "key9": "6SwjVRQLH4T4kPXMGHsHaRBbnTbtfwaEL2rivkcoFAobpYFJk9vCi7ZQrHsGXP32zcVivm7LKbaf8UXmQMkPTs7",
  "key10": "3D4j21BxFEsVbK9BKa4zRMb8TcjCfsmT419xvBaSr6URGVpQFfshT6yvPszioqHhDggpAnxCHMdQ1Qj5H3BCE5Fg",
  "key11": "4qJcjT4eBsdXNYHz2AfoRCryEZMKiFLAnhujhirsyvxWPk5uNUcgo9um7Yi7Y4ftoqEeAAsVnyz1TF6pCHM41z4T",
  "key12": "58hBTDQcn1ZCCDXojTqyR7zBEjG4fh9RJ4TrTfNziimrS58Y7c18FW2zETQh1RsRuY2K5V54xLUM5An4bZTF8Jej",
  "key13": "2RDmP72kqJjVdNp61JXheu8Z5afVjvghR8SKqm2z12FJidTUgVbCjrBY2JpKG4W3TEKC2u4kP4y3J8sdWu6caWq7",
  "key14": "2rMQqULed8Rw7m1okNTdEha1fTi3KttMMc4qMm7pGuK1cQsFPQWCsHH7f9cX7H4q982i5e2Juo7KcmsM8jxdBiqr",
  "key15": "4poLuTrii51Qon6ZQXNAMYGgcYVR6KeuPsmpToRV7UzCyK4XbVk9JuUBLuT2QvqeyWvKYmFgD8KEYAL9eSWnPCLY",
  "key16": "3J3THDaQucdgtqc5i34gc1seUfc5eDfesg8MfV7kYNzsPMBrUBHqxdcr12RjZv63RKJVUy32EMiz5pjRSRKATvq4",
  "key17": "2pNHq7Dkxh9edGaX7x36pVzYnEwhTVxMEmKB6uDvY91a2WUiUJ4bioAXw9CoPWKASppGuUwfaNKKyasGE69L3fkg",
  "key18": "3g81icjBh2XM3MqhRzzW6CeL6hmF2sD6vhHnZvYAQP2L6ZasjzMefN8HXti9UHCDucWQ1oHbHwSu2yqaCNWNijbn",
  "key19": "2AdBQaGMxudK28djBa1afiyzhdV59Uf8NQxp1wUfThWxA31ozLwZEYQk6ntNERL2v8RBKHHb1Qjaj22cgiYPb95j",
  "key20": "LVgQDSShwK22NvWDb8V1ydPGsAb2uVB6gCCFvshbrB5VZ653EC1FJUd4SQ6ZvcREJe4duQEbPDcpDkVoyNeic9K",
  "key21": "128G3LPDMzVMJ9tCWPcvPeyYrDEgQ6pNHgQg5NrNvwgBwdXxV5sWGqeaVLybJaEUp6yVo3XaxooV8CE2uTMSRajs",
  "key22": "4uS6QHDjwtj8rbRYy4fqdD65SMok8FmzpqHk27Urk3TPZMoe1F8qrD6baswyRdqczN9Qrwt2px3rBSUVrPBAgaBK",
  "key23": "5FiAbXDt7K14mumPVNTfgahraLhbZKHNS2QZYF7AW8216QRFJHWk8RRVaEWE1UctRfGnHSHY6NTBUbJbWLSpgbQK",
  "key24": "2RBck64tQruLne6iMBJYUcjz1pxSHNLqieagkHV7a3f4g5LZJ74sRyTHr5MdEFVwRN7HbSDNYWGnLpSB36zUMxsj",
  "key25": "2YWApjoUEkuoQntwLDGHNtnFbHTv7yM4ZfmLwR81wWwJJb47sm41kBeC2spKKMByd1uCcvnkHDAHj8opJAx78LeW",
  "key26": "2HaRVb7VnQemwAVQfGEy4JzMbVVUhNJaC97W5dZZG1hSSNZKRPrF5qTsEB4hCw26VB5YtASCSaf3biLv4ytBDzkr",
  "key27": "33nKFqM7G1dWwtSRQNSZ8582epHkoxk6mGxnBbhFavvQVQUNA85hkodatmBLpiTyBNaKDfJYGWVucvWrG8N3TUTu",
  "key28": "24nveGessuHpUbNNHzbKCKNgrmGsKxi7ydPjaRV2Jfi1pVju6gSHzkYTrkyHcsQhEXwVsGESGmTGkpcbqVmagqdV",
  "key29": "3P2CfXsEuEsxmUSsxxhaCm2H74EoqiH4WfXPGgstbtXvp73bniACmVUvkJMzxGbE8TX5rjw6xxj9LxBFn5NGyCrn",
  "key30": "NHVoe6YybkgMo3oPZyxTjvdq71ViVx2KMBYdo1oUyAdq2W42iahitzvxuoHenq9gWi8VfFb1GejoWUHTZK9Uw3i",
  "key31": "4aZG9WMzp7gD7XsNkpnk6Mvu3mHqAotXe2RqpV623YC2LfVGnxtQmvAcjaaTu8xZoXFxWY4YecC7tEPsNMhNHhCH",
  "key32": "34givcz6xP6B1DChQWREatTfiEeSw846zAHQzAfVm8T3skc33qTWYvMwBQAixR5Gb4cnyeX5m75AvAPtg1k19tPw",
  "key33": "4RRKxiApGjLBywtpa7kbsL4BxNdX3fNEKT9ghuVaU8gU4hV1dxfbrX2rixupnYjPeb5xgofJoipCmDbpV6VGgmpV",
  "key34": "2J3jXkYSobmmZsRrSbC3JZvdAZaGBBQhh4gTQCUVvCMnkKSPm2KHherb6sWsvNRFZxUGZMn274pwKvuGFpSgZLUn",
  "key35": "4SL3yP4xPYcYo5CTcjuh4FDEsfkPAW4SazmBNNEPHkqC3sh3Gty6vCZ7NeZzN85uzKbUFZ4Y8SyQm7xUzp41pTNL",
  "key36": "5dA3x3JPdpiMTMQ3uhyz4StGmGUSGqLFrBgnBwUjrv57rsD4xgdX3m4NgjYmNFQU57PRfxu226RsbZJYQikBNgmi",
  "key37": "368HuZHaA6rgJ6k4kZZTcZ6dNTMGdgw3CT2VBBMuRyEkZutd2yNQpNrrrgfJ7tsktnh6DxTZuyKd9NEroCsfjiaP",
  "key38": "5BCVUh58W636B7JfkkKgMErj3HDCVYxWeGKYmP1AfUmKLXP91pYb74dZmhkPLEBC3Kajw1i3GgsgG4afSDGFDmv",
  "key39": "YMgJvSQ3x19WZGqjQ7Hswb8de24gZQJC5oa5UVNU1CibBjDE3myrsp4R5g1woCFsSL8ZLgPsYkvQUbcyn1sD6kU",
  "key40": "4Sy8crSBswGRWhyPUq989Gij1azFjz532kQMFx3oZqi4eGcVDEtmm5cMSyBXuoE2Cri7cKS1d6SKyHFHYXD392PB",
  "key41": "wTkDG12aSnSDfpkA1mYFLW7jPzpxDiR6MXdCPYkPfFeVSRNQH3V9JoHGibt3xeGwuSJpccaf5WWLBfi4URG8RKi",
  "key42": "5fevGLfwyfTLPnDTv3BwNBb4mQ1KHVTWPWVTRsMGR8ah2XqLeeWbwaXwCqdvsCMZ2b2C8DrCipGGE3q5wSY3FQB1",
  "key43": "AJy4z4WEn6eH4UH8Jjw9Fiu9iBEcrd5rQrsctvRQPd3kxFzGi4nTa2Db26UsLDCVgQTDUGARApbnJD6XjgqEPWR",
  "key44": "67Srp9wHyDibC4v1zLoxYU6tbWoVUTPdjbQNnmv8GyZEnMePS1NFRyFfK2qZYh3yU9M1UP2ECG8q843FMaheT5nY",
  "key45": "36RtmdWKwwjzHjJm48vE8fDdqmabi8kUmhXj7dNekZVtsdpo8UU3MU3GcmYs1kL3mz49ECWfuKR7RCkRuwta9Nfj",
  "key46": "3NpQiecta2W5Y5gXLfRhzUVPrXC2u11qF72QSjZmycyt5s7QuLUHAb6ikB28Gkgne2N4pan2nLrKTZFMTXaw4X7D",
  "key47": "2sv5jpKk1RJLYGbfdibrcaqmUMdDVjB96cibBECWAtSCdfBZqM8dxZKCKxYRVTtsLhjLbp5j4jMYPFTUzVVR4MC1",
  "key48": "4LkfhE3q3ayrKrwtarTo7fLh4er2xZ7yHw9wRxc9JFJ1FkyfuVFv7zS8ap5oj5Zfz7ybC6f7yoTB4K6ohiRXc8NU",
  "key49": "c9PZPFtxWJe9bV5M5orttq5SS9dprxNsbjVxoHFvg6vovBYpQZWwtz8XNuzT2AYLT5VQxWaEJ8jRjS5NNUxq2y6"
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
