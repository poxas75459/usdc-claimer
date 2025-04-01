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
    "N2UeivASAtbhuqYFG9FhEzhzvfyr84Q2NLXiptALmHiyRU2y7NQ98uCRJzBQYqiJXtS8cUi7pzQoF8ychiuM1YK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qLknz9Xfmv8Pd7LCdo7oVqUfwYswR8xMTsRUipvcPWrmPWGd1xJN4DcKAHiEQy9K2hQTWoprd34oRG8oXgKm2vp",
  "key1": "4MomUzVxwYAKeb7PpHQDRggE8rkYY9DGEwwsKEQhzhq1YWeQX2B4zJDUVgpnRB6njLodQKhJQsFs6vsR9pmym9wv",
  "key2": "44yWK7rVMmT8HPi8SvUUviysH2NHp7juJGpHF8C8mFBdij95Je5s9zSAjs1nMcMDiH3aC8krpHzQwxXcxzq6Gbzv",
  "key3": "39gpc5m7qmd9fKCUfW6zhgbWbkDpXNb9yZNJacaMGyyswiaZ734soqqAAG337TzPpx8FYuUrEs1iJgAkzYAaLn6f",
  "key4": "3V4wFERGJ6Mr9Ve1Tfz2Lbm44Ybehbjb72tsQmm3g2bcjUviDgGtD7QUctfpBHjm8eLZLH658ErAozgEdXKyhT5E",
  "key5": "4gWVCW2Rew6JbZQwuRh988cFZTDUrva9MNSGubohbEc6uKZ26KuoPFywHrwrEqzspDjGbAfgLFMHquaztkTyp3jV",
  "key6": "3KogNDsMnKc6Khvup1YVjaLYo8pvKfYTyusEJNBJZhGEWqKz2Z8UqR538r8ZZs712SL5giz1kHwggdMTbVgLCeC5",
  "key7": "5d4mwxNn2gckKK6C74FSgyENS6DmpBk18e5r3Tfb2jGGXvWeL3Cp8Xi4jKF8PyA5uLLceMFMgDQyQigMEene9dAV",
  "key8": "4CTZGEVYBNEH9enxe7EQeEEVYmojkfmBVnnWfnsQWpdnLqJNGUeEs9vRY3fBFf5gpYroPNT5RQ6LQyqh8GvFsgDt",
  "key9": "5web5vFvzyZtu6LQhL6Pg81jYe1dRsVhg12wYnNvM5MdqdPmt7T4Ji7VbuRMt2MbYBPkGhazZv6jwq99VK3vuCgY",
  "key10": "5YDuJCaBReS3cmCNVzj9SevQH7vuXZqDHbAVnpfFY3of7AdM35UAUiaa1LAUt1uzsk7NiPcG1RBpFGxVRLvTLj5Y",
  "key11": "4Qu3w3TugoHzEFZtB4N68Zw6QvuiHmXv3L5RxjPU2SRHgJ211oND1bgA3ijHuseXnX6pJNSGDFtarHHysCaSjFh9",
  "key12": "XgE2Wz6HGE5QYKAFyrjuDaPY5tXuq8avxZw9bwr4SJA3pfJufnMqjpjarNq9bDBHjTWo9qHM4zWgdoCHaeQghSc",
  "key13": "2hirAqRZmQjwBtTZcZ5YRq7Z4KHydSbRmZTCiUP5x8saRJ48Q13fvu7adcbqEBR2wxtBftVhdTN3fuZgR2THK1Ay",
  "key14": "5TjueTfuxvYhFmgiqYPQrPiK3JFovsKRdxip8ZYnoAkaE5u58Vsv54DwPCQFSzcQVeGJAVstzKG7BZS42e2aJB2M",
  "key15": "3GnsEdHX6FsRE5mRYUi3QJ9KLxx5C8NGJa2YD3ttty7xxku1W14vDQiM3uwxL45Q9BrUfQgLJsgfhAo7eUwT9gCK",
  "key16": "ypWXKrhg7zrVciWbt5Jg2Q1UyF44dBcsWrpN477YMeYN598FvCWtHdMRaEHd94pL2eCG9GvWxNkTe5pSgBBxQ5o",
  "key17": "3fotaDt2jGjYGsCDxH44bH5aLK2SrQVAMuazQEAjm2XBFMRhDHfMQkvCLBwmXrhoLYeWrH4QWPBvLjT3dCZGEqpL",
  "key18": "TFr3QSWEoTBdbbozEsFmCiDBuBmL7m9gYknjQRvrTy4QZSorKccpWC2vhBkE1pjCSshhzzMsW2cfPWTPgwdG85r",
  "key19": "2fMNxXacjNp6f76VAzMsSMUjZFnscQgdN1deZgnqunJcQaWQXUWmnLTMDQj3T1sMbtQemXKHjreHgwxNVeWumoM6",
  "key20": "26qdMaPq5EjiKAj3Zp2az9imQKLScZbcGpgkGkhzM1NkgX6gxW14FSLikQka5Vb1PM6waUrAEoSqETK1oy9SkMsA",
  "key21": "25SgN9DokswcXpzkpk1838cPBy6tWHCX46Yx7ySTz19pt5AyYW8iCttLYoVqfUcr8P2y3Zzz2PAgVXywxsrQBUNR",
  "key22": "5p7qxp6iiePwWxvrNuxGdFr1hKZJSACbYSnWMfGD1EhUW1URGK11Xt5VMadewhk2DtCFRUVEgbZeF7HADUKzhB6r",
  "key23": "5DGRMbDrb1BdqAD7NWu6pGxyM1i7DDxj8AdqBDDQT9tAPX43MEUUpdPEAsBGygMi958MnvPWRo4dD2yaxsdeMr3a",
  "key24": "2MNoGRMNXY9qcpmK3BPoKFGRFbmGxjuBizmPGGsj1U749TfLTVH85TayBiU3PrzCRSFiGjrqoy14oyy9EMU1yHBd",
  "key25": "39WSNpAdPWpQDuW16nYa3b97djtosHkPXnvdH8WqYRCm67trz24vjRV98Ri5bc5zXJ9wUfQKcKDM3aViN3H4mtav",
  "key26": "2jVwPRYtphjFZsR8T3nZEpAgzuXSiTah8DDn1DHSF6kuf4UYhTfEDAsBzNcPUS45nqyz4yLmtkN37bmvvQqmDLbV",
  "key27": "3HoGSAt6zTKB5YRsVLuLwVkr9rEXGaa8KShVezjiJS89jCcZ2fdnvzWStZzcwbxanB1oFmuzWwSEHMg7wQXeDmyW"
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
