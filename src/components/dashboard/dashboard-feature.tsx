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
    "4G2Qtv9Kk5isugVX73G3JQKUsPzAAFzuLzS2TpeEyqYJzA6JnpeqbHQRGyQYMupimpZEw9Xv2VaDBFXKny4H71Zk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37wuspvnVfEJGVf8Com8dBUaRZ6yC7N1F77jpL8ZgNijEP5KtE7TzjK3ZqzET6Fs9R9xv2uJuz2rcFRZisbajkJF",
  "key1": "5jvQctAhE2RVRF3fnZNaFGEo9jM3ou4WQyMgymK7w7pvPzDRZ5icnaESqjAbeLwzdyctoWyLs1EvF93JfMMcYWFn",
  "key2": "VqnttybWTJ3RFxtC5htPnToAsTJPw3FhSGa7sRWeCcN77tCCrZuJQNujLMywcSBuWGsMHpE91monjLSu8maFw4R",
  "key3": "5jFvXQvJ2qjY83VCzrvC5325pPJnWLQWmbdfEd47mtAJaFbeAc8v6NwinRhGse93NAorf8Zon5zWdEzdwJsaLNKJ",
  "key4": "2uPD8b6GUfGmaBehAT3LY2GsaXbiZVFAG4KrDgWh3p7ra8kfkgRpN5ti6T44vLkjgnmZCrPHQDBhjoKEA2M4jSR3",
  "key5": "3WzbJ6UDV6P7CF7a6ESoKjVAWdkgXHaSv7mRzzMPDy3pswh3CW5ddXwZACUtixGPaCciFPQ2z8vKm4Ysq7ziwHpt",
  "key6": "3DqTP11Y5XvCs1moWhfQnCASFY9w9Sx4mBVBxXJ9R2jYys89RJRfPNn8vEpuBGuxNZyXJj9bUbRGXXwH7aHwe3G",
  "key7": "2V4wZAg8LkBuLTH8f58UmMyJKoPBr1TPgzW4UVATi71fmxMJ8TwXseyQMhnZXgR42SvycadtFKa6ZPmZgFhem2XT",
  "key8": "6nw97wvJTU356dpzihCWzFcBUGNhJmK1zDWZzosFtADPRkhLZP2rRPHBhPC29GKgUnWcp7BUBJcRtHSBc9suGQB",
  "key9": "3y9gu536oorzN62c3pFtsAs8RVoyBi5C3aR1XWz4SiqSjDTPurW6APXTE8TKqvaeLhP1haFcsTHYrExniHauh1qD",
  "key10": "635VECBJVpcom9ARPSo4A1n5j6eiGSDpx8sdkkwDuBD3V3mXxVwPHehXkhT7nip5YYLGuBWkPwQUUojR5bEBy6GF",
  "key11": "5SBsHTo5h7TpaUkdTGvpLEws3r8qCyf6wgTa5iMADYqQzM4beCFhsQaaBVvNw1fEkkVF2EdMEBmgg376uRFXQG4X",
  "key12": "4kbJ2aY5eBDxhKqK6rFBsa4YGT2xh3JhN36f2Gz8Ddf74YdhSv7FaugynbRUzLtDQpC1CutBECDsjw3iR4tqyUtj",
  "key13": "2SWbqpz6Bw59WpctYuyonkFXcCFNVz6HJhVeD1BkybH1wi9JS35jcaDw1jXLWEmBai4R6GAKcRntkzedEMBdt1FV",
  "key14": "32yn7Rt62nWrc8KhzKaWgkFUJT6vfddg8Sxfp88wrumVakACp35Z7KqJkAH3bJ7MqkQiRipLo41kRyWjaPnfepZj",
  "key15": "2KDcmc6kd6x1gXu6wH3VbLrhKiKAES2DmqbdNyT9bECnCURy9DTYNsLVXMmFncyi2VxXSBsGs9v7ViJCRwH5Loy5",
  "key16": "4Dwu42s2X1rch5AqVGz92Prz2fQhA7TegR6rubxQs4Kj7Gjq3sVH4gQLfyDsH6QLCLyFeQW32K16kJuVMihC2N1b",
  "key17": "vvvUKySQTfTuQz1pes4U9GPESU8MHrx69ycWHAi5U1ADfy55Yjj6xr1Pj1fshiv6aEoPucsSRPeJoCWGBEvPkJP",
  "key18": "4ffqSpCTdasaa1D1wDrjgKZWL8Nt3eADg81SX4pyj4GBiUJfoik2BM8qrxeiEbLe2UFpmVkPteritQVPBqsehA1y",
  "key19": "4xyk7QDST7b3VXPx5ntTpyFEtzkXuVftHNjLLszgNoMLLe64WbnKXq3D9nhh2jqVJfBpi8tcUBmnDgSMYEymWAMa",
  "key20": "3xciLzekyN2Gd3cpmDm5JaRYuXZoVbZkyaNar3jsSYA4KaveUDGfeXKhQVFNVKKv37t8FYykvoEKrUNu6STrgDXS",
  "key21": "32xyNuevG9qW2P2ma9v8EFk1kQwzXxmi3YL2UUjj4CQ79NBy4gCWa7BcYwLfdG4ucr4ZcQX7kk771HfYqYs7mt2G",
  "key22": "3SXMSryPZHi49N6KANo6NbBGiKmdjrv6BzxyYgXBQ3iKgzNeQLt7z7nPGJ4EMZYhP7PPFBv6TmFURMcvJmKtpuVD",
  "key23": "5qXeiHMuWXfTKr2CfFXHe2CHPN8GYvRbrVzD9fYk4AvJgga6CDUmNmKqSN6rvWDPHxTYYZyBKC8ceK8qSbuVhu3R",
  "key24": "34uu1HnJ1EoGnYCX9r7Atmr8HchTUs2Tymb5xckbC5tgHiNQFAiiPupbhfqnr5RRW5rBfz9wRXAr4JawcjsecKot",
  "key25": "NR3crsdxpDei83jCFMRhUNyrTdQGdsW6wAY7bcx7xUAt2oQt1DZecTmMsFDxwjWD49pUd8HRM2EBkxf8Dm6jB4r",
  "key26": "Z5bqPKPuQpSAQjJj3ekZwgRiRzC5ZFPTJbDyJyRdVxvuteTsQCLwdKy7uUSRuRaE7kBrX7ye2zj26vssxoLiJQ5",
  "key27": "5NzdujsdioR1uwRmYo2AM927veXQEZhHpS7U11eN8BCi3nabcEaJfCFmC5MJr3i4KsjPShFPV5h93fgtzA1csZXC",
  "key28": "3EBfRC6P5TykMPRtcB8hbGEX3xsTbdrCM6Mf6ExkaDMVHTsEwzgiDmhshAvqweDVxbygPE9KatiFUqEZXZ4oGpK3",
  "key29": "5vSCau4A1pGXf6r23HTFWfvcrACmL914vCF8x6Vd61NqHPzQArMxy9Z2cfjeAhzCry8Uj8CejfX5kHVHMmQFXr9U",
  "key30": "BTV3sGxJLBvFYeBEJX5EeWWr7Ht3KmnhKGd96RaZBR7CEFMEFTKDeGBEzYLFZn7UnXEvPiyBUD7AB22KoDPHCiF",
  "key31": "3QTAfHJrat8dNDub3CDjdwsazJ8TeoGeu4cBycsin82KMCwzKoVLtoTBQvsWxnFTvvSivoTZoTueNSfH5NVGyyXf",
  "key32": "4GgRBS4NwyRtpu1TjMwDwtLVeQHzzeDLnJa2sqr7wubfJP632ButmMB2ZToXC6sm6wGvokDqXMwZyDS17iGJZetE",
  "key33": "ZfN6hnGkA7k9pcc5USAFJ6JaLSC4iUmo9Yc8h2eS6gVwHy1RjHMwYukkcReRHGT2FcMrNqzquYsNRXsvMxmBNz6",
  "key34": "48Vd3JUH7ux2NYA7BWTtcwrFjn2jmHcWDjRgmFGvXGS6nE7T4vqdB6xBNw2syskjvgMS9iuAVRbUaGZ2G8XEdyVd",
  "key35": "3QC631gHEzyHi9qQGYTBVf7iZWU3V5YTN4wBnfxwHgSp9xV45SNrzfP7QTHZigoqRR1KDxTaz7juYp3VKMuqNZqk",
  "key36": "4LG6eZm8bqkYXxvrXMX1cczQb4RLmEX3dEZaR8fUR4Wq8Z65qEdMFPy3ZXPcvt6qRugWzPBogBzpg8wvw9y2X65j",
  "key37": "2FV4NUGJkhWL9aeuAKWAzqTpCPaYm2gJ8xyW5yyafsirv5hoRbK6W6wwcjsKh4PWJif7UoAVXWGRD7m6vguyeUs3",
  "key38": "2P4aaG9jfJFH6bteFpdvqbLtTgBVrzyVZddKksrrCpaTHMaqQmc5HyNXsG3SsouKBDxZYaQj7Tzipo7fHpRHqXLh"
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
