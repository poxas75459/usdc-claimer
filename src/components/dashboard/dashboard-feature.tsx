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
    "67o8NsZBhsqRphovhvfpr7STHcRK6EFJUXzeqsN3YLwCDMuXTjZJqAyms5ZjvbosJJZp7fetRfDhgnZG4fAdmgjK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "511DPQonGVYBXvTBhkAGkV7bxnAC97rFHfWNnjnA8qQwemL9gE5SPMuRob5487xayjCs1DEibBDXcPEpLrRpbwJw",
  "key1": "e654b92SpogrsNns681nwr29vCEZnLAcDJcqm9agZSjz3xmSxkMZmm13MjtCXXtaCSj9U5wnyEBavKCq5XXpyqh",
  "key2": "37fyGB2fJpuZ7sSAgNf4Lax4SBTZ9UTcQ4ZXXDwqwkZ9BuQi9RcVcfCiaRDo2j1vkZVPBFi2LyWz4zGyDDgNunvt",
  "key3": "4gR38xZ4WcYQYgo2e4tUuQy2bKfAxSUK1CPcxMZG9jAEx1cE25CJ5uHpbJCrsTdymix3d9A4M77vGWdZfWA8rtvd",
  "key4": "32V1qoEXJ43tbnQvykC9oQA4wpycALA4KxnS3QE1U8QUeMW3dWwkWMD9SUezP453MTK3LGhh6idru2vxvXqyLEQk",
  "key5": "vfdbtC3MmLA1EBNheJ6Ec53Ez1uMg7ZH267FSB9UyffuR9SKoAGmJ87JP1e3ah3h7SSHDzFDf7BPYcLciSmiUy9",
  "key6": "33C4tUWagrVbeGcEe8oBAXMUusNYNiQufHiV6URrSMFcdL9rXm1VDMvbpndKTW9yoUtsN8Q4gs2UHTrUPEVdTi2C",
  "key7": "4YLU6Pa26isUpyFUJNqTBazAaqZKt8y9DUKBb8putWJc9RxnBbh3gFS5qC8Tqa4Rt9fBkXbHeFYYg9DUQ2pDXHWU",
  "key8": "249rQVgmhvHs3k9xtPs543kCgAW9E4PhC8CpDwr7WrsSByHKRnD8FRg9kB7n1CgiYasqWk9QNb6qvuCkprfqzVZ1",
  "key9": "2TnKp5d54ydT338DqwqdZ1jfo1FFNUVsocT2g5svdVuxiE5gnyHipBuzZmiaqZtMNYmfrwZmvhQjBnxQCCPaincp",
  "key10": "2fGBszWiCkZyDyvkAA6Gh8cd3ySCXmBjo4FaND3dJPT5vrFv1HArSEzLjc8hUqsGsStuB1AU4NQuLiie3B52ewuH",
  "key11": "65C1AaBKPqX7TQRYRydwvNt5Mc5qx5Li6J5KDoT8NCNy7uwsshXxxtCUMVzFcGpiWC1CaTDhwm4vQN23ck3vSa1S",
  "key12": "2k6ukkbkpoMFToPp7jiPiANwuDJUFAATVaaX4gF5u88S6vnSP8hBmQZtX2DJTXUGYsoRq5Jvpoh8faeiqw37jabK",
  "key13": "57ohCuDASX9MYLLWyiX24fswFayZrTGmQK7bMRtZkTTofLUnNbf59pFhC69r8Loud5DVzKpC852tzLvApv5UG1hC",
  "key14": "5KAbtvVnr3YceMDfxTYQCgMVhm2fzYbyMxcwSZSzFuzwBvangzctTrABMW8cKt2sjkN4mEkBRv7nc84KnSSZCoKo",
  "key15": "waYQGB6vwgbGkT6fttSsBSQyjATfDXuxgRcy3s9t5j5k5oxNAfQTBXpwphh7DSsCnMbaUpc53n1d4en4n6ujD6t",
  "key16": "BdqQVRL9Ep6SMKhyHeiZxUUX6ikqVG3BRF8SQ2XVn3MjwHs9sr55T91hihqKsdyvXs6vuhBkNryVRYJDizPh1JN",
  "key17": "dHqbrRoorBiEL4gFD7KifNbPVHu8B74whJ4Qb81P9nrvkGBFwefVSKqoumgmxVe4xoQwJMhDBDFnzaQQk38kVRG",
  "key18": "5BCUvA3UYuwyjdfsmgpPRDqAJhS25UL3jJ9a31bMfPV4EetLd23RxqCmabW65vsw33wte5myUC9udkWLCj4MU2jB",
  "key19": "2i3yV8LswCzhgababVmKSEzunZffj1kGfqtWtvFu1vpZ6jkVoiQXKHakxVKujFcTrR9bSP96gc964KJ4JqjbSr1i",
  "key20": "3xLcwVRsUkpacWaDJE9sfdMckzVtobRkQaqon6VYR6Vtm6K5enQRQGbuDBoT753zRGQ9HomW7DMJXSbnFeETapJD",
  "key21": "4gjsTSr5dRtvUjve1fW95fPudA2j73WZoSuL3aHoKqiThLf3bFBWHnDcCdHd6oAPh9XSPXqrLUQR8S9ym57uZV2s",
  "key22": "DYTWk6sJWz97DDpeWNbUavLhzYZfjUMbHdLGdiZ5ds3sq83B4CWYR39aYDT4SAQvpVuaTwcTdyni1aUNK6J56Ye",
  "key23": "4mHr6jKMNzC4LVCXCijA5rZygM1qY2zYuzfqYidEYmR1uayeh8ADaAWn2xBsTWZXbDFeVYEoqFygZ8gT8z8gnMQn",
  "key24": "ph1Y9vbtn9VAt6hP7KDceMCWoy965PpFiZ8P4483iTgmsCHsd1rQc63SneSW3fT2wp1ci8t9vVXvtsHbe9VCbPk",
  "key25": "5VPAcfYFijm6XQxk43daqM8FHFqAhQGUtzFikvwJqm2mtqDqNe9xtS4AUeVdba2md1gvC3kxWL8AtPvoEdjqf8yf",
  "key26": "4Uhek1dj78Ui18RCaDFkB3kDUCuFSuckrB86cDnvDsJaNY1w523GDi5V8xU1Vkpm4yZnVmDDjnMgQe8MGXG1sPN2",
  "key27": "2Jwx66t1F5xWUbHfYrVEpY6QnKsfcHRCPz3vw6Si7utZ84rBjqmWNdDofJsuNr7jPYsTadv9np2T7YXGjviZFN1x",
  "key28": "3aSiKQCkBV1vdKp6ouWWBfrECVSECoRuf89aXKLXnHJt9z3LNDAKNmDdGH8iEvxMi9YUtatMF1fFiAt9Z5ph81eD"
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
