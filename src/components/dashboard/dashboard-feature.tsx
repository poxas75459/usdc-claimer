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
    "HHpGBGVzsVVBoMpHGoQaFs5F9ThSvk45K2znvu7Ms7VRH9gxLXKMWwTPZzkEbF17BGSSxAkjmML7tVzJgLz7Jas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FuYyxMtrWch9kEebaTqnX5hHMutFLDmShnVnTg7CnNRNUCfktjFiwQ2BGGNWNfFnkwMEbs6XYLn3rqPwTcLTUVx",
  "key1": "5RPEamW6j1on6ENzb7AWrwkvBenuoRJLcJbCgawuhEZo5yxpYBxt6JegAqnyskmsiQtNRunNGH5aCxjhDRdBc3Ph",
  "key2": "n8Yg8nZcZnPmykLZkjiTh8yGk31ow6DXV5fP5cZmpKhNLrUvacqSy1MdWCNwCcbUCnUMHHTmwa185icJhAfUDZc",
  "key3": "vfk2eRDSMPwbm29prR1DZNfWwZXiuCPXBo9ka2EkZJurR78Za5WripjaTjxQZZ17vj3PgrQaFTNmuuU4APh5YNe",
  "key4": "XR3XCHwNVeAqSh6ASe6Z6tsTcsgb1CVTiibwcGoFwoEssuU898b5w4cdpmehhSZE1c32WrFXWAgxxnwWboH8nTz",
  "key5": "5N6W5jNhpBFandVmr5Eg4x72rCz4mdF5cSqei7vkUrqzjgbCa6ZcpvedTEkghKVQAaPPLQkwUPCmtzdEMje79Ckc",
  "key6": "35Q7PGKCbsT387UDxCK1JoULuDLfdkc9jgk1fq2sTw3XL5PhvHJELNEWjktt31Durj8Z1oxGuH2ii8CyzSwvyeW6",
  "key7": "5vd3Pu7u6DHCLzxWZTzkvDEgabAXy5kH9q8ffqwSJuieRhr8dkWGZNAm3Qc3CNMtzsQk24oTBQLHcmkvLYdkTaYW",
  "key8": "4pCkokH1UdPPgjkDkRo1j5FNF5aEQR2HFLyiJc2HWtHMFPd37UF9mqrUSUyoqChxBbnPbnKQyHyLJeLA9aHMZK7X",
  "key9": "58qk4JJpStqfcXThvKhFVST8QqoSF7sRikkfPhNJ3mo7sgPA2H8YutzJo46eonHxDU8waVCw8ceJuTXbmxyrdBhZ",
  "key10": "5feEEPkKoKpKT649ZrNy9nLWJBUSn1SNLp6CcPk6713KFcHKUpPLuSStK2nFq5asZrSB47F1FY8yEViM7XjvMxJU",
  "key11": "4evYNCFJRnFdSzSKARxpNUPoLy1AZi3ma7hcwzbfqB2poqPC3WgmPrQqfSvDPWmGK1j6xjZryi1NgrcxLrNhf3fM",
  "key12": "2R1WjBpM7wz7fpYJZbyhkimDnq6TqJfcrnVGAa7AFZdhLrtGkGeQa3zFKAX2sRJQpR3BDpeN9tPN4oV41DkguJtH",
  "key13": "4XaBc1ne6E13AWJRWCvktq48UFTyzjWJqwfNWGW4sJcZ3TnYJvFCrLivJb7MgJnkMQLmyZobMbtUZHBpNfc4imGS",
  "key14": "umoe7MdNt5MNELPtQTq8Q2Q8kpMoUybKRW9j2DGwWScjedhp5aVWd7uv6c7hWbQaWvw5B7ZJVwN5JMbmU4mvUng",
  "key15": "VSyx1tFjrGeSjs6xQ51a3hdLfMY8NPteWZszHSQxsYWYho7bHs9A4kSCJBCPke48iDmm1h5p4uE52oHjXGR9aUM",
  "key16": "42CXDZAbVAb5GFodcta1niiWDHF8WfN1wyud2tVVB93NX3R1iwVbgeEXg7GonbiCuCT4UDMUWmobdqBbdhjGVHx1",
  "key17": "QbjxZZNTRWKrPuwHc54ikPGou9nvgRyHs3tkytM4B4jn123t14CdQzst2ReJLK5kdpZ2toyAyvXik5GXXsL6S7W",
  "key18": "3bRpHiTwBCY7Kt4F5rk4JRGi9zWypukLn8L5WUFjZBBUyYqR5sUXp2BrNm3z6RJSTD5hsynToWPSGj7PsuTqwBnQ",
  "key19": "5eEm2t6gzANDhNrNpyhSoaVUsYjt6vKFQiJUqpoFUWtb5uCTCLLNZrnDJvMdS5Vg6WLMzmEP5RRSwa5E15g7ntWH",
  "key20": "47LqEy62oFceGBw8UwjNxPWyp3yJoRgniciQ2S15nXQMW2QdJJuNZ3CLjjMhvtaSN7y2pz3adoQRdp1VbWfyPwF3",
  "key21": "2YJi4KfGXzHepFHDVC3uRztTQq5BagVjLcPKgb83PFXwRnQWfmZbeAbNKXc8TC4o8F9PkL5CDK8troWvatRDyWE7",
  "key22": "3fqxE177dBqSVURe54oCmVFwZqzub7dLfK323obii1JmNQbxvbZeK3DL3jXppb9jT1sUyvHkpKdTp5aUcDEbRunS",
  "key23": "3ABjuMcQybggzP2y5YxFJTPs7wXkup5hiY7Uzt7Dd2BVQzeadWb7B1rMbCwcBNyVzpEvqKskjghfrH2eg1y7pdKs",
  "key24": "27TCoinTjZrEDc7RNGJEoyXNLf7kXPFx2su7k5K4pRAZifsLEbmvDZH5uom16XbJ4jR3HycANg2MQisJDY2HjdD4",
  "key25": "dUbb6EYUXNHfbtv9D6EaGmLMqK6be2tLJw6FCaDPaJSzjcKCH9d8qoHRqjXn6EZwuMBKsAtyThR1M9cf1UWLLQd",
  "key26": "5efYAfAFY3WqJnN6Z2pJEQEGzEYCZa4SSdt5DkXPh3S2CUYNwvg7DEfDkpFKzDDyKVEqH7xWa5rd6Fd3KEvT8gac"
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
