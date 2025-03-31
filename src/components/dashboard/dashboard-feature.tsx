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
    "2W2hprXModR2YXowzWRMZjpiWzvL6oqvTNLVPoU6qNr3D2f8vtvxF7MF8KN748iLzos8ru5EqGm6bMDUxKrHHvug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4anEkXE48bcxchYKkofXNQsbMKexXVh2n7z41dKh6Vm5pzrzwzvAr8RZKDnD7fovKFufmy1VatGyR91CyMTGxUED",
  "key1": "BTxzdKEZet8J4f2ugz4V1mAjaPExuZPN6yBnNpYCx9RYat4pc8vTVQtsSRipeUMSY5nQgAUv9fvGbgi8NAhUZSH",
  "key2": "54cTCszkyeVUboDwHBEjHuEfC8ANvYJ9LAYadMdJTG5jRug4BRPfz6w2juzTx3Hx4NMG2aQwRXVsb8PKsDXUHaqv",
  "key3": "nTLudtjVJP1X2Y8AwLHbCD4E5Tjk9idcupfXaFjwTEqXwnRroqbyqJSmipV2C4QBDN8qWNWXdA3TdqdPCbV1fA1",
  "key4": "Jz2578zbf3wW4VfpfPUPQQqbXpcxM2o9GCRQKjP2JXvQDgzUFuKscLWgq2nyWiQws74sHMozeXb6q7qtaXgEqzR",
  "key5": "T2bNSfjoQ4jHgqUG9iWVQbY9TCgmx5yTWhuXXUd4CNy2P6M58KCuSa7Q5FR5ZE23D9KCQWbgJxNLW8spKoJGs3T",
  "key6": "eYoPhb3mJmziBnwRj26P4ZJD5WKXUrsqamoeZo1cmHPxLrgfr2mPuice4bMTTPB1H6YCACYNrd9MarDuF5PLDj2",
  "key7": "zusr7y1c5A5s3H68ma6cH9daRfLnbUJPGp9JQYMfavGDgeYVzGogsYCbb9fFBxs8dnXRn2AtBDcGiec2AubBBYU",
  "key8": "5FcrY9CepYzV3Lar6ucsBvd31R6SinxtvZBCLg7wtq73JeyxgBEmHaA4a54NxBm2ubz21k17oAFSqkWvStmRQusn",
  "key9": "2mPbgv7HV7Y2h1RiMU3BrgjoChnApbpt5U61VxcNq8wkoXXXy4HDrhCvMfS5xqM8CNNz7AeXaRPnvDQEdexX9tU2",
  "key10": "5kmnJeACrVCic7eEmJThAUbUinPJR5JNG27QdDvih8HDmCsNLmr87TAYCyjHsZm1ay2mh8njuqHTzvexRvYfmuFY",
  "key11": "K6Vf8HSzsyvY5wEs8gaDCPro18wKiCE94RwwbgjcSJVerqjFufTRR9MTifpyUpqad86fXyjKTKeTfVMRuhunqay",
  "key12": "4mWPGKbsuAsrNgJtdXyr1aczePW8B48vPJHNhpgvLvjuPBNTjbwmwKvbdE4VcpuKwBx2aX22ZG3BwBemhajjMEiT",
  "key13": "4SvFhhJ6KoTTS3NTCqWDRNa9gebFtYCKu4o5qBFMSUxhMEwn2KemwxRFSVgQUpCkvUJDP2SecUPzWSgHQkyPB7wA",
  "key14": "1xHzQ94X9JjvcJARqL1ttaCrXPnfYw8LK3Rzg9vZm3eDxHEnwCiWgoee1N3j2sUEDwY47ouRruqUXuv2KR2K1W4",
  "key15": "3CSLbXKF5dZvwFLH2P85zAKjMPXLqDU5YHdZUNaHEvwbe6NLCU7aAduKozgwJZd9AHpM546hrHtVYyWb53RDpu1o",
  "key16": "37bFBAUBVsjtFhXx822U8ywfpqVV1sMjD5BABBAXpvp419UJUw8t35stNewDemV8NA5bZriBBrcQJNkkZC1Qna3R",
  "key17": "5YVdEvW69qkLn4iGi5b4bYr9qMFEWM2xfNwGnfKpm8HArfvnp3pXsRgTu6DgtV9encY7siUAy6ADPL2RTPyLH5HP",
  "key18": "4CYM3ZXYKbYwkWfDc19W4x2WvDYohN51yuS1RFqknVZQqHXoBtgHiHEzXW8thhRXZSCB7gfXuYQNeYi4tnkGopnD",
  "key19": "3MLTb7JSiCGGEctvGHAtty3xqVnwuiKKWkNWuPYQwGv3K6DimSkbXmpRqhkcCxtzTF1MeVxKbqN2EU9F6LNx9epz",
  "key20": "2wyNnjNsbr453FRKpg3oGk5C6b7g5HMuCvdMjHjPZcNXLF34bi3pAduNrdpoeN2cLAzVsiqjv8ymc47YGT9S8kPX",
  "key21": "2JAG598tBw1hdjEFz7kdYZzVLroutUS198SPGUE6MwukpFQMbF1Ms2aHYGyqmejdy3RH7gEiVSEJyDT9VQtVp6K",
  "key22": "4GSy2A6FMfippPmXfRCiHKLV4YVvZRMWkKFLBsLpvmoHihuofQKisY8291PVMbGWahrkXC2M4uvC8j64xfDa7MjG",
  "key23": "4cswfEdVFcum116R92ahkn7F78c5u8Lk1kucKaXRmUHhxieP5izNNbcSyLXBCk1L3nADK6e7yeYEczkauSECbdgr",
  "key24": "67UAh7vRQPxj7obfwotUb5Emqago6ENyK5Ptqxb2YfCAcBFwzAVFSJvSWomRYWHyEYDeyykQfLKpyQf7Xuvv1uai",
  "key25": "5QTwYsiYfiyeYmVhrT3a65c51e7jpsxTNt6mevBNp6BzCQbddNSj5pCfCkZS3RdwsgPUviaaTnB6iKoZjGaqGtMX",
  "key26": "5TNTwWZpoECpARrYzUn7ioo9LvRADBK1quPALHry2EXRxiUpdDeF7CBqrtzfheKyryoSFaSKuT6uP66GfSo27Ktj",
  "key27": "2ZWbDh4VrjFkLCrxpY7dVaraxkvb6c8u5ooEo8uYhpxahCTCdGK2x5mQ9roGahscMbZgvJ4ixSdnYcmesVRYSCAv",
  "key28": "3ZRHxG8LdyV3GpuovMqPvz5svam5T5wTScFYv6P4HbypnzWAfGrb9Xq64YMzneYbQXpuMEvcaqgRRttprJHqQorp"
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
