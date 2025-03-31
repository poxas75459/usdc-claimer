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
    "2HGKThYC6Ko1FJL19Mh663BeNaKg5BnYB6b9REnenECCwrcubpnsHcVMrqPqk5CSG2sVahx7S7RTZ8j9yqXWDDfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Peu8dKifzaDfR9A1kX6Y2xh6EMR8EmxahEwLeZMd6x2Uehpirdd2ZBDUVdxncMyYoLAgUFps5gGW6v75Lw34SGg",
  "key1": "PgVaUNbQQZWFVBoDf8a1uK79UuxLeLGhN3WynSzYBjwYAa2d7JNdG5uuqrgAVoXpjh7aQwJEM4e1FVoMkdfbg8M",
  "key2": "5uJ1WuSK8Qn5pgzfPEEKo3jm6bJGBjmNmbs72o3DWQCUN9wtYEi8nxtCkqJguv7bXF6P6SBKD1rasTwAcLiotQvB",
  "key3": "3t18HRYZrRAUS2BSbHhEp7soJzYwRyY6m7WcWBsJA5x8X3uokkQ74djLdPhYxpfteygZETuEakGRWPWZ5dzuphAb",
  "key4": "3NM91Q8KuxCkqgpFSmwBJ5wSiHoD5i7HVb1RV7tY3YXHpTkeMvupJ4Leaxy9124VHmiM5i91MmDeraAwJb83NE7y",
  "key5": "4HDS6tN8WEeFCPCAsdZxX1Dee7xzhMee2WxdUGJZqFpFZTv6HPQ1EjA8d3YhVaQ4meMD7zGzKWBJHGXUyWwQLJCi",
  "key6": "4naPnSVZYGtzGQ3R7ahwPkvMQqS5z1zvCdmbJm4TfXcwTifekCeFK756wi74SbMnraTmm3Rc4hfuGS7GQ2aYFxHx",
  "key7": "4AUf3caHtUwpDhrwt6bkh1ZUP8DPKDNyKvzgrRMHEPik1f4XnBiqhHuyeTX3dFD48g1LFqa9JWyrXBD2aygeK5AG",
  "key8": "42HJWRvKZEv9VPuPD5QddSQE8zvRsXjsqp6bpHymZKZhkrQPcbtC8DeeCRszWfE7FhCvvUoMSTmLRgaTvZbeAG9p",
  "key9": "4gBYbB6gggdhoNCd89Wo1VyJVGzHPpB1ykwEzsjFGMTBoDBRz7b7fVgiNMHj8cKUU5kpfDQnwAxW1ykVshUzaXuC",
  "key10": "4TYWgqu5FZRcyikyLbDgFnzxvwSBYqmg5HPRN7RaeLFmahryYF1Fig1ExM172Jn5vDy67jVKCtpeqUqHEJD9frT3",
  "key11": "4uS27gUMJkTNUnkuAQCPFQ1qrJ3WaE4ion84DfHLQPQD49Grc2n8faJeqjJRYiQUb2eQB38T2eE9BuD4zg2RJxLK",
  "key12": "E6nVGfFXsA9fkmi9NBtpFL57LGdnYfuF6M49RQCNLxW1npqEzEaGP2hrBnsR9DLk3WGQdpMutGdAFg6Vbz12Sv8",
  "key13": "wx1ZWziWQi4vFA4AVmgjjqCdTsjKra6YBRosRTH75mceQeD3UufMtyeEHy564wU5NtdU9PkrnRF1ovK7DUwy1Pv",
  "key14": "5tmQJGgR1wYy441xfyAZjYsefAyoS71K2ShswdQrK6cEd1o756nDnGDvg36pp5qtK8v3nix8XyKDnXmwXqLCRaXQ",
  "key15": "2Utn1R6e2pWTJ53ufbrYgV1xuPXr5knuho5vLoSjsCSEnRDgMFSsbi6o6YsXyQ4VUNCq3JfwpqmdTMXxtTLW4yE6",
  "key16": "57bCLZH1LY7Ri4SGMNW1QCY5UznU9py1VtXx32ZmTP5rpbxtVk5ciDBfsrgJmd4xWbynY2kfYPVm2iNug3hPKkXX",
  "key17": "2Jr4datxXrHKSz9PasihWMWPLKR1QEf6v9JGiAEZppspjVMvdCV7Myf5JgwXzUia6nMng5zsUy654UySE4NXZqDQ",
  "key18": "5k1kpxjUvZPTtV8BXMXC7CS7ntHArpxn4u1gkmEhuXRs2wQgqsYH2vhPKegnDMzPPUx7fRjdgBBLnjCtJyw4JsFc",
  "key19": "4A2CFUPbwzGKB9cHGw4uDJx9VHUba9RFbqoWRefbWrpguWC79rm1HvTbknWNVmL8aBbCRf4e5bMsHDUkKkd5YBWx",
  "key20": "28f5d8t4dHRngbKbgQhTVtzEfkSnEr5CkeNyfpQ8vphyjmeCRikhAnp9rK17RbLh6pApkkStTsJZBAMy7oJVFqiz",
  "key21": "4YfyPiKkLJ21BBYygX7P7q9EmViQcRg3RhFYjNScu2S7kCaTdsVQ9iPAv5BMiZbJi9YEJj1qpjA64xPxc2mHcwRz",
  "key22": "2m2iMXooZk7nP2VfeBzYf1pAWKfrXTJVvA9VCUSHqY3W9d8rho3BxPMBRryk8MF5RihnnmEkUm4zyNquog2ZchSN",
  "key23": "65QzM6KCiQgqErJSWKfWuz9GmSRsT1EftpHYnB3NimFXPtJnhBvHxHmjagYiBD3yMz4L53sz25nbxuNiR9VcT4HN",
  "key24": "8ALNrLWVjKFaFixkyt65YBHC9eUYrUgayW4XTCvPpUUWhzsctGGrmU2CZ2g8S75QinGC7BNKoguWzvnpr4bHze4",
  "key25": "2VCLZfjQuMPnbDVrHvembo9ycU3GsoKLVuqf9zG2nj4ndEyGG7rMeokpz7UTW4M41XAvSiAfMUxT6H6GJdV4zYqW",
  "key26": "2ms6fxVo5dXu9RZytmAzdEhUmvW7CaZgRBK3XZ6Hpi6HXvArDMAJjjiPH7PY44t7ABwNHTmBvZAMxE2fFP4KCwvs",
  "key27": "3EHYRZhTdPS39yDwTvGqbQGYbVpVfwMGTwvs5ich7vBkqXXJdvMERjneHN9tWkrwR3a6pstSpY596YG529xXfqeM"
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
