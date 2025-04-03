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
    "4Es1gjavdsZhgBQPfAMQVbj46jfM5isjetTi91EqoiWg6tNJLACWMwaoyJ5rPxXqjApJGj8CAV2ajfN3Zu8y8Atw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y6Vam4pjRNt36Af3DnNzbc1ixAnK7E86wNxXgkKQH3iPY2eXF9YY4f9B6cNPzzmo6tFE5RcEoixwAasgp63s8UW",
  "key1": "26RKTux5jaizUgi2goPvE4GxwPysgttnHKevVLgzTt5dKgRUr24eLGp6GPvDFkEo5tukRMYfCM5jmTqD68vexvB3",
  "key2": "4gczT9brA9pNkdoAsKBPBdDBR2SFTr8MxeHX9Q47EPxU5xDhndFHrzgMihXq34P1Kf79prHNrQnyso3BCdoVcMBT",
  "key3": "2mEo2E7bvPJwRUjMGrRoTtXtkV4gvJgjSZxmDj1WxqjpJwS2mfpo7YqLYz3jGANandVZ8eCZNCULXg86eTb7V2ch",
  "key4": "2JzQPHeNsDqEegq6ba8iroYCcfxDY1X1wDp2sErsV5o4dXz3ad3TNdaUAkEqMq3vtPsBkmX8XjEQSEC84KhvaMyA",
  "key5": "6nw1Y16FJQYobDocBbHqT75mZFd8juCUQDKo8FZYPHH5vJoEGCyhQc7kG2qH1DqPd4vKXcwsLFJv4QuFdvfdQAK",
  "key6": "2wbEGeY11C5f5pk7EQ7Gb3QkYtJeRrrTNiTs39U84UhmT1gh6mML1uGmssVz7hcNqvmFDW8f1CU2Q7pLfVT2mpn3",
  "key7": "3wJKW7nUyibjiKZ3jf3hG75ZFbkPZKG7kuEFPJsgTKAxaM2x6WszfZJReWPEizbfcjRfswyfJKbhYqSANxjWSETd",
  "key8": "2a9vQZMEmm7ZxJqBMYudPU8gqXJ9xtuLKK32sWgPVj3JxyyyTj1C97JFd7pSVAduYmcUDkphbeKtarFTLTZQc1Zf",
  "key9": "3YTz2PxBYN1iwX6AiWn6MDvm3PiWgy4Mqn6KThe1LLAtfF6x3rMJXLcYesGvt2k43LeymwqdTuxeZUf8xUdaiwQG",
  "key10": "5wQT3iNxgnxmXJX1ZjwQRTjJRKnTSjTkk7CCq2QhWe6rxrqP9GcZjyxZGtHYBkL3cr2jjQUYeS6XWFSeAyBmPu7L",
  "key11": "5cv9Ph4DJpEWo9BzxWuNpbeomReePVs2cCoTLs1jXXwJqrVg5LzzhKj5BJuRHC23x3oeUaKCivFzcAkh9g3dKoTN",
  "key12": "2sBTTSiGsCcaGroCUA6EqppA55moiVzuPMr9fHEz7i6pkucRkGTK4uyzTj1PV6x1zYsHxKD8qe2QygNKZTpuoPBv",
  "key13": "5DrpMurGJBMRBG3HWJSXPbgq7gNpBw5i8zjebDqbLWNp9kGzomBU9x54AYvseBKgXHmNV2Rt4Fxh9t2GRauNP7j",
  "key14": "2kiT1eJGY1Qy2wLCpDZERMBBRC9VRy2iMtgvihwWSRo1rxTt2rhEcjsjCwKFLA2NM94BYAdsTf5buJwaqZn9idvp",
  "key15": "SHRa9KPxyR6jiC6Dp8qPDjgtvRNhmJx7uPhjkLEtB1zivNS4twpxvw3aeNJ6qqPCXtLgxaS2n8p9XWNmW95GmSx",
  "key16": "5tV8iAwP3bMEZLrMRQhLkgnEWcyDQPCRKSHTyfopXfYoNKEA75TEU7sfWQiJ1yP7gP549iMpCawJMjvrF2YwcEQ5",
  "key17": "3wi78PzzkPr3RuRe4HE4PTxR1RmgZHNMonCNx71YJsKFJsXjevPkHhWY269v4DqnVxugA1VhdZTNz7aSkjQmpums",
  "key18": "4ky2xrZ8fWepcMBTzyLHpU8SS6o5CdrcM1knLgfWJRcsqgK6n8rH36m3sCynSLYEmJEFzPNawrxbo2ANjuk53ZUp",
  "key19": "523ZWkrVpEJAGmGxsAxGcokrYvWp7SXtc2yiohCy9idHvA2Ue1w6gtAxDfFkFEbkB8FGqqrZBpevLqSa19By1JmU",
  "key20": "5aSAtDZwaFjEZnjcnk2mo9VcECSuMG2stEfyJ1mCzY8VQWTiitWBueauJE8gq67BCx3msiRVzBwzxRMcNgsZE7gZ",
  "key21": "5uf3oLWDqWdkPrwgJM6qBEAJKtm8jnbP2opPCnyYdGFSAqKNjYWhL6AKdaX6ZeDp5T8mhRXEMJQcFTLm4B6JfNN",
  "key22": "4ngMQvSjMUtvbZFhdtTjn4aXDzZmYmPKNrvqTnSbdXtG99FQ7h16mhMUvgVDX5fsMxtHpSd8dgrWweToL2uCAFA2",
  "key23": "A7CYvGJCShZoMk8TQv69wZ4VG8iX88nuWuaEQUGqy8FeqBzxufhtwqcPzwAyvuqKfqwZakc7o9joj4fYZKejYZG",
  "key24": "6587X8nmFptKdhz52mHcF4LFRfFWFigp6hXJK48M4Npf8BYq71aTCrV8eNdCxhMrRutrGGEeuGyRrX7X3wjQUpYq",
  "key25": "79chAb6a5iLEqgPyCFkYhCV4iBmsJLt1GPLLfSBXDS1bAY9Ctndkw9wcCFQrJbousC12ezTKTe5jRWD6NXfGEu4",
  "key26": "57e42AY4oNE2GWrnerqwmYhbCAWZhbkDwLo4HGTxGLhXickn71XhGBFbBA5jobgh64iAMxsu7kXfr8BvTQw5DGTq",
  "key27": "ArTtFSivYaAoh2mMpjCsEuggRLDZwLdmSmbjfKKt6j8DL73wNh1mhSAvtTA76PnezwXiBqFe4ppbZV2i1h2imVC",
  "key28": "4334j1eDARipYmXH5p7ApKPgUDBE5iJ5fGty829DjoNkCVnumLwj4jNQ3EmndzLpqroz3M6o5Wo7JKaZQfAUo1U2",
  "key29": "3nay1T4M9i39TdFbVPfN14xV4L1Y7hYAyxQrk2vxb8ETtxUFWg2J36T2MC7h6JxBBSMWruxoQj39rxwkhY7puHQW",
  "key30": "3zeNHzwCr4G2fxTer5oQoRoca9hWsDCXXBJUpVXdSAqa3dGGcgWY8SsJtsg9ohKVeVYSiiYBotmbmKzmSYhp5kv6",
  "key31": "3Qh5Kn1X9YZgYL1ANXuf8qHG8N11c2bcretT3sVmy7o9n9jmXa6WN7TNnMom2iNQmqBFzkMefmZGThGDoDMsdcjp",
  "key32": "4BGKXQUqQ6tU7AArYQ8x1dqSWbYSRL6vNciv3RHGY4spAYU462HvYN12UkU7SWPRYzmnsGVctSSZQWt5kAmW39GN",
  "key33": "4tVn8oKd1r21iRPku4qU5cJtJ7sZMEfYsGcLxopB8WHn63GAfYciivtg2GBRRb75wa8rfCqqgaTNscgZ4DPTKzFs",
  "key34": "3nuZxn1J9FAoEYTfRzWLpPqejA7XQhXF2DrVxcrtrWfpXfvsZBJn7TpxEjquzczt67tcX2Uf2ShnbDNPHtaRKG8E",
  "key35": "ACsBXEq1zUMsLeSSVqnnWBWrSrVJQBrv1KRVeExUhyYtYtrXmRuFBRA3Vq6nJMqNTPCjAvv67jsiqhgd32Kw1jK",
  "key36": "127heh22iXQJXNFdihcsDqHLgyXHsmVbWJFLaL3v6hy4D7eHKXPNkY3NUhNCi6Q4iRwTBxVcEhbYJLUn8VTjhdxA",
  "key37": "4t1pL96cNso9EsSnLCBJ627rn2hHCGGvNiV98B1jN5QhYUdFkKbgwkcmnJVzmXxXQyLbaYACfHwwtoq1hVaZqEtV",
  "key38": "34tjvaPhRYUaQrBtLFAdBHGtf1ZMtU1n463SS8EKe9gmSXr9pYt6N5FCyPDGoMtmCpbGzXQBZ4yyZyaev7hAUcF6",
  "key39": "5hJQcQNreiEfGYz1DHzscLKMe8uCLJFMGi6ZfEGVoUKnb9GtpsmQbbVqv2vCtJEy9YKT4Nva5R9jmsumokD8cto7",
  "key40": "5oUjPW5sLE6XMY6EEnJ1QaXwjvsJpMspMz8yqVaNi3uVmhVhW3MM3byzx8BNm2uYqD8P2j1XY9ggrLiLVgBRZwrw",
  "key41": "2PX313narF8ohYn1dNCH8eLFiyqk3w7UASLggWiP6rSroj5nvw2daacXMACzV1si6UMDCu6xpeqjjkc4pG1X55YT",
  "key42": "3zdYUvnecoxLEMN1bWNM8Kh5PP17826uSJQxtj1eqabFCvbs8RvEaDbTkNXbgHoo4HJk9FKPvbReadk6oknP2FMd",
  "key43": "59hf8DCup8nH7uyQHevaeK265Lasdnh6NJbMqmnjAKgtoZJKmXKWZA8WnN9o9pRWnYKXTz1Ak6hXuq4kcnkRTLa1",
  "key44": "22BqD2WWdkzxfmEjpur9qChLviUSR3NfSn52rPzLbWSfAd83LDRyUaxYJqTepHNPbWgSh3hHwDUqTWnPTfhNAv4e",
  "key45": "5PFUxMpzsSzRwf6fLCkoxWLLQockvj4dVgP9jQbn3shkCt4vsHJw6ens9veoV5YEczcPzoDNjEjmtZAxHHRS9oar",
  "key46": "5fCoZkjsqcsktXjiq9pTXKjit7tn8k2mrCoRJS47RdChUkKRKzyXqcnpfU5BP7iZZFe8cc7MXawcp1httKyFS5Zb"
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
