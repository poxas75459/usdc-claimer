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
    "5tYsRMtEu8Da1RkSpbqJKJg2iwDaRP8DaRNj4aYWbeJ5RsPGpw6doSLLjAWsrjJx3uAiDTqFpx1jjfYZdBgYpEa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M74TiJHfQoB7rFtmZtmoMphZwTRzXbgnLisNVDiWmhqh2gR32HD9126TK3JmAEW6D9kMmoMU6QogrdrWstkDMFy",
  "key1": "4pYZ6pq9hHAHan8ixsZ3bprs3axBQvcrfRxoyaX3NSaUwvtmxTNfLohZoh5U7tF6cqvswwLPy5HnoErkHU49h7cZ",
  "key2": "24vJYsmzTs9Jzum2ZDpoycNGVPbokTyXY3wum4uTnF3y7zYKTgRt6o56ecv3x6o1tckxXfYFeZ7HCt8kMVGz3Qu3",
  "key3": "4Qt5gfAvTooy7hstj2VS2Da9SPaXnsWjpcEAV8iLkFzM3qtZHajThQ3MpgrWUGV9n6Lu6dL7hNmJ1m5iJhhhoZtA",
  "key4": "5VLcuw9EenGXDVksHUeYARaJ1N4Errvh1Zk8zEKWjqw7i2pxRQzna1rXeG8R4cBXqKtLzRqHthFYip9WM12HG6RA",
  "key5": "2n3HTN4gSNju9vMfooA6pQCw6vbwCUyixStxtG2qCaoW74kshFax3iu2p8wTDteNC3xMmbwrzmrk4qCjZJowuFFN",
  "key6": "3pkn2fAvUcMMryiont8m6gYWSNwZ8PhYXQN62sSSMHrd1moEpqadSFwX7dLMqebrw3N5KVQuG4jCYNRUQy9Qky4y",
  "key7": "2yrVcnfRjmkMSmDfq5nkHRDdqzvmnEU9bJ2zuUHzxnRJe7UXksPKPFJMUTheMfucQ1Z2kWKFxq1DFppQDqF57cvJ",
  "key8": "2yPwX6CpAbHwqwwvGqfysJs7g87qHoRdWKc6Ywnp4dAxdPD2nf2YJASGUqXV6kzJijGDKf4V1VkN5wxfVDhD9ufa",
  "key9": "5kfqkKN3XkQ5zQoKFj7BuFECSLej9HvxtCWTMTKjozUqpqRCER8k13SYhiKGpVE34pWERx9Pwvv2ZwZQGpAvTvbU",
  "key10": "3wVer5KvjW32yt6N3DjRHpmcrt8xtKTHicQdiEbP6zrADSQe3TvtwJeAjcUtUY8fz1koabtCXXm3uu7EreRoxFWD",
  "key11": "2y6C5pnCT8hhzV7cAqf9AyxUyZXHbUEA58iBhw8fgs9nrLiuB3UTpbmsbTghNJjsS9ayzyLLGjbxc2KyBHBv1T7f",
  "key12": "2To2Hkuh3HhxGrjguYq8M6HTpv3zvSbddV9fUNp6iZFGgk7zmiWhRFm6DMrZawrWyd3XR3RYfgqws6B2SWTe8bNm",
  "key13": "5QTU9jbjCNHgsZqxMRL2u7CdWMhuEoMvhnFuK4dGV4xciNGYjLs4U26aNZNTQ6TLjqSCFL3V1LGNjV8VjKrDcLAs",
  "key14": "23ctMnCmAazzDssNkgdFPZyENcHnp4pVochQBgfjVvGDT6VU7TyD4DDbgvvXuVsP6VE3xKz3nuzyVt47rvtt4Q4g",
  "key15": "3nLWM37mUnQr9KdbLT9eTc4C8aT653un2AQUUCM3PTJmdGvvVStnLASyNiEhuVBu83C2VQjCvRDCVjz5SXR28YQ5",
  "key16": "3jj8YNUNv5aFiB5kHaWjKsry45TXCL3JTN25W5UpSYkd56TfFQP8tGHEDcq4JWYfCxN7MSp9kQDq3MdKF29WwwqN",
  "key17": "5unnTPZq7XMTuJmzaWXjzx9ChSU1zcPrRxEt91SXHnnbPvFB6zh2MBsX6FQ1N3eQ4FS8FTvcb2uu5jqDwdVSE5cN",
  "key18": "4MWzno7eKEPReGDT8rutDaM3WGSqowFakeEBsfu9E7XYGhEGaogWrzqU2yJ4Wxsmd2aKR8e26tMMvSTQGcGzjeG7",
  "key19": "2GwQp8w1Ymmn1qadMpkRKz2v4R8WHRnTdRbCTJY6LR9PhPiJdMGRRHSLWxafZe3p2Agd51C2HgHAEmvFGwfNpyoy",
  "key20": "44HkvPPdoBWZDrKcqbB9KNjfSiMR9piapiwKn5CEsgpRegZ2mBFE5fhJVCQ5qMPfEy93SQ3sMQVvyjC4FbdeScKr",
  "key21": "4ArVU4BPmK1tNonPjA1SWkuEgNwmv2X6fyGUqvs183gmxJv3zPBFHkG3UVMUsK3CGyUxcXDHoaQm7hFie7s9wUH6",
  "key22": "5BQRBrzZMPSJZCy4GXePN2rf4VdvkrRuE3xob8aFTpddrdVL2sP5EJuJ718qejAJWdE4x4s3jqVLXBNTFYiZiEdx",
  "key23": "5vm2yz8ipMeBg9pw1hKEq8G7kNMWidEXvg9JmswkpaR5qaT9QP6yj9ws4JLMQPAbT45mEYqo7DnnyyjMeqPjeUcV",
  "key24": "4t4Wzr9eKcjzKZhqDKChZYNP8vix6J3cjdik6AGXv9yuTpvjkpqPZCYneKHxVV2wao7cseg7c4DwWFKyFEYqmxPc",
  "key25": "5J8WtCEkagwmxsuXN2GkjXqpYrdjkGS34EoYmispAsBK7obMHn5FMNR3XTWkZvoCFjfXjJRZrzrASDmUGJKBfP7r",
  "key26": "ocGapUTzCwKjzLDqMowMbFbKhQ8nWwuPJCS8n6Wmd76g5eXL7runZ21c1DXcMyyxerEU5X15rjU8dDPdMhLcEtM",
  "key27": "4itnS19xKtJq8gQ8hT8aciqx7YVerk2Uthg6MuWfT6eChmwA1zNhBhiZD5AEwbi9q98qwZn77MKa1rsucLS3LkYT",
  "key28": "4U8JzXRnrZy4KRSNWgufuezA8A5GeJeiHfHccvD7SJmWogDX6rRUAXZCCN3Tizr2Uy1aE2ghYe8NhheWtVLPRvTm",
  "key29": "24VuT1MCj22KU9CKH7e7dqKE4qDVNPW5RJdDVGKYbddin7dHykBfKJUf5KAE1TdsC7fZmNhiiMUwhr2wmv4UsbwL",
  "key30": "4k2yeXKfkkVFd2CJ8CnmJyAfoPFMgyzJJz9zbL5Y2k3euxyYpFSPcgB9JJHUCqkD43WKY1P6R795mCmfYQj4rPhr",
  "key31": "3v6GQJ4symsrvs2uqSKSwNsmosv6gSUt6B4VsHUMCevsrct9w6PFsneUDBjJhTtG1jbXL9FUhD1wvLgHufqge5uz",
  "key32": "4GJrwRVBJasxazVnygbwnLw2i5CqoRc2AdmTrJ2EJ5S8aK7oNjnxqc4J4Pcgk9uNuz1gVsFagB5ERwvc7Fo1BSrS",
  "key33": "5g7pd8Cg4ezm434QU1QmfgjMYGereKWRsQLecyLWZAcqfLEJxnzyXhYydp5TiZHS4QDiTRYeJjUFDUtabkuFN2zS"
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
