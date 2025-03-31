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
    "4B8hFbhkzDuCMEfZPdeHhtEFmA3AYVXFnmZuUVrRG2jNvD3vZyswZ4kSvAFDzUMB9a5sbFuhfFj64LD5V7oDzveV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtbeqb1xapg2ajFtgoR5ykHDA9MhchwHqwNqWJBZ6UMCWzLXi3yGExyxi48CVtBN5GjJYyBfy2HNxNWUNXJW4f1",
  "key1": "XwBbS96E2zViJexSQLTuYTw9sQ1Tg5ebRq29ibMqaQHLLQJC8djDCwa9WCpjjtrLdYPz3FJhefvqnyorjEzH3xb",
  "key2": "3FccYEhc1waAWsq7mRJrYNWnJJ9m3SyWzvpv275mKkpdsDqjVyLjMbPKeoLHo1afuC9hD8FDTKrp9pq5PWf6AhpB",
  "key3": "HzRALxabt8NCZoGzH3HdNjHKzdfJSRe6XjL6PM8q2vqfsu6RRL5Rq4V9YuBijKck9YtuPXj6V6K44LmzZjmaYiL",
  "key4": "5ogfpVn3nLerEN9qYfwFTNYvZJqTE2jJX7h1YdJXb8aqW59ij5WnF387svAorR82zTzu4qrNMi7x11QK1fetQ1ZF",
  "key5": "3aDYtz8tcT5rQGRUKRdxHimrSAJjMQSfrrFAsWk5AR7abhWQArFGKgcswSBjSDVnzaBCW6LVQFPsAUwUnofJ3vWQ",
  "key6": "bsVRKQyEbDmkDUSHGGsUUNRVqZsatZdoXH1yV6bwPVMfGGF8PjYMygNU8bny58G2jQfk3nrrXqS4w4EFxnWy4Kw",
  "key7": "3eSDHK4t6ZzFYQdTQ1qGqTdRitjGHs31d4CkhdWHB4HMFrke8H5oYDaU1CuqjavZUzoCKFEsfwp5nqAz1YP1ckuP",
  "key8": "r7Eygsb2sPoSE54Z9CWjGupGFbo9oDEh5NJ12TZvMwN8AnQ27GpYdpyj3U5R6yo9SX79DZiTjrHxY7wTzyP7pFC",
  "key9": "3XqSQBeoBH2v9MBSrLteoDeEwvxUtjzaaQqfAviRU4sjiM1VCuP2597by22adm4grvWEvkaBYoGzsd8mXLAsSivz",
  "key10": "3Ds4EwgpLeWDtRiCKb3FR94zJMBbsF3uvgo7dahuZyg5CkzJHcKoipjuPMw3HL6KToeSooQStF532C1NPAtt34i6",
  "key11": "5SFnyWuC1Rt8vSchmQwUJYxDRTpSKiSwpk5AYoYdSH8KTeVi2CHsoE1Ajruq3P4BSMQ1bRDueYQgZe2xq1wVQXCv",
  "key12": "588rfKa8CfA2cLpAfD5uBnALvA2zaNwrRitYfdbRTbL4VYs5b3sAayonjym3JBjD7a4pcKxBXDGfVsBSz4psNZbz",
  "key13": "2dX5z6RsTzDQ1vLXkobazNZHbEWhLFRPFBmZVwVUzPgK6UzPt8VviWagh2yrA9GR7fFUaHq9QbRgB2stX3BoAxs",
  "key14": "4nj2QbhKyrx9dmyF68ir871H2s3xSrayMHwJ7i5ZBSQ4JEitmqVEqq2tT7Tg9rDx8JpUNXYuMGZMARZyLxyYASX9",
  "key15": "62HsZjEuqsq8DLeXGS4B3HpNe1BHPcJ36cC2SJe1bEuzRY5ekoAyJhaZqeE6oNmF7JG7zmHxR6Da2NGAzumivH5G",
  "key16": "3HeD288Z8AfsF8ddMoqLwNu44aUWdA5mezAHHXbS2pgJA9QUHHwVEBHAEZBEb9FWRjR9A8Zet5sp1i3xfQFQQjg3",
  "key17": "5suxjzDYPNrfZTcCebf1Sj8c7is4dkktGPpZAFHzcvZvvsiHbpwjjGsw6T3cG5KpiY5Z1dsF5v529XeBwiEvsHZA",
  "key18": "2yNHFNiGBoesRibiP9Nd3ND4LGXNRizyEonsb92a2HGrLcxZcST9S2YPzekwc1Q7H5u9SSnFqzQpVyAG1NiPx5Cn",
  "key19": "fMQiTEBEoogWD9EP3m4BWx6zcniA5iRrbUrCogxPUH9ZHFo6Zwy79jgFjva9KZjhe6TX6SS5tr5BrBDw7yWCukx",
  "key20": "dp39yCmFHX7WgQoY2PURcMC8qgHfaufR5MZpX3qgpSsPEgbcAevdPVZBsCvH2jz2qCkyz7smngdhqRgu8L3d6Hy",
  "key21": "459fQfE7TCzEyfqT2MZE72bW8zHStyRoQmJYH1DEpC3kKZJAep62dVW8zBVSp6VFj3BpxUENNoQuVFK4qfsPxX67",
  "key22": "4ooV16W37iJyxRmhMAowTF3B9m8HKLZy8bvhfsEihtaagdvcmqqGx4iA8j9xSdgh3jy3N274ZQ5rWNLdJB1FE2aE",
  "key23": "VDB6zfNbAsgsx3HtenYHSTnQF71tskTiPQkYZybsrWUoDsAhtssbCvwC5MBdaBLdHMR9ZQCEDv5J1WQ7z9NQJKS",
  "key24": "5ZLgnYfDAu6cvuTR3sEFAXgpNw1L1ovpTBq8tZg7bV9UHEE31DfW3YuKRAKPgGwUkDKkva3K98GyyneuCqbN53gH",
  "key25": "21oGTnsjNiYis3WmPu7KmZNiRGyD4FFKfQPSQfV1ase6Z3kTBbhvggkKnbmfp5aEo5GjZKnHKjxr5TPr5NhfxTas",
  "key26": "j3V4igZQogFbgSBbp4LH9YauVboTaNRoPXusmgHMd3E8hrod4rHy2xm8EreW2MP7XCUZcbwXySm8Nxnu476pK7Z",
  "key27": "52n3VRoMK5cVKCX9c7CyoLzu9kh6GMpyvckpjfegDfYbbvdXYDF5nNcYnpeQd1fCwyWfQakmmfUihAS6oPmaSPuK",
  "key28": "33SA7o7DCS17HU4oQUtTbVv4sWuwfrQPdWgbKUxFghj2wqSwAZ5Dv3CdmtzasCuM1xYNKx31ZQJe12Y7XbFuFTXy",
  "key29": "UF2zgzsD34mg51Vyy2kMqD6psMcBuzMJddG8wHuNrYY263dECHda1bLED2n8suKj1oDMc7WRwnivtU4DiozFmid",
  "key30": "5SwfC17BPC8Q9KepsuX4hmoHsnnLUG7vXkdEJiQvJnbBZZjLoFUkqCDEEyAzJ3dPh4rSWnagHvmyXiUY867c6XWh",
  "key31": "4Hh8XB4SYyhYW99qtVqhPYvagNsj9N2LqsY8a8tFWiNCAakBgxdwhnmesTxLvJojs6JC9gGdrbuthtsSUHR5fKTt",
  "key32": "3JMQizF67xCD4ctCFBrg4hUChFWwrbSENrRzHUrSHCZmRJq9FgsDjUcWrwkscJZnbFE7CzsMUAsDcKpkCGenYzpa",
  "key33": "5vodtw3xfBTNmXRF2qpRtHTsNHtpNaKqXXZconDzbKmeoLC2LpJTvsQ9G5PXTPUi9jo4dRkRgQ96fCRtho9fmeia",
  "key34": "2HxiMxwVxcYR7yYsjQ3X93PqHELaPBv5nL7kpvT9u7R13gJss8easEA6xnoCxdaFU678fBcHD1kzknRWLQiTC8gV",
  "key35": "2unRgUWaKCjtaQeKy5wU21jcj18vaFxP5QtumEW4iWz3YTSAZpr6ksnU2xN1oGjBExLUUEnP1NLtNHG5BrMWaMgc",
  "key36": "3WXT3JxTWiLiFYip8B8y4Aiyd36xmkqZ8EXnZfN2aNm5YweBvaiPBFuDs6sgMs1Dhg4WQxVpede4Gy4NeQLcpRSB",
  "key37": "32b1v7vcQzmqCG7L87Xws5S51wAuoExU8GE5oVKDEvXDx2YQHWcyuP9GGsrkS2RxuCp3mEjkUEw9H8SQMmwm7ytN"
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
