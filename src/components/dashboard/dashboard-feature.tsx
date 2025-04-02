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
    "4hVF23UxPpMdUMnYzwsCsYte7zRuLTyrpJ6sd9nLc6p7HtZ6EkQcd5qZuSYDt22zGu2RnaV15y1obY4SE2pBfcTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28iDU27MKLeq1btzJc8Ath7w38NfNeD4euxv8oWTpDDRZYuZ9RVTeo58ZVfozaQoeVk8Q1k42nrMeQdcKq4m4dpG",
  "key1": "NdJTCLGg127CTeYJva2GAriEKVwiJr4JKmCDH8V372JpvCTo1tKPCJBeRr6WcTCteR1YPbq2ehzFFejn3TMsydA",
  "key2": "5YX8A3dmkU4AnvqTnrJ5oKAcRaKhogDPXfE6mdiBoxnRRtYGqEkmCGz2Zzt6hZueDNgeK9jgfQX47jNwr5UdDjdC",
  "key3": "5t9h8WeD8thB3jaXqEP51tv6wy78pkvvVEXABjH95JNvVFZgKXdfuVNuP2BApKbMjMWjJ7XWfeZgDNmvjnPmDoyT",
  "key4": "gsCop9mhLmg42XDTc1BwDNamFKg3NNFVzcf665F2LTyJBn1am3Qj65wefAWkSJVWcmNBMcDyxuCx8kANBavmX7X",
  "key5": "5P7xiET6SZiofD5F9mAenTsx5WBv7VLiWvzwbKwC4PorkHZZT1HtcxYtVDGU5nwt7m5U7YLUbp692D2cWsvzGCr6",
  "key6": "xvRu6t4yTtD7gyNw9KCz8rnr73jVpczABQwhuSGWbuMkoMNUztCvf6Ewtvs5cpAYwqWbJCY76uSjSTktQ3VYrZG",
  "key7": "3zNXJic2JxpJkAVzrLVGu3ksxeV6frM4DmjXQHFPjPPXX4gBFBSoJhcwoq1Qz8auyReLMcpsgKmEGEyhVNVbzYv5",
  "key8": "44u61q4KJnSTtYvTdUgNaNj7Nke8gkrQ6JpH3rcHfUcdE9cdnRu2JKJHK9kw7TUrkmXHQwzukZLhRdaCgNjyfZ8s",
  "key9": "4KMQXKv9zDZK9zXGyrsjpXhoB8Af4tKU6uqbLzYMbjv4HydEjbG2BgcjiGwQ6jzDkNozkRxxbxNkaPNLFAmckdyb",
  "key10": "5ZKx7LHEXocN4WX84x211UvQ57gLW38ZQprGsMbFA2LjCxNiNSNavawtrNVsNsoTKi5rjbt2mebvYFrc5aFkac2k",
  "key11": "2NAUAHzSNazSBAgndLEZUeddNHgDjg8os2NoWztno1owjCaY8CV9k9sBU1i8ZshdVnjJmwdUg3N8spmCG7rw5xnw",
  "key12": "5BYRAy2uerD5ic2hpAEhYk3kpamYwoWCfeQsCyWrkT8AxRcWKEzT9MhCbryNGc7zPLpUh9xV5YrSUufosVkkegq6",
  "key13": "RQyTsAyde75M2Wkt1R6ZctTKGdoyPrfWed1boni5LYbVZycadyJYXVQh8kBUCGRuroe9GDvBrtauuo9RqTA9M1x",
  "key14": "654ATuGbXeeDvD2DA1ebfHUmxxsWJ2WhLnXojgjcYRa7Cf3eqMThMY76RazPZxZb6CJBYw2hBin5LDbzEkr9zBBq",
  "key15": "3Fz2sr5NHbMHbrgXUK7xZ9oPmKgTkakuTMguayP7vTN98ab3fVwyGhSsHn8fHczGUSViv9HnCYuUgMDgYb3WtKAf",
  "key16": "fWmgDypMZQUxWnAtETwdhK29BsaRS4gUWC7zK8yaGH2dUY28iPUH8JpQWknY29deB3xGPqRySc4KrGr4ojG1sgX",
  "key17": "3FwkQhPHebGC5qfym1dCMwQDjbmxeEgabTmrwn5puT1ebDidXYnFfpi7CTddiQo8jcG4SMM9xsb8gxPC4kFAiGue",
  "key18": "3JPzwLQgevm8AGVg5oJdk5W9yWTUHF6G7easSsiyKJzbeT8K9AapR19q1ww2R57xyYdQWSA5Ke2BNnoxV6SSM1sR",
  "key19": "2ASgNVyG1kuHi3jQxWEbP87iE82ysCK5iNwjjSoaYdoNVDNFEom2PdKkYCBAtpC3cWMnmMMvGC6tKUE4YDWdGqSa",
  "key20": "5jy1owPBRLkErBp25TrQGf2kiYyqa2RRFSi4hwCDM8GBTFFXz91FZm96CDTkYiTcYJ2Scf7VpXZct4FDxxYabRFf",
  "key21": "6sw3CCiv2jZy3ouQZg1FTFzmtmxDCap9qeyRsmUjU578cGowQsJYfyMrm5PoJpZTUovqV84jUxyXAso6FJDrQuL",
  "key22": "5cyRchy62j5M4pjB6zENUCguTMDyGbYBwYg28zTGFLhGrvaGZ6Bg5gmiR6uUBw2dZZ4f7eCoY9K7bwbpRePrL4m5",
  "key23": "5hXmtpcEEQYeqRLpoZb6q6rf6JdyCQaNMShKZpW8JLgYtavJq4bfiXZLq3PnptbmTFt8geCLX7nCZ7qEyefCDHej",
  "key24": "GKXRq9fqPiSxuQxH97JTEW1oUsabLbzXC4gTKb3nuX5doTeQSj9LMUXfMQSgLB2bRpH9rFeK2262YKiiC31iBrs",
  "key25": "4WLkNPpTNAxYF9eejk8Te5Zn7QsczM61WycsZX2meeRx6njWdMFrfkBmsMs1StwwXB4PgxefL5vPTkd3EdWiT4mS",
  "key26": "5pHZdgUTnKutNsXAo9k57Fkhna31pnwfKNXzcGwpcAR2fKQGEUaq9Kqp8fvrHwijFbCxrzUQJxzgBJE65K8M4Qb6",
  "key27": "fJZuQsJVxJRnqUtk3uqjLCBGXF9Rz6tfynHtLZUSU3qkvLvpqQveUEF4ArjtXeFsdpJPPc2wTiMRfvytbGZEdy4",
  "key28": "W6mRUENW15w51jZQXhQm4nDs9K67U39huB8G1bPWB47DQGih2gbfKstMSwZPkDXJPBMj5TTUzunoHUKGnUzXqP2",
  "key29": "apXR676hNdnGDkp5Lg7SogBo7hKoDUsqVHnJupePAdJqg9h3btQMBQoXr7L4Q5Zt1r18Btu3K8WfUw6wNbNuHYe",
  "key30": "76ARqAruCTCoXAGP7xerXPQBioHWChfUTrGZJ1ne4CE2aJMBibrNbwmUyTvrkBr73Vkkc8zmxGDKpt5MGXzkAXB",
  "key31": "2ewq1UErRVLYY1G43bsKCD6nAwE1ziVKyTyomMkMPps1yAAhEKtDMkEJRUgxkJ6TfCjLk1byUqyYY8CuMvChLJ4S",
  "key32": "3YZPAVZkTFUdRWQuMLMuS8hxGSiMGhHhxYqC8mZwUobc3P2bWajTp3T3rhYJoMsffFAMajpPCAYwKHymfgg7w6eZ",
  "key33": "4CRNCVGuPyF2ZA6VLwR4x5HCjTM7umQhbzVJoUJxB38ikUrYPrCb3ks6XXHrc2QJZ77S3VKyNNcNKnsoFi4BfMkP"
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
