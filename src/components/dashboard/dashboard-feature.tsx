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
    "5s1G76QKwNF9r5NGQj8Mh8xAd22uum2fAyLSVBac5tTkn5dkQL1zxgKa6iv1VDvgSMvwePnMC7fRk97tbaQtbNWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V5cx3iA5rGZXFFKcEyZPgbaRRTLTMoGaqeUxsUThFfTq7yARG3cQJZQdVhHDhLAJRL7mwCJEnCZVvenwaG2GdqJ",
  "key1": "3YUcZqdjE5JVVHe4R1BtkQKzW636R1VHbjzbzdc1agWB29tBUs1DYkbu2o46b46f4c8jCfysefeZohs1UipZX8R3",
  "key2": "3HX1HSvr77hJQ3LG2F8mr43EZggdR9vHHyJwD4yezHEJGBcT2pCPh7XcQ9TSRAss23vJsn3TiRjm5BHKpBRCCW6n",
  "key3": "4jTKPJuuRe21o7NunjbWZaDphE2sFQbxx4VSvVzAARaQcsbheKKPqSHzaehV5z7XHjwwdvVktrAtMUFUz7aaqLcg",
  "key4": "2c31Q4Y6xYWp28VNLKvcG2a23jCeJ7wf3JJc1Sv3fWSYcCHYBTe3L5tvmxHqWRE1W2QYGxpDpDgcMP9hGYvWK8FT",
  "key5": "2uHnSoSBQUNx3zcfnfv64ReRVwVhA7GjD1F3vPVWK84SY7VeRDgeZTP1PJ8L3h4es97kefCrxaiJn5q5q771mTmy",
  "key6": "3ik6kn1xZ4H9N4AcAcvzupN9R3EQd82KqRDcjmKZXeLYoa3SDpt7fnEd812K3rU2QsXmYfBSowdQAxQvFRroEcHn",
  "key7": "5o2mQVC8MRwPfGF5u86aasQGu6duW27bm9y9EBcCAz4tPECaUTn7A1WxPEzPRvrFK4SVDhcJG5oPif2DSHVB8QxR",
  "key8": "fAdEUsyVQpfFF1zm7pUbXgp9CYTymLHYxY3StZQgumEKgf42cvto1DivYQaH4mjucHfdkzhMoqafWLMeLy2oc2c",
  "key9": "4dk5xUEDnbkJRaLR4EZEZNVgkYvBGFcUNQiAWx3jQpUDBGoqjdcycRevqmHp1gU1DnEuEtpnAmLoPjAm1bVk1rLt",
  "key10": "5T5JWj1xVzWGHqYkJc1BwqzYGQdnhWC5TxS4pc1ajLtLjCV6MmnRpUqcsvWp9qbiHz1o3eXn5FuWuHDDbH56sbyp",
  "key11": "3fnTGENkV5k6KCxX11Zr7YvC697eBTSVfRzqJ3EzdLbGVYm41fPcvYdgwwMtHhDjs4R3SusV3gpADszaKXAMuvTd",
  "key12": "a9KNjjzPnLEVzrTR82jmoWjpRXxjDyxzGN5qgWCdgZ8vgxk66Ddzu6Js8sUiptsD9GM8QbaCDromj7fAmRHRvDj",
  "key13": "3yrCXf94ME8rHdD33YusKovsbJs3uyA5BZGFGg9eugA2pRy1sXwARTFxeEXKt3pBfkmT9e84UzJB8EWhBypE1QYj",
  "key14": "3X3idQM31Afp3ouTh97rnd1RP3KykrQDuMDG5kkL6S2wughFWRQA592tGAnmBjvAQCgtKcvHYd38jYDEsiDGhJu6",
  "key15": "k1JrvhVUFcsWanLbRpF7ACGaUrhwbpUghKycNFjTanphFdZt99Ggzpsj7y516kZ3Jgcg3fFyEepC4DSQq8N4N2w",
  "key16": "5ZvgJE81Dig8Cre2HRvUh1yTgXwMS5v4p9VsfnR1wUGfBUHfbsV4JrrKJGVnk2B2PLUErv9eJfpr2qfRktCpsvmm",
  "key17": "5u44qU6dZwSmTpnXzHnVrvmQfmWPadXJpkWNe9GQLai3dDYEiZM2uJPbdAWDzmtWLzgby1fUfJg4rZQAFCLpum5X",
  "key18": "3266A5zpXxzgzr16Y8VmDzWrvMdk7CfKnv7s5Rb32gtuj3h7xv7XrpxvnEa73FtmmayrpraaVXAKqT2ytm1yJPJi",
  "key19": "5ZPCP9pBw49iQDE6wnxSBovJEWriL8tqjthdRMQLpxjQnMXUUPX2shiLVrZgQarUGmjFXUhdVLXjdWGXZnCNYUcn",
  "key20": "m6BS1iqrX98G3T8k9bpC6rQT75VZ8Fz7bRY62po6fWpk9oZnDvT7DM3T8nnkqdd132SBEMcHQPo6tE8XRHRkEer",
  "key21": "37cCYC92Mfzop1NuCnyjA3fj7zxbFDQNkv6mzrriVgsSrvXPsuWdLuguURiK1zESdutZPcVBiHJAftnyiuvrWCAL",
  "key22": "2WoKrtwrmJvhSp45frh5m9tPztJ3KPzf2XBjX5PMRiAFmH1h3Qydw4B3y2ouDC47LisZggtN1tjAba2eHxCmnkyg",
  "key23": "3hLoK6PTsa5mjhX7oVgjpZcVGw8fiMw3JS7PMkRCsdyqug6TBZ8Kbz5pVPVfPBiqFPQC8F4QztAQxezWGzqputmz",
  "key24": "61FKVmgP7QB7EFEyp17kDqM4Ydaw4x5wJbmpzpAweTAvw3FQS8SbvKEM2CaYDSa3ugDXrQRuHzUyUy46ex9y3PZZ",
  "key25": "329YLS1proK2sHywPHKwyeWkX8VSX6nZbEAVb6rymAeYJjKYNyyPPbexmgvHJMxi5VqQ8HF3fhR732yk2C5eEGqj",
  "key26": "65NDhc15T6BBiYwCeZYtZfyc8xzoEfoQRiEU2cm6B169ZXX416nU9LsUjVsWzEn5izRc2U1AYsuZ61yE6NfNbgWp",
  "key27": "3dCj6H9uiMPrmEyktrgFQpM8dXE8Eeurh6D6XSxWYgjGCHYz7mSDGzkb2VtnjV6UadUDxZE73T7iKqENNrJRwLA4",
  "key28": "2t31WLycnY1T5a75YgPXtdZsk8vgoi8Q17f7N2oHiYH872ygtm8ABLwbPGe8NGyRtAa7JPSLfzKChaKLahwivJhx",
  "key29": "2uQxUfRxxJQ539ApVEso8F8j1Q6UyTE51AsRzQr3Wwhvpzyi4wHfQQnGnY9g2ub7HKPPnkyfNDzWfpkyDMCciAnm",
  "key30": "WKvgAbj6fUJWXN627smLpLKw9KCrwf9zLiL55kFaS1pfjMRKb7BzrNNzYbVFvchVi9VRoFURXsS4ZuzHcXphTap",
  "key31": "5RuXaGRSFd6nBf8xovGBWgoFpcQjy6ww8Q5WMtn85YSxjSTDU3f8xgJ2WRXqWHJd1rWLpQ3G2zD1s1B6SGkQW6yW",
  "key32": "28WwPuQqtbs2gGm7WEbSqWgmepLw5JDgxjuwvkUu2MRetY3sqJUr9qVKLGQP5tQpUktq8wqQemLKZgnFdRTaB3dd",
  "key33": "SR1oqJutkMQXJRsPuRr52itSmR2ZSRHGh36u3QoAvAEYa9NkpttemAsQ7k3S9Gzkz17LsrFxbRw7AmQ68zrTgoh",
  "key34": "kr9SzutndkKRgURztAGB5Z4Xw32CVRmHgSPSujLzi8SJdNfi3w9Xzaw1yeAvxH3b5R4FaH7FXKW5txitHnTJ1pT",
  "key35": "4y3UkTKfrkxBaxU9XyCNUGRtHxhG2CucvQuRZuVhCVdU73knftwhXCXRKn9FH3oY6MXWiZq9w7hDpoUNeJG44aB6",
  "key36": "57khEhnP4KuLq9fQ9y8PYHzFusQoShEX18eJX7bXhMEZ2gFtxTa63Rz7dMLerQnaUuCY88ywunpwtUXAQhRUaGsV",
  "key37": "254Ki4uKtVxo1wbPqvbGW6VPsKMaP7GeWU4ynzDXUboLCiLt6zWR8YLxk4MxvcTDJ4LpbcsBQdJsPNzFoXUqjgNM",
  "key38": "5Xfw6iqTgo8zCxfkbmjUzRE3SDvZtyPZVd6dmM7Dic7rbFcA38HfCwFkFRHotmSgr6Pf9KuUGqPYh2NTPN9n4ADD",
  "key39": "p5HvbPiKfnt78MtpmT58nc6nz7cm8mRER9x6adeh1TJKomYHeozEKjmK1cbcCa95TVWt7MCJtRHBc7cfmc7r9oT",
  "key40": "6sbvEj84Lvv5BQXoFaarhu4F93YfaqzJ1LXQWojzd9QvKWjn8WQi7KUQ5mBRmHDuQ9Labk9feQq8vqArtkhCCg1",
  "key41": "5iq3favPgh63EpZg9WMkrnQiwPLFSneRn9GhW3R5dGcDypyFWcQEunmaWGyyKXJWTKY6hWC4vqz8pMq1VQBujEX8",
  "key42": "yMhLM1TfsoYzkrf6ST5NnVea1C8duGdM5kGhcmczknmKXagYvPxJMLcJPE9jbE5DEsL8keUtveJHPaamRxA8Vcr",
  "key43": "nZzE6UVo84iaXscpFthjCvQsNBwo3BmUzyfTUoEdfnNeHHfv2EPDaVuE186DVhtsCWa8b5742gsj7oLvg2PaANa",
  "key44": "3jDyazJ9fdVMdKWZGfwQcU9E1LE6j2ppN7WN3AJ3wG4wSiyfrnTd2e4uePBzHg7SriRvf4qnDtGdwY6QDE7u1Lyg",
  "key45": "52X2czqb2aBAyw8SCc4gHSbQqZhHK5bm5siHMvwFncyUnEZYpZModfm7bPbZy1gyBvXSZtV3eGyrDfx8cYuNhPSF",
  "key46": "4WKMePjQWpAETDXMuQ1CaYDKwsVhGAkNkvCQmyTQ9i6Vwb4iRaq6cJJ8pHw6y2HLEkoYyvbqnp4gQKV41tfHNALU"
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
