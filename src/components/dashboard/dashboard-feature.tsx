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
    "3t2gQBsgQ4HE2EogeHrEe74G7LxM4ZPjrHPUWkTSx776TseK74osffjJBXrYU2KYxddbTFb16MmhmteiFZVUSPqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42VJfyRDxpqgpm5888M5jTozvwQHkNN5Wa5YyU6hLVko1Bgkw2Q2zTG4tuwA8hc7nYpjQ3Xok6XPaaps6DGjTLto",
  "key1": "616kZZXa4pyhNAXtvbhrQh7wGcXmS224jio6Jqf4njRHXdNzJG8Y4aJ9Y8t9gTDgNf6NsY4ZwsCHSzNkV2eEDNWy",
  "key2": "25rjKPdUF2CofpjrfBVyeKzsESwGWMusgfAPsN8udriw2bM1z9qMAiHzVgg3yrZdyauov4CQVDWszENY8Axkw2Qo",
  "key3": "3KS541RBWVyPw2M13rJgUQJoPMLMqh5svNqhMAyu14uPc4tXwK38yrJS9tASXZ47Wa1Hv5p2jbLMZxA3EDc1khn8",
  "key4": "5yWEWnmi4pZxLeaQQQJhKxFDxMwg9nrBKs8L9hHxztrPQnoSnXaTLvhc5deDcrUhFmyZgz4YXHYZFZaPEFN2RG1j",
  "key5": "5EkR23TB3EJ1aCy5dyWTwxxu4cUwT5WYqDEsySbjRMFzvoJ4HN7Tu3MEVHAHD38uvA49cMdbHsebV258mT5FQ2iz",
  "key6": "5XpYQx6p3QMgBrBvt1Gg25BYJ11ALz5CF6bBnrh1gn27DBCRPuVtpGPCMa1Bc6tTbYUzM4Suspydg4qxGLwtrkCc",
  "key7": "3nV21ejTX6jseDisquCEjuFmbE2Y2Vts9ohShc3qN3bhYH2TFGwfwJ7ygjZMeVqmqy4mD45MHN4nq1SCZWbdBb5N",
  "key8": "5zWs3Ksm4BomqbJdePQuJNWuepHUWFuHf9LQQ8rLPH2o4WbcvoVSm1vicHNqz56MKp6LYG9MstuHS9onBD9ofoHu",
  "key9": "vEGiqWzsbSwiWzQxRYNFtjGgUGzZ3EpVw5BQCTqStf2zfqRWiycTuPJVyiw1287BH24qk5yXbQk76SZcr2LjJC3",
  "key10": "5MQHur8YNMasbUZ3vEpmrMhfco5SYKdeSEcr5tMmcni52YNRvTjSt8JJabKrpVKz9zerRMao91zAhjGJN3kZcyL3",
  "key11": "3D4aiqaxV5253fZdNSpqj41V73b1ng5hXFs4Hm1Cz4UbWEtEDHeVKNpdF2M9YXp7hzjLavsec7Kz89TysBDrRA9",
  "key12": "QudxbTuSz8wuPjHhoxaR4fuWuPLWHQZnnkEbTPVVoek6PrJpEy7HBcZXHCyezQXhFyHTsivQTkpYk6Ngnzqjqtn",
  "key13": "5obATwP1X9R4y8Be93pYj5dqXnKzuNf6Fse7cZCHC3oufCZN1W7QqJEVDAsWSYEHYYWsb1koALEGsat6sXxdP23y",
  "key14": "2qVAftukipGCMqRsTZfLQUinEeYZ64LWCn6qw6K6n3fWeogmKyLcgG54RxWEFTjHZeS58bG9esrPdkvdLGEriXDQ",
  "key15": "3jFrJbSqvxmDQ5gvdqartw1LAicM9ibr46b5tpAPG31sR7tkxdWkgw74CXNNKen1WsajartXCFPKqNJ1SwNjzd6g",
  "key16": "49gMQLf2xvP3SaYi5fV1ufgPV97RHL9YmkWv3KGNBG2poDMRqsfZs3y3YeW1ijWQgk4gDrXTur3qkgnurSRpJWLZ",
  "key17": "LzJ1xVfK7mTe5TGbuVtQZGdHRzfG5p5CSgVbQ8MtbwkVquSVqRfs3EM182TYYJcSaTkSZZvgiofkU7pRnu3gCsi",
  "key18": "4AZPVXMCCjZgkAngcDu8gKLEhBqUAuXzU8mVV7j4p4uL8Ebp6rT23fAxhgmZns1yxPiRm4j9h9jAodpSJoTdLqeM",
  "key19": "44QxiBgzUbPjtehZ3EYU8QFVBj7h8xvdR8Z2eJ6JtbkecXUsGGfQGbAzUWovuMb9WFYSf1N7XsEVVpFpQi9s3W4L",
  "key20": "LRJDyZHk7vgRBcZyu7PwH9EYjB6vYFvwD85aT4aGWzQANEvCV2X4nu1qrWbVYyZY6nq7fBm4z1cL2pNUySGZUaa",
  "key21": "4iw3WEQhde1Dh5VyN63zBSPvMkeyBX1F3PhC9DDzZBpWot8K84GPRKAAZDhRDNxLuAGE1Wk4tSDko644MTw7oyyf",
  "key22": "GxamYzkNMAZG6DsaPMM2Y9hDnqe4XkHmP6PuQeyuSxME3DQ5LPeWYBKrXWQe3H2Bd6uSmhcjaHNBA9W45SG1vBR",
  "key23": "4F9KJbhvxek39ghbrJvo97sM7VC92JhU85EfjoWRk58jiek4fk4TfPSFfYQzhsfab8Ur8Ye3irDahtqneJUAfzfn",
  "key24": "LY3DjiaV6Zp95oXEAmcmMoAQ5y1iaKEYsrp2eaJXt9gQRGuracHtyBscsWUJbwgiphmZp9XKwjrKcKct938gnKy",
  "key25": "3jHgqTAMWcAH5NMKXLvSBVVPSPwB5ADkQ6Q6yfJeSb6PqL72v4ZfKfJKqrEqicGkV3MekTtY2Y2a7h5TrNZFp3FQ",
  "key26": "2LcMKBzAgTYXUHSw6QhYY3LnT4jNgNaAfej4tw1UjtM7mVzBUcx3J5qFo6uE9k8g9uWq9Xri5TRKiq7f3vQwK3Z8",
  "key27": "3XhV9tpkDppQmG617WZqRrK4jWz3eCgKnAhbLodLEE9rTxs1M4wrcdwukizJ5WZbweekwELedRH9dCrdVEehXFGF",
  "key28": "5Mh5wAib72LpWTawkqCvBDuY9Y4iRB4g3vKmbL5xaLqok6Dsgckx8E5akpDtiQNNFoCt8uD7BwVhhDph92ahGR4S",
  "key29": "QNM7iahitGzKRvHSM4cphXkrmhVUFGgXaZNSCTe1hY61GyEBW8i28uaRTdzmDSy1H3Cd15wS9RmpH2HAFPJcPAJ",
  "key30": "58Z1gXxKD5Db2gV6XZPeYiymHX2JrPtg6aEqTdPCZ6DcGCupc5U42LPCiRQmpqCYfiXzTqekwYDkw7yFn4Yg4Z3F",
  "key31": "3Noji3KM5nAejavqPsZZpX2tPRvZeGXBEB2vPzBgnyxgQLkyEFbbZCVyhdSDfhiH45dq7EgwddXaPJVf4Uhvyvfo",
  "key32": "5cGCzyUEFpzo4tBdNJMmpqjVKEPMBejjGyKA9RcQbCsHLsYrX8XeXnzp7AGyXQh5D1FzJBaqeY2JaHpEvGjSP2pQ",
  "key33": "4CQfKJ2PoTdK7jdKdGiKAjT1hJwBQhZXobdoiDbaYMXvMQ5AFab6TVq7yXY9aFbE4ZyYnYLehZ4nWyiX6Wjtb3tM"
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
