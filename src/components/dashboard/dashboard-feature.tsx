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
    "3enqG7w7xRrLrRv8wLVHyXNij6WQH3xXEBgwSFRMVvZyyM7ymoM9ydUL6xrMBEyrLN5tBc1DRXcMuif3jMNL47zB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WCBfFnkEDK2SLQygHRuhfrdYHLz5CTScuFgw16okziuSBCNyVkm7tbHMi4dyDsMPdemeKm1o4umYjBvrF3u94Y8",
  "key1": "31fiTZ7ivuZ5GNATgX3Av2xdJief9vNdxwaxWtvX9wPvrLSVzyjbe43fwQHZjZCT1KYWg1nmwXUiLBkuHRHQU51k",
  "key2": "5kAuPSLnAe1bHBwUnYeHdhdG14WDoa5ZyHEpQ5sfNTN6yEv3eDzfHehk9FVKG7fYcN4oFbMH1mMco9h76hk9Fqk7",
  "key3": "i3ZdHGTxrLv3gPJnow9vfXzvWJE21rHV7WbMPNVmt4gDukZTHQsdzT2xnBnGA7ViuJLbKuTm3i9tdrL8PYEgMBM",
  "key4": "cBxGcdqaV51moHL6JDV16QbwbY4FrcYzwE55EhLE4EcWuGFQ42exq5uURmbT52ygmghNgcxag7hkpEvxxmknJf6",
  "key5": "MFxTBCFVHjQ7UVyiFGv8ocXr1mkRWPyiAEPQE13QpkYCWZNGet7NsQUMRCW6SGMEXKCj59LeS6BbRjg8sqfaw8u",
  "key6": "59PYjiBcFPz3LWMin1rUKSw2m5h5sMaR2uo6gox6Gd5UADde2oCroDwS7xRUif6Sz4buTQ2mVkYdyFey8JkTYG4Y",
  "key7": "5VAWkbr9NqMkXjX1ZMetFNoFXvYYHyU3Matx64tS5rSpgV16aJYJUZ2RLUkk3rutNehsTboX7ea3b41W5V3ht4uf",
  "key8": "2KfE6NyxkGby4y42oS8fmKKrUXWnV6XK8FTXDbnJHAN8M1PzypPECZxqpgHYNa3FDS4uhWvXgBgkKPaZRSbXF6iq",
  "key9": "59sRqFwSXijrrGk8x8rEsesnZi5gxc56jb8y5kWNbpLVWMV4Ky2U73CnETSynHud9DDFMaJ94DNbf6FJyEMaJrfK",
  "key10": "2qApxJ6NFH1EHMpC87DGrSvUuKYbiWwcTMuZtSF7HPTzhqz6hZoU2pNUfasGrkqXaqTjSsV3coSemaNquSG57guY",
  "key11": "2mRsGAY43YQincd41CkoftuZSufv7bBhJkvk1L1MTZy57EsTmtTDw2k7gsDFgn6aLT7EgpbPKMZvfgAGWCbf8wJr",
  "key12": "2oJ7cf4MgF4TSKNvdWbiiSqwsQiC2q4vSQbJAWhxJaDBU1hH6vMygWJVrF2xKiNrzCCf2om6iuQjbm7rCWu7adtH",
  "key13": "5xmN1xMDzPuy8j33YBiGzuVfcL8VqZmH3NPayGP4PG15nueCVFK9G2KRdbGkGJ5Aw1ae2RV31Mdm93bc75dxGFh1",
  "key14": "3NJiW9VHTSMSpJdrBFHetQ9RoVMMU1Ni9S33FYwFuZyRR2V8oZrvn5w8x3Q6RPmnFRATMfM93qPdrm5uDT3wNxX7",
  "key15": "5q4UjS5eCZwLXTrt6TqAC6Zn3XsTENkqWHXWAqQFTarJgZzHebcRqigqueTawmQimxo4q7CBJETgTqUG9Ejp5euX",
  "key16": "m4feFRSuG883e3W8cv98C5ykjnbN1sEoZ3SAFBYL3KBDGDFYJthNpZVYz5eEE8eQjnLQHFBbtWdg7ids3Ltze9b",
  "key17": "3RbuPL55HZvPUMM9izX6izsXYho99kKBPjbToF4N7GSrK8EiU3Lx4j1g2P6B6PG6d7gjVqrETWBcYz7ToJQNdWZz",
  "key18": "4NG6WdZ51trTkuaUCVMhTFZT1BP199Dy7AZ5oeUBkGd8nofKxSZWT2W9bADm2vSP8v4sUedmS32ADnDEypXdn9bD",
  "key19": "34dXMZu4jNbb4RikHkcYXDscQcR6BrUFmWFPg3ZXZD79G97AnT4xpzdxfYtuhSXBURwrBkapSAfFMbMdEsjaLvb7",
  "key20": "2j5t8Rbcvuv3wd39BNv7oGk7HvthKaTgDN4FyZMJo2RxaYvLerfJT5b8UB5UbX3HApJRbBdM2dMN545rxnRGrLbJ",
  "key21": "2aNDk4AozhSGRYfBrzwTb443Asph59NP55CyYM6gMX4ppLsmZYBfLCa4R5iQtQoYCUX7ATnPAWrCEDRTf12hmS1j",
  "key22": "4E5uKja67DRCJeC6eQ8qDCHgHWMfV4LAipDkCNzkcJZBtJzDAzWu7j9Es937WAZtwk5T6nG3HtuKsqhvbWAB3qEm",
  "key23": "64dM7uEwXaxVcaPxKT8PtFXoCSSYuFpNK2cGBgdzg8CEwdesnTJLoStUPX8epsXP5UBNyeMTEBfgEWP8ScnagfUB",
  "key24": "kJhVg84RNC32ZD62mo4wY2gsodw3eFDyQJmSMs2xWCRoDCuMPLfUStC83xsArK4HDXbKKFFPUWgdrBLmWurB5W3",
  "key25": "2feAEjd5QVpwLn2xSpkympH4s5GA5tys2zCHc2jPWwvag7pybYrp95d2qQVc2QDJvMFURSbropUwCSEQmscgkmKd",
  "key26": "4z4WU4MVH8HT1JFZFVFa7Lz7xaABtYXnQPdV2LBKKxDLD7QMrJijyFaL2b5BCxSGCTRhFcK4cdwZFZESddJQy9Fn",
  "key27": "67o53JgeA8wdYSM19gz2S6g1aVFcMHhXZfeieuCbuQFbqKBSh7tCYRoho1aQ6SgEmPtX53KuDnVYtcfY4Fm3XykQ",
  "key28": "4Dm7i2iyZeKoSzyxgn3oxZxGPkNwPz9dAG4D6Tc8TajSNiJjv2KsDKh56KK2PZJXJuV4y7sbrQHKMDL7XhCBe1HH",
  "key29": "AKo23RmS1faUH6kjZcArvGScQvu33LQEd4CLFbBDWjzP4bpDe6uFqtjTjhJLosTGRzSrwnWn2SuxSpF3yrqK9KL",
  "key30": "3WaeXJZE5bvuLkk2vVKrnVSyLJN8TRVHLSt7mokJXQPdrq3bkUH8xKarEWivnrueDDxU4CKggasMAwye1ExXpWBg"
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
