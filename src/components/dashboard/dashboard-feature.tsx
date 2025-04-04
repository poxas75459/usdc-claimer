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
    "2ZAMfYcbo9ehWiLyxRT5MEWisr15vkFi1xZgSvR55Zhogbqo7V2wRqe235uXNZFPgqVy85swGuscsNWyitLP1C24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CEddnK55W6HWNmmtXxJqWNVCoTmseaugYN4NQuK948dkx8MxfFVYeLnQBNxNCgdqve1VN4v55MoeYmq6xf2Q7eZ",
  "key1": "2kuhD4mk2kbRKcSi2aqj7tP4vpSmp816RDuWaoqD7nj78bdyF5ZrosZ79WyiJnLwC6ry4ot66jjMr3yv9x7mVhRJ",
  "key2": "XTAximrVNm6vbhn4Tue87JHRg5CGdMYDtBB1P32ZZzNdmDP33DPtKs1t1bBL9mQN3aLXbzMRm5BdVqdSEJzpyxw",
  "key3": "3JqkJyQ7ZMzf7W3RxM4F4MC6bJzYiHjrNQcEqLVSqNgxwwTWBJzRXgozTE4SQAvY1iusimE14Svf1E1eHHmGqaP5",
  "key4": "2r6fAk4YVcSst2ee9uYGDvqVTh6Q1dPgi2VF75mN1qzrof7Cohmh26aLa5nyHYLQ1586mVLGBMZcQxrWqjCp9R19",
  "key5": "p77GrPq6fdiaKaxqv9WVofeRcfxeJjAv3WiCbVPTtG6rRaE49D7VXgrSRurJZq9tsDcKMEn9haf9SpEAs5ZcLWz",
  "key6": "5h3JRC3pc6EHvjWzSbnLyddTm5bdh8VEmX6V49En1D1sfuqmyRyUT9AataSTFkYgoPD2bcrWvLe4FGvbGmuiiS8L",
  "key7": "4WvE5sYhFGiSg9gKaTA7m6DamaJa8aUSPr5kegx73uRHZPCXaybnLf2qxELcJuqqqjsLZQ2YH4t3CtnFLiosQxtx",
  "key8": "5WfDmSDnDHR7SJgCs1G81KMZEgdP3GwUp116cYAv1jHV8wRnD4QVH7YW7ruta5942LmHP3wzrptVv6QqEm1H7BUo",
  "key9": "4XZgFHrUSAmtVe3VopdtGgeePBAieQQnAWgz1GX8MCjwWSjsypyRdxVmmquWHZJSMbsM6ndj7JKr7v1iNMezNKWJ",
  "key10": "3KxcpecQeBQQ6MUZZDWGHkp8PD3gLgKz9f79aD2NKwqGMzMCE6T87TFWaxBzDkde1UPSRUBy5WJSZ9C6pSQAgRsr",
  "key11": "3bP5dQHwa8GeDEu5eMtkQsjtjEjd7RXgJbi7yQ7nUARsh6F6foGmZbHBtDfazochCg8gBxwj6b4buKYD1XHb2E7u",
  "key12": "237NUWVWgRiBtXT6sKAAp3fYhgqEDPSq8kC4wSCwqjqqyNtLnWVNV4nJ6y8oTUr7HzrM9ty2jHFKHQ23yDHSK8Cr",
  "key13": "23xp3hzZMZXiRxV7xaJfbVZGC678rppfUxnQLTarJwqSnwNaJRLVk1ERqkZEPKSYSCAqPAafETCynAqHUerLUtMa",
  "key14": "ncMYYWdigkH9FG9kjvin4996jkmKG3nQyduedeiEawnFcL5mNZhFGSPcJuwxYSBh9rGMu9v63wEEUvyW5wB6quY",
  "key15": "2kJtLWzEEDijWhYZrDu2ppD9QUsBnzS2bTkKxsBCp7QGkHKyViVrBQyiuwy2abkBhkABzLsfYdMR9W1fKoB39GUY",
  "key16": "5WdMcHR3kYWucXj47FNt8YMpxgV1fB8dBboRm6SCvaKSda6xS83EKFdJd6uZaii2zYsBAcNcaa6jfdWKnPLDqhPz",
  "key17": "63DPb4EcSR9z7DnvMKn3qzWY77rLdpyRKXdFpQpKiVyo4SBiiypJQ77ASYGe61B535LhLqBtyDoAtAypfUrHfjU7",
  "key18": "2Kgs1dcdh5SXoA1RJrMzUdwZx7wyb2gziYKWXpJwYFRyeWBm9kh5q4aXZJuWDYRKtF4CFnTYwANMZbRxTHXRq3JT",
  "key19": "2nYaL77Yz6sp6umn1o9xpTd3cuZrBjwqHJyGFhJ4RhXyRzWNWLKbi2aeZk1sF6eSNmcj3cvfegteEMHGtUdQxh7a",
  "key20": "3Q5dBJK1d6E3U3gCJ3anYGuYCj8nFRxP9pJgyY33DMtcWEozGebp8pFropmZtMr1ZQ1yiiV9L6oSU5duZTJov9jz",
  "key21": "4zUACaXKYeCEuHz2VyXP2FdRJT4j8oYaLZWikm1ha6icgvZXRm4S4Ctyx4AT5ab2Zw32jcCfLDjDQqrBEfYEs12S",
  "key22": "kHcY4scapgs3KfEFXFUAeX6HtmFveknTLwVD1wXt5dTBCWqUmJmcic43hKkYBqBchGexhKwzjQUp9tRticwkWwZ",
  "key23": "29NoSFuYdD5SZFVBRu8hzAmvCqVA7XJYySr1CREajcugZgi2LnAfPu14BmrfZ5oRhAvNUffUyJeSg4vnaxU6h7tp",
  "key24": "ENkk4vUajxSd1oSGeFPAWw7T8tqGAvBFJsDYikPg5JNqXWEvytHpmW5VSYwKExeA2TEhHmFVFEZMY1Uczt6JD2p",
  "key25": "3Q4HRGiM6U3zb8jXZtBNbZ7VcHJwFTHiSf6Jj6dQvPbezY7gusDNNJacNU42MA9CC5pxhAjhNV69XQ36yMkdxHqK",
  "key26": "3QC88Bi1TvtrRu9uG82q8qYU7aHQf3pZfMfG4woqc39MPLyv14NJe8otFC1zCdpiJR4UVM3zncij6eHaMAHDGPd4",
  "key27": "6QS6V4GAb1E8rpbaxdDGp7L3wvWK57EKQCQhedBDsxnmgyXZWuFWmKWvyBqpxxnsj6sF6yCDpRJknWfGg5UHA1F",
  "key28": "2JXMTk1TzK7rGnSKPLSm6YR2JqVXfpigDi6T5MwPQgBkdNHiiG3EQEiTEcxCAwk94wDqF7pyqmXCGGtfwfig3vZX",
  "key29": "5ahMHKp2fHqJ55AJJXVbJkQj69ZFXzQkQThinEJaL3ugM85bXc1m7CNGrUPubjxnMK7jNEuAnRFiH5XvFpp4hbZ",
  "key30": "61dJrefm5aBkZGYKamR5aMNAwxJ85h1pjkPNL2jbTYtTxa5xKqEJJ9kJebcBUqxKG8hEciw4QwsN6W8yPF2TBoaw",
  "key31": "4PknRJ2rSoWQkwjcRuVD4zNQhuEg7qFRE3yrvFjGoLMmQCsGnathD7M2R7ziXHcabK5CEkrYqmWnU1td5hFaQGu4",
  "key32": "4tfvqjzxmEe1urxtHFMQ5k5Rc5ctNH4yF2M75usquxM2gYtZ2ZnUDbWtJPEEs8eK3pgnJFLRU2H5tenN2ypKx2ag",
  "key33": "34scKyy9M2xwBxFidPMcbExzZtg57qgefy7dgVHMbKhgZakzSLbe2zHVibmQzk2WWwSyz2tKs8GbYZKdJurJysco"
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
