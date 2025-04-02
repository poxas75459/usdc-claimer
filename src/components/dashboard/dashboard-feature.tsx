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
    "5dNsQwhcQiUvf3Zs5TnJzBdd42M8bGZhjLUGY51cdXTFPVj52tUv9TgKpcHvCHdiMXn7FgtRgjmikFfCcuGpJFLb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ULMhxHWpCM171csFYSsW3eqj3eaz2gMHGeYZZpERDVM96dtTizqL4Gh6CDKAptDGaYdos4SZtedeubYfXd3dAks",
  "key1": "2B1cQMci14A12ye4Tzz2AewQ7enCHLB5bidg4kiLkHfzNukP5NY3eXfzeZ3cMJtaFRDQhP9QUk1qTb2R5pU4DFf7",
  "key2": "2D5hn17mBYXNJtNqQ5NJfCWnjDZ1e9iMFQuffRAw9k7wnAyp3hCA17PC4yNr1sNm9VnNWGDYppj7fT1r46wwPDGX",
  "key3": "35EJJ9UHHMsEumskiKmqLrPhqTkGGC2FehSAw3wsKZqgrKCfgfuomQUQF583cuVwcpCM4kCQh7bT84tS1F2mwvED",
  "key4": "65e1tdmyF89NMJLofh5wzVAfyEE4VnioRrv76RTvjjiyoqYLLjjEGJ4okys2DZxSU1x5K2rDLboZuTCRT7DpgCrD",
  "key5": "mdYCGxnfN7CmHAbEJY1ThpTkAhz57KTwokciR2ZN1R3EcTxUVeNTye4rMkdNFk1QjvbZQWtZnmzN8CFPavtZJ6B",
  "key6": "4utpmd3iAJF7gCb4CWfMUhL4Sgk2A5rHQjuUjd39LztChgxQr1Ywafdi4u8uRGgoAZ2TS6GH3syiih24pXtWiyae",
  "key7": "81Uy61JBVESBnf3tpv7aKBxVdrG8VQR5ZxGN7nNyFjtvfq2MFS3B1b8pwKgMpEhPHgpPcLMhSEPgbACMAGcs6tt",
  "key8": "5D2G55RY4K3GeFyRBTseyNkQEFw1A34VfRaiefvBMVNsg5Ba5XsBVyfizMGHyCtbjNc8m25yZ5dGGjLnHMqEoyZT",
  "key9": "2Zis6ojuGu4mM2o6bWMViMFxPa2JDeXMqEoiVumkn77eu6xjEUfJcpBX3wLdSpDk7iwjwRKPmV2dBdtheii52qx3",
  "key10": "4yZaag45SiRmh2KtwfnEkA6MSCJshLccHzJdURbXPoUYu8cQXhftkSvp7ELgx2R2yn695nh2bECmFWpJ6Pq2ia4n",
  "key11": "2i81JSf2QHXicUM6kDg5TCPjRA5vRmyAgexTBnWZc1unNdT3gmCWpr8qVZ5SG3x3eRyt3bNoXeEjiHQSrMmXFLMz",
  "key12": "eKq34tsMfxG3vX2du3ji2u2dZ4MyB2XC7jLVuJhA2b5npyi2wxUNkVUvm1JbtAWUWmfvrZXpA3jHuYny4y8Xkwf",
  "key13": "3w3VUtVGx343BymE6yiU2Jb3gFEzn2RuhvinxdEyNSDzwme38fuS5FGiSpm6GYDxakpj4N7KWY4zCGrzHSaTgWrK",
  "key14": "5FhAA5yUs8a5HL1oCVvZtLBiKVoRuiyRu2gDSLdSp44PhKwgqdd7WLskLuyrY4d6wJ8ZfsM2qYrNi8vuwzwmG6Jo",
  "key15": "4JGEW4Lz6uqUgX5G7SmKEz5Hi3WYQnUvTXkdwfP6631pjsgWqsGtY4b4RUXpRcF88V6kFxUV14eNZt8xdexjuZos",
  "key16": "xjMRCiv6E5ky2NJuJyJxfnd3hB9LxuEG2TXBzS3EUUcawxm5647EchJEgDPd1bTfchbwot99uyz17fLnW2VaTFd",
  "key17": "551oKkqG473FGoaLH46seLE1YaMzP42sf7ra4jsCsJiddrvcXPdzPL5Eeh3QuZdcf3EGh34UzAKhfoscoJicYxgd",
  "key18": "2C47J2W2zkdBEzDJd3wiT5UmNFFvV7KTcM14RU1rnMAJv5LFBWBho7gmBHwWGT8nHkURKuQYNZnSF7mgaazAWtA",
  "key19": "4n4ER1o4CE3cx4yDF1rWwGrGsLXnXWp3RjTgBFUEtx3cEcSn2K8vKtfmPyDGruq3NfBQZFVcm2ggjMgZsvj2ncs7",
  "key20": "dvTHhWehyQfAWrneqQwBea9ZTT9BX1rxRZ199Xk5EGgsVNGixgAjxSBytrhX8naUdGPkvQunVGwTNeAK5nkUmFv",
  "key21": "4YRcm17rtjxAm5TUA2XKVEAQPCgmiaKE2YHjJ4s8sTk2P6D23ho5yPYPRXosZVHoNH38ixZwqAEa5oa3jCBrNZG3",
  "key22": "sFnjdVmzuhQ1UdQx8Y2KNUk3mAnaLaTGLBqr4YcGnJz5yWsvo9wPuE49XAkLhtzvEALdEKnACkHxaxKk4ieTQiU",
  "key23": "4QtRC18M491ahxeDk2FC18XxKqRBYVdzS9YB7YzJAtBSqkDeGr3kswEYUL11P7b2Ndaq8JWa1BaRhykxPSu7CLKY",
  "key24": "Sy6UUimUwVEWYbRHqf7fyg53WeUjCWL1hAXnmdJ5MjNP5oRidKa1KzoZEBVZbb62Re8zbCu8aJoFmGqo2iWg51s",
  "key25": "515LKnZaFP4suPGnCDaiZtxKUVVuK6qPvASz4VDr1JYGgKD9kbLcopCms5eL4zDswT6KjD6P4LciFnxMfhXSta9x",
  "key26": "2VWwnnNu8evz7MKgy7XvBjGJjUdtiijys25P6X6YfZRymAeK7sUX7PHBwu8mXbntbZ6RpQMvdxYudvi5VKmrSzLd",
  "key27": "4S1eW2MvuS7pFXL3uHUHjsrBH5HZbqRRyWiLxSCjyZNYEW32rQwip1V35FSnePfWBci1beXZaMXvDbJnX1p6jWY1",
  "key28": "2TyDAh2ALQb3k2gbGvkwUgNPTkZvDy2mRxRnkzDoc61UcS1fVe8m6QPdUv2VGVRqMkXULqwEGT4dxkWHPNEr8zT",
  "key29": "2mfTMUg3N5wdJwEoQfnR5iGGJ38nnZYX9aYw392wwbYifVpXjJrXvJBJsfRRa48WFrQeC7bLUC2pajuCEWFybhMT",
  "key30": "2XVYbtSayqu2qUbnCLGQDrjSaLLjPtAZ1tvU8ffmiDeve9UqSrh3R4ySx7pZigdd33yia11NnsKrs9eMan45sKQg",
  "key31": "3dXhbiwFU8z1jVgRN2KQuWVCi3cVYY32Y8um1GGDhbQSdrfESR4es4aR9b6njPwfd68fuBmJcjXLZmBemmzTa5bh",
  "key32": "3gvbtY6cDpGEFNPbp9SRdPadL6nKKjxs26kp6y89C7uxwRg2LE9gzsVjMr2bmBk3vn7MqKgecM6g95FYQEfdwCB1"
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
