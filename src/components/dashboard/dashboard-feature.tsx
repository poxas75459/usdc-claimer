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
    "5wGRgcm67GctqLwmjivM9dwWgfggFXiE7x7xN1JGfMgbWUpVgrNoJ64AobjH4RjTzFBGaHQTDTe4SCJCYcz2zJW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C7eXrUQJZ4Cw3PxeG2bE9j7sW32HZYHZCrQAV6Tm7ZKvvbSDTxYFffrTNDEkZFXGTiRWr7u4VNT6U2n4gzjuC6V",
  "key1": "4BjQMTLuEhJNzzDwXwo6eLSNShhum3kLNdyuu4FgPRkFQnesvmhCynFSuDgyQLsKQ88KvK6w3LJWGXo9EGjxRqJf",
  "key2": "64xsst9uHcaCHdgmePzsnnEfej7LZoGF5UM6wQDgRW6AHMB46Lbd9BZCQNDYB61rCzLUQB6CT3LcS6Z2XRemyE7H",
  "key3": "j4fPHZzUJ8ZBWtsVcysJYAQVbax4sV6rsoGqiDQMTkFUF4yYJvmxyQ7JVp7VMcnagk787WRySurTe9uMAgqseYa",
  "key4": "579Tf4Ao8SndKYdh6dak3PWNhr3inxZVCmbKeQ4nHsHapVdg78tkxV4X6X5vnGqjEZxXsNKCVmVdVRKipwmpc6Qs",
  "key5": "4NCx3ppbuT5KSGvTtcGGZ8hbUJvPf9Zm7rihvuArvCPXvL6zU8Ax5SsRHgBBV4u2fy6NdQkLVeeqFvHudvty53cR",
  "key6": "FFj9PirQyq4rozhzuNtTt4cgvDzP3ERHuJnNiZJ9cRgcMTmGog6yZxme7sdvAu1FpubbNvE3xkZsdpnH1ApRhtq",
  "key7": "5WK1x9Vv5JE39q8pBiNRpSAUEiVeMZmykvuBm42J3Gu8rf67CsRLXKHQyUFCksDXgRknEH4RKb8nVsptcDBNT4AU",
  "key8": "2s4qbdXC9tDbT8Cc9k4mgd374VPm6nn5DynL6SiLoktwHZr9emMbkKuV6g66WQ7YyqxeDMGz7fspDFBgMHhB6xHv",
  "key9": "Xvz3M9iDsJ8yuGSkCpcJiEgnk43SUY5r2khQxLzr8DjEox2mvDHV9hsF7eVM1Qa5Lcr6czGsv4UtbRmu6x8nx2F",
  "key10": "2QZFhtDXHuFjNNcp8CNquMNBT8qYCoqSm8nR7zoW4qEKY3hVMaA8TWRwJMQgypsneAzR43bKkFM3aj9kNrxNutqy",
  "key11": "vXmw4RzUH7LmvVWPgGDGygJC8MHN3TjadLzxEEB8Wdm1XUftHb1BXrVuhYpP4ZLpGXAHxqXAiRM9CUa3FeAfMPE",
  "key12": "51bfxGtM57i7oT7tTupTPc8kpRUY42Da3uuSkQzFxBoT2YUdRVwzfS3h4NG6xufqmQnKjzqD7yU2J7j42ft1sNyo",
  "key13": "2XnDnKq6Mp54vd8DGc1rvBWcNe1xRrpXbQ7NVqbnhUU4bRy2BooLtcQS3gdzJoYaZcD3FuJ4suqLv3eT4rha9M7H",
  "key14": "3P6wGJchopNpaaGgrrZH3SWLw8C7fCk8hWAhUUztfpq8fnzuVTHUdaS4NbDRhdEkKyuQKwLXFRfxYYw3g1Db6hx5",
  "key15": "62YkNtomhSt9byxcy8x1o3t7qSxbFcrmu38ED8EubUe59EkvbKe8RDzPhfPx8ySrzsHBMgggFsrChxJ7m1kAhJvT",
  "key16": "4EFthAuDmzcqYTA8bxFKVXm8ekF3FqLrNfDJ4RZzsaFzuGsZtAyCtiPm6nAPy8j9Dr3wtyq6B37WRTmTi1MrbEm6",
  "key17": "5Dc7btWxZ7cWmrhMMqCfnG8W5NR1oZvwAHC76ADPDmGuY6tQaJ74Jj8UW6uRnPzxYiVdyReR8Bjcsx6vs6XaCSDw",
  "key18": "3u74EMX1MAVscvKos1SrNE8XDyNgdH6ZGqdpacMXL4DH3NA1zNPAWpVjywt7x91hxBfNhiY1ZCKe5yMmRoe35gMi",
  "key19": "2N2G7pL9ReaoKEhfhbepULyerEjeuju3PQhcsE2fj4H72D1HRqpQ4ubZG7d9EGMgD2ycjCsshXdeueKvYNKAvUpd",
  "key20": "4UzM4nz2d9PbJjSar3RUYJBmYrZqVowYJ7F5PskjTNSh25vvS1nDzDqKVPW2oQyiqsVFbsPVDsLDQLEuVBu8cgbm",
  "key21": "38dJnVALAqe7T7JkZwYxd8K5dp5rD72RgDCh1kNyZnUVyXu4P5CHbW5CgitXckhjWT4AXqty3LyPrGty6spyx9Lg",
  "key22": "UyX6bjmKLm2skax1sCDwTwXViwAsmoruvhfzY4zyb28krZVZbEEmjdQ5uPMintSiQj9iPnjpUXRqqWfouQozB6E",
  "key23": "2GhUc44CEXe1CjEJ6ZZfVLx2zwMtJsGR6dTbyba5QM2SRRm4AfUVmDtw5DRdQVcpKLQYNmX4QSHWGLrGwtK2qH5G",
  "key24": "4F9wFK3c8EwCKvacXm6ANWjzLLjG27FqHFAe2bbJHwNyy95ZdH8rEnnnaJwVm85DY2xf98C2DCGpVV3CsTFu2Xx7"
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
