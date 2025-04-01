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
    "26cKdcK7eTndg5JtL5C4nuj3g3QpXrh7cDKuWqqK11jqTWba88GtQU7rPV3owXomU1WoZGnJNhqMe6YUKZrjtyz4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tqTyy2zAPEwJ12Z8xNTPNBNopYXnjd1ufUNHkiuFsrcK9ioAPPRuK1ZjBoFmXT4aJVFhDD1saDo2pxbGYfvTDSy",
  "key1": "3pvVB9H6xLDbHcQFAAVo3krrkcC6aZfqyZ3GKZhXpUSdn6yNm9b6eiTqwwf3S83nWcafiafceN4eM6co3Xg3igae",
  "key2": "2431eh4kz13o9agXyfHBDh6ydthFJbKXph8GnEct75zdu4EoXM3T4LjtDX4Li2LE9ai8RwVQj53n7uM49m3UFyoX",
  "key3": "46afxCZMVEwmSKkTtdTmwicn2t7zLEoUH194KPPFq7c3PK6ceabVEqc5rkRnbw3614oQaqWXVzn4yuyDZ2Mcunb1",
  "key4": "2jc1pffEqth223wgDw1VBCctdf5mtmXusNWdpWtDVDn7tLqFJsccLG2njpvDi2pJZTuBukPNbaki46dDJSepryRi",
  "key5": "CQWw8tuXhtU2UUk697638Py7p3rQPhJA8sCkNoHbbBDAVHMHA5GhJMoAaFdDQAiXsYLfrz6FytAzruFyZNwU9k8",
  "key6": "5Fz5MJTUL79nuQcDG9izucwEvxvwzi4oiPsvrVV4Kc8basCFtQogoNE6P9wHgxkQrr2CEakZ18eyLhn1fieaJNYj",
  "key7": "FtUMvVfDtew9nnkJcBNPAsExpkSUhHzdRtzavrLEQ5pFFMvC3u9qdrfCUgwqTzAw3XXMsHc4f8YMUmwqGgHtDrd",
  "key8": "4teDBU5aiyTrDM19ohiBsCzpSoXwppN8fm8JJ9jHwX98kZPZaZFzCKSrjGKa6tQjj6a6ybWfugtVBMZnZVpyn3r5",
  "key9": "4nSsE1TajjJQZKELz5MWKGccusN1UHqsR6soATkmFDy2M8ctpL7M4YQqK1qNa9u8qzgftQaNwAuFVpZp3UPxYoPx",
  "key10": "9mbTrYF6V8gjKuiUoha7wH4Q4NddMiWzXFLuCy7VEEchaD2YZ8GMcZzX9aBFiTxyx1Xa3t5grYNpcKNxTk324YZ",
  "key11": "23BwTQFKGg81qCAa95eiNDUaLQm2vDZwew2dMhEYpVuNeyG92UUBHJrWzac6cQSYBFLXuGjJm9sW3BpUMatYHSso",
  "key12": "5tdg8PDskYu1j22eYEXkiaSqinzZVdnBdnZGAoBnrZ1wfcWWoC181x9uCtDAKnfiY5Ayd9R7M6SqvDCeUGD6kVGc",
  "key13": "5oqwwo9uFa4fnPM7LGwxHagRFApD3KYw6t4WG3HnCbPR9XFuvra39S8prKfFsSU842rj7JLyC7GAebZ59NJQA2th",
  "key14": "5TUFBy2y4Dzeg6zV8ZJrnC2qLqS1hLvpXjpkXgWhj1NGP2GgCqfgNf4j5LWJE8ii1WdWGsDa42iQfDZegauHj1rx",
  "key15": "2kDWr3zYwKvsWHpfMFge9PRrwfxfrJRxPYmpXH6R6rKAWMightpTkXUe8BNBxnV7hK3wrQEApeWyhnfXik9EYX1",
  "key16": "2Y8oab6wtpMWxQfdrdaVJof9ejznMqYmKbEKmc3FKhsbnCiBb2wrmMBxE1gfcW3U8xfe9mEDnMsm9ZhC2pbi8bg6",
  "key17": "jtcmNWiUjf8vqFZ52KZ4rZYV7Re1ksrDoae74LhDj2K61ANu7wnCbRxBmnjeKv4g33v8EaofvTohT4PP1koLvFD",
  "key18": "2GavSGzVXEbPWxN3wTmqi5TXPoTowKRtbtpuESpJUgr8PrDZn85hSAYKZtMXshNp1rSFagU9NyKczXA3sfWwfKBm",
  "key19": "3DopxAuhDt2EavMEsurHJb4kUF8d58z5oSTrQddYPrbASk5t6nwWWoxjDqqyuqKXeS3yjxZF21q8mmF2j3h3R6n7",
  "key20": "2ah4DzBjUjcVhaj52KFgCYoCcx8eBg5jJUXkPCXFPB4W1DFRRqzCTyBENcbtBm3tXgYevWxnVJ8CwTuGqczwWSxB",
  "key21": "5GWk3nPuDyYosQN8tLp6AZv3m23RM6SvxDMSWjJe6wvUa1gi9RSvQqy7Kpx8HFqT13VYA9KD1ZtpfGbrRYhDk3oQ",
  "key22": "56hwhknQFh9dGnsmtFSsugQKptpf6k1JnDN26tGNtVjcCk3yYqZ3Hr7dm1K5cctkfYr6aLGakTAgLguX6aK8eWVD",
  "key23": "JD1CdHzSADUwjAP74aE6VKmpWtQvNtugYutaVKVTUvGHRPaFcJ4jfzg5ZP4Toe64FrQwyeFHZLtydvcGSHKHKRL",
  "key24": "27FgVViTJajAd1Fd1tPdYXmbe8gcbKeagW1r9F3cf3QXTkbASrZag5UPXac19igshXfVzRFxzkvehFqJ1ZL4pFU9",
  "key25": "4otKq7EtxRpncf3Uz9SN81vnmi2TFvtCarKZkMnFn6z5963wybRy1yT82ohAR7NfVYVEK1FJTFpjom6rHZipayn3",
  "key26": "26o5g7SNccj4WQNNKAJw77owD4aJAa21ZxJnratHBL7hRgGERnYRDttv4xMXhD8GCreYrSeLWUxR7CaBhBpnnc9m",
  "key27": "rGQacdioRNWbo3tGUWtrgwy1h8eNQ1AeVP1uo9P78a6MWsoMqCeXAAhXQwXwGDPgdhft4B4nhUFEtjFHNfZiyZJ",
  "key28": "6gT9xNQEWH5XkVNqQ8w1vXyK49NAg3MxCBjMpoBSXEwWra7ma9f1VuMVS8qzrxnhvEH5zq9n4fLbztLY8suLAPR"
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
