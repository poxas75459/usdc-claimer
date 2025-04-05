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
    "4cPQHDgeqVgYsY8EDNzLQNAGg1MRRoYVBo3YaxPFAMDgJVkxuwEmD5VQfBFz6ofhzXZLPaqXcfWHndQm7P3cAktp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Vo5URuf5eAeUtMhhAbwqh1xwqzamvfQhMoPtzkGwwPsX8vZmQSNUS7oEDwDTpA5Hg38MdWJ3ExeqQ2bTmC7Rkw",
  "key1": "4PD14sx6hKKhnNEm7GHeWibgCoWZh3i7TmgEoLHxzKJv5a918mQYLnXz923azL894twMtsa97QHsvXZWWZoDSmWL",
  "key2": "5AqgbaUYYd3qzsmLddwcn3sAnMwr8S596dYbxw2WpMtfJt6ci1aVeSYpxhe6oDdgrV2TChVkMn844zSjW97VEq2o",
  "key3": "4W6gYwjUdo6jvU5QpbWG97kFybjaSCsskhGDcjhaw46Upp2Yzbxq32GxcNUghBwjbV92G4wGwu4eDNAzVRn1aMr7",
  "key4": "5b5moWpqEwBvqshMrfSgX3uc8JXJBVGjK9MkqKNvwbsLBC4gogRCt5gpPbR3uTZja9nG6QxzFB3UY7ynDvqTJ3CF",
  "key5": "2Mo3rUKcb65vPqcnkVLE3o8d3H2FK8E1fh2bBWBh46otijfZzsBqMv3rHWPmqdyU71sNBe6yaUyAheMWKdp4sa89",
  "key6": "4qsFu1Gc8ux6B8UVoCCUZBi3J8KsknMQaKiY2mmxzFfsgNZ6U7kP3vkoMdESRHRddjEWE7sVHWZDDkqkvNF2pLva",
  "key7": "4LqeQcGKwsdzcNHeHRSzcjZFU74HQVenmSF85tQZJkVeVMYphhw19iAejQBTwNPWUmCeXE5CUeVnskaogschA39C",
  "key8": "2YpHLDXu7DvNPGR3KvynoxCqDeVG2ADgWqqQrCpRZbDq1HyFxPcS4SdiGbkTZRJjNEYghrKmhJx9GX57EQnCp6vV",
  "key9": "48vegoKb2BKBusTEYf3Q7dbgEtMHwYSu1jXCRqCB5PyUQa3gnN8fv16j7hnwDg3gxcKRfgYkebs9QWzz5EUykJEJ",
  "key10": "3gRMJ3BQ72AEG2QTPM9ju9g9cLdxNoy6Y2tTGevcdQH3iDWBvHqwssvxmDUAiEy7pGia5atWrwa5NoGp9c9sVHBg",
  "key11": "5Knd18nNwr9drg9pFuGwTzdwB91Jnu3wAN5HWKKBpXqz1rsft7hshHSjc3cdLGZXFW4wweqd4HwTd9Jw4G1SZVCJ",
  "key12": "5gZZ23VS5tRwctziFR9YqAN7HzFJVkyBYJmLf19BEV35MLWwvyFCdDzxVkx8LqidvzrgQcfVW2QP8soMCrwo7wTa",
  "key13": "5pCdXyZoyfkBGHtdJxCPB5NPZ9VV5pJhg37BbS1MUaNuxP6LKN8KWEPbTjzZXBqjNUgPWC9suQHFdcvGg5yMJBdc",
  "key14": "N4xH77W3VXDvgRobeeQZ9gPzGe43MBcQ1dCLhse9Lhdf4bBYvELqyozGfZme59nBjJPexNd5EVEf1xoYTk2LJEM",
  "key15": "3LL1wL6HcrKWRhfpmHCjd5B5LcvVdVGSgFFHK8ggg7zs2i8LzjTyVQfbGtizQZ6XtqjitqNnsWHJCXje1PYiKnnv",
  "key16": "4qqmqFbhYbLSipnenQ4ycDn2FD5BZrhZDkVs5Bbjp3hkT2x9jqGc7XRYGN5MDCMjqe1jDMTTDhHjQiXyjfvf2ymR",
  "key17": "4pnyUoN4kGienrVBqbmFywyyStGGjFe8kqTE95KgBt8eUTQH1k94wZc8fPMys1wUwQbUtJ7LhDpms1WwCjqrBnHf",
  "key18": "snep2s3Zvw8HcHboJChhhQpK6KC2Hh7a15mzNDNJPTwKJPjD65FxNP5ysy7PwhPi7mLV8dYyAf6Xm9XmsZhimBu",
  "key19": "xBezPWN87JXfdp1Myae9c5SmuvWjS8Gu84NgpSihGQ3kpkUbb96cSjZHPRM3M5yw76VXTzgdguVts4kyhPwrpvZ",
  "key20": "462kqHWYWgMHrhB3DbsckiqbfkDGpS126nxQTHdhCvbSh2iCof9Jp5QKNJf5eDbas7k9FVMeoFC9myQAVorx9bxS",
  "key21": "2punMocJignJsPayRzF3goYgCFfivEyJZ3161dvTsppaoPMgvm3N6zmiugC2HEeoRE8p8W8XjqX1v5ka1GMKirAN",
  "key22": "4vcaf4oDN3CDkRVt2tY8ypUhkLFjLJ3PAUFJZL3aZPe6M4k9osgswSnsr8QZ5UeY11NPQFfzSYYwR5UUAJLr91Jz",
  "key23": "4abozcDX5bpQPei4jAfvFF7BiDZNs98LYm2R8PbhN9SDNq7YFfz9QyttDiSY6m6pMPgr2yXr2N56a8pa4qupT8Y",
  "key24": "2da4j5gYjuUVAUrAJdaN5Gz6MXqU1tNxQLptx3stL447z2yCBsQbZWed146gTRWLF3NqttRnRp2QcFptG7pbWrA8",
  "key25": "4gkjjMVRoV55xfHWQHpQpsQBDxiY5Ym8hmntnQ94NsJTTomgEiWum2ivN5hQJAGyXRLJDch67uiA6zs6GmUXiddb",
  "key26": "23ikwiBLjg9rz7SH97NU14aG6YQMaFyMisQ8roawX18VoA4HP7Qndnd7JKTS2FFHuDLN7HocyeRi9kqdNYsPuKay",
  "key27": "xfufdDayMRaugKMw3CvHggBwn6fNVvbtqGs4K1wiWheCHTuuChPffyPRTkrnTaipYc9R9FKnMMWRG8FpeZN74eG",
  "key28": "5ZTDbVTv48RMHdJRsnotccodqPpPznQLido1w8H45XKm4Bmzfg6QJu9xZPwak3GVtuSow4vp9u4mG3hhCHW9EbKC",
  "key29": "2YdHscY9g1KhRwWVrApB7rWancd7Z3aocJwtQFTundG6u7DQDBTx3fvrh6UiADni5Qv4jWKwi19DN8ieazxmRJPY",
  "key30": "4emQXqgTt9x2FhxYfXrD69PYRDKsWubjwmtWwMQnbTGPEkehP72aBBuiCcsQa3nhvhtPktkJLzUbNGAWUrckn94V",
  "key31": "3nY2jWiffwm76BJW1gfi3WZApSZwhKDKekSkFyetMJLsABK76Cb8bjivbLebZ7msABQtxkWN9X5DzCJK5MzutCN9",
  "key32": "5PQrWFw4xYu5mCxXAHAZ2css5sRg8nUsbzDMtt7YDcxmdXwrDmkynch5cKSKZK5MxtoWuXES2NJRDoKkSYJYWPQX",
  "key33": "25CnZwjTbjLpoPvtBsS8qiC1JsSP2mq99w3Gwpeb42QBMKRymDs4nkTpfbGv2VT45s118tcLDqMfAVeLpUa5at4P",
  "key34": "3CoNc3iV8t62e2MdEppkQcwKexPzarkZppBjR9wKZKJz69ji9C8nd6Z7jpqJAWRQ55UDDTawAGz8XN4MWUchUH1T",
  "key35": "3TEmcR9uoZTHkbWbxWFHyN1oDPEqGkBTEWYQWKsk9V1VS3KSKRnWRCD8zMtAbvviEM2TVvUEU2MZZAxT435oEaSf",
  "key36": "2zkUJtuyd94EibbZnfQbKmEMF5gLJmCAJ5Q6KMxFaEekks41Vw8uaZMmKqopnRau5SNpVvtEBhZTteQ4e5KZyE97",
  "key37": "2ofyCxwiXTqMhgB11ymQpTtNrsEN5fM7DUba3K6EQuEvNUqyLLNUBvPUbXv8yaLagzifrCwUQGky3aEDFhMRW5xo",
  "key38": "56fdyhWuZFhNwK4fEsdPny1fhsKfjXSeyAKWqsw7JgkXxsjcbJpgty5ednXHXxJsLouCg3qpz8KkZNHL1mxovhhH"
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
