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
    "k85hgJs688YaipAthJJBKcutugz1T14LLcumEAhBpLzyJeRZh21NEgjrsHSMsJCFZ1U3MmYgwpgnXrx78h61aSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27UsP8Uy1NA5aoa1eQqJT17FTGi6RC5NSEkyVthvhR9bXGMg9mWCL7dCvcCpKpncvhtWyUxjDns1NaEyCFPLBZm3",
  "key1": "4f3B3f4PxnYVQ1ZboYx4uwfV5rirf9KQmV23UgkJEfEdPyR4dgyviNyQAbege3EkBdJM4rkKzEEnXRRdXmrERbYm",
  "key2": "3j52JdSePfmADnwsLq99SEND5rFPURHfCRqHUt53DbmsoAQRp9NEChY5hUcWqXRVZmCJsr87LCzVvM2LH2gomuDN",
  "key3": "5UgbT6mPoZSt6z3RWxsA1QDuWVPw53Hpf48k5xA6Ru2pPX83wCTmhKPxxZiJ2ZfAQBpkoEbiPgMpsjyYcdd8tLno",
  "key4": "5Yenf4LPiCLhbrxnCui7pDjdPEPEdruXZjZmPe44ZqqGYEZ5C21QWGuCSSmA3QunxNZ2NdgpPBva66TNnqVJG7sv",
  "key5": "4AmEWyypkCfsoZCVHGb9Kk7aPYRNSvr9NL9F2Yxh26fhUidH7uVVqz18osvPvnK7dSRgA77Au1PDwZDfEZA2x98k",
  "key6": "2kYZc4PZBaPW2UrLTjeVi1gXNMxvxUNypcnLYt4k7VxXrEmTQNYw6xgf679DhsrgYRtp2VZrsDnd83kY9iSkuesE",
  "key7": "CsZFyYAqbEyKEsHmPr8D3mX4DQgpkBHsrsj6XtfFM3XB2r3wQFmsfv4rdQtsHXMemzetFJyre6FaFc3F54PC5iV",
  "key8": "4262qcGBRqkUZSk3wxVdap2swsUmLdnNs3nUyfkPTwnB3DXpsUBBPc5Q825q16dWZ5egnCRy1mcVjFPbQVF3z73k",
  "key9": "3VXZ7rSSkxZpy4TvXPBZvWPwnEHPsdp25MqChyLrjY1YXnbG1paRs7HZ4NUti1BkNjmYwXZv1CzP1HgyvCByLRbq",
  "key10": "3HXVd8cdFhJCfCmEU635wjrDwGVvgJRg97H3Yr5KwNBCYrwhJvYnjjDkkpP1btXbZ8D3X9Zb8DEqzNjNdPSpfaLD",
  "key11": "3DbmvMffk4sd9aa7pwcEhAJvxHSrJsNp4coZcVmLUSLJJtS2v8RmgtXgjCPWHTaWCAubU31JkyWk4cVKdt7461Ue",
  "key12": "57SfdBPeA6ErtYA2yYVcWWvJ6Jf7vCtinzrEoU75u5jTZnT7syFQDAFLQMWHzjnY17EFdaNwECjm5kmDC2RNCfZk",
  "key13": "3MtQVWGwmjzCY8oBDQhNpytk5J5DYMYe5wyAfVtkKujv2rhoCBrcPvv23y7n3W7yymqeqDppWx6vS8Jd1dfe8c4s",
  "key14": "5cBzCf3FdtZuu5UqsRTXYCivzZ7ZVAaDV7WbcwYQCY1L2iJFedCLb9XWXHg2TmwwgmF6vremfECyn5gek7WwVQmF",
  "key15": "3wFikEvSTdWGr8WEc12gVECpVQzFvLuvphtR2XGHettPuyT5LpVm2Q1e1KcehhQ95zeBY55mGPf4mdArpGTYWRgJ",
  "key16": "5BC4KtL3mwMrAxhKwHbM91Pu65gMn3dYnCwZDEx6DnkLJmkDasPGrPvDMWdQWsRvEVBQyAg8GXd9uSPopYoGajab",
  "key17": "2iVNpE7hedXKFd8Tc5WFP3FmzevoDzBr7ofA5KmvnT6kqUJNGeffh9d4VP8QUwT6e7BDHc5cnqdZpo6nvSCBow5q",
  "key18": "5NdDr9XZnKtHAAm1nTuxvn7CL85HLWoPDFgPd7k2uq13Y4kmgHvrcjhT8KuRvnksrSaEnPXTv31ioZqFRTWz3ApB",
  "key19": "4yCsHQJn7NZ12p6MmpSQAMNByasJLDhq8p1YYrfCGcVYetAqYLKDAHdWhWZiownhW9ZXNwaN14z8TVzuw8ZySVYd",
  "key20": "28MqYoxVGT6rVn8dy2CLRtc982HWQpP88sZ4t8gbUsr6XfE9N7bSo8coKWbZYzKkgdLtU3Ytxu13ztDqCoGbHVrY",
  "key21": "4SLmwR4xhdsvaJsMaePZebD8bApd3rxbKVXRHdXAd1EcxSCn2XFzVMuBXUUb9Q8G47apeLtaboWqPAPCvBcEhKkS",
  "key22": "56DnHBwqvaqsgZQmy4PJ8r2MTkWTwxECDpnYY6vzm5NTqbkFu2zV3qgKzPwipftc6AQDS1cK9KrWW4SCVgoLw1xd",
  "key23": "22riE9sa2hLGYNudu87Eay1zCbWBbPp4BspkRehwqPwphjP5Pt78vhZ5e8MtCZUtWMXBZRg9UGDAX4wC1JBNj4tj",
  "key24": "3kCqxHfUdNM1rMkmS6kZtWzET4pfKPQ5WX4YtUDLQ5RQ1NW3SEo9NLK5obmr584LhT5RBV16W2nfC7SiKBrfqzxC",
  "key25": "4S6rWbjE6yzu9HFpxuKLxigovz1RZy7VooAa7F3eKjgGMz4KJDftPLHxTeYpwFYwzYceSA1aD9PwoNy455Yf5tqm",
  "key26": "63KGhfyASjTWfBxQp6MT7uqSktJTPpHmfjwPpnQP69YcoAvWNW2jcuULze15qxXg45tXq9QVwQg8fjfpeYYDkjmm",
  "key27": "5mgQEzX71kYHX5QEENJcfv9Q8UW5EtKcEsKBiVSNAXngBW9cdfbBsWAnDYSc9eGDbDU5UGBqP7Y1KdWe8tL1Ssyb",
  "key28": "3XQxDuZvAbMTGf75UiGJ6PuNuBLjdhkQ1LEHkyADYk5zzPiFi1dZuUJgzWqaNkyKoQUwTCcbbp9nwuCz7Sh2J8KW",
  "key29": "4BeH3VCz3GWSqG31txRbrdfkyvVGeV249DqMMVTSig3SR1kv5qXgAjoThgyNhUFUiNR5Uay2U9ZqQ91AAnXD2oBu",
  "key30": "2xx2M6uTqGw4dW6SwrL6W4csb33LqWvGxtfJ9kKQWhopfZkb4b58pYiJ6x1BmiyF8Kqv7KqRbHTSRHtUrTZuGbJL",
  "key31": "4UcTjML5AAQEve1tfLgir3PAnsbqdp6YNiQJqeX9DYy2rBguQ9WhxcNCy6Peh5EjmoaCToUFoj9SvGGwVM3acMAW",
  "key32": "333kMwwZWYvMP9QbpWVh1VT2svW5ASS58rxQQHHSqpxds8zdcvi7HoWmzk959FsioJpGJqxe5AH8sk3ixqER76vf",
  "key33": "5qZU2Ek6vqseJerrrdGqnfHdvydwgcxkk4Fcq49qC8jQKVZnGmGcndkabPWi9oW4vbEjbqgJRD4ap9FRSm5LZpvx",
  "key34": "AtCgYQiZtbB71sEmm2FEkzJJzmxuxYZ4GHbhNKLbSDvXfvNm1twZMUM6kRyDqFSQJVaFCUiXvm1kG1guLUPGqSK",
  "key35": "PLoT2eR96PZcRtQxx9XRXQSyBSGZ8DpNftEekKKWggji9BHJYKxRZZ1woLyR4dLaqjoRkhc62z3qHgfZtvT2Tg9",
  "key36": "35JkbSjbVY6Ps9uH5p236Jifacys9dhS4qUDKR77XQYtqmRneSTfVVmgsaJWtFFiTZLLiDErtz1iaXfC8gnJNYnr",
  "key37": "389ucuy4xpcVj2TY9xwYT66ntxp8zZryt6PCeQ4yGqrZm8SRPmXDd2435WwRKq448SJQ2bE4HBJA1atXsaX9AE31",
  "key38": "2sRYzUjxP5n8Z1VuYcsyDULRckyqNj5ZhAYi9zHbpCcKCNkr67Wyjr2Yq73dtPWmCwvPaX7PJmQMxZfC4QQJVx48",
  "key39": "nQTHewKaboMZB7xSDzMqQXRQRD3P4E8DDDrvqAjPQmA6vynzJnWycxVEZnEFcHxVLG7UC2DgXMKubhT7RV8jpfe",
  "key40": "3wns6C9XiSKfxrrmtWKWvSRVYjQBBJ8ev3PzM1ua59iDeFfnNC8yC4ZLY4vm9h6Sq2cFCJTER5GXX1f5q9NihUCV",
  "key41": "61ojWNPmK9pBXMCcF4ZwwPrCX4b7JFgwDK8mi6f6EC2G8RMv8qP3CtZ2diyiTE1kdsHsVgbY41kGnpBsu6umBoR5",
  "key42": "edBCM6zNztZM5Cz2CHgynVsWWPHyLVvHQ6SXW6VMGend6N8Ba11L4feoGdrgweCWHHCnyqiynA9s71fumLYbcoh",
  "key43": "2uN9Hruh63Y3GyYrhPbHqvgjtd5z5hxwRwpLcWXTwX8mL4MC6m63WfwdYViizKSkDq3VEguTdRssU4p8Bq4YjP5i",
  "key44": "5XSD8454UVzYrg11iZ4Ev1tfnGAKsf61h2jReUvLpVCzGXGxLaMo1YjpZQxXmbx1q43ZuwDd8vG1DyWLzsmVeWy8",
  "key45": "3CVSQS5BMcff8G1FyKruThvr5r33DrfaUFb4U6N6QytYQKxtZCaeMJJpu9MHYKJ9ZcN18sB8iUY4icvG2g1nMZ51"
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
