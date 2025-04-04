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
    "3cKQY2K6nBgb6t8MtuVdmGyXwLsbcgLeshXHc3nHdQ8HwsukKVEHqSoj4ePYtXsq1MTa7RGC324es1w5QvLP9e24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8PKDA7m6ijomJ1myGy4x3AVZessiX9MJXfWz4mVnFtkJbaAEBBVBs6G4wDGiGUpJsnVocAcRQT8XeuMkdk9S5AQ",
  "key1": "4nNgkxd41oaudxQwEburFDZBLzJsiRdMTGFCJkuN1M1Ff4dQFKgB1qKoyMveRGoaNJ3UPxGF8hj3kBU7Uu3M58J7",
  "key2": "43MLA9gjGF66KwFKPnTEg5gk714VGQMTLWvnWWrC9puFs3r6YBUgkb1fmjuj2i3CcMp8mKyNyWiQmYat2kxyp96k",
  "key3": "4BbVm9Q8UYQvp41BccmE97NtjrkbJbpaoGgC74hiuBeatBkxFJJ67CzrqU6RDiZ7aAGHgk8SbttsyWstKsuY3pnQ",
  "key4": "4yp56DMzJ83pbi8VRjWRsTDDWSR7zx8GUBQ9PaZtqUVniu1jedv6NGGC7ekyp2zM6aZbiUcCjXi6ntTK7aEmqQ33",
  "key5": "2GEW5toVchZuJXY8yJLH3ehJU46Mjiq3y4xcisU7GSDWTF665qRaiwPY76w9oCiZgQ9Yq2GQWd4jiQT5su3bWxqi",
  "key6": "2cxuym4yn15RFPAxqmqyFaBREjC1Ba4XnM5rkTBmfj8ZyMP8rbXi13vYHaSo5HgJBoVAbzZdMDcJJtD9BoRbjy4M",
  "key7": "gMTeT3r7AajPaDVbm5QMzCR4vPK31xtnBJRJHeKp46PQ7PPBjRXEx57fNNj1frHCYE3MEgCUXrHqEV5zGurKrL8",
  "key8": "dXB2wBLqGRdbKQg8fKzUzX37k87uQCD8NfQGGBKkaRm8ZqEjyPdEvXGpZiJDSJoQfBQcUgfrvCd4DxM4X4uDnZK",
  "key9": "5bb3d841mao7Hea3YRewQh4NNxQrg4nEgwVHFw7gyp5D9rDYdPfNC1NHHMkYQP2G5Y6vtznofUxsLTYuzLWfoY3H",
  "key10": "5YNSezijvP94vDgEg7LPNmyS8dtFS9xvYDTzQfAnM9tMeuy34zUEAFBWjUaL5eJAGxNtrhQwDx1ATg4NSi6SCXMr",
  "key11": "5tfxPz6qS7w84EV7EXXcwcd19uTBypR8PPQLD6nBPQZCYteZN3wqbyGk9tAMJ1BA9xkSb9dEFvKh1zK9QTkpd1aU",
  "key12": "rrZhYVGu4K1btrvnhcGC9R8XAXMySHLAp2Tfy5zgB68LZmYRiyyD3uaoAUW4RLkKpYh1nSaYLAHdZNwTBarWimb",
  "key13": "2twuJzgMico63NYMSUG759TPgN3PmKXk4ETZKpYtVFzaPNgon4RKRyy9wvoXR8P3LEwgTQ2Rqe8YLVWt1u7uhMgK",
  "key14": "DSgYNchknMb7hxYR1LM6JyG6jgQAhtQpAhkSmtMy4cdxipUT4Mq5QC3UeAtue7G79V7fpxB2WQCc3MvcPEwUvr3",
  "key15": "4aR6WsE5ryvLAnVHasmkjWaZ8zGETWds57NEqoGr4mGxXGszuJYPrnyLCNeFKENHjTNQyG3hqx4tKG2w6FYFpTPr",
  "key16": "39Wv58NbQCPxCxXjXkoQvKEYh2MBvQkFMCdYPfydUFEopo2Xbh4kvuomxLDoLzEcT7RcpBSHKjSfzDkHxfa5qd2e",
  "key17": "4QWdgaG2wuw8M8JVASPUfCEgL9uE5vYxyXCBstnY59Q3kzAk2LQMvqkgFFAxTWvHmiLSti7TDas7T5aoWq5WsTNN",
  "key18": "238t4ry67zMdZev84Er5r52m9Um7DJ4KuwMD9ppEbvLnJf5sYtGtBXQyFADPj3sdVTN4jXobSZqTDgg29xE3QiCt",
  "key19": "3uVvQqzhiyv7BL8hxRfUtiggffRq2BEYGDcwS8fX5MmLfM5qKiv6CRZJFnGxBcn2X7pVPkMZiqKYTS2RY34r8QS7",
  "key20": "5nDJkSenf2mm7iVCxDgevD5KjjAcgdWsd3DFWN3XAn5zgBMVDtTjNBx7kxoaa3RUd7dZEjnPmjpvehKQtEwk1raX",
  "key21": "4UKBUBnzg69TyqqtBceaYPVFipKMkrdjzQWpPjCCTbNqdnfdNdRWauwX15HS6Lsrdivzh6LZDVg2Gqgo7uqejHjt",
  "key22": "43DFhS23Bv7aZSEtJ2VRGCw6agBxCPVQysGQeDVF7AeiMrQ5pVapcbGrdF39eExLy6ARozPnTZ6MDAMxEzTNuH83",
  "key23": "49UcUHSgnbjQbTPRNxgToprr6pNoL9fBskDC5C2EaWo5tmePpq4MQZFptSB5oXgBYThT4P6iu5JsBpS1dmo3vpXH",
  "key24": "3BgwLRziYy7ZCx7kh84mYcyw83Gn1osCwmtgWTtJrj6wUs2tWzqGypgbjFo9NgnSChWg8rnn13LHUhtVnQWWqJsN",
  "key25": "3W4ZQK59tvWHuwyNWXwk5TkT2JMt2x59Ff5VsGBp89Jg1XwMAbtz6pfUveC9MQV7YbrnSy194qmDndkrLfqzURiq",
  "key26": "3kN1W1ZD2HCbgQ68LNaFx3RZnMXsSfmAjgFED8S1iyXLSzTQaj4vVPdRMQ9NwSLBFw8HM5HTj5a5P3j1KiipYWKw",
  "key27": "5fprV1HeC2yVuDQEdoDHftuDCdRHHfT7L78b2x2VwsxVyXmgaRYoozFnVzGe2e3goZdEJcLAGhtfVceb6xsHSaUy"
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
