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
    "3rMhP4Fk6Bryc4wssvGzWxPX9oHs8DrYZiYxDrkiWGKep6hZm4w9fwQtbjreq4YdVaWrGN1QCAcogALABHDcoTrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b3QGM81xCueomzjAkUVXKpTLkxY2rHvvrsuDYz6vCqThfGXMBnfxRmrvv5wjfnx1FqUq4tKTrb1Y2HFDLyNHy5j",
  "key1": "56z2hnd9AtbDx9MaGbUDRZnhQo5eUvmeSwBqDVxNB2YutGad1t8Z9oWmmNEbTWuYK7suANjyYgEkPf4ynBPzhsKM",
  "key2": "2yLTybkkhYVEwjxJ6hjJjbgkDwXedNsDsd873TnftVLoRAXfCEKmRrUt17ZK5gDhc8B2egKVYRSQNTEyq8vscCrj",
  "key3": "5Z4FML2zf2L7v2kGXdsoqqXgi3TS42pS1wNfcABdD5iUPoPcwuc7mhm6zsyuw8W8z7yPQbxpS9yb53E79V1BHbVc",
  "key4": "47YkLCtuein8FFMdttVjCuvN9y7yMiqBhhohGWeFB1VU6qsT4hn8ktvJGxgsGvSDrFtrifviVSZpiM1Q9dpvXWrL",
  "key5": "4DteuTqtxHE3E8Nw6tJ6J1qiBp68fQ4V2Z43BQtbyAyPqUhfa8CM1PH8wbhwM7dHVc8ocbUfNz5LKL8SFjNZP1pQ",
  "key6": "5ALdwdDTpkT7qgTAPw7bM6347WXek3xRTJF8LESqKyFzrBR9NiD3eTR7fcU2A895bqsmaswCn4yVVZ84XH3HtV7J",
  "key7": "5f4DVZG2TTYKM9Hp3LNQmUrfQoybTt21xkD3LqPnzRyds7qF7guxpeRHayq83xJZARpxgRRJkeCBu2xiWcFBqbwM",
  "key8": "4ZQKTajiVRmtqwxk8eNSDYmT56vDuw9NP3UQeE3KNe3bWqmC23iLRDq259oiZtBV5UZoct3pyjbgxz6stsXnnGyb",
  "key9": "4rWY8HueVE9PZxrAsf6C4FnLyCrtcKjXJJhojxcFBgciDhumrT5AYfh2QzRWUhAJTpzHeGg54LoRnkmkbc5ceNzT",
  "key10": "irzjh8tG7hr6CNohCx4HtwBaH4QfghzAi4CBheD32qSDVzSNjGwaGczpmQy8ZqVaMZuSKe1a1RZgRF3nv2aMp1L",
  "key11": "SLuUVxDN6JA71s5Ab8jeXt12tk57HCTNEyTfy1ZWwPMcgcEjkLCUp3H67odMjc2n9HR52iHTH5zbnJcWgL6AnVV",
  "key12": "2qx544VR6KDi4mzXdPPLgU72m4KR4MWdWAFTDWsy3oXKeE53ZYTgQP8EXJwxgJcoSo55WyWKHD8NHYtmKnyxkbvu",
  "key13": "56Hgguc9MS3UQG8o58v7fZXExiXRBP7UNkX2TPSA1anQbcpxkP6teS5dETk3Th1YkiMuNTJfF3hceBxGX9R6hNtv",
  "key14": "3asx1WYEXJSRVPk2KvutJZxYu8QhALyP8bYp44sTcBLsQLeWUHtXcqoBvZquoQPpBGickMzFJN6Ew3jh7BYVApSR",
  "key15": "aQAhbvxpanVsEn5zVp5DJ1y4sgj24pHHPkNihpfCtYpg91ix1Ko8rmQzbSZe3pLznGAdbVyUuwv9j3Uq2wzQSUo",
  "key16": "2JL2iBemC7UReEtk5hWg6wb4rcEHCg9fJfFRv4nzDwDFuZzgKiSDe6owUftHVhfVcaEHKYANCK63NUTDoycDp7Bv",
  "key17": "4s3KRdxK7rRdvdjWM1DkDqtdyVDwrEqgLLvyyDyXNkYJ5VCPbU9B69RNfwMLsLhTwh2CZd5ajeLvfFBHzcEGsUUk",
  "key18": "5rSRcQ9yiqinX9uzGmbYN6h7TcSpFU6anpZ6NA6YgvrGFHUiCiEcw4mJfhawgZiuT22cWceugTx5j4gzQwLtdifV",
  "key19": "3rGw9PHFTSouyduxythTnCASKCuhcUtyCkYSjDQTMKCJ2aK4WVutPFahR35S26ij215RNCrazk9B4nXs6iEratJ4",
  "key20": "Z6JWeXBG6RXp2XExmP3vk3L95TvSSp1ZVCYpEa9kK5AAQ5mwfpt9EZT8Yjp7s2yEcNFwUSbZiN1V3sRyarWo8U3",
  "key21": "2yhD7HKfHrq4y1nx9KZgLQjmQbn1BZi9CrVFPz2EXyMB1MwKucgFm1V31Bf4aJAYeRRQ9d13nuQ46uGv8HCbitmP",
  "key22": "3EnJP98fD4vuhXTGfNJYdc7y2R4teju8LJYMxuv95QugyoyBwPvzPSUBHiJUM6NVn3z9ZfiG26e2QoUNedTb8k6R",
  "key23": "758Z2RgSoaJELpdeenSt6Ljg4ENbnhCKKD787eqUycMuX1DPgy2WR4ZNj3vGg8SQB8cmhSpJmZKTq3ZchRPy3G9",
  "key24": "fxy9fNeCBJ8uxD1hgm5B2R1nRokAnM7wTLkkUGG18pGzdnLpDnPxsj5aVM7VHpAV6AJZEqFRU5eWFKm6BdYcVHL",
  "key25": "4Yd9AnHdPpPHh8bZSy2i8B57B55WwZCtLD3xFJQh117F3SUDME2vFYikpaS8Nhg3EoGUAPnMGhzwijSWfNVezCYj",
  "key26": "2GJLJH2N3Yn2cJdUMC7fsYbzRgZUHvGjYKMRW6JJpVjP9qMXzt4gvjDiVH1uwSArvjME5wXk7MsmmoUPnQ5omjpt",
  "key27": "2f9Aqzbqyx6xodktHbVnGbxi9SUJZWoJs73bhJMxyGDcqhUSyXmitVWM1zPskrpM31ctDgLjReGSsdQ3pCEWYnU2",
  "key28": "2qHwxvco2H9CsoyhJdrPhuBCaYPRNZXa92zsVdxuS9V8ohGfEkaqQH1SLfLZj211htqMQpm9Auq5aE98MRL3fjsi",
  "key29": "AFmkmJXTwnKpdTZoY4DwSatthypBggyEJrbULaDXHJXACQKwi1M6C89rFUpEp2NLJMeVRnkNA5i3PkkRnLQ18i2",
  "key30": "fFLmxHhHSVv5QoSDhrjtQiYnkn3iZHuNAijTsXP6djdt36wgDDxSX8LdwMMymSKEZZwsHq6bFVeCqupL9XJVw1R",
  "key31": "5MN8vQ8Q5aCuPGmoJtMyCVPbxe3Pt9PU3RTZPUuBUsfewxkA9NvScxhDkPnVtACLe8BZpvEVeGupecVznM8WWS6R",
  "key32": "2TZzZeBzWbee3QipbR7ib6VCKKbtzb7MJZTPpYQsMPnLRt7Pr66Wf3RGx2exGicL2wLbPfnbctkhVAXc9wPUdjWb",
  "key33": "284Zcd8zVNWX2cKGa735VZ2rwVNHeSWLij1rWLviuZJRSAfg7YAQtRLq9DM6TtBBBSvATZaf6zCXP3yzxJE6bbj7",
  "key34": "3xPhFMD48ZDGtcABDEjkFcU4gDqBTeLtddWPNqD6A4a9Pcf2NxcRyBCbizujBhUrsXfyvfmQd1mWYDdyho2PWniv",
  "key35": "5YLRV5H3dnFdK8ENDTc9mJ8rdqUwcjscM2n7hUXN1b2gARFSrztodpPw9a7KfBUecPtYygsQK8pXArNWm8pHjFHB"
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
