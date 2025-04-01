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
    "5KAF1GPCMnpAB3DtQjiiGymdVxXNRoS57PBsbjKKj7bdGxwspjBQXgGoE1a8YsKwbmm2vd2YDPavTNiV2y7M19oy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XFSq6KR51MmeWMVeh38UMgJSEvqHyAH7119DQCQ5omVum63x9m5rjWw7iFdTZpuhvnqYzzUHMdPK715ceUH9vYR",
  "key1": "5uFUrMfDERknpqGSqWEpwtSZZ8zzmKytasE3i5BXBJvERrZ9oDfMuqikEBzPfVQYAMEM9jrTmTMGk5fcFMfv6fLH",
  "key2": "3sb8uYDHTMAzv6kxbz6YZNS6zx9gB2Qbg2AXn5MJtNMaWR4hQvXuTKYqBBBNrssUtP3s5aqXEyAuhTWbQQdByA5m",
  "key3": "4D6AoDMnMGq6KbKPgDtSAAV5NjSpppMw6LGFSJyxANfDnWEygqyBdvmad3YXPZAxWA62NXg4sjSWTsGG4wS8Fixb",
  "key4": "2Xq6rEwmVHNTrV6MMooC6BYjXrqwc4cGNgYPCTHioqG5Mz4uwhggLh4ZGP8Vc2VQYDcrxTpJiyFHCkXAVozK3ndR",
  "key5": "rxf2rpvNeA7ci6jyjeBVbZpL8KKTBMU9Ly5uQn8tVJq68p5r4wP5R18UKbJDa9gizv5bvy7bsKcUVMaXvv9evSc",
  "key6": "4bzfB2RT5LLNemy8HPrSGti5bymtd3oP9U9TuvMMA9FeamnqHt7qazj8tgLyhPzwUidSiAynYRgQtchzsgqUNkcF",
  "key7": "VsgidbFm1eqbrMGvY5oqcV7tNXB1FuTjukm4W5CGXzokKhtzaFQJkc9Yc226u9cELHeqE7Kc2PhbVadN6QmaRqd",
  "key8": "3HyH8keBHTfcbfuN8XgwD8w7aWvU2ENxB96emgCCbHcQMod4yt7hXaPjL9qDyj9UoFX7T6JnXxe9xXeASDPt3pLN",
  "key9": "4AsssAyXs187WBmwCAPUYTDADV1EeiwsKQaYFe4WBVhQiw13xYk5nocYj8vgnCb6Uj2QygcdfCfN95j4Kf5HjZ6d",
  "key10": "nPj2yfSazCL6FCowS8rBcXmS765xUdDFbuHoq7bH7UX65h6N7TTqihAPF2Y66QxKSHwyzvnJAEM73Frsy4uj478",
  "key11": "67Hbp2egC6pND8r6rJCAPEa7BqdHSgdhERTuvn9k4p43S96pzEgZ3YXdJsvWWT1Pb8VsJ8M5PEkaX1aKmmHTT2VY",
  "key12": "5VT6s8YokqyB2NF41WpjcLGQu6ecrwbJrdL8ncBGxpnzau2AyioBy9xH735FiDhiuXhvfDEvPUzzX5nV494VZXhB",
  "key13": "3LrDE2RGetBw3Ykt45JZkZT9CCyyUSBqkQ2M5LryB9dNFLDiXN4w5hgyrUxwiU7hKNxgmtTxPBDvBMopj5PyqF3S",
  "key14": "2N8ZAwp7WyQBuz9ysKYwCJKr3kGbgZLwPc2gsyLJqsipyFRP9mupoaCFnmapXP9qKiJFgzHRAJzLGV9b3Eck47kt",
  "key15": "3imxiG75XEWhsic9ZtBMj1mwx1rcpPpJaT3dAyWD4TARH1V1xppx3vFr29nbwQ5z3wwvFrZktRkK45NsKzFcGbYY",
  "key16": "2KbezG5SU8k5ytFQ8WmaEj5cjDmBvKEtafGvbjCa22p4z5uCGMBNpJhmPeXWMzrEMNSwh55TCm6yWFqegQx6EWc9",
  "key17": "3UeocjKK8jtoB8tguYz2k6XtEcccbqz2xASpMqtUqq9y5AKCBSSiLj8UNBKYkgW5HPjemuaSXP6EXNbf8RwWQXk3",
  "key18": "4ZsjrDaw4qcfC8k75nmEJWkujjYcSJrotMnbeAgS5qeHozML2Q7X4L1Nv8dTnn9Cr6oQcmmBEdethntWVLcnQeQi",
  "key19": "4oDgZutQ1uMhreK89NmUkYGJxodhX3AwQc3fD1SKXAkEj2dTBgz5jKp2XfY53kvRAifkD97hNMT1cdr3Sx6GLYN3",
  "key20": "2j8pv1wkEWqZCz8xzPpNPV6rhd2pgxsTFtJbJHTqQ382ErhtzsNo5byaoLY6yyceYFYno6jid8xrkALJsuvL3rUj",
  "key21": "Ldw7sbGv7DCty341kAoCSk2NtEgBCe591ZAGZ92HsYCCABnYX88Xvp8Uag3ei3dzBommQW4VzRWUzrjnXL1Xpet",
  "key22": "5Lrpbc8iguLhpP2puYYWrciWynwuH9NGYY9bQePBRVB7ZEmycZ4jSZqr9o3H5Ce9hCsNTC4GRfxEoU58LC6Hi8J1",
  "key23": "3Pna6RXJ2e9DoWqh54eoHkCM468y5jPfohCwNZ2tPJdaXjzV8hQ6seijyDkhJe4dA4vaG2Nw69h1UoWqe2Rg7i3r",
  "key24": "5TFpk8MD7Y2pwNTNSdkm4UA9oDv3a5GYqqjE1591bStUD6oeMk5baFN17yfydkUy3LPghAouPZB7HrY93kJjQ3xc",
  "key25": "tY2YsEBNP2NvTqabyGkiXAk3cDR3w2VgZQ75rqs9u6nnfguBetsT729KWqYa18y1ED8pSD9d7SuKyeScLQhF962",
  "key26": "3oaxnBNUvikyQAM9aU5ZaZZK2YpFDiNGgs9jmi33z13AXBQp8GKZGHAaiiYFQ6HPkDSnRYDJV3Q2W2LuuZrzHDcs",
  "key27": "66fbvFzZwdZ5a5Rg34mMaDqQMG5XHN1WYE4WrDp6qWQ1EBuVT4LwqmrV8u5zVuMkfVY1n4HPugdB95dma2uVaZ4i",
  "key28": "QMoSfnNnpFc1dNQf8Mn2MPmDBk9MfkV3DiB1czcDiMiJmm2uGA5FQJMy2z3dmzZ6YSEb9qdnEvhD2NDvUXXt8rW",
  "key29": "3mx19qTK9Dn1BZvtJRqwBzXdubWUj2JuMdsMxduc53jHnjPnNTxE9ZvAPVuZJKsUZjB6Ud2orNFSrbddtjj5s36z"
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
