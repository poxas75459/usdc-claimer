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
    "4r2jQxN5Tpct5kxQaLvzy3sQ4N3tjAMwTL75ka4x19nLPfFZd5UNKgfArfHoxFtDfBi4CbAZZQS8StJe7xNwpjrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64miahVdMD4NK5PRqbzqw3bfKpfrM5nFupfRxMv78VfUt5WhozDftCBhe2jpykECJGoFRcmx9MmoQPd67JgG5yiD",
  "key1": "NseDPDKBQR5k48Bjic3og1rGkUr3YZTkNXt95d9vaSA4e91gGGFJFvrUbJqvGaXzrtbukDf3S3CNzrAhGruFv5p",
  "key2": "21DTWbgFMsCoGctpwqGmqTUUXf5HyuMucuaUpRqPzHB1DGa91b9VXbaSCyvRf7gP3ar4F9hgdA2T6vXx8tybePpU",
  "key3": "313NsSPrYWuVqf3V15FwegsuJahqGrrrKucmGyBiCMw7FKhrvNDw8FiVXUYqvKBf18siqQ9g4m3AGQHBtnYt1kFr",
  "key4": "28LNSF8Gj82P632UYJUMTsGfTWCYDizyRkuSQbtcdcBVrQ5TdVXAqZZcymR1rx7vroH5BDjunro2UW3EE42XnFX7",
  "key5": "3Z29Hai5EB2cTUmGo1m4kZgtTaq1hd9SkPRKhgmKEk7E42Egkftgqd1f77hmYHAScXYeZNcdoyyqKCNaNLdGBC6i",
  "key6": "4BxkgZnAbLFf5GBj8d61riCg1gPbjnRbMb7vN7zJSk5R9SzZSz5vM2QERedLvBrWpU2QM6Mj9TabVqYmpSB9NghS",
  "key7": "Cjx8tm2PFWSSrAossrA9rPHtdziBsFN5QQXxPXCgiBAaQuZYFaHQUartzr5fhiLsiFBZtFkthhuVDDzYjC2W9Pv",
  "key8": "4ZMRtHd7mSzJx8erJUpaTKuinzCGq2sZFT2xadec36FMjCkN9V3dpW1ty32WTRkYH8YsaX56wnMw49tB2Pzktij",
  "key9": "55e7TeD2qFXFZ4QaAjnXCRDiUrDand3c3MT6C8MFExnPEskd6YwfANPVoRbMWGajCjV8x588ZbKGftqgdqdKx9uH",
  "key10": "4F1j6BjXyhW9uTSqnhhM8k9ASsLCq5im42nUQvmVpW2yEm71BSWjZm199bF8Sf7dSJSikGwQDGNtnCLVYAfTfmJk",
  "key11": "3y1TujJ4WUsgf43x9DjEc5T7Q2ZTrgFG4hKqYkApVLTYMrq5azYhux6vFMxLc1HbphER1rPrKpTMeky5iSjgTXWn",
  "key12": "2syvoTkhhc4RBHbBkKZr9n25SEgnBb2PRmzEDrFKLXDLWUwWw8s7GAwkqbR7yL3ppUiagopJnYhN8kSZZbWCWoJR",
  "key13": "44pMWvvVsiDLaoT8gm7Z6SM2D2yDe6w8SK25H2PtV7iBoUrfign92f9bxPuVAAkcn9Pt5NbHyEHdtwjVueBx4yQg",
  "key14": "3w6xxc1k46CG1k7sdQwW5AjzzCJu3uEmFhA8H3Por8uGEFxL2hroU7VW4HXiy8dzyfUaw3yiwKCK1yfw73xowK8y",
  "key15": "4sr5BpQn1AqFo7Ho9RvC73xCdpbnpKaYDZJebGdqnFtcA5rAC4HZkPwE5pz77i3rkrQ2XCRsmCh2Hof9EqYVECWo",
  "key16": "5zhVM6ayno3GFwih87onqXyLexKD56yxsaGfFVoProU6TaByTVJdjE1cAn6RMjeXyBDmvmApRtqYSRL9ExNK65BA",
  "key17": "5qa48PZdBo3hwFg79PkQDAKVEcQ83QxKj4LLcDoMsSyVunvuP2pHaaWnYTbYiiXoYb2WyiKWTb7FkuFP8c53zoBF",
  "key18": "2DAWrQ7f3BnJxQuzd3E61LthjjUC7VfR4EitmHWLAo6dhUcJMZXDs8kz9ddRmumku4Q6mzaU5ojwu6xBVKhbvqFK",
  "key19": "5fjft6JhV7dTwKJoJuv4bbxdeEsry4cVxjR6fuGkVWTKLr9i2WhseKRSmEejv2oQy4A641WtnhTk6kXrnAz6KYT4",
  "key20": "52yewRXXdDmLwBC5CffQXbmRv9ngJc9SAt2eN2eKNQy4HVwTe1g8R63uJGjkWzJeKk7mnzEiZ1kNnyspv8UsDdRM",
  "key21": "4zqCin62qK2jxaV1Qoadb8WwE6k8zxwkeNXafD6TQtZBy7wyPT167EjuYXvUHUw1Bq2twHEGXtBBhXp1uGxJywgf",
  "key22": "C3kBfJncforj4JnzS9r7Cn4XYwJwauvNUCU8UUFC7HFMZJNLGmbe4hLUUMEQhoxorrwg4ceh2taoNTxBZfPsK6M",
  "key23": "4aRBYy7dkqTbdeMT5o1hTQUeE6Grspjep58LBceB34EG2ovqCcq6ip4rc7PBatyjFFTu38qNPYyusn7RN8WznbrU",
  "key24": "2ZY3sUoQ7r8CuGnChHodwg7oYtyR8GoLBrqLmsP8Htqwr9cBsiZGUawWBcEtqNqsSFTDrxMCFQnc4KeBpaDgnRnf",
  "key25": "VNjdhLdikHaW2eJz9jxvfXfWBej15dAwb8ViymeAzprNnYHTSuKvU1woFxAaDuVREJjTPtJWLejc78oU92ncWuA",
  "key26": "2DXyAVe2T6S48m7LHup3tfwJfCfYad4bdPi4PmCt5tJeBmiXTeYcb9GNiA3GWQaYhoarJcTHbwtebXqit7N4VkpM",
  "key27": "4S3rM23ytTMKZ9sPDTivQ1dQkZ4JrbB9Hu5xRucvwJkdhxhCtvqRzi2iedBVfrXvnEsF8Bwy8TH5WFD7aGQ7vVmx",
  "key28": "2n49k2M9ULujpx3ABfZrGFWi5tzYPPffYnrTo2zirGL2LFKwd8DNtoMoej2xrcDuLvZYC54C76XgfrGe9DtVQxFX",
  "key29": "22ShaJzkE1CjtUaNJK8WcLVcM2DDsnhuwTRNYpL4z6ymy4nwZYLwp7dVdmrFuBHtPqWFUsSg3CYaKBt7NWfrVduM",
  "key30": "57qi9w1gnxtrJ6iJxqbiN9NUmUfWtm7bMD5vDCyms16fGBZ4aXWHz4wBJPWZasLx9G7XZkhwW3Kmxko42xrpBAKV",
  "key31": "4HQzHWAKx8dbYuyZ9fAPUpTiHsSrNWniSwNQ3hPhzbeZ2JcSLncDCLNpQK7iXLwQb9dy11sKR9SRbbg2deNtE9gQ",
  "key32": "5dEECmsFJFMLf2cLhyvRQLjEhjhbtxBhUPTRX4AEEX7Vj8sz5yBanDR8nkbNyzGytHMzPbrDJuYHBGAhTVCd5qV7",
  "key33": "4wCYPE1hhVm14BKTYYhV1MpmyuvmCJgSKCtbjLnqU6LVRrd6Nh6rcmuGuXhZ5QCoSThiANoxKfsCLi8HSHvre4gG",
  "key34": "5Rf8A61NH7GK35UmvU1S5SfXZTg6dN5A55DgyKe7cMHsgF1vmh1mzsE9kJMuJ5KEb6gYERqLU6oJQPJCqgKmJJRr",
  "key35": "43fHnA3mvWjWeYQ7euQsXoZxV2V7qLSZ9UTCPZQTePxb9qPYdcqwg8817Z2b8dZJkjKxEH1JYNFbaDg5dKapfDXq"
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
