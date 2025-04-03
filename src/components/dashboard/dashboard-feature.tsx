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
    "4JqRyv32jFfGf38Z4sUDQFKhtVhZLpi25DBT6Vp39DJ5LmFkv6rrTyRE7fcpHzEUN5kZYaHPzWcLeuxtaQQUMPwf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z7SrGaiBqeNsbEtbjoV2waw4kDsZeBiJd9gXtakPXPqwisaPkYBgjKh4kqud31x6Tqa8FB612TyowvenNZXSxpb",
  "key1": "3iUeWBrqHYPcrTgbkq5QMKpmgvGcsM7wKi88TeH4REgmJEoQVGkhkjyszovjmDYehMhEgmHDiiid5oc1Tyb7NWJw",
  "key2": "5p4PnrA2vpEV8ubuWXQMPfFgRRTQiumK4srAuEP8jasEiE7YyehRH54GGbyCg3FJMPkk6NhxDwqa1JVp1ugX33Tg",
  "key3": "fxNftRmQSfTwCRtLfwSPJNUKVQ1fBh5CcbQ38dugnYqgUWSuvzS3VveojV3VyfjMtgNf8rXs8GSQUc2KDc2j9or",
  "key4": "5gnteGh2nL3nQjShyYjpvnVkz5dpQ9qL97GMSkrcPLxQNatsW8m6U67BuC2kDtautFiegC9ookbLbVjSPk33NoN",
  "key5": "4UsS6KvnEsVmKa78dRZivg6Mwyqcfmh6zocM9JtKvN831huGApzQnvkAvTEzPftkwxWRKxka5goYkZ8ZaoVLEYeK",
  "key6": "5j7f9dhPNUMLqAMmDTn3sEW92eEW7LB1bxh8yPfr7FTaHGf4AvxWFofvWXwn88swarrKP4JgMY4obhnj1LjEbaxN",
  "key7": "2cMP1djgx3P4vht9Carn2TfAELcKvQiCMWiKrynNSSi5XPERGFMxb5c8KNNhR5LceinnKzpGSZUKRxpJKAfLT8Jc",
  "key8": "2dgAcvqB79yfdhrzp3HFyaM9EKBifiQiRuDhfgvDadDkFPagRaa2WMYrESg3jcuYYQDu7NgM2AiSQQEVcer43NcX",
  "key9": "2qTpMDyvKLxygEJUmVNVTx51x9cYxpJaGb25YgWJht9SXuNXwGzxJwSfkoZbEhY7LdRDUu8pohtEKhFsffkjeAPN",
  "key10": "5nPM5w9GjtH994bdJPSEBBREy4ffrnxm8Jif8buzxfkh7snCZMW2D6DLufdjQWXdC2wuv4eKsaffBFkaBv5F2A3S",
  "key11": "65dmkjeRJn4CuuZj3o99yjs6LNZrDTkmBW3nPYU2HCSy2upJfqGuVGiT4oAyD4wwvgSkhdJTESw9xF2PkehCRVYF",
  "key12": "394ybA7RWHDZMiZuhDefCbQqVmqLPSLUP3Fv7H5a9NJZXcUx85Y63dYMdMFwY1c5EKavJ1xPaXpaZLuXxZw3FM7P",
  "key13": "53pCMtn1dq8M2Fnfk4fVERZmXwZ8zQDCaDb5eiycUyakimjE5KQBYszUMW35gt4KrjFNaASvL6zXKQRAKDmsYZvb",
  "key14": "62TJvCeXcU73RMjTMu5e7JNRg4xRGMmwWAmszURZpL2Q7RQY9T3mzuw6aftUMzo6aVD5y4wji8tPwNF135rGZZx8",
  "key15": "2BJ1Uadhicg4UjV1uhcf6FY2z4tiPBhCzzzQqQfa2xm5zZ5RgQzggVmytx77qgyV818jZ4nYiyaagXe2cUtADfCG",
  "key16": "5U7JUtedQFc1LYaaQmPzAUfLsuCCBhpQBcKQMeebAt1aKLtKemGjk5g1qzFrVDbtsb5qnLCGB1iGHRF9B4UA8okZ",
  "key17": "5SqBCDcxpVMw72paKhcV9KPoBva7Lb35e17FFu2ZxgxVyAppRWcHHJo1o93d9wYeg5qUk48pyaRWK6eeAcxszihv",
  "key18": "4msb9pTLcfidL2Z9vQSTk3JzKNSE41zAt17zukJxfT5yDozp6VzYFw4x4oPRjoXgeweX5Sb9EGyH8EPW9m311Weu",
  "key19": "5WA6VifpV4ihgaeJ8tZpDQFGdua3MSCyjwjmdmTCKp2CWnm1sLbG2nLgCaKohVX3Cr6cX11AybdTUk92TgN3KgYJ",
  "key20": "5FHvAJUMi3yUCauGmgsoTNUQmAJhAzWEs7dYcHDk4iLKnyX23nURZy2sUUReTQKzVs2wHqJMCGyW8impsbUGUd35",
  "key21": "3Zhoo8tiXkbJUZa2BN4TkCkmUtNvipFSCuKYgmYWFqCuC6u97e38vgRZT1uQjUUmaqb8dXyqppuG85AfhJm1Er6s",
  "key22": "XhSzeBH5f9h1tHDKnEPkq1NtG6ic5nNR2LVQSHVLJpckdc6p92n9nj7FuBTw3YZNMYutyeLiGv378jnsG7Z475i",
  "key23": "128WhV7UskYtCe1FrUukAm5cxkQcnEQpsxERVqVqr1ycg5zUBwf8YQVxJSpsUxcPaeupHoGUnev6JWaiQAjTGMLQ",
  "key24": "231W9WYmLbyu9zwKFHFD4xb7ywH8hpvGFcKR6CWTfbrYYVu1HhHuXXGnWQ3VwtCU1dJjhJZybFkmPM7PxeSewGu3",
  "key25": "3cmuoC8Hxmkb8swAHYVehNBheTGZNWE1DMTm9ZYfDQhcbyWNFNts4TkZTMhdbGAuigRstMj6qkzhiVZ87ybftusC",
  "key26": "5NFdUaqHeAZivLehk8cddgZGEVztAZqq7CAm3xozFGjn5dYYJzqvar7TfVBoGb39S65P3j4n8uF86TqHiAM2o562",
  "key27": "5taPQbUxt3HHAkogDf5W1amxBdgudJkxy6sEHF8snzbFieBwfMx3iDp6vKYyQ27tpddMKyaksyGqvbtp5v7Jnfnr",
  "key28": "2ieEuAxEEnRbkf8UjH2qUkA93y2je8bPZhQsbZUmEmEeGkk1FVbGZsnULBcayn78LaA9BFSs591zBje45UyU6SWp",
  "key29": "2MgsxMpzNqfeETUUaepRqzGDnNGjnQm4aifELqCDjN1tJ2VXj3kaUCn9qXhGQtAkatpXwVoAenNxAENAaahjYxKG",
  "key30": "4arZtDftmqBfCGg4t9vhA3kv8ciHu9aadEFW3YR5xAL3CTADwyG9xF1Fptv5SggD4D3qtp3u3tqita6n5qbHxzGR",
  "key31": "3m8sU8gpsLyV4NpCMTWKpzuqcKuiKJ5qNSThTHWw5gja6rVVQentE2shfhNv8g2yqicqfcLSefnHwBzjkHAjMyvF",
  "key32": "42Nv9GHTGjv8MXp8CiS469p5eGWRHd2e5fiPraLN9tP4UdeTUGpghU8Po6tdH4DVxHWf66ozeZJDPtHwTw5WiGK3",
  "key33": "4VpX4Si8VEhQgVjQsgnPUjY7djDfhr7k62MAmRhTwNeVzendFTonpDz8snk7TqEh7k3EwqS7oeGqUNvJupkErS2U",
  "key34": "5GgQKZGmyRVD8HadEnRTwjKwRwHK1Q5eUGCETec1HndL4ztyspq9C5WtRNBSGZZC586e7VZvDJGWdLHNpw4cUrD1",
  "key35": "mUiUhoMHqJSEKjscv2PU8SJw7eVqVUFjbEPYQP9p7CKzhU3Jkh5aFC6zUmbVQd1BCzm61qvWxiEjR3NL1cztUfd",
  "key36": "5i3nuUtcACMaAM55wz7xVoBEPTrQzeXodLMmcug6tM4o9N5yry5HbXcg1TbX5qmEWSqKx4N9FLG1v8MiZg66WkXB",
  "key37": "XUUDBKvJbYSiXAGJCZjRcAvoEcnT8gZ729VxpXEcVkz6Ek2LD98kqQ6iQynQuTkcrZqgHkvKfMD9qaRQBUt9ZE2",
  "key38": "Lr5ELJFQDh2ejGem8QJ8PR12M3LibpxBzqyczz3vbmRcE3BRGyreih3FjYXMXCQ7gbANic9EKQvc2oR8B2XTwcA",
  "key39": "SEzhiRxLVLK7bQ9JVexzYtT9eKj25b7pURHCDU3svE6gYKcwmNHHCxXTNbJatqSecx8FgfpZzdkeCk2SwucVYok",
  "key40": "241JFqDzpFiEHhDikMyWwTHqdhiKj6BupJBvfHTtYnsirNJw9yNyAcUjKQ3W5yuUEkid7xdXCD8XSAq6UCHtmdMw",
  "key41": "57sU8XZjtaSPN5tsuuKYeAWqUTzw7X9GssY5773SogkHSzEeDsW7CyT46bZb5vADSbjucUFELFcih2h15TJtMYQ2",
  "key42": "9ft82R7HqvX2N7Ch1kLT3KxN11LojQXEt12y4qmiEZxYbieyrCHwrepAAbEhAyMnzQRJMCPqqNFLta7AhFwa1LZ"
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
