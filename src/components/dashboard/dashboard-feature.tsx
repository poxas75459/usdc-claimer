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
    "4XLtDcAvVii1sHg88G187NFkUjEW6XzEPS2WPFMUPJtrbwWoHDKCbZbZL5ZwVHsuasdAZB1cu6FVQ2qaVM1kGLTg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bG5GjsaDhkUcGQ8M3mEwyZNcFCcpNJBUgvUZLN35H27HfxVAmYvnfMjvg8rbQg24yz7cQLBmujXEZXEVfhDzuUR",
  "key1": "5KMasrzv7bTna34Uu2oj4Kr6n1isH2qJwxm1FpjbcZWnxombLXdgGfKpT24nLcStJxaLZ3Q5XYwAWgFuf6VQ1er5",
  "key2": "4ZWFmUfM72TgHrV9gjdzJqCmrRUpLs9GNucXxU1QfJRGQywafYRFuqRUxyn25v6LXMjG5GsmagwSCCt9RUkbQEms",
  "key3": "FLrdgmNKg7cuWm2jYihTxg3LezdwXA756sQXzmtn28ZxK2wdpxCh8xcGKRaqnH7b8FCX498otQYRLGnbWXBgiFp",
  "key4": "4ToB47QFFpXc6fpYzbnmtJEVWTKeMLCwFa3pDCgNb9WMF8iEWJehU4tEYEMv1n6d13sK6hK5dx43uxFFf3GyNncq",
  "key5": "5KcwxYRgu6aZwy7PWfHHQZzWz9rk75QGj1KqGa5mGguiHhCF1dFvcwSvpEFCFehShEmM7Y889iNSvmykcNDQB9zV",
  "key6": "6TbKyrVj4Rr7eCccUZeExoVTc9stqXNpKazzs3bfQqZvbSKmZuUfnvtJ6DvE7hcQ97KfEX4DdA1MmSrrx5BUTEi",
  "key7": "3TT2vdAL9CirVWkv83DExvgbruB3Qfg7ToMTipcyfviPB7VWH9wshAMXU2Jv88W3ZM3jcVsif6fW6WBnv4atPzke",
  "key8": "3wtQvSsBdrxGL3LRvc4m779zAL7Lsp1vgidBHDW1A5QZgvWNcMJ7NEiR3rJCQRwi1w6ESGjzM1rHcCPxkJ2f7WBS",
  "key9": "Np85pj5eTkxG3AEe8WBZN5SgRuAgaPz4abUzHcensYFAH9JxNSodFveZHUjTxHcYLEUsPdT3d6ekBghMkrALwjH",
  "key10": "5SQGuwLMxxe9mzLb9szWjFxnxBHG79ymdS4qUy9hLHUqcHzcJNxTaWbFz5Br65kqsganCXnqtUyvMSevjTrRJZnf",
  "key11": "u8uSE4pSkRNSMS8946c6ZVuqPgDskdKS7oQA642ApphF9GJA2ZgXMrAbHZfphETtZUFnS8pS1JM8GuDPdgzmts5",
  "key12": "21U5Xy2HcGoH86qFKT39uf4cHcRTMWKvXenrwC3TU39PRosSECDeegQwuX3dYnXzyKXTyYtHrPNLt5LCdwanWJ9N",
  "key13": "4BHuLqZYNukJCQfFeMJUA9mENHJEVBvm8AHSNLPHjpp3DX1htSTUvReNQk2funU7hMrftuxdkhsARyFcnQqgNdkw",
  "key14": "2FQHh2Mit2itj5yeCTZoUebssTRY9YGGMitJjVqDcj889qte9GWEvSJNoPN8j6yv5hg5mBSVxibqYbNjVEmDk9gw",
  "key15": "4PFQkdYAb5mFiCJLGMkhHjqxrZ2acDK1oUV168Th99ezT8eqw98HUt2dAS3us5ELe8H7pJuBuMTRpoXm4T5ufYtE",
  "key16": "5PDdmhmx4Xjx4fEpihJWYzeML11br9v3T6aJHymyZsd1xiMPtaMfd1aU8mVHqqHEoUox9oWBrHWZ41TxMtkvz8zk",
  "key17": "yMTBJw1uEb86y2NMKBexKFVKncTURUkiCdAh9NMFfipSKkTZsbDm9b5rct2qYz3T6PwJuRDBbzt3qjF8mjoMe6a",
  "key18": "3RHGtviLFF5h9z5oEszfkfrJ1jpzTiQCUHnzVcXQgPiFGeoXHcAEKazzJQtqq7jGjmRrLibRGjVz5eipr9ctBph",
  "key19": "5r694FXBPmX17VzDYBYSvnuJijhbkmn2D6K46sFAz88cJcPBQvnPvVrhwu6qRK78q4Rv78JZWdVPWCnswrW8PsGL",
  "key20": "54FtHTp2ackXRatcDX5wWDqk6fwywtGGqwemguSFbowEsoRhUPbZXpC5CDjMw5sACQca2MLuMzF9uFeRGBpwyt8D",
  "key21": "4DWzMsseDYnkDeAfNcbRaGjTM8PccaC5FTf13LFD9qw6rczJn7G5UF43Qk4D9HDUCPaxximPq9QJSWnBJ6aXPCd4",
  "key22": "3pnJtSsAw6G2URzAiowR5X8hmTAmQUXRLmnhAva3x54uXchhJVSfJuRCSxJ9WcVRHyVGqgyerrR9vueHKHEJrxKn",
  "key23": "3UMWUEjU6BajmwC8zR5WceDSZfH8eGPCT1SSDZww9f4PUPhCm3MuVZkh9iw31FZrUr9XpPYoyon6x4waVUMaur6H",
  "key24": "4HQQ88dAB6s4DeRX2epws7f5SD8KEWZVKXdpUjLpeeLGDksdmNZEc3cZ7E1CScQnSeTVHGR1mA2AtiBv6zX2pN6x",
  "key25": "63j43Z3n6tTVnNEfkywADb8cnbaiNwXm1xQfDeSZiBwvKL6FdGAfe6r12BC67hLSdiKUFvHxskSWZSnrTf5PsaUN",
  "key26": "cmRbr1xTX12nu9yEpmRuomJYEDn6ARuF3w78ZCH4v4kLsdkJL6Z16poLF9q2KahmPhMBnqHwxiTmmZw9Q9AJGDQ",
  "key27": "3XT2Ne7CjtWwCdeRCMUhRhH85bukeaZf2veze7zUwpDfq5MVHL3Kzt2xXAQoSC72TfxGjNqxqvAYcBgBas3HoVYi",
  "key28": "48Q2eEDmmoTdxjq8MYRnSCDqhkEMmvY37i2bh3fqC8pyWSaa9EPafyeJoizjfKfR2itpAB3S6kWbZevW7qjXS39o",
  "key29": "jouWszgZiJPkqe7uB6ssjdeD3z5CprfJC5icETApavQpUnnZQaLGt6LpxwKXeQXo6pYVz4RLGNjThGfBkVS6J5r",
  "key30": "5DjmWNY4p9ikN6hh4aVG5GvA6UpxM7Lt8ocmC5A2n3jrkMjw6ZoGLyBnLwRz1LZQQRRPk9Bnqooi5uUgAJUQr8Gm",
  "key31": "51kcD7MkngNRHduxEunPD1FtwZybwPmT3c2TzuNvNMcwyHGfW65Zc1bDhxZijFCLftmn62KHx2NGw2vKFeYKtYmN",
  "key32": "2cw2R8gyePs9Tf64ht2z356QG6qD3jkTUGzpon2mg2s46zgeY2siYzwnsVfd1fMfrpoDu5ifsaVCETxZc6tXRt7z",
  "key33": "4Yy1oT4ERHbaf5zoCrHGYaeeXiz9e7vutS4eHHoyX7KZX6fx4A4uK2qmMBLLooZX5U3pJhKQzoYgNREs9JC3oteT",
  "key34": "2MwZjTMY4XzRBU6moNSeoVbSxstxhZxSLK1FqfRftQ6CwFSyRho5hCzFdc3Nxj89CLLa3TBuL1fvCwqmVcHq671G",
  "key35": "5Fcmr8vUU4WkHkb56uqWaUUx6FDbxscVuCZotJCgeKtpgw4SpELyrEZEaqS3U6GzARgKwarANEsKTyFG4gbcefkx",
  "key36": "55mKzTwhw6wMJ6TsRZobs74phpywMnFTddwaojQmMNJENnXNssKtaCZJbPV9ihWQcfa2yznfQu8dFvsCnYyYSFoB",
  "key37": "32E3hosFYNNULgkAq6jPsEGq5wpuN8Pxhr3P9AfvpJ2EkNhXxn17RSr489n1Z3y9ytSgDNRfCdpZu2i2XGFCG31P",
  "key38": "3adD5qXJkx9Kpt4mUiYs5SkSTNRfbC8KMdENjBN8fMXqa3XWqUjtL3sEk4qSvgGfMuSSQUNb2qUBQ7m1CXXCytzQ",
  "key39": "zeFqntN6KRCo2TcmDW5BQzzX47bnA2r6Yjz7n9ewDbt5R1bbhjdZvWEkpD4VZhaZ1aQ45V2CNv47hSfgBLzhVS1",
  "key40": "5Qnv5JYPjKMRvSFtGsZ1EspgJjNnE7gT6n7AxDxj8HT8qCWPSuzEPY6MEN6pWreXw3xrcnSMGUUEHcJh9UAkFVKo",
  "key41": "2vAYWYNpBmBVAaWh7ybEJyHKHAR3CXxqQ28GTuhcVou6Uo3gixnYHwnCjsQEwZAGQgyg1CuDzvxNakKQ696Sx2Vd"
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
