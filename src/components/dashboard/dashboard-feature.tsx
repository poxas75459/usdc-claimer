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
    "39YAVxZNkTZYqVW1gG4LuQVGxQ7gUq5eCgL8NcUv38342mCKdPy6bynwCe3db9p8iX7hCJrs6WcHuGtgwX4JHVsj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2115aU7DyHiE294gFN8JbN7dBns1V7PqmfoDVuniXJ38tacsB8cH6TQNZiwyQn68pXsjf7DAgwZdWqYHYcTVi6hw",
  "key1": "4Lv4RtQfPbtvsA47yXxkzm81ckLms4Sa1vbniVu42XNTdEqsQ4x47GP93a7DmZF4zLwVKLjqi2iasNUsvzzzWXc3",
  "key2": "4MMDkSZdyn7wLkhBHdaYRuhDRkJ6XQ1E4an8hYRBzs6c9Vv5tqsNBFE3Rh4KrBHaWPP83UkKDTpagtZwgDj88XE5",
  "key3": "37uNfDYLrwCfbBnNvWL7Uz55WmgqKXPLi5yN8LNVKgGZtaAgPsAVD2hRBR8rAUJifRMacdnbpHArsXTMBtyE9TN7",
  "key4": "5croDQQVsTLFdQWd1K6PifDyv2vX4XStAALcEtKb6PxTXZZcUgLCq6CkVYAJvhQiTaPSpqb3zxpYqHQ1YW2R7rBN",
  "key5": "5533rTVDSbKnZa5KeFqdwWY9mLvyh1JSoLzMhecjrBbcdECn9GTZ4FUSak5TP5W4rA7zPBhLYM8rN3sCgbbQkdbj",
  "key6": "5QtGGL3EWnAgJQQ2YLXMnyWQzmmNFNZnXaDbPxboHGeKg6YzSW5Q1jp8zPdVsJgx31r6ow3gx2go7YiKhpYDBdA",
  "key7": "24JeHciJxuS3eFWT2fhBfHvhfmYd5bxyCXCw8FqucNzEqmMWbW1ENiaaSZWPfYRtqESMKRym62mEcQoxbysyyH6r",
  "key8": "5r9qXeDmCnBwiuVDJDnFXzQRPY3d4i71PA3WRqypqDcKTwhaLK8bhiN1zWupwJ9fyEMQSsE73Dc7VY9jRYQSe5Lb",
  "key9": "m9VPV5Z7i125fvV5MsXPJzkQnPiUAPv4G7ZsY6RFePdEwEfgh1P2Y4pAeoygDvHnRfc9L5PrfDJmTTM5qGnw7wE",
  "key10": "BY4Ka7WKG1fE5ipRzqPVRjyDjxNeJs8BA1FwegRGo95tgupvU24xf2s7vQ7HRbyCtE8M7tSNxU9sCMR9zShRNCX",
  "key11": "4TE2tbjXaPVvdbG6Z6pfRCHHdWDWmX1oezizCRVsh5MrwFVfEnvFYepSvFNMW9zhMoxHDwTdCtg4JboU3JtkivN3",
  "key12": "5mi1rWjfqBeQ4hqviqbNoP2uRNqadTWfKTm1ChtPoT3di5fC4Ep4CM3aHjuBHx11PDwzaXAjc561c468f7hKyE7Q",
  "key13": "RwBPj9rPJ6h6pDbvMGZPdq9TMZsBk8um31Y252r84xAsuYGhWj3oSTADtLCtzyqSsqnT1MkaBHYWRQ5PzPVLsyh",
  "key14": "2jqkcofXN8KGrdn5Sr2vmX2Z8BkwbaM8eggcsu1kUMwfU9svW6EK5Zbon2ibWKt263xpk96HKV8UL6REMsuR1PRs",
  "key15": "3Hr5NFupNGb5MwgxpuA62TdzLV8te5gFNfFukcr5xpmJ9JPWKg69AZ3uzcfxcuSgUmcSaZa5ytvKWpvsAH2EaDLp",
  "key16": "4kcZZYfaA6Ctytu82KdVMAWxMa3wuovSNCAtNcDV5gfwHMmrXxSUNpFHu3wLJqywmdyZXcScWxYtp9gQSA3MpXSS",
  "key17": "2K9iEvo2JaofDvdN71ATf7JGrYb7hLrxD27HebjSCtqSXGYH9wSxnTahQTh9ugmRqRJR4i4BZ2bQxPEg9NJ6tpEW",
  "key18": "2uGZo9yv5BxVEQQWekRpwssqf3TJaGSEJudSHq5CnjgaxmpZKwLZ4mrtzqAVEvjXKxeD1ymk766KdnUMNhwSyrxe",
  "key19": "2jG47QMo1okUm3ZmidLV3SSPs6dPXgbGCAP88qqKhpbAD9HnXV6qXdVtRTYeh31nqt7HnyMXjEELycQZeJcUvvQb",
  "key20": "4Dahi9JB7SUTcTRcUyHJ6foEqBdW7jpqa6sjJfThWZ2AnRKrX8AXdp4h5BRksdZ29T6ZNvn9Vt542QoxKMTVjEK4",
  "key21": "4Mi6jQLGqiP4z1zpKxKRe21dekg9Nu2PTRXPxn5vZ6vkLHGtuvjDGhPTwLWuJeLWeMoNKh8zdKH5f2n2czp5ubDT",
  "key22": "72zzz4Tr9RXkLErH3TVDnuRpamu83E3ATRWoKJMjF3xHyiLKgovC2ruzsbAcwvPGdj3oYydGA5Cm71ADR7vhq7L",
  "key23": "5WKoFETXCNt2n97dqi2JSzLbKvfTVJTNzbV3ung4CC6VwnYygFjwYM314FcUNcF7ufBwmeoxGGtNbdDfGL2L5XTz",
  "key24": "B2WsTsPa147Uq5wiHCyv5oesBuJEi75yZnms9Nu2mtPimKat2fT8VgFwyKxWGSVtRy6ESE61SsXp4eCXSbfNN5d",
  "key25": "35VmcP91DjWMSX4R26uiNqupAsNvr1Cdt7f5aCzJr9yQhZugDzBfEHmwgHfs5o8qD9UZz3GVnP83TyqRS9pZdWBn",
  "key26": "4UspXJkJQoyEY1DhUUoHBpzRUx9JuGmSoqDebA7YTMJJ34suqXqUtmjgsHMC5En9TZhCBwz5X8hpcpeKw1zgin8e",
  "key27": "4oYCZcxSpGJius46ur53UTrnUNVyAvonoYFyVtgwAgnWVeNWh2tFB1h2q9hKKKPSdjnFWRtwUB18rX2d5YudmahF",
  "key28": "21mDpLXa7PpMndYwB2zDsvwVy3aZxCpsvRaNCqxB25K41CtzFcYAcqaJBfhtmcGFcgihpaDxdd8bY9GAh8wK72ET",
  "key29": "4eE9rdnqCRXFmFErCbUXRMBLV1Tt3oGQG6ENHR8GercScv5jyMcwtGJ4Mw7UpinvceQtE7p1qXr7xCbB7Qtj6M2F",
  "key30": "2yQ1EvJs87YskCw72oisd5nrsG4LpcAaLN31SH8XWquBg78TTpbAgqGjt2nGgXoHFbC56bWGXgSoFnPBVe9UMzwP",
  "key31": "66mMph9dzMEN2hhx2b9ZsYyVDzwJdbxod93cEeZa7BqUchseuf6S1Ev9iTThgTjNScVgguNVd96jXuhprG2ZZnyC",
  "key32": "5LXLcNojCiNTxSU34d45h83WfcnkBhWxTeaBKHH1kBTbUXxYPEDXrvHBn69bvRJNybsKhupz7kMarV8ZgjS4ndi2",
  "key33": "4DH4m33xssLW9LJYP13zM3FqtQGeK16TUtzKWTJBbD8w9jAYbFcbdQaQaxrFgSTzpUwabZbHEfJCmCKnBMRS3uzE",
  "key34": "62KCUE1UHeFKxX4uv3LJJJCkuPcPmTZdu9mDzKhHr72c2ThQYQhYJMDzg1QqaWzueauqhALUpPtx4hWQBfXw7GNw"
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
