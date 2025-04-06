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
    "2FYiZzRpTpmRVDU6eN7dkxmR4LFKgYibzCyDCtKGdVF5SfVtBVoyFofZ5t6sEPvDE7VFcw9A9mhTtDqymskS3d13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z6WfaoWGvmoCGowVeX82EaghBUzRqgm9KhsHJYhTh2KC4Jvw9iVgr4dVL3DdwU8oWWpKuyawk2h1FvuTNXbfjMc",
  "key1": "geTWc9knvYfWdVehYbv8dtU45qMmYU4poJTEH2wqYLffnmqaLW2VJGCB1EgZEm9zHBkescB3mfoYMN8yscXpR6v",
  "key2": "4bziqnZxD1yPDTVUU5mjqNB2vP2Gi3VakL7qJrv26n1XYDLZ7JBqNtMMSERc9jNmk3Y1FqVyhL1XEJY1UaJmwtE5",
  "key3": "5jDko6qUtwsgApjEMmtunuoV1McEX6CeQYur7zQ5Kur2SEXSVwi3rHoYspHWmTTuhK41p4XBziECCNbsoFg6emSJ",
  "key4": "4bYpy2b2SdYhCDJuDjK68VHJA4LC74G23BT7iLVHGMffCK37kfoHLhCUV6WiLG1VRBKz41B2DbMdWoE2WxtXmXqw",
  "key5": "47BfaE15tntMu2eMSeHJctvbXmBSksYqfY8M7BBp76qF6rU3Rr2te1S3LQctEtZhcLZbciPHgDcuQjbFosYDo9Y1",
  "key6": "2R7eEYjHBwSUL8rUc5PSQc4KEmfjcdCnm5AWVQEs3g1xUqBztM6R87xCuCe6vrgM6BRemgJHwMUFqmvbEWRRx6cS",
  "key7": "3RWpXmyvwrvNAFWVBvxXbhTZ4W2NuuWksNonhmnzk7kVkNqxxEuHPqmSApYfYLUertLt9FtqkecPoLo3UBmHm1eH",
  "key8": "H5y4RAAVbstcTef9dxhchbkmf59eYGrnRt2EYHpqT6pqyUFPmcJmPYfM7S7aNQfWAByw2S5RrdRDZ3drMzqnBKM",
  "key9": "5YaxvqBcJutapvA4H5vXMgbP5Xn3H12Y94AMe1YAXFLLt5MTdxEdxgcQikzpP8sGkoXsfsWChnXSX97iBQjSbjQF",
  "key10": "3gP1uq1QDr25v1NNVFQzU5APYvz9M7ZJkpo9yFYDJewyKfS3KpWe74bj6qCndH8BDJavszNma8mHMuhd4acyVg3S",
  "key11": "5GsZrh4ZM6mUBqpSihXGfqmLTwY6asnJpnvxhBsyaUGsVsL53fpHZkBkV98amjNi6dNaB5gkkvtEFtS27fQyPDBG",
  "key12": "45HG6VSvEcYEVAsaPNUgv1u2Aew1SmNTusCingAFXjCYiAMBqJ5sYyjcNirwLymCCf8cwp3c5ERDTr5XHE3f8FmH",
  "key13": "3pt6tJcGAomvwrj5GbNQjr5m6GiyA1CYmCQXXEeREKWQHrA4JyvDwUWwNqqUZqLQH9YySK5ZqZmSCZw1nyCoDDPu",
  "key14": "593FL4F4rzKbw6xj5R7B2cD4sLj6PQTftuQPPmMtfq24faZJdAEz6UXFgXTf574kQuRgtemfZVTLYogJ3gc84Xub",
  "key15": "465CGfxkmoAN2CQBRZxAnWzJaX3QQtZqsRnhvgoMjYSxAKqZo8Yjd78XynuNnwCXUhDUdU2rCQT6Bt3XGNrLhrCs",
  "key16": "3HcPmoUpAquUfAZp7XzRdrBpL7qVJAkzpNTVgp9t7Ha2cn3jAmxX9D4tVr7pXe76RRBzym5c3QBScfdGFp78m9vx",
  "key17": "MKwskyfnz6QqE8pooYx9v7iG5Sk4imANWbHMiumuxgzTHesCN3eGAGpSXzmAAmiBFmTf8dDjNXQou5SwtvYf9ic",
  "key18": "4hkRKsQmb6UUjJnPVwezJUQN4nGJP3gyWhr7qDA9qLVMUd5u2vuq2tVQMqz6zSuerErw3Li9N5ZDhTKJMBJwcsPs",
  "key19": "23FvuwcyeMUcH7fKoTneSGvUvqJFXSfaupM7Newr8csTw8UAyfwFgsRzWnG52m5aVsLjaGzFqdHwHoujxZiyaRft",
  "key20": "3ivSnMsBt3VUjCf2TMco9i9BM9o7dQ437fvfGZJ4JqPQ1zeeQFiuSGaq1MNPJPE8qtNupYDyvGfoPA7x5qWpWp8",
  "key21": "5Q8ktXZukP5Qzpse6JP9pvZpzdTfzMhLnAsxmgy75gHv4LDEe5JDH7eG822kSXLGGbU6GFMNLEgAcgm42XBAaW9D",
  "key22": "4mGRYbJpgEPCfWdfyCZxRFWxPdunr383mt5JtSTxPNaPdcoviFJE2tshXY32UUFZd9BnVsbrRNRwQv4pRhN1ATFr",
  "key23": "3wFTMtj235kpfvAxKSuoRrLffYpHDSjYqEwrsYhHmsVvgc42j4GJuVSJP28b6RfYzpch2nHD9UzYNmsPpEjLnAwe",
  "key24": "5KuBZi4cbqL9NJc6TP1sDGsmyoQNoAwrvfKxqbomdjovt45ShWwexqdyuaKkhTqgthVPAigPC1TzfCXspzYx5Czj",
  "key25": "3Wgfqv9paFif1WEKVEQe2qTcp9ZXjMsFwPoqfzpme8NRATXfhMFsN14Wbd9z1UJ7sDRn9MPdRA4ERR8fycJy7CR5",
  "key26": "3DBYQ1EMuvgC3rBXWz7MQzBEWNDDjJfmodEerNfge3PcTLzZKPTv5TwFDDUGioXJvJCc5ZSZU9U2HowjoS1YaHRW"
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
