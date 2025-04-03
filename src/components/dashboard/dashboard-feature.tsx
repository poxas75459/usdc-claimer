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
    "4HKQRXadC4a1r2AQzdPp9uPSPSeaXk5FpEGaXzHJnYQDzLd7V65tmS59q3ZrBFpKGr4tHmu9f96wTiGDr5V82mGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Gtn4CWHhSL2edpGFDAJRuQ37YZwUs5RHWdtG6kQEiBZ9Ach8tAvfSUaRqvKmRjLKeLE8Ksjq9PHtT5r8q8Xc7N",
  "key1": "3VS5G88a63YVw3pkimKBj5nod2Q9FizEe8m1SnEohNWbrezwQKS78ed7iTh1cj9tzhxR8WQ9NxrGLnHu6sZtfgQy",
  "key2": "3h8zJN1gBwwCCFMuqmVPHEF3GiEsfAtPAgLgLWe4JgyEGVitfD4VbxyZ6LV1JMopDqqmB9eqDWSEwQStcv1H6nq7",
  "key3": "2SrmzeQW6TcJh4JauDSwtsE9yAZYsjDUhuiDyHw7BBRm1uAfKDvSpwebjeqtGZq62N12XMWFiZWxVWgFPJeH7yT",
  "key4": "4kaTJhwr2iEenUmy2dUrAFm2HzigNDmThJR4gw3Z6rWnWs5awwLm535xDAXMmoCnWPYdpRKpa19rXFJ6ScvwVrHr",
  "key5": "2PkPvnxEH17w4WowNRj4RgeYyuE4jMpJXBCERCska2FovycDznMRJGXRgek7ms3TbTuveADhuMRibK1WCpxQ7wD5",
  "key6": "E4eKMtNUqNdamucSSqkSq74b8X5AwS8Md5JTn2m2dw3Kv4PWKJoytoi3Qbs3T2eqjJefPiVrdkkesk4mh8yatGj",
  "key7": "4i42uqqT79DJgRkunzJU3B1qoFjTELxV274g19zewBA5efEoeCFkNJxysZCxDUZsvg9cVtTWGcoLfmB52ZbDUjDu",
  "key8": "3H6SaK3yDh1AktH8oDYbdpz8BotzQdF5zFYiD1myMtVALQy9VYEb3eKQtDWU5fFf5ApgNN5i5HcdGwZC4GmYK4BW",
  "key9": "5ULUzJpkojodgarbkjmo5uR73SW96qHxC8JjDr4gWkc53AjWzj9MXDBuEcJ7MsgsRk1Pdf4ptQqXhX4fnpkKFyMo",
  "key10": "4jeBqz6jcHuw6ohVkbvDKanLutNKvTx99qxZyiXtN1nyapDMtFx2oqNw6bM2CR4gMSnJVGszy5WXPqB5V7s1avd9",
  "key11": "2VGLYMRTj5WC9jMuaTvUrj1X66ec5yiKstrcdpMLcBQ73AvNSiWanMEufWDL6p75daPfq4juKH1JUCnyKjrpZwRs",
  "key12": "4JuvF3X1NWEcvF8fDrFHn8UxXwDKCjdiznnkksk2AyPa8pfBErTKgTgtzbuvitj1rW8n8Yvy77n599koTXyDXWRv",
  "key13": "2sK8rGKxu6X51BUePEnmcyTQtFsHp2JWJ3PFLDS99otFN9JqfppbXwfx6Rnu9HMDrL2Ad6BbHn2241woAcVKkFYL",
  "key14": "2DtevNNuyawDhNY7RpzrGyU9UPtHQ6r2KuQASspU4TBetvb1toxCW5h8SRZLUGrUcdNYffn9QUNDjBGmsa9X1PoM",
  "key15": "44zTDrYbqvzmEhX3jfqcG6adbCAxdDGfBjjm33gGxr1kBnqhXVKYe2xJZhR6MeiX7vdwsNSnEoVFRd5pf2qK2q3P",
  "key16": "5yYC8Dk8WTd2p7EinB3BpSqAGBHZNfTFj52retSmtZt4CoYhMmNxFfovD9Va2u87rmjWNQHhtGsNuRsSy23TXS5S",
  "key17": "3SVHKqE9Ggr4rQfLVJ6CCr3jswNZYr5tHWGLVhiJvmm3XDPBC8e7GmhUK3gwDdcFZjSVCffz3ufm9zJE94dsjGYk",
  "key18": "5yGhqy5oBpafyirpGjFjGmY5MErqgf4JSVY8nWzxbuC5atnqTZYqQwF55bdxLE8tEx2hjzx9AGGNpdPq7o7kDqv",
  "key19": "2FdzUwYKZKWh66Et3o3s33qvaaaaxrd5WvTHnh1ct7Poj9P3NCvDB9TNhdDaP2S2Tn5SLg4Ki15usrGzjyvUyEP7",
  "key20": "pfizBwhnaWZKFyFr2FU8pi8RBDygEB4CUn7ivUDYYvPEHuNsXS7sc7mpa3xP4cs1Z5CaMw1DiiQGh1pw4Y89PkN",
  "key21": "BYGffjxsqa4g5LPXv5Xqr1KiH9ZricqL32mnubZkUViNUHjs4i92pYKEmG2DEPHFFexpoxALpLC4FnUeZt6riH9",
  "key22": "53k2goUqPzkohG8oGbxBtVwbrA3318r9dY4RrvqutgMRmc29yrnEgt9wtcrYbvUBMM7HwJhTttoSkSVTguY7fPrG",
  "key23": "4XJ2CembMTrk7nCRJJUJcuSwF5ozLqayLSEMCvqpPkpJ5WKoSPQKgmkHRpUKmQdvKVHiW8PdNRtLPfsXAR5kFZVV",
  "key24": "3zAmDeBXLygHbzrMM5WZFQRK2xBzhUAzinccUPCnPcebKKGDwixDjPEQ61NPX52ApotnBJAsTLSKn8P6iuHwimHj",
  "key25": "3s5m5uYDAEmNMJ3Ba55mfd7jCFrgFonViy3r73jxT6gx8MvuL3783W2jzQaSoaVhRsfvLM79vnhKo5B6WTRLWvjA",
  "key26": "2LLcDxPUEF14r9Axii793iYetYPkohv1jXz8RpAP47EuY92k87XFpY9w4zFzkWKncMVmAAUCefPvSjq4SRSaZDs7",
  "key27": "5fhaAN9An7NZGeVcUJr4bSfMMCYH35Aausff5e3dCrE4yDeY89Tdh2j4My3QhcCLj7g2JvvFBF12ayxHWfAuPvTt",
  "key28": "2zf6eKBxgpb2rP6g7NuG9neAf4sQjWgjiza13cH5AxYxBaQ8eZrLyos7aqwMguT8rYQBzVtXBKcbQSDM695ERdho",
  "key29": "3Xe5kwX5rmz7QbqJprrdLV3dmp8wfntxVxtBbhb3yRiMf86v6f68fx9BeNAV9JxMYfZo6h9xGujG1NNxDcGisDQZ",
  "key30": "5en8b3tDXE7aSCWed21nh3zbvT8nu4UFHUyaxJo8L1gzm5uvMxzc5j6544Msh8W6iTE2VYfedPvkj1gR1P72Abqc"
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
