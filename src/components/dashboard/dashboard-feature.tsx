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
    "3dgQM13SjuUz3osaXueSwT6vPS7NRT44nebdXrGSC2AD1ppizrck3hGTsLbniQ94UBBLRVufAynJFzDFTRXVj5RQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52R6WdVnZ2a4B2uQxWFSGqo4JcRnfUsbobsLpTS1xyR8h3KZKrTxEUJGbfZDcHDSMz9GAzfsshSWHAsfT48a1v6u",
  "key1": "u9jCbnB3CauNu7Fo1fEAbGgXzoyxXQYGhj8xFhhEtTuXkwD15gXSecjkPGBtWrH3kfFDnPFDV8N9EPfHo2zS6Jk",
  "key2": "4AyMqydDHQrFRCFkcPGbjAWkQSrPhbczrZyfnSjuSB2hLm4KzfzjgGRfnRK1SSg3MhPRBEBvk1YgXajXbm7TYf9L",
  "key3": "3F77HhQY4HSuaCbJp2UCVUYWPaNkJaQJt2wqmArBsJT3PVPzmGE4Rc2h3Cv7yxACh68LsdbdQYv9GgeW2vgvCSAo",
  "key4": "46U7HnJfZzG3PJRtKpKVEPbpKfMuYFxfW3SckFWUWYLJq6NoeSR2AvyCLr8fE9m1hxCSmF2zUyYST7TXdp31oPNY",
  "key5": "29Uu1rceeZDTuJtRv9kmtzC5iVPkXZV6epK7srraTKZqqV6bgU9DhSUETpjFHN4Yxun3rH2NN7KXGXA5DfdT2Xuh",
  "key6": "3Nhdt8JhKZcX6Moi1jN2btqS1xMo2fccvqLZ6t9Zo4gNF37WzseN4aETG7f6ZQh3eY4D9hJFx5Sqvzdxu9D1oCN7",
  "key7": "3Drt27Zf2Ub1MPzbXKPJXaGUbbb7iCTEqXQTmDbPnPxyyKQbCHTypvnjLaJ1m2gKk7dSZzJGXbYcyJZNYFctuhtJ",
  "key8": "62H1ns8h35SGf7WHE7AAGQ2sfY2KW1STnJieAt5gBvWuX2QbN1vJLa9VzgN5rnfwFvZjtXZ4f13YVmnXo7Vt6FCj",
  "key9": "jEVpGc6gGAp5rwS5kSbk1fj5JwT3Qr9oUYomiFuzBZ8bdQQToHh4xHtKVhrMzM1ESyu27er2p1P2oQGNfwuDQBq",
  "key10": "sct3ws8ojHF49WUfmfLBw6FXhyDjGpvx2PVzikLxkQHpQAQPWYySQ6XXaFeESp4CqdD6hZwtPtFb1zo67aoyJHb",
  "key11": "TrBaVjyMLLpKzHBuXHpx7bo1ih5sxd1HJMKrnjpdbSb6DU8zAaWTNKk9fSVBge1s9rqopq2eegaQJiXrU8WfiCs",
  "key12": "5Jj17NeGUmyXguaz3WkRHosmhpcRLY1XrVSUTXHQGdGcWGb239EoSX1uKDsjSz9SM6DEBdFmMsLzseGaBZg1ubFV",
  "key13": "2qTWuHLEdrQKU3WbxnHnRenVP7RMWa1KqrwpkbJnsNS1oBMW6eGsg5Lu8ca4pzK8EN9kXvXRiDGRtw4ThLmHr4fS",
  "key14": "4HBythnj1aDbKNQuFTaus5wxjEJym1TLwPy6eJNo1zXR8juish9LXwohGWppyV5fpfSRgmqseQV1syEiFzBV6puM",
  "key15": "4YvK7AaSkFnrtktTKGkT6a33iFZxAnRiTETjaUNnQNWLkTe3oypaBje7PiowaGqnDCkyKvD7Rp93MNGAnywM1KA5",
  "key16": "4CJWK4jJvSxTJsA4Ud3gUrXAfA6xk9zQc4LthyG8ryTXS1iN47CSkveLffU2sjhwCXKuhBtLrtN3H6LAZtspdR7Z",
  "key17": "2phmzosroJccpgLcJ7o6UdxATFfHGHiCdUw76k7UePXJE8WT5UUFY6P2sbHtnGVQj3L8KFE93GRUyeC8EymohKfC",
  "key18": "4rjUZ5KMJGWW89gzeo8gMheDGjszagXdeZhL7MoTfrk4e5spsTSjraV6ZhzMSMG6ks6KPiUtjZVGJwmGtvXACU8Q",
  "key19": "srw8PQDC2FWnGb7gtisGfHUaJr2gGUPdqAStdgTT2jCPYYNR1HZNaVecfQRyTA7NMxr2UAs8Y6KhAjGeF5KCuZB",
  "key20": "41QVgxKDnuCpKLkCr7fA6GFpW2FqeFrZPdAyx4n2ztnXgofT6DmvgxxjPCvTGekLbQ6WYaB4UnTEZksv7BTTGqz2",
  "key21": "m2Yfmfhewp7pnFn41zDcP1kyDxjHrUsELiVokTYBYXYbiRr4Lzr27n3sxkw8wS7rE5jspu8h2mJwKUY73VBASzy",
  "key22": "3MZH4iCxsr1oHPQSr3fGPQ7w9QD27m9teSEe2pNweWYPakCyG8oghiF9fSCwhj2XrqAd6YwMubmG8cVBw9aKKWZr",
  "key23": "4zxsXTGbAfZGasrvbiQ41Vofntb5EmqiYu8CcKu4YzT85HMqgJq45bEKMd26JbwVEKBBzRLMpnfueAdMqqJhguUk",
  "key24": "5WoU5rbE7CuP25kAzc5bvh7gfqf1rr1i4GtCJmyWSzruRjuass9u5Jp2qLuGKw1YcgGcRjDMkteTjrLxARnUGvtm",
  "key25": "4QmbA3a77GTwbKcbBRzPp4MEbvskeDaKDmAgpuN6EZgGBRGfBh2D9osqHiJHSmEgi5yZzvsUmcYZPsjipQnZKuC2",
  "key26": "2kE745e77mCn46sb8DcG1pTihx21niLXJ462a1F3RGBRMAftKZKCeDCbjjDjEByDJJRfMCM3Yq2jzsxNa5PXiRwi",
  "key27": "52N4GSe6zPpN6rA1VhpFhyiv7fkZuv3Dj9t6Bae9SJ7CJKcE3vjM8F5XEenDHsixXBXCWkt27p8S5xiGVYK7XXjt",
  "key28": "4FiTmoKCecP48BJQ9t5qLTK7mfSFYbdxwtcUXWRCs7DLsB51NYpFKR4VLPGVzF9x6HZYEeRghTuYdqkzDovG2CuF",
  "key29": "3PaaQ7cPgk1mo2DbJMLTUGJK8RdjmEne2uoiU5ix1LwnC3BwohddQ554NXviiREWmPmEXfJeguFLoxz9nqiWqNqj",
  "key30": "22S7yxwwVcSME5csCGDHyakCWH7XzcwYqHyZsqrpW7zkVBvMeo6K7XpcsFs5L7qyeNs5ZqLLMF79PTAbbmxEowwk",
  "key31": "QY5TsfAnNdBb9SK3eyF5b2jo8cqGFCA78LWQZrjpsNKojymueJwZM75t45UVpFP4FD2gnzbxDidbqMimC6JQ4a5"
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
