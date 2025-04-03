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
    "23dDD33qhkVYkwKrQMnkmDcXAK64cW9VWEZk8vF5irz9dUWHjsvcH3RrBkcKVhyjy2KykBwUBdyv8pEofgAqZhXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uUTsGWGiKVoRSLtBwCwPYE27BGJLMibWzM3NohgUicSTmSKWZ9oTJUxJ8tS1HCvumJhZZz8jPpaj2aA5WcczAUn",
  "key1": "2dNDPyRBaqLPD9wPtiup8wLk91EMBY4qEHKSd9JYW9ENHqAC6RPktn8eDKTLadjXZ7Gx386uB7csN4WdXsSCDoqB",
  "key2": "232rCwgJ2fPqQ8Eidp8v4ykBMASkn2bkBYeKkHzFZxNkccWzhS9neKJjsghgKZCLus83svNwEpH2WQg2BqZpq1Gk",
  "key3": "5w7rg8nFqxTmZRceRN1sDu5Bk53C9zeQDr6KmWN48u6gCtL4JiiC4k8A8WeeVUrGbZ2GFZ39UnAkSUedad1Lcw1R",
  "key4": "4736F9qoQVnEESQMSrp3gr9bSZ9yTLdPvuxho1vctRBK6KJk2bSkmc3WvBXwAmYC6waNdYjgKhaRAHdvDgAeBXE4",
  "key5": "1ja8NcRDaZbTv8zJKDbdW7NbLokqBsMruy7wFmgwjiu18qn59CGsaxwyfz4mko3pkHDLP2C1BWSyaRiYdpwL6xJ",
  "key6": "49ZSN561vvVwsbyk5A7NaTgXZMRdjBtB4S1g8i1hcxY3ywBH1rZr6ixPozta61hUHKkYq337o9V22xDEpPuYYhKz",
  "key7": "2FaFeGGAUam7wtP5QbH8iQEYa3AqES3TwgPm7EAaJ9UMLV3fyMVnJWUz8uUjBDDm8mmL6Zc8um6dYJtSV1mQe7wK",
  "key8": "5tDT1JNjL9EzAZD3hXtKNDYikFumVDsKTv5HTd94neh3rZ78J3968UYh6a5cash8FRnSY1QULevUy9JqZf6h3KuS",
  "key9": "5hsRf3PKVsARhSZnocib7EqB4rtQjGYzfJbuQ54jMyL1vpFPRe9sQrv9fch3gYAFQfDrNYxVtQBgzn8E2mXJJW2h",
  "key10": "4h1EgsAkHZWTV8ifoGMHvnwMoYRSUjfKJt4x2oBZtUBtc4e1kw5GxGWAYWZscd8Sw8s99EYttqQxMMEf8JMer2aG",
  "key11": "5D7LYSmcnagBGYiXzZwyLTmg7j2naZBq6omidvhPaAL7dLZ3jokK48mHT9LukFDXAjfoyM84Q6GcAjfLtFsCEteP",
  "key12": "4L3Ld3VPGg1RicRAfdrox82nq8U9stH537CFZpQVvgW8Vbkjyx6Kiu54shqF8hMziHnWUgb6hAhH8wf3EbQxVb64",
  "key13": "4bVurH4QkNsm3af9H9nx8A7gPFZGB2cF4FJeatLeEeDfHZZUEXZ8Ag9q4go5A6FGxhiF1LuMmmvGwpHr4skempKD",
  "key14": "3JTKxXKxWGn3EwjMqDy4E5EiBg3QYJvsHvywMbVrdmTZ8Wi8svvzFh47sL83GrVAZGqKx8wipgfZFqwzsPJWZ18Z",
  "key15": "53HTgavvoSYngcKAdm6u3mnzizV9k6FpsXwSDpLk8PoG51BAwjJjG8DtaSf9yAKKf5J9cvcykkc3isZrcssM5FTX",
  "key16": "415aA5RLv9cHR3wNhhjfHcGGztJWKwdYEJyxbHjrWKMQA8iTZZCN5L7sxBAcUbfh97RNtzpFNVFqcRhj7x9wJT8c",
  "key17": "2hzMsaXKnvQRzGmGporPPtbRonNVpzw24ZjfRqSAG6f7dJpdahAGSDsQfcxAAbnTwyoos9Ukfw2AiiVWqEoxK6vd",
  "key18": "4p9UQQFVMYu7VHgUMRXmj4cpTLFAH4WtMfLiMFgJRS9fRXPy35VtynYD8pPGTtCSpPBEuqkXEL8gHeLK62HMxn4p",
  "key19": "3DHkTw3L98iTpZJUjAB23HGurxCD4xop7EtKaxZffujrDVYXrNvSTsVr2RDbHjrC5AwztyfASUnHm9sh2pQ1ddho",
  "key20": "3dttGj9uaGihXeUCknAWG5qmbg456LcdmaBFXrvhQFeQpnDqRkZdzLPM8ufuEDB32kj3reazwZ8jArBusc7Tvxht",
  "key21": "33nZv8kg2QGDWkajTb4TcoTK37wyginoNPcsEsCmh4gdgoNcMLzaHq7c8CUZU94B9rjCCq4z87cG5ErcBpeSAwsB",
  "key22": "5qFXn24ThZ3pXzPxK5vV2XUWSibtVL7ZTD9QYWskWycPFX9acoQNJjUpK6AnrmkosuEviLaHZvf1MY9LaoBP9x9b",
  "key23": "2SfFtU9wJVkJWFabZ8brC6FHf7aL5t2GjMfbRMcEGgRRLej4AK64bUyeuEkNU79pjFwkYGKhyifDWBpfNQcv8pqZ",
  "key24": "5bW343W1VJpjQcYcnfVPrXXmD8RF3EVAhYVGQrT84TfQBVC23QcS7uSTxcCY26zRYYdT2KAnA318xgGkVYYDddTa",
  "key25": "3P7YnofjpADMc5puTcu5EXLHtxZE2jRWSSdxFuKqeq14GgVyn5btfXEnCWqk73czZpigZnUYgP42yjAGyysTS2qC",
  "key26": "3pC2EUBtBujsaKL28JEC96v1Lj7evpzhBkyqF3Zd3WzCpA2T8pCQBrseGAFBz6um8gocWNipZAN9HhHUh2SFoqBs",
  "key27": "5qG7nVZttXkgEAHaGFewL9nLgYQYn6xXxCJoKBqFTEY2C3tLyUEDaNhmGoP2zfP4suvUk87xBd3vwQSatcv7PZYh",
  "key28": "4wDAt2Ry4RmSN1EbRhvdFqPL1mT7XnniSnwvYc1fr4iQYZfgFqNAXjjhEcmcwHk4yfjkaGWt1hoqN3hXJoAMWFhx",
  "key29": "5aqRNss699AiTfb2WQXytnFApPhtEJE1fS4brqiRp9UZ9wQBvSh43v4JZjLHQGb1vcYZ4XvEN8oHkEzBToGH2Vci",
  "key30": "3pJQF1c1vAAfQHaTiW7tm6WjNqy1CigrnZoJB45f3ZwKexRtVgtf5wpvxQUQfgHMdcpcDS56NjQscZ63FUVWyyya",
  "key31": "4rwKuR6gM8Y4Ha3DzZiHe5xmoLJ9snH8ueBYid1zW4Z1dfBDX3RAVXqn9kftL3YPgKvkeLaAGovntNXn7EQRTkV9",
  "key32": "44RXzY25tF8CRimrTcyhteX5VAqD7PjJD9D4WjrG15vh1uC5S8AwvCfbT253c1t86MJc94o5DJM69DkDUsyKo41T",
  "key33": "4ffRCAqhFLUtXzNRDoBNr1AtTwNdsRhF27q92Jsb7jzmaZijDpncBropNrFyncJTPHy3URbrCC5SF2QZur8b8o2w",
  "key34": "2ynssLmjEjxTYcqevCBXh8kw8ShxVZ5N5Hucs3zceR3DQghYLWTWMCnvg5BoMAijs1xKaE6pMVdSEEiU8tXjhcxG",
  "key35": "SFBEK1PVthkiDgsejxJVMaAoCgvZd4iXdopvDRNgtn27inbYAU8RHBDxUtCcEcWyNtMK4iAuHi3CpkrJqJ1TBk9",
  "key36": "NK3JCLoJkN2z534fyS9d2fQ8pKKU9jFw74USxfxfPTodJDug6WN5Ks8GXz1gYFpLZR4btv74pywGxVPNqitAoSb",
  "key37": "4FrQK6LSMVveSHehD7X7JxWrPhaNNS9wjvn5j2VFgasFAq9tfBjsGgX6Q5LyTdxDrZfy93gU2xCv3Z55PYpypNam",
  "key38": "3HSRRV9ZAHHCkP1AD4AiEHuuHSZXQzLyGdABK4MMHQAMkJxc19ZRRvMwLfDuANpdUVyVXRYFZ2WidRxTRLGex1hF"
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
