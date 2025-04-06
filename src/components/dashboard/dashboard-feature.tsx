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
    "51S8pxLJZxDkmu95fP6NE852bUjWay35CW77KMQfKLzii68mN4Een7KmKs1BNsNTFxJU7hC9THbsewp3ZBjZcQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yRnmXMkN8dfhZ6iYY5yLENmKHsmwRXG8Sje4Jy9mD5EwP9CmciCRYb1EEvNha33oxFnQzB58VqWMgXXwasytqbK",
  "key1": "51b5AgMaDWzhgNpQyptx6dsP8hHGfkwFkSWELGigwQQoEzT2X6X1Ep7K6R3wNsMW3ywZWE1rcogeAVHXM12Teee6",
  "key2": "4Rfo6mXST4cKz4y7G91gwS9MbBvryTBmzDdnQ44gBWRdikAkky755DqejXLaAK7uwjjja2x3PyGv8K2qsnbWnuyg",
  "key3": "5VhBrRMkSubfoGMkq6Wkg4dZzM4HFjqZyDqH3zzYEvp1n8xcULKFndTnRxZMtSVgrLQKNWG6kfwQJto6Mw2sNXKQ",
  "key4": "5KzzUnVejcAKQJVwYTz9zYjaPAuJm22NrE6F1uM7eVEgZqdhyc2jaHq4Ro6uiWju2fJXRLAbTbspHL3k5XD8ce9M",
  "key5": "5VGz5acQx5XVbLHrdGoAsS7PusfW3CXHvGTLMaykSQTs2Z69auDNpHGqhJmUQn8AGecKnCsMJGgjNy1Lt1WHGggg",
  "key6": "3VCB3y3JdTMczoCjDMh2sJisN9nNtLBBeiiGRfEc4vxVU14dCEcXQFMPezq4cokEAQ1NsnMsE6iqwoJ1cvzeTYyV",
  "key7": "3CeP652zHrB6cdAgjKS3zgne1ypyrRnTKYmv6mMMH5yQBa7DmaF9c6EbucPBgPptcdR1jZGtsf1NvN6WJVEmANZQ",
  "key8": "57eDBSgsszF7J5DKzAtiyVwVwMP2aLM4gmNSB4JuLiCuSwbCcBZ2cQFHAQodckBtp9nKgo8w4KssyTk1vLVcr7K2",
  "key9": "4cM9S4g8nBohGYqY43RW81GM1mwxTJ3AgaxwQuqw7fvTgPpxYcYFTu2RecJb7HGXBSrPrwksRJQ1uvGWrAcw5gHH",
  "key10": "3dJAL12kfSsKrdaNvX1tw1bmQbQ9wARpDUP4saSDqnVuG3WsfPQu9VptN7Jn4aD7pnMGj61xF1PbvwRqxPb91Rwj",
  "key11": "5q9k7km9LS7Db7bzaWrdjqFZ6iuKcSysJzVn5Af4ECkNmSgp8N5HjCTyMhDvmFbQssA96KhZ8KiPQk6cdqwKeJLn",
  "key12": "4F3pHT68VocxcerrMQ3roMVoxEHfeS4pHqPKyJXzjvL2AzE9x5T75pSiHNrBk9koF9RsqgJjhwsM79FwjAH391en",
  "key13": "4CZMRXPgoM9yXmn5QsCsumsPsqeC6GJHXBeQhAgA1LmCLEGygt5BzKcfSEKFHHsvERbmRgFjCeofNLNtqqguzo2C",
  "key14": "5ACnRt7PTYBEdGvUWdkc6AK33BRZEPj1pvzgSzWkBpu9W1wBojT25wehTGDhiWfHJmSZZJngUGT1Dxs2cY3u4jM",
  "key15": "5VER7MvdU1qbdR8umtu4KYqH1iqQLHp366kjLQGWGD3SL21njrWG2S5mWrnQSL5fbLoh7L6rVrQRuEMra2jdqL2X",
  "key16": "JTSAeUzb5omYezFhvFYnTRbtzFqJfr1ipSVFQSmu8gF5qHtLNFKMuzbL5m1AYxx9piPiTmmEuqsaRr6KH2NoRT4",
  "key17": "2DqqF5N6Ayx9zcu1D1T2QZH9D68ezCY2nZ9QZSVLze846N6K7ZBCQoBhhriAEwzFQQzBDqW3hDD38AY4j9Tqt1TA",
  "key18": "4LgSJa6ZhXbE5YrZFLdQYwFwd6YbDR28F6NVxgfuBZY7T53u4qxDoebViy4fz9aHwYy1yEPM7A2hP7HRQxTLmm3R",
  "key19": "5XicSESGNZivad9m4bcdyddUx92VPjBZykWNoNScm7xX1Rg9RjYZYyMN8t9HNUhSsxxwbe1FttgboRayKbXsexq6",
  "key20": "qj2pXfG8HVgVavjFwcbCFeivHG3CxWJjwAQdazU2yhXmHjbsrN9vGPSdbBzwVF5KHfEZi1mtBSHhowDSGvBbGc2",
  "key21": "3uwKNifZsgzovZPjH89KjNBbvbbXTsUNoAmtUXcRbqE7myEqijnGUiLfNuj57DCA9ZPptBBHV29JgmPzHUrDqiYK",
  "key22": "3eTGxMN3VVVJrcTPXUQcEkET88QaRZC47koPxr97dutFctg1i7cSnHzhrozuioQGwhAoaYS8suiRBGvdSVYLQCf5",
  "key23": "418drHLNNacwspAyNZbwDcKuTFteTSfTx4JYMfvB62wViAMEuniBdjsmPS7uiU7MeXrGHiHRvpEfAz8FDvEpkSPV",
  "key24": "5LqfRx78peaVHzBLFdL8CKrcUwTss2dvzivdLFFypVxiX9tgp1ECVjCQSiGEh8ExmJhNoMWvUfP9SBkrA73XHZCn",
  "key25": "2Z3j6kymcizrDaDRmpUqTkKBYoRbzefvuDyuizGQExq9J3HYrkDEWfh2SH1Es7Py77b7makJRXftVp4i1RAhr2ZZ",
  "key26": "ZaWEch8gKpsD8XFMM6THxnZRYvMN7YxgLhSmu4rp7bAzYcV4Zw82YYRMnGV6MLg4cFKioL9tLGuz2Vz4ccoixBi",
  "key27": "AxqaozRHpYcnmbM8YgeumERXvgyiNcPPs8xTWxk3s127zTm2gV6HpcwzNPGtWW5W7bNtRXFzWtctfqpAbBnrGrR",
  "key28": "2KA26RubP1uzz7RYvX1RXcCk9pps5hfKMyP6Tu8BN8omZUNh2PSsYQ6gBaWCqg3Ln1ifrFALHBgbuJeyGKPnMzu3",
  "key29": "2r86k6A7FyFHBxcyZFZxhYFRjt7TtPxJmTqfkiwbqjU5SU4pWav7bHfZZD5oxAwdnMkyrMBYyuHuHdey1XoSAcTg",
  "key30": "2Akrc2Z9vdbNGnjMc5R1ACfkHPWWgMGCqkgf9cEAPMW2rrSkBhDt4nqGHrHu8pvhWntyVBGRBoYS7avQ1f74tNAb",
  "key31": "4hzMYdUcEkcx27SMd2PfvenvVGhKwba4gEVDnFw1rhuEaLQdvvqu7Ge2zy4udfCQyrdj5fZ6Awv1bWyGW87HiCVh",
  "key32": "qA4BrNMfjY9bV9rcpo5nfmu9LafjgrrCBh4EpQkLCqKNYSLRntTbJDcNC7iRuPVkbRqPiiiBJRLCPv6X5bFawRD",
  "key33": "5cX5s2yhSgUTGUcGBLJkrEiRBDNTrDwkbCxjyrbWsv7Be7e37ArFw9nmdWXxryrAHyLhpagon7PzxKSJB72GEbzR",
  "key34": "53R7beDk7qdMRwRPC3pkz4wrY2xET5WCWfUhESL31js2NFCNfS3UFEf328h9snkKDeFVa9tigeG1hkPHsTP61hGU",
  "key35": "2BxmitVJgMdpAKiUf7jR4T93NZnDzt9fQkrgwwaMa55B8sYjot94SnJiUhA52RnHUxTbqzkKgf6LxJi9TS1uVYJQ",
  "key36": "2VCY1AJnGpa6ChU4QE5qPJewLYVpDqLDRDEZMk3Wm3oSso1NPbpvjmBAjYQAFnskXyyCGHxRaQP6hMbL1varxrue",
  "key37": "3fPMVZLji5VAPhkuW3n1183fr8YbknL9BtWdLZ276GeX8UsnpEokQZQLpc1PmCQaRAB1J6b5qodmpVaj2JBmdGPf",
  "key38": "gPXCYCwBaFAWcFTSCuem7jH1QGub7KauMgM2uATmzidvTHKccwuBnceCJGBWgemn1kFYuZzkXQeXRhq1Ar4HCkf",
  "key39": "3ALuFyisY7JtJioGYi8NFjQMzigTUN9USgR7yFf3C1cdEkPS82gndUtNNbDWeo76zcJm47vFE6cjS6oej6pQFA6P",
  "key40": "2tfV14qXG26NN4aqhfbRjntJE6sMv4iCymJvKXZtvEmbt7VdPcXkcpneWGjtaLMiQyGxoyNHUxWAshUQsmp1ay9a",
  "key41": "5buEWxeBVgaNpa2Hrjo5zPR9EVaV88SwFrvYSzSoBdD2dFTCtcx6TMm9ZRG9RsnQzxddAR5CmDaCsyo1kGXafzw9",
  "key42": "eXuHbYW3e24pBM5SwbcdoDy2ttsGNfuJ9VXCCXapALHcffLXRVcrSCNTq2tP76gDpXTpZpKayrCrESAbKViNvWd",
  "key43": "2MRvTGo48ptUMgXVzxvmgoWr9Z7DTssEyqESDfKgVff7zfkx6PbjLmCbT2oT2U9ErFB5UWwnnyYWeW2M4xSR2LHH"
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
