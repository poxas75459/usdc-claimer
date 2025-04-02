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
    "MRTzkZqzSFmqrMXZZEFwvn13J19KFnq4v9WFwcaQBfVgjgqyYdhonvrJsJ1Vf8RsTb9yyskQ9x1TLTVmzpYU69F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SyV651scqyyg8CuEyfvvYSY4pBRWRC6PWDV7ahdzxrAfiyv2nrmruNraAJNQADHFcumKerDGeMBTxXCzR3Qzq4U",
  "key1": "4NCbUpD64wTWmE55L9aAWimByZTW4KaqZFjWMkS1t4SWdJQ5k5r9JhjFWLUyeMWSRZ8U7jgxqNQgCu4MhVKJfgKb",
  "key2": "4xySnDaZjy9aM7t9AwQTQnCpWYghAEVoqTFqiY3RykL941ABCgvZwP3AZUEw2t2exg3r28yodese1Z2FSiMADjut",
  "key3": "27UqUCLSehYrZpcSt2JyLfomXcvmCGpuq2iTv3SKHKDGeCaueVYSuWgNH48SFFjLiMWbEffhKHsXiJS8uUxDyyRy",
  "key4": "4iJi8m2qMCXyPT3jomrYcNGDhY8kU4yV6Q634T8rMUaEVAWxRHTeAQTjTSHkxPnUFY1LiXNGvqH6u7YMNjVpHfAF",
  "key5": "26nHDdHabV3QSTtR59zBj7vEySiGKELCL2KvghY3AiDqSyMJdyoL88BjX3EqV5c89UiN53rAjxpb22EBtGaa99Mv",
  "key6": "oTCt83ezXo5sq79We6igHqFRzDKCHiHzMjU8E81KSUtxBCnJW8spDcLoDVUha1dZYA6cfzwd2fpp32W5jjL4Xhd",
  "key7": "2vFqU8NviyK3XLVZHkxpKQdhC5P3BpoqehbGwmXvf1wuYcAx5LZ9i7CawBwENPBag1sKCmwGxebDinhZJEyVAvdq",
  "key8": "252v3F4FM8UnxN7ZazxKSNPwTije99EH93nmbNKgxiDyUUZ9YNBoFA92YhNTgQukwFGDsfajSskcjcNxdyT4o5nM",
  "key9": "62xt2unYhPJuFK8c7CAvc8sXUNf5SngzyjQaBeM9ZymrFrMBaJbvi9ah4GTVvB5vFiycQGukomjsStyrJRB6PbNq",
  "key10": "2gzHVMyoRbu593ECYPhwiWoBePZ4rzMun8DAwFhiHMj8WDp69XC7edwvn2vYmunU91LHTJUCW4KiUit34BW2d63Z",
  "key11": "5dkwpQjFTotLXhc1HQ7KhCkJs2fcbiHHEUKkUHKsKTzQLGgcMt9D5Ed89yxGCpGn8ECjkmhksQzujeCRbRzMxYp3",
  "key12": "3mJPaqjqivCrrKmRwG82k3om4JFwaQkKmLJ64ZeotrMyKGPKdr9EZSdXRDeXs7TpzE2g3KfmRWDAZY2c3FF95WZ9",
  "key13": "dts4m5DjLS8Ykz6Da7yGCWF5J4zbTZHPhH8fWGxXKKk91Cx4pjnxbXGnTLdybtLhc151pVU1CKKwGnMEYWHjAxb",
  "key14": "gwSNkir6oxqoBM5mkVEL6YFe6BFYPqRa3Mzr5aQYGeHikXgZaBhfXbnuSgUMcJvCPEBdb7FwbNUdwefHXKqJqff",
  "key15": "2YHPX96yzaTPshHdb1xYLtCPaBgCLvb1SEUqNjjFSmw8sgeSJYWNjzYgtUHuj9gtYWcNAsATdHdN1ibNrMrENoTH",
  "key16": "3yoMyY58D5hH5sTmN2D7zHWyYzS1VtNA9HLro2vq9ixptEWS1D5rytsFA9i2ij9LHu7a15nt8WBu6Me27obxX7u3",
  "key17": "aAt1jSumXNarc8N19NGyBzzqKx59RScf9fWRAtM1UWFKmwjiDcz5YzdZnuvZqSBtfY1hfvCHDKUC8ZirmZyMDp6",
  "key18": "4Vckoz113uLPSGVXCqHyM7R3EPsar93gDLimHEZ9PfDA3wbZMxvzBTSn1Qx9wcw3KKuUcZ7Lmw4FYVVTG9ociKMx",
  "key19": "atCMt4gtVW4kYLBiF9ALfWQYtDkNkxVCB2Syh9jBSiEHZQb2dvXePY7HHo4WPQLrMcjU55v7nq26rozZBjHhUe7",
  "key20": "3CASA1iSasn6Mfx52aCFKg3mUdawNKekKQzqYwaQryfnrRe3Kz4h6vZVmPdaS2ShwaAEVzhPwN2YPkVFRgkF8cPD",
  "key21": "3nJUxkLtjMT7YWpZCiWkq4XuwgFL6wZat2JooDcWySQzTnnPWSm627DFfRqruPCoW3VpoRWUjAZz1xCjhXimLAva",
  "key22": "5tKbdiqpWFHYE1fbhF1SDEN87T9uFYK5hvGZ5MKBf4QtMLLQJgBkKFr3g5FPpQJiXFycbrS2827nXPtiB2joc9Dm",
  "key23": "4hn42DANuAytgPdm15gg3ELt2FpdkGfV6gA6ZpMBR2VRQ479tVxPR8Y7bxFCNLKRn7pDgU2Q4menF4aXUSxatUpP",
  "key24": "3AFLRegM5nDCVkJHidi6e54VYP6QrMyhVqveAUQtZA6rSgJS29U8UxLH1uN3ssbtA66ozZwC6gNfFZ4NxBubCHe5",
  "key25": "652jU4E4NtLUGVgB1AFKpg6pxZuEVy8Fo6fVfmGucrP3Ppb9t5geJxsoLAy4CWhrtVW2Zwj563RnjLf8962HeNsr",
  "key26": "4ZcpWoPMDcduYVd2cmRFLRiSYgsEAPaTvhwDyDSLUTrFkEMzadWR8taL7mEGeUd7RSuVhhsHsdSVJLdMjCVDtS1k",
  "key27": "D4kXvHVHgNieg8bygdsDjJU78BgCmb4MhgdQNHucrfuzxq7Pv6ddJNA3xRRUdKqSTiwoQu1v44PM6XcYDLkwppB",
  "key28": "KBvCemykNE1sZ1iszvHsBGwv1SBQLh3Gwq8JM5dBczpLFWMnq4C7dHVmAtf9qVLg5XJVTECSETn9KKJQfckW4uJ",
  "key29": "5n42BFWUrj18vjQQ7LxemqP1gxp82yhXyk5EqaMAvNfnERVVApuBP29ppE9KV1HrsL1konpETibqXwaHNAis2ff5",
  "key30": "3BeQsPQPJ5RtDZJG9UfnPjByt8GpyCVDxDrJngn8ymjLzSZbWPudyVkHQNAxbnZhQzr2cunzz6MJ8Y5Smk2GkmNG"
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
