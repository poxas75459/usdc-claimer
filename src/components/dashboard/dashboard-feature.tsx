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
    "3NM6Fxczb1BW348b1B9Tij7yq5PhwuBH1gnVapLFQQuNiAMuXxpqti9gQnaJhc442Rjf6ARxqmwXMT7CDqdAqjW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bGEtk3gcmhS1AbkfaMQ2ATbvPTadVukzjBxYMALEaTtwSX6ATAf4T9vneFEUH83rVgKPSm8oG9sVbX27GMvkpjB",
  "key1": "5kwyndKU8kUerwcqkuFPiU1rAMACfkXoXzizeFEswCvR8wiyzahmG3e4upsoCDN96oFHz6VSWmbhZ9WedmyA5ggC",
  "key2": "3E5Hzj369LxJ6G6fQR1PkAkptFXwrhbSEQoXhCym482wYMk6TgAyLvy7mo1Hd2xUxqQSP5Y7Pkr4SdcRNTYuDT8D",
  "key3": "2zSsSPQrvo9m1pjgWhggPP8SfP1TtFya3cWvFFu5VvwKVs9z1Y1zPtugfAMNkDsPEUPCgCzAoGL6Apt7tVSwwosr",
  "key4": "T66hG2rN8D2UC14YkSNgSCTqwtD3vrceGSmbzaKjcaEtS1g6EJVJ6U7PnCngcNQh7LEetnf6r4TX13Y6vFkS4e6",
  "key5": "2d3QJrX2ckUU6Puxbxm6E1PwwSiqL33HmFLR2R6tVAnz16Uux8jh1n946CMRwZc3rm9GwkW9WSYU36Ky6oxzSL2H",
  "key6": "5Xa5hVwvmewZfBPFUDshzhz9rNrDwvjGB73czCqKDGbccS3V3Kok2S9HR7jtPpLYcNrKmG1BjgGT7YgMf8caQiz3",
  "key7": "bvU6x2womqx97Tr3zw5UX5mgmVuoqHVLTddAYeKRGK7xrKtgbinstMC52TFUdXnFAE3x75KZ5yQDtYJpwRZki7W",
  "key8": "dirDweL4JPjhwPMibSBadXHa1i4fgPxa3xgXGCBoWKpucBBogfFZYxR53qHPN92MAYutFpZSgRzoGNnwEKGJx79",
  "key9": "yyhkHwUPHX2ZU2Cf4wuHa9DTgUeNk2PatWktkuyYvSfYAUiNpmFDh4qSazF7XfbRCQio4VBr4kyeQ3zjJRbWyHT",
  "key10": "2jYYajmonmL9kGsnx1uvrFtcx7Y2DU3k2pE24njRSvbZkp4UtUP8MGHKuVmXAx3dinJq3GQPp3PdtPP8cCXAinmg",
  "key11": "5sBVXxdD8Datoitc2SPMkb5PoRCVNyNrZSwvVkrw3gUM1YNJvUdUfoEZ8L8gP2w125ropnUjpzmhmoT95FuhrmMS",
  "key12": "26xswgaCCFvF5cGV1aLAtaz2wKDmH6AEnbXz6YNPvNthcTLkoKwPkCQ46N9i49d4ayVDF2ZjwxzdmAjnxiNhLcYe",
  "key13": "2oyy7Y97iEJWHvvDGWCcn3KitsV534UKwALJkcmKcdRpDWf3YAzpF2t48wfx5wdCMHd9HTLkMQq1pqXfmp56gwNK",
  "key14": "2zveXCZ7gs5ohq2NQJvWiBLeGvHzbWfeB4PE3wDAt8wvgr7JrHdE5stANvhPpbqhH9JP319wwb9pLpyQPrUYVzcd",
  "key15": "42xKeWV1knKmtZCY4uHdzyvLcLKZtikj7LPTpz15To41SvwxNQxcLt4goyrDf2anRb4GW63CFopPAC9gHtZLDDPK",
  "key16": "5msPxn9MDGGPSom41uFzcxRone5iSqaBzrwWxHTdAfytNNHDMGHjQin51sv6HVnBQwsjvbmDZZ4eyYDwsjhaLfJm",
  "key17": "288jB4fsqbjtJuowDACAzWmxukqvtEpBw75JUDgzXrrdCYLpaqzUjBuzFTAxji4bzFLbWyq8398TXWKkV9zrDBH9",
  "key18": "6ZH3BVaHa66K39jfGW32n1rjPkoCr47Fg2ep9FSFZ5aTZzWeo9Ebx3geiiuQiqvJbx8MVssTzpvRPPdVjdS4C3y",
  "key19": "4Bx9TmBE7zGW1fhVS435jZZatbQrG3VXUnhdKc6nWRhjzbL2R1Y6ditphRKud52LLiXxiENXfzzVjX8EHU4GURRy",
  "key20": "2SHkhiPC9zJ4SpiwcrkU9Xav8ncSpbiGbesz5LXrAg5U3SsLAUNqaYYAtahK2b4f793KkHPTaWUCtam6tPpzZCWG",
  "key21": "3PSrkmuaXMt74CT5ZNpF8KV94RrJXnRZCANVfda5y8UP8zC8cfkqgEDw39kmoePHRRNHyYT5efESjayXu1eJVVGR",
  "key22": "3TmS1Z1AkpBwJcr5AAYTNnJDKpjQDQKnPXXqyEfhQVj9BF29TL59xzZMuXYuYz4ydaSfQNmHXCfaHV4tpHFAUZAJ",
  "key23": "4X2vztehkYcsgySB75Hxzf4uewnHTryyYzN34jUMXbtbm7dQLamqX2sisTcBLPqEkxbz3BwYMrPyE4oeui5uuW8o",
  "key24": "26huMCoTrJdqcLEcUyyofs4zBhrfPWtWYPP5ZJXTfeJHQk3ow24iCXqRLZPpianWe5oYmdT1ExEwbw8YE95LBVjC",
  "key25": "4VKYZvqB6VJWfvP6tU6MYstwHW3bAFPYM4jz3DesYb7ujULxu7LTr73kKibV2G4QQUX8W7iMPqXSutmV1cxA4rRc",
  "key26": "3TrxJHSi7ifhvWE18pKLveDVT5uC2ZtdFsyYgrfKy71bWse5MCg4Ze1Au7X6qXU5dwMkQhjDwPywpXigZegWH9sA",
  "key27": "27eP9KirJJxxTvRQiiZqqUBRMWYkyJcMUFWwb4BS8EF5ArSu7zje6nPMDgi4ysYxcVQdmHcAYJXZzWACURe8zYXE",
  "key28": "5NGJR5PRLTyGaC8BYoQjXM4dnR9oT5A959Bfm6MVcMVh4mgaMXMoWdZPgpu5G9CVN9hXgjfFCFbxpTUAY6svKRsF",
  "key29": "4ppuoYcv6XDz3N4A4LBtv44qjef8LiFdfERpurJeBhAJQTApX36rgJHwYFY3HFCoVE6eh5tERKRxyRBpaMWLkjqD",
  "key30": "4yCbhTNpzLtVE1JKCSrJ1upZDvzK2ZB1JxEE1j9UGzcFJNmbwhdki5i2RSRC7Rnf4x7N2AfRmFwXP3u5QaqRY7q4",
  "key31": "34VZyR5atB3P7hp4fAihUdvZHcjZN5384UCqk39Mzib2zoiwtG1ZrjGnZcri4zt4fgnSiXc6uy8EmzaghyHuUQcX",
  "key32": "36w3uBPnhm2fA69GoSVgtFR8U7t6ZByKUNX5s8FM3d52vKeH1SKiKLkW8gie8TZqPiToTSGFhmSWCaZCvjgC5C8E",
  "key33": "58Mk9PPrVuPq63wotv1HgQQk6sHJJ4WzDi641y8JfwGQEvzgnWz979WtL9h4XcbLaWRBbUoCATBNx3WyKcADxdRC",
  "key34": "3LkZzD4HqR2CBUH25KEZnm5ub9JLefBarFodYVE51Z1vc5GcZc7vgseY3Kvt3Nf5SQfzhAy5BVxe4JEUxyqGtjeF"
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
