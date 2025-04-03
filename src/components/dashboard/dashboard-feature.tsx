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
    "4ZFGsrwYdayocuBr5kodyeCd8KQzurfnKyuBCCdTqf9HDAAUAeWXPipfTqmUX7LNMXtsB2t7fqVChhsQ9xn3eBZL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "397cvksw54z3Eompu2Pv95LpkmAiKXQJuPeEVCnFGLU1eymLLrQDKB2F7Bm1SUq7x69wJvjKP2NMoJMPb8VVP9EF",
  "key1": "5kUexvz1BRWP3uCU1yRaZN9is93dLa9vtauccJBZHU1aXhyMq9eH7vaytbPEbdhkgmtuDXbeKaReTDNZxNVBz3QM",
  "key2": "4Fre4UoqqMhRcek6KFn3SAni7bKpZBtFGj5EN1j4tXThE9yYExQ9W55576nEcVmRhT1SKmqiDDUZ7PYpY7hER8Hs",
  "key3": "2EZ3gmLuVBxtfRDUEUnAVx88aoHHxHZeCemVG9ejZkDpP6VGMWoityJM3aP9XzMp6cpZsKegohnHZBno7kwKoJny",
  "key4": "3YP8byRbgwWDP6XhayjwbJWdyvGEhS7C44zEGYkAmK2LP1DU9kBLemW8q9kheJ2Y6fPfmwTUjEpzrrjnP1GJqg38",
  "key5": "qapH8A9vA7tKvjqf37up1Bie4nQL779HtAjnXY86QZh7efduLrwUVj8yV9D1TzDD3NYQ1acWGx61DL67iXyyRJt",
  "key6": "2SJGfJsCJsSUnHTmSaGqDhMLDZh7Tdrbi2z6TWFJ8vpXLNbiarmCeomCBAHekfr87YBMrqH8hmdfmQR8ysCazCog",
  "key7": "35fLFEeZVnV4R2ZPHzaTRdjVupLpHAaasHdvUoLX6siRiAiAKnwcJn58eGQiizZSZ2C346w52bKXthQnBPcgn38j",
  "key8": "5AH4x5ND6GaKfuiiE6NL8wdBgDLiNLAPWHmRSv47cPQWhLUeaijFHJ1fyZhij2ovvkV88jmC7zgjctxnL5j4LWBz",
  "key9": "49hYwcXPHxx7V2DdjcBDBoHytvEDtYYszdyqztorfq8pivwVwRjLigi7T2yZMTbzxit25fJYp7t72LnLGpQKBMPY",
  "key10": "4YevpGv3nCtpF4TXFkcv5PhnFATDcssu9qLfNHSyib6phYZAx5GNRF6KcKVom1Vxtrde4QTcmgC1k4mgvjpbSjBo",
  "key11": "2Ut4NxTC6quw1hCfKGNeY1QpDktj2Nv8wFKpkGfBvK1yoyK3rpAb8859w7JeNsbQAHEZ2iGrxRBzfS31tAtNdjNJ",
  "key12": "41S9AwGiXU8dBrQZkmveauXTTDvKhBE6ZiwVamxuYv8hGTkDDhapGwaKTv8X7aiYBcZnZhJVVF5vMbnWesxJWV8z",
  "key13": "36r1NYKxCR7ACSQwytC7qVTUSyZVMD8sUNyR4dmNB2JnejwCQcLxMFkxyePVE3d87GSdpSEXhXNvGF7CJEoy3LSW",
  "key14": "banCctqDCfeXWY3N7TnckrLgkXABxKnWhps1pk2tNMQutvor2EYcWm9dQYwrZYxWbrM8r6ZJ8CR58Y1UeNbMYZp",
  "key15": "2BStPqjmTnMnugpE6i392FmSgHVV4xkibVooSWqfiJaEP3AufyTyp1dRR8revE9ifKHSdXnZrv3YjWkianGDLFdH",
  "key16": "4PoPdQcYbuQJ6spsAhMgzJZzNMUva6GHA6eJUransCoAW526uMX2PzNZ7MXnRKLHwPUQbUKzP7xi2ycKHTrtmjyb",
  "key17": "4EtQp9fNuTcu7qSso7CnWz9i8geVvpPTGkRYs9jeaZ7sDFpMJQ9GaUFiiXDn8KbtFdmSd3mPkXW6mmfkNbrdexJP",
  "key18": "5nGXS6yS1ThYtQWAkNXcyYKLn3ombbV71FwSFpzNLfh3tNvkUrrR6Tk6X9WxNoxiYWXuRw9xzNdDixWRvdZKxuai",
  "key19": "gY5GmfHBn53J3ag2EQXFAiSTim3uoyMj6zkk3J7JdEy6U5eNAcdTRf8HNb5NY1gLkHzYFz1TpGUaQ14aiZpgsaz",
  "key20": "5ybTs5q4zW1q5CjL53re5SnGazQAgXwdhY3wp9QGuMsWAh9bHycTq3h72mLAkvkeuA2MLxeK77Jsh7aJ1sckvJGA",
  "key21": "24tKYWvExn5AbyvWoWAHq4mrCBKKGGaBRZwwRGGoy7bRHekgWmsVLibnk869Aam2FZCwiwjgQBpHCHaSPfaHA72y",
  "key22": "4huWEzGEGBLpuQ3byZiLsVkPpGyR8fqrjQpmaFTCmY2qa5yEx2qD8UfS7nGpL3HxJN7MjgfUzA1q8n6a3SncEh4p",
  "key23": "3J3pgQYENfokmY8mbT4U2NP8a6tnNy22X1vTCyXf61BUyNMDuJikXsKnkJjfzKdi1DJfRjt5zLDFMSrtjNxg5gTG",
  "key24": "2Edc34VhmJKMHoFaHHP3t6JD2Emxqf69iEaAbjExzGE4XkTeccXzcBP9evesbj2KKi8RCKKd9tqZp99uDYAcGH4f",
  "key25": "5ikn8EvjvDjC4VD6PJCtcXwb864L9vYFW37Yx1zJuP2WZtuis8KGqGZ2QnSaVtLVMKX8jd1DtyUhvtwEdwfVhmLd",
  "key26": "fgWgJ8FzZatyt4sT4omAfcH7qC2XqhxHyp3V6XoS3qbni53TStX2SxbmBFQAHpsYoYP2E6sDXiEV7GX63BRYDZv",
  "key27": "63CS2ixArzMoLrLAmehmo8NHcxLioNm5Tto6ePGZfxNnEfya2ZvLZCmaLSisVA4K7QjtUuqZXXzbS5SGwpN11QRN",
  "key28": "4NiZ7VuHZfJkstaAzbQkbRibHw6BesQFwMpX86bgzZ6hCi7vTC493aXZDahyK2gPwLZKLyntp7j7vcM1h2Q6Edi8",
  "key29": "52iPN5neFpf8qK5uBuGb5eAbv4wV2TYPt3g3dyr7BKDU1cR9GnR6XDMPBi8tCdgthbxasGgZ5gfaCMP7pU4RYkw2"
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
