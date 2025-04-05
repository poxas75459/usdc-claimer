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
    "2qSzjxR2go6SEXTVWETwZAk8rGgqc6qixrn9J95LtJy6rmJ7T35NL7nMHFzfA25iShJUnZ45dmgg47PitHU2UPrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7UonAvdTbksTEwSfK9PbjbCy8PRZGVFAVwWk5RQm9PAKmsirun9WTpRMtYa4ty7yQa7oizbDQ1sWJYp9khn7Hen",
  "key1": "4DCG1U5M6A3NbPz967vWqXhBhivLqUbEMvq9NSsrb6DN9bgR2reortEW5iwVgBJfijrwZkUpcLo9RH7sgrzJd574",
  "key2": "667J8i28JTyWBjgpKbhPjoCQFowUZxXKZzr452h7TYKhZB7EVDiHjJHizqT4JYxaEaFdT2EzT2wDgAeHbRM4gf4C",
  "key3": "265JSt83p2cUeuDvUkjWBe32JFYRrNDH5wJcbQ55yPfjeTRzgUWgDUfLWfa4ugu9Dkr7FDMDtBXxYWsXKihZuYKx",
  "key4": "5MNVbVpMWttZf6gV8tL6Dhy7h5eRLWkndPyHMFE4vM2eyFmXrQKJgV7h3zQxvenVAFD2fK5Pk1mDELrA21PvvCjF",
  "key5": "2LRCPmzcVLgRLkoxeNfMTM5Pmn16vt9FZ8xRjRnJcXuhPfxhZQEguGF9mazVZc922UnrzAa739aPcoKt8sXAwtyX",
  "key6": "4pWrQBEj1doWEUCgwBW3iRL47v6aiuy1DEZWHoHT5pggpXjgeyysmG5aYTnaRATQZkNmuSwMGKhkC5DgRRfneFMJ",
  "key7": "kM2eN51CNWpgbcEokd7UtMzCsaxWEGAHyxMa3X5tLC5Sbbsg1ZwB8pUkDeCpwNvNQTkdPYgpmW95x8pSETPMoaZ",
  "key8": "uhsmAyKrW28GxiD4eojiUgXTev8odzzM1wFa4MgtHoxYgjSefKsisgQcrikaonJREKRVuvvTcYX8bRMjw9hjdkS",
  "key9": "391CCjNi5Km9FkYsMguYUAJkGjioktg9WGe9XznhAV3ngx5K85LurkXBr3LfR3CVCiRzrKxNtztUsZbHqTsiPSd6",
  "key10": "5ZX2nN6zHn43fQ2gAxXSkLoqEfXq84A7nWr8sfBK5iwNWW1Bf1kwnwQaAhpeJKXeQswFwUmc5Sn4ijpowKiAhftm",
  "key11": "pZ33av758fBoQPM34JPKGj4SafJXh3BUwm32VLfYRDZte3jbB6LTrPYectDjrivVfG1ZzB9cQsE4xNmEFS85CVU",
  "key12": "HZn85ydHpQoWr2FwopP6cRRHg5LS5JxDKdZoZ3WaUj8FXktKVYPK7kLwi9dwgkYgKPHd91xS8Ckbby8TrPhjmze",
  "key13": "nvKzcRWAuMiM5CQFe4mtRsBEtGpUpASQ9BTG4obXu3yjZitCvaX3AwhfbuBEGou1o4kJHLsE7ShBCKXEQXdYkj7",
  "key14": "5ouzWkCVJKFFVVZf8AoRmfYqRWuQCtcdDK22B4pbWu3gyCAV1acSCD3mwpVVaMYWj1USnixCLrMxkKKSpGceSP9W",
  "key15": "LKtcDrN9bhbj3Zq2eYBr5KpJJEUYVnQScFdafwkL7CSCEghAstgagJdmURRNv8dgd5XnkeQNoVWcza7MiUXQYC3",
  "key16": "2Hgt3fUgs6gpHxvkCTEaGjVDFGwdzmBHxBYi7aNQcVFvLVXPcwdLKoKGLq1zuecvL6haahhjayRnJSngycm8Egf4",
  "key17": "4uezDKANZp4SRdBUFtmRNV6WFrHT6bphxub9ZWZpj7Mg7QPmrTagHo4VCP6GfteTdqVvz4rFyXLjMDbkag1un7V6",
  "key18": "4mkDXR5Xp5AfQ5iSoesfgMTHwKTffWwb7rd8AMYTH6usMo1gNNGL9eJTz8VjG7AqBkUB7XgiUqytTDHUTBuMwEss",
  "key19": "5GvnaN5bKt25PYwvFdLS2SQnZquz7D5SWwd6wvmisqzNBt35N4z7Mi8MPwtR9eCn4GrZq4sr8CFVT1PZNjrisWcu",
  "key20": "3PvKE4QxC8qpxgiUSRZdh16CXzHdFpTrQDzHJEbEbmJ4Nrf5sBEVLSYu3hd1eFUa6m3QRimSB1KBMnVf5i1kWa1z",
  "key21": "BwkaEWqMDu1E5fWBccb9M3fL9HzVY1kvgZiid9hBxLjUfSRDtPBBYpu15MfTg9WczUdm8xg7DDKs5nurb463ku3",
  "key22": "5oXuF2XmT7QgnhR473TiMCSAtrDai8bKvsK27NUwytRmEK9YKsYQPnwKcaaT4d4u8fGi5ty8deinAH86R1FSSYnw",
  "key23": "54j9sakvmc4GMcrcukQDeJL5wc6fKxbvPYkdyfuizs1fys6dyh4rSz3mwfGFzRmdXC33sSx4imVQ6JECfrrKiZ3H",
  "key24": "4BWwonLK4Ar2HfinBB3VqqJnwZokWUbust4hQ7FKWRcwprkK8eEP56kFeH38MBiWMtSMxidWXPX6FtSrHBm9Ny8Y",
  "key25": "5Bi4M69uduEpiAhwzYtxi1H2gkAJu62XfgDPwjsXuDowbpyy16mdvpBGiRYKfJ6hAPGm9F6nVHYdpXpa58REi8yJ",
  "key26": "2j6C94zM71oPf668pQZenvDXtVkUAnMf5LuonHSzGK2ZooC7BdXzKUgWFP3416ojV7RdXWaH7tJw8yw4RXPa2uAQ",
  "key27": "2fGLuzoo75xv2tg2kmxCu3phKSkCbmRmTjzEZEeUcaouZcK3C2qEFr4uto7FNq2zo8Mq2BMZ13A2Vw9jU342JGkW",
  "key28": "3Q5GG4YYHM9CmhSKQd85pYoADYDZFooJN8wqp1bAvnG2YEULHrt6uyFW3YDJjst7zU5rL4NGuVaqg9apsfPGQXyp",
  "key29": "2bPxefoW9cjHG4a4CpMFirXqUTQdaHeUc5UFKzdLv1EGowAFFHd2iBY8HiTjYfYioC9xX9eqfHcBnJhyv9LRi9Dt",
  "key30": "r3uCX8w2AG2ytkwQceAnii4fX68yqRwxXYdH85vQj7AUtfFuWBFiTtzPzXPA1MQnDdJsZf2fBpTWZLUSuZzVosw",
  "key31": "2vB9PhETYQwZ9asrtnM57T4pa2RpVuDNDZw7hJChQTEZWykfML4wMsFpDCNmc4TUZCpq7ipcGyCXDiFZPBz6zmZE",
  "key32": "2miW8eCLNhLWbVZ6uyfnhSuMGaCpTokfVaGpMZ42ys7K2B2zpDrtw9yQEy1W8jdM42y2mys1X1wKfJeELojZFqYR",
  "key33": "3AbdiDSiibQG1s93LuYtvPCQ4F8VSNCBpcn9nFrDo7AEQi2nuUvabaoWbDvy66zgRjddnNWcRNh2EuF3do1PMuue",
  "key34": "2sv87zpuvMGxHJDDCyuXX6H6GWJF8E69YGr2jtAaKf2PS5BH73gDJk5t99Coq3sjhbQjqkaQ2TzxDG3dLjKGPXTa",
  "key35": "2ecUHx9PgPLAUCTVRJ4NHAsHZFYovUnDHjdru6heRsM69rfNoVUxSaQyNRMi3yxge3dPsGHktG7MPjhdvS6XS1N8",
  "key36": "5AwLwnGveSzZWQW96Nh49rJ5JXsrpqzuhShVPLUaYynXnnR7rsQN34f5LPiXAGVzbj6wEnzFFmKvkNVhN6GzmRxp",
  "key37": "4sCqZeVoAk5myrXZ9M4dTXcok9BqPEtHwVqXvGHuY5ZWJ2ULzfQSGZjXpp38igkUDib1worjCxMPgxLAvwjQpAgP",
  "key38": "MVZ9qsGN1XLHQxbVCJh3xUmydzATFohbXFKhtCoeMoBGKpyi5TmrbefbaXkuSwivZznaUvBWKQCPc4TeaFELAAs",
  "key39": "44gJNZCbYRu6DvT847sfytdPqxyM76vU3v8H5pQsMhExxuoyYVVzBRvWKRukBDwf6Q1477BBiGGNoUuw5XU6Q3Ny",
  "key40": "BjAb5MgGVu2npyggWUh83WS3FQr25Zh69PQXiQue6RH6A6Ycq5GGHfzwNKZHfzkJjYfWcPeFv2XhF4bTJLuid46",
  "key41": "4CAhJdvR3mBwxkb2n5F3RUSmsCJQf6sDzfMXMZEaZYg9D2hAyqoLUrz7WCS5jwoo8bZAo3a5LEvq8CX81oUfizdj"
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
