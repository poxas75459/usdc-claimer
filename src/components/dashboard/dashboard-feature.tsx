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
    "4C4A2Chd6TkQ3mKExARpDfZ7MVyQQ8cJz7nJ2ni988uxBNEsatQhvfrNQs6oTEyr2DZ7GpSZ6V5KG8R6Wh1pRhpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A2gez5FWsDr6Xcff7yRz8nvZPGTFEHP7knFFTsQGpm3QpMb2d2cyQ3SYMSTwctsWEXGp8rcKarnqNyr5mJSHvFd",
  "key1": "2HZm6ybbeTKZLuVYFqwwySm7mdTdPcgK4qfQ5hWojafkMi41rm78rK5vjMmmNZi5pei4EVxC1ezYas82uwa4AhbQ",
  "key2": "tnwHj611GqrQRZhYCpsxZhJXKLLtUfiYUpjmoUF191R3UxSzdfdhC3J44yzS6dfsd3zjUwfQcrLvxE6wyCXr7RL",
  "key3": "2PoZwHLotdnsiFD5k75z7JeELVPNCfPPJonKkPijxWbHsVQ3ijZduS7qncJDM7NgEWYi4879rMEwh6wyfDaA5taz",
  "key4": "Y6ijACAMPuEj4VKSP4ee9RrdNYwonXMUTwF5Tw7vH34L5T3yjApWyXfL2WPBbBs5UTZHhFWdY6GRZQcqyaBcnZV",
  "key5": "2jo28GayqaLzzXgLnxJfhutLQMp4ddrE76KvkMjekKatEu1YG6DpogjaX4FuL1KRyx5mdPPy2BfaUY6PhZhbEdm1",
  "key6": "44KAiGooiAhWaKQGBvnGa1wD56bLJu9WnRCojhakZz4db2rXYeKf4ZSAiiWusvf9h3HXpVEXUL3DXX94Xd6y8QM7",
  "key7": "hZgQySWZDziKpSjN6X4jnAVk33QXZc7b2vBrAAYzfho42UEVsLnDdrUR58BS2eEmjCsFYR8LYpMSWExs7oLfV83",
  "key8": "3u8rMvbYKQazeEJY58oQBp2BVGGPQw9Nw1mwvrJoYsPPE7iDPcBZab3118hqo686vniRBrQ89ZoQ6dEiBTLJfd7D",
  "key9": "525wBeCzT87bEYgX8zXw63uomomdjnAvNWdax7S9sWgsehd4cEDRZL4uUSjnZVdQJVXkAbYZ3cRsNHFXcUFtt9zd",
  "key10": "2qbFYJnHmd1UYmrVkuPCznCNzhb4wGKPD4A9etmiWsA5ptTDqA3vmTajx7sJ7b4Ko94DGKded1b2VdErykZGahqH",
  "key11": "5415fMcVLQTqabKk26FNN921t2nvkN7sDyMGYBpWoJ1UytxzgT7anyg5SymqZSQKyXn2gvGKX6egKL8cwU1VR8RB",
  "key12": "4d5ojx1xVEnhs7vssJD6tyf3vD1C4QeC2212S2dqsLSU159AuHtvtV9BQS3zkTFHLDPqb6dQfwrqcZFyiz8ghCGj",
  "key13": "2wt6Bs6Vft9GNe1K5BXtRMxmP6JiU4WY4vqF6kxguQhLX6uRNcL5FjgW1jRXovPXQBjnvYBW2qW8wabb5F98QBJi",
  "key14": "4HJAYrqmcncciEYeSNaPGUGWBszTuvdwjvqE2vtVAXtTVEuaSmTz4fYKELujoSTiKRigoKnrZUpUrPG9P2dDbwn5",
  "key15": "374FPkeZFRed3TMYFYAwJnsrg6CXEL2ZCAraDjwnXohwkJW4QJLwD17W4iSxbbTBTTHMu952bywxu7GnWwL4q27E",
  "key16": "4AZgSNVFPPhx89zH2eumHozDNquSV9cx5a52Br9bCDNmTiHXDobQhGRCg5ZoRMHLAybMdwYa12y97XSrzHdsRX3M",
  "key17": "3d3uxBeyMZaykCdQ7zy8WRyGdcCoChX2deiV2r2U8yVjn4LSoVkkMggp7kPKz7JnBcKXPHrbHRPoZFA8jV1toD4J",
  "key18": "4wJxjaYhPo1vKLiC5J8tTghNWyyL6bD6sxR5bSTRTFHzaHTY5VgHuRB5bcaaSkfUp719VYYPZQsxCXaYEoandLor",
  "key19": "4VoRbYYYqSn6fUgYMHyRHKBQNfVJZsHy9LZbhW1wEsyHFJfLW39boSoEd9FqZNrLTwAjB4Gyehs3ev91H1C28VU6",
  "key20": "jS2syW8o1kp6oLzdGoRg9WdzDWD4TNA9YiJB4QWZXqjityQs9au4NQD6ehNk8yRv1tYSFzFkKSXfUwDteTZHoJe",
  "key21": "K4CZMWc2H1PdwCFSLXyb21jvrSDaG6LeivShdQSUUjjhe8MWVZfFp1LaCAPxVi64HLLvNAftX1FYNHjS8EAfmSL",
  "key22": "4SQKq1A4cvv4PKhE7EFPMsK13Ybp92KPjobGtFPGPiFgfQTbP7WPxsZyjLKRDx4iSmtB7aduVwVgrBJh88D4uRSt",
  "key23": "4UhdNRbquJUEXo4zaZQDan1274g9xS19j7g22YywMdHoFz66CMtcArGUDbgE8oiZRL4GzcoQvXBt1NoQMbTjZLo7",
  "key24": "EJdF1NVRmpPCzLXgAy1p2iv9TVjPxSWAAQCtxaB4vNXeVmDLMZU6UEawHbR1pogefpM2yrN3kTGF4Bg4QARE6sX",
  "key25": "3a1upgAZoPsSuPcdwqhmuaYHw6ooJ3YUrfLWZm8PiCt7tC9AKgYcFBV5KX4uH84i5LZ51jyHshUppsaff6tmbRXR",
  "key26": "2b3yju8aJ2X5Aj2qFdp5mgBtpKAyoRscSk9ZxPmQQ6KJAGKVsFw7u6qwDLTBrWn9Tr6He9wq6Ruvo9NPimZa1y1w"
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
