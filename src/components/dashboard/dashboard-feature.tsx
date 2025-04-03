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
    "2YhfMx9zpvXSLBRwXDbVTxrUVN5seYenhW3gc7xeGxvt2oBA2Nm7fgUizY5Q4e1fyd2awpwxa9xXzVcixbB1BisM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y6ReNkrvUxaWiitkUWYGXTTxK1nChi3HU7oTJm2HusX8iu8vKNbTpWmDYuZhQQSfuVp4prKk1x5FkiW5cTFo5xG",
  "key1": "3VTAGAGr6jwoJH8y4hTmKStftR7Nko7BZf4oyF7bUPVE7xGP9yMfEwwwAocoudnw7xBYF4j2G7rYWvR9jtisB9MZ",
  "key2": "432MfRPm6TEQ7BpExjyf51LRUroFmMXWdsSG5bQukthxH8WH3re6sveoYmzWe9Ba9TBz8uEzWgkapt2UoMRb7b6k",
  "key3": "VE4VET9iCHfdiN4eEdYApG13Yb87fhuGbYxQaYcwik2uPafaB1HoqnKEhJkPhWRTutqEdPQT4Xm2kr2akAYRtQW",
  "key4": "388XAh3ApPyy1x1FzfWUUU9NTEXT6JoAHeoZE8QJWh9CkzDdCkLJk6nTpwTeLEu1SAg8mQqhfKFKMn9YpqU2J3NF",
  "key5": "21ts91opmU1KC1zwPBvWvVmp2ThnH5yDkRS1AmQTZv9iP4xwhM3yzxa7PovVTBmgspBH7rEAyd1DaxHsyZpi19XW",
  "key6": "3u4jMdUxF4QBxigsBZ5iLPd6tKK41LVbSsAHMPhzjaybKQJAr7aLy6Y1ehJoSqY9ZZdvtCJhVyWuyvunLfpZvnSx",
  "key7": "5mgvCTei7r5y2ga9XUeQTkSFM4sDEVtn5JqrpNgsjXBQf27JMBK7aVh1HW3o24widPe1hrALU3WfHjRC6yeiZirS",
  "key8": "3JHH4x12CN3etLi47gzBhDE66EuXxQbYpv733rtKRbrszSKpCT8pqG72Zesz6onUmBuBXuBNmw8MPwcqUEKkKpSs",
  "key9": "4HEo29ZXYS4VYsdvg2e4TfpffzEeUNpJUD9BWVqaX9L5GGsqhKL2G3kmN2WQp5ZZdbDYPy7Dwqx65wqYq3Bm6mpo",
  "key10": "461FRcBAw4uoPnqCxj9ZLNqgV1TSxwRpUDmXoxFveD2zbtQ9hinVXUyVetCWoKMixeYPwLsCHNyd9axDNBmfDs7M",
  "key11": "2R6YqhfEGhdcDoGzgWPSWLvNrY3ik4VBaDEACfbms12KduL3t9fVerLHrkhkPYUkucjxRCtW3nwkcmQqtkB3yYfJ",
  "key12": "3T5igBxVcsiUMDRmd7tPhPCufL2CZ1pm964BTXSNumGQq7Sjfsydfmn5tYx7VU3YqJTN8cmPxW3yc7Vd1WSLxm3U",
  "key13": "vPTVoSjVg6912TbqwYz4ze8ccHLK4euajHvQ2VY2i2DcU9eE61YvxnCevjoKegGrPKSCagpQBTvYuxYUZYCeS4L",
  "key14": "23aLJR6zGFanrLRJA8wvX1TRpMWhX3ED3niYWKrgxKdiaTNQkcFMCnvhZagnUboAaG3WUVwmHxEKJ1gbD1oNMnpn",
  "key15": "2HHurtQv8pFkGrbqbJicxABhNtrcZMjEAHHNo5UMnFJ3vCX3UxkLieeMN7AhDGimH9rBVsXctELehw6UbutN3B7a",
  "key16": "25m9tpCD3dKcQZb79BFdNQrRz5mg71vEQTo9apzaSmfYDhrG23XDVeXMaozvrRLrZ5WTWLi1DKoTVRCjzKbLF5Ba",
  "key17": "5kiA2hdjEdybJ7hLm3HZazwPKjFJuyiL6Qih63ztaMcAtqE1P9TerDm5dRM9BQg9uN27Mvmvw5SdGVtj5S3go3JP",
  "key18": "3mkFLioArDezFpPvw3KdpogEzoK1CK2GbgiKRZaU9gMfiZxbNHNZ1CDeAEFuUsGy2UzBeGQbB5Fio6338XqoBoSb",
  "key19": "469dpRUKAdAF4UnTfszJFU4vcTncFehvgX3mqz43yBkCViHiMwMbYaczGnYYxgu6VcwWTdqKebgaWGjG4eiz5Qtt",
  "key20": "5BbzacTaAQoTE6R7qv8hcWT875cF14CRpqyPvancsQ5vLB9gwyU9yBSyRigs6LPnb1jCxiTM4e8XF8X8hDV4nKUk",
  "key21": "58JDe9WzaAKcCdpcC4fn98nayccJtp1fG5AEh6UZxMrc3dkRmuRwdb5k1LuZEqgxYA7Wpcu9h18cUnUX662btHhA",
  "key22": "3sfBRfPCm5Jranqj3QAzyAxLmBZHr6abWQwPTYwB6kf1EaD2ngSE33vkTEC3Ta41GWF8dynSDfHhp9m1TDY5o9zX",
  "key23": "341UVyA5vdQWJWPsWjXjyWQKYQ4y6tsJmKcESqGKuxiBn4x8fY3Gn8VLBXNJr7jGhQbR6GmnkZwc8L4f2bwFxDfL",
  "key24": "26aQU3CUxEHGXN89P9M6E13ZWB3VC7SMegvkfLqqXEBfJ87GC79ChBAT9voz2LwNYVbKnbv18TfEjvgR4RoFKiUo",
  "key25": "2YqR8AnJjhv45yxfj1vYSmZWpXcZ6iLR9pzDCSsVfh39yQ7eZ9GaDUNAXefEJVCA8AoDjt2fj2nFgxjhqiyeHNEF",
  "key26": "3RWezf8JuP3ZX8akg7HKhiFpUnk6czEd3gd1ZS93V6JzuUSDXwnS5iQXBRS5y9wzTz5M6ZakpZHpqBf9JVFp6n7T",
  "key27": "2EG1wJtup7XQpTUoseoRUTDwTtDGrUDQLsVmmT39YkpMYvxUbMn7S6EjDbag2ehj7Ljm8LmyvmCk35D1QsrqHyoA",
  "key28": "617qWZWCQEse3zVSAx4X51dFdZLGbJ4k9AUfTT8B7y6JrnFfBMMGi7FPhq7G2dSjVhDyMXgbNmjjMP3TAKQYAhW6",
  "key29": "5bNPHpneAx4uDpb8gXCeV6hQbQNkViWwNQZWfAYjJ7zCFYT2SNZm6ySLjSBK7awGycQG27aCiag3HVhZf7WNQuEJ",
  "key30": "wVFftEHReEaq5qaisAeGzfRMp61nf5WbQRhQhtwnboSYJcfHkyvhfGSXGqrfY3FHKyEmbyBduzftjcKDP1jzi2L",
  "key31": "5JJMoFW3cBfZvzp9SHJAQUxSx1xbE2KLvYmJz9W4QASVQqG6A7FH3XqSd5ZHnEZ2vsp9SFGJbv2WNVsxUbmWPUnF",
  "key32": "4JJVfXunAFD56ABUqjHHntUeQE9NzraHgiGKT28ERqfGKbWfsgRWtjL3UJxD2BZzY7VojHYL5VqQjEQpFRWbTad3",
  "key33": "5jif8gB3MhkPwrbZehw61cM9bdgLRWog42ajePUVj7rds2Azym6rue4FajduUzwMupbduM59YPP8jmyYS2HWhLAh",
  "key34": "21L6Ni5aoQmVBuEWBdG1rebT5Q5XG83r4jn4fbDiDtwn8pcrZUfpnahjgvZgfdJHZ9HRxXw9o89sskRZ9XJvbrBo",
  "key35": "4MvBMr84PzUPznnUYFwmAuxuypTJiQbKe4gR52vP2rxgL8TWuBBUF8q1LhrA6t9HX46RhNfFPodyBBkjgvgt3xCq",
  "key36": "55M7ogvsKK7vvPBobfrbd5DPfiBoVG16RYNvqBdWzLZmhzsqEtnuTFJFFRWdUPqspbSncHu3QFmaeBbHaYYQtvms",
  "key37": "B2b7CAt3NPS8ZXKdctdg4867mQCxivS5bfZV5sjwhgYGuTVCT8EeM3ZSGhsADN24DiGBiTVXgCXxZ2b8NvsP8Tz",
  "key38": "2D5UdCr4jhfWy6SSans7CeWXMr2zhhZkFtCySZj5cTWmjNxTDo1bmZSpGP5R7Ud4zT36VxVahZCZXjV2fkWfdKS4",
  "key39": "YtvCTvm9vk6Q8XmLYnVE6XV1qxD24eJy3CCAWDdTa4yT9N6t3Lbga2BWe25GNaQ6Suxg4V3i2V8SdQvhkMAVL3D",
  "key40": "4e7K4UqstFSt7E6Pn4Ey5CMN98zEekP6EgdrhhvrvvMLkkmeCaWEX6ehzokY3PCnm5CW7Kn4Np3jmzV22sgSGaUd",
  "key41": "2ENhBy56HmfFYTwwTkgrMZibDtcNd1Y4QXu8vgNvn3KCSwbiqQ9jZJaARCRvmfe1VqZiipg9sgfqDty2itdSS7Hk",
  "key42": "4UKug4tbxhKwPTRtyx15PCCSKKNsSjBFuh3xyyQ7UiLt7921N5LPoQFBSWRMuqHAZgs9aLM4ZF6JheSxrqQ6LVzR",
  "key43": "3YowaN5aWfdVrJfG6Hx4RhyCYvu9L22S3idTv1dnVUDpRhuUctXHD9Qevs7kqUrVbionLcTFiYzPwcU8bkbQvsTQ",
  "key44": "2rnTvyAM9H67XANsQUYZyHHWC5koStKkk4ie77ASbUwnFrwNphrdFudGTYv1wxRujXiS6bzPLcYHmR8H77dQXRnn",
  "key45": "4AMPEfXCWfRQKUm6ByXFrbZsJrhriwYVZcAVvBMrZnSbbEV58DmphAAoi26MpFMBpuq19QCBMnfxw4BeH2oa4Y7",
  "key46": "4K3Th7EHS6gZJWzZhDTKQwBqTwKzVc1Gx2Dm9GSeLgy9TzCt1qnXwdSVqbrtCgPwMMsGGBQCp4mzh8HK2c32D9H7",
  "key47": "5LtBoqYNmaMsSttgNUvBGbdGJXdCuZnVPYn5MtYjd5BxY2B9Hu6S48K1mLDMxRXc8ZgeEZrgDB9T6HrjW1iZESeu",
  "key48": "451U6sot5kzQkZ79CVUudoguCGrgdLV9HkY2P12jLpGAqxQFAQMjdKPuMcAqvB3WjMMN36GBFz7DyLrhGez6aTYw"
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
