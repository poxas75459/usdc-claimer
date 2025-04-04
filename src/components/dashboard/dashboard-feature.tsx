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
    "KDcJ5mDnqV7WuZdk1AZpSRAJoKrUANCVyLpBFiBMcZxzLForn3rsEVrWp6QVzgWo6Bj9QUU39R3tBMXVKZPju7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jVHNz5CLiYjkC9unGxZ3wfQMcacCfzwrkWDBc3oNWD5pk5A7AyXsFHjsZjNxdtRJZ2fzgxccnMmcANzxukhZHgL",
  "key1": "64xun3Rkc8oWASt6U2wNxKmjqHNaEiyoaN9uqXTE7BLPuoLH7scWkSTqqfpcKXutQiDGEBC6cvTrzi86e1X96zjY",
  "key2": "4ue42w4XbKK5m7qEKrdF5buEH9hx1a7h3cTXQMGBXTqsJ2wuFytzsR5t9Zf17dMq9Kma1KLdzbkHCeusp5fX2h8G",
  "key3": "QiqeUDmbxpuDfroD4mySYSV6FWR1dChnM25osmSspxZK7eTdHTPKLhqtRiPBPxEctcwaNyf54Hwr9nComjtteAC",
  "key4": "5Rwvkk86AzU4asva7eAaUqo5PFahFAzcpHCW2Fp2zczM49i9wHrdUXuebL4fFwXYx8Xu7y3XMZcFjZuxHBhj9Q2z",
  "key5": "2Jkd66UdSYg6DbvpzZV4EvoSteeshBELLqZA2zUZDYcxK4CVuHToUWG8DyWKdQ7yuv4KZiiJfvXuXPr4Mt79mpCh",
  "key6": "3kdFSbsa1B1iMqcygfHJ4n7MvfFgtex4pPk56xJT1L5BggNSQ7j3d2Br3ZemWzhrN2jnUaQyL8r2QjMVrEebeAFV",
  "key7": "5BJgiQVQYaHnWxYjENKD9ypHVg6pbUBNFweQBFnfx4rDb6f6ZKxETai3ApLoo8NKodE6mszSFob6TXHZ6ts3o8F2",
  "key8": "5U4WugwbPcdT3i5uiSuNDUyZHavogwz6QsriUN655JB1jT7uV2wJfSaxEs7aWgJpoisiTqBbYFCqSf18onXioS46",
  "key9": "3UVZUJAox1ZZ1YSzepmCRsbfaztjnc2yLtyMg1jNxxvGxPuy7wfR9Sg5QECNBPPp8za3TpP8hoRmt2iDE4aRp2s8",
  "key10": "Y8UKrp7pDeTbV2Ytc4fQFBVjtajk8fALYJgUYQ1s3nkeFCxpo1WLxrLZeNgmNVBHHhZpcEXLaFe5LEgt2sUseCc",
  "key11": "2wwuBZcxiHmXSqcBmwHbWAtnDFioh91zCWoyXksykiXmesvqbQ2RAPpyiJ7wubCH6AMVJi2FQkeCuHGh2GuFjVAp",
  "key12": "3bQfmJS4RzyKVCCXM4epaCKDtRHXz3bW9YSPWex41ja23c7ax4qWrVfiuGjDq5csYvoNANFZk5uvGXFME7gvk7RJ",
  "key13": "22JLA2Nw2EeQKfyTMzvZ4LYHhrUiGLyoEqFb3gtXP5wTEd6ED2WCC3AseXM17m38Nip3NzFQcDEGCzsYeyC2n48E",
  "key14": "51P68Tu8gtty4BwP8JxzH5Vg38P1ifNsr6czjqSjKL1CZCAK1UGLKzkWMYBGhmU1Bsih1FudKYCGs2jr5LCDWGwy",
  "key15": "3oS5K4AvtGxQPuQgVUNHJtSfWVPtXxt7i5Z5xDhVEcbLeprJytLm5gTuTLQ9QTfpTDWM9ZmAJWUYgxqZZVfiCmuj",
  "key16": "5yPG2TfjK8QMdkiX7UyNGZJXCVd8dd85ecTHJWTNFtVuXxS6xahCMd8KfLQDgjhqisXRsNH8tH2y3ZmWiXSBPwDi",
  "key17": "f1hsT1ZA7jv8V2PfpaLR99sjC8NUVSNNaHA5jKEWdxd3MnmZcv93CsoxdUpFFPnRKJuj33KnSQyfWM4bwjuFfYT",
  "key18": "4hm78v4t4jQmGkrg3KKWWYFAzpzhL2WoueEBh7gBuEgdxSsU4Y6YqbNaUTTo3h3ioeaKinkudqJrek2NgPGXFyNw",
  "key19": "4YYiWVhmna9VEWXMQDBKYwShdpX7qHpFRDhB3KZtGNrwrdUTmHs3qjsyEfVaN7YfHxCV6V9CMB5LzrSt62TZxpHu",
  "key20": "uWdCaBYga6LStiJB7PEqmebau4bpefukMJo1u253F4NvcBm6Vsk7P8YcJEJNiVFZTDoVehEF4QGDhJZK6apPzTf",
  "key21": "3YBrPJGZYUyBRiARGwci2eBYxvHscigCQJQNZogpFmeHLuJokjtqHAWA1gBUEbdRrFExaKPwPvuWb6WcGLfFBrTy",
  "key22": "2BzXvUGVmcn3pp6rzJsaRv6K2ztgARE9qcuGZGomRJME2WC9KB51LXu96ituo2M2qNAG92wgSoUTGVzvn6sQAndf",
  "key23": "496L5Fax3Q2q9GJpVUDkgkHuWdjLt728ArdLLAzeQX6Kw7w7adM253VXEmWs7KfNm3B6HMBAgW6z5Hk41EGNpAS",
  "key24": "HmE7vpovz5BSj9e2L62pcmoWH1WyDkW6mGnoquscUaoaUQYeESJothEeDzYyUpLfSsc8z7MbRhF3yoKzibMQhgo",
  "key25": "gtR7mtxqWZU44eGYsp3WFthd32YSW9tP7qsDSMogLrpGyJRdnpPBKiVEFw5rA9vnuXW3i191aYiHVh2zecwseGP",
  "key26": "aCpBeyeUfr2QaeikSHPefAxDbv8dvwcGnwac7N9dyKa73oZKnbQA1DXHryR5RwiuNarxn9fgpmikM6UbkLvoMnP",
  "key27": "2nsctpUuo7EGvLu75G2T2ac3a1pBbYgAXSohQwFSwPkuVeLK7ceon9rnCxYdPkFxz4RykH5EVvYBztmGbAohvBNG",
  "key28": "A5vVgJ8sWXdEi4HTDS9RDDR7YAkTMeE8a1F1X228pbXKW9eAymi5KDhsynKaev9VMx8j2phZERuFZdUZsjevcqn",
  "key29": "3gJTbj3kgi7ykz89tBHLmVwmvBCcEQxpEu4NrFwBNSyEaXv4QcYyNftqt9zyq93aTvdvGFfqtPqKWSdR7jcttGGY",
  "key30": "3nXS3rDKkYuzaBwdNY8u9s4enLrLC3E2d6yseGBbzr5V2kiRrTyJcRkaVtrJD2v9aS4bPvsJ8w7J5hTuxwpfMs89",
  "key31": "22FE5tEoDAtupXKsHX9KT44x5WezLDutDyBwFR44Azjkva5MxUzPepniYK52bSuJM4v5jEx49XXGqn5eZMW4sGat",
  "key32": "66MSwetQY9g3VWxCLUREk3PTxNR9sJXRfNVyuBpS3cZopX4rb4FwGrPYzPUXQFv46QHwgVvXUf7S7u2fFxoTxZSs",
  "key33": "3QTJ4pJUmdGt7sLA1pDoNa9tfAo7WLcj7PGoMMFxXF9CtrFf9cb7Z539CugG9fS4CuhGcd33iSxkm3vX1UQn9HTT",
  "key34": "3oQfzwym5JvNo9zfqaYnUvGXesjuJawfDtm4cj7NN7wDj8EkWhRTcijG19gRNBoBu2x73RCcRazVk6vpWfX2EjbS",
  "key35": "3GKga1e9kcmGCKBgd2AUZrXEkqyvZxRpaMCw6eFmmGtBfc9rHpVZH3XUrE1QBnhkjh7vjGatpZjwyuu8Qw1gGmwp",
  "key36": "2f9kWjRjVUka7vADdjC5sZsdpKgTLVAiHPssdYtZUkqDT2vCCAycsdiRhS7pygcM2ueDPZDDAzKraPb8gnzu1qSA",
  "key37": "3RYPR9Ym8ikPqYY3H8d6HKYwY1Lz3p8TKs3zjN9x1krM9Pt5BS585sgGLqUHFTqmr2NWHHg6NTFTDqKCdC78Krms",
  "key38": "5KnN2hTuocQyu4WRzcyadLJ6oQ33hZawgzFbnC2ZNrxS6HkAQ9Fk3cfZTTpC6EeCEKzB3eoS1nBaUbn43kCQj2y3",
  "key39": "2Qhy9aV995iHuRWZjS5h7KQXwms4mDDDSgAQ3hjNT6gsubGhiPayFB3goKt4FshHUBhBVLxc3B5oKwLrm3HmMYRC",
  "key40": "4FPQhB7UBEHLfCnBQ3jgWU97g4YdDr2Sbx66yaVAuaYz1FTxuNWbyEaZwLNmtUopvaovkrgtoxAV86bvAKo4oiMQ",
  "key41": "3R2hU9LaHAdqxyM3AmYonvDGNMZ7cUjAWvrJyAomx7W5W495oPjCNKyAGg11sM5VsYrCwPVfA3Hqam6e9fQda6PN",
  "key42": "KfVMYARPhRFPwuJ2bhgHHT5t8Bm6vZzVs8ycPUkW8gUtucFViwh7yRqntqr5QwhHVNtRsC3KMPYphgn4ryFdBiz",
  "key43": "5vRYEBdccw51bAohoAby53BrRgaAyTTijPYFftFYQJXB2TG1wGnmi6w4jutHQhmUt7AqbWwFh7ZnH1XdH2WLR2UW",
  "key44": "2AFMbznppehcbGrSKukXjDdY2H4vg3gLpPHuGX2uPTSDYVnajUTDWmyfGDkxxvZ1giUay4Br8GdrSUmB5xqGu6mY",
  "key45": "dax81tZdA1gCbdRzpu4FZAL5Kb4yK3XHArm8NXQYg5GWmaQK5QEfu6NUsTnfUrM2upMqpL7872dnoBkR1jMbsuD",
  "key46": "5crn3wMjPS5Zu9N16aXdsK4upJ2R25xJviV9av7gPQbPjcCPVsLnwqe356toJbuC8J1nwWsuNg9Mm6UZyjZ9gcp7"
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
