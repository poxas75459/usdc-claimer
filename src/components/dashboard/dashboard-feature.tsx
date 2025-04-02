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
    "2ZPQgWWgdaBMAYddm8YyEvnwEfSDTpR3riUtFFvRnNN8FjZJqUe1tTcPtukp9sMjoxdXThXtEU4jbiVoNuCVCWLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QYcsszM8QJxVEQaJ5NZQfQ93jtXmhe9vLBLMseRXgciP687gghEr2aUR3sMok4rTrSrfs8vk2xB4RhhHzy7Q65Q",
  "key1": "veZKjYKQnpNQfLLCErkW41VDa3nteLLRASgHv5QbWCbjZa5NeD4QPnYLHGS5S77agNAqMVexYfTrtLx7LTU4vQ8",
  "key2": "3HxkTaoVu4T5UfJ1QYmbEuaBqqiUxFxrZRox2jzFdmfRrpx48H74yzNDFwR6kAko7YzM22EJAj6PcjnQTYuRqki8",
  "key3": "5DsRVafZE4XTJPCXoJJXEi4C14CJmPP79NrFisLewTd8tW6n2fYUwtS2LED9m2VaJjV5jN9pg7fpSXY85w21dSWw",
  "key4": "42wCohRoGXtv24qf5X3MmFVJcMuiPBRsCo2VMZSypgpWokape54Wk8ScQfQg1DFaSahSECbK4C4wqDQD3mvxULUw",
  "key5": "5PDDcprmjX37HnC4kNoHcnA7bjUP4Y29oqUGF9ETgfDyy17TyumT5KTuK74At5ZPZGEoygF2f9grhCqHnS1xaNnm",
  "key6": "aRSiFH8UgDveJqDuA2iFGShtr7BfT41KkFQKf2mqxsdws3JKuX2a2ewKz9VhudUfeuBWpGSYSeJCxtK8hCZ94N5",
  "key7": "4K2WNQMYfkTQNNHYjRhZKqJJWsAA1cxQhMbK6PNcuLS8LHSyuJvHAXeY6wSQx8xhfV3bQyzrPGeiyaRMV9kNZZqf",
  "key8": "2ChUNfoZrq2x8QMUB1QJGVBH4j57mZrcdC7kYzgWMqd1yJuTHc7QQisMfYYbiYstbajeZeF8FBKLwnioBWknDVuy",
  "key9": "3hXQQqrN7w7uU3gu1e5mugxoC6BDbhU2iRwsRXC23YTn6kYxYs6XZoAuxvHT5bXQKqKaAr1oRB6HqCmyx4RpdsD5",
  "key10": "3kYsiRMP18hMib7jq4ox5SuQ62dAy9CMcTqMYmisrawD9thUTo2rG4vhhMN4rzCcPjWZ655i9CpDzKgAo2rz4W9V",
  "key11": "2deUcEugBnKE73nvKbxaehk8CXqdsw65F2sahL24C1QbrUC8U6qPVhSPPgYGVa6xVVqJTPpnz4ngF7fZ6JBhfUn6",
  "key12": "3j3HqQZNAtM5PozZbxKScRAcerbvGYD4HbYKSUehixhdHTGoymnNzDpJNoVzSV74gsyCfRc5GVCawQSctvRMbfdT",
  "key13": "341NXFuSdurhgUT9f3tQSfUcZGe7RpfwhfyGteFeVDoocEGXXF1938dCvA2A8oBzuEH99tf5BPBqqEL24T34iiWe",
  "key14": "2HHPSki5JYMSXkBwUgubtFLckt4CHFDH2ZKCJrCA6eU88pM2SPRz4Ro8wzUxtSfqEyjtEfVwo412cKqYXXvMYqoq",
  "key15": "2Gjhs3xEdMxcXC51xPDRDQTaXWpRt4BDM7UXmN17MFPQGvJ7TyP74ikB37jN43X9Fv51w4Lo4jT5N1BNAd9xp8ef",
  "key16": "5RtU1SoiNdgJZ13ngZJn9cNnvr7rAEd53TGiMM7a3GncmKgQ1hEoX1sowhrhqnV6d6cMeUR38ASRm2C8jgNFPtZq",
  "key17": "3VQcYU28vvmABy3SHNpce15sci8WVtYD94nZ9PyJLSiXYe9bJkr629kvFgdMEXQrezogG93c3yNzodPQ81kqcTXx",
  "key18": "8MbRGPDHxvnfcToDRPLoRucWqje2xLqSyCk9vnj3XTMLXFAtZ77stTp6wMEhTGRUA11cw86Ah1TvgLqWS4FXKPc",
  "key19": "3BhJaMzMfAoaiobtGWeHJe3EJCHBwMLQRfvZMXhjKUrjvZJZBnDY5zStRDCvCU2NKUUWdkoRxEDPNz1gvR8U6Cw5",
  "key20": "5oAzCTPPwVH3xBt2Mj7omQGMcpchyLuuQd9QcB33WMezUd1Ao8swpDNDVJhgPWPZ158Jw9rxyxPVEFTztDDyjVFz",
  "key21": "3Kqe73qUfPAAS4ycTtazzT7X2wksPyfhnfwKyFjK7qy6qHEZ4nNAsRJpXLdewuJg14EN2Q6qgLgAKauv3YoAwAgw",
  "key22": "27vzbDZQZxovVrDMoXu2ZW3JMVZdMwHadT2pekZRymUL7EHsfswoy1fcoo9yVpemtayKyJdWjdyKHxrGtgnpyGaM",
  "key23": "4yF9TxadZEApBBG8CzVdDX3axtZcTjKatqfW9YWw3niumExEGxA2rvrkMvpxQfzTEha9mX3CMv5qNaszbpf3LLvv",
  "key24": "5yKrmqaT3j3X6YCqpyCnfQ2W7rgZmpnE2RyZpevnBpJAAjGcgUSUyyeKCuFtgApceHBiyynGfyUKa2qhTPXne2Es",
  "key25": "ighRW1otQVuRuditULzL1GFT9ryWCzXZH21jQNbR95tXY1mKi21CNiPt9rPmcMm7mLsTnQiyhjHhurnYqqhkCtU",
  "key26": "eFF44NugKdVpyz3Q48rwwYUb46Lh9BE2Y7uCG7osHSSJSZ6JKTvhmMfPuNR7xK5RXNY9XhazdDXBnJv89mUDP3Q",
  "key27": "2J28Jc91uHxAi7ngN65JXM2gDKwZcejFZNBzdLKKtRkMYpyxjEvFg87ztPQjmMBQRyG8UvWcKpGQXXbehFeqHGBX"
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
