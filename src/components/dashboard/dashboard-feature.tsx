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
    "3tZNJWk2t4t1A5rxDXi5PDEXyhasSTxxyZ8rkdEwmdC8kSqV2Z3kNHFBWFLdBzckTC7T273RWPCztN4sx7VDHfZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jp9twqNuVtRSJ6QJQPEZ2PCczQAmTNnxvy9kgtWn1NB5T85B2jFinbfSk7KaSXmmeTpXTKuHxfNTxPvkCZ7nuMd",
  "key1": "4F1L6MZ4nhibbfWcvqC1AG3QYnFcPvWqNZnLPrPrXuZhGHa9x65tHacZ9zHeBTtm3MgcuoLE7UH6r1CsQAfFUhwX",
  "key2": "5dyw3vr4anzR2yrnwu7TynzsFsL4QQAvdpQBXuMaZMRijPV7FWeonJksn7TX2WcgNCzeHQTfDC7GuWDAFoTYi6DX",
  "key3": "5P3ii4v3qXecfMnKeCNnAfEUDiS9jvm352ARH1JYc29qcTTj9c8Jq14VTyqsydrhJcaVS4XrX3b7PBUoaKQ5ngeM",
  "key4": "fvKGwx2ffxMQj7tDaUyEPFCqskJg5SEWRBRQVf1YmzBUPsjCU1CR92WXWLjmAZjAVXTYLXKLMGNbvNBtgXzabu4",
  "key5": "5dKqEiB4KPzBfgKCb8QMYYpoUAFX2LYpwcy7o3TYEPN8xSBE8oBNuQ8f3hPAV9473awrYCEbGt2SMERkFy9Jg98H",
  "key6": "S11zwBiwZaZ8XbFh5wdnKML1aPCjmeQikFtsvTt2udEkymeHTKaz7yJJBbde23igeCBVFMZ9FMBGAXwRX2fgrvZ",
  "key7": "2zwqgwsmTyGx5JFg12rS3bMofZ8F1aBsWKtrsxsiU5swEdqFyi9vRbMYR3baPT4fFThZ53RgQfcwvryp7txpQios",
  "key8": "3PMXfeFvVx2tN8jzUTjrRBCFUybDisXve5yERBfh8QgLvgmiWPi8XQTMuKh54AFrkHpyyN5UDXoW2eGJGRe8gbXt",
  "key9": "5jejLg1rBBHEAbxyxK7rfgyQ1MKepYzA6eLgrZnv8TYcNpw8qVaJimFVG9odCjGkRiK7ZsLmx2iqnpeUt4zDshku",
  "key10": "5TqgSS7tLkyF6zScpW9V8EPPVDh7gn5H2pMFQPMfnWDFPD5rHcgDGSD9NeSKEjWo7CjbJfA64XsryRbjTTzQ3UJ1",
  "key11": "36ESw4R6dhX6KUxe2Duss6EVdX6DGPngRhBzjb2JxDcuG5EnizC6KopkaA6xFspXNfpccUyUs9P27A4T3mUFxebS",
  "key12": "5Cgah3qcFZ1WBwcGmn92vq1ZtHxSYYpMLXPGzKQZktJbvWZ5tUBTKompVykVNscJtSSqv4QupP8xk6DzZFrau6YH",
  "key13": "xWaYMDaLyEFV2WetpmPhV2nLKu6RyuC55dhbqC6vWY6akeTcro5mgDaWTwszfu8MiGUSenyPb4bDU7dgYa7iVge",
  "key14": "kRWnK6UF5HyXSb6cd4Dzp1S96qZTbaKebvPHrAYLC8Fa2u5ShPvxXoZJbqDxKr4hgyiaArhRG8r7e2fGrxZuULX",
  "key15": "4aNjS96dxvgMCCzJhQHnc1NYCqTUM2mUXPFyzec5pySBqKRBMJkcYy5SHaSHQRgdFDJwiQrRb69as5J5j1gFHTYH",
  "key16": "4yz5JiM1jdFH4uktPUZoNwcpzXWvz6GjVjPm9Gtdh92riiwaX8m6hrJq5PniavxVHyfEM6Lm9au4Mw5LqZBM8Vcp",
  "key17": "9og2LvkcBnUWtT8a4dph94e6HcypeSvHMCJ4ckDrnvAYhDEdh2SbMreFetNdjgzm3pYo1khi37t8BhEJraJhBia",
  "key18": "4DUt8BLL6aVFD516hk5jyjAPou8fyovEFLSjAvbr4e6MaTpdGF6K29SDFTrYtdpXCv9XdCDGQmHi5S8KoLJdWRSL",
  "key19": "Mex2BBkBgtQXwYzyHHSZTxrmsrTP57LDrKp3nvDULRsPhZWWQGCzwroBbRRkbbqwtNYfzC2Yaw1f8EgLVd79gLb",
  "key20": "3XxSiPPmFdA7xmDWbL4vBDPd89tX8A8zXD8dTxouR5pg3Pn5VpgHt2YRimNsnN3rY9GLsXL7zjRC68drvBi7RMfL",
  "key21": "3DkC8AT4KnEtYaZt9FJdgtokagdkBhXABYdsW81JVCYSunKNQjJRKmnryYTBideLj3T9fTpKCXNw9drZfJdzKirW",
  "key22": "2P6jHZMWvC17KwdV3SZD1x4KVxMEehWaiDJakURHjyqttbHD8wzfXLbL8f4Z44Z4Q2QWp3E2P9cUVwhREoXv9FDY",
  "key23": "Lkau2cXWirjAyQjsn4A79tEL1S7g9X8Q4tWq9azLtyv9ovSV8zNEuRaAnnvco8JZRD1nd5mELqtjoLfKLTJgRA8",
  "key24": "4TvMp457M1o4PqvXFHCLU4P3PgFALygzsRpojo9JhgSEvMQC1mKfQCJD7YfPy1vGSiWTN2WQMGoUTPNUr5VbzvvG",
  "key25": "3PTAHaCKqxbB28FDHjmY9o46Pwjx8Qu78t9iqogxYZxxQCe8xdpDM3wdhG6ERGJKfY1SfDbSJvT91Ln96nhHTgrS",
  "key26": "M6f1jFn67CZTQZTqjDWmAQMeoRoLaFMpkqA66WbP3wG22yjCw2p9QCbFmPrqdiBLFj48CunDBrJsy5xW47UUejU",
  "key27": "4zX4dXwdf6Ya2X88jVDSEzLh1CRMsqE3t5kyk3ZKX7saoSFHEfWbhHZWzS7LewCj95kKtfYVZTo9WjT1YBjsiKkX",
  "key28": "2hafxU8qfnhLYRBm5itZ2JLZ1HjMNRkhx9g3LM26t4MJUWPfVRQ8zpas9RXF3KdtDtwipyjESHmNY3U32983WSii",
  "key29": "2YDavMiATMJNGv8NKmac5Vo3MmArGnLxB1RU4hYH1Mt8B9NUzCLPt1hrtswpNsQS9zhwugwHKoZPnr717uyr2Gnn",
  "key30": "4wRwoeAAAhWUHihrXHdkcGfiUXbA9FW8hAhQo5EXJu1AHqfEMnnbkpdopcfkozCh41MWs7ffYuVQdZ5CEH1APevq",
  "key31": "4VSEr7q6EjzQyhB2G8SfyfysZS6RiYHnob5Ha1TxiSgHR7ghUBNkfLoK3YjW2yv3AbmJvG5xeZbHp5b46ofPiEup",
  "key32": "5MaE8g9Cj2A9Njnt9kcLFZKdxdHzoGaR4kDEwapxWhPSh1pCri33nEZMjA7ywiGEKNnNAN1ERtsuMpM66kkpt6Kj",
  "key33": "5KycKCVWy4S4zSMDeacRQyU5wDzHk3Ax35EGoodShgYfydxzRCiE4KW4ApCi3A8ebNH26nCUATqXBxYL7w4j9nF5",
  "key34": "2EhXokoA8qQyjehgXW1Qm7GoJ7netnkE3WYGZPL7rLkBQoHp43pPGZLKYXSZyxcT3uZjj5wa3bcanjcaBzxQhdZ3",
  "key35": "Pvc8hNag2Q7aavaMC3S6gEAKPe4CxM8Rc3wjipX3mZhsiEip4L2FKR5P4KNfuuPp16fvHTie593e8HrE4CMTEmo",
  "key36": "4aykVaSjPQ8zBQgq6ywjxbTLBnJMEzRoXZVNUVHWh6GQNfhho8dAHQiVgt3KbYdtx8WxzauF1VoT3zw6dCGv9U3q",
  "key37": "4nc55mwqFcZQ8jvrBDrcci2HoAgJDnBf6Vu2pLiFwWmrQ59fDJSjmXBQRNk73eiWqTroHJsd6AhkLuhcQGyE98B2",
  "key38": "DLKo7Xejnty9FFyAS6RLK9LftcN9TcbAvpgZFrQr6LvmdbXDQ1T6Ye9JgMxoNYnfnosejbSWstTrsuADKCCxSk2"
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
