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
    "66C9ALBMsgPjKNgdiDTAfErA2npBxadFGSre9EHQbsPChUhU6MULSzJFCHDMrm5ZRTt7CvW928RvAFMoTWAA1E3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jpinqGfKToo9EHhGKRmSZBTDmYtDfzyh4PYXY4YA2XyTboXYhtroj4B8Uc4nT8YjW5hn62cy9tDAYG67JsEHMNk",
  "key1": "3crxjJzXWgNDFbCdfNZbm5GSvtU7YS5BCh72stnqVNZCKsHaQaWvQY3opfyvXaa1ovvdmFKm7EzFWMJqesCMEnWz",
  "key2": "NTXBXaXru8qA4rxBbyR7wjYjebsfgDy19QJLeiXCYUmjDnsqy7tpXxzdvwYBZSNcqt748EZAuZvdfjMHpzFzmzm",
  "key3": "UDYWZawSgPujHj3nrc8NZekbEFjGUUiqpDMq34f2DVukbURaG2FgENeTBC3QPCN3eM3ibtAdFGN2v3eceGSLGJW",
  "key4": "4f8XSyCm5eJgxBp4SxyRjvEVyCycBhG7trDNVVe25cmUY7geVJS8ideo45DEKJNRncYCBwc1rj25Xb2Mq6q8DQto",
  "key5": "4WTRubhieoGgguhTbvXhPzh4Hz3DnrnqmuxDXgEp7ia4MeGuhmxp6mSNxBUZLtUrVbxPsxTumcUQxFGWVjDGxjjA",
  "key6": "2HLRM7vA9TLR4sbstQ7EuPa34LEEZsfkHiaccGP3RSXNE8FpND9Li9EyfxoSgWYJA6DymHWV6GJbU98PL5FLskM7",
  "key7": "2seKxFuXDrW6SGGr1sGcQspW9Kp7cN6j3xPyZh9yDggujMeJXJESzQmT98CUYt2YRZQ7wKuT7sLWceQPUCuiK37e",
  "key8": "67YWGdjfCXHvZ3ebyPMqfs8Gm1LghBPieMJn6F7fUkAXRdzJoLZ1FPJwJf89eSXcZSdXYiuW7FrrRsJAeFMg3op6",
  "key9": "4Th2Jc7rNwmy7eBqZMbG8hY2t5VCXSWvdGqvy9dZpAC9o7d82HEAqAX1UpMwfKmez25z5oiXrWLi8nboHsPJvL77",
  "key10": "2t5dY2NybdwUvBnTufwUiuyV84oYwxwcZ8TPMwyBfLZq8YrepD7PejuGpxiAVTczpgiNeEk3mAmwqrNN2ZMz7LRx",
  "key11": "BHkh4CXmpxy1DwQSud1NiMr26Kt1yWkwZmqRjdVoSQWPxqYPB4f6YnQ1nRYxM4U4jGuUUXLKzHgLQNFV2mBn2iW",
  "key12": "3TsSEoPx3kuJ19oDUBf6rQNTN9PKEe1DadDNwySpSChC4nwJ45PunC6LwjwMy4RCgJd4pjs2aAdeC6TDz2PUTJKe",
  "key13": "JhFtpDCUJXSyES2nNNER5hvwSeFPLeLztnkS7wz4EXP2NuXRVhN5ydHYu5iwnebLLrPs6okJGXFCa6GHALoarXK",
  "key14": "3kLH3ThgCKYxbxCVNjWHQrXfkFjuqzUH2d8tyF1XuEJLnxndV9MRPJgQFTdwRNxGQePrqWN1uqczpwM5sMfazhkS",
  "key15": "2rJEVwKdPtKWzaSSh1ax9Wz9K8HNRUjHH1BNC2DqmSEZ2aw97wWNoVXD5pfeSag9417bJByFqq2tcG5XUBHuraaQ",
  "key16": "3dbcBZGZu2t9YifXQisi26caTGE3o1kbvakoCLvw5DdbCQeiVjyAeSuonhL8qADrBBih1uBVtmN763BkNoiHHBAw",
  "key17": "TuBWMAVSRSqYU4hX8EYSKikFcF3uN3TKK6KAHPcD3K78WcfM4qQwoAgqYXpWkppBDjasYxPcw94YAHGJiDdAyxS",
  "key18": "mEUSw1jwnZdzANFQdNVNeoZhDWbxXJCnACqVvoHtNRSva5XwWpQnrHfJYH2A3TF6mzeWyh4tSBcLD73hqaxVTTM",
  "key19": "ndtUbeoxzf8XxcVcAFXKY8DhX6mBLpfCHZY2yEriG5mJyMFdBe5uqnR1m2uZw2jqsAJzN1kK6KdXXmMgSHPiatf",
  "key20": "2Xrvucy2n9XhXz4aebXokh1rQM8ePK8UKToRxxCmvzhU8LXZCLbtrZcT5Wu5ouAhBGaqVwFe6ni3642iYzCRQD9d",
  "key21": "4Ebdhb3DGzrBaUAfLcE9Kcde4mgcLQEbqjVSNLckpJcfa8xdL5zuk4qFFeDePJct4kxQCGJj1uH8xHgHUBAYSTXk",
  "key22": "4TQ9iAPeGd9sqtEmSLZAhnkAxmGjGNGKr2gnD6686qpk1SzR5PLvJnEEzn3s2pe5Gj7d73DKqeQfM634wPV75doc",
  "key23": "3WX4mS5GmXsYU9BF5TD3qxiW9GGzZpNZaeLdi5YW1tePfo8RQeqH3q8VYAVjmHovwKkJpgFAy7kmkgKdKAFdne9Y",
  "key24": "qv1tBQo7GyXwiakioH3mScwAPdwPtZzK7pDxscScRHKEsJ8HG8AmYWNe9HLa5FC3S7RVNXNqHQaUyMZCfNRudrY",
  "key25": "iSnBKBmbZjteNth8nHPndH4iCgmAycjV3AesWjthMnhwSRY9vzJchwL7CUEDRq6Y1b4TiyFJzgjDx4nQyaQAn6t",
  "key26": "5BqFkkHn7taETrik3DbbapB8eo9oUz2ir11YTqqm9vkwa7gth8Fe1VaTsGFgKDeb62EraYZDsonni4NYXVsNny9K",
  "key27": "5CoS1cdud8fU16HxZfLobQVbMYP6RNFUbvVxLnNVHCsUFUkLLjM3qkaunrEjA56d7hHA3trAeo6jXKTvX15fkPLR",
  "key28": "4uKh1HQ1nXypUz4xjqLCGarnm2RRfdoiTdKoQwMLxMxJMy3Qa8sxpv4dZFm8FgViiq6Z1psEyzCKS6fdiMNCxGVu",
  "key29": "4QPusayA4PjFF8XE29ufnsYMMr71xXXBiijD3W5DuwbpKRqdgymKQbwCHJ7E79d3joceV8NyB1afg6AoSD4e6Mmj",
  "key30": "57rK6d74iFS6yjJQ392epNXm37e57CBymaexwwGDaNgudGkf4116JA5dXuJkjTbRex3VuXhAyMAT1obWQbxEiAXi"
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
