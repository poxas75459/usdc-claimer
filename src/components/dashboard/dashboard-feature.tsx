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
    "4tWLdGGvANXzfLpxeYVBGBWkWd47VQ7tHPJBHGF8AVhoWkZw7CefDi1ZYPDVLqrrd6XnP6vW1DXzeigLFvAx17c8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pLzi1mTxomUfjWGs1pZkJC8TVnDS7vYfCffrHJSgoJnMyd3qKsH9TAaNJ7X9dnJtZDWyydLMMu1bqLStJaXGj2P",
  "key1": "3TRrXTAG2fovU722qqNrcqp5aknBpmPbHdsbJmxnbSScmNwfAcxR6P21ZHP2H8sSfsboztBq4Arye3Vt2qpADuyj",
  "key2": "5B79Dqntz1zL2ZrDAkUad5fu6Mdnro6xKNXMRDCzNpY7waW91m3S5npMcdFtNoS636B9rZukQx5AHuUZU2K56Uhq",
  "key3": "xAQpyPJtBnDpQTy8o2XazKUo2a2jpjvyPUt7uudekNxJG4LWx7ajvRBrePtpFgmLEQh4g2nucYWhHo5cHaQ8VaA",
  "key4": "3C6R7auUNEYVdkbGT1C8UV8kgzdJjxPdon8QxCC4NXHU5VAwS7177aNxJRKA9sBb3LirExcv5dGZrU7bkhLUdthM",
  "key5": "2PnedsreBmCox9X7z8QUeq7vzNiL2qYqyktty1i31aT4mmNG1WHvpZhbrvrYjS2QLRUnYXTFAxwtyou1C1txvusR",
  "key6": "MEs4v2RYCR4Zja7MVurKri7iFosVbVdscvVDSMU1RXcdJECfpws5eGAwGyirx8xW34C6UwYxLetYTVRQLu7HG7Y",
  "key7": "2u1kF4L4842Q2Mr1wMttybHQQ5vSq1ENUijXQTLZhngT1GuFxUeirdZ9SpfeKDaJaBZjo6AMrFuLHHvJayt2LYm9",
  "key8": "3kbVR1CTZexd2hTYKbM26C5Aa4oFpYuotwn5zXQjudzBGnoUAMb4ynZztmfv6y2HQLiMMVgcDYTRNPLJ2SRckxxy",
  "key9": "5sHdPyeNx9Bd3n3GNSGKuoKSKo2NMBjTQ2gT9JwKDUHHrXwkueKE5FhtBeBdY1L6PYFH7xXnL3vQZtQoNZmYfZ17",
  "key10": "2HMKzDE2ZvpvLCHcNoisquNhLfBSrRUBxFgAh1wbbFWSfs5iTCgQXq8vCTqA2eHf9Fx2GnN3yg1L82UHGdtkFb3T",
  "key11": "bF3ne14Ey6YCzcyEsSo2gNAPLcF74hj9pdZzpyZaT4gaL2ZhJFxB965umGnxnKpAzJQdjzGtcVy1Qj6QgrmjCmM",
  "key12": "3WyL9wf5arPv92nnji9acAYr4Wn69CQ5ng8njhCZ9e6tjyuxCRSaQYd8VaLXic61Y4pG34aReBXCKi1MMFmZEavS",
  "key13": "5x8mFbPcCe8Go3kVWCb2s2BgEPZi4J1NDU67uA6FpTjmacuRxdC545ETto3hztffPohjCnabKBymjGr5TEyxvUBr",
  "key14": "4qjicZmE4c5XYHwbBJVhAtwhM6ywnrCwquxdHEQYMr9Jj5Y2ZXXo4RpYMptFav87cw11ASqvG9koSxmrdt9dBPNz",
  "key15": "4i7K398Km8y2ABACpRKQ4eMBmG88oxPDYfXkUm44FNZA8Vxbeo6m12Tb1EnrArtGBEuetm5K47BDQVZmKbwLbg7Q",
  "key16": "3yF4ZFjsBmaqdRs2qSyXkJJxgyGjMcZnALANCWGuiXEXbUA4yD4s3HuQgxfvUkSYPaF5ZsXJqdfUcQ1N4hspfS4q",
  "key17": "5E7tRkgwG7fSZYw8pLene7wCdHzuepKtjBCqh7Ux3pj2MnuS2JjAeNpCbxrVT9wzpUQs5xQdgKCwX1u64AWYUK6r",
  "key18": "36X2EBHbDcwoy7xt2ZaphqfZ87cSgKh7m8y3pa5zbdQ7TxYpMQWxgALEmfng4LxsM49KyAWPZp7uZjyzjgVQBeiy",
  "key19": "3yo5wvF5cFs6dpHnpm2xnVfvomN4hdwbdcmLPVjMdZbYW3pFK2SvenCXbZxjCNt7zt6eUyLzmzfqmsM5sK2Ym4xu",
  "key20": "z5VqQUKFDf8nKXL5owvfJj7BsFUo9BMrjktvZFVp4gF8WkMM8KNvS4bceLzZrNMdiGQbD3zjJGSt952qCqVzcNv",
  "key21": "5fdpGYEiefuPcwGx3B5mjx82HvT63BrzShDBrgfcVbZmzqG4h3b7bfZvXBeEkkCq1RhnVPhEGVRmasLARvdRLi1K",
  "key22": "3VeHPA49t3FEMBHT17AnkUvfnf1u3jM2dd6RMuwbFSyHkgJRq3HfM6mTjhz2urooqBBTVH2zMePZNcRLJgPMHuiS",
  "key23": "MdDAzPD4xNTayPFfcLmcqiio4M7EYWoUKy8WdsFyGjqcWb3EyseinR8XAj4m721Mv1D8WoUNJxk1gd2cNfEcqZE",
  "key24": "3uDbT7i1CBRaXjdg5banWBvLtDNEzXfuzhNKvfM5FPhiqf3EbNLZc7PF5uDdV16wCAp8pDKnAarSYTTqJ8WfkmX1",
  "key25": "CjkXHYYYYYuvxi664BhDtkpXTMaAjcM9L8kL6zfDznUbvEiH1PbJczqPMGa1vLLuEr715pJkCoczrVtm2tjtXni",
  "key26": "3EQFP5jJF9as7ahGLfJiDTMeGtvTDiTPGJiZ4tWLcb36D3Ub79X4qC47cgiWpWiVCZoYRAGd7xZWXNcUtYyAMeGg",
  "key27": "3mBtb1LdCFFwrt2TQWvWxUZgTKyLMKgaLjuEKVaCJ1ZjgBryHmhBYhZNZhbLn6pFDq7cXLqh3DfuV52pbjEqekiu",
  "key28": "3xLvcKZSunURXzbA185aDLNx41BcxdRkfZh64H2TETa5jPksNCDfJVPCCXfeUkkuaxefDJG18DJNozgS9M3TPcRf"
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
