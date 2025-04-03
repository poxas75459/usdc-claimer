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
    "4oSafdPyzrDi2oE4QkNPV2b7GrCgEPyVC7FSfxue957wwfiRiKgS7KYYuHwvHzfhh4zPfZA3GTtovX4AzLL3dscu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MsJ9LWj38QHFTFfPFvjDjWLLFGiZFbmB4dqjVFxYyCEfRu3C93fjWiWt78p9nRwqYUTieRahN64XB2eenseKnUH",
  "key1": "5VojKTNqLU9ErsYPpXe4vdbKsTgQLmEMQu9GFQf6BzZ47HB1ERbE1vtHb5H5KBCAx3vS4YKiLdmwBGqJSgq5Vy9X",
  "key2": "2AaNnc14T8QS68FB9LUBoevKfg2NszUsSPG9rtHuGmzWRtDvfei9DxCxhhphYpXREPJkVAZTawnbjAHJ3h2LdFY1",
  "key3": "5bLTWTNzRSLpxAwQfJ5HyT2Qs6W47EEzQsBoaJasyAJ2sFM5xrnxQ98682qh3gaJzsJJ87zX3HiNsZjPQ22X1YTm",
  "key4": "5ArLPo3ow1by99Gv5C6NWkngQ6uCWKTCBC12NWQEozf6HEPxBQJmuraALuyBUKTWmHrZXgByUZhdeVBmw8sqaLEN",
  "key5": "52WmvMySpMuiWjzqvqyVd8pdG7NGCN21mLxxg24JwNeauvH3ZASqhw59veyE8aj5wNe1tfD3xc39Q8VixfcwJagm",
  "key6": "5PseePXifSSxLGXyajPiEwuoNFmZ27jR2TfgRMmFk4R5N4rKSn1nQWHHSFZeBkxcE3bcNMEMacRxTiNmdYqrbGca",
  "key7": "5yiTDqzxc4Q7JSSs4s3EkMNj2oxKJApVCvjJSVcTwHCEEcEZkgvfTN6sLCBeeeMMT9kCy55Yfm29JjB2jMfu4KPg",
  "key8": "2oP7rJHiePnboBtisAMuP4ketreeZNt8Vaz3gvtu4onRHSK6t9hyfpLoUrHpBJjuiMeimWevqfyVX1NBgi5HPXyv",
  "key9": "4FD8zXFcWVLtvs8LDM2XeGhbzDzXFkVNr5Sk9A5tZaaMqtQz8evXDfBxyUAnjGQMbyKTZZ4cinr1v3kEvepFmSXc",
  "key10": "3EcnAeBCKEK1Rem4KTpfWF2SddhQVsAThqZjxsDdR9Mxfvb8STh9p7fvNQmKGwznidFsgtnCBvbY1PDiuM6ZbuA4",
  "key11": "4tfYm6oVKsbYp4PXtbmBL1QG9etKKyMAV4Hp8qqxsTiANUXaRzkQmWGoyzXXnEcCyceYcJemargVNm49Y7yFS3yB",
  "key12": "4CZPy2YjSDXLq9GERVQpGzVMfVxvu2yk2BCvRJzSYaDWHKzgi7UEtKokoQd41SBHd7NzsnjmpNtN4DjvLiHotjL9",
  "key13": "62f6pFdCYP5KTmtBMtZXZkifAEfSdvN8BAsQ4R56Mb8t6NDHuUWAvSPNiFJQTc3XCyJfTyxzZAVrHcspPAJNyepr",
  "key14": "2FUUTPDPSsQSCVgAjJUu6TkswLz5hUryDaoqac6WzGwUxpWxmeRZJCatCWyB7vknqr3SYtZQJEKrFcGRFoZ33wBQ",
  "key15": "4SPJnpdqfvpm7vM1GYE3BCXCeyWta5EbdgvTEkrVQNSQKzEDL5bgT8Pb6JExZLuytNzwzmxhHizDuLbmLPNJnkXq",
  "key16": "8v7bewGWoDkaPmumsNKUzXoEVbSYySHgo5KDbShkptEsTs1VsbDmcW6ERDS243x4w9QoZ8oye3AwDacUEmmRRKq",
  "key17": "UAT9qVSiMCGo2CyMQy8p8my3cWByk8hXTULkYtiWr1y6hEmXz9wE9nKydae7MhFJ4vNVPu762xWP9rst9M5Z31z",
  "key18": "63VGAywoYeRBKTmUxuqDV52cEF2wZiwe7uuif3sDdxE3CwQYS5UxHcKV9M4piTWp99vQwDib2xVBNr6VMWjncusE",
  "key19": "5W3VsGAUmXsGxscaGzpyn3ZUKXbhPg9DbaZAng9FDGLmNF2Fw2mGSADU3Uawo9eXFtyFFRsvZiYNzKXTByxdD5qq",
  "key20": "YH2HKfL31pAcvFBHDcPzVMbVAUZZeFoUzMKkWqHqreZppyLQohv9JsdkXeibmq9EXXpKV7yU9yx3rcm1YSPogue",
  "key21": "3PaAABybBf4acVMRvV2Y4iQAcDarybNNwC9PkiwYmYLFZdBquxF2jTUDJpEkkJnhi9E6AHsrsrXJpgzGfbrroQZb",
  "key22": "5hjFC4aVk46yvcxiN4468aGg6bQ2wL1fGtLqFcBHG2D1mW6X2zUspCGEAaAghrbm8GKE7wbZejeCi4FkokKdnMPn",
  "key23": "4z98Hoy4g4pUjNL6bMdCNCPffn1u76HzHuCUWkb1Xf5zS1ayyGFkdPYLSzEwj4RZgsPeyN3HLsQcZ7wpys4qrJu5",
  "key24": "CSHUnNCtQicjDPmdhLwkemFAMGpuppNzqcwmbYG6EoLLpqEmt37zwqjQjjsjxU5V7ejdK9zxCQacEr5FrDm89La",
  "key25": "3MtXrAcaP4SUev9Yph6WXka3cFTx3MYiBVUVp3FfLHnMGh8YGGDmY3jsRkGwPU32DSqkUArhz9Y6zUzq8sQQPHs4",
  "key26": "2QUR5SYowcuYQUSceatoKBUQ2RhdauhWxiAMcDU65uegMUwJgEKQJjLxRnGkjkB3EZsMkqJYBSG47HgNbA5wHLqD",
  "key27": "3r3Fk7UkdC9WSjpgRh2M7hAL1HS17cGZ2qXXvegLzrBubuh5JecHBMoaRUDRAJtRWMc2AcGYG2qXqLkoLvJZZG2h",
  "key28": "4xjCptRAk1mtpVwvQQp64Zhfy46KVC7iKe3NqSfX6DTCWcCojHWBDqRk3Lt6vdCjsQcFC2Uhxy1hCYEMZrbGinor",
  "key29": "2h8GSU41Vw46JR21tKNsJsDDw6wtyuC38JwyQb5ZdgaJVvfF183YGcTEPU3mR9QopTRoUSgYkG64VLAZw3VXqduB",
  "key30": "38qqUSLusRk9wqRCr45hjDZojfxFiaqcW49YgiMik4mXL2KCx4D5wwFLrDzx7YimdL4dYahY9zqoG16Dmx4yZwJY",
  "key31": "3Be3BSHDA8sigBdM6BJakRbzxxV871deLizTsbNUJuhnog1pfr5u6Kj1jLAg8JDdLt9QbqZxj1ZSD3Vvc4qb7WuA",
  "key32": "4UR9HP13Jj2EXaqhCrmTBfiMR9XyiQLRpMnj8rwU6QTE8i3phBZidJ3Z7fvG4aLDCbYKHh6gHvgoTSRv5Lzwa9NW",
  "key33": "iEJr5r1PWCYHA78G75vNSiQK8pMZvQk9Ypik4wQfxu948iJPniPApJz7SMpF22aixKtoW7GbefxmWJJNYfPpp5R"
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
