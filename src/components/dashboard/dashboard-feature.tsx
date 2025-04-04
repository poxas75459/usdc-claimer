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
    "nW6BTMEEnobWwoFSzE1cGNHQnF553UmEWFeBhaVUhmZCpdsi6GPvFzV9kdTbQvcKqCP5tXSBWe4jg8c145H6umu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GiVj2cre2AfydS4QKXCo4ooVPss9kgx5mXSkYDhYdXokL8xCUycpq4KnHq4wBekCjXsASLyw1iMwJyivXAJdaaw",
  "key1": "2WhrKE3SN8kpH3gznkioTgxCUA4Lb63dmNTB9knsTFjA9H7rhJdBXrLaUwpEW9ELkDCtNBh9FqwK1enWdA8yHpEc",
  "key2": "Zn8FxY5MuB1UXDKo4o2J79eDrvhQgAty7vSGLe4Wr4vSEKwTikCPLxrN523FPp9EbwK2X7HLuXfU6JHiBgodskA",
  "key3": "5cjvjK7KMr9n7Bikny3BBNjgZzMGZL1ZWxTLR1yfRxRVww1ukukxsMW2sDb73YZwKZLp2C6bZA9X9eqiq4ZiqGWv",
  "key4": "53cizi9sCheGnVW1GMbvXd69gH9aVHTRyY3eMn9CzMxfAVe6TknSejKy46UJkLwA9W938bXw6kYw6wRpmfy34osd",
  "key5": "2BMRUnyC83vpibCrvM3y2PZSM9npPt8kC4XbfjrbqatG7MUxwyNoNibtqKAcUqpwXAdKTGVAorzgAVGCQfvTFNXU",
  "key6": "5UrNpKzKgkJX4b7SXtsSJqugKanqiERnUu8hSpaczCKDSYzmFeYwXuZfZyNbW17SpxvHEwU6iNVrmhLREc1cE7hV",
  "key7": "5Nmi33PTNgf2WhMuxa58ZgSRzS9QQ9La8o9288wNAPz9iNgwQ3K4b62smDsTE7M4QBJRNrnJ3w3DCXctWhCEr17s",
  "key8": "4xLkDaqb4g5cUaqeJ5sd62qEjAi8HSHNjfiEU7HktGbuDVY6nNxZZLnmN78J9oJffNAF9H4dDZ9y3cF57c53e1f1",
  "key9": "34UNn8YPTmwMAPTjroLSRfiSvB3gahUrtefFwwBkvHJ7e3rHgnbas4E46Tz5aCyJ3PTZM582im3okj6Ug231MT3p",
  "key10": "2ZgoWSMNzgbA7sX3TDHSo9MDt2Jith8fiH5me88qHDH3oGkHo3tZTzdUVgUeLS5vA24XXZf3KVuTg9Wj2aFoNH54",
  "key11": "5s8w17XGxLyTujHPYa8TV6MBdeipBXHsCvUnmQHetittk2bjb18vcYatRCmHTGAS3vHZQPV6PLW6FemPVYNU28E2",
  "key12": "22crKR5bR8QY3Z8zKyJWQiwbpDkF7UD6dcoGTJpXzS2dSDRwS1RCgpGk77XbWwNq92RwdXnJqDcTm9JfR6sbWM6d",
  "key13": "4HkFkUcQwAvw5LJS94Jd2HB8hUAQFREvNpXyGHXmK7uytNJoERxiitQLqGPmgMLFDozCZR2QFHzFgpXB9dYkVS1x",
  "key14": "4mtv7uTNfHWFgJVE8V49EzaMbpLVDrnJMAvcGpA2xkc4Ln14LYz5akoUdxyXwQaTj1FjdkPWazSuVMztnDa2K6ZU",
  "key15": "yJ3eWv9BjQpse6bNhEbjkei7nbya9VsQtZeLwcjyELhoniYnRNVhjyARvGeMcBUHTdi8eT7FNXqzoN8ojhsVrJd",
  "key16": "4Y9GSdhmtWwuZnoVShGevABo3KiBvL5A9a6AgJRya6edF5qYws6v82qq6qBTdUd6jsW4BSyy2KzfyaZSGLcog9mn",
  "key17": "5kzceii8ts6cQWFJrKYyaCoZfUwfVcAnaujuwNqsXECVnMFZtgq9gB5yZNZ8GcvQ56ihS2Svs1kcYSx3JwDzNRzp",
  "key18": "SiKieMbNGgKKK8gVDXu9Gjo9GU2dMZuQGVsZQBvcMyzHxW4ArngTn2pKao4saE6o1m9WX8GtANEApiVKF57J3TE",
  "key19": "5Kj7L2j1dRsDNEFyCwzxYDv5Wga9E2qKxxJ2mVZYYCy5BF4SDzRD5iGuiJH5r1jPv73wqSEuau9FZqNhtVG5Fzo1",
  "key20": "2mK6PDAQ6yaXAcWx2YHt7Kribj8qkoN7DydMNUYfnkURWKvevqwpPAgfVbfWpg6oXK6i1jKw1oUozYDPDrzThRD4",
  "key21": "269qy13eeupDWvb4pP57YMzQxFE3Np59aytKQiBBK87tRbYYicY3bJnwaTojABuoSLA1Pgz9bv6ETXECgHJLrTsV",
  "key22": "2T3aRvj5v13XaAzjfvA1wdS1ds2fi9Y3DtnXAoFvSjzp1smbsqB1enCFu73muwi8o2qT6k6gSKZvH6Htdxds7FSe",
  "key23": "4QHoPWL6LatFrPMLiWaSFoupFEuqV86hTVcaosekeu1MQDTw4WgVzBTD1uzgMXLVCg6r3axz4y8SC6uYUp6aqmuu",
  "key24": "3ZvADtAWrbbbM3zzbzJt9cUMwUUT3NcWE2UvUmVGcp3NDmTQwuKQQCNGw632FF8cTRmxBkwBfNbcUuXvE1d5JEdD",
  "key25": "4poozKgXTV1AGKz8tytBevRUtX1Q71F2a6N6sZGqXdKEtcFmxVKRcKCCe9ZinGouCHE46CAVhZNvqRpiZYFjG4mW",
  "key26": "5Ag9STsK6f1ycLnr7cUcS9nsvbxRZoLbyfA7va3WzL4E4sKe8nTLpKdd3oGXsoRm1s3WeQaRMtTLZsPg8pteDFMs",
  "key27": "2SSk8eSLjskTENgFDySxHfXH5KiWcZALYMf31bNJwuiy9ZzCD8gRhtMNbaCmovaA3viycs5CWBKoD8kgLF3vWGfN",
  "key28": "5CQmEKPpTezdZGo2ua4WnQjue9xwd4TTcqwCgKKedRA4ouERfyT1UZfSAua1NiMyaUUxLCD6H9xAiCoNAjSqEpHo",
  "key29": "uD1jr2j7paTzRixYH6Dq8TmVeKRUwMM6sgT4cLTuNsTG54SmxvHLxFxjsUtGTRkqY3WdAFEbM8ShckKPzjtVUpC",
  "key30": "4PMuiTN3BpqyXYTjnGbnoAg7XVbRFRV1GQCNMR4GY1i3U55by3g96PmLvJ9Y5fAKSvJD28WzyszjLhgnik1kQ234",
  "key31": "5tBjQ96MUE8v36oLm9QF7kftcarDxVi9SwxALHSWFTZLRdrgKZkK4mDXsze5ce7oBALTasccktGufAcUbVyZsBM7",
  "key32": "4JtptEGn1xyD5qm4ReUu8HFRyTe58bAKa3TrWMwJ5dQBZTE2DQ5AjvLtmi7Szwivxw7f3DEDWbd24oEg3fgtvkEP",
  "key33": "3WxPEKS8m9HsU5QbLzPPdTyZCJQJeH5q9oncDd9Ba8PMSVn2VPCcMvRSkqXDPjr6vdGNpWPgb69aBj8zNGozjWVz",
  "key34": "4XaJgcx1rCZWNR1ZsSM199AQyf9mXzh1xVD5wVTzQguDkzsteQhNP2aCfuG9iUXoxB6Suq6LtJK7br6hiLjr9E6Z",
  "key35": "616B5iBAAu6ee3xnvitkxDwZbFoRhdeX4WctwD1dtNhYsUKZDN2Gu6uzSmp4obrMHwoQYCkYMEbZMESQ2WKpB797"
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
