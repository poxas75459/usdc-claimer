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
    "3kpAnm2TdfNPPTH1aoRKtiqmNyHigQbqU1FBLgFZjxyDpZzCVbHiuvwKeFUGQ7acftoV1APJkVjdtCX5xxXkD9AA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38UpUxbGkKAuxsdhHT6iGntsjNMw7QCprC7PPBHCMqszVpHyHpjKmw9F3i2Hb7KSuyeuMmCVbXUAxXZh7TAbxCER",
  "key1": "2qej89p5wW5mfzohXXh9iu9PHGwGR4zihG6tV86YgwJ3WGv5nAKGtc5R1HmGp7vfYXZqJEDUvFSMn7MNmtM8HT4G",
  "key2": "5FBw1ztmXXnuEkfTgVRdXfAMXzD41ysDZ3VtrnzSLkG79f3rjy6DfYkFtDjTAopK71QhSrT5pkqQV5EC7PaF2NwV",
  "key3": "3fDXQsuBrF7t8n6DH3rnJ71dEGCZ8TKARc4c7VpcP6QrgFJ9MnkkfZMigWWVyzwjEzsbn8bYpAYUKwxKEEdyWSA9",
  "key4": "5AJe74sc5XPdoWL7fut7oodRuV3Xojt4AuJ4QRML3ZR5tkQySKGgP7HNdhcMz2a5s5HTAbuTo72vKWgMybFjzjd1",
  "key5": "4iTPHA7WMjQJdD9NZ4fFcTef2tVbF5qGa1CyDe4iQM9X1mMcUtyqdTasBmhXSCZhAwnunAHHNGbkFWrXkRJs49FB",
  "key6": "6723iFYyqRKpV5uEE9mPaXZzFyyyJprXxAba2vjmDGJuvynJ34ZDj6c7anYys5MEs6D21AV5ZzPETcmf37DFuLVx",
  "key7": "5tVYQVca5uomeUSfYvCc8QAoLK7KkAoDWtmsxBnxMPTAMvzPJv981ngLXbuvGpktg2q5JEXnHvQqYwfddqMsv5sN",
  "key8": "4T4f2f1KBgTbgbit4HdKf95MpsCbYEVYeLntACqB2ZFkVkwVSN2PzRBLp4UwdfUmjmFUX2LSuoSZKtu96hstZheV",
  "key9": "2x6F9p8H1rfFP9cG4TmCZYWGevtkK1TjnT8qbbPp1gSW3tWPFhiqKeHdqo5qNVssj5bS9RhMs2cSwkeUQmZy2gkt",
  "key10": "o1oY3oRS31w7qiMxTx3YGtoK5EKKndS3yxQtnsjRg5AK3XypfmmGbDUKTaDE7bPQqRCYoxjhYE3MCb6rhb9QmY6",
  "key11": "4rwyjym9GPiY5y4dwTiQc4SrfMgKjctLzAzgVBpc4XTNuEdVF3KN7bdupZ95t7KDQeAwoCCtckEpidmSRk8tcQiz",
  "key12": "63BLpyRkiAsQZJnEYxfUqnN92hQas1R5vWSaLpPYbGLBKniKL9dBsxufPqSDQp78WK9Se3sxBsEhu5DB4FcRQdAf",
  "key13": "2Siad4ec9xrGFWsfcT6BxDt9vmdZJsphje4aXmP37YDjDRUWCfR43ekujtiEn2dELadHiAL6BCd12i33A8XbNBBD",
  "key14": "wRHEDsqbPUA2qrEoMt34yhZfWM8ygRriAGiYGDhHXr2Pfo5nHkBvNV6V2FNcAUQiLr3Gaj9ryTyqWo5tX2iBTjF",
  "key15": "xAU2dR3G6Eo1SitnGwqEsdxZGsuTxmfmM3cunKQUii7cfcKFEVCcAkDJ7PFCihZj4VmyaimHPHHwUSUR4AqZ8nP",
  "key16": "pkUTbUa3Mmye18fPUo3ba5RxJiYs9oMeG2BPVeAVw6aMtxhGEhEmcrHoJ6k8msWDidrzq4QyLQwCmi4bkYbw9mh",
  "key17": "4Lr7h61JYnkonkFELJqjURJq4PXQ7MjwvxSxUr6soWuCGptcQtvUcBLUFx3hBujECtZzhQNRwf7kawckcAnFpwPc",
  "key18": "4qi4r1DYdWWLxshaSYyL2QSFVpevNfMk27aTgSkT15GQBDNPWq1v46yAqVgmuL6cLbRwaUr8mCJfE3w9VQzkK9Pq",
  "key19": "dgvGxed5j5MFUi4K5qytwB9AqaFbJQa43X7yacMP5A89W6eaN3RKoiS9H3dk1nWo9Hoivi1U4zeqLeQqcrD8yXi",
  "key20": "rR9Vae5kbdkfD6epFP3xrbKEHnZZ8aSEWGshnjFQwrnQAwh8YBhsP4zSWcTmhPoDvCbSttwFJiqrW4VXvTSWMdW",
  "key21": "3AMcogKc6qo2wsa3uFRncohntNpz6zMc85hw7KjeAP9AjocYzwCBHP2P7Mwt8om2C4JsK3cZP8Jc5FfcnrM8ZCkV",
  "key22": "3csgQFyEu5JqFAJPhVP5i52pnuggNR3UaP9wWR1U4zUr9iA6H7hZGht3huMXHQ7a7pA3MDfUJ1DJ6fixPUZKTrJg",
  "key23": "5jn7pNXsD43kPHcC4JeAAXp1vW5kqYAHAgyYuuUYgMHZ2xpREz2ZfzCVy4HHLyCHZD6dtHK5dSAQMno6D5N9BD2t",
  "key24": "66KwQzzQcv22Buap8Y7VRys6fDPopemGEgif1CmNQ1mTMyx4JatWkPxohqZFA8rXp2p8WRdhDoVEa6SXG3mTUrgo",
  "key25": "5hBHfiedkZ4u3X8yRzFxHpj7e12LpWdxxxLrxVi2wFVp3pu7ZxcGCXJXiuxRCEyQTzPpzTBTCsxTVjXTRv8yG837",
  "key26": "2bV56M535TA31ftGhtNLDUcmAauJRfnUbyUoY9rsUQpfYutXew1SQ32RfcK97XupkCSU3r1WFR4jzLNuesYpYPPK"
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
