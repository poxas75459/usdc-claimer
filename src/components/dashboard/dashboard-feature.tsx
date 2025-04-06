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
    "3axDk9Nd31jDR4qH4DMq7MPNz9ptcNzEFm2n1p21YhbD8hRrebFu19S3LFhYdd1jByXTsdjQfsbxtTYd4TCkZN1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UdVrqRVQmPJZmc5Cs2Pois5iQweAyK61c85dDFF5fdk5dmo9C7ZgWaE96VWN7qCEmy5CtTnJuTNnSmRCJhL5yLN",
  "key1": "3DsvuV3RxBs5ksJL1upAWrzd1gyhiL6fKPSjj8QuaNppfxkD1PE8AX5AeeNSmg13xh7o5WsEh14MJA5REoHYroEt",
  "key2": "3qaxAb7xqzqHhU1kDfCa99yPWCT1KXwRMVtWo4vXYfG4ctivyi7mh4nG3o55bRhSp4bbaEpFxVEhcWLTAsfQeqwV",
  "key3": "3wTGSY1aswAekRNsnuU6Sz2XD7T3c82Qv75fD8ABmetLgJxneQefUCyNYS7Ng4jh7Vb6gWrPTtefQmwe6f5Zsw26",
  "key4": "39C3pDiyAWpc5UCw3V4wKZF3yCqfyWAHPRStu4ok4u1QSPbrYxfs5GrfXcXVkT4AZ3ewc9esm2X9LfaNCjRdswBX",
  "key5": "3qxoMJVq4k6dF5Nfp9mLzKLB279KPRA9MU7VHewnNayBSrB3R6rEzrLWy7iGxNCyDtpBWSZj2Qo3zw6jWE38CVJq",
  "key6": "3rBCGeZpknT6hKRguy7vd3FRLEn84P2hWyFuFz9VumEnbG6LaHoewq62du9S4atuTKD2bL4fhSpGKyVeEsv6Z8Pg",
  "key7": "3qVKdpkNHz85LiVHbrJzqkYXiHTbLcEXD7C8Xf6MLLr8AmNnvmrrwvSk6fjpTX5ttu3nWJNYym4Ddcyc6hSFqB5G",
  "key8": "3oqGU7YvZ6rApNXMxJdKXDNd2PsQcwW5BJPMWRzM23aFaczfFf7FqxYcVChw6DuY6pfmLvJezBcFCyBeJmy99Vgk",
  "key9": "5xLaofyTn1qrwuWBwqdUhkh6jx9z2HgHbijGe32j9ELZwWxujFyVFjce3CQPTMBdK2ukSdtbeNhDojt1gtzH1z8Z",
  "key10": "3GL1DZDH45wYmGQsu4iMGDPvjeV5AXdHYMcfBXNidca1dRA3RDUhVyPuXyGFhLGiAM96VVZ5tUdLdhfr9ArL9LMR",
  "key11": "kjPHoCscuESQtCseGpYh3kvyF8pFB3ccnqP3yUEPdg7bXN6Gc1tTB7KBYg7rMcisp61QB1TtSzqcygQLZydJjPm",
  "key12": "2ahLMdLDC9DqjpfMyWuzNVA2kKTxPWXpAMNeqTS7T9pDEPCbcStz2n7CUeKhHAxcNG87WxHWJeaiSH2kahdav4sw",
  "key13": "2N39ezFpCCXPXMxKCm9qY8XCfXrsW5HrYmTUXgZzNuwfLag9q8D6unBH1BFJorYwcXyUARXc7v9KD3qouEDeQFfF",
  "key14": "2T767eoP2XBgu5kXu8deNENVig6r7fnzp1A6Tt25BFHKBRdoxNpt3ZQDG3TgGrTiXLPPfyGTaoFE9HgqZz8LtcM8",
  "key15": "hopQPk3rd6hnDVzVVhvi1SHdZQqqo3UNaopchPyyE4vvVkkkQ56DGcocfhTxNDb1iGG6jLB5qHtExMjEzEED9jL",
  "key16": "2KnxVpdTvdB86pxSobMKuLZm3H6FLS6yv3w28BdjQP2fY41ZGCm3QbpQ6UnrEu3uqsfj4mSq5Yw5ZVjnmSRHuoTC",
  "key17": "26J8JMuguBDM91Y6wr3KfFf4iGw2KZo2NwXaL9xaAhzyCwGysWJAQoPCJyNoYjiFtNPZibFUcGoXvgsWEw74sXmE",
  "key18": "2cf6VuNzQVRfYY8RQdNCpxBvW9e2XhAq8a92bqF8bqAYvn5ShxbhMermWTnr1sSjnRSoPpe9pUYc5LSwPhyqHtXY",
  "key19": "3THzqisGSfp7p8rD6hHUjQ22q1eVPa3G7zp1NdSB9HPr3r2qFV5jnf52PHBWsfrV2Dwa9mCfwbWgXmkrYNWeQntk",
  "key20": "5o8Ldb3toZnzUK9vih9mNVMeFgfutkyXgDYciHTvJdyhLYMMy4A94Ekdyr81ijm9Ed8XcxC8GYmv2Bgcv8febA7B",
  "key21": "2HfjrcauqEiyaP8LEixkdUtcuTys2AMVN4UYEE2B5u2D5yUUzG6fwAH9BZBegjtisq8T7wXcnfwJqA2Cr2T8UfKt",
  "key22": "5UuqwnrmkCZeuMifX4H53TAoQVzRqJsjHADrrmkfZyXNuWyDSstBHQNbJdf31fGnYhSzEtj3jP2fVyKkFAGuL5AU",
  "key23": "2dkzHahaGkPmQ1qfFn8uWhdnSVxgq8zue4MU73cP2wr9ieNYAPDQUnVv8ZUmZZUWoyFXrNTaKNK4EfbmaPaVtKHg",
  "key24": "2C64oHMnTyWC3srYT3y5EYEQ2gWadTMAdBquqAyFH3ohAfBLA3QP6LerFD1dwrKihXtj9LE9BzXJ5vDkBWqpP7zb",
  "key25": "3AFTznH466gwPWLd8ofsmQZEvhjZAmYwxptCzHESdtSQtWuXjKvtuocFmw8BnFGh3AdhyntuRnbhLQnMt1TF3aft",
  "key26": "31nseji3EYQQBqX1vkKf4GwuUgoBWxyVsLTZxSm5L3bCFS2Ds3DFYFEm9xYCpSUpigse3zf2Thnqak1BCAU2UFHD",
  "key27": "5wawiSTrynK69C6ZviujBTZppKHAaTdABfcgJw2XyZieexP1T4ZUx9SzY4n8vsbBRpx7jJk8ynGbX74357CWdhUD",
  "key28": "YwaH9iiM4Dwnp9prwBd9KXQPEekPSBxEBP7N4w4hi3rMXUoiTeWHLuFytmV9zpaf5eqSCgZwr7WMeFssZhbaFPE",
  "key29": "VnASoAumN762dMXx88MwJBWZzwPDox4C7wWVNT83k7kWY1XkzESd8uxkGx66Z6YXr1dj4CPdZ1rem7KjT8E7HCn",
  "key30": "51iJ2TEjr41TTkvyLdV68B9UeKkpnZHESmFmQ5TsrMdN3oQJPQMEyJKJ3sacT2xjb1W4hCxw4NjSTJUBmpS9igQP",
  "key31": "46uAqTuofxFGzp338g6n9iMkPCs7eHCNiqa7Z6r9M6XsupV77U3mcBqcbjSqxAhvr1VnHQcUcTwSSjxG6ZXGH92B",
  "key32": "5XNMAwPHp42txngZqdtvMtPBGarg7kLTDi6mbFkFXr3Er4ZNm2h1z6tPsK8z2nonAw13wz1CqHnsvUV8U5unUnYd",
  "key33": "4v79QSrYHANTPK5ENh237c4DFc29xggK8xbuH32dLXG4uEnBMeffSc1NsDsV4JM4uZuSadtrd5E6vtTmSA7SeSaA",
  "key34": "5RkNt6CR436kZdbEbSyBVLTNK1321475bYrWLWaC8JQMTC1XWp3GbBvZBL2d8RnikRbhbbf88FSSZoAY1gqn6jNL",
  "key35": "3sXSVdSy8oEEdiC6aeQsFZwHh4e2Jggg1tiUjTzhUHE18VwCE9t5JCR4kE5LtLvUQ9XtkPxcccLtySWpdoXVYrCF",
  "key36": "HeaQ8KAoXKE7rudAez2dMtwkbSA6VewRzTg8iU9hAH2swkYd2KP6vDggnfduZ1VUfmqcbENgtwaBNxVBEoLQJM1",
  "key37": "5VgVr8UwmbWuMdjLrby5fNnPT54gfKUMR8VmM6vzhmd2uARf9qw5U1k4YSJbSd6zxYb6gLBFzhM2tH5wNbiu4PFf",
  "key38": "2UZNB4JWQniqChMNFFqgMsixaBwFiHS19tkNpNmoFKqYbvK3fG6dv3W9L8mKDkU4uLP381nVU6FmGzFgswFCnWvi",
  "key39": "4Gp3gRknN5PN7fESDEGARjYr7DeWcrJ1GU5KRa4hGgS3cmwCPs2jgP9FGaC6xWU5EN5qZTKoZuh7ghv57KFnYY9j",
  "key40": "58oKFMHpERnr8HPJVmavwbb56JnN2refpzrwk5PpSid99N6WvNcYMzwsXaft7GGBxnVVvQ23gWt6yHyu8XxzHEuo",
  "key41": "2HZfr3gkwgPXr9D3BiR3o8CjjsKv4uxUW18idZXKx3m9odDBp13NAKaEmJVLzktVHMQ51bbjqcdkwttSsycWgo6p",
  "key42": "61HPo9aJ9ywT2vYfNSoFwPfejc1B3NaGkrmQUgqGgGsr4kiVXz3bYag4252RiAhknUoJGrY33a9Wa1VCyqJi7TzW",
  "key43": "QrbEjTpPiW6rc5mmP5ZRkRjnhvpWxGAnVQXXX2CA312hSS7fpKVi7eGkyrycrU9EDqvT1Jeg43ZvCAPq9aqTtZr"
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
