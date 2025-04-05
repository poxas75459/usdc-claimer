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
    "3hvScEJHn6vPiyU6b44N1GhaeyN4JXk769PbC3u8cFTPFXhLeXi7BQY4Ek3FC5oHsc9rV2cGYR9xJ3Gd7zMLns39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z1D9fyGdgcpJ1YQfpmLgF9oAnZYswxQx6vAj5a8XGJgCGSnVZL2ZpcG7tvz4MqaWCtfsNoDcDGfA2QFkpzXF6XY",
  "key1": "5EgAxNW7AxGWHYpLeQz766JZfeeGtYyQ5wweYC3tWxK537sowHcdqRXaH1GQ2XoX3fccrrSrxvy5cmSHc4rhp3GW",
  "key2": "4SvQF5xEvcvvQpp6froQKJUg2PuQh4TtXHL1ZaV44eXa7Yb8AetqMZndQXff5469ysojEUVcgxaB44fCnuwsbiFr",
  "key3": "tRkVaWzSvQZb46UPmmLsZfxudgHKQBao9m7AKqxpyaucTuYYTbryroRMgciaFmChUFsEbcmycfH1za6MJB8bKdi",
  "key4": "32FEseyjHjVzPv4ZRa9cWbAfLgffxx1hk9uLCHrup8XSfahEJSHAYTXVFUiRJ39uLmJ7zxq1wxy4zNcSg88VK1xd",
  "key5": "5Dgy8vuD3EmmuAVqYuziK8d99zf1rW7W7qZXU7RWErTTvjMTR8zqWphnbAAprkboboKYJbU8UTwUia4BXAJqKGBV",
  "key6": "5yarQhxNWCqTue4ZDphYtSsijpgwKAxqb5WZin5ZfmwRDEPJYWd98HEgM6jQ2PVTY8aLU2Z8AKVr4XMQGx596c1x",
  "key7": "gdP7ACAD1J1EzqLrPb7nJgoufGUEtGS8iHtMYEyxdEJQ4mdGrjo23JqH8U6AoQhhZdwWDPBB2XuVLfAuHuUNAgo",
  "key8": "5oXJq79YGAvA9XS8pfKCULAF2xuaWfyCvs9Qsku6mQViryRyPuB2Y1hKrFhrYEpvFMMrreSKjVz8pstQt2Eduy8H",
  "key9": "4PC16scgAf8mG2zwraJCHdTDnrAUHUbRGixpXB8ShRK9KxmqDMJVvCEy9rCbU4Gcjqrreyf7HtU1LW4xyaYVYpwA",
  "key10": "4pZv9d7L1GZMKLZBUPWB9PUrAq6McH4m3BpR3Q5ycrPrWrjxfYP6avkV849YivuQLp2nSQRSvZ1DfJ39jYjEPrA",
  "key11": "4FsoZCxArNZPK9ydQ8Nx2QM9G2xS7U5DsH4uJzKhVZob6TAx1E7Sp2fyE965HG5fmjGx63mtppKYUhpB1QMcsddc",
  "key12": "5nR3Yys5zoQZRHQKw2xrhRbi8k6Fn8jzC1cxTjZ9Q46qkH7ZmRNYTgZ491tVskuQKxp42hoTgeMFF4dGeyog1ZXx",
  "key13": "kEeWMAxGCbTNcQAv1tNquaYycF9tZnqXBgNvYKGSmWx7ARCQzdEnvKjctNvvMdsQnRWzYiqgZ3kGR2e27UMBRdq",
  "key14": "3hT3sRfSQW2H5TomJA9xSVYnCYjXrpbSt9SVVwATwX29Xvck3sVNxnsvAhuMBsRzEaSs8Jio99q9rkqBck84Sb6M",
  "key15": "3QbrbcQK5ovkGrGw7q6TMvFANoQA87f6ZuiztkdFtTSH7pwvnZvvkMupydPMtscyYQ66xvoqYDWktMDTWYxVKkPt",
  "key16": "5idrSpkQ1BLjcWysJR5scufbHRkCrA9ngP1cQPHmB4dykPVUWtM8FmGSVFaU8R8WYdQmJKopvCnznK2K7cTRmqXt",
  "key17": "5HBaSgGeHxb89ghkYWwLXcre84aFottzbz5DH2mgiSqsSVknyeNkrzH1N7vw1L6xSux7NbveirFrXdeNZHxowYfz",
  "key18": "3Q23Ry4ZbRp7EThiHxk4S1kLNPeQrkUW7Yv1BxRr3C6FtJTKbvqS12wN6vEoyvSWGhsMEsShm2zYY2DVZD5kzcwy",
  "key19": "3BBWhKMeRxoXk5fp44tV3Qqoa1MdpYsQhjyeMKLwB81hSzTVvwbow67JYMWRpKcE81bCcKByc27VGUCBh6hgCGRC",
  "key20": "bejpecsBxCPm88DY2WkFvynjw5VgoEPheVB3pYjvh1MjaAZqHUTbedb4MdfkrgtVWSbNNJQoS5XHEFAK7E9Krv7",
  "key21": "kMZ6d7dJgXjx42Ucvj4cVYXFLTc5v3MyQVs8nrNx8r3PSR9o85CVTh1ijN1CojGJdNiKW9vu2DYyUV5TUUnT5XH",
  "key22": "4KvE9oC9UYVsQUAsTGELX2hvuCcZ7h6JBSxu7tWzbxBkf1dCJeHJA5koGwgbVeifTmf8hNR1ra8QZraHADX5VxRs",
  "key23": "3ySABcaYfknEsquZkzZE7hx5dNJ7rrgnL8uEKSLr3Du6T7xs626bHmLzMUpGUdptzra68yPn8C32xy9vgPXiq1oo",
  "key24": "5rqnTd7BSWUGEX61VSRYkBtpRcKYmp7oHndNLUUKcz3NpVE2wDc9boF8yyubEiXLtaR5NBQsrmWV6aGwsGTBgpML",
  "key25": "2LrGQBiW9UWSDZrDxtGpM24bwm5fSd9YfiLgVuv87KnE5g3w2bk83nSEPmbHZKoSDhRA2RSgz386SoaPBfHrLsrb",
  "key26": "YhE5B4wzf9wb1BuUA6RbAi5ExvEo1fTLvnPBENxsPPVbj6fRxH68t1h7egpAbGT9mSBhSg1kLBuioKLG32HqHsh",
  "key27": "5Nb5668WwiDENmsx6kipc7iUsRynh5t4sQ6JetzWLQphRx4LMuR7yd7q9XxKauAsWY1WvzUwNy55DmZnuGE5XNwL"
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
