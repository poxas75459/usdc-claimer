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
    "ZbYnLqdVygABCxvLkgW9ktfnqFfuyTE8dQYneJJ9J8QucrDiCi51sbPnSeNQYd1dtzyBQarcf2J8D6tTpbfdcB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gf3SD88NZ5MBjE2akkKGar5jPBFmYnaRxf3rUxttPv9wQKJRYaLRDi6jvUVTHJs8JkoPPehgCaPHymW6pfn6hUd",
  "key1": "5VXYsPLtjSFrmUsmKzvgsgFcDdfZPS4oAfg7iSGcHvsEgfoEwVtJCrockzzmXvZp2E8D97zejvMMt6akvLWVyjVu",
  "key2": "52QCbeLkMegwZV7Zw2eDxAZEz6uBu7yt7CjWkuEZaKFiDQnkfRaD4qocbvxzjdFecj64Nng6i1ZZKHyw7jsuBS7H",
  "key3": "8PHz5CGJTr4wtk9XUcA1yLyidz5ckcdcTqnqfc4kCB3ssn6YQsrSxbiec9dAuteyMXG5mnGnDSFTvztV5qifQJu",
  "key4": "4KQa9nvsaMF1Zf5MgvbR1Zh8guwEpVjhdKcDyxBUtoVAKS5JWVASMMbmkDVYeJHoFV4xtzafTETDwFb26KuvXB8a",
  "key5": "3b44ySerwgCSxabCQ2UiZdRYhHSCKe6B31DBTzeqQN46ENqeQpV1n16MEdRky8hBjTJxJNXrgTKFA8wnWURhKCsk",
  "key6": "2MoAQUEEtCi5sCWG3s4z56LVcxbh2GWLtEgwRQzCGQmBcKafGhLnjChpEH7bt23T95bia38LbzBhjiq8rwQi8bTV",
  "key7": "42gfpnbjbg6xJzLkMsP7bhLpKrrqMKgCs96LazDCXWScwpVby1gv2vBJsV5ho8RggvasC2z7NcdqVf2yngM8safe",
  "key8": "5dX98UAw8sQGxjctGhAPbGm6UBbHJBELZJogZL9ALhcx1DwjByQ9Zy6H1RDsDF3xxrSge1JB8yP292k6U96BoFEA",
  "key9": "2N9qst9rWdk5VRs44VaLxaG3EHjtCiuify3AvnPGrRC1AUK1eJa9zbSCpTDzF7JcbFxFbMScw9FBxGXoLziKoCzJ",
  "key10": "BeAXtFXGVbLMdF9Tv1Jo3ndeWyY3x9PdK5omRkH9HdbES914s5yNPPn1PL4JXzUh16Jwwi5Ag8w1aWQS3w9RQzQ",
  "key11": "29rfXM3NzfuQWxVY4g2Fsx6TSH6pCKZHsiwwhn1Vcx9mDXFH8YZEYNneQXRQH5oNnhJKKduA6hPs61exT1B65PMx",
  "key12": "34aAHxYB3mTLf8WWxQPvu44tUENCD4KjE9WqxHoM2HLdxvGCniBJNw361a3h3pVHnG5HWjuvmBXXLHqATni75heE",
  "key13": "21srE1pQ1bMuLXjeBqpubVBWv3kb943nsDHwXcqP9zZwRUFRzErSFRgvPTv4XhQQbGxLUQhufGcFUvr4qMkg4NLY",
  "key14": "3sLExv553BGhe4mDx3N9skRrLMVEAGFuYefB3t6rcB7y3iMVJmDyBSmjDNKLxGoc2LFAMACGxsYraokPLahoEiDt",
  "key15": "9HJkUnuu3ySQQPVDEUeMJh4yjNNdZDtkShJEzXXrzpuFsmG2DH4tTDpACJmwPNULCCsJDoXhEEWnm5JVRMekvSn",
  "key16": "4hot5RWUtPXLv8jh8BwG2bGE5UmUqqDBxi8rf2Mxvmn6VKxbQ3wnxNiq1hMVYkhEUYWLkUfbDpLAq2jBWMvuixGi",
  "key17": "Z8mEs17Ss3CGXMmdQwosddcAo8AWcPRLWniBJ456KVgkfa7AVsp7VD4nTjTbS52LzSpSvVjzuu7Aq4bZoRqrXtk",
  "key18": "32Y416Xpck7TxX1BcqXjJ2jRJ7QTsiz1TXtDKkZCAei75vw9R323H8gqmMtrc1FUc8Bdywxi11hqBba9JsBXUEZh",
  "key19": "4U762JddGrPhncL4krM9M8PbhYgu2toAorS8k5ktNMHU86paHKNGVBTAzQ94PNLuPvdQAibMRBXUQ5eNHaM2GvVn",
  "key20": "5tWMBT7A1Ze4C251vV9YK4mmNEUKBCUhMTpWfrX6uCGcwj6bBs8B5ZNJpmpUQbrdMMVq5hdKh7vPTqjsn5t6nuTe",
  "key21": "2ooVC6B4H36aKZccaTUM4BJQbp5oqmQ3E8jsNoJaVBUGRhey4YFUrr54yREWA5ZuCcBjjfQsuZTp3pgD3LdBbw6j",
  "key22": "a68BLUPAqgPfwWd2K4HgMREG1nGuZhNdHTiRzsd2VhZrHp3DAYM7MjdQeqGuTaVZH7UA8koKCpeyzofQvaJriWD",
  "key23": "49WLA1eASGAgxYSMaLfoKb18aEBEiuj7XdX8LQS8vhTuidSMR1ihG7z6mQa8ev8w6xtUpDpFrCvidHWQ2S4WSGKR",
  "key24": "5m9GgTLpuhbhXNDzzAx72bCK8Aet2oDLUbJT4iHXWgQdQxovgcDYYMRNUvXDVGH2z1WLsXoycqfd5iUpXjWB67RB",
  "key25": "2HPHihvAF5cm3U555i1hFfk4HdvrQpuRv2wA6JWSDQmpdy4JrzhDA6LegkfC72FYPHFwUTVFoGG42t3ZxL4G91eP",
  "key26": "569ccY7swpfr5sBmVMzPLrbmFJFev152oBF8MNyBfzHYt9aMi7g4X5dNimXgHRtdMnS4jtvzzUmzi7we1QQQvp6Y",
  "key27": "TGkXVnp7NiPCFLvqXXFJ9Z59sJrbxj4ns1W91aKx24J73bm6G6fR5LpjWq4X3XVnSi4PAGJQXAXxbYCwuqr2TUT",
  "key28": "QAahcwhEKmTbrq4bZKHzAG5kKUUVx8wcMKaL618BkvQzTAm3nafatd1gsGoXZ7bzjga8znFirRW6GhaBS5QXnKc",
  "key29": "3ajwX1rxJnjrUVXQw4BN2cHr8ViaMyt18xQTy7mqn5AGxDVENcswNTnumbyFkTG6d6u9ZJyJPJTv1QYJuNbG2fcG",
  "key30": "3Dh59cmuCmRwpBHKLHeVgsEkZSLc6fBP3fksuTTKLkXTQwt2E2aEEn7Jnoqcuhxs76BY3aZzNLBDAKz5RjaEfN2V",
  "key31": "32z924EtA4kYcbpCyxYMTbNz1Bsdkk9UdsntRUsoFKBd1QKRy8r6UxrpWuq8E5mpgHsjof1Qt4h8nG7PrbTEij9j",
  "key32": "4kiJVr7YXU49d7FH6AD5R1E2ZtgXheNh6jg5Mx7JaMm2Sp3MYA9gNT3hVcQi2K9NLDqmf6oP7yB2hNtn7u2JtGVg",
  "key33": "4pGgRhdD5uhBbCK8oUv59Nnz9DhgjG73DRVZFNZnKMwJY8rtUCakPBQQNbKUHRc7ZFQTqBppw2ujUTAUZ3926Ay4",
  "key34": "UsNXncmrLYGV7hEgQjtXaMnq55sQUPgbrjZZ7SKN6BWwM6euUuTTcLgLH58kGDRajpMPAdd4g47PThfKTEnD3U2",
  "key35": "23FvoEqvhxnA64sZJAMRB4vUgvWZSvg3hXoNhwfHCdqSHgwu1HDa6QWDZwPnmWuaaKp83Pm8bYgHUDNJ64wPjcDo",
  "key36": "SCdHRNgihp5io1G3LJBQezdPaYrtoo8EKSVufHphmMWw1hjvGbrUv3eGfTaSnM8YjfrT9HsgPciE1eRWxABmApf",
  "key37": "2AKJFWReeHB3TemrPwf3WzcGxYHoLyAeX7WVxYHRVmy1WCpTQmQwupDfNXmXnB1jE5RUp6EwAe34hTEwfM6BCJh2"
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
