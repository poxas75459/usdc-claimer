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
    "2nxEmQL12h8Pue1gpQN3p3K7RB2Ro97xba4E8XBczY1TPXDpXqABQJCKG5p46bvSmHb77jGZeqeYoeBf8uzgs3DR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VdrmozGGws6MQv2CzMieUSUcBreJ1UUv89wnjRsxLcGA8mJJJAhrd4cfVTM23to4xRkAaxH7htmCXh1AtKesRy1",
  "key1": "GkdfVeMiMsjFSTcbkdcTgKPyK7rQWG1FGxB7JAHSSxaH9ud1ySt86acVmHDysDsxkQezRWsYJ46yNv9E3jtJjKu",
  "key2": "kVxLEduF3DT6uQH9bD87aNnmvecty1UnD9gao54oTXWXawdy3iCFD4sMAxM6xqroNkscaEKDfdJSFaQeCq1GruQ",
  "key3": "3RaMiBpiRtmPgxJ3ED4XhBcGp83bjsio43a3nhFKwaVf6eSdEYkPeN6mwYjxMrUcchEpRULjKuds1yS4sx3ZVxwB",
  "key4": "UCkVX7Qv9V9fNR4jezfsEqkhUpc27KfxenCgMFVRvWArhYEdEUfYSYMoeanJQ1zZcgbHSdQGcQCX1M9FBeSqFFV",
  "key5": "5z5aD4YKW6U4DPt5hQENwYxAgGTCpzSN6DCuo1PvTWqRS5xDdpYDKorgG1cAQUyuE1n65mqVxB9wzYSzyCQSwSuT",
  "key6": "pBqZ7cePiAKoqsMSFkG6U2c2N8tKjKRk9UjRyZk7wsGmVoe8Q5WMV1ckB8QPwhK4MoJFZmPAHVPeBLkjvyg4gzS",
  "key7": "31vQhFrKxYHKtRLWPsDgUbDUwU2LeTW9ekkru1M8MXtmYwcSB31CZCtxnKokdjDh6zSNJA4QCp7oyCHcaZ9Tb9gf",
  "key8": "48taJMocFvDJqTCX6Wgs4TxTH3UHVs343dqQHTf7JBKZCfpX5mSaLDvLk5B15pjYe6ME5iSBM9tZqPGZFwAeny3a",
  "key9": "2C22sVKTXRwCZ1gndYc1X3na62e4uNb4819jmQvuJFck2u6a5yhuv8jKfYgPBT2SgxSaTsehLNqL3JRvZQVPHuyj",
  "key10": "59QhbzaLJJXQ9AqErUCf3sZ4jqZCUuS73wHkYDs9dLUzk3S9MHecpywd562eY2b3TGxFRHLRn1EBoScMTP4cRZkT",
  "key11": "3YeZecYab27bnWf65FowW3czNJqmKNxLmaqN25Lynx8TriRt1zyQ3gdmwCYjK4hwTrtYb2uZuBNNrM2tFF2u9KZ5",
  "key12": "4S6bf78fwchPX3YtTWLqAySA2LMe4Zyk3NmfxFkfnG849EUxJisGfWbxAR8GNz5X8zuynhh1sCJ5ofZFCVqT8ckc",
  "key13": "22AsNwS596cDcv6fAJdt8j4BikbcMD8CTofndgDejUuAjRHjX2rnyaLXvsVMmGzFPZzH27Az5sytA61iCekFycK8",
  "key14": "dQEWEnAh5L7hyuBNAjmMix3xtfLMD3hWqbtA1HcRK2PE85Wd7Jv3V8YfnwnGK8gNGpLy9o5ARo2KTnJ81Qi6wiX",
  "key15": "5HnDcWSn3QPSnBX4XUkz8yeFXdCWU7bHq7k9Hj9ryGHdP5Qh9E66UBbDhEUgBS8URXMf3fFp1CPBtBQjjoMwnTxn",
  "key16": "7mD6xNA8f8a2is2dcgZhKMHEZ4qV64afJA8aD9HsPkNBuQQTeFvFMTEonwQ9NZpqXVBX4BhY88XgBBvsHNJULC5",
  "key17": "2M9oKCZK5WeMbNreZytGpmH2WvM2vP2Gviee2jB7PLrKBmUsbZTzAMZh7nC8MpPrBgXqxZz6C3tEHkZMM25ZgouP",
  "key18": "2hxhsSemmGDiztvcPyeSbxW3P2c5cc64EoEXvFxXhD5YvPfBCaCTSVjYZQXCxKmcHff8nQimjMT8pArzYuN4pzcs",
  "key19": "5RkseEnFEn5bx2p3LTpBsBTdFr7HUqz7ywuKMgmKYS5zhFsP6iou1Tdq1TC5n4q5HHwdtur6xHCzmoPTsFbnvJby",
  "key20": "56FjnZY2vs8eoys2rD3AT25TS2hMyGLGbJXwsdptRFspEJp4zsAVNRshimx3EtzPVtLT6CgPXxzkKrLb8YAccCTC",
  "key21": "44AbrU6cSUVhfPP3f8nE2GZ8dvEreqCd4gt1Y2jG6QPt6Lbx46zW54KHcc8bWbbCqFvNGX7J8CNd82jhQ7xhBN1y",
  "key22": "5zfCrwtxkizuwNo5QjpaS5ijxdNzEZuqDcJ4PJEJKkFhEayzsx7H2BUovcm1qRnyGVNugqnT9tmcpA4yrnrnNxQ8",
  "key23": "2q72ft9y2TYpZ7psXsZNhSfFHXTLhPMyoB7kQ4Xj32ZoKJqXx17ujwGX2c3WB69ur4W1xfbgBThZ4JZp72QyWBUB",
  "key24": "2MRBy3jFjmuLcTk3TYSuSrimx6XfELEBQ22sq6S9L4eA9GAvdxAAWEateSfFACQVC9qG7WUcHZFzYbpZugDmpMyU",
  "key25": "3kJ9pqvYyL16oTzRPj3Pw7nBNaDa8DodguNPWYPucFPXQR1o2vU2drRaKRuzfqNgmQHz8QjfNxbNynsygxhe9AJU",
  "key26": "2gQc3dhxutZBr8xnyje1ZKcqbLnXDW2sdYFpjpNzDYz7SG2FMbdhaL2ff36AW19ueddtTuLv3hwVsmnjBprjEeWL",
  "key27": "2HfwwERT8871Hx579hXfCnix9iyX1F3xKrkcohqU39y2JqG3AipY5NAWz35oykMT4mMrt5noD1iyseL17tuJyXMj",
  "key28": "2Q7a2PMtGpbghzRkFE66zedMDeRgzzjYLkw64D93pMGDBwWDpDuTeN4syF3Z1G5PSqVtbG61CZPPuQwaLydTEmRJ"
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
