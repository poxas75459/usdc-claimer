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
    "G3vFyWLS78cKz3SFKPgzK1xzvQQ1rbV7KcWBSrpA56ff3rMoZit6VjtTt94mSaz2J1AohEuejxxncjstaDnJ15d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wn6M9WF6DgvZmRuxE9hUUY1x7UkGAHKKqDWfwst1r1ZAWHqkZRncEExC9pgYpnQK7LVUkoE5WpssYCsnKcB4g6C",
  "key1": "3hFiRmRCLcdoeC8MNk2rd2zbMuTLka8yLzrEMn7HJB377Sk1AXickHHVpTEkd5GLSP9y6DBVq9uusKe1zJhHso5j",
  "key2": "2RkrfXSNxGmjdd8xWDFxBibLHrosJ5tSg2KAbJL5tPD5PFuA24EZaLmmwE3xMyoi3ySWguywXWDAbEnkx27RyUiy",
  "key3": "aRxEwZbPW4wSNPMNE3zt7rUTPUUSnyD8898Ahgyq7tLWHWZmcRjknVTNXJ3TC4g8Y3hA1XV1Zj3mqZrXhez7ctn",
  "key4": "NcirsmFbVPfCcx9PwtBNLksrMV32A81BHNZLRYwrpLssRwM3FKRNsJYeFxXtxYMBPEykCUVFKGj7PkHGKr4uczr",
  "key5": "zyA6w5ku4gaw8pwSzDfxdzrXiHgVXAzrXBMAfUiHDw318Bd92ry5s3Hr7Bhsa6dDrMsa55APDRyrJrCegHarpKk",
  "key6": "ZnxAc9pbYWhme9XAW216yUKJLEYUq7rK7Nu9kpYaWirmx6sQD7iM9Qafq5PVASUtHUqdvyVJ78KhRkyXnq5TFiC",
  "key7": "2CgMWhp5wqaiHH5pftEVPNGhV7SfPdDBPJzDVx57aSr732Vz7v7qkXQrFcEj1nCCZC6HjWqZmFy542DhmWJMx8dg",
  "key8": "4zE44mnwhQiwik2P6o9KSZX6xrudz6NLz8t4ppmSodLLChgKDmsQB99Q7eExEwUTfLgkTugwaa1pvMj3JEi2VNrt",
  "key9": "3Kemo7nLJo1pRQK6udC2zvmYi4EEwyAvsV1UGth8mS2WqyTHm3FhwMjhj9JVjuL4eQ1fbE7LQEGSiZWPJGe6cEZP",
  "key10": "4VgkvUQXbB8fuyK8ep6xJ3hLvWgSd9JyiBgAJgbst3J2gEMo1zHKjETYihkjqzazpJWXgdVU7ZJ6Bk1nGdWPTtB",
  "key11": "4GSnWnt2ks9GDTVXvHTDt8EdF8D1m6HPgrymX1rHxZ8RnkvaBVxnGFyNL99mZn51jnju9cafppKMZD452bGbP4v5",
  "key12": "3kDbPgRHc3ceTaU1CbVDNSgFSmmdVtWXnRcgixMq4yZpbRGbnbreYRsnGuygcupyv8LqdC7h7ZacwJBcE87hSE3M",
  "key13": "4WidjFHHsGJPrVzFS6Fp3FmGRe9DB2B9JsLYYgXteEhorrWuscadhmvjLXFtTu9ViEpVwatVV9RSFDdbpDminqau",
  "key14": "5sjNabRke9WLeh5zv4JZxRXoYnfUmNaefrurwpHqAWq174KmScHTe3um23SSzkqhWGq4usmmibjDnarwTSuex25A",
  "key15": "5Bsgd5Wtv53R3CsD3P63tfzDM5wpgypvwWN94K2UkWufpgqhLuHG5f3195yXwGrijHgDztAjeebKwZKFGKe21xPh",
  "key16": "2wyaT11oGNvrWWxgoZ4py71zvDnH7jVh32XRdkUXjQsDsdCuHtNNhnTsaJ6PThmMW66pWuow5J5C6e67CVMpnuV8",
  "key17": "471Ygehjb492wnRcxnvFM24kt5fGhmsJthwthmvcrj2MDt36PBrn4xtUamUSzru17sgE1yvLcwdUhWxbH9sxPjv1",
  "key18": "5bW1CpkvJ3d2JZk1UsZeXeohxUfrZrcrci6nfiU1mhTAsg8YK5DFsAyAcC6uDYFZo2ipD3FVRcitrAgHp8XpBces",
  "key19": "2qwDPComYPAc91MV6K7iDZeHSgco3vrUiADPGTMVbQN1bgjSfUTWcCYLpCQrMTtg3xjD6fwwDurWyp81U5BNEuKX",
  "key20": "3hFyhAd4EBX3KT3LD2jTrq9omScwfwwqY6Vk9mxw7iSc1D7teZh5SsKA4fdxsRP5yPqf87CH81nQcDoxXfpeu4RT",
  "key21": "59a3Ee3p2Aq8eVmZMof3owNRz5JA3Nwq1vMbLPkvTHuJ3HDiFrFoURG3wGTYojTYKnx9XxTxdZxSEMW6DCiSCRPD",
  "key22": "4Y8J7hz8LCfHhY3fJpoQbjC48g35df7GLTj4YapoK53deAKfMvWrH4X1jWek6reew81xUstrqXg35HYNVDeHW66o",
  "key23": "5KnnZHCfBCcuDS58KSouFUsKXizPzrACAxLDtpvJx97Wjh4K3Sm2QafcBWcrQeK6jenfX2dHWrPZVELxW95KfxXf",
  "key24": "3WYae95Vheyq4RU54CWpstZctfo5JytcqFUY4Wbom7LqwHGapbN8sfUnR8L8jp7DoJqE7AkvawUFjJRWSM1pjnMC",
  "key25": "3iNfa9KQ2oHPUFXLqi5jKqMJ88R9XcuFPe7eN8kaw3vSKBbmHjGFzfQDbG1zMveo18SVeq1kGiuy8yqZF28uujtp",
  "key26": "8Yx1NXHPwJQoztwDytXoydVdm1eXWtyYERDqFKyUvVs7vt9qf3CFdybt8VjPRcLubGSqDgu8bZSaP2XZ5acf6FE",
  "key27": "aJqaEUrsQu29kZe1tGjPSrMt3a9QqL18Ycjyis2jQq3oBn9QrevpkUCkXyy4Nz1j1i2ASmotxW54SBHS8N7bxqC",
  "key28": "b1DEM1jjdECPXceziaTaBgAAj5dMppHVWsp2nVT5R147HkhUavcYT5kttzJ9RxNw7dJpaoSUbZe21SBpqYtEAsA",
  "key29": "2LVRjdpGHjUirTAgMF9SfYXdPdVFMDHBysi6mgk8dwbgQFAcbhUzXuzkLCPdbdCRrF21Toq2EPhpHRLubipoViFg",
  "key30": "HHfrdecche9wEtsrSPNMu4ZWdVHXgevef5Wf7493sfxtQ4pdYLUurgaNqnGdtm1VKxUXMdw4q2R8DbpqKLMkEon",
  "key31": "2dfTxb34VG2hWB9kpMdHYKo17FqFZznmggFJXsuBs5W6P4eKkGg3rgnii1ULnjFiWT9fBnK8e7JeNg8FRhZgYHWF",
  "key32": "4KySEvJ1j95EJ4hTta3mHHwTJohPg3M1cUDkBgEuqYtj5Nc6AxqA4iRN7nZ7Mf17WxP1zrTd3qTCamgtEuLmLicz",
  "key33": "3u2ZYZjZ2zzfaYwDUroLCLeCVEMJfZrDaUaudLc6tY36JmgyUGeBLGLuGNkb1jELbZWdbgPGpQ2s9ksLxMPUUb4s",
  "key34": "3Tek43jn6JZZowCauHsRQ9UJoJD4435oZWPNnktBohhFLWqsp2ofPZxs9LdvLgVVwrViyFXCVUhcBMBkAzVw2D13",
  "key35": "3uzh6ScXj2hW4b38DTkiVCUsaz41sZxREHkt4YJSc9jJc3cK4Hj3hujGUXbxrfpTeRiYc8kD3J85zkmukMxkzNp1"
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
