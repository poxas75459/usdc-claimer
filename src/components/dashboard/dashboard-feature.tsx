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
    "2v8aZrbGutkiupia8dimzpGgARAFmzaMRESWs4MV9wEG1mXo5LgTQtgfSojzYFa8hAgohmKRXygmy429DoxASRUt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mj7CRjmxmSUT4MkhsfmFoCUrXdsPubNTcFngWVXpP7ubmrRcPvyY1VRnhFFsTR48LuDPePMmMhcasoaVc9zg7Sb",
  "key1": "3VaSf98cCGtXZGH4ccVfN3HEHPVz93mLcDdrWMcBdXz8f24wioSdgiC1WuyvVsnHrL8qNvGA6pXQJPg1n2jK1iT2",
  "key2": "5MaF5G35jR8onSdyJW9ZWUHu4Z1yJkzfNq73KtNrV9LPs5LrKVahLXPEFvGuvmJJ3WEEsLjogo5Hvo9TTunfzLqQ",
  "key3": "2tT2hk8dVa56t2UYEN23iXrcvQpSV3oY49xG1bcQmeh5F5SQ3Q71uqbwpQt7Q8erasvJNG91VGXou9otQvMAf2Nw",
  "key4": "2D4WiPcvvCm5M7Cjgt7iTNuR4QywHdeZX336cfRBYg86sBTXrXF7adeEGoQ9GVuRKTFFKyWs3WUtJq5yACY1XLv3",
  "key5": "5FwACSUMqH1d8c95kKNTQjFA42Y7coUP6Ri5zsHeSgD18vpF6aXwbVzvkmSGMPKgzztigr8gPnUtdjok6fLNRBA2",
  "key6": "5xfDpDRZPxS1jSXU92pb4K8CrLZPL4oZo2gp5uc3zrAnkQJPbHQ1hfMgwxa2GrSWN1jbecfTchvZeNM9kwXbAvgB",
  "key7": "5x2afg5XJfPrmrQJ8WW8LwHMpHXdq1y9BGiXnzG1oBPqBQPEULZTBXRTaocAcPRoLLaS99x7PCoXccNZVwgbvVLL",
  "key8": "5hKwEK3X3Qj8TgDbsRz9YirEqhJ27ugUyZiwAHBFDSrWVFedd9i4xU87ExYkj6QZieu8DZdYVEnwzdtP8gfGfcKU",
  "key9": "2S4TK34ZVpPkmD8wrRGS6kbq885D7RVBdCcUWrbGuvZBMCTv9kyus1wrDCfeA81naThTThmnSsJhNbM39CPEvYxB",
  "key10": "5ZoZsKLGVDQZLS5ZnDweEwNYv4mxVeE39jVpkq2cwK2jAkzb31pcWbYRxvfptJ85ev4DqX6rPGJxb1HbALUXkZii",
  "key11": "3KvsD728MtTNDmAZRykihaKDkTQ2RfnYBrmwCsvJ7vrvdubFDqyXfECT2E8CfQEQuuDHBVRF7hixHwNcdPT2ows3",
  "key12": "2GSCJ6L8DVF8Kic1EWDfXdzcmHYpPQsq9A3Vj9biztkuppFXReXkvof7MvkJoT1PXjjxNmYknSeLrhF9Svtv6fwr",
  "key13": "5iLsguUSuw65UYgbuwBXV1vZwXP6KorbQBedr8BcGw3Rk7GkdqmkPRNWqgM9DbPC1BkKo829Ejt35RgxiggTZ7Kj",
  "key14": "e7vQYw3S5rzxpTM6kNMu85Cg51U6XGSDYsKC5Vu8XsLQAfXGxxfSD9YfHZiGtCSuMi8vDK9eBjQb2NiLmbXmQ5c",
  "key15": "3pq727DBsBzAr2jqsR4DH63UVbrdexyyMkLRFi52gpN7a9MWwtkbXKziPbALSnrpBCLmypCY8xXTEtUgoGc9t28a",
  "key16": "27MoR3VVyFe1cjVqtso3hM6CEKzEoyRRCvNqE5nH8HpbQuFfrk3BJ1cRBSVtK4hTHxHJXjQNNtSfjqeLqsEs5cdz",
  "key17": "53MGThS2o2s4UPQBEP8WJGiUXedxbL9MFookabiXpuUWCSZ7ecorzY6vmYN46xDazkpbe5Y91EgRUqTTgAXzm1UG",
  "key18": "54hMD5cq7HgemYDVKus7RPunT4WHzaXfA2khae8PzE3DEmBAW3VfMLsTYqxLQzhzRs7pXhKa7qjkBLxzBsDzfbMf",
  "key19": "4hYdhML9Ghuufh7eFar8N6MGf1onm946ZRj9H8cy4KbHWueMn9zaS5vas5kSSmvdZ2xHLgZTD5NBMMHWTEK5Adu8",
  "key20": "43X2L4RH9xzdZC4iJCmyidMVWS4xfqSkyjBR7r3ynRCysUQSx8b6MYXftUCCiXLBF8LbFpBUZSE6tUApYqoMmPJU",
  "key21": "2rTVi5ZNVtv31gmSEWPms8YpeEHaKShDpLtxDfw6i87Kvos6dCLtCyMbUzCjSfNbwkkoaBu8CjcLtcFB313bNew5",
  "key22": "3HssgDdMWJyQXMZUsu1E13pbwM5RQewHYswDYAMFF3MEiMEuVLuYZi215XU69MxPhaRupgqo9jRJUA6ygQvzEmvk",
  "key23": "DL7PmiB9ZJ5PenDTyaiUdEd3BJHJGKLH4aRSZU9oi91xucKqNh3FEnwqWLnKgYKk3pBQU3aSQL81mHckv47Swg3",
  "key24": "3DMUYTDSdoEcv7TByT7Vj6NFUHQw7pAe2JNd6sfjFMDkBKFTYaR1ccwMojTmNJzWTyqRPvKfanTyPNKzmkjJWnm1",
  "key25": "3fuBDPXzpbAMXvMnUD1xbip2LrPL2kmK1pKNzeQRnfvHV1K9MawPv38fmWdhCzgwwMiZkeQb4E6vfWjcCrtPzTgH",
  "key26": "3fNV1KhY2A6RRboKGV71PkGHjtjhjE5hxVMPKbZLjkzGdGydisV6R7MJjc1E3qZHUCVQ6mXU1Pi8ahcPvjaG38LZ",
  "key27": "PZ7Ns9guuJrHSbpCQd2HNNDeGmiF4GGtv16LBXQs77eYZv96iySbN4wmHfPJGE3y2d1guqsfvFrpYbWWpyhA6Ft",
  "key28": "2rB8BteTVzBYRQ6AAVG24Ai6YDEKG1sxAx7QibxZcDycddX5MgB44JQYRFRdzJdS5MuJTdVmq3LZ5YCx7ghDS9LT",
  "key29": "3xVUDeALXq7BotCd3a62J4zZ4qiRg9diBdew59AsAU7uBoU6CwUWUVuZLJaVGuvrp8exmQ9tPzFzjNGi56yTHNNK",
  "key30": "3mtvS7YGhXMUPq9fC52LJxkPeTPBQZqfhTtexqmfPJLsLLMznLgK5JSjCTfARnhr85xGQauuc7FeU3v98W76ZfWo",
  "key31": "4FwbLsBHVEQKVBMikfxV32jTaFdBhpKxQoXPFkvEfMutvHGxVhzRvnT24yWtyH5WWioqQXR2t3NqnPfTtR6b9Pej",
  "key32": "4dr62Bh6qVgHuJjwY1sr9xqPwfyquTZyYLUmoTnKYzADqwhq8jbUM3pYYr44ZDnYZPmF6YWV31qLG422pcCoDYTZ",
  "key33": "26unrFS1G5axvTjvdea4kCkBCavxqRFndknhbXKpEer6fUpuujDP4FpvmxustVbXdogSyertUTR2TXz1AKmizndg",
  "key34": "4PZRsPjX1WJdNKKG7LVtp1NdvGxwnTvyW1CuDEsPYPGoamfZmYq9kXDgRBVkA2dm8yZnkNMRVLhMQuiewo6VAb3B",
  "key35": "2Cu9Pt5V3gDuDRxRmJm2ZoR26QCg44KoF1zjHRdzzAFh49AVEtLzMQfmK4JibFcUqwD1yism65SayRyLcsMQpVEU",
  "key36": "4MZW8hEHUuPx8U5QTvmKLGetSt4vgZGJfySiGQFHU1XY33b91hLkJtTMu3Toi5dYwPbRstjdUJ3tJ1XtNGcFnwLd",
  "key37": "3Aq9VsYojz2L8ZwfBNGLCcXreQfjUfJoum8vpBeRqzNmTmDEJMTRfLokfFgBgq9bu45fedYBG5Ff1ZJiBcUFj7gG",
  "key38": "hoCNBjocsjvH9jqyqBWyP2FPCqkWHMP5q9rQ4PKwFchRKKYbD6bqAKaZ5wbBZCmnA9b15LtC7M7Ptx7FLU6fKDG",
  "key39": "2dcsicoH4NGBKJbAvrhxZ695fWc4uqdr1xt1cDU4AaD1xAC1XTBESJo1VcZN9vvxbemwM8UDDFTQ4NZUumwZuiNK",
  "key40": "53yL2PtH7U4AFJvSUfQVCK28Zo2sSrBprAViBwYpy4aPLmSPXgfWEeMQV8iSNYzr7ZDqUxdsteg2MKEhHQk3bsEb",
  "key41": "2kF9SRSkP96Qv9yA2nMrEcRHhhN1xDhkUmhUACnqUtsNcdEdc9sPpqm3rvN7SeeRgijwcHpC6CCkSVi15TPaff1e",
  "key42": "5FqGNkvy3aaCNJuodsmPn2GEv5yetrwh4pUYMaNH7A6jKzUqEc94YBDZXvDYB6XRe6hboY1RZpkqqTsBeRWs43HE",
  "key43": "5xPUzLPsFentHteX9498J1iaj3BYrMgPZoGYRz1stvg88Cb79yDHYozWgoQVZ25HPCRf8xsqyUDFSffsmMFDKpKK",
  "key44": "42kSvH3AUSvnLBDkK6A9VDR7JGdxBBJDE5vNQsNPwifwkcv6QH3Sk9bxnsYKzc7EFvpda6uxFyXyCYSziXeWy5Uv",
  "key45": "5THfCpj55JPAoCahMTGFAmScXrJBHWBGmTsSYFEjL79u9ZsBF9meShsPLWBj9HmtC3UL2asTBTeq18cwdaSMKarJ",
  "key46": "31VqwgK8MpNMBaBQuz7oL7ygpd3AUayir8XNWYgEE6GpaoErC8x9eT2qZmXGn6AVFwVdLicUDCaTv7ipceKZtXni",
  "key47": "5r8o24kcKD7crU7C65UBiWGfQ62aZ93PZwkhgajjCJj28UV2PquVgrbhPSMN9ddFmyT9rzuaat7UzP5z7i63btGk",
  "key48": "5FsPSAhHW1CVmk28eYuocuy2zRpECuUZE6ZJSEMwSxUtM7H9XXMmYCcX3bvsW3fPkoCP1vCLjr6XnRFQQ2AH2d6n"
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
