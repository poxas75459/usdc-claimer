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
    "53B1Db8CDC1dwv3a9rawmv46QU816VCY7VZ2wHJmBW8jvXMRhywRAu2kKDsjuxgCVcckC9ArX14iG6s2z2GcwKEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39AFEK4tnZ8zprqdaQgtYCSByipnqQwE8x7gXvMBAfc7KqmLBy7hBBMXLgzwiEVHUxWFr5EMZAwoqAGpt52eZXfD",
  "key1": "3geZZfuUik5jALjtNBf7QQgKmVqKM4yCRgfFhZdyWoybexQ78EMdZEv3aU6QyAgHhHDNEtbvwVoKDC5teHuWhbDJ",
  "key2": "5wjFZFhoKXrYhKBCzoBXu8HKw1z32tHsTPzHgDA4SVXvbgeapPWJK7WXSunQo1eJPsEo1h5T5FiNgFfdvkQYqseA",
  "key3": "v2ygKK192hZbMz5aMX9pdk7iP9dcnFUzon6tdLW99D3GL9wi9jpZc23grNM5dU2mRL7ue6N1z8PUVRBNr49tTWw",
  "key4": "2MG9nK39QFYF9bQqRM5SDVCj9k5c5GnqaLEd8QriaymTaseL4KKQwoQBCvYS3Afugv8b4CRQD1epWS1CpYMnK8rH",
  "key5": "2vf1RBwfvgav4wepgtWaFdDqjhUMzsQQS4EfrqVnJrqnYc4QEuW3pVozsQmyuMVrdPbnuLi4jv9W9L7gyHaKTJib",
  "key6": "5mFYvYe9MCEGR6yoR8yF4ybwW5rUM8KzDZjgAmcEr6VbKDS1ddm5Samr3fw1yU5WQaSMsCBtkLWD8EPmVjQxr2XX",
  "key7": "3nyQqqm7JkWUN7WtUuwGffv35eijctwkDExq6SAw6oR1W6HKs693LgbpXvCnhU5gMpNKWiLYFzVWLm3sJVeGqaqR",
  "key8": "2cB5nsr1eZFNQWxvs1jUuSY8xgJepQZmV62uTtb9QKSpHRK8vrnuqMMA1F4KCpGCdGopTn7YhKN9LmMRTvcCBMHP",
  "key9": "2i9b8Ye6ydFra3d2eZ8Diki6NZeofUZNnkfMvhvTuxN6zQSrTdceR2LrRooBGH2AFcFQvaEUYHHxzeXihqnvKDxj",
  "key10": "2fGAbffTKD3f5Zn55EDxMr5sjoPw95T2pB8p1Rk5oYJsPSBitav8anrqHjNwzRxjf8BBZ7dUJmU8wzQmYrhdUSzQ",
  "key11": "5dPx4okWgUVqE1EdrCqSRkQn7ckiHcV3VwzfDdZ5PcKKV7nfq8iEk272tCShJ9Uka5jnyp6jhceLUigoSSR2dA4M",
  "key12": "412KFsGvvsMmQzJbvRjXwP6msedbrB49Ghw9wnEU28FNC66S9b6GnmVAyv38m8mfe5gnqncipLHK3V3uyyyyUuuT",
  "key13": "369tKZWNB4UGopTfZ7aD3ebR3e5Uu2VTdtJaXRkSg5KrwWcpdvGaioaG94nK7AMDruBiwP4d1ictqaNvxSsyaRuC",
  "key14": "2iGM4Vkpjzu7om7uJCzfJGWVVoo4cbHuucDbiN3RUAkGLWhV3AmSZ173qy61jNC9VuNbKGevkKLvtdXKmeSESoxq",
  "key15": "3vLnDZqavbwsG62ccPohLDEV8j6Ksy8FjTV53dLq5BFKqVyMAXq4aaHJaxwma2SehUS5BkNciKfjjosUKavfhjNv",
  "key16": "3KQSVceWBWwiYyJQyiTmkJyq28iKNRKFmf12wuXPCXJyeWHxGGAaYCwMau8zdWqC8R8Pmddjdf597WWUiJAkkF73",
  "key17": "5WxkmmPnmSTgcrHkia1EQ3pCg7b3Wzc5VG27BPEeiYKsXcNNZoTdbsxeGQu7sLMQSnhiCDNNzy3TbyKPYBEN21DA",
  "key18": "4revLqDk3u9TLzLAbcvjrarxeiE7kQ4BXx1aTthc3dPpeXivxV12kscAxTxGdgNaThwmDDJkkYYyvZFukQqWtMZa",
  "key19": "481uQxTi2VMYhqyS5VXsAGjLU6D4DKmHqruM3bZwvPzy18GzzBFjgv5DahzdT92GYVFo54FDp584st32KTc5jniJ",
  "key20": "5dFm4SWspTyGQjtE2cgRotdrtCKR1fr63xxbgDmXAzC2NZNEUkMNAvXcWTz2PcKiwQoabiKQvBC2i69eSFwwsLVd",
  "key21": "2Rs34BgmcQ81M8P838bUSNr6ENbFq6kgdq4ssSyQZ8MvLgYfgicbMCKHUH16WVpaXsxNC7CGcRAG9QnLixm7FQYy",
  "key22": "3imbZbbSHB42srGYnUAjr2N4HibwF6HeAUiY8BJiZKPZAvENSstFx6NYrvLJGmaky5s8cG26XGGBsyZmR946fSfu",
  "key23": "EGWkMibrLHGcgGeHvCrVbk9JeTdqGt6Vf9QJ4E9Uuqz7ssDwW5eaVFc32iKYjP9Z522ciJDe2ykYtsdoeAMYFDb",
  "key24": "52B2desCYH2pMMvqAFPy1CrHt8oVtF8Bb4bkMpFUYBRx2JT1a3zJTy5rect357bVYQbYyzffHGRSZPWeWmqevaXj",
  "key25": "38ZzwPxxSRxMCY9RrjCQY7EabF1dERj2ENkYv5redy6g941xFHECmTcBgwEybg19qd8uwTxMYcJSDa73t2qWo4Qu",
  "key26": "67HSquDy11w875H49C69MtRmmk8YNAKhnJke41EzR8JCMuGwoSNMKkuzv4NiiNJNVcMZ3BGH81dXTTMXbsF86idB",
  "key27": "3nVCghhXk83wmwHDXEbtnvY1ehadTJgqP8qnbCyLvmtHSsGA7UX8r4HdwnBneomTQepdVTs3KUnjcnR9A8GXpCFR",
  "key28": "32mwkoZBykkJCJTam9Gqqqf6yv6TbtZvZTDvPKTgYARASVQiW9YXu1iHsBwPg8ufcMTUP7jsJF7T3nQLRg5wUgYZ",
  "key29": "2D5DWGn4rQqPfqY9kK4Rm4ysHGAfTqbdY74rCmhpGAdhwkzX9p3WM2jqcJFsfFWEYjCPGn9u6Fpt5t9yLdF5mfJu",
  "key30": "5MFaaRrCzvGmh1N7iYWmtkcGkkZtYVrgvw7PEZGbnT9XPQhnxG3sESPtzj1fFoqdiYFbk6wLjCRG2c97NqrHm9JP",
  "key31": "32R77g8QdgkakiRzEXRn3XoVPCkJtT4PLvxyLdbDqTzW5xRgTKmLuU7xBT6bbrrP7wesdU1uAPCDjNvrjWmW8WFS",
  "key32": "271Sc95QF9W1iSJydyCTRidrdFDmbxXxVfg4fhzxwo9JnPNNP8F515P71SQeiSTKwwXsbFVFJ9vvmcdtdejPffPf",
  "key33": "2oM4G77cZECQCE158NDGNwosJox8qU4aNuCP7yf4xUPv9aq3uwPnbbD8S3T6C6MR4sG7KYhmai8ydiXK4igLg9Lt",
  "key34": "XNUnW4daXt23UaCPAPSntSnebH6GiiqcqeN6tf5uPzrP4XUD6jDaqmbFFj3LrNQmmkRvnvh7uZBD4yhqJmTHcXS",
  "key35": "3y6NXyG7qVUB5ez9JwjZ7NpKKhcDzEkA8ByVA5uiXmfmYgPLJAwbnmsdhEfz7kXT6gdJHJnVwfUnoW5zuYAM8T9J",
  "key36": "42PMvvorKUpCSzh2jkQDiQJATUTMEE41QLD4oCKBqArv9qtUCWhfWJmqmoAmK53TfoS7CNtqhSVSTZWso8N1p4c2",
  "key37": "3PCjXTMvVr8vF3jTyhV5jaYatSyhz299Yj34KpDyD226o2Wpqf6BMAVzL3JxxLu3Emr9Mkjhyw7W1fNDMfj9FxJM",
  "key38": "5zNSfktbyUYUyzprQp24fY6H8wT2g6kuY3fAv4V8guAsCyXZ5VktL7ZCJVFoKPtgCWn9RgTtMYWF6dogiamFbpqs",
  "key39": "3W4QEQGvoJ3dvdYN7uaWn7AC22JuWQZkBF3k8pKWKcewmDKyoTDmbKBMzodyK6M4Q2P2DbwWJriC4bBeX5iFjfSn",
  "key40": "cbv3Pu1eCbrsog1uG8Y93nnrZPzD2Jw6RaL4zChya5utFaCiFevb8x18PfDMWA3Nj3k5gCtTtpeMw3kFwcr5FEL",
  "key41": "rtyE671171KYcB7sxWcxqPmVNgYZYBBGa96zgLJwLnAtwJDi5hXwQZiJbpo8mqVkRgCeuKUXA2xJvsSvPVbWzWe",
  "key42": "5AeB3vomgyvmDmb83uVSiEv8Ntu8JgPYfRuKsfQFYQ9jG6KoqAaxnSfcWrZRQgU2W3vrPgpCzJRKcriN3bPzmbUp",
  "key43": "5G8ZHfkYZMXq8QYVKdvtAHZDGiVpD6PxBRUFsWt2ojT9Nv9ScTBMKLRAaKRQqN5evgSF3dUQswGqDXEiP5MMq5t7",
  "key44": "3bi5SJ8yNMDkDkAdmtEQAwWokjsxxD1hCCFJfxfjAyY4DG3ZwDypDy5HtnUw8kVcmpPdNPUCEqzRyWWky13pj7Vy"
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
