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
    "53kmNHHCAE3Q32gMpxrqdTg4aahp3bGWSpj4fhK9z7DqXjkwVN6mtR5SqVqKeh6ir3zgUYkReBkqWSXUjYg8p689"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y7WfdKopQmgVTVwSdudBv6NnWEPqojF1fYu6z5Vacsa5Dd9g2qQgBYaskSpgRXLmLajyP5GAPSRBhJ14cCHmTuG",
  "key1": "2kV1gGKmbfjKKVAt4WuyRfoQ2qCANHwkBi32DNhYLpXJVXP2fQ3UWpho6ENZn2X9oQFqmn6PjPuRY3Y3qxXGv346",
  "key2": "43vmpjuwv4e9zehXB1FZ19B36H4awwKkhvCBwjYU6dQSL5GkhCTCUW3xaQ9RxPPrXtiVJYepgvCQs7e4o45VeYu4",
  "key3": "tmXDpKkEk6iuMeE3tFNz1iYZiyR9Xe2oeycts5XYko2iEEMMd1uM1QALMHQcD8uDbG8EvVKTWm15Cu7GAqKXZxV",
  "key4": "3JPtrNVsK7nH9NyF7vmGjfDwuipBxFzj54SLSBh2pWAj8FnwN6euEUUevVKesFn3jrhWEswR2iF7hWQTUqdBLzQ3",
  "key5": "66GYm7J477uKWenQfJbAa2z2ik15VGtuiwFTasMctn9NDnZYUm4EwLyWihVzpedjoLKB1h8Y9gA8E1mou8FGCx9z",
  "key6": "hKxnKxPFoi8jyu8WW4BkGvpRe2AXriFUtM37UCmakUjaHvajWRrYRPdbQWYb8NK2dX1cbdqt4ZU2UVfcJytCdBW",
  "key7": "4fZNY1EamCZU9qr3ttahEddhSLuTdQHWij7dJQ6rkUuorZNrry7hzi7FvJSi5k1yRqscvQDuARLJ6a4ugYFgRixf",
  "key8": "5X4HtakqpgJFTfzu92ummJfsssbuCDn9VWTVKpvJePPjMNwM7u2oZCRrogJyoBTeCfxqCKCdsq2Mx9ApAMjnfyPG",
  "key9": "3ht5XkNsLcHsi9LCX39eDrdXTgvtm4i1vRY5f5UYh5sxLtun8CPuCY8DAoVMH5XWga5fX6rHhGm9SSLS8LTP9Kbe",
  "key10": "5it6PNUd9MHuoEzELMWVxweJJY9epxXnUef6GQVhxGioLFjGPTKp7eRF7DDcnhWeWH69k4Q7CvrYzcoorLf762JY",
  "key11": "3iCw4f7rchAyU79So2RZE8Mk6y6F3KgYosSpRRxiCUNxZ95YQ6otAVZZEoKEfyaVo7G1QAE37e15Vxi8h28jrsm7",
  "key12": "2jSrHaW9JWPiDxHtZKWtzbUNeNM2CgHp2NRRzJBZDtQUL8U41ayYmvRLBFKDMyk5bNqHVserTr9seUadQGpc3GZ4",
  "key13": "5gSNp9rKtnetpuKVguckFz6y6HJJJWprTZBiCag5YLTSFUjbwRRjp4zkhNpQnu2FMo4MvvRJW46nWUHfBQaqrFXs",
  "key14": "CKC5xDnUN62XuXCZ3cRESHweQgWunD3KZ8JKcp3V8Zr3hwsApBTwtxva44AhkUG4Eq4jZWyY9q7Td8cwrLiXPcT",
  "key15": "3p1DgAF755qShBApAH5bJ2BbuqJxc5qSqMZGfoQxNxuKtWPypjcEZrQ31X64pfB5bJsqz3jSpvEkHxXY3ybsn55g",
  "key16": "Wif3Pdw2zBCdGBnXaP7RTmP2cBnRo2jATyrTbuwchHmayLAuu1g42EZBZ8ASoNi5UyCkDgSGQoZsNeNRzVVQxuV",
  "key17": "4f9c6UmAM3aNDsvtbjoeBZxZqrUoEgMy22PQ6W1pGJGwdAZLr9PVve81vfUkgT2k3Tu6WE3Kt1dYHQmnFZvGE2ih",
  "key18": "J6Hc6Z2RPtFAxyFfp1xBrpXMAk61wnJR3gx8f8kXuxb9A7iZQaZ8mM3aUsimKF11vLc4ji1f3dRzVXcvVQcEXPE",
  "key19": "5VW7zKFjLDDfm2JM7b1f7eE7SNV17dKMYVZgeTsbssLUiyKdkMUckNZPSUFumuap7XfedhZXuALJxESStrRFSDek",
  "key20": "4FpeQMbtyozU9nnNTnYeS9G9XH1zb3V21UvuoUgzC7unzn5fPwotoH78TBRQCLi1xKWPGMTcztTCYQqzH8N3FF9G",
  "key21": "3zCyJ3wcEhsZyCEPy7ksPeTFXwCZXfm5oXe2hTBsf1u1qqnCkyQQFcfXccDvoAZkA4T1n99gkmfTXAE1KMfTSJVM",
  "key22": "2JYFwvPVrcubNAyY5xYu5gowevQNoGqNjCS4WWCKZYfxS84qQ9n6Pt9kMWcDTnBeEhbnZb21stNJrpho2ugAVUVJ",
  "key23": "3nXXrsdvq4ESe1kmiXEhyRVQq8BMQASdHwD1zTmxNFj89m1VHduLGxw7Hw8KNXeAXNwC5x1fXsG7LPnwuanrvYfT",
  "key24": "3mgM6E84BFCwF7dUdXud2R2VNxdaMrtFWc1iWBnyaZnxLENuhiJ3nENyaGvgR2LEZ1JAu8G4YmCLi6GLW8aqRrwq",
  "key25": "4KJMSZ5bLwNZ5GKN1oEzyPUFNsNZxJZ6ZMuJkP6fmKFD3VdR4hv343qSeocVBfuEv8KujQhKeQy3cToHYQ3vhuxk",
  "key26": "XGTvd4VzdXhSemDhPyMrsEszZJhGvDnhLBitQUh1A8u4nKsFLPZA79vCBLavTAXNFFEcbQaRHu5SHiWEUUQ1R81"
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
