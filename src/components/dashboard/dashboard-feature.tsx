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
    "4WX2eaHYVtPhkEQy88bqxNozPEJuLV4iMiVxejJ5Pog2qy3t3svgffj3ok45zh7goBkfCHfd4ae3WYRENGv9eKLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZAXR4SSycndeuJqnk7bm8oTBpJHHiK14s5ZCkAojo8bnSqD8KQHSCY8NfvyngjqkVtGwuqebyhYcgHUS2ADWuxq",
  "key1": "4scddxfA7praS16FLKtZW53JTsU1V5q642nGokZHgyEwmHvwMdEbrPF1C2xuScGQZjo47k6j5UpRbTshRkfrLhGm",
  "key2": "2NBaMKrCudSFrpg6uwD3eWYdzvRo84YWqhJkoF6kcsYygfFoRrBGgVxj2iAdSUm5VayK1U9iS7ai5zKBernWC6oL",
  "key3": "2xFgsoQ4fHyQoqX8wqRE1a5LX94FmHgq51Np5SYXhCfRzMrbcLUekMbtRZnLsjrEUUEzPMFgQBGX2sw6zguanCSe",
  "key4": "8CrfWXEAKt3pw6MadMh8Td4H2cJPr2DYQxp3Uq55MmzXwSzTuEJR1TKQB6FrCdCoYC3xLEzTMLDgTpRsCvHUW4m",
  "key5": "2saEFa3NttFWYYfUVvLP651d21KFBgPGcdXcysEATk7rpLyWjRZW9iLPQCmQXktZS2NTf9xDfexPrs61F2JozjDk",
  "key6": "3MwbboaVxxecpsmB4WzuNC4nUNJEPYUPCkXWnM8z8fDF12zGZ6q4pENLY4nj6Mdj3yvbB92zhGSQ6n5UwamgqYtb",
  "key7": "3u8mk66xdxXS5S6YPQWfxKacqsnHjhCrS5PvmoDwB4YRgJiuYHA19G4bYJm1wnNzvh5EUiDyosbAp74V6t8pbPn",
  "key8": "46WNQRwuCHNEDBo3sRwF1qCTfdK4bq945bksBkjsjMGoznaWFCeYcD4cEQXSH83LMVjoxu9ztPbGjz1LHMD17q9T",
  "key9": "5Zv1jGBXyBmUjKKu8QyzpoJHY2kCjoK5VoMvaW5HUSNpJNJjXnstUJZcMosra5JD13Qmgh4yWoYnCVRGLwRd9v7k",
  "key10": "MRyjSXNQhTs3BwvXvV7xTM5xJ4ow2qLQHUZdXJWKKqbfRXnCmvZtb897NqwvMDioccLrzwwtySEX2GJNXpXVUzJ",
  "key11": "3VBpBCUZxuNj6xDi33V182twQdv532CMp8r8RPpWK7DHAAH1mPHwevzvFRYCyAcee8M4tMexDcJxTc7etN1cRZbX",
  "key12": "5xuueHuehp2FGZB6EGSKhTJMVTjrWJXzhiwoLr7mNpqmcaLfpWSLqGbDbRLT5tsoymSpwGVVgh9VeKqKSphYDfKH",
  "key13": "4U7u3zJqqBvxsUy285mWJ4iRYRxFX3JgVYAj31aoibCxradP8UKhHGmeeBFxiij4m5Dnj3EnLuc8iDjeRoLrPyNK",
  "key14": "3NpUsMQiH1CTfq51GU8gNJe8csxhMbDrsaXAgs322hoAwEE56J2EHpNwRYZYcFNDCCjye8zJQtDdxi5tWGrPKoJU",
  "key15": "3742NCjzxxTTLJ5d7RQWdmbdcncR6hR2joPzgV7ZcUYAyhVjpxJBs9NYCMerT4b888X8S7xgXcu4JtA46HTMMP5Y",
  "key16": "4PtZyRjejotT6AiL351NjqCjwvPcoGZfNFwqcKgY2Gt88NfCF14xUQmoBqxdgYhkLFvS5wTFEpAX9vyyfWEo6Y5S",
  "key17": "4XfhUcoia5hBKNmMWdt65cZWFubXMSDmtnCSLEsUkvUSExmVcAigtDzd6eDnwVhjCh6BLNSEC2nH1E7a4UZ2hPdR",
  "key18": "24gRCsDQJsiFSJGb6R6vzS46LWnZj2Vqi784bRyL9gq4uiVXKaNj6dUvqeRmQpssHuU8nzXT59g9L3XHcb4NQyDy",
  "key19": "MwpXkz1vciuFzPfacpjiizEtUau6FJarYrCw6aMzKupuU7bcgaTWAbLScBLG3F45P43gLD44jWimk9dYP4uz8Cg",
  "key20": "3Yh19VVZcTqBEb1AY3XcN63G4fgDTLi1xxBYHzHzCjKSEPqTRyPoJj7jpYpPinmd9vrgMjUsQGXNGop2hX6N9upY",
  "key21": "3kfoCiquNkxiYiCcCz6Epu89tKjfumH3oc7UAkb11Vxwuju9gtchT4TEswGdhhMszqQMPXeEiLt2WmXFoYDWwRuH",
  "key22": "4oHS4wpQjBq8rCysA1wi6TMdefqXkEc1ta9JNAc4frcs3857kMYKTDrtZofsoE3roBJ4AMHYNbgBugQDQ9Lcj5xG",
  "key23": "3rADUErcznC6uSTgzvAz1av3CExP15VmYSXtDE7GxzyCPFSq1dKWD5W79ZkCorS2vLsXxcHwmUiGm9hbR9JAitFQ",
  "key24": "4omtr5t9FpcZd195tH5HkJSs7K2PTkeW9fx7htjx1cdqcT4hPHvbYkYdXZbASaDyX29DTzFs8iX7FYUmWMjZxoL4",
  "key25": "5mSMb2HY8MrkS5AeKKePygiMWrWyQkfUrd8otahXnB2C5jzKrxLMZHbBVHdAo6h5EKjfQLZ4rPZP3JUeGTurYEN",
  "key26": "4DZiWhidDqTmZMZvzvrMiwMvrXQxfB2T9jqjNF29L4xEjWfU67cdkUTjqXCyWD4P6KJjETxSBHgRkpPCRV5hcQPW",
  "key27": "2PcPmv5SxFHvgzdURdimG1hozdvtn9jpi9JJTobe2QAhkMSG7N3P94TCzXDdUo5qmf3Amo6vUVPAPCeEQbtb5LBE"
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
