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
    "2T5S7EmAgTHHjuftf8UR8Zh1L9DKUaQL4qNmMaGEqbYwu4WbvAwT8yDxfE2bWdoEVDcsNsUurvULFrckd3WeXVN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MxNJUjM77aro8n6Wuqwa6PcUWNwQ7RaAECPm8hjVJBotNAeoGcsDv2ifUtjZ6H6ioQ1LJjfvuxpZFQaYA6DEkDt",
  "key1": "2fsbq7YYwu2UVRbGYzy7jkwvkjeum2f7x842vNQHqhgpWs8pv4KPCun6qE7updC5eBS4zBWT5LZPENaFo3cQGsR7",
  "key2": "gkKgLeVAc7LexAteichQT9TVy2BqzZV1o69Caro4qVUzCQWNpKVr24ofetspsbjESJicuUCMFuR9GC2mPxqn2tK",
  "key3": "25aUTwReYvaoMUsCG3i9RQNc3LFtuFKvBkKYLtDLERJWUXXbmkBDsUL6Z81PnhvYXqecFf6Hf9VGWj1kRhwAXiz1",
  "key4": "5c7WvsKgtxoWoiL4VovDSG3uuPpycjjWPkAy32yZEgpgoav8U4ECRMUdN8xaoYx3u2BLKNmcsM1d6FLkF7id226k",
  "key5": "4tQScd8emaipCy8TZquQwW8zFmTdkS4thYp44B2MH4qaZNUd5623mTKyRxroRMYRD7sk1EwSX3rb1F1pChRhpgFd",
  "key6": "W6Y3rFipXZGTswUP9j2SaL7dfsgucRmGaPEzo1qT5PHuDUkHLhHFB16AZnBmHALN3DE9EBRCAJAsAEZMNjVozHQ",
  "key7": "5A9doNCXFBEPStpQm5bxYA2DvE5fMEv5AHn5eEjU5xEK6AQykxzUzjvpyW9Y9SfMCqaBU63tChW5zCQcL9TKUBcR",
  "key8": "ECZUrRRDFsGeTXfxqw2E4gqmzkD5CUAWczwt9S5PJVti8KYwNzYNoh6bgANZhRSKS28AXUcJDLJxDjEZFYtFrwa",
  "key9": "XM9Q9ZBmi4eFr7euJYZG2jumS86CZLAfrwxANFLMnyQSfU5m8U7riKTAa4rUNeXuUfAXH8o43SF7imf9TN1aCdp",
  "key10": "4AatZEWrTBqfLcFNkSM9fs4LFhJerGjC5jNnnHDDJMtK6ufbEz5zaNDCY7PLrJh7RKpMhUdx1X1yPnrhemXvK2d7",
  "key11": "58Xf9NSveaR1Kxw2C97BZhWkKRc3cMArY7fAkp6Zb1d75cmZQLK4Ryb4aJu3gfxu6zWqsPfcsYsncHcCx6urqU6G",
  "key12": "4grVnCYRXt6eSX2Ze5UWC24QtzunfGDGFVKWtdWa1nADKixgYPmfbZRPWNM1yEmN1LXjAsvqA1wbs1Yo4RJRMX1j",
  "key13": "4HiswXB2FdMNuCaN1u4ftgcrtHskzijG8CdYNtQNPD47Vv9mP8s8Thg8HnqDdHXf1FhCNGxf6bPAs9MavhDgDrif",
  "key14": "43QmrLBbLWZHfzJ76SXVANekxEe5En9qcMyHMc3uZbf2je2dZYTfTRUKB3rJrZamhiPijvPJSYScCJdisNZqnkez",
  "key15": "4UYEY2ATLUnspBH6JkUjixvNnLLBc3m7a4psF2vgt8fbgBnUpsXfxQ7Po5QrAfsHWN4EL3nRCGkn8GH8EeK8zpPQ",
  "key16": "LkXXrkq3H9Ewvdw4mNuNrk5RaTxKtkVPrAE3xu1KHVvDLthakQ9tDKFhLgdAsgFg4D6wHApiCCZ7tf5rjhKZ2AF",
  "key17": "51KtrgWrqG6MJVGVxtMKC8o4fkWqekD7CEVXFUDGjXq4rWCwDN6DTnVXZDDg9RykjMedNnkUs8Susj2mMrQ1C2Bw",
  "key18": "3FLUSA8rAXFmBi9ry2zRib4Nfzd7sbYTTnjZXe4Xvgibp1NNTF1Q34w54UNx2JJ42V1zvxh1AmWrqL3w3X5wv3c8",
  "key19": "4LoT9yRVQW7RybyPiPxEsw8E9Xyb2XuMjw3Df21WVhm4S7K6PLZkDD9hdgCSsgKp3CzGPazd83i9K6kfEEWMU9oU",
  "key20": "u4dDtkR7YazhQ3mjNpYGSAr3XLkfwsEm8CUtCSxKNvkTJpr2GbTnkyHfddhBzrxU7hNXeGgpAy1YvdbYYHYa9Bv",
  "key21": "3sBtiVQJ4kUH5X1Qgkzw21iTzzGa7R5LW8YCs7QGMUZmQWVcSjdhsbdjZgJfnf8fRauV4QxLNQyZ5DehCada26y8",
  "key22": "2vrjbm3DebNcvjfDeuYWqsp2kgKnU244V1C65bubVBTNSjAzoKnm3tpEhfJS4yYo7V6TebG9724w8R7fNz6bz1iz",
  "key23": "3AKLTJrXshbebSHEgBtR2tVqxM1iFEUjarmso88REgaAUBVwu1MgqjzLLsbzxjFK924HGf645HtdHyfQP7BxZLZu",
  "key24": "4cqUkJomzqMi6RJT8JGYZoSrV2ihpKmGGYdowhMS8KK4kW8WPUJMB6D1xFpR3fF3URdscotQceoGVgs8NkXtVW98",
  "key25": "3yhWVYGK57NY7GTrfzihy1dUnCA4tpSmQjTJyo8fSQrKwDwXnq6Qfx1raDHKHtq2JTTSVTAEaMfNJag8EFZt4Xu9",
  "key26": "4Uoas2nToKmS1Tn36ujgUoJvhfssw8HZAYcGjG4Avxg185VxB5bYbn9eCWwb9P2YVeDw9uwxdXTepWo6CXxL5JBj",
  "key27": "GxTqLR2JX4TtoSi17LhDLKQm5WARbamSXfhE1tp7VsNPCAn5pRSaduhopGFAYq41Rsjt8Eabemvtxhh6AakjNyo",
  "key28": "2cJcCFVnRnbLLrY8n6VGPoQoARFfUo8WdoQGgDdHKvXarpWC1B1voXouudP7BJmvAZtaz3sjFywoLDo4dxqcz9jT",
  "key29": "5XsE4dZ1ogmoizT7K1GYApoJR9aUmWeAXgCuCFpWiBLv2LAnT9bdbBNRprXX8s1EE1NypM98eRBNHghysu3y8Cg1",
  "key30": "2QbQnFUQgqaRveNUoNMYoWcdrJWKgSyiiiRWERMxHyJd9eXRaD2jy1rhLcC8x9aV4zPsShweVBVABFwzJUCqGnSo",
  "key31": "es2hAfTEJaisb7uk37diEg8F7FH7vLkEcG9t5xCK5ACpfxEJW7RjE6vy8a4qVjEbTc85dBpWksqXkKGNRxE5BFZ",
  "key32": "614bQES7RMZ2RdAhWD7ycabnrnTqZ3AMh3xhNnT6Hfa6YD2wwoDxgch1EGHcdPK4737t1HYZbzw36acYU5ZWpJJ7",
  "key33": "5T4az4jGgq6eJxxfyKhrvDAbUueYP2daqNTyvavL5LJUgZjouANgEAB8i3AddF9aqEcK7duFjcphsuwjG4pM5iCA",
  "key34": "4djRgD1ZLFUUC6u9ExmirFqCxSZ56QFesmcrc7zpFiJB143TJztHAFnZpGRYVGQNw5KaZbGYemjJatjafHjGuzkT",
  "key35": "4YpUgaSeByzW9owsq8cFB69AHJfECpDFmXrbJcARhojLrAvqthsKU6GrJ4LrYoZLiXU4aaAhxAdzdV9XHsPcvP8T"
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
