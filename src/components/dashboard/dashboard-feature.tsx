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
    "58sxfPFwgxJa6K8EowWBeeKKjwnawaPrc9iQbedaXGdxHG2TpXGMfFXFjgsfJPzzV3Jr97ANUGgDcMMBZ4pZLLAN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41RNr8vggBPnm74ZkRe83VBkuEe3xtvVrSgQ9jxSJs4E6TLQS2QjfxhqCrsV1HQnWE8ZvFqMFqYipn8UFVkBSam9",
  "key1": "5s6PqApMFtQMyMdxNw5RX9emGZ9JwjibNbBRmS8SpPC6hCQpBD9Az4tiyuBq6XF8srvZNLhrUZo2QZbTNDEBhumF",
  "key2": "5b82XfekxPQaYrkFjCZitTXoNW8EPczeSXAtCvk1RdkmX1NFpyGsqt17RGTkWh6Xjj5suBCEQfpSZuSt5kHebW3q",
  "key3": "2idUfB9GEXdSgm54BbH8BGste4BBtDvTyfRnfsAkX3vfXkTayoJVc6WWTHoJ5JejBC7d4NJ6mxSp39dvunKNawQY",
  "key4": "2kh3JeCGvyhCHfcrnQYq9aBX8qu6Bzcr89rdjyBXG7KnmmfxAhRxFe179FUTanR12yZpg4kNmMZ3X7kxujWKdBN7",
  "key5": "4xYqrAjQFErwMiMkVdkib28qngrWJqvHXmEPXUGeT6fUYeMP5Bj6kDkbXiw8cBivQzvSEhh72TR4ZoCdqiSHDT3w",
  "key6": "5sAR7ugZrZLUg5GsvSDy6kuibURABsHX6vTJtRFUn8VTBKc9PAzEmndQNeTouTvoNdgPpzykRueppTyMEYU28tcH",
  "key7": "UUGTjH2qWfKdNKJDSMUF4QwLDSceb2evdUA96Gp6ottJu3WQhhKvUZFzdKDQpVMqGbftU2NHgdfBcfHrbBW4w4B",
  "key8": "wfDfERjT2sCBpmoWmjpGSbRH42vjuQjRsYyFQNWz2mQu5qqbtaobZ8m5WJBvZbyRt2Dzyjq6smDYXfFoAw3Upvf",
  "key9": "6VykcJGA8BEqUCF4T1NjtZuncDbADzgFgTxfkJmxcYVY33PMWpjPMVAN24ESYPMwXTKCGD37uXsxdY6skqituwu",
  "key10": "2iCxGbUVbvaBE6BGD1UojDGNmB9PSLPjq9VnQSZRTqX6kKjj53sWDxzLx5J6UybPXkbWSq7MzGEL5HWCqF3rwZx2",
  "key11": "5heXaV9a4cGgFPFYAfu1YL6hpn5uhm9MEJoBMhGkcDzAowj5F2KfW8Y8KC5n6KWAxeBKsE75H4PURZXvLESvUnmz",
  "key12": "5DTfKzB6iUf33kiSXe16tjKb9XHRkJPwFxwHwp7p62xYiJQfE2AfBMHyKzD8isYjRdufxAAGjgAu6c2PR2dA6pYh",
  "key13": "ZZeFPk21K25mEbEqSa6YfEddfTRzaPYzeFSsAL4i7e51mUetriVymUQfac5gvjpbGhe5NduZbCcoCDbN3ynX5xM",
  "key14": "3tmqK9dwVXxHrBGwBjMsgoVDNtSZ8iXcpHVo3Q8E2oWxs87kfYKJMwhQNfCSWaZnqR88rM9J94N79BeVyDrnzwmU",
  "key15": "tSuzZyG2d7e3PpcPKHB4sDvd6mzQWGU9PsXZLDM6S8DP3Rxqh75nPHraAgbuZ7Cu1DKU3JtMYaYHjPngmqKLkSw",
  "key16": "4xMF8snp4CVjrq5r73C8dJpi2pra59oPvimR1FsNMduQGpZ7dPzL48VFvoULc5iZn6VJpxmw6N65pYvziXspBxXg",
  "key17": "4C7jUaUhinh7Scm7L7a8Ynu6MJv1f658ckbsbchntmidS7GtYoQzBg38CqbfQjK1BTY94XvGgRjsCAQqjbyqyoj3",
  "key18": "Q1qJVSqmPExE2qyjnJ6kKjY3aZXGUnn4Z5Em7ifNeFb9wrrTKbLUeyjsSiJXfSpjDZSTEznTPpiZeeUGp76M6Fe",
  "key19": "35zn5G4nay7KTaKH3RFELpizJbRiZKcERj6FD6Ltnm6iGPGYywUdvDLFrkjN14zcodZLyXm9YJKyi3oraCvzeSxJ",
  "key20": "3A98PKpB5yMGvrfcBthM68i273GoD2NQfQVtnFAKvPaEP3n8dfMvjTPewumWbKW2fAz4JvFyBm65wCkv3fpXUdz3",
  "key21": "21bsQRg9ptfcBMRLurrGfaxo8ivtvbo3EfohaVyGzvFpgoTyTg2Qihf9z8Joibw2fLwmesccw1dTshmhsLDvnyKQ",
  "key22": "pVvfAqT4Sf1eP2QhBLZhepVXcMjuKRgMpBNFUDKHst7dJXCu2Q6NLQ5w3ouqR9twoAxvQog9fCRg73ugCEVCDiD",
  "key23": "3jztttax5btsKimtX9XAu51gSMi7JA7Am8VD7jyHdjDgsLXMrZaKX68ks9Yvb48P2xTVhwvmP9YpH7NRSxi6a114",
  "key24": "3CwYfTiWPG9ad4MjvXdo2vnSPBXVCCEZDa7jEKFd9MtSKhth4yn5VWM338Li2caEJJS6Yta8BJQDsjEpYzCYPh7v",
  "key25": "5Xdj9MbXYRGEV5R6tGiupmFdjJcoQ1Q4m3zqdtPfrsu9VYQfwKXv9nNnf46DF1JAwtBaof9v9y4evnZ4fr7Gp96r",
  "key26": "3djLfUZerorzyDq1c8GP6HCzcQxGuEPQEh1aMuJpJnMUEWaJ1h3L8sqYZVv18AQbv1pTNegYps66VJTjWQnPvLKa",
  "key27": "3vZ4FVtQSsiFQdJCckEsf8AbnoNp2xYb97VSAkcfWWXrXYq3GQcT53RH3Aw98GAwvx8gosNSZCx7Y6u7fkUo8Wuu",
  "key28": "3upvWnpbKL7EAg5uu5kd6NjDM355pGz9mFUAaRrRVHKS4pP7Jf7q9q1mvb4sxsVRDeH2fpMZTG2NLNyg5sTTz7VR",
  "key29": "21bLPLWWm24dK5G2RGgaRW19ExRxfGuwFeiDpiHZXj3QzKewvPt66raaUxpN9q84WvEe4vrDsmsM7Njc3NLM6fUW",
  "key30": "5Rshz1S9TL1YByy3qrg4qWsS77QWoipWvuTmD9SyKGhFJBi5QN7SevPDsLHF8BxZvdfkAjgAaEcyia4mFCwSrFrk"
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
