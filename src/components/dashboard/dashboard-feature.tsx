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
    "3xUnreLXvxVGi2ZfNffFZidMbuyYzGirzoADqfoV4rZAcbwDVrpn5nFsmvRnQaTLoeeemaUW1rM69v1PAHrfmW6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62DRLgEbYbP9k51Q5qoZzWGpxkTVGUcTMqPPg3fHQQ2TVCWuFwbjeptPs9fwfMNRmZGnH5RAo232BMhrW9LQtqya",
  "key1": "3bA5q9x44FbKUovhiG4NhSizT59o6oHwuYP65QWodYshCb7mQzd8DZwqQgsddAFJVukPyG51Q9BGumtJw2nZLab9",
  "key2": "3Zob61T8HS3sPUmVGhonW6YN4HZZDQwBGsisWsMo8G3Dr5Wfrhp5SPPK4MhfwcXq5bwtLwLRd51eEbJp19wdsief",
  "key3": "2wm17ZSWNL7av4BKQag2rVQnRasVhd3qpnPomqnPtnVWoRu8iVzxyDfqW3LGcR1pe6LdbrncVXXnuzmLCxqkA7pm",
  "key4": "ZRPkHoRN5Gsq4vKSYNDTeEoJ7PVV6ha1AeU2QTMfwptqkx5cZFJCczP8fhg9zbQpaHr5EbzKYFnMzXeUpcTTBTo",
  "key5": "4opZbDCEPrrCDSMPCcEuhvDtJEmHoJg5HwUUqvAMxRE7ZSrMYZS8p8xQTy6VtwfHPuwmTSs7QDC7wvMvEPx76gSq",
  "key6": "4Q3BHzBKeTsPsPYf5DsUTPLFaysXm6buFdVKVqKu8fcKqSAMr8WDakj4gMDSfMR5mzXqoA571PsM1GSiN7vzvprr",
  "key7": "4Z8n7hQy9pAj1vNQxSUYrr3yRe23GYVboizFRuWWiCzeMHyN68FyNSPVKGdQXGYYxstWApxdLn7WTJGXxoeeYNPG",
  "key8": "3WWSyNPL7GriUnegzcgzJD9WKgjxbz454NwQ9UNZjyCndQajh1cxBJFq7yyMynx62NXCEjdJFc6D3GXA5gjg19KJ",
  "key9": "5Ni8XgFJp5SsKgeuBR4epeATNJDEP4DcZLCY6rd2TDuZWwqFjmueKYLKKYoKpmnWckwgrzectsxhcxjwWPNVdMfV",
  "key10": "5ShuTiL45j7CDvRCzmXNm7t8JUdn64KfwFENhcAQfDDtHHcTgcUyuWXYKWbAsy6BLFeUXWyqcWTByn1bmd8LePFG",
  "key11": "3mzD5ooe2ypARwHwm3ADKmV6UoFkRaydWWYaXTCw6XGL6sebzxxK2WHrgxmhDmX6XkXCWvkL7C7viAqTnAeVhYvL",
  "key12": "2zaFPjgV5RwaitPrsRWkumXsRTACAcNTFGvZ1ATDKaZkGbL9jtNzfryp9LuGC9RzRCKfxD3gGadbKPhFfVj2Ynzx",
  "key13": "64pTa72bWHoc76nBSjBxA5pCAv8QC6JcR6MohGbboXKfYzW8f7wGCZNc1zwpZQt2sizgxVdRHFgJAkXSVZEscjkx",
  "key14": "fjewASbvwfBnHFhHxNL2u4qmQG8rdgcidctV2fVZxx8fUw4K9RnV9zGV2LSvK4WKrXKNpGbntt9f4k5D1ja1tLa",
  "key15": "4Hz4QAkM6bWpDotd4y5a9esNz8MKzfP3Kbw6oHWE9x5o6kwzMKsNuvSxMpRTqBWHA4rwzXnW81P4neoTqGPX7LxW",
  "key16": "65Sjtcn1hmGETHadJGHrSTvJz8bUxYQMuM7sMQraBfhkvNTzRf4LNbUDBPFETxktrHbZNwfJYEWmk6r5Aypo48La",
  "key17": "xyoyy1xZrgDKR6dWMjqsvLBJ4AEdkVsDg8gdyW1DwRL5qnMjrPQfcahwK6ivLe25SLBGo88U7wPZjAqSM9hJvUi",
  "key18": "37bEwLUEd78WMMUGwWZ7FD7cm3FFW3rmHHuiZULut3Js7HRmcRPyUrg7oFDSSoXtgPnbdpnz4e9kLc8eWhASbGne",
  "key19": "2gtsW5kBKMD4kcnyu5mEhuv5VVo4hLXq5P6XbFcnXWWYz2wwCX4E8HsiaVCmKnhzYzwW4tDBhfB3MiaNFbhEAAXF",
  "key20": "2iK5Pi9tUjjcqW8wk921ttHzwLWRWsY54ftPvpDiVFMqkzPJNYa65SQniKvpjafp6WWqqGnZGKnd82jvumG3XDcQ",
  "key21": "9LrMJuFtCWammob8ceENPUyeb6dxmY27Px7rGuwLdzV3ftWNSy7kUevPMAjsye62nkYssGbJorQch5SrS9PmkD3",
  "key22": "2rHXD1urgCT6XSs1svFjRTaPzs9MVKGY3GuJ4NVkpUSCMh3TPmiqG3Mr3gjKxXCTGVzvWnCCrjEb6x1oFAy9kWD8",
  "key23": "4T4rf4HUDe12jZVwv6HER47sMG6w9ThH1kDKmVxFZwHeb4fuQjbt8XCV7dS42L7CeUM3n2KZaZkwTnKuMJA3hM4E",
  "key24": "5G4m8H6N7mdv9hVfPY9SAcETfda7VtgcZvKV4it3NHWj6248xe9YZerGdgaKM5rAzwYv3fpvKDBCVU6QkQKmYrMx",
  "key25": "4mycHXRScxWfRarUZc2Hdk2ZkzSbtfbafprr7mwkmRHsuqg5UuZjTJN5XBGkMqSJFPbEwnDZbMVax6Wj8DH2swdZ"
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
