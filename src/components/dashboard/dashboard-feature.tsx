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
    "3WDbb7161Wa49MRUvz7R5FcdvCcezpStguYhhTDKTDhtJNLwhqUGYZ1zrrUJt3SF63kwMgNMUnAs5UrZYvHu5Hgk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QwFvABPukxhDUHSTgVU6WV3Ysfdsg63bDizhMs7EpSiCpSBcMpEz9GoxwvMgmXh7fRoW7CPJ24h7LGg5qZBZjGu",
  "key1": "3Lgep3k4uL91pq5KoTjvErf1qSTBT49QpRjCXjNYZTyZJ1bFWBGpgYkxpe8UQhL2J9gGRY4Gnawjs6dLEGmjXzMF",
  "key2": "3vG8JGfSWn1Y6dTBFNk5nBCnfxgY6WZ6TvLuzYpGvQww17rTuooAmbMweSYrFiPapVAyHjTpvjk4eAx7mSAwA6zV",
  "key3": "5foNoDxXYcVsDyqFfBT19ZeLTVmULTvahsCVvBeSocojfE7wTh7tgiweMVbfExogGguY8XBfMZFEieDqiuvi34Rb",
  "key4": "4eoQFuZW7aQw6hoqJ9KzWmLDGdJGqg7YBA81k7jZKqiQJRvfZ2FNNGgQyKr4AZMjytNWg48sVGEfg8VwHZ121q3t",
  "key5": "3NKBV2mARrqmVSKhhN5mScyZ6FYJYo4SvY9m7LwVgdrJV8mQ1pjLMazctmriczFcLpKnxjdgjH2f14ENjbXDBKvz",
  "key6": "41TSFhyH96Zxpcy1NtGQzY7C53WWdyZRJD5BHVusU4v6781SU6pDyj9niRB3ehbhP6DHmbkD4NoMNZ4LMhuGuuHb",
  "key7": "4C1rjUrouSn5rUwTVtokxruRZmABH2HjN9XzhNZ3QzgnwRiWQs8X3KBQa7rSwT1WmHf4xo9jRJRFx1uYnZh2QfS4",
  "key8": "KMn77T7Y3krhUitVyZRe7sGgiRS8cJYf3MQbcg1xDxdGnLtpnE1F6AtpGmJu1kKujxbtEZC5x3ugMUmBriUh7d2",
  "key9": "2Zk1xiCNsxqTGt2KbuBdRzWaTck6kxU2zNBkxN5Z4SHmTrNnuyk8YLR4MVSrnUSC9Ro8Nn1PRA9zLZfg4Czo2cw1",
  "key10": "5XmFsUL4xvkN9BFiMd8w9kaVrkd8MVUMSxEtkMg1o8MbF11eMNvQBtcjFv2jMsKKg4EGeDc3Kxf3t6F8BvDAox8m",
  "key11": "49XHMG8VMJavF1PUQrQJQD7Nj76pjvDRdUDKbi8CTjuZVQTUdxJrjXscYYTiUr1UbypNWNY9sJmuyQxr82GD5q7p",
  "key12": "47ArqBByZnpD8tJBDPBU9qn41yhtudpoHbpHSH3dvSWd1srkrTzSdQ2uaA6PLAnTiHCMTQvLQ7FKCenbqLFPkitu",
  "key13": "2VfN3jXgN9GWXwy3XjFeL62Ng86HKL6Hq69shKaiNbnErFYzGQv3D5C7AcaUsVHntpFsfcxHpFDzJ2gt5VvWhmKs",
  "key14": "3ptfAtFWg2x3AdPvLYnUo8qu2KKFrqGNzmaEmiHowX47gXgxkb7mbRzm1xPD2ooHq3V9qPDNVEHk7twCLg9b3gcK",
  "key15": "3xbpQ5WqigT6qcpTy2T5mHREiG4mfSfmBKCvkXKaoqwj9FbBXymnGw86RQuawTyBxbHNu2KunkLhRxs9RNtaSk65",
  "key16": "32ngdk8pPJNE4oHADnPUVHsxrTfkiq6wMrCjPmtZBmfYp3Qc6zVSoHGy9KVwGWd4CwEvmKW3h66cbVLXNmd93XXZ",
  "key17": "cXQXBJzfus8G1XLYTGp4dhFENRS6iGBvnKnweKdGPzNk1mgsy2yT35EfVBpuwDosiTc2YE3EvppYCobCkN7SNMK",
  "key18": "2KUDvJtm2VtZzquXMPkZL7VtvVYgBHdPN2gK54a2BmdW2WcD5SaxtNkypSyJzzWhCWYTuLd6joEmRg9FqmyDL81v",
  "key19": "3QTNuUVb4Qry54LnfvDit6hTtHqowNBWyQLrTrKTs29rAz4N6ceeaqVQmmyGVY8EX4Qkhyy6SFZqVrJi4AiiRJDE",
  "key20": "3maBVhFUFSu2B1eRAGannodGtYrSpz8CoQEGvPyEHcWUDoKjnd2U3AZEU5DTLe61zyZs5noN2bjhsbuumz2Q4VFg",
  "key21": "56G7SQ3RTtDk2uGqMLkfQuZvJgKae1MUnsPWcmEX2YpQT1dc7F3SPXPsZbf8HWqYJfP7S4p76uX51R2dPPycgV7N",
  "key22": "5chvYUWjkUidzcstdGB11EhBFpbhp584C54jWLBuH6SCy6CdhrEkwWgGWy54V9hR9DBLYGwzf9mLQpfYaoM7Nhro",
  "key23": "sTPpkHfpr8PG1kgeijChgfjF6cDnLd4ipZYTnMcC3oyyPsvrcmArbhR1QQoadiYjFXtcqS8ZhwdcqzGxBH6rAKU",
  "key24": "2vb9fMKXjtnbofjZb2wGRC8BvnDjsvczHehznsQrM5H6pbc3ygkG4oJRvgSoDTHfrW6un5ZgjXSjMzpXt3UoYmen",
  "key25": "jNB3Pem4pdMvs6fdTXGjD5u48gHSJ8ssewV6tcbBP99ssVkwkid2jGvsaKMjd9iBCoZGMyA5Z4EnajiTsBybJvk",
  "key26": "48zfJAriU2nBp7vr94Hq9XjiW5vKK7KgYmL6dPtemVu5dkAnHRzdXueqNyZWDvwry1ce2hSM8ULYtWCpHwKgmVGA",
  "key27": "2p91pixoXxe1rbWktFTrfuD7mM4yUDwkhHaGbGUWuizKZBnyYwi3biqPmJCCLojA1uvWKJiReFnAzR4fTZbiNjG5",
  "key28": "4ccRGqSUNyaScoYC1hU71Vx6Y5pmUYLvo7jyFNwJ2eX98d33yeStMFDUzu3VNdjDTrAf9ASQiZoj8mBXm4H3iMT5",
  "key29": "43K2UPnfSRze6UA3YBSr71hL2T6SmvipB8GhK91dg4occxPcnciaPaivo3RrbNevLXuLbjvGeiTxjAs7KS8aPtBD",
  "key30": "3vSuGvXxsVG9fq4mHCBWNuGk9UBwojAggt5sgbfpQUzCFjRURCzwFrCnvyGnfEqDkctbadKpCwfCJReXKywBdkUC",
  "key31": "CZu46zh8Fx5gkXnmPcXX7FCA8VkczfitT6D9F85oWQo7eJ32yiFis9J24WLMWUpj3iaJBX6NKU83GfGYpiGAts5",
  "key32": "2nxvnCW1zjv8oUV7adsfzp8WX6Pd5uDhP9RhMFXLc9bgGF3KWezxJQj6hS1xC5HzfRBD3B3EYRdcXTsV2YXSRxPF",
  "key33": "3Wf8shXJTbpeRHCSo2ui9E6j1YwmY5qtis7BP3FeMEoxWWmJnCkK4sVJosfbaZi2iS4v7e6Qd8RKXpnnUZEbty6Y",
  "key34": "2342LxSmxFrNUWJRGE28MbNwV9SVXBWXaMzXYqGacCK85xaVgYrRsUMVZZdif3pVFx4zxsZZQUQTDJTr8ztdf2Eq",
  "key35": "55TAYj1UpK6Bp8LUuswiS9HRFApMwnJRwUuSR5Ccogg5Gc2NU87xzozc2GcxdmKEUfKp8SmH8sqp8siiBwLMzC6E",
  "key36": "4dQA75PAJn4JQ33rGJUJNjCCuBahhye8EQJ1gEMKbMsFHwmm3jKJzk7ZbibyVD1nF1CrBrfDRaaE9EBYCyYTBNd5",
  "key37": "1J9HYanJ89FzS1tpR1M9PkV7N2GwY851B7M83S8pnDzpZdCLSY6KRax8XNDkAXViHYFv9NVAr9BtgJSHdkCJFVU",
  "key38": "4kJPVQaEuodihdQW1kHEpEXvRH2eQvT85hwekEtpuGrbi2Gdq3bet3Stuu9HskyR6FUAZQ3NHxEU2uk1vToTqpXk"
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
