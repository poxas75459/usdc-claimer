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
    "5vBKMFBKZjW9g7WnHGdbNbH4ZFpsnbfLFkwMpdcT9i8zDZEt1sPdrgFegBEorYo2fLsejzxf53HEBo8sjeYWsDR7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AU2JMb1RpKzLFoAmYFtoJWTGMaXmgHGPFZi8dGTzoUy825pU9Dj4fypSQwp3VTXyALzawzNURuTiKbECrv15QYU",
  "key1": "2uuFuhqSgouBuzREA8JiKgUmcfiKPMd2ydvCT7dAWrVuxv59bdbg8RQfZLqnTchu8U3STiZiCL8UWczwDCc1uJSt",
  "key2": "4czkYvpZ9Xg9Kupc3UQg31BEs6BqSYcoKUmyDWm8EzFbzP7qe5DySqrY3bfDBGcUYrvzc8n86XQdgoYSNBNUyfPd",
  "key3": "3mMtyN7p2czmXoRxu1j5VceiX9A3aDB89Nknw2LJEL9S2zh5wrrS2qdtDBrRPp5a98RojFPqac1cdUoPeo9EN58W",
  "key4": "vQ6uTvVofY2B1VhMYMcx5EWSeH75386mEZQN85B6rJqEN85nYE5Q6h8ubbiPpGwgoFDLsABnKBicyjrJraaGQtA",
  "key5": "2WDKrwFUgbufpSG4ADxKroj3Js7CgZncmKJ4arSXo17KSsBPvV2wHbZRgsyD9iKHsTCaPW11GC75ZrmsXM7Rc8Zk",
  "key6": "atFzEkoGujUXBcajd73EX3hA4ueVSHde2PJuB78cCzV7zWYrnjQNvfiu5dd6T8t8ec51wnyrjHem5xdzybLtXyz",
  "key7": "28NkRJLoDaxicp3tnGSLmF8HHrNMuFtbJpGBp4vaK1id8RH24CgHE2CNpAmVjk5XVADzZqFMjYd6Jv9d9aHvjGQh",
  "key8": "57CCSW4bxpE66KYzFezXhc5DpbYdKUgeNTTxsXS2epSpxxXQPcNV2CMVM7GUPdBYAgA8aZ8LfDGRd8KMYaA9us5U",
  "key9": "3nda6ag5TcaJS8Niks71CP3eqc9hSzeSofuz26iQ48Uq1RPpKYEpAu7kMwZWThL6vgNaK9tzgnQERSSUEmf9imF3",
  "key10": "5mknXEj8KTkey8b9Rz31kHnf6md8As3B6SGhy46dfNf8js8RZxzMsSQLd8iNozxxp9GXqyNsprfFF6jPN7eBwQtK",
  "key11": "3DT7EwyGaaoRteaFz8ceV3vEVbnbBxVtHmuEC9UGvffyAxYeoq6HTKaaVxSjv18imZDTkk4VrLm9LXKPhmxfXcxf",
  "key12": "JeA5gzJbxVvYSa51WDn7tQTuzGJJUeL6pMS3aGo9cEgxeb5ZP5KNGfjJVe9WXhKKv9E3MzUFgRTdqMDV3SGUppB",
  "key13": "4EQbGmFu1rV5ic7tAmSDw28fwZhceNoUDgSCZVS1oydUhDPkow5fdazXfH6QbKHbpNbMpZJHDJMN676GEwxLuBc9",
  "key14": "95bkfkxie7avvL1sFDBnFfPKC2neT2Ueu9GdEHEridsvCtUx8voiSn2xsZRfDXePL1kC3GfCQ1HmSKbP4HcwVpT",
  "key15": "5WkqAo76cQSKVNbMh9s3HxxdakQFbiNHTDJZ9GtPaorhRX9H2YhR4M7j4yEG4Hq9jyY6UGqAEhKqR9uSNZvYR8Bz",
  "key16": "3cDTQemEpicKZk7mNp4KJnyQaxppe24maGzqY5LrnY8MNLGyR2n1sSC68QRfD45MeeWTM3yQ1LhLm5fRYdWiQ6Bq",
  "key17": "S3Dhm6FjTusupP6R5JiHTWcm1VUHtUJCgYrGB3GW2UKendLMrVaJ5NNtdtn5TKEsAECEWmtkY36D3aw651cskpm",
  "key18": "4vAUPTFwD8GMyuXNiLMpCUcYyKzWvpQhY4JVQaDmt7NUamfVvZQDCHLj19J5qQFCdkEfb3jtRMYHweKaX2wXdaBT",
  "key19": "4CtkCf3pJjzjxgTfNAXpLjYUVG1ss6TjVH8M9tvqbUBPyFH4yeqD6NM8yRNsrts7dkWLhfmyEJsc54vEMjiBtVjn",
  "key20": "3czm2deiThrCFroeuBw46DMBjTVsWcZeTkN5BrwCUru7xwsyPsLZG6QRGqSkoaDDyPsgy5XQ6X4toegNXGcorP3V",
  "key21": "5LRUi8Vh9ycC4ZMqd51YhrR8h9oE9CZeftBQxzXyC95GGFY5DHdBt4iPVBJ93juBGjSWQWNvt66ipaktrZTAqX5A",
  "key22": "3mFmCZvTKvig4AAJJTfhjTjgpfA6dp5HWNdrmbBEQGABjemRSEar86pYbR79jBreAHA8dYjHEHL5vGFDxBDxJTna",
  "key23": "4ZEtbEtw2BP8qQgdjQtvA4VwCGCPu7J24BuVaivMSqPLkeWcBrCk55Z3pFo98NmHWcijDtu4SuK9C5wS7QGqSzie",
  "key24": "54XWQDGVRXuVJMiyLdr5qhLjSxZLLtqdjKSgB2CzDt76Mwa5y9jSF1nwdKhCnwQLCrzCwjXEkYkGQ17JRnBvG1T4",
  "key25": "3p3pPqk23eJNpHkGcJgSr4Esg4JjgUs6495bqyf3HmrJMKAvEjshm6abWextxjHo1iRdEfq42TvzmZ3VgKEndPd7",
  "key26": "2n322HxtinNiC2dNb4sFyEgsThCx3CoUhKviDLF21Tu9URm4eRD3yRs6MR4VfhavmZJAorzHep8tYmBG5BPTHXC5",
  "key27": "5Zz79RP19tbbK7pPqfGs8MFydLkZZhRtxzjtKMMe9TFoVhVgKZmLWfgf5MWx3zgPERnxc3ZJ1MuAtF7wPNNwnFvD",
  "key28": "29D8eMKVnLyh9GbMd1rX9qiLc6o4ybUXutcwtU8o86EeiEZqVHQgwm4PUUkgQ9xp6HT11RHHx3WDN9zRq34MAZZv",
  "key29": "5MmzdegTsYTDgvyMxXponSET6Wf1RXm7Qpa5rULLeXH7iHCHGk9XZwZ1ntxTRPN7u9nFoVEVi9bMRpLkiEJzFxAU",
  "key30": "4uGu6B47ULKJ1BY1pmbkGaakt9gvSLerqzNT3m7AUPnrJhzfhWAdyKcv8NmnZMgwxqBBT4hXx2DTmGUKstEV1mPQ",
  "key31": "4ov5kkFD4Hy9kdWUmmoYNAk9yDKzf1vsKyhrPBoADbAM5bWaoSVs8tCBxw5Cd5FPpQ6geg2nkQ21aPANuKPYYbZg",
  "key32": "rVjrSNfEA7AMAfjkCueE9nXPAUVRwLqBfC9AahBsVzXToPNZxGMfbSeZqj3Wbs76VjpVMMhVxZ5oAeVLKcypjGH",
  "key33": "36dpFstCgRzwMdKcK5U7UjQxBVuL7KEjw5txigoYQykfrx2bFU6cmSEmZwqUhJYJdLoF8vUSpyrZdNLKdRreocE7",
  "key34": "3XHveVuhTEQByDK3a8N3rHzn5bvLQba8biUeoqj4LySEyG9w4ggozDAPyTr5vkZqNrYNP6ZwP5MyTzAFZpTEY4NB",
  "key35": "2GqQRy8piyEFSib7tH1Vyq4x6XJgMKZdgiHd7ZQVVoGA7K5deodTXD5KKae7NE997YCafnQoXjrcFD32DXoRBcMT",
  "key36": "2XYMURShE8U3sWuGy2JXLWpsMVjArQaHgzMtQJNBvLpJinRdhSSe8pyVcDSu3TQnfKeSHzTPkxVkdhwSjkokXy1o"
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
