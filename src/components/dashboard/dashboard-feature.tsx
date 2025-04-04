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
    "2cKJHDBDC9SGexz92NojMJDY4PS3QqdmKQHmJbQ92dtFE5hjSP2TxFPhhZRXEq1wSEw6yFGkkJNkaJ2SDfdH4b6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TmAWEBT4DbeiMSALYkBWYvCw6ZCdcSgikoPTg6YFMSKRqrTiVrajJ4Lf3Wi37D2rQE9Y1JoPCengbB5rHKtCCo4",
  "key1": "3YMPQ9FDWxnF7z9C7o5QtNpHzw7XoyaB1pQddaGw79mGmK6kX8trqprAe2pwwVx6hK3kbyjvrX4CcRJE5mp2uMhC",
  "key2": "2buBsiRdxfQceXkvyhmqeDjNR2hEKzZv92rLM9hnBL4YwCseu8PHwQjEzr5HPk7Lk48ArFvtgt1EPiy8CgqozFqq",
  "key3": "yKTXzV2pYFVH1NN8EXWBoTbUDSbayyo9NLSvdy4c2wXMBEuaWpsyU71vcFJqWwwgKv7XL3d7MXjbm4Ax4qLNgrU",
  "key4": "4czrvc1dw1vqjHLaoVKxjJ17qG8DRUemkxvowbo4KW8e23Uv5sCRcBmuH7vqdhYHzGJ1kUaDyB3CzXavNSsjYQ8n",
  "key5": "4SmiUFgrrSY44v4bTLvmLhdRZZxqqer3ceDobiAZ6bv8Q6nJnfxP9fiSR5qR27c3ridokDNCBm2J573gx9LTBTaf",
  "key6": "5xempWEPTUvjcsfexmPyYggs4kMnsBp3jX8DNbfQkD8TrcheVunMs1Rc55S74sStob5J1ub3mLw7ujCEY5f6xvoj",
  "key7": "4oztYxNJVKcLoZfVKSjnxi5hSHoPYn4WU6sCxeQcU1dxpGtUVreeq8v1w4pEKtRnNKAqRYpy2457CXHRT7nqdose",
  "key8": "RMgFA9Yod5gzBDmich6q2PbJER9kzjzqb4XAqjkufUASB4Gtmqt8xNaYVDEtsjDesrD1U2XfsUBtiDMzyzPTdjq",
  "key9": "42Z5oQ8Foeie3zCmzMUe5E3rjKXazgkN7cEmaipzg7UqrBKQ9RKWjrtKXZqzRtyx3FyKbuETBx1mZBDM5zu6aJDj",
  "key10": "9PeNXJnXnaMEKkQr183HTyNsDQozxpzvD2oCv8vwVn7oLNngFseowKXeDxWVv8HvTya6X6AQtYv4UDCbyZrJaqs",
  "key11": "4BwJpi6BwhFKkvaTYZsLtETc7LtAqPWsDjgunnDxNQMXGDkrR6eUcLNGB5Tyiga4Ry5neyAatKHNshHP8vkSGtFP",
  "key12": "4WWKmKvMAxJuZ89tGCyD4C49bhf7V2uTX8FBXeu7YSVaShZW6NXYqjK9oAqe94RaJrToJCST2aG1JhdaVuCookbg",
  "key13": "2qmVFkTLsaSBJ5fvwdVd3WwPkzMvgRPegpeoQirqyHLikzKCjnosQNvRCGCGdTMdhR6PbZApjcZQnA45LUv7qzBo",
  "key14": "2bUCBJ318vvEVEtHU9UnQkDj3dv9k5NspfuupVWRzXhpYG56tD5u1J6k5gJAiXd8an1Vauo7tBF96tEGmGtG5jsP",
  "key15": "4vw1vyvG26y3RHuAaGvg5urhHsUMZLa3FtgDkHrDbMxz1FrM6biXnisPebeDiTfU6hTjj3tLCUYoA9ep1MvZVUz2",
  "key16": "4zhaP3QkUHQAVgabMZgMXVez8rXggDMA9SVpUAo2dX1JJ46So8k1t2WEsSdK4z1ce8Nbv4QAQMsvqtshykujoC4N",
  "key17": "4zdo88NzKy1kbGiyUs2F7ZerfLttw3xk97KqTEkw6fWmDL5t7VeWW3273h76Zo8Vrfpggwg3Jt4FM4a5UK93qKa",
  "key18": "5RMhuM8MnZujtK31SxZui1uqZfzUdmTqoMWU68tgy3duSXF77EihbT3W2szq6pTELpWs7TeDhVQdSY6wVNWujvaV",
  "key19": "5odGsnTjCT6pH8tw7tR4QegfW8XfE3Wffq8pxKzYNF2dyQAvjoG3rjMNPbKEs2VAchL8j2aoVWs4rKy9munRUqZ4",
  "key20": "12A92hKt1exmTwGFNPmhs21CLSLTev1xBjXJPtAxRNw5Qt497MVKpcHFEzqNiccz6f9uWnBeFkhisXV7EHifJAE6",
  "key21": "XRnyWxgUbwryZX9uD1CQBztCCPeQL6WtNNXQ18F2idjbphLDQWhW35Luz4rTpv3cKfF2L7Ze8wNSMHuyRBasVye",
  "key22": "54TW1mMvJ8h3EdLb4nDLgL1pmaAfHJAQDRn9ReMuRBuTYhb8U6pvpaDLoDkvUBTuiJyDhCL6kMYkAFZfQmRysXCa",
  "key23": "5zKhPDbbYFkKJUWrJazXJ4vJmc3B52M4DyuqNFx6AoRbSTLCAzUxzUxPee6v9GajQS7rnEEYZW6GSHdmHDt45pac",
  "key24": "3pxsXSgkKZEAxtC7NFzkXraRDgpa1eUtZYcEqT5SPS8KK3VVHFGLiAtaGbBKZh6kRGnyuEwdnG7NPtuYLGgd34VK",
  "key25": "22FVLHYnh9qQQ4TDGFEGFyxLG1cMgmbtQSDs9CE3dxNtnTShiqPfPBJgZxvLfFAYEuBCC1bDUY6inH4Jj2WAAsZC",
  "key26": "kf7BSTNQivCXAperkmVWfy4uq4z8CxpQmTsWYAsovJgWeZAmRGEBGNpYDLeMHms3wTBNuMo8fijRgiFqan3mdfq",
  "key27": "s7k5Uid1D3zuh5KYFYTfKUjn978A7oKzCRYnhuGnW8VE14r4mvKf55PmA9hg4y1pqAfAAizJyCNeAWJAGQ6S3C3",
  "key28": "3ggMp2fZwvu4e73XKTjLXEZEPmuM4PMLgKJPuPDdojseTWk5A1375BZzY7dq9P9fmdzxkvfrEfvunNgspq3Uo5F9",
  "key29": "3TiNhj5sdbH4zEkh8aQQsz1YDJ7CdftJP5kyeuWUJoqdEdCr9p3XNtAF6ySPBuuxAMikegBdetGjZgtrDz5CrGW4",
  "key30": "3FbbtfuUM7i6LmupSs8Mkh74fbQRMHAchoJn1KNvEwipjmNykWhB9YcnjvQ8KiYSMXeQhVYj9Q7zW7nhC3j2EJdk",
  "key31": "26B4f4N7BT2YE8jebdT7V1y6TNSDosH2rsMZjGhcs4PLU2e2LaYEbCMb2KYdZ8tiYQvs8xvos3qxTxaWcKGzXoMa",
  "key32": "3n5NcV6CmDs1PnsU884VURQahvkbeKq1Lyt9tuvM9EkKcCeC5Hk3hSHrnDNpr3mEp2rLSq9fGkodpGyq2633yjsb",
  "key33": "3TEuzQasymwbjPE7vwMw3WtKfzgL6oZnifev8Yx3KV2BPL4iHd1VxGajwjGKMbid6kUvp4eaTrqSsExDoFgnfAaL",
  "key34": "2ttLoF7YHvwW1NdcMf1hrtLmP33cFq2J6uQvWS1rBZEZTodc9k3hbX51sKacpqyA1aQX3UKfGwVLhHaieEs3DyvA",
  "key35": "6Pif1Wwkcno26R7pR4PvFtSu15Y1yLUSj2XSMUvTTut1kFJhAJsToFZrNgSsKYfzvuPq1ChsTjrScYVGoxsR9Wn"
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
