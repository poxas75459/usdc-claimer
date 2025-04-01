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
    "dTwpTN39JWZMfCDKU6jh3mrba1oUmPdEVfigLQas3mAVJDMQsta5r9cpjwHs68YGELrdHZsEUftZiWTu6t1pJnF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vJ6e4WyvpZgGKz1AtCqVCRirBym2ERMC2kfqj98n4rqqUNs2MLMuGkUEGQ4RE4tKEAJLMNvDajMnUULdVKNBuc6",
  "key1": "3XB4v1V9kSZE2AvjWLLyst4k9CgxS5FmnnLBXKk8Wf2trknB55dgJUxAKvwPtFiQUigCkAa22pUmrqECedFx1C7K",
  "key2": "P5AyFSDEZhNJwvUp4ZikNum7x2tkrcxwFMixFxab9mbJLAdCTdUB8vZLgXkcQFY8vWbsdZ6KJ8R82N4Mxj7ThhR",
  "key3": "2xEc4wcgP72o7dgj4xohxdnJhs5d3zRBPWQxezhNQR1FYdoGi1b3RidqPDovtP5w3dBjuubZMwo8sPMMNEJYfeFb",
  "key4": "381tB6RQaTzCg3AvNt2niwcD7ooxjWxpTANQ2d9PivCzNqQFR49k3KsiCn1igepAVtxRNB8zgXSQ5DtteBgywMFa",
  "key5": "2QVV49Naq2pdX5FejTfmHf6NEYtVwGne2kq4whZwv2AruP45oNR72trzBWC7EpGWkAYZpLjTkYsqB3wPW5wnhCNA",
  "key6": "3ddPoux59LAVCM48sjqvbdiQRk4dgywpBRwUZkgpfJhUFxi4gers9YenRxjc4dUa37dNMrxWbZjae3yWELLzks1o",
  "key7": "397KqPbD4mS9G42bst1zPsTGVzJNCTiggKswCQrkwapbYGYZFLE8GmeVXyRtvvPzZQDpBystHuCXX5AS74fRwDxC",
  "key8": "662RxH8zfeerpuNyq73n7ETx7tbWHWBPTwU7BspmKCdmXyQXQU2rZS1eajy6npQCbhqxz8z2Jzng25vRYmz72AbC",
  "key9": "2tJSHavr3gTumiJt9aFQTYdombtQXAMdpmxCQ9BgbjD7auBYwWVHwFz28HpNbQF6e73xMrtxy6aLHfRNu3UpGuN6",
  "key10": "Cxkd7jBuwB79kAP2DXB7XiEnDEeTx5d2RiNZ4EhL2dQ2tCpb5fqVn9EW7SS7LUZtjojinhDrQn8Pi39266sYcic",
  "key11": "23LrNF91ZRsdtnRDV4hx2yEnqtcB7nTiHszNubZaSz5cFDk3FTG2zubp3eeumPR2yzXDhC7Qq6YUUkx6dbzQtuTP",
  "key12": "BJJNW7mCbsNC2hy3KY9PUqpZTDx1vkw2vKtrhoYmLKt42v5dDjHjeRVFQpVFHxVbB7QZx2JHdQiy12y4t3dwPvY",
  "key13": "5tmQbQv72e2PDgHSKaW1G5yzGHHMjgY7v9zfNGszmiAishevTQVzcr6nCGEMdU8epj2rnBGDBz79L7mMcnkhsVyH",
  "key14": "NwJaEKLQHeWaGHh9pCeHbGjjgWEtRugXCtKXbJWsuHnhCRzoUr3AuiYnghZpeSLjj51sgmgGEjUvt1sCg9BzFoB",
  "key15": "GWhY8QFzrtBNL3P6RH82tDYzuWDZcixKfPyAUrYAoJCiaDbQDW2wu44mGvDhCY5JX9jrzvn477rthcHk1uRiXVy",
  "key16": "Sw2Njt8RnYpTTyRTTsYf8B8Lb1Nip169SkbenMXnVQiAqhoxUwF3N196PborrgwunEpksAjPTyfW26t6HTa4HfM",
  "key17": "F7o3MF21hhiwb2HiL7JHfFirJCEGjCRZpctW7rzRtAVLKdErQLjuHtTYtK8apfuw7tMMEvCzhJ6Ptaaum5pDgPP",
  "key18": "2tVuaecpyCDxH36YRgAEm36ZTdNQ5TgW5Ya2C97kySBhXX8NgeQAEsKeSBoQoXAc5UYteMsSK9T9VbusHEgeAwWq",
  "key19": "633JAb3FEZT2sDawMpScCD76TpTjm4JW3vgorurKWws8guShpt5git3hPvcAzGFCrSox6yRbyZDvzRKUF4zoRYv7",
  "key20": "3Rw3NJP7DGacsGkY6keb7qEsF2YRt8Rt2jmd8H4L9vWpkU4JA5zDsCxf8EvNAuQnSqhcZxM65QN2fZrBnQ8TGQWC",
  "key21": "461QAKrk9vXzEQ1ZuU12RAn1hEnwun66LbcxhzQVdTgjLLgNdF73PtrQjg9QcnUvWfR3o6WRDGeJ7ha96qWRJa5q",
  "key22": "3ybDcmi8QGYCfeg7S2kEJr75BLNFVFXg5phmFDj4bPYD5cvFyAm47i88VPWQnyEs7EJPKdSaHTQLvRPFgHauedMR",
  "key23": "61kDNZ6E6VSt6GDeHDefVEsD6Fx18yi34LMRxk1saMmWwAK5T89A3AKeJdfNCvRQJDhASENbFbj4egFt2Snxc5Vc",
  "key24": "2z7ZQwm3rPGYRsgSx9jR9Nw5wVmgqwJDMz1B1fXGSjRddwb8eqhc9ypxZaAymZoKYEFBBppPvwaoUq2xKCk1Wciz",
  "key25": "3YMRrmdpVvu7SGCS6obbRx6oHksDKkarXEGQvZfMaw1DXMwoXDaH322zMqvyPraaqatmo9QRQ1qNevJ9XMdWY8Pa",
  "key26": "3wPXEaJumjta7FTNYpUwL9q5ncM3SP2HetpytzTnPvhidjq94yiuEjiaZfwMTy2cUxZehPeCETPw5WDA1Yx89MAt",
  "key27": "2BE2fJgPbXxCN17kevzZa7fTbAgFMLNDsdCwbNcZnm5Rx4dxDmZkJBDEnhXjeNuuQ5SeshE7uBCdKHfAZfj6UUu",
  "key28": "22dBjvwYRowAjWy1NQT2p79JGdprRmVTqM7TPMiN4uUkiABWzY6NC2U4k5Rf1LbdKkp8mSxkJDeYP5abb5zdzema",
  "key29": "4CdzbRRKtLvkLGJaHVx5AWk7MtjB2AdQNSPMusA7UqbErrZDwUxQpmw8Fwjeznu6zkiiRP1jBwteQz8J5mS2sqPF",
  "key30": "4ufWqTyjnMfGKYdgr3QnuyWFstwFsKzvZCBqPQwoEoKtiGyLHFL6Nj2DCerdF1pthYBE4b2Ryu9vJEeoFfZef97q",
  "key31": "4T7VWmE4KVQWXeg9uaivwm4MfhitiEdWAyDE9QMMho4LzcJUQeYnsub7bDKBrv5h9a4Qm5Rdbg2VgaC1q79sr7sU",
  "key32": "yTy2kN4SAXxhbqdBANxbRN9yjt53kZKgEshZPbqgsKBF1Kefjz582kG5TGNZFdKx26UeKH5CnMzLLyEnzanABgD",
  "key33": "3U8NqvJXsWZrwVD7DV7W7D6Ur6fbWvM7hC38chXNdY4tNf9nT1zWZh5NZRzAF19xoHL7njMLs934Ea3e977XBAcS",
  "key34": "2FGKr6p4kKrSUUpKrRXeCDMZPPrC7hoXG9YZRcKLyGzZJcpugu9N8AubFrRtQpwUB4Z5uAppNg6AvCwBFAWXNF8w",
  "key35": "2dAJKCyZVg7aFhZVq9HW7rUsskouGRf8wj2DPb597AaAiAYoVXBzJ8QzTRLKyheGZxFS9vxzvLZRAGbPj9RXGpGM",
  "key36": "41bS2EvmDcbYRvQsWMJdxNiyAxCcqLvHPDVhk4uZ5Vm7FWpkDCbS1rWP3sGjJUbpFXqXmJNRGHDBEjquBWM4vVbu",
  "key37": "33HsQY8jazdfG9m6WsyUxFReecfDH4VYvFon49HzoiqtPLUVqR1zznkJLeBN2ec17cyF9UPszd6FzGgXs8qPN3wx",
  "key38": "3hew8Eefp6tuz7WZKiNARdnL5TvsBLPGgDfJ65NdNmbAbT766XG8B58GtamVwBcMn6MJJDKppxDdsBojtfTN1GY6",
  "key39": "3dHTXbx8aoDsZ5VS8tAQcxHGXg4HvDEDcBrPTy8nWmtW33TfKeiHQe3PLAKhsjH7rYRAadbHVqnk4x8LzUmNvPSi",
  "key40": "3UnACyb6HHVa1dCDC4Yv9L5xxrZfqkECmvqF9YJBoKYsnA3SY9KJpgEQNoTxYoo8izLhk3CSsVLgFdQvD1iMQJq",
  "key41": "3pDf4J9hLyCBAVVvS2SDzgbnjT4sHgaqzduPjTXca6fX6sSS4G5naxJruamTThQPu4cZ83hcCofVzHBKxTMNx727",
  "key42": "5wsio8h5vrymGixDnHaTRW9nmnWA6KXpWkoS8aHyKztQ6ft2T53pDMRHcu2zMxroHrQJr7AoexMWuzCb6ToaKek",
  "key43": "54bRnj37m286XRQmLmyP96UTrfSMBf7X6Fgvwmxq5JacXkbXGmWKvT87tKEfo9ak3gfMZSGQhUCKamRV6qgn7uvX",
  "key44": "3CNU1sE1Yc2nzDYsn9yzpPHMKECCZ5QaUwWrusvioW5UUwZ9Trxc5TdP4fHzoSQ9VGyi57Y33HUN4mVDYjBjwuaT",
  "key45": "5iWZGj7UU86PgwyyjnaF9Lgv7MkhJANqU2672SBA9utBvkiVrE8zyJc4hi7GDdDYMsn8AVADRbBZaDcMK5LdHqzL"
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
