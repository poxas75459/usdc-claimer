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
    "4G1P7Fwn8QsXzwVoYiJr4e8JX7Qt1esv9GRX9W4aAhNvJFtxbdALfmVC9eMB7KNvxGSDdtYZsewJcNMpWXvzFkcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WdkM9Ru4D3D1j3tjqmarTiMZyXuUJELo5JSTuuXPUcyz3XAcek1kQqq2fR3KdyzaStCp6FUhghmFzhTzwLqZJ9q",
  "key1": "4YMHyCvifok96J5SaFA2cfE3443JcjhdHYEYYHocBJYV2RXcy8EbgLniFCcuUFxENrsxteTKH21jJD6hG9fB8dH8",
  "key2": "5ZwrSmkQitzdNXCDByCPiLhcFK5jhjKBKh71aYN8RzS5eJpapBdacodMBqHyzLDhMTupe5x4MToWo2BXetGTtkdN",
  "key3": "3Nki1aKkm8N8cii2J7qcS4tj1E7QvyKq6jmUJ83WDURGL3c8vR23Q546jUdqQEKnFpzqB3qjU5UGRBL12bh3DnFq",
  "key4": "3jR2ZJLTo9akhqfSrhH8Qdejupj1wRFxa7vrjmPoTVzPpBKhRFhdZE6FwwcoHBGsJYqijdWArZhk6ucFiMkYnvCg",
  "key5": "5a4w9SozBWz4Fco9gfRj2kcbHFTxjLGejBMThXLVyRwUS5fnhv4V55Z148pXoE1Zp7meTEZST7Z2MaPxTi8wXNLY",
  "key6": "5L3aCkGWwse5p4iaYvT7gndnhnYbp8K7DHuhVvUmvos64m38Ff2vHNDA7z1ACiShdMC4jVLyvixXRD95vpn9FxpP",
  "key7": "cyYtPot4EEymCYXvBtQ1ikJsXa2BkK9Ggi1j1weYnLtGdKVvGusjVZQXmTN7sH7ozLqjcKMHDCbGhZqfKhvnMkJ",
  "key8": "43ZDzNw5sMLmUFcWQsApUNcNUUH8sP9b1AcR5iVzZcXDTUynnS4xV9rSjtyeSaXYb1Z7TH3AkttH5MMZbx8sSSZw",
  "key9": "4nZPJ4Jb8sgYTPL2rkVEP39YbVmtPTsZpZynWEGUgoP2D3GRZzioUfpjKVmkCbmqgfMjSbCgub5bzt6U6TKxHMGt",
  "key10": "61MoiwpdDULm61EFoqGdF58dVrzThpFuRf1fAnEYhFxFsREH8R7zuwVMtbNjhvR1rgD1uKWfiiVVKPkuq7seKCUZ",
  "key11": "53VqotEHSAuK71gW8Z3RUYc17B9tDdgzZSFn1yHrbdkwuQ4UXfz9AFtq2rXmWFTm8c1ygkR1TLRq8kGcC7X3igBa",
  "key12": "kPYcxiYHHdCwTu9NW7ezKwTXoD3iz8X9Acey7behyut23FHWZFcip4SVpXrUUjzkj2wCV2CHCmBmV79gT7jTbtu",
  "key13": "Krg1jQqmARHsTL3CSCZkUbu1XHJ45wdsGP5PtjfashG8gHnxXrSSjc1VsMW5yY8z7ibZorrChpeU8PdAZCh3a9K",
  "key14": "2BSrakCdvKPE9FhdYgwBWwoumHF92FDmP3LdzVkhsemxSemzqUMoTViqSAiJRMipUmFo2cJabKJQnjdEjgYuyF4K",
  "key15": "dyCjq2BsiKiUkhuGfGaShBt3XtBXSfqjBcFxXhMYqBq8dayNU3j4H6xVKZDeBGbGoFWrK4uFoXuVM5Hd8oqUHri",
  "key16": "3U51Mmn6WvVejUwEH92nUwR7yx5A31bvAnjvMweSTUVWm6tmr466VZHbXzxvYF2JRuTq1stJxj3x971kop9AzLna",
  "key17": "2t11GmxdTW3ukgNXEZNqXNz7XrYtkjwucDGsTbC671Jcis2LNRKVDKUmnsVs8RiFj9i8xtgYG6FyygkXs1WoVyrY",
  "key18": "277xQcVbmSh5ysYonNNjnqx6fChLdu2ejWcvf8sFM7W4j3ozb1czaMc28ZNMnY8K6DJwXjZebyVydCAKBB1epKXg",
  "key19": "3N38BqCeGcJkZAJN3xysMMhWPQoC8GvAb4A7YA5a4ikHQj3M6CVMiLY5zPEnNfwQ18KHiiZdd1fTFUQpadRKQbee",
  "key20": "swJqPrKVAcEmM52J2CAzhzGxqfrQLL8bCtgLjUvJA1aSqxYw6kNFvTJB9Nn9FoVkrNy9LLAaAiQAwXMJYy72CFX",
  "key21": "3XG7su1PZphn5AGq5TMUppEmkrVQXxueA2d8B2LqEoaMg5x6bdna6JjtdEZFZM66XgEjm2dKKjQHbowntgaReQe8",
  "key22": "2mjSEbnBFVKE5h9wjNcC4kSMWQRVZmQLXzuCiJS8mkex7GZAycYAU9TQR7WxmkJDRKJi5fYhvYEGsSYT66QRmp4B",
  "key23": "KrGNsB58iQbYZ4yns7bzEafbTV6YxL7UHpLK9WbPQBzRGFMCLY6FdyD175yJJX7g8WuGiqFUJwh8q4rGtMuky6Q",
  "key24": "4CQDrTem22eSKW6pQqqTTNhugrynfzdtrXhwB2oxdS7eZ7TMPzSd5q5NzHHDkd3GCj7YBLLXYbtC6qvtQ2WJ1mXP",
  "key25": "3LgS5JA7vEWEynZkEZp2JrcDWs8o2qyYPJttBq7YKE2BKnwkVEaYxdECUFHggnyL6FuAxgP7URajsHXfUKJzW732",
  "key26": "2BV55b1FxzMqbCyA7KYpbthvQY2Gvjk7RhEJcSE61zUABJowoJqr2tvTmLGZFrsG3TtZpcD2NpPjDGJa2pqPiNxv",
  "key27": "4zeAJ2p8AVL7ebvMkPD56fK6TVArZQHpn19uwgxwMzzVcrpViBoXTLt31Mvw8XfNVce5a72vX6LdXeAB1hkhTNmS",
  "key28": "2SoczKCP8ocbiug8c2aGxjimJJfUWNFehHaQZNw3UvgXP9yHn9jAUvMr7dBhYi9boTnyMGamCPHvJhXsBi5cAGo8",
  "key29": "EXzoNCZjhPLjyk8CX2SVEnr9a5gP91yvenJh4RAsUZBfb6dor6isD2KiSZNX2VEYFEpuTsACMDmSfvvYNQq92zQ",
  "key30": "3ehiaALc3kTitNnrnWm3WkmCrEDxN9ydtFVbYzu8ZTxRGXHDZnMiPehKSvZWp9oPJPEUkFehuraAU9JwrMn4uPFt",
  "key31": "5pefbrs746sCggJMjm1JSgqdhKYMhaR5pJy69oaBBn31NMzwEUA525Qbkxb98yRJYBteA8FJN8zCLNGLEe8BkfU1",
  "key32": "26faSakhgGaeMya2EPzZGQiPVfbtBu91QY7bp4ASorxdttNAa45YJozes3VsgLGYfm9Bf5TSKYkkUpLbQGwnwCEK",
  "key33": "3ysc9ZLRo5MipnYFNUHdEdNH42zU2pvcekeKqPbRZ8Eoz3SswVCbicUuR7265ZB3L8h3n2PrvM2cUdCphtPSbdCk",
  "key34": "4A1EfJjbAtrGhmdExYefM5KiYwKajxizmvAQ82iRvkQBb9Zfk5CJrZ1RP3QUVbzQdLbsomfeRxyqiEoL7b28G6c4",
  "key35": "444BTThikedPMtJ7gKpM2N7hNUyQiZw9ibbS8GjpvT2tNvZV9JDx9tMjRb9xiu7ZQkz4KPfMoRWZJA1YHZGpSq4Y",
  "key36": "2hJbjjbi7Teyn6pkz6skrCAaMVWoUAmJvuk5gWnMumpXk7Nqz1nfmnqFxK1oiMhazbvE5rUFAbX4vKmXbYUNssve",
  "key37": "wLfPJdCT395QHjg8Dzt8smx7zMLF8BFU29DTdSHLKPW98xRvPdV7VFiawwxr3YVcCvveLxa2sLjSEGgp9mB1nfy",
  "key38": "3gKfyZbfemxtipk9sdmCKiNK7YQfe7U6C2eGNmunauKfAVBZMrPBN5MsHoJg1UamH9TGnFMLSVJQSnPfWV2q9Z7Z",
  "key39": "5kjHxYaoiGpD5AbBorwTHci6NyycG8WJEjbVrtrAsdvgcmgjkAfjr3rAidCTtoFQ821pesiW5NJStcFBvyA1vFJA",
  "key40": "2gNk2wiCb9KKGbDXtF2MMGykZM9iFhf5VEjHFuBdeAvqVcZ8RxNuUQZCzUEDqW1DNkmUoTS8fnEv1e8EJEU2FGeg",
  "key41": "3p9y2PKbSC8AUmXdXcwtbywtAauwXHf1Y1GSGKWiSxNDSegc2UK2ipmJ5JnkbGNCqoxBaMod23vSrjPXukjqJ4U1",
  "key42": "44z4QPZJe2mSeyPdokt8dPFbACkF2eshAzeGypYUoU3yCzm8GUhEtdinzKMNgDKRmCBPZdNujtuDDegjFzrMFYAh"
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
