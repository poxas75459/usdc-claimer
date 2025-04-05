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
    "4n4BgAM5iFU22t32iQgUGjAhdynyXSh5xDovnnjfpqPT7FcuDkDjeSsZYsC4dJp9D3tvtcTCB8f7qBA7KJvex2MP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W7MDb32Bkh5H5G5vTM4Cv3BmE4VintfU1ZT7L6eChtvd2otT6kJQG1PeSmSx3UxrZTgxWvHTjXmqJ8icXuhos3T",
  "key1": "4Ng98gBnzRNttZavT9LpX3mXj4pXwP8yUkdtiot7kz2wyG2j1BNVsGH6EsmPbTmymza5Vz6frPGzuKqhcnWstF7i",
  "key2": "2JF1S8Vh14jAaTiEEYaAAXsxBuYCrLZWPY9nVgNLDjxpVcba8AfPZu2qeuPG4SPrW5sN6FPBn2UXJifW3AHBG38g",
  "key3": "3LuBMTspstPa7uQwj3THf5RWHiiJHGVHk1ZwHRhHPsRhuJkocBxzWw9LZtvHscgwwyd1VUwWjBThuqEpHKPEhoQN",
  "key4": "2X1GSzCXjA8hgc1XTng99jZ3NapkkuicLnefpqZbSDnNtG4CLtwANExAhVyiUACHMEtDi4AhzmYkGBNZ4tYxFdzY",
  "key5": "4Yspg11r5K7oY85qYEszeMTkXxDL4MM3jWmRCsQh4SkNyDRWkXUQWnaAEV6Uz6UKwGm7BnSXRRFPsiE81XvVAWKW",
  "key6": "4pxGs4a7doBmX9e8NpayfnGJNbiByey9XUBCthR74Gt1Y29uQZC6wU15TouDphYUSA2KLJHM3MUk5AbgHW7VReLi",
  "key7": "3sHf7X8tYLdGYMVfi25uefv7fWYudRcgTPr8C23LTNqEiMguVFAPMhUCraBkGfRLQcc7ZZSxD4rRbafeCHa5fGsE",
  "key8": "4dpcF1JVeuj5P7bwBcwZtMXR5vt8EhQbXfrRL4BYTpJDxPCF7dTvxh3wr4ampmEZ1o3p3BLkr8dumpxWYAtqwc3p",
  "key9": "2vnQhEKF4AG3guDzsn6Q8Uhc98Matsibh3JWgo2usa6Buy5t4dJg1UmNBWV1DhmVwkwLafcmNd198LzngFa4e2rx",
  "key10": "5q4xjuTyhHxPqU1jYz8AeH3N8tnvoSnc2z32y8R3nHkXJpCU6vJgKa5vgmbrsS8r3z49bbf1YTk7vHcWsS9kipvL",
  "key11": "4g7KR2cwn3pjHwNJQD1YtzH3NFdzXbjEDk2sCpKTsSMunQjwnY1pNVEG77Lbi8iGZwXtJ7DMmPtCSfNGQAyfRJfj",
  "key12": "3cN3EPDRz21ZFD15ieNu4GENaXz354doutS1Kx6bSofABrkkJRyPF7sgdq9ycPQz2KmwtiJeBuYeTR4KtK9ef3JY",
  "key13": "3ZAHw3NSuLgB7vBrwni8kJrinSgAi7rJdWGU5TZo8S1J3tKo2zjnSVF733aX9aZR5duZMfkKeyDrfp6phdP3ZxqA",
  "key14": "t2sq4mc5Twxv9AWLgVr7RUhQR6tqecTGckZV2PxBFReE4BXPqoxZXpTe9n6sv84ftxnKVtNs4KvSNifroqnxYr9",
  "key15": "5duFANAKPwYunLBBFEMkLBSD91xK5mgs1ZmpqMPunJfhk1Ee2Q1oygdBzVzHQpkRBFuEw7ttpB9Ev6bS6Po78uoY",
  "key16": "CdgDME5zto9GxVB9yGkEdx5MUZtcfUkrKu3wN2UaNjkZPQxPBi2f5eh61e1UjLMDEaPtDQFzU7MfoBVpKWmcSeb",
  "key17": "FB7QvwDi4eQhwwTF4T8883TqEBjLFV8kVXwKy2LotyDJwRmxnbYMLCWCHKbmFLXPDTuhpeJLvGBRaHZkrGaL3dA",
  "key18": "31XYdpP17tYrRFgWshcirVMe172iwEWDsvwpJ7KpM168zrTPyNmq21A2LSSS84SX9mRS72gkE6qv1njum585VxyR",
  "key19": "454RXGKCrfBbSz54YQ9wQasLtFUhNf3oyihbsFiRfwGUgJXwLxD6gwYgECgmgvusDer4eXW7N4VPvB2v94rV1gWt",
  "key20": "5ESbKYb1p4ouy3yifPKKCbdPFs196bgkpKmHuYAXasd1hXq13awC2hPkSRc9hJH4pE83MHdLRvxY8WyxWvbz7J1h",
  "key21": "5XfkA85y8iaouLif9RE7X7jucBrQLJLUyfjWiq1mJ9fsnhPZiSyxLnRRcYGrGHRu2KRCkZNMNcGrc1mSLxGGHjGc",
  "key22": "4SzP74KAeFi4NrUEmWs7WLHve5MkTLxKY12SK8SErfiz5Y5cxN5ukLtXdEsdWq31Crw2Gon2rEWWMw78ogdqPYP3",
  "key23": "2hi64q3DY7TLurfG3BUpp7DkZP6jkYNmPs8SKJCzogFidQG83drNj4mVoughmRJxVMgiiQGTEgqEKXfdFb1XgnmG",
  "key24": "aCYzpVmYi2g5gwRbYnWp633veU1PGKJ1zoJor74vgd5yEkqoEDSjpuWHqtNYXfQVWLz26JYy1VYcr6XP8vWzFFT",
  "key25": "24KE6r4VrNZ9ChCWnWJdHgKvtmyinHaNxopSj3ZGMaoWtzFmy1eckFYbAPSaCauaYwZLB9xixkvMxwFHVV6fo3Y6",
  "key26": "3gmrjLdLVTrCNjgMwnLF33fwDpHrJcD6mC56PQ9gfvYtdzch8ztkVhd1QesAAA7hhEEHnCKfumKAg5pNnYgU3eMa",
  "key27": "3inya62bkTpAhW2q3ivUxR5TQeMzk7vuDSiZRtyfi8zd6J74z9C1jG3TNbsyXJZHDomLq32tDt2DTD2mXuPzfwv8",
  "key28": "61ptoKgJdkMZR5kDJmds3JLTnJCAmZCHQimyHPK858VASB68sDYtjyhFv7DdBkVGbEL44cssyqCs82P7QWwbUzb",
  "key29": "3mBB3DEQ3ukttiwmTYDf4nhdtEm19TgFekQUsGLjEWcpCRUhap2mE3VEExZ2TQ7vybhHjc7TxS8cubCBzJhMzy7Y",
  "key30": "JimGdRSfCd2vkLiHBAhVuta4QDaNu83dw4xxFeEQqmDVgfSCJ91hCdchXiBvaxWbaH9XvXpwGDHLRyPy9tfUSsN",
  "key31": "5YZFQsVgnyKT8HXrwxd4YiSh5csCv19grN3h1VLo9YjnJL7eNNwb4qnH6oF3Et698R4iZSDdRDsWR8kq2GAAnsK4",
  "key32": "54C6geXe6WdMGUFPE2FXeqhzGfhUT4k3ox147ABzagjdF6GzSH6vitgMajKdWPEmpVTvbwMUhPp37CUgDW95haNJ",
  "key33": "5KHNgwQYqSFLCyjrEdo6GdxupFMaVcR4jV2a5w1H2vvX2z8mevfookqnm3aD7c7HaGu5bA1mDfa2MboZgWM5QBD7",
  "key34": "jNXJ4P5ywWDGnSh6r1G5TGg3aUUWjtdivqNoe347Yfz7v32ruXyBqnZ4FnwbpHi6rP7A1th3SU2zyR1r8kenM7w",
  "key35": "Nf5zQzu39ufq6J8YXDFVnKcH19qhQtezE3XHUiT1fcMnmJEf584Hh3PYCUZni6amFamhzyWSh39mHvzGZkkCvRb",
  "key36": "2wtfU1PyQS33mMQJUrgSEDZPX5bDVQDdBKuc23h55qdCxCw4TTsKZAgPbEpBbYiYdMkv93tiXQ8u8rD2t2Z9CSvx",
  "key37": "4sUv2s8PcZgvQwD25DujHTyfaCB21FcpdHb8P7ECBDAqAzwPALVvHPP6vh5eXbDV1iq82vEx4HcgJNZiV3fA1GwE",
  "key38": "5YddTSMbSctebUXhiSQmdBPFmf8fpM5xguSyhsZGCRnkHGvwTw8m6hh928EFj949vK8JBkwzyJWu8oEPn8xoz7h",
  "key39": "3KDhgCw7oLPKghtC3tF6BNA1FZP1tasLmVJfNodMRxFMKWm93JVHxnYni9V9CDaVpL8MvJzyQG2cy4w7eDnkrHsB",
  "key40": "MZdGaJ5fqYTLyfA9UYHtMkroJsENE49XPP6gtpKyuvA32MyzgNzt55itpnZcMhK32EtXSU4BDXbTo9AdP1NRUFv",
  "key41": "24funQSr8TaVYKXpKGAvwTjbSLjr2bmLCsL2MwK83BWtv1V7EPtFxegTLXbkm9SZgJr17JuRLUZ3Qw1HNCo5QsJj",
  "key42": "2JKddAzQefhSAUQdEyguvfXmDws1JdKstxmGsM228x4V5R4wLFB5cV2cDEs1EFoRaQbxLSP4hwyNGQDNVsQ7os49"
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
