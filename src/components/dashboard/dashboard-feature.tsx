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
    "22gASQSrxytDvR7uTCjDe9G7RBMMLmJoFqwQ2uzk3CdCvHbFUV85sZhLY6HWJvM4Y8Rtsjj46kQkZzzcq34xc4QC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7LyhpB5TUCMaK19QUJq4ZoBYJbZQ12YEhJ2FQVweyoktZv3raG4ki5RT7bQGxZUJhsxUjGCzyRNoVafULL7Z7W2",
  "key1": "5hrZbodrCiM2TJR8zGy6ZQSKxkfsvDjaqeKFqimPw11Mg6QQLiNZkZZTL1MkbHyR7YcsXk6t7z5YAKdptHi1PgVD",
  "key2": "4VudWtS4kaHRMZ8gsMQ9grBg3jEPx7xdE3bs8MEYXNxVrX3rzzVW59GX4Mee83sGrMFrssaq2g1n7i1ZtVwtje2y",
  "key3": "2BySZxAHouXokN5vLKKdSx1uFAyGZLwExKnhdr48bpNL1JC8fqsPWgvSYQpbj57A8jBbAgWxZA4pUNAZYYi6Hobx",
  "key4": "5CgQcU9LPbdZJasEMe4Fzq4ch2wCPLTdyr8goLGrwSUD3aDnJshRYzHwJFk6dMGCpC3eP8bij1PjgSJgtKzAp9MP",
  "key5": "WUCLsWZxmsenkUAmaeQ5D6RYZKpDUNZ9RiXWGiPKfzSc47NtdrAZfQKsGhYMDZb9iokdzbZCfa4uxzFCzg4cA4X",
  "key6": "65TxvLWmQuMwUQFDakPo2ZTM8qm5VEDTT5m2kjjgDYyJsSDBh2WvZY3Gnfq4PDY2vtEP4ydMwdnesERB9HDPovCs",
  "key7": "126MaJzgAfUtijrQo4DAMpQ9Wu13V41sLSYscBpZT7AkGSr2pEhxxncxk3aNRx18kxpPaGa63EngfB9E2LQCcGWj",
  "key8": "3dkmUXNausmUZ6E3V5EJST9Dck8sLFvvxirzFrWGH98iz59ZVTu9uwi2wkiaeLaQH5HkXrurzegkzRdWrDnDdC7z",
  "key9": "XGdp3RnBWLKtsUZWnzcC6EZTKZPU6kxpXRKAYkmbVd6cHf3zUz2zTjRqcjRLxi2mYPHQ359wMbRoMSxxM3X7kkB",
  "key10": "3qgRsM7RQ8qWASUMHLWtJ11C3h22zWVWmRdjssRX1oN5isuNcTMszjQtPRgGAR3UAih7uefWeHkk3fP23vUKzKi2",
  "key11": "38p6RFkp3u26AHKfzqkCjxc7MQSee8SLGSd1iByFUhgnyCFkMfMLkHfgP4Ho1V8TNM6PMFgU4qvoKUUM2RxqR4M4",
  "key12": "3GXcBcjF8dtZFtbi5KLWBCv4ntmjBML2p7ZNxSn2tNycDqDDE52pG3fDHcLXvGU2aRKUZ5FZrnut2x2Gzv1mgMRs",
  "key13": "4b5Bs1K1zLhrvFgV8EgXJqW3yh6xvqDAxLJs54AAVo5su9bWjkQ2ZZSKi4j8ccgyUBzxeprpc9yon6FFfLoUNcbT",
  "key14": "4DUUhJ5ysmDd4F8z6E7dJnPzKtfikb4aSsPg2FBZMT95GGufMDtbHqSDTwLQhgAiGaSENgviD7TwoUTCTq2zGKDZ",
  "key15": "4WuSy9rjQbZDC45p669cTwUgsBkHTLogT2L47Qd9Rpa3Xw396CveMyrA4SmJL8whksMQrAZLQZntcsb5bxUL637K",
  "key16": "4JVByqeyA4DAukXSyir6fdeEENHo9qHLQ66pj5tHtSGfu47b6cNS7sAWLmwr4aFtyhVh5szVbZ1vLo16JrQk38qj",
  "key17": "2M79wfxRWhiTfrohGxAf6m5qU45KkwqsRuWCMLMWAQcwZKosctTH7WSEuSRwpkghNAUvcJFXiqjC3Hh3p32BanPY",
  "key18": "CFF6c7H8JgnZvm7EPawePcBJqd3muYQXdLaM1d2sNd6TQzKBgoeE5fLQKWScHrsV91hPDgmFvFdTHTmPiaf7xCY",
  "key19": "5jVwwFku1TodtmyToV118cMyxN82jGi1zhbMLWC7TeWQ18W6xEJUr6jFJW28By6rHEmodZCjJ1Ghc3Ude2aBir13",
  "key20": "46PcxM2NJaaWMgHLMXcaZt3mncqjr4EkauSuxeYcK7WawQMzBtBgVjMLZwht2yjQyHyQdG35ZP5AuNMXUgqECpEP",
  "key21": "53UivXw5H9m37nXWTQF4briJuFgLc7hNeWW99zSxKwaUeCQEgvHwHNANxgFyDSgZfrdZWq3ctUPBqMkM7mCKUCdW",
  "key22": "2btrBgZVHBY9Wi1jJTBUJtugxhgQQhxwVzXXXJ9bkgjQ29dnhgemA2E1jH3rXpmFaKCff8K1FFNpRmFDTxA5x3JB",
  "key23": "4chLddWzJzdCKNKQu5xmJTY9aeFG1RXMX8VriYkundnm2GBKJ5hddNR84wJXPtQ4HkAMhUpuZfygFokTfJbHT8bJ",
  "key24": "345zXmz5avGeXe9t3SEHTXZtNemq6opoh2FDyJjsFVvewR5BcnxJMVzoQZ44VWvY6NciVNnUwpF1ykaNBC4gkyPy",
  "key25": "3pK6J7EoPu7qzTVyAP8MTtYEMYKN4aJSJgHXbbvTxMEVfdSFTqHYfPtHquyUQpnt3sDdWeQx24LfhaYihGePLC51",
  "key26": "49JjZ21xRXJR8zyzKSNQ8UewqcfFvdzQ9yLmGuVbuKY6YxZMULqNfaFJjBH9mWFoEFkuMG1pXsey61cbSA8zdB9H",
  "key27": "1GgaHacxBxtVXzHPpNu1kn3HDsMSgDw2XAiu4tV1c6yEKWLXrjoDNR73Pxxy73XUkHur5AJ4VcTVsPL2ZhkDTH7",
  "key28": "5A4shDJSAL4qVsPWTeTw5jZiNVVuoA4942ts68ze5R7sU3cVUvZDZoazXm1aaCEj8w6RBUBE8s346gJoNW3Dr7rH",
  "key29": "5R3VjgPjNr1rFoKo1cLKJQeRXXSVT9yXqpNVAbMP9cYuR5ABzgTFsthLofBpPrToqyNnrkT7nAeqzg17eQu7vf7U",
  "key30": "3CWvCnaNdGPjNtAs66UqKCPbDaMDWH2YTpsFqmxrQPxCJMTHZ2dydBg694X5ePrY7kAcDFeinWvSjLgGUY8YYfJ",
  "key31": "5dXgnD7H4vgSEJfBSKf1Svsef8HFj9LbabHC1je5fxBCUCj8EmSp83ZzaBrMBR74xR9M6NxqeDNeGRo6iuk4EkrP",
  "key32": "3a3vsRyCsrK86GYADvxdWRFEfPfrB7KFMUzdz2XX2h4eH9igrAWTjvKqucDyJFxZmHquCyb9dWgkzPKP6hmQByV3",
  "key33": "DZPEY98Eoun2AnGTmJ1jADxbRNDrLsnQLhsuBUCEHk17PBjSLNmpWaVmg9RG5CPz8BCn58n8JHonftirCXfpbdM",
  "key34": "3tAzgh1LWDpyWagscmDYERsAsWBon6DWjpe5F8CVPCbi3M5d3vj5KuZanLutsmMc9DXXp4C3C9ezA1Cv7yguT7Sa",
  "key35": "3mhqZZZHTfNonEKpsUTRB5XQWYdxVkcaXR4NWeeBePRP3tdSfX2fdXhQkRvBoCZe2aJHYvK6gVBAWUaPF4MxW53y"
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
