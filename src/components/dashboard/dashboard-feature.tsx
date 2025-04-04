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
    "51s2bxChZHtq8uJo3WT2S7XhAGKCaXnD3F2HrEvnw5asRb1uZ4BYqJxcJ2umzVGtU5fByDEaYcCb9ks3kMTSaN6p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TxABDqZGnByhEiaTUKVhSAk128orMeTTXexKHuFnsD71EeSyL2TGB1UPzCmGjsCWxVW825AzEnBvhKt97e1dCTt",
  "key1": "5eiyBcecJGoDNuS6VaDcu1MXVrVCP5fPtWNPLnC8oYnSg138QS1paoHehJQX9xJfUZ9MYzGr2BySm3p4Pufdu55i",
  "key2": "3A8zmKH2mbtsuGFHxVNFgimsZXKw2hwxtAWzwhmt93ig9ehKN9aMKCG3pSHjeKgU7LsjttW25e3LCM9UuSGwEgNZ",
  "key3": "3yBcDkkPeSuJiCvpMpChMHgoZsvMs6XkpL6WFXUW4QiVbmxGRk5ws85bWiifcXj1usirPUSbCR3pvvWQai8nvCmM",
  "key4": "3tq2GDtHfq6kpLvJSk2wQywa5KNGrkFHHz2Jqi9eEYsmRkrbnWtxszutRfxFr7WyZCm7mg9nJgG6g9LiqX9xPaWp",
  "key5": "59awyeGvQGJw5N5W5k8E167nmxSLRTF8Nh52vjqxVtP4U9zXgycur7v1ji38EQA16yZWgTEcPWume7YEYgzmUYU6",
  "key6": "3rbfaySpUf2tLvZqJURNAFf4h9L3MpApksDZLktzkKvi8W6vqxdBmVFo7JiLM3s2eWjpNQxgPtbFnRojFoBJZxvL",
  "key7": "WDNRkHPTps26tBqxPzx4g1o9cNwZowaM8Z58dvzvfrLfapnkZe4ejPvPynoCNDcRehKi21qGbKgkJYyLZKCjSFe",
  "key8": "4uVF8h1Ru9n5bDrfQHMozgrtVdQcX2cXaEtMouNeJafrzN7DtT4tBUfeWh3pVfnYAHM2Vr6dA51Ksb33xFd588F4",
  "key9": "rJkRPBz9cLkyXYwqNEUA1WgRJpTgVigFmZZkvHfpDLvdzGUFbjRU1apwYrdahtMFNnQmqcx1Mj4iFKWELFPZPaV",
  "key10": "2kXH78sC8y5yHss9223xSarMxPEqU8d955SSCX9qLzUwBYnPVxpvYXisnPVnQRBkUsr7LjW2P3otbgqRTXSMngUL",
  "key11": "38RhNAvnjZAGbz3EUUdhMpJe5xURJBt7RSb2pjFX2mNquXDhFW6B8XvPRu4xvkB3j22GtoCvY1zWWEjnfWHi1oa9",
  "key12": "2XdFdnsb29QY1byWEC8F7Vvkkx51RozsP6eoDnB54sRqTZBfyb2FaWdE5ixxwgv1JEAQjamgyh5ngLgpByXRGA8w",
  "key13": "5MBFuC4C5vKRfqwiMZGeECnf53UdXfGAdtnuc2ovTwVJ1wPzWv8kqx6QcD8nNq5oKPTMu5dCbVRtMqLHVF6dFgUr",
  "key14": "33dVT1GXCTz59PotPWcRsagEU3vesNHPDDaFBaWFEzz13CWMW1qUbzPPHi5ixZXotR2gycjh8mmFB5RJ4mSU9j1",
  "key15": "FJ9EzDrHkLnkY4jzgkohwLopgUW576y8bfs4VDCxvCiScSZBNyCQtZ1n9xavRZ2FzjU99GEEP8pWEMpPXWnm1RT",
  "key16": "4E6SVq6CvYSn5SXN79NN7kHwFjM8nybP3dta6TH9SZ4zUcCYS9wHAxcYQwunJFjWmxVwHGp1DM6iJNbvyNB71HgX",
  "key17": "4ZKxhseUxfg4g2Po4y9pAE9SSrbFxkx8qvkzVSq9Nf1PH7gjwgLyWKPj2uYGqPtVADWK5NPSGYkfxWbYR7xkxvZE",
  "key18": "3PcarKJNa2qu45gyoXLGdzVRHNyWzPomm6GNrzjJXpQmvCnwipPLg9TSUW96CeHbNqSogg4FvHyb76oNsKogdfSS",
  "key19": "48RVchBGPoptDC2EF6zfttaUsbu6cR4ThUa7DzwgNo1V62MLBeijgSeW71ZyiMdnECYnRVrGZnTfpecPpJyBfhiY",
  "key20": "4shHuQ6FAKQJmJzcWhNCfoqGyTfeHAQxWCyruyX11drtJF3Lhku853nQGjhvaJQw2LXdgp4szPdC5GDrBsA1orgK",
  "key21": "yTRb649YGY6E1KtX7KMANCuPWYh3wXUGxaj3qfect7oxqr9PdKUoZdyDokpdjs3jfdRrKyqpJKiTYhCLVny44ew",
  "key22": "3ho8NdXdVJQcGqKbtPb1LYGY9sZU3RzckuUjb5KBa3CPJSfnPmrarECQYZemH74Dhnupzq39SbZzZMG2BCaRcANu",
  "key23": "3A4GjatMPaHQwBfesSePretkuRK2V9bRKgMUzAw7aBaGpPyjR3ZzDKUwh2oWGW6r2efk8RdoZPVfQEPZ1HcGuchT",
  "key24": "4cbNnpLqTowAmG3RVLyBvZVKhjpwqJoJmNNCWLqkDLXT24QERLBWGPgZrS6wkxknySxP7fc7fYBw6dsQHqL55GsK",
  "key25": "2Rvy3beP9gkjrLqwPUJr5shDH9taKVYAyvqkU6zS9ohjHov9WFHZPvsFWFcb7SEukbWhSmssDKPeG9x2xVdvSNL1",
  "key26": "ivvK6sqdmkHKTaFG3ExN7e8Pn9VDPuXHJabRjRzeM4mA3qGCfx7y5VEmCvEnafq3AX75P58nUE6FncmSMjnwV76",
  "key27": "4CYxPEYEQqjomMxpb1umkP8YogA2gvatJ4gM7vYhu5iNhrKV1AeZxsk9P553NxCJJkWmWFkkNr9eEMVFiQcf8VcD",
  "key28": "3FUYcie7Ls3GobkwKtG7WLun4npyxrk1SPiTAz3kwXS3U3SGvn9fDU61sV7DjUEHnPcoxCvN4qtaWsfaG5YauLSu",
  "key29": "gqwNMeaLiutPQVnTgxX1YsBszELYcCuobqEFM5VNjmuGthkD4c7dsQnXVkKB3SeRRQ5KqbrpwrGrHGQN9ebQzkW",
  "key30": "qmVrkWJkpdjbZms8FPopgrnphDG5k7GVYVMiAeB4nQyte3ZjAWtrZTnENCJ9etHjQPHzWrvJVG2xr8UhFd1YGcm"
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
