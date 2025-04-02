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
    "5ULKhUD4jpdVB5npoS3aXJiQJrsYrXTHfnkZk6kdMCrTVAb8y8pBdUK5pVA22n6CktVYKgmtBND3fWjKmCgDCUDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FmQzCD81eSXXjGRTxG8AG4itgXMLGsFWBrdNG3JannSyAKpGKT7D1J88XPQxD2LBs5RAeVZmvsdXH9VH4Zydvag",
  "key1": "2qJzcfjaqWrZqGmqJWbF3D8GzqVch77NsoNnUnG8NDbFgrNJAEuhX77R23AbtAa4a2HhjTACiUJjyAm3588osRMC",
  "key2": "jKEAXaJHj54B7rkPsnKmFtUHm5HPwq2t2DdKubTeYHXoiCze2VWqyQjKQ6hSwLmHUx2MvHA9g2ZsjSw4pWqzHvX",
  "key3": "UdF7rmqAHqsWyANYMmFv3e2jp3KoijpdNG8PfzV6yXRS6pG7Kv7dz8VexVRSMRB9Xtv15BCNk9eET1kzYagu9Zn",
  "key4": "3NvKPBtjLAN2Gqs4orzuUmB2x5eZCHX3wEubZrtkYy5AtehfXA79LAxZJWzbQgGgNSLmFgNAnazWijDkzUGBHu5w",
  "key5": "3DD6XiwYZGSQcCieTUPf5g1BkuBWp1MZ14kHm47KrxMRLdeNZVndJQ7A9XHP7PnYTTFkAHFoNfHne833yNpBc96Q",
  "key6": "2kR1EJmUWKBZ2JvTXxcK4At2X1P4XoJWSdbQjpDUQCb4AvpgK8Bnyd1NBrKBZE14o9sQJym8M53uKApxmyoBMmyd",
  "key7": "2pnL92VkH1bSLKPKzJ9JCYMKBuzBXPKXruXigGxUT1cxt3aQbGV3Tw1b6At1VRHvxeLMzEBT9umREUPJZvy1qNuJ",
  "key8": "3DuHTeE4xdYsVH2GpwHPfYNZp13Y9vZHysY3DBQtcCxPnSNkKD1ThaPQzoHKmPG3A8aiYRvk3Uv8tzyjVP3ypmcP",
  "key9": "4rpZJXsSjwKSBZnbQyJBpyoRTXGSSy68rQcr4UUrKsdFyVQb5ScHxSTnKSMfm2h1sjpJ5Gg42FYXDp2RpNU7GH5s",
  "key10": "4HuX7AxL2DHZqQrPaoa3gRoaNHPvoEnBX9psxZkhprRhrKGfYsfMGC3qu43AvTPhfMuda579E4LFzekde5pdtTn",
  "key11": "3heVDT431Tg27aMhVLZQXDveUgLk8kJQDf4wU1TY6nNneU1Cxcwbjsnq7yBnB6q6Wq9LhF5Le4jztsdZJg2w2Gj",
  "key12": "67PJxy5B5TP5mUvvJyBuviPfYyxU5oYyxnV3EUNAotocHS6SrP5X3H79PVmuyQwaSP8Z39TzG1LejUUU9Ck47j8K",
  "key13": "2z6JkXeRJP77QsSRwmpLHXzHWLGpR4Y3vLkwTkexwgpR9WDXs5JU5KzPRfVqZkVqBzkcDJJnxFvn1tUWUr9NBpbE",
  "key14": "21zNZdR4RxirV5yAoCmd1wKoAFxxsWDSo9phJvDQ3SPtXoEJ4wXW7JoixbXmwSndPy7hiiNpBMW4S2odxqi3oQEA",
  "key15": "3vaeGs7ZcYQaadrQqEcTxgHVJtJARsAxtyeovRDw7MfxvPqUdHnoBhamKhr6XzPQhxcxMobmsNFfSeQnUyHr2bhH",
  "key16": "2xCkgpZRieWXd1XSbCsZAshh4eiwadqNj8MPpUPwWzmf56iWdscLu5LKBv4C6bCBPLCuoffLtttwbDZw8nYJgppZ",
  "key17": "5SvTBfkBtf1tiqokX6h9YtU5h2yk8JRRG14N9T5w6e5VEKZfTxgHtzq6DbVpV63vEETmnQKJujRVJz9DyagKAZGu",
  "key18": "2bt4NenxsLfJwH5PQaHQT1ebpqB6NBuE5oFd1UWZLtgHfvPX5PxAiLrCootLprZJuej3uBgCkRstVbR3djQrYReZ",
  "key19": "4jnYzKWwJN9UZQLdwawnM5f4nJoNvbHT7tQPxqYnAVPKETLDybbBdcTw2QYTaU7qsQoh1kwXq27YcVMdg2PYPXsq",
  "key20": "3wXJiW5sPghcV7UGgVSaH3KvaG5gRzpJStEA7DHtk85w3ru5EQtabyUXwNUTKHUUQG2hKtH4jtnDDYyhe1UfQRD7",
  "key21": "45t5vetjYw54Zsei1ZUAwcWJdPXVins7GWNMELwKVZCCXXW2wzC6CZbrymH2jN2b78VcqY57WLN3oGPsbUCdpqxw",
  "key22": "W1osof5k9oF7Qm2Zm2vzV14y4wg3qxpR8kkEJ6er7Zvvkkg5L8juHCdScDZ11eDcL2d3s1apjNYzb6xqAzPhsoE",
  "key23": "2k1EUb7qygazTZDGSMSt2Ly5JUDL4EQHBLefMguF8KugXch1govNjjUKWy8eEDUNhuJfW3uhkPGYUvxxMGhm1Kyh",
  "key24": "WaT4JtzWJsiBjayAR5NDFK91yAHse37M2NU8yNxvQ5SX4c8ZDy52TMu469APU4sDE1vZCFcGnYfsy25dTdGp7oh",
  "key25": "4vCA6yEQNwixMT6Wjouf4LHKFTQjFoWBMWNY9iopKLM9UudvdZkhVASD2av9ip8Wjha2fZnwFgoQQQtSNfun95VU",
  "key26": "RoqU3tun1sBqcyrNwYkZz96mgEFbGJ7YMLKPQTQY85RbZhXYsrKsGxDc9oRQmNFwTP9PWmS8AxwHrzf5hP5zLBE",
  "key27": "3QijeQrdXriUa8tenxdAC4jPuYHh25VeVU3VC93k1vqZXbbsKCYyvn2mtNgDgkXx17kJPpJdXRoKvASDPD9thQwd",
  "key28": "2LuGMak8xidkPRNWWtgKBeX2QYwWjNwcK4uGAAqxTsEjhvkWKjnB1yB4SJr8F5NHY44tsxta844Q1pVsX7LxkgtG",
  "key29": "344jHoKpfEdjtbd1tujWQuAucU4ZyjMoC8hTb1tJh6kU1gWDAkbkWeBkbndMkVVCvjTibWnUKeSe2Qsdztim2tkN",
  "key30": "5HbDJ5FsswWVYsH9cqpDiKs12RWwfJHodubJEocdyvxSAFGCTEZ4ACBSm28pMEd6UcKGhNVi5xs2BsPbVLidQ5FL",
  "key31": "2bV3iqddrKds6oYqXsSQBS8ZxwgmUZQDSjHFiUxA26KgKGNW6wibcHTUfhn9iYiMpy6SwjeAPuoAGdS5T88Sr7Wk",
  "key32": "2dU9pV9yZjqwDhduGeWVvz8Gi6qyWVxChxRepFmxgT22JZUY7ZZMW2kTgPyfStHE44MrQ5g7zttNxb1RV8L2oZm8",
  "key33": "5wYDhqf3i7BPfBWV75VmjcMyuWBxMrwes6wJavN38XJMrdBs65hhcXVZacZuyY76qjpTsU2w7VkAvVxu1ZXR4qcP",
  "key34": "5Nu3SatsN8QGRu5Y9DjDk8KBrhabg6TxRq3fEQtRNbAob9y6HHRTfanDfRSmmzKNA2zVmocbMWKmbkVMQQ6FugCZ",
  "key35": "65Kb3YuQm34Lb2m4LPsZAQiE2BaNNUsZMxc5TKPsJxqJioZ2o4hnYNziyayBcuGfCh7XbjBUDghgk5UeSea1oqMH",
  "key36": "5x4Md21csvcRihkPw94yRQ14DWrBMMnqqY62JY4PKMKzkV8HKSjrx9RvZbvjMqNfwKrb2z3gkNZquVq7ugWqTuau",
  "key37": "Vz4LXK8Y2o6tsL4cTTstuXTTNWKJYNQtjQGaFQhVrLxj5ucbej22mM8RMhqjGhmA5UjdQ4XKckrAuEe18qq2uL8",
  "key38": "3MjetapfPf6Hxeqyt74AgUFV46yWvsNa9Dbn5bh1khxM79zM1ko95ydyHUjC4Y1HCE6TTwqFthnP1iqAS5SBxWMZ",
  "key39": "2qmfCv48nhsJWCK15YeeMCphZUhVWFiiGZ4jykYaHc36Romq9c3U8yqq8jMbnxQ3QLa2Z4PfPb7RpEyy6WkcmDPP",
  "key40": "VR886tga7DdPh3xmjytYHD8DaqabK6HbWCdYRRLBCxhGBDJaHrGRP2FJMEeCCuG4QPqFmVz1zxajBaP2xWKSXbY",
  "key41": "5wiftX6chrWqEVpatjuc9ydjWo4Bi5v6JPj3RuF13sqT2aRhWjSYfPpxoveHoDVMa4dhPtjY88y23sfHXCbLKYwJ",
  "key42": "3fE6z8zNuHgeLaopz5DA2HZPvyn6UxaHXdTsPKeTXvJkFFpQ9gjRfaRwVweUKYipdWxUJRG2DkfG6tk1oKcQE2v3",
  "key43": "EgnhdXnfaJZowBJjeEZxjBNSceNj9mLgKgk53uPpdYWq8LA6pqfh8UQA4pNiVGgSoGRq6GT3dH7qzKabYdXSuom",
  "key44": "TFUe3uq5wdpgor59jR5PtiE4GZsDKKbvY5ABcJUxHHhvyN88pdWG6ubHSb6xmyEAJS33h9bESLoZmt23B5JZjU4"
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
