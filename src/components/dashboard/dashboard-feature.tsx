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
    "5EckVfMH96nBkVCZiQzauspu3C4ig8KVpa3yqCf9LiDmBcr9ojZcFsaZrdR3hFsBiBYBAFwiwQJubVLSicvncWKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vLLV2oP2HpR4YFHLhqxmGAFY6UmbpD25cud9dZgVBQTFcRUqgYgBkgViMRfPw6HuVRiSGum44ryPXCtFtJG1okH",
  "key1": "VgEymHmsxymo33Kr9sSr4QnnZfHppR5rZRwJ1fRFvpUsDjXryQ318VNisQ9FgBDwpMuHPmKAy2ok6Czka8nBg9L",
  "key2": "2WFtij5YQA8txhGahrbWPSLh3rfK85ye6pcDDPrLBhCEyN9sWr7STXTf6szAMKUWVbWrnk11kGQsbexVj3bxHgm3",
  "key3": "51pMjQe3eqsMUsspNA3j966Rai95eWApbNa5srDt3jD177RVQDfzEmUnqxd9GY1KSJMDNwkSP3ShyhE7mVRf6HEt",
  "key4": "ji3334wmYseHCsjHpoobZsxpj6J4xxuAjdtMMF2yrD5rSxAK5c36hGUuvGUFGwosmkLZSU7sWWMpFBBUazmM5yR",
  "key5": "EaERAkzVkS9c4hMa7rAieMkzoftd4weuU6iVzAFhbH6hBCKR1rLyzBFvMFovcFrb3YG1JjRtxKCw3KHwnhLiBtP",
  "key6": "3Qs5BaaJGyxJNZt3ip2BzSFafubJ6jDneE5QtuKKjfjSiZMqYEDf4kXKg7WEKGFf1cnFwvXdntHzFbT6yG5CDEs8",
  "key7": "51Rw3yCFucguwtRSckNkSoqPrDNmQntA45Q7e5YzPMmYNimhW7MRLpzVj7Q1HpKkx6Csy6RibLX727JXC5bP1Uj9",
  "key8": "tw1zgdntj6HypHuGhEGVgNFwXPML9Saispfwx6RasRFsc25CenDCBKx89HA5YdtobG4ZWuSDN7SsSvamCpkLWut",
  "key9": "23uhCbCng57LDPSMjQSZm5EvQirKqeLxePmixV1YrwBCSnmTHUdBwvR5a43mbFHzCuaTpg53YJNyGF7AwH25SuUL",
  "key10": "Qr77ijij5u5LLFeFn5GmKRW8Y5EfPeBX7w4nQmUZQvAtX4rXvSrdJDQojR3uxhbxrQkt4iwbGT9QT3pSm4Jcsmh",
  "key11": "647wzsTSZsyBYpJRfgdQihRHkM1HwA8J9SUv7fQR5fHAQBn8SmEczqTFhJk2Grmk1LNhaki1QgFGCQbxkwQHUZfi",
  "key12": "4qyMeBk2Yo5vrB8VSokWbNDixddHmn1qnQJYVxo7NUfXFBQ5YWqsSHZght1fTx3jyhvPbmQHeizWSmbEi77QYCuM",
  "key13": "5zDNMWrupk4wQHgPVP35ySef2By5HTtAQ9ha8HVoXPCDF8uJMR4Pr3erM9Z9ZK14ZroaGi4WVzDop1wBiGQswAnL",
  "key14": "5orcvFsboUc14ydNDnAtDoVtMG9GU5zWXAL7fyCGrxTzUWyBhy1gJMzdusoMmhhviZeWxrMDUb8JHGwfZ9LX7M2A",
  "key15": "3qSUBj4xSy3MYoMDCJ11VmtzBs1MXYJ9WZjeJodjZZb6ziMUg9JzbdZHYMbk31uiz3QenZ8SKNFEwvx7yg1LWYGq",
  "key16": "21mm2LX9vzS6FnZTeQeCZd2pW1jvqUTxAVoBmZttRgZFLZ62EAeqawF2hg6x6MG2i8MHtCXQzQ5NF8sHYvDpTvrX",
  "key17": "54HqeaW9bX4CNKYfQnpSF4fmLjFHg1SqCUFpTWzeYj3o7E4qPPhM1u4DBT5zQLAsA6B63NLSWHXZpNYBWWUH3NjS",
  "key18": "UdzCQciCZpQ3Dn9m1DVGngER31WHF2jxrmmm8d9uy6r4w6MhqPPkbnmH5ZvZZJgg6DR9MQa772grbMb1kjkZXXN",
  "key19": "rMCFHRXrM1J3zboeqDSYSrTeruGjfadqGusyG3EsrVEn6iEhRHXz23JdtTPsbTYnX4qGxJhdr3VBBd4NMTb2v5R",
  "key20": "4zwMegfNLFFGXq6FQWjNd4Kvk7EeYzZ7tyzrbBJa8bQqnpyECWdbrhMPjk3DEJuxkfvpiGvn1gAxVEgLEuXPBmDR",
  "key21": "65WDatmsHsK2FjzTLNmaZ716NU6qcigsHbEb8Yu23pvhZ6Q3BHcxJgQonUzjXDM281hiUkbMTMb6HRwwVb9pDu3z",
  "key22": "44YRTUxeYY5UamNYDbpFfPyd1xBMMzMgbvEMio1SpxeZAW64bgfno7taRufog5JtyiSskUud3eqxSk5NHjFrLZoj",
  "key23": "8SaMQ9GJUHoa1wrKgZobSA6yrxV5wffaPF9htgEybgGdgTS4zASZTdbRXkgQu2MGbdeVV4S8A1AzrV9BrdezdC5",
  "key24": "44hJwWJivTtNm7MDZ2BjoDqriZPF7vuEeghDt6Bjcp7AT5owztWTkVuTwfx8LBanJNK2Bi2GzZ1tjB2mDPyCuRnb",
  "key25": "3RARpMkv1Pd2MJ2iuhmCXeGbQbyHSA8bSxpx9Zgx4nJngfdo43tfQ1c8rZfCEAuSBV7vLQuKhYdfn4c3CABchFZT",
  "key26": "31JmN39DTGkh5yHUY7E3PBjwSkHp7T3d4jrkrh9FfDfdmBcyJfnH7DiSunenyQ6VSadKz27z5vBBDHpRhNaEkEWd",
  "key27": "UvdjHuzxGD15wRvxn33QhAGRVrBcxHJuv4EkETic4gzLt6gma9TFtgCDSoCuyYTNEMsDWavYo3uUQXpS5RPHh3S",
  "key28": "3TziJ9J99Q6V66mNqKmGGAaKu8LeZPCgnKnxngndUeTPXcmkTK45AGdBJkr7b8b6by2nyVNiMewngLxQUuxxxmZU",
  "key29": "483JhGbdbuiJ2s9k4x338C4oRz8sW5y1iS6tDJjB4baoEotEmQmF58YzX6t8r9rRFmVSLb3VfuFU8amuNboxUo58"
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
