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
    "5bxm8NCQxA6TxRn3ZjpjRaiccnWBtGAMiCcZPNQbStSjufwk6ZGWQxtYqDdQ4inKp7BbRJUjPPk3dKqif9a7bdna"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SNEoYMffyxLkMXiFqzSNG8xAYAshFwpLpv6qcDbRXx9d7xnZ6Uo9c1JDyibjPmuYKZa8omR2xuoaJ6bTi7YX13y",
  "key1": "4rSsGBHUTFXtr9KMUC7ymscRWmemPSVBybw3coJmBUi5rCURrv1Uj8KvuweQifVwssjzpfm4NWo129D2uzin4vLc",
  "key2": "4zabhGcmmESG9BJHpkkhMGi5eG5EbC8sUdk9EEBPMXksFv5NXnPsdfWdyUqdvNmzsHJ46x5Vadpk1ey1khDUvfkH",
  "key3": "5nDv3gtd7fYVN3PGpw67pzq8AN71N3TK5fAYk8sJ5q3mfUdmWin87HHguQmdeQw1Z32CdP3ijs1AbUZxARPBvWrL",
  "key4": "5aYb8BuKp8vLwh6Xg162iDamLrhnYw1EfnBMiqQyzyHhkp6Njmk5QQHjYJa6CsHM922ijFBsPxY382PZcYthPnus",
  "key5": "4gh5ezTxa97Fb3ZYbpX57NqA7We9ktggUZ91ByXJiQCiSQB9BBeUbj82BVHYbbFnn8DX8Egy7DjPMnEd8Mc47Sgt",
  "key6": "65AxrM6XKvAetyiLBsSeqxzA2TktJGugp7dHKxjgZC74ybDYah8cW4asjsp7nPH9QxTuqaovXYujsasYJTyQtWX4",
  "key7": "2kEDi3wsLLaxXutAHyMHYTnoZWmEhSGUSnQ6KaZjG8ijbLFFZaE36QZe7Ha6jR8QGePXpqVSn4jibobfJYbEuRZX",
  "key8": "5g5j3roYm3fPfPdTuBfGa5A1m6A81QoN984tLd53ceQyUNDdYiwvVUcMA4LbMs3psdrvLtf3AHHskRJbA7MJs4tA",
  "key9": "QjbUyfXuvtD7xfsnFABqZNm5wEA38tXrgQUzdBm64SNAEVDfRgXDA1NtTiBDXL3kt4xkdnew3KUVec8mJLV8BgZ",
  "key10": "3bGXW2sFw9KDNHNLpMxJr3BRkQyteot7nTgwWqyxQyRhKQ97K9DoojNuziuL5wUQAhJgXoJ18ZTr8dc6n3BcUMM5",
  "key11": "3kG1VSCex8Cr6cTHZD1MUi94q7foR4URBNxXHUuWoMdeHHYXRw9HRM9Luy9JhHuubZgbnwTeu8jQ7CGRZBrEU34J",
  "key12": "2762Utqm8tkvrD8NfT5hQKjTeSTJ2XBB7PhBVuZfkbdpqn5hnMxya3qSahe7wASjVATBb5bGCn43XCvtkyvddg6S",
  "key13": "5iN6TNFLYo6VnSwjHj4AQ9zK9VQZuzYyyvgLVkUHetB5nuvs7nqFkDhcQyvMpWeUNiRFG4fY1knRUsBrvxowbfCy",
  "key14": "26QKR9BCC1KAz1yqxGjh6CaN5Srf9VdnzP2bUiYJYmJo3upQ8EwVEE6tB3giq3NQkZG6eD5T176FB5tcDhPegb9F",
  "key15": "2mdWzJk8g8qkCGk35WpYu1QmU1U3dS9AZ9DXx6fhPQ8viwWwadgeodxodWMX6VZiay2w6gSH1mgC57YQYUoUYZpr",
  "key16": "2L8u36owXGP2n5WuQpKdZAX7kDvobpN3PS2QxaSiVdD9HjpXB195qjoPSJKrqWP1cLrtqZCeQVkm4HKLXs15wdFU",
  "key17": "4JhUYiuvTuarF2WCfUBrcPkcEiJMXtPmP7VmQoyfjmkoCt5dFpgh3Rqox8B5435WZWeETL5SuNAFaAc3MQoi6SBg",
  "key18": "4ZFr3k2DathtuiU4NQhHj8qHLFqcvbxDEcLngNfUpGWAxvcEPjCRWXWYSMadwcLF2cxDZ5yA8EJPJntErpfZivAg",
  "key19": "5mH42iwrxfwV72FsxKWuWhbLngQ7mtjyVhbXFa7KDCiUuyozSbfjrd2u9aoB6GLuSwtAXVtJEtPkcbBCFQoNXFzy",
  "key20": "5p6vEGSoacgaZ5Jj2d3eir7BpQ42my5KVD2ecHWdC18Zxwbwoni8vbjDVssrGgdrKzADLQrQkaLc9DGk3ekf2nEQ",
  "key21": "35S8zN81Acxb6VFc6bUC8xQmY69W5nA63qp67PQ8VjFHCaQLHAwhnfgcvGsZR8swM4j4ErYyEsXsEhFhq6jSkAnQ",
  "key22": "53qT78DG6MFMBcgSLhTUNfa6qkrnon4rSb1ZZggdUCKkk9bHzZV3RgT6Yr2nnc9J7bnQSWPaNmkXrM2B2aPucq2U",
  "key23": "kpCYu59FyjkTfqyJe8FwmAo2bomebwxuCjTLTUrAHikgc7iEDtamXxHMARytfvgtZMvQxZdgTpKPB75GrJTydiY",
  "key24": "4QsgAY95dEZTnd8PmvNMvYUzwJvymeS6wBPtYmFDey889cjQ5jQtWabDYaid7N9wyB8A3eg4XMzwo3s4NPu4wBWc",
  "key25": "2opFLp82WT2242gNc11zpDopYRJTTd74qsSdigMkXDE7bHsxxbofVtzWnhYgyudyuENoc8cwxF3LuCeeTapwxBMH",
  "key26": "5R4ad9oJSoZ6GzUaS1yGc7eyzYoPKd8quq4rHBPb4QCvmAstW2rj2BHtScPk8NwhKs4hN7xjBAhwuSMicdndsgSf",
  "key27": "PpH71wSpHhhaowWTcnQKmwtUqkMnyxqLwt3bRR1Wn7JvoHf2fELf6vZnvNybpqCuuBSxAmQ7Cau1cgBW6UmrydF",
  "key28": "3otds7sKKUesCRVjzRWeZ9LXyp4rxPSRSSifr1yLrY4buhUPTMP78YfosBKnYhtGHxDVySwdCaUYm6vgdNtrDJFw",
  "key29": "4bWftUGHP5QTbMS1C65tLCZnYWpWwFF58LFmBJqWdRyra1ZtTwfmPpSururnQSFEJrN3NhTjenBiRKq39RjKHoJ5",
  "key30": "4kGKS3sVFC4owZqqC93RRSEomcScnt1MNvvFj5EaoBaTBH8i47n9xFxf8oHP6XsYQVBvYc3RRG5ACZ2cusVLwxRr",
  "key31": "5Zm2Wj14E2FpeeFJcxnhns91YGJZQtaTMxTq1ckHczZt16jnCbMuZd3RYrwRhMsohAh8TcdNgrT3cAFMvmo5UAJW",
  "key32": "2pjbYxZaS68rVUEqaHpESdAsHt5WKVtb8iGiXgSN7L6ujpX1ZqS9wLt52v79khabaDqXDCcS7B9TxoQtsMRF4xWx"
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
