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
    "5qiXDVvQ372fSDschwikUezBFzRK9CQzP9ZkEJk9kkeTgj5bjDvq3eKt8aQPGmqq2HpaRU3JvRTXJvRB9hnCSiNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tPc8fLxHej1wotHQyUMs4iys3and6jYiBpdjXfrUhxjUFvTTqsjYMrg77uEKKPWU3ydvusCnqxJYFgyvWseb1ZM",
  "key1": "4XoU1ow1YGde7VEKy2oJkggEWDDFpests9inVPKUZbpFAJUU4jTixBQRqBjn7yzXEZEkk2WkWojdMWA4F83j5TdC",
  "key2": "3mBgPAR2AdyW6UqsPxEbjPB2TWHiNhZFSmUQwBeLyoGYYN7aMYXfsdUYvaFz2tu8uH4mshFFtTn7MZBga24mcdk5",
  "key3": "4GkkoSv5cxjZ2aMWpikMkwWBouta8Hqu5i1FqgxJGS4a5QPySX2bZXAjXq8EFqh24HFPh4QaNRaAJF27tQLcwGUo",
  "key4": "3viAE9d23WeTaHoGQhGVdQj1osFy8CnRpbTgPvmLeC4dmsQ6ZZCtjsMh1JaE4TmG8MHvx4YtmfEdnWRqBaAg9HYK",
  "key5": "4HF1SwJkXwg3Ai5MaVABPRxWFpb6bU1pUinz1sNj4eQJ4rG2tLTRXacur7E8LH8dLUQVfhartUWQBp7P9RMh7Rq3",
  "key6": "4mjiZfAoFLRwvQMjf6qjftTsNra5W6VEWEWE6rfhyJgJVXVfDjKAXYHDQ9rK6U195LLyTjKUNGxTvfs5b45bzW5p",
  "key7": "33iifpcDKZykCJDHsW65iuWciPK4zcyRqU8SiXdPdwMEg6humDHZb2zvCJmxkbcBbaUApyX4qh5PWUBYoeKWJo9p",
  "key8": "XgyECDSXiVUuXsWF8rWELSYwbhEMDE3MegrfLTPbCfoZh6YoEzquLwq6Wo6Du5An4scds3DpvBZsFXfm1RJfde5",
  "key9": "2n6w1miJUkA4D8V1r4Wh5HAFpH9D5BbRpwi3C26L3bNBSSqzZYccUzEhxRueA37zGFocFK4MuQHxSBm4k5MSTMJ3",
  "key10": "3vEHMYkp7nJvT696hFM6DEvdTpPDMLzrGJgAqiEeTJ7RgHsqRaVzw9aNajoHnQEbFHx7VkbX3BmBzD9sixZJ8R8J",
  "key11": "2YupSejRBYSiCLxkdpXDSxgH5qMGskAoSrq825Gsf2TMXXXhJiMRbPvXx62buxfqZtMgWybbBHJHy18v1JT36Gmq",
  "key12": "4nPYgPEygecbRPe7JHDpTLsMJoESkusb4FVF1uxq4giCL5UmiQdoDYYmpeFHZPfJqHu3qL2YzTjtVCtkEzwvnNBi",
  "key13": "3tX6dnzFAK4ExQFHgXJuB49KYRBaUCfPKfUoYtbnTAoarSkMpgTSKen7gS1yaWaMu42LdMbKyxWNPeTCQExpvG4B",
  "key14": "4WWCptx8zLfNDFMWEDDdsCisajxzc5ahg6mN8AxvuAkham1uDpiSiQqzPGc5Dps68xZ7roJkPcPbg31byLrYahPo",
  "key15": "5x1ksYDyfprL5xSLvgxJtnEWwhd8ngyNCQyitswWfFphXepQ61puCTe7zS3MFK5igmMQQFBuDiJ4k72f6ebhD4HE",
  "key16": "5GjVCex3npLzZ1vtc5AuC2DFKX1Jhovzd1ozyo8SZjoR89Re8kYfPLKze9HBd9eAud2FAhgX48baS8FcLvTM1ZGK",
  "key17": "31Mt5a8dL1ibfmUNUjPbmXurJqtFoZg326Zr7VFcAE95dsQJ5vXimF3qmY5Y9YJhmrCDN7CvrqRBTev27QNzwDJ4",
  "key18": "4shtEHC1hCLoth399G272L1EwFegppsGAwPkPgx2J4c1eRXpJz5s8P1PJy4jFBgMdoMtAS7xEk247XBqWcdNhrP7",
  "key19": "3XU4aF2MzmSVvySHVZaHthB89CBvTN7eSVjFzLBcmy6qr7vBfnTAHXuSGVMLtrQpwGWAgpSmPNb5D3tbgANGVN44",
  "key20": "3JsbLVW9fhgtDRJysmFvqae8Ud3oJ9gmu8GvHhuzVxwwf3NfTBAHxSRp9MnNqDxZt8t1J4P3R6HWkzV9EGdo6mub",
  "key21": "3gba9hPA3rVvTsJ4hFaSbQ3oCtfFgjBUwcB7ypHwZXUj5fNVWDWGz9W4Z7oLQCWnBgwZ5Snc5yxWBBwq3qXhTajF",
  "key22": "FnKLvzKW9YsZL7JrphdDUShPSLc8ao5WUiCR7tamyQaEhr5JcWi5notATpXJEMcgS5SnpaiQzLZLzNaJMGL9W5J",
  "key23": "4SZmncDASb1xAcZEoijUgSS4q33AaM3VbNucNS2tHwc4gD9YL1o2gAkVLzKX4RUHAMY7KqR4gZbramCBoRMyFPYB",
  "key24": "2K2DxWBChQNCvxgJJQUZoBLQdte6FG4vg3jUN9oxDQ7vdkLbDEpubbKn7WwfwtM9E4AQzEj7cLaVsXRwRX13MzkD",
  "key25": "2izL6BKhZ3ByT7L5oTVwHPddHAF4hZDdobwtVj9XWpGpt6PYip2sHk2vALSc9vEucmic1uAU84UPgaNcppsRybCy"
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
