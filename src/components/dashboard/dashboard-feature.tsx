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
    "5eszeZHQmzEHqwhxoidCZD3xAQSmEHkmFsQ2aREd5s66bU2tu3LdVX4fSNVmQFb8CdMMHc7vaYVPyxS7YicAa6bU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F2onzkswHrCR6VppjhavJdwxWVJdCMxTZoNSGZuBXSkFnLitN1a9yHMKkHDXYaWxQLBMnEktdqDxCi4hYEQJJu9",
  "key1": "4QhrUye7sL3sK4NsYnbLUic76Vwjj72EnR8or23q9fJoBJ4h8EWJ7EZuKCggnV2wCvZJLhtiJfNZtJ5fUVF2DnJA",
  "key2": "3o7j6xw6CJY8zssnYwyTMHXPE7MzChTcfMkNCz5jKQTVagPFfXyFey8QHn3exFmrQZoL2a6Q58M71xPvQ9UwRo5h",
  "key3": "2T35oPZiEPcRMUP7PPqd6kLd4xVjwBBCCUeDMWyum2xvReYTkiVBBZRtJP3fpjd2XL6gp5dMDk3WLVc7wn4fqyP9",
  "key4": "4NkhYrmuzbZrTfwJMcNN9dQmukWsz2XofpjsuJwfWS4undy9yhP81sr8cSq8NeGaAztHenVUoN7je7mRmbhukRMg",
  "key5": "4H36AcRRkZxwoVoc2MnkcbRx172t2DBsxveVz1o421taSxpecWZSMaS2bDWuwj7U2GbTkQTiZL24wrANvsNBp2hy",
  "key6": "3rCnSoYZ1scbXuERPKp634C9bnuEbaDF4EqTnMBzyw8YuN3F7B89pjve64RsunQM6ZstfdYjPqjZ7eFYSHSZKKJx",
  "key7": "bgUPf2sn6iw8b6bsmVe4zrbxwv33XjtsMuvQFTkKqD3pHYp2sbQY8hZFuWPad2AarxVngvMqBPMxVMF2Ggn112P",
  "key8": "4vAgK8t9Gj8jtJ8xj787JLtq8AeGL73rqhgJbjTt9AyWw67dE6q3ivCWt8AsQB8zv68SnsYgJibTcV8nwM2jTzBS",
  "key9": "Htp4w9VSiqy7GBzcCUmi6JRP3ovww3u24eoFhi22v9MeuRPBJAbgrcmuY1DUfCqkUFTuqUBw4CRxVCuQ47b4onD",
  "key10": "3HK8WCiPcsDGDCssiUbaFQ8kZVEwx1kKfmTiTcSBsUfQPFfsHwKE9Se8XDmSsrhcdsxL6yeg4VE6aigrY5nRkYkV",
  "key11": "45MpsrARqpqAaPL7jBZmeuecS5Pf7E555jNH1JnJmHjVpyiJEZWP31N8x9c1csLCd1vLixcXcwnXJ1UYTtEf2UUr",
  "key12": "22UCXrkM2X43DgCLV1116v66cocy5k6YidGVfFUh6WCxKU2rHfqL4fwsnfeP3Eqou1GUmeYdjG6eqTyKXTybzSuY",
  "key13": "3BwKcyJ5to7kYVBkKvvvkB4oTKCEGCMhPMsG7fw2ShgmzXToWKE8gqvQTFvZXS8QKz3dYxv6AkxpwBrLFjfCJFEC",
  "key14": "5qu2gFXKpx7ZmQULDFHDK13xVe8GnDDwmdMcmHzRsbZrAkVFJYSVnQBvGU9QYnLAyHpSxTERjEwzgMBidQhSyzGQ",
  "key15": "45F43GBgbbp81c3xJfK3j78PfEgx6A7DUWZg25royt5SoH7YVBpxngrwkKhnh9j9dhn4avTvCZwbrexM1cyZt5pX",
  "key16": "vcNqsZN8JsyCYz78nGdUXZemR3bSpqfF1iHqeCZXaxc4dS1aumXxMed82JScxRGSmSBV1Thcs6WMTXDXyPqQ6st",
  "key17": "4sJWQYyohKN4FiXpaVgRhMGPV1SrDZZL9bd3zRq1MJQPAXwYex4PDjGmPovCNxJSEUcToUvue6eFKKPSmyJmiwFq",
  "key18": "49jqBq3HKD336J95kTESTu5WQMbUmKuAZVJyZuRsrHkx7ZDmpTT8M5UUjoPLQyoLEUCKfd12F9KNEetxgigeLkcB",
  "key19": "4m88T9REu7Z45eDrqp6HMs2EnV5tLKjWFQuFkfT6jWLGugfYSUWSyPXcUPikCws3mT8WsvVWtKTayE89GTnr5gwK",
  "key20": "3KyAhZ7krmFHNnT5NjXF5pV83DxSbZrE3qEVoz8GUeV6otNniiL4HNr62HGviUYzkZotb2QHAyoHedCj4PA9QBzZ",
  "key21": "58hcpCviMz5X3uQaN89bHMgLrCY7vHMjv926MJAidSL3J4vcVP79WLVThAW6CGtEEE3Dqx8o7Dga8pxNE16Q81d5",
  "key22": "3yA4hUAVBGmmCBDMzDBrWGXTDVwMvK4fUDpi8vReKRU2bp1yffUJtUJWSi7rS7RTuJof6SYGdVfzyxHkTv9JPq7w",
  "key23": "4sQYtk7oqV3LggM2FTjua1VCcs3hrDkHBrsbtBXeBkGK5biaxHoTjeB8TevKFjXAmqsmCiP5mNwEqhoBxNT5MpCo",
  "key24": "264n59zH1x7fTQwk4o5yb3gAyRLaDVUQoEc1KQ2aiF7Yt98KYNrWFYdNmjpYWANArYRk6KUmUNs5D8B4PmpL21Kn",
  "key25": "71escca4zhMGcSpZ2eh21duYdTnKdWZyt972oTUt1kVWcFtg6zC4tfVymhX4zaV97FehTMsaZS3gRp44pDgSGkv",
  "key26": "5CJsxsXhTbPxn5zLYmn7oUrsxqaedxE8ZRQ3hB5MzJQCCsLANkhapW4moNv1HE3tEWgJ6cS6Mffuve6a5RcpG1r8",
  "key27": "4sKiQc5e5Q7DB8k1CTdoCfoCg2wyHccuB3QLJHYHE7Fd7WhF8xFeTGKt7QCiAQ9FMPTj2umbJ1wy3PyimWc9Fvx2",
  "key28": "58veVb6AZfmttWCV42DJkgywHDMPHsRE7cjxPT4jbEbnLMVPqB8sWYpYu8NAFzzTbcc5iQEmgFQxhf7ntNoTtGMZ",
  "key29": "2Vq8w3VqYt1PFkt2HR5yFTFmAJ2vHdW72qtfg6r9nBLzpMkEVPesxeFBoY75kqwxzj4rtYK7h28wAXbJJDVU2Tbo",
  "key30": "46fWV2ovj75Y4KB446wXutbcsoT6dZjk4q8bzz2oaxbY8vfwQg8qJD7L4kwBXNJFt5SmvkbZvZJ4fjjBDELFfdfT",
  "key31": "JHYKpmPFJGXEaZyxmwuV8qAXhzWeWsoCdP965MiUmyVo93Kkey5foMR4sp3jLcL6hN8ERKHqaysGZ7gahrNWLBx",
  "key32": "2sRTwiuP7XMSB8NgFPHj1VmRLABSwWwDe6EMxRRogCjW1iJjyyGbiXKccaRDkFbfvb4HZLYqoJnJcQHLbg3jgfJN",
  "key33": "5Vw39sc4PU7Ar1Mjz9LcQBrnKhLy2qR9cHvn4Hd5DznHcMyABsXQ69oB7UGDjeiM9MaqZ5bjptRYLPzCzjbBMjTU",
  "key34": "3qw3LwUZkQyGMzzjqVE6FX92H7ryLfdHpGu7jnMcaH3kJ2h3DFKwzJyeogF3h7ogMYquVK7vWzMac2U7FA7FnTbD",
  "key35": "3ryEX1No1oxDyLe88wipKAbfoanKjUWjc6M5BDQNbwXRXXkdSpio95JFdiJJzibAYJejNvERA5SWpq397TVKg5kk",
  "key36": "gtZ1Wbq3uc5vgCboahhjg1fyUJpJyQhbDn9VoHgaESAyhdaXWwokayc8s6SiAzpboE5otAtALWz7aqN7PQgJxTU",
  "key37": "35tkaUnXDgfuMiPThwzuvCuxFRQxh1fDN63WjRgUcAoe8RPYBup27RAVdFEfPsXwoJc4xb4D8N2ToYBH6R7rqodY"
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
