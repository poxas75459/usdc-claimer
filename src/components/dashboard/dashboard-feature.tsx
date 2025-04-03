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
    "4Hjw4PJRpz3JezMkuAHeVWH18EXJyRM8j56dZDkbJRFWxc9pztrwvNGvkSDESrDU5xFTXokKrrwMvydPaT3oNbGR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MX3osfSNxwaK8EexqVjBBEYQdedaBzpo6fQKRZJVeoiqJGGU6oWuZyws6VAnuV65LfHe1gcPBJVhgfuzBQ9WKHm",
  "key1": "WS9onoxet8uQ24BxSo6phUMP8c6ZPu2e18Fhp8MNxdty2zcW9qL8t97m2ELvZPBa7PHKNpVYwhEJyU7nCH1wJ64",
  "key2": "3ZWQLxXBPVwctsYb2WufnSNcqmazE2obbLvwqQWj37nn8q1Tn219SeoAzsxKGB52yUM8cjZzbQD9DjS2xvogg4bN",
  "key3": "3oda71XtQTJjpL99WkL5jEnQkJbxCaxSKDPCe1U48jxwFcaYJeqEEhmsSMeAv8UpAapALXgqbG9fS61mKALKEmKA",
  "key4": "5w7e58DpGPW7sBLUsk7vHJrGsdHBKiR7JHxiRvmM3mrzohbtAjVvdMXCqW9SUrqpZX2kzj7pGJRvCGS6aER1AZJy",
  "key5": "8t2vTyBiUSnVVZEf7pkaYjzLTvwW8YX5AoBs1L6C4xQtQUhVeTmLWNSV8AArzGA4u3g4JdopEcxyuoFq2qh1yN2",
  "key6": "3ZNf63XLfnPK1ak1hUiqEUyEHhmqTtUZcpeMvReorEZhofuv6uP32DC35MGAEpfRpABtHMEEg4R7DWvcZ4trjFjf",
  "key7": "4fVMZV4cvoPHC2TS1KnbM7TmWNy1qBwo17u6NvhH7W1qSMh5maEgff9M3T4hyKL9evBnKVFthVRqxU8TDpkNNvJA",
  "key8": "417Esu5F9vvQCDNoJqy1XYEc7Lxr2YLx5pUqQ5HuEuZz2fZaehSEADJ21wW8YE2SFNs4cfBfzPg29TVJoD5yPk8H",
  "key9": "5KP8akka21kytcjochP5w9gYfA58qCgHMtDAmJ3GdfySgqNJXKXakHi58djsirL1XNMWuvFUjqhM8bG5D6pfHq7t",
  "key10": "4DYrHoYkRAiTYLZDKgjWnoq9CBapshVm4GWLF85VDgQoeE49FLCr2cnPmPpvqdiRk27tiRQ4uyyjKsrxZ4pCXYqG",
  "key11": "4fURJPfALLvHV5CWhVridnVpqzQJhoeifn4tXrPxUYXxW7EtVMncFdd1pFVCTYccBVbpxKPNzSjs7fjGZpKn9yGD",
  "key12": "4p8D4ffmCUCxNFXzdEfmqdxWvePdmQ2KcjHoWMqzBx2LfZzXHD1JNvzNP1z1FgW2PxRx3mwFv7JQVZa2MeQNvERA",
  "key13": "2yrQZqA1fmTbAjU3HMGHx8Y1kxcczFYCoh9e7VTDo7BrmMcYfFD32WHBdvwAHqvxUjgGkd4njhP6VeQPZvamNiV8",
  "key14": "56ZVwajARMWFnFhUbAcinTDhnTYBFiNCTYCfW6hd2n8ZgZ5GJgo1KsEv13ud4z7Gda7Vm8DSifitn3b86Vcdf4rZ",
  "key15": "3zBmCVYHqGgWBBg8BPAndRRDfvv2QEWgk1tr1ZVQqrPek1YCDgYA5zHvJVsjGYsZV7aAEDxfQWApSLCK565WpMhT",
  "key16": "648LT7u5qi1QvyyGRXrTaesi4DKaJ5iNKNEz7tZ5CM5MdKQ4neH7gUwo7i1sTwJEMnqss3cacucJHDPxyepCHVhA",
  "key17": "4oSNrz6D8ePNnqAaeHEVbMZ6WgqjTjqpQsqHHLBSD6TaWA8e3K25JYVnCKv8DuZR2t6Vh2o6KfYT61GWRrg4wXpP",
  "key18": "5K1yj95NEzNdWj8otu32wx19ri5ZQxkVnpeogjaJoz5Qe7PKyCLAntC4nwu3Hm1ANf2Hm6ZXRZSid26rNjRLv692",
  "key19": "4cQgS5JHTxqCmNix1By5GTJnYLcXX9riuuxwfA7LzP36Hn4udWVyuKg1A2A6bC1wFMWkE5KwS7ZTaWJjFYy63z1b",
  "key20": "re1uXzNUQyC3VmYBKEZxSp8M2kqCeyypPWKjfYy6CSufu71CXttH5u57fN4vkxaEnVBeypjffDbUsXQdwLg2pgV",
  "key21": "3s4ifxvEpY3EKZRgbLg8iBCAfUiB1jUTiRmwhTkeZQAuZZmsrmkaJa4en57CnyPxih4EZaskEChobTUYu48HWFUT",
  "key22": "FQQMNX9C4BMhsVUV8wpCTrakidu6UWXr3TMRFuZFyoKzuXS2j2uwH2hnH7p7AWZN2c9ejm1j7GAhKbkMP4jginj",
  "key23": "5NJyG8KTwijMosoVF89wZmTHSiEBdPx8c491jVpiTmN9LKkFbLkiG66bzkiyne9dH2tEwa41UyqnLvBrHsw3e8NM",
  "key24": "2HobSYT7v8QJwWosAmpUN4jti6Wc2Pt4XLurjvV22cethtj8qLWyQmrxDSgge8UweFkQXUBCw2YomFQs1qMhGvaP",
  "key25": "4sHjjzFKsRPkR88cmwCDPTFDTLSrwi8wQJjXSwkEEAWs8nJSNXToQMCdYUwCv3ZgkVT748yrs8uVtePVNvPHjytq",
  "key26": "3Q9S7inRBHQPTPjcTT8tmPjjq627u2nBdjEiExXKHmkQ7ZWdoi79MjU9wV4qfPmcrEEFEhc9AsXj8FecWnwBAiCx",
  "key27": "2VG8HLGWL2dqFrW9qzpNxFZsCKs1hbVWrn5N3i8xeXyHYajQ2ZBnTC2XVJ59Go4DyNQCVxrMT2GA9fZDoyXkUarE",
  "key28": "5hvGvxKACHADJvV6pNHvvKV9vxq2EsXmzv89qhaRR7159CNCY3Cmvna9gRGBczwdgi9YWs9vLcHvgUNqrBykEZF8",
  "key29": "ix4ZjCSWunG5pXsh8JbwubpomggMtXJx78bjNbddGCnHanyuK8hEDqiETtFjfWSMP9a8XKbMYGTemrzDWqb2SPJ",
  "key30": "661Y8rYebL92Pop4vz95SHoR7T6Dq1MYF4JhFjngnyG8qSXH1mst6aWqqXAtVBzHZbHnQ6ayPeaPBHKz2FQpZiew",
  "key31": "3Z19rRipJqaNAfKBU3EyLm1Xn53RUkqmydynipm4JW34tkJBffYn3DbinyAwNJVwFp1rmh665W3uu7KsGYMBmQ4b",
  "key32": "tEYCUqaLg65z5jMhTrf2J5bj4W98DjbjHVBz8C2v5127UU4hm3ehDdtBmmPUBMkVHPo9jBaTkeuTVyATdFJjsvu",
  "key33": "2xoizf7VUALxb4a6uKU1asPdaH2uFhvoTEaUtK7BczU6z8JcZNUm8k1EhfJ1KfzJR3D1x8JaN1ZAQzGA6mt9fS69",
  "key34": "2uLUHZKzs3aaWeE9AiJnZhgSZQkbeqpjRWCUqidmeCvNW1wxcjTK64thWdZcTzYLSEpo4GXqPyYzQeiLVhhPSZnk",
  "key35": "Mf28oJ42mKVhC2rhoW4Duh3dKVpDwsz5DAkN5Ch55oaKg7XPSW6mEkfLuL9eh7dxV3qtiH5w4N7FtFjETqvZX3Z",
  "key36": "3kc92ypjFtPKHA5EqAgYzo5965gTXDdjKUuDM7RN4PHoJccauoqQ2wr3GZ2fVds4VPiGBhtcsbMjeGiPMAiDiwtN",
  "key37": "snNCWswbJutxfaLFgu1p5ptkKmxw1hNNSrJdhPZYQV98mZtb3qJAEXTjNkckKCcEW8fNjgTFzP1cg4ENyAUuMP4",
  "key38": "4WckWX74cZmx5TAzSw5erAsrggio8DWvg4Ad8cBgBNNrCdhfyDRhEPMVpAfb9BQFsMmZisMh2HLfsmo68GjWieA7",
  "key39": "3hwJWXjJB6UHFgNYvxCCSSWT3zxmJqqMSq7pmKeLPqDqPCfWweu589eE9j4BdfvMjdjE7fCNzQq2tcTLahE4fRCg",
  "key40": "mv1LzQLdbf3LEbsdoq5tPQk2bun9Ldu7K4L8DEHejTGQ2o7xA2mifAZ5ciNom3F3GgWDTLxgJuZHqGUmurxoFgs",
  "key41": "29jazueUTpEEWFi44MpSTacAQESaqZwHkjLKYEcZ8GRKZNxxZX349kSm2qYhtFC6VSoSmvFSH4JeGQpRwVboSE2A",
  "key42": "4AwXxqNjdvpbaemQSorBupoFywHcnq4mdd3P9qoLVTFQRdnQuy2FuTZSyWGuYQ5b17gbetkSMaQwRhEvDPRrcLt1",
  "key43": "JJvJDxxf1Kcsxh5HycjhSskcV1mayepbMELyAwatyhySV7DUyouucM9fHcMstzrCt4AFFR3cgVJTwWEZZFwC71H",
  "key44": "3N93eyqiEekqARxCt1zp2rgzVX3hBKHKG5NMAiP947XNwHsgN5Ctvxh13qvhYC2dNrnSHWSmHkpWkmX2CxUfbTaw",
  "key45": "27oYU5PZCopHacDWLtDqZmqgH3QGBcuVW5nzdqwmPFAdU1p2ZvhqBbKxYReh6LevRKn4DFTSpN4BQFrtkmGH2iub"
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
