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
    "4Vrhb9QvNyqpKhk6g9LRqJxpg6GhFbjXqK94Q3uvAdt1XjQ4kDzHRQEytCihV4SVe2dAPdvmz8soE6pfMGwjg4CF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zwx7WNntCmXXJFHxJjnuMuE9gBbirDGP8LmTfVEu1gAWXGv5qmCaZzVJ9sASVcH4nvkYbDbSpKoRQMUbeCj1fEm",
  "key1": "3FgSBBrpb2tgwsFZDARj57EaVQJcTZJGPPpJZGJAFYjycRpTMFo7zaECTceJDX1kHo1KZaZk9rpb4UQWuxPBnqz9",
  "key2": "3GjZ7qX3oAFoMS4ZgGeueCD3k5CDCRm79zS7y3QDFG7qAuJPb2a2EX6Cx261L2sVR7EEH7ztAeNbhzjfdcCFBgqT",
  "key3": "GEpMhBTiRLGs2L1XFzY3DgYUatN5otVz9a3xb7fiJYLvM7LikLWqaDAxx1Z9kCnWJzAmfhVMKixqCe5Y5QGVBcQ",
  "key4": "62Mbg1Fy7HjdgnALsmgQTiPGLemwsTUuaMSyMegAJMwtTGYdfo7rmPxHpisCXSxbBxWa51T4uAtGmRPzNDEjJARd",
  "key5": "3CS3DFr7Zd8Eynuap7gaFNNARUsLjYxbeS2Km2abxpYV1Grb56Hh7u2i7vhHJqddvtDUyz2aUR2uuQqerDs9p6Uq",
  "key6": "CwxnDsipFZfoMmkydBV5DWizfd5D61SgLWfTeNrdzrso4tYpgTxarDYp1B38JmaVGiLB43zRbzjoYT7vP1C1QbJ",
  "key7": "3oXiPxXPmYmB32YgFrdR4S4i5UfQhxkKpc3ajEnUZecymEapoJd956uHyBSMr9UYmUqnuxzJfCUkxXxCmvV6MpoH",
  "key8": "LjakASn3bSn4DxWqHWYGGu9mdNXfdZZHZUCM1dZzLd6YsxvAmG51xc8HzYdQzPeLgj3PZU88TWSZuorFKaoLpsS",
  "key9": "21qhC9sQQ9oanigHEiKpCnjGqLetrD4SaD3RkefUwNrGQALTCAn5vshJ3qm5FF2CTxixtcJjZEd5FnvNEU1qJeaT",
  "key10": "5vjFWwPe1ZFZiru5R2KCaGNyLofXBw8QtA2DR8e455MymXXLLvGS7FASfiqNcAhLsB1Nu4DzyuPLkFCtk6NaXUa3",
  "key11": "zfCkebZbfWeMsPxFqfBkDspt37K3LyYbz7BTjy7AQ71rdogMararVVk2L1q3rf1p9WfkJKEHmwCrsF9CuDneBtR",
  "key12": "35Mj1ZphL2Z3JrC3vJppxnF4DYZodhKqKjFj8h5S5jZyHKiE5w1Moyeam5h3DZZs2dpa22us2yD44QXFo7L5NLnq",
  "key13": "2EuUQWrbhepTzamr3rQZwwMSNzq5pN4QBQp6FPt7HURvXFmRHuk2EdL6UTiVmF4ps5fFBMMPVQVNecGwajHCR91r",
  "key14": "28DyLU9h2FvteVpYHedb8a6HvJkB243JsNmnHSudjHu4SDY9mTN2aBQoL7C4ESZ7Q3jyLd58qqmD9TeNgWdDBsU4",
  "key15": "3AmBoTP9DhvkchbwcfgBcHrh9zHUBUwjo9P13dQuujfMCKDLQSp2UychibaHcYUDMj4JpCqRAAZ5mFB5Jyu7BYys",
  "key16": "9hmgoJWLaaPsmWsxDmjgwyCHt92rk65cdCnodiE7ndBgfw1Z8Sr31eGizq69Mj87jrrJzGGELjAH7csBDZ2Pxsd",
  "key17": "313tUDDBcSbHV1kQeLkJhKWqhKa1ZkUHThWDAGZCF1AB2mgLQKcHspAjp5zAuT75xjjrwb41khHRqB1n13WAY4gf",
  "key18": "47TVaGMU5fxmU2v6FU4YHbTH4aZibaphhHdss9MgcKZrLYiF8gzHi9AXkkAtDHy58nDSiMkB1V5ThZhPaShoi3qy",
  "key19": "5JyoVWMTfN6VDAwuEBis3MtMB7NUHv75tf8iWmFcfEzkj6sPR3LpneTUH1Vt9MzHzrt2vHdynSf3pTiMsDBCUWqG",
  "key20": "2cXJUgcdnK17mq1n2kgCvTFWH4FfckuzwFeHZBsyD3g6ga2gdD2QFCDLApNWGnVpncL9JgAxEefzK8fvCd6fzBAi",
  "key21": "iaZ48kiksoPTQE34MvFPtbGMqDMCJhMdYB5Y6ajnew1XmpPGEbdgF7YSDYKkC6FiGGJu2YJYGVJhNV893qVq7nN",
  "key22": "3QrpeCdGnY6VSZzay3xh1ccupEJgYwWWDNLwiqL3XnXqeKs1TrpcugX2JxtVYsx8MXAd6UHCXngYqdSA3t2XZU2z",
  "key23": "2Q3hHk8xdsZvQJYnFsahs7oWkSMpy95tXpRgmRVNG4QNKQDFptN6y3mSKa9M26qaRtmQxCbkixLqBmXHAGw1RV9J",
  "key24": "2V5m8zwjRcWSX3n9ebRDpex9ASgvqUwm2iB8WfuTMfE1ZWxUBndwAvewMaUHkEhu6JhTwutoiwg9P7i7asWf8yQU",
  "key25": "5VEVoXafTYFvLHygGqiRaSZ8K18SiRUdxCWGRaTCiDuuxM6XkUhJ4gWTLEffoTQJBB6kbgjwzNpMPPRsNs8YYVRH"
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
