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
    "3EyHdp4DZTdWpYbDDwHxY5sefyftyvzoKPfVZbahsXMnLVHxocRd8fcsXK3PtjC1HNCe9Wwhe3T6ZH9HVMP5myvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p16aZrnAkBhGZJ5YEZoz3DRpCTpZ1Ehzu5UW8xfCZhXsXYPXGTZPy6HzdUUD3uJBYHAPtmRwzteQPCTGoT62BfR",
  "key1": "5kTJpChp7KfTSG66MNwB8ckYotKbPXgXZrL2GfW6pKojsi1jvCfZe3MQCcXyCP4gNDbif4jt8boWvEZyhHaUbequ",
  "key2": "28Sbv3yXyagmt9PUWLtecuY3WbSdv3qwncxiVoH6sbfTBj58KbY33ttQG6sqwAoZy3RtWz9te1E4CQGH24n45aGs",
  "key3": "2G6TJQLCueBpFc1TTb1ohgq8FSgbHDa8SPTksL89j13TVLGuK2CjtdpPV3nx8EJjJ4wrivPE8JKnGWTurMtEkfdx",
  "key4": "4CKa71vuXLnGLdX4RkiTcQ7CcvFJywjsDcpVU5imZpCMFiULTcp9JmJj9GUpHNkoxb5qhv6yoNENTFChFLZXb4zh",
  "key5": "5ziUTfFP8NyYWCvhiYNXEmw85FDVSjP3E2QhC8NvhvcubaSdjLcAKCibJaQMPYJphGXjfQ1YKsb5RXLxU64ucXdR",
  "key6": "2SSzTsZ8ZnusHv4j6cxwKc6UiXSeByVj4vfwjQH7PZj2jvS9zM8bdNweoPmubuQptE84v2mry7LDyRPCnTBRxGPV",
  "key7": "3oJoRQFx5P32q8nP4etcANogCq9fHQsqXkY2oKL3qRoJK7grqjGffi5juJQpaiQvWVGwNa2Jt93hEhrTgCwVYrvz",
  "key8": "ap5gJ3fU64fLxLm9Tc2qpFUtFfsXY7FYmfgvLjpttJt9Xq8CyfR1w2c83BFgkyrrFseYQXRLBWgXQLC2rCSYgME",
  "key9": "67NUsyYpMPLT1BbkackNr2QsJD3hZxXVpmXGJSUjQXnvhpkwspXnaqBgwUWHHKv5xenzG2pZq6Yn6Kw6TyoseAQE",
  "key10": "BP772X8t1prvNxVAH43HNXY5eK3QBLA56g2oxrSP9A6eAGMUy746Xcibof7HL72Q1aCFhzLdcudW25C7pY2Rghf",
  "key11": "5Bae9Lz6F1rckq9q9b6pC9YajQHHBModh3RztqAbfeoWfWL9YrE1qHBXLAm7A9e8EWNeEnmtp47ZzHMZJkexP7iJ",
  "key12": "44pFuXzw8Wj81zSsqCu1ATmuuTbgkXVP9S44d1VgWZ78GzPhgugZ2WXF92oKEJMyXm1pooQaAF643Epgi4AtQQfU",
  "key13": "2G65jRSLrg3sjyTVGaJid7FbyCKQHZvEyoZKX6BvAtYTMBqvokSz4VJHok3NUjfbCrnuLQfPCubM1vhGgEi8FTbH",
  "key14": "4bMKQ86hBMpr4fNaQhC1GbJ61T2YHMXWTmLdQqUeSzZH2oTGH52EYXnTYHz1cPGfVQWDEGickBRjHs57FGk5KSvk",
  "key15": "NfPWiUHuyND1vfzVjcBi7jTbMz7u4VhzGSpXHtnrFY6sFumZ4mUHiGgbPVBvXcn5Szoudqufg76HbUhr9iSZ743",
  "key16": "2WFKXMAnh5daA9ctsu3izefqZpy9GfsDiUCQtPDXN3quTjCLzwrTmLmX32t3r4van2H8kvMUz8Pcv8Yc8C9LjEMQ",
  "key17": "46oMaeA8HLpT8EpqwVUKMrbS9xM9FjbxNA9yFGPCA3yJw3UVLPF7sjxVoZg35oShxymBqdpt9ZanPP81DPBvfM29",
  "key18": "2htUNzez8WNHpXjZAxxMD1D6AQGWZrZehbENJDVtmaLLVFGt7nxVVT8wgKsT8bb8mbDiJmefrCYFUV3Z53xCLLNB",
  "key19": "37NPdjwTfht2pKAX1Efxz8Z7jso9QS9bdpava85zAWWCcjAQUg8Zensc1TReG68BPETYzJ2ixAKnJTRRbkscQCQ1",
  "key20": "5JAtvURacB47EmDgas74im6Ao2TpZv7W2MoLrEqy9PpsY7pSvgZmm6qsbMdKQxa9A4Ji9z6nrpg2yt9G6TdhyP7Z",
  "key21": "3VQmAzBuK6NBgq8rXdi2532kJi9LwAaSQQZsdPYXqGuNigqskaKMRH6F4Bx6tuQ9S3rtu2XaFZdZVS2LgxDy6q1t",
  "key22": "62qiMYoBRDB66GokRRpsp54k16vCBwGY9yXJ1rtbzRteemtHTWY4pNFPer4Pn5WFN3axTGBobrm8mAVVCXVbBAqh",
  "key23": "5k2Cg8nyviT6tAu5w8ppVBwUM6qwvdpSgxzstBDBn3Fiut6x6RFttVpry8oGE7FnisQTjZgwbms6eeTYkjMUcrSs",
  "key24": "3cUsJNJkyuBSZkt95Dw4v4dX334qWYt3EJ56XVyeGXvvGxhA9yMpsggthoAaW4apbKFBq1ogsBjUiB1PdiA4Fm8F",
  "key25": "2C3gqVtEno78QCjmQJKBfqxBj2ri6prmqoQ9sAQV2X7s8r7Gqu226wE7cifCz9MHp2ehHximrSzNDDAFaVCh7s4V",
  "key26": "4B7CX6bwSVJRgFHAxgH243r1vKZwxz6VX1fU2UrbxLLLsR2eb1eDUdDzsY1CMD9BKy6Mvy49GqHBunAYn2r9w2tb",
  "key27": "22d5TYKWtDWUacbw25SoVpPEaQhdVkyxsFNrZcTYBuTGDq4yMZzFgRgd6EW3fnBzVRQ1Y8np7vDnRAej9Pe2UGV2"
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
