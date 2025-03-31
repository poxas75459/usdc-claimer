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
    "DdpPuUdnVpyVfFhz8DD67J6wPwJDWLsjDP5XVJVryo3iPWsyDAoa9nQBK4wNvK65xTzofeHJx61f1UBaeiXhjcb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Uu4D1iCFTf3PTc4h3bqjAb57WWD1HJ6BUfS6nJ6YT5CXL6ntC2Vcooq7JzF39ZPdd8VJyVMnwEcFzf8zXNdRAT",
  "key1": "5Ba5u3sVxZpCvYNyzbnep2ukenamDx7MkCjmSkFF4oBAZsbkrD1CCsDwMn2KQdC3VXiZXKj8SsaSckjjvMm49MC",
  "key2": "2MnZ6BKCCNokbyJn91R77WMW3FfGL3fFhMM4VkJZ1PqZJEwXMW9mZNrbQbDaKAc2iqwr9FHRUCsn6U7PEUehjEBN",
  "key3": "21LqoTpeqSdYMRrG6KqVDrhMFcV2ZWNXr8t1ypZRoWfhFgAoXUYJc6hbKGU5wcj9GkhRYXvx315WwDPmTmeMbTaS",
  "key4": "nExwex81iVJX6uizaWMDT9uJ98bgsW3Mhb77415YeDwQPkNKwJ9jDoUuwTsJBvEz1LoR1qdx1zjg67etTqitsvp",
  "key5": "3V5h53LpQTxZx2QeGcRTMKGuexvDqPqQKWDvJKXN7NgT3SxWFLWH8vcfExKxERLbpfLhkzXhx6WLyvyCFnUMt9sJ",
  "key6": "5H2BPNCmEbvDkanDC7G4Hyzc5ryZf9HRUn8jM3S7P3Q4BdvVu2ucdbxaV4FgQFRRLwwNcaUxxGSSCUctctcf2SRA",
  "key7": "3PUpqbHufGG8TajBe1muv3CWKMiDUrZSVpANt6GtehNNo1LDCF2e9JNtuGGcZBywgAFmspaHv5FGhXpyCtX48Bmt",
  "key8": "nh1PuZzW8TeA8bvtwtFGrpqmaM1QMq11ZTFvQCA8AqLsya8Q7v4wqprRnzcg69eFeh8CsaUFc8amfGeVBMdXqpY",
  "key9": "5mbeuxXRH2hQ9qHhtcQ2gG7WNWeKkckKGzK7ij12D2HJzZriecyJfww43EeTFKZrwLoKz9Z3AiNuhKRVBacHgDBz",
  "key10": "4mYYk62bhpZRHc9BP8ZQUY4yjq8o766GHHT1WVGY5cE1AcziUJcitjCWkHhU4NPf63WAz2MBofhJCBWJj42HxjSg",
  "key11": "3y5ajv8jVWnLaEZr7u7qPH8ZMcVKHwcVmHD8xGmZcex2dySvUkmnFgDybEHsyxUVG7Rrw6odUThzakcvquMSBgFk",
  "key12": "3stxybvNnYewziSc3U4qdBLK5yM4QHV1ube6euWVb1hNHRbTyMEi1fsaUb43TMUmb8roj5JKkfgvxVyv69xaVMeq",
  "key13": "5MmR5NRC35m2PSVWvChmuChkzVXLjq9Hg85qwnsCdQLxqZv2NickeR9PqedcyF4X1pYj2RAKPXiaYR6Ni78MkjJm",
  "key14": "2qFnrDXEh98xpBzQDxFVzDU2tFXcsctmd5v2mqiWW8Fb9439G9FfjFCobqTsn4WBBa6ExqmpUP4jmBL4Jqy9fFC7",
  "key15": "46Hk9qnf7pdaikFbZa4xog8bwr2omTSu8HTe24vGPTc2qoRzManNJAASUK8w5m8gSeJyYhRwWQc8n1DJ1c7VwR2d",
  "key16": "5qMP97HGY9LGCAwKEf3fTDBC449hJ9NK38csRffDsetKi2ujShHEUsB2ATsgh9gRUUDVVnEh3n4q6Ka6mKsagbqy",
  "key17": "2pNGBRdbNnowCfo8Qn3CS1NSWXqwHz6K6RB3tsUgDprMiZVkPgb8zfsoB7FNWN7d4V1DUMBRUN519gHunBMSqKky",
  "key18": "5X714Ps8Gc7rpATTzDsLzFWRdiaSzbVHXjDSuUC3ekWczgjDQ1GzU2nFckxtW6qJkXsgVNW56jhYmQwStoRDKZnh",
  "key19": "5cnYiGBcpXymXzASSKeUrFnWyDdJ3ct6yXCXxReC1zjY9mretsx6p3c9mycLo3SCno6dUT8GkUwR3dFgGLnfMoxQ",
  "key20": "4iZpN81AUzDFvhorGNQ8zKDpVmjs7bq8SBhWxJXhQsbKRmEcp4xEff3tKVbgfaNxAiZZ54G6aNPDKr1PrMb2DYdz",
  "key21": "3nuVpe9hRfbM1k2rDj99fhqTnoUZpSMQsgcJCekBA1fEc1u5bf6irqe9aJGLBwHYgZLWL1zJbXw4fm9yZydRCvmf",
  "key22": "4eH23FXjt91M7Vq6Yk7gv3VyD8TzCjqqKGjk9qqLYpMFkjfKef3D7eJUVVTjJUsE6emP3K7UtKRQoxM8toM4Uwjj",
  "key23": "2refkr6h61ameHpsrBUGxpWPgRtqKtbguLwav3iTnkcp6R5YVK84szsj9ZLAkxyG2fwkqbYnuU5dtUTNyq17hY1b",
  "key24": "534fpbmtijfKeb6nb84CZCJrq3KumqrtjWJe8ruPAJMzrSwuemY3QQKTpwgeSyfjXHdf222Z59BW96BZ93cK8Hh3",
  "key25": "UnwVwPTSMeVefHQ5vEgZHnzCY79pBPWvTWxcbHP4W7xhiAPcJYCYpM5K4Shac7LdCLX8rToLGPUrSkXppHGENyq",
  "key26": "94po8xqp7njVpyg9bq1E9W7tS7n6o1phb3zC2xofePD9AtJeYxQf5PF1MUTdzkskut2SwH3ZHF65VAD2r3rnGfS",
  "key27": "37E4u544NcjYPgKLbdbthsXCP2gghDN66Fk3xPRdYnVaK8gaUXDfA3HnNLm4J4N29fqmpP16yJG1FwzaoQooHNrG",
  "key28": "2SvdRDsTmZ4F43tPFKosKjvhF7LQPkeaz6e1ASvEdFG4UVuKLm6fTkHYHmdF46PUm1AfZKmnoBFAhkpA8HahJ3Sw",
  "key29": "2h5uri7rYaEaSttJwTnxJtcPGVsKiGQzDLWGA48UAQzkr36CzKdSwHqUbvE54YeygXkGvJiUaxZKhFzHXUwPDZue",
  "key30": "5rLWeiaAyhKKs6Pmt8njsm5kQzE7Xu5RdqUuDUSX5o8ActqneJHTmAq6kG4LpJxqTRREv1XneMF2YvSQ2varXSEe",
  "key31": "2CZBkRhM2hnLxotCK4BqRqDU8BsTayZfr1zEAYx3fbyCfLigzUbHk7NE3BgjZHL6Mcj78ntxfKRQMUa6NcM4azfD",
  "key32": "2LPPGFKiZVCkvtdw4wCbrqaNFWRWpPqHYdBTmkbcdF4TAz3WnTL7Rg4jmSEYjeoDP2mvoNRtbiTh3mNTrq4ZwXN4",
  "key33": "3bHYUYb5PHxdENtWLfnti85BCxds36PpmZVyqN34WnJbj7bTxc5TRt2iyskLMYZjVvkh7vNHTo33vi67sJwNSaVZ",
  "key34": "2NCZ6Dif3FtgcyKkDf1Voidih4J1TCE7NENXQkoG6kaiFzRpfcxfabFRxjNLjovaqjiJTFku3WcAEyZDradXsbZi",
  "key35": "57fycY56iTtyuiJxMz2snZ2pdzPCdqpeT4hNiSP3ogWdHau4fa4aitsXtzjDk3XWUFAX8MRbx5P1AKoe57EakZgx",
  "key36": "5vNJDWHL4vVqU6poWirxVngKpPoakWgVebzYdowivoWjTvQivDMqaeV5CvGBJ2YYmwdXHNQce4N5FKQe1AXQ5qZm"
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
