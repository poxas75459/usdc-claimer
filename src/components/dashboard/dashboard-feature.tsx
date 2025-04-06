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
    "8Px7QnVC7mmBukBuMWaFUtqP87h1pGGTpFZTzUo1StUBFK9ixLYUFRxxjsDSgpfNUboKvi4F8mbC48iMr9onz1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QcVVvP6Uze8X2kV3aAXCNuSufkiTy2wCvogY5Hv4AwwDqUtePHPmiHALSi1FL9tXh5YUpQpaQykAWPmfkL3wUBA",
  "key1": "2d3ALWTknCewmmMsrt8avXztCMEssSgvaQ6wDC49EFeLW3wueDAbZpnpAzt5noCwXoN7vA8ZYk1Rm73iUpVStVXw",
  "key2": "628qDghAmm48WxDbaq46NBvuUnUw5821mzXFjxeCL9kWj6SdHYcbREjPWt1jhP3cPnRvBmTvNmsGCFZ4nDdNYFJU",
  "key3": "VGsZrUt3JBZk6i2L5mLvUzwF8JXD7Vw4xVbDGGTDyqhTnjLGij27cEkL4QeXDb3DVwJn8rbd4oPd195bt6db6ek",
  "key4": "3FB28w5XVVGBCWaXuMyFHPxYjrperTrHh7RcWdFa329aaiqAdAhcz5siAzStkJEjqDEwRFF46b7VW4c7BoepPZiw",
  "key5": "chnjTir427vghnzi1UpMkgEa5t62B3PQ3WWQ9hS8YRAZjaJneY37uc2aQYpR68B2FEK4pQuYYZ3VSjtGsomKjuk",
  "key6": "2RyoXfnS6MKbWMBXX65UeyE9pBeVnLwKoi1MdxUBF7JcYTQMnwNgevA8BpPhYLACgY8AiL5KsxHn9Xdsrna6bUoH",
  "key7": "8vS83ibqhXitjFUBUkndaa9nn1ewfLZVffsHUBpZxdk7XzgjmGkoo59ehWBRxsyjNM2AuQhG7q4GSumDEXjbXkM",
  "key8": "5iPLbsj3Sqh5N6qXYsBMTnVPg1qxgNo5akHrVZ3E2HemP9PAhHLBjSHCePTVggy36Jnm6a2P1WFSAbe69K3TFuCB",
  "key9": "3LyGQCWQ6JhBPZxmQnfx7vXm8Qr26GqWnZjHpiwF2CoFAa9zKPGo1UXbKqwUmt3H6amNQU4Awnand2r2B5BvuNJo",
  "key10": "4LzRX1An6ZLLECeU7Wh1vaw1WjBiwVTA4v2KYJTKkyDb4mVUg26EfEijL4yPbsGiPWvhJruiSp1c3zfpFe7vckee",
  "key11": "2EatocepvrgcLr25Hr3kDqjuSDVZzKTqEkzUAjRnPjY9wZxyVqdJLj1xPCggwWUNvuwCjRSQVaD6d7fkrzFxRQfs",
  "key12": "3CfQXUr9Kj65zTYutppr6KSxVFurXfRKV7qs9Y1nzhBtHikpjsK424Xk3bRr6MDgKwgkzVuaRbpgrj6GHq11JGC1",
  "key13": "4N67ma9h38zZVFGENZRDpAFX1TAgU6a2V5w1mWzN37kS2z4qXLiteunRbXNjxEpMZNYgFAWSJLSDtBkwWSC2QUzr",
  "key14": "5QaJ6majBxqy3FcXzgYPBbYsWgYzdBQTt9XcEYdVmar45B8NKhpXvNVtuFMPieyAXCLofwVvPuoZiX9cGGBHs3ih",
  "key15": "5XFC3rqVB3yMRQTw1WNCd3YSm8ai4kZqJGVWsS6JsGjz8YLsJ7NWseT8yBxmRr68qVfsSa9wqWM1GrqQ4cXyNpfv",
  "key16": "2LLu9J6KY4TnTmEjYNySTbmRW5arKcyUeeRoeCfmNmzGRJXYCCjkQj4HyHyEofaTGBizaSh8DJ16ngCKvydTqgfr",
  "key17": "UXRWRkYtc3x1BkwrJCVY1Z8WBnm5PwqttwFaDZmsDB6gW1tquTRT26ANTsn8gaEWaZVFAGYa6qb2U6RGvkihSVT",
  "key18": "32UScDY8HnyjkG53XBNuytekVDxZ5hXtBkdwcEeoUFhrpeJZ1hu8xev5DriT9GPUk2RoPSZxHKezynLVAHJKwbDb",
  "key19": "2b3eWRrSUpbvW3teac51b2fnbisPjfh3JDrBHJBtAJ46NM3465wNVoa7Zd4PUct9Ky4Xo6a1fvYN7wKz2t1a1mvq",
  "key20": "24MCzPdZDZaDtUb7psYjzRB4mE5dHa8mtHXKc2pEbbHsWgMh9WR3yQPJv2GfvPc36dj9Q1qY7gY8p7VPJztiQNaQ",
  "key21": "2zaE33ircK7Fq4wUKRvJFUHgMXuPdVrGzUEFcyxXqev7YDugLQeKiCsQq13ReGJK6vcqQRm6WRwEiSTCy8LPTu5E",
  "key22": "32mQko6M9JHwL8x2wSdRJPCCyExTvr2dACENmUxjX8Ev9xi7kwvUCSt4cfBNtwGiwe3gHd8wQEH7cetfEy2V834p",
  "key23": "4GZMqLJLi6ysgMov2mt59WV2wzbd6VunNCmS1QPGepEphMjVCKs9EaQKz5WfGBQYrzszVhXXp5svL2R4Uka5RGif",
  "key24": "4NyQk1qfg6brCdZKLhoaHtQuNrhN6p23XxLHnEN8b3LWnSMKM2Wr2pjYP4wbxsqFgHG4LVobRL7R4R3DYXgLiYSP",
  "key25": "4xttXqEjUHFL3BSKCixkRTGRebBQnqmkcC2vMNLSAfiZZPZy2qZRMzfChNX9ue3X4Y3WNr7767AirXrTXRXDaq7p",
  "key26": "4tBeAqvJ8d2nsbMCBv2ynYhGP4hMveu4hK7pwcHz9QTPMZP24Lgo36Xo7cWifvR3tjftsWcF4ayQEtqWkQXwqe7T",
  "key27": "4Y9RA7PPjz6kbKhrnHfmmXPaajugmXfeCv8Xg2z6uFVuJfr7SVYKYPrX8BDJLfYGTpW9fmRQt4cx1MxFWtztoKvm",
  "key28": "5F1AqkAMvDGyeaztvy4HKdLAFp77b6bKLcp91bNArS2AqirjK8NXaep9UQptWVrDo5wrLtSqG2eWHBnMKkFS86fD",
  "key29": "44trpJ3qGZ6XBQQmqqtWfepdoZhBYSgwrYBvLosURzBusHTNDNABwBpmkt3Sw4JvHMF5ER3CqHnBhTnYL7YLx8rU",
  "key30": "5ViEMp9UNXaC2M3jy2RK55ZYuMeLJHakr7AmYYWmHNXHgekgbEuoEE7jF4GHfdEXtzAsYL1rFx2NNfXfc5Y26nqk"
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
