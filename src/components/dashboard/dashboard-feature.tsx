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
    "5nyeEGugSkdLV1VrCMMx6oE9RM5GXCUWWqLFP2bPH6bDXXP6t3oSzRnjvgUmLjm2Da3YUVQyNMKeztTLLQUyHj7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yGQepDrZeZtYoLCpN4HJm6kHqQEk27QndNVbLedBbwzX89xkkDFVKFMfwccTCTmjNW3vPu9ivyGFHvnngpBfqKd",
  "key1": "2zLbkvyFRTQ2AsdWGa4263cxGFiSK47vaJ2LYn2vpycZLRoZ9o87PH2GfX9YBAKQKMyQPG6XfcQpsVzmonfn9hGN",
  "key2": "2xVefi2EySxWG8QzDp4durSbGheXz6wHU1bnT4VCfgckajKKao6fKHHobV7SenVeUc3y2qSEFi1gHRDo3YdDsyBt",
  "key3": "4oRWZVDpuv8HR3fUbFyrY7iXGNpgQtUghJRCqvY4hNbtegSbH1afDtxB2Dd6DrTiATwq7RJG4WP1gXNSGJDDTo5k",
  "key4": "5S8wmgB93TCzGAKYsLR2VxztZkVhx5r9gyNHVd8mKB1KTyRvJDTb1pJLjrCaTE9S2fd5TaDpdhtHqmSSi3PEUzDJ",
  "key5": "21kvQiUpwkajHg4533f1Ux22mNZKvsCX3vh6Y4WAog1i34pxfRBxnwzRFULvrvSDYzM8Xt6jbQL6iDa2RDDVzbiw",
  "key6": "65sg7B96JSrr6G8dWM8ew1LCjfWy4ajECBCcnRSPEDscbRgCRjTDvxnSf5itLQ31w1BpoBghUWDY5hNaVhdJWEmS",
  "key7": "66J8HhrrgdHjX3UnSWFtgQhpQ6UUYEhqPza3vvBjwGiYqjzBnGjmrtvGC6kPBawdaMNpfikyoRmCBgTWLugQ7RGh",
  "key8": "2FcxeXoUvSgqfzbWRPA9PgiM2UC9E1wwhLe97SGgVvVSzHg1MRox41TWqEZ3R2PqcWns2L85hUrsFgCnHnDiXcPa",
  "key9": "miSDKKXRfVTYLEr6GvefYM2dxZERQSmGNFwB1oo8GWCGAxkgbrSq7JrrXknFTgPQZjMZBkEFhPdDKs22Cqtooyi",
  "key10": "2okc2MpckMDWZ8YZMQubYaozdLDx2kRHHWzvZVRgQV4LfHzhaedZYJByWfPrZmZGW6nfXHgEQJ9ZoXUQrvMFKnoB",
  "key11": "a3QeFuc85kWGgWoyjdZxqoyqiTbQiouAyPDFFguDdRPMithGBeJz7KtiYQuUa9PrZNhJBvPctPRyCNs8GEUk2Wi",
  "key12": "5BSXLZPiobNJVbvmefgq67CyQoW5aqWwwRsy64NRLhdau4jJ6PsH9qcVKfpnFPhxwTggnMWUUS3vV8z6ZQhHSLwG",
  "key13": "31dxMmFs92mbKZQn3G8ooGpozhX37qKdQyiTyNgRzySRPfW8KK1oc7KnnEUiyNsyiqjZ4Fte2AqpJtHtjmP2fo8o",
  "key14": "8Rxv4i8HbyJ7ZsmpiigAdD99vJhEpAZY8a68JVJsufxFXfH47EpqXcqCVH3QAwomg87QV2U8JUi2zABPgWhDyHz",
  "key15": "2kLnNudUSLxfGcM2BNKxaKgpxVqYrc5BEboYTmFj2qdwuNzGBmypfSeW4EN7mK5DP7X9Do7Yi3spS6Zs247o882T",
  "key16": "2X5u35TekoUhySUTREfP4NW6H6Ycg2W86Z9CCCrzPdbBWkW2Qfvca39hV1ApHah6jArDTZJkDm1seA59YKqnu4XW",
  "key17": "2PYajodgoJtVaQ9pbWycgA7QZFjcZkbLYnEvX6eqCoV2PZN77HrSbTGX7GTnPwF6VdLwjyAD3smGWtuyq5ScueUp",
  "key18": "u18PYwvBQigez4qB5QzYHWs9keSUtEN4Q8cJmwJmEExD93s2BEd9cunXAkztW3TyL9ARE3UqWqkWGDqbsQXSFst",
  "key19": "4PgvMfS9aUr2qdJtZbfei9vqGpMiHhxtRQfLQohZtVeK2mV8eFEug8cUmU6K3BpZSNdfWxRmu5PPahMDADm8UyQo",
  "key20": "5FAx7HsdpHwL1GPWEuQi3hkWw8khj8CYEeoj6g5PL2BvT4U2hSwWfLYuXdHcbHwz8ChZBu1tLUo2GG8PSXCKuK3D",
  "key21": "3XwU4HZjmD419sqBSgq77AMha5BeQETQBhRcXR7yQqi7GMyZdevRyQBxELVDVDPJHDHKxN5uQN39oiJsu29wH1mg",
  "key22": "43XP2VRGCojR3yu6r9AzSw2ZUfxs68VTBsgxJnKQnWsiRmVEBwsFF4fuYzrQuXEPoHCjfTvZb6Ka3meDzY5Qu4jW",
  "key23": "T3ujhVtMz8uDXkv3MzbwYGQgcE6AF2zMNtsr1N9c128qM2UjrYTAK2NyrPZa8n1cLjAMo1tBVV76fKLrpAVYKs3",
  "key24": "27LVwmnq2cRDLMWQyWz53YpvwTUfzMSfnYxMdXjhWJwuHjbuUTEfYKkYHRoXVjo6dKoJmsBuZ8fmbe3GzhsFszd9",
  "key25": "64SRSTYoCAvk4rxPSNJTU2qj5W419Uc74PbySxvKj83BN6DQiCaQE4CPQs36AyfV5QKnerTxyZ1E744JYVjJSQ3S",
  "key26": "3BhL6Zgs6SncLJRtFzWawbBve6CfbYcTpyNmnUKp9Z9n3fxKUQi9vr8w29N2aQWTuZGHAd3X1K52imrk82F8a6a",
  "key27": "5vVdNuy7Pob1JrqSAk64Q3YAe49y24CLZixEujgCKpqixLLDPzR48twKmUdsSF64H61gta8uxnzevXnmJdLnQJXk",
  "key28": "CxRWPRhFjZGJk6QiXwXoP1bv6M558XYTsE3hanMgZo1XCiL1XdmTdnnMpPKNeGcbJEBxdszXWVx6ruxjDMNutfH",
  "key29": "3aHR7ecCFysz6hYveSNRLgX6NUQL3fubpCSSYHD1uDHycUNLuDZmWhcJuMEXkLm6xFk7uLceEkB7g2CUWmWCuzE1",
  "key30": "34RaHcW736eL1JDZhoWDhQ9LHFG4xNQ8F2xF7aWenoRqdoPf4h1uTbRwyYJwLPaTQmwZyTCsGrKw1PFBepyDExtR",
  "key31": "4hLteqrj7VRe1wcJVWHcWuuXnoaaaYGAsvbvmKhmzhF3UvRFPVXKQgSBQwXzc4bSjMK8bB5qEEEMRPgHWPr7QcGk",
  "key32": "2ExQodxctny2HeKWJaVZ2AHHydUdjBZ1XyUVdQNXntKuaNA2A7V6qNKCyFd77VPZd5AeKKJ23HfxmQ8kQ1MGksFV",
  "key33": "4uBPSTBxTSJXMEAUNj2ZvLgensCLjLeUGf7euagHhvVo1tjQp1HFUXLD7EkR5WpHW5sBMDXZjsHr3HAjHXVze2AZ",
  "key34": "2Htdyjr7VvoDM7Xk6pVVKSL1tPCQk6wVNR5iwGGxGbSvanZaT8hiWKqLJPTNHNfT2H4SqZPZ1yvw3oJC5pwZD8s3"
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
