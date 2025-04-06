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
    "NHCkwDcF9K28MvvEWpbj3RhUDMMS86DsTThY4i26cvGeicjoXoNJkT6FDM2aGZ7XLCSJ3mGvBaTfQ7WKcmvUaJQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EY92yByrYi77KaxvAUkh5ScdJQDA98B1ui5W899kQJQgiGP9fcgqiNbiiaQvrfGmWpZzigRCQaKJ7UHSKviXKbW",
  "key1": "Kp3NSJtcPT5GFQNmV4h217MYQmgwsPHHauZcU3BL4KBzUi5Zitb6vyKvSS3QC4Cr7MpvPLSjHCvDRFrTCiPQtrL",
  "key2": "33uk5k9A2M2NFWzD8bbss5udqztpyr7fwrr1hiEdWThsj51fWHL77F2BqUkiZmHePvXbm2WwwTkxEUJEvVogS28M",
  "key3": "RjVFD1DG57zw4q9zpnkgP7paHv3KAFSqcrUNF54xi7ctJnYpg8eTDXgqzEAzuT9Etk9yfijw94LB6hNrUhjuBg8",
  "key4": "3XDmGoJEJa28RZ5SLjRiyqhSAkKdXduKC8MAwg1Bo1eMVqnkrBu3qNtM1oHnNk5eSov6gfHtdWiu6NSSjNAGy82k",
  "key5": "KEXxojdRAbwPzEfBX4esw1XAwLbRX68dHYhEFzLP5LM13Hfj9fy9m19FWpsbwSonp4rCVaz4MpeKFpdy7hKBNC1",
  "key6": "2F6SmnK45YqZ5dR7TfzxUwrjJ2qwkMWGbuf5eDsRAPxsXSYjMjMd6vzHw8gYxWzWxhjUUz6fKNYRQULBRLDDs7pd",
  "key7": "4qXcwGctCWJd4eLyZPNSeSGSo2s7LWWLBjU96X85GKGqxQ8hp7NYd9gpktdgqtrmvrX5nvdXZXQCojfG1c31zfVK",
  "key8": "231JXPe729R9QL7C8L4bvzLwr8YeVQyxN138Pqg4ZmNRSmQkfP23izZrsoqR16wvKAGBZJPPAZLh3A8es6Bk4N2R",
  "key9": "2Ev5sSrrjB6v3xkHBQ5kUwpmnTwvYmM2WgBzNKXjewM23jmYcAcMTBD4HcsGaLmZZvuQ3T1g7ZgzCWVyS3LzWkEj",
  "key10": "2YMuPtWfRYttRT8RWWerdRAfQRLRHc8aRhPC7UPiLGJG1EveYW9P27rxybGtGy8TUUE82wgX6ATu1FmGeJW8VufN",
  "key11": "2Yt77uomjtmTNR5iK5CXdfvkAHTPMhfdNi3LHGQsTyTE5PSRo2Grhxp7jDUzN11HeqazmjPANEY2DmhGHrbNS9PE",
  "key12": "4sop45rt4x8XoghD4kXvdtARJ5eQAhtivXUYLta7ZDiVzZ7YDEyADtmKDgKacr1PLBEp4i1kifcS43ETChZqEX5W",
  "key13": "5rXbDmy14hhoQWsFGLgjUoD2hwxZbpzpJzEmU518f1uyBQkVCxgq2GZomideL23xqrmi2xixAJpLTcCWYon2uBAc",
  "key14": "bkAZkZzPCrwg9WJVddrkobeNuti6JwgUKVn8psTXdQEtuNk6Zv8K9CDcEBBaa144ziyTh6tujYDaSCpFE4to8UR",
  "key15": "XXVNMZfPeb6h1VaJobRmmYuewSKJncdMAFDvy8sAa4auBxexM3Mo7gGbY1Ld8sLb9ixvxkRrVzfQg28JN9qWmYC",
  "key16": "3hUJSgWfnWbDC28QX9KgPUD7e7Z8KTBQaynePFHNeiVPV849aPvUsursyGwS4ZyWaJbdiXzNy4dvwL4euushW2Wp",
  "key17": "2sKhFZftG4LzZ2JMzQKtrjdqaLzuDcwjWLyuejBJD9msMfKUFFc48rNKBsXNH1qrJrpLhcf244tzL68oQC3EGoEV",
  "key18": "29Z9RyjLAJ9tJY1RPLGcNiDUShy1RSyDqJSnXRwtdUNnkpSzt6cn9R3gP8Gx8M21DnGVRHJjU6YVxbXqcfSjo9TX",
  "key19": "3vsUp5jYJ427k6zz7d4HMX5wxKdnEDyazaWs9ZNDwDWYthXjLLqzWVfikgATv7ScaHqGjrid7VzLVwPH6eW6iUvh",
  "key20": "38qvQW145gfhUCkFBh19PHFuyLRGqUSBxBVWAychb6WhokfNzsyHFgLM4Pfeg1CkkC8PfxoDK5uqkGqRf3KUijs2",
  "key21": "3tmCxShAVGKwZKAyzVkRzRjXZwjjHbpgcjvZkaCPspDEDuoSXgoyVpgum8wDPA1d7c3xvt9XWi8zGUZwVqCJQYNe",
  "key22": "5kpqtYF5uoRyCWFNUbUAe2C1xijjG2Y2wh9iVu2mvfYfBzNvUontHFnLHUCUqF1qcGrvBTfuojXVZ1oHwyvWEuwV",
  "key23": "298jk25WWhCbT9bffxaepNpBJy1jeFBbu3Qke9LW6yjCxFrhNMagi2e4Etv5RJakY2LhwjSvmYHrbsrua86XEhRc",
  "key24": "3GN3SDXjZohkY7KL5eQtLqaGYUqb9t6hVXxmEekmaGG6tFe8PqSfyXUeqAepbd9M9rW9htxMPPfe1zPrW8UPzLDA",
  "key25": "2K9XmBec4WARUnjQ5BSJwwcjebw8rfDdpGXcb4CxNeu4b2w3CFDSwmpy4gEARuuXEqUvYwmFz5sd94cZ15cQPZBR",
  "key26": "2xqiHHfn83fUyojUyYxic5HKHw6G3Sqy36i9FGs6KB7zyB4ZX2DHKj1rAgAnBR27y5mKnfSc3kUFRDRn1euWXDow",
  "key27": "dRRfTdro928ek6YKhs3cXZkSH8wFvddtwEsf5iwpptJBprFNbJRSpRcnenmwtSEV1znybe61Zh5YwMqRpurxj2n",
  "key28": "WFRyeHsevKs2E37JrhQaMskFZq2HQ1fiMSEWV98Q99vSVBCvWCB1bFvH6wCS4fE7mjEkX24zemJHpdbpYQUPnuX",
  "key29": "4hfryYkhhVgF3XQqU592BhAazCUXR9DeULAbUdrhb6eXQrCQnUnAYvGYew2tp8kNhKtovA8VnfPk7c9ysZ5QHpj9",
  "key30": "56goR8bsGp3WLut2E7WNRohMPSoCAnJadCpM63moGSn7gWTgZc2YF2BK53y7iwXAonE3qP6KQdvNzdDxseUkeFTp",
  "key31": "2GqSdiqTdCeDZg9Ant4GktB52DgT4iR9joD2VK2fpi3y6KG6HT9q7ERvYuLtuBajs4qA2cJsattQYJen4f7GLBGD",
  "key32": "5VLVpygcP9bEcf29r7TaHj7LzhU4fqAbtBQsFWSwytDVQ5jfBPqLh84wHniiQ9umzA6CNBRkav9fxuAPaCHGbAYk",
  "key33": "4aRMTMSC3mHMyPPvGkBiPJB7jokiGs3fR9cj1QpAY5gR6FdQsSDnVQkGfkY7YNETr8cm583CkVVv3yhnSMFcLUQD",
  "key34": "4XUT8n15QDJJ8cJkH7XhFxWmQYBdWfMhc3UvUSmnLJb1FcAPnEpEbQmd3F6Aif6zj4YpbnsvTReupSxFyWDgdcbz",
  "key35": "5ySxViwyt2aP58HJtjM1NCVakipUHYUgHPVNLJARiLGeAPFdrWrjK4QFrK48Ti1BdLvMR52X4VqcuS4VNZ9ULcSV",
  "key36": "e7xoQ2btbYVgyKP6zG4giDJALpdRW4eQXmi4mMjoxbJjnzrcqLvjqDF4f16NAFn2YbXPnjo6RixVFqdFAy3n7hZ",
  "key37": "24KiegzFxY3pQmP6JrPbbbUpKdLru31ZqHCVQPU9BbV95vo7rhbn36wDUaBVdtmsynC38dYRNGcHxcZwm7VLA2Zw",
  "key38": "61z8rV6Kpngx9DGW21WciSe2MZ33L4HqBzZroyVEkrCUgFfwrqgyi1XV6c2VL1mKHp7qHjk57UBxFqnffZwgsLqF",
  "key39": "4jp5AEESecqaEdWefkbGiceuffEeNhjyuNapkDFTe9wjtdM9jz4EYK3mnA5bo6d1bzkdc1zntf5qtzgvcmR89u8",
  "key40": "5SCWBpZ58cTmbE9XT41mH8LynBTeqEYuTTY6mXJfs43ZFTeQxdtbdfUNdwt97zLUoDsH21T3VuEMYrNLig4SoLos",
  "key41": "34PnhhKxLsYWdw3LrY4RMcXyNJpJ62RoGDn1PXUqfyuCLdbVMWT38jxWRZ7gxZUUvfgDvbigwTEpXrj7sU6QXFJr",
  "key42": "3pz62pQ2kVxgpQMLVwRZ1Zpi6RmS5vZQKrZcfD1G9r87uUZfYWjZZ1r3GLwT7Gb5yw846aBZwAQT4hjQhJVEM2Cw",
  "key43": "4LUHXe7s1yHbcRDtMPR9bJdePREsmqFJyfqk7tnoPPjvW4TRTxoukN9VFuLaZRh8xmaaNp4Gf1XhQaQQqcjEHZZ7"
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
