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
    "LKvyVAbWKMJoExdAYxXYa1iHZ8adCTpKqwYYobgXjatRS87QSxHr4MzVmUJunxp4Scd1ByYCAa9en6ySyTdYXQV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sSnzSkq41r6eJYA1k5ixqPwG4wfDT4LrwWskhp8irZuHrDnagAU6f6FrzSyfdFUuZctjp3FscuYi3X1ow1HxGMK",
  "key1": "2NrzNya6iV53ftRRaCrrLivRVuvpaGwQKRf7j4kzCQBZHdSwtKEKVzWnZvfs2UMhPsu1yM9mdF4g7zK9GDG4EpaG",
  "key2": "2pzy6aigtGe1qK5iRhvhba1axqUG48rkyGphtckU27XvZzqVAN7ecsmhH3VE4yUcXBxSoT7o15XT9Dw7DHc3WuMw",
  "key3": "3TVxtxMRJrUgvyWym7fpt45U86SF2grhfTugP3FaTVYhR3GKSq3jwqLgDejhLchRGoomjGYEvm2prQjqCTWTcZ3s",
  "key4": "3qcriHowMjFvWcUeAkatHk9RRTVJmbSiUAwR7zuC78KroLdooJNMYu5HkksA7QTnfsN5yZJ7HNUaubdCkB1UqdTd",
  "key5": "52HcagdJ17czyHsXp7YuHt6jacbxUJZ19wvXZnm7pmLs5TT4z4pTr6GH5f8xJRiMTXhtcqvmFseMCoz4Zi8Wa4eH",
  "key6": "3orqRwwu998vFUMi1yGqv98mVafNSjV8QerjNfbdEqMTD2QAbeKi2Tv5c4vsBXFNnNbYvGEaV1rLw1b1dvct25X2",
  "key7": "5scC1RpDr8H2mwyBS1Ku7XWLy8WsZEQyAaMGPc4qgBADBtM8aXZbRWgzZ3nHoUHgtvB1r9MFQhBMJGyYPBR6AwGA",
  "key8": "4F4ushWthTMchdU246g1zWQF8LYWx4AMfx35vpiR8Eei4MdhzZaVnecU4a1CDWztLgNtErcvN4YN7dgkaL86AB56",
  "key9": "3UCJocRkJh5a5ZoqbYkZYkRaV4LbGeq1CQGY3M9jBiUF4HjHQgDEtwP4G28GBTmHXS8Pd6dRQkgEfHZZc8Ri3AKg",
  "key10": "3itmq8ukqsyFgA3nJrZWy7BwYWtdFjG7E5b62c9z81bg3R7F4Txy2itw26isvFuNvr2mEGj3gdtT5jv7wAX5t7mg",
  "key11": "tZsduuqPi4knhuPoQKLaHtoFsCdi3WxcexPuRvXxh5vFiRsDKgsdTX4romcX97MhbGcz6T1zENRMJotuzydSdyx",
  "key12": "4qjDykKW1iTGPB7Fj4ASmDsfAdop9zHkjWWnb96Br1F6ZjTjqZ26R4mRD8yKnitZ64SsmQQm315iTBf2Ak9qJ32U",
  "key13": "3WHZwxnLpjoYSEirQ2Jei7jKDshzQUXjkd8TycqowKwhdGGWs6jVquJd7saU5yXNwCgVp7oqxpspLgsu9j5uads6",
  "key14": "5w1v2bf5NGEnqpfHMY5LzmiEMWrXca56PAgUBxcTojzSp6mqPsErWF9YPyHbtnC2HbZ8AKfvHxgT73NLaM7pmmZD",
  "key15": "2LFPqAuGxY8rm9XrdNba7EjTPJV8tBrhqH6qXhzgvDRtfDgiYz17XKC5GD5FAJNec5qU9aVJaDchfbkKLW1F3Axd",
  "key16": "2X8TgXSoAo9Ur69Z19oBcZkT3ESRmcaTcgUCCurCAd6xa2nEmP4YfM7ddWTN1aZfNrYr7q1axcGyLvZZUqqXTRqa",
  "key17": "5ZwkWadQHgfYDEESTUmoUkMeXgLvfABXcTbTWjGyZishw1Y44n6CxBchywHs7j2TnKdsjcSrJ9pCbNh397wLMZHq",
  "key18": "5m4G17visvLseT5xXYLPW9bucwNerV3hDX7Wxw23Ud4mk2NMj7CdiJDfMLyLuUjDgawZdwGJC1VYJk7hmzQFRG6A",
  "key19": "2mbEF9LM1L7VJmu4sa8Y6K98T7kkSPc5xK3vpQiLEpingzXajKhgVZ7kUBErqazEzqthXU7DgyvSnVkcuYXSSdpu",
  "key20": "3eig6m8LSPjwoGGcEmuzABsrFjubQuiuvkTvLs8PXgMhTh1ShyeT65cUG1rRhmFA2kPDMwsc9AA17mFbd7ujTrGe",
  "key21": "3MQjn35pSmCDrSsRGkz8yA9uqfomyWtXAuLAhAMjqFxdB5sFuYGxAhpT8dVSCZG5AdrhQ4dnirvaRQ8q8fPdXVjq",
  "key22": "4oKq9z6u1Q1o6VDEgMmRMqzyBxTpP6T6QxV7D1G5Bfnc3GcSFWuvKmkfRFYS16WgoXYAy2pRJkNBHSm6jKNxwcCb",
  "key23": "5Z5TT8qnJQg6uRRqngN9kP9ZqVbqgcSCg9YnYQn51MqtpMoM73pj7zbUVJFpPNiS2SiU6RU9NMwQgF6foZx6yW19",
  "key24": "61Zi5DsApKPX8DM1zo4sZr8zx9X8R2E5W2jydDVSyvs1JzkvzkBXygP8SHaGDeAF5cVob5CsZj6tate8xC2E9ftK"
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
