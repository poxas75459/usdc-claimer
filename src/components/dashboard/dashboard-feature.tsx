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
    "5MUFkjVWg8dWvbdtzwGQgZr4hiYbaeAZYRGsotXaWVZWq4zFwQjp6KMLZrCHPixomz6egFwk7vgyqPt2ND5xj28u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y8UFRLfeAkg4hUrvbKg16ef8VSRFhR2dp3ndi7qvvdogPd47tp9RWXzWnWMG4Wpqwe7j16icsasaiKyDN1gQQhc",
  "key1": "4i7KupHZdMUBRJRdnPRveTXugu9U2myTXeJMPkVt5vW39uUxSHBm22257QGnHVgEhqcZtxByroBDQmVVQTY8pi7o",
  "key2": "2LMpyTjYboJoaqSqux4S1h629r6tNDtZn6FHQKTNqvQg8MJ2vq7CMhxM5tWCfZkoPEanvoNGS6o9T5tPi87tSCmj",
  "key3": "4V3Cyyo11tXAAj38A6THuAwigMhFho9uQSUGqezzvoSuuAQtBc1mJ2DPxGq51W9m6KgCbqqRStbF7hWwoqHXnMC1",
  "key4": "JpcGddVQedN8qWoVsJKdHeEzaBPyeKPGxdzxu1tvL82yiE7UUQZBNN2tfUynEXJAyVeT2nfAgYEpFA8EwVTCwVf",
  "key5": "2dRs3JFAoYNmW5Nc4D3gQmqHEm3fz4ihx5fR2GqtKNynAoRAagYJQKCwPR42JiQw9tLVt9Srxcr9QQ1mPXx7xdWX",
  "key6": "5M958iBcPB8GsdnYY7WeHa17dxRrU1z3G1wxDdt2er7r3ahnKYeDJAPfzU9dDa2mhk6Jx9WyMSZXiR3jQxsJEnMt",
  "key7": "5mWMNW3yUChMFbPoHM1i6GfkHhutDRcxspdnraK6CRHppZuJnwomYqNsH7fqvZwBSHsoL5HEo7qGERNUJfDRr4Qk",
  "key8": "3oySnWvqQttr2Rsec2Ma8qKwTCA4rTMMYAhpWCE2Fq5QfBqCG6jPPY94qRySqomxVeDjc6rYnuPNaCRW2t8TfCEJ",
  "key9": "bAXi4wZkv1vmRxUDRkpCLChBs9scB7je18HZDQZfGheSqRz8G6gDRQhfWTkp1J6Pz9wVtEagWvnxw2qYzEbiJuc",
  "key10": "VNVBra4r6Ci9sx4epYCbgQKUe86DPxPuSFNWUzyGN1DhkckDgPKS7HEEvbHMoZgkP2ar9eweQsSLanBhX84c3ry",
  "key11": "3xvuUqBtZTaH5ZqvpcfVX1W4TefgkYQq6SaPbLuiqQW7JKUdqCGWbYCrohQCfgwFutjNx5swEb2ecSysgTSP4DRH",
  "key12": "58hRxj3eqZySQYcGnSz8buAifKBhYy1hryb2V5BGZjuNzbT83n1w67yLzNfrWLrvgYygpeZQzax29DmK1zfF8ZdF",
  "key13": "5pbA9UWvmRQGhMbaBNAZzBMk4pu4LfLu4SW2wwWVZDgN2MW4SsMw9gm7oRyWaqhyo8aLrFDiosGSS8f5VYjCBNj5",
  "key14": "2d1Re6uwosUQxYwDfE2Fi8noehT5QgNHLzDZFETCgbnYHpYTZq7xye3q93g8LiVKRgLyyT4Qtqx3a6NgbwjJPVhM",
  "key15": "3unndgWqWwJBLpb1Fdgp6FuG2AGwog4tgr3dDeTL2TjfFFtVTo2o8KEjjmiYhTZqRCpebyguNZh5VGPBi6JjHmZS",
  "key16": "dBRCLZTcZP9Djq4hzoYeK2YfA5PJ7pJSiw1pSZcBYHdpnMtUgEVmJa2me6xR5xmqYxCNVvmAjpGeziAtxvshubc",
  "key17": "2sH1Cmu2xNoBcqLAu6ERKPMpRMiq3ogo4tnx2FBTpgY6QJsDQSBrGAAAoBn3kqBLxXUvzKF2aw2PKscEwDvTsVim",
  "key18": "4tASc2iakbKiKSpYRn1ki7ksZm9ov65qK6oJxNeJWS4fRXh8tTxsLdLMdJD2aExb7F7rVK7HnbWcDrG8PjMwfe41",
  "key19": "2XjMLRw63QbrwFmWtHhbgwWtv1g1oZMZcbdoMdP2F7QGyXC5bEHTR6YbW13tENPv9kGPubyWMLcWWPsoDn2SRMZg",
  "key20": "3Bhq4pW7sd3qT1sfq4TZbf6wh6PaiqezrymNYJPT5tUYofnuCDRA2xaPvo1hcYDiCmddtvvEY3Y8VSbMUAWeaMme",
  "key21": "547S1MDbwHuWmcRifkNDis8trii7WTL27VWEWYpwpo1DaCqXZeE6P7eUmUdz63VM5tU7SjhLp7VPTVbRLtDkSCL2",
  "key22": "5V9vAjccPMUq1rGFznTPGSHf5XoCpbXQDeYkv5ASmYjNLuipeeyfSwF5yoRM3bH6xwWQxnY9uz5rDWsCg8NjjRDC",
  "key23": "cWntieRJg5MfjpWBDMxugEM8EQ6RFpMzegmdVRRGtfBQr2Rb28FFhY33ddgd2E1WjcY52DDTjEDXcbLPZFK5fJ4",
  "key24": "2JNUunFdpiTAc9ewgXXRim67M2se1UbbsVQvLb6HRQFCYTCjzHYedSeE8FxAuyZhsVKn5RNn2TKAvBB6v3iErmVG",
  "key25": "4PkypQ4FnYQWbCX6o1T9KMugDZVAH9eRiPi3zX7F8JEcjuYksRU3bQbGvdM6oA8TDHhXojGoMFAkoU8np81gVgZa",
  "key26": "3NHbhpQJSm5UvAJREBknpcXUa6YBdTS5yULESnBe6qxfbDW7PhY1VTC3pQRDYMtLL6uNRGSHEUr7pCoXyXPVJjr9",
  "key27": "2qNccV67Puga4KuT1LCvHCF7zain2virPymNTEuuATA8JqZxNUAqBitLpWiF1JQwUtH8Fxk9s1RTPRSFRQgxwv3K",
  "key28": "5CNTj8qGx6qj17CQBRZrNwpxn1TsQVD6pZ3479Q62NuYjHBapsThRD8kUn3Qrm5gw9hBJVnZDtopdAK1UJKj9Nwn",
  "key29": "37o8pNbs6M4WE9S4sTA3F5hzo2gPVLXE7EHDugtXSCU8MN7LQYdLhdGwZnMvNN8wUnNyt5o9JaDM2z5s3YnxULW5",
  "key30": "2KagapnZs8hv6VN9WXdxbZcgz8SsXxQkGmPJmwKGspKHtM3A1zaWDDxWXuiur6yC6wTRa4HiHyWZ7wbkHbTuyvRc",
  "key31": "3mKjCnc3tmZp56cvxZHp7gsFPWbhubGaskSwRSSFpYR3TsZ4B2iCxejoMfeHDZLHEnrW2daruHwnv46jKTNmNd6M",
  "key32": "33zETUtJoCJrBLLU4GPF8ta8PcLxrs7ZuesNbY6VpbHMBDbbvLyY17Qp1iMsPpfJ5ZcEUeRXBc19DZoSfEkb9nzm",
  "key33": "2bkPHVLkFLX6rXZy4ymkULRWP1hXkskGY581np4HQvheKb68eWzUjQ4byyPUCauPQcXHZe19ntJriCMMKbrKqQ9b",
  "key34": "3KNjoVvmuEKELJZyQpcYyStYefcYfeeudLSbMJ8uJCn5RpRf4R3DkUffPPk3eWFvMJUr23Mp6t6at8HMLtR1TF8o"
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
