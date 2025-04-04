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
    "3DMe89SjxH8mJij2b5xELpB8H3WuS9KG6RGvLuCcwWmDAwCiyxj2TbceTVz9tP6Ac7bZnw2tyhQUeMaqBQ4EvewU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jhBzEAkKJe7YTbPbCmM2JzudSmZhfqL6CmSx1YHrhoRiZo2tYuxJAmwZp7v4coWkh4D8sKgZcbm95vLQMFQCnYW",
  "key1": "4eirt4RoGhrxLRLUqh4VXZpnTXxHVcsd7bn7pA5GXJRvq4QNBwfmwJKTXjVqAV6EcyP2zJTFAkCJDs4Mqjm1P6TY",
  "key2": "3JwTWneotPpR6LMGFZ8ZmCg7SeccDhRn95eXYtPn5uTRB7kGaE2U7uVNXccNSzLBYjyMKpsppA7pGsBsVimqhQhX",
  "key3": "3Mejg19PUoutMsRTBGogdyLXTSXy94a5cLZ92BUcgXDkddaG8WGudfomLaJ5guYmvottjBE1GDJgvAvkcsPhFnS1",
  "key4": "4m8toPeDXkMb2CZArQ9LTJvcDzxmdM6uLjrSNPgqtA6s1AhD3VmqzjUeHas8i2tqrDr65D55vSwtvQ8dJ3p9qGzF",
  "key5": "4ikQGfrLSRYZtBS1tJGUt4ggCc9M2xHfuterY1yeqWE1nDVEx9pWwvpp84yFKSeqheXLn2DU1yBi9QfEhCvYKgCX",
  "key6": "4u6AXzHPNAsNjSHC8x1hXkEj1fsvB3BmXBmDKX1o7uuAEmPZAZVWveLcWHPLKs1dQpDQ2vMUMBSz1cYYnnMdHUN4",
  "key7": "7PkcZCTXJtuqVHhxzhpWHJhcSEh3b3ghUcrPDCbf4Ruc2psHfHA9pHY2wFQCyQNjxpJ3dqAx6JAsPSiTkmibsYg",
  "key8": "yASMmY47LeLPy8ovtbkJJtSyDwti79iVmjumwETSsNyQ81vYfUL7Au1jpipEqHH64onRMArZuDv3RJLQpftBeHu",
  "key9": "5zP4G4cufYmREBr11tPBxKwcanSwSbhQbKWhBrQfPaEsE9j6FuuoaNsQEvUpRYwHHJaKp1t2wZCn3RUrHVMbr5Zy",
  "key10": "58DoeSaes4sJo6dgC3zy9qDCQGtKNiTsE4QLBKKAicjZB6yvCdTjXDAYJcL1ZaZ6hQ1JkMtMtHmeT21gf19cf6bb",
  "key11": "5d6XQiFgpdoP7WMQNkkNgXFUogZz5u2riJ2VSHo3h51s5D72c6bnNnaqePEjwHjWUM5fj2JHqq599kBuLbj4Zixu",
  "key12": "3yzeB9RDTgaF6fiyBM8w2vhzXCg6rXrAXLFVwvPDoDiPaSYdi69SyB4SMB7dY66eipt4PrwQaCDVnpDVDYBMufQr",
  "key13": "3GsnYaLvHE6heuyvqk5ny8YA7rwt1QgmGimRBMnNsJVcFxCPCE2Hu8DH8eF1FtfApbBTLcsfxq7P9UuBzGHdYTRy",
  "key14": "H62tGuM9ee85BSKYUhPGKfLXk5yS6L2ZXV6G5BuH2a59GV8keozjWhyZfSt3VPNWHp27DpVujKxf8DcXqzf63Es",
  "key15": "2TTqXVd4HyH2CGsPAyPNaAdZTWwtvZJPwHeZvfvwdkxc7hGqrJyGXxR1tHnLDLVu2MjCiUyn83AXWTmU1jeM3QSM",
  "key16": "33RfbgiuQLV8qRQS3Uzdq1MxvMQcMUvmeNBLJ6NSCnPAJG1ERKH1vdyiK3qEMqJNnjSAbejUgxk6W96kQMDZAFcr",
  "key17": "2sBhc326KVFXivGwbrYtfqqqoNBHfjmMLaGCuoYUYqcbu3dhuAmsd5cGav5BgK67uwxVD797fZoseUYy8MxuUTGc",
  "key18": "4Sa8bbJ7Gu1H8VweGjWKBFxBCzK32vJJe6NDnKtt7wKdDEHYfEDvEwEsKM2E39Ryh54dSyzaiH1QRuEZ12G5LvBA",
  "key19": "9zUmDJ1W8MMkdJb7n3pZ1wHATJpDQPzRvatxbJ4p81wK8RXQSwKhbrqQY7YeTwaneAobWcsHLdNAH4is7XvCnsD",
  "key20": "36C536YiR3MRXB5WpjgpaFT9f5q4cTohqp6eMGtELUwxyW13ywY9pixgkPA94irTq4c6k2CDqhqF5PbPbaKu9BFS",
  "key21": "3XQ3ToqTMiuotKdKQvfAXga4QuTS71GpGJLqeYg7wTT32FKSjAfBdkJHmdcbm4SbhKoExcEDDz3HH3mZ8hSwemXH",
  "key22": "meCd74jLGEEnE9edWZ73JtHESgkryW2YBLjdFKGdSgMuCX9XeTDGb2Pcv7T6zf3BYnT1yqPdwfaHwbtfvU1wJqM",
  "key23": "5tshSrDPU39UbNbsAGevLksUq7Ten4jPcsw4aBoFjKS157WrzPk3rHhQyQ7Bm3NAfL1CjqieQdEWoi95Ct2J5ypE",
  "key24": "2rX49D9CeEsWD8yk2NUdmgpCgQf1spUpvUeTWNhkvvZXgGKz5zkjBobxKprfYL5VNvUy3iLEgze7tQzE1LKEJYaE",
  "key25": "2Nvt2sc6pBidDtwowwmFCqoZTPuN7irWVFpixGPmYhMwBWERGj9eY37kcEd6QJjEgxJRAmojnbH7Fw8MwdY55t4X",
  "key26": "26wvXs7vgHkoFgAJNER9er4Gjzry9SKyZTk2WreYX9KC9rMAWXCGJm1ssE7iiGHnnR9pPz5F4jDbD9H9Tub4FEaT",
  "key27": "yb5nkw2ig8yK3MYipFjReEu5ahSaMYn8VPg6A3DPVimHnXitoUq6HKRJyBf19aeXgptsZ9cEshobBzesX8JsRwF",
  "key28": "3z1Nsso2VZzsqMQU61meSqs6f9YYT4A68yv8XSeMU7RpFSr8ZtNi9DgZHsmFrd2t4T6vxFCxB2rTkCQYLmZ95B3E",
  "key29": "YxYWttobkXGP1YZzYMj8BUAieBxf2HqjdTgEz2YZmhTX9uf7FSPfSCQU9ax7BcLfj34tQZUoP1uw1Q1wA9KiyLv",
  "key30": "RMehREgJm9YGMh1pNmq3k86R3Ag9aoZ29cC9fsfyDsQDUBQ4Dihrbb1vsuZqAvVi6LYkq15wLrAMAihPnQ7zhB5",
  "key31": "5whdV9na2zgWH5jNRgnM3qfDUuEXtSz2kF9b8Wo3coM5eYNqeJPgViPZQfr2zh9ASBPs5k9fAwogPZo16CwsFXYe"
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
