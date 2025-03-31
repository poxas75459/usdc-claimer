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
    "3fcJrqPwvwAEkWUy1CzgGNrF4LxJUFzedRvLC2HD38gA3VF8cbp2iMZUFt6fiijqb9yfXRgs6GMvaKRryqdMzXv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4x9Uh1uCQhqcmWeuaDd7WKbNA1sgEqTkkzMoci7tFfdtuF53UD6rgqVtc29buiDmbTWabgfTngCnVpsi6QHjzU",
  "key1": "PT8Jb2yBefpDqj2LsSRXcKS6XomfWywvRCopji1BjyEeDRDZBfwvDEU2VR5QG6mgpYNaPbPWNL5oWGJinxJ3PPg",
  "key2": "3kqiwntNYQy6848p4SxRDMJb5HFEzNHC2PxTFqQ9eGfQLnc1BgcvNxxcarcVTDdcjbwtsRj1AoKet3GPcgQicpB7",
  "key3": "H3KTq8YxRdVT2f9pyVNG6ZcLq1s6kE48qsAms5CHXLbrjy4zZY2bN2JABwCQLLSwK2MNxkymoA1i8ZtndsN8GwN",
  "key4": "4GKwpWoMtwyeEgthE3RGb3SkcmWftzxKVK3cwPxVizBgs5yMvBZh5zDGPUcuiZWmuxFG9dCSzAFuH1HuXcCLufCG",
  "key5": "2Vmeq71CBdVjqzGT8uzh837vPU4iUry58VLwBRySzgr1cWGG3mprNP37W55AoXxwJ8ELXZkMLmJ9wQytCfsG2ASt",
  "key6": "3jBRDUowJh1dagebc6xtGpFWGubvNREp5V8CMRF2fYZpyCWfhfkQPuzrTLxLUxydAeVVYDqef1o1HzD243HYMDb5",
  "key7": "5TKHsehaezJ6j8CAkoHvryiyp6JzmQyDczBCHUBTvhcbZarwPSYWnauSfpRv5fNVLwr8LxTofax5tDyDGKwp31yB",
  "key8": "3rebCvfTfdUKb47faCQWae4E9hoA9i1RBS5a9qZVjFSXAEjYgMUVeeXoS5YkyV2qnTRULay5AqLGVjoRua9mm7W5",
  "key9": "2GKVCevcNLDZtzwXaVKJ2MfXY34CwBJ4WJaiBQaKhdR7nf6DzpHb3q7q2tAEWymqF6FzjgQzDyH7sTUpbnUjxNzn",
  "key10": "3PM5gg81qWDrdnu3hVA6kQDt8Hj8QYFt1LnvkHGSzvS9prAdkgbxN4PW3FCgePUnpExvNay7U1tUkMkhkmWQFkwe",
  "key11": "5zLthrQjJVn7fFAZZS1snN2XrjpdChnJocz6cR4fTJpSUwc6UJWNt6hTPKQNvHdEbhumNbyWAJDMThfir4iuwdNw",
  "key12": "J1NwXWJmNvTFbJ2pzKgg53ncygTJFkyGJcALEMBc7efmumT4C81wJniVhSwvrVLyac9jhPjHMu7xaYY1ZzU8YCp",
  "key13": "gJumc8jRNNWSw4vu9fYQ76AcwbzdPfgd1AkvhpiFZwfVt6eDSXGBBCdsqUgVKehG4mdmYJgA5PpbdFSSzq3bnUA",
  "key14": "mWPdb94qpW96MzLwvkTYQxxm35gLd1es5ayBiThd82ZLAXqpmBBKqaRofruXobfWQdzNrkDW66bWi35Uo67mvf1",
  "key15": "3XckBxfz3c2aMFsmyB63kC8kZQRBn2Bjts1YKVh84LuGVC7Xt5qerRnLqmbKnZ68DqKj2o1UbvsotNWLG8vH4xbe",
  "key16": "23XRSt7rzRFqyrv2TvBJdPW7Kkg59Y3x3uo8gjqsKpdic9io9oCXSxKu9LzPth3UG63UVqsihFuoZQKzvqVzRFro",
  "key17": "5J6H5c3u3sMnnWkdRDDjLerWBhztkece7oVDda949vJfHstEGBz4ahjXN3KcWX98TfWayyNULWbteYWVHZsDmjHA",
  "key18": "2Bu68jRJkkLRQKm8CYtt8xqthhxTrNLhDm6cVYb1vsp3AhTsLBVnZ5KbhsawpsiBiJqJ8gRfmN6bp4QghFzaSvNA",
  "key19": "23kxkg5Qxr4DZbrGenpgFc19V9QpwAc1MuJd69aCZY1gEzk8VgeWHQ68JGrL9yJveFhtc5rNebp28iQY7kEdwBmy",
  "key20": "pRDj4HpQnc3TKfWe6cjZiBdCzy99kQH8sBvjEFxYgMJKYNykD8EVSynHSCN7NfydSyrsE5hbf7bizuyxSCDQmG4",
  "key21": "4GaE3kvnCUmVxX8FJcFMcMk4PUrroY4LAbsDUzSypADsrkpaTd8HFU8otR1yNJcNUCWe11GbKnSBvXAM2LFuZp7Z",
  "key22": "3nmqnL4AYHmfiSSRDuRbrF6tr3PgksW9FbVXG4MjGbPMFxXgNqfa5BWZ7VzGir5mxKK3NbU15DeGnKRC1SKsDUi8",
  "key23": "2MsNjKbX6SeNT7PkmLarAcbFT2xHxqqSEi1fybHoVr1YpfuNakEm95J5pzAhe4agTYwg1S9WAZMFAEA8or19Xjkw",
  "key24": "47uMDnyMwzFpV1p9aaWnA52fmotRPFkE6CgLh8YFnzCJrPMqMYakw6GcePqZFspbdtzuyAqZerjmPEwwgiq6yPQu",
  "key25": "5JrowYFxMa1jw9tChGpF7nHfeQRmnb5GLBkR522ARsXA5D15Cdw5t2RudFuTVVixQdkn8szUx7qHVqae679ZyyM3",
  "key26": "EreznYZqj5E9eTMNJepSjYMWz9TXARDTbrKAa8LXtk1KH2W8QrUe9qB8NngBCN8BWrTU7WToBUtBSD6E7XgyhmK",
  "key27": "4ZyVHmFyWiEGC9wPenV76qHRgsFiBffDJ7WgFF9U6qMR1FvWkMKcnGvSRyXEBm9VVyhdH6sEozhkwMAJfn9sAuU",
  "key28": "2rED82U9G6iHGVpvnf6kdknr3fcXiEoqTnm9hHTN7nDhrjF6VJxZjhzqocBwwYoTwnu4XGb7qorJY5czZiSBEr2p",
  "key29": "4BWEi6uNVfdXZA7XqMFxqWKaViWieT2ouDFBCFNFHLnj27hhAJ5Njk4oumE4q6XayHk7h5B7FkFzGGXjsHkJ6mPv",
  "key30": "2CLAvFF8yndN3353dftz8tpLW5bwaCdn7wpdDxx8btXmHd4pGXbqX27L5dtTbtSdHfTizAZjG3Qbj1rpmGrDogGa",
  "key31": "5pUhRremviDd3f4B7PPxBBmmhpcsFkMxwh1keowoevYmUYQK8kpfEpdDpZkGM5hT4bStweL89MmjHn2B7Xdcmahe",
  "key32": "4GxZMxfYuK41amm8GW25D2kBBMRRwSShQKDnZbcW9sQDHWVcdJ8yMG6xyDhQb21nvDttwWKJm4DnXUYQK86aRLxp",
  "key33": "67pYYzJk7SnmtANRgMMDig5EUWc17zuZbUbSTYaKNxQTasuJZkrdrzCviLHbQjbxHdpCRV3U1cWL7V2oJ8aZApEx"
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
