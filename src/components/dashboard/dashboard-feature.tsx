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
    "4CRhaQwBEA3aGj6u8ExujXaPNkozY8S4swowWmwfad77FmRCAhBF2XrBoVW7p1jB8G6bBVfNACNJHzRjmSQx7R5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2akuXXRy47vNJNU4k2qLrkqVuDfkDq3HFnAVjiTmo3rh37QnDpdb2e3iujYKu5ARGjD9W5nCgDNMpoZdetn5Xyk",
  "key1": "4bjnRih1PQvyx6kzBRi7nbV7L6ZvUMdJ7hXj9uwdRpohJ5n43b8qr2vEqQ7oSsbKB3WniyeRZKv5MLnpB1Ktta9K",
  "key2": "2AmBa1xxpQedmgkyVHSY38zyLEG1wQxFzu7pmadSSGbktZa9br7pmfjrsv8nA9V1PkN6rdwCq4skydcKwokmiKBi",
  "key3": "54fVqv414WH2oRKG4Se4aUfnJ7VXvGjvzfThWx5J38GiHAP2WZCdM5t7YNSDgUjtMXDGS2Y6x7knjhN3pZ4ytQZq",
  "key4": "2P69hEhFYeTenP5RJHRAAyvfDZouNfEuHtep3MBGYz58oZJVTEfcjhnSnQkxazUUD8jxQiFuacvNG8TtZ7pmSDcG",
  "key5": "abdhg4WDsFm3BmPFGCsRynckwU2r7bUYQFdsSKBMdA99pHC2p225HvtYCFDuJNJvKEuBZgFS1odqxohVpSDxnY7",
  "key6": "4xjcTYedRPfRaePHvF82Q8sDpbvau9Z6mC9vnA5KpCRMzuYNeyP6Vx2ELP9MGCNNEVighPZe3ZaiGm49sccXHWTA",
  "key7": "3hrrqsyX2DgZRYH6tt5VjwmhRQ1A77H5MQhyfQkB8fmNgRFLrAKnmiTSLcxQCDszoTufsKe7fNKNRiD9aWNLCgSV",
  "key8": "4RpGRSdZF94whFZ7WUonuuqvY54vEeHpe1oRJK5Ecek9yaPWm3WFhmU7XXTcitzM8kMPQ3CVHBj2V927uRKGFvbp",
  "key9": "xfuKCnDLBwmXCyH1dxN68xT7ysVUScnqaaiyNmcAi44WJbb89stYwrMgXTQy3gXPcHU1nivxf3RY5nyQQaAwtiP",
  "key10": "yduGWH2sGv8TUygWyNu8sTr4WPrfmTWbY71DWFjCCUrz27xqXxsutRbaWnZmSpgFKoqpYg3VzHjBkGNWVYEtp5S",
  "key11": "5qctQANCQmRkNpeBZZJsvj99JJiBpNDQzZ6Gi2vEhVieJSAusSTCh3EB73eB7nzNWrmRaan5fZn1cRnPk7YxPBz3",
  "key12": "3mVzxw3RLcWa7xrLY9QDZZVGW9SUTDZtPEiehAG8UTAy4Dir2uitn6YQMqzrNSJJEpJsLRPb7xgABhiPeiJv4bhP",
  "key13": "r1a61XxD9NfMKviuMpeuJbMA5JhaLboSN9aMN6JnWXVscZDcvZrHf8ww2uSHAbQT52ZvPjNfCySf9qcswLufV6K",
  "key14": "3Yjppc6YVBgyZvancoZkuezpKgxEAZq7esNsPDDQ1P7s9t34jfqnHPrgJM616eLUn7sKmFh3hSV1yQVKd3AQbSDe",
  "key15": "UNa1LFi6Y5EvhZi2nw3ujtaW61qdpXRqaCuTW41pmxwyoajjpsKhKXLcc5hPrYmmu2eUDqnPF9oWEypsfcorkMY",
  "key16": "3MCECQQ71y2WB2RW6jStA6ZjCbgFEfHGJVf5qHKjdsrtHCZTJP9bmEoyD7gM5GobF4War4zdmaW3Af5ivBszRnDh",
  "key17": "31e5opi8PQJWPwW1TNj4pqnLPmvQ6oYP5sqnHsHoABB3XKt9oYjYhh4QzGXHEQmPRFGid6xLc3zwuhiv9s9XmnvF",
  "key18": "2FExJaNLVZXxxzu9A17ZjSx9w8sqTD5zz83muQsBPzV4ntHnsHtN6rztituxQjHMgQijiWmALprCYRT2FNpn2934",
  "key19": "3R3aXJKWkLZYNW7hBCi4ZSbcsPQ4uVuCZQn32k3WEmmQo7Pw2PFmhm3DQsk5ZoV8WyGJ7VbmBSqjp3H4QtBptoNc",
  "key20": "4eG8QZ2AeLZ3cE4GTYtup5PK8EwpYjCrcWfz9xRE22VHYbvjisQpnV7AgA94LG5iEfGY7bwJ8rHo8zv5i7VZuFsV",
  "key21": "62NaxiTDhhkTVtjF6n5H5y5ecpa6cf3dkNiQRKbu9knShLxVfgY1AzMKGmeFtWjiy68rRLzyxbTUkvkjsdBEjmtU",
  "key22": "43ZenSo1DadXu2qV7zJMpWZcNaJaz9BREz3c6nsNdnbYatvoZ1BEewC8bNSwHbHw25JHW1kSj9JY2eqhF9gK9WVQ",
  "key23": "YpNRcUi2QAghGUCh6xhejZ1VdPyCDvEkN7WxDnScc5Pnnu2Z85UCUisJAVBFdiSRyxzDYDezt9aBjBMD19BRrsR",
  "key24": "5mPX88ij2NWU7EdL1JfpTgrA51LhzXs7nhrmKnGSDaYrYhvLWzRZoUkQwTU6kiuwUJCYkqDpMYiZW9N8j82PNGhS"
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
