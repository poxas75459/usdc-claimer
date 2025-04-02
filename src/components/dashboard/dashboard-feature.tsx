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
    "5RSNY5rN3QQLmExyX61YJUG7fBk4BqFK6jJUFbMj6DkJdq92oijVo2iZTmzW2TaFuL1ySni3oudwpr1sLqBKkWkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38b78nQd6rFsmH96gYnZnBofGehN17cCTaKQwbNyPgQkm4VG1Q4XWm1AcAfZv4eu3rmKGtvaAjkti2ZSNKQirxN4",
  "key1": "1AP28odYk6NcQjZnZPDAcQAj4wamkjnQEBt1FaCZgPScs6jR6gbfcJNCszTNfemSF3kG8sGBQPbuniG295Fiook",
  "key2": "3sHvC73xKBqqYC24JWcpDQK3c9V7WEmAeKf6F6a6xqPhvQUzuWkFcYz7sfLnnPWzD2Tbi4dKHF5UziBLQfaYYS2z",
  "key3": "61d3DQdkCmWh8S9hx8JczXQJcQhhZ5DgHzNfm15dUTK6ZX8i6USHcvnKqq8Yr9P6YSHrDXzUCU2nogeoeJwmsFit",
  "key4": "4PcYGMN4VQaDfTVPjhzzpVZw6EXwbXiyYeXm5aSNg4YvWveV8o2CF3585dko2sTsRAvJRPAWTiksYBFTXRtG7usz",
  "key5": "2ewcWyriNkFPE8RzoFHV54DDSEThRVSJp9qxeYPrJFLRmsSMd2hTfrgDbQC1SWNHnLw4isx6DuKRnveLhyaZK9oh",
  "key6": "vjeyw8dLMa68PWzaBnnJBMecxwHAJHNgRJzEb9CTW5eLX73eBMcnhKnYhfjLcg3jRjEZvtVXGrC16eR9M2JG1JB",
  "key7": "H979GC2HZQoUHwdi2NSCRdfKBq9fwzChcxEnNQ8bZxSzRH9qtyQqcDo67oFGBbPK3NTKDFUFoioN26UZDRRYD4p",
  "key8": "4WADFBYF4kN63ahbRdoTD5aACwdiaoVsZALiXRjospAa95GjbNzzM4482tEepscX9392bofC31PNAnWm67BtV72F",
  "key9": "2JABNUVrdnJbrF5NntocdiJ67o5eSo5KDGdPMMZZvWuwowgkYjLNBYGtUgXZHNwGWXrESXDWeAuiQoZys7YaiPgi",
  "key10": "7MAgcpzEbKGiUDkse6LsbB8UHxaGqHWmme9FHnxAz1WgMtmRTfrfZVE2H7M3T8b8CSSqLae6KxEePYjWu7RzTwQ",
  "key11": "kCcGWxJmj6bnJQP7cHZ1QYywTXF58XikuQ92GTW7KE3HxaKQGF491SubmN2joTZo3zyFyrdPm22M7C4oeZcuRjA",
  "key12": "44NpSmfvfWQ9e5AvxjxcgkzFXhihh5JBMmL9zgfmrYjW7wrJ7PApRHjCH1UVRU2CgqhernR3HZym59ghkD769LeX",
  "key13": "5KdT5rQ9p9nSvDG1owdjzn3V5X8LqvC7M7GoMNYmd6CDFzxYz68ug9Qe1ZusiZu39CNuSqrNaUYuRaMx3ThH8i5P",
  "key14": "5suvGTbdipqKWQ7EkLXj5CdD2KvTF2sCePCR4ebLnXHXPx9iWpNFTyd6ScffcmfFUkaLMdsWUtEqA9XHAXYdP48w",
  "key15": "5ReFp7qDhjZ534roGVn4htJz8pu1yvc23xgh4kxb3QBtjUGtk2J1HuxxcoG1QT3cAw2MqA8RtoVumSZDGVfB2dXA",
  "key16": "3W215mZEiWX7MNsxyEhNGey8oZHZP3jYnQ1HjU3rsJwsAokRRpm3rbezBEWvU93xdZaG1EbvphjgYbAUNY2tKPB9",
  "key17": "2ZSrbbeXCjg21vVcVMHpL64ebYiX9tSzSwvnZCbApgshNBC8WS3TqktgtRENNi6do7h6rQhw7QF1EeJ2QiDYJram",
  "key18": "56dgZF5Eydp4SaKe4GaFiMWGrY5qsv1GnKi33wb6NG6c1wdPessKSA3DsnaTjKcTdNoFcxDTnjYpYWMYt5n3YK9W",
  "key19": "ttuBQGNGSoo4pT8tjtVC4pCkQD5Q4jC3WnyFaETRv2Y6x3HT8fFu1SvSaM8hEtc1z2cDHRjqkXkoWU3sKbPuj6Y",
  "key20": "3tVy7cxZBpcoSYn4PD371BLGvdaGwFyvEwdeKkqjjSjCTj7LJTbhiUmdAeKuhbcSCM2AZ1wbN8d3U1MWi4ZUeTMF",
  "key21": "5yQE2sD2D3oDuiZnAFCt2c84SjPa7JJuNAXmuaVVbuzMD5reT7uZ2ubt6xKucQ7oojsmUapEhCMhSCjZnAdw2ow9",
  "key22": "3iGGW6jLCrBijRg74QGRZiEZzwE2K2CsJrXhXkBvpvUpKfcq8LsDatJUgtp35E8gydto2gwTxW9rwdfoVNLLV3oC",
  "key23": "27842tEnHJXza93ZbEYk2uZgFuSQe8eLmMxQazPUQyxfeHE3GJ5zTw3zSk34iK996e27ETcKuiPewojbrmw4uSTF",
  "key24": "3ijAknnZpF7f2Le4eKLzxdspQoaDhrM8wENgwnukPw9xcuW8YNyr3wUUhDsaqetzFWJGWoZxUwL4hzFomBsNoYsT",
  "key25": "4UtMM7shr9kqhQqbUswkJwMZJEdPeirqfQfMq8N7FxndBXbkq2ie49vA5eAv1AYbKmbsaMcR6ycgDpi2FC9Hatrj",
  "key26": "4hkXjXH9rsrqHv6tEK8F83LmC6tHrNcsyQ8WqYDhiqsCYbo7yYyF3tXsY1W6Zv34uKmqAYLqYtRU8hSUKG7PniDS",
  "key27": "3vZJES7UqP414sKUcKrnk1mpyk2yKuUfNbBuuNNCnGo2bZVyuUcaM8snsgm5KYcojJYCa8UXAFnYE7sJrkfcmt6L",
  "key28": "SmfifPhxsLyUBXuyWfGhvFZqgSRtFAk15RTqqyDgBYQk4QGUGWLNhnpMxZhGitHJrHrgVU2gbk4FBdE9CveoY7y",
  "key29": "N5EahsGuRrrM9KUzg6GvU8gLWnqZBZggi6oHSjRwvgiRwVDMaYbkSFjawoag8X95m6Ss2NTAQvhoJ411th4dD7U",
  "key30": "4QhRuEm2vefMEmW2tdUn1oSoiAZYwn3akNLf2y81AXj1xdvQjJ8esxCH9YyiQRecMwNEU63wEkkzgefDCRUv3KLa",
  "key31": "eRaZYSToFHUQ23xNfy826KENDoXiSLwBFepF2zHX9expx7FGhVTRpciGGsk9FLHrTeZW1S3spYMgNavFhpGQBNr",
  "key32": "cQxLMSbAL67qNoFZbbpPMijWUZ9CFcb7BUCU4PWcgcEU7ALty1YbiNzJr6LLkbCXMn8CNtwFWwjBR8tcFJLEq2z",
  "key33": "3fsYxCQNPnUR9aTzb9CafAFZR1jGbrEb49rEqUZTd3i4c7c4w3PhbTS3jY8cAeyig7kD3uRwyHsNkuaqsHg3Uy2k",
  "key34": "2JvQD97H2MaBQENe6Hq9YrXiuUiqtXn54LPtREbjvDFwywQmSsZB24rZZ67xspa7EsBPPnAZqLKUetqXx69CucUy",
  "key35": "5pr7NGxADP5DR6ErM7FpPyBEBwqbvLzi5k6t1gfgGzRyCqeJwTKPrUwTw414kFx9G7HR2w2qn5cNhc5AxXdENUNP",
  "key36": "44q65w9pUWjnidGAe3sgNA122WS3YS66bThfhGfmUww6LcZUm4HHexPMVmca4hEXmD5SSNUxoNjpmxzvkUdjpRUM",
  "key37": "33XDnW7PwWQqYKFsBCdPemqmaU9EER73eCq32Jy57H6x8P2wVgJT4uSbiG9gGcti1JHYFFYoVszuwxAsNr1UvSi6"
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
