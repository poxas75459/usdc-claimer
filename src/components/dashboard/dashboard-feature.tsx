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
    "4u4MT1SAXycT8swi9BGqy6NfqTjDasNDpq3ayt7rkU7MeidvQ81ZgzDMnXVEap5XXuFTusuTu8T4bsziZfRPLXWB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JDtupC3ru4TpJ3YGmuPEooUrqZyFGRRXgaB4dxDbgAjEiMLRMs3XEeyLWnioWG8CgUV4EP71vh3zVmXdVcnPjzv",
  "key1": "4ujncX1KwnQNyV3oydgQyLgzs1QnuKKBVdhrsK3HkVQTW6xoNrUNfDBjMrnTMfF4y8XFtiABQpq8ekBWC9yLzQqk",
  "key2": "wPaPYxrwtzWRJFpB86AHDBJh2MCq8YpEM8djv2Rd7UD1v8MBJFKKy3bgFhumD2CBgdGw2QJYdvSPGPrpPRVsnJC",
  "key3": "4RR9BYMyqnxJ4WW3eGSzNEng3QQcBJAvhJ2bYPAJ258b8ATcHg718Aj3KQ626pfiRfwKzwWJeHghTqjt5a9ifMrc",
  "key4": "3QXyo2GkNcoGrCeome3tLYTUieWbjf6Mcrv6wb1fh22rTmXFAN4ToBXAc2ySBdWdVhP8dcbrJpjzqYJxgHpCfoAN",
  "key5": "bpdi21uSyy5eZE2jbbKuUiPR3yHpArVq64cgNh8YmxD7FZgLkXV7xabdPhQaWUMakjN6xe622RjBpqXKutpqHJA",
  "key6": "WrjyijamUbSfx3gTxcJXRgcAvwSqH83hphjbH7vBM8x914trLCRgwoaij8pny6jdauAwew13puCUBCiSdDXrPBa",
  "key7": "3xvfYnuwJFFbH2SLy3JCptseLLJq2wKT5qwtNLjFENn3QXyJ8grcpwN463YGkSpcydqDVDFByu9PF1H86pVMjZNL",
  "key8": "5wkRpBMogFLkvcSKcBN4rFHfxTuWVK5t7h4S177j3NrXjKAUVxTfGbomS35NX5wA2ERCdYfWi7S6asBdMkYZH57D",
  "key9": "tm2aNwrcReoFVvv47FnNHi9NGGhvTaM5jK4FtRUbCqLULSb86LSqKDHR1aKHasxmNDGvo3bXRW3ZE3PArhnoQxe",
  "key10": "h7cB7mkwPB4w849ptdL42nya68T8DvR41Rq3YrPGdnq9PhLxRmviXzJnZZc9kLTjsFSN7uePhCZr7M7NB1Gs39F",
  "key11": "4VCUgDPe4YzHPJBu1uoXJuNNpYPiNBENCH7p97WfzWW1MUxAzH3xqhivfVewXhMW7trA9ahyzp8hCNasPg8UZggn",
  "key12": "23sTRBuiAnATyM5Veo63aWzKPsKhaGrvhTbRkr4CXvJry5eYiKHazjvWXiuFRFgnquMgoCoJeQVMy1dJvyugbjyY",
  "key13": "Xd2mb5cymyMPd19MoX7pWdfAqQ3r4nuk2wPyPwK3h7sZFPH1sfsva3XBzEi8CmmHeJzdtamwM4iemfqx6btuQsN",
  "key14": "4nvRKRzoQLdcRDsdfRx6bkpHewtTWc7kcXeARmKdifv8AU16L5zTxpW2iLdR4o27B36LeWcsbybVx5kHDCb9AXFt",
  "key15": "3vLvTN2nqmUPGjYF9eaoH5sLVXwkFJFRvU7ueTtz7NREjnVHPUcMED5Wiu8v1NMKEH4SK1Gym12WwVW7ypPDXjNX",
  "key16": "37bbQLet1hnxzJa3TrwHchJeUbsYXCVzYENqZZzEPNnRiyc1KzT6jJUhkKP5k1yU5PmFqYyi67GUZzKQKVrhVomz",
  "key17": "3vNKtSkmmmxxmx1YeiaDZtiiZXypJkzhDXQXdrDWXr4SSD4deYsxa2YMYpt9Bi6UeV6SqYJLt24benaEcVdyWrK8",
  "key18": "4vskhduX5GiUNroRefcQJtyMs1C6pRaPggjEgUzHTpAypWe28ajz8gwFEq7SkJDCsHV5jKadBnQQTvbrtuTttSFy",
  "key19": "4s5whhZ3KGY3gjVzTwsXXetQxMGyUjJsXb4VbsTnttzPaAWQme7eoxTU4wLja9R48BQ2cn57VTAZUirY613KUZYL",
  "key20": "2T5h1NWZ9zfRd8VuH7RtGYakGyypqN4BqVmnUNgeAkzDcfShVi3ctMmjsj9D4Wq6bDe1KYHQfukdZdjENNNRFndb",
  "key21": "4y1FiTLGsryEPXpqk6FQtvfKFc492ubgunWg32JxXJ5Ccp52ZwxGhwRV1oio4SfnQVXHDiAijmuXaziVDi1nssLQ",
  "key22": "4z9fBj1BHP9VeGKXRJd4Qum3qrJ1c7PeA35RcTRL8tFScWCvMma9yta4bccrMkMoSjDoghcaKYnxrEXT3FA3dUcD",
  "key23": "37QuG4pgCPRBWqo2Mok8WRqYa2PTPjJD8ZfiwPr9LiAWbMjeHybL9cXep6TbadxgqtEZbu6Vmx97hBzzWyjG3iz7",
  "key24": "3mznSf1c2Dhxs3UVWi9jqL8FkzCpQt23SVHvhNPQYNB88zyHeco7fVnVaehf5emXnVqrH83DkywDzYgqSiJt4puT",
  "key25": "3Fhj1b3P3pKnHWEjQEefasv36Yj8wMWk6Ldfu3yFBv5ZzkJ2TP5Pq4RphjEidVTrZRXZ1J42DAoE9bZ4tjotkyGm",
  "key26": "3PCREUt5BoiwVy8r5aZhN8sMu2YPgM2BVB5iw3pebsELoX96mRQytyPyv7VatBKLbHUisxXqvoRMeSkXmfbPXFEq",
  "key27": "45FwRgVxH8KDmLcuFJ823on9ncitfi9L5xuiUt1CX8sZ2kozApUMw9gB99jMp1hJjYDbC9GWLXEtxc4SJPxbLppi",
  "key28": "4bqKRWisemQ2Rrv4TAxU3GCYCUTwZPxagztVNatLQwYebCaY4TfCRpZcVA2iLXmNUQQwqjCiyRJJwZdZHcDFP2Ru",
  "key29": "4yxfjoGeohYGEcvsmnQzsdPe1nUsQGZvdRaDCqJMitsLM5PQiNA1uW3icxhe2Lcn1xEP4qmGL8hJsWht9idcLaxn",
  "key30": "2L3HgFFMiNcmZDb8EM9oj2iMz6veurKfo9c9XCqFMYDKiodF4EXwvSmmoBmbeqEfFmPQSTpWbnVDJvQj4EjhCMVs",
  "key31": "5juxSXyaRdRmD3NHAwj2c83JDHorKtYAvyf45UJesodmCUCJ97G6Jg2W4uF8zaErmSAa8kAszWe2ukaTygabFFet",
  "key32": "5cHgrbhUKpryFd4b4inLbEPqHVwqVAPmAVkgm1wjmKkRDRAaU3V6PbirHpNJvjkrYYdZNGpE3ggMyrr7k72389iM",
  "key33": "BcFLneDPoY2di2AsYNSRMr4dRM2puCpZhsyG58jLtQhZVnTScJhYQeNgEyC7HLBiQLP48Zxd2Hm1CVk8zn9Mq9u",
  "key34": "36PRgNJg7FTpPPTcYuLrrHqYPWWsKh3Fw2TReG65R8kZ2TWBo9gC47tQtoyvfBBQ4QEpdiia6AJMkkw7ZMo2TM7J",
  "key35": "3EGpFdpSCEHUF5NPpnUiVrAe9EqZgMFRHoG2mPvXUZ34mmqcRFxNhvuwXH5nuukXicoykcStz2K27jc6CnfH3H17",
  "key36": "mNBLc4MhtgW71iw9LYP8UoqD4rGEeYvEHsmeWBeocxPWwpL22aTH7KJ62umWW56wdVSWB9W17rwLsZDg311763N",
  "key37": "4Q7bw6MUYoHDDiUmRF7vLdJAPjxgGyhpTikpvSK7rWM63GvYYZgMUriEFG1Uyz4pqG3gmNnCUUK6ZJxz5bB2MAse",
  "key38": "p8A45MA97hsvToWYmUBPnM5mo88oKTjbGj1z7iisr5TSV2VDCcuN2ZAmvAv7dJD9mVBBnuWJ6Br5byxC8N3wxx3",
  "key39": "23jReQaTQWL9iZ3Rrz86dUGN7EA8sDf2mo6xSzHVkhtVuU9BZqGQJWJkUHrtGqEaQGU4mp6YfkKipMp91u5gNEge",
  "key40": "46qgdTepcD5sY8xnDPaF9yFVGC6XjUydJt5wTWxK5BVzHptsusnwzh2iyktA5fPg2wDCLehsVGLJ3ded7WGfpn3L",
  "key41": "4MbgBFttj78orkGUVR9PddpMhx6ULpQQjj4D6Qa29kbG55cqkYViPG5htb1EQ3W2Ptok2ZcEUuwt9EBbx9MEpvVy",
  "key42": "5gZQ761dbv2GrnFVGJzPWqWYjMsTxwMQNAdwBqs7NaWrr3YsXTua84xM15CoZFtTkitVzXMgnL4sQ56FLQPGSYiJ",
  "key43": "278gjm6AbDPyM1QVqpaZm9SAqELKn6xyRZC7rsiq81XGVhpRte74uMN6bBpBoSL4wr9A4V8BWRkizkCBw7tKBL7s",
  "key44": "3ysafHM3uXmTcBkb1XHg4QHmsXxBKEkzEB83wSHie2ByvApNnNxdoEGkqdDE3Cvc55XGZf7cMWV73rDvnA9pPKSd",
  "key45": "5pAukJvX9wsTELwfpGaARdrv118CXUYgRqoRvogUXdGevtJ5PQnBnyisgxGxWgfQa3iLpnHKqSvkjUf8Bikp8cba"
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
