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
    "3TBEDLK43xGcWgWmD8CVJHmkj8P4DTgQz7dwqTyDnyRx9zeF53BqmsrnDd6TuUwpXnHw7WiEvjtKsiC5MqCB6sC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ty6LwVfjAPodABf7p7FznVxchChE4WvtmhDvEYGYBctXyp41fojbaYXnSt1xoZTufk4GUviVRShX8qByj3xBkgh",
  "key1": "3KuRgNQTnVMtMWsJicob6iQsmWi9nPy693i55hXXCbYcspXmEtbkYea9kNoA2dAwVdHuz5Jcc3Zkg14krxR7CP5E",
  "key2": "mz2gZrUvKgyUPexLkZGawr7Q189knX4BQfseDa83U1kUNZCGQpXPy1gt128Rbkh5DDw1BLDi8noaRVorypwrPuV",
  "key3": "37V1AaDeXzdRRnxQPmrN7nryydDWFmZHSSmrwCSc6kp4cMUW5ed6KR6dTBkTXziJsrJmbi8KmgR1oF2w4GQpEif4",
  "key4": "5rvspx7GqDeLPAK5kxF6PNfY6TuLa74hEEQ6QTTrUbWwMVSt2SNk6PW6dmD19fwyeVxBVqiw7WuPA9xz9tsqT9VH",
  "key5": "x7dLhM4c1NddcqQkPmNSUXCLy2b7eUj2PPLNVtRweJVnWDmJJvbMUGoXUww2SnTD8VALrfb1qAApmAwDF9dkPVy",
  "key6": "2Va6WSS18ATGxZowR2MoRiPEqhqkpAKQ3uVAxVG2zHSBAr4cVb3brbDLj1JwPiZ5MitKn9MShsEqEytR5mYFgLww",
  "key7": "3ffgShzcXJGSkq8xBqBM7iKtCaVEwi4pUCkWvinYaUd8fhLzWmTwikVzM6xfETUmsLyhG9TD2wbXgArAjPmbqyXT",
  "key8": "4oeVxLAGyqieZV28iqrXcQZWsQYeWjK5niGJA4sfHDx9qdiJ4X9jUDSSVgJQPiHy37acv4DPdx5WxeWCFuEssEgh",
  "key9": "5wDEqXf15cieCZUMYku3mKrEDqdBkTHWFtMVJuorvrtgqh37noEDrkRZEtzQKhfxA6onFtYzsdBK2zLLYgiCy67t",
  "key10": "634HTFxSHpu7m55nrd5qNcFMQmenfXaVFuAtNcvhesaXaC8V3F5kLqSWrYjmv1XJuGkc1LeqdcyMkowQAQFFCaDW",
  "key11": "4qFArkYZb5VhTvuXpYY49dCQe7HmQWFXMh5HWu918MXxd8bm8S1H4NMuoxxmrVf2e3EdF54frv7Khvos7mRqFCF6",
  "key12": "3JtGdTVx3ApUanQqwxsoX2TVnoUyxydisUriaDvjq8qB6sZyWeoBgXzheME6Q7ftznJLiSw3p9qGrevwo826qnfH",
  "key13": "spqTcnZ5gvjFJwdYrLcTviGbAQVpjrB55BkZM6dPCqnLGfn8uGfJ32PM2XksQpdAmempCABxV7ZczBfcJLuW9jQ",
  "key14": "4ytyFNBAfvf8CaDJCFJbKspRimbJ6tGhW2zBEvCnbpo6Qxw5rLVu3X4morcHheYaRWUCQ6mt9czJwFHT666shY4",
  "key15": "3DC5cXNcNN7bR9aPMs2qu33DjZ1tDEdYacHNQsQs646aa84DEmc4ufQTziRYezbM96eTmo5NituDBugw5nU2Dr1G",
  "key16": "51quYAAUGF1JmiBCEsjnhJu3pgJdnFDPnFkPxWdtvka9r6NwJWvYp73a1WcB5Yk8iyRa2fwd5C3ZLAHTGiagure2",
  "key17": "2J2u3AkU8EmG4HxMmCefsYVKb4188oriMbnamnKSQPcgUu7crdRCW7hhS7rjhnnHxgVqTCwUwLbfAAucrNunetiP",
  "key18": "2Rm1zQJCPNgXUQKdzMGn7g67RsWW621ePa8wKJ6R1R7sh4bLMaE7FvMqeJKw56UTrknA1SVDmRb49ZCsPkRTREcb",
  "key19": "4evoLK9Ynvc4Acxror5YrPCs2JFgUKfKKbije73o8aL8bhZkgqPLMYE84PRGAfGhdtP31GQC5GvrcAP7EJ5v7pCJ",
  "key20": "2WBwje6LBP2tX5d7Jxtss5iqqAKZGBuDhZqB6bs64uMpZLPZZyrFcmGr4dtuqHRZpnkYVjhF53darKYzoFTvi7ro",
  "key21": "5z6cf4T2wuPD4EL8vSbxwXM4DTqPsgzzcryq4yHt1f8buHM4Uw2XRCGSb36kDA77HnF5Ckg5E5zZkSf32WJ1J2gx",
  "key22": "29hw2t2FC5mqtxnxV2JLttReXraGijnYfLNM8LW9bK9JY6j8jfuyPbXT6k3WFykMNYS5kcEkV6wnvsgTLUNSXqjw",
  "key23": "4PXFir5HpYLWUMdt84fQkptZB6AZ8ZRMCfmRQQBJmctTk2x6ejQtWE72YNS5FZeBino1GyVpyrD3gKA62xnhCy4h",
  "key24": "2zpbihqYzU9nyvnQGaXZiDEhW6vZjKMc3yYfd3K9fJqEkrkLVohSqSMzwsCs2fsNE8MqoTwh5p6fY2PYpvPBR1Bv",
  "key25": "5AZfpky8JsQPJhiHRiWnboPgGivP5nPUXooQJQyJ4vfdc7WBCLBk29GPS6HEsTkH3UoS6ooRc92HpwWQ28YJQyzG",
  "key26": "35SiMY57LAVTKAEaDrnjmwNSeSvE7xJWFcvSkb7AZciRHiMZ2TkP5FP5ZrBjV81fQRLe1gQvdzBiJdEddZqf7ZiV",
  "key27": "4NmrWYdgWBN8bD2SUN5nMXAoMyGvp2bb8JKL9BBzFVL4sZpkaK9fE46CUyucVKBqc59Ur3eLDzygCSzNMtze4dWs",
  "key28": "32x9bts1k9Y4Qxv5sffUYb2pC1UervD2noJguwwUJdXPtW7341r4kw3VjoqV3f7Kh1TWN5zr25KB3LvfKXDhKzUv",
  "key29": "5ZRsSRvaLr6s7uSzBwBCpHXjPmi2cbpgKytTivWT8ma4KYc9vQCEfRwHLJkt1oUgm5AVmFUSYNBtFM9iB579J4h3",
  "key30": "3HtGbTigRsZoR9Cu36U7NhPtxKmzXRRtnNGX9u3e82bop1cSkvDbwV1EwwdM33jXNwZDXt8f1LsNX1NuMm8XAgdm",
  "key31": "4TuiB9i5zDsmtvx2w1hn1wvr3nM4rsYen7MTSzAYaExpmXvnAPhenTWRnmF8At69qBcRETU1wNNmPQjxXnSZug38",
  "key32": "29z5GSzCPY3Y2tQTmT5hbNQ6AA4jhR3JMDgnWJA9yojRmpc1VSHeq1nPfqK9PjJNGMYQrHXFtnCSxstkXuwUCMyP",
  "key33": "2SqWfSyPumqFHkiD21QSTGha87FedA4U33rk8298Wac2gcgbYEyZigaTyb5D86hVgu2uQUSb1xstwVmuH12FpRvt",
  "key34": "5NHE6evbe9VmFcHJLmEf9cAGJUJRK7vX4z8MUk7Gy6bJe3Zw5xHoc1VYR3UmCrtBQyzfxia7d7bcLN6Y6EXrD9aW",
  "key35": "24ghmuG3eymsbM5NDEcqXF2MzSLBpc8JRaZtR1mwfigFupDKnYiQC73x2gTpE63ZXYuGe1EK8GDTTwyBCgetGGfy",
  "key36": "5fv91ojB4mKtcjHojgVMWYe5k3NcRuxPzJCZzB4cuwVxj4qUFwpabBQXXVrzo7o9ExzEQSyFBGJaKBHyABWTt3t8",
  "key37": "5m7MCvjjtGGfZteSEy1znbNpxWgUvCfWLkLBNSQXdmmZy95KpnfGP8vKnmt2EuHFCLCrfAT4hEWURpkJ4aMz4xKd",
  "key38": "4a7oX3xbbZtyfSSVua7Aut7wiC6vkX1ckbPvKYJPTwkjPjbD4bTUmvbCEeGRXB3qEoDSZuZSc4wvy4KGRpmqgUHW",
  "key39": "vEEvM553cVWWgJxjRiwynQwaMQdtunNpYA6kAqW7EsMbuf9AAdPJhaGuCrD8Fn1BoD4NKUhXJVTj17LBP5W6Rit",
  "key40": "24QfW6gH1K9jEbG5D6ks7ZvoRVktUnNBrzsGg82jSH1WRZ1HzU7eeUGeUsy5FMCtKeLZ1kSHcLdJegJHPqRkuNyP",
  "key41": "2HZHKk1VmT3Fw32wDPb1rm95KVVLdUBz9LKexnCT6qPKdunHDVHvcDy7Uy1xFHUfbEhMQQnztjmo6v98pXV5ZiTa",
  "key42": "27RvgTfjLFJXfu79j7GHHNS8h3ST7e7x2kp4xkoyzW8iZzpCTbp4CssdRTFRfBcnXAKckZeNyVEjMGzgMhiyak69",
  "key43": "4Nb3bB8eDak1kkxYDn5B694RShpWUFuVn62rFFzpK8GfejtqiCUuuF31Ry6xyztQsaqMuDu7uCbAkEA4WrPMnWGM",
  "key44": "4JP2MboRdRu8mbQzQCUyr5zYjpgbPFWGPSxzACuJddpagcPRuqRs9N3aGmqrzS6xTiA59njsxsEw1DAKktys9DAa",
  "key45": "55rGTBDaWC2aT36G4SYaSjfvcRbJGYVd1GfhkaoqWuMbcu2pB2onHWy1PgNxdq3zc9msBdFny77Gcn5ze9irfRi9",
  "key46": "4mrcGLrQGSD6rL1HUp4kNTMb7JZ64A6o66o8jVhHfPeEEQe2U5H4hnjrbmNwpmbp7Mg5KtxFqsiM7fRZtcjRxnPq"
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
