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
    "4XHDGbD1ruXcwPkE72rjCSRjJWwc93GsLC3KZpmjhedjgpgL3aU3RJAgHVperTNBCaHa6TiH22QWBhMDS4y5chR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rWWkb6DJe1wUgc96W4BvoPPVpgWQmwZsAr91T4us4BGffew8fbfdWiwWrbdjNucZ2yfeivfFSxfnM21GNeUgMQT",
  "key1": "2YBSCcFazqz7ep3wgZFWMSyyJaxoBmnMSt8GAeWHX6A43HGEJgkME9AH9idPw2XNka6YhF62VMEqEsZFarcYREn9",
  "key2": "2kdq9NfHJL3h2KX3HHUU5NkMoQDv4fTqdV94ktygtPJxvGnKHn4EtmGTeXW3vHDJNgGo5EhbeMc48NPqBDRwZuLz",
  "key3": "2xhxMcDUCKo3sYBKpSocZaPY5YHtPeHkDBPG6pHDuWqpriEKU34ZRKvHrT7GKN6s6oxQhjGSYRgVMuANCYEWgAkM",
  "key4": "3PGVn9GVyBKKaeHCakDQ42Ki1VZayLuVpr2sd96FvKUP8NGSU5uPK4wxGjeb9d5SPu7hm5F4dFYRfPrWVWFBmyxo",
  "key5": "RZGPkWvA9CLNwqof3N7VXp47mJ4jS26SJiPZAePAbKEujG36nLHVeLppN77G5yxqNYAjX9EVqADhN92TmGoj1tv",
  "key6": "Tiqrbr4xJCfgWDtAshCiwnkLtjqVKi8VhHo2PfYLGiw5UtvJYZq8vckHcRyzgvwCAhj59ooz2jL3tDcXCWj5u4E",
  "key7": "5szc4Jzk6AvJEi5nWpLhABeKescZtzAy9Ph9uT6ar475EADQkdkZu25MqguA6Q3Y1sm82YsFkZ9jqHtNz9kWqBxw",
  "key8": "5ZNizfYi1RkCManBV9fQJ5PphEBTexpvhbPpvwr2QHZv9tnztHt4BDkPHRxudz6ctMo8nXEaLKCAcqKxgsWZeDFP",
  "key9": "3qD8Ke2QQD72HnLoBsxXakfmqRwckpUegeuVeqMiS2UNyMikVgpUFZQQGQZ9ZuC2sc7XcxrMvnhjwMsm6YkR3AvQ",
  "key10": "5sRBzRUD8Jh9Xkvd79Et23ta5Uev8oanPPfJH5xRawJN7drcgFtGbrWp2wrWL3znKTbxbbfbwefNo2zJbYLYQZy8",
  "key11": "3dhJhfeHvnYELiht3GK5Z3R1tncfoQEWFKwsZFHVo28aEXSUotuPbW2RcDwhv69zz1nnbeF4VDvcWMRh8kaccVYU",
  "key12": "4wuLwr1Hrs4FhVeixouFjrPSijdYRDWRUnTPzKWnuCety9XQ7Em2Hx24ULgbsNiPRYYjSfFRAUhuvFfUR5Ka83yJ",
  "key13": "5JUAiugaQ5kuBmkqkoNKaBbEtqrd1bkvJqaw2gu41mVMRM2qGZzWnrWexdEVYUWzb8umLZLfPkGpBinr8YBynSFC",
  "key14": "3BUU5hN5oaYTmiUYzjCAXypBHcNa2VUJbnXgiJ7oGp4WM36EhnzYMgw5L8wzcUVmGbWfdnYk5VAdsmeETUahuxmA",
  "key15": "4bNcaAhf2uCHJXVfRJv9YuZSCF6iUdDWKkw6J6crU1WrPHbwJgLvPXNVUTcCspcdC28FWxahF1yXKd2iq9qg1164",
  "key16": "65G4y24mybVmaUAvs5F6nhLb1i5ef458YWM6cTnU6x5iBnxpGru4hCUmBsPMFxmLtPWrJ6V5duMmkckQ3QE2Gi1J",
  "key17": "4LA2kmZuZye44njDPYuCUijVxicG33Hmx9yoxdi8AtBSBb5UyqtTDbPiYRRbGUecMHrA1BMUZWX38soetYsAnru2",
  "key18": "47PGcNy1B5sia4jmznsuCgpg6ztYdr81Ee1LCJxiaEfDKL4DfjoNUxKnPEobVmhu6EmLhjrvqH3uQu7X7bACwMZE",
  "key19": "61ejT92fqsxv28KYPBFKTiESsHPwKdpzFZQ6Q157hjmkwnfL59j1jJ3KpfhEVycDSQnupueciDYcLotxd1c4qZMz",
  "key20": "WM5HbBp2pzrtnVZ3aadtjbqorh5XN7bMNDVMFeBVHF3FbLCyiRyX7BTypbhKgewqvaH4hXZevujZoiihawvCuS2",
  "key21": "2dgqaZdY53hTefW1xGaGWmLtUzaWrSJ6W4T6JQW695vrCXUoE6B92z8mYJAsnbXygvH6ZGjq1G3D3jfKdPE1cRVk",
  "key22": "Qi4aYgPAxeKsVYfxkCvbHuHecZAhyvegqrBdz6VB27sqTNZHdefBbZBpSMHtexHBPU2riUxqBa5BoFAHMXkWjLE",
  "key23": "2xm8iAcanYkmZMH3pExXxQA7BgjTt9UYYRMPGAX2WroaKnVXUzksEcpwWWjTaS3Wa9Ws5MTfo8dnXkdmrtyLtsMp",
  "key24": "1Mvw6oRA54GFfX2n7AfyqVb8pu12gdrCFdFgPKNpawupRrQehXyakC3PKpBqk18j8v1Pw1MaLChUn3wBcua22Dr",
  "key25": "5Kb8jUdQpN518UwWqZ9s3tH9tBv4KCx58U9yUsjAviDw14oQSbWPfAWnxkru27wyDwTtswpzuXbP2apT8AFX3vC6",
  "key26": "3RDnpLHonaEkKzGcnhHNkq2oBjC9Mk5BWoXrudHWzZDGBqPvRSaCNyjbB6MqKgiP3N44jfNwkBVTk9DBdeZruH79",
  "key27": "5riP6T4kMPhygNqFAxBHjkyfRMisMgNYJzLnvqMAgab8RWNnjX1VjLFB2AYPGFL1PVfNt4bUh9LrQWyFQ8xEnUsb",
  "key28": "5TVjSNF3R7z1wzUaqdxgxRyFfZ5oarnGryooEB9YBVLgERecGU45WEPTTV86Nf6ZTdsEKmjwPfaQxLzasdJcqF7b",
  "key29": "5AJGHJwTMhEp2Lsx7w53aGiVCoaksoGcvsd2hcHod9iz5q3QwRBPoyJYJkaaMbbLsrSGkFhS9Xa8mmmexHamBNfx",
  "key30": "3bAiwiLwBtdC38pRqbe4QkpZWei8w3C9RVtpq1pyynoLpQHA2iDAA9BpqGDxtpdz9yyDVebDx6MmTod7oMFD6zEe",
  "key31": "24rrr7zphSsfQWpLegdHeqUj7zrnWrPztFmYrstBu5aZPMzdRq7LNZbYiGawWjBuExFjwbqo6c5HCTqQbArhzacC",
  "key32": "9BDeDPyFr6d4GY7FeJemPCiNRRSfhboGjyVAY1oFZByCZEY2q27jGhB2xeStpEaXByodFiaHcQXKnnyMYGwEoWJ",
  "key33": "5Qias9MuCDZBzPNmpLBtM8FLUWTzJT6yLUaFVrTotFXKTckGPeKJE9ZjAhVwwpP3JuezduBx5CaZWGRjPJvnp96D",
  "key34": "5qZ6Nmrgia2b1sNr1uCiBobQ7jeqRjWJQxeJs9i69Ncp8Qm4gPLQb6VBM3BzNGHp6QszC8CQheDiYJarkzHZvFfu",
  "key35": "5RMGoXUENa6XqAPg9yWmNmAgwpsSftqsGJEww232iQ5hKyS7vZsusjrLVibmYamSvqULVrbe3gJ6TEEjAXikPGkL",
  "key36": "2n5auNYjonN51NTUY7r7feMQmfkttMsYvQcggistu4hwNsrXxLMVqkVXTxHiP7YavxzZBNfQftNqYNR7T51cd9oz",
  "key37": "3RarpNxHbCH8UTw3zZtdzeSnkBgCcu1kEQUpGLFNwQtGxuKc2cWs7ogxCfWUoo3T897vxTT5DY7pGTZuVDjHSTxP",
  "key38": "3jgKaKAmxh2UEmez3MMABK6nwhrr6KKuNdySfsP7N1NfKoEsTjy2zVVYgPgRz4TgGD5WP8xqkA86YWwsjqGYLer8",
  "key39": "5tLKGbotJPrtunbStf7crfs4Xdd9p6CGoHsvxpnNfbpy2QLd4v7SZgdKbmjpq528oGqikyH1UNHK7QXdXmkY8jRW",
  "key40": "4ivNKoDq6Yvk5odxZYsqxgTjDrV1PfdgHS5ZJRvWXvzGv58LmCRisZzeUYT2K6J5JGXHkDUaQihjtMbt3jLtbWFF",
  "key41": "BPFSeBBQ9VDKXAm2AxB4P7i2NdREMea9UAxsoBFbBKJ9yUY42Bps2xh2Nt6zMYAcP4TfY31rMFR5oG9RZXFrXuX",
  "key42": "cY1PXzJCRuvgTML2FEQU43V6dHvNstGhCWHQDrY4zLgxsLRXSNxGPe9swrZc9C6RjxLBRdz5n3pDv3GD9kybVjb",
  "key43": "3phJRXLdJbtjRHg6Krn3cSS53yUUN6gE6dVKgizputpaRjiHEXyPXTq9MM8gmso71rpS73V7xnAuZvc18MSGqBni",
  "key44": "26K3VWgoaxfk6yFj3D1hU2LnUZWVzJcJkUzv9SEJTNAEjAfQRRrp31ff7RJ6ngKZa21m6K2kC5W6NqUyR9UXww9g"
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
