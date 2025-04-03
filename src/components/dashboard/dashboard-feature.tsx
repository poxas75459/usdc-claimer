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
    "385qApawJzt6caP7F8bazscmxGB9BBDP7bqQVb5yD5ZyXR47RtJRk6zw38sUjhezJQkgSc4KVsA9cbmQ7hvizUFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PHQqYzrvr6ZkVjn9kxrtgoduyPrFbmPqELNJ3UYun896w2jYuEJ9MDe63aRTUQzE5QYnBctHRddXFBoT94URwDq",
  "key1": "2gd8MQMF8secGr8wybRZ6hEtSc2k3JWdYALE5hdX4dwWA31C9ooKoBXsX3qFieXDA2qvDxKUKDAaKKyVXWncmsfG",
  "key2": "31niT3pphn9tcAg3hNwa3F1L7sBMFxZbvX2HNvGZ8jTc2v2ozxgYa6ekzNfKkEKeDxVA7cGB1NqXuzXRwWAPgmD2",
  "key3": "2oKctTKQo1hnHko5tHYt4CVwVNbPVwVa9X6EYoZzhH88Hf43zjAtQm7jwpuSwwzTKYnsC2nUtNpMXmkPVtuGvztz",
  "key4": "4mCHNKm7QmQq4jCDEGGtGGGXqUB5E4bPaRjpJSZCQqQgDLZ5iwfAugyFgdCMaQ9QPqKKu7sXx82cg4RmmRTmydjD",
  "key5": "5gmvC3nrVSDdYsqZn7EiFCmbyURgrievcFsoYdwKdpJwtsMF6cEfHYSfDtgrDy4ZS8pYfE6hg4eokbivKYD6tEKe",
  "key6": "23Nv6XhbiiXpiEw6vJQ6NUT5uPLSSczSRdHF3Bpu1U7MP5Ut5VJxABpD3qH2fkbmM7tzSAwP3jAwNiWUEUMHPGT9",
  "key7": "4iY72QyqCRxSbbcm1VVjuWQDNcKdVpDd3B8MeSbt8sUBSrcjoNVYb3L427F2t1D1EhQ7vQFjLV3T2QoNqcfSWSvP",
  "key8": "WxsFHNzrSf4BL1fxkB6xiE5CGyhbtmGA96ggcuR8V4as9SUmUa7h6dtA6tyRpjUPV9XwNFqd3eSH2MK2Ft2Wata",
  "key9": "2iqrDG2gvvVqNr8L8NrXKTXnKPAX3f3PUYxdE2PBR4AhgZpUFTMWHF1wmMmhHSmEbxAtdpwkRM2hy6Hts3WiZe31",
  "key10": "3Ebfef3wB1fAidYwm2cCaaAfmHxCp7waeDJDZG6B9NgX6xWfKEBewQpgYpsDZ4xZNVhwWGVUqb11HGg41VZ4oK2R",
  "key11": "8Rrfwi4PE44HYm5MsxxsNNpoAWxUtx1stiqrCxVGANa5LpKzRMH4YfZUZjN2dLjFVgmJGNR28TksDBneHcgJRta",
  "key12": "43EXfaJm9yDp2JY1jboqmnLb67S5c2USdNd65hnvTB4uLPZXaLsPCDZBxHxcS9TWg48dSctM3tBwL3HcUxmHNmNZ",
  "key13": "2tCDHfpywtTCFwYughpLFBNbg5PRKA9SAp35gFLSR6utJKR8WR4aimhHeRGQJaZfoYqoyGQNFWRopjXwRnbHdTo3",
  "key14": "9wSm1FjraD6rSvGS7WDdw4uyQfaFGTtSvLHCGZbpTKVNrnYBkWgDSc3r4b1tv8i2LHWbE8ZxCUqenwk1ynd75mB",
  "key15": "9Yi2anSF5wdz9B7iT3yBnG6YNcwLvc3TwwcA3Fhg62k32aE1ySx2qdx7wW5oCSTsh2rUybD8y53Xr5yxq5Bm9kc",
  "key16": "5H6AjD6fwBVYLjuwBrTu1mJSdhrDqmj3zY3gC1C3szzFQxiK9Kp4wfj4opKESpvhR5hjdhGaMRmsMkb4oar4PCow",
  "key17": "4Gfn185WJv7yWELsvG4KH1hNxUBBGG3G7eUwXAhZ87T9T8852MMhZkRaMJT4H6prApaWmqKjrdTYBa569tSBg1rY",
  "key18": "5Jjitsrwbe21nyrobru28UtQM68opbds7y8DFBEY284q3JM1rcWW1rwY6Hq6gFZ5SgYMbaMwoMUDG9zCTi6G44rj",
  "key19": "5TC5ZMishREZ9dMzPBMGJ4ZdcY1YCgcuomSwtgb8krzokdXHvJm3ArR3wQQDhLT9VyixZwU4fiMPsPrqXjaRmhGH",
  "key20": "4EWdQmerKCGU1DpqpEWvNHJZaiR2ZRpDtPhmA9ZfjTehdGxdpCiHK6yorBCt6FyMuP6qxDzFoNBhmTD1yD2daGkr",
  "key21": "3E8ucJUK2KEmUniBDpDHMJDpxBk5JSRcis7DkxRVJG1j3p4cru2Z6QMnc2ARiriRc2L27YeBa4J1QeUynCU4D1Ne",
  "key22": "4fMYChy8M4J3aghuyxfBnWJsY6xCEctyLqTZj7uJSLtX3gPXGfVEg8G7WDPHE6hQDHNyyi4eMDDADPDNhZctvHKf",
  "key23": "4VVQ6tuZQbyVyW8ygYBoVu7CCgth7jstXrEhEPPuQQboVqr9jLeHCefxBM8Fu5XzxtpJoKet1Gfjr35YUQM3PsGR",
  "key24": "5cU2fEvEiDygbXXrjJFzMMR18XoR4PbAdKkwfzEWyF59uYPSMY4A3cv9bZrpG5YFC9zzgYZ2icereEkSJbvP3SKJ",
  "key25": "4yZo9Ji9LUgV6osYJJoQjMTXjMQmgAUjPFQA1aWsYehEi3bTc9pqFeTUUrWBcYGBvtgKGrGNeSoFDxgd5qD9piau",
  "key26": "y4nNMTqVNPc7WKy3Sn6qP5XvqKBDKPVExyvMikRddi3zvTPQenvrBtBJtHDXp5cqd5myNg1LNR1CoG6LD4EsP9F",
  "key27": "4ySHed8RGg2ffNDkoARuFhfyAJeMaCsXiDybA4hzbjTtHMknstjQed1qRhamLRqhF3hh41YMPxao8vdU2Nte4cHy",
  "key28": "2hUxn7Biet9FN1podjRSxdqbKxCyUr2wSby8hEJxQXppoVs7DbnZ44EPgHFcZUp2CM7sixHGf88rnWsp13Kgpcy5",
  "key29": "2ZVXGNd91aHpSF5mEixENJ1CWn171XvwkxZVEgWFLxQ1eiQkeEoJnCTdyZhx6e7dK5HjVgB9eoQ4inZvhbbqgzPt",
  "key30": "2ADHaZqojRLtVDKFJGuAy9eZcW65dYqADvZvczovxsGkL1dpAj1tD2q3BDp7Zx4bvgFNE6Eexz3Fp8HxJGRhGqW7",
  "key31": "2gJStNCnw4E2yX45HEafJpxtTih2QkakbUuP4aG5qDUGuLMsJbDSmX1mU3JMa1ZioWmqNrWpAkwtbSw1GMBjYGic",
  "key32": "3SEn4RxGyWEdFyVdrS6cnwvezpRgKjbrbcCLskYsc24dZppFNujWK7WybrtHY32nmcnG1PzKaU2DVj683xuZw5Ss",
  "key33": "5BF9imRx8akeyASaKVbpx8qWxNDEZi2ajeGhiXWQJFzFQsCjEMSbVXhP9SxrhJReX8YT5XqN2MxjNJ3ahoUBfQXv",
  "key34": "4FWL1h7z22vKXujWBtCYZdQF1AJYtxyo79iQbaZ9ZZDEmwASRXAnQxbuG81axQq65Wsyc7AWxM31UEcirwp3ERMh",
  "key35": "2cACGhWNBuiNRwNVLVXRoK2hnbpB2vyP9eS3hw49MfHSokkc4S4hYYjTvgapttCJveNpNVxat6HyfMAHU3xTpQJ3",
  "key36": "3zhrAsbx1U1xsMYEJHn6X2wXfRvTs1LuXwMnk7R5D64kQifFvJf5ryeEXqviHTztTydB7HgGtZTDWRgt9oTyBkqD",
  "key37": "3UbEeu4z4RBVDYHbnFY5ZSd5NY5n22ChnpGHgxqHZHc7n9KoiLXmpyR9BiUvf3GMzaGFQQeDeJvX6Yy8S7tmA8Ut",
  "key38": "4HsWuWdE1TL34gncFX6pAxBAvP3K9Xush9wmi79fhP1rQsTwzYALLGmd2woBu7Cg5LYwHxx4zu5TK8q3rsBpovqZ",
  "key39": "3bAm7JDp9qUkLeimHuappD9TaYS399dEAvWEX7XYHenWzoM9ezTjcK5SF5Rbceet6moUbxVNWFDpfyV6CMpFe3W2",
  "key40": "2c5hLUzJX4dnCjAgfWrSo5EFZpCxt88x7nr6aVxQjm848XA9mJxRCHPQUtTAcB3J5D8useUnGPDwyARfzR3SVo1f",
  "key41": "5Qs6boeg3oc246LQMJMu5XzkVf74pSHdmyMaNniqQk2K8DzFyKptHcPU4CcgKXUFR7VWk4RTzBzHrnhdcEoMBqka",
  "key42": "4gBZNWkDwDnXqZM4BzAEqfQfGxQFZnsXMedpYYUnaQqtHgYaMxcZ7PnB3fwgwP5gKeAx9s3MYf7qcT73eDD9WD6t",
  "key43": "3EPrCfFK5sJiNJLNqBexfDsDZYt3KFxfieufdqMk5MKaFfngS4eGRaPpFUdj1UbzmssMYWV2ENNYjf4YuDWNkttF",
  "key44": "4LutyVQVUUvmb2tqdXwoQQv5Hv2Yp1QzuwDwFkgMma8pqjtXP3DstE4orGkmRwJKoViGguLFd39T5mbfWb2f8Ubb",
  "key45": "46sXt31bGiCcYEBQh18h51m9kR3vbAM8Lj2jUvgBzUJMxzbJJBfQTnwyUjnbExawfLGVne3dFhqa7YFgUxBXMhgK"
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
