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
    "6FfXgKaTnDggcEHXSZwQcyhsS4SVmFceVRipgjdGXog846pXyT7daK2wUGqiHoAMYqguAWgwS6ZLXXgkqikbU47"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HzZYw7onFXziyGxoYPrGM3izn8NXLFB5mZXfHUSg3eRqu7VDYPLrkhn3kA2gdrrhj8YsyofXXfS7LjDVLJJ4qa7",
  "key1": "2as1jwGSzFVr7jWkSsGYNRfKQFcYw7SfjxCQK2jfQirM5Aww8fJRk2Qzr8YkK16V1bpVfFhBJgKNLryJWDdSZSHV",
  "key2": "3grwrWBpHyQppYKsQsxhimK9X5yvWqXrKMyPPT3TpCXyjvBqTVMoaegFgkEbhWyPaWzyioLWqT8avckUqhdCJ6Vj",
  "key3": "63tjHLC1WL2jLr357cdHo3z7tbJTYvAvS2SAbAWq4xWVLvT8uWBUByQyjSXf4LRoZxg9iNBWyQcGY3UWqpCx4GWU",
  "key4": "deaj41baujc52XeJs6a1R71t3kT98qEMWFygZdBoFSg3hLrDHvBAMfRk9B88Nj2jpxDc3FKNQ7zdnzGX1qbAB1Y",
  "key5": "2syT5ekJqPyDZrstxNELQRcX188uPKXizKAh3CijWTSmmVgmcK8cvxQzTm6ee8ecCDx63YfE6m3rrD1J4nu8Xuns",
  "key6": "4w8Wh9zbpp5Vb5LohmCVTQG8GmDfSQNtvp7jbsjAUZg4snnw4wdhA98jTZxnG9MBe9NvNJWCgyiUKkXacYmauJJN",
  "key7": "3NC42j1ovLrD6hzorNcw7aUZq8X21VtRs3iWHdUrK1o6duYvXy4ah7sjUu6HFHeZbnj8hMqLYbP61FJfhbTRFGbb",
  "key8": "3L1USu7x19BrLaawimJFEJ2dPTtmHzdRYTwQ8Wa6c8b4npRmzAV4NGFta6kWknDJsPbffZTQLoD5TKYLJcXrhjaR",
  "key9": "3rUBL16Hu1MbDaf2HGPWZt97ZsuJSxkwSBypknzqYgTrnLYZfB2Ltyc5cM8PSvX4K3gcqXDuKwPoUXR2J9uM8caU",
  "key10": "2aYmpRUbaq9mUTDtrbXPBY7gGWqVzcKvZs6QxGtZAb3VywmMtw4MUVrLsT17c89xZAJdbZzAGK3PdoupVpSG7gKg",
  "key11": "5TZhXvdX56czgtWLRDswdQCUiErZW1ykzaoRJ7Q6ibKTXsHZLu3cCbm52u4yrqSxtixsPmcqWed71A3pPdNMkRw",
  "key12": "4P8mRHdVpVcTN8r9eqx16sPAcWBuExBm3yn35ZtseSMrTPT8eozxbjfwQtM3ry3rZbSYPpQzV5XHUEuGZSwtedhL",
  "key13": "5Tah4SJFgEDmfNV8zzf2XPfS7VBApbQzjNUv4KUbWj95WK6s3wSQapLKbGypXou33SPQzcgpSAcFt3eSatWiu7Ef",
  "key14": "RZi9UbRwpKhZkXrnAjhdZHToGkxuRnpJUTCbKX12ioKewmdjNnBkLbPwCwq963TpaKFVnsspXVuhmHi2nTYxjov",
  "key15": "Pua237wVw89taozM7J9JC7HuH6EKbXQ9AJ7R6uriMimwGDjJtxAMu93bWFennvVU5dcrx1Uc9oFdaPS3yzXYsAr",
  "key16": "5AiHpLtryEehVM4r5wBpa9ZJPEfuDJEBwe3CoYgKCAFwj6NCXsy4nKWR2wSm3SmNc2McepKytoR1A7M4GExdbJ6",
  "key17": "3rMtKScAELou4ZZaqCQNsfVJiRfpbRXCRfWYqapQTX9b9Hg5SBZ3bnA2o1Wxbm1dVQEBwV4WnPJRbRK4TYBihcpH",
  "key18": "5C6djPYz2ZaZZ7fWj91kkr6mnJWsBjj4ymMv7GmmBrMU6viDn86JSJ61cfHVKTBMLd6sNKV3qmSQNXMCsg9E5wQo",
  "key19": "Vs4My9RrNRzX2F2JzHMcRoQyBiGYsvpTH5Scbd47QRvYmP1RfiUrpDTWGP9ApiAm7EidDWfNgMj4K5vcxv9RfwK",
  "key20": "47XGDaQ7rrMCRYXfUNWDbP7guAff6pBQ4mhiAMRCtRpsiRgPR4FGHAdwWEj7qrQf1T7HUmdMVx5tvK3QsaHGdQX6",
  "key21": "5wWbXANK1nuSoJJGaY3oStzkdcfhU6GJ3nPGsH2Eyi1ESR65Si5A7EzWokd8VG27Q7KiRCFACawRDCjdoWZrbAtM",
  "key22": "4iAAcDh7FAY394qWohEtP3UEAbbmQYH9wzeWveQEYKd6fvJTHQBuspsJi8KE4o1q1MHG5hRkAkw2XhKbK43Q6T84",
  "key23": "58i71AXwjupFjak3URMDzFhy8REMMVg9EsCHgdea1cZNGYW7uftpnnGv8eqSxqZAaBvgLGBBYhMsaZp52uWk13JD",
  "key24": "t32NiVLmN1jagfd2BFJzyxHt7mGjrq8mSwvH2FqLjoSmUA16cYekpEvjACy2NSPttsNx69znpACj1rh1rf9qxxA",
  "key25": "6sTT9mhioid6C4sFJZshHFDwaGWw5pxq6qLAnswt7Uib9Si1uB37jtVmqHZnDyi6G9xMBisDCxmPHDZiiSY8rLR",
  "key26": "4xu7PFekFwXxVf1zGyL77iS4iJu7ipFftnYgaZhyvc2i1MmhuaNhFCPdx9fFDyM5AY7Lt6YAfHfnLcgerK3LnvW4",
  "key27": "wKDUSvNdNAo4J8ZNCm2Kwg3TkrhpWtpUNbqjB3EhWYMzq6LwcdKMYkAdKuEvC8Ugmzk2eEtKFya1s2tdq3Y3pE5",
  "key28": "66NMKsDMGvxSVsa6SWbHFRKkpTcgqCK14EJUEW9PU2i8phUWYcNZSVhaC7Y1SXSZL3o7C6A6hNCmaBWNDnoRJyKM",
  "key29": "46G1vbmZWoLvYJGFKVnE8ak6tcahBW3266rpc86Uk9EGRR73ggpjYBprMraxpTpHAYzXiMmrRoJiGGmzdyt2t5Ph",
  "key30": "1JfbiHraL7374iTroFR6szMsynZRE6pc2QrNQe9BQJknhygycFxJj1CapuQqfH96N7kuYKEmjhJcj8akYRH6EEf",
  "key31": "2tfVyjUxBRps6McCXPWMuZUNu7iRKmEtrVSsfTweer88U1mDVEmJtsT6QYJHobYE7tTXPP7K9uBpE1cVQ1grc3PS",
  "key32": "2mWx9JBGCywebjL8N9KgzyEVgHDZFPJ1ei3XHkGKbWDut5M6r2eHd5QAPRmaYfD44KY7MuqJ2FFevUSGZFnKj6xX",
  "key33": "4JnPiy5HiCbFMMnRHEEXqkHqufbf6HB11Buk5nzDmQ1AMevjgi6J7jQCz9hw7S3s3gpKUUFhSoZP88rxVic1MXAU",
  "key34": "2kZFY23v3Yv2h36zkBizuiArvQXc1wXcmAEq3wZ3WyFvmyypqeibFf3oCoCPtP6WnhqSzJU9HgmVV7sMzrUyvAcL",
  "key35": "dHpx2xnxWhaAVC4USwgExGYMJrbcgji2wga7GY8fXB3psgoB6rS9uvqyfS1rbf7kqgvwrCx5pbAGwCGJWiijGjt",
  "key36": "4qV6ysCAJezE6cjZng3c7kijfaCnEQMJET2WkwLrkqUYsVKH5QgLUPmYtV5i5k7mubZaHqdWFbFnKRfMnSpxjtP2"
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
