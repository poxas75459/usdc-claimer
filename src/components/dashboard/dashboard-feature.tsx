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
    "5QjHuuTF4judthvxyAgK5DydZhDwZRdjV7Efv7NTj1ChpxK5jaKsjHJD9SHtaYSbauSdKFojFfHFkcD8KHXtWnan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ndt168vNFtJeBiQdKLUzBbVGtLSjh51pMiP9czAbGW9ysZmTDHfpdfQhbgRYrASSEfCBqydhCC4NMiD8RxWqqPu",
  "key1": "5gfvCxtdakHRtVEhfK863749TDQUmVuyRbokUe5muDpQ4PiQjjMoUpdmnSSbeUFdzkAR4VdN6f16fYMpXSLRNkGu",
  "key2": "479pBurAhy6unqirqbhpvpTFhqDJ2VZpkry1Y1ESj4LztwKrifZAn6pYiVMcJxNDYbS8QsKcu3Q2eH7N2XgRpcFa",
  "key3": "3yEDNEY7tuvxCCzMJ3VKWnD4zbxoT7NFPSh3v2ev6gaNciMvdD7k35snJDQiLPSusQgH5zZRjtss8jab5DSzLDRZ",
  "key4": "5uPimVT8dxD1DVoccUfKRikyFFrMAfrqqbCKc9yczwZCT6uPWuqhujWJNmF7CF7oFxtyh6o2CsWQbadUm55M7APX",
  "key5": "531FcZ9RZGAZmFg6dNBMM8vi95JNGRwHzkzpu6Pe4Ahfrj4rMM2FnHWmrsGEGTWm5RixHMxhNy883VTeSwuuyZBS",
  "key6": "256qcQKKw2Hpon7VqujBknU3KHFLR8QYG3LYPkFAsApjpEAotEk31JkNUJQDXEvcTpb66EYNXvN1TTkJMfazUAcg",
  "key7": "5Xc8nvT9GrDs6Zx1QoXsHHvWqXKiRGuqEdfRTooEpZ6yMoFGdHTNXEhc1WKnYPXoznZzRocd9Js3AFsTMcKPZb2",
  "key8": "5gzYNnC9ti5deYwatPnAWrKV7Tr43cbXPBDZdo6gapqP2r1FU4U9jB5eUdXhUeYYB9KA2HKxNsbznBvMdZrtLndS",
  "key9": "3NSe6JkKVixyLGWejFyQemEJrsqa5WEz4ZWx6vyTJNRww7s5XLtX1Y81Jnwj8irRzQ83gRwT1qUgZz3SgRefrajH",
  "key10": "2rWgB66x5NdzjnRFJsb7spkWDRHpzcukhyRt4wwa9PTXdunXuQhCr67rCzun8EZ33JRSbf1kuxJAQTmKRAgM8U6B",
  "key11": "4n8YceZFp3xFihkuNEnea5Gb5JkDPDrHC3nQDgmGWK4XGstmsAQEiuyRptrxrLNzQZ2KifSehciWCoAkPJiUj6Xx",
  "key12": "5QA4rXH8LdxxduEidvLZ2R8P6iUYUsWpZ5TRzM46W4BYbzFP3FF8m6WMpTmLQxpdokrzFoiFhDEKnkLoLFHSVKm5",
  "key13": "6rR8qhiUpoxFijMGWvYNNAwEsztg21edAFg2J661VwctVJ6JcHLXimmwsbYCRi83Kf5Dm92ZSwfdms3kgLNcPga",
  "key14": "35xnQBq5PBkGUDz475jFUeLJsMYXf57jxyPTbMn8aM9ZqneH9XiBk1udkZ4rREuY2YsQsom8TwXHNfSANqkduMqs",
  "key15": "49iATgGZwGBK3Vv8STNBJLi64v8XCGi4G3TKqizpAn3DLnfvJMRDNo7aq9BVRWa1ELZ82fkjUW2KZFyy6itUuhrA",
  "key16": "4kxwzWMcbyf5XBjqucqf6epMwZJiVcGZxYpYiseNXzSZ5WgWAWGAdKACpcGwGMAZXnQUtTyAuRkR1bDc9agfpJRb",
  "key17": "n1Zk76LduUarYiLQJVDD49DfN4135hcvkBUA2oqJ1nb8QbSnjgJtNtzYpBW9J6fTKmiVUDFCW7oKQpRYGbicYw7",
  "key18": "2hvzA3DHsWHK7Bk2myxfU8E1D7CBNavtB7LLWmKyPyQiwMKgfUVnoCtNDvrpZYQBKwwPRWGjMzBP6oLQkhSDvmp7",
  "key19": "yMNKn9wGagcfjVKfATnKv8XTj1KNZUzAyFJPjFfUoE6wnyRaGJLaeyoDmCSmd92hGnXoEBKZW42n8D2H3MDt1kg",
  "key20": "3Zpc5DJnmqP5aS76NpqMYezAypffKsdc51HebnoidTML9QcHFo4vKFFPrNn2yY2bn6f8iSCF85DPWwNk7Lv1xKue",
  "key21": "KfMviw1ryHLWcpNvgk5HwzYG4D6YXCqRDFm7mGCAJP99kCniYbwHSVB7gBXx9QWMQ7sfxiY6iQfWRyhnkUPmQgD",
  "key22": "4stRpveDDY4mnWfMjZq8jFLwBAy8R2vP8vHmnvSDfbUhQoya9xK65jxgseVU2jPSaLc46UQdJSjRab7MimNsenFj",
  "key23": "3PCHRYp1FZ2HrKpin1Z1bNAotb7xzrUHQLW5JhbMB8R3DYhznC8bQcGPExMBqrqpwt2bM2XrzPeC1HjNZiX5SvmB",
  "key24": "4WCp47ckEB3EUuzvGu5n9f7RRNZeJEUoHp25bRdvsfkZeQymwGPYrqvJm2JYRqFaM22h6BNXp4Qu4WqA6SfQgpkC",
  "key25": "5KJi2MmXJJag3o9MxS3KG1Wd3vf86Ly44EGSXxpnPMepzWLKUGrjEyo4C1T6FkTuRLVG1cAHx4EZDayShx5MBYKX",
  "key26": "5CN8ygAsYJNUeJ24cpqUfvxVye5vczkeUDu9trWh9MiKQswAxiC5HYryxxvoJY9wZMLE3kqxseoatL9gYwcUEZa8",
  "key27": "56QHDeJ1Jkgb73yeu2rJ8CCwvWPc8otXtifNGK162KwSJiGr7A2WsHWJUbWfhFD8dc4a3rUPmZjEawYD39ZF85aC",
  "key28": "4mT9FEz3y1WSzTT7cK6QuYjveo4dzXm2DDakwX3cWWjppZuGCVkUxktivJA3F1iA1raGGUrioN4y8K6ogxhsf2ri",
  "key29": "3Wg6qDcqfU69dstheCNAp6hNPDUxSZVMfRZiNJZph5QmTmEAapNzFgvPE5yyHb6fSB9pV82fbw39BhCcNdEvzvys",
  "key30": "4wYCfbtEHuvw8fGiJHjyefYNJ4M4vdq9sPEFM9wn3pQzhhKVyXZiLN7V6LrBv44YEaAJ9QkPKxN3QQPqTrPJ22oe",
  "key31": "4bdgehbx9hwkkBraMs8XURY4f6nqt4XYiEanuNDyQazGYHVzanbPDMNdz2yarZeCAWua3KCHXh2m1chLo2mhUaeP",
  "key32": "58aGbkfhpD5aNRXCc5rqJNARFJdxZBNMvgPTTWMCdwi4qkkdZUVirPVgLXi1XTANTbmHBWjY8yBJ7Giv9CXxVevs",
  "key33": "3aZz3epEWgiyoS2JM5HraYTfQD4dXPrZU52f8DAPaAYqjTk6WCqo5jrzCB3SE3hzCBv71QnoW5joNtAMzyFo2vQL",
  "key34": "7HCKb5ezWPv7LfgQewFZCWY6FtdVz6qGY2FMQrEk2W5SgeCoxH1gKtznoZ22U8SyK3LT284eamxU6MB5dWzJADx",
  "key35": "2e2Efn5h1zXRJWrDJ9Evr8oCD6ctNbRgPK4VLCnLBnYfWeN4Ring334VSXKRBBdemP9VhWhfexMuEd65hPnYYBBc",
  "key36": "3Nz3ugNTWNH5EbFEeZJAtHzPQUeUDA1j7FTCLR59MLn5piDVnKvfHdxUvZMaXzo7LuNZ53TbnX9FPcxqG4Tk7BCR",
  "key37": "2KRzKxnKXtbUVutdexNX8YpyrWmV87cR6bRne4adfv3Yrr48JwFMXaRwxkXrjzMze4ahFqLZvmEudwYtrwG34GDS",
  "key38": "3LziqVvHh6cjnE6Z3CUkdVC8EFAHWinKqAUpsT87hv6dJGEAQtY4MvEnBaKyZRe5jurFU3cTnX7TsznjYJ7s158E",
  "key39": "2eJ8xB8Bupba5dxgEToZXk334EPwGEc64WRLYfzcfAHvGmECJYZKWaAcP7KFKVfM6aPMCswCJskqBfNWL3824stZ",
  "key40": "244ke1sRq1GprNY3FYRxeucr2M8CNiAn8pBM2jrxSynjZ6pNMQBWq84p9aEP1BLdmHAxAdY9Q9hCi2VwXJQt16Yu",
  "key41": "2ukR5ent8RoJwaGkbX4cE7QStUHqcpX6F6FWZz3mHgus1aT3asAdwbPbxHA6tth78PmywpX1R2zFzZxfgACanUoH",
  "key42": "3LGoPunJZQdLkXUK3PNDh5KTQFLHCP1gX8ABXhMgoTXDshqiGoLYgegjgoR4yUq5ejHygffbWA8C36PJsENtfQpF",
  "key43": "5BQfQ6oX7Y3KVCFahugbUFX7C7RxzNuxvNKHRg5FMXm6TXWa6wUNSxPY5bWt39ugJ7aWHpKcCbUaqA5WpwA91Qsx",
  "key44": "3U3Ur1uQjnJiYNnNBmaQXR6z7KrnJEtnAqcezZxyDm7VaY4NT6i2GctGKaGbz3BeQPKCExgZBCmCxJci2PxbPkMM",
  "key45": "Nh9uZCqk4Gv5NqhwepEoF4v31VRbVpWPMHG8CumhLVB4gosxrP7eaMyWGt6kocVSMnjMeTDsjukijzvoTiUmbRP",
  "key46": "2jSwW92YGUB9drgp3YmktzKM1tNGufEnNoANgSnJohc4xc9j9seTfNVCa1jVLiaDhAupF9NWQws7h2hDB9XfojzQ"
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
