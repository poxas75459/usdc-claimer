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
    "3u7ExfNth5oeMHjDgSsKgnNCmNWgiA4XQ3m7WuGYDULxSQjb4ZRn76nM4Pn8RVncQLRxxDxERU48ngwTaeU8Pc2u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UoGvx5LyRsnvJr7KzWPRvrqF3oUM9i8YGpem6xB3hUtJiB1bg6LbjExRfxrhUbx4ZNTfc8gmA87Xjk4ynPvRzsh",
  "key1": "2Y53WZ3upEgCGgkkM3TK31omTyfDB7z6pD4FuZmuVrBHN2yxSZWU8u4j6JNDtkWrsz5KVbKsT6yofjyQ1GnqmVqV",
  "key2": "2StndB6mJyt73jRGqFNCums4rbyu2yPDWXEcPYAEjnNGZSf6osjxkgq56xLUx4LEq9PC93dAwTbcifz1Bprza9Xn",
  "key3": "2ZvK7jXPn6CdkechJfeJ2GMrfrxQXChfTchMkJTD3bHX5PGZFweA9zarB6srSd9U3QBJDrqRbNP2XEpFZWkDAZP8",
  "key4": "tMNTh3narYVjb6nw7MGsSWU7wD5AEqVeg2cgh9bzpfwvjynqZH3pRtDFfAJzYMWni1enaCNA7eyajCho7hTFkNd",
  "key5": "4KNb8zg4cctHZnsg6BuiXfG2531dPpreQ1j8aCvLBNYcRM9avYDge9zxP9xYFtSAJ3mvjuymuGTv17mJnFg2PSWB",
  "key6": "u3GacP3Dscxed2Bavdy4bzERvi3dP3UhGT2DUcvR8cXFdGRGsc5TX87txmY7NZRVjJuKUvEpMk6izpYMLhqYhHq",
  "key7": "aStvGJYL9rbNeaBSzK5Ho7feb9Liwjh2u8g8GJE6XDVxVmXxnb2D2GJyyjSLunQgMANcMpCuRbtmDX87J79YUww",
  "key8": "4cJEPvfxodSWVarLmgYutsYcStW7ZDLtHGdBAwkVBPfV9eU2J6mv2rRnzzdYp6eREJu69GmQZETpFzCJZ8dR1uTD",
  "key9": "3obznmsoJtWFTF5PvDosgY54w5MM4pTrVJ4dFEXR4Xoi6K3mEmqeDEypjH92d1ce5Kg5k6DG6N3rzA54eSjBuUKd",
  "key10": "4j1rCRT692V6eq8C7QfEVdrGbqbpwgZ911N5xaFYZjztBuRYQvKRiuF45MjSwNENHLVcc5wxCYFFs1KHSBGTrTr7",
  "key11": "49WtK9ejekhUcvvwU3vgcQrNrKxc7n95CbRYLifqjJeRK2uMVRg8kpK52a3Hrn1Fon6jva1znpJWbjCmzoAfmx9n",
  "key12": "3JKEWzGPLmqx2VApTqyQ84uM8AknNjfV21V3gzwpbhVbmbtfRWeG8r8rTARYE3NtF31sthDnDJxxvYq7dEysSfi3",
  "key13": "TSanLat65NDNiUXfP1jP94dTKrx3BFgqDmKiL8EUBxacr3UCPicc5KLBVUMR5bpVksMKig7Ub5wCHHXoJ3V2jjz",
  "key14": "2yzL9zwSn2r3Y8j574jaVYLTetHyYVugtCe2jFzyhBpBQvyVZMRdQ8MU7J1ioWKFxWUiiR4uDc6uTV5vMZo6nAY9",
  "key15": "2puFuxrd3cjhBdPDXqFXP1q9XQWiC9PHo7dYdawswZAb3EDEuBa7e6CQ9sx54WTG8iTdMmULc4DLT84X4SEALkUj",
  "key16": "4Nc7Jwv7sNHn1qtyA5qDUtZQM49N73sN7DFbiAjShyV2cvdR89H9RWCiQ8VjbifMVw8esqMNV7ZZJdzPEumcQSAN",
  "key17": "4upkC7LQhjAf82iMgbJt8yZpVknUywJ1GXVt8g2D75AV5oiYYNNi4gBxoW2XhByC5gG5vkQab26bTe1JTQmcumpr",
  "key18": "U1Yc8jVD48fFDXA8YC8CkE6NJZxbxjLB6ecwHTp6fooqVpftgL5mdYzPJxgvb3Hndzz3kykoXcthaopSvTfW1AR",
  "key19": "5Db5D56pRH5Hx1KN4AhcRGQvvVDcRD3yYt1KDLKyW2q5ZSztGq9B4qaaDwNNHPviDq575Yi7C1CkwUM7TkhLQYT8",
  "key20": "3d4M29tAP8qKYCu3FZqw7bSzSb3Wom7XtJei7hs2Fh2ZP4EsanyscNX3KJ4iZY13bB9noSTVZsKtGfTkna8KScnZ",
  "key21": "2nEWBZg9HGioMbWhJjC6R65qFPfqd1kYA2drACFh5HK2R3QvViTGimekXsRBQGdwdmWX594tzwPzF3dFhtCZFhQa",
  "key22": "3ZTnPFHCeiiEHgohnBFfWNmGwuCLBGQ2zc3BEFtrfDb5AUzeoeCsNZcWeDBfAqPKbULwPt9Y1xtjjYgWLeGesLmR",
  "key23": "5Ft6zhcojPENN3WJDrrNVnt1NkqgmbY23oz8vRd4VvSdR2i6TX7mFhPGmZwgfD849BNnGzGM21dSUs7uWE3yNnYT",
  "key24": "3Xkmt4MAxEfv7UTV8WdsjQ3udgvZEMygFDBKMVZZTupudRY9kxfNsKy7K8N3ymBRV2d1BBB1MooEKCU44eyDrBQc",
  "key25": "5RXdmvKpVbUV7XNQkag7dQbz2cTYLA4LWzDPS7BuzR1AW2XnRAsXs5BJGVhKqPv2Hqyjzob6ygjoRacpfkAG638t",
  "key26": "4Y5cMNWJK6ovbHF1yzWbxLvk8K5C1JYfDK8vWYer3PvEh8sjfRRHs6fAYpRtMjUVpBn8L6KeCbGsqrVmg2bov2QQ",
  "key27": "5Qx6c63TLXh58Gx3STx5ajYxyuQh9LKXiVD4aYqRrBKEB2KfwWWmgCdDRhRrRckEy6orGHgJ977q1HXfNvBZXT4o",
  "key28": "tyVZf9BHPMzCBSRG4qRsvyZo89d1R8UWuLBZS8857MiKfc7NE7DyEmgzNMp6jwf71JoEKsJuKW5hUx9Y7z7qG65",
  "key29": "3VAa2jDsDugUtcU5XCxF2hUBFDGyXsHUcq1Mo8awQiGX1jss86YRGjVNiZgcsoAxQB1ZRkU92U7NTBggNhCtzSA3",
  "key30": "2pjScFH1yXpUL9W1tWhXUjTQVyiJ6DX69ZDkuBHEk3kinVr26jx9XzB2TCQRmAiKpwdDcrUzjiLb6jzJJQb7FEDT",
  "key31": "61FmpdnkrAAm6vv884quME6MYmEb49BxWCKSbxytA4s8KdoFZpxqEWhNuZ2g3SBc1s6rxt3pu5MiHLGxzTsUZJom",
  "key32": "3fvvGb9GCz7woCCh6GvPx6GWNUpRCR6ERrkUVBGsNXShXrvX5WAGFVS8rPHrYJ2H2SdkQoVMB9wqXH4T9WW3W8tv",
  "key33": "3jGtWYQRS92doAkhtWjSHr2oYDjPgUGJFNmo7zW4QugMYPgJHr7BG6ikXFq2AqR9NY3oViH6LAS5nG4rMqq2Pr2B",
  "key34": "Pkz9WSYw5BuN3z3sMNsemdSko6CHVyS82wSEXwwswKq3jwYdMYhectXKzSBvyJyz7sQ18G8xhQry3qP3s5jVcGi",
  "key35": "2DP41gq61bTLkxd6GWdXLULMG3xHaeLq8gRNYqLrzPEhw93ZP2sqhozhdDutiHytFfWAbw3YCFCENEZpUn2LCrox",
  "key36": "61gMwNcuVWiaBBaRaAv4HLcXGqc1LzPxheQHsgBFQdFRAZ2dmQs1CrxFosaPJf3BiN9YwxKqdkRC3CmVooACh9Yt",
  "key37": "3N6H6tYPv4jJ6hLLLjffgULTF2biJxgw8GTt5GrrjgGRXJULmbHjvF287RCpoC7rCxHq2LTVemCSMpMahgKhtazi",
  "key38": "4f8dbB5XPELB4rxGhfxGqFqxHdhM8t5xiyTJPmrn7iDKwU9zGKUyzNmyeQw1B1wGSu6UyCmLV2vxJhDsa6BheW9u",
  "key39": "3bU7nJfFW1GuGDRgp2thavvVhBYC89F3hTq19arbhHgLYpC9pLXsrewZMGfojaUjo51r8XUuipb1LJ3xFhz4Ecrg",
  "key40": "21jiNEgbKcCYaDUUq2fSA8nS1V65mYZ9kFYe2Tre478ecxVXeqmq6uKAaBH8mjBHcDEtKYp4yMRMgLPTyN2HaBU9",
  "key41": "5CgZkZwN42n1AW8NQd735uELTsS3eXxKUnwLvcBR5Ugqc9m44KeEG7cyivUtzFMkA5mz3VBZqutxfXwyQQvuWwUR",
  "key42": "tHUNXMTrAWj92vdftPvY1pEwh9hLQ9AdbfWDF5cDsExcUiQXPJuC7V2iDPWxAU39pyMiWywba3TU4aQmZ9mac7C",
  "key43": "4U6Z17inaSqGjjJLkuH2xuqNfYcLTkRXRTN51S1jyskyyYvnx5rkCAxJayqccGPn4tD2SpAwcV2uaz6r2JnGgGrk",
  "key44": "4YwBMWdMsLAgJUP8MntpYjChBe6AJPTM7x6HsQgQME9c2uz1czB9q4g6c6GKUjNXALQ3SqTHmyKJARA6fCR4TSub",
  "key45": "5KrEcBEgyTMoiVBpxRezEj9KdeK8vRe42WXH1RFW942oHdfqMqruQFVQaG3ZEvqUr6wVb1PkPTY4ATXEJ1s3iYwx",
  "key46": "5UcPv73QhueoKXCXWYJ9n4RbkcYiaPrE8ehMxELSvQwoJi6asXTCXmSgANdVyDVp8R6ixS2LrtUP15vgMxzEgykF",
  "key47": "5roeXn4uDT1mb7oDTHj3q1QMJ24LP2Q25ygkYnEYXQZDQphQS9q7mAE3jJejxSNgiMApACsub2iMYPWJ7jkcqaJk",
  "key48": "GNAmVngNCAe5NsQnqckGRN2xcRp1gpmQGT62v642ZTvf1UfMvhccwfxWjrieLd8XUt8V9iqmexcKXhMfice9FS2"
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
