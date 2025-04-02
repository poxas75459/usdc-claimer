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
    "2x46gFYfuagpjSfiEMaujLfNrx1XJuMWYL2swoeu2B7iEwnxJ1WuJAHqh1gevsGJ2sp6roLbBn6uxPwy79HzznfV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AiMGj87G2w4Q6cismu5TBGcopmgD8V8iKkKjo66b2o7Lmtssov6s2pt5RoEwnyGjXjMfqWpgtpfxnQyi1Xr5wF6",
  "key1": "4qTuckkV38BdYJUYVtDitzZW4XKXpPncypP9oN37iAvts5z3vXWbKPzFh6nC8BjXnj3cMhD8M5igfybJVFrbaQGG",
  "key2": "JyQnCX8GfeYBMZty4hx1j3R9Qgy99hywMe7pnJZ33dyUrZtaWHyKyomyANURtaFVcd2xS6YDVqo8e4Sepv4rPn9",
  "key3": "5kLt3SJZTNEA4LDPRcDBQr36KKyAFMNKhgUfLGQop8TVcAbMsF6RVwteS2UH9oirrBghKXaR2qcnjVekkswdPdb6",
  "key4": "557dzgb6JT13S2oFbA6R3xb2zxiSyuyyRhmoykW6fVN9RMNxJRySCKh2uNgYwkH6efh6oCfyd1NykVrfqp37ZaGV",
  "key5": "3ngjP5oT1mvD3ExhcDhJDVurtm3AXEracQiyhhy11ELdk18vRYAuHAcTZ9LtukiwmUquMRWkpeWafAXZkVJzFwfU",
  "key6": "3XSGq3HvzaTzj3W6nfHSQYQXHsRvBD6tse9dfbdizGNVyJp1FzhvQqeaLiu3qrFVVMeUHoRZiqwavnbkBGpJRR6x",
  "key7": "2exWP1iY2bVeaFiX6DiwxweFHad8wA8jV7526XdSWbPzCs3XV8jDvsMdkFwm6mRkUR3eyTMpqaL4CfFvk8HL1HoY",
  "key8": "2RbAPaoLNh7AWSQWmwMiGphLPR19hDrjjeAJPQRHE7Z7Gxw6gLRGnFoKB2vNh32ykDmueiX9rkeeJ9AjhtwLUDmP",
  "key9": "5KzBwq88shyCmBwakPVgb52nobeA2A8UZ1xFW18XUaAS3zAQnsXgYe6U2WJiCxfEopNjftVqHax9p1JHMMRNbKdo",
  "key10": "3fcce7sxBL97Y3whS5Q5SMH8udrMi1dSQtxBd65UDZRKaywm24tWELbMuNg9DmbbU6KR1dYC3uYbNxbfG8edc5aJ",
  "key11": "5CyMonNYryahJgKKEScDuykkuUYYRazBGF81QTJ1YDikRfgq7CR3kbPAZqHNEsdisMLTGj99EqphFX1stuiaDiyP",
  "key12": "UYPhK9xisauRHJf1KcF2NJTFTmZAZKX6uz9yNdgvp4c1ehAzPmhCvuBz4W68ycGaXWMQfzSJQtyjWBgj4AuD48c",
  "key13": "4j9qtZSmiJNp1LuRkbRfmNXoSaw4egdsZAcEZec7VwvHvAn7YgG9Vb8M3AmtrWq9dSVvFYEchgvtBf6rbXHucJHq",
  "key14": "5sG86nGkDFKm9Xt68A5mKZN2wvyJvGVXHzanNyTEk18BbMLbYVwSEGWNMPfiyMB6XZns9TvdHBvF5kZHi7UzqRgD",
  "key15": "2CPtE56w6kbXxvfTRPLwc7wV61LHddQUykAEeycLqVXRNWPB1cHeR15ZdsFo2WUFM52Sju3RLqqjYBu8H5mJdRuj",
  "key16": "p6XopZsokKTATuWg3AJA8F8fHHVzSj3VdAsgTEFwSvfHvFebUdazDCtc7JMXGGNtudX35Fa4XZ2HKsEDuoAY5Lt",
  "key17": "5YDbXdtmYD7yM5hKGegaEhG4Kv6LwLE84kqyDis75BZtEAs6UMgKmeaCR9ns17RhH8URgjL6g5TA1tjogih2WvgQ",
  "key18": "2MnNZMMGzsJTChbRMKiw7Y6xgN5Liik4gfqRFGyt7vvc7jnKzxJPvJ15PwE7WY5SQPtb1MR6nyitocDRgmK2Ybyn",
  "key19": "EAFzWAmjY8BacjKPuu5aat7U1gKoBxrgGR1wswNQ2Sp9t8CTffJT7BHsgUucXmGZuSaPRTyNqJmpHq6isic8nnj",
  "key20": "2STPX2FuELWtF7UKNrChnM2nkJmQSQVZ9qxzeW4cxFE8yHhjVPcSMCuGG3ddBWRVzw4VLtsnM1N8tPUEmrHazW6b",
  "key21": "3J7ELkxZcVREYttwg2FMWYwb7bhhbugzZbnwa2JB78KocQJy68N4fbRkLgKREpp9shVYq74BABpqWQEmCwgAFcUL",
  "key22": "54So6Btcj5KYFbu4MvPp8istoCrMXQh4svAwbGmZv3fnbuxr7y7VmRZtkT8dx33BxgzoC4ATA9rGaFBvF53FZ14c",
  "key23": "5YpCaWYz4fwSYb78ugdYDXLZALztbdQibdgpiY6kxZ8ZacN2HUYvajayYeAe3RKYuun8GK5NzKmGHMbDV8Bhn4JS",
  "key24": "5reixDpgj7tQebm5Pg3cr25FniyHpe9vZYfQYfzxW2j3oVbWeFmbJXbmTYkRM1u5Krkrwvug2BmvEwuRoyfEm6YP",
  "key25": "YAar8dTCpRdWgvD6QPmhAMQANHTpeH35xtqAUJpaWsJTj69ebbuMzckgLhqCd6RtGhmU9pHgABDBVmwMq3ZAy37",
  "key26": "5nBKoWc2Kx1AfHCkiZu593ELDepawQX5ZNfGZJqjduoTUdNFNzfRgyJ1772jNZVtQjtmaEhVgR7QwenBJ3pWqM4f",
  "key27": "eBchkKDYbvEcYCSEjoQ8LZzNeyngdsc2adMe6iJSgKY6KQ2rCuhsmpRWLM1Y8jniD9U78aFvrjEyPEss9GR3SfN",
  "key28": "bbBQnP5QzpD3Kd1koqeeRcZUJ9T38oCYEbTo1M3GdmUSvikhAy6y5RUgWBjr5zBr67PVx3Ho8KLwSQrJYVz7cYr",
  "key29": "4tcaC2M8nX7WifQu3QUtWhKgUawdvCCyJwpKFYyHjh8tipY6VU4CW65isqCa6i55rf12NShqMWspb8zKjpsigpSG",
  "key30": "5vMZ1HBf4R3v5J6Hw6e7AYeiSSBtiWBmgpRLiQRxHxjsHoXRAdQzLAU9TKEWmHjRNpQhK9WLgzie9TdkXu8BYZAb",
  "key31": "4VBauedWxVXaBk36ccoSqifadAFXev388Hun68kxeQUKQX3XC33EadjdWVXrREv7cgcR5uPvCZySvNxxxcUTBr91",
  "key32": "2BywbAqkk4MiAQUF75M2oEDWJ2UyL2re6msNTTVvTPsyf9KXSvDmiFSXZhXMafuEG8uSuqzJUmJgiSgWjBd6HXuh",
  "key33": "5SvdUj9V2Vqn3cpYEGQxxJov5sRpR1g7xiCdGBCQhVZTSRE3H8TAHE1tGiLFaAVxmm3hRNi8GME9JKpAkFAQ1ZUg",
  "key34": "3bMVrZgkNvrk9Sz41YLrpYBZkLBWoedPQrhTjQTiUgJxqqtycFMwH8MM3amtDKjZ5zogm9udtbLRD25TzDwf1g8C",
  "key35": "3uicykzwga4UP5UruQgirGpP71AKGM3ej7SV8k6paAbQEUKB1XzriUfVdfgMf1ZAfN6kTPJz5J9onoRmKjzWawDL",
  "key36": "4JmG9xUJfrEFZRJevcWLKpsspae1YdT3qGr3o3aewJsZBUJsDkJDa1E8WsFDPbd9SHBYGcUPZo53nRCteQjL4sdr",
  "key37": "5nknj6yQWq1ERFqEALgi2B2EazrZbXrZdsYvUpn6FR6ZkUBqG2HvLZMcWjRKFPJYLdJjW67NLU8chEcNfbbCVUtV",
  "key38": "bneLYdVaBtq7pAMZCu4gTFrzyakWMUK8h6Pm9rMX9iVbjTV9LawwzYzNJ1H6cgsPYBZRVjr4QcXy5aBfSferDpR",
  "key39": "javodLzkrvZm9ms8387vfU7CNnAutj2Xsq1bbaoKFcEtnq6oaybmFoH2SCzc5KsrM812ba2UoGVP7W9k9FnrCWq",
  "key40": "52G9QA4XDHpVrKBzGFZeTF6AQTPTSzewvmxGvydubrmEiZGuugLFfrhTyp11EM5rnYP63czJhXLwSXuV2acMoYrm",
  "key41": "GwJYMnqU8sCr8hfJFYxfNPc98xpBpZpQJyFnb18iZL5XUhJML5zcG8KbUCdbruk8x5cKBUrxiVniZL96LrEY4uo",
  "key42": "5TpVgWWEE3FW2gmhTMWBiF1cbnz2obs4UnhBUo2HYAprsZ9WuYafWVELB3EPchYsL475LHx1gfWUeW87k2coNDAi"
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
