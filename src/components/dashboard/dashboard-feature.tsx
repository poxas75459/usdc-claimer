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
    "2nobVr8AY5RSLXXAiC37aR1pV1dFoW8J4nJgYscX1JBWXtCgvEJwzP7B9stpUVagaJ9a3ouMspXA2SFU9Mw3Cb3X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MsgkQ3V8kpTr31t6m3Ynac42PBhuP3VP3Jq21aekBDy7TzQyWpAHUBEAC6izVhMtGANwrbtaYFQK6ALXBPMDZ7p",
  "key1": "jcFtDkYKb7XwQjCmPvad1EHEFFH9KnhPTAu7QUwJrSxKJqyiGt4gz3gPTD64uTRoJETgWspcFLpACkA576J1CzS",
  "key2": "GtW43xjRGGumASSmAmyBYvxkRP74gkfSkn9psmzgUeLxX41Zrm95VNHg9YMDvGbenUQU9NYqMJFNQjgHeKLvQfS",
  "key3": "3Kwn7T19VZ4buhkDED5Mz6xzfcnhA9XRSo2ceQBJKNXh7ByBWX329TfS1uZ6vaJY95VGZynXQ8VXKHHjZb5te5xo",
  "key4": "5q95zDsUSvesBPsTvjJcQQQAskbHNd3sEVpTZqXCXAgdvXz4GZNBjQCpq5hQboXnpFQ9uFVA3Ae9EJUxQq7mJ39d",
  "key5": "5jhGcsuXKbSK8vVadWhSo6A33E7BSs36Jd8fcwR4wXQSyTtGQk6BU3tucssZyxbXW4e3REPA69tNccfBh1VXwMaH",
  "key6": "4FdmtUUunZAtBmfHiS3zeMP9n8hQpR8GNmDYGmTnZaBkND486ou9fAreMUovwDTx2ubacQW8HPMHHGokfWEbmVoz",
  "key7": "3fcoWPfYBwTi4FigsQZ4koELg4wKaxN7MwXvig5GjzgovK9DEKmjFjRbGaL7S84BzfpKJt7EZunvcw7GPG7cpXJL",
  "key8": "2dqFkNa91VKRbukWoRPaTjYtc75TatYy29CZtkhNy3VQj7mdEdVqs3fJyzP2xw5iTL6cxAMcdimhD3UPDA9twUjW",
  "key9": "3Mb1W2ZMgJMdApX4oTqPJNtdzJ1pBqEyu48yPV8BWi5e7facW8joGBcBro8yuKEf9MpUqUuptcBxLDfy9eT67kcP",
  "key10": "5UsNjQkm1uP8TQKgcLVKE5PbwZTjRuRJ8BsnBN9ggAWrpK8SWztwPv8KTcMntngMxabeoBNcXMGevJh6vMz3AqZe",
  "key11": "41iNgSuc2BLPTRKEKjpSt5A97PN3Pj391H8N8oaehdxf44C5aMKrULKKGk2K2Ljed9pMrv9ATFjJnUSecQZD4QRp",
  "key12": "24kDywEM4Pe64pHWX9Qa1LMmEPCjXJupLNwqaSwBBK3XX9dBF7DVTb43PzQ8mRLzxNX9fDsmbnbWkhuJVpqSKRiB",
  "key13": "5Gviu4ksDHafkvdFfXG6yU4dmjuHY1MHh4HAsvVcGMKfKFSYaq6W3DjyXMwoHSWzKG8VmSJ3dwoeodpZef9qKnjd",
  "key14": "2zQGESYqSWj3Zfmj5hdahYwDTM2wBSNXPYv6KQS2oEvXsFHegc9J7BsxNBQAaun8iDFAHDPQCkJ87G4RoSoULhwE",
  "key15": "4HCKo7TgET2QSoCKcF6wpRyywqUr9TXb8kxdUKaZDdrwqjEpDPXwGDNzW5pqqLN8gPcDWDzSCZpPfL9e5xxvpR2f",
  "key16": "25ERPtgYHtAFXEzB5hy5WVEDFoN5dn2tn8yg6yiASf2tVykhzCQqf5GirrSPyBDQrGj2fsfRtu8xiPhxmesv3Kvv",
  "key17": "LsDsf8oQQSADLuSEqBDwEVV2AGkboVnLsytbpQJcRp91qMtRkrkHzNHZofVFdAz8DsfEJVmhLGevpSTExTUzGzd",
  "key18": "cUFG8TeT36Z3eFviHVP1PhiNGTFyJaGpm5fts5GNw9H87y5pi4rNNbEWRxjKhtgN61yuoxKurWefKWz67w5ccHe",
  "key19": "65gGSXC27FGYnXeiLNoK6x97xc6xsNEoAW6KyaHLa87UL5iF4p3t4LJ9dZewUcqT8Q1zoXxQc3eH9hPw1YacULH1",
  "key20": "56ZfSxWqEU4nHK3Kn49hPqvzs5oXy5FMKsMhctdNtVYcZvaYpjNdmswh2CCbnzHCVZ1RHMnKG2T6cEfsNPaMoyk4",
  "key21": "2UKk4kQ6uXDZMFestyzpC4hWPd97jSJv4T8M53XQXzvDqFdVfy5z9zqXjs78n7SAYoeFMbtpH9KHmMSyrNt4kFoK",
  "key22": "3462GwhfGQWAFb8H7FP5dXwC8XtME2Ec1bY4h6imkpvxhNsNy9PKM5JXqyZdSKseoUqkdcqyr23QteHoq2J3n1Gn",
  "key23": "2z8TErrdnvsUrRwzm4ya4qQVCfGw68P2hBuhi5UBszQdUa7YxdsLpfAaAecrnM26KN9D5WvJ9dgwQdW4grPyvAXy",
  "key24": "58QHvBApiz5XaP64zxZHweis5zne4EZxZAaebVKUHUZFkH5VfrPnjcEuZkeoGUBDXLwTSH9U1RiPUWepooAxXvaK",
  "key25": "2s5ciByQxQZrYjMuQ6SrCcfBgViyU1ZhHa6CyVL5gufLcKjBtRrMtdahjhWswe4BgyVWTnNcN7pUnpFfDiksSKtL",
  "key26": "4CdPtxxvX7LKFfj7Bo9KvtS6jDb1ef3dTXNLxdZbyfpACGaWp2UtNLh8fuCiAFDMdC1eDnbxJS5JDceyjNuo4q74",
  "key27": "5Kyfj5PVsWgGHpcDN3mFQ9MpWVEerjJ4xDxAxaJ9aDC4vv2wjD5CXGoHnHn6H4xpzKePsb7ukZAwNYCrSvwT3n9S",
  "key28": "5xMPjbDmWtajmFzeMAypgaf7Ajd8AU8w2Dn4E6rkEPoKK4eFdqWYtRdcqigen3zX5mA1QYd3Z7P66eHJ7bzDZ2CW",
  "key29": "4n76K5PWHwx92FBRuCQ69GVGStSt5bJQsW19gWAnx1WP8UdhGxErtSqrtzeWKxmzwKmA2RTURkSkH3gALcXGTZbX",
  "key30": "5V6nW2UYAQy9ei9VazXrXB2z7FjUAWuQxKnrRVbmvgytsmLXQYgBdyrghmd7hrS5EyDCnJWAoL7nyGcSLmRfZyo6",
  "key31": "4mXMbhP6PFcMLZxmzyeoMGRXUepBbLFbwHMwPfo9T9GuwNgHbDU5d912wK7Y8j1YQGTqnQgG8SiYFzt2pZmWTLAd"
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
