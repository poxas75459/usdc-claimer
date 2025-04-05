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
    "3Rqn9aTCMW6ExahqtUofVGEKcRd2PUnGfz1BH3QKStNx86hstubY6Ru4bQQBkKBYdbw4aEzkGhcJWCMcoPX2Ea2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58bcfAJ5oyzGWrLDwkPyFhYUtiij2E3wXwfsSSywg4KfSCV1tE1AJ76zwJTFAvP2ko7ibRfJawWsQX3SrjzcrX1U",
  "key1": "5iLWoR1YZ3eWbogkH5FfWcKc8W7d1YfNZj8FHuTZdr7q4fd1zYMwkhnvefdiPvy64MTaPdMXS1me2oEjHoruRnUq",
  "key2": "22nYnbqkDwbMeVhWqVBRzMYva8uahdKLyGSS8tCMudzTJNe9FPYWNoCbbG9nikBSyUZW78J3sf1DUThVDMCCrx59",
  "key3": "udy7wXpYSxNCn3ribAGAXDmjw5HCYYqB2UamujCG1Ggi95Wkht3YjZDFk5SoAWzSrDygBcV6jHQbDMYn2HhNzJv",
  "key4": "5RoaV4FvPxpf5pTg5i8gwKEVAuvDXKNfaktjjqzkwC74J1Uhjw9jUV68ocZSRPxECHQWRdh9WR5mcAJ7qqYhn5Sp",
  "key5": "5ZsxQMiAqzMbgGB3MWg6KbhcJ9qsNVYXts2fdfoVcuGcBScgtrZiU4NM1F2WPLkVXzHM35eBzGXmxSrFUVyvyWcR",
  "key6": "4LPwi5LahcaE1waSsrDtwd5j9MKB63rWJKdxzgbCZTfYiJMS2CVKcjU1WS2vGnaNjBgWAHpcZdDAFYa4pzQE8Mtn",
  "key7": "XQ1hGPy9SrDkJNQMpBYPyjmAGtCb1FAvZFZWki1aZ3kVgWsPRhMWSAdr4xi4QWoeVsYFjB4sGWzFFFVvHUvg21P",
  "key8": "tPyV7aKkuqeRVFkYHn8iiNUxQiy7JKBmhuYjoiSFV438456M9oAJV81jya9tYhN996PXX8TN7yo5XLkRHbv6isa",
  "key9": "5pRxkvE53qncBQJSXwdTuDXvDTESzX6E6heTZMn4jEgt7ZFzgxECys389XTHPDVPevMFXXBpyxxQ11ToikhEPjpP",
  "key10": "5ZBMu1sw8wM2b9XFy1bafH4KohzaEGTEwgUgdCty77zNoDkcuyK2NRSxHuJeeFKEPjiSUYWzDRovZnDbzM2R51Np",
  "key11": "4LBn6f7RAHET4UydTe9DA5MbhmpCmULs7jVAMZPebEXxHGYoA1P266LRQMCo9mUbNo4bX7DACzUSic5FZmBXJS7i",
  "key12": "52EyNy3qUmfaG1rad8YVbbXZr681G4cWJbozUWeCkdGSnPDUamVX7v4LRN9ZTzgJcnCvA3StDDsqTvYKtZrq9cTL",
  "key13": "2HNphX9pyTTC5LVR1AzBRjdYhi8HWFAbJJkBque54sDGn9suRNcinCMCHdm1SFL42dj4C29m6YTDW9o6MbDM21J7",
  "key14": "482e4sTbP4HJL3PUuhPMCiLdpShYJfgPHTKMb5yn7YqPDTX4k7X3hyVxThffhksfJADsWUJoxxuVWNkPesYGrR4R",
  "key15": "4vZYWoAKWofYHt2uiUAuMNPkKKe4k9QhCUgr6tvM5zReaZgBp8DNYndN1bhsEz9wsiZRg4eJDhoE1SicnYGf6rm5",
  "key16": "5Y2ZNPHi6bbEJTei3xEfzkJu2SEwe2V7aadMFaSoofkWMwPe32NL1kJh92HUMyN8L9PqBxCKRSzMywXyRDZU5tzs",
  "key17": "ExQgsZYPRd7DzpAcGuahmPX7pEQ53zya7bMd9b8kDouGtAKesU4irmPNDaCeHZKUF499kgWKLmWiwJb22GBLv88",
  "key18": "21Dg3UkbhRCqwo12cE1WMhfQLyBmVoKxwPdxuVdYyasvaFoKxu5MtBm7rou8ncbamoUAVtp3229dpeohsTYATskY",
  "key19": "AX9BgsogBHhEnetgY1J9poVJthQwugXSvir9G3U7EVtqCPKxibWZqqb31dvTqAydX1RKVF3N6F5jvPmXeR3fu4R",
  "key20": "3kGBss4rMMYVWtMY1zEAWyxvFcJAKg8Mx2gvTr8JY8BBDES648BjPvfREH3Z8MRTgUq4aosRK5wdDRyWLinJ8sLU",
  "key21": "4rVRg4k2et2ELssFYnuajDchtqLWwGcXQrb1uMvhatxPXuUdJAuA5aREjLF2Uqyn2ZcAqdwaML8M7UZZyEEj5gPf",
  "key22": "3xEmjFVaf13LeVJpJqUWd9TcA2k9fmWwRGNis8zNd1W72TrFdw6oiLWbmGQsB3Ysi4sV4qQv31g2bXh9WqsyzARz",
  "key23": "5PDxQRathJeLnqyZbbwYtHknEHqqLcjpjtUGEbWUixCt9sknvFf8G13oHzYpfsxVrhWxZWYJjaBEQAW4822pwKrt",
  "key24": "KvjNCdsq5hHV8txxU5USTpKPVoLYypjmS2J1RXPns4EFzfXHHeftBzAhxykB2sCWA34qPMW6fh5U6zBYPiVz9fD",
  "key25": "2UtZgfamx1bLG5Wbnte2vbraFarBj855GF3fnicuHgQaeWB7GdibdpiXdw3CCoypd7mWHaJc9Y3HokiwHtvLeGsP",
  "key26": "5a4ujzmNJBsPpjsgCVyp75UT9aRaR6UBPTZ5N8bDPPzCGzjK3Juxmbn6B73VkU23gRkDjLSFto28cZd5miCz48HW",
  "key27": "3Zp3rZeAH3SwhyvHMqRgTV88kNU4yzRFAsitzrYvMfK7Wo5k4jRei9sKumzKHq5vAaBpw9Ls9TaXvgUTUoSAAuc2",
  "key28": "ZMBHBbgdhaWsdsn4VdAnYQB1VGr7GGnHjSegfN9q8t13YDecHx3xA3N4fxrLrzXu7WVJCN3E2eyjkqBrJvVff7J",
  "key29": "2hwdEirpRr2AURNXBJxzYNVC84Dgo4AzRmkriunRbQQJsW56Qy3HqC2m7DzxpX5qBwKQJzg2bfVVxCTQaDrevB5z",
  "key30": "4HvLwTbSjbbkBNwRayeRt4bKhDZVRxaGJyxZ3376bM9KaTtKbLEAXPt1HWi156U2w9huZ1T7oFEaZCCwG1ntJJ3v",
  "key31": "2hEYFdgmUwJ5emyzMXWuPGpksXwdg9iw3LAAZxZNtFZCWJ3UtcvQSvX2CKoopuRHG3LoLbcd3gbLFUb8dXc1JBm9",
  "key32": "3Jif6ZYzeQo33b1UvJfdYV3khhtkGcYAmwbpT5u78n3KKaSUri55HprwDRS6DLFTXtjzNKTWPnwN79bXfJ8NFix4",
  "key33": "2CV9kv2cUFYx3YPccvN74GLhCDAqHgPEw7VcVP2Sn8aVsZUoeGmcfuTrp6WuBgQPiAmz3WB27QVtTVg3V75dFSnP",
  "key34": "23ZiFqWbK41u6xYdC75wN1EFZnLB2sbUWzEWrnB4iQa4FsukSXYA9mLs2Rtd9ybTqDCCom5k3KX7rArQ3Up174qH",
  "key35": "3c1EGxSTdYgyhZygW7iLcgSiWH5zixbZ7YxZeSibiReouqDLzRdZiMSyD5sRZtNA3FHRJLo7jEjYUZ39R7jq24M4",
  "key36": "XfyBPP8bdyPE8SUc9AsAWU2CiNYXs3sREcnaH14HKCw1Q5aN4EEcABCow9q8XMQzkoUeuFEjtPHprMGPjtE7NGc",
  "key37": "Nb8qnpFSJG6HpJcziuTZa1UzLwsYPHHw9hhEjXBzrk7c28ThkcgnFhWhZ3zvkhCHZixiTYDk8f8diNyY1Ann18s"
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
