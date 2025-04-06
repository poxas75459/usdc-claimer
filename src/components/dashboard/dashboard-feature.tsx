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
    "5UJTHnXZ5qnVJKZEuvztLwW2nrjkCSk8mQrNHwH6mMA2GEuagUzgRN1h8h3tqaB6PUEiKGTdzgML37xGDWAAUt5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qN4zzEsM13KKgqHFziF8Hxzjp9DD7Fe7ZgZ1U7RmFe23FH9UV3YW4AbvKFRAqtWMEFAPKx5ekUuiVm3zzQzFB76",
  "key1": "CpWeGQzVVRxdBGzz5DhemLfzwyHgwkNcFYYH8qqwfjfNcVnkgyR3UBP71oEcMGm7oHxkCtMAtLFJVC6MkeXMfcx",
  "key2": "5hoTqjjqF43P5VZEKPacZL3bNLRGtjBoaWjCiGvTC8TX5WMBr9iqCnVw8yCfC8AYfFtPchak3LeDxChNrgouQmSf",
  "key3": "2KkDd4NjDnLNPnqJD3uNmib9KnnzEh1wsHYc7YxsGTYg17itnCRkat9QFhvthQtrrU3YJKmmr7QD3u7w4EZyYn2B",
  "key4": "2WoPdhZgySupivTkUbViKCDi9FbpXZcwnGK8BXN1QTzacGmNydzBsEkrPvJj9chzSnLTd2FEjxdoJggJn9ER2YMz",
  "key5": "5E29Bx5itvpZtAARg1mUh5DqCnuk9eWwJrbLTQf8Me6dQ2oQhY8ErEkeYWGNeaDkwCS1pshwejUVsY1X1wmpnbpC",
  "key6": "2MYFp8idRa7QqTZ9wzXnFi2dkQV9uV7eiqG5KnWGsbuVWg1TjtduitP9e86VRw4pJRg8RyL18iatCPnETV61YcxL",
  "key7": "5XM9vy72KQMoh48mL46eWAdVwisRjDDmoiqiBqqEhcvU3SSiygvYEtnZJcUnfF5mkitmBWcfiPgCySJg3yzUfXSd",
  "key8": "4cPD5qzZxJCV7mJWx3rUjez2ZjyK7nfJcCn7PbwNdJwv2EHaNV9usKPG7ai9eWja4ptCmPMe2rAAQUawhSDZvZdF",
  "key9": "4vKfbkGG2xpYAAsKKHy17N4mp5kfVUXwCjH5ABGyexTY6aWeXnSMkF2F13syWNFc8wwmiSfDstDHNWo7iJJFsad9",
  "key10": "4U5CyG9C7MafukKfRf5QGrAPxgnUSt1h6FKriFv96iUPkL56YGCE3sFLsHZzFkM6WTvHhDJgr3tfArcx7Hr1yjkV",
  "key11": "3LGZGv8Lshm6rDTHDuCmAYqEP5fDf2ns9ysEdpPmuHg4ZgwbkZJ5yTt1ARKby5Ymvr35BfQFEWH63ZShUEvU3Kt8",
  "key12": "pQorGjW2m8XUFJnN7GSkCpsFNPsv9D28Yquk7V3P9aU4bxwbF8jsDDDkJLLpExj32hb5nsnXZJBH8gqUtXGrc3H",
  "key13": "5gKeTsm98NJC4Nx5mGL8HmKbLfGcDr9MKXPGH1y6PPEFBSWLaqS17bMH38JiEcvHDiGoHj134btBzoca22yBUV33",
  "key14": "421vR8h9wwEkFLCwHte8T9HPQiUmLjAFXNPiKwU2z52ghoyFVNEwzSY59ET6fospYiTY8pv2B31gLtVJiCnyCYh3",
  "key15": "2Dxv6YpZGUPQwFtpeXSV14fxpNX7cNEbohB5HnTeRbrEFz5bD3PLLkBQbdwKdTMb56iGuFpRYuQuNJh2vrfsmDmw",
  "key16": "3yzw8gkmgwZrGL2U3HRynf3pUMUfZYyG1axHG9Khh8c4yWtJY3JeVsfeUkre4cRrJVzFDyZURJSfJsuVaY5nLLDf",
  "key17": "5tMoTg5hvkpS1kW4PRapG75ea8UVcfLZYtNaJ6eA58vqAxHEcygZN56aDv49DKirVbwuve3Yp77qZ3HVh9q1xi3m",
  "key18": "jok4EcZYo56mgm42BuemiGMdzwVpRFwpXHo1s698s44nHu4DxRoS8ZJ1KXwYchHZ6mSSnBYYe16AWun5LW3Aubm",
  "key19": "4UU5dCqXhuyqk8ptWsKBz1kfhK2PcfNfxNSjHgPaZ4QTda8PpsKUNgtzxA6fvX8GTUTJLJfuSRfSHmjqwJuVWRnm",
  "key20": "vqJ1WNomyCDZpKo3hqWEdfZ1kBeyqLVLx1bXorNdkWCMZUFsyLHZPyhsNqkKHaq1pEr8tv4QqHApMEnfsXwpsjZ",
  "key21": "3u2NF2h339CcWADz4YjHghsCDd5wi6AwxH6yJfG8JkKrYDKXXDhx7U48uvdeVtqTd7mbPTqdo4YWtvcHnYgLR5L9",
  "key22": "3XZE8Q7CFr4hoR2Z3GoHES1WUW6t7QyJFkzyRtqNrSWMcTYP5kWWbxZPodn4DRwFvctRtFSiaAqB4Eva5HFiK5DP",
  "key23": "yNCHXCYX6iCxpKttWC9QKm9Fm4D3oX5nXxDnPsBB86ERC9YjEjx6yG2N76YjJt6MkdwCt8Td88SQHVWB7o62iH8",
  "key24": "dQPDjM1GY4MD2J8H1vcp9AKKvFs2Af4ARV1mN7RjpvbZo36hnxKfSXxdiL68YVjJncosbVBAv6JpZyjVBKJBPnk",
  "key25": "3yczvbqpbPSmVJHvR5geo6NkKUsWJ6kFStPka9BcXDVaLrVmcAPUmg7nCvbv9LS57GK1akfRPDoLfx9U2iSxHtMV",
  "key26": "3RwVhPJfu9e8vbVNYtnotupEhYLyvJVv41aYUrUJdsGhVtvnR7k4qmZcJFoeFA687XhEGPtx6JDKxrw88Bhqvfpk",
  "key27": "5mqqurzJfk2LRQxEghYZw13terqMHsphE8eeGYqJW2kspsCHLTSriJduc3ZNmUr3Q15DSzYSNFRwW9BzJvs1hhNV",
  "key28": "2Emk8qJptvQcz6YnnLzZ2ssHawi9jF6dEKgHt2kBfvvJJ3WTRHst3Tow3mAau94bm6RjSdhhwYgEyzX5vdxEs4Y9",
  "key29": "2q793wZ84ydMKM5dYdVnqgWNAXw6daeBQqgMfe1scuucn8FaqKnQTJECw7Mx1XfKR4vHqdN6mCtqbJxgfiK8zcAM",
  "key30": "2ha4kDanc63jN21coRx11zN8tmuRBFhpj3SuvMYUjMQ38XD2EpEvLEK6diFEiCBLD7aKQid3mktApVZx2xeepnD9",
  "key31": "63goY4YWzG6PJ7shcmjxiMYiEuggCVvYkcaQeA9cXQo4YdnVojMekpEGfRKUXsdeSDt6Tjd7yPAjqqEceVVw569a",
  "key32": "5AAFgf2rmduPwYVEJryWunznUTK4AtCf9PieiDEMUX4Xd4ov9gKpFLeXNXHZauW1ELJm26NHKrNC6Q8tVV1iBiXc",
  "key33": "3gpmw7W7N2MbydrzECsNoBNC258bPRiUd5hDBLXBW2EBZYxKMS8yBNPcRtdHtCqaToDS76v5ghYdm2Q5KPepnP3D",
  "key34": "4yUNTzxSfRNjdPSHRpqTas91gkYKFN7HSCTtDrUTLG4nb1fjJnczNZDrfk8326KEsqNbzsh3fFFhfDx5yv2gF1o1",
  "key35": "gmnLYENez44ZgVQXeZ1GNe8PQD8g8TS4Huu6uYXjScWUjetGqQeZGGN876gqxQijLhMgEdLpCLPXTHiMgt9iiKH"
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
