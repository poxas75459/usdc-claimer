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
    "39JzKC6KbWiH1pPmAPTadMQeX9fX7RHKtbzWrJhgWUBMd2XxC9iiWNPtEVc8xouS3ZbJhJpc2rkbXmNi9NE5M9T1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YxVD9RJY6pjKvB5TQ52E2v3GpMs4fE42EfgBzbAKAvX3fbCYYDbjtUgNpEJuX7Nk9AcWNhporaDodFunhAfnLxK",
  "key1": "3bee6PTqxPAKvtTvoqLvzryrUUz5F3sLZSCXFnVKTPpZEefQzKbDy6kmSpm4tvbMwLUkHpNf2FFKrypzdPVRZiB6",
  "key2": "CTzTGb4sSAwahyLx8jkhiXXfUJfe4fbvTSnDvppo7JZspiFSsiTHUhvyJ83Wk6bkDJ3Qo9NZpSR9pRMcY1WBEqF",
  "key3": "4GofFgrMVyfxTbCUqZ4kMXThjYA33bhdbiGiEearJKeWB5VteRsFAALKeXpVHmwuBqCDt31q36X9gfrAAubmt9AK",
  "key4": "2QtCfXyP8Rp3BeREnPtREj7YuntRCUNhMPh8tL1EJyJ2nbeG9VZCMBNW9FMvtpmdyVuUNMdveD6pptGvZoxLPksJ",
  "key5": "JcwsLu2RXakodjhv5aaE9cHjt4FDbesrGsbLvjeNAzZwkiJZUJbM437hFx5arqooUv1yPfkKCSET4iHQQccBVQH",
  "key6": "4KhGcrRyzF8N5W3ffg8ytoAqJkuAdoH5CNLXZpydAtAxStgmsESof4DUqLHPpbJbmukoif2Wuh55sCa9JKS7m2Qe",
  "key7": "4KU75g5goVTjWpSGoF9Aa8EwpumkpEvVrhne4eBNuUXbkZBd9B69XZZSadWGqQFse2r1XHC61T1pqqwMWzJoj4Cx",
  "key8": "3SRt5uXpRmd7QzHLiqt2y43oEeRkF6HTQecs23wASZkbSwJXWYX6b8YejKR4qbmwBXrUikd2kLF79NZP6enL81bN",
  "key9": "kUaZCu9WThDmm3kxcDhZ8dfYe1gxTY7SA2in95G11hs335zSb3njb2moNkG8QnwCRUhKvDHHD9TD1uRHzadV6NN",
  "key10": "55d8nKfUu4GAmVp9h9EqC7Mb4v5wjBwY2W4rh57sJi4Sfxa4azu9oL9KSt2XjZ4q18HWLtEYEWM2kaNRR1WQcUvn",
  "key11": "EaceVdWopnCSC1XhoDu8dkuGjtUE5oTmUiGEaGbAoQhefEL2APuSVpBeWUJFpCorKkYF76LpwTsFybAH5nR3khK",
  "key12": "rxdtFzgewqcNpgS6aCtiZPFeAt78r26NBdFwqhSfpuwvtwPboGxNZoEGiFkMVx2wZCt6LeNLA99k64NqQP6j2QK",
  "key13": "HKoPcjZhFZ2dfucmcVeq7UBgA21bySmFfFQBims6yfqapq22iJfNdycjk1t3JeQEggsDZQ19GNRngfkjU5io3hn",
  "key14": "2QXJvsmwvtQW8Tdk37f248dUE3oXtymfXNq8E8QuTHCJNxwnk9DRayqaRzqb7YogFMz5rDuoQbcsj3GUEiu94cPG",
  "key15": "Xt713x2P4k3gYnGBvd9QPWHKrvtx4QzqhiySxo279N97CzJhkBmJ1dxWaJ6hirNsaG2oc8jP3ryPic4aEmue5Ha",
  "key16": "fktBLNUJ9X2iBefuRsUPSrwfqKQXugxZkwD2EAtPtjjFec9kCxgLn5cgtP8sFNmqdhsZSJbEj1Ra6PMjs8jMnR6",
  "key17": "3XYVDbRFvTndgg5f3X9bLFq5YF6YLvDULRwx8JUD38Vnf9MGbnmhX2JX6ZWeG7tKaQi5KD4siyKNmcM6dUrszX9t",
  "key18": "5HfK8NG7h2LpCczzn3zAb6LCuqbjM1N9iNFpc1iNsoMPPxQj5TRLEW6jziCVYfHtzMv2n5vRJffY4s7dL8C3bwA1",
  "key19": "59BodcwSt4GCNskEGntvhyG6EE96WYgnqcxddhEr6TbLSutCMKFaBdmHBCbtD68UbWzyyjsrHbMXBmVZEptP92hq",
  "key20": "2Q4XVSnK6KusFkzivgA4yXQ4aoum2ZFtKTq8zQAtNsgkTf8hRvagGN5JCQCroLCKKNaGhU5jwptQiv2EW3mbLPqu",
  "key21": "Bv59qj2qKx1L4zDJDm2ZFepTpM6Fx8o9oTKos99CRaj1xwsnxT2zKWJ1vDmod2gyjBfiQNPnbLp1yRz5P2ot59Q",
  "key22": "5zS1uy1jMC4YBQbNgGzWbyWckQCV7K3aBsvtCi7ytWdvKc3xy4RG76oQzgEof4AGNdBWfHCfo6jZ8DqMHJFKJ2VR",
  "key23": "5SUxnQy4RCv4PP4PDQJxwoCz4PTsr6WJT7ysxgacdKRQpJfJBiRhu3qWxNuHwSHBYHV6tUHNTmDDo2jf691iZe7V",
  "key24": "3FQ3gwG5jgj9N1WrWWRKGQngoFE8sqW4ZuYEKLUAA5snwgzaHsGsmtv7M33xGz2jk5fSAszJycgVvQZ5bXuvcq6D",
  "key25": "2oLHdg8sYGzKKiqNoKMupBnWvbSmb1MNu3cLa8RvkmmvjEvjLgze66zq4iA6VncdpTn6XTeg4HmCdESZbF6EoBnG",
  "key26": "3SW63bbajYRSk1PNioMJULSTRvgChpbiv2vxbvQQ24hHuGmkUzvXD9Kksu7nQcsQf4KJSL21qvKKVR9bH1RGKyx3",
  "key27": "453VsbZdGdrCTnLaTuNW9vsg31DsLMPoucZ7wfLXZWwoHGp1NWxnheTV1pvp3oMA8oF3yF7QW77TDhK3yERgfdc6",
  "key28": "4MHXLooDPotXQBh9DGadY59edFTCwB7Smf7gSER2tjsLsJk9zp2KPUMY9srqhRzoF4LJwC5p6a5yfSdL4HThRXtm",
  "key29": "vxKJihYQLksSs4kSkAcamumHCGhCw7r3vEtR7itvKfGEPrUteaKmt4a7ao77TGPi3b2TjPekdtXbkm89kQtYBXD",
  "key30": "3kHEgCndF2LyJatmR99kmimKA2KfveZuoqp32r1eUCqjrz7crcAsu97PoAq8gzsK8h2KJwUCL3WyDv2pEQ9iYZB9",
  "key31": "ueNvL9uMqPFd2MsPnhrZur1tw7YrhdvwYqQugUGmTSsQAVyJPh3zi3BzaZEHP7o59Zw1e2vUqsmNRYv2LqFQadB",
  "key32": "yWVDChWTRRofEtHWfxSdaQ192bFC8d2Wa5Lu6vyLCMz3MC4cxtRXYFHnYnj8NwcChx7eJJ2kLpdZS9WQoXXf5p8"
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
