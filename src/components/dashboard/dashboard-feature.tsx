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
    "5efojxw5iJFR8iN67WLtRBsqexFM4P7HHxDj6SPZyyBXcjLLCKaaUJ9JPnez8YEhFfRY27XeheAzdAphRT4cdFbG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tjV3T7A5g1YrsDDZqc9d1rk8pRsJhkEWjxywVbrELZfikbJhQXJyi84FNmVqFmntJJmNugSk3gA76TfnDTa91nn",
  "key1": "64ehZv2wLFoRzFgbYdzBAJLjB4CKUBfYW5ZP7mjupzpcn6EQ4ESWYDEwgoHkEXw8DPrHgP4sGiFC2TRSTxXEWoua",
  "key2": "4pG3rMcsEUJrzSLjHQcahAdZtbdjE2oZKQovbcHakHutSd9YKXUGxVwaZnhdZ55ZiSQVPzNn4N6KgxZgpdd2zqUQ",
  "key3": "43H12UJR1kHtsT5EStWyKB2ynPuYkvxDN1BNubNvEyQozvF1dYHunSQBV6W1ALSkkKWjfVehcPZNSvnwfskyt7e2",
  "key4": "2o4CxTj6SkwumsXMNMyUCWjePG33nvWtoNNbUUCwTzGAZMojGBWU2ZggSYXW2EqbJYZHv7L1FQ7RHf5hAbgyoKdi",
  "key5": "EhKt27w1thdfAbRu5P3mQojdYdindGXQRTX3mHXGMCpjscWYD3xJLhbVqhVMbwDo1jefiY1YKh96muaSHGBh25t",
  "key6": "5h9Cr7YjGgeB6ZUbVcCWhv33C5sRGgM1F96zFhPeaPouZvj39C2mdsGVTWbKmdCCjNEvpz1NsSfqZGmD28KoPtXj",
  "key7": "3u9LtunndUErV2tvhHhdJWrXEGT8fvfcZBLo7sZdW3WUfEXat4Xnk7KoUKoSe3Uu1ouLDbwaxSR3DRzJNuJMoT3j",
  "key8": "4jTRWasuYTvCYArJd3hG98785SspjCKwCmpPLLZJhymmA854u9DRYAYHjjY8JwkwNnpTj7RdBC7up4LpafLi79uY",
  "key9": "2dCFC1bsFFSmuChvnGip5Mw1cMTVsC7zd2yFLynrDZ9ifSoVdZaeA4LkYcufPSwDpQAzc4S453KQe932DxnjE7aF",
  "key10": "2DJhrmJaPLbc1tggobvQvsyQXhA9HjdFT5TdE4gXpLsqDSfJmRK63xauraGQnvgnoseATuMf1uQbyvo5dZfxuHjJ",
  "key11": "3s6wb2X2uo8UAo7rfAvr54JUruN6MPQFrJ7S5hj21GYNpYomSVadaQGiP3zpYVtkr9otVChabtwLGtDBqnXwjdWb",
  "key12": "5yUFhAqcStaoUHyCL9zQ7UAqsRTWeYPjHFXLq4iwixTEVAzXtnvw2ZkAbnZsWVkNTSHZ6CSLH3XGRhLTsXwsmJM7",
  "key13": "47ft4Rgunz1KvWsFW1tjtomTYDhnaM5xqorWehvTRabHWnjko5mEh6imwKteJv7PMJZ2UQdyukhwZSaAB1w4yRph",
  "key14": "Q6Ts3Zvd4DXGyyYwbFk79BFmZZ2y3L7mvoUQcz7TYHviAYwJ9mDUbFXH6WwbMqKyLzRkGL4YMf3HusaPjJ1cTyW",
  "key15": "3J8jsMi5JyBm7sbcRdUBMrZpdBZSmYzAKgDsuJsPXnJQ33KfKKLoCz4wPuXdrGTV7yDXtjbE7tkodrk9H3Hxty4L",
  "key16": "3RAm6RYmvWwFNogFU9BvJ2QqUoCd1mfz2UCeWej4RuuQWoDTs4diToguHSrTBrq75GUuk9FKC3663Nia7Y15yRFq",
  "key17": "5qZQuw7W8xXU5Q3gpJXaVTnqQ8frU12vSWJ8Uv8ymwPZFXcSXNNSCLeeaztzMzZ4gJSM35bgrmW7mE5gQ2ovB97y",
  "key18": "3fi3yF8wZyLdqW2NDASK7hMRuChV4iDnhqJPHbBkjryfNZbDMbYEvY9B7jpPPvftp49UWQTL9pM3TtjBvb77oVrq",
  "key19": "3pHgVXQutXz7UYKNpH6YDdopWVSwDFCjEqsdZWHEBqqAXTM8PiGpCFqhbTffjUUYMTrtTRmfFYZfzcFjDtUZGKuD",
  "key20": "eHCrioNeKSm6rRxahZuBk4oXHJwgrWj8zyZigjHWp5T6HGsA92rWDiufEHqVtpDgpJoqZaZMfbUNHHjiSCfaqvX",
  "key21": "2eVxg3MACqDoiz4FTbHkNktbVkttRHWanGCqpU1qZcufhU2UHL7JwkKP4YxCQ1aEL1jXrbrD2Xk93nfWQTLEFy7y",
  "key22": "4NoJRPDaRjujPK1TxjDabJgdVDkzxGd9q4CcHsqvVu8kdQJVAbNGqB5K7tWCnSSAJRfVwndLfpx2rLzCqANLYF5X",
  "key23": "9ab2THmJNAbox5uAfNkVCL9X2nvvckoQ8hcbYtTmjVBaFQErcW8xcwUL5auiCqq9LoKZ1hhXG2FRjeA2KqRfitK",
  "key24": "4WgWa3ZoXdmTGX44aK3VZp9mUWGPdnoForzrBmKoWayFqz9vW2RLZE54SfBPhU7ye7FPLT7g4p5iUY8zFgwrK93B",
  "key25": "5LggZrQBJ9d9YSXyT4DuFx7uhsgBsAr4PzvgpzYxxwzbhwfR4sU3eBbXQYVG8XzZmhn1kKizvp7bpknA4G8T6kDg",
  "key26": "59Z5rHC4samHcKKExCuvb8jtaqrJ8c9fUmeQznh7QPceFvLwZkjQnnhX9ZA2auki4hwY1ApyYjtVQQVRLoQcYKKj",
  "key27": "2FjrAtmihTLpvP3b9B6Ho2eyxdSBvCwfHPX3q3aRxbRTucm9AWSbmrvmsqXj196kEfsW8UqC2R9igrNkgbpLeYuE",
  "key28": "BLG37CynkCLVEMwmLGTeu7eE2jDYzQox1iRkXwNM52qFWXkpswoRb3XzjP7JDugJBwYNnC9hUtjn4z9uitkBpSb",
  "key29": "3qJ361Kv4S9JnPiKbJQ1rW3jNQgmJX9ugTC7xY56nSggouSRGkwVu3JtKPzuFduXcMwTW8MwL9iuHhL6Qv3Jp6d3",
  "key30": "3pagt6CGh7KZ4X8Ta7VbzF6gxF7cveHXFiD9Er62LjNNe9srQzavF46GhFnmsnymvmRCcvV1wnSRgie6BEjSMPbM"
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
