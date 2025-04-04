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
    "3TEVfQAfYfwm2yjWEwR7Awkib5qg39KR4NGJ7RqXGkd6kgFTGJYHwaE7GpJtJqHKnw2KNP9PAaApjX3KK1iLJ86J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u2g34pHNK9VqUEYsJvk66vc1TSUaZRqgisTqZRMwPc3tAkAA4NYLpDvxqq9uQhbnSp7ULaRsjX6xWPQhzbUM66e",
  "key1": "3uumJk4u2qMqayXS89EuXtQZMNv6VCtvZCs3E2HQ6Wp4WRdzBZDzjiYW8jPW9mXdHkEX6edWLYj4kuFtV5aWDf7p",
  "key2": "3VZREwqZWmaRRwa8D7dqtynP8vpFu4CMnjF6xnzV3Mu2yu7xSTH4qVduFrGSXuGvXfeafwA1ApHfJ4rqf3Vf2JfH",
  "key3": "4KoJgCc5FhQfv9TTFAhUbMeWPQenPvp5u4cmw1of3F3BoZfR352riwBFY6hkWRFZyeHSy7Zs39AEGPjDGTmBbPUi",
  "key4": "2a637tGA2BDYJhhWAXxYawtPQndSoE6nRGFQiFUGHXkL5PZH3LXgnq3LJs3oCE6yKANSoYbjR5uNzhGaQJABEC15",
  "key5": "5AbpHYBmbuZkduZi7w3xSwXkpBVW66CTbCMFQU2hHa5fsq8TRHDgQdY8sqG5cviv2iszsfDgttY5L9fKArCz3cUw",
  "key6": "oK5Q4AoyUg9ofm95kcGxDC3NnuaUvoLAJvkzhjN7ekhzsUNViNzbWBd8Eck4xTTTAd9fVMgKxQ4DnYGo5mLSf77",
  "key7": "2bLueW45Fhmqc5T2GNVFnNh37mn3LkTVdDqsJvMUe6vPCZqSBWzHAoF47XhLCkHC2Q9sLQPSWQVxpb92dYU4nfdh",
  "key8": "4nRZf8zM1XTxM3dcY89i4UUVoX89Xxa26iovr3HrcB6DJqC7hmUyorAE62RizVSPjPn4o2UdBxZqy55q5tcWTnKE",
  "key9": "3U1hyGxxgWmHGGnDQ1GY6hpKb13d52iKtaWbMLqvNtUXqKTU71B5XTRtpto5Lr7NmPdLz69DycxZ77S8ajcbVoEC",
  "key10": "3SffoPH5yruSqhAnyKB4DFk2eQc5KPMiinNQ8T2hhEZ1LC9uKic2DHyVe6ooX5i696ckoQ36djTmxso4XxDiYNCB",
  "key11": "4xhPvX1pX2VpW556MVpVuECzyJrNtARmhbvbW9qZtmnLLSwPUTBG721dbmyxtmRdSCpLKmYyM2krDa5oLXR9khYf",
  "key12": "43Pux33dpjDLst8BKqmeWEdjSNnARvYjf9CDgtfsvRCtRLLaCAcSXcUWkzfZVEaFVCpnvnwmVdSAW66WQJjrbqsc",
  "key13": "4xuRJftt85NuHmgdvTzGFMd5QHo7BYzEZxkAMc7X4C4ZPZi2zWtBmjQKTjtAe6yWVWQAf1SsoR3xEgTqZAcrAqdJ",
  "key14": "3GTzDXK8UfXej7Vpw4xJLFPX4QP1F3Em7W8zhpm4yJT93Q2Hres421p47AJ6DNKRpRRrAYyAysKJA7XqDAWxhb57",
  "key15": "3dZmCQDXQh3WhAZyT3DvUkvDHLKh8Qijn55FNYTPT8qcWptmz2JpYUdnYtDTcN34mTfSmj1AfizriUkhhNoWQStG",
  "key16": "2NSZr3ch4RFxSBi1qu71k4BCo3TurjTHWGT7foGguH5ZfXTZzxv7S7A5xHkPFUgL9axT9ysTibZYt5CUw9w7pZJP",
  "key17": "4oCMn1v9dBQErJhzKSm3QkDFw5Jr4po2Mziy6edoGaAiBQ2wavZHi8Qxm4ugGmDpAj7H7woJqfCeq8bqekWUaw6v",
  "key18": "3XjX9BYcCF4ccCwEwA6QX2s33uEeXmdXVjwJ14oCwWvbLZ5V7waH9ztsbgwSUPKt8YZqoc6nxoZstUuAGZGXv5Zk",
  "key19": "2zpf9rv4nPRXjh6GybEJGjQ53XBf6YznHAcXSTswSMHseVZmQvUQiSeuTJQwiqwi5cWZ2ZqFiW72qu37kx6Zzxaz",
  "key20": "5jTe83G5akUq6y6WPdnJdgo6mea82i2wEfq4dPsiJVXXTEJtpDy25xfVH5zhbhoN2GWV2eSX1ZVQsNt6wCYLeQyp",
  "key21": "4UgnMqn9KsyQrWDLpmjsTvvB9ppwJrNKKoGGyq1Hak5NYyFjweMzFvG14EB8Y1CHfRM3HEJn4UV5j4ekQvVqjQpZ",
  "key22": "66Vuwou5xxUq2QLEttRDeXMhRcZKeUPU3oqGjmoY1RB12hAuuQGTD9Vzsr8RKMYSTrNH391QsfCCFPgxKbPr1Hmm",
  "key23": "41JHBSpSPa18wwLGmKtpvLyyrUbw5eHaahszMkgfRM8FNbcuyBs7oSL4mgpph8Bs8wuPLw591gyaNzoF6bfGCNqY",
  "key24": "25p2Hu918XHrHZTuNGp2WwNd5B267X6AUmxJRw5BkCjhBnHDJ41hKoN1Mi1EjVs5UaWh3CAFhxeDj2JMJmuAwsVv",
  "key25": "3XQbpqXXNfFfCFdCeQ9eXexGho19p56xmmfff88Vs7GUG6PEZca6z3eCcPRGG4MabJPEjLsBds2scREvCknUT3kc",
  "key26": "2Y8m8nruVoKFVTgvJj2f9MBq6gZTXMNxNF5AWWPwxcqiLMFqZfdyvHbr5x7sv9JyHXUmaeKACMTaGvgzFRxBYxEe",
  "key27": "57nCsfC4HCxRkSkjNCCjG7hkAFeX4WFksBo5Aidp5XwhPMoezDtfBeyKwwwpxQbGAXFAUsAFSDAb7T9kKVCASvKi",
  "key28": "2UZeUADdhqzsEU7d95iZNsntZTz1Ke68w1VH7NhkwgLHDgp1hdDyJ4wUrs8KSWreonknpJxcydqDDGzMNKYm3GWw",
  "key29": "3GZgDmQUffQpD99oit3iezWcHMGJTsTjKkVg1LqiZuZUF3REhs59dEM2mPs8xN5k8yAkbq5nHU78e7gvUJxyMsHh",
  "key30": "5sFSyBVXkNZmdpVBvip8qKFEk1aZVnaFBiV4h1xVvJSVbVWNL3Uxt1kJariyjL1dH9VJKSm7vKvij8NPguk9WjK4",
  "key31": "3Xc74HuLuA7rgmNtvvfFjf8pVyyigzs37RnYy1z7rz36umtQWgYBe692j2bE39KHpE5rL2573EP2AvXBJwk2NBiR",
  "key32": "HMRLEAhRDuWE8afhZt4C896t8Mpn2JrTdvKMnzSUHxSUHdK9XLCZgByoujDdLDJFygnVv81KUJ1FzvhnR52eyYq",
  "key33": "4AHyuaRy1ZrmkLYn7FiSKndScWoVuqAmh8wEVnvwq6kXt6SJaBriTZJVm5eqywneDgVffSeXTZtdB36moDfP4HTf",
  "key34": "4BYJkyvmgrD4dYB8qvkNt3sjvpXeKx667U5rKZ1AjJU2Hb1iDmCs4tJM6x5Rzrg2F6yV4DU3gGJyi5YjdpnV495R",
  "key35": "2cDK63w7X5weD7B5QKRTeBsXCuaeCFeVhUrZxStsJpv8tVBsxjgNj7TVP81HSpPVrJDbcZgotHJXeEFt7CKzNx8S",
  "key36": "4XtB1rHQ7MMBM659Us58tSX1YY97KyCcDmjxeKz5ukUBoXQVen5gxFw7MPYyY8YBQwBaeHGYYXsa5DjLiiWFJPMZ",
  "key37": "2G4UszgAzGpbP9hCCyGUkA4cDYQhKrWdkV3o7zm81uXUNFp1KStRnXE52AykZRYSXPBxqnsBWVcqLrZs2kZGFmJ9",
  "key38": "27mKdn4EvJukpuWVeM23YtM72HERuzFmRa7hLEHRFqBWr3QskrhtXZT23PAHH8sVi4a5jWfwMoHaM8F7v3jtq5Z6",
  "key39": "5DgMaqfXxHqMXsVjyzBEQePVrTKae9UjSuFG2ZHuBSdLht9iiR6GfZPKexDW5SiffoYjGJFEe2HF2jMAi7xTchhq",
  "key40": "3wbExJdX9KemC5Ugs4sCieFQ4xF9auFxWdzo15RYmvSqoSoaHocVgXdehoQjRA7oAfevGbJfSerZwBFYnNqhSGCD",
  "key41": "4wxCvkZ6mMQHXD8qoivUGz8bdbcHtSxsVJM5bBpNGrVsM2jjpuxA8VP9AJoHDLoKswifz9rs4gNncsGAhLEn3XGC",
  "key42": "3fFWDB43PCePHvLNdCS4pNLb1uV73yg24reEgEXKyvzNQg6M22gC2EA8SFowy8Hrbnjtbi9oqKVj53K7BWnBi2g3",
  "key43": "3HvQVTxv8Qx5C67zjLvBa3NEtVnp5G6wd9kvfG43RPTSkDRvabNXEm1m5tzV6w4X5b6xvurnwWsftdJjQ5gRiKky",
  "key44": "CVLn5KNSbXbKgiMsAuJkWw1CNpRH4nofFo8X83QZpm7GfVwoJi2X546N9ZRwgH1pPJAmpCyvgUaqUCcaqfV2Bbv",
  "key45": "4rM6GS6DA99t3TE4xB7e36kqHh5geaML8hzFb7Ym8R6PoFeANkV6FGVmx2yTv6TrRHgS9Qia3U1EgBkBFyKZwQ1d"
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
