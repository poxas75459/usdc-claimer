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
    "4qdjMkz1ZVh38pZxvJURjXGfUdUX4T4J9UWGBSbgMzsD6ruYFkTpQD5SQacuZDwiZnzzBQ8c7RDFbuWYWjofqSCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oGZX9kmbuRugbWSKZRjuiubWiCx42qdZ1W1n24Rbt64oczTzHX5YABL3wWisi1HByF8SvDYwxQbHdJvayc5ihzR",
  "key1": "2pseoSQfZWmDoobymmmGEh7ZwBfy1xswKwK64FKmJCAXhPfvdFjgG3RVpBHpwTykjL2yUT8G64AkjJMQUYQQd2Sc",
  "key2": "5qQKutuNAERJJqpU6SWYxM9UyCtngxcAhVuKnu7u5N8E8gcHMYu66AAYUSddh4oAD9L4RKuRBQugA13qhdZTmijd",
  "key3": "5dnPWvdokd6yqNLqN8UgevXcPwVd8yGV9uPc7S2yHMWB5hNLctSDrV5BfxdfcsB4JJ2SwhXGGXhM8icJAHzJE7Qv",
  "key4": "4iXcFjmPT24SXkdRzu9wyREFQHUEsMZ9XHGJrms7SKvRzb4qARPugwYf313dTL5teAVdAncYdQU4mRMzSLSb2WzL",
  "key5": "5BYSijAjzTSfLf2BMFnRPXvDxecoJSjjr9UBNfoXeEUqLus5vLdCffFEKfUbFba9SkxnsLaz61oMLsVjxSru3jwq",
  "key6": "4tycRnbqsPfteV5g1m8UAGoGUMdG3rEs9X8rJHJBoWSsxmCCXMRrAn31mTGMczJ2pJBeVBmxKTog85SrwnD9p84G",
  "key7": "65ZA99XfQXFiNwwf1SdoBj9U7mPUs8ZA3EEbYDFQfnfwJeQh2URypNoN5PoumuKKEKmtYPt6UkuE924Wc1P7dANP",
  "key8": "4nd1R32eibqb14XzCw5S66Tx5PxDG2CHwSQ87yB8G7zcPzeWjLQXA3h8Hy7Z4PoWpLN8svziPJQLKrqPx6x9faku",
  "key9": "3nrGMU5KuvV5H62zMxYPZn2E6zmU4ReYgnPfXPuW2jsS4VrUsKZkP5XmoQvtTZDn6mceXwyfFS7RXcs2by8o79yU",
  "key10": "3e9dJYrPJHXBeoqhLorsQLUB5kXfq4M7eXEaWeNZjXw4qSMjFdMnGWexNYPUStKdKR4sW1VEfsRAQaDPk3ePeefu",
  "key11": "5baPtqDtHKZXVZSsukywHRaB8sQAghSeYmow5G3fREdUrHLPw2vLpTkunUZzVkj391LgokBEWSUyThRbpfYCn81F",
  "key12": "2a5SteAvggGZQKiAhxAhzQwhcgC1eRJUfvdXBzQid1AM2Gg31FiiUVHUnnAXo7dT5zxUmnQqU9db4ibMabye719C",
  "key13": "tcusKzc4KTzVx7JkQ2CwS7U8FWerZELjyy34uCBemwsoyrdZVoqXhgPtGSfw99hA7k1Nz27TrirhhB2qwna1oG5",
  "key14": "2ECbKf1sEGy1KHDrCUnRgGdUdNrieDwHoqJRKPLJ17SNB7b5E6Us2oV3LEBNhXed4Ft7jXCrX4zw89rgGFvXXVsP",
  "key15": "d9QFPJQe3b2TwkgiMPgCj2hcWRg8JxMqsxVwZjsqHvWhw7Cv7w5WMcZF8T4mpBAuD9DYxAxtmBo1AkEZpzpXbHu",
  "key16": "EynozKjRrUe5D18pcjfm1NWTtvibUuo4YqerFHJXFQApMDRVsihmiGmDnKnN7u92cE2CugvDhPozZqSpymjFpFg",
  "key17": "4FS5e1WraymqzmfxjdYKE9QdAfZMUzQ6mKEkeECqqqsLmU8Hs7F6bpNrpuQzTf32tK3sQVFhnEaa3gAw82ymtQA6",
  "key18": "w3QrWhT1GSqw93HozZ9oCJ38kHSNd3wy8DA1cffEut8vriGFzqosxD2dZnrcBCHy4C9bp2hrhddxhpa9PXN4bfb",
  "key19": "4s3H9vw1zShoov6PC7dUofUD62QurT5VVHfRssRap6ziv6QAxMMhnqegfZ18wNTTvsL3mkpKwipkv4XVhqS96DfU",
  "key20": "4MdQuV3X8uAV4GgS6ogGiWihCNKYV7DpET6mHaHrY4FyuCuv8uSCaUUbsNyZ4tm9EQsRgTf4XvQdaMfxpBbkk2qM",
  "key21": "1nGR7SqnosXPk1kKyz7KwNdmiiRC6tti1aez7wrPsgeq36denCCjkxeUgSsYbNRQ6siFF8kpM2ftwdfSJBNJEjt",
  "key22": "4xuB5eSJzQVFY7XnfhzDQuzo7NuNrDHY5GZoq1iy5tejK627WhZ71C2XuTo9UQQMwFXus4Rt2BA5BWYGmn4pZaQL",
  "key23": "2gP718y1UXcTUruqAmakkNACUGMjQy6dKLXjNfBVdiQ4n1QVRupZig1ZA4HEeDhxZ6zxnXTZzNXGwntkHBDQpSXk",
  "key24": "2p4AnvKipGbnpnKjHeVTLsaHqzfBrBF1k1a5MHeEM7HV7RpTwRfg2PtZZ8fcE1SQ1hcvEoHRj3PAEQKw2mPayVPw",
  "key25": "3RY7aZcpB6AbJsVM6YoM2CCJhoutaEcQP1pnj34n13ZauWLA6kxvpYEh634vcEMnFvvN7LZvbxb8adgyDFyxyZUF",
  "key26": "2uAtUif8ufVHZYpzKth39q6aHbDM5zrVX7o7WCkvBN6SCFmDZpgUFyyfDqHv5Z2s2hXX9naYT1QKn3Db5Qwdbrtp",
  "key27": "345eUGj6SprfU6CjW5DSXSvbuhERXfZQXF3dXLn1fXiVpDNhRyVD1Q6YViTd4k5Kp1eBHmuYWdBCzmQffrfEuxge",
  "key28": "2Zujehg8oSJuf8WFGf5CUveypdyGTmMbJmiHtTvfXfF2uCCPQRaG7UxckQig8SiJSFQgmoepqrWGf45qej6Gd5yk",
  "key29": "2xYzNeoVh8U3TK5BSPRrkAuY11mR8JvM5FNCpvq1hBtqZpHDHyBK7acGvQNzETg6nUdFyWrHMgX3doyonThC4QE9",
  "key30": "5sKXZbngV4H8J9Xa1Q1btHx6sU2z2tVVMQs9ErV3Fq5TUNMiJu9sw4erSQe72WAM8BFaj2kpUi3fXpTB2cCdoq5X",
  "key31": "3XKFj9rgEqcGrNFkPTP2t9uzrSDV3niBmeSSj8LYycqpMhZFwhtEGkzDFnhNNVFa7D36NcxmxfJBbkrchefGLZSC",
  "key32": "67qHmcZEts76hCurPCkLH2WPkJStRX3ZFR2kZbKLEdjmVeQae7RLVWBBZYTEQbx4pZKJE1389wy1d47iCM11LDck",
  "key33": "4jWFrXMr8wS7brfmQHFUC9hn5fNaHmaythevzegbuAfnkaRTcfEJCTksQynRAAAdkSqL5NkwuHsV1FnTh7WsxiBD",
  "key34": "3JozfdwuCVMuxMWr8Bd9rhDCi3kJMXmP9pGQVejmUg5CynWjgsghpXkgyfQSzk7pX3ZMqpkdrTZ6j1HKxU2QSFXy",
  "key35": "257fyJXECqVnctVbS3QEyWuJgRX2dNJAtHE9P4RyPR6HC6kQeN3sQgYRRXnVYXH1FCqYzUG5QDP9TpipfzNDk49G",
  "key36": "21bcMqmKSgkM5wF9bbzHMjWVTTGpGVMYbUWD6xqFmq8Jb6GuyyStchu7eFWBpBPUVHgSNSP1ZfAo9fG4nKn19fKH",
  "key37": "2NGDN85ix93RUz5xHyDQy6n7W7zFgn6e9scrmN7Quh4bfA14XFRL34vfbBWjQwyXCNMoc8GU3x9ppFc91EVLZqZ4",
  "key38": "2EvsuWuZBYfAM21Ysja78bbooyCxTQMZ1w3yAjyHxp9PxtLgpajWvYYgbiqSzuDikydkFMnooBtTp9Joq3r3YQiM"
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
