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
    "4xoKZeSJqwBv4QPzEtu9dTGeX6pkNBL7M5H2jj8Wvk2uLYyeBUrYCyXeqjZf8tgbKY7G4yESPreHs1KUe6xHXVCW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RtLvZfbWci6jUC29DrDf2ptjA7NzUW513HiPGcAftQz4uTTn3mYSwWhuXzpLQ7H41oFtXwD5uLapzDxxisFW8DD",
  "key1": "2cNCDxTjjZheCDn836hozgi6LppisCWYk7LLqUXXPJGK5su74fEg3B26M1uNV8xnL2FQuLZ24tQZFpRd5eKBncWs",
  "key2": "4xShN2r4HgK23bXQj5ZgMFcVyuh6MxMUFMbrdbCBf8xHdAwcMfh8ParQLhcvWxcnB8zkDsk8LB4PvFtdzLsCu5ZK",
  "key3": "3E5y2zWctrfj3uRbCGeL2GeLXZdnXkhwxfiP9UMkKReaN73Aj4b1RVxHgWs3ERUVu9rsbS8B6S5CBeqQpSrMmat1",
  "key4": "5zEgt72L36ackbtYpLUAFhy3wE1PcU454tKUp79RbdE5J3vxKXUr9mT775pPPSLZSkzWX25y7Yz5mZckUSjjLP8b",
  "key5": "3V8reXBzURcZww4AP8dsCwTmBgKZzVgkg1RMj14YWs1LYrehEo7K8vXEDGDUE16dJkQDpBce1TpRX7D9Ttf9RJnR",
  "key6": "49tnXTabzNwpSMvNTR1w6ANscrJbshrpdP92SPe876iTtZAimE8u8ZkiAKh23umS2zwqsAQkSopR2HYKN6LkEQQn",
  "key7": "SbVjiwtSssYkQYVDMtNcbkeMe69LRbRomjTxDfpJN8S5ZsARKxZhQDqUrtUniM9vhHM6KYm4CMWGwikhmsVNbD7",
  "key8": "66R5eWGPFy2tKEQmvxGvR4eKYuTNvwTP5HPjdgseV9VebazL7KnZLXPJJEioL2kzwtEzZyVvDE6gF9SKJ83ZzvmH",
  "key9": "xdxTd1BFBBFYMazV6ZrrD5zS32aWN95dgKHvnsxVzJ9CQ7uhxdgqQKfqwBXL88ragyQRfLkrZPPPJH8f1hLh6wc",
  "key10": "4CaesG4uGpRoKnyXfYSD4MSkUXLuFvPEvUievSqVvGvyMoNd6zbMs7b266oqtzhooTzyAxjWxDoRPzaih71TAXzN",
  "key11": "2646iCeMuNn8DLuYHgfpfrL7bGiacff91rJPvEbTsqLH5riLXzQ95WVe1V9tvCrRLE1Xnjeq4yp2qteqcx9kAiXW",
  "key12": "4BKKFhfB5wg5aM1HBRtPruTHS1LByFmUBsCNg3ZqCinkyWx9b8SiTb5jYL1CUSnTQm6oWfjo8437nxUVcjgiBkme",
  "key13": "3z27aopwmtTL6bAkzrXKRGM3sr7RNjvGncpjxCuUzoUio7Doubp5VTnxNQxQy6LHwFCiHXBxzdYJv9ND6kHCmzHR",
  "key14": "2imPMiue3mTxDvGFFk6bwgeyhmPift3jRzYyCRnMRD1Be1DL4U5BCrB9cAE1tLc9pZP9RCX2feXoN8pKAws4TVS3",
  "key15": "4nzcZv9U47UiMPgKtBczaXKJqCTZ27jX647ymRGfMSTGftmFkixjHsqDGqsHnHjoinffUoAbs8CCqh2aZcqsaJtK",
  "key16": "4Dg9K7msUqikq6w6SB7ManAsMzJ7o3LzXBBNS4MbKRA5p3DTCDBjnpgbn1Lj4SNj78x9TNEvXdky8BnoQkZTgT3T",
  "key17": "4i3sn3ctwNztmjxiYXommQJWykBVZES1oPvtGUD8KJvHCLa4FrvQmMiKtbzHKav8cqrHkN4MeziB7r96wFXwSxet",
  "key18": "2aK5xBNMRohGTUr5cASAoctV7F1hjdM8XQ6RTngivErcfAkerQyLfU4VXYPFMtMPi2JfU6ZCwKi6NYK5H9C7gKga",
  "key19": "4MkFPkb2DgTRRWtgNMJ9Hr5YqMqUpgakNf25XFTF9xpK2G4NozBHkNZJ2yTE2d4EQpuCmF9n5hNQo11QpDQ6YmbZ",
  "key20": "ii7HXFZKpmrzvMV4Wtg3mZ4g3Me7YfhSK24pC8B2iF7vuX3JTMNx583fUczvTod38DhYbobyXse8ez6bWpoDscA",
  "key21": "Ue67eGmRWGQdoaFkZw5vefETXg3J2WYFyY2wKLHVkmx7cCEHEwcS1jxuFeN5Lz5XyLgoFRFxpV5T62j2zMJJQQS",
  "key22": "3HomvMtHhZX36nb5kAtFw6YBANiMUvjGxf7nj2a27BhnmsCgKwhDDNN8q9kaBzihKXrTzw7mzNz8jXJwDpcAi3e7",
  "key23": "2wXuLdz92GoWPcTknQYqKAdqMNM65XrNcpGymZQvMNAx1GaPiHwhmKPHvv7VPk65CcwM2yr7VtNx3TBmbqWwQ2Bg",
  "key24": "61G6nNJHcz8pjG6TmyXWkWYkmf8QCENnk3EXjTsK1PvA7yRHMdT6NaJH3Tr8hZVKvoWjNdKqm3XhWTemVYDnsaas",
  "key25": "35My6szMGLzmaiNv4DLQqkHwHf8cq7iqJ8qYMySo4MyuH7Z7LtPEBzX23hsVqMA4YmtJrDg4gnujj2ooFroeGD5",
  "key26": "3sa1DqaBN4xnaHDX5LTw5MtNUz9EnpAfigUarBCXzNyCBaEMyJuubaHsrPusayUj1ue9Qf8qA2hZN8wqYWdNf3ar",
  "key27": "3MRU4vLLwzE8BqwjkHsTkitzEeKKmE1kPvH8sh4NkWucxeeU1YoWYyjNZimnXNqSRSuV8FSBn4xKqhKdf2xxJg24",
  "key28": "3U9TA2JQyMkbuHAx2bGaYCeLRyCNEiDDgKpdpe14spbPWzUHSbszSYTfFF3zAbjBSUHtN7qzWj2Ds5fARSzASUYY",
  "key29": "5KDQ6NDwn7pjVcEACRjSmanfShtsurthN6Yc2XXL5rBK46HWAWXA7yGV2t9fmsAEFEhZw4yWxndGfPkQMRnses2E",
  "key30": "57MKwoUcXQgsSLSWwwgEvXxS98idV4m3T8VoGw1EK1j8nW4hTMd61JXBbSzFB5kP3y1FuKUgMVBvmR87eG3kc5Eo",
  "key31": "4EVYMJnyRXJBVe5J79AArR567ATmJpKx4mPLYxhhRrgtM6PS4AXhuaU2bguVW7yXotVUNSW8LsTbjgQB8LwpSaP5",
  "key32": "5qfb9b1r8x4MXduyxYpGN2XuiVojuboYa9DLpxtSiW3rXex7crNmv54ymfPn5Ye3yqKWV65h5x1qSGWM2wkUcabw",
  "key33": "2Pbsd5keGhmCUb3UDbHQ3BB4sviA4J9iNU3x1Y9y6jqGC7KgzNWDhNbWmpdpJDfg1oR6Wvaa28g7N8LxWEMWumua",
  "key34": "34LeKHDGcR7B8s69nVkBBuZJFYttmTZtn8EmkZttmtwArMP9i45xxq3nW4hGPtWK6XLn4VXxd16Jo3EfDN4JHaxF",
  "key35": "2uwGWuiNcm1G2ww9aa7Qcn8YH6CuywV59CpsXMb1atUCWjghALGseggF9SDtdv6aY9tb9b82eFjdospTqEbwp2D7",
  "key36": "4u7sNHupAG5njMPqejKFAgYv3f8CysEHtYqUYhvyirjZVGW1SroA2FvDXdbPKik1eZvTvc6ri2aMdW2PHDZSZ7x9",
  "key37": "4mxjZ9iMne39K2zBmzBNgEcEGEbAPc5B7erYfjjUgXrTVzqcZRp86PBAMtRrV3b1RwMFiwQwtTGzMzzAmVfKmJKp",
  "key38": "j55XZsTdfPwjJ5wBbGyLzhGnPfUDC8DGpVtFMFgYkCxikCV19UR79HvusPzCCC6U1P58gz3RchxZKRXidjzJyoN",
  "key39": "54KiRJhwBCs9CKoR5W7psCfGQoXBMUdoy26DSaKN593VQZ8nz6KDGpsSCDt9iGULN2p4MDLNxsy6N4P5xa33sZuw",
  "key40": "4pfNECbPFNgxBpwe1VNghyRDxQjiKXvyRkeodv37DtAiNkSeEp8LMTgLvu96vnbQe29NJbxbZF877QSdqwiWs67Y",
  "key41": "5PPMxvNCYWjyQ56SjN8LPv1fkpiHqDBiU4hTFUHEwMtwiPUKZ55GXgwXbn9MRHtjT9NiAmjvRfLugcST2V73JFWJ",
  "key42": "2hTMJtm9gufvyDdQYFfk8bF2U5nB4L6fAyzT5Tj2gNUAhvJdv5MNBZo8CQsjPTbMcaZ4uXuGQGq66bL9NytQhy9D",
  "key43": "55w6LDZbQ3DVCCzVys2pTnoLsJ62fGRc2zy8kX9LXaXhvoJe4JQyqLr1hpndkp4TZXmUo1o5vduJUkEZnMWAGtzH",
  "key44": "5LXDnFHKLPPh16TyMHVsgdGKnxeVHfGZz7qPw5J59qiaymd5xqfqwXruBD6aZFy2uxdQ9qz57x7hxa2gPXcrQ98p",
  "key45": "hrLASPbM3DkkRJX7M8xAbPsGVCTAYjMZMiRTSWq3a7j1NtM1BaRnibxKYoEQEWyrDLopzLDu3DZfZos1XrCpXty"
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
