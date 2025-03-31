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
    "4wXHc3yDRudf8L7obUiTLG53BC2zC9kWiKLCbFHndEotugcfPzc7Kxuba2DVasur1BsPWtBKjjGRfPSov6WY1zAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YkxHBhEiRfLFaGDLJYhVX6vr38Q9CL3wg3XAvwH4iX4HTB8K3DjL92qB9EWvCN6fzDUAg72pz99wbTT3bx8jNXc",
  "key1": "3WsJnrhs5gFTMLmoNbN9WQ3L6PXiocMWLgBVPK8GKgBQtfdTucP8JnkWqC7GyfhGmh18fb4o2K1Bz8w8aVkPYysA",
  "key2": "4tPLyUyGocEhhHq5w57R25TcKB8ZrtQ3SBMQ4JSPB41TcoVvZ97PezbCz6VroxoKyzH1ceS3dWjH65kHPgs7P9X7",
  "key3": "64qfhn1XkU56tFqHXRvFm9XD3mCbmuos831Hf89mQqk2jKsHPDXQHbv6JRfrDzK21w58tfJsHa5kgmjUDcBWnoww",
  "key4": "3YZS2sxvXKsCU9ofm7WwVKpr3JzKaZo9o4T5SaUpddE1jkJtxf6CyXCMtWbsF3tubQGE5NLN8LZ47DLHgzQY5Urk",
  "key5": "4hVwTHEPqViPYDPccnfLMyd2rwr7kkSjiCAcChtKfgqbEa4Ab4sDoh13J4TKzSgzDPnuozVPD78WGa3joG48Wo3v",
  "key6": "2FkTfXw95XtkZ7hZi6tPxo4Mf2W9ARZ2i5waKTL1e6JYPKtWwXQGKGSLQAgc9goYwxMus8Y3AdhmosXS8o4Sgfib",
  "key7": "UUJJeCxTWLQVkJ3DCZQNSptDV2HsbxoJRY79XrDUQvRDAr8ywdyhpWAGb6zwFX4bEgPRbAaVvcXMUbN4XErcgcq",
  "key8": "4XzTRJw55BY5PhSN2k5dxX7yvwLhU7E4jtRnx4QC59vZLrvddpmoHUrF41YjZphkGr8HxXvEvvNA8ZLzMZDWuNEx",
  "key9": "3xwnkW6LwoCTTcTgp7AufuikXddMTjbiLsq53msFBLMca6M78G28CVgAEjz4SxMJZs6Xqetcv8Vd4pPvmihSV5V4",
  "key10": "5BNVYb8dmvDH5ydQdYMFrQMEDaqte11qwq6iwBaPJtFoScCa5vRgrTpc3yb1Gx6BNF3rbYhHZtQyqL7yref796ph",
  "key11": "2K5Z4VuxpzkwPBgDAJ1YKWv2q2n3oPkLRViAjo7XRb1En7PqUAnm4j44eMUKXqyRWGt7yGimpoqZjQgwmBY1kee9",
  "key12": "4AP2iRgWLPqF6ba7Enp2cGX4kCZRHKyrLxvxCVPV4f9ZKfr9HtkMLUUCGFTo3XNUDJpY16QDDvpVtZ93HH9x9LU7",
  "key13": "2fD93hiAWLCQYogKLmSYXa87MWm2nxXxqnuzM7mD99oh9NsVvK2mBTBShLdEc9wiCPx1qiiaFJ3Qh2N6yVPD65yn",
  "key14": "2eVj6UVRZcrizfM6n3bMCLi3D1CRAA4G87yVpcdshZkFK4cysp8qgPKi3FDyUHejRqTExHW22kmUcrwwuTzbq1J2",
  "key15": "2GGcjCBgWzCweWCVYRgxwvjACqVoyyiXSiM9fevQLVB8tqjsAupRSVzUaexcDKshT3xYakbewtBNCSUYDw9sPMmQ",
  "key16": "37JpQe5vPD5bgCjapWx9ZNcRr9VDPNKkESRT4CRh4AwewUBRg9XY8KaU27Nse4KUsQwV6BghZeNd5sSjFv3ZeF9e",
  "key17": "JUvmeMBe4UeHVn6Mq9QGexLeZCBJpFFWMckBmhzDG3YavTYMUgZWTe1q4wocNt3AtojNg6ez5f2UjBroyU6E7Vu",
  "key18": "2dFdfg2XosY92GhdaUrHyFKBfwU6h46CowFWTrRdiwb7mMne9sEneHYEg23CtQzJFLqKtV1nZq7o44RfA8n3vjNZ",
  "key19": "7F3UiJ48NtZuWvi4GG2FGza2VfSBRQ4nchn93ZscTM77XtkpyYYe34E3Mc5ymKkLotWYmMrM4cXT1Bb5kedd3NT",
  "key20": "mscAbgqSBW337ZToBedq6XNFqBWwtfBsaBTjmeHXXfaBbANfN5cWFisxAk7w1A7mZzKy48m2ZJk4aPhEMz5mMem",
  "key21": "4KV2yEvQcEH71gzks6PzJ5G8QYUoSgVNfr4VNDTkPXjuGYQBptSJ3jcgdd9hWYdkprQUVmbN9EGBDrL2a9Ywyf5v",
  "key22": "2tbAaysJuwpv75nTEHyTQV5X626daaSnCDAtSe6tV9w47PdPPkyifxQzHxhrKNmx4zpH3cFZyKtq3HGqJo2pTquf",
  "key23": "5Jfej7mArbd8KxYN4G1Si8osiB9jnxZQMrYAoHW4NA9gfvhM1kADr6WPYhJjC1w84iMQ8UCW4fie9QPMWyJvQHY9",
  "key24": "2CUJrvs2yWzMXAXwFQA5jTD5pppcN9W1VuwrjbZkuSy32TT6Na3GHGa1pnpAt4F8Dxd8DHguc3SCgN6hdQCSoNY",
  "key25": "244MHDic9ifa6oMStk2YE4E7gtYHkAQbmiotwWtSCMd285qWutxqPLVqH7D2PDWw62YkgXvFPrw49qLqRVi45V6S",
  "key26": "4ATyx7TBreiAfw9dqWkjhTcGdR6UpLLmUHp3XYAQxykeYp9cizQuZw9GEwm7GMcVY5mr9w3u5KX3rNMNzgqmw5f5",
  "key27": "347TidH1K5mrDX8aJJykg7qjRKRQfrDSBZsmbWZnUQF1qbfLZVNXd4EKSCsZ8vqHoEWsDvZiCTQEzBB4iREp15mT",
  "key28": "3wASzn8fR8qmSsz9DvL9whYJTpKaTjKiDnaeHuZF3JtRj7WzApDwvEjJqMMbb4kfUcRs4BnGVQbi8r1FJvhGV16C",
  "key29": "61PCtYg68CVbbRKEUspSKkHdcfmcDd98fQHs6hc5he26xkx4ttk1Edsv3qfHSfT5KyqA7tFwUuhjs2zEi5yr56gD",
  "key30": "ig8tAdeEFuR3Y4HqGyv5feUAVXJvbzAyi9f3e9xdGagGfqB5dvPYYugsZxwtkEK8CkDETC1ekNZ8i6V9NJQCKvf",
  "key31": "3QxCDdHZS1phbaucLov2uGLA6mqmH6n4vc7woyHvk4YhKmMAquYu7hruYgY9WvEVQThL1o32gboNp3kFqNjbPG6r",
  "key32": "ex3ogzGkBGETm8oNdkqyx99edmfyTLsfmvaJA8xpiducidAhn5QXfux7EFoNCQ46YjZDsiEFAswgWM9bFHrHHBh",
  "key33": "kmN6HawqGjA2mUDnE6Rta2i2JTbUJx6f8Hn33bhTcQYh6C7TjrX3NdKFmpzo2c3Sukx5REiwCz6JeuD5CSxVxzs",
  "key34": "2mhXkBHMJgxGqKZPzFW3jdVQzTthv3PPM4gs1ehy52LQA361DpaJxmcMp22hyXTts1Coc5DxwbYMf659ipH12UnR",
  "key35": "2uN4j41oS3AexYiuSTRSDFH7Kt2o1iPfv4aHBszxmggpWnDyXVvHXXByGBxT1S8L5i2NMQX9rEr5y5eFE5JBy8an",
  "key36": "4fUyuEy2XKZtXPKLDBaqMZJpCacvwWqbnniz9u2jXZuFSzoL6nFgHXuvwwBcjCAM6QLZ76RSAmnFYLYVYaE7sLzj",
  "key37": "4Zqwr9UeKgctdrrcYynwYvT6wKd2kzUhd5zogR4UsQ3dwtZNxnVUQ96UGGPhmvnWeu6Zz5cWPwZUVeyEVrezXd8V",
  "key38": "t5Zx3KJxM4A7FmdGRQ3jhiHwbmgc4stATtTPYT2M9iz5gnx4Rar3UntAUjNP3BiKKDuUBvtAy4UQCdxePGmWwc7",
  "key39": "5xSLKiautyqeTKfFGaMWnJnCwipmhiGvPDtkP59WAAVoWDcsc1kbjppX42iSb4XdpWdzQWoo4SgqULGuxkZiR7d6",
  "key40": "sN8CJcoTuca7mKdT7SGqBdHWL8y65euYDe4fCQRsvZT2VwjEVcnMMCFikxWrwrzWVPixpq5yFLcoHHEbRoARsoN",
  "key41": "61yHBUa3jTkNd57j3iYxEhBgqVAuLxAwGBhdiedFMTdJCo3K8P7DrkUCmqB8sR7WmTqgEoutf268A63iNr7Gij4i",
  "key42": "uheZ5eDb84jJr33kwnsbdABFeywSCtKu9FbXSDPGcbbB6nsSNMm1jy6mijgQt7pBmtdpM19Z85HTME9rXVngEFn",
  "key43": "2fHJfBZULbA6wgsiJqrD8ZqDRQksCMNv6jMVBgFHGbMF2xWRcCwTWCp7ACVe5tow9cCZhmkbE9RcGFJcbFWvVn99"
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
