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
    "3kRB38PdTa1CcAJGjM7KMDQzMkNWzcdF1g9XGxhr9RPMXXVvBqQXRVCPTY6G6bkdgJyLv9DRstx1sgBFVVZbLEh4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WtZUxm2Ahd9yFe7bz9Y94KaGKUzC7PfVt7PnA2V2a8aC1vTDVu8vGAoxkRGi3eQFye3xZ3Gpviw3vSE1Dj1KDDh",
  "key1": "4vGQ7HWcBPUFSzSMyFCiWchoYoKyeMzqSCe7kPyy24137pW11LaKytwUnUcYhDDNPQJRpAFz4CTCbi6DCezJJ8q2",
  "key2": "PAekrtvyCyZTjs6uNgoeVyStcZQ5L4wKqaWu1q8VQ3fk672rhMZANCsHq6Pdcc9WrVa6p8rsD9PA6m37XQZfELj",
  "key3": "4ZbmTqEX3J7NbrfgUvXEypDvVeLJ8FrWo4aFpHgLcDmrfSirLvSr2xTn8BhzujQPAUx7seqidXMpvLPN7WtvdEFj",
  "key4": "2YqrHSThdHk54efrZG58cnjpRL4C9NBXaNvtqn76HxCZZjE98QG8DDTq2s6sUFYDnTkJiqUNBU6PGQ6SNVQDWMs4",
  "key5": "hYjQWRT8zWgzg1ACJRSCewBUEaGhT2Z6QrCcEt4FpocWDJVt5DxLWEb2G5XaVvWv1FiiPF71cwJ81HmvHdEkqDu",
  "key6": "4r33KV5N6PWuZpuas9ina4fmvWxfKJtWnfYMC7y9zzEJG2fPKbqaCSjYUZnvzi5mstt75fv8b4CQ4nMQ3VatEaiL",
  "key7": "4xmZmpkUQSKbgZ6bKYYvMgKQPTtt7LYUcf2EQGZgCqQvkdosRRdCGYvGwvPEbyUN8CvwB5wAuCgGWzEyyPGSEPYz",
  "key8": "mDZcnCYSNdeRzhDAXhRcZsKECytkeGhCQoaCve6bmPTJBeRpk9tzhnFhe3wzRgyMBGDCJJxsxzM1wPxtAShsPmZ",
  "key9": "48eAixvKxZtQve876jofaw7phrPtze5jUJScLRr6vmDJZ1Yw9XDYhx6HCKeyzV5kNLcWdtD56cdgSp1faJcyEvMK",
  "key10": "5CJt5QnniFgNAtRUwepJY54MVuBpkM3BN6WcEWnNeE9xGUykTwg6XwMn5cSnPdbvjciZAwVuVE6zuitx2NvjyVZ3",
  "key11": "4Grtt3YZXhC5E4PzqQ4R6wEHTDiy1jMviNMHqU6U6Mo9wbhHL4aMKHyFtYeFUoLSSJ28chjUSnqGF2KeiPcGr1hz",
  "key12": "q89WnVhrRiNLWSXMjGpP5cGxEcEtgB2crERenUcRTZX3kWzxWBw6kVV9MHuhT27RjedByQVgsveWzb7xDvAhhBF",
  "key13": "2uzzLmSYcc2PhoTk9BW8hjq8kYxekV1ri7jqe2KVDmuFs43HUo3BqMW1uL12wU1LLZzKvKHKnejrbKv5aiJfh5oX",
  "key14": "2PzWZxdGQcN1R9FNz4EiB6FEsTydv5MsBv14XywG2SHTqxsXCyRmzpZv5PBAz5C3wkZsTGrNx4LacKR2QFwFhwJS",
  "key15": "2nVkW4hVm9Wtqn7xZ2EWuBGH9Gw2W72j6RxxQzuJvU4Paqzu5Y7rpaH4DWCoT69DJ9ccsqR8evdVCKuUk3aQWMnx",
  "key16": "568QnjTdS34Lu3ppxZyyn7HbQJPKQKsUDHVcGrEVMdB1gt3HuZzoDjPRJugQEzJiUazke4Bwn5x4qaNYqsWACrQ5",
  "key17": "41HRegF96fGezZ7Vd4sEGjTer7GMdv8enCzMCfuhuTm7Y4b7SNhpQK7zWR7Y2WjqYGGrFnZjBo3ZrpKKxNLABHHJ",
  "key18": "49x1bq45Gm4Y8xYfq6fNgYwHPNwiRSnp7PDxqxeKCSzdXG9jggWpfq3pNn1WGHaXXgjbr5iu7eagJDfRLPcBQdyi",
  "key19": "4EKgX5iRTG23b8jixLXJG5CXm9ufj2XJkr6vkYQuoEepZmdvM6K5iBzdpdzT1QWQYTXHwe3coJXFanJDfPsnNkL9",
  "key20": "3TzpG6kCErj5D4VTeQACmbahkVJ3zjSFiuqovKVdmTS3TwvqGy3WGXZSo2g3cNfFgF1x4NTrUoKGmsgF5g7PjuUr",
  "key21": "3NNMLLSNWPKeFLNSfrEDMTuj9tESt7TrdVHakMx3xGH4szmLmbZMWCPQje2D7DcHqJyg5dNn38oMvsBGrtE1qtmY",
  "key22": "2FWTsLn7d5HHixHTEEEB8kJGMRmvowEBUDn5jbvYM712fEwP9Kt1ixqdhCUtGsT4UtahvxJFL6cnDw6Zq1RViBSe",
  "key23": "3quBCqunVgDKDrcFGNiknhC61Vr8nKoijVvLfNvUcnHyUoVyDGKK5qLFRDHNnb8Ncnwg3f56i8aAktqn2Qaf3DKi",
  "key24": "2YD6qtgzVbHhtNVuTG7d94unbXSDxPp7hyUmGvbVtjdHEvbzaCX8Gp6Yp7efKd3Zi6j57Wx6CHcTNL1ddzxsdSH3",
  "key25": "4U8d43tVbqVrgXFPUuNSbkyQcSopxjVwQygVAQJspw2dUjbej4H5Ld8vLyrN8ss3CruRdyUCyeo8dxdWVvedYnNH",
  "key26": "2KQYFcSRmbMBFEBaydkwLbhWdvLESKJ8GnhWLoPeRS7uzMsheVjvscEWZPmTSjhCK7dPAui5uUZdW8S5WEG3V5Bw",
  "key27": "2tNWwdRXo5BF4pmEhzroGgbyCQTPKk9yJan3uTRUUCeKBFjgACDzbLR8R2nf6ZCGa45bwBA3S55ZG9YhAnGk6C8b",
  "key28": "33PqooK1enFeP6GtHSTrhKqU5L7pPo8YCqaZ64b9PbXcbysW8Dd49187mcCW9Kss1PCknD5cvaZN3iiQzmRHrjqC"
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
