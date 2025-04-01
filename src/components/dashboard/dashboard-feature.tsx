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
    "2oHQvNNVVgn523BYJsi7crdaHd62BwHdn5TumtjoS4SC6RYdmk22kYezqTvP5wsDnt4CxmJtfjNCHkKizYzHW8Zy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kpd7ndAzQdsYPCAZU7yr3bXgmPFA8Y2KRD33gSXhugYFCBsAvTkQyC7U6Qm4DUFNBF4fSwgULuMAwgmL6no4PzD",
  "key1": "ZHDcVd9PSS4rVjtrjqEn3QNoRG8dKthUVnmxuuRq6zG4FrfYyJn7ervUad6HQr278fXNdaDA9ZQd3XHkkHuADRa",
  "key2": "pouRRxUNyuDjwHnsjf6MbGSB1MACRMrr5vnqgRFDg2jV4nF8i7Dww9HGv5zxJfuL6CrY5hyFce3nyboATGuYPan",
  "key3": "5qAZLvK1RuK337ivjdJLeETrx6yz2hA4feRoe7wydxpn48uMPEu1LUEKa2sQs9PtRpzUHxmd8M1Ucgjm5ZToZFCJ",
  "key4": "5UAKrnKCgdff1xpXTyggrX2ryzDc2MFSMysh1MnttwX3EXijyixcbY74PdQquyQ1Nm6ZEExEZGCTC39DUWevruyu",
  "key5": "59Cxww9LVvgn58rJcv57UH6iejRzkAaz2qqPsDYAofhehxo3G4nUfMJBtaqBR2xipByWGdPRStL6ouAJUv5ZNxJo",
  "key6": "26KVMx9t1erC7pEya7k9TfisszqGZnetzir7QEGZ1gv8xLYeFY3pZu93VZGkB9P3h6VCG9RvyuyD4ycixWVZpD7z",
  "key7": "4FUzRriTMuTGPVbtT4XywXgaNda2UYCEMMiaGSczZxn4PW4EXJrLF9DZD1qA2ELDU1Nw4ghn141xaYa4TB2vkKGY",
  "key8": "5HQRKecTWUxw4dwLQaSPjbDT4cBM9udW5fC1oyPqTmMkqFoMwsn6vqZa1fouSmgx65zriAiykicnJCHU3PrTzVDF",
  "key9": "45FYat66ymLZdWe1N8GrWmmDfoPJ3brEx2SVT5VJJPjYf6LNmRtz337XhzHZ6Szz8NArGXj41qctJdDUNW3P6r4Z",
  "key10": "4QS5EfA5e5vrUujbsmx8sGoV45XZgRfoJVrk6gMHVKVqL4HzQfHVvvyxC5EmCFSci6z7vsBRmaurbrZeoA19a3mV",
  "key11": "2wAhKix6DD12k3HCp3nzdQUV4jua4oBA3eMFF317gPGSPDcniZCHpNiPyACi9hZXyPHKWaGNmWEnCAtkGJibBzSo",
  "key12": "3vXVdx4rVzQ49ksaTV8MkJ7hB2VqW23gBMdkXcn17gCyeaWmcTfPSRxZy2mg13dC49skwFWaevU79ZxQwsLM1YMw",
  "key13": "4jh9UucGNHzPA3hX9Pb3YErvKC3urAQxcKNe2LZmSdVfYDMsNjooNVBQ1miLk8xJqqkVV1mnqdag2uk1uL5qJFZU",
  "key14": "khAhQvxnpms8gYBPz5KNMcWPrk1PME1q8BGTgo5HnHtAJwmoikHveCuTuu6nC4KBd6zRmAyRu5kshBMEJNCQuYC",
  "key15": "4SKp8Nm5xzDZK7snQzsMdM7c1Xssj6AbTmZpNoUF95GkM5vY16CCA3na9wmA5w8Xq3NRzuZHfxc2Nxjcxq4pM63d",
  "key16": "5m6XsFVcqHoWDeiiBHJUG1hPCZd6ZPyyGbGaxJPAUepPvQLvQqAWXo8pFSaQg96YkQAd8T3SuGcRwu3rRJjnW5dZ",
  "key17": "53tRF8zdBCMSAqbUKzRtzY8UXMJMmgLEPBDHbaPQN9k8cLtYunEztuMFcQCNANVdNsDGLLbjk7keSfHpshj5TqJG",
  "key18": "3xkqxfsJqhyrkQkjAW4nmX1AqpBFz4jxYpwXwb6EtArUeTQeqwffDacgcKN1DWUuyWj8orqfeDwX5VaniKHmXz8A",
  "key19": "4XP86EueX7WXcQ8xbk8MSMSMGskZxr3HVQ3YqHHQGDLzh98mMY7FSp5GUQu7qP45D7DK18SDHH8zZHGcWbTadGLG",
  "key20": "5wLNfBQEKQLUnWsVBWb6DamPobyPxeN2hKu9Fn8zmeMM3FyLQCUGStRPrhx2fPFubyu1QSB8V9Qo8rMyfd8d7HgW",
  "key21": "4EWNFftYS7hySFpUUEMuzf2vU85hC1YHpshfpZKJ2mfAoUF5REYQiBq5dDEMJHba7cS1nUatXT4kHD6JvahimgDp",
  "key22": "Csestc4VKxirwJtcsxMrTqpXcrjSKzqzdm3tr1WKWpeKN1ojpuanRkBQeYNz4QgVuMZJFp4Qn18yh6FpWCtSRx4",
  "key23": "5eNj57Stj5Fjps4tFhechqSFX16cpxmP2BdD1PDARdVo5zFnyg9AbeWgd897d3DXwicbCbuw5U6waX948W9b8ihq",
  "key24": "3Ca5tE6SkMXsLDsAGGny9uPpgkYqazjGX429wcFYeAEc557oSNujM5KSDaEb6giCigBtmVgvFWdgCTKpdALQJcj5",
  "key25": "5QH9adY6qfEhNyi36o98xH9GdHb9vxomQzo8e7yhN61on83zHgYBa44PzyP3HjJkipqFwubiAZ4rs7QsuCdrWAFj",
  "key26": "2F217BgQyiQW54Um4A2NDEVig25b9KjCqZdbMhfzisfVWDAh7k8tjLnP5PS1trjBExzyszp6zmpyGxpCGbP16WEN",
  "key27": "5ZUWAVXpmoN4Ss2AsEgi3WwwkSogkWfsfeKz6vWzpKNneFEuqfftR4ZbFZLAW2XYuzPAbCRDWspnP88q9iCN8vjE",
  "key28": "3sea6puW5sHb59FgSvoaaFZmP6pteFXvmDPZaDYy5L596GVRasaADggFbG18Xcrzw8VSfMCa8pkiQjDgQGdnVA65",
  "key29": "Nk6sGvnKRLFz6Tz1GC6CrSVuPzpVv7SYDeq9ASH4Tmpniby4T4UJ1R2jknENX3X9wNuws9CpNq92TgwPX9eBgeG",
  "key30": "3opocU63AoMjtADdgZj9avCDEvoy2wurf6DKHnt5XVrea7ofYL4CdWyVyKoZzLfPvajG6xBmW7xnSwzQgTyZ6qMo",
  "key31": "2aiSFMakLPgs6c8kvUchttm8k98KmGnrPRUFiMm7AvHeUgFZxrrcKvJo3D99cpaDqTUXyiEd6pgyfZhVpiA1yw4s",
  "key32": "2a8G1eFDkBmuwkLN1CZQTREnbzm1SrBWhLkiwFezYvcotyp4QTNWT7o74XESikswxXHsxyA8Zpx7taUgXzjv3oSd",
  "key33": "fc6t6F42c2VGZRcrmk9QTj8qzLigRrjuudHgvRMLFgEfLSQvpYu5ACFQzSAd9dbnXJ8pE2eUyUZFdhJga1xBASQ",
  "key34": "2Bzcq6zQd3kvEnHzNaYnzEz9FjooqcWnhcFRkvwhHZkQ6W8j77PhJwu5CXpJRat6QLKCpoVks66BeEuf9Fe6FPwM"
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
