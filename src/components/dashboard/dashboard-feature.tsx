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
    "4u6DWozjsT3XjbvYaJzWCht19v9ycHnjpYAj9gvxE7U1NtTHb4MLMcwZYswnTofMzSZm2mUBq1Duy2vtkj5NmJup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QJMjtY92sr6Wv29WEUZZ1Jahoaoy9CDfYYKrFwnKHnJuowPhNVUV1GogthLeDAhU5p5QD7tFZnCm5wcJibWAQm",
  "key1": "McuUgRi3XJ98maGeohyHJm3rDWJMc6XxmjVxM7j8vSZ2p4xU5PYUFvqh3FbBvBpokkymnNPavPJCDgmb7J4okxt",
  "key2": "5rEiSTNsqKKdpWiuZkmx5f7SR1FhErJ8FDCDhKQAQvDj4ypJgdz5Gb2MAqj83Mxuf1fDYBWRmXGqvqgpGxZzYem4",
  "key3": "2AbtY2G8ERed45R4iUkRAViDMX42C9HMW9NfkiDDmyLRmFLmiqjPZ4Stchq8H6nc9NSrFd19XskQwXLZnuy79kP6",
  "key4": "oqmgzZT9LxJ6pXh6oEouFnSLDLu4Z9VS2Y1uSpV6hVgBQtNmCULuPNzrh6oqDy1uRysvkvnpsrUHUAZ7WfaecC6",
  "key5": "5VRqbk4jYKpBUhehK1uJ5VsNidTFw3LfJW7cmNLiVH3wyZhAppikhR1Jozi5pACkUNaLTm5b25idS8vGppiT9JRX",
  "key6": "5CiuznwegTvCEVUH4JqWKhZuNcnCBq56NdGEaiHp3Za7Bqgz7d6TKJdNv414naGti4ZMF7127eUUyvgRzFb4fstq",
  "key7": "5kquVbABmWebbdaV4iJ8gZanrkFkRcd9kmM6FpciHMn6u3LEsqAeBq8Y997CRNSCMwcyUfN6mPzDmLaatLQ4PmVe",
  "key8": "3EJuyBFv5cN8GHgDaJz1HYM3VTK4XrkWWY4MoPiCYAt9j3Xj6eMwkXtprCEPvBNwPQg6xutjUgQGuD3eyQARGz4a",
  "key9": "2HWtz2PkxkSLiFnVixgzLRpnFz6an78fBXznNwwxfSuPsNiSBPRXyzhmyyUeegcbADFmhzezqqBULchtbyPSfpug",
  "key10": "5PQoWMJzKVXxBLsKDe9RcQQWK1PMKGZpaEC2JBbUgwRcZbXAtRXUjFCF3kyxyyjQ8yFywCfbsKdTrJm6whB9vVPP",
  "key11": "fu8n79SpVU9djRMobyoq4ceZ2BmES2wFxz5xJ9mNTjqZ3pHvGKHuMQS2xfwfvXy7movLk1Sm18ikpajgZAJYzGP",
  "key12": "2moEuas37JKbP9wTAMRUJcSYAhcrBB4agCKtCbFojL79dyfUJkL4B4GvHQjUUbWd22LJEa5HxNP6kHg5MJLrqqxN",
  "key13": "52YWWvFMfS4M6mNJzfx9PFK4pfQPomMKCiLmdME1nY2HtfwURDsjJqBk5htp78T7WQng2zvSmSTN4WDKvSLLfuF1",
  "key14": "Xx6uQntQYbwsabJQwsKeNNU72VFrQYrVWucJDFkgJcviDzZ3MciSczpa8yRd98JNbrTatmv8XpVmApqaKEazyyC",
  "key15": "nt96z2cpjF67c8iMiM8JcC79At2atqgTJLLzYT2KEhHhzQszSjmg9F2dbDjTegqz2icjQR2xZ5VyKhVhccjiTyR",
  "key16": "59VNk33WhcuU9x6THemdMZyztuJrUkmz5EmEhJtyz4WbtcFyakVMuq62Us7SwPcuR2NUFTNKM9xHjBCXAAfsNP6X",
  "key17": "4NKzmv5obS7Z6aJFhtu15ittqm9cdnNtMVhSGhLDcm1rvuf15QUDyAxiD7gvwyypb5d9ViZs5FZVTeGEERieQWVC",
  "key18": "DJMfvuQgMhxqwZkMgMwdWVhW5piJ7JyefjxVc2R92BDuM1DNgFtYnkExCGzwrwajXCkHwesWLSk17kcz58xbYMk",
  "key19": "4WVTRA9YxkoW8eLuXvKPL3MMMW23XrgFXCqch3sBz5VUbZt9ZPE9P4ovZiHYHEn8YJzr2T2P2HvsBdgeAfUeNxvK",
  "key20": "eCwieotjZJhfAtaCNyCFpyRmaG9MPXqA7CK6jHH5XFWRahZNqoLLRbbXCwKUcDXPsHdN3hQNUnc2n8VYLSmycrV",
  "key21": "1yYDoNFD4eL4vD4yD5FMMnbGd13eE1mKz1kdtGiXMyqKsVj9eYgEcyhbU9iUkMUukn9WArJFdcPnyiwyPhyu2hD",
  "key22": "4eHVcSChHqLGjicsMZkwJkbhPbcqv8XAnaHDiiVVJ37c8pPVDmEgx3TP6RpwT7bhJkg1ACboVb6A7ZL5ihqVwwxR",
  "key23": "5EUspQLahz7ShRjSS8XweWdM77PySqtbCGbNjdhiSBWzgpnBA5PcSyfF3NPDp6BRxrDokNdT18NVL2gK7iShymmF",
  "key24": "5VnmnEmE8V5KSt6j9ZLyQUGsA64EvbGgZoyNJsjXvxoRyigHQJVu9ZZXDJHRpkGixAGj2ppqakWFTjUeQiZEjP2t",
  "key25": "3Skenyxv6YVCMHkPzaxTZEXmPRLvXVMhpuFFHQYsSgbjmPb4sq9R8UnwKZuDnVesVhVcu6zHLn7gYKRRa1Mbzndz",
  "key26": "62Ja51aPQi6Q2QQ8vTHpRSQF6UnhV19Pm7sH1x58MykFfCZHiiFGAQRovuS3kYyimwqGcWAyhMCjFMQzNnmgqjkK",
  "key27": "3qD3g4FCHMBnj7i5YhQ9tQCrjr8VcnkFKtG53pHafBdBurnj6iEpii6R4wKK2y3W5Mr6mEs9oYDR93zXykX5TN5U",
  "key28": "4LmQx2nyMHyaH8128zPcm2XHfXze5x72LQJu35ywmWjarJUFkAkRkZpTcFXQXDqX1etcEVHWcAMKQwBJga3kwgzm",
  "key29": "YnQuLEGKofVvnxERNnnripx36ZV7otEN21AMMqSoBN1tr1FQ17WrHddwyw5kasBRFzRcHNZgLi544fQtCx4goa3",
  "key30": "2SDj3dnmjXQRcxuA6K5YYr1P19XG4JF37QD14FSWNyYjrAtHNuWWNfFBLDPy7nSdw1VKcfcvHbmXQcFxySG6vpaP",
  "key31": "vY9srFSyeEUXnYfzc8E1G2WHZdhmb4GeTcu1jqMzitYM3KozkBvxe7yTeSTeV5oSGBNXyVNddEb4r42QEJarUMf",
  "key32": "4uqEzMyrBjLV1WxvMhcGKvUyxNQuLsxiityoNn1wX7dPV4saaA3LUJpF7ymDsB37ZdzYCHDNRxXRc1sPZWL2p3th",
  "key33": "2ZUta8bk3pW7gBQ5gAPoNeWPZPxU9eNJ4ih9QshUNSpwGEJpNbGmztb2PComj8KSHyi9wQcUSabMWu34h9Vfbiww",
  "key34": "29NBWwazDFwdSjnVKEYX8kuqnKuTSDAtco2oeQMerucmejE97sA41TP8JNcUnERQDbPuSbzX7aiBBRogrgoRCLLr",
  "key35": "5nuzrses7sbXF14aSVgNJiyJCGLL98xJRmKC9gwQES88NSa4NvPXKQe6TRcDgXXP4DeCHCAkczvuGom12kuWdRcP",
  "key36": "3GNDwkxHtuFecP4rHHCcMqP7XeBgYvktScoMZVA4kaeYpvUT8cEmU9FDyQZazPDvLdvW1EJbmuJfcToPWHFQEv67",
  "key37": "pfu2BcdHCzKwWGNuz6JYenpxqBvkxsEhS658xDKcSWzVkhgwa2Qv3D9wX5ambGFDcphb1bNUsLGuden4yDMgXE3",
  "key38": "5Giwpgrvw5mLNHUkGuEXdYHTibS67FV1wAEnXEfKsmTh66hZCA2vu74Bjn2vUWTbSjvzbHZCMiSSAoGmFu8M8jfW",
  "key39": "3qr6BQHyaRTrCWmVV2YZtokEThfntzfvHNdTbQPRb9LqPvWQMkqqHrHmSXgcMoopmX6DR4etQ9eZzttq7S8g4LM3",
  "key40": "5PTgc3iuhvfQxhMXopv8GtHvrmHH3KavTDBYqegPV9UvhtuzpVvY9bUrNgirLGCHvwFKgrvMFaxpdh9iaJAydRzq",
  "key41": "547xJ5QunXaibqpXJPGaEXHy8KUxj7epEtyjETFca8eqEe6GTbvjcBsbFCkXpMEdm76TroSD4LWbHVkkRB7kWqwJ",
  "key42": "5bMjov8K9JGbW6itwJLG5B75AiVCq6XhqmMgi6WWwFY4vST57tcjLxzyBiLzUnFbXbuduztD6YtyU3QebCrJqeJe",
  "key43": "2ZdHuSyNDsg4zXHcSnRUm1GqJN1Xyi2fkFUvWunBvXWFELxjr2mjLRR31Rsi839BRVL8xKR6rQ8KpzsimKpeLfU9",
  "key44": "3JN71VUqSYTnCnSH2J7RFmumqwj2ZKxqZzDDH1KoV1yudQbeYUyUQW1AcfVenDShbRCNBTY3daUDEFrERSobEDkB",
  "key45": "3XoV7gu3M1rUZthB2BwEnx4CbaDrEKL3GuUFuAw7S2Rjts76mFLPDB6B4xj1HgaAtcgFR8VFfnYFfMcsS8Vfvztt",
  "key46": "25vNYTMpRhsd9daiTBpFof1H6BgJMBQht6BDZnv5MTJXcrUxE44jF6uZjVpNyT9A4dFhBTMDQhYM69fjHhLJpvML",
  "key47": "4ZDY8HpZ7d19W43wMtyHvXYPJqPfTs5HbMK77iK9mwEvmN5oLiupsnPf7DRdGqMowchJUeb5izy9Q4iK4ApdwN6D",
  "key48": "35126bTjUvxx3u1vJA6qNa9wnEX8wudkwzsms8LdCnDTr4DA6uvQmXrVKxWLTEuB4Ev7wEdCnnedUpzPVEsbvKna"
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
