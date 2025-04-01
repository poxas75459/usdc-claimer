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
    "3SmAz3FQPGEfW7oiStPcgZTCey69ozd2mADD2ME5vKCvwXiczjmVLqyFdtvUYdPNxcb2tcHNJiVPKQZZfrPNhxtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WyspbtzrfCP3BtSwrQSkpU6Ws2MPLhEDwT9z6EZqCHwfFdix6ognKqZ8aTJMd4K2cP2mRtbwH44MsnTVRvzdGfx",
  "key1": "6VXeVvE4X2gALtwQWj98pXP38GfEDVZihC2m8YH4U83oKZRiGetwKogBy6HHkQSnz2BMqeyrX2cQKeZD3TgkicE",
  "key2": "2JCTRAsdg4kBfNj2Ubrkgg1sZPwb1ESXeNCbanR1bQPvybVKHaMSBScpqbqVaskXvJE7RZECWBiT1sE7us9Uc3Qk",
  "key3": "2WMRcAVmqVp5wnEPCvLQzSbJtT7bKRn957xsFjUjCvjHB2V1xzB4or7nm7orp6UBkEcnUcf2QjusNvPhdv2VLJ1d",
  "key4": "2w78uAb5vyEE1AtsXDQXJVdeP8kxdmLhoMWHiEob7uaY2aDnhGNnnudsQLXu3YU4LbJvN5jsoiDbQ3NfmoVi8Q1d",
  "key5": "3rfsFrZ39vut417Dz8JGV25JyEjJAiDqVPtME2vBtVyhwQ4Ri3zDY1aoq41fU9nLdUA48UQFaXzFEhQy9JWj8gWX",
  "key6": "5iFeHr3j5zGw55pupiViXwxwcVXkSAPk9n1yKhWMYhR8cLPveezVL1WVy63fcKF5W5tLgmjN6GhQUWCnc8bP7oXG",
  "key7": "5t5MwsTgNQ7owrVXwGBgJvjTJCA3Vp2rbohibVCYeNbrSbfkQVmvMY2ak2gtWpW2czWvSQPY6qHLAtMXDg5LxUFN",
  "key8": "E347Bk1w2665UVBM8n48kDXTHZhpvMZWLNuv1V799Wn3EpLgFmUe1EqKpG9jVYE1hiSetTLJq26o12pPM6LYrf1",
  "key9": "4PWrFLUHxtbTcD2n21Vdko5u18XmaqkLXWS9q3N2CvPGAJB9gDKNfvVNc2BF7o7VGcb5fQHqoKP3mTdwrCeXgxXq",
  "key10": "YMqFPSZPXc77Y4vjscK8eeRrEgoffyBNHdQUxJFeqN9GG5Ugmykh91e1nedko9pe6hKEe9YpLoq8Zk787XM7HEx",
  "key11": "5De1ftLWsZyx5m69gt1ph5KHkSRVwrhx4tktLgQ9wgsx9h9Z6MTB9paTmDEFd9GwPVPio9UpfrBXrQ2LFBPEEvaj",
  "key12": "5NhUuU95KYwanFxCF1xqnWPm1cbHnwvzS1GLr9P1FLnfAEPvjiZNqCMkSEiFqU7YQHgAgtAzHg7ZsK9mfkaiGr9G",
  "key13": "67ZdeD2Yp2BNazQrxFtDhtifZdZB6QLNKBtJRLjzf4YWEgGweLnmvJz8irYHaPE8nzdPG87duEUaoXMgDcCq2zCS",
  "key14": "5bAHfREnLdWRzrLEh5daxAwXW3t3znXsuF4uBogf49y51fAyTvYZWhNAY7jeG2fARjAyuUp6Jv2PKHXK8vrXCsdB",
  "key15": "273ZF4VM72ykJiMU6XhXSNDeuC4QUJMKT6k2ijjwciyLzz2eWGPUBiMqXG6R9gvVYR4fg7W9x7734f8b3tvud1c3",
  "key16": "aeZVHdUNKrRAVKyACJxnuFp3pQpF16YguRHT92EDzsMSZoNNh9CiH1xsz44cZXkW1SXR1D2vD71b6oCburq6vQo",
  "key17": "TiwUb7SNhUKCAVUgoznGHyHH2Dyxqz9S2YuictHaSVr9o3qrxWubNwfenG3c1rdUmoYuD6HbzZ6DGnSwhUivCRi",
  "key18": "48stK8kAnsQqrwK4tPmavx2kvPUvC7aV7Ln2TFZHsyZfsaf7mRwrbqhYoAqmZjGtAMaTyqhv58bg4eDPHJc26jzH",
  "key19": "4pm5HZowYULDpfxbg9NBPeZez42GeT7hFDcEmcaoFZZ81aCA4VaAFoqGQzrRjXd4eEAPvUckVvx8QnGLNTF51XwJ",
  "key20": "2d8TCAhqmGBbj5rdx4AgRBkuZ1VMeV4ype1pM749qkmVZdNNyiLejM43KuWWVPVTzaQWXRCkRWjsy2r9TDNaZN1z",
  "key21": "42vDWmDmLk8x5qjYkzh74XtBVr3K8fJZ251PhQa7jnHoGq6Ma48Z33nLhyrP9gaSRXNQirwnhYqFHYYRhgj8Mw5h",
  "key22": "3YJkmrUGDwavdq3YXt1AMLiALz1N4X3foPbSJRzCKRTc5cQiV1JW2KUWxLEiCw5Ss3g5fP4rTDGrkv8ek4b487Pt",
  "key23": "3CLJ16CZyQkvjaQ6HXX7v8uEWpsJRNq1EBzwg8Sdfqz58JjertB3defxKSCt2X3GrM9Kzh6Nc1nyaW6Nqp45gDup",
  "key24": "2zMt8Hfb9BCpZhQdMx8zcYNXJM9Ss6pC65eGVVduyD53zSoR2SqTQ25Dion7k2LB41tBmnKhyEhFMyRDZS45ecsp",
  "key25": "3oEGGMTekHkEbVEbVeSDwYvRVtz8oK5Zdi9m1TTJhVH7KWmJVHygZaCiYgGxib9hka35u715JWEcMcjqDKNcKAzX",
  "key26": "2VPkndfF4bLkWcuFJoNLBo6e6LUvEizMCCCC2XQiUCHuSJmF5sExCFqp1RmvPWjYcgGvHin38GBiivFE5fzX5yfu",
  "key27": "4Sm4qW5rYWu5PHQqcsgXhWaaXRUKgon5QS27wT4xnUDLaLCQg6fZqd9aECJuPsxKJRB9yTnJvBhBx4zsKow4LDzH",
  "key28": "FmZMcSRWsvPKZdYfvUtR7FywPuTjD6WRmaqgJJpLMrkX2d1VY9kw3zcqeGSZZwMpcL9ckS23dt1SMpDuF7rF1ah",
  "key29": "3ggzEgu1TSr3aZtJ65Wtno3zt2HEWR3P5arzc5PWJSXsxo6nYeF1EjCNjAALMbKw6QwRCHHWfnLktXh53oKtHz6J",
  "key30": "m5s4hsniT2br7QhMizLmv8oD2v3bgEnTyAU7ayPoqw6VuUaThmrsUMiWzParusn6sgfrhjnJz7X5jkNiLbqmoGm",
  "key31": "5id8dwSFAyAMYPCS5RmXnPG1Bz5cq2MubUXDaX9nfGAg86pLfrQZ287HQoUAGHQA9ponCyRkC2fW6L1127E6miTZ",
  "key32": "5zyQCd5dCWgeyJVScwcAKhFCi1LKpNyvQThhd1ZuDc8NAjJXMm2NzGkWjGa1Rg96Y9v7QVhNEVncJJjeWoBANCbS",
  "key33": "1NgbVQiEf9GAufN9phvVCZGwUvNdoazgFkg7zo1vi6AXhr2JAX8QpCqPPeVA7T9gNcosAXth2TLyBwRaNF4q9o9",
  "key34": "2b2XwFcqEzdRmpan3RXzjAdtw5H55SmB4z6A7QvR1ANojXNFHJac29LZfUf61a8oHGQQEfhoM1VDs7tXPBEHZLt6",
  "key35": "39LQwQF3jfunieHd681GdpeWjGRs1eTmuWeDm9v51pocTSbK6XT8JZURU4KzerJ9LWtgbo5RUFrBcE83K29EMgS7",
  "key36": "XAQGSzGQ5XonNqb769QGupEPP5p8p9ZP9FX9KujNkUkXZmHk57rQ8Bk5SiEhYzpLEk79x65UXnuUbu2PsS5A5gy",
  "key37": "qU8DC86TdXm6TJcCCEwbkRuH3xtCzeJWZ9MAxU4X4QMoTFuoE6BzpfgazkMYpAwSknndy8sqnSBDekfThkW2FqV",
  "key38": "2FyL9P1LiG4xVFDzdhq7UuketJkLPgcrChEs5FxsGzEC48ehiJ2fwZxXgxtnSauHWKuAM2m7kGSiZHdaVpahbQpj",
  "key39": "4SrAFHRP4QeAzZvDceBqUpEvJspxM38YH17R8i1eCwTF8DzASj93dd4UW7ZM6hZcp6EwmscyijvMocDFYazKyK8S",
  "key40": "2emrwDy8QGLAe8kXmfBbXudAob3i56H8LdGyEPLDG6i8SPNbKhu5qRv5XFjCKuCkXqbLeKpcVv8RpDDnUq7MkCEE",
  "key41": "3QcCqcF3YcrBDSuR2rKo3kqoNJQhnmkWWwCFwEqSG2Vp67w8zPh9xP57D21g8KSodTAgTcPgWeRrk7PLzcb3E8dN",
  "key42": "5PchYTfixYHHVVcfYnQFLU7RMwV8BMpQmSebQ3cExm18EH1Pr2NXYJ4HpVAdR9imT9WgBp5MJZsLQkJNe1BgXb4E",
  "key43": "4jmvYVjPrTujxkEqH5J7fGbuZrsdsu8C7S13RkjxUVFfLpa7wYXFf4HQdGbkuwScfAwSodEqEo3UGAUbuPKdcWC3",
  "key44": "2Sc9T9aDEW1VabvE5hmQfNrxu5V2fp9Lqbz4VbbKmvr2W3jpw523Q1d3GrxEr7ZhfphMSM5pUBraPVGTABc93Nr1",
  "key45": "d26JAkTbPcFfQ8nAzMot5PPHRAw8HQxT2VQnF633GVnS4DNjNYcFcsrV6t3f8xsPWeodoZV5nfRHv9NYwKgX2Hi",
  "key46": "AbXdQo3uAf1y3FkntgLcMNfnFjffnsZSChsDKPzjYt7mBTCTA9anqUVQRDrbNfuF9nRTeCkqpMyEDKSDzHP2KH8"
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
