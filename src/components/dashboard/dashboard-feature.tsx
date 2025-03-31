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
    "2Yx1nLSNDtv6tdHt13FXTLDiWxikjonQFty5cQCD4UArBNiuwJPdvKpoBrzzvhMtEKvZYGfBpvhgEHDYoVm7fusZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SGhR68zCA5eMKLEucjwtL7Zuah8pTNYcs74PbBLCHGwhuLYfuPbaWLnNdWZWETpAVFjbrTo9VJJF5kdHY3t57FT",
  "key1": "64JDYGfxkuF6wpxsJh5zDhMRvdNk8HwbRFupdMo5mWcZqpaeKFWbCtSGHc1F4jxdK41m4hRn7hogyrFCrfrbfip3",
  "key2": "3wrqTt7zWGBURY9px7cABTkXqQndQ7Y4Xz8VhH4nEp7n5yfY7C11pF6zD7fGpcwQRY6c9nd9rsFmq8Nqm2vF3cU8",
  "key3": "2sBN3Fhi67MV874foMWKPSbaMj6ywtWxYiyBP51FNwPJrws7iTvMjV2whwGqiqJxbC3hicjXKrJQ1yAzZuEBcuns",
  "key4": "5PoiDQo9xGBsTkHuHo7c7dtBBxpqRNbYxTtky2unY4KD7DQ2noPNPdYLUfCauune7HEmtwugwgiTjADx7qVFGvqM",
  "key5": "5jPpd542L3qqhVBG2q92QF36f5bGLKrC8YqWPCgYRmN84o42sy6UetmT3WwvGoSzgP3QmDGu34Ta6tyKuC9WBao5",
  "key6": "huCNwtNQ3v3aZfM37TxpvU54TfYAZHfTbhNkEUqRanV1az9Gq6KXYD2it31WpFff65RJ5ssdGboDCwKKkgrYqkR",
  "key7": "3gfGvyzo4Zt1m1yssqc27vGjTzcLQfp3Pin38mwfFRWBqhbucavGkJJzMxDXfJSoaAMSVzXdeNUTLhWXGMR3yLuH",
  "key8": "43L86YRnR356BVk2HY1E5vbHf7N5zxVQMNzZnfHY3ej4n9DMLfAgAtD79x4EiS7khjPfu99b38pwgwWoQPQvTCCN",
  "key9": "4icNBJpRNaqKnSEAPm739WNLomcWXRUPDLbeziZQQDz9US9vwQYLnUeTWF3p18JKVeTVpD4KfEqDbPmXjAku7AUc",
  "key10": "2WgTnRp5bBvfdp5rh1jM2q5GrjF2DdpwptQ2dS8vQTzmDfVBg5FEQFKS4PmMjRsUbcuxACx3FnjVH5U9c6fC3ovL",
  "key11": "5vh1xncxeHQo19QZBxYv12nLBXZ7YX4T54DqUyW7D1amwZH6UWZYDPtYny8wBT8m7xUDwu5VyuAXaJKRg8kWDFMU",
  "key12": "2CAaxSkznV4c4w7xzN2A6GfAaptYFdcPkhfVXBzMUYJHpuCQLVQfvVgCysS9MCaiy8jWXXsmpBnsnesFYSfYPzVq",
  "key13": "4Y42wBjxQm3RWuRXMcujZJodTrpQRTJ9j6gtamyjxjUJhJf1yd4QqNUidbeJVNxKo95QDKcdKXtXoLcFm3oHkM4c",
  "key14": "2pHFUDzzmo2YMmPwfFWodoGPEQLxyKq1AGzDkTbeAjzEenwoT4S76gakqRue1LoNvEC5DTCCMKjS1wsYs16i3Din",
  "key15": "2rgQxczqQNXnknQUGSU3h3E4sDwsWq19yfPPQhmW4BvktemcwMNY14Y9wS8KqvvcUFPzW412D3WdpEorXZQFuyHG",
  "key16": "5hJzgtJ2v5xG4dHaAYqgJeBW9krPXd5qmWpx1yrdgPF9tziPFsBYKh438aaj31NcgsfQMVyKeFgwFtZxGGscEnRb",
  "key17": "5xJy3h7fun1s6KtohM39PwAnFCWYmZSGM2mRH7TQdMndmVqB9Me8C86cdcCsTjXQrPz7GEBQsMmViza8kXMCDiBN",
  "key18": "yXa32w4L9S6W9rg7LagbnM4ykSCZUzGQhmYLY4TW2qywtrb5X6PCModWAjvsN2yagcTME8P5BwySQ1Q54VDezLh",
  "key19": "2bHGqMGszPSUijjw9EDf6Ssm3yR8Q2HZCMyqqCWcC4SketJHZXfnxD6DKJ9fDFPAWzKnCV8fs5zWu3GdjaZQy5n8",
  "key20": "5EwYSCojk3q5QGeaXoPoZQxD9cmN9uqCGn73eRLLcWnYvfffrzBVM7AMUpnA3dNzYw44xn8saHJnGNhZBFzgJ1jc",
  "key21": "2ip7KCxgSR7Ks3yM4WRsxb9m6NvBgKWn7xyZ3sNgHEk5JDWvT5QdpDQ9im22KrnbeFUeQoYN1dT8sEEpN9UFgN9X",
  "key22": "2WWK7wZJWwUfCJ528rGdcq4xJ9BWe9u9q85DiTX5xeSZkr4y92qPcz1AuqMm8dPtQFEMrwxFr7M649f2sxoJHGGG",
  "key23": "5vPRrzEcTf4iMuUAxhZM4pN2ThehPcHbYH8a5aRFQNHxVU1AMcqrwGnMy6ecMdAmfY9mvwUneyD3n6gZqkhwsa3Q",
  "key24": "5ocR53w8gzEsY4bg7faqRozvrx2s1hVBvMdzSxRVDjj9kWuauUXBTbgE7sa5Cy81YuZ5TCFoUKe4vLnd2b4RtS5B",
  "key25": "221JHVgDHkuYM3GF8YFrB1V61xr3WaUThef7MbbzCJ4EAUGovUeSb7XaLzvzv3yh1WTqPtxzaJAQxU9JqKZNQNK8",
  "key26": "BwXygzoisvAgLdwuVe7u8pCvHuVosCDWnEYmHCeK9qkTwfuziaVNgACRahqjeJ5KPVkjqUAbWSpXWKuzDKaD1oX",
  "key27": "MRdoEhmrPQkTZqoRgS1pv4JrbfBYok8bz6gNxCzPwHmAXcvzKk3typ6p59hFtF4X4jvkLZZrNWqXAmryJEBxiN5",
  "key28": "34CyUJsYvsPp7tHePUgyeAabXALoYYtv9zJ4Pfi3NCyFFeT1zt5HBno7UTUCVxrpNkgwM4zCSNTswNwucxY7gyu3",
  "key29": "5ScHeVgPnUSsFUpuhtSqqTW7eYAgcdGaAYaUJdRoQaFGhGYbeFDS1uQ8RrwCb9hvL7Mx4qbGvTpKFCjFncjeBrTs",
  "key30": "5JDzKiHmtpbbJMqSXUSy41eq99Ru5ni4KuZTCkKBMhiT7grEdUXXugKKeqEtRaHMF3G1ehD4nnszj3vpZcuiZsXt",
  "key31": "3VfYCZzQYffoi6AJQ4oKkBFoRJj1Gp7KYiHi4CDELpMGSFqfE9nWckrDhLRYn6vrVTf6nCtuvDS8H59PTJKrUops"
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
