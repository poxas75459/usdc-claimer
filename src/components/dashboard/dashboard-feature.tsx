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
    "2CGENNUpFZ2Z1kpUVA914yyYLmQ2gMAru6FotFQBZSTw8yvVhB2KRytWhZFZPMbrfdNJAuChAv7vyPUcSoFUCYf9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4744QgY2jZ3RKMfRTy6C1mkwLBNxAp8q2PotYioTzKjBHJ6Lo7MsYp7W71eLHZRttGtZiQFZ9hQsBtffAcKf3ryK",
  "key1": "4WAQx5NRSLhHzfmW231VqHq39EtwYYAPywcYrsQ5fkR3VvguxVur8V3oBxJkyJLd1Y1wXKX7zcwSEBpUyVgdg3TD",
  "key2": "ck73qDGta5QkGDAHimRjb2Ur4Pg6hLoYFy6s3QeLxmVBKP2Sc49cWYZfq1xaVKFXU1HfR4DwHMiVfQtzASwKbZ6",
  "key3": "2WLsr3mAjFPudiERJwyuw7Ctqe5HdrrgcPHrWQReEAyTYMdbF1ise1QQsneNAMLVcW2poxGLFJSJNrEANVzdHSs2",
  "key4": "4RqV8anfVYz1Da8Nc1SagJG5gcnufTHu7jdaKZZLpNHFtb1ijFuG3Ch8cSd6ocMnbJ9MW8nVGED7hNTtpjFyzX2v",
  "key5": "4evQpayJgAKM8vCMLFDJRoZ93yqUfTXj9MtPBzbRGgBgwBxMb4PzFYSctQW8dtYUH3FWLwRh9Nn25gqoMAqwhr6X",
  "key6": "4XfFTFQviU9r7x1X5hyAjMxcguViwq2Si1QvNivdn9ATik9wKqpYqnuH7z2ToyaDEEKnnmKjL9GMHeZq4mPw8Uqz",
  "key7": "44C7yvTCCRe5gEjibFKD9w21pzLvLqLXMoCDMQXwx7mh5z9VqQsuBuZgng7VUaN8PPJUuSGbJo4s3kgAH7V3nXDZ",
  "key8": "2ZxLbFKFr8yZuVUxNfJK3WmVgiAa3dc1noDxecYu7RrdDPH5sAom5AqEpW5Js78qMnUMGuw2x76qxkTvC1XNCJfA",
  "key9": "27JgmAse7Vf4WYgNkFjHvdbAyaXxonLQn81bZRU1qzG595BYosqaFUYk7cSoFpH7DGp1w81VtczsbuzS9KhwTHSA",
  "key10": "4ZadpaiKA6qkeCAtHrdZ8ZuTuEYHgz5kDA7w3JqfSkzcAh6Lx2HjidFXLWMREfjb7thWXL9XaNzjFnSV3r9ysCWe",
  "key11": "4Hk1ZvdSTQtZxmnYzTE5txqnhUnSFabQkUvxxXpww7B7PQFfLVZYqoLQG7z6GLTfLuHNxskPhjeBkEcJzPjTEqAq",
  "key12": "4bkk8ey5Vudo5ybWMKS14sn3BCvzJBC5V5oyBgPW86wzHtKxKi6D454Botq8zfrGRJFBCdPghc8zeAHtYCz1Gb8C",
  "key13": "3ewZa4uy57AnQx8254Ht6ywmVg72ayMshuqyBTeEKjeXcXR7RWaxr9htojLnVtmvgNtWvrK4U1Z8VVLwkue9MVww",
  "key14": "2qsfNCpu81G6q3BxWFAmSbW9o1cEZeC6cV8xPCQw2xRaJB8Tu5UiHATGQUAJh4i4B1mAVGT7Sug3sT8dtSq2s9UB",
  "key15": "cVreiFTa7n5hy3u4CG5vqts31ABUJxr4D1cAu6BK9E4krMjqavfp1Q33BfoAbG6Y6iPBvSKNrctNT6rbYSYEokA",
  "key16": "5kMAChAQEjDXiBFx79yCraUJTrBCUgirnzWbjcbw5ZXi4vb8DEZ7W9QUVu7dEHgqVJngmDdTpemECjSKQWs537Wb",
  "key17": "5rg56Xin4GBPfTsHidrN8Dbtj8NNFaobz4z4r5Jh8RddZEVypyagSpyUtd8wLY8YfuUFtnCEuAHHZ61Zj9fZ4fBu",
  "key18": "2ZkRY84cHaAxKQUoXKntimmSbCLbrKY3tHnwzeHJBNMVB5FLUV7dKqBEozd2oyYCmt8gx8Vov5GCJjbymkVuBhdN",
  "key19": "5psurSwe3mXmfbGmkZfV11PvAVMXCSatCYF2rtpMCGRcBTJRxrj9VkuFjqLLkFE9j77p5Zy4drmF3U27qP2Gs8RX",
  "key20": "3oLcYnFRs7wyz4q4fwwjqqJBYiHUw3iR6WSBvdX35o8168cJBALtPArFSpgZy9b9nN4wHozxwqvGsptU7K4WvgZv",
  "key21": "4sUt66wjxCjbEECLhmQSYkjZBUoGKyMhzt9Nzk6QWp5SC4SToCnjo1V8Py5hXZModG8zrEfrwxcEduC8as7g1WNX",
  "key22": "5HYozenx2TnyfSRbn3BVubPSGwZQVuxcG8Ztqo9Q39DbgTXRWDzeTFjDJ8EiJmFeAxrq2m9UAAURZ4Ku1HM5qUqd",
  "key23": "55XvWVcubpfmdeJ6jrakQjW6n1UvNFH2wpjA5DnVwDhfi1fSBJszdrkJtJNUfVwhz4u9fiF95vaEsVy71WsJhgXY",
  "key24": "2T5jzieVdXbEMNGpbKuhc8XVoZPsiZhQVSn359oUjx5gWkxbbcnKdMHvKfXpaSX1zKZ8ctLF2Sdxugq888szqdGt",
  "key25": "5W5z2bAoJWhFGPq9XUU8R9iPUmabc1hgxJ7QTekBYMiTcbCQDpafZWRQ1s3LXNnuhMw1F5irfmWwPXttEUVJ4Wqk",
  "key26": "55jwFQikLmuB5DU9fbEyCjcNUmTGMmRdvyRM7sxxLWX3CWaoWobSUkVEAXujofdBb7VgnTC651uwMjvdDq42cEbz",
  "key27": "5Ewo9peqcgQHiexwmfLGTZxqvJhkyhtqUi9EaAfpE9M8XbuuJLBJrLHSkq3vHjvaTbRXKRK2aYSuPGV5irQvvGuP",
  "key28": "3338tRXujN7qojGQM5S1vHv5E7N3UEt7qCuskncGPbpWiLBadQnpUPCsXuJxezM3vyyGoRLaYFv5nzk84jC2NnW9",
  "key29": "5GorYhw366hULEfp8BWw3GQ2Vq7ASHoMAbJ3tWVB4sD1HTQtx6KapuKdrGVfaa6zrbLexqQ6psckFm6qA13rkrvv",
  "key30": "5MLe4c5T1egkXYjxKteYS3YGubE4NeMzZsh61hjSGM5upXmtQh8jwLtJkh81JXtAdMtdT2QDPpTc1Jm7USVBKrP8",
  "key31": "N8ZFXHRcea5iS9uDrx9DaNGSL341LyapKF8HKFuKaeXUpY7QdhihdKfJFhwMSFExhNvcLGtHp4zxVc2i1BuQ99T",
  "key32": "5FA7aCJUhHG6RskPZeeid7TzMSASSgoLsJfnvPXg3K3CRYE4GMAg9UU3xVJi8TxfNYGNq8d22BQBk9LGtiEd4Jve",
  "key33": "3cDDkm1v657GDkWYSDyQiSysrPShbjTDaE3gn8QtzaM1nEd6cMnoVvfE5fxAKFEKXxyVizn6ZuT1geasQyTo2sbs",
  "key34": "uoSMeXNcyXqAAUdUFZt7gLERMH81mESQkPbw2SXqW2r8LYWkz1zUwWEXUwiLhEcZSPCav13JPx81rKs2PB2zJE4",
  "key35": "3jxzau6414AHzumZpGpT8LTefWTvJDwjNKZYRUJxKM8ZJSAfnLvMFc2hHw9dsdq1fTHmNqkacwNM2ag72BjnHtPQ",
  "key36": "HwzQFi7RSZ2Y9abWTvEuFovZP3E5n4YXhR88Q1LDXVWQAaWhoVtMp3HUGLMJvdxx7dR3S4ut1fKj1sKDJnoHFvm"
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
