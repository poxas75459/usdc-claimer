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
    "27M6YqJyUZcyuZsFxLfNLmZmPeVZvsDqAgXn1x5Cvr7VboGv4csv3kixW4ZgNPtq9Ph2GB6baWoScao1qGRiDpKD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43kAwEB7MDqyp8ceHj9qNjxCbs9fpHWFf4KG7d9TUnSFExfS9sp3EdshKEscej6RD4hS5djVnBC95FrgRmmkAeXg",
  "key1": "5PCkoJHXQFKWpihVErc3BeUVE5zLPvdbND7jeSeKX9Nz4mmxJXiEpDmerCUyW87VSi12PvrBWs4S4Rhc4dJgaxvU",
  "key2": "qVjVV3mJYDYpcmSdKapX6Rzxk2x3jCXwSaByrhxjfdL2bYZSTsvPer7uFXvVKHSn4pnFA4zMLHRj5LhjfdYwGzd",
  "key3": "3eUeHRYvGvqiA4BuxtN4BdCXnHEAXn8WZwUnEdMqcYT75hyUin2dMM4Pbu6XVopmnTwKFh1eRSjDEUV7mpCg63mH",
  "key4": "4Cae7xPMQpCd8m6U1zy4MeJR9YGRDVwEw7RAjMnn31Caa8mYPuuzMR945GpfCKgpCgHmHrzQ9SBGmuiuvdpsnRt3",
  "key5": "5iCU86bPGqhzyKZYtUoZP5mS3wVk9ymaVomb3nt3MVGMp4PaCGRd13q8ZnWebboegiqWMt2zaHM2XsU2bTteSpPS",
  "key6": "2YNhk45WoSEEEPUatS8dMhZMMgdBuiBp1fRGU8X9iZY7JS5k4HBBVbmF4KAWJ4wrqZjt8JdCot2VnP2JHkc9bN14",
  "key7": "3AC9yFsAiQxS8npnLHNtcwJDMm6azTwnjxzvh97x6Dhd2yQpcJmgnUc9ZFkP3NnA6TNBzJWETQV5x7Xw4BzmHD3j",
  "key8": "3Q5uhWKs4R7sybfpb5XkeEqzvjnjqEDMKihqyXpFT1PDXjFJ5EQLWkqs6ddBirWc6QeHWjXM62YMZaQQ23Fa93i",
  "key9": "5A1MJiVQpQEAApj2CUBWKgrpVL1Vp8qeVfBoykok6vYDBwSb67WhbWuqfsVYTRamHeVxJR35PWfYN8QKEBFWuG3X",
  "key10": "4dkxaDbQ5xwhZsZoN93ibFDYXstQYo3dP8PcJjaU8A8XJeyFdJaB4kgpRdK1r3TL9XRMqc74UhGYmK1TQsir2R3B",
  "key11": "AgbcSrHqzg9ftZ5VYYPdTBweH6dp1UJ4HWhgHciQoccCoJKGyU4u8w7raJmyH3SAUocbqokCAGccSQwBaBXs6cC",
  "key12": "4oFdmQaHHtAERPWrWLjJW5781pjJA2ShTsuLLHJLTQXz9mJuNxiEVRPawvqaGAhpofKmug2UB2UqP8o4t4hAwraM",
  "key13": "3MrEBJdU6xBRNUEMv54YaLZXFoKbhR7ktsPqTiJbVWSJMBgYxL3YrhBoTfk9RHTNCD4T1T9DUWjdb4MCMzuQ5Nnp",
  "key14": "4XbKzMawKWHgf3Px8vMvnvrSRVoxFbZaF63fd44xfxEbZdJqRSkg93wtDsqZWZ5idNVdTYNv4RfHcdwCgc24qpEG",
  "key15": "3pBe6a5kws4LtRteEf1NtUhwfjc5Xc2EzucD3QVTAXidr1MfcuB4pknRWHMTYPaAg5VqJ7gVmctMn3RT5TsB1vFR",
  "key16": "3oFVGHhwYECZULEJ1xAQZi8MsJo1cum6Bif8qg17rFNUyQZxKEhfCRYr3EYnXXXkQRxe9AV48D5EVbh2RWBWpGp7",
  "key17": "2p3PuK6oTy5HCTQBoLq9KeDu6TGfRvwH2bgnU8PHJoKRpMdUpRwTCT3PG2d36j36PhFMc7fk6GSqJLuSbrftjMD8",
  "key18": "23q12nYJQnHh9YuWtCP4i5jojRG2Nrm9rWGGoCbMh7p8CNRdBeajswHjo7RreceB2faPoouSiC3YxgFArEVixtYR",
  "key19": "3xCrD1hztGnQv3vA2q8rzp3z4vCznB7XakD4QEDdz1UtA7kR7uC4VvPXxNv3XgK7g7JoqbJ8GVb51fKbnHTPcaHs",
  "key20": "5TBnJyCifMU1a9Y6NzX2FziCT9qTJmvNr59eCTmW141YnvEutVKEa84XdCD7vWg8hZXnT1FkdQGZ2rhZJJ63X5ua",
  "key21": "5CFX7LuUWuk5BGw3xr5X3vKxFp83DjV1f6dtbVqzd8hC6R8bVVkzDvFByKFaidrfPxCnb2DMb4uMwDkvkLLQFHrZ",
  "key22": "3p7tRDSh4xaaZA3gDijEbjbCXKhVf7WS8k3VPPnpcbQQRa1hjGXgV4XYEEktpPQXx5uwaySiXHAVMoyhfErCw2wP",
  "key23": "4AL8DtZnA1dLLv73JgjTdUVhTrBUjsAN7S4pyexLgrYJeCkJTjqrBdAcQFLBa9tGUcdE1cmJMjUVkdoryyzD8HJb",
  "key24": "5fkTVWGTjeLL5vUr5LuM2hcXn5B7nb3zinL8iw9rvNSt84aGo99pfi4Pz6sBChmpgnHW3cWP8hFq5CpwCxzKWvAF",
  "key25": "3buADsFuRfYJmkyqgtzjwMJWQ2CKQNdeF7dgDY5bLcEY8fodJZKbf5CAJaiSXdXNo2rc8LHptkadhy86PyN8ujKe",
  "key26": "67gxxxk6hdH6mxnj5dMHR31KW2R2onvgqURepUL6xUV4eMhRpmXWvUJPugknPQeqXexjQmxdPxD26vUJZMZmkcde",
  "key27": "4Ch866KXyoNpKyE6NaTF3LJG9gJS6suKuwhJYwhA9P3JfktGRBNW1zQ3A7YZdCQy2rhT1srkjY6k1sZk4Eui28AR",
  "key28": "FuN8WLpdxM17fmgfoaNNYpK95B3thfcedVNXAvbT57yJKU1He7dGp2EkK3i9vrKiUF7eLgx2fWtvUSeaKQkK4hV",
  "key29": "JuyoSbmyzR4v2s5CaumpzmHyM9RXVUpDeJSJVhDUSi2EamVVcNUHkBZd6hatWh4DT1Mn73xDx4TrHeDrcGkVEqr",
  "key30": "2jphrMUaZLC2pHRSjQVuacvdibqPjcRzCFWXsB2LehHuusJjweLbLxAaabgBAsXyxwkp35fdeqDfeegN41assy5n",
  "key31": "3NQu9s6zpjnMa53K1JjK2kNhSW63Y2zGAvfAW64oWYW7yb8dJZDYjguhiQGsttAMya3bTXyPEsRFBrchytwgRMAE",
  "key32": "4VvjSMA2oAnQLHFizQi1YQZZK7mxTpDQ3TbRWfr6b8DUGzY1dH6AydopRNxgsrv4sXRxiBq1U4ECB3Y8od7hLRtS",
  "key33": "5WbtMfpWy161fGwERofLud9vfDtTSr5xW2YfWQSPyP2XLdJsWvx8SXKTqisPDUUtrAqfSqczCXXWEN8cNGdYVBxp",
  "key34": "3NpDwEjG9ZQJqrPi9TW4byy9pajnv7kb128Uti9XazH7UpLHtg6NLCZfzvLqAvy9pUDstMnJed8YDCwAre4kMGQG",
  "key35": "5L866KFHsPAtmHSYhUJ9tTKESA5bnj4aVnnhz9un7NPovzTkhg2CRT2Ghau6YMwVour7MvrBsowfiX5jbqDcTFRD",
  "key36": "4bp8yP1uQA7dQpjPdkkvuHwZ7gNAHHhaAjrkho3qbeM9uhUdRarVvRX2Fq5bTwULc87b5huSDuedjvbwN7f9BqJ3",
  "key37": "5ynkongAQMpRYTCAAKrJ3oxpPz9dnN5tZb1eDux3rDB4Sj5tMJ6GkFG5WBEnzL3BoAwwWpofDTTRkDNKoGmFes8L",
  "key38": "3AFiaaPDs6N8aNdiCuueNd22kEfngtUqBCRk5v7HZZJcJxM9n5r4Dn41UHKEBpPen2wHWPbpQhahmTMoZE4wACSK",
  "key39": "23TMMTw43eL8E4eiuu3gcoAoSnfPQyqyG3BkC4zzsd2m1j5uhSaa6u75HToGThyAACWP5VRADFYGGc6246VMwb2w",
  "key40": "2TPkToKvvr7Vy4scMSWX8RFMQo2RsmdLbnXSBCz1oS4Qb4YAUDvaYxYRUkE3phUiqMFsTRtUFDjJjMhzZCgrJZLe"
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
