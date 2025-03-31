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
    "4cTzLYMzFHMPHknQnC7xQT6HPY932iTVzEAyNrWoztdKKCth9ZWcYEkLWjumczjMg7Vv7rEhLJj3QcVfMowGc28A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wb1drBg7dfee6T7WUDCqTvkWMSeD2KVj7o3PPHb6r6DbDN32QFbmH6tc7ofDS5W5mNp9XijPVtoJb76uKoaed8s",
  "key1": "5jCPy7kFHZavVTRP9fhaxkyKrd9sGwUWG8yqVz5g3peRvJwMimLKHW71Y4B5y6zUvRDBE1jVHZ9vVEBFEGB5vCeY",
  "key2": "4VhBvDzoLRFys1yhKsbG8zk27ypjt245eeSUnNjZEeX4ZRhUR2bVH8kq9bRwLhMuLvVcGMfLx9taev5TYg8bVYse",
  "key3": "58SLpy4UTyZ4CSrQ6hhHQT66Sod9tJWnGRQNMGYgP5nYNMAfxkixCtLhcHNhzosUiuqjSGPMHePtMFHHiFuFGKzk",
  "key4": "4XnPM6zZxuhBAr8RfyJFjjxAQHWRnLDiAVyqQxZmJKnzdohvATZ5rEugDEZ69SbkmSfZAQA28WWZBccUPUkh5y5i",
  "key5": "5w6DHo7nfCHGzFfjv9DzxinD94y4jd1Ee9twHiko8R9qP4E7MJ5YB8DK9AZAnbJzuFbs6DSUSCiRjTSGDtTw6TJN",
  "key6": "4rLbJM3rWXBemd4z2RWdTDmnWqt1JCovbTmN3hw8E3ADBZ2JpFk7NR356xXH3Rk4xLuCQ1JM6Tn86PE3bE4TPCEh",
  "key7": "3FdXidsmmc3CX8iGJA8YnhiiHgFAV8pg4KKJEV4gEwYxRcs5fUzSK9LphaUvYEme6BFg977Po6A9PvXfwi5TT5nW",
  "key8": "EJZFsz9KcdjavhccMBxchiqshMLvAoBHnkLZN2tT4oFNRZ8nfJqr2mEz8i2T3RwTrTBxJh6rSSFRJsMrrXeZZ7v",
  "key9": "3MxwaEwxRdu3ZeFo2pVVZRGYzf2Ff5e5of35UFMB6CdoLKrzN4N1BxW8K1NKYUFstFRLqAYRPF9rRKgdXUZW7Ta6",
  "key10": "SumspUjAcHaLJavpJrVWKT5zh1b4JeiaGYiBGxmG1uFuNJDoEAYywQSgVVzY8QJjGcMGKLwewyF5sRQhRoCBiaK",
  "key11": "3EieQnbL7xG96sx6y8uDuuHWZ12iHxgZgX653Z4LLaugfHbTe3KAUG68y5TsadnLh1nk5GVyMr1mzLcCvChdSQeP",
  "key12": "21c8WjXKBrBMeuHjPg1tX7ncERBux1rVabGYsK2JJmEKgUj8tpJjJAbrufCpoxAwSUkpy27oSGC9GK8ADJ8sQ6P1",
  "key13": "B1znBbdUf6DYmzQdj3ofy6CQoqm18rYPCAgnVud4VeXgYgPqXj2ZWTZufFuFC9m6s3bmFfCDrVCmwZg22wRsask",
  "key14": "3jj9zRSYwVtVHCpjWnnY9V7nYHLZjFxWHARBncRwZMnLxuB9vG5ZiziVbTNfJRtVE2QtcrU48KQby7RQZeaqZGRA",
  "key15": "3dDBQCpuVi6K6zUXjnBbjjVzzvMtYBAr8Ssj6q33ak1vpUneVMSCjqyB4ZutEV3xQ5Ctoozwdi8sYyXFcexpbcaP",
  "key16": "5n2kbBHEcNgESag2uohaAYLhcynjP9fohDbCC2P7SDkkMz6sd8RMNLZQb3cTsN5weX4gvVtZwQF77Name35SyFnh",
  "key17": "4nY49ntA73MDR2YMZKwW6PJNYwGPVvtzZknBewyjwPiDnQr6xr9ZB7fDGKagC3559oogUD81zZKVn1mBzpTDnX4L",
  "key18": "5Ua7oSuRyKXM4yR7aUJPCNrFnxGVQQH22DyoNZNvcYfcGjGTfvNYzaJCu17QwWMEMcbCT8j2tRhSDhM3NqmcoRby",
  "key19": "3tawv2uVxFvSpsFdMEDpKty3nFgJ5uX4z6yZyRrAwqbQ5f1NYRJWzrLTpakHGyR65iCXyieAcqoverX5B54qTLUN",
  "key20": "3ZHtPAG3FrdWikBUg1etctkbTDZ4P1REXBYGcXePpCjnxpD8XjqFfWPBcB8wq7VDwMLvaCD6fo3XkERpUkzr3jLA",
  "key21": "54nmH81khhrrYepgC9V34zDhaUZizhKFCGhP3vByzGVAfekzhjRuoPy7aJFY9JuyAjgXrh1ADTAZhpX6VJkqtmBC",
  "key22": "2mFih2uQPmmGsrrJGBoCZUUdiVtUjqusZGE2zR8jTYpfYhPLGNRmAYE5KkzqH7XhBRzaTtX8zqXbcYP5jRwAAUXE",
  "key23": "d6DT9PXnMXfnWaiMdkMzbELzRE9TrX5CCYcYmCGSH1Px61FR6VyjtSEipzqxip4VSFYT7Nxg1FWr14qu4XdXYQX",
  "key24": "48KzyY2dERQz32n28iZAq1LTAgbjXykkYp1q2tVzjUsMMiX29DKSZBNFcKJe45yq4UTg27G23QwGkPJpGDAYsEhZ",
  "key25": "4d9btvG7yhuTa13ShEJbz5UTt9Wt6RVYHhaaYN5ZgQeiUPY4RUjzF7nZoQadLtdTdZVTK7zZfVWJ1X6gkFmqHvN4",
  "key26": "2c8WfswhJi3iewg6PVUtqH7YUf6FAfS9crY2MzmD5KB5jkFwrUgW3EzBxfMj6Kf8FUSgVkZ8o96pD16Y1rUYe7vN",
  "key27": "Rz58VUFkEbXV84UxKTbxD2B4zrgErwFVfq357dj1exwQtMgJVJQ3n3V6w2JncVDcc6xYi9ymJSxWKQLnh5Au8HX",
  "key28": "46hUYDW99Jg1XLPRVahxqyvRGzFgj8ZambHJi4wnzqcdjb2sis6YBqrq8uaTpBvzTdXjskZ4351RpHpYf7KbpVHA",
  "key29": "65kHrfEmbFSrqEoetceK6d1bUHAFczZtJ5mmSD5gzNWVbTYFxXjEEpTFKmfnsi7k899ygXizVqGPM4YxuSP2qTCh"
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
