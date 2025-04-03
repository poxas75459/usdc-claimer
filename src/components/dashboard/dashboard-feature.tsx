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
    "2v5tdJnzzefnaZeBT1CYo1EGqTfLcXFF2wzQpSAKhbUjyQWfwREX29CqRwVuq1U7XiVxZerhRtaC9VBvmg33ArZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q5RQqziZ4L5uD1P8s592UgqrfJUgRgscGj4uzvn8VaMyZiAQeRSRCpTe9tDHGqRRsxnikvmaqAEMydr7avoCXYX",
  "key1": "3fjV1Z3bT2bZ7Gge98ZKdtB1HcSEYNCdHLTRzTptnpmYU2hvLH5RdpDDazsUKgeYwP2jqkf27VNsPaKSXwS1H6uF",
  "key2": "5PsXgCJxzCAC4yozx5Px1L6GU4CayuyXoVu3RPZWoiVkEsvcbf9NZ8KLvNpFMyAAuJDGS4L27p7Sv7udNAdqGkVw",
  "key3": "adTWzu6CrRZBrmsqxCkacYjVQBtMWAfrusNYoJ9RGgMdKEzZqyqG6enV2f1EPnn5XFLArA9V4oRrvrnfkvSxEFC",
  "key4": "3nTAUTQMMqnzUJDprRjRDckoLtvzn5bDvzJHiAGdKXcUkPw4EHAPiUqykuk5d5fDVvxWs7BdsECKpjitDDzr5zoH",
  "key5": "2bADohoRwKCsygWzQ8LuHVG6tum7kU3aAsFCBgEmtYtWZc5FzDGauoxUwXQ6L6E6Zk6rLMzoC7VMxt6aXK7KSjuw",
  "key6": "2yn7NxDhS5PTgB9j8Fh1eiKfkfLGQGYTJMD1haPrLAiwtZ85wavTh9DWTjN2t4S8sdhuFjNqiXEJMb3pXX5im5VU",
  "key7": "2qmm8WLFp89stnWrDpfukfEzk1D9agcnzNxHGriHHJgL1R8XirUotuoD3PuzXtuu61n1SU4rL5FfsBps8NuavxCs",
  "key8": "4Y2zTHYSBVFD7acViy9Bp9rxbkHxofCeGBtoTLgg9wZXJi8qQ8fYbivPUefTs1JKhpfYa8Pn2sBjmT8TjhwvFX8s",
  "key9": "59rGFuNPRMwbNqDaRyAScZivr3qEW6aMgELa9VjStuoJziWUmir2cbn4uTfaeyyuPGzBZcjiWWmwzpSwWJ3CTQQH",
  "key10": "4ZXLiQjDrj9rzxa15inwdDafybryuD1EgjDpuzjdWJ7qKZ3Ui7MQLJtmbZ98z34KgwKNckaHe3jLhFHMVQUoDBuF",
  "key11": "3T46ThzRg5JEa7nSZZ817agrSneqH7tjUAEsDw8PverHSZy39goUxLWnCLYVWHtLe8pdPSdSfErDFLKx368peTBp",
  "key12": "49hAL8wpjVniYLewk4Hu1zSabFQGWD1fgactvMCETGBPbopYV9h9rWEu8V6UN692SSqwTsJwsovWuDRf5GguBMd2",
  "key13": "2b2X7SoZmRE8cdFmLRYc49Z77iNLgHD9MpcEUE6TUa69DH5aig2rnMsbWQ7PazhjGh1CDny1zhhAqPX51Pw9aK9P",
  "key14": "4YJqvx3iNXf1fgMJX9KNbgoeskJ6wTGmBE6nZz8gkbn27kej6YbQjdtkFWXE9YDq6LupiDeads8UHbgrdBV4V96w",
  "key15": "3TaLHQDrAyZiGGSA7D8dWsUBBenPJ9t3MupQxm4C5eVP1VMdNW7Unt2BL2txmW78J9AUXR3tiNw4knaiW1k951Cc",
  "key16": "3t41AMnUPVzNTK9WKhWgkDkWBQiawRKKgYTRWfkf9pVFi3EXLjZV94NagW8ysfppHvWuoQTeuYgDR4rsA3KFWi8d",
  "key17": "2rtsQA4PiuiBXf3Y6mUwZkWarmDdtjAkH9yqHuvhcAJMy1UZt1iFqC5xUoC1JjKPfHTnNMkTLA17qbtPdUkkvfec",
  "key18": "eQ4zRb7kpuDafgjkrxzsHv5WpbnTdpdv5TtdSDpW9QooqVrQ8kiGJTH1tYsyKXxhELmTCAMm2Cz63MSi3VCV8zm",
  "key19": "29JC9tSiCRDAVYxA2yVTqbs7h5uo8yMVvfiKPB5DPsTJskhRRfK4mtoyF4XKci4MXEjf9VyFek5NCoorR7YYtpPx",
  "key20": "5crXRSbLeW1TStZKwvAaEW9VvFfaq2rwhjwNvwdthumMMy52D4ZtDTynnTZABwRvhmMPGk5zrPdJa9CZk76btU1a",
  "key21": "4RthQqiXdG7ZEwpV5pKx2eoFbov6hvUBuuLCsMJ83ouMypTi9Z3R3HEMuemjsqe2KdL4aaHxbuec6qccGdgdoSb4",
  "key22": "5Ejtobkhc8C9vz1o1vEYMANX5t8aoje9qBnQidhhU1HWGhAADXdD6iiCXEQur4ou7fSZ4h91WHdpcGT6utr5t8Yj",
  "key23": "qXnvPmbczjprX319sJWyHx6yYKvbWaXnfovsE4fTE51AMabjwYFDZFmwGNKJfTX3NUXp2yDYSXhGaCq6Gx6kYmF",
  "key24": "4aFY87Xt7RayWP4D9krWgXoR6pCzBXyowAjdn4K2uQXMyfBYWiVMKiumwxkrzYQSHHXtkHudZGLcHar4vbWqLWRM",
  "key25": "3sm478XNxw1AeqX2Whc7cJG7ECBLY5nztKY1VPCVmkjdjMgrxaL9jRDe2N41KTgvU7rjAzDzzf9dk5kSRTECHccZ",
  "key26": "1253WS7bZ7LxuRr8vuFpyrk7zXGJdihEvSacNDyVUF2wmfyBBaDmhKekjxudUtdUwp1nRUzHW3EdS7RsCx14Q1By",
  "key27": "5QsJx95jDzXn1QUdwyk8pcGBhy59vntWhYQy4erC1po94beNDxzeUGhLGGXJZgKTtLLxWTKANdqam8jnsFycBGTL",
  "key28": "2uwzenECasH6M1t3gSy6vSeNwaqudQRvT21qU1krN4txgk8ZiawCNBSnycSpmg2tVkqnDHKmarRxyX5SWhw9TDnu",
  "key29": "4HEWHaCxyGJk8d3qhBT676vqDJjsNTWayApbQEhR5WaomSvzWe44cWcovobgU9HAP42imT5dgP4e7PLjLDe3s2R5",
  "key30": "5LfQ2UDcAvujGC2kyXShu94YoYBjVmGYEXGh9yMuP6Gx6szqPRMqSM814nrCLZbUqgjTft68m4sCKfdfhhtehwyH",
  "key31": "3cYPduosj7mQgfPuuGmVbt6bCXo1V3R8bnyuJRnM3M3oEELqnRCLXa5A1XKKvSiMFhHJLFjYhgyKvcWUpTCzLgwY",
  "key32": "4hFUWghFyrznR7Xga8PP4VccdtnziEeFxd6Moom9tfpzUZ1Frfbqr15Ekk2cmXc9YVYbvuAExe7sAGsJpcC9HfGp",
  "key33": "3WW5iVhgizP3dbXJvU8zTR6Ug5EmVfLZTYXS8haTvy2NKn8JWLeV5Apm7XXgivnSF1Pkq1cdizMTfFLJnrgKhYdD",
  "key34": "7Lg5TiABHJwo4xD9YWSTbiMdKdmNTfPHhz1XhyqAyNmkw1XKCV7ZKayGBh7Puee6vHPrrYVrFTq7m8i3WPLYoay",
  "key35": "63rkcZS8WkuYCJSsZVCdwfXZjuCkg5PUEJLxt1tjhehD8YGEV7aH8JmPtwLoQ2h4Yux9hDj3BGJvo8v9PbV1vcuE",
  "key36": "3ZMUBRGr1LehdpgZpGuQroaFyr9rH6tFB25pSLA394v9WPF7XNCuBoEFmcPzY3wXJVjN6Uiy3TpkEfJuMBZrmjpY",
  "key37": "3C7v7m4jtee6Pt6Dzhj2HyKkHVz1U49cA6w4TVvEzqRseNSpECQTJY8uF1ktv6xBdn6HjAjiTvZLxzx4TGsxbmt6",
  "key38": "5kPaPPT8F71U1czGARqLqEHEfHBbecYCdAm8qxhW7qsxW6MMdjddD47R9ChE1BUJWV1AxNd61HNaaxnuZicbNeED",
  "key39": "2XbdWAshoHxw1Eu2AeDXzqYxrTXtxUL9xwjxW2MWGYQKfFaLTysXKmov6zZ4vX3LydNdWbFNoS4uArWGp591un9a",
  "key40": "2aXM7zFA1EuCmXw7v8tXect9SYSmszxCUFZ5dSpAmEwKHiMECMrSDj6SEdMNRM2mrCq65gjx1pii8L46QqoFDdFx",
  "key41": "4rozt9SZkFGuFKdMDRUWfQX6h2NeskB825TauXGLk3vd6dzn3NmES2DwTEz6LfhySLxFfjW7ojUbkoG4e7RwvpCq",
  "key42": "3Jg6pjnvvtg5m9hVUJkoD9Aw5Vs3F1KFWytTfg5hbRn8ou6a7mAHyi18jZn6C74Ew98XbQD2KNdjZHk6P6KiRcp",
  "key43": "3AiVpQ5YxJ8ihQv4u8xA958cgu57ujFRyxbN9TxwsRtXhmxcPZ7pSimci2m2pDEYttq5xtRLbJdstybNFRnL2Pxu",
  "key44": "3ti6SmNiKJhGLsg6e5Pp5ottG1mduEGdrUZFHp7acVzieGsyAUjSe4o8gXaum19Hbf9dTiK6LuXRry8Z6owa7idJ",
  "key45": "4LCFUJHwWxaKDomdG69tkWjyq1oxJMjtT9gCTfh4fCXP44Mpi6UNGJqg4ttHqeQPymjhLR8MtzLbZDA92WTQFmQz",
  "key46": "2LYGtdA7Az2fcmMqgcDKYZmzXxqL3im4S7VXyreiyT91G5Rmkw4JTTAnTLyWB3NBfgdAxeW4acV81jTmrcnAhM3N",
  "key47": "3UdFdSwUMfBu1bwWZzAXSudRQpuo2rja1ttN3HYCvdJTuLYU13WkHRcfdLMy7hao5nSamwgR3JdT9DqPLcQpdh2x",
  "key48": "2FJ5Gjrf8mJPizGDfn8Ek3Bsc7NDw5Kk8fcAGPVen9yvhMmghN7Fto2GkxkwkqSJuFMCyDrCNXMbjY2Q8y3hmnzp",
  "key49": "2ut6zA42iz5Kt4uCDvFsDhRwmLMrex3V6rfzvCtgw8eWZB9ZJfnxC6YY5v17HKoE8ebyXEgczU2e4GR275mK7MZp"
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
