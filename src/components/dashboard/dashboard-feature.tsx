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
    "5bhMU3Pn3fq8KhLhkPXL35j22FbYSmLrkBWAF2UqsXRtMqEmBYTnvBNYb3mG2cuE6Ut2DfFHN5CoTSeVfDemj8Hb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HWhL2krg9Q7LjEDo8SWQcVPXUD8iVm791tTSuu16e9gzanKy3ntmaD3exVJRzih6U8F3ffEaA9adR7QEm5Vww9L",
  "key1": "iV1pAae34pWEErAC52LM72iGjc3Dg9Z3F8JSid5X9J2ufr4Hs2wXux3iXoB2CqBJZr5mSRrX9cJ8ieMHvchGyrW",
  "key2": "4VFUmqSR3Y8g2VxzaHPKAAi2XdX4QL6BY28kS6aof8iceF1WgWnyPam8ejYLYA3wpNz1Bg88eLabVi1FSFbS5zdB",
  "key3": "Dm9mMjPbMsz5k9B66DmdFRb3rUDwt4ZcricNqXVXvUsbP1EWczqQjn4yyFaKuU88KVYWvJv26WZz37kmHvpAkdp",
  "key4": "5xtVYRMNQK1PyM7sYJDiGLL2aMbVAi2qrDvsFutQXKVJWhSU7CtC7jpxS7YmwygEb57958tFBGvocrvzqcDS2Gde",
  "key5": "49nVSsCjLkaHSr2Yg2o1CDvmb3BSkxfqsthWUvtjrD2naQoRfaG6j7uPRhPZNwPsv1f6m1hyNXTNAragvzpdsd8i",
  "key6": "4jhnEQK1GC8uBtv4iocUEZXVB2FiQxdBEkLkNfGUS5nZnkTQB3ihsJp5VX245pTGWGsCbSi8Eo24BSc11okLk1Dy",
  "key7": "2x9c6o1zbtHucWrE4bSBeamsvkm2HfVMA87vSuFX3WeDhwRQcy3bDoExAfDDEG9j1JFjx92yRtamo2rXpAo6szvF",
  "key8": "2hpeJUMHyA3TxLs29vFvrX8JgaPip1DQ1bhu6BYQZupcvHBNHPDdZ1iqvq7Hg76wv9hT8Pc4dVbQV7sfe3X5tFgq",
  "key9": "4PgXnq2ycrsRJR1Jb2WbKxiaJdesexKz6Bfa4Ahescfb3S6vQkFqkD79Kt7UDuQihSUoo7suRkSYV8N2GFChFMtv",
  "key10": "3Bn5XZ2fMT6nvo2RFQgvLV14XvTLKh5sMdwZGGSSU2DiBHweUTnZjMegYyaNJqff49XqTKSDqJS3Z8Q3REVqYTkf",
  "key11": "dDJADTeMuZWSMbRjnL5J3kQfbqLF6mdgdn4Q1sonDEL9Rtf2XkbSRmDrr64Ai1fpatqH1u1XceCFpbrdcCarGBP",
  "key12": "qtVKGo3HwWS5PK7AiByhyNbxWbfd2ZXWEzh39m43PBksndawh11ko6mYWkiyztycogWy8KkEYVrpn6s4HonREnv",
  "key13": "3dHWipPMJYqQohqj3tdyvNwfkiKPbUBX11qsVdKERZ6koFxL5DYPgbXzz4F79eyFnY2GAwe7HMTdBEr1NRtgoZmi",
  "key14": "CFcfiHNPxqtDBWjwS374nKfeZKdg8ZNqXs9cFyccpT4o8ATgUHPC7nz9TWPZfgsMhBT61HrW5zgLo8RbPZZkpAu",
  "key15": "3U1CDKY9upufknyEQSdfoSYPkoMsMnJVegq4vtoNvpCmoi3GBUNdbpTwLJBgS98xE9EHrLbb9LqHpgtpqY32RmEo",
  "key16": "4ACfLNVWVa5z4SqYxdudLgXUcKWT4oU4pT6gazrHjAM75NHvrmo7n59Jznzw1ASXZtYHDP3hwqVNW6cYu5UAMMbm",
  "key17": "mwcMhuGAGUHS1t4vuHuQ4Z9TGddeMNdCMXarVD2eX1RwJ1c8BVtnN3cLKF7HUoyoTaFGssC6Z2sxbQBRDgyQEJS",
  "key18": "2R1CwPMZ1MHXERPXQy51kriN58ABKxocYKUQ2wjXdrvD4N93b7w5SNq1p14DVnA7kf35EdTuiANS2u1QuEkKBDyr",
  "key19": "2YM7zSLzPaitRbG7bx8U5nukxZnmVfaA9ZqJ3TgXGarvLnoisKhk8hdrR1GYP4KkNvXttYF7cq9hUJ7PjbEqyb5R",
  "key20": "46pkbHepsAXB5mudCW5CKzZGTcKCGNzviRL52TAGiKSyLevM6xHPkW5REtFh1DDN9ukEPbF4BuUud8K3Rr1s3A16",
  "key21": "5ZBKo3yU1w9gMueoHJv4AU26HQvMs5PLwzh2TPk4eArXWU6hHyaEbcwVx4jho76zij98RtqoTj3Cy7nVauhmZ3sb",
  "key22": "2wemRFeVUa9fsVk2osa6FMwrR5gV24e86JFnYL3pJzv3qQnnYaTGSWEGwBEkLRde2LNzQHc64GPr3sDo5uDBR1pn",
  "key23": "2aPoDihsbsFyvFb33zbuDHtKMHzQD9cbxrv32Y1pW99dpZPL567HACpeE6s1L6nqoLq1siQJiprTrWE71XUgTbZ8",
  "key24": "2wyrhJKWFHraUBR59ZNaYuYiojc57x9DRqZixCTHncpPBZeHXqXUy96VkUkia24otpfFApUoekrjkbnnWjVZtuyz",
  "key25": "5sta6i7287TTy9ePuAxXPNz4PBjCBrbb41sn3oKjawFMiX3RQpfnkhQYYHAoSEQ2uqxrJ2Jb44KK8ak5erNTeNE6",
  "key26": "4GfQ9APgwWBNBvajZ83EYmnwFGYseL9HUbZwCZ4TEsibwEi6vQuGZYQHGGhddEKpcfMfT15aUtu7xpLAnFka7kxP",
  "key27": "kJ2JZxFHcyudDGj3GKWxaFfGgfdYZVXtGJNTZZFFnKBmfi8MTSEhoFp8ZT9LQeY8PWcf3aPxyBAHscmgaqVUDiL",
  "key28": "2DENmvrs7Znooa4WbS9KkLVpiyEiuT8Hj7nGjHHzFWko6hLr9frEe73FZHTPDHRcTDa8kDgLqvjnPtVRHMHL8JHC",
  "key29": "4GfPCEpXNZSYbZkdUTG8KxQYXXNkUxFsFkUwHTxX9mKVeR7fADhiw7phEHtAQLEkMV3NuJaexag1Li7YK1t16HJB"
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
