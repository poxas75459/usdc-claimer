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
    "2LbMQhQB4eX972Sx7Xpnq5hcdrHP5bQsdV3jUF1iG5dommw8X5KhGVgAAVC3Fs4gQxjQX2QmT6RAY2FQsKzKS1fS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "STTCd8fYvXWghYaqVn1fgUhwRk3VuFBmPs8haV3RHNjkUDLm2jJdSgeQzTAxtGDbbP1dzEMk3JfbwDuar35hx6X",
  "key1": "3CqaGsbwdPRWtmR8M4vJezDVAUbZEFZv3hZ1ULn3YMHu6TNAKHzw6izUuL876YCFCXvuxGqk88D8MojjJZeZZAAS",
  "key2": "4hQQ8gMhY5HncsPbLaBFkHbcYQC3bhFnC9T44ENCrh1UwDecnLzRAmCd4x51j7m8cHCkz7JJ2RSaQC6BqvkZ3gNr",
  "key3": "wZfkPXZfAPewotkgMPNrqsFx3kTZtQRWdg96tguUSRgDwbJBQ5gUSx77xJnkVcdemmXfs93Y6aqRpXn8GsT9iks",
  "key4": "5YchW3dGmtgABXZ4yPn3Z3uMQ4rqbtutJVnE1AwM9gSgyP8o4EGqZWRUHtxTm7pm483EtTEKpttMbGd1P9zjkJJ3",
  "key5": "4YSRU8wifMCnPXPJZKMAxMAcY8QnjXW7XCoJu7gkwjV2LCXKDcdJYUsqYECK2hTcasfUaXo8qDJgmMYH7w4mR1aM",
  "key6": "41pZzgHaAxuFKmW7Wx3KCi6YMJ35CgEG2vUdUt8N6Fz1xwSbC7tJTpvdanfWPNEmPPZ4tVaF6FNK697LdQfsKMhm",
  "key7": "5rSrwkM2knEDsdaV88YnVotLZgAhkLMdhHusVxQKTWxj9TkFkpTzTvfpFnBJWfKNGg2HKT1cktP6dFk9sYCB95u8",
  "key8": "5psVe33CpUBWRcApTiUVEMTDY5zeHgQ3qBCimwgS3pE8NPDjMDRDnQfMLH7LCFQVU2659gJZhVA25RB3xaUfpt3Z",
  "key9": "2qF4TfeHiL3ewLacriDc3fGkLzaFvqUS6La5V5X8Bk9JqEgqmb6dTULZFqK7tV3qhDMhNfnYriQ4zCBrfqimhrJL",
  "key10": "4JLNrXujGa6rY5eaRrKXqcvrEQ1xzEG3CvCtN1auL9xqt4Dv63PX2tYg2uhx5iASU5Rg5eGhuHCoi6Xwy23Lu3u6",
  "key11": "4n1shqr63VfBiidSYPePyQWJgzZkcWwWitz7fdddkDxDimsN6weTqassjAk5HfRWr1ENkqvUF783EHFa7C2Udq95",
  "key12": "5iee97hhBWXjCLJAPyDSfjBYCYe4gRkVay9znLaFn95e8coo36NeZ9TCvaGdn3rmAEe8D9qnc8B4afGhBipBKKgY",
  "key13": "5wJEVPkvN7LzmBhCQJ2aoTV6ekYRmNQJSaGog2cNM8uytwXHzngrEYQY9L7kNkjcDLV1H6RCiXWpCxpnFPR2QGh5",
  "key14": "ibowrLca3DTLBKm4y7JVUy3FSU3FF7Xp4HLzN32EpatJYyeAAvcLQjf7Pa3JsCar4wcvpT5H9Huja99rfx8phNy",
  "key15": "5gXpjK34WfP5rDvxrMYXBntpARncuwkeMJ53YDtbgaeYzrdg1yuKUb7SKpUnGfTQuv5mmhYGNowim5vySnF8ePGi",
  "key16": "67bJa1tLdcZqpArau2C8cK63CBckGhPzdXJYKPPYhcjJwTB1NXRDekv7qgDKpXNd4v83SMTyV3fUMJhwVnvrmEfB",
  "key17": "4Lzi3reYDnSFGfvxRHvHcYgpwnsWHHgF2No4DEwYi5HsqEob4xCb6fmApJACR21pbBMmswVFJwAQU4Smcg7bijcN",
  "key18": "4Wn53SsmBzt77VwkMZYxV9PvNKaT7LFmbynMsiZpTqdu7rDr2szyCtZDxezXQFkrdvVXiBYdrTwrKvX9q9oUTGgg",
  "key19": "3XidtCBhM9jN1v2frq33Z3qL9P3ADrV191YVzNKvijPZjag8mAWGxtHPjg8nNUoZEYLhtPESXuDTErxUWfxCxSx2",
  "key20": "3VcZy2akVqohCha9rEEa8Wdp4qb9bMNZPBiKfeYx1Cq7Hs4PwUUfkCMaUQ9FPBFRMnNL3ECMc8UmVcMDauQKPme9",
  "key21": "NtcmKBVfwvPNywB55uQUoX8C5CwEcypo2w5oi7VKxJBra9iY8r1jQYEn2ThPUaTKmgS9HrLZFD7kzt3Y9hwavm1",
  "key22": "2NyYXw8whC3X7qcKA2TfnXTQbqo4zndBjdTe4BdtaYBWo6Nq5wadsT4GZ28GcKxoPYGXbCec9o8FmenwTCoQysUZ",
  "key23": "2HTsiLtwSetb9HUToRxWtX2prwCUCS1BvwD4jAgavmTi5vnmZAm8LvkpTHky2RGNv2CK43XeaDkiYHnQz5CS2xD2",
  "key24": "5QwbygQPF2XL5jtJotiEj1pApEpQAfedQsL71fCFRogPFSh7yJGV7byqkCtSKm5MxJqAbz36bFVoGdeM6WGzG7XB",
  "key25": "2ryFfsarAH3xgpHi6Xk8XfLmT1pWS7NTVBxc95QPWf6msars6qmTdfctoZKg4BxUg3iQGqQaEVaeCviTKYZiL7yV",
  "key26": "5FPNYLVixPvb5jfupoQr6KkafR46huAvnSgbjMcvWhV1HXSG9XDaqM3KGPFqs8zLakvTd1zSkwXYdrfrmNCHkvFy",
  "key27": "25zkKs8K2mVsbCp1h3KFVdMCfguXAGTyj1f3weN83hoEX1TfrgwfGhhN3kysE8rjmSgeq71B6TBo8q9x8aFcycFY",
  "key28": "2ifBbWM7te29pwqqT1hC4611nHHpRQhB3kbN84rwoYMYsvMZpk69dsRSgUe82YhVNdLYvSQcFXuxENdqu9vYLniU",
  "key29": "4byfXh2YB3sBdGF2JCwXpgGohub8SJxuwMBBkpeVauNecg7AGjrd7d24rJgBNsQ2iqUmJB2moxmsSJ96XHth3om5",
  "key30": "4ye3AkpMhAX2ar5u6T4sYzPx5pNgZNmFUN52WyEqnMcWdbGiZERrKESbRYNtn5wGBb6nZnRL5bo4xStKDpB1aNyu",
  "key31": "3xUqT9vihC9fYcTG1tN5ESsVjUxwBqPMuqcZCPZmTWmGwaQWPGJCTXNXdtrXpM8vCxaCUUipNBBUrAxEgN71Uv8B",
  "key32": "5Ltz3BqSE6S5XiRX9H7vKKu1ivwic5jEXcufu8RUgiL7CzoM9W2Wg7uggTJkWWU4CWfY21SxA6Y8HZRhzKHp5Bc"
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
