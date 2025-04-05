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
    "3PsLgmwLG8vjiHaZLxx1HTohHx46YpgZ6TeofKPrunusxWhxCHVBZKays1UzTjxjBcLzaKBGWCtm6TnXJLh8MTUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6nsUMvHXbyDADT2WtQPgx6ov6A6Boi2F819CQDzfxExv8mfKVPSZ7aMPocvb8NiGJBrRk68YGMvaaQLhAz1EQEH",
  "key1": "5opLmcyjBvqVQgdxheQxkzEEQcTa2FJfsLFcKgFHJDiJEpGpKuY47LYqACvk6t65U2epo6uucArmh8tnDUhbPtXX",
  "key2": "3JodLpHiNuXgGt7uSFoqHgzvSLLWxnL6WEUNJBDWBEh2vgWGMYR6ivMQvpE1vH92Zaa2PTdnQ7twfjo4Uv4Ek7D7",
  "key3": "3gvvUpPUKFBhiPwrPqNv5LaYyHwD1e7RjuR34LsySNA1DPhYN5acqV2JAKw9E3cut9MFMPap6KFt9kiLwwSax6zj",
  "key4": "5BciAiku2JftvtoxgW2i63gJkpjqXTydoGXgdWf5fZYtto64GTTros9cw1Rzim5AmC5EfygiaS4AdVJDSEaxaBpH",
  "key5": "5ThnofeQBdoraUGY8j7y2eN8s6XJb8BNwzjUeTAUisgeBRkhwV9Qbn5FRSDRrnsDANmB8x2XUwiXZo1dAhXQoA3E",
  "key6": "4cGEzceHWcK2o2puaL212jG97Cj6CJdCWH9NCn5GaeEcjm2iJciEtmHUh9GkxqUQThmERXcKVzJNyYUYaYT2qcsz",
  "key7": "5g4b9xA2Mc8VesgQ9cXm2msAbfPHHrUzJGzw7DAjN1DixcVDQdExFQEbtGzCeGsdda2YN1h9hwdq7iABPpdvG8Fd",
  "key8": "5dMHTjoaqFp6aLFHcM5bpcxBQsnYh7tUGz1pwPehWpH6e1ahMF9hqJWjbuksHsMUYZ6AbfrrrgHs5egQW7VE82NJ",
  "key9": "4ntcqkqmKQhCJZE1BEbatKaV2Q6ZM1eFJP17NGK3n2kF4Z44XWJpRsQbv81sHuAirDtaCowTmizJA9BqsgkABWya",
  "key10": "YT2r7UfA4DmWL81JC2djmF2g893akwdRFTyDGSbXoEzfKYExE4BHTCP4jAqMowqhyWsN4TynukZYZ384rbeZbmG",
  "key11": "8DPSwjM6minaDjBWHFfX1E2ZQqzrwPqXQZL8eY8yoUmjDnWD5Tvsx8ZV5sCG4JXPxzdSK1KjW8eEe4KJz1AKR9C",
  "key12": "5D5YgR3fSMTDjTfte8r9WYdBz8oPRPuTm93YZ958hz4uwvs99VYDprDpWBFEmEGSUFD6ZgsTPAPm1nzS2AR2Npd1",
  "key13": "CfULR33UHwNwAh3kCTzEqDNZEseHUzCq7sFsnh5zpUc9HtochgmufyPbLMcB861vjhuUHvk4D883apNa9yY3qxq",
  "key14": "5ZPjijxSGtmDLMwuwXCeh8m5mBUsx7GiJ1aAK4RVjizWSEcyqK8tkyacjypwAihurFjofaKwLBUcP8qjffxsRjod",
  "key15": "4JSuaAmcZqX8rMqhJRNUrmbXps9UcSfjyKEpuqeYH8PXnSNvj4SKtazkxx7daVjauntqPABujFZ57bHr5whGjxaz",
  "key16": "2EsNjVmnfrttAopQWXtbosXyyFMySwrL3GgtkFzpU4aUU4T5M3gCctQPdr3r4xZmQGGhBG58jE23utueVsc8sfLm",
  "key17": "5vz4uPr3Dj8G6A2a84GLFBZGJPCGuP8z2KeKHGseeYhD1vg9QwezQmeXbMHhZsF62mmosz3XVYXP3m53gQ2eqVaP",
  "key18": "2AUgSaKxyJaMAue77Aj7cnYtujXgPiWa1mCfozTGNy6zHYXxRJtRKFh9Y6E1LYpc3g9q8t9W4yzYDoCRuiF2XDom",
  "key19": "4Q2ENnFMCDWPhL5Xzi6MjtmjNASGRhbVhzCmgFS7G3tdVdfr47X5Mi3AJysjqqjZwGxromE2oZGXkGBCnD37Cktq",
  "key20": "3d2ygVFkcqAJ9Bdrfkd6b41bzHLfXi3iZWuA7T5jWHfXmjurf2BWKMcddZ3ZidYGiSkrzsP5WZ1mw8mNNDX8mact",
  "key21": "5CfJFQqs7DkXLwWXTGwotH2dFYsjW8fNHPcCPienaroHUg5X6mgyQ2X3KaWQxuT7NcAwgSjshxr4NcgC9sVGKj2H",
  "key22": "xR7vj1QyC2dMaMc6PSmp5rqxLgVciktn4MU3BYSae4nUJMRH3HqdWHkCz5zPshymaVgDSPiFrgbbAQZBZiye6pF",
  "key23": "w49NkhnXqgPsAANuhoTLZBTEErUgV1dtYiXJKE2CM7aMVu1L9iFEqU9NXGKamp1UzELgtnDGKFdNFSUZxN17uNZ",
  "key24": "5F5gX9Wi7aP7Yxz4qYHCyAfKiY6wnJUprqAmUfjurQucn4WGwEGBc77RWh9cC8Nz8BN5KZnGp69cgVeKXLaF53dn",
  "key25": "4KUs4AmPQrAw9MxAsmP9LAE7UZmpjsSWLamXJXsRZSi1UAxexj8dLdg9GRt7n2UkucWchSSBdA3SUtf275MCYiJS",
  "key26": "2eGUNFrKnU5HqYKxq7SJKUdYQn8CsJSV45VcBtdxNiRkBXUBc8shCrpdEYZZdm9gHhLLfg4s29Qf3gSEPveitMow",
  "key27": "5wXnfiDicXNMLHVQfGm5azumg86cFQZoVPhwEfGSKykuXJA1917hirpVnAqRzFyodVWbNxSw64bL1XKABZBsfxqp",
  "key28": "3gMjtCwBZjCVBLAAPMzDc7NAsd7HAQx8LE7JT7BEdcAKApFLgqfRJbj3scyra5SSazuHQpBbJNBXrvoENVHy4mZb",
  "key29": "F5jRLoaqzGjCaAL6NhUfoQHQ4p7rPDQvY5wm9FquDJuGXCsrcvkio6mDzi1k76jbroDMFgsS16fiCNZBNmmEEmU",
  "key30": "2kvTmiDPkWZyT4YkwyR7T3rVmghfqTMYPPfD9VoVEhxr6JGL9GT1ezxMAvXNG3ANRsdKw9Q2s523Y6QFk4Ee1cxw",
  "key31": "4P3dWv5CNJRX6wFHzyjong3KqHumwtLd9eetysTE8Pb1qLATNuoFocmwtnozpF4L2TF6RfnchMR3ZUDkWeLqDeqP",
  "key32": "3hcgVkYRMx3SkcEE5XqLrVkGSqoh9QkLJoPtRpTt2tdoRJZvbZZeUFTzATySYjnr5y2pEhsvMUTBeDppiAakAbxJ",
  "key33": "y1LvXPGx9qqQErbH6KM7M31CUSMNBbhiY1269vUUz4gPniP2q2ut9mvnWGrk87HdysNftVP2WgUC5ruCVR24fXn",
  "key34": "3cng4uSKkVuBcrT3LU4fqHX75aHN6QHt6NdY7Lpm2ADw14jCgiuueXRVn6HJ2xmbuchCxFgP7rY5wdzyfokZWXXQ",
  "key35": "5XwXueRuz8JyMAFG8ZPQj9fBmFwRLVdyj4nfhn3L3ThhhqMcMSsdYfFU47Z1jwEgQQnW8FN3mdhjCxfUFtXTsUKT",
  "key36": "4tCkf9inHoXbKc8BztZ8Xag4c7SRCKLzWZVoBGc2a8cAk7JrCEoCiNUAtb2UsaebANQfn26LFF3UGLF7NVvhtbd1",
  "key37": "4AZNaJjxd4j1F5X1jQxCUUwfpsWottYQZuipdEP798TBHEjJe6kpAjQDXHPmsLiLM7sSSpsxJ7JMtsuGnyifvA1y",
  "key38": "E9cmFKyye8UXTDUh3tZyUsXCPfDmZchFMHrxy4Loe64cfXjkS4w5ptofkyo9gQsh6qLzQSTAQqvac9vNAoBXhPK",
  "key39": "iBZRRzkJWrm7TqhR6QU43qL6oyKpgcE7ELdLdboHbopqBemX3bnymHwBXNDPsawP9za4EY5hxkFmw5aTdA77J1Y",
  "key40": "KmfQxCbyXKoXdhCM3S3snsmHvpUZo3L4W7Zk3AjA9TrV4Ekm5EKRHa7cqgZrQzg3dFQZ9KSZ4T21FZG3brasa4x",
  "key41": "oZqzzGvEk1zb9M5JVYSFRfVcDCcDAuvAXPdHiUiGkBRgc8SRx2A6xkoCJVb7Dgei28X7psP973mWAQ8wWwqUiuu",
  "key42": "Zdh5EL3jpas4qTfYnMk9PkyU3ECspeJqoRmT1ggc9riatuaGVv5LFdsN67jJ4o9imM3ZPhasjNxEGfMJQMZqQY1",
  "key43": "3D2xotnifVsMCxMTFU33CUeWSgZbLFEMixJ97Ltu3bHfW2BpytJQbCK6cjQMcpewpG9NU6SThVpP6tyryv8mgrTT",
  "key44": "5Xw38s9h8YphDyhFVyRtzgUiXcAcgfSXN8bGNsam7Sfu7RsGrzw4jaU3EXReiWCBiC4iskVkkZMBNtupBeEMp67i"
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
