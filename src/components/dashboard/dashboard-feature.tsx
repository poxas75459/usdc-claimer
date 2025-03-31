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
    "n7cB2wiQHXp2TcgTdDGAxM4SRVegRZjBoBkqujVfzKGGFdvTEvmdjN3uCrsaAjNBg5M4t4D8XNmyL1diyaoBmE4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TKpXKDtBxTGkEy6EQKm2V8ZqTmbFtJZJG3hQuvURHxTwaQzsU68TRqWk4G3znZg1tHotpcG5Jnde7JDLHPDXEVi",
  "key1": "UvGSzwwS5VTKHfWXE7vYp5UrXj1M3qQ7A6qTtsHwK3YTX24Jj7DKX6qosquEfUVhNNJ7RZJEgtHA5hHyrV6XaoW",
  "key2": "6dXr6DW5i86HTv5imKhD3wu7oHmHpsWFdRJmcp4TnWXhNXWmTfc86Y1dRRXZU1KmCW74aZR1B1qfC4CteHEMdPp",
  "key3": "2itWfbGVkAmwBPz8Pd6NSn4vFm1t3JWJsMVv6X7GSzy6URyEqB2S5GfEgZNzP8YfyT6ycdaSd3ebkusWmtWVNp6F",
  "key4": "JHQYJjVKGDSChrvXGUaV4cg9Eq2yCfhn4otDN4yypAeRi3BV4ftp4coWtpafHzi9UrMdep2PPqhfsmdWZPgKN5i",
  "key5": "3m8DYLBdRNYtkhzeMaW5XdCVJBvk1JUs7aiHPtYcuPSthZ3HbTaXcSF9Vfuc9gwWz47pn5H6afBMDWeSekVhbdAS",
  "key6": "4Dt4HW4KgUAUzFSz6cEtVr3c4aycAkFBXe2UM4GyeeK7bdDvuUC85qj3dY8D9hmyEeAXB8DiaEs2LtxN9Wvnonix",
  "key7": "4DJ6wwMRAHZjCKXTn2yRz7JQDQW8bRqH7Fq3A7JqfbsUfYAMtq9grruMxxwHJ3zKpoZzTVswLDbf3rZGJ3t6Mb5d",
  "key8": "5griRBfVrqnTh2g44qnJG4fxPiYDntwoCEiEkj1DxkPqKAd2D29Y1NBHk2XCeVBqQsqxBcuNHsqnsQ4rnajMSQw8",
  "key9": "2kpPpZJ15FP7KNuBiVW9aGn58X15UQDAtxQ53MCN4Mww3Bq2u5KMQTNdAu3oZ7XFMKFP9tc6rsbqoFRmui5Q5bQ6",
  "key10": "2kVpZnc79F9jGBNNGMmi12UJHhUDDQZ7K5RAqkNb82pZNFtfSYoG1YT2mMZV47AUoSbXVAjKLidjSBcdHbAH8QEn",
  "key11": "r91mdgTY3mKCnZC3K8USFeDuxmUC2k3rb71jQ4arti27ZMrUyVCEpS4ETbfo1kTtgFE76mx8z2XdXTdYnaqNoHG",
  "key12": "3HuEYEPebbVaMMvjZUc8sDiTGwUTC7YyDez159Sar1dnmgvUiyZz3jo9jJzQcVjzaDcKEDkH5yAVC3KZXmXnoLMg",
  "key13": "47FMHnFMWDcFiWTyMwuZURdURvrueJbPPyEY185pypcp3eFssMnL94uvCqU9HRqEyWNVPqivxkV3YiCAY7SQUyKv",
  "key14": "5s5J91VDZwszUGaudmmyoiwuyfwEm2sQsZGMddzzcmS7cyTLEh2s5oP8qAD1EKzHpaNkqqTjNgGgYz1vTtWu8Z9n",
  "key15": "4Ys9KHLMYDsFrC2kvXLB6FxSuLUGdzimJQjZxYxSnGZQ2kwWHwhXnzYy3qvUQdTi6w1ccUcrbeu5E17CN7Fsx1B3",
  "key16": "5r2SzNWsLktbo9e8uqjYGCQ46ELXG5xVDWTcyfC5n3ujSqvmVpuv3mb73Qg4EGk1JhtvfhKEdYMWbTJrXasqtp1h",
  "key17": "2LsntJQoG59Fg6xtWRrTVF3SJ5zwDDJNn5GMC39f4PaLLoUkUnXDeerKbZZ8Vknyro9UY5PCcFPumVefDegTQ5te",
  "key18": "2Sz2F8QFh7ygQeJXxCCmaAtAV4KEfQgmifoNo9bv8D4dAUT84zroa2EKJU1WeGZmQuFTK1hjAgPxnmxhb9pTx5oe",
  "key19": "4e5A6TMeFJSmZ9dpnrGkbyBatG4jphqAXmo5B5zKMfxUXuwGctBAAa9ZwDTwgq86oTQMzJkuZr2CHgDMe85rTCHo",
  "key20": "4mZSaSM1ZeDJBDwaaHDM41MkNKWSgRNtohpGtrDHy6Dn7MMg9W8Hy2L7zcnS3srVMBXQswv3CmboysuHvSYhs544",
  "key21": "Td84Hx47i1AtgrgxhwazrNsaQZeMR1nud1bmAHenLYi1pSCQUscFcPY9xqxS3jwPe1vmsT5mjVTnYJzdY3qWkis",
  "key22": "4HCXEJYjeVMo1ULqBdupCGc4NCG8xANWhF9ZdYkM4YzsjTdn6aU9qyK2YFo4q5zdkvaHGHEwUwgdfrpikXtbojBd",
  "key23": "7jy76goFzfckNYpcUoeyx6yj5oTuq8QdBnr3VKg8e73SNoBT1XkkJ3WStdW8SUK3ANJ2MCdANBELQWbT9EkJwdU",
  "key24": "4d8eVPDhgjwonZzqzHLRMELs8TN6Y8GmE6UVR94Ai3KENKLVmMQ1N6C9HxLEFaJyCnsbtgBgeyHK5dEEidz7mgis",
  "key25": "62y3vkzYVkyjUj1MrZEfV3eCjeJHeVA84KxVBThmCDFVeQdFYpcFKpfbBcPrzqcpJrBTbiDtkL9D8ucfKLmUga3U",
  "key26": "24Qhz4rxYArLrXdNjNjiBwFWQvjwg1vo9HfHGGJq2ziSTXzr7rjcq5LakM4oK1RhTZfTJUQZRQ39QWfv1mhh4xCX",
  "key27": "4hb3dL7XUcdRkQYcUR5jzuaJxtbZ57wHpwK5dVJswQMBgRKeTMsTvbffUTZj6RUcJtKJ7qfwDqA3tr7PnnKv32He",
  "key28": "4Ec5MSEy5MnWxd152T474YoAfrvEYPhWcfZUnANnrwQJay7BTzjiuh1fUUgE4SY7h65d42YLXHghTd6eqd7C4KfZ",
  "key29": "Duu3kWx4UG9rkX6Jq62yhuNKrBhc5bU4Y2BPfrgstzYzqfyUdfu2hHMejjw9GunQEaM6WJvWhvgF2Egn6WXBGph",
  "key30": "317csbuVxBK5TWiKQRgQiSFVgxYZDkMuLA4Dx6D3eJjUs74JTKkmwBMhWsJf9VSFBSh9hHQpVEq2RPR9njdwZ6hQ",
  "key31": "4FmgbaVYx21neWnk2zGUxyyT4JXCcyrwJeWLThUdeWTRv2CcBykRwmyjqqLUschk1Exhv9RBcpsz1J6ftDjiGsWr",
  "key32": "3vTBXxAFy8RxSxSBQijs8QbjrKzWPZWRKkDGggdBS6eVj7xmLRtTsvfVkZegqEGsKwYWSuSLXh3neQ8bt4afYCyD",
  "key33": "45AHhsgMFtW6TnTLLKrHirqoGmPFv4PSA9a841d7AhpyVuGdK9Mhpsx3pD21JmQMGv7yb8dZ8eowuDqSjEH19AQu",
  "key34": "2C42rtQ4moFuQfqJbdSiFqk3LoP74G9uVUwrur72Sikm6zvoycFdn2xYQ5ag4pnuwxFGZ9pB3U6crNdnsTN2JKSr",
  "key35": "4qAR12LhiHYrQT37qTcmVQYVn3TdXwPSBMnVUDzeQ5whvShMwKnVrgxTBMauGgdgGMAGhtfmdhW73GCTEoB9Dqr5",
  "key36": "2P4NZre2pA655BJy8WrPtgkt1enEmsXGkPaqJhgUWpaSiz8ZNzXD61dBWEg3Q8nDXZRuB3rzVzvDGRy5BMSUxoLc",
  "key37": "2Qc4oAajQqDhZhGFWXaMGnbqteW49sHKTeEj9YZcJMWp22qmF9iPXHeKyRhGWxP1VbzAAJV6p5e8aozsCfmtHTFP",
  "key38": "2rTdztZUrzDtY97KtAnyhCRubSnPc2Y39gvF7pa1aJTBySQ7Upwbx2dN6zikSfBDqaGuEmNoNNZEBe4XEYrZHpap",
  "key39": "35sa98jBbmLQSx7wi9BVCyxdBDR5MJMyLhCpYHGbKdK1vg61Q4dNr71w42A23u4poA27LvVazq4HDTsWii6n44vj",
  "key40": "3wCDH7XsicjnvGfMM56RLj9K5A2o1XkBFMLG8W99HbV7R4P68ujWDcNtCdzbJ61yAV6Bjn4TdmVaSH34UfZUEkQD"
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
