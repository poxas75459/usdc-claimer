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
    "2NDC6LNZyigqdk5m6tZFYfXmmtmy1DKiFSSzH7SzT1X5vjgXqqNZ5isTBkknSUAXU55b9chM7BkiX9gU39XpVHeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "595KeWgtHu1HEnTMDoyUeL8P3MgSHEJN67pVJzELEsmb4KFUivcQHq2uS7dnkD1iDHts88RBL5Spg7VJ6W7tUtUD",
  "key1": "5UcP1W7yDVq7HXKgJUn1M1dNufLFTyYv1SbhfGwwoH8yfVYm1K1ycqW5RT64xavQfN5UYY2XhTHRvhP8N47rb5oE",
  "key2": "rSE23pLswpeLGxRgxsHHtDrn5B6cyH78usH6pwZx8rPWc9eDmDWCj5uv3jbLXQ8V6685BFNQjghD3YRgjBCpL3V",
  "key3": "65d7W1yV8otHjx7wwfHv9D1DnfkD38VzCCqrhoDhaSbDYTDad66PyDmidfqtnMJZy7erdyztvjb1UnpTL4C3BeSd",
  "key4": "24HcUoB1FNiCQDbUXuM3XZHFmMVHv3tC8pf3KnWegrNGjpxp8aEvf72HGMeSZxtaLG7fs2sbYAWbxGYd593yrsNN",
  "key5": "3xANhdBLnGaKQsvsjMTmqjSQ5UBJ7A2U6YYWnwp6KQFH4Hm9EKihUcG6ea1jrrFDorMp2uzJjkq1LBETZ1qgiP5L",
  "key6": "3DeFHkUh4r6RkWwH93K1R53HzKkXhdkEgKtGojGwcVbCJZc34StdyJh4bKAaKu6d1dfJxUD5P47xSPPt7CHZ92m6",
  "key7": "GzZv3DWTeBFyC2qbdVLyHSiUwrkLhNrikWFHLmNdKwZ7NdWd6rRRepELybP28HSMYZJKTabigdj5YuHhyzxnG6D",
  "key8": "2SxyZ58tg179cxTd3fVHH6DtCY2uk4ukH8AkkMHg9dpxMgyhhL8YjFf9cVQqsXFcPVzphSsawWomLrfnTcr5SRtw",
  "key9": "4Gyt11FQC7KDst4zpFGLSUpEDJwTnQRh9ipUcTbJ6yZy8B7RpNqj5xaqQ8sr1YTEUmo7gNEBdVFX22g13Jq29xe5",
  "key10": "sQ9UnxBnpimpV35s7RU9uV1PDczZzEkkhCtaj5EPL2gDKdfZzhS1GyghsQ1oQLHzgeScAwzGrULYwMAw3oAmQfD",
  "key11": "44QErfKoQTTMBiZPG2KgDwHUECTLoEj1PcAicZ29eQXxvkoPFJYbzyQYCSdt4QS4gXyehWu5h2tng5Gv8TXQFzFQ",
  "key12": "599wLxKxz5QKd1qS6H9bQ546D5uUGrgPQBWaMKuAXLZP9gQUXuGj6UNyYiazksF65ZMhgbNdRBFDmWRcBsibWd3k",
  "key13": "3WbuUKAeYYbhCZ5DTz4qQps2Tn3uvfqGuZLS127DYYg9MesRRStamiQWnHbTagovCekraNT8RtERYJLS3v8FAf2C",
  "key14": "2E5HH3t9FJh2kwWEuhVgvee9oetda5vRpKX8ZwgSXbUqS1uJP2ktG8T1c8px2qQitHxKUjfNDuHXAMyWmGtCtCCG",
  "key15": "2t37NrcF2eoRLBoyETM4KQVy3b3niZLaTNkYQpVxuLv9JwCWqfsGRhBJ5bUpSBbHZntZuS6r6ydG3DU5e8T4jQah",
  "key16": "2GyotxCTz3TTBybWVEVrswVd9UJnDRoeD2Wksv9AGCtiiprVZzaDr3VeQy8RCmaNTu2FR87PK8AaSgwDsmYQ6snx",
  "key17": "3sBYXXUpEgs8Fuin3gnTQnUSaqQuFoKbErAZuawvXAg6Xy5HknDjC8pdB9nDrz9Kndo1a9nCkf7HWsi5qe5FfUYd",
  "key18": "3Bsfmuf1UQH8BhEB54EcuYATkuV3Rs5Uo5kf5rSvDL3Vv2JZZ6hhvio8mNY2yuCdB5mv2sWQgUz2zGHjWBN6E1s1",
  "key19": "5ekdgocVaEkiL4aaRaa3RYS2Fzp2qZFFpD4VAE2sFaZXkLWmaErEVJYyudJnx9Q8viZJFaeMCpb97QdE16iP5d2g",
  "key20": "3g5UAB2DD2v2riLLzhLpBEsaynhoYZSo1aYEj1PvfeFpoWgLX8F8w3m5goygSs7cesMvXEcmSsBa5hMYcr2UWq7W",
  "key21": "DEosF4LfczSMuhLKemsmbSU3ExFxDfictCVKL9C7xBC89nyJiSv5frPQKFzXSu9CkTs345YqSHxj1gcrKwCYPXM",
  "key22": "5k73t3DsymjfAXH7AsY7iBaE5j4gQK4KPUG1H4VdcZgUwuVu1BZAbVvRomdr8zusnmxvpMuS1ZaqqaDBJdH6rfNB",
  "key23": "3HSGS8Y2PEbYRrygPdkhHivqD1hofcifrD3ThVBGSSPUZWQZsn5xrcAEGPDErHkUz3qykxHTkG39agseZB62ui4b",
  "key24": "hqccMLruxetF2aZ97kY8ifyM7eAfiRcyGXsRDKbyjKYB32UaBJ5Sk2xwUna3a1qHHWTugVzJ6cdn8RwjSbg1CS1",
  "key25": "2STP4wbZ9HPL4uKMXZqi6qPvAe5eUBekL4NdRnb8NYQQfqgAjwBYDMVLb4eEDkrp9yFwLSxy2N2SaTD97ABkAJi7",
  "key26": "5aWKpdgzSBza427ost8jBHui1WwukqkrmZLrJz8Ly2Z5bgXyPwtzXD7XXjZBwafgkDwfDWyoPJfeevJuA2SdVHeS",
  "key27": "4bBxpQXCgSzgdbwnMAC2F8R2ibtsx1naLmg7299oWn9ezBzTpTm33j4tfPen8p8GRypRNW3L7GRGQjjtHVshh8bf",
  "key28": "5yRgGK7WSNyEK7Db9txHJeCsCoaSzzKbwdvmoGKP9wm8JezWtqJEeYWYth93xTTcHmYhqoK3Jvh1NE4ACLG6zwi8",
  "key29": "3EuAzNMi9LhMjatEdYqt3hHXY5zp4q7gSCDfnyhVMj3Kh7j316VrFeeXdzgmNGnjpjSRRS8EkSbnbQBQZxfaB4dr",
  "key30": "4V9BgjYbh65RRSXoVLCN7Zdr48eLXYNbDrnjw7LZcc1Q4WgCLStbNgT7ym2MQr1buzy6ikKors8fZvsbuGooiZcZ",
  "key31": "2mpmGtAM7GvFJKXFLufuRBbfRveCLY98SHQdEPNhq6s5RWwsX9eo2pw4aG2u5S4GpheXqqnSwUAM29ui3U28oWYB",
  "key32": "5NBiiaV2s1te2UedYN3d6ptgXkuPEf8FZoK9mAbWA2YtLwdRGrsfYUiYdJGcc6WxVeJuFPSQxXDAbvCAdZaGgTs2",
  "key33": "5fPBH9b4iX4AJ56rdHKHSmf8oEyWU7oEaCS1Fr48JCzWeXUazbui32hwVmA3M1jb3ectU8srnLnqbKeuNKcJbrN",
  "key34": "2z9XUWLEDyX2LgiThUpZWGaAyPpbfq1KGYyxWnR87jBd1pUDFNj9VFy2zrXykjFJX8aoN3MxU9pES3GzphYNuF1U",
  "key35": "3eARqi7joQBsC6YofnHA1ddbWbMpzUrMpuBgWc97CPGxHVJYLbkPUFE5PyPFZ2CP95kvqPZQWzZWxdvD7UVdhe3B",
  "key36": "3agBwVD3gTaZNBv6eh8BHDhZAeXu9CKHQ7FHmjsrXaZu1hhshL66N7DSqMGuxQCdwZfKrNFoTKC8oagbm7PwsWt7",
  "key37": "J3YMo4RPaxJ1YWPs3N4KaeQm6i8bU1fCQz6mwcLae1cAKBQ3XVrc8PgWS3P3SrmxVDsLnx8oKm1z9hGZaUuqyHf",
  "key38": "4w7SwxBKQbTymAfgNYDU3FHLPG1PLHHGEAmoEyBy7n3kH2S195FxY7bk7TnA3bQHm6DoHMHZPuJinjg1Vy4yDrvX",
  "key39": "2Yf6ZkaWkiThf3xgU4UWHt6NYWwssQufS5vbVUZpM61U1ioP7HxLr242jecrAEzCccfpWzJjrBbAL3J7SHiXU2ti",
  "key40": "4q9Csxgsh7mZvgmqghGNRviCjUKKYKUjAvF4puwRHm5uapsc77FFSZtyz9NymwLrkQkSepgy1mFsWWFoTApXNxnU",
  "key41": "5HLbXrY45bYDLepcni2BL2RSvoFJ73cSDP8BGb7yHmBnCFwxoqQv3sZY7E4ZavHP4U1X7YrKhUGb89vC4Qd3vwT8",
  "key42": "4Pmxh36xzKuJAd9ey6TDxjHSN9KjbGPvruUV2fMx1SToC4mjVMezz4HdVPkhuRavyj5FD9Qs86oTXsfwvMW6WDvd",
  "key43": "6Aa3zBKW3q72Mf2oT9FhdV8MJathdoVC3BVFhwEw4nsAtAgEn4wuxc43272uUd9SYbwFARaL8BhzMpWegLr9yGd"
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
