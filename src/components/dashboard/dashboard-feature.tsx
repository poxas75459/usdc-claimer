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
    "QNNZEcnSBk9Qu24JzQvUGgS3tbEzko6MD61i5FphAQTrWxio9ZLfCoKWTW2eDAUXYRggchUQ8pFHCZW64R1xugx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DRLGYTPd52mjyG51TunNBMQM8jDRCdCDDic2K3YiCJ5VxZGzaYE2UMRfcrTw8YfiLyrZTLcUXiZrXqmQdqMmxza",
  "key1": "5En2c4wDTyRqjgJ7J87Xj8Qx9WHgoJweJLz9nhahTw7t69ZggHrELQKkcoHL9u9axw8eG7Z685DQNDHxUG7HMjRP",
  "key2": "5EaN3MMCwv3zmBGqkpFu31SDYxCfnmzR1ECfiDKsNQJdNoxVdUah2btKT5qX6jA6xV2GhUaCNmvrz6jSRbGDZw4o",
  "key3": "2nwfn8vsVDoGSXwbFBGAJzYswi7gDHxr5g3N8NN1SWL8RNmYCThmb7612tCbStLBGXDwxwPvy9M2tbJEURrnDBPV",
  "key4": "4RTtoKwwLX37y51GrmbYPRZdXpHFj3ZzH3ru5rKJuz7ZCJP2UT2GcwHhS4EBWEAa8HX3jqQkU2Dz8npXvJwHHeX6",
  "key5": "2aDWvKvqHv5wtfwyMFa69jWYcoopNWEBMwQ1esLHnAenVdUy583JeLhhKxeJ9SA2piYbQrbU6XvPht86AhtyZmSD",
  "key6": "2jDUxti9j3VM3Jmos9itX2LJFH3JQd4vvqSo3NcwcHRSGVPtqiAKZnmytaXZm3TVnoWsVCSC9RszriJU4gHujMbF",
  "key7": "5RDjNRX1wggNpBgByef2UepSS2syT3ByHyz4ELoGGmDz4TDbQGW4aseukLLgX5DM9GmdpxPNevdThkWkJLKvo2AP",
  "key8": "4vTzgVNQXzkgnqqab5pxX9Tw56hcRwTZCBY6sADjsG4WdZ4piSzW9QwvVXqRBuHbGyhhwuZX8punmirKKZdX2tct",
  "key9": "5EUCyeR9wRKSqKJbyexMVCgP3nGPwJDTvUALHuuieXPJjev9pEa5prxsWwsa3Ej8BDCGMhGxAQ8kP31wq4rRwaub",
  "key10": "KdNGMTMQJVdN8vFcWZ2TPAV1YP7rKCkDBhiSnSMVg86FSZLNVaAwwxTrC6Lgvm6p1QMk6wMEjWiKsDAkRb2VoWw",
  "key11": "4xYhchvPvYjUH3ZZPdKoQupYvJT1zkhXCAKMW8UsCTNzuv7dFdidwpYHKCARxa7RHefwAJm7QdUcFN5CrHfJnsBG",
  "key12": "2ReTTtoHhpb3pvAQeV5GJgFJpM5v2VirqUK4afpbPzVFWFupuxg9Tvm2Fsk7agTVqeYiq3XwfhPJxwyC7abfgjuE",
  "key13": "5Tk6svcCVqnVHtnwbjoeTHyC1i9ASvhR1rvhPCR3Y8rjDrcWw9ZB8o1FemQQQgJpLL3w6SF7LdYMoxiQRdKTARrE",
  "key14": "2eFmYTtiS43YFcBXUyNhS7Vw7ieogjs8BuEk6KmTjtKxhHfeAoxYkpKSbixnDURopU2jYKA4UzMyvuVQrbLSmre3",
  "key15": "zBKareXf8DWPGij97T1XcJZPDMZKXZ1GUHKUcdqguLmSo6oboeu7G2umcXS9uFSktMvDDXbeVSrJHSBAdSdcPdF",
  "key16": "2mGbGRHfw9w1VtmkF8wLYyRSgMSWLuYzYM1SngoGRj68ZtJG9ZeqtwoUVGKW9hPo1JRszQf2sgeGEKNVfFxHjswM",
  "key17": "4obBp6CSi6Fw7cf3AGvpP1kJTYgtrja2qvwmWpNGwsuXVkaD7vMMjuVmtFgJG315zuKzSABRNwQWTN4UbTWs6hoU",
  "key18": "ke9iMFFdBi8PSKonvGW9unowjSeNq4NQbtzs7gWLt2K3Ag1ewJEjaL3XMv34Mk5A28z9eKSUMwz8MdhptBwzz6T",
  "key19": "ZMxi7g4Ke7iqU2m9xpjQiBU1s5Z6pMzvVoJcChiaWhEsJ4TGjz2LquyvY738qkoV7MCGDTpootT2EPRRF5w8GNU",
  "key20": "2Sjag7ZuDEjRpQTPJD4jCSX9UPj36t9tQnxZfUa9t2npAUMTH7TTYXsPGFQm9Wm6vLRP97ybYVGuTs9Tem1ciGLg",
  "key21": "VgiGNj7SYoPkpXiQJjSiPXgZPiPgHj6pAMniQEADYR2Me4EQmJy4pJWwNm6pDPqyvEgUMMZDdP3ErVUHgyZwB68",
  "key22": "2ScM61JXZxsdQM1jBavVY6k98siRSd1BfEpHdCKEAB5w74NkH1SuNVAF4aq7xcZmPEDXgywWRWFSGVxUvN1XA9dA",
  "key23": "4ea2jysCkCKheXPLa8cSzCquut5zRCRVCTixnmYtqAs7KhmHjGtUBc6uxpMaVNF3D4YQY79Rpv3c5UmbwriAc6Fn",
  "key24": "5rnYvkXfnw1hBFhcpkpNnepKbXnTqcySr6jZ5G7NASNb1WM29vHjmgqD9XBKp2Yen56j7ka46NtnWqEm2oq99mY9",
  "key25": "4ZPt6CqTmv98LFqVqHcCR7SZAPjaefe7876v51WFnZEEu1v3sqBdMFja3Fyhuehg7ZudMKiKBoWt3UCLtP3k7A2X",
  "key26": "5J8ZvY2W5qnmbBUiuK7vdscWt5jYe1eJXNC7nZn33Xk3duAeUy5EChCmF6ajF1SJzqCWhdxVit3PfqwShxYTn1nQ",
  "key27": "4NheDXJGF2mSJAnsyrTLrWVhUiTCpa5uFxg5XhbYgVQUG6BUpTwT8PAH7dzVWxCqYUkXQD1SxQHAQxF43bKv5XFR",
  "key28": "hbauKoxgNF36Wv1b1zMk9RmZzCsCZpKYLPXzUfq2io8r2MhJasdpa2K7TZ5n4HxqeoVokNK3FQpijPEuJryytZ7"
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
