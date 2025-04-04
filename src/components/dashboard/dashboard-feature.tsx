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
    "4RJ2jEuNWpwsZz64nt4uwEUHtCdc7Cr17THKoj6bF6ATuKMNU4zVhpMYasCgq4e5B5dEyr72kM3WK95Q56m6ZFJK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S9gsyLySgw3kGzrBJXHw1VAFFfPx3UaM4o5ZoyEcAKrkkUN4zbgtf31pDGviGsEdppa4ibccVn2dHBfNwHzkUty",
  "key1": "2p8DuqhmavLPAHzRGvgMgb219pEwQDS9YHbZDTr8umQQVbkWCiXoN453jnTNzrhHtdhoTMjL5oc5w76ik5F38mUc",
  "key2": "1TPJW5DK8mnvPgpR5aBsQgCAaApvL2CGHyg1hs5JtxcCNRVVDYdbgsCvSxujegQRXwLazApmpAC8ekTnra89uf1",
  "key3": "zdanhmkiVpveUkeMH5oHprKX7VoVJwEQixhxMhDB9voUU6UUoRMbz6VS6rtf6NZxTzKaQT7CgzCkPsyZ92SoBow",
  "key4": "4tVBnpnQpUti9fts6vwjPWtmQLUMvCAsv7BEaZNFvTxJVx1dMJ4f1AASNtv7YSY1SK9tEG9mUPwtLza4JrmBJ8MM",
  "key5": "DfiBXFA4eiivzyhsuUZCdziVzHzt8Fmrb4bT5PWURYeQZLhrVRT7eLMYXpK6kVQJo5HotuL4Qsc1JgxkDJmxt5G",
  "key6": "4KewNo4rCuB6PBq7rhAQ5jNdPL3wjukAKNqfAYYqYnrR95xVbphwtKWSFXmDxCdjXpe7EDTxEbjHESXY3rrfL6qH",
  "key7": "aTaE2WcVTduNAz4YRNLqpZcDWBGpFC8vxtuXk8GDPDBv9JGJdQrN7ST1cZcoBpjz1XES1MdzirVBCdKn3TkLBwp",
  "key8": "3PtE6XdQbDacahXkpwYphawqNecsz2TF2P5wuWxqebuavmN7fpiFGiqgqorfcQmS13QbZTKfPoA6EJ3K66fGxoo9",
  "key9": "2W2hVG8PnherHbznuMSesDxBZEnk9XZEDC6n8SWQz8nFtPkHZTVAKbQepCArxmSr63tneiTjLjcYw3gAMAaF7a4u",
  "key10": "2kq7TqS87r65DUwH6JpQJj6m25yxPivB8BGn7Nasug66iyXoVy1UJY8HQCacUAV8ReJBaUXGQyoGJt3uiS2oCejJ",
  "key11": "2UAzHQsW15e27PFgCJS1BDMmDoqs6LKdnrYc877SDnH5KNkVhEKCarVLxzJHyT8AryGSJwkt2XHvpxg4aUqX7ZGY",
  "key12": "2dmRcsMT4CtE9vTMtJwWbecfL2M4kph5qBBABxC73nAH32wwJtHAMMwzFXd4LBBNMt3VRD2QQERqRYNj91DTvZAK",
  "key13": "2BvofxUtKihRSGjjW6Nn39caEtKH3eSY4tr1HMnksj5W8BfS4agXGUSWTx2QYZCvbF5T9FSEkJFzg1K6mBcLMUsi",
  "key14": "28drUYDnmudtseABY6KX1EFa3CUwakHTRr23xmZb9gtgoAfFrWQNpg6Sz7oc1s8CuXoMJTumfMtFh8i2ruXv3zgR",
  "key15": "kZcLvByBKfFqP8EtrxSmKJgJeQkcNvwNRKNgrSsgMdX6my9U4JeZNVxo3okCpkCXA3F91iaafUzVwpbM5NJQPhk",
  "key16": "9GPbcmjtWQLe8Ffkz1LgWChGBWGJ5iBwVwgSaR3KJrLA4AGXVrpqfU9QkhkssJDdcoLKyyRgKAPgxB8JiB1ZAce",
  "key17": "W19DFQCJiEdnn3Sud7UjNvUEN6VcCTGmqbCXFwqsTn73rT94V3TWTXB4Hy5kEfu6CfHr33GF6Q6bg61MYzKQXLa",
  "key18": "5F4Nab3UbFAt2RPtzdxBuaoYfz4HB6xu1ZyRBRsYEWSqTH9NoxmqctNRmJZotu4V6HJZEh4rd4ZqaLK6Ma2skp7K",
  "key19": "2mHVkK2PRzwnsCutm1hdnxV2ago78aiRKKByRu2MLzq2AV1StshfqhU8jHD1Nnp8g4UErJpfYx1tuHDi4SQAidK",
  "key20": "3cFt3pjJkq1kuuGvbEVxM32GJkUGCXM4aZa9EZssH7ffbbV9VGQzJcxDGZHH11r7xTbAJK4qwAD9R3D2nZos89LY",
  "key21": "4EPPnnGYnoKjTsVa4fvLkw9jAEBxAcMc2oCGs7wURqUNg3waQistzTzBEYgFmgvaSisJ3bMJkzpdTtGrPJWgwHW4",
  "key22": "2ez2mfucDreuBYHKWWcyNYZ4tBmx7xrP9XNyi3WAhvaeGra1Jf5CBozFu8hvDQihx9WoZeAQXQWGZwAvabNWPWNB",
  "key23": "5cGEZTGFKEZxaZAnpP3iVxtHVvEjknpxSGjEcpKgeP2UjzvYxUaSD2rbY3GRLxDpJmHcN1mADbnUoYV76QBdnJkB",
  "key24": "24rSdjEzJSDPwsTCdP6ZyNUZUE9hecWq7v2fL1kb5eFKMV9XqBNo98QVQofNJTm46JUVUyf1rgfx8T3f3ASN9Hg5",
  "key25": "4EX3G6puv1oHfnE12DnBLb4tQ6VFxgrX87rxi6wV7TRpu27paQNwfNTS9XcGScJQph99vnDV38NCgx9F2iJPDaxP",
  "key26": "4mSbAkdnUXZqGRNyXgStwhfKQGG4AtsE65myef4r1yP3ZrNpStzYR3sHKvwY2dpVC2wLqbu25ySD3E4RRaFDDegh",
  "key27": "5GjKhMz9q1qAmDsXFkbRLZnG7eiBXWpMHsJgdFyJ2MKKaPRbKYirjQvPn5UV6ySzQCwUPNZfKgAiiBAzXxFSQX1V",
  "key28": "2mQyYKhTHXS1PYarhpEEGn2PtpL4iXGyEZJZTXAmApzB1J9AhMJ15fUU6v6CmgBEyi2qVThdPBcQzvnYy7uAZmA1",
  "key29": "4D3z7gLwYBTLM7xrqySrEYFFeGZkDc2UTrtLYH7WZh989pPTFN8MwF1YKhzFpQBudFoHbjUxcFWDyTKaPX8TjB2N",
  "key30": "4rRMaebfouS4xAESqUQPogHizDGtTv4J2mkc8BfVm1fakVY81SD57J2LnT4KYepaQXrNXMsSQUYiXa5U6NYL2uAS",
  "key31": "52tsKsw1xcmY1ZjzP9uqhx4apx27yTyDVSArh42dLqm4snS4fYPEofXqGWKvh6iCZsEDrEZdWzo9XumdsFRsDHmT",
  "key32": "4AdP8XZ6Yw4k8VCLZtnHoubUk6denRnrDitjYB42DJqyatcsVZ4zpUQdhawV2LsuzVvpcuSHUQmRQdKSQickYpru",
  "key33": "4w6N7KTGJb7Z5xjmxEqiaDTBahNFSNhmugPs2a1LgXYC7Fei9yJRN5J2AykzcGyNsjyNJkgGNZDqUKcX2JQrYSiE",
  "key34": "Vg6WTUcEKoEvytPVcZR1NRdcCR3B4dDGBArSupUTQsN2jbzJFCkSgAwZT5kZp2hEBJw4y8MJy1xvk6mx97uYEjj",
  "key35": "2bhNVNYzymUGxiuoU1kZmyS3MsyxQUtMmFGwnARpmJRSSpC5tgySA7RoxJKmKxN4AR4zJU3N9QZXLgGx47xvwRXW",
  "key36": "yUqS7AujH8ra8meueLTtESnnRmZStcxcvv2ZBQUUnuJLEfKsdd2JRSN4qJZbGMDjrQqcqbBjyFu5rc8VPJYBQju",
  "key37": "3zj43wsgWv3EC44VqB5GDxMK7BzXcYVeiKkVwPaYaMUwhhbm4Jo9ruEpjDH5jkMLfKCtYDiFzdpdGXZYgYe2SMgw",
  "key38": "4KvSdXfLtaBdQ4DfRyKizKtSU5gQnU8DnRqPmtNVTDWWi4qoi1dTMLoxCT8VS9nj4TcxcaaZNkZGrgPYr4D3ympX",
  "key39": "9A1K4BUJHz6pBnoTWFrfCRwux6geqCD1fc2zvnjp46HMRX9zANvULBeg8uVYFt3Jy5JzET9NqX96orhbNKS1SsD",
  "key40": "4dgLTgrqYuJTcRnRrQaZcw8aajCDR52QWJnNMMpi396vA8UDdRqGHay32vQt66BBVXBCffSLH6553c6ZJLUbdEnN",
  "key41": "2uQcwXDGtxJBJQBetLixCm9JaZmwWSzhbkx3LJkQbjTGoEUpz6doigMzDi2gHQUxUygJ3PVwBrGYvVMkRERQiqXi",
  "key42": "61F7A5wp249D7Uqb8zqCz6G2mJz5WDM5swudYTc6MnxuLVN7yno7YbAW6BPXgNPbwvcMyViC6uu9yfjH2ErkQtZq",
  "key43": "4NTFJikpWDZBmL8TRVzowNyvrHUL6UfAZMJFb7mk3zo9irovjgVwmbCKseHYLxtR6UvrUAfCN8VXXT4Y3AnjLPqg",
  "key44": "55Fk6TtZffuToPh7XCXW16uergBKFNonNqty2ye5BUJYoktdoVFT9H6gs3wU3ykvab3MqLP6t4V9eUtZgHgdot3C",
  "key45": "5sHB8oxpSBJDeGmRr533K4iYgPfHh6CwnUaLLJcm7HfjuMhDeWjCRSM4aAqjunfujYMJhJUcKNHHC3NwWCdorYRD"
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
