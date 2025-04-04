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
    "pB8tsZQu4AYEnpXpwVMaCdgP7yembKEBxFQYd7Pk9zmgfk9ucbQypvHHauzuHzwFoQTWm2aKjK6fsN9s5iG4wSj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WYUEuvc4QmdG5uEyikD9B91okzHiyc7QX92jd4tGjneSTeMRWS5by9W1nQT5D4o9kQYrSx5wGk13VtTs41JveU2",
  "key1": "3SNnJGZVfUrAFjrn6uwsqJmop1rALDaJ9JvdQXbG71E8WMS7GQabnJuZfBZ7VMs4ie5vx5fMpaj5BgsGz6uFBzUF",
  "key2": "59YmNxrmxUJVbp8emLXX3qfk4ijdig9nTgLcUEZ6uam87c5DSCy2QURWKSf4CDvmgNH6eLYqkgrPL6Bxa85xD9V8",
  "key3": "3Pgk94hA8fUEbdRkw6gaiJAeDcVBzFEC5wmax3W2hzUyCWCo9HRqbNS4Su6nHQR6GaDG2y4HUZtj8LeGqrTy23vk",
  "key4": "5kjLaikkrKRm3ZYsFVRJC5XEsMHQKYFmRU6DLKvbsxXvQsP7iCM6UaGFDsnxi2XU7B8vLefAJbWUYHchSERRDYgn",
  "key5": "Bu39CXC8N8RGr7xtFwPnSPx3wMGZeHUVSjKrhaXsF3QF9XiuXR954PQ9yMUoCB1ysS94dumoBDEC7aSd42NRqqL",
  "key6": "5efZgAWSsYvqTaca1YZd3Ph64VLTw4cSzigJz4qvjQgvXKdqpTLm1i2tZM3hFmsZRxgMHRfQZ9bSuyT876SVLfFe",
  "key7": "3bNAaxRPULpMj1ms7DeUqFsYHJhhzDQQzVb7KYC8RuL7qtGfzWCm42rjGJeoSHHMDfmacnCqBLp5w5LcjijaDSPF",
  "key8": "2h9cuhWm5oBssYfW8hdGBjZQ3TmxuUzXFKE4qNZKrfiqv768xkT2W3Fy76hUP7JX6vh2g7UhYatYHPJ5fWDwpUuL",
  "key9": "3knmiRmix9P2hf2sSzJFcnqPyGEpWjReytv3SFtzgEtkPpSrVpbfnpzQDeF7TvqDEkSMPTKHxSbkPRFcdoTQK54c",
  "key10": "3iZVbvXQ5JzNZrZPKQqDLjREBoDrTCBJdsz6tmFVDhsSPKBJqwMYTycT7QYxuXmUTLw31bgLy9W82FrdFesK9oaB",
  "key11": "3fkY59NbkFgDRWgxuBcp89GGNhkXV3z4kK6hV61DnrwhUCwTt6r6VD8cEHZWE8WLjNkoF6Ay5P1Y2X2c7JqgtBrH",
  "key12": "6344FGLzhtxp9YDjUoFmfGpFQXz5qKDsRs9MDqJzpzLyWZyzx5DW26QQB2nvyKV35iCoj9i8tURvxVccriWsbBE3",
  "key13": "5Qn9781vvR6kogv6uEE8Htvci6N3g2GKsm3j3BTfBNdGax8fzJusHoeaF4pXb5tVtaHivF2pKfHwqDey41TnjLEp",
  "key14": "2BNFzYzqqHjW3hm6JTCGEbPHFXaRSZRokcC5Xc1aRe4JaGRTVweewfg1XBC7do6ScAdScsj4PrwuMeqbXn5TVLdJ",
  "key15": "4MvDsQmWobM72uGXtG2asZf8KrrzpcFy2FzpLjQ7DzWfknVmCSroZQMjUcCab4opUF2cgKhQxr7PykcNv3jnsSAs",
  "key16": "3tLmpA73YWhvCZeRnCDo4YnBxcmjA1BgpEdBAukHW9MBJSLTq4gjsC6SQBHT3QGLrXKjKNm6pkSwJgCPC3QyVeCu",
  "key17": "24qfYKtVGMJoJnWQYFDyWTSjfqUpZS9ZAm5fossmj7Xo8f8rN1Ve9ou4nQTQkuN11ekm55r6ewwDpxHP7fAFhwga",
  "key18": "2JPF3FrZv2idKegKC3XNMKZ8ymQmnQqQNCzZpua2PS4TxdV2MYuUtaRSgX4rzZXKHRw9eQFaSMyb87wHuCpnU9hY",
  "key19": "2uMZdEffHUKVzLg7EsBRYdnZ4TjY2xBDks1yAdhREa8TdqMVwN6qdvRtf8sGnyU8ziGzL4bFyTA7EKiyk6JszEHR",
  "key20": "3BWZJjf1bVc7ck4Z3jpzAKxLjs14w74Pfs98eftgsFkwaypsG1XTLWsnAQ8yP4mF6d21Lf9D3JcXUaQMEJc8p1Z3",
  "key21": "2U3Eb7QTrLCMX4bAMTYKavizZediZL3kbcfVMpNkWy6vWzhk3TE9DgxNW5UfBng2vBGUazpkD4P4QMxozUk8QYtx",
  "key22": "2KnYpHu1wkEgFDh8dayz6YgnjkFuhNfNeaAASLvyoe3X3TtkyceFeEmGqbBWCE1nmwiGScuhbiEywXJ95osmL76B",
  "key23": "2r6s6XUkJ1Z6TLG31c6zWRJEDp1TxCLA5tCsss6Fq2NEDqmp5zzqrgGebmJHtTKpnAUH6Eoh5zdQk7GAnk9ieQaS",
  "key24": "5RXgNkhtEaMB83C7wcSThRJ4nZ59yfp1ZnKeSxGnrSnswbm1L3EDssh1wiTFCTLEgSzXNxz1cYqXSadQ93wLpfHu",
  "key25": "3Y6jjpSMM4B9WsR12HyRvymT9ce5mqWfBndt2FSVTxQxTi3c7j7MfTJh18SPHMpkzCtD5Y31AotRR3JqZDv8jqLb",
  "key26": "24fhnVDQ3VMqNLJoJTcyG8zgoVsVw57s5AjLkCc8H6xU7w4CfvkSDr38FG2d5CPe68vBEq1CTYkypVx2j5nbMUQP",
  "key27": "xzsJ7VjNiY8Ado1yAnUyALK2phAmipBkWESYnw6KfpMVF1PfqQYoUZ9U1qUV6dAxtPLmFozcowbWtZTxUH9aQ4R",
  "key28": "2kuCBVqSXA6ZAZnQcXZKS7Cd4dDGCwcPkHhGKfhPUEthPf4QGQJtBi1yDr4Q55s1qx8kRvhe8mJVXvTqVNBxrFfy",
  "key29": "4uY9MHgRJs9g7UxHooVECoMLcWgbxE1bqnYQm8VLjjw26jNftRrdGG2h1YakNcHoKhzK8Wi4mzVku9SyFVTwGnPp",
  "key30": "41dGtZJCpk14Tcgs62d5rjnoUVyEPX6LCmvHUwu2oai86Rd7kGFPrAmHFFXh9p62XF3Bi2TMDCVZfASCHu1dS6Tk",
  "key31": "5jQapK2GZCLonhtUAmCxt2S92PNe6fUC71AWGeju97RCrYJnf9zU6SrgALTmfh45EE9asG1NK29wwBLU8Y8mJeuS",
  "key32": "4WTscTctVkq826uUFTvvWMEH7Ugue9Xf9Xymbx5y7VHmPd5hKFaMAdQwQg1WKEBun2sAPX9AZkuabssy21mcUNR1",
  "key33": "3i5cFjyGSE1NQqTDMUvAxPbiZSWGy32pBXmqpspwEHJWXq56rwztTwEraxFqwaLzBTL44SvqaSwrL7KYVUTZXtHV",
  "key34": "2724ZxSo3tTGFj9JqdjTUiyD51Ej7WMRcEzfzEuRfM6ACBZge4AYVohm47j6Ev22fXkFacj2RAeSoNLNaWT5wGjH",
  "key35": "4BLmUd4HZHh18JBKYYW7U4J5jXtV1FXuhmhJwyW9kHY7U2joCeTHtSc1PuheY6FVqFitTVJbnDVLL6oUokCm45iL",
  "key36": "4ac8BCvLQA5ecW7qzAH7GKbu6jAs2fFJHFvd6oCqdRm3SZWt9itb9e9zZ7XDRLYDzjp2ueQfHYNq5k5Pcp169ftK",
  "key37": "5MsDBQGZbKNGUCuxfWHW78YDdXXDLNFw5SX9wdT1U7hnMPoeKfJCP7KoRbqxYxgWuX3YPGiP92AGbSaPzfEJzuxH",
  "key38": "277NXQVKJoYGph3769m1LJKd8N4ZL9CCicZbn4LSwt2tGyaqgBVt9gKsmds694E2J1H4qnHR4zh1eB42ymiA2JkZ",
  "key39": "3DR3E6SSiRAmP7cWjwYgVpVrPCxYMvtvCJ8BJdT5A3U5N6NsNYsjkGLEAZ7ygDi9s2d53L9uNVcEDRfQ7fDy137M",
  "key40": "3ggTXRY2hyStNMaERn3FeHTM9vqLqrgiT9QKBmhEBiGvk8PdpSRzsTRbFppi7MJQHhH6NS3YELrVWiAVbxFLiU8i",
  "key41": "4kVFPHKeB718mVHXdNVRHjwYZwHLsKYGsUDJURuja5LUYWASkeaEha2o7Yh2fSkUVuugirDDh54wHufGp5LEnqeq",
  "key42": "5MSQ4EkgdD9B2StHH89QrHH6DRhdmXgMbixvd9E5ACb58LjC3fJTNBn5uFGy4ved7UyWMjSLGYi3j1c2JeWbzjCB",
  "key43": "3zkeKepvJx5uJiC32QY4HbsQ7ydSYPgLTobEvAfJ7SFWaX3iUEhEZq8KZUp6JjoC4dMFYDuNNdYdU6fnyy6ZPccP",
  "key44": "5FhEdiMRM5CCTaYD3dxL5tggRDXUSDDfdycsNfDonSFk1oiEFnMW88JEsr4Z4Qo4szk4RXpnGT8BwaPrB846sW24",
  "key45": "JYByUByz4Vhz9qFMMxBh5PHMCH39eWTgiYe7qFhXGJt46W3F6qXbabWge1UibNzo84wToW4Zf1BGWqHzUMSGdzJ",
  "key46": "49bjeLZWBkUET3jePZ8fBGHWvV7YZhWeBJq9h2oQSf4qatwWxr8mZpqGDwhpyYjw2EwSoVftVJGPaWnhCrhB6jYv",
  "key47": "kmQyaQe5vdf5gXmoRDvDTQGW8kMsM2fNWeK1guQekpYGVM5D4A3TUTAKn77tYpFKr5WpKCe3uqe51Rz4yf7ezUe",
  "key48": "4iHpwDTsSdFtk7NtaQt4TEhpYRFWk1wH4NXqwYLjLp5U5rYLdZYqDsedYMRNKunQaLcbRw8wb6b5ALdNZJspkY35"
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
