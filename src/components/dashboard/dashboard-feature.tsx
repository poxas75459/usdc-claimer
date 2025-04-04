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
    "5GWEAKrc2TMZMh2tCCJvs7iu8zRBjfNad44PfWYGLxcnY3RyNLK4n6WYsd9C1f9dCYCz7bTT8dyMFZvpUuSMUrVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FKB1JYsnEbd3YLeKEovsxgphshFTQ2w1QVg7oAMo9JUK7Ts1id14nBa7d9fJUow9nfRKqhyCmJGpNTwqhVD8uNR",
  "key1": "wku7bfqWBEbVUoA6RV46ACLR1myrtERnumiqa3VH3szA7zMbP3tjwEy3zb7BzrxBRn6Np3HuFcjFXKdaWkoyd6W",
  "key2": "4kPnCYgZRPtCeszYCyhmwEGtQ5Mq5ja6zgHbRMSXaDwSNKaMnP83e9WoWVyUaC88kQLr6oYuPoAso15FPsqBmsxH",
  "key3": "27DMLKFCi7esi9Nupcde18ComojFUsGHccrvbFNWfcVM7jecmZJTnHVHxDxEgUmU36WDcDkeGMeoZ8iaw827hVDq",
  "key4": "CH2ZGta5PG9kqXzkoeM1CnhmhjhVwCCF7vGqdbcXwNGJ33AoeSniphCFptxzwF1qh32uiCHwywQJs2yj4HgH7XY",
  "key5": "UxUUDPhKiReUMnzseBPBM6wqEfatbSC7vTAyMfDDzCfZNbLFKxK4MdVCTeezagUJi5zn486ZxRJ4eqUk78pcrBS",
  "key6": "bxF5jeRbPktv8gsiUSMAayhjt4FciCMru8St716WGzyTw8bg33wHX2JE3H1XP8dZqdUJcxX8jvbJZSK5LgoJgrF",
  "key7": "tRG1SSzQVADiE5JV9K8asouCXgEwm16B6qYQPWNAzW7RBF3AJa7zFU5pX61hHEXfESwC1H2246YWar7ZsuTgF81",
  "key8": "3gS99hVpejaaWJq3icZmE5QZhCA8TURV5ebWd36R7ALn3rY56kXdSmTP2Vn5LmFuGmE6XjDyvgBiL9b4hh9wg8He",
  "key9": "3ihrc8stvBrmKK42ry5rJ5epeNF3Cz61TWgCt3JkTv8kPXh6FH263CpdoPMDYco6gRHSHBQU7qVE9D3kAsBy6Nx8",
  "key10": "5DTxDy1sAWEM4J2D6qKUiDyz1i518dUsJu1Gxbx1hHckyeUJe7yKs4B6pTvp55TuVsTRhUsuzD8uRwep1oNqKCsd",
  "key11": "5KPparThN77wk42xTYZa7p5ZzS5zqYxjFggpBTnvD2R13EP2NFKma3ubXG8UYyAVZKKhqW3RqQgztWRJ8czGZw9M",
  "key12": "5U96tPCggDrLproeVhv1pqMNdcKQhS8FKVBwdJzTuUBDnVc4YrNzgjq2vC49iimKBFyCJAt215yoHVqZ5NCLsgH1",
  "key13": "29sZ9SKghuw4PjTaKnDP57HcKm3oPTiJAG3uEMfosjWqPRJqd33nkR6bMnUniEEfAGq99Q2Tyzu6mJtFpvosonC7",
  "key14": "fxEf8wTzmhzCMfnqThCRa7ii1Q6uFx5NSQ1mvYq1wwMdmaJmGpc59Kt6VvDtaafaHYpuTTJ9mNZH7pjTDfW3TGH",
  "key15": "7mcD9GaJGbnnuvdcSiEJvf7VZHEzKaTx7zi5VB59bXCncwtZ23DJS94mRgdnvH3FP2rBsXWcLELVvCUhDwSVnKv",
  "key16": "2XRTNzhLxsCuBjz6WCvCfiy8eb9Adab9onsQ49hvBa4EE9dkP2JAMtM4uCYpjT9truuLSDBTnrqX93vsWNjYroAX",
  "key17": "5wH7DBD1eTW7F75tLkYpDtvdGgrbu55pCXVr7wotvJjAtMT36afM98GcKK6go1SAGPBd7fpLNmK3Hv9eL6LdPZV7",
  "key18": "3b99ptnE4bEcSeAYz5HUeSDQSWFrEKd6GBaK5bqYQPypCCA8bbGEuMP4FEcwp89wvRt3G3RdXJbXxJETwLwXXQsp",
  "key19": "b49xko4w2FVGxzySB8bY8PF5kzsjV9AdQzbZzoXqP8HKcLmUeQGAzBr8K69wrJMHHuq7dVpMo89KKHv4MJ3KLd7",
  "key20": "257D5mbMuAZs2ksjcgq9AR9GWibjg7GTpbnHxnD1L7VRox78TKrk1unYt2LWiEJGi2G3aHuZygZSb2XYdFnrBLH7",
  "key21": "52AjGzb6f71Zh2ZS6gEDq54LDQjX4HwghjVtTabDFuYv3bHAdY8rSPdtpGhgg2wzUVxKwnxeeWBUNkgyjdvdqve2",
  "key22": "448R3LwfXy1Lx74Wky3kRtZg2ktgbwmiq8SsMzGNxfGW52ax5GtsK1qB2ZScXAvajpbnP3yPQhsrUcGVY6EXK6ea",
  "key23": "23FDCpkfB46hzb7fSjGz8iL5ewPW97KK1MiyQLYoXwinLGpYkWMtksz7asUKk5xMJYo6BhUZZhL8xGb3Z9uLt1ur",
  "key24": "2dGtHvPiyBGWHD2hjf1rKo7G6wi4wUdrGquYbqetdPBjBMspSWybYzGExBaSzvCfuMDdNgKcFF1Mv1RUQrUM2Wb",
  "key25": "4LKETxvanfUPZgGejnfRFy2yLZhwjuJNvPQ34ZftRDwk4iL2cdBHmn3sggQ5CAossPBJcdoY2W8SjA1AoVfBpDCH",
  "key26": "2XsHhFHrxghLJM7CQkrfGDYLBkJaNuEi39Rw65Cd2ZXRsysWAyRgv4oAcVgwqWP2uS3uEayKkXYW4mwJ3RAH8nf3",
  "key27": "5g1M9EpoS9rxMHYmTEVeEAG7M9haAwLT5RBPQJZsLVqv71STAEpAy7PqTMt67Gkx929X4dVc8d9DAAYPedJXffX2",
  "key28": "3XZAMKNA9VoUsRimg557y1URLQAswn89MjdXUS3uT7J95Xv213YqXgWgiwpQshPLs1sKWS46NJuDuEeVhHH17xuD",
  "key29": "uZA13AoJhaB6auag8565pYsmNN3LxqvuZiZJe2S6H2aTD3Zt5dnGvBuiDLxLS1GYhrEw381CtWp7v5Z3SQ4A4ZT",
  "key30": "2BBkknNsf4EnrsrStDaBnDq4SZcLV3a73BuFy2dUeMygtW4JzYb7VnMmVM5yvDNPD4qsU9aTKwrR9j9PP4qodeNf",
  "key31": "2MpbVVMTjZ9BVBkM8aiQHLoa8rAY1sEXcNUY9PUavr3nqBvXWfRiMiGM8Tx2Po8LWeRXC6LjwJMD124czDBWvmvo"
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
