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
    "2W3RzFSeQ7LEJacV5pbkr5NMEheQjpDz8SECTLWwYzHUE7TnFLAk5HoBgM2dKsL41qAhHqNvsKgziC71uCWmEMWH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qY1XLVCaRL2M1Pbj7RcRtFxLqSsAcbK8Z5G5NpKQD15WapVu2sUfLrDjyhd9AYB1Lz4KjuauPb56WBYojdsdB7s",
  "key1": "2Nn8ritGsSzxa9DFkJX6HpSqSBcvVAt3qkHWHtJS3nJjUZDe6aLPkbnc6V6BTds6Fh9QRknoxGUVpU7sPYoLbDCf",
  "key2": "4nQTLe1z5P2mAzo686twXeB2ULuiJ2Lkw5F4diYhdDi5mRkMHwrnZgsEyanz5jkToTyG6JxSzyeV8xjmdrjNR11u",
  "key3": "Tv27oUJFmFUS6yMXi3Vwny6nzvy6UAeVUju9SAfhz3wf2a1KU8cKppEzKydXxrCaNFvZ7tW5m8ptK4J2gUJcmhG",
  "key4": "5dcWthGjYBHoU4mR83pGJ39srKGNXFnNdRgdhLKQCspyb2ZyQtqDt1tF2snjtWkbEuqyRDvLoUuNmKfC1fw9Bj8h",
  "key5": "3MzqCc4DN3frkDtNSZYuTghjog23rWPJuhukhYwLWJ4pq9CU1uQbeUNqzuBG44Ca7UN2NAXCqTJ13TwSVh4EAGD6",
  "key6": "32PnutFLPtHNtHP4jVgVd8sPWMLmpbc82MX3gZKNxPZ9Uo5AyztDURqT6yxqtNsyPykj6S2cXS1SkVAeh1Wtf8xQ",
  "key7": "4c5Ny164vskwGbFFpD2LSFodZEasNPcgH3jbGxZam579eKsQpKUHj2t1pMex1SZH1TdqnMUdZbXqVEHtEsWWKkAn",
  "key8": "2JfEiayo5wEPXfdZj9Su4KLB2KqnU5JnEXCvzu4tL7P3MZ8DgSTQRigssvrokfsxTePfTBNP1PSBSvjj5tW5XUhj",
  "key9": "2zqpvjaMefzqEdwh63j3CiV8FjaWp2Hrd1uK5jyDDKqhihYKx1dzabH76kLpY2bERa8a4aqpk19ePy2awaiMb2Aq",
  "key10": "27zvyKyUGxiUdCm7TfnLWLdssUvFwMVXTBrQT5kqrHzaoiKneHMayYy5YgPHsd4nNFLby9pSWjk4k4ak2Ly9jp8h",
  "key11": "4qgThBRBtihS1zfoNx1joGMvv6DMQ7DD9iazwxScNwScbZwEFKWbT9VhNnNs39dMeVj2zDjzWZ33GufSUrUfPYrP",
  "key12": "Qev8p9G9cDNMJwwAVf4RMurUa91HzbxHWbpX6vZod9JH1FwAeAZzK4tdacmNq3h9qQ4Fdz6khLwyFpyWMZx6q2v",
  "key13": "1CSvWKMWQyahhS84nX5CJUWvcNyCuefVd2ELKJovvkWT7TGNAXAcJsVFMMqLzbaDwwuCHiMvzYo8GtDU2GdfLTX",
  "key14": "iC4PqtiNJEniiJJh2nCPgrhMKoWxgYmHHQLL9oviQqZ4oo3MtvThQRH9hNgqbg7741mqUTAf4p9kZM7ekt17CzT",
  "key15": "5REch16MNerAFm6kWt7DQjHj6mAC7sDmXhvGXRsw6qiD4oiripSu53PGZsxLTnexmmiGzzdkpBETn7vnjd6wBrtS",
  "key16": "2bf8yLokroPhcJpSFPhnQswpsx75oxdJ7rV12cyJ3PMMmM9WTzr9x4qBoCYKp4LT3wxwiXLmbNdnWqfWr6SA7zoJ",
  "key17": "4gY5DV7qpUaHeRa87PxoRTEsxfzbijVqMFsaQn1Poc8kDx3UXMrUNvqLoNUr58gHMLihsMgsVbazfymzgHn1vgfz",
  "key18": "4Wt15UkfBZ1r3MgtZkSJdnuxBFTNYqQ5DmL3ms5YfQRANQAyL3zjtR6Ah2EnH2gdabJ9myZEPsx3evjSm7H3L6Gv",
  "key19": "2zGykToaJSdRCMXiJPsrW1Eo3iWiSFzdZktwsgukes4Tj2EfgpoCaKXZC7mC5iRHAgbM2tdT7atPkNCkxp5hmGLF",
  "key20": "3L2ShToETkmZeGvfjZ8c2DBJdrciDf7SMxQoDAKt3BMPWshytpXqN6iTakQ4XhiARh5byaSLR3LBLPm13Js8HTdZ",
  "key21": "5j2mnwVzZZXhhpAH3Cx8Lv7Zvbyf1mjKKL1F68KRmvmW4L6UFMgEWiUTciPEbcXBRs8JLHgRKp2uN7wE3NYhzrQy",
  "key22": "2oSkpCJtniaHbF1ax2MGNTuwvTn3RAwJbtFaWQ3UxepdAdZq3pK3wzSGDRxS3ftKkLZQsHekXyLmAk6baxe7H6bp",
  "key23": "4VABoWwBFWyotThBzZrdSJYNMXzJZTiKgQNQc9qLoBnvADDFtCrRi2xNb9sReavMnMDoe5vQxGJVeVpPczJSaqDG",
  "key24": "3o9G9YcUX7aAF4qDN2UngTEebkUiMEfseV4vWmLaBoYPwWwNWRfDTkVwpz55K7aXVJqt6UBjPoXS49yLFNgxkWc6",
  "key25": "5KaAtbE7KUgMMSdmdYZgxoyobJ54fKW4m2FdMrTkp1YPvcdzn5caefQ7DU2oLkH2MYgE5fyF27c8XNjPdbksKaq1",
  "key26": "2toTSyaYhxRdWevn8BCnm1yuqJXReKMDiNyo69AG2EhLnKredk2Mz2DyzBYg2TZafBFXxJ7z9og3TmmPpZYxuuVQ",
  "key27": "4KjWGp6EopBdVr3dDK5npiHMemzkvUSMHb6tu2QGyHRsousBFtRvvdwFaPaLRaQ5DgDyrhzJ7HtidoLMtny6bhqh",
  "key28": "3bJ7CKDtLpsd6Qt8tsu3LSfWZmsG7Xqf6Yv1EziTW46rHSZsRSWM75RmoYfbHN55Gwe3B3YT6nVQ94TKGr8vXsgC",
  "key29": "9Tgz6gnitphXD9FCsYRVWKQ1APBdmZ6eVguzu6WefiuhGfwVe27Vm8uhtk1LnP7bKxKiiSZtR6aNzKGkQM1QRuW",
  "key30": "b6Eyiitq8rbWU3scDDgEi6648v8xhkEkvG1wKRfb2pf1hd2LYECi3xyUjRrNkhJBSqhzsjYqFAcx4n5pMibkac3"
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
