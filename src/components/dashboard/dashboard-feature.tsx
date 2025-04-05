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
    "28P8nxJdayTN7Ywhx1EcHMd3MAwLREfPkCAuzBQ3tmqK7rTnZVWRUGsSL2AWBpnussdovzFGCXNKQoUSRYAZuGFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XkpFysNqjN73jVaLmA3XDcsdu2PWpjQsycJTVH5wfBEmQo2Xr7rsfZPJADaQt2raoUWPvwcrkBqBV6vw9oXnkcj",
  "key1": "66umnxFa4AXAbDcLiJp2oXnp4sSufmkSS1yjmQU11gi6VAuqoLuabKKqEZCsiKSExfJYadVeTi7FuogL93B4Ft2j",
  "key2": "3kAbQDtEHE3nb6ccsYqx9EYuHUms9hLVZNBerdNEhnTZXswUUUv7gFAFrw7mMGiP4Y8Cv8JLgV13HCR1jXLCi7JQ",
  "key3": "3Kxg5LsUFKxqukvCXFd5qDkbrCeqnK6GwH9g4YFk3B6J2CRpTtW7KQMX7eWWewVdK8QdNCFFYJw8EnQTCWSeUxm9",
  "key4": "63kAk3nwwHLGuF6Cb23gLKVfYq6HHAbriSQ9AQA5Cum5iU3EyBwKm1y3gYYd1BmP12vpQtCDDyx9QfGHanM9azFj",
  "key5": "63KPZFf4FUBVyiBKj9oG61KKwf6xnXTa9oxmu5W31UUCYbdsokj6yNyXgnC72tCvCL5WL5MdFu16bVHr1PmsRmG3",
  "key6": "5LJoWoATH7oeNbCUxJ8PN5WhAaQ46Njd9e4dG4mpGbPNx6Y3NkTC4ot8mMF3bMkbiRJDXGeD5wEX5DikFiS3vp2v",
  "key7": "3YySnjuwfhrMUTyw5AekQBBTZmcquuDMNnT4u5BVo9uRVf6w6sHaEQj47ZJRVB15SbyE7bbQRvJne4bLVGZ9PNEA",
  "key8": "id7KtCFPasX5fVoFFsnkhkNHoj8EWKQ7pHnRRgteg3dpPL4bkQjvswErTBMHXubq9hb3zKLk937SphsW4i4fLJU",
  "key9": "47MMZKyVMb1GHbQ8bBU1KW68BoqUaPviAtmuGdfxN1sgwBxY2X6bCsvMVEquw4mgfyu4U8gcY98J1H3wG338mmK7",
  "key10": "33ihtYdjyJCPrt2M12B3B1chhEmALVVTG6F34qFem3DYMU63CK5DeeWfnDkoHtmakLsSKNYyoKST32BP29TWDWSH",
  "key11": "49v3yaTk2Lm3RLkvGaMyFKUvCDRT1HgAg9pasNfRJ3DuZknvNwN98NvX9BxVX5mgHvq4fwLKYSk5JBjsnQ3SZgrw",
  "key12": "3bD75LiNSYCUY6domhPjYnwh96U7FaDvfj1t6WGA3AitqmHWsWk3eX88oESgVKxXXxxAFzdRs2eGt5ycczprZb2u",
  "key13": "3meiEocw7yioYUWX7YWp7VfqWp1NvT2xPcBVEztTwqNErAEHvj2WKGdgYwsJq1xwXbbt1GudViKcaq4UKQY8NWoy",
  "key14": "e3zbAQRCDjPYVCyWtcb7HfTGX8CnGR5sZNPAg8wAACGzDAPdkcyc5GjRN3WmdjyhUqJPc8KTkRZDkPBFGyUekrQ",
  "key15": "5xMToV9fzwoT24kn2TcJ1KkQWee8nhCCfFVNr4jDkhksSUF525B4hD6EKXKFGs3jEvXyAYChB8UvjHpuQKycRsdT",
  "key16": "2LbjK8mEcZaHJ7MtHSRELoqETER5vXDSBSyvXfn2xcJCye1FCK7ockF5tRBAG9QrLXq9uq3HATmm16NmR6t1aRbm",
  "key17": "5Lce2t1KV5T76jXeJjAxYw2GRKUW6q7J611mwqayKDTbc3TGDmvXTRDHQjtBSRqLxKgezHHYuwRxXYDeDeVG2Lgd",
  "key18": "2gpoBAatbhWTbfnyEdgW5TVqkKa87KURDZWLiW5qGwDd7yKe7TseG2u87Zwd6vqSSFcD4DXkd88QodNSXgTr5WAD",
  "key19": "56mcfhhgGeYQRHwoH9eA8ME9eyipp52PqRChP1Zshe66ya8x4HyuNJ2z9GewDz7M921UT1DjvkoCHjKKcpP8FmNK",
  "key20": "3XroHbmtLe83h21AYMgpQQp6U9RRBNgMC4SiU9A8uNowVfwZgyDqL72xBHgysidM2LigoEjheiPrWMcn2Ro9WYFk",
  "key21": "5ADxXaZjBrNmux4tuiyhmsXKAjEn4aF7eMiKdtYQzoPbgUQXhwNbUrj2D6r2GJbLMZmNdqQRp2Ck8Vg5PEU6jtgr",
  "key22": "3o4Lur23T4yzAeLdwiQBKsf2tVcbLSixkTMigRjJyBqSxLgiPnXQUaxEvuNJvTBCuzH4VhWFpCuPzUF2Ru4NHVxt",
  "key23": "3hxFgB5hZ7G8P53HfDLa62SW9UtTNJtgmjG3eBvR23UuH8NLf6GEN5uYW2SfXTYj9vcVauikiHViNhRLPU3dQ5Pi",
  "key24": "3kT7XrRfNLN8w5DCHWDS8uyA9hsmjoXqSpBKVRS2WjV8Y8p169pkbadDiereg3neMZxksdTU62XMENnoCw492PsD",
  "key25": "HLgpxQfpovXt3yMCRmh3WLRmsHPEKSmgmHFnrd3RzjBJiW9xdHZfWRKvLubevyuTbU4WPqAFJqWhZ8tHFzFJwGY",
  "key26": "5VPiPLHpjvzeFXqpZpGL7quDokemeFN2GmJybuGsquFMmgbSPkJ2qQigd4S4joZtVqdp8Tm8LjcbVQmAHUGAqevt",
  "key27": "63MKmZ7xuzRfnUACpLo3rLRAKFJUBi6FsEEDqoQL7S1k4GU5RMLLhuRwF3gwatJVybxv7rY9Td6eQbF3ToJS9pgr",
  "key28": "5W328hwd7LgLmxbpzNU1DGfTCSUTaqsG9XtR5vXzTstsx8BQa7YGDUPZNsYXnEhzSPpBrhpTLRydViWUAtr7B3y4",
  "key29": "WXoP7jjP9g3oWggY4Vu8tVJHHWwUpPbRQC9PZ7T99bEmCWXAUvXj9mYp6BGHGDwHFyLzHgnzPNvEfyGkgZPa6HC",
  "key30": "q4LmPew1ty2NypphHXWg6bUbYBMDPGVAdXZ4vV86CQ8q4tfvyNhJcH4G6Y3Eqw1grfh9yTugiTchtDezKcdTMSW",
  "key31": "5ZVFtsKrKUEvVyAJ8Yti2ASZhn63ocqDjMfhfjWnFAHoB18AGjRJzXrzUb5EBZuEGjWxnRrmcJyGuYxih7qJ38ny",
  "key32": "3N27mYo5V4UHcyQDtq5zkzP5x7Z5uhcpwRFnqxUJbSPoxcs5ngETTQSLqZXvPLxtzGTRfTDTcCXwcar9DPe81DV9",
  "key33": "34NXhhXfTUZCQ8iGuAxJJCffHSGDt7g1rmTwWnYfra1KmYfKmY8ktV8tdvLWsKnPeBAfms7kmLTKvhVSUnWr9Zre",
  "key34": "4qwxvy5H8RUfZEkdgchQ1vprBCAJzJFjNyv7ZoFYXWmuHG5Wbo3ocTEPxzNC3HPvskUSfV4jVHBs4LigjEketGby",
  "key35": "57VES2XJAnVbnJqwo6GQ5y2xCN9FY5kX3nfAhZDbtDGe6CPw5Eh2yYEYVzHfeVvdHXTbuAizAQefc9owcGLCX3FU",
  "key36": "4pvz2sDDwuQpqXiFEjCh8qWGqsE4H6SA7Vc3hS85ZizHr9W784ZAzT8C1BXboV8nVJnZsoMEGzJ6eF2taQmYDrPL",
  "key37": "4GRvckNzTFQQADa5HoC5N1uPeWtNUsvTcgqkpNFrKBBT3og4AYJFo6CHvPfiUPcBhYt28y1mdiHU73FExQKP7FPd",
  "key38": "3u1S3BL3H1WaSgHkAF7yZdkjdzQkDLkeX2fDfaNC6JAhXWmShph2KnA7t7euuL6tbmVMHWj64vYRPeSmNzNhoHEZ",
  "key39": "37LNsdR7pKug345Gv8vWuy9gedfrLFJNCTwkkEupErTju69h4EsSHC6iuFVDTjqCMgc9Z8BiDMNun9d7nc3nkygk",
  "key40": "4QQj3mm71w8p95WUFECtV5HP1Xkuj5PfDpWoqHtHcPCbUa7VggQzF1yHgJj9DTHwWyZ8bSpQ4JLQ88nxWh9PkBN6",
  "key41": "5Jhz87ZCR1QX2MUL2BguiAUdzkv8EwR6DwJXkZcD3BMNuhWPAoce3L8TX7Mnp3CBhvQcUUHdGkjGBtpTVu4BRT42",
  "key42": "XqjC4eSzpY4JQ3zsaRpgw6wZLBEABNZBW8LvioSG8CTrHwkGk4tv6wXLXjfVzoi8mpqhQaire1tmL8C2V7GF6sp",
  "key43": "2YsmsE9fPrqUfB17E2BhStZzEiVVwBTBCfKc34aY4fYXEDS6YLzCXfE4cxJnNecc4Mfw5FdGajRzXgNPtqPBxH8L",
  "key44": "HdC9ioKUPNUXYo7e5o2qAQCpWoBrP3k1VXaq1Z5b9wUxgZznt8nzoEvKuPXqS7DCVgaAYGoagPissAsSgAai8ym",
  "key45": "4uUevu54PEjJKHbmnemykbyhCckoSqDNPB11S229owky2XMBUQGJVKDyx5iYFV3Uk3uxxMeBsGSu9NtB3WABTYMo",
  "key46": "3EBtWPUBKtLizbCMtgCrJp4VpFkXtnfwbfgSdpMEMTgQiy4xQUPWKX5SvPRDwvMbCkG6KzNBVANugTBozDc1iLEy",
  "key47": "53iv2YBd2XGNPzNL4Bur3us3k1poXickSDHXRSnNCtkWcb25mZfEk3PGPLzMaSJigZrPHNwv3SE2fCYRUww6YDLP",
  "key48": "2YtY4RNSkEBkMeRM4H4Z7ngiUhr2sXS9Gsyv8aXXbbC7dTEXXiT7JmxCeKboM5dtEuCqMWkuNn8tWKHWJrew3j2w"
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
