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
    "5SF9j8gXwJQaaRTT268uKsiqRYZnDrozR1Cr2PMNTex9PsGuVGH4Xz8i7hVCY8XwAwbrFrQkeJAX5y3VVuR98BD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51A3a3Ccci5wp3MsQRwSHEmhLj8ZPL4vQv3cuWrmN9VeYsnFedUFo8EJ4Ee7JHCt5X6sgXKTUangG6b3NjY6fHkT",
  "key1": "2cAZrhTp8BsuVKz6GgZwhmqcUTxkspq4Kv4gwd4FycaB7ZwxNCc7pn8fM3GZdt89MmDQySLuxAuSEN3EoteGakTW",
  "key2": "2XqVu5Ub6tfnLMC9W1pgR7wUECvoSoyeE3bk33DYsPzRgAwsFnzQ9Y2X36QWBFxcvGBvwKmkkGVCVt3KPWYF1AG8",
  "key3": "4AcEJ3EpNdi5RpRxGFjoDANdPQwXM1oRHbrayQP1UDDbtSAuFv7cqQLwnSF6wSpY2mwPxLeCmkysvGFySty989aZ",
  "key4": "pQo4wSEqj2gbcwUt7Eq9Sx7hxUsgCfAqDiepPNZiA1utCoxegmt7MZxcQzLiozEXsD1U9d7zWzirm2186grr7ns",
  "key5": "3mqVZpotHMnFc12KZEmQRL7QVQQt2LnYovCHb2WhcAzhqr3yjotDufK5AHUtcsMAZdMkWZuhDLHkt5NCcg6mPBd5",
  "key6": "3KVdLrp1MpNR3nTH7U7Hh7wMHDwqjHuXCagdRBHGLZQFAyxWfz9XRExPcW3Ybyzbgm3gtZsUBeEpbDUiZDmWknPR",
  "key7": "3gHzJpjYrj3ZGbQM11Axo9aoVWKkkz2hAwEnF6FAJXPkKoxhAHXZniDy9XqiuBvQfiNXPGEUhDraavTNWGYXwzMD",
  "key8": "YUtnyEg1bD5ydBoA2hnBfH4riSfQiUJcGKmLpswC2uiKNX6f8SztE9jn5dEvv8rAim2ciq174MaVm38WE4M2WYX",
  "key9": "2qgvN5MeegBt9KEb4BBaMTj7VDZDHfuBDXfevqe6jvAxyDP1zacBe9GsQU7TrrGtsJm3JCTs4G3p4qCKG5XJAMJV",
  "key10": "5V48KJ9MAmKQdfaM5dJz85sgJW4nZ9DPCd6vNwUHdqbP1YfpHyHC984VDHzbb8TuHCpouGHAjgouc9i3y5LNS3KV",
  "key11": "5ZX3ZDsQXGGUVNEooaNBWKD51YcBfQcTUvWtPYNgPskpi996ni9YseEWgqg7jpqLmbRihVYRwwnmfhgLRqndhtGv",
  "key12": "5Kriv6BA5mkEgytSz9qGDEv55dTXTuMWmH28e4HgEsJYjWpSm5FSnnGVRy4birQWdU1uh7iCoVvGnzNGkju6EYRt",
  "key13": "3BNXgYU5ttdq2WBRVLuY62Ghw9QBQq5eVyLvpANmqpYckrCTg8T96kXaRevBgn844jJnE4P6VvfuR3XRerSwXM8t",
  "key14": "57HumsCV375Z9iZ9s15yWtnFGWgrcj5hMuSbbcxcjVzdQGLoFtQfvjrJaALcWRe1yLmgY64sfWKTU8orTP7Ensda",
  "key15": "9e8VRvQu3NDc8YDNnNWkauHMGHs8F7WZHmCMtHpEVDvnM4UAT88YPsUbQ8SN4xCcF7dt1ZQURk39HyeVkLCsSxP",
  "key16": "UdhJQFAhLneWFaRgQrjcFQm6trRibajaiw1BEqD8bnTkrH8pqeLnX8p8xg5YSbxNA9Nan3e4YW85foEGzTHvudE",
  "key17": "aELrnaS27pg2eYUG38NAyWWTrvqU12EiUHewke1ZJ9AyRdoC1FRxtZDeH9ph81xzedn7JWvp7CjafPJ5YE5KEnA",
  "key18": "4q5WVmKETC1jvtVnHCZErL9uA2yv1etPmjEGLPDRUYFrX1HUsmsjLA6ECPtCRBcwbj2KS2eRYRUUuG6zMtzQKzv6",
  "key19": "qsBQLw5nq4E9b9hiRMzy9VgjV8nv2KZ4ygTYcrFopNXEa58pb9fMbMVMaCXNBt55AcCx3VLHfAWLhMAb27zs9aU",
  "key20": "4XaXYQPMZkHSdiS1R1GjwLKniuDfyHGpdy2LGPj2hv5DHPcFz5HRKJAUaMSXtE3Hd8Mw5daPdv3dvR3qMf9wyvnn",
  "key21": "3hQgbLGi6qrdLz7hVM9kfJDbegdyLndtYpA7e4Zq5wX1pEUXhkaUf6xa8VsMXVfyJUyQcy6N95NLtrjyq1Cd6qxe",
  "key22": "3Ubx4QbMLEACNLQRF5ZwYinqwvo5tQ3MdyPsUhpoH2m9rJuDVUdsr5ri7GwEZQkYbB4RfjydSd4TQbpK9NxApA9D",
  "key23": "Yc2trV8fGUNWXHCCp1JKdXRfNpH5gKHoVZ8jkqW1g8sEMayqStGnmYLFw4UmHX4UYXUjHS4qxPCxPBfCU37AMgS",
  "key24": "XfYFtMVmPowSYQiCGVCd3w21hoe1yFSGgYd6to8sxgeEXhfDVoS8a5zKEi4oUhW6ECyC2Z7VrbBarVdxyfs71ft",
  "key25": "4w9S12HsYopaStuQEgiBE1jrKh5RCzxB9jK7THwW4DgfuCAa2miKu23qhs3jUQgDgTFRvaruQRFs1EfNnsj3Ka3j",
  "key26": "2tH5DN734QLoYjFQt5n6k1KPy62ARHfvVnxi7NzGo3iaSNPKLGKB4vKGzWyKMKvPL8Sf1PZwDD9PyyG58V85bhdQ",
  "key27": "3pF9nmhgd1Af95hjwH91oGRCr2CHbEnQMYJ79R33vsZR2fXpfwVnwti6qcRmGQyzshrA85ZYreZeEWEThKkKG248",
  "key28": "4YCMXfUNX2kTprpyTDniL4NyS8v4u73in9LmCTsm7meM6AwGiAPBVsA2xckMMQTvPV2PBYQHAYDsKkJn8wq4cWu9",
  "key29": "5XjAd6AQGgdgUMPSBXmaHDWx4SNRNP7xbAYi42vPu78EaEk2kBAidQ2e3aF3UE4e5V1GycFVVhN4dnCfvTeg1h9m",
  "key30": "3d6SA1RQ8gxknER1Bg3MA7vqQFMjyURCXQvs6fjFmSBx9j2Kwegs69NHxEntfTRiaii6qdSRjdZNRYqaNgbE3K4w",
  "key31": "2vJ7pZHS5eDCj39ExVcn8L1yYvTEPa7J9vfQ9TLe9ibx5aDAqhoxBC6hhkBGMrkpnRMsmcu2uSK7Za6FKNSLhs4R",
  "key32": "5tVtiNTo5DgfriMHuyNjrYHiiTEbUxVkNn9UMAWvNV1HWrNid7iWCqt7LP8JrcNCc4GWRKaRxSjU1K1fxFpxQhuc",
  "key33": "5AS3mZYf6eyYyeVFCj9J7nSKsZCmwWm62zwARog5VrErNe1DKXi1KEYcKBVCphknbnNk1VyTm9mzcgT6yid9MqoZ",
  "key34": "2Wfi1mGfdag6Cgva1K7RcQrhwsW9VgVGXJEF3uMapoSFYgwyLtzquBEtQGoc6M5rCmwNA3tNucZr21ykeu45hDNb",
  "key35": "2m5dkZxjjCkg2R9UNjNQChtzHRBjUPDe5rtMzt5nzGtgNFT23Gx99P89Q4KptyqnBMeEPA99Rc2yrDHAR8nLmU69",
  "key36": "4JFNXGKqHHQsuXb3ommHcDtAJsnq9QFQuLTMqB4R3zxoYhJwSHCMtULnTZF2VfuD6snzGVYDFBDFQemmp7wf58n9",
  "key37": "E1CpAvMmttMXxbpzs8aTLrNQXeN6dd8GdAgFMZ371Y5u8b1k5deWXfBMyZDuw4MPsJRFZALfJwrw9YpmFZd7M6X",
  "key38": "5781oEPd8NyqBXaGaiPBs8frM6QVtU33AhitY8nvNrEhZwdmpvXZLN1ZcfUBWZGJfWYFeuRTMor1ZXyjVUD2xsib",
  "key39": "27Cma4yhbvqoUst114Sswj8rCZ9ezDtZtYwysV1yorexcxANEiytZjvZXK3BFYCv7Vx5NbPgwv9heuhAR1AuG8JU",
  "key40": "uBdQaSwpRM2zGBR89XTtWrybGZ9xTdJYv6UFtDbBJ46xMrM6QTpMNxuCMjzFZxQoWy3fvrYLNfCV2n1gZp9fdqW",
  "key41": "3vjMPrhEGJWSvstVERMMQuCXiLR94uC7qvZESihEbYVHFoJsBwEL3FMYwsCzJSnDD6mTVqz4YxLMdoF1T25k8Gt7",
  "key42": "3C64o4vCZw9fDqsj36XFkTZCwrXxhaHB967pmbAK5tt1rCVAuMaSS3TauPuZe2cUGV9DKspwtjZPoK8iQV6Mfgfa"
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
