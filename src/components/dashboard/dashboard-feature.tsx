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
    "3XLN8g6QkuW3VZzSZa9Fy3dG3YMoaqkazkBuXw5h9cGmEKFwB1WDX9Sb71dPJrCKdUu33fdAiiLvHvrfGdfeZS8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZQbc9ytdieKjWPGvjG9tHLC5a8zxTRC9xRGRKVPDUL6Wto37a1AqGjQ4ryxQtRbSzw2UJRLQEoXTuNJpXzUSEbs",
  "key1": "rJMpymMueanhwLPaQmzwjY6dQm7RKKAp4TSdtDGWsHumNS4S3rxZ8U6KDaaLcmPnuGme7ffXDbGLz4FjYqZDsRo",
  "key2": "3j5TUYEoTfcMigGzXMtoQm8HyrfyBGjVFyQrdCyqpNT5MAQ6iqSFbSwzfNJArT7KhNhBJHy9jFnyaom8hmxG7enB",
  "key3": "5nFps5N92gaaw8M76Hd2piZ21XHQ6Fw3BdqBH6Jxc5SwoWLxEKd9Yf4997YASBY6VYkVbHf8bXNHQumrEsCzwzMi",
  "key4": "5jZctdoJ5F1AFHnCMKMhMUEyKKKeKZCNs6oFv9kdH7BkFDSNfUU3HWv5cGhmCZ7CAnWo71T5xrzsA2agY6XeTYzF",
  "key5": "5qzvK8Ap7mQyrmRZrD4ied9SZjv4CDpKEJHZomYB7drN63zEWCk6NteZrKUJqyX3cHBACvKWSY7XWuaQEggP4yVD",
  "key6": "3afTEgfLYCrmwJJWWr4vfGvV8oYSdpaY4QeXmBpBsmzqTcjDPhULirvHLC4FSJwj7UDYvNFprMpVSDYyhRNLa3an",
  "key7": "45JbsmAQbRKsvjpBEXuB5fTQybVEkPrGUdtJC8dasnyF9FxNWvpYnfYG9BjCZkdZj4dc3GiUFRztJDb9Vyenas9G",
  "key8": "58xNfxUpFBRreKUaVzLVCmMJjPtr5SNiZQCinGysULGmhfvPBtBpoiMQfMgw6k2R78GUHwB2FkZZe1iEVYEMDejq",
  "key9": "2PZ4bXB9VVmdru9qnpJTmx4N7k8svAPnqPoVBnMD9t2WUag2vG1Qb6knxn2ewzYJ88yQHn6HVsUwfEWBngBrEhbm",
  "key10": "3cAsXZNCyjzqR2yowvFpp15j43TWFnkRRCFGuwSeG6435ePFhsnejWh89tSFZh9t2vqBqEsgWqXriiyY21sRkUHu",
  "key11": "48TrwjsaCgRGZ8Evu5iV141NkDm7rFkfVuKAGSW3Kh5Dx6MD7C8AuoHjnqxtYVJmzXdmKfixP4cp22cC26XYKvYp",
  "key12": "2BB46cE6hoj9B39MNx7QF9yCBMeHpJeK4xHcqjg7tP8BkJZtZKbEma5sJrFMKkGrCQ9Be6WMYZ9tJrVnJPcxXbHq",
  "key13": "23w9iopjpKieqgsMmquq5TGJhAjn48ZCYRHgtdWUzahtLxsFx7W8B4q5yj835T1bKSx3shzmrwkquuVYAVXdASEs",
  "key14": "2cauSRkEk1Ua6pR4Hn5kRLHtaSVGAK1DCqmMyG8VM5mtkV2bLKL9s6bsTXbbBAgwZLYkRjwC5qfAbySeYHpokxVg",
  "key15": "5pwawGdHPVJMcWXgryq9ffYK2LMorqAv71ZRMStwUZ11GiD8am9F9qVh4kPZsxhmAmPxgrNPPB7REKuyHueVPjoV",
  "key16": "WmKCTaQe71Eb3GYNW9f16rKjCF6275UjSSmBBUAKkTGiJDKH2T1wqtg53VCXE469jPRKCt9qUBp2wTCbCx2Swze",
  "key17": "5qsFWomTLRoofWLX6niJXD4nRTbG5iYPrKNMJWtUXyyXY5RZ1VmP6q3JoMQc7d2VwvoFb5C1J7WhZeaLv2xN2efZ",
  "key18": "5yVsDWngeoWqB42tV192pUBFudfXzxx92SdN4u8GfVaek2LLRK9uKg7sr68igKogQMkax8QY8jFPcREEQHgSU9Sd",
  "key19": "5GWPBULcK822MKdfY7wZz4LUFDBVVW7kiuNMp6GDbXVhfxteNLE831xaY6vjM6ZXMXgEbEnLx4jMEuz8o5cZUj4K",
  "key20": "MYLqHW85nTW8pvm1HHDrg7aNUkzAsvQnrwx44HRU8CUc1eqdCreVztdQj1RH6rxxUtjFjATC3kP4MjJMCfB1ffh",
  "key21": "3ZdZ1eXDLibFXsWBTyGUVbZc2KAZFsGgh6kE1Lcx66hxVfcWyC2BG4JTKioNmTqpGhSHS8sFDehaR9MrqEZzfVgz",
  "key22": "4NfV3hZBjHSzTXUuJPo4yLSPe4qHx36xgZLPfotAWjw1ZdqNaN4yJsokVEhfUXX5e9hb8jWGf6fM6SrUMkdntHt5",
  "key23": "56qGQh51vRLk51Yw7fTDxbTLXg8gTAMerZ38ij9e5MMQ5Mhuv5n6gkyKJo29scD7ADH5cjxhgsXzUVTbwA1w7nMw",
  "key24": "dNnav885Jwj7xY8J2bq397nWDDv61jbUfpGRBe2YnRro1eaH7g2Z5Ri2Pac1BgZPzGdKqnZsb8rZyco5SDedVN7",
  "key25": "5R7roRnjzpZqBxS1vrFZtPzhjedyb3DNL9stJoSeU1E69ajAGzT12aM28GGw7nFi8xxQEyYGGfBcKFA6v3dx35Zp",
  "key26": "3T2TkYNbRgvBm4Fi2j3hWPBHwxJED3eNnsbkgDQBzMej6qJUiDBdNXzzncghudZqPU5bc343gSubcmneJiNnNX8J",
  "key27": "39f6B8kkrjUjApVNxTSQvQVGmzw4HHArMZ8uqcY5WcjhAZ4UbQwXvcZRUAA85QL34mjbFnL6RQc3DAQZHtaQMJzE",
  "key28": "5zEv7Tzr7Ns8cGbeussctTScCC7SXJgszHRKyiRhJ5T8fGVLWaQWcXsh4kni4vSKVr3FhrY1oc5s5w5aSst6amtP",
  "key29": "61ExKXN3ieYVZoxpzhgkTRcNTrzduoRPffxCBahnSoUY6wV1V2tLN48MYDENRqBvQKPQdHcwMZMgMuvek7cnUqXj",
  "key30": "3abtUckgVbgxBUKe7YAbgxjNi2oysGHYkpYLRthvAywZf2iiaiB3y8Fe6eNLR89chEjVcf2BwN9Gd1BUsSwJBJHW",
  "key31": "2aEvuBeMJtLJ4FmGEfTBbynWvJmjJdG68CQmVcA7xWKa6CLAYZQpSU6wo3rFb8xwANhVHUgAiWQ1Hnt38x758Qkx",
  "key32": "MF1qHPHMMA7cWQ96ZffdRBoWmtfFmvfM7Tavv7b2i27tpmp6ZEE3uFKLUzcr8Q5v4TYqcJfjHqfsthPYXkWkS3L",
  "key33": "3QsoGTZbs8UyAGGaYCxqQLbu2qPedgkoMrcxFkL9TC7ViwXzjm1nUvJU56VNCXiSAZzZDVT5DuzE9PcfPdf57hdS",
  "key34": "4w2wRTMpqeo2uqWYwwe8ZqRJhUPSEfJRa7hgaHH3An61u1ppLQsGv3TGBYH4n6MUK23ejGn5fzpQBUzQGQytejS9",
  "key35": "4QBY4yYXUpxJn8oDyn7NTMwe7CpVXBE6WLamy8Sqqf8wGBzLeQB4Ej8oADKfovCWMRg4y4hcMyNjhg77MfNmUXd7",
  "key36": "3FzzWQrzZcdmogXfx5DGnTH11rD386xPvc4XvuFxoxB8D8qj39yGJNAMSWzQan23Hbh3tg8gvqSfvAVQSEFzJK6C",
  "key37": "j1QGfhs8NtC6wSVQikZnGpWy3Cw5zcXf2HUFUig8YUHGDq9Jg4EW6edZ11HbmstQNNrcfVmWQe37PFsQnzZC5bS",
  "key38": "4ufraUjtjogSn3ngD39YL8aLTwNDFux7u4yF2nr7wQYNXesz4GKup3mz5AkCnrdd4xmsmXh7vcsZMFa252udQeZV",
  "key39": "4Ebzr1v8DvuUm9gEhqs1H4S3FhebmeoP2Qia1aWkwYcDPcEfZzMv7T9HAQ25T63r6P4ZrHeZTcesqDyq1CqnDVqa",
  "key40": "3NdCZHbnHbwKi5iAatjwBSAQGU3p8g9JVR3p2DbuSUbtsRmuRJ1YCX7HiMUTwFAc1x83N9UnxdwPUrBNRq9djLn1",
  "key41": "2UJPxXkeFnzRDWBqRsdNwLmrLTdHDaJMbxNCmKse1mXSt469r16W9Qij1BXyDvhL5eSdULsxJiD3uSRcYAELNjiJ",
  "key42": "4dypTi8aMb5P2gb9xj3LkFMeswd91QVzqwuqzBehY4SkVNHuxHfkYaQS9zxijFHDU7pMPCaMsNawg6wm9RQKC1pi",
  "key43": "X5nE4zm4hkciZAQozdePhHbonYjkcUjUrTrxUmGpktpL1MFzyFJbMWtVj1Sa4mW78gPTgHuQsHsr4swAr7t3DUq",
  "key44": "5ZconMvYWg2WxjW28nVGBLTfhNtghafndiTKAUv83G67jLb62tFnGy5mq3v3LNFmPRkmFzPyfMVvZTiypisDWeJg",
  "key45": "5sYFr787aMdL21DtDvzcShRdvCbhyEKT3yD3f8XCsp9ftyd2H8rMnBK1KtwDeTwfaLEnsSEp7cn2uMYhR9JMyRYP",
  "key46": "2GfRrjYUuwLFoQ4TgrBYifCC2cRYN93R4fPvkJdBU5ejA5KPJ5S6fkqPT7PuAcSFyfi583fNUCTMHtn1jFduq6qC",
  "key47": "bRSs9qGprFA53PdoUK4LGaZDr9GmBhW6xKDXkiksg2nHgGwj5e6KYVBhU1hmHiRookRSdwRNiHxKAULUKwMUAMc",
  "key48": "4rNqsBZN5cd5svDjyu8QxkyYRHZBHM8dxiB8gTDYDYV24vCWu3wGekACVd1fU6LueDUkHRRby4RBMGoao4mGe7yo"
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
