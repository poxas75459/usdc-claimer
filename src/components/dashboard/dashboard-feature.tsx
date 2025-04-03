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
    "5HWZZZKjSA9EJSNAzsA9qia9eiYdh1UG5f8eFVVZ8T4YzgaqXPWiDjEFju96a2MCokzNLRmQZERJjMjBXadPfB7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iLduebhmFAV5jFgrZhRetkTYMRk5JUoA6ocrk7WJJBoagfcuczWjuAgN8xgbvTyZQ8BeVxyNsmJHa3HnykP9wSi",
  "key1": "2B1vWEvhXJ7xX7Ur63ALeum1hPzPtCxcQ3eZNs8d1E7y6uhLhwqzbzyeh51HHgviydjrNKKMddksGSxqoxbQ9i9L",
  "key2": "4W46TakWsNr55sWYEjCjyKKCsKnp81VNAoAJBEW3mALVDzznGUs3P2JetxMDmuFysmgFzkEDvw14RHhhUT4RN7Ua",
  "key3": "3WgHLbedXvkXVHhZjq1ZacA5BwzRoQvqCGWSixR4zUaCNLy5zKP4vETHQFGBN2s3YguzCrjEdpGm9tXcmisfgQYs",
  "key4": "33XPvB9qxCF3bzeBrgEpc7Asa4LFq1ueEHmYXdYrVBtKp2ze7jUWgPtkWJ1BntQvUATd5Dq7zJVWB9h916VHNJmF",
  "key5": "vP1Nbqtm8NHAG3LJKfkG9RTEErparUgQLxQJh9esFn9wbYeE8QMJQNnvbZdngCwdt9W6ukmSJcEPGsieFkEY1e6",
  "key6": "411mgbynkH7vDsvznUTgP4N7dAgNRwLWEtsiwuKyRCUXZu8MnjZ3wuzY63RZDxVp3Te1MAZB7kieNwRNEPs1uRtp",
  "key7": "5DU2zEfFyTRu49nsXuUJTvAscPTNN3QSH7mm3aya61Z4jHBnTQwb7puQ6YqNjZHuXo1NVdZYydPRtRjME7hsHDz",
  "key8": "5oEiRuz8cNf4JdmK8mW5mfCpN5sDw8zAX1SF1uyBBPMF2zmt4B5ouE12RPBQKvV5jpKzwzZSQNnzxopb3zRTyUDj",
  "key9": "3XQAyN1YucF6LAPo63FdtAakUWDDAaWrZAhcjzBgf8jDQhsAfZEPJ2aHt6rMEyrBebAHLbXiWe8TYG1qsPMFXFqK",
  "key10": "Pb73smMKZ4Ye4UFfiaco8dHFXUSjLd5HQ7aqkiyTC4LJcPWEkfwS59PkbpCdqhaTt3G7jQB4iCtRyL21KfTsWe2",
  "key11": "5SnpFk4BXc2bWLRPPayPMLMWqVRPXj9jncBp8uCH8VAs4PdmvQTzSziiDW5TNYNsiZnKCB2sgrewAcWnNv6WjGbC",
  "key12": "65L9D4e8J7bWTpusD8kACp8ug6vgPGR4QQLyAJ98r7vmwmodMztxxt4Mx3qfSZq3nf66iZSGdsqw1TvGV1ywr5BZ",
  "key13": "45XEtSHhRWNNTuWhf5w8bJs7bsFB5ARY2bqV9qkVS5G3PwWedajHRP94UEZsYB2Tx63NbiD1bkse4oe1g5qobVHr",
  "key14": "2MKoygGYounstM731msvwhk7AAUbdkQT2Rqd79F8ok3A8qm5BPSax7yqQkLS4JtWMgg2QQtBzMzc4QG3soiVaX3D",
  "key15": "5YZRQDAE8rUZknA4X52ur4UXWszXmd61UWnS1uW2Uqu6LL8DxAgeTrnDn1gJmPvdcdiNnJT8jVw53AAJb53zTAj7",
  "key16": "W9AFvmTpR1wAf8MRp6SSpPnKtjBra8A6MSBy15wv2kQD3CJJ4wcSfhnxNdC7pLYpoPMyB6QvbnXUyN9oVS9eDno",
  "key17": "5e8DuBJHqbsXf4Rjj9UKYiQt5YX1yDTSBDmtG2236SjmTKt9Ab6sehzZukUUBKD8h9kcsu8WutED5VDokUNGq6UY",
  "key18": "2ctSsRSVDVFismRMqYbnLHwdGdMukchePtEkNmywmWL9gh6Ga8TC7CKRWd7Bno6oogQFnYoj6M2f3eY45hWgh5iR",
  "key19": "4A6nNwatdjzJoLgX9eqzG3nGfHrE5zMnVUMkjmsARKCyHZFuHvLXVwow5W7DMetBCvjiP6dYN1YygFHVuyc4USoT",
  "key20": "2vf5Z96tBeUvWW3AuGQTmmXHgQXTCToesnNNt4Hikfcxe2jgVCfeFKbjN9S8Ay5YsRwfZRKB3D5dzeBqoQMLeWrd",
  "key21": "RJYQFGJ2mFHyaTWSW8H7u5LL3fJFXxbjCGVFDdzt4JsYKaFspsxPEB8xnsWsB7ftrMyHQmCvk8H4YsvgAiju5fM",
  "key22": "38E7RvRN7nnGaLEQiGEND3Tc4ShmT8CKVi24y1rofZ5mzKbMXLypscE72NxHVkraKup2dfYH6kGHt1VGQGrKC5xm",
  "key23": "5FUV8nXHddwKjZc6AxVCUb1amARKRzZ3UMDhFkuBqc1w8sCA4avAwW9vZCmdj9bM7yNe4WLUxJ9KaL8dDS71QZjj",
  "key24": "5QXpvmPdzm8hxb6ECdqPtgFmAZ5eYyypzVxbpxz6dH97EAMtZ3rD6hg2XWY6iwD6ZbU4WpHpv2E3yYoenp8jvLgv"
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
