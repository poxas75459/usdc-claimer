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
    "5Xw4rSzhgpKJx8NTCokmQDqKU4uvW3QHwDyot4ZYYRP3727fcyMoJsTwqB2FULPKGrYJAabuCVApHFXTA7XtEzVy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bXCCxVpkh8vWbi2XYnNeavtqbiAK7HuGneBee31CFRpdtEwTMFrKgZMp22MJTvdimX8G3Y4MiNkwCSR462mCkBV",
  "key1": "2HyqJTD9fH7kTnnnu1di4VifyAzuVEWXPBPxHhEFDoN1Vpe6hzUFWMH5eFcSEVso8GEA4pe3WRCjTe33ccBGaZL7",
  "key2": "2gpEbkGUqMwQCwo66YFW6G4gnxVadAj84AEGmbXjT99YYEh5djQ5447BaokdtxG8sVgxAyCDw5YDmHytfTeu8eML",
  "key3": "5yTPicErisuuFF7CiaPHLwMuEgNDGXBceVa5PpCLrYqS9QzAeh8S4nka6bb1jYLs8MjPGqiEMx3dnsrtMTSZ8Y6M",
  "key4": "5VL95uheX3BiEwJxSaZcJ3W9vsb5igWy3zCNvzmMnLRS3112vxjoFdmYL5zaba3wvgpoR4jY3NGZeYspqfFtuQwo",
  "key5": "2m2GQjGVjULqNX3oTxLKYRqUhKxmqzaz1TJfS1kCon79WRAXDMkryAdNoN2RwuiQEkAq8TL2cFmfaScD3ujEhmfZ",
  "key6": "5Yk8ZveisWLrRnugsox3VVWETBHcnbUrrjS6zX6KWQQCKcW4sibjCpR6Jnw6aGDAi4auwc7kXQn19cFuUWfofY1M",
  "key7": "3PWnYLsfPjbwrtH5fDEj87ohfmWpdZJmcVTakVzyUttuF5FsHngEU8KAQr1JgyDwfBYzioUUmUzfqh5XLrFajpy6",
  "key8": "nkKAEqSVvf9ypLxQGFZu46y7WXg2pfGXN9pJEj18Qwq6pgCgCSUhoaN3fopgVLdrMdz1zmhfLCBq46X9j2nDMM4",
  "key9": "T5pYCSNRmkuPW1obD4sw4yZpP8TpVeSb338iMN4nWR4kxNnJMcHnhv2TGzkzpizNk5J4FwyyrVH1ChqY69Hgbe7",
  "key10": "KRRYRyApY6ApZp6PmA3nR3ejoJhEyLzP8WSR4usVgT4a4pSuA2YG8gCw3cHzspqQf4G1mufo3FyyXhcdWA3KSkL",
  "key11": "5mNd69XZweGQr8GTTXjrrKuoPxpRNzrPqgQgP8mfigZrQshvchXvmSf2dk6NeUq2gN7VHtMZo527NLyhzdnJZCP4",
  "key12": "BwdtrXNUapst4pqNKXHRCjpcohF9cvzejGi6oeG1iuhVkaqiEj7b8yRMNVMgraCnZGugC8CRGMtJQo8gass6kcG",
  "key13": "LpHeZueFX4w7R2JHRGtyizPV2sXRunJZ6V3ZCSEfH4bQwdQhJGURaMG5DkCrpyuwatptaoQd5SANw2ijDtKSLNU",
  "key14": "2GjWUdgp75fgaFBdN812AcwZ8ab3t5dM3MoYvaXz3Ci94dr9pMeNHzThdT9kue6GuMAb8UMqQKbHMbkVJiVySR7K",
  "key15": "4ADNWshfsL6Kubga1oejfgqiBfZG6eWHKFhmAMJdGMcGoi5upkKRZvren9p3j5LDbdDhG1FtnBYJNLyGMGVSpWsv",
  "key16": "3wkSKYkLuZ81fGogXEzUxUTQgvekJxjmSbLMThUV6wwk9qynbN2KMQynYkTLeSLra6tptF7qPFSADPFvbfZFzaze",
  "key17": "5vuxTqDDVXowHuLYJDnSdKXzHBPjdioPnrByBkaphSjxg4B9sRS7eL9uVTqsNioXFpM1EFcPPw9d9LcMudLJZ9zG",
  "key18": "CsroV4hVypcRMmzn5nXGXb9V5gKERJm7haqRmoJFcxKKdPChRHSS8biecjYDBKTMMFUPoBcgEsPSX4zjQmuLras",
  "key19": "3pSmRkxhxFXrACZ3frDsfxFwLWva8XERgobE79xsx8Fn3MsF5YiWaq6h5oEjnDXsFvH18GWVH5zajnRbyMpRgkKQ",
  "key20": "32fWPuMdbFmeHSw6J6S1J1HtRvS8e9wbPwa1kRBLF3gPpExBFwY11WMABrnrzTDFAFhyK5sSj3KPtqEaG9xPtv6U",
  "key21": "nXkmx7aDfJGs62QxUQBf29N4msiErnKUvaNkbbBBa7b9nEaJWvB6jVHV5fPEPjRLTMD9vH9PajEVg8QCYLygQEH",
  "key22": "3dL6BFx95HovyP2vSDAGWVin3mfCX8AsS9cH2qmCpS9Dfg6PBtjoAGmVeZtNMSLKeNo8kWE2HZyg1k9ex7jFUaRz",
  "key23": "4EYwDXRs9FmxNkVgZyPQJw3EYNe9NTEcE3D1RHQNHJt4c4Wczz18UoNG4VAZQDrRjeEouduvsVCN7TpmjykHnPfc",
  "key24": "23zRjy4mubKS6aVC4i7HKtewVv5aFKPrjYCvss2BDtant5Wvfbnq8bnahCBwbMGF9teVqv8BCnG4xvdW2M4HrvUo"
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
