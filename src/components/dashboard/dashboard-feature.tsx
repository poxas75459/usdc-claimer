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
    "4D8TGaAxiZxTpLzu9WsKHbt17puLDwUg3pRvUKSUfofssjdYJngm1UTudcgMvNe3LoqQWSLtLN4yFdmeBqpk9Nu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tzSswjAgWq8CW7P4f4tPQ9XRsrPXtHk4Jxd1dwurEqoPK63fwrHbvMdvw1kG6tr8MWzi8Srk5sATrzyu77FHX5e",
  "key1": "4fe4XZAaChu5mrWDuHKfcqvCcjfmHhYLoFaeuseNss4jVLGJyMuwCEM9jca2mwUgruMf4KLJmY6VQhCYYWMG5RLd",
  "key2": "4LdBrskh8RBn9WPuHZiek4snztjayXpMRiPqzcRc6KXogi3FNnhVdnswKk9KdvAyUEBQgrdDHbndDNpxL2zjoHzX",
  "key3": "4QDbYrDmTe2yWFppdeuqgg6RFt2RDzfHADEdJFkHEvxcZ4jpLDBGzAwN7WnUp6cNx3UVMge8UHyedCLRMmQp38zy",
  "key4": "2iZpzGiZMbhJ6FkFFxJDq9n2g9iYSXyoe6WRLEpjTsRNdFmpmZPnSDRErphLYHaQNvXoWWfKZL22neHA9mo3DbFM",
  "key5": "5oYSPRfeavEVxCmUroWP4eVrR3njrxGCG3o1Ce1rJ1iiZbkbx3stzGZVrxGxcucCAxg9dZWxRBsNmqjhxBQNragB",
  "key6": "53JS7woN9tqdyUDJMf7m8K8NZ1MvPPSjDTqBB1YixEyVEbLyGcykVrUmdnE4zdKgEE61SYdh1dGxR9mkEAcLGtXV",
  "key7": "48rWBF37pC4z6J7oYHBJ4hmtbkYbbacePfEZzAPaZdwfoawtfTitvMWGWDpWtyRaVoi49fbkgNGrBaUN5KH69bQ4",
  "key8": "43SVNtEj5zGTwaPBKFtYBBhBqCRDNcYfKSp9TfEcuYEzWEjjXfDkLWfwDpuHYcnJxQZGoXSZPwqzhuFzBFg6TuQA",
  "key9": "4XxH1qxn1tuDiDi5YWt2ohCTRDCDGdRmdXfBeufBockyadaxgrhr8xwCx2qoREBWC7SemQRgHzKVgJ4zP15r1aVv",
  "key10": "5hCzeAdddH5kvKyMMRepubJrbrem8Qaktt8UC6Mns6Xgn57axTqGK7QoLy11hfW8z4Fg7HTYgwsQLqbp7aswgwfk",
  "key11": "5WfphGrMpfpJWy4q9wMjVyQWQMKBZdbEtEvisnsmBHLsudiDVoUStiUojbHn12y5bKKk9N4G78s91xtF3uLFgKtv",
  "key12": "5YVakVRoMZvUeZWr2eWwK4N55MCT8gBfRgByFpbAhfzDKJrH8RKL9bsNqyMFwMHtqpRAkkw7TpQpvNMkKDF18rEs",
  "key13": "4oFs11EYxU7MGRtKtMLCMgxApRhzMwsZ9aiecAQEvrLDcaHiaCS1pQBMvfXDTxyf6wrdjnA5oQCM2a5AW4nyRr2d",
  "key14": "qEm6Tbunj6QFHnHGJ5JmbMKKpDLwYnXdRj88to1RAvHtYcJEu7FH1QfPNQbxxLq4kYmbgQKjd3QghGXyTmEKD28",
  "key15": "3m65CodVT7W3VzqZkoz5RoH9VZCkVevYPEk6qGNxFeMUPYTMufhQrEr4K99yCjYabKV59A7Dw1D7Rno6QJh28eyQ",
  "key16": "3acyXJpndj3144GoetPNJ5kB2Jf3oRoGLFwKoQuJfatfjGuhHLFWsub6uCzqfY421Cq94Rzikg5TsA12s6xHmGLB",
  "key17": "2xcbL9pAv6Cd4kTzxy3LaMPoq7ALeTsmjFxgBYEhPiEYoqUckBrULfxNNNNAgRiL9nrocArNN9Zi7jRVftyW4NEU",
  "key18": "5dVzS9Q85UWUKwaPUYjmWaR2fYQYjshEPpUjVbyEW7NXTWUmoz3pnqbZDPGQY6KkoFqDzbWx7Ba6r23V6LUfvP4Z",
  "key19": "2hkF56osZzxgEntpK7yJjtc8sL8ysPqKAb8V3nEhRSqeaPQ9NGVFPhLiz4pk7qGEputNQyZG4c3iPWY3CbMF4YJz",
  "key20": "KCprvoJsP2tcakMQZMzHkkazCMLYbWm9RhuZnXPqVbjkfL2WSpgP4hJbgrs24GAGU7dsQK9xpbiXL5z7n81Rrvv",
  "key21": "4cNuHQmiGpn85xW8Rk2rRzbBmVxEgWGc7zH9rjwZPyAsBKRZ8Xyg2FEvRaVRhzRLoKqYSRqCYq3KrCVCzKqniWK1",
  "key22": "4hX8mqkhHGsshbWnH75uYkoa6fQHrSNL5y8TgwQJ9wUKANSiP5WJibbTAiv3CVXLd7oRdjMo6GS17uD1mRxNHxKd",
  "key23": "38LFXDRiyDv38RMKiTB9wj6cUXuHD9wsuQmyPEVx5Snj4SdfzE4cv3So1zMrKnZqwkBS8WRnhxDLUu56wC5aN74n",
  "key24": "3gZwy1vUJY8wG8nxVXVVQEQzwNfAspj6fJV8rSXsF61sHZtQe32mJSEcdBFC2k2AEvgDQzLPUnfrJF9SuN5eVRve",
  "key25": "22uXzgryfyrQMRSJ9VrmpuQbXa5yJj4rd3K8TxnTGqJ7Y4cYKuGJtcD2VSaUU3NHgWx8WSPZpJpU3HE4BogSJ2yi",
  "key26": "2isqCD7r886r71qoegPNYN3xtYFsEgg7aNXDmbBvvbjimJhLvuVB4JcdaG18DmeoeNnEy9D2wZRzxGAPULkaGF2c",
  "key27": "5Nb4nuGS63iHpVyUmaNDgScZdn9MsR9T2vhv9D3H3uv7YkghUAjrm5kKH4BaqZU1Bqn3Y4ZWyiG4fScPUrpzjW8y",
  "key28": "56W2kyNBaohq2Qjm2fYw6ifTSnehVDuqYmhskrQJoVnTEF9kWBVwk7UYpkdG8BgRUJs7vB6UAwFc99FzMTcDdoPF",
  "key29": "5U47Hoeh3Jgu1Wp9CfJYAS1b57Y7CLrfAftgJJit7Tt3WRzyhtfc8XQnFEWjYNxf1HCefLAemYWVNbgEcxbe33UD",
  "key30": "5oWUGRzbgJgELLGD2HG8ozeg57rPGmbrXhvsNrNHF7HZPVEJ7UWG2uAFnDFr6Bg7HdJgPzovqnVjBbLyyVGZ8i2U",
  "key31": "4D11EcJ6GddsBy2rxZiLx2umk7MsCgGW4C2mx78QEu3mcvEiAGRZmxhVJbMSBAerZvXHyibGgFp4G1KiE9xCiwqF",
  "key32": "4oJkfLjsFkkxGJABj4waYB7FqVxgcuL1oATD6S1FG1kNbgovX23vQqfip1YLHyMCBiyWGovr3rJJ8RdWhon4t1un",
  "key33": "39DAeoev44FLjuD5NLCErqJcyQadt1YFSuYJ1hjG5LQB4byWDGUybDYZEvUjiLrMFrvVbXaixhJz8WHnw5FwmoGi",
  "key34": "5JoS3MB7dCPQJnZ1srKmcHzUqi7wQWMfNcGs2ozNrkpV9fXF1U4QkTUcpZ22idWdgXnkQPTEBP3bhdsdTGvGJCCn",
  "key35": "21jTFFSMas6KiQj6b9p5g6oLVmzubhEs8jeWvrHPF6NcxvsLX93mjm5VrGBnrRgrfhvb4wiV2HJFMVt7Updv8eUw",
  "key36": "4FfGgb6ecgq8oStwdVSvhoQr8TgENLBgrsZq1GDFrveoE4c4hCZVtQ2iJkjNmoay9NNHfWQrU8MnfRU3zc3nW1ZN",
  "key37": "WztCR71g2od7hNsBFwX52eLTVH957WKd8cBkXt6GgAWwuiY8cKXAXMknKT618dHqKJaibfwZkEEamWxwnDxPQNx",
  "key38": "5RKMWcodA3UrwM9J3dBK1repCMDucU6QY6p8ywkyaW9RisYDV1N3i4ot5bhnTNcJSgkkhd1YS6EUNogSQ6zWBrWV",
  "key39": "M45moGUeiMj77UZ7VhkQioHA9g2vVnaujGJguBUDfkjNxQzs4MGp57RcCBayCiepQ9t68esEF9H9Saw2rVp4cQm",
  "key40": "4FPFtZjwaRM5NUUmA5ifLmMmmipY4gzVi2a7GqD9M6RD8nV1M5koqgUDmP1NCFDndKLeQcxbeSPj3vVKDptprMgf",
  "key41": "2VEkNfmWhDRZDnd2Xf2Nhhn29T8SXMqNHJJcCRx1b83sBiDETrCcnVmyFvpeakxcivMWJ2CN1itq4eTbwMY7hC3b",
  "key42": "3e7EVUTiTFSnZm2zZZu7vs7FG5yoobfkR2AaWfcQnSQBYKXkH2pJogUJKUUBGRxnP7ujfruvuvWwLr3oskUKaxJ8",
  "key43": "4X2Y3ugskhH1jJWU2ySCTyVkpSnDHuht44XN5zNQ3LFeqgNNckuxLi3653Zohd8xdMDyZcTJi4ZYPtApFkvkAXXu",
  "key44": "536RrzwQEAZHYVDrx5uYBVmFS4Nmd9bizWtVRAQPX7hMe3NxxGwAgTtKFSf28kaV7x9ryeskXnQMhvxRGZQKpnB8",
  "key45": "3HFbVL8R6oziRqs3EVJK9gYhKNPnHngi2W56wrVHAZNFerZEufgkHuoismEwXV7AoK7JLEGVMuaVwTTGJuxjzz3m"
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
