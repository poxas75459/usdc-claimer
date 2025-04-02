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
    "5ZhzivW3ni4hBNpNYkTvGEaahYHFRNoimATENtQco7CrW8MV1cRBkYgbaonSLSpSnyBNZp4cbjJEq7mG72SW9f7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kKA6A3h2T5gnj94aYdFFfBkU2LH7XPCqtKtf49MwKkKWfiC8ycV4iFokpkTw9ZMgru4q8P948ECumrxScGBZZFj",
  "key1": "5A7eg94P3dQXb6VmAi63JE6of6Mbgh5d1zz4FNQvC5d3TyrebfVFCbhwAb3NP3GhjvoJUMn3xwZukgPkcsM9g3pL",
  "key2": "2rUgPrVZ2HjajTM8trodeA6cUu2yYfAZU5wacuRRXfKJe76avF8CC1VkjL3vjve4TmoCJnfgPJVf9xxGmVs4jBF3",
  "key3": "5uGaivc4d9wjoceLqxa79NB9e6iXBH2m4uoQPo9tMKLtvSozVdt3kw27nRRzqnxePyo8uJj5sWMSknw5sWLB3HL4",
  "key4": "47wSyYcuakMw4xQXTCjDbvZY7GZhj1y5tTfW1tSdaUdJE7V4HAsSrmvh6NUyvmWDPcKv7BwxSVbnSH3fUkPt1cro",
  "key5": "2QpqP1iQznGkkDwh4XiWJQwCV1sZ9q3vzsJMWS7xFgCPs1xx46K6ec9XfAkHJENNmaMP38GHi4D8VLrMVK1toGy6",
  "key6": "3kFpd5FQChRQjXGhHK8XoVguYfmebY4XvLLJrMBT1n2mSTaWppMfrgQZnfH1K9fBvhdfog11fkJ2fMwMvPK6Ek44",
  "key7": "3rtNBffocceNDb82mutBRU84tqX5MzJeoVf42E2rZhYs4RGedBETNXBGLpRc9smdpcBGAWUa2qUCqwwhW2iZ2CiB",
  "key8": "5PCjHbjmbmafGczH39E7JXoaHS9gxXW1fm5TCm8CKNotp4Dp1FYtfQAVr8e7rVZnAnFj1FWqymvhWPUkyL2pHYoN",
  "key9": "44gNXL1Ej7T68Xtqo1A5m1tVDSxMdxyJATP66pXodisXGHne2bXJbc5rRF7we4Mf3gwXdB5rdE1NNkaGYCG87wEd",
  "key10": "6qdunWNBsCgEvaEoT1gQRd2Hah2iosXTTGZi1EbdtLF6YUojTMriDXgp8tZpKbAaPcbWqs75dkBzy7bcJhn2J3W",
  "key11": "3rqgRZ1PM9MHzhsxjeB99QV8PUCx4MXANY2oyR6PkKgeRXTwmYQx3yLLrGBQ1HCTqKRdft7RerbVeVvb6JNLHbXB",
  "key12": "2LHsC6Rvghf2ZkDJCY4viC75XBEejJ3UYH18NTJ5qXi6qc987j6XG2MztoNWJUWYK3tbQTujgQvjoDrUvjvJ2Jk6",
  "key13": "2S9pbhGosCRfFYsvfZVdTdoahG8VGtf7ps591KWw3qRNTHmFUQ7ZtonywaQoynFSofgBd9CLDjfewPWFg9qVUXEQ",
  "key14": "263ksBFMGqCcTMdVD2sAMWf3FLad5FcVhaJZRu79i1ToHKnZWxrQb5qZDUqPxtfM5tioFVz4s8BZALR6ioePcubg",
  "key15": "o6tvukppaTF6goNaez2o5qwxEpbkNEeWET1zb4XjkPCm2zUFvNJbP8bz2EE6cJ9z6uxoLeBZRTPUemruvKCHBsv",
  "key16": "3Mtk3ynwH9Wgg26NLTgGzUcL6Z9UvkUgLJpc3RjKLi3JXs3amDwgDrkaGT3Dg6qzy91kjUgh5dPCxVnnPBUjcgpG",
  "key17": "5Ztidd2WrYztejpARt6Fk3YkN2Sr9SkBpfEQzR2m2xB1QLdcDyf3VAvUhZ7JR8vsdPgotKJVrQYiCdFvhjzFMFvk",
  "key18": "5mY26uDXurp6uTzFiAnUFze1tNEEjTgaYHc8sqbGupy81dzKwzz3Np99ZzwuQqfWJ9JsSMMLFAqzAhsVMywrPDDP",
  "key19": "3y59giLnawjdMD1Wn376QwZJUi19phxRrNUcP7fPAX242LG1qon3EeFE7KXNrkfwfUBfTmRmaysbWZDCyoraxnQY",
  "key20": "Rx1D7aqiZUU1hdPhbrWmJnKP5db8cwsxa8jSCrHzXhTmzVTam5XP7rEDCxUHqk5KVCVYwJhV92NgBddwaSuD5L4",
  "key21": "Vp6dA48Z4VY273YQS4nYjNc4gpY5rUJRo2s5bV8NeLtRsKstgskvhp5Fuzbh5hkzdLWqPBCNvKD3gcipBkc43cL",
  "key22": "C3eUkDFvkAWpjx8Th46j7qVwyWxgAJpkBJevT6xpjmELR1dbfT9ETUNMHH837RVh3vvcYYvohKRdbLH2oXsDPNq",
  "key23": "4SkQiCw4ifS9cfnwfY1ayMafyCMWXG1xLS6h3GxdMduEfDhfUbUdhZZAciBpkhLCnpQH5LfseQhL1pjQzFuoXTjB",
  "key24": "4Y4EChws5WZd8pFXSL7AbDhvG2LxY54v24wwE1UsUySTnnXgtDaNA4CVncRXpJmR9Vdv8oGKJSbHp9q4Tk2WdAXS",
  "key25": "2xDB2co2Tr5YWdqYUSwxTfBpWdEreWdrzdBaVs2wHra4JeBMAxqQS3ZYFGB1ZnjrSXQQKmdzvFCHUHxyeMfwMMN7"
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
