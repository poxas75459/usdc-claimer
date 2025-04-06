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
    "2QV7iinpaf4zdq4hnFXzqdaPa7C5ujbDzhTdsv8o2dSH12RDt44ErHTytoq1UhPEjtCKf8hvecnzBJK8hNypapSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oBYU3RJw5krqCuiY7nGxAs7WKSu85zTsgqqxinWVVZVkgV6HHNWFf1j1eNT9KMLvvffsqNtr7KvbCG8LNyk42FZ",
  "key1": "3fkMbX7cAUznYynSjABtSh6nRNDfx6tNMr6qhXEPWSvyKtK6WPwQUoJtwJx2bJAZ8jRrJuKgr8aV3SP1HkhwDtzG",
  "key2": "5yPUxWvi3E1j7p8zxiCGrTw5QG5CiN2noEkieTCHX2EujMd68TSExCJLXoDpiWV113sNjtpk4gcKZZpNcTgKc38T",
  "key3": "66mNMahgJXTsh6soL7xXzAbni5aMvYuw1c3Cy1V7BDuMSjsxtvaRRkR94gqw6dYHffZ9sAuwgEP4JoY4YQUpbvEa",
  "key4": "21NzQr8f7gLhHANku4FDaYt9XTNB8S1Thjaann5B4dszNdXuvjEdHB8RPUjWW7hKQyxTDcVN7Cs9NdYbUaczRDkX",
  "key5": "4fM8uUMtwhvTyT6sBoavLKyZ2ooY8etQvcfuLqtGs9LTMVCng6Lw3vrPoKaC8F832ySAxJbmzqya4gDZZeY4GDpH",
  "key6": "2vBY1nKQYwQKykDTysq1FBHMFivre9PWrk7n27QZkRKAHRiys2nsk1bbxWiqYeReTvrF8NBuf1xMh4UT9ohge9w7",
  "key7": "qq8FLhg7GtDELXbR9zsoVHQiTfGGuA4rftymyXr6GDFYMcVireMjXnNartdmFNP2xFCBKqdWg569nS6f9hteVH4",
  "key8": "3vqDnUD8gpmSbqawLSHSENurKG4taYYWxdqKZhcE73V5sSXF2dG7xW1LMj4xgxLGuVhePz65cyPmLzNE9S6JgBw4",
  "key9": "21gFfaDrNbNpBdmTdvfHXuJpe2txLVWjsz4LrozbmAA1L7XAwVpHgFpAHEKhcvSaiRFsKGSKAjSDCgH5bSTPA6do",
  "key10": "4i2XX7VtjBY4otbd3w6vP4VgyK7JTZUNvK3gim1H6Ua8Q4ZZttRqNk6gGD58AQwKU3BZ8iRbu6WUiuM8s626UUL6",
  "key11": "MBAY6SpXm9YzPnd4iSXtANkNS2dvMk9et5NuB7bU5ae3kz14j2ybniW2HtJEWJp1bRgD4EuGAohki6JRX4VxT2y",
  "key12": "2RRfph9BUjJpzHdyxmbPujNKq7aQEE5TJ3pSzakkA5FWJZEjBajauTHJ4CETetK2awXzp2qPxr8uHRCtH1M8VSg4",
  "key13": "5JkjyV2WWGkXt8jydJU6cYof9ZEmsccZPh7x594rWixUJr9erTFcgDeGwnF3A9sEUsiRBqkhbnmbkGxHcVUBj1Vn",
  "key14": "5UfepFcxbEmNroW6CqUpdifdpwRAaGXu8dzqJ9Wddfsi1sYfwGQvSDMStMCuoLHFuQgiGFCs7rQ53upfdsfPg6Yu",
  "key15": "5CqGdNiRsyqYETVtReUJcCnHeaJSFREAUDuyWYDxvujQPwj5kYTMe39gMYErHMGXPbXZDF6XaGxGgq5y5are3jBC",
  "key16": "21v8XFb5dy8rhBB6Uw5Mh2bTVEhMs3qxvaiwwVJuz71Dxkiyxpeb4kLkQYRoeaeMonJY755kXj7fALyvZEFTpcDH",
  "key17": "3z7CU3oZrqdJRppGNt4kwYFA1s5zvwwKUW4tD8EbR3GYiKt1jWvgPhGo33JemfdAcAkYxFjBdV8rutym2a47v88N",
  "key18": "2Rmbn2iczFeoFgxvRP9koUoud8rbwoFC6ka3ZXZT5CbP7FSsfjFrEPZmCfPsAYQ9raFJVAD9346BFNZBUsEUGUNj",
  "key19": "hMk3d6RU8yKxcAZg9rJeZdDHgYu5yic8Mfm3q8uGyDbxGk8sQUBj6UNyhnd2f6qtfQWDk5zeepB9jY5QPBQHi91",
  "key20": "omscHiai9Ypew1rcY2CUwMQrmTeiDbTmjGebfso6dwUA3LXZWxqFo9TeF3iuWAeGuygAembcfAQ1wtypSwcmyaQ",
  "key21": "3gfzWFR9VegVGcHCU9Y8Q2C8TL5QaE31WNpybwuh6Tiq8GhSdN5KPooEsCTkAKi3XXBG96ogRHjAeuBMP6ubDARk",
  "key22": "3Ba69onc7zFxrmY83L5M5n7KnqMDQfnubup4GJ38fou2WtXASQbq6gdv5knfgyTRKWow3Tb1N2rNj13KDuujPUYC",
  "key23": "2LbbiW33ZPWSfZw3AUZzs9QeyXYiLXSeKs4rGXzSmqECgahq3f9DCUoUwf1obNjmWhxkNqxbeEJjqg7Xw9WeRKus",
  "key24": "u8QWRnsMNSb8pCz2bL9MQgyKZJE8JQgJ1CRNnEhvqVZRLpyDkqLDoXnCbzXRWnKK6LGN3u9joBCGAWELFEkVirM",
  "key25": "65j63Qe9SiBRDULHKptDE3j8emYPnGt3q6G6PamGtCetR9oC9WYkdCRJZi6xSUYDTExSmM6Y64D57YCj4ampdphq",
  "key26": "3xR6WAWU2B22hHcbeurYVLcVABFvci6uVmH1kjV2bwdmv8oszjYLLqvJL8jdijMuVacL12XecGrr6NvQtwx554ha",
  "key27": "4y65gZVpSNtPPF6SuUZvWWf4tggaYwRwba9YgUPUa15ZG2Ru2Zf6ZpgvMX3q4ApzqYDz7phao5yWmpnazmpkUgHd",
  "key28": "2BWPEE1MijoW8bBuo9PwGPsCCvyPRaoDWzU3BSZoQM4ZTpH2WL6xrALHpVZ95gyMdhjHwkh6xRzUpRtfduCkkeJo",
  "key29": "3i7QuVxBRL2kEq3j8Ja3hSfSZCXsr3PQvzp2H2KtLeM1YzD16SZsb3bnrZXToyKasZeSirGJXz39rXzEnmZLMv7F",
  "key30": "4xLbabuk3zrzAbwotvHB4WQcVV6DrDbte7jBK4xpQcpeVWL3G3heRx8o2uJMWAyBAr2iFykYFLtDyuTefTZieLhL",
  "key31": "2ump68Rt2roFq3SjUDPpWC1zh7b9oZNTUbh8o9Y6D1dQGjprufVH9Vb4UJ1BQw5PKrzj39ZtudY5GzNYWHwuW1Mo",
  "key32": "5WPMF75ZhYitQXKbp5ZviXr9p7R91evLmFEFf4pVCrPVr4U7ChnocV2jozNGrtSmBiCZXJL27Zij3Tm3TjvmXyAB",
  "key33": "uc128fp9DBSpJGBjPKSbgMZWyP4rzEEf9UPN8WQ71PDSndcbwbWXbgAXTc6Qy5cXiFrfnP9hYmjkrZHMT2qtu8p",
  "key34": "2nznUa6xoC8s6vH8tJGwXSbTk11aTENSrbRHGYaAbfaQ1vbHcWP9AJbxA1VeLfgTdwqFw6y7zeV7pTbVFNeL7SkG",
  "key35": "4GSEPKLVvH4yhGTgDwcTDxobzwmtXUKsmHuUfdhQJhJLai6xaPb9fjRT7xX2mTd6kcx9U4H7WsSvmt9eFEraDDAX",
  "key36": "4EixExMC2NTaToT4y5TCoEwJqagzPuHyeEERHEXnmXQskgkHhHn8tpjZYzVaacyTxWVgFAz9SUhpkAwoDEpB9WBV",
  "key37": "3hkzG9JqTkrSFSopy5TBdxBcjSesXzGUVRPL57vxnXWmpfUoKNyx2hNQMTHYtJ3ibpvTGBSVe3eEZMK6btJ6GLQb",
  "key38": "4LQCAJVL2hN9CTyXz9Gy4Jws6gcqUu315MfpcFeRPjy5pqqHVxh7RwhjmkBJzrVc99Y6Nzcy44CBbTxNVzFoDGd1",
  "key39": "DTDFeL7TTcYMtVKAvC468CvxcGDKsAeXm7wuS8RMLfi1ujAQnQ1fe5PFCtkupuuXHcNcxekGUaNsirnnpr5Zfbr",
  "key40": "5sW1zQbSq9KLZnzP9hkiy5PRuv4GgTZZSd2ui97gk71NWzfLUkMcNFpppe1sX6WjH84rw45f2nWhosr4RXvJKWHv",
  "key41": "5Sry3VNy5yPAEwxpNUJsBCheyzwbCjUcaiHqQ6K4K3fNpoWm6SWPnqQub5ysDRQytGLqD5eq894R684eN2QQ5dSt",
  "key42": "4SiHLHPoqj4YBBmQrcocVZXtUJB8tcR7X3j3ybQ6Q5Ndt3M6Yv18BADdjC2SvKzwNu5D8vumzssZLYziiwCuCWa8",
  "key43": "59UYmFHzBEkHuK3MCKtxwqeFxBoduA16HCS3Z3nURhtRvikmgmZEbLqvWyP8NHFManTBcS21B2kNiob9tDAg6nkD",
  "key44": "3L8BudeCZnWTmrLLfgteeUYXimSHPwnNkSGZrPogYYk6ZbL37S3MrLswPJKoWBxnEwVjCkXygWh8KUGvujkCn7Mb",
  "key45": "4mqBVrh4fnMDHbD6syvoctGkso4B6AfdjKHYoLSh4ghndBzWEhVcQXvhNFS8LcnbAiyRAVfTX6fF7GeSVPLVkbp3"
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
