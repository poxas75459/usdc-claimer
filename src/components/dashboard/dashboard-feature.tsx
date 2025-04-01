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
    "4Vo74T2mJ69S6UAmRNoco6w2unWgHDyobqUh1M9FZbt54HZsQ4V3qypdTyDBQsc6s4RJu5jorh4ErTYLxBDo72xf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UJ4ienTx9teMfiL1VgGeKmkBikwEQJiFg2BtDGaFhSpmET5M2KBxs2E56FxtQCCJr5X91f4SVaycb7nRDMubGKo",
  "key1": "4HAGs7a2jSqxDQYDJT69GBpTi6x7AVCgN3gkqc124JmExt87kp1VETytmFDqFDVFSaWDQNR59tL74escXJDfjBfw",
  "key2": "sbLnipgeoxDj2QXF3o2QsqyhNCkwdVSRG2awPaWUsckbsgWBzuvci3zDecR3KCE7qjhhdqrr9UvCzyPU9LahWBr",
  "key3": "4HuM3miXKJDph4JzK74HdUNtqvGSKiGRyQZaKpQewTyupGzhuSHJDQjuAx2HgMkERSMyrTWCqXaxmkKiX5NgiaAH",
  "key4": "2vMNqWUiASTzbVio4JV3JoSEgAAs85ei9TU1ccPCzc1CQbSu8vJYzQzVniixsNdnsKKvhGqEqQd3uYtzDHfgpJru",
  "key5": "4tfHvxnP31WWNiApTxhVnvdXFZFigg8idV3n3QzJy3MAkLRn5Axo46MASPMU2V3rcGk3c27WDBr6yZFbn3TR7Y2U",
  "key6": "Z3G73UgAAmUwbDghz27cvSQo8xsikB3ibyqFuwjZN2rdJ5RwpmVeLV7P4wxMmwhMie9Tuo9MsmwamJGjYBVTC8B",
  "key7": "4X6RoBPccBtK9wzXopoPAwpTmNAtjJStKG27J4hM2EqunziH6VhosxEc19vCuDKU64oYBtSJobJd7uJMehNQiUo1",
  "key8": "v7mQbNHipqiWNFqaTSK86pSwed5np1abd4fcqh9t1Jx1Ycu3Z94NkNN94nHUFoAUXfsTx1PmfCVUxLYE3mqHio9",
  "key9": "5YgbdzgBiRJvZAWXEFCS1YKsMFafa6EbMjskWe32C3kNFTEWKyeG46V5AKBNArQ6Qc5Qx76tezWyDAhooqigidpm",
  "key10": "42wfTsinrPPa6d16V9yqU7VHich6oWjVQeM3oCbQN9nVoi4HXbcC31YmfHc6any6h1Hk6frXdnnFKKFCp34UgTex",
  "key11": "3eJEMZzQVj9RLR9Rp79KA2getJ4HfkfMnmZyaXNpJvbTzCL5kky8K4k5Xq2nBxG5DEV2n9AZ1on5u9srzyqnTo96",
  "key12": "CEs5tZt7mE6YfvfMQRKn4SNCgZCJ7u7zzXLwP1TTKAiLpwrojP6B3uCJAMkv3A4qTT19rsUkEoigX7pkyLYhKn5",
  "key13": "JkF4q4J2B3afPYvLssJ3AoT6jyGG9bEK8r8GoQ6icgdogzEFSiWea8qAzEZHkmq4pHRWeibvA6o8iBzkvoGbo8e",
  "key14": "DXmXtc3Rfv77Ywb4KNb4SHdLGp5Q6mPTS86AjbCZpEJfVSpxhTSm6SsBGFnhC3mryScURxqB5L3GE5fiXo5RCAn",
  "key15": "2usL9UkEhrPHKWSJdY6fRCdvQuf5NAoSCfXXyUaMmUsJ3Keg735AwuUFMSDRpGACEGfA6AizjVdqHY3S1S3fRzXU",
  "key16": "3mufifLFm2KbioRkf9Zbsb7ExuaT4FGyKN2fLdpYtQG5kXFXMruNRtmXf9ZUR7ZjW8NotiYKcCed3GzMCuP2eWHN",
  "key17": "49gc9AfNWeNSdgUDudtXjfZp5xndQpxZNW2RQ861t4fNToupkGL1awFgDUZj5dUuJLgib2JaYCmoiY1dd7feFiWx",
  "key18": "4FBYkvCik1SbffcGJA4Y6CqkN1QwTd5uTCYBFkDkcGPjZ8fHcEy7MKMjxWDdC5fDpAErN6CkNCTC1fRpRbs2L2NC",
  "key19": "tjHy7kBs18tjTfktdHwjfyGXbZaaT13nXkVAnSXksZiXPKsnRZx78kgLW1iTzvo3vkcbVZj2Qt9gupheDK3KoBQ",
  "key20": "3VJaJFbLgPoTEGAesFMrQ1JCV6QqbmkMLLnNcdhNFeHMMCdbzdakjWyXkQeYnrgKcqPLTuPjpcAjz6Pc2T8sC1qQ",
  "key21": "2SnmffVJgkPu6TiJTbYFTnH4afWD6yaBzRsVLF1MjwV8bgo6z8qpn56QDbd2QkH5CkUeN7XaSj5vcGc8ZfqrTTMu",
  "key22": "4xtAiShb4BfrVozYrpc5275VGaNEq1gUz8y6mdNfeTR4mxTB2mvtGnf8RqcyiJzBDMpBCtKF64SHXGKyh4NN43e1",
  "key23": "4Q2xm6C8JjxDnhuFTnt8BWZ4nySXxjh5LXFaRShTzn9isZBa8BfzUnTZqv3CcdKtrW7Y99JbeEbyjcWXwf4mCB1P",
  "key24": "5beLdXVXBN8hymzprZKUaCVnoxxaf2S1nfCfzCvRQk8sodLvYrADn99YYURh5nBqwgSkfvBu5JCq9Upi9ZjUe36k",
  "key25": "33Yoi1mFo9EnaVQGtkSM8YK5B2vd9wtAzCLjWD9vffXW7zE5nEXssBZRGU6cFCKcaogiqmmjAB2kbQ6hgfpo5ftK",
  "key26": "2VfKssx36pAFso39p74LCqVBnUb6cBsF1jsfUs1iXr7fpC9bMrdxLdcivZpbeCgBieqaHcjGZt4g95jgySu9cJFH",
  "key27": "5STGw9QBTMPJ71LuorvqvWAKNBzPxGMihXDcgQdseA5JPpsrTpunaQC5oc9uvtq5ktkAbuRqKRhpVhyZtsENAWQg",
  "key28": "2bQKZaPDy5BgM53f5MQsPgJGBXFuAW4QuiDK7KMWpjX38Ptx8iLqRuPYsv6idbhgkrhyF875Y3FwFqVgL1T1YgWN",
  "key29": "3hxG5Hd5pvmwZZciEPmCeb3ubPinTHCWLHCCiBYELxZprKEzGSbjv6c4CmCr2CJb9a6BF1VaUETsrEf9N7JngA8t",
  "key30": "35WV7xFjqcm3aGJrq6MHJTvGALQswpBN33RB8bnVRJVPNc6rBzjwVyDDRtvK6tsDBuJSDRr68HecRYXjMJC8ukLc",
  "key31": "5tEfkF69asUhXqZ4HF77EnUBPKEkurD9e4GsJGrDjmrTmTqibqFmHvTCqqLMYHEidWiR7XuQUH75WbXHbJWpfeUk",
  "key32": "2cFGHQFkX7oZRTfUg63p89bsPv89qfQk5Qa4NoWUv8Ug7wiHzUHdzsxwy1MTN8ja16uYdu9LwBU8rbPJV8qbBDTt",
  "key33": "5NSh3T11Lqz99U2XdAoubcBztYzvcSQCsnyGwUMqPBhXQkvJXuLGGAYDkwrhvLaiLwuygjLaWkNT17HPWXAcBzAy"
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
