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
    "2viUjr1Ee9mgTac3zDBSRqKqDsQXU2T61N8LudW1k6e3g7VLpqF79RN3tNVxfSTRNuMSmTbAR3W4j8hx5cbdPSU7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bRWWHbP5zHGABuHgfTMyDG8e65tmi9GVVUWDxDaAergZRJYR3LpaDF65bCSyk1gTxhLjQthcyAmzKJGJyyDnKRA",
  "key1": "sLr9JgWG4VKpgQugp72obLbSjts9vtyr5PawrSLjeS1dzWkTaJ3ApCkYPdJ8i2EXGrjtH7XYiBYeLx5bLB6ZkNX",
  "key2": "2j7ztVvJah4iz37tS3GzKo6JKdNKE1XD11WnUjrFYGVSpXq4PyqHkVHp8kHBGdEwuBjc3eViQCVax6bmVUt3nQo3",
  "key3": "F6xri61ncL8T1NV7Dp645uBVhVpcUpifzSnN5Bwq58SjRvzfdJA41RKkLLvRjzoUyS7WJVUhwuc5SbUS5PQXvh5",
  "key4": "cfvcDHxB2Uuna6jf8DbqX9JqFEc1jPXDYnfHJfHdPi1dgcLjm7eWmEXNXDG8ewRMqTCDY8hH2aDAgmy9cqo7wQe",
  "key5": "8rQHTFbZDJ5md9pgEfpToiYgA9xHfCL1vmcn3S1KtnpUDY38dKN7KLJtHwSESkhKSdvzjtznewDtS5zggyRJQ9f",
  "key6": "5Zw9U2tNVCkPaQw469P7mbip1evD6JL19wk3G2uvdosDjzwSBYif467E26wujNC9tgjMfiaSyf2gxXdQEkHEX3Zw",
  "key7": "5pqRN6FZPTMHRFwSU5CrVUgtbk38ea1FKZRDskdKGcg2xfVFAhE6kks1oors26RmzbJwYM1BctPeFYxkzvp1srXz",
  "key8": "2JKgKbzA3ekqMw6A4iuxqsKrTvBM8Ym7TThcXBGae6Aatig75xoFby2aZsPZHdfAdrSiYYR44La4Mf2YhspUodF7",
  "key9": "2KYigMh5DmtknpMCgdSNjXMjfsRCMLkfYw11rwQU8SLHFqJQjfXgiQFNXCwU2fU9fQbu5YUNvMmG6HDf8ZuXZKoL",
  "key10": "2txwyMXkYrjbvAkqvx2KsQg6V3QyZ3jEhjvRS57nDSpzyfHL93UxVzyCrPinZ6xi8D2AYp9gLgDQWzUwLVd65BZ7",
  "key11": "2fQP7F4C3tmRbWTKHexGxTATuKGycjpoHDqaTERSPmWAuwrw5SqhyLHVc5EbEEwLjMFfSWmhp3pqbn31tFazxyJV",
  "key12": "YC4B9wRNSvQKgRgWhuJgHxexQBxTXqgMhdHoN4GAYo6C8RZSWkBx5oe8qUuhtnUf23x5LJQXD65UDERUFZ1yZe2",
  "key13": "58rzibX8ChehidjFqfzJYXSQw3bQDzWazAZWTEUz7qdEeu9aAX1BB6BzzPdPut6rq1focqFL1aotbwVFuduv2J1S",
  "key14": "mqnrNwmnoVdfjM8hGPSz9MrESxApTK8vPnaJAsn35zJyZhtPW9aRuYWKd7ecKpsBrBqpnTvi8sD75oegMn26w6E",
  "key15": "5gpwuJYRFcBgKQD8UueaLKPa3ybtDpnBGcJ9ja2Qh5twRbswuDmTNbQunRK2DnrZdxCKL7rauUQ7ztYVynSYdRv3",
  "key16": "tFDcgVvG3wGxfHPsnqYXDAPwbDM3xeKP3xBAUcbqFhmcRptersQUHPsaKdfsG49XHga83p3X5sucMDagsmgH646",
  "key17": "3DhWFPA2JepZartPcSkL4nYC7GF6JkfB8B9pZnfMifddhtnmMLMSeiTWR2dVyu3A6BDSi6GUWST1XKnvCtZCNRKN",
  "key18": "46n4rFZ4mbKbor9CsmcjwcRZ6LBgXsZtkgUdzEG82P5ehYC13gsnvnuQsBddhHNBT1HnnuW3zfCQByjYtMH4ezGi",
  "key19": "439SfbqS8siexabv9ikbpfxJyAgCyRaDhYpqXmmYRUC9bvfAKeCJWn7yVFS6oF27RBK6MnAsGRsHrAP8RrPiJhLC",
  "key20": "3wJGZAa6MB6GQvRbtzPoWBkcP33eSQnQcbc1QMcPLcSWT43ybnnX9yUBETEtUwcw45of2mpAujVvkZEmSHUxQLUn",
  "key21": "4Hism5cstZcdZ19PfKeeXUEU1LyPZen1eNMg8MLuj8SqvXQQWhXQ9r3i7upkzTHEKGutdR7pPQEzrCZyL2VGqiUe",
  "key22": "3E5vmQ7CtH1xosSr2T8HiTR2seV6JjuNSvcPhm58ZPetmpH1zzrxZLQNzUGoLTXm8j5kyBYkEPmveuvHLcQLiW5P",
  "key23": "3knx1RKjaYZa5tZLCgvBcLwBR8stSGDWh5TZjpPcDaRSJnk8qg4cR2Fx67MDdMKJmbWh2fBonqWUiMyiB9TFtNxv",
  "key24": "5NjaxwLVomXPMJDV51QnjWpULtbsZTGVziQeV6hxZ8ShQMaaEG8Yuohp2erQEvFVL3BFqFFWf98XrVMMHF5C3pyc",
  "key25": "JynbKrqJ2rBh4cysnKQC3CsAkoMoeXX25Fr1qdB5RuiA7RtowkyNJQ5W4pBtQR2VVHkhi12iBrdXLP11KPC9LUV",
  "key26": "5WeQokjHcCX5xbigF1TZj3P6BqZTzugR8Z6wNYsg3wQBVznYUVVW4oA2mpkjSeh4o8G2nKw5e7UgjsfzRGV9Uwkk",
  "key27": "3WQJWyuUMffMqTV6MBmfNsHmkH8xVAjqYovQWw3VpE1Nz5dYkdAV1jP5aDubmXM9HSt4yQVChokNz3BuWSgiDBsa",
  "key28": "5Bya2XtpvsFvGsRtZdgDQ3R5c9h98aqHgAGBPaXnosRQuyXPjFzd48ncWVPdSAvDCmnaGtQgkWea3p9UGVQ2hdRN",
  "key29": "Hh4kaTkbS58DrFnRCCg3TXytYfJXWgwor16PZV8Vp6A1no9NiZbD6Woq4xxaW6GFAoJRdSgDeqnGLLVZBnRRvTx",
  "key30": "62jHEZU6rrnrAhjHCWyA9PPDu8snGa5etEykDSMfmQU74nju4WW81XeMYeWk8URzz6wxjGwA1SGHxB3xAyjSUbPq",
  "key31": "5y4FJGaWtHQjf2UMnsMiN3kRsPLgsN7PgA8eFsjHAtLBzHCis1vzJpX8mqh1bgWVHPuuLxmcGC8DitTsx5J8LZ24",
  "key32": "3Fwqvi18ZRDUvtnwKp4W2Qw9MYx7mdmMGxJ8xgX9Y6uJM9JSYs53ryRZEcderCbh6pYBkTKoBfSYwUVAAUo9aMD6",
  "key33": "5FnEJuN3Tdvppihu52QnzMLaQxkgtqFeWuzzCasAmnru4GYvVoQhFyozFy9F3YxyWwU7bMr7NFXfxbFwnzXkLLyU",
  "key34": "5PGiC4tyMEZ57U1m4UTttZ7b4crYbEiAprCafj4FJ7oef5nH2hPhyV79mRWPpxoWmdKwZNnLKuErfUqHyY4MQ3ci",
  "key35": "2VqfWg5PnyxMBnnPeip8aYB7ECWRKJgKXrHu6PJrXvRigncR8UPtSqxWFUm7aTN2t1MRxpC5AD11Da6vBt2M8tWo",
  "key36": "2cx3gFUZkihXEvPgcG4CEz9nfsz85q8xXzrXxkjpkd4kRatUjE5qHsAUzQuj6DMFkTH6mt4H79e4MLPg9GgunJ2w",
  "key37": "rdDbSWomMarYQtEmw8jxqpZkGMZ96KaF5uU2GZazPCVK5ZdFrSqgMwndVhE8fwEs3mZ8nBuctZvUj7SP18M8S1B",
  "key38": "4y3inUgJqTLzjr33LqtabZmecVrUzfPrNRCfeejZpUagUCNvWQmQHtGU8PGCdWJLunXTwmqYRzU5LDaXad4dikzm",
  "key39": "54kGCswU33M8JZU5Q3TQ2kaxZDCBgWPkL4UbVUJKTBKUwYWpnmSPZQsFNSvviK4n9wTQRGHkduj9LdE1de6Dx3eW",
  "key40": "2tAjWH2tCZ9EKtFE23RMrXbykMUnLBkkVQjhXYa7yopkthNzwKbC25gNoetDPyxLBYkXBWsN3zknWWSZoUeU9Y4V",
  "key41": "4627S3eZD8gamX88LEbs745ujohLqH5kBV4VRCr8kZAfrwxE7XvpdzSdnhi6ckMHoYtJgGSQkDAJiP5pnYQf8LsG",
  "key42": "39wwWRCwmusLJp3d4hi83s1Q55kv15jXjLJ8kNRdHQW2pm6cekAnka7pTMGJuoVenJxLWUG4KjXuqDUtSVgna9ng",
  "key43": "Qj4BgCWKebWoYAqQo8cXwcK3UA3jhrHwG6Hk6WPv5nR3m6w5mSTyY794KQXJYkntyMSZpEN7keVykKbocr2Mu9T"
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
