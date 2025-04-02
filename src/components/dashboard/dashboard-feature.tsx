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
    "3Z5cVKdoLw1fhqzVmJHVJgCVFexqgobDMk4EwWGLoJZVpd7ZqFuXoEVBbh1n3bsHvXbdjdtKUq4ebZrmZaVjJ64g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LkfCwRRcn4dP8htcN4cecFfB9kXi28SpobMnHtaK43QFVrwnuvgbJ4uNXkemTHxPisCHb3m8M7xxjoaXQxe1XvR",
  "key1": "3FvJjUGvKy7MaWjZ89BFfCjZtWP2VKZ5hGWhYv2sPcboApYnokcPnVdnmy2u64aPcW4u4ZQm39awzoKUaKMzv4nM",
  "key2": "5GD1HroPMaPFjfnL4hJre3hT8GJzT48zU6tUL7A2MuMbujdAJLwoDYRApW6za6GeiyEdhmNsyEqMkMBWApGBaeZw",
  "key3": "2RDmCPBPLMraAGdMA87hojtzQzTfNWqrgaXdjjZLvxrUK7ZBdY7oDJw4Nw1znKF3gJCxqcY2LLGkcHmQUHb3ekq8",
  "key4": "5xwLuC83FSrvBs24K24U68pzg4URBS7QQfdyGbMXJ7ZuPCRQvo4K2PaQ31UffbrhCL7gh8gKRkJoo4msHVG3nbAu",
  "key5": "3ePuqgSVqrdYTcwuZdvx8EvdgmKGoCosWqYMfdRau7YNyZzvnU3hnaczcDhbbXebf9svWidWXwTPTV66KTVC7APG",
  "key6": "TZEJHwdXHeE3crCeyECyjcTiEkxr9HRM8bGgmaHW5FPbkHAA5uJKJB2wrkvq5vULMuzyHpNpUr4FHg2gcVApvF7",
  "key7": "5cFyFTpF1CERDv3aNQbgEQtQ1X1RRzW6zhh1DqSnb8gx5HuHcRhvDTwVoDacijhff5WLY9t91wGv5eDLbRP7jrgu",
  "key8": "31X6HdA1hvSkuHi4ygTE557864y8uXiYGQtrm9DomVgxwFm2YVArkv97V44hvxE7DdK8Y2PY6Tqkuhof5t2XWonb",
  "key9": "2KmFabzMLnjMN1mStEf83Z1taNWKiKLFCYyXc5XtKUzKYwEgGxzJgbWytQoWzBiCiTgtfsy35TUb8fPLHEwR3AjG",
  "key10": "4X2J8WU6knNE5EjbBdfnmRYGDmhkWjph5otZApF1hv8P1dMrNoW6vQ4g6arSrzWGGgdSJeDPJPfia5T9KDHU4p8L",
  "key11": "5mNnHo7Vphwf6tZqRz25HUJLAHhm4xRtdMMUAjekuomUKoVnBj39htDAAbn56aeJ42dFrSPcfifN8Ro1iq9HUU2A",
  "key12": "jvrpYkZCGMaDJYQAH8MpcSGVnZFHGRAA35xARYhXUPV44ywGgcRVwniRFQUunmtdobyZU9HCzuh7XeSqdEo8Y89",
  "key13": "3f8iTnA5mw8gbeqM5MMZycrdVmEzXkBGrVamJohkZun6BkvALqJEngvBceZfnuigyfSQoq44YNsHr1B8XSASaXao",
  "key14": "4ggTm9cAX31oLb1HKWB147TeSaDyyssVaNkPm1jFPyMUB7yzkt1LAXNGV6ojCC4xqCwDc5pRfRN2v4e2f27Fuuus",
  "key15": "4kntrdKTEsNH8Znoud5HRhnaPLTtazUnnhCe5Gj6YEWLWsHX3ubETXwUttuSaAtZtgbDwRTWh8svS6Jj2CzuTKgo",
  "key16": "3Vn6bMK3qMc5XcSgJA23ypfA72ynWMLt4tANPk4TwxBiurvCddV4AU7n2zxuJLGka2B2XyT4h6iZdqMx3BjC9S8K",
  "key17": "4wMH7QvJHEnTpjPqRzhizPjx8YV2LbHyNXQPRQqDRR8iWRGsBHqnuugH5pV2Co9qNE72JLToUaHo3UactSLCTLLL",
  "key18": "44jQBXcooZWtvq5LtT1fYLZuJ13HQhfUGeW4B2fQBE55ZnkPWv9LZdKALMUy9uk5ckKix5dFmfbBPE8dTZrUa9Az",
  "key19": "4d6JAUgdK8VWrPT2UmxPeTHjS1vwFdgktNnMEn5wJBkGH1zeHrbvriMz6bQuJYMUkDMdJTxS7WQKpd5SSkZBd17g",
  "key20": "5ej21m8ZT6dfwdAB3byP2ChQkDcBJggYQkKuZwbUWGaRZfHzgEDrF7SSnbWvTN21ZDv3XEzsisKQBseAADYrbnT8",
  "key21": "5Yf9QSp3URTeatEt9mMTXUDo4hQvjnbrPP1X2gJAhA1EwFtqMu29Puvb8LiQ4d5MKPiEUVqJ5k8MzSmDeiQag3Xd",
  "key22": "3QSY9tAFMLdEVcKi4AtzybvGb34csMXpE148jAF2XTT5PY19rgM24BvrvfJaBR1miEagqocNw3EXG8mMectZPDJn",
  "key23": "5hcwyjgrLuN6mpX33be2ZwT264jFSijK1TjuLfHCg6wgWHc8ProxzPdXdkx8y2YdRhTqYiisdB56JYTSLCq3EWUD",
  "key24": "5K7AiTpgGYRySZZLL2y9SMUu6uUsb7DKNneKxbsE3pJqNhS5ZaaFsxFsixpk9BM6TrenxGPJuAPs1nvRJ6rT5Msd"
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
