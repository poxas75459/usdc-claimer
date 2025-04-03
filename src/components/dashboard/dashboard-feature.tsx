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
    "4RLkgx7dCqyKQGc6arydbPbnuQP7efWLfPpwhKjCVixrAPM9XXCbHS8ign3Nh9bVx4FTAcbnRBiwQAUDudeduBPy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ioj1zkHGMuoMDeTzQarpNQDtXq3Q7vKqvEnfcDQUqocXQBiMfJD2v2i9CNToP8Q4W4WSAHtSJS3HASBKLXbkWs",
  "key1": "36s1rDTwjin5ircTL4qxuSmyexLkxeDZ7SfT4oNM4KYMMiWUGFUTVW7BAcKdp331gXK9ssR3bdqjstCvZzyu68rX",
  "key2": "4LEktWtZr1WhqeHLa1MeRd9nu4GSueiJBfFQcav473jfWonBRvkX4WSMmkNbr666BuUxdDxBLyh4W6nHzNW5yw6f",
  "key3": "61Y2RDdMFxpW5xTf3g7SoBH5vMJh6GdB5weABsyS7tGk3HkGDozE4NYquwqJRXHdiJtoPrJrdPvZwAkjAdg1rRgN",
  "key4": "5UZZMUoxtbEv3TFam9ppHkvcUWCUmUEJreLM394QaeU6FdNzL9Y9421KUxXUH6Rm8KACSEc8sqFe7ohxsjqsPRXM",
  "key5": "2sxBvCTb6W9AquvdWcRCFAjWSMo5YssUy5sU6emz9LzJfXVezDjAjQWz91nLt9Qu7TEivNg8Wgo3vKuShTG9FEbP",
  "key6": "4y4z1hu2WwEjqBfhk3oxDRUBN5GwdkaNQPFsfeWJkmdzBNgwGZK8iHSDVbZpSMvDpiDxEoLosgytocuxBZiSQkmo",
  "key7": "4JxAggTZoxr4i9a7kURpsGqNyrLxqnb2YjjU2LukRXcME9RhPLcVyZk2HG886AKD3PZQ7CUB6rgaNPCm6xsCTHFV",
  "key8": "594u4zUjXxQPzsgHJmJL1zEdscesjuDgLAVvf2PAPmEdGZNbghmA8eSK9sSQ6x5vCKS6Y6i8YioK2j3a27QW24qx",
  "key9": "3NVwufne2PgJQ3MeReT9w39DKdUB6pFmkQpMHkS5DANcBhJ5qB19N4G3HbyJfkDi4rLbdnU3vxXK6Jp1nAgnWwUU",
  "key10": "48DRPy3K681h6kaRwwQ6fgBJ4bMcjLamfBYJjJdk7csZwNyux7EkGUoYiSAz3Mqcuz3iYfzEwQiFNkp5THscrt6M",
  "key11": "2qpRFhnLMjeuw4hRA8ah4gtzRv8uxy7tnyZJXrx4LaEHArZ7UMXRk5AxXkKMbSaHY85sxmwNu3h39sWTe8BVp5yH",
  "key12": "4mfYeKK6fMa2tbX2dNQXxv9oEcPtwQkx9sDN9UAwing77EM7PLfDyt9wpnbdd5dWwCiwSFasKFzcuFtGqWsiPj3V",
  "key13": "59t3nPj3N9SLS7uzHbh3Qrxxmru1bdsS1LsbR7rP5T43C7twD5KHmKPoVyiTZBcATpDfEHKa1zKg2R23iyjhsPY8",
  "key14": "5pJwqoxx3eDAhGjjesrotoKKvNLdhS7ij8LebsGYUsVRA4RGLyDJuhVoTah8dGGH5qJgAgVSY2xf5pt7KWmpbiiJ",
  "key15": "3Mb9vWjuWryEGCZrqme1YxwY5qtP8PfFHxLjJZuayQMZAvRKQbRpg1WxLXiwfU3JRRkEFgxvkTXGpPUQ2nJ6bobW",
  "key16": "5zeJkDh36pYzVTSfWYYzLa8W1Wv6mFQhszon2ARy3iFDh72JPYNnd9y6Pa6eRSW3RAjpcucrrBBcgyeFZFnoJ89a",
  "key17": "NUwD12DbJkBAivg383s3NMRPEoFTFtPYLvQ31KQNLpM9MNDxCgyBPL6SL94G5Wxw1xsPFskztV85aMsEgk1M4hp",
  "key18": "4UYjYfWkPCfjNvADXTQxZPCUX7xMM6uR8n5Dpyrgzaa95Qur8VbiFbdrzwGxztiZzegVtgKGx54aNY91TVq66HFi",
  "key19": "2PPRFWG2WN4rnK9nTbox5e1Rm9R1oGBr5iHVKQ62orDNYvTv4ff3j4JuBKkYQu5MFYsnWBn8ExzQQWKC23xHCM87",
  "key20": "5MUFbquPKchhN4vuBnobzvWFVTwC4uMjv5CwSqAKcsT2B1QLjjuEq5wg3mLPW3V9a5pMpAqEgiMKVyfAidseBK5L",
  "key21": "eoPdxtwH2fpaLxwE8xvcBVY9Ua9JEfKauSLdwZoG4c9oexX3S5Qn81t9xzM82Gm1wgcKuCntLn31LQGkVFFPn1B",
  "key22": "PeNALP4NWx8xKL8arRQKyjBS4Z7VroTwaPfYfbuEKSKh3QBpP4337PPrYKUqY6u5ZvkSJtR6DnmB9gezgrCTcV8",
  "key23": "5JUQ4zgjaJEnWcwUi728s9hFLC2c77YLyN3XRxC8Mjbvo3Uyc8t7W4yhLr8Bf5JJDMXD1cYzw34bFdEVkkmdvXXP",
  "key24": "3ExNxuwZ9wfAAwAQfLycQoAsas6AoTawaykQWbcaJ6Rq2KvasUAVdXivCZ98o5LszrfkBESMrBWxCFBosfG3oqfC"
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
