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
    "MNvvJKSkHR5iyL4tJSaEM9n1X2eWWQ1dPHUxjx7NJwZdtEdfxn7GHnuw2TK8wYu9jKYcC6b3Nf3BeTuHQsxtc1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B5sv3sGoJenfZeu2WPZWCx4eKdm8z7i2gYjV9m7a9swraqomoagfZzKXffX2Tarr5WxWEQj6Zy3EXEeLTJpSNTc",
  "key1": "XvgpwTs1gr8TQ192ckDcrRZdF3r275HCSh2qPtuL9mXBPat547kihq7KaByDfYVbibCaxjqtXBy3zkq8dSFoD5t",
  "key2": "2kvEG1eSuEbQHx8hs27wWnWHXdiqR2SrYcpbW1ZJQwN5mtGVbBwihJcwBXyzvCaFtjM96tndy4mdtK8HYaw6XY87",
  "key3": "WwiS742EMQLzYPk1vhG2XNqnsk4s8fN8PMfyyGwh1sgrsJuV78KNtu5XTncyiyGESKuU8LdfXmw6iaqHNFnbW6Z",
  "key4": "2XiXCHVoSFyKJJm9YfN8HBPQUD8JvdMUm6aWff7sgSHQ58Urxx5w3USV4yxVg4LtadWYpMmVjK4W8V44AZPLYGhz",
  "key5": "4MBBsupECUZzGATqvnjQSMhisvGLxaWRU9unL1UgetjTiEb1hUte5fG5AsuxV4pSm4tmqyna9wDU36iBN6Pp5jf6",
  "key6": "3U1wtB46C6Tiz5XxAHyeYrQDTfHRmpMopn2cCBk4jqwuC4NC8j1j1YiCcCj5r5HiV3EtgdT9rHWNUh3VEDR9mKjF",
  "key7": "3r3wwpHFuriaSd5KmHBagg8Nrgvo6PGX5RKSvWavRCSdqQ1FVXwg5NP2foX5qFchVNUdwP81NA2GXfsy9h6gB3J4",
  "key8": "5SEdjXpXFotK2QXqs3pQ1ZTsuGqQggQ4aNyyH8Di7XndFuZvfvwjsCFkUXe2CUrEJqsPVhXuXeAUg6CxVEjmwqM",
  "key9": "5EsWZwfPeK3kW42ixV8TDkJirmKNKLi9EskRAE4txntVcm3sYtyJCGYdr91U58WnFZ9aCmyCXbHA7Zehe62xHnMJ",
  "key10": "4Zpf1RMGq8o6X55QD3tPu5DmkRT5TgnDMezbKMMRmjasSCP7sjAAvMSfWrgrCH2B9mQvvrkpqQnXE3quHwHY8LQm",
  "key11": "61dmwvXcPJ8nNQG6AKrnJHhX34cwqyoKwgkZScZXBdMZNBBpYLQFW8f98g58mJhSt3voHjwXjAxzQAhF4FCj8G65",
  "key12": "5koyaRjjZmk3ojf3swHHd9kSxyqbXGDSAjvjdneGsDNZwtQrXztEkd1NK4UDJqPA6cnZSSEagQFSF3HaVP6FU9B7",
  "key13": "5dTM9Le4dQqGi3YA7rCERiZ4bJbrd9v5GNCV4GSisr4k3d6knb39JvdHMsd2z2aE71uLd6Ld82UsbNXw58PLDXNN",
  "key14": "5R1H57WKStUya42x5wtsX6njiXkeQqby615FDHh6r7JkzZFV3dPx9o6Nceqh43LazeMShcEAsBJFTFAoDJXbdThF",
  "key15": "2rwzEcaLfXpDtNizw8yeVsQgHkK9vn1zzq7DGY4mUu2Kxz1kUED52XmQG64KvpGACdXNqA979kGTRmcK6rv7aY8",
  "key16": "2ipbwc1jwup5obpTnaXrsyYFg2sHbh8z8LY6bhnLUVz3uxC9Fwz6jP8CqvCvH3EA4HrpdVLezueX1CWHm5qXXRj5",
  "key17": "57GqnpGLqcUckA7MhCGXDGVBM4FDfQsDSovXkTKX3SU8wibAktAg6LAc8CLbW1c7poD6iosSHT3mmwtKKyXQ1RMz",
  "key18": "aduXCNvALRmZSniC4V8mjyKLB8ky3vPSHfyeEfR4GvfaMKSY2MXcwMum7LKXuMkpPx4vNGfHeVbJmTg9jsoebHB",
  "key19": "sYTxQAYNnsHmuhqgJ4z9oHaVyCUgoGRp6jiTwgUDoBCf18dkvWSSkpEGZDKbqb1yvUq2oSNr9kPL1i2eXsACMLa",
  "key20": "gyStyBVjUwvUd821fqaG9md4NpztJmvGAtPzuwTffoPLLC55sRhFWqQNjMxpVeGhL8zxTxTLrA596L5VCGZUTbd",
  "key21": "5hpnk8zgStayYsbWYqsyzGCRSwwdXNFkTHywpbAPad56zdz9KHaggtE1eLQ3AEbYDgUdBRJxsszA6hw41pzf65xw",
  "key22": "25ZfPBsJN2rdkHzmu2bVZJRLANr4L1Wr5zxqMc9JozWU7vrqYKBzzsSfQSqwekE8swENePfvVFriRQgcfX9J8C4z",
  "key23": "2D1qjxsf7PnULQedmXLBKGngYknJFsf8q1g5zs6dKC6TapvtmjTMfEGofi4PH5z9LFRCW7iLkuNjLX7KikFwiwAQ",
  "key24": "3p56k9ETgZAx4sWjJCLXjpEteYh2MJgLU2aN7VntLSmDrHA7EecHXMxKFWmLWC5k2aDTkgpTqhVB9sqYHdNhW3xd",
  "key25": "3VCdDVBE2LA4uCUybmuQbpPVGng99GpACJ82a4uWHq9ncmtXLYH9RkUAq61nQPs4qC41XTXMmiN2XUbj6gpU1BKH",
  "key26": "2NL1cETvCDK1WWM9NpioToHj5NmqTjmR3pEAyL9KzXox6cZ8DvLjwsABHxJamTtTKL56hSCyWx2RPHtAkN9AxbFS",
  "key27": "52Qpczx2TofffsJj1jJn6EXfKRdfZVezvecTFa9SQN15NnZK45KVTSDihCjjZWZx5H2Q6bfsXLqdW5cvNyXtZnea",
  "key28": "5PTwp7vfY1DaUjJp268qvhhBu3JFih5jB1EaMhExwrAbPaHKa9TCiaFnd9XUGmeUvz1sjfkhpLoBTEBJ32y8AbEX",
  "key29": "2r6oBHRu86porGDr1Y79HxQ4gPWus9tyUjas7ZukXYGUsoBTvG77CtrvwkCGAuiYqR9ygKgLByR42YJQR4Ga4qqG",
  "key30": "A7MzdGAh3h8XzyuNB6CusUKPzhQizmQUKN1JtqbfNVzJFKY3keWLPXKRp3WtG7ZbbYLPX9RidaQcEQfrLVjYSKz",
  "key31": "3VxiA16jLk8XtjFQQNH838iEqUSpr4GsVvmpPpzSd8rHWim5GSFDqkgthWH9C2e7SFA51BbCtm4hXQgtBd8CRCpP",
  "key32": "r1ebLhouSqr8gjQGz47HSHnR5guxWWpkEtTUR86Kam9qDx3cBF8Qo9J2u8tHicwsrg81hQYhoeosgtKpmZjpVrM",
  "key33": "dhmRXW3Qh1cGKtkvENvCR8X2s7jntW28814hT8W7R5M9DAcD3EZvT1n3rCiZLEjk9xeTbRwx9Ey1VuEmcsDqNp5",
  "key34": "2TvqNgPAsnDQwhPVwoE1mNFmtAFBPGXgR9fkFnqsVLS7KMv6VrGgme6M3tDUHJ1KmAd1Z3dw1wBAAJBBJJ6pZcxL",
  "key35": "4f3gUwcksvMAQPTE17VkKjjx2Fe5RzXwTbjvN9KvZK2ibphApy56uAHpg8f4UsvBiUDKgSi2WzMiF2xi2Qq3m8Th",
  "key36": "2nYHKZhPuSF4cruAV1hwLSvw4iZeX7Zu37uMsMs2PAuihHw88xEN4yLoyGaa5vVAeQictAW82NyszqzNUGtqAjf4",
  "key37": "56mmbj7wqBwcExQ8bbzteATHLAhuxa2EgcFy9gHbGDqMvYfsqZLXTLZhTVLascz6hKPCGdvRtQirVY1uDsAyWHYY",
  "key38": "2g4tiMbf4Azv7MZRgTBH34yeok73io2sgjuz1CQCKEGd4wLqX6NCNLvyTSQNRQy5YjUCeBDge9WDMs9BV6Yrss8W",
  "key39": "3Sq583y3eFLZss4tgRBxeVaB4ofEx1TBmEmUfUeWRFwFzkZhxSJqRxJXmenEc7MeDLWi2GiC4kzWdBeXsEU1mHhY",
  "key40": "ogXnibqHUD4xtM91qBNENoBzW5vh2kskTpLSW2oNvGaCstf4gpkEcTdP22rkXsPtGEG8rva8zpUgDisYgX7WMmz",
  "key41": "2M571epLWDLgFfbvdD83QpVUc5wU5Y1RiaVDX1PayMB7GRbbRgkse8Tt6RBPytZ67ALtKEqTpuoWubfwb9XoPRva",
  "key42": "5juYrEnG3H7ozNn3oiwyZRHW7ckjtCUkNvbbGngf3tAiRU8PQJPy9hub1xkcGuFzgrAJSpQ1hTacjexEhELDxqAX"
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
