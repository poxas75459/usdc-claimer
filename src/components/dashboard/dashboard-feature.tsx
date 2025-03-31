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
    "5tEvAwX1CnKhK2ocSQLYwoTpLVZ7nzEXfMSkFKGMccCVgL1eBND5fCEeseJiAqRJaLpUAci9yUfLvQe9qCRKwSH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zuo4W5vjhKwDxemTejSGVELn5oswXxEcT8owycJCisHNJ4YpVvMF4LY2gLSdYkJuAG3orPPf93pzgnJwdsSUKV9",
  "key1": "3DQDeExJpypehuBC2URfE9QJQ7qUNsze2LQxQ33y8TBD4wi3X2NLD41xRdsAwJb8aiS2561uWLY8TFMty6eJApJz",
  "key2": "51AZtnVbizdMGWaLJuvb6Deq27dSf7NfUzKhcTmXrrHJ52hynJXYj2r7JSWmEYaE77KXzWNRzZhSqCBqSRLNaQmh",
  "key3": "sshMGQPgJQ2LLW5ZG9zBYoQCkN9qZmzUcP3quu5FWo3ETDYM5yVBZzwTCwTtGBgAzcJ9ba9BWWbycRXk65pEsXH",
  "key4": "2fD86wyzCeQciSxs3Buotf6DwksXnRsCoEMsZ9NtSr99yAcs6XUYTfjjUNukc7XccDLjtpFnTnYVK73q1UpLgLse",
  "key5": "24VFBTZMggQVsmndaXQcQYQC45j1v3rmqE7bajeCwzXMhtWSu8w9nPpQ8MnHH3E9PEa7aYEmvWYH4KZV8Uf9iqdu",
  "key6": "65YXZxbo9RPopJonXm8cLZWcDZLhE6Ks848B5mD1Wnk46ha74BJWdzKx2fPHA6cirf2TDdD6k4oY6Cz7Lfsa5QCf",
  "key7": "4hgGvej6rWaBrDmv62u9gXQZrL1othQHJWNnbHkZpsBbekEBuXmEXGjpFP4XE9uLdsN4WXvRFy3rNro6YLqFuYBA",
  "key8": "g7EGjyTswstK9iCcBmQ8F7bj8ZgyueEx32YainauJLpJeL4Ay6krM2qxNRxy3az9kH1fN6GUvi4Tei1QZZJH5MR",
  "key9": "cSMYZtvXqNFXZaDC5VWrPgXJzfmYwdFYL7rgySCRoC6zfsyURixN9vmotD8LwKxjmPbGTTSoPDHRgaiK22VvkjR",
  "key10": "4icPtH1w9JgK3JVZEe7k8hiwoGizab8BeVMcm45bGC5Ksz5NSu6gHox1W6K7DrCajmSotyCysKfDd7wDCwS2Lq7u",
  "key11": "53Gp3L3CsTRUpAHDSo3TYeY8gn7GSjnqKL7kghPKAzQthSyrG7HBXTj9X8hoDoroDKGGZ3Uq5BKfqhdYZZCMJ1Jq",
  "key12": "4cvJFZezThaaZjNLpia2PZqrkcTcU2rLhkkhf2GhvM3dVs144sARS861jor3wRsbXdgK34W4Vdx8uFuVNeBFN55Y",
  "key13": "5YDnYK6QbKA3AxMU72ZV9aYKVZBruG8LBUCPUbsGwKM6mMBpv9JVo1CZSGEvu4Uem2YhGGCbzh6kzLFnvWZrRHxs",
  "key14": "4rZt4ArrMHz7jvbE9tPftjCYEVAErh3rhGT3Fat8bHyv4cEwZsTb4phvYym4mYsFLyBNjNtfVG7nT5mDExiAonSa",
  "key15": "4wLa6u9EVE4iAYSVfn5HRL43FrC7An9nW2bvaPXJdf1Ndw8jGPzmkVQZrKRFUVkKt2s7PCAyGJkQtvbVmGYJwVcb",
  "key16": "3sQ74a12H7wnKa48KXL1HDCr5DQoowCsR7AMRyPDPhVKyEU1aZisu7kTw179f13CgY5vpJcqYKDUipN2uB5WMnz8",
  "key17": "5oVUQhAdzLrPUv975h4PixHek8PokFRXuhZc6x5cuohF29c3ATvKGhGMAEwKp7bJcJ3hJ9uRbN9SSxZ7EisqfnKB",
  "key18": "pfLoDjEcuL4vvR55fs9pAGDvfUUC54N3868BuHYF3AsGZCJZp7VqxWKpvSBVL1rE3FghZyWfrFPwoWK1gQKrJpq",
  "key19": "2mAjdDcfBd8urELinLjRLYrpN2zuBv39hPdhrnRGRUXDww5vyfLVjWtkneCTYQioGPxqGAtwS3Jj1DDc22t7AYAg",
  "key20": "3XrNqrsFFwBR2hmy1o72M1Y4YpUGSMLsg6p3qt3dcf2pPtohjQegn3RAbLNiBz18jXHtrJFFp9HnJiAodiUi6fzD",
  "key21": "44fgHvB94nnYRHJfHzARD2bR9QeL7jKkfAepSEe3dmPeicud6LsS6EG6rCnwZT3Z2FR74mVCzM8FhMF1JUw8EUyW",
  "key22": "3JoVPoCymXNpBLePAQX32QgpbhAf6im6F4Wxg4S3NdKrhEkg1emyXQegSbrpWC4dhDavL7xb7XhQyhRykpxycYSq",
  "key23": "4Lhz6gJUhSqW4b2Sjw6JZBcS3FpV2gCuVp4MnE6QEXMeZ9iE71pAacH1S2gRxr32R1rrATiRZBoxy9TP1gxLaXHE",
  "key24": "5puPgW3z6nP5dCtPb1H8w91kvLgm215vrt7oZgjkYnX6u2JPgtW4rTt2ka1ecBAyEnUnT47AihNNEZXvUGDu2wDi",
  "key25": "3RP9SzMFRWxPvfmRjS6ZNbptb1H3z6DHDYf6TaHR5tSGYrAsuzDSG1RGTVA8N6UmaBkQN6ztkkzmvnXZgrhChQZi",
  "key26": "UVrM5EMkmqHVvZsZLeST96CLsYturqYuxa5c8zpCR8TdvyKEzjZ2W7pVsP9qRMXfdEfXehiL68C8YarED3L9rsx",
  "key27": "5fuKG9yCW152nBTWwdKHph5eV6hYMT2BoZvdCxrgNLpKBaiiKNc233YVfZg1jKHsQUTYmgz4EPF6oUb7md7BkjHT",
  "key28": "4TEq1jtRMfncfmmSpqa3PyWDzyXfgYHKYgjcx3xvjnVr8TZ9xeYTETRDsKdoagDiZGoYHmPrueGpyUWP2d6F3vXw"
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
