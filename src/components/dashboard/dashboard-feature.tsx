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
    "3L2n7jzJ9gvEFCoPuC4817RdrHDysUtfH96cRGfHW3NakicPGEaitgyYuV221ixd8VWate9AmTa8ULiVC71ZQWwk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j6cHZUpxJ36zmjvLZKri1SRC88QvFXJT87j3h29qCyKK3eTb5QWCY3SHSZ9ZbJQccyDTCoViHXe45GeSz1ebe3j",
  "key1": "5xUTPwyE1v2bdNHYNHJjqLkkXY92Emyn4FAobUZkqyzWS7zaKFwSD9qMZBvVCv5Y7ygVgTMrfymBmgWhTM5yJokA",
  "key2": "4T97YBzTgLgXFe1MWbfS8zpSc9v3N1MavkSbZW3YG9N7M55Ev889Lv2N3hGiVVq12pDtqvjTNmuiBKYfFTGuFAuY",
  "key3": "HCy6Vc3oREE1aHdvfWfZJhANDeCvQkquKiyomgtHHG5ntEypLCMzWbGjW21Upkk6CSYmREECUK83JpSbKYtKNWm",
  "key4": "3DCWobCb5iV5worqKmUCGuG7jXRUoyB4CYtg6wZzPxEp2SnDx2JyjxfJacuTPyCes9kGyYFMMb9mFjK15epevHdy",
  "key5": "RGMQ3Z141g8BjaNQRTFsgL8sdRF1eCURFzL2dXWy9H92tRwuqx9dk181HS5WNmRwBsEb393Zqny9Ae7WbPfvnJD",
  "key6": "2dTMESLtvkhmo1GHj27awqBMapfxGvAZNeqneAbXAZnNV1oamEP2YxukTN26tY8XGmrTgZGYwvJpWeaxtp66qVXa",
  "key7": "2jbVdYgQoDG19pbn7XkLvEWniLZ3S3eU5WNDaWyN8RuuWceoz14r5hDCN9HV1V9rkZ5gCT7YoMmXoQWrZ33dJw3q",
  "key8": "UD9wzNUgddPssHtPJnNYLBMys1ri5hxuSrV73s1ZCfWGrBDv2LWcXgPH8Em8WANfMB22jeZ3WqSp2PSTm2v2Mdw",
  "key9": "2vScGZbwsXT3V3867TG3fFe3sR46mXRBnW5FSTSy9JndYFSRrUsckqMj9CNWPBcvxjqWJ3YRQ3Rgt3aETcbVQan1",
  "key10": "4dqNY5c1iZWVv48RkdcuWj4Z9C8iaffTiNK8EyxdQfeMggS1t3DroBdUb4TT5biwteq5gk2FvMeVV1nf575RZGwg",
  "key11": "3BVwLw6KLmZdzQMHWuHTEKJShYDXjjkcwi8J6zqHsDHxMdt35kSoD1D6oUacrMg77Mz5zSDZo9HhKXU5c7S7HgHT",
  "key12": "5eJVUcpXeTxwZFFNDEUgnEVDdFYXcU6bA3j6LUqxS2KTnzugjb5TjgYdKJyA8tbXZ41oJQy75Me2H5c1RgEpmD4D",
  "key13": "4CUrU57jt9q68xZuYDtWY64VK9WCPpz3Xu6i7DdnXJ36w4nrv32Y2YWTNNnUZXb7Ut9Ro5sPhJsgFeyMPYzPSjNu",
  "key14": "5Wc4LwAraigUSfcYtnqRaNqQZ6tumv5TTN5sgVQ5V2cLLUUiMLuUJP13KtVmb2dhSVSaBFg3GmCZuhTU9mYXTJGW",
  "key15": "5f3A2nKwEbXAEp5R2p2DgBTQ7pN1Nnq94vdv3sPi2Tnicr7b71UGTxLj21UQSEtvUSsesNWZg5ZsHYtjtzjFJGGy",
  "key16": "XvzSPvJhfd6jEnwTMgBZAQbmkdj9cNFpzTbLuzphbdkkU4hHsePXzgLgyc2ZGxb7R43L6PCVPSaVAKQwBZhwkSn",
  "key17": "5frrQqUem8YRoXHFF9FyQiWCpxKf2a8SeVFoDMxRFgCi2RhTHSnnokQEHeM9phkotRBSeEgbMCT67QkQE3FQbL95",
  "key18": "2qZ9Y7PSjeM8qmS6bF6FV83RCcQXF8RGLEWpE6zUMPhRiWf8P5RjGfjhy6oKUfcNveaBYdYYcnCm7BiY6d8t7JvC",
  "key19": "AL6mqhqSoQPM34uoxMd1MmBftznvSxAeZfHd7S8dFFhA6MP1SCqiKGj9aixDhtj3xocbZgBaqA6PeGDRNJNLwjQ",
  "key20": "EskxRkRw2G4nhZXiR7qsxQovnis7ZtdStQyqfZ2SrijTVrHJo6a21VyrWtr3wLi6HjyHwcTo2a1VSTmPXucrfgA",
  "key21": "2MM3TrVxy7jMrfr9Kdfa6AMWa1bLxbehQWKMdMh2qZxnTHVmMwhRUTmoxGrBoEM8TTpXG2zj3fej1TvHe4PMXEPu",
  "key22": "3yU8fsf3FP4QF6Jj1nMuzvzXZXjFY7kozmEFmkpVdxbqWKHAoKUXsEfWqdUiWrjFcWYvTPHY4frLKCu3sQASHFDs",
  "key23": "3VjpFDqjDze1nbi8A6YYhwKNgVxxeuFduAMTNMCqVXZdn8oMsyTmQ5HEg2GMA36UeQmckSho1B8NPjVZSMn6FxJe",
  "key24": "34ns9oFTBPtaBM6JnKbUZirXpbKQVuPxb6m7ixtSv2RVZAZdvxfmfsvs19n7Krac4udRJT9FrBpo8V3eyGc9H75Z",
  "key25": "Q96LECqcYi5ugfP4Ab5XdUiXurMuoCyKP37HvmTj4ESP7KGDyQCEHMKDVPKt1SuVjZuZX2ieMnhUpXPNNkuouty",
  "key26": "5Qi8MeyRtUe7fRvxu5oJ8Kz3pu8XUi572hTkWFuh49bRbAM1SU8YYDFDh7D4VxhBDeuDGzyKovvfAoVFZ2jLtKmW",
  "key27": "VrRxbVNUv5XQTDhsvy8u97UaMHtQ7LFBrTfrFnkgEpWHFBGoSwA27pxc1ghMA7VSgpcxkzTgwrCjtkXaKSz8f2E",
  "key28": "fqeV9P2kcTyv32sLGe7XT3YnGGENL3WJEFRz6k5TCsG2tNunS6hrifvRGGmV7eXzt55f7d1NupzWMCV6tPsnwHq",
  "key29": "nNMEZA5VASMSrRsHBFQRKLWz5TRXF4da7LGhPJkc4W6mweoBTX6hp322DpgWdn6quJNxPursxWw3bkeMvWeyEUW",
  "key30": "5ZJMvETcdvySSFCbvcYr7K8zHaVkYdmoiR3japwe5XMZdyHy4ia1CjEEUQGbxjmqAc7UkgXFbnBZ7Q69WqqcG6uQ",
  "key31": "3Lcck67s33ic4LGSKaCMwZLRmYoELsmn2uUYVLUqFisVZowUhJMKjnoEFmnReuWDvMNtF1Frsu6kmu2WjiodTSwG",
  "key32": "4BRBs5FQj2Lf6RZVFJ8U19bfDPiqRpVT135hDzFkCHi9FRAferXBwU3pgaHW73XUvGB2kxWTds7yaABYJFcE4k2X",
  "key33": "57hoD4UbwU6omEYEsaSEsMfGDmDEWDUXwnkZWxtQmEcYZCymVch4wMnFRAFJzeXpUrajJ8KfEK627viExCuhcZnp",
  "key34": "3zLvAcfw82dHw763Ggd1LgtkejV2sy8trwHeickpSqzx4ZaP7YbqmXt2He83ypsaTCaQTQtTVqNKuFddWL2KqD63",
  "key35": "jGLPvpDUWr9ozE1vr1rtL9eQA18fzppYXpBkMQavecn5LYnBs5C9fMLjvfdSjkEuRViGdsHvdr5CTrMF7dsfumj",
  "key36": "3C7m74iCcTRvDKQyj4qcjvCnTDzdebuTaF3WGAAxdD5xmEacnN7BHWdWFu5Y35LhF5bNRrUrvrWhiBnVZqb7TKPq"
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
