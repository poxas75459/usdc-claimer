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
    "PDtLPw7rkRigTfSXkDrSjQRXUpKVTfeeJ5sKCJofxfC6TJRnwj7xZiZZBf2DudPpDZ9heb5wQNGaGSiZBNW9Nm5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5geyXVMbELWhWuPUhKxx7fCYwFfadkUFzRmiiAvUkXtM7rSXVnJqjr7G864gV8He5pSJStN6UAVVvPudc3ByChGR",
  "key1": "3Mgf8SgSRfsAx2vu8AbXQPVvvtYoCN2fS9yM6GKMBBXZKTSWzqUVhepw3RSnsV4mRLXCz6RcpDvpcg6Csu3xA3jW",
  "key2": "3giNr7Cohb3fxp7c7Ek7NrAFooFrkq1djtwDjGkW2Reovkp9bz3b93QBgDc8nC5EsYqdkDogSvNrfNbtYb6HX6Kr",
  "key3": "4iW2wUrWqD8mKnkYUScRnjnme2gBVTwib1Cc9y8qfo6Ko4vNM5tC39kuG22tdeVwMTL75hw5t7XZAxAz8PoAkF2N",
  "key4": "rxjyjHTt73XWZER5xn4428NwzJKTttf1iGQ9nr4h25QRVf7nm4nmBjMprSkuF7CGSjuV88VcMoBGAS5nHjffNj2",
  "key5": "vWTg1z7phTGAVvDZrm2oWLA9VgLLBhGe5GDknV8d8Mdt94pjYZFtf7R1Yq7LEKRg335vGGc7pdnxm8WpuFmXUQm",
  "key6": "29eViUuCb6M6BhWJY1yvxi6iYs9KNLu9qkGEC5pyskPTkbFpQjUcjzmV7MSA2G7cxrQh6NawbKf13mJNJi8jH2pt",
  "key7": "4FqeP4MECgggZtH7gH4SMwqYURUxSiVhB57QVuaWRHHoQxqrKayPH8QouSAp6FUuPcfFAx82NmZTiBZ6PDPEQMbk",
  "key8": "F64wX8aDSU18QGxiC7BkLaTdiBjDNQAKRp96XPZYeFfn2AabmtmxJ7B9PjE5yrwNK3iiyurfVpdcYkR9wEmFgKb",
  "key9": "u3h2LpxeWQozLNyqD71nFYC9KGc3o2cy5pVsKbd8tYQVjwdAest4kbV4nCJdbQwjrvuKtuqUi3iKyixU7D6dC9D",
  "key10": "5HPnTT7xuMpmBoFhihcScHVU16rdsFbh8AvR84pjB6z6B56SkD3fGGLHKiVgjcwhVETZ2bs9o9QUJuAwxE6TGq2M",
  "key11": "4RSuTRGBRgajP64P9Sb1qbLDU8sd1FAxjRZK6qvDNJmc8ocq7t85YsEb9qSkbTW9D1Usn4o7m3yFRzLPuHuK4wfT",
  "key12": "3iH5gdC7vVzwhp4Z58nVYugFkFZhGpZSc1rJK5MKT2DYhPgyKMeFJSrnFg31C8HrcVs23d86VbBkfddDkss6xErZ",
  "key13": "49NnmVf3TtzaqMK49SgtjZLPxn6GW9LsseKgFjHqzftoeFsNGikSpogS5uLPSsnqADaksKF2YUFrhtPA67HnTKnH",
  "key14": "L7g8z3721hAgt2vJFa5GoGfptaGTNbpTgYayKe5ZQ49XW59QAoZoDbfCzZonScapFccJv93Qx95TpXDFk7cRXH3",
  "key15": "5px6kpdDMmMp9A1fb5aJ71fzZiGSRgHYD7amnqzzDuyNucZMoM9fQtNyMWVZFDACsQ5fCGHjHe1UqhjtnBM5hMZL",
  "key16": "2573639JkgnEgXx2jr6QkpkQaYUuRwqemHTCByJGoSLfVZvvz2tz2sMYM9yxNmzxPAcSLjsLD1opcvvUsT11b8LK",
  "key17": "2izmbxe7Egob3zQtdoTY6i442kRJ4LWMi8f1xQs7Z4qU5FHbUuG3idvZgsXren8VdJAGxnpGtwMw1pksu4RaCoVk",
  "key18": "22doDohPFN1QDQSUmJnG3rBcApFQ9iWQMHYNmsVsW8uf2Rpqipr3Wud7UHUFzH6egfAp7YxdBV1Ez5GCsmCbyWXy",
  "key19": "5XPBim499uapvHRNJQJ7ms1Jqq1pVZNFFWkZh3kmWQHemUgaGfRQDG5YFw6uPxwc9PtBdbHg9Ez7H2yi8ZiPyrsV",
  "key20": "21LXzqy8bpu2ZuY5Xu4BMv8dpbxgUEkUodTp5hPBkEBnXyjsN76dGticaTRug74tvUeoz217AW1UeRkMPPsUeydd",
  "key21": "4pyqdQ84rHP93E5ZCrMAn39bW4iGnFr7BDmKKMhUtiGLDK3BdKsra26qXxrG1QYLqvFhaVZgGNBpcqoC836N6YYY",
  "key22": "2h3isHtiCXaHVzKE8cRmacxY9QUdf1f1YXinVrbNbBAyf37ccJYtciGuXU2qA8Sfu7vE9kYp8UzNPYGBoz2qEd98",
  "key23": "qDZxzSMEf7yGLbJyLQRjfMKoCJbbwq8up3nkiAYTUxMzedYqX437GwFnrY47jY17eD7HBJAMChnkbGrvjv7ccAK",
  "key24": "26aPEubGZNjVYrQFz1Gs6qrQVkT8wgHTPSoSvcgtbzacDVQd9ZJDWwT5vEHHFHs8XbqNC6P1uHr5JjUGsJKqHHcw",
  "key25": "4VWuvtfixSV8TRZboDGgjLNbrgaW15qa1CkSdFnNcTsBmRVz13MXDEQCsEVczSq8VAiyDTixoqDBmiw3D2UgPkQq",
  "key26": "3cQ1nSkqnfzJaF43QbyXyB7xaGZv6Y55CnFj37N3TXpSfegxgdDisDLL6KcGEZwD1DJrhkbyv8hDS2LWmGPR448x",
  "key27": "5dVGsNqz6s8RQcnwDHbbJzvqeydC9jtU5i9GRbgnXA7ipbP2i8juSiD9ZhT5QrEHoi71Sn6coqVVeiwQZ1MTLhuk",
  "key28": "26uWQ8qogedKwk3J2Wq95EhuP9wvbW68qBgU2UP9U8nDAVgejwdCksQ6YzMaogGqCSnbUmDyy8GAsWEaa1vwHphF",
  "key29": "3oQZMutfg3dNVVa3BeuQuncjrtN6d6mhWMYWaZXcSDgaw1UJgS7AC88qKcBfK2Ws8F1BYZqMq1ZSVTWHqs4ERcCU",
  "key30": "3FMgo22WZzranWUcAJqbDR6MJx3EQLjqhKcFUPBPZ3PAaezy59kssVEkGkpMtDV2GeHd4oNHaWKsmu3auKwe6nsj",
  "key31": "5heh3JKwcWGS1SLYpjLpN7zv9vA3MeS2NQvhKii1xpuTuMXhHUZ5AfwhJFJHYqubraf5FMZ73emkpyv6UqUU1E64",
  "key32": "t9jg8jzMWb4RaLYHVUmMnTqA9LwrU5QFHJ3Hwj8ZP3Q7F37FAGCAHqJH5ukySu1LYtZyEfsUvvrDmMGUxiC9VyM",
  "key33": "hwbC7F3z77Ltkg32QcHumXCsqMc5vxFHTc7gpqPV7UqnPeuzuVtbbH6w5xKU7AeQQ9id6sXULXnzM4LQpzoEmSS",
  "key34": "3f88qNn3Af8BSLfqhLCD8PauV8VcK5h4t9NQawswnqggCXeHKgGxYzt8ZwHPPHbV6t3XxqAuR5dPMqMssxVGnhDV",
  "key35": "3xqwpn5RfAayD77ygv4pviReruJhJqb9qe2iZbQcAdwpLe3hbwoHd3S4xMQe6i5tmZ1gaVrdYbC9KEAePNyb7vJ3",
  "key36": "5Yb6nxrujdAYyz2dxkxdRkAnZEvFhG97jYob2yX2194FdvugT2Xrmytp3AW2iJ3qAE5YNkcEv66qg3rHctcBWkH2",
  "key37": "7WhNPmiHSeB5ZEcnBz14wKjwrLJfwqrnK12XC47DXnxoXyNnrAh1rao7616csYEWgmeUgdjM4uYV9gAoDarrUAp",
  "key38": "3gbE5wcbGTMxKgUYjmCgLnK3KNRETtrU38sYHHZT5xfjdsR6RXUpcJTFS7dx8aPWUhHUa9s7Tn6X5nHboQdq6sWn",
  "key39": "3ZKmfGX5KJEngqB5UXucMKBL8mn8TNvXKVNfafAA4c9LyLznqiYrR1M982cr9oJWXvtxYx9MztKM5VtmXmXthvGr"
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
