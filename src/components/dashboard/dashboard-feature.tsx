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
    "3aM2sApF4KLL8LMUmwdos8dWx1wCgQJaMKoaShMNaxwrXSNaRQ8apwkWKVkGK1hCNVhZ3mqdz2kwUp7Mv7dx9u5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hYzzpF7EfXEDQkozTiBrCS7tAxsN1oqojRdGUjhQSej2p2dLU95xGCTNZGXodGPjZG2cjkztRT8EdPAhYJP1cff",
  "key1": "4wsoDsNM9cdkaywzDtr214XFji1FKTizLr5wreU8db8MBLdZT9fFedG3cWtH1b4FK2mFwmwcqW2ym8GEqAPAA2CE",
  "key2": "2pnM9FazcPSikdgyJm1QrbXzBqZUS7iggF7pDHytkJ9bcrUhCM9FtktrPqEjhpKEsaqAnkukSiNQdPfp3Fp7iEZF",
  "key3": "5cpMx7LhGDj4MFikWPPxrUrs7oznpjehzRgSyTvXMCYZCGcyx8kHzvFtUvPbGpEKBUyXAmcDbfdsmLjSYzVHh7yv",
  "key4": "5if873DWEXcuz97vtP3TyTKUWZgMYZ1X4v7KM2L1w44paVCJxdUZae4uUH57T6S3hDtvTB6RD3sTZ7NQYFKtYDHn",
  "key5": "4N7f7oroU9MbeTmuGTgtRie2ubUkQvgcgFtJZjesX7zQPuunJP6hjqgjQZB4NMYVyaHHRTJdNekjN4vSLqyahDVe",
  "key6": "41Atd3DhLhtDQ9SGz4K1yvYgBv4Tg53nMonmG8WFSxTv5EKzZFe7D5Ht2dokyqWLRWx5GogPfBXmgeoce6NiJWgh",
  "key7": "38UeuLGGpec2W4PRDZxcgSvqvnF7tGMTKuLAonJbEcqgAHfHXkCgQY97XUJBKjishqP8PGbWNbWoyn8ium46QTys",
  "key8": "2bNnQg12emxwuHa3pU5Ka3YPHS7PmhoGRGm1vJEQa2AVXaszAfyjA1fXtoHC7XmNf77uT7BogvfjQLDK9TLeBhKQ",
  "key9": "2UHCGZ4K4AkZNknheYw8WNvwdG6yE7mBiLSZV6Ntz33kXMydnZ9uBykuRSceBrPXPb1sg1SqRbGtHP93SU6Lj261",
  "key10": "4tDZLVvhMfanZvGpYYQBBb9Wyh75xJLsTpai3jJaPJ93ozz5G5DQiKuk3cRBup2r3GwErYwcW9RiTKTAsqt2QjTc",
  "key11": "4DHZPW3V7KZg4Bje3hNNqmmGE5cKWMqTWG6jP5Xuz143nyatUqTC5Ms8tH8axRV68fM7x4oWMFht8DLvW1n5uhu6",
  "key12": "22J6A68yZ4aNoFgK6uz4rYiHMdA1DsAimPWD7BTroGqutET4uXMhSFiKC7JF7zSi5LRTugSTS7BqF5ZCkyroECnu",
  "key13": "5NKNZFGLZeAzcGsJR95xpkj8wcdKbZtxJguLCNNQtDSqJo5RZSQtm51UFgReo5b97c7xMM2UBta1YUkJFsKwCq1R",
  "key14": "42RUtnprVQRpcM4dNwpBKsRc8ppk6xrr6WbathyncQno3uc1iVXebcc2KVi22nZ84CVU86akL5R8yW1ED4A6UnHq",
  "key15": "2oLGkH5GWS5pZwp3QL6ejYyG3E1BaUmcjminc8KQKLU3Fo3tUNYdT9cfZnKk4hoFLfL22cXCNGMHvHQvE7VMd6Bd",
  "key16": "5Rk13JENAPpUooHw6ECwSxAjv692LygZjna5FQWUm7rH7uEYZ7d92Zp9xJoTwkgZCBvpPcrWdYWfbcbjwG4HoMGX",
  "key17": "ArkFCwEmc5NWRpXjikF9jjJetXvjffYL3AuKuf5ZqU4dsK2XDnbrJoTfcGsTjos7g9Ueo4KZ1nRHNHmveiN7kR1",
  "key18": "3dDvwZdMopyqzm5mPSeFBnnsCfJQJpNa22AGxy8Ueo3SVKxveGQZAERiRL9ZTsLvBGTaZN5zhMVryzophUrRfoP9",
  "key19": "8jYvTteboWyMCnj5GYVMdoLqp1n38o1vSfGuTtJkDu5mZzPSXUzvv88bN7oNd9u1NXSazZVFPLfL88V9iE4UEig",
  "key20": "E6p6dxZtkURe2i1TeUarjRciFb6pA2yGVQXMT6dcZYbSrFkEtsEKi7LGas6Eqg2CEdp8avsGnzq4ee5cW2j9Wz9",
  "key21": "56WFgeVJQiEw6wS3Pue5V7XsJAj7pMZVc3zMBjNqL38XaTYvPDqexoC56jhpYW5BBi5J1K6pGb15eyyJX3dQ8gG3",
  "key22": "3X6bwRinqGji7ZeUh9H6Kwesh952WG921qSsLzu8T9rcyPHZwkTRaNmr5H3GwbQhCQtxqnGi9UwvGkx7qf4U4XWu",
  "key23": "34n1J5EP6RWatyXZ4RcM2wsG3HJaeXXQ3zchEZDBWaajdprdmGQBcWCBKxL3uAD2BsqdKzBRwbkEmu6diG4E52Ff",
  "key24": "4cp8Z6HCTMssWdBLL6DTT3itXLBTTfxWjKqmFt8Y5jm7U7SuL2fj2AokG1wmqGk4ZzhthhmsDsfJVj2aWykPJWQ4",
  "key25": "2LPqxwgMzgpSoAhSsaQSYrpRq2Lb6sP8pk6zn6D7LrXgUN5xJ3tNpHqoXVFvyC2dzUusdEw2mA7JvVFLR7qRr7YF",
  "key26": "EkFZe3vnvjrAUW82cRzhw61a5kzk3XtSPWKJg1B6XRX3wnrUfTfrPk8QJ36QD17Lae2TgNVoKMXF65DZynYT3bY",
  "key27": "4fzWacDdVhntcsKWCrawT4BkQBtwXuaKNmCeMwUjGruns1XqtxuQG4hBihgKmE4R5J9yrzX37NXfRR3XKmjmrxHt",
  "key28": "5rB7LHjDKmNUTCWa88CdZfKhpjV6F4WX7xPLdtzyeEQY95pScRXakmw7FR429ifcoQNWHWrJCTdUzjQMCt2X6cfq",
  "key29": "jdXDHYJYETPmkcGS26DuX4V5bDHVUfHzywU5nCbcXu2UK6CRA53wWyyudn1WsDNj55zwki8HMu8TjD138BtukXz",
  "key30": "2D6DfKajC3iaji8JYUDMaVUVuz4U7TZ1FjUWoaxZoQsHA6APuc7xx92fQvQGyiXZwxQtxNG2pbmdCJZpKWu1EHb2",
  "key31": "5hhHVTYC4VviKnyzcd1Jfa5fXBusJzmVsTYHdMLJWUYHpHBJyV8gfhJic4NE8fMa8pEw1UgJN3Ex4Wn8oqUamtjV",
  "key32": "3yKRnGeDCb2Yuxa4155SYTDYqoA6ceorA7LM7atzaC2L5SFX2rs5yxTQu3gLdLgRqkVMtpXeSJdnMtGESg4V96RP",
  "key33": "4Vre4uVsYdd5bYQmeUzoHzi4tw7nWcjwQQ6xoU65b8qXBSqSFc3f3HuaroaVHiKauhcGps6LLZfT399Dh2Sm33WE",
  "key34": "2oe6RtYJt9D6c98H8agW9oHfk5RSwAf5aGAbqurnPufxQZMQ2STme5GCQgekftfcmfXcnYUpfDsoZYAoxTy8BUAp",
  "key35": "GjAVnTuy767VUfAMzMowfUxiK4AQxiYo2dUNUWkn3kWF7jT5JtmXYbrtVE5LpB9dBhDrHnNZtaghXSJonCw2zxQ",
  "key36": "61sRuv2Sx9P2SE5UeN1Vj15tLUBFzZAebu9ehSLvhPjLvQfY8J46maASygF2C3WkkpUDGS6bUsMZR288tpkX4rdS",
  "key37": "4tyWMr54yaTnDvUW2Qq5MmPWo8eRUFyvAEU2UKVgp9XzXu46G45W1FPpVNmeoZmREBJz5aJJ3YVmq5XQQSjJjUZm",
  "key38": "zmNjSNbgEjgnF1jXvzCPgRtTmnTr2g6z5Qh5eAEVBqX6ZHVQdeQEyTwAXRs1bnTMpo5xAtvMX7nH7wjGMhY8VhY",
  "key39": "4tMtntCRsJZ8XxSdjUAPJj6wiT693Xo4XyS3BvfkdvsBfUHVuUda4VJtoNq5nMop3HWxMk7qWZ8NbyxoddY26Za",
  "key40": "4oWaepdEAJmsYvAPGiGv52pMEjMQ8nXPogiq9sUTvFECnWJFFtydW5q7QTSusSiZQrAiyU8Rys92cLmeuzvw4gUP",
  "key41": "b61SRui6reU2pZ789KkDHGisyRLT4Fd5hsuN5TcFMLLyPS7VufZV6YsTALVy9sCBvXsAGNqhpDan5NPLmZgMCib",
  "key42": "3w5nKP3EZJAazsmhTYZf8Anva2gnWwmpmn8A7eTuNm7HWFDHW2ufYcJ9EXLv4qJ1AL4eM9GEizRcNDxUm9rUqdiC",
  "key43": "W1H88XfeEoa6qWx68ERLV9tJ6b6CoRnUtrSYmX9kt3C9iKggxoEdQweahgqc1YrarJE2vatJAeDS7pkinFbRMGw",
  "key44": "5vvCgUqJoqiR57De3zpYNws4C8QMmnUwWukkNwe6pXBY44pGFyVbjyDVDngHsjtjkW8Wf8qe3uuwv5yjAxwZGcUJ",
  "key45": "2F1nyYVrKpajRffq9nvfXSF5n8RG3DDYZmRYLrnofx6wJhdthRpGtFZJgi7gFVKsMZby8sCh3xFk3DojarvLajnR",
  "key46": "4gtCAFWq2fbSJ8FKXFoVzFsVcuz6RTfms9nrnHEdVs8KycucAHFLUCuunLFTzB7y2UNp3wpMFCPKLp8qPXUPtSpF",
  "key47": "3mRqf2NhdhKRtejSaZJ1GJy2FGjhCjtGHWBVFJfx88kzA6sDVBGJh6MUr32a22wPXM3AQtN5RvUPC1poAVbMTkNP",
  "key48": "2ou6Bnc97szX4PGr71xFNPF1x4usJDrEmxKvGMLiQoBcbWBdW1GKkp2T3EpuotdnAgPpUGGT1ajRSL6kiZcV7beE"
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
