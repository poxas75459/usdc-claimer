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
    "2j8nrze3rs3ebXGFRbCWfotibLv2o928GVw6NgEC1C53zjoCCRfayPdkF6SYaPZGyS2gHRdUyeyv5eMT9yAEKPw6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jGs8gotM2w4DFBcm9e3hCX3DxvEybbZkxGZD7pWWLDbd6NyoSXc8TVmpw3pGWZqJB4u7wFPo2VTXxb5W2spMdAv",
  "key1": "ZA4w8VCjrFddD3RELYc4324RVd6xLuBA7uUmNTKq21oyZbnx3ERby8raAVA4QdcSrGoqdQ9vAdkC71oN8YEM7vF",
  "key2": "2U6rKuVjNJ2AmJwJ1wcxfNr4dTFq4dgrgPtwmFULaZNbu8sf5ZC5Z1x76S3g2jyBR7ntsxTx9pZGmxckaMGoEstS",
  "key3": "4xMg2o18w3T4hVToyvioFfZgZmjx8hRr7XaR8T6FsLf6XqV7jC6cY6km3vuTEWtANdPxoomUEw9TVcgJVBcaSV9z",
  "key4": "35NNuRKuzXCZS4CqGnxDd2Ky1QagPoBVSWKNA3qPKDXwzqga8TcULHG61cW8ZAU9sUzYc36R249FuT63a4GE3H6g",
  "key5": "5YkxX1c4XmbJyhAKHheqzTEZoKJ2WZfQuWifkpopZhntkMNk9JnVMqBvGSKEKaWiXsp3MXaPRoAEjECN6yJi3Epg",
  "key6": "oedTqvMeG9r5SnrZ2GXs32uS5RYYywqYnYjkDEuoyE1SvUv5gqxGEQU5sc65hmVcuDQqLJzJw4jQNmSftKiqFe9",
  "key7": "2a8aYHZpZd1y3JMPquuvU5zL9UAhyFKqBhjPixBFir3btA1K4RsyTxXxsH8vqje6rx4RxbbZDpUwpHVe7V3P27vy",
  "key8": "5k5KjUTg1iHBnfGLtjTJQDqfdhf2cRAGLZZ2Pozn1kfsXF5ZadZ4BukY5C32B92V2ajN1FgxaKXDGzcQeAovtqFS",
  "key9": "4UL9Sy7TNUZAXRny3F8r8Gee2KW5c7B6AKjb4mpCvTEqkRiyu26cXyNpSWoCQXd34S3M5AThfkQ3rC4oBCBiQHWG",
  "key10": "4dysVwKVomTRy1raCiYmWkZ6zHpPEBkeCNxAGwWFyDr1Vn1xCLGR3HgpqkG9Tg2uat3rj8sHyTC84nB83772dHeZ",
  "key11": "5LR5r1aLnvFe1tjSAkB9J57tjaZtaD72MffhobYXtmUW5LWqzrdhZJVyE11m2myosEo9dNGejt1p1n6CacnfQKaA",
  "key12": "GWLkrQmXooPK4f7tzwrMbCjYznvvAJcVkqa4nz92oGf8E2iXcfEY9yWznChbkYBCJ9y6eoDMkb2LuXkjn75wNwd",
  "key13": "33YUMw1vXbQUgrMLuYcRYqLwLpk2AjuKW6HHAxJfxoENRnawtBnxj66497WFQxiVFGecX9UzJtgKPGaJKk758sd7",
  "key14": "Q4ihhrCYZPfhURDodZPoofXmDXowoutrKP1JFkJXqdZvKZwfRD2uH1mVtRGA63iEYqYDn44tYBgg2kXd76QBf9w",
  "key15": "5RNftqKRH8iFpQ7AjkSKMiMHaFtN62BmA9YdgHk6tagChJKFRmUVUCF6toFtY5iq1bPatWTXMSLwej3B2cb1RAKP",
  "key16": "53EMdhFC7poBqbSYJp9Nea3DYF6QyQnFCf72btBomN5qiPuca2sHGmbNQrEACfSuaWBz3QvdziCUcqCQkkxj37eR",
  "key17": "cr7hAVf6hhihHs16Kd1qGZ3Kusg3r6DwUqdSSPeV36wn4nv77N4J5gsYuFPm3o3Edp5zGUYjRNhp8qAP9XQMZjG",
  "key18": "3DvdoGdY2SNwobUUHPaXmynZdP7BPF8HZHZUEcU6zAzAWMRNZzwswpq81yTJiEWvocr6EXBaMbufxeVDcK7R9MgS",
  "key19": "5i1cyzEDiKfDXxXv45JtHz4ojviPtTqbfQTtsySrBMz6ySAqPbcpj9eRGHSK1GSgZzGsh4J2HmCvwx9peimEHNSm",
  "key20": "4MBKZTLTSFKjN7vCymNoM91SHq32fVsEi5L7eBwHMjmKkT6smr7sAdzhbwYcuwQq9Kw7mekUzY5QQQmQnUCjqu1N",
  "key21": "52UwUnSrDMBh2MrcGoXNiZCjuSB96STBSYiopdVXNdvEaBG3fMFTgcuM1iNJzxBsiZdTzuQjnFCzr2ytvQaLU5d5",
  "key22": "2k9U4P5Qn35diFHV94JUerGpsgNLQYsS5kLQBNMV6dvUXGRRawV7vBzrkro4eLRz8sW2E8DndaYb19DAME9UhsPg",
  "key23": "5Lq1TTDPMThAyg7jfbrDcMjG8FRBJ25hau6RcWDTkT75EgqGjX5rv551wfEkDfvm4zp6iwAGWCRT4ucRh13teBjh",
  "key24": "x2yB529JqBC3mcJA4QKYp4z6sgXMaKCCz2VvtJjoa96w4bVC6y3LXcH43hLfVep5amAFR2oPJGBEjLhZCk6RpBy",
  "key25": "2zuijKg58JY5HsiPNs7Ew8422ne8pP7fCdoAnZytGCUv5sLw9aYGRBu9eZGbf7xMMy6rtgSWpw8Mmhd6Yfk8PV3q",
  "key26": "h1PUyHMbSjWzj61Cyu6u7swRN5PkToKfXUMfegNSYpgAUtYQST4K6RtHVmwH6KcgLSkkuupRuUPY5vVc8h176in",
  "key27": "4fcv21WbqcqqwFbP2ejP7jWn2oBb6Zg41tqirf4jZDio7JR1ZEmyfLKXbqZVdMbL2vktimWxGL7f75ZEwupjGKN7",
  "key28": "3YWgtXGttuTGo3qCrpCHjF4VWa8PVxmNqEUrreCo8cmDXvWFzy2QzMFUq6Kzg8C9FHJ7uCkMZxrXmjHBtzKxrfTj",
  "key29": "2TMTyzvCixmCkkqEkJFjBF5mnjhUpzjznesLwqDzucywfLN6jFa3YVHMvaMfquWxZcv7f6YNjbQDBtStgTAANGdE",
  "key30": "j7EPVBkVtNPfQneKHjctvWEAZNFB3c2zZAXV6XY23vgcg8mdZPSdG4cchcyWgetJ5yn2n3xBnQPBzeTXCUSfhRb",
  "key31": "5wJjCsiCyBFF54ihnWSt8y8m7hiXo3x416iBK5nFh6LeWtKKKxAdQzSbRiVEbtiHQKzc7Qyz79AR22KYPUD6pmmX",
  "key32": "v3UjQLoepL6Et5o3K2bDwTAUujBBtkM5gVfJLbxzX4XjF8S3J5bCiihhksfQNhMJRudn65KShqNMuAFpiJJtqwz",
  "key33": "5ege8wpquCcKxzxagLgoRSiDdV8YtYxBLLrXjWpjfebxET73gzT3W3iP7731GbSoCqVesU3aMGEMcxnhgD8FKqt4",
  "key34": "2kpHpUbXHnN8kJRKyMtd4sv7pxZVqwymdpcFvKr4Lg6buha2D362nR12Z6qR1iPJ2moLZJHUpafqUd6KNETk9XtP",
  "key35": "5ZWRMbsGq1wKPJitUHAeyf5KUpoqWNdQmtC3zxtHK5YTFw8RyHG2PVsAVWtc5ossJAAGoBK4E6U8jCJoqnaMKq64",
  "key36": "3RiRvM1VZJ4hs1RUwvN3AMKGZx1iGBj4T6nHHH6uN5jCpQc8rHWZ6DK9F8UPNpZkZaCdxe41Dg9bY3c8Hic8Kmtg",
  "key37": "5qWNaPHewGit9Ts5ccMszyk7LZAv3svfdMTLNRdP2UcEN6keQv4uLaGQiXQLvSFH1mNCgWvJNMAB77136f8b3sNK",
  "key38": "2AXoi4kTMgBsW3GrHFfs5F6YPmbn2C7PjvbKHWcENUTq3ibyEC5kG4cLEUqF4k9BEc9QjLAW8aMpuoNsKs8FjNfc"
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
