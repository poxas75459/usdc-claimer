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
    "5sEpU1Nb5EDzhUkzNjB8u3MZapD8Syi96bj8ARLJUNmcYtjSMPqxFxoPy8F2s9mTpTcJEijcGMXLs1m1YCs5fcmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P6L5oAMAT1SL24t36A3wpQKK8W5CtpxAwaSp5a8NEr9cMDjCsyR5zFewvgTvE6hdnZC9gvVNiTGmCW14W8UyJ5G",
  "key1": "2EVLgVWHKmj7goqWjJptzeqcDR5DNLpye9NifD99YzUrgij1z7p6deGgDNPjiy8YK1JDCux6ajC3P3p1c8YYa2KM",
  "key2": "51QJmb1AD2MTnFJHJ5f5NTCwtMchgcHSDampBPEpfLJYHgbvUn2WTMQFAVkMivHMN91oWQzdpadJhPzbcAJPR58q",
  "key3": "G4xNw5DCDo9kWSyEXVC1v2jbz3Az5YMjtL4JgPN9kSUXCmxV2DyeXHDarUFKMKkRxet3W8Ur2v7kaMLmNyfdaUR",
  "key4": "HuBctzhNz7XDqs6v2ZmA453YiReicT1CcRLCzq3TtWiU5fL1x58RbT5XFouLdKk1djcAtMbxPCms8pcN2af43fR",
  "key5": "36124sfbbpUNZELwzSkoRvMD3N5sGx9NWQ2xgabhBCRbRU7cCQfrL3XPuPCCdyMbqfVrsEnK6GTWUjzraQFLSd6C",
  "key6": "2uN85pSXByszW2hHgneXAjCnjJ7FmPfawmNy2AWaAs186oAAiajahmTCZvstnKSGF7UDN6CtDQkNcvDqtQyG4WVp",
  "key7": "51xJU8tCBQBjGSkfmANDSLamLLrsnJBJRrzG6MWXdSKJ8hVCWkgMCYiAU5MndNoEHGNHNpdvAwE758XDkCABaLyH",
  "key8": "3AFU9bKg2isgKUYGyQwGpmzfy7DsEMgiE4dBMbXhFEFSXab8WwYwn3n45SsuwuMPkjR7LJAoCYUcPG44HMkqzJk2",
  "key9": "FduTXkBxcdXtVxScrAWDj8HcuSfxsonLYGMaxgAteWZrX4gsT1Agj7BNxTcoChFKnzVomJSkyvzhJ9Q4BVu11sD",
  "key10": "Kq4qgFYWWcJ7ijSPjVTq6MV6NNnnJL8szb1oHzLqHbMEPvEEad9bVRceB7uMDnXtzt5jnGUz7sNNzePF9CaTM6e",
  "key11": "3sF5tUdUHn4deYYstWhLdfDKTj9pCUybC5ziXsRda1yePtcDxpDgV53bFBHpMH7jjPNuAvdNwcKguc8d4F4SkLwf",
  "key12": "oh3thuTRVsq6CvwGSH1azoX2RB6swGcYLgYhpHbeJuJqvbojRWtAxSb1mGpsdv8jw1BuJkX5G7FLxB2ycUtZXhk",
  "key13": "5oc786vhFMabTmkSid6QKjg88jceZ8K8xjdQsCDDQoVapqFhekqHnYMDhRS6obLFB9RqChQdVa3nqqTsuRjnvzhH",
  "key14": "31Jo8NisYY7PZe1bCrKxUsfBYRzdA1HdWQpvKsio9k9am3qHGc5fWdM3JT84rv7EfonFDHPfWfcGV4KAVG6EXaVS",
  "key15": "5vTm4rA4GmR8mhGTiw1VGPQ6vL1hf8MWNXiY28cHwh5gwxtQYKUgZMWQKN7zpXjJsuvcL1XQPD4stmkv1aHmKS3a",
  "key16": "5VxhGnMbzzaGoN7HKvwZd8DtuzaaiPGEaSbugqSyiymWjWCGDCxJz1qGuHfVGFiea1VVoFBoy7r98UQbx9AypCAt",
  "key17": "31Qk4yWTtZmbN8xBZVZvn6tcXntGJNvinnye33L9gayrKJgBvcdV4RiS1pV9cQjfpDMhMFmTkAmPErVmtAPP8fkZ",
  "key18": "Lhvc976G4oHBRn1hcMzbS1xxAYMCKV7ARY53P5UpDYsZZGzrtxfWkvWGkLst74FBmL65FSNj5RdSk6aQYPbr3h4",
  "key19": "3jBn9SXxJxLwTU8Gy1QU89NVrZYo3B4pEDnWZUZ99AA4J52ehPL4urn7LpBzDcvcsPxRqmHYsuVAez6g2B6JyCtc",
  "key20": "63ZdE9wSh7jd74ifUDikRFY2gCwVt6xPr9ydrWzeCtMM6sdTRS76Uc9Z2SNWjy7a17RuiDJV9oZycQx3JGKn9Zz9",
  "key21": "3E6bRjpHxPaqTuUDQbXcVjPXGp3pk1KrkZnx4wDns8FDAWtbSnjNUx5h62XaYB3bND9nDT3FterCcGRKG4sVyZmD",
  "key22": "2Q9KfdkwsbcfmTwHshGdegm1RX47jYhRk5NaCAGCGwG9Lu1q2g4VBKWXvJdVdRJQJagSaXsTfGCP54D9JUn1p5i1",
  "key23": "2duPnAKhZJdvwpLDr8LMPASXCTU4yQ6KdJ5fGDT6SMDXUxFGgeaLf1yY26fvta4WjE54seWgt9gJh3VFPqGCRFhj",
  "key24": "4RdeGwsgs6ZN1YgAXbzidPsL2urK4yuH75f9SFrf1peEVkzLZL4YpTCaFvibK8Hsp6Ggrt3SqvySwzr3J9aZZ6kb",
  "key25": "4sHRt2iQ4do9AQFDtaHY5chBAyjbGJkMp6jhyYbhSXhbSeF9aokWDWNJjSddAqRYxUvCDc2aMsNq55LDpkev75pt",
  "key26": "fw8xBP7fGvvaiRZXdoooXJyBQjV6PHiQ8bEFH4BmZpmEzVVogVbhTpU2iAbz4KBsrVL8x2vS4knAatfjS8ryenF",
  "key27": "5W4ensUDjoDfjV9PMnLJXSBZGjBBSqXtc8umz8yFzFnuWFFiPAEjE65F9tP7igNaEhu3jwVFHt8Pi7P3YAVH8n6a",
  "key28": "2AcGvYMob96jde5QUYC5ZWtmKNWSWPUcnxecLHd4H4QuPGVs1emWaCuoVApKiyp3CiwemzM6C887dMuGBvB4Z9fH",
  "key29": "kbV8vcD4ByBSaz2UGbarSLN8kd6dgJeetC9ZzceSueK7ZLeHC4WJNDQP6ZSVGwFjoN4784VKa2V9SdvjTvLmuw5",
  "key30": "5NSH5kVbPH7ME5UBFX9i8RBRc3EMscJWSTJd7u7gks6tocCjZc3CCKrSvamh6W8rw5HpusnCCXAq3UFeXKTWQhAX",
  "key31": "4vQqbePRPhwXSHaq3yRX63WVBNCJBwGrSfR7PxjinEyrJAvV4s3RvNg658VcrVnoA2BwnRhawcAHNkhpzLcpcxcx",
  "key32": "2EDUHopEfrESyfSXuNLHKZYAwNwk8yQJvvXnP6F13ht6nWx5i3azFYZT37iSF2GM6CDiqdBdFmnUrYh4Ld72tZRb",
  "key33": "fVMyMb7rieR9BLt5BAv3dTwBrrZY7WQd7aauFXkaBvnTE8oHWGdvQ9525QyPS5psS3zs5EKqmVRbvaTSHzvuqnG",
  "key34": "5EjwiEMEMDmDcS1rpwm9sCp6BF1a3vDmmy7Wn4vXeKX2ZkfxxpLd5nqXNvNiH6hud4kS1pF5pqFt42B39Qn5VfaA",
  "key35": "5aiXYAnygmQFkHCokB1jSpSMg7o8KVcdfJWfPWExLgsvsJMDd9aseCeYkxVXkv4xBHJR46MhPdp75aMGTS76xRAz",
  "key36": "pPe1eeDun8RyD1QBKvaUQ8HpwqE1UQEgB6fims8socS2bLTP2AcfgNzkU8T5etu7G9spGiYfwDHgZi12yBuMXtK",
  "key37": "4XYiG6kwRmNxcknEStmhjkQvYRLEfey6Z9ZRrGqoSShxbioF2GJMFwQ2g9baEEFQQPCzWi1rARyvVbvXe5Am7rat",
  "key38": "4sRZHRgaD85ihcsLoRQ1A52x1qz3pzFENxRRbizgQJadWQXmEHyUNVTKNpsF8MGUTpxc4n3Huq6xyHHwmPUM5E98",
  "key39": "2f2vJTULNRfswo1qfswPvnWYXU5JCq3h6sXLM3J3RvVwxSxdy11CASiYbpp18FQpk28cUis8EZ8aq43sEZft78NF",
  "key40": "2DTuUiETxHUHSWGmQLLztt8EDVNi4bbSrfDYdaaJ49ER4REbPp1BjQkZ2LPwzZG1LnVFpSkn5iDdCzJyfUDodrZa",
  "key41": "3883jmUJ7U1frptrhbvGSxVUZPsa6aAxbahDoYSQ4rFwRgjVRVzLmS1LTQhMwrJXDhPo4N8XHuV4Nn8toFtQTooP",
  "key42": "5d9GyKZGzArgLUDBBTPhNYdYuwTHnJv7UhYANtiDUH95oXi4WKxaEY5zRRgiY98yJvQaeikwhKvrnNxJcWSX6R8t",
  "key43": "3shaUxRjFn6whDyhVdfPG5ynrm88M9zNLnRqZEv8friVGuPvRyeGbntXkibzev6xz3r62bfbfZrUM4zQ5LEJJK5u",
  "key44": "2uJGH51GWDViWo7q5FUyyzHEWe12Z5utH6zLGjVVbLxHR7Ds6dYKY2ytVt3V3956XWu42iyFWt6rB2UpKD3nKzBF",
  "key45": "4a5RbKxohN3DEiF7Y7nQywj1PLujqZ2QbF6F3XVgYMAb1i2yVW7MKEqc9HkLP5qPdSu4c3q9qYT1yiqZhZFBvsff",
  "key46": "5hxjo5aCTtHATqe4xVHT2CJyocNoj3dQzNb4BoRQY9g5z9G4NRYpgnS6GwUGBChpADf9SV72KA2dxJvZNTYCBVXt",
  "key47": "3utZZuEWMQ8BvnQXLALh5Rx44whrtuavh2rrXicLaueeE4mdugeoq7DnXBxKmM8jiE5fuGMBHAp5jB8kSeGkPmHi",
  "key48": "4421csAywdhFS1VRE66vMFRoadQDg7BUtZdVanZB1uuD33mWJ3vtGdLDGrU7bJ5AmDh7HDLaSWnewwAchfhRNpz5"
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
