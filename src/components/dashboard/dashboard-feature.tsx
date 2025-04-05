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
    "4vSwsayDyTGHGuxyPmSF4stnktQfxvxDEHVTSfinN99YTKPJGSifDbYSRJ2vakyGgmhiULqZqQyNRA5fFyaJFFhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fk7S51f59dMprjjzzPdUPPnPXZ6g9xjpq6WgyXC4hXoc3DDf95f1wwUaM6xPVTZUFprrEGwtPn6PpJwt1eRbjpz",
  "key1": "2gnRzPnhgNAMKYLUhRMKdt3VmRnocY8aXX2Asb3Ms1HyEsD4HV9AXd9ETCXSx2duSmpbZ9KNeNxpqT61LN96wruB",
  "key2": "mfs1L3UFixXd25D7nCubr1qM1KwXXNaYJ974yndwEEA5ZDLFz5NH7mmKTiu9fFczVbZBxn663yq8U1KHWSgeMak",
  "key3": "bWjZMLop24K7qF8BPoivRZwYYYBFnhtTL3G57v6HX8xVWSZ5zT2dU1HritanafoRkk3JoEFSyZHzHNxReyLjs8V",
  "key4": "61nXdjrexaovryJPne4JcTjnUXPwnsnMc9MRck9nNMSxdXaAiAPR8NWDUDwYLWWruHmFmPHC3GtgKdGg1EPTLrFb",
  "key5": "5qoUWxNgw1vJ25CkoCZQbPVwCocGtLCUwJQ3zwB5KnjnjroQMKVbJkj9DGf4CZW2kMgX59shNHVNHPXcnFUxiBbr",
  "key6": "2uFmwNYvgb1esQ6jGDaQUwPKqkp8bMN2o96xPQW23Th1kgFZQHmG3CyTEiMXA5xHYhhftFbAMSXXinGJhEK5Q4n9",
  "key7": "5r7EaLkKi2yLLiGfpZTv7BUA1p2TAHN8NtYwHAWurMm9ctcdhSatJ2Y22GEAbScm8QyNNCKSEQeQTr71R3kwb6j1",
  "key8": "5j8AnwahLzQrbRsWsRJA5EtYdTNKUhL3jcryhtUT9m7fw5FAeVBBBQXkbfGDxRtLyqgEYNdevXAq75xiafz5oMMH",
  "key9": "5Nh5pbrw4fyToSUkaBtEFfEHuqz7ecnMJQi5FjLYLRXpGWu2DdqnNM2jcAdEnaFXSDEj11BDzueLZzDEsrjoVbnA",
  "key10": "3gsFe9zJDbmkKUCgQJAB8f25J1h5ANyMRGVAgrWQDccgVMLfeNWjPbaf6XZXXemcCZejtV85ZrxkWDcf6YRUBz1N",
  "key11": "4yNYhy66xUajbJbWGL6WsooVo67VJEqWqfonGTUkNstQ7aqh54a2ANfbLDHj5drzSTuKo5KFLzzPwhugQzA5JWMo",
  "key12": "5SRaN8P3s5BWeY1wyrChHDqUUH6e9fomUC4GtEZ13BdNymi9TbQph4ULV1djdRGFD7uKxFutibENyzpZHJtrkW7X",
  "key13": "59E6mkMh3rBR2xDQ4reTS9opDEESBKZkZGV9Rfe4F6wzCtQUBhPPVssQjG3t36kNcZ3Wh6Q3UxXNtTHPsEej81mF",
  "key14": "44kUeCwfFAUymsgdLCgz95fMsNQj2ddHUqPKuRA7FBy3JVMY58mjb23bBHFihUQ8YBhYbZnEV57msCeThzxWMDn4",
  "key15": "4xGTQceD4Mycugu4nH5soaVU21U3htw3PtW3xHJVR8RUGTHJEdiLqUCv9hpFsx3KPGmGgsLGGcCAYKaDHD7PZEnu",
  "key16": "QxpxrkJQMswqXUwdqtt3inEebyYmCHDMQUgoD74oEVcb9S6hNcbGguNTLmwe3p5QZsLp8fWcNKxVdqcFcRhvRsn",
  "key17": "5WLfnu69eY6XwafxMHUHKbDaXLDprWVjeXPiAzfSD7cKGFSQidoNFsdsgsMqmjxTqFpeYN5QtYa2PmUy9CqBBvDR",
  "key18": "2yr62TqsZkyocUk8rxZ655jVS7tkoNqYu1ZCt9BmyG2Hqwz4F5x8rxjQyQL2Jrt3Pe9K2oqQuWZWzJw43UBqmvfK",
  "key19": "49b8orrmPCobJnSH1k3T9DyHSshEKGF2g5GZR7dhKgha398iKcfak8DESCgzhQFJ3GpgzDDjBt7sBiKqNnGrcM79",
  "key20": "2eDZ9ufMkHbcqjXRcHQbagj6UcWXr63pwW5HxBU5pfadZ9zEtKw8CqAfhZYXv6RH2kPa6irxS98crbw1Nbh4MZXB",
  "key21": "fKcM1KpFxSoJsZMvtrdy9Ls7V1qCrXwiSjtXMP7x1xjmK4rx22Am9RwxzeCjZk2fPY8ncbJcFAeuCndUeYoRsgF",
  "key22": "2CLjWYh6sDUNPApRyPtUZCg7xfTR1fWWH8v3No17AqPdHaEQMnBKvUHrGLzG8sNYaqg4KcJm31UYBB6WrXX47Gqn",
  "key23": "5F23xMARcBgwQhT5E3QSYZdsRK6UYYjXTPrysj5gbPjeP1kknzyth93RRLWQeFU4E25YbPy67iCdFmhdq9Zszih8",
  "key24": "37PVBv2qeRCCzFbzygGPGEzavZc9G7uqUQBi99iATM9ZZxg26TdYFpczUrqh9MChyoZYeco7Do33a6XNL6YxUmyD",
  "key25": "3BmATqzLaW6nsDju7TYB7FZKKNgC174jGmAV8BFG6VQh5H2GxbaRCw9yZ5Y6SJt7XVYKZ8iYhhRfc3NqxPAkQ41M",
  "key26": "ssvXjfJiz8z9upvv27B1KT3L1QHJbn3YjWeh2GMgBc85aNsyqwQC8RnzmCRftE26ABosSHvPjsdjCeKtzssoKmP"
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
