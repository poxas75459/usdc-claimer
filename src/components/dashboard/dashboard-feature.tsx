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
    "2fzDFTxe4TdMojnaht5ksuLtzVUQXAXFUFNwMGENihSiv6NRPhAEc92Xk678WSRVXCYSubWjh5iMiB5LSBvikgen"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TiztezxvszANMtrxD8gd5jLqeHsSCvRthUSRgN4Hcuo2EU57B7aVhxqLq8nLwgCCRcKu2YAorCxYirosd8EGpn6",
  "key1": "2j7kmfggVg4kEcVpXu1EFv2cQz2T2TFCfPyEAbxLwt2sdAWwfpbJBEMLDb2MbMmje9TgWX5sdhQBQr9ya3VM3C3f",
  "key2": "3d2kXmf2oR21k47n84nYYKGcjne1Rno4LZ2FYzCrEjMRUKEnJDLuWVCGHwzTKUdAuhcvsRnhQb6DS7LFSebqZzRL",
  "key3": "3KnJG3fXgqSDuRdCyG8kKadJ9CWiohwfb2xpYcx98UfhhBsuSQHVPFb7an3CySx43QTKTerGS7MwS6SUW8CMaKCz",
  "key4": "4WjDYxZzdCSugovxQPevPrYkowN8df9moJgSRX5yKkQR8qhgAaknAaAtKErQhRFnu86nMdmCXEFJLsuTUZYHofDN",
  "key5": "4JVdcDL67JBsKUJsAoGYsBgLXjUmHxdVbv6aepnEnFxjFSqmtETF2nqaByRXK9dLsHBi9fpyz7KnLYDMiS2CaQXP",
  "key6": "4EkyykCFLZ4DmGzLUhynLhYAkfSNP6VBcGety6ces75apAutNkZRhqCu3LEheGJTvZc9CC2MfY5NaVa5AY3WwzKr",
  "key7": "3oHJvoqyCrX9uqav4WKhUw5NzkAXoCPTyqmGDEq7158FZMK28n2TQS8ypxTYpUQMvjX8oeGL8L1ATep4s9mqTmeP",
  "key8": "4AF3YjFeA7CF2BvAvBxqSCwAwupBEMEt7BGeN5HSrtRZcAqY4pReT9SH2SiWyv7VnFXtBKpvibthXchGzugezL1f",
  "key9": "5AhFootTZ3BSkT5ZEodQVPQCq5aLkp2rxMnC4kDXWAxtakQWZJsCP9MxUh8XQGviFN7AbqhPVPdgTCFcEzE9EmHj",
  "key10": "3eWfRtyt9wYinQk8f5YGHsGHiak64rHTx6EPWgLn1AsfWjw5XrSUeB5opEthBCk1Tspz71uTWxHYcAzfK7tBVQ4J",
  "key11": "d97gjhNTumwkDJch6wncKLNCEgcxiDNJ2xpXKatC44jPKrRmGydLwVugaYpoV2d9VQHhXbxGyXZm1XwE14eBr6c",
  "key12": "26eKyVnZ5HJrUzCXXuDKVqZSTxpHkRtvduff72y52DMoLNrkdUK9WVw2iHBmgAhT38nGiY2H3f17BuahuvQ3wZHZ",
  "key13": "Pq1sDvykQjvrUZAtThkE7uDpc6NW25rHsSWEuTFAt3xcumi1p7euonZmwJzRNy5M5yU1TnLhHVNE12sKKvCnEcC",
  "key14": "3awdKcgu1wuuuirEW8EFs17u5nf5aVxQVwpWe5V5SKEhL7DnmBgcbwKthWo4hEXLVyMbnK1vNLDFU4XwqeQFagjM",
  "key15": "3HersFYfCcwexLissiH64jXtuKp61Y7aap8oH4xSa1JBCW24o8S2jL8SCNpqfDciMw7nEw2DMSZiEEQf8qq2ZcP1",
  "key16": "5MsLJRAzABUv1VHn5fty3p378WM7dzg1Vq4jJW6ZYEmNsfWyhtcwVRjN33bh5Y63NcBR1srSJkZic6Kqae6j2okr",
  "key17": "F1mSX7ksNQkgCdV2dzpWFXUpBnxFSRwWYzbcjNAKE3XNkspHmbAwEmtm5GyEouvwFcvZPnwT3hgC1oTJ2YCBn4X",
  "key18": "2Hcb6Ax2La49eQRT2i8HUTXuEiMUFfk4XKvuuJBQB5Xs2Sdznp2WUfgBi5E4Unibsn1BaaFVELvuFW91ACKgnvUa",
  "key19": "3foscRJsUXxiNY96zVv1tkdrUyYutCLeV6LSZzpWk1A1TRV39kvtnAzPDANhFiSsarwD8DM5t5LygRSpcpHX9BRq",
  "key20": "4Q6tUeXFDqPL1tg24ZxjNqGJXf548Y63VSdd3iA6N8k2Um2RQtazDztfwQt3uQPrYtD394g5gFgETGwN5Weopcbg",
  "key21": "59kStBGkUmjBJVhRSYDrfezYeHgNikjz4ovSwvC5u27XHGRVAffDp95erBqP8gKqzjMxepZL9x4pRNKG848B85iA",
  "key22": "5TXYuDyAmT6B3Z3jgBDLA61hTyxwmVr3Hw9FuQHKt4mEKge5227Nw1HFySnVwrT9cQDQNUVyBaDj4C2Pnbmxjrv3",
  "key23": "2vxnznGDPndGwrvT8UhMinQTnz7nmzwdUbaWxxrVujFSPq6W7NrisxgAdggjpZV5ajdbPSEEjgQdmhdNXhtURKM5",
  "key24": "3xPH7iMvtRt5mfnR2zCjTH7Tr6j4qiCSAA4GFd42dsxDJfki7ZcindZKyp7jBquibLMX3cRz8a4btp477maDbiXo",
  "key25": "2ccVaxN1DWmPYinofpFHK3uYpi85B6et6DLK4jQp8m7v11thHfmpagXTwSDrqK4h27beKio5fizxp3Uvww6zpZnG",
  "key26": "CHKX1oUerSoXhKorQZZUVHDXWppWYSv4wUQZCCvmEjwstHCFzKK7PB89hfFzZwfniQgVCkeN3MyJ6dd5ao6jHTb",
  "key27": "3Z5ADDs31SiAffx5Gow7u1AkjZEBEhTZb6ipXy3KT9sZ48uDkLMoigVieVhYSYBond9wYX3wgr645LvgHLYoSreB",
  "key28": "3dyj8FqTVop56BNTgFMHT3sQSUA4aLfTV8E3vvZ4D3SbV1D66MeWt8LMwiURbe5ZS5VDa564C4rCmUjygdgaxnvF",
  "key29": "4HeiFdNWGLzHvndPmfvTBr3yJT2FxC2gRVTPoZJZcpechFv4FiUx7siBCpyj6hN6kLSN2S7Wb2ok2u6AFfRzKXKR",
  "key30": "21krjKGspRb19FuvXY18Ko4fH3nyqwQiGFiLeZaHZ1XoDy7ysjjNG4QBb9mTG3Ubi9T3nTBw2iuQuy8Tx8QhSt3x",
  "key31": "548b7WC6M6BoNiK4Txvk88EbbXfqnaLu9YC96ACEsGmt2UJVALnuTDKpKxWLKqfqMbCmbdUbtcFr9aTuQHDGnxW7",
  "key32": "4yxUH6951g4Xhk58LSBbnoAPMbNzUewFxMjxXMqAKypaJo8N1QDB1eHTL3sekQWYCHe4tBE45GzbxxK8UgYYNfq7",
  "key33": "3V7tXzcqknpDAYPxCQZpT5L3bgy8fR9JTHSfK3rdPeNUZ7ajbauaoKqZS8vwqd6nj3yfoz9DX5yLFvMSbopBqbnt",
  "key34": "318acjeRs3XGF793aGg4nNjbZ1fLD9EDaYhJrQCDgznbyxB8X42hw44gbpDNDF8EhLRfYzL9Mwr26no2p4bxBhVr",
  "key35": "27DUNfY8XE7PrFT89C3eEFxJYP7sGWo2SkQoVstpBDbzZACYcNdN3tXoRKmj45tg5fCqPYXd6spb8kcE1YoKcrm5",
  "key36": "yirnNVsbpRRw7Gye2Z12B7YhAd2J8j9cigwNZooZteRnei4o9wah6aAH7p7Hs9PjDrxRqWm5kPkZcRzAv7D51yM",
  "key37": "3BZNjoWdid1rvxkRrM3n4cX6tHPqzFTLwQMHFUCj8A1K2PZfhqosS42jdtcNZEYEF6qVUYjZiFfuRk622dUj1x54",
  "key38": "4baHE4WvgnfYdSPN1TGwAKzzGJZXwTJBLUyVUb2MXkUh259LsgxsLVHGhhbkd6ywyZAd1mxBXeLjUcXfpZg5nAZo",
  "key39": "2spdEf8jptLrgcWREQWbCqhUdmhP456uroJVHy7tfrYNHEFkfNXhGrxU6k6S1ZRtnSZ5bkELffnBnrmzWhH5jVuG",
  "key40": "4YUYTUwxkYBLa2jLX7v7QcpAG6oQ6PozNmcY6Tzco68TGQfaSeYeJZ7yXFJo1wKnqA3D5cMqQnLFdqwx8bbRcMk6",
  "key41": "4ztuNtcoELzU9Zusfq9vnj6oBU1ZuMBqFPBr7EsSfddk1n5LQhvjviu6NWGP2CjwKuuQe8TQBHSUnkZXiDRomEDj"
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
