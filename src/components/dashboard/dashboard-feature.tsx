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
    "4QfCyj3DJRtPQTPi2z3CAZ9oM4cxrspqeCeFr31Kg6SvpyasCSB7JoeZPkQmiA38yqaMQRd8UV1i6KQcfV19Nqd7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d9SMUKRtMLsRmiKSSD8oHVG7R5FXiqVotMZhggVWgtCaEfp9opK56VjdtzjWe5SGBTqqFrkrevWUFLUKzDuNpB5",
  "key1": "sH8TpqYuJJLx1t2byWA1bcheuSAnJyWFnvUVcnn9G2P6Mrs6Gbyhi285ivJCncPYBecvq73hbDVBDjwEFYaQayT",
  "key2": "22Xsk16Rtsa8pjJtrgZUbU3ypjj5SPget5t1pQ1gNAxt65zN9sSs2Abwqg8zLG62rLD3yHqjhWkepddKy881iuzW",
  "key3": "5e9qgg9PMXuDQHvZkEJ2UQE6mtpRiTnJk6WMVnhY8LgCq2Se3UBs33PS2kpbMfC9FD8XgSSBYvWFFMQW6gGzdYRq",
  "key4": "5WVBX9pAfSVHeHP47DDMTLVv3epjyGXifkpXEa1n5a8Yz1i88DN1SkRd4ZPBhdBVNAwpZSLhEhsqcXRwj7reFkqD",
  "key5": "4LrvZhkQL5ATEU8Sfd2DN6HJVzLNpoJ8E8V6ppxci4LAtNVhY646hbWNXYNxKM9hHDqi4c1x8D6AxpGqiuxfaF7J",
  "key6": "3AdQeKdPqg76G48ZorY6zSTueWPDbZpfrJkjzuD2oXqDo9vAUQz6DFFwz8jkBQpYMYvgbbMJ9qmY6Uv8KkpUCX2S",
  "key7": "2LdoyM71da8YSKCKxvaXpDeLzHhTkFApGXFxRoJvnL1obwFsh8jVh9BeGwgpomWrjLhnRutT5vaAnt5Pf8BLTKNZ",
  "key8": "63kdgXCWovZXKMfx5Xs4f6SNgcGfosFJQyk2kZwqujbmVTShZQZxdCf4axLGZhcnqYJacPdojNcE3V2a5MNHToJg",
  "key9": "VxsbNUpiJSQEMdj5FCRCEvP3dFXhGHDudCaw49i1g63fdyrqK2y7modZzcqvQuF4Ubi4R1ET65WfKF3juzo4MN6",
  "key10": "3Tk9P6R9orcmLCHVxKQ9L5N7oD4FjtH6v3vmNeWM2iG2PRbvTRtqeF6apCpF6mGWE6GnmHvxuyHZxPnKXatmtgF8",
  "key11": "2eutHqhzRxhFejh8K4NBPL4XMvKA5o55f8Ae4yqdYSDZRjRjNLWBKPazwmzYUib4Z4cr5reebNPWC7t8eeRyPt7K",
  "key12": "5cVsKaov56coN8b22cqKpGF2ch6amzNweer6zRxc4YhLwjynUWtkTPkTScNGidpmZ67g1pz2uoEJqeLcNhC1rkyR",
  "key13": "3sDaNumR89ZV8LW1vY3Sbz8idtpbCwiQuHJ5ELH1bEt4UeemwjebMZHgaeLDUso2yhEHK1dEqeKaLmvKjXF5Qid6",
  "key14": "3qqFykzUP6fhbwuf7ZubvwsAEWbcgPuMPbJaLCyzhKCysbNg1TzGLfhRJparsYwq15dGpnUvEzkTShg9ruvcdHNa",
  "key15": "XTLtDML5PG2RnNLgrnp9H6tnzVrbAB1H9JVU8wiCVQhDHX3piioJrW75VSJ4DZ1yRXteAmfVp3g8hkjw6x2dzHu",
  "key16": "5vesWHMDsXdyfKoMpjkiioWyzVh6jFhoW2CNFrdK6SME1XwkUjHrUT6RN8GTAUTncrPA5i4x1ToXy8zwzcNAv1Ye",
  "key17": "2CWdJV9DRJSWbo3PZ9UWkk6NNq5qwmU6oPDF2vjuMqyA8A7cpiGvGHzRSWwPxogDDPuskfGcS5hUm8vivB5QcHGk",
  "key18": "5psoY16MJ16uC82sWPDhEChu9LC8E7Ty3q2WFuPpjsDezjQpSMF3xtenkmex1eY1msKxCBbYCwXN1Z5YBwPLz3He",
  "key19": "56jyMo2Ac5vDwsXV1r6mP6WpF8cFSwoVGtNDzo9gwYzFAxqMb9noPALZSyeEsP2auFVV2TkqtNRRkiFfv8MTEhCr",
  "key20": "3QasJx3jYg6nTfsB5BNsmZn1at6Aevn6fVnrMaG5Aba82b56zanVP1T8prUvykpF9Ln5dwAG89HQcFm41MRggKxB",
  "key21": "2A7J3WzJYfUkmRdRw8ANDbn7u6g8gTozj7S3xK5Kby1H8N7eUbBia7NTt1kMAPuMVVA8XeavAe3bptz4B2ZjiMeG",
  "key22": "2LLcHTrF1pR69DnYikxMro2YgThRE74Rsx8Pqhn3JMheGVJTaadkr6md2FTbzYEvtweyZ3eWGmzUYvmH8KYs74Ci",
  "key23": "54rEPKRqkhUoij6tB2ndusQYfW6Z2Birsvh3o5RxKwpFR8g7PimgF8A6jKGj2Mb458HobfZyFfTDx4e5W6KAje4M",
  "key24": "4nTAAKDTomK7PW4x4tCS55DGBBz2LbhgKwPmBqPKc4MG6SpXr2f53Y5Lg4ZBW8i4yo2YH2q6Bc55dVej2BKBBerB",
  "key25": "3rMcFRpUMA1anGsjvtsvSjfFA1GRaMmvDZnL1qbMaN6mTFjhe6HXUAiqG9AAmNhrbN21wQNssiD4XiSJKmtECv5m",
  "key26": "2GRPKr8H4SxCmFs5pYAcHGL673YrGBGdhjsc94MHxoXXb5D5EWj5d1YXNYQYQJ3rhxbEoPhFHYVhWGLggzDNfMJ8",
  "key27": "64VKWebpfdqhwFkzhGz5NHqkUMLoikBtMpVEQwBQScrumfo8RZEyVAvD1ab6GHTY7QAf5GsDcehMLjG5UMqw7c7H"
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
