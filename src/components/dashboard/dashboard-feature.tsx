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
    "4eBttH2S7QAFyUBEvpUWJoXNqr8XfZbkfJKPneh3Q8M1CJo54Z5qAdLVcDnDJPSCgB1UmsjAGbmxDkjZaXP8LpxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CfzEhL8XxF9FHSvhJ9RWXoqZU73cS6MpY83D9qPdUu5LSUBj8YDytYi53eyxZhVi8yV9ty6hAhKZQYuZfYGsGjr",
  "key1": "4a1TmC6qcHAZvU9ZSqTSxK9Rpp5qJdp247yHsHrM3N3ZXthJzuD5G3ZLfcR6EyzNKWy2J8h2NBmdeRUB1LEGLkYq",
  "key2": "3QKMnGyY3SRgQttk9rN6VKAFa7g6rePS7rXNgzBXmpSPfTsAchBnjt43EvHwzGV9LcsntkhT7mLfu1duHhkaSyz7",
  "key3": "8j9XJaowdfubV4McxkK2sm6tFCP15XFCsUXPm6YN9AFuXgmqbZJAJpWYSqGDAPkjFaVCtyAfQATjCz7pR975RXP",
  "key4": "2vMmnowsXW5tftLvuEpkH3QqbrbP6TUWpyVhHgiXysLmJ4KWXchkQLCjJGe5rPJd4AF7HLR9z2s368pFUruom55Z",
  "key5": "2Qnh15Ksx26JbTEQNLQmMsKrCztoUnHfHDLYUZuZxgwbGTts6y51xZnMtitiCJ8o4Mx7aej1myfTqBgLTgosx86z",
  "key6": "25YvqsCmoCqs9EoTQREeXGuzXDBT5KP4V4c9JTneZmnVzaawCB4R9tvxz5epxYhw7pWgU3xf2vjEeE63NLQpdw3X",
  "key7": "5z4P9cTK1tH9pkzRNxHVuM95EaZQTG7CyxyadbCEmjANh7Ypxm9tUjQy2Pr2dpsQxympHfbGQKGs8HppzkBwHWN4",
  "key8": "38YviMptfGUNVpgNpkcQomGtCVQXMpCtF5xCy9sPdwdzbM7dUmh3tEByAtztzdEN6PKVFCuTCsnZ8kRQpYikBJ1E",
  "key9": "mSenCQYtir8ZCVow5vSMVnhrKhwBPYe26qXKt5ngybt3LQBQU11YS5SycSNsGYhLNpXLKefyz6q5D9Lrp3ge9hX",
  "key10": "3g8XsgfzFDfYdpFhHg2Lbirv32Xxes2P4mSjnDdFgTQevHEqxNs5y3p3uheAiSGC2CxGxJha7gKTUTuUueoKtV9P",
  "key11": "mvCeXQ4EKDbGQnXoBCbGPqndtsg8bEpdtvf7knxpDhNyHYdaqNqt2H7HdDbBpG4pwnXQrE9fZnH5kr4vadZaFoq",
  "key12": "kktBsiDcCgN5nxTvgtTkYHeAgP3mHpy3aVY2u3dK9HVmVUwErYqPV2aQ2jzNUVvW4PHyF5deGcEU9EygCwtz7Ry",
  "key13": "4gt4KTn72uytFRawwFBsPxEg8HYhzzt8qhZhwzNVDG3YuzPjCfkVFUWzgb88VoNxYjTQwCZ2puQNAnadv5JQLPEv",
  "key14": "2uRZAK1KnF4WwJyyBkFxVDVR9cV7rdubuJgfQJcGjoei2GujjnYuqKGqjekvvk6BM2bxY3LraqNAFrZCcpZfGqPh",
  "key15": "5dyzG1EqDyefsm6B5WCNmN99NWuhVN5ejecPH7YRx3tE8F5gouBYiwiHiJPQiLGFVN4ykGKJ5kiGcq5d3anwUrff",
  "key16": "3TxzMRDtzg45XLiu14reWFydHfCPgsDvdruB53No7XB12Rn1mBn18WJNXjyqtcsLuoknnvtTWacBcx11boTtXvbQ",
  "key17": "BsEM2Ytg5B9S3h3PHXCypZD8921rKNMeQW31Z4T6TJx9EhCDSJYSUh6L2xfLgUYk4uDVDbaAU4GyQmnwEchWudw",
  "key18": "5ySCbZUdi5uSCsmYYAjqRMz7CJnv4zrXoyAMCtfeaE3EbKAcisvLSikkPZpcSrwa6m7FRJi1LKoTVsVS9QBsmrBv",
  "key19": "58Rj26p8MG7aye2tEiWEQsRc41yxdBB8sFFCA73STc7mFKpx8RMyo1ryiimPC8DQGfTA9kZaqKcQoh1KQHzTcXD2",
  "key20": "2kTTEzXNqNTAw3C7Yr7UPbwtr1D3sd1rombxh4D4py3qnDTYGnXYW2dEFKBASxQkqXNHVnUMto6avdsLz8QHGTqf",
  "key21": "2Azv7jJCZgbVY6WoSW5yWmrrYo8XzWXNY3vP51wxZZYu5x3y4jHwMfaeZijrHan51L9z1Y6mkCmj1zm7oE8zD7eC",
  "key22": "58FbHYrDkA9dFk52hA7tZbCZyEV63VKyo1QwL6ap4EWPpL728UmqW3FSExC3j1VoxUctiLhXFLNWc1DzqoSLgE1g",
  "key23": "4EUoM3oPNRg33z7GsmjSHqLKT3bBnh3zTxSQQ1B7f592pUqvHKWzbg7Ayk9ihtEBgjp6GAWWHP9Xuv6qqLNpKifH",
  "key24": "314pJibyjyv2qw8NxDzvfC1MVYE4iXJsGRpCy72cU4eFtvz5Fjt8xFJ7iQT84Jgm3j82ECdttGy7WG7jc8ShMWHT",
  "key25": "49Y3yw2EHz15yHQug2okXBHz6tF2ttgD8zASP98LumHAr4MJRYGJury91DA7i8V7ChYWrviqhn2bxUTigCqM8oeM",
  "key26": "HdCjMRDy8TrAwRxSdcqpTWbfD2VVaBzW6iZVveNWy3pacjRWLavf8PdGgWy1zoJR81yv8G42LiKJBCiC9gtywAt",
  "key27": "3Wu1dHagfokSZ8q8Yfxgi2XLEeACWsLkanAVe6ZaGWDEV1ZocjJQrTjQf5FDXB6HFW7XTb3JpwSr9kywtktcgLae",
  "key28": "3Sn2hwcNT663LRc1gh68ZC8E46hfPkBVngmcUr67WSCKmwwDNHTnwWzyWC8c5jBFjNiKN7SYTZzRUwq7b8ThzDey",
  "key29": "32TeUyJTVJF5K5Ua8CxbCVtLBf8tBq2rwouRyssZZuePggvnv3SApzEzpzYvHBrMdMPByHmzJhRg67vvrTA7b54Q",
  "key30": "5EqkyrBCT9dJNtGRojMT7Z8Nd3kQooireuG9AD5DjcyJP1bQAXtcLm5vf5y788uXRweZt5tgpofva1roHTaxQAFV",
  "key31": "2ycR3qD8x1ujAqdqF1veeEWAsTBYmBLyhH2E5yJ9ykXJG5fei8XFjmArG9nu5pPcycXU65CTLCWMv8ujJP1gBT3C",
  "key32": "xNAK6NQB9GKddyZT5PiQJ9HyCt8UPLNYnZxbLiEFJu83MtJwkY1w3k5NUmUcrH7sXsBnNHZQBScXFCU3j9y6BkT",
  "key33": "eSqLS1ovQnKJeFnoz3arFLvb64JJSCd5gxh3v4hGnwLhB7PJptjBjzeCzs77XZnsuwKUMKRmV2wPyhJFxirX1wt",
  "key34": "3ZLhaviJDZTxLNN6vyqLg2TzrRVRizy3Nc8zXunFVHHULobNDUj1z2TwdwRPMjv9bgjxxZAFxC5VPcVTJGAUXJQv",
  "key35": "4A66W3WQ3Dfs5NseNLm5keZAffXyX2axK5K3n9rgJRdDbmVWtorXmwafdmw3P3gS748362c2XcXPBj1uehvtoTaW",
  "key36": "3o5VMuNtZ2KtrZWEv3r7xSGtpNyNvDKqj3LidLqv35WK1VnEb2A2nH1B9TNFGkcBc2hYr25QHyexXumcZW75yTGk",
  "key37": "5s9AeLFFpRmTJiay9fpW7rfdwqMA3oKJPYoHD244bKMTErkmnmBSJwrksnsAf8dpueyECeJ6UBTK6SPHehA5zZdj",
  "key38": "5S56SnfhdEsq1ncu59S3DNFxkcW8G7FomKNA5dAJJECTfhBtUwAf3aUsUfGpKcquimAQ2pzYsdmr7gMimNDt8Lqh",
  "key39": "59xsYd8Uqb4W8BWij5sJycn5TCBezQwiJaG62SusF2zSEU7e1DsgkCMJxmdDFfSNGE6JiWgRq6NeLy7foUrnmcMg"
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
