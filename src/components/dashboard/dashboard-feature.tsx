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
    "4kDJhbMApsZesku4tj4fDsJ85XHFU2oZSgrb9uATxGgmM2ob7o24fqCS1kLvzywsr8rNNfUXCGiATkpvhz2653X1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fMfX2515mKLF2MRKwpUPkVZvEQjauXZgfgV69vWNa4AsmU1rusjVxjyZnEj3VdXWZ1T6mHQJv8mHUZYZEoSwVTs",
  "key1": "xQpCUq82QWKPBXpNTCBJrynBkXuwhwHnYjihDgLnVLYtVVBWq4nK62d7cnDhSLBTnfraw8oVP5KaLYDKrTjKcCb",
  "key2": "wWRZNgY7LFoL88SJEi6KYRGHLiTDbDrc9HDtdB2zF6nrXPyVjG6AR5abQZ6vS9xULkAegU6okzXQ1ucQZiFEVLq",
  "key3": "mMV4Jf2GRZ297yevx8gBsTb9HCZAWYen67r6cykaDABABHqNRFfvUVyxwERtiGCv24Dn4d4No9fkuuJyUXzBfEq",
  "key4": "2xKwHnnVAetZKX8sLbe3VHbhar4YGGuJZ1BT6zPEXa7EYhjJD2hfkvAknUwubdDoVmjSq29c3WDiMVaestszfLhZ",
  "key5": "vZJA1NGtW66o6oWY87YZSYuc9C2wCyqYCtgQPCHqYU2VF52m6mJyDhabP7ryCVjymRrxhhaqEQnesHwiMKxrpVd",
  "key6": "4J9MqSenKPepBrDxCjndkmHc5CtkyHFS4zDiAE8Z9KYF2NWbumH2jV2YFyZi5C2YNx7QyC56N7ziZZSrX7Ja8zgf",
  "key7": "4WvjQYyKtM9mj96e6spUTi9kPXSmKoMoELhhDfHCJjSfFgii5pYfN9Qj5LYc3XMqTag9a7oKmqi8SEjXL1Bjks3u",
  "key8": "2F5soxHZ9vs64mgP1nGzvEZc1P5ZiXRNULxDJzSfckZL8qE4oUZCQ1tCB5CDb8M68aNSeLwJi98KjMHRQDrSE1r7",
  "key9": "5SQ7dUSGtd173Z4zMLTX42QAwUjVYQD5yLZfGiAu5qoSY1H4268ZwgnRMpfVzL6EC4TBvbrZd4z64dVJBmGevkxq",
  "key10": "65d1j2wRCcirSgWYP5wpKK6dPMqDnUx1kvrmMYia3aEnFdAYCKe3MxCqNjo2W5XC3kgt1Kf4AQJnegnkt8WBYUZx",
  "key11": "3CNKoAL2XLWYAs2veWJtyoF94zHULBLqjBUKvMkW3db5CW5VCzBxbgwtKBW6CjiAv2YDUSdZekfQWQ8XUbPZbWMS",
  "key12": "2QGwxiSoD5e5Q6N1bkbyX32oc5QJNiuneJBDBK3fxCsRfXjy52cSuHaFwwntk4JDCSHQs4zaibFD21cbNRRuqktH",
  "key13": "3xs1EzkLQEGpfce7L1haVyoJmj7FbBtkshP22innqKoMSNAmTUScfiMEeTpRvaXGHNkvLsE7kiBqar9vyaBTE5xX",
  "key14": "z4QHiveYj4WWQBhUD1LsCUyK3Kni4A1T9eLpBBF7eKuj1reTFFyEqjY7LnEyqaLd3v1Z2RyYJLtGLKq5har3LXC",
  "key15": "3JvBMyiEmAoe39j8Kcsn7cEEZRCQffP1c3KnCNQJY3rCzniHsYtdGCWpxbpiUnVootFCpXZJjpQP1b3bj2UEaoeL",
  "key16": "4egirErxFN7DHpNFdoTA81QUzH6QP582Sgfu74buDP4dgcVw3toWfNKiu2TCzMV48W8kCLRCTAardAeY8UJSQZwB",
  "key17": "25hep2Dgnerm1sY6b9EuF2VRWjLp46wgmrDnVogxsyvtDeB8X7M1yEqUpE3BZmsmqygxkt7NM5BP5U92G3su8c2S",
  "key18": "335Juh4168qRgU1tZSj4U52MNQQ2W6mmNWxcDnPuSLmhsRqfFf3yCQm56mKpD8zU76tbK8ZMsAjSNCBzNBXPPjtH",
  "key19": "4kddzv4geWcUAvSCudMnQ5BoAcGuLdcJkJ51agLkttQSS1QHxNH5C3iHgvyuWGgGEgPjq3CG8wc2uHkGUq3TeoWN",
  "key20": "AUxgicQkqhKeMKyJCfmXceuwKxYwCoKqzjpHrPuN9t56psUMyxrp69s6gcA4qm34SjToyqWSbu6GYyLMKE2N755",
  "key21": "4WLmQw2XjBUqnr2w1t9Jv7MVXXkQyZNNWm2whatLkS79nrzdSVYC6d4gPgeM7XxLZju2baxs7TR12SaUXmbHXuLN",
  "key22": "bgRFiiqqAm748bHNA6YF6bhUgWLKaGst5UHn5knKRgz9doynAg3Z7reZtPiwLeqecS9Fc5mTWMjFrom26zus8dH",
  "key23": "3VhoRiKQUmb2QYqvGjrWLc7kRwVWJRVe1mCHPZQMZPb1QGfg7pAs13CzTkzcy2VdLWNhmeG5FJGJo7TzVoowsBs1",
  "key24": "P6kVvuvKmno51kcp3TupPzsQbBKWf5jxD7Cq55rJTZTPasiqYFwss1WMNVU3oe9bXoynig1sXvMXbYLdWSiZM8s",
  "key25": "5netDR2jZAHopHGn59dvyGFhjZER9gEiokoRXMiA2Fg4T6KdbF3fMs1d7robeD73Z2T8RXqG7NbYHSvFYpnL3ADW",
  "key26": "4Vd5frG4x3LDMiW6v8bxvxnziE8xZ8NiLxaypW9Awn7WizrV8Vdw42eQbw3Lus1k3c93xUMdWJQyZTWgBgpPm5dr",
  "key27": "3zBJSjuwngzpxFunQ6mfguE7iC24FT2u4WeVk3bUbtvaJAeMHGJEUThzp9NRUxGB6v4aXywwvRDmQa8FVMUGZeRX",
  "key28": "24DRsgTyVpfpqV3nARjNLJNXYPtVm4mzFG9uqu7JniezgGegVSHdoJemF3f67ZmpyKmooWEXXS597w34gzpQhE4N",
  "key29": "2oZjrFoDwsEe9v9kDuh3VK1uus3K7HWiEHSQPLHWBQtLQ9TiegwrnMXSMLanF1E844h4nudKF4FF1E6d7fDLU9Xb",
  "key30": "4HE18o7RhAiHMs8LFkFkxdECcyczXWivDY2Caa66J8JuCyoZzuwu7uFffaXNwQGrn2DULZ8KTVwPCTGNz4upURbR",
  "key31": "25MB4G2qnudivijgSqPyFGg4tUgAjV9FC7C2BKEiMsNNuPYENGRrCiQtfNDp7nM1n9TrYUZmWrnisSYK2kTGferR",
  "key32": "2aMnwWW9Pwp1JXRQfSRMzhWhKL2fbErT8yxGBSzRqMMpfywodE2m1hKTBFgqdChpaQEUetSQt6xcjxzbZD995wpQ"
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
