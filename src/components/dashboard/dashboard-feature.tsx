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
    "4C8neqoW6tCUMqz4EjgMHpvk3gDnnmVokfTZPcsNJw5tNwJbSV5kwKFqSYSSwgwKNTDHaHeGPJsDv5hzemAYnAjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wdUF3syGNwuinKnZnmkFajfmFCNPQD2NJziQutmAo3yQDwhaBgyQsuj2VapUAii9WuhmQ42vsmRbMrbgrV1HfZF",
  "key1": "64xNDrBqAKUX9YPD1BKqW6JSW5rZFquvCS7VmgLBf4zZDuT3CRTwhVPYEGXKCMaGgAYJRj7q1oQXzKVFGq5QNKrM",
  "key2": "2kf5Nxvv9D4SVJTLcQJ6TDhY4c7bWmpxcPYVzaSSrjRyKwM6YVGGQWyiw81Rk4QxmvVADWLu5QBcHDr788p7PEuW",
  "key3": "M5Q2YytvYL5x6dDMDDHErueL9117ZKVCQ3mPq3TEnaPScXFXx4kxT1SoAGoJevKpDZMvELcBFcEg4GxTLjXyh9S",
  "key4": "ZUsWFRQtzE7yK4D7e7HXDBcwskHKP6ZgEszWryWWEA8HzWp2panaHEaoWrxxHc8mCwTLoKSESniBfmDCdTyeC2z",
  "key5": "2Q6oVdnygFhvAdvXMr1mYLhg15GPrkqWxTMy98Mt8g2TH3QJc33Hha2T2Jp7H8eJv9QnvGEgCNyMgcL8nwmyuqau",
  "key6": "2LWMREXmo3zigMMjhN3e3S841TE9tNH7qSdG66gWpaZ6LWQE8A2kMjLrfocEKbK4B6gXBtGPW8rDQxHGMyHBsJqi",
  "key7": "2b2jtvNPLnVHWhkKFrM9SPAPwwFP2cEwXWByozHZA6CA1DQbc5YgeCH6qdH5Z5EEFSTahPftetTtpd1yLMAT7qzd",
  "key8": "4WroyWErqVjwKtg9uv2gQyeezUZDXQCMTC7fuBQt7eABm8Ua18VhHaPgg3LEmYYsAAUCKrizLvUssqqiXqADkPmU",
  "key9": "4288mWuYzZXKrXNESrEynWn1KWDTZkrwPTMG3E1hqR4bSDjrR2ap4LfeV3rmsdLZzczL6Td3daEN9nE6gc5P2hJj",
  "key10": "1j6fKjf76FmiP715ecVX9nAUS3ip6Hjbd8KCw96Nc6P9eUTwNhPuMecrTqChDXXzpmFQdMG9DeAqJDyQBi4VSBs",
  "key11": "5ScHret89R43muGWkPthV4x9fb3QPT2egfykb3jXSqeLVH3md9yYVaNgQbcTLbbKFXqvpyu7GLvnHJLH8sMHixcZ",
  "key12": "37bYhsGZzmSNdPU56U5fM7n3z7nGEkcp86vkrJiPmqNBTiqgSxJRwbgeU7cze2RvoQx5QFGBcmAKcsMbjYSGP9Kc",
  "key13": "54wqU4qSzHmKZmK88Fm8aCJXK2gPyqaEnzPBDPvPLpzPaCaVzHfTUqnRjQUmEcP55P3nqeNgA2kTudJxX6rV5DAt",
  "key14": "62PbX2StxGookvfaUmzZUXemajumLwAQMtzaGvvTRjrtAgJdoGLBGA3w92TzG7XRPRNXjdLxYLQSLVF5JYzdUNNk",
  "key15": "4ceYRYPZgwM5r2uPZh56bVHcVU98cTFCfH2qiRFXSzHtwu97WUHeSmdquE98MWR7W52AgQhMywyLbfSgDDcX6srw",
  "key16": "31MeBawJVZaBfLXA4z23HcpAPzsfVLzHXnhsqZcnwa47dj7CC3vggZf9rQPuB3pVo32rMcEN1t1Y34xkiAAEVYX2",
  "key17": "5xogLLcvMH7trA61Chn62Y4ZfohmppZw5doozPPXwZRoiCrsqdvBmEpKT6mxzZb8eeQBiffWWxiGZEd5F5x1Yu6h",
  "key18": "3k1WPXkMiLWZWqMJP9XkwRZi59kBms43KfAAX9NhLPPGHif1RgicMRQKN9JwmifRkKr7WpNXjqgJyobeKBdMAuHa",
  "key19": "3ZRJqQjSvWUP1xin6tLEPkUrtVp41MbTQCyE85hg3iD45cjXHU5xbNQXLZJesAzEER69GdzLGHZgNSr8PKEYoHZx",
  "key20": "2vwmSYDU3fgqmogxcqFKXFCphN2misvinrGiALeQcK3ejhYHkZR1iHutTzfb7cNnkDd938w5ox5GxkoaApKz2yoH",
  "key21": "42TxNBoeSeGdpB7V6e7zHwLgPuH5bY6NfM2ZvufvbQ5PsWP5vEezfdF89jdMhvpbRfdXS3icHmJWycFqvbocbFsi",
  "key22": "3npjMW9QaU1oj9ALFpubfTroFWu4xu32cgD8uNpZummSRfiTp5napLsSa7dTaiCZdYE5meGFyp9H5cuKakayBY6P",
  "key23": "4tkqYMi7mqSvypLsUSJbdHbA6SRE7Xiq5imhqSuc4cN7BjaacRCyHgcSukyA1xBpRL8zwx9EokNYhyr1ywAxxsn6",
  "key24": "4oBrVqMU3uUtXfzJPXgZmT9rapkry2pEmqD3QaYgcDFPRjo2yuxQN4o4VjHmETttPgugFWuDyf3a2RJrVJJEN7Ku",
  "key25": "5CHs28qP29rz7oFojrqPND48U8bvRtvw5kiQmfmerwzVLggXomyU1uGFpYmAiDut2Sw7nBbCPS81hC5qrfzm7fCZ",
  "key26": "2KbJ8NsiVfRSCrTpXDymdKPAFXDyexckBnYCfqVgR5bXn81qWAHuGrcHE7AbRqTRtAVjwta9c9j4Z7AA6uatZq2w",
  "key27": "37fwCCYfq7oL3hxroqDHT1Vd1YMLmHjcv9tVZku3UARPWU6X6WiogrnC1oEu6oRPXH1tzB141si7UAt9PHBiXPXX",
  "key28": "sm1TKoUw6FB5aA6VGJGNURPcWqPazRVxeCRHNAFzNW3Ut669bifKPAq4VginBErPsvtWoMC3Df7xqggdp8jPVGu",
  "key29": "4z1LJiBzQ6n84Ms5hwP8LAkhB3x3N2uDNzUyxxtazZ8rGAmMuaaCoxarTY1cjMv3pM418a1u2ajZPvLxmAfEnRTM"
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
