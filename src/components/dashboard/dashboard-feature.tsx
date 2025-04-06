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
    "4YKzXEdwTGBfZH7BsTfapnR6tD7DjutSxQ41A5M97jxUj7PyNJUSa9SAvGmzwMyNibeESQrStCn1ND4M3ZbxSJC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25eUKPcyde4vGow8aDb5MnAWHoiPD3n7UxiHVxmhuk1DiUZe6JKGSFyX4wxDHqWVZHLN9px8QxdVCiG6V2hhMBcB",
  "key1": "mJeMhYj93TS5zCVVemyK2PZ6yeS3sXzTFMUzykRm9BKix3z7MFY6vUMRZK3RA3T896E71y9QxDprz8vHuaPuzt5",
  "key2": "63Las92a51aVmHucJa4gztqbog1x3mcz4KZ3JwE2doGboqpmgwUAkBsbRqSAUMvKM8HfhDJZ3JKJd2565Gmen9tg",
  "key3": "3in37wqPN2AxSfY22vP81VwJiPg8uMjv4Yrkhnnh4YRnb8XANAF8xQWn1HLqab9C7ATmzKSRy4LUKcoTQd4Q1NYJ",
  "key4": "43SrAKxzJNuUo8AQ4BYpnQzFw26u6obVhntGvgVcuiPkVm237akMzCcqyrNnombQNkvih4BjhtfMHUPHUNZpm9vN",
  "key5": "3vQg9DXJC7gxT2QfGphGR4nio7Dy5LwczkVML5TgSwYgFuTQi4xNSkL26pB8rR8tLww2K64rGa9Rw1Yc8c6Fqh69",
  "key6": "JGF6qqpWQxZFHtDbe1U6UKJnvAXGywj3xzec41dQfm4EXudzzAg2otjT9MwPrWobt1ztRo51ZodPaYJKVNrekt8",
  "key7": "ymruYTnyU4CXbZ8qCRwgaYvGmM16PuUh7b6Xu62Prx3mYeGMNgo6wmkaKGCXbbM5XPa11SpkF5sVYYWkJNPUz4Z",
  "key8": "4FTQCHePPWtiCyh47wsuUb3iDQnbyheecD91yLuk4K5uQUYog9Qhxnn8pYqTRGBPNAGmyvpnQAgb1c3TTYeqg9pM",
  "key9": "45E5RXNR6ABoT7oUVap6Agk2HkWqw7jmQstVmZsSqaN1TTDyGgzFQrZ2ziG98NaQKEnCRjmKMmPw24JNLwuL7wds",
  "key10": "V8gvPH3LJvfvLutughMZHUwke4NpBB8tewQtxzU9FX4rTExywKyWYDMzZiFWnMWYb8R5tQvb3UhmfeJjE9HVn1i",
  "key11": "2iEHw3eBUveB8xtmCJiSW3XNig632UDSnsyTnetQBPzGDuPCN3jCAhBmVDiWworMvTNWccoj1NQWpg8bzJyXnzB8",
  "key12": "3ux98NWk3SLJzqsWQtLxvQdca9HwsiiidQMS12boKiNtd3d4Jvef4n7azi8DJDvt9rct5DxumymijVSrd2DDBxG1",
  "key13": "62hPfBAjMQWx4uZDAF9bD2WDB9jcRVAZVcB9qD1MpWexyQWHZXpw1vy7N5bxq4vhxWszvQEKS2L1W3y9bGZPJnwv",
  "key14": "4rtLDckh5Nybq9aAQuhfrWBNqyxGedPRHny1V39jZS2ToXwCFHPFPh6BwmkErUwRyyf3cBHDZwoBiosRxeMHne5k",
  "key15": "65prLuXn8vhiBTzKVQUFY5Qj8hdmKQgDwLJr46Jhu6tbgjymLsxLxgzzewzqUKYcgTY3AzZXk6nbUGKujvFMxCxj",
  "key16": "YqYVQfd1uWtBA1kiBJNT3kbWMf8UD1yMYNQLZqdj1V9tjjNVTayknrs2MTQZWgHQvReEovkZmEX9nTPHPMSqvsB",
  "key17": "4nzJTuYo4snaHrr4nVSJybN234wY59nf9KoewQC4ZaNv7rYvLTPbaDqXXw5KJMyGviCsLDM56MBGCkTqaRsGA67V",
  "key18": "3TwsxnaZTD9V3Kt1pKoVLsy7u6vE9M8sygrw1kW7zdoAGiDhE7hZZPfKERSc2vwxvjHaaLAfJMFRCXJjy4grddrG",
  "key19": "tMupr4YBE4678skhKGx9Rh9dnt3VYvsphbK3Beq7LiSM89ZdsrJ1vMY8pMmoLpYU5LbvFoKuks7NRo6Js2oLiqm",
  "key20": "4nEAFqKkyQiMkwz9X5U3x5mawtxuSwcheGg714V89HHYuaGgwR1UY5WMrfbxpe89Zi8DEhmBpuFP3duDPgVZJ9G6",
  "key21": "22sY3NdcWprfs2bVBieStVpvy5JfWgriZJR8L5nNfEQ7W9CT9kmBAnwRfBWnGaanVKK72joYt7ddetPmznmG94B1",
  "key22": "AtxRLFCD3WiUTyJgtWiZ9csWCm3yYXuTSCAWwRVCokQhHSP6X5gRQCE13wLU6JTgQvSNWYebSYoLfhUn1q21k7r",
  "key23": "3iBgBwgKKnS9MUBjvN4xD3BFtFVWYkCTHWoD5VDoBRsnGZ51qp8AyefxsmWzJN74dM3n1LZog4ZfQDzyFiemMWsf",
  "key24": "5jwxf4CnqPA5CGdGzeMcBuT1eY1Ji8xq59cNezV4CXSSN81KkNGRyjSm4nbXWKnQSHPjbGPGUMVveaHZijnY12d9",
  "key25": "3TKeD6c2zjUW7K5vzXJiqCZ3V4GG25KSAAzUZCw95SybtRo5P3yp3uVUwiLS4MgdGgQMp4rwoej8zaAC5rcsPPV7",
  "key26": "2xBgxziuMHkRbbQKsn5G3D9xaYXXFKdMXh4obxMm34PY3hqkcR4qFRdRwXS2bGPtcvgwD5nuUsDgtHgtQge76Mpr"
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
