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
    "GQs11eysNV9H3K7uoRY89kdnzrRNjMtAiWfAxB9YPYq8Vw42JDt8xZPTYFcgBFkGY9AAz9zzUZNgbNDkhpyfwt9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4miowNgbbxXmpJE1w5ofs343pWaBkbz7FBXRrvPf17rcpN8UYBii4t3TiEzzdPAhChehvGmdSan295weAaAx6EU",
  "key1": "3P3XtzzgVpwfffZEwh9nuSdBhg7FmguPAY8mmfL2spVHNHaY3Rtg9Zej2SpjjNNdYGXo7rzobuXXD7a9eSn6EoZF",
  "key2": "3EKe5BPKTr6FxoGMiTNRd3yjTRG5KVf7KRYYoyNGawrgAFCuffa4jKCbi3tCFsFcUfVT2X1oLEbpeMCLYJ2yboKT",
  "key3": "2n3gfmmEBE1qAWDPrkuqMJgsPe7JgupGtUQCzMCP1u3mefzeVL93dJTg3LtPoz3qzYXR8fD5JtYZNLJDszGHcjTU",
  "key4": "5u5uJWGbNaST5ptr77P117eGxnmdnqbu9wpvSZZPCoJ91xfGczK2gTQL8McxKPAnUnurU7tRNRKJuUf8kwyKzLN8",
  "key5": "2KFj7w3QrmPC8SUB1g6TYi5sgcRBSNsRR6RjDwMZa2n1DGwR3GDtQVMnzrKmsepWreAxNvDY4Pnr3MqvrV3uguB5",
  "key6": "4veLLF2aZQRJHouFYyuxfTfHRUmd2Qg3jhBG59rnT4NB3hJoBiJ46FjgWpj9c96XwLN9xHPSrUFogPJQeAcHC9i3",
  "key7": "457jaJhaRjL4pJ4HYimAfKUaXzEWzA2WEHKy3x7eRJehimdHM61uX7yaMjirQ9gfQ3CsMbSkZoF51oF2sV87rTDb",
  "key8": "8Xwjo59WJFzTwfwkFDCkZj2ReFwu4CFiEsEoH1dXL7FtrfCM4GxFzU8M1mNjCeXVP1Qz1n54JMQVbmm6WtvEkWV",
  "key9": "2mwQEpiju5KfCsPfvYHWRaWRzpnSWfZps3em98mRzZQCYbf9QAWE3JxgJayne6AgNBUuFVWNEHbSogcQJ18JxjyY",
  "key10": "2GV5kCkgH1tKTUMuMBjdpHETUZQWjSQvxsbmLFSF7v2nF3ogGEVjKjrrifGBAFa1gPrWkvD1i5wVj9wgciDFwWpR",
  "key11": "5SGzhVC5nZBX3eMRr4VWyYg3nVHNpZcet5Z8LxwxP3iCRnpuCe9KLvSzid6KjbhryrU76JqnSh4xAqe2TTMDugRN",
  "key12": "2Ltmdwuda8WEshnqsLfG6WvEPSSuW6WpRimRi69WdjwCauQjfNToJAtAn1gYMa6YqFi2EVpJgjkZ4BmSHW2VaopK",
  "key13": "2VbGtvS9PQXPiKRgRVzNfbYxuqDfYwLDjE11N4Vt8TUxwBeE9bZx5uwLMWMzTWuEWxm2uVJRc7nS93wcSvJuaMR2",
  "key14": "PRUV1k2yRW1BC9KyDSMLRePgVJ2pRZdyZcpfB5UmEQPG5weEzA5sjEobEKxzubDbgXf9qXxZPqNNCWG1avLfciK",
  "key15": "4VsnjNbC8eRBKL5zNRCxUhFWKX5M7T16WEmVdPfFFoe3Ahsc3u2jsT7xkWFpqwNGwAVEEF2KdUKC7AAB3dXgF6B1",
  "key16": "2QESz1fEg3H47pZ1DBhfc1Kq5m9xCKdYTuuobet81cvWN2B1NwC6yJ7DmBfmSo2ja5jGb2vhhT3w5snfqad2gxR8",
  "key17": "39Bbwteciq5vb1Q3K1XiPTKBsPWbhvJ4N6d84SxoUfNmPaA1DzSF48HnyX3HfoLJsaQpxJMN62Vg3hKzSDs2ZkaG",
  "key18": "2d2ffzsFjenr1CVAnPVsfmRSSAFi6YAMDMywZ9BZ629uAGSqtRTG71vyjKQFucf7YZbAkMCszPfwxN8wuY83qepr",
  "key19": "551tvGe64AcBDWkVpbiRxcL32xd5Ft4frzcQs7VM38ADmPveY2dnKXR2L15TPmMkT2N4WNSF8s9opyVoKZBDTxcz",
  "key20": "roytJUi2WxjagqWVT8P1BSXjfKjQ25RSaRjkT9weSakpp8bVX1gVDSW6AtirGKzDgvmou9LvNgZuucwGgfvU8p1",
  "key21": "3bCWUFTqMU1FA9TVRdDG8NV9k9rsSgzBiToYwLg8fhCCbQGAofDF35Z7ELgobJfDYaNrAnMNHdXDUUFD1EhY9qCF",
  "key22": "SKYeuM67fd33q1VjYmCGeivQaFU8r5k9zVyrcumJ5JysdLSNNFALPspoVNTkvFWhNivvppN2WwnH7QiqdrDHVbP",
  "key23": "25SNnSWoMfek1wXhU9RcPLZWmxwKVkJCyD5RQrAeF6w6sz1mhhAqjrN56std5BeQMxanGUqesZpJRaJdJk8R3wrw",
  "key24": "3YS9haZmhkpgnBy8p6k7BvmwhniZviuGFqhq82YoNE4XH84anq1WUZkN563h5GYbK5DKQFUAxwTVyW7Gp7WSgCLc",
  "key25": "VEE8HYEGWexMP7kYrexQKuhC7fDoe5gYciNHbV5GcuCwdXw2TxZyfTsogt4Q9RX2xcUiLtNg5PFngN1LSjHd6iq",
  "key26": "4q9HrWBwv23Too4FQwd5iv3QoJjmvjoHUy3L2QX5QDMecJPsNdXG1nNLRwm7Y1UQd8NXev4g2XHbm19H9XoGxN7D",
  "key27": "TcTygoU4vqNa82mQCVMMRce3E32VevFx3E8Ptx5MhDQ6ousSRAjBBmUTCxdXkQm5Q38bxYirng282zfN17BLguU",
  "key28": "4WdcfBLqp4WVhSdNY3H7vVQ1kVeWGaraULqbqtKofc5ZQ86FBGvzy2ZnppWJC8285VVT29JEXNfmhrLKxWNeUEDm",
  "key29": "2bzVV7X1gxs16xVuNvUZDU15VEfLEQi9r9mMJ4oghqFmRgm4wPRxATVdcyZ4Rx1hWos5us5fvoNxbjNG71WJu6V2",
  "key30": "3tcofwDdtGnnUkcgN5j4Xvnu1nYbGwGSo95r9D62aJgv7zkLt1NdrdA6JQz7bK2WmjWfq3UyuRzUgvbwjinkM21f",
  "key31": "4CSWLVSvejLjjrs3vp516w67b26JzA15PFnHEjWNtaEdQEyVwcfDqzk14U7otmzyURLyCLdGjm3L89kBiCTjfZYg",
  "key32": "2ceMLmGAxfWfWc8Va5Zgjg5kbwM1KYUiqN1XP2A6C4cD6tEiUQd9D8v6rx8P7yCqkhJREHDoSss6zWQsw6muwEUh",
  "key33": "5sTiRgRZKJww5KNA2fHPAbvGkBZWGznMppo4u6he7EwYWtBFoLjzCmEdPcGHbgSYvECKKvgyJJwzu9V3KeTCTMJL",
  "key34": "25LjRxriZTfjTmVQ1tyNVPPPwRDLQTPedg1Ju9Pap4kJp4SwawDuJG2YfGda8BHaJiAcGZTiWVTiSKvAuPuzBXTK",
  "key35": "4b4qL544kuuQfSoWKUs7wPckThhxgr7MKjWByoiQBPdf5yK48h287Z55LiVyRm2hADZuPsWPcP9zRquktUhCgegJ"
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
