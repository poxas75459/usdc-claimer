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
    "UXaqKEvuVPrAGmYBPo2MAbnYWYJS9p4McNLoxtjZwkJ8CciiUvx4BsAXt9eZMKCEK3b2qyS4XT84SD5TB6S8i7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yKeR7xA9we9spT7bCiPMM1dNYyrz62KSUh9szJXKJM7VXqgVr5TUUYXgk3yB2y69qLtBLbTZzt9UtUacsvBRCLR",
  "key1": "5M8BDViaCYoCtcUfes7W29uT4bhy12jvqFeC3wf8tbtakbFVAy5dgvjRrHsNmJYDvTPJqLCTgGKrgrnoAJfU4x5g",
  "key2": "5cNWeEc6cHeyBdDwZDagfRX4Y9PNYKgim5Wm6Q7B7hDDSrXH41odtSPbF6C5LRjDdoyPSB7XrjHaHY2aNmj7Ny12",
  "key3": "4ZikQrsdPyyjTjuH3qYJfczFg2zVu3o9G9Z6VcknVmVigmkkPQWBbiAqpLAnjni6mRJdawM976rGopH4veUJMoBa",
  "key4": "3A3hJjJG3VXFUD2THJKtgBr2cyuMe82VVLEeja7ikE1okneSp8sMuhC9cARii1prp1rYGefD6gReM4o3vPLq6NkS",
  "key5": "5fkALnwd7cqW9SGNyLa1ndu5zchJg6EQSF7MkkxsTpQkYDyTJwUjTrFaRfQSnhXbLGocbQNKGrcqqEycwvvpRPMX",
  "key6": "9J2GkteqLcbFaGPKjamMmpHkjqs5JvoegUf9bbpUAe3hbzmbxFY4deNV7cxt6iZ83dCmj5iisbmakAYH345hgVQ",
  "key7": "5QsPdxVU9vYej3XKMaFXFXHQ3ewaKxxsZLjy3K6AZZENhMjdyiHbmKkExneGiBJpKr52oUgkhAH1xPViKRWFoFAf",
  "key8": "3uYgvnSGTSd7evAz9foXqXvfxvBN9wkHpuKq5EcrzZBLW98SME36YtHMd8EVSwdcucc3LDtNwt5ab3A8N4PFZcrY",
  "key9": "3wyCDqua6xm4ajAz5WZGykNbrHJCyfB6CpCoXjiQ5kPogmacCi4cwBkNNXKWQy2NDWVrG2ya4X6gvzmeFtF5eUdd",
  "key10": "3niH7UumnVx1XBabMFbhxGwKPaBDPnGsFUyiouQchCj8KWEWRaYeDKjXFxujCq3Boc15zyxUVDtbNGSGKb3oQLbc",
  "key11": "3387QNbwXSHiTDJGR2unns9XyxxCmQD9PoUCrkZNrqExLTVmb18U2wFL2qTBwT4hT2dghxP9P5wD9gQ2ddeB7eKe",
  "key12": "MUqhXDiweXxLAoZC37ZbDLT5QiZQk9899fvb4EYJDHV6mc3tWPgR42mztaLFSXw9JS5ZUd6e2WUCXU51P8SLv4k",
  "key13": "u1tLeErvPcjTh3gJQwgPH7XwmbE39QeqX948u2JJBwHSNiGwSeJpXSBsYg5t5EWkSVYL8oJrjojHtkxjaBmx7Fd",
  "key14": "ELn9GNMQfcdms2k9ujvf8rYL2b7AtZYa1eg6yGmtAmpCcNGLrXatdPH92FxnHqJJwg9TQRSc3UKSLc2hDtTodW3",
  "key15": "zQCQq4HJ9droQBzhhRhGrkjsoGWttWdDjGJ9AYgtjFCgcpXihJWGGog252VkBG5QSGcWZLZRxs3MC6CLoQWPqYR",
  "key16": "2vPZcgyM6ZByLdYAoVxTqVaSPqYowvvPb71aSmNctwaaKXywLvKZ7PmUL5g4yxMhznUUgSG8yr7eK1k8tBsgosgJ",
  "key17": "3K8qqFwf2WnRTGDQed1PFmQuJK8rqGQzGgt5Dv8gYLeFczXzh4k2RzsxjfFoRVgX6i8Pmv74MyQT2R3oxwGcHjQ",
  "key18": "dZiTLw1VdMJjp8JFwQWRU6g4hmDjd9zPKGmxLpvFTDTrX2yfKAfVmptor2f2WwbPnNu2z7GyTxfTLG6L3tjLrQK",
  "key19": "2LsNSSyjiTTp3PxLGaSVj426b919UyJMPDnYhE8Jd8MGx5Yfa5DKrXdCfGK6rkMA8JLGSeBm6LUVKorRaZ3pujbH",
  "key20": "3soSUzCcbFMWrXxvPHBXaUHFYmMps39DgX68hcnBdjbfjJKoiRCnmetPMo9tt1PojYMLnavJhzmjoe6QZipaQMuo",
  "key21": "4r6jHXifXL9xRm5vXq6xL1p2Etv6TtcXQLpZzVFQfJHTbMyUcxKQct3C7s2ex2GZdt5AfRZ3Yb98kTYok2Xip1tv",
  "key22": "5PJuaiBBC5cbcxdTnMUq6NBfdZGke2N1VPueUx9q3ggQajTN356awwNfJd34nPFwahjj669Bm7kKLA7tVEHWo2kp",
  "key23": "4P8BfvzaigQYCBniBofY7VWv8nS52NoGNbWfphpRNQ7bP4G8J59Wn2y4KKub4eKwgEcZqHZHxtgJohKNk69EFkSG",
  "key24": "VVU8TaetTyt4gJ1UJtJQHnTRWVYJLmZWxxhcH6y7TjdNsRre8iEuvYKV9qaMiabL7dmgxRMWAVketEXpuj7ygWZ",
  "key25": "mfBcmqNpMBtj8yCofiBGNLqWs8bzkcKydpuqraC5uyGVAHENXHQ8EGLa7W5htHMEh647iHrRWejtZMZyGHen3ei",
  "key26": "WxEtgeksKBS7U9PCAvGS8y3BmV1TXBAtFwoPoqC4dsPBs1VeTX741wwZWVAR9VLhH31hv9ntR4iYv5p1J1X2DpR",
  "key27": "3SdedmD2dQ7x24NMEiraULyjx2CJuTMK6tWFLPh4LMRP77FLJSEjem6TnEjWCyMNVoVMs94DAJhvt6XC2tLM7rH9",
  "key28": "25hfXzLjWjBPTbQqDzgbW44g4py3zEHaY2EXWLsZ21GnvmVvKoApev9BQdEkSLYtcEvJDuod3wKtJvqHJT83QdoZ",
  "key29": "BGrVAivua1mh8bwu9F1aNau6tYnmvHDj52n2tSjLbCgfq8GmEwqE2Z4e3tSYvgaF5q4ZxhSVPGcxZxS9eJ6cSKd",
  "key30": "3icmTuYQCZy8sScgRxeWyiRM3S1obmgfvKjhBPDppaYcDkHgQFVXsvStW1S9tkwoPTgrZiaToh2r7fsexGpGSMti",
  "key31": "iMuPWLCPLEEDzWogr3GQTEu7LzykLkRVGFDQ67tU5A8ZFYdPVkpNiu7JhgfE93kaq37443UQFvwxbz4CovmEs9M",
  "key32": "4kj3nvcgdfKQ3zqAEP152E8qmrmncYT3uwoWfzN6G1JEZ23y1C1MNeqKTgbHwqqk5n9M1vi957dsBuzE3TD4cPvt",
  "key33": "3ZQ541VCbXxxfUNSgdhVMQBHXpr1fBeqZdWtGitVJgidykUu6kmbN6F28F4gPceGWdRnqcLPuLyez6KEe4Gxqcwr"
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
