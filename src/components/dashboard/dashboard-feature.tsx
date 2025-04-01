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
    "4H1dkADy7HCFiJFWubXPzYjZhPKVJkBBTy384MPqaM69iyUYiZXGS3YJE4WmGu6rSigV5j5w7DbkHgNjQg63NNHr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xQLQxAUXroiKBfcd957zeRUp79brJ56YnQa8daBSx1443gQJkGqhfLFV1yo9kETSyHDjXhjmkauWXmVQE2cvXCu",
  "key1": "3dTUk2BF8zHGZjSMP3owGmKwRW52RbUkTXZSV4NqNfBXXTJDTnD1noNRW1xHrL38K2ucQiEVQWNHTFcEgrfDzGFK",
  "key2": "zQvBkBHKoa964oiUrZRqYpo7BGUyS9vMdszpzT2VZDwC8H4PfT7K2LSHELX2xZQroZ7Zie9YwrDsCVk3VyKSAe5",
  "key3": "ncnPQsfJ1hJ7n1bgsDQXd5BSMj48t5RcrAhsVxSqqC4UmrDF95P8tEHkB4jzcQQ1cyp1cPhHbYkwQZRMioVMLwb",
  "key4": "vMoXoJjz82n9tPSdS5c4q8tokywq6z7TqHSxowksMDxk7bn9g8ULrHnhcMf2REY6JWboq6qwe6KavpRbG1MMH51",
  "key5": "5qnSjQpGKLHN1FtELre2x8gJLHW35a6aTHeQpSRDf2BoDbkhA1JZCFizBGekT32Yp6H3ZUHnNm5DF9ht1xhk54t6",
  "key6": "5eAXztY6d7oyxRpy3pUyR4X2MV7BVvKaPaV7mptPRRgkbFXJPY8MJaMzGS7hfyq5Rt9zDRY5yVRCwHcGenFJxSsF",
  "key7": "3TRSCt2XCBqVMMYprmvXnJ92kuKgyamavd6SJWDgCjVkTPnALShRSY1XduAzVfZQtfi4ixhDQyThQ7pUqqkS5GTt",
  "key8": "4zZ7rvpfd4KCoYA8PoFZNcuUmP3wH3bYGMQDBrjt9QDcvFhHdVoXf3vYYDv2VMoce6ZKoxTCViFRVwHXptXWK5Uy",
  "key9": "54RJNR1GNpDEh7VzaBFNPiCgF8SeMpZ1sib4NN6Qb3bFt53aVky9DFthCtjmeEdAZegnVHWu4XoKx7NiXd5J1FB2",
  "key10": "596sjHLYJo2QKwgpQxoQZLNUgAfqhCVbD1uhPGjheXcPUMpm5MSeJMpiYK2dqfgQt2xodRqfHidJvXJxmKbfumqV",
  "key11": "rxiEB618Cg7XA7eA1FYqW5J8SRbKmumrwTt7KoU2ajV9GXmuiruccZ1S4m8wUNiYUjDirrZpwEXZU9y3NV96eQR",
  "key12": "5CN9y2sAYAUf7mU22VNZ6cDhEN7VeeUiESa3La2aRvBNG69B9Kd39c3Tr2C9fx6QKJSigesmq4Nr3pHbhCPMAeKh",
  "key13": "4wTRKKMvpNV4dwdNVecQzE1Jvpr33xrTVg4FJs9dTQPDaewniti2SS16mEJLodtrbXJKxnjWoaXcb9mic5YvjqCr",
  "key14": "39DnxHKCLKUSpvxrUWFcLSzX143Jk4qWSPH1Zardu3wr3khVhvwKrz4yoBxojZXPJJehgq1ido14ewfWb5j8EyBs",
  "key15": "2JKWLJ5NLDwcbhAbrSp7DM3VUgNkUjA3xLMP7kWr41qPzncj8MGue9ckrbGDo6EiPw1T5USMt92embHP3vgir5qq",
  "key16": "2Bc4DZRDpkppSYisFgtZfoxiTTjyQNMR28GqCwVtCh7rGXHAVNQWsmkhqo8MuvMddQBEsh2jEkZgmEP9v8x7wFXb",
  "key17": "667KwufGDtBW55fVWefEiMMvEj2nZR3RDJLazqQoncPQRo2MptERve7KHyqJdJJGWTdeUNhatxJStDttcKjf3Rgb",
  "key18": "3kVB1NUo6L3mA5Rks1sjNyb1PSTc2GjN6VutAXNGUMj4NwTW9BV9Ky9KaP9TnhFWYupsGYdtRd1e25GG5PktWkZc",
  "key19": "5t6WNo4LfyJHdSr4BGoP8muzA29ZkoK6nQzTVCFWzZP2s6bvfyD3264yaxncjUkFNJKWWGrdDT775ijbLPrZ8VQP",
  "key20": "PhkQojzsNGCmbnRw5ykiZsM53SqUhBc5V1G51wSzzZmmw7yZHNnoicrz4bFZY3DPEpY9HXZHVJEMshvcGqwDyRP",
  "key21": "JWrKiSzBD7ubGWMufDeNtM2TaoUSafndXxKi2dCLoRgdPnu3AiTEPHT3zjQxzL7sMy8q5aQ4pQ9B7PZcKMEVaRZ",
  "key22": "5AHb5XdARPT91LsvMCwa8UwJM4MLZAUVVtMe6wYHfAuB9HFRrui12otLcKpA8pQP5q92nSGPRi4BouBcfXYQMjiU",
  "key23": "5wraf8nR4y5Xes3hsV5pQbgYVKCYio17xm8WKAqi14HARakVFX1Vt3cqc5cqFys3eRZXBPB3JrRyZ26QjwRuR4NR",
  "key24": "5UvAtp2iF591qEuX6S7fW8LHCAw8mLg5wscshdRTP3ZcraENBYzAb7pNCDU7nYPcMQa8wDaQDWgY6iAejr6icaT8",
  "key25": "4qUkj6eJqLq3vkCDWzPfUVvNZKz15abs52tUpkMsumrLdgekzie8fJxD3Mt5zcgnwBfJVszxvUrCjAh4QsVofjH6",
  "key26": "2bEv57eXftbfjhR8keCugx4dY3tU8XkxVyFpSxtoXpUcPJ4UvUqjxKrMYmkbf936bEHnA8FxkH8tr5DVvr2C7Asy",
  "key27": "35Ti2sZGRs97jzWTNYwzyKkg9MTXyNPBajKGuA5qhVDi1rZPrZWCRPx2sR82WB9EsivjnVjFHGckjV3JoYNxUS1q",
  "key28": "3KhiWr9vkQgkvM69fk1qZX21gZSoDR3EcsVGHXq1PghvuPTfk3YxupYrRQpDZKMRh6gyxYpzSuvQi4V45TWwcxTD",
  "key29": "4adT75udeoFooWbaMmxVAyaa82sc6S831hKDrkuSRSrav3v2tRRmfYi4kUS8xP3aoLZxApn1T5sb854dVPsJoFvy"
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
