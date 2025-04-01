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
    "3DT87Npnjcf4gNbvqWRSvENp4J7JNQKR4wSi85RFqz8H7tp8qFBKeY5ZZpiFmVmhyup8puJoj1kC3DwShXcgV64p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e6oAYVbWhogpDmPpwbtDHcU3XcK1xq77Hk4svqY1Anr7bvNawHQoZtMyr59fUF14u5GwdCr6G3h46p3DUFLDqVm",
  "key1": "486kvASZ3mzYaTFUtzD6VDCbmf1MLceTjcyhD9nm1wWqRBCTh1GjzKuwGLsYebuu1BGTYn2WtQ2BFoYuwEoHNeUt",
  "key2": "gtJsP8d19aGGzsD2zXF4SAk2unTiBFDzf7Bwpa1JTpDmBdg94GVA9WLbs4gYHxgqpQ71eDz6Rqqd58H1En2u9ng",
  "key3": "4ew8K3XE5KF8j7WiBAzGUmUNuC18DCfj2x4wn1drhffuxUM3py6h75L1wbgadeV94vDb4Pcg9F5xvQQiGJmm2qeG",
  "key4": "2zQmVacyhDBtZzLm61MJVcFwz5TvuxM5CJicE1kLibbXXykKg9jHAwRCvuHCkfjMEqiieqPdznL3kaX6Tprx9WiJ",
  "key5": "5vwKmU5gAw1h5xPmem8Zskn1Z6V8x35CwWwzyvxxjX1ME5SrGRLfrF7soq5wGCmBoy8M7L76i2sGjxjuNhVg81YF",
  "key6": "3txMYWvJ98F69j29heeurTGTgsD1sEoazG6CALdekrTqxwR5JruvdmjJXSvto1xi8NC8pdZDpJGAPFfCqqMeHYYE",
  "key7": "3RWQ6ZNjTsrHNxrBrGJh8ZfWAAuYwTKCsQrWkNGuGFUEfyPn6hxnQaMKPXBqiSQAQJibY58oKYtUJEc6zawcKpvw",
  "key8": "3zEko4MtKG9z1FvjkRbhp3PUW8qNr441PUtED8DMzriAYJ5wJUuF9QFefoMVanWRdg1EfVVNshKLReBzqeSAy15j",
  "key9": "59szt7hKW554YoyaVoHa95P6CUVjKjcDHMjUFRSg2AfQqtMJXzRZH7QPqGi8jAFLD1E2oNVhvaj1nBTejA3hdjkK",
  "key10": "5bvSRH8MG4sMjdZPoE2hADqLQE4GyKFsEfu2u6NUjL7WNZScrcBiJnu9xV4nP3d4xxATFhpE8BfD3GYnCNmxjFtx",
  "key11": "4LC39zouc7cE4SWvh57HHx9dFTGVXB3uAQc2G7xkv72SedMieERbXN2TqoD7TibB2pCWNKiSwfAS1EV3Kw4vwe91",
  "key12": "3WZuJwDymNtiCabyiBXAfgKpHKpjkVqqFW1FzPAxmjK9Qat6fQ2FmfXaNK5tbe8o42V7apYgoB92Ww18Eejgyy2b",
  "key13": "QNzTyYZPMmSrjHqVx5BdB1r59qpN9xHiauqgCsbjBNDAfKTrTwET7koHtL7iFG1WSwgPGwZEy2RsMsDwcuVYKDG",
  "key14": "mdEzc4vf4KaCn4wGyDG8UtFa7yd2LgVw56gFiKS46F9tQuWJ3AMdHu7P7TQ82fnrZSqf8u7R29bFcPBff3ye6XK",
  "key15": "2duUqGEPB84aqJqubQUSZkqmb74Zi6mFUzg6nZSwJaBNEpTE92MH8rNJRRbeiVUTtPBTis3sJ9jwXYVLamgCGYEh",
  "key16": "ZXEhz8CUNBbERqUtPuD2U1XWPWauLchHcoWqgMGFtrWzhR4sfGaD3YxZQCGwsaoHNg7saz71myn8QXvTpWjGLXN",
  "key17": "2GqH8N9UBJB5dZkU1C12td451qqoaTrfoFzkDSwbm558vvizFbAdr8dmAQrB7Jpht6DvhM45q5rfWMMH4aqvTbH9",
  "key18": "3DAV5NiwEd3w2zMhJjkZRu13AF6bbLGgyvLSB3PxeiVRhj2tAaH1xE4h8HB3nqdX3mgKtJ9zDwKqLj4dM8YYsENo",
  "key19": "2JV2mqxxGsWwL7VjmMUEcNfAhud75TQP44DLKFebMKb5rE1JYQNp3ip9FT4wbKtkzzravy2tizBAETwVTbeMsqbY",
  "key20": "4X7Ahom8yr13XvJF58hpESKZBDWW4TZjjmq538hF6Nwe9f54A7APgwaHt2mDgdHxgg58ZXwezpMakqWjrSdS7vet",
  "key21": "4pwNEtX13wYiQKQxiGtNoypmRVJKbu5WxjLhWp9FsPhs7wftqXmDvS6QiRoZisyVph1WzYs4DJ1crWmCNEJgx7Bd",
  "key22": "53fx1ABmPksbEACrifxN6WU7jZM6VDSVQPxjHzS1eDEZvnu5kTZZRrSqsWD94gCAzYLQMpcVjS1ychyCbiRyAkPQ",
  "key23": "42c2WabsZBpXpazAw28CAVgFcrXHSoUFYGgoa4xivRXi1JV22GyuALBD83S2HEnTTcP1adNxMrVLNX7f2YsuooFh",
  "key24": "3Dc6EHcq247YrmqjjpGrYXFt9QDkoDTDJH27MVAj7mVR3Pc5uYsYmHzEtFCQKpeT2J5HxPGhSSxgsHsR9moDtGw2",
  "key25": "5w8D7bR7rEzeEP8Acb1nJJnLGHnrG4ifD2oqN9cmGgvVVrUt3aLcnHJxrzCwjtAbzja9sLupLL4HAZQHn6vT6MbS",
  "key26": "mBeeoBXFvBR2gdr5RtZez6KD8Fv153sknrz3Nx6X9ZHsur2hvGBMWBvSbqbj93hbRW8gvMaqf9jooMj3ibj95AP"
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
