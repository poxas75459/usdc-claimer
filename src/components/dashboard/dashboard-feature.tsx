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
    "27cRH4Fbr4pAqHVBZcjgAZwyJf1R2Fap4QsqHftWJFksC6QotJXGdsjVh8Ej4kH4KFz39mAPEK6jjrjqfzpn8fvA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sj26SVQ4GsSTvjnc6zUq96iLzeZiLqtcyWn5vQocqntoBLTnr9o4zKnQZNrdJDvttgiqncsBny1VUjsxS4e4wnd",
  "key1": "2VUek6rtJSxK4My4dT8VtoXWBZ3meYzXJtdHH2r2pC6BrtjvwZpjcV8vw9dqbqmoM6MA4d8Vo7gpu9BQdFZuNJey",
  "key2": "2idwCp6gHxTLaeVBNsM8ikEoSGdvKT7cMTkPWFXnZxrB7soMMxBifhiSs2puzVJc4T1p5w6t7yQViA7rZCsLrYao",
  "key3": "5tu3cGLV239qg1McXf6qWYjYhK2EKrNKPjdkW7HfxVaBkJtzTcW8w6F6SMfbdnqfvtuXGFRnDPnK36ZPZ92A7jyZ",
  "key4": "633S3g2EANZPmdkcFKW7AEXNhPoVyYZ5hLC6mdRT4R9AepkBtDzDMSyamXJG3WpgoLyUwo2vHoqEDAKdDmusbwFh",
  "key5": "2BJbtkUiscVmr42SDAA8EX5vecii4cFmy1T3uDg1sjwB4Us31PuENmCFuhxbhGbkiusMS4xnRUVUXtmhhcYH6XUr",
  "key6": "3FVqtPVKGuWiKPXGa9ijPwqPykrYeGyye8nVvo6RZsDr18dSoZyZfA4m3ufVcPTzCna6CzAnzbkphkMRFepeQeD3",
  "key7": "2nXY1BCSBeXU6JNBR3jyCBHXVFs8yDhYiNmaxfYvSw6p4zghpUPnYDf8sFDx2ykhpLBPUKbWPaK6Sk33Lub8NNXD",
  "key8": "3HxLKJfSAjYyxvtMsQTC3XmptSyregNSjT55yGLZR5GWmPjb5bVB4oheGzhtHTRNSPN82roaTX2nHhjRWYdwTLXu",
  "key9": "Mq2pWTPMJxf2s3UTY3merowb9N4gsqxWMRMcXWkjFbp9nHv36aUnXMCPKMDdZkvR6HGAoZLjek9jKtrtD6xanir",
  "key10": "3fTUGQXhiws26u2B1iQmZFg4SBiErgBrJoKWjLC6RVxqL7hHLtRyangwPaGroyQyB23EndvATUrFHD2gwgqbi5mB",
  "key11": "5Lo7k6P9tKjFMh61Dt31ys8drFTX7tuoRVK652pR5x58ooCyGKS9JGdgpUXarrB8XEusD7QFnWiD6NSxV8JYt9T1",
  "key12": "3po7o3MWAUMaShiydUjmhtT4zezQ8YHVkDTNpDvyhTdPKoAvsDyGuK9ENL2oQsVUCfqm2ZFhUWVBJMNzKXURgLMY",
  "key13": "62Er9sq3Lt2s4BBo6DyZqmRLnrqwNoWwdebe6WzpVnFpoUZzG9tiJqLrZa4n9fH9KzBKGrC1dDjrhWjCqtiq7nks",
  "key14": "4ZW36nc6ajHYXxR1C9M25HF54GRtbGhqBuEMHaSH19f51s3bKexsoXnfmpVRXWiEFsosZaSnqLTJbHQ52dcxUZ9y",
  "key15": "5sTdBrgmrF2XReq2fDHxRePrJU2Kodq38o3cG35osptTpvAnM4HZvSzaUTi6TqJHFYNk1EjeguUudsssBAnduXCB",
  "key16": "3zUp6L9Fa34h63XeokggmW3xM88i3XCQALmRhoT91Bu9FuZE1kfQCxdEMRh4daje5H3BXo7WGHrhgL89mBk2zSjq",
  "key17": "4u6Lnwas8Zo5xYVjyYe1AXDoWURRVKAKAbwaViaXZ1PYsf78DFt7wZaBWEAqZsXZtb4eYNweeQKKB4JyXKapnUt1",
  "key18": "2kzGKgELECPZ7c3YLBcUQa29FQC47ArcVRhjHTQCgMLvsFA3RkJ2Eh8uXc8PYEaMnRpgAXM4GsWq8TccacA6RES5",
  "key19": "56AgiLnmaMBQhmhYt5c49o8v5JQNmjH1ZQh2DMj9me4vp9RYhfxDMgTtdYaXewdveHjz9KnbZZ6gqGMZHqAPeV38",
  "key20": "5HBLZyRgJkDTzAueQfneoMGQq7wXNHMpuGbfC4gtGnAZm2XH4oAmu9HBgrgWaSZoGAoDhRQqC9AJ2rMPEFLqwj64",
  "key21": "27uTG97yn1erjLBoXrRhccV7r5JXRqnYtBBikR9ePVua11amw5bRZudqvN8s5jjihKcpq2eDEDBierK9nz58do22",
  "key22": "qTXAjfiZffZmCjaXRaCC6Q5yPMSrUs1HerWJXk1egHBAGtVAnLdFcJUxRr3TE4yApSHbppRDG2THwFQxHXoTY5K",
  "key23": "32Hq78CPiqdVbN6f2AkJ1Tn3gjNEATcN4kjgvSoNwqNNVjEKyVPpjAFnbdVGfb2ak5QodYQZ5YZw6qF6inRqVgoa",
  "key24": "3vM3Rg1AVeB7knAxP4Keu8h2V89TapBX7JAfG6BD8cDytubsUnaYxyzJWjLdeeGHmTktV4BHvVeiU7U43e2zG1dW",
  "key25": "4CxkcfZJGdUHy85cADHjxepkFoRikpBVqu5nQfzEbYNsuMvX1dDSQydBTrHSSF3JBvMsPKYkk6mdP8cEvQQWh4Zt",
  "key26": "21MkZdkdfwBBmvkguGeux2D36XSGxfYRhgud5SkEuCB3V9D8bRzkfnmxewkR7ENxU2toYoRr5cssnSQGTqwaaZ72",
  "key27": "4vmfTfPYh4PsNAy7uUvCHiKeu8oC77YAkCt7BA9qNBuCRC58HjAiNDSzcc4YxMWtyifoe41NA2mygdziSerg94Yw",
  "key28": "3FGJxkcoF6xudjremeeYik6kjXDzGN5zvbYBTD5vezeyDi671knHosPipojw3PbMBi5Q1rZEZSFfcpBTkQJCr9ym",
  "key29": "5aQJ79ty7FAYgwKQceJWJdboJBFiL8feBgUxbgqE7gvxd836BeFFEV4rFirHoQi2zYcEXjHp5yCGEbgevjooeWjU",
  "key30": "3iYUKuQBDTUPMDJn1ehmsEPFYsCZggs5keR2SyxL3CRqAQj3Nw69rYK8j2AHM1iucjZsQBDTfQ4Pudx6PLchPoqz",
  "key31": "4k6RnW4EnxFVwhVHokjFNee2npKXxdjgs8bjXpj12eUWVAMgaR1AHJahLLn12PYXNAtkFsaxmcFZj9mvk7SsBApy",
  "key32": "2YbJhZZsZGpjFdR9iJPnXdk8w9vEwtNyXcq4Hm8g7GGHWkqC4WaHHNXymMg6fUxbVniDp65oo3DnYk4nA6UEddoZ",
  "key33": "5HDQ7BncCfxUuyH8VccF3zmJEcTNUMkHESkSVkabTLJin9pTFdjvB9fTHukYRzpS6nJhoPridBYCEcJUDhX8SDzX",
  "key34": "CKCTVcfsp3thzBKJHgReup6vbGNx1mSGbPH2yreaeHW5YeKrgdgm8HyTXMkqS2jHKNdU6Qers5aJVUuJKcn6FPj",
  "key35": "22kRt8biB7g7SYHRtDZV5CnSVV9hVFhhdT2G6pHAFDsW6CnxgMU2TuiAyJfVUDv6epJ6kk1rNfQ3z7abFggCFamh",
  "key36": "3SK9L4Kz3DKptmVnEjRpNvq2Z9ppzJQWCASEgrrdKpYvMgJ9HkSwtsx13pJ9GYybzSrG19KRW5B1A7oYRmSia74x",
  "key37": "5s5eEnVjNaq2AmzAvCZpSHWnTkTwdqtgSoGQLUpte83vdF1ipY5z2vuZay1FpHtvwfiMfFRyBfUNiyJzqcQdqRUf"
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
