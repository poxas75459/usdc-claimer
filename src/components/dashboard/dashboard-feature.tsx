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
    "4kQyAe7RdVMsnkFFTQPJDNgf9F4TfVTEuGPLZEwYCoEEPb1h4yMS7SWQTn7AoJTAYQsp6koFfCTDCxiG4CXKqc6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VaZxz6xpw5U63bAXVM7Ur8vjsgGxzVsghKC13AbDmd7VhhKTutbPrZHcZqBazqFPyQm1JLqXVvoxD5EEu7EZXWt",
  "key1": "JidDWoWES7PwjCHrQLBvjgpcGrsehcrVmsDFGebaqzscscirWWc2FaJSADNADpFaJaLQy48LwnQBS5btqYWg4bg",
  "key2": "5NWLQNWRbiP5aVaJ6GehXq4wzcQExB4bo1LtarhAhdn467B1om72zuh3GQNKNXmbfLPB7PkBpry3tV3kVcvWWPNJ",
  "key3": "4gPBaBXrZ545R7yWTJUxQMkShg27MeNARr18r2WUMfmAdYkS2RJGC9TcjEyhDZhM8ASXUo9iot4P4ew4ntvqXuE8",
  "key4": "4fTw4T5WWS3k3r63qae9mH2AyL9wfiY9jQYF74GX5FuZP8CSy8wxQ83Zbu71vVLFMxDNkak3doWgTyVwWNHXx1mJ",
  "key5": "4qBZRAez28BCdv7HCvyFqZnQUG7iNfkGnhguU3GH1e6WpArj2oFTPYF7qiMBcU9gB7Ub5FPJeCEFJiVz843j7KzR",
  "key6": "2HTGwuHaJV66jnNSq3ywP68pWPExcHS5iz4t7sFmNqHoQtenGXLvtCimrKqn4hxdfhu6Hk76PtXLnRjhCgxU6bi8",
  "key7": "55WVe5rpmD5WN2hrzDuBS3mWBqiGHhP8nzFgPT369xWLouMuUq9rBo5iUizLrjAfCtJSBqYs9AFxdojPwYgBQqkL",
  "key8": "5NNaRB9XgBx5BE2niNia1HPWk3A5KKyjfaE8XCSpHYxzKnNMhrdq8TAboLogCLMGQYJVx2ad8sbeWrM8rvts5VmH",
  "key9": "48TtoLJAmGsWKuAz1qVgrLdbVUNAj5ycuJedtH9y93YMZEJPQ11a4Ge8KbZaARxaUqnALHc7jFMtBMhpXvzgbBdy",
  "key10": "64QE6oard8NjjmdxHvrtZzS6EQRVqRDdtiLpJgW6z2Xka6UJGvzFZoBAZZVi9tzcaT9NrUHwaskme84HzZHVdgqd",
  "key11": "2RDyZDLVuPxpPxJBjJYM5D3KTDvKiadQKK31mT1UG3YjFr5tMLatkQRcnXcG4ssNbvLZLr7HFMFauGZDsvkaWMDJ",
  "key12": "4Yw2XJt4QCARtY9uczxb8PJ6UFyvzjkdd211szyLCyBBkeVLc3MZj45C74vXFj9tyi1zTQTnNqXpfFDDydfm6NWd",
  "key13": "T9q27ys9jtf7jrrpPbvfNn9UcrfVmJPfqwaWPviXneZiGxcAMyQfWkv5kMDCz31M1qdtefTJtC82sx7DgQaF2t4",
  "key14": "3mhFQnncFv4mJdRwYebGr9jak65hjPYXau8S2wVC3nJJSqA88MgxD3w4eUwAmb21dxUuvzJJjum6nUqCyGdcikLB",
  "key15": "4ykfJnVHaRZE5y2htTXaqqwKEMGSjiWRRJVCuTXWyLBFjMjRTT1Mv4LMDqKgD636BStJojipUaembYg6NGJczdMY",
  "key16": "431oEibu4RhwcKEqvNMQ8fJYuVaoktMpEmWTVA4Dr1oKxCi4EBgHggkA4RSyG9SYC1vAT7e9WxMaGngDtFMEqxB8",
  "key17": "9NQfBdoYGk3CrSSBvTkonkHzq29G4W48e4mviZm6Xc4VRmTAUAjQKEqKxowHF8Z1b6yo45MWWCbhFaPtnW9N6Hp",
  "key18": "5Dxz2ExKyS1Yn5KV42xtCN3ZV7S8sTXCRnY6EwaLYM5kC3inrVCAWZ91L1mutJFpyz6hHNiPW9n3sebUvdQJzqNb",
  "key19": "3b75Hr2RGL72oAXbk26iJhTjiNqdmbCgKnwyygwdfi3UKYjJSiL1WBDUs6TsmQydHTVPcYuRQ7cnhgFevaq6xnaJ",
  "key20": "P44Yzz9zzQxHGaP1Rgi36C18Us5ee5tvd8rrHQSqq3AaUTDMjqVZHgf6UJR6FezGvL5cs929RKjtPntKcMqgZfd",
  "key21": "4Nh2EhaBuxyqk1rkgjFFy4nZx69tq67qUrqRtaqKaJ6CVjSVNZ7jPdNuGtpLYVPVzQkHB2By1XJ7yvfdtaWzSaFZ",
  "key22": "3F7YwHsi7Ayx6vc4xpHBoMvzxxB1LiBnc4MFnMwHDcLgiefSPdkh5Dzs5hhhRdqP3WdJdyTdntFvvTh4yomU6kUa",
  "key23": "5ugCFdCpJrPkbpzcixFFZteGve7B18rfcFziJmezapBY5iW74fXJcbsRU8tctdxEdwTXPU6Do3VdBJtQXsfxmAYt",
  "key24": "3ctETYQrBDEXGgZRgTyw7ZuzADc4pDcXvrV1CMF3FDWVCh5XqHBgEJ9Pe2oFnAAHP8YXgB1rFfT57pp9QZWAUpRR"
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
