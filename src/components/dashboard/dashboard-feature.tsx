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
    "3ehJuMzTbam5faApabnL9HUU8rHCJ77PCPGp66QzUfzsNJRzb4CKJchWzgskFzmYMiUYrwKhrNrLTmTe57SAx1z4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63oS7t9dbzApGXnRTq3y4rxPUghatm1rpoEHyjRyWuvqYXrZ1WcXBiCmksPy6qDqY33Lmzi76fvMso36nmCZ3Qw9",
  "key1": "4mmuB6qDtTxFGEAo2z33iQc7aWZTb31VXbNbGcNV6K1QGW1ijWxGDGvGt4iQA88YCuamBFXpYci23MR8ZggqZfYY",
  "key2": "2NQtzxBPrQUxZCo4D1LFTW19Ev2PMUjFxoeX2D1cXkFnxbXdzdKZHxRMUgtzMz3ScGQQ57e1pFuTzVbPGaVpLrWH",
  "key3": "4wRTuLagtyzeYBCfBPWBq19UoS87Prdk8Z5FB48Mnu7N2pTS7fc1W4s1LagF4TSnD7B2Ba9tqeYEURSxESnW65oK",
  "key4": "5NAF3wj99fRK1iWU3xAZBX4KoXMHREiFyWcyER9oXhNRd6uaFhgLYiZST2p6ST7wHnK7uW7NMJJgASdtRi2x3zDV",
  "key5": "5oRiaBDjbmoqribYzXNK4HXQ36b8oNLz1dZRjCLL86xMZEEwEJ8FLMRwVB63jkRfiHAHbtLzgF5E4KTcFa1ptZHQ",
  "key6": "ejaUXoDjdRkmGkkmEPcTL5Q1Be9JGs6GNjWHSnkTvBxfi7NoqWbpFXgRB5NwnpqRo22uvJfVJHaWGmaTpPWz9hs",
  "key7": "3xk1guhMTWUVSmkNcHN2gLzyPmVfqtEy2x9JmFn3FFd95jEktJM1Jg1oyKRykuEGN6mVtiVMRtvwsZv47FapMCaA",
  "key8": "5gc2nZaFGxuszNbTykH7FkMp49YSmhwYMnyWbSZx9uHTKgzMCVMTw8nnp2xRJqeiyVi249roiB7XUU2BsxSqYMYF",
  "key9": "5aouPtoek5zuNKjsgqPHEXetCudW6SiombL5oi9HpiC4p5WRsveJVx5CokrJMntrDJSceH51DJRnq1mL6nZJJUWw",
  "key10": "4iDQfwrzGQCT9jZBxQSejNbR3pfxtTTSsNCgNSoiB6gXbqNCSE9h9Gi4iGDsDcfG9VmwkM119RPznn6KQdBB2HWd",
  "key11": "3SnG1vU2y6LtkQ9zJRtfrndzjApankjCXUNYs4487wNpxHfQbe36RFVHwGCsZnuStz2pRcExwVo2hFen8CqqBKtF",
  "key12": "3GD9M8jpL8FC6yZru3hg4BzEpfLmrhmffQi4pG2a7ZZZMxE8F3aUFtrNrNfpqN4xGSK2SeEoUnPvs6V7nRNmfQSc",
  "key13": "nAkdptVZYPKXaGPDiP23d43JrXkMMLW1JWuTRxfLdW1twyi5AJe47DzURf6cZK25jAtWDqtQCCq6XaffSFpyZHV",
  "key14": "56SbwVdkd88oMjq2aJjvx7QBiMXXFsSdbiy1hN3MNChCCvGwJWDPXHzZNSm8wuodPP8JQj3XLCUtV5wEJP5YtvbP",
  "key15": "4vzzHoQDvkq6GyJUTe92EztpughJ61esSeorDKh1GuHko1TTsNgRxAxtTGkBTjAoLs4LesKta7jjig5d5t9J5Fr7",
  "key16": "5uXLRb53YokBzPaHpjQRn225vX2WD53N4FJHS3WtxE6KT1Qkz3ZuJ672zdxxH6miZEPFznTWoSxHgy44A6sNqPjC",
  "key17": "5twCLcTHDGY6YdmTSojQuGBf93ssJ3Ci89PULBgZakNVVGoVyHaaiQj4Bna2rJTNZwtXqXAo5zntKPUEwqAr5xE8",
  "key18": "2btSyKN3RYt4KRMisGm9pCUnM9H6M1hxV91S2GBq18gC988rsGdncDwDrFHKh1wRtuKgXSzxyD5fJJQb65ZPKh3b",
  "key19": "56bou5SRWFGf52CBxbnioBuJHBx4xw8ispNSUEb7Nhu5iXRPAPmRgtDcHxtrqGiwJ4X2e9ovQd4ppebQenTqhvaV",
  "key20": "22f3rt2nbXEMN6aEur1C694PEBcZBFkdCURqFEuuLWQimnS5FzknPdMbnHnfkxSq6fcGDq4vmQtyHvpbuHVKVW4N",
  "key21": "T9FXN1iDXki4eKsBEiUggAXDXGYhBYjCJi6LbRawTzwui1hxSNeEtQNc7Aeg1EnC9M79fEbhDiJnLaTRx8pfjca",
  "key22": "49znv1TG3iJq77eS6bHnmCwS2sCBJuPwkDbBra7vZbnfRJw55ViMQoop5sFp3cwdxPrSgqWvxfVbaD6UDTkfSSSB",
  "key23": "2LctKDRoTN1JLQnwcozn1PcTbhuBn4ZcDCNkHaF61Q8r2ze57o4srAQMi59fYtkS1CUwv31K4QApSNzJPPVyR4QL",
  "key24": "4d4VjrFkPuuPQDqL9u6Jq9sFZTjc5NSUc8Viv5qqjdazf5cRVD56fCuohfbM37NoXuvmCAZ3iGkw5QQsBJRLfqhc",
  "key25": "3c6mvanLUtbTueEWSREWE4z4gzQPZitrVAMRsCARb4QsG7RzBEuf5FkNax2BYfz7n5p4Z3TKbXXJC1sfy1rtYMQp",
  "key26": "SJck2hnBRsQRySwKTPCVyKp1XB7Hb3BDmBEoUxgbq8PmjQ7RhJLWhtac7CsRFwVVYMw4AsvjPapzMcsmYvkYqjh"
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
