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
    "2rGhoQMrnEENEU8cXGqcRFGdQeWpEfsgcMEdttoKLMpLn9mfef5QwGNVkrmBoyy8PCsbcChgp7P8q1Ver9JApFPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w93f44mB2TKLDmX6cBiZ4F7YZAyNX6wcvFCQqtj7xWCd9ejg6ugkmZFgcavHebPsAGKtQksMYfcufV2TBn6HLHT",
  "key1": "4MNwWzKD75Ji5eCzAwp6tJmwTRN7iQytpB6FoCMKEDBrTjMzdCYnbrmAM77aNx2uNAs3iLrozob6eA6FxPrSKj2w",
  "key2": "5cuGmRe89N6LbtqDi8V9X8J6MbLSCTbrZewDrV5FR7nFKgbTLMAM5FTdcnF6ncJWAYWhg5JcnxK9etVC4SvLBEQz",
  "key3": "4PdVVc6v1A7nfM7ECWQdxby8KfMpuSSTwYDjpsF4SbqQbpkdMxNNjKdNDuybmBvvUv7JZpV9KMybiDrZX8ju6DeS",
  "key4": "3sBPeBXSBrDJGQWha2gNL8EGkX9p9fTDf3cnhYd26tz8bhAdmuRAAxBjkJ6jxcxi8dGUE57hXEgBFGeRcMxcTECF",
  "key5": "utkSmFyCN4hFFt1LrfQJYHPxjBUZU9NdAMuWwvzmACyhYpJpVGhobWD534xtbTvKxVvA4di4QMExG7bsDWf8tb8",
  "key6": "nUjaWEtdheGctx6e1A1dK9AYEv1CQq7E8q8fsod76jFhnDNZr6sRi5qxkzF2r4uaNVcNFtSdNr6P5Y1mtitssCZ",
  "key7": "2s83ashzJ8n5RReyNTd7e8ZtjCTo3iCD8dSYxEhSaGugw5oTJocQyE2ixLQ4FqcLvd1cywt11AEnak7XtWmkh2Zd",
  "key8": "h71Ade9Unk9rdR5rbGbjxuVeDcXRLcnjq3GgdgycZ33a2fvF6MoExnVRFc371Lrg31mSCGwDssMbbJ9CZ6NEo62",
  "key9": "4aNQvZ9xcB4zBEgQsxXYWChDdXKy71np32YRGAkE5ruFgBrRd83TMvbm9BABjhxZvGXtjVfGPJZ558VTKoeYxXZr",
  "key10": "4n4qmW1cPppFL5u6zB7rM8BcDPdjQm5BAnRtqZAHbt5HN2XPF8TJgCwhCXMuZ2UgFCqWAzXMiJtV2EAGK68pRF5w",
  "key11": "3SDm6S6DP21PTDW5s3FKDexx3jX571ub6ddsUX4djHLBqNZcPfFf18R2BynxMfwC3E6aaWRLofmZzidtdu3GtbZb",
  "key12": "5cHtez9kstKrvNo7ewzEKKDR9SyamvRaRY7VKTC8ny9nNwvmVGng9Xj7sYGmUhKbH2JpWjG58XBpscmcfTGTdGXU",
  "key13": "zPNfEv499wziKwxx2bQpcjVa1wkQaWPzF1gyYbytFQJQvH7bECtm4NNJPzekX9fFekGzh6jh9oroCH4PYzqkpXE",
  "key14": "2p3Lx4kixPFPG7L2q2erLNigKXP6jgFa29JgBqmcb12JfXe87D9Sbx5bU7JDphxR4PYARioPrJHBn9aQfFCTk4ov",
  "key15": "2iuiRMCfF6Ddgv4qFTBEuvXMwYNT8xMRx2GYf8kSTRGJGntPtNa5SbD3Z9sR8jMQAUEEyxqf1sKYQcyCPzZF2gqh",
  "key16": "5JGerT6qJKE1J3jU9TBaquX5bt8nCqNDmW9gMzJsbQ65rZrkF7Btk4rPfRV8qU2xoLSw8jK4oVFbDcf4ZFtjAJoT",
  "key17": "5Hxh11CpwpWUPbosJE7ryVzjrJYWEWbyv5i2sJtK9jQgXPrwjoZvkgXRwfCc1uTrWy5GKLHq3QFSzLJJo7qA9Pbo",
  "key18": "36pf277vKJ4hKmjV3c2P1MiKJmLYKf9cyVBp2xAktVF1Z4EEnPrmn3RGUe1bydgScEAcsaJfvU7zjZuRd57BN24T",
  "key19": "84uthe1PBqUzSRQ58mFTxy7G65xFDqbMSRmpiGaBexVnv7uKreKVop32MXD8qkPvgaMrZ1QsqS33gwjaiEVHNsu",
  "key20": "dbqSxtx2vk5GzMb79J7PH5kw9jEqM8ctYpqLsrk9rEPGpNyVvpmisgWUsFVh8DgBqMrYdAD19QLzkUaZ99ctfvg",
  "key21": "3tor8uuEoVKby5qdmKhYGP1rv8e1TywycoHn8FWQCP66LE4gAruPb5QbThzE2cgkpRuqk21vidrJQ315NRwLBUbz",
  "key22": "5RXAciURN23GCXTfdLYiha8K9F8aAUTzkjeoKMob2u8ugmXxNN7LzLYX3Xip9xGBAwwpMoP1zKNP5rexPirmBuxz",
  "key23": "2CEQasx9V7ajk1vMnnpKHB2oWSth1NuLN35dWP2wtBN2NDpKVzN1qJrsN6BCqaqmEme1zLMk4NdFPYRqq3iUV3UL",
  "key24": "5ydHsUsJVaK5RQvxYt7LdiDxryMdF77z581NEESheoZWfmQt5a7TrhNSWohziB5wMtML3aUTcGd88iKhLcKzKPnP",
  "key25": "4Lf5PoQVBQupuxwvm6T64e7KTAvokYgiccsL91SxL3sPJjZ4ajyHN9yb55p8AsEq4EJiNTwFRYt8uGaK3pBzfgRX",
  "key26": "2wi3kjTeMNbburegbP5kziXKfYjPdpCwWhY9JDpd3YEpZxGk2S3hi5TnfUn4Cu9uJbfWuQeE9dKitB84ypf6PNGd",
  "key27": "ZHjGoEHxyJL4R5H9Kv9pa9Ax9NKHzFSWQ72LdufM6m3pQN5fGXTspKUUvAzgPu7KtF5PGLkwfma4oLyqRiptNrM"
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
