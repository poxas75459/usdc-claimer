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
    "5JBrrCx7VuDLuf49PPnWrD4JBDULexDJoHNUf7fRGjvsUpwQAjNcAt1pfUSLqcMMm9oWxazDV1QuBV3ah9HfDJsN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SxRpovd7YQroqopcnqwcbkhRsxpR7ApGKbbqnqrrnxkMcwVYqu7wEv7ZSDirT29vpz4dUYAu9UseJS27YR8cBtS",
  "key1": "5bnRGsqGDQGQphhbUwhUv46u79eaa7cf9opkYnHoj8q4mcXsihSPTfqyNLZhgYDFhex7QMhcLx33VPdi1CXxZA4m",
  "key2": "Fe1MgwiW3cXH4Udhy6FBP43zQvQrSpDpkRmH9KZEewskD7p9Ugk98w4yMAgYJAuL5zmLHmpQGRwgT26b9Mgn1wc",
  "key3": "4EnLzNDE9dx1gQmyHqJn72GQjSCZ24AbqyjdFu6XeUtKVhepXoZr7dWFLBc4y6UnTTqKBvvYbs3QnF7JbQG8Rrqv",
  "key4": "ADpEvPWzaXe5hpAgpxioiuRDmqeDf7YxJs7CWm9itF54rnXfbzZkwYA4BDKQfazCqHDBvBC8YXMfFSwMpv99auq",
  "key5": "6fYePC42uYoHPmitF4bhAz2HHsphrQXrSW9wgwEYMCnumanAWhWTXEeHYZWKBHewMmhjm7XRSHpCZU4ZmdtX29E",
  "key6": "5GagXGrxPEHWCBrfdSSeH2ZwZdJwhM1g286FdMGrj9jsvx4Ya7CmPwZBHqVqHbaQRkYpUvtcqFHMPHZvy8VzDyby",
  "key7": "dMDV8n8y4pfaPKuDw3pXyoL2HhMtCcpKyDYBjuSnRbCnjr4fpJqKbMW34U3Lwd2awTnBWQgJ2eWoFxMrzRcCgMJ",
  "key8": "5hXPR1RndiUgpDsHkbhr5VutV5bG6ApGGGzwcypqFgGFB5r4XE2C4z52eAUZxFwTK2BguWz9CKauhdrnpURU53xr",
  "key9": "2k8Xr766FwvQEskb6KwqDaw2dS4sHyRfCTRkvTfBad34R8VzAuVyGpfP3Qu3bNgx2Mx9YScvaFViD7wokjaPgv5N",
  "key10": "zEtAGrLocePqBrPQWSJzADhCr5GNEQFfvxKYy6S1p7uadXM64uNXyn11KJF9ae1qfioXasK7XpbxRknp4a8nkf5",
  "key11": "3UWVmbYf1RCJRhrH6TKRiwjdSyGyfUAL8uDyxy4BWFrM7gvRMxDYSsBbSDrmWvcS8Ywnt6oaR9a1GwmR3EWNZrxH",
  "key12": "Ydmt6RYf77vG2WBA6NMaMzXRgPARtW6K3M5dDvfEfbEiS6gXEDwAZUcsA9R85hb34obh4dXemfgvTnAY9rzqC71",
  "key13": "3Co21gx1q8vo5k5CxE7BdjU64zxcyWbquShjU8WUQaNaRugGoUJMK87V9eh6WDqei3y19DYrf2MJZ2F1LK9priZG",
  "key14": "5uHmgFvUzy6hySvB5NYEqo73DfNgau12BsZrSu2Y39Ah5ciLjCAqq2s8eYS26nbq7uUf32YocMBaTggxcue3Y3KE",
  "key15": "U7FmCmEtWaq6CHzm4KKJA83xiKDQxWF3BaceqmEUwmUC6rneSSpohPQYYRZUrMe3qNZHza2Sq5Y3E6mmUWzkznp",
  "key16": "675Eyugu5MjtyKh4dh8AU5zYRE8wXYpRsERtp13846xShk9uUwa8FRWU8oaDue5YBNi3da3XUF14GzzHEsE1Pzro",
  "key17": "2fs4sbCqS71V5jMmYwAiRdJfiQ5DhNzAfuUfcWWCah4gokGzVm8JWZ7aR63oXENmDHCMWzTfavKKoJov2VAEAvBs",
  "key18": "5Y36Y4a3k2jEhC2ufrKAGvtjznLKjd2CpyqeFUXkSZY8pYwL86LKAkfCpMFCUNJhWYzEDse612oefNJzcPHZUPrx",
  "key19": "9RcHcTiVTCrmtbDvmDkURkjMFx8KsXSd6fnt53Ephy3BD5XWj1mAk3xP3dHvZ3Yj97Jg6CAdNdA3VWFG23yLnYp",
  "key20": "4VoEvyv2VSF9CUHoEqNckPdcqKuMqHxxP4mj5dvgndkqRX6X6i8Ge6Wo3sy3hieYAGJbeFDE67nYwDYzSFhzs27p",
  "key21": "4PM91ZauLPWHZy8wWHsoMYX6Ua3zRKx6R8Rsq2KH2YKe1oeYwnUXnq9r9FrcLPGKBR9BZkK8KVixUZquP4XanPdm",
  "key22": "2R1LKNjA2fq4F7iLyorYE3VqJNiFLfqCth5w31YJdvWz9Pppbu6mxCw2HXgBiRHs1hGt8v19hD3kmViYyRUNiLWo",
  "key23": "4LQh81k4pEVWB8APgwpnsiufp1CswEJT16uXHLvwH68LpHxcqxXDBVh2xEP1aKrVeRe8cXrBnypzxQQuFiFAmd6J",
  "key24": "G9cGZjNfBodpoDJQ1qQtN7GGBDAgAdzmNRTDYyyUbdfYSJ5XzwQJZ9KqwzydG1eaaMLYTBw44MxAHPpKbZ2fbUW",
  "key25": "tb7AozwBJweL4bnVfNGXt4Dh7pYM2E1c69yg6585F4vN3bDvyL37Y9Xv4hg1fyrBcM5XgKFRZT7xQytGGbohu6C",
  "key26": "2USyGBXpUXpnGMzCd6mb9YP8hGsZEZgP2X7PwxAPnVdXVNBe9gi1Rae4smTkQEN5aJRLRVbMCJeDAdvBkoJBjenU",
  "key27": "3eRFj7iUg32Q7zwed2diaSEuA7DTdkTHFz9zbUWoZ5HGvSmdDYD9MKR3g4vo8qsdhiAQqjqvWtrEGDqtLQ9AUiYk"
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
