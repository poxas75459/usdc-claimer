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
    "5ddVJdAt6rxYQge5aJcGQR47A9b8DcUjap1isE2sUAne3jhYUQpmefQjjtznn4GbPz9BLqyMpKwwPZCJYU2AZp2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qZcCSPgbJJJSQsxRhXG777hnAFRUvbrJ4tnL9nggrsBrGQMvqvqKNXWeMjZ8WFC1J2mtoQ3qRrkjiRpHbB88Gas",
  "key1": "c85gtdi9GAjqziCucNxsZbPN5tShMFZXxctGQaFcBB1gpEraJgtk4kCweRy8aXLVxoR9i17aKCR9pTB6nKEfYg1",
  "key2": "56Xmd2hmAqPsuXbMWLQh57ijjJrHbGh4RNPCUR5sn5j4itPEbC35Bo3tqHLT5wUAGWU5Zs7YUPgg4FqebLnhr3NZ",
  "key3": "22PaaaURG8PXYx4Mm1SsmGfo1GyxTRW6g3hbwhVUrVYkVB89bVkQVfHP1KuXSWmAsR6qe4knYG2waCxvjgzyHmnS",
  "key4": "L8pAW1oWRXm5FnLdkkTWTvaT29NfascaVgTnWgaquKBpYnQgtc8iJUTdkvkNzpC6XNfqtpWP332fiFicM97nfW1",
  "key5": "4BXUhrpAjZWRk7qFek15cVWMfxZ3c8SKh5PoA6fcywVAYhKMwg9WWoD8y7LZhiQtjAjUmxyL5LT2j4cUSsMEjAVF",
  "key6": "52iEG46SN9NmLtBcaSQ9Fct8kYXKN5kGn9d7suiNB3e9CTE7gbVfF6xBraE2FBjr8VYdcDfgN7Pof6bLDKAtLni2",
  "key7": "3C8fX52sYuhKR8ApdtDdrYd7ZY2wuSaafNV4ZtEwon3ScWiBRzBFnW7dhmaCPrpGpWhfDrgYQj5ukmwaEyXGgBeZ",
  "key8": "3XQs84EtShtnKSw96rV8aq8iUzpYfcKvAGVpYBYX5QAtzQ43AZ1uhvwVq3DG33SACzQVPbWyT3nedW9Cp46K9vqb",
  "key9": "63C4nE6LXCFvJVtumv8U4XgjTpJZb7x6zsTYRTnnonrf8BzgTRSNqow9F4rKUNdBF3tXpkbRUnucVSWSifcJckgr",
  "key10": "5ZbJspaQj4TmWhnvsKRtwr2hYBwQ9JmvJDTSYGuaHKq2qjqQQS9Dgw3Vir6pnLQujbcY6Ekn5WhX2F8nTwvzoW9a",
  "key11": "41k6sCdN8MSpogdLGHT6SiwLmaY9V7in1iExXvT3ub2bbCE997LVknQVXg33JMq3akpd5nTxGHQdM49yjFWnr9jS",
  "key12": "3MdqB7jZoPySZrqv5QjDuiLm2Q1qpypMEMzTzgpgbA9SFCmKqa1XyxmmLgrDVhSrdGHa6dzotEN5TKBzks1Lb3WD",
  "key13": "S2ungbrkuPvFShHCYUFskLRgSt8yiDP9MXVNAZYEkwTsm1BCqCK1J7kk2m52eg6U8VCWAfE2YutK5oazH7TTmyJ",
  "key14": "4NJRAEFMQVCDKzaCDXWYYkfEHDdCuSfQ5stusoA4uW7yWDo5pk3vsDpnQNMHQs3MGen3zyamNiRwuemKP1TEcuPv",
  "key15": "2mp66hPVw9axrA8czNhbwgciSrrpGoZb7twY5EdF8LgCox9GTcSh2mfzdZys813zndK9AAo2gbwxZBheqieB2GPn",
  "key16": "41GwY7Eax34V5E1rAxHjAwXyvYA6NdaCFG2W3sXX3q2775otGoBRNMdcv4HM5tJpZpwnmGrVSbmbXntyn6EefSL6",
  "key17": "4AfnVA18CmGrdtx6JYgTjVtBk9jfQUbwa58tsv9Snsr2zyoHfhF3kFm85RVNWk5s2exrsJnCFszxJhbyVoxFxNKS",
  "key18": "3SA6VRwKokL7YRJ5PfM9uZzMRNRxoK43rwpPaLHABMi5LvfeKuFa9qEuDGyq1KcLEw9K1945ZACBEvYp3iWUNmz1",
  "key19": "3EFU1Lb2w3tA7U4SbiNp55wfPCQfFGPLDEHNCWWsactvtap3SAUcrrhVHRP2EKN1CKeBNKcTLpnGN3iC4nA8j1hp",
  "key20": "3PSfWGV36CzhQ6NorBZt43av53G5MBeEibfUWiRSAuotCPM86KixhUMv139CA5LZkNeqKSH9Hb7jkC4wFitqGpzm",
  "key21": "5wFkjsFGqvnXBBZcRfgkpYYuywoK1ud379TJDJdpxjR6KoLz6QS17FvbmRC5XmapHcVgWqGUV9qqmTsBLQR15d3c",
  "key22": "2c7rsQLzvxk5B5biQ3PgvZoZuueB7KRzT9KYb1KyoAA37TVXXjSiTUdVEMaVb4GxQ7YTbPgc4YaN3gXC2ETn6pwp",
  "key23": "5KHNRP6a9nrNGPWweWEuNv6UpA4txr7UX6rG8HH4HopiTarp2CvxaHtm2ez8ttpqtgTKZJLeiHJUZYCjuxYquC4k",
  "key24": "Dp4yo4X1UpWcdn9rnVywq9PCmn4VzTYbwAzEZPjeA8VLoYjDi18iBZbrWNW1fyaDQoKkAFopdm2mW62GET7fBkH",
  "key25": "4HUQq7cCvwJwkbvV82MHzHPgdzkxuHT1sc6EGFz1qxnntBSVaRFEcJdmep55jeoeozyscBozUPWarbTfaB9U8wzz",
  "key26": "4YGZwaGUMQ4uyvDtmqcvwCquq8v3QyPPSra8tJtQcze4fAo3pJfzDvtghSh565EemYcUy9iGG83sXJwzTRRzyxpp",
  "key27": "4JAxkv8ahsz3Ytt5w6TbG9WeWUsXE1fTnHmy5NBQtfsJFVWB2vhq2xA2HRHPMeXt3eWSEMV1aa1GHi8bzfduPucL",
  "key28": "4bbgnB163CbYrG3zJwVSJgTs5D9duE25gE9fJ6uJTDviytMoE5Q8ZDizE7XDhrDNpep97X4xEmAtpNuLSq47QShn",
  "key29": "5aTECgRMB4Fvc7kyRCP64odFU7eZqYWxPALvcwanEf2wRHW82UAu5HfKXPCpj5uJghqSN9AcFQPTG4AxeboGgn7C",
  "key30": "2PEBsPEz7A9d372Q29TwcWdwbYeTVVintzsSDgSwYtAifPXHJWMmXbWrKhqNaieS3Rb6viLaMyGaH769jcWogVoJ",
  "key31": "3sN5UD3Govd1hrBfXRrt8jnrCmW9V3ow9trPKDVcdLEyHLgMZqw9RPe4Y6v3caCGJ1VaqiEbmG5fQEfT2uTomnfo",
  "key32": "4wqS45sTdcAf87uPEKjUpcqfWNFjMhSpRzb1C4PoYg36Ft86GzBsE2d3dGdATvTwKNjUAoVxpatfZ9cuTojiQN4K",
  "key33": "3Rtbk73PaxhoAybPjuuLCB5BuYHJeg14u4QLfReSLrveCT6NuxyK1UtfRrwcdSjrJ4o9iHNvrq9dFSdnwAxJmren",
  "key34": "4F88ZAQPTb2tCdMBwK8CX2wv8zupZwdtRCLNHbnTxHJQaNdfT8LYnN94qzneDZvG8VBvHpUmiB7utM3Sqeg8WACb",
  "key35": "RureUMn92QcM7WWTMj8BwjrRayQtkNsVLd8Hvv6fWm9WVCUp6Vw1zmifiWuRoooHiHj64cnAiKpkgNW4ipE1cCQ",
  "key36": "2icjDFnS4Y8DxdnGwB9TLKX2CJR1rQbQmUVSaJiEuuMosPykvCKg3s3vUWxtJXCNd6jYfSrX8Zd4cG1LCsDRUGLu",
  "key37": "3Ny1FsF5FQP8hFXjsU69WhNKkxZAVjAfZA3J4tdbuqRJLqDw8dBQrubNs3TckmutYrTbUiTzbxNkSmbc1SyyBeYH",
  "key38": "22gupa2t9wvHGRSLSeN8D8ovY3ncx6SaLYtDPZXQYi28MuCEZmmGUs8UYXUb2kVUAKpzPK3ZzbH1uzoeX5DWKd7S",
  "key39": "4Q7CRmRmbgFJarNUH2EW7HECqrzXrzpMqAgdqDEgfB3r9VrdfeszCZ8AD53wXjwnjpc8kh6YGK5EREJjJ7jghdSt",
  "key40": "3kTbQn8H6Gdz4UGku3VdRGrZB3jhJPRbnmLvioBYpzY4YJfytSbos4p3hixDsvP1J17W17uZHyDAo7AnPQHgmebD",
  "key41": "3eWMbEbQ2h7WQDwGs9mpXvgodvB1QuW1qywCs7yBDofyn2xqhwdovGkYmUMhMNaHXszUTrSrrqa5ZbDHwbngVBq4",
  "key42": "3aahH2jDdpFLVoj4ECiCWCKwBYpyP19jFvvxN7LWiXcbZSd8VYiKYBv6AP5pp6tYhxDZrHmNRrgUw7czgb3guaFk",
  "key43": "3JQ4rfWD3vFbuW5fPuWBTMu3W4cUGE8sK7NR7j2Jmi76BJKtTLBksj6kTSKr5S2GgZJLVaYqHwHzDb8z8uoZ8zf"
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
