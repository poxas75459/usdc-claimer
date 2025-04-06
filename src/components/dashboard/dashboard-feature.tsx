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
    "3D9Lxj9bfEweh2NadMNArCXtqmDfWjkVFf1meimjLpkxDFnRmMrxCxNaWqQj7ApbMPDn6KDhyuDDRNCEC5jiXVHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26RdsEc6mMyYekLo66Q7nJMiHyV7ULUv4z3gqVHw6o6gjEd5c1QG26YVRJ58E66wxLbLX78Yjt6RQYDgCMinktkP",
  "key1": "2C1smQY6g5wsATnYzi83nMDN49sQhL6vJE5WzTgLeBRmiiWHgjRbazZgBdLqziAq8iJGYfxdWDDHL1njY8M19Pj",
  "key2": "4syhUs2cNq2MZZ4d1L7fLNEZTmcwpb1QcrsuWzBndq8wEss796KYAM44CyJqLEKbXBLNF5Mvdt1UuXuQphLSSG1j",
  "key3": "4uHDCRddkERCyg5KohkvdNBtZpoeyYhpP2B1dmAzgftajfSNPuhq5E1xZPiRRSdA95LKib4aPkLm1FNYHSqWrVjr",
  "key4": "2zMkZYpHUPZL8LWJUFNz2vDxiJuQj19AnMNAS2awKgNNpeoErkCfUFgDDnyvRLN8BXhTzRRSWiYM6jpJ9AAUdpK4",
  "key5": "2UFhxqBCehBBQNf4Ayow3XPZdu5jgJdjr6bvjrSyDt55k7wrPg5MRHGmy5iTCmM4Zf4zFEMPXKztb4CtUrxgFtee",
  "key6": "5ziLDa7kuV8e7Lmgjmn46D2ge3SmByxQMn1RhN9XUCrz3f6fBoAtNHmovDfXLKDo3vXKkm1MRbZmip5FjbQp9qdN",
  "key7": "216TWkS95eDsTJT8EXXoqpyy4JeUVS2FzS3hX7JjmjPTFxyTMFPEiknnKoGHHECbwoj32wZDJNXxtyuwMbwPtbrj",
  "key8": "5jFo1hCDhErEKkZFVafHa62QvoUDHWMiEZdSpbvby678SiJeccigbZRf2i3dMgXAjvNFXJFpzDaRkkQ3jAM2SrzA",
  "key9": "2f8vHfKT6TD4fFHdhHYR4GinRpeWMNmBizfSGDeoxwQUwW998UQcFwqGBbmAC9WqSGEvvvzhcNKBM9r2c7RiNq7i",
  "key10": "3r2GKUaJQ69EsWa4AFBdPX8TDp1W7edZDC1pFJFhPD6MW74Ey9LCwBoTo48PLznTsy9NivqNPnUBWrtKZVE6HeSt",
  "key11": "od4YggAqf4CZYEGmx2nG6rUpJeHZMn5jfnTDXMKnkTYrgzxpRef7XzWGUYHnjZA2ptzAnUECFRmFjRiAhw2zN2q",
  "key12": "4TTYi3zmKfiaaAzsdwtiZ9JeqitRRnHaiaLrHzSoKGCqmCxRsy1Lof5Pjft99WTJgC5SjAEPCwWoH8SkFhD2uERT",
  "key13": "4HJ1AT4zvUQVbN71UT2Yg2mZTCmnUehhCNDRitafhYXppPo9yDm5pSGX7L9wFUt65QGTu2gBJwtTqd76iDE93tJd",
  "key14": "56Pzkgf4ns561sRRSjUeiwDfPF9pumnpsQ1mrykrCADL5SjJoY8JTqJgnn2YBR5XtH9E3Yc5XAucxvdBnG3dhzR9",
  "key15": "3zCQZc61U4Zcb5XkbQE45r8KLug6T66Kmex3tHp7R7sqZLhzJdWJdHfU67zXg489FiSTx1sRmHSGMvkEc4AuycB9",
  "key16": "3nkaAXyVFkjuYw7JwoL1m27unECLduPtcAewMGmtPfRbhZ8YcE8TeoXMxjtGMpFkgeZ7uZEEw8aRKibrLCc5Yd4D",
  "key17": "34bZ1AX6xt3TP5uekj6gQA2nThkim3GugDn27t4A3M9zkuKJBvb3vMGWoD5BJW5u6YhRK9Jx2EooqEsfMHWYiuN5",
  "key18": "5NJ2CBR55EdinEHGYtfufqeLRrBCb6U8u2VWhdc4hUVnzdm3TLdPPjc2P3GfomkDPMPiD6aVmR7yXtM5PJQx5ED3",
  "key19": "5v3NjXE2DFp4F3spT2mxxcuf8KXz1uzZqbESCaqBM7uWqCUwKbvRQpKZbb89XGRb1RBNyJYW6VTfytDsq2N6VF9q",
  "key20": "2vbncmNXjaLweE98ugH5oyCtk2B2UkXZhrSofSYpgaUQ3gfpApVUEkXfAvJKx1R89hi6DjYBJmv65QN12Dm2d13T",
  "key21": "2shgqFGgxLW9KoWMGQWPaFfsiKdxH1cQMVJ2J9yPSfMK2pnWQSZQiwL1wLCwRt7KXjGm1KvLBhircWHfCnuUFRZn",
  "key22": "2QSLXBTfPKU8VvDgZb6vtQEKZq9BLSwg6TtV5jrUd4Fhxhhj3DYof6WRPzSkCthJQir5XQ8Rs4bGc8sz2KrPEXxM",
  "key23": "5CAjwjHE99u4QTtekpZJQF9DcALpNz57g9Zd1Xyc35fMaN7NHLRRMHifeq4FtNpTj2bmZq9aeKhZGKdq2tVM1oC7",
  "key24": "4ZuQdetkkuqQtZbGKzMZ7tupkFKUaVG4NhSjLeDeWmYJkLnrQZmewNE7xieJfYjxEPnH6JND7uXrqNfa51BKo3a7",
  "key25": "2pctZhJzdijUcrZ1Epy7brG5hrRL7eco42nr4jJ845DGZ4Moqk4p3JVARkQhnM8zfX8eUAt9st1AuNXk99pDqfhL",
  "key26": "5hkugREFUN52mie1PZKhkbVqTasvcDw6y8TwSpoVNB4AwGj2QR4cq48FCxyYJ9PcdQBLM5WUuP6Rdjhk2RdPWyxM",
  "key27": "3JEAFV96uwDURgjEZpFSZrv74zgLMBn1sP18iLmYTn3mngXuceGwKFjjxz83qYrnvXzmDYaSfizLks7EnMVZwY7Z",
  "key28": "4PAPfCoaDCMdnhfewdCYAy2vRP9nUbUAbDuk9iB7JkvrpkNJZt9YpqCpDhFcLecDJ5Bc6PQjSBiHVN6vqY6xYEyr"
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
