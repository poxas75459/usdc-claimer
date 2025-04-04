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
    "2jJaMZUhZqGVAHNUSA2ZpsJcaHxd1vSyBYFNbD73xbeJGP1jDAakGoyDKa3vRDeQk1xJ36ac49pVWuzmwneLzRaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KvEqk9L7TGKXpbcdTZjujJ5NFDdJQ3hTCUce7sgpX3wytWwTz7i8XgAZ18nn8fNvEfMH6JREsXTfkY3AAAxM1Yu",
  "key1": "3QacA131Grmuw8HjguVCmkpHcTyeLqmPQmuHeMx1yvwLeWRtc1iVgHoQaAg34uaVisNbhoUny4UScvHDKjbVewnX",
  "key2": "39q7vMSqkZ33riV5DLVWFxJwBwj6NrLrEu1ndSuTsYVYQcZ7XFZCvorqWjxTTiYYK8eGCyHmDuuvXQHQc9fPszEF",
  "key3": "28B6XJ2eMomZYasYx4RLBZwCAQnAQMgpiq8N6dBawvCaeFDC8nmCHrS9r31b1fvzjD2oZgwYnjskwmuGoRaPFfPm",
  "key4": "4aAamNoBRL25ivGNuSiVQCND3UF8x572YNTTxxoMQXYgwibigHudWUb6oHEjkTNcZ9jrp2cVC8Tv6np2XewymgQy",
  "key5": "4a1KmMdSUztPULPyNFtbbJ8UDnroZxHyFe6sfwvjd6WER8UhHwGXFqnbjy85Gz4UGEgBZhe4ahuq6LnFhjC31wbY",
  "key6": "5QfADXmktsy6izAiLipWApPXLLifkH3LJ6ta7hRBXN8kiFiEWaQySeEy5Dc4HdHqyCGPsTtdch4PWijyRdbpjj9H",
  "key7": "2oroidmdieLJPKomfN1kbHFceeQtrDAT35SSS9YNWnBncosooYC4y9VyPugrBzy6DTkxBnbKXhkZb7Csh8CrbuaE",
  "key8": "2K66i5W1FGYEuhAtpYghckS89HmXE2onKK6TKJwKahUN5KhEsUhmFYXoj7YhsY8UqsrKuNSYozD5Ly3Wh5fo3BhN",
  "key9": "2H5DRnD6u3KECm6Np4VPmeytpQ9AbL7qnAhhZRZCCXKgRz63V3iTR9UD95SfUbqcJcZqnBwojRkZuZHihkdHq6Cr",
  "key10": "2rsa9KniyVkZZFTTfaU2C1agGe4f41bMUnHpU88CTDRUWsUNaozMoZJdA8bgLYVaifT11q3itdB3F255oXwtwU4T",
  "key11": "2CZ67hR48PQXDoWVVjdfyxDXQMYL9gMa7uVYr2DxYQKbMQ1w5qJqp4NN7j4BqyZQNiPjzc4CpVFLQiiNQfvefMuA",
  "key12": "nfpnvGqPy3BkZptZgc753WFUJ8PMPuy1gsv1TbV7ZypTJh3mN6aYfkJqtWwiznUJ67eQ3V3k6GcmFmNsS3X5wqX",
  "key13": "sKKPdfU2zDZQv2udMLCCuhY1Hqtm3BtPNr5DSHQhVHwkokUd4dKkUkZU15HaUnUP1hNefQPBzfNBj4ypTV2mpB5",
  "key14": "Dt1YPdzkyiPTC9CEjufBP5XL7Cu4uJv1XYUUQHzKD6YmkxBRGdTZqmrfpMsDN4a8PNciJaRvzymgJ9cfzXDLbir",
  "key15": "5sPe5XVYmkjxF9E8tAvGPnuiDBQuQDoCGdnLQBfYDV4bBCcGbiJJzRmNscamqR7kzMNJzqVE1cStu7b9iJGYWrSD",
  "key16": "3wYfzNkXnwJwU46py8JMUwivnEXXFFdxuRsFRsEsYJ4D3WhBwfFDvyQoc6JNQDJfW7op5BTkKk4pB2Mkzp9vooYQ",
  "key17": "2na49asV8AXZn8dsjcii9nfxMcFZHxkKLSqJV2qbZRXFBziPENSNRV9EitQRceVCJ2Jfwdp4yKnGvN3i3sH9gvau",
  "key18": "5xS9wmTeLCuuS3CUHhuQ2b8yX4mpobotnwwvfip1SPhSfRQ1rkcSN6harxzB1NfWZoP8ZmK4zhhRndMqvCddd3oQ",
  "key19": "21fvtPeBr9y3YyPGLKhky3LimZUSKjsrf6yxGLMNA6MyN7bY7Ey7ZKH6z8W14rA73jyJMMu8QPpi2QLM5jY9NCrG",
  "key20": "3oNwx99ERJQhhQrbpR284mgaotuW8LxpeNLx4TXz36Sfk3E71D2tAnmKWhYzPoxZaMeXJik2DVaJLT5C9J9u7eds",
  "key21": "KVt6R4q9uS5qZXaLs1MDKmSEaWiivvaq5Ky9vHkve9nbUVUSkSiKkciwfen1enGe1RGW5ej1BRkyHroCN6W7dnP",
  "key22": "3zuYAEaDPrgH4EAsDEYUcvhxdu6Tm8Ju4DFZXWc4QJNZDLcjGfyPaeScDi512FA16pjZwnXWd8dCTTBJQnNxqFBU",
  "key23": "nwotEQhwNSD4DFSVUPBFZiVsQEFsSF9zBKFJPLLfXH2wTtxxXYzwUerveUHtdGHddkyGXHuSPj8oWyrxw5QexPA",
  "key24": "3UgpsyouUALyi1tXxbeGJLCCGtQZUqNgEnq3eNXpRpbJAMKngdCfvV3GdHtk7e2fp6FeAWFPx7cUqwQvgFY3jCrm",
  "key25": "3xjbbystpNDqz1NTqmAY3qQs63DKwYk8rxmEG517UCZ1YVtaB49mEsrEAprSi8adbLhqDkN7AstxBmXMNMmeBCAV",
  "key26": "64EdSHNHXo74qn1eEK2mzf29X7a24NG5UL9tdcxuuaWUdtmeGekFGb8AWcsDADNwkhEyQPRT2QLqK1rjaAzkysb2",
  "key27": "2uDNa36kT7HfWFz7fJxyEYAV8Z1WggGMv6F8oU9KnDWeTHdzaMsXLdCNXLa5tg9MhEZGG7f9dz8h5xBXki97cgDk",
  "key28": "5spNuryTv11dgLXnWZUHuwTp3pTJJUtKjkwQeavCKyBTVHKYVB3sbd5ofR6U3MgYaZycNfeNbwVLnW47LsYnGB8k",
  "key29": "2C2t4KbQYXVwyiUfC2cCEMpUUCaqhdjCzRtgJdmFAc2iPLCEcsMUZFhoqW3R8cGVZ62nLLKThfcWgx6SJ66Lb6pi",
  "key30": "4aEwR3L9tHCVPf6m5X55eRkiMS7GP2nNUCHhZ32zPEpUNZeo62DRs16NNYAcAG4Yeg8BRTHxXxFg56mcmTKNuVmj",
  "key31": "48gBU3Rzj36XpRphXCw7NsPJU4uFy8PLiCNHyeUHffyVicgfKzu4sinSrT5SMrabvg3sdapEQ5H7JAYu7Wqvf7Fz",
  "key32": "41A16QEfpTfy7GLjvaLFVeScWQweKWiegF3uVRP6CYk7qSp9ZKkkrb2X3tyznDJJr88ygp7kZ7r3VvfDrseaMMmp",
  "key33": "2BGHw1Bu26Maz5GBxdTbqGLYLy923b8GFdu3KGEvSe2HH7D6kjdV2AxCy8Hy4HwJ325KmthgvmMq1d2do1muGuGP",
  "key34": "4B7prr8EBPzQD3St4ZysPFajRAVTJe1KRXeQSj52PcznYgcRs2Bs8bqdJVponppy7eVp5VVRsA5nHFhziiHGj8vp",
  "key35": "2CXwkQz98e65msuarkMjUTsW7qCcwCEsFKYPBzpf7YMbmVdntfUY53qwTefZKePGQQFgWTr855XE41Um98bfPKSq",
  "key36": "jH6JWoebnY3PJe1rrsVQuhkW1SYwhFMv9WUxbeqPhfDami3vRgYmqvyqEPanGSsWGqh4pBkB75GRAh7KTP5Zsqg",
  "key37": "5SgXJkExhFhPPsVbESDCtTDbfgB3AaRxnYHoDVXhywKScuGyQ7nofCEmYTPfvjJeLdwsYQjM4ozuweo8wpTQPvnc",
  "key38": "5EUGR5kdc82PyUrq9hnikYgKWNFMUfKtKyiJUiUWt6xkNUkZtjD5agvhLzumzLYoxzAARJqQgLojKtwnrchTVpWq",
  "key39": "3b1Nk5aLvMgQ1Av5awt8R3NGNJknorYU3miDCFq9563ZAcmUw727kQwwRdoNYhb2wVWhatJ58i2TNpjQs8BM3Y2h",
  "key40": "3S7yAEtiAi1G6XHbREX4Dx8h8AJ1MH6JBRft8YEYSpN8WsYXShHf7TBxhkSS5LLC3mAsLXf9NLragxDfmNEtv4c5",
  "key41": "4QcMVEmCYytkVBzyn7YS3Q7ZscXKWYvyJaDNnGqNfTQZvpo2VFLFgCeRh3H9q4paA778QGTPJRfwToE7uy2SDQD3",
  "key42": "42BxMNduDoq9DpFcMHNyAzCmNWboyLmEy81A8JDh3JAgUdYm5hhYZh9VyKMSQo5iirCXh9w4TQujmR5WQFUYKbLw"
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
