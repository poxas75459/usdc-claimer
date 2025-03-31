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
    "3A6N1ER1pMgEro2Y7gWSWuNQKPU2s5H1a3W4YCYgP8nZyTExCgnH11YCsNhU22DJvus5q7okQdd4pTeG1Yq8Xhek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "URPxpTS9QGqMbP3HS4ARkEjmLsH9Re6ScRaNiN1aW8muDaHTAjUmCmUKWmKUoHaLxYBJuuzbqkhNkBRYNwfP8C4",
  "key1": "3nKZ8U2PAXAbL8rbkq6DUBbSw5pMDfo7v52KGUAKCdhfzCfnqppYM6JmUidJxTM9GB3xezD4uXKNQzES9Rm5kESn",
  "key2": "x3kAy5o4VyafpsijwBceXQ9r1ujXosyDXEDvd9nEPuE9E9dX9GENHt4pHKVoeXsqj8zuTfukFVv2uoH29sv4zMB",
  "key3": "gtobwsnYesxrCmrV4pe8Rgb77i95VPLmfRmaiM4qwq1KW42EMyt5fvVhHS64yg1oz7c4K33wARh1TT1cDdKifoD",
  "key4": "Lf2C2W3UK6fsuHxBPw4DseuJnKJFCTJpCz2UgXYkHRZY9N8REqH3HVXHfHCMRkaEHChdokQKDbK8V6JDzrapkCm",
  "key5": "qicK2VygDrPrFFGAPdJ8YUb73jzBxLc8bjARcChq1XSc3gZZB82XXzuvgZmK1sKZg3UzBNY7oY8vchRQvDrtdH2",
  "key6": "2rDJkXk4DK15ecg7NxLmqirTrcjrWg2Ar8APQ15uX9F7KdPzmrPaHMY2qV41DYZeb28Y55DtgajR13jTAKvFRHfq",
  "key7": "2bv2qwwxEgfH1fZpmEMqW7RTiniZhsiBDtGnbsqxvwR4Y6eo1oY51ebG1fnYx2bMvEytZhnxYVt2gqaYzbwoyxL",
  "key8": "5K3RTRCD4e8pjCmtdRuc7JPTW2ZYmVPvNC8Rbo8o4jj4UaGHeQT9vvFCVLDK7gu1dTzx38mjFE67KNx59JgxK11K",
  "key9": "5EKGaGxqkD3EQZoicwphowdWWeyN45VfUuQZ3DZ97CT7HYCavfYnytCue1XZdqKqrHmUKX1kvd7gHssHdGyBX2Rd",
  "key10": "5rNnmKcHBGbSqHp1RPo5A8Z2LfL6JofBe4DobDXTs1csJPJkd8eE2CvrTcpQv2628ftMKhLMeJdQKmBfgEDS9xty",
  "key11": "rModU1Bt3qB66jBWPQvKdcuyaUAMHrKF2vaGNWbtKYNhAVySz8mqsm9XwLPfnojyv6NBurw6BUigg4mCMmnPKmU",
  "key12": "VB6nXLkZ2cwG82MhCweDCtbXyKujce2joXhUtr4ccrpq5pecUNUw9xzPD2dChqu5RmpakCdTnu3yeWjEpM4Zm3W",
  "key13": "36gNujJ1popxLvcMGuzpyjk831KYZ2eceHRcT4HGDhjnPyYDeties6LLtKF7swtAEHLzAUz6syYdmp6haXmywH5b",
  "key14": "3NLX5Vf5T1pEamciAbisFUpqxTM8bCDZtLRw2egXLKUnLYVFhKd6xFHSp7wRofvWckXrwPQXpiLyzzCzrGVJMxeu",
  "key15": "59gjGwp4F9jXPJ4EgqRwng4qQL9xSEN4y4NJvxtCKMhjMSTyhC497uistDiNJPgDZsS2azBWAfpfMBX2d8jHZEtc",
  "key16": "2YzsHGUdMjhcX8EN731vepUEp7QT6wRkZnWYxKb5mjtgqNKMp78Hm3TMzK4rbRJzAfLxPAkaSceNKeCDd7LQHFmK",
  "key17": "5ENFozY5a8FRdkz8AYa8hHssQki1hm96K2zoFYgqDkVbSzoBcMx4kJ6GhXBv12NXbHhPcoyAqRQyb3nLJbNRPH8U",
  "key18": "21GjJ33ngMETC9TCALqu7fx7SsMb1nFgfcA1A4dcg7bx5tjti23EZnQLf6VoRDR1A3EW7ARraUiFdUj7XUgsaLU7",
  "key19": "2AULSAHeUN9G9Zi6RkiEvYNtcPyEMNuA6UeVkDjuex1vGfCsfYF1s5MaQWLDpsdpzZswyubyuVUh1thZ8MVWvsUc",
  "key20": "WQdyV9bLjgwWVQjGpqeRJ5LdpUeEzP3Zp5QQgQvh6pd7cyvJQBKaPc4umULkgvPzF8S9nMVhTzjLb6Vv7RTDekf",
  "key21": "21N2355Bpax68A3edDYwAC2jYaDesguZPNz3ZE2qVhEhTzmLQrhTNFH4saGqTmWx47Cf2yenYiuS1spCA7vyyErN",
  "key22": "qbFJjNtyGmrDBh2A5GuSCsdwdca3DHRfcm9T5PFLYjPcXYeaYAuu3UrxzTv4n2mk8yLBh3b7SxAifRkccfQmyMK",
  "key23": "BTKVDHnAFm5pSKrmtJ6Xd8Hmg42PViADXnRsq1JzR43UXZBk8gye3j9BkF9ZQRNJookiRsHWB4SRF9CjiaDKfuQ",
  "key24": "2JuXwAKjfxKwcLRvQRWhzr1J5U5HXtLaviGgbSDLToheBouRSLdErYjnTK9GpCNyHhBXDvLWEySPvGhQgusX7bet",
  "key25": "2e84VnuiURgNW5GPwaHXkoyqxGoSiBP3V1iTgCACZVHobvZ9uo4YeHSX9jXMkxr7Ww9bRqBg5Kcit8BuuwQe3P5F",
  "key26": "2k3kEW7dk2CFcH4VL4Gc5gkZZQm97LfkqVQHHNqs9BK71CHCGFCgCQNWzsLwzeK3Zu7Ni5PnAUgVUgaoUKeLEmPf",
  "key27": "3h64r1BtmoncGxJteHy7fcgeDPXeqZ34VTq1AXd5XbuhBBKNk2325s5JiXZvhujnGTdLcgJbuM846LWwWyYTZiW8",
  "key28": "4KvBbeXEacyFUcUNkGs8FXvZDGSf378LUKXtcJo8iVXiqy8GigeUzLEYySrNHSoHyibR1hChzq6dbPiiqTDETduZ",
  "key29": "vrjoYjKXK2q7xfcPhNAXXqNy2mAGJh6Vqnt6MiySvgNh3vMyVxxWx246YL5d3ScSqkG9srHjobgNePax6jwCMmy",
  "key30": "2Kn3SMxFBUgqPr4NM8grX5Sq3m9XB6hovuf3mEuZq2EDRCVCtZnMTYT1m9Eo5pJV7WnydLUYnduzpdrcnvBHQE9K",
  "key31": "QzNpiTHsC3cSNySLcXzwhCKicKgexgUSFDtfyCkMUzAxtwSBhqSwk8ae9TBhzRhZYXNjcGz546PCqPADqR9AXM8",
  "key32": "2nMV5w5MkgADQxJJVh8ToX9bEyKfXP53cjsCM6AEC62xb9xPU2VLmdAQZcHq7mvnPak6mR887qP4HFk2y9dDoXL8",
  "key33": "4sqmw1bY9Fx7WFcAGzmgFgWX7AC7Ay3UPRzAnN1ErVZKGACLDXJCoAAwrNv2fYeSF5jpY8j1Bbef1guREzKQ8jZm",
  "key34": "2zSfYph1QtisFVTWVLL1sh68d9QrRk3nTTRCmNQ7x2ZYqPV4qXGmVMTQV17zszN64FiBR5YwhBtwkjUXRjLM4YNj",
  "key35": "Tnzw4w7R4YJ8A6Xoj8WRoJzHwZBPJv3SN8W5Rdn9fHkEHHvFauQdQkb4GSTN115PvceDtZxn8jc9Jf8dZmvXQGt",
  "key36": "3dhT9Ec6Dje539k9pajsYh3cNFV3uu9EpxwsYNbCXDM7JwHFrKAKrHrH9mBfqqzNBnng6UeizK6GebLG1TdhNUJA",
  "key37": "5rbU2ygpmEkkc8dsEXCEyBVwqNiE4wuE782zhR6jW8RkijWgx8a4ZNiEVoPsKcbW4cg4VY8YwHy99WZnMe8pLoVe",
  "key38": "4HN5wQubEFdJ2ioTebqZWgcYkRT2hzRE1qhNJL7qAkgxd9qFa94DNBsiFCCBtR2KLGMKxkQmziHpSq4JyUuePVwy",
  "key39": "2QKYdzUh2Eg1bkSe54qzQBKd9E1zbAKQRr1hM37wYXF3qpQNRYwCvbfckuykhxHXjyq6D1SgCGsHM5xWSQHWtS8A",
  "key40": "2FexqyQiheU34Za2ftfTKweMZexfDjutzHWqWbNH7JGFRk7Sc2bpKRPB3BzF41ihkFEJ6jyj2TVQRtmu6JNyyJs8",
  "key41": "3b1QuSxgvBKF6yhvqvsQ4FdoSyYJ6tv61t2Q8ncyacXs8zQ8PFAJFTtG22T2P9h8UPaZdCfmPYKJaSioxrTP1mAi",
  "key42": "2crwEPLrybQeVYiPPA1C61BD6WinTiRhCsU1Qw26EvmKg2ZPYxJ6MKwfNENTTvUyhMRMvTvVdkkTzG3rTnzob2cr",
  "key43": "5BEoDKpCrJV9gB9mgom6zFmo74J5K997dwLF3D1PtqpnBw5Fbsa3oMGB1YCRjzNqbMVrBxLchTBAJ8E1sRMNfAz8",
  "key44": "mSEyAtZisDmgj2CsAoPSHY1Ss62tMaLSf4XzJnV7Jcg7JJpBqgRSyMQo6ckZ5C4y4dLnRUb3jzK3FQze8wb4nNS",
  "key45": "N6D3H6ANAGp3ACoVsgzjE7qopjRiCxkgcGAhCByAxxXVnN5VziW3JNVAEcf4mUdsZBXhsDoDLyHqcKmuGC2uJSA",
  "key46": "3RU1xHpCAvzqYaV1zNd1mtVzFtq9smgUCPSJU1Xu94HEBTbjobgnWzw4WoNqcV2i81F2Uxg8E4R5eGmBXEFaj5RJ",
  "key47": "f27M1Wh7Sq3mSEqJZqXvznGPp5R64akaKrTLjeG633mwdx4oiUGrhHezyUnHKsLGh6CPsUzC7hvckTytWzLd41z",
  "key48": "fHGZRVpJbG2admdKFPTVndvFTma1XgaVeuxc7wEiBVWxW7bACSiT6kMMcDH1qVDfLKUmj8bpmDC8oFLGBBqsVua"
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
