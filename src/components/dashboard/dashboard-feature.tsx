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
    "5eKorffsFmHourUfsQYUrHcMZ6FN2Y9roXohtdJyWTmyaESHzyYgww46Lm9A2qUTLeHxVKZ85FBHb6R7QiLbDqQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pAzXjUznn5brSE8n49A4EgYPYQ44Psv2FxCGX6xdLvuvQukCFhdBNgjiJTmW2fAaRxCfBJMT6ZK4Uznp9prd78e",
  "key1": "5RApsdfDBG1LjCUwA6KemcJvukHRPmpCUmdx3qCdkEG1PGtSFkh93CWysdwd62Kwr6syQ2qtbCrdwu8buvZyYDPs",
  "key2": "2TYkqDmxyTDkUCgRAxWFjwDvQVJLiUFXzMaBnyHEKriyhzi9XN6vBzGEQvBHjQcWP5miXshARQqWJnjeHU8mW3QS",
  "key3": "5GNxdkrhZso4nmMXSidj6KmWB7AmcVKbFpA5wnXXtA39PSNxmYbLbuPs2PvkG2Rz6zUny7zwnR1xLNebQFSn7EJH",
  "key4": "5fg4gexo9D7G8mG5CPHBS1LtNkodHpXEvnwvEfW81TVMpBzg8N83Ud1Kuc3v2ZL5547v3wn4nmru4S7M36bS8KWH",
  "key5": "54M39KbchYn3H8LgLUtyTD2xdfdJb7Q6RDGgkZHDzKnsKeoSsgmCiGXXkn2c4nGzbbmRsYaQAr69eCug7XVHNtwf",
  "key6": "yUy3pM2gLTA6wYBTMg5au7qVcAJDGTpGK39cjU48NmHXF5TqgCx7YiRhqTgN9L6EzU3SQF5TwhLtGeLR83mfWaT",
  "key7": "2GgP5StVgMGRppVAWVmpjSVLKXFbYWm4cFZyoRJE3tPr4dDiWjb73bsRv1Er3Egz5SZzYfYh85hUxCScZT2fiMG6",
  "key8": "77oV5vV14ThuroKKJNcZY5ytKgHF51zTWVvhQVbnGMTdsGgVXC3qHty8cnXX7mstencqNdW4qJdYBaUVb9q26Td",
  "key9": "3gAbgwnr1aKfcuhKhaX9Dr6unz9cmUvGCv9j8bDadt6MymH31t7Yqh79scYWKZRjz5QLaoPfN3Ev6rjTjP6NkHag",
  "key10": "5sDge4Db2XPejxBgMk3APpnpjVDZwdHENS1rnaZ2JcCmm8YDQPt14rEYAVjMxoaszUea2XzgRRuHjwLMJ1kNwSwv",
  "key11": "42M2pcf4KcxGy2SUzwLTJPaM2xvxHh3ZHmtRTXJwv3fvhPVVqZbGhXKPUZsvM9rtTN4Xo4g9cK6iWXE2VW2faWBR",
  "key12": "7YJyDZrAnUKndczPSrC7rLBknQvFTXanzQZGxJBfe7YQYsyL3Pr4J7Rn1t3pNoHm4XXYG8dugaYwkKnWf5LP8pg",
  "key13": "2tywPDUriFYwjAzdA1JjtRMmEfv58ZjgKR78jXdGyDEr94EQejRS28u4QToyKqhae27URHrrvtPcs4tAwvBShCCn",
  "key14": "2SAcswHqNNUwyQHDMXt1rG5uK64SM4RaPbDFeGKMZW38KNaDA2fP7NLAmtyk8hHZF37QvmGawUL5VuCmNBmVfi2K",
  "key15": "5Ca91fM6bSEUjUcG5pTtpxap9YdniDXww7P7Uqo7s4MPhb14EFQVLmgiTdw5A57CHJ6gaUTFPNzfQhf4P7xzZebJ",
  "key16": "4WhRyZuEYyustHdYKnFiR4gH36KRnErGugWVGcf7JZqYvaeyPWB31vdnn9WQJevRwC6Zfd96t8mRAVpKDurjrXgq",
  "key17": "57EgwuVfL5ws4ffYmhNAW3Hiz4C4enDEunhNbQkAUf834pVw7sCK25G8MEjj75KmbdexRpBriu153DTCaHjBi3af",
  "key18": "583w1Z7LsiJ2MFZWfLz6sbVcFGjGghggbgEfdBQ354K5vfdAN2g1auohBDTE3LS4ZYgsEZLBPB5u9XZ8u4eAteG4",
  "key19": "2gZ5Q1ohK8Kqnvs9RF1cYgqEYRCgfWr6v6t6zLq9ZVr94HtEzVGT9dyfUqTQvrkJyGBzcEmih9NJVcn4t1rcDaeF",
  "key20": "65UWD2tZnikGZyPEL5kwixwe9PtXw7KxrdbCGs6bmgwYFx24QNpGCdjvP1DynNAWJy1qSCD6SefEcodWHK1w4Czw",
  "key21": "2UygSzLjksFTSDwLp1whrL9GAGyBHo3CWcuUNHCz4bteQ4MRgPLy4MpyELA9zM1qikJq3AZownLvR3ebpaWtNh54",
  "key22": "hQ5EHfYAG76q1snNYeFaV5vhAYExauuPcR8Ui9KqnRoSCjrBAmwHbgjFcgj6ZU1AkCsf6wuW7MJJaJnAUZAZ9ki",
  "key23": "2Zc6XicQRVVH86JVNmWynaY7EHeNHcEWUYXz1FUcSGZMsgewBD5c6YXmevXoPeerRwSbWN6W1c6jnUv7ZVrUYwEV",
  "key24": "2UQGpMqqctNNAtx8KaEB9ufWbEXziJBeyW4AGpuWaenwNNqrVau1BWfAngdYovAd8nMLbD3PwD4bFBNgKRSoVh4W",
  "key25": "5bGfw3W2jQgbQqT27Qtyi9UryUNd8E9jXqTT69HWukMb1nvLCgaP3CmArCCYzzNxQK7BnxPJBuzKfTKLD2yDFHSL",
  "key26": "26htwVF6ViSugQVeTrhCyb27rvkULa7tkNEne1HsHCg5ZaDb3Hb576ec3bLkF5mbTWLvnq2EfQrr95CWJBsANC27",
  "key27": "2gxHpnDYLd8NGSdDnqtWGatKrkVejiumHgh2VHihp39fa3YmR6wq484dU8PA4oaRXgZRpughQYeVdwCPZryLsMzG",
  "key28": "5nP62nkE5npYZDPQDwnLVqwer8hYWTQetrDmB194CG7HDazKN5N4F7kb9HZKmYoghYUMsDC1BYBsPoD6kc2WX8Ae",
  "key29": "3Juv6uC1mMoaRqwou9G8QmnKpKgjMMmhHAZDQXTDWEsFwGz6fYwQ5aBf1DXkUZUYyt8e3vsm8ZWFPeJLj82yeu1s",
  "key30": "4AkmS5i9CbmTbPZinBzdUbwVbZG1zVEiEjfFZ7ATCYgKJyTVf1fvR78nYUFFjfQnPVE6Ugtpem6nUvnHUb36LREe",
  "key31": "216ihpJSEmTWnXeCsHexhALbGWgswa1bRv51S1uFGM4pWSUw73F8WhjMnjR6HcMa91FySJ6npW4uGpzCFxaABbo4",
  "key32": "4CKJuc7g4JQZmxcD5aKh719EU28Vb6ENnDGmBiSwyTqkfQn6BCKbyauJigDD8wRVgVeGm1v9Dmi3Q26vXkZwtq9N",
  "key33": "5c4ZS1S6g5fjbC1QVmyMFeyBZq9aFCZDikbRPJk1dycG72B9tjRVUaUU2LETwpfMgNvPNAo56qpA1jiujfc4Jo61",
  "key34": "4wnJGD5piqjop4UmSRSN5CESQcV3HfdrE6tA6KdLUmpQGwM4iDA7iS1bFWiSqEhwXJjYQa7mGQMN7Z7Y8evpSiZb",
  "key35": "22zGDLXJx7u4nfqNWjE146Pzg9cEPsypin51TKhFWsAN3WX9eKTNzca3FPGfmMwp9JZvUfwuTDt4Ah4tHMd3ZLM4",
  "key36": "2SMjHW5e9SYupb6XBt8VJgwEGL9Nt9CikJMwsa55hA7HkgsYaPk4VfAcwKeBbtWeE9rD9BzK6vXroknyYg9GqYYk"
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
