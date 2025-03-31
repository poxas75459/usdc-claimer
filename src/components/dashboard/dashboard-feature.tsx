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
    "24avQ8XT8X8cYL647ECdzD7F9jHEzk75c7EGmu2fyF9zK8oCtsiCV5AQCRAisbtiBPV44nfFZWQdcTZEdFwArR4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sQwAU4HioZymsHopmaYdR4xs1Bpn6SCavRZCaVo5xcn6MfUEazCtZBVkePfTFmSp2uUjBQh1SeizRSPt1nbyJJb",
  "key1": "4JLMHYyZCD2PRjc3NvFjC4di1vXGbmEzcus8U1nx44RD2qFjUDxeARxsXpR5fXqQRtcXwy3FUpD4CKEit1B8TjsA",
  "key2": "2qWxkBfMrRxuNo9TZapRxgiEdu64n6dVzwjabuGsRUSvpo39pXjvwVSmZa8TZMQMGgSLRLMA18DeEcWx4pLe1jJx",
  "key3": "4eU3D5C98vY5EEiFoZmMuYGmwsJXZsrdrhQEh7ctrK5WMczuxEiNBbVird1GHhMSPWSr56YH35Y5sjYJRiKZAyzC",
  "key4": "3drcoaqrNjebenfJriRRPNMerdJnAbo1uoX8kS6hPehNgzs1Vxq4YHwJyEn8xbLzLS3oUPn7iFJ3ZHCRHPiSrHwQ",
  "key5": "2eXiQAPpAfhSe3GsqM67cXDB8rJ63Y6rHSa56xJWKMdrNcAMD9mj7r1pZG8FULVMd2p2NpagfptrCaSsHCCa14aQ",
  "key6": "4EtHwmbVAPid8gyNtejCui3GoavtmvztsMZuUATTYJbLZqvqxJ6kBFGjLh5TSBoC7arWbiECdUaCBuD7p2RY3zMY",
  "key7": "2XcegMPNbTmx1RDQ3FyWS3BjCoBCr7LTKLWkro2N5ruZfrtpidx93NQqyNiHwxhYNbdDte7eP7RVKgooxaaydYHv",
  "key8": "37S6v2hGYAvRUPr63rDxYxy9pXUUfr5ckk5qGV8PgGHbzq7UYqzBi3JQpyBuqN8yZTyMe8yrbCDnszLwh87pth5W",
  "key9": "5Ejk8h7mNF6Zhzwkd7NXATGwYBjp2UJ5oBSYUAAmWZ8esfBi7PnQuX1YvHXVnmMXeSfCpfQdt3Lx9wPKaKo7xKXw",
  "key10": "5yPoTpoehMtRH6t4ii6St7PoyV89G9qpPVFFciaJcgsZJr1wSVAD29qHG9vyuaqJRXRuDoVpTpNWgCe7TioTRaXS",
  "key11": "gpYZfinewgkThK7WF1ME5psgB6Mdw1Bz7aAdddWS686twwbHN1FYpcLutXwDBHEBukYnEtZJGTyV7BGsqEekfLb",
  "key12": "4fwVfddrwtsoH4rW7TiR6PYZujZGLLKAt6ruy4cMnHP7SwowdLf5LdxG3fwuXnunMErgXZBHy6KUH4qkEvn9E4fX",
  "key13": "2gvsvNo5h9CctMTxT3VoytPKLeApRrNFKzaz1poHg2nQ8f3R7pQF5L4pGyeGXMzSnWyupRAH5g47USdTJLH9nj8b",
  "key14": "2USmopisAn7iLmWem46ppVXtHxaCjUkRJbLc2TC1RGFNbDatPAgRCxSBA2MEyaQ9agc6tz7ZMc1wdYKhP8fqBjTZ",
  "key15": "xojP6g81QRXGKk3sFwvKGkM5ETE4piqDggjawcYMkQHRXRPVmcm32BHQo9tfyPBmfb39GHKfwbJ4QQgs149FvNJ",
  "key16": "5EKvigKeqgVWGyikkhhuMofQBsAvm6gxct8gRNH4esmW1HqhmmrYX2eV9boBSxkBDvUjLCDJWw5YjicUaX5fnYQL",
  "key17": "2Nk1CbuQ1xxT5jPMe7FozaXqsPPdQycuXmwRCQxg7qmDTeCRRHjssT4jftMXy6a7SJKV2zrUGLPpqTEx8ewsEZ1G",
  "key18": "4UCmCoqYdrs3jpBZih7Qinefx4H96vmQfWQ4zv8HPgonn96x45AtD3MiFbhcC2h1KpZxy5qyWW7otQubVneTpL6q",
  "key19": "5fVgpwdt1BvZmUSQwvxr7aSm5hxeqsixhDssyvxgDwr6n6Y8tiKHUxKT9zKwkm4xpmKHVuH5LYuTNJwgSWPiCZuj",
  "key20": "3hPXYq4pnYnQirrvwyNmxrSrKCEhi8BgK4ozb7uvdeB9jX527Qzpt2L6MHDSPC72nPYzrqDRRkJi6KZCQvhMEQ8W",
  "key21": "2B3FpuLW5bBaAL1euwrQQmvJRnzMZLCe6GEo9dc6mbMsE52T9F6cmHuaMM2qzQ3XfctVAtNAuhgyFC8U43hNM1KD",
  "key22": "5vztsXUbG669ETyh8fBHzPfFGCv6DzwPdjc7aaA4Xoa6PYgC82aNeWe8eFNsWXchLQteFmGtbtxUs6AoZFMabiaf",
  "key23": "5LfKHvuWNq6xFZi58VurSejZNSL2VhQ4NowdEUHqJ6M87AvYdJY1fVpB2r9PN1QYTDU1P6sLuQTaZDSNgaqnJf6F",
  "key24": "2siKDrsGy7VnCRbWSPTZmtAQbKNwYyH7mN8EcyPgQNYSuWjCVxKUqMk6U8zUCCgHA5nqKVqdfCWoSVvqRk1FAU81"
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
