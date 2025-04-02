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
    "R5t99aaTTqSKJjhrWAmspbX8KDanT1b4ob9kVn4qn1HRsU4MXHZwwQTDL3CkwUEghbnpB4T5xTB8iC8MSRbHu3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "582o14w51t6t3kj5G5VTYPYQPsrPoJixrxk53BNBeQHFhzBaaX5edu9PNYEh8q2Eta1AmDXoFn1svkshoErDp4R",
  "key1": "4KLXBptsz5mCjacsb63wyzKngHw3JVfuAYNYAv2JbkuG3mbDPpJ61dxswuFFHtJkchedeSApEm23YyNt6u7VGYN7",
  "key2": "2PXmUmKZCm14pEt2HEqET89vmRhLimaoE8VV5WLyc86LcmipyTctFbdwWHZTZrxCJR2ozHjzaG93KPexaApqKJqU",
  "key3": "4HWaJjPhuDKgBhUgmZnSCt9sSDBVmpfSPmWkvdmRY45kVRUnRvUNqg2govzsW4ie3cHR5MmEpChyLq7MNqtRUW3p",
  "key4": "3c1oMgVyGPeM9BCinHrSNxnZmK2m6Bep95MhQ3oFUiKRBXbue3XWcWzo238VwnXhPAy8Rm9vTnH4M8jCMpftVnMf",
  "key5": "4CmBi2WU2x81pf3gv5ph3sABPEm1vVoqQE1N3pqnfp7U74WmQbKhvhuGXBQvQhobWWvE99eMxVguU8iy59eFsiQj",
  "key6": "4S8AKkYHTpuZGzVo3EcXBsFreG89Es1wbDG5Yfd56mwtHkjTE5TdipAKuV7giLxxnxWnJf4Q6MisK2KjycarJ1BJ",
  "key7": "5r3F8JTmow4tN5vYcJCGMFxNXB8WxD68VaWeKvY1wr4dCMk2WRN2zWB9zBNjdeorkNMaR9Sp3AqjD8Vnb83pEwwq",
  "key8": "4SvfgPdkS1ogtGrmVBv6sZmmpiu1EuS6ebvu9tanBas1ndTyyGvSvc67UAVYTA4Jntq8dFcxTAhC5QgZ7dVZ8wq1",
  "key9": "5gH8MnQiwhzRKP2PcnR3oa2ByV52LmcbbvvGQ4vSi1MJaHMs8NtTGFBPGdhpzKoQGoajxt5g1tHRJ2zsGfm5ooWV",
  "key10": "61zBWS3qmzvSHysKBF9orNjD3FQhsuS2Gu5BxSmr1nD4wdawuhZSNrQDmVUb1D41qCkivrhe3VYXqpmRApzjGVp7",
  "key11": "2vgYHmfT5NBS4n9udYPchWgtQLSR8Crt9YBUe2Jrox8Sy54DUCGmUyFsKD3eLXxzQ66QS6WAJYCGfHNzoyQmobDQ",
  "key12": "5oCPTnjAUznFhGTnknZaBhTtGPaaoCB2AC14q4eHdTKWnQKsmCgGj71vZhwQCm4PBrEw9vGmc3tkqvbdpfw1Nkd7",
  "key13": "5gJ6H9beUG6u8PVXPoucM11Vwx1SRvRwHSPuMkEnGkduU9QXJwS9Su5yqEeNqxDWcg6otatoE8RftfjsyMPXUSfK",
  "key14": "p8ztwc6NoQ7BhtfJCRX7HhD3UwLnnWsSeY4dwtozYXysJbBAsecSvYdEr95NgAEiejiGMYz9ZsisdVfWCfFhKXx",
  "key15": "3LiidgjPrU4S8jbfZngUfTecN5U4WaVevTcV7be8HxYTTDkvhg5xakRjJn7SPAVaDbUZwidywMjCn5UWbRTQ79cM",
  "key16": "3Sqx4RsgZARSUsHjkMBBPKWSXJLCQNaawdhtdGmPBrykngM7qAgrZmuM28Gb6baKQHH4qx2wn356ZfHP3HEUxXAs",
  "key17": "3FgD1qws2v6xXWDsi6KkbTm25TDsw9T4MMYHmAHaUMFKfKUzBhRmnCsLA1BNHCs2jMeJ21R32FjuSwXGZRpXSaDV",
  "key18": "4NYKwHwWX8SnwtJRUwnQpNDbfr1JazWvsxWiWN9QAFJZcTL863ks8awLgSuS6JzRQQvUfKacM74pt6ydDgzKKbxJ",
  "key19": "2NxQk9ZDuCQyBPT5SEx5Kwyakipyi7NBvGkcmd7j2gQcKUtGx7SyBYv59vGst5f5uuzBVQo5VMDC4JdgiwBHqBW2",
  "key20": "5Np3p8HbVPdW3TeSFW865CbNxyeBuaaWaqKLTA1XnwFWSowJtxvykWHfqAbLA7EbD84dcqsiiqHepTvPKY8ja6kG",
  "key21": "sWjG4GNJN9tbkgNtUQq3digZ9jyNxcczyx3c8mmCCEUinN4Unv9UibWQVDKjJf3gDxBb33Ps2FqXZeT9H7S13JU",
  "key22": "5o9aW6djbGHnWKsFhxGaCqj2VDTSrpBPRzAqoEf2dAmpuA3GRsi9oaB46XFsMYDYiuKr9nGQNabmkCXcfhFLkPyx",
  "key23": "51q1dBb2A5X3Xrc43jypUqwANDPBvLsJQQjQ3bz5ByB8tsUF65M8PYVbHkVBHtXonD9vGHLj1x2HTpNz9K1WRGUF",
  "key24": "41xDdF1M5Dpw5NwftjCWzffM1NWGkdVmByaVX9EJcA5CLL1c8U2TLMofUK9k8cugoCiHR1aVGCnGGzp7btxypWPY",
  "key25": "2WMRz3XPVaQveRZpyf5pp1KcU2JNXzH8De2pbeQVNwN4ubdPsk9NPQbNe5snDHJWZcjPHHceQxSw6gW6yXwJK2EY",
  "key26": "5615QEqEeLLn3jDoQLDHAJwwfnMSLaDY5yeNVuhqDaWu6SuBLqtauZtopA2aMq6juD1tNkF4MFDSXEFD3s3sg1rf",
  "key27": "5TpQK8xG6ddxFocupZ5y7xiqsw7Kh7jdDumuHyjfXGfDe7sQN4Y8xeNj2aqoBLrurxgwTVQV4mF2rgetEXawN21y",
  "key28": "bGVPAoCR6FV3M4sCYm1yhbSsawdRK8XdnXn1atLsJFcQLMMcCkAPYC8jn4Yz4e7GH6ZAdBiYwVBCF6U4XPHECN1",
  "key29": "3KXX5gnm1QBGkZWFHUS6Np1XwpSH2TSnF4EYe9mJ4WgSkaa2gbjDozbSeqNRSQnNuTMz4XxrP4d2pjUFQeYy9yC1",
  "key30": "62ZkLcaSKDVZVMbn29p6FTM1WPrMehLtRjN76eBKUTDtLJ3FJcYNXcJ7UoCZcgvXjFvo4TE4hSdRsDVDsx6CyHJa"
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
