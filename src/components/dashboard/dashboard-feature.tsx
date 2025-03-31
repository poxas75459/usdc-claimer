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
    "37g93VPbVL4sEDA1kxG6DK5femriDnWnftkzsT95aZ7FUHh2SuFZ4T2UdmQWrpKKmJkNDe5Hfu75m5mvqAGM4NMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bmdZv37e6uPtWCdw1MhBTgKMNDCNRMSbEh9reUWQ5mBQPPStvuakvoDhMaE8rJqxvnFugakdKasqmSmP1GNR99q",
  "key1": "31YVPkkcWUyiPysJy4nkMCBc5syZFDzMc1wkNH2SaoHJfAr6DmsceEgLEEW8t4HTGPbps8bgj6quKgemmbRmWwfx",
  "key2": "2TERUedsym5eEeDAqo1p3wD1kaxhdq7J34nRsNTcid1Vt7ju6vhTsUcKXG7b1Szpu5nmv85x67L2tpPP4sSMhWhB",
  "key3": "3x6QQf9FmqGbpBZRPuAD5YhvK8PdSTm8QQ9nn3exyFPPSMAm361ebHUZoWr5vj8bzTAdPmfWHpHgxvMSmoEo4nA6",
  "key4": "3jxdPZ3iPvA6curM8SRvC77uwQxDxdnPyWWxjGzRhfAAavZD63TKhD3F2NE6fJnaUbmgCnpxAxbbhDEt9nw9jvde",
  "key5": "3TgWPCc3KVb3XkwLCY5ETy1z3zCLQaPneMC9WCbZ13JFhyg7v6qbwYZRKJWB3CwbgFmKbKWxn1dbSYpuzLAWzxDP",
  "key6": "dexKvVP3o1jXP98JzWxrpgKkiCUkY1zWBePkhxUemnYH8d2rHTH8pGNw7Ti4dbfYmAhWtuhRxs511e76A7ziu6b",
  "key7": "4qvJJRMNsALvbvWW77jSh1GS4TWXaHbRLRKG9hVZ3nYHYph7Pnmi9t7W8sE261cwJC8H61JfrrACWx4MUUBS3ctn",
  "key8": "SYpsg3hWAnLeCwsoJJAQWvQKSZ4CiFrfCErPv9jTP1uksCstpzXirTxC3TX4EkrNdUT2efbbsStuiLTZ51eWx2s",
  "key9": "PB5n5uuhwovpD9hvrWJPTScCESLL9uALR7r9sVgd6im7mKvu3ij3mfKMeVyVhGtxMFESA7bsnruzLgcdNF9wkug",
  "key10": "5D7vN9fiJoXYBgw2h5BJmYHKvQyBqtdgTFjE4CFMWnMD2LhAb91oVa37vA7K6uwfHqkFvprVX1mo9tzQJXo5RYfK",
  "key11": "5B1F7qSsgb1uxcW4oGP8T5MKiGnYgvAd41KDUnjTj5kypjK6kxthD3jkkrAC2yi6oKwpgKuJi4RPSoVVKzFkcnZv",
  "key12": "3BipDqzmUQcvaJ7gv1sPLRv4pGPMA2ehYia3VXUQwZtWRrx1xpnBHvi9ebDizWxNtC2J5eJjS3YV2ruMWCr7rUxA",
  "key13": "4pfXAgKcvc48GEgi3n1bzZj9qvrmVPtwWWwVobMLgVeNWrtwQgJLFLWemqwCx45grkyVVNsxFuZQH7roywJRCBBt",
  "key14": "3rp3Zy71pDPoF87FYWV2XyLwsao4poqrb3Bry6o8a1oMnPdzZJHW3HgmKaHqZxz4jEXpEZRMgL4DHNjFtGwebmNw",
  "key15": "39YkRV9CnSmYCLorVkn1VAbDgNDvwGExxMSZc14aGGyY3c8bRHUuTKe3xsan2WXxPL37enHkXUCsLbR9vRP3DjdS",
  "key16": "58E7C5SPLNtwr98z2jYTE6jh55UXv63LNiXSXNwQCwxw4qd294LFFBNSKSyNqUt4kWVBujRAr388sNWc64h6aKiu",
  "key17": "227z88Bn9M8Rc8XY9jAhQ5p6PbC6Ad65foZPeZP8QL8pxMZwn3rSPfKKQ1wp8s6mJRAViVsUJFCJNgDTAcThRMcb",
  "key18": "4EBqLrpgwiPgMcqkWeDPZyzmLjEo3ELQGkgeafXM8E2vnZ8ypWhZWMhprbuoZYhyzPfgf5Er2LDQBwytMKxwySnT",
  "key19": "4XBnL8Dzpq2rZgLonfnAemxVh2wJbP9X7Yzrtdvknm7ir2rbqtM6JhBsgmmzkX8nTacsm8akz4HwYuJE1yaBepAs",
  "key20": "2FG2T74RPgz2ntfEisb58ii2s3nqVdsPfY3uWyY8GjTPKiRH8WAT2kvPrG7Ucby5XX4rAZTbdAyeXDC9QC26nEVM",
  "key21": "a7NJDtV1YCRutABFa6U9tD2Sk6jTAaSRJjdNHD3nMSZ2FyaSdoKmyY6ZpLZPqi7E1rxaqUWBDpJVhxeDSgKkDZN",
  "key22": "4Qxyzby1zv2ipqwAEb5HhVyDGoJKTZRLrLz1eUprt8s6dA5cpKrfoCAQA1Sz4Dp3g8WmExc32aLnXMDsmLffydMR",
  "key23": "2N5nnafhRqadztB98TQqXQYqRkzfsvLjggyyR3LVBP6aUMZmcjqovgAtYEt5hBh6oGHKqtc1FfgdF3y9N8Tv79Ah",
  "key24": "5kjqi5ZRVBSThwiUFkhpG4aHQFn1VD38BBz1RpsdTQxDQhfMNJmDf46s7u9iTCQvk47NR9KMEUmYMrTWxnYoph2n",
  "key25": "5sop2YZ9t1UHNJMvF83rigvEWegbtZYUxJmi6dFJ84z9fsedQaSBVE6dkPF7NYEdkDFzMQEwXRvRwNAp3SRrBvET",
  "key26": "24yJB78ouBwMLwAkjdEQKeLVdK8PLcyU2KAZexWY4UmMRyVEdUEyWhmVTDYrLydEHRsCFysuczS6byJkL5E6Ut1P",
  "key27": "5fthwfNuCbddsabHhAndb6Qih9zUcDgcTPLRUrW71m7DuWdZ46hamfuun1ow9p47NzWgWnNxT1ZBfufMTNc2ox2D",
  "key28": "iG1weV5fjkGGf3VyDeb8E39qbpjzQqreP3Qiq1DXPsbRvizHikMFj9BEqjsVUpvTY3doBRBj4BawpJqNPS7ehWq",
  "key29": "2sMaSPHJtKPq9r9ZJou636dcRpYuNfmgxFDjYhGSFidCXGEJ53sMJ41Tk4zDVRwCKeQvji7JxcHnvra9jDjfLact",
  "key30": "4ZwSwb7WELXNa9TTyZiRibGGLqTGyGwiN5QfgZXhTCydYwUErSMasbDbSzDLMDcmgAzQmgkJPLVqRxw8argWuKsG",
  "key31": "4dLHiyQoir5tbZaYvhLRm2DF3NEzxj8qYV9RZRYbicn54VbrPiz4m3TZvnmxsjvv8G2gPSUT2ykE5Yf9euw8MM4o",
  "key32": "3Zi3LYMvBZhFYRqSWveZ8LNseK5xKaRPWJ6KrfKNsmCCPuEtnKThfu5RNpDCBtRSdoaZYx2K68KkuRARkFkLJCcR",
  "key33": "581eoaFR9sEGhthjtGbtiydW92AP3ERfWvjFRLjCyAR1oD4MLYYrCQVcmd7ffdLeui8Xhgt2LcoVamPCSFcWMibK",
  "key34": "3DsSABdDVKoQXoQbVi7rEMMMDMm4oopbRXAHhWgCzDnCtF7bDccweBsQUDYjpeLZMboa3wT4hdoba2dKTLa92J3J",
  "key35": "5ibMD5xac39YNasKwwRSKfx42xgRmLXHkCX9oqrzmbb2njuFwwfWnTqpmwoEjgPZjbn9gkAYsGs6FEpsAiezGLNC",
  "key36": "3aqJWjSLyRHXsUcNS1nWuKDgyneR2dmJTCHGQHfVPo9t1j8d9fZ1t4D7upr8yqKMQruZ8wRQu18JTfr4pG6Fo68w",
  "key37": "3f3gHg4aaHa8Gb4NW2LpdVpXEivEZthqUK6T4wkPTHDfoDdA7vLD3iwfxogWTo7PXDSD4h2YcHJUns1jkuKxBxXy",
  "key38": "5wS3ycFLcspRpNmeAH2ijqPwmVdWqoKhGwnZfCPBGuBPQzgNdUGx5VfToM8SbSBcz5E79jHU1Uk1nCaVpmJmkVbP",
  "key39": "2bqF8AdeUpRLHTrV7Z3kY21ygTKySqbHhnWgp8c9pvoWJhTLmeMgqTJitm3b7tp2JvLyDqZ9YHVRnxeAYYsSEzNB",
  "key40": "3an3oGVLt5zjggi8nfBGfAe8xj9Hy8BCRT4XESnAiRjNMmoLJv79CHgDMimaAyvEfQ6HyiLszPqt68GUJDtQFJQa",
  "key41": "DcnvYiJvT2eFvVuW5MWHwk24pPdAomgvwASHTfvmNndXhkX4JykCagPEyAeaPVmBRMpRdBXho7QYkJf8g6xtJSM",
  "key42": "CRcaXdw7mg4eJnp8fZhB8pUgTtKekcBgJkMw3BqTrp82r7bqQkQdKpm73WD4NPTxmbLcLEGEUxU1p5AYv8oAmWs",
  "key43": "5Byx7zK6yy6Ssv6P35zjPLzPChvoVwBiqHUTmAKmoTYUBKAkJH1aW2pxu6r4vv5ny3nnhoxou21yDCfxGXzoYne7",
  "key44": "dei9XjR64PaKGReXi24X41JE5726gjZGJHGqmTaiWSJCCuchoXa1trNR4Ehaxu7zHRrkxXyJkzsuTcjNSfm92AC",
  "key45": "41ZGXRToXe1GpadGoG6DSNhFncawau3NUF3mAR7eKKttyjqTSasTcondJ5WuMf9GwiFMkj761tDaEJdtbGfCVUXG",
  "key46": "rGWRvZkvCVoYj4qjYVLG8cXBgtWUDHewKT14muwrWj8k3J1twFbj58hWoC2xQp12UyubduiVirhf2fHae8pcYSx",
  "key47": "415yQqD39uWqawSNfXHSfzU2GD3PhVDsSaCbTCxnfmF3JuM1gKvhTzzsPjYY1nPycrFC7jRFoWA3ybMdWtUxDB8P",
  "key48": "r1cDiCD34cqL1JfuwfUKA8jgQqYnJRsuTXdMruNXw1ebycHg2SWEgaH486FFStZVUU2JBWobhQ58g8nxfecVm3M"
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
