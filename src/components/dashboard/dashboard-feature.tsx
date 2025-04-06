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
    "5myA87A4PvGawqLY8qXvFjoLeepXU99rR34ZBeCPB8eTdbiJRxW1xZLvvYJZfHWZvM8ya39JwzZFexoehouAhyWK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hsEPDcE3SgpMkFkN5eydm5ZTKZeKrfc5CnzdTBftA6JC4RzhjMcHTwKKXmkwJoZ6wBgGfdxX4ER1SCWbCne2v4f",
  "key1": "4RJsmM62hUJXJBtxxcWg9bUh7oBGa9SLV7CDnT2ksjVbcsAMfjanAz7ELNgCSbLwKz9TwYkfVFK4AZSmdUh4YXhQ",
  "key2": "3rarrYghXveCVhzMxnbHmeK45VYuZA9rJVNUpaU8yx4WvBaGhf9rQWKzDvxKawqbc5fcyzLjHx9tcMSvQs81ebqi",
  "key3": "4VEXujjTqHurQxxbLdUgLBWvUFigGpYE7UKbBKfSTv8rDss5HyUyq5MQbadcinbtFwhZPwHVk8R7Ncmbo1XTtHJg",
  "key4": "5nVTMULQRnuNBE8vA1f5p4X2tzeKmYjD3X5u99At4a1gucgn7jtkiHzmKhJAaFrjXEMXdKNZVJFmZMvy16TohTun",
  "key5": "3FxQ7Ap1RY28NpbH9MjQK1tsGwfenA9k9zaf5HN6iT5bBDwocUkMCWjiyK4ueN3bP2ELhQbf4zH5Comeh5fxshgZ",
  "key6": "2MoqfxY1zcySYeHyQux6xjUkTs1ranUV4jtSh4xDa6SyURfGZaT62Lifuiag3tSZuvS2sZK8wW7wL3LghmDUB3gK",
  "key7": "pUSdU66R5u1jhu5dr1tYE1biys5MKxGDWKsUxGx2Ti77dXJE9URnzmhYv4BgK53s2gp9f3WpduS68Yyrd1Jqnhd",
  "key8": "2jvzSH5jgxeP23SQg7i8ubUq2Qtzji1kUSQZ6hFBvKNEiJgLNbskRUXk2RVMoVQ5JsTj3UQGu81kWqx9vYS674hy",
  "key9": "5erdSUTbbWuewq9w7brjGmBWevmPJFw2c5J2YYDaaQZ1pHiG4BgK1avJjRmJDDEX9hNseZjmsAvt1XCV6GJX7FEb",
  "key10": "4GyYwaguVvGDokCgYZYCSJosmrKFvAny9trRXW2r69gyqe98FzGcbdKPDE7shWrZ6mWnpLj7jj5EUnkVhy3kBdYk",
  "key11": "2zFre27nCMNTwZiybJcQPxTcGX3RAt5zWAhX9xgHu9w1qfx1Vq8G1HN4JrcmiwyccEDcMHmipLpd1W4wmMaL1X6p",
  "key12": "58zeZiXuDrZjE6AcYwynRwZqjt6QpmPaBbaWKjb7C45yfs36AN3h8gmqJhHxDEY6S1aMdDBcHchMEdWHxQ5HN9iw",
  "key13": "4mEny2gZx82FQidCfr62saErGFDA4SJDgfruL7Nr4ktq3Caawex1imsD1kRAe7LoSuqcsATbMAgwLHvpqXWxZT1a",
  "key14": "4nPMAogTLahAzUXHFK3eYUoi1iYLM6RRFgq1ZtuRa9zvZJ8YTgj8VUhGTvcohJnJyWTYtzVZJbYhxxM4EPuRMZYJ",
  "key15": "4raVkhJ4Dmx1Qt2vDpH3Sr265JN5mAsRKB6sL3z4UnL2wuvqwEnVyf59Hjwf29KaXac8QQZYXtXChj6KTMrPTQjA",
  "key16": "NxrecbAq4sJXBiGauyo9xahhy4foe27H7DkUXoE6EaLp4K85sUBavNd46Ph1phZ2aqmb5Dnvg5rEhwPNNWepg8a",
  "key17": "4L6hAtGCNUiq5uEZJ4pYRsZ7bpwAf5g3PmWQzhyMAdomohCUnynVmirG6BQqCVNjr64oiQT7xzcYHsRjz3PCGruF",
  "key18": "zFdcA7AVZEUWk9ij3F4Uyu4aYc16XjmYqu9CzBCFT3pA8huPGGv26zyTfHgkqM413NipUfirXajQv194MFPSQmr",
  "key19": "5ht14BXYsUYqRWKAmm97Xvi5qLFXHkEKDJJig5jma94dHKAR5F8buvQxaB9Hc6d773QdQSPisoKfLkWmffoZV1Sh",
  "key20": "Ks11kCNnguTZc2x5HBZxoyrtEkF92dwf6LXgvX8mxgfp3m18dx1B9a4oPKRAMBcXukLTkJUnHGTjXm4ieAGv3gx",
  "key21": "4QHgpcUukxeVEfceoXbxP3AHsJmZT5wDJVxAqznTogWnqngM6SiYrnTMCuirDnN4k51nnKJqDhe67QxYcFAjjcqo",
  "key22": "5xv6NxeuwzKGrRdpaigpKPtCJ59NWvQ6NyPXbXsz1WAYr5HgNf1eTKt1KZtMoYhjW2hQN6c8dr21uDGBJvU1RRae",
  "key23": "cLoEYbfBq89cf8m5cz2A4RiHo9zDHnvUNP5uwY4HsECKUc9CNnaFijYk1o8UGnymecyMsfX6w6ozrAvatbnSXbG",
  "key24": "4nJXnJX4nbcsPPqHzKEXah3WDp3pdtQ3CDZyE1pMMrmV6EZrP7HNJeaj6imXLi6TWobvDw9F8BxZ6hoEF2oMRAQA",
  "key25": "4s5ha57wbEcGxyxDvUX2ktRzSNNWnbEvxweHDf5qKDDALNXeyqQG1GN43UAQwHPY3rB9dLRJUpeA32ErhTmki2Dh",
  "key26": "2vq2iuqFvsQ6soBXK1KhK7RXLRcgqWa2mNgcKe2dtiso2Mim8bggQxrK7XZvddnLZwUxfh9mi95LDVUZnmGpGt47",
  "key27": "2vCScRzcfgHPhH1K67pYWnk6jSqT7MDjUQX15YTwiyjp5q4bH8NnHHaabJivkyVp2rL3UNSaJegHhFRrKAoSJx4Z",
  "key28": "4a956JdTQ8pJSUv6pZzLpp5kqZS9RakHUHx7PKWr9yU21HCb7R1qVo287rb2iZWKXKwEVH35jFXMnSZyJcpdhKpH",
  "key29": "2E8XSnHe5izkHdcdpkLTydssZBsevWhXX1XUdAXo9HJtvSAN9Ax1npLQNKEcBbeELhp7ccMuUYyoogoUjXeWu1fz",
  "key30": "4GmyMY5DWTjArnX7CBc2bn9ufdZetFWh6rJR3zUQH9mjvCXhFdDG8xZaR9XAj1Su1G7hsWcKRb6sc8gj1kHJSxDh",
  "key31": "5D2D72tHacCBmT6TX6iCiRsTEvLyxz1sapgBGv2uXVsE7gPmen7wkzR7Yoth5ckMXkMZrSwcKwCeyS1GAqAFCyAZ",
  "key32": "5Eaij2Utq574ssij3B9osxen2PCTsMXCCNWQVS3sYrfQHDqMr5dxkz8BYGcHsKYyUcAnN9yn6PpP8ZTfa1Vxkvhv",
  "key33": "51z7PTHsn49v4KzMeehaYMZmy9Z1xPiDEsqtNP4CQEgUyWrKoWL26WfG4Dv1PiE4pjD8JDyMCeUqzYwD3RJpybgj",
  "key34": "56EU6L9QmMmkJ48TmAjxkSwT1i8kvM2Xa4hyWUh5ce8gnaiBTw7PEdvxaKA3671dnhJjYR9xS29EmCrS411Ac9ka",
  "key35": "5z59pENPyD1pvszewHX9iXNotUPc8e4jL5SW9V4h3RyawTfViNrfEyBq5pHNt8J4SpC68hDUxp2kKvFNMS5za5kK",
  "key36": "2sue8yBB5eqoESeph6pvdveCKYXyRfZNyRGrAC81YJmacs9JC4gcL88iuNzy9rgehKbbkKS7gV9Bt5ArvBx4JQ6n",
  "key37": "3sTTYHjKTjr7AMHvsFWYpFt6J6HMPiWMYYgehjrhz1LSWomrPTrbevWr6Bd3q3FPD96yXg8kZatkcB3b8Y6S9HA1",
  "key38": "nBzbduwXsF9F8S7Y97fjS8jEwbdL3uwF8u4uj86awQjJWauBNYG3oMUN4sJojD8NTiGBvJqWNLWfRBaUH6CvPMY",
  "key39": "txc6wjSotZnVALd7S5dp8UPvbQUkiM1ZcBy1Mwg61XCbVHQmidsfEKVp778MQsP6iBAcaZntnSK1UCnXkEoXxtV",
  "key40": "43fQj1LaZcADjbDe74i1hUcWF5achoJZnDbm7AAcaVANcgsZjcwGZy9hFKU9r5aGyJ78iC74f1MvtRkKfWSR1uQy",
  "key41": "5c5HKN3DznJkwQ3rEYXtTPydtgFVmvHEPYmYQw1xG6Bo2nyhBAv3ZuUNbdYAVD41yS8qTqhN92Pu8hWdcL8LdEEq",
  "key42": "2LbuskoVUziDFz4uHAXhJYjPTA7gYrDJv7V15iCLXYeCVZes9GpNfGK1WXFAHHPDiYSVVWWb3KbYTAJKS1Sppd2M",
  "key43": "5n6Wg8swmJJL8sdSK6sNw9KWUQ2UJDEsUc839WYqwyJztCxD56LBvRtGaVnZ31pS5VCBD9ghdg5TrR4eQkVsRT6h",
  "key44": "2aP8bwN9jLfjf3GxozMgmVa4sdzSLuXpFCj8mGpgotqWxjaWgoXp9KYPDUYYxPMoR7xsNSE7qUoCBBwr87VMrWx8",
  "key45": "2xnmMwUoYBFbBzNmbqQeXzhU5NNAxgz7jCUjNZhejR4Jh9pxejS8HLFAe22L5LAbpQ2ZmKtQTzrEXLaFtuyUHcEH",
  "key46": "5aBXTdwzJvq1grLZEqDwbApzSUMCK3DuzJKwBaqyvmoLgv43WvNV2yw4KZPgokUJHJnhPARg4kW3kjoqrqedWWJP",
  "key47": "2CSbAoWUPy9mVuUZ6cNNG8hABQHVf8egj75xewwzLdhpCiHoSLDoU59xy8m5vgu1cwzVsZgvFjKtp9k7W5CyCybe",
  "key48": "ysG7By4fZr43ErcDDiawAfyfK35MmjjNKJBqruS1soHN8fcPP2nc54dBAn74YSbWmnnKY9JknxNWuTSTR2Yv7A8",
  "key49": "34Sx1hbo6hhqevmcUzxnEX5d9SMyiATCMZ3DdXYc8qYCcHJQAJYtuqZTDnBYPut4VfBtGtmDLChMAccJ3PsW71qR"
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
