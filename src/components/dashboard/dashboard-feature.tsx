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
    "CNbLFH535AqHEATGSjVChhXw6rgsrTyte1Kq9gN4QR7DGBEhN8SRnTgLDDP6GQqvoYcTaxqGLaCg2LhmNYtXuSW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GkKGYScg58Pp9mDL9R2Ms3e4guvBwbhXPN9iRTqRGYRbKgbePbdAsvzpWiYKduDdfoUuUv88fFAV7puZKqhD1y8",
  "key1": "4iGBUWn3jfvkB3kA78HAvd3PovQP17ATpJMG4X9wqc7XPMEjuFYBj9yY6YEXAfVusn2EKwE7oZu7godk6b7EYtFg",
  "key2": "4PZKaoZzKLTWRVfZ186hLuv4PcevhJX2LM7v79osu7dBmQxLxsfsBwzUPk6SGyWQuHfFkQhwVeq5mpwk9N2vED8T",
  "key3": "35VqA84z64YLM6uUkgcrBm9F39c3U1MhwaouD9Ay5RTh29hhct2vitN1xCcB7SaGo1LweAyAu7AotmkFgdsLeqiZ",
  "key4": "pgeQfW36rSvCGUT1tSYi3RvQWgqKJyutngBnGh1PncZ2QdrpeV5a8vDwB3hu197Q1PSZ96cKEJ2dhyWrpd4y7yz",
  "key5": "3whFLz5BChbQ6fo9CvhHXzXEW2QoxhBQJyFEJPmu3qWWQmYckjNdCQDXuGeVnJ65q3fpgCfbEEGavvYK3YSTf33d",
  "key6": "3oiVJrd77iHpijKmrP8JZguKeSauGGy5RadxpSGHdzZeiVFSKA1U1ANc9tkg3XRM41eLGpbivjw3QCQmGfbJumTa",
  "key7": "2fXMSX7KDF2fVtuT71YoJjgyoht7ywC98UFhVhPQYfTsoy52P9N3nWjGUarDiuArzDZ9QjxVbsaMfrbxNnzQpNwk",
  "key8": "2Q1avJBSkBJdVbG8QJq5RfmcHykvA99PWk6NTNgmKJrRRoE79aHJ2qs5KjXvfG5tT1EDzsGZYbetpsF9mvidBL44",
  "key9": "E6ctYTbpv96PhkbTsN5XLRt4JPA8GcRr5rXQT2miJWPesYTSRAvJeAinMigj9nMAHSUxSp4TxSn2fZqCwxDjCqW",
  "key10": "2Y2Tdb7JbqUDsFXj15HZkVR8YZuc7ZvPTMC1XzX3STUgzoSWP79UHmdJnuN3dFc1wqJRMYQWKNsYEYUE8yHtbKK",
  "key11": "36ohAJ7VfgstnbkGAMcfageV2M8RLeHCyFL3khjXBG2NzVka8FDJJoZW3NQq2RRgoZoaNHKBJ5ap8c93DMpgQoEw",
  "key12": "3t62P2yzDYWNVLtY2GebNkmUA3cbhAMcJ4fiYGk96evnUsbQKwCzgLmWBaAaFUHCto6tnvANf13a6FVb899kwteC",
  "key13": "35fEMadLLvKx47B32ef4YkGFM6tCMxBdnKxZby5ootUrJMLDRehcDPUoe4NQtspuzHdQ29wv36anuV9Jso4maHAe",
  "key14": "s5373hw6wFQvFqa8VrmydrbPHAuTnYBJQLeoBG3f2KVQp6QcGoMYt7TuSvg3wAN2EDkFDFYyALcBrc7aSMgNpPf",
  "key15": "2vVFSFWFczkB1ab8mdKctFyMyZZktmdomwYaNtCC3YuU4TK8bAjz8pUkdDKWof5d5Xmry4qZSQUT1MU8HhNkWAgn",
  "key16": "56nQs5Xpuoqf5D95AgtAQdLPeeZsYwErouKfcdxH32dfc5ePt14j8tq1rQASrfsNRHQdQHxiVTrJkUjhwrenWiqh",
  "key17": "bPrmnRu54qyh5LNaapf54XomNw8Wbjquqyr5fG6BubdMyDmNdbSadi4M4v33yHKKqW8Tge3H9KPfijpX6ehdsWA",
  "key18": "2F8aM9JqToUz1dfLn2zr7NP7CJfkEgXotA8fU6CXJg3RN3GHeHnmvo7PtrGCr9Zhf2rvkuQQ2veLqD3EhSpBKMhS",
  "key19": "3hNhLfeTvci6PSDbCCBm5bFgemwNRiqe1Ywq4jFoFuczs2CXcfqC6Lb2EuJ5qGo5H5oPfhND37pW4uH2BRYeY6iC",
  "key20": "j5GE3VxP3wKV32o24PR6P21RaSf3VgrnGYmmHQFYHewNFBhpvPfCyf7fhiK5Rv8K7oTUcaQyUiWrLzPUC2YyHxa",
  "key21": "49d8qLugX2V8PMr6qwVNMf5iuExTNoQgSBzxNeTJsaG7iZpB9bdyHUzTtF71RQrZMybfC6hZ4oCJS5zLGB61vfkW",
  "key22": "SYnc29A1NNKzcRthvEHYZG3ZvnoiFLPtEjhHTyUo58afz75dSrqLMgwz5FFiZ5PCXF17YyyJsPZJhmp86o6cW3a",
  "key23": "38618vzJ9uuW6D1kE5i2kauWShohMcdZFH21SwsG5f7333dLdghyREfNVhqDQcSnUpWBpuAn87uTpmrrkzjjdXNX",
  "key24": "4JrTGMFhEn26Ptb8SadgVvPKmBJFfHysGncGjRyCvndkLzJE2XYC4t3vaMSBU6ZpfSAKj5JJbsAod5tiWUS7UtHQ",
  "key25": "65RVfZhzeRWXVyXRd46VvjeeQxarJwYk4nubyKSkdWFLQosmCJxiuPZ9Yjqan4qgnkgBsqwpRcTj5SExAEQZBMu2",
  "key26": "C6c3doQvGqGXEJpYJZoZ4Patc2Tydopsadym2VU2bdGhnSr6k6qwhSHRT4fj5xAaPoAXWYUCrk2hsTxbaD3aune",
  "key27": "3PsaZj4Tbt3gDTVJK9rkh54pdcGK2FV2ZQ2W8czhwSUZZAfB4xTjgcr92JniEtdZi8Y3coumxMb8B8GK4B68d5Cn",
  "key28": "3EY9Dm5sj9Y37aGG8E3zfz8rYopqGEURsR4QXLqod3puSDxYvJhuF4HNKfXsMR7kN4Fp971iRnd3gYgvm56HGPdy",
  "key29": "2bLeicuWooKFmcYfZbj6Rx6rGD1YNSFemjPBsadJtjYbyT64YpYwjwbBgCEzRa9NySQYE5hdzQdDzmJCFfPR97u5"
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
