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
    "55f18hjDtDJDdcyHkonV2VdQNcKqGvjPdXgh1w5Cc7LCHwEJKDWZ7JNPoDzUsp2HBCfYjobmfERHRLwJUjH5zjvy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KsFnVnGBXEpjPQcWSRW6nUk3unqv5sKFqqcqhuE9VoxaxiiDBY63wKk79hBe9MQZv2b2Rf6KW9cvMZmnoZswjQG",
  "key1": "3oBjcjC9y11tDaHLQVC7CYb5xSq3Hp7Do26oyCyLtwMFzaYQVzuTJGBNnb5V8fER9mVsXcZVShEJgaXD2egSBRUv",
  "key2": "3D9sWqqdBT3ebwYSUk9yJy5wohe24Bx2cqUdfk9MhTzf4vm7bMHAqtPgYp5SXtZRFTzhRRjGXkczmjgbuyjyFrmo",
  "key3": "2sUPCatzZzxXzcXdt7SEBk3qTeTFqgzDgJqzXJbkaQ7KXXivuGBY8WuSBeQ96qBcbL2R5MbgY8htyVed1q9RHTqY",
  "key4": "4fi5oe4TtDTVCs8Q8UXnHJsHDbGgXNhkVrE7iMXWjNzYJPHBLCdz9eZUcxWPr6c9uK3iHjc4vGJagNUaHy6UpBXm",
  "key5": "3hHdwyKVAWnvByBqXFMSpPKDvPuJ16KfufcTzC5NYxBnjUbBwfhxPsV4eS96StHVs7x7PcXYE6oa5BxuYgQCHXhn",
  "key6": "Hepccg6Jp9C4ZrFdeRkgT1PPghrDugwS5n4NQMupY7tGojbyXto2hpbsQEy6vjcNWyrJXkZETVGyNRAeUT1TURV",
  "key7": "38qnwUgSP37DbdvpF44M2eYyqTtaYm7ZyBVrPWC26Kr26s3rSJbzmkU8c98aQ4dEQPrbG1gBf7Apb7xkR1pNv85p",
  "key8": "hq8fqM4o5kQihUqhtbDtrg3y3bsVDVhVL7SZXNG2rxKTgjv4K95S66kYG47oLR1whiJ1dEe95Yr6d3jn7aGwbB4",
  "key9": "5zYystWZ6QTwt78d6t5Jv7j37MUYyJWLRAqbMWrcfEieVtrKoMiLGkzrNRM5tomUaasGzMUDcr4tEMvP9nvDQfkr",
  "key10": "rW3bAiK8oJwVmYk9JHDRs7jWrGHGRpJfDW9ydabkWeVpyzL5vRUvdrrMsRpve2UQGUsrLznuuEeGDvAHESFBUAE",
  "key11": "orzP5xBTJA6jRKHCmcHLp11TFCriLWw4Y9Lr4L7J6G2igQjgr55xSuNZuhrgqZSxuji6j9SsSToHsQS9eFBziHm",
  "key12": "3sYSDYJvonnoh11hTrnX7ERTb1tAez5oaEY8uDjWDNrb4pvdnz1tV1LHEQ1VmVU31JXVSHaZ2DaAiWiVEHr15dNN",
  "key13": "Bx932tSB8qf6uG7zjj6BUR7Q1kCCXzN9FxEAXz7nwh8X3Sk1rwUmWR6pNkBbMgqJWBan7VLhrhRev49GHG4qS5w",
  "key14": "4ZaoGWz9nZubaeHG7Sc3CQ3RvVDBhschaqeMAoPjnx3ZiTHPusv95usQNFjfJT8tfQ977sks7D8LiH2MkvLDjWdo",
  "key15": "3qXDUv6ypPf8fjJzeDUs4LJjvsgTWqdrWUM4Y53DR6Gg4WUZsHyELgGSrBmbw2VS1YscmuC5NCuWFLiNdY73iyTA",
  "key16": "5htEh6oRHxCq54oKFHKVs5qfccEY2MQeWaeEPzNUHsgiyLg28ZL21MTBMfEWqj6MiD71EobEg7zfrBwV4JU2zg2F",
  "key17": "4HDtyoLzeA3VU9iQPCTk3tDWYHxnygoiLMJYB6dFCH4Zac1yBz2m9JB8bUYPHE9kXN6QfgrPA4kTyRv4T1xmWqex",
  "key18": "65gbERVdaZRLZuyes7QZUD1bjfVTn48YN2TvrYtF9iPFveM6AJ2KTg9qvjbRQea7AX1Pa6utNDmwgQvWDNHvJ2CX",
  "key19": "2AJQDeti2bWJiS4pkfsb47eDsvCVpxCnawxktwz2amWaqDi92pQzqFP2Pb4Z45wKvbHYkaHhPgaA2QJxgoZh21Yp",
  "key20": "A9pbDoSGVREAWZ1vkQxWmodbyeoPF6ESMwJn4ko83XocaN7thaNeCHfNXLpf42TZcUSyom17qVPq5wjuzR7rkHt",
  "key21": "44ojPm1FreeD4gYcBX5jktaHKaAeT2Z4jXH8Aub5QrKBF9H9foVcKWAdWcfkpvMkphkyaA9kMgSDkLXdKy2CimeU",
  "key22": "2gvABuCtY6dZdD6dRkv1WNMVNEaiUiRpPg8JnAHN2ypgjLRCcBSGJU8DAnDcis5VmTMJrMLBupC7vTGF5tsKewmq",
  "key23": "5xcE4eGmX4Tg7io6Sd4ybBoQAHPaU5ubWHQmFz1SQKBgEeekPUxKU5a2u8GgU4iZNrgRgqQ3XWKK8FNgbzo8BUtd",
  "key24": "5uWGzW9kiC6qwUfvS3qB7KzvhUNCz15ApGjnLRVyq2uXt7k7QTdXDdZLLfpvunkQQHMTNSKyNSuryvqfSBGaC82N"
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
