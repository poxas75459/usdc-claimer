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
    "2QmpaMEmCsJBqDwg8omjFm2ZK6piRMtQvd996dSAnsDGeosXvhH59TANWKbQJVyPrTQMQkcgXzH2ywyAT6XX7sHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tuLj8meZffVKYbRwEzwqbCUQLLHPaT5f6tS7zhiE4hw3sxxWr2esCs7QMhLVqHoiwr3wVK7dTx8CSK5muQ5GMWx",
  "key1": "5STXz2KACFhKhsP6Ybh3ctD8wa2dA1vk2ZqcaM6BSbsoRyFwcvVKBQCscJtaUPe1QKDfQHzg1CexyLbkJWegp3s",
  "key2": "3iccsVwxLX7nNaT5LfnUGrJsC7DVQrp8zu87VRBgmKZdd6xt1cwRAMJuW2gAcKcV19QyBuNeLnBZvvegWevmdxLa",
  "key3": "5cZ69aKuPzVYR4W32UpmyshrjKkhPK9dv8MJqKCBfaqx6i1NE54gCRzu8atqZVuPriUA9ERKxMti5MFpq3WAMNVd",
  "key4": "2RyS3KYq8pHAZ1Nz1h9vFS74p8doyGJfRs67UeucQipmLCkW2wvVKQ5x9dSYafAYFJyUYmkNBpGycYUa2FfWcn31",
  "key5": "2tduedAvP2sYFtrDbMoQR6fMTuNLjkSbkNFN2LxgpihbdewDmgMikuf1VQum4pQ7GEz7yAJ5XUXq9BMNvDSaRFU",
  "key6": "383kCGJjw4D1y3bUKjCsPHntdJezJJCJuyweCsWnqbkB3HTzpbqSvYP8hGrzYZCpUGppsaxHKHzKgsK6LgCUd8Hy",
  "key7": "4oxj4dujTHuz3cisnD9pKQek5A8kzShe91ThLGtt5tXgP4jVLnECngJqF3tf86eeqVv6JRtT4pGM9yegfgrwU5Bh",
  "key8": "3yNsdqZL33JXtQNSfdAEZ1VibGv3KgHr66nTjqQiziCBiabmBnCendTtsiszF7g4VZi8CNiiuRgC2PDjy8pZs3ms",
  "key9": "owJ1pKc5n9HTdGgmMtV5GU9xCeSQAnF8QTxD53L7sjYP9nFNoAUYsiMp3LEiz9xcCU1z4FoNrdB7RbeGSjwU8Pq",
  "key10": "4TViL52gbeJwDLz7NDmtyE5Gxsk3W6GpopoX2xkNJZmkKsvvxDfmDZz3svshQ4QxSAp9JsARy1zTk2SzBn3EzhLe",
  "key11": "5P4z2cEmv1PPPbXneuZHPEjKc37CnqDZCdQSei1i3sME2kGz5jvFGGi4nHuJ9nDWYtHKXiKbWAxBZx5yYs4tYa5w",
  "key12": "4HBSegSr7JSaz7txQjxus6BMv35k5efixgye62hExTWk3ajwhdX4wfTEjc3Y9ubXy3snSiBiTczaAp3SqA6opJwu",
  "key13": "3BT5qFDCNQYda5QkeqJfnYwCmMcKDWugzcEnuf6wJtm9dy3KGGQtDY9K2A1ZCK9WRDCHEd9dZkH1F6wPKdjYUNVN",
  "key14": "3MMqAgvN6uhjsFUp5HKbjwVqrEo2vEM3EUGp6EJ1wBvjpHjkMghJ86SiSdPy1WNsgCxHpHxtNQpe7qjUuiDpFi2k",
  "key15": "NM8HNFhj9Uh645Rddi8vQpMPUmpWrxJ1NAL8qbqizd4zhf6zz8iGBJjn9hHWpzBFZDXB8Dj1V6dw4QEcN1pSG2J",
  "key16": "5KS1aoGUF2Xk985xCnfVDxgjqqPU8xnKj71ouorNRCTBMKWu9RcaMKfMb4aoGnDGiARBmFrkQAkMMtwsbNhArJFv",
  "key17": "78sqftboRbc5GXUYaV6uw5xhSA9e2UnhWcFjkrrMdsmY2ZURgg1RhsVLE2NbhFwEk5minRuf6WVLMzAUP4SPfsZ",
  "key18": "2XG1yEnkZNKuYYM4t5ou6AR5t79K4B2tiWV8UFGwVUQDWGAWrhq8bNRBx5KYFKqQkBfGmFiWENQFWwa6GccPdz4d",
  "key19": "5k13MYRwJNf5gxZUeYBHLhN68CrVWrAKhffiZsN2REP5KfksQRrm3kvhvXU7UmhsAat88gJqVMR4oPd2NHw3EfhZ",
  "key20": "d4AH34yoneW86UFzT3yxNaRpaEo1r4LsSotqjmQNxRes8R97YhhdP3tdGES51wjy5YgK2mRGA5xstbWqExwGrSA",
  "key21": "3DpQ6dy3CgFP3LvHnHTLeiBn3uFetAFvmHPQBx1yVay2mUVFG4t5tbe5pPBCHEwbZsZ8UfyhkJZU8F1Kf8UPdTn9",
  "key22": "4RRkCsyUi6EzCaGr3GngEM22GCMsayLkAswndffoXWpuS5v4vKUkVny1jDQNHRRcBo6bGQhzbc5iuEvdii7VuK7P",
  "key23": "5B4gBXf9b2iT4QN1oRniPRfoyMzs2MNwAonvTcbJiMaSd94yRuo3YUskNdambo6LaZhZ9t8gLLqwRVYffgy9pC7E",
  "key24": "2gA8toa3wTqhZh4D2Hz94rWh22TyVaPmijeJ1Gi6EHEr7uPCm2FEn194HFxBsppPHMorwLMNs8DGvJXh5nQwyydv",
  "key25": "53VzDvCTzwHhRCA48DHA7i8Kbhq1qvrxv25ZywsTr868PtrNxyXz4EP1FUMH3oeQcFn5NAA7KgwvixWwVtyaZsES",
  "key26": "4xYQPUGF2z1gcgt6bfdJaTkjAtzJyQqJ9mxeFYzrWwyqGqqdFsggGPvG3gJj7GMSRaVGuLyhCKe88MAkF6taHTim",
  "key27": "b9wQ9xzVrG5eY1vtRzaTS2BSsQzPdeBBch3usMxM1cPZMUnZPQAX5Qgkm8dAPRbWBsds6DQkPQYXAVCNsaZEHxk",
  "key28": "4ojQ39fGZzd1XDbtqZiUc16sM3niR1Lkfoq5ZeU4kSxFdUAyDqLDxHkp3V7yoK1rDGR2BsNQDrHFAWZZoLmc2dMB",
  "key29": "38XrThFoRipWzRpH1CE8ECnHYkzvapFT3zsmdEUevTE83TayrGzZ1DZ59b8gg9k6keYTuaoRiU6aom3MFsrrtazu",
  "key30": "2yRsSPW6uauw9rHtk3M4jXLHt9upZYeZdK6aEPuv79KbW3EhWZadbMMcrYVn5Y1nqxte5ikJ5T17vkCwuwyMAQ4Q",
  "key31": "2vXqdT63wrUKawW6HJxLYMhE7S59GA2Sa6uThvAcuQaKH1THqSbxpUqVxcQkj3nCva9EdAiTYvqWHxmYWBQcvw5G",
  "key32": "3HtDJ1mLCZ4qWqvXNyc93P8BVinRXHbrkuJja9H8rn2jtTnQXerR5Z31RJ3img61vyfygoEjpbk8Ye3YrbjCA63a",
  "key33": "5ihFHMcLCbLE2NGjvVsGig2XAkgFNgGhQFx7eogGmUZXTgtDe47EiwxyoZY9dHM5ZvWztcNUZMqLpMh5pm7HymDR",
  "key34": "UnqvbgSYsUhU7LAVWC7JWXV9gKeK3VdHt8UCjj1ZcRXBU5uDGXUqvmcFFmBKLrNKr4FmtbA6eBCT91zbMwqLVZu",
  "key35": "3ZoesZuziRhutZa2Dr2GBKAVcwccsZuUnVrcKTpxD1TzjDUyX9uYUJ3Z2XiMKswNCka6CYb6wfVxV5vFtXLDH482",
  "key36": "5m8u9w7agKtHup2H17TSWy1RNxxSxd8tCaimiPWvwobpJfUcemtoz2QbbL5wfcTiniStRCBFCmVWMYU7WBcrctKY",
  "key37": "Kif2cB7wn5fd3pJQnGV4NXwhkjRp9dnWdHqsSPyzRZXb9U1o7oogefzNcjp6XgMStTyc6skS7ES12TkCvE8714t",
  "key38": "U8sKsPYxrMPkoroDPbz5nMH9UEUfeb778D96DayKgCy9rcZj1tH2ggGYoTZY4zvqwCBfg8xrqhpvja5f9i8LJ9i",
  "key39": "32kS9GUwDYx4R7iysFUTMnbn6bZ8JGYjS9jNMeAmAt8QNiFLvrGWseHGboyGWNG9VVXcRXAvQ7LKkBL1oxFFeFML",
  "key40": "5EbmoZ92nr9Qosksu24EEmfQ26r71p5Mwu92NZDCBo5UkVu7t23mPppgxAuwErE54T484WWr62xSTnSUzV4ANhwN",
  "key41": "2wg8gy6TiuQ4wENAAfz9TmxAijJBsgA6yNXi5byzVVYDyvctdWB1EutHmLN99ACfptAjY6ae5FEuShdsVeBLdNEo",
  "key42": "5JobgfGb8eb8eDNRsdWmTbrWYJYv93WygrayrpivhV9RsVqqw4ksDJnioxoBGjx7hJjzHEHrjs82afhTuabL9kgx",
  "key43": "2fvmVSKcDKckSSPYRAQFzB8udQJzrirGD5CnJFfYRJErYSsA7mDAs9VWkVT7Z4vzwGSd41hiak6WcsbL1NhKDK2j",
  "key44": "5CvRWzS1815dTMJLPGT3TMnqFHVePPDAmS22up2UVx385eza9KHvtbcwbaWDsoRxFSEntSHcEd8bXZ4FAfSK18uD",
  "key45": "2CST6itJfJ9efbL3Zc8X7CEW8p1LNVQiT6ZASuZEvqcmour28ry6AGSSeWzV61NxHthradNG3aBSX3JH7BNzR5Mj"
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
