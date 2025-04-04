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
    "44vnQCAY3e7dFcY6Vv9wwBVr1k5uHas864uF99FGJ9F8hgZw98p8z2qRKAwATxBaZ8rXErLWfkAQiSSzQuKRBxW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62R275ch7xWPamUtYCsCVbsqRRzNn66yekzd4Y6oFWGpDShL4Gp38wxJLARqLZ1ncj9tqZsDmi3zbpec4cB8eQ72",
  "key1": "9zE1cPjH8izA1PLhwdi9njnEwAwr23TnXSJFTsMV7cJEd5FKqvJR7iV2naBt9s8wPvrP9dcMwu8KG7cLKPDKXjo",
  "key2": "3LefuiAaipCRLbjq7fUw9u7bFWXueGaeU9DUa1RU2oignAEofNEcjGLtx6LausLumeUnaS6cgPtNv4id6R7Yo2CT",
  "key3": "43x27aqJX6JKe1q1rYPwN4gHqjAHPtYdmEQb3KFBhFT95nftewMFtYBFrpQZjtiSDkkxJeVbfd4Rrdk2u8Rfc8fY",
  "key4": "2W2B3PJtetujupZk15hBrS2vcXKGYNeNcKB92MUvAf14TNc4PfMeFwFrFs2GBzXFYXVupt1xCiH44APVn97AAeM9",
  "key5": "2aAgkxGQaxZDu5Unf3gXVRUUG25A2dNmu7Q7dfas5u9cNCxsN1nXSgHZz28rbUJmP5Yp8x4hqy3ZccXoHHgFfvMv",
  "key6": "426tLQqkhR7RFcnr2YfY2Gd5wrWpa62wi1oaSZtcXHivcAVNE9aj7mDMXuHAo1V2pposzuNk9TTTf48jfop7DdqK",
  "key7": "HewU5x7TAYb7MAts8cmzwx1nFgpYAQNdKiEMS95Xct8KdgrZksoJzge3A5nWM2ENhB8AQ92Qrk6mmK6MWyNq2R2",
  "key8": "42JBbKea5DDZbdniUR57cfxJp3sDzkzqS85SPdodaMDoHqSr4eiaraPVQ5MJr3igMsf2UGxyCdhtNiB5vErBT98q",
  "key9": "4pvpbxiEZZvXcXPB2tgWkrvxD6G2LJruXggSXbjRtUoPBLvqdH7oVmtoy7FngRunbinnfRKVYowK4z9m4pDFdEGo",
  "key10": "4gDQ8qEQo7kawYFLDwKAtTSJ46tizkhfbsbQsU6T63DrWziBLuiS4pAhMduJAL44sMj56qmMuxXqJtPeHCT3NQHf",
  "key11": "5HQpiPoFZq8SDbGWhLMmkyVR64FiPtyGoaTunEN4wQXhfCHeKHpYuh9DEspLKhx7zLyb2FGJ3RezVmEZbB8VWZUT",
  "key12": "35PU7CtiptFgDwGyhVwF8uYnRGJVpLGp3zzrfkYSiY1CvEJMLRkCx3CCZMAM3KM85ctT8fJHoFTEqoEnbryZfgCd",
  "key13": "3FTav3a6thauRSDJ2CDM7jR25x7Jhdtn5ZAAmSg7Cn5uCXjf6ib4FqHxH76EUbg3RkHFYKV8AT7EsfG9T3MKCRzH",
  "key14": "4q8S2tF2EhuuuPUGjfmdmhmD9RCvSJm62s9UVfqMVtHkUG18CdvrHkev5fKdSzLhdKy4s2UpZvpZ99SEQdCqatcM",
  "key15": "4um5wk1jXct6toywY31dtthGnWcVyZp7XGmPgR1Fq7zzwaLadG6iaY57gjXPDEjwjYUd8g4nJGnNTqW33mpZkYt8",
  "key16": "65hPCm8Lqt7xEpvnPDx4cJqH9iKRiR7X5PmDZoTDwhZ3byGLNAJtMEct7v2GTLGfNRWCAQABZ5H62a23zJVtpq76",
  "key17": "4PCzhh9LyysvFWRRkot6YtQxvAVd5kjUtVEMNK9kJawjS6vQQvNzhMcdrVHiKyZGfMR3riscpgkr9v2JZ57U4tq8",
  "key18": "4Jb6p5SGK5ubrTzLevRFmBde7dNrHPFPzi4tNzRgBdBTSeEf5AiUn1LYuEaTF6TupJnRuvp3smgju8DuV6x6VTF4",
  "key19": "5Uxwha56cd384GfWnJ6xRTzYi8xiytUK2s3J7qbZCBPKFvnuk5AHjSwEMyqWmwsxsTncxZ82814VR4Eb74YEnmS2",
  "key20": "5BnuoSMdkJ51j7Mwxnnsxr8PbmhLtZ1FQV8XTLUad6FRQbuPVdoVKfp63d8GPeHywartEnGzBBPbTpTrkhUtD33q",
  "key21": "3jmi8jAdE55LwbGt7XRsCTdULMiAAx7U5P8g9QrDi9usR6QsyDBzYYCWauLwgofNWnxwNdvyTL7gGD99ZEDkzeeF",
  "key22": "4UD48rYTybvqKMxA1VCtrouu5uYHia5Jb1ZhhFSJCdqbGjtkr7KbSHm23Z6XevNpgEbBCLBseEcD8g4SoNRuqY4T",
  "key23": "4CQxHbqWNcBT16agbaF9HvTJQpkbFeuvuaS1gZWf7bVnAt2eP5kxxhwEgcBsDprssj86oc3cbipWnFQPYBu6xXbP",
  "key24": "qGvn686rk9fcQRwWrYVnsj4x8qYDkVNrt9x1vMCvJfx5KEBDcmuom5qzsPEoWL8Qmp5LqozuWSPggjqpDQxTUqp",
  "key25": "4vPxAo541pegPAD54PkpvJZNzW883pupQVqL6UqBWJr9sbNdS3XccXbWRfp2wzzmN4hJDBTmG2ywZ47wacQX7vCP",
  "key26": "2mn41udLmDpuBcHsnpnL7mJ5R4dqFNYYfr6hhAQdcvagq2cSRGfJo126FK5VWWTxmg3kW4vKLw741PgbYhz5UCo5",
  "key27": "4xEuVxwAvz3FpaE3cotpsPHsjRi683c9bcKJLu8jXhFrNAKXYDqqSAQKdGY2SWaLBtKMSV4R4Cj6MMbGikUtc2fe",
  "key28": "3SYCGrzNb3gdBTTPBartr6ZHShuKgNM38dzZEewFh5Ny1jo3zU8u8yRkbNpGLckmayUP21Fgk4D9LeY8L5obuxHw",
  "key29": "4tAwLHkVUPkZFDfhjnBTmYSbpLQpvYt7E3YzLRXUfWZQW7RfdhUdCGfLHz5eCASJiYsMsgWd2MkJEp6ox2mCbXkA",
  "key30": "3Mz5QCg2EyPCf3v5VotsiPemQ9sEwnA6K2VFkZBiKmmfhnyEvx9eEjBLMr1JsD4LxTWGDxCQUiAxkB6tyP8rF8dG",
  "key31": "5YL7puFMQuvFASzp6nnnbcJgzx7DvHQZqaQXwxkg95kF9QM7qAqZN5YvP1Eoy17Xh4AxTpLHm4y6iS6jFcN4pBGL",
  "key32": "37KArPGfqJhsXTfN13RG23DNyTGgWXcEX8eQtd7w9XrDjHfoACUD7yCZrdjGG6oe5a9LbTbfZrW9R5wP7ayjgxJp",
  "key33": "5P68PuqhtzVpeq5vcp9wvSvkCQpeWLcLVqEkGtjsbCohmuuxePM2hutLXuEQS2M1ht3YVZmwoJYPb6JFRfoKhVL",
  "key34": "iVcfu7v4pS38QgJa7jyhkrc4NVqHLGzpRvNHmRBmxxd3iqdzmyMUMCJE6XbfxomMGWC3iiYy1S13ppDp5YpaSAq",
  "key35": "KZenmmYUeCH6BNoEBsn2YaS3ctov4vWN5q6Bi31n4gQHxPxjSC43dfmBRVy8JDqPSimwkaVhChVcQMeiVL7dbrf"
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
