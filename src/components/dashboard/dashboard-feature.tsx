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
    "3n67VWkAXg2rGmZza8t85pKQ5phwGMz4baFVWc7Cx4g8JZNcZNqH9hrsBeXWJzg61LwtBDuuA1ind8ah29YXHkSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PMsCDvtWQ7cJCMzzhyAvw5kYuF3FVzau1ACfHV3MSzMUCv8LJETuaAWWmTcsQ4RrNPPj2T1sdZuqbxYRPYgBnoE",
  "key1": "2qBVQBmjBavFrWq1TUYahMfLjtjc1DxiLdbM7DuHfGqYRKhC2tqUpE8E3efCD8arvwDPbAxyfdaZyLxmnYcLATV3",
  "key2": "2e4k7GLRVwXWVxWoAR3e9NmZ4EbqGm3AN9795ozB8mSX9HWxcDee9RszaY4RDc8Pj82HAcEB2xt9VaLgfrBf8cGn",
  "key3": "3rjkCAvmSBgSwfSwGWChoTanonvToAbYj5oP7x85SLxUwRtWjqeoZZyDzH1Hsz4ktNxPJcE9y8PPcYnWS2XGTW8V",
  "key4": "43ziLmD4CUY23G9PDYKChybaUZQZdcCkKZseBrBMye8CNgYRfqkHG1M97KSatm4jKXmmetWQ6Q9NoxYkkEvns9zC",
  "key5": "3nY9FwHhDF2PVsCtiu583x3WcteTASJN6y3NCYGyj8NKhYp4VapNBmrugGpN2FLHT8wCUHymsdBUTge2ExzuSnys",
  "key6": "3Y7sw9m7pXbznPX3cFBofdSQ2qncqUovFNuo9f9w5EPeLyeFwCkxAyNF1M9maWoTkk7HwSbgExV4Wj6aNE4LJhA9",
  "key7": "3hUoQt9t3NAmq1PuFk5pGpmMZDpa7pvrkMs1gXTntbaVbzYneXoowp1GPwME38kVnjvCPtmjAXpM81Yg8EgGAqyc",
  "key8": "5wsokRHcJw7KbLm55rBXiwcC6z9noP9CmikMupzLy2bynM2wwLGKQ35KPZ1D4PqCTh7mQyp41R2ke3Tk24tEZBZv",
  "key9": "53QKjeMVKnq3frvAyPFpwzKzvkFTJ6iXgBh62Nt95iebogxRmAtw625EGyM8P6f3AxKAmqmnR94X1kn3pLSfx1DC",
  "key10": "63pdxzUwu5tS6SFSwe3uJJNoYTraqk2sN95qzadunyVAD4sVLFFxsPDYZGTDieFXQMoLPZxdqFa7ZbEWry7XGZqo",
  "key11": "o4HQDySML5Cqz84gshG9WmhswJz9PqyYrCxRpXycka4SLLZDyhv6DnFTYRijf8jncENanou4YWMNeRgoaqejgRi",
  "key12": "5jGne8TAZffM8NscuQmLQ2rQHsyBfv7eF5B8ysqS2mTR8hepLPkTZGk5EwzUm4MkWJ4Q7RAQpmb46MdthD6EZf3W",
  "key13": "27CCVZewRmkChGx3vp1raqCcLH4bJmasN57wQNMyvHBFTvecgwjUEXEhCQ4awRzvxFjPMB5MfRqKaHBiVXirdc5d",
  "key14": "5ZS7bvPzz5ZV6gqoT9fmmGNYywdgktnfYJjwFmDqvNvFpsXkEjuJhYtfquSYZqACuCezP7LfGv5QfZRSSwE9nGj2",
  "key15": "62q8CzrvijxPAoqfJJvhdFqTNrfXw2XJS9pgUFHKm2jxVtMrMMfmQJc3J4XqMfUbTEYLPMw63BimwF6vQKUMPjDv",
  "key16": "2TPS23vPPrNvkLSiqsxYuEtaTBV9E1XumGLbF7EmaKifomkBQJbcUv3JLuojmkfDawAA3JYampY3hiDnb664v2d2",
  "key17": "3E5uCyZspkJotxFVxTJTpV7Cx9zzcTesGh8nAJb2zGeGRcwerWEa2iVwxX3LoaVaF2c7BTMbuSRXSddPMNGvEm7L",
  "key18": "4Uvvcw8cP9ZVhNpPvU9NyMvMHwrdf1uxsNjdF1FPzHFJtDLXdSqt36h8x49b8rDPuGjYhiHfiSM38E4peHywi7Nw",
  "key19": "CEs9V2sipCfMr74A7qMyjrtWNrvji3bebxyexvPB89u8HhHEU99iu1uWJbh3a8bjE2Qe92mRfZtis9MoWnqncY3",
  "key20": "3fNhCyYPCZMTdii1epX5j38FtUXcLJwjB2TPD6sdFaW7RHuojfb9hBUs46FypFp1NgtPQJsG328HS89GnJ83h1iC",
  "key21": "FRSeS2yUfYAZUir9gcufnqpcWyBErPLgXSbw7YQYxMhoDjzijQ2CUWxVWdJzhC3Mm8KTHL6yzvaKxPsQuP3212C",
  "key22": "3TEdDDspRyNbAJTxpTa3zF7wyu9pf3jvbK7cUGo5uRCPxZzFkruRwV7puoqkbf9FvpgnzZSCzxQwoBEducbWeho",
  "key23": "FetDkh4c5YvX77YPSpGvACgkTDGWee9vLHq7pB3GnKYhoyhhuSdkLjoMushoG551nzq44DYrMUfsArPx2XgmdrR",
  "key24": "2BGXBfhiNTUGsi1zK25UyHhGt6noLBeHzsy2jXQo349TGhxa7D9BLXuoooa2B7ehKfc2VWwCykZ7VCY7RmqHi9YS",
  "key25": "2n5T4oRK1uehAx8rN5K2RAMs8S8WKaTxRKwsrgoNUBqAv2cjn1KZUn17DTfUxf6eWXSXZDJAovSfRPJntGhC3hLW",
  "key26": "wQ3tx6hUdsTRkMxhc2TDJcPojqwhijagFZ8cF4gfzXL6gyS5PgH7KM7nUJQ1rs8UBNftVYeBZ3nZmkH8hQDdo6d",
  "key27": "3w3B92TP7B9ALmo4gdRCXGCWVSaCWcGDG9yT54BDf87tFvPv1fAZ3VHgukt66LsMThiExNcKWcp7gusUmYWrRUY5",
  "key28": "4NBoABFB5iWvFc9QpTDpZ5MKYp88JgcWCCc4aGA2fD4EZqbCFjMh9Ra3gXix19bdswHyPhiHxNZDHRuvijRPQY1q",
  "key29": "49pEmexTgj5woctmQhXgpLkw4oVPsYahdBALLH4kXMMR5dBqW4ZTxbxpGFwySd5FbKi5vWL4qqy9ed3RzyWr2RgU",
  "key30": "57eF8iWG7TS7Fkdhau1txp8Ba5n1YFZw9P46bmuQrsSa7nateppN5YWb9mE999XtZxRuUJqGwHt6kgEiHpPo2Fi2",
  "key31": "5AV1L96fkryq5v7RNdyjAzX4FLmBz66zsfgWR1TZsW2zQ8cB4cxjQGJxhAVJDh4ah32M2uq372PGyhTJeJRWYvkg",
  "key32": "4E5tjnf64YZqektthax5uwXxdZFVneWrLsuGhfqjVngw9zk5DsYy7yZcE2YVcALRxrbsuMTzw2tWR6k4ci6DkuXS",
  "key33": "NLyMXjdtZ2NM9enxoLKgNU1bhgEih5xb9vTzD2ou4iLpK48u7Qyu6C67bkn8YBG1PduSDWcipGRetWPZ5B9nEvp",
  "key34": "SX2GjXKDGfzMZRRjiYNJCyedinw7WNm7KmDg8rWzr51crxZxnbGBRUujVWUxUKWN4dnBo6aE4pZ7twe8epNCcUg",
  "key35": "3Qk4W4ciZ6wabEWerrVSdA7UUgUr5E8cJf4RfS187CcZDBrpsbnYKcy5fWiamjUHauZ8Gzrrb1BgmTKzS359FZjn",
  "key36": "Wfxos9yEVL7sxhKy5nhVFajeJwRu9es4PwXPVPs9kznbiKVhyqMQKBHgMyFXYUw3zaKsKr9fwHaYGhhRnbeusJ2",
  "key37": "2MLBB6fXwZynhT4VD2mcjhxhKn87AJymWUuw6vG6mGJkKDiYUKLZh4JBJyi8mmSGLSJnFTVBvL76sWTv1pqZBaTz",
  "key38": "4jUJHoNwvErGvbogvypT88rzkjG1FbE33V4PqU4NQPRH1VQovgTw7jyBrVZw8Ans6DVtgGjov1Uq8P9ppSKgVVj8",
  "key39": "ztFaahcoV5FKvgrf7HTKpJj9iBpabeUyHrNTA8cqTiHiyiwmnbBFSkV7TFtv71kB1J2CD8Qix9dz5rucJYh4gAq"
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
