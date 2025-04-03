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
    "3RrjFR6WDYvMZdFUTmeG3TqLp5qPrqb685n9Tj5W571nTCN5hPJRnmPY2RZnEGVSJNJA84yNVEKmqsr2pNTDu2js"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58iMvC8YtRJuPMNKxANYPGNtB4ap5nvpfydbGvEEmSwH1imZkpag3svHpm9868hztjTp9rrnaGFaNMVnG9k7J46W",
  "key1": "36baXAFLtzZaqzb5hjgeYQZr3wdihHp5GLLyeo19NdLtDvHKNQ4rKYkdwbWWupPFHZgewoMMHf8Pz4XfT9FZhYrT",
  "key2": "ubAy6HNPTENTmYgPSk9jUCeNhzLiAfkZRqczYxvwYV8agJozRtN5BxPg6N45fM8AexyGzWEexbe52EbFsyxbm3g",
  "key3": "3aEdjP95rQui64hY2d9ua89yBX8xXYb8Cao8vp8BCZvng3EyAe5EddY35iBRP33ucSXywEVpHLYBS2cYAqRhc4vj",
  "key4": "La5aJSFZX7LnC3oUHZTmLtoR3ZcZzy6vkrizvuRc2TBaxJJEhHFu392Bruwpm3FBBpJFERN3SNWdUaPK7vsXM8b",
  "key5": "66bZDgm5ysAosEyzrDcrv2Du6oJukqBosZbdzLqavGg8tFDcceZ9BFJ2FZmCaw6vLaQ5TP6KQpZqEKWZ4R5844rV",
  "key6": "3LUT581jX3ZenmEnuscusnAqnNfazxB3YDTjbXJgcw6LfftwcxW9eECSsBaHRhjfGZpKkmMHEUiUC9PkmTDtZe6D",
  "key7": "5VcXbJK9vowSofbrJNT3qfpvvsXuetC9RAYvmtUvqvLEedF7xoLRDL9vi67Gcx4Cdgyf4cGMY8gPAYWdYjXR6mj6",
  "key8": "3eknWsAPfkDfhqZnwkF5mu6HsU245yMLGBudFaTjg7Kj5veF6brDAmrzMTvQnTRJkeukwdCTRFEasZox2zY28nqc",
  "key9": "rUrKntKZyHXoHx2nYJJLvHmx75Y3zRJtKpD5AkYm4m1KzEjedCMT1CZVxpHuWRbWm3Mb9X7iSmGHo9fz8hnJ1ar",
  "key10": "fhVZiuFvgNiRZqAuqLN3jeAEEmEckCbzc6RnTDEK3XeoGLHh9mn8FkWKN193PBwhBFWBJiR1EFN5n4NjBomBv2o",
  "key11": "5qFs4CiTWY2TdEBdUJxntif5Xabbo1T4WMMeverARHHFeL7dq6KXPaLE3SQ3MH3G53EWjppsA5Q4BS8Q2fW4bMZu",
  "key12": "5aE8LaRHSE5qWUyV22wC1EZ8C8WP2MNYbVSENLHjuse8PX1UBBthxRqYCAQcDtzHYiNmb3C67XnRcER52psgEYkH",
  "key13": "66yhcYo2GN43iodq8eAjfqs29rE77xUiejmvnrza1ruFzxdEPT6ZvJmAAbWLFBLRnEaHH4DucJ9LCBgBdxrpeiCh",
  "key14": "5WneM4o1a4FwbSYGVg6iWuUaaNidCUBRDzFKmNCU6FZsfMpi5d4mhF8YsjvMpKJseKsnh4fMgdFDFMrt8QT8Do1n",
  "key15": "3Ck7sifxjmcnkuQu4178oA4bneZnNZSvzR4ozAR9UPXcbkMgFgFsDbbixcSWJx1oXEKr6EzXUdDQEnN2urJDSyZb",
  "key16": "5V6TnxTrD8fm3zGrySfZsh16PvdFWf9z3e9ie8yMJx33xjKCGJgeZdktW9Nz9XTMwhnNdVveXg5BaBEAs3txc8cg",
  "key17": "4KKHwGmbxN8SDefbMY2R22xeN7TfC35dtZtgHJpCy15PTJtgK6tTtAKVo52gMVb4biCYv7AymNerz6M7pb5hcWb1",
  "key18": "44XfCvwA1kDPJdqhdLrR7ghZSfw149spsdUR4BeZYWjVv25BpnamjntyvRVZ2mLuubzMrGGuPyZJfswvnkEfg9g9",
  "key19": "3cTjzrEm9B5LwJGeebN3xcAxFmr9ASndmXcxnnLwNdK2uKWZNdWvsc6tDFchuqyY81EC6mmTGTKfsEfxhgBhFULY",
  "key20": "3Mr8nT7rziew88ymN7oY2eZD5uJLjzCKS2YjRTY1WiDFCU4LKxTY2kDQtmsFDfiV6XySqmdqhe4TrvSuRzwojojJ",
  "key21": "VyTEv9KGQroBTU7YmCWV6AcgMCnCs7A3jugdVJSNYM9Qa4T3Vw41qiJFoASndYwJErfzdD2uKaYu9HTaMZVd5PR",
  "key22": "4C1UrFdUAsckQLwg8EJ2rjLTbMs5mwh5encpAZfSLLjNmHTyK8aeV1XVEYhXAyDDq7aFhFR3UjBLgaYYfoj4dMrM",
  "key23": "qDTbrMisDEbME7yHBsTxvqB9HJqy5RW8LcpvhsrFKwUccXsbp5pKhVykpDRKeAcyXgPGBayAgN1kg4L6JmdGG6A",
  "key24": "4BNXzyjuzbcXc3VCxyDaTiBnd17oWeRPLCwMu7233TTpA7eLJ9gMNsiJKRkapheU4dRkfxHBt76ewHS6nYNwxVGw",
  "key25": "5CxrCgZKzHY3bkpEwg1TayB2uajpaurzBkN4shdogVMdjvcgrrmzgDs3zweJL9Qz2pmsS6YgHAdq4o3a6KDvZ8cP",
  "key26": "keM7i7FrTaNNX77Rg5uZcTHdxykjBWd1hWrDTk43r8UhfNhCTRpb6KUhYa7s2YTUScyRYitQ1T4yCU6xoxVrQgk",
  "key27": "3K6RXzQWtGjDAtDiisoyDZ2NmMQ5QxKg5NMHNtyoEeYZwewoavSBg5t1V8tJxgGbGJbdELVV6GjHnfdGGBWwQzXv",
  "key28": "5RYk3twjcGBcLGWtCDSLyjowq2gB49LbhzBZddeemu7VYcurYyjh5FFKWmDwKCCsqd3oa7h2JYBrU4FnyrgGBwrW",
  "key29": "5ho8zisD6sfJ3YQTkn3fnQTz2ZwkQeUo2EHeVqyH5RMdu8JWpLwHNwpMwHiQnNQ8BhETq5DRmmUHnUEDPrExuGSD",
  "key30": "5DNhoFCAf1ugMqfQybHPyDUZwhK99DG7rmyfMPVttkuR1TAzyayKJBMSZivcu5vcxx7HcKQbrszroP49kAuGxo25",
  "key31": "3UJkVWV9x3yJK5eSbGriPZcUgcShjiAZ71erFMWhv38S2kNHEWJGRUvQyMFudsZeSaaGaxFWMvQCL7P4T12y36MB",
  "key32": "5tmXJLnebbPqtqQjKtZUDeuo5yTHaCBLy9oVr124Jk96Fq28Ei6sRZsJLcxUTjYoehWRcBBQmUTrqH1Zcskek7SM",
  "key33": "5yWdTCmqzJ14xrzKcoQkNtcs1PSKQL4Ex1ogb96MuYjrvnMVioS3bpcsKCiFBGfyTiF4VAyvuiDGZDAaJjCuZR7M",
  "key34": "5NM62zqMYwx4oJX2VCXetCBCkPhZ18U7yC72wWHoXXYDWBf8WFweFdzRirVySexNo1tDZt3CxNH86F7Dad8aFMLo",
  "key35": "aU7iJmWtHV48S6LUEVQQsnvTvThfDNHCTgnaMz4RnuJ6AeqUj2qiqzeywCNQeWt4Dh3JJJsjh76NYhky3Unf1Zt",
  "key36": "5SoKsYzF2eZXD3ZbCX7wpYm4ctdAvehDPz3f4WZEv1SAEH6tt2MEGDEdpS3Gp3hnaYVuyEoaKms1qRKK3oPskDoh",
  "key37": "3SdMTJyXVWY68cXDi9LvFRZQw77Tf8fNonvpraCbswDW8TjSSmq8da5VaSw78Rtw1qBXhV1gPXUXfKodR2jSsDp1",
  "key38": "44vvfF64bxNDuPThVUo8CvkkmqPhKRd2ZWi9UmZLDMcjkB2w91vmCix8wrCWJUTNFMJjajtaoYz3ttfGscJeYKgt",
  "key39": "5UsUx5BUGWmprZjiMisBCzP1cHf67sUb3NKANVQfNdP2xAzEjTknZHuJh3EKT9MGkRAzkQ1rrYRr8x6GC3X968u1",
  "key40": "2fpLb9V1WfD5Wro8i3fKBQL1hWQNaLW3mzHqBiLouAe9n94fUwKmPmYt2yd6xdFR4g1H6HLWCC7PWCbzSnaqA2mV",
  "key41": "4LNZEjrLi6awecMb6yGry8oax7ygBXRyven3F2y6bSFL2pBuznX8jdqkq77F7MqwWqEbRAcdRVYG9DofconsXu3d",
  "key42": "Ys1wiGRrgSQR353w3vKmuB73JyMZaDDSxggZsVhgwNrwFJHfR71MT36hu5NUvrBS8rgjSn14eE6rM6U56CTFTqh",
  "key43": "5ZmKe8NEQRdqqp2uzysgwEX13AdstTqTEDdfSQXnhmeEpdM1JQpsHo8GdMboYi8ezPCFTK1Xks68qENy9LxK5pmB",
  "key44": "45knpTVXUz6FdLMeFZEZ8dJEh9vpaRyhQWcAsxBvy6nWc6jJaCBuba9piR4y32yheYyYsebPkV9T5ab5vEZEkSCC",
  "key45": "49mE967mCEWrquNCememdMhyVTqd7bJKM3a62xdHhdt1b3SZLCoiXYDJWnFhpMiqviZAmE53ZBu3xSS5SPtepDMk",
  "key46": "5gDYcq4hNeEM6VCfWWf2BhT9Yqog39AVkkKVVVMod5Xfbr8LPY7J9aJpRdzxiEdYaWYcSBoegLHoWHribquZmbjv"
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
