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
    "qVb3nb78m3QJT9n6VQnvwZ29hQtYwNTP7dHZjQku8fvSPuZtXVMgpYWN4xrkp8zAS6hydUuSxRpj9dnzLYyWDAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zMY8Y6DWuVgwaxE4UwgYRhovPrBRXSi4qnhdKMJjziH5phXEep3LwR72tWY9wiACied97xnEcVVUdHw4vYaq45S",
  "key1": "4EEspt8BNj7Nm6vmJJrcxmXspApFbUHo5f4HPN5ho4F9qXJsPRFhY2DWyV2jrnUY3dqp5GEKyFCm7Gga83othEsy",
  "key2": "SWiqDS8jmc3Zys6ouB5GhneuU35U5EtopHyyrYzZrbrHHnLQrCWk7H7EG6zDjn1EcpL349Eup4e6WhS76JwDguN",
  "key3": "dxhs9Nusk3U1riX93LmhsYPiyQoCziNE66PDgi7yKCYa5WoEEJTNjEPgCDkZPpXZPcGDGShb1SPUgvAy9ZvgLLN",
  "key4": "4wF6FGLZ8256x56iMxMMZasE9wLCaoa43PKCfvuVT6QUWwNUF7zsdfX3VWTqdxuzrMXfVvpheHv5BhN8go3Ca2j8",
  "key5": "3eh2tyKJJDCN5G5R3aUkLtsd8xsbYr3XbUG1WLYcLt1WXyqPXqyQZYz2MMc9MhmCcGXg6p5WwAp5VZMmp8X67hYj",
  "key6": "2Lp4fqjUrXA2JJWamHqfA3xdSr5TwGU9PQ1Sdn5gaabh4X17QDaE32GYu5nPngJc2ZJJ2KeyPkpc1tPHk2tHrkjk",
  "key7": "4YqxcH2Q6JUKL17vzRqfRGHv41dE7RTaDrtSaWYaYAKKyKs6gMZaRqyS9VgPtYrDb6pZ9sHEQqKV4EbaepwFJZuN",
  "key8": "ZFtEbhp5LaZn7BoCzTJMfGmbeahnsAzBCv5aeuwozSbcmtgJZ2HjYAZqM5gbg76mkyW29sRenhQtrQVewFbwKF6",
  "key9": "2JDB7ozQ8NTcHHydu6VVULELrDu5hRFq8BiUTJCCsSNT9Re7JkEByrpKWVNivDrftdJTooTpYkYMikTLphc36Js7",
  "key10": "5E8Yv2spL3dvVFecEYQ2LV55DMjxLNsArfFQdNvjTHNAw2wutt7gxQuAgXUenFGm3arBJGZxxRor6x1tZMTuPWvo",
  "key11": "hTWCTQenXrtyer4tCvXjfQv2z2fUnQBgz6ccraxiLAJxdD3gSwkYyWtao3R9V4UmJ7CTBHCbkP7Uq1UnTpKVi3m",
  "key12": "62bsKMvPi6uU6AZZzrTJ5ADq6W3maVfjJcBUeWJiyybFCe83T53FiTZCt3kjuWAA9cy7QFTbsWcqy9eBMLUs6Tij",
  "key13": "4xqyRDj4uLgyqAHApXuPbsVuijWEkf4baBWJAB17uNpU1183qG9srRwTQjrCgnMnfbxfCny7BSgBtm8s9QvoB9aF",
  "key14": "4oUeBTUd8Ci9Yu8LfFuDLNe6mwWdCYj2VD3T1jawjG1AeYqHrb7RoS1SzeYYMwDzpMkTdSoZAMZb3GEniDcf64yi",
  "key15": "3GS9SogdtdeFsyRKCVbt5xc3HfCcF2s5mQKv5hoaJJtGGvYKoGdJnxJEEuwfYEBWq9vphEn39BZi3hZJyMEatkC3",
  "key16": "2tg9vJjoa5jmFjc9k3yX4xBLVhP4rbHeYSEGqxcvH4YguLZgrJjMhG4JMzDgD8y7WePoHqtSFyAad42Gm1PDrNYE",
  "key17": "4KjSYfuJ7RRdxDmXXD7vmkxMzJWYGoQWLU177MDqyTZmYHrbJj6CJfVHgx4fBBfqEsk69GcBqRhVPrQ9QBvj6uVH",
  "key18": "4RT4KKJLfLNbdMLWz94WvZF5a2PEWFUmBY1L7Z87yBKDzJQyvtoKh4pvPyKg2vWMevjZKZTDZD5TeHAUYWaZy63h",
  "key19": "2PaZJhWwawVeLzF6KJdCHXkN8NvJTpTHm2q9msnZcg6sgWQKkaQApwqJ2keyPcEDnB8fLabP148Z2njbHNBH9qxK",
  "key20": "2A4Mna94mAednZ18suzAJtmP8ESFdRVnZVcAZhdBN9pgFrjERbRfJTNsUEfg2weKBYtYpDXqXoZR9PWeTFXPSPnv",
  "key21": "46dz5HJx1yFcNLJmrzu57pCnbTfLS2DnG9f83bkiHNF6hk4SLN8QpfUhHtouAibrePKwxmpJQjMdfmDvdpUfZqgv",
  "key22": "4aChjqGLkmHjXwDyLJfxjuyKiW2DNahCzseC59MYR5rCRP9X1W9sMcHxog5ooFL5jijPPAuEpoz1cGmobj5zVvC3",
  "key23": "5uc74K3oz1NAUvbjH7C7s25ACkDMZEsqGRuytYZ345p1sQhfLHpGMjp9wVhiQgKKcoW1cSL1T49DR6mMkiiky6MB",
  "key24": "58gHCmXiECk5rUZGFTJnJRSkcFrHgrrrxqCwy5fBQHMGL1HEgbzVMPAZgCUYM6FWFjm81dyMqDjDE5dgRTrpruWi",
  "key25": "54P3bVhqG2u8pFhAipr2i9wf8JvKyqDVgV66Nu4Z4qyYQVJnUYxFBLkP1CL4XoXRT8qeyiVBniYQrna7LromPgEk",
  "key26": "4R77AhDGfvyXe3qjfk2oXWUT6B82ieP3MF6EvyEi6GfnPbwoQ4u7rE8oMpz32emgtBwgY7ezpyZnLqMS6EeQLVqb",
  "key27": "4v8c7zZo8amUi7U2hFHg9fQRAC2L5Kc3dfu2NWVTULxn4nTjZek2Qcs78FXy2PSsB1CfVkhdAe5zUhTGfXnbBht8",
  "key28": "3HwQL8BmEjySoACuuWxCVLANFrwRLNtczLYp626NJ9GJXhm8ajaT5Mrj2w3C4ui5T6xo3TLUYsWgHJQtyWQQCRmx",
  "key29": "59oidRdPc5Zb5n8t436jiBXadwFHrBzarcHocvD9qS75bMdu9hWSof75UZVrzXDiS73CXtZxwRbHpzjHcZSYnkzs",
  "key30": "4gEQ3UFHnceuoXvCFnKWuhaKdTwui5dLC5WcrkNfxL9JiV5S8BMhWnMZ2AVvBdtFXrZzdnQZLENch3EaxkXCDQ42",
  "key31": "5pGVHvzBumiu9aAcw2hbzjoK1TDR55xsa7uE2wSAZt2LDLAH6znFWMPm45UTnbRYZAqPMnJbzb3tj5roJboUHscS",
  "key32": "5ScUjb43PSYEXguhemifXWKpKspEwH6HdUBVatAGV5WJ1wSzkrVcpte5J288qekJxcLAbgHANq6jvr4aNkiLgQzZ",
  "key33": "3ip14LScXoXoJsvARCrSFZzK3SofYogs7DruSuwpgXP2Ndfi4RExFxJbPTWpmUdBu7hogRHQaUiwRVKNwHbHVVce",
  "key34": "3Poh4HvRvv6DRjLbPTbMHmLpUYeC6TRd16cHgnRCrrSaz4FtGGhM55bnT4yP2NgY5dp5HK5BzfhduPgUq3pX31n6",
  "key35": "4LkzmrNvaB5Erfk5DKZv4v1WEde24LHqcwL9hUCToBXBKg4pEkMweqPo4SeR3kE4LcHxGBfmGgFDtqadKmKPRyPX",
  "key36": "3cWAUByJvaZbypFu2Hs41qFSrZU7SG7DsVuKuy7pMC2VeJoxadqcibQJdVCAshWhCamME1jG88kJQdSBFVFqtrju",
  "key37": "2XccFUhhPuj34XXwZUMTDg6JqW35e6pDt82eit3cSvYsf8g6mdaGsxun8uaefVFoF7SQffbanuNdeyrGXZYTNbxT",
  "key38": "5su1TiPCEbSwkTh89e4VJ3ga3rcNMG3rWauEErWwnr69naaatBeK8ACnMbieGiBpWJsyFmbkGA2xHy4sUPosJ6sm",
  "key39": "4pwCo9BZNGuqyP3kTFbTd7DwuJofJkVBkQARChis44HHVBbdnW8NuCRWwVwhtKnrj54xxbjppjfYA2fdkFJAQR8C"
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
