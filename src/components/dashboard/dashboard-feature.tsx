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
    "5wc6vCmvaqQYBoTB9jyNESHdRxgvnp12qWsr6mgLTJNYcTR6HYQjP9N4J7dfY73GRMLLNnDJUgnp9yc4keEoCvpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29rL9MR2xtmwtgwXBapKDyAwHt3J6yi7qEkwX9GPf4Y8U5kttcJGSiNvgQw2bhhdgwirw5RdSxE2X2W4U3bqFCuS",
  "key1": "2AQywBoUSM1PXQjWhNdoEN5LNrX7ivL6Xpp4HzzTB1Ph9CQhpGUFodyRJZTU3XMpuD3X1TMwtQGDKhHiCRk9MnR2",
  "key2": "5zsfo8xKQu2xzyDvJnEUW3Rkug71MBoajc8TKuy1HWZQz6pn5py2XaFfmFPripY6hnB73BLmhEp6K6JdDhpNq3Jo",
  "key3": "4amzM7BPyN39oGTVUVoYr5x9s3jcGzuPcJQKkDQBL8DK6JGNN83Y3mqsszWriAkh9KbStN2Pn9bgzDy6tnyJmAGv",
  "key4": "5dzMiUQDWY4nVprCUrS2EMak7cb9ocpvt6Z8tTZR4u1454ksSPW6tyWgwCzq2UPLsCXzye68wujTtQHmzHndDALN",
  "key5": "AzaB4xAG7A91BkxqATggCHP1vixcPNkX7UBJpU2NeX5YqBYB8pxukZgX3qxx4cBzBYefF69cV8nERcZ1jSFQ7gC",
  "key6": "5TDvyZCzDNSwJPubSi1f5zwiqjLiS4Dm3xKriyQRovkUEDVZ3efxwXZgAtQBBf69AYbHdL59neLQv8yZF2Ny7QJP",
  "key7": "3cEkV1Bddd4VWbe9hoXxNuFeakuDHyWeyDza43MyJJrmZwJE2cuh6EDBTjrwPxNBX7amTty8eacUrLfLX3YNNEN9",
  "key8": "3gnaVeMtpdLepWnQoYCKwEk6cdFdpMPn2MeKEVdHmj2ga7b8fc1d5vQ67ZLamXY9Lth2a4AzCjRKnygNEbsZsoqR",
  "key9": "YEdEUUScmrXc2KpHmdWgcTWyaRJVNSw8ZrXa6jt22L3Rsya1Mqt2SUCnKhj6QfSx37JCAoYWBAdM4vNJGdYEBw7",
  "key10": "5f16DT5tLMmCePE8PVrvBa4R1ZCZ1gQpVqj9gHrqYcNz6vg2ySj2c45mVeZ54MnmCi9pNLLRoyBXNo18t9hPgjnp",
  "key11": "3nhfzB46tfM6mMdb9K86bEfLG9pG31NveovJFfcxMm3zmMCYenRF2TXC2ndqa9JpCJ4v1Qta4HvT1D5hFrCWcGF2",
  "key12": "3w2FCd8i1wHkT79XL3Uy6yThLsWNhyMTfGhyGVNtcApVWGHQqhfF9qMjEzQQpNZApYUX5fgwUUCaY3jGZGXWxc3A",
  "key13": "2swTHT7m6TKufLV7Uo28DcSWzL9QSWKnjkeXQ5WZyARCxm1zV5zNVD12WRyWjZtHxPQuizT6hH2ovz6W1gd62trB",
  "key14": "26Acfodv4TSUtAL8L1Uk4MxgoHg6UYJxG3NvEZ59Gpk4LKZBRGj43nARooAJ2J2CThWyEd82pqvPKf8BEUBiXCNk",
  "key15": "4bXiERZ5J6JhBSY5rFKUuM1FcyNrg4gd8z8Hz8u5YPeP9RTaVSKqf6wnb8NToLMPaDU9CRnSq8a4X7KYjvtY5JCJ",
  "key16": "3S33TAN1KZ2PaoGLLedy6JUoE7ZwvivcWJtEJCAAuLYisrbcqn2yaVZu5uEkhrXVEK2W1pnccz8Mb8889NT6PHKZ",
  "key17": "3EoEVYrVsg8SLMbtsNVnC4RUWgUx8PDfAQi17jVb9hLHoLAq5hGxJvbrRKN8MQRVZG7DR6Ek28Tuk5Egqypgisdm",
  "key18": "4wUFuWjfCZ7ZhUWRHgReWLmx7ikGBtxKctCkW2wMT6QNMnVPFHQKotbyPcnmqfvogGiRAWJ6QJBv1UpLmwf5dahn",
  "key19": "4rJJ8krdexe21n5G87Z4rvJmLAaB1tHuAfSmrvnqPuGxz34LcKMNBJ7o8SMZYkVxjtPYUXKPLVbUrieuNJcP4xYa",
  "key20": "2Fgrrkq45hWAGbeULYZcZ3CzctnQZ5oddge7MqzNTooxfvxuEB9ifBVT8VdujkmJktUeeo7xP5987HiXo4FJKsiH",
  "key21": "4MteRR1J7vUXfPayALkN3f9jgthKASbMsZGBri7po7GujZjUAQVgTW1tV6o335BjX7RLkVUstMpr9NguqbFraPk8",
  "key22": "4HLGmidvqVx1uK59nekgg6Ka2CzdxPPVYby3GcPnMViseLgKbYwa1kd8wqnsqjfqiCPQBJiHxC5bFDvYMojhE5rj",
  "key23": "4dGbGcRen3p4x7vauuCyFET35BagxAWvUieNyTZF61jjnyfGTWPzdYtCr9cFT7UyHmc8CTJq3xNj4giRJsdceNJK",
  "key24": "fjiv4AuZUtC49PnJe8gE2nYcXD371cLmoFqkL73hA8jatM2JqARFqzVHiDQjQFS1xvCXfDcfhzfVXi87tkpKQp4"
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
