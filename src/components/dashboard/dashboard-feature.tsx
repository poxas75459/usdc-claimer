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
    "EcAJaJHtzRB1bP1xqqte8zHQTCPZshhjS8riRMEG6HwhkmWQcmSBzCZAhjP7DLkvvvtenWEjDXbCsoc78hXZDZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57rmc8mYbx7sQbvXDbJha5VFRpwvCLEHV31VKQZBPwwLKyKLVHAehCYapqXGRr8HGb77dSYp5x4ZuwJNFwdN6Gkj",
  "key1": "3S2ntnsCJeEY8kMoJapB9h6mu7kDXB7QW7B9G5Mm5dRhGJrGwK3eCH6RkrU3Gh1kpG8eSgctKLufMfihuZkyuxpS",
  "key2": "4KSA8yQ2pW3dx77u1UWDR5Vxx2h643rb4MQkamYk2T6vQXxCkrEkC52ZwTPdkmW2qowmSgA3u4orrfBPtVU2CAk2",
  "key3": "GLF58h7PHTUbg8WZ3abdFeeTEsHJTzCabcBAQMN7GR5w1WN4uRLEbgdQFC8kWArzjqJ15gK78xtph5zhkTZQY6e",
  "key4": "3Jaff21SqfPpX67GdqP1P3rWYbUFTa7AVq4rcxjQ7DMgbd5nHJNhmcJFxEctJiT7hZzV7o2Jctpey3ZuFzoT9grd",
  "key5": "3afYXpEkTF9u1j4JqsDYhkgFQVXCVbggqESb853cS3gcBTqySP5yNPSV3xT1DrvnpJJKzGbBLWibczhN5gsr37wE",
  "key6": "2Cjm8JbRX8zNdpV7WAr4iSAfrfVVTSYGiMkkCu1b8JNcKpWAK2jwQgAjbzY9yPRGsDvty5dYyswxSpxBb1PBpXKF",
  "key7": "64wYsGkqVoKBqaVtAUynGDuy3o59VKf96UqrKmUqzytr8wfMDwvj2tfU3p2GNjNiPP1gC8WLvsFaNbBZFU2zR7vg",
  "key8": "3qwKnQaGdXDvGvPmK8TMR8KodA7d5jzG8Xgr7PPgYaSHYj8JpN4XkPK9ayTymK36LYsei81azKBmaemUysvgzrVV",
  "key9": "2H7v9bc7XENScuMVr9rtSoRQWkWZkofmSDCfKjYpzjuibMqTARzobU72N5THurXAcnmEUYHR5wheBxdtnPNhHJ5h",
  "key10": "2ZtVc7RtjAaUNajVEFsXWH895BFCVKzTVFCr4JACrgsNdpn122c2f8nt1kFmMWfwmqDDtafJH6LR9cYbfaJt7ZeG",
  "key11": "2ojE4AhxCuWZgjmwxEXJJpZtPzTbEhy9ARvAh5x1K2qz2hasfVo3fhFiZXbJTiJAhJ38ibz9NzdCuFVYPAjuaNQE",
  "key12": "4D7MvbMVbG4so2NNsMaqDfBSc3rXDtS5hCPqmrvXvg4187ZrWthuRop6czJ1Fk8PC1iAWzP8vPHQGLkAipwFcs7v",
  "key13": "5N3aFgFGu14NHbCUWYAWWmZQASZ3o1St1u22HUfqzESd16qQjRrBYeaPEMUZc3emvj1RybeYhvQyGLEYNH5Ts6nj",
  "key14": "4CdiHa2e5t86FDDcQ8ARxGXKP9NJnCpuTKcAvGUsAQpxcH47v3ytgf26wDsGEjM7NiVJDV6mCehDqsTNkgWudNtq",
  "key15": "3gs4Vh15JfNUaTTPTau3oS2DH3YV35LcYPeWJDe4o1CnfJLS8RokdqrogLKHJWFFZqqsxVNbtKaDUwbyrfjnGkWE",
  "key16": "CYWyrxWW1CxTuFC6NKBfSxSqEfLgLmtss36VTVi9kvYmiKJ52wasskBidmCqvJ3gYQph83Z5tYib6ahahdYevLw",
  "key17": "4PzXeKJBWVF2YD17jQv4g4aWtP4zvorY4fjKew1ifMhXLiKPvb1S2wC42tzQKwwnokwPypm25nQNKgMQ2Lj3dzGj",
  "key18": "5jnEAHx8efK9iV9AMiGeY3aToPCMYKtnxg5jBAtfQBNbeBe2VhZAuBDtPZVm1AkkP5k74oihZjWu5Daj13QyEW8j",
  "key19": "5zbCt5yftRa6QAWQAruqvxEQBBayS9m7ghkdiMyAx2sxn1c2yGE8jS7EeSccMbmTF1Bi6dLvBqj2t8pgtyUfod5H",
  "key20": "4Gaj3tW7nxe6rcx5XodZN6rubps6fPphf41edhrBqmjMYbbSRfmM4LUGXF34DBmAdSXLuLnEp6xu8YVfwWgNYdQD",
  "key21": "EmD5YwqZMLcYRedmyuoV6JWBK8dPanwoHNWdVUPinSJ87zw4xcB88vq7LrDvBQn79jfomhiowhP4e7skAAnsPyL",
  "key22": "5dRt96SmFW3YXXcbbe6W5KdwRwGG96jvZ73yhqDAP6j2b6FDQvgAFefXb8aR8aiy8Axv3wZmQg4Xr7aAq8TdD9Dc",
  "key23": "5fwYXWR6kBmKwoZhLAkqAFjUTZa62wZSbppsHsuRN3w7LnQT2FQHAW8eMsDEXwepzrYepXiTbsWQW9a52cqUnpSN",
  "key24": "B5LKMSEsJiMf1HQfrdsgpJ6ciP7f2FWaPChNFpER8VrZjWm8dKCEygFEPsbgAXRdERMgaakNwdRhLmErEkz7tne",
  "key25": "2QPdXaV1pNu4Vgu8Tguu1e8RTQFMhxrK5rNNbLt14owGayzfKnA9x9uEhPhRtaa3Gy45wjTmSm9UHGsEYpaQ77GC",
  "key26": "5HbU8nitq74ZL5uLK825kAVcLdh2UjvGvZecnHg59oktBrbZgnsoGehQDFwETbG9G2ACd9D1k9zK5WQdmQW4wyW",
  "key27": "J6qE9VRJZor3NHPPE2azofxUJPPWTvpz73mikqtxoCeZL54qkrAcH58FYm9YvD7gpm4XphUSKa8EjWwLJEXxqXb",
  "key28": "4qzDRpu1vwbfx2GMuyZue5YidUCrc19dpX33j9Pc6DS9N56LBHuSt39zCK8PMDp3Qg7i8g2jnRNcSibgUsc5bD5X",
  "key29": "2opX7pNyCzJQWts5yMf3LdFvN3eokRGCU2c2X8rNSM31C8p3GP98YdpRTCb3khSbALHLZQPo4d8bhxZnetmtqw1X",
  "key30": "Vu2STJJzdyCoHeYS4seFrfMXMy94eMtBkZgvSNVKRcsSSr2Ah9ApbuzXsbaqcGVStnZYZdmv1Y7Q5mCxfbpvRAw",
  "key31": "3NEc4GAXQZ2guiZFfdeh5cAv3iCAkscCtcNAYSkHRxddpnMsJSypSW7TApWzF98Hnv89j7bmroDKS1QeNmcYuRDP",
  "key32": "2ANbp2YWR6MpDbSskYMrKV1vCSrbxhNhwksSwA7PDoTfAYCS6bdFNMLKa1qpJPysi3m7yFSKZ9PpWjYGRidyj5PA",
  "key33": "4eFBQUXN7PMJ1PW5xGaoWNpuR7novopTfigccBim9KHSmUdWQzCAvdNTFSuFLiZherNRGPNiUfnrPCB2KTwKCVwV",
  "key34": "3gFC4EX2XHdZzHhxwU9YWrD1UxnGrncEtYfkKiNr929RBUT6qhN56qJAD7vwqhom98cJSQ1MvuJeR25TnuFzyxAy",
  "key35": "34GQaWSCh3ShRD8C7cZpievggyvUXfnEnWPbZcSfRRiqttmGaBSmePZdaQi2r86BR2t7WYyDJgyM2kKerv55XFLG",
  "key36": "5QTPoYpeAqXkwzDNrK5mw9Ad7REXdgYTePfQXsyEocE3CPSBhvSvaVdD7YLr8jKkhaN3iJ2V1t1V3Bai7GM22xn3",
  "key37": "2EqKK91a7Wfn4ETYG6hxDnm8ixDrySGgKKpKeimViqs6nmkXXZN7UNTURNokhT18CmxeBSptSLhYQ6eLhrURv8i6",
  "key38": "Y9p9s58NLwcHoNr1GS4VWXM9zcfjMMp3gsJ745GjNB41Q3yD9MB8KLEZKEYUTfrZmZ8MDLNAti3WLsnr4FYfQzb",
  "key39": "3c1bfWRn4gqNDFxvGE456jShBiXhnRHh4U2uPEtXfv92sRqRvigHfesMaaWELkCdsfoCyTReMyUM9zopFGidsgKy",
  "key40": "28jdn8j22JbNEYq3auMy7ZTR1k6Q4tUTHYqy18HupLUrq8zK2FkPkMi9HD1AMii6inX9mcyLcXUE6RvC46BmPMp2",
  "key41": "3XGLqHcojT51C4hzAuYqGBZmJxafj2uhgvpsWqdTgKFcSnLwxjscwMdTCeJjAhLNeEYbShYqJGYjdvi1AdbRAznk"
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
