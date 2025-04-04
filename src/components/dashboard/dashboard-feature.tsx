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
    "4aCrD186wyPR6oTvP8dPQQSyBAFhGRME6w33vLnKqfFzDV9JZNFfJ82y7xEWAGxyQVx3JzxurvJ4sWVq4Lk2NLHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GFLgj7VZHP42b9TDoYLbUAEMEugYCtGAQPav7h5bzpMaSKLUDPMTeRFCohzmojKHHspxgy4E8rNwxX6yYTDWMMM",
  "key1": "51yU72Hruo5qrKHqyUerS1mJDm4GeY58W7sK9XZ6WMMQdMYX5byCKkbTPq9AZwwqMszVkVP49WkiPNjVYi8TMsT2",
  "key2": "3MFK8L79tabXdtCC68BNen1ziyohGWtSyuGQ83DxP2h6sw2DYjog4fAZ5u7wuC9972ESga2BkeLke1VJ3YpKqBBJ",
  "key3": "5mxs2G73uVDQVuqKQftA7XgbBGA8jhcwLYQDdz3o1Nip3FNHh3KVFNfmQW2nxGxyKqiZAnee74AMqqxrm9xALdZ5",
  "key4": "JkcoKh3QYoNEAtkBLnFjPvMSqJ6niL3ik3nNqbrcqc7ouNmHZzYjjgEVooybfp4LJRChAepf6ugQCKVN1zh3bZU",
  "key5": "5fiTujugCoLeR2sen5SzAahMLnVq7vQbtbFjqYThdrtEAUSr25yzF4ub3kFWeCBKnsinUARzcfZdyXj7X3qY48nb",
  "key6": "rC9a49DBRauSPjMXBmg153M9MSeC6vPf1TW7o92tJveBvotTTrZptU9ygPSxHX1J33S5Fd7okGFvBxbD1MNk2DX",
  "key7": "4M13Hfx7HqVBpzx9r2cKyxRew9gtaNanaFuFf53FkeaRvPywMY7vBHM6GWYfy4RjHm1KxTgpYLs5eBU5cZG9hNGT",
  "key8": "5oZzJDhpF8UqKkn8igeXC4tUaE8CyUgGrxWAb4h3ZkhdVEifm3Tse7PkREXDFFHV63oH49hdkrZdgeMrEaxoLa34",
  "key9": "2iBGTKkV11hppxqzwFR6tC4VKKAhcerLXjB7K3qp3Yq3SoCPvPxAcDEtPH5FKTg7vnUs7Rj1od8MsGYEVuKoYCdQ",
  "key10": "5c3uFhQRTq8BFrL8DVqYc2of4ujPcXYMgxGMXNJe9LNYLiCJ6yx9hcCa5mba4aB6JZxmGJBamUwFFr1xLo82hBMP",
  "key11": "35YooDeGJ11zYB5EyrpaLXwih7PJLj6g8myBTyP9hazbhXfkGcVySXRW1QExsdPUUSdxp1GeNdRDJiJ8QTgnw3po",
  "key12": "3JYRrWUKfPscUTFf3xani5VvvHTfCxiuT12gLCZReBUCCUyyUga8KDimNCJkQrggfhxufMAdsfCpva3yegKtTdPA",
  "key13": "3E451YNbKEf12ZQturX94CvGK13XURue1ZTG2HmvQzGrrNvn9jDqytS79c7XWoV6s5JLLdE9gDvzRu2cmahZpH6X",
  "key14": "4AsLwofEZYz8vWJ8J1rJChdBghDdvN6RKqydUW6cwaPPQyieer3NGp6yLeVsW8bZGz5KuLZfPRJdhxB4oQ79S49v",
  "key15": "5Zr22i9WNxWLTMtLkd92B7tWvbMf2LEkgXVoGpREYLzqoV54bxShbXcEVBYwDPMBpZpem6NYSne7kg963zhT81Zt",
  "key16": "4EJaypjNgqJTWGN3N2ywsA7UhktDfkfiP9G2c62C5C42v8ALfDgtYADMfBwzfoSJprBtQoRzHgZzb8eD3WqTkhct",
  "key17": "orYCKDNMdb1AXnb494B8YqG9eg32khUpRTpo6pHM1kur6d9HVjqsrYGwk8H6Jgvg3Hfu5etJrUnawXC35RWCBej",
  "key18": "33XnnV8dG8FFPy4FMSLKzqewxXVk3tjv8N92iijgdApPFHNiQb1yZmwUV5E1vgbi3gpJ77vHWJkE8TuYZizLWoiK",
  "key19": "4RBE9q8y7M6oCk9psByUfmPVjbFqTD4j3o5mMJVK95DPxM4Yz1ExEf8mWRZLwfSkEiDanHmtNC4AfgZa464EgD89",
  "key20": "5nJSaJYTVmxkhoz2E2DHe3MLyEw9tb2UsZ9cwokuXPcasEeNk75NGXZBYtrNVTDSBaKT4ruz1aWoBy9XGVEj6Tdn",
  "key21": "26dhGvVP2LuMLK2KvTYBiYC4Z7JvGHNhTTtzPfQ3CCkpXMa6dtkZaNX7h1SFu3jDVj1Mcp9TWuwjwtULGTQCpRRb",
  "key22": "65vDEkjR1tSFUtVqn5HzWqUDajYMxvGeCpjQ5mbxmQJYHe9MdvNArDWiAiGNkY2WYmrTKQCiemrwaccRjKJGt2Ti",
  "key23": "4aAvL1WP8bfywVuaovDFJ21DW6CzddsDy7ck4XV3DYwbJN9FTXJmLinQABkPMitGji1cjTZw25jPyznZ9ivgsjEa",
  "key24": "3MfXkHwtnxEMztSHWB92XWXgUaiYx1STC11JgrXcU3Q8oppSS6K1imbUeeuhJk9k79WWhmAmnKXM3qtn98LrVwoP",
  "key25": "3EBN7sXErpoP1dm49LgYMGyJ67ZMNiFpuQA1rWbiCQeiV6t2MnsTFzD9j643F2YuLwj9niFKF411o1rNaBwcEccm",
  "key26": "AV4Dn3b2mTqPUJwno83bSeRpBEtPas9fkcg9ZCMNuYaHPrFHSJChcL42XbcJThu9aQyFXooH9rY3yHX2vCbuPGN",
  "key27": "SfJw1MjTskjYMVsRJv6rGMZYhkZzxKmiuWCyzoTca8wBGkNiaFN3KTiicUUSjrzQxBGbpA2wLQ5mbVXxLwyWq2w",
  "key28": "54UHqGyighLUMMucmHnJg8zqn3DMYPqWyeQUiBfazudv2tUEsr9K6ix3naQ3X8FfDHpnXJnivfyhN5LZh8egfKsm",
  "key29": "2t5pVQEe78wYFZsYxbNsZuzmAE8s8gfFoFq2o3eenpZ5xqZpoEDR2RHnnBMEKFTCHTesCm1rctQedCvrgELHMCXQ",
  "key30": "2RuKisbPX6PyJb22hGiYKy6jaSAMfnxuVhwVEpaG6hUPnouJDX2YXSv5jPkJ7a9hWdWuJSzKRkzW4KrhUEA7iqTW",
  "key31": "4MRhWXCMte6fyGjwt31xXcSvGJgSJNKUfVsUZQocysAbmtvWchEU66PcCGQFeo75qhFbbXnmbDGDmpSVPPheUcct",
  "key32": "3dYiNajcBxA34qqCTueUzHJtp4pdBL4aQ9PaEHB3t2Ks8wfkL3R7KA3yidPmreC6C9afZkPNwWnPSdFkxdohhkyV",
  "key33": "3FZkZ35JNZd3jXS6y414bejYC8QaenxZy6JDhwtS1XPAPzkTnbFSHm86vMB4F6msLCC6AdXMcjgjRRyyXK2TT6wE",
  "key34": "2hHHDBg6HujjxQ7ExZb6pk1EwKGSAZFqgupq5btaepS3JuDqthbf4qLdvixNV52WUVJ3TogeBqDq6rZLUeQL5JVY",
  "key35": "5YfQnJqWiydFbBS1VLij3kE4qkfr3a2TsFCHKciaFSQHMwByuo7ptPJoSgk836Kjy3vHnzmZ2aEux4nbbADFvS15",
  "key36": "5zXxhk7yehLw9dKMxVoxQnRKWXKRqk4AaKeDqprDE37Lc5vmVjKVMqB3UvJvjnzCri7PtSocPVVtEMSTuB1E1SeQ",
  "key37": "4YooPopf5F91k4uPEVtJnWVFne9Tqtu48fdHn4NMmUDYsb1oCYpTyWxtEky6kqjA51JFXVKydwgye5UQeK4JJbeW"
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
