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
    "4Gg6fj6YyL89iMNiUSrzEQmQ4MwxzjT5vPg1tBhwn8pymhNyuLzvHyrTRMcdxqCG8uu8Ac5AXiuDn1v7UHbG9p2d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XismAz4CdAgeRGa6wiUvfwPYzvgnxC6ULfdcWBur9vhM7UND9RNJvMjn3vjvNo6Af79utVYcqNYabubi9ZaEXXX",
  "key1": "VswChFJE5LgMLC5HiBkqGgXq525podjD5BEuj6CbYZk2jpA5sLCGquia1CEnpwQd7x6MnZ4xsrUAnPh9twdqdLu",
  "key2": "3aNDWUYHdrx2mf5BBX4ygqN8u1SbrzanuRA3q8bXxifymnQek6G7KVQBb2FrLfN92WhodxsypuH49RFZMrRnHSTa",
  "key3": "3eQiKPPDKbRkEm14MG6ADKxRfTr3F13iPySX9vpnw2iVdUWET2uUrgLczhYjtwVywpgZ53rj83jyhTaaoUpXrAbW",
  "key4": "5D63RbwZmq21wPZwHYLa7veHotJcdj8pMSPW7HV2CYkypRKTBN9ftHSdfVy2qjwFdFZKDz2YYEQL1ojk6q945ng",
  "key5": "3NFpY5CYCvtd7gSPgP5zojwaDdCYp8WCJnb2QWLzNFPcgrf4U53yHfWUcBKX9dj8BCLtzTg6DkAvmAPGJ4B1LoWF",
  "key6": "MCAsQkLhX56mFY89BUEsBaNm4DkjzzoEYsannwCFkutNwm3LPQvDJetVe8PtrQC3g3z4JdYba28mqtEwBHNwGyy",
  "key7": "36GYA2K29BSUBWvhAzxGmMguqPiabehcLcL1QfAU8B6qJ46ejUuVW2YNQSGecw4i2KbstVZcgyMuqjnGj8CFuoou",
  "key8": "3t67xqy1wNwVvpJRg37BEDYi8fyYmPSqMUKJPo3RXF7Vx8opwAWSKffzJncHFQTsSVWLCX4QVmP2mXBjTy2Pu2Pp",
  "key9": "2MRHMijdCEEL51o91k3PsWwMxTYHzLdf17ZmamKruVaP9h9sAMweqGi6rDX3DCVXV9wcb7ZaqAc6Xz7azBbNT9Km",
  "key10": "QmHV9znLeywXg9BvoXkNPozQxC8yy7vHaKKBXX8cfokWTr7sZ1mv1SPN456hQRW1qzJPdXxQuuav8RdU5kADhcZ",
  "key11": "5JavoU5ygnDCkAJqXjzAwSwdYE31AnuiaVnYx3ocyPZJrbj4XybKY3CZS5FzxF8s95tVk7ELf3decZ9euaCuq56t",
  "key12": "ALMV8DmS2XNPmX48AcXW3CVd3qUxqDToYpXqLoi6AUSEj6LSWmsyJCDeZb1dxMG3QUsijX5YaXFVDAhEjCraioA",
  "key13": "31uaRDiZzrg5ccYg5wmHF1bdz5GT8rcYMDnwt9A5aZWw7o1QS7C8QYVD4SoQBpqQJXP2efXNuD3fxAoaoGpNRoQd",
  "key14": "vRdZobJuREcVc9Fp9te2VWFhdnrXfZSeu3ssmBYeRS54qgLwcEedsLT8LbNyEgFWtRDKaRtLHjXaPtdv1HK59py",
  "key15": "2FUZYoGKPPrwmSNMaRgcD6VJ7aTXQNwZY4bqEdUUihzxtsku2FtPLu5wEPtJBFWHHgHhdryNjnc6iGcHvdUcZtoB",
  "key16": "4fhc89CgpnTU3boyHveBtG4QCsQc2UVMK49NUTdSQxQiUZrZqWPvQ3wkuPk9HaoHj66Lrp9whfxq8kEGLjk2pAte",
  "key17": "2q5ZzNuQiRYVhxVWLi1UdDELPWdUEaB9rqRGRsNCcE8Z9rUXYAsjM92t9jHWW5vuxMuHEL6cA8wBgAjFz4X89ZSY",
  "key18": "3tp6GoCSNGY8wNiGjZKVedBe4Q6K1nBYouGBPxArkCsQAsfH8KC3FhVRBfqv3DC3Fv168kz3Tk6zSwj2AuPAkTY6",
  "key19": "5SvScvUGjwji9xgY2E4SSCDzZ7vC8kh3XLxATky8ShVHNGUqLsDdkX4irwe7eJWRy5jspionnASPeW6mUUeKzUc7",
  "key20": "4qA9xAEeW2ttPVUCeRD52cyWk6ujWoXFDLqzVeWAzbPZEtif8146U7ZuHRc5Wvg7Um2BZDkTBHfE67534Q8obMsb",
  "key21": "3THepa1TN4g2jQkefmwX8o3ELAkz16ZoPtVZ7txKEjfE6kHYB2hANh7Vf1Pho2CWTNfKfpTR3dtLdXjNirfskyws",
  "key22": "5kJcS9P9sTbo2CFQYHQQqT2h7VZUFK6vN19FVE2DzZSf2PNwVNgrjCZ3cFhS9U3YWi9bNjiV8NHNTSfryZ9WHNph",
  "key23": "ZaDcCKVSHMXQyQ7EPhdfjCJDNtRTk4as9KXdxcSJ4xQq481fz1ACmeRZBdeSiYoBroDGTeC1AXurjVzwsxnqkiz",
  "key24": "8tGYXWcZKRb5yrBQnxPKDGou8fWDhp7yx9aP5prtXDVXMkD1nk8xHWGYRR6n4JAzrYFxq1f4CFWyLe5uTUGbjam",
  "key25": "4xw7BrBiaC6ubwCfL2Jne9oE3C7ihcsBSAt4e9tnFwFiuVDKfmU22SrtcXGyn7s5oWdHZ1QsWHCGdzisqEn5BszU",
  "key26": "4gpYmCbdGU9Gio6KmXzcPgVoP5oqazBrbgod2hs9XRsSG2ukyjc5zPY79pAghoiY2owqvxLUqmELfmfXJpcpjogE",
  "key27": "3r4hy236zybdbrLNTvPpj36VnS2s36VkY9gPz7zohDC3HzZiouxndcN5GezqW3nsLpVuFtMApQdL8WbvfyW6R95n",
  "key28": "3k38qZaF6MEAxpUC512DmA6CFne4LBDXoa8YqZvfVMkjMRVCjT3jFSkFJREDUs6MuL28AxFTQhki7NPRFvAAWeXb",
  "key29": "4mvsAwASCGRywSByRaYc1MLqbmfktpP3WBsBQX49AnaxCrVTcFAf7iPfzeVfvmn16XwXtYsQtVqv33rAiaZHwhn9",
  "key30": "3Ccia52xXSeGQu9tHPYmYAGVutjF1pqLvoGS9RJ5do36ApKqkQqqPgN6fjQEvncXT7qsxfguwSzsvxpUrXSn8gUw",
  "key31": "5n9N5zMtn9oRGq9rAR7BPdqM5R8K8snm2dq4bthaykD8doc7f2zbf7kW2DKptkvwnurC9Xc8ZRo8h7ubh87fmZQW",
  "key32": "4RcGEnQEwBHf5uufXpywCddtuQZAEdXvT5e7xvLpmeX4WgGvtXLg4H3Azwer4Yfc1WNmVFLBZcF51HeXDLuAjuJW",
  "key33": "2uiTiodoMZguU7ZG7i9cQBhcLUe1qqWEGX9Mssj7gTWcR6oYmF5mja4QztvX4Yx5Tb3vZMu4m67aCzUKEDLGNwRi",
  "key34": "245YhysXgyz1JaiAREGbDkBVYv12SwDBykaHtuiisasjzp7hoNcBkvXab9dedfJqQEEuWHQuLPM4n9zgyK9radh2",
  "key35": "5WuzqMYpnD6TCjVEFMU6UuznUf5gZqoLELRvwKwfmYBhkcYmSCEtgumJMPRBBPikijnjBQZUYpMqTesho1nSfTSy",
  "key36": "EYLuBU3EUo7i4bHxnVFm6T8XZjov2HCfgrT9WuE1M1YEMFeU2nEXGVhiu7CuDE8ju7ayE8AK7rLKfPs4x6ULDFX",
  "key37": "waXybHVm9knJmiHE6ZXjCK5Lvoiw8hPcMa3zHvjQCJFWYC3nADq9P6bmjpa4Czi7YwZN7ayeNpi6guyT529K11S",
  "key38": "3sKwJ4h5ctaz5cu61bbYfqc6GEFCQBhd6e3mmacd1Nw6NbfCex4GD4Pysuv6KmyKV14R8XWXfxYTkgLtE17MQH8q",
  "key39": "29DqXDT9abHeC2Hsqt45MVHP9pNA4NHx8hLf1biup5JkWSVqVAt8VxW4G8yqs9Nt73M9nnoTHJA8Stc6kiY8JQBY",
  "key40": "2vep1sTMRcJV54yvZQSCy5cokAoWSA48L9mNiEikYNmMxzNjTmK9vzKa5vmL4THvCR2BypL2ArWpnp7THAE4WBnm",
  "key41": "5fhwKaNN6F2gC9BAkVNB3he9zBdGLLmPj11aYgwPnH7Vh64EF2qJqJR4pF98tKoN4rk9pV6y47BXPvB7ZxtdDPTT",
  "key42": "5rhK9js8StQZ7e4AS7YzpYYyzScupZDALzAnuUvyJijyEPT2Vjrza4LzFKuyVMejce4M8GdiG5Gob7qXD5yNb5Uf",
  "key43": "4XkAhYHFx7UB7BCxrn5ikoeWZvQu8DU83dsqqbhDf28gQYkJQV5wtAtNZodUd6VoB84jx7RgxAm1bHbDf9gPdLTL"
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
