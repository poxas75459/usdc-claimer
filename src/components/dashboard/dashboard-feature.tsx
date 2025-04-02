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
    "3gkhTcY679NQJ15Fcmib4hnyg9ZtfpQxmYLEjqENUTTBknbhMtFjWLMhcwBzwoJ1EVTES59fmaBBm8XnAjdMRVgM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hRRqKGYQ7x3VKPxy8mFcLC7G1jJ85a7qjGQQ2APsDevSdr8fnU8pGEiRfeB1fWfsusSGYPY8knop5k4ZZnFfXfW",
  "key1": "pmrJ6etX1st6q2v1Rq4BkWP6PoQgBkUQ2Vg5HNJ1MLP4mTC2hiYP9oYAKNEY82KgDiCqhVDcdqDH4uC5YvoHvdN",
  "key2": "3edCATdxgpRQYmFPwteCPZF8MQVrwDuiCFYZscExx5mNtqGhH3QAkasqn4PE2Mcng9BgkiKb8ykDQPUYboycrEaf",
  "key3": "4g2LG5kVszapxPVv6L9gEP2TZgGsbAxUZksFPB6BkV59rudjgGjfN9B815Em8r5RdtovpzQrGzwHgKh7Dk8MZuKQ",
  "key4": "vFJhnyUdJtWQ2AmuKkmmY8MnudheBPuLSbx38myh8UoF6HUfM1jWpsJDPYbp5uTJgmmqHY1oiAi3XVUSN9MF94k",
  "key5": "4q23op9p39i2Hn2E8MsByayEzHY4c2u147y25D1MyGVgZnyt7enrcgvQ9iZtaQ8ZW3EgoND1EsJv68M8hcGKZw5a",
  "key6": "25HZ9t34JbkfWaR5VXF9aFszpBx3ZC456yRYgU1ZQZRsikh94m61AZ4xRbNR2L4Vz4MBgWNHyweMGS7PLhDehEKS",
  "key7": "3VhZoZ3n15kGdrQZu1cXjNTYFp6F6pBFNdXkRr7oY1iZS9VKteq4GtoBaegTjrqPewA23QGT3qAq2vgfqBW5HTdr",
  "key8": "GKYHPtJiAunNBmhVmudBRWdX2hcLUdS1QLBDTc19aT8wQPcyFacrKcVKvhsWG6KUo8ssjNwpQeSG3qk5VcmBauu",
  "key9": "27SGKEEAqSWkWr4dESBXzrkSJmEBdhdPZ54uWCWoEQ2Zq6P1eH6NSRqCRpsMyL1aiGew2rgnA3CsEixVSdhHLMed",
  "key10": "24mWYD9YeqJy1rNzMtoyRwUGSyd6Np9ZbeTT8kzVghvfh7buQ6aUQrkARJgMNmXius1oShYSnMPgq6AVXGWjnj35",
  "key11": "5NJ8bhPLfQvRb3dLtHZWRQ9TdYJWtgq9TWR8MB7Kiq3RZDMnUX2LSyJzC513csdmjSFrJHt1sChRerqpeXioMoLe",
  "key12": "3QSjWLRSyeaup6ud1BcoRMsJ5ExFCYH6fdqpcinWDz7MYtp5dtMTvMa5LQPYz18aSuLav62rRRpWRy3XX96MUdH4",
  "key13": "2d6iV8jqNYpYfN7MeudVQ9583d2bcBErAaZhdQkqSFyzFNMKTi85JFPvZ2VnWiXxD3BH13DETasqhM6skMA84QRp",
  "key14": "4JDtHw6g63T7jtes49SLuy1b8LToHjw6ubP2UaHFCxHDbGF841bGHAzirhE744DNXYbWo96wwoXv3qCwt9pzjMBu",
  "key15": "Nq9pJgbjzo9GWHGemSqKYDodLZqFbjzKAwyhVon4qnkQN1AeWssnUQMYsrjoivsY4WZB8VwZP3uhtFPzqj6naGt",
  "key16": "5YUy5hJs9EiRXqBGu8ufDAvDDbx33rS3uixYSgnVCctu2mcwMFrBdHpbJYC2MKHnCLubc1sa9HR1CieZLKDEYSHf",
  "key17": "33dc5sL17dP4HVX5hrqAuLdEAbhfCZv4xVVxdeavuAvgGnBKhyHThguYvBtCfMCNRqpT4gD7sa5GMKYfVMWKHNtq",
  "key18": "5Pvxp8JUgdMpwUCD5vjVJ5YZmF8D3oohFJrmFUEqhomkeurA6cirmXQGpWpARNMrLiC3hrtpisdgFHzADpiwT8Fk",
  "key19": "wtAqdWvBuPFTUZAs2QbgBYGEuDVjnEbXc246zUyM3XdE6aCtmpoK1Geie3zfHCScBrYfYigvhzzZeXKfXCaYj4p",
  "key20": "4cTRPAdV3q8dUcRq7V7hKpHq2Xi53KBv8UGAkRdJahKRDTT87SMYc6hT8iZVC1nALEiNiNfC79kNnZAKF3iYSuUG",
  "key21": "5hBrbSHDbDEHXN1VkF1FtxEPk912iAkqzgAqrK8H4T2mbGY6ZuDAPhCfVpcmiQ21qAFimN7oB3VLvjSWfX3AvZP3",
  "key22": "2xbxjjS4NarwVvz5VzHEWF6HKKGr2vZ6nKbA8g6mNBZw2Cnqgtxv69aE2DgNKQ3WSCvLB4wbjak3XLMnHw5GbHE7",
  "key23": "5PQHcoTTo2ctmCLdhb2Mc4BSGhNiquew67LChpC1MZvEDG8i2a3Jw4ik82jKQa8iMaHXCvx7GEmq1ZaFt4yGiPDj",
  "key24": "2Qj4cEnG6Ank1wTPaByLtD8Hyv49dGdDf1uPMtPzWxQprJuFGmewTCaRuypHPRMe3rfKL5QJ5bG3MtBrSfks5SR2",
  "key25": "5PrqS4Wnqaap6VzCrLXyTY2QoqKJTKYJTtAQuyyUEyAL21tHMsEzrzsdW4N43vUXjLsP5rLSxLReMY3WRbZXdUM5"
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
