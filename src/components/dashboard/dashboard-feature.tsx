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
    "2xBJBgLfur4vpYsJ2ABX5a1sxrMYUJkrCGRVrgopYJZrej6ZHDfTX1MzBcrCDRXf6DvHLSGjBYHf5ZHwDAozXXiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uxYVBA8ztHduBj4rQyGahCv9PHuJx8sYXCBBRST8HRWnuv3u2XqkQbJrxxhZXnVYBUKyv2vmB3MQbuD9DYefh2t",
  "key1": "5Lzg8n2LCrAZFCcsZHNXbTVGvFTuPXJJBugShgbc3vmGYMC67hr29efDXJsKJ5BcF1xLJhV7iF1Ljga2TMpaDwWD",
  "key2": "5M2vFLJs75gBQHRPGaiTQNKbLbBhr1fgXR4GAwRpATg81eijMtMEQJ1fGKvDuFpT6UtZq13c7FyvAH7GfxbBfNpF",
  "key3": "37neYZ3HZTjFU47nkvbesUdBUTPJiXKWDQpHD4sDHjcC8CGwpoTungwGRjxdZTdeuPdTatQp2bastJU62mc1yhhH",
  "key4": "48T8XtdAJvqANXjUJZeREXjSp1MRXN34GZLgAnhkEaDernKdPQL1VakUA6LMwuLMRD7o4oUhPwwfb3emsQy5NEfQ",
  "key5": "52wMkUR7oMS4rqXtqeUXcpUgyb7Ddp4Bp8ZK1PCtqDo7sjXzpGhHszgqFxkptLgcyS9Pd9rT8W2URYprd1vo7ynA",
  "key6": "ZjLHQ8Ef2p9JJUFUd3cPX167fEsy4Y2xf13AiyRAE7HSqiAQp9qk6X8PWC63UyZb6EEBXxEMMYwkR6vGD4Mi82p",
  "key7": "twMSv6v57iudLGzxrA3b4Neo26GLB4qihikCgXeeCwBqNyoWycLzgmo1qTbknNntDWgREsxARqAh9axS1PGh2sF",
  "key8": "3LsdFqKemBhiXDKNraGfNNY3fHNcMhMQtnhNMGsG8MtqzyXPfKQbLdBLJvrT2KGrt61RQ9kNhW34XYp2yW9qhr5o",
  "key9": "3ccq6cAdH6C6R1wc6SiTvMeuHjhUNWr3TdfEkmEgv8kTmJSYs6kbzEvVtPyPSGDHagtf6jyEfbDoYMtLyVoNZ6Uu",
  "key10": "2Wf5qhPwjv83iSyzDNL3qrhG9t1eXngE41sAk5yjeFJVA2a2W9xCsnY5vK49ZPLBcy8mhnrftLrA48FumHQv12sn",
  "key11": "3BpbTkStdTK5SanzYvVRpej6wTtLJZgDfa2qzcaFxcummVvtE1dgeE9VFB1etiu8iHUTQB3KbXe5MrsH9YRE9gjf",
  "key12": "b9dComjShfJmwqx3XTokPSYxQJ357bCqJ4dp6Ep2yQ6VMNWqvoB1raW4PSmbYNa7wycEFXedSCTfvvasAkqJUao",
  "key13": "2YNZwCLujN8t5bGaR1DXyXmbUSHEre9PBiKuv5wA71NrwDK53yiXoAPPjWid9Nq54abWAvhFanhnSBnre8YEssS9",
  "key14": "4G81k8UFFG2kLsqBeNf5cvxkFSMkUdcYCj5TxHrrmR51Efs6KQAFx2jfD7NCHbxAdibtw1oDyUcfkHPH35xzfsJ1",
  "key15": "4rcynDL7188BWJgyAWNMy2KoAoj5GyKxhguqNwveZ238nMeMd4UJ1FfGJBbGKNsVKhgX3bNkJjFRdpkBs5J9bDLX",
  "key16": "28fF7WHbqVNcSJcUKUCsD5XvWqF7xQQbpzzGTf9HrRErJZLaMNGeT4XvriMQX8RKmosxe3XPGxwad6aqtWHDrzmy",
  "key17": "54s6xepJuvKZQhNAFDdEEZ6eCCrWD15tnKKFXkCPKbV6BcHSJUWTa41KrAjPha248LkqH7QsSaNKeRWXEP668PH6",
  "key18": "3ZnGdLFuWCynsuDdgb6F2wpsdiY33CwtFprVW1LtvmyjVYGKs826TVU4wikTk8DByw6Wh4QLWGKRCYKBHQN7Wemj",
  "key19": "od7c4oMGAdQo7qvaEpXihfHzrnxcU6XxDxdnhUW7yvEMgxYFWU8i6A6jjwAXwuhTqdkumFRYKe4vPr8ucsYbiDj",
  "key20": "5evDm67YniuDvGHdnQ1obE7crDz8VByHPAo6dRcaVA2WCEQ1tA5y2Zz5niquNyzPhjJCQe2Wd9d76FcAxP6wvHcM",
  "key21": "2e2YsQBqZJ1vXP48ijyPtggcnjSkzQytT5EqtLZFqybYyXXcN7BxqNw7vqbQ3szYxic4k169XrWVKErhMaRfqfNw",
  "key22": "JY1KNMNiDCGWhcP9bmTxH1Hvx9i77vN9HT9DReheCJBXB3PWXp6jSjAbUtLrYMXwKXfxJQcGMAJtD2vaL134Gwz",
  "key23": "4xnAp1TnRbGfZ2hytBTWkeB1o7F2iS3CeHGz7ATZJnQ8yMf4iy226rRxQqCVJS9gZGrMCQATa8pq7ecEtEMWj5nz",
  "key24": "3mLKsJVXHNAA9xcE9KE3kqcNTGT3JsFEmmRY5FhNRPLYLQyf8syr9SJKSef1XiMvFWNqovUg5MXAaf3S9hRPrXiS",
  "key25": "eosY5W9jV22yAEPUddmqtUFp2Lr4uf5e4TmeLF2B4PFPe4ajSp9VxEonanv78fFbeHSPJWbXwehBmrYzSvW7mv3",
  "key26": "23PSLZUTkECp6pnQvUFYhUeDqCKwVhoKXRVfkAJdvdYxzaJWTZAAC8LexoFuemjb96aP8KDQQpw1EFrpa5sVzQL3",
  "key27": "33uyn7c4GPPAtgAaP3WP2jyzzs1u7tRUW1vZa2buNBnY8DUHSfdy4qHKUJkx3VoroQ5o7vJB7KLGA9Krv15zwmW4",
  "key28": "3mu8ca9cTLhamAFWS1vda6D1zdwJvDqpBCEvmn5UJwQVnHXRJucAnog13KeADW9gs8AiEy2dbmqWLk4zJnfgJ7ew",
  "key29": "YbLPYAajPjDbh21yfRpK7mWcaaAFFcXYZG8xCjoommtvGyv7J63f1BoMXu5gfXkc7DGzvWmNF3Unv6CZ4YwboHj",
  "key30": "53YnyXiEE1323yZMCdipR1RmH4VV5k262rgfD1WYmjvd55uxVmfQF2wdf2Mc9E8ShXCfVLU9j1HhmDohLkHCKYBf",
  "key31": "5NARSmaBxBNWgWU8PXVkz3jbVsMbRcbufqvigSGKamAWCUiDaq1Db2Xpg8CSEXGvrBYL5V5zaaneh4x946oa3oBw"
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
