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
    "3ZJGi7mAJFdwo6ADaRj7xDn4sSQPhZwLXVdKJ9i1r5sUWJraibpjWt17PRvFi8qjVNWVWVCc8VCTceJVLeF1Sww2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55z6AzmnudEHY2fwjT4UP9hGjvR63bEZyTr39mYkK278gNFmZ2HPA1ZvwxESzKJuyvoNojjBcbVXQCz3jxJ2AnAL",
  "key1": "5pgE4BNfjjQqXMWVvANWPPhqCeRzHbk7EwsisxQ2Gryu3EBoyxB3Q2bfHpWBDCkYwV3UFyCr6zUkf6mmVUbRzz3x",
  "key2": "3dBhL3sZKc51sJ8qumuytt6kMKAVtNhFvMYmP8pg39fD56MinH8nQD9u6PkQByKHSZscVbP43gLeMhv4Bsbs2DQG",
  "key3": "2TK6X7rpcyzEherxawX3UMwradbCN7WR2Y221KJjeg4SdXUvBSp2a2mv1krbKuKgg2QxdfFD85h5afBeyTyUgGaG",
  "key4": "5jotYtdimKsrMwNHLBrDEXHwsLzJ2rWnimhKyL9YH48iqnXSKkjZ8NKc27KEuPtLy2cMkN4qE8xjn1DHaVp83eu9",
  "key5": "dVHDVvkfRozFRCh6TmFnLJiQMHAS4Hq7qNpFEDkfVPoyLkH3YGY4m4w6FMYi6GEbyxjZYSxEoStVcxkyfHcSLDP",
  "key6": "24Ai1VUM46vjmcbkMngG1bkS3AzBBdEJcevd69aCytBHSqEdyRQrUE1BQgj9rVHKqycsX8jwhMnTqpfSM2kmEnm9",
  "key7": "3EviwHq3vtPok8zZG68ev7ky56iZ4NE8FSej2yZohwfYkJ5nukAPz7iq9qZpgAjuK3AwUFS6pDJ8BcrgJGjwxLR1",
  "key8": "2MGrhd85An6M5bwtKN9e73YFZVkVveapihSuFYTH8Rmp4GJiCUbdkFCkDgHg5HZdB3xSthUck2UcikhLy2MAwtaD",
  "key9": "3egXYSzSWXRyX6yqzh6EP6DgUyTheSU811YBxLfLM4qWgoahXs8JsD1Fr8mxQx2fFJajeELyXBQ4bD89L1XmvpVo",
  "key10": "219M658kYtbJCgcZby3ErBmPxGoJj5zxhfAh7QKHJWzSsisoZ4wdPufZ7NAhdxAjSWiT28uzQKNQZDVtJVxKDmTq",
  "key11": "3YZGf8wCX5PYk2xiSkreriDDTrAReQkPWmWxk6hh7jCHCD6ELuXx7j6pkfpwR8hhzbMjdRbgZa6jiNM4D9htCVYT",
  "key12": "yrgUfAcGVqQnNbYKS9xQmBs41c1cCEFXativRpReoX5JKjqFpCtvaGWdsDab2gVu7cHJMtXLULXya8RGSrSDoCo",
  "key13": "2HGiCCmFikNXzhV1WTuGvvFWk4tNTmFwSEnmipCnFwhHusFS9gvgBQ7E2tGB1Sxt6YoFhHVLiBqsMHSHBsd3tC4m",
  "key14": "NGcdDZPbh9YUAt196Y3QhX235iNwoo7MBF1QKkaoFrAVyXf8tQkkMJ38gQuisuRmWHJZt4LgNoKuJsYE2b3pGNR",
  "key15": "xGoePQ56xjoxR9LRhug7DvHsGtQJbHvBwSMJ5epsZCcCRbm7gPw6jf3TLkPHSsUkfKDiNrzpQAjcL7zBf6wDd3f",
  "key16": "2FqXJDMAGPCVnKih4azdTTsngVK5Sny2SCqTtZGexS3ytoqcejwSJ3QrLTYFjekcd19N9XP9sBkXaKTJNsardsMv",
  "key17": "3ye969CExvmYHL7wfH4YWU6pRoGiK6CStEwTHWAQy7B3aP3DkTDRGyQ5FGUi3VKqGVRV576zFEcciMaLDFyG9eB3",
  "key18": "4R4gkprJd7sC2vaCAw1fkhSFuWsnFBSm4GBjYENwftx3muiWQiD8MaAZycv3JCVx9hswKEsnCwoZF8q2mLa6umy5",
  "key19": "N9DttgDb2hLk8XXjW8UYHUr5BQPDGicqhWGoX5i8ZtSSeKSEh33qsWw4istbngdEvd5PsKWasszHfASVFKpguFY",
  "key20": "S7JoobqxvzikhkcCs6MN2hwW8xNK1jV9r4kZRSCjyXpGYfrV2JbQgHFSSeB4eCepWcRQqF14uu5TzsxjPyCFuHX",
  "key21": "2QjFvZVWNFkug2qGahoUCgFzWKHyD5B7VkFzEM3JyseTbUeJYZXrW5UNFBZ7vwgJBdyMoswGRPppinhvRSBoVrRj",
  "key22": "2M89EXBC5yXpNX1ouskkc1JvwnFaYvBZB3i5WPHtGmXKGRJNgZLTdUUMLS7WFBr7YNfaGQsc8eCY2wRaa8UnnZJ8",
  "key23": "2yD1bQAP8Zt8kDpxGPB8aQHTu3g3UTVzzGRynwkYAGMMDbmQYsM4EUHCRiq2w5hYZj8za6CepVnsayG4d1PNexjd",
  "key24": "5jYZceCA5E6vrf22unn5yhrwEjRvkHmKYN7f12vkHT9jAV73nSuCVL24NqaHuLmNj1eZVT3WxkWdZvcSdYtDAaQ8",
  "key25": "4wWsqh9VqZKdYc7pTjECroiAd9sr4UcwAGmo3vfhHHUzXBD4EiiE1rSsfnDjtPSCbATskmSLJcmDuGZMBKxfwjMx",
  "key26": "3JMxUxUC2DeA3zUVci1L5eGgoZA4JSjLtF7TZdhHZ4ikf87mtXiRbe6PtwsCnBiZ5zQivF5G96G5RMgv11t21Zca",
  "key27": "DTxmtfWHgLoVxWEK7uQ3ow9qG9JMnoFzhfsQ8NsdY9VY5nCYku3of37VzvQeYFdMeuaHBT5zrosnuyosPqej2z7",
  "key28": "64yMZSGNjTdboij4zyRckVZ4AgYycZqik7uShR4DP3GJjUtJPKhTVquBCk7b4RXYcwirzW2QwXGHzvQQUc5jwfiK",
  "key29": "3iFaao3H55u9fxc41ZyQVKmQMWjdeD8K5qZmaFsnaC2BN7v3A5qMHRm7wKP9HivNB9pDiXR8di4bH4TV93nfT7jZ"
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
