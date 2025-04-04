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
    "5pRpMch12KpRAaVbnGinoZ3kUc1ZhatGKc1j6PdbQdod2tP724kYmVZRPDR1YzdAHHANTDW7Cz8zJoQ1mVy1cDgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "czJvnvbXbakAr9B5y8vfWEbFCytoW7PE9Ffi31sm1mMmeESqbdhp9Kav8ucq1irwhAqaViu4MawucasxR4GqwvW",
  "key1": "XeezH3BCQPoakUzWbmom8n2Qu1YmJpegSWfVjGnzciFcKNXdd79nWo46hHb9kgBZy8gkfJKvdQuHFN4QxDsVEmg",
  "key2": "3heEo9JUgLixzG6qZzpkBfduMJwcfDC5c2vwZaFMBZ7eLKtimSkuZNcLaFyC4jEHzJkam2UUWFjync1pQoxCbN2f",
  "key3": "591RGJpDDFtedzhfvCytD1VxLNPYvavhWwq2T3f7taogq5tKyqanjSgRZaw7EZjUtQjZLXNwqhaMkPAp3n6W9BzS",
  "key4": "38JhAMbYRGpiaeJnVNc8o7NaAuTVwTBkY7JJfuvygoBDNu94mktZzxf3J1Ao9jR9JX1cRYJZm4qRyCz9BvDfwZUV",
  "key5": "2HWKwDJLpDqFRq8boB6JTPP76abTvZ5nRWaLozrwQuGJ2QzNqfpTZusA6rPt9AdiyGpdCiSdHjGDwxWtv2cTtLaE",
  "key6": "3pFLm6CfLtNQZKTvuMkXRBues1wPjJ5SXmzkAWsMyKaANC4d54ePWaGhYyWQ44Fvfzi4iiTaSkzDpgbKYeEmKSxW",
  "key7": "2Zj4KUbLvs7VX2FVe3UvSQkwgoXz2omjGk32VCuA4Uub14jemtHjZPPLuhtPBm7sak1mfQZA2iz3MpYZshiXcRAe",
  "key8": "48ENQcbK9bq7UkHkBiNxuLbMpVnd6XvC3RgmuBgirKHHP2rBueSGRuZ58d5g17ofR2C3dNgjf9krmHL2kojLjbjx",
  "key9": "3RMnMiBKcXrBR8yyiJDv3eZFd6in6xfToZkUsW1UWHiWkbEFsdC8GGmWqzpKnPfydywQ9bkngkGbb5Z9sToLoNBj",
  "key10": "4doNCpuQKD9Wfv8Esx5vroh5gjyyL8NFNT7CY1WgB1G379ubFM2kv6MhrNe2ufBvyJsj5o53wWVbDuvtLDk8Dr2J",
  "key11": "4MACTLBKqdMpaEXgW37HMz1wqn3MqM23kFCRovBVh1Utecgu6YoVg9G44N1gSaJC9vEJioZcA16B3wxCmH73d5eA",
  "key12": "3N93RNhyZ3K8CdYWAhbV8fYkbFjFLzwvZ2KB4mnYv71HJ6sFiC9za84KrYaXTtqcvKNAYnzpdoJ1JtJSb9MbnEs2",
  "key13": "2YkR29Wd9KKTuic1aaZEGmVgxZHFKU2ppihtbkfvPHUd4BcVEY392HxZSHUpHfHdoFHWpWJhPC7e1bHpkfw5aYXD",
  "key14": "5ddNJ4dYWU4bP75ZPLTJayAL5a4s22P5r32wxaC9BeTKcuwgJod3VtjMPBz3yzt6Yj3j91qEfEDd4LYeY7EKt62F",
  "key15": "4BjTWNcTPWhuJFspFT9mQRS8g7kLWFbkfZYNJ85na9UbjhgfYF7hLwYkNNHMEMxm74y3pPCGXev1mrL1dsRBb9Cm",
  "key16": "4X3nQDUi87YmnNcyJyCtwfcnjbmMXPCrEtyJFcurGTrek77VkX2tq8MHY591wGoEEKuLzAY1h1R86Vxmch3xsQSb",
  "key17": "3KchM8TQRQw2X4cRNXphxfWBR85325JQZdZmUW994rVkKxRAmfRpoQZgtDjfoxToWkJNXSHtXRREPUcYS6t61e3J",
  "key18": "3PyHMp9tvhf7uF78uQkJkPXhenc3QKUUrLCbFio6K6xBiJBwyskCDipnzWcotwaShHwUUVsajzrWLn5vVMXiYXLW",
  "key19": "4K7bGZBZMy8R6NT4HDMYUFXPmkVr1dtvYv8m1zY7XV9vSHBUGntcns2ksAVzBjaJQzspWA31SF3QxQw1iBo2toU5",
  "key20": "3sd7cin9kMVUhRETSPn3PwoQveMWyba47nwE2LdaXtNwafE6LPvaC5AnqsqPRPvCHcw28o8pDN66hStDncFsYPdi",
  "key21": "2BruhbnX1We2Ep4mkSAHbtRzuFr5dV2f1G5EovYXWhLSDuCQgzyoFw2bGrcM6R8WK5ewqU7aQQ3pr538RWN3qvKt",
  "key22": "571ZrVkmBmCTNFRVLaJrhJ7KeCedDSoJkfHDzUzpdwDS6CuXZWGgAoZevp8VVfV6riiAvE1L9CYAU6jY8ojPsBnB",
  "key23": "2RXkkjFHA4xU2qyCh6CCa1k9dM7cQkR8Tq5ycjuKuwQiE7EWQYpiHrLeStoWW337uRvoGyHAv2BVhb47qgV1QvT3",
  "key24": "2RDNt7YQ5cb1P4w3YccrvT6utdQaS6HCsSnzhqn1NZ5yH1stQuSGLcVNWNoYbHLjNx4CVo7mYCueyWkUJd3YF6qr",
  "key25": "3PSCmkFSDQ65PGY4QAmj9eu8FVccwGUw2eLsppkGuDpM7KDrTRWAo31Lz5Qio7gbkF9WjEw21T5n8szLdbpHovED",
  "key26": "2LX6er9PcNZSNRapPh6vBNGmz21vtL75vx3zpebNL4NHYQwBA5ksx9crzLmF6HyLFL5hhFjsV4eGmzxUnYQVuuPK",
  "key27": "3ywH7SzZwYGLoKSw4X7LwjFbX9GZbdUoTPLM5JJ9HYfPpM9sdoFAw1A9KnAYAJ9exetjBapgZGkbwEd61vFBBriQ",
  "key28": "2eatFrNxcx4316PUUWSx9nwsiUAi3h3sC1zUWGUChFLw8CksHMKSiJYCWiMD7nnrs8pPoxRPMt2JACe6ZRqry8hC",
  "key29": "2hoMUVJVUqjsRZVKtns8kF86SGssJMwsp9WmksKh9fctjJFTTyJATL2UsUFaBWEsbnHnDw59hbMNqA69dhomLJvy",
  "key30": "3cvnNt1jbEZPF4CBsA175bzT9t4FS4C8URi7ev3HrCyu5aYzzB5d4UdT7rfMXQWGctFnMP1eVrznRaAGN1ebDaL7",
  "key31": "4YDCF2QmbgJSQf8nUvfHL2XetZad6YPRVMf3JngMVLeReo1t4xtinHPcYFWz2xxPHN6KXatEUDfXY3jNoKpTWWDd"
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
