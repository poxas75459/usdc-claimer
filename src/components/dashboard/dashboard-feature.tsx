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
    "4ViYdDkYMjnXihkfFgZ2MMfjBKBG2iGZUGZd5xf1mYwJurtmXvbWWbucWrRBpXpJy4FVQUAvM1CPCjv481y7nbSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21wqMCTHTparx2VbjMCGKZRFR1Sp1qU9ML25AMruJQH9MswzuLWvQyV9hR3eQooTTsV1AqbD3UPyY3CXvmHeqW1X",
  "key1": "2sYSRk1pScL9qJc6sgzWqFNFqqY82tj4kY7FPsLoEGT2cgjeHdpqJftckthGe4p7HAYZsSTWqBLFTXQqSS1xoeG8",
  "key2": "3dEtXbfX6x2yZj62psTJSk7RHDJQqwBcCBk3VBW3GdzgPjyERZAr9djc8cUC4aqcetLJj4BT9dEeB3LshPmJReFN",
  "key3": "4Ybww7nyQpbJpHEHaiNeaKivLTqHftDCAitpsgsC7UzgJEkL3dQRU2Tu11NA1hsfBaZNg9HvBVXYVBa8KrCAKXPE",
  "key4": "5rDfHiDWwiGXAxc2DKRRLSKV4JXjKbcXxJWJKUoaUYLsuhwn3RPK2XjL4hGoiRtkBuee4ssVxUbZsxqyfNETbYwU",
  "key5": "4gXcKTkNnhBvZrskRj2RHKJkpUMzVhKy5RrT3pyjKiLaAoUziz89T4Sq916n9ztd35LC7whNpcVprELLpMmpqY5k",
  "key6": "448ikadTc4LdZ5YX3ASCxFuVW7g9RoKVAu4ygRiga6kq98XXhVUUCqq75sxG2rWeGQWC7mQNzKGk756mCPDgocB5",
  "key7": "4KVzjmMJgxF1ghkbexM8G4YFKCsqrRiZTZfCmLJxGnwJKvZa3fDisTf9uTrNYVFrsESnf8yxpKWsw8Z8ZkV73N2X",
  "key8": "UctnMWXvZuJhipiDsWKinCYhd9wNsQPhqPFed5gtTbkWQvBMFGRKdp6wa5eXkkpGAxuLZcaCURjhE7ryRgGo6yi",
  "key9": "EznxRiGNhFR8ZekrTgN1yiYyY6Bneaqq4RkXFqSGc3VTJJSHpB3XBrEWB9UwWnvsUGjCTCUuKbgk1XMGevXZshT",
  "key10": "4iiGSrPdiZZZKh1tAYCj5AcNZCReZR3t8UJk2dMSJNbF3WtopjQR48Gm4pqPCWkikmuJDe73ivSEZXmmswjZvj6",
  "key11": "5Apq7BsJM9XdiaS3goFsy1oGw37vJdeibxCw65Xbofgk4oo4NiYvHCH2TNYh3c42ea3qcRgdqmSzqKHCEpPgAKb9",
  "key12": "2NdC3HhMMXctsCvnhVZyMt3NS4XUfZgjvoY428H5uKXeQtD4DnNJKi3C1JRD7y8eVhpWJ48TTvLomGheFa7jVm2o",
  "key13": "4AewAKcaKJcACKHx37g6jeE6MnDmMmJ78xwq5Sa1EKdVHPyTZBPSXyTj3iafmWeC4kkgz1iLndFxGphxaHwXNiki",
  "key14": "2jRXfL8ZB6FBPz8ntHkXhY5ghcgEToUbwWXbB6fymmYNbQTbsypsDiDUWp7dnJwC6mRDTgXdADahpxpcvTHJy9eC",
  "key15": "5NM3FANjogAimCVFcUkhUrEC8FevDDr2h4VfhGTc7Kn7cBjBH7NLMNhh92fTHhAYcJH5nUUtynaMCr535Fyxyoot",
  "key16": "4vcM8jtgXhXQ4fX7SRaVYV2vEoFS25McCPjm9PEWmE5VaGUNvVD4KToe4Z61fbugF694Eb1VCMnh9nS5LDGejW9z",
  "key17": "5T31i9wcxS7Nt6444LMfGtC51RQuBcsC6HxHQytPr9HL57bdhnK4Qv6g9pp9yikwStUiWRmkg2fjg4Czn2iy5E3G",
  "key18": "5R5LSe1R7AEs2Bb6rehattgoFkYd9VXxCLvoQDtJuizG5b6ohMuUSdQvvYYuoicbYByJPk2GckqyzEYjV5bCzezL",
  "key19": "67XRgkKmNME9dcrYukY3WZ2M29HPX973QhsvXBGXWkppbntgot4wARS2kAadZpCPT1DrvbRs7ocJTxBc5dFTDzJR",
  "key20": "4SiATYz9bEJqZme8SsFkxqexqT4nCtoYmCjPEkU2SnVrnW6AyFSnUhR7AxsdH8NvQSPsgJiePmUPMq6kSyERFmfX",
  "key21": "36qj3nQywGQPQS2R9yJyu75JyDM9dSE1fkSrnV1ZVkwTyJj96ev6DwHsmJ8UezUcAcztnRYcC9m96AUsb1gh4C4Y",
  "key22": "5Soqh7LPRwHFAhqzRm4YcGhU5MEtkbwA58oJR2arzTCYivNS263XxxooTM91ityzQ4QDaM3ujVkLYjRodwWSjP2k",
  "key23": "3G5tazWeFSv1QQKGHNjCsMR3YyHE4keDENPw6jhWahdHswTeB7KoQos8QQ8vSiRU1zeBgFufittXwxiKy2cQ77Aa",
  "key24": "2BRkv9FxHvqFtc4nktA6rQ364AtU9geYMBRyuK6u8NZQYvaAnXnnbWTKnAnU7mTdVKMr8aczUv3sf3toDeKNnoop",
  "key25": "4dNWCpscwGaRGHdmc57xSA2CPjuuTAXBa56NcK14bzgkhmWAN1wEerLb7eHo9shTWbQoa3pMhtSPLvRvZv1zXScd",
  "key26": "4HepaazTNnDfeLCpQnuo2Cw7UNprXbQWL9qVvU33JHEC2MLj75de8zUK5nSArAFFtvdZe8VfyHEHQMX7H1TymsuV",
  "key27": "2HjCF4VWMYo9jPwqG5Ce4656cV1QDh3SzMr1QtBBLMV71zjBFU4A1b3m5qXkdfUH9fXKP2kN38ZZLsUCr7vgKXS6",
  "key28": "2EACZWWwpNx6DLJkc7qsdahrrSBe3KZr6Qf5vALbgkjDvZpLq7mqtQmBhEAp5GARx54DXSBbggQ2cWQkp918tqwo",
  "key29": "4ZnazZMsEYkQycbSs2XJc7hsPWwB6VvVwc26jeMU6R2xuxtdqbzbRgiMUErzzG2vBAHbAy3oppRmzT869PnKt7oM",
  "key30": "4EGUpgrLAzGjkc9RPfUWxyJ2MkURyJqNbYa96p5h2iwTLFujkefg9eh8Hchfja8TVBEVmkEBZSFmR3PPYfJq3xT8"
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
