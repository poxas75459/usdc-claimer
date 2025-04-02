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
    "P3fknCA9yzoK6yDPhzHsPAwSPAe5jixdbMCfMLPXtP87gYLorsVAVKETfiDdEVsQhqYBuLKiK7yNPUdFrmEZLn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nk3MTusTK2ijxVAekVFAhjWg1FzvZ8YJLMm7iRrh16YmeS9HpCnyJJAwxNaSThmCGUNFQueCsoFoz9f2tmZ9hX6",
  "key1": "2aSMpQzqHKsenEvgip9te4gLxzNM9HorTTiEYjGMBCF9gJeefGphyWm6vB52Y8bECZPaHPDg44wpnpL1eo7gogrb",
  "key2": "3tPgu6w5xF5GEABrtXCW1r9Um6YTCBAFc68LJo1FBbyGSQfRVJbH7NaE6sAy8vmeA6Bgix7zrdVayE3mbuxKxXP2",
  "key3": "3HWVnhhKYH1RN4RvY2DquokYavLmoVeYfbZctvjEJ3mzbDRToK2sNgicn5iBdFwyq5x1Cabk8596ksqEfKpaWLfy",
  "key4": "3LaqQ2MHPiq3sL2VkLvKqYnXX9BASvFLTjMFvhrxMpsKXGawLCWh2EbVuc4bj6NUj8oe3AXk3gzwwkk7aiqK46GP",
  "key5": "25HQpJwvQK2Yb7p54zbMowmZoq9hEZbgbcMur85zp5Q7BP9qhmnf4PHkgcxMgqU6rbGx9DtepQookHVdw1jmXjar",
  "key6": "5aH9Hug5wvb2N73VqHkNrnna8753m2MVpmHdTPk74GngHJrqTThggi9mFZUei5t4prys4nxZktju5dNExYJvJKrb",
  "key7": "5kCUNmEfaAQE48Gma8qyUZJJ5JiLb3eYMR9J83SAJ8LUf4jBwJCxA3juX4RKdVhQJd4ULGUpVAS8kVYytXzBgraM",
  "key8": "3eLU1HUSC3vku5Y7h1L6Yrnw71diLxF1vtmz1VEaS3Nq75VPG7DJVpUqobtM2fmXrV3PfzpsemsAoawg27uR1CQe",
  "key9": "259yhQpgQbzXPCemUfXRftbKmReCP8KnforYHQUQVVRogxDRenMUUNVoPF7PLreXSaAMdgsP1dQE3qfRZkv6ZzeZ",
  "key10": "3NcgrDMUH76KbbQDCC2PLMsRLBJ3o31npidGp9BhJEedhqeUDPBx5ihERn7q4NdbNucULS3GCd1NoC5T4r7Ztk2o",
  "key11": "3VK3UFpAwF8ymALB7UXBRqTDwutfsNAXeLc6n9yQhURa2qbZfTQAnsApgahw7V1EuAm933A1odiwWJ4CQVVACs8T",
  "key12": "2kqxTwNjEWJdy5ZwXgH6q6D9FTZVE38pZA2n4piBNtUrfABXrsty4wkdKwavTg5HXqarv34ZuipmXjUAJwT5UQsq",
  "key13": "HHdEX9uotwvQJtEt8GucEdTBKvAaLbBjWSJgwDmYK87sBP5aMHSC3dkeJZqVbbe7oUzehndRpMhBrPUuugRfRM7",
  "key14": "4asCyKasrkUCEzndmwTHZgb3yPJB5gnZTioXRCpNRcy56aCb37x8nb83Y3wNF2W3d4cTi5hWJ8WahF3mD4MqXuUU",
  "key15": "4AWmiweHrCjZnvs6mbvpUFRwyN2JBq15bEJn8u5kkJxrGrbuu1TWKX6zBEkRqgvQ8Z1erLfXqwfHwMv2D1jcXSwK",
  "key16": "jxmabv1DoCPb9KVzyPZpuh8TU87h942UbWtw5N7Vrf6pVmCXhR15f1fmCyzc3BSaZHtC34jpMPKSQ6WLxxjouKq",
  "key17": "5VVvkbUkzAVBZwr9ARHApt48q84X8FFD7ga5mn8k3AhHKtXCUnuEDkBfQ4M9LdaTsWxcbhHtSYws1pQbqBWNgyCi",
  "key18": "2Q5EVjcrwALjcbfD1KzKvviuQVNtH1caKC6BHzsgidaVhn6EhZFC7BStjHkdZpanFMKgRFY6Jv73sR9dPxVtvXWE",
  "key19": "3KNnCR57nv5rzSV2qpGiSuoE8u9gA2PxqRd3dkVJiPSmw3Hz15b55JrcRLg4o8VBfNkkKzzanyKzkck5tG6xnXpR",
  "key20": "3RLj7iP3vK91uhs8P3MRQfs798tgHtgRcbXxsEHmQhquPbuYwyBAdhRir8myJcoFUhc6EXiTdr436QrV52FqYEV3",
  "key21": "2sB3pyjJmDoQ7938uZAQEGkJsKtUXmWNKF3Paph777mRZAoYNhnSoShx9r12CAF4vziLHvFSYsuLAdHNkuvacheN",
  "key22": "xvDtPhr3BqGDQMrVBLzf7Npq9eVzmLL8NKvWzsVBQkFohwMZdTnApRriYw2G2cH2xcR9idYV1MkjdoDysi4hN7q",
  "key23": "3qoQ5gBo1evQnTMGYLWn8m8Lhm4APE2MGrBgYsUmgW3McYbqwZ2f9nghC68AwDTdGcCbJMCYnW1RkGwitu47oyVX",
  "key24": "2BWL5WSMcKd8wiWQU7kbhZXnUby1rU99GEYfKHJSfQfqjqDGcZbSjyRfqRLAsqDp5wic6GRDVTCBjuLHThGqgauq",
  "key25": "3GWeMixN7xQDqGByHJJyDXUVdQHHd9FxZE7hKh8yPNTLv2HyfGZVTTNvyrtZCt9X2jRABzbFwWdWQ9egZLWATr6f",
  "key26": "2h1RQiD9nmPjnbrsDLEBMypbZg6zLBFpQsH8r8P6YGztU9MjqJf9ocAQKvSnP7cWVccJFMTDkpzBsfSxWDff22be",
  "key27": "czMYTRoKhpFMXP6Cr26p5tFyfZLAPuRAJoocBYYsxQ27zmYCBTZqwKHCpwfyoqSjoQffijGWjrDJSHYxbVEkWeo",
  "key28": "2uhSguCK1BRVRnsnaSVdF1pHb2roKqgH9EeUBz2KZHYmnHQYAJ1QcyknciBFPTLpVoVDc4yNhpzgsqaQKLWNn7Zm",
  "key29": "uGCutGNnXxbQRWAqNfKFyv58AjcH3LXTahfKCc9z2oF6T5u1tfAHgj8BGkXWV1GQKx2FCt8uaqfDwkuwMbp3d48",
  "key30": "47dm7GiYKq5JbEsjv57te63P6BXTyqwpE38mAfw31jvduHhQX2PXfH6UfhxpBP7C6euSXuMgwsQvLvbyTanxzf2n",
  "key31": "UN3crBHf7EsKaix9kf6H3xKnALvuQ2BdvAkPH5YCQpW74CMA8y2pzTMrSVKEgzEJVisRUenoR6i7MKzZEdSu3of",
  "key32": "ZuF1K1G4UxAoVTqZScZ4g23EjsDHk4CS6Hv4kF1mUbRg7WyoG3u9F7FSZZdj9eoPkYGwhefgNv1eaTuJh62H7WZ",
  "key33": "5ZezKjpjwUpmpNqYtPCDF4V1o1jnH7iraGXq7n2JCtSC6m31NVeuRZZYDtJooJ18GKqG18JgAa3yGaxCD2tABakY",
  "key34": "442fStTetSyEqvSqihDgF6HYiEaqMPgsc1P9fxEf46kCJUMSwb9Ju6iQqz8ht2dGP3HwnTtNBwRhabBD3ANWP2B3",
  "key35": "4tsDFfyaYuWUBXPpNv8QuiPnCkJCTxziNXy9qjqNHaUkAtdomxVqXfzeEofJ1wvqirXXwQpDLSvYakA9VXBisSFt",
  "key36": "w1sqzq3FsMjyiMUkqaS4jXd4ffVXGnq3CYT6JaDxFRfxqxGxG7RLqDYiGv4uagEtHxMLfqdBFgPj434suPHnzTR",
  "key37": "2yHJTu3J3SaLBMpf1vxiw3vEScSTu5H5D1WD2H5FWhTwRymVUrfPbXrH2deCEbMYkPgznXPjYotdKTR7dZk8V7jE",
  "key38": "otvKK7XjkcDEBcjNxTjzbNciM1ejmznnpxXNoMgZ7H2k2h22rPv29SRFrnRmit8wiy9aViwGp1sNikVLnyw9XJ6",
  "key39": "4BKPTgyxdXcTCvXS35WgXUukwNnEwUhap6g3CaKDMxvwoY9Y2Fp3S1HYHfVtDxbrHcYx82ozbcckv4EY5kWiGJLn",
  "key40": "ac8YQu9qxSMUNrdaMmD3HaKnsnQkWxdeKpAe4bDuHV2v6gzEZpgMVmsrvwTrEQXm2SHaPB4mACpvqz2Tv8M3dRE"
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
