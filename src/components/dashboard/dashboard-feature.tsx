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
    "3pVo9KZ2eSwroSi63Knzddo11h6Wzg3MUovD5HwVFA81YS5AwH8kWAZFjzxvNmX9z2B1YUoKpxrTDm12AxnPfLae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35NL4rQs32LoSAtxN97Hw54y3VywwSZTyHwRXSh3KntVepCGkEm6qsVyfWrHcWHoMBBiyWvXVuofq3iktURkYrVW",
  "key1": "5qvHqyyEFNa1Gf7kjy835Z7rNQtd4WWj4AmCD6ngJQfYY4pBSGXHKjCnkBCAgPKyrN6SwTFs8NSAfmLfZfPwJoPz",
  "key2": "3Wi3mPCumwBeLC1GpGQad4uaRVi989E3ddXwi8Lw7kGmJLdDzXzygd48txwU8XZNq1SDo9a9UXn3hESpBtNKXrhb",
  "key3": "52MjH3xzBvQ3fau3gnfMSeKC7BWPPy5JXa8jyoBxW1e5dd2WqyuTgjogviPjE7yxR47RuMBbScTo4eQ228U5SokJ",
  "key4": "4hFmtypA4U5uVXFGANnF1X4uSryfPCZSiuNZDeA5bZUuDwGap7Sgw5KW1JSyLR2xNHxHcTVd4HdHZPZqZcYybY9E",
  "key5": "4xpWcxGqF3vubo2p37ThEMJbRCJqTwqiezSh3Ca3Q7pkrxwtCwCce8UDBZnYwEY1Z44kf1iE7H32LQcz4CwUSCgA",
  "key6": "zzEFZWf3rEHjFi5rXarxiqRYmcXqjUm5oY522SEmGviiuWwcz4RQ6aWn5nCYzBTCFrABVGGwKaeTKcbZAKSZyh8",
  "key7": "2zpWzJwpD5EuJdkDXEZaG1sekaFNHFhdjmfn3NkNEGkvt8b7FMXo4GD3v97yksyAyTm3ijrFo8xKUHFy7QCytHXn",
  "key8": "4urThWwW6RXpHyQGrwiKqoG5XQepugXkSxH9vpm45Ywkrs1idvzu8PDCMba2bCkmAYFJAjsXKWeJGnc4TvRuTE9",
  "key9": "5UbEWetqxR7tMFoMMKhZkTGjYmjxxmRwS7LJYsF8Nxgoasi5b9EZw7Kd5wGiqMzFSPsriy58CDQP5okx6jEcXTBV",
  "key10": "5epQErovX4rYFMWZ32XztNUat22FtQnJNuG3wgqCa99xeUJDmw4wgkVu5ETmsmnhcWunfdaAqLsr3rwj5zKKgXih",
  "key11": "4hJbwzTcbWQ7SYxowwHZqqca6XSPmBYHrcDsqYrSunahvwDfLLiBr5RQEyQfNhxoZbPUiojg6n1ZKJApwewyRCLd",
  "key12": "SEyNt5fJuBbf6CPUeCAGhW1p4qEip65X2j8av2iV4uH3mRXZsS1QnkKeuMEydUKa5D14j1oLULmjEXLFzaCpAmg",
  "key13": "3wgitYqMm4SZGoGZosTYm33Tse3L7BYFwKjsyn688D9tBKk9DLWf7JfEDtJD8jM2c6WnqZ9bvPu8YamLHSjW6Z4k",
  "key14": "3TvevNFHZq8LSWsrH9eUtu1pY28ZBwfbwRVGsY5YbUrWTvVqkxjYJNACkHUtYzQDiqgHQdafuz9AP2pSnYQPuVPL",
  "key15": "xinhUkvhjYYNY6Z6iNmp4YaKjNxGA7yNaaz5riZD5BzP7WpnFvfKowniHRH4heJiPUSp6rhJRarkBPeJBxUz8qi",
  "key16": "3GqurAK2cGPPdo9DuYuss4YN2KjA8zeHotjAQLJoDFphM9Em536SDg53zeMHzfzgWiEyJS3b4YgiE2r9QkHR89Ng",
  "key17": "3CdbiNeGEvr8cuzQYTb4GfDYSA3xyarMygtpGgzbcKN3YghaXMKyVJCgXLm1Hd9XsrksLDyQVtekGFAHA8LMAgAQ",
  "key18": "2tNGKfwJCUhGUCDQ9tB2WSgadkjtEwsEosGDUakJ5RkKU8S9vgi1YuixG6kCKYvQ4ojfMwxfre6Ku3HCre4sfKh4",
  "key19": "3o1WxxVvG9uWpnUBEBMUuyPejeKZaR77yPGkxGP8bbQow4Xqd3hR2nqckViLrh8DCqKN4G9gpDr5or5mvgaaa2rx",
  "key20": "4WSDsP8yNgn1AcNg4cCZ7SxDEiYemkcso77Z5Tzt3F5Gy6sTAtozSgte5QQCjknuTk9n8i6E1ycpYgSdEtLZc4Es",
  "key21": "2anAh6uwQYRWaK5vdJSJKSzha7QtkEcPbVftpDsm5XM3SWYbABcmhy9KW3u6Znbd4sBkoJTa7C9GSRJ6QY7p1S13",
  "key22": "5o5HDPFBiqddgDwQktEpvSnCGFeS6r4B53HwRNmTyzPbEF3oWhb489BkBu4t3mEPSoeHmafwzVnBPrGFYDgytT4Q",
  "key23": "5n5Rbq7mYvG8hUMsRWAsLr5RA3ZCPocJiomgh449tyjycsVovRCNtVgVpG6MRkwMdwdoZRpjSuuxxQezoaTRrDZR",
  "key24": "5xNHH7ZL7e3jY93QMLe2B1Ed8kbN4GokmBhYqZKRS8aoUfjfxf6QMaKLMFdSSXLwapCTDQXEVpKgtLMxAPHSWmAK",
  "key25": "41fjrWAXK3EYb3q2Vd2wZUE9yqJf5WfqGaek5t6JxR11SPFwQs82yjcwFoMgPkWpUwevAe2CLrX7oyQq5NxDr9Kf",
  "key26": "2XXj3iSChGyZpdxtUDhRAbjm8cDvENLUgyiyuhRJ5YyDYwrYhoJj1jon7UG5rJqchakBYYUvLX2F2SZuZ6pz4FLi",
  "key27": "5sxrxmjsyBVkL13oJBNtNn7gKXCSvS8ExPP8kmRvYNvJWBzZocFrSo8qeq4F7M6wYcxUtGSxmRoxmFi5CANBGotv",
  "key28": "4FoK56H1ujBmXwzPBvrg66DGTjbcJUQBEo2JF8FqXrrkfCiHCqKo1v2qpDxrfbqr3bzchT8rM4SbbXSweSenU1tG",
  "key29": "3uHQucQqvj3WCStrDZVKTLmyQX3iazmeNCfZJ5pKSu66NS32XumvtR6EWX2Dqo9jar8LxbtiFuTNNaYc9BAgpz9u",
  "key30": "oxHF1wRJXqFqjyBqdz8eLbjDRAthH7VejmmFttkN2aNFuJeJMstLTgGYsxMf1WrRhqo669w5jTCqMs3YHHyjdk6",
  "key31": "3EXk3YkogjVNMcMpgQferWRwSgEU6kYk8jZxCAu8WWEu5QQGPUKwcH9ejuF5yRDTW59jAnUnrj89thW33LoiDVhL",
  "key32": "3Ykom8sqpPt7mCHyW96zcA8DnxoW9YfnLixjPC23zn1LGPJDiCwnKWn6B7cfQPcAvZdm7bh3ww2gmR2bu95hoSB4",
  "key33": "3k158agsSY2pcPYoHEUfqZBDkJqa3aSd8BbvmmmyLahWNsDnvDCnvGXh2hUPKuP6sN4MbKSYDhA1z69NLjEcqQ4L",
  "key34": "hMcyTr42moMsLGjTgEkZaX7D92QL1tbmPGYH83C9N2prrQwagFz1oLPez9iHNMMF3JWPomv4dmEngfbB9e9Jv1r",
  "key35": "5RbUYR7CszJtj7Eo4NySf4fMjyNrHewbtMDXQZ7yMNbY6NJwQUzBYr79Aq9N4B5FnhnrDo9PWNAjm456JnVGo8Q5",
  "key36": "3Ye9hT3Ru1j8HS12vDPLfaGJjFcE87Udq6y7ZTGLZMe5wXCUwdbTASSwi1nLpuWBjNH3zMCwnWLbmMeF5wsyW3ja",
  "key37": "3nxg2wfW7cB33CgTnTSGt6wupgJYfFEnQenpZdMgk6GcHbEsNYwJmeNbZF51KZQXBmoRt6zxEPiqwAFaJsN9GD3E",
  "key38": "3yinE3Ys4bvsqwHedJa58Ec2gqSB5zTgPSzvrd4ABVM9QNr2fwBvyn2ok8ZtXZJL4gKon6JZuvvAwi1MB6GZhaMd",
  "key39": "5sPyVDmKyzAgdSAsU3pxRiWaxSAUfQMRoYGmfn13enuCB17v24pSTfeX1fX5cnhs6U9Q4sXkdASWnGVFCJBBtTdh",
  "key40": "3kwkMJEBw4A5QrAnjmMPRYfkAMMG8aPrQt5oE4AyHmANghLLaeJy4aUSv9tEifgVpLcaN9DEv7CzVzQN3KQcDsA8",
  "key41": "3TQy24UbV8kHEyCgphRtB6oRREcKDX3NLkk2X5SSkCzh6VwY8D82eUUuiFGNwJzrH7L5hgbKeGGBdzH6ykYY3ooF",
  "key42": "2zKkfPoKK8Ccr1VN7jM2nuJr8vc3V9T4TQeiQcboz1fGJuJ8T49G7scs6kUjhJGU3b4KpA2kpgTs59wqGbXB1dhu",
  "key43": "Hsd3PznY9P52iVbQiZsyfDKbB7Heg1xier5skpVLPFPZeXZN65T6TD5JioZWLUievm7hNJmLrpJCiJUmAvwrxVw",
  "key44": "5T2pnDFSJCLskkf7CSo9SYFLwuSeXAJgq7ENoQPrWtdgd3CUsK6bkgv7KUdFpd5qVhytLZrh8LP4aWox5S8gop2y"
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
