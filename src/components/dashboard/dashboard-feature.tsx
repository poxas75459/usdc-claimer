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
    "jM5s9iZWAvvofNgHi4ttDjYRiwyvaoLjqVo5vdnbuoss3AK3xd2m8KzkbLTBfMPJKmXvQ721xnyJ8T9KgGkXnVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZELwKbGkpjhLoXNDZ3tc7j8ZGCCBcjMnzybGQFcwtp5dfvYszNQfgfPwSovWoibZHy69qZFsHvc1AqYqa4ZVYUb",
  "key1": "2Sg3oNezj9rA9DUBFizqPHT26oAMPaMasbL971Ym3VDPvrEDHGgy8mnNimWs1Bt4MAmsH3cPYfw9TgMuA2sE7Hxd",
  "key2": "3Nzhz2bHq6yyjWvjm7HW1qDTst9vm528ckRHgHi1Zg1mgGJnhUQSQiUozJAUNnS3BZyEfJGP96vSVAEZycTnXLuE",
  "key3": "55LDpQDFxSnJT829fHZhHafiF6B4Ad82y7o5pUfiG3e4X2zW4Ynr6bDNaoWkQK3jdRefPFf8FfSHPXTypaGdoGD6",
  "key4": "GXR7Hh9JuxKQSmMwrmmoufinwYpSUmtbvEvUmGMZNL1VedcX9cqa9VPjwpkmxpBKFBt7ncCogAAjeiHqy69xdFZ",
  "key5": "5255C5ACmk8XnfjDBhDBUM1wP91N3oxPJLcqzTfAEP8Mfi4jr11ZvyLYeh3svxcpQttYLeuncBt7Xddxkx2DHXX1",
  "key6": "3q2SpMJs42njTqwfwwPTxhABTDxk32Ud9sV6RzbsXoHTxbsj7anF1je1FrM9ru7opf4BKAnR8BpfpeQXbebofavD",
  "key7": "5VDs398QfxhCUqnF6zQQrvK8aoaPxcK3FBdBjRDK3H4PYSk45YdgZzMEoAkV94jXZ8pQtMKNap7zabhbcF4Vv4HY",
  "key8": "2jEHtFqrRzXnDEaPwzLapbr39dN81vBPtYefNN1FmE7m9C1fwVVAtGwgbWzAfpTZcau7mr1uWkbMzkQbYDAm7Hu6",
  "key9": "2btVABi1PpXNfooNgZ3AMc8cg8zgPsszWZNZhbedTCtVjD1kVr9MzKMdQqtnDQ78pfEQouUNNBHxz9gExhYCEQEH",
  "key10": "4TRBBwx6VnzTD3LHVMrpwnSUkneeAzJts7h3ZxPHW2BoBZMr9KASgR93QgKWh6BMuvR7tJiotz55zqyTrwCEXR5D",
  "key11": "67khsTaWmrsxeLYtptk8uGG9vbrhXnJkvwAjfiKoypqanKVMnkAtzgdNtEQNbzsvELBs1nczfPCC61vKdaDwtgoV",
  "key12": "62K82wfwjTxfxgQm3sJSbrmrtncRcdyeGjFrcXrvtVjX4bVkgmzXUiAMC8Ymrb7oJtayM8hcjrQkQgdKpk2qf1m8",
  "key13": "31TAs3CZ6Zqq3RPvBHb6nHtuLtV9mhpFY2pbigPiC2Nedb12CxkVzWfVPLSWzgFfsXFKeaNSvopKc4aiGh5GQ4g4",
  "key14": "3khe1keGav7tRsXFWWp2wrvRVmNZFoxuFYkzTybRGZgqdKr3jTH8ZrEKD1LgsjZxwU18FDLoJNMigAn7fj4eEecL",
  "key15": "2sS9r4xXL6VwwhXM43nSNRiPNZWsLDuQEsyAxzbE76bazr7DxDJwVcHjbUR43np4n3BCpeboGGU3KBg2DDcf7Tbk",
  "key16": "4UpAQquaKjdLUWZyQiCdzEBLDsNqkZnHpyjjkXdFy41szun6Exav6QkVL2eiVvoBEJeB9ih92cv8V1xiquEwjLvD",
  "key17": "4C9QJHVYe9yebEgyoaMmxZRV9wWC7VVrpaFz4meAJPuFv8TFJBZ99ia6GRk9CrUnztYf2zz7V24jiPS167pmcFFc",
  "key18": "4kmnEYT7539Lhjm9K6AgyqCpz7QqGXxHfUJgvjDiaHthSjMMfKFUHuJq5wY9tNHYnAhg6KjRzuP9giBD6V5kqnSy",
  "key19": "5JV7kY85Dbax46BZJsQ2oawaZFgtYhUQh8VZfKL2NbQSgBpQJz4tx7nsuc6cJW3Lh4XjiTCxJEUhdRd3Y7H9nEqH",
  "key20": "4gMsPzcDHzXDFL37AgbvKfcEN1e3goJnGgELPCwiT9m2MFWxmBkgZ6YzL1htYUvMJU7rY1psasZLEkFN6YGzsy8v",
  "key21": "UwAeNLyAzAUT6FhZrMywPXPYLkgd4ZDQu5oDmXAgXPeDh389WynsUSsuCyBecAWVu5dT24bWK9qwH4xBtHfm7ee",
  "key22": "2Tievga7JfW3T8s9cKu4GdK3BWvxjS7H9bufH9nPLhWXxH1AsQrWfs6kCJDoMRMVj3FDdJYWAyZBBdPWop2Ps8Rq",
  "key23": "3imXiWWgJwu6fgCgUJ7QUhoN5uY4Mcv7wDDMqiMqScfxJ41vifdwNGCBZj1dYJM3auuQaBvbafNTAcdBPkg2BnRC",
  "key24": "4Twu77VDaZN3V13BTUCqHBrrtsWzAvcCwCb3xD7KTfLsugieWvVkjaHeyoedoqeDZjRgwpDogzqr5KdHHvGtcQES",
  "key25": "3u7PD6QmXqFqoVeu8QijyfXGgpWkw6Pi3rW4WPeHefr4j3Z7ENAWawQGa7qxSf4DfDxa4Xwi3uCdPhsVYGQvmLii",
  "key26": "26jdKCmr1yJPn3FH7a829CFsaRgUJA3H2XuMRxMMf6MNpT1xg4cDtGcvnBhjjsngrLn9ctbXtgi73pAMwdgmzbBM",
  "key27": "5yQ3pT194Zh745PMjrJb3mSqcrZAu7eCzxcyX35q8QFsZ9gKwPqmivy1JfN9xqgtC4nGnBBEWew3Mzp5q3JzfXCj",
  "key28": "ZQXJs8JjETrm8HZhdrvJLqidtAUGUdkFRGTGQHECDHPcvpCrt9aLZAELZcTYsgTykLygxzQXWcZwE5Kj5ZG66V1",
  "key29": "2PUBpRJ92JPr5EVaXX8sk6BKxJqzHCwVdw4gxkLtsZDNknaK8kNoRAVVS8r6DcTh6975dsXdJ7w1PtRoJ515YVjj",
  "key30": "vJzEWxbyJqy7RzJEKdgFdifYtvQRCeQg4AvU9b8Ag86yrNLPXXKkoQvkLDP7HpYsD4YDwwTLC1BDfQULzx3Dix5",
  "key31": "5xoijnzZXWXafpc1Krg1XoNA2PeY4ZWDFLWjLrUjCzAvrdo2gYNu7zqsbj7i3DjVD2eHaGLJBTa1tp8v6fff9TFv",
  "key32": "2GXSMWRPsYG6ZGmmyyNmVK5eXzM8Rd9F13iU8PvVtNLAN6XbBbTVzqoyT4kJcDNTGXGnbZk7jbe7zbL22Q4gtf9s",
  "key33": "3TatwgF7UXkBayCN73khTPSYLDcALqu22EQciVeWKjuc8UvgrvH3WXgP9s1ZVX7DsF3KMfWKcWEuTYfmEB7Dev5s",
  "key34": "5iqkiY4jUcQWNJzs48SJzEjiF4J4Mqa13gHSzF3FAAsMSiacxVsLXvwRs3wEfBMxJHf9MZtgJD3ahY63qu6Kmjmd",
  "key35": "4aFroDVBFutTBPYYVyyajT8rL7KZSDHFcyQz2U8zL2URkDxV5pEvvezXcU8XVV1EuxrDuWgJBCzFShtjX87MosRX",
  "key36": "Qy6xzvMisfM4rHqzXKUXgjMpG7Nwi2bDkRdrz6fcWnfD5DdDDGC64F4sZ7WLg6PXvoByfhx2RC9ZVdbPuZWNjxY",
  "key37": "56qdnMeCiL4uzwdPEnZJ4X827GN6ndepqQxCck1FN162ifFERToBun6FvpiXHFzpXdb5a7EkqzkCByoktojhHnKC",
  "key38": "4cQWU4VduWfYACuUM9EpgbdueuoJ54N1oAYfHkNEcgMCMeautYjApbWLp7uPwpKsC2TmKQs2AEh5mibHwSCy68sR",
  "key39": "3Ye81CxBG85BDjVRo1ypVVXhkUqBMDJQAScaMokVAcpTjrjMW8NHwhdQhJun431SYAR7BbXgjJgS7fuvqAxPP8EY",
  "key40": "LraA8wUKnpwUXPAoYCnkKG3RRrR4WhQBQqwzky7YMXeAkZCivvgAMJq8VPca7eGSZUr71Ztncj4WNAtsruFvjWq",
  "key41": "3wme2usboYsMhsQRhfhZxQkVZWhRNwtHzAka882Ew5a1dpH8bXm2kxcKs6tdmpmoC2g2q1T8a36RjrWV2vrT94p6",
  "key42": "4AgVoZ6WiEx2WDDNoov3ZYep5MKBLEiDupEhvxDb16TA4DEvsuYgQdTxiUF3zapwVZjbaenKPyqk4g15Qb24gqM",
  "key43": "484vE7rjquUrh6suqM6TidrQMSM28yvdtZUtcPwsNVWRm35KmXZU7d8HY1joWut2arsumYqAv3YownZ28GGANEEV",
  "key44": "2bb7CYEtoCSqGAieZJoxqffacmutASvuQVRjzR7Em8fjB5tQhnB1phLhASriTvnAMUvUhBB4ozW2MZkCdiXkzQrw",
  "key45": "4dgV8ZFofNNjgiwkh22LncNv2NSzerLMg5jBzVV8TaYwBmSwVMHeKFsQx3nZNypCSiJsPnEoix4oH4RMMMZU8Db6",
  "key46": "2W6UgZKjNoPHoCc5snvhJZC185UwkfHfNFzfS64jnTac3LM8kveWLTQKxPb6uiiRwxXyxyNJ9CyK5EF4UdshjEzt",
  "key47": "LfY2YKTJVmTQH3Af6g7DoNJWscCQ5aLiJtC5R1Pz9JAN5jTwSpgPeFZB5M4G8v2gpLxtnxCAXqDXCGn2Eh8bnTN"
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
