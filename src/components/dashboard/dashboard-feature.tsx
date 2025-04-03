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
    "qAVpZKWeNsnwRRFba4yn5vzrFuwKER62p2WSXrc2f82bZ4ZENGMARxdcJonsnrDEZcbzKEoV9971oQLbwdhc1Sw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yEa3jp6t7yqWcWC6UJiszVofmmxNMjrKfyG7UkobhgwAX6WnsheQYJBmQ4vyQY26jXq3sE4bnjmAj57hx7uGQCv",
  "key1": "5ytppXPuDV8cd6hXo43KY73tCBnYCRgXL5UYtLtWVdGrWStwTxMkkjFW3C7U39VUWyHtFD8Nwx4Wu4rFxtMbt5mj",
  "key2": "4PTmfLERxQ68B5zqthCrLd6AGKscedtN4NGh5inWneyDCnPRNvycEzWRjab3hQAkj4SgCYGSYdne57e4kdF5Un39",
  "key3": "4mLPBzTGShVpiW9op3yyiPeDXdfqXqvLa2WgWDbvXNjqJDXpuvsqjLNk4HgbUK9oWu5ZiJVwLnEaiHojqQeT3Wsv",
  "key4": "3cuPwUtQvQsNaprqVqtHkjbB6cNwSGw7eYzXDP6wpMRERvaihMEYwhe4XHadC8f5FSbnmUL4VSkkB4bqhSZUYTRk",
  "key5": "3ZLDciiYRR2rmPd9YQ6N6whK9CwkqtkmNgWCMsZyhELbSDAaZgQNkwohhtZ7ttkj6ZGGdJJDrwaf8UTEF2Lzvu5a",
  "key6": "35kBYoiqkxMMzXYn1WmfkKvk2ZmnSZniRcRmyZoiSXi2xNm5kvL3BNTd4Y9ZzEQuNnUjVvm7XxZreGTotaCAfD8o",
  "key7": "4zoUQpWjWus9ciL7UDHJXkzrrbYWm5SD2zT5suPHkyEaXng6kwkqmEDe2WLgNWQD6SyKV7i2w49uaa1qnFvKGA3H",
  "key8": "2b3Ho4pybxbzwgRLUm3bKti6iMuz5C3eX3WHCjKfZdNBxysEb5VaWCvkSuG1fKEn7Y28Wr39bocVTHm7BEf6CgVE",
  "key9": "5KHM1qp8cRNJxvmCdgSchw7aUqWwWH5ZzJHfrMWZwmy9VMor4yPNu5kbaRMAvmpQKndrTSxWVNxchMmtFgQ6rnb2",
  "key10": "5FBGEPo5sMQfPENPF19xti44NSz28qMsfLuM5fVv1E34ZpCPthEnUPinXbckQezdakv63RqT8PtbLo8Gq2djLTod",
  "key11": "2MrFJJQU7SsnPPe1UJHiUMy4859a5CjDsrY43qT3fo6nrSDNPsyS9sAHMg1rAr8fHr6ZZND1cKkLjpAaK9z6w1mm",
  "key12": "ur9JfX5h9smu3WAWJLLEhPcacSmCqUUeFaM5zEhLW3drnvqzoy3HopkDJKLtUj3eTuKe5Qm4aGvozPtkdJergDd",
  "key13": "xxxt6hSkMF4hQEffxzJbDWYVcmD6THtwNUQJCdCHkpgvvxjfSNi9R4i3zQCNSMZLwiACRyjnZttxA5PC6TSrXaq",
  "key14": "2EWQtxoDUgzzsYBJbyRSkUTbuaga3yv2xHAtBojiB6Tx15jU2vdzX6qMLWSk95KyJggVkyMEA4itwKwmAXwg67dn",
  "key15": "RfdApuHSJNzBciqAhGTFXaXF4dSjeczSPnFa8o6danfL2qRvjzG2un4cYqzV1LwqWe8kGNHGCtvk3re8u8ss1xR",
  "key16": "4mVxLzDGxSzMmdQfRqnT5zBVRbVSUBFrQhbRJcm4q5ye3mimSAatFo6SQajUaF6AA3zctfUS99TBEvcaC81Zs47s",
  "key17": "2oDex2oY33EyE128fsVfS8UkvsResPfoK1ZVdZ4WEUAMdaeakkxg16wXG4nuPAP4B7c2dVgtxiFh9USJdqUAbvvv",
  "key18": "UdzCgE9QumvYkMSufhofDoGsb6uza825qfKkm4W72adQS27DgzhzGr9tagriJ6oxXYcSutfi2zZvVk7totkz47i",
  "key19": "4EGHVAEMcQHx9hvGpNxVWq1N6d8vQfTXNUA8GHr3ShkeNWoe6wUybgLpHPiMD5FzMMzzqYon2Vuq1iLE7QeArwwA",
  "key20": "5YSNRkbEA8rpFuD1eSEgk7dF5BZLP2FAKAM7ksRD7smAVSghMFqFZcuWuUwMGJ7SXbWnWbpyrJfoD3rGzgdoJUzX",
  "key21": "5EZ6XojVwxgwUgfv46GH8DKB39nXtk2P1VJ8wipNzC32ahVhV8A16hU7rVFXuMi68M9VCpfPXiwn3VoVdAfyuDtN",
  "key22": "4hdqq76A4UnLFpR5SZRyQhBauhbnK8mBueAG2LM42AaXnUSeJE97MUhaNo5MN9ukEG1rtKmNR1Z9BSuUcJiZP19y",
  "key23": "TJhFUwvYWmF2imuJiKLJGAwTP9N5RQVXrqykUq3HZWup4qCwrXKGijZcTVVHbJXeRpMLhJ9hJcPtryb6vk92okP",
  "key24": "31cUupuRSjaJKLresZ4zcHPJTeBqmYyFSrPpc6UPFJ4TzUuGHYdCQhmryDEz7RP5JoN62FXcYQNUfzNpTV9nFo29",
  "key25": "4myGfqw7j7jUwiEn2q916WqrKDzPfHA5UH5EArPDjhUoh5kEJmfi6EmELStc2we8VNvUK1e9KCwRvAKtJytLJso9",
  "key26": "2WFczPndPWeg2pBL3GhwDhcR1kaTGS3N1EBe84hWNbyeKtpjK1CjuuaSHUTY5CNwEte7c3LsrHAfhhMFRkgUwNv2",
  "key27": "5zsj4C3krZi9vnPs4WmqWynecHHhorTS9mii5ihkvg6LBxj73EbRF4S2UM8z4CdmnAbEkb4zpwGFB5R94qv9FaGx",
  "key28": "5qpVgd6hYyvQnqSzfsYaVoac3DzP7NFYVdqbsBPGf4mxJyjz197uhEbDWjEw2hz4ZhXW39gFMJ9AGWiMwQQ4eLA5",
  "key29": "4DzJsw4UBDxTs1bc6DWFwTqcZE2eX3AVQJkZ2AN1AdMBzCoAJ5WDeeV7HQ4a7cMuNNCTp8j47xoA6p9trURkZmHS",
  "key30": "36H2a7mMDBK6XyxoDPhXGMXuKzrthJPY7XpnQDJGc8DN3oFm4SXf19AFMdzbbxwLXA48yD9xbPwWTYh9rHQiPF6C",
  "key31": "4kiD3csr29XxStqjbrtE5ioqV7rnSBFNcSaDK3kRS1ZdkiW7PU64GdL7gFbuqNYEH24tMSzGYWGyuk7Y5vB6s5ki",
  "key32": "Gc9xw5BFsMRsoTCgNNFt9eJcAAFqSB6rdcd6LqPKq2MbECGnffVSJKtn1kuV8faD9qH2irfh54a5FhWp3JkJVWn",
  "key33": "5AmwBCeQe5NoGKJxSJQWz4TNLUk2drQQTf3mnKNovus8Afd3qqdFNMMTHjcEKNnPkcA3CqUTTJjSCjNGi1pKcwaz",
  "key34": "2Crrcco3HC2ajNjZZ4QzWi9ZYk4mYLvRkFmWxmJym3j8zkFoC2xZ3cnVAABYpVuvShwozB1PoxJwVmWBpWCreVcv",
  "key35": "4EuEjahwtB3FDCeXm4ReT1cejwHYEgskD1nRS3T62c2MYA9gRB9kFvtbgRKBpyXFiF2fWQqNye9CpARZh6dWSQLf",
  "key36": "yZPt1xDA5NwXX8jKEYKDNKxBrdNEXwRZ61G2a4FTd5N5kT4HMv93xWRGdTZg6JUJTMxKJGuf6wP5LDsU7Eu9zhg",
  "key37": "5Y7QAdG5eHuQNfYSqhyGKtfmxRGpggjP3FgYAzRzBWhKudFCkvgqBhdcKyqq9AoXLM3gX9mRvwT3yu4M8XE7TFWj",
  "key38": "4QgwtLzWsaoDdhhMij1HZEmkEQWSLZ1z1a8edN84gWH4S1Snuqj7yaji4nvEHAuuyqMo3jSYjax8CG3PjA5XwMYc",
  "key39": "3ebWNDvxatKrYQto1XHK1AwxzVy8rt6WoBeLG1j8q7eKDVhb71S5VCM5cBB8QDq9mfALR9buUXDebo73pAy3rybc",
  "key40": "3venE2mH15hn6FeoepZ8vupb8p6ktGcXg7ivSkZ1iZCeV9sPVp1EJTxegfujhyHD8cgSwngGLMrDEdXCVuxDbjbQ",
  "key41": "2aF4GwnmeCebDAiiWYLTk1fQ12mb3PXWPmMBbbt8J4ot9j9mABRNz63HqHNWpAgDmRkrR2mcB3xYJCtJDV1hbP8n",
  "key42": "39QzGRHPoGSxVxt3yRCvxpPpCAVt2mrvoCbB4SnYqoHtk26GtyMbuW61uJYxDMZje5yh9pYbi2iEwdmyjobFPfYM",
  "key43": "3dUjxU4U2xgQTaH1i9yteKEdacNXKPu888nHGBGkcYcToepU8ywGrN4ds5WSSdhvS1sMWZa4VVpBAab1cv5DtRN",
  "key44": "4qHy8mEoAdheF2L3M4ZTeZD96Zg1G6FjXaqQSRCPbZ42dqx7jBHhxykMpifdb3hFCRWzyCZ4APTn9mjc2FJqyKx6",
  "key45": "2UcekpVZmmXnvrHBk9oCnBMbC6kSMGAwM2yprP9j8w8236TcD6K2WH5wRi3gJ9ckvoiasBCEVKQvCACazTLUf3B8",
  "key46": "3TE2SBzf4vRyTSnAieb5Dx5uTBkSn55BEqLKcqGRBnHedeJyfbkgAXxyg9qwNjcDbqqDuGv3abwq7iPBAtwS9Dsu"
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
