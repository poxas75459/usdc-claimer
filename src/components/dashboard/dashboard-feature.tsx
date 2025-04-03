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
    "2AeHr28wW64ZB6EfmHBfxwggdUS7vEN9Fu69zufghqXPiyzfyXavwaPz9fHi6U9FE4ZfLwV1RFJBoHXvk3q5G1sJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ymK2Cc4yrxFbNRnm5do8Xdx4NKBgsnwgx6qyRtx1mUkzaLp1TiqePKtaCpVpPAeYyM6s2oAds5H7vSb4EYRahWq",
  "key1": "qveJe8Tv7xs2n78TGSHucVpqv6bZEzuVfvauAR1NRjA6bQahcm2iF5gdg5tL9pE87aPsynKfnhnQ71aRGGeu95L",
  "key2": "yms3L5bT6KdXDJcMMVeq6nDVBwntuPQ5rB2PWHmuTfEkXkkaxLTsspiK9CawFjonp3778iSwUMPEHrRi4zdq6bo",
  "key3": "RBr2a4cTMtBUwhjdXRuSB6vqEEpetvRR5oRgxEfF2zHBdJKrMjgfqETaTRetv46yELs1ZYe9JqW2f5h38DLu6MB",
  "key4": "2UaM6r9wJbwrRQSJF8VqUSayv5jgcuvhrRK8W5vq5xkGzCa9F5c8skbFB8Za1QchLfnnYT2GGHfTFXRwed6sdAJv",
  "key5": "4SaPR86tCP45HCnAjGCy2rSqYsL5nXa96vAFRpWqZx9PjWYQEHmg1aLyDLoNLdEFf6RZ1T9svwn7T5h94LcW3H6w",
  "key6": "5PqiyXm8WWbhVdzFSLa9EY5neJzGFWhBLKp8ukEWW6npBpied6hXnKxCiben5mTxRoTCfGLdpYXaamiVRPUjtzPG",
  "key7": "FUmqLTsFBqBgRBu9fPjKWAUpKqjNwEUL39vqKNXn2bdoqP2nGTtmdMP4Poy2qpZY5NSd5gPLkHTfxynujHX3D16",
  "key8": "mVWx2cJbSKLfSrjpFJL5QDWZNcPETUjEMU5NE58cTY9UGuSxJy54GTRxR7MWnHQ9FZse9x7PVuCCDWiLiHJ7xRQ",
  "key9": "2QpU5owiHJdcVhnmNbt9gcVMtZNkBvnrxz53hoNLqSckFZC3eD4jtADsGj8zgQpC2m6t2TxYGJ9iyqSBLLuvGtZo",
  "key10": "NAQGaS32mv8mzcCuA3iLttsAqjBtGzUkMJas1hzLPU5bqZsAJw2E3pT3EAWYRdk7ktwnvknfBG5gkt6NAcNF2xF",
  "key11": "4GbDaXFzPNm5JgeGkQqAJ2UcULZYnRyUc8j8uqk89dYyDyTetSKdEsmsNMZYw7j1aWrfxQ9AGnWLUA7f5fjmJRuf",
  "key12": "5ru8HXNSva5Uq5pqZHSo3YYVVxsPtvi4cKesHo8Ydxhu5vwJ94SopUHcRqiJBvYGN9xJegV7pZwGmFf4bv9kscXG",
  "key13": "4Rm9NdMhq75JL1u8V5YBSqf8g8oRvQGGmhxuPJUrss1572iyCPtF1QNzVKjoLemqik7kGVnaLb2TSHkweXaS7pqn",
  "key14": "3Q8mnjrFGeuWLouqto2gi3KVDN97zPooYJ9s4JLue8QieYZpDrApbG2Eu8K24jiooMmkhorFzMtiWuMhX7ku5dRn",
  "key15": "4KBcsnoTQy6PhDXms8Fy6QMnnEMFZHcLLZzvNbKNj9xLttvsDFQrW6RTrh6DqZKSTzJfyFTLRnF7c5T9pscuWtyS",
  "key16": "556Cx3qKvQWE7Lz4jfGWeorVs1VJem6No1u1YquiVB6iFbjhQ76SdPV2pteSjqp8U2LELm9AxFZEnkim6ansgeWd",
  "key17": "2KoJ85bnn1NdCrTRhkyiSySmymRhug4JwJfswWAakSHcoLw4v6b6NswdyfNyTsfB6gLUny8SD9b5u3f2vNPE3A1A",
  "key18": "2RktxZh9pWcDtpU9DBWqcF4MBD3osBBnodPjiXX8JiJ2by34KXve2NqPXNMzhPgJTcNbip2gg5epi6jQrc1fYokn",
  "key19": "4zhoU2djW6657EyTA5fzLsK1YW2LKfmkGSjD4cyrYS2yKXgFehk7AE86htTytS85PK9LVB6PRWB9UMZJtpkEkUSW",
  "key20": "55bc8KAxGbDyvZWFMH1U2NgdwJ6QD615CcA5UUF7QttfnZTrsVqi5ZyxU4LjFcsM6QRZeASKKrRX5sr1GEYgihhB",
  "key21": "696tFbPGbDmNmi7sv8BrQBNKchFvyCJbuyp9ySdSTnfb2SBx2FP4k9ei2mo1pDwAewaaisUrdCJCTAu9KVL3HA8",
  "key22": "4SgvXj9c1ApvgGdJPu9TmokEDEiGvahy6HcMAd6GH577rDzizYwWVoNc2Atgin1VPPKGjwN8hiADo8cdq4LZ9xQn",
  "key23": "yF9pKkjKgUFrUYEyF59LWPF2PqDCvCzoUnzyuMH7o26tFyFjRefkQjeJQKBNcrsEkSQ8kAFhUuNwu9HPxsDTdfN",
  "key24": "p99cUXQDwX9KePpCbpWk5zNySdp3DsWASxUoZsEK62FKpobCEHuffrFDGrcx9Cbn7hrPLENA9MaRDQkojfTfW3j",
  "key25": "J1GW14LBo6dcx8CJNe894bSmqU286YnX2P56LTZMipaVrHGT65SwZAFaM141QUzBNwMgeftRXKqiLRyy1n2afS9",
  "key26": "5DFtyVWJw62zG22Szvt6U3pisveGzaQztDo7xRChcUs26NLjMBsu5pERRAUu2mxg5DrBFiR94DZQo2HSTZidpvor"
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
