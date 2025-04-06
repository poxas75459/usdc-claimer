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
    "47H43mXgabn5uiWQJn2X2PkTcbKFEoWPVEXfs3zFJ5voViEC7PmLrPPX8zG6CrBHiqnkXigHPeJrkcDNz3S7pD4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42XJBUQhjmfZsAV1QHnq3mbxacrovtqo8U8wJqfotKAKqed7iAwFP3spPRDSV9Rpr3dshiTfNygypstkbFBsu4G2",
  "key1": "UP1KTN89nzCqX1GkPPzriUzwwnzdpsTNj9niW5ZhqmDkCj1BgcNeyBD6ARhoXSysbFzkBeWYtrz2FU7Z4ZAJsGF",
  "key2": "34dxS8RwQDfmXD7R3kyW1CN1Wnp1eSxfXEGFNPdkRRK6DHmNxdK2s1QNSXYgcnA9gD4uLyKQd38EzcRkD27DpUVZ",
  "key3": "3ZCF12BpFaiTksRB95ZThhL1x5ahVsDeNVsEpKskNwH3yKGBYG1pwZ9Zhn75EeG3ENDyfYTptG1gwE5yzSExtc2B",
  "key4": "3Mz9DSbBqDWurF1mHX5E9hQ64ffWzJ5PNeNkcpaXos1BBCh2zCwnDvcd8Gn92mZpQmqczTa3R6FwgEpKwzbaFqyw",
  "key5": "3JQnjoaHaqzqKVhy5XSUQWSwRMaE8nyEaYs4jcYnxZzZNSqLVYLK4jJ1qARhPWDZoRZ8v6iZLENR8Q6k4BsWHena",
  "key6": "5YVEpNZ4h97XbsWb1N7RriVwDbEyVWZg65TEHrevbyjQo2oXrjZiGNVkt5qN2Hny4iSCmssgY2k3Z5cByeXkbZ9V",
  "key7": "28qKAGGtZMVsrXhR2RbSkiWhbqXRwCRKjRQtuio2fAhLDP3GB47Sy9fNxaViJDLXXqEth4fVi3rdNo9PzQ9ui9Tj",
  "key8": "4uNCg3YcEqest7et7f52gF9N2mK3cxikMXL6bpAyS9u3EyK3nRbSb7ddUigBMm2PaY1Xa7NbyzYMyqNx2usL4ARk",
  "key9": "4FZtGSakb18ubyPwezpWjv34PdZX8rS6ENWE2kcEMuJvfmdKQNzfks9BbkREzwGFP19PjRa2d95gHRo4Y3aR7umP",
  "key10": "5Vo7vssALogbHcjAWNtBcqLzk9S9E9QranHwRg1wRFi7gJuLKTyVMdDUvsaCHU3CTvJRkE4tiEj1VoH4weKr8WVw",
  "key11": "4RPfWDEnCuZoDdXwN5AB68rrVhsN9UsHWgUipVCQLx8jErvuLZghrsn3DqJwcUgGfhDUA3BGFrxQY2P1vXMS42u6",
  "key12": "2YJDNkKLS9TT17LWtHErDFnkLoL8XPwNArZcPMsFUaq9khA1ScWPX4K3aSfqp45jBLsAfDS6LRATQjTtRB4EURDz",
  "key13": "bSPKGFKQbAsoGQAuZ7gVERTqrtJJyRPUA6Ezm7BjhsDpLeFbsHNpMY3Q7wWE7uySXJVWHXuQC2GmXuSwwZzW9Mo",
  "key14": "3JgpeprvbWDAuh24Q86j5N7gmMhE6aV6AzPV5bMM29JPPM2dGxjR2ryFqtTQhUzvgiUBvHdibg3HgcPpLgTCwjuY",
  "key15": "zdLtFe2yse74YHfyJmxfHMDqsAKRr7FomNNEZjZ8AFaWTJuk6KhhuXE6VfizbNFA6N9QFzbnDsqFWzwDQzsfACx",
  "key16": "4Z88k1fs3HsF98aS3eDL8KWdkng6qTMyZxBCg6JRk2FYDDBwRSi8yg4J3qynBdW7A5iC5M3RNgQihhjBPaKgMhgu",
  "key17": "5vq35Kwsnp5GyDt1oqt1sNahEUL4phwZ1qHvwXQRVcqRDffMd3eySFFgU7PfAGkMUneiSHEXXCFygmucuqVXLnxJ",
  "key18": "gQNGuDAB4WA1pMtAcppjtZkKoCNB7LjfeWBA6Qb4dwk4e26XtLrefLvvPwQ9psXFtPA6bazfqu1Zow5N4B3Jkue",
  "key19": "4wmiWNPYf7W5ECQTsLvgnWkUaC1qJUr47RBV4MUqKSKFbGwhErhRmReubeQq39fnJHttxhXzr78T1j1Xf4ajC7JB",
  "key20": "2vZxQXT8kY56SPGzxqt8XZeshxpDBLap857f4J5GvrXEqYJ2jdxb1GfYG4BmRAizN5QgZroyPPGqgRRiv7Bei1uA",
  "key21": "3KRmpFhppqRgPqR8fmTkQEvi5kwoXhBGivRWJ93uRk9swD24qX6fpFiS1gaLtmB6dBHTaXGGTqc25whWYXp7qm6s",
  "key22": "3CzSc2DsKTNpAVDLaMjx9vVXu25PVXwdDhFDDpsLTC4uB4TaRUE21z2ToxPxSZ88xfTqsDUn7ZorvxGNTjc62wz9",
  "key23": "4G17GowoH1zv5DscaFabU1WkbcuzaTavqBzkrsdsYtqhrDxLGe77WA6aJ4vQydmzubLTPEkNRifsgXiazMbAc6oF",
  "key24": "QeY25uVQeWoWoNVPA2BixCDYaNtBfT2UMQve16j2MsmSZGaXgzToxcxFmb7tjCoh1zqiYs4a2eJ3V65rUfmPWpc",
  "key25": "2R7U7hSVDgtHe8dZ8Fu3XBaPjaqfFSkjoCZ4JjCAKq7CJUrWZz5VCZaNj5KiGaFZzF3NLpYKSFYzJfa99PufrQsp",
  "key26": "5YLvmSJYMX4WB7usxih1cFfuBw8vLc4CThSht24RNhMsa3nVXtawskkuYtPTYj5Bcg81VKPRvVWFDtmw7qhBjsuL",
  "key27": "3xiZq2Caf548qDFTRQrGmXw1SCfH9pdgaxLrKKRpeoEbzVcWiXr7HCHGLS9TnFoz94oFyobMVJk7skrptc9L63eZ",
  "key28": "3vpTjos122w2moJF38FVnqjL6jt1kAzU2sL55y1oSdSnLiCX4Vt62UscGJNxfrU6Xm6nGZGWKs4d711qm6rin9SF",
  "key29": "2ZAK3FNSbxzZ2viA58kQVmpWDu3ES3axTAdKkzmqyUHCDZHTZdscLd4gRRTqawVBUK4xwHpzxoptz2aJFRjz28hJ",
  "key30": "3nmnPkYm27fG53Nd32eSpfTiNGWCXSYWQp2v6g9TKzZFncRxtTKetTEN14dKFUdBTaSnma8RBAmL8iuGiLtKR6Pm",
  "key31": "3c33e7Ns5xPKxCcN6aScuAMc8byxDcz17ysS6V1hkA1G1uM3SZKkXEakor1YnPg7A6Y788n1gWFR2p44hYJxArTm",
  "key32": "2jL86nwnNT2NWoDn1kxx8DxfVpbBC1EVgDFgioG2bM7nV6ZWoGmSaSDN4KpS7jCG3XmujsESsyrPH1Lx73kxp1Dz",
  "key33": "LSi52DTBpfvEFXkCrd785XXokr4drD8kA2LxXv2cFAvLK5hyuh1PWywvf6tENmYMYxY9LjD6nJLe2iDZf29R5RQ",
  "key34": "3khwUNS1DXbf8krQvP9iS2Xthv8LRDGeL1QqYUnCW3mURzJtoyKqa1Bx8bspx7DPXCFzPMgX7FZv8B7uYydTMFbF",
  "key35": "2Naj2LjyebcE7xks3m5J9Yc7AASNLgjDKm7Xtwek3PkE6MPKBbPp7AHdkzDaMtLgDzaYNYqKKEdvG4z8GwTwceBm",
  "key36": "3nPXDdyxaLDgh4ZXJg6e52Y2wuAuZePYCUN8cXfoKxRp3EaqdXQXrXL5P4sJYU9ck6YatQQMrtXNAqqhtZ33Ziz3",
  "key37": "CxwsA27YT2rKS1cWcfZVTS6Fc4vYRS39CXHdyeskAqdEjK15FxxDgVYRYqLttWU9EaFuhp8ktAut9xzu6u8fs81",
  "key38": "5f9GRxoWZbe2UghYwKvVVgRjZYhzhnDgmpti2hGLEjn8Jacz2X1YyHDBdcCAw3T3pbomoeTut9B1e5S7k1VFLp7C",
  "key39": "59xoQpZAHU2ACaaekXF33FLbgbNocMdR5hZ4BK4ftvt2j8WAgToHxupm6k5A4Ng8qHeTZZv3smtZ2xqaeAUPJbe1",
  "key40": "4Vsdn4jWBhuPESzQKACpX1mQRxwxyE92NseYNrN5U6hVd4bzoDXv4WQcKbCaBoiA8zLFw4cy1wmkzfjdPVJALSSg",
  "key41": "2iGxSbnVGMXJh1kLzekjU7LMrN6tBtg1cQyGDKNKYDvqyfZjjZvG52GEPWdo4ehb84YT7XYaWizS5eFiLSNTmQGc",
  "key42": "4rkixb33aZ3yEV73h1ARqkVqSvtBah4xgSZKgDcVYpWAmAVRyvAvQAetjYk6q6EkNfAdB64ZruDLVCq5B5Rr5u2M",
  "key43": "63v4DtsGb5xTF7svRLCqfUo6Bsc3Pj6Lk1YKV3zpqxfJds6NbwKRbMykXFUx2MWe2yZw2R9WxbhD6cWp2vBqUzfL"
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
