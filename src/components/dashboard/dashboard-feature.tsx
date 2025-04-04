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
    "5QSMH9rmQt1rDU3AGiMmfysufbx2AmdgYvBKaQMViq3Phr96orsA471EpTTV6Zkyy5w9UvbWqCFvUpPEzpfjtjbF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G1bViPwceLx18nXo7ti6gChQrvhwafCLchYf8J4gRcfJaHGgxeZ8JNgjhcrmhSgU8wpssKdG3uqYjG1SEUSr7mH",
  "key1": "54yoRTQNR7LMCjKUqUjQPxApzVryqPcGEBRzWTTQpPQyfUrzJqFrq7NSc8zLgN2YufuzV3KgPNKaviu2Rra3KAUT",
  "key2": "5Fi9841pA82rmbGdRCASTMsX3DJop5eD54JA8bAe6oY9wcvPYuui29besHnBTUwqMnmSUt1xyzRDFtNAKb32DCQm",
  "key3": "5bqZXNkaDYG4jFnnfYzede9u6982QCPusQnqbjXioezChyQH28PGhiFjkzEkgSfTnCGXSqQczMAeo1E7tt2R5JcT",
  "key4": "xfJG76Rdv78VvpJ5TdgNvenXWc6LtysPm8iDdU12SkPT18RX5RsahtTV3pxbHKATZFGUQiDapumRV2p9ft9nVBi",
  "key5": "4FbLmjbStiJQ4aBeTPuq5LXK6PfUE8fbcDcAuNa1kZyJUTyuqgKU5WUiEhu5QRgVJHod718edYhGH83jFqPHej9z",
  "key6": "61tCtMh7URpC8Dwfth4NQG9FBkrBs7rww856rVcS9xMb3fEp78mRS7vwW7bC37qzUuA382kv1WEoy5Lya9aRCjsP",
  "key7": "5F9VGRTgtSnjtBafyh74TTH8FtRqZLTMRuvmVsQUGDR9GjHuZhDpY5JCE3buSHxEWCHjiy4b2ivRyU7DDovUdHQs",
  "key8": "4aCjRjEv9L8BYVXsE81fUdcdKA5WruWEgWmhTtmwNgYUj9kRZGwmxHfsD5VSqw2L4pTvdcNu51qKm3Wc9d6q49dK",
  "key9": "5qYpgxyv2pGk4qXZzviPzgHTQ5orGNuuZeiAPCy99bmSoTTmqnuGqRfW4uMS5DJRVMpPriWnGBprcjk5HK8oDJGE",
  "key10": "2ycf6fe29BkZm1CPb2gfRJx4MzMpyy1uLF8ZVd75jmDKitmB9ZMADrBZuey3XZNieeEWREUobvitiXrfGjW3To28",
  "key11": "4YLVgPF6PYKx2pFd4axR3rGYMH8m2eMLxnaQnR75kFpAVv4k6zVwT38BKbeV6nFBP8UDT2Ah1Cr5rmqHDduiqKRi",
  "key12": "5GGAwtWWVyziozmWKwCggwuuegwpWDFJNFTJmLFUieXiXg55k7RbsHHvftmKK9cmjSoq2nLGoueSfnmvdjdsdLmc",
  "key13": "5AwJBGPQsK26fUJRbbzGoMU4ffJpdPJSPj4xQUKRDJoNu88pg9A6kPA5zyFr93D1arYcyR2gZxgxnwKB6cvicJHq",
  "key14": "2CwGxBNPL6Kj55Zfhftgb8r3FQznqUjtxm3DeaUEFqaZcuhscQ4LGsRapxXyUvzrGVzu6r5EshVupQ5p8u6t2wi1",
  "key15": "2EDSuh3uRVyhLJmP8xr7fNkcZLAdWka2q3KmQ3qXiUTEomZYgjPCrAjMVDtz56RbgMp7uBQveymWxWfbKoGqQFRT",
  "key16": "2iPMbdhtP2AmFgC5qBdAx74CMcXr5P4wENXFDSyCqD15xKHFWrhdHPbKnadf6Jc2GFUcwPPT5yX7U6KNwGBBqMQt",
  "key17": "2SaETLzGbRzRHuQSJyfWKhHx9sK54Bohao2Hqw39aDkwyrudWZZUcuyy1UHnUB2UaVxHNBA5Z2oCZG2v325PXjqm",
  "key18": "2Kn7LR8gr43CNd3keNLXbyt3rMdUY8SCuKyQV95FchNc4cpcZaKqDD7dNduic8ypWSojQVvAVyE8rzMfhgGXBB34",
  "key19": "4J5WLfH1V241mxAfevvLvkVbDoxJv7T5tfbcHWCAuMjsa86XxmKAtJpa5ab61y4u9AU9CXprM7PPJSteTa4C4cwJ",
  "key20": "4og6wUUB2hB7be55nwoRt5ZHjx1RPLEtBKnc6g28i98QGQuoHLP1efjD1q5zrzMYL6GGtFutgWzEE5JurPQHGqSX",
  "key21": "7zaFiG6mmxLPQUr1FxB2BWJCEFcC8PQRPsvKJjcSmhbEGykp3dqMLfATddozw7YoQHDqXsyYAYzgWFGpFXEBbZH",
  "key22": "3ehatwKYLdAvPfBW4X6oWEdehHyF1GeH593WqU3ZjxxByZBU6a92QvhppLmWb1nShGQZqfJtGKkz7p6JDXArPuLF",
  "key23": "3cXhdy1D5vibssfEAZJQt472DVS3d5RfDgTJ37UhRXLQPk56M12zHEYQCSLtfLt7koQxEKqrWodpUG3CoYGyev9G",
  "key24": "zDjCJDgMbh689MEMboa8hxRRguH7HYjGVTkz2pCb7WWYMfRjFg1s5awkcYUPeeCEYN3bUTiR9pnXetC6ENF6nim",
  "key25": "5YBAMQj4R9gLkyueEerwPq4GtesyonbsQdWzfhAUG4Nu48qv8etdkwLWHEyjeSzW8wPYfyNySZ7wPTxCiqCNeC8a",
  "key26": "3QCK1KmhbVK5VX14dZFqd484nGcKU8zHn1EnoapWBArhbAvvrLDqP9UEk3NyWAxNt6UXT71q6zoMwrZ56hngp8go",
  "key27": "5jZVoVppwE5GrUQbmocairtCPa9TzHyEW7DmB96mTQYkzpCauYfq1y3n6GAtaLLsmWJG4Wr5eUSafyeKLMgE7FCw",
  "key28": "29EWy8vZVmcPK1kD8qvSrNwftJp4SKc4LuEb1GhPGzS4VoAG2eD7YjUD4NUYfk1m8q4Y6PrKAbcYP6KMJLxatb1F"
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
