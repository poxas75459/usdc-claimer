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
    "5DWeeQReu73zP2bnHTbZTrXNS9H6vhtwJp1CfYbQuk8aXr7DSrict6fEyXPXgrb4LWhh9WcsWXHp8AvfzNwEJE4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29K7Kpy1ybh4o6tEnRgNX11hYTGKJGAecXb1VJEmUvBGYe1b2T8jP4CJCSey8nfU4gUUhwNm6ny2SdJwMdNXjLXS",
  "key1": "4bsvFDSQLVYHnSN8MFa7gYUaCyWb1KctJoupxutLRyfFAthurxGkTR8gUDmkfh5YJw1nmQ1fFw8aRfMaJL5reDih",
  "key2": "5kW6KP6UbSPumNJBhpTUB7nfarQtwUY1ufa9upSrfWBeU9gz592jYpfipWb1ZssHatLw59JU6vCmnnm8bkRqE4Ds",
  "key3": "mRJjabnMeqNAmtaMZa3oo3MNyzL2kTixWnab2ZNJWQhRyLpHP1jw89Tba36XTBR4FiDg9Gey3g8ieMDNnQtrrvq",
  "key4": "2JSeGvDLhaPzahT2Z1uP9bUAJD7GpC8TPAtHmSCimaMH1RfDBrjCKGoTg9RhfpqXuRLUNBZTvd1KsGjRfB6uyS6C",
  "key5": "4yoWs1FhYyEXAaHZBCRDa8oQ3gPPFGTV4kzjWQTzUSy1wKJAe2Dmg2ChpE16DzsnGKLCJEPCamQ99KjozGSV9mf4",
  "key6": "19rNdYdZCSEBLXebofGqRT2paMszRGPAMsQw9g78WwEPUCwCsAkLDsaL6zRx9sBcRSqFMAvGeJfBcRJ4VgFEu2h",
  "key7": "5DvV3QT3EVUwj8FnHwJSsjQPzHCZQFrZNLgavswAEz4T8F8K1oXJF46iRE5hGGNJd7zwv9bchKzbxgTi1UqvWGAB",
  "key8": "67p2QyxqT3VizZ7ZHeo1LAB1GyL2shz7fwKGhw1AHC3J9eNckCiLhfenAjaudvfc4XtkDWhV5cEugFncKPTRpv8G",
  "key9": "rtQN8JYTNP1QTiApEyCxmKtBgMT9rfccRQh2rnxbbDZd1NFcRC1VKcaQa55poANtHukiVgKWoru9nPRWDnEBiqi",
  "key10": "4ASsRxQs97geKgLZJkDUewJZLBHPJ5HA3UaPu4S2cr7xH8jWRmJcJNuMoUdqa5KZDshW1xf4QNCQMERLtj9jbocv",
  "key11": "3LghtuR4EdSmQzDubi4QPz9K7BQLYoHHifooooWDxdCH3HC8xt4euuN91y7PJaBQf41mTmVqmhzePDCQT4Ho4Y3m",
  "key12": "3aamVkpxhgz2FXvdBuvuQFKqJxfuN5SZQmXQxxK93fw4QZBp6bNDy8ajJNQZ9qncVyvGzCsamiQxY7LkobvB9YYF",
  "key13": "23rATAsGEZR3rWCchav9scTBUNr3Wv4RWjUd6nxKeRoL3nYZoLK4Js76JD6pJrJMDdkFXyS9L3jpGdQGgyGixmBo",
  "key14": "uHZW2RoW8Q1qxed9sqb3HoqMtikuFc6zNhhYafd9G8WzkniryVP3uo1X5mptg5NRkenDrAb74HUKyizCbtGxnV5",
  "key15": "4p7XXt1NfqFQApKrwp3xMLTUgFRESr2CbssMiQPdQKqNn9BdJmCVH9hecqFfRujHVPdUuCafhexLoKTWL3gbSxq",
  "key16": "NAVq3W3Y4k797fnWDdeXcn96x2YbhZtxGhLxtR4dWAUKFm5GamNz9RumToPgomtmbXjj4kHJG4dz62rsWCG1NUg",
  "key17": "37y491Cmfs7QmPac8R88AFcMG44JPvE41pdiUnEjGqHjqBjQ8941cpEkBhMJMdqXQhnBPtZQwRT2UhrWtazBCLBR",
  "key18": "38ofmxYa5umXt4MhqEkzVbXW66sTpeUDcbnHUDEQuz9EfvjhBjvTzPT8Be6iPVXnzNnut6xWzCkkkLCjtGcqhYdb",
  "key19": "39oh2UKvDG3DPinevYVLPqA2pE4UPs18D6oLWB3f9nRwV98jEVfR2nvCmtyscQ8fGynyKconjdDqTiwwV3ah9dTP",
  "key20": "3ZQHqaHDT2xX1dofxS4YCcHzSUmXRgUpwmavf54gcbD5jHtGg4j8CHL4tcsKRQs4JdXE8HgNnLdPPmXjggs82e7G",
  "key21": "5Bsdzm6DDxhdmRgE6yf7133aTtoQf4LYPGWqv41GUhjCX31JtxU6nazp2vx1Gho4gEb1QEYibRRyLdnhSpevP1zT",
  "key22": "eR2VBgexKBMWW6LCSMisuARAkuwxNNVWDRZeFnN9BFTryBcnzJ5QpxfX5d27kuoxAwDRRim5RBWaY2WiHLbPKue",
  "key23": "39Rz9SPFgzVmV5LfkwdP9jMiwjc65Xcfpk2pyc9HtHKtCM6uUMMyraHTW3cy1qxWmvaHTtoSz81h2wmSxvZHXvP5",
  "key24": "58LtU4q5A15yRN7LNGoLZgxp4cUdAN2JSkX5hKriEH7Q9syQjA3WoU24fgdWdHbkMZUM3Ap5xZNTfT6J94DZqRDr",
  "key25": "3v5m2RSoe6RDCLUpykvY8Ln8mFJFVvhBXxF9Mr6WKd62fL6iHuy9agLpdsgvhWLphuAWrThZYRyeQrTtAY75vP8g",
  "key26": "rV7X6bb5tutM7j7WJufKV7hz3kKmWQSJNNNkhZGRk7Ugh6P3NiH5fzQ7kCmCq9QWkNWBKCsmRWMAawHNMmjrGiY",
  "key27": "4qrWGEzMG5fDsgCiVHC5J7yEQ9JVqZLu3rDDJYo78SCD7sRwVeRE6xak1edCCNUf2upFXxvxuAcZHwfiyYE4ZyuS",
  "key28": "z9r5rzPR2yJENX4XWGjDJp9yXqr8h6HegeU6Vy2fdPuLTftVAQB74vxjwNu6atv7tMiGoipo6XsxiKegpdUbbHX",
  "key29": "DmGyJAV4a99P4rtaJ9Q82uRV7U3gNmi5sidTuVwSrA66WedEX3i14DSaRRybE1oezJiwZgQEn55gtHPEmymGFbP",
  "key30": "44xa2jiG4ncTAdxpJbDBVNNeCveiGCj69VMBa29w28mu733T9818vVMM1PWdDb7endnKH8roayp2Ld6ff4LFkw65",
  "key31": "PQ3rThXanMmCpfQKHmYTJyhqzugEtJ6zUe1FFUgs8JgkzhuaNSVJaxA5dbaGFsN26Nx5wYyXEeUhv2xTaitU1D2",
  "key32": "52tm5V6yKxdUPhJFfDUZGoYTG37WCiDTRh9WNHZrjDoNhmceXqQr2ijhyB1Ujw3wgF99Po48ADYd8Qz7cjdDzLmx",
  "key33": "5xNfenoK9nTRAGoZWmx4MSgxDrvKaEmr48HFS8ohQhGPVwb6JqZVDjnBJNwsQgoo4RqonAgSqYSiRj9yVYP85wWs"
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
