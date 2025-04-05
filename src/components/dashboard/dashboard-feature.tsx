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
    "4D2UCQoypabeUYCvKzUVEnegxyYj5DgAHDtVVsWAQEyZNYak9ALSH1kU6A917SDunDbDohXZpAezyTLNFN2RJGZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34C4azSSi5emsAsyyrABp7ftDKyNHL3B4ifLjyoqjvZcxf9d3coQX3Vi6tMyrJ848kAqd6CwYBWeYWABDw4EMbp7",
  "key1": "3jNNi1XHEmXZxMp4rA8XCUvEvtUGWCYU5WKyXKkp2s7Qg3n3nx1EwbgBdrPtbNYgCHwudgu29isAhQj8JWMVm464",
  "key2": "4J5NrWtG7iYVkk8iLmMkr6b7yBsMRanmME3cvi4b8RZCYbrpd18PQCpYXHgLRBNcVmaRK8eHsrrTARuzEmYuGL8k",
  "key3": "5WA1r21pxM8xBufYJ9Qk6JDtLktkFZ92QzurtY1scSS3JB8ceeh18bpdfrQ3Kirw7vFYbG4K5KgRkqhpArEAUG1q",
  "key4": "2NAnF6AysrrgvbKSk8kQKBMNoq5s7gUiwMubzD5Gxdx64mWWoYmYYKnAgxAKBndMxEACCVKFtCwpY3MGDCXjAtgk",
  "key5": "A9bBsA3gan1gCxHU7Qz42fSEVSWobiC9NnM6ionmXcExumYoXeF3SYXDRD4o5YcbCLNVHhHiafFosMadz6cXK3K",
  "key6": "3FmCSEm2FYNRQnGrWKxhQmRWg9VwvCXfkvuNLFTDRMnYV53ReK1k5B1m4n9V81zw9hSiPDfdV3aKGhaNXj3g7zdq",
  "key7": "Vd4CfJcM4EghccVaqwkJtbm7eSqbxuVNrnVtWjDbPZzNcwzeTtCpJRx2STxGBY6sbcoT8WmrvuG1y7hFdKXbqou",
  "key8": "66d7oma19FhGjRUiMuGca6JMNyCmehSkvdDtYBwLNHK9dA2rWwVZLqqYrsC6W7H6osDCk5TkorXBDNvwnjQjiJnx",
  "key9": "r23xSL2ToCQ2NJc4G9HKa7wHfUABukGiuEkxqJh38XgPYhe3TF67mksVNjGCNtH7A34sBydzxSrxDSEScsqzD9v",
  "key10": "5XhpmRpoxg6vYoNcYJ9Gwp5X8cT1WTTN5EBsg2kurSPbAksgtSLdUygpJ8CntrMUnsxx1gFmDLD3bZrfqWFSRU3N",
  "key11": "4kBgdtrwtM2oHGjRRQGjfC7f9MWtfeVtNNUT1MBzrHerqJdtrFmg5GkRWbM8gs77ycaqVbughBrPMe1HzPJSWhPr",
  "key12": "5guCendM6qtWGe9h6q3N44L2NTa1njycR6fxoWh7uadEq2ETgbZHMosjLAGP6VPygCLAXoB1JV8E3W9thR8Qbw4k",
  "key13": "2N5sf4Ep5HtAnW99k8QiqUxxP17jyFkoQApNF9P3R3DjJoPubup1aZy94GWZ82hjhuzEdSzF4qWee88VdL3cdeoy",
  "key14": "2vqcU65A2jJ3HjN6r3kmcLmjyECWT9K9nZP44JrJzyUjuQq3mYBQZNJV1sTuvi9etQYEcmFzNRrrZy3mkQvfAqxM",
  "key15": "2cMouvmH9jAhiCdA41cyRcsCHgvWYdDsb1JrogDreZnNey5QTb8WtsbTjVBwLGdtSzo4Edg9xKJUGYNKsfAdxKyd",
  "key16": "3GCtPaVYUp4aQv85JZjWJGimfPticLT3NgVgnZVAd7AWcZCWnvpVmc77LSx97Cx3qnjXd6NaMsNugvf24BCrGQCE",
  "key17": "25oEe4WU49mc3DRw9vHs9ud5kfiL4k9KhjWMYQSvGjCze3PkMUFxQtvUcFayCZ4tCW5BrNfPZ6LXHBsbPhqHeAnp",
  "key18": "3eyBntiBcQJ7fTjQikLoPAECMEMiC3zQ8Q8V31RMiLTuKN6v4tj3JwPnnpi8zSjX5GzaXrD6WDNYULj5M9FXRcH2",
  "key19": "3ebwUjw6VB4cADgFFP1r5jpz3TZuhcjB4osdsPvjkgsFq267QuZf13KTxLrm85fMgWMr6XUagtyks2VoaC9r4JzN",
  "key20": "3Y5Ni5QxubEZVWahLuy34P37whrzVEYZL6Jb2RKVEGMPKceX6wPD567Qq5LAGTrMCCmrND682NFMA5NqJGsEC4Z5",
  "key21": "RBrJmSvQZ3JQHkgpjYsZ3m5xEoQSVW8tF89KYyvBQB8CdyV2uUBDSeE5bo7o1P2j6ohYYAmZY1qVmcT2KWqMFuG",
  "key22": "3Jx6Wu9CfLomqnHj7w6i4wjFuXuWYdYBWwZdGKpAougJ8HhfpZ2YmYw1n1irBitarpXitVQRgks4Ea24vtTkU3g9",
  "key23": "2p9FUFW8CZfHPUG13i74FdWSJitA1Hqd7uqvsywKjRPEokhx12dWYpW7Ei9QU8PQy5kmVGn8waSBVdXrHSeiznF6",
  "key24": "4sfrid7f2qtKDgttZyYgXdVLCdCAzqifXLRuzkEk3QcenJEoaqbj9T8eyKCpAs7XE4EVUCXTKNZpKEx2Ddk82BKV",
  "key25": "5h3M7GZAPMczQWLoHyyhHbYiBrraW5g4WLyaXRx8qMEHS1LpeUDazVzdpzjyGJ6zHDQJ69askcjEDhNDhnrP5As7",
  "key26": "43bLNRCLDSgYSKS1rCmnV2tzBVvVdUQmp6BZvsDQ2WpDvQEboEJrak1jZwoMZg95AdT7X8CNvTrtP7i1zrURvHEh",
  "key27": "2MHVxiH8fYj5DuxCejKRj7Meo4NLZyiQ5RKaKRUT3P3mMc73cPVwiSyugDcxXE9WniFacEBT3RaMz9hqkEeMdcN7",
  "key28": "5vTfsGhSNN9Lqu9A1TNRXNnuhFziaj367hTJRBM9FGdNwbPP3c6ZgFHciw2zY1tDR435sUCSh1He3ohP58bV7gJg",
  "key29": "2F9cX7gY6PCT2T7LMZYoLxauWYgUjBWXYXRsTbpUNvNMsYBPbENu5Xq9NiexxhntQmLXGUjPxb9EJwfA3gdp4Aws",
  "key30": "4YEZg9SszKSAyJT3uE3qCCfRFdQqTsnpxbeaJkHKoZHf8qX5ippRtxVGz3NFUJLVywNz6W4Biju2E13hNkg9hi4s",
  "key31": "46Cz1W8gZZv8jDYDhuauTZjaibmwYJ7pPcRsz9G3uF9iCysXbzcdky7bY8wtchvXbT2TFfNa4uvBR7ZaMJ5ERs26",
  "key32": "4EA4h8SZNuthZgzCabrt5hx4UvqgP9WxjKbQh2wbXdVtrtV4AoJJqjkDhpgdA2h3sofY2cdULbXx2XndxXtzMCPZ",
  "key33": "5Cf1vr6px6LbMT1VAp35nsSXACngi2ok4muCa6hEgAFWd86jeyVhTnAoj1pRXPHYwEcHj7CfdQikxqzdrngxZWNJ",
  "key34": "64imFUMFXTi3wzMGEXuqFdTnQNe3D6L56gSDN5JUShwj4fo8KkSy3g2nSrBek9zPUTksqbx25ND2ZbZPrF1ZWTvo",
  "key35": "3CGvi4vQqQXsBksCzNpaUtrj588Ycc1YiZKb1DfLGhqAWevgtcrCkGGT7NB9iaDzwnbqiUBPVP6s89qNzNoQVSbF",
  "key36": "oLyFQZdqYCWge5MDupxr4yUugWLpbXiRtrHff2PVo3J4H6PuT49RZRLV4DoAGTmYCCLp3mbYEfowk8QKimE5gkj",
  "key37": "5bCEzc3EWiUp9ub7z9TcEPGzjoBuNJdtehQLzgBhPyEBcKjvVWSyZQ16At7NmU9fS4dQ8rGE6Fqg3aoiLix7BpwU",
  "key38": "4MF4fNHcVsSSi5PwQE41Z7wFWb3MtUtSc7b9ikVs2eNmnStXJx6Gz2Co1zsrYW2VEBQcLitPJaXUgUddHxMooKa8"
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
