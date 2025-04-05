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
    "4kGxGKJuYGkPGWvoBPriL2nU1WdGKabdnxN1eU9ivkDCHJoSRafyjBRvrYXJgi46KehrkFgYaRGFLdUPaqv5GAw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wfVFCkemUFULc6FwLhZJmie32TEkz7zdMB33sgvm3BjXme6GrenHWARQUG9Q6xv4uBvpVZfw6xMoM3Zffj9CDwg",
  "key1": "61gzA9srbYEzAdPLDqJS9YJGCj3pEsmUUmQ33V4yjVPaFxExbhVyV8xeRphW9dFvrQ2kmmqe9Dcz9e1BgMvi985Q",
  "key2": "2wS6k62ZyrQkwvTbAu3aL8UEb71aasbquhHpRxT5VEBhuMHJGpzsK3BCDxCVMYdnCbANNyWqsHXN2xG4YCmcRkLQ",
  "key3": "5LkvoRRfJpAemGRo81qSkqRGHfHdEAqtq6kpVMPrfNfTp2P5eur7N1pttUvvw8r4aSqLvLdRLHEhEYdoipaF4KdU",
  "key4": "5zXFh69XGgs1rD5PNSH2i6owCdA1k4fuhgP827qzUosKUUfyvvfsGPdGH7T5TytYjGn6rp5zca3vNpwFHxtuYF9R",
  "key5": "33FkSnZafa5fQBYgGW7r5wAAogJpAnvPpP9mDGetuhJRhWhfy1XxctBqxwDKfz9hTfW6njuhntALyD9G8kMRYa7n",
  "key6": "3ZDkfXsujgtiWWvVjijXF3NAz9k2PCgs13bpQ6gJAxJLXqFwsP1esE4uhzbxqsSqccZ9Sywt7nQR2kous2xSNYtU",
  "key7": "tkPBHtnSU6SiKWcJ23XpYvhuZkZYdC5utWvJpn6Qm1GkyjGqjAWUsCo2Vc2ap1zt24KXor1GQNXRMkUn856iZ4B",
  "key8": "Ua6t8BjFfYLFhKVayuthz3nunVQd44S4jKQMmRfWrM9CZxt2G33wYWxK53hMUeoCj81nhpQ7DnLWbgpdAfDwhAq",
  "key9": "3WNBUkpEEM5tbd4Fd3cXf5AFfShoSpL4oimW1smFGyxZR75HKw57c1THWiPBQET2qxFv5wLzMg3vqaYGmGEksmjB",
  "key10": "5ZoZ8LauzB5WV5xZfhWZJZkXM2U2NcNQhg62BdvhxRJV27XR3RpvjYXFNeH5VAaEkJe7iFR3tvqXRT6jS26gkaaf",
  "key11": "3Zogxm8aMjyKC4886e5v9Ug1s3kTiZdctFFsTvvW4kYRC35CCpUua6C6eSt9WXCTJTaaa2mGkCN43egtJig8ePmk",
  "key12": "WHSHGaiqcyzmxiehfBWPrc2UzauQ8C6bJtEF9YDCroS3Xdt5sWHYAvMWzCQ6WVRrhxTucEVzFa9mhVzRG4w4e7x",
  "key13": "2Lb9DpQcH6jThCcW8T6RGFWfiahdU9MSkc3D3pthruWcL6MUve8GVUDc3BUtMGs3tLyNMcxdX3PLDcJU4Qzy7CLP",
  "key14": "bFX9YX2UyfmtSyytb19eEtE14k39ArNbF5F5Q6J2PRN1xwKfy6XViQRJcBTvzF1c7aQ67FmPKTDWzLbPGjRqEsM",
  "key15": "52fNLg8T4QzyC9bfgQAkfQ7bxUaNaBdeh3TTV3ciEWKVkRCBKEJaMQRW31pkySE3w8hMeHm9itGdfAkx4HQNh5Kj",
  "key16": "4HUBkm8aSKNX2EEeut25KiocgtLSbf7BSB3xQB2xSfzT6A2uk2BszhrBJ2Vcn1eXg6tVNEP5JeDZh2yeDofngQCb",
  "key17": "23ApeazsmpCsaATV3Scb2oQtAK8cwoMZFu3kTMMutnKnpngWX1vx7hRp7d8E7T1AiXGT7F2FmW7FL9vQj8RMmvhs",
  "key18": "574Cwitr2xLUz1xYHuAqZ2Zb55ezfgkKCocMVTsiQ2aThK7moD4oj1RbaSQqz5Pc9VJP3UYvcmPfp8ZijiYkFdMQ",
  "key19": "4gJrh6uoqMgGTWvnKLJbTYnRBabdk5mgfnxgp21PsNcL7JEnygJPm5fKkexv8g4Vee1ucevXedYt4t6f6iUvHRbD",
  "key20": "4HNsC7cVCZAZXuVYcW7pfdkSwsG4Sk6CXsFn6yAsPRbhcus1qL3NYc1ZG7HXXuqbjHYuX346aHcCjR3e9toAAMce",
  "key21": "64K4Qbtz6wojMVbkF5Njk2okDtsQ3bagcEC4WoExUd47f5mbea1Jb7JWnKvm6u9ozjEzyw1mRTTiZeQk8UuMuNM2",
  "key22": "2bjKYcQbmCfsE3k1AMLdtUDK99HAJHXRfYZo6vLePc3MAvEuEw7Au8GMhNS974rqb68yJddSkpuzuzvKWEjUAyko",
  "key23": "3GpsQ7W1MzuMh9PqY7SarXmgiu7LgSdmw8DEpLj68PSwz4v3LBeK8xdUZbCgAesMTP2xDrf86Duk1DuXPxNc5H51",
  "key24": "64xFuQkq1K7cs2arUAr4DvSY8enCoWAHSyY3SuryLeD3Z5N7Ak3TmtEq7H4aDsmxFMm63LVACdEKi5uHUcLUJ2WK",
  "key25": "8FMRVyYDwsQbCirHbPcs5qAKaPSxDd4TqabXsyMSBUCa43KV64xjMZUfvFaLRV1KsPDida5e7DtSfGggvqvqXkw",
  "key26": "2vwmb2Tb9om971vyyCJE1GEtd4fmHeDg28H7UNBSgHbqAhbXLB8iTpk9n1qqesVAdqypcp49T5MxaDg2yTnFNDTQ",
  "key27": "2XAvBUVMe6pjFKWBv7aTXWkZkGfL1gtFyw2VfimThKzbX4ENk7VmtP5PAcxrorUEkeqQnzhbB5qYsRTuKDoWfxkz",
  "key28": "5JuaShUxZrq1NdDB3xrWmTaSMTxE3eMzo748Mznxr1PepxXFiWEndKnpfJM9JyKtSWwsbwY374fR4MhfGuA7QGmg"
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
