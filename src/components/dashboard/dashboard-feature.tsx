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
    "3B8EErzCTTpES5tDfAkfGQKa5DH6grc4H9L5tZDQTNoJQPhtaxGYcH7L7yRCanpr5MaVr5bmgpJMBUM6Ps35GLds"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MnFRweP8itnMqhm4fNPDKsCrfGm22y7TCZU24bB2ggV6aNLFfHKKhseGrJpGNFtcGsV5r1xcaeDsqonHeb3iA98",
  "key1": "3xvxpKSZTaYVSbLWJudnRAVNaBRBa5EkLcryUb8g58UKaCvGPC5EQZMdqgPcFbwCgMgY2TaFYdENMSsGNFJ9PwXf",
  "key2": "2EZgSDgS49WGEbAjHEAxvyRux3UUfrd3wvG5yvNqTysXHDd3d5zn3256Q3f4o8hZxukwmnJGqiz21wFoPx7eL3TK",
  "key3": "49g7KcxP7cskmiRkJ5PTrk4a7kjZSAcM5EJdBx9FD2mFYypzaKotPqgsekaM9AzKZYrVb2SLLR6BHmN7jY7wXwtA",
  "key4": "3kzyZc6nufyHVH6L11KxqFQsE9Bc6dwZmUcEyqifzZs8RChpDRGHMz5njhqkSfNXJMMn5N93i3FuKyU2hrHy42Lo",
  "key5": "wB8M2zEustH6tx8EVufPgabWxRqUg1gVjZywZP7b6koJVCJ82pDhotcmNAAMto3ut9jC6uppTRNPjBiiFGbc7e3",
  "key6": "2QinpdvJL3NYCQjWFWY7pJ8Kh5DVPMj44ggs3PheXXyQiqwfhJtn6pKW1o4H2npDgS3kqf9oWTSzU4v26fsma9BC",
  "key7": "3iHLy51Yu4f7E4Nmx9F4iwECRubCxXC7jp2VKQcjQp1YRzAxATgCgsug2BaB6UtDK8fiMPzSffCe8VTNpXgCGzNK",
  "key8": "4xGZVuVgsmXmw7WNMQQUhW2EieTtbYMhEwTGvjCcnActWocVz4hZk4UKX3BM4qKVy2aGk4onsLXLmtiKXFyQ9FNS",
  "key9": "2GW8y4urRcr8hqkVX8A9BLnRTcBvYkY4EZyPFJ9VFRUvH2SZae7z3FrQaccUkDskfdzb3BPvTGtaqPDE9DuqxD6o",
  "key10": "2sLdCPNPvLDH8Abazy5jvEijyFZpMpUP3352wvxAmKjxB4CvfZFNtz1cfkHnN1tVL7KUyBUz6XvBaGyFeoDFDwym",
  "key11": "2Qcy3LvgHTqap7yy5gnsgS5SnbsKZo54Th3AqsQmp3dDu2WK6qSD3JSKAf34863QDkNWmQ16eMbeZyScdkNpnR6r",
  "key12": "2wVKsnKyQRyii6v1tkKyE2KtXJY6QZqNqb5LY769JkAkmZ5sNAEdKY93nmeoE34hmw4SoTnTcPA9ki7q1uD295Bo",
  "key13": "359sdnC1HpfAjQg1qM9hb2gdxDtCjeJDu2QVm6A9A3x8zqhqrvwgkxzjDGBbAzNnLL2svJu27mjzV31cETem7mEz",
  "key14": "3uNHMeAW98GWgB5aTLrqb1oihH2C4DbuauZ9zDrofC5EQYfb5hEbygw3WxiDZZXRGNvTNHGtAsghtkjEHLQcD6VX",
  "key15": "3c2F2ccsf9rXawg7k3VHQYcP4Ms5MhGkNVsuRn2qQwFiTSEaLM6iWCxwf6D79pGRcvwkePZCtRpuaBbNUFJK53h4",
  "key16": "tPGkau1BS5Pngiksh39GU66TQ1JoLUZoHZ17Btx6E5yhd4nR6pcw93idrGkyeQb5H6DkVVxaBmJ2CY3GZgoQGdA",
  "key17": "oKTJvx6ecP4pLEjUPLuwgTz57WHeTwU3Fb5XtHz9RX72q5wX9f2dHLDA7oTcb73giSPMgRg16HMuDoYcBbi12cu",
  "key18": "QNgGuNafX4uoknkb2xkGFbGopW1XHDkUky4Wp3KKt6evAoTyYUmkWroQa7ZhEYUkLy6kuRSiLNz2AvxbULZyoqs",
  "key19": "4movWkvWSFwDCBNQ7Lq9V7o6kF4xZ2E71rRBkgLzFqEeqozqTk1t4QUf6iQRdE4PzrdnEcaFwYHFTG4qooYovgsL",
  "key20": "5LyaNNqDo2CcLrYJ98hNEKqRkM2EZCN7fYLqcwznqJHvb4mDB9uWXaoyxPgg8MCyoYEK5PbMxVLic5nsuGAsVc2k",
  "key21": "ZZnox5rdi1Tiah2z9TJyGg1Aic2mjbmC72nXiEubMmVeWodwmu3qgNPWypGoaeDDisNSvX6McbCm1vVH6zCPKje",
  "key22": "5ysMJioY54gR4xdvnY2oTFajLrDUnccZbFXkzuU7M26e4ncztWvpZxhH3vE5gvTozMG1WTNitq9HiPvEC4YvgZvq",
  "key23": "NKFvfdHwm91enwj5sDeuHAvCTUDFgXfGASt3UCa6FWXkpTXZSkMmswSMTXoWxgJYuWomkFbJtQFeUnSe98YRaN8",
  "key24": "4YcYnQnjwq7Lb5PWv3kX5d8htCcp8qmXbHnwLTCu93riaFmiJAFiWxLta75VKJVEcKYw5qFi71FdDRKcDUEKpa6X",
  "key25": "iTzBZifwszGaw8smWB57tsDavq47RSAz9eaGFGWTUp3436Y3FNSkc9tqaSy5Rtfgp24yvRoHRQvrfGTTdGpSwas",
  "key26": "2etcbUp2CkZUhUShaiSkXpDTmyT8GkuGVxVCjJjGj3p9aLuKrPiKrxmRWmDboJ1vEF3JbDwSGXT8mGdsRuza3xGy",
  "key27": "2ys72j6uBR75zSRguXzohPdsmWZXcSfW5VcH1nernkfwS1jdk8x3ntcatXT5UhVY6bXNnX3JfHcS7UoUdnrrwEVJ",
  "key28": "4fv3PUKd9QdQ8afmaLWBvW6xVwxwZgijb4F3A3asGSPepP8NsNNcYwV5VbTp4Mn9JPwGa79yZZqSEeAHPcbwkmJR",
  "key29": "4Yn6pmSTqp6wZ3ZPtEYCaZnPSbXPto23GC2rkADpF2pSiwbMRhjqVwxNnZgKqSm72WMxbbfLGbpe5KqLBtMmGYhN",
  "key30": "4PNX5FRYU5gkRuV6XEQpKVKqoJy48NnNMMgWb21BJQvn7DeVrB317if8un5xAVbYW5N9fuJCoVC3RQPv2unv5hXe",
  "key31": "2gMpSK7gdih41HHJ3NjNZi7cJknb9LqB2fbG6xq8L25MwvpbNmwVJfnwS5Ct4sxcdBkxtV5GeafrbPBrdYuQ4eae",
  "key32": "4znGiG7w1YDm9vdwzT7oWW4fKt3o63sJk6P7HLP6BN8gDYSiDZKz8Xj11rYBCaw77Yzq5bFqogfzZuFjHDBFrJVr",
  "key33": "63Bs2JSpqT1EyBhxS2qnnBCt2RXTBZfeDySpMoswt1HiGUnEqz5RKnovzjNDk7y5TmH3cHcucjA8GT4iG43KhQEg",
  "key34": "5FVB9YYbhsc8JLtpuKFHtaujgVVnoMwRzBtvKfDSQbT4XqzyV31ChrXG2rz3RTmRCEzb1MA83jjXHqSQ7Lbbx8NM"
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
