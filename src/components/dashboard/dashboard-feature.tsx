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
    "P1AcXD6AaNBXe3NUmWXbJjcjHmSBW5SDzgAbozUNwWMorfArqAMBTTsoGY9goq3doTLpAbc9wpUU24gn8MenLJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4irum3Hnj2LGX3tjPXtZVjvWdwNrkgEiSsREXzPKPTUBPdaWgEQxEuPb8xsn9CAgEoBSsev7cR4QBRQQxAAoUYPi",
  "key1": "3Hg8WVFNg1az4VnVcLzMw73meg6Xks5M2oM7DocbHDenfw2g4SNGCUkYKPkLJ6Wzt6sdVhUqGKKYMuGiQ4LbJ6wD",
  "key2": "475UoJBeLXeFZLJdx2NQFxWmDeekNLYK9Ye4y8nCvB4QqULBLq3BucRgsUNhLSVPXkjGPeybwcarLPxSAyct6zF5",
  "key3": "36GwwwiVRVFk5kztJ7iCeUtxfmCgmHo8ZxKF4dqsmdtPSYhKJbJFChvRndVuZv1KgjnqC6dretE6D2N1QnDpV8o1",
  "key4": "59UW18qVYnBRFqGvQSnV7RGiKTpbGTG3oWybiw7ETmc2tpwwrUvPpDM3MjwzdC8YcQuR3B84M3yQNSYVamwnFhTJ",
  "key5": "4sMYnHM6oJdmF6qFYSTZHLgNwj3rEWc7hQSuwCjY7DhccjS7E5ZPUm44oiMMwew8ctt6wuVikUwb4dnnWbQMmjBu",
  "key6": "2kGH7JrKJoomrhyFiw8XXcCtaUBcrtJ7hHZngqWQ7474gQ3utqbLZbZjY4q32aQjQcttzGoxr5sEuv6mXr5WjSm2",
  "key7": "4UkqkN8sLrADtPXUBtwtNsRiXNANPKqEFaKh4s2ZvHutNZajwfYheV3wQ9xVutJoW1g7VBEo5rkEccsXMNDE2Kpk",
  "key8": "mVRJxZTEUje9bkE4SKrEhKAY3PjdJx2XUNi3osuFq5Z7CLbTnSaTXRGaJhc3FxYfCAgSuKekP7ogMtS38LnTwZc",
  "key9": "5qJFewwrNDW2jWudc2aSqkjeUnsx2Juf3VwBXV8BP9t5mSqoDm5BcHHybtrvAfZaxoLW4N5ZivNkec6zTeB1AwD7",
  "key10": "3nBYSc8RDgvF6RPbLvtSpUHoyiHK25tzNrUYongBwRDNAdMjiJQoyfPb6sCkV5sqvnPgdfKkCe1QvV68Z8bjSMFe",
  "key11": "29SYRRvDN89FAubuUhfPgAJfJ7Zo728NFscEzi9eMWNv5thF16VLRqAR82iLRCYi1S7pf2MKirtV9LntBaFH3XKp",
  "key12": "q5ti5kqnLUnVA58UmefX9Dfb7EfArVmEiMQ3VkGrmHkAudQqmuTVoVvVNCoFb82tMvwDst3WtXjupeTeamrLkkQ",
  "key13": "4qKLBPdHZVWBGcbYwhgWjRPstVpLZe4ZcGP8QCWxpm4YVEgSLMkopyJircy8ME6K8NnEZ9CiKMU2s73Dy7DsSgNP",
  "key14": "4KX3SS2T6U4WbufZf9tcjmTeFQrBLgMKm3W64YZ1NAgCsumzDYrEAKua6fHu6ZLeEMssoyiNyxsVwcXzQjigWcHk",
  "key15": "pTsEfnxVWrgiojWQ3hzdc9nHEFyiyT4pVqMbdv1P21wXzACvSKXuQKSuiCNAwqQZedvgiqB2tKfkUx38sbiMfiY",
  "key16": "3DAddTMwyRMJa3CejxviRmecxFxqVMih1R7dkdXuFZkn8J17h9ZWqCPurTaLPsTvLEhG1q55E7nz9Kewf7NHdHUW",
  "key17": "3nf75Ffdjjft7zHcftSVzZXGnXDjNFWxXs4P1riySjfBWBLAJVCTQHiyFznNp9CF6Xibw7PBjKFWHdc771qp7QK",
  "key18": "5atQcc8egqAkqcoeYBUmDtBUp8xLJsLFMvyhvp1nbgDWmDkKVRtCTTg14juaCfNfoocYeAMtsCMpd8xXYZe9TTAJ",
  "key19": "2bmhUG2dLKpbKZbQdudabYxcNySGWXZhxaHvqv4SytvsBRUEnborSeppp4HUxooYzeZGqBLoC9xyJHhVQdSV4AsN",
  "key20": "3SBCB5Yn2tiiJ8MbP39mujyE6GbL3YFHeNE3KczzkLrpBiVHFS3gw9T3imNNgqpxi6iAkgwV1WteBKKmmV3JCvzn",
  "key21": "3soWgAEGibAnC7H4owaEzRomVG9AFi6GfBLc2JyTYSP717WXYpk7q6fkt3S2UNoLSzmQfkEzmbPDrfMgrfjFs1QR",
  "key22": "46RDu7cB8YS8dUaxc7rhq6tJ5Ldq4kCSEz7mCeoNfdffUWyHNGxT3EDoBLceVJhPsvRJcRyUHS5ZL4k3RmUS3HUj",
  "key23": "3CZegtTFD55Pr81mWMxHLiYZPFQVjEFDXCGyYtWndc5PU5PvuVZ91ZZAUWEYQeMgKhJL1pH4R2rtHyKSYVkgpeSy",
  "key24": "hcPVrSi2PhMtQvnEEwFyvVbZUF55Y5SCEhzDdY66wYwvyLAJv36TD3Uw6cR1A63R4WkAWNPK7oDMwrK5cYped98",
  "key25": "4HQbXD3XiB8xMAFDWSqdWGaKRoqgMBjJ5AkDRL2gKaQL9u2Wt9rP8yT6Mz8SjFHwsXLmdb5kLjvq37ZuLgQ9gR3e",
  "key26": "3F9Ac9i5aW1fgXVTA1cujVwS8f9bcHCQb1sRLZ4zMh8EMbwAoTCxVccfch4eJBSeGGyj9iJscYKy7P8Q8CU89Uoz",
  "key27": "47jyz4Q72viKK8njCL1wLSgVPAVe6ZQedqZNEweR14cfji4EM2HinquncTE95Zm5KNMQuswJPMJREoh5wAYib1Q1"
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
