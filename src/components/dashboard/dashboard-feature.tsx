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
    "VG2cnQS2pmTja2ybY2JKTud6Qxdt2parRbSRttPYP71MARfvbLz8fmXTNZLbL6XW2hQMQVw7d91W2NxdNoPtcwn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nb1k1fiisb3AU26ZsJonhMbruXga1mVJaVwh9gCZM7DXo2mZsgmFA5KU5eKoHAkSYu4f4MJkWwbJdG2NgJ7WPuK",
  "key1": "29qzjLhmpTKE84X7ceziMukVTieamzRkZHfQKm8qqHzTBqvYQvGQMFD7dhzdeRNYVu9tz26GJ4ZFT1sAYtMkmg8X",
  "key2": "3WQ3NPnrMRC2tv5Zrcbc92XqkMEmmxejKgQCydLQdFgHne3EjGshcwKpQPFjFDy1V9d3cw3Z7oZ2WDAmDZDTDgsC",
  "key3": "2tZxGbkyFKwgec29RtCRs1SuxYEh2ws7R18yUL6iXVkhCM4ch6sbcDk4S75kVNiRb5KCADk8dXipw3hqaWkVBXeS",
  "key4": "4d9yTXnbohYT7jbPuGZgkjmaLNiNonqe3EWt2FkkzaX68dyhoERq2WWAbEJreiXmyyuksVVQ7qZXf25NBkfueDUt",
  "key5": "4RxTt2LVHk2jAzc6Be2ijT6HoNs3cESCEpgKMuGfptn269ZCBn4XrMBEAQxab1jXuFEVBh1YnDkWmhJ1DD2Yb2oa",
  "key6": "42xuQMXGLXxNjyumCHd3nPGPwJW6ds2wQ5iPASkBHqCkgtMzNcV51MQ5bK4ByRtQAxtceP1gxdPcVHBfgv2E1MgB",
  "key7": "4EDX8TznW8VQLiafwUHneNA48wcQTFShHkYySrDV75Bde5dbDHY97Sar7rzAJaUdyaeBr4uvc2xXFBhTNCu1NemS",
  "key8": "61bzZo62UGvx9hq5BU5s4safLzQWoWbLzWHBswCzUV8QpzvxVaUL2ex4HB9cAfHuAMNtbVgyqees6UZULTL4PZAL",
  "key9": "4oZKSwfPKocamD3PN2cCzmQE8Hci9e8dBoe5G8vHtXetrCC11Wy7nEWqysNktSPwML8PoEyFaHNKA2vgcVKFPWmc",
  "key10": "5JByFbnYnEJzsf88j2rYQgqKJiEXuGZpbnvyo2S5SkhM3k55Z9BiinYLGXk6axMZighojzRJKN1MFgSpi1MMPgxN",
  "key11": "5fTEYLRKj8wQ2mBawiQ7vrgUug8tXRky8xZBr2gNbnXiaU4KrmF2pbRZxfuyXBHqBN3Y9wJCa2Lm3VGmnLDfEaUD",
  "key12": "4UUUq4zXwkwdVwysofeYSXneGYjWnVDh1titptJmURRVsKo7g9Gh85BYvSBt9HMiM2RgeJpM5kX8kiQHz8uCQxgi",
  "key13": "5oRJTNJ7a4Tceoku5PtvqjZW8Ut7LBZy8NkbwtL1oJt5UtK8QXe9XRkg5WFKeKEdjPThzjAtQrjxae5dZDkMmSgL",
  "key14": "2vEDJxbioXyCY7moRFvUDU2sxPBq4UCzmfW91RVfXZohXrd2cezyvnoEqaWNJpKwVXTrjk6V8eERxMagmU9wbMhh",
  "key15": "2VU5PoC1xMTRXrazz2FQqH7ZMy1nu1LQD6e76pVm6rAReudHY6FhxMmJH236hJLnDWFFmWxn9xZ4x5sSJgdRb1HW",
  "key16": "M3hLnz1oU2oyiZAiGVtccTL17ST8P2ypDiXXuzKBMUY7xgfNwUGimgQ4hqXxbhyRfyoMgjBEPXMcjmBdN8grnAy",
  "key17": "4vzJqiMuqpFKSnDxSUBjSwwBL5cx14z9FFw5gpyb3YvDYanKnpC3RuFViwkMWe2R3bByKxD9icwy2Tsqj9SjjZzt",
  "key18": "wbB21wHXX2Y5XGCcDZVK6X314ZGJRwTsfstRhk3AbtNxeWpYXcTPy9fHz6dmKizrJSqCtMnsX96UaaoivffsBuY",
  "key19": "2qP4QfyN3AqYRQVMjKx84HLc44nW6s79denHZratcdiJZ3xocfahFSkwUj6XyHkCyAxw3SZMFi57uge6ugdr5k36",
  "key20": "hRMQAezwPRNCxFXoo6oQ6nUV68kVygss4v5W9X15fYtdbUg3wd6teHCZnHkHYyWDZMYkLXKDQeVsbRNgWC82Ei4",
  "key21": "X1RUr2GjHnhmN6ywt7mpX92bmHahh83CYFBpK3jDesZHPMGh6eM3GcUpLgcuE5mPMnxDr7Uk9suUCENNc4rqLaW",
  "key22": "rrwDoA9mTG1VCVNhpGY1X1GffQcqZieqtdbgaq4K8TTS36JK98HAjX4nRRpgKu3HSQAvrLDxbbaPGn9BnUvY626",
  "key23": "4zTMM1wAvKsyssbGCjqqQ8RqKhHEgu8mBYhGBWEkPNM2JvojYtw2NVKPDNrSKHA3xZArpdhGQStGHpKroFxVS816",
  "key24": "47teK6y1dtDDM1DiwCYvpkrD6BPLaLngDuMSV86Evd2voNqofWzLiVgmH4etdF5yUB8LednVPpJBVRHfAxG76MYm",
  "key25": "5uu1gejLiJmmAWrXW4iz9KZmBmev8FSxXQmAeFStDZ3KUwu7KMKrK7GM2oSJRo4SPNicBKuPqbNJJcn5aCHYEQS4",
  "key26": "45ough28hsUtZZ5zNr4P2c7LsDxn5feb8BvZxo3TF3N2fWhsTqUCrNvkhBUvN3Jbhu38QnBZKgewoTi87efgstur",
  "key27": "5YkVT5sNN7s8cV1VN3HvPyd99ZjGvVqrsWMHx667FqSSxsdpamGSssCSPcdfsT66zyUYFuN3VCA195vDwAeU9jtf",
  "key28": "4wbuurP76LW7Wv9aV24wCuGiAYDxh5RytyNmbsAgPs4a8rqc7er63GZPBy37xy2J6Roa4xARtAMJ6qy9mXmkPk9J",
  "key29": "3MTPGuQCGMhvggDM5A9pk8sQuts4XnZ2Mi1RyWCxD9Ldf6MtyMmfrmCQMM1XsaJdC5r493JHuQNCfEH9JLvbyHup",
  "key30": "N9Kbj4Tka3VZERDHuxi74KXuMNhw6iDAzDSauCxz4KhxrUcr9qMvifFNEN2HFaumSsSRH2KdvrkV3NE4hiJQUY8",
  "key31": "2EJEeqGyYxb1jaS3NK8d9Z1FKrZnyYLE8bboXemnjSknh3UQspJgq3prcM8TmSpZCrvCfSYqbXsBc19eReMCpsnS",
  "key32": "2d3Li8N9ta2h6WzEkh7hvk5AQczx6v4VPkp5WaN7dK46r35Gs2KqwD65xonKhd6nWWG4sZD1HB2aMPvhPKno1xa7",
  "key33": "5sDsTqgieV2ySkkksgncKdvrzbKt3Cywybp4UsYWb2g9xbgM165xG545k7NYrkByBEmTChPoeumy6cf51nAG2wew",
  "key34": "2Z6QxHRmARmzCtoAnZKQ9Tkh8qo9RDJ2e8NEumsUV7aehnV5gDeKqb4U864sJCsP33cSkdLuG2MD9sVHQgmvRmnR",
  "key35": "7siJRh7Y1qExRM2uVEMXGCKqjuJsTz1Jq9842PmPu8wJsPdL6nxWmTs1abQ6Y7u1MbRQ4upBttT9prBZ5xKzJDk",
  "key36": "5Wv24cGBc2Q5UxdjhTaGWtPy6NwXDcT1xnzKUayYg7kZ5Va8NruN2NqLsrj98bySvPjSA4UXnRJN7orpz2ziVMw6",
  "key37": "t6QxhP4x7b5XKNzw7kzpto8rY92KUyoydEGu8F2mYQNs3zhUpPQSc7rT225FFiKPvLLavf71uU6b4kQUvbfZ4iB",
  "key38": "EBKxeYLPWe7vHKhw12VdEF25z3vG26nbHxMNAqonk5f4AL1yxsGC7gK1UQLLciY5TtjECzGqcdfYCRdMfDQDeeN",
  "key39": "5vFc1HZxuFpMApzFAnG9gU8nQrC2iJfn3b5AeUt6sUdYVdRDwhxEXJ5irbfhMxBri1GPoSzFNct7gv564VwcPoav",
  "key40": "2AqgLXFdqXUdHN4LSumJt62FfMNMs68cuVSNvu1fEReSvcBh5HCofAvCsEKqwGaYB8xyyQ6ojWM8S2Jy5eAcHHDs",
  "key41": "58QXyHT8bTCdGcn3ssPGN31YtYw1FGZfiob96vfsKWDAxYgpVzDFkuzL9Rs1gAGdohHadYnqPgMRkXjWNUAUWXyA",
  "key42": "WTfnLGq9f2LqMB8w5gqjQ3VpDSgsWQ2bqEABdDcXuPTduT2jpW5sxyrbssXJvYwD3saGyX2RRrdEEQV8h89SoUm",
  "key43": "Xq9NgvXWwSxgUubHepBuvumkbuSZEhYdP9TDENqVcdAzZ927EG8BGJzUbekkQb3b6mGC2G5R6z3T2JSW3DJuMQU",
  "key44": "5zhURHc4YEJziAvTfVayrADb6aDDLdpetL6tq3k2jY6fkvkdke53yQ4vdPB621qbkuQufyjAxiN8q3mbLRsFbFTm",
  "key45": "5injytKQPAagHt3mcc4tjJu2QBArKhvrv2h3eDjfcHfNhgb1v5QrSig5wt75YtnMbftaDQLTBQKyqB5KQbxg8RTn",
  "key46": "2GZUszhfg6pzQGTnJuSkjJPgk7mHpdTg3Ma72AS3HTAdTYwRpyfd5Ck9xVArEEHbYf4HNQpuGp8dw9SswR8yfkoX"
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
