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
    "4kRsSbxR5MVguzWj77U23fmmeqPFrKAgm66siGP2rH1fSF5DTL68VQ7BL5xEUbV9rRvcfeCuZzP4p32EDb9skVb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QvyKhoQx7AAZgkpK9TUcgGUCLxKSYoM2yoXzQVyTWSVsptqwcoUPGzy46SbSaPbzHptU7VhJkMzedPidVzFHePD",
  "key1": "kWxqKPnVv97QAbby8TiwMyLay6zrNdmxRVPPd5KEu1Hyf7WXE6GEmCxbWNr4ikDUUwCuxTdTrApiqBxWn1yroEF",
  "key2": "5JJg7AiBNi8vEGtQabuepZ6ckZ39Rwz8o16wwajq5rWcYbsrXYx26PKNu5jYaWbuM5dYTJu6Po1yTx7ifz8YSnmC",
  "key3": "Vrvh9PsbjCbS7iQ1cx8RYxcGrMsSRdAanpHVvCo3yYWeuRWpiXPmuFGhCwGXLc2jpSZxNeZYyWtLTEjK9UmAVtR",
  "key4": "3wtkxe5qmJmGmiaEkhr1i5hmcXrpFiAH1xxaGuY1bai2FLtihu5iTkMGEqnonfbP8Gx7mxbvY7DQyjUwXftzRPeq",
  "key5": "4zGPjVfJyquAQFVVnjyqBmq6zXXGXAxcASLfBxSRutAFcWM14jDJNnaE2GMTg8X7nXFWFw4E1eujJzK5NgfmSxA2",
  "key6": "4CmLUW9uWEi2RyG2LZBx18zDrFx3W2rVAbFTJi1FY4LXf4Lmk6ZhtkKFDEhaYcZo3TbpRp6qiYUQyX7uT8UTryjm",
  "key7": "58Ft7jSVbBYyj84hDwof1dcmqvvAnfCNsBEBA15Es4wvHVj8CG1NymbXzY6QWwVpRxeKhQijuxKsE2nSnKmtvKdd",
  "key8": "2PYsAmmTVaDtM2Gra5E9jhN6DnvoGoj7dN2AW7twndpvtfojjTAXDPd7P6DoSDJpUFjYZfMTfKqXH9vPZsB23c1y",
  "key9": "28h1XeKGnmkywnBHvbrwo5rVH7q6zekSSsXWamgQYEhmVfzpAEGGNiVKfg9rayAcMYdXnzKD9tcSzYNTBJvqQwmB",
  "key10": "MEPF5yLLXm5b8Hco1cWjcWfYge7j9VbdpGiVUSbVHd8ejZPx45JNPrn5xJD9wmrkLUQnJ9yReiAV3r7nfCtYvWW",
  "key11": "4Me61N98uuP9rbDezde4ioPY9gXfMKEm5xrPS45tqqFZky6c3ca4TVV1ja66uXAssX3CzCyGm4Gr2PcGYDvSY7vD",
  "key12": "2CQbPVgsfp6Cru3DL8mbSx6apQeK1NcfBqrH66BHfwtC6pfPc8yaAZF7L1bNJF5eR8vV8KtaYHQAyyjtjU1EcWLa",
  "key13": "4siE6jBPHf2yzEuYubakAb5oTvsZPz8j5zHaEzaJQ4dh9cqLoYcNgvgE1cKegkhgjcatx2wpFyZyB5mci6V4cbgB",
  "key14": "6619g7twwvNgyy4hyi6q5y8fFpKbHndMPf67fDxH5qUDaGoww3d8xzG2W2ZCAdai99ppojQBJbFTTsvzLfsqDKCo",
  "key15": "5wfnd65Ty2fLqLqpAiUnGvHJDLfGohL5wMFaAcqeLdmaynCpSFU472NeXTU6irYYGD1h3j9FL6R8t7x3aXrczeK9",
  "key16": "23BKrEjQ8EqxmuZ3oXeQw4dy58JjMHfUfkPteN3DGPJGN67FjrY2nbnJgTG1cCGMPqyQNxrV81iNyABDkYqSL1TN",
  "key17": "121xs3hAc2qh6WjtyTLtTkP93hUZgAjq8L2DPNZwoSZBMwZ8CE85TuJj4bE46xHJqxeCgVKLBBZr9hmpWJrFZS81",
  "key18": "5Uk2nMYsnpsAbRojPkUd5oLz4ymBDUQbx28uryt9KXR3QNUaE15CdMYBV5Pdk1d2EgzpciSvExq5qU1jDcazsJSN",
  "key19": "4msfQ6TUpNr8q71XbmJabQaUy4Fhbn84Zn4VbscyfS4nNZq7EqM9uBey5wKHh3jYEJsVtGgNuyYoPyPPmQPrGYxL",
  "key20": "5H8sC9XvfCG613Vh9DLBNZtjZWYN9TabCcB3HN4x9EsCAy8HzpQ1D2Ati4kzv9aHiYfFLqHSb8fLGUoUc66Xo2Dx",
  "key21": "Mxj9jqMiqG6cBmtUtkye4A9ni6MCr49dfHuqm8ETjTc5HC3i23gGW64tKpFq6Z9TUdrQqC2wJesbrpQCExSyoCt",
  "key22": "45PTU8smHXE6RM76ug7WiynzVyMBMaUCDjTdfZDqwnvHsDbrCKjeCnwgqJynscbboXKvU5hMdW4Z4tFcyXWv1T5F",
  "key23": "eFSEa9i8MtBaCjefMw1JLFLEeUVMk54mMkfek1HGMG63DQ2s4qJGbcAfcofe3Fc2rafv35j9LZdYu2kgMXk1h7G",
  "key24": "2suX23Pn21T1eMKW2GLMQEmKv3dpWenEP7a6iAKCzkQGQkC2SY65PbctufSKCjGTMq2yqsFLs4nrADsyGr15V5kp",
  "key25": "4ZdiGp5BGTuBdYhEnEZztow9dp9VMcz52cGkRTkH2UKhJ24QpR6Ys4V2fwFgRNa6bhKRkymnTfwesC122XYmcjVK",
  "key26": "2xhoTunitzu22LhonJhCwXPx8WoBKo161uyopFhbQxq7GGYbAtAew8MgmRdPGWri1TPzRYfcpRMk3HNiqG9E6JY",
  "key27": "o1w7WY7kBSfzEg1ADGzK4vAnnoZCn1Uq6nfXcQ5txFVnqJzv4mF2mDAcU2SkJGoAYPGBrGyKAxxTkpez6PRaYYP",
  "key28": "rxeWRaVTcQS9ZDX1zF58FLM4jTs8KTMXFBa4rGAcg4gZGWepKq9om538rnYEL1Bg9fTSEgGT1geWahP2KZ44U3g",
  "key29": "4DDxNnJWUhBQL3vfT5pfq4JJqGaNRp6nkQoCzYRpRE5mFGztP25QpT8xmfBLTQhKKw9GQrMisKe1UiRR1pBvsHuW",
  "key30": "2zSiN92S1oTgJxXiXBgY4NGTRgPCuMLAPo67SkRoXguoJf1pbsB5CnMsoeUBBLSbcdgur2aRziAsu7CgY9rnc76X",
  "key31": "BtUHfC5fFvyRV8LkxutB72jC7wtWJvA9wHDTqdxTSLwJvorEPPA6CvaLocuaCYfAnNnmxb4waDyQX8QKCyFZ6Lk",
  "key32": "5JdUAYUJnjXo9zbSASuy2fW2h5gu7nhFprFfe6XKF8ZM14Dvd7eQwWcKXoYgNXsL6LZ5Pe4xTiG9SyPaK5EbV9dH",
  "key33": "TyFWfe8SxQjbwJKzhQY7KzWCP33YEeYv1Ry3ypwN9gLPmKKaJsLiLujUmYGgXRfCpkE7Mu8EiDMcc4EioQ8tSP8",
  "key34": "22qXG1sg1Gnw6H6QCXEB1YRZZa7LtCcojsYCkPW12QYQKuMHUzq9yadjWBJU3Rkgpe5buvKVWr8vzYP2j9LHKvVb",
  "key35": "4J9RsNLifnLScMFekTa1GjQZLMFcLmKxHuumUWbGFjHvF7GTTargVvVceKQPopTDLMPVonjimgdyb9XVmGfY2vnD",
  "key36": "2ahREr5qGS2mi42nWfv428S1NvR2MTPNXxupw1w948e52X8TXcpC971NWsSGdrMFXijPfHyd1TrdDwPhRX4CfBSF",
  "key37": "64gD44QaXNF88CP973dARgbG4obgigCP7Co8tyx8HL4PxYAmms4EDg2Cisg1KaBMPcvQYmXaMer5je7no4jTuSLp",
  "key38": "aD5t5b8E7n5PewcPJEWfbFw1ZFp9SBjqoK8HsTahSfYaMLmgy54iDBvVqVeXonkLu5oJxXDmhSLmuw4TxkLUWCe",
  "key39": "3xceAhs3BCy2TVYsxfcVdth2AqeHciyX8vhgYroWtMQDpSvf8kPVQBZX7RAuvG9eTs7LeGNtx9NqsJ97SQEmo6eL",
  "key40": "3YdgQc4hmRd9YXeE11aPLGnjygnTsk6ZKguKZHVonMohPFyMkGtDDkSD1tXnU5BwBk7uconZiNBwWecYLHRd5cto",
  "key41": "v8RkLpFGVxwVkLZtwa3yhF3ZCLLmsxn1ypwMWi6aDurubTBCF14T1ddxyEpKNQzZRy1FRiAE56PP5QvWhMKAtdq",
  "key42": "61zwyMfY48LW2t5qGMzU9XrQQ4b8wdohc7wePCce55nk4MzxqnPhKidgz3ytK989avPPgC7zuF1fk5rWFZF6Mn3r",
  "key43": "3mncSTYtQfEsDN8h9toabpJc6AbEYEcTZUZoSHDWZPrF5PhjbjgxpC2sWciXTX2X6ou4N6Bx6zyEz9A6uTENdk6F",
  "key44": "4NYgqg2PH5oL6CXhyuU6zhiDVtAvnNzgXeqfw5R69mnrazPWtLCuSmoe2P9eQhwTJwHTZDKyBC2SDtzd8sU8yYzj",
  "key45": "4yKvgEuWUfF4wnaCB88uk6EYaSvyohk8DxfsgRj1bCLRiwLsVGVGEBdiHbtLkYY85US86sz43AShGGPB4mLWVs3V"
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
