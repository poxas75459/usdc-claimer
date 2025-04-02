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
    "27411eyirBjjWuMTy75LscL843XeqiQs1wZ7jXqhw5KHZJZDS5D7U1JSusuGPZjAh8wN9PPt2dWqw1q1B8syCs11"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fef2dAJ9Z4DoEZCxUQY9SqtFASfWZPACVZyaDEnpLNy5o6AFeDwoJDKSF11F9DVf8qWSKB9zZC6H3DHQcBn8MUC",
  "key1": "5GTG5ZMEV2tfdv3xqkYfqRa3KQNZouZvPy8VVpUcBH6hu1wdCE6aSXfRMvo8Lceu3ugL1iCUb28nBn96GLLK3XFu",
  "key2": "2potdv1z4U6cnUSjHA9G8XSfNDYWA1deZxjeUYxRXwfqbhrVhPChFAsdWMJL58HWyH9Y2PAmdHeSJrYrCFXa5Wj8",
  "key3": "3J2aa3syKfUQwCKWzk5kA7sNRmSktj7xTTKQqc6E1S4vkr53xLybD5UXNPSGfYLVMxQghAstiJkVDh2ErCH2cDPN",
  "key4": "44ZVPo2W5HyUknNU1ArVc7qXUFi6xWVytA7Rbb7shZjfKdDvXCzPNFfjQQaXqjHFyRHBeui2Wr6shxtyn3mxLcHd",
  "key5": "2xoDE4JHG3sAW3S2SUb9RXWqzgFnKupG1e55Lg1snRrY9QybiU1ReMNB6kLtxYRYwCHWHdaLu3cWjefrhK6LPiXG",
  "key6": "3WCKpMb839dM4dXpJQcTxNXhGGyTvRmFWfhs9Ma3Sqt17cpKuaUU4K65oyyfE5sv9Ad8MBu5krCcAHkw44GpFU4Z",
  "key7": "3C2F4MJpoU9aMaGwmLb5Ymr3BdEts77MZSisCHf927zL3Qo7MD4RcDKyp5TT5TCx1As3Uh5h3ofVrcNVEXyDxYVU",
  "key8": "4EQo7LaeWEtEias8hx8ZaQ2NgEyXiEWeUtyLu9sdFKaKBLz12HU8driAArg4jrLrC7zcCcAKjAqEepbD2newk9by",
  "key9": "4ht4ZBQofSKqwA2uY2x6BMW3grkQYZ6VJN8Vo1itCBcEKMiu6FrDXhfCz53Cha5FW96efPxkrwbnsPTUTahSTWWi",
  "key10": "59YE9DzQVkuPRK225NgyeGwik3976D7z7CCsTtrQXyJj2Lpx1Qqx7gPrgNAVfygXBWhPQTFNbnrjDd9a2eU3NCKA",
  "key11": "4c2qjAePioeMQDUmu7PGmKKkJtzhVUq4Rspz9kRYv7haseKDvbg78BnMmYC919r9vhUSYge9VsR6oatvAGNq2eaY",
  "key12": "4MFczuPwn61AUnoWxTcnMSKCfTTLGSc5Z5iXWnF7ERdSNpuzT74kyAWqfkCVkuTqxcUbGeTcAJGQi7mSWEBBm48t",
  "key13": "46d865rWiU3GSgqNRGWaLqjY7WR2MLHKN2hc94gE9BQttE8AXo6E5YAD78FhbqLBJo13HjF9TjaCMrHoSzykDH7D",
  "key14": "61Tv5EkCwLatHdhPTLDboLpZcpyQ4TuKkfAWuKtKCago3NyzrCCKktonMFzXfkwhsPbztu7vAfJBJQztjZ54DZ4q",
  "key15": "5csDjkjmfBXC7KPXhm3zWy2jdbGAYSPpqCS65eQF27v2nLP3TbBvY9tvcGdKy6KkKX7urHeLmkkuHbpjEqrEGUDB",
  "key16": "4uKb1HfX2tVudZjFyf9TtfN3sY5Y1LJg3ctqJTr2wBjuHpf68hhFWBABNJq1XdqmZEyKoYcqjeh7qAeJzHqQQsFn",
  "key17": "5Y6Cz5X168Twj3bFCjY5TCabkT2sYUGCHJhUhHd7CbRtvZ1zAoecWfZXpVSNFEpuqXJLSDazEk7tRvqsnKJmFgTc",
  "key18": "3kPYWw1pZBK7KgfSDiKgebysUnAxj9E7qqkFnHeivBPkA1KHNDGPBL7Ui6nPkNRRNzfsdkafBvsc2QErSLxCPtm4",
  "key19": "5fVjQYSsjH8nrffhBcd2zZ1TQEF4L4HYUG4axFHApjyZX7LBx2V9JkcbkcNYJ3mDE57oybpwhGz9cAojdNNcW4TG",
  "key20": "K6m7qJzm4AFuwHyTro2Qr1kCtDsGrLwSrLKnRYCYfuXrrNs4PHfNeYQmfKLWmBRDYBVC7VuaFR163Utm5B8mZjZ",
  "key21": "4UAoS6rusLcRmpwY35uFjRktQLgDsgGY33VrJCi7huTf4jJVUgDWXZFHGiFWUwmWW2AzXG2Ke5BkZXfMAHSqARU4",
  "key22": "3SgjACgV3EWHrmJtWoaFskzK1cuuH665ufF4YNRwPUdtKMn2BXZ19cgCs7XEyCJNroRAAZa834TwYrhHBx7AQgHK",
  "key23": "5m9RRVBxmhyH8H3uT2Qo5D1Df62g2LjyLaLu2r5reqNfZfJyogMgSVE2cy6a28M2rj2JTbTs5He7j3fv85uVMvYj",
  "key24": "3qsAr9vbeZvJC3tvCLzp2DpNQQaCt1puna7Z9eR8HobRmcJQvjo7tG5htfzdjNv6XER1yyWhVYTKChPbTrh4V2o4",
  "key25": "5hj4wxm97qp17ojZqEEK7yvRRTX2LaUcRsgZtULpYRMLm4aJm25vrun3agPNsboe5687DeAUxM6PoCKFZEsY91nf",
  "key26": "5rpmjJ6K5JKMAkbCj2LvUrds3qGN515UZq1LEneiDLK41tSVdRznf5GVFgnknykvvrqV6S1iqvsut49yAGhoWUru",
  "key27": "4vZBfViLAK1BiNcqCqBjcbF12ZKKG9bg2uZPZknC77yUL6qwvq6V9uBQ2ggvQ8SeZHghVfpCSiNNJAgGyx2wfj46",
  "key28": "4aHTp7DMLCizB2gAYVyj6RsrxdpgorcsMzqjeh6AUs8NGExnXdGArdyRnEJceLuNESGbh3TymREdRG1PXgDDrzMK",
  "key29": "5Uu5gH8vHhZ7fa7PxeRCzM23vGB4JdnT5xMg4cQkSB5oonKy6xaBP1yMM8KmTUPZYza3nghp9cWd2TAQyZhSjiKr",
  "key30": "33f3rBg6ybTzwEscpr6xMstw7hQfWKbHqV2SFCwR5GFHSBbcw9uNNTbSrZpdRApwzgd5hA9fP8quRvzZYwLD2y8Q",
  "key31": "4hKRbztvMn2GyWkjx97ttZDGVtsYaDmRR49MX6nv3wgnCvcfsjgiFouj3Cb3qxwX7v5xwiDHv3fsguETvbTo1hJc",
  "key32": "3UUbxAixxP5dLcAEWD3GNJLuXg1kFNpBcVALZFUGkhmQiWPsammmVuUNVKkgCC7eA1kL8EyYuGGD1aBYWTQo3PRU",
  "key33": "4Vzf8XgRCZRmiVpbRgT4jNcZKZ63XLcMSsqxsGpAiB7uatjV1UrDykqphEpLpTjsSHkNVrEu7ypM8Xj5UuTk9ksw",
  "key34": "4QfiXmf4aHeKsKVj3Bz8qS3Syis2GKys7kVyy9m2WxMu9gtGNT5HZgUTo8eGjm9MLLssr21RsZyP2fPp4cZDZcY7",
  "key35": "3XySvcYvjkPDAV8XkWkJpaBdU42CXrSCVvxghXhnbmWu3Bqh2soQeV37uSo7DoKDEWde2RSQQBPEaCQq2uWqVBDb",
  "key36": "2Et6XRqNhrZXCv6uXYS6M63ieyzfXWxuuBaboBS2YTyAN24HsBzXTJzeHTuFhYYYjyA1SJC1CwUcqd96XSueaU17"
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
