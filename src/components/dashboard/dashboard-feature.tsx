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
    "V1F2SZET5Ku5tNYcQWS8Dnr6hnM1fMDkfF8C7Sq3H49tAfXPUFZkzzrvExHFPVi7G8oZsTvdajXMqkKpBTpEmsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62mmpoCPggioBqjUYwLjgJNBACAfB4KaLSpxUug6RVm1dR2Kd2jSWoySyJxixzkow7beKcqoEPxqK43U27pVXknx",
  "key1": "3ymfAKY7Hb5DwhP4ZRSoZpysWBwRFRmYSXEm9hKynDSV3gdMTBBtkdx32eXf1HtUGuZqCippTkYqd566anCpscKu",
  "key2": "46yJS5PHXDf1aMuSZDSosuveGTHfQav7ysDQR8xm3Y1gcWv61mRdNtUpuLQVzSM7Sofymf3eJ5pZpiYhc2fYWzfF",
  "key3": "WnXJT91i1Nyjicbb7vGpKdHiaQ1dr44Jr5ijoMie7UrWA2LcX4dBY3AduHP6EFpche77nYFHVb6nWDAHixkT7yU",
  "key4": "23LQ5GQtekiJKXJVyA6tTDoW8xzMVopdSjuH4ArtuabVKrG9WMg5RPfzDbx5CqjCDVNRs59FL3DaAhBFLCKgwryw",
  "key5": "uoVZnPuvKozYFmmNpv64cqt37UbvYDZxurz9FpNStkFZpgkK9FUjaWhUjuAhWtdeE96SWafCiu94n1j1GPD4Pz1",
  "key6": "xxxQyDP74r7cMMYHDtD8QzFf1h2wUi1dp1RBQJDja2HWHHiwtUNfgW4Tu1cSZjkpWCh7vd4hs3gJYptkpBpugVV",
  "key7": "5KLuA41vqbP73eMPAzUyXHRqJppVrELK7Wa3Gp3HxHdrcXTKNK2Ztn4GaBsXnXZWrn5XfFi2nsbADAAmc2BfsjFr",
  "key8": "Cm8JpYebu2DdNvuSLwXRR6t35QaQKuw9wmiDV2eG4dV6TqiK1W1Zi9gnTs4xvFRCEPyAA8kQ48g2j79xDtYqw3y",
  "key9": "4aXwozQhsYK7DDdp69MgcYGoV8k7SYxmfabcoV9wFPtLX4H1hxuw3Pin3cYcnhofM7sy4ZNWJk6jJPvTRbNei3zY",
  "key10": "4JNrC2jA8srUdR2Mw4u9W76ZW2MsrBxrJT1wNNKgvNddFEucXPgKTTJY64XBrVfnC6wRcwBWbnP6PddCLoZcH3mG",
  "key11": "4oUkLbS6ujp3pyhYGpatTTHipbGaAbj9PdRbx4ZfUqzfwsAKYpZAJWqueGJD9E739ToRFF3DRM8x9oWS3XSHStdh",
  "key12": "wLLNqEGpU2jfEvgxFioF9BJuFFHRsAVubgk8L8WsacYR8wDmbYAuy51WbrUJ9EC1qjVnA9yAYnHe8Brs8K777vy",
  "key13": "5GGAHZf56dJBwNyQjouPCkWyFM7m2HLfBnDgwuU5Y7mZK93QHYW9otcaACoL4Xss57Nf21HmM5UD2qDQgxfF9RHd",
  "key14": "CrcH7342VysKeaQQMq6XVDAdScUYGy9yeVXJRqbcCCG519LfLU7rHH8dzVjrSvLALXKZJqjmkNCZ1ddXrpdXxnA",
  "key15": "A5HdyU8397yzqH3HR4nr8vsHdHWx6Eas7NLjoi559RPAgoExJVxERUCTbXUYiy8iS2TBi3SGHjx1oXjDe4TJvK3",
  "key16": "2om2L2KLwXWrsVB9zm87FWVYEC6gfCJoP15ZuMc6QzRRpyK8vqk1buR9p2Z5vpPWdubjvyB9EUzTm59Ng1dwXHnj",
  "key17": "4Qa1m9UuuEi558fHcpFVywUAmMJ1ae31TowrYiYVabsnWp2XYs9dSJRwM5n5HcDZmjAnMUUVy6rmaotfytEWUtdV",
  "key18": "4KyMBmDpZncttq1TMPLsj8QjDdrhgmAVypEXeZrdmJXNcVm8XaKz2Ymn2EiEKQSBAiJ4oHnGJUCjEg5JtSJrewgL",
  "key19": "2UdhZ8T7EAVxaoC7TAMfdCAqZPERCZyYDQpNMx7ezAMFibzSvkKXiacoYPgyWk7sKzBFxcFReKQc5PcfZgdToftp",
  "key20": "34NNFio7u5RWRu7R2VRq7ebGxR5kLZAi9viiA5qSrV6zqNiDYMKGXqez5SAEa7BvU3TQCcPkXCgaAPXXkMLxSJMS",
  "key21": "5xRLrtSQJkbYD1N5xnU8Vx1UAFQf6TGZJCDgVc3iR1ChbS4Xb7XQgQyWrfLyhpr3TbKVXYBCPjg5V9CCz6pdYiKM",
  "key22": "2CnkDdmp2CTUJDvjsWj55LBrb7RbmPgAdAGh2H1v2BgGLzTx2N1Qf5wHeZUtVzgiTapZSW1YR7Akfy57a2Egxz2e",
  "key23": "24ZHcuhGVG4E5Acig5cKXCEbWtfGLnCBitUH9ehqGk2krEqgtSBMe7cktW2GiG1reuzR8CMneX1UoFArQEnqKsUi",
  "key24": "3CbPCqG14oUzP79PdoyuSgmu9yAfXm5LUyN2WoYVSqpumgsbNZBS4C5LWtwnH4PnNyyD5ErBCB3dK7EqWxUxiMKo",
  "key25": "WQwkoetwQrhS3Ta8M4dSs1kFUkfU9EBEY1yGnTuAR1g6jjucvxk9EWwX8YRdMGibHTRP2dCuXkJ1AifELqdpoGU",
  "key26": "3o82z1ithUhTLmszQVnWgNYZpa4UPU7hedx4TBvuM8NzcMUWmvSnpij16nVxXWyUtuXmDUKPgip9qUVfq7w6L3qt",
  "key27": "526aM3kvHJ4SLh6wid9FoMLkTSXw6XnQrSZDguVt6YGqg7ehyoE2YY5REzSwRTJn5VrusdegzcnmKAAwYTN1sVhF",
  "key28": "5k2P2UL2isW65KSZF2zEtgvQttbLtbfoiijuJ2kymARjfKPnLpwarvwf5S9nzgMSGhJsWTkeGCAXZEDgenGtSALy",
  "key29": "2vy6XyW6ShNz7ykvmXzsAvJ95SXDWW9C8kUg49GmNw79mQUYnUQHrnd9oGZFLybB4d8nSYbNMBbdhxe8LSadrbXm",
  "key30": "XxDdX7cVBzpvynPLgBerJBWX9yWehf6cp3UHmhpK1hkLp1w6RF9GdioTXCmm4KWU2ddzjpTPkwQqD9qz3Gf6WyP",
  "key31": "h62UuoMP8fc3b3FMihity6WMVTJRifPHH694NJrRAiCzpV5TxDv2udjACFWAXbyRHBu83WE45gzSXa9Q4a27k2f",
  "key32": "mA3JMtYQzWug4Zm2Dc6p7e7eoqypjoZw3gNq7KJpyN1iHimtyJ2L1Mzx1wwqiHeLRpJ7dtizLJXk2Urpybakb62",
  "key33": "4PgFpubWGJ42nbTnyk3SS6wzMEVk8rvbxt7qUHMqwkiD6ufJ98hDkUucTFox2dBuA6mnrs949CF1gV2s9L4Ubu2g",
  "key34": "2MsstXmvfFpDB6MFaU4VxdAX53XNv7EQPj4jSusitFdNRBBCKE7n88anhbCbMdEB6AFZi9MzRtMBo1v6jUN68bgC"
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
