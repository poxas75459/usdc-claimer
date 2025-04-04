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
    "q32PjKbtC4XRVQrr2Ls6Fzq9DScqPEk14az41fH1gV4Na63FFd35hiefb3HnBkCJwys391DLAjoUd4nGThDcePi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jwYkB97WiwcYj1iXzKLdQWiugzYW2yzbozcNEftNfYo9zRHM45Zs72Ku8Z1bbD653KUWb2YWADZfzQxcVixfw7o",
  "key1": "5PYD25QTdLZdZiF84vCdhHoiNGLFJy4iL93ECgdgU3H5tNmkp1RrNKexzVWPJwhgMZwsbkvaAKEj7ui3xx47w3mT",
  "key2": "2tvhusgoELtzXqVvKNv9po4cqqJughM9WbhHfBGyeSvsp6XPwSNcutF7S4U7ZE9wkx16ZDNYzcK9Z1bWK4PYiSTW",
  "key3": "55Jaa4V6GQdy7w2jghmGBBhQEFZWKPgZiKnFbatZMw2ewSXkuyBJUdiQ47j2syDq97WCwd6Hp8eKmydckgsnPyqZ",
  "key4": "4izaVxo4hLyUyWg9McGNmuvQ4HZCETRQtmDMFQem2t79XYnMdf7nGVHq8gt3Yk78BJHqpn7WtGbCe1Zd5q8e9uEs",
  "key5": "3UKb3TyPUnYJRV3Zw2dybkMb7EzmjbZ8QN7sVS2k7sqvfBcLkv2L51cn1rQyBSVrv5dtPjXtTk5wHottvpN7x7N2",
  "key6": "5fRB6VNDXo5GC6bv9Tyk4Z7yV92E5PUtTTuVS7CjqNMURjQoVJ62PkwYQKUP1cTbPePivmWa9sx4EpC6RHWCYe25",
  "key7": "2MHw6G628RmQzrPKijnwETCGgtkwJEvQu2EhjoyAMVvNFb6vXGtzLULY2YaNxizUmya6Fjy3qx6haF8DJA8AL8ow",
  "key8": "3PoPsvGkrP5ZauR3mJ2M15pt2qimB2cuJ7KxZbwiVViz8DUmbk4Lhv8TkmJxSS96LRaMducjPZFasMyzRmAbV5kd",
  "key9": "21ECLLPHphJjAdNMZnrFZjMbmP9XdKHZfn1gTy7AvRXwgr9ReJxQHCGhswtxvG8dMyAEcgH4VaYySJeTgZiZ1pGm",
  "key10": "2vd2gi8YM7rjwEVwaKJ6r5PypTCrh9dHVxPLJYch7M8zGqy8e1d9bzbMeDbViKyf6DkWZoMstgTg2BuAaNTer9Fc",
  "key11": "WbDqRseSh4zsN3GnnuQKEL7iZWVPsZJoLeGWsTZH2Y9x4PBCRmnqNa3fojW4ZRv8DLXnMyuMecfD14MmAU4GJdw",
  "key12": "3q6rd2945VrQ5Uw2w3VnqMjkh612iUPGUwogWycEGrkncCw6hArHC6nTND44CKqiRodLBfrbJSyV7fyrrNAQhr2N",
  "key13": "5oZ2T8QbgAdEAb1PETXasQn2VnmKVKxyQHiybzvvoPEUANiRBwywqkcvG31VfvJWYvg3uwcmqtCoJX5gP5VASvmC",
  "key14": "Kv6ot3DtDh82tQjoMVtR5owWJzBsvVQ6NMBEXLX7uHE9TvKB3ds1gKSFPyogFsXjbfi5BvE6TQHCrf5fPaTn4fq",
  "key15": "bsmyPTiNgHtbUfFZska5c6xExv9UUmQSsXW3RMu4AfH3uMMFn8fyEcUtHu5uJRDUni59qpAkY1uNm4nGMv9MtPt",
  "key16": "HjH6P9uCWfocgdFwRgLZC6JUFLCLCUgrEBGrGDi8wLYGq7F4H5hQv3JoHAexQEh2ynn5KdwnDoB3j3YAMfS9rgM",
  "key17": "63yLRwUYeE4BR9aCtXrf8qf36bMHTdck13BznKmdigeXn36CsHj3QknTy4k4UudY5yqoqsREUB2XzuFK9kFz1Hz7",
  "key18": "3ZppiEZNdG9Yr3BJCFyrxk1JvuKVqYTQmy8JLPNuqpb8EZzaRSuxR7gDiEy2wtmWMovKZc65g7wUmQ7ZGJE2rn9v",
  "key19": "4oNo4LT57wZA2JmExPDGFwTu7aBURVB5DCsBTXsQUv8ybG5cRJxoy5Zxyv4HCxj6CnxWyCG9SUWHaYj9KuvTSrQu",
  "key20": "2sqwDRuRHfQonf4ncjV5dbRVbAkSstu2SCUgsNYyCy1coxSXB247UVBjsd6DkA7WfKto6s72yxKoahMiMx5opRZQ",
  "key21": "5Gz5Ye4CqvhGCH2aQhJibMGStpLQvXD58iBsscE293djVSz5YybLN66PZC6ruw71ZcwX1erb5NbJDYC4SPEXi2aJ",
  "key22": "3Rc4Yc6Xz6sFB9FvUMkhsa9bP6JKtdCK533Gwn7pzGvLJNmS3aHfNcAjW7TVpDJ4BVxqWWbHjZEDsWsgqH1LhfZV",
  "key23": "2k2gus314Kaggqo6udpDPCFpLkZofmiEugMDRk5jvyyXD4kXhAJqKYLud5GkdgV4u1t9uafuyBvoNycJxyQefY5Y",
  "key24": "3ZVLLXz7rrx48aJWibbGucegSms3mitLToYH5Jdzp6376XFasa4s1aUpqYEKAEpo4YnHKVYtZeA2myY3wzgTvwGv",
  "key25": "54yJTFf6YR3kRJ725NXT6ykDbeWPFpqeG6CQw6ro3ZyMHYWa2jXUsqRegXAZTvFyLZs4cqTpkbvTqptWUGEgGzXL",
  "key26": "owRbR5ZgL3CBmaY1j5YDtE8pRbmqAariFqwKPy29uXCBNkUsmbFVwSwRPK7bZiBjg8YjgvgxnUQUD586gbdaWTG",
  "key27": "3wfTRmr58kK6jo4zKoULbvZcGLMrMVBeWYTT8ggjZHvSXFkfHJCP9o26MM16X6q1x5hEHkH3pvm1HxDEwDoKBmsJ",
  "key28": "3eiZHkkXRVdJh2fPrKKPe6qQ2QhoMUuJUJuC5LDp28V1wfLnMNRsHbrDSjbnSiiiXpbxmJCRbp6JBM5yfy92gyRS",
  "key29": "hiVq9xAjaV5ai1bvLeJa1w8fnvyTkEPWYkhievJCxSZuUc9nD24e3hCSYPf6pRwZc4wKtxxR8TDFyEhL5AJ422j",
  "key30": "4J5G7Em97Q4Nx5ANoMkDKhETkfwDBm5pxy4nnXrjZHKxA6H5fcz4upTA9atpCESGQQ7XoHAy1r4VrvU6AhAwSzei",
  "key31": "5kixx6dZWrNNmVQLh4jzRpAnv3nLTbFUzyhyRHoMrGHXnepGcjMdKet1hScEuDnMuWozgysqaWw53s1ARpFYDsKR",
  "key32": "2dQTPm77mqoJu6uSQiLjnektod4ppc5gcroBcufppf6SFj1vXEoUoEgNSsxPJqxx79orbYvCevPYGXNVEU9anWnT"
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
