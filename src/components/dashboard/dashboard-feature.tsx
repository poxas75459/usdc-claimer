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
    "Ni7keNVcSXdkLPREnVkfEWwTcP4LDneQkvwzWK2SEUqPqKbk4kMjvXDxYXLp6LpsFvL5jqAbYEL4uhuKQTRP5RP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "574hEugYdRoBopdJTGHCC4nJsupD7qPBGrPxs5VunyeiRGGGu9X2F7CiqAHPawjqw7hPJDACsuVCTbYTBf9gwFY9",
  "key1": "58JnqRZJ7H3MCNq58DnMpXFsPHdruz5BawtrNQBmAkZ8Mw6umEtHsmVYqnRuYLZXL8BPxDe8Lff4WAmY4Nt1qbEU",
  "key2": "3gfMd8aBHNawnKwZMbAcD3eMVPT7KaxJyxySorH9bxCLXTRQbiwqaqJdsHPXTnUmXnyE4Ht3FZKveomioMzFfG4H",
  "key3": "3eH7AawQXttAgWc7QcVpM3NAydJg1DUkMM7pAEL832AuNyqJ7bKpKVT2Rq5HBfWxj1M1vzuUh2mAvjb8P1ZqpHtu",
  "key4": "sRbbWYy49ogvJX4AnWwpU7aSEAQWjmnJ5RAhr3XLjLxrqbMsxFjs2ZSbk6jYxt2mQ7VZVs8EGTCVHo4xCfiStWp",
  "key5": "4ertW63CX7bkTKeXgVBz5wpR9xYvUpieM4fnUNi6hMkCoSyhuyPhHY5PVDbDuecb92yQ5uC6FPwyqYg2sevpPNJu",
  "key6": "GoNvUS9tjuiVFuLfjTDzM2A4FcyhfTKks6RqhEtJjrkJWNmPH6agEkAz2G2QEqX2qk5An5UtaiznxbEwneJC1y4",
  "key7": "2a3SDL5qeDYZVmciANQ2m2JFHxAdM2g8u4oZX23TsSTzs5SayGhdUtEqey2ohcxXmDpiRfL1dgW86ZFMcyGNMNhf",
  "key8": "UABvC2ttVp3ps1QYfWZHMpKpxV9mmkpWcKS9xsnBmk59C4ahnMZXvAWy3P8kkk2bXB5aEHWk5jp8VFXX5LvDbv5",
  "key9": "5DnXYveMtJJ3fPAknw6yoSTG3WBxjDtBiC2NBnAS9oLsRg3ecSi56XaB44vSHsKLwfQ3ThpqqL1KEZUjw8uxRHVF",
  "key10": "3pEGgr9ru2h4YLknr1F7LkbszAfR6VDDxFui3CHtQgmuWMLy3APReByoXcEHsgEc1jVHicWKo4fXr94Uschhhrh2",
  "key11": "5eyoVAqR67Qkz2pcWGR8TokqXdx9G5qTpitvPYtmDBMeKDdQ42vYp4gudsrh91nWH3sLZAE7zZSyY3cBiLbHrof5",
  "key12": "3k4gopuEUKT8hCoTXUNYEyERRQ7kFnE1ZVYCAuEdk9Wso3y1Ek9CFNRGZAuVUr3nvzXZ6SNfDFcPM4ePidpMKckU",
  "key13": "5Sb9xtJgrVnPUNAjwxkEdD3rZ2QwSQrJz2aPHip41TthuoHHS1KMiAZUiHa8ReSD69WW44LbV71XgTDkbaNEBrEd",
  "key14": "oUrzktiTRQbRCi9hWHX5kvkfnkGhkEGeiCytiJadsjratvzjnfpNp5u4kG6E5FUPkjzfi78frn1PBwJD2bQqqHV",
  "key15": "4mmjCE6jexta1YLzt7298S3YWaWyZbpSQ1ZEAcCK38zHgmD5w2QMT64r1uVQtGieuGhxhrgjybKShBkcNB4H4GUT",
  "key16": "Ro2HH55jr1gzPUToEt1kY37zVPyUuXiDnTUhXwLYZTeif7qAG1TwERNrCgW6D1caNaY4vFzsPLLGJnU763JzYJB",
  "key17": "5T6JMKyKGs9zbQ7nKRtzPvvWD9YPX6fqCq89bnAnGWEcpKLU7CEq4D71rPScQFDFVknef5RmzjcpB1aAJJ3nmgNH",
  "key18": "2R1pPcwBZhEqnwPphm9ae1hc5isVKptVwQEmvXJE6qhkqUZuLHQLoPhELkq7wYbG6YbTjWTX1ciRhMvZHqnJV5MY",
  "key19": "4s2DeX59Pnp7vdyVuUrUv53Dbh1APyu6zc8Rzs4eY3VJMZVdmyAqgN6z3eJo5iY6LnHWBbUrJRYCwvvoYFyQ1GJ7",
  "key20": "4SFUAZ1Y7TA4t3Qfkey8Mx8rbScmZzkmXGTedUxcbMmMLWVrNp1guQrjmjQAdCeDeubUYdy1uomX4mpBYzkaZoA4",
  "key21": "xj37BhRxBd2NMUXbiwqdXdfJJ2XS14gk1626Z7sWBpEoGumNoAX4rryzPijifo9BxkoVwZ6oZ1xLxNej18SDmpu",
  "key22": "5HhR3dRksxEJxNV1KiR43GfApTRHypWgV7HuYnUxQ1hxgfVmjG2ahNPCuozW9mQaPRAzSThHB8ofuXDcg2AgEi3i",
  "key23": "UaFtqXcKBHjHsErMDkCURP381ATSCXJcSAuBwCrnFQJgJpViJppwRwurT6APjXeHyap1o9vVpZaQxniXhbnuQi3",
  "key24": "4VcSqBK9iCaRfRTEPGVBBKsZpHB9sbc2B2bqc2cG1eEjNhfmM8negDLfJNtF1WCMizunoUhu2Lvt4C7iWsxgTwAS",
  "key25": "5gDejqFF7mDk55wF4jBUPz75Jcp9pLAh8VHo3uCjz7Zey7LYgMSHWmLoCNNQ9Uqeya8RohDR92GbjX6SBDtnBgjH",
  "key26": "2Qv9WVq2CdiocRnAswQW1by7s2eTNo6KrbcVGzF4fpXaeigPqHjiWc3RPSiwJDcTzWrtxNkgyvyrwDDThvbXaFU7",
  "key27": "2ZMd8MZq2pU7tk3AVJ4DmfNowytEZbU8BwW7tsUJN1NuDyTd9SeJn3LaVpChhRTzkPrVHa7BcEcjX4VfeN2G8G5G",
  "key28": "5x8QpCvxQmJGntWk9ajJHmZkvptUYP8tFo2FUKw8gYD6gYvHFwCgv8LxvwN2uvCMNZLi9D4CiknLQnM41gdUqoJK",
  "key29": "22NxeT8ZR8YfMc57fpwgT93akbKkdqD7YpUG729fLWmvUxNsHpCFV7mi8EWaXqUczittsgMH65jwXd9iNyAhuTgh",
  "key30": "AtYvNADxMLKcra6GWf972EEkhxgb49NNGpk5V5WR6ggUaqtsnZtCNfZEXaVa9RxCrgrf2dwaQdadzgDFSoXDkZw",
  "key31": "4W7nSRwaWkEAoy5qaCbicScb72vuF1L7pgBmL68a1KfRX4Y2TQsFHaBjn3dHFBmLfbbLrCjYQoHFKAKf1oQVQWBX",
  "key32": "MZp97DhjyH7YAzW2cMUdMHutf6HRs9UoQi7K3A8ivFpfosR128gJy4e8tX5QH1pN5kEisQi47Ms2ebSXmDteSBy",
  "key33": "571HU7zzUf1sQHhMiXkpEmsTF3rV4ufpEVcM3aBQqmC2yLZsoNurEcF3r1Pd87AYwV6RzmRw2o9peZx7gUWyYEC5",
  "key34": "2hvi4o79z1AGogmdAF2CnqyunRmuyf75hprKqzx2tCZLN8gWprn6kMcAaRbBhU71CxsFvJqnMs31LZmrN1UdGgyY",
  "key35": "vTZM88gJDn7S6riM6hsx6q3PXPKUwJLtU8tfuztJmCVPvrXuMWB3sjUhZTFSYpWHcbHR4xuSD4h8YqX9sDRhhRy",
  "key36": "qr3udLo39uEBaiep4TRqozsxeNCPomf42zPkdGsEN6UH1Q4iTMjvagVQkGs8CwZn3FdDiLG7xH1mzVjdi5QYtF1",
  "key37": "5QQPNH2ZcbNomNxsvZpmqKjMmWkzbt8NUoTqG9AUycpqpHXA9arQvQp8FfeJkx9dCpUBG3dH76jpe2UW2ba4rd5B",
  "key38": "7n2zZtgVjP7HpGaC9ryYA8ySpLxkopG71K1siSytr9fR3mSwgDieTHSu9k9K1mqPnQ7t9BrmHMTbcUaaDuPsU7P"
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
