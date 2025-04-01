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
    "3iiqUZB2AUN31CUVgmQ2FYhnqxXRtdYFx5R59s3z9jbCgRQcyDYZ1mZFRVhkb1DpXuTbQAMoYFtrYqsUZz3VTzQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22T6j3DL5sKq87JCZEo4SDNj85VsJ45HGYW13FZMpmDvBtscP2tjbeEResDE1qHe5DX4KrxyZAVSVdSNaKWx58xC",
  "key1": "56VzNmMLDeJD7zPQMYCeM9ADtqyqwjTK6yYFtg8PD17NadG5AuTPLxwCjCBoPW8iXmrhesQRW2YcdVXRxQ7KHFbR",
  "key2": "3uFy3dDTdtjXUNyVDSnvaj9PL4TzePjDDNVNhDLwk5KqzEQXdyrbEcfzrj221VPmCP6rQ85GURBwget11zwNzXzM",
  "key3": "wvgJNviYzT8DRSNLS87nhrK9UYWJ6LraxYVkZU7fehauWgoFKK7KkKUx3Thm6dpFR6o1HGBYuxLjQfhWLEBMMHx",
  "key4": "5TJRKN7d8dPhC4X7pExReg68WqS89szQmsiF8kfzCGgK91n8gYT9CW5vJMgZH6rnQ1Re5BC2hNtLKkkXt3L7wZE9",
  "key5": "3WjggdwrrrNVN9yUgV6xmByDwQardkAnfHJnS6QTdcCNZk8vfNX8xf9aFMK1wa3JAczurh1d2cD55TNbxBPUbbTR",
  "key6": "4u2sx6Fenv8mqLwvKjM7SesGt8qgcwNcii3S5THwEYY1ZU3SqikRhtWf8S71iA36da9QcKbdms2MiQ1AGeXtenb1",
  "key7": "3VN8X4isGRUSf8vW1u8yqMYT57Hw2VnzynKLWPCCzD8AphUkyTb6LJi363a5DybyD8ka3hT5j3YL1UKENS1prX7Z",
  "key8": "4LDALDzN65x6KwwteitnbmQgc8Qv2KQF6KydLDY6M19535eiC797ALy7M7x9XFbhHySJxU531S6Aio59C41hzj5s",
  "key9": "3YwMxwXLLacREj4bfrA6VXFyNRyaXFFTz9ERQBsmsg7SzLL2LcEcfPdqxNSpUZTJMkJihXxqkTz7CCvCLyJN9aMB",
  "key10": "5x9uQyJXgLoFmJQLzeeuGt7VHRYN48UMBxCgdjxzid6jLQ3WnN1Wnbfh84ZJoWKcrByPQ5cvhWGVzyYHQQR2PGHK",
  "key11": "2aZUTCAbqttzsvkKNJPmJ3BjyQbwcfM45FpNBPgSpijm1tkxmKSC492kUARq7EJjSTrEHH6fy5qGyvZoJ3asr5ZG",
  "key12": "5hW3D7VatmR7JHRzXsuvAKcyVuQLV7oYiHaXSPt7FSazqFWyWJiS2iMichnX9sPGf799TxPbA6p3CG2Ho8FJ9QrS",
  "key13": "3o6W9MiC9zNvJKP1kGdPYHQ1SsRRbhXTMjx3LqjrJtko6vz8pWypE7j5gMwpLsEa9RykHwJxtfHPCmwBkDHZhs1d",
  "key14": "63K9vymuzfihtcKfnwpzMLRwyL7uSdiTXmYPhbGZnJLGxEMQSDcysjRdrAL1KB2XynSnXMWtJhv2rpMKPYp6QovV",
  "key15": "2xjPEXnketGXNpUZySeadE2Gv52xNX8X3hb3HsBY2V7E9XzAVVfpo4Fim1G6c3ore7WU8MCd1xHEcjV6SHeTFXL5",
  "key16": "21LhKreNpVYuBue1abDCYbJ22wHf9wC5JMAmXgQ1ovCG1LRBFYdFnFqgmj94xW6gWw5gFbyaXopnPsiWUEmryxFv",
  "key17": "5NxebVWKyLZE4eTaL1FWAe8i9L3e76GZQ3SijdiuKTCvRjVYVgzoULe5nWF2dC6XjxJhKqE7prMkNtfzVEFEwMcR",
  "key18": "4U7N5idt6in95ox9stSVcrP8WM9CYVL8AnDKZnsFD8eWCi5zkcEwkGwzwqvDhPGy8sagXMHCpMx97JWC5NXtX3tR",
  "key19": "24FafXd3BxcMWi1yYiLNqTHka1tK8Rmesq5pTmKc74EmGp1ffGK3zyuSUqPvno9ZUjn1vL9UhUkQnLw82jKMFshe",
  "key20": "241JUkKtAYnxRPsd9ecRg1EpPZ2L9T3yPg8WiwHPPfZYsmCSJa1Soogo4ZVhq4HYLLhUdYWPv2Tn9xJbeztzijUn",
  "key21": "2J96xsJWM2EpwZTK6rxLVjYS8HZDbpBBkHms99T7ekHe7EvFx1WW5FeGEXtyTGNnJ5YMDMtuTExLN8qwDNqvFnQA",
  "key22": "5dKgZAp88NXZUpjQY6Csxn15UfY9EMfRhfsRjJz58hGwdvnQQrWz8iYmsCs6ExLsfNntiXFTAr786DF6g7R1mfgA",
  "key23": "4Y7enSGRp6bTqHpQ5jr44VMqBruQjUWM8CZQqP7jVnrZx5AgfYWNxFfDhsm3RxB2awTY9wAGBPCoQWTDc344KbqG",
  "key24": "nPB2uAvfNP12fhyGYHErgnib5hDWDJHSKdKjAC1S9R9qHTwzyf5kjzHQ1Hby4upULL1WSJZXPHFHuDfoFp5kckL",
  "key25": "2TsCeUEaPTnTddaXKHdjokGANJuAptXzVRiPfdhJ1yXcnsbomQ4P8th6ZxSdrcexcHVEE9rpgH1PPwb8AtVA7sJA",
  "key26": "3TMA9hAJ2vUePTry54MFkwbUgC9Xvc9Jsxjb3YdQC8qbxyhRpWVQucS2SXdMw2GpwyWeZrkUUirByeaqnTF5cyws",
  "key27": "422LaX7GFXfTR5E1mCXVpMx5Gyqe42y3AmQN4nXMGCAdYJPCHbeZJqLmBA9beMAPtMcUVLqpYVsiAzVPTrt7qB13",
  "key28": "m2ExXgxJLCN2GN6DVndYMW9L3rVCKKePq9PsdYhG1dndqpWh8Gfc238PZPUaZzupECa6sVwDu4NvDvkhoXENRCF",
  "key29": "5mwysY8ZNuXNaVEsyAhG73VLV8yv8tj7EEUgofpzBZbyHWZkHn5qJJKuP2A87wFtAWk3HwZzbYz9WazjTwk6wGBu"
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
