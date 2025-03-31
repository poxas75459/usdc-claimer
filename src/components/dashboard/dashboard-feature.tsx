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
    "48vpzNTxcrYtWkkuPmUGvPCbm1ZND9959RXYEDS2e2LggQ9JYaNB1yVUcMoyotSiyNZb4z9m1Zqn4MukyHZPCuES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4J4tbahUC9KLR9pzxR7WgmfGeSnm2YfrofMnQc1SwL1bLYHyarFKBgXQWtSPTHGwkKJVRmMFfEUENGS4Uqw3B3wR",
  "key1": "2AzvcPuprfBbE1xyNwiZhSeCJdK5gE6YEvU4ca8KG1Fyrw9iyXRahvezGGf1Uzra758cSscEH1MAJjAw9QtxqCZD",
  "key2": "4nnzxZLT6SYoUBpTcnzTinAu1RsMCazuDzgi5FMrSF2sCcutTuRwDp4p2yd98AxEiuaaK6M9bftov8LGJauDWs9r",
  "key3": "Gq3fPugFTWxxFATYi7BTPrFkd8JFfNETUDKDSRrf3drecgyY7dV9CjQ3G1g381VtRUaKwJthueuD8AxFWmRZd5M",
  "key4": "3K5T2QyfQrbCEV94RZBo8dagAbcukZJ8kpjTA261m7ehr49Nwjpu3a6YQWiBpRcSEQGmfy4ZuqEopue4HnbTY8sT",
  "key5": "xut77VByXVXtWQJmgGnyNtXEvPBF59LdUHmnGpvVDspENy6V8bnAvi4euiv9VGQ3xZtPCcdNGPmKaK4dFMnCcwz",
  "key6": "4EPVED6y24ss5gfyEauM9drQ9wpHxnJDD8hGyoHDYdQy7p5QNc5KUgC7kJrzhJcYSLwtCNRixVq5j8WcD53jQgfN",
  "key7": "2TvpHx7bZBeyJZRe6yN4uj3YGQNx8WmbwToyEmCyqmS1UX1zYMjEDMxmbCH8nVJLAbybb8jAMh4Si6JSbAzu8k7Y",
  "key8": "dQoCtARRuFuaBoACuBLqqHBKJ4XrZsGLfMQSkb5AjDkCopCBW3D31xkry5AEhgGGKd3VeAMKzS5WVWax7RbkszL",
  "key9": "zZP1GCh2TfMuKmpHBLk2zCvsekuuBb9mVkxWeCtSwtjyEy9d743Hd6JFnX4ykj2UqRF6o6rpzoVWi2xTTtmdCSY",
  "key10": "fF6BQ52K1aqWGazLiS99VpL3VAcrbjQaVnZDGFSf82jyqLyK9pMSrmBqywvaeU8e39feqDWf7HYaHt3naLFCcjs",
  "key11": "249jk8qxj7tagXCqpPcrpUjSUekMAJMgDRDqofZcED7x888bMiiDiNmdcFoHxGSUrLft5H38AFLDoifyPseTb9JE",
  "key12": "65qEW4TRiPWNLU4jbivdATYKjsdH2Q53X6GmFWbedxEiCVQSLXkXc6dH8j8brv2MXmJFtf1GmGy4KCGCKDqeXbud",
  "key13": "4cmWbc3Bzf2s3PDumocyfCWXc3BLPwqZzsWJ6umg5F199AtCScnhNwKYXDPgZjjciZfPnrWa4UnMiQKQp7C2CMnE",
  "key14": "3b2bAaFEJfR15h1fmqrieo9a4XYGwarirx9AYmN3rJPRAJVAnxJoJoiHQUMP11YHTnZPMwsizeZ6ynpuxkuL17YN",
  "key15": "46f5F5WPovyRXceTQQUUPzPhVpqJy9N2uksQfSAssUVu1VCSJFyT2GNNHYaz7g3HgcpeBuvCibKVAyUZDJ9HsxJp",
  "key16": "4kX9uFLRyzAcRnLHwShtFPBiij194zKNwMi2dWVx9JXGfY4smzuXFod5fQ8bTF6zTuiApCGZMHaqPpL67LZThzzJ",
  "key17": "4wUDf148ueZvcZg6WLWmEDu1EB6eiZr1bTCmtTQQP5oG5bq2WbwSiBxGrRNFj3GaKmBBTRWEKutBgvcC3C6i5sXY",
  "key18": "Rg4HCxRPMXcpRQQ28kXD1mqr5qhQZhwnAuqTsr7ufVqsLJnbqzYqvcRJrPCQQuGoqNK2MvZHLW9s7u3RoPX9zGr",
  "key19": "3Nb4UPA4nP7FDAEqSXEhAMnU4rznSzERoCfcfFjNB1uKjaRo2PL7QwvLE6ctEoUf9p1kFpGTviFDhCBFKUWZDdLj",
  "key20": "2NpunThFD7XU9ku7EuYeakqEzmYdBoHBrwQ9zh9znT6Eu3faXYJocFLDM6tyF2p46NJfSUXJofbYe8USaTftyfiK",
  "key21": "5rf15GwViNixtfCXxHbxWzbMopfyaC5GqE5dyHGcnr29tj2DfmTPyw8TwnamjN4dEYi3ioJ6rwgx6tpu4j8mnUvW",
  "key22": "5cGn9fMq7MuJD6GX4urfia96oivWQQSqAG4XDiaA3ttkYfxpBpq9D2DZNnUgXvkjQ3gpqDVnH9hhnK84uxMcpXXd",
  "key23": "2Vm1Kpse9egGVUrG485Jix8Jswc7svCBKakSDjvWXEtDQNDgYrmdeKtk8Uh1HBAs3D4wwmJPEM7mh78V74N6AC1c",
  "key24": "rgFmhtP1JoKkv9ToLpmNup6bJTLBiYeZ183z6iMecYW3ewrEEssa7v4yEgihFaH1Zmmy3t8STA93LLWhiV5sKQc",
  "key25": "4uQ9TCfksHXz92e6F3fEmUxCBk546sU9WnN8c1rf8WvH9JZFpHmiKnDzGofwuVffhuCpqneUJm8kMuvYjWgP9tN5",
  "key26": "2nz8eWa3cTuMK7pirA2XjUtije3gWwsCw6UvzeVNmCqumR74tzUTQBXGVuUNocpZgZiMp6uDSKd3uW4PrBFiHgyn",
  "key27": "4dtYiCKb52457ANFswGRhBz5oEAEY36jpdq1pueS85giRiTkG2Bm27QpsCXwdhT4mKxNiiWnvTNCLLjcgZ985Rr4",
  "key28": "56FCGWjQ3m4F6SRWULXAuaepXkHM33uHK49jQGMzJ1Bxxc6iEFkkdDAKkurGduzn1enKWS2AFr88njNNN8mo8rkz",
  "key29": "2Yu9yhFzyb1gB21PTsehCjfc9Mjwc1vmWssfGkXCmoSjADuLbaotFvNiKUhEmkkKUNXz7D3hwNaHzTTB54ty9JJo",
  "key30": "2m4AKByz3MLnNns88PWyPzMFb1GgPTo5DqNWR3byyT1zQuxWvBtJ6tm7mW3SSZKaVNPLq7cszmVuwcxRZ1HvkmDq"
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
