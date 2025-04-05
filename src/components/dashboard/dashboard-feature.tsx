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
    "g9xJeKRpJdVjCTW1K5efRiZSxLD12whmLTjkG9bERyWz5wGG3k1q3dv1AXoTPjY1g4s7Th3MjBHjB43fMwuzBDY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nHpLk9N85uywrMR8SWPDNeBLYyVW5XfZ3D6dJAThN2VptobBfUngF8norTeE2GNh7bAru9LXhK49zHmL2Eu54Wo",
  "key1": "3z5RJr9jWYzJpayPabpJhhBwaKqCdXY5crATR9DM7x4d5gVZjn4Rq5MCsVvJqs4xKr9qxd9myLDcvMkDsBM2DSpv",
  "key2": "4EskVMh4Uj3QhkVqyRsR3By4TApB2wzWPHDy486bYgHunJ1sahsyFiLZ7m5M8RK6tFBknmePDWhReCjBDPXdkJD4",
  "key3": "77uZqN2FMwUYGiruK7Q6oEKCYej5afRntbMKNM2y64douDaXGTyx3Er3wHmJLHRnK9S1MikfkaV8biwPcqEpeQy",
  "key4": "4NNDXCMiuchbUHfouHAg2TeRQSbs8zCh6qabjPTgoobi6kdVs6Nahq4ussMp3TCmsbXpWBiyuypBxneAgGRJRidD",
  "key5": "yUkNATpwxYrrEmHCvkZvHeGSogchNkD3em3zikZpYmnr9XdS861mcYExcPCc1Yu6reeVjhvNL5NshoE81Uz8uuw",
  "key6": "5fJYLBWCZfKSkDJNiTmqa17xteEFJMz3PuTvUz3mGu5cV9KFzkVfLiwZSFRDFgDwkWCzDDDcweMYFL3dCGRugvy2",
  "key7": "Yre3NeTSstHoVK5nJPTvCVwnHdffN5DZfd1uRiLPX3hAVvHTLWq1kSKhSMYWqVjAa5sus7vj2CdVqKr2bzewrSL",
  "key8": "49QvQdQdkv5bT8QmahW6VuDM1FLJmjfrjqaY6pYXAPqj86WYpq5Psvz7oB7zpGWE51v79HSDRWm98n671fZDwpxQ",
  "key9": "f17mxRrCn45DWJhq3va7YySuwTBtnEW9w5oPFmGpHUAsDScjcuFpA3CXNkGN4RRor1QKxa6h3jQTPacXq2WUDKG",
  "key10": "xwYKGnhmMPx6u9adgVtnR5d359wfKUjLk42MdaeEmzG6bbcgRDVWnutAYtDrFPRku1qG8neTLzu4qqiCaujwJok",
  "key11": "51qmFgPEibhovc3C3RQFqAQoXFhMQR8N5EaPMccB6mbScpuYvGwPw7iehs3gDYstDXhQGMUqDCuZN8BfzCA3Ubu2",
  "key12": "3moDuoefMEWYmhpNMwGghcGkH1M6YJy6EUX83ZNPc4Qq5QPuVtcApCyeY5qMr9HUToN9RdYgjFZSWi6cYfXWR9nx",
  "key13": "2GmsXBM3fxbwZArX1uooh8sorqQ7eL2ZYhNqF1M1tdihHWSP2PU3miWDGURFV7VuchDiyBmYL8KeeNngX5fUMhd7",
  "key14": "5EvAAEdMjV6aiCLhLD7SkEoEgifgpjHLQvwa4SuW13GkvTuyQt2PNuVP7cDGKEtR7JGoLwLTSmAviHdeaU9BhtFo",
  "key15": "5b6JyzK4MjkpDfBLEV7K5FMi9ZsxsJ54hsMJmFfKQ6PDtt6FVrws2QDzos1LMzrNP4oQYndwQ6GLzuY3PeAGcndk",
  "key16": "5vdmhYb8otB7nQwYrhFoAwJZJbXx4hork3VzDDxYX51nwWcrueC8AZr47Kk7ZS19m3jCY9DS8ngFnPY2w4ZqRaA7",
  "key17": "4hiN5dMuYSqXUbQJ4B6mR9JNA99Wo5ma2kuskwvKMpvoTwohGMb43E24vUMgjVbTGtuhP8CxMUhXDLzx2ZKHn2Ub",
  "key18": "4SKT13vXcHTyGZytYhC6ixmHkUTNFkLJxw5VUAVVTQc4qs54Gg8rETL9nokmv6FJqRCf9MBFQyw2qnWEi4JCXSE1",
  "key19": "hXQCQYR3BKo7RG9kDEtxT2bY9TMAsj5EDdGrXheyTXEgcfaqU4PnngczioukcQVLYjccF3dr6P27CMqNXCCW7j3",
  "key20": "4GtNakrrHbSH8VzwPess3XAHARGCGUwCxtkRa1GWGBEV6pdtmd6BLrUqAsttJj4878HxqrCMfNdaaz5TXCzErdsc",
  "key21": "4JEsyvserExubjVBqjUfK2kYtvV4cdq3DWKnuuDcePZRWRSDisRFBh5MYP4MfB4LQTxnJ6krcnqzXBz1W48Uya3s",
  "key22": "3WRc8GKKzUxK3btx37W2bZraRH5gczFiDTxsQZfJMBNsTHLdWAg4L81NeRFoCfQzJ1kiHr8kZQvFUKNdAKpCPJAS",
  "key23": "5tyxJqFtCerj83jdT9TBXRJKyUJWSVuV3gDLBGwtruap1zVadJWFf2DELbYQeFNxNEzpouQudXYNvC2N2aDZKaC2",
  "key24": "4oT8y5M4o5KkaG7h9dfpQCQLvoHZTYD2ZW3kFGB8KcKLNdLU1k8FMx6B6VVTJJhT8hQTn2uUZbg2G4gmAL7sLe1h"
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
