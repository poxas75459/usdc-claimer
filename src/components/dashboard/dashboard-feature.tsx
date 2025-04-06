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
    "26Hb975JBwpyEHrMRizu8vPaBCFmehNzVC6A9FUVquqCSebqTqCyiMVnuF9G11suhUBo9wAn3E38hVaRbhh8xQGX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XQPtzCeMvGEVHC3cxQiFYMYQZrEsLpwv1YLPTsRNibPMzQQZKs6fejeZhK66yLt6L6yjxBXM1EQrnXpKvUtCXmf",
  "key1": "4xwNkY1L7Btg6ejMGJ81dkgxJ6QhamrdCpibJyy6Za3Ai81xap22A4kK7rAexZ38A16iRczhPCb7qZeAhBJtLkT4",
  "key2": "BfCzzSj9E1823QBTAJkJCReGJDUFAuBCShsHw5WurcoC1Ycs5e3EJEqYpcCTiT4PYMmrfoJqGUyzcQJ5Yt3tovm",
  "key3": "3u7KwDtvBFfk14HsMcfEFEFJd4ZTy4Jmkixo2VQ5anNMo1wmBjUHNwgrr3bHAimwe7HXYqNjKPAUAGmMuFvh3Mtp",
  "key4": "na4r2ZvhYi2qCSPKHMHSp2GnLtdFNFASWDWJrTHBU9Nx1vRZZBzEr3veZtMSc3kxavsQxdZEAmxice8iP22omy7",
  "key5": "4EWxss3HcqbTJtAXcdzL9r4562Vpr2B8UmrSve8ZKNY7cCgSNdVEF14qKQ6kYCPTNhWQDRLvzspwCuB5VU71Pyy8",
  "key6": "25jhKxLm7Tk1owaiXy3rRAZDRmGTZggmykTRLQ7Fz9eYt12ifLS1k67S6KwxxB2pBMh8fVsmCYR5ivAJu8oTb3rG",
  "key7": "27CwKTBLdNgDFmMvX4uj1V28B2JFE7L6UjfmdYQgVwPUeWAxVgoM3WyUzqhVmm1vYjyqQLNzydvARabhW8vxXCpw",
  "key8": "f85resD9fFR2Bqw7mSocrmuNPnjeSCQ8bL4NQshDjPtwsSTjS5PXcKUDupiv8TWrnY4evtdDQFz8qxmuNgQzWJ8",
  "key9": "5ifi93a3Xoj6xdSsQawCR2GE5f7V2zFYUFfKvyMF7xfmdPEPnhyRsXmbGGZSVGA3KNtJgXJFTJTJ4MKZiypGvfrF",
  "key10": "3v3NgKaomFFbhhofktzrf5uXwDq1YedkshKAHZmMDNydjLbPoed8aFw5cYC6asmxRECfrfszXfo7ENidjC7jgdzY",
  "key11": "3JjPWBakBt7DN18SzqsjDsUfUGNaMu1gPL5e4J7zjWu6ifb4VT4cQRLGC2tC66x2pQK4MZTJ4mLdptFXNqi6T4AD",
  "key12": "2R19fmg2iUhBfcJNsTFwxuKkeTP11RmM438tkNegQwfeL54P3rbfKYccwDwH5CPJo4avZ5NoWgtudXnioR4B9bxv",
  "key13": "qjDswEdEre27KJ6TaBJDwejJFiAXKabkQYtru4fRXbvNZ3xWrYNsbka337iL5qjzBCnSbPwiZVyvixGzZBwhVLV",
  "key14": "5b9Y3iWviYirDKd2ATiP44F6PjDmVP8gr293R9MN1VchP23Wj3mtaxHEc3aPwF46R9e4wSFtr4sW6qDtrKbaNEYM",
  "key15": "5FpesPAAMRQqyVwnLMcrdZgAwtcASNk6RYQhMvXtdcSoZp6TZ95yuLctZUef7HnEQKUL2us7zX5GNjY35H7pracV",
  "key16": "1XPqVuQUG8WppYgXKenioAxgkdSpt25osb3sd7LnxG1479LXpvKeKjwu8Pcn3NY85ug5TsWYMU8d6kTJPGLuPZP",
  "key17": "267cV4MALr2HMTFR7QybjeDpiXB68i8HGFyVm78ZGU85BTSjpvTDhf8zfSooM8PRYGtjxuFNUnHVTr6Z3rVwLo36",
  "key18": "34JAKdWmDHXMmFXMNy5v1qbo6eNhatqtxfKqKioJXL5DuAut55xwD1PWdoxGx1ymUPxYDeTyTsSbjWqBypbKWdr8",
  "key19": "4vQyKJmpVB5pkZfd9AfKjspzcwGmZD91mNjVgjQ1W4ZQa4k86GYvWWkbBHJTMybuHLBQcRDQeojNeWGADKmGjUZn",
  "key20": "4WitB1xVCFfrgyH2L8TgoBYdngWgg6B2UWXukG1GZMMC9zHZg9zZgZEFnUkvGirAdzNf7hQL5MsEg8DiXR3tcxpa",
  "key21": "5AqxcCq3LLoBUFkCs66pQPTrnpLV9j43JywZ4J4R9md9Jq8HeASgUBubNCazY53t3FH8aE6SeE1cA8KchhwbHJWL",
  "key22": "3xDaNaj19M8GbUohumzQfrir5mUdX5ayZPy4vFbCkstBp5zhyLaaqgqMgqZQL54aN8j4Rg7E5Fatzfx5Gt5D84DF",
  "key23": "2b9Hv4EyNjpmRKDJYvjgpo2EQym46UcHaTBNgGdynhJ9t47i7hU1MxGPkDZBEQNGsxypHMwLBqDZMJ7RuEfLHJx6",
  "key24": "25k53Nm4zoeqtdKMDpHVBbGE2sSi8Q23G6AJtKpVcJKp9PfZZQNUKPAKMtdUWKbzRcknYbMiMsUFVEQBNBoujGJj"
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
