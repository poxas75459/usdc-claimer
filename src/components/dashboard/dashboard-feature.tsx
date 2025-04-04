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
    "4jmp6xnf148mwhu6TePuniaMR6WRX6g4v431P759pb2HJZswE5wSoYHRPu9EVqMRopJbDHpqy3vG81ZCnqAAndx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27dqSg74qwYG7VMFcq5y8ruSncCkot6nz1eFwNuu6rJuCKDxswMvm1TKN6DtFpqMAwzfKmVzCwBiV3ZXHoBaEGsN",
  "key1": "3UZcL9fKPyw8LGyC86ChaaeoSznujJP7SdxfhUqAw6Z2t1zW4onQj88vZbhotR4AXKV6iPh3kvxKAd2BqPkQ92eW",
  "key2": "3EvMbDpmV6GMRPKScNN5rNp48CZQpzEdCAbyot8jHr7y6Gz6h7MQNwrQKotmS29TigqXBugk1Umivu9qZRmX98iy",
  "key3": "44nXf5EKZSaXN7fjGJRe5qQyLN9s5htm2cC8Ex845qPP3xWsQ7r6fuB73N4K2tzuHytKcNidG7ibsXT6USzarWGz",
  "key4": "2xov8sAhm3vEN5gCHMwr8ygoKyCMErbKVzAbBUhRHpEoEBueiEMGVrKEzr4vdXppEPMrXmx4JhhbhdT3ATwdcnAD",
  "key5": "3LnwG3E7w2yxGDX6QakpLeGKN28sz9BpXa9eLu5ExuCPsU48JyTT1pZUYYY7RMrdCEmXyZ4qpbmXyQYW24hiQAMr",
  "key6": "254Y5Dh6BGefrJWQpDbZfwutWwFuwZLAeB5SeSpwSb9SXoRZZuJjQnqkmve2Jp4ZZYcmHT4bvsYhACV6JZqDPQVG",
  "key7": "2MGfiS4457NT3WMJKvYmkvQXG6gQkwAkSwwHw5in28g63twtyb2jYjmg8Zmrk6st2pr5PgocJMnb9usFHtc2ffSE",
  "key8": "5C1av7fwwRhNTPvFpnXow1hj54a4hpA5QxhZBARNt2UueMTKLUSUcuuvy7MprirgwHYXu4hVDes268XSh5mvzHGT",
  "key9": "2mLkwxGcPKSBdhBiQ5ooJMaaHwF22kZz8hFWdW6Y2tJqWMTrZLM6Pu7PamLXohLwCGgbBsJxMbcTTFfWVPL6PxLh",
  "key10": "4RHKVBpE4HzrbSR9YL4hpYmyNJba5cqrgtJDkJ1MZsQ22G7S53TWbVGb81T69BAxAKYVdypJd2Q4EnMcJaLRN8dt",
  "key11": "5oZhidzoHhz9AUW2K3ixnx3pcx4iGvCLfvh2URXXuhxjMfudDAnQQa7zjD9RCcwAyWU4EGS3mjuageqANg7pDRdM",
  "key12": "gJw4eBYoF4b9rjDapSzjAHxs1zQVxGUaiRVW6yWsgSsb2JbAUXbtN1dh8pnCeKqS3RVb455LT4VWLTF1sD437hd",
  "key13": "25Ef9vvc9d66Lxu7ZE9JVJ62ksNmz7fh8J2q7MCYBAt4AEBia5BELYCPDDC7CMrib7YWJFLRfbuKLJdUea3AcTiu",
  "key14": "2Kb86co3BgnTp2dt4RDoSootrMDTCKENWyustU2JT6bav3kACJnznY3mDuoPEoaAbnnTDC1B33xD3TnfFmpwydcH",
  "key15": "24sMYTx9C2Mf9wHwxfJ6tQ6pN6JtR1DrEjaMkJMawX7f4ZCUhAVohw6U1HyqZWAH6NjjabprUjqThR9q8FcJQC1M",
  "key16": "9VGB7n12gZrv9rs6PqSbQVZsHHe6RXjfJXQxscr2nukc9BAWszE3esWtjg6d2ZpH78tkuNkpE4KfdCc1rFLVecg",
  "key17": "2VApx79THYrFkgfLshcPjEPBWR7zrGUDc2xJrfgrSMYhvEzKMumqkvmSqRZLVJmmtEdYu5rNW7T1XoQYyv32bwtz",
  "key18": "3iYDgyR8NwZPEMFx6TpyzFE37QGDPjEyh1b5Q1R4th2nqZ3n4qwXSCmF7akbXU48fBdYX2p3WJ69Hj1h9LjvaBT6",
  "key19": "4bN3QWP3SzZ8cJC2pfRZH5QaJ6fYKkV8SnvXV64rTA9r69VxCYyGcbXUAGUymwhGXUyPJUx8PAj6vgj6BhVSFg2a",
  "key20": "2Xc5bDbDBbpbXGHtnqdL3fkpv75yvemcutPETbBofyKsdAG6EvU33vzwUVngZHi6ikSeBLzcZawiXB1GauBCKDPH",
  "key21": "3qaeJeXDtQZbbeSQJCf7W2FQQrFkCwfik5i7JQSGJKnmAVhT1Ag42zmhrrNx1eLVA8qLMFrbnZDXsTGC5S51yY92",
  "key22": "2ZctN3afLV5Wv1wXrzALUDxSpy6Ns842xwY4k3r8ACLneNseA2wjbHwEdJuj8uKKefsGsBrDLcxYf4MwLbMJz85G",
  "key23": "3rbM8j8F4mcPNPbCaZRKjz3Mu4SqsSeRoYfcgWuHNzYufMecK5pTqhWopn8iCjBiJc8PjXmGjiW431wPzbjt687T",
  "key24": "2eXKwjsFrqw6o89RGbeH8MspJvcSg6NBgX8zdmBpvcEWBnn8qCSR5oCzsqfyzdbw2qXSj83WSvcepxWdXThu4dEm",
  "key25": "3UymE2kQYNsnrEcT3eThrd1nQbyRmNtKptTucV1SFnabZfqbuucHr1KbC6DtH5KCZoHrBiDWzZsFcUjGgBkmUF2P",
  "key26": "4grrkkLCqstmTeA5MMCTJUAgnqY5253nfrTbB8qLMar3Ndz1WUjSuirkmjEu2ZQkqhBhP9ozTP3rb5VX7jvjGVZ3",
  "key27": "2hXtKhy5SsBdGsiXpzUYy1iRPRGvB69ad2hrQGjuAa88hhugyxUvhtXA6DudzpJrMFtiRQWJwfZgonMg2DG56iN8",
  "key28": "2gtRZ2WQbAPuT95yaxFW6iBuSGq7xBeB1L9TsUffb4nSwJBVcjjaY2pHkQQjHMgjesYRpWhFDohdbeQsWCM2Yvr1"
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
