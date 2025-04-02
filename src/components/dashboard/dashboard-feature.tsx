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
    "2trDvew2adoMdx17QsZudGkrkyJW4HqugoMPG27FNGVC2mM5e3DT1NrVCDyjqHFJBqZUTKJhsDM3po5HmP77XuNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GMyhGG78pQb9dGYx356R98fqYHK9PdYmLcFedmEnDJbzG2cT4bFqHwnP8KKkwFqnL4LYEJAYxyh5KcGBbV5f3Lv",
  "key1": "3xwVaUMWGrTjNhvFxZ5RtC9CdXfAKX6ntgobZkjo74sxBKBB8nysmCw5vgKnStU3xtD3q4dhjWSjE6ns97kxFVW4",
  "key2": "wf2r84FgUGYXAwwagPBj7Jeo9b2CKZH2MkAipaCLXkmxBTaHjfwNAfCcnzTcMCaTjv31dpxatNv4qkqH2rCFEqq",
  "key3": "2j3Z7K5Y2JTxBcptULb5StvcdefX32ufLxBXXAKoZM71K7ftpWTC9U9TuJQ2ST4PP7a5UrAk9FRft5f3tvrbddyv",
  "key4": "63LaYbpBkGkqGc2JjZMH9ZDnS5VrHAYEbDK41Pm4d8uziPtFbuA3JeoMmBu4jqa4pLETjKn2kAHV5X61gUwPYfKk",
  "key5": "4ZY1j59HeNrc1L6SNxB1LiRJ7kAG1AhuhfKV8KcqxDmxyzztouD8x7fFiX8bPLYicC2arefmQnXo6PZ1BExcG92o",
  "key6": "5MZcTgsRF5fCL9sT7TjRT2ZCQmcw62Cam7UmLAthieXxE6cvjKyzVvXegMdyBgeSFRMKSFjxZLXLfEQHQ2T8NsbC",
  "key7": "4b4Y73XFKtJpG6P55LkTGnRunbpE2af5fcXe9btwoQvEn3ewBHRASxFMteZ8rLZT7bwumvKC4EkJ5GmHqHqajioG",
  "key8": "36dgkJj3SGjCMMviEdjuHtnM5SbqXK32g4igEKbfL2Qfoa4DMyaAo1z3cVL3PV9Nws1dcRQh9iXCQU32fh7P1rkr",
  "key9": "28FuyV4XkfxsRkEpjg6oR7tPXQjG2SvfJBrAFkejZHsNqeyEDhdHKnZ1Y2aSRfYkkfF5aoAajTKRVsvCsX2fHEf9",
  "key10": "4CAKpX4NdUjN9ns3AuueEm9enAhJot3NwSyXc6EnPEHa2y32ACxDdskYD88m4XcP7Cf6rprzytpbK1j2eEj1UPKF",
  "key11": "47iXVgrgsuCZcKXAEAimNeViy9EAmW71nACiVAYRPrebsuE7ATfGvj3KwmybDnMYX4AQc7LskGMPGMAdRnsJSTRT",
  "key12": "4vFK6URKHuWLr4rDpc6sLozTDM2dLTeJj3vDwkYDhmx3kXGcDmqTTTiaGN118VwXtssRiUt8yoALf562e3UhcKxn",
  "key13": "3fM8jL6yHMsQaTNL2iANSCa3bpf5vk942LxnXqQ9LkVecKGYtRfq98JszjC9LDeMF8ionhMgCLrt8xNKKab6ujAS",
  "key14": "3YJGtWEpMFdZ2Mh4KMWYYg1vHdv4NrcDB4GTZcrtg9qcQ8hYxH71BureezaPuGpRoPoLznjgkx9VUwztNXKMjiHm",
  "key15": "2tTFthLaV8AsaFb77TiyB74yGadtWpKmB5RUb6bEg6iRbVUQSmr55dB3uoNP8GRZxEa2nyocCXb4VFJdx2AvMMJ2",
  "key16": "619LVtW5BZEJYbomqyFVWRFQNPh2s5D41Jxg9tLDxNFsu5EzP9RuP1vjp2AZKNFmMbQb7F1sxuc2oAXJ9PCvaFWg",
  "key17": "2mX99M2pxkXe48zfyFpjmGoiWPBPtH2WWb6j1TiKRaXGHPcQxjDmAfxhZxiR5nnRM7csfY93Mx2LUPNX95DQjxMh",
  "key18": "4iZyQQPwVgfA1yhAueTsWM9V6tJQYhVU4V9wWkn1ZV9WterN2QrWqLsirxNd2q8bmwPGBq1www6YNahBcWAS9EAG",
  "key19": "5ip8NUqaUya8zucZaswFTqjSDVrxiYn9gT8q8K3d4eFym2SpXcAMsGaLQm8FwUPkbHxG73EuvpARciWEfeZDbJM",
  "key20": "GAAnSRaifFFq4DkA4aT5cutntL1Au4JHEBErC8rzbrG8fCe6dxymWjyW13phyc7pHRrq5g4KG7dRmHPb5AR9yVE",
  "key21": "2Jwz1pgPPDWXx52aQ6tVtBngFtG1aWzcTESvUCqqV47s9FVHsb136wmJFAVc4vhTYZJXqT77eV1XMbtzjwLkrJRR",
  "key22": "2FxQ5ayDMfJEVCuv6kLVNACe1fa3qhkmmh1CbcAHParUwW1U8AMveFvZtsvQSzbGnqUv45XATj8GBh6oBydt5eAa",
  "key23": "5ZfkZwnauUzdxbtEByxbtBEFMfUTCwJd2QMurnbCPW7NU11qkKHc1ihrN34WmHbvYFUfiNenxwhxxwF8VhVAYETa",
  "key24": "2Nsv1QgFjLy8fAhYnxXtx7af5uwQHpxdrokbBqUPpCECPdbrvj8mr5eRREh8xeJBzq594arp4szydTYjJgXyp1PM",
  "key25": "2jD9ZEC5P3z2pfdaPj8DRUVzbBNgnjSetcZ6meTgt8thVzH4ZDpjDp5XpmRgyRJeN2k1YGSvG4R8z4Jr5CAzQnfN",
  "key26": "4Lma5e2UMMCRyRCx9FvtGVdrXkH1HMi4aC9Y2LCQjcGnQVFGGdUenAaVhhaQpth71Ak6t891sMCymkdNM9DYVLui",
  "key27": "3BpdB21xWJeoRTuUG3e5UFkhybLyUfMFRWBACYnJVhgmVDcjwyZqD7LmHTs3RaTJWTjcHnQAkRbBmVY4vrvefMYg",
  "key28": "khgriaBcVtCECcd8V4mXV4dVGUW5jCcntx26J9YF9MnajnW6FQsBv55bx45G33QJLprAbJ3UH27Yr9xvVjsZ53C",
  "key29": "4EmCmPB9d65NcUyAkXtTf6bepjaNerG1xshQ3AKnddJTPjHtepNSomPxQkfVXcir4rufdrRxryyxEPfuQbm95jHr",
  "key30": "2jwAo4BW99GUyd58wbd6b2XVxz31wUMnHYvGuKv9DRhfnWmaeqSU2nKVJebkGvtRrSDm55MxSqxV4UNZW2ZMpZCd",
  "key31": "4BzZC2Rm11Pt5g88r7TThwqbgdKGD5csQ8v99xvURSrGJTsYTGmJtSVD36jfXrXCNKJ5ojHhGdTNod5mS92Qk7mk",
  "key32": "ty9BBamrQreavHkryeg93ZmBfJExfgsZTZcoFh4U2n9kvi66Rf17a8GfRtpLrde9X2YHrFRFAugsL2LVxbjDbYz",
  "key33": "2Mmh7UXQP3eUdXRLcikRG1Su5MLyM5XBaXAKodcRxi5jaPP6TPjeHkTGyPJ54L8Cf3mo9Av5915UiMSPkEENbvwZ",
  "key34": "475kpoSbbEqoNB9gEB4ZThH5pbzzUvfcDMXTKDptPpGNQbkJ4i4yVoycmppJtDBgtVJpy4Bw5zACiLe4czBm9iED",
  "key35": "5gp6k7p7NAheroHQttrgJktgyMLyD6CC3pjFRcC2WjG2QT1Ynfcf4ZY8NBPNuxVzEqHX3EGNgFGCEu2SBcfwZBt1",
  "key36": "4AJkzDmN4rsZrMnyQCjoQsAvjRcJixDjYAqTcN8YuJjf1M2Nc3mw8RFjRq5bFhC7XbuVMRWXKiS767rNBJQd4WPJ",
  "key37": "3ppa2LnNh6A7x4atADoCzfDpQKA7KLCrRiavodqaTMdAqxqMXi8VY2P9acmKgFaDpAL9MAHvkgoZx5iG4mVirJWg",
  "key38": "36iXHn5HCsSFEk6z81XU5jz4rGHXtXw1R3ShW6zKSuLAzSHrqn1e61g3weBVu5ZgHhwqhAm266kyFzfdMtNRcRaz",
  "key39": "59aGSXsJ6zZ2bfHFWTNMEVHNREdW45vYCQRhg2H9Feh4Z4bNsjVSpo9inKQLsbaVHNBrfgxzMhZAsLhvxLNNjRXg",
  "key40": "5bAgjXwU21f1kj4reofjx1EAYLW3ULdUYsW8H6UByr6hR5WKYeFQ8KqCj9gVWjNgGKjAWAA8cf8x6MZ36gpwjBJ1",
  "key41": "2ricmSpebA67nSPapMnsHRNmPTLiQfWHM8yg44sQnaJnFcCEADhMBZaNYYWEgMjZyF7VgLkbem8CpggN7a3B9m36",
  "key42": "3ZXCkEHASsGnoman3cKWJnDGCdVHxZ2aVjZBBgTePKpWNWAX7ScP1XghDYdMXDqnri2EkLdyuZ7MPeythWLAfJkn",
  "key43": "3fyWaqoDDNmCmkMWFy8i9gPoqF34zg6kVKV9cZT5pjy4EBp5BHETRV68VRDw3zzyt6zpaFfs83s1aMHr2W4pM6nj",
  "key44": "4kYpArf1XQutfZBDQQt4vw3L3DpoxrmXdtBNJyNEvVmtqPSr72k2abBZKzHDwkuEpFtm3GeGn1xvP69FRfzLCmJH",
  "key45": "5R7MXoxqp5CTjQ8534vNj2Yc4LMpScUAhXigeS3Ee3hpFzqg6od6KoEeeL3iKPXEZKy8hGAuq1q2vCu5kAXQBZVa",
  "key46": "4BcvLZoj2ZAi3qgdEs6CmvwBo6FdraTSgwCAziR1AurZBJxdbngZ6H5Hjycn5ZYmk8nkZsEqZbNKraJJRZYDocfy",
  "key47": "4ijaafgWAHdqFL1b53i326N15ZY8nZf2nXphQUKe82eJfFx96wwRXbtXt3EGTFXxzYS3GhmiLScV5BY2QzNSfxUb",
  "key48": "5B6qtUar76JQfBnuoMdC3M5XyEAJpXNptHWTy28jyXTCp8gVmN1WbEJ5rs6ER2o2YW265HE68TGrdWsuB65C3YTk"
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
