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
    "uvoKiVgec9HXZKgsnf2SnuUm7DKjUXZVEiqWbXnSttWsxvUun1RXTodF1hg6kM9KNpfjju2ftcGjejq1p97zJaE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZHu8vjv6AuZsdZtw5uygApai8Q7Am33iYfrcCJ1rWdvRCiQPhaDsi6KkVSm9TQShN5YhySRP8UhwPbpvdVNZ5kv",
  "key1": "McJgkNzhMpWRCUybB3gJ8n1EzjRSBM43i4nAUXCBtAiLPaJLJqNcUm5na1nz4F2H9orGjdcRVJ6Hv7Zn8DFird2",
  "key2": "4zMS6BkpdiN3R8LMg2dHdwKMWqJsMoV1FyaDYGrbXRSkd3GQggsa9rcVAG1jB8SnvYqXzNyLm9kDWJatekuRRa1i",
  "key3": "2wAzKKQL5FXPdujFP79cccuKLTKgRpwtVyDQBkEA6xau4u5eBcaBAn9mLpN4A9dHUGK5AzSqRFLPWxGhL3FBQwnU",
  "key4": "5pCJq2G9GwzdNFHxxJTVWVJDXEZCKdjKM8PVvcXqihMba7MGxTp8c1bRwox4qRyBBeW5EoD5ppt4gV4TeUpUDgR9",
  "key5": "2zxpZqHihUWDYpjYzxo9JPk7X3mieimpABUjp1cAiZWqg8tS1rGbedfbeRPTns7x9iP3kUCgBEshEsCTTQCc1KaZ",
  "key6": "5pjZ6w4aACNanJ8pz1cFayhnuYpNkK9kmazHAeuzijujpzarCu2TznFs5DTvsSWSG39FRvwQ4eurdr5kc6K121vS",
  "key7": "5eWMi9P6BTeGukTn5xb9rKSBexAem6MZfmfBbwabrWiD3TL9fZNPRkced3f1eHVV5hFEh6DpXYiqk7H4bMZ5yuvZ",
  "key8": "29DBj787GmCDXXipecd9R9SCFzpCwvkePqWEAo6MjfRXy8KK6YAYbC2qDkEWnpX48oifyK8HVv13jczSd1tRp2UZ",
  "key9": "U7c6tWrPfTK57s9ymhZNqLMEkKjKSSj4kqtuFFibQKYpkz1coHg3xk6CZfjGsKMBX9HDp4kXaM8tV4LjCs4SYev",
  "key10": "JPJGRoaWbKdXrZbJnhymSmHuddfwxA5ioZ43JWMmfsVqiZMhXFGG5xwiX6wnbgzSCRXn2Xny7U2kRrDgZ5MtqS4",
  "key11": "3x8MYkq3Nhk8gonj55jFBDv4A9Q2L6Fwv4mZSctn4PaRHoULbPn7S1AJa9JEYPBzNAncXYg8BqAre2Bn2k8RboX7",
  "key12": "61Y9DScn2beSt6dV1G8BXaiDjoj8A82TEK9BSSJewWhW7Bxjv9hpwcwirNtYfVzwbCmRBLFo44sYjaZ48SCBHFX9",
  "key13": "4uzwPyXiD1emB1Uss2qJAtZ3MewH3dop1Qr4dCX6jvTBQLw851pSoEAz8bRYYSiNcasT6GTyrSNpoaPai2KbsTQp",
  "key14": "5DqYTtVnWqxNNJyvEpLSdhmkgsC8Hr5KVK9fYHUuT2yyX6PnqYCEzf5ZKbaLp88bAfsVd9a3vwyRskpwRWgjweFH",
  "key15": "EBeuojEV5LwjaPeEpBUNUMAgVaGZKusNapRKsP9k6XAKjhU3WPDgaxWKMoP5B5fSq497M2Wyg6vGjEAL8YLCavv",
  "key16": "RQGroRK9e5JQ9FnsZtHMEsxrUUc3ReS19tG43WhUQdgFGWKFG4EQ4F9PRE1Y43Vtx5pQUTEWFdUKpZegfRMqtqE",
  "key17": "b7eu5UA7pf4nz6vm7hufEJqYBrZHur6SXghMqethk4hnJspYfndnmPAdsSYXFcGf4duu4gL44ZLUGGz7kXxbsbK",
  "key18": "2osGpQ7Vvsr97iHcNKuXuXNxiyoPCApko5EG8ES8szEPA516piMWX1fLY1rxjxc4mEyNTgUx7aWKzMisgwUMquNE",
  "key19": "3Sxxf8f5W7sEUQKEqZBU25oxcGUEdFAZGKJY28kWHDvm2Pbs1djUXtngvygYpkKiiVJanbEXTQKHBFaHwuKKA5Y8",
  "key20": "WzoTAbNUwZj9s2tFq8QTEVV9tovNAX9pP1d4tLEQohauqvvvzmjYKE18jj5Db5sAuURXGHNo5KxdFaM9ed51aZj",
  "key21": "5Noc1RTeYT6eWabvAaEQ8XFWgCCLkNgmY9UVJufJpG7nJiri3fZwddtQJzFbVSLrgkdx3EZQtZjAMvYWCT47k16r",
  "key22": "3LaiUMwkZxZC2dxp87ZiU4BEcrbVecMwzDvovW7TNhGnt5TzqXkqCSgWhdfXArroKoJHCaZkdVDNdkJdnQDtXGBB",
  "key23": "4fnkTUAUfde6LRWv9NnfJzb26vftnD1f6AdaTN8pTebnzQCooW9jyxxY4g9D4cjKNcfoJ497ogQepoLng3NigosK",
  "key24": "2pt9V1mUySaFf43nZAWhcTUcooGmw5RTnXPsc2S9R6qqaSCxki5zpqPvBKcXLfW9KS8EmEqgSrSGiEXfnYR5PQdB",
  "key25": "2DL7niPEEuuCDiLhaqZtJFFTUhPfY4QQ1KwDJS3LFbzcGks8tDX6UWimXqbtNQJLnFGy7GCfsoHErZeU8kvuALaf",
  "key26": "5CyEA2mof7ZcbKcK1pX5cWhPDjcxU12nF6siNaAuLJW5yE4UUZ9Zardzn4SKydqnAcnP8pBGzB5Afa3YqdLx5nRW",
  "key27": "67gmAxVVRbZxNcY4pzTNZVXCskdEGsxKE25i7gzMZRoRatepqbHZPMKMrjQGqe1kuryFHMZZh8kWTub1B6rBZ7FY",
  "key28": "4q8t9w5VqCLTU3aHDkV8NHgUBtCjNhSwgMUckprTNk4uSWF6DSCgBRJEzxxSz3Sfkc662vS2tua9ZGwtAPmd87eF",
  "key29": "3goWhH3tWd7LfREBUZ2JZ8nAHJKrTRwJKg1JpMNyHowP9UL1s81Tg3pTbjonXBiEJSYT9b6wEjjMkuuZ5eWDa4kz",
  "key30": "mE63CJq7aCzKDYoJfsgxVcw47fFmkEv7YyDW1xMhGxk7NpwvMj9wAYxLR7ZpfiDhenbreuK9StbKmkvvwNumrHm",
  "key31": "3PgoTQAi4JfdWAU1DRF1tSieprhp7hQB1axMN8mpGZhPN4dhLBWt4G3LkHfHbwVvELZVbjbL78AenkjQAEqtanS6",
  "key32": "37BohKwp5YJyofwiBJ7QLZjMJgCC5xhRs3NJ3PQ55GVP8BMnLvrwEvoKPTybB8WHtzVBsvnc8ozqdoiRxxVaHYaj"
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
