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
    "2NC18tpyWaEu2MKhAQKgjhbjMYoALfMYuYJDiMU62B7cMS7zZZmQWonhJZbTLK472LnqZRi3vCvZwhp9S2G2S8XK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4551QJYPCbtsGfB5eYKR6YFzG7agLyiaNP4VcZaXNraQdiYQd2B7FR2rJZCgAiymfBJhZonUNXvG562vsXP5DS4N",
  "key1": "WNceukwTJTEP7hzfDuYk1e3LNgd8nTYJQkfrq4inZq98skJwnfpQSmppgceZaUde67GNzKnyBKzHcQXkJAdaAsx",
  "key2": "5yFxxEvm6MRPgeAfMUK1BipGndoFnnwJZhWusxCKZtKn6YtYnYGtjuNAEFSTvTNnZ32snoBUgQaBV2pdDJSM6ry4",
  "key3": "5rNsWqTDmv9MPUFV7F4tgieaCLCCtKoejebxSFD22uyvcmMzZFKZk8EZCeRkdJdSddzrcB6xDmnaghaeSUvVkv8j",
  "key4": "3hbFxfQ2h14jPB4R4XGfEJFuSTotvW6JS9gUKCE2Keed6j3PYyQukLiu8tTuAPTygn4kyFzEwQ6Kn6Z4JJxBkc27",
  "key5": "3jVM9Jew89p5m59U6TDwahnhUkrhFBbh7Gg4Ld55XYr4pxaqNoU377X5wm6uqSVfPTFJy8Lo5wypADCRfZe68MF5",
  "key6": "4rFNumEawi98h8B8EM8chE47d7qF5dxg7Q6DwnVzEEFgTgd9QvhRXqmm3LYUsUabRGw8V8JC3ddayy1LPNefAi49",
  "key7": "2vDtqNSvwTeekbx6gqTfknEdb7in1yxMZo17eHoT9BpndAzvygEjAh9HzRmcmFAdzQ8aCxzfuUdwoLxVG7JPJJQe",
  "key8": "EhzzHeWFx9UqcJwwRcnX35BnTrkhNZzmR81G3vw85cmi9LZsxEjNGHmHAVqswnbSr4njkSFsqg9MUgpkdb3opba",
  "key9": "4RB85xd5gEShQ5wpbW63pi1HrgP78ARjvvxbBz61xaJWg31coxUqCrh5t2CkS5yRKZjykdYXWomZmisHptYpQ2i1",
  "key10": "2UhfFaW5E1RropKRHfASpYQHubBkCGMwHJCuGqRqHCya4zS53RPdLi5j3hTjFN4jNkLVs4RGWvLAGCUiniQHA2z7",
  "key11": "2Uy2ztGHC1j4BWieVx8TYWZVENLg1UehrkZXvU6NfNn3fGwxHy2wStvgXCdw96PZjD8kCfDq5L5P88RpZmyetdP1",
  "key12": "5azVGxEHahgSJH8wqdAAwjMLigjMFK35hG6se9qqeoFtLh8TPw3hnTfJ7ZWtCV8ijrCJ8nA1pPPrmjVB62Dx1xJQ",
  "key13": "2afGjqVLSb7JQ3wenjeefDuGduNSmugZF9Mr8wLbze7iHyAiC8Rix7fEHasApAG7CbkZ2PpZ5J6zd7Vj4WZediY1",
  "key14": "4Hxj2KqMq8bR22TDfWMaKXbVYzQuzXnr3ENDAjWyBYYYLH9N5tHkbrzpCm2NbjEAmTC69AL6EoTetuRZ4wHpfv5x",
  "key15": "4MPV1U6eFHB2ACzDaLFirgyQs2njURVnrdRTKPdiJwrYzeHJeuKswCmS1M3buSZhB3GvcxJHwA9KGah2t7ZzXEJ4",
  "key16": "4LJ3NPhaC5REUSkzJ2TyzRZiiqnDkUVwohV65eAKGVQXfV7bzRoGuZCM1ULWjedB8RjGhnzJTjHnBQF1QhXfEm2A",
  "key17": "4pkBkpzSDsLruWjUZxtKxhqM4RsXncTxLA7knNt4wFMarVKK51cnJev73uukhXzQSxwcDtWfApHxJZ6eoCkK8bCG",
  "key18": "1BKjCSQTfwpXqATkHoGuXuks7PaYaZ1f1wigUt3pab7xoC3Euiyhyd6tY82FyukcHjASUdVNtypj4HJv3bVkZ1t",
  "key19": "5MtdojDBCYHvCo8SoLLwTyTmJ7e7c9NYUvzvmaDs59oSF6x8Ebi8cP4H4sLFc1upjLyJwX9tpk4MCqVzaftjpGS1",
  "key20": "a3zM9GDR11ZUTTdL7KeKqXXt27sCcgFnRDgr2xU84iZFEa12iTkJGtEiiqiuXkGXRwK7qQVDz9fU9LaDqn3f45p",
  "key21": "4PqgdctDSh7iCX4L77CUQ7SP9AJ8fbVFMLkGQV1yvz9YnUn18wVWcv1LUEP8vvF1ssZLQQzrXVaBKVGFkJp9oSuZ",
  "key22": "3c3wP8HS6FcnnmSdSZASwh9rWarRyvPcy4dvHgHeRcPK8aV8dbL2jU6f8cQVsrhyyJo3orzkYckJaS5N4i1rCUiM",
  "key23": "5xddegtxwhN7LdZ1f6JdpmpE5NBsYesXy99VWGm784XXRGmyJuP2R4W9NpdmVhP5iZBSprp85qu6q2R2kan4ExW1",
  "key24": "3N5y7CJSH3qkAy9cxUocGaghS3LVQqZVTuU7gkYkCtCDVvERofEbFC5C72cy8n1Ls7WxLYizg9C9mNQuiQ8322bY",
  "key25": "Hgwqp1rHJ67kzXgAAjXs6Hs9Hcgu3AgNc6WQXNSyB3WswbPDknieMtjthWMuvKQ6QPCdpxBWqskNXd9Y1yLAeuK",
  "key26": "2XQSFBaMr2GrLaaG6xm3afiR4ZNndg6wmhc51umDpzjKyvedBD9UQeikBkrCxAnVf8n4d376CTra2HWzY24dwGJM",
  "key27": "5gw9GxLNPziFg8izq9ASnR5DZRdV84oxpdKgUihwfkC9vsV294B9wqAqerZqmFDAzL7MKtHwupLe5RW913mVec6F",
  "key28": "5rqhRcUMQtSxdvut7auU7XG3yRxZyfySG5bn4Kx5F4mUW6bHt8uDpuzUxHZGC15ZbBqrCJXtyZZhQZkqchvpf8Uq",
  "key29": "2kxSLmMsdL6gGooVvaFFBEyZhB9N7m7p6pnkUAXFzUHiPBJCkA28Fwo4bzSRvyRfR652qGfMiVzy6E8b143AFxkn",
  "key30": "3R7PwDqH4hNiX7ygCofvmBK4hLFUJRSRuC47xMUsa9phkL36VLsBkwuJXGxxpiHaoRgkQhSByc8nJP7yAEryf4P2",
  "key31": "4zRW5Q39KidcdupVKfH8zr6ZZxuZnZHDr7HDciXoFQTZ9GJVtg1Swn4mYPy8HxBkhirSgEaUmp7itKc5EfoJS9oj",
  "key32": "3jrSFbSHhTYE4HpG883tt41nVgibiLC5D8hzHsEFap3kA4KizWgWcQ9irHA67Y2YoQNrYGqb5fwF6xkuDj9rRLNF",
  "key33": "2tDFw2V5vPaGBjHw4nEUjoYbmxg2zF1nTUWmM1XV1MaLA6HrE6gSFZyZ9QFivQihdnLEpUPb7qsgQYXUopkx4uvz",
  "key34": "3wVSaNG3C52Vc5qteVyvHNBmSDPrUhMKPnAYWDW6EscNVMnrR8TQ37CXyFtFDShp5BFgxb7AEgQU7EPoReqA3Fdq",
  "key35": "4PFPUBJ2EJdSD2CofoLDjKMPaeLwJ8N9zkHKjji1WEqyksLHGY361PuCp5Y2wH4pVECMRwEYrxy47N9PniAaDv38",
  "key36": "59vvDRrxyJS8AkzWax16qq6n4ThzZXcb5fQdQzGTw9Fy1CB9XoRn8M8gZpWxYWYwL8qDk9KKAeN9zRYjaXvPwxXa",
  "key37": "k7VNfkzAZYJmGPUTpnAtCYFEQNh4swV3TVCkkoyap8hHAecvN3YeoxWNsWx84bovTPTv5CGnNw54CfFEBrT11Jh",
  "key38": "3GsYawYCFNJ6weAwJ7o9MqBEaRxqyMWwYHL18AKfE1iw6mncEiR8mr5cb7YAASbuNw81eGstHyr3eDGEJw6ZUR3k",
  "key39": "4qHvatXjjrziWu1RpB3okqdUXL4BfonDg9jiYd9JrSvcJwa2MwVeU3prMFgXPVepwBuhvA6B7BqCS2HYf1HxiNjR",
  "key40": "59WqSUPrWLxDZ9pcZmyDQ1rzaK9HJ4wUuMC99DiMyWMXgLZvKE9ae9o7xAqSQhVgw3aQrmUJofUHzvNFpQm5y17F",
  "key41": "3KQicezkaP6xgLQsuj3AuBU7TNsSpSPEnLuLUMjz14WoF2nh8Kh84AFbCA8hAGi6fsWkn7s47HVTciiDouDKqzpK"
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
