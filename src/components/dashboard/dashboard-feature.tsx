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
    "21RueXUbTFUkqbZGyXtMwKSyDFBaqFMgPP5uuNkcS2A54R1rUwnjVaPLZaA2KzHBTYr5fDtjPb853y1EjckWXV8Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L4fkfsqqpovjwjZBcB9jeVEf3vChycrYpLSvguDzBnUN8bVnoiwjScKPkwupYNhSFqGFHhZqrrCdZMWLSb8RjoA",
  "key1": "42eXcBW53sofzW8MkrZPSeEt8CydnAT4wnDHYksgxUtYKmBi2HY8wHh7rE1GwWzhsY98wAaK8JiBhurPyUEZ8qWM",
  "key2": "3we6zdm9CrzQj9BwRqjhozc4dmKcPJMXJMjxctWkbsKbmzBCGz4tPAEPDxx1jdL31phJbqZN7VCR1zYNdU4KgXHr",
  "key3": "2Vzszzb9kBnHeoTcQjrYXfj68TjZPK1XLaxgudFijAMqcSAa5ifwPiDsJ8LVY3NFN96UwV3qqbVKvREad8gWBAk7",
  "key4": "2oXE1qMKu6tK9bVPvpd33phdvZddon7jAGwEaGNoqzRSeXaatmwy7aMCNt7TSmuJ3955X7LBcGjzRASNAt64ZcGY",
  "key5": "Sxx3VSJ6WeWMi7KPLrioAbJiCXxJG7tK9iydCEDDuEQDF8qnun8JTT5vioPjBtJBZVtV5w16K63dCLyoXnV41cy",
  "key6": "47Bo5QiagzvK3AWb79TfbLmsDjKmNTH1aSd9BsXjYE6SEcqivD9p5TbdbGterY1cr4dSzoMP6jhvq3CFueejLpUB",
  "key7": "2qYSokTAcLmp4ejE78dKEZL8SwT4jGYQW5GWjT4fgWa1Y4b3o2ayfwykbFaE4ZRLrVmycA4x7BXqJ3NKwK6inRwR",
  "key8": "pS4xSFbThocsPZjQYB8QMoWJ5afattevPfsnTsv7V9hWVjrFssbh9ap9HXbxaZu6fTz6LTzHyWCWAELqgA1wahL",
  "key9": "4oT8Vu5uA2YxbHLGNeUXd2FV7sjvDEdaRa262TwaKtFSB7qXpQdXJrGG3wJgLFN86MgdCwhgbETjfmuwVTibsDih",
  "key10": "52dnMgyfUo6CVmnyvYCcMAJGMnjF3W2Qfrh9ygHMMrteNxVqv41Lh6hVNnbGgWkEjd54wJ2inSUgPFdYfB6BJrdt",
  "key11": "5m41b8mBAfKa8XMvkH1kjm6E2BLNaSfy6oUqE5YnpPzW89H3QbMn6ArNARytwiVzcV9nXju4ZrktAEPxwHjiYtd",
  "key12": "31ocQTv8xpM5SLQSZV9EuB21Bz17NPDck3Qcr1LD6FzcmYEeCtxpHqUoK9wLVNchC4DFHfGskSFQhwXK74kk5Qev",
  "key13": "5HwJYWAAWADY5R8AbFpY4owDVK62fERf7hR7KR6SPiA5b7vMEpm5fvfLUb6raCuk6eptk6wTtyirWjBBTgZkrTWS",
  "key14": "5EEK55E2E765P1NjGZu8yZi4yTnG5W7A5xEe9J4xTzVXUc3S96dxZJhTruUz5t9zdF9kB1Q1fNNXka4QYdZTH3tz",
  "key15": "5RgQR6oTnfzUV4XrQJNTE3VxF8uWSAK9ZWaoJSQhtMpkJ5YmiHS9dbWqiM1YoYoKid3TjYNAdLejopbdTBfStr4z",
  "key16": "5katq8KAXjUWXsYuoG4Z97jPtVRzY14mvKLuLkCd491XEab3JvYqYZt7jtsrozhckSxPGgyGVT4jyzN6BJznFCHg",
  "key17": "4euTN6oBZco78BPBmkkRArez1wbZBjbRVE7pcEnJZe3yzs65anLe7htkur4pNvWLVWrm1GqpZR67PpbwTL8AfrUP",
  "key18": "2BX2cAkuSvtAqkwBSUATjJ3yFzHgZpwPm4PbQGvzhnCCJuswzmBbXtmfy1TpR8eyfjuiapsC7ch5y3rQbmRwWpi",
  "key19": "2A42LWRycRG6sq2kEKn261huh5jeoygG48stTsyeT6Vr6xe1xnvVy4HcZZY7wxErtCmp6ncgcuDsspXppi6obvmt",
  "key20": "dqdaEANc7p15LCN2o5BCxTxpSoNXaXVofQxGPCZjJxwvWAGVxF3H819PdAU4aGzqL5rMpUKkCEXY2YVYGQ643nX",
  "key21": "5k3dttkbpeGPL1BhBoS26vd9CYhmMToALmf2ypsqgqk4RgSNmMAG6cYeSXPH1zcVk51kS2UmjxtaRcWXLb7mLv8C",
  "key22": "26BDikGWMgZNqAymTPtNhinyR82YAM4cadog7KY2b9FWK91jJR2HEt3Src7Cq1avmFaBPdvAR2Gbx1aapDjUmDZQ",
  "key23": "59A9huC6oVZmURaKVDagbXP6Jgy4eejdzo7vWtYPWj2SEiDuVXTDUeYoxbkaxqzottSnC9dMdYWqR1SQTUkf6fNd",
  "key24": "4tgD7VWjrPbr7zwjwBXvCwdXFVSaiJ8uD6vrW9VejQTpphw9pPEFWtZkRsRTDqEgiZvQpdfByaFDZtwXKAhRgjeH",
  "key25": "3y6zL6fRJc7xYxp9Zpy7ge5M1ENMiQ8Jd9dTfTYMAshxfquFbGwMqdZ7xAVYLBJSs9hMNHD1wWtm1Jm5oCyrmrZJ",
  "key26": "4QzmmAMxsKhxD61J1KKo3g4VehkYXAZrbGoe75jxaQe4Sxz2LMYCVHnay9DSThxwVgPGNB6Bk6WhedtwRHP9HCSY",
  "key27": "3ABuxtZJFGiMYLoVJjnhYeuf1KBWymS9uYtakq3SfZaCBJZhThwLhr8wA4kdVRoRCV9wNf1uycqYkugc2s2YzR3V",
  "key28": "2ifMoPud56VoFJb3SVHgqQhgYhyDsagnmKS3etgjSTBrPUq5J1sLNMx24RqQ9hN8HmTwRe3GsMxrk5qYET2s98eN",
  "key29": "5LHwrRCNaXJvPoeHACzNGCeKvMDcSnxNS2asaC2sEsPrCEkGGxmy4qVADLwj6Sj2NnEQNXc3thvs7qnR3bY4bBjz",
  "key30": "xdCWuMVCwwGLSqS98u4xE88CUdxBDXc72rHgE1BMNpXPVxCRhGy3bYYuid1dzPxMhwLxPj7Pp91VJ5j6C8ng9bu",
  "key31": "2f3nbkAEmkJQgLrB6Zfdqjy8utAzBKTD4jkq55shJh31GS7YMmHLLfEJwyNXGmrrAZwJtnUVyJ8Hm4aKYBQDAow2",
  "key32": "2xxEFgoqRP2xyHKwnQssTgKLjgiTqzYzbUi6hVyiuNN2UaBNMn3sSGAGPRkprfxvQzzWo7TyC9x9bJ4JsEdJ6Qmv",
  "key33": "4GLXq56N3KbTeVxJfgaUyqoK4NJg8fT9KSDp6meBSGBcLthctp29sNezbVigUMzddyGfWX3Hh4fb332h6FcXMNW5",
  "key34": "5Lq6dXhFGU8FGwSkXtSJt6gvHUotzRruqepGdG6wNfSbZHA4rsupSURUNV43Hha9KddwFrcESEipvrBbQvJLQ9Jo",
  "key35": "5Avi7NmdNoYmhZMg4bhufwzJptTPE7cLc1qbNdb5Y11z8bpPWirQH1CMmTpAeCd5SpEmyCpeKpsqVU3j891UFPpW",
  "key36": "5gUeuGanwb7caiifRqBBZPicHZDWSE5HunH298oW73gvZSm8cuZhx1XVJ7hUZzoZM3bwbwWY8fpnYTrs6wT8h1uQ",
  "key37": "2xz8ZVGCgHXKZ3VyYhXWJDxSutkTKgd7pZV4G3d3WmTWMBgpHP1JPL9Lugpq9rhuJFD4jfr5Rc6PTXv88mNhMvwr"
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
