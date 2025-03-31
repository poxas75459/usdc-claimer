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
    "2NSQaz41ggAdPYPxwAEapowvSi27e1DZABToAZP6f5C5s1FLG4MWX9kbgdzBjwYjJdYKzAWmjJ5We9iW3YAnporU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pf5xraQmHzshFXL6FpRvop3oALBCtRgQNW56wLSwtz4MfUGhZYc4cvKq45yGu4nyBDSM1ocnFivW7e4NejiaSM1",
  "key1": "3i2uMbi5htbJSJ9M7zejztCZKnEEvrqx3o1ieqrGGjAZgFjN3RMedmVAWyNYcquVo99kRktfjTGDqHKU6ZZyTr2u",
  "key2": "5uLxE7tR8BREubEaoNGgKk68SRLH8ZpFdLrg3bbrNSxHCPVRJ7mhGdDeXHtGC74azanDub27me41WLjgn6kxskiz",
  "key3": "64w9TUdrkRd2c2DkQXLVGMsPVrHxww4YAqWRuJGa34p4RUDdwnyQiT8Z1ZGvqyJ1cpkcvMy4bRbex5wtmS8XJx1F",
  "key4": "owDYAp6eVNND8fryqqnyqPPF3ijsqZB1zjGZci5dBJxFv4bPrJnXWKa5ThTsFi5EgVVm6e5qDcvKq5jFZVFfLPc",
  "key5": "s48xh7bQq7Wmxbm5F559MPUxS94Xky7vFNz4jVwqrr75q8X5eAnD4iwBzesZj12H8bzzcdcAQqPcmYdmuf6eNET",
  "key6": "3zQm9AKUDzSKfrbTKuWpRaAPfzdhAAhJMCuKt2eNg7mnpgC46Z14BkhXB6GUxrDWX2xKi5gjJYDicc6KGFsPqQRA",
  "key7": "5szW81L3Lk7Y9HLLX2bA247f6JSnb6qdQdk8ZpE6gVubm6jPpTcTogdJ4yc46TW1GfCLmM3N7bmPwtHq5xLC9XuC",
  "key8": "4P2KpjaqPkC5yRbZpCRCn5BxMK2qZ4ATe1byMSvjhAMibUR3wKag8RiHs5qBqJgfu2LeXTz3dpVkeSjgkLNxoXSj",
  "key9": "Huby9qwni7fKgwaXjgYEujSnU5Hxy6YwP9WUa6ibNPsGtskcksdhBwx9eJBW3etUC6d82tJQBwi4GRepNstz7zv",
  "key10": "Ndkprd8XusrU2JcTGHNU5p9KuhvoTVxygZ6NbqSyZiPNHuQxMbCUpPUt7SZa12EDars2H3BKN2BEJiLQVGyqn7b",
  "key11": "2aeDLCfFQrK4wv14ZWPW8RxEswfvhNnjeswEae6getjo9ei4keAYY8ACFr6EYijQdR8yCu8JB2E4LCZWVqA7HskV",
  "key12": "2SwnigpdxLdudJJx5eq8s3FrNUcYUm1Mog6YQ8iyzTNnbtQLX7LjFDVGAaGXUYWRrwkf7xHR8SHYBi3fuq4zio8t",
  "key13": "2fihiB7zofn58dvGTUy5JDs5A74J2X4ZDYoFVVDN7uGEWotUT6nsJ2zNtSRa55zdTTkuNyF8UjBfkQfFFpMsUqMA",
  "key14": "PDabkXncJS572wtQqme3kJM5njoNLW1PNYX59ZMTgBhfvErsD4wRysybAUM9nyWuEnfUkyYrVJRQtvgqVUoG1r3",
  "key15": "4A96PpFFAdeE6fvemHhQjd4qES2WJyobRPYdecxVrn24cETzznDYzJm9GraVZnz741Ta54diGjpWzXAjP7j6yn7Z",
  "key16": "4RYGTyH9vp9PVFT9DtzDmPCFy6j2cMuH8Z9HJ9m7pgm1SmF25GJPYxucwKKt7J1zibMDfCmx7cAQWx3hRbNwtujE",
  "key17": "3AWcZqMwr7k96suhspJwUEPmsNKpzDrVoMMM1QcwS63H61EuRXwokCRm3jT2mivhwfqqT8bEUpqyhxYd9o2SvTdY",
  "key18": "HjQH34tkHCV6EEDrmK8FsFDDULzk5ZSjh7WGuv85Kzo4XXd6PFrWf8hGUzfW4PSQ85F4cMyDuCrKGiKtHUVVBC7",
  "key19": "3YacpeQe4BKGJsUNJ5g7zgtdkFJVWr8DeiMA7YqaXbU7z9WVZaaE3hm4B3cRDNwWFRWzQszTQTtGbqCmsDvrVjo3",
  "key20": "5EZr6bxU5y2RALH4iUVTXbfv4hZfaU6BSeBoTiTy2qbvtzeq3aE7EqWeWJ9YdiJmzQfYD5ghPSMUgaFGmbxm1ePa",
  "key21": "5PYbVq51Fk72swQvCyh2iBPZgXMnZES1HYuqY6goZSg62cgYVuhwmKoLRuRBEGXtUaZohgRPN3XhP1SbRq9jeBzJ",
  "key22": "33yY8q38TkQujcLwSQZg9qVyEKbqZDu4MapxDAFTBCtmwrBmNfYo78nZD4hSWwkr4aUZiGAKtzyBL9P5WDzed83v",
  "key23": "4yfrfELVyy7TmEdd5yAGQ3p2imzJmk8CKk2vA3E27moGkzyL2baekaRPMxw1e3ZZuDzF87SwFe3soxJbjcUwTqvJ",
  "key24": "4KTTWtbtxvFay3KKwQWCz9yG99vLPJsUi9zRsk7i15jtwYp6ND4yLA1n5iGPMBULWGLqUkbDd74MXQe29fhxXCSo",
  "key25": "2o5pS111boPxRr2oJkH46Ljre4WjsGebTW6eC737PGfxqYMsDgcMbYChaVcUn7X5dkKT5jjpnpazZorfcAVaFNH",
  "key26": "3jFTN3HGKTJZoJNL9iPEjf5aT5SrRYouhYe3CSnUVvqs4NkwfsR2YDtAU9EcyZ6MLp8seDfpLAYtRBf5eFuNzLR7",
  "key27": "3kZaevNaNssJwg3of3guquPXTntsCZ3i2e62DF2Mmprbi7WsptBiLRnoevApQpEu27Nvp4mG6ELKd9xo9SyfkWZg",
  "key28": "4dT672pZU76332k81rKPDHVLyjxRcdHerfhWREBLTYLha4CYNQhGqmnWBfRSV1aVkxKZRia6YjbzCAKAe5KjTwMD",
  "key29": "wXqJxnEmbJNywurHKbxgA1UCYKN1mCAC2czVkvBP996eovJny4NMLMqzHXgtSVgBpwJSr9TbPLKSyEmozjYgWSy",
  "key30": "43BxRBnkEJSRfyLBbHwts25ucAifsEk81vLyPAYcqoypbpEiuqEXoo3ydyw3z2dZ9F5s6yht4b5iUboe2QGdnoH1",
  "key31": "4mpTrPK6FTt8sH9uiBFK3JxumFPP496WagRfrqaGBni3PmhAaHrdLReq24b1Bzstm4HdTBHvCFY9zdZhs2BmtBua",
  "key32": "RPDNe3WkMxn6q1VSF5wUGB4RP9HZawrpcormpTRKuWYBdu3DtJfA9pwAcSe6YU2z7Xo4N83nNiaoiB63WSE9uMF",
  "key33": "3Nf5HPWoem94xoKkFpXhooMgtuoXT6jpU6foyoXEHb27kVbHaFKXqzXYi7eGaEsMa6N4yszXQV23cR7M8WgvAGVa",
  "key34": "2befqjcjxRAx2Z75wWD9fjd8K9994Q9htTY3Kydx4kaFv7vwQ3ZN4SGR86ToT6U2sbb9Y9zCK5bMTaGnmNhWqQTJ",
  "key35": "2vxCgFtcQuDAv6T21oFpDT8TvchjUdNzYwoVuDRcgDSLrYw34jZRvuVWB7iNT8VWjgL9y2WF48FoWo3yQtAp2uTz",
  "key36": "3EHYn74fQQr8MN1QFPvzkLupnNPzh3gfvgcRGbKYA1y1gV9VtLApz2TSBg38dLAbqrw3DYe94JRWEDfQwyeyVDcf",
  "key37": "2m4B2b39bRQRXXppqgD89cvG8pjDMqW2W2EQfmSvTbXj7jRFroUBcUfWKXarL7L3ouHJM9PGNkUCNGopXj16nfKt",
  "key38": "2E7GrvTcQVDNGwikQCduH2aV3th9MiXyHvwpWFfcz81g89dpHHoFM1cXrfqU99uguMtdcm5dY7dDBJqfL4v2sFKE",
  "key39": "3viY26Tt8nd8s1rKHYcUcBxYP1BfHdSf2Tg8XM9wtrsaVauXSBv13Gh3U2jfsSQZUJ7WqbcFWzSXuYNeD4ofAocC",
  "key40": "5gcU9s6hy1sCTpw4AmSPyaydxdMxDzibApVEv9woxMqciP7bCArxfDwvrGxpZj8VjpEA8fGfUjqpSnhnBrkjRVHi",
  "key41": "MiCZuqznCPY3oH4rbS3q9XCQ971X8BVxjgWVmb5gM9DFKwiheQMY1AM6QtMGRrqwDx3KwWk8HGMMFJm2rbaKZBn",
  "key42": "4QqKTEgvUNvRNC4TsMfhA8fvphWSdPUrzctZbf2wRbpYd3QNBSUEEjW3wyz17CYx3ashVxvDwD2j6wD4CgTvXXJb",
  "key43": "TXyHTAjJPaBGCbWyYTUKx424WLju344TaksEY4f7ygVBzLixv2sbUGbfiZgXeDdhwSSxk5cEeSPdhzo2bppGmUY",
  "key44": "4JBQ8prGvKc8dxA9XRZ5K5q5nvnRvFXfsjEnQfza289XpYyxRXniNw6AqtgErdv1hWYrg1Q5SprS7bmzjjNXBJjo",
  "key45": "RF7E6vAz1CrY79u9fZh7miAsyuFzq2KcLDsiiHaXhwQnPPJ1PfbzLdW7KZoytGkHJF5zfWmWmmx2JSUKDc3P42D",
  "key46": "5vgkPZcRVutxGG6aPuoRk4edv2i5hDYxkXfbiM767YEXzmiqFqKcyapHSktEThnNQyuBNBtGK5H6YfjpPBkPCFgB"
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
