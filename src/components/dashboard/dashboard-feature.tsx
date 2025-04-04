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
    "5M3rAQ9DNiM51R2PEGAJM7RB8fbjT23qLKZdQecw5CeccCumkV3ft85DRMvBnx6QgGjWm6FtpRjtP2nvqsFzEEsP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21K8j1YzmtXphFUhFkBDdqfRtKYzrptEW1uKGz5zCiiZ8HN1wdoboLAt92vLB1a7QrqnLU3MHXnAm8grURMjUgNC",
  "key1": "4izsvP86seZo51Lcf92pYceTB6wRAHY7WhGxzaXcnp8CFHTmmP41d3XhD6YMNP13suwdr2KrHLyYTRPzzRq3UXCZ",
  "key2": "4q7fje3StPynwwZQZJG21XwecEwWELz4hjesrfsKjGydaxE2bkwDaeN1EjP83euSFsR7Wd7paPB8P5DTJmfsKobe",
  "key3": "3qp8qonhfJB96MnmHtj8mV5pK21ErWcALKFRuGGyDiurcXMthKEJniK55xJrJ4vwhp7xXwLMTV6bdrbhFaMpJWhK",
  "key4": "dtw6vDsb2Q6w1q2FPJurePiesCDu167R1fR4WFDuyBXKF8uvJe5Hp1oRXNLYdUarAXpTTrmLYj9JgYVMAZfaitz",
  "key5": "3Ry9ZJkQhuhRpaGVnFmguDJigr4fkAPhiHGnVYZUKYXdDGyEop5xteMafonw8fbD6528ckDfTTFwyfT4au4satUG",
  "key6": "5eeyg1h7mSmBoZDgxi44MABbWL8JtT9kgPR9TkVzS5Ve8L13ybEV8SSPzunq6w9EjNYaov3ugb18d3TxAH6bCXz8",
  "key7": "oZ2g5K4FzYTgaStgyhmYs1xhw4Gndwx5udYoqRNSwcaPPxn8q4SQ3juUyjJxKeeF25jvVaAuya5Adfftg15fKXV",
  "key8": "3fKAyma9CwPye3AcjTY3vPpoK1f7AM4M3yUr7ejpsQ54S6NvJ4PktBPQY2tQBQUMvvAZefq4dXjzwLrNbBq9u7sc",
  "key9": "u9VoEX3jsSuTp8YPWENVDEQqBYsfooivjXKUXYumHbkWFuSbuZgHupV9s4kGGKpp7ZTKTWWJ7SB9Fbsw1HUZQGP",
  "key10": "4kzhE59LysTYLjTfwByCk3xSqQdoGUMgiZsVXCMomRYwbstvqkWxWQapBBXxaCMLkfECTgAjNbpZZtAVJpNMLXyk",
  "key11": "28nzEEx8EwSjPKkwD7UB71ZMViKKkNSNJxUmbgaWYZKDZTkSZXsdBHswRFibZQMU39QhMReXz9NKHdR4qwaEqAzw",
  "key12": "5QMxPW3HfzDmCTjJVj8J9vN3uu93evYi5HbNtVgyQG92rtFrpZUzwbJZJk58HmVsDChrngDrFa5XLL9tGRcjCqbV",
  "key13": "n62w7dMDohtLczJixk4hsu54u3qemDtB3UCU3Uwv41tidmBLzzqVYCXfhag62ybUX4y56UYCbhy2n38sfSWNACM",
  "key14": "4JTBL9Ptq5ZvJz1LpAxKLzbTCL4KaHRtCkDimseRgh8nbFVWHa7F6fjD4wcWcbnmpuTri9UuCRdNwfPvxDB8cFe7",
  "key15": "4hmoEXLJXodj21CPth6DTYo3AjkRqrsRZ6AobTnE8SaSd5YhkZiWZmZNrS1htgJ7doNUbqAxyTLAn9uAckJj4hw8",
  "key16": "4US4U5pcxVziQK93e1Y4GhRNM3Yb3jxiJ5Vj2Fsig8CLMofMcoP5L8wDngiAiYsebUvNWNnMPWdqhmLZDE4GKD3z",
  "key17": "4ycD69Y3MMoeHPjUtoRaNMwacJxsSe1pU1VbgAPsrifdBCL96fqFM21MDF9qR4g8Zv2dAAfUoxCnXb4NEJ87ZnKv",
  "key18": "LD7zDUS2sR217LYQzTwKgN5ubxW4QorVQghX3ZRb9SZvoN8GUjCEeEcAETztsUtr3howupAwHtvBsus7yJxymd9",
  "key19": "4hmDp2gqqN36RmNNGxxkSmbNwTm1wzWfUq25UoVbTSWwtmo6gYRAWuygseXgk9rUqsbkmMT5L7GoxD4Luy6Kd6G1",
  "key20": "5TMQTaQ4sGyZiHQ2Gumj2ez3nzCjm7vyD8kLsrzUxFBQrT93vN2xQyPRFn76b8h7go6PdpVdm7e2MStxFidJB6TA",
  "key21": "QyK9mgqcpUNbxQYBAypPbxJwk1aDH2aMjEqvTV4NmZdxB56n8z99eTNq44vdpvUpHqiFU3dNdPdLVHL6noovvev",
  "key22": "2fJVkStrHPK3pai3DYJ6NvdxexkgoFK4BfREZEKpNV8xXFY4B3SVnG3Jx68YaZXeRnHioMayVYFoijpqNyR2i8ww",
  "key23": "4mm1BpJJPPYBhuYmG6xFiHNtosuSW2Cm8ExhJ375DP3p84t8gwLmSMMwiL6kYkgbYgsS9pnwuZcMQukvGr1oYfPa",
  "key24": "2s51sySzMnEkBMLvVXCgpwg3g5TdYajmcKXK4FcqP4E4aftpFRKYPjD8HB7s4rVjeV1NG2RpzfmBmB9DFZT4cj14",
  "key25": "5T3T1oLBHLSARsDZ9UyvjW5AWLqqLfzTfcfBaQg3J94VK2VtTwC4LzhR2Vsj4AJnj57fkWKB7T1NKL5ZvV3Wjtuf"
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
