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
    "CxJzaPg9CmjniLe8hX63CevsxYGDL8SneLuxt1TPj5scNvEYALAk7TdStaRTBQGkMARGYZWKkikJ2ge5pC4hDbh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pnmHWKjuxkL51eM3TwNN6MyWhgKfhLxDjAr5Zocbotj5GMkvN55XGwE4uAQXPQ8DemTTi9cXZausnZCko9RhgYV",
  "key1": "3rVQr5Kbukc7rrMJxon4Uq75t5UDrzBYgFaPo4Zff7JiZKXYyZGgLRLoAExqh5KNZBxFbwmqigajsCkLtM7G4jtA",
  "key2": "oPjjihUjuaQeLFvoJrXvDjggW2xnvDmJ7vDApKcj6P2K2qYYpYgXH5jWKmY78GEDeJBX9tk2V7gXxUb88a5cTyn",
  "key3": "4Pkd3JCNtxYmaGDCFx65fDR6Hz3WfWn1vUEMXsxok6sUCGEYzQAHfePqcaqNPibxTVUTgCPr2upgp3rDBWunLrGP",
  "key4": "3v9amuumLeMcA8XVo9zaUjhKKk3E67Ef2DUaWvvTFk2L57uwgk7qx32yyuLZmDTRnRJvCsewoYkvVCDrmyp4RcYu",
  "key5": "5U7Zxd4CBepsM2jPrgVRT299JEzGar4UoUisWjcPsi5tv5jVeVyiijdA5qdVESBHQE4RvY2RRxLftNwmN4rJ9Gzk",
  "key6": "UqFyQ4wvGFQJ2nS6SgFJsVGyc5WYyrimEoAwEjHWcSDiHiApmtVVMsuKWukFwFRMZkvgNeQcxApQ3g2rEigymcs",
  "key7": "sniCaa4Kg4yJp8ZbansuJtEpid9m3eSENfGRCb3XQRBxMRdQLBnJNYk5Munv3jn9Jv9msuayfKvqMiFBUPrSCVR",
  "key8": "2HPYbWhuzHMabFjm9dMr9i41X3QFFctbw9T7GrnEwDHwuvRzb7oqqHH5Ub37MfDqn1tUZJt9D5EpwXSmWsQXYktV",
  "key9": "2KnfJLg5HHBtbnM8g9XQJx7nNgP9VsboB8WjyihGd93aaMfWvFVwHUg3yw5XK8p5mvpqr4WbXRwYbmXFbptpWnuB",
  "key10": "4K3rdWuyr4YGGhdG8WX56TYhtWkpk6GvRVfGfa9AADCyDb6axLrtWCupVxCMNoRpq1qTo29gpWfD8vBWfHZPihFW",
  "key11": "5YZikLVZcV3Nen3eTrStririBWoHzteyPfRwtpiJN2VefodgaT3RWiKMkAZMXh1KErMmbnZS81BBuMTwUTafYGAW",
  "key12": "2QbC8MSJMCST7poUrpHzX87EEpPCBWkMdATYkgVavSAc5QB4sESdciFD2SdR4iKfQsfrhKvcshsxjg48vGQ9u8fZ",
  "key13": "4PGXqVLDX48zqCBdQbMQofmHFauDo6y5sGhJ7UBWAaeLwiq49eKkVAWXKyxZsQpwzWREC45SEKzNdqi6XGzksRBx",
  "key14": "pMXv3JFhS2daY9XG2M3jbyNbLDjFEnAHP3mDggBXEvquhZiqeaBx6VrVteUvJK5BwrnfGEnAPJkEFKsSG1W6pqJ",
  "key15": "CUpqyJvaeE9YR1eurxmKQV26cPT6pKgd4LsRTm4zueHsNghsC5C3DQTTtHjWMPFCRFue6GojcL6kqBq8mSHgJyJ",
  "key16": "MJvWponhLBVCUbtQMtnJekVpwPWEdezLgCdj3rgmATLQRPuTETkdgf2yEurhojfVafXuFWcJzEtmPnuadn89HSw",
  "key17": "v3Zc5HMqH8xkvQqDan3beiC38FTvfrnioJQUEik6yQKVEj8SBJRMLcB13fzzWiVGmeBtcYjL1f15ERn3KdRn9Lc",
  "key18": "2mdZEtDhtLdQcB3YfF5qvRrBSif3ven4t5L1RdAFG3pCU7NQC2VPuzQjbeJGvc9CMMTAQgTS8VLAAVpTFuk9xzqJ",
  "key19": "4e6Yiz6n6ABq1Ec1Yp2tEtWCKgu4NePtjxaSe7wKEBpfsH3aHgzHhQw7jwg2Le3P5C7oG7fx5NUQBu6cqyKfWgLJ",
  "key20": "nsz9KeW27tmyQTUQLmz8fU2SSzYAVbRizZhhbT3KUPq4dpEZGbM9sQuHpLUxJ15qupx5JEkaaWzqMLssBX2jGFd",
  "key21": "qthk3pfeoMiCEJjUvG4PygveMA9sJY9HUZL7nNK7PBdjgqDnxYGqCEEshUaD9q3xFMyMaR5mCXWMV2eg4CdC1nH",
  "key22": "54eCPqU8MmvTdUpAg8uQAfNV99gWxLVwd7DExTprzUBXVNVyyqDbkA9oWdQpiR9g6CPGGXcxBtU14AY9Bvx5BJAx",
  "key23": "3s2naoXAvbqSwHuFmUwomh51VdCqpJJCaEr19jYtXS7D8VADW1e6pr4ZhoCdVzhCD8isgsQ5iZXPgKHkoTWVcDKP",
  "key24": "4oWJ59n1KofepUt1B9A4hLvFvJY2KbXAjTdppe47imLHqQZC6XJJyDxFkTPwWBs4a9GBRyvFsEcQsd9gBDajoDDK",
  "key25": "5EDyq2MYZq5LDgFZMDKy4HeuubYxJ4DET7FSJLFfANEPPEte1ZcADt3kty92DzTaxMEdZWGkZF1jLjbkgU7uL9jA"
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
