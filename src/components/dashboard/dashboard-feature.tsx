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
    "2Zd6ogCCEHUQSKc4Hr6WYC483Z9KGKHYU7z1Z1v7uM9QeVqT2Caguw3Ji5UZfKZNKGSSbSBGqNJJHU29yiHW226M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iWKfYA2DXp1KywinXUm6EmvmdBB62Js3aA721cBXPd9GnnFeYeK2ewr2dyXesB2YCXfKdXcV85dhX9mnUDhcnra",
  "key1": "2ySxqeAFJGVqnSVbqh64yTjxsNDVcR6jQCpfEnWMLRtrwnqbecT6E3eVaY8gH6KCNPQRsHnz6qn2tUFqtbToFvPi",
  "key2": "iCPEp3hpyJTcwuRrWvoQne7PWuFATA42Ds6768CobLoqHSGKTYBCyMmjCr2BEh3F2TFWxfgC9xAqBNQBEXPts7k",
  "key3": "4YyDFfdno3vWVFiTvBgUVbNejvnPw715AjYZun5cNnd7GtvWPeXtDFWb8shzmmYN9npCkhqViQVnxnuUXftpJymo",
  "key4": "57orpJjUEYCESJpghKk3yWAEqzzWTBS99CVj4MaZcTUiEUU3wmBDhERJHXrLG8jULoC4wfmrwXoDiZkzgQss84Ls",
  "key5": "TPCExckP4k3NBiBPX9W9Dj8GC3ncjKhmacbgZonw6A4vBgFg5owZZYockj3hn1sXvaXL65A2rfHqavcogushYyn",
  "key6": "3kwX6VtV6FWxaB29aJrB8dEoCtAxygsWzD7KcGtDFSuWVnakr1C24JL7e6vgCUk4hMxJnwScGTWU7YE7UkTipcsW",
  "key7": "2Q9LV1H4QGrYtYowFbk48Rk8ENsYQh9bAQuvjQN5xxF91XpUrC3RPvRdcm1LcT6RcxGtuKUxiwyWeazezVANw5Nj",
  "key8": "66wHZf6zbto9GKmHHdSxjFSSNxNXvehmQViLZXuuCd6NbbNGZnka2gAmLNu6XGa1VUiwLTTxSD3LPaMDVPkcYX8L",
  "key9": "58BYPfWPj3wcUBdUKD9m7oqMKbzH2wTXnBvgJxmdK95zDCy7ZGHiby48No7MGJoN1bDnBABSmepA1bZpzAm35HRP",
  "key10": "N1EbQyx9xcC4CqqLuXErEwCG7nirLwfJrKhLg6LEe6TJkgT8MkLDAo7yjjZ9y4c2GMrU9USMLwqDB55dTUJJHur",
  "key11": "2wmgCNm16nR1R9cgt6EQJqhgkz2kP4kwBeLdc13q3Ko5nYPSCmNmBEAeLkoMXZ4GpNBgFJAvpFQyNHunrrM9UYnc",
  "key12": "38G9ptsL5mouewpAw1J4TPYHYe8PKBVFLhdPMwLuETksvcugccWVTUTFBrdhtgJWmcJQHSM148k34QpT7qv8ty2o",
  "key13": "3vgaGq19f5gapDUquUFMVhxVmpgvfzovVrpoKVfkdBuLUhSUvG6eidrCqdRXEnZ5Doc6tZzmjhRay59HfFJPNskU",
  "key14": "3rePRY5V7BGSL2sxjxAPfc8jrd1QAL7Wv3hAgWsY6rtpNRrUJko8UJvgdgv5oKBgEs2Y6xr8LV4ZPHjynshxe4Sq",
  "key15": "2SDA28znpHyDoC6i6vCsCvpxL8Xmp8f3SbHjbLD4C4gDPa5RwbksXMeS8DD9rdfyuLx6KgGgu27hJC8QHJuwWXxe",
  "key16": "575kDQUwtfXEb4w6MtZQZ55ByHQdKtgQFfwV7dRQoBijrKFRnz3JKoY1VQ7ryePcg1wC3pzAdoAJFQNtjSe5WP1v",
  "key17": "3qY6X7TpvGtYMJe45YF4SoNhrSh4wbcPqUsq7V8x2iQTutMVH8wR6NNwQ1XzVmzoQoaDa6rJMAE8GJwwDHdaPH4h",
  "key18": "2fcyo6RnDzpTP62LxX1CGxk4BEbGqW9fzBmj1qX1KBcXwx2RhSNLcXMiWF462i2LrWH4oocAQW73ptZ9cGWrRp8v",
  "key19": "5fAaagk8LcwChCRodUqGKFhVJdoziwu8Rw1gVYLa5SZMGtMxFFXHLwC8z6zzjmGJrTF7CMr1UNKaxB82E2U6AQAm",
  "key20": "XMjKNyXNDK8nBoUCMBsMWsKKFEcgsMvrUpoZcJNPoS5WNW4TFEJwVGMrswavfsVAWp329M73K7BvKtT4WKxeHGH",
  "key21": "2KNidxx3YbhuykxtSzGTqQskavmGERBxeYgb2XsTUtvPtR6hsN8j7hAYSZzvrWZhURVRdvtBS8M5JQ1VNMbf553U",
  "key22": "Gk1pLp6N7pMntNzAp3WpNKyhLjkceQwsPEAjiASEXMTs7XxJ1X1Ak38PdodcNzMGfxuB9RsJNwaXEyB2B8CYweY",
  "key23": "VjXwTJ5sBuuvU5BzKUcZBzjSij9MT9quQ24z7jm29KxiHA9VNCMV2Q837PbZuFwPnMXAHNApvg8Le4xLTdZBqC3",
  "key24": "5W42CcX2aDRQ5zSGhttLCmzqvzz9fYv24ujVaGqcY5Y1MxhJjNmuWhmprmMJkb8ri1KyXis1wNXwjQC8BHx8BhYN",
  "key25": "3Di39hZmse8HWdENWyfMRkP8mJ5ocAXXGUW5FR3URjr6jaewb4ZiTQr987votFo3VE4j7HCRXgNHfZ5dYkXCrvHG",
  "key26": "4c2cw9o5VsUCLSUqnQrqB4Dos3oW2dviqWjiBsSCWBQbggYCRm7FKhBNPhcJ4bWBy8PuEuUtRxJoYDRZqnzUTnCu",
  "key27": "yYRkPUdTHUstbvsgxdTGupquXpZ7j4UJmyAx9TXmp82Swbk5Xb1ZabCexatimqpWwJvuJkWvSHC2GSCm9up7A5h",
  "key28": "3zuvVk3K3Jtvmvb8wDWft9kHr6B1uEhtyEJrKCq4niqamnLEpqSPAJCqk8LyVGY4XgYuiDJzU1FiaqoaWVF8T5zv",
  "key29": "5NW9Xc3ziFVN1dwiE1dbrJj52PwkCwntyUqYZfAd7oQ1syt1vntV3YeLBzdQ726saKJd8obY8JaUNZqZhJFqtXC2",
  "key30": "2FLd5RawdzYJ8XzncKMwtEyRyF8R8XCvnAtZcuVXrhwZmZevigpS795QM2L5tscENPZdSA3fY5LUVLbkReqiBYGT",
  "key31": "62xDk2ysys4Paen3s7uVQnvqjDGoHNPJjLk4Cj8TR13e3RqNhkbBerruYoXJEwQt53Z1xyCxoVt1sN9Yc8PGASbQ",
  "key32": "3Uwpot3yc4LC1hXUDfFfubSTFomfPa9d3uydkpL83FDWcw5MVLvj1ZSS67ZWbrG4AyzUZaDY3UumN51wHNWH6egJ",
  "key33": "2ANegq9nGXo1ZCTeD1vAZQp1djPwyiYePJVX9mWM1dGLtcSwxsgQDL59sT2VAZEFuQ2QRWTmKVkjoA3WvwZhpR7a",
  "key34": "5SGjArzs8kB5cVqkzaXkhxN5cRCvRxKozVAKQAES4URLietrfKFbE2e1D2hgVh86bF8soMdqJLQ25rd6yL5NHxkA",
  "key35": "KWE1Zvydk1TiYEYqEkcBasSJUKL6BNmhfzyN7aqE9M8sayX4VQabb7X1UhxhNuqyLAPpTkVeQRFH4enm6Tqk8N8",
  "key36": "3zQve3uwjmY9QwhnvBu882ZKYZ8AM1AmBsAHsHEkswzecQv6qNudRmoiZjEKZ8cFyJCMsbSXVvKw57ojRuZG8d34"
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
