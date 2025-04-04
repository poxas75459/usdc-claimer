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
    "5ovRuU37RHjqGNxTkK2yP4SA2M1bcjfqv7HKpTHi8BNL8dtVobUm3p4gyqCNECjA465o6dEZsbw3LsUG3waSbJup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ies36tiHMY2Bu9NK83k1zuMyNNGdm7Z98G6ZC6yzAqJnZEnRgqo7mH6YoGGGujd5ockqNqsM39ovzAoCWYco6a3",
  "key1": "L8WCLGNtFf2XAo3M8bthntZjtD8j6fsqiM45HQ6aRNwSXZP3GCbRLoFZb3VHuMzei3P7kPudannpdTiprNyx1iR",
  "key2": "2AfU9VT5cJFx6SjHeK6Hind95QfcWgHqnyLRB76yLXsRegzr4WzEv3txEFjhBXDiHSxk6hHcrUpJ9mJiQFikdMLi",
  "key3": "5fhpT9JmyuEwuR1n5qpFxLxzXBQJzRKTyo2uzyxe1vLAreFBGFvNfrGmaJ69bihaMozFejRU7XdC3GJAp1rLcWZg",
  "key4": "apK9WAosQL6fLDmWQyJLvguf7LwR9aouFaX6ojHwxF2EPaddecEnbVWnkTFEoFvyhVinr2zAxDPEqnsHGJ7YG93",
  "key5": "4j2rsQbuJJuawHwP52sWzTGeoarroJ4qyxfJgQmoi5jaCsj7dbAEkvJqkrVX2KeESh9HhubswVCJuix2Asqr5k3q",
  "key6": "3ckDSZk8EQaZyPa8oyvzYPQTX1t5tRCqZ1sWaFNwvZT9Joyhtos1873SjktbtB65UYHRdXEtNLwbRqfxMWs17xht",
  "key7": "2b9XcfKxe5kRsFe2hHWNsKoznj9khXa618g8zs1kiamdt5YxMyas5ofzUGMLT94Dg6sdpRAtPTNAR1MSAFTMQv5c",
  "key8": "3roCeaVmkv7mLriNrbNWcXcY8w24qHxPS4nS4bDVKSXQHTaKe1oEbj7q9jwNgtygPpdufKLCVjMcVw2PLWCW1MDd",
  "key9": "3pciZuTYUP3Yzyg3EBSeZQNG66PzFgeod4wEaXTgS4cf3WuagQ3jR4yDAwoziDNUFhGTmiSUSUZJVwggPxrHYMpf",
  "key10": "3eUY9efV8LPmhMY9WrNRrqVN8c1SSgUV7YkFU3xeTBtcT66VyD4TFeLKHgAeJ6aQJxpRBUdK7APj1Pj2wgW5CqN2",
  "key11": "4qD3cckLoTTKniXtVijmQDoX8sBvN5Kd5mtGhATaVoLrkGEzxvQD4iNaoK1tMSaFXiJc9zuF7x8tahKCZtxRfHEy",
  "key12": "4HQvhxMzpfYr58EcaAPGyAens7Umnyh8drwaZSndALjGbhqTdtzze1G7NgsTuPxx4VARnWNNcGUecm1ZKwFNtv2b",
  "key13": "nj8JG1i4SY8ZvrTL1DmmRSwywudvA3DY7cJuJCbpuKJssuQ12juFABsJVCZB7vMSosmi4DuewqezcpQnEPzWmqf",
  "key14": "3kNgsdRQfwcWkCzq1Ew7uGS56MGDNB9DNKgSR2VjsbwToVDubrXL3vNeLUURuSoN2rCrqBEtDLSyt8vD7JjfsgRq",
  "key15": "3uxG8zairrMomRSaRphxGEuPxJ2nb3k1gfPTiDEnAPjx4NQeCgbN55AitJ2KmeX75A7d6Fkr9qmfYWXmiaXm47jh",
  "key16": "5dRowm5xaHTY4Vm2tJkeea1LmJ1FDwa1krGSh78tDxDxVpGg3zxZsPCDp1MC9rnrpRAFePqGGa3wT71DL4jecJmv",
  "key17": "3CkifVPD61H8v3W8bnMepx6K3AWd42tDycSUxqGaZyxYiEtMKN7VkmnbM4h427ML8N5trYV85cQmJgcKr4bWLfnh",
  "key18": "2ADNj5FbC6ydHrwq6Dy1LJFb4SdB2wtAsg3RQugWuPJYGK88ubPbFA4oKY85XVwQZ4KG8MEYBJxDffKXtE6A9EHf",
  "key19": "4vzHSL6dqHsyqSqBwU6p1bebfRnsSmj67NoW5tsSPN3kEDqGDstVBJVmtSMJWL1xRsRDL3fms6DqAX15pzHAdc7d",
  "key20": "1tvnMYS9fivwv7HW3sQPAA9Dw4Y1zFdkPsWwjYBhuVud78Ng6XL2hccNQEDN3Nn1YrsWTspSvuuquvYsfkAdzmv",
  "key21": "2mo2geLbV6GjWiW2QkqXF6imQUna2XcLnWNE81rFkNXXRxDpxvbyoso6x9aGsAMFe2W1TRqACc2G7g4Dsme5JrJm",
  "key22": "4ZnaYrSLDZ94bkWhcG378uMvBj42zQ9m3b3Ddewa12bp6gMrATF7ukEka2xKNBtwt1E2XaVAonS7df5goref3eTT",
  "key23": "4zSgLJgM3dCfnG8GAQinPSXZoDk7Sok97rZuoT3rBcgh7gswEwbayteGFHvRzR3YCZEt9EvFQQbXdpsM6LJRGXaC",
  "key24": "65qhYM2uYdVsGH9xxeGTbdEWPvb1VUFFoT7EAQcHJPFrmXkukuHsFCXkoLaFTYMhEVFc5UxX2aGw91HYapfnYPar",
  "key25": "47XkZARX3LsmrkRGzUAUXgVSpVMDzjoEr23nLN6pJskNZZCeBCrt1vyfM7JaXPNqXN64x7VfTmUgAerzSQMyUuK1",
  "key26": "29MxBSyaXnDuw8R1zcD3rci8KLgw4TRQ1DBNgpHdCqGBbc8j2pdxaGs35JYsxrDbVNahGVG2y2EtQUUu11dhAveg"
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
