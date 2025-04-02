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
    "4DgigojHhGoqZ2LzW2NTYxxhCoDmEhFw3P8AxqqGic9kbaDbD4xRGxAAMJX5rGrwP3YYyy5RjK85WtitM8FbSNCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vh9baHFVuSJCkkgWrs6LEkgvorfWADWvb36Xp9vqVgnciYgyk1aC28DfsoEuqxy1qfvzMU5fCCsaq4hnQpEXCDp",
  "key1": "3EJgZuu9Ba2YztkmVzAZ2y3vkhTZuUmxFphNGesVKnBeiHuci9tTS7eK3JwAmE6w85q1ikm657y3QZqgjgc2ZFuQ",
  "key2": "27FdaXecgzhNKZcbjGVBvvHsrhtkvqLVx2Quu7rvKgK33Rx5ZanJWpqARaxs5fbvfxTwXirEmkr7gmG7UGnEoy6J",
  "key3": "3FdavpqoJyZH1oUm9vhT1iWjE9VsDyFE2fqhwrmYifrpJthY5YhzyReH8DZ3a3he7E7Cr4yEJgUgrdk5GCW998aJ",
  "key4": "egzig544uqYEkchBVmw511T2ax5cht1Pa8zrrNXH65peod1zj6gWyp5FcuAgRynVThabMePdq7L5DDjhGmWbXmF",
  "key5": "2bfVhJ2NzpTVYhWioAK7fpkRQwfBPvU4aAZBHwQASTVcZe9SqbVdgBVcBFq7QCZB6EefQrxrCujPZyCfDPRTjAAQ",
  "key6": "3c5sNBzB3USnxWJxREfj3itHSfcHcgdaDDNfpzXGrCP7Rw4MFg39SVfkirgZR88VkrprZvBYuXXFVt1BcKwZfkKE",
  "key7": "5F6Cw6Ehcxi5jnJDXncyv5yZS9vdMVyYkzZrpKkBAXg4tv2EBN7UzZyWSfjgp6wxEf7QxKmSBHxcMaeYbPVWAUci",
  "key8": "5J2RRqQURjEq2AhirXuHY6hpVsXuTTihQ3YPfMWR7bPK7ujuEcE52PsSZAY38tdM2z34u5TiXm1taH4BqstEkGE5",
  "key9": "66TcMiMfJe59weNpYCJPNzpoaQEHHEzJe2gt3jsb2z8C6W8KzGeLt85bsB11bR8S7wkVtfvEVwCrXPhxoexs89qB",
  "key10": "3rjmYG71XAgmbPsNfA3GHMxXw57ctYCNSZbUuVdxoCQa8ZUtS8LiUk3iCBh6a1LvABNGbqVXt45ojWdrfhxie8Ar",
  "key11": "4QDkW1aMwd3NzeGWTDM1W5v9YBk6XAhAbyr6q9XyuHttDnZyPHdzHMe4rKAwgN76SWHb1Zvtx5fCbd9fFEFzd4LG",
  "key12": "wD8wReasNMt9z4HosbrQv2NgBojv4m765viDm4xoiC28wjw5sVjEKsdNU5b9iFNbryMUapzAQWMwvBXFUHT9zoC",
  "key13": "66zRPHyrUAEgVLFkS9Py1yhCx2jUEfXxCYQ5Cu3gLB9JcBncLRZteH5YbxLiUmrk8KPibrjhKwaB8wrj7EzLRNiL",
  "key14": "5UKwi6ojBQsZWwQV5ZesEerAUa26mT6EdoMWUUbkdA5N4nGmT9zhTS5hXbLvbwSeJ9aKbaQ48cwtTxsCtDMdMZw2",
  "key15": "51rMefdgJyKBUQ4yG5583YKmSum2p4CpKzadr5JKho7Z37b4dCQPbDtCX7pchduyarL5mqS1VrkmAbTBxfgNUAJC",
  "key16": "3td9eYdejahJHVAmyZYVqPoKG52kSZZ4BYo4gFt7t5EN9MAanaVASVaKXJd1eCbfk3Pbs8nfMrPTe2NvM6ZJ5ENu",
  "key17": "2iy7iAGdJBzrxejsk4ksFYzzjnbNaSirhpq6trXmtVTpDKeYSt53Rahk3aqxxATMZMqxhbzyKGYTcTATr8ixeS1T",
  "key18": "39De2n5wrtnLbGGHeymTVeDGyuw4ZusLzSGRNjQTJmaNbQd1vBwUYXdJZL9dwsAezJz9HjqJjn5ECq5gV4VXUh83",
  "key19": "4anBHbUofLCCc64RSWASJZd8MAEgZKKpUwnr8qWbMMYgor8VJ8xZD2QT4ekWgcCjE7NNyXgELwT29SvoL3LzQCjw",
  "key20": "5oA9NxV6XWrgQUh5QeXiuWCHZ57up681Hr7XGG1AD2C2Ef9vNr2oqKVQvkCXasVnxghVtDnK95DEAFaJXQBs3jcb",
  "key21": "EMvphiWwBZPn3YsArsVZj14guvns4rJYbPXZRKa2o8N4pDCbPHx7eAY5iqbWib7os8GXVQHGivGn4XgkdfYVqMe",
  "key22": "3qsPAJLFrJaVuSxahSVKkv3YeimGXkuENNuK88AZjQetuvBmrP4rdUafu9tPWstwfwnCpRTZsaJjkkZ4N83PNHJ9",
  "key23": "3Kb5kqn74fpKKPfUh2yXJvLKiwzn1U4pGsURjGjdyB3U765tkwXB1yB8v8nQSqbAFQ3M5NRWrHxVPFHG6TLjNF5h",
  "key24": "2fM1oCTkZhVoMxpgVsMrtoUdRXPowfmLvijwpJGAbUffmQ48opeqRkShhJoScRFKf3ySvFHhtV3hLZYHCJjvg4mR",
  "key25": "PRuxhLV28chtuj64WvsQ5NoMwpFW1kh7A2DRn3CrF6zx11gP2JQLoNEVb7uNxRZBx51ah9u9vUEY2YApAknHPPj",
  "key26": "4Tv9wcQPSHx4rCxHaxbSSBZWTdMF3LThkVckSrRq2FgXnpbrL6fNHhmtj1x7rZojrP9SpAUGvHW42QE8G2jmh9Kf",
  "key27": "5QQrx2tK1m2B4uUJiY61TPbYGF7BmNePSdHzSR2aJ3JyQKeoeXcofTMAzpsyeNnNcDCojtQypPiwDHn88P9EGbvs",
  "key28": "4AtBtMQF7X8CA6nRCmCSQfdBLe2KVZc6ku3ZGhjk6HdvK6zzFtCgmnsCXGgPHkLG28XadcvTcBbwWyBLi1hTGkL4",
  "key29": "6qzTMcdahqJ4jkDavKcf97yCiqYdXZJtKEMGqq56XqiHXf8e5YC3szDCuKJS83BchuhWmKU8Us6qNLRbEaqk5VY",
  "key30": "2jnZkohPUeANat9HWYTZaF6NEjReGSXsmuhaRgfCXQ6zPhXqVyApW95sxzxUyeJtd2rpmZ21CDQiUMuyuMFL75ib",
  "key31": "3J1Go3BLhfbighAaFetB15RbihinFhXMxG5Gm2wASdCG4dZGQQEfnUWBVykKneKM3DHQYinMCRhqs29nXFZYEruM",
  "key32": "BkQwPEAr79hsYJGXZnpJdKQYjK8g4ctVqfBKvy178NnqjA5Ek5o6exdnmgHqKwphiD7weCXmQNzAATw5End55vb",
  "key33": "4MfTWpkawaDhKiyS9GE5SrQvHofFkntdMiiCpUVYR6Ro6in9zBgT5hxiXUBSFU9QWtsAso9szgYa1DNUe9dKqWAo",
  "key34": "38gC8XmKKuRu4jmX2RfoAwTn6afNfjA3g4hYZApV7rjxq3YTjUSvBer1xPTDhJNYaeEy9RBTFqhzoFzerQPCudBq",
  "key35": "3LF5a264SKninDH1S9Hgz4WWUzTU4tK9cB7HboB7UZeosFnSNTrr5A4nonGj1dvZ5GPaVVUA4ovK2DhiNJSe5HX8",
  "key36": "4qD7ZRmd2r8VjQ6rPjfBpbeeu6G2Q1q5rMxmLi6SfA1DE12CUEW6m6jeetDGZ69tP6gfaG9xgmV84Nxz8DCEfddY",
  "key37": "WQFgEYhob1of4bWAYcJCV2BKFxNmzvDrSbeLoopie8m8eWW8S8zmahLckj1weFwno2jEx8msfuaeJ1X86d36Vwy"
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
