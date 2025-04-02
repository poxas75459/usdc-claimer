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
    "jNAHKvThfA1bws4GaZ12hWNMsUszSj3Kg1UwJxD8xCTihF7vGmoJUJ6YxRW5mxmV5ZFfysHNKwC9XS2QUHAswS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jFMs3PgqoC5J9xiAgtS2sYrYzKcqThNTqX2Exsjubn1qc6UYntZYATAwYmRKVHo9qfK7NpHMb63ygGAL6SWYAbe",
  "key1": "zLuybnfPNhEE4ezE4HJ4CfqG3oLVNeeom5m8gtKx2Biac4uyrmh2tYqYHXmjchmTF4Gtj57e9nvVaxUS81cy4sj",
  "key2": "5hCEekXWCzShWRRbBPX6RQndsEGDbwFeJoFJd9r3SuLGE2yyq23C7fRLqRFLZCvjnxuYd1aSQVLd4f8Mv9aHUGMb",
  "key3": "44iULQboPgEaU8SuuPxEr5SVHc1rxYyErxB5fNkYLurawe22YH7X5rgbiokumHeiPvuMxgvGbvmTLWD7NzU6F8TX",
  "key4": "2FfMxe4Qk3MC7DjSMntBHHZ94jioc537sx214n35fWSKUwVN8iLQMegnxfrwaNBCfgobUc1mZwzG7TCBnccWVsRM",
  "key5": "528oEwAc5Q9zLnmLxMJnPJ5fioQEV8VcKJPfxUnwxcZTWhpyep6JSPNTxMX1w3vatSMzT3dyNkr97cpKcYPub6fC",
  "key6": "3GVYv1Z5S5opW5eLsTLhi1JA3YH1ygbixVwxMtZeCFa6bJtsqHyE6mY3rvJXyHYt9J5A146XUdMULLMyXrLTHehM",
  "key7": "65towgyofc6xQiod4sYmSC5SP2kBAF1ob71Qg6YnySJmAoPUNWWM8iKvMybQqcq7Z1JD9bSTCTNsZYAUdXmg5UkU",
  "key8": "4H4Z8rpRKKotqtwthgJt1d1vzWpM6kxDnipK2171qdtUNSxx5AATFjywes22CsWpWvcpU8ZenML85sh3GvG3SDQg",
  "key9": "4RaAcGKWt9meafugxhEcVy52rcPNQMaE66W1NfYpA9nCFgrJ8NK23ab1xEa1VUjATWbARqJPHyCzrJYLHgHug9iq",
  "key10": "2RvdE1rnZ9pWRZk9JSb6ohs99VTQVnDA6xcK3aoogsP76n4VnzdVKFe97BzdixwruhSgSRTYu8jNYzWryD1UB7ce",
  "key11": "3DhRN7NfzkP81PbuQRSSFAAfcJgBoq6ceuYV7S4EGDXFRPm9SpCTtcUmx2AEvXXo3pS55VCxs3r9SomWLXgtu3Kz",
  "key12": "3VRbtyoFqctu1oRYNfnDSKUxhtBxHgenmcZ3zu6KyNdLGCF7nuxJPGFPkzGtMPzGDQNnXc4Z6tbHpCZCAhhQ4ceA",
  "key13": "2ZyzhdgixSRuob2MkjdrfmpAQ3ozMY7LxcKx94zsUYQirjnDTgiN2UFzi4cYnkQpfSd8oYnKYjE12UeMhSqzeKTp",
  "key14": "5awNSEom8XtTnWWtfFvQALX4FjfCLdYqDDeSKZtuovWJ93pBuLK2fBThNTa4ekxNDeJVVVbKttUAV2nHsv138mqm",
  "key15": "3JvQXhKgjrnSMRvUMx2YDWeeLLhMcvxjNbGZwyiWHkYucXUfWCGA9r9RHLxKc7eGneBjkVtbMHE8fM391bWg8U8U",
  "key16": "3FPh9M4QRFTRkePGUzMipf2Tqtzy3gWCxQDNqsCor2ouuH8F49moAs8WLEzyuoJwW9tQHACZDzdarsZeRSDQoJbk",
  "key17": "2YePEVPNMiebZ1bC2ALaf2BsTNqgiN87YTRziETZw9XPNEFd53G1zgXXvtMVXpRoYbhiBnJpZbnhkXYfikhfmiuf",
  "key18": "4xMdVqQ99fCGPL11QtVnsDCzXRcVmCraNUSdMuxVM88mvwR5JhSwF6PZ9rmzM7tMW1yzonpLfo8JAyjH1zLwE9n6",
  "key19": "4ehbUu962atPgSvZsHFky9Q74dnkBXgzZ6KkPEVSgxcPrE9GXnHWW8M4GS6f9Km4DfwyTcdkY6rvXLvWKPa28PVJ",
  "key20": "5JEeTtDTVQ8RBSMaJnAzxYBTqcdACpYzcwDiFw5wjkp7dmf4h9gg3rNkhteEGaXqDGqdzpC9PDKu3DrdUwNwEzQp",
  "key21": "24u1RAwFL7j7yVXFQmpMPVtHDuCs7pSZp9wF7iGpZ9kiX3as1xcuTSZZfcRSHT412bDqu9bfXgq4mEqvKLFc9FkP",
  "key22": "3bj834aMoXGfAYobUr8XGj4aQy8UjuQJtakx8rqVV9coQCT5JnLsnTKqeMufanrJ4MyX4ERUf9xBuwnGmWPMH56P",
  "key23": "4bWwAg4oeKoCdQGdmPbPkCmp1dFAFsGqGVuH288Coo9LYSZWJndPDk3B3KRnsxUNos4dxnmVhwFhCy7vyvd8e2W3",
  "key24": "398xKPbPf8gMh8NLPoVmUVqdpp5UhFBPbodBjgWNdLiJfmRHA1S343vCH6Hzi4UyQaCyJASeczQRkxDRu7AkjtQ8",
  "key25": "35XyrQXsTRKYvWsxhUmuguQexv5XbRtuPx1ijxoTbT6HcVAXfUKhggws913qCD4mdZ1ynGncfzudbKJn6t7pNPWr",
  "key26": "3tzLs6FSpeFN9bJWd64r8b51piSWzHX7hQ8Vegz9YNuhXnFXiKMPGW9cZ1B31wWXHoe4fNhcLaPpJP1DRJ2DFE7E",
  "key27": "2Sawg2PnkCzjLAMTG2os4B3LgywoGVCMEPXStmrdey9PMcG7tg1ucWda5ptKdi6Exh8TrCJZeRuNMgj61MtRJEhN",
  "key28": "2nQf5e6dpoMkiNiRxmuuB34EQCA5qPXw1eerYoqEh3vAXEdvvn4e7yL1jdHHp3VtVWBnfXmampJqo8V54fomhy9P",
  "key29": "3Ta7YSrhCDnbR5M667XToRGRrH2FAYAEoTUmLzH3f1K8SgmHx5XpS5jK9edkiTudJzbxCBEqJrcvzisdftVQMKwq",
  "key30": "3WzL5tWWz1W7wWuVF9o7MceRWvESjEaHfqtJXGuJFVN24H8u7skJDyNhLxofVg25CKLnMrGopmmy1tBogNTJM2zZ",
  "key31": "5hqvZzQDDbqi8Gu57y6vSrPwHtha558SKr6EwsVGxMNLGdHDxYnt4joKJ7JcYjKrkXXt9JzZSRFw53255y8husXY",
  "key32": "3dLueRwSdgo2ozsDT9JsMu2aVGCQxdKfsyZmhafignfvDCUcV72dix2XfF7F1epmKXgDcTKWVGcw9ifpis8Hc7dP",
  "key33": "2Eeiy8jVvBmrsnSPaugJ7PHdyz5dHjcJ34cgbjDFVysTTFz6EFJYjvN5BpPnxq3ByN8Eota2UvSNfFHeQYd63YuL",
  "key34": "5m6WbF7W3ddx2jqB9CvtC47cHW2aNeG3Y66SbrYh8n1JFMPFAp8AdWXWdEsupGKCtL1UbEwrjnrFfw7UgpNW47Fy",
  "key35": "5ZVDkMfiHbZ52ig4uKYrcGKPLBXgCUaGzf3rPCGDiFxVAKN885ZP4skS4rXhPjASNLcTpzpZ7dBeCJGyRFjU49UH",
  "key36": "4kHsXQCAiiYK4YpaAPaTgjN8cGXbacc1KVsj8JqNscvg7cysoMUTycqCMtdv7G9ZESm1Gdun2sqXUGYhiBLDLJvF",
  "key37": "HPkspdaoYpDFM9Hq2AuTfj5moXq1BRER53AEXh68p5N5xyzRD1MMK8eYLPctcDWmLsEJDUd8BfNZ6MMFnfFDRzJ",
  "key38": "3AWuesuXGEtrM3m9H6ycffMJxsSU79dwcUPtEesfpgc1HjbvKAxv5YTDbroj4tuY3rh9a1QS4LJdNS1vAmqTTrJ6",
  "key39": "4tpgX6NdZMPFasdZSoqpjx3Z6gqHVzoVdZETEVtPQLTrenyXcjLwBJbMMYR8AZH81CzgttaaMzFGYX33h18pMXdr",
  "key40": "3cvJcRWARAURLp3Fbh4uuWu1rXXekQBM3gmnYH8huyMc3qNcVCxWomqzee4hyKRoRXgPkVVB1Vy5WUyXDo6HD1Xu",
  "key41": "4m4CPCEveCmvUsS19PkmPfqCTBkjDq1z8FavtUwM2AFr3MTFRxVfASVUc1tmdjapVTGoDeSMaHPK2B7JvuGNZ1oG",
  "key42": "4jSCByGEF5u4SHCfghZPceAQthhgq38NEocXcYqkhkA3D2PTcwu9DYPHQxb6iGHNLPQFJJ3W9JgeFrBbQWZSDY56",
  "key43": "4BVSQwwozhT8QJBVfmDLCQFLswz4vDHCWn9bKxPrRX7LWEs8tMGZt7LD3esmvbwZNMta9gMqiQgdsJbeLmVZpais",
  "key44": "DF3St91XqJU7M9FD6moky2c3Hyp2ThD55nUt5YbBDQFNfWavPVrJbiCbNAd3qFVHJobk8pvpNVtLPmuGFgAgj8B",
  "key45": "4SrqqU34eeWhp4uzWMiaHKUMhuUTSxdSN7a3ygc7tzspMEjYtZXFmDqtqnM6pDY1n4sh4RrCA1E2VsMTi2nBEn1R",
  "key46": "5PJDafzeHJfMdxpApgAMekHmB8H7FFYstqtpwhj7abWYjseTXhQV86YJMwrL5auHWxy4h9rFjqihgPEbr8apwfoP",
  "key47": "n5NKhnSn4NPpZgsfoNhAKv4Rxo2pEhBBZ3PHFTWRhhZpEDTFjyH3qayrS9UsYZv5TwyGvQQZ3oEWS4vTx9PCgm1",
  "key48": "3ngk8cTZCigXSYbR6bDtfX5UKRWRHzfcY5oTj7Fktmt9mwo8fn8JyRgsL6KAF1qgSzt1si4aE9DmZdhNgfakPkxx"
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
