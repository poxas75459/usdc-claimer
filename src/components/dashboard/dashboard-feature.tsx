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
    "2svMsgtkEKEUweNR34ZjK2WgC9RQHskQw6e6UimsGzL6gquMSYUTmUVpR7XDc1wGDjsXFW4cFhPFQ7cZQLjNNkaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C3ZoRpreAarYrejokLve7d7yY1e6ofxhotCgA66tpaEzsoGFtb2xFZ1CQ57TiQp2zHBQiN7grkjNdd6TP1qMjgt",
  "key1": "3D2iGq16i9vi2zhGPZcx3CvrxVnHA9bwuBEbFeqRtq8e3Ucey2Yws9js7aBUBrgC78zKtFs9ua7w5Vf1Hs3hkDB1",
  "key2": "XY96hTrePaXcEzdELzBzvi9PMMPo7gPqCsqbKGKMFC4dRgzUo47qKKrBXHrcwwh71ghmm9Np4khP7BSggp6b3oe",
  "key3": "3FbeYrHr61dwisjVgWii9fuEuFcDzwAgcE2bwiqeV5okC5CAGUuF3g3xHVsDQWHm45FS7LGJbHhqNdKYWRzi6NWf",
  "key4": "4j6EYi1Uciy3LhBrTanoZFN3dsLyVTiZRwPqxwutL9f2ND5nqLNANEx43mLZTACLkavYx8myjRMLfrjTiGYtqgV9",
  "key5": "2sQEs88Ftcqu4ysFLNYfp8EXgZkbUNN5GNRpxwQDYobkxCApUdzcpgjmWmGa2U1rF5DvRVJt6sqQtqAc1BwPcDmu",
  "key6": "t8SQSqTEp568BSrE19PePUeFbGz4JcboQQwMJwn1oA8QXqDqcfz3XbFmZzg2RpUrWM8PNjwF1Ybf1ZmtRKZ4kyt",
  "key7": "2XWGdCdzP9LhKvvUQgfNs2zNQn7Y4xZ2yjgJtyXJYa2JtyPVguUFxmGTNMz3j6dXYGJAWNkWC63kMWETjgCHGHTn",
  "key8": "394oAYnSALjC8dQ3HCz5rTxLE6DTZKCoTGTTvj5v6gkaXseo3h71j8ZCiNXm3BkMqT9g4vAbFvaPKj3jFRCx1fao",
  "key9": "4FbJCU7sroN48MUw71PpR53Swro5qU6ZTmav9bjdEStkUT7fU6A5fx4FeMZ8kJYjk4NSUKMjUPkV8o714BBDoBir",
  "key10": "nU2NDREUEgqeT9gC2eGj1cGmX9QEnQX9VG7FRbeCXtxearRUtSrxrzBesFEMDo3sgetToRrWBTt92FWoPDe81qY",
  "key11": "BYgbb1H6Ve4Tge9TJadTSaHkCnCXs2P4nE5ZTkWC3aEuBFLSLdxKS4s2P7vFMHEwdmYNdkwfaCFGeLaNTvi1c55",
  "key12": "5L3Pnzt9mXBJKv9UQYjgw35h2D6w28MJFyyx8Gimv813movmZGZ2q8WsjspQpWtuAv7ccR7R3Q8xFgE9ZxFkRaUN",
  "key13": "3CNrJm8NfcjSLGuMT45cUkomNcBB6WGSXPT6p6RjDnwYfnpkAht2xU3tupNA6SN8nPmP2At2wcCwu75F6SReyo3t",
  "key14": "2xmKi4qeDxLzUJxqKys2x5tNfSrLe4FbzdeSZUYfUGVbxCYkhZQhhDVaKxE1RCo7PvFQc7JmKTqizAohgfNLbXym",
  "key15": "3dHfUSicr9a3wD9LinXhZQZyYRL9S4CqsNNr7hfP289ppYg1veW9ji8gmXTf7c6YhfxnAskQVcARgAsB3Qi8jFfR",
  "key16": "TXXUDXVLsCSL98SXjdRcANY2oX7HWDVKS9Phq1USo8qiTMmdSiDJuW2HkPvraZfAXFzQbAGEDdVotAoeUgVM6RV",
  "key17": "hGjmRnwyB5ad9zsxo3LFxkHar3xMMydhFytjPofFPbLaYkr8AW5dm81KJeQWhkX9A5Ry6omZhXvvrY6e1C32ehR",
  "key18": "3cioNxwmzqWkkwLgwZjczmryUnzzL4fLQS7uGgD8RMyVqkvTBCEqra3V4WVNBs9864pomwa2P9KH8489QPfi4XWg",
  "key19": "57BKNue98GwL5k3gXkuue12Gd843rVNHV6csxo6pYbcaux1QR1pbPrb4EWhkEU8JMTrzFzggAsemRZnXDYYNUpZV",
  "key20": "5RY9v1J35AQikDWxKeeEZJfq3w49M6rxdseVbDbUQ279SLPJQDfW1MhRvT6ToZjGsU9N5ShToANBTPFxGoRJ6Wfg",
  "key21": "2d4RdY3garbta3wyYmQFrfe4sViyBfEPEVEUSagA8WyMfjJknPSSZuPKEt5rhv5qqQBKKHtVcPrtvQ3aLtn56Brp",
  "key22": "5XK5j5ozka32QsgySD1jn2vtikXywjJbStSL9b1R99VPwYx3oUefRMywJBJoenMAn9DoftejBYQ8nR3sKjntSaD",
  "key23": "4V3sgkuEMzdPJdSDWESekAiZTLTb4mPH4Y83yMPWtP4kpt8pVf96kYuXrHcQiqhsJhxs8LkoHSgrVqXNxgkCbZBv",
  "key24": "4DyCm8pqWSFihGr3pUHENZGz3D9XMX69sfUmfPh7wp9WCVcbRzLDCG3rNc5WziJt1si96YkF3kKVRVEqW3uMvKf3",
  "key25": "4xSp71dzrKVgh2Dbep1kcECsXG9TwTSReHuQpsV8oKgheTvp4TQ8p7Stjd5ssMEyYppAFqPXkPse77tQWe6Cfj6r",
  "key26": "4YwDgSN4U1vzCkpDg4kH6MzXpL5AM4veaFRZsN61NPfu5u8bm5bgYh1EVy19S2USZxrVwKF4eyLmLcbH5KWBXxYL",
  "key27": "45z2K5SBbqtaDQKUtrQgj4XDemkFN5HNSF7Fq7x6KS5XKcvWH2woUVDG76J69n3PDF6S52qYr7mUNU9nv828kfJz",
  "key28": "3WVDn6ckb8Jr3m7praD2cyFi7dPabvnfVSSFi7kbuzyV7adBpnnhLjYBC1gFTTAidbaUpKD19wi2mrcC5o78kDqM",
  "key29": "2KL3apdkKv588CJEseN7SWb26qaNzmfP8cTZNoXDs7oe6iYzDJCdAXeKGvzLed3vT7nU2pPaciKja6AbjmQz4h8H",
  "key30": "3iA8tbtKJzdGMhMxBiZTd4GkwXN7FPZMNDASDFRtZGBWVT3k5QhEMvPvtYm17qemHGQ9eH5LkRfWfPoqcbuifNuh",
  "key31": "4pR3hBwBbnkK9zkt3EhTmB1HZKfST6bMN6wqnK5sD712wn2BnxUfrTCRogto8RCjjiDNfPAygHRgzMga6HfMgXA5",
  "key32": "5rgkWJTFKCZEjsxKuzYprLryKsywvDPQ2HTNPE7gpzdsuW6f3x8S9JR2FCiPWr32LcNNATGetwsgzZ51b26qtyxW",
  "key33": "sC8rdKcPwQ9oNH4qLB5CSkYfzBVwh5d92RaDogCyCruCkdH7VAdg9Z5DhtKL5Z2RCjHuSdXk7M2oVk2kaJBb6vU",
  "key34": "5r2KpmwxRYnftydS6egk6EiZe1GRVwPFrg1yFXgTYjDBLbNNGkTtcdVLEtEY28uu78rxsPvHFZT3KL8uGz854FiV",
  "key35": "Z8Td1Y8t1aAsvosGWWdvP7qJnbkrNM17sQe49FYPCW8i3NKfQfeRhKRWXbWtQ2ebEPrsA5qMErWXtVxMuq6Qymq",
  "key36": "3dAHgY47drN6qcj2teC6nnoHDUVHSWAhjhqm2ZZtd1jVw3bvi7sy3DDy6ALTUpKM4G9vTeGLKEuFAV3EVSmxHsEf",
  "key37": "67kTn66SbLcoRfks3tpEbyJHHgUcck6zMhQoDuaFJsE9BGfEBdCCTaHXGxaU2jcr4zi4Lv6XkN1793FVwRCAoRvr",
  "key38": "4Nwz2moajGoHThsQY6Vs5XTyUiqJ57hnQPxjGd7TxZXB3ZNTQskdyTVFAkjHLKTTkvvn7e6yt2f8qE4jPszrXZWM",
  "key39": "5mKajsmVVeo97b9dKVJ75FwFMRB7r7AP4zmee16S38zWbgCsgNFDewkH5apphiQRRgyZhY2zMv2FFDscGYstoHdB",
  "key40": "596qVm1QLETp3ayYc3cVHPHkr8V5MTEtAH8gRPgcPG4m8XY1CZDA1bP5o2Kxw9po8K7FNNXNLfmuM7f59FHfh6EH"
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
