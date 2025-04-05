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
    "3z6JM7vgN3B7iMh8YWz7uuc6hbZW1PVQCHnNbHYqJn1vjtzKJ8Xe8SheZZUzvhhGmYMV3KgjtSzadze3hEL9gV29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JJFdarvXdzuatq2gMx536TJt5wkW5fwJriuJ2Z3Gt54v1WqjmGUwjg3peWnE4zuHcr8QnztZzSAhiqyo6pfQpa6",
  "key1": "3h8Vmo9Z5n22zPx1ZQTqQ7qpnL5xynDd6wQR6h4z9e9hi9ALWBnghPt81j6RZYaWqjVZra8cc4MYK8d9UsmrQguS",
  "key2": "36d4DEBe7nx52msvgHYmizWB1CnA8C5fJ4YKFhMiN2F1ygKzqT4SiAtWXWgXr58eHpJj2mv8LJNqj7nNbr97efjP",
  "key3": "2gXnLhBNmHLW4FSipJqmY6VAwtaSJGDYLTpnS3NoaX4CLCSHtGUXwAFHEtE8g3dood8urzS53kt8Fho3zeR4PywD",
  "key4": "4RbVCdUuFfSEBoxokdJdPH6Z1yRHn5AQTZMLUDwMT9J8dp6M1vVHVe4cNdcbGvPW8BVwB62y1WQ865dDzkBTtc1u",
  "key5": "45uqK2RFHQoftfWMvFqkUxVSycMGkcYh4Lgsy91YzGonnfaEugvJmwjgeBpmMXvzowtZvk2kptqQzBxRSM7rTtc4",
  "key6": "uhgiZyYGNB2cNZttBoYe1iaBRLGsXXatU6ns8FinZkEaNBrXKTBjcBvEX1rdNZeFb9NVyZJWzKEAKPZrHWHSptj",
  "key7": "3F9jrX4B55oyj3Sjcj9CGcrjKvCUD12zj4oB3GWdnfemznh2WcAzx1J7iSLrnTrzEtVz52aZ4ZZDQKXnGKgsBj7B",
  "key8": "4MA6Yt9H86tYA9THefg9Mfi1sHwfEdVkAv8u75aHnMMdjhibWhX2VjqLFpauj6ME26xyUNCbeuHw6rYybdwZQjuu",
  "key9": "PhGgpxFEQgvpdkdTeDCksgQDvzrsHCPWPfN6ggNAw7x4KEuXBpTY8hzA6oeN7XdLvSbtiFjBNkh46ifird8qvxi",
  "key10": "d9btYwYqCdnuMjSKLdH2nycnPAwJAaaTvkrXBvRRAo41avwEaeDKZrQMTY4WQAbgxZAxZuGb6HvpfJHAD5UvMak",
  "key11": "eoaH5cSqNbYwLTHHZAt8xnxdDMYXgVNgrDZGZaoRSa4LExmxoij6THCAK5L2KWKSkhpt2hAf9qiFubxwjHYavxH",
  "key12": "49VPQHf1JDczQqag4P3Lk76yBYGLsVVXax9sMZNGMuvT4r4gdpAkFkHpj3cYVkzT5ShqGzYfQPmnFBLAGRHrFCoZ",
  "key13": "335tZYmmAGW5vb4VrPQ5h9DuKLhghfTPiV5xash7FABR3q3r1kss44X5SCRZhWLUv5XdNruJeb4ZwUe766HA65kG",
  "key14": "SvgeeGcqekw4CSZE8aE53JANmQkcY8gDSXKCPhdMxvdDNYesD3nEcqYqDXyBzVf8Xo5wPuJ92x4Mcj8y3s1LmFc",
  "key15": "4YEAnBBy47DRNewE8fYJ8r1wp3afVKFTc5hsZVW7B9nQggYrDanKWb3AoVnuEk1duYqVbqXHZPsCnPV4JKpSzTS1",
  "key16": "3y5re3bhS3CUifuPxAXZssDLNtp5jk9udvaDNFssyYaYkZ5oXXigfsmmqy6JBbrPZ8xDDr2S166BT37knDcgbDdP",
  "key17": "2jWU2q3Kun8hhEi5XmBCk3BVqk7YrtGJtTWkZkd84E8cN8BLAYnAFSzh4ygViJikp8gsMRkuHwraTb9iRiiBJbLS",
  "key18": "3WbpMTZABGiY4NH6ZhVJVn43U7bQbMNPd6E1Snb5SHwZGk1Kbk2uwEV8zbJCm8yp9MTaEqpEvVeCQ5E8juihVtew",
  "key19": "5DXken5BeRgtkX8kRNX9UHKnS2UHvzX8K1LPRfUuJY3263JDhuDc41FECYgkmTKNn2EPLu4Rqyr7SErujdbchrDy",
  "key20": "4F45v2L56bUyJzos7dPThBLFe28og6WrpCx4VA5iqpihkZ5n41JEnbBR7qU4wEiWWvPoMQKh3Ar4gwwBE5Shy4Lp",
  "key21": "25gPPjED6V4ffxz9a1Uo2VoZK4XSFymEPsx5rn4NmdJGESKcfWK6THG1SsmVckqQFEcX7Pv7SZmuf2rGZwffsePT",
  "key22": "574pbyDV3z6hG3yPecNjy3XKhWYqkNkdjTznu3NiMJgB6H4JTw5gmN2GCWQvWRAmEf4G939Vumi71Je6RN76qAcn",
  "key23": "46EG7Hrme7S74PYRRwtLWSWRA3aoRwfGooYXRBeSwSn8YgKP42F6StJ479bDzxphr1vryKG1xc4sxTMPKCJCnfNe",
  "key24": "2tkKskaNZncCoCh8n1iJHJXZqbYThdygwN43xjkePoguM66fWtfB7K3ofA7WDKsiVQEYjidvqD7XyLi1iMU8P93f",
  "key25": "2eT32RibjoNwP1umjrM9VuSDz65mgdanqQMSYVk2sVK188sh5QmgQ1yCNriYDUGfSqYQJDVt44o5N2ZPpZcycZnj",
  "key26": "2QM5cZTFxPTNXAu9Zsqqz7TMfHouUiLNvc15rKMZZ4nYwTHRWQRQv3fLY4T99Zv3K4VLGTbGWP4YtEL5f8EFtSha",
  "key27": "DwforriSqoa7Bo93NoThWeeYp9oJrvEZvcY351eF3jJkeg92PQNksSDg2obAtfEb5ELdbDE8YBjkuyqGuFkwJsE",
  "key28": "3qyVJvZapKKWHV1GAWvyqkJMup6g3JxT5co2NLg5nMKW4fYUhbnMgddGdcnejBFjjJz2pHuFGGFz7yd9vhWeupPP",
  "key29": "47a2V5boYGBzRz625A1sTtARhv5gLiRoFKFzsCarKRxjoJJcoErucuuPfePhkC8hZdRwwkSVbKpAhGNkixpzrPBM",
  "key30": "5vS7pDj48brYbe8UN3sVBPWehjdVhyVBavzhamTkphDEU5j5591pLrZt3hUSiUdM1869in4NnSrwUeCEUJrfm1Xd",
  "key31": "3j2dtY6P7ucZEUPTmbHgbfBcUkeuMYjb8sSY3y6MnHEaRcyFE2JcwmHYC13h7jEbin8dwv51URcwP6FS1kv1erpA",
  "key32": "5d7ReQycU6RVmtrLoj6cc3D9aScRKTJyBtXrnS8ZSNoTTHbdQ8iEt5sPunjJUT3jqJukd5VsaiwW7nnsWx2cG6B7",
  "key33": "gufSxDR8BfDPiYBBgYtTFwddHY62edePxv6YXyY8RFL5FuBH6dWZAK9eJgXdcyVkgBBWtw4FEaWAFXfxGQQT91z",
  "key34": "32NtKajEXfhwmKkQn8awoZpFUrTTJ74bSAoE6ZtbM5iRz2kYPhvWPXso5BpKDfj9dL72vDGQD22TMZNpaEX1aZuc",
  "key35": "3yY2pwHdtWnPLwxoWXzYaZzHnfkxAr5GYEUyCC2zitUDC97WkikEsXV8Fsfo78LbieYX46VMVKb6d4RGqbcQ748x",
  "key36": "5yKtwboS2H27WGps5JHFCj7ryqBRjaFDGAHDWsTM8ALYneJzk1witFxh1uUKeLkqXQR48uFvtzFqYCvv5finbjk",
  "key37": "5TmEd2cFsPgT45PDUAzDibhTGLukhLuFWttmBogFkRV3YGQsCHsRnTTDPyYntyKthF3qJEF4bpSqJ35U63RotFFY",
  "key38": "kWiahLnPduZ9TJjdc1SJ5V9jihsVeJtRcYFmQMJr8QXtAQ5dPUKvhAvxcbEegUDGiJb2D2rzdSJiZ9ByVpC61JZ",
  "key39": "NrSUDMMfqnpZu31ofQSfFFsnbhmmQnbVDSfyeDUMaeYovEqwDoQjEAwjPkxcpbrc8GXrwpwYUdAtQQSCV1Y4bPK",
  "key40": "wABUhcSwmbdqLjL8cyeKW73eQmrTGxtH1YbHEJPWVBckNQhsKoxCUguLY94v6DeDnAQWiVSbrewGnnX6PzEv7Dd",
  "key41": "39SAc5XemgUqcnM3MsbY4jK7a4qybJAmQGBG3taJSsaGw3UybC1KEo8XskWRiMoNmcqZMSYUVDuJaRExsQ7yKNeu",
  "key42": "4qEjLyod811QucGksCnk11U7KKfh5C5hns3afkvjsooUy9ymvQB9ZnQPZtUX1QAAYvpyTy5K3Ef4LQTNQNE199Ce",
  "key43": "3GkkPCQY5EqNbgN5Xt1mHEgzxMPfuSkNGmWX7bJ9p5nE6ajeoMvWMHWc3gRuVTYi38Ej3WU18ydrYyYj6QCBhVU8"
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
