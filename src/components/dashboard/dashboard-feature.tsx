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
    "5zeXeZy53atSP9t7Rt5v5VZGZxTXSzxt5fMVDKjjc52VYvUxMRULxyXwQZ9qjieqkq8d5aL56bsude3rz9ccf8iT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R7vzCqJxyMEjB8Ne3dcbnxVoNVBipSNkXtb5XVpiPRPWZzVJykEVoJgRfBEY9HiSu595ZrhaqPTeBWZw7JYx4Jq",
  "key1": "48aLTuBQoSFNoHvQDeUmeVCTW1Fhwf6qYufhwrQBWmXawicoPrLJZb4GXED8ruYeMccTN7hPHVNC2xunfC4YANdJ",
  "key2": "35Go8VM2jWtiDNcNHJMeqTwS2QjqKCQx2jHQBXP8q5HVye7rL5dewymK2RWv8niEq2wGmiwEEv9ZxdbsZxbakRyN",
  "key3": "oskn48cWHumQQ67miN6simo4dMEP66Gr5cVYHFaP21SJJ1nLmf2bbNcKCwT82XTL32FSRjBzi7FmtK2FD6taPE4",
  "key4": "2ojyuZB7uJMcB3HjbSYmNpXmV6YrJy28Cyja4RGyorWepzGMY4rEATXqNQ6mqdL9yD7ujtUwiVrSkyu5AxxvWEbF",
  "key5": "5Rk75yJiXV48qFt3t8KP2uCCBSbDQ86ETwWUPz8aJGv5d7svZThBfEPceP4WYtQirUqebrx6QYc4qiKnwDx4CNrN",
  "key6": "3JwEGHSkMwY8BgtihyoNAuTWg7Ay5yWtT98uNh3NqpaRMaq9U9Eqcbfa3kWjKiMNz8yNZYHTKS41D4fnHr7AJYqT",
  "key7": "3u31n32fjTGRBqAEwmkP4JmTycLehXQq6hTXURfZveCGKrgP9A87SPaoPbBaz4doNYr6eCUkJANNQtsLdgowLbWm",
  "key8": "35cTjqCjWw2WTVn8Vsrimzo37ZMA79fLtq2iKzvcAL6ajhoxbAm3w2ntKL7mRFWozsfi4KFneX7c2su2wM3zpa4n",
  "key9": "JyzMjDkTSfDmQ4aAQ2yymsf7KhxRPbM9jyUJUbeWV4KwhUntrNg7oiRTsFtAmTWL93xjTzYDhH2rhLtnK3Kk3jh",
  "key10": "28M9PUVqLKGnTDTE9STx8fc9xaLTrBseX1Ek2EK7WeFdWUYVoAxVQQ6ATLMM4DTXuygkpxsYMshXUwr7U3dYS2R2",
  "key11": "4Kg1iFgpMQyTPrqSjBPs1pF1qV9xnAWGQcGq355XpJsCMCz8L4fUPscSNSxhtqKKRXcgRyPEe3sE7XGp7u57ZUx8",
  "key12": "mhQ7rJzLMJFamawHtFvsGH9mybffoWXyT8FPscoCHoF3t4uZPq5NL3rbhodoENUunfdyN8uNJcXreEHoeBTyi56",
  "key13": "33MVTmvBWvGU86eYu2K9LX6dMornjfQwMxyH37VFppZ3DNaZTgVSTL6ywzYKMteVk9zoipBP1Caf377ZGEnDPdaW",
  "key14": "2abd4WEEcc4EdePsthDk2mnKz8s5qRRHEo3MYvkPMdssUCGrNAdH2VHWK7E2zyTwUHV7MJRHRA8FVoTiUzmEnxJo",
  "key15": "5K5w68CAX8PF2ao3EKjurC9DzAefMswMLVCrrCu9w5nYJKnWYoLmm7pRnMdBfoTMhKcGozBPv1MjjaiLhcDA17sH",
  "key16": "2Y4UaqwmGvVebdZen1gRMTjNkeTbx2q3nWU7H6zLByrqBsmgpLaGv3Rtn61k79bzbSdSthjoXwYgxaaAhipZWTEZ",
  "key17": "4uNvNRxzb1pboaomWHwLFzDYGZqHtchAgQR2NXSjXUpdndHpakMQxH37Q5bSC6DtSPXmjsiwTecdCQcdC2Lmgxpw",
  "key18": "3Qih58euRWLCAU8myhTSBufZGG11NpisX2263VkjkMMAnMAzqzwmsCbpSNreXQZJo99V7MoiUzGprkqrdSrEkjhK",
  "key19": "4toSRbvTXfDSFQmr89Tbwz9w7wMActDH6mcdi3AbJY1atdB18d6tVtVUJDDuRZ2DqQKs3VBDFpmUiDmx16mLEyzk",
  "key20": "4ysp13vJHdWXqEAUCpuJYAGCSFz2PbesMKW8jXuMi4EDfFKgSii3XAhye1KcEz2GvWBXyRnanbADZejfJexG7hHc",
  "key21": "4SBAosA516wbibAqiwaNDV4SuSTxvQm6Eu4hvrjtg97q7HZMgidXZeRrXSp5rYwfPkwQtLLNPUSPguNtmVLYWKFN",
  "key22": "3NBg8tsm3MkEFbCtGmZm377BKhdbSeQLfePSrKpaBNsFJptKfxq1SKbya35sXxV6MND6HXHJDAK8f1zVZsim424y",
  "key23": "2m4q55odgCkqiaK7GgGh35aysZXd4G2oy46xY1QhrTZPnbCyDTdjgUTDWGXFcDoRBjeFNUCHFsndnHSohQULojXa",
  "key24": "3b7SEYKFhSJZVtSxQdbVssXSM3RKXhKvXW4kMXVAJoZZSNu5WYNXLUZtF2sC5pd6npMmxNC77PR5nwxecD3zVucX",
  "key25": "nipWnxpWDX2EQsVGqq1cu7R3DDzoY1HSYxYA1fsmDyCPZeAbFtKqEMfrayTvV7fgCjueyfm9Auen61LAZoq3aRP",
  "key26": "51UmpnLU4GYNm8dBpC6bBSpGbEmpW5WHAmNZFYDsB3x2qkV8D5yLufRk5SuFbdf8XoPJGBHJLi8goieaRZb4YVQC",
  "key27": "5ACZ7x8jxrU9vDfSgizEPDUxtpYYtTtywq19WjgzmstadMT7hacfjCu1p3qeqcRZTTXn45baJcRUkRujkTiJXCWd",
  "key28": "2jMZeVT8WDttN1j1i99tQkhiqLweERzN5uv5LzcTYAHTb3r27krg2RHFgSJWccEgqnx96MGdrSsLGmAmcoUwzTrt",
  "key29": "4trZZVcaaNnbNnNJ2dNyv1azREYpm3QdCcVG74gZmxD8Kix1pr7wnMVuXao6W7ghcYSunwqtWf3FnhWBSJe6bqde",
  "key30": "eKqFvgdje3jkBRsVJoXFM77qWHhyvQUFV2ZgCmCW5SrwY6qxDpaKGNbCkpNyfTEyidC7drkBMpJHGUuiNfYjKCN",
  "key31": "2du4czKUyWSm7dWXEgApqWTvaiaRqbCsMJYhNaLDy7c42B3RkMc4q2S48nCRieJ4GdKTwHX8nR3ucH2R3LQCYzXJ",
  "key32": "59auViFHCzXJq7WXaKJTNiDE3KWgnudtnqzWvAHA8QiRmxB6LGioV7KGnjk8wgzBmqcV2hWhJupftzM8tCgREg6V",
  "key33": "2PJGzsoNi75z5XtuCuXkkZdTRZoz3HBaU6GmCvHp7KNQNr5BnbTJi6vo9PyPA1bqVGJXBvBFU21Raatg8kEuiWaw",
  "key34": "3a5Zgufk4En2YWP9CA2P41SGNrogBFdpCDhVCHpByPVhNbTSia1HvnRazVPR9sY9TUaK47PykqST4Tks8NdX9ZRd",
  "key35": "4teovjc3G3oxYLxDMJRzpnTFSdfjBdQxpH7uSzhBTZct77SW83NhtjXwde41f6c5mK69pAZrTyK3o5hkMVbgRP3K",
  "key36": "5Vmz7X8BagdkhLDaeGYKjPxEhrDBPATVABaFHYS4Dkz5ZC4MJ8pBwn3brjkhaekfAtSxeseRSPFzKesirmTYHiWy",
  "key37": "3ni44fvzafM9sssa8MunrX5N8PcuwjJCU5swGRAXRDTyUNdn7iBAKBf2KFtHgfP1YDMc5Hk32b7U2Hc8iET6EcjG",
  "key38": "4qQhovgirZYtKNaBQsjwpnvG6tGNRMj7ZwgTgSQ3pz4DPCaUfpGiuC2RFAS8dzTphPeRnk3ZsUewtenFgTZh9TeK",
  "key39": "32Phu54cX9DaZkEHSvPzaJCUNBd6sFyRpA4oY1EzbCXvRtiF7Y4isGxbzTkbMLkxfeuhgemuoWhnurkzPhcKK4sT",
  "key40": "2bqNeP3hCdRhEQ7ypz3u6ZBXMMeMV6oq6kHQcPaiR3bsMhBk7gjuHaSgdvvrHbQXEd7vYYETLvVKCZHK1A2t35rV",
  "key41": "JHMrb6R8PM6Kdzm9KoLnsA3r9uQ3jeD2v7t96AajoV4yXuVxVPXBwAs5qwFWKtZge74MXSuDS7vhjtaiF74iZwJ",
  "key42": "22hxYLN2AwH4jwFayPpVXHr6TVHNNh7ZRkDHmXQ9ViEf3ELBb2i5askBFNdwxGSE2KQxdjZYVN77ge8BAf1fnTo9"
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
