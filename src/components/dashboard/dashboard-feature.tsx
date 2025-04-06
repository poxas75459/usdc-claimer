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
    "5oHc6vXKJYfaLhfuyT4BWzk35tE45gS2MxV9WamWhtv91nTLtrfv9mrXBSSHNMBD3WMZykGFtvVjQ4BUWbDqASRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sw9oGAXQdRsZvsr6qkDVoYjVCWo21r6kq4Kq3h3u5wGYD2bKCQPxHUodRGBE89ksu6Roe8KmeTdCLXx3hjFVoTQ",
  "key1": "2peSAcz2UXz4neAdKuZS3smeUDDMvnrwRdrfXwRr3akQZJSJCttv2hfG5NuXyoo3V2X3kaEf5tQahTM2vYMM583Z",
  "key2": "CmoQctwNB1y1so3kxpWtw6F4KNGypMKeAFsKGLSHxiVbUjooxmzYWQB6RvfEbA6tVWb52Z7NjCkZKWvVJEgfuCr",
  "key3": "2dSuaKmmVts363vVU7xLPFXaj8teG8MNWs1bnhF6F9hEAwwsXHH4PYiLJzuSWKg36WfGTZVR3vYaV2sh4ebRbLwc",
  "key4": "21X3qtatqDT2b1nzGjLZ3Y3kXKa4uXnw951poy9sauPiXVmUqRT7EqcVsPJT4b8FiNNGmjQUZS4QKsVfFRJRKgM9",
  "key5": "3A2NcFpQmUTMsv2gLRZXmWt8pCWyUB4hf1YNwjuyNsJEsfy9LDVcV8Vkev8CYUUWTeWaZPdFd7JNKpBnSrrZA7dd",
  "key6": "5rBptLz2E3MNoQQMmtrzHWbwEjAmGDKfZ5JFnTigrxz5eqGuaJBeGypThKmhVkn49UTLPzWAsRPkvtuJMh7bXMvw",
  "key7": "VrrYvAcxv6AeKHkVGdVEhph8kinLYFCzpCBjGmb5jivre9ufZ6t2VropgtpT8ynhMzTTjKAzgCWeohBfWtJRwdY",
  "key8": "2gUw5ao8jPb1gbFBB7Rvzm9ZZUNz9yjjUPp8uHJ1hGZ51CNSTVAUhTD9GZYTEPsFX6MmcfDGoQCARVZxEGdN7nnB",
  "key9": "3yQMPrDjG2DSsq8EU3g5x6bPH8xfAW9cTnLMEmEx93SMvUr7VsHfuMPTXafVzcKFmQXysHFbBqHW1Zsvt5WDeKdr",
  "key10": "2Ev9NAEchaFqpHyfjL33KpwYs2Lcdc1MqrvmgYLM9h479We2cqLSuUh1rRq22CQFAyLnpCWL4vzSMfVmdfJruTmJ",
  "key11": "34DBvbvaReAfJ82CkuqxkcHxYvuk94mbtCyDwbjdshpyZJMthbxv7KeS2sreLhXC9j4Kfi8TNVaFb2YdfyinGtUA",
  "key12": "2w2DfES7Zx4fsaobFqCpXB9BPe5QobgyBJjJVNzbBieirRVkJSKmEDDrgJyvFScJPR5Zcdw73QoYrKFG4Lxs25gd",
  "key13": "kz54fPTt3ePQkqgr3mC8EbE7iaa5nrkYTLkEz2yZiSSj1kr1o9N23DY3rcuv9hmqcUoyJQAT2WcfBTMGjABQQkW",
  "key14": "4fG1xfuJ8ntHXSXiQbhu7pZ9aPAyg2JGvutjHvM8b93Z2tefD1ncWaeFEeQXo3N5uYLLy2y25BSrVAiWWgjsUfxc",
  "key15": "vktzYXJPXBqy4uV58NBbd87gHcJkUdRPygU7ipuhtmhpiG6N6pDb3QiFuK2RoRVmdrp1HRS3zNrkky57fpT7ZV8",
  "key16": "2wZBxDMEaX8zX1bLyoBrSCPf7ZC5TFesuNyarxvW3kCprXRpQMa4DrTF6sUutXdHD6XbatWfwCDgXSFhUxpERCKC",
  "key17": "66VWwn9XEAjcJnXDajuoq5zBmKyJYew74EQAbTSH3hbYyZ24w3tpezQ6ihpNrkHAGnZBQgRtrGQyZkeNwRjEz4sz",
  "key18": "5x4VAzSEbCJqjtchRLg4gixC9baRhBNyThWNomhZymRokqXLCDdsHouALZUivWZXbxW9NmyAXdAwNa9WG1PqZkEU",
  "key19": "4pCNyMry3EUUJVY9kvWLhsdPuiAMe2soNXcyiseTjyQYak8pM4g2ttDornRCaRwpMvwm8e91aBJuhzRkab7CqSVN",
  "key20": "5EbVAmo7KBtCd8v9owakhL3AEHXjXhygBCdgnJV5wd2gUKb57ciNcfP9iSidLA27vkPuJEn7sBpLexijjKoRxEqL",
  "key21": "4JYSGiWWQ4XN1qpFW1LtUxCfSS6mHgvC6ZoXsdPwYYnrXaTbQX7WFLikRQCgxouaZGWN8uyGpJDBg8zsZxwgJnqT",
  "key22": "37G8XZwhxXoRc5aRyi95Tgjwy4XKTe4rvPhGC2nQsLdd6jRBiemQNrSs18PZbjMtS5MWVALUDRze6VPL1RGfQyHE",
  "key23": "4uZAL8t4rdRRYivMdqdbrtMjxnoLnGyHDV1ubUeSKv1xbu3uiPhC1HRS9uZmDq99UcDhWqJf2yd4BLnBePBV8Mp1",
  "key24": "2JYLYqBMRBSsm8qdCjuMkcQroND4sAJKPMqy2CoAncRfWYoq1Yo5GJ1YM7w4breBRv4yNeaAjnBqV24pocfZ2Aw9",
  "key25": "353pfD1AtJdot74VbTudv4yz7rCGPgXhbQvEr5FP3pwtK3tyz93Rkd36R1QMMtSYdJXAziqGkuwf2TH4dKwFBWMr",
  "key26": "3WrWp9wQwrS5cRsbLm2sYNKQyWNYiGsKemrMPUFh596TSWwtiTx7NjSDmyo3naVuUJx5PPjif1ZGWQaKTMujLE6e",
  "key27": "5VV4UtJu77gsRRCYYSa1PyVr1DmD7Ep5juAgpA7oP2KLT7DL7Xtn4tqzknwqkBFMDYPxbdtLuPkUXAX8Wn3rvCYs",
  "key28": "4kWsdUt1CdKUYxUmjcg5Y9WsrUaVZyjZVMCADpPQXmLDNCEQC5eCYZxxDM9coouw3r45eznHnrMXJMinW9ucrFLj",
  "key29": "5pP5RNXvxPiCyLTxTZCUvshCXyJZvD7Y3P7BfwhDJQsaHmuDrxZC93oaWEd7neSKfTj9m4HgEYJnnGWRTxSNrAWB",
  "key30": "2eJzXUt91e81q6ndcFtbN16V6377Wkk95nuEv1XW6QkHcQffWb6JmLaJgpmRbC7eb68MgrYfoAj4a1g6AycQFgqS",
  "key31": "3zbYTAEumaHqpRFxw4Ai4DhoUEHa5tqiZWKsLtu6sdwf6LT4DNUBSRcquXx18FEa7ZAqbjj9nVb8prfHPcr9Ahbd",
  "key32": "3TwQDQ99Q3vny4pEiQDw3JducHGYVUdcs6vE6MPSdYnG4nzC2YSkJpP9fZMtNqBfHKaab7DNpJtWQxzwmMVC1LBX",
  "key33": "7e8kjb4iBPGqWE9i31rjvu43gWoYpNcTaq6u6azVLxrMXngwZEtmkQyNu2pp2XFeL1hBh7aufWrcRGQndMmFSH4",
  "key34": "3yrgaWS29XxUkTspwMsN7MDbLcaHpcnowpGwesoXUP3dMyjgCpZohcaUNVSZ86Yaca3EB3sqg9oWW5Dgvoj7XS5t",
  "key35": "5Ma8SPrMuM7je3FrYdmkWWkM35whtNgXmjAtgs7RyFCEbeVkHfLn6pueXa1wP1ZhnqfRYJwhq8i4LL1zFnktGXde",
  "key36": "3dqbhT64Epv6ejyP6uSEcPZUfpPzrkszKy5wv5tyezkjT4C3sREAXwdPJurir2TQCDxFZe2YQUfTEQEUxGt58o6J",
  "key37": "4fyp361f2jZjVmoFtMUcEXpvxyGdmsvMAQeEGfptFLa3ctRzr4Rng2QSdpE8wshbPZmxvrTbumNwu4v7NPWsLe2T",
  "key38": "tw5gtCocdtdcBtxzRv6nNp8t9mpo9F29LqA5wNAAMvS4F8RnCfni7jvzw3FPrEEQPbzPAaTqfbJdWphKe6h1gF4",
  "key39": "3DhRgZkjErP3JuvW7PpHpCHjc4ZU1YfGzfDY4wxQqpWZmqRRxdFP6TVwy77JY9ZzZu1DMjoehPYxwurkvGabjBEa",
  "key40": "4MN7MsmqNucChsF6h1uC8t9iudqWG5eeENEs3oc3KQ7ExmjJHmpnfS5PkDmf4stUjzTKrBb76SBLik2KC8DMbSNd",
  "key41": "5FGv8QY9cbZbXH7vrb4bqkq6VN3A7AKuzbJJLt126ECwDmS2zaXX1mT3BGtWNGFhGj6DBwtVTmo3TYTmFH9QkGnR",
  "key42": "29UApZeNwFW2FfBjDoeJQCeAUqHn7qhvtsrS3nSUfwcCeuRDWTWEpFivLg2qsLPu7MZYwW2h9JQ7GufvjKvvNiPC",
  "key43": "2e4pV88ia9EUMB1bX4GQc1jAXXA3VoY4dYULFUWBHLjLRjs8KpfnVcTAiErdRdErStzVrcWUN3dgwvFxEkznwgrq",
  "key44": "3kaH7MBbqdWEi13pcVVV4dQY5MhnGJeWV4iFYMYDYxu7fs3yJNm7ko7KteJPBTa6WfH5VuxmsfLz8jt87mUs9Rgj",
  "key45": "AcJeGP97zcJJWAaF37WfZURTZswJR1u6K6kgSJnxMVFWgEk5DFyMW4Evu23MS7Tusu36Vm5SZkMqbo6iScTqps5",
  "key46": "5pPPZDs2tWyWDHMST9hcUx1G3nNVhxVkrmVv5Fozob1KkSy8X5sJXq5oJ3KS2HFtWZyodVk9WJhfiwj3kTjxSSsq"
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
