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
    "61CDpq4BwfFiRzyq8kb9MJxYDowXQn65pHHMoXtMfxFnS4RGu6YKyy7DhCenb3kYZgAAzrf6URb6ML2JsNTMv82W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53NsXa4SyZrP7pZtgpbpcTTbrc5pLFLL1ipCZ5Z9KJygYxVyKqoW9kB3Z9JZBRmsQ1rq2QefXoKUF63vAmTxtthM",
  "key1": "4uzR2icEmx4fAKhe8T97C1pKA6hRShwtbAydUSZoe3L4aCdLuKwmF9ym72yCPiv88y69Xzy8uqGCVxjFQc1sDuRs",
  "key2": "5QnPPSnqNTysXW61ZKeXx3TBX1UnEy3iTndEkgK8LNTrvJdNv3x74Z4z2Tv2iqGb1ENCb2w1ca2JNSN4ZRi6YxYr",
  "key3": "3V7B13mj2fKR1dAL2RAf9EJkTjr1zMtNEBAcT4d3hJrGn8EDjUYcTKQ4PiAhGSTQPWTagoRZJw3MpRcZJsRDX9Nv",
  "key4": "5nxegDKuv5itmtEJfiduFZNNsMnD7zpKkV8m9SeEaXDK9JepmgoxansSCDcAoQEWhu6C3PpNN3cNrmZeTQGK1g8q",
  "key5": "4cfP3WS4JuZtqkJG5CDSrqAUYrr9uTkB8tdTmAUXHNoLZgGRnQwQHMJasZ8Wv7krcSCcA6CPybfsV5ZJ7SjcV1T1",
  "key6": "42d28w2GWHhCB3P4o8wt4usD2yPYEfpnHXGEYmg6xWB79pApzxbJwygpBqihgdc3NvkWHrWkq5V2Uwqh8oaDqsy4",
  "key7": "31EHPrZhDEKf1LwknfQ5H8hD4Nszqp3WFXMKGqD1b9DXAm5mRg7tHGWUdes5KWZgs3rvkXs1Q6DjGdH23pJ9eWtX",
  "key8": "zjkKvHKteESU8gpcFK84K3uEf8q12uptvQQCkcDdnoWoimxar9MiSB4JAzaPpUySQKgBD1sQHDD1AAJqLgCB83s",
  "key9": "3by8MrC257uf5DYby17LggtGRhMmV6TmYZA6XEy7RuYd5ecSfhYBySrv2fGqNpaZZYxgeGWW9oAzmdLwKrL1fvY4",
  "key10": "GSB9mkocvpajaGdfQXYgxhyPPkV6wngmXMVki297TFNtrZL5zWN2EuyayDw4TxekzAjFZUFd5kY1i6iEaieAWFc",
  "key11": "4F2eFX41BQqRtzhgT5PoBt16WFYBtE1DSX6PxRGriCo4Gu6LWeMNLj5cjtzEVDDyA4gDyVmYQMWawvTDmWPxgas9",
  "key12": "2AMQEaG5N6uu9QYkb9Fe3w9PrtWMbddqkH3MRyxY99avTzFDg7KdSr8pwoTovMskGKiun59xdyWuUD61fzxsUdjb",
  "key13": "5fcDwqAppKDhohMJEZQ575LmoP8vhogp5ycJrR4oq9Wn1Rwx8jW3BTvq712qFGgPwFP4v2TEqvRbSQi2HcwnSztN",
  "key14": "5coTa3Y8AwxSBm7ar2kSm9R64dPftda5wYJDT6gJmazEDc6aR36yoXP35jWsV3btyY3UFaXDqAC7nNWJL13GT5N1",
  "key15": "5aAoQFuHKaTjwFxdv27yqhDFRwKcQbUsNNfyL2NXkMVPcPguPkCv6kBufxtZH1sVq4eV4afgHkzbpnioZW9UHWhV",
  "key16": "58Q9ctBidJMMY7KBwM5xRiw8G48cBwqseQnqN2ec4tWhQTrW2CjfJxSmsisuUsQBVX5Lm28RFx6H1moUiXd5AXGY",
  "key17": "5YVJ59pX4f4ZD6PFqtVWBmk4YBF1NNNbJsiiGAsRg7ihXND2aSvGSFgxjcE6fZyjURiTqYU24gCGZYbFcCsMprj9",
  "key18": "NRCCm7pGncokQFdg4hh4TosU4wvq8VXxV3fwCWJFnxbuancvUZfEkL5DyaVqzWtHhRpytTK63y2SkLPodE6X6h4",
  "key19": "3n3T5BKMLhcTS1mPoEetd2MxEi2osGzieXkMqimjazeuEwarMd33FahWvDn6UsZHqJd5XzZBnWgHHhC9LZtWttji",
  "key20": "5iaPzZHtqpGeC1PNp3TMwz6mrRAMBpdW7MsezSJQF7eiSoE4DmKP8m1HtsTKTaQmqBRKABdid1Aj7njznKYMoskp",
  "key21": "6jHpyzEj3dRM21Vy2GucGrrog1zZK1AEEZN45LhvXQhHJM4KKmawZ913xFqDPYmDUEGtn3yv9zCfUUmAGqKMjkr",
  "key22": "3KjYScX9ewSMUiHVQZ8jWuH4syVgVxy4MKHUcasWspqqRs9FATPRycJd9hujYRmRH8pYvzGZw2ZES8GrSH2Y4d93",
  "key23": "5hTWeUJW84FywEtYsPtbfZUyDuutF9RdfeFKuRQCeM1cfX21HDiKzGsLowVGm6NswHSFao8JXRdCAYqtS8HjxRcR",
  "key24": "59FcVBqrGyY5T5y66iDuEgY6wzxKTe7ndywq87amYEQerFcEJWjQ5Fmezmj7uAFNLrLf2y9XmpbXYxMnQJ2iReNG",
  "key25": "2xP9mujLLgTE55KifwW519Yq7iKk4GRLGSu9An8QdYrJipkU1LK7qwB6cn7o94tiNvaNfK1kGbsJeTVrUQUHBTLD",
  "key26": "5KanGqVErjpWpNVC6XhCjNBvtoha4wBuqPKXkLLeM4P7dV8wJE21wQfH2HVDSFjS9MNJJLu6HAQbJngdkhGntZR1",
  "key27": "2xGbfTAdL3sNf76b2QR7AvfcyCk3rkVMnEiVYW2TtJ52MrBSfPqCbpay9QJ6MBwGDHR9pwwSw2EVVNwaBVVkpjw",
  "key28": "2KP41A9bSfp9nQMTycqYFiHLEYzoCLPojg8fuPkmSYDzfuopgDwmWvDNcuXDaXKKD969Pd3S2qg7ieRv1tXrm8Fr",
  "key29": "4P3qcyWdCrSDPR1ZtuC2ybAnBfzUe2ictP1iHgjZSVQqz78w4tseChx3VSQLrkT2UCA7z3jcvWpVYVDD2sYR2VPT",
  "key30": "3rKMS2TUE2MhMrEDy7L4CtTqdEVAbCELoKMXX5W5qkE8Y1kEwu58m7yAcxpSdLCptoNDXPFBgGD4BHvRb4vRGq7f"
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
