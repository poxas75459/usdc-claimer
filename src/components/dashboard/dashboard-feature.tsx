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
    "5gztX5twVXTFsttPut5KBnyBvCjeejshGUKubzWNLPB7NL4zn7bi4isNWx7vknEiViyCq7pQrTBnCZZjkySyrTnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bmJ89zZFYHgwe6xC3veT792VmV6f3FeemX1bPUC84ncvJavMzmLihjZhtVXMEvaev9DvNevFkQAnbNSM4mi5hZ2",
  "key1": "2SCB8iCAyi7qcdyaQT7FfeFvbRFrfYNtuVspp3NnRxjnc9HP6kJM9ZAnu6YBo54dBK4JJquG1BLgsCy8zYFJ8hKh",
  "key2": "3VZUkmUaLLcJYYFpCfBGByNDPCNgTdqVUAJNG3o5ngf5yj142DESuKu87c7tTG6ptEtNXtvaYVCyx2WFp1pduyvK",
  "key3": "4UJFi2CfaSD2tnxFw8SjFp6aQXPCQTEEAEDnire36oD9WvMWS7eNvWdGHsQub5onw1Ab8JRzWLMoKE1aGUWn7KAr",
  "key4": "Up257Ef4YLaBmDXbGnfypPsHiYTmYdna6Z8aTngT7KP5agom55ggo5q8qTioED53cCqjyjy3r35NDYxg9nfV5Mi",
  "key5": "21HfrbeJahSLSFb94XUpcmyza6fqr6NjTNagw4LaxANur6T8fxikSg67Vx9eCbcZuY38szfrHLkN4xQLtPKtUP7R",
  "key6": "5QZcKMwJoox1DMAA4gzgHHpAkFnNPZmWa6RQucUreSynQJs4z7wbaMbiTEsbVkDnZVHQg2GySJMgrEfyFUToVeJr",
  "key7": "3BFpqVkoCvGCKTYuwV41H3qz6QHMG8Xgfbu5GYRk8E8HfwXXgzB2FNnuHg659myEWPJomc2UX8DLj5YBx5C5iDuS",
  "key8": "5VqRu67kw4q1JnZxv8KMFEGza1Auyt6qvZRGeCetQaV6KZswDjpJhG7zTJdsiZuRditMY2LuXneyJ5fSbk2omgfB",
  "key9": "9vnqJ8vtKJL2poJM8BTS5AeBWvKBZy9KN6HgDyACiMX3izhAJhihBe6AsK5QFAbLFHdknniz98jGfzcSHWfchpS",
  "key10": "3ugRDsxBjWTfFc1hGg8DZuYWGrFVv4dcPzGUH4L2xZYFtQumDmKE2RfQhMiiwHqFdjCZ94c9gMXyUtZgrJfJdWN6",
  "key11": "bzUkm1gWP7DyvpP298L2xh5gLwtu6NAAfsfRK2wVuPAoaMfF6dbFCQAbj1BwB9Pd1hfnRNk1KgkMXWLbj7P8VyD",
  "key12": "Tj8SbraiDXhvPR7hD1GuTWEMYP82mnkFUXeqhfgJnuD2jpBFxHSkc3uEJc2zwNH55MKxNBQTUj6C86fvrsKnG3Q",
  "key13": "5A3JR4w5xDv9mTaF9MQNau8M4aD3wrKXnW5KtrLhZUMZzig1Ro5k2XAFmqddQecjtrCocvWuo3NsZyLw5zSELogq",
  "key14": "5Nvp7fpYrnobUDs4C2xST6zfGzt73acaSB5X5734EAqCLHBPrcsfnbdEV7kakUp5KiFUwhyX4wVdSLFKM9U5wKWb",
  "key15": "41Q5obp81kYmqFQCEf5nCx6JMmUC2hyR8Xpioza1de4cj5SvEokzFeUxg4mqaq1T5sWFrWw8UuSuBogK1VyuBgnE",
  "key16": "4ts1PkSthXxA1U7ahpUbDGVMPcf4VUGEZ5vXAscB4LASbDxZqaEvdGbpTJ72Qc2oJCCvMYoHqUroUhf5pHnxtkx7",
  "key17": "gHG3NWAmeuhykmkKfYTCDSCYdD72Kr3q6M1ukBG2DPV3Mi3eMgwbz7ZKp4wZBJuo86xpBqm7uWCb3jyUpyTA1AU",
  "key18": "3xBk6bcQ4TTrGvZAu18yV4dmLsfo3r89svDmobW3CR8m1eDroWwQJkkr1M4rt9EFt32TNeztCHrXXUSmyaVkccKp",
  "key19": "4aurC6ZcKYjUEiLsRH8EF15jKpoyPUFunBJ3SgiZkvaRhaZ5AwqZccEyRfczpDN9aiE2jBHxTa1LUZM5o6dCmHkR",
  "key20": "bSKZQcXkSeEZ92WaoDTRAVGZx4V7Zrx4ZPvDPX8zvFH57oao9AwcWLEmKKZ5JbTSGLzk3QqoWrEipud95zm2YQh",
  "key21": "5XWF2d7ukzoXNKzx6f6K9mjwyu38xYkN85fHHXXcano6gMvE8xfe6GcmsNi1wEMeMcXADvXJj6bZG5Hz9eRsvqGA",
  "key22": "36uF7DGMHQ5iCEj2Efc6xU8vSyMupWvFvjhcdKnwjYuekZuiBwza4m3a1P6TmLy7XuvAfqpdHDvdkNoVAhZaKrnw",
  "key23": "3Rapjonmtbq7GWAbJUGg32V5Har56sDdKQYx3tVWjVj8sY5h2mSXqdAsu1rdP8AX9nLTMEezon3MdkfK4qC7Y2vF",
  "key24": "3unyEkCA3zXebv2uVjSotzt74KFr18xuRmLrieAGLBcxTURgvnRYTbPsVTAjdJNpa2JYAd1tKaYsUGmYG9SEZkwy",
  "key25": "jKLhWqGcjqzJ58XWRqoHWLqTdTDWjdBjoKPnt6QvJ9386a3GRAWJ2VcWc9ZWscjuKp4G9wTorAMMt4XNw8sZkMP",
  "key26": "3Dg3PyaWaMjWmdxUBbymajzvTLpPK6RkVeaots5YpJsuNKdMtzQLNgcqgDJNE2vLePdSbQRjBNne8PF2j4U9JjS5",
  "key27": "2sfqXC9LmEXFeHFfYbJWRguF4p68LkS2Kf74tsacshE2EVVDSQZSri1J4YyZ8uTyNdWG8MgR586METHfxRDH6Lqm",
  "key28": "2KtbggPovmFPBAyhJtFArQp6iAo7jy3DfmUUJD9KGWeKmKZdvvrGU6Q4ENSvBYc9cHJK2qzPW64qRvmk6aNpZHTZ",
  "key29": "5jUSV5zTXq14zN1DY4A3M5GCY11nSjqUNUASazcxqqGyjcz3SnQFZn1Ha3x4q7rUiNTe9uwXtBKKTGyThSEfZcGD",
  "key30": "4JyrwHVAv4GyqRgaMsMpoGYr9EN3KC2NNn4z9YL8BPV3gqoKMnnXGqCq3Xg1qa28cfEJpJ3TUemuZTjMLCR3PwEr",
  "key31": "3qPGbnhMewr8sCgPfrvTgRe58t1sV9SWe7w3oVB6UKNGJ2QZKXchtU7VsJAri1EXQthxeAbbJKZDURrWH43SCM8o",
  "key32": "3zL3UP71XFgspKQgKkPBGQZmDKCaCNqHX8Dn7j62SbGG1iYjmu8yJjLf2cTBiHTRh4wh4FxMZq9FdwbBfMPphGEu",
  "key33": "wUfNbGuVXVdtrYmBEtszk1cdZ65tRHsqM25qDfpxQVr7Y9hNe8bpACx1cU7vhQby684wshQLx3hY4FGEGu8f9EF",
  "key34": "tNnsM3jXbupezNH4oai84KpYEzhdBNtFfQ2wCnJJT5ABdDJFPSBFgPjagQGtAy3JERuWESd5c2Rwj2mgM7HcGJk",
  "key35": "4dAuJmmB4ALzLz3NbrZfoa9pXcYK4rcMDdJp4ud7RJprsjT8YsQbDa4uC9YfK9pt3JVma36BJjjfkS6qu3geX5Qe",
  "key36": "5nQUCFRCjC6kC7WZgxox8b7Bt7oyAgXnrWArZdZCKTwcXcg4Jjr2Pu8haoFxBbzKLizM1iN1caLYrRAPxADqPfJu",
  "key37": "k6UvWnbZTiP7t38moSv7YwLnYr71n4EaDwodNiPbGYehqh1LZTv6UC5PD2j9xNEuwnCjrCvpvfqMfbQ5qQPWkfK",
  "key38": "XVZkx7a51eh7ZcKmAwcnBicVGgm2cwu6rw6J4J1xba9gRMNMn41o2yra9GPxAh6PcBDGUqUWbh9d3vx25xEJjXE",
  "key39": "SZaThiGsz81Vo88cHXfFhcDPLDnzewap4ywUbMmMp6Ra7BbxvvUyWMvk8MkTAv6zLMxSd1kXzzJMcdKRgJxDqHe",
  "key40": "54Q4QuDabkyEhg5a3EpXQ64s8Lb9YmrPQQba6XD1917PHkSfocSjpiUHa31HfvXmYiJQEUfCAdJfPujn9gsprE67",
  "key41": "nBnryp8zMxoPtPwT9ekYs8r82StYuL9ULB6aHxbpdvMnpKyZPEAMPT9UvkuxhUEBqKsUu3Gx7ZCWEKK9LcfbRrF",
  "key42": "4Jaz4b1hDUX3yDvsFCRActUDjW3yEo7WAdBWZ3Et9run7NwgwJRWp6P4aPwQTsffaYXofNLX5GNw3yzpFDBvTG97",
  "key43": "4iaf9bbw2N5E7Vc7sF4DSxchnBxiqX9NBosfvZKprreY41NQo5n6Xn8RZRatHehaK96VnXRfUSY3h3zsHL4pC97o",
  "key44": "2o6UR6hKESMM5nnNbcKCBMbFfjVPv6vVuZFWSPPXaoNVEGXyvCJgt7LoFkEzL5sNcpvUBj11AxH4MxJUVeC9Pr2H",
  "key45": "65s4zhBL8cceaksZ3oyz67Ai4TiEkRJXU2bQZ5aMrGrwpvoEqWBSEbKJsadAokytVodziAfPtYFwqHGj9ZUnYPws"
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
