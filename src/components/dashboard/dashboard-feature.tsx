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
    "5eLStDa6sooDhnZcSuWujBcyRk6nqKY2WRv8nkBa325MvPfU71nbH7RAoaJ5BJPXRfapovb3Mbzwsb4mzDXdXy6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EZ4MX1rywTpRv9a5Wtn85WFVEUFAG9aSLAriHXWm2FUYdZnmafVkhFQhBLdrDovYmTMB9D9jXB2sj9xMKwe1iN7",
  "key1": "2VsyQPL3TeSos3owGvqN7By7k2fvPa3gvA729ZgARDMXRHAfYexpetCouVLFaVy5KBvh3pA77QCYRXtM6yt3U2fM",
  "key2": "59LX9QExyMqN11ouVHTxN3Cq1JRWVoYmCDeS5cAg3WbFAA6ze2CdF2YFdiFhzNi2nLWdxiV46obMR84YwyTrZNR6",
  "key3": "63GyjRfzBzf4VSryXeyEKu2WskybXkQpDcWYrdTEz5dy7u4CNwMXHM26fsv4JjttrFbmAsDz2EBX2P5VEWUBPYkS",
  "key4": "ADBHBwg3CJzfmFELxketxNxSAmky2SN7R8nWGfPqVP7P23A6C6bLFho8GwienWk5huwfapNxRiMFWE1hQdnDQeo",
  "key5": "3YxA6jT8n5QZSgFhkoQ4HAHWQxsZeV1hKr8GzRUwADb7UE8MUpyWwqXu1wxkkdqz6neGunrPFMDtigQzroBoPuXk",
  "key6": "2GwZy2jrKQUX41A5AB71dBh9noRL73r2Nv8Qrqaa2yGc6y5SanXd1pThCqzGSTer4kmTorbqu3FPRLESHP8TKp3a",
  "key7": "65aE8ezvBnRGoU2FdPdoZjpBEUyGrXvAWy6mzNfqVbC6zkn2n7MqfR78wL5NKKqxL7MtNgD8wBdHuef7b5R8Zvst",
  "key8": "34x2fv7DyhZi4XAJeHQE2jp6mujgEugNRcNNYCJ54LzTBMACuikYRdx4UzJnNi9gxpSfgPdfY3G18jxyzCxVhdHE",
  "key9": "4irZoZBg7pPVp5krimmZrCgevPRRVM93w3XJW8sfSQZec9tFPMJRgsQgAurDDzTZNTk9mg8RbdBqsTrTkFY2VX81",
  "key10": "5MPzA7Y1mmVA5RjqiRkzqMKHmysRUsQECKNXPkC5t4L7iHNF1CJZThNeWyPsa7P8hi3CB5dWa1enr9udgf9hpZ6V",
  "key11": "k9qPqoX73oBLUuHJQUdGS5pjtJeQK3v5kCC6ZCtsb5KJBnERR6qNL9HhzSXuFbBXpvMP4JPSJ4n6Tv98Co6rpW9",
  "key12": "gYv163VUjrXcY6bLbXX6myQbnR1fUGxNSKVUV11F2ahmoFvfDbr519NSryoGeR9duQfPxFkF2GNkurN2Eca2a12",
  "key13": "yLsPRnHiczCw1FACdeYxTLZo2pkJ2sP48wrAkkFvHD7QRqtALzq2frt3XdcQCXDmuH8h1MTVGik7kBe4nh4kazy",
  "key14": "2kPE6f4RLuY2LfSGdEorUwKkpnPX8eAnjjzkFe4tMtMpHsriH1bivVPs5q3xSkCLiMKspnpeRVPqR7t9wGpXmGyt",
  "key15": "4mJo4kDGyR9K1SPJEXgKhQdKxi8Vk7WhjeRxWpaHPnj14NXxbXv5wPRU9Mvn634TkWszRoSH1FubgpMKgFzP33G6",
  "key16": "7ZwP9G6Tq2Wi1vFXbwV2YXueN8vKJH4PGboGNDouoDPC7cqUJKURoCDYaaFrWu7q6s94rASQq2x159cqXK9gdS7",
  "key17": "3JLCKgmJsYuRdQbNfGa351jUy8LofXqDAMPNxBoPcUDjhzYgpZMSdowG16czwpiqUBrjhd3GitrjUXS8PfvkhGWf",
  "key18": "2LLxEbHMRPKgbNX5Ncuts96QFsVPDUdbreUyqZCzLakUdHWBD7YKesEZNZz1BNCVATBcGdr87kDm8pUuQAVHJP4p",
  "key19": "3FHg525e2cGaGbmEH5s6rEsStwd6QHJxbaxHeQpJnmKZCRSshzQNPJdQ8PGs8T8VSPd2Pgg8dbT2SctSjVzcMspi",
  "key20": "4jhFWWr9RqJho1RzCSpvC9H5hmtZt8pfzuiPV6aed6YwreS3sfZ5TSfFHmkSBN9pcH1Ad7t4QHTHJworoVsoRYoy",
  "key21": "GxrhDDx2cefMKexEAUDYyZmjxYsrVbtN6q7deNwuxHuozqJGfRZX47ovi62TkzZYoCYK8LV9iFksyfm8NRMAMLg",
  "key22": "3Xt1J7hKniivmvRN2tUYK24gZauECK1vVAYY9Bsa5qAHPMKkJiqRKShJpd55VTegwHJF5KLsCEmwhnz6QgyWdQmW",
  "key23": "3V95K84cCdQrtDdMFwJMa9EKQZZihrd5wKfSH7zAa2UWZ7NGPQqq8ktJV7F2rekDXA6Pp44ag1brKDiyudUwod2a",
  "key24": "2D8ZcqW4XLLzorYeyFm8bUifU9Y5cjb3GwzyTHMpHJDDpXsuQJvcV9dbqWPwwComUEJHgZ8HSwkos39zXCroxvRL",
  "key25": "29Up2bs66V7PmZgGy2jP7Q3sNKi4S4VxccYeSpo7qDyQzib9jKCvoByBDVtD95dKfMp66CDRwDaZLebf7wfELWws",
  "key26": "4KXF9jCqDNpM1ug5cmBvU4vonzVnLJBeB8ep6mhYFfZFfAUuBX4MfP5GidgurY5UF1KgeU6swQGoDr4mqoxTnBcW",
  "key27": "26YdQtShZFTMCDxG1tz2DX9kyBKoTALWLi6WypGi18BhPuFGxMTj4XCeQWgPweZcBgi1KsGhPD2qr8eF6qMuRh1v",
  "key28": "3MZTTuDoJf5uDK54RUkoZpvEVHtkkELXaAvA9fKZGoiMtmnMAvjU4dWgyyYdAoqVq5E6QwCXDVzkKCTtcXYMR8uE"
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
