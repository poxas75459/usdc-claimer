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
    "4swr5QhewKtcLc6Y4nDUF9zqLNHNMGXoMrrFkaaBRaGiEZzmXYNuxfYEQuWQ4NBxks8yB6EU5broPRmzhtib8TRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3en5KdkDDMSvMieTRvDjhc3ELrvApqXnGNMsqbcSnE1AEk7cp69QbCKb3CVF6F8Cgpr2pm85qau3Enmy3eZmi9tK",
  "key1": "3muKUYMwxgZRghPsQBwkv1HSfpq4FV7wg3ZwYU7E9xTnvdp4jQTbDUEJvJB3dwGEn8ujzmTXnaYY2iLTw32NVdoQ",
  "key2": "5fdnoK7abKegcrPFRYGfqcrUfTwjWLbzS4kcQjLEfTyMwLTKu4ypWK4D92PiToXzyJ3Dv23BbzVKrrdWeeZacSMS",
  "key3": "3NoHNzK4Gs2fnxXBCjdURvap7s1xRQhDdXTwzPfCAZbCENpmQBknzm6ZPFyugoSi3fsaFw7LzdG5Z5f9dmbt9vbf",
  "key4": "5vfCU6d2njuxBBeeJ3YMbmibAuck3REb1ZN51A9EjBLbtM2sMhdnom5Wyu1NssUPvA2AjKHLzd1cJsJyfpn4wNiG",
  "key5": "2rYx7QwTCyBsw4WeFRWiBRLPEHdKibGKy5yM4C6133VenDcLn7ktuhmaXedQ13Joz9i34tRPUJBhHXiohomanq1b",
  "key6": "4NZgyAV4wEdxwZBkctZxAuxcg5on66XLxFo24B7A9iCgEy3CZNCmm4cUpWRhhRKf2AB6hzZB9xHJUmbWiv64EWrJ",
  "key7": "5yid5pdLkMhZmK43e7P79fuzrC3zgnq8SRw9vFSwE8i2ACRrxjXEySxuNmN2ZvhxGgTGuUGdTNiUD92grWyaaou6",
  "key8": "2jPoSSf2USpbtWZLCwwTM9pVngCeDaCZcoitsJxdvVDbQRAG1mDDhvUAjty2C98SnDLXoPnxRCfNh5PWTNpDBqac",
  "key9": "kA2GTYpfBRSdAnEKfLPg5499aaUtZpmGq4poZ5iwCeXd1tLeQNxDrxo8vvVwYrKeDrY2udazGCBp1eR8fMPHy3E",
  "key10": "3VN9AeywRSScM6mLR14gSzhE5bKaws4yX3FrJBZyWdUcJ3WzPhuueZLcenQ4dRFVphgivph9nx4w6qEVash2oKCd",
  "key11": "2HqPdFBv4WWuKRCBTcGWrLXLvVaxmREajBDHvuxUr8RTEUf32abqVPCgs7Buye9YG8Tjy74wL2RNdVov5XCAKGk1",
  "key12": "4gi1DHGdFGoeRLL4FL8sFACBBYgHJgNhkVY9t1Aw3oHBTb1UvjyGxcETmVx9H6giRCMd9tdVbSqSmXjk3MW7u6Pf",
  "key13": "5SxcXwYTZ3KTSTUNVf6uCcTPiZFwd3M1UjBf5L4qN2X2SwnrepD9Ao74SHoB74ppBQzrQRNhCiK5tPzvSsNsrMXH",
  "key14": "4yMPG2NPyVYskV2hUY8MYXVMn8D7T5YntEmby3CLZGMAZjDsnuzzXSKMCdd4fhMAkUuVw7sBjuqF3Eny3izwZKCD",
  "key15": "SbEbhu8F6s7ETdRDo5MsyQA81d3V8tznggnTRa3QMVRXVRx79iygEsggJ7tL3qcAkEeiB9HVYM4K6K7aJhn22UV",
  "key16": "2pLSZ3TDEnBPaH5XkqCMTPU88YfNyXV4yEeJSk4mssTPiDpRxGDjtpWGbvwq8Mw4pso51W1mmXToC5uPDaLJP2S9",
  "key17": "2PTt6y3dhHqnZtQxANn2Cxt2BGNTGBbfpiLfrswkkuZfzpDmc2m2PnHncWD5fxn3EoPaTsF3PWEP2FNVJbRtg53R",
  "key18": "2Uz5VvHHQJE7oXAu2NawJi4eBqUywLgcnjm9t7kVogp4jufo4NhVBfzEaTfL5ue24QXMA5LF2AjfccnNMLhmZakF",
  "key19": "3QES24hH8fTVAmWm1Q2rGKwkVwgBxeAgGD2fQb6xCEKAKG74xnKw38AJyoJw1WRHmgTcyFrZvaajxyXTreUnXUuS",
  "key20": "3rPjAyCBHkPBx5ELvbUF1k2gstUb9NPyPAwjgBu3pwCBHGsXuyij9DXKdAeCxZExVc3JoeW2pUAfdHK7rYZMzija",
  "key21": "5JoveMg867DQxyEsPW5VBEVNoknuUPuMTyRhp9Fou6Bb2HeS7QDkudBWZstkHTBFKqJAKEb7EVWQt3eBxv6HjNh4",
  "key22": "65GhZkdkaUMnrbg2SmqXttrhR5FmNSx1RU3HeRjmYZtDyEFD7XjgcH4q9ed9e4hSY1rTMze3LUhzfeM1Kf2uWQp9",
  "key23": "4WXtToRbyCGXHXEzSniVjLHFHXKv6ttp49UgPh3ziwLxfLsMroknFWtDzUtsfiEX7KszEwn3TX3R64SqM9PZCinA",
  "key24": "rSsavvZ3FAEYrPtGyKh692xGPNhWFTYFrHUXufN2XWPqnt8W1N9LNKzoKXF4dMAhtQdJseKRrqjKbZPExEHdLQ7",
  "key25": "4o8PwkVjWyv2m77pQpjeDUh1FqSFX64EAcSF1Ei7xtD4jQQgVQvCXWVTwXcWMC32XGtzDPRjAxauyZVSaoxjRhru",
  "key26": "636Rta6eb3JmTPMV1ZdpUjWTh7Jrn7pFgkwVXv65Fq3C37qw2LQ4F6njjytgfHRbNRre6YyAhEVK8jNVmfwkQhyS",
  "key27": "4BeetygcoLvK4mp3i3zfH2XT1Dgf4dHGZQGDVUNA2cTs2LfRLdgBCHhUhugyFMbFJVqYuDsYQ5ostTpCPNRrTNSb",
  "key28": "3te9dJP54buMsunyXU14gGqKYFmrhgy7GSRJyrfN3JsvsPf91MytbNHrUstye6HW5cc64NuPZf1Jjwm62WqbUQiC",
  "key29": "58SDg3H15M3iBweqf3sY9D2CwFUG15JmsYFufZgbJs8uzBZmSXaurubjt8dDyHCxGdLLcnfBqqwuGu2kVhhHdF6J",
  "key30": "2u9ZJusMdCEAbrpruj9G3bT8FjJp1hWcC3b2FsoNzzNmBVTLJVYkRedu7DLX7XeNEUDthZH3VvbmHH1737wgm9Ay",
  "key31": "3Cz5dzWasxNiyMNoSZttd7xYqvfszUZbBVnqBtkcUJN1bugmccLVuP2fYFZZKJgRPkJG39ieb5FhC6C7PkF2cCn3",
  "key32": "3Eu4kqZq7ZL3WmKEjYZFtQtvvuvFy1FeyHB17Ehcw6ENLgY7QEvsvf5YMvMwVGNg8y4DbV4axRCzt6jZoFJX7wLN",
  "key33": "2B31jJjKiFZQF9hTuUrL6g1wXZCxhRqK2xscnxjpM5sMWEVH5KgSe7dZXyQXyfQJgnwdKzkWYr3ehCXisCDgDCHJ",
  "key34": "4JH6NSRdp1Dwx31xe1yGxCHAUx6sXARbZhCmCEw7G8zA99MZnxS8LFttBjvui4ii3ri1GZqG6bRJRKu68JbCBRmD",
  "key35": "5aLvdyGE4m4ut1Lp9Ew9Nn4HoYJY4Zf6B5iEMvK2KZDW4o3HiUFipoBUjSiQMfbhmJdHto3g3oaUDCGjjNZbtWaW",
  "key36": "5RJYxdXKyeVZeaSG9oKLWyZxo1Ya2qCNuqcaHPhfAzQZKtwy2H9QCr9ToioFNAxMjWLZtCuY8MHJU7EVQWryayht",
  "key37": "3h8ZtUkmSsYtH2kZYnd8zg5dRH1ojfPpnhZCBAdEhgAYJTjL1obQuCNZuMngqtMDFYP9GJw5etwvg64pnJw54bFN",
  "key38": "TbE7Ak4rHM8hNfryHgUVSnawZvCHytBjWqSHgmcmTupNqogUEMjdupuVUWiYt7GatgMhgiNfc2MMF3BVzWuU65e",
  "key39": "FAnJTxMuQfb9WUuw1L1E94FcjGaoDP8PhxsRKL6y4prQVBZ1Ahy2ygzq1NnEhMTpS2j7mXtq6SoUFwTLcs76KGn",
  "key40": "4zyvwM4fnuAsH4iG48THsRnkRwixAXwtSUbspGYn8R1VPk5h7FomGja5ACkUNahC2iG4eKzF9hJNKSpx9odqKq6g",
  "key41": "4SakcyNm171kYho5c4qg1aHxkuA7h1Jdi29vk481KYvGJnJCuwqN8FYyRHTe4NX6TUMrZswwmqxj1ukzfLGvyE3m"
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
