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
    "E5PBos7uLuTqLoQ5PLKbhBVv1vXkVhTQtWoQ2oQSw5D4q6FhNAhr2ywRjxqxt2ucv2EETMdRmpzALCiqWuX47FF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Nu539scVFmj5R6PR99bmdDohFq6zq5rTJndJGvwPxBhXJSPm78j5ruau3re38jnajQrQKvmfUeDdvp1eHfYC7R",
  "key1": "3aLWcNSJP8tPDBytrNqYvXoJkBU1Bvcsc3aFK3fR47gLFLECCR7fC9cUMs7tXLR5WyfjoEcDUQVK2s63zZzbdhRZ",
  "key2": "5H9YMztnCWPHHTMFWwbrmhYBQvNKNGxXWUvseC9XC5PWdC84g1C1YSvMY6ZiZymaaj48EPMd88Fnf72Shb5jnT8w",
  "key3": "4m9SydesVvZgThsYiCZtrYaFBCrfe4g9X66VFdGNGT2Rb2DWCyFrMQphDf78GP5ZjDGEmCuairu2GgHpDm5iR7Ez",
  "key4": "32HmrxCqRvYY9JCW2KN5ABLzx5p2THHsmni2yYsBtK7WnkYqDrNxBxM4gUZaj9yoCGaMvTwJG8wX5LRfSUSjkLvB",
  "key5": "zN6KNjgSsLjDNmRFgBFsB4WJX4uKGcWYBom9XrYjQgdGA4fSReejAjEMEt21pZyc2nBRqwaj3DBCBZpDiqXY5TE",
  "key6": "JHxtyLodMvxwCXXuYEsqDGixprn6tgBSKG3bSHTkgn96tjwoXeuZdjH647L725Stb6GaSy6vZeMp3bvq95AamoV",
  "key7": "3H8bWPmArXgRsmJLrSyCJxNfXHpubUvSWSdD1Bs44SpEjPGz9QJqWJHwV6KWZw9j9ogUCHaHwpFSwvutdFg5YgtF",
  "key8": "5k4KtpFpWUMaMzz8dHEYYjKNCqzJFRwrjuxNgwrQGibh9N79XTFHDr4S8RuwXiiKKnjcsSEAeF7JauoPg4d2zwjJ",
  "key9": "3X2QbWreuLruSfR7fVhxwKa3pT1hK7ArxAnx1bMGPgcMzZKR9oMsa88j6aoLbonMVCUegmiwbbs89mLgtrodLpCQ",
  "key10": "5mw1LmSBwdSxGupGTPSsvs9xXMeoWrS8h3g1fSLTGuRijabLhzRdZQpmgWKbpkQKLsWiJqDRuryRzoQtaeJshPT2",
  "key11": "5hmpB5kDW6cAvpezHCinM3CBUdXaFfeipJYxZLsVSvbfvnUiS3MrFvsePBSm4s9fDoGkoEF5mJQu2gi3az7CSMi6",
  "key12": "iTDCR3MRrVZ8Fg1vXwbkkh26cYqzSZ8KkjfXxpiNh5bqnsiWJJLq6MwaxFPnsn8rrpG6w4MqxnLzgpbe1Db1MY9",
  "key13": "2CkU5ZvofPhwXD2mHdj1VVynUmSotRgPis1ZyMn5gpuP9bTrsVki1vjHRfYHPcoFo8vmi2bHsrbuQyFoePwWDubQ",
  "key14": "3Tyj9fb4d8JXYapX4pWjaX4EqsQAdtdVVhi2tRHsL4JyNjVv98coUY5NXeepqbVRQev9MmK1XHKS5wXgkD6zYhf9",
  "key15": "cXBZeeBNPWqN87Z2EbeWdCiANAuVpXd7sAFENMJ9QnNnvQu7XMAd4qBagsqXKDmcTuebM4SxUSbC19wTGAec1QA",
  "key16": "7cUKQH8zueGMrpBEydrrQWoroXWKJ16RXj12qunEabFxeb3GkraJE6DKF6yQzwicS5nKpj48vyh1aY6VNTx4Rj6",
  "key17": "5zmWg9wDQw3yoAjAupxHCMJHiVBShH2TZnGshkR6yLv7iKYcC4vRyo1xmiqgST6ZV9ZFeuHXCt1mrhzxfj89EiNv",
  "key18": "4r7vXsrBoVrSkjtP1gF9Eqs6jAg91N9zWb23v7HvenbePWjZDmPNXy9tFSty8C2tA4SHFfPJCgiA1qZLRCtiJXxD",
  "key19": "3iztcedi2J9AVAGzdk8f2QVMRZ8X9FFyMvVshjvqKViDknn6EUDDSxmYrJz79JxvN5y1YEMLN5qBDSSzsZr9SwH8",
  "key20": "36QanXfpew8V9zVGZddvFwUvjGgZzRNQHdLWTCkx154zbdHDapauY1ZATGn8kuqHjbpBWxjnwCVquAT8jnSRhc6s",
  "key21": "24RsmVu6dGgAooxs3CNcYVGofjbHegZ5YwKfa3eGQSwBXHUo2Rt2xZ8Besd98ZKosdbq6D7azAwmoHcWeMBksPo6",
  "key22": "XNfyimofQGTrwoHyWQyP1HqEi8nZyEpoGSTt4MAg8n5LwbweE7Yw8UCGyXdvbHz7pYvhRJEJLdDuGNMCcGb9TZ1",
  "key23": "2wz5qCaK82SV6JaCHhyEoKKQ8qKJ3rPv3GyHwhdNtygApxmrt7ui633XEbBS6BCV7qDKS35LPtReQsxqXsaS2Z1S",
  "key24": "5QoJKjn2tMc5cNhHjXrC7yJ8Ye2iFbjpo5GEuqs5iSuAdNYkYusmAmPbPsixok42c9u7U8RSCmYMzmYz3VpmUwm3",
  "key25": "63VsPCrkV4xLNNpEHD9XiM2EwXF7i7A3Bm5agHQzzbugbmcDJknigDXbYyWMLeRcMnkCDgKY2Mks3AWpw8T6LbxC",
  "key26": "2BDs8YNdEZJ92Dbu2punfyyQy36LnCfFaM7ZbYjkRYPBMnMgJN7dyBZ6TY44vmmNQiCWA4LSsSoyxcNkQMw4Dt2T",
  "key27": "3mrEtBL1n5J2GPjrPkhY7hwVghnTASPHWaxwSQRD2J5qodhEDLtmNKFhcJqJp8S71kC3eVQrE2Z1a99ynj85dPBD",
  "key28": "31R4rxrSB5rYJwJViry5ztm2HzWphGUSqnHsHDDU3rQJwyBUQyiP3MHHhHRSb9v9XB573U3wKVsiy9qScXWQeD1Z",
  "key29": "2uoRiyJYaE8VH87ApNSBNNcp9JdzRzBxKmkeZAt9FnFcroBdf3MzMkeVUtNnLyiWbe3b7qtHnKDdmasZ1RxKjjrE",
  "key30": "aAaMB4LxbPAJKhaLXtKKyk5uQpdq2yAKJUQKtpEGybbLWYjc66BwUPnUpYn1Aj4iaABsRQFLnEm6c2AeFNtEHEK",
  "key31": "2wfCTkg3CokaggtB7iG5Z7AGH7ouU4fwoiKdgpwTjHW42nQvRTJHUidZany4XNhXv4Zzg3ahGP5jZQszTea6gqUi",
  "key32": "35sh9YtjicEFSk45PrbQ9XRVT34J45J1PkF9Lz9nxp6hVJ68ombzHpoBQuKYB29a3LepbjB5vpAqp4K8yajwKXxf",
  "key33": "5KBgsvsYoV57khb1XwaGsArvpV1RyaxhgcfVwJFUsGuLrJE9DpLe2yX9xGkPyHHfVCM3ySFRh5X9L6gonoLKDFca",
  "key34": "5dy2NJXPnf7LKMEuFL7jT3SVAiCfDkETtVPNpwxBq1bZvU9i38aEZA3BAiLBN4GfDnSNTxyKJgZL1NMLUDuNov4h"
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
