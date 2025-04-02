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
    "5Lp5jADzsbmV4zNdDmMvgRm1ST5mZnbBveQ3LcPeJZzsbM6ai2qbkEMjJGzsewBzytekU48cHQZidwFiNAm2nv4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rcsn6i3G1oTHa3ZX1fqP61Q2myM85VfnowWcFFP4DMW7iH2fa7UVaot6jBoqWZbWCic2Hg9iQLnSXv9Xh94hNEB",
  "key1": "4aRoZCPmthGCopmkGPertbbnk3L4Q5T4T4Sh5YEXpSut1YrvvzbSL2PmVBoPP1ov2aSZy4FzhYnX7jJ2aMJBvDDX",
  "key2": "4zsSwVr4ccAgeA566T5G2nMfSAG5oBnU7ghAnbe7gr4bm6BMzYY5oNjbuSdQqxTR457pv1R35o1cqb4JX5icac8w",
  "key3": "2urH2ye41mFjkyfUQ2SFYFdGxtUSHGyYFah4PF1A48J4HiHRknM6rBs7PHcxUhnZSb2YugVaj5QS8su81hTWWi7Q",
  "key4": "4t4zFsSLoB32d6TkYjVYntYjaFdV49gq76PmZdPdH68Vz1XYfmk5xR3n5JfWjpbwFGVaXUfzXEPeZzPSrUAhmAc",
  "key5": "5m2Xp1xxDjNy2iLW4U7HXU6R6FuBFQ6K8noc3cHMMWuTAWjv1SrnC6FNEzazXUiqnrK17b4dWAV9bwmsDCDC86gT",
  "key6": "3Pk7zZJ8xVkBpBEtsBuvhjZDC82YyfLzCLLpZU5VQx7UXhHujqc3TCuNBVvqtGCy6xSu7MMwGeyQUxxBTSEVbCNt",
  "key7": "2yTMPEd9tR4XrjUT3uLCMGyamZ617aFt8Eb8YSP3mC9XwDo7RRVngYTRVUHips9EdhESPBgeXsemmJr5xjUkAvEz",
  "key8": "4kN29ydUrAvLJ8cZMb3YZif3q8NpcutSxeaMqrupzUHX5EEHBdDTZr7QZqKA6izeTutrCNS4t5BaV8cuUrpP68bq",
  "key9": "58b24HMumyMGT3PnEvwFAyfxCV98qC8RbmxoQ6dHgsHXeNfVTXytRYWHF37KDjPMjoXonHisjqA1vvfg3QYCjk8m",
  "key10": "TprmjRCMeYz9gMuiwGkhqiXw5JfUsaksMBJRJZB2dGAtWFvaoVDUheTPQS57PJmc8ZPgMKKCy96Xcvpd2xaGzRN",
  "key11": "mpit35uodfejnnUf6ij6awfV4XwCbpprPGBid3BfdBGHnEeqRJimXjV2LJCB6NV14wk1d8ot2hFFgXYgXjCC8qs",
  "key12": "CpZhpfPPiMk6SQ1vB8cnjhvBZSzHC1tn78ZwfMtUwhuGSz2ho8RPMdB7YBdYJr3dtkrnYRyQjwnqaBoXpQs3T7J",
  "key13": "2dGdCsJrkgXCEiBXf6LwfwaGBQyjAEcL53JzADCBBxroogS1dJUgie3QfTiUbmr8Yz6KneFSjBEWBBgeZAqdXLEV",
  "key14": "5WcfkXy1BRZE18CVLCL53EixtPYC6t6iQTaJ7YgyD3HDLco7ctewAuiXRwQqqDK1zywZRTUn3CPvh1KJFdgouT39",
  "key15": "56LNydhquSZaDEjnx6mMgwthbhoRHEasud1Cdr4gztKbWqqxGXmYyKEFBhyZM6QtMo68fRQf6kqGgdobLtAxtzkb",
  "key16": "1iWfYg6LKsUyY5nRt4Gfr11MRRJNb96RmuELJRoRf9Fp2kKZsjqapHYtwmg8uk5ZqnoiSwjV1ZuL2tf3ZUWYtmh",
  "key17": "54UtHrgvvoJdUcM1AbDpGhZVwcSKfQYzNVX8CN4hG1fToNQLn8kaZXcSvmcRTk8EPr2tjpywGCivSjXWQsWxg8jQ",
  "key18": "4TjQMMcyEFK2t1WJKtExo1i3LaYVftjmUWbQnk12VVLknwvi8CthSPPD5htpqei4NiNqwwgc9GCUpWvBxv3roaTU",
  "key19": "4n3xc6WAD3wmncDXh2wVs8dkMgfdhn8TQ5XToHtXfXo81RcyYMaRSi1jhjY1FSgXWoru6vQyfNNx1wiS9DH59M8y",
  "key20": "xmzwqFMCXNPdQHLoWUfFecxedtHELf8NEeHgynT5mwzjoEMA5hAAeXQtWPAGmpmfHmuyL3Zjx3EG623ka3ZwzXV",
  "key21": "5G3yy96GUoEyv32CkTRfuyLXpRvr9NHCaCAGadcxjZegJgaVcqf97D1mMHAo4Y3pTsNBJ6msDH3xgcKwEkcJ9V2N",
  "key22": "2B72MZM2kC3yVEy5Ca6rusaE8nHqurdRh6kBDWKvgJtUzz6pX8bykJCSubiHX8rssnCj9ieYhftVjLVzVz9GtXNQ",
  "key23": "oDCbw1Rx1Y1LABRxUkZpQmJoJmEhQecr6poKQpxWwTecYBwZguMCoP23EupobCb328FPwwbZK8TsvuavgKGVeC7",
  "key24": "5s1a4GqMTtdBBBYL7awRdxtLefvcvtSzCKC6Xq7BeLfGeX7BqgNh5juXebKd7wKgA4BDYBYKiCx6NFyjkhoWBEUc"
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
