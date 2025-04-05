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
    "4rFhpohBdzRKi3wixQNmoKJ3LLbFZ7S2CzwGDY1kPy4KQEanE4ua9FhkLfhYikkJ8hmoDqQ18Mp4corqQboMQ9tE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v9mUicP8udvqdQBjaLHLmYcfUo7RHbT6vWtwngEv3VCfQie7zM2cuYohVz7Wyur6tSFJrFbSDu2jg2P2pfAbL4S",
  "key1": "4UWVf4aq5EstGypy6V7bs3KJ9rLgaY87U19xjv8e3o2NULaNhvoxBgWa4uhnggPQSbxnwhyUvE3Dj8FHkACnAvfs",
  "key2": "vq91Lxfj7LwAoJ1T2psRkM8J2cf1uEMmAQSXQ9mxDNUkCyR7sQ9f12ZzEeapLpZUaAcyAZBmDtWQEZEB2P2KZ6b",
  "key3": "5GkpyhdsY6UzaPAy8hq2xt6jPaLpQEoUKMjYkmNKbozbQ6eJ4iv7MHiH167MAdagWH28tYNzYFLp2V2Gt57vv4ag",
  "key4": "5Vc3rx9dCQjbvHpYQ4ScxpJg8PaC1RxZP4vpugYB2oyUraywfVafW7tgPDkJzYzQNsCXm2ZFHWiMWs97hCV1VPZk",
  "key5": "2N8mWc5RJcQtES2k49fXkVrk8QDxz27CCb6iSuNVZ4MqokWen9BfTKZ6QMaq6yS41QMczRhFQuXVPnMvzXHp7KJb",
  "key6": "9XnZrRsiBkEy5i72iHYmsTHCXHbZVDpBSHmKNvsegqLWdcMFfVnshvhFH5ryzvx59gqmqhWWT1BqBCdvLMNNxrx",
  "key7": "boAHM7n2GKTfzXX35Wom1LJq61NphDL2q2LTGjhBc5zEUWjeVXYfLrLWESVTfsXgnfJNbn5LUF5HY9KTUp9b3Mg",
  "key8": "3AfD3MHpQLXhR3ixpUxdFn7goZugHEDNS9NqMJW69DwTX5WLpDybv5ek3hd8cz18o6pZgS5ooFbJJmoubSTSoEj2",
  "key9": "4iGHg7ZwGC8qSH1LhYjcns88pYkqwE6zznu3NrLZtNQwdsmnX4dcwFVbSMMciF4eubWj73pTKGqw897JMu14JLoF",
  "key10": "4uEPy71tU7M38U3Roo2JBbvcQBG3NACj9v3ThekBKnmKRvCz6hgzJKZnEHtMuM2moM2geKmEo8WSPvFRKSRBmK1N",
  "key11": "gWuuujW14yJRaq7QPKLpgoR4EnQwpemAaBCCFRV1iyjgHPrHuYiCNdvsHQS134cgdUQsZ11PGh3zVmc88GAGtBM",
  "key12": "23yvjTqNghirTe6bk7GkuSLwh6RmY6jVQ5ynMvwhnt85ULkGZYtws8U4EMz363hgi8z3iHa1xvSjYFqxNAK3939u",
  "key13": "5YPvKc9ntHfmNikVxX5ZmZoL3S9LBMdPKqGQ3iKUy9BnbWzgdM3s9Dv2Q4Ci3nFFCiXVJP6Y76og7z7HTfxtFDvX",
  "key14": "jJaHAmz3wi14raTR3tiS72kT7aMdU3oq6nz6QYnKLJZx7S61XXG6pmvTnL2iGDbd52HbQPwa6RgmnsrUoFbSphS",
  "key15": "372D7zrLmCqo3hQuUJgabeoN6b8HTBpEGf1qSBJePorHMACUG8t7hPHEjNFi4ubkGSPST44Epvz23i1ownLkqGnb",
  "key16": "4LwQF3BZGFAAwtmYchP1frZya4GL4FFwvwsiK19mguroQBtyS6BW6hjRoDJhLU5h6eS4wsFT4QHhghaXx66TM7n5",
  "key17": "4rm5LmmjEPHbRRefHC92BPJ7WFcscVAr3a5KXd6mzLuyt8TPEPU3YGyDQPkeAd6XJmQuJ5TfnZc3CsqSUCbr25yJ",
  "key18": "52AZUnYJCMd6UpQGFv1TZMHLf1Aw3oFDzjiAFN71NF2BRNTj1xPUDcGanUhLCRVweUQs8WKN6L9wy4CdmtUJJtuy",
  "key19": "3Qh1qyqgqXGMAqPQFVnsWVCMeTBPBeLu3tA3eUiaoDNP2T6a5WWnPhZrrW2BHG5Gk4JV3JM5dDj79VYTsukHDuip",
  "key20": "4SioibA7ygCJZMCivTmoHWDR1brFkdmii6CSrfebnkoFQJrqcGUoCSTd8frTDPTe4HnFfL8VvVnheUQ4xqUMnpJN",
  "key21": "2ohjMpR1XTdHdYDhQPheBfMrthquRcXdFZVFH1KEpU2ZMipVVPVjHKgycdjSWi5Xz4NxP2HYjYN7rZ9oe3HXo47z",
  "key22": "63kKngbDGTqF97ahMiRpjEG7Yg4wmkEPPGtTApGpKArzAUYjLevjtp4me5z3X788tj7tFYVmyvw4aURQMhzCWoNj",
  "key23": "3hYn7kwykjkWk1RKyyy4KXeTuMYq72BD57RGtKtpbw19kMC2qyXxE93KWtrWZRLpFyDJZzVQoEvAo4GYqryQ6NsK",
  "key24": "33C1XRH23QYnY3xi6HrBSLMazqqDsF1TmsHxyEkk2FnoQdkCf57ie2T5afWqPnXVg7dVwtbqbptMR5GunMfUtpBh",
  "key25": "4CoqVDuZEwU77FqSnQkaNrHp157WWduoy25u3bH6sFFtYb38Gmo2KZCtUWiHw4FDthP92Vp8UhZ3S1dS6boozowm",
  "key26": "5bgdaop3m5q2Zt6Lkw3UNAJ5yY9PorWx8cS5vPzrXhqiytgEtubQ14azq1tD6DaorX3zvc9h6hNZwrXC2Seg56PG",
  "key27": "44CZsQgeVhwNSc3PHpiRCbd1KtrfR1B6tKNiN8uQ7Nh6CqFGa14RUWtvpgMS3re31H9mxDAthixLW9MAcg8nMkyr",
  "key28": "YTZLYC3uPxAzouA38x1U7T8daVmMEmeJjZ6tyNzZuCkcLVZw7mop1QWd13L1EZ7cWAyS6TEChJYTaLSA2h1sYqp",
  "key29": "4FEU4x91Ya1Uh2FUdhdWnS2NKNXiJw4LCCb7AKwhNWji3xx3htREbEx2ADeBRznREN1tvG9zDqx2cUW3nwUwzt3A",
  "key30": "pMMbaWWT65gHTaeRp9Cp8T5wW6BgM8dWtczz7K7HFMeNRVXYNiWcxPLXRBj7rtF5LYcKhDFEioMW3C9esTCp22X",
  "key31": "5LeiigTxrQxEo6ozHQgyQ7FHMFNT9hPLyX2sx8CQiZHBfpazbJBCRxW1FaDqNWUzAW23msbfJcPE8FhfQDc8ai7d",
  "key32": "4j7y1QMZzntxq8v8WjdP5fmwTxD5MPftC25EEBtzQvEjtaHs8PpfsefhQ8PsSf4xzuNwt4rV8yba6bDWW3TpMWjT",
  "key33": "4Pu2Kbu8WFdksrVqnGaBTFVUdKYujY5NHVc1NwcpZSP3m8CgQ6uXsQ8S8cvH8vtt1muWhRzUTCx7EGGd3tXSE49u",
  "key34": "YLPwv8WFLXg9Dak188Q95ixwJwH43MHjAAtesFLNrEMK13kefKv3bm1es7cyvhAJEWwPSt2egi2NANLBzNdfqxu",
  "key35": "5GnsDQj5C3YiKoPKkPaZ6rnwKHved4izqXMdngdJE2Z9B7PKASbQjD9A9suAskMbfp2Ceb1yrGfCw4RG7FYdzkqK",
  "key36": "2XGR2sjbRKxP7JYaYJHvSBZcSj6qAAgh2QZPqYtVwpJhGP83VmTRGKCjeQA81Xf7oho2HQWMCCbJ4PNQd44irSYH",
  "key37": "2qkxUqsMLBH2GfBEkJcqHuwRb44gbUMdJ2Qg7A43mjfpnv1FSSKxgDeHb1kU3LrNce2SJkPezWs3GXH45gUHdn2m",
  "key38": "5AALZ8RbfGC9hzYEKSoDYRNW247Jc1ZQrUHL2m6r6yeQ5dikp9fVM4HZjT93vpQbm4vDAMRjAyGWiYYPxT9QX6Lr",
  "key39": "5b1oDNbP54BUDkRgscWR6z5brzCte31erinw6q94zTZJjhy5ZidcvLP2zfMLysVFq29GJJz2B6Ehq4JgJ3nmiu7B",
  "key40": "4tBMXoW97peiu1YRN5eBUutqvXShGekquzhFZFeDGnV9ngqY7xVmackPmsFSZuMxxw2vtkyRMPGks7UWCLRrawc7",
  "key41": "33vRfqBn81GnsdfYWSV9BDy8Gr682ntCVuzpcqoNHbcsyCV3XJHj3e2zHGceT9dWK8BtY2iyHz876nyj6t9dtASS",
  "key42": "5kCoqR5RMxdWiNgPadbLGrCmDiCUQpbtcS3vou5sgf1WzHqMtD5anZameWeSPKsMMs4KJzcitj3gf5dCUPiF9Moi",
  "key43": "5K773wshJf1iT1u97hHwjjPjXTzw97k2ZwPt7gVoEqAuTA3NVwns5mU5hnLy2Kj734K67DqxjFcvj6WRo9WFC2F7",
  "key44": "5JsuNAs2RfmmA4m673eDrbKZxNDsWw6FihDvWMrVgvWLR4RRv1SbQ54cZsWpJkMWFMtc7Y789JetxDJLrq9r7uyX",
  "key45": "4nhkeq6Qwsr6A9L8kjowQ8T9RUsp62J6GzEteWziwqS2AZWrAxgPzp14sQnSa1xbdd6M9crqT2GzXRzUEN6eWWTR",
  "key46": "5w7LV16WNWeyhfVSLEPgdF6NpxdGyjY1GAAgEpNWiwCWFKz9Nkeqj3gVpZn9WyB84bMvW74Dn452VUQUTTKX9CcE"
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
