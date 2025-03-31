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
    "2Mkz5c1nz3xNWcud5ZieeknYAq7vXyN7dSPJ3A2M6ezmMDAdtRrHcrSHv4vYdan8ZZvUnQdzmBpdSaAqMzbDDVBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27d85BA39UD92pMvLyj8m5vpZ5asvZ3whBmPukp8CQLwYS89XP3DtAzuN1zr9kUdjQ24ZYKQZ4p9xv14TDAVQTsZ",
  "key1": "NUepsz8MFEs7S7y2y21EyShpk58NXuqB1mUXp36Z2aFEPzmKSVYBXxQGGHY5oB7iqzzhCYfgNS4uY3atZJzQTh4",
  "key2": "56S7UDb6EK4WBdYgJjvaBH1LbNdwFVm1Wn3Av9TgCoPjg3NHYLQFqCnzfbmmyA7WoBjhNTqBqe9MQ2F8VYiNUk9r",
  "key3": "5iwRRxkZkBA3JTq2yK9tydwwS8wKVpm59LhjRaFD5qRLnzCMYxB62fnPavRwy6p44pyk5QmhYeUosvv4gN7BwkEx",
  "key4": "4xopMaARzWBBvhgbXyXaKYA9JFxpmVY1PhkWRRiqxgCUFA5hKCHDmgavGMN7R5PXU8BjVqevWeae9gxDzgbTcYct",
  "key5": "3y5w8LB2kvUjWvHSg1f387t9xFZbWyxM7JDnkqJxtr5BchJBn8Uox7LbGbAvYnsmxSJXK6HB9ikTikZ4z5D8XmTi",
  "key6": "5ACnXc5Vfvp9C655oQZSWHUg62XUFp1ojSt2x8MXRAKWFJpFYiyKYsYBPJuj7gRaFhLboDzhc6fD49tZogtkT8W2",
  "key7": "4Sfdzfx5x1FPmohCzU15dy8ts3Rxiu49Xpyxy9zRFv4PsZq3xTAC7QHZ7e9DshEmBtjrRaUWzb23JiYHoZwR8ya9",
  "key8": "4ZVm8wuT31wszEoBqiWc3G8R4CuiDBUttHoqaT7nNigC4mzLREZf2KnZFmt1HHiP9LgeaUWT8takYfBfamCi7VTH",
  "key9": "ZzZCP2ZGjuvgYiVStEexkTfRhLw6nK8zhhvxrXvVDVJdyh1Qetv6hQfdmo5gfFfC7k7CAVsayp5zkmWKwfktmmy",
  "key10": "5svNJbhgWWVRCeRT6xzkEUKS8dUBSfXhv8fMSncghF9ku5DfxgJTghKatUqsa87VbigCmN4h8KN7CHkaKepLWuog",
  "key11": "49CtriVhrgdV7cKA6hLPBsrobAYinQNeEDQNe7VnonDCE8Eb6Z3YwquKhbtgg68MLB3HLeFizgZ15Rw8Mq3wNqwh",
  "key12": "3GHZe8YANS7sfnuoJ6YBgYW4VdzBnN8ueQ2ovgi1HQgY5AKHgnYyfiQGpJEsBfF4L2cRH8wAgdFW9RX7eSbCt4Se",
  "key13": "3YzfsAA7ZsJANfEUiv457eyHMZ4T2uJgQmkCZppdoKbbCKCU7JTYJVwGdVh31FmXgTvHugENCZY1ox8QykPuzb3n",
  "key14": "4ajXhov5PZNLGgnKHWoYr8D42EGKH5RT4yFLzNYmwQCQUmSqg42AjkpMME8StoxtLNZQ6FYxATAPJ7rDPjU7MErt",
  "key15": "4Gh6GxfmqXyYctQfCgy6gcb1wscUdn3hBwgfziRuUi9hCRwGoqbEwo2Btqoo3YBPzKA6TrxFTjCyTUjSbNRFtq1Z",
  "key16": "5Nb7f2kxFkfiztGB3SdrqRSVudJJAWBU4HPPYEppgdS7P2N7UtvPxx2aGx8hSJnjxMpbKgh6GDAoq2GPem4ZPuzr",
  "key17": "2bPzNTG6hMw12quNdrBkDbPY2DucDCWAa9MSuyQN4f8KNjLzQFdfrgEXBU2yUfEHitnMHhX3Voab7Wy8Za8AtEsM",
  "key18": "3oJZyR8vkWPKNadK5UMuXN6xoQMSYP4Vvpr11J59NoSZC9PNYY3V5YSLDU2AGKYxaF14g3BVqbTpz3b46oTZF6r7",
  "key19": "56NQLtRuhqP4wCjVSXexWrV8XeQfsM7vQu1ASiBZ4ynmb7qQAbbZueHPRgrm7V6P8peRFx1gaQLFb38My6pVZYJJ",
  "key20": "3Lvbf3nnCe6yXp6zdX5xr9aZGnve5WfaJwqKdABKsNw83gomQi7dDhWGmASmsTq6gsJhSMPjZcfpEZF3nkyguVxC",
  "key21": "2nyvFXRL739uEng9Sjq7X5o8D4nu8DSvPwzECKY7mfFwk9RsQvKrv9ccwZYVxLhJB4rbsESix9nYEEAjPecRNgCb",
  "key22": "4DRn3jUWnyyRtd66UfreWxDGEoXLJrjqDBtmEBedse8miRe5cAy7AByGRV8z25HevPDBYMBKbGb9H3anmE2DKrxh",
  "key23": "S1m9gT1pDiUPuhXJv66vJCHgbjCxJLdj6Bzj4iRLELW6UT4yehZ5EXiPg8gY9a6fz33qGYLgozzYWQ43k4YKCod",
  "key24": "jpGy4DDTLkhwfEyCyPjjZq3E6Jtv9oW3cU2C1WXwAxszhriRFU1ssby4RokMUfkv5mu8Bb3sMcBtyDDjhmfvoTV",
  "key25": "4qVm2FJZDezU8jm2jUw95Bxytw8w1KN2hcwWyBJ1fr2ncyAvMaLfkuo6XHkyWYKYNvKsRzLAYx1zkFeAMcRMidRg",
  "key26": "3D4kMzq4ZveUvwf8zXTgvssmxnd7uLDx84E5gVmkdjcf9Pi7B3CJuYptXWisDffgH5omQ61MU8A2NW1R2NbU8UnX",
  "key27": "57sH8yHPcNzw1YwNAK9jJZWWgRN5J8Kj48DSHEhBaRajBKs1s4YrvuDfkT7SSVyYnWFLmGF5VMdR2rAm1b4Ap9iB",
  "key28": "2m8inv6CCFgv3gyRcFVjAtPsS2Zaoe3TXaYDNGWPtEPe1y6iN6K7yXWJq8NbBaGWhk3iHipsmPBgvhjaqNQYe69D",
  "key29": "5ATcgvGoJiNhmGsY5hZ5Gx6aPBJpnuz7jx8VdY3StPkcCiTy1AEZy9tSxCXE4DKVYui8RBaaKQ6hEkUwxscUT4Vj",
  "key30": "gQhECcV8Xm8Bcc3Ydqz4MpQvda6FknvLFWMt5yDGMrEtiMWJM54HL9xSA3QdRy78b2GbtNCpzhLufsNmiBMtZ17",
  "key31": "62HN8u5RiBN5QRbEmn55GH2YvoACfPUqbYwumgQnBSFtsdAKrU6Cxs3CRGd8NFHeQ5Tbvs37qToxZk2Ysya4NCcN",
  "key32": "4QbQi7sKBLvjwNp3M3fyazLRvhud7Qsj9RxtuP299Tia9ABiWmZYYE9W9ifYXwU9z1WxkSBvefSS7dnPWmZVthTx",
  "key33": "31npb2SnYVR8U3muWzXtj1UkbY22PvpZcckRtaJHCQ3GL87tNsYNLoZXuCD3ANJVgVXohQJWtDgMptHFE82E5oiz",
  "key34": "5d95QZXaPnfTC5M4APTi1NcCeUJ4GBSFnZQeyWJTy2pgcbfFu3gpMomWRR54yjALVyPAjGNEvLy4nPtpUG4zGeTd",
  "key35": "3G3uGPVnNhFvJBCm1hiTGu83Pj7ESespkzGgKn8yeHu9Wg8ydUcfvhpWUdxQgGYufreDHz9VQZ2qFBSNCyLjEGyS",
  "key36": "5g44MjLutsDSgTG3H2ev8i2iMdg6xnenmBze7QntTzJzQAVLXXPsTc41R6nrcHBb9vcwf2wDBfWhGGLt4brhs7aW",
  "key37": "5SE8anhFDkEA13qGWkwpggeWjiDEbEj4wr2KFTeRJkp2iKSQZshL67iAd7YeCjC21aCpLmrAPZEezhkPc6b7JEgY",
  "key38": "4HkwoeRCfCzZioh7cBmdZci5fh9EgPbthy6vYfH43s1VuJHXKYnmuecHp8AawR1wR4YTZjF8jmwhQBNtoLEPNzRs"
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
