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
    "qSocMQG8uRvZnLCpwmLK5bTFycXQzeGur8eqVgjBnWL9a9wBBgekvZbyeYwsce4hYUpodrkHC7qYjYafuRvm4yp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vnC8tWMpz7keMXuYfbMrmyxbGmcbzC85oitJopwcr1dSxtt97hnzKi4MqB72QVKBwQLcTAFc2pwkierzs1CXMEj",
  "key1": "2wVpUaff97h3JeibngpyFwS3WY8E1xxZXWkepbAQVz59gHDg1LsNEfrDAVjK27xiyhk9XDeJPFzqMdaeCEEYEb11",
  "key2": "SmLLiUbfDK1EfUaz6T4juq9FjyUpdZimkpJaK7UXfdADMj8A15oR348EJswRoiViEhCr9RCLeB4HuNRRQRhBmkh",
  "key3": "5ZbBUAsiezRyyL8R5XL2JxJexyogTC6DxRTSmnW9BT1BEdQ9YsZBzSR1LVYqviDBbg5rkbU9Ao4LPaCugtjEomhL",
  "key4": "2VHbVUaiMZq77DJHCgFzCA15fGmwNoJrojBejfRungmPm7nLWwGwmCvEt5BsNHtBRHKZt3NiLgp2yuui1GmvyVLt",
  "key5": "4oa1BUddQBCJht8psrgho3QUjnACPbehp7sh37rEGoUftcMD8TsTToru3wwLuzEzhvJkbxHrnbNrusR7vvV2bjJN",
  "key6": "58MHQ6HuyqwU9tYD1XhVJ6CRzmTbsJi5QiEtxzAhCx2KgDhEuU2jRb5LGToUjGm2kt68XBxmsgqduTUyTL73A551",
  "key7": "5vFtyPbbDEG3tYE1zZSyYXxvr3Eq6yvqHKc3Y4pvyou2VNuncPfTGLBN6CurCMey4Hof56kAMp9WDVmC2MqgkfjD",
  "key8": "37Hzy6ozvhz7evspDydSZrBk5VDGRF7cQ5Y1to8Pq9HDHfb8gmENvc6tYUhiVe6QjWQAaJdzGVR3XZBCWZMon6KB",
  "key9": "3syB6Rd2z2KtA4T6tAjbRDhdZX1DuABk1EhS19MgA1pHyfc3xpW5yNeBCdMNQMGAHwi1PntVpkF3WtktSb8LeUy7",
  "key10": "yHPDZUeGhMYgY3tx4uywKshPmUyy9WfzwqfFsuURbTTLzjZmyT478kwHZyz3jQWZL9DCbRZbx94s5Phukz15fZ8",
  "key11": "4rCBmgQhewB8wjUB4ofT4duSHD7tuEa9Q3C3gbtnsDjrau3FwBC3QpoaZaZhLKKLRKWZGMaGvnpwuh9kN58X4m8e",
  "key12": "417C3tTCESWmEBmNxin59LDzzBiQNZhyUsy3JhNnjSFp5hEvh1LzNZYdqF8mUpRWLMsjA4GSzHXXa4PXisfEBE5b",
  "key13": "3WPefCgYtAjxPxJZC8aqgbiEArx9CMrdSdaLzUfd1P2M6iCqM7UvXvqMz1FzeVss3dxChafQBkjRgxp8aTJyyVgg",
  "key14": "3svFUGkZbu87reyj1EEnY8VDPtUkZYhfWENm4ZZfD7k2yYN8f5KYk8BubGBAnv3Lz2Qm3kuffH3i5AsJac3tSLmY",
  "key15": "2hajZGxwu5zZavSprBCxAMmw2QnomiXMtywpZPATqArPHxP548Savki2QwpByGED2wBqkAGsAAAM4PFec9Y7ZYSh",
  "key16": "2Wa4rRrCRAYHmrqCuFUG1bvp27HP4jx1uGkVckEV9r4prxpqRaf2hmCbV22Rets76oQZsKWGsdz7spgXexVbnBd6",
  "key17": "oXAUgvNbyVkfWqFDyaUJUU9vp7aDRn9uNJ2SpKZUzTLM5KKzvEV8hbXjU42HHniQ73VEfh5JCeEwYVGoxKCg64m",
  "key18": "eHoUSaDPYZp4vUae3iL1fSd7GWwCZu4C6dGcVikvMX4siWzVU3GdxiUUdoQ8Xqu78DBhTzbNoZaX6f6cSNmKfMe",
  "key19": "5KxRMvoPkXwzaoTgHmzetR3bJPWJnaCLgoSAieCX2g9BAfaMFLMMjtnWcVoJwPLsYySo2RazspMGYhWcRm6DHu8Y",
  "key20": "5DLUaVussr1JrhUUfV5XA8jGrGibHuFH1Pvn4p8obeeWXHszg2FcFNgxCQTTHTLMuu8nHernz5Ppf59LgCUJT3np",
  "key21": "5arvtDkRjrT6WQ1vZTuBPyyoFLQEEZgcqfG5G4aDtQqWdjommpcKceiWkcajrTz6YpbwU6wYp3VARoq5ARk5xzLN",
  "key22": "4SuAUBTAPgf7Y4EXiy11sixYNx9KQgcwT92rQmwDqcpGR4RjVNfeCfziYPb3fxE5SKKYVcSBSr7k8tTyRsbr5T42",
  "key23": "2YSv1wbfduaafxL5UfXgGK6BoWk8gfkHNPLwqYVmAnFMCJstuPxQ3zGAtXukZ9aLPDG8DXuBXfmUHeaZjdjyVZkJ",
  "key24": "2yeAMw3M3yJ6fdaC8Uqf4tRjDAQZhWLp35ysdtpeV8bJCBsJ2Rz8AZMaAjP8qzDANGW78M9FqX2YYH3Tcjx1s3cT",
  "key25": "3dGkAoBfu7m7Xww6AuwW2f1vu1MwWJ3EMm9NgX7E3vENNfmZbaxUhEGVHAkNKh5MbjHqVuwT36gRMFMFvRUfFQbx",
  "key26": "5oBkfFXCCnMRvqsjNdqnyuwoL12fR589ug37SivLPN2q9kjUyUj9FhbJ8QnDijY1aqz6WUEBJUm2fTg7NVz8hmm2",
  "key27": "3zgz4nH29sunBThzJoZer2vggJcx4hB4SDDEWFm7p1pQbsrY1sr2xnRuZT8uJfLJd3fSVNxLZ9xKx7btitZhnpQX",
  "key28": "4XCLkX4nwbKGgxn1BJ7CoXaike2VG9oPmcQoRwndfPMBLopxnXcAdaFjA9fnfjNnoBUVJmLLG48X6zMrFhwNUh3g",
  "key29": "5nSyVqVoLRP3VzexC7hgKoPVao6ssVNQSiAmJMKyDXZJqnqfnisX11oPLwfDyXQRkCKLS4iYBTdJRLPKPzYhDFEB",
  "key30": "5PLU2u3yLofbKcCSZCd3VYiaqmAw3vVwoEgfBN8gmKHZE5aeJjRJVapkSnMWfvYHhM2THBkdqYypBzZzyQpZ6pFn",
  "key31": "uh2wgvaJispQQqe1r8RXorDsZwH7NBNoMmavsScErRgjvCmEyDthJ3ZLKzNwMKhEEi23YpnrxHUEwQuDhNJPcXn",
  "key32": "4xit94nbW89cmHp7ASrDYxj3cvhrHc9MofN5oEYu7p5hmW8jviQJwPrD1dTQk6yaQvgFWJ3kpi2Z94v6cgoQnpsb",
  "key33": "5CVeMG7eNeQw24X4rAE9HfvMzTLkqm8CkKKFu9FZmrMxdc7yHTWk3XJiaT5NuparDpqZrHWuetU4hKDRWA5PJFVu",
  "key34": "3YXNYoafmKTc7jZax7XvdgZ7knM1m5hyrWXgB3ofKAb8mdCTUAurKDfEqxfj2mXu3TbFqNuLRWfmrfLubMrakDd4",
  "key35": "4v1fvpLatn3YMfSRuVAeRHJejfymZ8jzJ6XpUSg2UEQQCYBhrd5cgWXguQYEJwEv5Z58VfQET5Yp2C4TZjA7RMiW",
  "key36": "4fQmBBvBcrafo4U1tT32wE4RJW5j1BSTePVrJkXGKXKULePQmkxvScDeHQ1BKt8TstbGAXJtcZBPzKdPcu8Lg7m8"
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
