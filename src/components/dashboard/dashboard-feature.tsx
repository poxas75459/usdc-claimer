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
    "Y9EBzyXQcqfFMjDRCmUbE1VEzNUhtvARGxmpWSnBo3wg9PHEANZTmz5WUMNzKCxvHdxXFAXhVRF4pBXdLDSFyyQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TbFYY2SvhzArkUJFtX21zAKyZoYuVv225ArQumGXR2tjycxq1JGEAAK6B1tabpVLJbznaw2EGHaVznoF9gPxRge",
  "key1": "cXcDEuKmTMeged6ZSQiF4YVgtVj2o8uRbqacdqsNUfYyoBDbGodcJoWSw6tZ63dbhD9reZwWXRoTfqVKd9ZumpR",
  "key2": "3uohCUArf7FYuBXm9M8Z7HFVADbQ3UrqiehPgaAPH92k9zZPHZVH4FddMdmTSr8VSckVrp1DugijX973d1r5JQBi",
  "key3": "4wztD2WTdyQ1wigKDvFBnUQrB6fMhQ5FA2p21vxRtUa5aXwrbgqQD1WG6kYSkgGdPMLvYGevUjW2uRuFJ2qmTk7L",
  "key4": "2Yb3wEqo5m3wuxtxMcjN2R5TWd1eUZwYMCKNwTcmQywYbvHCgd7fPs3j7Gr3f4aayftT6iaPXSDJ5TLa8Vt1gLFU",
  "key5": "Neie3wqEJNcYzDmGqbdD6QmobE83dqWaKgKfGQcY9ezAkTioCqd85ySmhDq4o8XCp4rUh24yWGd23X97jRkH2iz",
  "key6": "2ejgfeQPSJQiyZ7Uxyew8Gwdmy4ss32u68DKcJ43ZyCw6GfzMgfpxv4fUCRkDd7QBY6hwBs7sAtttc5AtUTfzuP9",
  "key7": "4cK99fHeFmJnTdQVZvvBRnSesQhfvG7NQPQuhBx9QwGDGboGyfFe2QJ63d8q5FVBXRL6yQotZ3ugU7f4Rr7EMEJD",
  "key8": "4JXKSjmtVtzrgycxiiBVYNKPCwGinkY2bEe2tbEhwPKJwhTuaPkpTM97NXYp17DU8DoEHrRFBvuHz2ETdVXMEZDc",
  "key9": "4P55WivseUo8W1UJBUofhdyWZ1iqJq3RCsWmzYAC8owY3st6xLCvMHnhBtsZR5H7pi6F6kAjm9QiWa6kSPsEH7Xt",
  "key10": "2USiibSgG6quAmjciJqwRMaNNf5uiT9Y5UxVtyT1RuXNFG1Nqt3P5Zj8z5a3RyovBUtGRqMJRpyYuC5kppSQm57S",
  "key11": "4NY6dDpVK6EwNgqwaXVkaR1WxSBZ8e1pqNXri25V75KeBd7Xf5HP3MhfedTkk3HMabUpjMsupcfmaZsfKHkUNRjF",
  "key12": "3PDh46FBCEJm2ATpLVfeSCmLpaSYJB3iZKDGsjGXWdyWoUEC3AP5CupGMjKQsupykodnFqKR9gK58zTdWKvSp49p",
  "key13": "4oDPQfZrPDg95ptty1oyvdrr4RsPtjtJsoMP5K4SBAhL3jJU8hpx9MeDiNLE7DCsCqMw93P9vgZFBXgD6zByJTf8",
  "key14": "3Ht8Pu6H7xbPEtP5AvMFWZ8XxBXpJWNQkkJTmVp9JBQbM1cLxxSjCGVBjYzWV4g97msTcULC8L7jh2o2EbJaQqKn",
  "key15": "pCPYERj5bwiBU9nLBbNatTcNZbD5Dsgi4vwNvPgx2nni9KdpKXug9CucMv9vH8L3AqRQXxk3TscT8zxLGTCTs7R",
  "key16": "2bmLNcF3pCDpqQMZrj7ES2wHuW1QgYEV5LCfiijBB84L5VhUN2BgU3fhbUa9wbxV8oHTYmuSFKHwCq6eUuVzhJFD",
  "key17": "3yxvBdrEisry5UqeuELrq9CXFLx3Ei33zN6gNVTY7gb5MTocQT216kshJKzNHTr9qAECFThpGd38Q47LwJqvtZ5q",
  "key18": "4ki9nj5MNEg2cuDL1Ec1pAQpyiBFP4XYUHga63w6euZvet9pQnbCRgaE5sS17BqKpVpMYZobkVRYGSUB3a6rTJV2",
  "key19": "2vKwo4bbWaYYNL631jJhcd79XeB1ncHfAXBBavLLW6sgyCM1PQuKchULmQuEmz8oNZ5VB45JDzHf3w5KiVYQ24wR",
  "key20": "2y5U9LuaCiddNzgg6gzFhtgpADwXiW7MWapTs5mWkYVt2unPvJr4V5Nn71918Vb56525gZPihPCp3rZcaiiyQjkq",
  "key21": "5rHpQStJa8o7Zuq5tmfZxeggzv1vdvnUAs7Lc8GwM8cAwWsthpkT1tHf1v4DtDsEaUQUnQWg6aCnugV16qERwHFh",
  "key22": "xCQR84XvQLd8J2YiBPxpwgDjVTA28YgyheT3pwQVsbNX6vtue1DnsJMcsW5WeJmZLe6yiAEuQHJKKN9vqLLJgL5",
  "key23": "NPLH6Emg85huXEKZHML32uccQNj1j3hqFGKnrC1kjtVnxinQR9UM6P4CcDYhRxc2hxnuWHbG9zzwt33M6wryF2X",
  "key24": "5GQC8wfnU6PskmZqqmHXp6ybgD2ghrpLVRdwymsANWTfET2FoLynG3nmdhTGj9BQdst2s6oKBUBV1VYBfNnY2ws5",
  "key25": "geWw3dyFebz8hhK58JcCLVrApP1WufJcUvzMe9Zr2Z72Vj6VZbfVZTsFBZJbMRRZxm5hKNFcaPqKQLuoabzfGAa",
  "key26": "4gSyxatB2rBjtP3MV8PBWD8q6UMKDwAKgSyhUaXrnymr2hDShFqZD8mAqGdCAnwwThFUMEv9wm3twWHrPZrkVg3o",
  "key27": "4BMGXKxNcuQtoPGiQT9KgMVtnpdWr9X1MLpo8sJXszMoc4DdGELdLbanHCb6PVxy9pvRQhTw6CHrSmXzS4RvBLjb",
  "key28": "47WDTFi8UVGHRNAp21ALdFbh8coKVvWMYfXnzFh4DvS2EaSFueEZniDuoNKaCbqw6uinSauMjBwRPuoCtqqJVVbx",
  "key29": "5wycVA8RnLo1EyrYpers6idB783kcEywahbtwMCugXuahYEvGJavEWL9qfXh38fJtZibL35ngGPqm7VUR72VXDkm",
  "key30": "46VoieS5ogycEVz4RG5kFqS5FQ39qbr4trsLPcmbLW6WNiFiBpKbyGCqDqXj6RodajRoBzK9YqUCcotfvtrHU2iJ",
  "key31": "Y3GT2kHE4G8R36YDpdTWXG7PY7wrBuQuPjJgGogfmdVAzovznBQhUHFim1MeoexKucVKRrLhziroZVti8xstBPw",
  "key32": "5JmqMuj3jJu8Dt4qeLeCcr8dgggrdYFBqfRDq9mWCn4Zq43WcBuNgcsVdEsijLmPghKCRKQwHZAbJJWHkReH7FPA",
  "key33": "2Ff2hip8VAY2BuZS8C6Lvj5cqR5FmTEQUyFVaSYka6Gj54gGdoWvCK6aHXusnhQo3ewYSyHjPUst4dmSS8wMx83B",
  "key34": "3JoLdZMuZzBDZYAqWCgwJv7eMFgHLZgpafULBSMEdjM8Qz4HdmkGmWnq39d2jv9s98gDycdto6VX39YgkWwqU4jJ",
  "key35": "nEfA1GqzVAn1SAQzueLPdP2wuX6TeibhV3tH9ERbNpVT97hNQDZyG24ZRfntAZ4DP5spG2CTnbHTKkaUM2eweSQ",
  "key36": "5VhQQGprDyAq5L5CbCtqHXVUZVnK3qgMkXKKH4E77bH2SDCkgFMVT8B73eS9y5Q2zJNxXnrMbyxewNPcw326aLz9",
  "key37": "5Lzj3sT6QjS4k2bXoskmhQAjgx4v5hqYuR5KDrqWiw8um4kNtFjU4uf1vY3moRNom9zexywWf31kFiywbphW3mG8",
  "key38": "2VbhpC3Wc2r2FAgZ3DMvse5J1YF2U3bDNyETYq69bqSUcUMXmf2aZCp6aL9ToJnUBJxsdRQk2pCqmid7uFgVezNd",
  "key39": "3AsNT8xffHuzUAHCZ6r2eFc727oADhToJtjFfERRpzpQKMqPVMKqhqtT225HtF3jiGyYdkjpdeid61EBSimfgEQq",
  "key40": "L8o8S9tk7BnrAsLMvhy4rB4vzPe7us5iYDBouDXaxAdirtVt8CFWJQaFVAjJLhqE8jH6XrTJqWUEjAaohgCBosv"
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
