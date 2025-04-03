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
    "5X7UECs19cSTWPiDukHwrrnr4kH5ScHsoQmznffj8YGnxfsApbPkC1fiR3Mc85U1nskzuf3WJ2PCSUVgkKVqKFpy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zuPi59undx8thGY3SAjy5KV2U4EcnGRvHb5guLi9h7oFarQhQxsjaCERwvj3yp3Zsgw9hBBxMFG9wo96gwXN4LJ",
  "key1": "5nWa42WfZyChzjGA9EUmMEx3mKG7bMZzEgnwu5rYckfkThYwsSXN8b8tyGxWfpQpBC5grwCYzDoisYxJcFVo87f6",
  "key2": "4vD3t54yt8hMGLhNLrWhJzVEyitbeNfxXs9HWhP35fvmUYdgrTiWNyZPFhjidL64Xm7DszSUbEbqKeJ7SZgGqZBR",
  "key3": "3VL8VJg3CdgxREGWfzwRfgPMaset8Sjm7vbvemoaDYqRvX5mQF3ZTsJjgZRLiYte7Xxqa28iSwy4KDWAgmdwSaXG",
  "key4": "qo2keqPGmqkzsCDViAJ5cprkWe3sXqqYekryDWZzYe4FFgvc8TvUKsiPYpX193YbmuwhzvXfRSYJcqg9wgkBvkp",
  "key5": "59P4ywNYbbjTuGLUowoSXgavHUCRfJ4hJBihXvbN2XcWGWskohHPNAiYoA8a7cY5EapttSEGZrSnmUBdCvqMWvwh",
  "key6": "snm6njWoZUACAGxUYZNwRNU7aCZzMKjPQwtTT1Q3Xc4pWE35eYwER4oEDFYBknQKa7C7T3mdKL3XkKzBqMThVEC",
  "key7": "4ZFYKdXMp2AwWTRQKSFy5Bsc5ujP48LNsXHD6qpYXJUeJ9sTcRCkCPGq6eiKK7vZfsQHw1QUnUphgzMaZtEeuCwt",
  "key8": "PA13tdDBT5dGkKQ2NmrA5pnA721X8L8DNYFcj1bEp3wWAszNBrKF9qH94eNKa1JHjqvWWwr81BcdMERteRDCUYS",
  "key9": "5nFDrBa6r7LkBL39guK52eFZHF4M8xeaygzNiouTwgmo8QNVxMzzyuYtoLUeaS7D9Qv2NQdjFraqiCYQGjJaGbC5",
  "key10": "4EyGVSarFYBh4LY4SCur4d3uTq7MV4Cum9B4dhyPQqDd3iTBXyXPZ67nLhWbddE54YXtzbaNVjgzfQd5id5sAGML",
  "key11": "5zAU5LBBYqwy81ZFpudCTNXzDMy7qRfk5MGhjbckeHxoxqLYWA5wfdYavPLHo8369o3zoKmu5ZVmBYVPUnuKuLDH",
  "key12": "4hgX1PxsDctUiKqm47b9GjxPdTM1weHZpD7EkmM1uEhuASjfKKongTbgfvPMZ2udtPDKX2t8ngyfbg5gU4sj914z",
  "key13": "4dufF9mY53FQ4zaJXaNi4xrVKENsxPCxUNvUVciYUkNc96znq1kfzkaUv5Gxm3EVBdYUVHBRCkGcYkrGUFLxCaC4",
  "key14": "SYuJb5FEcQ3MgjACd1AHskHBaobUYJ3fANyZRrRQVmSD9fhVmYvEXKbU8RuNGARCbRWJiwGcmA7xoYkL2N2ovPB",
  "key15": "rrV6JCLF6A4XxA1UcWL3HqnNozRxYmFFsbxhzy1d3QS4xXK6DhAfTEstLFeRC3A4PnSJrP8d8r9quZX5UidDhh1",
  "key16": "4KXfs7BxD9DZPCr513BB6h1FPSoBQM4PMdmjTbF3h9jtHbcZfvzKtJWqz2dZ53dAe5iDJrMAymwmaTYKG54aupVg",
  "key17": "5QNdtNQQZ4vN4tTkrSLAiKCRHeEAmxUqodBA7ayBzujBh3ajbsgUQrBHTgz9FZRBNrA5WwHaazEXzm5PX14uT9im",
  "key18": "4fXPJGHXM2n8i2p2pnBVwVXgFjgYSWW2ZQBRaJCc3oWpVJQKyWit8QuazGszY2fUczwdoeLBwKc4KGRFxyfbKg2k",
  "key19": "5L4K4xyWZLt2BGDYTfmEXzjsbJbTrkoBG5ofDb9CnD1zexcJ3ytAzAWgSjRQ5ezzZZc9KYBGi1QnZH5yUmjSZUHF",
  "key20": "554YaZtMvDBBrrHnzZFuLL8Gr4DkA8nQ7zwgxojGgpVcb3eWfu8nok8khhRE36kA6TmES7TPkXLybQcX1eAT6o8X",
  "key21": "21VnMzSbXgidjyjnDhtSoLHzTGLLdaSq8mSz7S65opimsZMkdZYDbHHcju93vcGXDBUn8SjEafpWX3iC4ZMzDeqT",
  "key22": "2RPCRnt2ohKTox9dF8RsBZUyKwJSZrbjbisRn7yCbyUtEYjp2MabwDuJ7UVsNQd1ZNf7XCYMTzv1ZkabQUJ7Wciz",
  "key23": "5jzLzYeYLmfjUryPg5MQexkThrCjbTYWSBtVdJ3TX9ar7gVVF6ybZ1LA1DE9ePA3ZMPJ3bMoT4A86cFnsbryoKQr",
  "key24": "5UJ2dxwyLcSCG2L3DwzfZ7s5xHtWKWJH8USFdrbm6St5n8kwq8ETwmdLXqMgW7YFCgnj2stA6Bhc3HggWQQU3bQJ",
  "key25": "2uPnxTLgRz7w7EkDVk2hoYrT6VfYuq5vGLyQYyR63bmSZCUCn6xpduX8Et9CuMacCS7sZWtcWAmfeFH7P5NMoSVg",
  "key26": "4x9Rs82EcMVXBp5d8Tqv6AY1586qEaSCf4ZXWKJv4dosvDSeWPYHjkGeXjucAi1ryorkMWbkAUKPKriUVh64M5tw",
  "key27": "sjP6KoVKAC4jH9NY4w6S7cp7dfe9pvmcZtKYDoqCYjxrrpZzVi27FJPBrpHKqdbWHddNJX74zBCnAstX7DzQxAs",
  "key28": "66BmnaoygwHJQTAqZoQr4U6gFP9ktJeem7RHqvR7y4fDdyckL5L36US7qhYDYpF2BaMRTngCtBFriJ7EuS2osJU3",
  "key29": "2zVJzy8uJEt8oF6kJhHRJExCygdSfDNJGaBHs4TRkpZRMXnjeXJk5mCxsdL7skKN6uvJtL75AyAGy8HL75yVqVvM",
  "key30": "5C8YshbUunCaqYfgmKk4F4y73bbnSdpSMrE5XaVHr7wkbbqoMfPqbJXXeXzEdRXCmuoUV4UETGN7gZBNHeCDWYBd",
  "key31": "4nbGL85KKXczE5Fqxrspgd7B5MmD8FPuwfwJ1A9g1vVdDVCnx4kFk1wK1QxYyJJxMv334J4wvdVsA42ShPEetTGw",
  "key32": "5dnp8LUBi6GecwEoFUkfHTCbVgLgnbhupqtbR7zYXGgSxf2tLKiamHtRxB9FhL37RqPkL381CSc54BFWmkUAHodk",
  "key33": "4431QGajSBiSnZbJiiMwQVbBL6MmCs51MJczKRr66ZQjagLRJks38o8oH5CyeXdJDZLCpi7X2cRhG51SPgZs2Zpi",
  "key34": "3csyhkxBpi1hmYFVP74M5K2x4FJPBMMEyTERPp6mAKzH3znk3PHmB9EdYBiN7AW3H9tpzUKNUNmgN6QqXYnKEhLb",
  "key35": "3vEXJA9XE5aDLaRWa3SATbaNdyW7GDMVCALwHufhNeWFRgFdLPr2D61fHLHX6cGcbPwy6cDCGqMD11hhpUzzCSap",
  "key36": "2MnxVsXEmSXzG4cFseQuNyWq4MWdxWsNvStKUdJD3EGRwvTEQy72KmpMcbk532JBUGoKpnPb5jn4GYKGmPfTpTpg",
  "key37": "4GxixAa6hDwcKjzAK9u2WQXYsruQEcHSJr5txjb2krZPBgPKCjh8Y3nnd9QhdJR2gc4AA1GXzYTYsgbh1WWHCxv",
  "key38": "5364KQ2C3Ki9WFdsrme67kw5VRna7htM8XR1WiUWK6S319NJ4MeMuwKRFqA8mqekcD7FaETs5Jwfi8xnVdehY1Ay",
  "key39": "vyYGV3r3JrvwZBowBGxVJahCLRvwAyDfTdcUindWvLY2yvqexCRHEvhbDHygJdWHBK2qFiDYCXc3GbTrcXA3BKY"
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
