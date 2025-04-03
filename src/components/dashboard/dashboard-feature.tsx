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
    "651gDQZsLmRawnAwGqXnDnYgAqiERoLmNoi7ku1PsSUwcYmSjQ71DDpuoSMSkrurPtHyaJHPJCF1XHAMajsDMnGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m2rmuDe58Axu9dx4uC8ByTzoH4vnWUs4H2drhvC1Xazg1gSpcryLgZm3CGeh4oGaKrrmXjsoRhG5gp8MMdeN2fs",
  "key1": "5gRDPYHc1pTs2AKRKifV8KWHHwHqrMpxvCHACTvnAhCxDRUyNsDpFAFUTu141dnmSwSjAvZVujUdScKPYsuF4wLm",
  "key2": "2A5cQcT9J6Xr8pHvn7wod3c4AikAGHqMmHUHkW6igx7hSCbXjUYHMJD9Xad9qPe2YKy1xE5K1KyBPLHRXYdX4Z2q",
  "key3": "35JbuG72iUDaDFK6LTdu2MgPmhCw3S5wWCWVStDJ5CtnHih3V1MhBWTPeP2bfhNHoj4Q7qZXduNdPmynTEuo8JA3",
  "key4": "4TLNpXfpzwb4SEo4TdpX7St9G8hPuG1m5e48wmWYWq4HzyzPjXLrf1A3ki4tyThCB4emHhpCzKeUKkM1nuHATvGE",
  "key5": "4s4gDUdDgdtphziHtSqVcfQnb9ph31MTeD7xJSJNTFDU3xfissiiwxgXcxyfdbFPQzM7NnrsEyAqKzydA8MuuQ36",
  "key6": "4vR9ehEoMkEbaaoGQvGvcqH4jf5ab8sTcUXhvVaYSDJX27VrT6inrwMnwj9qGA95V2NH1e1jUMjgEJPgsAm71bu7",
  "key7": "2c2ULyoxvXqCJxCLtr6PuFNf428kU3e9RRSBPQ3mYeBwwKfingkeoCJBXP4SejKa2gwP8dfN2nVkxApaJuEPAPSz",
  "key8": "3zCzFkXA5AAEkFDR3csKGqj9B8KAMJGg2DgttwhNdBYjXjLdDreSTyqAXbLLUXoo2xQK7TgUJzmbhxDMFoAPAews",
  "key9": "41fSNLTSvBWJyudsVig4xeBf9A6FZ6MQLrBimQrZpCXkUBdpJLgqqEu6eyghWKEAzAcV3T4VDe6x6HNAcNxmtdQ9",
  "key10": "2fveWJowWctak8R9JgYinsTK9AVNYSkYm53TQHWDVZ5VzWBNebdugd5kFb3zYdyhDJARHyha3pq8eKsFBkcnCVrH",
  "key11": "3RnEYrGcoYiZWPDBruf3oE9mFKXzY1P9gKh63boFDjZ3sEQSNuuyuCcPz98XtdXCeyobJqRt2USLXKDG3YW1uMUK",
  "key12": "2c5skb6MWyzUpohq5VeMXci5rCPnHu34MYoY1t6squxwrhudNGLeTELR1hzseNYdRu4TdzygAp8dP4aNcJr5SVgr",
  "key13": "379aMqSs5Z7M7CwppSjomdXLYPyhehUsGUGkWQF2LBtXmmNSsrCVUeHmzRo85rGM9Yct4dfGhKPevUFjkbgz82mM",
  "key14": "wP8Yd1tNLCptpcZs2yjV2LDV7rAo9YP7aZG8sgD3Lm9gY4RgGQCxrfu5HxPjUg4FgCgg6NRdDurVQ6srEdLDfE2",
  "key15": "29zYYoBYUcyY6vAtcVpm7m6YRjMFCfyNseJGbw2yfSWhGEV2xUun1JwWFdzLHst3W4TMUZoXgNvRWAkRZatTryMm",
  "key16": "ApEuTRr4xsGEiCUKbTTeahMBg62vKRRyzgq3bWfgTAqHqSpc2vTVjhVJXA1kEAhzfg7Rq9WqvRraNue4MmntVz6",
  "key17": "3j9786PC1ydrzr9Yprh6U4qXMb8G8JHX4rSq7sFwD658WdJhKEtPpHfgioaL72AGgo4kuMxeG9vfVsHqDT5jCDv9",
  "key18": "2Tg51D4KpseRGVFm3oXTdT1qQpgv5485gdpWtwZCW5Uhtzo3pqguXDsGpK4iAE99HMSHJnp2Wndip1ZXPXmXVNoH",
  "key19": "2obapCN1Zus71Vz3U9LnMGs6qGncuHUZiN1RuiRUGQFM8b6ojrdYs21eSi33a2QFK6VC23U2FDreXa2UsNPP8Pjh",
  "key20": "RyMSZTQk34MaNWjiJynTH9wk6dP5oPJzw7PBjwSDpiFTEDy1Wijjfz7hG2FmyJo2Jykt8SUKVrkMz1TjRULRo4q",
  "key21": "2dU2dhuKko6aA7ezWNcPGE2LqebhXxpjNsF3H7CVthFowHedWFKu8mcLepzKaCPZnthK15CP4uYzMR5ft3mY5BYM",
  "key22": "5rpvcTtfMkP7PUBVb85bkZwXEx9mSiNiCkixCpz32qFG2XdanUpBSaE2p8SR2DnVxxiDyukQxq3QGJAH5buAWnLs",
  "key23": "cxniTKoCuJ8be9X9BKPn6Ei7VFsoaSRE5FXNjngFsX5Wkn79ciib7AXS82hFXXWqo3cj2HY95zq51dTi4SxEXdg",
  "key24": "5fgZVjte2LgtQMkkcAovd4wvF3KCJUYQUohSiFvQee3GK23oeMEtMxeKKeh9sfLCQm8LfzHvs2MeeoPDfGnitKSD",
  "key25": "2fLgvysHcm8H7sp6EoHw1D3JUzMKemL29Uyz4aRsa6FzRrWfTDtNH7JvnXxeGPzUAmkhS1vs4345TbyPTgrzyVcR",
  "key26": "24CWwhbFHYgYnYcYV97WNBMKEZXoJ3cT9GTTnTdSWPN2k4DQUaSH8Ja9y5jwR6gtDGVnpXKQpxAvDPzmEud3mtXb",
  "key27": "qhwvCzeksGffqaSS8ELHZqmowzgh6uCzqU2qGdVb3CBzZkZWpgtWtdWAFbJGs19dzbBc8zeyv725B5Knd6zbPsV",
  "key28": "ErxfVZpeUacNrxxpeN9Sk9Z5WkMbER5dNX8T5LAwFZx2t9A4GYGp9iv9iVFbDWrsAuNSMKss1yEF99NRYpAWtiB",
  "key29": "5CGjSJn8Sz9zNcCdZFmr9MPHNPxdTGfzc2Hz55BPBPgKwEWrY898E6aHEyrMPutXJaPbUN1L3AirPBdN8WmJc6oP",
  "key30": "4CAezZRVyxGvQKf3EH38iRmGREe433uMDKh6U8i2MEaUotoQcxGkQbhXhc7BWVhM5gGZvKeE7poGaKVpmQy4dKNP",
  "key31": "33nm28tGazAsz4BHQf5oukm3ucT42mnsf5WBdNvKVQvTTkRyfM8EzixuQzbFyAx7PqzASiUJQTbayJwi5XdVufrf",
  "key32": "23iKoDp12Q6t8HN3XJL93qzXXwtPj1ZZjdu1tuDSTxAvjcVeoCd4YLuYZpJpnTR8NWPYdEz1yQYJm2KYbxeje8hG",
  "key33": "4BEiVR3M4wV741zb9fitdoZQhQeN2aEJ3HYsNo9TG3s5DPJu3vNkbwn52vu9iirgsEgwpZevJhQVSskQQaPeYWwq",
  "key34": "4a5K8PbwWDbimV2in4zDkKp9cmeR9tWi4zQ7JdiFtnj3CMeijaaxWmhtf17Gfj2ZDH97k7whUUAHuWbVmB4XghrJ"
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
