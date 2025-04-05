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
    "5ckRjpcuBkFG7qRk3AzGi5gKNxsjyZUUh3uG8XVEYa1NmdHErFYj3Qh79Lhq2dE6Qmk5QpfCu1gY3YPtLJnTBEam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZayRwtaBbugkG3FPiEojPNcz7U4pPJC5sLCeD6zDwvFznMry5D1KMxvCUJq6ELeFME8mLRGhJ4kyzeGWRWzYoeq",
  "key1": "7p1PDGhJpfVkdKcBGH5ScWNchZKdE8sq8yJ5cSU4AR7JQCvQt1GyXfe81RAwgZmJ1WeicBJyVEWE2fnResQP36Z",
  "key2": "54qDiZ2JFxqhy9Wx3P21abTN6wYYojf4DKYYeKXwQ2JdFKUYQLKqVTnkATmbZ6fhfCujcUvnxQqsJhtui7BgToqU",
  "key3": "3oqPb9YALQdHRX2AhjJEF29bmaBFuCMw7HGCGcpnwjGDxfcty7gy1SpwBEjPhGWE5pTNj8vWQW6uk6r8YkKNzKE3",
  "key4": "2CQ3m49zrXtYpdNG4F2aWNUcZDjbRTMAMxCtmJdF4eP1BKASgR91XdNWHA8jB6pyxZCicCsbAJ2SXcuXrbTn2Jit",
  "key5": "Z1DyYShkEKwN1QxkVQjMuBJcYgGrKJqKx5QcBwBuWZ8WF1Rv5eva1Y3nP58yLqHJLize7y6X2wgXR1v2pbbFgQt",
  "key6": "54aZJC3WuE8832m5q7XRSeWwhFBfLU8KqHUgmVuyhkpXE1h11SU9hukcok6HZAbfN5qrLk9r7QPjQm67sTBLcx74",
  "key7": "Jddpb6RKCDpYXFsfehS34DMJGeQyZbxaReQobce6q9euDbR7rvpnDiQozZNWgpbaSBFuXeyqG98jsuN8ZLxNqoT",
  "key8": "xuLk1DajzsfBG11ykvugwkLkyH25hnFX3fzPXnr7DX7UJwqjJ9KrdX2dBhxD4XWA6JhvEsqFea37MLj5D8H5ig4",
  "key9": "597ZKwCuda2AV6ZyEZhwMY64Hd3SGvQR2DkeqbSz6GLBUSu2SKrs1a941A2RpMYcYguHkBsn82kCHgrLUu27qZoP",
  "key10": "3vvLS1fnTWK72zmtj8MR9Vz8mPR61jfHY3Aznv8hsS85bkGv7LkikhhSYc8uodrUyVgpjZnxwyY6BD6pf59UYM2h",
  "key11": "5SiDFWtSYoRbvk7qU3MhvcscCP1xYXSP6q4u6R33zSk95cBzDhDVoLkvJPCdCsn3VNAuLb4TQBX2Trp8miSa9xg4",
  "key12": "3EkSGxNUdeWYAJLA6ddtchpApYyEXRS43qKQm286AmwQpVDuz792RXxQb1vNfFRccr7R7oA27a7ZTzXVJ77Xk8Ha",
  "key13": "4MbwgZj1ahuepnYGxoUKMRxbrgqc8jmge2pXWpLcFg1k4iVjbwNnvfUomBdi3QeCUQWUwfZSHxkH5CVkcvsDW3fg",
  "key14": "3TkTLeHdqsUJhKfTfqLRmo9nn9QWx8FMduSmoSoTRuzKaoJinUjFXWVQuLsjRfCaPi4EnAUE4ajryDxXnJZBdL8",
  "key15": "5CShFsUuDN1wQCQCNDPZgyBdp8skyxZ3fP97GrjE8ffR1Wi1TpnK4QkDqXJXjiZVCs9dkPdxLthGp2ssF2T65qhY",
  "key16": "2F8Uqg6xKkMQMZUeLyck6gNPfhuMiWPJ7q2nAJX22h6H74Ku3tUoyyDHdEQsh76KU9zDMUHJybKy2puzYjwBjDQ9",
  "key17": "5ZnQfbVyvBUSE2P4oueuza96pqHZm83J4RnXL7poVtMxk79RYsgFEknxqW45NgoYqPVrByy99bCxpTmFDmHqawvh",
  "key18": "2gMsxvSusyDTem1JhTSk7xJHDS9fegAcKb9vY7Em3nrH7jhaqJwVnPnj2MkvEuGvXnNphSfA5D3fniKmgeLxR6aG",
  "key19": "5LSWocnEd2PUfdktgM6SZWv6uF2GHvYjEMTvTYiRk2SQoJK3kvT6J15CWEwgDeXuQXt1pxqPEkW1H19iAVyBtaQG",
  "key20": "5hEK3KRiNTMjBSv4zAYrbt9CkUujX65pzvVM8AVb3QUZh34RygSctgc4iHzF9TSTN87ofQnhC1HKX8Q4B1Qv9gjL",
  "key21": "597p86eo5i2jLUN16E2cDctkztZzfNM1ijkMEMgQJ1xbUfPqx55B3Am8XH5knShuyxWgMCuZtjmK1iMLehSSdgZR",
  "key22": "32HQQx93mwLnv4mnnXp6iaf2k8MSABUu7MR7Zp6z2x764n9hYxsKkWFqwHur7QrR52H4wriMjxLPHVds9LabteRz",
  "key23": "4DDgoF1ewszBryqEiqcf8AZt3J8qd7X5rjzWo6WgibFCocBNarLLmQ9XsVXdoxyGreBFouA7gQ25Sna4s9LEPtKz",
  "key24": "5bY992o8CLRpQs2D3EQXi4qmm1oAohTGZE52wDTScMQdwRkAi9WXfEBZ7MfKXrq4nsLc8dGCoRHRMoS1wrnNExrR",
  "key25": "2CBs4XcLxwdhznZuxBSHN4oRoYbKhfgUv245ZG6DuwTjbS56L84GfAZ5UAgj7qRW8C1VVsqoY1ZWg2KpDPu8xLVi",
  "key26": "GnhNTsospRctMZ4nAu4Ny45MNg7v29ZDEFnUbYTzbUmHgmZx9SqCjCk5dHVT4ydXoA7pfAX9jPqRFMispEEUNUC",
  "key27": "5matVsqG4vf6smuzZDT4F6ANJjE2cPVUhjaBBSRdNaoEhfXz1yw4fbpGJcFx6Vm9HqvKHuCXNpa6dWuZMXytRaRP",
  "key28": "U34eMP8nenpyr6CBNDzYbbtrVixCrv2QLMRjJKNmuHzsKnqpqewWPQcSUzKSuoU5aoJES6uRco8w3k7vgUycPXf",
  "key29": "n1YycorSWDDWgHknRyXer6XtQWbFKiXMc1nM7sSJAKVsiEqFyJ18eFikvzLpxm4hgvPgefuFoLeoiota8DUYZj1",
  "key30": "23hcjchuVTcP2dyUqpgWPcVti18PuMJ1js8hoCLHXjC1uZ24rCTMvMkKAVvNmxAe3abfM2razcik7MHDxSApg1pT",
  "key31": "63Efg9iPF19DdrimzoXLaY1TEq6Yog5yffRptQn1UNZioMEEHDKFHsJgyf6i9Y62ppk5WJc6o61ojZJwtkA6qCAQ",
  "key32": "5ygxpc1tRq7bxRQbCcMFxD4Wfon4jY5qKEZ7xH7SUKrgpyer4C72vaLKPUqyCwUu1EjBT3SvStr88QdhLiBeyUke",
  "key33": "5jvbzJfUeKJMWoTZxxi7vu44kM1UmxQ8krmPcPcHgMAdecU3jfx7bqG3VAVSuYiDpcW81WtVbBTMCGJdDXLDfCY9",
  "key34": "5vsXMSHj38EMFndFuYC4r2CsQoPer9YcdpcHU1u1Jo5coDPCBptzdJLchW2VbGGQwYsHkBx4nXy5Apt3ECqXPTPS",
  "key35": "42qGCMQiULt8cXVe9K1ZLmxvrnnho3gAtXwdDMaQoCWD5Sm5hnHse34EF3HrYsJmaXh8Tuj5d89r4QincE6F8AVq",
  "key36": "268Wo76obfaWdUjVaM7VLeBmZqLDG4KxmY4zSnJ4xGYopVBWa3UGteNqjPBw7eT7kmHXGhpPFE8QyLabhPSKsNWr",
  "key37": "3G36m5ffBbp2ZYDqsFVzoxdxjFvkNZ12gQBCx9PShw6779egLmdxs8PD56WujdvDuUZrMPX4hDS5wGUFTHkMX3B1",
  "key38": "3T8hZvomLYkYLXFDvFpDykgUvdG8qJ2NR5tX67DMkCHN7sBZMP4tzxJkZiPfXScVuiL71Tz1WaokAV7qShFLEpyg",
  "key39": "3J2MG9HsARtW9Q625w821pcUmUwTyQtZDkBFEyvZevPL6CdvR9tBsHsRzJKZ7FNXSMTcTMwVNRALHYouhNAummpx",
  "key40": "5RnRRHZMHZcjVmsN6DL3rwSm8oH5Tfhf9tEBzTnRqTGuRjoVN8DnyEAUUwPhr9AXZUtarUJuDpdNZFn5sbiGhFW",
  "key41": "5n2PFJ5jhexwMFNQPsFDoGK5iExmfBBFgruuHrMJqmBkr9FVFCMovgouYMFU459ddGczmsdCSBj6V6jc2Ykq1hoS",
  "key42": "3QtnWWz7jGXL6mhBC86bwmrt7tbzmsACfp47c3HVPTLL4Cwd8mhsMng4nGbd1TnNy1BXv2zjC66UUpAWoU6oUE3r",
  "key43": "FLsHg6Q2YqLsMWoeRzdm21E1KQTTxrphbwuxe8h1LUUyTFQGyGQgijpwBwX5Eui5JL8RXAxAmUS7MgW7WacGEJh",
  "key44": "5pEHkPcx4uom5bytbsFRPzUPjytUCC57C4cDQeYeiATTYiHa31t2fwUhfVnBwgdDMhnptyud1SEa4DTGEXeTV3cq",
  "key45": "2jHEC6LnbCKTmYDfvz8STTV5sJCUXgqJVGdTF1LBXzdc1HeDFysNmyUPbhaxpGGzwWpUvntsetWuBHwXePagof6e",
  "key46": "mpq4Wo9RvqmJMDL7Hs4Hfs6LnNrkwd4RePwzY2eDTkTVs6aWxcTHTBqGJDiJPEJ2PtrwMSptEnrGQhcWDedjSaF",
  "key47": "4vrV2xLAUoeaFMR2Cr7mkYR1wmcRkdCkAo1hgrFmzwP5ebSG5W8RdPRTz5t7eAGn61P5AS2hWZbYB8PVGKXaYuW4",
  "key48": "4dTmDwcqAFRQPSe3cmUhSZ9Qi3t7QhT1wCmY77jDpindSA5xFmwaucfvHjhkFhTCsCXFQALYCXpDsAR326Y9YW9V",
  "key49": "24h4hvRJbn3VyH3TeabSQvDmFprjk455QwPXUZjSCsywPGaQLmsc3eDTbcUTK8MJLB1W7FYQZvPQhGP7ya2Y5wo4"
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
