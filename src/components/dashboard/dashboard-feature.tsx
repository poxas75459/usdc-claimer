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
    "25JAwmSRd7vRBw9coyrp4WSSpioUgD9znA3Wop3vFY2s1M8t63NYT6skkcZ3YKghuunE34N2zuZ3iLW5tAyEJDQk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SGsMbcrd6Wy5DvpCEooevHK7gaY4Vrv8y1dhZ4Eyn1MrqYNuFw5Gniwx4S7xz492jLpvBR9BsJ5ABWfwrodSRJu",
  "key1": "4VvBiRQhEToXLAeMdN3xME1LDXubEbhRZkoRMXyH1qqEHB5mTVhqGQQ8URfSXzD7T96PYccK8ABXuuRqGNRDTpYM",
  "key2": "5sUVK314bKV9gBTehL9QzXvSaDSD7wJebT1E3b3JwLdCVti5R2zpi26msiNPiiC5b1wzxuDrZqdYx2ihmyYEVCrp",
  "key3": "4Jiajb88R5NmK5vs9SJB8vEZLwCQskLqYRkczv4A6NWC45qd1zBVAKAzAJ874NY7iMrWXYGCb278tsB8rXjTeANb",
  "key4": "uebsoJa5Rppd5DS5DJcKPhnhcrTYQKN9rFb2sLHjuQhqALqFF38KSs2fhv5YrdeYyFNUoVFYAyXbgKqS8tzi5Zb",
  "key5": "qkGGXjTnbeSX7Tz2oQV7sMh8RnQan1aQ44UGzbPR61KDFWnBtziMLkNAEuFZxFhsRgVnc3FEZWQk5p6CkSQKW9g",
  "key6": "5e5Xb5BUSp9Z2DL9DoZLWWJp2vJ8uGvTBSpmzuE929N21jnQ9E87tWZdB1c2mE41qKZziqaRxBYpVJVn71yaaRVn",
  "key7": "3nvwHjfK7gWH5Zif3yFkDCcQHJEJqdLEfpeuRiZ2wdbJJ2rcv2Lh43RYxqXXWDDQznsAB7D4BA6Yc92HWF96xm1U",
  "key8": "5vs546sXLPVChRDLopG5ZZer8M6iZDFW8mdtaSQPqkdiV5r1HBvDrTTBhPhfNEXLzwn13QMgQaEP8kci4dHVGm9E",
  "key9": "3M13SG33mpbt965Z3DfCGzx5KAThTzGqZZqwH3rTPSYhLecWEvnyXYePcv5qSRGMcRm173c5XmC5RiWdCJVzFxut",
  "key10": "5jC5hd7Jf5eCysKnTrFMnVMGoiA7nDrg5qZt8oMggD3vdm77SYMeCdFAfqMi3rCTrckdMy3ad3YXxastBLb9P34h",
  "key11": "nQA9pQGKiaigpCK2zpM7BRcNHBFELzYk2fAN5K63zcmVixC1Xt8X1FAxiV3pMgthr2nt4cPoWiLpu4WaG272dLC",
  "key12": "5icjvhk1Bwno3uA9FLpbDwYGFmigoEdQLSyfyWzY7zCFcNtyDDhwySN5aU6QPsH1vAHMfEtJcXmpowgMmbSXNXjh",
  "key13": "4Ge6wkfWbrpew8xyAN1yXgLFJWd71vwQc3KxvZr9wWkE3gJVABJDM8wNEKKySFssDS3rsApB9Sjydf6pKmnhYZzm",
  "key14": "2E5gLiGuLf8Dn8E1XMjs3m216a9JRzWNcDv9dMmw5TUnCPZoaNk8CkJTkEjghjmTyVGfeqx55y7URAZNshD3fVhr",
  "key15": "5Q61hiDo1MtPrBdbY1FnAwG8mmFog5mrTDuhBY9xWrjndAMt7paCU1vEDYXDSuyuSAqwaJrU9hom57sGzRJSs1kr",
  "key16": "31pusLxieMotmLatHbFzrmGy7UJMs1ZjhpGoeqm4NFeVAYbbxrHQZgS3kd8Rucy29Air5RmNqtSkDFGXU856HV1W",
  "key17": "wBv7QyfwJeXbyAe2o3VKZVaYUW5wBCWLzVfFrmd8freZNjLSfucDK4RDWeUy57m2fAe55MdgZJdCruYBgZGBfVq",
  "key18": "3h9THWHkLPQqLfFfwTDpBXcTe4K7sKUfAjBZqTzYr45epavTCzo8xqCUperpBRN5DyMhBjgHYueFi7yWVDGpDjua",
  "key19": "XSkB3eiRNVYQyfNXhFiHH3SFXdCRrQgfUsx8WDotmpbjFSowqZkNWNdx2CsLWHoKcJrK41ZpY1WFmXhu23G2kv5",
  "key20": "4iYU81R8zobARose5P6ochAVDQrdVTUWnw3XFRhB4kqxpqTAwAPsutemHvmGZacMU4JTLUhbXP626uSpxTnTMgzG",
  "key21": "5F7QzqazwEpKEtWAbsfr3jvyKWCaGZLQhvZBSuLzA2kXdqbnJPYR2mW6petGKhXNCYrV5spXSEhoVkrXKkzUfrNz",
  "key22": "27ZqqyGXmgCLsTAHt7Bhb7xL9rLb5XJHK1pk2RLHJtULGoXVgVAeoPSetJ8A3UFrcvXjM1n4w5w7DoxBxTnG4L26",
  "key23": "45y1iBSoFZkD6bK5jTuyW51XGZzGYGiRAL5U6e2mMKSwbtb4WYJoMAYkjaWXxEiy182WeJAbJ8dZfAGvWohBic5",
  "key24": "2UhXSg3mARkGdLefpcNB32JKZZ4jn9LRjvoWAqjdAksAdhpZyjrm6V7cQZB8hHJGDJjcDAuvz5AD9Xk1a98X6UMY",
  "key25": "221ijAh7STa8PwNzAjZe5yDVdDZ8xPdkUN9pRRPznxCW4tpn7DkRCsoMR87mfScNeHH9FDSLfzLERuzb1v6izc82",
  "key26": "2PYEaM7NTu9TtfbU3DAduT73twiWw1tXgmY6dbBGBmgxgRkM37SLgdsfNqa6YFHXG6DBoQYEZxj1ubcuvQy2nsLP",
  "key27": "2MNBwUrXj3wzQ1T7TsGSbuW3mFW7J3GqkvAs4wzdWVLpm1mU9UHuuE92WtMLowTMDcwjcXGh12aecvtgkFGXgiK3",
  "key28": "5feuc5hhsdVqvQwdKX7ZQ7s8WDTYM7W3ax4GXbxhFd5jRP8xFs9neXitnXjgZorYDMkhJfmaYXn7LACNjLdhPQfo",
  "key29": "ZLmNyZH4RuAh1u2GCoDk5oNpjLZzL5ScFwh8GEH1eZf1XdQ95my14ETTYUTmtuSSgp6DGS8k1ye1TdiAH8qUCtg",
  "key30": "44Jq8idhKv616iLFtquvZqtjBZnWfgrGgPo9JUdvCHSVB2NXy8bFrVXgsvRcmUhCB2yT63C52MSk7Xuk1gFhDCjR",
  "key31": "3iM8Mo7LcZqoqqCVKF35ymTfX8E5SGstw5jTLf5MnURsX9a6UX7o3tnkK6a693gfhzpzLJMoi3SSdPoarA8dbXRG"
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
