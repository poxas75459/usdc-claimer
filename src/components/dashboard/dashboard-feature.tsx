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
    "435zrzP6kwaJdwTqk9oXrTV5QJQH5Hh4reYGDmpYM1gg4aGtY6xYrVBZqtFyxEnM2De7YJQ9nT1Aa7rzMBWdB8y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KeyCfw2ZgZq5PW21g6wf8tzeBhq5cQRvSNjRH51u6HbdPKp43ShsqompDXavdkoZ5f85oX16LxctfES7AQYuZrN",
  "key1": "swKg8gt7UjyjdTwzMcMvSFX1gdwsvqXYkpgssAdeYtgn2Eu4A6Lhg7CxzE5pYhHHBnGKvGrMYQB9U84iGWrTh4i",
  "key2": "RJ38hV7kMJXk1GV1eeb6Gh26aPS8VVV8wygccefiYAVkcMxttb4GDPRQs2FiPjr33rVzGhBZBPsg1eaZch56zvY",
  "key3": "65zLEVeCSJNsacqey2bkPUX9YsprNVYcFKKyXDBPT3pgNyWqeC2AfWaSJxVdrqLbo8CQ6niqgqLB8Ch4uWUF7gNv",
  "key4": "5KZ8dLtugTgpX9TstKUy73QXoJ8vUYDer27iSNrpkMrynyqKzpzAG1KbV3HxxeHGeJr8SiAPRF83ELWLhfJp2t3k",
  "key5": "541aLSS6sz8i8Dcq39qHGLCzRpWUtPCir97CT8kEoW8gAkSTTAjcY4dMaKLR8iEjYcwH7xwwyRWtRetWDFoBACu4",
  "key6": "QGE5mMQ3mEQ5h81oQbDPJBB8kppmstqgdAB2y6HvirWMTLuMprRgYPykYdktKEv7tGgcS1LAMuvMzYxazkphCrt",
  "key7": "63frodWbknqpVoVNkGRV6CeM9WF4ZXfdV7EUqS3mHxiE5EvyanC6biHSdSRbBWkhwupjurbgVoUFoTLvxVTErFYY",
  "key8": "2zoReyKAyEHdvTgH2C1kKFFshbtLhDQjMV2JAauALQDFwy46nBLFtZuMzDmLY3NS3ZmzViqTjAuVgEE4PUu5YDZg",
  "key9": "2AiN7L1Yi5rTuGaHPmGfxdki7h7FArgEgSfw6nwqBvzFahG6sQJDgG93KeGjJuQHX5Y7XCVnVUqJxnrZJMJ8f859",
  "key10": "2tZf7fHWdXToVr56Dn1zadMRA59ri9hxAn8qe16aEGY3xAWp5wH4Q9Cm9WqU86WJwJezuqHKRYW6nx2BYyZf878W",
  "key11": "5RagP89TocavAKmbhMy2dCK5kUFBNdbin4fQLSB6yMU5i69D6qAnBfLd855bKVCoejr5vTcRBPEkvNm7VWNg7qun",
  "key12": "51z57Nby9ASqVVjLJNeeUKy34Uv1sZwdvxZkrBK9e2xqkCtn5K7bBYKpnSHj2WUKnpNoBFBRxAboVpNxBTTP8dLC",
  "key13": "4JG1FmXGnRt7sdUDrWYLYprQMFs6BBJC6cxAqhefJSJmjWRG6XBhYZfwtvwd5d37bxtLmsrr7At9zsCYpPvyMP6q",
  "key14": "37BtrLmmoWpWf576u8rsj2YTSKLGV3MDFhRbRun84rJ3XAtqU3TcENE314EF4jiMKrBrWETn8weooaVFBY5cdzvP",
  "key15": "5mmpRgGhgLgHKZ5FK56yBk5UWkD9Bxy15p7VYVJuMRncefDNP7rwoPyE11wPDSq6jL6yJ9vwzz3gAgji6FUPAUWB",
  "key16": "5r4SCSY4DYXHfBB2Q4ujEW4mDFWu8pAnfwPZ6VWQTy7UnRiw5uWqrGXANa8kiNMyt8jc8vEWjqzEDwqC9uTMH1tN",
  "key17": "5E2bC3TDqQhCVp3xysWCy9dvG2o2evr9N3NAN2G131uWcCy4KgmphUVbajwUwx8tYhABVXnisGcbw5HHrQZJ4cuE",
  "key18": "3AFBLE74PzuakuqwXvuLLZBof5MoQ7p86QS6MCphegrauAzQNjkWE4HeUGnSDd9gM3VvbELYsJN1qLWeA8vJAxWK",
  "key19": "4z3jWukPxQnToTowsWB1Ebi4vPhzmUqGAUoeVdpgXTV1pXhwJx9wuk1xS1SLbrnMnrFL9JZqpoR6U4J4CCyZwj2F",
  "key20": "2tStSmK5zP1WYh3CGjDwtsnNGPdcZbR3yUj1ErJ9VekNppioYyioqJKWDQijXRLKGiLfQyJAoGYzrZASxUbkk1pH",
  "key21": "332ncuudnCjD1r3L4ghc4Uede5PiEVyyZJ6bFYv9FnXqtnUHowqiDrsxjJAZfaTFcSjNN6sB5uyC1F49YNYvMrxa",
  "key22": "vLGxnikELL25z4HAkefPcuib4na7crxHPyk3KkNP7m3xNFDFTZMrnQtS7jittMW6iLuxXZQQPtqub6bRBQ9FKVu",
  "key23": "61vRRhwBz2XmC7hqRtLHQ96B4pnDbgayaEj2rtTDj3YdvWaHP9m8T2NdwtLfirLGkF13erMhtEk7tkmoGngnPaSM",
  "key24": "4HcgynyyPP4S6H4efWMyddbskECphVjGwDqppfNwVsE87SQB4zCaJBAFLmnxomKbzL5a1ezhijobVfBp8esYnxrp",
  "key25": "31ebTYwuLcYZh3R3hCgVA18od3oAvRvWSPwf9C5HBTEuEZZVkb4jucuhxQh5Mjciq6EGp8e7wQwaQ2jNPfLFUBZC",
  "key26": "5be4tV7PNhRdC1B96yQHqYtGN5xcgPs5MUQtfEAxAZ8Qj9SuEpnRnVV4oKrgLAqvNDZ3h3AirRwm6AbwXJFbtwWV",
  "key27": "5AbQJch3EhmijgR2aFGoBpdZRRnYXxMZeV1gghnkYqPMbr18xAXwhDqNeG5onerVgjK6yAND4dq3LGTBZ1mhjp2A",
  "key28": "4XcC9TRjnyaia4zkpmjN3p3uZ2sebsct4kirw36eo9UonpmRex3B3ji2USPnJiJcPgHFNfCRVFcZnGwca8fEQd45",
  "key29": "2VbDb42zoCoVa1dywSDxopWXBXZpNbnkFhg9hxPNV4wxT8yYHJnbBXSZFnLJ4CZrazSy6CQVtCWg3H7H4N9Y6EA7",
  "key30": "3xeuEk5VNhWSLDGtPv6TXykjncPaoPnrjPB2SH5Uv96Gb2r3KeetjzbzQ8BdJvsgxTyb8Bu5JvNw9qPYgKH5j5jK",
  "key31": "4awDPSLCskpyJaPSXovveNGYMhhrs4CFyrh3RzP9FKdn9DU2LdLTjyzAWZsR3C9K4X3vU67Pks2o9K5CfEXSn7fB",
  "key32": "5xNAtp8pN8v6D3H3jgWar9nK5rofDnVyLv7eNnNRkovxzLG8BbeuyFsfJiHPKS5ZC7m1VGopu7nLWhpM72y37cHH",
  "key33": "5qRznxCuNqWrEUutnBpUDNSHtUWvw5MfpiiNonvuEjT8jLpH4iMPYmHTjN2jpYBjQK6tWmD4q8KkHZDcDw4dcgTd",
  "key34": "KTRYak3Zz45DPXsEXuFtmsZP4tyQMcBnZ8oSSbmiyVPWGPwSey7JAeCAMwPPjkzyQYPPpdfYSebQxsAFrY4La9p",
  "key35": "2oo6vgX3RvPBUH6TvpxnqWzApQ53Lue1uDwYDVALnh83Y2prsitHyqko3mBoKxi7n28GUkEfR5of5w1xR4pMEi6g",
  "key36": "5cYpv1ktEuEbQrRMqGrzjwu4MnTq34r8Ye19pcsRCcR8pDu5HWc2gRpYHS56bAzKeKSgJfnS3ygqJbTRDZaGWUTG",
  "key37": "2CGwZFCUwu2MpkqnCCXbsYUcgwMKBe6GUyugfCEcL9QdcF2ZB7hHh4KmK1skaubA831WsQPa5dvz6VqR6FUzuccX",
  "key38": "3DWYyHK2Sddry1V3r2guG8ctyXJimwobmVBrfBEvUi8k5Z3htwXK9kRWQGxCUQLxaqMe25d9iBrok3hVCc9gjcxQ",
  "key39": "8D2cEz2uDMwanRXhegBsYyunGtH8oiyodbca9xo7qRsidqTqRXSJ5GdL2DAtotJdL9Xrp12jSyrpTJo9qTMFYka",
  "key40": "36KMuHTiwDiigpxJ74TvBB6DEPjMg7j5XnEGPcSVkt3SzZVSsuCbzDrzLuCgHAd5rbjBFGzUeVyQgxT8yM2jQ7VA",
  "key41": "49v4fyTPMao79FgEYa9HB7v1xMVWEG1zeZxyfUnqDn1SqgKAER6yw1p1j31TXA5JGBCK4rC85Fw2JojEfiJrrBcx",
  "key42": "2Lb2GGPPA4pYDYBPC1dKcq7nFXtzJFJmJrjh9g3JmLHUqxwNkEVBCZr31oXSzfkgqFqnFM543qUYVhuieumhgrYr",
  "key43": "4tRNCjY28hBxCfDJxYi3hQ8Ho8zaS6BAYpxLGmjCuZ81GZfQB7yFSuUsS6T1FLysEQo54bMH7ttFtmo1pRLqch3L",
  "key44": "5Fvno7Q2ZcGta7zp31U9NxoBnyqqp3BdJQjKjoXsDbGwu5LTe4PHDHNEeZzptVjmts68aPzRYoDw795QyMCfmBgZ",
  "key45": "65ekHnwkfCbNukthVugKsWTUug8dxdDyVuLZcpGLb7rpyHxDUZgorWtN1HZXKQpAfHuykF7EjRpv1LLyNL7meKx1"
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
