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
    "3UkbrZ2o7iUHxMk7qJcE5e9a7zsyZiZ28uj614Qy6MWC5kjKdrEeWgvBCqVmrH8Wgq4k2K4ihxHQrUVtN1mgTbN1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54F9SrsCtbfic4wsYxJ18hATxQfS3SXbRC9pF4cWTF2y2zDRTnYk9gxVr9Dy7RZA83hWYiqJP3H2SwE6Hw73aETD",
  "key1": "3fzFpYb1GhyBP2hR5YZvRTzQAQL5HzSUF5zLVixTTSEvRkj8fLGGczf9VShob3QYrdzDmpfSBaqpvnoxdy82hAo5",
  "key2": "3ZN1kSV6TGwioeamPpryaoQzk6SYoBBB8ifzzanHsEGeN5yK6p4AnEQLnmMYhCFLW48oHV7PMsC8YQuKF6YMiZai",
  "key3": "5PnqapwWbXU6hh7htzJsG9jHzCt1sMRj29MpphPjg8hTKPeSzz5fQDC7gCiysncUZAZrxPAqz24WZrdMbMT4yykz",
  "key4": "czipH6b9Jr7GGscND4FG2msS5iEhJjvhyXmu3XhjtuARhv2auok7gBoVERyX6XwayBvnaKCU4vadZKtJZFB57CF",
  "key5": "5fnxebrVfTfyWKw5oBuiQnViMqqCwFb264hVaKPo1bQniVwyjVYK2JKfnzKyoPvrGTqQs7dmHG1GmPBCrVTx1u8W",
  "key6": "31QqdNRfvUiRU5EKrU9Jf22XN2athXqMzmfpvzjfiHVp7dqLnskdtuMq3N2EwXLiSfoEqMRKkYupJp4rASSCkoGp",
  "key7": "2Gr4zibkvsJVB1NeCMnL93p8Apbq3Bue2wmrJCJ3XVBrNyRwmxkXUPg2uECtn5BCeT8MbAkoUSNSZgF1fBqrfHLe",
  "key8": "Ftby2uDUXgxd3qLtLpki8t3U7Y9L3xbgBGvYKgwRU3eRALrcpkq94tUJmSi934MVbRfHHNx2U7oX47VeSAPWhUC",
  "key9": "5E1J8ST7aiLVsyPbAr5bDqZ1hrvYG69YiAfCXZpSVT1uaBS2GVAfsW3GiojZ3FR22QbaFwf3F7iKH6NDY8wSfWrF",
  "key10": "47uxqXTFSXxY5Y9Sx6uDrigdEKCSJ8GKYLzMFKtVyyZhQuqvoXfQ4acKDW47BVvdUHk3HXaBxEviD4EbXdPZiRrN",
  "key11": "5LVgFhzvMadVHpmB73tHiL779ZvMmaxgkjCEjHyEJBCYPaQnc62vLfo1LyHES3DAhixGYu5h9CqH1dgUVPDEHAcC",
  "key12": "23oZVzKaQVtQoAjpMQWUC8KEMvG86oTKW7YD9BmcHGLJaQeYvuu2z8pZQWMXq8GhxxwRzE8KFSW1akbNnrRnk5u1",
  "key13": "27mHUAkmskJ16RTD3QUKSMM6Cx8dJ5PTQSCVryQvS8YLi4C8ZsMR6N2yyQKoJdgmUoDuo8f4U5cu4qPqFhhxg4gZ",
  "key14": "2GTen8MYGjTfXAFjsra6RzFCNi9BY7uT722aTWy59AupUhdxStmeEXh9DpvqsCHRxsiEix3UrYv4ui4bjp5vLj6R",
  "key15": "2MiRvaHp2XXnc21iPmoFZbm7uxkCFLKGRQN6rPEZZ3sJNZ1tMYFpjkAN9Ukkb66MKKfDhu1t1dUXtBqnbnW9dCbb",
  "key16": "5zvrooYMc79KNR5xKtDNWW21CBQZvy2AtfmSxWoSDhsmFvagWyN7XwutkmF1CAvdpeaipH4vy7miUWoQKMXb8CST",
  "key17": "3LjsSfyYtPuMLoRYaZi4zMe3Gidw8sFXCLCzrJN951XCdSnSnCaaDqtCRJSnz3xQXzyQPPEZgEV3w2tpffV2EKtn",
  "key18": "2Q5Z9sGTubEgg3uvKiEDeSXipP4YuajuUR3wTHJwvMHgZi1fh8ZAtfDmvesXcUreC8mBPQTbbJWMN85NW1MA8aad",
  "key19": "3c5wXfw5qSbT5rwjf4pq2kFfDAgEGPzMmmvx4kfxq33aZvV213RYNuB3Xo7Xsyf5mNTxSwXiZYTGSBvRJf2pCgLS",
  "key20": "2LeeV4FPxQ45Pt2owidQr3yk4Js6GaXT8oYqkjAX88wGZD9crf5NJccR9cPvFyvWGNnPR1ZUSu3CRQH7hbdJ7Ew",
  "key21": "WTEcqpMmvJhNf51SejFr8AzEabSo8Dqj4VhUSg4C4daH64VmZNfvUDhAJSXDPbS7BnqLMwnrXYwrwtzJ4gmHUyC",
  "key22": "4dwZdFwo8EuweUJVe5DJR33C13Fq6RcpFSbFGbWJp1KEYGQiEo1qiwacLLBhW8Xbup4Y9hRDEiFm9GfrFJ72nDjr",
  "key23": "2h1bF94tuMEtHQPqXmjT1BVimxVX3dYxKgdGhoYg9wM2iHRvENxfhFCaXSdmQHNXRkdPSPHopqnjBCy8qFniyATP",
  "key24": "2JVuZAB5tyctKddkH4yxPG1hAospoHmbB4tdXPvxbeRPuFZQb9cwUdxDwESJ17c2KeSWDSb7sP4YPwDi7Z1p2k71",
  "key25": "5pyFqhU93kxAhMYX4p8sJDpR78th7ZidLCn9xwMfMcqSjrQkYkCRFqxhTNKpr8KgRJx1UR5xeJcy6rmFihNbM46P",
  "key26": "4bPMxTcYPCq2nzuwbCdtoNcgvTb4GosEc4SGW2ePCob9T1TRx1mLjf9b1BuvnYyA1AncFYqbRH4S2tRg1Fw2uTnM",
  "key27": "dC8YteSFdyFA4HvWBNS4YP4eALwdPNxnVxKWiircsNf1pDf73PYxPQnwb9fAS9E5T1G922nHCed4EZSMbcD5nho",
  "key28": "2hcjFrcNJNYRdpKbrBcacot7UXkcawtVzAqewXdsxkZBbdKb5wiixB5jHMeX3REQ8NFE8kMhqBrr7nKjaUMr5hPj",
  "key29": "284CBQX6LxNhfbbYu83QcM1fUnx3peC8d9ikpWthn7LJ6Y3oVKGtQQcmpfzUKLU1d6K9B93xCbn8HJPc82V9piBV",
  "key30": "4PxyuKDv3a39mqCkGz4mPG15FgLDHKcmLukYbiBZEVBZCB8w1hEcT49CwjAxn2D36xgoaW6exct3fScf7CPMXztc",
  "key31": "4DDgkeh7yMAiRKx3qvbMgzEcDmnSuT9GdNTBNmGbB24HKnJRgaxZ6JYJXnR4emWhjtaL3z66QSkTaseus2QJ5Fr3",
  "key32": "5A6ZXekgZvixM9oWozTJKAEHF23MzQ1KeDV2Zd2mVyCiN2kieCFuqWqokM8fREexNVPkXjivYDv4YQ5oxcHbNe7f",
  "key33": "3PLXrcr66LZBwfXb1Yw1QVhH12ZGfz1CfNdKNXMwRC5eakSsP8jci3HrRdQ7csB13EpqYwgmBQzUMyGdXk9onzf8",
  "key34": "33SgtQbvKXQMi1Jyjs8ypAK48qp8AFxEftMhpD8xyW2pL7C9zgYX51SnKpwjBgRqNJ5W67k5JqbEG4AnvcRvrzT3",
  "key35": "4UWnHUgtMDHmTR67u99UmrpCsW7sJxAJupaGDBKhfTRVSXnPzFMBw3VJE3mFPaLaDDuoeewqw3PdnSkHj8PjY4XK",
  "key36": "5vmJvR4pxjXgdePkniydxQVHztdnh9Uv5znqpxJ9pwGK6d1eUqakxdMh5uiFpRJqNTyJvwBmBzBtCaTimQWBWam7",
  "key37": "wi2QNVzK4vcNUvBFU3cto34Xjbc4T6F93iPjRj1uZggRBPYrN97AdgqzFSKp6a1EYyory4FMdt3Wk1mEZNpaUFC",
  "key38": "5UNmEnwKhQu8pDHPFzs6nEtVUQDnwiAsW8pGexg7Fmk2hiFHx2BWT9XUSRSUJryAtT5gbAfudNP2BFyxJ2BJaejF",
  "key39": "4VtQgf4AcKzs5AGu1NSoKh6QEdSPfqwNkKMABLnLUUG4kF7Rjak8VAzbiR9dmgLQL52mFvEQXyRA88jFKvgzUK6D",
  "key40": "5rEP7dZXnQotEd5B9CWexDUZgPwyarC1TH5mtz8gqupTSJumuFkPs2ps4p8vFiNxJUSUNTvwdycBM47DAoXHbFMG"
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
