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
    "5LgaWuvkNz2hRxsnLse3JSRAefH2JAXAMHvgVdkRTyKysGXszpHGcaqNfAU7KYUmVUN566QwunsNsRtNHNPf4WpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GxSknbAV6rvFDK3CSQdyzgTtT7VB42stYb8qj65VgtiyhPjjcfG27aWds2QaAodP6XHFNvkZBKziC7r256QmMKX",
  "key1": "K9uxQdtdAoWTPZwf45mm96aZKBQxnpEXZqoWp4QYSccpvq3wdtyTQKzrysKHspPMAwqfhQ88GDiBA6ACAjT1CAV",
  "key2": "3esBgLFiNNsKo6YY5t2QsZYW2QpeXw5ohksA1v6ftTY1aDjEdPYp58Rvbka4uTxSnZrWSt2ThoNoVDf4Px2WEh9e",
  "key3": "2q2SJA9JefH382tH3JyLWt7YBbBvWqcRSVnU7Zm2PmfgEWX4RJf6Fzom2v29uwjdvWzgZ3qZcuCUhx2mm79nYad8",
  "key4": "4jndBCHTL7nQHaAMQq53P6PRqSA3RpU9HP3Xd1n2yU1w92WYeYvM8SQqgU8hwN7eGVxxxERNcsq1WrygKZSXqRpm",
  "key5": "43B5pZ2xt2sGYvYtCLDntMRpvrCAo8U6MXz5zyfHPdrbcFKnPcSAqtGhABLRDD9FDqneiyB9WWFKEw2ekU2S7t2k",
  "key6": "2zPMUgJtm6QQ7g8xfF6Ci7yMTSBjhyobwDprHubc8UJZmhd8bFNEiX3LFoyMYY92gAdwoy3YFrTyuWiGo2B4hs8D",
  "key7": "2PXWHbww3QaEw3BM9s1vEt75BrEDCHRefoaN8TErAruJBxDd23TSkXmmHRrLFaPLQtRns75ZWPsNfRQJRhv9rANV",
  "key8": "2TBofSsxJK5iieSNEGYW39FexpKxHNuPUW839pwfQnd4RxWFqaCRUwtGrNQhEV5GBnGxPuvSeGgAwRTHTuFkVwL6",
  "key9": "8Xyv8m219QS89WdEhDMuy8HiNYNyAts3V498EbhinmgnxRmJL1FrQ4sg7aHLPWhAJxinZa71wc9PP2MEKarHpSr",
  "key10": "xwuGSjEQyyhHDaiWP5gZ2jKDDQv5WHxjKWXcwh3a9Dq2rXWJ5aEWPyxPN7tEhCqmE5r6QBPXk9CeSLaifXHDBKL",
  "key11": "5SZJq2MY4BwcCaQKfnorXeK2BdkaAJop5n1X616ysU2YfxZEJuYPumqY2oeqkAAivicNWLcZAzdzaZVTQFCH8fN2",
  "key12": "WR8Y66vQXFAwuj9CzAPmeQLNn8QzCppRuSUaa9zadDn5kmhm9gACREjGRxjoATo8R8i5JjFArDQu9f8Dym7bAYi",
  "key13": "3DU7fh9eVcqw3LPde5r9D8QLsjArSMRKWNjiaP162MwGn8BqumEUKnhDfRqqdi9kGhKGvhsDxXFB1BM37hNHZtQm",
  "key14": "eHcQw6XqkSXCHzqy7LuoGJ9XvrSgbX9Wh5Tn7FhPhGnKXM4g355rd7FxPtas4GpVG8BrA4XExX6XA1kBpRdUCLP",
  "key15": "3wKy5ph6xjmG8RJWQZrJGchewecnTScViXeeWgfCX1FjwcEgKXcsTeRj4gN4svc1etrgPkRvtjVuzN2Da3Yfujvd",
  "key16": "5AKUZ8pnPen5JR5NWQibWSdyBqV5LtNUEfWNg8VZGe4przzVYeuKkuVVVPKqcXANFvtTcp95wu2gRU8RoKsTh8Yy",
  "key17": "UnEnpzrLnSz9PuvSgHDEMZTxNauyV3KwtW1yD7uQVDtQHfwiND4AMmpyhzP8Pdq3e4bxnZ4tdxSCtgi5gPoL3Vp",
  "key18": "4mCKdXHXXePkCPnmkGaK4v6ycsEWM8VPCxWoqF1717yxuVpk2yg8FuAmDDroftyF9tqrCr6CkAeooY8YKTYA7Fhe",
  "key19": "3CbopyZMyy5aLs9J3J1MzawPGsxeH2UTQg9KomuU4iJChryFN8qBtrMXsQu77WHkxoQACJzfhJhEEWPhEoAzeR3b",
  "key20": "4NoAAsbdGLc6M3WGQGVSHQ6MLa3YV9GvaK2AxgDbYd6CA1jfmsGP5YxQXzTF85XVLQDc4fJnEMsXkjhji1bHZgho",
  "key21": "2hdqXki5mNvQ9DUxcwf9kiL2xtoaMxwDXvwotJoxRTVU7JbBrinxTnXSuP4BMWs9oAkFXgupF4JtbUz64T3EoHoe",
  "key22": "37M6DqK9idJxsCyNVjdGhf6SW9My3dRPqkE9xexpgVUzTyMygmK89P5wYDMphuc6idaqsHaLAfVoR839mtn8awyq",
  "key23": "419GTXiYfKK6VGNUDWfFdA76dfeThvtr3N1HzPQL2jY93o6autCseXRRngLepNdAc3mApgLy6XQ9RAo7kBUpKtjn",
  "key24": "4o22e2R5jk1bf7P3mx7UnwvXEmzJL8oeJ9Hg6pEPNsWgXi7XyrNekvBFGrVEhHr2DpqrsPeCGvYnoEiDprjhD9vA",
  "key25": "MUP42S1AdNDAWLZtGGE9zrMaY4QKThCRjHxNZLERqw4ahEjtZ6xJj9GG2Er3diuW9VMRy1Raom6ruLdUgCRqamn",
  "key26": "1sYdBpUa9GyMjK1ZvAViMpAH7sx6775SbnLysoE2y1SvjWJp7BDS2z4QUM8oyjmiZtjRtcMBGFUHHm3Fwp64QvH"
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
