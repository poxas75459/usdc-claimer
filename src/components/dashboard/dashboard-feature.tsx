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
    "5VG82RU9qEFnCpaZig78uwU3GJcSiLdm8LKYPb3mR3nofCG8Qvw4JNN3b6vFbB4PTos9dNwJcKYdLc4hJW5x66px"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XBXaGJVP1rCAU8XjV7BbNRukoGqNJqna22dY2ECNyxdGGGWJuzmTQnP1ooutN1TpAccLNsM6v9dTb5ujAPudMUS",
  "key1": "5aXf3KE9VNZH8M616Jjpb6LSf34Dcd3edcaRies7HWFgw69w1wunfMnCZznsyzuXho56GeqUpsNwTThBYA8DCSWJ",
  "key2": "4oPie5GvRVTyMNF8EQpgQajaEMAZu8FtDhnJqGY53CwNjAoZhumdpNdUp19HZsAhtRRY3bT9MXzbvs1bAEr6htEZ",
  "key3": "31resnzD7oxTiiNbX62u3CxQoj1P4aeE4247BD1cYkhfmXRMsfnrBNVhzHXxxMgjD1MLMXjYevSXczb2f2kejo43",
  "key4": "F8DheJwxRDMT7xM7f6opogehTxADZcVH48ad93FM9PEPcReQhwnQ2XvEpUmJFxU2A7Z99SdWYDAMU9M4y67JDdi",
  "key5": "4awwYHbPhYNtdKiFHB1BVYz6q5jG39Ru3mxrrYnJJvY1fc96YxUAWb6PCZA6LM8PRU1yL4bTZPGWW9vcH3U2iTg",
  "key6": "EUZfv964UM5GGDTvboeKtCKgEvdp4KRachXSv7WKHbD7MU8BB3u9P4SqsCZoGUSWzixBi7FjFGxDBZzmd2uDCBy",
  "key7": "rH9MosiqKrtutxeS3ZNecjtF9nnYC9pLF2ZJ6rj5dDnamkAyE9iQzwSmg4jRUdwUFUMquTJCKXHh2psgQdNR3eR",
  "key8": "4oYvNzo88dPkk6wAGJEKZbukMmK5hJGYTf8nF1nChzwHoMdwuxFYnzswAGyQUiVK2ce4BQ7dWfh9e1yXwj3LMBFC",
  "key9": "m9dXb54rdzP7g7YLeVVxh4LKs2Fw5aYRkQVYArKV2GDQaLqqD6XFsCiGKwHcQ4iH8UTWexHfR9Mgwjrw6ArLY4c",
  "key10": "YMXi1nLq9myvr3f3Yi6rE1jViEhLqYEdyTVVEduBayq4Nfpmf2dG7a34mMjK965dXERnyi4ZrDoBy29NsaaKAwe",
  "key11": "37ZdPkVic4ndbbg2ZhFhofuQSa8SfPtuXJ8e7ZZipjqbsknmmcqyufFpsrabNhU6xCTNxGgwGtoaH1R5WBt6Rect",
  "key12": "2Tj77YLxk2MkudkN8TQ1UE9qAnxPNUG8TUuXaqoYbgS1a4eN2h1TFYaE5n822f1Ppqf4w1cDUh9RwLzkShCGqKGf",
  "key13": "5ooHQwwTNm4n1CcUwhXbBiysrUecH6jCwkhFZxqudJEUfndQHvtEkoe1KgjzU9t2iBueAcyneAoYdgtL4rH5eJwo",
  "key14": "25RHUR9b3H2zGZ7p5HPaRsWnQVtqN34fpbTQsFF2pnpVJvhyywPYn6DefDiKjCjXumxKQanDcZZZF3Y7GxDLUkqW",
  "key15": "26cb8S8nWXRoxeCw87F4rJFC5j5S8DQ7rGXHfsqjGXycG8jr6QpSuNmixmGvHQLU8uPY3xsXnDCjkYsxGoJ8H3xa",
  "key16": "25Mc5oYXfLF9S8SCqRBEdce7yoUYQNiniP6RYiZ5nYtv69hNjKQjcjmFc3twSASrc1Z7RE7SxAcakk2j8nRHBrq7",
  "key17": "3EXHFWgwTzja8i6jHu4jCQGrvEP6stJncP4HvhFDJRe8pYezL8AQtmGxRW4spj1jpK3ANvCWYNiG1Js6zMzR9VT2",
  "key18": "3ZqRQW6AVgPyMdFnzLYzNJjY8h7vbJ8yfrhbX1e9HCzUeJEKbBy4xD5WsScpAE29GxNFfyVopLZdbnjhSxz2Wize",
  "key19": "34DrvjkY1ZE8GoD48JWUEAvZ4NyMWQxgVuaCcmFqvad7AfyHwvzyv39686NJVJJN7gTzqw48s3Fwq2e2Eqdet8cV",
  "key20": "5Zy36EhgDmRzxKt8eJouLEnf7nB63QLN4U99o3dgPBFnjtMwDL9G9RdUB9BsvJV6121PLA5C1DeAMKJk81QmNQrg",
  "key21": "3xqB5sc6bg3EpT6rBio6byQ1K735CXoLkU6KJEoT553QCQZX3iVoWsr3QhJnJgPMWJmzoqfeizYBVZVCLZYrVN1K",
  "key22": "6K6coXZMYETVUMY5k9FFocp2YPhNKoauj2JZU36sL6Jpic5fffo2smWhrwfsxuowesgLCmrxLHN8ZrJ4ELAAqS4",
  "key23": "234HVfo5LUPkoRffhf643HWe2RJm9k4xauXoZBm4v169ZUAZGMKKRcMSZHTKmyLs2YbBZxU8tqWQpZ3Xn6RbGYoB",
  "key24": "4jWyTUYi7ntN8953osxLVHD3KXYnMriSKSFRXhLkMFwM8deGMYj5PcnMbhgU4bnAEDwSUGcyFVARFnTNnLQgUuNZ",
  "key25": "3CcaoAEjbh8H3v9hBP2kFW8EGFXdeMAvN2eBaGN2UvTwJp8ZoHe3apCWem7r3zGhF2CKuFjqA2SppwEKreFNZYWF",
  "key26": "5fE8VZczRVAJuwVhfk5XvRSKHejiQtHQ5vxQ8AhrAD1W71nAeM4Xs1z3rqhbKTgNB7b2DkbfEz5x6aiVpC3sGXui",
  "key27": "5HYSyB3DG2yxtruaNKMhoTjVCpR4UCNt18ByYmVVNNoVgMgw6FkphShHdtWVCViu1YoRZ7bbmxzTbLW2auRrMS6P",
  "key28": "5ia6HbAjrSJfj72UZxBKBMLUwJe9ZE9JhgGngQBWceEBrS2eiUwfKmFza1PGVGE8YFRufDs93hGpgZ3ahc9DFJny",
  "key29": "zu5FRJ4NeksAyBnB1X4EzuTK63ZEKGsZT638zm2djjmtnbGXPeZMpiw3KVVgLfMUHNo4LAZGSYekLGfqvu9phPE"
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
