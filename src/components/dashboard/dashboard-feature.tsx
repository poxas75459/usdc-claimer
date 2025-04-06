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
    "2YpxCpJ8SBCQRqP7AvVdx3ZMDeNYh9byRfrW7eZfmaj2Twvo2BBJRZBXsUj3B4ywvCPoqXNdGuLNtEFXfarDPcGL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V1rjC3vg3mWerCWETRwMUXrju5P81swWgSTFnAp1FgJ2jVnG1Qkvq3VKABYZyA8UCqad8bpSKQvxaC5PfvtFZU4",
  "key1": "4EqEn73UF3yVg8wR3vWAg55DezjTy2sMkuHaT9Ta3V8GHWzSyzSz8n8s32fecumViSdp8kUTpKcjm8fhd1RcyDPq",
  "key2": "3A3j2pBbnsbdrmTY8Fhq2YXvKT2D95Y4WnLPND8THNtY9khsoJarzErYxz8wMzwTHAK5b8ntpvnALivnbDvHXZZd",
  "key3": "34aBSRuCXmRXNtysxd1cAjiSByXrbMKGND71wymNej8BhB8TUEsqXbie1LqqgUyLLiCsJHLBKzQ6rRiUSNRc6T5z",
  "key4": "nnayL1jf7QWVNpDEKnAkEvoWz1YM7Z6fLcUWcUZN2mFE1DdztgvFDPtJXKmLN4v7h4b8BmeJftihrrxd7bfWvdD",
  "key5": "5tkxwUNJMd7fwqoJLVqxBfWCTnk5knqN2T6PYoYsU8Q9xGUpKE97Cf9XWaVs5RzYiRMytxmY3odd8fzriniNyBct",
  "key6": "2df5b3iN1U86CvqP9xDnR8Qr9TxvWE3Heo5jfMw29PfgbEv1hZqYRwjfLMxGhrLEpz64Gf95nLKrh7YEsYqNbMsk",
  "key7": "4is7LRhtqhi9xMtUxs3NUBqLpVHf9SRVQyjBP1BpDc7NnR5rEoMnxexCGudTcFgmjoFsuKT2ZtdT81pp5FgFTvHT",
  "key8": "2nQhve2xd6RUfxGxdYZviHbQpvA1jCz6J15j3nNoRJzRbLc9a6m5tPYnGc7M89BpLw2QHNzPm7ck8nL3wW61sDTU",
  "key9": "2QLe95uuiVB5PaaCmMPi8JMp1p7cKychcCfuQDE8sNvUnrQtoBeUEsVbcdXes89C3mS5zDqQNPNSAVcT6UN7oqPv",
  "key10": "4f6dsSg4YnDzdAgpBxcKqQaQNYGZ8zsreeaVh4hakKNAnUyBLpy4MxDexvfQn4GoEda6PfaFrs1Jrm7VREuyTAbY",
  "key11": "xctoMNndr1oY66Mv2Yw7PA6uudG3cjPH7HycjqWHLRBXD3VyPiPcfBCo54maoM5Lz9FrYfUTgZPngCdaeUkSeeA",
  "key12": "4NMptULEDgJ2Zf3eY6rH19mfYbVFvjE9trDbmeG7j8msbuowpedBbGsgLjrv5UGDhEu7XmtR8wXDU2LZNos8m81L",
  "key13": "4bXQfxC8QGUTerivZKZY7vJh81MfWPQe3BQyEofPK4i69mFTnXy4zYx4QikczZNYE3SkBNcz1nPNPsr9T5ofeb8R",
  "key14": "25msHbZJ23rYzCehsaT4zQRvFUUjPwjwPDo3uVwpo9B2RBYvfTato8uPUchioVM5Mp9s2QsJY9FLBepxvP3WPk6T",
  "key15": "2foYkhZp9uSfVxS8d1LYrcykXBMe4NrjCJ1W6VspCCxhkvLYmQj3rg9hwQHjn35pNy1YrscCrNUChjR8rz84RYRa",
  "key16": "22EXFK5i69HrWFjLNaMuHbcU82LeaGSnx3p3j7fYFdZLhagG5Xm9aLvW6sAoGzsU4qZdC87A9j9Q4gm429gXKrvc",
  "key17": "3qzDDX96EwDS64aBL9kqWfsfb7zQHsdKC92eSLd6D2spnF1T6tp194KevBuwCtcFCH1usNZpjqQ6dgEtYvR1C9ms",
  "key18": "4yRDbzonoaNVS8Ywd8aZCXzrgJTJufVCwHocZwwK5tqr6i7K6Nm9VeJ6cYkNpMhMqU2XtEhUPn4YJnKZz9Y5KpHZ",
  "key19": "8eF1NVba4VU696SGbamQHyNEcoyjZpGTXoNbjDcoZwu2bT8cY8HWxVJNHUETTWAJcp47u1CRFwDf9NUNPw2faM7",
  "key20": "4aQEhFsxf29AAmv777cBQm7q86yBpYHHAjUXS1s6Z3CRt4YpGCS3BryewSBm7epaNe5RjHxkJrpFS2maZKqKJWtT",
  "key21": "3Rk7W6CTiqKbeXmbEQ5YUUT8CbXgNNQd7MNPR2C6DCgp4zoWe3jKkaojYTSxGb3u8Srd3HBvR8sQTEgAcXJ3xmtC",
  "key22": "2NiRDXAcf37q4Typj1dS66KMkTjxACpDK73pC6UiScUKsn9ZkE7LyZUaRR3A5PNHnBKAFrMEQas8YgxrsdXQC3U8",
  "key23": "2Ri2ysCYqmpgRzb59QoVUBLR8SJ9DtMkRxzKWn8Yfv5jt8oUsmaWSL3t1W9doyP4uy2i2Wu4t819sMmx4g8Yu6XH",
  "key24": "64gDMQeYDUGGppe6FBv2exALyguMSkQhHzPpNiHpxhzzQENfDSSGNN4N8237JLgJKckSiUgMWdBMGKHrCQk42aVV",
  "key25": "3fmo8tUY3dyRPgGxAqmwJLcTsYXWDtJ3sUnPPr3PtoGCUcToycXiTkoqoDHHfQnAj5juYityPJijcjR6Yk5MJArU",
  "key26": "4XVvc8NmakqPgeJJ3oDbBswNpfgW7vpuLvTW6orV7z5W69hhz2SqFahzwv3NtNoGwSs3wbvsq1N4cwfgD4oj7ZYD",
  "key27": "NzuUovvkZ3e1NUD8sqVeT5E2G8vjU7wxVu6rqGGdfKeVDDZpn3CwXfyfGXUhCGawcJvJwUqxMJ4ipd53GuE6wm8",
  "key28": "4xEkx4tM38B9sYeGEm6ty5Lcfm1x8w1uedGftvZZ5PxDgKZoRjxa1h6ZUSpbvSESaTp4Fcqi4VzfKnasKhCWqBDB",
  "key29": "2q2ZsrmnRMtsZ4jMFfR4aKWAnverU6xJMCtnPGgjyKpWEPKcPcv4ny3g2BYVjpCRCMo5qX4g4BS9DPWXZJbT3TKT",
  "key30": "3fetpWcbSAdnLjeL67TcQydrY8yEZefKBBJiFdASFTqzpLnRZJoQGo5Aek2vZFGw3LWGAqNXiBRs597traHjA5sP",
  "key31": "wSxta4zpxG31fSfXT4uaXUCdhL6vDtuXEWjxhx3aAMRzgCKTZ3XU7jr81bwT77atDarKTX4fpub6RC8opR2eRMY",
  "key32": "4ViMV82nVCLtEhsJvHmna6sniYfXDGHSCwcVHj3ZYZehZBhZK9NwfBcHTz4uhSFoSnLMKFWLeaaQ1t2KSS9oRUzm",
  "key33": "2DtRJaGFaVXxtD2afqKhcgPHMEibZr9ZS36pJ5WtGkSAxkKWZwotgQNU2k31Bk2hnkyseKyjnuz98fx9DfHuCDvw"
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
