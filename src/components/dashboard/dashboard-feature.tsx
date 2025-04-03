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
    "aNFgzSh8bs2F2qSFm6b4ZtGr8MT4R3CcQG9iWNK2tzkFwRMP8ybsueD4UrrarPdiKeHpLZR5fheCkKiXzgSzioH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eQMiQojH5fVsuAKEhWn3NDkkrtun4yq6i6A7YgfNxxQEvSL9oxMqh3ASEJ6C4pejVt4wnuPBQUJoF88S95TPLdB",
  "key1": "24axnZgMh1EwxJEhL7Q5TLETTCbCfeh5wokXfEtpMaPdHGChjSCF9N4xd6BVortqBSsdWSbkmgwTJ23bfCCRewhm",
  "key2": "3iXfMScrL5mEvAsxj5BRct2uKeaoMgaWLVCtLCSV6VTyu2gi79LUg2NS9kuDNFqWbMMe7ieFDAHLoN6uenvsZudM",
  "key3": "5wPGZ1z1GWKcQRF5AcvpZLjews16jzRNx221TmHf6sZTgsx1XWwqadWmXv1dnWYH7ibjWaNwNMkkGDsPLpoK73jQ",
  "key4": "5Ec38RSiV54TXnvC8WTGNp1EurZGLN8cuU7BmBH1FQnXWHhRBi7ZjAf3tP6oZvM9qJ6WYXgDCEJ99cxAYewqsMsL",
  "key5": "pVFdJa6StJdD8bysTU57ZDNtWipbckvAMqxaCCWcFCSLR54RxSgTTAYRuWVrEsWPzHhp3ALngaW2SktcZA9RsNU",
  "key6": "3e3fSHZXnr9Mc1DJTpTQVNFLkhCZMH3CwyVaUez6i4UJaZLzifJTW52SsY2FWy9diKu2jyULm9t1jgHxM8zqvBWP",
  "key7": "2WCDTH1KJ7GvN4PjJttaARBHHX1xgtbiJLqJhxJcmjEmqixJnAKWMBFPXrkT41sXCkHTPPygqB1JJgJcbewvrN6T",
  "key8": "2HuQLaMYoqyvmUaNhKKutd66CcuGRyGqLCHSMk1EBACJRDA8qpkjcq9w5XeaMPgnqAZPdH3zPV3roBEdiaDAZHxz",
  "key9": "4sPUgVduBhyuUrpcsYLNNg4jbNuyjzQbjFNH7iVVbCUu9cYiucZLwJfQjzWwAtKM9qvDquGNYTA2Rs3zcXQfSHkH",
  "key10": "YbyjEjRfwujcKfBomqT8B951m9rxcoSxhtTexXCqc5tUH3HHmkSPdqF8bX7Z4CjdcUmLrtevNdp5rWwNpANGRby",
  "key11": "4SzrVsSHCmJtAFX3s48rFtkNDu7AJXuqDCtrSHCjjep25WwQKBvyhgMK9NwU63zLvVURC6JYhJZCArfZjYmhbK7B",
  "key12": "2D9ttVuvwj7QkT4jr36Lo9Kc6xVYhZsqdrAApBQP5Uhhx2yi35mG4RaQjZHbjJrPLBnsDoQecVPVJKV85FXocurQ",
  "key13": "258snUJ34DgKxFR7jf8y6gfva1V2x3MsLHKrJLNqgg6EogSBBb7DhKMhzkS25CwGCSu8ETMvRu4o13jgP4DsEVb4",
  "key14": "rKQDTmAitZk35736rARUowm8anhsvehuyt4zjnZP19yvF7t8NhMKynoDchVgPWGXvEotiyHgH65X3ysVKrHMJdA",
  "key15": "4TkqfbPUEMivrZQZ1ekoJtnpVTTTPeb6HQUv3WQDbvfZpzpzytbF3faesVR7qeiZtELhbLLDCkFgG79NrWqKAZhx",
  "key16": "3e41oeDG5zD7s41C5N6hn2PxYafKUPduyYktUkftYQbZ8kynYB35DhN3eZD297DBpzXDzRSGowm3AyEmjvjNQ7UD",
  "key17": "5KCKD6HAaHjVkq2FFPBpygYR5RNopfDuQ1dqVEZqD9yzPTRvPnccQH9GRwv3ac9WQgpDa7mYKr8xLZSnpd64gDR2",
  "key18": "5koWwJJGVK4oASmy8k5XqEMMtBythYvr5ijB59saK7d1HdTFBdr1HaWgW8HpG5mVok817LEiDEnuYiarEQrtrnEG",
  "key19": "vEgaJz7vLkge5ptnbXqffHuJ8aCNkYyhk5V4xqqMVfGpNqZFffBVacPz6kmuTjxfptPEZ63quKD5LNm55GAcXTc",
  "key20": "5aUv2Bdmzw6gm27sjsC7PoH3x8zMX7WZ17t8QEgYD8DxLYSCTE1ipobF15QmRQ2nt4dhhHVaYmL6imzckttvfXMP",
  "key21": "5Sh9KdsMP5K6UZLfFE2YfnwyuXKr6HmipgP5LoaNK91qEZ5H1ocheqhDofLLAsvs3aJAZCtStwfSEDDMPEJNLtKM",
  "key22": "2ZSsUgQJbitEnj5WTedH2WJGQ8qEfQFAnEr24ZvrHhkauhhvCkeX3qhBwJhWqxcCHQEQMRho8SreaJYieqAwLTb8",
  "key23": "32tATAh7jbvdCNm3z2ZjvX9a9FWfPLApovGTvt1h1SWyp76Prycis6fbDpf3HR3xneHo7LaCPD5R4hnAyTtrJayQ",
  "key24": "5meBt1cR42N9ypMMR3M2EXcNH1aPZYa225yJAJKcJvoGcshs8G1ecGi58rtCZRPwWv5eCyi2SzFeM9QowFKzzckC",
  "key25": "WQVzFM66K3kC1Yrw6dKrzHqg5W25QKJrUWrT8eF8TdubiXuA6jrS459m1F14CSFGNg7yTqRNUcgvwKKaFRomeXs",
  "key26": "2DoYreXWPECvmPyJGfdLkLup8Y4ZqZFyiqRSsUxiTgDidZ44eLCQ2Y19Sj7yjyK4ExKu17YnxXfv92h8mpTsjn3n",
  "key27": "2WwuNbGvhAuRQZHo1qYvgLafrUyryLYRs5MfCjVh4MWigYQDrMijroUvsEzm72CuEM1zByE9ECmQDKiCPieZKg8X",
  "key28": "2Gzg7KQB6JNwL3W14eRTARD84HWY6RQppx4xDqPsVr1arhmF2CxxbqMb2RUf3wHy45eWFZ4nVqeYfcqfXK2jzhVx",
  "key29": "4Wu2SE3aZuzdKnrfTyFnrGmBYKtYzf6BX7AZxm3taoMw14LS4bYc7pV9WriFzd3xCzCf9cNuoekDTydLDt3VE8dR",
  "key30": "4tbAKgCwrfbfpZnKtDrM1ZYEdKNjco5a5ZPteHVyrb6aprEuN94cZjJ55qob8o2ecCtv6XWHYHJGDxNTeBjZviMi",
  "key31": "3i1cuNynNFBAwh2icarjU8h1AV5nPx2jrzeUSoUE2PbMbLZ6RnKTtfsVx5Xy4hr7yRAcppH2WorQuZZna6cw7NVW",
  "key32": "2dekscSEhYBK8WTY5SWEmgchdehs7HYUm7Akw8zn9KbT2vnXaS9cgjFhMbi8znxgTkk4ED1AffSdJ3aLb9qyt8WY",
  "key33": "36qbRd3R5yA44a9rh89SjusYVhjYc9JsWcvwEwqH6AQMg42KDuGhsrqtjQLpuivn4RdZEqHeCHuhyBsZr1LTbqgr",
  "key34": "ycHkoVkMi4TFJuCKuNS1mwdpGDA6S4caJVhwkfwHauKjQtNdii9wQNiohoPkHHVt5g7xjibrBgndNAittEctCqj",
  "key35": "5hXhtnreurN23T8xRXJexus1d9eujo9FkrKXcnCJA73tzRK3QBViy23926f43TYAZyoaGh38u9jo9w8TXp6kto6A"
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
