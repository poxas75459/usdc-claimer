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
    "2CrCaAJ63i4JBQZKXTNxZ5RqDfgXSjjmT87VM26b19xgR3sUm76MgefJRprX6c6J8CfvzuJtEWJ1r71jMjfPEVfZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r5s1pzCEZHy4XLpWpRCkHYYKrnGZQ6MWF4pLCQoSLJ2Kzo2brahf5WUtUjasCarmp2BUscpKR67L1DszSRQogZm",
  "key1": "dpNgHp5Gh7CDRrYEkEJnPdKHYSJtUZ1Mq4wnBn6AfuwbSG6pbT6osumXNQGa2CU7magZ2LktXk4sbra7DSi2Bis",
  "key2": "3HSwUBNeHPe3vbxzHn2a82WhDwZ8LEBFKePMVKTRxcSozuomCwZxM2ACDDoNN9gvfBNwYHBMukJzUcA6erXtBb2w",
  "key3": "5JHU8VmUn1Ncb7wqESkYT4Z1Bj5Hg12q3UPVAyJs8zo1XW1znVkAfBfpfUdm7tSLQCATKf7tBqftUtiaVCLuedmu",
  "key4": "4Chvs4RKr4Cg3b2UTuzibWQVTic1VuB45CtR4BwvEFJTuLB5DsEyuH5Ye5LDvA2MA44uCKcvFxfRTdboTJqfmio6",
  "key5": "3AbFPSyuRx65ztsNtiCTFkrgYe7Y6S9Cs6BfjmByePJrtr9QtP78Lc7sJBtekByyWrd6zKVPD2DqNBhvVwTwB2qS",
  "key6": "Frisr6HSy5oUaCBVAyZpwghftgDU1jB7uP7ByPDKrFzRJGF9pdfyTowF7Z6pdKtHcksbUmHLVsQ9wnJQqmAygWQ",
  "key7": "u9qc6yTxasewpBW8k74YaSVQSsZhbY9qvorriJ2nw7a26mBjbnmXCmeehZQLSYpJDVvq31CW2MY7ggkYo64fB3S",
  "key8": "5jQgSDaJq9VFLfVhqVi4kagACByMbUFJ5q59VQtCcB67HZ2ffGKv7v7zQExnmr5eSvddpdCochyfciz8b7gBTaM7",
  "key9": "4vwwDzSd5zg7MFr4rtYufqQv55uNWmJTM7g5Z3YptgU9MDKJW9ujoiUx3d8Zv5627t4eLmg1wBoQYWCiZ4LaMYmr",
  "key10": "4zXxVkP1nzHjKXcsuXv3cDHv3ejyEw82zYUN9UsdjhFUNSBDzWru94qWFbheZEQ1uCzzTvkkwe7ERdCS7VrXDAo9",
  "key11": "223aVa2KuZ8ERzNuHve189hCuSnXnTBn6r2cPHbDhG1zuiDZGiDce4max8g7xsBqy5SDTkQNo3s9UjByntTpbWRS",
  "key12": "264tztDnm7m8NcYv2CHsSc6crZheR8QWbcXdYQxnJVDZeD42dbaqG5rwPBxR5vYnibH2mxzaVxGUCv1uAHdyF2kW",
  "key13": "1DVk6ML3W15TaSwQUVicBRYR84ruwnpsBUDxw6NcmMdwyQah4REpVASN4fiZG6nmT3nkKWcKjpJsianN3okMmCh",
  "key14": "5b3tvknt3RTdaURjDkvzyhQxhn1U3ABPZ6yXw2HZ4iiYTLUE7GhxMB3DTqaZ7txno3m5q7TChkigXGSZFi9a87G5",
  "key15": "mrdGrVXvVdhgazfnA5jR6xoWKaRuHY6eR2ULkRrUBdmR1Uitsm71yWGcxG4eoRezPBUEZRRWeR8j9RgV1BUNZ6T",
  "key16": "RnXEkrjG1xcAYXWzvCnV1KSsoTubGKwCgxBJs5m84Qt2m5fEbYPNVappDa2cs7uJUKtwddizoV7n6PgvHEpygDL",
  "key17": "4g9sW5xKSphD2iiRR1V1zZtZTQR1UDbhBqvj71KG5uCCebXSfuAmKqdGXjxA4B3SHD6gpSLvNFWcFQnoJQrrKPWa",
  "key18": "4xNaP7YbwfRjeXbTq7bR6mZzdfbfVhw2NfjM2fW4xwxqs9MJPDBTbNz1pn6rNiwxbaZAb1pfakFbxwWTH4hAw1nN",
  "key19": "4zHnMJ6k3erReHnYhKVNffPEEAmeBszxTyCjiBNdzK46F3JTvm2hagXTSUEfX4ARKzs7KKyMVNX9zMtc3ZDmPKmp",
  "key20": "LVcz5i1oP3PVmhvmiXuz6Vx69o7cbj4fixRyroXKpT8UUHcaEQH5aw3Xav62RtzEFwm92teKEbesXjv1SUZp9fa",
  "key21": "5mhffqhFF162ZU9uYYSfFuzkgwx6L9owAftLzxjag6BR5xqsC4qfzUtMfsVETVrczbkaerYfYqSnCvVrLH53gB83",
  "key22": "2jjgo7S6e1a7YjSY5Qma7LyyShEWNi6kaYzDZcLJPdmkUnAHhr1FYpdHA7rYfTksNqKxjUmyWWHWQvZN1GENw6oG",
  "key23": "3p85quRjXZcrvYdNJKcfh2Da9iJQFcUFALjJi2SfJ9gMo5QtKgBodn4kYGdn7Z3s6DSzCGStochX2LnfyDE7FUd2",
  "key24": "33UKuXS1dEm9hWDWV56dsM89GPoNts92BXMxLcbrRc4eU9SmuBHFtwRSLvwypye31jamUSWoUxjWRsb7pGnr7sPF",
  "key25": "3Xd7QXfVHNXXiEw8Bgz3BJEAx2GDq9q1W4UVAT5dzzS6NzpcZgjCKaYF59p6whEfYcX8QbziWAR3eHPirG8nG3zC",
  "key26": "xXc2nynfHJUu7CTgpPeChXT6k63Bvwwse7mbUT8XZEwTMmfmhVDGbP5UGojbLEG3DYssimFXmCC3FrPeAsp1C2o",
  "key27": "4uhEEZ4b7mQrNkGBtutxfJAA17aUvfeHqouiVQ82WMj4a267zUYvGDW75GN7aywrNboBT3Ky4J3yWt2aivd6qQg1",
  "key28": "eYKcy1zqWQFAu9HP7iEf63uPigSSyyJWmyoareCPgjeTCCQ8kWLNDnyCibj58HFuSaLbemVPFLUBTyEBhX5Wgw9"
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
