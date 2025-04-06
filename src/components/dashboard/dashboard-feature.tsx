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
    "3vA5QE8KaetnJaVxkmqoTRzYjs3eNHuPvRnSLJdADxcic24WwctAmsvKQapHreWswbVsFNCpP2bBj4wJ7aZxEYzg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3afq2tudXamCXGbt2bPGSL81pW3YvoNx9qLRboo2MsCirYXqpaed1dUrrD5bdvSc2SUWnb4wj6uqk8xcMWd1m1dF",
  "key1": "2jUHcBvJdjU4YWunUnC6T1n32wzCC24Tt7ms77gLxPzLExMETViDKoTQ4CXHA4eR34EssbZVYE6M76cTGQkNJ6rH",
  "key2": "2XQY7GB1g1siZTLQFKeV1VSbB1oBc9w6y8v46GweYkE6VnNPL4wyeUcuqjBmuncRbPsPLUubAFhJgN6ZkzxpoK6i",
  "key3": "4gpAXJgLEw9YmkXcDJCen1xM1yMwLPQPhLVrnrMokwUy2vhQuNTkFDzLdyd6Jz9EBxz77HtHaAP7M4Yd7mHfxCMe",
  "key4": "5XkZXQaaHzFrv62EUnjmikDbAYi3xtphNLcDFaRWkX17egzULkMGb1adQZyEvhPec8KaCFJGhoh1BdufShDAk7up",
  "key5": "3NewdHTMxTra7veV7H5LfdQMpjjLiuTMsuNCMpq4aYx3omszjVHmg3PR5Uq3WcujAi7PM1c7H3gDLRiTQo3zU663",
  "key6": "4sbHLbFggK8ev3rgJJiEskGpFyYfhnJUtyuJv9uzDdnqqU8SXa3yJNuMttbFgBXNgr37pbiyfTuQSQLPgN4y8mYN",
  "key7": "5dWyLkZzBFmJPc3t83T7JjMdN2cd5ShGLppPrn2fTDaWPXbod4Vm13umZhppts3umbkqCp65rFauS2X3PBbw32QP",
  "key8": "5PjiadbR9mYaje6b9XSkeK83Qbg9BQnKmndBex4FYia3eu2EvR3js5A1SEJfatbyq2QeqEAaKavq7ucv3LPueD6A",
  "key9": "2BYDXDExFjaw2rrB7N2F63L97iLApbZ7ZL2SQ6LMSy9AC6uNBYYPwbSTB4wQKqwce8GtaR3qZ7NkuduAUpy4CqV4",
  "key10": "2FTzD8suZJhVDtyWnfrz9kwZVwY99w3qwCkb1zAJAAwygy1ppnCcSfiMM4H2Bgd9gin9aAbVtkDnShFjKBB51Bst",
  "key11": "4tfpvVCcCxYzD22hfr1VgSahJypHAjqnMHpiQmvRVkamQr6mL6VMmq5H8QdYZS7syMfjHBvzhusqEaRNYW1TRaJ1",
  "key12": "2yN8pdeHHa3YZFinHgQE1jL9hcc9KEieviCf5RTuhK8ru4ynuA4xzQP5bbz5LiNMDcmWjyGBqeWS8QPnnXixSCEw",
  "key13": "5PKQDAUgFL9QgDibxzJ5NrCMC7PSEe5EywquEnWG1nCVoHnS6ftGiYK5coAn4cgE7ec7bWg4KphwzH8qpneUVQUB",
  "key14": "3qhmXbvLyTCG6pCmGiUkJYyiuxKM6gLwR7FYq4vwyFRMUjBytYPhyy8HBcQkLb62G5e15qyPmVCK1B4EWXHC8rTC",
  "key15": "41sjjEPWDj7o6pWtdBZUEMfhvRENvfV2k6GBEwmjzG4AFgY4Juw8CwTwtrtu3jg3NYsnmwsnWNNkt6BtwdfMaias",
  "key16": "3eNZDrLvza7rMf5CUptD6nudCYfEndi5giSqGaegvm3o5asKQ5uLK31vitXZNTwD5WaeJcQkCe3yVF6LpBbJXhHK",
  "key17": "3mmjNovYvRwYVrXs7KwAgMgoWAP37zk57q7czFADQ59Z4JbbjJcWrbSPxWEzoTdQVkviY3bRq7d8xiYnAz3JrCWx",
  "key18": "3uixiLdHbtVcwvuJ7h6bLFRsyMTbdLHB88w5je5BqtqxPRHWFSmxkhoeaPXS152qs5QPzMvQKF1iuR2gkdpsvdmL",
  "key19": "4KE4Cd9RYUosCpMDvLBvfE4LWWmSgcBk5j1Y8jaZWoARpYaeF34BAKf4CKSXncbHbiPEimEeXrqQgFUukUy9npFM",
  "key20": "3ThXrCSB4z9sss2biwDwioRtt3UVHbg2sbDrGX1TAAodd8LFmBnUXfaV9Y45NQtrsmjYALCFiLuNn7aKJNXSufo7",
  "key21": "5735zEq89EFQ9YxRHUjUGekZunNz6mwEfgmed3PBXKCmGqhN2J8aVZQDjUWwK2zSCcxen4qRHWPsa8J11qRnchx7",
  "key22": "5DURiMEsccDEo1GQEmN7yPC2Ckmh1kPeiksdydjZr2RRVjEDFXCjkD1J77ruaacXGcpX8xadJSVvobbibShEK3LL",
  "key23": "zRpD58yK5fQDUGaXTmzc73Tq5JU2sD26Kue6CjuS7MyzYTuWfMMMGERTWKEZE2as7n64zmcZo8ADrB5BaHRQNqL",
  "key24": "4h7eJvFXgjiSFyEtKumLvCGLwiGLoGJuQ8crtNjeVSVGbgSMF17HsCMkqS3hnjPBQoSQBnFs2W88CJ78KxmNM3Ek",
  "key25": "2PWvLTfub1Qt5kdEJ7n6xyo9iWudv3eTiUDxYrUS4ZNdQfuEppdCNW1PMTxcR8Y5qaTwmfpaE9p3EJNoDsZbPAme",
  "key26": "5m4LaX9YoZF9YxnjCMQBiHeTStGPrkWgwRnRogd1P4yGeGKd2JKJ3vkhuK1kvH4hfajN27kATLk2xoXfowBXK1PA",
  "key27": "2svCGR7CCABZjhZPvrsqyQBL7jioY6T8a3M2TJzS5fSTbdgqKPHkWtyEZGjh8nzRfavGeLLsP6JiigsjhLstNgdv",
  "key28": "67dWBPQsrefNCVHXm8BEaJghmiYysUnF5QBRrmqonF7M7G4FVEqRR5KEnnkumGdTkEtLdLi9BPRcDXrt94xkMTEP",
  "key29": "273EETqWi477WB5DCVu5vdQa659E2xV7S7zZpXnz1uYJGULzHUXx9ac9ebmcmNQprxfEgpr3DCjf2KfNaVB1EFmZ"
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
