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
    "BBJpMCMeNABh4NqGg3xT7WLJkrHp75E9qsmxpTkdAnTN1JGmiea8aJd3L6FisRvzyKCNCF7P7esUAFoWMHesoYM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YxEtJZnh3y7ABJdKrLfmneBFxuHZuWbwndNXVG2px9KqbPfuU5htsHqbkVZFo95BdzgUuA5nrEvjR5CgdvM6vZ9",
  "key1": "3hEKpPrDa632nsotwcryJD5TaqvxBSFN5kjYMZ96AvZ4KheRBpaND3zrjfJMUYB9nWVsuURbD9jQnac3zKPfDJ6K",
  "key2": "3NgKJZvAeQZMfnPGrK8TvgcGkAoUQsyTxeGwj6B8rqMYBhADKHzkCtzg5a6nGtYux5Lyfzv17Vi3aeSmTTsA9EQB",
  "key3": "gyiEt6yjsVVLpQjZwdWQxQDfejh4K6vdN8VZ81eE9s298iCqWsu8BjnfQacV88JpEBaVyeXqznHUjjDjvoF4uxV",
  "key4": "2c276p51wqsP9WPppoTxoQ9HJaTyLhxQQcgP7mTpDnH9jQiFvDuXmYjYnTpFReFCeFyvoEbx4FxRPW6gs2Ads27o",
  "key5": "4VjG7tk9E1ykm9fV4V9VHHWGfdQ57vSCjLTeco283c2a3z8eETJ5YCQ7z1d63nsXeSEq2wbGa8uBeqV7tYxnoYrW",
  "key6": "NtmzFwL2WPpcsxv8rHYn48e9NYq8Ab6YRZqmkeAVye43ccG3HopBSjfJDo9BpwdiTFzSGs6UwH3DqFQm2pPzbY6",
  "key7": "3HTu7UCofHhHHfsna9WRgyJMRjroQgcQkHdegJFWELPSi96wjND372cFWivkFqPVvK9Ef7o6zqGrQXYL5SAxr7UW",
  "key8": "qCYiKmGNZCn3vqy2iLmYJufH9WysWhWxs6Snf1btkevZnvYMppEfH2u4KGnWn64sWMYGkVLNVNc7aHaqNJvH1Bs",
  "key9": "4ojzqcTPChdfYP7aN3f5zEqobP9gBkvYM2nKLYx1MtgWQCiwawaa3yfympjhpsEDRDs4tnTS9k6Xkjc25PNeFCNp",
  "key10": "5UxUf2yZ9zvoRmee335y7VwEnoo7QyCSGjbbeompemWEK7q2xaVWauA9y3Xk5jVWgXLeE6j4tyzUJLHaDbbR6vCv",
  "key11": "3xE16wkx48YaFMnHw5WwAGfvfieVKqkDQEkGbsY4AbqKpUWMmn2tdyb8NM3n6JxByU9oMN5ZapU7ovDp4phnqRHd",
  "key12": "66kDKZy3g2gwSrhb8Kh19NocAeSGvrjZcS1HokKRuKiykQHc7WhtJj6G7YCZ3hpvThRZG2b6ufk6oDNyQYnYyaLw",
  "key13": "5gA2AMDXPcT9MULZso7ZUpxPJd5jEHodxeP5im9nXbH3QM1GMbfoMqm8vBeJgJ7s87rj7Ant543Vi4aHmKqAoPkE",
  "key14": "5XMHLQzEzx5DaMBmorzRw1sBGJwQfkY7vAYPcKzdo89goVHCqTX8fcFohiTxUpvsT4GEa4cgoDBAZnEorB1zr1H9",
  "key15": "2ye2WZWLzP7phgsvUQh4tND8GaECU2eCwYDGni77pFrhnSyMKT4qpNdiF4aB6RAxDo5qumASBYjp3RvcnDBk883z",
  "key16": "3rHqLmWpNHXfn8oQXrNuonHWPJLVpmWx5bdaispSK3XikZjQHToUdC7G11ukoTw1rQH8X134ic2MFwfCAAzK6fp8",
  "key17": "4hEQJ58WT2NvK9728hwB1eA3w7nmNewuhYw7kVAyh9EMWE5jDdzYf9fhA4dfM8m7Ns2HmQo6sCzeaxpvPxEMBgcB",
  "key18": "65gdtfxYVWvjdnSVB6YCVnqhxLAko8VVoqZCS5Z6NUCeXUASgQ9d3Wp6t8k8Lnu1r9L3AnTaoYbjP3gc1jniAmeA",
  "key19": "xfmbfxibsaZCbB7fie3D6NBtHe7Pk4ketWEW92SQ8mksDM2r1ugzNeXRkXikxR6bakB6GoFwLCtLet67czN7Qwk",
  "key20": "54noEQkbKZyvdTKnccBftW5Nxg1qKErP18aHW2mWrL97D9Q2fEc9iW3GqnZLkWAcyqNYBNC63jVHtdKqHSYvFsGS",
  "key21": "ALpqgAFfU69V7n1NnH25obevjTJxsrYgixezeQT5skXJQmEN98ZQyrX55Ey2ik86APGi2xdJmEWx9RRovMyvcXD",
  "key22": "4Yvhy3NDb9oi2dz3ZTeNencStyj5cCUUGUbypAEG55bs8eoVPQBNZzf11k5thVpxU5cyzLaDmqx7LMQfFf34LZxb",
  "key23": "bkeZRU6tNot3WVR62ZKyhy2eALRyEBsNjiJPTeL4jtVX8Ak4RNcSDGfmdwSJYmS5PhK3MtgQnorfDznpiur8fpf",
  "key24": "5e12vxFPZ4mHDt5gEzDzp2DRAYC5raY9oi48pT2bUZHdL7m7te7reEJUsFTWtruGe2hJGR5nSqXj3MYM4XNYLTym",
  "key25": "5TvUBuDyV8kntyPmY2SvU4mTsZ4pcWiftkbhkzDJ8n4hFEht1afRmwBckq2v5vAMw7Yxdw3batW3vZC1XDDTso9u",
  "key26": "3XpDo9e89XZErtod8PwYsBgdnUwuNf2zR9BtWdfHZThPJu4ZQmEQorZ9pbWGGXhjAAECvVrxpfRzVyehofejKRH4",
  "key27": "1L5mMLDBgGmMcxtXM4R9Xq1bszahQVU7XGB8ummKHur8GgZp2eVCqfNM9dM9vtiwXoB6Bi2cxEAg9REWA9t5KWU",
  "key28": "251gmiw46CkEPeZbwUzTvNMV3xdn274GeXMhv6xX16eDEFJfVu99xWLwMhEJuDKNAcTCvrgT6sj9e7Y2hJj5c7fy",
  "key29": "5XfCpc3QcZKY1hWC4ArE1SuK5JVd4nDbLpKCe68EfPW8GjokVyhUpgfZdqY12aRrqXSpjFoyvTDdzvMZvCpb1rfJ"
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
