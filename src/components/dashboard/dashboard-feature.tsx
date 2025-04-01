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
    "5A3pQUP7zArryNVYMT5aZmeNjtF49WUyPCNAjwfNEamEi1zAmNCwGTjkhQuu9Ta3MLED9wnei7zQVumM5ZeksRLt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GcBvqnEsEjGPY8peTHEpDPNjnSH7wptMDmdfVkV716hRRhxnGpXTM4mYi3w25m59SnTdfVibWitNEGVtUy9AXuq",
  "key1": "N21QcJGYqxJMAGxyPzpqvGPNchQqs6ugMxLNNibFTAnbwT9o5bX2M6rJ5dP76RkRQbEjMvJbGXp7MdNVRQHy6eN",
  "key2": "B95nc9UwG2g2pyA4qKCjJvYyEN7VuqfYBGoZWfu43gtwG2tSTt1asLHsjTwcHGyLQ6ApvR3oDAnf1ZYVYSwbfEZ",
  "key3": "2QdR9TBYQLoJB9LbmpUYJF6XTaguoVACV5WhAoNzNPDNQT1ssbvUi5NMZfSRxNXNMUNKpuLaVHhKQz1XVUH5Hz3e",
  "key4": "2uicNr4wvWAViS3mFNBNfnQqw9fRKyS3rMpDsXMnTnJRhwwFpwQYvqA9ARVhYjDNjygeJiLiiHNfYVAQExUW5qnA",
  "key5": "2nXy3Jx5iaTUujnZHK4q1fxgtM3wSbLY1zqrukWLxwNPVrvt9cRJWbfPWsy4zq4fzkvXmLzEg1gMU6sw4yuxvHWH",
  "key6": "2CUk6cfUbi23iNDvGxuv9ebwX8hPFsXfY5EsEKnrmR3rCRXZjubg4Qioruf8bJtzo6uP4WcpjCxbyp3CWtQRA4GU",
  "key7": "2JusLiSqZpTJFSmBR4N6bdKJEXuUHkg6u6zzd5tXZYhkQB593bHAhQwS3zhEtMMNTw4FWhVQrSYcs7xxiGd5kWjB",
  "key8": "38gqYAMLzoHfMxF9i5qafip95MhWP5fSbesHicjUz2EnWi96i2fxPSPDDDrXr4fP1geamwyWmPZQVNU8zjv4PpS6",
  "key9": "3XXj9VUtMXuRv8VxZZ5KCk7ioQk2DoP1u6xJFo1e1AUetwypotz7ErsPu2DgkBpF8GpADAuyNwm3idihCuDRvg1d",
  "key10": "3wDASDWJgdFrZdHwJ4V5vf8o8aR8bpWyEUhHqYRE5pgJXVd6mixNJXufM9QGgBp9vyuxgGNm1JDBA4X1KzLXQBG7",
  "key11": "mmCznCqJHv2frdTJy8WUWyZuzpFWMmhU3Yyx4pMFUvHiFD6vshZidhzP1Xjd7CfWNYqn37zPvpNiCnPX48dMi4a",
  "key12": "3RhFCt4H686pAPbuQieAYzNsCVoHrcMh3yrRQD9JtHXD3EHa2aDCKrMjbVXSCXtBuiokG3NQmqEFYUzP3wWgrz8Q",
  "key13": "4VuJoQMKsGPEJAAzTp4A2dfg1HiiqAswTuwgsMB7dS8NpJryvL55wDxRsGaQ8KNiEfwhLqLSPPH4yDnNPByn7HqT",
  "key14": "23veAoZAaRteYv7BnHXVaPNPicbYVosQDhqULcu6EM8ffJb5fMEzbPxjbQcWNbmfpiNAovzAHWw2UyGcgqSZSpwg",
  "key15": "3bPGbDF2DnbFeKCK7qrhprgwsDAvH1Xpd4b8s2sckq4NnPrfLE81gKnGfAYQHHLJRojvnhJXEp8JiKsNBrz4LGro",
  "key16": "gGRwfa8yopDEFC2WXvpDhz9FWx32UQh7C1PBszsmJx2pqzKDN4FwaoBscD4Kf1fUyubJYhPnR3hPaqn5J4tt7ZF",
  "key17": "ooYtX7vfHajSWHsEkvTf16tK2iPt2VmW6YGR6JCiUdXV2k3RgK5Agew2jCECAtANTUhoxUdpVbda8eezYVQG41Z",
  "key18": "4AH2kbfd9U435XefJnWUY3iZRQ29DmSC7YqUtuTA3Kn8J9X8a43FAh72DPTeFmHjh9DaNPuyovhMReP3YxTbjpwL",
  "key19": "2TVtyBbU7T5qSKB35ZF28htugA3X2xLnpQH5uJ8nQxcmTLYqP4NzstzkzvdVJKKP4PvUhPUofcJdK1GnA68Sj6Zs",
  "key20": "52bu2vtus14ZCw4GBocpeBnRaVHCv5kkB8EBzuZ9dbPkr7KpPL5u5NASp7RYkFGpHmyG4fNReJepgo2vRiUUnFK4",
  "key21": "5LoivT9ZCDBVG6KcNXLMuagVoKq9dGGARiPyG73EEK3QVvPMbkYu9bZLKy7hNj6eWUHFdAUBuqfh3VUbv7zJQNR8",
  "key22": "2YoooVy9i4tCc1JY2Q7ytrmoA8JXRnyUPwKemLEvDNw7kP4Zd3APRyrj4NckZXeJKSTbSsAhBgSasbEgUrkX6Mgk",
  "key23": "3ThpQi3xCWSkPqhcgryZdcCtMktN5boUoe8W6ePwhhCgQEX6oPx3HZCoesnqMg2mmBz5xgwTfbxSAMqGchQLwrdK",
  "key24": "QbYG7EULPBPaHeqNdZAoHck1mRtHXVVnYgzuc3QK8V6smrf1sq2atBDPmPaRDmy1EW1c9pKn6f8oKHEAsym5Hfj",
  "key25": "2f9kBviDL5KYorGCNUJKdrtfQMcXDBn3BpFVEfawX5gARCVHYCmqboTCtGyWjJWUyfkDcjMcNSoXxXTp25Ui6Gf2",
  "key26": "4GudBQbiuR9xHsj3gx1Ug6GZAdyiJtKjX4iGs97DaSZT3CsTh1FwVK56oqD8W8fkUbf8UPa6oD9CRfjWgoWbgHT2",
  "key27": "5onBfDGbEbNSMJS5PQhaYBGbTgi9cx24SNz5ScgKztaYHzVijTcAaXadZXtgCFBdE8oYVTPY4Yhgr8WuLKrtEUfQ",
  "key28": "5pvE3yFF4uQcnnshFVsauAqie8qQSFzNJY3XQJPwvdG8rPTU4N5LmFcu8uhRejMvozEWd4h97mMncAHay3YZ2umG",
  "key29": "3A9SGPBm5MV6kmubTRgsCvHAyAfdgvWkxw1uEmUFQAmCCnFCjCdqZqNeY8Av3b9YjYSqxWUiDEFi7iNQmR8vR6Qm",
  "key30": "4TSFavckxq13VCiJDYwZwFxN1wLGGv5oWhpTNyx1bW53M8q4aw2eAWZ1q864duzocy9jmRi22iUj9KdLSeYuGUzj",
  "key31": "5g4MBwKAGi9E7wpKETqAmMCsqbAQ7gEniDpnk92NZszGKA11mw2xNXzJq6B9ZFdGeQLMfh8njHeEvxs3VMoFwX6E",
  "key32": "3eN7ZSFoyXzf35NR7R9RPBT3R42B63AjKvp5FaRxfrGhCziGLfmKa3h55nCXTh4wyVbMw4bymdUHfytq6rTofFWN",
  "key33": "2XwNHNksstAZfBUoRMkkpZ615oKQzaAPoibqsqB1Ahmg76RcVjNhy63GkKzhfoCjb4rskTp7wdf5eYMaW498r17H",
  "key34": "4aRtVwBH1JYo1iAFP8yVqCqAxpcG4Pv1MMkRrmZ3B1x5RHwqp69ECPQ8SjRrf7AZ7eUWWvjFNcsgxAzcLYQuqXjV",
  "key35": "4iufB4zvnD7A3uHLZa1wPYYmF972aJSMV1RKVHxBhHntvcVWYdjehmthHL2LDX8soyMUqe9vyEA2cphFBdCi992z",
  "key36": "XTrmyiD9Pt5H5YsM98ck5yFthdwim9HsjLe2BW2ASZSmeLPVny6hvGxLbbSnHaU4sLVXZ2NJHAqy1uZWUrk9E8J",
  "key37": "2WTvBX28wZsdBnyxggPWp3qPVmpmwgH6CG2Spybh46SmcuW8ybNkJ78rV2rhPCmxnhCRqnL1Ln4n26KtWDerubZY",
  "key38": "3YwDjvntXDZrzYVPCitqCURZYeFf2z99vsH7nqoTQBeLcT8hsMQ3ptompCSBWaMHdpv1E7gcJyne2YTaJ98rkJpw",
  "key39": "3H2xFXMDXjsKGaKyiYf9brqCxt9zNcNnCsCDA21BC9JZisJ8V4yZuhs3BNv4VzyuKEoKnp6QSJFiDPuhcvwxaKJB",
  "key40": "5MWEFTzjaSzWdRkiso3EXzb1oeMsmmhS9TxBQJngp8thRXdjjS2BW7d48MjwjVuToKQq8B2kkWaidCu7nDFqVcSX",
  "key41": "2xL1vo1sqbrjotoDq3EsKg5srw8bfBVg1acdeSmD9cDR2ZyYZVaZphisaiCtrfERdE6tueJyPfuiwXtWhNbi8Ugz"
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
