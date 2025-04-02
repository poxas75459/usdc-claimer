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
    "5tPBJUrRTMdZp3gmaPcsEJzGbyiDc6fdKFreknQoiaCUySAx9Hbc6rXpJAxzQuYmLBrt8JpKHecka8wzQQnA83Uf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62hdNw9NkoXB5yZRiTCaFp5kGKGq9i5htPVgmrv3HABMMFj6rc4DWMFwUNaEMgLFnrDvo3Uy9fEuFHtwv3txGyAN",
  "key1": "2W85j7GLcFv9KoQVZty1jF17qyj6nsdkfAn1LSX49qQKhyfiRhz9qSsyAvqytsvJxqeYQPBDe9sQxT6s2Uq6Goom",
  "key2": "4Ggime6g7chU41hs4NMhgT1T9Vh4RTf4dBoiwxowXSMgzbqz255BPPsfm2mkKv54QpAiwoFvGZ3CEQvddP1HNkjz",
  "key3": "4gyw2VHmS6v1dA3oKQrAqNGrhn6MTJAXgvBe9tSrQQCbMF8xogbpcLHdjM6xxqdVjy3AVBVCd5xXkd7bNKUtr75U",
  "key4": "5yHRwy9RSaD9wRed1SupTGAHPxCfzjnFpbxfpEirhnawPUXQVCfpa7fvw4Hm22oddyqqwNM2pn2HAmJnwM2vbths",
  "key5": "5Tc1mjpzUJKhiciDNwo584wP2eZVAiAGTeK4vYDrgoVF4viAdpvNN9xnDf81A4AD3xoe9tbJUUoZJrMbGsq8G4J2",
  "key6": "FyNr6QhX6z9aNkZs7oMNied2uWhad34MWS47NKHdQC7YhzQjbRmnYM83KU2Tvd4GcWKssjjwrfTSGBx1xB25B1N",
  "key7": "2cq7fJ4KdcXg7caXJNWEskLk2AUmjmHHXHGUL6ZsDRi4HKNRCxfKXsagySMzriSStTKpqHoj9fDagmS8kFZ29fNu",
  "key8": "4pv5cEAN6aqJwZ5FoFev4qB49qmYzoQDU5B7tN6cy4yyWwuCGKF8MBjuy719bvKtBFURGxwtV9qbSTbTuDAaW89a",
  "key9": "3A5tKY6iGtLN3yWnBzguAFUnhwSUat25g35eDWsG7whYuxEqG8C897AyYjQMgzF2THZPm9HWcQKiAQmuacpdwVSL",
  "key10": "4xx7QquAPnNTJqbjZZ6fJBMDwmuHkDXR1EjjxQ4xTHmKrWkToEaWRU1Y9Vbw4SQsox8gLTxTbJBwDUZj4vGT5kvk",
  "key11": "42QNXDxjiwm3y6gkuQm7Z66PrYJRq8tWAUTP84nRFZu4JECroCdkbN3Bfu94iy3vZ7VdaSf1s6QnQq2sbeoJvWd1",
  "key12": "36aEBYNnwbgBXgKbGZaqpN7kTBMw9CkuCquskDmuCKubAHfRTAbVVVP4UxFo4CXaLeAs18HmLhm8HV5qxohh4Fux",
  "key13": "63v5KkqxFD9WP7iVDmLojh2qge6HDVejy1Ffh44pY4tnmY3NHQiQNSfpCBqqcRTU2skY2cc91JHcxrN4dLvCmPAj",
  "key14": "5AVTEsmqdLGRGoUieATVHhsdNXkwpEjqBXH9V1rVmJTZXoL7aDazVqvdxMzf6F3369oSiRgwbr58ekKHxDrjuzZu",
  "key15": "4ArENqSYQGTBYcuoepxzS9peseLnopNYfR2qxXhj3FFSA59LCArbi7g5xGdDRBUiMXXQcGi4K4HgwTnvFeAdssHw",
  "key16": "wmYh9NjnCAtmQMGkAG5Njs2iibeXtusWFZrGohK6ZPnKttUdKUmESqa6e5fcuCSPcnXE5vJWAv4QvyjGzxBrq12",
  "key17": "2DBQ1WLDREX74eEKNhM7exFFXDUo7bcJxPYMXvDV6FzMKXz9pcRyBsmpwmebVsesPGGHFnBxtcRiuM4zKPicy82V",
  "key18": "2F9aZ7tcymGaCk1T4zkx8LRbfWNtfdVjYLMJVVX4hcZo5kkZJFp76e4zJ5WQkuvfUFpKWkXTDmDtuWvfiLyDon7T",
  "key19": "RXZa1hsXqk2U3rEYvshVkfaibNheAbVFJdyTUkHmLZpGWatRBBCWzAuJpKT98WYf3gVkbugaSojEzvhnuw7MNBi",
  "key20": "oG9nuJ8EYfKRarEL1PVJTeqBGwSJD4wYptLfeYZvoVozRJ1vLJbzRruDNas7yy3QyTHy5GT9k5L69RLvipvm1by",
  "key21": "3iHKAhHx24746quuaGYqQmXmUs9XDg5ksz5Sb81SaNWKXKBFp7ZV8WJxUmVfy4eLZAZQtBuwpxLpzYerADZMP7xT",
  "key22": "5ZfxfVW4RjGQgxg9SmrkocfUm7fk7S7Zw5EENh1qvSJ7Pu3MVSJHLhCHcaBXovQQAUBcKYLSsPzFgYbaNceVPeNg",
  "key23": "65u7qLt5VZuUj6H3EprnELXttueRLG8Eg4ebGU85nyHTTqX374YTssdxaJnb9zW9f2mg2tg57rQM8rfzQ9Ene4Zd",
  "key24": "5YRQGCeLu3BnAk2URJcd6iaTapEUtbv92JG4KzyN6LVb9eEifazbZPJhJPMaL923dnkxizLcesb8j4XHyDRtTauA",
  "key25": "2oKSHrqwgLAMxCs22JKkhknS6wnPdvDDxTjuFD1x72JkkQWyDgQQXf8ENYBnzQv13MdhpHbZK3v9Knf177SGVdqS"
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
