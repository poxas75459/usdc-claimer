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
    "56xKy4wvdxBb4LsgUpun9nmfEqBrtHMT34iP1wDCjH1KpPJbyksG2pXv6SxqP2dCwbE49xyNJKNTLQGZa6ApkXS7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55hyyezayn7MadJNn9yHKYYdMtr7ib9udvEazshHKRAKHz99c6udtkW4JRjxo4cgXbGepCkEWFeaXFCFAomvFgis",
  "key1": "5hYZv2gy8T7J9WfFvup4AeFKiBFwoxJHX9WLhjftogJZyQu1ozM12icAj6dPsbbzgiyK8yeuuiJV7fZscS4RhyTU",
  "key2": "5kd82AHAVPgn2GU7udgV2H43x3dDBsv59J5wGJ7Bae6WEC7FXh2igeSVTbRu4ujXGjEJVytbUK5eJBDFh7fNjUDH",
  "key3": "2YwvsdYA7Qnoq74DuuT1evXu4TSneJaZQXiN1wwa41vbVUrforJJSyVZJ2AabPVbDULxaf43s2uK743KUK4E6Yk8",
  "key4": "34VTaW4G3Rvs2V1dqM3XnZChJU1MUMwLDFB2RHZMkqphJnCvzxRutbM9wPngzP9uxixKG61KxGsAXT6xbw3e8vjr",
  "key5": "2EPNQFsJuEe6c1n4WK5Tu7dpr3BUcMkF7uFT2G9VyUfpXtBFzfPQupSJNauVf8M5KLd1Qg5J8JAqV4NXMEteDzTa",
  "key6": "3zHGFy7nhSJVg9cjqeV1AwPnHrrvWWBoLmrTvTxcgsy21qVqgLrfaxtetACqpXW3PbuQCsuXoSt9HUcZFKCfADkR",
  "key7": "5bH7oAY31Pc3mUAwdTs7S2EZoEvHEdk6gskuPjiUUbiNh8htfB5icGdDNDbrzMFvZSmb33bw7uXA4BYrLpT6zFh7",
  "key8": "5zbDZbJUt6ZEbkmZJBV9V3Ym2n7aiihNBxB95gYZiQLA1tvDG7H1o9abngrjq4QhKqytsbNpSWVMA9f8wS4Mtgmq",
  "key9": "nU7ULo7W4ucjxDB93RZ75Rrj3UYZnQ1fZbX9ZSYLCKXmpZaFTJ5fqN9SHar64ndtAbZNTppmcopWvoGeu8zkfii",
  "key10": "3dEPP9SVdPfXQ9XiRyLbb3x3S6VHvRbAm4Wyae59WGug5CSFteziYpZfkaLg58b8SjoDboriZ2fysMVkAxBEm3jn",
  "key11": "3Aohcc4ovRJfYxVWzHckqxojTjdaVexDEpn4gGVbGAeY4Yp5WSDusShd9X3zSrW7Vm6r4nCNukQnBnxe6ReF2u2q",
  "key12": "3z2i7K2UutfX9v82E6pVRDLewtoBC1tUstBUwQerbTrhpqhHVRCHt2f6hP6d2z7rawi7fveSqbuhjLMzzXoyNFE7",
  "key13": "2K7CshvHHPTQUBcLUqUnzmJTukuLm6GkxJZq3giVFc1YFUPTXfSdQtn6V6jiAQpiTCZH6kpsKnXGffhLzdrvvZnt",
  "key14": "39DiDE3ZPgREbdpJFisBspnriUioTzAyYvHCmq1miBLsqZufpJdRTzKPhaJ4hHcvEDB5KNKt9MuSwaSbhxktNMHK",
  "key15": "3PP3wV2XGbLpmu7UK7etFzvnzmt6LMA89S1eE2qc98rSD4VB8XmX15KRGAyDSmQAvsycXxmMWrUymckTUctpeGBy",
  "key16": "5h4UxHZ6Rqi2K9wXKfZ1VNVtfgHK5Pf8ynYurVFkRbCPg466roejouFtdiSYiBH68q5XF821UPKwpz8mnAQZ8dDV",
  "key17": "JkpHgEEcfeQpRdU4oTqoCe8SwTZDUAYgGhQ37Prg1fhRT8vYGH4MKcPUaBgoFVtfWLGg8sXbB31fEhnK4iA4ca6",
  "key18": "2deUBaheZJGF9r3g45WrBF51XciVpRp7i1f4MUtGyk3r6mvLkc2wBmR22qQ6hRpHYzvx6SqbvHcLfFxBYmt78zH7",
  "key19": "2To1AtiiGXWhmdn1zgXRCQ8MvYezwteP3sbHc1bbutaTTxjorLuSj8bD6yRngRtFfwmWByHdiVaydMbvt3KwjZ9a",
  "key20": "4CBrrCJq3TP999asEmDGpvYkjyr38TA2Lu6KWm7vwbwGAUgPSiB4BYkBo2bAKaE62SHaPPK9i5NuHkSaR5aqa2pn",
  "key21": "3kZAN4P5zN9VDaHVsusi76tCWKK9FeXGmqfaSg93V1Xy2BtahUwMqYMWsMaawRoULpX85Rj1HWA9RW9835k5aShF",
  "key22": "KKkfXcKnwGTPGJBTKWGTAygRg7UWtX2kdvFRvNg5QPQM9cbByPMLCrvb6M5tJWtwwp7438MkghApE1uHhuR9mPN",
  "key23": "444qaoSPCy8nwxztWaXggDPG4wmW5auPB87CnWhxPQwtn6MvV24hnfn2KrycU4PeTdEz9XCgp7SZrPooMu2aYJEW",
  "key24": "3NeiHFLFdJnpRUkmwwm1xcpSFPHbGV8gxhobEY49Fx1oZMPTPkEbGLoBk8xhBWfykFPwak4PnqJGTRZbv2AY7x2M",
  "key25": "3CShcrhF5wRt5V1zxoGXQcUt2edtN3uFV3zwoRwWkaaD2sbVUhcmFqGHNJHDiPWKN9KTUeNa7fAk3EDMc1BkutCE"
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
