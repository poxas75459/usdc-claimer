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
    "4gFtuFwXT5uKLEyE8mNjfPfrpwhmjcH6o2FmA2zwsExKmmLLhzcvTS3R9JFNWgVsYhUkNGubDrMFPBwLq1qXJdMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23LdiBAfbPbz5JedJWcsce8Jcx1iZ4w4UjfLhmqSEe6kmoSp2QD73BgGpB3q3XbNt1wphjSuiiZ4EDCufeM45HkN",
  "key1": "F7JvVadmznxRznTenBiDQ6y5uqqYLbRGQvuA3Ej1gReVGsgyJN761ggWdfHe2XBmduTek1KJVTTWEVtngpNyqE4",
  "key2": "5pHoeHFoAWH3awciSf5y3rbdisEfTQYCnd3cnTDw1cw72pHrxcFewdqLiVw3fPmJ28YXhmwb5uuAXKh2eDvL3Fm6",
  "key3": "3kUUfX7LnXnkLLDCS8mJBYK57XoiScocFswtye7cYqURQ6HHTqbUxRtuCFzr7pwedyEkrg6U1AzXj1fd8yZcSzGs",
  "key4": "48ET9RGRQJaKuLcEazv81WvoUnrypsZXCDNV5kCXKFhJyFxTmai54CzcpQu1TxxhVFntyruz4SbDt8LfjHr7XT9t",
  "key5": "3C5JTZxAGZwRfmMRk35GxCcaq7J2ecvKzwWcGNSwhTbc2XbTjujjEhkhSxUdQaSwUrET7uKHA2XoDD1MyXeVrDDw",
  "key6": "33bBkfEGBv9dP4XgpS95DaZecYFU9UMFPQxPzAM14dgES5s8c8eMw8bfLooUGahwgvJBZDPmzSyEWe3wqUVKAqHw",
  "key7": "2k63LQB8S3xCta4ak8KHVDYFtUmdqAmHmKWc2JKuvHELhCaiD6SVSq8o4MsBHaQHhsBmbDjnLoJVFZVN3yHFvLT6",
  "key8": "cJqfG9hC9KmYVDZHSYrSMULVfGSx9FGj7prR1iQdziRdEYgq8F9QSrVRcAhW8zkfeQcY4cLydzQE6J8UoAuHPiy",
  "key9": "4Z7vT4AFv7H6KU9HcSCeNxModeCsfzmxHaz7QnsP4xZNbGMJqeeCuAp5b3iYJRn2fMxiVa6w6qxv1bVjb7xgGx5P",
  "key10": "2osc4b9s2rqtgoWRG8asXFvumHrdJ5B5ANTDAWLcNjCnybLNP7Cqq9L6WN3q3xK8abrWza898DAJG2jQoawse6Uq",
  "key11": "3XPCQHr5mkCsgTHJUYQRwSioz4RiRQFygotek3zSn5f3oPvwbgeHbPyoVZZm96PEBpBHVNZhKzPhpvYxDMUAX6GE",
  "key12": "4dmy5FC74eVaBkAv2g1gY3FYCoRZL8jWGwGmNpYFg61c5XLc9fxwvvADLfYDdvvAsN6JpcKFKKi7a3PCewMKTkcM",
  "key13": "3Ky13jVNPBvV6oQheAQoXNbRyZqxMYpMKPMdh4B2sJNxfAsYAnSnrrvpaBN8xP6CeGAyo6AjWbqEebon3m9cyiSp",
  "key14": "48cYwgP2z9KGemRJ4aYmmiTQvr7yCqHrur7ZczWT6DBLiZFbVxLQhA9RjQSLgtJZmLubgPx5HcdTzVQ2t5byzDka",
  "key15": "3JZkrm2WvpzdVX3LsGvu824uiUFkLsv8KtCgU6fTsze1YTB54pNJMd7R4GwdyYWMNG7LgCG3SdD9LnTJQz2HFWep",
  "key16": "48M7iJnSxdkPVF38EZ4D8X3QTAnDYVgqtLwLg5rBEryk1sgwbcexxL9RoW6TvuatT38yeRRdeJbwfuXdiUW2RSZZ",
  "key17": "2rURLYKzfyTwaAyfrRBtf5wr915HeQDtSi8W1B6Yis1y1TvBD1U2oBePPpbVuw6CsrnEkLDn4ZQV4AE5vaRWsXUj",
  "key18": "M3BVJw8NG7jMyrf1AYFhnu4ZAf1V68M92Kd1hjyQvjduD9hWS18droKqjoHzPZ3vPLTHyiDgDaqar7PhvoymQMR",
  "key19": "4vHKhjEUA7W5AEwMAkB1EaXwCdczW4GU272KuGJNvL5JzNYpCjSn4ZvtsiJZJ2dFaUVZjaJ1ZbzPJfV7XYtAQXok",
  "key20": "4Zffoqk1JWgaWL9jAV1Q287qX9oPrvKsnW7dgoDWnySfQH752b7ks4SRAXvieW29AYkvEmBQUAq7MSt78cwfgoBZ",
  "key21": "SafNXmrPncJrSdoMmeKKSbmEQEmefbcj4NweFbQhc5vkZXRh8J3S8aPAcw1utPpZjX4mVnR4MHzx3MgVkhVAu5Q",
  "key22": "2qJsqpY32qzRgcuywpYJAUgubditJuhYW9nBsJNyA4PV66tpSo1eumJyEksw1G8bgD89B6rfkuPwhvnMGEBSTLvg",
  "key23": "ytVAZU2TWZuYczJnoAqeCAN1aVdfoQKLkXuJAD5xVv3dJYwQGf3xYsa1KN72qdSXibPdjWA5DcWyQJTMKVLE8XS",
  "key24": "3vJn1mXuQcLSkAJJGVZk4MSQL6ihE5PRmY49NQsoti5pSU36H2QnquGiw8RTmecD445wkDKjXCJdaijEQPhLLzNW",
  "key25": "2sjSiqa5R8ryUES3jP9TnXdaBAyH9U8jrABXAEyYvEMBFx3hisdHcjLppffV3p9jj3zV2YrvGmn2irfy2NUkmrAg",
  "key26": "3RF5zfaQMYSRskVffwpqVzQLmoCSKsSeNtMB9sysmh6qLd2T4o1ay9XT1QymTfyEBNPN3HUyhJ4CiBZHSsAoy9Ca",
  "key27": "63NPiwU8AACX3L2U1H9JatrMiQ1iQUz2rkycx46KgLZ13x66dBHRZ2Gi6ae93dCpjkpNPXfweeZwfyu4XPaAk4tM",
  "key28": "5UzW7hxv6tAT9DYq8eg3UYeMvWAjEVGzm4WkVvR9N26iqwRX3m4JM5AQ1gFCwW6WH2YH1wLSmSCeDnHhZGxk2bPP",
  "key29": "NSrzRZY7J53j2ZVfQ2kMPQbrMYLbVNFuqomHr56aiTQ3v1eyNHtLMPm5RHwfLLbhTyP3QA8LHQjhR9zzVzVGjD9",
  "key30": "4ZJH7EKpLwU5tc6bjKQx9MAbDbKgPJ2A2imKHKUGwbEkWsfxKN5y2GS3Y4LDcn3moynMaT7LVBidkgsTXnCTFp3d",
  "key31": "2PJSMXhGQr94CJmz2YLduEFjrJt5MQH1KoccfUiRP7wqTx3zv99XP5nL8REihqfytU5v4VhnReFugawjPZzZKiQf",
  "key32": "4xvoKQnv2HW8BJXGEMRzccbyu8dh8aEagYyjPqSt3S9ZW7PjUDdizeqrzZPLzFp8mABJtvKCnDY51cMveaWExm6t",
  "key33": "5Lqm6erPNZgdfsnYxGSbdinyczdx2N3SLcHPdqpiPE6USziDHAoL3PqYu1Fi2tErCafqEJyg6eMcjfdSNAw1pLCU",
  "key34": "553anVi11UEcfptFZKJd8sp3zMEXhueNV9BnU88mUJnXQv6v4suoJYmHTxyJoEZsfvadUZdnqBAtCSfyLSexdRQh",
  "key35": "5A2L5PXgpJPRr5sdCLWfoJ6fyeyqmVxfiLgQ8qMjipFzVPt932Ztnc6kamST7E9b9zyXc3HLRYzDrN7WVTF2SbkV",
  "key36": "2cQRCuDyMd4Z3J2XYYtPCvYdVD3agzqknA2eBjx6uEDcx7XHouD5b4bLb9e9Hc4fdgCtxEQY72ao7WztARKnuQP1",
  "key37": "38Pjh4dDwwf4395x94HWmqafyBt9yZyzgtgL7QJXrFti4JHBhkWaJAa3VV4kzKUjY7jrJJhdSktTW6GeDrbY64D1",
  "key38": "5Zss6j69P4efww1qQpzFxnaCgcV8pvjQoZFimVhJJXVBCyGwxtWwtR17J4b6Joutt771FcKsFyGPeqnxvQfxVEoH",
  "key39": "YUuNxk4UFwcf5sVaU1pBcVinHNSB7Uo8NvxTHyxApmoNMDeUNWK41coPnkvTBo7zY9yyUez8JJJ77XAWA5shD8j",
  "key40": "2vYt3PXcsye98mgDamx3Qu65x3ctiV2NmhRfn5SA4SG5H9Wq2bzHnchmqoYCRGLhDNFvjUfVY618Nw6bPMUJNnun",
  "key41": "2tNhTN5EsgazjzS4BxLRKhSMuvGZZ89yBTW1PjTr3KNN3GKuodwBKgvdPXZbVatrHyzTbHkbGPynsYtCWxqyBt67"
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
