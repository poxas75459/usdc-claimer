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
    "RtpEALFxchX3NZ1s87Y5ED6KpC5YCwefBnw9barVCFgU87RZLqHSJsHn5ysCURkoJCdwAzoHHYhXxRcDowdnSpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53VJuE9f5YqFk4G53E4NGxNe4VqNXhEdrJ7o692YnnV2VND9kn3c7Kn37AvzRbcvf8RJCAxuWsa8ZZReGytwSRcv",
  "key1": "546YgGPS8cMpkRtzqrY3PFLz19Lzctb7uVfNgaHBARGQpQUJbVDXcP1aNzCCRjcSem2dQ8TULzzT8ji5HsC1hVL4",
  "key2": "r2C9xhKDSc1euR27Q93HJxEgmttfdpMY4FopezGvroXEUEAXNC9j483Ej3EKdekBGbwcK9QBGvF4BX5v9pzbKqQ",
  "key3": "2MFUHAuuUNNgonkAPW46fvyrfy3d7XnuebFry7WVUXficWL46VuXcBJdSG6U4FGSJGstkCkuivz5pnQtFCwU5BgT",
  "key4": "36EipzSWMdUxVz7VbCFWRWBGGFPFqBBEbjMqec46PjSoPg6yz95VPHE2EmrCrkDg7i9JUCh3miP2aevk52pow7oX",
  "key5": "63gPoJk5FAArsTXyyt3hKnAKH6J5r214FMMtxfGQuPzUNbfkjEbjCCzZA6SwZSdLNgiKdxvJzfAHTJyaD5LCKyiB",
  "key6": "PmsTHcH6VA4fn7wd3NDUJTCPNts8ECGAjJGEsuZ9SwSnNhZd8fydvJNamnMtVjxCASJWxxGUQzawwNmbzawrT8X",
  "key7": "3116Ejx3iFSuZs5gJzsYfFhEbdjX2KL2FUC5Dsu2UDUrvf4fEaedhRxZuMqpA5PNSoRj2kmRwYuu1KBNEVSQ8yaN",
  "key8": "4RVLbKaqVgAtsizZmbArSJoiTKVZGuwuZ57NuSNJKfCC5NXQgHFs61QVutash1iedNhonwprywmnX7DYEJa8z6jp",
  "key9": "k85AG52ithPXTGeBdSRvPa9ioPvnu15TAmrNZ5SZRjtZxaHkMY9b6f5qg3MGzCvLoB5direrRYU2Zb441FQjjhG",
  "key10": "5zeLo9KrAPyv1HYqu1GLLHW9M8v6mwD9JybgCRenSVmCwQ1VewQfAFVkAKsxYdH6SV7t7SRXcsxnMz8rGqm9VmkZ",
  "key11": "4cRQ4qATZgnpJk6iiyGkFYaU6zahUNpifH1GEP9yXNFSBxsxbYGkf3E7x8Hdh2rhmh8sGQqUwpssiPp8aX3qt5aw",
  "key12": "srsFGHG8eFurknzLBDsQb7ftv38yfkSj9D5zMSP4nFuC3SRGdGCcsqeXhRUA7RaMXhzrH63gVjWq9b7nW7ziWfe",
  "key13": "2CKFhY5G7Rmpk5PFHCkAAbJcX4W4kx9nhRy4rHPHbdiDqDPsnoN4xd9i4qJ1mshxpq7XaSftGxHXvz9LNpANBkfZ",
  "key14": "HHfDKnuprkXHaeJs3DigS2s1rYLSa6vQ2rF68yFZ85G7m57ToqxU95NxjGxEXJbaSdkTMH611YxcBnq2BjCAkFw",
  "key15": "9fGJx3WJMaeKevPNLBqhKF3zoKt1nkvdK2vdPjzd1W2Y2UdbaXYMa71nomT9kFuDuqBzcfk18KnvTjSFzMbh4Pf",
  "key16": "3GjUiJPLNM2hUczgtCPvMDG2oDgFWzQgX8bZhdmB3an7HGJSiVgZU2qvmmYvcqNFVkB6TfHrtaZyEZi5H6sqiQHr",
  "key17": "5Zy7mQvSuLbMUCxcvbhCQKMrL7LXueky7DhgJDVUm2KMSJNe5e6as3DiESwxQXHinNsDY7LsQdc3VLTJicCoNE5G",
  "key18": "4vR8jHV6hZnDnNj5sXep99XWVryJEDy6FgowpL9J5v5Vwrf6iz6Kxd6HFqjvZKPqFe5fvqDJZyu7sSCCq5uvCYAk",
  "key19": "39F8Lja3xKB3KmzERKJr7ZVSzXChvYAUSPswHxp5nxqHhjBbepkxgUbrqpAcegrjDV6mhu767LtG3E8apHHRj9LF",
  "key20": "3R6JUS9uXHrhrp3XWy9S6oQAvo3dvLuBQf9nMqbxQwds9rhLB7PJEhSEzXHhtCQP9578sQfGX8PzP1WTfaYqHwSC",
  "key21": "2HL63Ek5GhVJTFvinjfrFMSQBBnZ7drXrqkvCc98HEnrCBdb1hGDMpghsSRqnL4rWKvBSY3UNEnDswBNRiiWo6re",
  "key22": "2iUqSLy4RiokYwQVbe9xTnLnUTfaPs44ACVMLZctWzcVK5oZfpD1jK5cUYhZQ3ZiAJqH8h6QKnJk9AZ7sy2mLnK7",
  "key23": "fwTwYymPhCGLkNwHjkREEprFxqaXU7VsyR914tea3eUBMvVPbByNcNSySwHii34PXGdQ4A6ENj8XZp7zskv5dfs",
  "key24": "62vBcaso81GuR9ZLw6oCm4j5kjJz6EgFXRLJofJ2vjfzmCWp5ZTpFPkVm3e7YWgCjwMQLqZZb4WKTaanez2SqvSZ",
  "key25": "4kD2YjAF47MUd4so2WYRA8BVxdEXGfGR8eySfdDh1KLFCDLEyxPkJc7MJuREQhx6NxuDv6XggKk8rq8mhyW4Lmxx",
  "key26": "4PCvLuxrWR162WDN5nT4f9Fzra4epLeqrS6GzF6bZCRXiQbuMQLT3YJqYE9n7ayAvGy6eTCS52RQCog8G7jmftAP",
  "key27": "2Gab18iQbu45yUPzuwKA6KhAp4tBXCxPc7CVJjqPHZpDc9cotavvx7VrqPFpvNQXq4hSJH31hbVJy1cPTSCFWDD4",
  "key28": "2LgucNr5RvPLg2VGEJkPNGrEwM1W6CJjjVQFnRuvfzDd7h8vZp7hNisKaYvZd8Zv7Za56okbgTG7hpscsrXkwxti",
  "key29": "j5MBNUC5jDLEEx5EiTdR5sAmR3ceFy3APFEzgRdQCs9VFgVsCmoA7R1NYfGY53fDzLBBdNZmvutmGF442xXkFqD",
  "key30": "63vKfVLnanErKS5TwhdDxZ5Jyw2P2rXu9TiLJxjgyVWSw8eGgazzi7Mr5zDVUBx8DQY62ZzM4PzUXV52FMdXmkzk",
  "key31": "3XKTzoLu3VrzuYjD2VJYWmemUEDkt32GaxpRak4WpkyvRNKJacXrbP3YeWEXLkkKANG7BH1QzneDcpSMBuBfTcE1",
  "key32": "5J5cLK7NBbgMKbuzy9GrXr9UAq2ivj272kXFtd7HSq4m8hzeYGywzzdGqXsVBdXXGhi5RUHz4rXToWVqNmn3nAh5",
  "key33": "Pdyo3fFs4HbFdxQD9oGjDQagidfyybQTrzqivS2BS7Ste94mWMLjCUfTEMPDJezy4BtB6iZhwuUh7X2FEiAmyd8",
  "key34": "HMvfJDGiSSRuYZ4Df89qnBfpwZq6LKsDskwhnMnn6hGyG18ei86PCcpzhJZ4ip3CMFgv2LnD3DCykwGAegURtWT",
  "key35": "3vxR1ydQEiqsQaURT9bbMdhPAi1bnwc7TNQdCmXY83cxTh9T8hxv2aRzHQWwfhprYgEMoAMdDne5kc4W1ddzEHkQ",
  "key36": "4i8mkpv48CfTZkSEFGWC5Z1uEcx3sjJpDtTtW4JbzxgynUVhW1AQMkrLfmZqRDv7wCh7iScq65zro37ku6NHxLxq",
  "key37": "5pL5rXjf8b8xy851DEgJKMDv5ZUj9hZzquzCULV3uU2Rd2DJYzFkDwFJu7TdNmZRTnHdiiQzTd54byFqN7gxsdkf",
  "key38": "fBsWyQ7nDDePTkbTE2raNhQspUtWKFt7pGoHMw3bPGPkott3QojSJumiPiYHniizfqxP2XTBvXAmSpfmpJkBvs6",
  "key39": "5egoVfAaz8U63byXjMz4Shvph3XdGWpaVJHqyqjag5vS9bWDr5XCSKiQLLKL2HeodDPij6mxqKMp5h5YBHZMGqvk",
  "key40": "EaJpY3fBKcS18WP1xKrf3ESxwH2aRqeCC3NQRseWeqdfChnR6ABpV2ZTaKVEdqE8KZeEmAkN7WYGAoUxCMr7ujo",
  "key41": "8QF3j7kpNpTZCcN6wQdh1tCPy8esCgh9MkT7iqBiitZKfyyXkDKLp3kggvaV126FBMcc9WzMx2R45Rr2196yWkP",
  "key42": "5T3LHF8xTx8Z5p7U6kju5eqSY2rhrJwyXtSq9BoMbe6ZkqnhXgKWAGiUgK768hubuZvD7DAUEy5jEZv8j61GZYaY",
  "key43": "5E6oX5CHiBGXtHGCL9NGAwKuxSPBX8Gd8gbovMj41MEMyvabaEk19UasBpZNgG2Zy94PiBkEYFHoAuYciCXbS5kc"
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
