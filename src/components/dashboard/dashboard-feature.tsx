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
    "3jb6ySikAn9H1NoK872WBR22i1DR7wSaj1EHckJdGVcCXd5pgRzKiPhuhT5S4dzZhrnV39FDHwVJnsZfyYdxM4sQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tHAoAZT34HAwAWEHNHEUXDSfwJkVi7aqME7Q7gjKXRMT22zBoVG8LGC7AunxAtqkteu6mWrh5NaiTg8HFdFHRHG",
  "key1": "2NV15haM1SvWnztNfja3G5HMkxcbKgWy4gqcjTA2Toz4y3hrV12R1eNXjucfqxZYtRgtgApD6VtswB8CNuXBYpEY",
  "key2": "3UZ2W6DMKCJva1XfVTyp1GaGbsfJt3hGDxyAzJX7cdZrLHy9kDiJL3NK43fhvegz1MnThAW56UGeGQWoDqWnuZfG",
  "key3": "a7P7AP87v4vqpMs7BVB6VfbTqSN6Mx7jJPmf5GmeutaLKpkz1edgNsGxBYiexCLHKwLkJTw3XchDE2NRnn3R19m",
  "key4": "2B6HSN7gXovqBdkgaEPbxMAhgd3FjUoZ6KfdpGbsgKN6kmJCdHjjZ8mWLzCwPx8qnCEAiuUotxvU229D5X3HnDVB",
  "key5": "5yFfNUJUpojZKxziuLFrvkmkXS2MWvxqBMLZrHTjyMgwxW6ktpyWmyUmgzfH2Ua4JH1y6Ds9MnijWaNc2qjMPAMQ",
  "key6": "3G8AW85uK1P8chjcRzGsJKYDAW5U3WvTs1pytrGHAQHn7Tp4wR5hod7DUDoy9tQmSmqkWFWeW5XZgbbY1e9HPRez",
  "key7": "32UWFK4mqX4EAPDfkmT6zyRvvfPdce89h82JMVwm6GETHJX8hUaEKwjcTv78xizjz7zmBH8HGPEv1Po5epseFgpb",
  "key8": "n1QAXYTH6ZeyXE8MTEwxYKLRjPQNRfJytbkHMCVtw8EgDnXEmRDTKnLGPSMiRZL8n3j9FzCfbBzHD4Wfxuqsa5V",
  "key9": "5u51c4rfp1LGoycXVqVEWZgrs44CzwRyBjvUnPQhUvC7V2spDto3S9Hx79ZDoNWmEbSU97Tv9fp5bDuAFJHFubDG",
  "key10": "5vayv5HUNqbvVd15YSSWXjYti5LRRaAsHNjj4mjMXL1YjDV1GQ8SGJo26QaCZ4q2hLNPwt1fR4ysYqywRNU8KUqn",
  "key11": "4Mq83BoAYY9tuKinDJBskXH1xpLbBDh28u5zjMU2sK8UuumyrkPnZCTnrePosXgVbXson6KHn56sku6Gndn8Q1z2",
  "key12": "5QHPqggwStPxk5C7q53NqNRx88nANMijoMUySVwpd5y9iCMMTQZdSkQCNYqq72LuTsHp4Uv2VPAShRxGrZp6nzhB",
  "key13": "5KrLCvmbsWgkrcoUatCnSHHBrg2YDJEB7E7w71tmvjjb8kGTRM4CrznYz92J9EkTg6h3WPqMAp5iwMYThtQjgqUw",
  "key14": "w2wygWjrcQo7tKdFQCJWdQRiR6UemzpbSESgRCpnqpG7Ayr5WfwRseGDjiMJE6Qkz686LRF3VqfXone79GUGS9P",
  "key15": "Ek2brzvpuAeToZVNdcrxqyLJ7gu8NWpvwT5bVE8XkgsozSobL3uYMrZDMCdrHAXMr4edWwiN6bZx7mxFhc2xrdC",
  "key16": "2umVwB2YNJ2s2qWRkP6UT8TqqFQMCcshQTnVnanhRKWyJb3Epi3HxBjLnoUMGTxuuqcWDufPiGuEzY75HPoVYT9e",
  "key17": "67XDotjmGRtmyCoS8J7MHK8v7T2T5D9E5P8TqWGkghaQ3XMg1cKaZyA9MZLxniiAUDU6Her2FiJoi4RtJFhySpS5",
  "key18": "43cjFsCzJzx7PnQGare7q3v7Jm2QJZjqKzA9dKZU2iqHV4C7m1WTYBDTwqxpKcTbeDPxAxMM2kj9SzLfeFVz8rjh",
  "key19": "3QPCabkWF11DDZcLzQFvqQ7etNDcnWaPpVFAfhWdpBKHSazPaFvwgaGa2dHthEQ6NTF4qVfictNehHB6vrujkmcJ",
  "key20": "5joh9dsPaZxw7Dp8ATai6st58mn96HkkbrLmv68KRoTxXmQifRxZFE8S4kEyKk1NdVmpJUM7pBPmD9hnFEqqMaRp",
  "key21": "2mNeAEVZ9Tra5GB7FuLWhCZBiP5TPGZ1eJ6U6m3XSfZ4U2TeghT4ccQrrCuHetnsebSc1xkxzy5chFZBN7Ff4fH",
  "key22": "aortAz2qowmfJ1M8YoREeyzva5sx4q75PCC2eZDcuxCZ75r4duExkV4tQpsrgV4K9CdLwne95zVC9LvBUNkLYgw",
  "key23": "2e8wQgpnXWZnN6i4PwSEJGN22fP18iN7V6g6x2MPjzBzxxdjKEGzBKD9Jnj2ZjYJnUtmV77y5kVkakBY3aG5Wdi6",
  "key24": "urMsDW4r2ehrpGZhN5nKnTj6HyaipEXSW73UmHLghAgXH3DBCzfKLe8uSoYKfJ56Qfejr6XMFaBRbM3wNeMpYGY",
  "key25": "4hHgjaoTxrkBcmJSeYFm697zHHdbAWxLm1VVh9GZGCSRQRqBrRzoiSZGT5mTFvyiJdaVqrcBRv3JM5aDQ4kPAEJa",
  "key26": "5mx3iJXHKP97YDSGoTrnKWKxcxcmzuWNhUH3ouEnDZXQHgmJyjri8FYk7RFPJU32MLEnNGkLjkoMM7wqdKFr7Ugy",
  "key27": "3gyXnyVytsyFDp1oT3fHpAdGfJ9vsWid29XobShqeTzg2t3deLhVQHmUFcmuDEQ5kqz8eGS1ghcN1qRDeX6FQwck",
  "key28": "H1Zt4soRfSepDGbq51mBZdDMQeYDyAPTeWqYvNMNbhT1SbFz7PUUu8f1CLfrQNNsmWmnotQrtteJ6sMYWMWgeS9",
  "key29": "53xo5QsvHeXzaPUNcwLLVQHprbQFgiNKtoeW4Tx7mgMQwAcgawczXgpGrhRSAKDq8L8KybMfptDZub3biQGxaxMQ",
  "key30": "3WugLAzsHiWszBpmmoCwDPKarUEfjBMmUGuabEHPoTHCFbtemj1rM4tVvyGsuJFnQLwyczRXddirokm5MmWtnyJr",
  "key31": "3PBverHbPbqnZ8hTWwzfA9rxr9yA6pwzMP4JbwMrMakbw4uvAaYkCBSUNRVFUeiqu6WZVM9tnJdazx6sAwgsS2Gm",
  "key32": "23sCDbJ2NHZXvKmADKVVZhVj1YR6X9vtWdRKUawqkMgPQfjFtajdMJ4sPjmL8ou1ZwjmKYbjSdoVsFNTnADoKujc",
  "key33": "2xteUN3AK4x4oAeX1XvpdLyaAe3gjuTuNC8VutydUZiY647s3KEaN4h3SgtEuBFmBow1iS8oiuqhS7uwis4A8dXG",
  "key34": "4hANgYWxo4B2mii13tNwbAeBD9soNjok8dPCsDBjYRo4aqsSx16pT228yq6FGhTcsaXCLUMk6LUaiU5XZWqzRtjy",
  "key35": "5yu4SVwK6wJdDxaiwAP5L8d687VmJi2dpPNd2Az87uPGaftqZiH6EJzN3AcnsJiV7hkfxriTCvEFfk7qCZPSj8XR",
  "key36": "3H66qMDDtfk2i1SkcYCyDY63PZrg74BCM7y2Rt9hqb3WFH2iRWTCgomehU3q8duM3QkpnBJ1duxqd57egzPzdUcy",
  "key37": "29Cmp8uR98UZA7PWG9YiGGc62gEaGQTLZPepS3kxihvXz3G2WmHF26NpeVzwQprHDrdet3Rjk8fz723VXmnZGVNi",
  "key38": "47PZXFcKW28JQh1yxkg5WHySfTxBUfak6bvmGSHvqHBshryv8FH3cgyc99BjBR5kms7deuyXACXuV9H9Skx8Fohf"
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
