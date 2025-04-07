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
    "5pFGXNyNjUQ6hmpwYWL5qnUXWMHdEJCbjb6AEA3bi46tgKLSqXfpi9EL6YRpm8vvstSnKZXfZH1WaLNmRfmrhwZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WexKj74p8VUqwxuLaK9Hdvz2nSquHtRjH5ATvWQ4HX1cMZDFEm5BcbuZ4brBcx45TPPBscSnhuu3bbUb2NcWrC5",
  "key1": "23f77FH1RA4KGFCdjP1g223wnFc2465P3qMrQbgejrTggBrWWDsuYwW95jfKLc52aoDp5oBTjMhbErGDr2TcHrsT",
  "key2": "46yrb6WcuDzeUsV4CKFYzRBTQ5sF8kr2CFUNUw3ckCLS2Hfq3wxanBqumiCY9ruNTatPLRsWDjNooufn79dmHMv3",
  "key3": "3zxBvFgE9sQLVGHWxTDC2GqwnsRYwGtfZ9GdErpmEEx36stokgRcf2HHD28n2XGz7V7VW6QeexyhGsigbmMBHDe4",
  "key4": "3119yfc882iC83pfPFbxok3uvyzZPY1eDbnE7LeNQuksZCyXfFAjL8rq6ESiFVcLom7VxWuVG4VvK8omtveNVPoT",
  "key5": "3tDhV7AiqjNRWyKDJKFUh4czrqPvJqcf2xkCsHJ3SUCCoHWNfQixFMV6oJbNy634A7jvPRrkzfGE6foXe5eZ3fkx",
  "key6": "3aHobEXuXQKYtwTpq5noRXdz3HJ5TjwVXPKwmXNMTj1Gdgy4m8ZtGAGK9hR9i76Yahqpd4keLL1rtXGE5ARuA39w",
  "key7": "4x1yz4wzLmhyn7WAfC39pnMGuArG9dgkYfrRoy9qqiFWVWgGd64VUEPjbxwKhJjZWysfSxHHrovTZZqLEr6P1Czb",
  "key8": "4xzvxTipoLQXku3spFqXkC5cRRbsa98AjShBwRjBjUeg4dnUGC5w27puU7QzNUgDMaipWezGKuZ5muuFJk6yBrtk",
  "key9": "4Akh1PMjxTYbFLcdnAHEirrtr2k3bNqA84c7xMUu3yhG6v1DH3uZp2VEfvvpPcfpgzSCWmsWPZYnFREdNbig91Ke",
  "key10": "4p7seX88SqnYgginSskpB7pG1E87JefHE3XR5TdVR33954CXCUVNLx9eJF3dK8eLBvQiNVyGHeqGDzUWPMcAnoC2",
  "key11": "58ZbfdZnMreACcTnLyTNNouFnim9LSKEcq84zDNBXoFRbMpXFr1e9cnzedj5tLLQMG5sGEviKLkDfhzSUe9gwdZ4",
  "key12": "3zELbrGyEVYE6itd88Wn2nswYi5u2fgbmWD1veQ1jQjFQ1kXUK6WALqoGpmHp1iCBLqehsvgnsqdAz9PcfKv1Tym",
  "key13": "4JQYuJWY9tHTJhbhD9UJtura1pmNLgyTM8q4f4XtPn6n5BJXXa62iMkAdxwkdmh1fEyN4j9ttvaHf5uk6kmWHVY4",
  "key14": "2d7kw8MBbbcii49neM72tBowHpRdQ4m18vD6DUZzdK49XSJ6p1dg91PPvgKyfZ5HkJR69WucrGanfx8RD1WArVPi",
  "key15": "2Wd8FLMtEY1MwKQJCspBoCUqTsR6VKTsCWQ2KwCR4CpKTtuByhKiUCc7eKuWHPgE36YqRsKi1SfeypsqvcGUqD8L",
  "key16": "5MyW8aFXQ2E479SazEe6pSbdEVH5WrF6jGr6ZTE7hpsAaXtaXf31rydv3bqTKxtyygaAaY1FMydYeLp9To3aC6Em",
  "key17": "4uVhVr3GQyhKBkwNdmPn7P15s4NmsKRZyArw58xghzErFr8yjQxq41dKeKgBmPXPPUxAdbMc3tkLJ6Zp5ri5YXNr",
  "key18": "3aefZbjKHfQy9VVLLLCXgCDep2VugqWp7zBBtWZc3e3w1Xdsw7b3jFhV8GxX6LuY14sUfZ2o5B1w5irdcYoH4QFc",
  "key19": "4FGXWdA2CdFo27Cw1sJE8CMfXD8m2xcWqXA2sBtbmLyhHwbevrKNkSoHpsurD8qWd6NCZdrLj886xXbuRmBdNHMd",
  "key20": "3cct6Ecxtn4xekdWCQ5TrAL7S5ML3e6Va1ai4LmUXokYNhmAPxmZCGWA6uy2RzpufmuDzb9AhcKNhNKtJPTh5DBc",
  "key21": "3Zp5SNTxLExGie3oK9HEvh2dmbfy66T3s2p4JJakRAaTbaaCcPt1nF9rsMtcdY4sTkVFg3FtBWQUVJFQ3jadJd2c",
  "key22": "2CHLrgmyfoXPfRt55CbjBVXYnVG9VU5nqM1qmsexgnfuCst2e99MpZWAtwKo6WqZDcvA6LFevdB8XzDAsKNpxg9s",
  "key23": "31R2dSmYyoXtCvjyRVDkK9kuttetVQ9rN2WUDmBLGuxLiSNUBY8tupuRQn5kDUNUTToz3oD2VSVz78DHD2q3VdWH",
  "key24": "2sLBJiGp73EaNQu7U7es2FZ6Q4EqiMqWNecnhisD142oWkBhZyJCiRAbky4cVonMzRuuu8woG51Qd84tyhsEd3uB",
  "key25": "2d95vjNmwwXcQcNH4hz7ucQ1i7G3k7oogXHPQPos1FiBRCSYc4yEmDdxTfu51j2bGDD7jcCULqpV5mbeiB4BPYFD",
  "key26": "3PzXPU9g5HMrSFbnYt7j7pxCCMY1ndRuEgUrh1Fc1tJAXUCbyMcxvHLSNcoE7f2kbRPDL34QQGhSweBnRuMQfVao",
  "key27": "5B6j1cJcAuxhvHwZw1vwzEt9n2sfoVPLEpoChdoL9ZxLXd4Nesg1TcAsZW2BWb74sRoGugkVq1YKCmzVowgKhwxo",
  "key28": "4i7jYT4SRFW5EbeB1gSMhX2GA9i9vw9fZmEuDdxxRnCqMuhhvbRhsFjBzB1mLJjrpNYiRkr7DnZZTpDk7Goin1h7",
  "key29": "2Dw8wZwWLkR3w9f8vjna3kHiwwtK99Rh7xuUtJHMpuPJ8QC7H5K2EEFn5JagV6aBXgNt6eSCGApfQmVVAknzwM1F"
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
