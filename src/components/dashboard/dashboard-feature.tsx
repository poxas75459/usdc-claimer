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
    "5CD51EKrEmRdzT3eHhJLqkyzF26GaKpouyThECgpGVshCHT4Tnoi36s9q46yU3w61s6YCjh7dRN1kbherN8KFMda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aZ5YhVArWAGS9qyYxai7RYrui3eBYVMpMK9FG1aUsWXWJ6yNYvDm89ouDM2CKeAsdjSPqXrG9prmtAGQPcu1hPN",
  "key1": "9FPBTJsPxHSqAiX9HiFk4ueogJWra4kvX2TtA8pizXJDK3C6TqogqpiTvDeHk2UbyntpbgAqCFi8pMnkZWG8Svj",
  "key2": "mScGV4sqT7JsWkdKFdaLcmKESRoatNGSamX4Jf2krUbFBW2LTE8bTaAyFL7qELPDTnofndwubPj2EsKBQU7DZxP",
  "key3": "4fgpCmaP1CyQ3o7EBdjF19uVkrT9taYfMBSQRC7KAAw44Tt94tnix4nJisVJHfoLwy3BUgJbRiBoUvyUmjmtqr6j",
  "key4": "3azSB4XxawkcRuJhh2mP6Jz39wt9XSuMaob8oGnQaCJWPMZWxoQTc5QpSPYxT3CKoTCa2DVvavBHdeJ1S7KyFnxR",
  "key5": "5rDo8YK6rZhV7LdyStZP7SmTihS6hUmMRHgwCim5xzaPLqC4PMUB97nto8pVmwCMCqTHLx4FRJR5yAsW9FznMSsH",
  "key6": "2bNo1Q858jttvV68GeSuwsuqUys55kzgKkRiCdtXhd2aLr7Bb4cDSuBMoAFhR8T4xVKCHuggvTbdPz9tW5PubRTJ",
  "key7": "3EJGo7xovacAPb96HGbHykPyYFdCkSuY8r2VGAC6tfbSuqdWfJfmGBsdTYXRRCSCnkg52dkyFZXjiViPTfjirKXg",
  "key8": "4pnCcbwebVWbJzaTMp3rW8P7Jd8P9Ni75z2qxT321DBCpJducV48mNmpZzKVgzHSeUXSkTQX8YtLEpYEFMe5Nrke",
  "key9": "3xSnFXRbVefy8ug8vp3KLRSdgNYfMbBVdxQscjEWq3wmYVB8DJpjAc8eu9vaft54QGx2XQHZKLQUfiQPNk5sR3vQ",
  "key10": "2hL3u6n2VkvXH87btr3UV2JkEKZScHewXU7bUXp9qBKqY9hUA6Fsq8fjk7N5dUWtR1b6HHfCvMLEF3CvKLqVwBP",
  "key11": "4c4BhjFaZnHf8ke4NxmBZdSSwcgnvCdgz8WV3Wg9TCoCGzUBjiacoDRBLiXoD6SViJ1yKzMRPdjCMFXDt1paaDH3",
  "key12": "5GzYifTh4TzUTZt7D1MH7wXDiDcFxdEgVANqwXnUeEXD8NUFaTmG2aHo4KP7qgN3QaQjkELk7EsUYVDMRb5B3wG9",
  "key13": "5D9wqhM7mde3ScZMPH5MiZa8YJwmjRopDANgNK1RzLUd1rSCA27PDmMnnRRzY8Fma9zpephoXecQK3vs3mJkVeJK",
  "key14": "5V6X8cMk69y9z7MpLXbybZfdJVvLUerrgqPfc5Jfs9cm68dkjgsh2YcjYni8JfBWfULKhGLUBwskK3ev4DRrptUU",
  "key15": "2e3iv5DCmRcqRMeyX4KzPwZSx8ipGxbAzrJjj1LgDjwxJK5VaRxvpjnMHJBiLUXNAHAdLL1tQpzT3ebTtjeCwDTp",
  "key16": "4UfawQytsFZfHHbXHisjzenzEBjoSuzXspsUzAJwydbPwmkJnEmY3Y2g3MNxeA7fN8EeU8nCkV34ifLR9MR9Rr2y",
  "key17": "48hgHc9VwXGWbG1YpgfwEoZtji3DzvqPQpNUQo8tWkKFZtvXR5GNoFKaRLi1V7LAddhEWdcwAmBUbiYd553SoP4",
  "key18": "tbScAXeKsBJoMf13osb6ysychnS72F2P6vDBHX8MMrZzYdEBx4P12VazrLekkLd3jCKNaKdnjVmk9M83LEt8muJ",
  "key19": "3ffRTWrig9z9CtfaNB4ZSJFHcHgWCDJoVLXBMoeqRGdyiuukMLn3iMZN6516bmXKPeUPCnaMv1NyQbkMupPF7szo",
  "key20": "67YbAusRb7EBXcAaHF1TLBy7TmP6Jnhbfg8Kb7tp1xqLnmmnELKnXLmEWGafSvn8G2nFJPRBvAvtsxAWx4xCHTyE",
  "key21": "2xefTYYETwJs7QnDW1q4sPRXhs1F11BaXw21RjMkeNVRHhLFiL7SQ6JxmGCzmjpWfsJBKvZH217fctchPeddkbTb",
  "key22": "4oAjCAxyZJSMpUZs9AZPUDaLpa5kf4Jf8X1pnAQvcq5nz9irBaA1vxL3XSNxrb4RDHkg8Jz3ychFtYo4wcTddMiE",
  "key23": "3soRtmdkyVMVoyG8Lt2ywdD53MPAAEXVSTSWEQe8J64B4n6YoMnGMpy685F8TLoaB5eA5thEopuymBHynUV7mCTH",
  "key24": "61FbaweD6FnYHR6JjM8K8ymvfgeaWGHnh8yqS1TQ8p528ok2R8pB1upGqCBkQt28Z29XLRGrLenFXVFQh9usACbK",
  "key25": "4sRM75HSdRDNZu7d6zwVafbXiJC52niai5Svbj8tzP5D7V1VemA66RggxQ4pkBaoGgeHPHuE53JJaZsGcDxVsCSd",
  "key26": "28Cw9x8UoDrthp3wsKAcraehjkn2z7QsvPWDQ5jRBTf2qPfDp3sz9JyVeQuigGUKknCAYgDwHbK81uuhJrBUCYev",
  "key27": "Knp4xa2SLYPy3e3yx1WbkcEkatWKuRE3JKZpn5sEra64Pq9ZrJAGPLfGDYvWzBRuSxm5CokeZC5LNVdBe9B1qWK",
  "key28": "3RQzDNLYLVsqnxsNWHNYxyZG2mM5zDAiqD9Yy2VqWFJB9m95WKZpMFKhvKiBUWrKnLNYQTse7msgUT6SaEbeMAXb"
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
