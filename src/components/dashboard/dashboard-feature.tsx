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
    "3CiveFRiNSujjyi33s1razkzsssZLvSBUtPBefcuXifVM7YU63QXU71Z396PNSJFtaEcYJf8esU8DSVJAAZNc4sn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62sUDrPnvKKwCNyKqRec7Vj3HjoKhkaXHV375zkZpTpADBq3QLGSQTmLz8AQcD6SHcosZJZ9dv7ktNpgBkr3e52X",
  "key1": "3fTBnL8MQ6rrcQfmeNorEHDajN1au5yVkifGW2m3BBycArB8ie8gE2HTPZqDLa6fQbkvt4cDgLTN61a5rU6JWyjW",
  "key2": "2drra84Vo4pwha5Yn9x1bwXc6uyh82VBaZmEywxdeGY7VRc9Aa1wWt5JjSUs6bg6TMLYX54MS9DZZ71y96SZnuzA",
  "key3": "2HRExu5GckYdHoipXuKcyHJf3c5x3guavh83kkGngyx2RZeJrYxiXLDsgAxrPyNfZzhhShqTCs8aLeWEfmL5YiE8",
  "key4": "23GE7n7mK679MpMnXwubTuZebV4AaRDENQ7nzNPpYFb8W54ghcYmPniVxeuBehMsaWAx7a6tvHLfBisumkRf1HuE",
  "key5": "42RGJMBFTj7PK4suNu52n8azHr792rgwqxxKgjmGUxC98RLH4PFt2k1qDaiQyx2tqqWP6gFuyHM57sKcBQ66m4qv",
  "key6": "5T3VApCvpua4uHujUqKadBbeM5nCKBxUCf5JHRAMoDX51Vy366bF8oiyZ4gCa5EtjsRVbeQ9s8cGUQjRrayeQgK9",
  "key7": "36jk1xZjvfG8gZoN8kq1BAmabHyeH7PXuGGFzy7bizTAqPbF7KRWGEzKdZaoVTnaS84bWkNucP25xYQ7QAK1WrVA",
  "key8": "3B1j334vGamLt6TMeLH1rhiEgPbrRGiHL31Av9FRQDEvzrmTEBk7PjmhSCG11H1KCUGVWE9kbimapZoVSQMBKeTN",
  "key9": "4ZXztFBNBGHHJWDPHQKDkecpDN7esYzwAZpaTcZeHT76vWc8uqwYuA9LNbFGLswKsD7duTc7bJRmfjQUi8D2zYnP",
  "key10": "61cKVRqkPRQuZTS4qaiz2wXnBFDzCbJYyUhu2PZu2L6uhRi5dgNb8PRQsPuHpzLUawGPHqCv5zw9o1zCFRNeErdm",
  "key11": "2JuQzUyVkYUvV6LkR6NEZ1RMzMs7BchLmCWHPPBH7XxyPtbFXyYz6DaDGHvourT39Ljz3h9Q1YCddgMGM2qQUoP9",
  "key12": "3Uygf7xUaHKnMaMMvk3xBnLtzS1pFZ2PdLY32oaHBQKu1ezasUwfGV3ijDQce8hAffveTwi1Symved1zKUxhSKcq",
  "key13": "3RPwgHYg3QvRzXNCacFveQNjrR4HNNbd6oeohM6b9tvLZWfDTvMrm8Q7cyRifD4vyj1PrmUPyS3eG5WCepwFThpF",
  "key14": "5aKaTvtVBorcr6KWgtwzQfR6emZVktdkMPBXQot6c9soEvRRBhF3vFEChprkhJt55Eh297syvbi8s9trWiWN8Dix",
  "key15": "335P3Nbab5qJgec1jwq3VpQntFA8XZpPUNYTgWJCuudbuUCoEwsiufn6PxVt9KV9nzusRtVopDuhxMJVWJ9gxp1r",
  "key16": "2UHMWAuEMmBF3JtQmTzqeZCuj532Ad5PPioUE3WvDLstzKv4tnDyFTcPM99N8FjdKGwdiyjKwLEn7LmaEG5ALuLo",
  "key17": "2aPAnQQqk5QisaAMhiS1jV98iTBDA3HBVdzixLUEswpFwTrVFJAwa2px2s57KYpvHVsuThBVgt6Bi6kYk5uCaZoT",
  "key18": "35VzLurk4Za5b7RkcpFvJvhAXC3UguzQi7yD5p5CaHHJYvN6S2SnLb54yBCytodsV8n5hJdQCSBfHeXng47TD8PM",
  "key19": "5Hdkq5kg6iyJ6u6uAPiwAdagBumPoYfbVojVWEeTMyAY7KDKaoDq39m2RsSMQCZufkEM9WoRBY1gawLY9ZdN8Ndp",
  "key20": "2rv66mM4nPrXn5odf8BpKZ2DCPftsVokApWacFFFqovG5hdqNApCyNBHUGXBnhddDZBpPQ18Ds3XaBuQCtSFeDy5",
  "key21": "38KBjnNc9kLqhtuMeGPbYJMhADsWdXtKcBMyPqK6WUv6joCJbppcz2LAswrqZxJQafsgTPb8x2PKDBzEtCkSMaS7",
  "key22": "2BeXY9K8Pd7LTw3TMAXo6bm33yhxeT2gaKV5JVvsFuifFGJ1xQbxZBHV9cCooxDd4hSWAtYyWdWBbxwiPwifpuEm",
  "key23": "5cHW8ESYZvwKuQXXaGbaGE7Eu9PbJKtUXUWxGHbuwN4H7b4BqDbRbRzAjR8uqcw8i1u97j38AUzFJ7t5vKZy6sBy",
  "key24": "2NouA3vdh2JgzAma7svuSjseyRnsAKhWuvF2TZKehXM277KUoAUr9kPiFszZL7ZaAutusJKfpHD6KmgdUGkYDKPe",
  "key25": "66iE5wNeAE4gXCmFuqp4tDjqVdFVrEpyfKJc6neCpKFNqBxqMejz2bQannx1dMQjshuoCAeFHC5TVaSwT6U4sgS6",
  "key26": "4qm2sNX59cR4drDmoGQpba8toyu4BMTcQRSA5bR3G4poU2hz9gt5qhQ5SSsyjAQVmu75LvgU5UGorTdQFbSJa3Hn",
  "key27": "4d3LuoxW6FkFt6G8MUX4gUpDfPL2bXQCGcu9br22dYaZLjwCE12STmnhcZeiqJCXPzrVciidu7dEwjBYnkdhJQnD",
  "key28": "25SnJ5HgEvFTDR81ryUTDoA9u4Pr8A2DWx3x2kyYyEG7bTUTuJ8qiK2hCYFjMX1HpPabXg1GYXLnowi1dMmnrfb9",
  "key29": "5AUSUb66LPB5c6xkaLSiv6cMrXbS365r7JvzwrfkrALnd6XCgA8LNKtn9d6ktbDshGaEhVQo6q4Wt94TJiD1A32h",
  "key30": "3RLuJQff2RbZtHotz2epkvPxtggh5sWzwPxNd5LDnFTJiErSt42xcDhLV6AFEZPGboKvWmhF7C6zFMHDjZrt28Y8",
  "key31": "2d23zHfAKbpuBCxPcJRjBSkLfhUhuo2gPGJSkb3M6qJWA48rmuAh3iczwqwYSbXfRjvLQb3aWrjjVUHQW2Bypfjr",
  "key32": "5gN8BAXHMuEyUXBpKjpAwfeP9Jgkw3YVZqfS5NnhpcmYfoaqjZQ26QkwFg6jkEVFUnhmcPxEr8qJXeTwzrUSpN24",
  "key33": "UoTRXUYESYtQtS7ts1xiD6q8uFKKQFDiPgd2r26jnLdBX9V1DZRRDqsA2DBRGCSh8K6qyd1jCLAdYe5nDmbmEYu",
  "key34": "2JfDyGoA9UJs2JmmZjnwU2H4XsL36NWWsMfbRtewAjLnBJHaspwrxAyQx94B7wEJJk56aKDcuU2x1hcAJisg7rxo",
  "key35": "2xuDFwLuHMC6BXYGN3r1ti8bX3rMPqssSvGsYkauzcQDkYup6onhP5RgjKP4kNpUBCg4zSLTuuniG2zazRPV9Dvs",
  "key36": "UgEhZ1LyBtwobb3CRTTpuL28DfayG79pe14dUoLZuVT6LDVBgcsrk59PAwyWbbEQqBBrsptehYYuVTvY3vaa6kQ",
  "key37": "4M6qGgQ8SdP2t4n1GyvbcEqA2jYxMAd2Q1httdmn5ipj6HhC9BsQVQTaJJ4wbXt78thH2hnHR4Si4t3hUQaAq6LF",
  "key38": "J5DkAH4zpdjpSwQfy4cj7ToReebc1xSF1NGKZGYiZbwRpzLjek2ggmkifEnwT8ZDip3iqjTy9gLwAe5ctWu4cH9",
  "key39": "4Fmpugof8dziCo6UTEovMHJGXLG6dPdrCobQZtP4g4JHuShdFnqc1BKUxZX6fdu8aZSpArBvetnf9dm4gJtfp84M",
  "key40": "51eU76YKYMBtTviEppLXWNFPNfg1fRwtvGooEV5P1HGHfeUXwK3zQmqDGxVSSyCFHgN8bEoYgwfrTGnvrq3P7JUD",
  "key41": "5dBtdbt4Et1hXm9qDDHdvDT34zYc2vW1aptxQoFawRjsxVrTcqkTSNXjgAWQQyLv89nu3jwis7KjduWLiRNVvXwf",
  "key42": "4ch7fQBDb49z4Hoodio496F5Q48DWgKRBtEaE3mcPMwH6j7X3yB2HGRtawWJHapC6hPLwAr9nyBeyXSiz2CHBq34",
  "key43": "3fRg2CsgeLeJphrMFamriSYSbJ32rc9Y9wNT3Whf7kZXZYL85jxeB6YbY7WKRhg6NaKQNSQwhhanhWBsi6yvu3Xj",
  "key44": "64kcvfBwGQQvym6hAZq69WcpcpugJKe2CZ74YtuaogZWa3EE7atvj6GEC3rvo9XaMr2UVUT4QWo5aQmhEEb59vFN",
  "key45": "3S2CWZTDSkkdH4zQrtyY7U9ho7JuGrt9CW8z9UAEhhs3CySvpDnLYWzCW6iVD5D3XKS41WuZX22M7AGo6STAzKzp",
  "key46": "5wKz3CKJgDU1nPGSUEjxWG27VjfmfaBV9NGWVBQEhZo9uVshR1QzVRM5BKPNDf5sdqQFCPEQCtU19Zoh2fs5Tqsw"
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
