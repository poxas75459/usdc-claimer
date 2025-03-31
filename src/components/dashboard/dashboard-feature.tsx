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
    "41be3fXAmMcjfTDYTadCMENdzmcC8xD8S2WXoWwYmmDM6soNkngL4mu8e8PkSzJ9GDp8dowwspY9x5SXViRfib7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CLZ9zjhN67ZfLZzMARZX7pGnTF5YwhZAw2CXLqRCmVzndRgFd7Xtpaw7pRojJaVpHpcLaQUTPfnSvsDDd3BhUpd",
  "key1": "5Azm2qLsLqE9G75BjcRAzdRzP47T5GsQLoyo3QxKGfrA3ciLQjb1ZJVPewUnr7D9ddyEZMNMEe2RTkaAgqWVz53o",
  "key2": "5HToyKFT1CZWgYYscKG5D7rFTzuEJ9NXSdj9wsLJbQyzHF4fPkGfbfctpZWTfb73PQCXJyif7NZAfSMZ1SkrWENZ",
  "key3": "3q6qxCqz5C3LjtoWBJCgCm4x4j5ZHi6aniZSBUbFh2jiUHMg69Sgcm7y2DW7i5woXUbAYgztSneRmcwAwS1dQdz5",
  "key4": "4yPw9MiByvBiF4k6bbLpzAooA6c36WdUNBeSiZkRJb7rPPY6ymmJ4JpH9rrq6sdASTaQodT2BPtcpZabhD9DLCFo",
  "key5": "eR8JqFH2XRkeuTizGm4Cajy4N2ZW2HF6sfMf1CnSDqf7MzpphFf3YJiPP53QbEQejsf8deV48AoCx1Yns1tgQUV",
  "key6": "4RZpBvSnX3N4T5proJz5SGneZAJ9WkggZ3RSH9JLT7AexQyHh6xFnUMjJjxn44z4JJXD9tkDTgCDQmSBuCwuWWJh",
  "key7": "sGC1UG2NHotyqzN4LPHSLFzvzxeKmarDb8t29a1iEDFCW9AMZcm77rFkEwrueCP6JJCGT4TPgtZjC1d2Dex8wNG",
  "key8": "xEhEeBQBeRCAANpPeGsLYUWfxCmieK3bAkrd8Gi6G9cZtWL4Po7ozRTQgJD8qe2f66uaUcuc5eB8J4EncEaMofC",
  "key9": "yFLPNHe7j4JWzjjtmEdeDb9RAcGbQnUx2QC1gSgeer7FyocmVdL7VfdX8ibg8w6m1VfAyA1d4twcKWT6sT3QdGh",
  "key10": "3XMcMsAYuEFCQdrMe3DrmD61uNF6jsvypAuAnSSyi8YNZ1SfYM53Fi9uM481UMeKW7CG3xuEQqdHqpsXf4AW9Wi9",
  "key11": "2JEcwtrfSqZniM37odbbcDKip6FbFrmqP2HhV42vGU16Ytz9BXvBJcgX63yJ6NpjXEcuvAtbqfzAG3467mFmo8wr",
  "key12": "59JoVt9s4omrGHkgwomBUa25Gyzsm3GqcJb6j4EZXWiPGNCkFA3KsyXdsy4Uo1E8hu5XJBaHo85XbkYNAKRzsHFy",
  "key13": "4rEJbsLbb6vp9LBDJ8Qzfg3pgnZVjFjVinqjjfSs2dr7YmTVVJVAPU7ZvvGPMtHYHbFb6nnHwo4iBtmQgQfWTiqS",
  "key14": "3pFsugRC2i8Sw3bw4VqgDncRhD9j7eCjUxtg8uRtyLjz997XmRFQ3GxbSqZU9pCoipQvrthHfHseoaYYGCjemaGD",
  "key15": "4C26gWLoaiY3nCLTbjGp5v7HNs3fvLmFBPCUdd9wCUsUXpfS8Ft3yL6wAL7ytJQzTe78fyDR8hxW8DyngCUFjaMn",
  "key16": "GVqKhfmpEqddRKxi71YoBf6kWziH1y3jqHMvUgxSYUd8vwvHkmXQAfoW6hVTQ8LSyyTGERdRGQUh5FarXds8df3",
  "key17": "4uUGdHtDS2chjkSsVWhEmfShzaPYne7rdx1xRpUnBKm1ubbSF8fTDSFsP6o16Dr5gMLfvbriwamWczT4XEjYnUL",
  "key18": "4W6mAkCxdLK1xkFMSugZUCqHrX57q9JM29ts65jqgpwiLbQmDRDQiDRGBHWWLxngeizCpAk3tbgDoaM7KPheRtiN",
  "key19": "3c7DbzABmrLnmuPTPQEvgVyyGRo6To6oWG7JJDVpwMsUGvMsw4Zd8g5YfhB2MbjrzaNAPii3kSAj9fHS5ZWSahkS",
  "key20": "5vLvD8BtQvP3pPMXFAJHMwfwvvikBr1PKTkpC24hLbcQEVjLDSB2iLWZUM2Cch9jAgfdwX2Ztjfa1451hzbrSC2B",
  "key21": "3vdkzwd8owunpMrBburPfs8YkR12WLYCFYYKnBU8H4oJytFe2f9htcbCo2WgNWjJqK16qN2T3M5VzJQa8ojw1yNY",
  "key22": "AZKeSUaQzKTPm3pPrSt8aMRRVCe7Qd8p5j51domSXW3c3kr72M5BRZSYwNCecEuT6WuZrp2V9JijmfjGLTKA4rN",
  "key23": "29ReqeLaTTTJnqyocEbceaoEWXUZspeDakWHQKVB1sH7yrceKg4X71v6SNUxNTQ85mUJFH5Wx4XxZU9WULRukXQr",
  "key24": "Qrkc58B9VRt76xZgYkFiJ5NhsLAookPCD9CTM3iFHa5qHNgVYGp5RZQSuxMXnV5tG6kMFChrqbro7vjVfKytiN9"
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
