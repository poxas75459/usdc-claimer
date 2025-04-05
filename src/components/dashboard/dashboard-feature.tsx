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
    "3bXyWftQMiwx35ZD1AwKrC9owKKNniB66xJfa5NBcYqALwHArRExFrTZMF8rtHks4LrCM33fSs3hTKSGfJVteXvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BsQdYML4dLeQmQyRSfDbuBHygQfnwaHK3EsaDSVPuihcqjy44dPcLkN6maAbLM2LqLdpGZBEahZGYFuTLv9wRdX",
  "key1": "2Twrn417TWz7XTPyMSerghdPMSnA2K5SGDFuN1Jnfnke8dyPnCgNTyhpJFW56JNuuxJ3rvxaSthK8Y7sdfH9rAsB",
  "key2": "5mYc77aFuKphHah9t89r3iuUnrEZADd1AHMvK8kHpCTmePsgNuuxwV56LK7k2ojDkHwm37bsptnSfM1TiNmnQVx5",
  "key3": "2S9pVmSsVXP2cn1Tm8MWg85cGrfEtSkZTjLgyXeZvE7dz1Gi2E3JWALyz4xqkk4VxAE1gpyJkt17tionjLr48S9j",
  "key4": "5Z1yKGfYApYzU1aBihvZzDxrHmDLNDeegaJTx6nXt4daoMRQ6FhVqYQzgNv3EB8R98mFazVTA1kGaCmVi3qkZse3",
  "key5": "3oUPsiBryUkWUaurxTVLP34vgAA6TymoEwAjAx7Qm2EQYCekRRbjJv7bvXqCoWj4q6KyQdVpudaaZRFjUraKKLV7",
  "key6": "4AStvPuNwLnQfKeGGbsFUJCT1BqYn2Z4igEvuRzW6a8PiVVrBxJd7RFAt8t5DpHjANicTupE9KTJ9f5v4GwLdNQc",
  "key7": "4iuj59CUyi7gt9hD6cGVATh9eUAPP4ugaPsenvfRyCzZYVeK5NHe9ZhGhTciPQzCNXkznnUHSGibPt2bfodTwMKf",
  "key8": "4oARLZf7wYs9LPBKbiEmcmXTG2oYMatU79rMzu2JQvrPGkdTLmo4dcTTHREZ6nxMxKbbNac9C5AZbpYADJckqDPP",
  "key9": "3pktLnvLvjnLJgPRsxQNUjMX8gJ2Fr5nbbngyVTbW5FPEMkf69HFSm3qq2ErSuYbwL3XY6R6JYrh9G3p9q9yZnTE",
  "key10": "4gC9kK8aGtPfhnwKyiWTvvreLai9PjHJ9ybiSTDayYRfW9MZBMHf8Xf1AkZzYWTFwa96RmTxTCVUGbVGwXLjL3r7",
  "key11": "25CFYciZ4SdiT6cQAvDUqVzgwirrrC8oTkXybHMvx6Gua9p4NtoCSNwZuDS99bfPHAh9WcxAupp1n4ZddVjg2b2L",
  "key12": "5iK7967sPHQxwhKoQTyL3TEPKV4G9REWteW3qzJfDCCQhGTUMRFmPVd6oMcgpXyUXDSv6dt12BugVY3mppF3JTqU",
  "key13": "eWpQNxpfc3cFxqqfMMjC72oZ8k4RhG6Tvera2CWpcRDas4faTxjzkPfoKb4m56yanNnbd423zPeP1D7B1jLd7SQ",
  "key14": "4aCa3gAFkNCTfxL8iG2msMGowP9AiZUmxhMo815YgybWoqR4sQnR63NBfCdpg7D3nBFXFoJsw5Us5S4qvLqAsgFF",
  "key15": "469Pg5yLpokrG6qgZDgjhghb1Qp8vJpbKuMLfbhiycMCvuyqg93XRCTPNfG859nxUyurfdbCtb3oLrkQcYwEKnmz",
  "key16": "27FkWZXxvUvVeW4FWfG9XRRjb6uimwg7A8Wa445t5shRMoDSVqPnf4adGHDrc26uoW5mowG7Y1kA2n9wdqcnFpNk",
  "key17": "2xMvZ73MnxPWioGENTTAiqfAUwXLtKweQrQ9K8V5AH1H2PQiSP95HGuZ9df45viq1CgJRg8yzfXVFP4njsamkox1",
  "key18": "BsJBxQynCuXCeD1NH1NNyzHHEg4gKCCJEpgHFdNNDFZ5u9MBXwrBHyGAoVRdQCq6T7qUZXN7ykMCgphN7B9g5pa",
  "key19": "5arTd6x4w5f32P35uLc6Le9ibi83PqmwcyvqXWkHV7rfHNNrcJhoJs6A4RF3AcdLr7RoKAWWayvTY4AavjgTHYEJ",
  "key20": "YYAjCUs2peu451TAafd6sAMxkrfiXa9TRWPCfBmYi9Ekn4fpsj5bq7C57f6MbTuFaeLHAL9U132rDHdyk1LVu9L",
  "key21": "3MjxXnSsXES9CaSejQsYGpZcDp5Rxixhn5pzhh3NS1uxP2xAtYjqJET97BUroL2cWpfHmjCAJ4T4jfQYiHddJjk5",
  "key22": "wmR7MGwc89zfyc8FZ8Kj72GXJBPAqscKx5VgArgBYN5bxYgh4AC1wKW8thy7UqDnSX32DYipV2cD73NHxYuxx23",
  "key23": "22mVBZXPVpBSDo5Tj7bzdhEwj9yh9cJamAp76G82M3wiJheMK7NQnzwgDTG9UAsDW33NTcFKH96771uULLWtsrkY",
  "key24": "4p3tU5Pn4SPk2oRs81Hp51ENG3yDZ6DZG7YZdZ94xtWM91D1PxStD8dFXxpsUgi8n7nQivDvxULSt5KcFb2DS5pJ",
  "key25": "4pKNYwZ8PAsobY3fpdtd7bMyRFWWaJMotjMni1HcBXgAVibTYuv5Peu3EkQsUxAWh4jMPZLYDnqKDKMnVcTeCjMd",
  "key26": "7wgPuFxhC7fAotdGPF8EmZ2sRW7Xo5U9TpaXLyUoN2CGAJzt3TBEfd2bkQGAJwVAJ2hBRmmuDPJ9ai4HgNhgbKA",
  "key27": "5ZzBSfvo9MJ7VaoaRxawjDAZ2JK1HFpYxUpTTaetem9EpCpqzQCJRgbWjE4WJrXNjYNq1bHGCey1cvrGbYmftLLK",
  "key28": "4eFzHw9WxstNBoizozZRCKaJXxVdxvsetP4QTpnG1kpeECA6b6SZJXjKiTvCqB5iurcHy8BmRkKm8Ey6Es4TE7as",
  "key29": "5o2WbHyxHchCkTu37MiE9HhRMA56EHyNofzQtmUKnEwX9PYh4jvwmhgsQwFCpgtg8Bo5vUYGSLaH8fcyfB8xRTVC",
  "key30": "Dr8DYMYWjFP2CLQsx3aZozZpoQXq3PceqBa22bz4o1LyWszY3scyHHkhUHbWTJU9LcXkEn7GaeJRLzDzJW7Ksvi",
  "key31": "5LA5oCtFHE5qVsWGRu2SdtS8Z4pzykU6toXZsTstaJESvcLT36jqd4hqmFWPxCQvsSPQLD1MhVdN8SW3YxM9jCjU",
  "key32": "26HrJW5jfhY8kJQwCXGxkzmrnYp8CTpS3ewFTQtPD4G3nD2aiBTcbPj4czjYgBpbY69bCoMahF2Uev5KSXD14esW",
  "key33": "5sWkC8MnShMtEZtT8mEDDhaGWNkRYmFE5ZtXGnEKFCbVUzhuuhJ2LxhP6eU1Hha2wjVCnUxPLwhcMKiSSBTQZVum",
  "key34": "BUJuJaVN16fzCct64cdUiuGPmDjUeJaoU3t8SfC9rkMShorEoBzTPGt6MfiGE7vqyPdeHQb7yvYxWjfVfPhkxp8",
  "key35": "5nNQfbqhWVxb87G6HkFkp31nNehrvUbEZRFMDkPWNDCUErkqPHApPUZHymhpmmiNKQgdZvQ5BZAAzCX4DqyermCR",
  "key36": "57yu3ZS3MNfb9bb5Fer3twUzfk8LJG5ov2KJ3i954XE2GRKu3yrCJEXjWohbSiSk3qo2EGfVWAE3NGfj6xnLLaq6",
  "key37": "512vBn6T74jV8NEqm95yDsoQ3LUeBgsjNojNPdWw9FKwHKAKCzoKRwwVGGxLeR7XAE5L6zUwF4Jf9iE4ocCP9Bsy",
  "key38": "2gFYQBYPeYyCnbJf8XwMBXopWaFFSht3xYMgxKXtWapvb8Vz5j8TTXH6uMwHTNb5btj5emAVpxRMGjr59NtuCAyR",
  "key39": "4z9CR1R4YXvcHbT2JbQ1jLuauzWyPox7kZ434v2pmRnZQjfod9mmNhmZuT9CGZib2JfwfbTo6CqdqNuseQit9nah",
  "key40": "2GFmQgruvRsXDKVdcLpvXcSJsSLCZ5RfHHQpwB7ZaXW3e45TBLFLscusr8XQDJK92X8knUwKGBfC5LdoC9dufm21",
  "key41": "RHRuLcaBTf8ja8CHph5pisUsGpNUJh3aXBfXdHBHL1ih3K6aZEMQfDpLowQXsUZpyVDFiawQJpHRY8pUzsDHrKY",
  "key42": "UK4EVVBbQNCkw69DW7ZcgkwEBLmFT5sDUpR19WsCNpxMGw5a12kZRCfAbbEryimM4Tkwtg6RJjMD7SQwkcPaqnb",
  "key43": "554AmFSm4vfFSYEwE3U9UM5LPfWNwyUq4dJbaMqcJfuf2cQfkMWgbKKFg5szhiewe2TnhZxEvReUswmU5VHWirbM",
  "key44": "3a6GiwsWHQSZ9Z7svE3HUkJwB549ZbG8C6bcuRdm5xQdD7ujf1cRVPRjBuuDuk2xcWjvnGCtjhw9PHMokBBGxnTF",
  "key45": "3FjRy5r6quPSXNos9kFbf2s6WVVGe2n7NksQyTY1V988ime26MzfqBNaiut9qNB5Q4pytWWfvGgsEFXZ3qPVrjCW",
  "key46": "5i2oqgSy3DeRVKG3nXea1YHpY82ES4ifgmTfyNjuu1raH1wpSe6X5FREXv7Rww5ouhL7PnWQi4YUSg9dNxWTwHBH",
  "key47": "2DRyLP2zocERRpdnhw4tajTaztorwBWEwsP5R7dpFi2hbHijNsLHNUXud3AwTUP5vUB6TpbHMAqWWTxH6ZenLbPK"
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
