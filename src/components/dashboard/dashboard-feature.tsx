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
    "2xDCAC4QY1FBvkzXZQD8F2gFeQcnYZuWjSMNeFmnQ5AHMs28QgXhYoGuuLnqrknYrzKWarSdbDgxqshPSChhbqpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2t9vL2TDHRpCXbVHp5eDqpuTyjF99P3uHo5P6nU4jQsjcyvCi11qcML1UAAZiXe1R4Q6bno94vYVxw32AiXSA89N",
  "key1": "HURRwQVZkc7CwrQ7biGYnRzCDC7Jpc1PXqYKCS1htazSHhtymMYrjfZRKHDQiAQg3cwN8vchpeeAWxNtkkFNQPs",
  "key2": "2wBsdptwhQKg4MSJnHZkrKYv2CqTvj6KrYgmyhdvWKZkD9cJCTWiXtuRJg6c85ftV16JJMYgv5iF8VBYEKgR7CqP",
  "key3": "2teC4gN4Yr5LsEuaM5drJnjJAPUZUgE6VnGmUAAMH79nXwsABuCEvcZvUw6yzgRKzxZ3JGYBAB7X5X8dKS5Lg2Gu",
  "key4": "3hiSwCwEmzuaZ1iAE4SJKqpXSxsuDfCTjipjxeF1ALjTxeoZgKVE3q4jJhpzwiM9ie5SzRopWCB35arCUYYfTfQ8",
  "key5": "3FWMk53fjU5G9oobqRWLsP1y6p42FLhaTcTNKykjPHjfg8oWaEqizR87PSKU9mWUbeQgTJVc5oEa6n1eb9j3BkFj",
  "key6": "5debCDe2F5qVt7QzhD4SKrfFKfoq4oqdXdY15LNL1NqjKicNFP5TYbyrehjZnDWLCef6GXzDAcKW5a4XM8s7dBve",
  "key7": "37fZwEXQx4mvovPsEyiyJrqYyMwRWGtiEyqL78MUyRszaKDd8FdHv64yK1DF5y7AtmSgDym4Ae2di5aHoZhbsHmt",
  "key8": "5BgDCyzJiBgxDMQgh2y4tYBcPRMqCWJnqDsGubxGt9Q8acPQ5hg4WjZ8Ejq5yA7WmreUiMtGcoW2nMcc3rnztxMK",
  "key9": "SBJJ49Dn2b3oB4fbMWLyGhgiCdUZJNVDwSqy7KxXQNnSppkS6jDiKtGnetGXxHpfvmYy8XCD2xePWehrNurSwzn",
  "key10": "5GGTgqtzZAkaAzk1KNdLCipiV5Vnh6GFDbYRbHYEzzV6SLspf96QvcvX3puRPcHBNLxoKVReyWJkKf8CEbMQ8yJM",
  "key11": "2rBnik2sTp1ndduBRmQVh7JpXaW2hx8hNq2kJqAsHANzsxahwYtWteRaRv3CRPyPSno4Y7h6nicfRY8ZwL9cDSgA",
  "key12": "h22EbJCRtFwtVY51uJ126gVmLzKzkzKNMLE6thnUasPF3chZmCsBL59Xymn8yfmDiZY9BUfpFimMGwHqYHVGy3n",
  "key13": "32bj1A4tRbUfxZXQ2EH8EybcZ3pGZamDCx4ChQR376F278G4G1kdSThdBPFAuFrnVLBVU6x5fn3PbiVKCMBNc8tj",
  "key14": "3R659tey6ksCUhPcU1YpeWQFQs6M2GPnZnqxv8jj1ZeSkcZAhwAjEEemcaihA3TMeSyEpKnNKkVTeoqxgYQ3j2at",
  "key15": "kt7FnbjipEvYqvg7Nmzey4vgiYcqPisTfM7ZSFagS81p4AgDYqiWoVdVJVhMbTW69yfEKq4SLM8jHEAuRXav6X6",
  "key16": "3JENMZ2F9r8q5ygM6HW9XBx2YESR3boehkaG57NoKYjMmdFpCjtzM23hASvX7ZY27FxykbdB7GSX92mK7XFiZPep",
  "key17": "NMGiThwyvFtSbqw9cweYESSxtHyoQ3dw1xyX6fqFJfQg9SokNKFDXYBFDzXD3QcXiMSGP1Dn4yrCQBUydQLx2RJ",
  "key18": "4d7w3NJCo8rVnMdUcGKkgtaJ2DJ6SA3cm3caEixsTCbGxsyYWM3oZokP6q9WabPgy4m7B5eiqU3wKzUUpctnNk5W",
  "key19": "5wDvbw9jk8VWn4abzUY1ta7dCYQjAMLGBNvm8YdG5CedN6eLQDdRZ1Czz4DTCSgifHK5G6r3pN9mb9DPHaGCWpi4",
  "key20": "34uf2D4uJmoPuzDgErcMep7hj1HLUKLXG2XkZkbe4VLBAnAA8Qw23uPsv7GoQWJt638PRGqgxXLs6CkXJwMJ3Ypw",
  "key21": "2rZKZSXMsSrbZfNgEy9RtDxKq64AUaebK3gM9VBhCwSAUKEHcbgSkmR7KYHFdrqKoL3yUzYHma5wVEjmiHwW7utS",
  "key22": "4odkdyid7Xr5ze84PNL8633JxTpNS6eeKZ2SsaUFdNHhguvcvyeAqtcxd9qUesoRvBhqhmkcsYPqpGMmo3KVjjfb",
  "key23": "4P1cruSF2v7zmRkLMaQ4zAu1FWQgDaFNYWU7qCUh9YbsYnPwpWCgWtxdMsWrnjLMm6t78RQbKs732qDfmEe3WuEW",
  "key24": "NeErUYh4P2KQ1w16MX4bihywwWugAAn8gmNRe1QEJG1eMRqihkVAv3Ya1QhT3LENx6zSWoBxDoqJ3Md1NZSwkq1",
  "key25": "5gmWSrk8koYWSz9yUF8hrPBAUPpaZbbyDyGNCb5cXrJYzDs4cnUng6EMCvAbuFs8VmMseRuYJNahGjhK7tHBwxgq",
  "key26": "3DMVt5wm8fs42xunXjthA6DsWDsXeheerqfTfZtrLfwURSewjEgL8bjCoj744JQhtLAGMVdfPyWEL1M5nUR3yDYr",
  "key27": "34hVzJUUgz7LHKPQTxqAtZGUuWU8zzk5NNdNKct41Va2uqVoBsdmmxTwkBxkJHpXujSkKJuW6HqYphywNoYwUaqG",
  "key28": "4KHU37EErQhDKhcRPKhfVAC4oBj3YcDYu7dxNijMLmg8GXxxhezu93T7ZBGLcDLXJBM9Qq1gDZUheKf7EaXKUHnm",
  "key29": "3JE4MfkE9P73yUJRgm2bRNRTF49ef1m1igTokcJ6BbUkRwiNZzQPwYpREBX2SF4fWu2a2tUWq58JwUF7S1acngdK"
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
