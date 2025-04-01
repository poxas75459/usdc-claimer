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
    "23WJqSaAnEwo2r7kbkeCDucDm8s8k5z47WVD9zHUPAKUS244rUqhJj8upeAw8zjzrMLEfvEYZiwFEuFaYHeAJB1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fNYk5Dk7XXod4kSPH93o7BGNdCXdkWP6ZpMxfTeZCYBEWbgfptJFUHno5BnKdSDT6ZAA55gTSt5ZRJ2SBuSPEXY",
  "key1": "5BXU1JerLmC71sJV42zcD99c4GqaaRBS22pxTbd8zC993YRwdjc75HHdfE6bcwpiAErZDoMSpFXtpt8Ks7caR99z",
  "key2": "4JPE3caVYD7anE5oqwx9BxzFVKGY1DAAs5URfXGi94ZwXgymgmi68jG4U1pPHtRKnEQCXRARgRMmyuZ4vQFCwYWs",
  "key3": "tpLWMgHZnLWTACwVGThdb89MbPeLsjAuxKBBXt3HQYnwZdZHJJ1MFe6KcGBo1fV7LYymmTcCwFD62Y7yqTTux37",
  "key4": "41ddzjknC9Mpz3rt48fK9Z8VaJyXyHVNsSVBX4oKkcvLa9xUzvXRq4GUbJofK7RN6bkKCHi1pLxq5Zya3LQgeCLG",
  "key5": "5skNFrfyjXhSe1A8SA7eCwaDX88j28UCPew86QYVY6ZAJ68FLJ4qixL6eWXc49BZtbPyUMNJBYoHj2MMTzRzNAST",
  "key6": "3aaoDZRaWEiJnzs2ZQyXmtEd7TcCM17uyJAcqD12Xyewn5fTdsBGRUZmR4crukBaRgmyUMqN6SX8nFuz5DrS3yBk",
  "key7": "2ookGy4WxZXMaKaDVTcApqmszy1s9MZHAfHXjsfDC3cTFhkBHQuVpVKiSpho1C9Y9NuwKryP7DFuLRwBLrjaWUvL",
  "key8": "3ki34qSmz3BpPWkeTqM4AUNg6c9Ez7K6vJRseM9FPyMNohZhNc2aicpBrsLEWTh123HTJuYBNJ4bJhtTyVmmTxPq",
  "key9": "3DdB3caoGXZPdMLPPtNhZ6id5N28pJLubgPGDtGNbn7iS8fdRWxGUPn9ywfceuP15NaksA5PHub3WCwD7Q84eup1",
  "key10": "5Myu2mFYLwgEhvH3ytvS8CHfCKEjWKcB5ge1EPBJk6gH4Wh92oC6EYY8yThuooXmTaVBdYRPGFiLdqCQVwxgRbHi",
  "key11": "55P9yP5CFQ8dDifR9oNes1b9kVNaDKRLFK5EHBB41ha9eqv3K1Ho6DHpAm8ZfAnyYcxK1VNn3LcLC9UWZBbjzrZ7",
  "key12": "5wNPDMTj4phKMA3scmAQbuiPuxi7iDRjbzpsxWhn9gt3YcxVyWMFXdAEpGabDegXbAazuHPuQ8KZnrHGSoTMwmT3",
  "key13": "jYqAktC1cxsJdBc725Z1Nszv987uMMqCmDozDSEDJWMEmqnJXRHj1h7keTRJGSKdfkdvehjHpWpAuDbvKV2u7A6",
  "key14": "26uF3fpcAUVWSYVKdznZmasFcKiSnTMGHF1UsS5kZxCg5fVr5PCQthFGuxy3m1eNJ6QtEMGM2LfhUokheXBjQDiX",
  "key15": "5KeewdKJDSv4v1Wtttbk1TR1AE1rUprr1kw5CQigod6xywrtFjtR6shHsjSE8fPte3YqkRT5GL4ujMRntP2bKtUr",
  "key16": "51febBJ2RmEos19cWUQ6hEj7hbebhyvkPUBVE5f4rPSTrYicpzGWeSBwaAxpUYT2ari5pzdDQAX3PEPP22jWVGzv",
  "key17": "4KMsDs3DpH1Rue6rEszeiuYQVvuNjxwDXgkfeF7nptQ1UJxg5ddEX26K89aEFkyCpxZm1EaYdTSSKiP45KQEfCsz",
  "key18": "4DFzEQRbpMNZ4FZR5ZWWjiQ7hWrg8YTUzzuKnmaCp17SF4xwcFW6KJ4wzMsCaDTQ9y4Yt3Mb6RVkxmhyP451WLVq",
  "key19": "3hUJtb9AdZE8b7B7vEDfXXqXJPfngtQQ9N67HKbhVgYmNEsqUKvarJA1wkXtc69BMRN9smV6wvVkBYWXwTNqPEox",
  "key20": "eqe5WErGVhWZVLjbD6sDV1RbE26d6FpQaC4YEiPtWZytrHzEdq4U2CNMLrpkCdtgSzSQL5ZSi2hfjAhUfK6P1i5",
  "key21": "5p1WrSRy5Y1azSJfcrRzBiL9Y3xf34bp488PD2VZbsVoN5r5hfmTkJFizixZ2JDgeX2qzNZjzB274oFo79cCixG6",
  "key22": "4HQ36T3YwFxybPUEXoeUQb3uUFoRcRhSkDzuUK53hJo2cnCByg2hMqHz7GzZhrq7BXJy6kUtF3QqpxaDtwX2s9iM",
  "key23": "59vAMhMWwiC3mMQr8cXN7nmKPPtKn18doyshX4e3RE382PLhsdUP4ivMM2AugwcCM7ks6C2pMPVaEXvbcfFHVUHM",
  "key24": "1283PkfohiNnyLE3g759WbF2K89rTyd45joLvZoc8ZFtsCJDs2byEMu2w8ze4YVKMRm7HrxVvoLm4Z4RuUaWYEvZ",
  "key25": "3trZLN6AXrYuHNwdAkZY4QYxqTPQSvHsCHLx33KoXF8YxDrMZ6w8Z8vavHy465wkLbBAzWRKQTVWW1Z59Vr6jcuo",
  "key26": "5qWPbPwBtXrd38T3JVcqadRGaE4tz59Mu46Drk8s7yRN4TRB89p9NzLxoWxDhBnaNETheLhW8vvPy1KnSsZJboug",
  "key27": "mfZXH75MZJXP2xKovXqKxMBthcTtt8t9cf2ocDHx3KWSoyt5Pe8v7DrAxJuoukWeX7N9FC3UFyJ9N1g5RMN7tqb",
  "key28": "2dj4vqCWFEp8djphydVanm52sDFQ8HkcRV8TEbpRbzhqJgLcSahoX8i5LcDMAjTprYyGGDJzXxDfWbGsvPCjm4BE",
  "key29": "3JyYNvRd9MT7ov6JqyXKYv2ppcRVd8cxk6CghZhHodE6dmizusqvH278xmy9pdqZXSXqxxG1aoTKiKTzBCgh545v",
  "key30": "QE3pFA1HK7T2pvQmcnD2kmFZXpQYtNPkLmsC9nfJqjgZEaqvBoiBaj77QyjFrP1aanTt5LcLpVKqcrj31GtGVbg",
  "key31": "2myZyEaC9bhWby134N5Pdawr3RTepMYWLgXjfgZt4fuk2T7LtqydfQ4sQ9FYLQKXWFpy1UwFQys7VfkunMJpCsz",
  "key32": "3ScM1Hpc5qW629VV98wWYc52Yx9dw9fmC4yNdfUdLuizLVbLtQxXLDeEEi9wiwdjkXMf2Luh9RmatQVNxbd6Q7s4",
  "key33": "5PxtFTqjXy5ZUP32nZTAU1hJNjtxmbADEA7zjimZXYqipxfFkREUFzg8wZJqDN11uSmbcTJ1saSe97hskm71W3hk",
  "key34": "pgBXXFce5jFN97wxaoPJonV29R4q8EZZ61WYyjAhEkbSCHnUNTX1fvuGYE7QWiHu62xDL5XdebhX1vDKLU9NXMT",
  "key35": "3qQBc6BCC1i62tr81J3CVcgzNrPP8JWczDnwE18pn6rikbEBHCv29msVFZgWaXEkbVCf8Fz1FT9ACEnNBcC5FY4k",
  "key36": "2eb9j1PPH1c4gkqDwAdGCo2foDwy6qT5sSVwcCqYzJ1RFZCMsxfriP7PuZRa3235ap2pdTiE2RQVdH77W7GHxdCY"
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
