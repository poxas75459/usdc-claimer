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
    "pVGcXUJXD29rkMXSx5K1YSWNKsKUqs46pdA9FcvYmamkHN1MTWuFxHq1wjHr7NTcYLxfXi9jUxPsJK8aEXYT819"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TaYdj1fsFwN6BUSejCBWdRACrjyFqyXcqest5ZQ9GsgRHQpcSAz8BGLyHYuDTz6ha1JJrjcKJ4eH4gEom6HhAoQ",
  "key1": "3R4weQsS1MMZGRRHKveN5qWZYGqk63HisTWVoNhtsVr7dxorBXZ3BGkhvrJ6BeQdiuF8qCLzgwR5qQdUYmQuHrB",
  "key2": "5Z56zsp8k8Z8LVC3scZqF8g3wd53vZXP5ZLA7gkeYnazuNFPB1jUP4ZdmMveRq7Jhx3CTbNg54zYJkK6ggWwnzK4",
  "key3": "3imPaFKfK1XQ4fGdWxbSLbz6kMw6SnUvUYbF91dH569Bf9VAebWvwxNbGextFJ51EKsL7YZpXuLeG1TMB3pBEGCS",
  "key4": "3Q9LUYLXEdDVXyYWtW1mtba4ooDWheboM8gjtZwj8pBVuravjxm1HoTsif4mAeApvUfR2XhmEzYNsbUU3rnGVjDy",
  "key5": "5C8ysFsu6ixcfTMrDoeUW9wHNkrVPEhqwK4FUWmVrvsiWUgrj9AA8Zd2X4YnHQazX2QLP6MVYCVTysup6d9v2Ne7",
  "key6": "3hCYkefiuqUun2yry6i3oDm13KYLXa3Dtr7spCh4V1J115dJgZ5KRQDnHG5qjEMV3c9NuzV4Kfso8XZpRAwi4qeQ",
  "key7": "2xL19VGuF8LUEKd2yS7LdCkptxrA5hcp9JtvSju6cVRpdkPUHimUgE3gRNcGGBgRmxyj7hvTKS919AYxzPwJ9dAY",
  "key8": "Z9dFfCqsH7kNryp4Kn13SRKoJTTwH5oR8YtEpb49ypmk6rL3LESQmUNUZuQ7xLA1PXbgyab33BVgiqpogirSZvb",
  "key9": "2rzcohPS1KiihF2ow74w8poce9BJaK7UxGo4SdDx9DGRUy1Bh6XxWitdFH4yAvnNQj2GMovvJjxJ4HfwFRcKwrjb",
  "key10": "3YjaQXH9G3qz8dFsGRDzB5V5tfd8qqfYdUThzdjmmzPBe2dzu4orw16Y7FcdeHAMqcEx2WZrCR93JZpWGMu95FQK",
  "key11": "4qvGXgUKz5HyXqUcwZYYtoMMEG7RoRGZ9JAEFBNp9MHRnu99B8vpk38hXAeUV8Ws6vPGT1pyDrZ9y99FZ77qPdrf",
  "key12": "3nTtwkc4sRRCrF1326hJtEDPP4cHR8zfcbVdYygys4nmGTpFgz1ECCg3sokvTP5zJRRrPSU7HZrcZ2omZir6AvsB",
  "key13": "3iahy5vBSRCME5xaoo3foQeUmkoHyyRhf5pXgX1H2akndPXW6ACxDEpnkayRhrKVYYbKduAYStEUQn5SR4b7f9Nu",
  "key14": "2JkW9z2mynN8R2C68VQB82d6QcTo9bnXHXqEPd22vLrnZmAGCK7BpDLVUpng6fsaMwnrG6v3cB33aXc94tH9akFY",
  "key15": "4Hjc7JohtpGyemrfJD9NsrvgW3WyW8mLWJNSvvZKRNPJGVUv88HLpVCL2yumzeVgQ1GuWqJfPJADNyyv821jn7kv",
  "key16": "2DLRR2vDiAkAC2U3rg47BfiWxw16pW84oBvprMNYtRag86TgM5DpwXBLHBbNjZs9qM8jPzDtCrewdpcUJJmbzKNg",
  "key17": "4XEThr5H2P15mM72ZtVuqj8iD11EG6LS5sFSfMNzuAFx9Ly9KmnXdVGNKchrKksKJhRVEXcXRjTjBB4H5AvuEhGY",
  "key18": "5zwUKm4eyE3QZ6FqLQ5TD7iRjQNpwAYw9VVFeKnkWjg7hkcnnojtipvAV6Dg3YRxyhzvPR2nfUhpHJU7ebZtQXQ2",
  "key19": "3m1N6hXjmqqrJPdSnf3f3kK5dRBL1ajWGa5PF3cBQ5yjR1boUDWpm3fTeY4TWUSq9naPEWbH2SY15x41ncr8N34b",
  "key20": "2irFcNrYLMP2PPYVgGCCXUXoJC92WKeh6UmZEZ1QHcwENCiDbiDGG2voY1ToPutJz3u34eN1FkeUscHC9hPDxS1m",
  "key21": "44CiQXAfCZvEquT1YsDH1Xw7SHRZuCBEs42aALahbDVqQcXDgrf7Eubgw9EouioU1yeQRQiGt4wt9Kd7uZwTxxds",
  "key22": "kErSGZfqZZ3rGvQjEjDWPSmWveBncg529GC9EhccLKADJAsXQjpLF8PTryYqjPNALgoPsvNG4JUnPzqp2NhytTS",
  "key23": "L4z4RBeBKdUvHjR9CLowNqzLrDbXav27jf8nRKTH5WrH95zDzbAspZWmaLGAQWCLEXqd9g2qA7HbMQzU3bSxbFS",
  "key24": "4DAMS35AfxmKBiPoSeRVCtX5juzq3QESTakrJbko7WZ4WA1kYsL1YxMRin854J9CHDfw6x934wEEPdpasC5tgNRk",
  "key25": "2s7Rpv7Z75iK1xtQETG3HkoTkDJH1KhrwUWH3re9kL4nZaV7LsUuLUcGZH4XAuq4rDrVKVq4cAVLsx8WCpYVHvjs",
  "key26": "5MsSSzj3AxVWLTYhp52HweAV161XHWRHeGg98LnBjgWWBeAYpEAiVj7wp9sHzNPVR9wkvVT4A9XtXznk26cQ52Yd",
  "key27": "wVp6CKvdgif3p4tpP5svkiRSGrsodf4MWfDCKmX9fPMkDHV4dGjwtXx5B5UuAXXRLiQoGKgHs8tMcDQtk94kBCa",
  "key28": "4VMzZSuC6313rr5n2bCK1tAhggH7CggveGLjcdtVLdqGTNKXy1NnuyiK3f3cCk4jvkoAdWFPELVrc53EZ2uKaFWN",
  "key29": "3dfoL3rMyzcaqAVXCCUzesvhrFftYG6NfHrxGoEf2qzBu7cm7FTCHmqRgKzpLMVwTxGEYa52Cyxj3rsnhcis9ZRo",
  "key30": "5b4as59zm19WBjtjhD7bB6gE5niZhiBkiafYBeCg97CuAkTJ5zJYwgh5SA1eXGtwvyZsDoCit4wue68Pst6MzG9Y",
  "key31": "5rR8exVqWwKj9fRTFRFdRKeGrdvHJ4SoEJKM14opZeV8GT4CxVJmHjZHdyStYvm48zZmL7ZjkBHS32Am8j3mKJcR",
  "key32": "4dAuXEKYYHiqNRZ9t5bQNbQdDi2VKBjP6k65zzsL58j7G4HafVkJzzRwp62oJi9T5v5iBoMczVctG8YBuL1AFxLa",
  "key33": "2u77AKwT426fsB8ZgC2mNqvgvJv1Eycv9dd34JRwKHZUt88VJDNfLF8M9AA1GcaLEQdEowshAuoZ5JQ2Rwo9nVzK",
  "key34": "4uEwLX2LvNSE5qyw7pyGYwSNgQmKULeRhFrZqiiRcnc1dM2LpBnckHp5P1vMKpm5So8i1NybW3pvGAoij7iQaRjA"
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
