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
    "33zsL6XbbYMQZqRtyssEu3nL7SCsYSDTaoue2UgJJe7ZnRfEyPZtE14ePCjSTeWFcWKbiNt27SU6df3Wy5T5hvPX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hwKhJarrzKp8UesdVzHtKmSr8RoriAwaAoHdmGMV8SdYqh8PLYH76L9tGk31LVWZ3U5VYAakTKWAC2DKLtLe8Hu",
  "key1": "31hJwJR4zvoLukRdK7MYGQP8mJZswG49GRBnt38C4qMMLWvChy72GrnRZuWXBkWQ676uWPcwx6y9v9LWj1QroX5K",
  "key2": "9jihe1XFnV9kLRNaT8rQdCpnV8BgA1zAW33gFFxmNYZaxke7jS9Dg7kQhaAYofKEHU6mwKbNg8KVjp74F5YtAJE",
  "key3": "5kZiU4ihRDsMjEdkWggDRSu4ucbcoYwNXd5VR84hWiFtMkYRrtaDzBvFj8K4dsdxXvHdT7TjxjFLjNmY8kAMoCXM",
  "key4": "2Ed9zyuMxdWzx4jyxHy4PtW4wfbmMzEMTLskBjQin9PcEUVbtKF2QyN1LHkAcELa8hFPg2v3wTZvmfuYfmeJQ4Xy",
  "key5": "CBGH3ZiiNjxXE8do5rwXKYWjvgDUQ8ANeB93HNNRBwpXkEG5rzHWZYZYMYean6s1NfQT3C6rb8HaYMFF6L6Bpme",
  "key6": "5hXNMjyZEQ5nE8Vaj9xuPqV18unKAGG6rDiZ6m1Fnbp3nTUVjg5xy7LLr8kqitZoeqatrWVH28iG9CBSAinxDD47",
  "key7": "4RJ57efFM1NmkQM2RNiJP9tbDdTWomgvWsyHVpgkoNKf4uaYYey7HFj95Zpw3FetMvEj3Lq8PZgNGMRxr5xEgjaZ",
  "key8": "2bSgYK9KMcaGvfXExs3t8xGusFcDLDyeihEpUrGezfPv5fHXjoUkLNJ8vXtBopWBMofj7PYnq4u1P4kikW6kC7Ay",
  "key9": "5PwxNu2X9B5sQsCFHBBdwsADzEHzetshV46W2PEjCjxFu7hsZmE1sy9q7UcxcNLa5t47CUv18otv3N16cBmkyr6P",
  "key10": "5QVjGWS3HmTgsqSbRjVFAfN1hfdrQuoEtGfHkfPzuSnW3t5maam3BGuCDyXL1kmK7WdAhDK6h8J45gvaq5JchhW5",
  "key11": "3ffEVFWfRjoQnEGgAiRrU6kZ7tajtbuS8eKU8cgUPc4T6vLv9LSkRMDWqzrwebuJoMNbor7kJfPw6xAFEDy9oBVY",
  "key12": "3gEweZeFbhEsiCBm79WkgVbi4UKFYHWnUSdwH9Lgs4CRemVTJC6a5CNLrqxRi4pw3hPpKGFBkFfMLRy2Yr27moeu",
  "key13": "2FcMNE8wp2MkCWZHuPesk9yztboXxcH13dkjC77J7WMusosdN1CM4ZAPVbWboGxbFqhpxqUNYwyZUnuPggAdZ4sG",
  "key14": "2PzqXMnNczy4NGJYRsnFCJX27rgNJBscAUZXL7se72qY8LXoStPg6aYzqZmCGazMkHkSqdmvH8QfxGyiFi81zJZe",
  "key15": "ynbB3vhqN6fJqsp2yUH8gAASUZrTHAuhhWESV76NZ5pA7Ttid2yso1FpWu5cEVAVfVytZVsR3W5qcyxDkUtHz4K",
  "key16": "3euCEj3cr3KBiWcW6euSLv2fEtpsEvfH6n6TehtgMYgS3yt71resv9jsNZ4USLCvsyvWeRKsHX8NSPU1mzHMvwh1",
  "key17": "4vxyTVLEVai72KEwHZPrmdYcBpYpBKe6vTRkZDrR3GFZJYuvKyBkUaWZjUTtm976Tn1fn9ScQSFCG7KQH3dtmMhE",
  "key18": "2fwkKLJDJx1ATzHg4LK1qv38zCuaN5w5p2TupNE1R2Mvta8UAt7HzYqWVZjwcCxCGRZq95Zv3MEh71TSqX9yRmWZ",
  "key19": "5XnD9fDGdczWqyZekYgUZFGNaAq8Az47Sxqecm1uTxME2XNRQn4LdHw3hfJH6SzmpLiKaHvHAjG8LikPjviGJeKx",
  "key20": "GM6VBtRJBe9kbg6wp55R5aREk3vBy1UniunT9JaC7THEdUMHC66RScqvGQTVzirRUs1Hsmveqbjy4xWzgzU4vRN",
  "key21": "3gyxKggyris3SJD19ncHrv3LwCw9j6tHwXhrJosnme5VKKboC5k4R4EDETswbrUX4wfof9poEurBJ9HRouDqvE4j",
  "key22": "5MFMAAiutFpUhjkLWNV4c9PRK7E4wmki5XK5DDEcbBPvTNTiT6XCT4dPv1DkkE4hUGU7vmevQ3L8HeZ7fyG8Xxcw",
  "key23": "21U2rcer5THJTZ6FMXnVAhuKy3kS2CkDrVXDDEtyDUvWnT877G2dwYxtUFC3wif4JdkfQjRWweWQKRDEiHfchNjr",
  "key24": "4VYoynyLn6GhEgpACbYwnftf5y7MNjeRyWv2GHryU5xYowYDin7afgRYYjeGZ8S5XFjfPzAhh3mPGgFmdKfcQevi",
  "key25": "2UGAMpmz8SN7EH1AG4twtZQfUgdamwgAZBAb7pqazeYhcUfSdRpMadc5UW2K6zKXZoVA5rnyZr7kruFPMthh1Z34",
  "key26": "53QYtb5fEcfVmd1fRZXLRA7YTbGmUCtXeJBa2LZqvUeSYiRMeui1uRfDhii5CQQEoPXjQ3YQj6T39ndrHJ8A9oBg",
  "key27": "2yMbSZHkmSdCEmsMWEbrRB24TQedbZL4yGc4MLJYdRidk6QZwSRTseygCNbqmAVNF8Rtz5XXHaubVMnFysQjSt1C",
  "key28": "5jM7JoVgmykuuCAJQZF5KfuThUH6wbdSmeTxnjcqTEs4w4xkyq48yqDzjHezs24eP2thbRe59XVG7SCjLrHTcg8C",
  "key29": "4wvzzcedE8RUTMoVyxGLJL813og82ZUhkVawxr7MaUVpbQHxf67prJkBdYmSN9j5KK62TcpmKrHitqJJf9rFmc1Q",
  "key30": "3HFZp8tzxKEyhXvFAyMneQS2Q9W8QvQsKdkVDEusdbR8edafmtbuoGdMXwUVmvxRsHhdnQWyXWVp4TQasVcyBxzg",
  "key31": "61p6cTshDYUumAhShXaYm71rm5K5jfaDaZDvK4KQbZaTJoZhgF5j3kNuyZjtgoxNEeTSaXQpdbmGRZwLE9q6Xjq3",
  "key32": "ZrWf2kQB2WsSos6ezVfsyG7jPMmqesYcXDSvgyX3wa82LxwakZRrD1HkDBEgnAG9yGisiyV6uEh7rkEYr713Sgf",
  "key33": "45EpyvjD8dASMGVjkpg2vnzYQ5o6p8VL5kA3DwFoBRnhy3gQuYXakG2WFr5dZKTGRrSecRU9xnVoTi6JEH7WareT",
  "key34": "5tbH6J6ET4owMqNuehF3bhzqkh9Z1PWcTbgoKcZBu6tqXr14rnHaBKpswVXz3iT7HGYLUPeUJaKhbcKhPsoyisjq",
  "key35": "4rxdf34d112LcyzQEb6LNx2b2CSAh2twKpCTTxP3zbRKFY7PQVfAZdWCspmSSFAW8zKhNZg7tN5VDZGGi8MExqEM",
  "key36": "4W2uCkH986at8x1ZudXNf72vHmkk8Yrxz6asdNtJTLtiHcijybcxHVHzWCgaPv2XpeLm9L82JwLywkdyzEy9bxxR",
  "key37": "2fGZL97s2f9mGSnUTLGB1cBJo4v1fSHq2g8BqVuBzARrB9vrxGkxu9suUvmpcYrRhYgfKSaSWWsv2xXgcRWunXB4",
  "key38": "EZjixWLhLeE36vTkkUSGSqXtcT18Mgi2GdRGUQerKkpLEhEK4AyvMhSm75TJouBjbe2FdhsTGvaucpEntNoThdF",
  "key39": "49eLbvsqxGLt9uoymiXzUYMcCjMR9nL2bDSZftid8CTbDkvhKEyLLGs8D4uRUkWTKP9Qw4LSKQ72H9ZJdPvQ1frd",
  "key40": "4gHH72VgSPbZrprnZJ6YfCNpWuikMyTUqhbzrQv5xut9PaJBgnPvt7X8iNFfUksY43NxumqtKKCXTe3syKFTMQjc",
  "key41": "4SYD7HRiFyaJ27LwmWaa4gnFZNaed2gSec8b1cGXuddKzXnKJwtHSRWyvwq6FjwAUzL8GJaNdtfRriKBJc1bcz2G",
  "key42": "2gteuWD6v3c6NNo6NBrozjWkudoJ6CFPRB1Dp88qPE3HvRQSXQeHHc98QcPFmpCApaLEKY395vQmiNpb3HnMQn3u",
  "key43": "5uqQ47YfKVr5FKcQCKTFfCBzJW9tctiwdqMJMJ6wmNfzK3fRPYCy48D73eqeTncg2nvUmkR6CAD5qsSKux5U5moR",
  "key44": "2VtQrraPgVDHKGEB8YThh46ZuKVjTU6A8G8gtNqPaBFw1A7LaBrgxHTuj2rWqQYdFXYpwyHWrkdDTrZN27ueA5bd",
  "key45": "5GQtoAmZiazKB5HHEa4VaQ2aHuPkdwfkN6U4t7kGRx2Mi5T8VMsaJYkSmbHoBBfqLTMrW2dVom4yYndV1JLMFZvS",
  "key46": "2ATHba9XEj2nA9dk8hNwwSFgotqMSMLdMyFHT6pFTwBqvtA5Z8mdBCjcCVYVTPasMhZwH5J78gay99wgETJu4aX7"
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
