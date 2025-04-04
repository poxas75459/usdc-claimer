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
    "4ebdQeZCTpEjBBP6FLCbwoBGpSEVMQMMvGw3HUVrqmYP6TQdVA37SM8iJnHZa5C491cah4xfjTrjqj4fwZayyFhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AAFyCmUhoNdRL8JNWhbh46SqXwPYcAGyT6gzffGmep99zPpXPoan59WWZRb3JkMdE4y4n9A7SzTZvikhYA8FwAR",
  "key1": "5sthw3CA3jz2xrZZ5fB8JXgFp41h7jas9r3534xDi6H5i2GoHmxFjjBrEeovWSRRZ9SoDVpEdMmsx4FJ2Vfi1o3n",
  "key2": "3HzFmUpZbBgHu1HEMfhjkaiW2j775h7h7kPKPSt4on3jdqB38bKiMbhcj4hiSGM2JHVa8rXqd66g4DDvYKeuTezh",
  "key3": "eqLUxWX6Uqn8BZBbXnEoWPrZw1enu56mm882315TE9ETpPsBcwybRrzmoWnqVZ5zuhZi8fuN5ByZrKWQ1aumyZi",
  "key4": "3fp7w7dF9fkJiavDjNSxFsNH9oQMn5m1TtiUtR8JCxLrUya3FVsCnVQ29QqgHiNKWzKe5LZJyGqKZsV5FdmJYt9c",
  "key5": "SDn3ojf1DEmqvAVSSR9dTHdMchp37eawbXWNrCVb3uH8LGCv1LJUTBABjQ2uUHCFUF679F2M4LhX2jsvLVPSZGV",
  "key6": "36B9P4TeserXX2fp6u4dzZVLYKze1U7BnzQjRiPjaRy3DJ667YFJBiMJBRP2kY3p7A7FvM59brVF9WhEnnAkE9iU",
  "key7": "59nqs3AnjaJiwVkv7Fskd1RS9XpuHjUTNg9TPKY4JuWENBQ2WScDvZQD7aonxXooL4uvqsi1MnR9wygDLpBiVaVX",
  "key8": "47wLtsmPMSGELMBqGTvHQCb2DeHf3T1iWx8uHrKQmjiBoborWSrL4QLVEtsXPVairm8AGm4kUQfA3wnXxqgs9c2A",
  "key9": "sFW2cJ6L9RfszstcqqcXYpNvgdLSJNZtesV3QscjfdDDMEAeqNAAShkYGcbS21JQGsxQHPFwjYHQKVZdR2UzYmt",
  "key10": "3TRwVoX7rJh4X4xhKyMuMvDwbe6zzJRHNVB6KMg2kncZV9jxMu7ohXeqCuANQEikNnBK6Q1rqcCj1SXSPVBUTmU3",
  "key11": "5pN5BpeU49jrBYHstQJ745kbAWpVbvYJuQXRKJyEiefKZMJD7xixoeGbvnwFE3nHc5KuftUS3JQkqAXGTS8gYKWH",
  "key12": "TTeWVN9QofEYFc1GuC35LSdpP7KcF5tviP79nwfjJCtt6KW2Tp2csAz1ai8dXHJmXg9ozdQCFGdMD2rM8d2PrbJ",
  "key13": "2pJrpiPmGpkfov5HShWdn9qrmBZrcahvRNaeY65kgoRRbhEp8y5TyE9sK55Peuc52NeKn337cauXHLqUWJqPMwYx",
  "key14": "5j38CG62VfLuWHh3ES1vsA3WNgvuEs4N7PTMsMcmomoKTpDA6uwyqsNnCthUVsxGLvdE1brFnWgDiEUgjSD6o4b3",
  "key15": "zkBkx1xz1sfr91qSqyZcEUU8iUrPFaVWG8edQkGthzgAfytZWkhyQMyLrncFZR5gypuAY459sPndWypvNTthu13",
  "key16": "32HNLSTWsttaie5fgDFFEGPmgrwzpBGV2vvjDXvLr363GfC39C2ToM4sTukpRQMt7cBH7aXRcsXAay1RE5Hrnxny",
  "key17": "31Emyvr4MX9E1RpBLf4ntBkVjMMg8auunJYi3prfi4pfPTXA43zZpzAghzLi2M2uZsTkHX18fihpk4XCyfEXDTUK",
  "key18": "2pKoX2kyG3ivDfwXZHmLyrgMXgQ5pNF37bvwwXsi5wZ8meoEcRpLE1YyDt3nqUJBisCdBtiBFrUNnvyjkU371yDM",
  "key19": "4YjY2Dr3w6xAgMQQPwyXsnP1u9oEj1TC35BRmFT2mpKoyexhnfiCtKqUd5VVGFaor34RYZySJ8jGqhXvZSrfVWNm",
  "key20": "2zVmijVuquVE4EjwcvHSwDm2MqRU2yAmZykMjtXWZz4QFhBDzXPSJJKbuQRsEzD7wWMyy1AdF41BCtbU4jv8xYjs",
  "key21": "2UdsPbroH81nBLteorq3SGTrgUHdhmJSwYSSoQtQ2VVW7XLHE7Uc57KaU78REL1ceH76PwMhsFyPdGGgmXqqRTYr",
  "key22": "4Xjs29fWL2rvfBbW764EkqdRodSKAByozs3WctNhogdaV9LyLvTXFpRCTnS9pi5DZnJcJ4ajC9XGxbXVEncDAEnZ",
  "key23": "3VyjYZDtniozwwnVZPSDuzDcxLiNNgYzKGahDrCmgHZCXmmi25XtVLc87CDFTjc8zCUX3s8xcqvKjYXJjoL7L1wc",
  "key24": "4Ubyv3LPvih8T9JTKYviedNqDXkZ1PdwHWmfF3FDufdBAp92PSNNG8hBipYgwzbFhosCMM5SV2tog22B1c5gpzEM",
  "key25": "5Es7N654R33So64eir7sypmLoCjHkb3UY3gBFESc6wYur4kb1LnrHKSNc2fzfrnWMK8yVsy2fa21Ebq6UbHMxGmy",
  "key26": "5iXzqhB3dCFxVJXbDCBoNFiCDqDYCUGnrxuGuz6Mn7fRbAUsPcix6o4kST1CT1mRXKTmQ6Wnvgz5PbLdAHEkWSr8",
  "key27": "5QzRCUJ383rZwg12RTN9YsKxacPaGm8GDgUY9iyCWG1u5xYQmvVURBySiC3HxQK68VEJQ7JeyPZ1ppSzcrPBtpbv",
  "key28": "2MwNk4w6gyWCkLS4S8MRRgKqtttwym6knHt3xXyYrmtGtNnxpJWRB4ez8SFv1RvMn7roX7je1c4jHuhaRZC44NLh",
  "key29": "wFhKxHKoUSrQM6nLpASDUK35d9GZm8Jz1gyugAsWJeqXYauZm6rbyGWABVYBZn2K9EyRpZhjwh7yFJxjhHNWzZy",
  "key30": "3LNCB9fNdfQS7GXM8QuTsWj3MJzUiYsXT8fpXRh9YoqKFRdU5JQPdoJ8PSaqFzPRamNaVoCVpyBaZQaBLCTXA3Pu",
  "key31": "3xxTFrDcfhcMmWh4qeE5WPVoLnsNPFNFB1vhFE1xT3DMBBUcJRy2cESkDKEb5KRWt68AxjAwe7YJCxBqc7Ng9f7K",
  "key32": "3mP1AmnUvfMWVhgRMjbCrio2vBxj1N6zkqcZkkaytvTacSrdu5UGgtJNGGnqBUtSFv9KVQAxHfSSX3dd31biGyZY",
  "key33": "gbjFweUjyjyVHsqyXLoigzXXMnrEQGtXLz13vs36ckyN95fce6RnLLxh1RHiaWW5wCD3gupGe5fzRuicu23MtbL",
  "key34": "37kXqfzYJXTDJDovWU4tAZUmGZ3iF6ZrzDbcZWCf3Aq8dzyk3Rmv1L15kbFC9Dg5eBqtveq6eWZn6u8Q7gkgJeC9",
  "key35": "mVoAF9mjDc7mqVqf7D3nFXkVJ2MwzDFszCQpsDUqQnCLfDf1uY7PdpbRdAgm33ghA1ArYhPLt8zQHFtaQPkbo1y",
  "key36": "3SHyGdc13gT7ZaByiWBogwBaF6KFkYQoLwpuPmjKgMJNpj1E6iAJxpYynatCwZE1SyUWL1nEEDsc2CBqCEikDuAs",
  "key37": "3DKr1bBToUxy16AFEPawB1cHa5EHCpT28owALvpQ4Mk1oPFS8btKLstNs4vWCy8LoAQ8XFDAEEQMfoRU3oYChfqp",
  "key38": "4aNj3KJAHDxRnwJ8nwzyp9EA6jyAYLLZqKWpRzitGc4LLThwzVA6SqMLJ7ieLbQkHteRLabjeFtZA62ahC3wM5nx",
  "key39": "33h6LaPpNy9reXchfqhPF1UKg7PEprhf8zCS7niCZEyDwANAN99LgdwY98PLY26C5xVRvBEjxk63GtdaFkLiqcdP",
  "key40": "3pRGKJoTjpbBHnmUj69q81kMZSSsyHNTo8CZntqJNayHJybd5agczNCrtc5J9rSXsBNNr3dejEwjxw4oW11EKr3G",
  "key41": "4h8RDV4dSiGgL3Vw9fk4xbXJbNzZrwFZbeQscEUmhQigpZcHaGY96rwjvSHHHwF5cPtrhyr8zXKQ5v4VvRDkjwXp",
  "key42": "4pm92Z5tUaRnrMzKJZTochxvTF8pqceZRXeRkwmcLKw9kH6pyYje3hV16edhW1EfDpqFaWJRTerF72daXVAp6qiF",
  "key43": "2KrJdg5kAJtkXQSTWauneFZcqbKVCiMNUZuC1jTB2JoaZtR8f6ZiYmLS4qm287Nf9VUsBquGHs13GbYQ9nXYG316",
  "key44": "54oHm2SCnnM9k9rzyrKgQR88LCTF5YogigaP1Dz7B9pscEYjruLfS675ae1cvHrLLXDQJb6YoxtdUnZmHK6iFotn",
  "key45": "5dng3iNz7pgbyFc4rQ62LnQwAaA4mPEKG1qmUhP369uwUdtVKDzdMbbVMeJBM6wNW6nPAiZ2KbkB8JV4DHmg7g2d",
  "key46": "2wNsvx7UWGRiJKLUB6dBwK7GeSGr4DGKKCs5qL3HQVRBNLWTzi7mCiELviW1PdG4KqqnLsWb2Coh7KA6VkG6QzW"
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
