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
    "4gonjxaWXLFw8pMw3iYRfDbpAAW6iHtetV3BcUF5YCFWZf9mrNmXt6eceJsCJHKcr9gDjwHGzwvG9AF3mXL3hLt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LadTZ8xR2QVmmr7u1aHPwXYhVm2BxMPMJLFMETyc6NSXa2xX4GC7DVFLVXeAueXyKC2YTZyrJSx1RpyawXVbJJ7",
  "key1": "4Poc59p4niYjh93asc3cfp4bsB4iJCiucQxoYircQeNcuoa9MXagDgDnpowNf8co7dANMqT51sT7vz8jP9CE4fBq",
  "key2": "3wC4rpe9M8aaZfaoGqWXWjnGtRMvXezRSzn5oMna3EF6NdfpMvZsHyQHQ3hv6BatDtiZXu5JifrCpE6X7U5piqvW",
  "key3": "3byJoz1QwrFktKYf1QQDm6Kky5KZnocPyn6EMjcXadFV9JjQaAf5Mt4uipETkhpEreywVQX8dSk3mHtXDTFGv9Lv",
  "key4": "4s3sQxF4ZF2nQXqSVhP9juwTrRhz6zEzk72FdNcPAWPfjoBytgiRmt8AZZWyJiX84bfN38yFaWqmE8NfN5HYTPjq",
  "key5": "4M7HnKsVFKaq4EL1iAJ9L2i3dxiFfn4UwPqDakUS3APMZ2wXZabxfM8D4AxK6o9JCKZScHdvKmtyBVf7b1TbxR8p",
  "key6": "5B2Nh3bort4RW1GPpPkR4JETbvxWaMoVj8kiQ1uUZheHxHncwrjpRDiYXbqnH4wLDxR6taZccTV2afnc9ygeXTZm",
  "key7": "44eEok2Y7GW3g3CxscZZaZ4JvcaSEvZxcidUMxJMeFidwDE2BXBBudPHNDPV4KNdLUPKNz34kmz3wcFXeZkLeCEV",
  "key8": "2ZYwcCBFTbde1vEXiV7Cjntqs2JVZTTNK5Dd9pzbhrCWcqMq7AgEENxGaZ2Us5KkvrniwpUMoLS3gwFr13yaPPWy",
  "key9": "67UXATematKqt8SGKFUQcx2VPDK46meeHW7A4H9H4mZdV5EyNSGrLzLiTxnU1dALMLP2FVR6H2smrXhisyxaQLNH",
  "key10": "4kFCkLN8FacRhSMxurB8W9XnVKDXQ5UaQat7e1iGU4tyhESNhGLrYkECw9VTMDNBMVu88n5dYBhaAoZB6B2BK5Px",
  "key11": "H1scuNS8gnXBispV4qod3bAcJAjFYqDLS8wZEPRyYMBoLW3rZ9D6DrtchqixaBo2SgUpdDPHxUUBPhLX1xMxLg7",
  "key12": "tnTWSYVdvsv7WencNJSUTXdj5aUg7hdvWVYsfUxNfhQ1jv5QaEJ58qJkssZiaeDmWZN2kBeNRXh94vnMRMJXVVG",
  "key13": "3Awvt4kauuWm2x7qtZy76DN3KKUjwyn43VS2b74hiaaWsdpLk74itymGbvwqsuUBA6PXuE33fj2oJcmpHzHevPP5",
  "key14": "3ri6528rbcvnNaSJud5HNSbDtzh3Ym6Zk7SBgUftDvvLHPSyk2NnpZbgnWFkwRPYyBJjFpYGhMBLqR2kXdbFGsaW",
  "key15": "5dicdNiLPUMKRQTTyUMgZvrmmq6JcB7xXqw25JzVomXugs3FXmtUAFqPVAPRS9Q7aGsGKj9hZqSu3xKQxjix5YcC",
  "key16": "4gfqCvdoVm7u1n7WxFMSSpBaZbi5sVc7WM1aesKYBHYpsDknDP6PrRwSUYrcCEfJCYmBmMa6oRQRVmiWwC55vMP9",
  "key17": "5mn5tDXhRoHHwttgjmFwqJEeGsvfYrxoZHapQKSrKdXhK64k2uodMiDfRDSGewSJ85mUjLjBHkgJ2Sq8ngdsxMRj",
  "key18": "4qs7oRW1gDkZWUBKv9Gdh4oZMk4JB3z2cwVFqUYmqJETQQ4GhdtDTxZBG1guX4vXXhVf5xSPeVmeEqFhbhK9MhAT",
  "key19": "4ht8bFfZC9SrGBDC3BZHx2T21T2UucL2AJy4pyCjh2KBuNLHYg77dtBMVo8RWvzMwYDgKmVvzXXEBQPMxsE6anth",
  "key20": "5xkpG9JaGXJDn5koRFAerFhDLwbbgQ58YfnR69SVMtRrh3ZBC3F5RwMdN7A7v8thgXryXxQ3inU9RP8U7fwWhyhZ",
  "key21": "3eQtEmGunACM1C9tX9qyfsXabGeBGFaP1AXjxVGAr5A6rR5g1AtJJW516grASDSU61MvSuvhM7N8csZm7Q5mBmLV",
  "key22": "5QKQQPt4Skx5JS3pJmR8EGRCh5oWBdJDCijTHzDUHCMSTnm2iiVofEkFjwcNX6tgRA58VuQbXEgStuRVYBkFpow4",
  "key23": "3bqtRvyAmPLCk7ttJc7Fa6cnEFpWyT178qWmiMSAtAFyt9vTmG5EcjwZR9fwyFzeqqVyrMunFSg4ywM7XiLaU616",
  "key24": "2DGBkr3axfNkxy25f2WoSasb9jRn9cBK5c9dXKiFZWHG3XtGhPXrxrXjS68zJW1hLkcfKAEjkQLBH5fV5ectTBEH",
  "key25": "2j3Rm8LtHBfxYDA3YS1bZAkwHQm5EiYQWwNxgGuEQE7NFMQi2bLAYEkqU7MarEmdzd6K6hYRbyw5ca2Y7GoebDyx",
  "key26": "49pBcy6QoTqissH8geBiFmhPomDtY9pZYDREvFSu48GRA7L7f179JdMop4oZL21XaDe2gnyjv3bpKVYpo9u1rjhW",
  "key27": "5u2rXBinBdh5KG2QrQnCWScPi7GQtYtGFkXdwUmetREwG3EAmEEMi7GExbAkVyXGUYHasLq5KU2UVt8GNGhzoB69",
  "key28": "2kGEcxC4gnNS1FCUeBYzBRfsBTw1maBYaA3jCZskzjog5Fmzp8t2C9NkSZ8WKzjchwJrdxLTPEeUU7UsaTfoEfce",
  "key29": "2MWfr4fjFksvNazMJfBFs1c17AxoqaTct1XnDYYpbQ3coK3nkv1bXhuhcHihfvJ4QzF1LWdQ4GHZenMShsqE51Km",
  "key30": "EoM3q3qBndnM7hcuRhrP2RTXXhavnLCbzZT3p91SCTHZqnd4ij1UpqiNXYn6HL894D9ViegAf3LKTnfWVCQv4V9",
  "key31": "5H5RxyB4otBd4n9hwxcgpSpgYvPFFMS7dAVVgSowKfaeeWSo3MR4eP3nsWX9pYT8NqqvHWKE52oe2oepYoYw7WDA",
  "key32": "3KEz6VhBe2aDXMtJEcFB9i7opZky521Fi4nMrtxRq3F4sXgiPu1NQ4o3i23eY5PWZRUF7aB3JrZWQAnRtGJ2TEtG",
  "key33": "57H8ztigePdGC4uEeKAxDfHwdNb4mMs6zmejt5k1wV3cknEhm1UXsYudbesQJEC3Su5VBfmnAGscWoWMg4Tb6xAM",
  "key34": "2SgBzBNQMWGeXQZh4n91n9MEK2F9xrNuhDC3N5e6XNUK5vLVTo9owzN7N2LWzwmprKbD1qvfdeF8c3CGuDUZTHHB",
  "key35": "2jZnqyuqsmuVwudLJPWFHUdcs5PKUj24mxc2ySpfm3xDt9fDhDceRtpmTPi6HiZuzXbGy4ef8YTQkfrrHPu2QGg4",
  "key36": "3keMYY89L8nQxqEE5TBJ1WSY4YkJrhURAxN1MKMBHH5HdykcsyiDp5yt2BAAdeE6Gr816Fs2SqLVBpLitxJXtnHA",
  "key37": "zLFGzSeE3qMdrnUHHGGmxpiTvewwxWqP2X1BTvxRm2SijCTHjtET5TVc4fLPJWcQYTfDAsJSNQ7LV6xdaG3gtHG",
  "key38": "2xaSJ7ueeeqS63bYwYoKjc57Cux9Gd8xKrpcmfFN6rpgrrEuJhecwSm8j6QuE3hx3W79tSKwsT3hAHNjRgVjDfZx",
  "key39": "3wRNsnim2NSvVSsEXzULkXRR9DziBPuQPsudxXP42bR8zKUoWMrjVTgfgrBhG8vczehvhxTVwVUWFrqEka3NVFNp",
  "key40": "29mnBNLRicrFA3pkr5sSKesKRArCmCu9VhmkCPmBeX6cmjxr2tpsfb4UjoGR8jTCEkxgixVXDn35E8VxpxgRbWQN",
  "key41": "5ShaqH9HbWwLSpkpDHzpqLVk8p1ZrjMLTvmSN8H3u5ZYrRm78APVgFFtUiyAt4aGDrhnnk3m3PGGadLZXPP2TfsA",
  "key42": "22PWqc5hHXvwcezALUMayYv5516JtBZtN5z4mMAhiFFehuGgFZdgpu2TLioDTFwndXPDDFz5LANjubjBVn7Sfb48",
  "key43": "pBK4pWyL9vsMdAPiRedB6EqJianSyoTM147qEaopZ5VExnunp5fFBWHkX37s5ZeWgpcrwNB5XTgxz2aKM1ucwZP",
  "key44": "4qJXoYP4HDzdWhz2YN5hJnYeyEAc6ssBjWQNmRmBLnEMCHjjwgyFm9eaiBCK5iFwm7pS8KHdSwTdDXmko4oph6tP",
  "key45": "4QkgwXJZW8iDGUaqVeaYNZkdZEBgpCF4FD3YkxYWTXo2K8aXNMJHrrVcvWdk1wE6fXbpxYRsaJiDqL3JQJsg8Z6a",
  "key46": "3TSgNENZUFaHxeje5JsqikoUrFkJPAtwWFwfVhMyZBHoz6Ea8736p99arqmFfLPCxQdHvZ3m4wujgXKRftCsxABT",
  "key47": "3txdyjRWCv2zEkXN8KnPmDiYWHyKxzekv3Lc2C4VqdL1h6khHtj1TvLviQXL93vnZjSXReknEgCxyNif1ChSBBK",
  "key48": "MLCPdFfEEgwstVqUrWyCM7NwFTwuhPmMR9Ej3yihGiSk1FPGYY1rmgE7yv2UPcSdpd4AwCuhn3f6sZBR8XLiYm6"
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
