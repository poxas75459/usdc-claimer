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
    "2e5apZtLzxwuRCsV4dCBunDw2vbzfbYC1s5GfqQxfM2xRxh1Lm89NdTGEWnKrKrMDFiEwZNFXf8XTT7VocheWn68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23xBFrXb8gQMWDXJGGtr6iGWsHiyii2PuhDeqLcuse8X9mp22DBQYbNnZdxxc6AR7uEHcS2JQDqgVH4w5rBN8dRK",
  "key1": "48xZVRfV9wuHH6HFJa2bqtFn5vLSwgJQokpLvaiy24f3tYLCq1ZrCeUudqwdsE2EQqaombcpfSiLuyYgk8SxGQA8",
  "key2": "4LEtaBVtnD7cXoPJWUhmgHsbekjiz81UjPJpYAmuByuRP768CQ3x48kFx7DytwH41GLRf8ZxWu5z64FSXJJ4sd5X",
  "key3": "CnbKvaVhyTtxu8yYKKy34PWH3ZdZDvmrExeTuRekZMCdL8Uddug6ySvWUeFYP5sPzGLiH5ZEBCiSghQGhroKEiV",
  "key4": "BCvqPqJyTFPnjiwXRShpHL63d8XoSYW9unDBV8qdAbrMbnefNxfYTtAaKyE4yGruTeWyhzntZw6TYTNwacwrJNN",
  "key5": "2Fnsef1TTwhEW51DHPcAVfTUmV3iL1QBWKMYLhaLc8zPVwznDA6wn5mcwL6Ua9UXMozGecyZrhgu7gtLwYjHzwPG",
  "key6": "4b2VsawTNkAg423jGcYJEi1SKxotwM6kmyPcLNeqmRYV5prY7YNa3uF9B4ey5J751S6yNbNJ1zzzZrcen3hFyzdY",
  "key7": "3TSbTFUHZhRwDBSAkbbigthM1nqKrd3pmjNcGWLn1CDQu9RfmMQ6w3XfHN6rMTPLUZ4WtWrB6uXkg8GXYemS4rUB",
  "key8": "5N95hDf86NLFKnQHTd6CMQeTydbguvEuEBSQEThMgaiF3WAJeUV5B8BVayvrP1FBv3Jp1fEbzR2btaAiYuu4ZENi",
  "key9": "3pjfjp2NFFoaXqzcyb8e5yhHqCX6LZnv8tq1pYBE7CiVnnTLqHvKj45NYS3mvHW4H5YE6EdAxB68abMvioFL7Rf2",
  "key10": "KnMMg53eWjjk4bF7eTvYErgJVRH2WNyUkxFScmTJEHonT83bCk3o67kcFdjfDCDWyXs8ryPf3gZptg6wiHmCjFJ",
  "key11": "2EqvuXSZbH74FYbVruYqpBnZrvkkwHK9WkhSx2ULGXuomWLtRXphGMSFeztn1nNmGid4jGWwNiPWUvx7SHSTwSco",
  "key12": "61Xcz7CyjTfgvAdBjTHB7U6o1x1SBpRneafB9mrgyiQdSezVJzYczQRwVo2PE9u3TgNyHh624UfJQEvAAwx8FeuQ",
  "key13": "37bzkCPuZTh6A3zrn83d3vFHv6hA52au4zYvY4d2tNrzYFzew4BJABL3Su2WuaFa6Y7EEyzTqsYKf2iw2PXz8ubq",
  "key14": "5DD6RPifN6WFxcKFTjWfH6w6yGQV7h8tRpzWALdZPJkedcDs9PXxNzbEsxSDsnimHAoYmeMaNm918N8CY3fcFSGN",
  "key15": "2B6d4RgxwSM6PWFSHwtix2oZ9Q4r5VnrduyGB822X6uHCLMXAM8HsTWtsnzZdBpoeStsU7LUeygBVcKZceV5LEZA",
  "key16": "rtt8dPhWrmovgendajmBsCPmxsH9icwraCBTFHM8vRWSQAcewcVTrXS7aP8hkwupohdXy2WRpgA5CrBrYJdqv3k",
  "key17": "QZmDFVrN832JV1brUavvy2VdFFD3eaZZFonWdqCkPd5ztRLLvxEHNa4QGKFqCAQmvEPN3ZFZAsCpsE2pYMXzWrD",
  "key18": "4UqKP7f6BCYYJxAZzGeJjVUofFYYGLmqy9xs4biJyqGm1KwC2VPt36R7mKC2zKjdbvvK3ARnyfYbMPyw2yxsSVTA",
  "key19": "5Uw6UuW9TZkECkPu25L3UdCN2TkyvGv27hDFK136qcBZEBzYHtEsgoquBDsDHz165n4qichWx5mEYKGcKKndCzE1",
  "key20": "Jq1Ld5hpR2czsRBhATfULLAuJkJZ4Lvs92ZxxN9uEo3YK3efPce86dDSQ74SFFFSpH1YYanuh6uTFc2hah6ZPkP",
  "key21": "5C7YvotKcDr927oUXktAwVQCckep9KUjkgNeV2JqcMp4B2K5iETnzbzmo6YKCArGkNuJfivgamh21qRaYkdkeo5j",
  "key22": "55GGugL2s6Tw3x8fDTnNDhPK13XiCLMAXkwqY3fyhTVmdpWY26GxkzQ6iEZdPCwAW1kNMTwNQHiWw2DVwjDgWkYJ",
  "key23": "2E1R6XWgX5j8N2gvJXn5ip5Se1sp6FkQmL7UAi3rZ9mtdksZG16it3PmYaZem8Dj55aePjjrbrnh9j1jYJPgnfng",
  "key24": "5trrybSDCXypr9AMfdtd4hKmB2GgvmDzwSChfgx88TEh5mkzwJsVhCVoffvXsAkoSr6TUs4T5zJsR6eGRWjnqF4Y",
  "key25": "28JVSB8bgb7wFdmitPQFNLKyLzrdHapftUSc7j8UJRWXLXkCFZde8HmsgE6ku3cwbMMwKkyFRXc24FUCBpynXVkD"
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
