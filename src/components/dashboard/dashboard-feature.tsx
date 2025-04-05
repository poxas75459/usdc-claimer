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
    "3e7n4n5Bv9juiEBzJPBUsWPTLiF8bUQAXgMiSr6jUJA25qF9oTkfn8zH3gM8WaVzik6QtcFpphDVUhE7MWsfvuva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zEP8wYvYFzSdVvnsjfUn8pvg7SxCvMyQBXVj24mEF6AYH8bkzHbqyAmecLdJzrPpcjPk3K8BBQJCwRxXb675afa",
  "key1": "yptHkhBQY8eQoPnGLJek8EpeSTMskbp5m9z8qEY8qWxv6L5b4TrhZPiAGQExoWgv82iT4BGkNwhNL4hPYVE6R5m",
  "key2": "5kVg3xS2HE43E11hHas6VPnpsijMKQ1X1igQCXCYD1k7JLpsNxVzXHvWHb3kvoLNiu7PLhW3oUxDpqj7D1oie5P2",
  "key3": "2FwCkEtV4AhzztDxgJPCfFKoAnrmK8oFg9NibB1uA38nqDco5VqxqBYdNZxFbBK5jyQjKpn1dtKPVJHedzmRXfst",
  "key4": "5hLLaoVo5X7xuj3V3ZJSVGL89uKV7HYVmA5kKqTnVRevR4HJPZfQCVjU3hKcfcFqP1R8zaThZgs9qwQKXc4RwNaV",
  "key5": "DYwwaapfBvFbU9bQRqMR1hdTv2HWonevHeAtF3eewjwyhF8vwjWhBNbkikmcPhdNVWoqq6WtpHf2UCfh3W8TJ7e",
  "key6": "5fBJ6nY7oe3QCRrvrUz8Rz9imfnbQZuvceAE88EQr2xZ2ax9dSAPmi74pfNqwdVYzAYT9ybvMugjeXtiaCwsspJL",
  "key7": "2xFkrV8skAyJ7Bc2M1HWnrLHqvEJJiSAUza8t4LT8woqNoZpTEnjKXmKjkF96BXKUM4i9a7wZV11v1Nj6yySFcZa",
  "key8": "wMfduGQi7RBZjZ8GAAWqsC8b5qb2yN2knaeYeseWb6rXZttE6e6cKHDqS4LkVatACUh3DbPm6MnzMN2J9NRb5se",
  "key9": "5ue6g4GW8MoPdMvi6cjjYSHP3rjtCvRXBx7kynrjQSi6QJeXjgn1perFR6ZFvdS35Pc2pZYSKHYcNQUNS9RHuFyy",
  "key10": "2iSyMKCv1JMFVjzSJUq75g5DxUM4SA9YMbA9RMhj6CUYacCHGDgUc5r5aUUoTnsY5FcK91H8nfUDb5SX6UkeGnuD",
  "key11": "5aHPZtmE7c4pWB6o6HRJumKwNjK8DFyKR7ExKXVMyZE7FWmF7SazSfGiCacDUAnMY4tDHSo8q7x8ZH1EB1BqrrEC",
  "key12": "qECXWfmie1JaxKdhQjJYpUV4woPSssV47Wcez4imyd1XZXxxfBkgFL97GPcNBpNNS5Sxv2KqAZUdFve3wduvzSJ",
  "key13": "2wMbLLzH1gjfq9JhysnjWq2SVzcfSBSipWLCMkyiYzQ9RbD3MkSp5yf4YoSp2GMN7cpyREcU3Hevk3ied5jzH7Mw",
  "key14": "4kzv1uHEuagUyLXuXVDP7NscpS6CkE6QZnv7dkjvQZdU6RvgQhyMsRAcPhMd83zJFaZjA9zf4KxkqmCFcWDyXvi9",
  "key15": "4NWvanEYHdoFYCaj8SC1jE1sFUqyZ92RA98UfsZnnE7V2EUxFxaRLHWCrnfnxbyH6FpC51aijThmyQZgHxNLTPzU",
  "key16": "61231KsizfEjKeWawBXAtHjVyuLYYvnRm8Rf6tjBapJFQNjQt9qwLHGsxbrwFpYuooBN4qAEKPU4zakC2EqcsJnb",
  "key17": "5zRXMUUo7sYhX7PcPexhYcuM92zovy6gykdu5bm3GLz8jFbgV9rq1KWjabj44fcUCihocSB4opqZ6MSJjMeqZCbg",
  "key18": "t9szxK3Kwkkh5cZsBc8TKQwssZXEK5jMT4iX4urq4r5aFmkUD18AbRL2gyrQujmx4hZ2EJyPWkZ6xUKPKkppY8e",
  "key19": "3xYMQAMYiu2VytxJXnEWxMjycJHPoB4QQx8mvdGc3iMcD8jTdd3cbRnL4RM4EGai8djLTMckdus9xU7t5gmSWnfn",
  "key20": "zHwm1M66r28xdi9qis9UuiVqjeZ4HFJBMhakfz3vPDh5YuFLvoQnW6vgwbhmm1BSP2GfiYSEUWCDtvhDjXmdUeL",
  "key21": "UELRAcTc2rMACULkvDG2gkxBV4JU9FEuMQSCwchvCsqi9x131Vv7QVSf1WVarFfZQgqHm3v2ubXkBoFXi4Kv7JZ",
  "key22": "4pZEJGtAEot3DjWD9oNqh3pJDPUs5knkMbWJYRDWRVGF8qAHrSxYWskbdJyxYU3tvGicNfucPjiYo4GV4BTYYAuY",
  "key23": "5ihbCyLrUeQUfa1Wx4twQ79ZC5ZmYx6zdmJAykj6i4RRy8SfG4GvfUvUE82FkdiThESSysD379xfP4rKMiui9uHx",
  "key24": "58boV2ytbM1wyd4DFSr2pGAMzt7ahkY6iut4wc6iPY97KcZ51Mh4mq9zNgBnpGoygzVwjPKb7JvY4YdpeN9zoGeH",
  "key25": "2AktaXY4ab7c6SgXkxBdGEDYfw3ZmxN9p6g7HNcxsRm3aahWSZ68M8WYz5cNtKj3pkjCYMPfS9HF9eDKzQxBWLDa",
  "key26": "4H27wtspb3eVmHyjk5wVUJuN5b17f6QHDcjjGxdz9xpUH6wi4MzshbwaPyEAoUpCRyz5hQnD3UhG9qdf6YdyL6qN",
  "key27": "4iHxxh4GSC3hJ4Xmex9JeWKAcnQyCnFvJUk7B5QJVUaRn1W4Y62SRgek1SXSSKFAuuyyUHv8VT2Govdx7GcsHetG"
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
