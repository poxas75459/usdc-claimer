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
    "4BnsFTWDTzfMM2PuDSabrZhQHdz6JR39P4FLgpzbCHcQRSsXtLH8PcNYnDYzbV1LTPTEU6iqz4ALtgVTSkbLsDdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mw4Q7o3sBoMqWJME7XbPzDVD66bBVQRihqnaGKxHpKDamM9F69u8MGyfWNmo7xrVGWkDqD1sVFtYT8U3h17dby2",
  "key1": "2q7PnsKSPi9d7fJUoHkx5Pq5cETyeenNXMEEuCZEuAQzrrbeGPsFHaR1KwVgn9TtVWg8wAYcCm4XUw4vp3TVXU44",
  "key2": "5W63RoNkKKuvNy1SgFPvLzYeR3ZjKMABNAj472Z3Fm2nKDjqjqGcK9WnfFBPXjkKF1aXnDNMRJwRU4pPxFBjBQQk",
  "key3": "3rLY8zTGNtam7cd9ZZJfe7CmDyhWPDvByJLpCvNG53VBBM7umoqU6foRWWntbQiYUwyy5kG2KztCgsHjaSznfMia",
  "key4": "2iRhvPKsZ9iRsTgDsFyvPoWk8AJTbcXDSCBGAAf45cW6oYHz6SrRr6mRez66SKN2BZRCbg1VCctC8a3GGnfAAdDG",
  "key5": "2fDZwCLzjPKU6q7GboDsLX6yHVv63jGGF8mR5SCLHwKks5anTkwgsLXoh85QeMvYnb7yBkSATNqM7vw8XEdScoRF",
  "key6": "4vNDRCW28rSLVqDi3f7AbsWkG8wu1REvm6c97mPDUc5YQeEuB4Vy3Dz2aqfDiViwcUdNEfM2Aj7xR5Anhif2t8QR",
  "key7": "4AtwCn74oAJnuomnR2zvcbhuy4QHcnkp8kHjQLPL8Ug4PQ3oR5NZMTQreym9KUePWKhTTdsq8kadarpJFYprfaRg",
  "key8": "3CTEYwchE1u4gZmDhaDVf8dHCwf29tdmjrvmbp6jMN3A1Pd4NCQwk3GQrAs3kSVpzB9L2ZssYjauPUPCxhS47F6e",
  "key9": "5VCF7hSb8U5vt24tpbi2Ja5RN4bjR7JuftgHCze4bo1SRybX7sB4bMFm4RbxBEnwCua9yXY11xBvqqKEfUMtSUR9",
  "key10": "2GsPxYRTauwyjB7PD1MGaVRkV9UdmmCanAGFKJpfifdd7F96fmv5uiHSDHPhsLVvyQcFtmjy2Vyz8HwXfk6WsZQH",
  "key11": "3suNFho4vwvz4MSEJZDWEWesfqmAHFZRhaZ5dR7rvfzmyb3wSD14s9dW1zSSQAbhJqPgm4K2SxomJr2hhWfHX8gJ",
  "key12": "2g3Sxks7PPLsHeiyeD6x8qZBRYkg2DdAiicFxQiJeVDj4YnHYoHSkrBVXjo9WEimtm5CMyiJvCX3zqB2zYF9Ky4B",
  "key13": "37UKJzwJncQnZbdfnmaerDYq4112X6EXY7bSo4dkJCP83K3fugPMM896DhqaeWVtFLhd7EKRk495MiRLmDLir8iD",
  "key14": "4VJEdpMh51YgFCReyYjF9pVvSBLuMhC63JR3Y4CpbZyoezhPBdSNxt66dezZMPEMZypUioCLLWjnBh6AmezUCvwU",
  "key15": "5Kxtg1h1sTjbQ1BLrk3y4n2JN7fJ5L1179VPfvkCUg2dAKJDonsXnDqPcg1zsBn92JQhrvwckYkKK2TNAqberiKp",
  "key16": "QhDcvEUgQG5Nt1E6Jnz1TiwLV6yg7hAhFmDJRjgEag4YNezrpkq5UtBUHPDDYcU1aiGxAWmLAUM41qmCzy96b3Y",
  "key17": "zxpmcyrXAdWMBc2dd3EC6fQJXSjak2TEsTDjJ6ywaubWcLK2afRQKNXrLPBy4yNi6FyQm9CyDtuNLwX47t3P1nZ",
  "key18": "2w21w9t9DjJjDDMtXArWdjKkQhmUHJDP1Cj4KCvGLK4rwFJfuAYLhaNmaSCHP5QWTxH1MY6Vq1zB9v7E6c5wAfLq",
  "key19": "3S7e4WPg4pmSQwuSk7QvxPZwyus3R47kMNXYxa72ipWdhZfu312gkyrkiatc7FadE6A17a25W7y3VVJLPLrfiGu9",
  "key20": "3pFwPwvv7vfKokg7tP2e67kkWvw23tm82LFNJQf8ZZGimZH2JZL52HxPF8eRpeq54UG5eCaGjijyyj1fGbJRxdZX",
  "key21": "26TxMHg7yPPCM4Ryc39fjJHJGKWSN8Bex5mdjSgNN69EwY3fVkSz1D16VV9HYFizNL95vBFDQvVUyhLFrzBJpEXQ",
  "key22": "kqd1CfpFuJqtMNBn4WdBYASHdRtdPfKBKTEFvFN3Y6wQabAsQwesBNgUhJzJmjiMxMx7gEydNCbC6w2yQPxef8c",
  "key23": "5vnXPqjZce6SWHbg9WD8rbe9pCWkGXktDmEPSVQ8Wdd8H6ZkZreeYnY5QVF4bw4q5impsczW3AKJWZh5nfjXq12T",
  "key24": "5ey4AKwJVugYKkhADhecEoS2hNNnqEv49CAJtqfXyiujxJLECGL367BJ3xcvEKnTgPYqb7AMukkwTS7K4f1U53jq",
  "key25": "3gL3EWyx6TnpoH3iPKYRwy26nPi7WRC2uAKQmQa8YbikaHA2zsWvaAQD4AD85XfKug7VULEfrQj5FyWDjt8G2sKr",
  "key26": "5brNybSPc6L9TNXQpiR5otb6XxjntaBvaxz8WJQL73MzwrARrSkJAHufW5i8rdNGdNwhGsiK4C5oYaf24cHaGd8G",
  "key27": "2Do49EsRkqxnawfiVrcttPvLVanPTz5MuoTKheGqr44LgbSMKDtpGsCPmC4Jbxs77TVwyLXtF86PKmW3qzodYs4G",
  "key28": "jkxukmEvyFWXv8q9Rnyh3RbXqqR7FwrWeCtzibaDLFHDDr2bMBG9tF9FGhHw7JdjGGfdus7BBg1rP31n5UXshFJ"
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
