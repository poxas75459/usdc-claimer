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
    "3hqB7SnEbzsdPpne3TeQbQxMHfERwGxm5X5mcp5uXFadCX9VGPafvi4ne79xwL97smKtbdfUS2twrD3p28xQBCkC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xp22umfMDcJyCAJbrsrKdN4bn7xGhrx6NTaSDQ29rRNEYKLtCqdzcqvS5GuVebg9E8uoTvgUUBf1xah8aBRL9DJ",
  "key1": "53BHCDKVJQVu7ZoxdgNn2Po1pesKAzphStaqrBfVYJasKBoRw69w9zoPuZksopHfiYrrNu4L679LY98U7wkJejXE",
  "key2": "523yhAeyDpynoG9Yx1dunyYk39SPKHdvdrxvLf1XWA2PmeS9TETnfyR5MMpnoj8g1aVaz9htv76YvkVYMm3Tw3uh",
  "key3": "3RzgKjeiXk5HGc6b8qxxHC4idwWenACaimDCLFyFGjQFBuoLZkXHnRipehEn1nUuHeRHr9bZRgrKoqo5X5fhFTyY",
  "key4": "63WgA6bGpZjtWsJrAemarHYFu3g35wHi9YnLd8xNTNSGMAVC1eRxVyPvmFBPkyn3kNi6HoiH7mr3wFbszSjhmKWd",
  "key5": "k2pCfvCBamDBR4Uet3Seu78Fd8Q5gDa9m8AmphJJbByzi9CTT3cMzRGcD7CJAAL4i2rE9o555EVN8iPDrxavFiD",
  "key6": "594hXvqgJq8TM2KQ2UgTFEbK6gVdi7MVTdDjwwEF7cN4BYjj4DfS4DgYgCo92jbSkM7sh5Vu7sAJRyWfhMjCnq47",
  "key7": "43uu3r38tSYuYNWQPr6qNerykSJhc1BJvvnqX6QzRZ4W5iKcAxQmwsyRL9T7qWRFnDd7zrW9mv9g7sPcKXjeKAsp",
  "key8": "4V22msXi9wD7KWrC3KrEUNjxWBEacho2DMtedyo793oy5uXzgFTk1FZAtKvVSsU1qNxHwHmYN8wAEL6QaNprVnU",
  "key9": "oKxXbcarXk85Jn8Bm5akR6X8Hn2iy2LSXS7WZ2Mh7rxmYT5wLiNZJAnTyoWXwic1BcVJqD5czTyEsKjaP93dKXf",
  "key10": "5m9Eu42D8v4iXRjpyQod2Uh7PvKZ53CtDWf2bk9Nui4MvLoJwRNQLBvghVAvEZCfZsf9GHz4k7yF5iM2dELQ3PWX",
  "key11": "2FaMDwtiQGr9W5zRbNyiMpSWwYUhaLpuyQgLkba6S5W8BMhHo5ENJiFG2ZMP1TzdGWZSXvBvrKa1rm6umK9znXSX",
  "key12": "5un98sHmL9AdP4vvSjndZU49n5xVa3wrRo7HWxEqBaUUVczAWBu3xWbe5oAq3gCWMXCHqyWaaAcuN1rDmKhb7sDn",
  "key13": "Cpitkmk7LSutfMA5pGioGWXmn5kNCZpSm2HgDzweSAPAGBCm7sKZ27dgpS8tP5Z3QZQwBcqrwtH14HK8YcTWksu",
  "key14": "3KKps75GpVKZTDeyBWDbzgg5MrFBWknpwDMwmza6rnSb96MtUmKtw4eGtFNh2BBZbA5dBBF3nXvqEEiy2FB2Xaz4",
  "key15": "3USkidMmf6q6jAqrxX8ztigZLVtsRitPLahRQCiYJJtWw2WWreHxnRtghEGWr4sJgQvYKweNyvaaMBNsEUQeCvPD",
  "key16": "58mXPo8KkS1reTDgUBtA7dKJvRiWHexfwNRz7csC7qatWMXFdLzKffguBYiU29UDsvTbTArP7eJbFTw4E7RMWDfr",
  "key17": "2fGn5Ph16X9TycwLsrdmUknp58ixXiuqDkEr7ECRArojn3sUaSFNHUknSeD9JgvoX4asitVAs54DSwRPirwrwj6x",
  "key18": "66Xu9auLjY6DCRkzMNRpVUH6zdHQYQJQ2zgCteYMrBo9iQBx5pUg4r92GGw1YSS3RbJeocMovpLCZw5bGWMWXJeC",
  "key19": "56d3Sg8hTUqdEY95ZxRPjtgR8vZz1ikLD6YPiXPYhmM23jpxW8yvzs2MS5XpDu5ABQ1GbZJjnBwwuAgG5HzU2ggC",
  "key20": "r1RhRZGFYFrJZzu9UdxWzqPscuFwZXuRrAbqMSaN6RhiKgvHVkvDT3y9hwjrYGzmmC2MJv2aZMab3U2DrerbRUN",
  "key21": "2f3BnVVYQjvuxv4vzEcKGGYpJ9iwRtaYPb8uLzzmXGE7F9jmUpTftfbcZ8wbG1ybMRuh1dDi3vQV3YcTXzFRkpfi",
  "key22": "xzm49hKqmcF64TpkFKA5ti72ojWRXn2sKtKDwCXHnHoUV9iPVzDVxTPDSDvrCfMVqVGawDSzuzLDVAVTU3oWmi3",
  "key23": "5DwNcBCRjnFgfVV2snsoZYJo7Xe7SYCSissY2SjEa94RhPrf6bUmsAM3YbwaGEQgVgczSnNasxHAXJHmrFJJq1Fb",
  "key24": "4hame3hGepMm4bvzHJjMTDvUV1L8BXxLSfuKfBTUjoP2styEzejNoj4QC9QrALsrYaMfygu1iBQ2WDYhjtVX4ptW",
  "key25": "4sko9HWMiLwTCnGnuKvTmAg1z2iufHRW2TQfUTbi99N7ZxdSnccFn83BFhvs4c4nDCkRnHtmwkrVF1v96Uh1C5kF",
  "key26": "281A3sSGx4b61v3FQrNptZ27o6r97g7c9aZJZsbsdxyMCp4Xb6JrusZNwBsXT8RzaAjRsPMhH7TtLwumCcUxwFkD",
  "key27": "xqGCiKH7tjVPWSnvkhRkuq2aidVnyD2TKibkKKpW2RaNPb8MLkzfiwvarc7FihU9Hxp9YX7no1RgYFrrTRGDJmM",
  "key28": "29UaeWdf1o5MJFK5ZfSAgRvHhjM4FYCcPY18fMvvg7bsisSZhvdEbfRfcyHkBCQ8qA6nDZZ5wJ4ukMM88ybM7aDR"
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
