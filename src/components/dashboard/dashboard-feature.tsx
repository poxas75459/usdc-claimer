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
    "2aykGEbfXxNV2jXMEkyFFv6unPSgrUekhi1KYM6ExGJ1nDeCaPe8AUe5iiCock4aiQBmmGf6Gg3gmw2ZGYWuxZKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zajSTE8vXsZt6NCGjwqWZMZ7ub8rpA9VxAPg5quWAUaitNhFmKe6xuzcHwB9vmy6TT7sTzk7dz4mQqih57RzpKp",
  "key1": "2EdnUp1sWN8VxLjJMfJQBN4UwDfDV5JEWJT9wZTwTkBYMd4LQ1o4G595VgE23BXDD9TPTHAwqBoT2cB7ZgWNVH9C",
  "key2": "2JrLzudYNark8rQ62MF11Bz3QVmsFPSvTeC7j8HVSD8CWgC5R92ypXqQragtHn111pDk4hWokra7per4wRYL7ZJK",
  "key3": "5X6Z8MfYDh5RFpGkpcJnAQC5QUHXzRxCzmD8nSrAJ87kKpPh4HHmWeky2YvwxnWQuNAMTFxz4yYgWv3JqgrDgk8L",
  "key4": "3Eea5etRiGQEysSvW987wb8XbkmZdrT1B5qRD6uwPc58SbGKKUaWrhQKNZFCndsSA2WSHfSHEAgZgyZHTMAMqLhD",
  "key5": "4Mrikcdiq6dpno2qE1iMaQBZLw9rEj6VUBfVZJKuoFZT7yeNrutdM2BLgm24epfSv99Uf4eHMW8W5wvs2wPXQ84B",
  "key6": "61ES93KHHLvnLuzcq6zNquTmpdftpJoieSESt525yqJHvcSmzxTSNAupGfv8htZ5xNCvnqCExJYFNpBaNMYWTQ7U",
  "key7": "2iFVVKXcaafftnq8SXR6pg2LDyHNzcUv8UZbyxyPEUP7sxCvTYijim37XRCRRA3ETDV8Vfoqi8XwDjPdZH53T1d2",
  "key8": "FNfbT4stbHnhn5WZnvtUSEMMHu4pCX3UFXMKUHm4y8EKHV5i3jEJiamDEahacrarZwbNcw8K73CS5whmuMwHH5B",
  "key9": "2r99nds1ysrwKXm66CM8MHdAJ7rj8uXgzMgfti9LDBPPmn3isi8Yh2DgK7T4DCYjapbP2Ssn3ufoDHpPFP2Ehiav",
  "key10": "NVWfiHH44LnkLZJHRNZh4sPdrz35wG8M799jS9ahgToWjn4P5bePF8ZWZ1K55tZoEuUSY5KkKfLFd2MVpK9RtHB",
  "key11": "hFtDukHXwBSy39gDtXynxDNSRAcZ1rzumS6Fe4qVjFnvK4BfipXAdDs5YWNYJg3s3C6EWUeg8ZdcfSjh6F9jDai",
  "key12": "2hzf31iug6sTR33RFFVzysbPNcfYxXvY5EUur4b1oboXJEGcv7cBe1twYrDadWVtcwKxHTMdgcGXnALbb5MZaUxr",
  "key13": "32bzb1ZoMAXunvShTDXUBJpJs9dTFFeb76hdjmpMSd6mc2AuEZn93BVLDyEq1ayyEoN8jRYAvUutzCV79PTDsYG2",
  "key14": "5NhCzkVTRpDxKSuUDrfHqAFYJ1XBheWziTvk6bQeF6YComebSGFDMygU3o7cxkbs492Agok8pFSX1jkK58NLJ3e7",
  "key15": "587H3BttUcKsHqAg6tvmcT4vqr8yMXNYD68j1ojpmac4iywz3vyQmRuzTXguBUFbvGZrJnz623uG3xdf1iRdnuav",
  "key16": "2XzqVy6cQGpBzNXtopap2ZALuZnryfsZKpvWntDbC9cCVLomjH9FdXXRw4wxLuVRNcMyV5K1SbkSgoLqEfBbUYso",
  "key17": "CgfMo2rRZXMKPA8EcMk7nz9vFYr6yS4yaPLPiEzURTqMNnJq1MRgBrWADpNFRfMSwfyWLE1VRaEHrxh9QdkkQYV",
  "key18": "p4fUGCPZH7Cj3RFoyxBgTE21WRoeFBNeEYqsCJeaauzgu41Bw8gRhomNgj4yKXusHrjAD6wRkJMegwt91iWtUB1",
  "key19": "5ZYNQnFyMJvbkuJ21wJx5WKiNdDXNd3omD7DR4FVKtLPgrmKbgSrG1Se9aMCs5etwdQk7RESr7GznuhkNW3N841e",
  "key20": "5RT2bxJKj8uSPkhZ8mkEMPWtsLLiPfbWxJZEPyZzYVgoTzNhDAzKTQUVEBcZ6tRMjKGFrv6aHWbeZRoncFaQcGy5",
  "key21": "5ywkgZw81ZystF3KF2ZozMXLSZfgrh8Gj6foZqncX9BYhZYjDfujHe3keyRejKi94D9fhchHQ3jnPtmQ5EuZrteS",
  "key22": "3jDpomMqAv9uLsg2Wej5rqX3zYwDaFXR22pPmZjR26jsEciNv2Df7eNiDfyxLgVSRQdgH6JXM3ALKowmkcVTzv3n",
  "key23": "3QkWs3UB7m1KGFNH3kMZ79Sf6y9c5bDJwhURyN5TsL96XsbiNr44f7iKCy1U8qyvufH4gix3kzaiiDYeYJHZ2ZLP",
  "key24": "3EJyJLk79RoZ1TY6NX9KT84uSbeRyUCYRU7bqDAuFLkjQ2V71reKyMDB1gH99MZLmGd4VvKst1nGdVN4Vh4dYVbe",
  "key25": "4mobubvQscYv8LDgNYa37TXi7kVLsgiwF76kA4EoVgzmrHRLsd7ek6VqQmc3ZLYdzusSphcduiuxrCwnduy1kBPJ"
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
