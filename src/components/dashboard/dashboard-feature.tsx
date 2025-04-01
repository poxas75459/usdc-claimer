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
    "5TAAogPWLLsjvmGxzvVmUxiE5cLtq2B86KdwBLmot8TVXuatbMExYeWAFfojRXKbDqzYwTjpdXgrAUE5SDCae4VM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D3sipAhGgvHYynCHTioabe3kMG1sB6hx1TRVN5s6tynzFFGAniZxQXZtWFv4wCCfHDKEsbfJ3WeS6cuZsk4SNjn",
  "key1": "5LxD9h56V8ceg9CDVfAC8McGnzvUE7b5SmbidvC84D36NxrT34Bzmt14ra9xYu54TZBAKZUbzvkjpupzVvZxyBZ6",
  "key2": "2wzNW6CpSATQrXeq95P89SGZ8PwpxobvSdzo9VNePqgKXkzMSt5957AnDFddideSBxbHmJcMP8jgTboWb428hryp",
  "key3": "4yTV8oMicCLhcEWfS39iTm3fWAhSD6BZcP5kjSQ86yu1BfgDaxTS5KgTNq2fwCdEMB7sSaJ7QFbzEgrU1QYmEkzN",
  "key4": "qiRiLuUSbcBJaKEnRy3tGRXJtoRCvAirYcbQSyvmpAWfsezshZT1eJyePorW1ssXirFpfdAcemVK16PaWWUnj2s",
  "key5": "2qscEELNH9asx1mwshkRbdcTA5HY65drNszf8KT3NzXVVD2Vg72nRq2TkRLymAmXyGRqkYLmFnzox68qjUkFGBy4",
  "key6": "4B1k58CaXGk8G28WbixbBF9Z9G5B3WcTGBtn96NoHwpx3FksHVCyRSLagL6wTqNutsebwrehFZTfKyarVS7KpsnV",
  "key7": "4tSndotFVDivRzaKrYaXy5FtfoZ92ovYE3MadRVAEQf5z1Dh4PsTYQmZQZZj9HwSnHKv1GXPKWZwQkMMr2UxnqMa",
  "key8": "53vrXZUZ9tj8pJrXrC5K2tBmeubq6BpToBkYU3Rnt83LAAVUxh5iJ2jZ3w5Ty7XCB6Q6ZNE5rbtuPJkTEZm5jYa4",
  "key9": "3WxvsUzTE9rzmo12T9icjdUQ7gyTFNKmHyerp14ztN2wWeLnexF7AV8bFGLnuNHxQvryikGd2K7EwZRYe1w6Dzq8",
  "key10": "86SNsTynjTeLxuhKLkPZVSRWYU6KeeGnK4xMXMifATsFTny2naCqVvh784wHhMiXHvGt636UQbpaXdXWi41urwb",
  "key11": "3rk22tQTaY8cGfrh9e7Krdb4LASBK1C2D1kPY8QbJaDxs5Z2X827RQZLedFhJsNvCxWUhAHLUFH6dYtiD8pJ2tLJ",
  "key12": "3gVXcH422FgvA9u2ZogCdWdGFLA7WggnQxTdmSgFjCWbAZ7qtQcQM61LKmqfm4avSQpKDvsFBH2HM45PDhd8YSHx",
  "key13": "2tU3VugykpQ2RTRothBN2btkeMW8UHBTLKfFptxaGg998aFyiH6BQ3oepo92TZQPFK9hsXPkmLsptVaxeXo4QxJ5",
  "key14": "5shFCH858Hnsu6UshZqDzXzWDVU7fixvknkrfG75Dq4Q7d1BgAsUsXFkd2hPFMrqYxv4NizZAZAKe3BBeE4V5nPM",
  "key15": "2ruEBPB539UcXYHDEg6HBpbZsZJJrsSRg4uZozmZBoAmGTHMh7FAeCKSrUw2ztkhPVXurQvDvvG6XioZTwjvAzTM",
  "key16": "4zx9gDnYejbGErAPCjFuAwc83BMayhztdsa5QG5eJADr2idnmvjc79CJhJjLzPf5GLG4byyLfMMzqYAJZvSRR6uH",
  "key17": "HXQVNAKVGFeaQn7mJ1fdH8XHiDXmKKudWjohjyvRoPxQczTGBpEWz6zt3M7c8qxCUvUs63YuAY8W7ZwtCviqidY",
  "key18": "54GDR3zbkcy7QuK449vwT4wrUg9ZZnxPx8J3z6VpB6a3XectaTMZzMyM2nH1dFR7kgWksnMQ4PjmuKfzbjuofXE3",
  "key19": "3Lfdnuev8NacmF7HSFnb4mXXMHQyfPj3REhMAnEjWXWvBaxgX9u2qDEeMoJk3sFf89HZMQGf3S7Ga4kJmeJUrz6f",
  "key20": "BEJmwn9kHtBgtJPgeQLUHo8TeYyjtDHwe1EBXErxqMkcvfGtywyHZMpLZ4hoHXuGZPEn81k7QUVbRtJdufbztgt",
  "key21": "3YR64k8cfmxRXmqu6KpQGAdF4aYcn71Ny5SYj9V7pYtQYzwLWUtssknMRLnrZDQAKQsmCFeFA4ZF3wbG1tp1qaa3",
  "key22": "39tXbPfWmaZaa53TLAhjcrqqUThtTE7wQp3QsUWgQd9ZrRLMwa3hta6LMPwQJcdtPLYyLLsbeGNcUTA8uy6ACGq",
  "key23": "2YJBs8BXhH62h3XGim7pRRAu3PxP5y55aPbkt52AMoaDSyVv3oLM4FNz7qdNVFtsvU8xrBU8VfkvQyHBW16WAVZy",
  "key24": "3kDY4MUHJuUazZ3wjohCrw1BM6Xgn8WmBupk5EFn8hNhByW8D9dNFtx5mHqN3vm26ZawYUZckPZbJm3VYmGhSiKy",
  "key25": "2BdWRJbtWp5iWvSFNiS7gHKkUJb57guSptD3F74Spv5mW8Ladr6ohzdeDD6fhwP2sDua6DqUQ6E9zmiUCzckhzcY",
  "key26": "3juzuScGUx1PKS6zUmdkqyknMJjSvPrRiwbkXqA7eeeqabJEuuXGGHBCKzkjUwFJhmMjm382Y7Rto94K22EKM7Qa",
  "key27": "47sYCHPqeiTXQjJjSusaaAgXz7Hp7RRdxCv9AX73ww1JKtNCnjZo54SGCYUU3ja3Bj8LvjwyzhMkU1S6QRfgj8p8",
  "key28": "4quvXJqggFG7qeFa4AKKFkF9AWPd7meABkko3vcvWRv3CYNys3mZxSe2s9pdZjfPFKXHPfW9G9iSu6JwEDEdbJva",
  "key29": "2VcwyN3E3aBC8KjyVpTNynpPh3qF4ckztRt7twQV24HDGoLBuH8d5icCwHsiJK38xbMB3E3RDFnXqbk7xTabAeDe",
  "key30": "3gQbjWNYU1XzDY1TRz9maW6CNiiTD9uzZ1wNeo5SYJ2UkmS9scjRtgEjBrf3b66biiPrj79BBcAdqAMVVinGybCd",
  "key31": "2vZ3uTbBZhzWAsmtQYTrYHAD5G1U8KsSgJeodV3hEcTiKqyRzF8WkWiyyj6tEoMd5LEaHfpKq7t939XpEHrSioYi"
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
