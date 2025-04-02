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
    "3eFRqKbanzeE76KERoC3qsYCprd4BJBvsk37w2mTHsvSTZTVDYrSJ4DGqm2i3owiGp8WcsWEJ1Whv4wJ8aKLBu2W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yjw1nhpmAhbTx489Jv8rY6XUcsN4ZC2ZmGaNHCYdHwX2GeYSqrcAQedpoMQjXZKHWcgtu5hn5FJiRL85TYAEzdK",
  "key1": "4YnAKFzktbXhwiq54s2qREewxbDMuj7vSbyLZnRyiko5bQGgKsLnJWrombRT72ydEQuTTaRGw8HADAwenk32kr8z",
  "key2": "4khAvaPhkXv2RwWeecknqYXVqYSWLgivjBn9TEwFxeQYqtmJ3UJraq3nF1wvMMfXi28DHNtwhyFf3vCeaHsy2RpW",
  "key3": "3h9PSMavjPtUcoNhzzK72mXHQwni2tYrsDcSsWhjyDiXoAwLn6fFZxLDKWnKp7Kr5rodsJ5tiWypQ8BEjByb4PE",
  "key4": "5XSUoMPGpiFX4BkAqmDZWjqxSUXVXNsWt3QXZd2FkQ1f7wjgxsjv91qpMhg2WoAjX7ArEkdrNwbHe1TZyvH4MM8J",
  "key5": "3QEUVNLdoqGGvRhRLga759bsvMzQstWKnyVtBW8wQ3vgQE4evSQ5goWepicBwgkHjGTJwoD5aKJyBJ2XvYRnCywC",
  "key6": "oRs5xUSpeZgtKWAN8PTQWwQgAEs8PSYpiUZ6pG8T9opm5SnJuKe1dnSJkZQrxzP5oat6EUWSQpkxxr33uNXpzPP",
  "key7": "58QvP4aeK6HfrjXdHW7dVbx7KwMNu5wFPjJwfcRcXJdNPPSapNuu8yPvYBzBkJQYtcKJZ2GJXkzz57zyfsSAT1j5",
  "key8": "4oUYTWuF7wMcoUYPg2AuHos68oJownVbtEZVNyaiNFRTeqmjki3VsqcKecuEyVg4ypLRbGEidwJ99Qojq5R5en7E",
  "key9": "4kXkJdyjwZ6dkrsZgcWTRhxPrPMRAisxzfCRaDkgwHdxBSnoo15TvXqYS3aDmoidyJvhzSxeWwSRxQzTUiYXppGJ",
  "key10": "4kkePZdJRJcH7ZeP176rsjAHeCZ9NtP9vbaKD44PMrKdbVZbJCkJW3mdMr9raULMyaSDdxvYhRJ8whaREjiqmQgq",
  "key11": "4EbykeHr9nyiuvN5Jct7AzanHunkJcWdjq8UaNnquiELdgBQxPSz89259k3HYveM2CgA5Maj3MXjto5j1kX8bsbQ",
  "key12": "38cwaxymZcz1xQYWe13TYJn8q3c5AcdJnJghn9SGGBicjtbDn4132K1fSy47xZCLu55wjghj7hLhpTfkG7B7ryQk",
  "key13": "5XWPGow6SLbcE7vu99HFpVR2p5eSy66ac9LYB1CWtJ637Q8nkK2kbnyr4Ar44HHwhRaizGGUrx4BnMDsoAjgjai9",
  "key14": "26ZkXJwnPdSBECHzYVM9bWUCwZVCr8QEKhP6jrhTw5NPA2k3aSq1Krwjgth6XoLFG7iW1MC3uBygAAExjpnXeFcT",
  "key15": "4WGGXd86skV6vJKX3gf94u6Lwodtu2gbuJQnpceUgRtAc2aiFe7F3mK8Dv5ZP1qDvDS3K23ZzzKB6qS1ufERkTGT",
  "key16": "2phXnfLEbMqjcn6PkDdyPcv2HDzogJTyRfWSpYurdFmpVEmqrGfDJmJ1CaMycRWze88LDcrPR5Pm7BHjm9Sc4JjR",
  "key17": "5kGNwmJnWNgzrSSERkdTwKnXTASrgqVHoQruf3PAQTTHiei7aDYACQ7QjiCCN3RcSW4HS262VE49iMbQevXJm7oW",
  "key18": "2n9GCu7H29EXSdpLYHCtWwULwSri7BgcUYdD5veDHbqerQ2HJcXsRT7rpYZBfxHiUhieqzzxQ6B8L85p9LqDJwLP",
  "key19": "4bg5fCAneAMQJ9qTezJAmCWFPX7QL13vWdaU6pRU1P7ZRQ2JEDH2bHELMKmFsxaSwi9CUgFogBbcQbMZzQCsDC1B",
  "key20": "3XsyKnjHYTYWxoXF7D7H2RdeTf47MwikekYDVC8rc93a5u4MdGjap5yn9apjPRiCYH9LKGWCQVDQGsY1tu78g5eD",
  "key21": "31GjsAJzVPm783jzT4Eazhmfr4osqQXkLPfui8KUgtZ8mcVmQFP9ADv5v8kkkUK7PsHobQnb64u8kfLCLatc6zki",
  "key22": "2CKynzKMwAqZvb4L86GdsPWwyrTvcfXiQGEoSQb1CJb8dsvsW9Q8GR9ivrAZxFuDyyb95DD4rT5C1bSBnM785Cqn",
  "key23": "2tUDvVn3nH1HHd6JbHsUzaSYdBcSDMom4cTvcBfni2a9VJk9rgBSoxarbXtxGLxJF3pWq6SXfb6fxM5WqWL9azty",
  "key24": "4b4DQbw9HgSY7PWogBFhwDojr4f3hpX4QraSYP6kwVmWK2jrGFo57xpUYnUSCmphh1hfAQgdSUpudgEPnJ2BZjY3",
  "key25": "5XgrKRhGYTifKsGt7u4oCoKHk9Zas2J5hzeyY8vJURHxRLviHRvQbSw2gHBr4aiegVX4Hzh3884PjZfdRd8JgxHQ",
  "key26": "4crzt57SoWt4X91ECW9wNGa3awiXK7LE4ZhFCckxfbd9BP9ap2uRHjV6dubYnePAeR1xUernEgJEDhX1ip5Wmdmk",
  "key27": "ho9PFi3DpRqjLdZ1uFP1mYy4dVpwG9NQD8Gs1Amx7mquC4Qu2qzmE1ceoU86sNXBenuDZVuNiTxEcQVFmfeT4Hh",
  "key28": "CDBjMcSvBafju7rPUjk9XAkUyJeyWBScv9z13qW19tdshFYAVFNeetTURSdAXetc21jEqQ3bGGMQZ2PjRyzYsW6",
  "key29": "4Gw4j2Z3wtQqMAVg8tuxBCApk8Niyn6jHP71vzsjC22JbUGzYfbsLofPEjxWfGms3WjiXUUVEXEk9kwBHm9eAx6d",
  "key30": "3xpnVgT24rn1rZ96qsTtdmGp48QfhWMax4mDSQzy2wS7iMaMm7XiREJPoYFmEL8RZ6VgoqhTC8LkPnrhDcUGzpNE",
  "key31": "b4L9pa2b4ExeDma5Ebp1i4De3a3w8hN586r1XW5B6YoueSTrQkGvX4udswr1VftjgVBzuZDi3R2UQBTs4Rh2GHT",
  "key32": "22A3ba7Kbn4s2inRuihF7TCGR537k9rxp4p7QmbApGnsvJ8qqg2WJRqCWKjgYgKDcnv8ia9jQBbWVP3BuPLN9d5C",
  "key33": "3MmPJTL3sxVbXWKncw6ftTBKiBVd4gYV1wgZB1rEeK9q9YFpz6QmBfc2uWmfVJ9sDs9a5Lrkmjg4B31GCuct1f6k",
  "key34": "46d8sdt1BfW2UWYS89ywav1256DmzQ67QjA9LcgmXGUMVzV2ArREHye3J7qCHRR9vfMgHJnGTchTw7EguHtFnCBQ",
  "key35": "4nTQpJfjbzdyFu3DE5fXRaU2AQjR1g6dZhFJMNU3RzHd8WZ3DBDJyWCXCek1rPh5dyjAc3cHcaW6CfmN5dcSyEYq",
  "key36": "3NQcLmGxDyACZ7SbrtRaZRZDXujUK741cqh1HDDrVG4LSfwUt32XjvE9kWcEphumjUhyts4b9uBgGF5d2FEH7SVJ",
  "key37": "3tm33ZiCLWKqddZLgMaXiG53BuyR26pNzeznzMnj3TEKCp1cpxrTX7xYZejQCpabGEFVVFfVrxiJjxmG9tzpEwhB",
  "key38": "72RvQYgDTMsxLmfRdU1dpjYQWg9z6uE2MhWDkAPMFGqKnAqBdF9mY1sdTVFp323BkifNRNHxdE88GKVjHbfy4VW",
  "key39": "5Z9BuSwm15HQpiyWmpsHonoSVKntjkoTCHEqnviqCutoCJvhebBRNVAQqS23QbodtzGogwHZrxJT6rvdU6qQ3XVt",
  "key40": "22gdMgeAuhy3wjN6GbjFdbRnGAiMw4cEXoiqWXGMHcdBE8zuibeWsPocUPAPGmQ4MXye7jyiQHrDUriadYrS5HHH",
  "key41": "2NBXNe9EsQCV2pE919zDodgVBDQbvyzYB4dL2HsTLn1mPAigV4JZn1AifAu1vXVeJjNKraqjRQh441sewf5h5keN",
  "key42": "253BdxMuWg7gUvXAXx44GCFkXGnxtWVqiTavZmSK4f21qPir3RkG8zUsZ4RH8PDfngqMviiBwTgrqhKKm25iHUZF",
  "key43": "2CHT5nForUfVBYS3x6AFtFJjL81UAsXbDKt94E3mmRP9JmV2924KdrdyJdtJn9dqAzbroKgpZuu1hGqAtr5YRTEr",
  "key44": "28NzyHHxXH7oraHVUx5Yuh13sbqkS9smwYaY4Mb1fwwZ21HW52KmsPe9WVrosZhSoSEYBGustaKhnhv9PTF39HuP",
  "key45": "Nqh9awtn88qQUaFtyBaGx8kwVDxsM2QYHw9mC6f9XNNLoYgXUA22zdsc6SiRAYmn8cEmA7BMWz1GSEXPpdixqtV",
  "key46": "4ghZM7NhZdxxQ5GqCH2RfV9tfDaoGArqgyM1vS3w4f75UKQKeihzniYrohrMbxhAUW18TnDrvsQ5Jp6oiTjnM3nG"
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
