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
    "51LK1M9eULUK8AsGL5WqsAMDBQHC3Gz8tsvbw2rZ47ZBSu5imzdJmYXsRPMejFLvv1ZZBFRvtGe5BK3Ei8aQAnPc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PDXeSmEuRiQP1DV37t4fRR9RedJyJHHdENKKoYmSUGAdwECqXziwP16rgvh4UbJcYNpcdsM4UGoTZazDigCzimK",
  "key1": "5y25gwmQYzYxB9YJJ368YcCTGJYK9TvXafYC53XvMnnaBex3TG8cEm3WeaHi7YRkpWUxtBmTrBRQU1iFhHhpnaLK",
  "key2": "2WedMiND5hgPBUPZ3ecr9ZrAco6Pu4V4PJiDsSfnAuLm7pR4DUcjywaFeqA4gSsBbiZKzPbWrxaEEVmNGq7rivnm",
  "key3": "3XoUYWcaa87v77jQmzXiy9ob9U2R7nAcomwK8A8V6JooxKnxpLAEgBNrSp64RWQNEZuPtiFaNdhkJaSsSzqm9T2g",
  "key4": "21hZJ6Ymn3PWB69ki8Wb67geHDHk62m14CriDq4Mp96UgLN9Vwb9R3J23Evvmu47VezYp1o7LoyRHq85mubk8Au5",
  "key5": "4NiYiQa3Vi7jA41sTEAS5kupMsgvqYtNUtpcw8MivzGygjovdncZCmzpzGLhQB86UKSL8gwRNF2LuqVsxePo4G3t",
  "key6": "31QrmrXVxaSWD5XCpL4CLGeDw1Dohc6MHebaGRKZGv1P2hK3cbctWoPzpo49UYKsW12KPgGYNnDKUZ8ydu7B9edg",
  "key7": "2efojYY2ttt9Ho7TPxYkzWyuUmNH6Amhc8RTnzW8EQ3Li3yvrRD5hPpXQB2hcFzYJiDG7PwDPLrBa1f3nGvex3Wm",
  "key8": "yKRJyy2A4dxLCYHiHqBUnCgStC6dx7xEowAQUge16MuieLZRAhH2rBfq9LkszWExAm1fPkf81BT5kjpPszSfQxd",
  "key9": "4Qq5EqEAiMT3dZJRLqeSd1Zhno6nKYezvY6Wso5f4LEhon8YcatokcY3v4EpQcckjrKJRiSj9M8Dt4jKtDobu2Me",
  "key10": "5eyev4BxM7KvDdTNwzzLCCDPVv8ctLr9Mj9dsLtw5DitykHs4hPAhiM1nm1LFdkTdkwTRzb3ktuvmXzVf6sKuvY2",
  "key11": "CcFEDu7TGzUXXoMoBHB7oZojt1FKp8xEyXrWcC4DjKZx9CvQCPV9VxQQJajeHYKG2AJxkivNsuBQ2NF5fsGvPsD",
  "key12": "2RiwGzgBEC4LXcwHiDD3avmXZTXYPMCsXbni3Wo2VuoM4nqkDAxvV3VjezhmZ1tJdSbchkJbbHu8v19XGGFfMMDG",
  "key13": "MoFfUkweqfFD5c6dzjXuANh9RkPNyY1jJZvaFJaD1RnKcTCW44iVm8XSN4XbGy5ZS8evftK5jo25VeMP7xof8ai",
  "key14": "5Z6Bj5dNohrmngh2yRn9ztpvANJ8ymWp7Bm7tAFMmqbz2emZvoBnyNQdmAwM1Z4DKUbVf4kZTnNavdt6SfNPJ1d5",
  "key15": "48cF6KrXVYKcmpwoz4UEKdQiBizRaQVb39xia3CAjZG2gmXXF8K4utfJWcDwUKwveHHrv1T5sBXneHZLVZbxnTZb",
  "key16": "eRxomFK6ksQ8eiHda3dpxWzAEXuqs85NkdvyP2BLdNYDaeuQmkCrBjnmkjazafpWDd6sZMiQR3w5WdqKSSGbvaE",
  "key17": "2bNmFYF7dYun1tHrwMTH9CNss3xo3FZ2rdie6odTaBxLZeL83WnrJLksmnfmXU9J5ctZEhSbmuDbTFRPqnLHYAAb",
  "key18": "4LZBtUpBPV2a8hejsbrfpALrxdz874AocjCbyAHd4QsDpWCVyx4ojwyBQHVsFx4rCxiPqSYNfG5wNiYu6BEMFeW2",
  "key19": "4uBHeDfW2rRroiPWWpnFb5uCjPGnwbgXtY7CWVwZqi2NjhrZ9CjkagDFEwCRRqS6WTKSjVG1YtvciUBdCLwpq4ge",
  "key20": "3r9xfL1rgR4mg1yNeSK7ZUMmVRazkXN1MpJtbbWdDd9MowjtEXwWDQMjbPprrep9gvS1hGpFszpBoBCQnjWycuDR",
  "key21": "Zwb1uEhdbPTA2wuyi3LWWncj8YCpE2ujCq3wYXNBC1p6eDfkkhwCviotu5c6xCWyuv4unahWjmgSJs3mUTgk358",
  "key22": "JewT1xaXLv2QJvyDzXAqhyvVmtQRMXhr4Rf5BfZaw6YCePKKhVcEPVb8r9MFtpCUQkEvg5VFB6DHaBhkzzcwcy5",
  "key23": "2J4DzVwUtDMgFTFyQoLkHrWSVPE2pWHVAJxbTyPcNWjFcPtzZboo3jg35PJxyXVhXhFiEyhQj56NwTmaXrqj3wK4",
  "key24": "NUMo5RQNjRAt9k1EhfnRk7CAKXQ3kzwaXf7XLytbXWeW7xLporfZqikYFnNjz65rxcB28guY4FeQafEPkpbVTAo",
  "key25": "3H5JAorBxMYff7FGcxfkr5iMsoMT3V2WvBCe3t7K96aWyVwhwx1b4EBkeTcg4sYZpK3aVpkRjmMr2pKUvEoERpvB"
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
