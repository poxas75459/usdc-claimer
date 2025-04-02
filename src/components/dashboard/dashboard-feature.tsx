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
    "4AK6Akz7jBoCsdWBGjjA4fGgU5mtA8T6ws8fqgLgueDHjpjgKHxbhjEnAWF6F76MvqASyk6A64Gh8YjNSvfWeEvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aQPXjixQTDHqa6D9x9CzpqyA1VXnCxWkU1rCzRGLP4cY6kwFgWPfHBTmqZ2L1DdDsDpYE3fkc1wyJu3QvVNHBG5",
  "key1": "4FGp4LMV98oXfdoHUvQVQA76nwoyAwv4adwqKqLB1bqu57C5eEtYDTZ8nWuJxW9GtP1qBjJfcEraJBvDz6Dj6HxB",
  "key2": "646xSboVZWojfCShpBrzNEEtrCW3hVWNhrQh83114fvrLF771kFizu6tDgWyHtzTy4BnAhmTo8r8BKG77BLXjThW",
  "key3": "5AutkqgfRYZAzZ6KPkThyNE67iNeV2nkDJTgAJ915rPbmh5gmyjYEDMWZ56ZGbVvo5etpD282cpyBfKupdE2GEFQ",
  "key4": "5pA1TSyKLC5eRgdrzPaAZwUo78qf3qeiGmtU7Yzi2nir4PLbxUL9zCbAAMb2D2VMzCD7KiVgsdJQZyFLvuVRQdWn",
  "key5": "26TeFH37iNq6Cm9pMxCCeZk4Y7g7nYCFTEdJWdzHcjhBBy2FGPF5Ex4BFLhcseifBcBjJH8QGcb7PBD7gh8yAHD6",
  "key6": "2JeNce6Fui8H8m9fTvzqrC7TudCo74c52TxMX1xLgACRQcrkQ2hfsFGQCa2HyuLRTc8wCHguk52gFbhE8e4hwHnD",
  "key7": "2SQ3BBi886N9N8vtXvqGqd1edKiV93wjfVMCrjTYvSbL6imCvCHD1xnCmwcyCkFFy1B7Zmn53Sk797imTdWVmAQS",
  "key8": "51TBfcAtxsVenS8wuZUcz6JHNziHeswKNoqp7Y4Q1Uv37Ces7yqz1FSitehaQanLyUGjNdk1JR3q4Ne8renrazwW",
  "key9": "65vv1o4fQQbZuWsmGTNWSHq3Vu949LsJfbnmgT3sr66T8H1tmuWnzWCYLhhYK4bxuieS3KD8dT1yK7Xqhv3m9Fwd",
  "key10": "5ot2LZZVp9wtfrGXbCwuzhTKpCKzj91hjSScauJKoZtqyb5vVpZm3PMyD6LbwzNZyJeW3MYwcZuGuSk8wKJYhXqH",
  "key11": "48ZmeT2GM11uWrDnuyWb4MG4rtsitSMLLRJciMfYyZ521mCfStpEgFknGqG1DuJ3hCbazeywDtgysecsv2oUskfo",
  "key12": "32t5NbwDFpS5uaY4rMDcxy3pZPDqb1pT4teTusVwFAgVXxoKc9fMxkTKakxW5qGekt7A5hXCGnTSBXRwzZMd3q2w",
  "key13": "4HxTSXKAJfpK9xgQTwiXcTyfucYk8AmuwnB2wrufoTJXDK9VbshEDvdU188T6YWKRjuTciWo34iiNbxuifR6p3Qy",
  "key14": "26d3VizMUjkV7WN7MLsBCS9LexzhmGMTSbF2HaPenT5iiinbJkVBfQQkL7qPxWhagP3eCzdfjFuDiphEwxj7drG8",
  "key15": "4vPJsmVmSovonQRtKBunhz7DrUgdDCrzrKrdEsHBQcmMRcmyMucNrunoeijT5H1KyEqYdrHuyGzB3yF5jKn3yLJA",
  "key16": "2kdmG5VaMr1dmXL2KEPxffsQ9EgkX9jVU78cFhdBxDyiARr9YygdntrdZ2bvio3rCY4SexPW6pLVeV4nNesvVK6t",
  "key17": "UWhHdbbWZyFvna7WCVJgbkZaJUGgDRh531kfVzSnhWgkLzTCfScf5y7sSJsXDjax2t2T5q9ctkmjCtw4AzBfHoU",
  "key18": "3oDkeBzsx1uW9fPDG7LqTkzKwCzGueh5dm47W367Eq7nPvgr4oxYWn6Lsm74poJDhhpHABzEwDBtus5NfK5ZV1zY",
  "key19": "5bZxA4yQzYs8SCG5iWmN1RAjNMEVjhUmUk675RrmBu8db1EYGm26fCgaNpKrjBdXHCVysHCJ6Co846GVq4VoEiDp",
  "key20": "2e7zyMHZk7bEd64fRYpEUezPXX2J5pkwdyTcnoUBC1e7Ly3f8UJGdm5LotmvXoPqawZaFhFYB7jYFfCKKZC64QPK",
  "key21": "2gX8tyf6Bdbemiec8i4zjM9dAo71hpoCNkQxwix1fn1XDQuc9JTPLYAkfzkNftNVFh5RomcmtgWcMc2XyHxQLxR9",
  "key22": "2HMtHmGCq8erLy2LH6gGCvH3r1f8jLpai3819e2zA5yKs7eVT6jDSfgG2VB8uLDpdpSL82pD6KWadr2gKBkFdZgm",
  "key23": "2NXHm8ZubcLr6MgDNeTAMiH2kzMZqqHvLzGybS3vBdUML4UiHJ7ixx4tXLkNwH3n482GQMk6wF2TyeYpPpepe5Za",
  "key24": "3AdkEv7bjk68XzkZksXiNJRfgotqed9WkdsxsgRp9PqnZAGPHjk2kJUT967thpdEkdBV8MAVS5GqnPaEK4Gk1MY3",
  "key25": "5Eu1isDExdxoCDXWm5YJQvuycDRiVa7ccuRg8n4fnXWDFxXsPfyGa44aXrxhDN4iUv7dV7Ro5XWtRLtjkpciz3hc",
  "key26": "3jQaqKdPEHL8VAv5EpHWn1KuJAxWSD7keq32SfKtyxyyT86MP6f6Mg84F4tPm36LTyQjN6qFsBuRhj1Sgn7DSp3B",
  "key27": "2wwXTrw8jUby9F76xDcevw4QWTqKWLUCTucezgDjgzXQsWL92VobJnyDzDSxZf5u9UCmuAR9ATZkJ4DDr8SiJavJ",
  "key28": "5pUoicTWe9CQF8FZCxHz8cCdVqZsZwue4VLuA27Nhy6P3gQ1JmShaMHbnXuc2ctQ4XHPmCi7Ag2y8ny9SeSVw27Y",
  "key29": "2ggRZg2WaARoVkd8yaxFGf2ssd5d4Gg8gaHxL6MpJnxULYL1qLga1wLb8pGeyUFb4USFW42RgXAf5uAAXoHpU7Fy",
  "key30": "2grDHACmUjhxkLtJzjpzM4YvvfVWwpVpF9s53jcN7229gmg4ECPG9zpWTz1RSzAotN7L22C6hYGdWnZjW9Ep67k8"
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
