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
    "VuUBVNhUhqVjtfQzUSMX9sPMnsem7XV9exGF9rk11DJ6sbeZMQWhedUU7n3N5ikSkQi7EXPkSWiCfXG6Dvpg6jy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GaJKQuLKjcBBqWcws61ZSVk7FPsdYax2m8eSsajYZXUBgGfh5wbLJGQZpLVuF8kxR4zZxkuXAyXeTABfkWJpD22",
  "key1": "617qHj2vSiEFNRq1MGz9buuihci2Ns6F992U3MN28fTrU8bCv5zj9NW3byGA81xpmb6bUQPo1uwBjg4wyVSvVx6N",
  "key2": "5ND8Sct5SKfVwXCq8N7WxNMvygp9bCebgiABuEA6DESHtdnKLH5a8UUK49rSRkDyeWkoyQnRoRoDyqQzdpy9Yz9y",
  "key3": "HcKQtuk8bdkfyXCn48NmHwRWbRMqfNZ7uH5ZjGhZgtXoJM95pESu8Cbx7Udg1SPzWsM9dyXnLR5qmuguW3yYX4d",
  "key4": "3i6AmiD2KkQEFFKi6mWPhjG75cVch4i7menayvtmihyB9sL5hruSzrJpk8xNCkugp7zVjZPvcMXHSsGspN2YCMrD",
  "key5": "5Fx4bhuV3bMWFZUk5KLPG7Z5XXdTX3HbvKiUPgLmjT8HqoXGBsbp81Cp6iU2G86p1tazs1udK1msaXX2sMyRmxiz",
  "key6": "uG7MVv9G16Nocpfe4F2NF2nPfvumiU3fx1zvqfq9bn2kHpF2o8UYzRdfouZ5wFj1etPghRnAZiFN6DXJKDQiKQH",
  "key7": "46nhv5umyMwuFUfu46eyPBAdQ5bRK2UDNkRF55saErDYNiKfUT8KqW6yCzLHDAeY6PZoi3sp4VJrWZCMEktyaUxR",
  "key8": "JkvLvfieCAUnGoY8gbakcdXKVj7sGqB5zuoXbgAQSHfR2kErbzic7t7kcj8bxtBVyyZBo4YNd58zbnXP3oxdDcr",
  "key9": "332AwahBWcKNACyt5CPFXasRBjkd7KxVRhsbmog4S8moNEaqMwZjGh9RqTDAHFeBS1iamwGFL54JqDuUAVJ3JSNn",
  "key10": "3kDhgdVAmhc1hsP6zKuquNeR12QYTeEY4tL8WE5dY9ddRoZFJhTzYGLj7ndD5mY6vADAWbUgsuGAhYyJb7CJJqXC",
  "key11": "4T45Tx51mHRYNhvHe66s9EKwbSxf8XFkdE5HFtZKQhqV55u2b9vPuujW73JBRxntEWh9AAJRkm3Kd3UEYzYKbduT",
  "key12": "4YzjZ1dNY7ZxeHgye1ENyCQMXCLEJvwb3Z1GjrAJZogYosQrBViAYyHMkKt4A47CQNoaoJxiuMvkxscT7D188eFN",
  "key13": "3jc2oB8nYPfap2YdgqXH22x2KTZCLt1p1WAhrzjW3n51WE7PFoynYEpf41p2uwB3fkj5nQeDjd1rCiBuR1d22WG6",
  "key14": "4mkfPjGYcpMAM3T3LsXwHxsDx385ZywRr6crUygDHoYdMg5Smy6n8wtXEnRFnQooY3j9Fu3DxyD7fyNaAnJoCue1",
  "key15": "66Tmuye7UdsA3jg83cBrhryC29ZNRoePnqjwd818egazNUndZydYtYj7vbBF94n7uieH98SfqqXpHyZcu9vtsCq4",
  "key16": "3hG5vYY1XNnkXDT7tghpXbCyF79hdsZpw62ZFQoVeVZK6pJMV6eKTEamB3F7umxnt5yint3K3o8EN3dpskRh6Wij",
  "key17": "56mUPQVnLEp73os7wgneQow7pWmKBzaYhPLML6Q6TU6uMTX344eu8FPnEyY5UMgxG36agBsnNNoru2s4bf7EJnuv",
  "key18": "4Xo6FbqDBr6bYKNq6MDVvodsyLggfcVqXRchnLQs1B5arLVGdjT8G3NBq67HEYbQwETeriPJTfMeBTcjijVjDfoU",
  "key19": "5LHYF3n5MvyQyZABcQPP5Pg75mCYjgE7SA5TMocDAe4g5pryH3ZGes6wff6rnPWL3wAAn6QnumgQ66geX7uVCxYn",
  "key20": "rGR9ApLXuR1gFGjJ4nmAEswJ7PXitvH15GatwM2RxWjiRFCSvj3pV3dGvaGp2gUsBfAoVJNX13FjU8Qp67N7noK",
  "key21": "pVSDPagy1LEP85AfYnqB6pCCwLrBpNDdoFGuGgoyKSXUoiZaXu12jF4VT4SDK1788HFGTwtxj1UTK5MBGM1cAjp",
  "key22": "8TCY6CkMsVVAX2QJsHtxaSab6peyEWuXyFLgqqmUroT7qMef3NFnpFFQqJ2Avqicm4EHGe6w2QdjywUbxau5MQM",
  "key23": "5gXVhME4A3yUg4dH3VijwBgxKyvGwuSYwnaYcTDAoPBCRJdRNBanHHkj1QhvdAFm8FGQ4anCQ6Vpm8FXVAz4R9ni",
  "key24": "4td1idQrYybfrByDQemTYrmRuevoc2eMGdj2yESNRL1ydgQEU5zaKsE31avzui5oU8jZvCjdmyuknuzbg2s5DJKt",
  "key25": "2aAupjUTSKFRkT5U7bcsRCVCgrRd6nWa4YkK7k4khRCkJQxZyvoWvQP2HgtsSscbT7oZNGykR9eDrLZMtXpTcDV2",
  "key26": "dctWfd8y7S9oB4qfactgFaSZu1ZFboFk51t58w1GeAAsseDJMwayhhjH1kLDvRTxaQ7P9yioZZ2QWFSXzB8DZLh",
  "key27": "5DA9Tv4fGswiZ5GCFaBxG8Qs4UJgUiFQ5ZFU5B3Bxh53kwteg76kEPj6cck3GjKjrjCpRfA4RGJXxi15kpdPSfEy",
  "key28": "38Zk6JRWbZL77sN1nEVU69WBZgsVPwGMcwmjMtf9sepp34Jy495ejF2jstV19BhMPwe7zpPGziW7e3vH8S8Zwa6V",
  "key29": "5oPMFEf1VC9VbSnJqG4ibCVGtZYsw2uN2s94enEDoXN7rWRX8hTbt4zMga5NzFegrDm4XXRAvRgnHykeg55vhn5p",
  "key30": "g9zvg9nBsPz6hpTdJr6M8eQyda8ngcnGtwSjPTmwHS8BUjLi2zuQJGNTQzji4JyD65xBVy61Q6W7r1P6vFH2mvR",
  "key31": "5Tryioz9Us3fQV8NbFhZfFFFbQFphBiUYk3JYL8jnNtJ8KV4pz5usEWFVBHPdWqW8rADpSe9m4zqC2HXqQGDA4Wh",
  "key32": "5MFahfZSmD7oQwREqSaS44gGbZDd161Y9xrTW3R7qTqBjAXmW4fibG3fS6j7g2HvESqj23svYgKFY3JKhJCaNCLv",
  "key33": "fjaZ68Y7cvNCxxjTtisrvaxvn6tHxDV5uFMDUU6QiRsqHAtSF3frGWi5LsqgNCWSg6ZiPLopzVj55bBCDBEerbm",
  "key34": "4YfurkgR7pZWokVah9SApQ8PgWF3wunKbTN4iM1nUBfiuYRrXQoHvwbSg1Jgoes8X4SKCfciYSXCjTCtG6hvuoVL",
  "key35": "2Hxj3PoSZz7uaC1xn8Pi4N4QtmnG8TfVDwcye82rpxNWNN8UvbsGwoUevHYULbjdYt2YvHXLaLXjxE8AhNbUi7Zs",
  "key36": "5Utn5pJn2SArRW6wHRY74HeBfMVyUz6Dod4TMyRt3CdiYDjsLtYr2XHALt1s9mnJQrxRbPH6iPyfWJtdd2Eyx4xc",
  "key37": "voFZ2Km8VMpnReTqqt5ijkfsqqh6x22VLKnNn643AdTKXrAdjWxYMgjxs5pNJYXGSqdW4qZKiZZ1ybjKYLCYqwV",
  "key38": "2bjcJR5pg5P8a4YnzkUnM2dCQuZ5GhPz8bmhjMnastM1PqS8UUuHisG8cPnNRUiGYN1j8wro8EbPdQsod96cayH7",
  "key39": "3KLDpoX91fra5muBxhWxe2W6ymXxQQRBPbZj6oHT6GryHVUzS1NbgWB1VeJhwDdDtpXuZzz3rcsoCt7kU57ekqch",
  "key40": "3WZ8VPfExuhzRhmCVWa2BBNv3jWw8rkQicug45cfM1TKgQZtCZ3h5YiNbv4xqRWwUsWjieiwA7JWjfF4EXMDd8Rb",
  "key41": "3W9mEVbKoLvjtU4pPhfxpEvnMVHjDs3a8DayR6geokTRceVFHtZKurEaLSMxtDLyHnfaWbiNTCVz737ajV9ZHHvw",
  "key42": "5KEHYdeaPE3BewbLHU4rN6rBdvvTdE6JB8uEJdUhnGK4SiT1FuuFRi99rz23yaRUgT3BBfJQmiwjU54BfNndjV2o",
  "key43": "5RQvuCQkqLDbJFgASVDrtgzvMdaMnEfRr9GTh7fLL3M8HRXb5LRYxbGZuwygU9dUpPj1enaAzrMQNdVKBp66wUdm",
  "key44": "39TJwMLq8Xa4qQok7PeRhtNp1xkAobvuUqrygYhEaoUJhFgUxCWVjVuAVANYTeXeQLPPmHT2YfYVMNfK4yznLcwS",
  "key45": "9Jfacfp7tRFDyHGpgh2KDSyNAuVU3ZwNSjP9NUo39fycSe4x6Rx9HHjFF3eYG9kzHZSmoXQhwKVEWWvt2CjEktB",
  "key46": "2B3rH89VSPihYX8MzYD1rneDQ6CpbxoDCF2oR4eSvEUH1Q8BtnKcCdzJ79zJAFemyp9sASZumJQAJhWMovwEJAhP",
  "key47": "vBqkwjjr3KtSBwJwbYR7UkTeGotyKpqxLh4TnWemMutCCSXC9N1ayBHw9vYEYA2HaChVDNLh3pBywB2aM9wyc9E"
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
