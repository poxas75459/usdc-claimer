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
    "2JLMzbCBsMH2Jci34qSFC48DBH7wBvvgaQEtcmpCH5fG7tCn9Erfs7byKvwZpB8tkakFc8472yTLsUBJHArKJgg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SNFySEUBh7iywd1ipoiNBpZABL84JvpaKH3Y3pVMfQnjsvgrG65jXR6NUijVPV5A5NNjJEAaG2y2cxpGgLdZHuL",
  "key1": "3tmpGHw7p8R6LNFcFRx7hwNUgCK35rBxsJ5BUTxNiYoHVG5wMrEMxUNcmpgnLWRPoFfXiKhPZ9o8RWdc4d6MvDHE",
  "key2": "4EaoJ71JmKiyfV3BpRdapNKJGtYq6reiiBAGC2z6UrYTTpqxoN73anowR3BBP6sqWYfWTgEL7MJ547XKc498co4a",
  "key3": "3AF7e4f6VvwmrDA2UuZnCY868WF3ejHbAArY9AM5mdpRYroYo3uk7reTzxXe2k4AwGggCYvuw3bJE8U2A9N6a4KY",
  "key4": "4hieubECBc8PjJEegvZiYE4yf411c6C5G5Cw7XMZiDY7WFn2QE7sEktSjbAeTpXTyo9R9G8oTAVYdsp19AwZfTVm",
  "key5": "3eacfsLTp7HuzKJQBh6S5Y6BwwcY3qFPxA44XNvh8oUX2ab62R2pUdxgPQ5rpNC7mJoSjdiYviSap6HSQECMs3ez",
  "key6": "sv7NWUxUHcGVztAbnRon3JV7BbwDMBmPh2iSVuppjYDyiFRpeUnQGcRxoSo6eh5PywaJH63VWCwt24q7AcqqAtF",
  "key7": "3iLbPbGRw2ELtNBZatVd3Vs48pnrhvHZJNK8LFh1wEiMMTXafTzUA2EoWcCDSAjtfCA7RS92rUVgTwbqE7kJjCBE",
  "key8": "WMuThHXLEg9CAjSnhrx7DqFgMhE85DimTgsbJmLcyfZVtmc2umsz2LGwREnXFW1ViGHn6KLjKWEVMWAYibPS2pr",
  "key9": "33irtiUjCyDSk5Utxhcv5s6RZ9uJ42RKDzRqxP8km4hDaZQmqxwGDwmRGbScR9gN5YmgBnDYxihcrCKGi5fqzABk",
  "key10": "k3YjgpmPSfvnpboW4tduyBg3TrKQt7fMKRJe8hbHSoBjacHi5vyLyDrLS16fd5AmnGX2hizeKZPSVT39VT8GGR1",
  "key11": "2XniNon7fjy4qAc4dkJv9oHV4MikyMQw5j5ocPJEkEsDHYQcDvrsEc1BYU7Ch3BUkaQGinfEZU86mTHQgNPGzzY2",
  "key12": "51HCJQSNga1KPqe51a5j4brGLjgjAM7NrWtpnvRFRWpGc5oCE965eJbeo5hUnmU9Lw6FfG5wd4fH8SfeznHZWPVC",
  "key13": "3H8cHWYK2akXfPzpehjqRRemUBvtGLmMWUuVDySAmEc3TE8yevfViozwJAcJFw7bT2S3yJo1p2eDE3DrHtygV71V",
  "key14": "2q5tBTWGJRcHpktKZe3kdVbAwoTYp4krgQsa3GXhxY2NhnarXK45QuE4ni3p8rwBBe3ewz5LK95pCQMGzguh68Z6",
  "key15": "jN9gjEmjkAVYGdyR3MJGVyaZJprjLWViy5W21zBLRbvsk9RHsEGWoVuxTt71vFh2FWso2Xyyt962dyQwzi8Y4zR",
  "key16": "26wCmqwZ1bjm9jhDg5yykSZUAWSnwp48Gk4xGtoe6BPUfpeCyrUdFGHNQFUdjbPLNYnPkGT7kGrgL8b6Mkq7L3kT",
  "key17": "4gEhH5yK7L1BmbBPQk9opEzVzp7t2kQWRVTYyVkevPQYBLzBsLe6jFkXuWdp14vb1aF19Qnv4mG8tQLvc3cchXrX",
  "key18": "FawhjxVf9i8EKxWYgDoH2YUtXKBoDsTsLMvNiYCP39URhkYqsZmz2JPfwG3TCgvNV2VfVvxBSnLZFjLY1vqUNDZ",
  "key19": "4K67bwQfggwS1yZ8EeczA36gwNcQXPvbgYwFzk2MwJkVKUGHdxRApnzLTtqfLczWf7RihpWtkStb2FVjMzCtJHa9",
  "key20": "3M94pz2zKh7MhxDWPdrH6vVkgiZ2mWyRMvTvCXcbWkULgy1bjMdMuzdf8w3DvFx1ogiPuun5LsDJv4ezvES1VxjK",
  "key21": "LtSR7txLrFs8wzks6KQv1mzH639rSsYBymQks4FqusjdcMRwAGHE784myLzuZ6u6AHdZQ24z7c5QLu6QhZJsWwq",
  "key22": "58hjNCxZE6e9Eo9M5JLM58PHhBCwd7y49CbmdJPxq8iidm6x9pjPLsX1KfqTJiojoX5zqq4ybt3YqUEL3SCG3kho",
  "key23": "8bmbNUjMtza4XHesupNTU8ES5TdPui1V9eGtgT8kv4PEZo3mydJBjgu5yXjvu3bnAwSLWbtPEFohpJa4MPM9gfp",
  "key24": "4TXoz9aoNErtH2n2pccvDFyp9H35Xs6yuJaWA9rojzYrLUmWXvbpQ8svcmftnGgf4psnvyMwJhQgbDvv7rZiVKdD",
  "key25": "5fttt4dfUGBjT4W6XuZKsSxTdvw6ueWmZbeiEbHL8YeHJvN9ZMhFwosHg5k5PFMnxoabqy9LMP8EaAYvbWwKx3Dq",
  "key26": "4V9NEFtGyMCUq1EedxzqtoEyhaPz4qN9xczQRWyHZy3MtYijyKmV3LVwiKs6AAKhPi8A79TPJKWmTiQnHfP7iWHb",
  "key27": "3sTWaiALmXviXKShNBnTzPH7oCxEF33kpGTwrYntm6dFEgTJheWEyonHmg83J3tCHFDyxRQjVmsSMxAnwWDKFCN2",
  "key28": "3tV45PgXho1Ck8cR9CZCNKuVLLqUqiBxyqJPyoUorFky9m1hWtUCjw3BibDePv8VdZzZ6XodzTWnNyyC7d6VADx2",
  "key29": "56z8J1EhKcbwyReJDyJxj5wDzvYsJiLMWpetKUVq5EGuRGAVy5tsaUpSKTFZan92fEsDTU7yWvhu4ju5uGR1rqky",
  "key30": "5rg9SddUCtZABpxC2Ey4fLjRjbWXYUnFrrM8jc7drAJQKigbDMTGSi754W3Q6QvuCX7V31J667yydQ6C38s1P8NK",
  "key31": "21nxAQUVNWUYkrUsHSJdeKnw7Sgk56WcHegFTrfzJ7hJqW8fDePpMMtS4m56rN66GcVBVT4RmYg8CGsa4qV5wMd3",
  "key32": "5XUi1aZWGnH6GwhUUmXDykX4RD16m27jxZMZKNXVYNTqjHgPLvEZDLDkgJyHBGv4eWw6iwrDaYp4exAinCFrKmc8",
  "key33": "2LBpt74SNq7djDaCAp2gMUyc1iTyG5CtHfNxSovdxgPAzTb5hdszRHMmxYeM1pYaBHrwdk6QKTZZjCh5ZsNKHYez",
  "key34": "5YMRYY2WRbxJ9pcgK9riC323i4nEX13YADHN2ZaNZfhx97SzDAHQn3s2dHem3B71DtRd2UeLaT1AxHfNc44rqzBf",
  "key35": "5TFFyN5RPmTQcqLr2P49uHCtvDfbXZnojXAGtEDVMjo4D1UQp2FGwu6jonmHriHSyjqRGCbLTsLXKftRTVWgh5Ty",
  "key36": "3iAfHEKYdQvyhaqyRLUhqUDrQy8g8Hzj4odhhJ2LPvK8DPNmMMffeY9RLQVNDNBvrbVN5fsnQn4RdkraSJXksMhN",
  "key37": "4m8fPrP4LsKXNNRMPLXadJFAFFuB1FHRYFjwDrxr3bxYd7PJmXLpXXCEt4y2hSvGbxjZ3qeVZkHVpSE49eBkjQeh",
  "key38": "33av5nvztqthVjkfQCtvXq96sm8rqPT3iKBK4T6aNZeDU8HeSx2gfTnz4eg2oZMLHb148of9YqdGDQQSX7U5k7Xq",
  "key39": "4TE5xtiVEe1Y7Pa5wb41LN1rLyTga126cvRtazRtA99SvuPjqJW4bxeYRQLz2sxPe6eWfTJa4zohAYEfsfwpswRy",
  "key40": "56TR8qSHar4kKSTEyCgjdHSRffXRcAfXmkSFodGLmVHnsPR1UcALu3juZUMg3v3FQRgTutuJUzMh7tdZrNoJ8prC"
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
