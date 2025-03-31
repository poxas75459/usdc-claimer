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
    "4PaSNZEpqiLzSPRGCchrqoyF8YYJKfwHnwYNAjg3iVwCUfA7UhYRrHi6nR3HazFLgRofavykzaTFXQpEtgAMEjYP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rrEwh1B7SfrvVgxDQ58rpgnuWnwcjTcHFTVq6wqNNXvzY3PqBBNgpwN4QfQy7M94QWJ2f388ZL2o2kMCygPN2kH",
  "key1": "2zaxQ5oxr9rFbzq7YqqXjHc1CoahC2zYundR4WA5eJwtmYhUKHExuLbpEBtfmTrZZGWcboP6dKL7QU7ipuuG4NPC",
  "key2": "3DfsEnhpnvvzbKKa6vNcqSX91A5iiiPni1PFpLY6nM4aQXg7XJdfYHCWRh2HjqjPcw5JXbVCLQFDeqSYEek8pi2X",
  "key3": "52EUYbi8vSHGFyjgesy4DrSvJR2Ut4hSFzXE2WLMzZbjMPQYckEm1GCiC788Cugdp7xaRFWadK79PjUjT8QCXADG",
  "key4": "7Y9FhpiUuNEy3tDqVRqydaJeWuProLoMyLFhZh9KRqGuo22cSDCLjxqoW9TfmSu51zTJdJprrGWWL2CKqsZncsS",
  "key5": "3nQZ63MAvREhQMkz8DwH162YK2kuKoJSuofnkDdbk4MfgjGySAKdfx9Sih17kGCZAaf1qmufMwEAUWi6PzvTeyvw",
  "key6": "4ptMVh3qFrxpu84Dw1QhvQR9i1FbYyZvRdvU54jyikUiHz7hW6SUoEpga6zs4jezbhxUVE4y44HWrHkzm73frCPT",
  "key7": "37hfVfFZrWPJMVPMCWxRirX8ntpgtHw3x4JVzbkQ1CK9hSAZ1UZstFLbHdoYqpqr6ixcomm9qQK4a73oJPSj1PkL",
  "key8": "2aaThzADcER8yjgEnyaN4LwDLXnSCqKQBhKPhgnaNTcBES4owPZJ9Q2sNjbzrQQa3kxH1oFUheVeZPqpQ8PpzVxy",
  "key9": "6a8hxzqKyCCcphipsTzqpLWHRRY59XEwG4ae1JK2vpA3oewNP38LEgUXhDggZs3tMahePDuGmFAewDDr5khuhpe",
  "key10": "5U6KRUVDEpypQUit5SitXdKeDqCKf2iVhakXyhThU5pTqyxd2PqsV7Lfcn47wriKV6rk4dptw1QuvxTZg5at3Qig",
  "key11": "5a12tfTa5jm7KjgmxZRc7Jrt9jtMrxQwWLXb8dAmnomVF5E5oVL3nYhXznAcDay2wvaSXuLk8JnqSUWjZLGxRkL6",
  "key12": "W6tbzzze1xZXWDVzRpBi3fEoJ6AoZxEeotqJ3P8o1rgobAGAVA1HomHXaD496BMyxMXQ8poMrRdCuyKnLoFDm8C",
  "key13": "5C5aFNiuRo224vBPGof6Yec15WVrxB85ne6atqeaNDkir3ymPRGhpjBjbFF2qzZnDddY836Z22fWBkwuChRKpVcz",
  "key14": "3BogiSvSpNutxAfexuBpabscjMzeg9xXEBFSJBa6e9hHBKdRQj3fFit79nyZo1xQFaYqb3QtLe8hkyWts7EyMRBn",
  "key15": "4MHgZbpqJHpvwXNqPhpd9wsddRDSe1u6bwAyYwoByw235FVKLygpDNKY9waqF8bGuG6QGDQQz96W7sUy64BYTU4q",
  "key16": "5jGa8szWF3SehnRjnA8UEcrYBA5uMZSXHjfsifR5NQ52N5eEFzMYprV2SgwSF7m7RyDoHJKiTfo6G4G2oTpHQieR",
  "key17": "2SDQCVV27QBJNWaHCcgWgkCKNFcqTQHmR8xwjyR1kEez2bcnNB67t6msVhyMtDmqE5ZvTj5mwvFEs4afeVn4mgJR",
  "key18": "cnJ1C5QkLXEnGFC95PWJMniYd9RFRu6p4bqStWMiro8SiCa3Z4De8WJeTpDhddDshAFpYsHLGMnJGpZgwpu7SrZ",
  "key19": "2nBnyGNq43bdmyh37kvQhRfoW6pjmi854cTfuMK1ibnNmrfxsKSnZoGzPhVRWS1WLVBZCFQHL9RHPPPFRhFYV4vB",
  "key20": "37zjyFPbBhVDvoPqy9M3xdAYBDu5pnykHn7Ax89uCVP8wvKeMSxZgdFZpa4obZvw7jAUs8RfF5729M8yPqsoz8UH",
  "key21": "4UVjaYFami1QFRVemNgdhZXuA3fpHsxwhzQ5bwTjSRVF1z4muZQzdLgQpWPNUUJSTSwaSLe2W5JmEGXVeo2heSKx",
  "key22": "4UKhrRioLMXVMW8pwDw8Egru6GqajNTG5e7gB8M5bSZssUKLWshLhqB87sdBVv22NLaTU7pzLRNMMB9mpRU4MQDS",
  "key23": "PG7BvoM53dku7iEaSeKFj3hWqwSvpU7eb4wZHLEGZnsNoVCB8D23HLYZ6Ls5gnWuicGrsSDcbt4awXxJwSSyqKR",
  "key24": "3RXyEWYxAuSgkYJBbshuv1qdCP9jCKGvHghy7BFarXh74h6kxw129QxbWhW39DPEZUkinFP7L9TY1mMhiD68wQSe",
  "key25": "5Wh2bhbB7urFZkSxDMsGf72gB5EB4ikq5wiVRkNiAde7cBsDSZgriL2WLpX4j1qCmqofv4k7Z6tz1b62ZRsdgWdZ",
  "key26": "4ZpKakUVYKf5EQbAjpoqSruW1Q2XddVY4JUmQn6bKV6W1FVjBt7yxojkn1V6bKEFYThNsZ5ohs7N373hbgsoSbr8",
  "key27": "5wNzT5R4Yj6BroPfCGq3zPEJ89jQ4XKMLpq4Gd6nQjSq4HwBU3o3k4w4AVG5FfNfomFApBEvNXXShmHLQZXiupSZ",
  "key28": "2SRKMCBuz5SmZdJtFvFMyNzaa86NjU3zHAF6BkhPeDwPfMnpxbQW3NZMKpC9xTFAe2epppeqKwpAK9tBJTYkqHq6",
  "key29": "49owPjp33GVajUs6ZuXo6bX96D8K2EuAqf3EKzniXWU7bjMdvouNLHCj6B3L974ZeQQQLuBbw1DXm9MwAW7se5YH",
  "key30": "5dEcH1SU1ktonNRi4ncT3guTBPX7J7ieQeZBnjUqGy1NmwjyMbFo4CvMQraroF8hWy7mcT14jVR9S9JFy9tmkx56",
  "key31": "3x3vdPPfijdcZQ6odhjpoeHkC2ViBv12n6Y7FkgNWGPXYnGqhAiX9izVkmoGT842HFnzY68pdwG79udGudzGtmHv",
  "key32": "2dQQohc4hazzZbVkzVcMbTd1huCScaXtmxswhQ6WrxnXdw3Kcgm7wh6w9R7za5csz33KvmTAeF5pnxaJdK1KzonG",
  "key33": "4JAaBFUXsFKGvLNbHWjKCs62SiQdv6QVC5BbrvWascC6qWk1EsJ6gUE91jZ6pmZdJzD5eDXWrKQz63YmZbFnNofp",
  "key34": "GvCLK3a99ok8kSeAx8GXN8FVK79o4oxpA7ke8rccD3GWQYkbDQda8Any3tQXg4WrXiMUddSKVKtCf7jcN3cG6gU",
  "key35": "48BYBd1oERcoz5GoNmd4ukZwigbUvnhvyUTMTYqftBiYHovYDkepJQmeGn5EH6zEvWf6KjLTrP8hVTGfQnamxWHu",
  "key36": "4AtMbDNMJgut1oYXF32U5FCEiALnqc7mGXxw24D22pWHV25XTwbqAechpcvN24W1TCrmdRuuUjgrDxwyGYNQj9qY",
  "key37": "2QYPVxkwnokro4VycfyzYu1XgTHbW3YLxi43MjQeqNq4fXwBcKcKrjNQvMUghbULueJ7gYF1maoHVZYVJ6gWgLfM",
  "key38": "21axvrf9TEzowMcqgG7zMHFj4Bwnc2JLbsHkJLKJqeCzKQRpTfvTMFdMcpMdBeuaRkJqi6thG9gUFEmDaKcAs3dk",
  "key39": "5GpFjceHkUUDjQechUeHdSyQcp6W8oZ2RLQmfn6zaejBdRqKAbMrePyRVfhdycfjWnshr3mQQXqCmUXbUfHHi8tT",
  "key40": "4u5vFdrnmbz2Z21U3uu42S8s7KEW9TcrLoJKtbGjZ4TnUESNDzYoGwjyFjsfTqS7w6852Xks9KYaUm6dcVMA3W3G",
  "key41": "54XToQ1DdhmUi1i3cKCA9L1m3NiQ92RfDvWexNAZcDED2pyuuTeABdFfhjaf6T7eQfVLHdMcjFLqDFeDQ6pjxuAt",
  "key42": "5eK21jRc6nw6jFztK6qJ9ZhmxfqXkgKFqg2d5WB682mV3ua2do6aBtF4Q9i7U5Z4fS6poy3jajk6fCc8hZyYvXYp",
  "key43": "32jpBaee53y7CCCejmyUUQdB7x3p1ZZHSRusrPPSkds5wo7k1M94EpcPDjnZUQ7Y129Jpb9kqqLeAFAAfo9NhMDh",
  "key44": "ZSFg2owtcmP2X1QWQFd3EnCLoB1zFFSdqGNAaxZkmD6VTRehKhzuUzCDr68xkAGddd4cY1MsTXch1zrtfc3Wr7k"
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
