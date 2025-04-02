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
    "3EfjvRDNnjH8HBHSStfbdMNAhRrnqM5UpdNVfv6PS2CoWPDmt6ZTfHcTjQYLSsk6i1norp3oTdqwn373kVgZZF3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wqdstBKpyaVdYue3pzhpj68FisJqpvdAmKMeYZ1cVokebTxHJkmbZKAk7ezkWbkN23uEeKZumjzyRqKaxip1iFy",
  "key1": "3o54xVvz7rRrxd9g1siVQuEEVSjXzMTnsM7Ryh3VyJmSxVptCahXTpXe6aNNMzRzSKjL4djH6r3QhQnNjPJrtXc3",
  "key2": "4PYgrd2jPDeUxGK9Y3CnvLtZCZJP19wEtJLAFMKH1BG1VYB9wAxCDYeEELeLfZWNXVRswJ3efpgHFirfHvs7ePVz",
  "key3": "5GmEZh3GjgWF2D7hXyFjNQEds5GHcxf3k9MxZ75Ruywk5YpwYyFiZPq2PCASX4DN61amej9at7zbvQ3RQnCmbMGK",
  "key4": "2EXf6W3S7u3AbePs6Sy452yPsot28UNBWxTm1wMntpFF1vv17UgRoPGQ6wL5HNfhaDFWP4XqXNG9AJxtKHmAm7wh",
  "key5": "2jkWSumZ779hQnoz5Y4Zb8oyNgkhkuuihRBnq5cjUdvFSpHuks7hkdxQc1uScYzH2ZgR4bpYFEvnRq9YzXwBmKtU",
  "key6": "w9T2ggUfKMhsRQEtugxm4ciU2nyDFMNom2AxepDp26na5GyQ8gfxzFNR94hqjdUBSLnP1qKMRHSUydq4PFgJ8gS",
  "key7": "3vW41ipLuT2E1BZq64KtGFqduQ8rKWUnsa29mJV76va9tYt6bF9GBNjTsoQTeqeKPVJnQDzbHXT2ADvNB7rXZMd8",
  "key8": "2azYWT2jiKFPV3qaSGz6mPu7gndRiZ4Rwei6bkCyD1Cc4yccgGQ5DHKPyMCMu7M5K71P86mnQ6BYShfo7fEPPcif",
  "key9": "3KBjtpkZszgSW7AwtRYtEqqzkuFZwdF3iLYR4KQtaeX6w2ierKvEZLrQpVH29wqaPDNrLfC7ZbYsfb3WvYpKnJut",
  "key10": "278ktAsj5r5ZFnXYb7L7KYMrUoRRgM7BBQcCQrTmNgQJQodZyniQf7J3kQYVG2grzpWg8Xp5iGSFnoyeRbLKRjUk",
  "key11": "2vGSXAZLmRNwfHPRLwn2Vyvq82M8xoBTooLQgDsR8pWZ8EtabaZh6yULSULy1rkWKFSLW3iAxw8QA6xrAcpNx4s3",
  "key12": "piTcT8dWCqJppB16q4TZsmR7GYRnUbqokieR3AeS6SiJqPRPdXPth2ybie79iSiMJJbwyF3BKd5B6yx8WpRN7qh",
  "key13": "4pVTU4KHwso2d3ojnfYBaqq1XP9oGziKKzUkhyRvebLQbUdNPs1qJyjiKUYP1mQrZ5rhthSM7o1yvnaNPrXgE87z",
  "key14": "3f7U8pxLkqGpnrVBMrKumN9RGjCqe4qaphL3CxHJPSnrRiBbexNS9UtpZixxr5vyyTnMG1dtgRj6Jn2EachR5xx7",
  "key15": "Nu4DoGidJv29uc5vNHEpbestfscDNWBWHtcTzQUifbg1CXJfn22vN5HCATgTMUUE1njxfA1y8fnbEKF9DSo3mNK",
  "key16": "4YTz3dPGrF6EQQZBMdbFn5N2wNc73mCg9oVNJvXbefY8myG4xrrzjU6NqkAGqteDMYPWegqoZecow3iJjw5544zQ",
  "key17": "5WjHrFtaVzPJ9WyAEvK99WbWFXdy3PWYLUvsFTeZL9u5N97NBRRwaZKyAgJQAuMGELtC7t93g3wsrnoVaW3VnSrp",
  "key18": "2ai65zVmXUBbZeGVko77fAZxCLKLWg1aNqQQcNYFbUf3TYddHin6DU3gUhncjrgBoDBSLmb1mwCuKJ8DdhjQi2ne",
  "key19": "KfSVVMa8iYL7rGqD2LnVSoFAQ86dDLWpFhv41QSXohBrxZemMS6X9bGtYmicDCcv43EpDZPyU9C93h6tw2FTZkW",
  "key20": "XcxDWuBo87bLQtNMGLPoJBrGL76fDZoxE82HSKEkKXY7DJYrziiB1Bd73vjnAZQQJSMJubBaSF673SMpjpAGwnK",
  "key21": "3s9nbpyEATDk2UyTiNmrKfAk44D4eQfA6daKFfzvuUHKuhxtYDW3FUJ8EapAYLqC74tB3V9ThTgAGAK4tAH9Jt6t",
  "key22": "4GtYz7iqQ9HArfYpRgpYL6KBjMkN1X2stGgfeF4aNCzS3QqarPcNqn39Gya5N6MyKxJwPUxR7Mc7HrALufb2azKJ",
  "key23": "48toSVbgbfbBBRZ7qmcCi5MurhzMJUWz9y9j2cVBCKAjokFV3WNsq4r87Pz8uC9PCCUa4NiU9tCncq2LyGmeVQ7J",
  "key24": "FbtWcvczmitGonNkwGcqRCaSvUjtaqZwUWWeaJYw3wJPFYT1oau1Rrdavcy91SewF4KV4qyU7enQxVqtbQm3n3V",
  "key25": "4R7ZGA8dRMkqYPsAzrV7BWH4oDh3pEN3fyHPcjq6SDLV7BWntyMgatFc9E1DSYn1G46ZnNfpg8SukwyGXvL5WWz9",
  "key26": "38AqTcyUGSi7aj6o7FuQdCicnpFoBL8hAznZWQ6ZTELQB2nTaU1ZFq81UymSDojjx1gpX3UNrchZd4QnNJ3VEbaD",
  "key27": "D9gSYbHigi45feViEcNNm8R3KchXVDUwMtxUjWJQFHk1wQ9rK2VYncUBDQrvR4Qkc6JCnHCxZAqkugtTKY4h1gz",
  "key28": "51E7AECjFyeYA4sVD5GSY8FXiFfyfuVmE5VPj43i6eqAunUCPh2CVmDpqoixSWvFekEgEs5LPAie2ULgTmEpww1k",
  "key29": "4z7B9tFTbdQUhvJQ4v58Ct8K7CL45HPjU6MgNrBaxqnJNqmLRS3f4NKLtdQsEeeyeZz2denDDk3wzauzAm7t8k33",
  "key30": "4bwwhY3RJtMYCLi8zJGPgrZ7q88jsduSXgrRYqT6ygM7dNBZrf42ztVie2Y1ndFQHfCaGd5Wrf7aAY8cw4th1EcR",
  "key31": "4TU2vwGDrNNTXhtxBe7KvtDLZ4cMKYR2CxujEGxr367MDqXsYiuvcXZ1sJNFHqqNzfg6JFm3YRS22oqu2k9J2LJQ",
  "key32": "5m9mGwUgLR9KEYioPoxg7QDDKHDLbnqyJ5YmLiGHseNe5THhLZqVcyadxzL56sq46ncXRN1GcsJVieqLZ6YYUVK8",
  "key33": "434AmdXLj5ncxHurh2vjirS1fiPNcDjcUPjxTKWUNU7yYY4TC9MmPHQ7fvc8rF19VkVqHDfjsgYFAb4VGQBsK2P7",
  "key34": "2YJosoFjii8uNMPLQSbFjHaQPSR2NEWN18MRmnwA4oncnB5x79CF72NPA9usSD2XpLgMcgbzAhcrjkSRiktyDsjH",
  "key35": "P4YHi7jR9P1RFAog9A5Sq4fHpzYTVFqt8CmXoUxVJTikS6HGEydmkSG1qAS1VBPyTycsax1Lt2KHwoMeuAXNsYd",
  "key36": "3mySPzdtk4g438SL2cZYmw9enXLtmhKmmZhk8iHj7QCaA5sF9BM84FTChTjYHuc2NFpyJDuxt5uASu8SzjAuECpF",
  "key37": "2pYmUaezocKS9g6vCPHvEj7BGkMBCuwqPFZaVtkULeyyxRqkPh4egNPycMFWDKGtXuNU8kRMa8F6s2V9YadBXDL",
  "key38": "5pTdDTHm1uwg4mgQhoUFf1cJascw5xJRBXfYJLBaQyQySAkZM6j14L5hmhwLhXNoq3DowpohcAhvCFNgKfmj8f2c",
  "key39": "4zstXH41RPtfLbY6DjJe53UUSv46fd3J3J3fpN5uGp8drDBnbfcbWBo3jKNzojXnWbJCzXi5dJRGtTh7Jvf3NF9",
  "key40": "3847mYh8kNzseSs1ttYeKu9EfSEioepHvpUcADkStCdpobfrR4Vcu5AGTfmSATJ9FNLQHErVL838uvmi7UF7Le54",
  "key41": "B15cDew12geRViiod83hH8swVQ7fZncx8uwGX7KreNUb8grVGci9vgTTHXLAb3gxLSSzXQ3hfc2dEYaECMhFp6f"
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
