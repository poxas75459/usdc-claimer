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
    "2tukco3eNtWVCE4ZxcLTEfMQXkXseYPobua8vgcZAh9fXqQg2zHW7qA1f4dwx3wjnGrQf3StwCzBkSUJigdNXH8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1iHgsrtwXUyXVkYfFSijCQVLmEYHYMvPgX3EPL2bJsTS5JA6QdzUqqgoJsFNTco31ddxDGBCvBxC5cUgVNj6r8S",
  "key1": "42kSVhDqEfvAuQBk6FhHQms4TfaU7vAiQDsHyHo77yPByGZAXcsG4gNyKbANyX1WEedKHZ24QeiWyFAvHC6Q8uyy",
  "key2": "2oKv6oMbLksmVjFZmbpP8E8jsCMEJvHVTVwPUBx7etzLzhDy22BMtz2hPipLNNwEuJYBrNGk8YLy5BfzfTAVhfN1",
  "key3": "qMEyVXyzv77Mece2yYnLGDhg7SqxyZhZJrJnZjp67dqiWu1pi9vF7EADpBD2M4XEVMVVbxkEzA3f4QFXyJw9aEi",
  "key4": "civ7cvHhJaiD2GroR3Ya7f3vnmb39LvMoXum4VdXipFvnbCgcRAyjxsXBUGdgVzrC9C9NDvT8beniz7esLjSGy6",
  "key5": "2DQhhgQeDsPNBvveqF78GBNfTCKaGt4sEikapgaSKZA5FLPiXKoEhpLjsVE3qzwJzsLxbNuTsvEhY2YBbL5teC7G",
  "key6": "5TH7162yDUZxTaesMfPwSBjbkYxK9i9X9GzzffQ5qvcmCdzujuSa7PwxYZPuyMQ8RxdCViUskmqakjSjdC4hyYZY",
  "key7": "4ZwbmeZD5zrUMakofnXSPJqtDCWJcbydLGPfjbMi2FmSgm2GUgczTUdGbsQKMR8WfrZQWSZV2fSn4iaqytJmudap",
  "key8": "5oVEVcAMt4oueKCCqkTsrYFmspRfQxXwBShLGWyucpMTqfvrdZgt6tRB4ACeRi7Gy6b7xorBuiursj2uNeTS8ruS",
  "key9": "2RQraf1QDv4bc7V1Ne4g9w5Qa7GFfmsVGo8f4FpwAfp3NPoXqz878u4RC2XdGjsqqDBxaZv5sq5315ECVXvmocZy",
  "key10": "2nFBtArWNtFLqAirpjmNCdJgwB5B9whMdKyWdYQDoPB4hrryMrizpKymmPKN7quF3H3ooqbdYzhBtftYGhBz7yuY",
  "key11": "AskNH6d9Xa9jvYmJo4QXRHZ7pwhYinv1Eh51GnNcggAtotZRscH2qHp3nHZnxHmKR2HoKTyJzPhfHHND8AVs2Ry",
  "key12": "3mws3uPTNBRCTRUkQuLFuuLdgUKedMXKLY1vLLYekKsppApRTsBnvUVDCkh963P7ESkYtRB989oGErQQ5GsKTRM9",
  "key13": "4nSMXLkimB2m6rKj46m9wzdyg8fPkMM7PBxCPWkF9jxygNGomTJ5dMqqYqKrEYBBY6JGrHPSAU6zgD1pp7YxN9J2",
  "key14": "5rgrjfthiJ4A2HF7TfaxTcBQejNpRjqJ6EC4wznMdkfgcyKbDnxhLstfTte9kzGdm7n2R8M1iKrTGRPP4g5GDpfw",
  "key15": "4wtLdyoyU5aSuhjhSVd5DJ4ksEvCGh3NSPHDv4uwa3yC2dtYA55M8YgRAnEJfX6xA9HmWfHw5hkAPsVBvKy4DZBN",
  "key16": "5GeKjE1runUcVJU9xtN5QXdhc1ha4cZAtQiEDgdAoBHXMYjLZ872vqpAjXMAY4eA5G13QBXFrm8TgErEtVF67kau",
  "key17": "4X5zbqafwjDfQ4cAKAgXibJqVyZ2FRUZ1z1LYquEQjnErqZZ3RvqnxRm8ZUEmswJr3WV3wSpXntUu2L8iuq1EzeS",
  "key18": "4vVzqV2SUU64v43ttpe1tVAHrbKmgpaGeBSuFvneMFnqfEsKtjP69KB1QFwYFiEnXXgrPPzfJyUqVZ4R5x7DAzJP",
  "key19": "3YH8FJmTZy9ajjV9neQw7vNkbn65bCwbTb2yxT5R9RNnBAjtR1pYxRBVhe199Ly9AKSd53QspcEjWDVQiQj9rQez",
  "key20": "QfCy3YVYX4fJ9qRx6C45ix218ik2jRNQZMcCdV6qRSAP5SoaLx6YY6onuZqfY7nJx1vSodRXdrV2PywMh8vuDdr",
  "key21": "4Qj5aHxNY3tGWzLj9183Gq1rXHx4JJCfzicRSxw7puKKgT3UUcyTiCAGZSh5CnhUt46u5hFJXWvyLeC32sKvDXrv",
  "key22": "fwvdgbqmXyi1ufdLFR9ueHrJirjYnjRKFYpgGUwRewFAP1U8qgUz3wntuZH4YpsBqQugT6qus554tK9VqGXL8tG",
  "key23": "rWpYSf43W95KrtwYoiP382jzpydhqTX6RzCQroCvW6YvHLA3fjTWisoxQqfbk3TDavjdMbmPv96C54whGuChdZH",
  "key24": "5C1XtZeLsr84A6iboi564GHs9XPTFEp4F9qE2QQGtHWLaeks4DNcKN7sw9Wc1yUgZv6in4HJXNC1axRGR1QpWt1W",
  "key25": "4Eg7Mh8AQpn99NEh3xqkQpwSt6wRT4o6zx5yiEny2cCHEeGMbELXWB4aw5WwnjSh4mp1qU5ifFdASrnYqDuXZozL",
  "key26": "2z6NwvKiJMfEj4i71UghAZ71X6fbQbDnXTEkr1cJWKHyoq1zYpLK8f4H9et6dfRxY9fVRS8LeTshVg48xoYAhABf",
  "key27": "5Fsubf4bzijivHyWVgT9hvNJJnXmFbueDnLVTQGiPdgdgQVBXGvzaxFH2CKZGwqJY2rhTUBXQEUivrMCCEVyJ2Te",
  "key28": "2hnjP6gESB6rFPGqPFwkdKytEZ5zvFozH35CLpNsErkK4Py8FniEw4fZACEUKpFzeWKBk2hgVbY7iwa8oHM94zef",
  "key29": "3wjHLuirNcZpPT9MTdQVJYSc5WNRi79cADHbsCnu1MXKShCzA9XASL8KHo7QVP7E1Q6szJ947Et7RKKuv9ng2qo",
  "key30": "5QwnLja7uyEvTabcboKoSbw1jXfErLqVQZC156ztE72D3AVXgb7rkjgVyLpCV5LXzz6Wy3fmsFpCT7pvVcTePEkn"
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
