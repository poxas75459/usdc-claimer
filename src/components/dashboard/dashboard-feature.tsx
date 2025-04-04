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
    "2d8DQJpKUtb9eMpKmnVAhKmLuRYqFCbguQuYhQbsMnc2jk8LDf8DHkENP5JxBA7xcsEZMqki2roMaskJYy9pvBj4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5db78ggDKohU2fChFanqYFCntNJn5zdoKN6zVZcGTF8A1NkEikJ9TsB5tC68qRrPoM351VvbLbDdTDcSHcG8Ckdk",
  "key1": "3HwpNjYb4HQ1NfZfFHwx97MYgencDcdAhr7RV2MfkzUFav8LQCgNYTdQ5iRgGy7bLoCTKwJb7ZwgLzbvHCKyoEy8",
  "key2": "3RykQs3rxqfiCjciCiEVXwdHmm87DDojKAzpmpkoXYHqhZmdh9RvZ8EokMW3eFKqCwjtuTiNG5DBvoZJmH3sBZXy",
  "key3": "4ZVtkgWhec7fgNKa714dHVLQCc11nDExZQWY7ieDd7Bt1iWeeP9pS1SjUnt5xPP5DZbhXMEpYYTsfRJgKtqqiRLH",
  "key4": "2aXrQhXwLxM2EjnsbfdTUXdpGdUiJQ93Y7DW5sGrrUnjTQPrkewwvTQgNHVJ4U77z43HJAVWPxHuDRmHpQk4gB81",
  "key5": "53kSycJPLftBtJh8BoyHsTWVWbZtuNKgyMcfk8E2knhfvQyNFQuijHeJJk3sGzP7sKVs127gyKMLAgm9eZDZUvLv",
  "key6": "27NU2QeN6yWcTwxGQiBY9smxwqs8TBU8KhcnEMsA71Tk4ibD7RwJTzkzeYBH2nt9xF79xo1KD5W8ymyBh14AgNeH",
  "key7": "QhVdmBCUXQngGUWdQPrD4GZfSTh6yufQ4epoAHdfn61TwpkFbCfkj2mVBmfatfwLzUmDEddc8gDUu99Cw7PAbmm",
  "key8": "67kMX9XgvgLkEDtBKR5NUzEbERFUXVicmtJgK6MB8jPEdhmPimp6xbBayt6fX4Wk4qxikgRBiF2HHHZqwCCgjkH4",
  "key9": "2wTUYzg9nDqhPUxNdKWHtMfYTAQeRoX793a4Qnsd1mPvmAxWm96cV9S8zhjDTSs3cRXTUaC9VkXRaufWHde9NZnM",
  "key10": "3SK8fa3wAPrwodxXbEjcwwJ2kc8JB464WthxKomvkMwUagK1nmAwgdGH4Zsoo9FTQU1Qz7mSozyXMZKbbuJGYCvi",
  "key11": "P6i3589JfdsjFM29KoyQXinmJgcTUZcMYyx9daJ9QXcTK62Q8hKCdbc2248Da5KpLZbSkauc5Eq97FJAW5ugiUE",
  "key12": "4xnS9rCbu9y6r1v86vyozbGcNG5MErsuHFTkfAg7mSF76DQHf2HwqtF4XBnUvXLuqb8j9czZ9WCVygE6jwaPRas",
  "key13": "zDXrMgpa5ErK8JAEJkNn6Cq1jvfeWLP715EwaTteXTnuRq6s6eJr5XHxZQhQAzqzSUSKdhoKWZqLtZAuzcwjYap",
  "key14": "2uTTQhN7DDTSfrmNnohsUnza4bDPWd9dCXBd3oR6bE6jKwGrDMigZzYQpKywDbD42TkWamDpGpZjUf9zNGCPPPho",
  "key15": "3jWS1x1T3ZUVs7gMMGAxM3mVLjCuMFDGFwjuSiEYGNWUPxgyeLUGeuKDtacgTL6TcFtBf79QcNDAM9tGKFYXEey9",
  "key16": "28anvFLD4wLDG1yStWDZzhxUxSU8Y4ePssGGC3JjmmcjpHjUQ8NbicSrPHFvZU3HHJfXfLXnDLQh4u7hT7fF19di",
  "key17": "vmHU4T2d7ib3175K1BvTh2xX9nRYj9orwoaDssStkzBdwApAhwUZMQwLzERZDt5Awu85nq6UKTJGTx8U4kXf93o",
  "key18": "2p1LkuzjWs5aCfPmdbX3RsASGCA6VnvtawceEaucQ9WHLbhHaKTon4hUuzTCgrsZiy9dGqUZF7bwC8WpzN5quLvo",
  "key19": "4KN4cHLHDZzD5AngXFTRs8G51BqVbAMbymxabzGiNsxrx71DcRm3oEUwZLkWz2awbjp3e1JS4vjej8deDuhkcNud",
  "key20": "2omgb6ZdCo7L79NVLnXRaarGP3wevxhLwvJzjUWYoWEyDNwz4zF9o52pw3BnfYQmfcLTk2FMawdfhnj9kofnWo5J",
  "key21": "zH81UE6c79ka3FnXRY3jqCPAVLUcgnBsaz2Ub7h1wYTVpsuZTJ1Q6pPwVgZPpQ3z4BLwfXnESHCSPh6oRacxSFH",
  "key22": "5yHakGXzddYbdMiNM54Wz918LuTW1CCkrS8HAB4JJaqxXYVXyVgcmTMDfwtVXML1Y65RmmPMhCWn27R8W4zXtkGP",
  "key23": "ML6ZdosfqBRPK3dwXwEHnXB4D89pR8Trynuy2m6A6bDGkUYwqzuYMuc7tKPR3o2Y9MWGWbKSyUWjxoCydu7FaSD",
  "key24": "4Cna34T71yJ4xJWpze6EcxSsCQ324ifJKRgwVU48ZMr4fYVoduKKMNwsce7VRuXdSiUhqbKWtDkEpBt5DpY4A4xf",
  "key25": "3oMm3afBrBXwZph4Wmk4xcWBkBp4osyeFLfu9bjFtUvaaoJjVfdfXrNQW2DTiSYj6wutgVcYXuWGyMvxvzd3oPoj",
  "key26": "3GQG5BpCn2YZMDgHEe8yw6iARdDKquVk8dPh7gD37wqMNjHuFdWX7w44qqHdUivV6R18KqZSgqxgHgmt6f592VN",
  "key27": "MD9Ky2r2aTrWwhgJ6tEbQSqbTevbqTQhQPVSaWECjrjpwMF7hMC7GTd5uaMSXkdF7EXcaLYMN1FynAsUa1piFCm"
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
