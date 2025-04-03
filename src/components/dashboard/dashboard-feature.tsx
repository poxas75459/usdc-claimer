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
    "2iQrr2ZwSBEr6m1JPaojZhEdrQ1GMkNP4Fdio8zeVLHxuBuV3XccRN2C8RQpH6dgZ4pY4pKCKNhpSESzXVERbzwp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B5CN1WC8NSNvskfJrUx6wks3CRsgv43Q7AESDpyN22o3HxvzLF8poRoqi5NyU7QGLrMEi5Q6hsrmBwWTbCLMbjy",
  "key1": "5A22b9tSoYMndkghGYg4uSVMnyzuPeDQCnuoiFBcHMs4xewx8HTkxtcEExSvbZ1RFzdXc9doofgqzQQfeVkUvqYz",
  "key2": "nZm8B2PdL6zZVKj9yGZmNuuaFQSyfc5SzgxbrGTsGnoFPDq2aCCQoeWLc5ouQHQzCJxBJM2vZrhxhdv3F8Ph8Uq",
  "key3": "3xVKK9YzgtBVxVjLw1AYaMdtm7xFYuG5wnZvTh1T8ssRm3LrjUZrhCkZtNBRudoJHhZwzzXBeQaWGnN4xJfByLYb",
  "key4": "44UUjyNHaefWQ8Wkp6AbkH9wJbWMX19fam6gfNSWizdi2wzVNtkqJRr1DrVo1eFQqMkcS5gnpCRzNG9xYwzsJ23y",
  "key5": "61ubNrsPcTsHDwoqcJvTUbrBK2uFivmoxJytoQWgJ4q96QcLheiv5i949ng8DBArQqYdAV2MrSdk1LL5yGH1nnz",
  "key6": "4s1St8jGaBgZUXM46sfB7bWs6PTd6sreu8ZCzv2gsqKKtFRKPWuSua8AfanahL618biqQGAoSe5BZkwz596AthiA",
  "key7": "TQPj39b317Jc18mfmsssKdpaxvWLu1ArvBmJTLP92hgbe5SqDLBvdbVpSWvXJjMzDNS6sRCjyxoNnkBYQVuNJWT",
  "key8": "G94KRqSzkeTZfRL2GBfEi8Qq2H2z8A3rEyX9PwNMVRdB9hSMLiCV66A4dS7iKWV2QaLsVYGAGMZJR5RwwXmgY7j",
  "key9": "6RLZzKZqE129mQRoHf5N3wZ8YGQ25QFuFjSPwye1T5vCM43wvLetvbXXTc6ZeMGuCFq2rwR4xZQCgUhTE5nuXzv",
  "key10": "2cZLhsVuy6jeTXPr54CAdkMTZ61LBvswC55urTzFrfxHzAnHF4MBk4YLeM9Pz3Bc3aoZ1mBqZHWifo8ktf2VrZgW",
  "key11": "25scaBWZsw9DoK5oiDBvxerHgTTXFySZNhFBXy95yMDmPeXmhRRGC8EGeYAaDxcxoqBkNp2D6JZMgFa6dWPxeeKT",
  "key12": "1BWjbys22cFRvrT5nyutiJRymPUbrR2XLrSnS2TCR4CzPQhS3GJYZqzhv8Dp68aFZ8gXQHj5mkHYxe9ujZWZike",
  "key13": "2BiSnGcLNkBdy2KCLwbUYZDdRGJHKGePXJWnxLGqa6uzD3nXynAzKrwc1Bss1PQPpb71NY5p5yEmdGvyZc5RjuUE",
  "key14": "4CRh2wJu2SBbWdEgPwcFAPep6qqyRoqF5ABgzrmz7u3jjpG7XZmjPqC7kibHm98mSFqPWoBamJfoLBP1fLYuGyEt",
  "key15": "322KntsEy5Z2GzhneproGAd3wjjj2PxX521VPMPrsGd5URoM1sLQz9NFh9aNgd9fo7CWj6qosHnHFFEkqo4fh315",
  "key16": "2TrcJdz6JPXYEE61yFum5GoDLG112GHy3GSkCcu6hVGotjMw7tE6TQqunbZcBt1DYpzgzraypSkwMp5b3enip8X3",
  "key17": "2qzthNsZVDECe3WqPYMHNdg1ZDDvs3hinLR2eUuLX1GJ2wpVvEXQUcYq7BqLPa1swcV2YDw1xyW8Yn4vndcN7aJ",
  "key18": "2y7PL6H7bnzPtPRzBqwcLfP7aEAW69K9yfDXNXPLqRc4zxoEogdzk3DQZchK7PUS3Cf2t6Nf9rBPYUuKfX7NgE51",
  "key19": "3GEQapMrrBjmrt195d9WPnvcytLMDpZ3vRKJoGM9DYR3iWbVdXbEQzShnLZw6QD15Tqg4gQsNF9Wq2Fa3smW7B1z",
  "key20": "4rAV3n1jx34uEpxUnNapxSqAjpoHgHXSrhFwiR2VdS6yyEAoH6ga3cruu5j2GdSoSZPgYYC8ntobxLH4yMQttH6k",
  "key21": "Vaa4xUFpmVSAxuYueZe4mgDXjrYhefxCt6bWpyLbCtJrjt5mbY3qdmzKNnGC8FbFSXnzJAw8W9uM7PGFmQaaapy",
  "key22": "4HadgZVj1jrb6z9drsWRZiUsuc2bcdVJDjJgwRvyMKct4VFJCYT3vEEqYDJ4jrS9ARxnq9DM5ZTmJuTFJ2wwUp3G",
  "key23": "5KGhULR4xUyQS5EUQefgzua7ZsKH8XAvi9ZjrM4UAewdwVyk8UEXogQGxxvbLTowf58JJ2Yujb1CoPjRLgEpJiyr",
  "key24": "4iMFW6HbpeKqcqfiBBM7UFnp2c5fXzqcqHrFDZtixK7AAAYEvwX7yqrwgVDieo2xnoyBiy5gKcZ6zSbSGSB74Lzf",
  "key25": "3nRRjctwFirfDt5UcHRWPHVGqDcioigTfgQgTzcPVMG71Jh1zeLtMHzqRJXsBFiQfqnmUcvjpZvkTGADM9tHSymi",
  "key26": "4aydbCZhghAFhvdGznePDRZYKGptwRaXfCuB5v19aeiKo7TAXJyEwCgZsQToxGtDmAoCBVqNzLDkWKA2sCKGR53Y",
  "key27": "425JVosgqPf41TdbA8jwXWTMJLzbnPPJRg6jnvGbnB6vsmGFidvpp6jA1qBooXrS2zyznuRCabhoXJQobQ7Da2DK",
  "key28": "3duzuZhD4WJx6tr1eHQAFVVewRCZRJBz9cGLaykjXaNsK2qhR7AbkjRKzRVd3oQCnxHAJry18F7rXMrhKDp7K8Bc",
  "key29": "383kDHMMcNa2j4nvFBYeoRjC6mkwGx3LAJ1ADBDM46pbuqVskx3nyRanjmBAECtH55KUtfddiacMcainq5fQ6pvg",
  "key30": "5xW5uYB1j2oUfumPRqnRSuBbKSzFEmAf2jM79XrCjyoMoZDzkuhgpTsrGnwJsF6kHeynJzVBJ4anzH7hxQG9MoqA",
  "key31": "46cHuih91gCFCFM2zQtVrcVvBdBo5PL5MfXsyeeEM3YMjxgM7mEwtaet3zKYpZomSaDJtH2XVHmU5pNKv2wWMe8R",
  "key32": "2xzeDLtKy5JsGJ7cMZiTUkZDzrc9e4TM9qkwBJns1WCKFQKcHBWDfmt3MDGRFPFTVpS1GXkfvQcxvgY5Lmjxkbb3",
  "key33": "5BeL1ginGLVptCfCrmoxrof7wG3MxFj81iTS9dGPSdhbpW7Zj3NbammySSr76pwN62RXuyFFGLmxq3vaptdJV5J3",
  "key34": "3xaVHaGYXmCEFd37otv64tWMZAwMYVwjPDgHwuqcPby76dsMiVHP2BU9zSGKPDs1xmQnAjPME3zmZqVB2fcraVtV",
  "key35": "2SCEE9UjQhRaTXp8qeGU3Q9jzAgwiM1DCP8nwUofVxV8nmMgLYyCi6z95gjvZeoZtVbX8h11TqLSFwKPQVxn5cd4",
  "key36": "2m9yHrMSvhnreiWd18RpBmFr44tYdZdWmRKv4TfFTscfxZYedXTfQjTACtHq7zXGFFvRJWw4LQJKAu3R7vi5YgCw",
  "key37": "3d19rXfDYCZRMTkqRMkd7LbCujHZvofXgKYaS76tbA6hC7PwGtywwoEN6MyHZkzrCscYQpo2VwwuqLo3Q77dbUvs",
  "key38": "4bkDsHWAVT65fv4kzGvTNbWNyhkSBJA3N6XbA6Azyhy23EWfVfcuCwjt4Rwcxtdg5KUQD4jZzUGV3CfTFht6P5pJ",
  "key39": "2cdrnM9WuW71VEC7cfwYnEMcYLVjSyTUnqVFtNKLYKAMoww5EHqDneza6aQbt1QAihhWDnMLcFH6MeLsANG1cQit",
  "key40": "WZR4E7gwjLfBiBFWh3MkNC6XNvej4kFHrv2bbLmNBKhCvxRPCvSxewyS7PbVzRiR3v1Hj6vB87jin3XhLJc92mH",
  "key41": "LZh9B7DQFaXzte4ijki27oCLrP9LdymrnmKxDpMojXX2L2HHujU9i9SLKinJexvnG7KuJbfgdsXdpmP1iAed9cR",
  "key42": "3AsjYYGrVb4otcLGqMSoFxpbydJKqkGnvPTyaWEbGimFZWz4fWQEEvkBsanef2c6WHJPfth7mUg4Nbiyo5wgtuHp",
  "key43": "d3BNCFyd6N9rUu368id4MG1yFdiwfh8E4ux91wGRGPZJtf6hqCSekUs3ep1JCRbSZGNrioWNhgDoGS5M5ZaF5mE",
  "key44": "2VZpYJXi25U1bMatXKDX9hj48aNEWt4iyThiuHA84mQ1tNnM9AN6eVLBX6BSXGuHq3uZ4Y41pkBBQkzRwHDsTcfD",
  "key45": "H4BThKBWzmKxU8Hhg8SQfY1gkxiTRMbeUcs78YoA7AxceW2be2oz5QuN8wu4ws691NiWv86XSuK9MxrqRxKXGpr",
  "key46": "UQaSysS8YK5pVDEi3LXx6kkqCHaxvzCCH5qk3e8YT7bvDh2PNqW33q7iNwCr6MxC6XugmDV2a1Mp6c9h4G4XkxY",
  "key47": "61LJ7SDorF6EZVwPrQngSVJRTYUnZZYmbfXhTXsWru2pQV4iU964Qd4p5CLnFqU1fPVB14QkKRng4NzM4b8WZAEW",
  "key48": "3XHaQ9wWWwxfhB2jx8d8PQHx4a3SiwRejY1fXRDx9LeqJhhQpFbszyJA7hFWKVVsCVJFGDaBVQ8mTMeCZxaLRiqq"
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
