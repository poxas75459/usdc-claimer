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
    "3A9oawBCHweXe4YDpgQzqxDSrkxzHg35vPAeRsKue3ztA3pQ2AvRhzor4qw4zjxRPv3tVMJekz3WSruyiiZvDz97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oVye6eNV3YtWwtfv3Co62pUPJVsM2LjgG19fPZQstzea3BrRWoKModQZ5dktiD8r2kqEJiL7JFPzSvAaZ2NrKXV",
  "key1": "6onZiPCZzqUtArsKkGVwcw2vUBEDgLFEmEPYRsjzTyGQQpQL5LksBmobhDxCKsg79nHYX5WR7YfvGCDPEj9axnb",
  "key2": "SpwW9o8GeG7D6quXFcLCWvxw8rYFAm388gtFgBidooB1GxLcPEMLLz6PzwRhMbF5oFiejsAYcrUwBzwgV6uBv59",
  "key3": "BsJWGbZ1E7WBZk4ysTELi2njSnLxf38sNajQYNkFEdSpWjCaZ6yPrj5hvZJfNufQm7Wk65pX749acV7gsVDDM94",
  "key4": "2V6A3qR98x9z2K18VLW4giWE7rqA9MvetxQ5T6DeZH3qNKfkL7s9S6o8RVt9faGNGbTy66S8v5TiE51zU8uY5kHv",
  "key5": "3WBSNbs42cc8piA17JhnX95YhkAKQSXWFpUJ2NCTknu2VrrPfWE17eFfTekaQ3gLBB2CRc2bzMi6guPQMTVqThpT",
  "key6": "5PU4zhR3iUpgEgbou8SXdLG5eX1JUk3M21K3nC8QU2FN1FfPaWigLL9XFMv3hrcntkzB9f3pXgE5FunUfydqk1vg",
  "key7": "4xgfrAeVs863ATdnESRAYqmusHdyo1ED2WWDXgsz8TUEV3amzBwuCjzn6UCPBPth2e1B3qZHrytsnzh9Pj6CXHrg",
  "key8": "4ZG6wn6z8suja8qvLX32bxVeYWJCShEvyf8JdUgrB7qvkrB3U2FFiDM4cAYxWtSjTcPbNGUaCzXtewMyAbtdg8fZ",
  "key9": "5e4tntktF9sy8h2qQfSirK7jnURuLkswtnLqFbu7KLjzUJK8KibuSB3pccHtTKqyUtWc7PQHrU2PnBNro45RPK4S",
  "key10": "5bCxHkJiNzQyNbJ9caKAvkCqEfMJS3U9ZMw5Ewvvu2sbzbLhTMhu1iskHTkunYuVMuCzpG3TZp4xr91cq8tADZsN",
  "key11": "2KZrv1nHwkpuswB2q8YZotyukPacf14YrNs4HUWvtf7nmLWKvBQGfvYkZdQZJNtSzA3vTKF9eHu91uo5mciKiU4p",
  "key12": "5hPzeWFy6aDZhXnxAUgdGep8vX5MyNUzRRGS2po6xkWGofFgPtTNEBk9uzW2fme1dJwJTDD1yRtU2ZTRkHUPWKhX",
  "key13": "3xQiiA5HhsaPtY526KnrpWivMaa71Hc2r9dv9sNsKeyo37aNo5KpJD6K8SbsA9gDQhxV73BVXvyNu7Cdb3pT3oEy",
  "key14": "3wZ92Zmakfsso8MbNbNLidKUybq2DBKzrYciL8vTdMs63M7wQ3detw4DeKxrkHmXeZC89cjGD1g1j7q72kCUHxo8",
  "key15": "QgiLJrP7nQZhXgpNhNvBBwaimuqb2J7xC9ZpmKGxV4aFKfgMoDY6wjF8US3Dgy11zMfqSxHHVmkK6MbaeWrfv8C",
  "key16": "4bXQRkBuJQiTdHwN3YfsW2Q2YxE6qeR6yFLyEYebqiXLkE2PjFg7EshhrcadYpMUVjRtCfsVMb4CckWa9bZSmwoA",
  "key17": "5HafBaPmXsBi8g1QhVQyBHARrD4L3AiBrmNEvj6KVNwMALB4kaAVPJD2dLVk5K2spKjcoLu4eqGTE8GnPWgvJAY3",
  "key18": "sjbAJshsDEvatjaKMk53YajkXd9Q5zVAPKj3br9WdGDPkGxUR3EUrtapLYVeq7Yd8rXKr5pE4TGcbRLEFP2sZdt",
  "key19": "54oVztBJHt8TWTRuYhNpXD1q1tGPfkWqbFddhiE1xVMCuKSwDGhx11NvxmUQzveH6QC19ucaDXbrhj3mEyYcYYcN",
  "key20": "37UwQAsKxa7DMPfGPm8DEodAJVQ9fqRV9hmFaefJWZ361YQgmjdUegXUHcm2ZMeACPTMJpkwEw5hjuW3ervKngCB",
  "key21": "NVQvrmPhoo9XTKX7uKiBJZNfg55jGvUWrCpsBmrP15aWJUM7whcw6ZfPAWapgwSssHb8zNVQSHhzdoRSNsp6SZf",
  "key22": "gxFr8dfHUhSaSSaru5xGURFrSX2jCPoxp4ec7Fb8pCk3S1TR1nWyaJa3ZLDaqy2b1zCrYWQ3FapmWuox5Z6Dq1Q",
  "key23": "2gwUHS9uZetcAQTHTzLPKSq2pgNzpiJTetbqyKmzqeUqjXQnZFrXtdKt7Ar237ajFiAvvF2dpNrv2BNJvFqLu335",
  "key24": "5Dgdkbumh1aWeSZrG2Ay2is2cAsmajL2geuZvmG2MT9sQMmpmThA4BXXttkhE4N9JCKpwvYTCKPwX26XzVcW7xWZ",
  "key25": "4kCRSnHmjTdoVxgUsGRU88HiCBJZDey4mfRiCP6A3Q2ChFJ6sQyY7RZUNScQt2ENjVqjRTBYKaT6kodCBLaFG5QG",
  "key26": "4hBQ9v3TqzYYE5bMNa1aJmtQMuM7RBcNMFkDptJ4PbzhMKRdQZ3rQkZicg6kesvD7heyEuwCN5app9AR8Yhq5kzA",
  "key27": "3ef1jBKid9DSFkC5n5Pwk12FwTqenTFNCGPmQYX7HtDTB8Vg6K3jHGNaFNwSWvFd7YF4oRovLgywXRyigSZn5zgT",
  "key28": "DV4Z1jk3PgDiN6hMobfy5Mzb3TWWmpAzxw7xm37zX1PbBsQof9Bgy6xRiZEn1ZDU5jaRWkijxn2VJyvUKFeXvvt",
  "key29": "4HvMSDacKe3f1TZwqqqKkih9XgrSMz7Um7cQ5WrFYtG1rhEsFSq5Y1BGx2W2v7B2DHYYrr6smVrJcjop61peaq6f",
  "key30": "2YoULSW4PKvkAxzjdvNdMqxuzYhngQJqxRxXrSL9964XYP7GyEfMBGJ8RoBDwxTg9fLwvMQmqx5SHzDTi5GFAVtW",
  "key31": "2Ha5iC216AspTJp7sqy1JEMJyySkUMK59tLaPW2NjjbtBkeLFTqsSiqi6f79KwfuDFgo6mjbLEyHGp4kK99ZDjBr",
  "key32": "4QsP2TRPumpfNXWcVTkGkFvjn1BSqcPiGDRveeSSmwr5mHMucUNnk9R6arfQqRVPbjA3vN8cqe9X4PcnNDersRb9",
  "key33": "41q2JE8N4obnpndy87ceyAdiutwpKsMFJu3VHgNRHnd3b5QBEjv2duegHxDSKonNJJTz6k9qtEdn4YHAMVsuszuF",
  "key34": "3aBT9bDwZNY8TpHd9ZttZZRkFgXaMtyGbVaaGAD7XnRByd98ijSG6pEmsQDyySnb5YFqSezmvC4VVjWvDtnJ35Aq",
  "key35": "M8jUhATaBhMsSmnHxenxrAV8odqsTuCpx2LDJ4AMKyYtS9wdkGgC26j2UXrfapyGSJXkLLZQFgLLCGhtSz8riXd",
  "key36": "hJy5Zh2m7MCPQdHhH7m5cySsLvRWkFXCgqfoH2GPABunMKNB8WZcdEVGF9f1wk1r1XZeeXJ1SEX176rSmQNnKCb",
  "key37": "4EbKffLCR7rmA5SnXMaMgaiN8ZvpuwswCrzDsakf4oHoBWHyX73Q6n5F9atagnMXwzX2rPLmwRhWKXsJBU864xUC",
  "key38": "4BDsbRnK9nbnVuz61KSd9itdqHCohP6TyzhnfqmTdCAuT3ybaL3ekNHvRRmJRkAGG7Uxe6bH9w5jKhDV3WZdYksh",
  "key39": "3RjhzriGgHgUpCfyJUTRoJa7ogAmWckipbt8BdCFD4nxfFeqUyQEDaTw31FDh1dHB3uTofcTeBE4vYAcQz3SRC4D",
  "key40": "4waZ4nobBNbv1RRT8YQWuMxhhTJLudKn2nM11gi6DesHbRqjUcTNmC6j497yxxVPuuqW2PPUd7Si1ZMqHcfSsRKG"
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
