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
    "3UUvcd3Cx2Qf4p5S32iCFjRKJc9rnz9uNPSkv9f7puQ8wgPTiRmoHGCymcwSgo4bQwPrUDNKCFQmfhAhwwAtsAxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABe3frDWJHzyEENZV1gAXLvsxdHdRiWYqsxzfTnYkTAuoV9F1i3zgamVz8SZ6LAGEKAfzhEZQ8wwuqjUsKFccX9",
  "key1": "52ub1At6vZ6diJ5SsDp2Noqc93cbLiS7ynJu2o3WPhS3jUdDkz2WDv5wSTJE2mjr9A1CHdWjsEUfiZFb9jzaNQXN",
  "key2": "NWbQC73FZdiTRuciTnH5GsWmTG6eXNjxs9ftjHpBxj2qj6ssW7dmR3gaicPRgLBAb6GLea4w4o5T5zhV92ikRjb",
  "key3": "4rAjWmKdxdsrNqLVgaadNRq7cH5N9fxX5woi43Upax3qyoGPaoNKVVPF8g6795NMML99jfFNvHxqbqvwfL1LByFo",
  "key4": "2NSWeAurwyTcomz4pUn2UAKmiXVEUHT6A6FkCyqrcSgDJnaHPNtgAQjLZB2UxhLuU9CvJBsTus27wYVkeESUnPm1",
  "key5": "2mxxiLJVSi8jMvjKcHeeFVmyy96QwgLHRgsZtyUtSLSZS4ZnEETagpQ5EPgqetbWLDbEtuDvrjN5kjzzmL5mJRyq",
  "key6": "4QewaKqSfuLJPhnnVdyyeERfe6yFgPhipFQfw5aJ1oxA12V1dWm6y95HvHoXb4gAd31h6GtGsPjGtGNFzQTVvm3E",
  "key7": "ayYdF8tEJKrYjbhDQutxZXVHr4aQ1GAjtiqaznoSUcyGSB3RC8AeJsVXinJBNWWAnooMyDKiLCA752PTagnJg6S",
  "key8": "4UxSzBKahnnASyWSEm4sMwgA6Y17KwnLaXkMm8gBYGky9x8DNo5LPFcpW9TNGFeL1WJj676hdBhM5VeJ9eEo3enq",
  "key9": "5ocpGgokQN5Z34hwJ5RgWo6uCNsrqdVsV7JTuGmYmFktv2aQhGwNdNq3AcFUJMVJ1D75cF8cgj5U24QGpQ662xty",
  "key10": "2LWtWhkByUJQKiR4whvAAqabfCxGju16hNWueqoa83PmBEbMJxzbPdKJ12bF7nWc9wuxSS1YVxySE9QSZH4C5sbK",
  "key11": "48iomaXS1jz88ryuBd6da8fQw7BRbHZ8oThYSt7rz7sxVBUDubyFgQNMCVbiWXk7DtcAXnYe2s6SJvgX8tFdJFjf",
  "key12": "265jV7iXxiMY6436K3sBhowFGvd3rSw5ydfDUwrfRFo5C9qvrPxddgLYgjWYL9mWjxgRcjYzaJ2uPE4xYCsKqmht",
  "key13": "3eQFTNPA22MkiN67JdwTQCdRwBjGFCD557ibKDRk1n9hq7tWzpLkdqb1nunihYXjUC7HHFDPsgsWmtqqm912JH2k",
  "key14": "EJWJh8YC4DmfASgtkR8GZfeLr7E7jMDQzzq91QsRUaVxfxADu4kDMd8jMkkmzcWVhy9JtHPgFjkDHiKJmgEk37F",
  "key15": "43KgVGS4ARimGCgX7kJ9jLomLsL62fnhMUndsz29SmDN6f7giy927wuyfvEjq36pXvNVd3aAuL854u13iVa3p4ea",
  "key16": "eE6j2Yg1unpwRWwmU9W2TX3tsBRCHExg47qUyngswVhxhwHzF9L5drage92DNra6nYYSXsNipRCxGgyak6kLBkk",
  "key17": "5cXAjswufruAxL7okyHdujbbdnLnGKWpVyja1Ba2MhmVy2vBqwyMKHJ2Wx677GvRTkZCncJSiYV3ruvKC4KXJweR",
  "key18": "EyMuwFqhvk3LQFtKURSN94znW6GUdaJ7B3xyTziHdN4hjjjfLS46VXmYgahb37aTkr3XC2bbgoegUdHqC5kBNrq",
  "key19": "2Y35nFBcskPqa1WzSghjWaUQE54bbQDX5hzHX1VJp391EL6MtJMDxp8e3BDEzw6TiTiBY5TqnhXrw5pjMSdnrtk8",
  "key20": "5Qx9RJGYc8DS1st6hrhXfyLPTQCvBaxfvWfSgknLeNkQYTsTk3hBYiQUMagVD1HNxacyoC2r8kUJTbZfH2vMsxc2",
  "key21": "3hdjPjm91babDy1JmyqhG1YJwUkZTge2XbwD2h8t9hZ9k4dRigZ1YDPWBYCRDbdAYw7WY3Jf2s1HmdrbW5SQVzCH",
  "key22": "3is4nNHVJUfP36FvYCh3hnRL56nWZS6Xd28WY7ki7yMtTgCAoFXmT9idY44QkhkSo3v6xk84hfU27bqyrbvdfvf",
  "key23": "23GXH8vzSnfHx1uUfx96gfANnuUw8X7D2oeFGX2wRyoG8NjtbrLbxCK7k23PiFKbkpyk49ciCcZfShsEMkC29iW5",
  "key24": "w4k8t9G2atvUJAsdGK5SKqnXKuK7aZeBYfYenso8cpgHNPL4aQBebMi3PZb21dt1jCo6aTkkDeHp2pnU7hgAAQw",
  "key25": "Trqt2HExhryjG4Hfw9qGh12365A5fDzFAXhvgxiWYEykCw3rQDtB5PUNGrLUZfgWeVBLvbMnEsE8vnoq5LHuryc",
  "key26": "kttVrEhnUiwZVuu1E3WqWXTyaS9QeXK6c7w4d4M1AhBtqMLrCLdUgooxbcAkZEbYEQGYhasFCxzovmUr2jHjQf4",
  "key27": "33rgeY2ujURajyrmjaSKTy1NR7CNfvRE73X3Y26Ub8yvRbV2qieAK9WsnySMtpiU61TdpWhySDKE2Ux4wxy2HLNS",
  "key28": "3GSFvXC72AvLYtrcdWNhqyZ4KuHgFTNYkxua6m4waJFYMndyo9rrU9D5EJH5HJXkbbmSEoz7fW6qJLt2fyq8W1f6",
  "key29": "4oQEVSVtaQXhmcSwUy6ck2sPUoa1fhWn6Lp6PG7TNyPeQsSFAceebiBLpqskZ9gCBPzsc5WbNwDnVxdeXgZfbemn"
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
