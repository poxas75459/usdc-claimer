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
    "4U5aHuBx7hMNurbrQ9fdDf5kTkYMsRwUkuCa521FiKL8PffbTkxu4M4sd1HL8dX7wx7y3HCbycK6zRGuFvAorJfA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xg6MGLWXtkKPggSSVsrkLnwwmEBJPquDZqcWeDXmfZ92GrE1444GyyFvKVz6mJ9xJuYYtz54P3WupVVjrGV9S21",
  "key1": "2UdwSt1xfVtWFiuG8vjLhSjCfvJEprpnbbgdoW3JxmJjDgMb9X8iyAoxubqhsCfvZ3KcsDJXxXAtqb3MydPFDjzw",
  "key2": "4dDArXwPPGRU8edSqEZPbSSm6wgd1sBMG8PwyAowVWZkhVxBGbF2aQGZYQxqPMAyFjh9WsePeeGJQynRUeZvRVzw",
  "key3": "5iEZrqxvr3TqnYCShwzJgHNFxWkw2hj4cy7KeMgYcDezpWi4Zs189w4J4gpGEagHs98FhWC6zDpqwJUvDkpJeZwb",
  "key4": "2ndJrnHiznAW2HdzBBwbyRB2d2yNB9QujAZhBWrXyzstHhcRugiYFuExngBniSFG7fEAK2vR55wGhDiTUyvpgErg",
  "key5": "4xjnpuDcoijov1dr4hZhYpq6DUK3MSN1GHno8T9m2qP5ai8xM73EYeDBw9ctdpEWZsRT253U5r4UsqKvgzDMkaRx",
  "key6": "3dqzr5QmT776wqJ2ACTVXZEMLcab3G3zzA3jjnyK9ZJMc1zXou8AK5omdaBbUjqcNDwCihLS7W1oRbSWugCGJZV9",
  "key7": "2xof2RiUaNXYQ2WJbE89Gup5yRceU8HDA52VYxsAnmpBRLB3Zt9kALt5sdS5GvuRy3EfisPho5eozymu7Fkig318",
  "key8": "4Cn2eYrd8hB4McLcSyGGCXbyxZ8v7SsNAwJUAvac6BSQPWBkScFP8ExH1AGrpdfbTWvh9ZHo2XsCBWuuLvDtUkPx",
  "key9": "3XzBgAwUAqyc82dFtcegJa7CzMu3rmMWHDMpMQR7uy1uyKkhMPJtzciNUf3qN35zjJsVqQfezFhvU4vhhPN6xdA9",
  "key10": "2wdgQHMdAcoiWb9XkaMRw3Z6E9RUfxG1eQBTZ4ToukdRxUFmFEjH3tSwGjwipNBMQ81WrPZ6vf89XQyfyYU7E6ij",
  "key11": "5nimXrey3P7yygu6G5F6pPN3VyBHJAZ8mZ9itT2ZrpjDZFu3Chqna2sySYoSaPZtu9BXCcjE9UQBBtbGbm1mJpsU",
  "key12": "Mw5gwtffJsE3CrpH5WpABH65g9yUXbMPAJHAZyPSSGo1KdDtFWQaR9SM3TGu8Dyw7xUGNdZecUdGpAj76KH2oY6",
  "key13": "5eiaJZwVr2EttyT3u8ihAWFMuHakyQXC2xr4xvbGEAuiMzs6mQSSUzsRNm4V9peLPtWg5MgHQ4D2YcYqyoREo7HD",
  "key14": "3inZw7KzekqRp9BRntybuEMPT66ZKiQ2U4x8YCSszT3BWFeUTvtVsLjsG1kS8oVFV7AHL8FBsW9vA6vNwjtQ2aZo",
  "key15": "3jVnWMvPtYAA5cmwM2UT4vDw6G2WEre5RT6ifTJ4tnz1gqJ6B6AmKD1avMXdmk5ghcTCZYT3oByWLPtiWQtrZZCe",
  "key16": "BugP1a6UYPq19H7qjNnQkruQsRa8RVuTzMeoPvzmR6y89zveRw9W4Nw3TM4pK9BnvK5gHxngWU5tG1UqtNAY2vk",
  "key17": "5kHyjvxMqw97pJFXPeQzm49ZEFxByhRfxhEVjn8aWGTcR9CXrzbGkofxNrV4L1zhKd75pPLe3SiTTbW35LHCRRa",
  "key18": "2DmA217TmL9g5bReEMD4cM4rPpD3VRRncUEpjJDihzTWycLVw6wPf7wHpDp3KTDqhHLQGwtcEYi6NWXpzomfs9tQ",
  "key19": "EnbsDWTcVBChmXdJ89ZBLSanXeb7BhJgqgguLN5Lt7VC4pGS6qS7JrXqEJ3j6rUuUpKPbCUjXCXnk7MZkQprj7i",
  "key20": "2gtDxacpfsp6RfLYZ4JdWBKk81Q5TG4i4KhdAvhXHaA7YsHftKFDmJ7AsGKybeV1L7AVMjpSvJWJfTadgoqUabmr",
  "key21": "5HH8kv6hSzM2zeZhG1PJEo4fgjVeWacujnnT4AXvTS2eePAvBgUNnTQxwPfGdFApDwtntPGUVZGwm6sR1C1KRj9W",
  "key22": "qx9QHDMGwQKVcZmeurwVdL1BPZ3JcaY5qg1WMkcNDnauBJ8RiJJVBz9gMJ5meJJsZD8oSQ2nDzQ4gXNYBgfDWh7",
  "key23": "6wBpEvnsKwLdL3A5LMJ7AxLiirTUwyV9quVoVnAVRW7kapK4vr9nU9kZiWESyuDdo49MDKA8fjHmTUhHkqm5KP8",
  "key24": "64jBFBdHNNLkGKY7AYc4iVTmE4SsxvfCbR8Qws1QzP2oMQFigWJrZi2f1EDYYNxyRx57XKmKGi86R5sYQQAuqb6j",
  "key25": "GaJNYPumQ49UyV3bsp3NaWCLYyGzQXwf4yCVpqhD3BhT8dnpGwi95h7U5EAq5UgmxyC4hZVugVuTDR18LjWm2fw",
  "key26": "5jtfkS4HEnv7QZ6Z1HJVEqpicGh4hUGkymzPz1KM5KRUxMBfLsTBWgxuQKyK7jrpEHkDJGLxC7VWfWv1fQ4jbR7X",
  "key27": "4RAu4cZXig8AdrkS4t3U4ryhvuDVUH58x3wh791QYQdt5RdZc6wbcsE7ZpZ2e2uJvdQhXYbjvgrsqQyFsx9baM6Z",
  "key28": "2Ea1ioeCo88rhib5jS1JhzjSpqZvqbLSJnqYdQYAtsxQwTMX7feqtvh2R9u8PxywjvDGx3M6p3z3vUYkc8EYYvVt",
  "key29": "4b6ANtzFDTsirxVy1pVRxuNTvPiDxyzq5dRotsKMFQ6gfJbeNxouCfZNDS9EG4pUMuNGD1QR25foywbXeQMfw67W",
  "key30": "3vJgBti65uYdpnxjpPkKNrzbHXfBPAdGPJ2TWNvPxy6a6QXKB1GLccHbWe6fd8nXoPfvtZc11rXP42QN7juT9Btz",
  "key31": "4YvMxuWV1hYSxpBhaxJNZWRt9qorerDPWHnXxAgh6zNUqPCKPEjfT8rDva73HG9SgqfgTyMddu61rcUne6fx9MqY",
  "key32": "XFdG7y3rZ2gX5udokeEpqTG36FLamjVbsVd4zbPNz5BryH5Pt3pVHkZi1ecZ1XR3b68aQxHV5zW1Kf8D1irop3c",
  "key33": "5ALYdxSZVzUZVrCd63fqBqzLmaJcZs8ctWBDtYNUqazHHWU3Kp9hvQ2nKtE4zkhEqU4LfYWwZxBVDsJY77qrYEHr",
  "key34": "5B3D7dQaXCU9FvtSWJVUGzh4vbQAN9G4jDZZNHz83qqy4zGwGLzmpUszTk8FcE2AokQZZNPkiYyzCWvCxaYzSkbA",
  "key35": "4oKLJaykvt1YGs48kUW6i5GAPLwDEycpXcLwH7pvxgfuGvs5DJ3eARt87bNejXaakZTXXtwpfU6PjYMvCc3Xyhsn",
  "key36": "5u5q7qUUL39cZ9UX2xcYoQCZpURmDCDbLkkf7iFqUPgfdW83FycmSRdqRBmJNnovpMSBU7VUeXxSf6af1Jm4KCLg",
  "key37": "5uk31Ac8kUMCaHBNrCZtkGnoiC2nzmeaW7BWAA9tKEapKCYnLDVk21yjvZ63mr5XvQn9D3pgUQHK79VjyU6FLmjL",
  "key38": "2PjyPYoCaDBwKPM79pTHaod25WSyYqebYfq7ovRXrTraLuSFsp4iUaSXYVoNJMG2ZfesqVZJ2HBkrvunpiftnxep"
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
