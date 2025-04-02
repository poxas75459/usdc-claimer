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
    "eDswXCZR7MQ7zioCKJ8yZWYjcPJNw9JLP9RzyJKVi2mERaPCL66hph4g3A1H3P67xpksHbweqz89bnx4tua4stu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YwZtmEGKfrbnGEZEC8Wdrd8smdQGc7snRzdDEPN9Yjm63wJtTQktywJHJCBo2iqV9qF2p54NDoB4hjDLh6kqtVi",
  "key1": "2Yk7oMVqcavzz9K2BzuzBuN78hMQyXqXBqZcSkb9bF4wFtb1exiiuRSCUtXkjd8tjUMb92tzwpbdiXU4jEnU9iQC",
  "key2": "4ecdJrpsYXX7dvDDZqQomMVunCGQhiErNYonwUE3V2y2NuU7HybkvWf1uf7Y1eoEGDYwevKDkYpTE4NgcFM19i7Q",
  "key3": "nNJSZpx91VcuoJ1gFDim9TCVrZ4ARuagCf3edZGNR77Q2jsWdoQjxWhg3QgfjAY3cj8GSSUteQC21AaedAdt56V",
  "key4": "4MDcqDNVPJGacMzDA1qrhAAUYxMYJrYchrcP6Cu9zTJdb3ZaeixA21WLE8yb7txnXSNV4Kgnmi3o5ZfPvAwvsEDL",
  "key5": "3S283ZPkf31a68ueV1oZrYmWA5yLmVqiW3v3FcwNc1RV8RTwQHxjEzeF292h2DKLKxbBSnKoqcHx3qg2oALdWZnU",
  "key6": "5YqFnKYrWG1ZZzets1Vzpohof4K8aqe57VxPawdLQ9gSzDkH5MRx81oe2d6gzvUopGewQhMKeHLEs749CveECPUs",
  "key7": "3PPBzMZuqL8Pm22TCmFjGmNLjjxXFfQo5G3Vjfet8B5vtA9q3ySegGnWmE5kUF4fbBkrcV6gMk3GHQt39GFm5sM7",
  "key8": "bj2YQKnYLWVTGGFRLJCeTqNoPZzTLUJXNjbjyynTc7E8sfsJmDQ3p7gRyP7drzhSiicurTL3MjqfwmPcEGapEdE",
  "key9": "2ZgpV9mUQJaY53z5s8wLZPWJXFp344sWbjtZmVkkrc24aWXiw9moqrynm9YE12VKF5tXEvmxWLVu1Wyun3JFejug",
  "key10": "nzRyMG8m3bFgb2ZxtDPaxtH7dzgmifXqtQj8JtaBdQYWVJkpRsBFD33xZhgU1HFFohYPz8Cf6tVygbpbroBFKaY",
  "key11": "4rZXFJxjp5vq1i5srRjyg6ownDoPeUdii4iA1afzeNuu58WaZmNLGD1RD2DuwhoC8BAnq679VAtPuthzLakkd6pV",
  "key12": "dZsNmZDmFbC8Ajs4HUG4113R466g5gT7U19kRrHgqo9oR5MK8dFYFfddQJcMASZuPBAfczMNecRZWcu9h8pwYVu",
  "key13": "zdqF2mYvNQvbsLD9GoNJETGpsmVL2neEujLFxehk1oMUdRP4GeXtusb6N7jLy3yo9Yd9ARnrVcT6S6TjZ69QSGg",
  "key14": "21FfAjF28LG8G8QwbjqYk8qxJNYbVsS33M2rHZbtL6nQCiH5AytH4mvNXkLk3HHiR9C4eWQGjfMGqzq1p6RYuikQ",
  "key15": "5ewRyovKY1NYCMJ4C8QfTYMbpWtFg8yge122ZojC71jU3eRzKpmW45HW27UraxJQvZbmMFvqbP89xyuYyqAZHxR6",
  "key16": "a9tcjCWS4ZhdeNUNpgTY3JxPQyEkd3xypjZHVyt14NuAb7PySfaR4SbeeTEgcmuQeHqySGcJLdsWd32nCzrQRdE",
  "key17": "5YRtocM47ZLzK3CETgTrYy2DXjGd4sdpj9CrRq3Co196CY51rNj5qH1uvipWNTjLkg3LB3g1z6yfcuLPf39Bumnj",
  "key18": "46wL4bd61krMdX49mYytB8KbdXjD4qLbFzPsu9mYVoviDNSADheMBKbeUuL2F8146r8rA4AZvQu19X3epLJpvps5",
  "key19": "gMF66PmkxH3MG82LqJ6wJwUre1TMKhxXgR2sk98zF5oxKMwQypzBwHeEstbbV5GW63JLbEgcEeiURqvy2tnhXvi",
  "key20": "65aHPgnDUsUrPSbSVfuPmyCTkUGiTrmiWZdKPqoNdUM8AVJEweNNZg5BpX3uWGRinoggC6ewJFPBSBTo3fgf6n6v",
  "key21": "4WMkHiHS8qnYr5ScADxT6MBMYFgmrVb8CN4UXyRXPobjVGHb9tjEgh3skBz8e11HP7P6Y8sqvE8cW9hbqnEkecFL",
  "key22": "6vWLkWpMn4ieMjZiNDr6Av7ZGkdSQpYfEccBRwXBx7jrdKqszQgE8iKHPZQee34qrZ7u1sGymUsG1jGD74aXD69",
  "key23": "5ywevvhnZqnnvQ3bWt7CF8nHNmTurJ3DK5utAxv5Wrudxh5wkHzudo3wNrCUa4JgRDL1TfiTrmt4SJzFpvYJgzoj",
  "key24": "Yx6FJquiwc6wYt7wWj9wFej963hGVASte3csrhYPyjjsFAZQ9ELWKzfMeNG2rmj98bTZ87QMMwG11HCeHPwNb3M",
  "key25": "4gcRhcic5NXBT55RYYbhiyDLMWMuUpy7MhQnp1HGveSYeTokaPds2V1J1ESd4Y1BhLp7NLja1ND76vJWNnjRs2n1"
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
