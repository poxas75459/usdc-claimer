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
    "57rzSDWWvsFdMiFs3bEugZoDLtnVUjAo8JTaCjm6cXVmgY25FLGWFbDmmj4SbBF5Zm2LncQFYggfEgN9KbejZohT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TjzyBbbyH9QcWSgtXjt4JmJGkewaa6pzRHFVwtJ2mCAAZXaLhKVrRgAwpZt8iB67jim3ArJrZabQW8fVJgn1MD6",
  "key1": "5Q4EQmM3AmDbwEja2MbTgkuLbswd53SCDX5ZVRGuzCwHERoRd3s3xsTXwJbHma6pr4cQwCvXcrzwrrCHHuSmbBit",
  "key2": "SXTQaVBYzgDnPPybgXxAQHYwB9XitPRYtZiTJ7EEENXKHYUjEzYGZ3UTVLm1rbY4rDJJUtGXaex8tmLtp1Kv5Fw",
  "key3": "qYyNhAZjpqwskKHNyhQgyngoqwBAjuQxsqQ8FZ8xKJkCe9Aiv1NaDThKhLC9rbBeV5FEnhLdm3JanoBGniRXMhh",
  "key4": "kqNVuVxUPJXMWJZQrWNuQHrcTEWAe2EN7hhAnSdP4dYDXHpNJEiRokR8napywnod2sEba91RgZkL89kPj9F1SzZ",
  "key5": "4RfnbXfvbDyCnZkDJNHaSxcbf2xpEguxs5rcDbEbcKnu3PYndMhACd73LSBS6kQnNvfTqqtMGZse5uX8FXKsqR7r",
  "key6": "5Wp3WmweNQZ5QuM65zrqA2BwGhvPP7nLRPnkcuUEuqTpoUMhRx4RhseYHfmipm6DmLzQJCbNiE2ff3G8C6FtP62c",
  "key7": "31k4mpJJgqJ7Kfbc4pDQCJ8qV2x1fz6hP4bKKNWmT1JZjcxpEn4r2B1xFSSiXj7QguSbBZ4LBixEjFh2GbkiqEvi",
  "key8": "2j68B631A99ZDSYcETJM3tVbc67TEwjg8Wgrs9i1RDUaZJiLLX98xd2ayJJBhsS5AuuGkhPyMkmwTg4ySr8BzVbr",
  "key9": "125kJCjTNyurLqepWh3nSDbpawh3Q7VJ7hU2NsahyLeqJgXvHLjLw4gyQDegQA6sT3J8XLi2yQ1vYGsaoviJ4M2h",
  "key10": "5MK8vEbvis7Ar8cN3eqDpAhHMWwpuxwwgvkg82szhocowFQ2QbfWWFbdSjSriU9UCMSDtDcY9iwz6itNHZKgdWuz",
  "key11": "4J2CfKGDE4RKgL2T8ssA6vuq1AHoKQagWPPM7hsrXiv9sdhkbmDaUoUryhGeb3ajSuMDd1Szxx6p27rGwZt6y33H",
  "key12": "4GtpeuYGLqvm63p184UgMq6RkLsZZzxwW6WFrx1BkbeEuNmkVy6yPKxWE5mhv1FQFgkZPfJkvp9syk12vherKtZ",
  "key13": "qXoSsreDyK5xeXkBGfcFMd3m8xdaBv6c5p8D4V8EbnyJbQ5wymBACx9ETZFXBJ6Yv21UMypQ61AYpHeoQX6Farc",
  "key14": "2zqrva2JHe25RQZF8GpXaE6HmQaEkUbJWKGxFPHvSHkpvZGk6KsL1fnvkrBTQSq4D9hivNsQh6ysXNGQLyBfHqnW",
  "key15": "4f1EQcTWFrf7oXcYAPwbzaJztCvnukVK5R7sD2deMNpcZPkjL1bAdyiro5j94282ybrTRyBKddbiwPZ8EJNyWdbE",
  "key16": "3J2eJaq7Y3rsqukLXVfYkopTwRf4dnWcNFKYd1F9FjWXP3PY81k3sKDpUKDtoZhZ4UVd6WTfen4SaZFHohhDeWKJ",
  "key17": "3v3y5xJ8k8af14L9cFkup6g3kcdM3eQg12TgxBX84HKhdD6F3ehMmCdUoFyCoCKs2Wx1YUwZZoWWmWPSd85NDa1u",
  "key18": "4TMm8NY7WhaudbWExrj57PByBMd4nMGRYH1PnFKQjzRXHdYCdR1pNiX6GbpTHYkNDRTwdSy2Jf6MxDbiWBgpw2jY",
  "key19": "rpMsMT4T12sHQHcqsRnv6xbB6NGjvXpns2rkYa3MtAvbC4d29kuwWozzhmWrtEVNuGo9QmaaoexTfLWntwo6PdW",
  "key20": "2nAqcoUGKSy1Q4SDuXG1p4hNGymRXSbHD2NLD5rJQcgENkxgyho5GYczE4AkELyqYRe6HVGRmN8Yy3VoUNY28zsU",
  "key21": "1Hg6UyoECvcZQYToQeYeySYxMReQH6ZGvJfy9S4ffx6bqKHXwtULhKoZrHgJ6kfT9w8Rj9VhDKpxzwCxrX76RFc",
  "key22": "2GkzaF2HrYviF4v1rviVzvH3aNtTVQZtQApYKmzcr7yUsWidcHCM2T5QZ1SHUVmbHyTVGDyN2GUvzcECMuzH9XSY",
  "key23": "9KRwNtc3MUh8hMb8cvvFz9KMqhoroJv6zfuiyXS1weE8CHkcizN4p6f2dzuWxpQCNnJ7nCJfFxsuYuKpvAqdLig",
  "key24": "5aELDnYPUNuZqbwCYyvdd46LaHTdBYQn3c5aHMiv2i8gwSbYNWEmFoagFN4LtQBBL5HUS2VbaBmXxuwxxYXvQ7At",
  "key25": "4RAf1q8pC7xQYLamzzR4Mm1m1TrUQ2d2Ug8PWSj1VwNjie1esjxwsfxR2mFJ9uCfiBW4E7peKbw2AwYZchQnb8PZ",
  "key26": "2xbJj6rZxxjYaYtzTp4Un7cBzzZog8bsHs5HCzrFNFYFmqnGuo97poTWcSgVNXf2WQ6woVk9qd9sHFm8KPB3MsbG",
  "key27": "5BrU3R58vQnkTZycXc4Q73qSwNyMdi8iWtPdhuekWEZRP2g79JQERQVMoMt3g1gFugSgJRX4s5AZGxVX73f6WdUN",
  "key28": "4K8CcuYZsBfL5w1wx5tf1qASDkUtxX3aKUgHntgV4Fr3V1qiHeFqCgcwYTAPTHU2LjprZyr1Mca1CsQwT1R17ZhB",
  "key29": "34kzejm7KGVz3teWYJuKwtHpxAdP1vqC7DiqTDFJBk9tU7dZPee7MFD5KBdRdmwQCou5hoDGY9mtqZTW46Sm6K8Q",
  "key30": "3R4FWzb5QHjXRtRjoru9ytaKTS68oYrebaMuEMESPmy4qv76ckzB19CiCZ3rFoHtFLFsHoAFpvNRMvUtX9FannsD",
  "key31": "3vSMsNC7WMKapkZBcwtmGMdGT5MdXmwvKUiU259EQ8N4TXYskFoG8cyAc5GLEVMPpoiKBfKTc5hn4RVbXHSoHcUQ"
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
