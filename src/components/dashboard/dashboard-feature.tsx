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
    "3HMDL8QT8afXtHJCBSdfPDZg1spgYswStkapn7Nq8Sc9SELmAQyMmrKNhfNgpqEAij3cg4tRL5dgmx3H5iNhh653"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gevAP1cSGgoRD7peF93JyTvr996Eir6xwrGHxPqFnwLgi17WSFzymJDpeNpWpzCf9JFdNfGGLpq7nk4QrHN1BDN",
  "key1": "3F6adsZqJ6NsawNsAaRJhb17ASNczzPbRiyo93nX9kHChauGsKiw5J23TqQXthbspkgmJLwxmE9Cyp2XhWYwemgA",
  "key2": "28N8U7gqNWhFf2UexNRdHkjMBH9VCehEc8S8cxtNGxfGL425ak1xAq2Q9z1isWbGxthiiszA9cYUxNa5h3UwJpa5",
  "key3": "3iXeqqGqJViQXjsRbGJo7J24cXF3jLHuGD9A1BoVEbHhdxm8EjfcBT7ntzAs5pMpiV8CTBxvtKqne963taeYyL2F",
  "key4": "mfDLu5UkJTrcVEJ49SQMb6yYMmFnJCqN65ksxaA9LuDETh8Yp421FuG9Wm9QPAwbpBU7ZtJpSKAzAHLP9PJpLrJ",
  "key5": "3Rb3WMvmSbPTVdhJAARSRE9sNuHbC4WL74DkKJpKtCzUXLYd1F6A712M9LYtgcS1KGYtbUrgv2WEUPeFrdYasNZ8",
  "key6": "msmD2R5MVd15ZwAf3Akk5tF7XS9471wTVhZ3hxYdDdPxrQFRYjWqnuHYTjeKWfPJTc3CP3jdoegMo2JgspbrzVw",
  "key7": "3hDjn3q4grXctofeLFYRDbvSbdQpHtRtsp7vR9ksjtZnPFrLQ3dvRdDRNB3gkTkYnaTMdGhfPz5C2frK3ZSYrm2P",
  "key8": "3J8XLBktVdjd1cCcCm3BToNeawrLn4quHFJVSeABbyxvvhdXahXWXH5GE2bjkLLz7PzDu6RSR2ScxTDjfqf5vaye",
  "key9": "4ugTaLL4P6UYpW3jybYmqGi8eDas2s3afESgDntZaLJPN8dxiQTip4h99qpeGWbggsA2pRYMx8Gq1cWYQc53yEtd",
  "key10": "3KcTRbJyGPN9hMZYFRzRjtmfCUrg2emvdyP18Dqt9GDrbEHs2kPGT2cBicwsuYchtcgbPrYjuCzE5o3QukHZwXCm",
  "key11": "2qqp86mpzoDc1iN2FZqhRRBdA38vSUw7iuHfn7m3K7F7N5eQMsxMrUELA5AsLCzk2vZjXTaL9mRTY6KHiKv7mYKK",
  "key12": "3NzxNgbAHjFoAxRwTQpdsqofeWhHknPZku2rx6M5vgCRWhBYGykMSC3XrtXp915MkfcL5HX9YYS4HsaJZk15sKLW",
  "key13": "6x67sNceUtk4AHNqB4kCV8tKSUXKp7jT7zydMBUQQn8326ZrN1e8PcssbMi9SJS7gE2RNMiGrkTt3DA792vQfyz",
  "key14": "444iNRKuW3YrA8NYg8ZkNg17zrDdwiVsMSjNxvB1La7FiNHUf9SMNUtCmYmMvMpgdUogRjrb6qjqf55JyvSvb4j3",
  "key15": "3jWJxijNUXKcTa1d8aEyt9UigebRSCY7A8RczzhM56oJgmKejzLs8tmseuqXPuaVv3tNyujrPNGUHy35DR5wAYDh",
  "key16": "38eCtGHtTuappgkZ5nxz8nynjYtKi1TS7FTL8aC5EwxZGXedABodjVe7AWW8zgJgsYUYvjV2kpn9k6jqbEiF6tPa",
  "key17": "2bQGZTDMBFGQA443TTya2NZXoMBJ2gVRoAeUwLVc8MwAxcYuaDQgE9GMLzDQen1fetgzThXqbdUFeuZC3YEijFfz",
  "key18": "5MgoyzoKxhA2Gpfc38FdYW9PaFcSFhbbXuu1CRn9qFZ2DdQU6U64jqjLY3Z8fbvAvb1mnFekFrouzBeqx1HJhTUu",
  "key19": "xLop5mPmnYP18JpKJJZ18UtufsKnoKtp8MnD3MBFRW31z1uohS7uDxzYuGJRDCjZjSw9LZ4JU3Sh9mk8hKDrrBB",
  "key20": "3wbWeFng2bmbwMFn2HkJsSgVu1Nenno74Ww1mZdNwWELa7EQSvG6jnyjwgDhiTd999yt3SCBKfhjnCcEizKezVEv",
  "key21": "5rc2xGuD2uy6fBgwe2HB6HPvx6QC287qwFrc9JbQodcDXhXE5ct6tvRcYJDrdKugFUr1r3XV8b563cejLzB1f4N4",
  "key22": "2iwnQVoTWdnnibc9P11EuTR3Z8BDMWzinJHPCxoT54t8mYQnt9RS8Bs3bvZMpw7u23nBbenGUSq1kbDkUzFYVLGf",
  "key23": "65NddFWZi3MGwe6z8SQRo7GWbUQcYyo2TQEyQwa1pEf6qsR9QcTuk7xV9zUnvsxVvWXK56V5CiNaLAW9N38MpKmp",
  "key24": "NFvbUGFSpw43Jyr5TYtTKuKBh6xGMowS9pWLCtTshYaattst1YZZ5q6e8VAutxhkGhbiv9zkdeJ3MrWtb5MAuY4",
  "key25": "5WkZrQ9N6mRsHYojfoK9L4wQHPdDzHCQhRj2fYxixwcXBSZhorVK9irVcKWEm1ue21J8XHVUYync3a2BpZ5wqb2w",
  "key26": "2HNRCyeMXKw7pWXs4nmEWQ52PEPNUt9dJv1BmZ2VBZ2aVDvK5cKV2gHWyDaC9dyFLkbw5DuTo4X4SFbrCTrC5THb",
  "key27": "255gJcnbs5jxb8R3AiQbM7F3bKaW7XryMw4R1gKa9MyWPga2N7GDeH2PoeeboSj7JynFcFwfJBCSjo2gUG3gt5i9",
  "key28": "4AmcCuTwiJejgizmPtEPt9H8FqrwhN4VRAwCwbeDPxZEsnM8JjfQG7VhpNPNSczBKP2LKzKDzWuPCYZN6Ato1Zsq"
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
