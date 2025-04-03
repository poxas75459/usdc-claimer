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
    "5gogxt5vGtgh8xb86wkF61dsW371nE9d6ZKzG69shQcF1xCsMiZ8wZNRCPzHyJ6M4zboYNvmqiifMUjCYshXSW1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GuRpHi4kjddJGFPWPrhPTLnTUyNeWr2DvVCctmdUTzfXxN6oiCgTTWpKMHu2Qheb1nytfYWwZK8fkfPMZnQy54v",
  "key1": "51eMY3xgB19wesQZ8Qqu8WjZ4kJdXZXSJfaXbgZkrPb6yhFeYhTgdxk2TYMMyzHhsgeRoVbYkBCw5M8wiUd5WwJX",
  "key2": "5TSBtW3AUAtneiPxwJZS1K2p5QtSunq8NmnZHnyeczrGX8mtiXv9yFMst7obe2BGsxcxvFyFxhs6wttxnsf761yY",
  "key3": "554bFcGZgYbHakUTgwMZ4VCEYBunc1q3REX4QcTcQafoBYpNiBymw62NdXDraaj5WfnFKcsRRr2y7hfpk3H4KtV8",
  "key4": "2e5qAEvt9hAofVM3bbZyi1jTH8JxbwQU1xZQHR2W1tgHXKTWWVFRF1KUU5tZQP8f6cu6CfkouZ9aE73KkoQGiWrx",
  "key5": "4WSiSW5GE612T9Qnnct4pN9hhkEmtcDQdHoJn9jyQWcL789sfW7at1KAdKq1BjshctnUeHnovk3y62QbuPmzD8fc",
  "key6": "4SRLR5SkuR8ruCoyDyKYAdDLV9FS8cZf2tLnZXiuE1pNM3eRxzCkgkEqW8WpSgFXo23oEWVedMrSuiHs7u8qurUt",
  "key7": "1tEKGTjrcH8wv84sF4WQpAry3Aja275RbL7QAeagXDVs9x4gTgVfKDEddxviKPssDm21S9GmhCv1KLcCyMcsEtY",
  "key8": "2op5Pw9CEYsJ9UGELviiTnbbHAgSPh7XCduHWvHTH3SvGWq7jeCB2PnPJZEWXaKZg346sVevVG1S7tRBmkicUWri",
  "key9": "WLaJWanLnZESJ4bHWheZn5fUNsbRGz9UFQnJBQLZxcz8qqJA467GkatJW81qffxSJd3fGrCAGgGNNRtwaJ9YD6o",
  "key10": "48289VhcCMKV7QAAMfCaf9SiD1xkpaEZQ6mqjM4KBFVahf5eUBicXqFx7FqQjgXigQqncBvho6mFNQdVbNBzNxC2",
  "key11": "XfgPJVAVstwWuP7z1UEyxZDwdUU1iCSut579QMtLy3hEKK5iTABd8wgRRJ88UocbLFtpAYpAzeg8iMHeLuBWvRE",
  "key12": "2C7kMxThXZaNPuZzJUA8MHQ5TK8s8N8E1DYdQAGGq7WCw5pXMw6ovXjs8gDwFUYobp3zxhCED4DYDpkYizCbQ9BS",
  "key13": "EreqBDWMH6TbHdDrTVBrAzWGP4vfejCziJdhxh2DuRqVMezu4MPhJomCoczQJbqLoX9iZbv8ZsLss74wx2JAaVA",
  "key14": "64rPEJHWr3v68R5xQYjgQbPHaTB8jFy8dSJJ5kkwDneVAW8yciccmNSSNupRqKXPT8GSAfKa85Lp6eLtf3C4iVmG",
  "key15": "5gTN71mo6kjeG8rxaXTzaPTxhCN6EKvthMTDuhRwR4Df1qLrmYotFjmhNpt2jjtfsKsCTg31UhUZwZGid5gF6K82",
  "key16": "2txm7m2qjdurjF8VunwpAHpKNf66c5dkCHsqGJpVezv7bbRHCVS2WypRf6FBsCMggWgoUhBiCuePMboEKpe8rJaE",
  "key17": "23K8F37pbqfiKhN3NLoxodnFTDKj5pKvwLkF1vRr8FhQ2V8yrYw3Zfu7FvhgsD88xxzVETTqyaBM8KcRMZEW8Lfg",
  "key18": "E6mQtNcs7wWzMMjCvLsd9JhXeJmCXPA4epEi6dUrX1Ho1UjzF9S8xmCgBu9x7Xx7s1Yd6CvkTfPm78uLDvN87b8",
  "key19": "5Tb5chA9gc2koyKjkdmEi7kGTaSkjAwV1hy2aLz6UF2eyzZhdtAt3q2XYYBX126mruA3nqyTZR1BF2fPviwGgyan",
  "key20": "2sjzkyN7b8uBJtijiiEZ917ra2YgiRCGRjyY6vAsyaVF86em9ghjEWaQXXzzDKnhfpqyALnKm8YCbTMtBeLdCUXh",
  "key21": "3LLumLeE4L6ABPuZbR162RZQ4YVNeapR9BfaXpMGELTfc9WUL4MCGFKZG2xbfK616ESKnQu2dMU4HHbGePXbRNzZ",
  "key22": "a9JCqiV4oRYWw9eUeSDb7jpA2ec2wYfEFeBLJPFUc1D9csq9VhczAE9hVCNNHK4pok8JK7CXVtx2QgbLvfeHfaS",
  "key23": "4fPdSBGQEvdKYRivgap2yWgANiRNfUj3pBJEYLYwB6Ji76TUMjsYX4fYFCp5HjgzLBhU3mUMdefSat4AQqTiKy5o",
  "key24": "5cVJxDBBNtN2eu6dqdvWbZeYAHuUFFy4WHWSpCSzSeAWGPNsZMFzJjrSR4o4aDM9FGqpuxjQJEy9NozRGB2rE8Nw",
  "key25": "5Hj2LtawnbyVgbsrgmF3u1wshjUoB2p2QBqfMRNrHsYQX7GY2XE8qweVGJadAjsjHDrkSXw8GUqQE8WGFDK3dPSC",
  "key26": "3DN4c9N4Uq26m5rXzq3MPBtXZojc7zftKLmH6d3j5or6t69ZoGcdRdaxZiH8Eqnb9rkn9z8mXLUGZR2n4257nY84",
  "key27": "3HyMbWbP3Z6zH4zSfoNKaFhopjkPdyXvsDK51gmfhudJir6AA6uv4egAcT1yVUP9y5LxAYK7YMUyGxgw9XvJiuh7",
  "key28": "5jJ67ACuHPYh4uYekqwkGmpvKGzxHMSmmJ1AVzNbdA1Sobn6k5VLAzn39P7p7iyYQMSqMNHcU59Whe5tMX1MZiHi",
  "key29": "2YwK4hy1LnBTU4SgFbfmRGDXXP6Kf73MfYWxbF4SCia77TFtwomEvdDymC1naypL8xEiMLUZRHULNM2WC7hqbyko",
  "key30": "45SqUkq8i41uQc4R3vSCaYx5LXAjsJLtdtYUVdj3xqTfTXjoxxtQ1cGx6iYDaLJKYP4y8BRhCMiXKX2yMYjTHZR2",
  "key31": "5ebRUE9xgCcVt97s8VxX25rU13os1M3YSE47REY9bNKCYCJ96Gg6qucSaxxKWn4CdjZYLuD2ERTCyWSz51jShQRb",
  "key32": "fCumnA1SNTBqdTKv9Gw4BLCQPW8vAqcZuPM1m3vqbdEysyFD8Zf7m3XsNWTWJGSmcnLYpgxwM3pCX5uz16v7mA5",
  "key33": "5eNYojEDJgoEQdV8boE2McgPW6hxwdHYMr73tsvniVrmCipNXLk2MAsGhuiwSdamCVyYiLxHLDmomVXuswRBtLub",
  "key34": "ZwewCFiALker9NDRgKFSVbV8EuoPT84ZWbku9QtPtM3LMrYwBoYNYK8vM8y4Hs1hFESYqaJ5YuVwJQgJkNBojLd",
  "key35": "4NWvP6e1PBtYGZrQRRgrW8mBLmHEpTGpEVc2g2MEceXdagKT7TwrWVqx9ArYa1k9jeqpyoEqE3Z4BgkwtHSdMRNV",
  "key36": "o5xz1Qt8e2rHetV9kyG6Syp5f6EEbh7NiYg9yWTMnzkEZo3woSoYWf5TAjDzGe7BpY898ntywE1q1UnqrJjLzsv",
  "key37": "4VQo1y2yBYfUBiM5iuuY4BoAivVKKv6akfPdwyAaef5CC3r8coLPbxSenwWAHpbqXWpron4d4NJxLsmEriFmLMT",
  "key38": "2Y4apxJEDTAtMiPtVjmEzWaELJuNh1PrxNyV8BvJ8aKPTkZ9N9zfBKg8ZnbuwaxCPJA4fToot1C5iUth8MQJJTo8",
  "key39": "3TGrm3G9tJABpnyzi7NkfeTiMkwtmkP7geP1juaRg7pkTrwMiZ7cW14fxsgiJnkz7Xp2bG4Kmnb1rLciTU8x7jJm",
  "key40": "j7yrG1GH4mMbRHQggKi7TnPF6XhNYoJTqBLWn4aFwzycgwvAkyShYETKKhyqcLUSRaLBvocF5cYs1iJ5o2E7bhn"
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
