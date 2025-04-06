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
    "24cStZgS3LgxxvsTqbV96QaFz8cQmiwR9TsN173wF1QMGouddvQnwApoD7BkaCfqv7Br55uY5jao5hKktuYWsssV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v35iw5dcap9HjL1hpcmH8chMdjMhLTC28BfaJJoxpSZtowTWmddmaaJD3JusaZKpskuh4J8AQnBrWWHjtx2GQ74",
  "key1": "3Zzc51cwkGtAayUp255x4wh7ftvmoaNYhjhG6AWqzkEi2F9fLivny9WXFPbeA6RVijfNEk3JqGXxke6mGBcVY2Dy",
  "key2": "2wYQ5Jj7sk7bn4X61aka3Xppf8x1ChBmKojs9UurXxAW3dvnBkhGaw34BqHhoWKWXyh6CgnB5o83zNB8ZdfBkmg",
  "key3": "uWidJ5VNB1iCnsePPKvH7Mk2QRVDd5onyRr2LtrHxJDrtaw8HyfwoU1ZvFjB6SEc6kTyRVRivbmUyaVoL9BpSMN",
  "key4": "2nnEd3ECEStJ6GVVLpCv766yVuvCLiSLCYbEXXst6ZgzqfLyx7MJehumGNDViGsCN4DR6eNBCVxht4pFhQezpPyq",
  "key5": "63FSkZaYRUAJ4RmDz7ZsWt17Zr2QFr7xAub6TjjxQ4zKzvSrCH9aQynCEcLM39bdmouap2RHeUuGUj1RZrWvaQeb",
  "key6": "5NH98jFTUWbE1P7iiXuTqLBxK7FX7s9JNvGJx4vtjeAbAPFLmToesbcA2qRFdERfnXVgnYd9onajQMM8CW61dmq5",
  "key7": "zyurgfZYSCjHnkhwpRjQ3D7NwM3HFDP2WZxQWTtawnBgHTFfEhqM7p6S2pox31NmVW2NUGoRyKq7G38t3kE5Mpd",
  "key8": "4NzwxuKsYxNqwSrBxvH64JEbv3tQU9mcsHPNKDFZRRWheqho2kCedu7hsGBmhWj3oAFBPRvoF2iouMitBxUi5Hkh",
  "key9": "5z6F6pmwivbEySjxyFct3pQgkeLYhAmgqrhCN3j8Z6teFgYPw9b3s1Asmjm39oeJjxsb3JgWHSSGU5NJCAG6XY9b",
  "key10": "3pFSPxDuAAY8wDP2QskR8hZrHM1NCz7EMBEjfoQJch5KfzxJFaAe1WKKfhWAHvaC91KSCRhEHiRX3Tm9UzEhBKnn",
  "key11": "2w4BBRSWSZFMLRLpFnkvvZByC6pmiG1g2xWtLAjkL9RvUHm6bQEyTnY6jZrnkVMn2PwEbdbEHKkMjPArNyfR4H1H",
  "key12": "2BpVotKd9PSyi5hUoPzpBoHLZdqmMZUJK5xJRb4HZhgUyudk8yGP36bKREzyV9jvghjzp48MEhfu65RdWtQrzWW",
  "key13": "388AdRZF8FJEFGye5rHZzZbdi9iYKdvW7UkoGRpS5a4XqoMJeo72csmW441kauq1voaqkjWijvqSZfVFHGxk97eM",
  "key14": "zTkAhRpgHRc97N6BVmuYHnCp2Suz6PW8YAb18PQmaP7C8qk3WAsFmsAUhRW1m4eubDTpgEVtLezKF8QM6Mx7DxT",
  "key15": "3SZEWhv1VcAUohkz8HoxYVTdsJhHg2DZJTaX6JqFk8NnfFFCuk5h1kwNesDQ7PqcDVzcHoA4TFT3c8DZNYHAhyjK",
  "key16": "4HPekjv7Wxpf1qezg8Au4r8EY9E8E3WPNTk9wjm793sh62HK4HMSaxxwUctRU7nsSLKLw12teqdEXvz4TXUB4Tig",
  "key17": "3KchcuStkShXBDh3HiPsDTfjXiW4wWkstmmcLqpHzzxco1p29jpTqJrygFxbFZpPsUTAuSxe56Cggigt7LRihcah",
  "key18": "4hCtTQXHa3xginydzbd234RTfG4HHHFC31AmXkiXB2uY9xbceX8Ud3edvuG3fM5ZfNnSngt5xFn2uLaoYBqJx5is",
  "key19": "46CagU55qwSmvxbeXkKsK8LyuucGqnq58sh9CcQn9CRs3ywmF8DM7fTePCBenychY5C3rDx7MxrFb3qyyFmpWQrb",
  "key20": "28YP7faf5yrxUKdvbuQa9vx26r9ha4fYKbDYKmJ4Gzsvxg7AocSoGWsczYtUhHob51t3NeRgYBCpiQRtsdyw7Lkd",
  "key21": "65LcYM3GTNWcTD3KNbnaR6Vmbf2SYUj6tQwRNBkKYvF3FzxCfxGvss1VzdWu3rTEdfBMnLru1zmtVa1G8yYy9SGy",
  "key22": "37H3fsSfcyYRicna8sw8aYNCFCXSAHcKxRAD5VGsjH1pDDUHUQ2FKBJf475TaWedMMzZRr1sq3dDZfMgYCNbpR45",
  "key23": "3iK3NfHTB9LQcZahrgjBUTZSZM63E6w3NE8K8f6hwE79zzJo22ENtMFqWuf3iPnWUbkf5TdkmQP6LA27ozysrAQS",
  "key24": "2pmSt7MuxNsecYKz4dbdLRsaUUPuDd2FLRkMcf76iiaZqQaRxiHBZZtCWXBZFBSYo4UEwCddWyehC5ufHTPsxfDi",
  "key25": "2j8xrreGTgurKXzDDTECw1hitntrEBWfmdJYGCrvgqKoaH8gCAnXPrvS5drxNFbSyABr1wq3fMiPbfNBsb3x81Rn",
  "key26": "4oaNtzmhuhWJsRpeX1FwzwMwqewJNvC98T1eaZKicdwUCfpgXodqZyDFZDsbCPdTfv3NaJJ53YEbnTdFHEqJ76ua",
  "key27": "5XyLEg2xBmCGpvneagKtmNa2agp4xxDYo3v2NFGCc9c4potoCQu8ZmQMZgxNR6ZimqHcxdQ1a5i5Y1MfdYKhMEis",
  "key28": "5qrH1nECxaB6ftg5XbGQ3RBdQrTkrEaSU7hDYNRFo9vQxPxfBaSLy2T6kmQucsku2uxnH84pkWjGzm2WnWF1bum1"
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
