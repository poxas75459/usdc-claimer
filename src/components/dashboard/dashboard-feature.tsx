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
    "zLXN4tvRzAvn2uPshhK9eYxt2B3VY7ZL8AePJyLf5LAhj6nJo8gtRFLb79QqghUQFpvnwxPpRn8Vw4K9JoSQVoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CcFu1LDzd9qK4y7e9BQTceegF4MJCa4Vn3zTVtwbTzADyWBC1E3rNPg3tXUpMF4nGXP62FoT4zR8KaAyin8Dk8z",
  "key1": "3opVVcmLSommTTKiXgrk9H184LqcV6EcTS3sBahWPbvdbF1UGNc7gx9VaMgreZnQqKfh94g7BCAUpm9XC6AYia8A",
  "key2": "3C3TjCAJMbD9kEZZSjx7h74sMYroPaet34bUi2BJHsPJdwDtSLMeuw8LvAcbuLATvDdm6Pm39GuHzmwFgvEM4bJ4",
  "key3": "TVMeaE9uGH3T9QQ8oBVg4jx1z2uTiVHgNSoXqYqq38xABFEBfY56QoyFVNZTkeREZRK3kxZQbAfdQeuUW4JAKhp",
  "key4": "2pKjgNDntxibVJLkLLm373LUd9wJvXoQbqpXzdnPNyubbv39sKB8b8P84MbzABEK7fc4bGFb6QAUmfmtiTxcFp82",
  "key5": "5QTSoL6xTwpAKu9TgQEMKCDG3cCBj9PXUJbWCz8XeTa7dKQi8zWPhH7v5LAvJLt2GWuzZYrz4VSV6vxcHWei56ye",
  "key6": "4NC42mEqXWxFNZjjW1fubbRj21G6QnV3JdtyDMT2U3SNnyoDbSAahtAn5iv7tdeWLGhL1WkbJp9SgK73fu8KHzBe",
  "key7": "37jFF5CQfeK9VqrFxVQX7ogoBZLiwKRMmBgpoSd9EVdyM6Mw5ws2qe6v3F3Uz7jgMKMohvNjyG9gWMNqMrcNzwMC",
  "key8": "5kiUGJ6iw6nUhdCwaaSho5UhUPWAtcEFdRCcqD8C1yB9ggmu3S6bru94H8c7UUCofasg9h7oKNLYqu8pp4EnmrEo",
  "key9": "29mPxFdebsfSe6nT8uW5xNHr3XR9vSKFXjRyXJsi3LPV7NMMKMsTTqBxax4LQMZStp6m2V3SETGW12UxoWZbVf9s",
  "key10": "2626mRMG7JtNHCCQU4de9jcqFuAiWmKeDnKVUo2GNiFyKn9zYFTMQCsPHar5totE6V1GdZNq6V7narszSEf9wVgs",
  "key11": "iSQmCFDyR92EkGfLzHQ2GxJJGVTw6x1V7fyWFZDAAzYra1qp71aX16GGLRSY1ziWsxTameiraHQP7ckHhvf8dvv",
  "key12": "4LbxLmih6YYwm4eqJLFkaoTcGyzqmPMBc95TduQNtPjmT7dVAeakreCk4uDcr1NaYdKuRrdC8bVW75qaYVQGFnJ1",
  "key13": "4qL61L4tQAu1mnx8DHmjNaUx8QbHy38kkovFAPVzTJeVyBaDZr5Sghs78ectkk3smpsJQtiaAvoEtsHkt4QKeT36",
  "key14": "T5ZJXAxPwjpK2UekxjS8EzW4oRWKoWuEcPWuVZBCd4TuAzaE9uaby2nSHg73reFwhQHsoTnwgCrarWihboe9fbN",
  "key15": "31vpG1TpaXRxxEgEgPPAivqyTqfYx2WXuuvupHiR5qnRPKG8bERwDKkB8ziMPzMLbbKwgwLxr8UG5p36DNUocVsE",
  "key16": "3txxq78C6c9iMUTmtpAYj3grKZEBxN2VeAgc5fez5WAwrMUxcawfkUXQTFWKoT1Yui7SN2TWp72wrnmY89Wb8Q2P",
  "key17": "gt4BE2ac3bpU6DBqtUM7awmfntToEGKZ3p7g5JeJW2f47mjB8czweWMkLzT7qF89zALqCy6HR5ZaeMQ1XsiT1hu",
  "key18": "5hAm5eSRGJXFgTkBaWbyvZutcYmy2TKfx22yjGVknukB3EErLVQds72soVpjsUMTTmhZjCsYWYAGi7rk7qtrbvpn",
  "key19": "hKsrAn34obqbnjVykussi9gaj5zWy8Jvg65h6oEq2m3miVtXHt2nLxydTdiihVDpKqiXbTkPZgUWMQyEm4cvoN8",
  "key20": "4uLJQ3hQukLwCubm9XS4RZntwDf4TyTgCeoW2AwFUnZDPG4iS4TZKmfh2u7vuLXuajcDeRq4uyt2HFBFZv4miEGt",
  "key21": "4CdKa5VBB6HMgXvoEohi1mCgzJsuTPpUhe1j572m39EdPNMpEZ5KZ3uQHnR9TWRgfKT3PJqz7ojR8QiHNpDvKQLk",
  "key22": "48AAKubUdhvCiaTd9vhbbtqhCMwswdj4Uv94k5qWUqA3JK3ByhAn2oT2XmguS5ucjQG5FsA9P3o8C2jruvHNepcB",
  "key23": "2mn4nx7HxykXrZ2QvC2fqWiJMzr8Sqn4AxnTEt3t8zyQbRDpcM6nur3Qf4KwguD2RQoLBED69ze49Kdv1TJ1zVds",
  "key24": "3EFazJdnGvY4frrpfFcfkVGqVBEYV865eyax7keFZRpjnQ9PWYsohGrXToJ1bu9NLemNEx681AUZHUgo4vTvX33e"
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
