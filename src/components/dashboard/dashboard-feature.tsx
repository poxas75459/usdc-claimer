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
    "5DyPdgisN4QxPcbnRJh9Xz339LnrH5JvdWhuyNzuo5QnaqrdLcNJQvZQpZDieN7Zt5DCQE7fUpP78njZuxp4fCb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38TcP7A7qvaNagBGNnQy4QtMx6KKqDdshjpUxeDKT32KFipmBGKj7MVVnH5nPuZA5Y52VDcTZNCSSk7EvhpunAGB",
  "key1": "5K9sJPYvzHDUaTdg2kMB9jVDYEzcxQLwfbpAupvnBSNdMA2w4YCWc69BzACryWDxW4J1AZHNQDNHLvmehTUmEhd5",
  "key2": "5ZQqtDwshhB8qHYMwRoy7JTwLDmvz938G8Gyih5Uy7VU3DhtC8KoMVcXv3cY9o8T6CHefiZyCLaYzR4a4VfJryNP",
  "key3": "5HmAwmPaRuVA3EVMz16vhbZ7BANxXtk6E2pAGJmu9PQRA8Z5LCHmmhmUP2pfZs5KYHkA1YZQNoxazWc2UVWLHWZk",
  "key4": "2YQ4jgbNPpN2JxxyWmsxdNgzFyXdE5hnk4S86zxNCWenbcaSiSDF5KmLBKtbzL5crdNZ4zcZAUMvUSXree6Aq7MZ",
  "key5": "5YHAskZQAwWNp2FSAB4Hc1hggLrvwaM6484LEH8JUJ6B3Z9ZAbLsRFbZ2DL2h4wHpfPQCSagjbP1cKfZuDUmRas8",
  "key6": "4tWt4RRBAArPG8KuhREXXsxUuxfnYWJyZ2b8oNouToKtjnAcsjF9ePzKiiZ1D3ByCiHmSwSBS6tcugVaBJ3wBMQi",
  "key7": "2pBqhJxrkPeKgm2HzQr2kYn3SHsft6ohV1JexRG2VudmA7C19fUaihBqYjnqKNcrXrmNAtB2HhfxiWgJ5Nvr6D1x",
  "key8": "41zEh9e51ZB5a7fUzJbnUwAdz4eLtXseXRhCgpPr82MRaa6KohDuCBsMFM1NViMrsTee43uNbvQta97ByeVnQseV",
  "key9": "3tRAzZEsrWZVtET4VqJv6YQbwLCSXAK9WwTgt4dJL2iRF2p3BbvX2hNibU9tCUWBkz5oG9HRDsH5CXByEtfWQp9D",
  "key10": "5nMRwc2ysCxJK18zgZsNwZv89ai1iGA1Yy8LcGUooExiohSxbYsiYcsG1V1KZc7yijZPky5TUQN8XFKei6z85eRa",
  "key11": "khP7NjP9iURA1Q9MTeDh71Ls5j7epLUPhhvoKcmHmCiAu7AgQhqLXKyRK5GzPffEG3ZNgRWNQSq8BN5xEDLRz8o",
  "key12": "3aLU3Rj4H5Q79UTos52J5VSgNbEecdETHcKNbKGzEBLx1FPAfmyEpU11D5P3TT5utL6DfpwCs8zYmaQnmpkYQvYZ",
  "key13": "5ofV4HjdBFwYcF2T5b5oKBYJRGHrBxebF25zLZQqnuxzz2akdXKcErCBxrGBN2tXMkc8vKQdwVVhQj2jT3zQNhXV",
  "key14": "2Sfx1KQvsLZBVvScWfqQLZSZjFVgGLRFxWmsSdJ4hdq3EMdjneuZWQZ6MYb4vDVHM62QHR4ReBUdB9R6t7FJzcYo",
  "key15": "4XpxqExCg6Kb14CFmJd4V6RSNuJqDW3jZMVfT2FTEJismkYEXzuV2Z1ZbrYt6cJ7NGWxiGT8rxM4QJFFoG6EkXzC",
  "key16": "AzNdwLMsxqRadgqBDLt2KBWaYadxubLXKnNV8K9kMPim3rn6QBhRpYKoGi2NSC6QGrtRjD5fisEiZ6jivuEUsL3",
  "key17": "iXodfkMb8nh5wS6DAbrz3tNvtosmmawVBLwwH6ooby16SaAKRdJpSk7yenQQ4arv6gRugpDJgfhfZaU7kve41PU",
  "key18": "UQajryoyYkNr8zmSBb3GPAHfYXrTFzKiSk89QceZAtYSiuC6eSbUqkseVsCR38usDWdQ2yuGEJgXv1tEWJhJbUR",
  "key19": "4DrhuBmpfnBQ559od8QN54XQ48Yi4pbkmkF7AgSmwEjmHynWuFZNMNP6dpmNPCC3SzieHDaqTKXK69QNM4nVi4M2",
  "key20": "5zLA45r9inbjKyZGarB9NtEz6tG8oLxaauq2NeJMtDMmjo6soX1qinkzuCCePrZDgMDoYoqL7Kri6MxMDGFkaE6f",
  "key21": "4f6mkKwAoyuqtZ9jo2xs6K46AuQMUN5ppBhU6qCkZmnC3mbPRcGrfpSbJd2dx6WsfCBwebY1FZQNwEfXRi898Pze",
  "key22": "57g1AAGE6SpCvXjsZ5Jm32KXmk9W8p8BHuphrJuyHLcP2CLCxPb6ZpH6JfJWSygS5z3qNiV916uiAmPw81pcjEH",
  "key23": "88tpG7Cxoka3M3dLJAFqAzekyHUM74xquD2MsyyKvF37SFTwRyDxY112d67UbAx4Lr7mqdPZK4csUeaBZsCyZXU",
  "key24": "3jyd4hGQy1ryMQn2Xf2JbwCM4QvB1CgUowkbKpbyjHuK1FkyevayMtoVwA5N7ZMfghsXDJ3qAeWB6MKbYa2AWSqa",
  "key25": "3TS181P4w4qCDBKM5hTXwqHGqyeCS2NMYorg4hSWhW6HBEYKkTsuaj8cWskuSemzfGy81GKfp8BNWiYjhXNJMEzu",
  "key26": "ZAGo5t89c3m3z5mhRRVjBQ6VWixffdhAHhydhBCVDDRjb2eNiKWq9i5AfYUCTQ2Z1mm2UJdFZfYAEprTaNocXNX",
  "key27": "C84gVikUpFfWguhMmFQy1KQFpyUTvNzwC74mDG4BxNzgzsBLvjKgawiiWiGd3w9Xuh9yc2D29GefR2y4EBLBCXv",
  "key28": "LvxgTXtERuq2edqUwBbheXqykyvFw49ruer2UNhJW1k2iy1tvjZtBGM9Kok9J2EmkvYFZhJ8Z2EKuBBQDuFyKyN",
  "key29": "5bmPnajAx4xoPwt5vfgnEhE6U4b517tpHpBW9CWMjStBwoNH5kY4USbwkv2yZiHcCWZZPtExe1gkFMAp2GruK2pV",
  "key30": "48R1R4mDL7aP6vw3ZF2Cdh7navjvdREp8fda9crELHyPxAnzYh9UsRBX5Pv7UxEQemsZnzK75m5XsRJzE2L3b9dG",
  "key31": "4yEij4htJ62ae36aPL9fYiiDGgr361HjMdvrg9CHyrSiSd1spYFz9xHeYgRBxc4mUrfsfsvj5MNjpxRdqt5t2zkv",
  "key32": "4wMY6nhi4BApmQdzoE8H9U7NhpBwuMhLrc8MfXVgYo2R8ZdNV4AJcagKhkQNzmyR714FyXTHyAohWhE29dcZh1U5",
  "key33": "4YQb94NG3Zh7gvyepcngtSSuyiXzaqdPS3UUobrzCb9CVMuQqWYvuRamTs4JboYpzk5NGgfpUX39Y4TV14DCVfT8",
  "key34": "4TvUaQGnoMJLwm69CKYHNMdwSe9qWz6UfZV5Gzu3y3gqZMZF6FUy7JFGJDSRCsqBiCgtcwoFcqorgaGpamrEdftp",
  "key35": "2LuQnqRgfbzMieZf4nQ2bJTqrGG3UZ2fbTLjeaBBWTGyNfSo2iMYPafQRZGJayo2SsBBcAJYE4GZwkfFR8Zyc6bG",
  "key36": "4ToxTM6Ytb6WpFRinFXpbyCDXKDg3PMKTJEHmPgcATMdDJV7mvWUcDyRksvZegs6cc1WE6oyq5yRFLo4rAgMxenk",
  "key37": "fc6jJP4vgwri8k8dE93xthPWzQ83WqpJZrp7J5PNnxEBAiFvNShbr8nazucmdHDRe2UhZ2DHF17FiEW7M6sV5Co",
  "key38": "3THiveETjSBcJvVRyVLADD8kCvvSHDQLMhGav2684fX9gWaggdhFKxDuJAcna3hRR9n4cvV4bhnjgAQaHuLxaenC",
  "key39": "5AFf6nm26BEsbJZekhgUHa2nfkiuyM4DEp3fxFYsFpc9FrysefK6WXwDnNHZtvQfFEaSWGghGufizRkJgHAfTcUE"
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
