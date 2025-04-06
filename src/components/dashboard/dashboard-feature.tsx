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
    "bRaGimW3gQLHWppxgomftiizd6Eu9Ee8zUmpUm9EYYATyKxAdLGoGwo2iof6FKMb2iMJuNiLNLmUzfHc1w978Fe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MwhPNh5gUWDfAR6ZiaBkRiDTeyVCCyhoy6EfZvRypvenG1z7rNkTSm9aC8RkHDebJarH5f4tosadMrvbonMkFXH",
  "key1": "3EaSTo3gdYxJGk1QfwbC5ECAq9zAooHw6ejJVqEqcij5Lyg87jFzfM1DhK3ujPpqJy8fmLn11FN7LNWV11PuehVf",
  "key2": "38SFxAgj6V5m1giJe7i7MEJaiYSsxA78WtPT1vZeJU7Lr7STMyv6h7yzxiASpHgxagRsyCpXkHmiXtmWwaF6Qrxf",
  "key3": "4WF585Nv2DTithkZvRJ3ezFdCvhAfahVrR8XVdWUr4FYeHhNQa3H6uUoMFsGe8qv6UYv9w4VyRswQP9i8PzwnyqG",
  "key4": "3sJycT9WhJHfid7x82toDa4gsd8kW2Mp1989BTguxPhD8s2yYptWWrheXvCdkjUeYJdVCADyFSymNi8jMZ8ngXDf",
  "key5": "5fjkTEJvSJeJLiY1SFPkE87CrXU6UHyjpXmtDVTWghdb9nNXCYhU3XtRDvzjFDH4VvkoApR2nR5Jq4xhWJJmVanV",
  "key6": "3Kk3ghspre4gaqvDWywSQe5EZEWraKSm6mDxFjQwFtUPiiwH9BH2mwbwRoMgqwSsZzQvz8kQtj5xDmdq7MSnJzWU",
  "key7": "4ZP2jyzCt8MqmNHgefG4Sqv5qXZ3MMGz8csM9P5V4re6qFZrrTH4h1WxAi5LTiDtmqfqbntBMqiWMbNLBU8hEHQz",
  "key8": "2XeoRPHawJh2wZJbnaeHnMckMEQBkRkEGp9kTnfzuHDrDDkcfvrbuzbEEkJzwuAoDEP5b4JyGdVuwc9sC3pLKcxg",
  "key9": "4zBqdNAZZqjrpLSuriCt7csdiehcViNGAF7bL8PLJqoSDDDoSoKigSN5ZRRMapp9yPh9Xc2Bq2k2UNJgaGac7noU",
  "key10": "2UF99qomA2xas5ZYaz8zNi1o6Sm38ipQ8QTow9dUsZbNAYSMQ8nr57jZfsP1e5YKQg2beBhmQzMKLKpFzgJvy6UR",
  "key11": "2P2Q3SnquR6H6qQawqh6Gtkt4B5ijHo4qtnmmvcxBn47o1pPGqGDiYPxEcT7YTWr8Bf4YcrcLrCuManZNuEivnbA",
  "key12": "3kSXKY1Yu1zHiQLfU7phLHHCDSDMAwzPUCbxhpqJVbiPX5emYC7c3MsgZFvoe5s23mZdkTAYsGZNNZrmsZatZjqu",
  "key13": "41YqyANHYDqHf749TVcoRLmvFQKFEjq6ht1WPeNFosqGjfn75i1QBL3vVdyhEwiw1JmmiRJsyp3vz9gdzWfKqk8x",
  "key14": "2MhiibTGmoHEaQQwEpMTgg1rEGMtRVMvAVAYfLTqXoPws6WQ2mEAnpgT78FfmLG6HSxRud1BW6y4kpSsG3G4eetW",
  "key15": "2BicEkn8mo8VPv1n9Hqjf5XoyKMXFrbEUb5WYDegQ16aZVjXX1LG8KT2MvdGmcyqWPisVJMwZyPZiE3V7hiW4zKQ",
  "key16": "3u6Wzmf3C1EdeyvpkWNU2PmhYSf9rTtLM9aPUTCroAyUAHAdqau7fVVknYYbUoiYB4rfbVkafALntuPk8V3x77gV",
  "key17": "3gpHtc1QMa6qBXJ6TRTFKQYwiFEMPSqQxMSyMSrPwjtxkXbFDk67bJTroDqqvNEGDypMKvcZDSandbVvv38FjzPk",
  "key18": "5BUyxvLvc8K4hSNijfa59ku6A9HzMdCAJtJTwCJUr3nk4cdgcaEmNYgpFVjMXf5JfBQS19xQk8WZmoDXPXmZdhFP",
  "key19": "5VSagwxeKrpWMRYy3JfCDsnSScBqGPkmBXqsc6duqHKahHwdN1wCnhL4AFq9YwgLAz6VzaqBxCVaBfTeMffRv1Pg",
  "key20": "2aCZZhcSC3q2EWY4oTkKcFW4ULELsm1jsKvoAE8bVS44YRNrHzRRVPwH9tJVecPLawVzu24PMi4GuoGm4qm6z5kE",
  "key21": "3jbpRAwBnMZFMaFLfeLjch5v6pL7i93zGN88Pv2JvXpAvghbjDZBhz86zv1hccgpPb5yJiYWaT2g2TcepFz48xUp",
  "key22": "3Buboyfpp2vng4FokvkSU3gxd7RXbCKmCoP1pFTeEPxPXH2WJ6Ntswhwa6YowPYsJaTFWmyX1PcYeF4QeCHGWzg5",
  "key23": "4JnJfjwvPddsm2CoZp4zTSCFB14CSEbtRPY5sESDPezyce4Vf1xsAkHRdkdqYTLEQBYbbtBFqgUT4SkQHXtbymec",
  "key24": "3Aydxt3csQhr6zGyH3hicb2hKYEXh1bKGru2mwstXRQgCw4KQdTq5WBh9Zg3xTbYJZ3D8drADgUs2yWvnp7K9r2c",
  "key25": "5aGoMpYg7kQZdcnWrF4Ltye8LpxJZjv7Z1vVHDfFuMwWBqbvAYDBwF8u31dGSyyDaoQiYT8zkWHHSnotTadKxv2b",
  "key26": "4ykpNqXEZzzUKJxXNKE7VniN8ivuSPqqBSup6j6XnZiioCHEQLjPWaUjANA9di1kyQ1emAdBVqusp32rub8Z7gxj",
  "key27": "5aFCE47ZEQz6SGD74LuBrTwnYHowKjo2SYVhL9UBLct5riJ1tiXdDvoa5FitZ6gkKSW1BVNXFsxr44t2DxsuA8Dv",
  "key28": "2P1wKH35eFt9ZF3ZBsePMruZYoHnyAz8VebEnZxsrRAdYjEd82D8f8Rx2Tq5XQxuWbd2mLg65AsKsDYgcFkRApnM",
  "key29": "2qeRVAWRsJUq83C393XMa32GDdLiMdNwqvT3zURjUBNx6HX1a67bnLpN7djhLUSGUSn7R69yGpv2fdPVH9FodgZu"
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
