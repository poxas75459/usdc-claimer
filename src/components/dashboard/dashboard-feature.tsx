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
    "4Tu1Kc2LJiXUAgZ57AgQ2HCqTZsWP1N4s7yrQhpCjGZJWqjE4T6CouJXhhoMsrGqiJYtdp1hmctZsbWEaN86XX4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UnDG8qp5Ua5gvdrz1VwzVrddUoHdkdrSAF5o74vADvwYbgEm56S6Eev4r9iSC2TQtLzbT4LWn95ZtgFy1uMtiUY",
  "key1": "X2wHJVmLABS5G2kanNCUhDRF3tQVrhWqZ5Ji228MnW7Pb8g5RKDc45p5P7Lvjo5XiA4ZhSrHoZunDNdfU7NBN96",
  "key2": "4bkr7MvjPz12NP9TEi2esK1Xc4sMGSZjuotYVGCrsKMvP6PfhWdVvbpU4Qq1adbgipcSuYr5b8pb3WF8odpxHiJf",
  "key3": "37Z42V4YiqZ3LmhM819h8dhwaom84aCMnrmKcNTGqr6xCyGBQcKqCoLQPmoBjr6d7zPt1SVb6bP4395T5gYD6ZTz",
  "key4": "3ARaYAr984kN6BcpCVQk4Y6sAhjv3iGJmcGiFkLf5TniJr6jesraspKnobTfJv7T5dmSSSYLHEET4VzgFQ5JUero",
  "key5": "3F3UwpR6SczuYZNTG1CqqDdYBiGNKdWF38RERV1Na3E5uXhJ4QaX4XixFd7wRCNbdntW9LAYcNcmVfZMQR746ckf",
  "key6": "4hbg5wBFFEt92HEqG7cvM1i7acDqMcRPHA1br7UcUa1jPpjmoyJtuscu51QdLqZFfMmQTVMj8NNdBVHV3xBv6j8T",
  "key7": "3sh84Asz7d25kwEdjsmXxBJPrpsh9ddxpvb4BgFTmSofs3twkYK4EvhWHdbgTo6EHfvpF6oxTR47spMitwDxSNgp",
  "key8": "3GNp5MjyKCB5cKSgePU1SL4eJx3rc9HJQme5JYsuqZYyEi2mdk1jGkDuappwv4ER7HFLhXnBT9Y8viSqnCLTHfNt",
  "key9": "52DP78kKYx7s5LUBFN9sThjxF1QMjWDH5RLiz9kt9Wwn4byzxAKqyKteyLAqMmhbcMknjG3FhGAr5SYEPMVrJqRf",
  "key10": "5Tx9cXnp94wjUuzrC1r2bqeV3LVDXWEFPauWeKwnr4ZXHpWMNReBEbTP3kJyK6XYh5mov76zTKhUB6dsGmgSZT6G",
  "key11": "5BvpBR5wqAWPxtfmTSssqupxWGnPsMDWTQvbuyasufMroPt39zogPQuxGVAXquoowioL9XS4tWsQLJZo3UMnJRQ2",
  "key12": "3zhqCKBdkWDHhPj15N2DLwWTyWef2xR41r1TJbtDF8MuLdK2Tg5THEi7UtrjRjJ6nAurzfVbC8UAkTyyWWB3ixxm",
  "key13": "61mXxFvM7MeaYrB5wtqavpaUYqkN5Li1ruuf6f5UCnNdXiTdVGDmvuw5mDXVgyohrN7qvzD4XvYP5Fy9gErzuNUG",
  "key14": "PubGxniX4SEZA6gMjUrJ3mgnrdyZHAEx6v99CNT72jBsMSW4AToSaVTjNWShzsSCde4UtcF7kBwdR59vA3VdaWa",
  "key15": "yYT11nK8RJWRCYfUKnxDCYdwMRkHPNvbqNSBBJiQhFe5zwT7qCni2NtxkicwGanoCkrUNshRsx8hTUSf26mTfhH",
  "key16": "BY1sGGg6EDFUwJQMUFCw2Yd9oe7iAjsb2jT1S4hkZAV5gkpk92fmWxBbmnxKbKUbip4UEKooCqoUataEQ3gpisH",
  "key17": "2SS9oBNyvdCgD6fhmwd5UME5PE2H3SMMD1fAQidgyow2vJ9Knowtb3pXBtrJcsD2QnjAZAEo8Nop3f1tMSAT73Z4",
  "key18": "pHxLWYVHZXJqx7V4M55z8QoYiyWcYPZMhaZvh9yPmp8du368UVURkLg3P2gNy2ioys54QMsKjoT7ve3kZcUvL89",
  "key19": "63Xwo98utQS6ZPgZiNiv7j2Tx7igKdFmCQY3KrXX9LNEFwY1pm9gWYU9sKmVBurHUgXyXdiKvrFWEaqh5Yffx1vn",
  "key20": "XrfVfwY1koDidr8B3dxrRdvBJTWisdeyZSLJ4su4Foi4QKKGTWRFS6GbKHaK6vwjjmkY8ymyE53t6qkMdecuSMa",
  "key21": "3CfHAHpf7TS4XRUwj6ZJpeYYWHG5WFxrWXNqLHLkvEZqPAsaxr2r6KwhCodAAwjecVA2LtifRydzY61s8XCYSosQ",
  "key22": "4ShnnF927RztHwVpkFynrRtMm3i13dbScMQe5QBkzdNSZoqsLfUPuN9JctFbnjWA4RMZCM5YkpFMTdbdAoRJD9sQ",
  "key23": "urZCFpK28jHw1H3o44T9BNcjRe58TtVucnafF2Mbiipckw47xx8Su4TR9Wk2aXzqbjD2Q44r9rruRwk6d4Rg61n",
  "key24": "24ypKsF9SkC7SZSbGeQ7smdK9RSxERDWfZ5guMWJriWdLTDF2vyv3BwAN8mYhPXxo3NMKGH1DjXPGkAdQU3Wrccd",
  "key25": "3Ucg7AhLr7bWCadi4fDAVQTbC1CARnb7vjFDdShCLFx3nCDmyByE3DVSyFH9WbJKqszkBMwK1cjFPCP4gfWX3b3q",
  "key26": "5ZcJXCD46jv44F9TuJmL1fK3SZigmWvo2EMDtZxHzrDZ6mWVMRL4iFaq61QG5pVsr8TqXdux8291i8g5J87GkTMy",
  "key27": "4PMQcnbr6XJWs8S5JCAVFGnH641NWp8ofSpmddzmYmzxRDTdZCypGYWRtHHh896eipya4y4SUjkpw5XZuuiEApuC",
  "key28": "5SLAXfJhn8FtWgoYU9DkXJbNKkyWiukqTces47CKRGiP5tdBt6mSjqTVPx2honHjYAHCyRjuM1zbhb76ksox8NYq",
  "key29": "41mM84rwuBr5euNsuNfXQxwndKgzykRhZiK1GiL8QtyJD97j2iztDAv2NgPf1EBqVEEbU4cqJWCTVbdt1WmQNfhW",
  "key30": "44KB6DonFR75qDzGrn3PrbvuvtxqCmukPHwjmgPRp2xgoYoxakJMCW6C87L1QBnEhZ8Y5Qg1gNuwG49o2tjP9mFi",
  "key31": "3NvK5o2PDeQ7gbNFRiQxuY8BpNBiHnVFTkmMXYWSueg1HufEe1W49xFE9AiX6Effmim4ty6k5zN3K72FpHnMLHVU",
  "key32": "41BLWbtAbnexjKsEqYiP5JKiPufPzmrnydY7TmsDHKoxBxADctEEgzy5NnTmawY3e9trCqVirqs5ABfD5iGBAoD9",
  "key33": "4AasQz5CFiLZqPMbUexwQH2N53sxCx1XpVZMArkNUuUjBU8b3aqyoLBSFhuHdeCBQMaCXEwFz9USS4qMbtmSWvjM",
  "key34": "2TaMHie83bZM8bBuiBRGdBARpBAWn9AVS7jnepUjdP7h74XJSJQQ7mWm2p9WzgDiMXjpkD5wYummiMFycjVJL9yF",
  "key35": "2vpAo3EKJieBgzeavezi8AUUCUYVXS8Nnj3RPWPXrooS8stbx8GkFA6iZawkwuVbpFivdQ8Z3KC8RU74hgXj3UFr",
  "key36": "2zQuuAZNrtVgXtUGo2Mdg2PBo1EirvGhuCtH2q61k97Dg9VNKjgh6rgmwXMaYepxZY8MAiD2mbKnSyEGV7WfygQ7",
  "key37": "5NjdMi7D93AVCWcVYVbr8ngeEhRGXgihzmTx4W6HZskQo9Bx9XFRxbGPAufdmzYHSNuBUzXUZ5xvCUPv9qYJFq94",
  "key38": "573sV2VEHL6KNug7GvxNn3wfoJDVMGLJ48MGPHiWZanjM8nkA64FEPR5cvLZ94D1wUMkCdLK9GVbAKz65gzyYDU",
  "key39": "3yxCpgyeyyqBYSwgxckUFoVRcFeZA7Fg5riww4oXaVKgcXvKEgoWFGi3zTv884gtVeSTjPW6KCDwr6CHncLtTroM",
  "key40": "4QEc2j9Zw7mGMzv9gTWR9Xb7SE4eH64m5SD4J9oQQBWeFw998LwkVfW8Bo3KP7kewPeqYfnDr5RKdbzS2fRjTeyQ"
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
