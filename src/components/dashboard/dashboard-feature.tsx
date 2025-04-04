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
    "2RCzd42ooPpLd3tLPvPLQpZVzW8MJeaucKrrZfXYoTtqqUVdRcs8p2fvYzgFv5uqD7immVyCP12Ja8o6DX55GQwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H4dmsLovEVK5zbxACNZQbfM9KDtCqD1Zf2U2PbEcemBCnjs9CFp8kg7erX1DbXiwnJtScWSncVo2uDWRz8YVPNH",
  "key1": "5toJhxseTxdYA6gS2fw3yRducEwMQGPWuDcwVVJF89NXbGDHxp3FbQJoNVB3uTkuvYgRBo4g3V6gERSVCgMpKY2S",
  "key2": "5LfBty77645Xmv1MLJiDHyBi6BNiTtkijdPouUa17fW8YAk1N426xAAiQhgFUEh446rSPAdBrW27Ztm2ZWyHWC72",
  "key3": "5v4Uudu8jmAPigSQXSkoNbbz59EGygAssJ8kN4ZZorSjhHhQmp734S2weLt5isDW4HTftMKryy1B5bZYssCDLVf",
  "key4": "4w19SFquWpevFTvKy5QrqXQYgkdCEuSm7uVjwcuEHrCDPcGt8wDHncdDNTWJ6D8zWMEUHKHc9Wycnd3kNfqrfCL3",
  "key5": "59q7vpDpNyFH4jwuYKHtPGaw5WWnV74m5yQWcNpD3eN4FBmoYF2nJge5Aio3DrMStk4vBE6BSUnbkn67CMXqBFrQ",
  "key6": "4bzVrnJnEQQNCCu1snfYMPZxCgZPHKfvZonEoKFXM7TKmSRehyFgYynjeybJrNMAZKJZc7V9m6gjxLYp3dNwUwgc",
  "key7": "2N9v3EevnHXe65Mkq8nqDDrCgh98KP3xV9rKzRuQTDm8rkHKutUrJABTxCZbzVniSyHvP5wV5jn3Rxf3bdgiqt4Z",
  "key8": "2hQ5FR2yzVbQmvXwUx17qhiYVFVxgzZ5QBXZNDA8kzafJUQWq75E4bFz4zvcKvu3i8DZFifQNcpxLsEWxudy2Ttt",
  "key9": "3NCXidEdvsWdphy23Ch4nX6XGd4yjoShtsgUDWqcCgAUSEttiTrQJU8YXEgQuQz7YX3daSFFViUSyB23Wuh2tJpP",
  "key10": "4eMrsjmKvMgJp5qiUi4kJun4tEkbbBNoEFcVbpmGqnDHF8CQvz3sZK7EjPQhRitFK6mtJAiPJ4kHBbJj47iA1LGy",
  "key11": "4oiLqe9YCfiYZei5cvw9sEV2X1GNpBcihccU2t4JU9s9Vt7HyeqvaNznd8Runs122vYsz7PBt7CwWpdoriDdiZFD",
  "key12": "JGyU5Cae177Kn1T85p9trS8FMpQC98ezSqGaC3g487fmEqFrGhTfCajM1h6YatSR9TcB2xRmjzpHDFQnuNebh2h",
  "key13": "3tFAi1YvRYS392VDG6VmNBLu1okr9c4nfkGWBFDzGpqo9PE8gjg8hvdhgHToZFwa1t1yD3PyEqobVegY3SkcCQpF",
  "key14": "9Fm1npx6Yd28ZEmUjHeYqK7V1EXFzLNUCykkz9cAQ4bJxv5y5TmN2yvamTxM82tvNsCpHqhttnueaz42omLepFS",
  "key15": "4szRihMc8pnXh3xpqbNWaB8JdcYvgCTAMSuwNvCzc9qHCyBTgU2zNzUtCBqC6euR6QiQKUf5KSQHKLutM7zoiHd8",
  "key16": "484NsYQGFjBRMET77H8CuyCaRngafNomGaPY9M5XXPCQ54EeDE3ssjQYCUuWVjGjj4YXQNxQ4x1xKGWHx77qGbMk",
  "key17": "5KbU1TdUchNpqRL5NfPgt24WqFuD4cUNzHTtxJcG5s42gBhCC4h3BoK27paE4Mr7tFYKyHpZuHFAsj4fCW7QLZnj",
  "key18": "u4G1u7adJ25mhCryrESDD7Daejg2hJXecFSKRc2McK3DMDRDCzMxZmFceKjwsGqdjx2QkuwAPuoS5eYjvbbjYsD",
  "key19": "3CemZHeE6wmbjzcEkJA41KczZwhj7cRTKiMywMT7nivZJcGgk361fK7jskc3aYdPWuxf9AFdg6WhwZGvvCK2YfvQ",
  "key20": "khy9WVPmyt64qfA1tvitVsDHsBBZyJjtqnAG11HsnHM3L5xnQYS1eX3jeX8XxSJqWATCmmeLrZL4Ey62P61f1mf",
  "key21": "47z2AvXHjxVNWbCztaT6AA7GRfTWnd51w22kz1MVeU4dbPBf3w5KkdqU3gATZcDjr9RZsjhrgk5HEfTeD4Yuhbd6",
  "key22": "5NAY9s5gTn8bq1PAn5fQLgKtVSUdTeav2pi1UE5ULieg1B7bhj2HurqpMtgxPMLrSEKiNnmtGt2xvkFyyRVByLWN",
  "key23": "46qZt3SY4CR1QoGk4NJSHFv5QxzWhrQbFT2EdBVYF1iQnyNSJ1TEcesdV37hXi4LrVzrMu9BLRQ26g4L9SGAvscj",
  "key24": "4BtDLsV7jXhj17fE636sNxY8Q33eWzbXairVFACLMNkArytXFro4VRu8x8DDEn1LRhwVG9jihv9LRwiese2xqc7P",
  "key25": "5t4vjnjv14qwKnfP486baf7ja2LonFCSekDq8SXMvWcgxm4rjtFsDsxLDNW3zLfaE3eVJLTWqpdfAjd9LKEpCkxx",
  "key26": "2Mu5CtR89MMD2upRo28jWeHz4fiEJgootpbdY7Ry7gTZFs71Mws4t2YYpTvj5DA6wZrnJrSHrGib1WXppNP5aZNN",
  "key27": "5modWEjYWZDyc19DYsE8tL6cHExsH7wzcrkSrpX9pPAN8Rb2XxHY6odnet3cdMZKoGSNiGm3vtFRgQEa8zwSHusu",
  "key28": "3Av7Qjhm6zD4hxjXfFq8fe5ye2ZkUKbfp84k5hd31u4t9P5rwAt7ve8QorTrKRKeMUdczbYE9c7VgbiNX3seHLao",
  "key29": "zgm5B6nxBWhQWoRgFCF3Fjc6wAwe2YS6XvHcbFMchp7pfj4uH5bs5tRrxc3k6uh5Cc6kBgUtWm6E4ZoCQnLYgUo",
  "key30": "2fDkKdcGoLCAn6KqS5zs6u43DS6UKPQCtsy2RppgmPJ21gUy5QcM8dkcpJgDu5A3QfMq1QkYKhNEdGMGsB7RtTaJ",
  "key31": "5VvEf1muz59iPDaLHLFhLaUxCpQfWgs4vpmtUsKuz4pqJn5gHe9J1ZJtPrzfyT1RBdWmd9WLm6C7kFqmyeeikFng",
  "key32": "EWvxpiginaP1Vg7yXNzG5XnUB9Hg5CZV9krw5kWXFm5URKh8jmRnZYfzzB79XEYBeEmnN5v4Nr2c65NMVGSnkhY",
  "key33": "5WWG6F9CzBgL43w2iPKvJBsVgmYVsxGHWCnC4TLA1iRNPn1bGRCp2cUJRYQDRXHXvSpETpnTf9oEappGCUb67uq3",
  "key34": "4HAinTUvTKZZokyV1XDUEVZJQiM8n81KAGSpVtz229fi39Pzvpv5ZYLRGHkMEKjfFfGzwPgTRWggM5GDHiRu9JiB",
  "key35": "5nQFpnWzmC6QwynFFBGBPyLFkL1QmbAEc817VJJvpAtzAV86zu7bchQ9F9Vy3rVdYajZSKJoPWv8YkHp2M3RV4CM",
  "key36": "BSmMphAk1Lx5dXP7FKqghJ6EeA6sRQbFyks9dXSEc9DowbhtWa4Qf55Nu4uiAnyTjjbgki7toirvhaa2LB1xdjJ",
  "key37": "AH5BH69SEMVQaRPKGp4LSMVpD7YcancV93YWuVtsANpBq7bRDsVPKHZMtnCiHd3PEweHMqYFZXxtmVN4UtJGvbq",
  "key38": "7HB5SARCXmQJHSPVrxuJ2WgAJqUDhmZdptH6hgK52zvdjaQQoxQuj39VAckcYSMxPrqPoVY27bUvKp2zmPFGkuV",
  "key39": "5nzq7oQGCovMnZcbqnEJMpuZZF9rKQUCBvXiYRfgS4eqpThquiYYWF5F2dKiUGyEXiyv4yQw3ogLUZNEzpFgi6oa",
  "key40": "5KEepAjcofsPMcxyr6rDqat8JnZr5jdqKwdGQ53CHpZUKNEKMS27mMah81MjpGCsYw3UvXY7LrUaiBfTTw64AVMe",
  "key41": "5jWtHTBuVgXELUWAgptMroJf2czUgp3nn1bXsWFUrrp6Ts3y46a7tK3AwBUPp2Mdh4PBgSzALjXC92Y5aGf1v5Y9",
  "key42": "2Ufy5cTJeYXChVG4muBTd7ecJF366WQAexSTUzyMpWu2WedPbRrn5yN2s4qi2Bf9mG2vKF8j93HcUzZE7cX2hmmE",
  "key43": "ojZSAzwzM6bWp7tuLsTkh9sqi5ZeaekkALXRmqXv7x1cj2yXhB1YBbu3xEzhfVF3ommGQQvCMSJoB45JLrjYeVR"
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
