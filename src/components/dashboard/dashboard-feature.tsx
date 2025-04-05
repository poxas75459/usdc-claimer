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
    "2inENofxA6qxE6zhEDPMgRp9oRzyJGnDodKU2ude1V3PhLxnAnWHoZsmDai9x4aa3ZbsoCiJCx4uSNfT5ziLHQqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SrMFdrUUWvzACUVnB2gaMPY1xHThCctGAFG7DjiKHyYcbVRGumQc6ycg4FCWLbDXEMdkARgWpSLDAeEArg4CAy2",
  "key1": "1WJJ4bsy7udXdbrkUZ9jch3AtUHKu9tmXGzojrqd7Ghnet6NFfceUwU8w33gKYvYvHXqvgT1NW9HXpbYFvWNKSG",
  "key2": "64sTmZFxHPDHJsgfDzxMWmoxQnX2ozpzmMsnZrcYewixP6hwL7AAp5p5vwz3Aj8SFR6QDpHvksX77nNam32eEtQK",
  "key3": "PmL18Np7PvXx3A96mw4SKBv5DDWY22jidyW9mJgZRRC47LkzFQfXEm8Jgs22NyRCGZArRBEssyZeQhuZexnWJqL",
  "key4": "57o8jiwNsuYTdsWCaE5ueBgxz25jrHCzzkfnvxEnVhXPyAMUPcdSymeh51yzgS89TnXn3EAhDyJnqZuGaBWSWgkG",
  "key5": "sT5MWh7DACVKMyi2DspqE6cyHCEjtUasuD5tvW1iVHYfBnDNWYwg71SsGbWFuveh54zWvhBTkNyGWqgudGAo6h8",
  "key6": "3Lid4easySHgPPnsbcWaPFk7PQY2MtpxzxAFPhoWT1rSgd1D9i5RJX38PvgSMrPHSU9y6jEri9aSZg1zC9Y4Zzdy",
  "key7": "4FiEN28kxTARNVCma3E9nGkeV6AdR8xiuDkbXzGuob8KUqREL5uzG7m9zSpBod5xLYbaKVrKYW9vJJFo2RRsrcPU",
  "key8": "5TA72H1KCeZUQKMbKNMq1MqCE2GQRRyDjfaqAL9sWiqPY42qabfyEvjh7C65QffsX8cV14S9PZihSDmcP5XNgSv4",
  "key9": "G4kS9Q2xVAyDk4W8tSC738kvhSoTo2XBDmVc3KcLu3T3AMf7bSMgR1sZt3M6Dz5n7hPd2MSLZBmaYLLCfhdgG9k",
  "key10": "3Gnz3fTcBHHnJa9RnKYrnin24UqCLQ7gHj9igwx69Y8khBtMx4FiCGqNUkVFbbMrod7FKztFUSxDbNSo1md1QU1",
  "key11": "4NFv4teEJcyiHRPZLPTzerHWMx9NVfJKhmzn12THKGLY1u6kxJVGqVLgoASmsCunQddmNm4HneuN2NWppgCzPin4",
  "key12": "3gDFuY2Nm9EGq12mP5tH9mhL1hE5C4odyrqXyEkUFuYrJQTGubt69DrDp2k7rBZqbt9dHV9Lt7F5CDyzU6akRSsB",
  "key13": "2mDgn6oAgm3Ro7pZbUd1WnESW4k6pqSQp6pZSGL7bhPXhzftLqA5CNvxkitE7UXinAh8tzPfNWPGCZcUvmaqZoio",
  "key14": "5TPrvVdQZcnHKJqNB1kHtFYyjvpQt1ea4Exjm7mYuCfQGPhvLg81Cghtz6U89JTxmqSMgEaGyYts8P2zbBSCpPbe",
  "key15": "3diNnq64R2aEo91sdKZ1HyrnVTsUEuXnmG2buPv75bQ2arKC7yBhfG56hXjDnF28tyFcr2Xc3RS48uaa4bEi7rpt",
  "key16": "23Zevwd2uuRdZhFoBpHTEUiRQnsM4BQ5j5kfpedBLyxqheLPGfXWFj1M1qbDtGULSmkpEga4pyEVygAoWFqfg434",
  "key17": "3jpwreaKNMJ95YjyKjvBY9SjULPhnZig1PuAZhAo45wsZ1zkQ4b3FDwyxt151n2WiRCwTxDprgqyv4vQE98f9z1v",
  "key18": "2fk6k77pFgxXM5vot22HV3iFcTZFmsLXwBf1gkHZ1fa4qtHxG6rKs75vAkcBAay7zsQszJBHgKewUoWUJRST4naP",
  "key19": "yMVTQQAjNbzrLZcm8wCJr5sCufmYYswjMFSCzCCUVTjtibpsZFjF8SXP1YiWtaFkJtbkELUhaKw4kEKKuX4Sdpf",
  "key20": "5tiUu9maxVtD1fYFzo9uHukGB4CxW7y5wGxiFa6J6fUboPfaMvGy8wr4JiRd2j5jAug2cCVQMVnGR2sibKQDafrW",
  "key21": "48o9tZHFpKESuJeoayZA88ytLQR9AgAoi9zrFPtdqLNNqUBNtL6kwbkDE48G2LXAA93iDMJZR42Nqn1SSaw75jFm",
  "key22": "2cJ845vJ3SvqXTNzSCjnHgNGsz8oApvFMXcdixxZxzNzGzvoaJ3YdDyNMm7nKSSTcTZfSL8QfdRpQ6CRRoAyoAbh",
  "key23": "4J4khK1jTghk4UC7ino6bDoJJq7vMMCLQy2D8zDV8GkzkHVoJppyGTPMEzpu6JLQikxx5shgK26meN876gn4rEUU",
  "key24": "3eR1BX8rtP54UAGAq2PfHCFHiY2fiMS84j1be83uK11NLbFrbUbMmkyGyHRMgEpFNZNPGGATVsnqsMn5wjyjyKdE",
  "key25": "5V5tLebri3H9k85dYj4rqNmjECfi4bLHunUsJRAMMFGEXXjsnn99XnQQjrZXr7aiungHdKw6eiJhHKn9683XuLPP",
  "key26": "2GEgfXQDzJbaN14ugA6oQMpwHtmgehUwwdYXWWAwXw7aFAy38Vpu4k2jWxYEZNGQHYFjGgjBFfJBrw2Q5oadB8rv",
  "key27": "pcUHhddZ4E6ZFNaJREmEye4QfrHzEZk5ZmEN2dfrbkoKodXKxAV7Ck7znU2fRENqZumemJVkRNL3CAQkc5WKDMS",
  "key28": "3zYsKUWMusmjchnDbV1Pnr31UpkmbnTo793WEp4qNVDM8MhZpdKY68HrHF1dmqPz5Z3DiVrdJaNRcg15oWKcy9NN",
  "key29": "4CqBCa5qvgDdNqXMtbXdm8Gt9F6TJRLSDzMGa2PTVew2ApWWyAEM8pJWJjTiyvnkBJtPYq5shW45PgmSSd9s2YF7",
  "key30": "3zXaASkJC6kUJfgpvxUPxqwmSRdAmQp7ALkVeSrMuS4hvebyiDnpYMALbZjCQPpHS6LMygyABEk1vBFJEEXuEopE",
  "key31": "2MSaHrG1PAVPUoXwLRjSi4cFbeW1TuzUubzWcu3S2NPwAG33oSc8GwCXV1DMvFYYcf1vD5pfffXmwwWmAdavrA6D"
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
