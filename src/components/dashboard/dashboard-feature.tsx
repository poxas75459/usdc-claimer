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
    "3MnmXPxzjQZ3AtzEY4GGa4C7UT6n8mRhxkCQ7gEyza9GnAmqgbg2QCw7vw7617ssru6NBvd5yzwRUzCuyUVyXUf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CebLXswNrdiHYT5qExeaPWCymzZfe5bU7y1t8oyQhPi7kHxw92ZKHLgNTcd7ov1TW7zNXgK6J5JAKZEhMDZkyj5",
  "key1": "FjR5FjiC3dTkqFCkNbcMPRFv9zJx2gTxnbEq1Y8N1vo9bc85NqR7BR5By4DyCnNmhiZEneQpcuUiFHwFJkpXPFX",
  "key2": "4z6KMEYrrXHP5nxRgMHWnhT9ANZ4occVU9dwtbPjrKivqcHsfPAs1EUNbEUMqbtkSscmTw8ebQucR5GkQ4wfZRjA",
  "key3": "sABvwbcsNKrmMFkJGD7xSTPbmwphNCw6kbQ26hLjb3gngXZAZGUavTWQWqzdvJC9ib2J1QJYRukpWjjb6gs6dS3",
  "key4": "tGuDahYzTzrFbvwcTDVY2ZfCrttr9TvpyHpfZHZWQq5AAE9UH5o2WhKYatXuZuFoFEZfoJxLZ9nRrABrnT7sJdw",
  "key5": "2ZEVhadY4Esqoz71g4FdYwE3UmRX8Kf5uE5LvmjzioivCcViTV5x9JMSgmnoWAAbWpVoqzskgCTssrMo54hZws1e",
  "key6": "5frrUA2XmvXXJeXAwYtoZufxdw6F8U2Yc1emiAvdSXZduspuA6SFAEuQDrSKUbC2sgowbZdZZet2yTKeahurNmL1",
  "key7": "4a2t4fjzHiUyxtxBkodUMiY2cKBvr3XjR2YhoUqVtCW9NdkFi7XFUFT6zbpebXLnCeSqxWBsyM31aG2zdiqMo7ob",
  "key8": "2pWf2u2mrNHLXmgtEeN3V9MBKRwFDEiae6pyfgi6Jx63tJQAadRVvG7N3vYYLCWkL3GKbQuu5hGop37CufWeLh7G",
  "key9": "2X5K7ww96SFbf6SYZ8uNQjDedYopTJ4gm8HzM4fZyjAfkEPk842Wsbd9b7VLkRLMPMbjAFCQ4yJr3935EMsgk2C8",
  "key10": "4K6w6YX8KMf8NMq2MbwyMB4dqgyGiSF55KgaXtH5qVjw7NAnPyE6aJH4Bt7RBJqZpWyYDw45Ucj1Kd1TexYGCo29",
  "key11": "2wRHjzUV9vb1BKq952pbummGKNNkJcJ9RxBrvL5NfzY5JLP4RSqPEWahs5pR3SpzmyXpMCagnZJNG2rAHoVydspf",
  "key12": "3y3VQvZPcopKFGnWmhZYpGb1nMA5GYhW2uUAi8q5drcu5h3WZJs48atMmgU1WzovejFGGB3ipLjKUGRJEhdyjrPM",
  "key13": "S89dtGvYGEqspnGUeZnrHNY63H6kTuAtQ4ik2Ryid9acgiYFhWmGZE7uNxLGtKaudue9dzii7i4ZHjHoLY2zC9p",
  "key14": "4HHqYKqhCWiEWtQVBbMCmsFQLq35XN7o6434fgoSq6cj9GeiZnfe2ciU3JDRne8FhoTnAmDfzpAhe9ji6u31W8kj",
  "key15": "3P5v8TDctcA4YR1KTzR9sJgUQtSrn5eDeyw2Qa9n7BRY9WtZZDFoWa7tQUU9Uw37HpC58s1EAcHq6LXw691TQgzn",
  "key16": "5JDHNekcoUzyyXf2dMfG6m4VUaQuxasEnGWa5aSbsGp4iVF4J8HkBCSragExd5ziTGxDwKZ25zGC9pUNtUk2QcNo",
  "key17": "4Qb249YJHReBUQPW2BV14ZY9sqEWmsAjsYZXGtw3cd2Dpfm8Xb2Fzh6TPe66KCAQmedZytoMEGFL9PTvw7R9bSn8",
  "key18": "4R3AG6tqBrLnP6vUPWfYNrAuYNCARfUKTyLgQYqAkaq2ysoU8ELYgaWVf6KrRNtqCEkDZWEpZjkLzx9AoWncoSya",
  "key19": "8KK72Y5LJgrNNato3nPUQmbws7hCksAuP1bmwYdiTXFV6pc3NCfa7B7VJfvFKjqm1LNz3NtrVu2rVtZzXDW2Ffq",
  "key20": "3aJdPbqtjytPxW9JHapiw1yG7C1CrmDcyvf6FBySLszLdmUAUcNUb8tozvsXhPcm9X86VsDcao6bgVmpA4Zd3CBi",
  "key21": "sPhyAiCzf1HJnEgGAEixb2VSp863JFAeMNtepEoQZUEyZkFZnPuwNGPLJLCnMJMomMaxnViheQ5bhazcqTWzcUz",
  "key22": "4GtrQMSnrVrtBe7EixfgoDJ3LtFTUNsYtJHhNPzfp3eiBS3fBxwLKuLAjW8Bg8BZ3xyd13i8gBP3J2edzsCaBmXv",
  "key23": "P7k9EzXq7gEa6FJb13T7s1dNzCDaMUoYvfFnPLcUJBv5tmW8qCL1XfrBPW9iGm65BAiMQ3GLjHB6UTokqXS8aRu",
  "key24": "1uGX7kMDx25QsHJAB3FZXGGjJpwdNpaPq3199SZ3ythmJZoj4p6aoAxZykMR8YCG9SVHAd9oRwwztL7jP2keaaA",
  "key25": "4bV5u9xVsLQNMBZX1J3QLJ68evwKwWui52d6ybyr56EDxzCnpPzzmrtjykkwtP5NW8hmRXnm3kxbVW3frQp9n4wx",
  "key26": "2mkrNydipuGEXuthxWcYtZfzuQ4izkrPSJxCyqKeZbEic5EJ7NnZPmhy5w13KsUXAFj7AgUf5huZAuVVaN96bftV",
  "key27": "51fPMbCn7JwJUQgXZRgC7GnD1f1Lm1FBkFuKE2UZMsh1r3GqbV3o1A5cEVGV8CGxioXnrfsnNBPgwkCMt8wztheU",
  "key28": "2D8pniUougRjG33zmvwtHmwycanu7YxSb64FXF6W1VsmbD8z1s9qLsoyrmxdEKM2M2YA5w6kAdHVRCohw7XgS3k2",
  "key29": "4kawKQuotDvxJhKkzrMPGiZZgKVMkVy2uZFYSaDKuoNCUA9BdgbCTyqkEcok9n6uS3BEejRm52tmQ7LWKJdTxix7",
  "key30": "Ni35VJnLam99VtaqCKuJq1EzvGxFKggkcSSaEg3f53avPJqTqQfhiAZaXiNHQ3Yxxk3CgzWC8wuz3fnPfGkUXfk",
  "key31": "3i8uNba4u1Yv7m2tJ1bvWuda62ppcebXXvtMAaxwfwBgUacJk4PAe63Ju4hjAgkWAgEAEDSuMsPqUVY1PWN3oGZM",
  "key32": "4K8VMeKKKi5yybA7CGhVg1T87rcmTrTXDoirZrCmo7z2wPBbJ3orCUXZ5W5ptyxwgL4uutEY7qSq5QQNAkqqbnXn",
  "key33": "5nMwLsFLxvMRSfHVFCkVXnkpNCCZo8JfqWqF74gD7jzHGHsiX7U7riu1TXsxzj3Wvmd3rAboJdMsCwZrCEC4LBKs",
  "key34": "64VuZzuVtJcfdknRgAEhUR6RS9FXy2CE4gcDN5Jd7ZAHkT2JXFmRxbYYAsGymWSJY7pQ5dzFBsagD88y2Y1dFMnf",
  "key35": "5jGDHFxiVZzcRRVaMcSKqwURvZFGKtDxjDFNadm4yd4JQuWRbGMTfB3X4khDQaMB1HiBzQFWuDgFjkAk9mi6ZZ1n",
  "key36": "5izuToGRR3rSJPtj42t52PvwcaCeP7tdWNHLA4YL3Wgc4cxz9XC6mpyPeGfbg8WWsFErGCtXp8RNaJHrEffZqKfN",
  "key37": "2fTBDbu1ei33it43LEQvi961z7q42yT5YhouS9ZBssrT3b24e7SkGJvALCW3xSbAquMnKmyvt5LnGL1mzds3nbDz",
  "key38": "4z5rTLPxAwdfZKA312GBuytMqEnbKNia4GrMdZkwmxW8VnvCNMCRVroMwZTz3AFBgqzdiSyg99jgGMrBySWfpM2f",
  "key39": "2fWXi1GE2yrEztmzB4YQdB9REiit5TjUm71PwPkRUH3yYLcDEYim1eo1tuWKQduFjkexFNtD59uuinT4TyqFgaGp",
  "key40": "5UoTxJGLxEGRsUGei7yqPdXy5PFSzMfNkuEdeqsSyEgWypx244DKNWKN27HzbWM435Ag4BAAHMs3TeBXHFFbdUB2",
  "key41": "4Thae7QBjemP5A9MnBe42emqZqNA7rihzeb6vLAXTprrz3LD1D2CAVEpLup4uWHDA8tvzrkJhpt4MZeA7BymEata",
  "key42": "gFCRpegm5BM2ZHbnXW9Hv6wVPT9fYfo9Xwy7Las7Gk6U7Rgpn7QYa2PKxpGGeSbuor81N5RB2kbVpudp8MgnQ4x",
  "key43": "5CP8KWbGkXQUVXxRQ2X29owY7JL2SytSwGA7dS3Ff311r72vVLyjkbTwYhdF83i1xYqoYwKjjm2h3uFq5WiLwkUx",
  "key44": "QMipbUjChNvS3kPs17rjCvcDmVuSVrPqrkHQFxi5f1bkq4ctxt5nsp2GxNTZip5Yp3eRq2gp8cMPT6b4yFZc34S",
  "key45": "4mqbGPr5shjGb6UcFj5Z3SPkxZABDhDABmrNL1Uax8gKdHqYNGdk21oQAEK1Tdkba7B1umfj6quLmDqp8QviMZGW",
  "key46": "3FxGA1Kgo1CxfzhSdW9RqU2wM8eDgn6xhcFUmWy6PUfmqebGxAhwPanybhJ39xvscVBmXSHjv6dRc4DHmWTDBSe8"
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
