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
    "4ftHektH3pZqJk59MGvhcMGEfcwTbzGf7R1iX2uRNHhFgUkY4LA5Ex4Hgd3X8AkJns6kgYEaz49XHcM2AipBRGHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CRgdQSAm1wx1TyMBN8juzkiKv627CYnG2XTfdRne8GAsFjuoTDFiPSiryWH9krAZuNe5Na6hzfchsi2QJngpUJW",
  "key1": "KDwmJeFMuPfNKwneG5517ThwqAmoiEaFcjL59T3uSUKfrLeW6YjhM3fRdKut6B383PzUe4Q8qBtY9Dw4vm9iNHn",
  "key2": "2dXaUwHwsTh4LMPhzvLeJ9nq1GBMZYYSQhR6KQXyDczWfcrDP5VhcKuhHBzJWGChkb5eNbm8WwJXn28dB9SuMvGq",
  "key3": "ZjrnJyxv878Jv3Hh5M53sYptYSthZ7EbFjMS1b6nLGZBdRwM3ZbYdBVcfPPGrL3NsQYixx5tU1AUYfo7wEFQVsH",
  "key4": "5Xyp8fEc5bVDQ8j7uyFvGtTugRM5jcKAxdY9UGW5ezMiqm6sPykYFe1cHfzNFpJ7dCpFyFN8ae28W4oNMAvMeqkh",
  "key5": "JpKdPA2yBVSfuY8bvXsJ87U1Wqk29TabyrNJeFz1QBHXWEFU73d25gqc9GfAd3RhihWqfJBS6cwWdJFrY8g8tNH",
  "key6": "6BJpQuhaejiMEFbrc45qX5359wuQxisRe2UtYV2ECP2W9TeKp2Hr8yK6WMiBriyfMqvkm3WfPpaAkL3zrnot4Rb",
  "key7": "3VHCGZNEFjCnqPzdQQAChkqUfoLWHjzCiycYNEc82jr1PvK9czVNvSyfzq56o9GZqeMR4hisUCuvdeAetrk7XTFA",
  "key8": "3W3t1sQ4LkYrUDEZdZeZFzkzPFX541Pfhwz1vzxTwcre2YwKwU62TLChzewkMBETXSqr4BPBnqMftFe63VSorR6r",
  "key9": "5yEerce9oy7X2KugfQfeL3ahePHLqxCD4AMe1aGzt1thed1YwmwrnDhbkuXG2wuHWXYmfMY53ka47wpCR1zJPMHD",
  "key10": "4uomCh16JYqjmiKRAj2VrA1ZMnKa82a2yqZRnufLaoAJ1ErdZa21zyEEiGnzJUqyd17STVufVVnxxWba6W9sDdQk",
  "key11": "63PcsBAEH5UqtMuCqLstXTJfzSYB2nakxLqRSbBZW8UqHNNsT5uMYorWqCBmvSLHvmN63sfLEkf7XmkNKYyckAom",
  "key12": "5SQbtWqe45QNQAss5FHxHwALWdt62ShFnJ5mPYusfWraT8AcVGtrVcBpk9tUhXappBH9goWCczg2LboUrh8CAuL5",
  "key13": "24xbGb55uJw5CV78fojT2NVNM2a1h5giMKjkaaZQiBYXH7uFE87LMG5s5CAs62yTFuC8Va351ketcW8tVtdkPj8x",
  "key14": "44GNitGxA6V3E96Mnz4VMLsv3oxPfZmRpmeLwcGrD9PfcKFiKMnCyDfXnpPuq5fo9kiPJz6Mq4Jkcm167FNFeEm1",
  "key15": "3z9wRkRJXRP2q3d45XfUU9adKK7M5r9aKdJbukEkKU6xezrbsgRpcza2MfJw4d9QeVpm3wRv6SJFL6dMkNFn7xwP",
  "key16": "2vXzKTmnME85t2drf7NEMFbHGELP6VWUhUvsPBfXUFEAnTYKcgCrJTd82XroFkrGXeob4E5RRQ4w6BXv9axfrKfK",
  "key17": "2A5Km467CLFEVQCRvxbeu6xsvGDgouLCcrYR2AeqfxTCZkVLoz4aJAyjkdSYRdrcwSgStWRkYQZNfoCozTZoVmwn",
  "key18": "KStmW1atuM9XNNvhCGgVvKjCzqNXJkiBrsiiQtJKbL8DuAMqyVWnWr9r4z1rmiKkVYxyEd92qTjkRaWevh7BKvQ",
  "key19": "4cVVwLzfeZiD4aLLwFwzhkvXyzoWauAfZHkDjXTrGc9DxXafAgYSEUYCRMvd2xXZGurix7AcqRaEvSGZ7mXWHb1v",
  "key20": "5RxkvcwDSM8xZsCxqDXgpWmEDdvpMxQWgHDzA5V8NqD57hib1AjrxJudcJ4cWSHrfZYvSphCe5C2Kp5osWouV3K5",
  "key21": "3jpNVQcbWZvVfmH1RMEhC7nnd2zqyQE4H1bCXhrmGB6HEwg4wmFZYEC4SZKKpax7BBzi15aGUosKqutqAgEhLUnf",
  "key22": "3V3yEKYpyKQ14txiY4ph7d6G2Lmx3BgmRVpQQyMHkXfJHpBbJLDQUGbQAghJFGZDde5tgRRNaYkZt5z3ULGecc6b",
  "key23": "MxKY4wBQUXTT1zvo1EMnLEzoqrmerFqwieeuodAAs4CH9yP4cnhEnNMQ9TVuh3kJYZv1Ff3MJunhewLVaQupu3Z",
  "key24": "2yYJxQUdMPBiCMNL44gR24Ny5LeJVaurFrrxvbKFgy4m4YGunfo7x2FFNyQNDmBzutR6ds41zEQhLjYejoS3QEb7"
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
