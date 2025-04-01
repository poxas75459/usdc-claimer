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
    "jx2obxGtUymvssBuYTX52zPcumUTDbEfJHFB3NvWAKfmb3JqxCSK7VWMTGekVqaUMV5mteawozjhuBW7coYedDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hVURxe5Q2BwqZrKdwCv5tJtNboa733vEJ9eYoL8J4FonNGaRHHkozP5r7QabMv9rDXQfkWjQs61t8GDwARzknDn",
  "key1": "663BoGm4382DRwZBApPZ6jK36C6Lp3MJdyrQQYSMozzTgdLhHqMibnX4TUtMq5thW448NQkBpxYkqtBSLbxDmwkN",
  "key2": "59JdxL55f4guirovi35w1gjY1AuZpVpcJjjXafBvFFBh6w8iRt2qwZtAn4petjUnxYwsJGNdtzJF7iYY9K2Rc5EN",
  "key3": "34NDokhrgA9pvdoxEGYzpHzhR8QoiRZNGJLtGD6XfuYncwDotWP5R5MrWguNAAhR87GzndjxGDZS8XHTprfXpJ8Z",
  "key4": "5Fk7ousbAYJbBByAf5Y9iVFHEfnaFHFsTCKuZwms23wfwZrDRDw6VFJ9cshpbgxZ29PoSzRnirttAwu3CVvNGgLg",
  "key5": "2Dd72Z5uJ9sBwT7c76j4F9ErkUvJCN6E2FBYKF9deMjyiWz6vheNU9Up1LySVmHfjBNDEaBQaPRk6RGt2t2Kq5L6",
  "key6": "4sz56F9fggL1TN24bSxgJYq4vUwSrR6EMx2ZgEvyTn3huKDR8CYA7atb7zs3qzwDeG6N8WSYviwxVdckc67p18aA",
  "key7": "5iJSEizEnY5xSRZUMPjTesf7nFYrttBGZpwGuF6G4U7JzZZALU8wjQzeXsDraYdwBwkB9q4S7gEwAVQtxvuDGP46",
  "key8": "46mEDw9vMDXm5c7gonjUw7W22VsWHTz2WaAUfKjDM6rmKj8sH7cMjL8SojA9rKZnDLvWCsusvbFCHC3UFMo3Shgk",
  "key9": "2Pmvqeci3ZCeSZzBev2bJTG4WwscpFf7mDJk15ro3K8xj9EGTNRZT1jduuEby96pZWupAHrFrFPjJw7MQpHkZE9H",
  "key10": "63hfiBMAKrnMtZLnJEK6KVCSmX9fmeQJkmLN2ZgYhE1Ab9h6oHm6V79ScTBxmcNhuHYHGoH2KWK7jjziLQJy2BPs",
  "key11": "gdrndMwhQ2kty1C19eaeFxT8BLRPa1k9CBjL5QmLzKAed6EaYxyQ8sD7gmpBAd2XWYavYmtcnaoEeM9kzV3iTH4",
  "key12": "3j5AmWTnFnrv7y5DVsEfxVZV9jKKUhgmQqfZxMoEurNwsGPNqcGGwHNpnABfsEtYTLKMCsCm6q9WD27qz9JniqCj",
  "key13": "67QPafkXizax2h52rYf3dScgMPjhADs1EQuUMXDDZ28V8X187bxGToNZyBtbrLgFd6cvJDxqLp3sNAHBofv9AWA8",
  "key14": "2C3dHmk92YfqsJbz6ijwrmVZJnjdoBpVDSmJMnVgEf5vdwZt2wD65dLwddTGEP2rWygEi8AdoGkypmSQCM9nEDRB",
  "key15": "a141tbgeRT9ytsc4VaDJiBn4kV7bM8rzxKUgQoq9cScV3YhjoCNNkMeQYJnBVwiDXQpAtkHEUU4cYPLEwHPVTgZ",
  "key16": "2VzK6r2C4P96QUxN19A6Q3CMLwqjAaG7cDdatkC9bibzLo6i8KVYXkgSbm7moZ88DYCQw4N74jJbY712FeqGW3mi",
  "key17": "3yTPeT9BCcCFxKCNW2NrpsbNGnKG5Z5nrLY1p376W1D6Jj9AVDDYnntusNkuJM7TbQ19Gk7kxq4WFYQbvK6mTg4j",
  "key18": "3efd31LFPCwCpbyw3hGm8nvdt3fSicRCcv8qRakxCBmTvWLEwkX4mxMevUae6wUMpJWx89gak5pNgv6yeu8Tnk9F",
  "key19": "q29QndoDPTg9WTiCUTVNQn2pv9z6BFYBXds9EfwvcHyKELWxirRfMdYEs653ixviseaWJg9yeViNkB7SQf1PwpE",
  "key20": "bPV7cxLFSkWUHrhzi8TSLYDFn4M2sVuohBk3MsppfHKxiAiEVCGas9VJrzy2L9xwRLx1SsXdkHUGn1uUrxNRQP1",
  "key21": "2bWN18oXnTfUjp7NKTntjU4yb7oWC6iu5jTYCm18XgQW1gLoiRKV4Gq2W8HzNKKCjTq9osK1XoYRuaj5XBSSWEfB",
  "key22": "Nw1qTT4CEvv69myUiKursn6ZeZ1YQyyW6fau4foWhnTYXUhgDMbhfm9JTkCmh3z4V2xHZKbHCfPLS8r8Q85dPXA",
  "key23": "3VeNVxGYZZNNA1ojt9kuhohbfVnYJTGxDqnRwhLZnR1guuY4LWc7LH9d1z5L9Pm5T8TsAMQfyyZAgJoFLGipM6n6",
  "key24": "28pJYQaEN6UnvhNB7326jwdmBNLjEh6ZS4Ljdywv9FKPnHAd3h2XDJXqtLY9i7RFgcqeqJg9omPDMw8dthM32Hta",
  "key25": "37ahZEsABJNfSGhiF78vDCBqXnBS8njQX4A2CniG59DGF8AdhsLJmo2UN5eChD6XtjWqdmT6LRiFYDJc8m7UhpVD",
  "key26": "3jw2BsCLLgepoEVFKCsTUG4Qafa9nLzugvDviNEstSEoqZUsVfuW6TRDZy5AWLiTtr5u7hfWNsbZ17vVNjHNNZiK",
  "key27": "4kG7X7XNXQxCw8TpjNkkwyyRuVwdrmXSR4vbTw5SWMCthJqZew5Qaz9oHhZxDSrzkSBeVLwj4RYkj2Tk4L2MiEk3",
  "key28": "3P9KNM7BRzA2xMx5W2ndLAnDQTwTddQWD4jWfuUGq175WUqfGTqixXJGNinBPa5K3KXKoiBPWDbLnec3nQULV2hN",
  "key29": "5aUudAeEqZGDoSkdqiWZvHrCSeoFM9QB2bZBDLSaz1CR4tvzLCQymKN3z6kkV1evBaBm6jKRCbKhq6VMcSrfYHrz",
  "key30": "Azu43wdEffbfZXP3N29ZjRVrHtw8zpYBpAKwSvCUv25JtxGvzB3QqyTanfwRXVAtWsD3WkfKWtP2BKqAKQKffSA",
  "key31": "4oVRWJZDFCKDUn4VwMFe29e8jGtVXE4rru6BHNN9Gdr8wkLXu89qTUZ4PfUkSEUaqVdYLA9if7XH9fjsYKfvfnE8",
  "key32": "43anxyMkGYCnEgXX4pVJsMnASPhkK43RsPyWCvCZuPF2Td3pHh3q9aLFqfNdGkazNsD5KWFPn9KMa2noK3D7SAsv",
  "key33": "TPLHV7ZuN4UbM19TtUvPivR9DEq22huC74CYVBrBZbztwP4GQsVD19zfVHNX7kg2fLhGetsV9aRdDq5ssUf4y6n",
  "key34": "2YHCs4dtBi9kbTBHVXhznMUauUycwRUN1hNZhrNtmwux8pus7PmcAj1Kkwhpf23Xqa46tdJY6YfGa89pSbCwiarR",
  "key35": "3vy6uSJ3dVkPzE7H7jxY6Q4xzYRXJJr3dZwGmtV5uvDKXJz12m5jeDPm9uf8z3CiJ7nWXFbFdw5yUnqXRyxDy8Ht",
  "key36": "8oEW3bRzJTaQFdn3be8S7zzVAsNPL1XND5j14ux7PCSMRmE7P3G5wQVqcPWf1fmumDE3zcnfeve2dzEnf19xer7",
  "key37": "31uLZS9gR1dQAf9T3dew3UJQuA3rqpWZFSoo36qmzVwGJ1eWVZHCZ9o6JfPVFwLw3aTvBEtKHwiUKh6MY45d7qLP",
  "key38": "EXfe19jsrSQvjqpgWP84M15a6tbcU78z1z68jgoBGZBjoxWL5cqHR62mennNEBBsfQSKhncK287Md47gHa9jQLg"
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
