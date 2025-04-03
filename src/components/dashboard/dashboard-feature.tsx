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
    "UoQh2FrJYqfV9v4ehtKgraU7gieuVSCmDrG77x2ihAJQvGfe7HcrCSdQXmuZn55FsqgbtDN7CBx9c2v6BeoyirY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N3fPk5hxX1bfczLNFLaLGTEbnsPG9MJLbu6wQEW9gBeZD7VKHmxZizFfcqynju2H4NTGgwDxN6EHCQEudFMMsDK",
  "key1": "HwicLXJG6xz5QAcMe1YvLyVsJr2Qy2VYzmnfpnZFddNGDMUtabNJLYW5EqAXncUSaBuWqCESSgqvtwFWQCMgctF",
  "key2": "4APE1sn9iR5wnSkGwzmAVnm8k7rbc1jpAxcbewgq7BWzrfzixPC61cRSVp5uhZBkHbfH1XUDC2FrNhM8HdCibdb8",
  "key3": "3Hc5qx9iSrgjVnbjAzDt5qVpY4rjBfE76ULp5gsGA8KTigBmBo3ScRZ2VHF8JJmsmPhbLqZpxLKeALZef6rhvJNw",
  "key4": "5NJ7wJU25WucSVZydLEiwWH2AjTdjHq3uk1DzJen6C1C91e5hMz7Ckg3xAz9JPkGi7AJq1vypx2mghxLqVNzwuUA",
  "key5": "3ehPGUhx5SbrRBkNkNCELqLY5Ab2kMK6W4XBb7ecsKQ7wbo1Fj374PRyHNKeywWspmZQgVsBCaM2AvLh2KZ3SyRg",
  "key6": "sMq3bM3BGovCWRiy2xeBBnCE6MFETEZZKb5FomyGS3oMNndZshwXjVCbv2taUes5HvLtyFQnWphPTDrmPKnuRoU",
  "key7": "5JabKSQhQXfUvjGFq6xa1p7KyaaeZxhwwmoRFFu4Knh4LFVE3BGEguNrTvbvGcdA5kRmPRDSmjQkpJLSLFBkmUTz",
  "key8": "5cy8fbo6AQxxkhv8H9LDCV32w4xzi8ETRxnSSwmF3xCR8rccvTFWJJGMbXUjtMdw9J1NYU11uVzM12bU3BLjfZSP",
  "key9": "2UXtAthQeydFyyxUFXDhaPCPdBhLPFEmkSq57CyPLJR8quvMJ55izhcE5v3aQzuCJ3ahQxg5pZgJeuD15dJnkAFC",
  "key10": "awHBzDZwbQMb2HRbwz7J75GQ3aVGVz3q3ikMSLEyjxJjqxM8SJ2U9nJUJgxHnrvoE86DqvBdqtmJhbRHfzoQ7r5",
  "key11": "4MenRkiAeT5fU8CZR3uw9ZxD1QEM58z9HMxjJhrPW513Pkzvp5w7br4W3E58LiwyoxhmkSCu9n5LmCHBp9wMaZ2L",
  "key12": "4pSm37DC23YfdreZTFvq5DD2HWC2DDBXFFCTwhzoiwPsAgahZEcdHNuZ4b2BZ7g2T7D686aBLVt2C5uojQ8EBGkb",
  "key13": "2or9QmCKtsBLy5ynXzADcFN7yUbgAK7sA3JXkvXr2yyd3zbFaevq9FHVv54ynWT7oK4HQdVmrYrmTQTmxh676jJe",
  "key14": "2aa2c6EHRkdZa4nsgNeRY3YPVEpFusHVebW4jS6Rrq9TpXGq1HyodQNCkXrmP3DzEwFBAXAr2tai46DbFs9VWaz3",
  "key15": "5CofNBqh1RvNeRpda5dscJAz6YUCmd5kedWXqpR24QMszxXiNaxzGSQEELyLCfRjAaZsUeXUVQrhPtyp4bdGeeYc",
  "key16": "54JuWQK1C34U6YjCQTnPq11MeFYwQQG94XDa873s3Uz4gtXbhkCCozUjHe4DyUmVwxhf9axDaGG7fxP6PRFwfYhq",
  "key17": "5UcnL8EkuQkY22U7QFLS5zHmhPJb2sVyBKt89VZr3mHbkoQ9vSKMefzK9Dbn5RmE8cBjtrWvxkhUc5bLhLWhaLrG",
  "key18": "2GvTZvcf5rV1c2TvFfV7vs7j9Gx83Xfrhyj4gfubjtRjeZmzV8BgYC5wvMbXCnoPMJcAAD3qNfaD4GAwMeULhZZ1",
  "key19": "4R3JZsHwktAPmin9EDFL3BakepQ7xqXbBjbNGp8Ys6s6ZdZGQdmd4nDtp3arse5iYf3oPGVAqWMSscUN1QmdcTcp",
  "key20": "4e1DSdDMx98dyYiZzncyixJMnHpTS3wyDMpsSEJqEWmmZc3vuZ8xxXKoPzGjfDE7WLNVytaApLy7VYy2CyzaJesz",
  "key21": "669zvVPSSnXCqnUcqb6XFdDFJJPAcE6VsAKFKnqNzaDgowu4ohafeEmSHVVu97FC6sKVdqJydaZYtLknwzbJB7mu",
  "key22": "4qinNvY3RwRSBn39a17k2wXLkKbwLgMwNNv3WkGwSMpKb4HNN3mp9hunqz3afLrhMT6ZhW5eeLGKTx4mgcm7Ua7X",
  "key23": "5ZSu8KgeE7phnE5g4T7nNAHLAUn6NR1f9Uo2UXwfT2MAaDkUTH8a18sg9iqk5c9eii9TWKosV75BNLxYuAT3Zg5",
  "key24": "243yTDkfSpuJdYfkJotefhSzdVCEfpqGodE5zqQsq5Sp8ed1MGzSsawaLU8q6jrs3xDP6NnhkdxD4zSs5GLuCPfX",
  "key25": "23uftWoFLqgiAVajmPze9HvFBeuPD6t5u6wdWx7vXsfHJLcdMxjpVENHMutamWxPoUWss7HDsixsXavjTVo2ohfF",
  "key26": "dq1cC64JpkdGXYq7k3gXY7Ns9w4EZrxbAGSr7FcuSYoWs85kPVaJDw8btSJgPjXe9F1QgQRpDeL44kxPRkRMFK9",
  "key27": "5igLTRicB8Zn7wYQbQDZedc3PpMESixN5mCEnGqKZk6Q2ccWLZTokabVY44MrgTMpsKjnVZVnvwkSNW1Yvc5KTbs",
  "key28": "4gcUrqw2zoNsSXg3fbCqc7Y6FWceSPWgcNLNQQnjVQeccRHEbju5y5HM1PBmM4PRiQxeFfAvmtHzF9pHtJ8NEnri",
  "key29": "4zn5FUjk1nGVMvgXLbHnQRrSnsumicMjE1A1mo2KufUDwDpjE5MDoXx73P8DiW4BS6DmEydkZxeVC1cnWub1Uiwp",
  "key30": "nrzpFrA7ed6hZmKXQPmw5bV1sX3Qkir7fV5X4zc9Jfavtfdo9PH21g6MzVNQ1UNxogn4ebixe9d6f8HA87YLEB6",
  "key31": "5HerCrxfrNFw31GVCqHULLY7M37uDhfZFDiL2438ae2S8q2pZDPcWeQ7b1YPDLUd1RFuzw6s58GATH69gFbkMkSa",
  "key32": "SF2T1C54LDNJ9kdNRVL6g8yQSdoC8G4G1FPU64WLfCazzuqLErMJc7yosyzaLLDfJJ8qChUqt33XCAQzhjXnN99",
  "key33": "57L6vCUGJn3U4Yx95HbagVkLiHxxXyshSrNZaJfjkeasyoSViBMxDEfJ3nyHge4erjqJX1iE5rwB84Qme2iEHZC4",
  "key34": "3tbKeD7Q8MKdFxPW5gb31a9NxzNdbdB8p6w9pkXSLGdJKV9VM32vGLZPMdoPFncbS56BYwthA5exoeqBcrdsWaZA",
  "key35": "5HFQdKSM2VncXjCMYikJ3idWb34m1uBg4aqZ3JiYYB1L93HXwiFsqHi4Qs7EvMkmXw4roWivBU1Z4hr6KSQFVwsb",
  "key36": "5rRfQMRsVRC8SxYsStRSMvcYAMp2vakkEHGGQXy1HNsbYwua6Rz6tgHdHioiZZPEyA3Pvdaa5wrkwS3dFRgJ1ExR",
  "key37": "Dpv6qAdCkaM8tM1yC1qnTGcQLHZZAj55xCRCZy42hqWHcePnLtUGuFVy3Z18tPbGXcB86tUpMAcfSrFRxbeA64i",
  "key38": "4eLLshequSzvSZKuSrcHLDygVhkYYLvrNj3KRtbTsDGttUS6cyhb67dtiBQue6xB5EPSaVqak1b2y4H4PadUdk7H",
  "key39": "36h344RdEtdVr7fjLb5s3bZVMX7FNpN5bmtMHxM5pCS58jyy8Q3J8SWiGLVZedVNRPz4jHiochkPzCr8xX449mrv",
  "key40": "uBJX9dh7MGfaa3AcNQAoHrKtTe2Qy5MMiHGRcoqDNkLgBefGDxrV36Y13N1S57N7hMdA86WW8FWmgdBozhPMrCB",
  "key41": "44zPGEk3fmp5hUjnQ2tmoyMawJkvpuEFkPgcFRc4VMtvQ322Eq8FBhUiQ2LYvoT9ojQ77FD3NVTiYqLxiUUFJ4g3",
  "key42": "5tcJacXDCc81GaYpRVFa6rHFY3Rb3CSWUH2merLAtaASFMhsVv3Qs2FJGhpXQgKo26UQ87BRhCESzR8W5u6HjmRy",
  "key43": "5M711mqTX5pJLY4q4JJDBM9NdnyFRhjS7thUg7A1vDVftnn6b93Ho9pub2au7ZDqzqCweUSmxzh3RhrTKtiBgM6W",
  "key44": "53nKhrgCdVANJqnErXXrehRR961jHRcu7dqAETJu83B8rQ1rCKB7F5fos5BVjhuag34pGgmeBzavjEXUdgQWxhAA"
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
