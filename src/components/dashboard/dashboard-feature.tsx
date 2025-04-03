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
    "2rdoUf3JFzhAWx3zbPBeP5kJSboSHJGsACw3RUfnyTVsdiMshZuMtx4uR6x8fQfMy72QowDXKHGCisc3K9AeGGri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LPGtab9LBX3fW1LZJBjLERpXPnuoDiczCrMvzKGE6AKYTbuu8VLxxzvk7fo9MN9bAEzFRmrvbKLbBurNtjhaXVs",
  "key1": "2hK9Vb4wd79umBwS2DvVKpqNnbnq6WFbF3RdXm6HtCJqGJLYFfDLceEXpAEMtiV29PW8WmubSZ3pGtAPjPawcoYu",
  "key2": "42HxWr2K3w6G5RdtJNMZyVGAGELucUVK5czQ14GBq7Ybp5roPvT7D7t28jxx2xnxYGf73w97th2VXiSZuYbWLhMJ",
  "key3": "uBEe7RF1dzr3rmpb2pZA1w7mNDZp8uQSYgX9iedd2yjL2qcLB9CspHbBE9VP4Mk1MCfunCaL16a58nwvGjgsNZw",
  "key4": "25ghjQKTT2yG1qnpVBiaNMw6oHpwrJg4EcH4c5N9tNft34NWjsgAnKyokTswTXmDWP1qhP3gf2XTchErVkn6U21b",
  "key5": "4Lb4teSj6txLej6mEBfTxotz4x6PJdKeh4b7XPUaacwmYgWR3dWxoTDRiNeKiTA8aa8okKBEsYnGKEofoYz48Twm",
  "key6": "22iZHnoe4W1BwdMatwQtLNVC8R2o9h4btajKoFNnd2r8zTgFzSGHJ9gn9Q3nPkditFsiNHvMy4rQ22qCFsqpteyp",
  "key7": "5p5Yn37xTLFnL6XW9ZNVNuUUbeVUZGWoPpcK41ugUd1opcBVyBSBrkAT9cJ1mwNRP7zxz68dMQsXgvHiR2TqBJpG",
  "key8": "3qA67oABCXSUVJ61Rqkd5LEURtEknNWKfVThq6Sq5ToY7rVD9ULNtyiVPwAqFraJNJ5jAB2mq9NnhFU3hmy5si98",
  "key9": "2nQ2nSNr961Pi5pzMnc2TYwrshtCLACNAsmFXMRWWbBV5fEx3xyQY4E8drS8BKSd1fuT2qNmvx7xQCGWCKB7VWET",
  "key10": "4xVQrP72FbNzrmXDhha1JrTgLW591eK63QfDpZZLyMqByx8iaCaM6LFaxXEV2CsEmxrmNYxNpAWjrtunpFfyLD6U",
  "key11": "493cykgAGqTteYa5ythabva5AjmRqmDbq2dzM94hiqfNPUZaWuKY34wnixzXeALcu3GknxjwVa11td4Xhuq5sRKg",
  "key12": "5sE6GhjLdgDd1ta9Txj59vo1VcuiHH1t4FQAUNWDxe2dCb1Gvz17HaPHEufmXzrmRkdv8aup7oC9A2GAo673XZfe",
  "key13": "ddnCfrA1qxuNrVQicTeMsJ4gLCXdVnLscHcVd5fiibF3xZoiBufBLLEHJP4LwkqfUdxpmtcXsgVPv8ymCmnXb8U",
  "key14": "2UTYDtBUE7uuHfz9CyNTpLeRwB4eix3u1nonCdqSpVfc5mzaJU5aA2N48qy5bsVNxU3CqudRgeyd3VwTTLBDrKQq",
  "key15": "4QE9FLhLd7PpPKR2BRdaGx9Wcx6vHecPAcbsKWiA6QV3DM7WTPHKTxNgqQMx7xXtqHBgX7MJDk6XJZiFXYobm2GZ",
  "key16": "ERmXJFXDwKynVaS8SGhACnckL3A9wRH7kXB3gyx8EE4jZ8Z5gBVjfb9FQj5yazvsRDkd2874xpprjS7AP6YZnGL",
  "key17": "3AFCiZL1ni5YAnMTfjier4A2MJBMStmvjYmc9PP5BX3VAsyUdmazfQN3HAbbWVw4a6j7rydCvJhQ5x7S8efFAwrE",
  "key18": "38YBUBYigSwbxLXkgTttSj7mjnPGvMjd3hgLqWMGVtUkT9bamSoqQoKSLdWUcDXLrNcsgGZznEfD5pt6poZFZfWE",
  "key19": "k64ATVTBnEwj18XQ4xXwqRrfsTLM7KiriWwqU9J2gPwRH318ciqKXrfGcHVY7BVXMpsS7hZSVa8zXMc4siTvK8w",
  "key20": "49fmfSwFKkCjFzmeejn7GK6eTLCi5TAgRqWJNkDdKDcDXvz4VsZQy76Nz2LRrJjWbaWgnQRKEbuxZhtc7bWJK6Gh",
  "key21": "4jA7Yy3JLSi3QZVDQUTekqU3XMVUf8HgciMEN2bL2BYQ2Lv3qNFvkSMfhsYPMA3pRW2PSzPkmL3ao7E3qC6juPSJ",
  "key22": "2phBLQymZRW8pVAY7iQgnitRfYhXu1mFCCE2uHh4yeQCtqX1W7fgAn2XRCzHUB5hMc5JuxKfJNhoCEkeMsNxk1av",
  "key23": "5HL18dgzfjqB6r27DZ1f2km3hcKjUFzs4RHk6kwRUTt47ZRuaWTUDPdzV3XPfRGcGadCSExog9GBZtAVtf4f1agD",
  "key24": "3pNf9TUih2kFaiVD63aDkzqrwya9aMb26GfYKtQHJ4J2f19JhFSAyHxJehK6uN3fUnNoSzbyetUk5R4vx7sxusUN",
  "key25": "24PdbZb4vbKGB793TqGbDJE6hf58dSCsemWCJnMfjcAHhb8DbZMfCXCuykrLpagoB96bZT9vUCGb32M3CVn1QFvb",
  "key26": "9VNcJAZgnRJV2qBDtxHmGi44Ns4GzukpVmdCscW98Jt2d1mKaXL9qaSWJBLzdXhBun5gJfQob2888qnKAHxvmG4",
  "key27": "3zsNjwq1aAJACQttfW7a4vhcSgurFzqHm63JepcHLvUqodfNrr9vbEYy3cmhubEEZUzN1u9V9AxJX2xz9yhmqmGy",
  "key28": "2fjMGguDbbrZUazAkYCLQJBtbXUGwGxkqLqYHgFSUtiSsDKfTBGVqfa18LQGhbgtHJhKawrFcSbnWw1A8eCJP811",
  "key29": "q9ZjzZjvvFtVgJVSSreGSnBxmkzEwJTToz2AVNj8aU64r4Ai4PMgE26DpNg86BsdnrnVuJa8ecPAfwpXe6H9BtL",
  "key30": "DWXqRaPk5Brdy6d6ucMZeMsx2ypH1sjgZLNa8rvAp4Nb141RyJebebsoJbMsrDApjCo2FNQudnpnQbgkTSgeLo3",
  "key31": "MzKPCyR94vJG6jGMF47cn5ML6coBta1T5LnxMErJLxvAcZC91Ka7VGHUcrSSNGSKFvDbyP1GCAiVVNN8syKpJvo",
  "key32": "4KfDbfKnXSAG1c7mNU7E4Md6xZDJ1T1YjPXEo4af6WiXFmvSTaJgR2sinjaKuHNtoXPuqAuRBzaLzbr2jsVDb3oH",
  "key33": "ZcDpA8RdsXGffM8ZkjVG8WwPiTzeF1DTuZbD4ZsavHZT9jbQ9KeUmJtDDVKaer7McfFHydoUugNwHWmKB6g7qsu",
  "key34": "59pPbyYpYpQZ82MUArdzzJfoQd8hjbB4ho6TsC6EUT9QafB6vuUrvtTiBmjdtanhYc7Nhga8kqdYVexgcyiyWevc",
  "key35": "XWQXcQYTWKxSmx9GqNBS55ijskeDQWShLy8GQFUkEEenZDgyHZMDUFHXCX33vb9HNmzTohk8DEvhV3cLajgc5Wc",
  "key36": "4acYorATgP5Gxm2PjktHNncrYGzgYXtHvde3i3AFraJwcz1yHsq7FeUY4cMgGdakeCAVxLMHiEFELhfgpzuE84WE",
  "key37": "Gn1bxJTUM8xfjM18Qz9SpG2vLK1T4gMDdYhz2HySeFhouMwgV3ynmPKeoW8qD7nsHBPnrE6RWBn4AwnHPhyFqGt",
  "key38": "q21GfupA2WA5KZ55xDfGKro5CN6fD25J5awoujdozPm8SYJgP3bs87MdmupMccjMKg5bgbFXU1G8mVRmWTGPkQ2",
  "key39": "2CNoZ2e1ZHK1icFkXarEWeUFmC7R2rTFaYgwon9Mm6r5cehPqL11PhA12Xz6ZyMEcwvabFyc2zSSY6PQiBgqKqSE",
  "key40": "fde5g8VArybQmqV7pJWgqYXP4w1xHueZUh1vSmfgaSpy7qHsAWP42BWfmeAnAPPJowXajLxgfZCHnwy3VCUMPMG"
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
