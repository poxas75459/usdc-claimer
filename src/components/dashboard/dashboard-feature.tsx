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
    "3PvowbMKkRoqqhQ86SxmrbLSPc4nizH8Wr6wMyVB88nVkn36FJrwJMAcfGMWwesWVkTpi1Jy4vFYCyZrr8HCofXN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kqx5Ux5BJatBznC6v2EbEPAjGK8KumCHCpQs5Paj55QtbS1Xm572Akv7RBFb26h19PTVfeno34CwMBbD4uHLgwi",
  "key1": "4tui7AKkjbbsdomqgcK75Q9KugxE6L2NuCfrhGBEfFkzqNMdTeJkbnLgGWkEXQeNsQ4fqpy8azh8m87qJqwwQXB4",
  "key2": "Q192jF1Z1VuKBZLRKNZKc1MDjXKRXeoRvB6umEzxE1EzAK2E9qta9WCvN6UF6q2BLPKbisuy446S2pPYyegS81f",
  "key3": "27ZD18KkwRQenSp9BpezxprfArPCwScMgHGJEsv4dX5kbgsVD6aeaz6zRr9DWWLXXxasYM94oJAcipcKVpHFNjsA",
  "key4": "5X6EF9sSd2oKfUECot4GqsqHCWXBobj5136vuiDv35TyKHqf38oPKPBRUqZQ7wHuq8q1pyYJ7jrUzbZsxG9To4if",
  "key5": "5pSYkjACL6HBuaJRmGHerkrQK4YYq2zHHSRdECjfUio7xfF47tjUdpjnYk262yiWuWJvRKUgLi37SDbRoFiECbuW",
  "key6": "5WjduQz5gEBAo4zUipTpMVzUpRf5Hrhd6Hh5DLdetUQ2RBgoGX1Hg1K1kHMJV3XLHA12X1QFenYESCH7pEmZX7hm",
  "key7": "5JvARpwt5nyoEhmiXZvPBUkLGDVREackC7q2NLMZFBMohY8HPHYqrHfHSsngDKh66GijtYpFH7y8cG2zcnC73mEL",
  "key8": "3wdLr1BX5fUTbC6LXiXmYj2AcFA892KFd9LkWWYGV3ETMsvWH5ff6mS4ops6cPTAmCipdKCpyfRxPb6ToiEwAhEA",
  "key9": "2CMuWg8V3hawf4GpEeViag3tx5fJz2eMdacZdbcxCvt8PLE4jgqfR1sQJzB8u3rsbABpg5UnCnQq7BfLuirvu4ND",
  "key10": "KuviaPXeFX5MyvQmJLMgnGWtcWMqEckziaD1dxcosPyb7hVrx3BTTj61R7KSbvheP1CCwUQZ35ibRwDMf7hyqeE",
  "key11": "5J8TgwD7iyMtV2C2fsbXiya6qWh4qvWAZLoW69QzH9B9nxKbCw8wBH9TqmPhL4F3ihSW4Ug5vrt5sWCznchpdN1C",
  "key12": "4i5pCz3WCn4LV2vHyKjRDpECPHHH2g3JXNM6dWQTSWRUudot6kAUUXcLS5MjdJXCuJEgLQ63ipfsCQhAJpCdnUKw",
  "key13": "5AH5sUD99qWJYJEEDHhFPt71dJ8NpVaeEvprHWTHaAwD9GEgqXJzJfMd6TT4Xsys78xgznzMusec3t5qqJhAwrWs",
  "key14": "DHBzsYG5JicaG1Cer89nhQi7qcVbZdeojyK1JLaFgHMgzUyeA1qhyH1rPUCew9ifsXXiwDuqBekQU7K6Kpo5K3H",
  "key15": "3QBUaKg2q81bzMzuuMB8owZpNQZgNCNgU5kaw7NnMHixogyhusyVXfXvCKGBBe6TqkZviLZ4zPcpgCbLwc8UUcT6",
  "key16": "5JE6C7fV14AEdkmRhGLQe3Ssx8nuX5x58wxjnyi8BuuVhCTAyvZ3TULoYnCww2qfqm2jvqEVAHLnmAoj3aCJ5MdP",
  "key17": "2kPnuQCnfkGXhkVUVUa8bB6BDfwEoSVgbt12utkLHbELpvrVgfzb1BRSrcSrRDMKaCAkmh7e5kDqKw46MFNtUWGF",
  "key18": "3eRa7JySzRTfu6XS2Y8q8WEutUnVdpJEb6tnYGxpYUAYfmxM1yLoQoiqjE8SN8Bs8Wn3aXz651vTwX8fA2yi5o6t",
  "key19": "3kZaoZwd5xiV1K5RS4CypLLkuvJjAS7wrqmaQTQT3FUXjKx3GoxU3hZTZDdu72FMkUErpqXd9GPjFCt3f5d8ZZbv",
  "key20": "secdf2DuUxWuGnqaPVtTzK1mcGtBMTxxtX2bsGhuCgxUY856WseZYvWfwifrzWCyxUKNj2udyacLKSGfHcB5TmL",
  "key21": "ZGskk14TjT9QPqYAsdBC7tkE5YDZMPhAPkxtD9PCAjq74S65CfgYJmzD5TWi6k5kgXQospAmgdWKeBNgC8WgC8N",
  "key22": "eLAvJ4xNp5ok85ugt3fqKUGufbCPYHTW9u6tDp2tgnL7B2cPEiiXBx4RyGLoXMqGkaSSX4N9DoHrFrfwf3U7RZM",
  "key23": "5owGXdG1o18TN2Y9MHESxv3FRWgpHXu6Xjc5aoS3c1xESFB4hHWVazVS6gRoWzt6onmj53toizXfPq9zRLYcmnpU",
  "key24": "4oee6PjoNDthPyczktZnuLg5UFgBooSruT228bEq5cLX14WnQ82kz1V13grPvues21SLkuJd69CUbK72BkqwtcPJ",
  "key25": "4PyhJTZEJwxWCY7K7S7dttk6AxBLyXdnhH3kfrnaWK3MThDxcbEUvtWUDPSYWTgyvVnoGZjDWg4HcPQurFKHqjSc",
  "key26": "63wDV5s2Ef8WWM7Fztn81g8aKVmwtiH5RgL2HV3mKngzLc3ZfEfpUnZYqs5gjgWy3krFP6bLrP8Rux2RNjnuwj8h",
  "key27": "2RsKe2FfS8pX7Ri3gD1cSJ9paGFiaKGfdA8MQUZHtvb8tLCWZMUsBmhwhdXWPRNbGBgXyUdbH7Df4tXRdSMoag5B",
  "key28": "2irhAWmo2Eg2KDbTeb8nUH3DqvwFxMcgEEkYwW9FG2qbC4c8PTunMSZCzrnTYZ333jjHGQEcE2KTbN22xJ6XETN3",
  "key29": "4SeAdgUF7QzdVnABzwL3NtBGRCbmkMtP2uA34KUM7Ftf2R1TgWr22Ffce6yDGZM7YaZoSmY79wS9diKxPMSdRP9Q",
  "key30": "2fD4NGGQy8Td7DtyATQX7npr8nMsgVFNMx8TsgY7CUnLE7cmUNwxNy9d3m9bTCiBkC5xdYmHpZ1REhjUd9z3xMHc",
  "key31": "63SvXqQ4zKFKBjZbBMZDGMu9qRiBx2wgv5SSBdA3mpyt1K7tw8YYGnJHa78nLBEwQZnUaSWKGJtPWADyhpfL5sqe"
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
