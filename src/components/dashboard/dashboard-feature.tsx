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
    "5yJWZBnRwVQtQ4h7P6LpX5x55SRgdao9WTAF8K3thALycBa23Hw1SZqoPLjMNXr2hFYxtGexwYoqXCjnG66bYZNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pbAjmxu2PF3pp7h2WY28raQZCC3CYHrkKyfTTfE2hdkajJvt5j4osJYbftKowyDCdLX7GHn736GbVsxf4944rfH",
  "key1": "2GguX5X9BG7AqBaCKZUkkguWJ7GitMGaFe9GxuqiWvnPYE2yyR4S5n9aQd6KqfpxCEN7YdqfqB5yiDNQQ9zeYL7e",
  "key2": "3vx6YLBwB2kKgktXohURBYhdrH97FTAHcbAKGd2qpYRgsG4UeSoBK5VVQ211VUPyiNnUAtoJHxnzZkbfiz3KSAsi",
  "key3": "673EkQJsLQPThssCYiknQtZXjuhF6KzwpxDBssBYuJoL9xJt5jvd8qxqYKFjPShtq3iyy2J2GUf21Q9ak8YYHKDo",
  "key4": "VW2uG73j18PLLrv154VmGp5X65byLqeqdD4vBTwzFSq5s8Ub7zgGxsNP1YHFkBHL3guyzeK9eKpfwCrZKbyUu7r",
  "key5": "57y8S5fHhdycHkN9CBjpX8VjSFguAQ7cDXgkNc5TWZkYRzjBbENXY4pExu9AEA3cAG5fT4gx7Wr7UsqcSrjV7Gpg",
  "key6": "2wg314gnpZjN1a1aiqX8pMvr3Jbt566ogmmPWopmTybgSafD1sAAxtdrwjb8jSoRRKPBpqVqWv468gQLRpCw2Bex",
  "key7": "33pKpZ2MnxTXwg2PSi65vFP1ewFso32XFN9UoAPfGdGdRvGD59Wz1zukYqA5mVjLmT6nCoarZDwhQLi2dQ11im8R",
  "key8": "2fkXH1VZRiJgFqBqJogikCsnFtqaLwEFUHqNTTVq4Fm9D5ZhWB8Mp3MBEn9DdUw4kYxLkqv7RsH77BLYcwuiyMhn",
  "key9": "41zY4mFZE1PF47heGWweS2nrJNDHb9SN6bj8ZCreof4n7X7XhWa8Lv13WHuqqCdXZhDBWNzDpX5k1uBYNtu45bsm",
  "key10": "4GRHFdmUiXG58o8vcbQfU3vYgX8vGKp4JE9JHFDiHw8RQQV8B6Gd4qnKKhejTuASKPV8Woi1gu4pJpWmuTPcYKsq",
  "key11": "2ZssEcRFhiELULSzauFUHybMVvsGMNZ3oLdfNxTsp63pg39H3uqabAFn3iPH9vghv5X8JWs1zR7NSb3LB2L9DFXv",
  "key12": "2MYVCAHv6w2khwRPjtgYqe2VqUv1s6ZeKkeiMFdeNiXTKBG4L23gM4hqChwQmp1chZbF4cQejAbMHx8vCUFUvXEu",
  "key13": "3iHEjuKVNvBd9C8u1ycrbo7D1g3kT3rkJ9qASpy6AtgrbZKjWFVTdUyAcSb8ajknQ4n1vmSkWuLpEba1CsvnENny",
  "key14": "2xg1AtRqVnaFPTDQybN4SBUBAqfNDvEXg1enQDS1QUAH4yxJomEZLju9t7B58C9ZDZWFwqBpJE6Xo4c6Hrgjsaq",
  "key15": "33MZRGmzRqLaFFyyouKXihSEdtXbC8FMXM9rggAUxmBHnScV6CDsAewYVF3fPNgVxDGsxogqnvoGnasT6RvWk2ch",
  "key16": "2cHqVQEZB6jR7mumayhoRhKjHFQK3C8xPiaMpvm3xTc7yLTPeqsbUgLB4nC6yvfm6JXT6SmAVkaLnJiLTpq1zuCs",
  "key17": "HDwnxdrVqsJGP1LqeTKUrWUkiGtPn8trW1RBkoaqVvgVSABUj12APjeozhpMniAwbxUhgtx6nMK3Krwvv1uGR8v",
  "key18": "wSWzP3fKSwDacZxYYzsz5sijX5m8AS9XMmEn4oX3g4xT3ppMTHkEaGiXRnYd5kNuvmwQ4UjbGbEB6TGR9Cgfgst",
  "key19": "4KDhvNaLxjycZ9TYDSaYw7Uuih5JF43hj2RnPgn96M4HbWBkMbCJXUVEWhPJYg7uE94mAUpMFvWTDkRdTRgxs6S1",
  "key20": "2UTV7rQD97tgW2v91ByVoUDmqucsPNuGjfpXu97eHK5FnWwEqMn8bhyUxifEu9tcogL542P6ZtPnytJuBqAGffar",
  "key21": "5a6UEftKCVX9wPcxesv5qHEkVB83xLWdZcGSEyHLsGQWttYcYyE2KDPSijy52A4nMn79oYNmz4LHBJnNiMjbsnMr",
  "key22": "2iu6G5pGHMmR6cQT1GU8nY6xSfiBGd6pimxqDJRCBjTvF1wXiSmGS1SM4fcc313E5Z42F635FDH95Qou3AMW5pAx",
  "key23": "22rWQqMoSmpoF1vA4S5fYtpxtoqe4dfNN2cand6UoV2HoQijqL7UrG3WJMkXEzGD2ScAYgtLqKYQxotgxrjyzGJS",
  "key24": "5a6xZzNTYT3B3mokKBS61VGf18bNDEycanvXriK1WEGPHeb1ZaPcFBZPVhzZtu4cYPkaB89r6cMRYw3GvYNrXRL7",
  "key25": "3EvAJ4C97hHouikuAXQnK5Qvdw5RpZtT9KQ5BsiamxiSLgoWkmLWngDrm2obMMqP8QicHRdMsqwpfj369cLrQiYt",
  "key26": "2akCcWt8ZU9XQb9cJVs8snAzmiHor8veiUYbaXbGx3gGAiTpFptbJThTceYW8DkjLhgTUruKyBdcH9ma9K3dvW13",
  "key27": "553DvRSFGifQsBetxUFisRCR1ZRfRGFhSwH9Gm5HjXKyQtcDMHChqiZGpD3mfdG3TNFkkYrcZCXpt1Tdhus9hbwp",
  "key28": "3f4Sb9AV5TrEhwBUW1y1kGQADyo4QRXZ2QWKQZrMq4NWmLE5h4SRFw6DSFbok43hkWxksEjiLfD4jsPsGNxWKadt"
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
