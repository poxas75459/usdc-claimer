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
    "51okFUYNk9EzNQ5UNA9ywExpmac1EMDmL51P1BbqL5b2nCyBWsa3TkhAPp3wcNZ7co9uErnuRYvh7mZ4y8YmAjxe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2txhxMrr5Ya9nmArmhhYw5Q66E6AGG4jBGvPtjukZGVaGRVqJmjDShNdHrBsg5uaxKbUFbTAbibkJi8TfTcocjfP",
  "key1": "eG1fSn1ZJ5bPsvkD4cWkk9onnchMXpyZjtr6bU46FDR5AW9Yv6T2TJrTWgoTBD6XMvyx9NpFzvpNypEg2ffcWYa",
  "key2": "Kpn2PvzGEzQ5ZZGK7f4APJS9hFAorLWfT6xB6DN7PpiXPwYNFNFAv4nd6wDVinUhoBa3ugxpuu6taNHCuryVYqz",
  "key3": "AXdCPwyhzkUhdQopcqiCYZhTTuUQ8eXgA8abZbpJBHATjCu2jaqj9F1yfsaRskNo8cJvfT2REBSgopSWfj4HojR",
  "key4": "5NPb24ndeymy8Z4rg5gRUPuLHouageUh261KvNnRh2kgJCBNwDtG4QZgUtW7jRA65jWYDW5dpoamUuiurdjmsesn",
  "key5": "5uq34Rq157e5FkNZ7KrPA2ro1RWdPS7EKHGQAMwexkz48mjXoMVn2apRZ4HnSSVoGnE6Ko2xRd3cDLZCf6TjXPak",
  "key6": "597YVaiKnKEjaRZezBAYUjM5yBF2j2WJVU6iYm3WAWqeXdFqEWrLB5hNvYWsZokJuuNvs31wUBrAvaBubi9DPdui",
  "key7": "5CokRP4gNEJp795S2v9QxFqhZ7Kgb4AJNa4E2bUP8cG45XCo5H6ir4K21SAA1CLteShaN8w1pnnharSdHnGrxm9N",
  "key8": "5NLxAiMbnTBTRCbd9gG1CCJFoQqyGdVWJD2pAPsjoDQ3dZCERDQWDE8PpBkjKzSpxiUSRznd7ukwC5ub8sfNcRdU",
  "key9": "2tVvmMydPyiSMgo2mE2SxKMpC5Ltai4sGd8v8hJPV1SKyPM3d3Hkn8z6DKZFGBjoez4ihr4ttgcp5U5hRAsjUW9K",
  "key10": "24wb3bf3c5wRqT194oZHMhPzdyaDU8ytn7EaTDezkacKqCakAtqSzJWzSBnnArH1dypknrz8CC92yniwcJ6vFxc2",
  "key11": "7qSAfhS1fcueUtLWqfAoA9GMQinkXoaaF4uq4pYY8rAfMRvRniuMij8epbSLz8RmFFBMxSehToXLPvh3BMZk1hD",
  "key12": "38XhNscqQM281xDwvKX5bbAmw48uSnFEje63Dks4Rs2KVqZSU1nLQN9Tpshrxcf2s1ti7KZKoWWRFYJmsxmcsniv",
  "key13": "b1AcTEA1feLx321Jchco3d56fWtYbNrqodKrDvNP664WmZszKJRKB6uuUUhdcMuaFWzeNvohjDS4RtxT1MJct5w",
  "key14": "5ohveNs9C7hxV7H61tzDMnpiQqg1UBYjSrDwuJvALRF44zBMtduvGFaTgyqzdxXwyE5UBh4S2a7wmMWsaEDzj3rv",
  "key15": "RFjEuxa43fKdW7KrD6GtvJ72ZGeNqeYYoTKqQAMjwyJPGp4nG4mzkjfsyaPSfHRQEDYtGvyZN3eWSQKfkutgz5f",
  "key16": "3kXNUvNbwzk6ZUrkWKXVgufxpu49o2T7sHuUWpJ8fQztGRy4GGapubBbBbKomr2zJKq7eW7pxZghRcha97tztgyp",
  "key17": "4dniYHCfvUceNRR1FtmYrXuBumJEH7vScHLtM7hrmB3YK1TVCP3MtT7RuXFwk8EKVV9jNVsm5a6WaxfFSBNzDyWG",
  "key18": "2BLqC9D1NK4qrz51sh1d2YNFH5u3yieCXKxtZPJVkStEZK4FHUg7kgyaW3US5ApNgNKu6dLFQ2CFNeWLJyTek27D",
  "key19": "229sgSHdvpGY5MwUqekuHs4e2sAJnC7LQN6vzppp6eGfmoEGwteyWwg1MLrmopbgMVDSv5rmTzUjJYR2rAuvuRLF",
  "key20": "4HNh1CijFkvpriMemJC6JzzVc4yGFpTV9iPuiEB4XTZk62EonRMzAmqKB2SNjsRDSK7GQk1Hd1qia5Q2YUTN3Ute",
  "key21": "fa6QeSTKqhzU8ZqDdMyGZ576PWhc2k8hgnwC9AmxZW7YDtxe5ZxcASPBMsb5HmF47x13NMPuYF1RCUV2pqSFKsQ",
  "key22": "3QSqkWRhN7wEDJguL9CTQGERi2P6zFmSYKjv3uK4BRsVdTYKK2vLMsD6kCA4G88i81EV2NZrEgiynzzkT19TpAkc",
  "key23": "XCqFpfL222fwR4t8j1MB9YZTDBJWe25tcNExpffsdbxM6wTk96zkB1Dh5WwCAyEvaC25XyXSQ8gLQwickzQprhV",
  "key24": "2beHzF6G16sNeLKM2V7EfHFWCP14UWmThc1u82gq3pp4u5aDPJwu7A3eixxWfeuMfXf7HxLWXjs1BJsrH8LnHjQp",
  "key25": "3aAtQzmgBMG4sWEun2FtLS4UTzLFkXR2qbRza51L6hs4CDHvMBs1z9dgrZduBnHWSKza2V8jm4LDxbMkHVgB8VU9",
  "key26": "4nuZoYUEPhHFNvCXwKaFrZTZE2nNrg9wXhRnZFV7WjBk7bktuPeinkup2boRd5DPhJW7css1VQzuvfmwRWCJvX99",
  "key27": "3pZqfkxZvYwQP9ZR8rY9D28353H1746QcPHesQw1gmo1Sc57NNFB41bCfYbyXCp7RfEK2SKziYTXUHLcu863Skkg",
  "key28": "5PGrxZcUedDGFELQDav7fm4E5JcDM9XN9vLyFEhBMx89agz1y8oAuPio3EH2FtqbC9A6ds6ut4Z7NsMcX1ousfWu",
  "key29": "2Fz7zmwmjVwEznej3QMqGsGW1K3Fe8LqCxmAp6WsZ6YFPuBVy8DMpc6RttZoZmhkAaWMAfhW2Ln8BSpTab2mzm5a",
  "key30": "AbNnzP8nf9Pc3XssxJ9zcts3ffLu9E2fgxDSPirJLQisFiMGf2Mp7Gj8r4U8rvTLX2nxdAMTD7YxPiVmW8W8mdu",
  "key31": "2Pm43pMLns1qWYB8aTVR8JKmSXYjFoyptZwQJ7dEc3swbSDsPucyNRGQRayWDKntX1Csp9j6gZ3SH9ccfN5mhfuu",
  "key32": "JTAMVUg6UHVnL7hu1MgYXrkamaKyr2rdttokJuekSGHPYou3yLEosAWDxtpoPC8qb23s1cRz83kZvz3sBHNVfZT",
  "key33": "642FiK2Hun7j1Wk2wJJPGbjaMMhPHK3HZgyy865WgWLjyX8DfSWpcXqS7cF45HPopXM8cuFAVcRZUSjE3FHwFJX4",
  "key34": "4G9mnNVVXYhqytfJT3m9zu3WcGwVsneQerm1h3zBr9vCL91pFqTz3tQKDYHsVzDto51gk9RRiwTK4jwHVrQeZU57",
  "key35": "584jAmfDajL3uKsoytVdXpKHEcFkTxFTfRd8fYDKUmRu6c5D2vWUNWaitxxDM5XMPYoQoM5t7jsvq5cFJ1FjZAST",
  "key36": "2rKhjifcww1wffw9wPnhMWhZhbksFoCXdq7AoHZvmAm9HZ1ND4iPx8Vpfj7Qi6DQZXpW3CMJjixAuggrvYspzf6y",
  "key37": "361BKByU4tjBmr15ynZN1WVqx8dQpu9deAvwwYQBGu8AZwFtS4aUHr4ZePt7oj6Qix1SLjWojj5n24vZrjN5QSjU",
  "key38": "4bXzM6d6gbhrQMMvs5r4QHZUqViCqBu7F7SYDBBgDiQs9YKWRhkoCQwTGbmvv9Se4ndfvYFCHn1qBcaVnMVdmZob",
  "key39": "2J1RDVt6xThr86Jfbwd4odcdYiGEZ8RPoLK36RTCyASdfYjZBnH9XcQBnUzYFuyzdUBBLeaoXb7sx7CayVEofZhj",
  "key40": "5i9GXrnYchR4o55oRyAAuBjBEoVTco3Roq53xrDE5tbnP1GwpHKVXGf4pMrJERcxSDhTn5WLR2TGNEq2P9fQ9HmX",
  "key41": "5GLkrT7F4viQetiodt4qB2U97QJWuD4Av4kYr5RggVfiy2LdivXgLgqrCaCYfirPFoXxry9bvoh7RBoTNXssrjr5",
  "key42": "4D3Hwy2yqhx2A9rSxPrmxdoZsjGvUKgMtwHsb9vi5RiQxNVScBKYYsJuHVJVtCgcpAWWADs8zorYXHCwJa4Un4mN",
  "key43": "4SbagEu7scfVP3fYzE7XYvDiUkv2HuuExTBCgtQWm6zFvKSYqCKkiRX6fuhCkX9cE3RZ5t3omcuweLavAyxcFssY",
  "key44": "3aHXFTvDyAW21iVcKAU27bofcz2jTYw6uabCU3SDvWiUF6DAdotfjoCkz3b98CqLshviDRYAFeDMGYCXCKV6o9Zb",
  "key45": "5udnDNHynR1fndrBXD1Uh9CLvYaQQmPQMVVbJq7A2fLNCMXohGnwnRkpdcHrhGGjc6Hy7gqW66KfeBCH9ajpwyen",
  "key46": "2YVTnHcbZFvvmkidtNvZeCfdSkDK3WnjbbDQEJzvAyAKrr81nwphXzbPyRG7tNmnxTAfvkFsozCz4FtVJ7E9FAgM",
  "key47": "5onMi7f8Pdm1sGZLZkNjq4fjmyaMjQrcLGeDVaN9q1eV18n4tbgWrcBMmhZ18FbunzHuzF6c1a7AhuQk5kXCU7qA",
  "key48": "5VfgYDMsrYNgBvFxJuvuomvyT6dd9MTf3aR5TPtktxrzhvXvkfrAVcQcjfyJzQiGdALyEN3u7E1TcwHwKMvESDVN",
  "key49": "5gMGdJb4i5MLuvo5N2h62VfrFVg4twAJKVNPGucFVLGHrKW87MsVDFd9gKQr2TYyfABLpmj6yJFuPL7Mn8VEPXqd"
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
