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
    "2otkDBK1LdPYnHF7zyKYW5ip5jrHBm4P7UpfKLDeDv9KJaxSKCrm5D4UKhYkNrZkKUi2Z6RBms6h3nKcMPgDZP3W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qKCy3KcSATxUCsthjuGuLvEehYrKgcZrAc89TsvjR2kFpZRZQ9a4vuU7Hs1JPtvMvhvMWPRFuy9vwb8erASbACm",
  "key1": "3cu4BCoFa4HF4xFTr7yaK4x4fpGDFQph3kj4CMGkzmf8vchHpRG86ge1KzVcMJgEvo4miHEiQn6cYmU1RcDLNRoL",
  "key2": "2LkGS5Fj4zPfdtptLgVhjAoeSxB5hXrSnSFEAcS4rAjgSi1SY7p8sr7me8Tri2NpEvJQ6BcUd99rqpuBUpbkhPu5",
  "key3": "TL75mKLfnns9wTQTVStuhh2QnSqhGFUnkp16HtAwpHNXLWqBHMbiCooUSUHh7UAEHiVCyrcnP7NvcD97fC2q2Kd",
  "key4": "3J7hxoGhUk3SCt6JsVg8duPaRozQZPZjBX21QG5TcXdUsNbXTUVEuYHH1BSwtHSqk3FnJJPrDGNLipDbvQzdgEPT",
  "key5": "4vKG8Jc9rVMp98kdZeJznqMduP85pgdu6nEQHn6DMUX6KL6cyN87DiberYEjAdMM6Yu6scHAn7bBd1zASopuVzp1",
  "key6": "3NNazT62ugH3aWSagnFCD3QX88VdEDjecN5sSoBKU7s4eEpGGkqJhJTb8igHbFavpDXpzQQ8vDnsGYV93SSBu3yy",
  "key7": "2M2e6MS3X8yLQVg8Ws2yhFiEzS7pwehoyp7HHUzHGCWMvRB7LgVUTPYRjkphWWQKe8U1q9YADZJkveHRp534qz1H",
  "key8": "5k7BnoRQRhapDxWCBH2qfEhC2MSChgfAx4nCHDn1NAwge74yKk7XwZCGFdaMNju8TtjL9HuU7FtiAwez27igTsGL",
  "key9": "35FpAAfNGPbYyqaRNjE47kVKohzpntCiJFmFXjUXyxwV4D1uTib8GEhRyEgZ3Vmbsm2JwNwjGEAJbdU5pbJTRGpX",
  "key10": "5gAYFK4bW8QLuzvD7QWYSeaMUM9UrAkDuDLeVBXYDWPZRW6HnmMVdpgESnVC9sf21xhY1ZZvQXTMZR9K2sYiS3nJ",
  "key11": "2pZAegeLymqEu1bK1eKea1VZoHezSBRVMNpndKogjTVCt75LdM2f4cc2JvTn5j8sHWxdCC87Dz7ynYwWYuzCy92z",
  "key12": "JP5jdz8NAnHDaNe11H2zJ7oaiv7WavF2RcSkh5So7BaXRGszc1UP6DhxpucShfhmHPg7oktiRntLZK8mTKXvaKu",
  "key13": "3vq8o48aS2fWteNqQ9tWW8PZcgtSaGoPYVKHf2TDXsxWKkNARRUAq6PNvxY7rg21LuCSWA7cM2cEnhiQEtmLof5X",
  "key14": "4Rd4dNBumQtPDuJw5ft6AvW9daJgTN7WctcD8ZvYLPCEMzjtf6pESf8fpVprR2jvkV5fpmjaoT7VnhEhwQvsriU2",
  "key15": "sjnctaFgs4EFaw9Rdzg5zb6Jtkcs3ARY3imUPq2kztmvwAZGwMUwRnBjxF42mTxrGmLiPX42fCsMSj9Woy7oJCk",
  "key16": "4JfiUaYL8RPTsKxn6rJm2Jx9j3fSZHoEk6AUGod962af3HjnJqd1gagkW5rFpRdoDo2iihT65gbcWvSaqSKrLp5f",
  "key17": "34qBLVcZtKQfQ5MmvKm696FMa7ciY6aV5iff6ix1MnwGaNpUfY4dfy3qwK3mjPQyFQuL8Zm7CTt3756EFytJva41",
  "key18": "4wJV1a9yznjLxgjTf3AD5Q9RHcSaHHvNLL6yor4tm9jsySHW4HsuELfN5P55ikLB2gTzA3uxMWYCfjqNWvy2j23h",
  "key19": "5a4MnTF1nNHe2vAoAnaN344JJeM4LhjdnU8Jvyho2MYgqtDVvEEryJasHLJZHHyRyoFh8kNWUc28fkoUSVyKtUiZ",
  "key20": "3LQ5cW7xjU5JzH7b6FsVLwa1VsmchfxDE2TVMFmagQrivd3zx8iFxZ9gQCVSzA9ReouSREjLXepih9z3NbahFWVz",
  "key21": "4tyJrwFDweiC8gjqNFgcTQDCrwbHZjQtpwkBht8s7nfkXMSy7Xg3ou57wfsfACVExShdFzrksXGsiCzX6FA8yBRw",
  "key22": "3BAPBX5thPHrrPNRBzRFLRDC7tH3xQqdcprdL4HVG6yZuRSww8dCWHKtEoNP4VA8BrtDWey49qW6oTmhJY5KDmYv",
  "key23": "4R9DJKWTQ7ogLQyA3r2LRfUGoyWZZDermm6DTX47bW3mafT6gDwLS8i7qyHEdqYEP4ej7Z6JsD2upniCDNWFppB4",
  "key24": "3a8YvEEQGarqktypKrMkCFecf8iqGBcisJnjQCMZRPGTPR9vU3w5EorCqtchAupympoTs3cmDcyAP5QaV7Tk1ChX",
  "key25": "2sgfJ6GQmLbrbMMe4Q3pvy8cK7yBuaYrcjjrWsUHSzmxZ5XdUzwCcwWVdAMgWF6xMFtRVrT6F6eYuuqtohWMJ9uo",
  "key26": "oVPWwDFPfoD7mXTC1Zf9ThXutdCDP61he4XeQHaTi4Y5Vet89FD9WuwkjLtCzkNqPZKj1GLKEWLd3si3b79sQJu",
  "key27": "3ZVbHrn5JsuvdjVwAazZN8wfvXHXeSkPEWEp2mBWM5wSJAhKK3ARvetsftrSTohtKnnXz93zbykw5L5Q12KM2QTq",
  "key28": "48tAT6yRMUrY5Y9fS6yiCyNd9QkHoATwZM3cL2FsWSVLkJmZPx45KWi8JHrkUjktFJGyFhC79zRqyaeswNHDVHBj",
  "key29": "3KKiToQMsHur12zkuxTLWHXfgaxyA3ZZaPDzhVz4TURNgaCZREGcybmkqFaaPBYi4K3E5wzChE7TRzw9JxWSRj5e",
  "key30": "4xWA5SvMcrZjtivqzGg2MYGqYv7yucoMow28QCAxEwiQrKuNYH6PzgQ1sYvBVVJoPHy7FyRz5GfEdEUfCatUh1C6",
  "key31": "hDgPQnaeN5sNb1YE7HKDbfcrXqMPMVePGs5HoDRce8vc7cCPbiPVWvZgHSobVEx4zCwNmY7FXEAdDowAL2Cts9W",
  "key32": "21rgX5HYR9UofJPkAJDD9KxwYro8SkitqyorXnAmg4oCkcag7TF4yWNTtxiuZqSkuQb6uyrJeB6bRjkLzd5VuNge",
  "key33": "9sNeyYUBAap1jBJyJik5N7CYgX4V6qq4CS3RQ6NPtXXLn6FM5ijm2fi6QeJpHfRy9ihU1C1o6c499H3sef8YpmE",
  "key34": "37yGJhB5humSaPLhRxZx6W91myJmWq1gkZgtaLiH2sCbSKb4AKvXFaSXgk2XZQPwao5cMuXY5yBsFPjAQsVjiobR",
  "key35": "w1PEwz7u4sp845exiKeBMYWJNY9K8Hzt2LQVTxemQJUKMaM69BhBpj1FeKBJWXS4Lr2sv5t3kk2rCUc2v1Kpjig",
  "key36": "47B6sREvS2cLib7YDwsAy8ooAozSvaJdRMYxachzRZbETmYh8FqKyzERPpAhYSrJ87jpJkewmMnjqAUFLPff1BDv",
  "key37": "WTv2ERwCpBfzvVtqJ8N6rXtoy3kaj15ZjpXGV7tpx7mtkeKKnpFKSeLQaWbLeMuHAvmRPRrUFKrHq3txAuKWD2G",
  "key38": "2sJtDEuqhrJ5JHqtMFM3RL4KTzL6BUCYkxPaNhWFKELJbGnKkc4LPLAJ8V2WtaJRLXPBtEg8EFr8xdBQXvFDyXUY",
  "key39": "STMtHZbX6k3XQRMJ23G5MK6nmdxezs7uBmBJiTEnC47i4jYMg1m5uxy7LQWy9uRoAAicLgHQHC3UaHFBbfQaa4A",
  "key40": "Xx8vJzL1i7dP1Ww57GHTLwda9zwxHZwM1gd1oDStLDqcgJsWJeb54znhGbi6X8L9Wvsk91DGh1uQ9L94ZNHQa59"
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
