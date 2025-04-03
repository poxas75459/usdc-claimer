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
    "5No2mqfd91zNyXZwAYR95gzEmZY6EwZEsQ6c3qC7ALHQSsTXQwj1Nyr8NSd9ccakHypbgdaWaGwU4stYj9EjYjyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HExFyTkpUrRUtmCg9opeN2pLBxRtCRq5oDTBzwtj7GY23XG9Chb4eRwtYTmDSKkmJZp7jgkEF2Cm3jmWUpvF5A4",
  "key1": "2g3kobFYuEQXggJzGK1cih3DHbHHJwQuBvSFf6KpYZVqDS33gn4du4nRh4phjf9Sihokf9KaDYiuz1yfSKgiCcTE",
  "key2": "3XjDyPJsrWtVxSoHPSziM1Th8ZyHWRJNZEGnhChceKQup2voxz34f6BYPGudwPBznLsieuCMYUBvMFwoCGgjcpoE",
  "key3": "So2C1CCp77qjie6SidJMnKeFDz9bkvbSizRQiqQJbTGRY7XufJhKZvmwaBbRWjUEiHZkQDPuqxCPEQN6LA2Kaj5",
  "key4": "5a6w4djj1XNGq77UqN39Zf3PZXC3zxz8MPKT4Cxn7TRM7dzYm34E5uSxPBd1wDWkwKHzuUeHRj22Xc18LDdXK2yU",
  "key5": "3vMn31KoGFY9k7nPnvbwbMxoiwDufAkpqNRoeXactyzBZyfRKg3kTK59Lt1wJipGbVyffe12tL9KMkYdyWWouoCm",
  "key6": "44MmW2hFWbSuT2QL3rauRUxe2GTrirHhtRNBTVWxiv6sHPkxDs73UDKQhddpQx6ZqJFKoi3xyxJeEtJiodPo52TW",
  "key7": "Nj5zVv515twNmzEuFFyttaYrdNzcqrS11awT9TzU4jtmHfEZhXJZb27rVxTRC7xdkDK3T1kJxTnKjxfC8eWudXo",
  "key8": "2gsC5cTQ3KecT2py6gEif9Sarat2VVx875BXESGiYsUuhQQp2RiXQgRguMXfPUWkiDF2XMEHXtPp18SP9UqtE4NE",
  "key9": "qVCSiiNYbeNoSoKUD1E5Fe287BqHpuiS5b5YKHiVW5FGdnfJThTwSUUp4PX7BLTXtdnz5E13rBo23VAA46spn3w",
  "key10": "VKJz7hGsVXLJq1PKahCLfamzU8jXRwRxMatfGwMxyWEXP9LfDi1DiGZAHXCkpSfVCyv31sURJm4fW9q8eLg5ZEj",
  "key11": "3cjGMt4FRppGV8n8STSLvZMuUM1UWcgKGtTuvSEPHCNFrGLEcbFhws3VneSJNTgUM8vXbRra7MkxP54UJcFQHNhE",
  "key12": "h3iTW5hKEKZ3PfuAm9BykT8mV2CntTjucDhtSbGL7D8oPkwayaR1oLsg4xXC6sLcVDb35kFu2rbqvAaTVP3e5TP",
  "key13": "3vA8g2DBvukKjtiECHRQjNdfBixHee5EC7q1Ltptu9Hx4cNVBMZQTEj3t2iYxyeRrpavaxxkYWtR9UsPbWAXtKRV",
  "key14": "2iUfNNweTvETfZqxSf7wkiNxsbrd73e9Gig9Uc3YvVnUVnGTAwk24AMM2SgvyxWABzEWxLy1tUBmsjCq1ZLUrmwA",
  "key15": "54rpcytP9Vu56tc5zJK4abiHwc5SUppZAgzUbEjtpdpPWWhQUDh1EQBDkQyVCLECQvgLS3vbFgPMUgZztdV8CGtS",
  "key16": "3tWPYvLxwDBo3Ch4FbCyJuHUJVgpbvjZaUFT96KA1VtG4grMv9btNofBp6t3BExeraSWzi2qYbfVdmEpzUAeMNzb",
  "key17": "TxoeAcKSP6se5BRXgLt5QCjodCy3684f2ck59zNmqAaSRmvykKj8DTpgAyRn78vzGdNUqCTTXTMY9U91US7BrES",
  "key18": "4duJeUPBbZpNTH9RvAgBM25KtUBMnQhxjh1AD1MNwDiKKqiFpjvvs7zdYXseSXkVLbbWzDmQ1iPTNbtgbQJuvPyZ",
  "key19": "3fswgKbAgbbMo2QU73xEKSaSXyLotsavZo8jR3R4GjNNRfgTDWSzxk1ok6i2mDfX5reyDoaNfXDTPtFdDu5mVnb1",
  "key20": "hfMDtDcWNFPrXZSTx9Gy7UEHn3WmMG5FDsvMFN4QdAFtjESjHxD4fGkoCZiBqpYzPs6bJP3YrNNQsazu5eSqam7",
  "key21": "2KXyTjD98jb36f8bJ4edZVnF4k2wdytxkgy6cfTFeM7YYRcHUnzBF9k9bhmdwKP5NAb6fZVAxrHEjiChhn6HBF7y",
  "key22": "3FhjwWmWYkThyaWKCtKmyrCG87ogQyeFhyucWJDtw2h58geRWhjMdBp7QaVJF1kVsv7r6JCY34RPxuYRa77B16iK",
  "key23": "22ycnkh4sNx2vVkf9LojiztZ6Wujk5SxbLspawDWB3BRHZC6pvr7k88NzLBU59K5kRYG8dZyYK91CamcFp2HKgdG",
  "key24": "iUhU3Tnjr7CagnR6Do3GHri1zHvweqYuQLx36tRUie1DmhpuC9UDkLGLdGJ8xVUDFTcMksBFduaxmgdSuvVTEa9",
  "key25": "239FyCTEkbXKNJvmpNcf7JL1i1qpMtcmfkAn5WnjNihKzfdcmeZjnJGuJwBJvyrvcBTrgbtADZja9nXh1gEd21su",
  "key26": "55vtvyXpEE4xosZ9NKMs6pfmp4NLbEe6ivqHMSZS15cdKPQDKLRv5SyQEmaKfFXRtD4NKRBwKMoyrEuEeidXfgdn",
  "key27": "5f6RHpAupxRKHHcfSx5hZLfvFt68XWEtk2vQqM6sEjMj8aSxuhvMF64yukzdV5X5S1L7ZqJKGwiRvkfaxYve3DKy",
  "key28": "3VoHds756qshTjhkFts3ASuvDW87R5pvfaRCdf3BPDGYe8aW9hD3YrUgsTeJU3BCkxGFtD3ftkkXK3BbsfZxUdj6",
  "key29": "2j7ZoxSSeWAQjZn6QL73Ya8E1TffpEk4cH9kVEhhpAYTYYU3gyk74tD4URr7dND8f1GkvGTnXJtWhgFse2PDRXtF",
  "key30": "2fjhDYni6xQUdN5hP4pXT7CRL4wowUBENrak6uEDTJijK6W5FUyff773nFmjxdTg5SugpCqp2LMdQK3jXvTDx4yy",
  "key31": "3N7MVsYS8dpwQqwjUBYhQvWEFWzYtfRY83UTt347Qb2zZKwMNEKKHTGRqZFjGzdCLmWWb3HeRbCx16bvnYr8oobG",
  "key32": "3HXknruVdvF9Y2W9a8TWn7ma1nez1ogUHC1EKnSwRKCGEWSUHtutFK9Dvd4iNeNw6usi6HVdBgC4cN29GdJpyH61",
  "key33": "4yJcaKtxrQsd8b59GR53FWQ8hThAsVpugHQCTAJtPJHZXhw2iPrpNPdhryZAffQ1Tw5sw3ckNGXN86LZZGKgWAVE",
  "key34": "5QK4TWY3ju7ZSWKRBT4efXL5GzR7UCKJci7kuohvMR5EnP7GrUzhBpsNcBxobnYNWXkXfr8GvNd6ZKazg6zwzKbw",
  "key35": "LVWXGf6mVeaYcbqRS92W7yyzBX8fvAWr6tX6B6U4gUHGgJiNAy1wJ5F2UMXKoGhoyzCUEgHLxvvHqUfX7Hi6MaA",
  "key36": "ALLBvThBmYF8GthyuR8oy89ShesXHp7N4yto5Y9cjsv5Piry4Ja24FppLjWEGNn6cX4CKeaqFbNfgNjR4c2Fbcb",
  "key37": "XcHs7phQ6uCx3Ce1mW1dGBtfsJZ6eLrqd5Mvts16hLLVkDM5EWHZhbY9SzTJWjeTA4UHMZsPRidqpskF3SmsbMZ",
  "key38": "3dRw1QWth5a3htQAPLQ54vv1ju25AK7rV7itjNW1t4axNosoLeZBc9a53UBCSKQyrVG3D5jv1ZknsF6ziJ8JKX9w",
  "key39": "3Jkq7ZS9dsZUx3ojGBvY592GC2sJDtUp3kAUk78yeSjkiDy6TJohcg5e6jyoXJEm4YqPaCWpmAV1suyacaxD2JbY",
  "key40": "4ZMUQP9gDrmU6iT7fcrBqSiR7YDMnGpKojvNPa4aXWdujcfWAQHQ5s4Fnb9eFFjziNL5ZPaDWvAsJ7iQUmQmi3Wd",
  "key41": "d728G7Ko3ZbhJT52MP2yWCaKMUGdTMCJ8bcLuHfQMtHG5H9QEYvDDzjpgjKnorqwq5fM6zb8Y14b3Q7TDHdjwFN",
  "key42": "4dJTfwxULp74nADaSiiE9oc3ug6Z2NsmWEgfr5VoeLC52LXMi8Ys7yULmoMsUAteJutKsCDYAQt9T43yQ1y3h3K9",
  "key43": "2vPvz5bJxtpzoP3jYisaf52mLa1QGv5mQCG3eCxJ8VtchSMADUY5XzmMSaA4EYpDxRL5dL787oQEQatfdPmWEsnr",
  "key44": "4Qwmdmic2Hqj6HTXjJY7QQcFqRa63xHE5RwqZQ3h4KfrfxwrkBxqJeDCVPojAVq6Xi8t7z6mMtqzKQjnJkcHQ2wj",
  "key45": "5vYqfErqnRzWeLBiSXpb5FnVYuR1JXocdUHdAk6ovjH9TYHnW8eUr7e5vV2m8o3Z9RLp7V6ssZdZewUYk5Mnmrmi",
  "key46": "4yxZ8EBYwHNdg7HwW8EVqyWP1wC2sJEbe2rhn51w5nbeN8gPLLtAayZ3aS7hBwtfJFB5y8PuinNW9ddM5gNQoypW"
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
