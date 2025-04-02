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
    "2AR2xm6K8JrcBjC6CSEPxaC2mxB4rFfPAKos61tkdjx5hfwpSkzRmVzEAAckfEkfKz2PMB8NfYLykDvRvc58ybLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DatWeq3MAps1E86Mz13bSDimBZv5QoJZjeefyPmYk8tcU5inbsqFPP6ckYva7ynQD5ijpoYVbY5RUEiDiQuvwC1",
  "key1": "4WxcqUfv7fUm5ZxzUdtB2Njo81ftrepuHfbxjXZQEwQ8HXo7nsnJdPQQrPo8qxmfqVdMpzqLtyhUJyCqLzwZHeU6",
  "key2": "2PvL29aSZvQDta2xZUrZFxS5QXcDegieaYZYDWZs9GkfmhDnaPRztK4AkWcoLzGJb7fvUuTY8tHBfmG8ujmUwEWq",
  "key3": "xKRKZuPrW2fqC1MKXWDd16wXecuFCYiz7uchB3EZrgdjRYQAUfBZhdE2bE4FZQuiSopyybmwwWTgBtWGXsmBfLx",
  "key4": "4cYTwRFUhuDAs7V4mCsy9KNTq5JUQRxqokk5cqVBefogCVCPZ27ipFQvgmL1dQN5zbWfomTvdsVWeiJPVG9B4s78",
  "key5": "6C3Fe2v2ggS3orLbdgzFYTLZAAAkGYogMuyhrFJ7vDbKxVHoXUj9jzaFUAGnxb27gx7zLziFPK9xVfyerGoBJWS",
  "key6": "ReSyHKNFKoGav6QsExhihoJty4DhUmKS356TNaKShCJJeno7TqogCd2SUSBWWcau4pQFjKFcd2P1RvDqve9sqmr",
  "key7": "4gZyQbmGk2u94XngH6Yz5ewwgShHgp7qLkKSwuQMX9JsRHTV1uHmjKjav4ERW6rsHJ7jPfitjcMo18Z2bqQApy9f",
  "key8": "5qHk2owTNDsTzJxJA1KmW2HhBYBtZVowp5WxWaMzu97myfEsb4CrtZDkMwHhZUWy6nDz537fmwosq7n6XzMts7Wh",
  "key9": "2aBf3h79bnHHVaK8NkQyvkCZbZfMfLyfmMgJHJdamNm5hTb7fxRPBUwa2cPYkdNB3wQ9ZDVrx2YKtGLd38h2CX6C",
  "key10": "2W9CANp8AKtDtLAfJuExcECvtnFSNn62po87ormaZMBeb8yXDFptjH1jF5Pi3gw5jF1x7LbKC5GimP2seEVrr63T",
  "key11": "3UGUV2WtUmmSC7nCXAjagn6VL5HVe4W72J7wbsVrJtQj1Az2YZkHaqHWMnmqGBn6EegfYaqLzPsZTs1T58P7nnZm",
  "key12": "3zTQhzvUyEsKhVWx7sbFhpshDVSz3DrvzR35npkv2SJ4tGaxNrPa5FqttaYMoLKD3fyw6m7DbrmmxFQp5NwrKmmT",
  "key13": "3eEvYdCjPjr7c4eA6S7oxe3G9grRkxsShjye75eXxBc4r7ub6EJWEC4U82m7RZs7FdhXkhKqai6d4kcTPY8K6HrG",
  "key14": "4VJXE9VZnWh1nLkmyJsRRCa9zFXCjykxij2wn36FSacQKEBS9YH6gS5ADRh9xHgPndVn27mE46jPSLF9anLdZsDt",
  "key15": "3kFACj9QcX2PXSHzKB8J6YpHyreBPRiVxGeayfKAWM6aaCxpmek1xkexJhpwtoRN8KJw7nw2xK18wpjCr5GWcERD",
  "key16": "3bTx4NtSov8qe4MTRguVpccBY2AfpWK3r6YcCYsuKK1LjzVpM1Af9sDRRkZ2xJUnHmoWKEDBUXZk3mNpLuBKT8s3",
  "key17": "3fefkGLY3iZGjBkb5cMac1Vamo2btPGJjae7SU8VhD2oSep4vFQhMNifLak9Nv42UudTmNQbsyVBeiWdcMoNCcjd",
  "key18": "56VbDPNSkacV7ns13EPaK6HEFC6uoQzAa9uftaUKnU8toDo8Y8Eh3CQFiCa6weVYQUgqmJ6VKmq2ZLy8Um8srPmW",
  "key19": "4GY3RaQqo5F7qh57kkWWvfmSRS2p2Sqi3MvPGHsDwE2vmDQgwuAyoH8AJQoqBkrKyf3qKp7tqLeNZKVGd1BVqUyf",
  "key20": "3DRxt1q2TBQ539uvuzabuqMNFwWSLFMbty6VMVEQ8dikQ3fAuRdmc6wdZAfL8CfQm4wRKrBeYuzcX7MoJfLCovpk",
  "key21": "4G65DwzWGAAAuBufEJKLWCosLQEwz4AXEyXYkoWukRhrQoRzGCHxhmim5xrbvsjXjxx1dsCJfHSDZVYSoYnzNrE4",
  "key22": "66dvJcpwdXDBipcMZsCxkoCAqdFZjGkjMZtMB2NG2YiYpYa4kdKnKujTUJdGQrCkgujtDbKKn4YacdiV1TgYVmPy",
  "key23": "ZbT4myJ7eKCUAbRpoxeYaxLDQPKWWvudP1qFukwJrjKeTzK5fsVvH8nKAuQ6f6J3tgPbAHt8hEe7XhVEeMBCSFR",
  "key24": "i6EZDFZJQk586o6AMiyKhmoT4Peiy1teDaArmUj9z68uu8u3g4XD3X7GHVt4a3FCFL6qYVrTQAzEddyaN7vp6PN",
  "key25": "2YBKWt7JZufVKRTXagVK9pTyzRmvb4ojrPZZdfFzdEbvTR3kNRuQUnC7oPJB6zF6Pu2ysTedzBdg64nuLHfdTDg1",
  "key26": "27rPanEYPiRSH4fwbfzg3EPohZp5vu4mWgYpTUxG7gSyitWpBa5mvRidkfXfRepA2V2taJ5dVuHWGCqGdzsnABoD",
  "key27": "4hToxDJeJC1664fWZRUEEV2wcs5QTbcutk31GMyFXA2hMXSD81tTGi7cAr4uk8TT9H9NP3z56VJAZiTuHvWRV27m",
  "key28": "4T8NSYj8EVqPVHfE6UKWxP9vTknz6JBwcq7dvZJB63EbDZ8ts8UNUW7pev6fB1PcK73E4VYQ5SFXvB8DttiLzHzh",
  "key29": "3HpM66wQAQQ8WnuN5hZDoXbdGvLySrpfQT8sJSoSuvKa95iqjPbTUG41t1FMZ5z3o4uedLqLV9we1jvYRHTsD4ka"
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
