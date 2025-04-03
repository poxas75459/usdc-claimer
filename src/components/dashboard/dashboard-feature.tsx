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
    "oVD3wiGDbMeQRsG66qw7AFoqbR1HAjsnVd5GczpVsoTzuyzn7WKtdGNGj74ZhbTrwTdGXpSaiS49tRgEoRuUAkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cEn5Lk7buHxqjjjKe523oahMUMu2spRmHRqvA8MpoNahWZxwL5uJPqTcthKkdYeqLGsz3agFpeFHU1wTaWaxbUr",
  "key1": "3xpR8SPZEYxD6vPG99eduDgWhkde2XMX72RizFqHASvDiCqpZRC5gBdL4Sz9MiocV62RVvYUcdBKRTQwZE4L73y2",
  "key2": "2aTbSf5KrSGuGotohddFfXGsVasK33CickT83h1QYFnokbciRUMtRFu9VFvUJq5wZfY58JAqmArw23SQxQDEj25t",
  "key3": "CxL4WrNgkFFpRePF4aM8axx5Uq2VK3sD1LS1NzpG8UTc65gUoezGahcDKoL4Wro1Gqb7fpskKBzXLvVu71SNxhg",
  "key4": "2m4UVRxVfQ4Vz1sNZQDFaVqKY5pjNxbRZJuYtRXVozWShgmKXDTNh5HZ5DVbYsFmBRqjehyuvMVECUU4RiuUkvpg",
  "key5": "4TNEjBBZrXTxvNTfZkurbSMB8vYb7shCt7iQxJcLEMohfUpeGJQ6wRuHLMVoV2QhvjSusHMuhf6NAYMchJRRrQYm",
  "key6": "5KbymrU1UXgcZ2S9imFXyrgKRR8XkM6D4X22TaAZ21he6pSqBLz4nnpBfr62HN3kwV2yUEpRc5zcdFEfhzNyfL3H",
  "key7": "3B79xxgrVPEks9r7kY5sdzSU4c7E7cpCd3rzPbdraG18KV1NNtDViLjR33rJth2Uaa6RbpiidkdAwx9WFyf2MQdX",
  "key8": "2akkHofNa7aKbgkhF82YDkMqJaC5z3S6Q7pDNMy77iNpJVLfWufxYtW6Dxv9S1u8qV4fXFUkJFuFoZ4M65PYiYeq",
  "key9": "3ovYHyaVEcZ6GEAqg9UTFBqmSqymHXcMo98U3WJNCvLeiAeCjj5Zr6Hb6Jkh7iT1WbtwNqvVoAtLQrghd7qT8Vvk",
  "key10": "5b2qtkfPPG4FLtFbfiSHjXHa12cYaYSH7TaSZad5UmRxc6s9X3nNzfu3GZUoZZXuDbFb48useGexLFhEQ2AwAaWh",
  "key11": "5fRSbxk4ZQPaJZJjqRS48RXQWfP4gJwHxZRub64ALH7sUkR8fozMbgehGyzLyGnMTgP3rUKwk1x2jDA2aQPyJ9wt",
  "key12": "2o7Rz6snQXnB7KrRiDQK5AAuGYCmdyexYshbMGSHt7obTbp4VeQm7y8Jrnvfc6XTzhXvGCr7YvgucjsLtuZ6quym",
  "key13": "5Ts1CSbADbYd6bmK2HPHhHQ8DhfKmEthDX54uwEDU8CNzrJ9kgLbWVrSHHVd5UuhtCS6CHJk9SyvhW7XJfdD7Evd",
  "key14": "3ZMjwnHNVWgYLsceNqRHzNivTVvod441megDgNZ5i3X5ewC6tAu5U13TBN9z6gZhPbsXEKHugyce98tv6yXA1dxT",
  "key15": "7QmSBzqm2cmzJ55c5gdHJuav9GNGkJRSJoEDMxHuZxMC6rgSGvLwF1BaJFTyeSCc7gwZiB2MjwxGMXpKh2uBFDQ",
  "key16": "8CijeqAVhvFoifBpU6G5gwfriZ3mTgnEJfZMcdG1c9Vw4Lph7ytbssLUB5kqTkxDz2MPEx772xU6JqEhi2EagH5",
  "key17": "4xYTiSSfAASHp6je7DcXsoeMwXBFUSEa1vZgv9E8u6tn9BP6i3Xbbzzp7ibo76ZCeVbZHbHyPe3XnkNQ1YpZKKMj",
  "key18": "3xuwQur1PJWuiSiCi9cAAJ6sxXw7gcx3ftaR3betMifRJV33a86ZQhQ5JJ4ENqBFrod8g1wdMfgUz672ZtmUSFQn",
  "key19": "wjWFH1fnqQ3VKKqi1K4xxrrfyJAewqiS1jNxcQzvgPrP6G3VXZozZj3nUC2qpyDnjpu1fZBuPrRDNkjy2Y8nAAn",
  "key20": "2BEmci1B8uGoLMsp98ncM9cDsnjKbYMFxa4y1PvQKeN7nMGFngosjG5etF1f8QnymmZJBuNJ5MXqde7k1ErN1LU9",
  "key21": "28YxE9JxiXE1Sfyd7HCXF2EajUfwN4EmEwmyffRc94rKzwMYGEJRGuVtnG2okMcb11jNDZcPm9t4FLzwgS9mZBd3",
  "key22": "5i3kAib71WFYxdt5F17KDMT9otHxMrg174oYxQD5GsDQkbiuZWKyqMw9DQUopN1p95PrLFVTCBDqHet8PUJBs2LU",
  "key23": "3xWf3eBT4jfJNUeoEDVgEMwRSEuxa7k5EFLe7WjaydNKVWuShYj8GX2abbHdSHRnHn3JChJRYs8dZqSmRZYr4Z4z",
  "key24": "3JKWhSnEM3Ap2NxWFJhSkipwP9b69Rm9QSiRgnQmuj9fEFrKYmdjzAFAsyVgTR2i6sFhftJPRs3ghmgfnHans1Gj",
  "key25": "2Kt4g1uZv6uR6UsGeFB47wZjfdpiGPLa4L1cKVUYGkrSHnVVeP38mxSADBAAb8YQTZbYQ19mMSHaGUtisFpc21XA",
  "key26": "2tVoSwnUnyog77EipdzP5fuWT8s4XGiDWEZLGLThErtCJVmuJi2PTECK7TDou8SsVEXDUHsLrPzQs3brvX5dYKwx",
  "key27": "5LgcahXpKhpYjAkY8dNGAP658C6B8NMrfAWgirSMc3MyKYM2hZo6hwsbkqMKHrK7PsrYe2QqghKi2EFcXRGDPkpJ",
  "key28": "2z8NDNyggAwN328jxLP3otPuRC31Rs7e1YHAxCWwyEzWxd6TRwzdMbQrEg8atCCVyhxVhpvyswUAM1AseANdbu21",
  "key29": "2Na6eyoEFFLs2d5EDZ35s3hNuQqjJx3dpN8ZT9MxtxAMBB6beQeG1pxoZvtBHYjqdhuUGTFJQNVRBm1RwT3empML",
  "key30": "46ifkyW687TSJWDJCK2Bm2Ebfke5P6pMJTDeiRsScmiiygRbnQ2y5r3yggyDcsRDUt8pfsGYWHf5QYvZowAQ5KgW",
  "key31": "4VB5mGcLygr4vzszxjefLATRyiniHQJTP8Robf84oBp72F1c1wBCLu9TF8Y41DESc34AJDBHnyCFE2hNqupAfEnr",
  "key32": "QjCH79TzYGXpPX1iMiSKj42hySTDd8MXJBXzgQk8J7uKKGAtVwA3z1DtxCDmT3942EohLSJg1fqtHGKVjeogeUW",
  "key33": "4D5kDC8cqx7JnSG1hqn3SVKbE3tiQS5ue37wpNKUKgNVLB1KMZBSXHkJ96YCbdjk8e9o1ptYqXqgijKy8MLPZZ1c",
  "key34": "m4HJBJMQeQouZcJob2dpYfnTCCzmyQ62LusB6awKgMF3JSdbXWpa65BotXYCszZyKytzXYBqbeXQ1rHCaH3SPCm"
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
