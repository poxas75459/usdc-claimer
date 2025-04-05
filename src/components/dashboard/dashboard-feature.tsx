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
    "d8awTxKqduJgEMpXfV6HH1QrjUKCygsskjpwTkjEt89S4gXESeHST1gsDyyWA14rZxu9fuDoadEBjyZh5DFx6Z1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yKejS8vdwTTgMzRmb89gYMLThjDxyQs9QZbS5SJtLDR9SWnV21BDAMZtkA7SktUuGGfWDJS8ta7AEBfvuCEzpD4",
  "key1": "1hTdcU75ThxgaY2ijRCALZQLaVxemQK14ada5sEbtHycjdWYAEYBkr5ur1e19XXqNdh1TjcBbbeEBGftc84sbN6",
  "key2": "5V9mwiDfabvtMqTXvMjVRCT37ooWCJXSAv87rLGqpATpjdwG3Xw1VoLGrbC1KL3c4YFwDmCdAGdoJC9GP3f41tHN",
  "key3": "2jYaqHtGNkuB7muyXyZa4Tipgg9wqGSwoUqAoPG624V8xDPLZmm6i73bCbs8a6zVfgdJK23JckrDCS1vGwxqeTVs",
  "key4": "49ux2kZHpxXVnkNfTob3RLRCPYLfuGzVKvkhryTEdXDnKFsiQRBYsSKh9w1TnrRJjpqfgyKwGTXVYa7JAxtR2WFW",
  "key5": "xVEowSNRBsuQeCnA71bFe99ZX5cmhfffbKaFpDkFhen3XtKUEhZ3vkqH7jGnQdWzbzCtWDmmDANP5Bpv6uTZ5NG",
  "key6": "3589DTek6TbULiyMKafue8k4AhkmPvo3qijUWebhNsU1J53vPf4FUgzrtT7kaEtQTZniSgrkNKeFvsLufY6Ua9sK",
  "key7": "27Lo2kaAQuNaJJurksiamLCgKkY69si8reBCqYKdL27TujdpJRaUDzx16zceJnu3XDjghZ2EhvmXYNFWjM3dwB48",
  "key8": "5YFq9N539pXBiCnWiLvzAENy97bbCpaHrmGSQTHWKsucKt7M83T42mMoKrzQnWZHDwss4odj5CqGceHNvVJX2WG8",
  "key9": "A6rKLGBANWyc1fidREEXFL5HYqdx1rLDv4X9JjuYF8Trn1DcKoQVdY8ozQjyQa3QUEPDG6oaqaz6jQ7jTD5fMSg",
  "key10": "2GN1x77sjRDG7JCD3YBjpRBCf9M2qXaVv5rYCKjzb7JCT42j2WPFhmcTJMySQN62PCd4iFV41dJuDPE2TejaCbr1",
  "key11": "qQuy3oe5rNfQE9n4dXdJo8xwVTFvN6v5apANNpE2Njcewg73HDy5N6qteYtwYeL7EH3FbkPjRgeekovfZt88nef",
  "key12": "2rPU4gxkxZYrvqPE5Jpjn9rdnkh2Meu1Xho5Y9JiHoAj5V8J6vsJpgM9ewHdNvoC5j61Duia6Z5tVrgzXR6HAogb",
  "key13": "4XBhVmvqLVi9duP6JCD9Bh75WghKTWY4kuALeESoXspSywnGVVxiYbXNotDr9N9iSCzN3jqPFHM78a8a4P4QKfgu",
  "key14": "Lx3fyQyscovDT6M5SGcRmhjvAEK5LgQSaDit7BDDihMABUAMuvfeif62AHbyPGu3nUXt5iDHhRA2SvyhRVYncnw",
  "key15": "47TzvknUM55BUTtmNzpZ2y7yqaN63zJ5oirnRd3jBxJa9AHNGmsjVDuScEwatTMxdNEBmmhEXfE5Z7ite8nByCjF",
  "key16": "4s5aw51xBBhpSP2JGB17csiSubm2JDPHxzK15jVKvVVwKtmd6AuK5n93UYUCUdSXqdvb4XetJxNPWqzcRvscxjDu",
  "key17": "3i212MPWNGwcuWZ3F7FbSHF7ALGoKe81zaCxjuGKZYsDwm4mwN6GWhm1asSuiHE55bhwmLz8fchNMoopz5zfNRjE",
  "key18": "2zxK3GQfXZkzQszgiNxNxoey2nUDLRRA3uaouXMpd9cD3qcxyYTcbjPtPixUUwe7cfJpw854YpwvwY61xG51vjHn",
  "key19": "3m8JdT5ERN8sPJQuQg7r8fmBrrFMJspDYtSTomiWWWpMsNxPa3Rrdcv84xpYzJG5H8KcNJxBvpu5dCPuidoCkBbE",
  "key20": "3fE4mrAHaJdMXExYqiDjtDSVjbS7ocM87f3yxRi8iM6NFJndrhuopP1KAuHASvRG6HBgyxRAXtYH7bRRN8J9DJuG",
  "key21": "5Co53iQ8Whovw1n5mH2T7KKoHosQ18SeyNYQhxzWD7Zj6qqzzYT99QBqLg2yafSqGxRp8omVEsAWVuEJVtjkMPJX",
  "key22": "5dnzuhxYevP4UEuBrods2tBTiKEaUYVnRTB5j8A1Bq6tbrzD6TkKsa4ucLSnhohDF3woFUj8FMtyR8Neo2jVXLPn",
  "key23": "51m41tM3vUApShrn98dJ56qHiWZXqSXSrXeuVUFzFUNpW1YZDxuEDT5NhQwyTJAaQXWugR1vRhYSm7nV8ZFC6TXX",
  "key24": "s4ngYsRsg6Rhx8Zxi2ERwJSd4JDL7efKKVs3eWo89x7myyK3cwDn5wqUMRgbmzaWzayTcWRbAntDEqrCJAzLQQX",
  "key25": "4ZRVoyGuYkXx2uaLwYc8U7aAwm7PpPw4gzbQcSc8F7qLYDquMddmqh1FRybe54VfenPvQnge1vfV3L8VcEXeH7U5",
  "key26": "4orp1WT1eEVuJTDnEoQ4qK9oihhr9S2Az1hNXY3uFGcVwdCteg73jVFAacS8CkyEeuCrrd2XDvV1ybXZdqzwmmiy",
  "key27": "4GRmHFMBbfXZrYofZS4NyRNJiXSfcAY5egDH4CQoXPAtc4Fwx6buSwCuvdqyJhFn6mtZSbY4yt9SPcfUDFvkUAye",
  "key28": "417CnVHsmuG1Uiky2hE1s39LLdvmf2b6tdVZJksQedNNZGvL2gJQ1dJtza5sQijrSYqU9rgB3j6d8vxaV3zYNW57",
  "key29": "yMeJTV7hsAJpoewPuZUSyjX4tAq9fuheMHBc2ZYvYpdkgtKTkH7M2ss8spQW8Q5MhnkXzNw93LHCZkHB4muvKQd",
  "key30": "UXRDnQ8aQUGiCNvRm6NuCHJ73VBrEwxTHeZYfkTEnZAxKSLAY7AVuyCQt5UyR5VwiWbQQjQ4n7bYas7Suii37ix",
  "key31": "4xWk5LyviwL3DzgD526THHHbMjBv1JVu5jJjXkrr8GDECnneeHYCC4gpDt6S5f4aNtjPg7ktY4VXtKfitBC6urrj",
  "key32": "36Phs9mAYy7zfRbeBkUiYTP4Dx8CDdoohZmVcXmvBHaufbm2n3nBnQvuv4EpgBubVSAuP8BNxv2YmmtKfHXgATuQ",
  "key33": "4D6jnmTGKi7pF9sRiaDPH1TctBfAVXaDPeQPGZndPLwWxHVVSw2CHcpfekTS61HcHUWD32K4rCjiQB3cGNaGujCv",
  "key34": "4SqgoXhTrpwVLKEvKFBHFNLDA8oYBdpVfrNj2HBn5osX5XfJ5SHyE6jvozMdvGuWAGz776PkFa7ZC1zy5cXndNaR",
  "key35": "5hbCteZQaxGmBiQMJZfp5hceGxZYtmWpe9HRopYKcu9RmyydqCTgUC2BHX3jcWXTyUgVn54QXUHwTnsfVeaZKZrW",
  "key36": "2etEKgBZtDy57ByCm8wrENKWv7kxSQ1SxqWjt7XgtuFsSKrzc6AYjRP7sRHiyXRC4UWUKWy7f2Twgj2fKMgLzayE",
  "key37": "3ypLVYpwhmJgm1PG4gqFLhUdpoBhsaJzq49zhMcG1GrkxMaTEWyrLm9qc6HKhhamCTSw8fimHXWPWqt29tGqG7vH",
  "key38": "3AJifdvyuuz1qVoEBCacLGiBjTEQsSv5xchesUXZBhASXF7JzanTT2KMpNKwrorqGM1h8vJ4b5CxgYjtnWYqqxgi",
  "key39": "2ZJCQsFNEG51Cf5MU9vn3WmygHpm6R1SXU42hRm5GjxumEm4pLa92Ky4C5bjvqNkxs5gVX9Scmf5tFGnxioFtZeM",
  "key40": "f9uTHqBh7D5VnBgVZ6HFQscGHdzZHxBd6Mcpw4pBC7H1nkUvbomEsQVY7DvTcweMELv5tryVMPpcShZco5d4okm",
  "key41": "418ZT961R2oFLqWSM5eYqDUzau6QUt9qgWuwgcJnRxvfiFs3az3v3WsoTw5oc8a7ZS3aP9ke7YasWHnNLiTrW25j"
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
