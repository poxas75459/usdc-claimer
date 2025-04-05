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
    "Vjd8k9UMwLxBAthu2pdXcp3p44sZBEGbCPacgAFDzELKNLEPHfiTmy78ukJSE2CmtXdb8EMj3K9BmkKU692TA9D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n1HFLjU7jwQRTuSkKg53JXSFqP3RMEr2EgqEwvEDQiDpWU1KGTDfcc4Bek8TsDcDrdwg7eb5hHEzD5isRTP42Ju",
  "key1": "4nYgo2uZfQEMrQfPVj77p3vXTJHXabXAM6vvzbtviSsPpYq3QEm7FBA2AWfB3or2iviM4ucHezzuMwVNqKRq4LGL",
  "key2": "28Y3atZC1FyPm8h7muZiq7AwspgDvfdqiV5j7mLJ8S1e2Be9eitXz42QJiR74NkYoPf5GHGy1FyhhbvrHfPRZm87",
  "key3": "hob2r5p6h6JUNEHCuFrY2LubPT2MkLBY7TNGWpk3mNWgxnbi2KQN4yi5TxXga4QMGA3zvuwqT66L3dLVLuhZG13",
  "key4": "iT3qEsZidhRJqZ9rwvPNpiVMHXHLNS4pFPXuRsTYVScZ73LAUrmFTFeMbAfDhsNhJivMEUkTsnstTSFdQ88HQ39",
  "key5": "6wi7Gs8EcBEjyHgnkeK89yPKJcov8R25PrZPDboU9vyMiBEsLsix27aLvdbGTJiCjfn4rqnZzbPHcxFJHswrFiP",
  "key6": "3yu1P9s88ZRZk5ewjSo2KuvPieKVT59QTiWHsnHRoBHdQVjcCe7W9boaTZcTjpGpz8XesBLT3h3EWDRm2JWvPvrb",
  "key7": "62v7oJPpzKJvtf8rD7cpovyHhwVr8F1dnNVaGGw2jgFKSSYxstbbL6VXT8CfTweuFqW3T782MmpKdhHkKPmaAW4q",
  "key8": "2dhBYK3dHLeWGjegwycyrrK24DmGa1k8jZs86ZexRsyfpiDEv6XHxthJNMpeFMhHaeGyNEajbJBUEacrRoXVkVM2",
  "key9": "4RwU8b5aKU4jQBpaWMhth7grGXiTkWXiFTsJc65Vw5ejkucJ5MyavY4fp7bt2t5G1YYLZMGceDu2nLaWeF1XJ5b8",
  "key10": "3kXo5ptfzY6mA2xitneTiYsAneRsThrYR5i6SaHBEaYfK5LiUDTsW8jdJbHSyNNiS8xMdgGgak3Ar1U8NAffz7AF",
  "key11": "2kcn2MbwaLDhQ6i4TPjvKaGyRc8BHMFfsAvc3y7ZvmVJQKSTQovucSxDyzksEZY4LjeMxhSXKxiuT8Pd4MhVz1K9",
  "key12": "5RV5tVZDsNRtCxVJub1j4yN7XsmX8ci2cw71m7tz2WPtA8Ko8nenTYCmgLoFSbf5K3Jx88mBPuSjQx1bR96ZvyQR",
  "key13": "5QCD7CjDk6o4Y6RiPEvNkWZftmcGwxxeCBNKkH2Aipp9cHc71F7srwQmULnSLQ8UD1MHDnk1eK3Z4JsmxexjaAHz",
  "key14": "23izH9dLXsXkTihGvAgSTQpt94jwP8ZtoVXfDhBmyD9h6VmP2E3zHdGM9H63H7PepngXtpsFETBNQCWr4G5GE3mJ",
  "key15": "2huFfsFHQ6RvtGQnjCAD26msMY8bLiHKB7UAsvn2oJ3bE5gvRdMavHWZ1pWui5WKEW1XtnycnbnXdo3u598zzzHW",
  "key16": "5duYqW2wwiqPyLdvCFapmAXmtAFVVBHfbqvTsmccpxDa9oFZG5QADwbCiuSDNXHYmR5ptiDEFYUry6KqXeYiVebS",
  "key17": "2SPK36WRfudub3NmsEWWwEjKVsn8woChAVqCkLXb24gkGepvG4F5gWucyx9CH1vdZuTBgVtvnZqsampLGniEMUv6",
  "key18": "24pCbtQCaCtvCMAZtyj93K8ZHzbUJshTxVfKq6HSS7SyTZNujtUwkcsjg8x1VgXQ3ptzNCWsbtYh1eJpdvhaMjXE",
  "key19": "35seUGBzYNJf23XQuih9hVpxUXRgFAWmxUvzSPCnQJMhvi5u9b9s9RhhKqbx4b4ZtbiiQeBJzE2UjGPWayCmUkPj",
  "key20": "25v8KaAkUADi8ChJE49vzH8opKhcqTpKirZVuPWcGFk29RNVByBan56uDz65dCgWgdcFPmcaA3FXg5GaxvD7ushr",
  "key21": "4t4mLkFNE3GiMwUnHtL9jNBAENRYwcE2gAzcJoZuKhGKPkLxndYyBmDvseaZUbdX6tXazWRo5kLQ4k2ymv2B7mF8",
  "key22": "3bAokDBZeffMdq82kAb3PuyjwJP9Qm3BP8P4NJBpGb74wawZFk9mWtwDGKykbanAHoSNcXSjGiPw4cLn4b5WpM17",
  "key23": "3Esn6GnKuSmKzAYxktg2iZCxquJQeCRUSSjQ8fLVV5j2q6LJ3SGJfsCTQrb54SXSAXwXyATGJJAuk1FnakjMrvCB",
  "key24": "3PRSZcy5Js2M3zDGP5qYXm87YLFccjV1mSnFqkpuyxsviP2v6CwFa6vkn64kt9KJGophBZAU74RsrLmjsubpjVga"
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
