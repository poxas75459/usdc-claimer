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
    "3KvCRTaSmXmSPQguNwAjVwJBkaj84XebpvS9hHg8HXRcogwqDpQwQySerzAi2yc8VFgQNq7uKgK4sSx2Dfaw2TRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zG5D5vXdZo5iyEJsfcZgFh6eo74kdRhGBbourZbsSTojPdcfVPmQKzMQjySq4kooP3x3k4mG9UTz7cAiX4LfSzJ",
  "key1": "62w4qxG49QmedUybs5D8LYs3DJsNSiJof146a8Lawx8YBmyiHQt2PUWNbK1NC5sJqYKBp9MW1egdrdSR2nmD7utg",
  "key2": "2qMPzVTjGZmuqkB6x1XpCnypDF5FZojnPfoWTFVFwQ7JAHvE3PnEQKdZDtDJq5dik8UXddASZ52K5kihPNhRuown",
  "key3": "5Hih5HVzGvcDiFDNNViWvNWv8J6naDVFx7DE3gFMqEPQUBQNomhXNCFPNHSqtCW37hF6w5wRLnRTLGmcUSKUSb6A",
  "key4": "2P9KcCuDU32sNnsm9HXYMCGMbcF3W2era6rgRT5kJ6Yze5z3BmvTwcMm5s4GNYvHzNTbmRXmFPrWW2vo82iLBAHg",
  "key5": "VA5WnZh2Su7T8jLtrAjVMX9p6CoMpoDyjN57UZ7NiUKahDWyytAYXSbcZiQVMpcxTqzVLdiiZhTYFuwSjximaMn",
  "key6": "3bmfEx2XPZzWVAPehDvWHWX2t47TQ6LtdWmfCWLcPic63AwzBouXoBkz3u5WQk2DurxRvNLezutQMHji75gr5aXz",
  "key7": "dPgL8TGTBVb5k8WrS2dpZ1qyFPw7LtJHg7uzggxQUY23QiDnULHknPmxiZcyUvu7rL1SGSqbYqWM6servfLx6yt",
  "key8": "3yHVrJeT26cz2YgZ5tE9b4wtutTnQCY3XHFEQroXkhByt1Job6z7ZBCzhqezSVYXGveqJNcRooHAV64PBsRzBPfg",
  "key9": "5fCSDtaRQBTAvpkTHw2Bg1YiK2t7HcM2rnpLogc9dbMGuWSW5vFVGPYgWjv46GbsUG6UvBdDa3woXWmuVYVk4B93",
  "key10": "5DcCXTsYSghF5LYBsPwK9KYoLUxydzC36BgcUQbpKHjAFCKVHPsH1f5BFztMxm6ZGhK5tezggm6EUrrgjNPtqRPi",
  "key11": "4mLyTbj7a1LsaiUzm6s7629f3mtBtFB2aDUPsAeLrZ8RnBEmCLQmnssxRHD8U4BQy6QYKcFKU9NVEygVP87bEtS1",
  "key12": "4SmEFPXU4BFv2RTzpT2RbjW3KZxUUPkRtcU1MPkGa5r9FmEb67RwLXRxFxtnn8CsnBV7D84kjyerBcPeUX2kNdyo",
  "key13": "2B51o1tjUQDqAv9NXN2HBRU2fS3gGds3njLrAsJsNhBsaAN5q7Akq3wTMQYDbfscjMaTHHCCPgbHxVvna3HuFYJB",
  "key14": "3u9kvhH96nsB68KcLucH2s4YTtsvPwXAStogzeufbdtpXAsoiUorFSAwpzHEfyp9ypiJVorz1eguYQdiSap5LV36",
  "key15": "4Bs9sLzz1Zjxyd87Bed6pFkTbuocVKvmaZXaoeZkJwj1p29yLKuWb1VeVFm6YWdTSR67PGvBX3EsB9ZW91Ccmh9Q",
  "key16": "x3LhZbCch9GBhXYT2bNcyjcAWsGNpmieQG5inpbhGvJ7oWuR5761SvPYMiod7c7K446tV98jreUeQwxPxxw2DBy",
  "key17": "vFuJxN48p1WfPBptZikHebnRwnSzYaG6VXZZricJpB1itZeTZVafJenygQsrXJW1dusTEA93wKcmFa5DRVvm61R",
  "key18": "3TWPZLJ8bFt2u6HDtD6pvQYToQankgiEhCq2BQa9Ycngvfv6qKFxfFFwFp657yYHMYLmn1aMv5Rbq8EfKNpv9jJf",
  "key19": "FUGrzgRvJQZXoHEUu8eKFPPs6SCMrZTrF3Tuj16tCohzHM2m9QpKBM2TqusupmQrou2Jx3sndFT1ZdqvjhHPNUN",
  "key20": "4byZYyq5cieC1zN679eS9ceGER1HTCbDmzsj2hoPq8o54iSkLHtERVv5tWUqF45e1aM5N5g4Knd3Sbyfe3VWYneK",
  "key21": "3DyXJ1jNcVCNnijfkycQ3DL11eUJhNxDqxERKFiHdf3SFUnLrutfNXj5C4LLGjHDM5uzeLuk9e5Z6arj3ztfQCif",
  "key22": "4k6DMpuv6PM1xnmzgn4DgmYsPRPHAherNQfcY8koErDc2BcLRrppnqdkGjupDYPKjQZV2DX3x2puuzoRfJ4f9iRF",
  "key23": "3WZxp2RiaFirj7rgqqFANPKG2xedaWykP79aDBawCnXWvnsJpKajDSKcQuHbZGctCgZ1yn5onjarP8ruLHYc4XXx",
  "key24": "FA8TdaBA5DsDtsni7jpABmMNXkinz9gNkHytjv22PHkhMtALwHz6evtNCfsF6zkZJReWP4663yGwLjVnADSaN4n",
  "key25": "29EEuyZoEWPHuPLuDPZ8j73AX1r5dpedr64g8p3XvkE6PGg2nReEbmUUJZLw3cdzkiDVHNwLLoX4xNZSZbTXHqMh",
  "key26": "2zQxCt8e2d6keNZDEMREVNd6RUA4ztSQrf86wpmkEVBaupjaf1ER5mfomERxNTu1QjDVH4TkkAmpUumAQW5YkxHn",
  "key27": "2hLtgVpTp8EsDeM7S38dZEv9SHMc48q1kLPFe7yj4tJ1pK8MRt4aDnKikV4BzKwBtth4ac5rUsW4zLjK3Wt31qWn",
  "key28": "p2mu3UDwUqtVWzFTTWqA6LoQcxAh9rQ3DKr3pGZHjGSEUVaCaYccTCJYadh4izS3agXN2ofxs2bKJWwZc3kKfWV",
  "key29": "62e9oDcwFzqm6Aji9NKrkoMbHQ1K36P2Gv71ivMXosPJynv9HbVpzTRjtoxs9JJuPAZ3KDVrvuoW5HFmumHhwfaN",
  "key30": "2GZ9Ez5XXaUXWcYDaKQvm2Qpw6kpbgFSnpDYg1JbFx5BfKbmYwXRPwq2bGFM5XujmAM2KKmgEDsRmby5LJzMYik5",
  "key31": "2pihe3JxvrJLAdp1QhekL7HwSVvQFCYyFdZ8Pdmv5JLWM7a8y6LX4pnXvZurWsYFWYUZwSSgPafw4fi4sJ9cwWdQ",
  "key32": "28jGb4VDkNog7Gko8zLQf2rjUoEUUiLRPepbT7xVvC8CLcNxnBQ3brjgtSjcWA8aMkJ7Ki37AW2wyooPMJqbX4No",
  "key33": "ZddaeHgAbdbK2amcScCpjvA6p8L2CK6Y1Gg9GbLUuVqiaKxR91zVGQfNwqL2czb9DroxySFTY6Mwq6BB7JhWwAY",
  "key34": "57s84dDJVsMMaZcEUzUwU373SxZkabPjk8vQH3RcC9ZL8MKM5GDFzCBJGY4Fw1YFwn3qK7bfFrxmNqLKje8PJKXU",
  "key35": "62a9nyL535u2zwA2P3fNtLLPz2qwnLCujNCAZArbxzqv7T14YGSwkrMbVMmdud7CvqFTfkygYVce5wUwhEfvTwf2",
  "key36": "2gNqh4MopPTjBdedQGyYcdx57CFAkNQsG79Ze46MxvuK5ZFkaWAE9vv6KNUJxHNYdjsdchPLPfr4SY4qqeEzBWzx",
  "key37": "3LYZrfNJC2x84RDJMqUpMuTeqHq9NZBRFYgf3NWPqKw9nqRXaWphGZFduFvSo5NHDsii6M3MFkUCmCrL7mf7SvGp",
  "key38": "3pvKpYhoNGdxzTUSRciAy3Bit64MVpCRj4EMHjtGyTmy5JLmmdcxUddGYTPqScgu4JTPSBN1EXjaJ1fJXAH6bqbC",
  "key39": "4y323LoMXCRBks3BXyoTMh5aw3za36EF1N9h8uLYEh5vZ2DPJ2aBYQHRUhvjmjbXFXPqSbdvkA4kXLocXWqh7eu9",
  "key40": "cz1jUm5VV2FXpf1JspE24pPHroh4dEcyCt7B5jG8W6QAYGge9hQezvZcpdRSY1E6WytLyBEEPFArbfRappoamin",
  "key41": "4RQaS2uJaGC5gZGNEcvHXzv3iq8W2ZM8sakT5QXikFwDJKjFbQ2cBfZHJaw8zEhakboqYRyNk5oCyqzyZsRs4HPC",
  "key42": "4MsyM1md4qiLRv1bMAUdwv1NwQLMfgmJdiMhBrRfU9zaarJfhm4c5P7MJ7nWRrem6najtAXnBTeQq7ASpsU7Zx3F",
  "key43": "4VFxD1Pvh8PtEUfoV8Au5M4GFdDHEmg63fWAMTjZuknB8a3km84UY8R9n9tnkpfkM2yyh8nfKxcdMiB8mz2ZwDsp",
  "key44": "5SmuL77Ry6Qt1DG7ojiAaWnZHTd1eiwVd6wLuofcJVhCzN3euF9ccbSupiPP97xM8KyfPfGgrfTU9cpU2uch1pVf",
  "key45": "rEjhH7KcMnWCk43gdwM4KJgcdmWYn1AJm9cSkU1NALuDgAjfeRuvjoVwpwNNskB5ejuLBADGDQAjnKYZoZbwMar"
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
