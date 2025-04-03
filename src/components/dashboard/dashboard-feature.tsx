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
    "54ru8XYFAqhMDxQCkVXJ48CRMdgwDnZDxnA5zJNfwUmXtCRuwpeSofmtCrW3veVbCQjZLxfePyugrhLLNsvSMVHU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wf11oT6PsCbpGu8dxpWj5T5FikgC1tgyYb4Kgv5vU6cQkAwJvAr9K8kBe67FmP1NmViDXGo6i6jPSiyo6bpnDe1",
  "key1": "TUwz5jKrwjRWjY5dmQcV2Xk8JwjpAGC4EYjcqZzhYBSKTd3hFYzp6JUmUNFxYvi6YRJ1ks5ogeXsZnjViSVgU8t",
  "key2": "4YhzE2rZemi38uNBRzPZixnQmrXqeYHtF6Jm7EeivbaiCNFbG4J6ensXZgkTzbjktDJxB9kem9DrsvDUntvYrWXm",
  "key3": "5L9cdFBvSnjVoUjrZCqUcFpkB4zSEH2kn6vxLygz5iz5LK42DJw6dDHiDoGRpiHCDU4ngNMSArjxQSfASpJk6QSz",
  "key4": "3dzuYsjM1PGZwFa1f1GM4gD5fgf2bLeju2VkfkeLdvbzEeTN34NkEF1hs1eAacWXfgVX7wdFw3pPh7wZdtFtXcnX",
  "key5": "49nFcVg29vD6yacSsEWK7VCybd9obrHx1Gu8Sc5dA9Rpb7VqJPwBSJd8rm9aCSqZDVD78nXqivMEDW1DMpJkoa51",
  "key6": "573CKpSuYhjkshgYpKSXEyeJ3KmenKMZo8fHX9NHobf73hDz6zf6utr9mNGKcMNAFfGxWRkZPFZE4ZKVdNVy1weH",
  "key7": "3hmgDAyjYQZzdGS8BAFCARGHf9VPUF3CDBoMsyr1KS7YBKnJaFiroGFjzHsYG8vVkMMyEbPLoJnA7RdrryVmVYLf",
  "key8": "5sg1CmDzbeKk96DRwKAGRkKQ3Xh49atXsJUi7urXe1x5yko7J9agdhBMEpVmq9WrBTPzcfYhAyAwm2eiQJ4UXkXH",
  "key9": "55PxrLgEPqbdWfmvsAcsUBAtDigeh95aWxo7EReDKtpde9tUnunQ8juiDzYiGc7gNidpWhN72Wgt5Tq5jjEcAKeQ",
  "key10": "BP4NmWs85pcJwDFcLmmnTKqR4sFmtA7oPPe2Phs87HKcQckcnBTAzfBdm23fcH8ZQDzajDT3PXXyjyJcM5Cu1MF",
  "key11": "3KZ81F9gDhoDB1VAusyPqpZrWygHQx4YHVEcotaeQnyCHV1HWCnsu2LjDGFCY6hFu5b2yFapzGaBWBqhsNKXYVfU",
  "key12": "3URoAgb6LY9a5xzPZXLGdqFg27tTneNd2v4znTN9y6Z8TgXZ8EER434mCTdMAevjCmbvbYz9jVJrZD5X28sP3MhN",
  "key13": "AZCMGEXSjp5uBRx8mF21LpJ4H4PuN3UQyQrxd1xJ5ZKWk24LZnjUHQYfAw7p6kW8rRQD7gjJZpanM3skhvvKeQC",
  "key14": "5zzicHnps11aPF52uLRsMbfz7qXwiCxA4a1x68L6Epy3QNYTLQkoPiJCbpiXBTTQfqA2aP5NdVo9x1CSGNyg8YUX",
  "key15": "451XS2fNjrz3y7QvYcREsPf4gYmeUJ3s73pAcMUb93LnEhPgigraADv9dgux5oQSZuw7x6AYkodZk1BHsUApsWL3",
  "key16": "NaDDY1XBD6cPaTYe19FnWv8iqHeRheWwfab5jPucTJicJgQHB9RdivzRFd4i27m75bhgDQ67ntYyeAN2Q1Tjdad",
  "key17": "4FSTgC9mDVwt9XMXp3B4MWF2Fa7oFyFG9wNCK17TfxqXnpRtyqdDMxr3kc34RHAEqwHygVDP3xQ4MvnYdEQmVTky",
  "key18": "2Fc9tVehVjbVCkQCWWV7nwZuBLaVvfkJQYX5NzRagnPccC7rHU2FXKADubqAMrheHFFQ651BAqxSrnERVcTnxGwo",
  "key19": "61BQWELXVjQC8oSmbNDVTZC6RLJuHgQJH6dMEsFn3Ecdxx63yPbdANpJjhRyMZxc8tGBNZfPoiktGd2uyDkjpr3U",
  "key20": "tcxCUGaCCGtdNZVFYetKzJNxmJToq2zpSWiQG8fmF8ZhC1spNLq2hgeWMuY3GvXKzxJrwvT2HJiNgVXrcpL4nz2",
  "key21": "3PwhDhwq4Zqu7pkwBiduVE9CGnaB6NgJt6qmhkQN4UYRnB64YQzbggEsw8qASiqNifHW91wLeb18hUwZrgD9vaUg",
  "key22": "4Q3xB82vbNUe6q4qUW4N1DZUuEwNQ2R9S5GSpLZWbyBoEKM5fEAajXKuCeowNtnqLHMDZzQzX9ZmsAFMFN1UJFjz",
  "key23": "5mgcnFuriE2LZqR38fSpGKmYrh3SQtQZ7QWbX3FTXZBFt8g6FktrvwDfZEv8tABmKzupMYUiPfWp6fTnWb2aAdz2",
  "key24": "3nBV1j8uPS8DkwpswfADEkD9PHcPzhvjDJCBczUZfR2bjkFPJUsecm4Uz3hf3wTQuoQnS4Ena754QR13USuYfrT7",
  "key25": "2eDtmCqXthtKqc8Wk69PqUuim9FN2EgzAkQmq4xANYnisF93sffrhmaTRT5Hxurw1BsqLMMEKQvYNCHLKSQZmFdd",
  "key26": "BkxjgamUksD5n2KnyHeZh9eNTJNxoYtc5xeiGEDmYgSbdn8zm4FHVs5StiyPhBmJjdn2dxKHJv5EjWB9zeRH3zd"
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
