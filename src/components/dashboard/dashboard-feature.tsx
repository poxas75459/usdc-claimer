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
    "4QYyHDsngcPU2RizKXmiJaC7nQfcFmAwqvq3opHz4iV1ik4mDqqT3WkizsTYHEp5pvgnEYfBdBDzwU88Y1BMvnk9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BcdUQd7zQsxutYLEXShMbhpUJ3rAxRdLYzpCJtS4b8BqycbPAnAmC5rEFNsceik6wB23UYuUurLJL4XcsSXDfHS",
  "key1": "67kAexDTC6hqM39wYzTq1Q4xaVLkkpVHMQRnzD5hPQMfTEfEeCnoyriTCZdhJg6xV96tXnEziXmS6vQaGx7wWeR4",
  "key2": "4L5yGzBFuRMUKDsH3QBWhsxDvtyxtPsFSpYL8x5qMhC4tMfN91M5rjeUGdts6SA4GanSzP1P8tznarK97GArwUw5",
  "key3": "4BaGju9bjk7yANjpGkZhw7QcuxMEt7Yb8Az7KCH1AYVRtpx4RMkiRpFtysHWMLHuiyMHU6V6tMKhFCoPRVJH9EEh",
  "key4": "2y593jB46TpxzV6nfrJW84JnPfQ6K3B9HMXEYLuBUAkF7o1jmP1yiEcUPLwy3eSYFMGdssmNJayQk9UsBPi6xDBs",
  "key5": "3tiBGrfxFnpcScsE2N7z7GoXRPqvBVPGWwKdpyYzNGq3uev3SP3Yfukx5NMC7RS6iCxgfGGzjniDLBuJTkGN4dm9",
  "key6": "pBUFAFZD5AXGfUB83BpWx5yDWtEC6BEZGBFZjqVypH4P9za8tcdEZV8EQWSY3BikFJadHPfbu5wMpTcTHJ1vi9c",
  "key7": "1HKU26iWS5PzX4Zif3cjXBCSrC7fU8GJQhQnYPUvZcACMxWke4QZcpiw1rHsKrxtURwyhmPzHpyQwCJX2VPuHHT",
  "key8": "4gM5DkHCti6gc6DvDbsUv1Gaxqm5YG7QzeTW4ZxXsKLqcd586ZxsykME9vZLMcYq7DWKikDm7Zd1NcLcG4pzq5uC",
  "key9": "3EjWMAGa9WSANeUfvvZYcUBunmvmntHcee71zwAfD5sWgsVcEgJogNm6PQwnJafTG214iJTtYRXozaYDTAJs2Ksa",
  "key10": "2BbBEB8rwFZ3DXvwzARKbtboN4z5H57UPzQodB1m4MBnZ4N2A9H6XVGrXdXQCMgTp3Pfw7utpBuiHBUFF6tkF8rX",
  "key11": "pqsfkUe87pxza6rcxmNjoweDb8ckRiivjW6Yi7hiP7F8AXs6z69JD1VC3zK9TjGiaNbfg79Ftyrjf6ZqpEgzmew",
  "key12": "q7FevUwRsdZL8nw2AiQSh8VujYtTL7Zwz9BvcCUb47pRxCUn9DU1TVD7nRQcdn2Ln6sMtuB8tbvUhAxxvJPK7UW",
  "key13": "3ktkG2QfZ2eSD13xAzJMnAhTZGKUuvjUP1XCiBcRpyF7jD9g5H7AXt97skc4ehby2osbqymwNomZLpAH9Zn5MJCw",
  "key14": "2hANmRkivvefz8qVgrSPJA3DJ8QVALVDBQGJf2wgih5TSa5AqaBsEEJuaLQtiEpij3onCmojD2dBLjSTXwRzZEYV",
  "key15": "5urbVezgPCDPL6xWTqTibtBFgU3VVJbjpyH5ECgMuK63kF1EYDgayMpqKetkVp4AEPRqjbwpKARdtjBnVH5BKXhw",
  "key16": "4Rk9ubMMeLvxPFPJY4TPt27sQkrUeae94hzBT8Gq2m1dFWfxGEXyiiWRuuEQX3KMzQq4LmaNdrb1fN17w3zVXW3V",
  "key17": "5WVWBEnAfqpQXC4h3QHw5mAeqoBE4szuGEAiG73uDs1YnpuEdvBmWTN377qK9qvSXTdBEGUrZFZmpD9j3ddkZpEW",
  "key18": "3rwYidaHqFJR5J5epmXwZZWHGUa4v8sPHmaW6UHMa2cxusmWSfMQqdC7KMfFsqL2JXDLGcR8m32kCU2sHTyyETGr",
  "key19": "3foYcAyC6Y6JgSfx4p469mG7uYtenMtERuqdJbkqJHEi3uepW5H72xeJsJk73RSp3zi57YTEskenS5k7FtWyiztn",
  "key20": "aXSZCLLX69wNMHZKcjrBKrFsbYao9Zyv2GEQCjuCqMoJWP37Prgam2uQS1oYx8HC2tgivj8pSZtTJfhtVqM3Lzf",
  "key21": "ypBEi2c5vAzh521V7zmBHy3KajWrUDBZYJjrkdhNuxBmRx9B191mc88rSpqyuvyyUx5Fdgz83MaayF7dmiDxLqq",
  "key22": "45MAcd83mZg6kKrkmgBNwhN5LmbNrGBwLkjx36J2AnJ8QnTZ6ADMtUd8fn7DkU7d96G16dScpcMvVGMHhEb4CqJb",
  "key23": "44q81TmnDG8ELVwusrQiuFxNsQo2UMF6J69GHZwKkbfiZwUishym92pBS9qpBTz7rMbvtbtH58cDwEKPuVcC9Q6t",
  "key24": "3za5EgcYi2V4tKLfWaENd8mCv6XqXaNdYsV3hmjhwsXsbSnVP3tuvQkbRXS8V1G42nGcswseLsiYYz2cri6VJh6v",
  "key25": "3wsg9B8t2x2PGwa8QozSmSBbS1k999W7BbbxQRYuVeFptRrvDbG11Wrh7A1jErngutYWH94y2o1onxAN6QTuNJzc",
  "key26": "54N18QftdCsA8jMyiR3ATMoyrUfrNAQnB1VkrKTs7NyJggJZGARhxTPkguitMQXhhkfwywvMKJgXdjAXJzJ8UdpJ",
  "key27": "4G7Eso8FpkjroCwuDdWugHFRLJH39Q8KkrSWT14PV8PzF9V1KCNn2LsUyYAGvF92FA1vdR49XKRtUrRgGCLzHz5v",
  "key28": "4g6a9A3d4WQaMhwSF1GRuH1xUGeTnoq6JP7a986K3dmSZywcFLE8JRhrJXjWa8aSkEh5c5QMqHrmQn9ceuxXyQuP",
  "key29": "4DEu4SR1726QfpVeLL7uca3uJjGr57J8sMPqd5Y21nAGqPfWpFX2c7cA3p7ACCR9pvLRMpqG8zA6LsSe3GcAZdkc",
  "key30": "4tjir9PUm6MZt6GEovDK7G59kPLwjyn1q6GWTDtrawQhdpVjiBZtL2CmMzuEpSpyyWXSH4yEnsdR8k5G6WfikvWP",
  "key31": "3Kp2mQfEhDz1DUGMN9bFnMs5bDSkcgRvD7aAnk3iFFWFmARUXRW6K5ZnMiEU5x4f9DBHtGDkFzShqrqKEE64dRh6",
  "key32": "4PgyxJhf3tvzvfjLVmW43kBrDK46xUVSrFLi5PAq2i5HdjkiAuoxh1drDE7YkmxPXmgzGggsYS8K3L4oQzTHkb8o",
  "key33": "638WQizXsB2LsDhgNFKLxvPxis8gEtyej7TV1icpby8FMvm9h12iRtT8cHfU35n5hBG52MjWtVBVpDXJqT4bMAB4",
  "key34": "3L6bxvpHGFsXyhJY7fbEPtKNdGFTD7ttWi7fZngyMNbfYYkLwsSpq9LYET7x81MRLJUpeFUUZwuqgMtbyZdBkpfE",
  "key35": "24JYFRNrQDqcYs572XJ9rgwUaSNrfvWLm9L4FsmzTgGGvmgoztjXzxg1UZoFzwhY7mc8v3Vz2PUyg7jub18fDdDj",
  "key36": "2SPWkoLo1C7tnY4hwJmP4EvTSP65HY8GaEkkkFhZ86nNLseb6RnE2DzgpzhcviqpsF9oBHegCw7psMbhU5Ne1NLP",
  "key37": "4NQrX9TfYzYSKAE7bPsCSR4SfzYiv62jGRLdpqmYFEBjwTnyJwbepkzHq4t5fQzE5GeyGSrZEzsV8ZoQKPSQwu7e",
  "key38": "248K4WBLLE7axieC8XbiZeJ5CtBEwRwxzFAArJsu8qhUxNn8RcyWe7Yu3fdCqC8Q36zw78UNVrv72AtYmMF4cUkr",
  "key39": "36EKbcXqMTQBMVArPSvKKzvbhTD7RcH7mTJECQpLYEqzVJAaPSobN5E7ATLsPs6ZP5P8txbe8jLx1c3svGcSnBmm",
  "key40": "4or9EFXBLMvdnC4dWkwpGcBFihFH2qHe2KuGxkgbNzRuxTUBqExWaaEksi5D1fam56dGanTJjifTQtQyVa4uVhoX",
  "key41": "5tSRisHa8GTaqWUfDNf86Zc434aLjf9pPpQEwvEKdEvLaJvz4zxKHgCcFJYo7buph781aHFuGwiV2samC3CaE4NP"
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
