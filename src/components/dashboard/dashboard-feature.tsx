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
    "9vjmBU828SEeSndnLzq571kH5sL357WCYNnTAY2Tz4m9jxmB9whXpcztWzphsD2QbFJVhZpEpUEp9Ch6Yve5ueE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TjjNpPFSDQmHCYdUfr4WmZ636rCiG9hV8ZkG5coqZ4exe5bFJTTQrBwJuRo2rpKVRZNH3KgANfU2Et8Z1ujjpSg",
  "key1": "2thkM558VGGvNrKP2SGnQAgc2SpMH6u9ZALUnYmmj5qgZfgZjH87iewYc1DWUaknJ6Fi7VRE1rpWf1RKwGKdLeVW",
  "key2": "2aUUM1QmSZiB3FrxwsxPrym7z9kGezhLTozMU4FQ7xsJqN6ErPiUcb6ZkwE4EvUwFwxCDx1haqUnJZJHKYgBdUV5",
  "key3": "5UawpFXYYvNdVb4guFbRzPFRLkd1qbD2GN6t4ovrrcCoB7kC38PyPLt9AvfHuQh8qwXemne2u3NbKLiyS3ShGQgR",
  "key4": "3P2Atg5Qa45mz1qERfBG1MpPvjr7KEkUvEhcRFVko2gYPKWrGPuu6MsXWeotCNMbMHHhhdNbnjVarRM1BT7Bd1iG",
  "key5": "3VF1WQuc6BdX9oMmWPKmqdHPb44BS2MCq6m8mjaZDJDQeh62AVsNiVYzQAkv9WncAdhW1H2cEeekUV1P11bRxa5Y",
  "key6": "4FqdETk4DeuoCf3RTNkbkEWyDpSnDMiw5HnBum3mPXBqnU6GycvtvLWw1W4799TStwC1qJ9Ngu9k5aX6aDqMTfty",
  "key7": "4TUAzJuk62pAcAfZhJSSgE9QxNTZyosCScKBjkCf4JgCgDa8GQcbB55RD3ajDHwuCa1Jw8P1Cu7mTo7BVXEfHFXn",
  "key8": "2yE4xS5TFh3JzHNJqLD9XKs8PpLVLfYPQ8PLKozPJ7dHrzY5HcvY36DXHvWLhB549ehZnkC4EgLJ4oNKwZaU9n1b",
  "key9": "4rK7s7nd7CBmMXg7eJehJpbBBazv2FLNyVMMpzAmmW15yj7qtvGdXf2AdDXwA67zwjY3JvyLNQQBVbmGbB2gQcm4",
  "key10": "JhxwUjUKcoh9i5u3JEz47snae8ZTUsJMKumyXNUWvZcA6R5T1tuNKk8tr5uXfkgnm52m9Qj6SKwrKU8imQvkhvx",
  "key11": "3nKvMDSvGVzBVozPQTuoUMtF5cqMdMGdAaRJJZCukfBbkYD3KAkbqyMe9B9JZfiedR9QEGELB2V7wnYZwT1qebdV",
  "key12": "omU4d7rRDXSzM5yWfhyRkEbz6bfQMimXmUBBiZQ6P3R4hWKfdT2ps5swNJU5bWhQFaVdvqohtNLg4xAPRvCYZrN",
  "key13": "27HYxFJtRAR5dA6B4ezp2afYtv6YMTTd69Ef7Dj3cW2F52hiYSG93YFbLUoDhx2Nd5xUMcR485bU3nVYTioB2vKQ",
  "key14": "4MBdsWs6eMsrdADcG4W7ENmAXWs8uUpCTbUyTpWFuNkd6H8uJuqKChyZos2ASRTKx9Ukpw1rTuVNGpkAuwVdviPG",
  "key15": "vqTDDa4qZPfxnCtcqoX3YmoqN9nM9pC6ZpDjtLN8u5pxobbgnNgdP5cKBjNJsSeCj4B6SRgKZXBGnjUUF4Hcesg",
  "key16": "3smkUGQ8vrh3rHMrt81H7ccNhsyu9PMkGEtQuP77oX3G4LcH8pPYWaQByWQYvEGH5PX3iRfCbVMXZ7QwEqTysdiK",
  "key17": "4qwrXEW9FdbFjx9NHEzr99GrDWTKPQ6YakKPT3XrXXyRW2NrAXSvh3L4VLeV45WB5aeWjz6nWrdadVuTG8LjbRW8",
  "key18": "2a8aV2y6BbWhUGqgfSF2e9ozhYtZGYYJbaJ5AxHzfMXxJqY4LW2zwqcJ4jmZ1ErHmJ2B9AMGtT1cub4hQr6UuUG1",
  "key19": "3JE8sRQecQ8DaaToBF7zdtAmAcxGQB32rGb563pRoTtaJvjYqx36t4yWbbWZhgKd2TEV9vW8YWCQ3H5Q8DkJMN7N",
  "key20": "3Un1nceED9c1KFkh5iQbN9EXxSvWHqdK6AXuECBBbTjnvhJfxzj3UgJjwvoSqcnRRnq16KYci7oQBkcpXhyUSReH",
  "key21": "42Sp4mPPE9exU36AzEppT3wFFkWayQ8qPyhGkxFku46LV861awtSnD8v8LRNw18dkjZQafPqpGN2WkBXkjxLfttK",
  "key22": "5XYzR1iUoLnVWdnK8Ykc4PA9DH7xUMVmP4WjnmUXVSaJvrta4mzL9nVpRLJ6Z36P9freSNyiQR5JAiNRDwEJApQm",
  "key23": "3hgKcw9Ja599CkY4CXpYqJwaRZEWw87RaNpmwmFwHkjT4SCuqRYCgk2SDeeNG7xwWz8WzwZkBDNRQFxnCt65z2tK",
  "key24": "4XFKVvcgLJXjh2c1oQywgaLH1o3HvCLCKr41EW4nDXWZaLWJi3Kbmna65hRb5dQYJXB2gBERcdwsAsvBST87VfkN",
  "key25": "5o1FnfEEk5DtwdkRxSqfdaosfdcx8Tj4xy2TfEWF4SW21ic6PakPkVimAbSQeTjYFuEQKLUorZwLtxUdkGeUMJHz",
  "key26": "3eLSg3TjLQQk6HqNeaYcanWRAq8XoJTNGcAx5Fthw96E6dqAQQF2WT1dfgeBne1SApcByKxF8u4X4SytrLAmzhiJ",
  "key27": "4x3HfBPzpC2jE45GxuacTMkzXr3esyimFpmrZurH15mFyaPnxPYzNxdAb5HXUM39Rc4VDm23q2qbQFtjUVSETmzu",
  "key28": "2jrSfHgFXm2qRwE8qW5RT5wzJ8kgtphh94A3W6MNjsnAXuTzXFWYKXUApXY2Gc2o781d6RvwYYucaPpYJ2fVzEfa",
  "key29": "4sBFX5rZTZrLentzHE3AMRAvcSg6eRFgCdKrgGpWTHpr6diWpERVM95ifDygqxTiZs322MU3MjDVg1dAESrYR2SP",
  "key30": "5kBTw4xNWhoR8JuySbLfoEoVpsUKAjV8o3ggwRTG7tE6pM1jVUisqmoJi4BwdG6DnqJ3bemKcGbzb56yDZTVQhzk",
  "key31": "3vxPfLWyQebKddgNsXTVDHxbrTkfGrbArna1BDG1mPFqvJzBEByZ3DcJSpuTUQNa5QXVVv65952hgzLRvW5dkWod",
  "key32": "3Ucx3dk8WeHtxLZuaTsHMfACwRJERYKzyvpLU8wjKmK3kNn6dDN3FdHdbgmUPmFoGGhffLxrdZDmSqpbJKthiVq7",
  "key33": "3o9mktppyuvhnM5rEbouzxcPtHWKmT22xgZnPwtCHPAc8jcoMuhnEAvz9mMxnfkig6Jq11RARAuPBJ8GzxzxFXBm",
  "key34": "uwUHVwE5DLKaekT8iiJWbAiNjfkxNhjXSHsscb28svLk27RwKYdJES4Ev1Upbf98uDc3p76g8aXvyfmQHSgByxc",
  "key35": "4onD1zCBgj4UM8W1upKqizw7X7DvNHdhgUUXHrPWbx4H15GPGLkgYrcgnmnCZKRCMkpWvnWDwgKsmQLHXHNQ81GL",
  "key36": "3xzWQrmAnjeapavqa5ErS4qfzvGmeqrkZjQMi5d1k3ahw1ADxKvRTnMg6q6T4LJUZJ7iBVPdfLCybdMxULn4qqE",
  "key37": "2hYoCeA1EoVMRFwHdBocz8AV7sURZajuuWG2SjzCxMLZfA6mSx8iYNTexyNzQDUXVFoy3JbNDs4f7XiozW5U2GC3",
  "key38": "4M8Leu9f6JcWePDSFeEScsg6UzxnU4oQhMkknmjdXxPZnm7wCB5B4AnJDmFRb96iaRKCE8BbHQvSCykaNBpQPZxY",
  "key39": "4siYWMdc2Sf9Tvgxh4zHnXex2yoLFD485wWkWuE7JYFdqs8GtBVXhFug5G4byUZpQNdbsxnRNNqUhQuBtsLX2Yh5",
  "key40": "637R6FXriKfTLD3pYo1VkhXk2xqMBHbZks5d2NwAChjSThJnt5psRGhg6j4xn49QTPVEVURCQmc559q2uPhQf9QL",
  "key41": "5Am6Mi6tZb9JKsJrHYVDrAKtRD7cjs3HsNntBThFXggf9h95p8N5vnTW2KyvhqiVTEpGXyeX8FkzinHz46tSvpvb",
  "key42": "y96wHAhZb88CoXVv4rgVmqj3jke6HYyCpAxWTqH96ewXwKrvbmf2j7MryaR2q6EUheuUsNv2DKTjpfcWYj7Z2qF",
  "key43": "SkPV14Gyz7mvcuCSPDhU6RGVAopgddhfSZCpzdL2yGtoaUJnZ3wK65Gbs84phk8GE4CBUwvbU6P3W4kTVm8W9WP",
  "key44": "53Jw6vEJxb2AznfhjvSWu5SGEPCYErAiH1krnxxJ8CoyHtz46EF1c5QaSHLP1UNNCQTkme2eXiYQg7xV5somw9ap",
  "key45": "4t4nqP8ry7VuqRg4a2unMGRBaKd3vBWjiisi1rxu92HzJfYQ7PiqTgW9TWQmnY2UPiAnQr5PxJEmuvvhcPxahSkF"
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
