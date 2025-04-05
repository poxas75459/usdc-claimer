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
    "4Qq6UnxsW6MtcYmnqe51Pp7eqF4msrqByukYEav3usMYWtHu12PunqrpS7xLnojW3bSufLVmXR6b2qDBP7ZBQ7j6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JbyAeZ8Vg7AF6YJjD4T8R9UWNYw1ExEP4ZyStj6p7wsVgBGCntZXKn6fyuRgKaEaxgdd9nFarLriqppuoL2x3KG",
  "key1": "5c8R7fycwuvpXBDRCth71a65hNrVDAhEA4LKfsXbbLkMda18Y1Lc4M6hVSadDMbduWNMWUtGjfSC2GuXdXNC7PGc",
  "key2": "3Gg7Kb1aupZYsAF6VJe7MiEE5HSF6uFf5YJwyvLDwBm7ja8z6ni4mCvigQ6PPFoF9NZy35AC3LsbQoQT4zpTtEFD",
  "key3": "36Amqxd9rNNj12NoE5FkaZHWXL2vUByoS88oThUTKZUgoX1Xc4494XUuhC51qYoFNZZr8hx8JhDNU8qTNkeSechK",
  "key4": "5kGSk1RLkHxxBVb99MkC7BDxwJBHSy5Wse4jeDgT1LSJ6usbCtgacvqj9B1GQcyaSZU8Fx9WHTdo5AEM3Tcpf6By",
  "key5": "2gvfCtzGWGzeM4UobP2zEAottfWQ5imFBYzWLfGRYKPYkA7kheH27HCGrkAVzKN9q2nRpuV3gcahvRS1Le22GEZq",
  "key6": "24fdmhmpyzRr6CX1YVPBDx5Egrfw5vJRY3bVkoq4LsogC5QHVQZvo242SKxgofNZwRpTTXbtsdfvsZP8Rw6Vjxds",
  "key7": "4PrxUifZtyya5W76QaFNm7YMYfSnr5aohVLQ37PH9JR2gMA3D6CZHt3Qn6h4L2o7cE9uXSo1PPVKRQ2zeQXT9rMp",
  "key8": "5rNpK7x5RQD4L2ocV5DmWHGZweoaxyQyvZsKvDpcHui4LYb5gbUjfY2HtrKjyQF92LbU6zZneAPN2X1Hcc5uHkax",
  "key9": "Y8QURrCESx32LJ8ty2KhrixjCi9e87rmSG2oyKbgyEWMo3rdzbBfczo1cFpJaaPRZjEiYZ9HQuMfdzSaznFXnzg",
  "key10": "2S4oP3F3GDQX8coCNZ51GiuBR5gsXTyQwbvv3moffFKQLz7Yj91snVzgoCVNzWhWj9MzvXZqWsnUzM5KFn7V6M2E",
  "key11": "2RU6Y1NQZ8vahZp25Fn75RxqxgxuuL5MCNt8pAV64Ljv21YPG4Awz1SaKEhZbvfcGc5wxHPPW6FdtNTxKDQDTCsm",
  "key12": "2p77BApXSeYBNkoofVrBuPbueYpBiG6ppFoVVmqFxh36PU6S8ZWhbkeuPhES82vsfzUm327povREK4QucfWLKNQs",
  "key13": "4TNX9twHv3rqtEiFNbFi6WXKAQcjttRsgeFenwhsoXzjqpSEh89HX8K6EJvRoEboqtVe3m6SYk884cK3PEoTJm2x",
  "key14": "RoVCQpa61UmvYezuqZFfL53fCxZqiepMssrx7MU4ND2P3vTJr1bU4YAomcfvDtf5jeJDwT24Zk2WcmQL8jzojH7",
  "key15": "4s9Y1QBQKsEwAHnJrLS8ApDULUc9AZ9vsfcAhKP6ehZ6rUVbbwFxT7YPbkwPvhfaqqi3Cd3YLEPinsFmJ7dapnYy",
  "key16": "2jFAoApFWp7tj4DuKenmiXKZpH84tLqGQvRQQusBrda8ZUEPzGS4GUkHFStLpdhEyaozv2wH9g1JWRJLuXg5Y39a",
  "key17": "3EfU8nJDF22xteaHSfsTjBmqtvuoTiznYbmn1zHSXSLg4c32Q275R1Arta3ypcoEZgUyCcYzXU8WUd2YuPWCQLT1",
  "key18": "GGmx9HgLaaRFajD9FF4qY8WDKY8zHNb9QHdijkSuy2K3yKSBSF42N3Je8Wd4YjoR5vEP7bxDZWzJq1aKF8nxYC9",
  "key19": "2TfceLxzodDXNhdHkBkWmqYEPNYeJsxbZ3QckY1xKmU91FK2ZPkRq3hxt72HCiGxqX1KUGxTtoxYJzqrG4QHVHgV",
  "key20": "3AkeEZm8GsWei7txKy7fEr1SCS27za2USLUvRzZyfv9QAgJuCdxjhnxnDe8BDAf4VMTunWkebs3rEscbhayHEitq",
  "key21": "5AMfXcaSGpz1Q1wp6uHjNGW1nnMKxARG3M7xhDrV68uDQ3fK8ijs6XqfpWqf1UAGNfcVBTVqxoWCJhdw2DUnSnSG",
  "key22": "4WQWix2dg31FNayRiMRrj7C75s41R6NLLao9PKeEs1n2Bq33UyYrWTpqeCPeXhPUVd6xJtLrwxEnFJSMdRW8tJKJ",
  "key23": "5t9ZmVkBvpQwRrZawqSxyF5s5A7krQz2YCVJNCazEPvLicWEjgu5ktBD2NYJhj83n6PRGXzkcfCeqhs7tAmQ1JrK",
  "key24": "2sfmhh4vncGbQ5hV2KD58sif8jd4eQuitTLuUCZJHsDDo3iUzo1UBomugPG3symSLMb9UMvypr3CYVevpcKXSMe3",
  "key25": "3qTCDKdHN5GrcnGiG8KcBJzaeuH2BjFQasoXvCRCZPqpsh3V869HYvR1wfnEcgqetcSiYA6Q9rexj57pZdEEm3V8",
  "key26": "2M5fHN51wc74cTjNKxGZdmBTJF7jCKj6TLqBvspzm4sTkJz2GjKjqQVBAnMJuuZWHW1HxkpTLLok7w1TkrtTQJR9",
  "key27": "4kf9BNWDp9gBBE7c9h8gXPpwvMYUghR7kZLqLm6by5i1nmmV79ZkoPjrA8CyJJ5RT8pJgaD7234Lm71JFkwCVHcn",
  "key28": "2B9R4XW1g8U3W8CgR62Mom4KFNDPoqQwzc5QCiW1e5meYKkJRP9YSV8b1J6TF7YwRF686xTW7PnSKZn26uwBBf3x"
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
