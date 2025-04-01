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
    "3dXLnjAivsqzZkNM9mfjWfKobXhJGZMJRsjaAzgJNXSDbKCBrihkop9L4NjeNWMEvmL1C5F7UuidDk68HJT6jdy5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p9WbJG3ScBBpT9iTFfVqTqo9SiTLdeFs4cWqScPBwqN9sYK1KMMRbViMxfyjcHjSaPhAjnmJayK9U1qKFNZBn2i",
  "key1": "4T6q4AycXj77aiAcP624S1X4avJQ98L69XfgCkfZFLqmCuKZeX1o5D2PhQ3hBejnq9nq11RohLCoWqTrvtngmJ5s",
  "key2": "3WecRMdPNmnhr7mkJbyXNdsX7c5RmKDRZTDaJrsAS24geim3AWQ9z1ZUSrHgrRKZaHqvRACkbFkNAjhHWfYD7WYT",
  "key3": "5ZfvJQGNgya4As5yKffC4hLvz1kxDKKBvLVdZxTJ4tb8y5pYHVqLyWUu8ff1om6mHbgxJ9oJuJnyqNYmCy11jZmJ",
  "key4": "2dza2zUoEW3fn5N9CRUUjBUpQ6RXaMsyQtg48LD29iFF9oZi6hzM28rApMtKry17N4mDXQk2dTwuDPSqu95ffa2D",
  "key5": "5myxKYzxayNB6rCcfBDEGFAcDpo2WzN74se6X6icJkpJvXhhGENhtPegKrDwwf2Wyk5eZqYyLsBynTJTe7ciebkH",
  "key6": "wMwrJdoeigkZ4KHTXLq4xvgXa52fta2pwgNT6FuMjfoC1Gu5p9ycusz27XDabtnG2cviNsQ7bZJRFwQCn2DYCRk",
  "key7": "6wxnF8AFhqqupHkbZKC6o4e42Ac2zz8tJ2att7RguKEwQ5ncLCygYx2MsQmDsA7CYa5kfAvGtfGhpZnN2PhAtv7",
  "key8": "5N8WuZ7ybaPo4sc6xY3ghYDGak36w7LMdBmCLHtmffMLgdY4dgNjXcPFjLHbCKpfKxEfWDrytYquVFsgbEUbwTsC",
  "key9": "64ZvGY9k9nXJZaZNEo2C6LV4CKiww94Z31bSHtnWecpMqSvcgas2nRmKPQ9VMxD8u7bbuN9435CcKwT1FANr6FFW",
  "key10": "2SDF6p8MBHo5u7cWG6YjPRMY1iFQXtEjA4DYLm6seYbwQ7NUQZVXkjjGu7XcfXPYQeb71pB2rptZVnmseCYLvYpe",
  "key11": "36T8MnFSemUfKoAns7YV5r6pScg3Sv5fWbzmoWitNaJc6s9aPkGbBDPTs2A5dGXu3QAG6dugMwCLR97ga3MUpXVk",
  "key12": "39KyofX9ZLqyeb9hUyqZZot2jDKYvSApLSdpRmCANADkNAhTjzCxTNkAr78EAyieQaoqZBYYWPm7aiCTVGPCS7ML",
  "key13": "5u8D66tkkoY5YMTDY8hbyHTE21X6mXHnLg6JqEuXA5DmnwHP6tJ2TdXtTk9qcycURPcj96X4CmAAFwUa8aZCZaTp",
  "key14": "571rKWTobWtYkbmDmZaNJcEWQFfwsv7iZBLcrzafdVk4WacyaCwQz1bHPGBCeCGiQoAFyVUnZXxLdMabTtaQQoHo",
  "key15": "kqVRQ1QDYXFrEeBgkHCcorPNS5Pzz7anKoJKiae2F5kbMU74uj6R7p6dKHhnKS5KtUEQCz4bBRNF7BUiZL7is3c",
  "key16": "2mjxxBGR8hP98vatUBxMFtM377QiLSuycRjR9ngfoPaEymAzjp6auncJ5URpP76MTHJVBFGdXcpfj6gExBHTtzL7",
  "key17": "K5WXQ6i4HJJ2T1gM76BYUdnb7GywETVpgVyjAYWpa2U14PvPab7jXGzwVtpzGfZ3Uj9XqhXWmdMWLEaGN2aPvQg",
  "key18": "5Jap8ZGaMEKYh3MQ9GseP7ZpMThiP65daVBRuUDdLEH8DWUhWQsMLazyeCHdkpKMvZodThNtcVxtczp4ehGYzuDu",
  "key19": "3gXx1JEFMmAod5k78dNVmcSMTjXq27mNnYCZh9BbqRBjjwyxrAu7DMaGMPhSjXpfEVbcpwRYrixJupgZz8bLxHiQ",
  "key20": "5BRDdabPzmewWJ7A6cGqUyXyENuRibXD94uXSC6tbEw1n19dMmWgUvYt3jMJ5ExFz6m67ji1CVkn5CYXEywJSNAS",
  "key21": "nXWstRPspnEVuUdYDYz6iD9CVwhKhrPb3CnjXrUDYE24YSDBLLFjMbqjbE51AhkAmoQW3bxun588mb4GeaNQELb",
  "key22": "5jHGytnaGNZSocnoEELo8DdE9bxLFr1FBBZ8cWPbGLKT23m53kfnXR9bN69BpqQn3rYAzfXpTNbVx2ThDKMEoEC1",
  "key23": "5r4sHU11nsN82ckXnWKsV1dJK1iiyZRv4Tqe5seRQAY7HFsD72RMzd2z22KCBwiJA3oGPo8XRpFie1KSTJhM7rt9",
  "key24": "MuesuZKStjaCxfXXnXmkSkmdgraY8X8RTAHqDhecwK5U16fyEkn8cNpnJDotqxjn4yXpvHjzbCjE47E8x6dYcYZ",
  "key25": "4TZ5JkoMZVdd56Uz5qt4cYjbdUaU35SVFfYunNkfkLB3DiHfvx1q288BaDRKWcRuE9XC7dqAagZ7ViUEJTh52Vqk",
  "key26": "5qeiejn48JLFEAZMiEFeVYhJfXzMrgArjrcs1jqqP6aWFv5Wj8ctP9EfUCzAtQs1RGvUfT8tChb19hnZn2bEz9db",
  "key27": "3yRmG3VEe2gBqpgLbSBMRz8qExHNonLmmuCXj1rJg4CH7tFGzroHbCoc1JMUbcx5G4kuNJZkbPxcWHz2nS2BEA4q",
  "key28": "4hftQ3n3nc74VBvmi7bckw7V1Jebdy3VoyF9XQYkfkm1iPzH86TnArh8jKmXZqNDpJNwRuZ8N6wXMqbQDtbtGQJH",
  "key29": "31pBkYA4nGp1YeSdLhbjZRzjth8g9zDUx3iVTTdx3CvSRbENcpKhGcpbdT8EnFuGH2iqqEY2GBfayjPRyaFRaiis",
  "key30": "vcvMJAEDk9Vrv4YFGJT2x2KMEcF4hzBJuT6CKSnoRhfPCPe4KTftshdsBBvXWV1E8wVeGDaUGcf8DtHTQjdrDQq",
  "key31": "octnmdX24TcK1Miw5oDDmCeNYLy9eyATTXZL2uQ5YU7uAtYKjimhuxdSUq4o5T58hkENgJxQXJJ5zrWZ1Jgosbp",
  "key32": "2EDp7VnJUJSpuXZuebscjcMKncTDiitF6v1TxgDetHPzKh9LCTpRiTLVhkpC2WhEeHBiLr2qFei6EpUJz6qx7fbv"
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
