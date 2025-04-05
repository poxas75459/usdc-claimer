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
    "4DxRfZLPKoEbt3XYXjD25VJmq319FcuPnHj8BvYgYDtpiron34KFx2s7CV7iiTwHAaCFytKAfnGVGUPLctEx4BaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vxwabx4oFpSjaTFPAaCj4n13jHHmuc4PcHixh6XjAzYKgz6VfZkxBb4mMSNxjk37YaA6bJ1fhXMqpBH19Cvzogb",
  "key1": "3xBmV9X2iYkdjNKjErt1LopNM6iuZj1aMsHgT7m9FxkZdKpE92Xi3GiBsXgJFWNSNFe3BeMwjAZQFXpKunaT1ZnL",
  "key2": "4RTuCJm2DeYNoCkAHoxfdzisTfqvMRYmPgM7W4pYTzUoLY6h6Ln7pW62SwUEkRmE9LBthnt6Db4GDYnb1Mo9wdu4",
  "key3": "576VpxErNFX7SThoK5YBPFTzBavZizaRnCY4JzXzRrQrmMYvV4z5ep6x1iQWo1oZbPTHqsTu8eXXJRCWZB99qAQJ",
  "key4": "4ckPDgNaQ2ff9hcpJZxUNRA1kHSUzyab1rCg8Xr8rEGCaMaTp6pY22dqjZCTiqWmJ36CWRoSQuMrLWKp8YAbbvBK",
  "key5": "2pMf1qC3eAT6fyXBMZzSJYi4Ds7agN2o65Jz7caRdzmYDCMCNwCjd1Rt5zHqJAs2YVD46zB6d9v4bLeMgoFjgWz1",
  "key6": "5cqnmLTzvQGs51W5ZPJHMoTcwBJhi3EWQ2C6fn9beF6c2yP465efqZW8AUsDTEA7SaznUWwquBFE4YEQ3Gxbc5bN",
  "key7": "9oThZZYXzjVk1TDUbSMZr7amngHLWZjn7LEJBo7djUdRUKL5h7KtuVAG9YLzNfaKw4CSFWKeBmd364MuwvKfXE9",
  "key8": "xRaCCydbqcaLKEedHQxkcXbRVsrkJmd85vbwQfTVieisv6cGqG9eHUHirZbbvqwDW4sYkoB3mZh9Xr5TdwzPCAg",
  "key9": "pSC5pWGfSw4XN6HuEcbyEH14fhVFzZAmbbTwaSM7wpDje9ejESCbAa8gDzvGCBaXbMRg2eY6cr9Jfeep2EmNydU",
  "key10": "5kLwsCD5PfJQB7EXBGUXVB1Xf4NBdsLq5XKC9RD9hA9Xb7XfkuqkowZPH89pwX5XSjYWNkwWPXGsG4AoCdwUaRSX",
  "key11": "2SAq2f4B1JFqJWL6CGFTcyhWtRjrFHRMnv6hp1gBP7Q3wSeKZXfKo3PtM1YYBAFcwUUudB1smmxgnfduC5totuCP",
  "key12": "33FQ6qCojD5ELLrbZg26pYXVwFm8Xgsvkno5LzUhysmeE9Wk3rvFYeBX8vNzUpB5aYDbSMqGHXRkZCCZiyRtXU8L",
  "key13": "3xmBB5xdeh859BzSYXRVCnWAoR4K9aNyGKc8hozpX1GctqicekxRCr7u2gPJQnaXKx8rGZotKAb3Dnu4FSwk4S1",
  "key14": "64qkwbWj59HisaU9sFCeL9oMvY2ypgxPvRaa4ZjnKRGaH1r2ja53S8tY1VgCQfy73wppo9DTXUk7o65FLvuzbt5E",
  "key15": "5xVgxpbwU5t5iD2dVAs56HdhiBvgzVP4QkqS7daK2L9yJCyTaeuhGfh2XkVu4sTYq1qaQfLzDPdSpSiKFANudw2G",
  "key16": "22zX8qdsePNDRwBDn61Qmd5PGC3gpru7hAdpe3t5bQTLmskbHrr3QufYMwfTrd5ocVFtZKcFEm36iBWyMhqLxRo8",
  "key17": "SjniAK7bcFA2K3t33Luf7pxFC29UxifdpStRZz4kmdEHixLfEGyeTrYj5vJXbu3AV7ufbL9DTTyvZhYMqezdhWE",
  "key18": "2MEH5ivZQDbHypQrwZGRitUwCMbuqd5CqZirCL2JCu6LciUUfiK33tpAmppqZxuctshBNyocknkVqJEMmTYiX7eZ",
  "key19": "gt98f6JRDGuR4o5L7LKSxytegWKwh93rPnYpMevCnGD1uBBMQGbVEM6MJTe178judYGtNfQ7ASE3T9mvtpmjWbu",
  "key20": "2iJibWusXTPMzgVh2kXNUpjHYoQmhHEgR8gjcsRYn5mPHB8aYG621eK3ggZmCucNYX1XHQ8RaYqMWoHQ5oQBrvZ",
  "key21": "4R3mNduAyE6Gut9kfGyi9HWFYemVHP27LmPfwnh3AUnS5VPidr5jV3XWFJmHkuumNDMsMyv6nQLCh8enzFu1w7bn",
  "key22": "2o2PVz29xxnPw31iLHQqCSEEZdXjwAtZ6R7PofTG3DMmvgg4T4FR4H9dJME7gJT75yKt1u2m7Ni7gSiSKPveThKe",
  "key23": "wPYF3nC89fMYm1Pba75kiXFVkjre62C3goRau9qd995DRBJxncLuo8dAPJVw5a3oxEmfNQgw31CdFefb4hW7kS2",
  "key24": "5DnZpsawASivrmoASxBQtTJegBP5eMFfNn5GeJyhFHMEd5kxK9p197cztwFnDEorxwWM6jqRLdF8v3CriTfE2BDc",
  "key25": "5816qH9Bawhr1FEDeijcCxWXEPMd5o2hnNBSPCuPwpRp56XkDGQ9XzBLaiuXhNdoQn5kE1QkDsAQzdAUURgNY77X",
  "key26": "3n6LVEJwGyXhWeb59XKPvo9EwJUZpfcHJztUpYMfSqbiw1sqjYqwByaVPiPqTsZnsVvKJr1DdSwbM2s4MnnpAFvW",
  "key27": "M2JLD15dJxiwrcdSydFqho5mMkN3xF3r4XZ62DanpTEHH6RQjFTvspURcrEvRuoG6LkycktabHmTx4avnXtqkKo",
  "key28": "3LnrKeRobiwtkhCPgUFdkUKjx8ue6yDtiEybssBDqiw6wZ6qx1QAjUJ9MDFiCJSqLB8CJv7qYLNrqoiUbW2QRsod",
  "key29": "2EmAKDTTNGjqRtoCbrHV16ke4J5TqaSjn7vL9EVwmMHS2rbAdPCGWK8GdTvAS6rKsGRSwsRbfYzjwKd2zKeWgfm6",
  "key30": "4PgaJ1iK5nDonHgwh2UL862Ns6D3nBcn25qhvHHV3J9TaLPzkNxs5oJp9Tc3NMG5JvMw8KVs2yX231HpU6Eiowjg"
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
