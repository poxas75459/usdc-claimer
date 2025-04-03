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
    "2LbUHaEHD6nrVdv4GtNN4ZCYwYJLSHRqp2YGV5LDTbAPpzJdPGDtvzEoVUGRN6HUMzWYAuuT4exBkxoQ1Zj69vdB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mN5GhdxCfcWAtKYepaaS6Bp7DH33iCk2phgmFtMRaJC7pDhcT8LE3TgLkQBhQVAhLDKVKhE1URx2Eoq7cR7S7fb",
  "key1": "4ZK4mQHRKVe4EmUsdFJs4bvSfUWZQqdRAxA8XAgfh15Rszoot8dM2V9LKNF59JXrq4NDEjYA4MBmUGX65TGoqq5x",
  "key2": "2xPP56s4rn6R7HBg9kSreB61jdQU8A8Su8HZdacyraMr5KjuPDUCpmW1ThPBR4kBVb5yGChrCifXj8jH1MSL9vzt",
  "key3": "5oX68jMqQtcBCWXSZYPsXy462eRTMWjTRBH5VN2KzUP8tcFzcxSNh8XtiuJEBYLpnkQnRQs1UwreM8gVVdCucoxK",
  "key4": "pV2edy8VZdE62Y6NghYnVdtpUK1bgBxFk3DuRTyJwc2mqkZpHDx8XXHAZ4RmJLZmTFPVpcZXfc6FWptNsHss1Fv",
  "key5": "3iQ1bRoQhVSHxW5UsrF1FY9foVzvjEe6n6SUoGXjt7xdDmXvsbqb6bdMQCdxFyRejydPYkXMrzEL4HqkZqxUDm6d",
  "key6": "5fSMAoGxCXf7JrkSPGf8uc7XVsaMdPcjCbevuydrLhi7kJg8G5uoz4U2rh56UtosPSaDyKXcAqrnXjMTr9SxNjF2",
  "key7": "3JEJ2TSY4B9cGXtC2jRnZbnX4nbRLMfRifG325BPqUN7KSVDJBMeXBWiZxKuugGRjGDRD1x58i4FpyV7XBRti426",
  "key8": "3VnMGcTrzYx9QKWdaB3Z4DhTj3jrEqoKwLgsi5EmGfpCd3uMFbmHvUkUt3ySzqNYfVPMA8eJoDCnL8pgfFx3D7XG",
  "key9": "44vxnxUBUgCgVhv8WbXJx9KT9BWD5LV2VgmbP8zD5WAzC5GArnuCBjeAsNo1fGobTkaEx11WAQXwx2tYkiSx43GN",
  "key10": "2eja4wtZnBv9SowUFJEgH61rav724EHGnfogpZ77PvAdVGr6MMAhdi9Si5KbQXJkJqvwhPsVBnhPTBdARrMyUYyW",
  "key11": "4kfKcDdRkf1Jiigak8MPRDt5okrsC9ULoydeYAfNGCYtgVDugh1RVU3ZDubnMhPA7bMLZXLQTvxVUTTePg5Rh9J2",
  "key12": "5fSjCaAF3GhJfm6jhErbNXCRL8jkjRZ4v4fkRgQgchmt9M1oMQuPAP2Jnr7iDg5AAbiMmVqEbCxrxGFfZg4TrxSU",
  "key13": "3b63YoXQsUBxxuTxmopYe7UpZd6dvRSCxfGFHS1keyXaQn9HHy6CHoYaVH8L9T4Cf6vfDoHXeo4inLEKLsg1rKdm",
  "key14": "3z1QP79PbS3nZBXvZsrbz2vzm1LfXPpWD1Z97Pt49EvSV4BfJ2NYcYd9orPDPkF7zPkFtKXhLbHYUKfQPemML89z",
  "key15": "dBTkfHRN7GG5Q44AUqfQk5cJfA1gyENHUb5KNqAzmpQVguzRYJmewZriiWasTBxi4tz8cDu5MPyRmngiuWUXuuK",
  "key16": "4b8TWkxPcf76HegEW1wwsCMPXJMsm5jiecxsSrJAbVpnuFMM3HvyHqndqJ5a8CJrBUyxQZkVzpGdjYDhEoyMVF1u",
  "key17": "3nxG2C9ZGNakpmP5W3BftQQ3idDznmhGKkU5hfkFh7kDnLbuQ8deyoZVKQKJ9DKiWMCQw5eE751tXfgz3Tuvo4sd",
  "key18": "2ALdGRdpaPV62Ep6gnqBUEdzT8z6qE4hsgyRsAJvRpufyGSXikZu2FrAf48EXgkerFocJBNzZk3Yp4AMX1gxr9xA",
  "key19": "52hH4DtambFnsNfrErf1xUyjKvJ68N1NjYoJqzjNJva9T7rhwcA6CgzVESyAFK3ZsVL2oPwPXGhjLvuztj7h62tK",
  "key20": "22XfsAaLoG2MNJqQNYVL6vSvoZPcEMBSi5rN9sNjSnqe85woEv4qvo19btpxHnb5yQri9J1bwwBmmyk7shhYgtn2",
  "key21": "5opfcw3yBtCPo8YLNKB78cfSPJL2srQj2vCCNhQ2PAXKqX2LaFRRJYEF79gMVi1CZ1CTkLg7Juuga3fQmvPQjDaw",
  "key22": "4nitqtcmbs7Yy6K798bf9GymisRkyBBdtPhDgmLS2HbPaguw4WWFJMHCsrhm5uzWpGvQCDw6Yf111pzTgjp823yL",
  "key23": "64KL2aY7QEExafATSB3xfDzw2YUEwGMd3kVp1Qhk2gZCuFZZ9u4nu7tWKNB1cEbKykfr4hx2T2XBWATqGpL1TXCt",
  "key24": "2ZQFQLpFUrqZorns8MztehsV1FJEsZ97CzuMHvPNKgVEoV4wmvhefL1WPAs5wLnL9T7XSGFYW22XfzWWtaxJ7q1f",
  "key25": "2gKX38p3Qk1wVEBtd3jNZBE9GSzNmdmzsa73LqJryiKeFZQK3e2nxYvRKK6PXFRgJ8fqTb5teuPdcV3km8qAdRfd",
  "key26": "564PundGyCKkjpq7kKeyA6Qqa8fiKJExaQbfJGC1G2yXeuYeQMuCww1S8yTgN85Jcbr1UkU9trTarG7wviHfLUT4",
  "key27": "4o8U4orKHMHh75gZmJKwGuvaUniPfoJf6ThjgUHvsWT5xFiUU1WGqkxDxdV18xD9FFXHTwkPkHRcX7UB6SEV9WVt",
  "key28": "5CPZqaShX1c8r54TNtjfhXYNEqD3gLvxrPqM6fF5CPmSpjkRDhZ9AdZJqraJFmE2yK71fKSqFNHPqrZbAMxL3qMy",
  "key29": "JY6VTQCdzTALGH9t7hTAZPXbhnTjCmgNbj28rnoXLPRA7c46UsTVibpbgsfwkNmzJhMkC8nnR3xKufw8GpvhqAi",
  "key30": "2oSVGfRUUm9WG1bHyLtZAPXxBCaH3i7TTmobS2s8UUz8UCAfxojBMHx636e6YciSQAgAsJVRhLhJEtrn5p9erz1x",
  "key31": "5N9adeDAPyh1XqLn7V4ktYpVjgbVZK83SuC1HJ6LiX3T7o9hmdwYJQxAvVzDYusvsAYq23vdhGgh9JkcRqhopCZw",
  "key32": "46PwfzSBSHZeShtGpTnfDDamL72ftVH9YRi9Jk9PN1oRWmVr5kupugRLFqpTA9c5geAj4tgvkTySEmkpAdVAugyF",
  "key33": "2S4C5p5P3n8kLKJJNtd6st3iuov6sABVZ1oLcCpVN6z68Qe4LvjAGeSnbiBjvMHLbdcNGcXnVjfMPgrMFoELbyTf",
  "key34": "4LQMrMTdMkuuXb5BrHPtHZ36xNmtPtt7aZgJ4L8Zd47N5QmnytXriDnQTZNQFP87DXz8yZGaw5vhBT5NiLJzRBXM",
  "key35": "3JqcFkdsFisHJWJGTWxmBJnRuw4Cry59zd6YiqkP3LwqX6Rk3fYNixJnnvxrULi88DN9kowdKnGJSVyg9E2vKEq2",
  "key36": "4ixp2CCFLY9rmmonpVQVEjv2UVJfK8Yz1uYhfP85NCUtmSJbBB8UqhRJZLjrFXg8KV6L3ZW8sBurU3G3rFP7n7yz",
  "key37": "5cH7xRNpVRUa5xVLz7vJmCryGoLhVZfBhLJ5Gt8zYn7YbkmCc2wffezPXLVswwHnPw8jbs6sFXEMGGtymXgT5vUB",
  "key38": "nomBHhjFgWgWfP3tD6oBBdcMbkxDFBtQ4PKcM1iNtjvHh7hQzcZZLg7HkDM9ZSAVnFkPWYpETrgqi6aLwccViFd",
  "key39": "wZ5fhEWB5CF2EP1b7AJjesowdvqsf1wpNPkDgCkwnqJSsTTQRdVBNamjAzvYPgshF2NJXe2viBeTZCfSDMy5fBX",
  "key40": "3uiLQuFANUF5GG1iRSVMAnzaKo1gYBEp6EwCNFe1fo6wxTEE9Bj8C1qdeX1U9Jdqn3xRtRJXYn4G4DMQHjaZtE9f",
  "key41": "3NR3Jb5MRtNL4yxwoLzsaFQgj8LhSm7FTiFrctT35BgFrT9BqqcqqKPEU9itiy3X3MAfNnugYNau6ftgFiBVA7kT",
  "key42": "2nanjoWsj7AQoJziwfyqpZh3zXfJTBGnWcUmPt5ekY6ptYyeQ9gh97k1kKPMUr5wwtUCLD8HtiRPHfT6WxQyihZd",
  "key43": "5KfS3qZ4Vu2mZ7ngXghLzjCQvN23omndPX8tiZZgZpUfjiy9LrrkTip9coz8qSZrN97Z6Tjg79SwMpkQGaj5MukY",
  "key44": "2tGPg2d8FXUkawEeMH8fVoyq565sF2Jye2jsVNzKw92hdro8vRP6gMt17fsd4b95Phx55i2ofq9fzmNr6LoZiZgY",
  "key45": "4Y3fWtXYYBcaUY9dbEK6gjnYzz5aZfdFBy7zuA6pUXax7zsJvv8XbpnV9TqV5UocyKvoBmjzhCZ3wvGxQf5tMwBJ",
  "key46": "5MfoW93B5M5XMFkDvS7ev48gbprqqMEpTQRfvpLgi5cq4sxrhDVZVu3nDP1ZgwkT74X5bVYmfzcM1pT5EKdPYbKV",
  "key47": "3YQb6t9dSg1MDVVHmi5ekxYdqQPKZzWL5KtgALbbqGzJR6FU9cA8ZPBGJBB2n3hX11QEsTQ6WYZXdeXgoLQ1WL23",
  "key48": "5Zbn7yJ1GJb5Ummo3kFiT92CwbtT8S7TgoXznF8vtY75N4Wc8gQpA3SAWZsqKs2ze6b1UgSdWaAfw3aC5P6BUFLp"
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
