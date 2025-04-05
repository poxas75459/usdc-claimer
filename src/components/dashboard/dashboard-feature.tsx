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
    "i3S6juBHnqYvHDyVoVCDgM1gJnvCB1jYPzoCJii9W3ruf38AYus1MppDcaErvAG8AHZQg5t3cKXzDsAFUrkvdTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rm82zCXQd9Z7jFfBFyZwdusKbq5rCE6dQdzLRvzEFfo5hkF3zQ19bAnFS63SxjsFj72AG7VNmTaPV1NwWUUKaik",
  "key1": "4mpEJBQoy7CB9tfpojkWe6GwxSwMYrEud712z8SDrMLRsKTkjqY6E8vYxYYDkgQ6N6y4fUujF7xXbHyS2X6crbnS",
  "key2": "D53XtKYdYgzeskxQ6VjmKsEafxACxz1PzhDTEuH2BR1mZxZDyVG4XJPSe9pyAdvHjKVcDnArrsWvZwV21Ua93b7",
  "key3": "hNz5EYK2jSyxZF53J6HTCqWj8qq8ZiAtrV83ovu6DD4nGhpHo7hgDtKJvv7WZoLpAv8CNRSLhT2Dv9jPEF9ZxSd",
  "key4": "3Qi8MhLLdcFbNbDoyaPMTNv7FpmFWvEb4BuLZkbX8pZ71BJueCgieGGB371XAW98DPypNKFhgy7U4egwVtpBe8Ha",
  "key5": "2MrKr8LUqCAwb7pcu91cNhe91czAkfdiRjMmQGv9mrProdjHycFqjsCcFrK81cKeMdwpYkyy86oSLrsahEg4KLGa",
  "key6": "hj9JcsNYD3RNPJbv1JfnXnE9rXgjn1S1KDEj1U3xCJcuYdZUgNnKhYrHwKy4C81wvGfcBjUDsBPoEdbbNvRhPfa",
  "key7": "3GANX9mDNPJvTsfbLcb9BGfscP67enuBmpYBSkEzfotheCFpzrjS5Nr15MDcy2E8LA9iA9na3Ewwkf5zXL2is36D",
  "key8": "6NAvrWda55eXLmxQ5rUe2GqS6UTYHDKpExS1qmRWh4ZqEqBPhrbzSpT597wtCgZcFnhu1MwksVGh6UGnn1DCg2F",
  "key9": "v1raKfz9t6NrRXpj3vz73ANw37LMGWxBAQ47tMtzDmXajSR1bkrKqV3NEKMoegEtF64eYCtDSg3mW4LP4Uti5WH",
  "key10": "5g2Jkhxj9WCg8m98dAd1RxcEoWjx8Wqc3yyC6wBHwe5g4GA7nJZoQUCzs5MzxKJ13qDTui5LCN4QhVLvDQyTc4Zg",
  "key11": "66LvEfsXPTNaW1cXynhgU1hG3hc3mg6TLyfaPRPNxZ3fWmVaRMQPvMTLK3YdFpBmKuqDytY1dHj5a29VuH1EEhqk",
  "key12": "573UZYd2fpUXe9VxRdyEtDMbNEuMsCBw9UBTG3FUPoPadLXQDqfYWcrksWjNwcmB6V2ne4FoCzuKMge3okkkTe6Z",
  "key13": "Hw15ip7MRfaWfoWgbxTdvuQbm46iFshe6S29GoaXxCqLd41dKRZhVhL4Cwvnf1r9BhN9phEahhSvqQn7pcGCot7",
  "key14": "4Fo66Q8Sqy6LKFBzfdvmhQoEibF2C2hUZjUTe1T7W6d9SscS6QN3nC34jJAZQH9jsGCjQZx8asZ1xSLUF6eteDwj",
  "key15": "5KoFDd95JnkX1mWMJ8oVXgPbwV7seV63Z8w15JB2UD31h92RbFsU9KinFzM1Vnohoi11bHaA3vJNsxxKikf9DPsw",
  "key16": "3MLpNamTdVSVy5X62EbhqKZxUJtnRZ8dxft4nc7F2u5aJBwNbjRvBJZ1i7y5KvAoEFSbYQfw6kX6JnTPTJ7kbHZg",
  "key17": "3zFeQ7TSvCbxJj8LHncfnG4ZSdydtqZqy1h2BxMTKt9kNnw3vV4tRmFhPkFGW5X3cuMMZiaWM91JEKBw2fAJkd59",
  "key18": "635UR4Mdsoon9janys1p2mdBtpppeaGPEHk7mcCr1tfejhuh7vVV767BYa7UG9h6q9EjUQqDckZ1zfK31C1SiycX",
  "key19": "3jjKtyvdUdbPL9N2JNMhJN4fZkcGykN79ubNzA9B7dFcCcv1b7Tsm56u58KezBjj3ByNA36vVftGL7PrhzUxXB4i",
  "key20": "4N3gUdg3Sh6dtYt4tzSi1w81pfQdBA2mqxEVH3XzGxV3KYxg2zyDn3R5r5u9BgFC575YHXP11pqtWfzZADoGB4gv",
  "key21": "8Fnqw89BiDQxEMboqrNSsLn7pXCnReiRMhSgk8qfVeCxWa3YMbRHBkCYeMce2nqCE9ifRZuU5Yw1js7TqtUZ1MR",
  "key22": "3h3HYrexrZXZepd4N8rdFVxidxVzBJ4huCf4QfxrF6N6PKo3Cf4DsC5TZnL8PU7bkpJhZN7EVFgmfmAmxWzS74kZ",
  "key23": "2juU1Se8VkAvUbp9x3VZvPaH2ieNMD1bGb5yiHM47VZu81rZdudLa3HQb619pZQH9hvZDa3s7KuKGsWpR2Xh3nKt",
  "key24": "38RE3kTjakUdis7U3yHZ4EJuDaumbeVpUeVCDJR8qBynieQcEMSKsuVFvoXxuQdvqQZWpm5pXrWHhkC5ehNBPoEn",
  "key25": "5AdJvtbQyyNfSFVoy6UpGYWLchu4jFCHpznaGyjh533R9dS2Kwa27xNufdQdsJEGSfsXMRXM37vZNaXBHTCdnJKX",
  "key26": "3UncqivKkyYrqrsNcZs5F5j3GkJZEcgN48BGDvT1xJ69M4QDHJ6GK4uVVxUKeaxbe6VnXPuiiPmYsuKuFLtEYDiF",
  "key27": "2tXvfcPbHFZRQX2FJJaFAtrpvKjgty7SByQqAhcrXE2mmF7XEh3r9dpmkvkqPDSfGrzkNGHDUVuB2JbEBt8cdD3y",
  "key28": "3ovS9KaQJHp1EQtos2tAyrCbK1NRH83PpxAe5YyrWLnH8zrStcmRrC1BKiLy687LjLcVxGGECpy3tiYNQ8pNhRD2",
  "key29": "3wzpPQg9Tr1Zad8xpQQoENkBCoNMhLFEANJp1QV1LA6U8PmdYNATgNbDuxw2AZfmzxPjLSiZXKFJJLmexzXrfpuQ",
  "key30": "62PM57U4vEWCWhnqbmGjAJxzdsk9ZSLWEQjWTPQnsj6b18Cedq5QEeL1ajNs64hx9mA7pUgSVieZMD9yixfSA5nz",
  "key31": "2tTRJoutjp7JvgyPR6XSdr4hzNszr3bqqWmyjSCByiUNyz5c6Ub31YQ6b64QyNyVtD3Yu5TPjmArrFTm4xXskxUr",
  "key32": "4FMwNBTjayy1ryaiifzCF4viGCXwzQNsLq32oKVJqX2aTYtATEGhigxTfi7ZLcLAGwds1oWkAeM4WSoWCujNdvY4",
  "key33": "2ehPCtbL4XEoEDAkiKRuSkRwS2s3fBLG4pZxwanusVeqhG4V2mTtuUZDviQF8Ymws9E97Aa3oFAMFD5YiZVqkWjA",
  "key34": "4aJ4ZNiiFCWBGo3orXhwBnkSvqfZmLW3B5BiWsVuTxjiyuF5XCuGVyabpd2WvjiLSWC611yHTEdHyP6VvYt5w947",
  "key35": "5AUSmVrAk9Zcds5dzGssXGVJdmUhngcMixoLDnqCaNaXTZPEGs8bHaQR4uQ9oYujyrsJi56tStpkeujQrabkiBQ9",
  "key36": "5mjuRqLw8SwtCwUTyrVbqGQaS2zUnj16UifUdmAGJjAFrhnbfZr4875PRh7ok6rUeWsmCDxvKfrJoDHbak1DhMqn",
  "key37": "bh6uJwRE97hahG6u8YPQqBb2fMi75ZaXNZyUREicQp5tcCnqe4beopYgmxnB2V9mJCC8kiuDsyBtxnCV1QYMgeu",
  "key38": "KArRgHDwRFn1L79ZfNWrbwKf77pJ9Wesdy2t7ZFTkKCXrW3XoKHD915S6JhVRccYorZqaSnepd6qk4c9toN2SsR",
  "key39": "2TfKQXMvPD3SG7mx4mKNHXqzUfgSABTUxNJtK2CADDhkBUzW2tAe4zF3rUkLDepNjpi5qkTqUFHtV5ACuR4Hseba",
  "key40": "4pTRpuLD6mbVBGxL4VZA7GXS5NW2K5ex6ekyrEZdRCU8edk3YeSYBBtnqN6bCDKXvcJ6bNdsLMzTDsJqhTtCa8dT",
  "key41": "4QMbJUvoHVzNo2vXebRVp4o82mpV19QCP7UA9koVfHbovWjkpujeSDLW99X1nSGyYPYpLrrBuedKBSNB3YvLwi4P",
  "key42": "97A7v1UTsWq2bRZKBbJFZN9SCpTLGQQVfyaQT75Aq7yT1B7QV9EYvw5TjoaLXhoUhw4pPbFoAHs6G5saqHEJR5y",
  "key43": "3Mh7cWPVKLPWn9DYUP4LbCYjMTyC7BJtXtahGMoBKV79MBbZH7MGHLrGL5K8Nb6myPCbtoXvyeg71DbELKPdvpBb"
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
