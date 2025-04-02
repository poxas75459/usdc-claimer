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
    "56WFB71CzfvmUG3QWpANinrFxrrg1f7QZzh1WndJWCAytiTK85TG4t1zp5TF1dm72oJaMWTrkwNEaoEwtveYLCfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z6tiTaJp9iLH1NfXyBgfbXgBpMwioAE29QprzYg8NUvWzWfLhE1qnRmhgGrdze8aLCu7fosZibDb5NPzoj4sA1w",
  "key1": "43Emdh9ezNgdgYYZ3fukLCmnYqUQDQtDdTTimq8BVr2gGReFHS3zejEcf2q6yFfVp3PEKfDubmaZ3L9iE9tXukKb",
  "key2": "57tW7GpFqw4ax93KntQngdiLv9Vm3LLBeiZy7XA458FYPeN7raLsVENGVoWpUoJvJbAL8CxrCJLX4ffHBtFULUNY",
  "key3": "5xZekxaNLd6yKfA1hpHubchYLJZp6wzPockWioCSnrt1YjqiRHiHGn6LLfUcnAcS5aFCuWDaW5CP32cWdfEhnWaH",
  "key4": "4vsLzMRKo6conWPf72XH53uUkyYkbb11e9hf16g19bi1Yx5hXHBiAShrxKzNjoEjsfMXcWeBNgyBRWxw1L3f81n5",
  "key5": "43fwcGXfVEPXCRZZAihhzWco51ma59vvPFFYcvrip2PTE4e4RKFS3QJrDwyo75soHH9XUiWkkPrcMpZyP2EJDJMX",
  "key6": "5XEtoXv17SgpbRZBNppFHmci6nEid392aDraoSvnL6zLpJ4eYyZjWv8u98R9DmHDkHnTNjRVTDkWsXrfssQxNS8h",
  "key7": "2xaLvna17YPDSArf8cE4hEkSH3Zfbw4H48unvZTCnZkFsfXiYyGEbxREm1J6xgZ2BoRuNSt3i9xGBdipLK2qajRL",
  "key8": "3jj62zKHW7ozHNVM2cQov1sUKyAZNs2aN5KjvEpcGE7EKNgbXXkNsFfTfWj4XZ6BKemZhG1cvty4tdegiUDP9rDU",
  "key9": "2yV5ChvAHy84uekGkyJ8R3awQzWcqfaCxyH29uEmpisFYHDgS5yzVwwyw3WE3MjetwZz5YEzJ1jM2uE4H3Gf9xgJ",
  "key10": "3iHcULydrw8Ezm7aNV1YVTSJ5qeb9tktrQwoxBdUqE11cXskc5XT9U3Y7xF1kSm8MHXbJpyUvwJuPckm4dZ22Yt",
  "key11": "q4z87FQdfmtN2jUeZsYoc8WYcP4HFJ6tXWkuU91hbDts2GwBg4X5PojbD4JTpDcDJ8k48Mb6K4GXJnsijoHAvcp",
  "key12": "5cTicWdjTLsiwjJr4Tw7TNSuQ6YfyfUrg3rvuAsFE9aAPjkaPxHY89fsiC7rCMYyRPxK1MAhq485euZcctLFLoPH",
  "key13": "PdeduzhN8dUyTkutCyV3LUWhWhy5fwoELKZUdkfkySPWycvpD3EYJ8pEAaig6BTKYQUf1owEhMG5wVzbBiAg3L5",
  "key14": "5rS8zuADBkHQFssq2y8Ry7pmjWgoxKMM2vARNxe4MHkyqs8gon3WaBPHXdLTUsdG7PzerdY5PJd27a7su6N9YkB2",
  "key15": "5syWfgcipGUoUoz1QtTAgNaSfwnLZguvtynWtrnyAnMjMvt1Ju4n9QdbhCkXUsrPuKzaWGzHi8bSw5CyxC5QyHW6",
  "key16": "TCkFveGBQ5R8m31KNewg2ZCSr5dt4HrFCjAZJKQcwHrzYr7rsDSWu7FRtwdAHscJZ22XgxRRFdXomkHfUmyRKi4",
  "key17": "4LPRKSYyiz58Ss4heKjMYg8noDPCv5Xxk27jFZ7v2ScZoG4DycV3LsJ93FQt8H3p9UWeFeqSrcQsgsvFnAqeGy9T",
  "key18": "5zfnBmzYMkNPiD4xRJ3cfkjVSHTB2Pgb5ujnSjSfAhgTGGNjW1uFyEajfGAoPTUxa8t4ufnaTyE1fWM59bQjWPj1",
  "key19": "tKWwqHPws2PBSHkQiYw7XFTmE14ptCvvLjhKsCyJBH6ac2vevfPcGxfQjCKeK52CXbpchSSZsnwBmjA5jHeeTH5",
  "key20": "jsoMoWtdrhaCLo3dWCE8jjzqi8PaSCmiGzuGwBTHFe6viGwxyfE5dAaxzuWgLv9yw2MUhxwiHpiuSPnVGj14yMD",
  "key21": "4JfMTv4PyXayVmweXeFr88hiden3u7iUVmDtAbrAppVV2MgTzye3WrySba4hToTPc9bAWpq6tyvDMTQ2ZK9dEx8T",
  "key22": "25SUmvYLfq6n6o69TnvCdSmZ4YhyARFaQDBgQeMKwNhybVr6gitLrXDSkeKpgy5ycgAijATX7fpMEDFE7GppkWEc",
  "key23": "1MENFJe6Pcu3dYmhZEmB4jzRZJNEENDKEP7vavnX9zXgq9PSYFeYbELaUqf2jQVwGgT8XEBzZQU8B5aVHVvrJeQ",
  "key24": "2qDqmT2dPbZnEtQL5xbGqtxQREPBroGxPbbByDegqvowoFSxJRSQMZSG7Sf1qtaxAZ6mf88ffmLafrYSp2nmCzuR",
  "key25": "3hLwvMsCBokxeYYorpDvcuKxpnyCrp1twqZQtcTiEz8WkoH4z7R7mDGsCveeDTVR71CaGJFYXKmaovZHLwNMSQax",
  "key26": "5CZyb8xxPh4oNS7YTv8SShD5tgyUn21F7m7f43yvCfjpUJGUeHSR6trvcpWZWF2YNyHYzSbqs86154zqhisrDqRy",
  "key27": "5DBAvXiTaiUCUet3kRR3YDhiBfNPNNLSPCHA4xKY6zcS24EeeDtPqYGv6rYawqdYGeiPPLBu915qXrxGEm7RSJMG",
  "key28": "3sfXisZe8yErWHUeiSHuJVv6yAgbfpzmSSPVceQZjAP6FsiLW6L9S6aRBQykewFMnGs4Xvs4mJBP7SQWRdLxjBak",
  "key29": "4fW2R3rYqrN2V9gnex3uvDbPKAjSGzZymG1wPS5ctXT7fwWSpQd1gbfW6BQqbnJTrTDMwVR9bXCDXWvAdPjqTdAj",
  "key30": "VAeDrwV8renk79t8EeYMaDqANeuPciHvgG9mTY9TWBu2Vjf86CN1drECP1QrKC6rUgBZhDuWYryJhrp9BTJLr6J",
  "key31": "5fCetzVbwUmfUpS9gFcg1kXNQDcc35J6q7jDQsiJAiuYcQ6Q7oZTz7fKsRvZxVXcjw2UK1oHgSLL1ekFihksx1Mz",
  "key32": "SB196uxQV6N7YqviXiMC8StTRyQuTziNymGjYHFtCpePYP3br89JGjy2K4DvfsBDSsRLuDXgNiEcXoAgaXTjTFk",
  "key33": "2ewsjU4q3Kd1tbtyo23U5DjEnXdM3PvTt1Qku1cWZXn7uwdmogg3dDezRGQGQ2F7NzXKhmFnVDcFJnCLhVXYq65n",
  "key34": "V5PJT5JuCbUxTdsEdjxM9PAYME8M9BRJBSAZLt2bW7Dm3VkGDwsiMsLnXWaXa9P2LnTtYvq6boMEkfCKyCgMHv9",
  "key35": "23FZmGp3HKSf8P3S4nrijN7i5qyGVs6AU1qF67T49Z17151D4ynrw9dU7WUv7Fo54ZmrwXmCSvZx5gv1jwNxfynY",
  "key36": "21U7dwFNKnKFYG4xAWGTbTMk443Y3f2FC9FycRPF5dCmznbjirKtExEtVpsDavWeZ7YWcvqHVQBxvmHi1zRfsExB",
  "key37": "5Eg3uTVnRKfsSgLX4pxo3dm899B2W8WJpT1bAz2qDtxXc6bK282MXMCZqiYVQCtDMc4wMuGQoYukJ8X6qZZatjnR"
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
