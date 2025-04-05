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
    "2SvUpkUNDkV2HfU9WsSTYae63uA4WhvajbZhEgobEimJZdDGuERFayZkHgisPkh6SSUbNAZDu5y7NXgk4oZNuPg9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M6dSoKmijYtMdkaC5yKyZTDHWrQPMxJPMUhnDkPDoGSih9qvqT85oeFf9wAB5z1pqXWGxnG9PVutqE7tT12g6e",
  "key1": "23Ybnej7W1i8bKSw6aFi54Vk52p4sfBXwkP37VxwNUc3VohxAXaAgrJuKpMLRkeFgyzk2JdGUqrhKJJ3Q1nR3oX8",
  "key2": "65mQHhef6A5b9MNdJD5C2maE7f9uLREkcQMVvYH32B5TLEMPG9hRAMk6KqSp1Hh7dejiSzaLEXxiZDdyTsCFu5Mp",
  "key3": "4Q7SxzKp7DUgDjGtSYrxY5Yh8ruk1YN11dpE68eFM6jqFz8Mbyv5tZVD2ybhJvFeL4G7kCJGT74ZhZdryUu1e8ZB",
  "key4": "62PDJ28pDohLXPLXZDynkZzX2y49jAXFCHbPo4a8jDrjyS7PJ4QGNrpiY9jr4x5GE4Py8SLr1xSBtLyWJLzozFom",
  "key5": "4AzFe5mEusR7jJWg2Zb7qjh7sZ2x1ehHyPvWAyguU9fcQTjFHuqWMcQwPTJZC7x62QEBMQ7JTbZntxF7umaJZPb3",
  "key6": "64WEtqR5FsLdrRhzkwDhRMswMwBwzj2qzHZrHBJiNPd7HevHRzPotR4Bt46qSmrekyqKMRz5ir1L65kmTDGjf7Sp",
  "key7": "oqZvooiFkBAHnGuZxwSL44j3M46x6v4CyjdqF5PpG171vbqxM1icz2LTHKvSrKqM7azEfu29WE3cjcCsQQwvbSy",
  "key8": "Jna62yDHzwNn1uSoNGyUF6qWUbX4LFC3PGUS42jTn1SEmN82wARE8QJBr18mkXCwktf6LSvW36JZBWWbUzjejPM",
  "key9": "aP5fYgUkGMu91bcZLarhYp4BCHJzBCBTtCpTTaxNmgT6qAbwrATvY6bRLZK4SYVzoB9CLM3mnh1j2VwbVqPM5ZV",
  "key10": "frauAUJGxu787tVQEhX2JWL4cNmht38DQWqt7QxQhqEjLeeJxWtLZAZGF6uYEMQU4LY7r9DGFAoozovR45T6KNM",
  "key11": "5WEETPuuGnTTmwdhQF6h6Mz3Ky4jQPaKFJqtkUZntaRqcXiQ7J4QRTPkhz9FX67Q7ZceH4wcZ8gCLZu9U1bJ2sFR",
  "key12": "49zeeyPDPv9SAxfRNM2riLsz1ee1B6yGysoyehdFzbGB97ge2Nw9HiFQF9rawHoAbK62emC7Hs3WbxSaks8zaUx7",
  "key13": "QBNyPPYDN8uC5kHpCyDAzVUZkPtUQ8H3JwUBmZ1NNikRuRNwD2TESZMF9w6BsdbQjTfaqU75AKkKtDniTPHopsE",
  "key14": "2MnoKkTsfztPF8R5Wvp8Q2AJfDCVRuCQ9cw3pKHCVfQwTUegVaHEuCEJiUeCoKGtbZWP9DDToZEGXNRnxiBa8scZ",
  "key15": "XtxHXeXy9YD7zQZEsFaQG8ibguFuhhTvBgrudM5CxtKdyVk5rUvFBbxGpwvaYBdvhxmPnZmRA9MQkfPXGRQuMtQ",
  "key16": "3qF4CpifFxQe2RWQAf4T293NzaxkiiPtRxsW7pzp3n4kjjBnw6PuDQDMHToBeFYdNEVYqEJshfZ29mgM4PcmwEji",
  "key17": "4iKh5TckA16J4njN97RUCUsHDAnGBfQ9KtxzAwwthnEMdN2zSt6jRt6R8vVzaZ2ceLUZ3nK7BCWZmDSsuhWPAoCD",
  "key18": "5aNt5Q9ZJfJaPLwerJEG2hTV12ziRN8FvzvkLfVxBZXwwA6UoQAawwphYYFvoZWyyTpyMkTnnXUym3pYeHMcgGFH",
  "key19": "42EEpH3KeABa97BYJ9zQae9ECbhXDgFFxfkGsa4FpPCWnPZ9erU77J8PSK6Qv1J47HrTHLjoGNA1sKCEqTXDedxJ",
  "key20": "2Fjmqm5Vye3WE1rqdhg3jKadmAJpVpiSEhD43TZhQaVefqLqDjj8Yc7ZEgzARkdS5ZGzGbEMNSVQida81UrFfZf7",
  "key21": "iZ7rc6VzkmAPSbsyST1VCkwzEWWvNN4NpP6Eynhk74Ft566w2zETtKgwJz54GHMb63PE8AyMQi2gZPWVsAke9b7",
  "key22": "3DQb2vWQ4kFEDB3JwqtbypXjG6RfUpD3xXBsKSoyokEJJmfnWdjLmWp8BYx28WUQwid9gXNCqntawGerr8ZxpVbe",
  "key23": "E6tWMrQYrd25UTB8KehZifA4Qw5rYPwUhJakSc7KNcezin9rPb8ctR8i6CRaLtF2Stmod3RVrSrrtteeF5m8JHb",
  "key24": "2tPj4BDFC3o6K5ycz3jRsS3bVXgUTnpX5Ukc1GZmgbiYJisMapQ4Pc6ZruGyHz53XQ6Fh535q21gHENHAk3Tpy8W",
  "key25": "FUZhErky3emNccYvVjPcc2bBu7C8k6txN1vLJ5TktcNYFiaSPaEqUr9FV4cG9EJmdyCVr2riA8jEbrfmud4mVBY",
  "key26": "3MQoNiVgJAH3JUJiQ21FZddgxTL1XLEgpY9VuZ2gsQ3q8fJhKBZq4ZJctRp3ag3RzJaipztnusRCpU83BQfwpBpJ",
  "key27": "4EnuJP5CKb2YGah3g6jhWqUAaxCTWYNxEnX2eBtrH9sqwo8iPjuA3NoP1CNDkfLAoySNqsK6wXJquRR2CWyyR99x",
  "key28": "28LGBQW3Dex37aXprqkwKEz5kJJwxnS8gxHhXbxW4YVBNWMPyjQ8CNuko1b5k1JgKRySidYYPYU52Kms2AdJRdon",
  "key29": "2NhatqsbFsE34rppmmiLSCkx9x9ejvQRc3s6TwaGA8uxHLuALQqheS4VXrURpusdc8mqrbpS6NtGBAJemGkCKKaF",
  "key30": "2BohVhkXj82Yc1GCvAdZDC546eKUP2CSTaUKW9HwRC84hAXRJwJY79JxnQm4Morj1k9xgt84y5ahnH44aopUViJF"
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
