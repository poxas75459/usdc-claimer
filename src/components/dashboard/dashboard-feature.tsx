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
    "393PrxKvfh6qRLqxUh6kj1b53B3HCwwiUZrTpF6XQFzXw27ExUZVrbivZr56DTx9caVHGspsdU3RigieGYaoNj4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jPDCuBEedgbYczWv1zu3uyt4G4vpw99rUQYw2zvxkxeVWVuo9n4bQxZEuwSpdndKHjf2k7CcukaLMmaAunmgu47",
  "key1": "3bzGPr1RJkNUDEjTLgJDjcXeegAowCfqJ2jKP31Uh3UVLEKG9kMt1Di484kJkAmSLb6ZecjWTqV2TiQ3YutA6uM4",
  "key2": "5baJW8ckXdDcyChgVP6VV43HYU7KKg24uB886dRb1zXcfeumFJYxXtdpTgGVo9MxounjYGBemzysNfjf8stedfar",
  "key3": "3yoaVMuVkEbuXrWjgsmtHscKny4ugcdCnLvcf64RPu4gfcdCtDpNLq6RTDGCifS4J8fwqea9KoMea5YNsmVQKgEC",
  "key4": "3epURs1vfctbrrnnB2eimWpGTM8ZtX4vGAuek91tuzGXTtVdoCFqqQpuJS3DizwKP8LfPaQodvChQ8J37U6Q1EDN",
  "key5": "61ZnvMfxnf57mY4cCY3FeU1DbzGVcp3d9eyZ7o1j9ZQNqXG2Lcbv1pi3hQaY9eeq6MCDk6L5eVbv7jsDHYD4CpLJ",
  "key6": "379YCfY8BrgcNbRX8USpLDxbABXjwjLBr2Zp39fV3yHAEyZniCNSJm25mLHoRuNXDRd2hegu4kVRzoCdWJiSvpw8",
  "key7": "2LvTaMDEpafNWZnsu1gnnvUfSH7HQ8Ba5BQ38YbociSiPPd6K8gyxF8opRemDqyLtSZQuf66RosYwCkDn6CB5CCB",
  "key8": "47a3z5KvSizTiNgs71jkcTkGUthUjZv2rMktgnfNhin2QdxVaEwF7XWRpoGCksqmK1iGoBDJ564THE4zmp2XZS8o",
  "key9": "5H4mVWXgN75gPakqBed9zUxUEFxjtwbFptzCWPg38cQHJLbWmguWvdHLjtuCRX8QYu61dMFS1mehiqdCNKETmXKJ",
  "key10": "5BrJDMeJ8qhR5jNbPdJGhKdu7WRjqPrLW7vWcA7ozfJ6dntVm1cDMhQM6cxAMF9ZfSG1Ygd8ntGoDatoCwYSuCky",
  "key11": "5GQwUvea3maivQWgu7rzU2xV4NzvFxRQa4hqjos2jb9MpVnoVqYsXnbj7E3C9As2CVrop77L9Z6rLq1k3KYkcPNX",
  "key12": "4rhRkbnBeNzRpURtg8spUZHDqh6f4SWHzodMwd1UttkjmBM8iXuYTsvXc4en2SJK13M1LhgjsrxCD9PFVvDDZeDu",
  "key13": "535qSBjMhwMA1yLxfq8URdBDQXcAFMEMgbFaEfZkxppKS9LgMdoNSjTsKxr1EJB4PgX712e4d2gH9DhPa9Pi6WMt",
  "key14": "5nWVV3jwfCKB7hUEuPWNwCSXP52y8YshhzkAUpABbZBBqCf1mydvmwMkMyG8aRt5SpnHj13FWacNXD1GEKyQpvbk",
  "key15": "2CFVLPHctehhosHCFLePiGqzBAQwwzB2D4c9kwDJvwLw98PoWwzrWMuL1bidKjhVErEJxcxQpJ44Sp1qo9doc6r3",
  "key16": "45VuLbHmH37qzQdwbtgXuACv2yJUAmKWLsCWXywGKbAzfvd6WsbMa498XYCNDvT17vjdbu5qLmZBapk6Uq8smwUX",
  "key17": "417qiAp5hMTAaGsEV5h7XfbVfZkstn75kZxcbF991pDhWcZ2w7CeQVeAnPJmcg9NTKXaYe52gkjcNQxhqjVUY8fL",
  "key18": "4JPMK8grBkmP7pa4aGNRQLg6nAntaU4wnft3GJ9D1bLrWJEnvwtRbRuSfzqVBUZpmj7rP586nNpdxPnPWNsgHxtn",
  "key19": "48kBUqwXbtH17QofNcD9mcddfTa9gErjNaRCBKXAvtzH7oPji1XCr6wSwBasbpsUG7xhW5t4Hi8NPZHSNYFjsXRd",
  "key20": "4CBjwVSj9rHNqAzDTcicxfFQ7kEK5nhbXEkyfgTbRvpjnP1LKEa8eRuJ7L9xV2dCwMkBWa35GwQzSvdwuzs8fAYH",
  "key21": "jFVy3tmzdTCFvdDbCvA38KPnRVDXjXqwfWVLdfARXkwDRhgYX7AEMa8ff4ePpCyMd4Gwusr9RPq56hE8LMrrEx1",
  "key22": "3ppr7emtr6FfGi2P2NvEAzi14dsqZz3QksysmybbH1VLHGAckS4YzpV2GB16vGGJLKwS7AcQVSdhso8bZsXXzBS3",
  "key23": "2t1oWLg5ujoWfaxshQZ76KpHpNBnt8angAqjgWGVP6FMuQnehi4seFz4aTfjE1jHMRiU5k4ZcvT4YXCRBPvqxe7h",
  "key24": "4pFEehnn9ZeLsAg3EbzUNt1youVauQNYkLWD4ic5Sn1TYuQ5CP89NP1RJCa6FgAa1U3n7jTNV2eyMVcBdcFTx2m1",
  "key25": "3SgLEb5u7y9uBHQULrptXZvZHWJhBsiMFj4rTXcFLamePkpkDjSUWvBRW8yAe2WeQY84NMk89BUcovkwvdsbWENX",
  "key26": "337cUgcHtA9XBDmGNx1K7LEwAuPNTunhRGyYZa92DN88ksvacmpUSxy87ShDebUe6Z1ZpmNV3DWwry2gdFdhy9Fy",
  "key27": "57aAge3ZaGip2H8q1gb9veJ6vVUtSZcpW3LjP6ZUmzrDe7cw6gA7AuY8xB9KDHto91pzBmhpV9P1YJJX3VSdHhTY",
  "key28": "2ETCVynYCV74T6tMSnPpUKpwFPHxHRPoK23HfMi1HgV5M2CFZKRyWJhNi5MaAMn69Pm2YizV86VYzrJDKSiQ3YmD",
  "key29": "63MxZM66fK4GWTnUYXzsAWaK8icpFFVBzdmLizn1ikmx3PU27Bncn5dhHyrNU5QPpRKTHCLFepkdYGVgVxaBAKA6",
  "key30": "5GCvxScLmy9hUfkxLq4TXkBJuT93zEn927apXEKwURJaZxBy6ZSTLwe7BCrasmzxT2JkV2BJyMfHyJAtZQNWvmw8"
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
