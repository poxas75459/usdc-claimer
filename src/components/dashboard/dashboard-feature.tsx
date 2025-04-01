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
    "44umhtPx4L4NiWdxD8edk4SCUzfL6E6Un1nNdsB7nSM439QWUtzmmed4UeG6ATGgWto9nCdHcHsaAZZDxqCbrGwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42yVh6hjCAxrG4ADE7sWyg2JZhhBNvVGbXQ8teyAtCKvp17cftByu4tysybDWxMrAj1SXgimJDyEYRwk7EivpW2H",
  "key1": "2Di4qxDbfjuEp1Tv8GQHNTXa9kfd1u3qfZ9jEArLZfshhvZt8fPauQk56g7Sc5K4JaH1CrwMQc7gA8XiJV7TF5YD",
  "key2": "5CwgAkHe5hRwfVVMmXUwDBSmJuwJ6TmkW42AG5Q9TffML5pRZs6HXcT9yVFqKRapcCt7ayWcaCz8GGhVzV4WLiRz",
  "key3": "4m3AsVFg8gto1kyVYV1tXkARvbZUJ7B1E4AoKVrJBG8L5MDjzV13bqz51evcTYqyBcNRZbYsLLQVvyuqKkY1DSjz",
  "key4": "e5PAptZmX169gTVvryRPiQvkgJJqMYzZEVTU27UfYyFEEnvFqpnf3AVbefB1AvtieWhLGUA6wreKobQWjvLFNXq",
  "key5": "3b9rJSZCecBGMctR12QBaYKzfECdeLSpin6WC4UaNQTdv758qQonvxxZD6ZZAQPsS4MrgnXYvcL5iStGWk41kRdH",
  "key6": "2z67iWDojChpJcR6aRaY5tk8pho2goHU2AoStcXT7dq4NZTYfvAKrAWiJyC5mRU28aWSNYJZ5iRsD4kgzX8R1xkk",
  "key7": "U5nmUfWaq3vRRT8cpsS2U4td1pgPKPXw2UGfZt1fSXd1BfWx568Tz1ENskTZHP4kQGDDkPecTtZogZvLPYQ8YF8",
  "key8": "zH1WuaMLaWq32CxHzCbFeXP6bzW4QPxreKFhxGWXq7Hj8FEq2tBdZzcF6UYFUWgANNSj7URokuQXYuJW5CX9XSo",
  "key9": "4FZb3FdSzobnYGfMSffPyGupcaJYEb8HF4ozdGn8BftYYKw1evJLqKT6iriLhLHQvs7LXaaELsoLcTwLuWNABeFh",
  "key10": "Th33J2bp4sPXocy8SoRRZgdWmbbxgaqJZkusMs1ocBes191u52Pn1eqaeEyyU3rZbLuK2Zq6MUEmKTmqFg9CWdJ",
  "key11": "tra6gYMb4J2CAhANExxBgdjoTr4McNLztXJiFvdUSCCHmHeg5R2GoxtepcvpCb7kow6pWqeLFnJrMUS6gZukuzY",
  "key12": "3se4zc7JyAqA1PvQ3NuRTCBmvMbLsdRWmQP2V2Cm4rMaWQinJDN8dZtm6c2v26RcpKPPTFoRdiZTLsEH8Uuy9eWk",
  "key13": "3Yf76Lt7H3PFdwVLqBKLLmJ4fWAyffDqz2LPZ8p9fxq3pYpZsRv2VMDy9DTbvrKPzymBX8mA8DpqD5dNxsRxsGvr",
  "key14": "4RZbeGZykw6GKpKmheorSwqGqJydrFVQzvkT6Q933St1WmhnuNSgXB4k2ikwEubgj8BFFRUfsL7bEhjsPB3nuepA",
  "key15": "5UizontGUn3dDdaRpTsbjjxX8hMepS1QP72WkwDeXJqT6z1vDcnxSwf5vt7KBLUVXBqwhD2UaHKP8MpXNzrjCNja",
  "key16": "5w8LLPMMNvVyBEJAxmDe6dsRFvf9XnKBgm8d6QiDQBs2p2GEd6tJxQ6uxEtaDb4sexL9n3tt9e2pne4h8LcWj5Km",
  "key17": "2rtMoGi7424iSb9jkhqB28nwXWMoy51dpBBXAH4gf9GqQfWv2C5cqZrv2gUSFR9SKFRLpxYmr6Xta8LhQLWG9oEa",
  "key18": "2WBy4eCU3ruSWtHcAC8bpjfz6ixJRWcyyUz9R4paQ87kDR2jdwFYmsQ1rmM9Kv96ymQZuff3uUsSipjWdbKa1vrK",
  "key19": "Ry5TcaypN1LRMyHqSrRdARF8NBXH87Yh5JzeHK8VgiJiFJw7XorF1KL7mG4iVaCuKWXHjefHx46oVSRkZiqoupz",
  "key20": "4uGhX8DNdAVjMKkkgceeGMMKMnrNhR28mGHVo1baMC6tnvDszjL99hDxghYQ9LXfnNxMxcRQPaRqW9yrNx4kWWgE",
  "key21": "3S5n7nX3MkYjKD4YHfLoyBxo7Mimqv5DUqDTRJwAhDUGERyp1VqyiaCBcotmV5KzK8xcnWVTZXhCf84jrH6PfJ6y",
  "key22": "aD18xf5neqNiW53hwsxaVRjmH8ETY6wiTPe9ECkZ3fSUG3CYnq9bpj8apocGsZefYCcrXKUqjNxg15wyGLixDQt",
  "key23": "HwdBKrzfL2yMqeGVTNxLiabr661WLRo5fuVjywsQm4T116e3VUAP9o1XeZ8mvYbCBNBXW5RdLdsJvPuth93c4pr",
  "key24": "3NK9c3TYxH9WQixAwexajN6k4yjyAnnTZTPF7jgw2Uv4RWkLcjB94CMD4XgK3rniStVdbtwVSMMyf4Dv18gpwD38",
  "key25": "4HjBKujh7kTNLcAuq3sXnVvQ3hY1grSb6URqwA9VW5piwUFf4NXmzPexQopioYMvHcJU7yvsR9ZReZyJM7Tp1EuE",
  "key26": "58vEtPW9vmybF5krHJLCB35huG3pN5kga6RpnYyKMWkhj2xrK8QrA8oLypXkNT6ZTdbDsbCGradi43CdK79zxVJy",
  "key27": "5rA2wKzjyNDnJ8E6WgDr8ETuUR8UDQYiV32XM4UEKkg7sDu3qbgoJoNmahhZ4RYJ9RbTT7mrGe8nkt1uLhd7Z8uJ",
  "key28": "DtLgWwwmpXVmEfsqCNEw7yajT8fhcn4dqw17H37HaFLpXHUsmGZLVYzmqjRRGMwXE1JfKTPNeytYkhyqcoV4BYD",
  "key29": "5P5XkoiJ8mCvoC5QFMNivizNarqcE22gNobuqb3NfQokq6FrADYiqAnZKzE5ZfUXPQHXqfypgnjuhYcKWf6oAFDy",
  "key30": "w2F4fCCc2t3RNi8deBm8QQQADSzV6TFqpvPAYUdoqBdvmLcPX6MhSXurZrsasjNYtB5oYWtW47AwLbDt9qFksjo",
  "key31": "5XJJfChHgAQTJojaoV8MgsWQ9YYzidjMEYo5f3KWWySKmDUbbVLJWnbu4Go7fmVN8FnvTd3JCtXLRumfMmbP4Yu",
  "key32": "HeoE6yjEyL4ggTojBg8JWTbvn8Ex3GKtUkEfYSQ12KMpycJr56aBUPwmjscwVUnJiRPaUAyMvHb228SdGc4t9PE",
  "key33": "5bpStcS3Pm5WyAUEVhQagXBANCYJW1re4WwWumwZSMxdVqYXrh8kfnaLUToiBAvaqrDHTWuDJvV2XPPkxs9rxkK6",
  "key34": "2z55qntSmUNfkCgyfrVjvoPqUgNuvcPd1MuFv13pqJrcAo6aa8cLZewitjKxfuMCTWyW5Bk43sQ1XeNc7pX54Yai",
  "key35": "3SASkUjDSf21LbJRoncU4Uz3X8QEiTY3QeAkmgtz1zMtrQ6QRAEiQyDHDYzSZeCR8MG3JWJfCbn1BL9vufNSYszE",
  "key36": "3gwLvrfdfkpFNfVMhgxWYWi4yDDK2nS19HvWqLQp4E84ssjZceFKw7Cor7KSa4ccf3yMtB2xY5LGkZvvQTq4LZSn",
  "key37": "8XdK7wWktd2uLUktpimt6iCFiijD2Vch6c4mcgMXHQT1ZbCvmnyxAFKq2dFRcEbozwa3G7G3JQbjv5NYVV51q4N",
  "key38": "7PjjxwSZtnsvxtp93CNXEQh2dDh4oUVrpL69rr4Yx2uMeGP6b3rwY8SoVcfXkvcXU6ka6QPT9DNL3JuMbxA8JqE",
  "key39": "5pASosSRzfoQwVZp9PJZJXvyzUgDg2uaqPwiAbseMN7TcAkR4NxqqLYq3pUXqciEKuAdQ9FEsqmNQwRaq49RiNKn",
  "key40": "JbJKZUKTGYCLxmYeLaT5WmcjvyPwp8GdThENLjvY3MWxiXdB6KmwheV5zrhmn4jxxm97bZGPeTfusepGEtvqyQx",
  "key41": "7RmhF8U1LioigyPauf9VVZ4tWv6pd5zR6cC65A9gLuFEpTNZ8dodbKQq2mC77uMQoEVUWEXPKAowgdwPNcmWWpa",
  "key42": "62dAZjvZLFNDwiHuZesMEMR1kZVyuwRBFmxV7u2XxmYxJNgDXfZXigFz6RfPp9AQG4BQzGFyuByBtYZMjfubW5d1",
  "key43": "5Sp1iU7TQUBFz5TCyy1ryAVRtpq8RDXotxXGna4EFicqJhacjdw2DNVNpkrXPqTS4LnCFhN7tLx7M8nC9jCD4EAU",
  "key44": "2V2uAgYL3bBc2bjQbptgToj6zBSg94VNJw2dXp3kt2K8VisRvf6MpAUsqnZ8PxzjhxyYQZxTptZt4mbF1SwnrJbh",
  "key45": "4Huph1jzkkPgCsEf37EtTPZLVvMxJTY8wkX4TNwK5xWxuMbTYSYpSzEnppVfWQaB7zeaGkrQ7zjqTPjRDTdpcD3g",
  "key46": "2LNqU2idPZQ5Sgi86BDgrjR7KH3wQJqFYHAKguLMGqdHV5pJUW87WubBFKRg9Z1fT5MJCsHaCnFDNQFiYPvspo1Z",
  "key47": "4U3x6oVZeAcZJ4oMACfbYHJeyohDsJrtgJBNpcMLQB4HCJVBBPip6fotxeTgqVxzApPn2knPRCdbuUfRQNpm35Tf",
  "key48": "56fThaqBMx1yZAVdnbkWdwQ18Mm4wTcsjaaU94FhjqHMsPURAYqejTW8wSaYpwrrWEjhwuE5nsv4XnRrk7RaXxWG",
  "key49": "3nMraj2qbQqRHkn54rZKZzKCviF9LEUcUFg2TYaHA9iCfzgidTL3yePGbaVt1ib56VraDvFZytrf8CAuRWnNvYhb"
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
