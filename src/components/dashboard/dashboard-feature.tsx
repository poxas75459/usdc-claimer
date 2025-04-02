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
    "43wPNTfLfkppC4WYxsKkq6Ny8786Hnt11CNTro9XxStmJqWs62AvtJDbH8Pg8C56jD57h619hVNhM7DZx1ud7JAz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58QeqPoogsagYEF7Bo8yxgf3uaQppJ5bNbadPvijFcXyLAGcmnws9fpSKsqfEqoRbo54xsytGLuD3qaCV4iF4Dh9",
  "key1": "5jHhJpFSs2bgApAwZ11Jz8CHQoSKMToNhi2Z8acKdFEX83sFWRoKxdb2HW39v9uGCtbT6u1wJjKKuC998uqdpkBt",
  "key2": "4MeUo3zrGANp2e1cTgG4J8y4kVT4UMCDXuShYnJNNNK2u7EBekUEH3SL1qzVLFDVa5sXxUp91a26AMc2jRjTNm7W",
  "key3": "38tVTPogg698yVtB7HVqRwa74divQA3YuNdSf3R8uLVhSB6Tbsfs8gQ4vHCx9jCkHrV8mu3me6fj7b3nfgoGa5Fb",
  "key4": "3sPtTUSCZcs6ibRq3cgK5xhPgqdQsnWwEzo151KshkELu45r8hYMnePby7JX297jog4BU4Xjs6N7KdBb3fq85xZF",
  "key5": "2JodENAgtvn4kvdoFS1UHwsVYqra1gAYxGrhGZ3ofUK5DHPmvmiMPdKPR81SdTb9JDcv5awmnXEggXNnxajeJ5xD",
  "key6": "4Sk81PMpLHvc2kFhsDEHQfEGzF2GGJk3wuHfDcbjSeW6v3PjJ6tiEf5Fod785rLFkmzvoEGUbiniVApZUkaQy1dG",
  "key7": "38QVJtb1e8PTjwVstw36iZfUaGeTbtPbiToDzyQPuTxD14nZoMVgeedaUJcyC8tSy4ou5N7VneeE7CLVJNBXngDS",
  "key8": "4y3wZt9aAwiFCjVXhfQK6SsH5cExGgBfdMDadkASxNeY2vZwu4HwTiPLAB8NuvMGzfutDZBuuh6rJZeAPcrXbdkd",
  "key9": "5tN33DZtv1HLgKzCXeTE39fkRoU9MAschpbnCTH93ska5jaeN5xBB2xtN3tfqDf9qp5GxBjHFgQA5c9SPoyR68LG",
  "key10": "3XDRFFVmubTn5Y8xPLrMcmSJVCy3Hi4LEwRkedo9CRS9naVPwqJmCSnF3E6umnXyrSHk3sy4ng3J8ttjq4HGfppa",
  "key11": "61t6QncP1wRYXEqiXwt3bE5JhMqP2dQVJiDqxcoPvaVRJ5VHDw39QX18B2DAZ1FinLS9akGMgzVzxyWTZgtcbKDa",
  "key12": "5uAuHAXH3ahxTtCdpRVYjJ54aRE4WvgXr4g4SjfAm7rmS6QDY2d6NZnQsid8NTuXQt6fF1EoUoS13MQ9Wki81JdU",
  "key13": "5R4uuGM68w1KASXuyHba9e1zDsJCtgXbrMbVGQNdtw9KDfK8A549Tk3fBAGBMHEKc9r2qu4CgmqAd8AUAjHB3VLL",
  "key14": "5NPFVdqvoxxrJrF9VQhGDL1ALqtvV9Q27drTQhQnF4TqougwGeMqRrYAxn2nkCJE5ZeVkUaPUpM92Em3isVZLXMP",
  "key15": "5TrZ5JRjTgdcmbnBWwnmeH995PUsWs4A5yaJVCmTm6Ff6HGdRYTvFq6wxz86SEZ3vQLdKMQALLN6C87AqHxN5Jke",
  "key16": "ET3r4aMPbKt2YGSNMLvC5ZPFXcvdwNWHfSk2VMkZFSrBRZt8ML3yHhFCNGSVLDhPWUy27GxXL4XCfE4GmUk7a4W",
  "key17": "4S2Nwax8vFyHVTNCYDFjCRpkmc28tVgJ6dUQKx5BrAPVYTNPRBuZ4F81ybzvAay7htDcndsVYVPgv7yi9ZkHxcxY",
  "key18": "LjBRHbiQbyCtQp7FfjbxD5NFBarKcFRFttjSokV3VP17czUzfF98NSCV1W4iLGDX4LxV89gg6G8a2eKgCdiN419",
  "key19": "2wuxq2YtjVHrnHBgW6gAPPmcsxB6cUgcDXRtuoiumMrYXTqvj2ZKo6FhzM9YhM8q99ZivJrVinmDGeRu7HAib6ak",
  "key20": "5g5q1mqfFZsTmaytF2vwx8NE2wv1XVmiYZSYKq7JvwT1d1PcWVY38hUMvK7sMJsDmBrPt1xbbFQTKtB9WE4owVpY",
  "key21": "4xL8gh8k41YFHcT92V9GustgQKJWBjvM8ZU53LYoTTTMzDPAoVdxTYPVXM83YHkvT5FZ9RZZsH5PEP71xQfeuh4X",
  "key22": "3zLGNjHQqEK33PKyAbYrEWdAvG3Uwdn1CQpXoQmuv6vAGxRVUP5kegvAbufPKRm9jVUjArBSPqKQGWYj72BD5NxX",
  "key23": "3Z7QyZ25Y7zPtVQr92rrMoXkuiu6i58SuZWTfpuM6qaFtaMzZYxCjZNagjEkv18xEKogot6dEmautvTW937F5QWn",
  "key24": "9eVwVTq1kGYM88Uq4oJ3vEegcxXdTLCVTnDBVbcTJtmryMDRnVN2LymfbJDsfXfCYsJ426MAWuR2eKd7D2WGE7P"
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
