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
    "3fCWisLW3LgoCtE64Nu13vuNBfDJ1pkjHiydLsCo5Yx3jPDNmtMfCouq2wcBpzyy6JE2m2vqYmGmD4om5fBDM3oS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bJ6Ey6XAoP532b4HV6CnvXHajDGdxrYDs4cEGGasagJwyZz8A3KepHCjvNLEF3Txi4LHdhsRnuKaY1ohkqS21An",
  "key1": "5QgXqrkMkSucMGbCKsNctnWcw9sSsbDsAXzZdTH5Xin3h9j5GcqXaz6TLYCTXuU6TE6Hj2YuzuG4HYtyAKvR9L8Q",
  "key2": "WsENuhGhdvm8cCfHhCX8iTw6wdkvDf8Ph7kPc4cB8u5mvySJaTLtgU2yXoPpfGWS1d1kB5RsTF8RHKZtoWaXBSb",
  "key3": "2Lw239ffiCWtVCDW6fb3FXwZpSdkuDyErCTzVWanmyzFKPrL57KqK44DvEFy1N8Tu2tZaPd6Du4xbFN8MKWjYduF",
  "key4": "2wEKzGySFrZR671mUjvNsMeTQsWeydeYL5tBpTQRjfyFj4KARKGVBpJvkdikyvtcrSEJ5w8zwHKVJdH6dQkGEUVo",
  "key5": "4CDXR8TeWxrf8yAAffZLab3Kia12jgEnTjD9L7YQa4wGvkfCHUCCrkCwDjNiFsQ4b3WiJWH9ZuU5JhqCUZ2NgnY7",
  "key6": "423r6BQzTa6RveqUbiy3rBSFgxtbkyvHwEcAJDW1yAXSZYknapXAv2SagBjH56m87h6YPgHYkCP7otXiT3JWDTDV",
  "key7": "4HrxguLjcTX5a6fCAdpQdoAkHG9ikEHF5qAgvbN6TfoqXVUVNu4UY74mpoif41sSEsHXdNVH1SpTwCicnTcTEdQf",
  "key8": "57WPJVvgwzwLhSPE9Tfh1PfvSPRwEizCWdinXmDZEHBvFv7GTAx9heAi2hYYeDVQtrmrQtTPhMvhY8nyawffEpxW",
  "key9": "5FvGEBHpN2NkXUBEohtyTV3c8mEoSH4aLHxnXisVTg4mZFz6ZxAMdBRwUtQ39m9ZHr94u2iAqqSonaQNPueuxG7u",
  "key10": "4u7PywafyFUqL26DjMxVvQq4jwqTroHSuvUuGPkR1EvMTgC6wbbDKwva7WrWtZjFnToqBMHkuZT4dfApcviJ7s43",
  "key11": "4iBGXdy62qTocFLvwQfCbeTYMBjLbpThX7S6L7bPtMJ4hRuUwC6C8mHXqT4C17y5eULx1FLKaqAD5ngQXwbra6W1",
  "key12": "3ekgSHnhCB96Cnpw6McFFbkCxn1aCFEgZF4jZd2rSsTPGTGc8iszFY1fXbHhjxfCYdqQQvctV4F5fZ8ZBgBztqrM",
  "key13": "28gqwCrxUW6R4UJXsrNcY9jR8vBgCdNxyH1C3tcYBsGhfaqtMgokLGkVkfn1hVD1dZxiBDzJ5u33uP5L95SBya8W",
  "key14": "4Z2QUKwRHEirZ17cUX8yYyCLi49zktJLRmbmKGGYxRNKrVRrwUstvRP9Eq4EdwfmHRNCZ971oX1yfo5uKP5GWnx9",
  "key15": "2oChgb1R1EaVdRHBZmQuiA5GBK4HewDSDtgNgSP2tYkEYzXRE2GgZNuPVxCRHHUDPWPK9E2ztkvw5Xt9P4QYG3cC",
  "key16": "24yocyVpeZch5u57zqHfSoMUskDarDf9iuQohxa33KQc4DqTk5bjeWUqydyhBbnHmGW19xBHCAiYdo8fm4RtxL1V",
  "key17": "2vyQUZSDdLpQaK4XLVqeQMqaC15cbW8iG1gW578zGTDKahgAaF8AMURMnMm45Y6Kf3PyNUKdXCDzFS5j8bwRoeg6",
  "key18": "2L6pcfwS2rVw7v4REnJmAdEvKcfQuUNKn6iFdNcLh4drpBHVD8dSWTRGX4fpqBX6AXpWh6y6rCSyz6uUXUMihJUW",
  "key19": "4fiz2x9F82xt5QgwLSnCYYRcgvPpVadp53MY4niMq4jhEKc3TRv3rXphPJ4u2u6HxMwQMbWLrpF5D4BKZZT9hFcj",
  "key20": "iz3e3iXqUpE4bwCsGjANedEF6CBihmiJKAnLc7pyWR36xA7qZNWuH9uaTVJWsdFSDiSiQY4P1K4AQfWgwHjQUYJ",
  "key21": "4MSS6taHcNr2D2cqytr5yRWmPunRHEx8ZxUKGLPZxH4NPeajHZXgyGFLDsVFBm9xk2LED1p95LRaJwuxbWuyJRYo",
  "key22": "2dUK9yYNmAEXgdLtPTDHhoSrTgT1PenTpexmAy2az9vT7wdd2AC1TQpwUFcUcwY6EE22EW9C39EXDGVibm4aDmhZ",
  "key23": "5eRMZR18as9WnFcgg63rJzHm2jCMBR43akoe9MPSmmLeA68TUyGgPbgf3isu27bg2evqAKUC4dwUxneip1eZvA7Z",
  "key24": "5G6QeWAAAbowZmsd7WchVt5iiGCWU2koDTSNMoEHVaJtR3qBFbToP4wd83MpGuHDxBnEqYdQoP2ptee1gHk9Zpxe",
  "key25": "Amxey6N8Lx8wLN56sYXhgXEFWJDmzU5f3oQ9vGiHcF4zrbFHizE6DSs78jtZv4m3LvGpTfddVU7nWgMpeYUD2no",
  "key26": "3JpEq6uctoJeuTxRteWALswz24vSdXHRSPq82Zw3mJ8RxcQ7gb5wVU6xzGs48Z1KMKSFHuRZHbcJkMzF4EK93mRM",
  "key27": "3Lpc8bBojHgGPj3bc7gL5C2yUke51uKXAEruT4udfgsPodjQAQMqVMrNg42wywf5VhzkGDa958zqAHRJ5do2jzZ5"
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
