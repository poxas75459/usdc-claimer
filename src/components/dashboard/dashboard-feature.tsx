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
    "3XgJddTZZTxPzQJyqG2TmgHVwNQu79X9L1WtgVxURCH4agjMbDebYHM9cRyZBfnVDmSwpDWYenzqDSzHLLU3BskD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3anKVAUkaLYo7pGZwjnTKHfHWdp4ZvSeskQoLCDsLhya4pCLi8HnhAWQGuqra2aKZHTCxaZNUxhefyNrvDEHkeyz",
  "key1": "4igodVS6wufBNU5zZXayd6ksXyJHWdRv4PJ1woYxxVjrAgiG7QH1GV3N2Vms1RzzC1GhbuTXuQAGJ9k1AzZncVfp",
  "key2": "F4TPBWa13YsSHpLoR6rXF4u3rMsRBgyhJKZPGzbf3TGdK8HEHVQYW12ZoDYPHrq9ASGnRehxUn2NQpWAMDKAci4",
  "key3": "5r2BgK9RjeXdLWhHQeaQoRsf4pbNud25Nyvg5t31TogEWwRkZrfnJXBRH73foNG99a1LmYr4Mjr1LZPxjDc8o3FZ",
  "key4": "W9HvxaEU8SfBQjTz6NRq8g4ja6wpFJfMrXJmY3KTo1yJosb7hGFe9qRJ5qWWx3UXqQoZk4z2vytnPrd4huJ9tMb",
  "key5": "4XuMCgRY4Kq7ZwmgrgJ7G8f9w8Bn96GvjVCHqn2QKpUon46u6gRmp47btGxVwPiVDwqDQPG6br2cBW7pzbfjjEpt",
  "key6": "6heaVMwLuCPvvv2vnQpYB9jgKfWfeRULFruwp6ppZMDRxeGw6Mdp1HgYjwTxQhsAL8XKBawU83D5hFBkyfHPi2m",
  "key7": "65DkFgf1Cx6AEekzTZX4ecUWpa4HtrGYztqACMewe45RPrUWJKZz9NA9G8yC9GHFDErpo3mHb1egByMVPPYVpCMC",
  "key8": "2T4hgYG39qKaG4HRAC7GqWKM7GjSbz8hj74Z8miqbXwyZVVSqMEGuXB2r58KkMKCh1nCW1CJofEA6LhgpGmATgXS",
  "key9": "2sivrEjWruk9V7cJDMnXnCxFy4DLonxaLdxtHdUcUcmrnXLTtKvYRnCs5tXYSVEBSeZREUx5XbF7TWiZyzsbsLZX",
  "key10": "5Jy6rCLVRqPjjuMssJgVnPftrAm95Txb56e1YoPNkRimLqGt68o1aY1CwQFwNS35jmmp9ConkM6dJHWQwv82uZmS",
  "key11": "4VxQQ4TMU85bZuB7nEseu6Z7rtWdKYWiPGpGafRVjTtWi9GKS5XNo2j5kr9e9FvEMdP4sbBY417SRQkpkeXXHxd2",
  "key12": "5FhiUFtyG8iu8oavcU9c8S1UQFH6ZHS8DwNR3MeS8y7wrXPm8oFJQAyjppCmPvgNg8QVtDxJd2mB9AfdPvW9tz15",
  "key13": "4G5ksUHByf3Z4GmoYXcEnBrL3pTi7dMtaEPSrkq6gWrUxTow8u9fHdtuEvNPCMBy57j6uuSV93ot8jnFSAmmhGqA",
  "key14": "4D9fmWGbGZNA8CcY13kC9fjx2wiko3qf2iLMjSAx5R4Q42zRcfKXFv3Bg6pMJpiZ6WtGyUZWjNN6bxfvoyJy8bNz",
  "key15": "5hA2DBdDDZGNvH2QLoSmBLGbaPiUG63eiffqURCs4XWDxjoCoxLHYy73BPGfsa3BFcdr1de8e7Cs4BW3FKT7jtAW",
  "key16": "5e1fZmgpoSAZdYuPiezspdv2vU9xhKW7N5vdRxVkmb3D9peZfdMjkd93LMKA5NWnB2aZhhMxuL7oyrEVmonYEjPQ",
  "key17": "2RX7pyq7qMLhwtUyET2cg2PXTHkZsWx94aBKGYgdK4kLS7kj66h7UhLJ7sZqXm8pCNLVT7rbPnCbUjfkpYRjsMQx",
  "key18": "2i4KKCZkExSDdjGLd9E853hNNeUQxBnZqqdcbC7kYfei2UHzQMTG8fAazreX1URBGmwjnbVVfjrBqADMGhpSkz1b",
  "key19": "Z8bVvS4Se2H73HVxjnnwH7aJQ6XGbKz6CjuaVZZK8iqVEGPNCZmt9byq5R6b9eZwEkDv2Rdts3rFffY981sfV2V",
  "key20": "63MgGxT4zFtPbmsa3FaK7T5SWCk16pTcq1R5SPm7GWevU3zauKs6MMpzbcZB2jNkSWX3LXCukpxZnzddRn1aKbYq",
  "key21": "5QnaKCECtXD464ViE81x5BVKFTa6gSgCa5DLo1zLyEnnjTwjyHQFnkBefeuTHGgdW4FWhmUEmKPivKTUxNejSWoe",
  "key22": "3rrTNWudKuArzu1H1whXzLuTjdsUpakXC5yvHryu4yy7wPmE2DKG5G66tWJdthN75qjHre9FDJfzHXHSqHpjtUQi",
  "key23": "2nk1ff9pUb5fxaW9MTW98nvR7sKJwRTf5J6oNXky23ngsznUG8rPW9bY6aWwJQCS9cFpZujAWyXnfFyMqXSuxQr1",
  "key24": "3HP47XyUyvYgEo3uXnKz1zdVyAp9rtVCDpC1Fxi8dRDfD9qDZZ5JenjTrK2iHqHGHxJxmLNin1in8GNHSNA2evr",
  "key25": "U2shrF4yropYW77j3FzaLNMwNL3WERmMQQZEp3vNpDin8o9p4uZRS3A7PveVoxhT3DiAPwGUiQCDoLEAq7qw6aW",
  "key26": "3ywq6VEq3Bw2v3zzc6ryf7qBc4XPePPUpMVbEDfGUaymVCEXovMjhFSqRHK7pUpfse7buQsMiwGW2fJjxE3Pgc8H",
  "key27": "4yGk3TKLR6cXnF33xmLzT8xKxtx8chuA6bCP2QzzQZmZbHTK51esbcfaB1w8eTKqPV9teAUStoGVmCPmJp8wnxit",
  "key28": "5vAXpBTVsgdyzipp23TiXz7VsFJtEaYb1WziE3ea9iiMM9eSajCx9raomjfTJMbzaGWa4ugCZwSiqbdGgei4r5nS",
  "key29": "66x7V1tkUB2zefmPxqFUpozLdpEfWk6FZvA3Lp8Ts1SL8sNmhYxbRHrcbn9nRSDBF8HFt2UdfMmhFFtMPe33Tdut",
  "key30": "53zrQdU17ZPPFz38AGRKVWfsa6gALkRpbKWUgUsBTdkSkgoXtwHFAqzzB7NPyjs3DK2Yt5wDJxD4fymDVgRCBwrS",
  "key31": "JiDtofJ6WGKQdgc6PX6KDZAowR2L9ACDixo7S7kznf9Gi8HnXr8HnQZQZBZRQYfPG7TCkuftPHS5o68fqEhWTjH",
  "key32": "5D54eB88MmDTSXA4tbroDnpybVKdDb24H3iBfqKYHgDWh7GSTTqaQssuFKNNm6NvaTFBL43Te6qKa74Sv4bPprsY",
  "key33": "4Xf5Z9dRZ4DZzP9qerugqbpyvPEvqoBjNfNr7RB154KKXL9XH4Tych9sjzqfruhevdyWfjVQtr9hGPFvQPsPLr8j",
  "key34": "3uyWuEXRoRZAQAFwuQLxicJxjmrCm1NsHkQUFu2hnFN9hGB1nrmrdjBF4DgtZmEBBbk1uViRyr3ihKpcxWBHDSSw",
  "key35": "zXARgVTw54cJWACGacsrbYLDS6YJHZoPvvKyXyYfysAguSkxGqiiEPJTHPHnGZD2R3eEx5zdwbXByqrRuzDCrnA",
  "key36": "FkhSsUP8YQRe8hNfCGZ8qWAUrzsdLzu99oCbTfoKAs9KG7PaFjB3vvcPgnWrN5TFDX7trZVSH7uaT8xZc6Ytdsa",
  "key37": "xCXDnLXiZdTzEoazkWNBGbqVpcihu91WVGHnJEQ8b2foNWMzqro5YvYghernoVHYYaa5wAa88Vs5oGU36bQUFZG",
  "key38": "37sfXAMUbr8Z41xtdKaFj8fHLbo8VChgv9qnoQMFCiyj866vyBxHgJgw9LcahirVeX7xy3AYTi7Zp1CnNoAFH8g7",
  "key39": "ZQssvj6xFt1GEiWHy6cH7ov6A9pCeD41ZrvijD8Usr3dPGo89gn8vKW7sVrvzqRz2awNSNMqfJgYHtxQNvKXe96",
  "key40": "2jZcdFP5p7sgfZajzoZXFonU5A4jEGyPDgVkN5LW1nu5xryhfVKSNY1sneBtqC9FxKbc2eG9SQvoHvXjGuepTE7u"
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
