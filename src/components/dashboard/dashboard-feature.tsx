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
    "3RFffGHnQzhmzuhgo9aPtP3gctRXgCoxRpf9mt2P5HVxYrx7cRtxtdcKR2WJVk3zKTnV8VbPCY1P82hJgK1V6G3t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4veLLGnDac978woiyNDKBzLdpFgytR5DoftUVa2ETZRt82eGn4W7mdDqnrsRNDMGNuosPWWX28JA13RFSo442dB3",
  "key1": "2v4RdbLyF2RFfoUhhpYEewnReG9m8J9KW1WB7RKhPYRFPtwPhxx8Cszk8NfvsQkzwnXtB8vp8ckcffMfw7ZMgjEK",
  "key2": "3kvACsouh7WzedwfXeKsW9sPcJu9p1Uop5Kd3BAt3kiWWJ86LU8dSz17dZqoFdFB8mpNAKAQvTTC2NBWj9jw9VBF",
  "key3": "41jLpBoUv9DUHiLZdc91iLtx3wMrJWe2eB5tWQys8BKEyGwKoa7Hvh8DZPyGw3b5CW1RawEgbkFeDTmCpTQFtsgb",
  "key4": "5Mse4RHGrAT3fxagLXwTku8mhS9rgpDVsvU9puTAU5KzzmQbP6yGn2piAenAWnrxZWm27sY9LTTcQzQER4RknkqY",
  "key5": "3cvHVMS6ZtxQxcygKCKZ7Krdh4cBbp625eXXenBGFp1sg6hp3YAztS56pLtWxAyi9LBChLqFeFXmuv9LD6uYT35a",
  "key6": "5shTkH1dmCv7GRY3VMD6vCVjYfFYb5dMP5uB2uQvsSvZsJHzBdHkzsUTB4TjjqP75Gnd8DvK2mjPg7ZaxZqnmn96",
  "key7": "5NRhvdLFeMyCKVVj2ZNmbzL7VR4kfWLLgZuG6JR6ypi7bDeXb1b9TiGiMmZua6B35KbGwNB4u7hPgb9Y8J2ny3ES",
  "key8": "t5HUn1GMk4JpwhA7PpTVPqVBNLnvs8BiKigRb5buAkTdcekzUa3NZBjNVz39iLGdXBwMwSg3yVtBSiYLBLjxNT6",
  "key9": "KdMMsFHrSLZRZxXLkMgtuZdqi1NobfFbJ87dbt8SnGvEfWq63uE7tE2HjxCYoMjfwgxG5MkK2zo36QyjHnquEh9",
  "key10": "35VRefXuyy3THYf236WHmpjy99AQZ3ggvHmeErfRPs8ycuBBm7Mk6iy51hD1s1eZRY8wAow6JqCLKdQqMMZhD6yM",
  "key11": "ubY4FocVdpDfazBVJDi3jEmjk2hNweMWb3zsrCJ53BQVsCtazmsgk7CJTg38zZkxqjqceDd5RDpSPvbqzuSU4rR",
  "key12": "3N7Ghk1hT4yYEMPPfeMpJZYL3QSqGmQH41qMGEwktfmLSri1dP3Y6gv6YQiYj5NgyaQrF9GWY1fFFr26sfqEDgPV",
  "key13": "4ikmXaHDw4dErofsnKHeU9ioqg8T4zKo1pC1YtLDZ9dcSD8px6ZUTbasmoQjq7kFzASMQuyh6yweLrjcRo1S2wj1",
  "key14": "2WrQcm7RSQKXmc6pJhyCciRuAMoi8StPuNK5jpVW26M53VBYoieUcs7jbXb6uVpp6xRi12eobAoCzxbd5QzEV2k7",
  "key15": "4XeUMTC8Fhve79JMkS8pUJCMtWhc5oKL85Nf5YQCx3JbE728Wbz4SA3EaDBCGN96HABDi8FHpuJn32ABQBB5q8rH",
  "key16": "5C9XJvY68LLYjHKNEQe4cLvQJ5DZkpx7Sq4UAuJ6cMgmNNG4fGKZkvKjWZdX88ZZMczuUZYpbX9jj1dBSGvU9UFV",
  "key17": "4AtrLtkbgWNMoWg938WanMPrvVKYLxPwZZrExzfm3PmNt3tbLC5J5HmJRBsGVJ87V5SVkwSDWiqKi5XfEvYi6JFa",
  "key18": "5tSin8hvnftKkGsx65FveDyFUzGohyrrtf98MW7ftCVLn2mdyoXJy4v38NgLajXRBhcrxiunJYciaNxQ7Tyrb7Rd",
  "key19": "65ADG9cZSo7qK9kSM5MXCq41yJ7dydcehKcbdsoS5QFt1PtuBTjF7Ais8srkFLYyytNH7svFDSCxgabCqX76Thr6",
  "key20": "5dEMgVnbKovYuwhpo9uQPJseDJKsnKeHfchaeqRRDXjrFvFXhYHCQ8ZdLXdrXcA71GieKD1fffiNUX4ivLZWQUjn",
  "key21": "2tuMyCFHUXtFUA5kdjCLxf6PpbTMAXk6xUkqWU43KLC1xmyPZQogVpSmuaHo3uwm1H4Lz5WDRKr7rLKVohzyoxrM",
  "key22": "32Nav76aAktyJ76nCBdNfvrKemyLWB1J2aMNGxBZGqV6KySvjeM99gNKnrPMBcYRY54jbvG2u1aZhUiignT5w9J1",
  "key23": "5Lwvt4a1n5NQJpThYWAf2opsMsvr4fGquFf13FLxuhssK4vpLD2uBGFGaeiS8aKyQobd1TXbe8HouM4WDyLZbJxt",
  "key24": "4QFTaXdpu9KmjzXhWvkrKvduyXh34JryET6YrpNTmG1SwqGpxrFoqPtRFjWuhFJHLP6wsWuCnkMQgvt5X4Xy22NN",
  "key25": "5TgoBa7ijHGiPbcF44Y9utSTiCVw9UDCZ9vAXcJQSCRHCqJG2yfQ2FNXoEsd9wpDJss81uL6GJ5YwM2ibfbJoK9Y",
  "key26": "b2JH2Ld7Uk3Bt19rJynReCvvztMaozuF9jHskbV8NUPHaqfwAcRqDcdNa2wSLqfrjSA5v54PRgq6L8H4pyZQMvj",
  "key27": "3UQ6xQpjobLVBrr4aFk97rVHr5yh8855BVZWeqAmpZaaabWSQiacXBCek4RsENWwcTNTAv2vuabVz7n1yDkUv9wk",
  "key28": "4frtNQr7b6H79bqmttQHiy4jpAfgH3EwtR35h9tvkW9G9mgogdAutxLuWnVvQspT6Pig71ed1ML9MKKXW5rEfawr",
  "key29": "63x81em1YYaS5jzb2xcfqaaodHuZVA7AmQBuZVvn3LaqArWFsuqTiDpSqsNjky8VgcMyYHS1WyTJnbiK2QaDjuqg",
  "key30": "4FfzsqG97w1xiTLYGYo31jhidFt959pJwuCdqwuMyX1iYKeRe1yFMUEukPjpqANsgy3kHCcKfLioK9kJQ717CXji",
  "key31": "qzo77BYZgU7YJRTgXLyUvJcb5oQWATY3m6sTvkpoeLfbAXqhAR397AxcUVfpNtKZRkCnVsutgZk1MopWJNLhrTn",
  "key32": "5RzfYivjgJw2hHtWDzbZda1BZtqt7Aq7YKPPo77DDFcuerSW91ESC4HZxoTb3Xx9VhAvUgQKKfara3Sk6r7bHL6H",
  "key33": "2Hgram82QY8bA3mn8YgFTvJD2iGQdRfY3iGnjJhBqHkUz4KnBeqAR9r3FvPtqjudJkwgHycuNLUBBHfj4b11gmWz",
  "key34": "gCS1Cv4AzQfwmXybr4WPZTcUFPpMfd9CXqEGSCvMBT7BKNjj8KCTErHGaX5aAZcFLJ7aRbqg7MGuWGc4XpCM3fc",
  "key35": "4ZAfQzkg1CgPizjfZD6rfsCiNo5zBumAUgoaBLkbXbaVHJTDHhDrCLkdtH8bK1hdHyfCR8YMmNW1zhMt3iFrpgz8",
  "key36": "4bQwNdP1nAoGWbn4jKhtCh59tXojvixJ7nNrLtWC6SbwwNasXveKHGU3Bgu9qQ7aetbzAkyke5MxU31dmYCooZwt",
  "key37": "5QY727s2DPqnk5f6ohoUSQkbviDyriHgrydGzAEeJfXRrXozdsS1eyHDFpWxfbxCVC1jaWtnXLrTiBnNcKSRjsDp",
  "key38": "2YGSEeKazehVN98SZv5QwXdMMbi168T8fpsRKix7J2gm9p26mirJzouDEFMhiRJNzEmJWruXcT2qijUu6jPKYaLm",
  "key39": "47hng6nfbackAQuGtWv7Z4JDen3PDffzjX6r5nJSC9VEJyVp1mnaXmsWqQ3rhmkPsb9X8nKiAcpm587SmFDGYmJD",
  "key40": "2dbqu9EbNg4utmE7wvUEHUM8pdxcMr7b37Jk5WaSjhebTwHQrSr6RSkCFDPfR9oXVtgLxk2ewSajV8zrVJ4Zaos8",
  "key41": "4AVzAaj7G2GLm6kCvE37UDBgrRKyGb3iXM5chaU7GeRiTkfckyiQ73cQjnd2ofRQztqr8NNGs5RPa3QwRATTu292",
  "key42": "21HMeA83ZFb3kVesshTGY8Uv8HDmckEBUMp9sdNsSo6zbnEogN5bavsagmGQV2uAYCgE6NqUKip1dkgNy9g6whJJ",
  "key43": "yuwTsPX7VyVdVrVRD1HXEZGMsBQfVTUzu7xN83NTBkfFV9dVRjfLon4MCyUNkJxHfwvE1GWKNap4PbdM9izQ4L1"
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
