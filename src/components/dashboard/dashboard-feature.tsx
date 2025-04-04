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
    "hsab532so2AgDWTNW44ACjh8LE3VUQM66ZV4AbgDqx4xA994LTrWKpd7gyCxCqdAUQkr7sF1r7cL6pmSsPzou99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sEuuQ9YLEXKJJH6whFqzmRhtTBjy7sJtzUUYLzjuKms5riaFRJrYGLsK4n7U2Mtjbd4jkdbhFTnn53yyyZjhv1g",
  "key1": "HG1S3a2Wg5T4cQ1KXcvZgYBdv724aVvng9ks6Atbbk1zwyC4mgBcwXXG421KutUhL52vsAHa7gjPm1LqoGdTXPP",
  "key2": "2VRo1VrFXPNpcSLTPbpihPuKJDgGTpwDPt8srcgbYXF1GnbEifFZ2N16ZBHHQvD7co1Bs1X4WzANH3qk7Y3xaXV2",
  "key3": "27hASiD6Uv7E8wCrNf2WdGgCDNhTS5D9usiejLAA2faHgSYrztPpYdtDgG32QQVZ1fRU5ZCwa4doRTnjgwCosVLh",
  "key4": "2YsMTi99zyJ5cCr1GYRbWHLjbf8HV8N6ZAEutokd1yzcnoXNmRYNZAVWMyxqyEtv6t3ybZy6sJ3AR5f8WtAeAnr2",
  "key5": "5kCBy9mrMs99fQREwCNyB2ZKX4EiwNUXdQeyUqqeAyag4dnnwSdD7dj9u3dqAWikb6Yqc1zXM5vpNHcjKtrBRYHG",
  "key6": "4y96n11AerFyymMjh6EBcin8qdW7fyyJ938t3nnUwVyMAwiYWqYc9S5u9qCy1UhFUHPMRjcEV6oKzZK66Qm1J4VE",
  "key7": "27uV4MoMAz3k67AMGr4afP6FdkgV1cP49i6fsHNwfKepQ23X7A2CL5a9S1XsvWkWcKtXmwnq3McmtGd1a67vvQaL",
  "key8": "XgqyonbrtMVTSLjSeJZFxYe4bCS8ZuN47mux9Jb5UAbRFjR6xwrhnJnaGJbCfazPTQgy5CHH9h87oBEiXtxKbha",
  "key9": "3VRL8mig5SYE62b289DsBFwkracFEjW9BCS7CMK1vTAaekqw8rsTw2MrPsVX6NegDXED4tAVjsZeX47BptFfKaRE",
  "key10": "2MnsTAt6a3ktQUFUYWMrtnS8w9BmzUxW1H5Eb8Bxr7qCYTVB6ffJHSkYY7jvBQcvrhU39CFxCaw8W4zk8NYzKZhE",
  "key11": "4Ct4TAL4LK5wDecTARCqAHbE3WnpPJmE4YW6DWU78tM5DnchffntMQnt6z6wB3kXPqLDZ3oqGCRJaSp2znLyjgjy",
  "key12": "359C9HKFZ8a5ESkxRUxB92M9jwhERmUTVWr45Cp8Wyh3srkJLf36GmBbECFy1bJRS56Gf4dJiJdUC6CivDbooG2p",
  "key13": "rtL1mTvi457xM7pqoQGQWjoAWNWW5Y1kvUyzdPoWtZ6kiXfDqAtC7ggviTxfwoKeMWM2nZ9qMCq8hfFpjCcnUnZ",
  "key14": "2GHzVttPWqGoAEzVSuBE8aTnN5c52p8vRkyeWGPBvEW2JCD5S1dnebiCbLzsDA2FmScJosGqZraWrmj1iLVpPvJQ",
  "key15": "3TWwkizsfLLFrDFnthQeAwLUNZCQ7LpVAC8FaxyAJgWwHpCnSFiRUKbZYVKs1qvq6bmKHjJzRAFuesqJBp6MtEYv",
  "key16": "4XaYq7htEdFi832KfzvisT3cuS9bsYKnYVgbFzffpRQwBkWqUaqV55DmnftkbpYGcHFU6cma2Rq9gmgwKkce3aEt",
  "key17": "3Y7hGzx1Vo1NPidAicEizqkkxRuL4YmwdF7UsMjcTuQdpyH7Jp57nM9DJUSdfXAtGvnLLkvJpuAgqQmJ4bHsU4DK",
  "key18": "4L3CqPDe6AtRnAKNAPjgqJzAKU6dAuwyEfNRWmXN5oJWTyXEBNfaavREa6PW7KgMhiGeEknZaRp3amibY2Yj11w5",
  "key19": "564ePYEhvBNAUobVsYk9tnTQnNW1DE8HWwFcWfUGmcZrzSPfQKzksSJhPPKcAHxWrQCuHfoEUPgD63q44v1diiGz",
  "key20": "HWwPCMWJ3LrjhKhtqgS2gP4W733wiez7txkka3VZu21VcrsfaSDyAxVTGbCTKi1jWvtBWnrxv9eAjA1J1s3nEAk",
  "key21": "5JsGV1tb7UqSZpBtSSM4YbDo5KL3dUnqsugKwPxy93bjrWNx7ZfshdBYEr26H6PhEPKkbsADmKEBrZk3CcgVX2A2",
  "key22": "4LZKzhXf3ZsBnhy4xNRpy6mYzfz6WPy17GDaBWet53pw41sm4vzfPTXiszmmNQRQcE5sy3cX7Py5JEUtowAtvq67",
  "key23": "4dGzyqDrv9CegwxYShMzPNMPaMe7xpT85tzzxQQgDrB55gKS56XWSu3Cc9uUzfSvvD1MdMYMH8okraCnvapHxqzZ",
  "key24": "AhF63fWTfUrpqzLtL9jfWPAqh8ySLtF5WEMgtdBqiXVVyuRrAbm7KwwxRRRAqKewkzPn8gHa9r9EW4kirfWXsEn",
  "key25": "2ZTPBBsk4KqGweqwFTuUAJuYtfJKCMu3ZBmWZmqoTN2Nc8TnqR8Ev2VjYdWhsGm7eogKwpj445xXkV4XdtX8LQYA",
  "key26": "2XZLQc75dcMG62p7M4wr8HYcD3swUpyagL7QKXtjTWcN6RxYgtV63QTgZ9Zf5HX9wPcQrZfHTHyZ2PCAiTatPZNt",
  "key27": "65BWotHwEM9gPHKpw2MybRmv3FuoNgw3AwzypJYjVKvA4XXdgG4C9BMfewyZBhmTa3YCev1TERcvDoKqCi84B2Nw",
  "key28": "212jhfm8BoWDHD3p27h9pRgvjZ4y322pWSG9HYB5jFzuKAvsd9QAhLcMgQ2Ft7c3WjDejzYavRLt5B8hzva16mF9",
  "key29": "2EHaLH5UyhbfmsMYvixnwbnHp4op5kXmehgvkijic8DzJrT2GYcimhUsK9z9jdZvPmaiMi8GPJMzGj1fkJBtoj1c",
  "key30": "3CGMa84GLseYCCmjRtWJB5zfv5hPsyz8EWeaTZvT5JgCYAUKguw1euH3oBAr1RSgo92m6vYMukNNNAUQ9LSasMN5",
  "key31": "3KQh714WZzTdLzPPcpJoBGx7PgQAHaAp5BfN8Q6DVZf1uJcmaXEdWhVrSKBwiQBjaLW4RFtchvrCpt8R4n2Avumm",
  "key32": "3NVjemkChWeyY9om9UPWLzeqD3CAJw39xPK8tQRDbzCDLuHewPcKwB5rVmHZojw5x8GaDVj81MVKN8pYCLFMCVdM",
  "key33": "jyqoiu8K4NtJrzsw2Zz2R58V8V62N7orH1E4QgmGLLMxQVMa7qLtZto4RhY7rFP7KiQkdCB1pbhLzNkYj7mDgMk",
  "key34": "Rs87Dpiy8Cff7N7xQTfVQgmA8BGmFUu8jtGNAaj2BjsBcGxrBxxfGZfbSBAxqDnZXshisT2biesaRd1p5dpHPcA",
  "key35": "Svg3Y7dURqvLSCVvsTMndmNuzxWiiGYCfmBHFfJXmrgLSWvNNW6fivv9CP64YNnoryYPfAtz6szs9mkAe12dddo",
  "key36": "2ZSakhXj5sXB2pKQiaJA2LZR39ZS2cACrp6TrVScZ8Gst61UjMhcn6fMYT1c46miuvA25xRvPqSWy98LCXifVMV4",
  "key37": "2Nxu8bEMzTKCMCGruT7sAxNgJUV9UoEUTE7XphsT7rb1Q62EtGaP4vzjBhNrQog4FNRqrz5AcZAwZW1MdvwTgtQG"
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
