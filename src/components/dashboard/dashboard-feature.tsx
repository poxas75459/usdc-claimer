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
    "2zKvPBLmh9EkSzVrGSvkufeZZ1A7EFjDe2E1c1txkQo39RCkTPLZ6qyzJ7uvdn2xR1mrbjL7aGxRZDUJXBLoAp1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Km5v3Sp9AVS2HiN2bTjWR1fw8PkAP7SNsZBLy4YonLfdGx74yzGFPauoApSVFPY8tigm8q31aSu4Zm72HCtVJ24",
  "key1": "2GSxPfSUpcs9ykXLXZn33KMvWeJhPeNJhgLtTq4bw2isdefeAEZ5jquAYTvdzJMDKUBKiJzf5KFvuLD2iHsUqMCr",
  "key2": "jPmhXJwpugQRm1gnvErG2uh1uh39XoCEdVJe9WfsGshqqZB41GBHQ8gBQj1TSAX7KjJB4TR9pVv98dt6z2fSDHz",
  "key3": "4bJYXwhmAsfxSYSUw4anwryPLP99XUaSkg94HG8BswogRhYYH4tmjmPSDjrDwk8omQLe62oj7QBMZyYMARJkfNqi",
  "key4": "29Kjrno28DSQ6Ev3ucdSQbJoEkqZ28SZSUpF3A7Wz5grc6ngeRsVjaBJPH4RGJrWv6rqk6z1jnmy7kqtJxbKujPn",
  "key5": "sab93VyZXR4nzS5JqdvfDyemRzKAkwZ4pdrVo7YMm9LLbvH8ZzTqjjhjXAELvewZE21r3cWGDLDNmCyTZRQe6nq",
  "key6": "2hfMdtNfnpSdrnBocyV5cBYHX5TU5zeHWeeLzPj1w6bxQpxcmnpjMVU4pBsmseFUHYJpPXLoq9WhjsFYTYLJUWsN",
  "key7": "7xZkRKtKiFAK6SzTftwrH6nAB8pisA9fKo4dvzinFAnpPY22susVgF6VeRS8ESd9YUBPkYW4XnFTgkY4EhWWBAu",
  "key8": "3PjnqygcVqGtDTJMQD5cVXQRoCJNZbyB8Q7kkmF8KCDF1NRq48hxzGoYxf5NNLDoqPEFBpzEqMcQUgJEGgQ5vWLQ",
  "key9": "12275wuGuUkp6g7EteVcSJwmNtt53p5ndRCTNsGYn6hpuvBeMbPEb3MwkrhYtAs4Np4UfgbEmZZHnHbJhuRShGEn",
  "key10": "39uAa8yAFKcZEiuXQGL8YNiX4fV8Brf6U5mA17u6q13pSbHdEEWYWYnm6czhhFAqXPmV22aUjidd2fYFs6ZNG5eb",
  "key11": "64qUReydKJe8azwKACHikgFCo1krZTxToi23L9GnmiswUgRjVxKFqwSv9U6hwsRwY5rC2PNvvmYc5zANByZp2aZT",
  "key12": "63NcqQe96pcMcmAHQhjYhpNDF9SdQ9UuvxEH32JXshALiT1VGLHRQNgpDCUtM6jkmoCFio8E61CxTqK88sT2dnfA",
  "key13": "WMHuCavgcjn8Y3T6ywWifTe8q3eBrojc5hw1WVayGJdGR3W8WqfJXYi6BZkoumMzFN9vhzp5b1tH8hHo2HRJD39",
  "key14": "h2PzjWNm8cZmqFk4c6a8Rwa5GnxQqHCoQPG2otXmys2P882PsFDtG9yNgVynMPrBvyASBda5o564zXmDjtqDiL8",
  "key15": "4Ek1ywmUQM1jMgzYFqTo1FS2AT7aW9Gmz45gb2oc6BpTSiwvzQZSR8d1oX6iMQDHqoa6vv7W1st6W7i9iGbaraX4",
  "key16": "5JXLxuEKawQTsfJkMJjMEYN5ibp1ZmgSERo3B1ZyoukrmAtmMigsEW5WMPndfQmjhwxa133P2ssN9MoRKUSu1eRh",
  "key17": "3Kp9mJ4mV1ZW3TkPsGx4SVoYXFX8qvptVFTHazf83AkfVFpt6KxNj6os8Eo4gPSHqAfopmj7eNYhyoLgTVWXYFN4",
  "key18": "3xGcdcSJGvK4W2KaGqZ4bzAYdYWPEzyRNi8Zh7WkfcVxDDxPPcfgHMjETrTVxkhvQzUZiRxDPvDfHWM99BojmXMV",
  "key19": "kMzyspgTth9uE9qHuRKk15Q44NMFb4G7q371dFaErHhzbTKXE3RkdVYnvdxkxiM6KjxUD4E2d15Nyd7y1K8bpu9",
  "key20": "2YMR7AbykKfduSbEZHoyTHkB7WmXFmnH11cTjbFq7nkfBGKe4PtaL5PZMwSbbdRCei7xsJF7R6L7U7Hyh1kLvWt3",
  "key21": "2chgycuyY2VnGrCGr8RaQoDzm9aeQdZnJRqtYc711R2MNqPYVrRduzzvAEREkKo4arNStcyoaJkYQ25UGkQZqKW7",
  "key22": "4tzzNb3GgEjSDxr1AUp4Nwrt6uqLyynwd2YUMYGFsYKu9Fsw1hPrEJHU2cYKkdSfpuY5ok66wej2LqLsVrNZ17y9",
  "key23": "3AWtEBBzLALvaGz85UejReUpLTZqqSRpqsmJA6tBTVDBMbxQo4cTQdV3cUsVmVHcC1gVM7bxTha1L9ffzWd85jeg",
  "key24": "3fMZy1xXuwqL3qGQkAVBHUJ4go2LbJC36XfspxwK53upZNCjJ1S1r6FBtENyVZcSXLVFbrZNY76XTo4HKLao298V",
  "key25": "2TTXx97yyYUfM8bWaycULLmtsV8Xrhk3xDj3CGLrmYLjN2mxcuyNTfmHPcSyeN7FZro2wJqXFUafVYKBA8k2HfBn",
  "key26": "4Piq5to1wq4dS3o2j9FLTBTAV5CBBSRpKdk4i28kzhkebgpKho4BLw9oprPkSFKXQ3DYksCUBaf5ssmMvae2Ab78",
  "key27": "CNTdDXu2weqNNKUMocrjHHe1M3AoKdBrbN4f3e74R7KbKcXgysD7hZ1Td9amLGSdTCZ6xgJpypDhyHoTkRUcibZ",
  "key28": "4npAGpBG1V8smzWnaM9kneQZn8GLkSTtEJgVZy1F51pKHz5P9i7An4wEcJP7LJ5jbSTvw177p72KSpbMYopU7Eom",
  "key29": "2iH9WM25q4CDYpnhR6UNHQVkbAHnqoNSCci5qsZQJbaDkQxzq5WoNeByZuYqXGjuwDtKC6EFdW4gDyqrPn5EwUKt",
  "key30": "3myxWTNA4L2ttBwEoXRs76uFwBVhfMsKfan3GXmutJ2rCnoMEYVtH4EUi5xU7jJgM8THocW7dZcWuvNHqZ8gdyDk",
  "key31": "5CistmAvZL1bChMXvdpjdswB1uP5BCkXaWFg3CEpNZkc9KC4pgzbmt3NMWiz2P2yH2d2ZKUnQwrHvf4B5xikg9Nx",
  "key32": "61cBf9AK4UEqGPSp9dhfC4JUnQnY8dYdLuYhLBBMp7YJNk9rc9CRkEFrrkRwpLSsQjMHT4SjBeHEgE7hJ99iebpk",
  "key33": "3HNNn3smCiMRXuPszUEW4VBKYSDVyczKa7kPxogmetKborcgvrYHCyy1kM93eAfuUCiFBVhbgGDcX85GgmUaL5CJ",
  "key34": "3t4TCg95QpR5tNh1PKHd21Q1LFCmRx32yVKpnpwRcfSabN2v4n4K5W6LEaSuRUTnafZheWEXL4UmGaRtUm3JCcr4",
  "key35": "4hkJLLmQeVk8So7AnWe74ePfgam84AWdsEoKjjixNyqnpSbYM7DcS8LQA9NkLaegqQJKWfPY79aErEkZAs5kHtx6",
  "key36": "3Fp6N2ZUeGSSmp4TdrG2odogPf52tcuJwoZps3YJn2twruEC81Dhhcrxwh8cVBz8f7DRnJgBFURoC2NSDsbV2PoQ",
  "key37": "4nUmJaE823vT5pDsvZwqNTw7p8iZwkk2ghRjjCPQrXeHBAWuqGkd8DVts7qBHY22KmbKjNCGZW6z6J873ZrG4eWj",
  "key38": "5oiV9ZvuXg4sbzc8LCcBRy1oa4PMfmsTnvr51HvwTCnrk6ZEdRu2VDZWpEaaHPRWjnCeu3Hts3eihUFdjepVjj3A",
  "key39": "5yXhP17TDK9q2WUUpyvpiQbhgFYYgwEqyMA6NHGCRx4nEaUrVojWn3zCsVgYm82cMdX2pWJg8Am7ZBsmHrQBZFFd",
  "key40": "4TCaXetGLxyZbhY1NarZEKZw6hY1SFjcx4p7eiXC8VrsgFB8Ycy4mGLhGQWEA3oHdTgAxoDguPCZMk1koS695LfR",
  "key41": "61edosFcyb6XFtnJ99a75whage57GoLpaZbzyvp1j6ngAPdNjXBsz9b1nRg7XN4i6DwBjU7j6SySCEbgTYXGw75U",
  "key42": "121fGydHHzG8b7jy7RJrkb1ZjujDNpAirbcMvfJ3yhKXhga9mE64UUW9kmPjsqnvkYgnXMnse625YQuBaTtcStTd",
  "key43": "APmo8e2PP4FR1t1zLYADq9qBzXRo9c6K8Q6ZfTqZW4Rzca3wvP7mGeFUvxPHFC5ST2QoYH5fnufybrVjBfmfTTm",
  "key44": "4t1UedwiH7tMoBomvbc1rZifCK3VubRZ7NMtzQuaJXuHpoirEQUncnHKVtA3QUJG4zsUfgmkszhaULSJKZ39qWkV",
  "key45": "26oLNF8DKFafwUaD4xfDcYfBdz6uLTKY95ZhWnphBucYNNdUurACyKvBgnCrVCwQqbNoMfXQHHqgwBRMsuHkAX5x",
  "key46": "4db3AZewHrKpHMEWgHWwARf8DnvCRUjijxAfHk3Ugw6x2pqL4eGnfmFMNSCm2WRZK4SVb7ffDKMkLnM46ywYX6Nh",
  "key47": "3U1Hndcn7Ge8omWBsUwujKiRrXRGb74jJGSsG9ibjJos5jTAjyAL85XbU4og22hMXXCcT1Qvtxj62VknuVP8gZsu"
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
