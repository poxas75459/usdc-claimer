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
    "4wWhtqG3bdR5ByG2fpvkxyweDvHozxpGj93Aq73coGPZoMqsQGmaXhsuaRBX1RZjYY8s3wxzTgnM1rDqaxxcz1ie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uV8i3DGAQxs2kPaZVksw16jedKkqYj5apokEgGeqDq79BDocPWUzCWYgmKzX1h1kRUzrceNmPFKdeoU1akL3rfJ",
  "key1": "3DaHCvVAvQ16fURZKcJriB6HevgfSouWqFkFt8FG3nTdPYpsh1RPbVsMAp1CSgW9YjNTvqcQPjmViH2rVrq6hjf6",
  "key2": "251JN5LdkERb97D1Np8pVYudkcP2DEhLaG13Dhd6qVDxkeNHuVUUKNnU6WVSgiWrYrkmnM1tnnWkwP7BvLR3upRr",
  "key3": "nUV4cbcSyruzjgqGzrSdborxiRSYoZk7jdAngKNn55VwsQ8thgJC7Jx6Q2bhabnfZ1uZkzswATZe6N7KxZhK84g",
  "key4": "2dPfBhPNjZm5PMLMFTjDC99rr2fKppJFAjBVBo1jkLaJDJBW3CgJUa3vcwmCK8cgB1dHigAeFKoZxziGvzNpj1Uq",
  "key5": "28LQSCmT2DcKiopt1DbxXRmKdrvb7v9tioLkPMQe3aZNzZpqY9Sj2zBzoj6ZYMWvU5p69ovN77jxvuKT2BKRdtE4",
  "key6": "5JvAzGV9QhFpUGDMUapmgu2kurepkEq8FiQBVLzejMtz3jtzfwGcA9ydQeGdY4N9AQzHMZuf61S8zunzTWwKb7bk",
  "key7": "34j3uprcS66urJk6VaYbmmKy4UD9AAfWpqQU15kP2EazXB6nxDskWq4pKWcLB93D8ikpxMt5maqP3m8wBNxGDpY9",
  "key8": "3yPk7LVRkCJ5Ai7Je5n3AqNqbmDpqgsFyT6UvqmYDHiXPkr6kuwaT85wBmFu4nMLwFvxV2LKBWrkuSdQ44fKsffC",
  "key9": "5uhLCogE517EhvNbXmrf2tAksDyZ6Q77tCJTw2bbyLUzCt982h69BpFr6r8NGURntZVL3mgf7QWLMYuAX7p8j6bi",
  "key10": "dFaJWfjwVNE7duH29SwfdYr7LaGtKGLWphS1SeRnjhcpTRUj9Xv3BPkhvgBUBYYMzjkFfs95Tk2B2RLpeejf8Ei",
  "key11": "2qSVie53ML1MGfoLajNHqrozHKnjE6EAtGu9Th6QxVSkUp9yon7gHbUFXadrd13mGRMjEmd1kFAkS8iRDGbYbycG",
  "key12": "3DCmbDaTHzgWbHY8mkUbPwePLGQmH7JzJ9RnFEXpoHpgDyruyoyZBMZn5r7SrsNVHjUNPQNep9S61WeqNvrEJjEB",
  "key13": "4koYNdqFbcAEktguHWwWUGWpVNhWL8gxJ4C6ARWyP4NhjY6oWg2fLayouMTqNhtKRCKd8tibU35fkSQ25NMScQx4",
  "key14": "ZwDkxioswEdKg982vNiLbDJXPs6gZYFLmrkkSTBXveomWYv7ejvFf2QqnNyALZ8borUVimmHMrKoZ6WC958igEv",
  "key15": "3rA1zieapbvcf48ra7AH7KLQmfSqpy3AReBv6zD5PGEfJBSwSFpjWegDNf6VCUiQVd1b1ATNyhUxUySn8GWvRV41",
  "key16": "5EtzAQSUmiemWZuCTxe1Ewg5MPGFDzFUGkusjN9JBgDdzevrpwRS1X37tiJJKHzNxaj2UsE9qzoGsUjRmDcQz5pV",
  "key17": "mtaxf6cNjNsbsnmXVS4zhsyeWtoBxex7S828Y8p9Zj9fbeUTvxvjDQVe2sffjnW5mnLyaDohZQY89ASDqPdvvMi",
  "key18": "5Ai4iT4A8ktQZYux3dBCwgPZssMeHtW8VNWNbCqoXtNMGEUjdQLqmhnvVsrBfPqEKkggbcZGqA1jnWjzM8wJM85t",
  "key19": "5CqVtFmqqSVvt9uSMjYgiWB6TdR4gAExFsbnU2ahsL9W6Sic2BBLgyDMdsD7jza5CKpPkzxggzLedA2D9UfBRJrh",
  "key20": "4mDBe2y3ATF2Mg6ZkC6P71C9jgpXjnJUULW6iYYrMfaServgGd4qQzALuMo8Y8HEqUt2qkVpdq7bZKXKBALQqG5u",
  "key21": "3g6FEmYuCGhQpBZLaRAg9aSEjuKYXnMBgt9Zd1o825fYW2YipjqwR3H8yq5F2supEc5hNUA7NCaWkYZ7S4AcFbBD",
  "key22": "4aXugXPMxUYBHEa5rT3nYFH4drfoVWZNK8BRbSyAiduCw8CY3oYspRKvAkiYttKLx6fndMDgwzSSNf9WYkWQpSE2",
  "key23": "2XCZ9cK23zjrNrHmeb4zj2xRmWZEFzPQ5gFpyeXKvJhhsoXwwTU7AvrjUzdycEow11LiV6p7gwNsHSyH4ferTBvC",
  "key24": "2gxQsVM5h9oUJM3ehitS7pBpRFstwnDd3bunzyphRPmGwHjS6mEv83qFr6hSGv2bSgFayCYiYPJ3aHqbngoTU4Fw",
  "key25": "21itcyy3F1SeJFizU9x4RQjCbvnPTibQ5npDTaVv8JwhvtxRYnVCmM4B4Y4byDzBCJEy7vcE8uRbLkn5TxphV7Vd",
  "key26": "8FXtdjA2TqoGfne86Kcc1zZnZ2JzFAYSvj1z8ec4JGU7CBsgfmw9QMA9NPGR8sMAb1Y75WuCaHm1ZVUogWBBryB",
  "key27": "5oWHB6jK2tZGk6psEPNBeV7rj3TAV15k8bcukkGjLJ4c1jcHS5Vzu5sTJ5jP6rE9xF6APitwPifenLYSJkvNpyve",
  "key28": "4GSdfZqbRgAvdxaqsoq9fQhSVHzqsLLZufgPgsA6i5NJgxDBuv1s7PkYGLoqHJwk6WTAEFupaBaPCSTwyt4DQBmE",
  "key29": "3UQr6z6sCKDnMZJ5UJVWbnzHFQcYj4zra8D5z5SWA54eE77sfAhpAT7c9hg7FfDgFZbPbCXweyAut3Ka7YPxsYPt",
  "key30": "4ohtSYjirf6YK1wdnXcD8svb1c8qN9krwkSo5twm5r2xwmoTD9852WrvsBbAVNTfoPycLXDCg2dFAVdZmd26cmbN",
  "key31": "dCqF27NYydtf9nC2vQZ3J6Aoo3HnUhqxq4Q3h61ajamhFYEChCFMmJZ5WuGHFjkcENFZQA3sEkix4DmMF5C9kZN",
  "key32": "61GU5veqLkXr3JmcSf1kGietm6qEbQ4SiLwSsQPV9xxPWMtS8QRZ2MtRdQAVjpnd8BHMuyEpwomA1d8DrPdzwqdT",
  "key33": "3MsU7WNAZkUrpVsmVSRxrvYqpXZk7QdpLSuGaq4h62E5aprXmMvHUfcTtaybhaopDRksHMx2SDXpSSDaVW9ghQPf",
  "key34": "2b4VRGim4K1GcnHSK9GTZif56NgwNyuSy1k6ZvYN7k6AsosgRfRDNmwh3kRE6VwujNFiEbfHeSBbebttBLCFqBYn",
  "key35": "3vq7Q5KKg6279Lzoud1f8Ti6RsEo8btBU6RnK9h8ib3SyiZpXU9j1Abg73epYohrMRjT9DqN4zsziJRgi6HHknZu",
  "key36": "4X6qP2VwQasbSFTPrwmGTnT3Kia12QieSykeeD33cTVwKLDCK6B3VrmKPSSFgponDf3uxUyb79ZPXbP3RPc7961s",
  "key37": "53gh9bEQmk1U76VvrRthrFi7v83v3U8o3w7UR4C3RhG3SfZ9WJ64kPtDCK8R3zZaJ16geyy1QiqpucMm8SdeYvW3",
  "key38": "3bYfmwFGGsNa3cs1hy94CSfzvLLRZDg1Jbv5W68Qe5rsLCmb5Crxok3CKwCjpGaJDG3PjUT7gS9KN46A1TbiQiWJ",
  "key39": "3Y3tqZRUB7cS1cAEzH7PBusCBa2cw5EDTmVVDS2wz89SgFnC65CQ1YkJmPFPDraHU7mtgfhnCJgB96deSRZ45zUq",
  "key40": "jpCTptmQ1CrARAPZtXVK5qx8PVUBUzF8yxrXrX1qkxmTtEf5dNMCUH4jjNcRaFcFvH5K554WycEqZ1qSDGM62QN",
  "key41": "66trbbqHXXt5cAJ279K25dXNYJH5a7onXxfE5fbgxfBTYR8tMFzFmAP67ygpAmSTNLph1KuSxmgZEb6vkCbT767L",
  "key42": "2CJK9CUvaXPhx1BuBf1cNikW2yruduwVvnefssxUPdao7JyDTqLSffjKfjFqQRw1ErNbjjxZurdY55soBDJZdGq6",
  "key43": "gvfdoBGAF2XFDs6CeQ56fPDnYzr1zrxFgWasjHix5SpLP8uoQJNK1gZUEmYiaaQ4CuwzNpmzuW9a2P2c7ctnTDd",
  "key44": "5QWwZ8mBLQVtFLcHNDZ63GRTzrfyRKZs3QJyxvL59cyTpuTcBFTXTe4hYCuWXtVAvs4Fq471aLsfhKYnVjiU6jHM",
  "key45": "4pqCpG6oyDCz1tsdbtWr2bwqawgwtRAGz4Mv5S74SMoUztSRRkYNVxT9y4krRjE1ptYhYuMGFm95QSvdes38NGuT",
  "key46": "41h5zhAJe3LaQ3Hwp6PMXHt1PbBh4PsBxnaErg9iVVMSKbvHT7XkWuoQ5YsYe5heVco6mJjv8gw46SLChX9rSp5X"
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
