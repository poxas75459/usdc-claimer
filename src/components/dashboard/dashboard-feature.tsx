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
    "2MkTeP7iH3XXsnpDycoazZoP6PsZvrXukTGTzsp9Ht9WeTSMtpdSBQArzaPycBaguQyaT8LiGxkuRcAo2QgxReTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CLMo96GYrSQP87AfLPM1R1s8Cww9XaTFUfwwwiUhKvmU6itdyspwqEXnwiLXgwq62XBJLoBxDwmPXaE5uGha2px",
  "key1": "3RmTWPTyhk9PCYmF74ceoe6vJKwWqMuWPtFW92rJqUv91c2HTua8qTAHTjvPFkRjft2PDEbjbxHqGMqPSsgibtLG",
  "key2": "rjQueBsXmDX3sDZH3KfywnX9oyVCU4jhxJTCETaRsptGDbvTmCFh86h8d4hxHWW1teSmZ6tg3BDKVKPMsZzQgFX",
  "key3": "3iyULRx4AwfE2ZqfLsL6CPpaLy7uMZLZVJceptFMHdUHyoRKTkAfaEnBbnK8UiSMNjYLgswvDfFEiCHzA1opRCFw",
  "key4": "oPNNwv8EaZtgQagTQPAoyEMfPfQV4m4KB5g6UcE3HmMityMX3ss3AmccNWaapMSnxWPKb4S7NdBAb3TZg8m9i3a",
  "key5": "3JPMgubMn35Nm9YWErmAkkZzUT93TQtimZyJDFQb6j6LN3wV1CFfM8Zd6YknGk6xmokxKeoWDxSdctr9vhd6A8tz",
  "key6": "3Sp78t3s1c4kMUEi9kvGTAiXeYfvwZyKEGr36kpskmqu284JEXKJgFHoQgiQdHL9zdMDwcYhLpcCHwQboSQSY621",
  "key7": "2nJZaAPyqgd2fgZmvDB6P4ppWDdmKCeMTWC2ZcZhNEkWQPp5QzARH4SiQD8R8wJ8YJkKYbyiQn7i4DgRHR95sbkN",
  "key8": "2qryKrKqkHSwvNXHxa7ugy3LgWBdGxsD7W1fzW7uwD6oeUyD9R9uPLiT7JpgrwF2EUPvPJsmMyoMGheqzzWJ4Q57",
  "key9": "3LEWMUxyjEqLrNj2suUJLcj5big3ocWwd9HTPeoNmtF7inx4YpNcVyMVoWnDB3fwYqib4CredVQfkHVYDCTBSBfs",
  "key10": "2Vnc5bk489UJmN5TXAeMdBLtozdHxc5TR8MZ1TUayAkJR4CUGza512ZFpedMExpkroY5fa843bPcxR3JfEuqCRLf",
  "key11": "2Rz8HYsUCRNBvsCJiWxSrP8GFnHhTAqXMedutwuLVZi6ULWF4e2vdFwPKrSAsvG3acosyotkVBCgdkKVpp3KV3qa",
  "key12": "egJFhc5Ei2PY33oeY1bjp52ubzkF8p6wnBFzbpXC2VJnTPWhB3J3G86p32r22zsvhqz9y9w21iK5Bswx3NjLUDg",
  "key13": "2EEMXEfRtVHQKqwnUzBtVKeJDuqUi4eCtGPahoK8HQR6mwHxGZDJzqatjgQLPLh2JSkPjycdm2PvamBwAHhB9xZL",
  "key14": "2uCCg8ycst5B2yUyWeRLq7h7EQcrKDW5qCSS6PoZqEPZFXWfWXspYYBuexDabhCCgLTsRMY6gAaxYLrXXNVeJUN",
  "key15": "4rCXrHXGhez7Ay4XM4E9GmDzmJzge2XS59oeEb9RM5Ehw29i8xL1moQmJ69YJ5fM3cKoRU5RwDQADRXtuNQECcYM",
  "key16": "4hewiis8t5raQ5EmFwwSELajqrmYAeG9jGstwGvwAJBU3QW9AUn7UPmwMuWNstHVjGSv2DuCHfDsts56ezEjhJmi",
  "key17": "57y5m5Fja7bcpSEZdTP7Zwk8kWfE886wyJudDw77SYxAUdrcc2z27rvYPEx1hYnMcLPDh9fFeUG4KcmJ7Q4aHJvn",
  "key18": "4tLNC8NgF1yDrFtsSu9uBE7P5vBv8WvR6wVKsJ9nN8QrdWepHAL9CbK2CvDvS3zRbMm4FGGJ9ggn6rLBDDmCEvkj",
  "key19": "NqqXkRk9fdMktwqBzq6G7nEfWobThAFVmsa57brnWxv3rqaiPAhwJLVZqewWrJcUuyTSoUeKn9NJNAxypethpyo",
  "key20": "4UBc3EiroR4BLBFsUXL4cKXQ6Svd8qxGGnS4jkGn11YZcSktnqpUNkrmykiDX4bwbVHjdfzWc1it4rgz61kNNrLt",
  "key21": "585KHQYN82gip94UB7rUx4ngpPoGp7wTB5Qa3U636gwipc4edzNWvUN1ikBtWP5rjTJE92YLKo6Wo9PctzsXEaig",
  "key22": "48y6zojME5sFrLvPHmHY2EEe3FuMdvN4N7vqf5J6Dey1QPhbctdtiXbi6anBueNcGZEXnmX1sei9CUrU7TPBQos2",
  "key23": "3ddZ73fdBbfLGB8zivGsMhS9zyyyRwiSiT3GMtVquMC6Abjed3n1SteH22ZSaSUkXB25F745DCrPE3Gg29Taoya8",
  "key24": "4VS2kziPon7noVaGUDqyGCuZC1uRqXCSSQHueqzK3pojPgsJkBYHiSvKiVd6kTPbE1NWkBBBo8efDdATXvsspDHa",
  "key25": "5yup6M8bg8ZBtGp9t9dsU6UjFQKnb4wJRqcm5YdoswoidPmtWdoQYryWB59PmwKusiz1CPcqCA8ryDAnZQdbdDos",
  "key26": "4oH1tswAAt5UUeffKYFwNMKvUoDUwodMLoBXrBsqcemcsUU5Lg1iPxkaP9m5LPzVGVFokm1dRaXuV39aL7jQEsof",
  "key27": "2FiGDWvtJ5B8Wg6EbowgFNs2hXNJsn4a3Tfsbrs3BGvgQoKBf93qDVxxH8L2P1bKpWk2QUYTTCoy6dq2FaAxUuJ",
  "key28": "23ZKc3G7GHBKxVxKYqBR3XuKQTrHfsdWGhxJouW5mc5NZNS211VZFgnLxumnvFeZehMcQEioLa3cBPB8hovnmYK3",
  "key29": "5SeMfhA9dRG9iE6h12Bv7DdhJsyQsWM89CJnUsHrd7WuS24ohZXsKc7Btr1AKozJYN952Kg1occ6gEawF2sZwGEB",
  "key30": "eK9Ziih13takncdtrSwL6ur5K6j8aApvtkGaf7pRXr765SxretfDRj1GKEE8CiQ726kG4EhdYPZB4VyRa2vfFwC",
  "key31": "2s2to6JxMmX8XhYaWXANLWAoe5oNwZ5x9D3WB6RxEWEURVCsRP7JjJRNzr5SYekzsAc3ACfDJy681sV5MFL6Euex",
  "key32": "4ydghwZimsz5fRtBpioizPrsgG68tEP4xTQfs6rXduzXpSP7WvGhHUUprxqcZ6as4FZEKBitYQRwNeGRgAwxRyFH",
  "key33": "5ByF4XnH98bxTbjrJawvKmXAmZ4RzYvY9FrsiqsDS1xeGVUaAwREnmS2UM7kiSUWTEt3Ny1tQrMUWqq7cW8ofv17",
  "key34": "fJLsnTmzg85HHRXAuv1qzR6vRiXyzjpNLkR2Yk5pYqfdTrbdg6W81fSmQnpJzfBAkb5dXLzsHajthrVXhHZRhPw",
  "key35": "TZBEAE1g2MjF3M32rr72LHHN2qBkJ9naaU3dJPS4n5MV2EyDG6ngSUKwYVzqXsG9qRbarQSBGF3rpHyoWCSSZqp",
  "key36": "5FbqA6YC1eKchDct3bSKDZ5QjnySeww7mZbbzdA2dZrw7TX7mXqhsTyWRk4PFZo4cvmGznDYHLfnFXmj1gKsm5pN",
  "key37": "21tgp92TQv82Y6BSjUCgvvgvktNtbbhp6KDnsFNomtHCbDCNfpT8GBzprbVzfriyMZgfY8oP8GnMgTcEtCP4cznv",
  "key38": "59WEtUAKDHhehMPAMGnzv64LBYhgC3Ku5CKxdfriNf5rhgB4BFF4bTctJ3uj7WGuPS4sRFj6KWLgsui2C8VV9Gyy",
  "key39": "5szpxZF1wDshHu2eXKrALoYnvLKYoxM7B3fFfgh1bKbQ98dcA2ecQ8HcMZicMpTDki863Bnv7XqozfCwzGeLdG3X",
  "key40": "2AEpj4u3yh3N8keBxQtjypK6JboEgp1mdRkhyU9YBueH4BWYaHgvPKScg5abz3YqjXHqpRQTeMm5RX9A6PKUQohA",
  "key41": "63ew56t1Dy7A2P37X2yH95vLeZwTjZzsp2aX6UPHDeR3FymWjfZccQP9Gv6UmETJ5PMRbZtgPxj6B4gw59msQLXz",
  "key42": "5EeU4pdPutaK2WE4LZgc4vaj4K8wtA9heZdi3vM1tD9Axfz81tKCx1YBrtfzyvC5KqABTkLtSJwZCAV6qkGKif5N",
  "key43": "5Me15A73snEUG1Sh71ySkDE7tFBm2FhxUramQmYeY42ncJq9Mvu3eiG6pvKwnCqANiLxymy7bP3RUBRP1Y4RqZoB",
  "key44": "4RdMCkL7ymUn5HUxLGqjx88Si9tJzsR3PBWptACnMJg7LZRsvbYdF6Xawc5eHCmm7TzLeV16ghsAicwHmhkwZKd7",
  "key45": "2DyjpNv5juLGskvcm2FnP7geYb8fz4KSjJJKSGLjH4PvAgyBA8GYdQhBpGGENhm8J48q5fBwPQb38uD7MvfULRDP",
  "key46": "4zd5fo5zh1F75hkwnNt7F3a92pfdyq1UoXWjkeEBmv4LCzFvgPdPM99jTy3QDnG511tAq2r7GE1ujMpd99j8pdq2",
  "key47": "3zr2Vda1zSp9ZojzLYWurxpkDRYCdKzYBNAqVujgiqKYBTwKFuB1SfFUF2yRy9KR1prakLuhDf6tyxLumUAHatN9",
  "key48": "3XG1jhiVYVqRMGsgwfc2vJTiuiNU9hHUh6HwqtbEtgGakTpREf5HQ6UJBcgxnTys1d17GTHYU7TobKqgybeC1rh4",
  "key49": "5usRNBL8WEYb1TQUUCuhCeVagCAK1H19XtY5Wm2byvPaaTe9gtdnuykwvoTooQWsk1aCeHxuXTmMfD5YC2v34WYg"
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
