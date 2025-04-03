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
    "4Hdnei3PoCNanULtYimcEGjVY9exLKbXyRJQ9tKeW6M8ParLoRDgCSAt6DhgqvsK2yuaLTRVYrv3JBPNh6Sa7pUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PCPshTWBCXBUibcDpkTzWZDqf5vz48gn5GxRtNJ4PLsorFNamGX2mceignFn1h9aEyn2bsZojhE2kyEtnmztHi",
  "key1": "3JezkLL3czSasaAnrNiszG5GM2xT9KJ8wARp6ReF6aJP7zwx2FZCZeshL6JqE8qUxyPWpUiX72zGWMh5GuJCWsd4",
  "key2": "28mFVtC3fgrjLTRf38pVqrvxJtr7Vx49iGmcXmTKarP7hpfwhtF7hRx9MS5NTCkWjDHgPyb8iwgcFbH3FDcPeUys",
  "key3": "3NukvUFcCV25ZB5dgNgku6e8vAAgM6Rjb6wby39uZfKmEf44RWzwCEf9erkQJzPGYVKgP8XD6srsyL8YLVNdchrv",
  "key4": "4fSpRbZCMMibbtUepU5X1NeHtxAHnRdfWJV3ayvC5cTEFsbWBKyXrMjeACPdhk9tMssJrMktD2tfEjh8vyoYDyMC",
  "key5": "Cgheonqys3qWXraQVt246Mx8oKQG9t6BM3zk2j5AXSPUJ3JmewhMPdWY7TW2fWymYwVGBuvRSR7eV9xrJZQxMcy",
  "key6": "2JbKcM9cC1YfAWxMNniPBgoLt9RzdTrCpcFkHUP1R2FrcvrLJWuu2UpLpwnG2CeTMvyeYna2bzhWvpoBJW56nQYa",
  "key7": "4Wbxs1nHkZQsBGqUVBC3Vm1rhjv7RRK8uvQDE3RrtRzxVZywGT8PuqJGkjbN6A878LQEULgNVL3zLdih2Bbi7jgN",
  "key8": "5U9dkkwARBX6ZiktiqnxPPqdN6yXGtJM5NjTC1usgpH7LqougPksh9K8H7oqjXrmd5PNTxksE1FDYfB1JQc2nE3H",
  "key9": "2uHuhkUrgRVbGbd8f32um8a3D1uPQiGUtxA9Uhkrs6B7QvAdp5JVYYe8Pt6F6Yae63ZrRf8Rqc6XbbufuiXuJ9dG",
  "key10": "2VSW9jMKEzDx1eDVDt68ScNyJdK6uLPekzvLvKiUdGnNGvU5AwD9d3Eorto1iVWasQNP9oSY4UA6Sb9xiJjHpgGb",
  "key11": "3dnaComHoRgZ2S5X6DZ44Edy338jm9FircfJ6tzVP5pbQM7piet6wbc6GHp7J3v2ZpLi8uQkAMLoAv6ufgRm3azx",
  "key12": "doxv4tZDPEurg8cgyfJSw2axG1mVkJivKf8eTyqBmtxCCZJghfVspiARoyeJBo4U5M8pnb1JjNXeJnrF9A4TXp8",
  "key13": "gNdAJ815eesypcDZDshwp6mpsd5eJjQanWmP4a1pP6EHL69PLnukKtF5x7BkMkS6ifFxSCBQ2ZHCvPWxTS6vmGa",
  "key14": "5vRUwNeCKmZemGPk4zAurbx83G9FaA3iiyugwen17SF1bbhfn4qrnPLhKEpGPaK6a4tGBhw5Rubpv5f7ZsDjdnNW",
  "key15": "gXdt8zS5aCHpSKvPdXeN1LyrKE2EBk89pdYBU1zUiq8NaVtbVbebyDQaRzApHoT4QDfB7VF7AANxnJNnecsSXDq",
  "key16": "5nU5movigxwTxRJV5oNPkQPPQEuHVxAkR2M2er9UGo3iyhxjgZJwY7aX3LF9adXQMbkWTzwaXZNLdWgACmV3E8h7",
  "key17": "2Dx7hgWFJfp5xgX2vV8s6v6Yp5G2QDhaU998uVGyGDyrHe8ny1HQJG9VcwvJSTg8yg5rkfk2KKeMZEHta7ukUjcd",
  "key18": "35WgwwstoE9i5WeqXPT5PddLt1T5TLAaHfMyWN5jjyc8QXjSGfP82if6WrQMkvcm2J5aLPsejgmePCvKFpA7MGCX",
  "key19": "5PcZspxb5X2NrR17atiawG9uo9A2AUKNBhB3eUn136pCiuSKtqpf3kjLSnyyqfBj9fF65sPoniKpmeX23eTrrvra",
  "key20": "4hpRSN1UzWrEPbcoHxngk9FB2QnYEQzGFgRJyesSWGW7WpN9G6eg4Gpxs2ubpQgSA9zfda21yJGZNg7SeTHUPhbE",
  "key21": "2d1QcRMHkGn4JiqmzXpXQgchnBw9M3d6yxWhFdTSbmdxLswnkdk2gese58WN2e2BtK1fp1xPeVtNx1uUQtx56aPn",
  "key22": "j7nycU1M6UHLX1ftnmKk7ZraLVNxh6jKURWzC6UpBXvKbsugfkPRDUoNq9Phai4EK3wXqXh165pN6x9ZwJYMBzR",
  "key23": "3BHabWk9Rr4CJ1X5c3NFZUTScvJfKPn7rF9hQkftNaMLF9DRbS34XWuRorxbcaf2ER3j2wm5LyjXAXmzPdveR5H4",
  "key24": "4WZYnGD65q8E7iD9DEb7vTEsAoNm7dVB6pxFtoo5DEDrx7ns1TLeAqqxZPKC2fVrwfytbeRCYxoVc4uh2rfR6dU",
  "key25": "1bENXN4sbrKgexnx1kkyvkfQfn7JKdeCGuh1w3RD59JgoudiW5jVh4Mt7P2dkw2doVjKLU7H6RU4PHNPW22KrnX",
  "key26": "58yxkqshWq1UwC3rrW5pw7DVBgSfavV5hfTdjnxjxug8hbsCozTMKRQY6vG37h22bYYT3T2Zsx887cGUmwyLDN1u",
  "key27": "2zERFqMCkS3VAjXsxncRUKAvHUGppu9ApmooD3kMbGGENtxt15uAC3bFzFCQkKzUWfAo47waCEhTvWdvCTSHeKg6",
  "key28": "5H1oWQbdkV8yQqVNgnzR72PeiZCospJWXp7DtGNdgcR59Ch9tujczF5He6gETnMz3Mnw173LHt98tbcuqjRN71ed",
  "key29": "5g4JVTjbhj8pSnSJzc28JMiAEdAA6twivZUxsGs6t1hxk7rodxSSL9edQy2dkBixED2MTUxFpqtjQpqgkdHRu6wr",
  "key30": "2wKDSSEtmGyb8pFrS4MkgvdhQLv41jgh1pR9MRcU1JhWd8JyS3Y53XjQt7QoZP8TPkSEhyJWP3sfRUzeqv5SNTbx",
  "key31": "5koq17u19Wgi2hSRzvPyKaZuY13f9TSyZ5FCb8WBDP37pgAXTMRpQW7D9cedgd3mKaojAmPb4SUfDxfwhcAjEebc",
  "key32": "64ZrgQ3oD9EtnVQNC41BcnFSe8HpXZ5tHngvKYiQqQor6pWsctFmBPhFhYZYT8gVV2ppfUykABC1FJoS2m1aBzJW",
  "key33": "66tChHiUiDwintAASVBFcUJRjyqcA9fneoCpL5hPGjz1JCibHt5Af4XXCrofUDB1Pgwhgj5PNZTYJzREiuz18fMu",
  "key34": "3a7mqSotM1wP2NSEz77pUSonrUdLAu9FsY8s44ZQe9TnJFH472SH5D6PqAqrrrK7Xe61TY78CuNU2RDwbEf1z3ez",
  "key35": "4bCv35pLU3JoXy7rHvSNfPiaUxiUmdmjMg7jfEqjNXYoRNJG76DPUdRZkEM8nfueZ9wKEmnLfhtAsdi9zSXffNrJ",
  "key36": "4NWXdpssWHNw9ozPEegVftvVE8cWPmx4jB2FX2WPGjH7gMrRQbzkUZXYw1hbC8SfGsSTgzsZ8ju19sYnr4YfrGAU",
  "key37": "24a49xnVfT2udw9bfw1eCrPb8gwfSg4C91FPqFF7giJbJD1A4z2BLBsF75UejqXvKgsjGvqFXSSMZTWTdhWZAJEh",
  "key38": "W7LCW84rMTmm3zrRkpSB8PZ7uipC8iWdE1YsKbSX2WhAbmHp5zykZftopBqQRgNbBDefnW9BsZ1C9iQT1sfynVb",
  "key39": "53yGmcD9WBD9kNrwRDqhbLdCA2td7csmZSrKQ16U44oh3PieKceh8PN5BKUQKYBgs1gNqsifdEAVBChM5Z7KQnUV",
  "key40": "3iVQfceVQKHueX1SKeq2NPZ6qNxH6N8hc2fThWYLxE6mACMemb5FARDYWDj8CvscFuPV26PvA8565P5b1z3u3Huw",
  "key41": "3j9ZkVSWcs1AjZfTNnaWB3hCuBy2dLZfXSdxt1ypUgbMjT6JLBcFbEiXKbkspgeAD6GK3qzJ1nHn8gmEcErh1wUB",
  "key42": "2vgXmvVQdkv6iLd1EJ7vqzqWnLSApXRfZg3DD5ZTk72hyMGZXPxMmv4d5ZraC84fnyrKHPQKikEggEvbHirRhczb",
  "key43": "5HeUE7Yq7kYJd7mqkMoc7jDWRKqzebg7xYU8YPUAERZqjTM1Yu1bqZ8nbAbgF5qntGJEKdRKJdZPwmpiT4ryXHGG",
  "key44": "2yY7oB7A2ZYvFVdcwtiF65avShDEFEjHdm9iyVgyEZBRWf72vQvjf2Fp3AGWErx36xymrhHXSe29itDp5sQAWyiT",
  "key45": "4z4aRG61LxezDFCfnZB1Wu7ZP2UmvdAviZZZr18VVb8nN44hxhBWkauntpYaJydwqgoEkxAKBfHQUHH5gozgdEAi"
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
