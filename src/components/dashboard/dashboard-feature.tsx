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
    "3EcHVJfxkYbkCFbDT7njWKzxpvt35SH9emuEzirE4g3r8vCtNNRCmBmpe97b4kf8LV8QEiNtoR78Wnxq4McZjx99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54wPWcofY7sLg4VdayEALkmDsCKVjQP3i4vWbmrKKK3Nxqmewa8THPfiBZeWivBwpdr8bvqpXCsVykvEvALrZoRC",
  "key1": "4Dbz5aD69eWJHoz3Vtk8K379Uc97dnknKvwNmLokbQcaCtUCeuUbGVaKGirSNoEFrX8FrB3MdHxWuQoXcUDimsY",
  "key2": "rRxJzN98wdBN1U6RmqyH9DJKVA6WxsKgsq9eE5wF2EkpkNJpwggxWALZocyXGsMG61BqAyKYHuJeduRBEUnesqN",
  "key3": "3fhFYTPWpF8evwzhYdEqxCXTBpRA4GN8Ra2bcGZexJJmEb1aQut55FcWsyVxJGVxPqYDvRtPHVQFCrygRDZRTChq",
  "key4": "5eAV6Ho6jfdu6XdKUGKyxxvF6dE8iQ4RVM1En9VY9ShiBTuZPqsZY3WEofE1sQ2sXKwowg76f74ja13eNVDB5z9b",
  "key5": "mYTHr7xx9PEnFqhEJg2RSC3dif8RzQuidQWNyZPLBnKBK7HtstX7EPFTh15Rm4GGujm2xrDfotwJDY6sKvAQUwd",
  "key6": "3Rh8DwFLtwafRcZjrp4b772WvxtPcEihgaw6qhjXcFzUpVRBca3PYui6UzR3Tz3KScVxd4wSAMgjwZUZe7edYaQJ",
  "key7": "3VPB8jdxpNBuyerXBpmnmXhJrTBNNcFjRe1gUK4HgXAj4oMJ8Q6t5aBZEo5NqAqvyD9BZzU5MwEAnUW2qGUHtEd3",
  "key8": "5uttKetFSWeU3drkWkzS9rg8cz7veVQP8SDDhdsUJ41irfDXmoP8JiPBrebmqFAiGXmfXb5bbjRhkK57ZqCEWwWt",
  "key9": "3M4BhmnozMTcMgtEGxxKVD6KJmXoUrT4FePUvaz1XdZg9aBcJqCMf4n2AGLKJLhWx3kCg2sDYhK14eo9r7ifPYMi",
  "key10": "2TBPqzsDhheXqNM7rQh66HuvBVTzsyd3YsGfd5NKQNpxdrk5s8haaUVRgmnn3dHCDDqy2LVJLiii8osvazkyxs4a",
  "key11": "2nRHdiyEK4V7UMv8guXwqewHQHCkVnw1vftKqtC1Lckw2Epa9LcWw35GU7LK21LPsW8JquTJq3HdHFzy8wp8yJxe",
  "key12": "CvGW7B9CrmyL9jZpXxGk9iCtkfcAijdTQadihG9hmwEmtPJHTXzGbryWeQJV4PDy6qEVHYjDRYdmrEzLUEDgiWD",
  "key13": "qPnoKrxdqoXAMikdHk61o49ZWdGjxWSJCVb9fx2poUgp72EtSmLWcrEgSyD86TqMhSYSnQbvobv3wzncRSFWdyP",
  "key14": "2yUNdVHAPyTdd7vs7YFh2VUDxWPZNswDTDNXaTJZ3XZn2u8FsT3DZ2ycznczq4GG5zm6SRFVdXDqE3eXmDZYiYsc",
  "key15": "4r4K5r7G7Yy8gkSb1E3KGmhJakxdWBYTb6fMrW7wthAShf9n8Aebf7i6aPca95syd87zvm8bwrExcEPWb3yAramA",
  "key16": "5Q2cEM5dQTSMSrt1ekzFcYDpx9hRCKLicXAP3MWoPfTd73KL83UsZcyLDAY4q68S64oVAh3KVMfmBRR7d7S1qEdf",
  "key17": "1esyYFS61BjYnBZb57JcFPTyoSHTJJLc8oeRTi5xDGYNokCeCz5RWpMJRhsghAmvW6we1aV5gsmreGFQdt64fvr",
  "key18": "3yVkAmXmHLYNrSBucvqu92PGaAFpW3JYWw1r68c4ATnC6vkboTVe4Z4E5mWAnorQMUxH8XpvqbqN3xA8CuwbzUFK",
  "key19": "RDmNuy82acSrxTjYod22GVMuLCwxeusXYtPhMAiP72kxYnLGkeuEwG5SQMXA8j4WecDNvoHRxCtdAzuSVWsKckj",
  "key20": "QX5fCnUyAPgivwxr4Hej8mxEMUViDkxkVsSzMUm1pc3MPx3P9JVnC15rYgUK1UDBEtifKWnGw29gYudPFr2pZXy",
  "key21": "2GhojUyQuAkmdQef2nGE9MsAcdB896rEV8cwDXaXV3oxMsvBu53XzhNimQJbkLLpGuZsdknSjRnmFS4QGSBSELWL",
  "key22": "4kVNW4DiUYq673z2ZRiXB21PoJM1GPiTTfgfApqBU39nbeWMY1Aw9Jtu47BjJavzgAqzp4pEviToVUCYwpze3muZ",
  "key23": "4fwT3ihzFzJngRZ83ZTy5ZFNgf2AmDgGV3whhBEBj6ckAH4Bk5CQcSJCFuGUwRpQoytwzmmDme7qqbwWWT8J2mpp",
  "key24": "4NkxUeJyz5iyRihjrvxJaubEy2mu3yodrCwP5xF8KTKNAG3KAHSz1NNHj5aneN8bLHrnQrUj6SMHmKbzBKMz2cSz",
  "key25": "3NSEyK66aEbsQNSCEWr3yMLHFQ3zfE8iqQkG5C57SVFr23imjSWJmiJtozuAs9nrciNcw2sDMmyB9UszhMEK3YfP",
  "key26": "53XpQ44f9Fxrd9Q1j9u4t9czFDidVJni7srfFM8yQZ4GZfqxvJtKd4xk58Qa5LdjcZhrxq8maVTvtXR8dukYaYAc",
  "key27": "5gWnjtN95y6qVkE53G5bx6qitVE13Pp7CJfGUdPU8GLwTA2cyvkrwEYCqWefxv6JVzceV21KiNZ7tWWoBQyFkygU",
  "key28": "kdy5bpRrDwk5MJHzdd4zuha3kJSi3Zu8Mn2fdp8EcyXH4rqLtR82DamMDAEu7zg3b32RrtDw2PyXJwV81xGdXxC",
  "key29": "4pu3cHQgkto6oauFwSzA3W9eii1ByXY7ZuqeKhBmFBGn8e5buM1eDi1P4ezeVW3HJBu2ZdHPG5qXJiopHyytcNRd",
  "key30": "wdqBTZH7s7wqy4WkafuvRbxJdfHsXcxTCSMWm36yF9tJ4Ud2Dv95CEdcDadSDWPZQBpJKdvsHwUoavWc546nbhA",
  "key31": "2kmhbBDXTtuyhspGBCsqwdkuPpr1hZjXQNEsTcMCNJDPfqii9K5EhZLLSWYqWjJGJCWkVgfxsW4vMvg5a8TZymy7",
  "key32": "3nYqNe9p4hpJAWYYg14RQk2h7ofBqZh1v1fLa7yc3PzxvgduWwX6mLDGfTKN8o6HLaZRnwQWCWGn9UKC1QRYwUoz",
  "key33": "2p8uyf1EykiUvLzs5H2b9FnmJsoYcfmKvweXiEce3K6wcxqgCqx9CkiiYR7y11FHrq9f9waN9PMheWPH26HNPG4u",
  "key34": "55LmxZzfcAC6TN19RKWKzuo2TCw7JyBRxA9EKjFxUXcSGVrGr5iMfvpFkWBmBU3q1eLsUbrifX3awdHMNBKX1hkU",
  "key35": "kdaSvGHdurxL27GoUHu7rSvWVVKkvEdDEeHFaZEJPjoz7H3HhkCZMnCqtybJYVraknmqZFvEaR4DPkZLZD7y1w2",
  "key36": "5UcEDpGu64jszy4iav2yuGQFvqHWdhnRm8SaZnPJubxVFV4Vb3g2tHkSzR96pceQq3w8ZAfP5jd43wjCTE3HVu1k",
  "key37": "2BVME8SfjRQgXwAdavezMnRJ57Aq3ZYDnMApvHQPNJmfsyCzH56JNKKtYPgQBVDsspAcDBzZuF3xadyRnBAaxUD2",
  "key38": "uSvBdUKYRVft7tW2Gw2j6qhUX4e46HtvXFeapPjqT3gKyanYKTUUKqtqpqrWR4zhDCmihEdQi3koEk6KbFv1kxQ",
  "key39": "3ReUB43utHDTSjr4Bqox2WV71s65Rv5ATYcRu1XC78wGzBVWu75EEQ58DYFs4WdjPG7cYx3HVMDhMyvYK3fQEXa7",
  "key40": "4XeQYhjutv3azMfwfNCA5mDPjwvdcoqyk6UVKDxhpJg2wEgcMDP9WSBnmaMCuPu8bpJnF6gut6DEf2GDnDk1fvJd",
  "key41": "2NrrThuCT5PVTHh1DEKfxropG5X3G3ii23ipUv38mBwQEkfQyHMCWRpWa6PMJbhgtpD4XxPZAydeSGPDaeHx93XW",
  "key42": "4wXhSyhrTDVoMCm6cpaUYhwMXJTm3Bb95CVpK5dX9KaBSqSNS91XLhqhwzMv8w5cb6J715iHj1nD1g7j1evzWjon",
  "key43": "3cjufeu2qeaieHnrRRb6KeSXAGoSsGTcqhB7RCedvcuAjbkDtNinEA9SCyBNeLByctd9FZ5BGgSsCxCGKWEms3jn"
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
