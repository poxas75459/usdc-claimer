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
    "4md2ok1DXdeYzKj6PhRhF9eUhub7WwC9g9sHHzarcK3bpmmWGjGXvjGrHnJFgbjQuX5F3QFKochMbjav6ajm4dQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rQYiSNZEK2F8XdMEsdHcDZaEGRtK6RXUdZUyx6KU4r7FwLyZZuBW7oEpfgYajGREQBwCJn8KBRSekwBoccJ1AV1",
  "key1": "CZffBBTK2jk9zmqinizi8U85eVcvPotUvv3UbErTrNwFxqxzUBtCn4fLkUEbEt2XpWUJWpvGS3uWKhpxd5JwLTU",
  "key2": "vNDGK738KASqyw5jaBEK2XBrsR6vcPqBJNTYncaC7CyWJ3E8d9o4K68o7ebk9D99doyxsWzQYCjU8QtvJayjt78",
  "key3": "3eJT8FJ9B8qC5Zw5B9pcZp8YnJFJrJWviNh8izrhWgpVEL2QSNXh6qyShbeLCJjrFcFWow9WvNdVF3gRz3mrqXzo",
  "key4": "4poMzW1DgSez83Ge6pEDe1TgiyV37811cNn5jaRYUuNLhoUUt3EJsEE1GahERGxhU7RgWGa799hKo7u9QJonN2uv",
  "key5": "455n9yHEnv2y6RSHLtdvLPt3T3YK12ccC2vYYrzUWZowDBXDNTy4k4x21id5EM7mN5XzLsFHgVzvsxuAXBCeCwHe",
  "key6": "3FuexV8n5NhUkiR6JYn79En47TuBMzE8sVewzpjRq3KfgoujFhc2YhiTWBAe6o3E67zbtSBnAXGDx3CNa86DpD9t",
  "key7": "34AizUFfA9mv9FzjZhBXS34ewv23R1ooMb6KPMvHBJhkjCE8mPtntRAMSXknKC6cBs2Pe9FYUSZmuR11wHHQnEYb",
  "key8": "2gfcyERMRisXxTWjhkw9QwoDD7bw2nhK3cqpAWQenyY8vZLQUmAumRadmbyhaVYv8XPsXtKgMvsie57ZiYXPf4Se",
  "key9": "46AMj8bUxkxBMX2sSQB2Dd9Ms8SL4EfKC8RqZqUDc2rJm4cQt14VFnjTqrjXNVm7crSBs7fDMsvV3ipwxJj9JtEp",
  "key10": "3ivCgCHcUKJDEG5PRbRh93UCKtYfN7Wx7haYmw2ccAoYprRo6pbFfeCu43PhmzN1poQcNDhN9aJxy3648QzFRxF5",
  "key11": "3ReFhTy9tm7EAmiwQBccQzfTAp83YZX6XnfGuuLeok8zL3Xim1RgESrNHTcvcQLaXjR3NxZgfKmV8SaEuikmhdJY",
  "key12": "4bnZCQ4A4eTr6yUcPy7odL75JxCPk8iLH23tRa8aoLTxeJVdbi9pKjRnayzCACdpSFZ6pF8VyFycKSEJmbgehs7p",
  "key13": "oHptBVVssPip2pvEGagomJgoPdJfetLxNWfhm5se5UGqiLP42Ty5AhvCVWuPd8VwSyudBn6S1zVBNRZxNUySRjr",
  "key14": "2L2rAkRUxBWoLnUzwa4cceMkAJ5KyhhVQH8JtiFYieAdaoE3SYFkquTvR8UFAtnDRgGsFDn45NG9gsWdZinfKgWp",
  "key15": "Wnre1fSLh52iAtg1mFAghpJjoCq5RFbB5Esq7cRuBvo2fF3f1LK7uLzuQuthi8TX1cSbuYRQiDRVJLpPEcQcbwm",
  "key16": "iEQkW6SvzpZPuzvnuAwvGpR1upDXoTRu89QoKfKAjVkN77D1FxEZGfqifL6D7P4xDamKDRWEpWMMmn7u63vo73V",
  "key17": "3Bx4ubPbFYZMgtx1SXdWksjQZXm2rTs647HRkpkbAPsQ6HuBSZsYNoUfv3gFTwJv1Fy7WwXxEkxhpjt6mfPMf8Tx",
  "key18": "2EG3FwQ6LJoKd8MLy2JfbEaM47L94KVg7iU2Ae5QRfbJMpNa3boE8UJWvCGr6K6RQWG4z4arcwVNGEB1m43UfMQ1",
  "key19": "347wtg7KoayLSoYqxPfTpAK7pAwcusNJYdGtyBgHWsbK8LBjm8PkqdcZU23uHpW4VogGimz1ZvGKPn76v3JhZLqH",
  "key20": "31eQA8jS4skCcKnY72vE38LicoGgmBkSPPdmkU8hDGx6AuZZq8mGhC1neT2y3BjdtWg9JD2V74AWYEGmtKuujQEf",
  "key21": "4UcUC9wABdnRVtK3aDRCHJAiQe2h6jBqokFBZtpr4fUKrbzS8T1Bp7ywyjewrQvzcTfQLbvAXeWMkBudgwXgfC3U",
  "key22": "opk4kRG1WYNyAZewz5s23kaFBLQDcU1LZs9SM3TUAhKgfzNKVMp1RAUr94gvGeQ2brpS5TtTiNZukJ6WiTLB3hW",
  "key23": "6wjNGm2KrCM3TH98jBmV6aeVCWMxjHBgeu1nLVqCHL5wnruh75Zy1scAu2tCSc6xNYbw9FERB2ZSKiJ7ZZVXL25",
  "key24": "5frb12Y4JvbXt8fRgqVBXJxPFfTALEood73MC8yyYH4LthHQJyrRkRRgyiFyZJaeRNQGguHU1besezXAmyua3Npc",
  "key25": "3MSGNuojfmQEtr21HWjXw2aMEiS8nu7G5SR1WkQd8wCFeE9Q8DFHt33ENTVrrTwEvHe3izytF9JTGZeFypJWRD1n",
  "key26": "43ew5dMoBJ77ySP7sDc4f5JFxC5rCAwyrB8FRa8YiXFvmZyVZSFm1v5Q76i3VEDVhqvD6N156E2E8gK3kUcRwdFo",
  "key27": "2VE21MDEdsSu2XWc13mcz21ThwefXJ6zDmFXcVnXTxsen4rqtVqmEkXutJTpDG4Keb7HtVYjx6J3nGUDn6MYFLu8",
  "key28": "3iceWqEEPKPHgKgYJencHtRD4twqJAFN92r63w7aYZwhkMfD8Nbvb4fXvFDsRKRyNSqrvuXweJHziJmZV1VDBD8U",
  "key29": "4mhCmhjDrU4yWkhRZzyQ2eXpbcTJKv4fqhJ88kwr36tbF7Cu4igH1wb3e4Ru1tLQsRKoZsjm7wbfoUyknQhJaf45",
  "key30": "41pmiCqA6JBMpDDHn5hRHqrzsu2CYke8nb8vCkDi8jF5NdgkqpG6xma7A4pTLJ4GfAexdAn8rUXid6XyWZQdzA1h",
  "key31": "vCNDy6DFbiaBuD7vqweFLNAXtzQBX6EypRmZYmkScH6uLk3sgXEzHyeTGgVfFsm1UAwSjJmzfkhNjrWw2xUhecw",
  "key32": "4D9PdbbVjt1JQ8FnpTrJqib82fSp4Tk6DdJdtFNVXGYwbAwbisiHWckydZV3cPq8ikdRy5VcpYQcr6crK9THzh3i",
  "key33": "KfVF9Q4ytRfLSpun8WQjfjkrmbT2r74nPVqBwUP141Lbk29N4zE9BQan4ENDsr3ws3bkzKSLGwhAby7qKkixCxc",
  "key34": "5XjUH1WJ5hpczArLjJyavdgBVyf7o8CShpeeT4j5iximaB2utKwrULj4GVrE1WtQcZAoLBWTY3WbsM2tUDYKKuYW",
  "key35": "4MmTeX3isY51ha32BsKpZAXnYhb954fw6tohMo37AeRz8sNEjTPgzw6m8QT1U2JdZGKfoD828w2bi6i5yNUZfMiv",
  "key36": "2esqjiodqPnPcLrXLVnHJswWBkjYZ28oetwk1teEMfq8bS1gMfref5zK7SdfNEznBsY9fJDSNG8e2Vah7vNVheSK",
  "key37": "3xsNroyYfRWWPEUebzPdEXQ4z6L7FrSNudFyoUzXpT4x59UCMtrjjsykugcwKELHx8yAkG9dEMQkDm6Pz9AmVkk9",
  "key38": "HonYatddm84oEhtrnybXwVGySTrxkGrzN5jCA7aKzUAwpFEfWC2s1ZWeGw3Cg5kN5Tg5Y5o4Y423KJyLvU4RFQU",
  "key39": "4xoHmp2evCEDDCCtRjaPmeq62dkiEduiEcPbLQVS7f26Fug5XLJt3iiBaS2kWr3GiUVL7abNZS8fqVUrkxgtVDxP",
  "key40": "2XNA2Qqjh1cRyAjftdh8sVaZWZYPjbbA75JphZQQhWRMd3hXgQuCAK7s72HPqPygJ7xHmsnjTUZBhRJ8DXVVJ3Ma",
  "key41": "SCv8GT6FrEbnpJTASkEmFqpGesFXs1mpGze9pp7LfzorVigMjqVnP5e4J259HTNTVCcqNwvkBm4EE6kPs1LWUn7",
  "key42": "4js2n7zrJc2kMuTFf1p57reXHg9zFWoTcFWjFWcxjhPQpCwrYJp1QkT3Q7JetpFgeyWGYhESxwgVUrCNTXRUNqo2",
  "key43": "3kpQ38KhXrwDRJF2uKYt7sRT4QAwHtRD3TBCnPQLopp29S6FHMfVJ5N4eRfyRUdRfQze9x8c2ADiQPfovwSDadei"
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
