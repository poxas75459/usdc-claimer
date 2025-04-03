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
    "3NKJ6Wbkqf1JDJRH5NZuGd9rPb7MiMYrF8xhKvimwYKzVmJkGhXY4Ts8ZT1nRTgfpEXKr9QSqoeebQikwU1fBp9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ghpsjQX7QA3rCJD1YaFEzYbiTht64hcgHMWeNNAj6iAxcnuEoMMxk18Kpc2kBKxC5ywwLCdE1msaCuhLhsdTycV",
  "key1": "4ZS6xE6vDFX3pmvRzJBVRM9mLAe7ueQewjreKjAyUdhNhkjrvMUhnqSqTXYyowkP3Lna6E5vXexxKWXoKWFbwFtd",
  "key2": "2g3KJLBvQgj8Y3xq7KFZxpeiQJh4B73eLGkwWtyUPUAXPQGgf4ZgDF8kSVwY9PJUrutzQpAvuiQ8smZYbHwNwqNb",
  "key3": "26vAkMyT8rrUTEmRAoWKsw9P1WfCkwj638am477SFU8cSFsk1cjaiWGnjDGciGa5ymyfxYL1b6KCYH9gXozdEJDx",
  "key4": "5y9aAvyN16e5AwysZzog3UcqiRnB3A1aYtYz4Ub1asWyHNxvyexMDDtgeguhAvzrnavbU4kszgE3RFhjaSTNKZnR",
  "key5": "4m24UVupmXjC9uU3pKqVJcVQ7arUAwLCDx7SfWeyjmkfQcoHc4yUKCTKMH3N1utUARFJDys44HxwKQdE14o4nesi",
  "key6": "8WPMMPDx6by3PsMWSbsdWTpjKyKwYZB71v2yzwCNKu2osoKwfmJMVfQfWtAGtu4GL9LivALyxq2WQmbV5FxXqnw",
  "key7": "s9HQfGi7rr6BBD89G2rxP1BSMEbAQaz23joBMJMZVFkLrS7qgT2vozUeP6wdh3Q8gGTESbms5pbKLyjCQ6AspWT",
  "key8": "2BR25PX4f4eKvK4PVYAZcL4AiwiKzTCTQLMu4bUDi7rudATNCrn5Pyfp18bd6uCkfebvougqS4StdAu2Qy7k8pBj",
  "key9": "sBmd6iNjizmPrWcnWSK1hLWhbaMy2Twt5wDRHUwXZNWegqYDRGuumwixtKMXBoHjVmaqYd6LkBQb4Hru9EeRDCi",
  "key10": "2z4fUCRTKeBe7MXuNgxyH2zuPDvq18YuzNgivdYwHSPvSgZmKi2swdsMkB8qn9eMU849x5q8v2judAMwK7Ngjaqi",
  "key11": "39wsio7pi7QQNM6Hczfx1fZATzsvWaLSuRcExMTyUoKHatJ5gryUx61EP1e4ih5stHJqT7U9ubWtdw32r5Rdjw6v",
  "key12": "3kpNdssfhH8LhXaBzFo4VKz4zP7rJYYZx3pU9t4jHvsLYTuzt4M2LDKq3HDDVmuF46CmGme9nLdkV4bp1htEhyB3",
  "key13": "nN3XVvLmAa2A7R2LPs2P6ocx4SiG89dNgE27iEKd5wjoXjBSz7vyB3FPj7T8tEe1DqU94utKgtrPPPL7rgcyiSc",
  "key14": "3G8ZyupQsTQHCEgkGE2B7cSiPPvhw54AqQ4cayiu7oDL799hRPHGhnPdcrMgJWWNsneGHeSvEFhZgs6J3Xsws8iw",
  "key15": "DbyYNwq6Gsa9kAZ13bSyF77Po4MjQRfguE6zTWCABZM6kg8N6CwmH6rW1eo1tW1Wxi6aJzDEB45Yyk2wk5bbaMz",
  "key16": "STqhazx9ytUU2H34WmztgczVDtrDqHJsreMTAN3sz8eewfWBNQeBvaxAbh2zm8Rw45pZBp7fAtuFNvEYMzVnfPp",
  "key17": "iq8BySa6acoM9Sc6QsQjXggGs8ctG8aEupcksimWY1HvoMgx9aKNifq3ZPH45eXYvc2ovNfSDF218Hwu6D4cAwm",
  "key18": "4emaf2xvbQUw9CSGNRV3uRYpuz1pMURasNGzkTYeK9tgXxfMaREVoNSpwv1cRW7dSaEu8bs4dSZ3UfehQ1vQxzEU",
  "key19": "25uD3VRnY1eiLx13iHDp6NLumQah7XMTQtZNep6f6uFvM923EtSsztwdi1wTVLr5EUcz8o8Vv528GJkRUVAJVSHs",
  "key20": "5MaRzaUC4PaHa3TyvVuo2XHTB7Dypi9tV9N3gdFtbr69UaKa5CbyNMGDFTBahfyesiZTXpURqLYR8VxgWiPEhyMh",
  "key21": "4YohDWkq4G1i9h2HCqcgtTj9tq9UhyRY26NUQgLk5n2ucGfiEKHxZj4rwr128zBq7wpSMqFvAEHSkxvDxe6zvqkV",
  "key22": "5t8yx5cbpQsRL7Ndn249t51GYBWKYVyfBFGQoLzxo73fcif3qtVdKk921xJBNGLjjAnMuJdHtwxFSbKjvcorJ1Wr",
  "key23": "4P4hH79ydkj428bhbvfSrcBtkp74Bn88qq82CZVKgn5EgFgRQ9aYY7ZHU4MKxDzCiK4ztxKLMNQFa2wNerRZ7gRH",
  "key24": "47AuaofaUPf5YtexJZ3zYTM9VyRRcwwhBaPMwvrET9V7xJ7J9FtovykSEh2kfrAgYjdHkLjP9D74PcEvYmkvnbxx",
  "key25": "3e4bC9R1AhCsL82PkkZyUikmAwD9a1Eeds8RWoEiN7gebuEKNJAojmeBQVAyLBBJw641SDdnJSot8oP5F9xjzXp",
  "key26": "3xbHJ8t5Kuf9u2HHMMnBAC28uGv64kQkYj8n5DekAwoMWQiQ3WBd5yxAbqLphmtmCYMVq1VRJRajLyWGsCwNqopc",
  "key27": "2Ey3QTsYWz3vE37AayEknQgdApi4MQefSDJjskT7uwjXHjLwcJgXToavH41mZYoXqTPeW2D6Fho77JU24XRqpesu"
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
