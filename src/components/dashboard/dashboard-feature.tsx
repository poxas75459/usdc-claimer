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
    "2kpzkdBPaNj92gJky94n67rurSdDV7thW3ojkfjxgsrmjMxB5kzq87b9rVCbKBqKQZhQFMhzJ3Jzidw75xDzbihR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GUSof1SmQT8jHV68Tg7BmF8zafe7sZbestrjwjrWhfhPTwThaM4cYRoQkD5mp3MzGh5TvGkkGZ9RbZ8H2N1oG3i",
  "key1": "2CUrMQRumzsGJZjYdRdjXius1TTngkm32EpMHdxEovmKnfpxBqGjg7Uw4KmRfHXi9HjBiHixEpcD9UBxjFtzz573",
  "key2": "3VRnB5A4NHP8B5fSErgpgMymzj9d5iw97YVwA1WMRiXT64Lgk4N1jorHdxhzjtL96Q2wdu4WGw9f7oXvRbWnTzBc",
  "key3": "4AwNq4hkGWkJrivrNutp9EDnp7C78a9gWSaejoGAjwf1ZwgkwyEAUXbSK1XCDiWhPFRk4sJNNCog4Xbxw2SjC6Un",
  "key4": "3f1LHBri38qjgSBtb1Gys72g8gYmQz1LwawuNnHSfbvdeosSfMVGZShaa5DSuqmsjDWYRvhskhin4WA8gXBhrszh",
  "key5": "45uiodnb2kxhskm6pPU8MCcVJtUVForbxCPkRHmyL7nfBkTDzmcQcHYVNYKGoEwS74hGJqa6MCjkw8BDAz45oiXw",
  "key6": "3jM6TmvpmRKpwNhVbp7PkVDCbZ9ZMkRHxwUpEDCa5mbbZ8zjccipzJHDd5Vdwgm56pX5cvQPcPnfJ6Tzr8L3NhCb",
  "key7": "2bHBp858sT6msDuJA9QPBHWwy5fCRAiyvz8EQE8LwjY9KAPiy48jA6RoPH3ZcHZMrZRgMJCBzoQqgT7tyCy6QJhM",
  "key8": "5WtdsVZ5Ybc8cbwXWsUufQYTQyoyW1X8aUNEDuTK9en2osPsQNJpZBJXtvJvjZtUq2at7sRoNpiGr9VqZswexwes",
  "key9": "3y3Ap7zNQo2CVVNScZnag9W4rMeNQMXFGd9VBSVB1zCB65VcDSLBCWk4hSs3vFCrXk7iBvQoXR6AMj9VQH4UUMAA",
  "key10": "2uTN7BKPZU8RFyPX8h3gjBLJvFnqhhLXzJkJKWrrftXcwARKAJfd9ik5P9noUwBeqTrQE5X8X1bS7oUvP3zTGyeV",
  "key11": "48XDfGW5qrn1D6yBNpX9FuTdvedYYAh5aGjnZbe8PKVWTLFSpfpe1kj31go2ZEy7sQReHh4bH9SF5WHfNi217V6y",
  "key12": "4qq56C65AbLC69Vr6a1oXsEGZg4UypjceBu75UdVKALLL1TCco72Cithtfh18N5zf1Z99MN14zv94gKnNFp9in69",
  "key13": "338yEfQujfBmejrYqAgJMVBCShXwjmgRKHbcxKkASRhbm2jceB2VHREa8eSuwoirwy57GZJu6ojvRUBgjkzJHBh8",
  "key14": "5o4W8MwyYNcExMLKkmyKzRUWHywxhtsuhFHL1AU4x7UUCT3ghCw2c9xt9G1AZ1ctAy3hJ23AjpPLvkADF4zZEYUm",
  "key15": "23QQDQpLfhaAb6gEwHURBFXajERaZUJf8urG9PX9MqCKmJ5GxY5kRQGHYnNCzh3XYk7SDGH1qNEDGJ91aNfHcgLr",
  "key16": "4hxr72B81d5JdSKsRatrYbfXLa3FvJzKh8rJndf2nfSMPR1diQLZtYURYBvk8MRayWipnxC2DKkt6YRuSptZ4YfE",
  "key17": "AAybEm2bD3SCgrf2ei3K4BTDpEN63myMvEb2HTpDGJq6iUxKnELzT7CLdgFedMUjts6cvynSCioSaKs3YF4y91x",
  "key18": "K6P3joyWf2bkoxchyocpwckayy4EQwisionFzVamUGtxnuSrKgtiNJNWmSYqu37g1LGFuKoL7zQKczbCtbtjVtr",
  "key19": "eUm8jjS5DwgTHxUcab7vURV4SKVRdX26jo8VbqTUKx9jGxzi6L8g9XuARcXLR3MEvbXBuNKx1dhMHJiFbCzjjEJ",
  "key20": "32ccB5je9zCzzk7FhvjCFJxoUfFZRSnnqC28DgVV1MHnBexVc7R4UfFesMakRm6aHfovqiGoYkaN8F44hcPeoXaW",
  "key21": "icmkXxwAE2uszVKuvGF6y9NbNbAZiS7hKeTYksKUxu19HkijS5Vm58tYdzdoGxe5gCNq7tiKdPPrwXLvbm6MjZR",
  "key22": "2wMppRATFzZNtADkuDhpnL5NamATMP8ijLQ5opfTij7YKvcVEKX3ZaMmdM4v19mgicDfWx6j4B8TEiH4dHG5cHxK",
  "key23": "3Mjbybgrnzz5WSPaDyULAzKQGs7GBqr4PKemMLuiUvJv4uZyG2E4vyKXjkWMPRPr9oq5dHQJn7B9ANc58Vhu5uhF",
  "key24": "5Z6B5nJSbuBp2L8qtJUxJhE5UzJB7XMWxwzLQD6gHfDnbsca3yQxZt3Bm6EMutyzL46ZRfiQMxX3xVeEodVZvcq6",
  "key25": "29aufudyTZqqF2jEHXhfBBUtCiwG1CtsZ5gMKsMoRAdj54dYANTizqqRwbV9kVHGQmLRLBSGDDcmxqDCYMo9c9DU",
  "key26": "4odtw6yNF4GgsCUXCnuAEsT89uNC3K31GWYUqR8BNqsiyx8gCokNgg3UJ2ti8Xg4RPZ8v1CLBCoWoAh18bwfws6J",
  "key27": "53n9RP4FjHAHTvwZF5hZJ9rCKjSkEQ65cw9cuecAXjnSb1YEXrKYoKX6R26Da71KAqtmn2GXBjnsy2RrumpYfE5G",
  "key28": "4UU5oiGXofzp2NLzQ19PTxZ8PV58gV62qEMGm5LYdKRn7T9ZW2WXKBTwbcywTBqL29XviNiMDJ8RCCGHUHjeiGSQ",
  "key29": "2KrhUEb6xJSk2i3K9maMtye7zyEZrXJBZojUme57QLGXkAL9KqAetWcbsQcsWwrTb2tbqdPYihnVJBovR6WZJp1V",
  "key30": "5kUjPJKps21s3YPZdi8d8qA8fvw8R4Xa6AvZLWTPs8Zu12WXo1NYpYW3jibXqqTT3YksZ8GvePBgZohTGoAqHTgA",
  "key31": "3jehHXkpmf5vYFdE1EqD3dWo9PYtzwicdB8bS9RhEuNuTLtuZg4FKCh8MxFUEb9VmrArVzQmFm3agMcdiAGJqcMJ",
  "key32": "5xtuKWhqz7XwuprGovmGNyiSuw7SxGT9znUAcMNAvG5Zoz3EQjjKvyd4i7eauckcqvbRjXyYJkC2i3EDGAeZ7Uu1",
  "key33": "3NRchZcPdbmziSWCQ3KDecP7Av5WVZ8jbXnQ4zFXGojYW9yoesbfAksyDHFQUisDgY6HmD8yuHhBZAfg822LHXEx",
  "key34": "3YHm8KNZnWbYeaZ9qdqmjCYKvu4rCtZgNaKgw7SpEFBMBfLhBkpPtAvFjSaLogvt6juYYWDG2oLVsXYJvNoPe7Bb",
  "key35": "4S5SkqBPCP24H84ERBtWjQHh37dQgLQTirZnbjmWE9cDALHFtADp9VADnDNbecP4P5TiDqTviqViT8Gp6yjupxDD",
  "key36": "3xZrWUKmRfmGay4VP5r2SGbjMKE9QmKX1a2r1vNGoC7Jb7QqD7p8DbF1Sa32GwHu35eWPSrf89HAhZBkcmAodCPz",
  "key37": "673yW8aHfRpULQZomnQqSr3mbCRHpDHyMda8NMHwWpSAK4M3Gu5P8Pz8dHXyLEvSCqPDfYtkBbrnzJhFrerYtCqT",
  "key38": "QJpUD7Kax2jzJuswopHwGs6uspUPkwGMjspt2Cj71pmwXaNuVzj4cMEYV5JQDnZSNR2BNdqJgKW6NcUk9uLCKFu",
  "key39": "XC5wt7DjpcnF84hYALdTUSHnqZVnvNYbCPAPyUGUTf3PvxrJWgNdB3ddgAAGdwLQNhjgcR2iF9cU6xVNCfbYe41",
  "key40": "22BWXwVzVe2dLQjf4fpVKnaNL9qaPTXj28nKGjk6v6XEoTXHfbiUTCKMuNjMWuGBEskiDW1yx5RpaExXNvigvmW6",
  "key41": "mkEMkuwh5B7TtWsbyFFBGfYvoT4DjEoP4GoBVVPGRMEqSVDS3vFgk6vLeJ474qZVytBPTp9wPozQSL7HeEgNs5h",
  "key42": "Wm8tmi5wDsfz8qDsazN2jaBUQfiw73at7Ky2EWvZyq4RGh6VaDWdHFXHAcvEz67FTn5LoX5SdZqLK48jBLmy1D8",
  "key43": "51d2DZeb57qByrsUkDFSDdkchsB9vzYSStDfvgXWeu4XxuHUYrUv6LQGzsRmj39338fcjgRxzFe64tHG2AtiAzz2",
  "key44": "DJxguxHTvKcMuUhi8aTjfBxfuDg1nHD7RANpSNjUwLgihp6cChsCsfn7riuvLkeV7qrVaCGegDGQuaVnxLSxTUR",
  "key45": "4WynMe3ASTY2HgD1W2kLNgoTRcvAi5FVVRMAxq73osNrx9DocCbM8cR941rX2BvKxsU5uoFXow5KnHevnDyiEumr",
  "key46": "4ZwbuJmaBCDhysUp2eNszPBAYBHdu2PhnsvhekoeE1kyzayy7q47238UJfPZewjgpMKvELBdG69DfqSrWFNqk1Qc",
  "key47": "56ZdKwEZkF9GxKqoD1kUuJJYCXe3NHPBN87Pb9hh7qNFZQSyeRYqDdNcHi1KHzFcceKGoDmQkdhrEqxk2LC6j5BC",
  "key48": "3fdjHpzKknmNtpQoWtLwM8KXjUNBo29PssJRM5QdW7CFG92dSrWkEvK1awPfYwYEW4d9P1ifx4nvSEu2yhb5kvFA"
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
