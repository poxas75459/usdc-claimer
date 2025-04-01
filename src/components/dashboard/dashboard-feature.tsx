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
    "3rurLVxeGdojvxPY8Fi1e6z7PnSKtaJWFFppk6gfTJqPRjoc1LDyu6Jooij1K1mXsVgp8aT8Zurk9q4tJyN7976N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f7CMtr9hQkTPDDm2rbprmt8gPGAe5Af3f7hfPSqQYKgP6ZgVBeaZfWefjiwyiu8Xx4TmLLAiWSpptNnDHMXWLLb",
  "key1": "3F2C4b4exUC2mi812CyMstVrYr28UrK9TjZx9YS4WWGzyEodu1tEvHnQFTqSrs9a7XdXr3BBsL6xLsaEfhWobpfa",
  "key2": "39eiuktvGHvpCgZfv3aE26C3RPKbMTCZLkJjBkpFWNPCpzj9L1TGFFLjtwk8fZtPXcB6wJ3iSfw2fkW7TP489xhB",
  "key3": "6vvEEVuz4zik7sBYUBCvLpoVnn4wmPwWXU9uHdRbr96G3Pks62pdy8KNsVqrMAdifKv5CqHdkZziUPM2X3tdRuS",
  "key4": "22msHehBTFFNz2Xzq9PTH59xQEg664LqW1UdSskzJAugxnonvo6JUT4YR17mK2F7YCWcGcBgW8vf6WufW8rxPEg6",
  "key5": "4265SiSvp96Kj96MvdcqaiKWAooto4NMxf8RyNprZjZ2LE6Sjj4HQj1Wi2uxtotPEKBfgsQC41Ywz7CY2zjhER9z",
  "key6": "5ht1VUWSsCgLGw7BQMB9A7yenqkv4TE9bMxW8nC8Ls1bodadFcbrcWihxAPe7gRom2YRwDHeJNpzA4p1JpNKUyxd",
  "key7": "rtVJFtPCTZHtnriG3wjAzL3zfWWt3UZaDcXvRDTdQDpCo6Tbbm6SR4kEVAhyXMNsABfXWEw7kbCgE3qmU89A4Xe",
  "key8": "2iX2qPqDTy1hn2jW3Dg4ypNEjhz9HENw8CeV6SJD6pjboHZkGcqUW1Jr9JbMPA15HCRbP7FnWmXVdM8Bfmhv2kQ2",
  "key9": "3UHgf1Rttta7HtjaNwfZpUUEwgMLzRcoQFmd3CHHmFxiSMs4Lc8u18bhvAtxiPor7LutjpV2WxCz5Yjuy2cDhoJq",
  "key10": "wimuYvw2RU9Sgt8TKmHKZz5oxjqvK9nw58joYpdGTT5Tuw4e3W5Q9Fwhp5zepy73dzZCY1r4Y5Zakj6cq5rNvaX",
  "key11": "2FTbijbutvzsgAisJ33u5bEqRcSMNpgNi1xwUKSjxUxSC7gNKWjwun6uCQFYxNcfZnxn2ADvXAU8ATGPbCnG2mo7",
  "key12": "4zDPNJjUx9UMqmugVggxvXBjD36426q4pcAUzxZqpPnTMyBcdU2FozdnVP77j8aVttcktVbZSeXYQygPGeiNtpoT",
  "key13": "ai1dr5tTr23GmMQiMmxaXiVb3GZrxyopAhefmfy2rhVs5yorUXjbmRp3hL5bk1EQThLykZFzVAcUArXhMsMD3Fc",
  "key14": "2hKUoHxSm5NxBjr8QtGdcBHt3xJzWuknd9qVa5Gs9EEybhqqD6Exrf85vDFkUcLDdisEGwXQnq8v3siKhL43CEo9",
  "key15": "PgQADwQUCVE5NKc4GBEWvSQXtMN2nf5BD6mBgxUniHZxWeNve7R9zv9orDjDFHdqceXCPBJ4PdWhN4d6SdSuhLV",
  "key16": "5w27JyX58ZaY9mqQ1H722d2BiJKnEgZG76GfHpvMxohsTPQywWjpq41JFqULDDzZnTRPb9wnPkfZ5mMVyVn83DQf",
  "key17": "5jxyx5XsU8toMY8qyDQ4y7GyoGmAUXk5CSP23P9esUFS7GGTpgErTGaNSnFZnMsr4MCi2FBqya3fKzLwszyM5Gj3",
  "key18": "2iHjT3PeEqyBYF7KHWiXeV8PofTdehfp9yG97meEzAMjvPidwa4ozmkbfRLtLhC3hgMy4RpwjhuXMGcvGZAsiZ7a",
  "key19": "5hNaMfjLR4fEC6nNopd3VaM4D9oecLk4ym1XotNZVA3gZi2KgV5y4ubkU8PxLjva9q3o2evPAioHJbwW6ZehZYX2",
  "key20": "3QAvZGw1SPkC7JwEdMWKG7ioCNKY7kLggSBWYfvYb9khMGGMAgeLbYrrfPS7wV88f7s22VD3n7jtBTm5MHrbhhiw",
  "key21": "2ZJTk3mcZFuYfXknVns6brijdbhiborPsabXg569dZt6RNoGgvQ7nVhLXS1J76BPAUEm1299dnq2wsVL4kQN9SEw",
  "key22": "4wrcx8CRQcEz9UUuNbomm9JhiN2hhZvZLqSFXb64QNru8hM8JF97LghW6wSWYoMsc43bFvFMbcHbifsKAhAFCBD3",
  "key23": "2L3ifyd8yRBC17PbuWzBKeHiSLP5VZUW9AdaTk4tNvZPPJnjo2wfH6DaH5a6xr3iekj3yRTyqxshsxbiemywDNZ",
  "key24": "2kzgBUYaMT7bDQ6izDrsvfeiGxudXZQfXVMbaJtoF2bXrtDgToNmJ6S7teEcb9LLz4Nec1787DWZC4mxoL7UqhBo",
  "key25": "65knKyWbWJ4zXwh395ADDXeLRkShFvr1Xt4Y6zQ4YrJiqoao2iYBbe61TYxtGPWmsgCyQrR95qyPfSczmQUvgr6h",
  "key26": "2tNfWDW2sQhyo2iaZxAJQg94BufMoMeNFu7MRXiB3fEF266qoxvfE1MxSG1wnYr3c1FXbZf5Dsu7bdQ21dFJRXnw",
  "key27": "22WxmBxCBbxCg9ShhUZkhmn2NSkcrDFiv2Wi4KQUy4vrrmpn5U3KBxJyPECoyFi3fQb39xH4qYU7JEYAu1HfQutU",
  "key28": "2WH6s1ekQTj4KW4kP8XqEEaYumAMFHnKaiGxsDXfRzbZCzsKXYdXW7ruJQb54KoAwaqK6tp9d6U4VKVwhLUzaUeb",
  "key29": "cb4v75P9hVaY3sQAgYrvhqxPNBFwJwHYEyJ8xeVM3HaJxrEWN8tio95eHV6HZ2fJWRV1NK5oMmKboP5vn8m4ywR",
  "key30": "269ZhCZcKSQLSho5aBGgdCah7xvrubx4573sCu4g8kt1ryhdLkbvGKAs7yyqAgnmgkfxvBoR6bss46vzMUkDfCGe",
  "key31": "2C15jgkwdnGyzo4HofrzdBe3jRioqs1cvLSAzeT2dwc6ho95FNJAUD3Z83hdbeRSLBQ19x6wiKdx35o71CSatp74",
  "key32": "2JAoSwwWG612DUkM8qLrn9saZgVzPxe8P3wf9BT64x1egSiUZufEkFHLMuR7SbJZFRWQXCvpjkkT2pm67iV7Emf7",
  "key33": "H5zAJ2n6eSQ9wGX3Wg3EQdJtas7caF8Eq74JriRBUxBpX3QQtCZZoCZyEh44M5GMpzNiR2E1UR4jHiMcJdt9kk9",
  "key34": "3G7it9J7jWYLSy9BAtba4Bjc23o6Ronsjwb8Z6vHwGxVAV2XTDbbeeBBKNbZSc8fH78VXbLoQ1FUptfGscVLEW93",
  "key35": "5U2G6bqQCiiB2ePd1m6B618bMyWws6rwLVN13pPo7R1Vq4MJGTPtt6xwPqGxEqNnt9p9aBMMdAYJZh6FJvWL2hT9",
  "key36": "KHYzQw22s15UCuhyXU63U8ynVUpShE46qoWK8DPUsY9ieXgGc22EN4HsRua1o31Lb2P2We3QyZwDqhNECfPdiG9",
  "key37": "38CAjVMzYZTS5i5k8echta7FDZBEbhQAdotMefP2EEDdjZ98jJpS6PJ2afRDGspCc7tQKz6MESmfU2Yf4WbctM1e",
  "key38": "3geHt1ADpJvJ6ddgN3swK83R3z9PAGr2A6M2cGpEaUxDKpC6BcSkM41h26LWdRqRvfcu1Exdt6E1LLvMfar7W4rj",
  "key39": "21AVF3uKxyVS7qxgbmRHDUL3NguzNC6w8zqxiV4dskwP46dmsYgXBVpqFpQ6BvdUawJmwgiBN22Y6Q74fPETrV98"
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
