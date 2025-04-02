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
    "3zgnpfg1yjnzLBdkMLCMcdnnpWvEKw871dE2nGuX1cp68gdUBTdjTNxuPqNYB2nfkVhxdxSJKJYGuVpTpeMSPRFt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AMjWDGjUK67ufdUTkMQjH9x6rx96A6MvdP1e19juUgCYbhkvE6egnrjhjzsnuLtB5HWEyBrSw4N9gNRQwzqFH72",
  "key1": "4eEJHct7CknUZNVMY61xdXYnY4Ef9gawt6nFN4WvXa59NorrmXZ6VW5pv6bhAQDXZFHXC8TsjvXanaRCJUMZMJJz",
  "key2": "3r929zYavBVYXM2FHNi6jNLEbdh4qb4U6K4bCWaam39XiR9SDDt5gMcHsF1Af5YWu9g6qqKgn2MCfKLZAxFRUv7J",
  "key3": "8eJLDbxx6FspuFH9apisHZmZrEQ3u21Yj54uNy4D3waSxiEFo8Xigo88NvJfxSDYmiHXwqpK73WMgHtRWcdRyEV",
  "key4": "2ao6MYATCtHXKHx9vXctTC5HHEGbuCJmag6jRaY1LrenaBZtGDfdRDejH6vjRtykuwoTjyacyBKDy2WATDjXDT24",
  "key5": "5h8vK9mqCYSmFwmEbUyRPGmNegbYBeme1AEAAjwybQwpkz5BcoEvVT17cQWU3fS8mULd9PUJoetNAFUjcbvP3puq",
  "key6": "a192JdShUWRcMtgVZrTtfpA8nSnd1nKFBCZ9nMReRvgSjDtvWLJY5f1wJ2TK4e8oENG9tefyKqiXy89e6g3qUc1",
  "key7": "51Xt5X3AnTgi4f8ZnajxM4zBkvMN2ABQoK3PdqGxgCh24oTUgT2oJNN4MBBxzvNi6NQZjBboTSJNvgXB3Bxa3zXw",
  "key8": "3QGqJMAt5WEzrpkALhCsaBpBgZkGcWFTsE8Yq7SytLbv1E6DHEtSSSyc6tq2XDGFejSxPc92A9n5o5Xb5h8TpTEq",
  "key9": "3u1NA3dh2e1eBffEoN7ZzTSx4xb86WuCfXvi8XveENCzL8d3RDHiH2DzpXdhvFbqkdAM2CpgCBNHywRJVd436htM",
  "key10": "5QbUhnH9wd4gbTAt6Ddi13wJhxsgFmEUTtWkQEGXjyDvg6H87EWXYBZ47yC3rwyyhHCFTP57wbzPDzH6CdsSwAZF",
  "key11": "2qdGCfos1fXwKoPHZ4M1Rjkm9PrmMq6ppa1hz6uNJhTMQaCnPmAeZwppwdC1pwqTFUiMaKDFfGueXNJMUP6RkX8u",
  "key12": "3jE89kE1FWDohkUfVHfkEwwk1WTq2eBcqHr4Q16cnoHfZso1knwohPRCW42Ek9Yxc6ynuQAghP7F8uevpBrBN31S",
  "key13": "4fEzfJsS6NYnWw3fMniRVSVqY5cKyCoaoanhXPzyPy7WbpasJYzjNMfWBBamoGPfSbnc9xxBbSyNeV5nh656iuei",
  "key14": "4Eucgiqekpc5fNJPZrhqCMjw6Cp2XBQQ1rU4CjQoXBhu1rqEqWiCF8bBLLM8MVpW2cZHncg8AdA7bgZ9Bwytquyr",
  "key15": "628pVU223xmcfwGHxK8SAL4pMtgdERn72JarbdMQoRCYd4svKihThHHFmbL4rBc6ewN9rPhURkc6fFh7cXYY6Hk7",
  "key16": "2WkjpndSrfQPAoB4tSqgTFUETDPfuaYVzfRMgtLmwrUqeAjRCUF3tHsPJA3UKeg5zQgA1f2ToapxCm66h3pBzCed",
  "key17": "Q8qstDeSMD5fmvawbNDe69p3AouMYGCg2R8LqHGQoEbnXUbEAGCticVsVPHxwgirQ4Eb7PCWgr4dYEqWs7tzn3Y",
  "key18": "23qvEZ3baaPXpz46sdgKZf6bfEtsM3m1tYPMyCec96yAuwzaL2d769QcN83CSXVyrqjpruKB5wMPtakKJbvxkhNd",
  "key19": "45RZG6HFHs5BvZokxPTLEqExpwG5swDcxvwfLc4Hn57xDNXumEz8dS8Mu2U7RX8hX5wzspU6j7KfjwWmj2SsNs6s",
  "key20": "3r1jMWW4CbNmWfLkELdJTxGp5n6jF8MSantcGas4n1wgwBF37ANFgA1kJs2fjLRu4N7heunesN9JnjGodBvg7y8c",
  "key21": "417MKdFHj5D1wduap4GGXSV6AEaGkox9Sv7pjeuPNNTUCiqrrnJrFde5FzHYe4mzrbnV68myBYrUtTKWWHGwMKY2",
  "key22": "4AMFez7R8jkqgkrxY4VRfzYYWaM3FfhnKM9fhj4FmxnW3TMAqEvKBca7onW3Q4cztaN99oaRXLTYpeLFDNwLCyCK",
  "key23": "3iXVn4TGeYMK4XngdrWTmj9rrcKLomBpW2e5cHkbgjEHWNNpvVS6MxAXzQwMuSk8WdXR39LNZjSFrvcq9MePFz1R",
  "key24": "5ig9ViRLjY6TQmjXRTG93JU8taHDF19wfjQJcL9ftfvXs1UoQjMRqr6dSssA3Sp35krFEsECHs1vbyz9xLdWvBj9",
  "key25": "5yyaKRpBG9SpAUw8CQK9iNgdTbrCCaZsvLpYRf6pp7UirWio3do5D3xPQm8BcSuTxWwC2sjazrgesxLzKSNDGQMo",
  "key26": "2k8mKAJYpWZGciMQymrwrMuetMpaaHADRH6drKXJXGD5HWeUUZnKaYAJTQwzB8y4s368SE1T1Rf3d8a6VCrL69Pj",
  "key27": "2RPFcBFY1pneL5FPc9cVvGrKWeNfq6sedCNXqza7zxVHn3NnLUCMTX7JLmu5zA4dxQNuhmCP5JTB3a8BnXa3LqTQ",
  "key28": "eXURdUkkQgu8cih7LWjqoHCi5yBa5xTKJqnY5SZRGb9WxjysA8rfTMXUUkDip23KC7eWya4cTn7DjVHZQa5p1xZ",
  "key29": "X7qikTmt8Br4DVr46CMAnQfEFR9ARAuBvmz5Q9fkp5G8KEWSsfDJ4JtJNvcTLPi5w7J3QFwjYPBJFYqA34NiQ1A",
  "key30": "5nXNC1D5vCwq2168hogwpUJYLVpgUMgtqHeQGFccqQpTNuEzVhDawnWSxE49GjPDs5pSrKNUWdw9NZg5Y6uvQyrJ",
  "key31": "2aUYNrFdN5AimmHokPVZnPAYmJw4shxTLorJ1aZxnSZCxWng1bHhKhA7TGkmYaLYztR2edhS7PCeTsDnYLQjW5HT",
  "key32": "4qLEcPze8prNBFnPvcGP7QTgCUjJDbxF6H3tvvXLM2NUMdVwnLhAAYhhFWnZYchqsZwSAggsJC9Hf7grK71oVipu",
  "key33": "3ZCskkKYC1eeVfVAJ4GqjDM7pVonhwpJnvVhAgzYNCRm8EiLxuodjW1BHoktdumFebHomSf8gbaLUs3T3gsvx3AG",
  "key34": "391pMz9d8L46fh2gSGUqxMtKh3esfCwNyxgbUfKdZgkFv3zsD6hhzQQgc4zfupFJBjuYZR58BuK1KhovurboDQoj",
  "key35": "662tt6ofZjEnoCsUmDFwEi74Y2zEd2f9Qn5yoBWN6m9xe3JkkXiR4trzqAbPmnkaTpoLyn2Sd8Q9GTUWohYK5LnL",
  "key36": "3GF6nzoq3T7r1siFfNdymh3PT3FJpWSQ71boX8k3qwrnHHP4eYYWojrT89dD1s152qbSG8NEgdGm5QgwoGifCHBV",
  "key37": "5EcD6F8cBYNhworscFF3VkDF5btRTGcSdGRQ8JnGSb5B2b3TirMeWW2SCLswTMUjGLDSHmxU3M5U28CXsTnm7hjp",
  "key38": "2BAiFnAhnotycQNfxXGcVxQ171fdat2jqkUxc7mbD6Xo9QoyjgAqDZp5KX8Dpex7A9N3onWPRJdHMgFyKfUavzx8",
  "key39": "5P6YbGF9fWDoc6uyUuJ2xHSnSKC5uXD4aQxACgAjA37j91nb7Xjkm4AsvNDMUiZeC3u854qMU96UXGctNWM3zR6U",
  "key40": "3ELtsS8SyCEhZVTy72nhBymj6iAD4cXuE3F5ZGv4q6H8pkHHrjTW1gmVzatyMBmqnc9UMBBsVuZrgSYiFHdEAzT5",
  "key41": "5x5C6iRKzAQJyypahayjnt6F5Cm4fcnS7HZiyxQWvivqCWc18xz9kKdb3qsaUqgvmnNVBmWtVhnYwikwquYThrBr",
  "key42": "24i2QDcYJJF5pdNsPBrAsja7TpwB23jZ3QxDjT3NcjAhhZYvMnNw7WKXCHwgAmsQJpZC144q1wExRw2aPvk1mF3a",
  "key43": "38QqffRQet9JpjrRCLMQmDHWQPvz7xPy1JZxeLWjXGsKSSwbUkNe5JLZQGZRKdn3X2gpYXRUYGwkbkfDsPSSsTQ2"
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
