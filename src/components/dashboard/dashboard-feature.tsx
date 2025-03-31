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
    "2sAzib1ekQYxaYL49RAAajXpgd6WTLvvHqMD3RcHbBFEBADsa9jpg9DjUkN83tFJovwThXDr2bVVQsf2fJePoNV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6EbfaVwEu3tfFtH5MdKQVpXewGrUd49qAmCA62YffDwdKPb5SpKzfNmaqPNG58Y5nmRTjRSPmtmGjLq3ZdmyG4j",
  "key1": "4o8egxNmop2oUSw7dTpUfvubPyK6mAU1MYkBww68euQotXa8vHbZuLDuamcq4g3MKyhRQ6joxQ9GHD1niyzn6Htr",
  "key2": "5LDBzJy31cvJkssMMXJE6LCKiQp9FAWRBNUgMcNMVffxqJSkc2SRrX2w5SZyuHeLyXZTL7w5GUSL5wQcPg2u4JwC",
  "key3": "6FP2NvcLCuELEwb8vmRFZe2wKZUtxtBS93FQnApDDZq7HFexY9SvgYEeioRnwfzajXokarEsho2oYAprkJrgzLa",
  "key4": "3BVUcJUWK1W85teeznjPsW9bbRhwrktHGMHanTedTmqtJhXbeu7EJnoQRjWSx3tHTzTcT1bMXj2sT43QWrbB6c6X",
  "key5": "4gbEXGpRnvSuniv3h4HaZtokk9UvX9XdpgMcdUEDmkjEXV2bYH6fGiwnWu99pD8YNMs5K6eV1CgTyHazNUnfXkPk",
  "key6": "2gxrk87RczbSvyg9PpVBKtYnmCLc8jc5oxZeaoaDnoNMitTUS5nqDgv1RPUvYSmUwuEshnxbHdEsEAfHqTj1Jhbv",
  "key7": "2sfB8vfercULLH3kvrvjaqamM6M5tB5tpoFRo2i8TBgdhJr8FHN7R13BH5mHuCxxAQmYpRLYJduJigcnsRkSWTzW",
  "key8": "4KF6nboS7Z5TPBxtuhmWGhWnsVJYM38JddUKvWYYoi64FzWstftRpq8dxxVzNFrh3qLcwnZspZLbRo7iSfXfjYbK",
  "key9": "4ZqKWv2tdc3fr1dgh1SA8LijNFZrmoTDXUk7g1sQabxtFGEpZgzXw3PUvSqbCnap9EEeDfNSWr1jx6TrdgdXEJCD",
  "key10": "4ZFug3N3upXMNhSaNgb2LTQSyEm4q6gKUjvhLkREftxrS8PMzYLpwbcjiTyezwKQMPdRcqW1SNPNivvrdDkA39NG",
  "key11": "2LFHF6YGKfB8CyW8ixiSWtVbJznFHkUFFs9gP1MG2GjbEAcDTz45jpojW4DUF4p7vS5SGHjYFVQUVsU83XrPE4hM",
  "key12": "3oEWyy1Rdo2995GDrYbWt4MrSetNLvays1ZNg8jKqEVtHraw7WABaEhh1hwjJM84ZdWnnwFPk86kGSpD1b7Veezs",
  "key13": "287BV9dGWShk7qfvtfKUzam2GmBfFJpqERhKDMXQfQFXxmb5WgBqf9mXNVMGkztGit5LnbKg1Am4MJ1iBnZxCF5R",
  "key14": "4HGrdhV3US5dWhYNdPKSdGs9hBkAhNmbnPgaDHEjb48h3Ud48x369n9NCgQViV4mbdq5rTHSCwunTcWT2G553tWr",
  "key15": "2xs1gwEMShbiWz71wJ1EPw35K8Bvzu1AxGXmhsHYfh3w931wNmFgNhecyoumxeDUcsEuYrcmsKW6kguKvNaF7Fxz",
  "key16": "Vyq9MtaKkcQDmgAozqmUKyACMWTrvTVsJ5JoNU7JGjWox8wJ46ibj6BZoyS2qEPVWVUpCNSJ9QodCJbPoJtY5jF",
  "key17": "4pbzQ8pUTUzVDdgnQvp7mAE3vC1t4YyAuh3V93zvvJGiA2X1KUZpe2PyCHf2tDUUgu8WdejjV3GK1s6PDidi36AH",
  "key18": "4HiBV8DGCrAJGNfZmPrvXyPd9QVQkRzmL9RuePzG6hbjwa2sSzChzqCwPswoa17EThS4fBaDGgpCxycqhRWq8yfX",
  "key19": "2d3QQgdwvETaecjAz3AqhYEgBSFCKLLJgV9f1ysdmooK4FML7fwNtuWuq821yi3ENjUUgChqiMRuQLytAEDLu2zN",
  "key20": "5CcjRmUy99QbK5e7Gk6te2fCQPA9H5cXLChwBxjjXyjfV744GLb2N5sE8P7N4dqvgaRdT6B1kFNcX7CtgmVcKt2w",
  "key21": "52nbRhD8Ef3ysKCJru8kEtnHg6T1YGn1Nczx5xUScZyqs3ugC5TgfffmyF45X1MLPP62fV9bVHHw35yUuQWtde7r",
  "key22": "uVMgeXbGeaGe441XfW2zaeDN46MnXpdfhNjoXQyXeSa3Rnr4QWyUgJL3r6FHn88hm7GgP14xhQB8jpoSCsBtwVo",
  "key23": "2NGodFTf7JRDnRidGnKDggZTK98nNqnAbQjkrJevDdsx7hLfQEYUbXK5xVF1ZLCA4xDb4P5Hd8w42R7XTFcRNvUx",
  "key24": "3H4g8sMwBQoWDLAr2k1uD4ADQsKhdmEs61Q77h97iL1aribBfgraMaXobaJ25qXGjon9nG6pHfXRsV8emrD5EL8b",
  "key25": "51d7LDwzAVbVrQNu27CuhkQxQsdrUaKxLch58rwMut4Kq1eYsUuBxpCLVj5uebKZP2AkCqrAQ2h4jKyrBdHDazgH",
  "key26": "SD9W3afPMhxgeB9mqqZ4Ga7xAgdMuQZ9S93SF6n73psMGkfHGbTBDkxR3DByGbx8RfV8KK7kEo3YdzHNy49xkEY",
  "key27": "2YH1Twu9qHmqWZn713TfKGYGMXi8At2h31fGB79jpVVN4ycsgPAytr8VRifo5EtEnuTPvqv3LYde2zsXAaPruv6P",
  "key28": "EpxB1Y9FiKJpAguQgqFdACWM75fDx9pk6bn4NpNn1Kh7ZBLaD74itvT5YAgoMrJ79yzMccFGT7ZD3CoMo8Hg1aE",
  "key29": "3RtsAfLetNjqQuSsLENzZETgopbLpDxrk7msHEZPtCxJqmypb6cRGJe1AswFAhbyq93HqKoZ6DSkgBrLnvZ5chk8",
  "key30": "2Y2N9bnLGFghaP7i6PGDmms5dWnT9AT2ZknCkptUyJ3BEECfk8NYrVhV5PumgYzvACLY92vYW2A9fnSLRmc1uErX",
  "key31": "2Z2wmE9EkvBgk36xx8RuBGFQms5YS6ULFkrNpAuZEtonwNVwwjC7xWC3ugdXhy5YJQ6zntJoGqqtxsLJ1tWLkWKe",
  "key32": "5VaXw3AjAPGrfaKL4ZECVSf53dQgfirtQuxbwDL1Hvm3AsAzF26t71mLAZYdhghtkErAQbt8eZvzJnxQP5T6onSo",
  "key33": "5RxRfEAA7SkGDweUKHgQGcrd4PdGMpW6TN9NbwTTmjBVYsafqYeVV7zWFg2YbsPRZGkkFhQXgZJEkuLgV2c55jAx",
  "key34": "25gFG8Ut356mP8M5xjj8STa2dgAfuuGkcqVwhz3C3Zy24UXMMMFytGHHr111eaYrpKBypnVe6w8gUvxrcYb1MzUy",
  "key35": "bta3tPKYdU2VCjmNnzSnjkLKhyGPhAr2SWWcxRzJ4J7wQdSDYJJ9KHP3BsAQyBWHNQZz5AdTD6MudjR3Uxr1WiY",
  "key36": "3t2U6a2kYsbVGD2hwY73u4N5CpnjYaA9oCojzNFQKLJut635vm3DZpG2rXuRhj5n7Sk4aQsxxYBUu6ghHZqUg9ic",
  "key37": "4GHEWX1drjV8ZpCPLozA5J7f24TSKfTm6mEJVpkqeyoSpdbs58KYsG2qikA8RVPFNoTbDRdmv3A9vJbBzTkoE6uZ",
  "key38": "2H973A3tgrqWFWot1jXXA7FfiWVsyqxrYL2yjaNdyLJzw7dUa3nYQ6xUXwu7gvCkxP6gJjNFPr5vNjJMePQiVJq",
  "key39": "2eu4QSWLXNxH2XYSqfVsWNRM5jRedVt35pxMqxcGyr5Gm1CS2ieVHAzn3Cz8YYXHWSUJB77TZgWpb3SNjWYCTwSX",
  "key40": "4nsLHc9Nfw4ik4htBs7hoWV5tN5qasMwRqUYZYSLhzrNeP6T2DhWnDjUFkgvPhKfVFtvoxEgxs3myKgFv7ComCKZ",
  "key41": "5z9JNW7L6AnMdgBoPVvbfV9m3MPAJryztEbNaeVBYEi7kThkhLqPnwT6X7VxQKVLmTB2y3iTuZrPjs8xvpnHyvmF",
  "key42": "2ZydYYpViBC1CqfxQvqtXjMVMVVgXkKKBAty7BQxsvtajYfwSsyRH6Wi2WNaQpA3zjfkZJ4RUbFpsvgXkQjRwz7s",
  "key43": "2K6VZXBieWPPk8mv9CsiQDEJEXLYAhw1MLDpGZ7Gcn3jeZR8rKZ5zvgtZfPy2F8wKEVdGy5ADH8cEf8HiyXssQjn",
  "key44": "5XnwWJBx3wW83yfoNarUZgRoyDLuippPocyTTvDThHRYEvDBYkuRMC2rQRACXbyF8JEN8ub1CYvHwJSbMBmkEr6H",
  "key45": "5Qfc26JvXPBzuhnFejXC8HFg2jtMW4rvAoouMGfP32b66Cpxh8c8i2cUM8HYV41C4Qnmg6ErPMQSvkKwtYqUayMu",
  "key46": "4LEfsuranAVAAzDMnWJjcCvX3c2VTRnAtrrFXivW7sZaFY3cF6VMGh9jQ2LKwmxcMg8jDTi7wdHsokFNS44mzgTN",
  "key47": "4KvNNy7ibEBJNHzLsEnjEPqSEj6X3cS8eZE4TLmxy31YkttB9Esi9UBYXMRfTCSBqJuYX1SR1fhVqaVwAkSFXc9x"
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
