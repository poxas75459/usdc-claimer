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
    "3JVEePy7J5cmVJjDeRpfvuPgH4t7Sgw9qzJvphriTkpZGxvdpxMKiDQUevLsyrJJVV6raDjoifXsTKLGQxZzGc6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NBE8oJRRBAjZszwfFpVTb1yxZUAkX4GmUHMfZuZQFiDTDctUK5FatfckBKKrvipCFd5nm1rMN8GSm7JqPygVq2q",
  "key1": "32yRCC981ZzdJhcVV88rXLSyuSbbTXhgJzsboB1mc8Bk4RzxS9P38wdbTin3qRqFnSG6Lm9yPZ1AKaGQcoL7ZHmk",
  "key2": "4wSRKwiuXZYcmQkXQPF4kBogzX45CvC8if4ihMrufEeX8oixqFyj7CmrcTon2SM2u41NAwBxdRdNeD1WBMM3cTio",
  "key3": "SRdptCEDVhySGgP4Zhy9ftz5bmSuciwA6CyG2396fa1xR3fxSegHA6qQ2G1ugngTwaWWDfxzcgmo8yd3T1j3hHf",
  "key4": "2Wecjjp6Nz3aoMM5nGy9dee83tAnYYxQqWwCd2DYSj5ygwa39EZniHfW2sRmzCZXUJCnTBGdu6ge7ZUcyT9ioSpu",
  "key5": "53fXZQJN3SveU25enLCgkNCWjgo1UjVwWK59yfWSzY8K4dgDbQyZzqzEp54dMsHKP1ww3ecwjRMg4SSELbshsq8u",
  "key6": "3DriRWmzj8jEiEfHaCbuEooDU8HmdxZivUGQdxCYeMxrbJSrSaMcYEeVw1gqjn95T7tJGxTZbsWoJLC23JZcpSZb",
  "key7": "3feVv6SRCk39FpFf4xHTHmnMLWo5Ln2fbpgKdmU6srw1GaPkvZwHyxrpDguwBHNo6z1mgmpudLZPjnHfYtgM2YaV",
  "key8": "3np4jfukpqtF6P8PDXEwjGBstkvwsr1MfGauendy631MrEizT49qj54gdzoWtBhoSBZUH244Dp5LvobQ823vQQ7c",
  "key9": "5N69ch2uUKsKXWLHyDjvvTcgGReCGnq8ngC85pWUFHY7w7pUTzDANqX8hQjZACqArmvhQSMyBoAfKgrKixB1oNsv",
  "key10": "pt3GeDyFWXVUv4UtCtt24CsEcGdVQxmkh683mq9jMdWctcFjQpiZooVSbZ5w14t9w1EJJuqXPqAF2xYo7F4aKLB",
  "key11": "3x2dX8e2WzdbTTLxpmUMvSmuxHquKTk22HLbH56Qz3UpksMDWiEHyx21k9xH1GSKWXeE8GUALy1HZwHFsqLxgXfo",
  "key12": "5XVtJjw82ZGVzXP94rpTHJzg9xro5dSda6e357Nr5AqupnkVaMqfxKNskh98zUtm3JsE1vS8jRVjYMxtKwxYvRAx",
  "key13": "EzqamGeeDLDVivo2CEngGMEATZ1h9yQ1RC7Wuoo9J5WWGE7ffYsEaKoHyax6Mtn34rpk5gQuuwQpWeMdMsoEHsW",
  "key14": "oKs2L2UtQMxyGA3mqD2sK1L9d3RuLRpdUU1aBGqwuHRrGyNHwjkBHAwRBwsFKgcQ6GfMyC6BeT8oH3S46jXnYW6",
  "key15": "38LuNXse33zTkNjndverRc9qiFLCAxh4PGjNn4AwHmbvvpZMUPEMnRpXH5pEngjVZQdkP3iwzBToLtdNFvtYkvVS",
  "key16": "3u8fDzjqEMdg9fruQPQnyxPR78srR5vG6upwpCvy6M2MxYorMjHFmmFjzhTdB54KtdhUqeGxLAKcRego9Y7Fbfd8",
  "key17": "4AhUdfJyu1EhsRnFaTdqGSDm6etYef9iWcmaws1eThRkW9Wg6oFj3pXugHygCFXBPGVtGEyESTANJgdax6p9phtW",
  "key18": "2hrys3PqJaBb3rdpq2arayLHsprwvXMfT6qouyGc91r2TJwg5kXAW1DeL46cdSZaQfrSbsPeATN9z7CH7Bi9KmoQ",
  "key19": "4wY2YspET5D5hCzRnDDJsDXE6Uc6qFD5a9BHixGqFUHLjci9t819cfwi2ruGQMhAY7Z1jMiKUizkfjG2EPBmzWBz",
  "key20": "2JdDXkHrKJERZuVp3wzAeSPBDubzyUMxV9EThQrV6HFJBkLZw9yuXjuJZqV4Es9P1Sk3g4PpzQp73nPewy4LM4GF",
  "key21": "3LHixFg5XPXfQJDTr5o75GrPYfREthvxuxzJXgJoqrnz2iVgMjNJmBMR2UxocDMTA9h2k6XVuLAL9du2AXdbRKS5",
  "key22": "ad8vBdFwsgJ8V8ZHe5W5rjgqEeywDdLALE2oQHFcjc2BQDhwMPSpf4qy62eJL62DhU735h3uKkdr8WJ3jkPz7p3",
  "key23": "5k4w2fEiH51d4pV8n7wsmP6uoRXaC1Lc53WjgTCe5Q1hGB4mE9SXNMxG7hcCpQi5R8DSywKtJTxteBZtVNJtjGgy",
  "key24": "5ATft8yNKxsQAgDqt8CBA2K6ws3vrTSje1CLhU6VHQNUfDED9bXZBfkHTawZaCtdBaeHgVE8Qu3qGMdqy8E5Kg9M",
  "key25": "3BHRnBTWRWCrPUFrYmnrE2vxosw7UjjFwFtvfqEuGu4UfGxncQox9sqLMGxB4itjBShhTdsTtt7no8N26ar3LjEf",
  "key26": "5r3XFEcdbnsDcgyr9gsS1iaosrQ2mQ7uxsdbYZNm8vhH4GCNjncYg3uStMCycDT7Ke7c58HAH4kx8ZagnWkQNG44",
  "key27": "qcMLtJTYSg1RpfbLZUp4nSFB47XuyCNeSgGB8UM8aDCwSNVmhQ8jT7nDRPfa5KA4M45q3ccmPuFCE68uVYSzb1E",
  "key28": "59cAAiGg1CEF5FcUokww8ovzbRM82UHizgVRm4HoKVuZNho9g2j36hPbQCgUb4c6kMHnHD3tsnkADy8T8kxpDT9m",
  "key29": "4Y1HuS9fYgMNK2L2FVdv2pS1XbCUsXUkVf6s42KENTbuod559PhLYyYaAY1Kah95qC2EFd5u9xLTEaTt9rNotpgf",
  "key30": "2UJSkCH6QehmSDBDeeY3TmD1ruapMaBAW4u7iKKfZaSuMAL7wwmjxcPeNiJSEma8LJU9a57t333nH4DoHvFsyJXv"
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
