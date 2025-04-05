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
    "4tAitmavt3HZExQR2naFWbRAE1p1rGB72WefSKNaHRCikAcRcgC3rhC1WDoJaRj1W3TKXd8GrrnvbQ7hbGhmo5hB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QNAbhKCAHQ37GF3DiNo2me5P64LEWQr7DaNPsHSX321btMrdK9UUBkYbQgug73GZW3ovYtqNf59RUmYayB5CVCE",
  "key1": "2f2Sn6ruFM2UNgQCD9yddnqHZjmk3Qfgtq3yDKobVodMvscWbzwCqKGptyT38hUsQM88cc1KRgp9kCWuT2V8qnvT",
  "key2": "2TJW6SbMofh4pKvm3e1qnKPHQHpACjA647aH17dAC39xAg4oeA9NzMGCRarHbodZFMgTA12wEsFFUmK372CbztzD",
  "key3": "4PDXX7v7edCiHGtqcEa4HwSbpeW37KULDp5KcCeN9XatR8EzLQWQhiBcQPyzcYhPQEG5zQM3ZQmYrwbZhyMrevkU",
  "key4": "ixZHnzixB9ATiSja56pt8MuNurcNAiUN5WG7N5LzoCt6dH6dtDqL14MkTGDRhEgWZxmo3hua28oowgsUdcYpeDw",
  "key5": "4qM6u1Lq9iBovqRQCNuhqQqcvpVDTEhM1cF9VEHxoxvvkXo2ZyihjXcTijkQgT4HtT5K4N1xKJYmYmCYr4G4V5uy",
  "key6": "4Ff6nT9h8UTjGV4EJrgMsXY3CHPsGVsWaBF18eHug6RpoQujajTjxni6SEDmWJKgMLneE1y2roiSGcRw2bNE3i4M",
  "key7": "5cQAut4XBZ6CJ4zVDwG1MxuWATNUGDUm8tnDc84MoHvo42Ti23EHTqV3mpnMYYtK5LwQ5Uz8zHyGS3DCEZ2e4BFY",
  "key8": "4UA1Qo8UUX27MNZ4yHBWi9Sud5WcB8LkiEKEXtk8K6GrwWdyeg7T1cezcgzQ8cHif4dWS7idqXXsW9au3nZAf66q",
  "key9": "3Ebp9DqTn8HTuEGWqCmyUc4SmdXWMQK3MNw3xJ2qsueQD4YcsrTyySYrQcLUwSjmbUYK6A4DfM5rydVwFXJn62AX",
  "key10": "64e47NbQyULWs85DhAEsg5iKjZVXHdx5sHLDcDmGLXyaucgCeSS6eCW2UKQMB36f1RPfxCgc5TqwBaQwBPETWL5r",
  "key11": "5hTQVEq5UpGTz4wCBccRJCEbniMxfof8p6g1D1SYw7Rn7zn7SUCDsG43GqQXnLznt5sVrXQiKER6mVfNHXJpgF4T",
  "key12": "5naQsbP36184HEB9wmZuzTqUFxkvt7E5JDASQ3zAWwSXJRsWN6oJz8aawwnqiYSfxT1A3F7KFTvCDsaPfW4sGMP1",
  "key13": "62ddTryanCYPhvDECtannPdfZgrka84EVbqa1dFMpT2LJACEcWS23hkDWUzaEFigtEmKWmL5gRyQ6rCbmeWzeQXh",
  "key14": "3G8xef1JTCCwhEgRRPznV4rg8Ki7XPeMwYY5zEAXUdBa8XTNDpN2YdwwtpwCMpA74DfVMXhY6H4uHQ6tWhvh5day",
  "key15": "398BsywLyYViggzuZJApQimvwwB3Nc1yo11pLWnmYzrJWee3vVTvEbrSk1ijv6zh9CMy1DunGQ5s9vipYApN2QTP",
  "key16": "2nUACvUHcBk59i1BRf5Ayo9ZyphN5bikUEuYg61SHusH5gU3UZVw45R4taa4xB4MX246zgocXvkbpNnFJ3ti8qx6",
  "key17": "5ZyBXTjeJPw1C4Jo3oULF7SbFKmRC4hmEFHnW9fhfvMWRGy3HjePBRtczYYJrRaCkxSFuTXqduH5WQDmACPEeU8r",
  "key18": "59VTT3iwQxtsuhViw29napeQpYMBVLfr9soL4L4aoyNdKB5RnxLtRkCFoCDEd6k97tgX31HwR7mxA8x7Y1Xes127",
  "key19": "2EJ3pBmx2VkDLU9j6788HMxcLR8NCUjW5JhPWEHVZbiDbAB5x9afzvmrQJVVefyyTrWVPPDrQDMcay8tu5vosqa4",
  "key20": "5Ez1TCkLQUtYVoRYWgrcFwwGfKRYfiZ22hFvKYStd79nHRtRX2Sgyx2osHT7LB1DENZHTQKdFQnudsCZDwcMj4RN",
  "key21": "4qLW9HWEAruU1WQppupVfD59rJRZyJi2wg8JpuNJ8B6CJvi3cTVdNgJ1fV6UvhNB6fUr4TNZGsVP6jmvQ4dA51iK",
  "key22": "2vVnakHyjRjudBHbrvquXprT2ZJZ3Apr5gZhrsMygMuMpokDfgEiQHZwkC6nzHVbALi2DJxpn24CPXosR3fWYt8o",
  "key23": "644TqRntB8DckfbT7dasbwFzL33PwiMHhqJmV2cSS5NSBQqZrempSPtk4Zq6m6ibXdhowrKsMfGWHWgtb3Mo846c",
  "key24": "pFveiJSbWCGXbyaB9FTL4a2fvHQwg98jHPB95WayEEq1FoKNwkSvNt8BckyHawGpyaTLUy5GXgpSzucE691VTzp",
  "key25": "2bsdmyGmmi1iLLbyVG7aeoGtUZAu1FSk31pVjHXWG57GtUgEtbSGhHBUewRyCFYb29EfVRxmW81bL7LcFNz3NidS",
  "key26": "4vK8muUZa9ude4sAWcra6WgVovxaCr7jarTuReh2Si6rNGMqnA8mpfGdyPbdqhXRFEvsE48pKq1AgCdAAqc93Hrw"
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
