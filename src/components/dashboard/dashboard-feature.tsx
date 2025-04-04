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
    "4JVHra3oMst4NfzxTBHeT12tFZQa57L2bkV8wfSCkVCivJL3zv4Sf3KYWbLqpRHKaZ3wY2eMGXvWUCZmrdN3o43P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9VS1YasGwEsfrf8s7hFiE1Mymme5UWfpnXCS3hTzmaNsduwXSHu36kA9JgmkApH57wqB5WgdkRM3fecXeCbybA",
  "key1": "3AS1MM881F13RhYGy7mC9kMbDdRz7NsfdXVAvE48eK4aEA1hS7AgiwVT7S5EUo8U1DJedS95gX5EUK7z2FrgsZwz",
  "key2": "3SZiiQ9gCsM1HWQKprneJanAtqrUQyHH8Z5bVm4kztCi1pM7mi3e6kXJPbacmTTxVbKPYVfXpTfo7LpauEiaiyaA",
  "key3": "AEdmfuydgLQxCYeumkDdms6w1dNtxhF8gQewfVwc5VprddQoBLDBpfVygWx1jwGoLC6L4XMo8ZUXtqTNCdKLXz5",
  "key4": "5L9wAZdkCQnTCLFFs3Ttf6tLeRG5hDGu4uR9q52162bjLHscm4g1rwWT64WvdDZZHvKeoJQBJbXmFhZWHjXNM7ZU",
  "key5": "44FVLE1BB7QYxJTxvxKo5Vii7if7spEXY3KK5uvZL7qxzTDbPMpf7MoHQegdDN2puwsFVGxxRvYva6SkTnAiui4M",
  "key6": "4hZrxeHttCyzvQX9wiSofJxis64e68mJBjVTwRgfdZLHgeK9ZLws33eyfmyKewG5kkpV6KMSYCL3F2hmi7f8uGmb",
  "key7": "4tsgasnYAkJCJ1KUnGJVAgFLDt2uadEfKBEnR5BBqFakLhgp5wkWEvZn7GEcxJ7xR3zxjpRByukZP34gyEX93uPM",
  "key8": "2iH2by84FfninVKn2gzWanRUDx2dD5rbRF5E1og6rTdGaVJx2XkC6Ni9C1nrVnFasPcmfByTSs9KtspjRCnHB65D",
  "key9": "4pfyscX5dmHs2qWVWeBD2ZJpHKWXvXnXxgZq4PdeH5mw52qJgxqkyFyhpF7tDW6chPrvVPoT2HJvXRQRxACnUxdn",
  "key10": "2mqQ8WzxpdznnXRom893xmvXkQ18PNXkFjtkeDmB4vx4Xv74dVifYZ7WYhpHbnb9iyZxpHntjWeN7uB54T25mnCC",
  "key11": "4fQ3vCHcXePT9fxqn63dBuA8gZhigY3GXocQoxkmZEchkRbsNCAxVNLqxWCrBZ4N8gCj7vEYhTAQmgLYd217gWEv",
  "key12": "2k7SDruyPvjvcgGhAZX7KswXj16h2bmx2hr8V3hciiiUFh1wNibq8unBwxym97ymMRgXqD43chG2s7hZupQmU4L8",
  "key13": "51VsofCiLVik8ujeAzmViZgjGKNBuCSGFn7VdydWCdchTPgZUF7BTHXjXpCccX4EoQ2sBJXEwGSAb4w2T2gnib9y",
  "key14": "5iXiJRxRjHaXKCCpNZ4WRmsHFppt4shRVNdPBmm7KcboLYwE4AFadERcSGXZoi4ZZ3wsRBdW4672nYimhnBZ9A5s",
  "key15": "4674jmrRzMxzaYvkR2CpQEMJ842CXbi5vn4sd1UWGCaBkwREHEaifxAkX3HkhDZQd3t7phUEDMy7A5QzZN1tN6mF",
  "key16": "24gMhvbzMJbp91WRXoAJh5tbMTQ86dBLKfbQDyhLvJS5kNBhCFnHyTtd8AGSdjtNDx9nBHkJpe84t6qFuuu6MJ5g",
  "key17": "ruuYAJ5zs3cCufghmca8qgkWHYPtQAU7uGVpmQyaHBtrpKKqLinyD7ifgjBF3ij3Nxa2fJb8EEGnu5thvKPkLcs",
  "key18": "4kAVsHHM6Kx9pdqtD2YnitwNqi57iBWy8j8ANNXSjMucRVnAdbqQypucjDfvjAUMDULXCH34PFVzbzQqgAvRUGT6",
  "key19": "5TzJX81dmVLeUGEqjHgJ8YVgEkLTg2unE34jTUUD2Z2nDQf5ySD7yo5nRiMLNVSAxqgKzLCuukvsr9j7zDr6WCaU",
  "key20": "xAxbpi3KqtAf8VZr22yGmX3nK299sUtVjDUL9RrAR3aiUVsoGGZDKpabcJU57ubUuvZaUpv3pPCDXDBDdJkJVqq",
  "key21": "2VN7sHWo2tokbfxAPkuSt9boHMXrtuhrCQygcT4Aek2P9A4SMiyW9EigW7BdrrVR787sjStV2KJLZUkZTsyGszuu",
  "key22": "nHuKNNPE8ReA4GAhivEMQgTWwnfLLWb7o7cCdi3w51KNUDGFuxMsYT5sAe7gYTvN45z9QK2K4LyqncCiBQdbhB9",
  "key23": "4Qri27ipfXkBXpdGHB9V392HhwEN4qffQy188t3TVksRWjsxRsAfA7vkNtjx2TshFLt3qAenQwUcZCu7oNeqfuK6",
  "key24": "Q1F2XpC5x48Y9sxfQPDuKV9ThiqE8VxYheyBJXUEeymh3JBXHecuaRusTwcESPkptiVfDs5nA5yF8FMQP7Bicv6",
  "key25": "2ESYaW3QQ5DmRxcnFzmG4Un4gPMiLjymUS5RkT63oacfYejmiDbMQjA3yk7XpADkoXBgwLhn9iZdxvFMHvt5gsh"
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
