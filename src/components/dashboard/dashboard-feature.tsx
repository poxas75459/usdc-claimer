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
    "BXLCwfzbG9DJMX4MB5ekafMxsrKMFwjQARiYNpbvnDc7BaMVWLcnWY58gvTCfZDgbdipUAUx9zoTprMyC9EjDJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wAjcrRb6oYFKqYJptwaND1kRHkcs7EvEpFWTNm4V1FVPpaVhDFnBxYNRfCYdhBfLiqhxyKL6RSnPpZ77nn91PJF",
  "key1": "5LTTwpSFMgZ3mtx9Hd5WZGKtU5i2NC3ZnMphUCUtb7vjs6LAzrXBKMUvQ4CsUDCeGbukxw9xRT2rsmRS5ZRyoKix",
  "key2": "5gxuKoWtRmR4yYDnShjBHEwt2EvxbhPBp2paRRnv9Ex5UF5V293bCd9ADPQL4TAKm4ZiKrPgkZ7XCGf3bP1Kzb7J",
  "key3": "BnN7SRXchH13wTsevjwfkiCfrmsJD9JsppumRofceWyrVCqCemnj7qTV62TLj7QtEij6NwmarWq2h3w2ds4so6f",
  "key4": "ZgiukiMaWiL7fpiwtVwiCSgp4Mhui5SKvGbrDGhEzSYVE9RFCkU6xgLSFheHavxEbqBL8DvrwcRpxyFnvdwtrcP",
  "key5": "5cZmt5TJ5LEektjsbRDeePwZibvcrEYPNx4VeGeRSe5NKCDxpEttr8ZGP6FthP2WUe9EuUH5FRynSmMYNg1dMhrw",
  "key6": "49bipZkPpQecQT2yi4FZLyRk68D52aTvTEAZoJ18GxYzNX9wtW1H8ak7e8prkddkyn4gpjuGYFDC16WeNByKyQb5",
  "key7": "GLECvy9zSpueRsLANJKtwb1PbPSLKsr9uA9Vqe7TChW1pAaWTLxAGJA7Pu9AozDmN9nXvRme9gdJpnoAJAdY3a9",
  "key8": "FzDWqvvhLomjNfTvZPsTKojS9FLsXht8ca1xPdTHN8hg9dZbmoCw8xtNQNm7zNxtsMvdaHVDi9Fcf8cZ1uz6DeR",
  "key9": "4Agkyg6F8tYEuibifZ33NHdCuJGj3vwxcLMPRUdGn19rtXzpdhUbTK81fiKAE3SUYNnbNQp7A7k75HZniBE4X97w",
  "key10": "iD8ixfYc6RNHpoaFjcVftc7k32A8vg11MJo1TRs9TRreokDtFj1EGtRuRd4JfFbJDNqXayiqAhWWkiDaV2dx8F5",
  "key11": "2mq4Z8wsVjnSEgMBXEu9bE1Pqs7vN4BYbsDUaiF2KaDzsYnWwwcPX3XhxAzGEG2kxTd412kdP1B14b7b21W8YKer",
  "key12": "RV8KBKiucnX8SpmCopcYSCprGjZH3gAF75u1RGFcefGJX6M8mvz78fW5AdkckawjHLnYG3xAGv2zTDUo67evExL",
  "key13": "3HuYg2r2nXeMAyTmHLTq9VJYDpU79A9zVKNcovurd8XpyBbuk2DLjQL42MRpKTNteib2k4zMBoDFkUz1HwfaqJA6",
  "key14": "jxMw8fmNMVj2eSPML5RGcgpY8h8FhaJgCWYLRpLbY8Szvavsxtw9LVnKqkcphCVrzvSWDusaRbcN4ZZz2mDhbTo",
  "key15": "5vjPPsMSEhjx2XMqinBnto9YUi6b7ZK1CtLVcREfE8DZgTDgyqPaRX7PncL9zsZAZHc1qfdTPBQxnpbarLx35Ro4",
  "key16": "qsXfwcHknxYhT7zUj21sobk62bqYepcw24rx3gWVs4vEuDFSrKHQKuxYjYXHXXmUJm6TXWyHqkxuwMnyubRFjGt",
  "key17": "KywGSneyYqqARMaguxaGLtAnQS1Z3r1PpKxsmJ41WnDpUvxBJ96ykk9TasHPAv5V57ferZA7P4jHJdNWzwumvhT",
  "key18": "2tSx7wrzX1bHepRGiKNAXYJmEbixfxCbEfPJkSB9BqwLAbGXVANZ7PyMNu9vpnaz8BB4mXzrmuHrE3FcFgWHui6c",
  "key19": "2opxepjrdM2bufPHREEM2nYChma9VqUVcyxQPNg6qgsbjLrJDZjpECVYnvNuMVo944eM8hTdJ3wVduYLisXWm4NJ",
  "key20": "CosGNZvqzPjdUFBsrqo3FFy1HNCk53jvMGALNj7XsggY3WxKZ52x33N8WCun9PpakvVeE4tniZfpMt4NHzjE5Lw",
  "key21": "22KUgFjkEHQLd8Xn6wnWSR5gLFBqbGssBQESLHQqioSKrp3oa4mdci27wehGGvmGLybAbahasBiCXKQqo4ugDU49",
  "key22": "412Km3c24tHaHHUbgid67xBNAiBzKFaxBW4Kg5owRrXZ97dNTSBNGDmBeMGzJ33mWBpPxcVmudLXThLnSGsSZ44e",
  "key23": "3MSXE15f2Dt1ecp8UZHCtwZy5tyXwZ3u1yu1vFNioSD66H82ANcikxjNrgLCMt9gCYMF4B4NLqANKb2q9pszgzcj",
  "key24": "2cXDZd1oT6GAjCFzno1YXXi9qg9KS5JsLjDkoyBow9B5tKhgCNFNrnUZpMb2mUcjaaXps4ViRecsEUBCAR1jweTJ",
  "key25": "rLDs6nKESxFrRJRDsgkjdrqRqk2K6B9iCzcGt5doRJomsXhSYXi95CHsLv3oExYfGYHoywaUyxedy4tow8xsJMG",
  "key26": "3qrzArNsoYUAA2EsLxmYLTX7TZu6m4bP1MawHQQdBnsL3hjW4Rs3DzAXfCGpEPGDnhNw6EUzNUZgHYkJKCaPv2qj",
  "key27": "5nJDdprjEAJLkiZeLnSEYouKNWwsToB5m4cygAii2RJnX46o3wQwgrY2PWqYPqRiE78u9iopgLL5ivX6Mt47yx7o",
  "key28": "5PXNQt5zZjJKoDK8NV25QEFRvpHK58j4vqv4ao9zhysbc8bRStHMgMkUfnAReMKoXHc1So4hzjjddYSXtwU8MbaD",
  "key29": "wFEnLDer45sTWeEZPd7LrLNR78tjdxhZc55vneCj4FbUnq5YbcKuUWgMxzjM2iDY8hdh6Qn5N1hvp2uVuifgXrD",
  "key30": "WHDkZ5cmByT8r4dPyzZJCyeNLhWAhS5ZZpc6PjdSaAVwK6CgsKq1EnE6tSZTGKsqpfA8urWwCd8ofasmXGxVSAh",
  "key31": "no2U9oxuHDJVV4QuA1gBQwKCMnhumhN7VBtozJzSLEcsQB7eRVmBhXsa2ZgPBUUboN1yQSqYqiiCuS7RfqJKgZ4",
  "key32": "5aJzR6UfExxoGhgmSG7xWfrMVF7sh8ZgYJzDu2JgBw2CFkgaSKM1tXYxP7YXA1ERA7HaJami6WnBQKh75V2W6gY3",
  "key33": "3hezaDc9mZLKh7tXwepFHPcFdpuWG5TxVBkY8M8aC7eXPyrF4ogQLtYTaACyXJ2y55iW6x3X1EnWP1h9C4zgsJDw",
  "key34": "4mya9YAw4BEUMjCwdL3j37WxxzHFWHV4SC9zugQuHFbHZPKD6Kq8cyoFzron6pp69jrrDYSjvDeAvtKAX7hPmwLh",
  "key35": "4EtLpP5qM8ufPuKU2YJr8jnR8A1esybLZt1adgDiWtjh9vCVeKCaMMb468xkfAm1ym7UypdHf1kek28Yk56SMRCv",
  "key36": "5nznLPKkNEW26QLU25fg78s6VHXRzxLwL9ZawpcaDM5DG3bkXZxz6YTQXksGScZzJnZYv9WAopHvTdLeJpGm4vjD",
  "key37": "29nDBfEYxD7hwztkqZPdCZC9yNujh3w3D5oucch7RhoBdAtZiC4wUmstjrKcXXTN8ExFbexM6TwXenifbErnew3e",
  "key38": "3EipDzioeXFjnoXk6rTjhFZH2tY6sXkqT44a8So459pokKsHAU11TUotoCLn96Y18iFYMc9a1JXGGT7MakwcGRaw",
  "key39": "5EMeFTbFu3QrP1Z53QufetiCmen3qJHxGz4ZWJXHdNbGyWRjTb6cMGUhXjNs9ccZqRTuBw4Kg28DcM6B1tHWtbDm",
  "key40": "fPdbVcpuazCC7nCRBCzQJtzvUFbsd5w9yuNv7R91xusWDKZiVJxhTLbFV7SCK5k3ab4m2LYSryBMUchYxDoWUtM",
  "key41": "3XxLHFpQru2Hi8PTmX37NUriphdUE2d4DzbRiofsvxUrEMLxeMAxeZEGB2s1C4AGiPzKaZ1GxuoWqiRpCAMJQBrm",
  "key42": "PqNJy9vMhorjnKwuCdvs76ZLxi1kbb5TAkM9HwwXiP69H24hBUy1b1yPWEedCoJSexD3Qf2cAisrprB4B64csp6",
  "key43": "329PS2RNSydQzCcMu5xXSZRi5JThcordEmP3QThx9N7Yq8hWLDPPooaGdy3QCrfZXQdhY67nU3bpbP46UbgLDMRB"
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
