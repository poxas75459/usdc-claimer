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
    "5yT5EGPxjYEgLgHHbHcR826ig8NWLg5TuyJ4mA1kgowPca3DhjCxjXRzqz42TXDCpxvsqXYPtHxHhpWqPrf4ttFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Gpa9MwiZkewkSXt3jp8xovPa1YKMT6C1UCB9SFk4wKihNRX7DA76NDAYwLiSC4BLQFyno668gkShzcXcEch5zfe",
  "key1": "3W7F1QSS7Qq3takv2XmNTp1Ja6E2qYfuvEXMzjE6MHUptBbwGP264vfLVpy1kjstFLJnUZjSjjodv3Tw9xKtc4iW",
  "key2": "2Fag3kUw1NghPZGy8Wj11Eg2L7u8KT7d5pa3P47GuxQHtezwNjjNmTynC876cAQZNeaqHppXTNtpL5B8wDeuWhvr",
  "key3": "65kgbDxtrXH7UBRQsPGBN1Ar3yXKuTn5Cqv1tZ7a3tk13YEkJfXP3jmhhWJDkqX3qartNRyaJHvZV8AELYamFaCh",
  "key4": "3YjAXsig5Ymkb93mzv9JrHXppp1wb5T8DsnHFeHHnShcbL8VFB3Dz4gfB9W97TWzQ4yVbzZfUPNP924mmkkoQRAo",
  "key5": "2BiEvnsoQKp5fdwZDhfSPXgdGfxcWkyTkivMjRqDGncB9m8mbRNhPyWTDf4krKkEya3yEjFNDazHtAV5rqGtW67z",
  "key6": "4zEshCQM7MP6RmYdkxKwTzejcpLUyyk55xig674jNooNiy1StjYpAj7eRssfGSiEGwYYTHjVo4zWwqhDCfzGNfNz",
  "key7": "25GvAsBThzYKF2JZG9jbBnrhWLpfCFo7QJFdShgaPrHawQbLHVbLagketj4BcLYZik7aQkoSpMgi83MGYYqm4Pi8",
  "key8": "62uUhzzZcVTVHXSEQAA4z4SRCyDqyuxAKMaDHomMVWBkWMpHobo7x6ErJdWj3krzwy9xutH5QHRHi6nVbMNNcq9V",
  "key9": "2ddWJ5npQ9E7N154ek1LnQUAjUSJTVNHsso14GGgoNmAt5oanG3jXpKGjAqYYHWrnwMzYXmCw7ZQ6mLu7FZiA3np",
  "key10": "3fTPbsc7WUVBs6aV9c6xdHbaCQsPu9mK1rCev6SW1ReniEg7ua6iiPrsmrkfRhqVLvC8B9VSDRzLi8rXGg7b8qiT",
  "key11": "tPz5XpEimfu5Cahi3Hgt2giewXEJzSBZT6TUwreWQuvdrVQKrxWRbGbD79MYDCbC8Bra8131Jgyou8xrnrs9zZg",
  "key12": "Z6Eccwqtu4Nr4Gow5ySNZQXMaYc6cHLnAVHebmfj9RjVA4BtuUe4kyA4sYouzGhx62TR8vsWEvLFbXM8g6FvGCU",
  "key13": "28kCFr3FA7Q7oFTA2s1gaHXyTyJ6mpbLUnui95MrcecQNzBMnCRnEP25MWzAw6izQEnyyBLhNiCoJeWfcmNC6vyq",
  "key14": "HFhHjhzuUPRck8B64gQymPq8xbbUmJU7tv9HrSba111yvsf5nVZW6xbzrTfzpSvBYkhcqrZsGTtzsN9KcmMevB6",
  "key15": "4YVW7h2MRiTJMH2iEeYwB766ifpt9k6vPC5GSsDh7PeuQyCHp9sQLpP5FMKmSx1GTiaYLtQgHuc5ENTV5PjNDngL",
  "key16": "4vz6L33jkRh3EWYHTamTGWCwvDsTYP4VPA2qsYkWUQjPD9g4R9D6z6gb4YWmDQwEm5DSQGmST46Xn2AkKNtoKV4w",
  "key17": "9yiYNpH76N8iMhv4148BtX3Ksggijd5Fbhurx6SgcxHKkdZqVaxxANoA2yhLEEdrERt9bbkr224nu8nh5pdFQMK",
  "key18": "3kn3ntCZg1AfvaRqfivrscuJfYv2UuZTJ49k5jmDXM3K5Z412y8QYv2DAPVDhXYehvcqmRGGx8VT5YnAvrH4XiLU",
  "key19": "2urzFgTCGFG3UfhcF5QMkcEgbsXvJgbmFVPbe7qeo6P9N3yg3wH88oSGvqUbTW6HLUeQq2DkMLAT7im3j4kjKHKZ",
  "key20": "5KdUUhsqxwLbviP1Gibox6tzwueF7mzXm25gp79uroKa79yyQ7eVatCsoYCicHMzhm5XLknaTMB2BfSoCr3j9PyD",
  "key21": "2CXB8KG7Uc8QVwwwpGRP8DZoWbzv2WrAh1o15cFFMk3PGadLnnBgZMXxXgDn3duBDcPzuckP85GCjybYhsKWHuQx",
  "key22": "31dks3KXmmg3AyiUn9QQZXsoK1DU1mkwr7TJX4KoYyyF6tTsiPfjPWiTVEtBLB7i58USiuDbtKUy96uWVrfRh94g",
  "key23": "2KJ6bjCk6tRY8STXYdJvMkSRUUZ7zkwpyMdMmBwoU46pABPN9iDnUXkkHs4RGaqg2Z2eoW9JQMaLLz9Vorz9TXA1",
  "key24": "9KY26ySfAJGHqaGwDiuYjobhQz2ihBMspC91k2rx6rdMrbv7zSCBwxueM5emvmTk1GTBhPBSc7WHLZUh25BQLxF",
  "key25": "2tXAqwP81mqYEkzU4JBiYxm9nrE4TH38sJ2FB2BUoRJpJaKEGUsRv26jSj911TvSgdEssJyVCbuLX11tmQHFjhfo",
  "key26": "55UuEG3ur2rJJEwJ8bQSKqXpHnWZQ66n5aejsnyM72o1jH2fqF15TA8w5EYGFBN6F4aeJ35eNEpRP9CXvHjpRTq6",
  "key27": "4qeg5jQd16W4sbxMR32GB6ZDgYeJmgGahXXedZAf3KRXtWQXofL5Z5zviLWnVJ64pno1Ucz8E1STq7DcDqBFRre6",
  "key28": "5d2KbbGxkLfQ5kXKSsqSebEBZkB9ygCXo3bCnYgrNADTnA2tMqEVXmsMxfhq55y7KQKAVHeTf98AbUgaX2XcbrFo",
  "key29": "5434JTsKjSx45txgakpDkzaHUPTQhiEtAYk5XZdhC2Lmhvx1U6w6P6a7sSzuBJLMYMDWLyRchtpdSZ3mPanuRFPq",
  "key30": "3KVYZc9WZednZyFp8x4qpGYWrq6qSYTc6XtpNC4astYYxptK1dT4pAKmGwNhwjnq1XfaFF3fDtufcuVHX6wh9mAn",
  "key31": "3qSMaPeaCyZ1b1Zy7MEZhqh7H8Jgdxc2T3sMC1svh5dvX1N3RSP2JddnUe2cMo1qwyyh1qyUBt36ra3HbX7PYdkT",
  "key32": "35T1h5kYDDmGEwCKYPYai1jdYk5StEEecjNVHSEW9Uce2W3yj3DPLoPAfcvmSTh8kb9TKoHGvL9TsR1t42e1GrSC",
  "key33": "5dSZWFybmHRpps3gP6btLcuJjkBMBBkhr9RgfjAZUQtW57GJ1uz5FKDyhMJYnUEy6FX4FwCjPAg23qcYoqXwVqTt",
  "key34": "4dKZ4EHt1RaLSwKuQry8eZwZjfKr5A9auNKpog1xKEKM7V8Mb1DC4jtBuQX363r3XqR5F6Mra7nDLzWLhFyswmVd",
  "key35": "3o7ZxAFuaB1VL8Dv4jD81sFkfkhP96bJsjP6k7t6YMgAqxtgh4BAEqPwae9y68nRuybo2yetGmshiYzVuAKq6RwA",
  "key36": "659UoSyfjp1XZgTmrnuxAN4Npb9GXZE8rQJbo6y7maweBfSNNUA7h6DXhngi8Lmq6XHFJZNn8RqN5aL1KuwcDeC1"
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
