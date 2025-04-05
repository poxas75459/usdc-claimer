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
    "uPgUHrRVk5RVbT8iLENsNsDgxavpJfeSmYKBCL8y6WKJMMDtgacoEDRuhQtpvEBpkQ5mTgsgwgFuHM9pbEgY8GK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35AgY5FsnEqKzowhRdXMYFDbpackHwTZXYqbpx4E8fFYSdpTK7gUGM7T6SsPVfFe73UA55egT9YJXPirmDQFqoBX",
  "key1": "3obnYz3xt9jaCRV6RztMqTVzNi9kZ3G1LbtzBFmuHRHfaFxgkpcDwKGR4BqgRtcvpV8YD5rQf1Xc5vbKSTfMQVTQ",
  "key2": "2zFgqMRqqwmt4CYmnjwiRYKTCXPuSqYeruGwijj7HgXVyEnXjT9jbvQEM5L9mhGVmTQEn1ycBVTD6GFreWoV6qMp",
  "key3": "3FArUgXef6TrotiPbZhd7V7pwf2mi2kbh5PXpsewRwYg3Bmbe9Bz5irnCJPz313cCuWYtYuxnU54PUax4a83pFm9",
  "key4": "2C5tFj1GkNyTpwYgNVpujPRav3LWV3khbv3RHVQ7Bu3TMr6kBoY6jTG3wKN1S33JihuRprNbVinyx3RzcbLNqixk",
  "key5": "2LeVigE6QW1k9XFkYA1yj8bCfgDZJkjqqDdbEwxAjSpyQp98pT2iPapKbBLNRvqNnmpM5UY17qh8nsPmSseqDVqE",
  "key6": "UdLDugvpoh4M4YzsH2yENiFskcPoWsWfATL71f1CgVCVv5o5vZPxshR2CJYv5ry3JysE9jF9qsbsVtGqAMAhsfQ",
  "key7": "WiTYFtkGto9cQm9DqB6LC3rJNQZ5XT9nw9i4LBjF1o3EQoZ4BWbjbyEEJoQeGZk85uEU4A1GB5EV8oReqomm34M",
  "key8": "4ewnvxm3Crt6FxFuoVXuuX28Ch28Z5LZukxCmrtcy2nxXiQQ1S3Ebkzc9P21MrgPaTa4DC16E7B2j1ntsReLia9L",
  "key9": "5YzkkFuP3gVgXAF59qRXXpF6JEZgKU2veHSi5gc88HJKdtenJMBk8ovyeGT578KsYAQmbb42UUakse4Q9hcnFPfq",
  "key10": "3ro4oGKDvc2XojU14ujjxdKd81pfhV69obFdyNuBgHRE3psXrAHXtjKx6hEUC31WB7vfhGhpvioBLpZKPUmnw2b3",
  "key11": "34MxH7iWmnWoUScSn98B555ZZEUzPXaMax7fzGKmnWLPAHpio1b3TmjrXLuRFcV3J6HzcrsaoVyixTqAz1u757wt",
  "key12": "4txKugZ8rKwEVqgjhN2eeEz6bEWzz3127sb7dBG5jnoiF4sXDQc5mqX9Tu49G6dTURTWJeGTu1Ahmg6pEeZdYjDt",
  "key13": "3V2V2X32kxdpDrchxcjTuwLzvuDQvqqFtf4LPne4pi4yHTxhwYnsJYMfQymDKbjn9X1uFz7D2JwGMLA61uyYJetm",
  "key14": "4knyWaMKmNnyYXkTtjmkDUWQAjnpSnJKU4jkxAx4utWH2e76aaZTGEKZgUFPsGuNXhxwpS1TDKaTwaHDyc8bEgX",
  "key15": "21H8JvBFvv9ksZ1mQ9g7QrafT8J3EWzLHnMXBaeJcVCWC119qsGvaChapS5qE8P61AaXkh69VgkuHkSDf45CeAwj",
  "key16": "4Z818rNDFaR1aXTafQkrcEpwYidGriwj8ri8cQ4BXbiM7gBtttmMNoZ5T2ZDFA2WFGyKdW1KxhG5fjdDW5D9UtJ6",
  "key17": "4SNKDaQ9v9UcjsvR39UHDNREzY7jV3fim3VrDeNvb2pCbazpZGm5VXbtVVKK9u9CreqVd1vgnz88AFRd2xFca4tc",
  "key18": "2DJcnPnxaGuc7P1qsE5JtCPw5CHXVraQpf4YfD93wwiW2GYAiDDoXSuTHmR5LKbvBsqScxazgNDrE4eYwzLzBw2w",
  "key19": "5c1idevZUTL4tAHcPDydqEEZUYEuLc3mYmjbu9kUYPaRbj9sy162H4XQ7RdAYhGDgaK15v6qEPzXsT5pY4MrDD4z",
  "key20": "5mmmrG2LBtPWyhnezv7KgYtHEGe3TzKC78dkux9DFg3AxEtubPyi7NPQjfpwDSb1hm9FtBZPByrsurbAMekNjtSq",
  "key21": "66Lxchwy32TQahQnb6UvLdhVcZxmbYeYP4yg7pPJM7Z7efTgRL5vjSHwsWK9L1t5kWX3i9i4BrDuw7nDAWeaDRz",
  "key22": "4jiv9ecBMEr4Pr63qtCk5yTxCXiHQRmAQSRUCmgMiLE4mXYetQgoXCnV5E5YhywksV5uQw3Bc4JYEpswfxcXcCgJ",
  "key23": "9RZWEhVJDqASmqaEWQLxjf5rpu4S9GwrRgDd1oNRgGiUSYNqcLkGoBub2dq6CJJ4qgx3WKAv8oNYs51XY9CfkuC",
  "key24": "2YQSd7WFzD9HJkA9QLe1r6RQ7qCkga6t1a2Azj377sNkwYuzhanmUHE75WgSoB6nPh7oygwXgK4CNAVuw6xMv9cq",
  "key25": "nAzt9x4155cEvHWxVK2BszU3P5uP6HLS9uLHgMyAAZbpRA4i8BTEDW18hSEF8yrsTLhy7MQxtzkERMZtu2mZtst",
  "key26": "3W3AbgA9CsSrPmof9kXNxqFMavwoEvJDD1pQz8K6TgsqfNvkNymc7c2QgpDEcNwVexd7G1e8EBsLJQF1KkZbsaNp",
  "key27": "5y7eWWhU9UGEbAUrUiC7c4br97QhLBpFzrE8K5Junpi7sDKbiYxuLrfmXCQ6mD2yitBqA1FdmVkpXvVg6Rxnfbju",
  "key28": "2dDUniWeCc2KhN9vdXgTeADAVGnRJPbTf9kZzg3XtR6fZYMhFo96JFTW1JkkWYHw2QQ3qdmUopYPYjNJb8MiiTuP",
  "key29": "3i5zRdxyJ49L7xNsZu8GwYRqK7uEjdD38WMwprrFVxdKABRYDphf78cG36C2En83VkCo5vjyvbFKP85HSDKarmmr",
  "key30": "53AjaXxSQAgH9zJ6hxJuuhoEFxbH2TQwirnPTes1GekYpK8GD4ncLzo1yqKxgp2z3pFqMAg5HjuSn7ECaSJRBwM5",
  "key31": "5117Fr2QTZjAeSJxeJoDi2xS7XbyhfdSXajaF51NpS2vHvkneZMSDSN6tERfKP7tFrtHwZG5iWkuLcRhH4BG9eSx",
  "key32": "5JfzFzxikyK64kTVyCjYMVpz9nSg5A6uBPNUjRog68dNSoaXHvSevLTvPNXuZUCEU89CrcBmh7ziy8nRYf3NaQ1s",
  "key33": "3mG9nN1iSVmMJaFD54s4GnM7YRah2ibz2Nij5Wx7U4pys6f4AUM4RYgxbMkfre98ChwQAqgy5HVoBYJKW37eEXKz",
  "key34": "fm5RpuE8RDdyyVRiTXjHPdCeVfJq9csFFNrxspwmX9S4qqJoZCy1LaxnN7JmkcteptNPy5nPG6D4JZ8cWQoByBn",
  "key35": "4Uwx8rLPBtXuXKcQXXfdHhsiLunsnRwGUeH5KCSkEqueSDdh3SHpU1oPVt6XqZMrJK7N7kMDZM13RgpFJLRqJUxo",
  "key36": "22NwjQdwCph9gyc3BuxeHnayThVSMZi7K5bMNk1QdZw5vZV5pVBx4dSXSA8rRdyH77TcLpAtoDerLVonAqYcTWbC",
  "key37": "4ZsT542ADh8R55qj1HZxwcvwMxrQgRfBaywPb5oGDvAB6uNFH7xV69bmDDRLu4VYFpptAS4aAiPs9kJaWKgRSh6f",
  "key38": "2dgfKHSvxDUYzTCtujauyXvaeXVkTDaWsVjm222WNzrnbPQHSZ4qtr83MsMBd6jzvBTZTJAF8RNRwQzpJHhMgrTL",
  "key39": "3pFcFKq7zvRUsgeGWrtvZSPn4DfzaamM5asti86vBQGLWVT6cXyxsGe9VKrvRsYC6JGer9qBv972eU8VwPMa4ZKe",
  "key40": "LSRJgHQXGG7TN3gzNxsXoQ3MZ5JDMmZw2C11VxXSoZMXr79JhAcmTvfZbbPJXoHkWXLwJBBFgQgTfijeW7CrVrf",
  "key41": "3K8m9qP6iRqBnokxijHn1LFpuHZyC5k9YTvGshmLFWw3gHaa5VPtErQPpzLtWk5rXpgj8UbENf1zMc7yQMFa4VqB",
  "key42": "4HgaxgcNdheaiDZQV65zmyNTkC4qmb9HdR5AyqqWWxgpFLv82XWyHdJZA6vN8K4VFEwFSchX8ysoAySiqR4VRmvx",
  "key43": "5DTB3JCniRw5HsBji6dwn1BjhjU9U1iUYLN6inr1qdyHy1ecwmkriTEGbvTL4L9byu5zEQtv2z8QQE4Bf5GFLrj4",
  "key44": "27HsayUPLdQZv1qY8HCMuGY28Jm28HU1a6bQHwXknZCiBadNoYyFAbUWPw5FWi1R3vFhXiFghLxAM44r5oKwM8fe",
  "key45": "5LuZam1NYVckRc4PuP4RHrJv1QBPLuezVnJmTMWVqAVbaQfi6Da71J3DThXjKVvB7DZ12sp66hLqZdH8vLvkbEYN",
  "key46": "47sfX16HYpoP5anrpfaXFgQj68CxWRBn1DUg6gC5PAuRu2RNwoYu7JRZr92dwsG5NPV3CXA6a4UDwfsp6ejCTqWN",
  "key47": "4Yx2RphPBWDfQY9gH4pG4fviXHgCgA7Y85aiMAdsrfXC2nqAzi2agSN5xFSGKvrqznVDjfheeMH3U2PABzohvpa3",
  "key48": "hQRrMLsAtuCBuFwTCTgtTT1PCfBxyFZ9KvLeawfRk1QV3TUkBn9sC8YfyVkmPduLcVYHBRgByK6uQ5JsFxMgDUH",
  "key49": "5tNgdjKiE7X2CkyYjL8suuMjSayZdt8U5LyjL58wHowh7tEVSk9nb1y6vR3qSuQuURcottcXDBZuPVAnTMfQA5f4"
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
