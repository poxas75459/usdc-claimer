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
    "3yF4mgphF9CWXdL17geM5Gryi3Map2raj61iV4gKVdcaQuJkRuiVuKrpkvrmsUDLMTZnoMHNAwW64pr1WZ9ZoDEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pgQMzhK4H6G9VYyw5bXDCraNr3Rji9H7KpC1gwGzNfFKUePn8DpyEJtjtXUgCbauyUTAvaSuAxss7kaeB3MKmP7",
  "key1": "3jiFEmJ8EvxqsxmNmb2KKnLtexnJY4E6RXM8rr4bm4f5PUZYRXqeWZBUK8X11kVSq3rDxi2kkZ4dr3vNneYX7VwB",
  "key2": "2BryFoWytB8focGP3y9rSH8DPbfNuiMbuNW3kRyajmwRG8RoBUGntCfyF7StxwSCY6TNTAULvYwjAe6UmJjd7qDr",
  "key3": "3wht5cRwriQZFXfqDnAUd7xUCNx5LTMEn5UoizXvnyacdG7nxMRJghiKm5Tu8V5fyTBKNZrmz1dhK1Hft4Vpyuf4",
  "key4": "wAezHeZmyCmfEx5qadw9UEBdgfw9spaxAR9cEcDS45u6AR33S6vEm5rFLVZEmgK1BegHrD52YjENUJxogp7UGye",
  "key5": "5KvQjtgNYzPPMriCcj9yBJPQyW6ytnv3n4w2p6JgZFgJKotLXso7fm9bmYsFwzYLe2EGLiNt81ssVnj5nNAc2WRn",
  "key6": "2MQCXTGft5eg1g23DVfJr1yT3qzj8sK7cXYAZpE27YCetrnpnYVjTbU1c21oy22uRVF8nXdaAVjuXSB4GAqSTKoD",
  "key7": "4YpdFVS72nnu2cdepvvkcVPn9RHyw1eUnjFEuYQfD7SzHyFiAE3uK8uQxTibtycUbNMxprbC8cFfH6hbxGUNzrCr",
  "key8": "5BjHBpRwdUszxuAHjZaqThsD8BZHnVG1HyBNJYaB9ix2jtK39oc5TYLzoYhwdJegcoTc3c3pY3C1RNo9yCu8penJ",
  "key9": "5Y4rpAkbUrurMJqnSBFV78YjfQP7ahtranqDmQsyQLAUGnuTGy8Gt7uJ76rqhPtRwMXeM1jAQVyXpm2UN7Xva46p",
  "key10": "3cawyeToDFvUgivKqi8ZLBsXwh5fi6HjHLr4HGPUtudXDRSZpGSB9Dia2RRBHQZhyw3FWzuSCL5VRBAs355FXcVB",
  "key11": "5kDn6XJDmxBWj3vpqUwD9myeHB4jE5QKYF99B883TGaizFn5eZ1soKA6tPCpznYx1BcWG2aG63Zy8wBHieLq3ijo",
  "key12": "65QQsD3hYSSCDy9H8esTtBPQiYhayU5ZZ6jjLbFmifYzqw15E2PqNfURTZkbCHn7PHcuKHQUxqRCzCVW527BdEmh",
  "key13": "VfKmgds9GfEvGQQfpZQJPKdA6TmsjfFmrGe6eVuEty9rMFtKpb7cMGMCANVPD8mQR5VWwpNQobQwHnpLYyYdSrF",
  "key14": "ZWnnnhy8N95CFnKQdrgp7AUc7LHQRz2hxHMr8o7A85y3jLRtnjVsnrzeXECFmKBr8fPCoJF6xvPazPiKM6jK5L3",
  "key15": "2LtifUohd36SKWJ5Le7o7jKTEKFEYAevDUaFjn6kSaCcd8woWEXXQhR1uyCCySngvGQa6Lrkn778zoW3KYwiTEzA",
  "key16": "FxFYZfY7TkiUmj7fbtRqguHknRE8QkqJCWQgQP9ARxSign32aDbUyTEfitgPacCbELZKAgo1Niyei15SB1iTip2",
  "key17": "xJHH2Ev9rRfmh1qxs9rgsRjDPdbKg8PU3YuWTXconjx3fiUgkUxFzRDWpUULGaS5T1LbtnFRv9hDpYeRf1My5jD",
  "key18": "39gZD8DfQia8SdjMumcjxm7CnvPanCpfyrs26jGiREP4Hg1sdwx5wocqPk68DkmcGcSaAuQLoRcrPZHeDiDCsZod",
  "key19": "bXLUh1ygbXWQWSbBNDYZA3dZhR2ZVKaptDEnES48PyJvzTmG2ccRUpVF2LwWvi7mBa27EoNZHCWq7guVYP5oT73",
  "key20": "5GimHayNju8WEY9VFGbUWtEAeSZXe1ieaMb57XLWpWDwJhnBQWRKxeTmFVbzUr1Teb2Y9iSV2ANkDm7SC27Rm5gL",
  "key21": "2y8qThU5GgAmbbq88ogZU3LqVjd53bPqJxiXNQDM3sQF5ZETaJmYL9PY1t6vd1iawYGh7Z9rdbVVxwwPU5QbYxzu",
  "key22": "54miqiazYCSbe4v2tBSmkANgcpuUPR6TzRCqpLXS6RzxWnRdQb8vR25fYxom1SZkWbHBxdwwydmxVhnL14jbUaky",
  "key23": "iTtgmpXtVZVe5j44YZbEA7YayfZwUoELzCcxbhd6aKGXDH3rQzsRQXMifw5j67RYaqkNMSiQ92vP9QSiHjUdJd2",
  "key24": "3KQ5uPi8nvByxwv4K7aaEaJzsZfs2e5mdzuAjfzSS5VFUmyvQnevpJSrr1HbAbDraJXESKbPbs1kZdejrqTLz5xk",
  "key25": "3VPpcStvu88TwpwBA33XQAdK9LcpWvh6dCJFgtcsufPEuLZZMZ5cgyTiWKqvridVBhkkeQCDxKsYBUbKFEjk2ms3",
  "key26": "5wFKrsJs2nhUmudLyq848AkyHG2idF9uHV5t8boX27n4TCyKsnDuHQviddrVPvuYu1RfWzbzSPWcbbxDhj9VfBaz",
  "key27": "5a1kENwSKDk7gHkecoEGdTDNyNY1b8LoZZN4N734s5YqAaweWHv7oDwVynvHBWucCj71r1kEgXdhkHk5PSm7eVHy",
  "key28": "5eLT3bYUnPaRe8s38JLuaj5XBTpDpuCnCrTu3cwNUfPWKZrCPzo2xu1yj7DK7Po7kxYjxsNziconNCxUv3mqyKoJ",
  "key29": "5tPuBgT1KF7FAXQnJDS3dvE1xBUUmseydtTo5DJDFTNeTaqDtzjpFrUcHa9AmqWj5PgkjkEPaE8u68ttpzg76YmU",
  "key30": "4WLe66FEoxwWBxBGk5wa5uW3zTKqkiBqCTcRNySKZ7Q6Sot7CAfEoTxTbv6jczULVkruaaBLoqvb4noppUDKgGfo",
  "key31": "3upbQRdUhnwJFijiFsHDFMCN4qgnsGZ3obB6KkL3HraEjCLPjhPACG4hG8uw4qTfHd4fv3YjJbUNM1aLu4rT2H6a",
  "key32": "3qZhtYgCVYyzAPMzwcUBzhcmgxgsh7DnrWoF3pZ1v5t1nPDhrq9xhpzVa8bjvkNVdsKB5SWQCgCK5QvBeKg1cw5p",
  "key33": "5E9DuTkXSNEfs1gtGCR3EDvqEHfDpdjDdmu5QekUbRTtzGoXPvrTxggogmG2RdsMFXLDQ2v4Upp7Wv48vfvoFbji",
  "key34": "5gAqXruK5b2L2PKo6szFeWenwrdi4JCijEDHH2LzAuczFTQbzsFYZhH5z2weHsfq13qQLd1jjnaX92K2QdyJeKfA",
  "key35": "uqMMAj8nHrdCGBdnkoC1C8X4W1fo2awCJNXjfpAGLof9uveGg7gaWNr3hDT65QL6WokzWG8dHmPjdgf9QzqwxZy",
  "key36": "3qMs3cuHXTWghaLHAG7eC1QKkkGfBj4RFKDhcGgJPKY61dHKtp61auyof49k4GJUM8cv6PyuSiPa3CcF6FkvBuF6",
  "key37": "4ReMorctQxvgp8S2eRFQJNnCzYWqkyKoTbTBSYwmNBNoVjrCpWKs6TSEzWouVMQWGobvn3jjxro9NvAxRmPWw92q",
  "key38": "4vvG5wtWMGaMrQyFvjgTnDiFN6yJ1L9YWUJRT8u7ng853XFcZhVJLa4AboRonuBNVGz6ZE5Bo7wNruEWFhkDbkrZ",
  "key39": "439M6TEgdjdcCLWaSgF1xTEZoYR8945sPd5ejR8AVBWAH7ey37SivQGughqGuVGFkqNHvF8dZpLF4DKqovkb1KPr"
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
