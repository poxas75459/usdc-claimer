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
    "3hhwthSuUYa5RDkjxwxXBY4c8JFgse2z4asrHdG3hPLgZ5A7sHvdSkqQx2zPExwYtdBBKd8JidAsUpFrScMKnsDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wtYShKmiVuzAseDrXM7hzBY21Q1DUm3uQk5cmhFetwcd5EycThSLiXwBD2bdH1sNhRPjZzmUsjQw2XvEgZrSPJQ",
  "key1": "krt9fSwhw9gtyCFHEXHBYZ6ZT57ugyXx89eQHkhwJV3A6r1GiW8cYFw2epqQbaAFTj1H4zTwoCQCToSRuT1rJhU",
  "key2": "3giGRaDp8opErH2EBD4eW19SUSuD5CjnG6auND4kCdzW1A4BGgsp8ULCG2qUaNoKkPCjAeWDumRUN4EvpThKgdK4",
  "key3": "2QUgRj6hUJB3EnWZNRYp3FuJYsHq1rKXxjgQKSCMU4Xui8tRWedk9kVzaw9nQi5u1nKXdXx3GmT7m8ybStCmFEGR",
  "key4": "471xsD7Zkf8LghGR1NPzNBjwYTZR2npCUmCfJD7YsEe6ptBZhHbugXGzgCfWMJ7Ja35TNgJCFTMQ3UWWPYuPU84A",
  "key5": "4xKJYRmL8RSHrK6C6Cs9saVeui1McwM6zEBW3nXTa6WNWtDoeRURHL9avbLVrJL13sHuonYvz6MdMdyzPQ6m7ixE",
  "key6": "57xn9TQXe4GZkbofr1ZMfZJBG2ZNau7jFi37tPdKECzwwrkU35xja73JG5zq7WbrMKGXUFLDBvjoo2kuZ2dxpt1y",
  "key7": "3EJjyqdg2jKeiFRmYS1FxwfGmUim7qnY3XAZH8NH4ZREYrhX42CxH6Qh7suu3ChMwLWM8ochntGgBmExbwKdX7w7",
  "key8": "5244NsxejTf8JXmfbJd8pJhysc1Ny4idiZJp2HiqetQfwcVDGv5yWKy2GqZHQZMhtdWFiUENB3YATSiWScmCgog3",
  "key9": "28WzNiaApXmN37XDLnuBtUpNF6rbJuYMGcUXN77wG8UyUVRe78fqtLvBYr4KhPwDgAHsNG7cHBgnhi1XXZNgoWjy",
  "key10": "48AQocN7J4dHcHHpJqeJFmjvTeLbyFAxX8PToZnc3bgjB3P5iCU2wgt45hy7DTmHvWSnD3brWLKDnus8xdzBdEkW",
  "key11": "3Y2taNnZtb5HgY7edh2yzjQqbNVgAmrQfgXtd5F5dZcPbsjm7ZjRme91eg6XpBCKUnroNA7mJWZNdLPhURsQQ2xH",
  "key12": "3FyQUmxfLiHxoQ8bmMGveY4mAWsBnvfaJW2e7HajFnUc9bh7sh89DummKJM6uHV3ebLsDv4S8TR32g27GhAoRSHc",
  "key13": "3ecECM8yryDtyipJwNMv794AvuroZxFkNsaJ86axwSCeV2fE3MGNzgcy7SgenqCKfgEA1V3vwgbkH1srcCfjt5Ua",
  "key14": "3rnQyXBY4gBZCEXrkNR9c69psJSvHdnFeWAckQGcoFtSSEmHC8ixSwQeCD5Y2bCdeNA2KV9zTZgixKzj16U4Up87",
  "key15": "4qT1zChiwuzRWpV5AN3X9hrwEswif9X1T1qmrUjRwiB52m1iQmzkZjPUa5Rtk25zJs8B1hHhafcrqLy1yoaKs3Aj",
  "key16": "312QXdum4dmZPktrfunFKwFpUrrU5FU7TPzyi2ogmA6zmnyn76g8MY7AD86yQK7ny1ZdoabBeG9LfizBmzujJmQa",
  "key17": "62qMs4ySj125RX4T2arAQb21wt6jDf6MhKFQk9LTcaorWzvKm4dak1hogXHje4Vy6vjJKbKjetKYPa2nU7g4GkWw",
  "key18": "A3GNjbzXgsjFjeQHFiiAubrLot4QqPrrz4m64J1i7F8it2KLDHuUTBa6grSDwDRGTsGzSiEochU5rFk2yLbCQcZ",
  "key19": "JkH2vwUvbf1aPfLYfYTcp6E3MJZUn6DyVvf3x2rahhf6hrUhaGnpV3jv9xExLpM8ixzCswx4Y8UdKv454A31Vuh",
  "key20": "57zrKTUYWFfGfrjZs53tFvZ3fTwG63vqfsFDnNL2n5c2kyiuzYr4h6Ztrhm4zHg3DnffhMEDAJYvFawZGv9g1N2U",
  "key21": "2FLDDgyNbmmJq6CvgU2zLVfLNRmBQkTgCyvuCMrV1vx6bC4UavSVoPdrasoD64JU3eDMZYJnCY4ePoBUTcaNRJMc",
  "key22": "7ZeuSYieY9jRhHazizd9x8HqTcBUo3GmKA3GurnAduKZVGaaG3ea3ZWyS6zEknKfpHEEQLf3pM6f7zUvQKieSv8",
  "key23": "21FaZgRa9nD7amN9pJJ7oreatW2mmswjPSk4Yk9dw6vmmQoRo9qvJrLs6jC69DNKpfEY8JJeoQLnV1Wzv6vR1H2T",
  "key24": "3Y5u6LW1ewGRypHZM64GPbWrA71ZyHEtQ1ExLiM5WzxwKACrgkFsJKsSJtiZoGoqfRRufRcU3cLagd49g1FaE5o2"
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
