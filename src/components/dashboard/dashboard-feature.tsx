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
    "2VCTneDCuWiNFiTx3myL4qCozMWvYcSTsvyr6qdhsXKj6s1xzAoyYnVLUjn1ziyqHpSDEq4m6ja6nMZUrPhBp75z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BjrYSYt1rP6VU2yNBLyG7x5MpgF9HW5LpEpXDr9we23TeRvQENWAxmPTuF5ZCdrpJkPqM6DiAsUzJHiJtkkhcqe",
  "key1": "wSsembTyDXtSCwCa1auScN8tuGSaqYoNRjiAewdDNdk3LARiLS9b3sdQ4VESabHM5VLEF28GgJRhSu849hJF5j9",
  "key2": "5MPBGYHC38bEohqMS82JG3dC6fmw43kt9F1AKQRCgQ3hvawR5cWeVSNvwnnHwsd6hYbb1xgsQktzHh3NYAjGv7CL",
  "key3": "3aBrV9mdkczNmMVmfzSRehupzdkirB72zeebimCUMCc2CmgAcQuR6Z1HMePt5aaLn1dhWFtFirY5aVDEYBgrjT8q",
  "key4": "4Cimk8Noqivg7iH4mtkKvdRpFGMBsXEC5o6qd8W11GrNB2zvi4neDm2hAVH4e2bWkq3ByRQncmiNXjgZry3njzx4",
  "key5": "49uGvpoaSar9MEci6CfQjQRcjAcSRv374heU6x5DmoHNzymyraaeEDxD2qBsL1pe2TsaNQxsZc87n1KyLrBkAygq",
  "key6": "4qBWJiauBGUYo84aP8HnrHNWs2Wngsg143dUziSsvV4o6Lmg7yDSPhg84xFy43n1XQbmoLFHBHssL67fxkHnvKAf",
  "key7": "2LPrL6wzcZKgrNZuKLsQoWAZnYruaDwSPkDdneLQD7bLwxGxwuwoWhdt9rrZYnvaDYfFtmpUvirN8t2UWCzwWCiC",
  "key8": "2V5bnCgAVFL6BdAL7bgTgXPVSjWH1FzcpWMu3JEuQA8CYdZFsRKThKSK1dBCDXV7sEb91AaQVoABV95XDJR6f5e8",
  "key9": "3DySwdeMq978VTy5YADVfVSuVY4NCWhNZt6oow2GvFiTScoLKzqWaFR6ypDcu22Vxm3SvKYT26qCArW91kqQy7ex",
  "key10": "2W2o9q3uJDbctC6ih798dBUYMEokibAZrxQHSXxramwdkcNjYv9DS3GC5PYerLbmMXJUDmqhRdJsK6ZXNMjrNbrn",
  "key11": "4torgRPq3WmeC42Mjxzz3cBD2fLtGNUqYwGAwKZ9PdwjFByphAeKArzg16UDWRxqxT46SjGkazuVFfUt2kFguXp6",
  "key12": "3Zt36qB7QrRGApca9bpTo3zctsuSH6U9ExbGi8oh8sFu6JVU6axL4BRHUHU3fo46gzpwQieQ8TayfRrwnpJXnKaq",
  "key13": "5dEKpnM1JSHfPwDeNLkpf72W2wjZEaaxvfTxNB82veQATWH1sS3WGkdTywdrEHGJ923uSRQb4du7CPhQAW6AfcTj",
  "key14": "5TG8RXNXfnZfPUcK3T5n767Xxs6TQYyJqUzyxCSE4VkxSKTqBjpBTPaijzZ28Qcsz5vt3GHGzBxQu5uCJj6rtNiu",
  "key15": "3kR3G5sqXK13wqt9779437gwHVRXipUVzhS9i2qqQaGwVKJGR1wmMJHqw9z6jZfvMK21yoFstUQ3qfcsH9iHS4Z5",
  "key16": "2nHKkbqcbuNuYK9ykstVT7iUe2pDP9fRK5UK976HExZBaHMzHNgVNEXNwZZ8QP7BBexFp3Np2uqhTMZPbg2nVacb",
  "key17": "3GZqN5vVH2eGL9S5b6BScQ7sVc7eTv82HcMYZUQmwrdsDLqdiYTNvAio8A3pkNk2Wv829ECpmy1AEGfrz99youaS",
  "key18": "S8UBTzdbPfmAqro4MLmCtZy8XFsY3rvNp2g7ipCgN3nwQjjw8txxDXyoH1YEAagPAkmEB9JbRWhz5tR8EduJYY8",
  "key19": "245wN5Y4N14QtJfbiLa5yfXHnrrnWrwnqZmMWaVub7j47HzZ73qu6DpWqrrFe59dM7tgAiRNdmd6mKSoYfVhdgAL",
  "key20": "4r7T31kohW4NPowXE5zhHuusSCQ6ZqravBtLXNjXN6AFgqsND1YT7NHptzC6Je6x56arPRCG4n9gW3jC9TSipEsN",
  "key21": "o2f25T1pd5MeLAhSc9NwWN8F3waaYLPP9CseuuB6eZvUNeWZVVAs4zxSkM9ehLhTa3BuWoVBPivBq4ghu95G4do",
  "key22": "3wFt9vYp7MAZcdQZSPYbwxzecZdrCER4ggC4idove6v3bEvB6PN6TiNuwpFuCYVQbmsg9WhUKeWDyZ6oRzdspvNV",
  "key23": "3Jzfa4NT9rAPEGADtz5kmp1FTUK2FVBohLenhjxYkkPX37eknXUJJgmRiJeHjKaxwMNbA2UrVk1YvqEAwjZmDeTJ",
  "key24": "5CQwiR8V6ax6ZjT6GacY2dY9U1sZamX3CCM16FXDBMVGR3Wdj8BaX7YsJV4JWcMd5YNZ6XpyJtabfMAbtesmkseN",
  "key25": "QJYNdkrKNPEgqRrXYRC177c4Y4f1jRZoZkxQh491RQdrfH52qMsKdsUyjbNTzuYSRbA7wcthjsjkU1wXiYeRJ3V",
  "key26": "xaZ89DAifiFuijTXhNUVCssdStdAqpE2ynkodXDNXhz59ecJz68hhryZWw6MtjCwoyvEWy8g5ntNcVmYnbZBkeB",
  "key27": "4Cm6P9nyvo4xfcVSPErCrcmmupPQTBHRmzqzCpmcnhXFqTbTgmUPSp3njweFCn2BNfPH9HLE2wzgdRBddvJvs1jz",
  "key28": "5pN2U2Qka8uXLA59SKGXWNCV3aQfMswz9FTrxb8v5KnJkZyEL4hbLnobhGTM51DTJ6Aj8N79DbUa9viKcVPS3tPm",
  "key29": "4g7uFuobiLNQyEnm9LSXAKfaywWNz1eGipYt55CN5MGhZyhrTVY51f7UCSVfbScR9h29kyktLS4DGPWz2omYiEu5",
  "key30": "5435D3Kv96boR5SUs7NwrzkiSMjENqbRcBEAhc8vebhVzYz4QZfToRABGiohzKjBEUsmy55mSv41XH8bnb1tZf6q"
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
