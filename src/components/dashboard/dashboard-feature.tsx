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
    "4YUJc4TiuNdVTWJcofBP2Xk1kW59hNPZ7mXiA7yQEYVBwVCu2VnFQyv3XTdABzgKCeL21RY7RcVjNdBTrHaAcUn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9mgLNk25ZNUSbF7ewzoJSKAtLMxkfJoLftSwaGb62atx6H85pwNa3tnPw92QS4Mn7rHqAwJ2uX52KHhPPDNh9Gk",
  "key1": "5fd9FsJY1cxveYZej6XRnQ3oD2pspBwiBeeQVRTbSSPyxyjyWhNZBfPjT66BWF9ty2qhNWCCZM3uBg9aXpgCsR7D",
  "key2": "5MW8vH7pj5PX5c5AxHcMtyAM5mhEte9C79UECJfHTbRAwJTzBGHZwz9jqx6ED6LqguXmU2TenmBkSizgLectncZZ",
  "key3": "3akJcZcYfj5uUBTHYgyh4tKeRKMwSD5JabpYoLqSKhhiMU662qnVjr2Fj1ipKAnnS6bE4tctQ9zkyczv6ADk32iL",
  "key4": "3xUVAed72QZeqXumsJiac6R69LTqF21Hh1sBiLPmC13TfacFrhSkFiaaykNEqGQsBAUdb6xnyzKE8pZxuNTYFceM",
  "key5": "uaXo6Prvkwjtz18LGKx2z5obnMCAMRVfzZzfvcYKDB7R9erdfCiG4mWgtWRPwpH6eUxCK8DVCKYnppNpzRKC8JC",
  "key6": "5LtdU3G5FEMrZhhNGEViD2XhLfuyiqNK8J37qCRBywQcH6jhXKV8P1QVqBfhNhR6k8m6Gy7Jx48S3WzAsHJZP6Ej",
  "key7": "4nMV6rXE9DzpxioNUzpLCWrXNtoZHEnC96TV4fmnDWA8JX2H13zDaHu1bUS8yzDxedjwRYVTBZbJUSLFeEnsow7r",
  "key8": "5q4QgMC8vZm3La3XfaAe7oTBDYYE4nZeyU8b4rRDS1g6Gqrf49CeJMyxULKYoE35L7E2RrWFFoKT1XqakVTTfizC",
  "key9": "341w6yrpbFFNKdnzpfeiV94SAceJwXjBdp6Fg6Lmtb4H4f9icDekg1buEpCZYpDyHsK2dmpqRD4erkcAamB3ZKo6",
  "key10": "5Qk1AdvFe5nprZJzGKK3fqEoKeHrK15UmvRhcfi5ywHC63hzPPrbX2ncdNfruX6ZQd7tjvTjyDd2JQaJBMvoRxer",
  "key11": "2c8ksK8Jum1HAwm1EAozdX5hH8Wgqd8yoYesb1PV3XfuVtfe7e2gfoXeqpqfXQr5Y6Zr8cstKKLoYVNfa4bT2BfA",
  "key12": "3PFSZA18wy6AfpymeSQTima7NLV7qUnqCkVaZastuRmAVqw33C1vXMGtTcQBqvx5My74cu53WKycLT8gBVaPKVek",
  "key13": "5VRrW92NtSVj5UoNvxmuf8hNmA7ji18J7cSuTSQ4zXYzjkDnUo73LgbBNkKMdasQwctvSQ19Cn6LfPN9aCxbqA2R",
  "key14": "5yewDeM7BoR7pxdrVmymmWNAYmJmUqMuz3mxTmR6VKQy8xNg18pYe5JzeA6GBybzb7h7JrcWJmGxWKzxfczSDdy",
  "key15": "61iS6sXHq8wtCFv1dCYapqNDQhyM9Hc7BekEdFSbWksmMk8RfcJgzUwUwmh7XTKToxE1zVEZrzjmc8z1ugZwwFwt",
  "key16": "4Ps1p9HYop831Ei4Y9fvCJZ6Ax46yJkDv2bLnote2vECJykAYEKikxozSwX6nBEaEkeioNy9YTSGN4hehLFrGEnD",
  "key17": "3RFif4Qe8rTRKfFLhDZGTXPvMDDWHcVYN8TM9rWT67euJEMVdmHoGmTUFH4sU3ihhgWVGVAh9Q6t8a1xXM55uv65",
  "key18": "3mfJbucDxeYDmbhhKtWhLxRcsTvwrLPDRiVJYL8Zr6BE9CoE2j3m3UHr32qUVCvVn3TMy4T3S1THycg32JMYL1GV",
  "key19": "ANxsH5tskmDfrwzy5ur1vk4FFiuDEkTexb2FamgaH2QGFtmZ9BaFSVJfAu5uUskpZRmAysQvBuCLBy4hzQcaZnS",
  "key20": "4wFPkoFGUd7ZDfpkXbrL8HZFZFnJTo4zMn6qsqoUY8PVDH7e5PibddPRbAkzv8ib15RemzZzTzPgCRu4i4VBQVt8",
  "key21": "21r3hTsekWJTjUVmx9K7pJZdi3FvJ6BZp69s815Mp7iZepEEqYjgYzrQCZjrScdsp4Vo6vNffThcTSmd8p36yq4z",
  "key22": "LWggsG54u2KtRAavbiPu4Bwx4szPCMRLMom4dwYF8VdFtikMre3oZ5uuyPeeqbKaD644UgMa5dsNGAMGpZnm3g3",
  "key23": "34B1voKdHGpafydu6WfWRZUQ59EvMyN2is9fxrizZDMpE52RjJSiB8RLVz31MqLqshqvdFc1UinH7PoMRft9W92s",
  "key24": "3cTh7FWfozJptSagifMNbMiW1VYViXzvnFVxujQSAViSymTMzizsLdWZUg1Lxc1PtjNtfWy32LB5DdDuU7YvZc2M",
  "key25": "47ZTsGSMm7Fbgn2ffvrt7u9LqKGVVa7VoH67SYxRVKqbdd5GPYU1rDLsF5Q3MKv1whzvwX1Cdq8buiZ1Z7q4nqax",
  "key26": "M6DZ8fbCQHiQp4hMidereTkFYh3m7TUY2oEdMWkzdNkTHA4FDVBJyYavpEoTw8h7FcXbjGTHhHvwseCZBv3gLwD",
  "key27": "4dt3aKpSGaTh2xDx5VUbsEhCLhKPPRFLk2rrg8P7kArL6ztNFKCf47ApGpmA4KtAxDCop5531vgKVfkUaV6RgGPf",
  "key28": "3Mb2NeuE3SN3qrQ71SP6QjNApceAegYkjM6DFskEkN4di5SZJuS42Agm7VgUQrVdn5EVLPL6bosCb6wLtpMBoEJe",
  "key29": "52bYWMtbNNUJrcBsb9DprzSHBQ5PF8YJHeSpgaDFnjZffCjzqeg65nuYSKwNK3a3eEXk7TZwGQkjyPuorscDkBZU",
  "key30": "4Uyj4jMdxvZfpMUHd1dQVnK2cTk4CJ82xK6e7vJeBQnzwoZXstTTSsQwu8zztME5R9P4iBGzzDuzf3szji9Wp5QG",
  "key31": "3YPFDKHy8K1Cq7cKWTQ9msvzdm6WH5wsBPuy4mz8rKU7JGWTapz23WgpwGfo3Sh9Z9ZYRVZoPQPyiBaMkHtRTakn",
  "key32": "4evCnvzmkg7zstU5brvMeoe99xnmq19H1L9wQKcWe84hBJx8KajHUuK3KHsYchWagWxz5Vu7k6UQgZqq3idn8DXn",
  "key33": "21k8dSf1dRPQn3sPxVX1B57Z3Cs1tvhdPWpeKffZngV27teVLy11giwM2EbfMbHFPLUftGRYstnnV7RNvdWXLxd3",
  "key34": "3djPvZnNkjnjJKAgnFU9MR83bqMv2YrW24Q4Wqgb6TzLxZ3VzVyRnSCVgPQZJTDTEnkJjB211DXJgDv8cNJb6m22",
  "key35": "5VSDhubRd6tM4agGbPQi9ZHcy3KtLYgaft3kxWbobj74pM7Ryu18TUCxYESAckxgsQHvjNJvM31LZ4zE2u2od7Z2",
  "key36": "4UKTKecyE1adCWeG8M8mR6ZQdy23avZVfQ9AzBu8EHCmNfLYSA4e2no9jufFZKjCQMYJsjKxDfHDbjWoDQ76jYhM",
  "key37": "JZp462YQhPWBA1x6JiJKgaxpAogk9LkEHNFb1vgXJ45d1SffdjWHAnyBU5iiEGpEKcNSjzRDuMUrsT4rKAxgyVN",
  "key38": "3Tkevo27CtrD9hxmqTmZSonLU5ReJCmv2cCa2nPWPxa6S1HCxyuSvxvTieavTbvetLnC3Bt1N1fGhJenaE3SffZx",
  "key39": "rSZK5JTdAfUFWua5i6rDJmKUWrmZ54NhEAyTN4wn8Y5dGBzCsWEYxYhRomt9cGJ9vYQD75Vt5Bu9KydDYxXuaeA",
  "key40": "67odC56kVPSPD7r6kBsNHg9MhMpL7HURoamBhkVU7U1y79USy1NdiZKdHHouWKzHTV5Egs7eBpZRqzXfgqqU9LyC",
  "key41": "i56v62ZgGHNSBsTa8X5ruAC7NPTZthuBfBzQe5oKNmphmeqoADoxAFW4BGLBeY8V9wDVkJyWeAy58y6XFadUABY",
  "key42": "5zbYqp3AFSLP9NMyg9zvT44y8pQCNv45QhYhqzhjzwdTMxvTXDKt8vqa5q41jC75f6vKTYQyXLqyzr2dxHxE7rRc",
  "key43": "3LCW32wMXarwhjbk6Pc4G1V1b1eJ7vkJpihYRf269dnewdm3KbqRHSKhQMsSwBKztNRAuhNPM8TpJLCEp2sFLk5W"
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
