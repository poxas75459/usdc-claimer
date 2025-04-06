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
    "53o28qwTDGNWNLgNcnagsTt2L2y6EbU1EpTu6zZPTmiezGcoirMhCTpbszZEUmbDrEG7Tf4sivWhJYCWwzujAw4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yFvwkbwmSmtC4QAUghzc3kY9qj1FWLZmGkAdE4B2MmdKouHhQJGkxQdgy7MTznQguoxunZurE6TvZidVPZR2ivf",
  "key1": "3xjrGvL4taFKchBdxAGcbyBwkD7PKgxccXABVXbQajdov3qgtcPRQNqWvVtK6koKPLD3R9BprJtDcCwLLuQNTPHd",
  "key2": "5E4kk16HK6T96BvK2SrGJqLcQTNuM7BU5SeNwBeARMtNLzJE8F7vh3panYuMmQm8wZknvfcS5Cg7tpnzSpF1Negn",
  "key3": "46KYXX8yubF9PRrUsfgcrkarVakir65PDQ2unqCfWouuxjjWafTBX1H96SRD8r2FDFHUTqL65NfNrq9VULat9DKB",
  "key4": "4fuhTNyDg2HUtrK5r3bQMzhhQmZwHLwr9FEA54NjP4GSUfywAQaQntT4ef1vWKvGQHtAMjim6jMML2DuCcZvpuNa",
  "key5": "2G2G2gwKyRc23cBEudnawPae299UbHzJbg9WZ2ZyAanbkXtVXUphwpcbuNRrd4LXiheA4hAqUpVp9XwNwc7FpCaF",
  "key6": "2DJPkKMnE7wyxGLRDQ5MkvU4pYk1Dmo4isyAgvXdQguYbAEbdebzrHcrbzdAT1LgzvJ8M37uDXm3TfC1i5tSDjZa",
  "key7": "5nou6E1bjFoDozq1uiNX4zcCdPy3T6wJpJtmiusnKuDAT5FJkaCZHeU1cBSNqwTd8STFK4zzahvWWyyySNWGaaYE",
  "key8": "2769pV7BdRobjVL7m5kTMNo8QeQepdsuBwXcV9aFAoWGzw6AhnLbafYwWqvxymWwq9g9J2qMPC5jFP9GyGu73x5r",
  "key9": "7PqBJi8x5HogaSnN1FPDeCfXigySLELzi35AN92tscc5n2LNPwXQgj3nEY47FjNtAmzTq6f81REauWKp5C2Aepv",
  "key10": "2BVrEFmLJf9Q4174DP7KaSKHaAb6WxwbSzrqDTGSqTEM1S1nZbvmRCXyn2N3dyf1WJ4KyGLZQ8YzZDLCDBi5dswZ",
  "key11": "2ugTyrW6VUaMxFavsFwPPnSLCe3daH5CxuneJm7rSxSTmiUs8wSVptBANpecf3QRCrSppcwCATR8Po35fK7DnRqd",
  "key12": "4c8Gzywi4VaE4uaZtvzcgpKLuYhXwBfJuk4xq1c6MgbpUEEu7m2cVxm2gvyXFMTcGnr2qscf84TGHbozHDfmPiUT",
  "key13": "5nHJr37uQckrg2YCafYQhTorZnrFbs2WqiAX2fP9B8u3MqnBBhceBTFkeYFh1VGwzMVurqUwhvBc4bF8szrCma1b",
  "key14": "6DB7bGJEx6WRn7zjXrb81xdeP1ZjyfTCigP5hTN7TvUDuPAXkVVVRvxH9zYsSoNDJC8ZhGqeSFZCwh1RyeYLH7D",
  "key15": "4JWKbm3kbw8yg2hgALQYZ3JzinEKfHP4FKVA3TBbNkmMKq19wnuYXeVcAfNyy2cZXLSxvV25jDzkbzyxEZQR12p8",
  "key16": "2uwdKGxSu6kGi6QPhLm2Ln2KntnBcadLMTnPStFFGh1etnuxqBFqm8Wq4aoDYvPdCohVDZTW8ATYRWT9GhWgNLzF",
  "key17": "w26y9o1toMsmad7fX4T3PBPmZDhup2SyWaHXkJhYH2WPTDuPJzffJEVWcucLqWmcgPcZZS5VBeVjhwaihHumGst",
  "key18": "462SLxF7WozDzymTCRnmpJEqqgpagKqGMy4sRCmEJzjcFw1x6b4v3gWUhik77Z6nQ543BRsjZPbWXxRm2dY5nB7c",
  "key19": "3jy9znF14z3quP2Y4U6YrtsoFtCUdqSbmZrBU9b9wMFPrrNViBUEACzRmgjSdCqurSj1iCeHNbLVQk94iVRgyf3J",
  "key20": "733h4FRbjpUngVDkciFgAh8vozWcuW15jZYpJs5yWtv3mZHcz5opxkgX73GuoWqaKbQA5h4J3m6KiZGLNCmntT5",
  "key21": "2mmqwWbB5gugpV11uuW9KMYAXYsCN3vcnYqHTUjXKpocXGCcikDtuEPXugL3pdV9aYvF8Xmd96z38JUfKar77vc1",
  "key22": "5TrHijBb2pySLpgQwPLwUjfGywEpPhp4SJfNsbamjKmDnaE4u1NbaFrYnX6f6DCb7KTuQFo15mmR5ihxmhuZZB5d",
  "key23": "4UGY8ir3nvN1dbd2KMrvYPjAujbB7tKjnAzYx3rrtURTi79GFT5PkL7bQJZEQraMfdw6NPFi4W4UqiTH9SCdBiHu",
  "key24": "5fHdwS31VsD6vzqwQA5Ctxg6ejKCyF7RZyJkvXVVT7rrphdMVZWPUwPVb1LnsrVnbX7snB5KSY96WaXXaF5bq8Vd",
  "key25": "2x86zAgPSUcSgE4g6WxzKHr7NaDCVF2aWdKa88nAGnEYavAU3dnq91TGBgobiMfR1cXHT8aSmpPzp56BndFvMbZP",
  "key26": "5z1mBL7jh5HXek7WHiNUcjS6n7ouySAhfoUTNwPSmMUYimrh22Edd5BAA964b5yuze62zSUfnycnfTZgCGBupyaL",
  "key27": "67ht5S4jwVptc5Mhhgs1Cay6jeRmcDUF1mddSYx4ncunNDD482k7VF2bxBCfYV8gXyrEbuyWeHu92tsxSbEe3Bz6",
  "key28": "2Np6qbcJdG3fc3Fee6DpwcoaCkAWnHNg7UB81pGNrRUi199wYbqdXrbM4cLtRW9YhNSRDZUumfHawbBpxwKj9XP5",
  "key29": "2tMpUfp7TaqLNaNzamQTcxSnw3qDVhN92NRBT1NbZDG2cxahnkFJ6nM59qyorT8xsapmU4mzfgfLBxGG3jL1DY7R",
  "key30": "53ZtrgA3oS9UMxQGyUw3FPykXyrz4LzTq8ExsSxEANyJtYjh6abkXjXr4Q1WS2bCXLP8J2hCpQy79AJJBqs6Mj64",
  "key31": "4vXKVJzwnFhDzfGUuQFAhXp9JZu76UARarY237kYZFx4ph1fKev5EWBTQSTf4D6rGnJAZD8AZxW5waQ8FUPJtTra"
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
