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
    "2z3HQDtvZv18dU7uVz2HJPAY1P63xQt8zmuuVSjMsSC9e8FMTGSro1ekzCs4RtrsbheXxrF44ntGcjwKG3bADwjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ycdudq4BJXR7ShAqsMN6SvQsqotP92oPPRPESGNvbbNdnQRGFqLr4pnvFQcg8S5zJTDMipWdStvWCAxkC424tBP",
  "key1": "HJCNebjCwrW1JBZyw3cpA3qv1wd5tDfxkmRhsLKgDTM3Kiqi1rYVSBka5iFFDTkbB1nv6jUPu8tbxuhpM989nyf",
  "key2": "5Ho4cAPM42WY9AxinFAAJWduaWv79FD9TxDTy6dAdkyQ4pz1NE2But11L98WihHi4QqeKictaMXchorPwpN3h2kR",
  "key3": "SBmwnagvmUp6MzeP8gnT8bkCapmLa4YLqXVgpvowxPrGbzYCeDUdeFZHdxbMrsaq4oVXp3LirkUTFM1LgSmEeQS",
  "key4": "5cZ44SsQTdbFBq6c1zJthbKSbL9MDUrKSTRxXxU3fb9Zqt71mPeDDSUQ8geed3bF3zpNMFTGMnA8ax2KdV7Lr8S4",
  "key5": "48FzbvkrwusP5LrC9Z5m8acudpMqCK6QTaiWFvYjs1p3jxf3oS1BGkabGhceATyg2eVGy6NgrauYVHeUF6oxYWV2",
  "key6": "5JWsAicSCvUGo74Dnfrme5V8HLUTZ9Q5NfrD7rbjogHkSNbYtfQVBCXEMoTM14pEAmWFxm9YrmwG9U5FSKNdGxMX",
  "key7": "2X8XdwE6SBNdeqnFT6SdMHDAn11t5FLevddK9PkJqYZchoQKiq6SLeo9SeBPKhnSanB6Bs7LFCLPzEzXdqVBxUqZ",
  "key8": "5pw6Sxmi7emyW2CTPPZW4y28zhk57AhMur8SjaZjP3i9QdEjjCWdEcGwqSBMXnPNFGQ7ferFD85F6JhEUhwGTRkv",
  "key9": "368PJEgTQ5jiRaCd2Dds9h6ddYUy7KE7RSkypfwtWTpVEkJEBgjrCx3vvvtFkpkLxjj3jaoGBcTg4vS1i32W7RdB",
  "key10": "bajvfG13v6oiQeC7Z6YuWzV1NBYPm47p1X1awZC7B5DpRq8YfeiJBJGKHt3enspKWDssgMh7qVtPu4hpo1Kh3sp",
  "key11": "64F4KS6zxA1acRfyLCRprkpn9t6uwoZmnHc2uwb83HqF2oMf4r7k8ZYzwg2s5zLooq8ni3DWJfbUWJULNc3TEygU",
  "key12": "4oYm2Unee4GhgMTXNRxpWUAKc8CvFakmc6SdtTtrxyxRCvqhNZAUEf9J7xjfLZiSo4cyP18cwWrUbfjzCNTEfJpx",
  "key13": "3cvYBzeHKuNT6qmhEL5b1c9JEdyrqZLF2yXrdwD2TL3E44ccfzX4QfMhz1rRwQ79hhULoXebZna4SqRiRohCdrex",
  "key14": "4tn2Jk6Z7gk2mpvgEHSNXz48J6HsErLVV4RJEyGyR6BGJqAGqj7XvwgLaTWnoJh8dGxgmWYv8ZfiwLXSLCSbVbkK",
  "key15": "mde69dbXnXDedU3ANe7k19MYMW5DG86JsDUvGiKzeKzMg8KNk5YwYHmoLyJT92FLwEHiw6FApxNqFUCEWJNCNzZ",
  "key16": "5kqwAS41XecJjDiofGoTX2gKKkKC2Q1ZNz1sU7iRfvGzTDTYK1ZPBbTpscEp99XeuyQuTuUpQsUcy464GMHbqX54",
  "key17": "3K9rNpbNbCoAsZsLwpq8p8A23oRb9mn7Y8ykN9PstnpvkZY3BxFpE7H5Zky2zdSxtdBZMia6mdAJ8kp5oMrmKPnQ",
  "key18": "5tgWd5TsEmVPUUpAxwhZXGHAUcJEEnsKnG4eVqWYGNWQjeT7wH5E2c1oRgi1xjCYWwPKPgKXpYVQeUWqJDwYDu4F",
  "key19": "bS2xkD9ogts67QmaHPnCSMd29TnKtQcfphxgReNxhknvBqnsanErnfL4j2hRe5pnL24TFfK7Rc3fFBAboTvHLdy",
  "key20": "5ipwEptM3zBrGdUmtsTrqaGXyiVnELJqFRPJZtFmpCLzsh2RAKFnkUqr4CbdKsRDPvHtSsJDyuLcAneUq2EqhXD4",
  "key21": "3EFYX8EMBqrCKuTbVGqD4Jku8s2Z3WKNcSneDciRQmXudWrchz79Y1PpnFv82CyQGVY44M5C78woDQuNf4RR7DmS",
  "key22": "2ZQGXFMcM1YkzsjEsGjuFxciTE64FUPKWBEATNjk6fUp6vgXAstUbMw67nB4ZhVJb6oMNNhCqASpbjPvwuaVHp2R",
  "key23": "fpSj35wifxcwtmnM2oHyGMhnfSugGEunyEBzxSncUuaVmgXMfTjvYjtjN2RHzw1M5DKjWiBux1ktoLGcoEBWo9d",
  "key24": "2K29NcnnTFrV5BffPZji7KgJ8AnmidUFPmhzLw9gTGKSpkYHMw8hsj6hfJnoVNHNtLoLqSrBQACwZXVMSqgvxfg4",
  "key25": "5AQ9F97mJWT7BEYR9yKFEhvtXRFsb7YZycL5TiqgXPkhQe68SEPXNudjxRar763nBxvKY5bAFdKZwc3koBd9iukP",
  "key26": "4M6TtFgEA2JmUJmYUrcwUcer3aCTh72aa4VRzKtRKz779UV7P49hmTawEJbvNErakrhJuvrn9yQnjdy8ivJYKp5W",
  "key27": "8EZ7ixVoCcEdg4aDdxKrhY1Gho49NuLcvyTDcDuuks46ND2KmRNiE4ECr1jBQ9UdQm33kryz8n7kwzwvyTLZmDx",
  "key28": "3nLhQrz1cLJtkgg8GxzQx26MfiboLGFVEv5i5Zvedoz7cTh4t6KtHnDeLLVhxpPCJdPRunD9nMDyWt1AD6rqYvjr",
  "key29": "2ZpgmFfenXGUG1WEtSA4VPwezhvN8yPW4KB7kWy12VmBWZMMySfBwaTN1YX7LFyMVxVKs2uS59ujfEdPzuucknyw",
  "key30": "4SbiFBCh52Bi1mEpwTaUyhhpxR76t4P3CRnB6CbLQcGbSJw2FuGhjSNkCAJxnZuSpMoL2AD2jafb79vkKwUqhqMU",
  "key31": "2ykfxu95JGDoNRkpL9WfrHV3vvMhVuEbZFqR4Fg3eD5Cx1b47AQG62SVWHXLPE9Crs3BvGyUdwQfHHGc3K4eNpyV",
  "key32": "5UaXMaqjXm63T4ZJo5Y2UkDGdp8avNNiPJoZNzJJprQYQfsjGmijjx9CbT3QHZaWab577xQdTo6w19skiNjMao4n",
  "key33": "5yyzqTrKnFdCHLjQ4oBK4t4NGD1Br8yrf4GKSDM8JiDvZnBvJW25ndX2dq6XDmSrMC8JdbRaumEUjeYDMDqsGZMw",
  "key34": "2Vh34xSZv16Bk93P3j8bY9JE5Uc4QHFUCRnRt9xtQes98YQ6iD7yjY6SekrCr1ENAtAz3npAZAkz1U8JZ84JoRKN",
  "key35": "37YBf4wLumjbcvxhLvnCAXasDZ4ki6UPXrbQ6TbhAUX8nyXizSzL59UkK8DBHyoEnNtYEJGrDX33TPJf645qQ1gi",
  "key36": "441Rd7UD2YR2yhj6ABvKB6WvRxfzGvhpWXKJgqn5YzdZeXcZEPuuFbReTpN4NrgY8BbK3SXaTczzQeASbYs9XhaT",
  "key37": "pC5eL4VXhV1KoqjiXTJwaUtVBZXb7g7Ah6vhRU5dSShp6Hs18i6naQYbbPxTyZaSKMrVyv67kQJYkP9JreKoHcv",
  "key38": "WHyY1C2pwkXXkq5knXMmbmdTANqQWjD7zRyw3GQB2HLrzZicsRxttwKvrYXTLpzPwLHtD8BZ2RwMHC5W35YdrXM",
  "key39": "3DbDTsLVbDHFRme4tXJ7WRy1MB2KspKRGELaRDwvPXGzQYM63Tt4HCxKeKiRdZfXYFs6xvhiT77GtJnSrW4J6y7n",
  "key40": "2sfLrsGRQP7F2vnAh63PyvyHGH6uxqSQ5D1iLfqG9uzEvMdVDtPkLZ5p56ZQ66T9cBfeb4tLVe2mYK9jQpdzX12o",
  "key41": "4XCNWzbvGPjYYAxw39rRiMZSQ3SJGk2XZsh2pEKmMPWD9vmrqLAo2Uwwjy8qn7zqx1tRpxhssfdbbyfEuf5r6xvV",
  "key42": "2VLMERk7LqaT6FEEWjV693fXnLXNUvpLoAj7W9LbUqUi67Rz7PyDSkp39YFdCxfdB1MvLjhvv3HTCv5dpCS7ix4F",
  "key43": "3sdhKSXdsuvGVp3DtKrixUWefRPNA1Lb7czpRp5XQ9ktjBziV8U1C9vpNgUDxGLvPFvGvVte6gFLnKVk9ANUbn8p"
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
