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
    "5KzpruYgJvDxjcfzbbycSsjAVc7qsbbUUSx5CsfQUk6ZctAhmk7VBfExZ4GcyM7RooQDRnF27yHq113y6ssD4qak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bi9HHzRsUu8GXJBtQ97dxnEVUKfpGpvuw4eqyYvz3yB9Yc5b7XxaLJfM9LTfKmsyMEo9A6ssn48jXpnuuHFupsU",
  "key1": "5t9DKsFYZRJg7meipEmTJJstEnUXYnYK2gHmPpPhCryF9W3LTUYmXvx2ACcdVi28jf2otdtNguYnVQuqLzhi7VZF",
  "key2": "4NmxmXsMznuBMK42Ww19t8vMX2bnJLeHsbHAymacntiK6NUB9VaLzT8cmjk91hTDjg2Tp8ya7eBZGNCAhFKZKr4a",
  "key3": "56aTnM4Pp4WwLu8GUgzkaViYRqrtswpKaa7jVAm4uLPbCdDtupfCGHYAATinj2wcFaGeTzx26xUERD1UWbvdbdPd",
  "key4": "5jhzLRq8vPbes6kkBvYPNo9hucEsTKoUmXEyUbg3aJa5HUXDYVXm7SZHoAWueiU1C3uE8eJurQLP9UgUrGYFhQ5Q",
  "key5": "3WAZK8nMh1qwWDWgWEuE2WVzrv4gSSrMRJH8kWzrn4mVqJTJGLxQ6J6FAAoNRiXK4bvHZtMdbCTM7WPASGX4TqFo",
  "key6": "TVejM6HSvgzaE2fjU5tEJofzKXqC3ngGvawCLf1YfDkPDjTQdRMBS5tSqQrLvREEgNGAvDtxdb8rnp7Akb8fYDn",
  "key7": "XEwMoLfPVbobVMFRVdJxXNpEtzuDrpGpovVpPmEG1G6pCStz16gUv6b9SuypBJFqnHJaBAakhSEfyS3pdiTbZtZ",
  "key8": "2yMdmjdjPZVhN9xtWHHR5accPpUCECruMAbBN9kKmPXKbjTKwriEx98sHfDxZyyUdRGACTb83R1JTskK2RL7iN65",
  "key9": "28z6z1yqvHLeJQaHB3CNS3snisPaZeZUXwkuNi3J4p2xcqZnoUWwZgZbq8jo8FU1sG7g8pqnC4XXgSg96yPpp8fa",
  "key10": "21saDk7CKXiYmuSkpwQqf8yEa9HZAFJ3Gv6xqF8cbSdfQCp1WCaNoYUU2kqCZJdqLorkEndXfBG1HquaGmpjJhKF",
  "key11": "5ZcnE2Q4syVabuE2E6BE7zC8XkZSmDs59928UVxNTcXMzAVE2N6iZ2cxErkUQh5FLShoGG514mJiC739w8YmxFmC",
  "key12": "3SQTEzmyGFdiPEm66GVW1QhRg9Fd5bLF3UwERHUbnC5V7NocPAXLt3xsfXe49sSSSdouunemKk8ZxeDMaT95wV83",
  "key13": "4TtbVPG6CaS8qmV9UUCA9376QtVGWNmW2FV1vfeW35ijqCexjNjBVVqVphxooWKmwYCoCJNhFXCs9JC9rUbGHhPD",
  "key14": "4TkcVXUpcfJ3ssA1NKkZAd9kGFJ7mgtwBDAo41CdVAAJYwCj4JtGuSq6ugsQ4Uoszo1hVfwWBGsQaupCWUX69Ux5",
  "key15": "5Cz3X99Beb1ZXZ5Xb8huGciZ31JRKtS19tYYeSHNu998wPVwpXMC2bnLqWxmb9Kn5EiLcLnh7bKGGxXFc2RX55o5",
  "key16": "625KFfvgFNPXCFwrQGHoDctNNceJFLHYpPdbSJq64yBVVdeFAG75Qi9AswkrEGGzNjkVmFWMXcE5ByLCMcTPQkVz",
  "key17": "2xXaHhrxTeDuDZTeiDySunzb1HtAozdLF2owoNkS8GGXVN3tr2WWUDUn2z2X9s6MXkcRnSyXnFHNgZUcFPFADVLQ",
  "key18": "aiMZ9A2HwVhPws8VvbGNpu7aFDyFfknN1B8tCEDua6HzE2YDDWitriq2wGm4YvEKCh42Ce8AFPkdV5Xua17BuTJ",
  "key19": "3ca6D4YRAe5Rwwpv4YuzJG6atwtG3QCPjs7iFcWrAMQgxS38nkvKNz6eFtun97rXVrBMShWSPqAjbCbWHcY7UJKN",
  "key20": "22FiqX9yhAJLuyXRk7CJHiukQV3shtASgjfKzs7LqboXUD4f4YyxwiRvAnRuujEVgQAJKjaSq8iP1it7dPQ3woBt",
  "key21": "4GcFNQpe7dCTcFkn4zjhz4JqHpEPMt1aLuwjQe2j1Mka7pDEsehdsWrtw3A8Jom3a7iMoqxVbgempeeZvunSobLW",
  "key22": "DZiF7CiW6ftjHREW1xWFwStmRDJskqqHWGRTubz6qiCh27SejUCK5wnPZWGLUfzbrjAxCMCZHMZV9FkFMZNwm1J",
  "key23": "2LoBKFzVSdwJtqZ9me14qH5KTUJCLBRwYDfc9Rntcg6U8NyXkjUVX5YjvnEsRKLdYSmr2MFGyGk1do1PJC9ENBDp",
  "key24": "wijvcGwqfsPqx4HBeMBNQpKqH3AjiHk9nVj4wF32V6y9VMMY8xEKVQ68omA3TXHn38mb4PKY191eGH3cPgSYgwN",
  "key25": "26tVzwCaLzLnuRhr796ZYTyYbtubQ72Mpipm43aRWLgHbVdCBfpvmQ4NZjrmTgqosNkW3eQ79MgP2LxZzmkW7f5j",
  "key26": "4f91c1V1ZXPF3HF5MQ7rqP1Phom3PLP43DcpVg9DGHNExbNNCJd3A9xC99CEy6eq9s6kd1tPx4GsyJZzBQyjizHU",
  "key27": "3W6XS8c1orQ9o5jwn4NmuEAYEDnajaJz5jLnuBXY3vsFaZKewrYgCg2RRzoq3dzUJeuj3cNFeKsDfkRqSpQphddh",
  "key28": "5DTDo7KicdksWRgJijRhLjtM9gxN1DsGYqxhkhuQrGiuigLpJFbSzXf9fjDi6NTLxWefdvxrrPKoV1BDnZgHCrs7",
  "key29": "2AYdRYjCoBYYjhdSV2hY4wjNyV6h2bj6TssFZQZkjUjFuTSSYfnu8rTQgPa73mWCHS3aYSg3rhUQU6zCTCr52jbj",
  "key30": "56cxNwVDkFKwNKHVaJokAnJ1YKcMxJJLivaSHjQ2qEswi5XHNe8zws1kM9pezFVGVy9qG3Atjw4vEocq1eqhjkbb",
  "key31": "U54aNPptoM8omQXCz7o2WLjpWqojLe7Ny3vV6ftmeHgk4a6TeywWML4WH6ZR9DmVWQZC4qRgcjCT74bgX4Mtghb",
  "key32": "2Xbz6r91tPmYN8cfbmcmcKFx565HemQbRwy6DUZyKP44K8Zd29kE2r8Ka6kZTLGQPs1e7YEnfYmXfLSsYe621744",
  "key33": "49fitvKWkQWRGNbsziKN3kVJoBvfBL8Cks5kogw3qHw6MvzccEKF1nCaauqGWx5EfByqMYXjVXMWbYpUkPAKoS31",
  "key34": "5mZFyAVhR6K61j4y9YCZ6jxQXLwZn11aqyGLKhaEpLuvrv6LnmnMiPVeD8NxLvviNB5PZFypRusKf78Sh664s1KR",
  "key35": "3Khdyy1VkHw3pMzuMgJPgPBz4kLTgfKCfahczFimQfy67LJrJZLtyMz4Mr1jVguK5k9SMq4Fn4D2mAT5BmTfLFcz",
  "key36": "5PCSEktEUN6Dn85fhds7UcSW74JVGoQNMBHTmLq5aic2fLHbFnBKRFNkYBNxitkTZQJSWhmVkD8te64h26WeSKpP",
  "key37": "2msKik6hNQb4nP1yfh6DFSki2enMnjnxgqMbT4DhYS1mw25FGcJFeHv9zHow419Mue9tERd594aXbUQc7f7uoUFT"
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
