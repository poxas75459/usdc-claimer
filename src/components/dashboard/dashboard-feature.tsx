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
    "5GMK59ZBVdbeCxwN3jVRgVkRTr9rAejuLDeVcwh95jhc933DRLjQJyvMCbr688u1b3EtBaXiiqLnhKw4JCBzVfw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vxv6ttiEBu2oEn7RokZNSU4Xt22Gq6rjQULvgTGd9ViUbqCnKmbwqVmWoomuMik5oBNSqWC7zVUrEZ7AM7HFUWX",
  "key1": "4BMvGxSakXPaTDhdPSR5Xf7vTeRCJVYekUaVeTmwFQvAp86ezKBEBN3ppymnnK2uT1vciH9JPCJLQ6FpUkEbpTMh",
  "key2": "77ZzRsZW5ETR95cWDMBJAdWXkGvjAGNEfK63rW7XS9K4x5t25SgmqTUyyt9CEerknXaRyDeUsemgehPjGAtUUEA",
  "key3": "3RANpQXNKqu3SVxWxAizQkfo54NAWtoURd2qHinNzFs453rDqLviGfsPzmovfDF2tY2kP1F4gAoUE2kz8q448GpH",
  "key4": "5Gfi4mXuUTXBQ3Mcfmn2LqfUuUAhwt7T2ABbc3jQKbSQgHyRZ7kbtaxCxUxwJPD6xcbDZsrahXfe5T8LZHFTH9WA",
  "key5": "4pygVr4cZfzpqQVNmrB8Y2kiHGRtagAXkg4keJNEquQvi7rcvMRDJk2f1wLWGyMxbwLqksLyhxzgKfwLk25BgM7T",
  "key6": "2VHMAr1XqbeVCv8JFmPCjhkn2naVGrcNBU9TDini57yYxCo9a1JArTuqgTT3YBkTbng5pFAxs7wjYSE74FTHgDjE",
  "key7": "2kDsWZds994SGxJ2oE92EDa8z7hstq1Rko29ybLU3kU55K1nLBrg5bp7D3zAqSVnfgzKFN9uwkMKme7vY5xkdC8g",
  "key8": "4c8EkXXn9BZTcSX9tbQX8ABbmuohy1RkHkscao7DdAUqBQzZi7tbpSx99LJaM1KwUt8B2eAYFcbtRf9A314Avy4v",
  "key9": "5TDw8f674FLDEoresNacoK9wPqyPnUXUQAQstGKK2pb6enBHtFZheT2wHFChCQ4XjeuiG26YvxGhUUSockJUbTkv",
  "key10": "41K8WdfDBeZhxcsFqM7zNg6NfekxY33LuSDvd2duvhKV9TaLWCY8on4sdeQWnLbHpgSbHV2GdytMjhqqq8WWgBzN",
  "key11": "28hbwfS15U556AyEsYAWjjzmXSEkScVp9dSX5HkScp8bWXsa6mQN7vvf6aXyXvLSfnCawdpi4YWC2efnS26am7Rf",
  "key12": "xKJEPCyuKenHLADz5r8Y8GQTZhy2KKsZRYmq1ZKCZsTaeffCzmVaNLpk94zMufSRGiw4xc37DBkbeuxJVo9DCen",
  "key13": "55Q7MJ4gf6BpSyAUPpheYmqFa1TBWgbRF3FB37fGkXvKMWuocCpg6aAfzZHaiQJHxGnUZmVCM5d3hjJt7UiPQdxg",
  "key14": "22XbEqvbpcQJdt6LaQZkzZ3SEZX9NbipfDPa4ybUZofdf8DHuvvkmFDArQMPcyTTLi9FtmYZwHe53k6K5gA6LH2z",
  "key15": "UyQavvKeKqX9gfYeCxRYEy3nK7MZtRjvh6uoE2hX98JttCugvKKy11X29pXzK5BwRD7kAGcEb66w5CHQX1co1gB",
  "key16": "2itvgsgXVGd7nkQvaUyeZJVqmFySRF2Pnigav5e5Mifm2h4RHT1YYZucpdfozzPAuzTiGqCuuz7SjoY3CfaBvvkY",
  "key17": "51BrCjSCvdFQn3k7SuWBgtexLzatZNpLPEEWPMK3UXrg8Xn4JWjDZthadA8NzP8Pvtnkift7CRbjh2wwf1Vqzcr7",
  "key18": "4bxyuAzFDuyzgzuPXGkNwfZUrpzNGyzSmWstzaF33t7ubbuMthRuEKmzaZoB653ihQTXkXt4pL4o4E6yymN66dBr",
  "key19": "5FzypqXFdEABcysPgLT9CFiFXyKYM2n9SQ7YH5iikYoAHuQPKMwDXmSpqECBZrxJDtDXEdTnSUuHo6HTp7QivsCv",
  "key20": "2eaxN4GL3vBQVQw9a1iGR6aRr6JVCKNkaCSWy7EHxFDgr8bWexfzVxgUQRXTkn3PZWXXQnbbMd3NWoGVGZvLidN7",
  "key21": "3qH9ZQjaLt2cUeY8qpbu8o98WtXP81AU7HLAUV3Lsgzkm5Q4dJ4u77pGReu5zfZ8tzpPYfWXxajrZVot9ujbYMZo",
  "key22": "KzQLb3Jq7Unx54ruxVNkqkMENsqCXc1hbeNCvAdWeETDRMuNCA2S38mZEY41v9Fp2jzSWGG52i8MtQLiP3tsfXe",
  "key23": "2ikHr41RqHSTCVp4JDYmWnag5D14ENXM4Zwj2jqc8deognYYZ8D4QnV43rQyUydJMdYTC8wQDFDQUPfwXdRqonH1",
  "key24": "3nbpQXFwBJSoPXAPzFfQ5BTxM4xiLAC3MypFFmi1XHrnCLLZSq6rQHer1YSswVDjgxMpmt9jHfoaVvTAHcv2SELs",
  "key25": "3pJR64BVwTZvs7VH3JwdfrF6VJpzFbVL3Vmt6Nw8pHnMw8b4fLXzRd25bq1e9bXGy6Qvxm3hrE9y1ZLa6GxoWvEp",
  "key26": "5bD8TsEpi1UjSoPwNWQZYzqqa6eeyYgRmJV8gcs7xfFB4EgM25UNzWhGbSUVkgT9JFViTGitrAcBgojoAMoSaCk9",
  "key27": "2JarDd5y68qgToAKskEEaqg65EMWqFMKYA22rdeNXqzhQFzch6Zbbnr8x6E8yei53vksVNaNBrreerF7V4mYgj4B",
  "key28": "SSUKhxpBy6uZzjMo1VbS5x2Tw7RqQKZDrzGKEvr1hWevC5NoVvgCnEpNZNzUjcVEAujgN9rorV2zHiir9GdpjCu",
  "key29": "2UhcUpabMChNDn4vPNYPUwC9t3HNnBAcJQEJCZRSt2dsbLzc2BpTreWEWczUT4fZ4G6oF27HQ5ANJ8CRerm4BKUz",
  "key30": "2fvuUt9Uja1YuM2y2sz7geSZtuy6um9njvhsaeW4DFqtHrafEGn5VJ59b18uq6rwUy2N6anZ3Py73hXJ3MyVmgym",
  "key31": "VzzVbHmPJPuWsyR3JXz92qMYocNYffL7es3zGdyUc3Ymwho4wNK5rqn3twC4kdULFY1dL5QJvDrXUb2A8BzUHHs",
  "key32": "2DJKdQfnevo3fuqxshutjmCMuaJfZ1amEog13Q4S9Rf2rnFJM19dHv8KkPxx2bFgRD5oy9QoTZNbZoPbEJmn9rNr",
  "key33": "35bb1LokKL4pwF6qBJUQGPqWqgwyVhadJrZQozkvJ5j2uoXWYPjZ7fS4o7262J6sbhae8iupwQefzc5QrwBQvPyg",
  "key34": "3wqwBQqG5czjj8mm96L4tfLkuqWPCe54Nu8PZkkRAg4fwV7ecu2zxgvGepc1mrUhzc3nAydui49gn9Uyt2kpAcmF",
  "key35": "4uKTKHfQRA57TGo9qdBaEDtwJ21CamBr3jCzGV3RfWnZ3rp4K7FAJj155CYyaVYmb9fje4D9TD3WydHZj9CkZ3EH"
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
