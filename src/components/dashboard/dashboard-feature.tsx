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
    "4f2fcFPfqMtBEFwSfEY4u7ov9tYskvjMHZMYZ2rnmyr4tq9rwDLwt8yZEmteJTXg5pvwe4kWNhuvRg4W1WW95i2H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZWYkGppQoLT1WpKkCRvFmV2T4XAobYzmNXb27T8VLCkNippjcdFbLqU7cuHu6LLbEBD4LHJbBzRJLHsfpusbd9L",
  "key1": "43MvZmFhnQr1rumvN8oQvk7fWfzMh8MqckRX6Mc7KjaM1mhWm4M9eaKF4kTrGVjLf4dkV7nRG1aVtSHg9reXc5ez",
  "key2": "2CqUsrVafjKL4NiYs75HKbBSmueT8cuwSGk7K9r2VtajdUi3wGM3A3QZFbvMkdJGiLP5StuZDS6Ezt4cv7HycTQn",
  "key3": "2dhd7oa37gH9oUvmUF7v89U7yTzGdEEp6xSZn4cN23rdfEgdkNjmouKhgjS3KkAR2rfprgxjwNDdPzHFyXaKBVEg",
  "key4": "5YAYwQF6GEWH6Pgr4pmYj3P5PYmV5BRfHa945NKuKXrLvLzCBePU6RYR6tZnvjvTqtsu3EtsNhQJQLWh5wjEgE3X",
  "key5": "crFMwESMbkBsc2ksaZf7SZaDGi7XuWKFCds3g7n5jxzR34n1i6HRgxAje2wALKyo8qvoZNB7ThNNX71Xuz5aePa",
  "key6": "PTxc5LWa44MBesL4jKT5wPFuActYFPTiUQTWD7w7Uudb6d8KPDcy7jgRwD8mTE8KrD54WBVQ2p9rvY48PaQBDwu",
  "key7": "4Gvz96qF2gK4he4DSBWGg7noQJAHqQZ71iAr6Snu7eS9q8ydVk4bz9GhT2SLNEzux4gjhibfCp8Ue8zWQnuiovJW",
  "key8": "4M4GptqhUxDEMurMsWMBpsxrSWUzxMjpYTDv4EhYbQaZA9whBXJvcXF9c4k6ZdKaUcVMtLExideqbqcSmw84Lwch",
  "key9": "qongtFbqqdrEYDqqfyi5W8SAzgfqgkmvbDLYPrpncYGQzjZNzACyRScpgnbK3ng2M4ZGG2PWUSrvEvHAjfo3KTx",
  "key10": "28JcWewB6PbE98GzHo4qTNezzwN9v37oQyjD5j6Qg9oMQUVBMy3tw8fM3e71YiF9zjW2KKo2cCsKPTiAGWsGMfXT",
  "key11": "3hKeUXjiMZpj6k3Zf39ttrCvL4nesfKM4bhRyAKUEok6FS1je5bGeCnpSDX5BT6bbXpxitHY5HNqvgNsxY9LYujj",
  "key12": "5DTJeLDv7MTxkhUv3E8qgaRNF2S3rAY5h5owhb9n54TAfP9aS5BtBHBb4khrGu3PnJcF4y1Menbi3BbiHrbADkZ8",
  "key13": "3B4UFr3qCuyoUVNtNsEzCSHBQ7GyCYRiWajx1dwZ46N5kmj9kpaF5uaCABusohuwxfjgKArB8cUSRSgmZXRUEiHT",
  "key14": "3pGZrHNg1gyUwqhM3CGBa2PYLnjDZfSu6n6B5Hekmu632XqH4YHsZ3N5HnLdnPsjdz9D4zUvjR3EtjKHS4u7xBB9",
  "key15": "4beMExo284Uk4zVYGih1peZQvrFAxkC6FmX9U1TjvVwkUXgTLHWVFktZNiNpk6ERFp4QwgAeBDew6pBjYc9VtfMt",
  "key16": "2AUH2Jb6tvuwcCK66tF2gSbiuHq1UvbiMTtZ6fpdr2Rr4omz2tko6yvtAyu6crJNupnnE9XV6C5MUR7hTonpUi7T",
  "key17": "5ueRbDnTXLZazVg3Ld7x77aNdC4eb1xu4K1XyU53EQUNnmRyyujV5mmS5up3p2QrAu4AnNQkCXFNS1CgSUMVqiUf",
  "key18": "33v68uxrkkEk41CGb4C1zwHFhi5GSWjcoYeucZEpa9B2hFEPkK2C2KQPcms3Uict63NFGHb4P3DmE3JdmvTTxr4W",
  "key19": "2mLM2e2i7H1G38dRXST2bMbJpGuALbBw9WwwFvJRc8hCRNz4p6P11YLyYhZnr9PfT5bufax68N3sy39q3ohgfyW7",
  "key20": "Y2g1qPapyyjE83qsQGqe4jWGG1CBYZ5Dury57iRrzpBtaq2ihPW39W24Q5gvriqpiAudsewkYvhRAq5DQBXZWph",
  "key21": "3LbpDvD87E28YUnBLmQaN2mLnM2ep6MUsSYsZGr2TjXrCsfppuqa5LYEk6TZN86jNBoz2vSgi7EqwSGfJYPpM3PK",
  "key22": "3psDZQkaHqh79qt2Em7TmHn6uFCeps1A5S91SYZmkjG8aKxApLMdSJigm3cjxCTCVu8LJiRBSUekUtJc2hUHCaFj",
  "key23": "3o1X2MkWYH2Lfwd5tqS94AYWqQPDqnu7ZSWfnp7F7yTxCLMoUsUHiCoWUWL4nsepniBBRih9QVwSs1HMkzCPxGdK",
  "key24": "2tfiMoNe9GBRiwi91bn8JknXY5UMmjrVjz7KAyex5ppmNtWEf9FyPfjdpoUV5GUHFnn5cF9EjrUfhoSyZWnm5cfe",
  "key25": "4y5K5CgnpPUQoqZs2n5YuPxezqMJGjzfrtvAwgaSrAW5oVo4roNppKLSEFbjAyyNZGA5tuFcrEbYNQby85yUaN8a",
  "key26": "3NvkpAtLgRF4TGdixfcVeTmec5bY6wuM484BT3B2xT1YbY3eXkTaUPfoGtWgvbCexdWptdwn52VBpFWbcYjmZTAx",
  "key27": "2wBofBFH7k3DTEcGCeeN33MEEPHG2pDfbaTCtFUZS3QSasrx3TgC4FieZTY8g59WRrG3Yc1C9futxgxTBEGFNp4k",
  "key28": "2JM2JTgv5m9DWE75hPpEpgSQaLujzEzShDiKVuJSM7143p9tcsEqgnykxCXDB6BKMqqt9Y42AP76vUMUWtJP9y99",
  "key29": "4ViwMfPcgQdqiD9RTBw5ioPCv4dKmE7nwPQ9bLuWK3G973z46nkC4b4oRkVmYP4WrXc6BWeCNQGT3MuCkLxYxerS",
  "key30": "DLwYJKZHakwyjPgvhgFU9zdeguQFB78FkNVcAP2sc1QJpirwEXA7iARgjcDAE3yzYDA4572N18XxM1tzaDdNumL",
  "key31": "29m2ZtWdLZ7wY5eY9ip8PBioQkqeGgExc3pe93stnH9zYdjMrwETJ9mBomKsyYSsHRbSXA2WPkWW44Ai4LDVHkQc",
  "key32": "xqRfynkqoKWfyfaLDdFj196cttyXWZkLpN1We1x4Qoee87ZXyaJPPUiFRSwSVByTpXKafEpysNf9AKgAURikhkC",
  "key33": "zm52dVPHM3HopHpndJZpTjmLHvWnVMpCuUQ6iauqMc3BfUMpG6KwfQyLwg4DNVNHSHygZ1xc9Ai3m463KJjkeDV",
  "key34": "3oE1PSFxTN1fbqga2UNhgw8x8noywuc5Mk4Pq5wq3ypJKUzMPvzUXmFotrgkDcugwx99T2oTBsq14jTrt9mBE8fC",
  "key35": "5fqDtfDAF6XqaRRnKPvWQ4fPqfZ8NjAxBLrnFs1jvbE8yeN6BgeKk9SBByCo2vZrsXVsbrdf5jbQxk11bPX5hvHn",
  "key36": "r5xPJ95P7Qbevw1EyaayBKkETnsyN8ASsar1HnpEHkmwna4Vfmaw577Ric63cU8rrEk8iRB313EUVGrbxaJ9yny",
  "key37": "4fiCuPFv8dVNAsPiqABE9fyzAYyFoejSiu5gjSB3KfnTi2JU674SdFcDx1vZyrVGRwFunT5tkFHC3SBd2NZ2hAzn",
  "key38": "41pHBFeyqeSGoxbz5fsh4RkeSdx2b6tEc7Qm9GGMGRucbMadva6MwN5YqHy1qVWPVA8DkNdoJjUEEkueSrtBtNH7",
  "key39": "VjVJpzpkJDWTF17GEmEvPVrsJJZH324ZAUVvpPWHXsUbNsQwaM7smdQ4grhatjtCutTa7XnyNnqQhA2wnd57J6K",
  "key40": "4PWebBoXPyQyKsEpw3Bm85ACrYyuBfVHX96ADPw2ghHeakiaTbBujwkrQH3eXp23sSQ4XNcXo2nvy99v4unJmkL1",
  "key41": "2SDSq31iHVj7bceM2nMn6tRUXw3kaKEJ4GvU3jXLrDP3Q771J5cUbH5fW5hng8qYabkauEy9wVzhaW2eHmkpNous",
  "key42": "4y7bZYJAuZD2o1Q8kitphAfw6Ewi5uCgFjCGv5FewhBrTKWRi88xWYPUZqj8hmY3uUTnbeUNpKFgxwYLz86WWtCE",
  "key43": "5Ju4bX8FPXWpbH89t7jyh2YSEAAzFFWEGynL2U8Jg4sR1Zs1zchynDEU7NS4Mjh3V3KvCS7F32f9M3FjdtoQ8xCN",
  "key44": "3fn1dHGssXT4Qk3xpSER2MTUqEyCegwTtqpjW9dfhT1KHM6fQ3s5ycZWLvJGq2QSvBgbLFGw1Ng7iN44qaVuuzCA",
  "key45": "49sKy4ydmF1zft8geTKhppXPdgBangLdoxbd9aZDwEBymvc3JLn3KV16gVtk6JpSsSgnHqiZhZDRqqfi9RCWiQyc"
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
