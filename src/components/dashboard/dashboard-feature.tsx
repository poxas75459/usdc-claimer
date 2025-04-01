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
    "4ByWNaRNby1UC58LXUATnW5pEjPUmXVVgE11hDgG4BLbjkqBFgJcw8Zhu3mNnWPQrc9Xi4Ajx1uN2LzgU5D4nZvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E9upUf8z729CuhfrqEDjL81hBhMUcMZE3JLacR9qcPLaAT6BCb6fDtSbABBahfYugtDKLcgkWLE2RH3JeSCALKS",
  "key1": "62TkNk5qrdNE87CerWiuS5y1TBL2c8nWzwZaMy69G6otwyj36B2u2jJGtDMrsJEXAR7pLDaoo2EBDHrYZPdyc3GX",
  "key2": "4LgY7oKiYC7UQnPmc6SKy1VMtk7ShMkLmtFkyLQ584bRUn2imvLFMsYsJLLXViiRfgLmM3ZDKZsw8Ghjh7ipJFkG",
  "key3": "euR3ZiRZLrgWDY5zo4ng5eSYHpkiqcS8bRFpCVW1eJEvVU2xei9adGG5NGkvUyGKH5TfCHXGFGmaz5CqnAH4Tpm",
  "key4": "3KYSeHUoSdd2s1rPp5fVGw2g7iNCYQya7fAHm9uhPSn9CQVQJ4FSYXzz3raJY2UNehNJD72ic2tmynfGGQtutifF",
  "key5": "5F7thWvgU9X1dVRCS6Mipg2t4D1wPKWdasxSsuGmr6UDjdT5j1UEqvKh2zdQEctFddwpkjnMDBGwsHBPESrPMczJ",
  "key6": "5LyfzsT4pb7MKddc4U9QB42fV9mEdq3thqZrFUhZAe6Fd67ZDx3vmDWmi5KDkZFFA7vDf6AnhFMiPDAsNAseiCVc",
  "key7": "3iDd8gxoniKXDuZ7enD4VVtKJKT3Piot8kEkYkaaqpiD2tDFVUH8GkthSpasTbU99ftunpKJwSDMwzYBTWyMXEvG",
  "key8": "4qCZtyhexu8ecUwPUFSTavXdbpdwR6M3pkfZD9tPB2oPekpu5rVsQcqGQu4vLubveNZwZCBFe6mpdECgK2UaUnNr",
  "key9": "5vjfLxNA9g6LypnS2xsG42Am6aXdF3hijpGD3JJchEkA4KwFdB2uAGXdZa5zTiopQTxS76UUs6HfSMzfiq7VqCPz",
  "key10": "4czuAR3o27ViMYFsQhknvGgVJAf5xdaaGi3BTDCpFVpDXggKeSnRAoxvVr4aYubM5rfUnz3NJws4J1JXW8qSQZso",
  "key11": "5iBLRZMpUn7NFU21b67jxHvJUtw9BxNkPNvgBW2vLc8VBpdsaXp2z91K4WK1btSGnsC9JB3z7wHG4nfR7q7JA5NC",
  "key12": "3ce2Tq8AyJLXDKvETtUPxu3gy9184ZHjEkwWKWF3JHkNdNMNy4xJsyzWqmapLBRzedotigjJ7qw4yFgbHwT6YtKG",
  "key13": "3ZTe518woYBmkYJCpaU4HocAELkty98vDZM64k1Wfav7FPSBDGQCVoU19KwFoVx31NsAwQV5sz9YCAjW6QS2Fccg",
  "key14": "2wncLNEXzB2VZDFVjGZdjLLpMNEUM2pDVXD8yEoeDXN3zuYhzRLEKve7EQCNHPrRyajPz5RoZg3TQxZKMUPJrSz",
  "key15": "3qTCRpn2tGHC5DPYb1r2qcLeEcUuPvRbrX42AbbgtofrLJTvm1gemKSfyqAyX6H4EJkorCtMD3NodnrfxBbsspX2",
  "key16": "2WDdwzJ2rAwAwAE96KAAXGvZvdHjGcnVw4uUjhBAwkNytpj236nScrV9V4wSmtAR56RNgaqybpD2mf8dJG1Uc4fD",
  "key17": "4yveJDc9V49PF4bVMr9SFgJwnxjEc61Gs67Fy8vFMeZWr5Q4q8pVh66JSL2Ei7BpnHrUSkF4iqWUhXbFpU4pPMT5",
  "key18": "3nBRD67YqjqFdyk45q7zfAVBLvkSpHaKXGs8KTNMwFHipBaUKP93ueeTmBGXcD6fqQGBV4T465UnTuMdCsCtuU3x",
  "key19": "4GhAVdzFWMev9avV94ZuDwmSpduvLkVfhUYJUNepr3FvenaX9DGw8PZXTAS3EvrReJP4j6kcFgogQHzaQenUSdGN",
  "key20": "4xxkLPRtviNWmhNCK1B9o7e7qj1sGfB9Kxq2cYYuunH7s6JxBR6iYn3npDQRtracSuKsx8FugohkjtpjVpeVQjVh",
  "key21": "4152Sr8ZFQrGYy2VhRfjqzZHkmuzCtz5PxyQFbnGR5P443XepnGb1tj6BAhDvwBuNBoa8JisNGBSiRdwQwwaAb52",
  "key22": "5UbhzWhrK7AFzY9FZ8SaHNdZPnThGCkfC99pWtXc5xcJPdgfM71srPmdF67jaJNWiruvJC7ftsZomceY1XRXCT4e",
  "key23": "2wSCrympE9KR22mcYNq1zrZRS2aGrFD4XVXAq8W7hAdRwrogJmHqfuAUD2xVjspFRLmdUALsi1zMhaogkbvdnF5c",
  "key24": "3ncVVZhqZ2C4QpcFQEboFrPMRM7MvtK5hk1FYvk8yox7wYN9QgUrvQJkH3qZESstCNRQAHYwpX5DQ1xmknXrjS9E",
  "key25": "3atSjM1AmH3caCNgfqJxozUK2AbwKZ6pTseti4Ka5Q8Ru5htqEovyzPv1jXxWBxrEGWdoegrnGRY9Vd8LVGtpAqX",
  "key26": "PLpESRj3dJWU4oxt9RPgZ1n8dGucGzDpys9KhxKhREC7CCHd46nDEXhyHJPfGVwnfQcEPPXArCFckt3mXbL7om1",
  "key27": "4pYdGFv5X1qZ6VxxFL2gx64GgQZW62ebMNVeyHc7bFcD5EWiqo58HWQCnYZFRiBz4F3Sz1kkr9hNLfDKPwRC8Jyf",
  "key28": "5pPDR5gNMvt9z2Aw3yEF7n6GmnosBDPjx5iH17dswrhEFiVDyeFoJv2twtgSWjRBwg6xSucHL5QYjcbpTmCvbf9w",
  "key29": "5GUz6hx9nf8uzh8N6dZQ8YdJPJbZbYUfwqfeapMVtVc5qDMrrzgyMCMjXnVfUXWmGhnzcCeeo8wd2bHhGU65LzDf",
  "key30": "3DTfmikkgbpD36kHQu1qZRYB3d5xt6rfcgQVzDmu9K3cP7xGqiWsTy84L8CNLhZYrvEiakxxdVDrEpc35gWGwRTD",
  "key31": "5aq33nsNd9CayrK7aizpAoYiawagWpRQQS5BoeSswsPiPkEsM5mkaaRe3aryzx654ckaCAYDLruphJqAVpAB96uZ",
  "key32": "3GTLXNmgW7bMeCa8peBX1Auin6StewsyHpQfoqNTDqw8bBhMb7zR1dvFxDk7UJdt1ayNYq2QrXN7j4TMksCimCCp",
  "key33": "4VuSgMQAmnN7Yasju7fuHkVLbhTi4kyEXFqJZ4AR31vQuLdL8Ua2T5XmF7LAGtBBMGXjyAqtES5YwAiCptjC3ss8",
  "key34": "3Vn79PLmPh8XBHjZ7buRVY7Wk4WxVgW4GsoRFdVXpT3mvSMjmcJUsE59xKdZZnkfgAYWbn6hzXMhUEDtd5kmM8FD",
  "key35": "4wdKWg84tPJ36mnAb1cd5aL94fGHfb6thKkfxf9suJ4tSWjYwffBSwBaKSad66qab8uiwoZS85xhUBvojs7qfwYv",
  "key36": "4jYuGCGAGKQ9gx3Rmv2BeBV7sspmshYu41zWeFTYEt7FaVi4NmnzS6maD35uUiuutizi2wiHwVATUoExaUaZtQ3V",
  "key37": "eLh43iRdGjQg8ZHWH787ggug89RpoGRrYG1DHUYHF3c1obGsUFhsLf5jtYE5GKnoAz7xpCs4R6YXS4BgseskLiN",
  "key38": "t26fZkFRPt2jmdhuYzFus3PAfHfBaUjRcCVsPhTiRjMvjxdxa47fMGfmwoN9whPZabzRkKCaDidaEJYksUdeHJ9"
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
