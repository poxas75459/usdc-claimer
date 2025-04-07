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
    "2L6t5LyNpUZ694r9HQw4yStCCAaAjgrj2eGmPDzsdYWS83z1GFpsciMZet2KaoDdmWPkr75Cm3fFBVzgVawLZ1zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QXWFhoBz4Lq6TjSDSKhgPbSxpr4w7aa6ovoD8vtyNZmkJtbHmTEim9RodHZHhneoVjY98GPYsHCANXSzpthkNmZ",
  "key1": "5qnPkjZXJWK2dY1P1MFE2cE3YKi6Ydy33FRV4ZWMfKZTvjzz2tU1Xi6CTF6tiTaE5CGs4YRSqoHiDJvyvAWoUzoo",
  "key2": "vz1GHZGDKTpMgPozHBDzhwaGtTwnpsCh5741awx8BYC2oCFhznNVrfnVZ6BrQGMckE97w3ABuURAai7dVmLu6Q7",
  "key3": "3f1qv5NVBj96FucY1R6S8H9HMveWLquTKSsGrKLBQM1CYGRU5U3JRqk2DGvtocqdRet5ipbmQsooeBJVWpP8XipG",
  "key4": "5F5JtDW1yYxB3ewt6oCinxFzxUGqmAN8YSUYTB9s3xBqGxtPzoND4nmF7yputSEouAnYpYeLvqAR7a9shsKZnTfn",
  "key5": "sh5wGULRnVqKVy9rk5YYpyPqaMXMdfxgG5Nxha96HeovnRaGiKqfJ5RwVQXDBQpqPtzbcHJMDTMXXFCg4Yhb556",
  "key6": "5w99X2jJnpdch1YVzUZUHdtwzTfdCDHbtBaARrwosnVGk1Ha3BKQeYAMiCrFvPg2DegsN1usiM799EJjJ6VjrZr8",
  "key7": "4CfoEjsCeKJ5bBzRmD83t5FYXRNJGxBGRX8u2L1mNHSc2UiL25FhF7NEjyCbYMyZGPHV9KzdNqGkKvRkADQu8wzW",
  "key8": "2YfYJreLA86wsBakUPgupuTqqz5FrhXvzPfmFsnf529wkRoq96qWrS6JZatcnakVSPYtiQ2JDTuMYDnmCF7J66gv",
  "key9": "4vgKwg6UdebQUSuFheWqBziTtVMvCVkLVrkkFKU3qG81vs5FVJWpTYotQmXaFegA9RNkz33xHBqoEhbGdgrfN3gi",
  "key10": "2bPm7K3DuVzxVm2LP27UEMVbCnyes1DaYTJtp8kH9fxf6Ssf4HP81dFpXwEwU5kcE7FGesMkVjmFJGa3Un23ovTF",
  "key11": "9NyeGZiahQLwayqeKHFzBjdkKvMNpNakRQJYChJKYMPfp34rDHbszfCRJEsy6bYtbXNxR4uP59dnt3Xdt4yzFKe",
  "key12": "4rygMJzNRjd47HyKLG4STXqTAp75jiHrvWy2XTMXJWuybJrV7wzWuvrDH37siHn3EuCSh4cocmgAZqSCBPQuBHyk",
  "key13": "CARSbTbf5SvCpnCaUB8pPzDEd8jLJTkgc44SYzxevbSYZrsNU3HEJkw2xUB67WBLa2Fu2zh72AgYF8JZ7y5TSSm",
  "key14": "5KgCi83TCnSXF7fsHLXFQRwiM4xvQdde8dsXrY56YCBxeZV2MH42x25McQH83fd6KQHw3ZHnU1VSXMZjm48EtQ3r",
  "key15": "3dcG7MhdZg1tZzZttB5Nky4UE7wHWJ5nh1vKxwXEHL3HJUfUTQg26nUVgL9TqifZsG2WXinsAhQkC4kVV3UStR9k",
  "key16": "4P79yC9Hu4B4h3FjLVFfFJ5Bz7ATEGbTZvHgrbxpNSMuAt3t3fDHacfQ6Yk3DfWghmABfEsdgoqo2MMJtyAGEan8",
  "key17": "4auvwNvpG1rY2PVpKjh5eTHWkQjbUwLsqdtVbyykAPCnbVHPFcgcTo7roJ976e82CFfFMtEEa39aPpxRKnKeNSMT",
  "key18": "4zybEFZBfbFowpHL6ZQTYXgMpqKiQEWecinvte4hSBpq2JzfGsAshzozRKwvbufNwtqMEJE6qg5QzqnCqiknnRQ8",
  "key19": "37YcR65K6VtoPyKZjd8sVYYimkHvRWtfC4UX66KFejGSdw5zYdZYijstkFTNZnWkFQfDzHFw5rz6ZVVUjdWZAbU",
  "key20": "zJQFzzZFPMTnmnXtw7CcA8X8LDynUNnU219pTm4NW9akMLR5TEuUwg5vjEHPffyEUZmfrVMxpJZPjfPwZ8fCNaX",
  "key21": "25Zd9VQzDMmMmaDukf7Skjhg74aTzq1uiHJ7UTb4c9HqvxUVnrEPKwx3ctXjHASfaFAPone5Sjuv8j6czvpGYuYy",
  "key22": "2GdTGjZN7YDCEQmceBgHUCqR4ymG5QiewiKwfGfzf4Cz3KnWnRCK7WXpAjvtsPrFj3uxNkbaAnwqWhCfi2yZSJQF",
  "key23": "gaFLhqWry5TsQdywyT5jeHqjcE5fRpo5kp1Z4TYCHjcTHB4r8arVY7WDfsBZADxze1tRwQjwCXBT2TEH53Rrr6j",
  "key24": "42sD6rDu9sDKvRiwiegj4sMeqjy7riPcqE3ECvoUiUsEcEWGL3j2tpEfBzfbzL5tTVg28XkV8xJ2PvNYSuTbQf7D",
  "key25": "GUpRW5Zp5eM2dD4garXhRiMWkHDfyKKDJMmcbzhrET4X7izH7cPZbrRWS9NFEJMg9Nbk3NUkFuUGkhMFxC5PH8z",
  "key26": "21NVSqNZxru7954sH6tXJLLk8hmvaSufSKxs5Baev3cwbvSyDkjq9bHuW97RNzxQSY2tMNdyb7u3ce7yLB3nVvxq",
  "key27": "5PDXH5E6Xk2ZKUYr9gTVmZR28USn6X9U2fXGGro1MLPCzR6y33jRnaS3sA7gzQA23CoQcencBqVJ914geZNP3jTn",
  "key28": "VGZXbkEceyVQ9VpG9CgmwwdJrNP5Pd9JgtZAcFZ19sbAKMyfyfLWNXSu6eQYMpXtsMGSVaCZEJsa37RvL986stp",
  "key29": "YKdWT1fHN22bzrGh3oxq3Zc2h17mXftFPH8vDrFhPKawa3AwnvKNK3xwFZ1PuLdN2YS4wnFvsHmWhpYrXA587VQ",
  "key30": "5snmQWaSHt93hM5gC8WeT9YGSr15UbYPFgWnBKL99Ex5kBAzsCp8fK6QqDsTSLwaWNVAKGGULyPYHr9ZBSBTPw7G"
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
