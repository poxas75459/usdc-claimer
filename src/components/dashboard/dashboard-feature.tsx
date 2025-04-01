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
    "3xjkHY1Zbw9Mo7RbiXNj4f5QJyVay7UjpWQdy1xPcFYBx1aMftu2UzLK1P8sELRQpjjGAVtAc5Wu8TxLf2AG4Rzq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sFhUWWchsr5RqHowzi2XSciufGeU8g6DLuS3CxHdtxvZLye12LpiSp3snR2EtNanHmE8kra8y8MkbUphnMKPdE2",
  "key1": "2Rn4vcmdb7VUzxMatEVnCHacwmAmRfFcwuQ9oQbjKQQe7wcWvA8yBUhGa5oReaoY1sXgNEewoL2qopTtYkJapYAT",
  "key2": "3SdvBSUvCpvUuzbgLsckijrWgUcxgRoKiVzq1HR8Cs6coseKsRoYsvTX2MvERE6PXKfTEnBnaT4qnqwFSifMD93W",
  "key3": "oP134tg34i9X9zK8ifRUBDwYPTfSkJbL1TMAxvSc4vBTe3cnjKEGGZ74GkmV5GPSXg5zpStCdoaNVzDvUjCCDot",
  "key4": "2uekFrato9zAQyCRUcSf8SsF7ayJr2AibwNCKreyqGZ4qtYJmpVovDgT3d9bsvnjP3E9vRSMsSphAmKiQRcJA1M1",
  "key5": "TLRszu9SMcgmum9KBAZdN8uZjj3ADY4ieuUSAdtC4JrWBbc2zgWaxxpVxVkgrBwXWfqp3E6szL1dQpuMnduTLtg",
  "key6": "2iJbtg4LBTNjevbEPGuY2zvRXiLDGiEVSnh3Tkc11cQtZB8jGtGuJbZFqrGUQZfR2ZJUrBoC1KazoedTzYLRKNFE",
  "key7": "5YvVQoaowA5LAhWbKXdy1uYSCmJfn5g7LTeRr9XMdg8et1jhu49fmGB4pSiugiAuY8c2uqdny37tz1i4cZRQyFrk",
  "key8": "5r7XL1dzdK6cUdRSfDMikDaRuBauidzK5znHf2kUE2fqVk8BJWsggxcMoJ6C4NJ5kHHjSiG8JiPhwsdraRDW9UtK",
  "key9": "3sYXD1SmJobeveqzcAxQSmvAothkTGJeQacJH9Zp1tCTcGurMQiu4rkYVVpyjvUFHbNc5fZqa41iGFjckXo8HDL6",
  "key10": "57T4kuyP4UVyLs2uo6uDFfxrrkbryZhdeDa6Fors6HNBQy2n8r2X3mWfqjFJXipBoLcDYxD9Hd1iUfRV4GTqpaGQ",
  "key11": "qdD5JQ7oNEryhnnMUF5tmPEVzVPTkuhNfopRSpTV6Gr2ateDHcujXBapNeoCd8KdUd7dgyTE2AMZYstUy762oGu",
  "key12": "4d51L4g6XSdJwm7VpcokdqB23wwTncBTAiod14dUCc9gJ9PtKGKY2QWLX1o8QE2TuztXgNTG9vPrXiw5KAi2FtLs",
  "key13": "48WwQ56cV8fZK6yhLjfHSB3aLATYBoSVXrYhD93ActAN4yA6xxEZQbUbyHspGBqiXrtUF4NVmKAZr6qaNZQA4Tnn",
  "key14": "4JHTE7mtFAEXgbqLXbZ9D682BMdTEmvfGi6ZA3CHuK1FyZV1ZDRa7z9J8BoRr8SYPmQ8P6zGiUQGz9hfFj8nnB7z",
  "key15": "5nkJcALVMwub3hDLa7SCLoGtodPMApVYuiBsehmPib22ZGQs9cJaXuHXzMbkqVuJPDuqQ6G2NQD1UjATp9cXfAGH",
  "key16": "44e8jukAtXiSb6YyMPRTg26Kpnq9BqqZzbfggPdUEjYhy892uHmxKVL8sDX7NMbqtz15S7PVU68YTEkenJNTJ8Nx",
  "key17": "5CJwtuyErWonvs6gCTEmUsacgb4mXLtwM9Yi9TxatL2rZsmhR5cFpxthDMBeonGdJf8Gxr1xwTDkRNYLzhni3fK8",
  "key18": "339r7LxH1aA1TjWJnrjJ2pCMKn8LiCUsdrwTtYSZrTxHRoukK4aru5frm8uU1HkT3tzPvbjaCyNDWZS1MrkSjdLS",
  "key19": "5DSHEpBJ78TXoT9Hti4xd8GHP15rd1qVKzwVpmzhZE3Y43cvbx3gnmQWvM7GQLbL6gaHXa8xe4CH2fNQAyPb8euL",
  "key20": "47kHwWfqR55mgz66v5SjrRU3GvZUruQ86XP1YjN9dBp1QmEaMdtj7HQYNSSs4HeFauSdP2ddYENHh5szmUkq4zph",
  "key21": "vTeTTjYC3d2TbMQofKJaUfS7kWgXCdq7JBXiwYbnjTMeGHAHnJibRdb235LHEz5AJ6eSPzUDm761PbWBys9V3AY",
  "key22": "4FGGSrgbM94FV4eLyv9J18MPo2qq46hNNiSj5BgtbdtaBGwWDV6QeGaWteGdND45S5nne6FqXZWMkA2NzquRfnnb",
  "key23": "5RNpD6w9kwDvKtLAQ2ekHQNYygptaZyPzr81avDkwCLCF8KeopheHsC7RURyRGrDi2xXGWpmo6N8Zk8oJWwzogAF",
  "key24": "5XqznXvjYdPjmKjLyQ9DSHVTRSaFM78y3LD9eJCc9m5TXbmv2XeX4b1pGzZmvx9SGPX63hc5kv4VwQkcBzMe6tTa",
  "key25": "3TQHNXKjik83UW8EiQ97yMLZn3VbPu3yXkcFVVMCqhGhcjHRfR9Z1feMXFT9BnhegS35hhBjQCr2heySSFBMiULa",
  "key26": "oPJDC8NmNAGsfRSw15revxEby8AtcngEdtc6pNMBrQAy34zhcuNgGrzUFWFEeV7UjMfTcZQ6z29bbJCz3gncTK9",
  "key27": "31wzhLnWj5hfy9p8UXd3qjEXoWuUhQF7SKYgvSABRbFUTct2P45iUgiRtDU89GQUhNu2KWtpMhynCT3UKFkRoNt1",
  "key28": "5Fkkw5KiXNLc9qdyqrp4mDTBcUqXgF2zYVN714VuZj7r9LNVgwe5HCQvR6xW3FVPxCwUWpwwMCCB8QuaVtrpE5kM",
  "key29": "53xpNSdMRgtfiebKmbRw49JJcEyMKU25kx74aMyPMM2KgHAE6Cra1dJ7Xv5GJgQZtZZ9M4qSn43j5zmjjY9Gcp4J",
  "key30": "4oBs9Lvuj4LvYUJQEfcu7ugtA8J4poWZadTzMBhZ51pBBZ1RWY3BCGaoesrHJpEwMUEXJzX4xD6c5BRWbm8fMCmP",
  "key31": "3kVXMRyMA1pcvYQkYL53D2x7VuS2JBpdbkfnSJiwiBkMV93j8P5uMA7FtPP11fTrfBFL2qX3voeyAHFeye1DzLe1",
  "key32": "3acqjUUcXF6miHHxuFVUKv8LA9ZybNsQNjenzFPbipHcjYhmc5bH46uUdujsgoQ8XSiY1LwtorZ1Z1qdpaP36x1m",
  "key33": "5LMhUzZz4urUDgBWCiRhXL9XA6JnsFD2v2Cs6yz7e9GyCzqfjhYE61wJKPmGUDEym3JWtAhytkMySottuxrpZEVe",
  "key34": "29Wow3kiQhN1ddK6Pm4zJS3M4tBN1CBeCiHEPqshfvLjxSZwQhAbioS8DXtFVwNjg3eZaknqF7pY8z4j6WeqKBFq",
  "key35": "3fmMaSh1UDgQEBeMsPzD3Wc7BQPkq9yaAwhrZPTEqKUjBSUDi6Zk9hxFPeJ8U81wvZRcjnySPTaV7mZJgNzxV2Bs",
  "key36": "aCtfNuwu6eva8GiTTav4hZYLP7af4PJTaBQZ5aHgBv9RgQgqKzyLMi9fkx9AxgFaPgaxpzTFGFmNqyn3PqtYA49"
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
