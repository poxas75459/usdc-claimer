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
    "2SLdvSWAPm9Ry6kmWwCwcB3KKJRaMrvBjV4egj93USS1t9XaFVfh87MS9nkocJaziywvr5Fg6F74GfWJT6Tks6aY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SkTxeR5mVYee2BH42c5GvUqipbxWUq1xz6LR43maHHztrFxxcSfPqv64Jmwsp6gtTpGZbJapySjuDCgED8CFYEm",
  "key1": "zPpaqG2MoGZB6cMvy23iPAa3zsQtx3hSukeM1nrgehsXpKm6XeH7BRo3x8f9Y42R6ceSM4BMrusTKbnG1BT3xUd",
  "key2": "4mgveNDqEU4HgNa2KHDVGcEKHhRXxyiRrPDeZX2YZrW8cFtNW9RLkhX6Q7Fi8duKeXzTRgfQn1ZVn5UFyG3Fowxj",
  "key3": "MGXdJpXd6z9S7BxigJ4NEpTnmzNZCCPPRk2cKizhUpCGkAqRoL5BQupJPzE9BxwoCqLHN6DNkpm3KDfMPRknFza",
  "key4": "yzidk2uJfzDPVwuG9VbaheVrqz3CZpAFdNmXapbrWmoZzpVsUTw4hxDvYsTX8cqnE64Q8gWH1WYeV1derBdybbt",
  "key5": "45qeWi74jqvxSEGKLp5xogu7pjosKQxhvst5vfzQAyyvQqC3CswuRXcJd5rcdo5gb5ozryD3RKC72GDBqrFJ9HXM",
  "key6": "4EyLUDNCdqomfsuQKkuLYdXNRm2vjacGwjb2B7RSMVvRhksPTYyF7LsiS5hZEuB5nSLK87jwkLDXBTvmnBH41MRt",
  "key7": "5kyMgiuH8aka99GFVvz1PVcpFaGMc58YnwzxjqyB5WW5NWq2n1TRM8otqomKyRp1qantFmFAMQRekAr5RjCiCEvS",
  "key8": "2ScoK4bLbH26Bs83si5AWMkSrNVoseKDKBLymAK2TqwsAMsAoMaeSrkYgpx1pZi8PjmXvZwqftRGda6BPEPZckA5",
  "key9": "2TWC3Jhs1kzs3gYNK3SYL4eAPd5bRxgTp4RhWtAJDP7aLGiWj2U9p4gzSXZWxsomGoVX4xR2KvNZYnV6tmTfEzam",
  "key10": "5gHrkVtrR5zjpsgL2L3TrwrUW7vV5r1t27Gen5yNXrC7Wz1rPGQdYMRaXxyUknaUFrptm4633THRRjfJfXw2D2EX",
  "key11": "ypwPxWwxU2NYR1ZDbx1CHbW2jp6enwr4wamxLWr7VTZNqyowG3Ustp7QgFhDo7m8uYF8UwJP2cqq7qALPd7sqdX",
  "key12": "4X3MZCSUofLTMmfU4VURWrqSsZfA1YhfUsxdTmEtJZ5pS8eMCjP3ABfcFBC27NbPaVPnv2iyWD82wSoMLY9n8muF",
  "key13": "3emwBbppTjM8e1c9xocDi28UQcQWSVHzPb43hyHVS1GK2H5nVyKwwtavKtesp8n317LesBSa7KzraHN4nxDdBLZM",
  "key14": "3iRFR4phxF52PJYdKgLAA7ugyS8V4kSgxufA4RCG4sA1Z4WX4ponvHztB2vLpPKyqG7y4tSQG2BCe96J4z69C7aS",
  "key15": "29JmQhwtN7yCiwt6U6huDaj6fryZd7pCPa9G58LxUGmog6pnUYSjjY7BmxQj2QDc5pj4Dd3p7nuK8Re6jjWuXk62",
  "key16": "5Jj2gZTocU5m58HbGFCkvLB2DhLveofbeZL9Zfpq6VwrE1eMyxpjPFtybxJ68u8N3gQyVQrcA2pRbmVneVFjW5zw",
  "key17": "VqtBtcuTtNvSQfcvcu3BZixKAtmQyjPhtpEt8DD4U5vPD8Bpzox9C16YZYr4SritV3ojYYUpQ4U7HdXASdqGCAj",
  "key18": "2qAH6psMqH79V9B581dLis1a44FuM4bV6m6u3zRhSqFtbVeE967ys681KbEEqeYxcjg2UQnNLwjr6MMiTY1LHDUe",
  "key19": "512vgb15VGhco3JX59MfttorJpQC1BhuYqGgGEsKgqGsAPU4HcdEfWJiqp83gmjQoEw4hkzs4BmKanCy83Lcwqt",
  "key20": "4JbTjwzZH7AadyuNui1poTJvzevPELfrUNBFRYCEnqL7MoSuruS8A4W3QgKaeyQom7vCjtahR5XQ73JCyDkeHAjD",
  "key21": "2U6M2DgHYi2fugG1gQ4mq8C9ZHNd5w5RBsJ4AGKT85utzGoUrawCLea9mqdNYm27hF4Z6Hkyb22qMWjW2ufkhbLj",
  "key22": "YoPApz3nyzoRirsaZ4NpVVBtSwtxbsNkPYUGrV4Ar4StWuLyDkxKZLN8xLspAZDBy3zwxhQWvXEyzcsUUq29Paw",
  "key23": "3enSc8jz1uxKs4EnZcKFUZ72zQtBEjFN7dAsGsCX7r6iQnqJGYbDSrNBrLtCe7ZJXFjmohR8Di82syDgNTZxs7xY",
  "key24": "4Mu4RQrQLvNnbqkvW9m93ok734u51sFmSLGWYxf2rZLwkZwxAbriVkHqHxnjn8RL8gcgPCxVs6XtP5tGetMYGEvC",
  "key25": "2x5Xh7MSLET4hmTZz3vvaHEQPiSH69C6NnHqjbrKUdRHLho7g4KnWtTTqZee2bDi6xNBAbvpu9vPYXnGEbDrfiZZ",
  "key26": "5SRyo6ZqERHoLk7j4itUqwBEb1KUfmHDDUYHQYV7uvJqGBJK7U6YHVxLpSKQbEpxHFjTboyDZSgEz71c2eW4H5CG",
  "key27": "51uoKED8NQrn5quwxuLSuGqzNbiMuHs5xJrjQiPMN4WJU7HXpxCjM6HYwYgWayT9ehTvaef6EbcAJr2SWE2UnUqo"
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
