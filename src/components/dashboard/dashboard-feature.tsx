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
    "66FAx88qsSPfncETEcXpq7nnNrZooE5WN834DSRGPX7rzC37i6r6pYz6AoDC7jnrjGSGEvADXeri7yQPm4FuGjAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mNerDd1oW2K5hnnUdPR1UCDfshkEK6PZjdpQGuofhSDcFgTW97hC8UoAbo4tXJiaWUwrdCxUcAmAdoUZ6rdYS9S",
  "key1": "4fnJPesPHJeztpr34iXu6Px6gNPbEmrfA1wetN2ZewGdHqxUBeLntW2qWAGAtHDQFT8xAMHjExVvCADM8jxdWz4T",
  "key2": "55WNYQZDRQWmvAB5R99EZMr26P8CiwQAf43WXFYpS3HN4aeLMLJ2ar9Z6iB4cf8u3hWGHkwyeXMBCeYiMVWWZSkD",
  "key3": "2PRQCtUDPcunSAjgjWEgpQaYFt5R1Dn6fDEDp8Rh6rWkLKrAXrQbxezC4kjBAvZwr3yCZBc1S19DbwTcmAmQjByB",
  "key4": "5FCn7RJYZABFZ3FHrkUzfWt27mWgL8CuteGj5q5Z9tBa6YwUYG6SFPZ5V36UFKYcbr2tyPkC1qwYpKr13jJ9W4gK",
  "key5": "5og7uQtKxoLpfX25ZnhvQCVLiQySvrfCdxYd7ch6dEg8TPh1H2bwUeTzjeExPQKahnSHQuTB7aihYPjNEU4evSWF",
  "key6": "4pEdJZgQDEXeoFxZMgv15EGVFYrfVjLWbid1F52ki5igTF2bJchnVQnoxnmfouc1GmJxdWau6pTKqvojsWKvmz2X",
  "key7": "4ceKdMQJRg4N2F3wg1noCF73wFB9994A3a74CpZ4tQPkRvXC4RZ4fvyVumJPwoHWsuJptMJtSEYcYX8Q9WFpgWxJ",
  "key8": "4VJeSYT4YrKMhHXHV4QASpD5nVsenhErPqeTE5uN4EkUWRCehX9cb1VavXMUVy92mBuM9FD1gmjnQRSzCzmvPj8h",
  "key9": "wHUpUce1Ev5utWXfPhXysskT4zUu9NgqHuPQYnF9cSgPfY3qpiHuJRfYBougsjWaT2DqoPY2dEUVLmw2R7Rfrdu",
  "key10": "2YW9CJcf1J7Fg99YfFpgypfujdxcj8rBajsZbzW5SRHvfx4q8kEeweicvRPsbdtZJuWyzKaCDb2hVUCyDR8ocBa7",
  "key11": "3HJmEuCfZS5xdpdtkge8mDEk9Xo8haxUTDx6y1pCPB3vgoYBE8pAes4qzti84eMAjPQ6T19FLQFgvw8hJvzaToSg",
  "key12": "4oDvDagj6YVvHbwWfv3H6nq5xQEVmdp4HR2QYDD6KnwDywLLBRCm7kdWZewQr9XGDCgqHaMRddpiMwMSRenLouKs",
  "key13": "2Gd1VA8znaZbpVw279biFMT7mwtsHBtktEhAXs52tfHXyHaeHnLBGJYch3mNdoT41ndbfX18Kba8r1hjfj9ab3no",
  "key14": "4K7JMXEWSsrr14fBsuuboVJe3jZRyzy8gsa1sTgQ1oJLyKLN1EyM9gykor8zdcpK5tBsRc7fM3v9bkN4Dnz1edbQ",
  "key15": "4eWszTwEdVskT92WYJNTo9dsibATjBMKEwdoaVdUAYLzWZjuBRrsyHLazTf7FHWdm5LZUjbdAtMiGuqf1EuNF95X",
  "key16": "PpPeoru1iCMv1simzCt6a8wn1kGmmZEMYGBCNiAfVwKwieKg3XyFTH58dDNEe8GEqhcTgx3eqqxYjsS2j3tCphe",
  "key17": "an8mnRgPhGfRSsvJh63roxTXpZ9gj9dpj814HBTHNeWiqWD7fkBpuKq8kDzPGtcThBX7GtehmLNGV7DqGeNHPkm",
  "key18": "61nH3RsSdnyqAYh5aiPQDtVtL5bhKN3r8QWkEgAc4W7jEMH5gGTnVTqsko7Np4L746oVdL1gwPn1UXZ4xxVwZY6i",
  "key19": "3Mv1YH73ebvjA2JjDzF2CFKEGviLUs8WsBis9SR2MezNxiiFfsLbBhPyFnW8rV3eMAGZtC6256adyskfe1oM8f6A",
  "key20": "4EHXHHHajS6YsFodmDetmqcLzes2dusQHe2JWo5Nbbm5qHdjy35YPzA8m32ts1krQEUCZ8HqSz2uic1bazWAxX63",
  "key21": "4UHtMabzqpySZxVXQxXLejN6CWYRMuK5cXx6vCJAZz7kCyvvB2U9HE6FrxW4tGNf8BbyC1pHj2nDnBGEt4LVv7Y6",
  "key22": "3ckqqKuecD5aUC2VUBHhX8kf8Ak8jnAfkGitxn585UztpXFGtgAKLpPA2UqS6oMnkgEV3bczjG8Lc7awM5GVPVuV",
  "key23": "5neu4HEeCMZQFJ2KwQPxrUy3At4bCg18rhxkNWt7PR3AjTzvi46kgustrE2BmEfdgN4AHHPrWyFrS5DRRPCAFAWb",
  "key24": "2rhEUpVeshFygi2DXyZ3fm2joKZJEsvCkpyU3ftyxnM2hSCcHx4eApt2KZzDKonWihNZyS6wQBJixNV2kd7YhcCH",
  "key25": "2teRsNuLzh4VFPTnp2ZLL5KHKhbEB5SKsC4n3Yo12nySnSvLQhnASvAeUYu7JT5E8eCnXuGpDfsVG9qSnaDbuvma",
  "key26": "4QnLiURVHuHCorZyZ17WqS2CSJ2kEZHiv1mwK6VqAJz3hjJsZKe3sYkmRuHo65YJL7RFPhhTqw4i8dwGmqPb5TgB",
  "key27": "41Xih7iMxe3s2hpGHyx2rLmmvSRdWst92U1PbaqavMiBDXsG3jeW7xViNA9fMA2uiJSDWxW7q2gG6chrNwTKtmRz",
  "key28": "3bHMu5FYdvafpPGVFTgscLfwuSK6tcLkBYH4k4b5LHkxiTJpJieYwpbC9wMhMt3EUjewWoJVfMLuEAbBGaoP3tjB",
  "key29": "4pN9pbovAqiBegEgGtvcK6erXw4EeHVPLjgu84riJ2P4jCPqrdMV5QFNEC558CMJRUMDGfA9RpohB1Das6xNEw8H",
  "key30": "bYVb1EyjsZ7k3wTG14XA2SBWhfsRyagoHevTFWJY7MFd9XsZC1z4Dq9GTHxPYFVmenXBfRXXS4GyySV2V8ZvHA8",
  "key31": "28aWFNgdRULz3sy8Ut7ENrsbe34JH2eVCKNCc5Q47ArbaCDah4hjEHthdPbyRhCnZB54GaBiswvUDWVvXi5tF694",
  "key32": "27FjUbue7q9CddqttcPsWbLZi1ECXKDM4dLtqHTcpRDXrw95KW7THYQZx1PF8TCEKLai9KWTXRy18134RwLYKcsn",
  "key33": "3tWfbadK2VfXFi9iGzvo4rmLNfmRNZHS9uQoKZS5hFnpSecPTg8qUgBFGYDDKhAwmD1i2r378FZ2WeKKBWgUpZLa",
  "key34": "FbMmmquX2s8wepdKqS3r1XjRiAqkmr6B616R1tXQaQfYw7sv3rX1vghzTw7oR7ZP9919iYRjaqrbWwrXNC4RK7d",
  "key35": "3FNp5JKQJS26i1nyr4rKApZF5Ag1cmziFFbjtt1gfSFqt23h67q2ZUSpMebAuxj1MjrcG1LN2Tpc7k5dRWA52UUc",
  "key36": "2ccaxXdH2xaRFfAsYd6WXEgxJ8PmnoRn6G3FWCFi1quHzsyau4T9AXWhVh9a31kKrXiGTJJgmBDpqmp1S7QP2cw6",
  "key37": "oMNSGF6Nu4ANtRf9EeUpxeLrCsWSQDSPBs2DxaW1SYkGcREscuwCHgwEDbhG83BUYofCjMoTzXZLCbrz846TDXV",
  "key38": "2T2mejgQ26zCqHetuH6koJwBu3qWNVGxGMF6sq9BSqr82xC9MavW5GX8DqBuLL5X7FQvPL99wYCvLVY1cNV4Mx8V",
  "key39": "3StryMakHT57xfkfmvvhkUMLhZnMbYLBRYXsJgxxeB6wz1QQ4gXEJDkHGPXX35mar1dqQxfjG7ixgwEhVvEMzFQg",
  "key40": "35YcjPPAaupc5jb5rfMTF3tm5CGJyB6xYbPiAKWRpmJ8k1bHYPjzPcVG76moKAR2cppzuE5TbwwWS3RPuBLG3uHa"
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
