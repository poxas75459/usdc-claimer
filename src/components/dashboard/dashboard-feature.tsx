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
    "4iVihazKNUbwdvXWPPTw5bwEAESQpYqsWnaMoJzfWzUyPtfau3Cck28epgCoq48gmxjPMJ5daiCpstzz4M5ffAkS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SdWbvAvLQSZucZz2vX2Y1wAckwU2nKof4efSKdhne3dtaHs7paRADyPLQZJuT3BHagWfhq7ankCYNGJA6jNj8rL",
  "key1": "3qzgqiJ7vRR8M71K5LtZciod2e3Wsi1mQ8Sb2RffcTezbRUxBgeRzgRTLW2hV7DwJafMfh6jGRqZPQ5M6WxQDD9W",
  "key2": "WdratriE3M84ud9Xi9pcSwbcENZTJyk8NWdEG2qQcDxcEQhHZuHbsE5zkXNd8N2wH983MfpBuJ8DcgcjSBwtEfP",
  "key3": "4xZy9q7CYa8v6YrVKEB54vtnvK48bv6dkif9r5nxVCfwAgdYSVs8JXzYBLEqxKmr5mo1qYzrazo3r9mDS7NVXZwr",
  "key4": "4tSgKM7VF7GkqkMtuPWL1ELpsM7i6v4zAgdkL34DqFijmk1MgJDam8gigfhKgwDjddJFDL8QJYq4NDDCVmTdTFf7",
  "key5": "5pzU4MALhyoBHTZ47w2LQWjr3jtZ4bUrDM8FXcjFZGP7RiBsPLpnYoJdA5eCWNT4UKXfgqHTqcAiU1AN29zj2SSV",
  "key6": "38gvZ5y4rq7wQUiMuaSNv3rtswoSeSmLDhFJoyRu35kNvXoAtKcuSz1eAzUCqHF4eJNBf6rpJLA9pLLfQyeDWFpX",
  "key7": "41H3397EnQCHpqtiYhFCJfYomoaGQyKdbfRb1hwYycc52dTVMj2Jzzr2kjhcKs2Xp1DkbVEpw6ScDmWGhU5tYFbx",
  "key8": "4UfzvmPyifTQu8hmLHg13LmFDkmbmyN6XHpB7L2hXirkrB37EMQQ4Ku8cL6TULyjy9Ro38LeAE9RqBJbEpoyVRjX",
  "key9": "2KXdyEAaarR1d5mLPjbhuzJk35wTCtfny97cuWtCavG786R4pcjzu2gDKhCzXotNabBRpgTTU4z8CRGH5f78Wxp",
  "key10": "5MuiLpbfAtnTwPF6nGQpNheJpYrU5jW3Y7HM2ixShvt6VXq3pYiX3pXt1SvVPt4u7KaRURw5hWB4B5dheD29fjwy",
  "key11": "5sdSCe7DBLBsP775AsW6g3TeZnqxHW7JdYJAjSCggcB8qVVV6VTTyKoD1Rd6hZaBXgChUywjdiMuXMzJ7a8iwWwy",
  "key12": "3qA19EDNtn5g4jXAm7ESEvhtc6JWrpnXAHiwd1RaKLQMeftT18codRWbQBPYtEwf7rCP44pu8f3BWSPes1AMd4cx",
  "key13": "124oMDiWLrFEg9U5wd7W7iNsVsECKzWzVAYGaTde9DC1GsnFMwwGZxdP9xt1NVGfv12CA2abeYDpBUNd51qv6ECv",
  "key14": "4jNF2ShQat3Ud1K8gwhQq25vFpxHm8QJTHuXtgA7Cq8C64Xk28Paq65HuortLFb8pziNJShzhMNR7xY3fPoqsEMq",
  "key15": "TCYyvhuV1KUdCWXR9kDSsbKXVpaToceq4xUjh7R8c7XetRWwJ5osRGrf6iz1oD7wLir4onsMuje41m9QcY5Fz2g",
  "key16": "8enKtk7dzcCMZYH4wxXSCLzUcdMkY3QzsBog9wa9RVxyanZ3SVuYuredZRNH4ApKS4S1KdRufrNTwGdE4bXPqw7",
  "key17": "npcWuK5ZK1xbnmutYhmELkw82pgCLvkZTJaSYbWMyNzqtJVjbDgxLfXUYdRprMHJ7hvJKXZwkHA6Ju7X5cQamHX",
  "key18": "bS7h8rJVi1pUu6aqR4daEsTm5i96JDE9RnJAurJa39mGTpopFHdbzPhsvPWmC412CjoGdVEbBS6RUhGAh5kkFkk",
  "key19": "2Wvx6x3k1QfKTB98sj5Q1T1fpmycmeirw4bz5VELgwxjWgYLKCaYv1bEHYGw8Garer1QRPnVEJne1ordGArKSWGV",
  "key20": "4XJ4dNzXBv5jrBtGw1V2ZkhYJDwchuFYsWHBonFwyxqWbbCqTJUvKFvXqPuf2jwKVziqqLvwUWjCmTabV1X28Bnp",
  "key21": "5Xm7tnHxpMoydYeheSUobPEqWnEpr25xAHBuS9QWcUytDwCZVBbpHLhKeTsG8hqATgz3kiQtaMtWWWS3T3sAejK6",
  "key22": "4PJAJavHrfWdpmJy7UFrqPP4EV2mLCH4PZRHn7YAqBefdvvyqMYyLAfq84JjTo1RjEPvkn5pgRGw7UJGsp7g4Qd2",
  "key23": "5eV6HgMbH4gYpP1NtXYNLViSN9fY3eFyyfFuSFvwByT9V3Fn3PGDC2YsPF53kQnp2MeQuRSBYehW2H3qrSeF5yud",
  "key24": "2swfeXMynN1xE9jeStRgPuJciAG4Gq4yB6EBt9D6L7D8q5swj9TJuyDhxFJ5kvEPiyN5j8v6DjMWGHp6HDKFpM8n",
  "key25": "3ztqTo72wAg8VVSTtkTeqEzndfdJniXFyVSAiW95bfkwPsh3h1j28vBYwcY3c3gkq7C8gGu8RaFopTKeQFnaToC",
  "key26": "3WbhJfyrc4WHKgdTZf6RUk6EnGxNbvPKcBV8gmHoWG3Cep5mDu8gpTMqkUtB1zPgiyw5mm4cjDfCjjQKhYu463WH"
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
