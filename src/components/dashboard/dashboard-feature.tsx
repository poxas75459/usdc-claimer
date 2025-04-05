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
    "5L5stYoxMYHwYpHTJe3x4CojkkZUx943x9PFtGzQqwnn7mUDf6m5XxeewhmrJ2Efeyh4a47AFVV2m5st9Whaq36h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mAfvJwg9Fwqenwptezz8VMDPaDRr5SppEQvNt81rPTmDHxWqKipKb7vUnabNyeteJHbJGGBB1myKSUwYYvj38tK",
  "key1": "e5rmjSkvVngo7ynsnR1iK5Wpsc3N3Xb2Vxwg2FaRGDEmddzLFRm5m99g65qNbCJxuTrrirmixhDHtpaKeXCkx6S",
  "key2": "4eFgzznXu5DMUFNn6SFbfrMyza9xzJGmWiWAhiz9Bv9coC6dmytWMerKChRfekxjtjfdgGi1ZM4SixBZpKdxaZdK",
  "key3": "2RoGaJt4WwdsyRYEVbC2dCZ2UGcmed4YRHYHETfbZXQrr2PdsL1rCF4oz5NAoA7ioQ6ace4PX3tXJ6YG7viUN2Av",
  "key4": "25nABcrqJ92R5WNLxuW1nLREiFUNNZxM8Pbps8sP3bWjhUXCeyAeTtvCxnAoguH4AqFEfXYS6gwSX22tGNwvssq3",
  "key5": "3JQ2f6kgnAqyYpCv9bgK4iBryc2gwLwnpV6QcTkKtMVqHdNGURRP7rQaY2tKy8ohjVAaJNxfHpYNvJLUSGNZLfUw",
  "key6": "2CC6P1tfecYzRMu1FG9atA9XGoYoztszHXfo4h6G12F8zXqxP3EcDF2JDwR6jnt52aLUrgAuaJpbRXjMcKyrT1DN",
  "key7": "3LWvTe9YnAru8dAzutgzbfUfg47VpRodgRG5e1U4PTdyVBRWMTG4dsnhq4opKp4jkV9u3a6uKuYve2FGfXK3Kw3C",
  "key8": "25LC918kjVLQTJZn4Jymobj12yE4D4ZTng5Jw2G2c2kTzp6bbh39VoxLiWn4zbowCFhej3zDvA2WthGhvL76H2gD",
  "key9": "45bkXW6PpfuVioaHrdAd9wvckYJUbFWeLaS32YuRqAT94YxRWZVoYV9EmhceB2hYTGiqvwVtTZTBVq635ASiX4Hn",
  "key10": "539GX6pgynL3bcpxkHo6PoCVaUQwZfCDJ3o5rJNJ5kkzJ2P7EXugiWU17gEaJ2Pfw8DXQxjKcpuSPdFiSx8NdZqn",
  "key11": "3rPtyoBriDpk845bnTZajRTT51os2KSckdgCnKZtDsTBQoTa5kTrQSg8cSSLcsifMMK4MJBJ4UA64MQfUQtU3YU3",
  "key12": "42hXAk2FafDtdUjcJTeaxdfGd7iLQwHhNpir2PP6DEuHUpZDmmcLeEMphYrBGsKmx6rDcrxpGejuFNt3r4aepUPo",
  "key13": "4pQfZRJm1x9d4Xou5kJgMBjZH9km2dxmmS9cAqMpfFJKEmHuQ5kQxn2FtQTW1dTPiQVMe3WSBHEdLMe4EUJ6Xtu5",
  "key14": "48W9E49xyKDYJUnC5o9CkMAGoWrKudwGToq4XA25Cu3yVKDN18LgdxLt82REaX4Z2krCGJX9pstSv7akNLPDbtyE",
  "key15": "2rFTCi82593Lgtgw1gmD757PPuWwj5g3Ph65MniuQgccukEHKejMUVJMLxR5ZDLdka47SNKLUiG9QQ78Yho7Y93e",
  "key16": "2R9KZhW7zZrxiWziCKGdm8ojXDr6i7NuHfv8pfwL5yp4HHGm2LG7YtXLgFBaxTDvk8Wa21qAoJw7cLEHqVUQcjih",
  "key17": "5dMmFsJuzbmeyALpuQn6K8DGPGKL1AjnJPFFgnEQkYcnCNzReKKvfJRmWsF4VbBzeP651w8dsFKNiFGSumwULdWU",
  "key18": "125VksBkL7Jj8BBaes8Ed3SAT2kp3jEbx94si1GYECyT2K6tStSzW4UBncngtTZPnrPg2MA6A56Y4bTeb52U81CX",
  "key19": "2BoG65f1WRsLTNRQ7F22eQg6JFDnzjBGvitUUrx7gSmGA6bZDh99cg8GdjedF3ivnQQRNzQRX8BQbMxakcy4Psfz",
  "key20": "2ghVjZqyXkGNeEtLo6Xpr3SWKU7QNfvjALDjE8EK3bPZJMDcwQk5cPghRcvmhTs1dStZSqAid5qqqvazojbMtfW1",
  "key21": "4CERo32jdL4npqSLLpqhYSPsCtRB8PF13KDAEkeYVkKjMK7N4MvX2Q8rPdWnNwhhv4WpiLo4FuVTJY8YSEDXvhvF",
  "key22": "3dNTbhwz58BmorMS9QsLWrdt5c4xDpKQJEitswdgRtmuJTj4puHbx6h7ALaJbksXDoF1tEYboZVgS4iXPsNyjvSM",
  "key23": "62fLZYjD7FQuJcMedxXSjFBqwkMFGLXWnUxZXzwj7TxRFaMoNLqHkpYZqj9F2fnv4LMLGPA14GqiKwVuhvEpNYoJ",
  "key24": "4gEjZg92LrsU8brqNhjfGEHbA9sYZQx9a4MtVRJjMLFyDsqZyFh5jTH9ZWh91EXsr9KYnjtPJEVU2HNs436T4L9Q",
  "key25": "5DVWXD44zDp54nfpQbZoWqphNzSDp9kvv4CfFgs8sLn1JUw1Rtg6UkYxwHPKF2EB888o7WYBKzCF6RC1fxbUxxbk",
  "key26": "4H4hkwxaR614aaCz5FBLhehTEsfeSWfuFcKe9k5cvuYovFdFzGxR4XPAcVfWzCAKdbkPGXAnhvou9uJsoMEfpegD",
  "key27": "XQU835j7fKeTkSBEeYRakH3FBXNozbrFF6yjnUKY5aCKKTBWRZiPagnAVVpeK2ZJz3Xr9N9oL2khcTrWoWTEm5X",
  "key28": "258qbGdvMJHUVWoqb2n3ZmVgjSTLc8CuDd7sdpUAr8gYAnXEwPYP7sPGQipDisBYC4dZRCdCCmsU2DaLW7yeBkwv",
  "key29": "5rNwASTu1urSvYom1TqekVWccahiGDUdwga84j5h6MKoLsaV7JEuQ9PHfTkS5HMn25xAk5aLZUia8WxmNwx9URwe",
  "key30": "4WmEyFcyaokh38EMDMzfcJktXcukc894ZDFbCNnwpDGrX2SAPpZdNYn9bcS8cRkHVfAxzGtPJHB3BKjJmHM3qjKa",
  "key31": "2Mqh9v8mw2hCbNfoTShXy4rbq45jPdTskSMTPYm6bFaBxBYKt6a34ub7wPfzb2yABdN1hYMGDuqww3QfAfYMBU7H",
  "key32": "2jcQKdQTWjAM6vLiXveh6K5d8uEoQuxoBowt3Nkk1NcGGV6fAjnFxtbnDdMrJWxCXCbY74DgSUbKxDXLp5wJVW4Q",
  "key33": "51QyfEQdykcSsYnnCCNzZ4stn9Hcss4ZUc72ihPDy3DfS9Q45srx8LNV2m9tfnhBogdWUFknMEzB5oaFvmj6uMBp",
  "key34": "4YyXxncdnzve5KWSih42BEPspJtawYeDFMaN4Ea1h68GthcD5tAHtcQcSo9hDZzYgQ5uu5Y4WEnWmMYiWWSTUzba",
  "key35": "8Y4B2nXi22sNzMzzDc71BzPmvnwqzkrxQ8AAWbhLLUPp3yCYJa75s93apgQNxYPhgc4Lm3uXudJ2Uu49Nwv3YSz",
  "key36": "3Q3upJnKcfZKfqqsQHXwkqQ64keYcSSriktqmxHWRaJc2uKhdvN62z1WR9ec58wNS1CGrhqQSU13dPtjY3oLC4fa",
  "key37": "3NYJhttsBBwpnbhxMv7PxGvMc9ysxzbm8MhKzuEHHiRDfywEMeJtvEBYMkN8A2bGGw6szKR5rSXuCqL4PAxeUB8z",
  "key38": "VLf4f6FvwbRQN6sUWDigzMubL5CVUDaiA1oCFX8jM5qzVaq4hyg6GRrjADWkW3stJCAaCXSESXzgwuHdTfDUHyv",
  "key39": "5vFBXUmMrMwbmAE1NzdQAtMLgi5WmDg3nQpfHkjcBCKDR7UCo4STYzV3vP9dHMenVbZgLqKqFeybN4XiQ7HVreVH"
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
