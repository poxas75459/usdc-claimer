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
    "5DcCUCvKdKNC2EeENnADkJjfVKRyrSuisYkohFxPjQvgJqnuR3f5dEyLM4adDzBncgs6akRdCu7vB4D41yXQCLCk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GCW5g5TbLRC7TMhiUqex9yXM4CuZAJxADbgJFqj1G4XzdpCWEVu7MthZbd8ALUoQvPFarbL5GdZWtRPAjUoqJY7",
  "key1": "365RKXJqxdMw5Dn2PmFDLH5V7cp3BX6TvA1zERzAJU671uRyGuaFGFxT6QS1uGz2ARaJEeWt8UW5nZHHLwgLG1Cq",
  "key2": "4KPi6CCdDSdDHcxKPD9jV6mUXLz8d1BrjZXao9XWaoqkaeM4c3my34EVAxSXaDawpyKfXxT4o2Sn9JtGhTLuem8n",
  "key3": "32DPKPPkZJ1Rw1SsWRhyxE45EiCdQb8ugTDPC1WN3eCxkXoChk11r8BD4qGtzaEcXtX1FgAgsykFhba4QkLEhu4X",
  "key4": "2tzPeeH3xgHT3VsUN1iDNibUd1pK8U3UR9eVUjd5Twxz2ytK6xNXqBUPUQTy1APjDFd4bMdLmCqEkhnC3JyXmPgs",
  "key5": "bfQa63ACDRdnkoKMXPAQasXtqFtjPrBTzWDLeVzLpWWGmuC6SsoskTn6kdgyosxmFYSMPn5TyLvHfcJgC5piN8Z",
  "key6": "4mVAoAdxTFjcgiz7c293grfCPsQfA2BQfTnwHkF7oJZ5MEXGAeEv6mxkyJeoDe3ZR5SXfU8q4aYQVq5w2QqzVki4",
  "key7": "3jMTpBfkuKbgeCLCoH1rTgyq3mgVXoWdHQ57LMJvQ1kmGHi1rtPecrfy9kLD3Y95jc2df2GGf8j6ENhVV19FEUpo",
  "key8": "4U5GYemT3Hh62eqnuobYAK8TKfPxBikmqy9JMswtX6UzVDVqiGKatYRD9HcAEj3iBFhHXBT7BLUJVUNuyfcWm2ED",
  "key9": "2NERweFymMYC1Mx766GTdu716EwVqDiWZUdTUueKHJbwNSbp3iNsCcrjwWQGxTDAgWhqWz7tjXNxreHnrwKUKdpy",
  "key10": "4HKebGrBu6Bj4YVL6GTpgmkzDXqwu4Vzjz7U32pQi7Qji6jPU36zbsyaUtJVuQG8rvLK11B6EzTcKozHL3tNRxDw",
  "key11": "3izdzbELH5vYUTawHBiRym24typK9JnQVThBMa9n1C1LciqkC2koH8nAoyfAwuCJWY2fr6stK3JuTxJBziJ6cM24",
  "key12": "33Wo1uSfAZSDL1oPdKQzuU3fQrUjhpP7B6mX8zMJcTpmoQf3TV8asnvjxHgRmwH1ogrEQVafaVpFxkFhs2UJXGtN",
  "key13": "URzyAzcVtVQToZGvYB6gzUswZfJGzge7hy4NmHGbWpQ9jT6qys94tKSFGnsybCMQKZ6iH5ynCcGww19jzsCv2Th",
  "key14": "3HHbN5zqbHb26F2hN2WR6JN34t4hBEm6F6mo9WJaATZcWvnJjv2HvUADzFLcankWPXfsfdqXm8Wc6me7wR3qRks4",
  "key15": "ww9YF46ZTsHpAj8vnaSUqgN8VyaJgzqWipBJvsqhxuaR1dHWoHpH9ZxaXKvYw8oYAzjP3RvzvBBSd9vwpetQJRL",
  "key16": "2YRFziSybxQodW7qnkVoTJDBVu3NY8eShoEQESgP74MDPyyPury3eH37fp6W3GUJypG1wGE3yLbhbFUaducbzJcD",
  "key17": "4SqJwsm2v529UCCLsP3WaLRrBXC9hW7PmVjhqYb2TtQ8z1r9LtyRop7KYX7EjcTexY55X5VBZSwyaCw9ZcR7B88y",
  "key18": "2448xzgWGygcHRDwBuV6kWJrmrHd6JD5PJvFYf3v4cbBUhpzzVcr8JMBZRGnK4WbGwuRrFrWBDSwTnLDe5mGsNAY",
  "key19": "2BP2d8tbxcr3TKvfFLjoRhSvS1gM3P2ivRjws9uqdtbE43TirZQDgL2GSoqky4YMLRPJh2kv7PytDCEQTTEuG7vW",
  "key20": "hfGGCiHov7R59BfNDu2VsnJCNv5Ujj2FBYJtRt4B45x65Bu4S4yairXZnFtnfPCCAvd7PGXQxrdJVPmC1qkkp7f",
  "key21": "3dYcdjS3KPma1f3aJ65jU1qzcRRUpAz4GYc8n9QKJbvypuikKzsn3a1qADYvHKTjV8xLwbexm2BfPj8WrNvKvR48",
  "key22": "311wEX15mTnBdZ8B4VJnQYZ8XVzFxxQRtRnwcXjZqr5aKUn7mcLNQqg3uJg3GnZTndRP2BJTbs7yBFsESd5zyVd7",
  "key23": "5YQK7LGt2bfekM5mZMFE2tgUjsnKttJrd3PEaHDZSxNjcNhXQbswtRUSoUCxkXtrEu8LaSBkYKeazzqtvT5uFv5L",
  "key24": "4x99GUvtHdSoPFnbRNPguJpzzA384MUu7s2CM3mnXHnWcScto9Hq81kiNvt2qmooJNSzTXYCse5EpvDs4vVpJbRx",
  "key25": "uC2qWzF7T1r79Qr2ZrkUmLRhPcHTizaU5yUkw9Q7GPd2oiXszdTfaa5gmLQjWzR5AMcuCeuD9eDciDdA4io2FV3",
  "key26": "5KbCgtu7vKk9RHqJ5s3esZEoYJjQ9GSRwsQqW5gJzxPRzxM9CWkDp1UB4ADnzm84ikY47ACgfQcyuQsswVfdcVbg",
  "key27": "23mHHv4q64RHjKEEMY5NAALqof4f8FGk56Fy41q2ihdtZBKTPbcJWWmmLtf6yj2GTswQ6PmtqkwkDXh4Qgcadoo4",
  "key28": "Ryt47cb8fecyiebzSub9xpGWMNCRnXjgLR3Edutie6hu5K9TCy8yh3N71DtR2MZjiPipsetkpXr1cQAQwGDmUVd",
  "key29": "5XDSaPxSzXVupD4CboUzGuDQZRwfUT28oCeFJgC1ebWxCn5rZ1M37fg8zy9qDLL6iyWnsz6cMw29NjgAw3q7Wjh5",
  "key30": "5Jj5LMc5TtXno1YRDW3Ro1x2AoHKyHcADUi1YjEpLbE5NbTEmEURLLSF7H9teZS1kgLNxda9gPpNv3LPvJCcbYho",
  "key31": "2aho8aX7Rcp3wPCrtZpH36gsAdGzM735TXpJYpm2bqMXUNRaf4Twr1EVC6gTuhGFj5dsW8WRD4UFTRe7SGGDrKR7",
  "key32": "2Aem12zzmzipobcs1uVNtKysNwTKp9e3YZJbsgTS9ZE8LHtPey8F21H5TCiCgktWqgr7ecyqu9YM2h8J2DUauCT",
  "key33": "4j3u35PR6FL6nD9ASowNkvLm9HRbMMJoNWtCCg1eaDbyZdCZnN2TkK9DGTDS8g1YY4RvxyzgGxgGWRyhcAHjhUN5",
  "key34": "5HfWGSstmyZuZUcvkNrcCbX5TqHVdZTn4DtdtWG5pKFz8BbWShhFfEQL4VZYesTf6XKbY3gYfgiVEPuQangCF276",
  "key35": "Tsv65LkgoampLT5Ci4vEujBSow2MzDffpcgvzgyQYiqoPzWd6aTvN6ed3agL7BxnyVPKMrAHdzGCFYcdws74D9Q",
  "key36": "2vVbjfXMeVyaKirvzTH2xGZquxzF64mGzSUAxKtpcH7VZnS9JRqpDbkZbSZYiJuGmDMGT53oiHnbL4x1DHGfNghp",
  "key37": "xJWK1a1Wq7ZJcv3Vhqh3khRrdecXDKgPSHoEKSrHkqjCKPsCa8i6cj7tnzNv4tsgYrc9edsiNHsKsMWZ4HHA6Kp",
  "key38": "zzYiEik6Fzqstw6pde9i3vgFopzpK9j6Vv9WXfj64L4bgatUCq4AtmUoHVaSA6TBQe1nU1U2JnNZe4n8QYFKjTY",
  "key39": "4kz3HLo3G51gfrwosHbPyujeQ9VhGPicJk59Wk2qownN6PobCcqkuACvkGfFJjAGyGCVgdomNYQMeHvDUXgEekzq",
  "key40": "4boWp2uVSV6FehtiFV5gpQybLArYGp8SkmJGryaus441aEmVKrv18WC9xSmRUjwGMDbW3kPJD19oyX2KT9LPABPt",
  "key41": "GtbRozrTVpMkc6Ft74yJCt5t9dnvaSyPX4Dyx6WSgTjv5kVgc2S8xVpApBP4nDZceFawA8aBfHnSUz9FZyEM2Cp",
  "key42": "52QXKdzSSjnKRhRnBRhptWWyahXLZ8gxRy1ryoEfrcuTkzJaEYBft6GxAdNdAETc7wW12dNfiRNnT7Zt82RvZBpt",
  "key43": "4VpH6AQQZ75JZCbfFdqxsvqmFDVEkV1WrvTFASq5a91NQxCR31Ckg4Wu8n6gz8tAP7mzNKonDFejT5ntuTFWZAPh"
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
