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
    "2kKEBM7hGx6MLN2VB9FuoHov8LU6DApKyenB62uCusvsNgbAYzW7vKWdFvKq5NGfYVNkaLUfWwiJAAtrD22rhMj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2THxLE7EDzED2HqKNkqueEUfAGW1y4cC18PDcC4gw3U258VQGjAdyUB5zV6JTVEthBS1eJ9oxzHf7STS9RYM2Upa",
  "key1": "2sBoSsowvs7dnGDsx2FGnusTqmt6H7DF9tWDsSjpEXh9592RQ7VZ1EmuLi4ka6M1WqEP8LDiyeVUBcA9p2czauS",
  "key2": "3cWNoUpZ513vRWE1yZgBeDUpEi8M5sbCBg5ZmnXUohxkyxBPPwEASmgwBATxi5YBp6GdoWjekieMJMD7AivUtsUQ",
  "key3": "4sGrCPFhTJ2i1o4wGRnfjCpF9yPjdrTeJuf3XT4XHvkZRvBsAM3wRZEGbKdijfPjx2Hpxdt8DWkhNsvoThdfmmx7",
  "key4": "5BGKBPjJq1MRt8YfG6X4GLr6zvxx7qNyFyq3tadr1A3sGe4JPMYpQyJK7gog5QbWmWSwCWBnwsempFh6iTnsTKNi",
  "key5": "2gsTH3bRMxgeoJzCw5mGvKrW7uDCB4WyDEP2L6aM7jUGrhwAVfz1jMTDPGtN1rtnjmiBRBq2tRqt6FtrshDSSVYC",
  "key6": "2vB2qvqEhzxwEfhGH2BMEhgcSgVQTZqu5Ga77dNMSixGTVqpFfJRL6qGWJyFfNdvTnApdv4CLKzVz1rm9zUKEhRe",
  "key7": "3ZiEnoVNwCfpSn5LAvzXRGZpw1EBSvBgPz5wSwT9a4igFEH5zSoMWr74kiwRRsVZg3R1BbNrcKjr17y31CQ87rvC",
  "key8": "2v4PBgricLGjamhSyWaKigsrext9tLnjtVynHSZh5BJouHnP5hkVVN1k3nAF8yoKo1cHkQ9r5oq18mULjBfsZ4aj",
  "key9": "23v1KJVYk6YqbAf3fLPM2ojmcBP2bAzDZwsebxMVYxMQ88Fz4ZPCQDLpBR5hPRNK19DNLfUe7AEMSrL6UTkTbyms",
  "key10": "nHotg79QfmUVxfoQZXAZgsJbyeD7zQju99p43KhUVyR9rawjKpkuGCNFbNt1hpxT5h2DyFoJNk8wBBtbT1AsS1e",
  "key11": "4GAWCKfkasQDxxnjnSQUJvpJ9JP6Do5MUaM4s3L4nBiP9M4GLSTCfQHF2o59QtEcukwHHfaE243e4E9uDmcidNxA",
  "key12": "9fPKjBdg2WgjcDr4PpxkAj1xQMiA7d9tYntWZ8Unc1r7C7N44s9PhrRqBf7fWuDURnyPzrUeLpjLq6kKTB5KqqP",
  "key13": "xWWiiHdjxx55xWZiri6mgB1W6TLasePSDuWbGM1bXLoUpVEGREX5EUbHmg6GrnCrHocS1DYEfFVqMH5KaaCcjj7",
  "key14": "2xPTmB5BYBJehWrTMBp9pqc3Tge5X8Jm7q81fjx2A2x3JhmLDE7RZo7XP354wpTmgT7hADogJExt2EABNozKXRv1",
  "key15": "4HN35gBSJc5tZ1KasiAQp47zxokNjK5L6cAsBehwRaaBCsdjLar9mRrUVmQ1mpQnpCS5FALN81H1ej3vEWWXnwAL",
  "key16": "52Pz41mgs3iVApw78QzXAVpCuGnc7DJt5ptDEEhj3AVjX1gm16THbcP8cd36jnNWxr7nXx52P8NpgmCKDgfXcUci",
  "key17": "5fUyVzXovX1P2HrHuGX3T5oaHsJA4EPJHyXfbSyTq3HULpqi6fFnDZiM8zzTssqJZ7FPThU4qPStKBe5fj8wXNcw",
  "key18": "xxodfX5oNLEb1VWhtPp7gg2g7kdGJu2yeGtabaujpYYqMwg2pXgwN8HfJG5t4HJS82m61TMWkSghzENFLPBURsd",
  "key19": "4aty4UwLUvRoZ3U6EPS24PuaY5tW3YvJecYE96mhCXL2C5CD9yub7vaxTMFUXu5Et8o7T3JMrmvXDU472xdpH5fZ",
  "key20": "52uPH7rNtda4xVt8onqdd2mKGZ6foh5qrjYNR8Hd3u68qt22mZ6KbZZMVCib2xAJDY1HgYEcoCCaE2wmLNKjXAKK",
  "key21": "58Qgp8S8HAJMoLzwnkLhPFKNw839jbhX4iCSUW3gbbh8chFKgCZAfaWBMdxTNNKtMLFt84zECD7hyKcdL1jjUKUd",
  "key22": "3VGHbjj1Lh6LbNTdqywZpKvCRw2vUVYuknLWZx14oQoTPLwGZJHG6FwK9i3F6kRQn9BhwjN9Q37idDibJaanLwgT",
  "key23": "RYvjG7HPJUZJ45PXtAvVJMBi2CbA3huEtTaA3LcuLLsp2jpjVbNoaZQBeyTVug1ZcKV2YJi8211fSjjxJa5M1dG",
  "key24": "4s8CePSyPNshv2bCdCg9fLX2SpCUumQTS23ewd3DoyB1XGHAnQLHu2QvT3aPLJZoyqk46NFbkTXt23RNAnnZUe2Z",
  "key25": "4S9SnbwnUESYCihPet6oqyhg6GEqK986J11jWokoi1WcVCHTNSy8aDJz6iNpYNozuJLs6rjtZPv6gbWC5ERNi4pP",
  "key26": "JxX5kggMipeNdvpMUEkPBxXgbw152DDuy5HW3TaTfhHRcNpG5Npu22gG3W7X8QUfwDW94wV8GvUrBjMr4e3UPuw",
  "key27": "4X9zUSiuw4s87kyJcBoU2EXxdCtvtwSfVcmnyQqaxz2rhNCnC7eQYvh24N6A2JC7PR1GYKgD92X61jcrViN1XvCd"
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
