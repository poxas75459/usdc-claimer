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
    "4QaBwmJyUjABN3VUQn9PfTdC4KEoFQ4Px3T3WYf3GNC4SyHfG6CgKYLwyWBaKEcWL5GrLh7JeFTJwLASLUeCtEp2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dqCdKZYcty9oiau5D3fSijgBqjqgnjBh1x7aqn1SVwunt8QA1xfqG58wkKfyqmGRm1UKuuBcB2dFsGVHE4EzVL6",
  "key1": "TyzZB3e7ZirkVjmpQu5JYnMChoRdYicUmuGcCYDThVcTetAEQYvuypQ9C6umQYzp7wQ7DyCDpamZYS4tGwWZM5y",
  "key2": "4YTVoHTV46DAYKTcTc4SLFh3XqdYHAqfZMr4ffmXUMHx4A7M1PjDQaxYPe92QqM1xPjFXCWBW7bdjFSSnpq3ne8F",
  "key3": "3BR5uRR51BcqMprmYfQopU1QqD8KNQGmiVmTbN1du3agyp44d6QCKzcX54QAt9ni54VjD96t5W5LVrgiJinD28ge",
  "key4": "3re16HmMAiAqhcCT86cu1mphAQeJJt3B7DLbCYcVLt26gPz1ukXxxGrk1ue4Q4DLuG46KayqmyUr7nmFJxGunDoj",
  "key5": "2TAYzxrJt2V6dHWv6DZcTtc6wMLCdtHZYGVXH3MD2HvmGaLiw3cK8rVkLFZzQJzjtEu5so6FmXVzT3w36jg2aCzE",
  "key6": "2qzuqopu926AknQbRJUFaVjfXAZqPwjevcAmXFnhxFVjhcAYAqJsKMjqFhYURvT9qw5SMHxBSbsNhXjaofnkY8tn",
  "key7": "31jdwyjHSJy9HUxXdRzJByzX4ZbASkuZiCUKoScRAaSXBfPsB4m9JVNG4vTNJ5uRvEZpB3gTF7UVCMHFAqGMJi7w",
  "key8": "2nGr4Q1BPMsTZQAATk1xipoSLVLE1N4exesvdLiKFgKtaaGzJQNdTtcbGfVtAF5d5mUZKMCtNnLXoa1qgtt5YPhw",
  "key9": "23NkHSujoN57fu9tZcDfZyTj1WrvpyjESGJqAuTekUVjDGkjDv273RYqRNHP82B3Ex68pbou1z58XHGHhcY2uPM3",
  "key10": "2woJtkFeJRPwWcEHXfNd9WaKWPriPhoFWPuN8EZLLYECVV7NkxpVfS7TiZEzNde2csyaAcBiWHJ6QwiEqMcLkkfE",
  "key11": "5RcFwXbFSfxyvkHBWDJ358N9U2XjQgHD4bifNy1tLHw7uzJvrLcnwb1p9xBCMr9prCVMrqqtoJSH59jC4DDXSnXE",
  "key12": "KnfKXmVGzpiWMiJTtZu67u9MbcN98trg7TMapSiBcEM8PrSfYFtKgLyEFYfgDtdVfSdhYsYK3G45r3FMTNRJWoF",
  "key13": "zacMXXsG3r3zZBHewcGjzXH7DeqWw3iryXZ19tFJBYxYiLgE9fvqZ81eGPjgYvRxLVNjJ97JgPZ7YwtcrLkXzyH",
  "key14": "4qqiE4T36vQzDfV1j1CXdbNPdEPudUxwPKR7hUtVrkqgcKAMZf2JqLxXK4zriR17M8ZhSLT1FUtFvKZarGnmTJcu",
  "key15": "64ae9XDeYqfi9RhS9eo7Vea2ZaK51pfr72kzuavhHDcMPUZSb3mRb8ZTmJyG4symcbRU53XBhbUkQdf5AtTTFLZE",
  "key16": "HPj4w6MqbGWyxGPfSkNRxwTPpDJQMGxjMDXKuxFKtXv4R7bj5PPs8Ha5p526MQ86KpoD8HBE8D3oFLrAZxmMej3",
  "key17": "W9eC2f6x5sQv73oYVrUsaEjbcikWBHTubhWEWFaK2ekRet8T1bGVoo2hV9goG1E4XxXSgmrnwuVnDkBmLciT5UA",
  "key18": "4ppeVw2BKi82B4heHvK5QL9VKaQGB1BxgFozGFddYj3CJr6tjnNovg3XP3o699g6VFCJeeT9Bvxm6HrV5EvZgnVN",
  "key19": "2ixQAe1WRTmE2wajLkgXWMiQsAUYKShFPXcrgd3GFunp8pvLxdPbvN9hE4DW6ZVDNUiBgRQwtJTNQFxgFrudQoTv",
  "key20": "58T7ZV9jjY6u87kxyNVwMMja84XWtPF9szQ27krR6mBM2PaZXzcykQVg7v4aWvb8qb9VKi4CTwrLRiVQgupxYe34",
  "key21": "5J7jQzJRnE2kpgoXp7cKDsGzxnSVH1MsqSMpDmfAmqDf5CVS8AztRMnyEBFxEydZqsp55VXPToaFGHL8WktBK5Ec",
  "key22": "3SodLNhXvsqhHLbYBiQy1VEQ2rYVmX4vf4t5FvEQwCFf7KeporENonAg2uEZj1i2qjQFS9qcM6tQTXpyoBfwKTtY",
  "key23": "5xkoqqZxaFDKJ4UHDhkqTDiNi5iTZ3d93DeZVbmSocefe5FjyuUanj3EaaGV1MoiafGQW5U4c2oemcg8p84wSMQh",
  "key24": "42WQCxcPCYw5enmj5U2LGTt8ErE1DZbZSv32BLteZL75mGyW54oyyXfspd2G9xWqkqC62eLLosMPF2fCP4cMKZrE",
  "key25": "eesdz7sX8iMsabSmpsRvJRX7XuYEEjcAVp5E8Dev56sCtycwsMaSoPst855DJhbjk9jR1aS1bdX2QSVsUvUG8BL",
  "key26": "2uZQptykW3cbjgXMHi37NnB1KCQHPmkviyWGjoppd25hJn8f2sR8dgFwYo8auqB3x2s6pfBJDZZ3Df5rQo2KeFys",
  "key27": "4bnKzAaGZyUDEC3BXkGR3D2vtruhSTq9RMPyRcJg8F3Fza2U7kxqa61qdmLs9agUiA8izfmYVrZ3cn6tySkAvjaH",
  "key28": "4iyR7nRUBCaY78WaNUzuWCtPYBLe9aYvTtLJQNGESbTxcSxk7YrzkiYLqDNsrihv2B7tmsAQmLEzWtKcCKw1JmAP",
  "key29": "2ik5AebDXiecZXXBnFDejAMJHcK9MzmxoucCjTsDguPF82CL4fRT3h6x97r8WF5fLXnju4jF2vo6nAs13iwY5k2G",
  "key30": "5TfStLkodxhnthobu795pEj2g34M5u4DbGrkGkJjMZNYCbK6QoDDimGvuwEVUpia4hyrRmJuaMDeiU7HzQ7EkqGE",
  "key31": "2o4SNZyQo7MY33Y6s8QNFGeYyNSp2ys62Qyj2dcssZjXtpPvEL2YhTPbsX3veYyqGouyqqc6uZTb5Nuxv3fSuJHV",
  "key32": "N7bCyDkJruVcq4fK2Q3gq2mvjnYPTCqZaTsEXEeePbmLUZtJRkiRJGw5SXjwrCa21hP3DLoUtHzKpQ4oMJU2Tep",
  "key33": "3EjMfiwnWcuZ8HmstkiKxc1tsRMqSGjjvXC65LAwxoVr4ytz98YU11MVUdrRRA2J7Twcrpo6EtuJYPbcmFKEW14Z",
  "key34": "3ocfZaveba12y1G5aUc1dYXx8eoBcb6uZAXjBFGSpMZXB4kFtcXwr53NBP5hwx1dXWNk7Pck8H4t8kDSbt4yDJSC"
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
