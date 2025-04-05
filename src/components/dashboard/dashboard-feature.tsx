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
    "oRDJKu4GWGwaqveWEicTV73RM9v2RvgCnyva41Q9wz9BrkbK6WSZsZ6FEyQhvJbQZCYRmF2vAmzCccwsPn1uMGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DdwpeJykaY78Qg9ZGyK6QWj9DqXZv6LN4FwXzoEj6ddpFCpdYsgS44gFAKi9aFECjLYDteGjx8c3hat8ip1Ze2u",
  "key1": "4NXRKPFXSzAVT6yVR22N8vcVV4Kg8XRZpCUUzQT3u3Eoer8b3to52U2zXbosAF9TkeUFAFtPTwjpFh4PUFfrZmbv",
  "key2": "5XK8KGi6nWfa9KnTzr6ifQQo9soksctoce4ak6TRMZjUH6oXwTmyDJuu72Ejeuip2VYsnqS7WmXEUoheJBGzpPHw",
  "key3": "9UAepMo683Bc3EbPrh72nRGdY42AQSHPTTFtFDxY6LwR3GoygfM1yUL6C3KYFL84AK3m9r7se2wKAstV4fcegAf",
  "key4": "3MeyV8x9HcyS2Yvg1kaXi9rTNynC1fBLGMT7fJ1pDE6zBhfkzbAKt3MGTqJMivjKAvjuv22r8GrKo6oY6Gc6CLJA",
  "key5": "4AsxBo1adTFoRCWk1T4Cg1gdDXD723zonJUxXYAdMq7BJRkdKKtFqhen5fo5yyr7ZGqYyULd1QmRXCGijwHH9KCZ",
  "key6": "4zoQXng4HuEq62VhZkSGh2hZFh41gknqG3iDj1KRz8fr1CH13B1KZNxQc3o11ovf2AQxhzsJCMCZHPMCSPZDssyJ",
  "key7": "2LmXZf5u2Z15mNVYijdBLwPfxGnZNVkmvMEGvvgEsKSVx2okUhP6ZJz1X5gxYa5DwVzRZFzFnmQaNGiMozWphTW3",
  "key8": "2F3LeGn6sdarWEj6AktwFrK31FgNcmRBN2UEiPceQ6GLGEXaqxmc2kW8pktQMEBQLoUAQN5zXgiD4DUC3VxFagHw",
  "key9": "ZdXPQmfGouQa17bE1FAmQKSw3oqjNga7mZJA7gbqPkjbfg14LXYmvPrtFKxcZ7ZkZw6RPUutsAs5g2jPZ9PwySp",
  "key10": "3UaVcoK9S3cv4oerZmwM1LjJhVuT2ivQ2LhZJMkvWg5NJsXcjPQaiVaZsTN8LK6QUQkHEKBcnaW3kWFdzUpXWJK2",
  "key11": "3nfj8H72UWq4B69m7vLMYr3fuHpuV3HNq16b2DYbB4MrtG5zjmh9NYBEV1k8aHzNkAE5bJUwNZSV3F1Q7BrUM4ki",
  "key12": "45EqNUfyRLyZVXrmXVnezYJvooR8HjNSQypiZfBh5o1meRC9aoBAqaTGfnoSNmf8qUikuT8qUrue4MB9X1JMP1xz",
  "key13": "5qQm5J8nwAusj8NLcUNvwytyi7xbY9HYPdNE4YZ3bQrFNABAdiidDf9j2vQcUX2fknx2ioafckSDiYfrBpGwFjqs",
  "key14": "5KjCBkbS7wmYXHrLL6qcMcsLCzSa9D5T7DExAj1kTjqNAnEHeGVeXHbHijBtPRZNFuMaye7xFszpBF4MbSimvZtb",
  "key15": "preFhgYnuirEimiiCZfViBDjbKKuEJ4pCxNii7NnYxtP7bTtizmkMA3gQaKY969A6GWfxKPsgcozQcikQ8j9bdk",
  "key16": "5fSWGGf3Qg9gRPpL4FAoQZfctFvsgCyx4unB4MzptAWPXgRSawf64rcDRzp9EhdJ28thqm7BLU8RPUiJMSoi4NKA",
  "key17": "5WVdNQ4DDk3RTL5gBotEenAoAPBMyAFWGYR6FwdxPKveB4gZbWjyqKTgNi69Q6RZpHGVzLdehhckAf9BxVE3LzBE",
  "key18": "9heVvRR88aGjAsEZ6iJjx2XjkqhF52gCkGduLhUkeu4Nkop77ngynMU97TxRehNpVZMeF7YfgwQVxMPRwRWoLdm",
  "key19": "4Nt55TZKRtxh5nUx13QYF5uJr6Qh9MqCv7GfkqR6uUEsocnA3pbY2qLjykfZ5YUaDhmN3DjvHrwcg5ZdWeCFJjvk",
  "key20": "aE8KMYwDKAScn8duMohhcAbWkkAmcddY2x1AbejpTfvDiKdmwVz26fBnX2gYevbVEc2Tuvr23AxxCRGGAYXhiaN",
  "key21": "4zWQLfJStMaLhNeGqmTHsLbTwcBzQAZrbKx1bkdPVB62rWfCTyxJZKEBv9HAtAjxQhUiVwudJWZjfD2uUniY4p9L",
  "key22": "3JRujKvWttzyiae5eFTGkdsSqwrXWyTPYcTzpF3BuASWDyEn88XgfiRXoKXViDK7Qkw6kisETjRG8sZahVVYqYqa",
  "key23": "2LNaMW4eQyNTBtCtLo9oXxL8CzKrGERvsSb2UhxqJGwJcSjUkWi9bntQubEwWxcnSZAxV1cwQbUYbZv1qkxmyXok",
  "key24": "65G2p8KXk4uaBbtpPnoH21WJqDy7fTnQvAzzQ7r2s4BuDeRhtUioanUaSSXaKUrZ5ZWjhFE54d3tyqCYXyyQctZL",
  "key25": "MFexx4mLHJdtcqc6YGCgVLxvnrYz6zxnCeaWLGGw1h5mWV4J9uwbZgXEjscviKLDwZQBnTDYBaUt7JsuDFWPSVK",
  "key26": "qMiVHx2ZAoF6p6A7G92Ds8VcEAi76sGRQjBfFLGDj5yxwm2y3TXwAUgSjLRmpS7KDKkzQFqR1Q3Sa3P5fAdvAo8",
  "key27": "3bwyHwSGpeLprXQpYjA47ZWhXHcj9fnHV6PWAGBtJ3g87iJCpN5LuZQmwmag3exKxcvtZVNppQXxZb9ycj9qCiUR",
  "key28": "2QQAHEQqGDh51tRYa2YMz2WdZDZKDBbMxSdxjmRKR8Lf4sS7fEEccywjAtq9xY2b6beQ6CUEibNa7GphNJWHqhuK"
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
