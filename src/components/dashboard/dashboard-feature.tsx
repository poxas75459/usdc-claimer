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
    "zTgYW2onE1oxqXotKAeYr3vkpfJiiuoLN18qKpw3dNbffDF2KEoYk19J1edaw9266NyseNtwCZ8Jf6KUYmm2zPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DgHf12QgCnrydFdSxNScAq3o65L9b92schSU8XJgL4r6HX88c75ae6YN6KcAfZYxYw8C1wVjBng8vZ7PfjhGMdM",
  "key1": "3Quz9zzqP9CMqVxHyc7sfQDYTuQ8goLQtdhfiFdbqPtXKtxBJfGnmKVxKr9wZ6gLYyDkA3Uo6yvhQRDB6T74nueJ",
  "key2": "42QcATfk5emi8WgVmcEFbhpNpRyGgPSRv1vEmitD2z2jut79jXFtrVZqdTWDoYLvVLkkY1D7WDtLNnhMQ5bjvpDA",
  "key3": "5we9UaLqn3JePMNBtjGXfJJjNNxPP8igDP2hgF4HSjqUqdogyGBPaVimNHdF2if9M88VHsAyxZjQ96nD5HMw4bzK",
  "key4": "3j3GvnzZUCf81UkpY5tykjVTYovywZBDubhrX7nPc8ZayD2sgzCprcM88YaGaU3kJNva134wgGKCcvWFSnKpAvzf",
  "key5": "2YVSisd2V2MJXZxrv1ADVw4ZY8L5s7KgpeZRAstoY4RJCDSsur47x5spHjUMdjkafgrTtzJ3yKsMdAqUs3CYK7DV",
  "key6": "44AhrfYGC4jLyMpMfrChcoxQYhsaWRHRC6XJvywioCLuX3YPRjCXHYg1rxTXq2tsB1XBLEpKFsJCtE6o5XCMSdkP",
  "key7": "qwLwtNwhEwQWEZ54P4JVRmV8ynYgeFe7Z1GFc3zZFmwRA6wguFcQWpeunFQBJc6yTawBR2dDD7zqyMPW6nsxgsG",
  "key8": "2Q1tQ5HEGoYYURLgUxsUmFWTFkPUfefS37twmdw7EmeZidgB8PYSYvNuZm6w4CVe6RJunWeqQhenr4qP3KMSBeQx",
  "key9": "3gJMviqhZ8iHnay432BMKQFDCCUKTD6baYmZeJyYrHP24UfcALZPYS55przXYnt2j7tggedbZ7hz7GQveFCtwrrt",
  "key10": "44UuGZVg5i4yTYyx9P85bszUXH1oJWdVbtyhHDu58M5Cq9qkawq6aHJ4TsagzFW7grCay97ijXCGtwr5agDBSKBS",
  "key11": "3z6qjnjmQc1LaDa8vNUbRYQCPcCxwV5TH9SeAjfW4c6hU5R43gBedFkT9iTwx8PK9a56JgHmuA2YFqmJxjoH2KGw",
  "key12": "3sfwpSvQwG8AP38sR8bb5YqsXY22tSoCyxCttKxsu9Vc1tmEkyo1TndXmhzkD7fKjrKzfynv1fQcfTnSbDTyB5M5",
  "key13": "2Fu6ndPsu38uqJCGdbdvDAKrLUKFZJHwFSpzr2LpzHdqv9VWYBjAEqnUtrAudA3tpco9ZZL42HmVSrAHLSUXvqx2",
  "key14": "5tvpHVqh6VN97DAjy11opyz5eys5atRdpvhHENAJnU8ERWP4msa8NKZv42qMs5t5DGW2uZJhSKr5CNYYs3ADUszi",
  "key15": "h96QcGaLQLwvE4ggcqSgrR9EH4UqDkS3LvoHccenpS22KyYac6mGxCpVpydpFHoSV5PeawYcgnCzutpdtF9S9HH",
  "key16": "3dfwWb6eCZTuFLnpAFczCCTo63de7MSBKvpYTHXMtrey4cFZuo9dAZKRERF81HQmuSrP1uhjHkE2EVR8HYH4eK1t",
  "key17": "5YHvMg3oszPN2jdB4ioYg6mgBCgcw4A533CVgvU2hEzpQbA9wJQDD4iCv7JFDVmL6vLP4AxxohK819DiBTJCX6Gy",
  "key18": "3rkSKtRg115qQvwkxyA41sWXdRhAjG3oXPTGngkrDjUmbHBaLPYTrFgKnNVB6XDZU73NkmUHUK5zPMkiJX29RWBY",
  "key19": "2GygCNqxLDrVzWvZivAY3DggUNFnV8ohcRqb825NraEW4JTJWnnjLNBknmhiT2yWcYGpAbA9xvxnabqUegquvHZM",
  "key20": "64mHUgAUegDM2LXBTmeYopFmKpvQyPbJyPdgieksGrJiUfnTTkyDAMw5TKS7cxz31jWCbmmF3Hwt1NbnmtXPvps2",
  "key21": "35oUdgvnpLUpUYP2MU7TA14HkhPf7hutFswbFuHesuowCbABjjZR3DQWXDXfaF922FG6xN1zAu2ZqdXv3pyt86We",
  "key22": "33R8jnYnRJpc8nhUrw4H1uYcQ9CDReWuR54B8np5VCK3EPKsYY8qkpGyBEphA9z8hpx7cdPVmArf3Vp9c6V3uApE",
  "key23": "1HqfsjoSNrhhx54bSE23QFDQ5fTNknesWvgV7cTaDBw6NJTkUJ4p7Yj13JDL1LJoLQoPndriWrQEShyZ4QUEaVE",
  "key24": "59jkUSV7dw1iZaHvekyFRtrfW2BD7F3fncd4fYqs2btHUAxVLnavUAt6F8BXxNYrrLyBzvMBCvDqirZWmkzwRfKB",
  "key25": "2fVMmQSDc6DijsfepkcN1D1C2jqCQme3EmG3WeYBZvsbfwxvoa5zVgTBrqt4JtrNFQXhj7xw39ozp6vX8J2SaG9L",
  "key26": "41zxrtr1NMefemYSh3XbTXKBQWK5X87cCkEv4koMvbdQMuoipQygSxgaoHtYAeSQCBWunzBnHUSe1rg7Y1Caqyiy",
  "key27": "48wZC28vkvKozqN6ewRBnXR3B5Uf2vuv9pAgnUKPcWxZLCRM9Xn4m3ZkPgCq7avJ8tQGtGJ7C9gEbby88gkP9Cwi",
  "key28": "4owu6S3NYfEVuM4xHGJwaA6MqZaTGRSQDCKw5F5gbmEaRj56PtStKr4K4Lt5BrRUVXxFjmRfaUCJXvECDppMZLVN",
  "key29": "2TVPjikq954qqYXTzW41keLYTcvaJNbwv2tSajfseogitdfwjiuphbQV4iMdaAb9dhRXMcKSz5imZXrPdLnAv5N6",
  "key30": "5hvhhQXJERsoUFp2isXxBkM83YDtwh8bGXYbzYKWRSKnfik2VLbs1PzSXh4bjW6G1UP5E2QkyqaKivYvKDqYgXZe",
  "key31": "4pcyDX9PZgAQ5MCfART2UZMSZKdAtrFiAeR5q37uMyYmTQCJgZNioGUSaJaJt1cUtpL74n3QxgV9dCXuysWsJtn4",
  "key32": "4JuDqwhM8E6zHhjh5Zt39W1QZJTGw8pgERYpVnSrtEcff1HVMHBy4xYT2eAZcMNJrEmcxzRAJa8y32t45SJJ7ewh",
  "key33": "3cvkvDFTNP3k6Cf3RTjhChUMScXKoZx5kXLWCsPKu92s8EsFjG1rc857omc7NWtwpYjwnDnZwXAoB1W1boETuWwU",
  "key34": "5MaFFqQ7GgHLCw8JLBsXg9s1dr7Jgzwmed9MZ2mPQVtJKWwyumLvWq3pbmQHxrMDCc69ShPAdQWRCMAEfAvvpXKg",
  "key35": "nJSkuvhvan3RuAsP9bEy2xTgNV2tHtNKmjwyvCHqZ7DBz5aVqVCez2B3zzSYvoxELuuHcrwLZkTZLQC1CgoCZNL",
  "key36": "6rScUPdSjzp1BnEheqbatqb4WAQH3pzSvmAVCaTCD9DxVxa7zsnEgSTyzu4tACK2475WUStpB46NapVAQX7BEuv"
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
