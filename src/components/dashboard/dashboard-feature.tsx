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
    "4Cc2omMcwizn4QEGCR8ekRGpgzxuQmWbQkyFMbpw1uDbUsya7KtAi2ponFJpJrp8auyCX8MTMVdLf8uSpxvxZrsi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xh8Wu7ip1DeHEz2uotPu5HAvHaXmPb9n3U3BosSW2fGhPPLWvVxPZH6D3pLdSGqjx8KCKDyecTEixSdAZeEkfs9",
  "key1": "4zZGBgtrYwEb9jqJoGG2ZNED93BujFoizmcog9dSW5VmN276Nerw4VeYwmqPbWENjdu4MUyZN4b4zhUCCsh41H7y",
  "key2": "EPpSanYApbvgSh2Dd9iRjcxyApDo1W7bsepFCjn7gp8NQJDpuCY9uTAW6DNYDAZQqJDysFdZKdxVwDX9Ws1nj24",
  "key3": "3sofuURAFHqrsvYr9zCSVzjRkFhNSusUa2At6r7yR6LbHicunTzhY9XyzwLcwtDvzMyQWMJb1DYsY1eNRfvtJSJE",
  "key4": "j7SaLCgtG3G9mN4cD59Zt8RqaGx7sC7PcPZGYH8oDCjsJpUMvDXJdmbz6sY3BMMoRMG9FRg1Y3Bt68Z6hKKjZfv",
  "key5": "3smGWXRKkTYEmFPiMS1en1GtapFE2moKvuia2t1BAvnt5Hto67ms9RXdUZgURBDoGjjiqLX4hemhhThFZhVWoVH1",
  "key6": "34bsU5uyemy5zFDf7WrjQNSi3ETttFMXX6AXmCGVudF8GftJ94HQdAhkcQaUNR11pUCqRs9qr3nCYoMPiqB5fLss",
  "key7": "2Ag5Ln9ssBJK7ehtZ77P7rBiDNRk7PHngi7dyDSZMHe1nNe7kpa446e241jjhoGH4baia4pi6zQyessgjxrWhWsf",
  "key8": "4tJqDJr7YGkw97xKAguVh2RVem5fcFgtiegaKknUE5DPsGuaHNVqR5hULCfk7tmDqiiyUVbwZseNAhFa9pxHTzTA",
  "key9": "3DGyUWVx99jWxFW2CwpSE5oh6uEQroC7MvMv1j2gMVqXJnE4KHyPZKS1c2QJ9P4WAywMFkpEvKp1uV5chSGiFDLx",
  "key10": "5tX3JxA2g6tpTSGeyCP5gCkeheygV5JuBFnCs73rdDZGD65nyrMKoNK9bdib6GM4qdAi3Kd9RhBza8K5iSJTVs4g",
  "key11": "3527GRUqs5h1VwQQbjzPRsTFFg4FqGPgcCi1xpPXz8pEZCzwDSVAoJaziFgX523mCEcoQx3RzyoNRp4wxRWEjiwM",
  "key12": "3RqrABEnJbHquqGpxPbh2XbDv7HtoYXktYwyCsJp7iH4LiPGMDHZaJpQUKPoqbqZ4Z71ELPRooYYRSVtwpZWmFNC",
  "key13": "5eC9BL9MmY4b5gFkjCdb1Kg7JFkdZUFTyDuk67QTd9G2um2R6qEtB71M4ZsgwGdnGg2qreW39bTPJLLvq5SG5HCj",
  "key14": "5GU4WT9FK96kHoBAbHpQaTedJWbrZXRwcmK6KekSEcmJDviKvY7qTVH5REkgyGEVVozxHk88NYP51FVzQHTmmTzQ",
  "key15": "kAkFQQtLUA9rsy1p3SBxm9dfM7R7GGvKBXNmfQxVYfeazs4BhcX2Z7zUFfHwMoRFtDHEisufxhDKkkcnFXa4sUa",
  "key16": "5G7aqUvNubFwgy13aAK8a3Y3y7JSWtoMXNxcUS3WEzYpRRyYmjitVpDdLow1BvQXASWLAzp9LZRxPvagVAyCJuAV",
  "key17": "3hrU6B4s2vqCuBZ4ADHQAh3igrv8bwe946SaPVSfx6BB9rVocubKtTPevnHc6uVUTqWCCDmViUfN8fuvMqSZiusq",
  "key18": "2H7qex1HfbXn5q3dZ9tEe7aSch2qD5idrtPGk9xdCQ8ufjPb6F4Ac17ymhZhPhesEtxzvSCb4wkbVq6VnsdG7Wkr",
  "key19": "3N39pgNnGGe3TVPzpyLnLRgQn1XX58bTky8UcBMERwBBkSPqWssuk31JeZsX5FpiQ3Fbmc6YykyfEsc6Mx5miura",
  "key20": "4uDMsMPAB8HhLPPHdFGYtQmf1pvPJCJnDRFoS7aCPqbnZBhh9c2eWtQ9dHEDTCGjKzkpBxyvxYvTaPUezxFL9BhW",
  "key21": "5rKwq6z5y4X3r6S3izdYxwUgBVRLn3Fe6PTHFciFQacbpDnpA3eimGvscYxTzHgUFVrMgm9LBMFRBVb6wYm8fR9v",
  "key22": "65ZfcEWQrohkN8bVvqMqzikwEiXE9NgnFkkRwBoq9Xk7aJBpMrTejwAEdGRqCpdihgFGDfx7vmQvoAstJH7VtBYC",
  "key23": "3obn2dCubFB7gLVgpjFhjHZLoiFhyJ2EmoymX9wsoUtKqZ4kRxgM32epUX3MCuxaWuvSDJT9jmnuKLajo9NbcxE8",
  "key24": "H8JzDorA8BYpWSFDCpyQMbKyNuHY13mkvvHJgqgWKw5nEZu1tCiALPkM8s8Zd7w9gWGaG8HYRni1zvSDAUH176h",
  "key25": "3gLs6aUZLKpnmV8SbqZpxNfMm8SdG7rHcviAZkYzrhVqg6oVSLB2WPLBj1DGgruTwoWYADgqdMgajtikFhrLP8uM",
  "key26": "27xHY2J5zuNUZSfDmXct4Ni6eQ1McZ5FUqC1LeaWexQk6tKzxbWvDn75oWD33vFWHUANGSy2PVHTZTh69fwnZVCu",
  "key27": "4PBDmfB6t2ooC21wrY3ax7ikvprbD9fh8mapwQoTeFfu6fZzx8Mx995qu8TcT3pvGDav4X43emJuppYeUVQjERqT",
  "key28": "LG9m2kqN5hMvBSpV7oaxVWo3bjS8UqSQfee1B176EgEFNnGDnqAa4FusyWKL6enDzbU5mnhBdk2Uo2rJbGYw9NL",
  "key29": "4abXePXpAjiCtAwPA8Eq9Bi8viscJCzuoUpAQ1b8sFZiyFMK7UGrEGTfprP1ATrufDVYjxnGmnrfZtrS8KmW7Tct",
  "key30": "3hPX7oT9vyFFMLHWH7dEo4fB4Wyz3SKbj6FkxJycbPqZhUDNqTnU767XqWqcdzCBX9sg4ffpsLHLQXzDAwtMo7x5",
  "key31": "3tAAnibsJ5PxNQL2vqWCjQJhii7FadRGFQjyBQbQcLyp4Ncnbe9FVyui8rjt6u4jv55xnNLinqVmWqSbf6Y79jzq",
  "key32": "3aLraxNQCYU7WmFB9e2JeWzQzp4QcUCYPRPt9FLkn39Yb8TXEKR3kDBjyU12mXGP336nnC6mpr21vojUnpG5pAeM",
  "key33": "4sJrxu6jrpZUj54ahmE5ppcWxYd5r6wNiWDJQZaccegTsEV7UEp9pbnVYUudsN2rTuo95ow8B9TQzhndCwRXCAtt",
  "key34": "aN2bxkeyYHihnx4tV1ADQnNFp14T6EGY3pMN2b923QnAa8i7YE6Sj1QUbmJx9sgx9uCzMbPZwezF5DM1Gdp9Dad",
  "key35": "Wmg53RDg3UNcoRC2G3xZSMjho3PEMY8ocurP4BjQsBWCvitCY28ow4YHaooyYBVk8CuurowwcPd5BHUCjMCc81d",
  "key36": "5rb6TKHNDqR432GWqXz5sxKcnVwLeaXC1kHYfE2Q6PhF2V6Vopa795hrjLhrzQv6qLeSt5QG7CXggcBTRmiwwCU8",
  "key37": "7qCLXw7mkfHwrpCntzi6sEvetPMJcdeZsmavryw6ddLej157FHAFxC1Q8LQEzD2EstNqkEqqSUCNdS9xhmEuXsz",
  "key38": "3kkF1y1kvy3LfpHnafddShjh5xYmFNEE1o8tPGF9716iSi49E7RnMKSTBz8Ew3Se5mH1Umk9bVLkaEr9jDk2xRcB",
  "key39": "5Fotb9bUokQudGeKULdo8BCJdbtiYohYXCn2r99dH1ymdFot6fGpmae7Guk6UtVvJDiFXfCRU3NyMKPvNSXW7T7U",
  "key40": "4hzwT2XdU9NgAxCCKPdhNHroqnabDAKypu92y5BWZv7wSkqVY76Kz6545VfBAQUacz3CnhMxJ2CurTMbbm57qXuX",
  "key41": "EyU1ztQFV8ziPZqKMHAEvGSgErbHG229tP52ba4kbuK4EciAUX7rdhxk7XHLBjsmNPAM1YMdk5ARC2jDfSqLRLR",
  "key42": "3R45XHo3pPr38AsaiLaW4ZvihyFmaDpvUvGvNH9fWGEQKo3oa9HLT51wyDMHLupmN5vBPo1UaGQKaT8y4NGi1tMi",
  "key43": "4EWeoSAZx9JdbJiv6gUM5Na2TynGRSNr11vNzHzh9skVW95Xkwp9xHbxJ2ugHSuXCb64S213hmbjLzapzQ2GPESR"
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
