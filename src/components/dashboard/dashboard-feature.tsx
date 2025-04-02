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
    "5BkgTVyoez78UPLZ9GZcmdArhJTQF2zXp7wPLkB6SouvX1zFa9BcTLBFKRBYuTmMizLuuovPLrTjbUNhNcHM9AhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hhNYasA2KJa4bC8ZCsvkMDiTBQBSrXK1Lf72fB3pfqFeh2bx8r7RtkQ6Vcor6nXReLaPAESbL1tq2JqzdkptWRj",
  "key1": "3iv16EAqJFRTPeMZeQWBC31pACMRpapqeKvudEWKmb9QbhKrrcyS9B3Tt9coVkSkW5eApqWiWvpex8WyZuFTqJi7",
  "key2": "2aBhiXL2SZthXzqN8CiNREU5KgRDL4831AtvtEbWQYUQdcuirgkiUtCatEqjNq71VMWgcwDHY31waPybsLUR4hHw",
  "key3": "2LMKwfuirLoYUfo15nyEgYmDkqPzG6XCpu7WtnqeC5WsTH8bcVEDxhT5rqYSx7QZPcsoRWpB1JqirwxtvRZkmtLo",
  "key4": "4TTBNk5KEjbJm3bxUbKCJnvSJdE1dm9g2UgPXMLoUffMeTbXex3GZwZWzPe6Y3LtrDmBAvYJ7RndP44HxTNh7JDD",
  "key5": "58ehfhRji3EsLDZmBx9WxLEeDfaFNkwunWH721P4FNdSub8bE3iktbdaqKjT9XwyTWA9FL6mAkV5yUBVrnepL2vX",
  "key6": "4q4wggBAFXVD4PECTggMt4EYGuwG9ndrJmzKxBivskFMmpVMbBXDaBoBCvL5se1CfWS9oCTwrHK7DmN2iRHy2R1S",
  "key7": "2ErsEr97TCXtKnzNCdiqt72tQUMwZwr962R2EeKk3APtm6T8KUPnP9p9DMoW8EaVY3krw5uwqipTYwnqymAHHP2F",
  "key8": "3a9s4xbZD1HDQ1N95HYURBAQ9r7GQWUegdLWApuux4xKcumv96AM1iRakVcyLRMH8TQLEBX6Tr1xUrf4GJ9MHnQu",
  "key9": "5Scpw4pMT6sXoNXhipJyazXrGE7fUxj1C9dvXjTfcicwpKfk8du6yHiECBpkiELSmK511mE8ewYrrfs6BZjowvsY",
  "key10": "Z1hhpRb7EgpjnGASC6CDKKntfTzcwsnMnppfAWqkCFL6MBYiZM8sxwqZXW5VyrPsfj9eLk2XrrH5444gn5UcbFm",
  "key11": "4L3QzoKusi1vxxT9vTSy1jjosW8B1bvvdPNBff13bsXv8SH9ceYtphmipLLFx7wDZ2ErctenBwRmwVk3zyb4SNPZ",
  "key12": "466KAtjiJ3G84oBx35xYrvRPtKjrgcJbSjhcPaZvo9Nj3fEc3g5N8eo1uZ4YVp2ecQPFqFqhKfLuVykdn41886HY",
  "key13": "2NWkuzfG8iMdBZuE72TxHvXzEFA8aWTfqT8GyssYHgX8PTFkWUgsa6XEFPhkzp5JN6E87qAND22NYBCMV2QjwSo6",
  "key14": "5YMnzvwQw5bfbevLMmHB9qNWeAzBjziaKuSRxAE7cbsFKajGdja6qSnoAMHKNG2k975hK2VksnriaooTvTbfdkuV",
  "key15": "2zV2dEemAHGrEv69dejzeayTpoEc4wMQ5MnHan1A2D5Fcf5X1dDE7GPQeYLrpFEhCSDT3BPUYY3trSMKNiAa7kTU",
  "key16": "4JFVfbUxoku4tVgDBK2P443Jg5jkf5EjeFhQnUgM7GnNW5szVAUU9PATDPd6xNZazeU1ejPoXKBfbEuYx2BZvrBa",
  "key17": "665q91UVqWNv6WSyd3hxJvJG6TekqfbU53BRkRGJkhYdgjJ5SJRfjdtKy3NDEVvhpz9JGjfBfrWZMVtvvdxN2CHb",
  "key18": "iuF8YrWzweoCUyBT43tVm1M7iP9GSViAabzQLJGHVK96MmGXKrQ44XNWDwpXuxASs8r6WTvRcz2p8kXTHe9wzxc",
  "key19": "3CbwicZRzeRumYLWcyjDXv9MDkNcj7UJ2C4gYTLxxzuqrHfeSC13Anw7JcjHvTnQRCgWDNPawC2KzK2C8oTbLxNp",
  "key20": "3gha6qk1hMzA3m8rabeuPsSvBroAw6ZmMS4fhMvaX3mGuGhvAdywXnftoJhuP8n4VHQM7ZfshhQw4xvh84hF79xH",
  "key21": "3qjTgFMxYRNwvK82SoSK1dPB3DtRQGL5ehZTYz9umerfRHGh3rGLAczR26gz81LFNbFjvq99G3HPGMgnxLDCR4Nn",
  "key22": "4Hzxv18SgxtQmB52dY2THjYK3gR17J34tSkvVDfkFo2BAcjVU7LEHmuV9ZVyCVnYZHeg8pahHToY4zXch3g3GPKB",
  "key23": "b7ajaKPeusug7P35tEo4xnCr7Aybu9pqLGLPEPZbcJtocXR6qf7dskX4b444UzB3oWD3eHAy3zV4m77h39y7uTm",
  "key24": "56Gx2bzubAJGkUy2fY3kfYvkd5A2nt3nMM44HhXKmZUKgdHM96QKj7PybGTJ8T6rCCatsWgDuy4JhwwC7Jqkwboh",
  "key25": "5RtyijAraR9BuE6R5ZHNJVLrP9eYpFufb2LG28TwpwWKNd55ERDYTzPbqgJ5GztFYAhWGBFY7e3MFCF6GgMWHLcC",
  "key26": "3GjNHxLzuoQYjzautisQ1xHTDZQcYdAs2Ak5ZD1XK7FCguSbmxLzhsaZdW7YAvCx6cHPJ4haAKdsB7mABdBDicvw",
  "key27": "3w3mnJ7xjjrkcxFb1RovEt9kW5TwAaGxX8AA8xfhSzVPEhuVukP4padk2afvNJg4WkrxF1YYJ3kQ5anfVYM7fYbc",
  "key28": "5gdFiDbM4RnAWTequhm5tiXN8iKqYWfLEYRH7VFZ6S5FFE8BfZijeRv9nDsiTd4n23ZmyJ4BebFisUmY2qoBPHNJ",
  "key29": "3ZX1df7969cD2x4fPa4NpMAUmP5pmybkz3byR7T8NohCyQGWieh5VNrE7XxqJYeZMVPcTnuXbhxWr5nRgARYAznr",
  "key30": "3abk3NMTdqyGUXKZHUqW3aagsePYVcNGPYckfEyyZJCK5Yz2AFwDZsB1adRCxKGdArupweRLkS97zqPajf5gQyjb",
  "key31": "469PYWjj6Aev4Mh6Mbi5r6SzMDuUeUyGa5NvJXaGU2N2sKSxDpiHMuZ26Ax6V1gJPsc6oujup9Z5LGZuaRSoXepM",
  "key32": "r3AQqsbT3u5BAfez4xuRzTTneM2MTcqYdiZ4iMij5VJoske3TACCyYmgFcdZanH4G2xzCTkqL8cEw12Z8dYra1M",
  "key33": "XfD8e7v8d9UPgWeha6SeW7FFYiBbW5p8NBtFNuXkbETtVY8kS7hNNwTaTgmNwHtfPocZ2ESggGWfiwFTRMqWzUJ",
  "key34": "LXpgsiSfMH1xRxCCqNA9baVAnou3DkqpaBUNUM1T73A5HP3awjR3GNjispUf3FHTJLyjUP9vnm14afR47BcDtpo",
  "key35": "4yWTeUNYpsffz4Uf49P7st336eGjKHFUZKBZpjwnRZww1HULuHWR1x4zPC4fqSgFhE5YMmtczyXKAKvCM7WPqMKT",
  "key36": "4JorhBCxV9QKd5zzxAKo3GHAS2kJbUjSUBV69oCBFvdMF251V4o9Wny17ititD1dErQVGyHHJA5tLv4tmW93waVs",
  "key37": "2HSt5cDYn8AJRHafARC4SG8Esm78BSEJe4E221zVXdF1LYagWEhoKNEwgTtUjyPHKUQtsjk1dvZMDyL93ay7UbtY",
  "key38": "32PAfoDddrwop27Do4CnrhDYKsco7cEHJyTxrteX8pW44FsDW15yjRJuNd1AdmxLjysybsVTXoygBfd8m4wLtyG6",
  "key39": "3wHySx1oiP5g9SmUSgetVsJkp3KbNcpdDw8PQcjHxjTZogJuJEyiZBJzpUxYwuHwTXVM4fcRK7zzjjwHyYsFguiv",
  "key40": "2SP5wPQoHD1AkSR5GYHMPbzkbxNatRoGptgdN7aUxJDoCZEvRXsDqKFtu3ZUbatmEG1CpVuavgvMvk6XwQ9tFUN6",
  "key41": "2aac1opoRobfwcgvBcAwKi4AYAScTqxgEvtTsoRNA2QFmW77nD65HydLGor1QXfkr9TXumNb9nWkvYFTPYSivVpd",
  "key42": "668UA3J8kn9rQTdDjrhcxpke5jfTLFBtkLRHhTWHzKeTX1M9G4iHiWiycnQzn7MoxRM2u6TK31p9P29UuVLsECzy",
  "key43": "3sm5dvdkzWFyYaaG9jS5JQMws1UVW6fVx4uVLenUm5Xy7JMww2bUugd4YA5craDJmCvfzPomMkWSkYFhNkC9KBah",
  "key44": "VDJu4GiMYJvfvLtR221v88WGC7vXkS6wKXiKYGX43uR5pTKTpb2jDEgNPffa4xKCSuKnBf7tVp6aqgrxaVHuBTG",
  "key45": "4HmHvKPBvty29UQTcm5bXvrRjF2xdc8VXDpDUao1LgQ7WQR5SmM5GWZkbx34mrCZcV3snJsoksUqCFZWSWSHvmgm",
  "key46": "65P97DNJSYbuUrcC57ABhby36YbW2T2tCMCRNGZahB7cNdUNZ8526NHxnKAGygGpX4nSrP5u9FCud2KRUqrhKh7s",
  "key47": "5ZfoCMmsgVNTSY5BP39K4Feg1WJKT66Wxfa4RXdWEb8DVrxiCytkznaVRVeTNjoHDumSHMJCmPcuj9trjKw2cKi5",
  "key48": "557KgyJP1MuT4xBxAzyCPwYpdisiaZxa3rifmq2dZZ2o2c6jCu1Jx6df8Ndki4bxagFuBDDdzdYAZddNCEPnwCDd"
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
