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
    "5PmrXNpmW7n2hqrecCBSHGTsqm43dXrR5L93A3Mk65DRTu974qUsXVtJLv79svL1Wt6DiHxRPB4EJc8aFo6CDQp4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s4ExciN64q7eY2NETrfXo3mszAzZfqiSPf5GnqYuYdwtAfsxvAGxstSPQ1SEsxhMd17cPqfjBXB34GXsVYbRd2E",
  "key1": "3khdpqRcgq1BRUYEk8ewJeBUhSZ5ktRm3PC5defB41P7VQMHQ9B9Q2QkM9qnrwvPaWZumGtrZqfzW718fQ4JN4EQ",
  "key2": "5AYGsW9hgTWvXVkzgTd21mwFAH12hpnkpkYjueDmEUzoudPAfQofBUuNRKTXneSpodCi8HHSVa2mWExzQ5m717W1",
  "key3": "pyeTSdmxD5MhdVtcFs76ZUq95L1PWUb9WFatfgf3oR8XEJZAdRyRmXTaGPXof7Y3oMt6rBLyUEtnhbuMtzqoKJT",
  "key4": "5zHnxwe7D4LAW8Zk3P4M5YGnTu1pP7Sci7ec9TGzdos7aaq4PUhXJyHzBZAgeXyaqemwGRqNytQoBsbK16urH11D",
  "key5": "5UhiFzhgNdSZ6YEp9E7tcRxDJoQTyp4DqZpufK1RCKZ5c8Qg3k6g3p6ZBj57Ek3sf6ocQFt1tsA6J58BZdvrXqHz",
  "key6": "5FRqtFFqGZgyEjgGqxRG1kAMKG4mM8VDiMZhqFwu8axwQxLyYbdxSuvTnp3mA53fwYHpw9mrWESkaTY97LmfrUAj",
  "key7": "691MD7VRjdEY7dnKeaTLPeg2oGj55ekW7Zv5ZJf22575wbpS2PKk8ynXpWnnFnTsZJxaJFXFu53uDhPmyM3nm6z",
  "key8": "5geUp9pXDbJsKyBDVRBxfEjc4menSv2fMUG7EabGPPJenoYohSh29ieXc7YhA3YehFHD57uhPHE5FXq5majUrVF9",
  "key9": "5XaEukBPdx5mK4ohdjG9K3ptXAxefxELVoSkCcNep5EGhKvoqsgedM773w2fEWMwMn4Ashg3pedrCLawWr7vDb1C",
  "key10": "39oHaBRZyNR9Q4upYZhuz6ZnWyX7oaR493Fcfe7yfWiP25Qu5m1yLNFC8aYtj48rXUr8JTz3TB9MooJEZjtshg8m",
  "key11": "3J2fBCePDtN53KT9J2aJgeL1eVFjv3CCqHyfkU8K71kawP8uqGpq4tVWTrSBAFRNYUh4YPLUo7dbYMDUMcriVnbq",
  "key12": "4sqRTrV1ZGVLgX6JYivNqZZvma8WGL9gD5Vx5RJgwdJRJWMtRssBRsTDsBBkDzNrQ8NYGRqSUbErK8XjqRGSwMe3",
  "key13": "5nSupzM7P9TMY3Ay89khEYQqeCnhWLCLZhUQtToJGreSKFFi7sqJXi6cEuXD1ShVpK17DRUkfiGEfkEXbm4PHYGE",
  "key14": "3GPYBqQf99fWyZqkaZ2uqSctURPSEKE8MV2FTKjeMiA9ri9DDg4GAUWSVdHo8oT1hawnTXZLpJ9nu1acviYkHY6t",
  "key15": "2jboYrgTxHoVnSokyXwjTck1GyECvkAMLU25ewnhzysFNRjhQ31J6sLkfxdELmEbPxiEh2m8g3xM6ArdfLWKJm8y",
  "key16": "5N7KVGgG93oc2CMikF2W4pZhsqkstPhGrZ7Y38h5b6TwkwzHt7jSgrUjX4kfjubEpW5xj4GWsx1gh3FayRdS3eme",
  "key17": "4xV5d2Cn8PfJBG4un2xLmdaURgtGpMa5x58F5bcpziDeJN7bAHyit8YQqUsLWDZ8gVKvrjPxptPUfQxbvQVFq2FD",
  "key18": "5c1SwkvJFtfys45Z1JovQ7YhHoKSYh63XTY4yWXMNqSsRbqvBhc8EZdKgxs19e5ebSeagVHUsTkWMt8Mx1jo66EK",
  "key19": "3L8RhdkqJbhytvPhfNBejHggh5enC4WSBCqy3PuFeS7d2vPXZTYLeEtXsQ2MwtyADCyfxZtmhmKCUMKt4BJwqW6G",
  "key20": "2nyXxm4UPytjkM3uvBYDFRzhiTfy4rye1zKBTjQdJkuv5SQmgrMkvJSSCsR9RoyvZkJnFWBhG19dQNBFm3GFchaT",
  "key21": "3PWyYt3szi9cXJQjXJwGnMRvJSUACGeLSWWTRT21yMJL2wDzo19R2R929UR9SbiP4rMWTUSc69DEJaghQnenJFds",
  "key22": "4mQrbrwAS2tDQqzzKnf9QNsjUBtSJZMuLqTRkbtz48ywrEwRsucq38NyzdzKJSNDsQFBGWbJnbdam9N6jsMdaFiS",
  "key23": "2CtD2vVY49cRJbBaVubmLddSsEr23EtMwd49enR4ZsCEH8KD61VQE2hSvVhSqvEAqMda3MwgoviUfjtHmtke3RQK",
  "key24": "uDEuQofiJ6UQSj8vWPvmfAa8gcNv6bsxhDhfsSddsTnN6Gkr6o3AJH9bSXH7yuNcKFYYFCB42NLWV9nNngSoBXs",
  "key25": "4WKq4r3A3PMDKNqVZWbhtHx7PmxdoqxSp8qkDt5rmpWd21qw952tHDKpunHSuxxNG2GNWitvpV436kY7NCNcRSU5"
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
