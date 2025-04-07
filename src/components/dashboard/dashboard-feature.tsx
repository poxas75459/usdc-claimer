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
    "4ykWXMFZMbxxpJkrEQ14Tj8z7bzvkuUtuPMpg7Z9PzPG3hPHcrcuoTQasC6VMsqu4Ksb7nnxrWZQnD5VNTVxGMFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57NYWZZgayFAQaa8UALBoeQpcfcvB6YkTvMqh6jGcvoafBqqWwgovWBcBSGVj93SnmqN1eCJVAnUgftrWsVzt8Pi",
  "key1": "4eUpvWiCB9DNaUfXXA86X3BhqoTToUUT5ieqrh22VkhSJEDAyoU8YK53hnquLN5hEpRwxNtgkTZhff5aCJGdtYbk",
  "key2": "2YgKp6ds1ibE53RdK5nv4EE5yZZtT8Q2npMY2foSdhiVKVFjAb6Lnxo4SPHW22vfV3pTmibxxPwUvQaMH111Xf9Q",
  "key3": "eVZ2rTpRb4X7VoVpEiMRRcUbgZKEmXghp1Ysh6S4XdHrdbdLUrQomxvAncHFFC6qrezZsFfrqfBkCZAnHKVWjSc",
  "key4": "3ncxZfuaNZJc7skRTyiBA5UTYz88nzb2hqV3y9x1MQLFz2nxC4NMEDS3knjjW85uoMjYYmf59pW5dyvTz9Cx1G6u",
  "key5": "38Woj1yd3ZqDe9xCRbDbQDbfSW7mCpWCDAVzjRweNR1WMNrydUMLM7EE2UWmonaeNs6EuLtR8E4MMcDh6zjuN2U8",
  "key6": "5p6dkUTzudvAkn6AhGyuCxXW39H1gW2VqcSdR21DXmYW9NnoffcqGR7E6EugZ57VV1jXx87EFe7bq7cpPjCpCuAQ",
  "key7": "3WFynWSbimbeiWUfuWLjF29K1RDj72wJNfJ5df5GZVFTUtEmUFRQ8VAgKzdRcFA3VvKQd3aK7AvHPJsM48r7horV",
  "key8": "5yrAi8iHHa4qFbgetRJ3xCfjjWELco9pa4PiPDdeo6vG1JbDoQa6uwBGrGEt9ZqP3G1fVeQFWqoY5GTpR4SbhqBD",
  "key9": "24MfSgppyFLe7oXiArRSwZUSrdqStNGhMMPJ7oURXqPyWEoK577gDZRvx4TXbvevNacFGJE4zvSD4L5QEQ3oAs5o",
  "key10": "4rahGHhDGV8mDdhYN486Ts59nPCjG3u4tku2inR25tog8DxAPe4K96tboxzQxGfQ5fk482i1WGqDcj6gi8hn1osy",
  "key11": "FPqadRSr8Q4Qs54L6g2mAxtVGZL3L2mc8YTsjjEuFF4NPDnwRkmVoZ9TXyxeE9HR4eSQ1jWkreSUejMkMivNoQE",
  "key12": "3feenU4uu9cqqKCFpyZLybBXCnqoiU7yc9itAjDPNY2acg86sthLThW4XDw1XoYRPp59NVZ97KFDPKAzRP2rZqhk",
  "key13": "2t7fLEycBD6b2pUtQk8f47N4uBdUxRWYoUyBszPT12nxirCNmyASYVAubE5DXAmWdxxA5KJeiJzGDQiGmBsMgLwC",
  "key14": "4iPT2Mu4AvyjHKN2XdwiiSC7f4jEcX8Lvymgd9fEqqsQ8xurc6bJkJ9i8gEfV7vo1tfd1eioGgyf5zWKeLypADVd",
  "key15": "5BeW4jibgeXx5N3znzrDn38d3jbQNmuukWQnA9vcmGgTyr9z6cNUWvvXZS9S93HRpZFc8MNPNBhkw5wZkRkiLBwh",
  "key16": "2UxYKUVD6Cc3Dk8oh6SMyA7V9v516XVf9EFkkWk7QieAVmzqBSfdQiBwpH2cBiHfvbSHsKswTird7pjoCwKRLNbe",
  "key17": "2bDpnVRnnEDQVt4phLW54AXpksHoC2PamjyYLCpKtxwzwqdAt3jdPG1DW44KSjPUF2ma5tF7Gd9sA14WRLwhSVym",
  "key18": "2rCASrQwGpE8pMXbo8TjSm58BwSSU1wqbKhchGSTux778E4w2g366sLGxH1scTiHxxryc17tBPPaXxTKQ6fq3Ljr",
  "key19": "62faAKsExtR2KmKaMsVRo3KxT1kyLjZ71BY1Hgo7VxYgTD2qwmKKmKPZhkmrcf8gqRSdeaxyYJbCbKTNnKq2JZNn",
  "key20": "3gYGm53ffBPTVkFNUneN6DF2ityWvhUaXufmTu5PV4bFnaymf3HR1tEg29duhXJS6x22shssFDYk7tjAMDo8m7DM",
  "key21": "3ByBayxdvube3j6y1bLDB9DCr26yDfZ4uYuHj1tdT7CmVUsUDUsSTBsdQipF57Aa35bSvkNWEGMbSQmFCBjtVKhL",
  "key22": "bVWKP7fg3PZjUcPHiFzbDYBTXjHSN5K4jcnJZfFULKKdBpxut9YA8wa5KmocVYaNJCW6fMYSfii5x3J1GpxyAeD",
  "key23": "2mpaRArBbREQNL1p9dDW8jP4JJhALwEeNPU1oErRrrJZ83K37jAx4NrA9yVYT2cvHsLRnznCk8G5xtpiMkUCnngb",
  "key24": "jboa8S4T4CakZCeNR42b6srZRciMnQn8oaf4yAFHfQtmm1YY8hwwm7rLXiK4pv61LciNjNxFvCP9SFDFbtPJEUp",
  "key25": "vMdYNf3pDiPH9yCaYQJPprbi2Zm72PyppgNAF28KQ9qcytK1BBYYKxbWf9TbtumjwGHabB24j3u5QYb7yh5ruT1",
  "key26": "2EGWbtvx2PxEzKv6mjRWrzieTriPPkPbEG8AFMyTapgs2DoAZ4oFurKHh9X5YitYU9SiFDeMCJDjdn7Cm4EjQCvZ",
  "key27": "5ACS2Vfptxuc7yBph4UpndwZrq8hWD1JwmG48cRic7CfQ4rUwPAPF2spb2bYEp19mmuiN9NpfEw2jNbrwcrprKk2",
  "key28": "265K9tYpzvLL13MqPfWLjMqz9FWdBJ67yUQUNdB9Rxg1ob9aPPdDYJWSdx4bmfkRNsYaE2KcJoXCAShjjzU25u9i",
  "key29": "5Dfz8FyoDUFib6CA9Bs4FS1BSPkgfUpbEAvGaL36quQCGCAhm49hS6Uova9gMYwA9SR7banarjQpWBC5iWWqRp1S",
  "key30": "66LZLdZHpnrmTqtxFbxMWJFDvFgcXuN5DpzZ4mvgev5iwzHSjeABptyU8ydTjnqNxFTfpcAhnD82k4GU8NNor19P",
  "key31": "245WDPXPdBvMsKXHpzDdwrhQfYs6LBDsSRi7Dm694vmSCGBnkV8Ck3Aemj3Jt5nn2KPwHkq1ki11vqUqv8YCCQz5",
  "key32": "5USAsUpDcociW4Ly1rsSYmeDZYCZiNcZzGTqRXtL61bFrvvyjgJZCmmt1nvH2nSasjxXqyariouW4mujNA44zBXR",
  "key33": "3LagFwJKAvTUJxb7D9oNXxDxdzm4dMcwokroeXZpHgwA8U3BWweHnwmz2iMCa1SXk5mbAyt7Y1QjZQF3LViHED4N",
  "key34": "331Aykdh4NrNrfegXZjaEQkdrNurKNCo9McRL5K6CT7ortLosefqXzUk4aXkjUsKRXhnuYyHnFWxWMkyKBsFex2k",
  "key35": "2NVpqaLyjXghTGqbPLHDybvZg7r2tGYkbdh3hQPWYu64Uxtx5sRoYBhdqyw7CGMU1mPFFHDxDNvLKj4FKAguo9Dg",
  "key36": "3bdGAv9nmuzrWsdq534PuoTtuQRPyiXB1KeeDiQK4aQqBFZAaAR4PQLaBtAvjai9UresQc1sjNVutZMC2snHXV1m",
  "key37": "4GcsTkQbZ1edWC2fcULiqoHY9NNQQg98Wh9dy6CyJ2es1xbiDgSDYuDdT1X1QdDAkqD3HhZMK3DN5AB9tfdr3cU3"
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
