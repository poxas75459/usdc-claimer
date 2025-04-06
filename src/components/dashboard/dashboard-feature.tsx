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
    "FNthavk6ZVrCbWh5uvgfZyroDMkoccD6rPGkVnYSkPidT7H1Vhk5PzwEZkwE115XSmD9V8jmXeyMNBx1Wg8BYgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wwSX1zstApy69As2xpgernm9RNwCd8JMjRBvwYZ6RZztUjxyWewhxNZTucs5Eq66FMX8wwbtgStoZKtGbFYKhD9",
  "key1": "BxCG57GZ4B3sidx2EXryYmbH9QtNqPJwt2sdLs3Yreh7uMf4uEnRU3TdTkp7cddnCkLPLDhbnRmbzgGbiF89TKU",
  "key2": "1tjzggYaFiz9Lo2Qmdjix1QwY6hWzJnCUBXMBrMSzGxk4VdRQqmHnpMV7kMdYytYQVRFcb7D9t4YTU6bcQy9MaG",
  "key3": "oRgv7hEycdBk6VKE15aWKLn1jJbqNK59r2yrfkmbGYYgMQqEUPEQdvnyn2jx9Dc5gVUXZPFhijxjH5ENPXY2y1C",
  "key4": "ZMTA1yetHG15rVdKeDHdXVQDU3sB1N2GM9dzoCQWNJVcbMFqDUyJWF9TYdNVPJSeQG5dQwwQe67yZRRVmFq4ocJ",
  "key5": "SNQ5AxKg9KswNxopgxeQUbPuQySReX2irR46QZCj5ecgbHGFVDVmL5jWpe2a8zmmn5w5WAfuQC149sTpABt9iat",
  "key6": "56jGjWk7zjXJ8cScjt6VPncWm4EqjeiFZ4xHXZU7gp4hBgiS7Cf4dHy9zTrv87i1stpiCyUo6cqagxytcrj2b11i",
  "key7": "peWPaDLLX6FHTkaa79osvoF4sms98mNi7DEwVxLbgQz8mAGnzrD6XCbGpEyMu35UJ77nCeWQiNGecTRSJxgN9AT",
  "key8": "5YNREARHKYNkcQfzj6kb1X2oG8PwGvgPAMwgXk7yE3zuE6GBGR4yvX9juuBzLNMaZjs53VaSyxQ5DiJU3tqVvoYc",
  "key9": "38NYXELvpbZ5nEqWR3D8HWar4idBfpbpvJUtUiB9yCWPTV7rTUbu8DX9u5est6CazMEVGDN8QXRMhuZYKYx1otAa",
  "key10": "2paw7nUnxTCNKr22Gx7YRRhiNvT8vW3YM2CD4DRz7xfnizxr1wJLNAxCJNUEUZpgaeeeiJiz2Be2wJCgm3vSP4sC",
  "key11": "2j731EH5gGTbtttCp6vCTEpJwjJPWyYhqLxVpW8qKDhKtdpkHE8DC9qXKhoZY1YAToaZnMspx912qdqWfzZAD9o3",
  "key12": "4AEhMLhDPnGwVxSALLp5paWbLfjboZpRgzRUn2rWZ31RmgThUyNr81D5tfNFyqhhXgv6cGJgzxgfxtWJHFvgPDk",
  "key13": "2EpbJQXbk2tymUr4beZipSXxLiDkxYaNGNz4rYQHTJBX8Vtiyj18jUtGPvkHmcj4E6L4SK4VY7RiumubQhbdUGjz",
  "key14": "PtpwnBHdLJeTZ9s8uYRCoD8N8yvsPe8yH1KURQD6BpAVfS8vpYH5d7bPCaAPSY1g4U64ipznsPiqXHpWV4eEJyb",
  "key15": "QwLJQ2Nsp1TvT623tbkU2bA7QXdYa55zZsGwBG8oZS96FuviD8pkmR4qgA1KWGwcLk2jGqtbJyRwnECouyEPNKm",
  "key16": "5qRtXVe8yhVtt6TaTnZFjBkbVbZRUYZ7VAButFE2WpiNNamHoo5WetQZUQArq2vVF5YwvXE77N3h3Frk5VUa2CeJ",
  "key17": "368pe5P4ygffSuZVi3KofThxeZNdCBWPwyMU5gLQrJ6M1vY4VH4umNzEcFQbAY7iLxJQqFFb6wPpvya97cHNrish",
  "key18": "nRWGyFFuoyQ14JmPo1GDcA8yMddSxif58AavSKH2F6QEW38CgMH31NUmS1RoXn9jAZH881wauAaEkKrwYP8vCbW",
  "key19": "SWnLWmBoAEGhW6V5Rx7oX3qE5tzcuC4zLM5cLKMdQ6Ydymmm6v2Ye1jrALYVBQ6Ex1ARL44WsvhyJke1Qe3peAU",
  "key20": "HzH6KUPapDJ5hT9vYjEugyVF7a4waYenZR19n7voaHqbWEonhikn5jAJvv1PA8kcE2RECANUtyHMtMKsPWNk3LE",
  "key21": "2ZHZM3cLUZyZUA2wBxRUed7F7PrvpqNoP6Di6Q11gxLtyUZbHZCNAjpxQmKLtG9i8F18oGsCPnBF6VFr7upkcBK3",
  "key22": "44wWiAbjq3zetprMZerFYYEH7s2q8n76LGdRdEtSdQdPKW8eq7aM58CDuZDaKXWxvmUYebEaznLPf6yUvZbBPPG7",
  "key23": "4noKbupQwURQrervhknzMeXKHfyRNCk58vn6Kcex4Xm7Ggk22FFCttNChJh2BkYF67JYbu35GAtjH3y6cRY92NXX",
  "key24": "TJhE5tifdsBu9SHWLNc2MsrbZFCSgdinEPUEVbTDMGcxsQzkXim9UfQz2vLke3RXBc7jdDPfM1q4qAbvbivELPn",
  "key25": "5YYqJZ7mM6Lj4Bv1f5vk6GrGePQjpEZYZy62c1Yxrnw5g72urQDAi6938jAdP5p5XAAZ3BWvCpeNKgtjmVXxP4wH",
  "key26": "3ZqVS8Te3UoTMwZqMc4Gbg8DMQyesBBk6gjacBx5NUQQEgVFp1WRXetWV2Be1QEJPWpsr6qkEyRTPaoFeSoWUNhY",
  "key27": "RLqAYLG47fe3cV6A2fMS6LsdtJSMVuS7sPxXSGPbNn7q3QMaNzrEZSiqPApPzXghy1PbXbpVsRXv88MsgNtPbPw",
  "key28": "3H2JuxmTU8NbDJTZAavt5zWK2SHSqqvsRafQZEA8UFuizZy32hZQRAsgTu7vKGtMP5V2YNdfQXonXskSYvhwbsbA",
  "key29": "4jqd81UAG2oyAD5n7g1XoRP3wfyCmLRp26iZ6UHRFUEHGUjtfLQmukNN6P4DAoeJKpe2BP8GUaHiwAwo3PSCpD5N",
  "key30": "3Cm3RTjaT7mb7GaZzMXMMzPs6G3vE4ETjEnBMbs53xESKoaJpRbnvyKm9UULZSvd3ZuH7wic8Keqe3KLmr2FuRUM",
  "key31": "4tV2KHtgL1nLtj9SsTEdoKb2FnbcbQoEVFUwvwvMKj4wWTjWvQ79t9PEosirhoNA1xoHEMmriB2wWHGsewrsWkLo",
  "key32": "4cwqJozqu6Bht2xtzz9pgmDXfRUtrvJc5qDzCnA7SwwNtwDgbpRBScgw6jgNPPenW63ohzYXfFAxwhNwQGL1CWSu",
  "key33": "4BXWZBT9XrQfDTgD7MP1WDfKy4cademLiiHwdTwEqq34BSLYnCEdoqzDMGEMLQ7Z1GvHuJUtuTaWLn58eSYftiPZ",
  "key34": "DuxFCewzvxuJy7fz7UfrRmHzmX13C5skAYdwakJ6DqPYow2Kd8fje6tTuRArTRzgWZuqhmZ58GA6M2b8YiweBiY",
  "key35": "4y2Bcjs1x6JhsXMKZ7FkPNqGhV5Dbi9M8wXwvKGH5eeecLFRpz1ZNEkBcaqVvNRtB85A6UcvrpVubLfdqiGEK7Gv",
  "key36": "46Ev7NrzV1mZqpzLL9mMygVgG9WVwUu3n1VfZA54P3VxeNYWqaT66cht1Q4THHrDy1f5VDm8Tbhge6BNP2SuzY4w",
  "key37": "2tfbf1rQNJjuCiB4rqKYFxettSwzd4DiQLgJ3VCyv4JbWAJdvG5ytMZ4Q7EpiXF5nweGfPGue7sHr48GJbfV6DUy",
  "key38": "V7Vq9J4J7jccjaoiL4guPZDXQdgKpckiXWPJ3FSKYdXnsJFXst9MuohmcMXRV4SUjCpBJLoTHRnT7YP1ieCHRNX",
  "key39": "5Na83tzpv7ByQfo7WHh63HhxWsX1hi3Sc9KNjfR9NfNgB7XYbFVHPSwruwc1E8PWcvFrV1KP2QDwA676NwNSF4cw",
  "key40": "3wTXmvtmfMEe7yxL3GbC1U8JHWJVevqaH1PpNeXg1ZNc8vrBt277kXWpTViigNtpEQi2rX8Nc2UuDdwR6vUX6bYU",
  "key41": "2CNiEqRco7f936SeUQGKPmWiBf6eTnM1U9WQpnVx1soih8N1yi7ajQC6RvdEdCtRbWYFbBUz8NFU9cdaeV3J51qq",
  "key42": "4W1ndnjEZErC6Gd1pY62JSjszMYRmEEf11r8rCwTc7ByzbjqmapPNPSiYJrWa8zxSpxzozsqpTS5fdmiFi1pm4Fz"
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
