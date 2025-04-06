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
    "63S4D8nxz66dGLhfQxCqtsZCxZ6vutQES7WEa7x4r5LasfV66ZoPh1q8BTAm7bNF4bmpPnkgasmdbMTZSaTjMHRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y5WMc1v7bEKz521TKzSUKT3Exjm752yKou7g8wmaNpvFTweD9a6qN64i7Ke83qAq6sTPtTjXtAjXHsVnTVaT4dQ",
  "key1": "5PmVMSpMWJ5mVUTpxx2RfriHKTVVeXN75qFyywNBJWyFDcy4Dsd29wcVvatAa5eQHFaaSb1WE1xDGQRAu5eBgYkq",
  "key2": "2c6q56CT4Cmnj5Xb4NEfcCqMonYRsJdumEQoP4s5LTtm9eqvVUek4rxJxVHbgG2f1BFX97WoghDQ1Kd3ALoho4vA",
  "key3": "3x9it79Nb7vzqoRA6wZL2KLT8oCDDW7nMZ6iCRxkwR45EPPDyEijbJ6275zVjDfQiDvtBnkjDHyCU6XLZnnANKoo",
  "key4": "ApLk1ivQw6sT9HhYnUSCdQ8w4zNNecQF17wBvun4Q5N3mR8572SzHznTTkjPA4ju5SDyuqZNSxVVP3EjkDEbCEE",
  "key5": "5Z7advSRYseMcNxDr8R3rbZ9os8xKakfBKZhv9g3sdroJqLUgL4HGm2VpHbjQLf6W4xsQzsNpG4Cp9zBdTRF8pMp",
  "key6": "3bRQ8jb3PLNRyDEGQ7s4JUV7wbtStVigG9WpkwmXgNyg6ivKsbcb9gauHSQTmq7pBztQRyRzGVEDMjqMkgzvzkD2",
  "key7": "2ZXQUMw8zexP7btrVHYMCUiVRyVUjCJF7qTpDgLHDXFofdK6WEdanpgYwfZxaZ4B8xd5UGguT5dtvN2afUDoN8tZ",
  "key8": "4fYDGzcsDdvg4uDPEwrAoHQvb7fxo434LbeLPUaiYDCEz45BPh9F6wAXezgkGHvXdvjsvsGwK8xJvKAapTdv5r1A",
  "key9": "ejn64JmnsAGSKrSJJ7DMVrTb1K6qaJTHWcViXgEkgkw2TEtLYkPHLJEaF2y5kZVVQD515GwKDqjnsWKvjtRHheK",
  "key10": "5BbCiidVkhzi1DGLZDUNxai2x7NAQVuamPs6VWWEj2Z2RKa2Xp2pBnUKrPjfw9hTB6my8EXewEsyByBVagVduQcL",
  "key11": "3qu2Ut46UTnZbUaMfYdDk843Z5uXpCjmM4GSwTQRGzEvo3R3cTTRvpX5qEuFT2N5yh8dzuJfaDHBsh4yBZhmEPuc",
  "key12": "dopzUmqL2zBHfUgDvQPtbyt8t7LkzjxJTP2nQUFnuz9Pn2MkYHnwcrA29mcscFyacHSUJzbHojsyVuo3PdU2LdJ",
  "key13": "548UGh8jHjcwn7geGA22xRoZujdN9eGMAijiN4DQqShro6j1yRBvum3tZiDt6Q8CBkXG75BMePR429zvpYVnVkQi",
  "key14": "24G9FjaWVTxgKxGvtutx9MQtR583gEiQRMJmrtsrpYExQkYy782FyrPnpVJV4iHXx47VpCB5MtbTNbdNWdhztSr5",
  "key15": "2jkbxnFPyawrFYV2TDQUqJNyiJTEPyQDhtNk4hgeLV1dgBvG8N36EaehjyNQ9HkiDNTvrAizEzoxEuS2FqvrFme3",
  "key16": "4J7J2WxBECrEv7AosrQnqyajAZRJHibHsao1zv5d7QumVog4Hcnm2PTA15MCZ8L7tUn4PYEuczhUZWF9Ggdp4PGW",
  "key17": "RP2tt7QGQcpofBoJNRw5gKvM22sHvELybTiuyAZ4Ghkkq8ZuHL4e55FEHaqRfCDvtSABZH4BDnympYbMvY4YSWs",
  "key18": "icRC9jhK5qrjekZKJH8iCCAFA5r7u5Aw87YQFerJvvYi2ZQKFYdAz6cU5KVBX7gJnZfng6FWYYq73vZJxhrotzm",
  "key19": "xE1qRvKZfdz4XBRCXni86KEujfnbAkryQ7snNqipnFQ3KaW4tYdDL6wKcppr7MTga8FXVgZgjkzYKyU3mbSAUzW",
  "key20": "3QSyb1nvsBDNjwd2PhwU9v98VW4UZVwQYBAiPtB7HLineturSop4ezcMs3g2VoNG7PuJ48W4mEdojztqHadoRBSp",
  "key21": "4LsgK8ZnhZRtAm3Exa1495nRkFZYFHZnySSfzwQ1yR2yfVEAjhHzHrEepVmPwzB3UYSpJ6iJgN39u4gMbaNt5quA",
  "key22": "3dNhdtipcRspWvxcEgqpsVWk3s5YYFAshzKCUn7twryJg1sp7zJicC5XJQrg72i9HYBrb3uYx33MkS8RfLUHgqAT",
  "key23": "2TtXGRLo4FoMedZgcS4TtmTK9rbpPWgF5AzcLVxcy8nudQw4aGzPLVbsj4FjLa69o6KFeoqv3yDpe6SAe2G9sHfW",
  "key24": "2Q1JBMyPmeLSULpdxr8vdnicY4DMf3dkmXPUYjoQS4LSUT4EA6hawZMkkQrwckt5mX5mguYpbrcZR4n3XcoTQnPu",
  "key25": "2QxbcjxT2uzpkBnS7pBvJsZA3BaxXLJajknSBhSQKWBNJxD2LcccviwSu8Lad2YYbAU1r9mrVAkKp6rjuX3TiscB",
  "key26": "JAda9CeRWiBZUQgdDJKyTeeyQFvqepVpYtUjp8aGq7tbNJgV93i4nk4nuwjoUZ9xdTFycp7tXoWrXxAZp6YRDBP",
  "key27": "2X8Ymk4XUUzoGgFWBxMtiWMEJLGMZdvXZTSyLPUHDAESDc4Mo4jBEbY5T2duG3fuWrsvUgktRZPdCfjPxKoVCUps",
  "key28": "4n8dAPgJ1NY98tKmCbvnnhdYHAHATadyY31TJCQjL8q9ScEuSHbXVqm93jhiuVxViZrA8ruX1TszMaTtCMroXSdD",
  "key29": "27v5DZgrWzovotEpqRHy2zMYMiZyiVTUqGrbv7bEhHU82tXnJG9nQzRMB8S7ZcbLLNMGKPu91MNN6WCQ2KuSMr77",
  "key30": "2xjkp2ngpJgRw4jpKeZ1p6rBiaWYz9tx2eHtuFfpgVDFkyAoVdr4mzc25ct5z9Z61NyL88rCW8JwEgwGF33xRLVY",
  "key31": "2Jmtygot4mwtmjduEzKskVwkJZa68Vr1A24heosFhG3NPgWDWaU9zvsSv7xCrYNBaa328yJgaRnfqg5uwjCmKP1f",
  "key32": "oNP3GrbBC3v3Vuxf2xDtYyVmB3FmtGPHZpisU54e7iWPHhSjEPyaVxrAFqCnNrLWbkESSy71KPgy3GigJxBXe4w",
  "key33": "m3dv9sNQhCv5AspgWwCkkLooxPeLwVRN88PN29E8b4cG8zb334SBtxNAEfvzBnVmvRNVqK8yCHv8d2jjZMCWvks",
  "key34": "336RQDUxiggWEMJcNoNoSTDKk2nbMk51ApBqvgLeQozcx6dpDRi7psHArLXirSvonqqxGEcLoP8CZdFWtRySteuy",
  "key35": "31eHEPzpoEoLGMqALmceW41dPW5ohJuFaTPBkVD5g62gP9RiYyTyDSVgkqs1je9Uw7yPLsUnjXuTvkzZVorrHhbJ",
  "key36": "42NV9PwCH2G8Z9LLFvHkmnuo5W2N9C5YFzPyjMmmPSW2eVLcvUh2Uke1PtxBGcemJ9XWCmKySJZFvRFfaRxiB8cV"
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
