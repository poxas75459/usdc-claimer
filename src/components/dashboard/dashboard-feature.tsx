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
    "2KoDMPiZo6CUH8dev9R8rmoZVmmPpgAh5JSVzkbQRCJVSZRMJUj2Wdg14P6Vx3vHi1EoZTAHPFedK7NgaEpmnmhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2F18sUXs8YUQX62expdsePx6Jwo8TzEus6Yw3TjiqpU7ZjnzindKomCxGDxL9HSXoK7b6WTgkg3gdVYxLrTEocCV",
  "key1": "5DWSVNG876U2XNHVNEDTJ8siVs3gxB8RKgcp5vafBXDXMhmDFuxtKQzgfMYG3gLPRZiZ4ie1yMLSiM1uDnHVMB6v",
  "key2": "AZ6rhj8Xqk7j5tG2GvDboByWTWwo7GQQBfVx4oap2YjfGNFquoMB3e5nnQyQXCbCiBXL9e9bUSAWXBWC9P4nrwo",
  "key3": "2VMGoef9dWUBARBUT2j8PfC5XBkNDyGJivkcJ1FDTgxfVSttJFYeDFKdoMrYHNseh3ZnAHueZk5HChsjqXZ13jCg",
  "key4": "4wfkyJbjXxmQFz9vo1EwCfYgEbY1aJaMb1VJL2Rvn75ssMT1uBcQMocx3tbykx7RovoKLpe52rbYQ2TAsvAd6ZXt",
  "key5": "3cP8Pi3Za68TAF9Hgum18mKezvWxCkjmyS8fxdgQcntF15cLvuDJ5ijRAjHpwUfS2rxgP5EZg675m98mCRJUs7dU",
  "key6": "3MGPRgrBpzvfSo3aoNRpz525aS1QG3SioTQCw2GDof7Q22ZKEzaPtxVaXJWSDSUAKVqYnU1ojEnNgKV2qQXLZ8wG",
  "key7": "632qeKkgFj88sC1s7VtKBmqExag8P6WJ7dXPPrTTGHkjrtarQyw4CAHrEySuuqrwB7nwEPintFo4kQzB27NHZ6dp",
  "key8": "4jrywG2tX4zm7ko9DPw7VQLnNeUmYtxb412guMTPNhD1HKPFqVJqAYeATq28cABstq9BYgHwxJc4WQso7MppBHFs",
  "key9": "5jZUyq7B11G1Qx8R6MoQJc1M4zbDiX74wdVx1mG6ELUKucfH2C1bzpH5HVzFUoixCkmiWJcrqkk5ZfDS6rTVuGdW",
  "key10": "4y5cQQ6rKwSQ8QEh4yFLNGd9sJJQYDYSWKyXxfXDAMzhJZVYPHbL2An7uHWhdj92dKJvSaoAPCsRYUNDaL4ZXf4W",
  "key11": "43WAQD4hkSDaKNGNiDgErLr2XZxKWY21Hvz8mA9T2wjiWAz1aEfaHJGa45LTbpD3pZWbyABggNM55M4JEXn3snHN",
  "key12": "3i7M1xKXv1ijbm9ViFr4f6dKyxB8gdW24Novf7A35p1erwgV7apkz8wqm4LeYuYfD8LPySL2mtEMkvcq3NX49KJe",
  "key13": "5vxqJf4Jdp2k7BQqpBkNYE2yaHv9jnvtstko32f3UermVmANiGteNv61GrKVadJmrj3Ukvqh54RgzdtjqYPXpWyV",
  "key14": "5sj44AzNGgCLf3PLmxRYAdWTpQEYn5B2JS2Nf2nr3s5xNz5qhjLLKy7pQwYVriTmHHatpd7ei3ker6WdedhDh3RC",
  "key15": "57ZUo1iL2oU6wn6o4YE77EMWm33RNqLYwxjbFseeQAxwdnzUo667HckixH4qCzG928cqZg2UvcpnaafN3SJDE8dq",
  "key16": "5x9jtx9CVHxzHPQM4JEkdjHZQejMNMgXRRNxicopnfn5ZDsi9rRfSvM2s6ZbnfVN3rQVTEsVUwrtHPVghtqrknT1",
  "key17": "3Y9LATKGXYskV8gkDUiUeC39KaFEjHrMmQaRWcVyifA3B8eK9hKcX7Jb2HokhZUFxaTgM5qxhP5JAKjWaJGNSTzF",
  "key18": "2TouHNfvDWdW9U4Ghtkk64ekco5ByK7CgJABhGnAUpGcWEqFkbAaZrMzg2zccwRShqFKLjCUNWwF8S5WxHg75vXr",
  "key19": "4oGpXFRPhs7WwqPyVf8ZLazKxypvX3tDXW9xHvWmRitL9aihwWoYzMmPiuiGTkmbtvqXkjTfChvBYncnvcqv4K1i",
  "key20": "mZZTuEhvvqSea6hjnb123bW9CuiFJumDZRMZWoGHDDnPSF8w4anv9R6vPgzEbFEsauyXFx8964qh72RMLn3j2j5",
  "key21": "3bsTWgGzbVaPHbAjkhiNBWv3xMb8CMmPDzFaQ84hNhMLart3tpnVNum8b9b1p8RCqLn35AmZ7qQHnCvmQv99MN2d",
  "key22": "4zoZzVSgEJnmtBF7DDyueiCCpyuDKiAjkLkMoYor2wNLUHU5rWgJxZjxpFLeMWXjtHTrFacNqHgRxoE4uqghs7jw",
  "key23": "3UBW3EN7YdxcQFL8d3FE1AvgCWy1T5jfte9TmmmVDt7kyewNjtWkjTNDYNQms4NUSBo8v77wHpjFsN5syq68E5R3",
  "key24": "3TxXFnxQSdRsXUKuu8JSizgTvKaLYnUBPXYi1wrrY6wvERZs2Sb8DTAmqastLNzDPi7DUibdVrunhE3c4gLk5LDX",
  "key25": "3Rp49JWA3TYzVSfdEUjwCSVM7yqF7a4EcxjjowYj5puBNp3kadbe9aMC9pGV1tTzv8pXLBcRaH5eZLueebXo9Nda",
  "key26": "aCfUpbaEZpYk5yBdTb9wv31RF6Y91D5nb4uFrxE8CP7cQPF2cjm7DvQucidxkQDEK4akoG9zet2kKD9gWJ7g85K",
  "key27": "2HvoB8xBkyh7SjNouuR2JhLgkiHKp1pVXgviriC7mpqdbcST5rfBaBKEsNq8sNvA8d2ujCtqXX5quQ74Qiwu8CD7",
  "key28": "LSrC4sRa1P76J53RpyGHoRJviXwynNzz6rWLgYhWSskWmTVjCte8WBaSxfizTEntXHYkKAVECBsLi2mUbYNYxto",
  "key29": "4XeShfLmxL3U95zCQMKdJ4GQTNvThM8CB7GJRZNwdiatgy6vWcve24ZsCy6y4gCc3czDTzzC5Tmr3JwL98b57o4Z",
  "key30": "sQGsBEvRqc1UMxR5kPNpVa3GRsFVetuHsBTD8Li3L8xAY1RpCFVo9GA1WdghnXjEQ1MEDCt74JtaQj8JsKfnv7u",
  "key31": "2G6JPFECn3a8BcKe6wHKvz8jvmSg35c6RdNQhgpmW5sXijqEN1GyQCyJkdmivbH3CKa7g5Ya7zH4m5k7WM9C1uxA",
  "key32": "5y7xAw4f9fjARntHqzLnWBQndAPH3Wz5KauChsEzGe8vJYd2VasHHWbomNLkdy1eK96nabxhPMXdQdVS3Cgyx9Bd",
  "key33": "5B2KBi63afa9FoeEJgi6Q96KQmfVwmJWMsdjcJ43rHF9d2ZXQHvrzPMHE2FeWKRpNWHKu9jAUehDHULqVoA5kZsf",
  "key34": "5WwESfiaeosyrHp3vNGFD67Czf6oQwhmNkg2DDBTAref9Q9mMjk7aZ1jBLwtg7bnHpGKEReydivaSoUkLc49YC4g",
  "key35": "4cPSKs2urPp4AwH8TjLLGW61RxK15jPrueK89AZ7dTqAixXgKFGsdd9FH1ve6RGNYfAzUrYwGY5QgcYnGsAvfTJH",
  "key36": "5tSqeP9rQcty6BsN8Z1g93XAqeFEZRffL9msCGp9bDXHW3D6ZJnvhpXk2UbdGTNCkebemxL1dpoqvaoAVx7WejDS",
  "key37": "5bQT92SDoD4ot2x7u7PeuNzWb47GVDJKyrsH79bgwJ4nmQTCzk2qZusKThoRDTJ9G81fdr9V47mRSejeJ15omd5q",
  "key38": "nSvF8pFb6pYjCxZ89GHHqBGLLe5NFEi52ftwneRRoKvXiKUtNSAj1RkUNQvPNpafdc6TTbhn7XvednTwsRTaFn2",
  "key39": "3xTGqsRRgZgeDxnTFaqhDNkyj4pjvLKjbkwDAAZ3Bm9YC9vE6EXVKt6y8vKyggNMmYmcNqNYVDkWfyDXSNjcjtof",
  "key40": "5JhjEtbMdd7Nn8PdVXwwJN5y66jxb48YGzhKrXaAQeBPQpeFN5K67w4sd3D4ubroEVe8fcgFH4RSCSQ88VauRq6j",
  "key41": "2jxfssG6zQWrZ1MWs3xXoRr82Uk4RzPrd27cfMXnpzNFcsj8AzBfXS775iNvUzTtT1npwV5PEEYCbQihcTkTqrLr"
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
