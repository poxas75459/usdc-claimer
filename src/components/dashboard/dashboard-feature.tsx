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
    "4ZAutCRhY37NZo7qAD5zPVRHe5ichJQ5Mt5Eytt2WxsBHX5aci3UdRNAwnH4thpHySKbCaELspbXuA3ivBuHjbdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SkAUMYNSTxuGfjuWUvDyLyCjEq49oV8MvmuLidpwaHMuuxMu797iS1hWFXQzhpXWmbV9s4XQLhp6Qk4jG7zuQ85",
  "key1": "26aspd1LDzuzWSbNoXZatRD3vgvTU3JGKbCA2KAskGq2Ps4tLnqHNJ3bTF87n3CzzEisFAe1KNsHfKB4UiTKrk3i",
  "key2": "4er7sofVmgBRqt1QCYANMqLZZQcWq9GDLbCSnE9s64Xjr2rCiBiHzc7xQrMHpD2uBqzfGhs3qB7G65MqiPoi5fJM",
  "key3": "xm6jRQNfLEqzVhXWdbaT35CRM65iRx5HqgfqxYiKm5nthykWPDESRf1ukmR9wWxzn4bSMZDKUYqftaSWiXf5ArE",
  "key4": "5vrBWzhr6SiRTduoi9EEbUzVYGNUaqCX6XmXvpYUUCHYux3EEtd8Xmne2t6CBxWjUS6isfmhdPHPQYF7aNHEmqwX",
  "key5": "4rdNMapWDRAbADmJpi8EwMBE91onJMJqsdEaxn12mxtAuTVf5yxXbTnaBG9fTcrUKn3kcGYQ3x5U53p6RN4Maf8s",
  "key6": "55v6JSs85trh399HjADbEwFNK8GfgqF3REVotJpHCjhut9LhM2bGsvJm4xWgp8vfUhRNhzyJxqhjvZSf4QexVjda",
  "key7": "5MZcVwdmMAJ7fs6Pz9XJy8b6jn4yKmAjHXMGAeH5EoPW22efei8PaW6WcTdS46uwGLg3f7Bu2fzgj2qaoEATUUND",
  "key8": "BiRVDCEuZwtFU4r6j3k5xG7vLUh81Y9gh1NT9m5fNEAXs6FpmxSBPwYvhQXqwXxjSTiG3HR3sx1wxUaJifLGyjy",
  "key9": "wZnhKPisxKzVhZ5JgGkiuDxordvLsAoQuGdpW5vYpGpfxst4rTjcjYMeMaWRjxT2qgS1wvdXRQXJSz2ftQ2yfkd",
  "key10": "3Q3oGg5mvePtpuhuBnpn9hfp5DkZsaeEUXw9BVvE2ZPgBZXzE52wzoR8PqE9aoJjqjE6Lfcg1adZGAGQQHbPDRWx",
  "key11": "5X834rPK6K1Kz8R2DDg8Eg3zgaXvM1E4ZKBKzhjonme4WJM4CLCrE6BHahtGr5vB213uUTp4YEqdQdQLgBWgU9M7",
  "key12": "2xsFZpsNchP3QK3JgigQGXTaaXdNp9zfGnwknH31khTGxwUVCUrdTiPji58rePRbxRWYLHLyTR6s93eJQyaQghAb",
  "key13": "K4GSUEi8R5VmigFNHKmuwF3cETZwaGo3yThqgZhawJsc21sKH5wDWHxZhZB9xz8M4X4SDYJa8PLjCvJn4upL8q5",
  "key14": "3pPTp9YJ5D3RrLA1AFWVXP8KMMqe2yzuHUYcrfFUPm5Nb6YcsPc1HehE1DDSvC7bjThdNiuwym4yv226kZqAPubG",
  "key15": "aXsjQDmnmWTY2k6ie5CT92Diky8ibgSPSktVpDt7BaAoKih7G8GKLDUAVNeVG3GubrfnZWeKgpXx53T8SQgQd2W",
  "key16": "66fitN8VSPVnNs5F8fR1GWunSzBQD8jAtTUZQS3Ly7FJN7tevmxv9eWLkp8ZueDpWTNzBxD19438ovVi9JWX2Cnz",
  "key17": "G9Cxy5HtefT9w9mCeDuoSLEjaciSSbpNreVrVpUG4FNGi5WxdZwKCDH7gQQonQ2KvK5thSzPG3e6zZGCLP8u8mx",
  "key18": "abPy1b94JsyWjTBQVSvDEdBAP37e3QpQ7yWkM34UttqGBWBW28DCmcy3bmKAL8qzLJgmEYRyBAwVpzvPP4E91nG",
  "key19": "25gFB8jdLSzTYejvTVpTcUgs6UNufymt7adWXhK9dUhM7xJbMQHAnByX3yUvSRZKqmkHBnsG5N9oTxYYkbEvbDWw",
  "key20": "5gs3ycdvCPSFmChFZhW7rd8vtHjRHohH9v5RRcd3to88bc7St2g6wfTw43TFdBWtXxBoNUCibqtDfqqVcsQtSTuq",
  "key21": "3uMmnzqvEKDwfgJqYDwbLaU4LiwWoassaTzDt6ckYuhWThG7z8YpC6hukxzM7QLZDN9m6kb4CNjLrmt3mCL1osLw",
  "key22": "5qcWXpsjfDe7Vmq4ZPQXzYTY67vsLxkTdkKiGd4WktkDkwZN75HwpbaNMpKkMo42BLNHX43xhxcqfAutd99NgU79",
  "key23": "4gULRV5Sw7CA8e8cUT3iKYqa3jfioUHb3fiNipy5ifRXP9eZnFiNzysevbDQ7tBKkyTe1Cehd4qzuAQ93gknKDLn",
  "key24": "3tYQpaizSH7T5hXse4RNKLM2Dr3YpnH9F4nUyN7zyiCnaUULtS2kuxdL9jZcXcNEgMVKtC4iJPHxWrEH9nDLvqqj",
  "key25": "26xkJRiqsQj6bT6nYGkfuA1ZHYN6HwP4ormzT3DdbzjXPwLTqGDN13J8917Fs24N57ZqgTLff7iBHz7WRsrVQ3hH",
  "key26": "4VxknaRvnuSZ77NAfjXvg2TAg8wjVT7nynGkZV1xTLegyLcpUsth8J5UQM9KRdEFeZMGdKFaDD9DApT8sYWcFKM7",
  "key27": "26ZHExZoWKfpPGooFZ8f3qCm6opah2s7aJHn2XxLi9mgsrfacNdfE6PFekWqRNuzMkdMbbUq3SKeayvnJHWpoWBS",
  "key28": "3gnR3eR6G83DnGv1epTb2FB236W3sjpZv2oBSD35foZxusTNKQ9SoA5JhksJbLi8Wvi6YUK9e7tABCyfduknYKVx",
  "key29": "3GJT7qURebbBkTSuQTbKX6AH2hNgXf7okpocybuggYispikqDTzhejwYE4CAt9X9GQF6PcBRx9KsvfrQ1SoRb7up",
  "key30": "3AJxgX23oVxc5J5Gdd8MKs3XhreuKTfiqrb2tTVp4w5SfotPnzPzXSBvERgUosgWTk4C3uP3A613vsUQk5RuHuBY",
  "key31": "5s2Luuyu3srpv7xVJ4efZYtemGQQfFHjL6JwUgdgVezaYzQpoRod2gko8ead3vtgPcFUhzTA6Wq3qSdwWeGySm36",
  "key32": "4ymj98hrXAyiaZQ3fNK3DVvouxUMLkpPXnqoD8fvP4usPmztzgMkYy8HP61AFpGS47PVFpdvPweM6cEtFVaNJzKi",
  "key33": "4MaHTJxBc6J921pPkwGTmwjhxAkQhm58hCHd45GA4fkMKJ9EYSxEDe6KBb8CXoJYtfp2QVzj6jzUwFsvARnUa4v8",
  "key34": "4SQXZ2D8FxatgaFNa4dUGYeAKKPoZW3Xb8TmTKtgAmLDXebZUhowyATYVDb1uqfcSTQyikjtRFZWR9feRd5L3tjP",
  "key35": "ZLJ9mBEtfSa5avS1PJF2ZsXRVwN1koarnzLAvbYJRrkTkwYNaE4nGrPdnmmQq9GaL6zCYqLfHQaaXpFs73bjeS6",
  "key36": "5f73xg9h77BjD8SjHhN15wYVBoKqzy9t5HR6qgzEGcDcD2H6F4SLqG5LREfqYaHeePBANU61C8oiJagYhoKRsXSN",
  "key37": "5Do5UVtM2cBtjJvFDHTGKLD25G4ifAW2vG8rcRa2GjJEcc1J2M8a7BaCUoxJ4S9yPk5qSeyivcLxsJ57tZDSMKoP",
  "key38": "4qMgCSJ3kDteura7M2HhdFAM6pLMEwbsbca1ZNH2NjnkEiZfSgyp42HERMXWZj96JiTSsjs4zw3uTJ8MLRyLxaND",
  "key39": "k6eYWMsCCKMcp58J8vxxMJjYbSPskZugGrmteVgabSaZAG7Vthjx5RLDnjN4tSgr7kksGfauYp3HYLTNi9xRb8h",
  "key40": "2ZRdgKMnUq5qMq8ryTgiArnCdvNEAFRmDYVCdjsgzBjZoa25TChqZgLKT6bG4mKDPAdeUFqtCND1azYjDL2AmBQw",
  "key41": "5rtunBbx8jrHgr5az17cFBQ8jv4ePZkUbaSQYm2xoPsqK6ALg1kiNPjMbmrJdmvtDTyQ8zDqoQULjJSKG7dCjGcw"
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
