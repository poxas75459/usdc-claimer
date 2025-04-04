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
    "4Q3yNehPtnDihy48eb71VZr1RL64FwhdZJJ2LdrjdmU7yiT92Y9KdNXnoxTKjyD8r83kaJHuvanAqozgQX8gqxSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yhmDpGKBozWUEH83wHzh7qtSgPnW2d7vi7D4fUgFnWfs1RWyjcuubmUhGQkdkJ2QKxUQDXQM6xzP3jPDVLKLFB7",
  "key1": "ZdBEgfkvASnozA4goxJsdDs3uBHzvnh6fP9hgweVPhAy4mmh76SwhtFpFZ4Zu5syVEhX9kkwVNHFgb71FnahpaA",
  "key2": "VUgURcxftJKt3bj17ykUkDPCedCJHg6sgBN7exeyVCbqK6pT4z8jhKxPJmfmnWXBpCaYhjubU9AN9QBxofxRdju",
  "key3": "3a2bMQCJicAs9XB4f8iotjFofquzzt7ha4NmbGcagPZcqUhCrRREeY9mHJyz2M1Vs7sUmgdACuzMoPkTFDnJk6Be",
  "key4": "36uiFyTPzj6wqQHmFqmBGvxN7Vx5uGeFCWK4YheTinv5pL33y1SMrVCkoAB6fc7Qi4NctYTD9yKUSZctpgCaWPn6",
  "key5": "5NbgDNTGRPyZLBy3j8PsVsiwejuoSaeEBrqyM1UF6UP8G9XGzN5c8RFUP8nfuxEnZVEJLJH1y3x5uFthsK6s6VSo",
  "key6": "EFwVpSuKeYR7sTVYJAicH4bsqbQGmpgF77tdnyASBSb5z17Q8rKWTs8WUYBMw8Q6yKo7qXmaiDKVbrgRaPxtngr",
  "key7": "5zfVJTdZXneT32Z8QTMqD2AKuNhKvWatGS6PwKP86RQ5nc7rC5kG3kjv2qo3xdNEpAudRbhZ75xsqd9HjWUb1eGK",
  "key8": "2kqckDzBGTRhxN7h2uXsd15LFZ35uYjc8N3jqSJiQcr9qA7wa2j6kHCUrhqnii1X26hGWjUhCzVueLbJoeesRdVP",
  "key9": "3fzJpQ8jpCPgfD3w5PKcDhRbDBVqs8jcBF4CnRmpGnDydBdQmC2HtPLE1i7VhfTSZoZR3fKGygRfVnkd86YkJxHY",
  "key10": "62WwwZGidmF74uygFuvRtQbDARDu2Zn2FArEun6JSogjD9CUHaA1Q3mkcGyTDEQF5QpRjXEts5XMHFsTG2uGVzkT",
  "key11": "472ipaic1Bp56iqmconmqTGzG7xTiZP3SZqm9oH3d6NZ6oN1mrvWVcL2vtcsrJHVRt7G2eX4RLuAoher4FQesk5i",
  "key12": "2X172deCVeDrAKVyj8SxymC9zRJezxqfELieZho1onKf67onbsZRkNjHQ3HSJKM8kK2qpg9A5VYenRKZn31tqxMi",
  "key13": "36MFsPxJFJD9UPMUQzxYsXicpx4NUuxPvraMaVB9MZtWPwv5ES2q8KH18QMVihoha1cLjjXXDiB41huy2ki6qWsG",
  "key14": "67a22ArxCjkbAMsjcvh5EiXqy4vHUYZAcV4Yc9odCNSxFTZJj8BZfD3nPiVmkvMhGiqANXXrq6wuPfMeD3SDmQ3z",
  "key15": "5yQUk94Cv8DMbtdH81o24v38VoapDZB6J4anBNSyN5PH4KPoUzE7yyRcpBYfc1DBb4XKPguZG7hXxcN1Y262CFpH",
  "key16": "4oCEAe3dxREWXGX9tDXxe4WA3iCoDCTCC2MCiCvXrj4gzWzri7Qg3nM1YBjWoZGv1TchtFYitr1FkENCCqesXCj2",
  "key17": "3qj6FBCgb261ihNrQd2bkKszMFZpejnCDdbpF5SuPoqxGne6T8gtwK33sGFUgvuobybVBh7YzRKBpovXZrvpCZL5",
  "key18": "4u6sK9jKRdqPnupM5rqePbVsWpDvPdPMVu8qhTeGTV5BVcJZ5B9By6zcmsfRp27TJrH9JgjDvjnCzC1c5CXhXZWy",
  "key19": "4hHtu8tExgtYDnus2MBbW3YnNZ7YQdJKGoumAEviMpg6MSdN2jAyPvfowfUYMoqPPkempxLqJqoedbfuwynmEnUY",
  "key20": "54DguvFm41qKqrPe2mhRj8iwh1ri9ZqgXswSTu1HTBsi2d1Qfyvj6czKAcEYhy9Ap32Jsij7RDhawvAQPPk8DwSf",
  "key21": "4fBypL6J7QDbW8D9Uv57DKusVyL9HF4MvKCeni7WcpPPKgSkoVeihNijZePmNk1pSS3b97S7FgMZghQEPhqcQboC",
  "key22": "xVFtaBTMMekHdhZnZbV8Eapm9CTAAU4apHyB3rpx3dnw5pGuDUNGkhrVHjp49unNuTLjCezZAD37bTHtdek72oK",
  "key23": "MnqAK1NgH7Pk3pKptDNS699NYAc7ko4HZUgP7iayz4K3gUAWrre7w1LNe8KPu12ZAh1MkhewFjQ3Wy5w23eEXJJ",
  "key24": "4ANKW1K9nSmKwaWQiv78d69mSxUzNqi1H5p7DtLn7Z6zFLZ62D4E9n88JCjECYbTQW4bMpbnndS1M2Dm6wqkimJC",
  "key25": "453uNS28RGiEtaoxrZgg9w9tg2CNB63JqRUa7gRZ4BPtyT8gMH6NpRa41dJyNW8EBpUSx9udLjSQZMcpTYX7i4MJ",
  "key26": "59KLf7EFwAii61kvPvwN9tjqhnQpKYZdY3GjhD2Vy8zKDs3braLxfGqaDTQFUCskZewW1WmJbeP6Hpb6gfzkqXu1"
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
