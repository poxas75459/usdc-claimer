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
    "4bCz1Zupvfybz6FGiuHPKA8jeyUV5nW1kQyKYrfmvNVMdJnx9MHSZWbs3brf8TJ9A8qve9VeeHPkqFPmbizbudtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "663GoLPdcBMgx7opYUH3mQ3BHitSXpMLQehERyz58X4HjGMvLbsLxKjcZdidJR1XYLwpELfwvV1HnjLea5PUoBQv",
  "key1": "Vg4fPAM3R5fvXJ4ap8MEsRoQwHCxQBZTxbPPXsidhQ3FoaFuZMgLNBCLXjZyNpKFMbdHewtnE1Yf7izoHYL1FQF",
  "key2": "5qyNaWmUZ4z7YZAo8DAi4XQxXHB95hjgk1m2TM3eGxaZyCqEWaveNnzGKPEpxfAfV4gk2189tqe617ftmwrkBEWg",
  "key3": "4kv8dPGjpX5U38ENoLmSJmavxbWYwzoUqvY44UsqrbEf912m3Z35ro9gv7ttfqBde8MQ4vSXWzvRjTv72fVa9G1J",
  "key4": "sLLTk81wZCDkv3yRWoRwabQjaznJ2jvjf5wnqWKKXRoznbNt16koST28UzY2tEQa14p31YBs2JKvuBCazdPje2b",
  "key5": "5YnAopshAkgn683J3SSiLuUXU2MzgnyFcJcv4mESkkeVcBT5rLGZGkY9rEuYfhxWx3ES4qommHCSid11TSHCCvLs",
  "key6": "3g5m5yvcVsbwZgysbnjtdtb9GsBTvuhJx3Sy7MaZ12bnW6zrB6LaJ9Lye7u6LgxoE2QDwnkkLQKph98D6fKj8Awm",
  "key7": "4nqWtbec3ZeavCiZueo5U99PC44v9qM4imGPkJx8omWhJ3cYGYfy4VgLKcsWPKTu1M3X8P3Z7jC6Hk8AJVHk8A9Z",
  "key8": "4iPYRTZch6hJMCvmvi4cVZrkRdfSE8SEVnmzT4cXXn1okitrk2wV4S6q23f2wW1VmsP1rry3JqeY4z6PM3kGGR8m",
  "key9": "1hu9FrZUbWMfeSGXYpPhFZU61N7SGabMqzztpgSgydj4kEQNWLYt5aBp1UByn4jPrt2dwKCMGW2ez6p1V52uiTd",
  "key10": "2TihaNyv7suxG164xr7kwNaSLzKmtCNFNqCgFq7e7t87nBiwEMF6n6VLgzMNEPn6c9F6dmLT79D1qjjvxKjwvX94",
  "key11": "3W5vaGSXdy3L5P5dyWqneedV5TefCctCYizT1kQ19iMPwoFiDD7cuPNoupovfnHMN43JVH2EbLvePaVngY7FaawA",
  "key12": "1MvdJofHXzq2M7fssac5GNV1ZawZz1VBuVhrdaiQ6fp1NZVsRrx9iLMdXPMgxYvBUse9LrUfH7cZEQkVwat8kmY",
  "key13": "3VEoCDAH2j2ypMm3oAjDdD3gC4BUNN4qG6zu8iVj24YQDwYnvALUJJaQSK8Mn4bqscDA1JuKLzW4aPafssoH69Pe",
  "key14": "35sP8CYR4hzsvH9JunrNXsifKmzWKAjXdooLqEvtPhLcpQ15Bv1H1k41J59wRXaTHnHrq3cuKwNetmSJa6GTPYxm",
  "key15": "VjX2kXfjjThU7cb7BvRSuvpXK1g7e89yqUXE1JPZqX17RgiRLsmyM1vSYi1Qo6p4BYbNJj3GiAjN8qs1vpkKKng",
  "key16": "4nc26FpUrsMccEymXrYh7HWc16gZwJo2YUWKBg11xgxSzpS8PveACQVVRHHEg7qYVm5rNaZ51C5kMNk4optne3nD",
  "key17": "2VpMqqWGdi7xoruxJJhjrnBcBzk55b67QjHU6qk6mFG658ozwZi3T5bLHeybEHbw5x693bpj5fJqRXqdU3obhawr",
  "key18": "3zsYUbs8FeafA1g3733Wd5kbUXrDb8JkYTbgRNKtQszXkdV8RefYvkSKHKr3fvXJTijyQEtxThys4jCJEedokAaJ",
  "key19": "2pY2v2Kwaoxmxc3uVK9rSsbhD6v63WcReroGFoRdze4oh7mCBRi9AeEY2PWafLZxFpABguirhFmMoGxrff7rUphC",
  "key20": "qxPB2qfWLEaUJFJqb2nrMRktX3iT697y9hJ33wDgcAAsmt21A9CMeuw8WMqDQk4d4ZxY1ifp7me6WKNLV61vZQ8",
  "key21": "2T764NjemeAWiWWjPwhAwuv8nh7u3k7yYaAQeuBMRz6hnkEV84cPPKsSaFCXL5DAFQff4xMCUQv8j2SLWPdsY7pv",
  "key22": "5VpYLs1iSxXpZpQNtZ7UWPNe8HpvEwwvAFWhbgVEMbtcLFSPTBjDDBsXKpRCvydmonJQQFwNncLReeyavQyo8jS6",
  "key23": "2uK2g4PTmwEkHHDpWGeMnPEcuhtipUmbDhC6UyCpZLThCGa9PAqeVxLQd5KXfS4rpAiTdjiRjomNTRXoKX21Ax6y",
  "key24": "4WLHvUp7s2EmWtDFeJzp4Tt3CVFfq2qPA4fNF16HifMC6rr463E5HHMjqBpFQuqJWVJVuq9HbfN35A7UfffqsXwv",
  "key25": "4gT4eSJJ7pcPeofahrvaBoc734evt6D8oQDszopVjy813v3zTLsayZ6yVX3GWYWa4g33RZ2GeecZABapVKPyV4eJ",
  "key26": "YxuViAc9amCj5mttAJFQ9gvhMTRZBafkLtQfoydrhUi5ywYGYeCUAmHdYFMA3Qu5EvQaqh9geYGcfY85ubjTxBE"
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
