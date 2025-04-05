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
    "4ha76LJywxU3CFBpfD99bTukzjBg3h1QztoXEMYsaJAJU49bC2ssQj9XaF885BjRgN7FN1cESf5bHfsdE6NGo6ik"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QV3YRHU5QzTVkcS7MXdfDCT46ydjQSmdRzQTUHKU9xP5bt8KTzwwfPbZJVUe3gHk8n7QaR6qod3ASHnQrcbe2DB",
  "key1": "ra8qn6s3siLhteYx4bDX3iDAFPU5n4U2DofytuxsExMhTCv5uD7h4xchx6ZxEQjBB2KQJpUFTAyXSkggQDsgbnb",
  "key2": "48hoxdfqyeAq3FsNqdntSBj7wMq4jCShq2Tj7cGaqT921AHoyMdkbo5KF5eU5rP9PLnghWPJwZzUVMUSQnWtcCTX",
  "key3": "5uom4LZC6D5ZqZnyHpVTKZS3hhRZJzNyyNL4SpCgkGnSBECUBbhgWqLj73H2NWgD18hay1qjCC6CbJtb18o7MNzn",
  "key4": "2CD3txcGaJsQNj1iy9MSdBWmenzGtw9Y7sMdfXGtdoBMZeHiMSRum2Q38minbKDx3FUzEusgPXs1LNn6Kn9h4pnC",
  "key5": "5VtuwBU3PqHgGE1vfJRPqYphwFhN7Fbqbku3x57du4x2GY8bQ7pGH8wjgDy3gZscrVzpMcsrvNDGoCfenCZwPL6w",
  "key6": "p3QFQPonf5wBg4mvE5DKtiNbvCyXkBmPSonUcuyyjcYbwAcm2P1nchARamsJc4pfLV53Z3g6bHMU9bcv5dPv5sL",
  "key7": "4fiHRTjnLnYWHnWzveZzWhEvbSguwSAzuA8APy1cQcqvBWRrDUoorywLUvJpNpW2TcKXkyYjXWfdzSybczzvv4Wq",
  "key8": "4MXFw144huXWTJhBdQ2pAR9X44q9w2jbguxKG1xaFyzeEpFcTEXV4BCH3wEZAxhEfsHFTNEzSK2T5iYPSXopKhZR",
  "key9": "2w7aVCsnwtxBCMETYSqGf3prFYQw2Qf7SHQEgXMYom3dTZevG31T2KKEsVFfEPuj6pjdhDwHShWAWxZuvzhy1SJ3",
  "key10": "tTyWaiqeepMZ2WGFn7AgcCKL2xJn8VNFVzmErE8WvEzKMunt1AzBw8hsmimNZr8jdQYk9zL4H1oNbgJpubyV87L",
  "key11": "5saWSeX9hwzqV74mMmKBfZAtnBUvYdMGuWhqR99P56vwSeKET4DCNyf4E1NmGaVMSrJjfKPVXBXbYE6JM592LyD6",
  "key12": "vExy1SoyF7RqywDiCm6W5avmYrja5XoiPv2bPqbHJc9hTcS5AkpBStsaRnPjXBDexomeVS9FzFdQV8mkBGn9Rmu",
  "key13": "536mwE9674gP7vaXfaeJWjD9jufpUibazW99SCsC5zaSS9NbBc6osn4uGdttCSR5qfU25PHvmxNHPCSM6SyqTCqs",
  "key14": "3U1RtX8n9KQBLVC36aQSGRRuLBdCAkQxfFKDEFUjthQWZixCVkzMPhi57836GCp4tAteJAuTwCJatsUqEvqKJBtv",
  "key15": "4TnCnmDh7rNZdqW3g9ee1ZrwKugJktKUynwRiZC23qdMvixCeLWtFpbScpe9m2tuMmgPM4mZV1XMJHG1z83dfA3g",
  "key16": "4YUjmZMDjDGekf6bmDNRxUUraLgDT5xLwJrkvPcQX8PtaN3CbjJVhYxgXKEXkFyWMQVp7gXppLeagq79TxK8Sagz",
  "key17": "7ic7nUiD9BUdxqaq17kGX42G6opkxDnUrNM7gR83VN3DYKBcvFSaFmSerQPPLNpJH1xcSwbb1gUZ4suwUVZbSBG",
  "key18": "5q4drT3QfcNCJ99iFDzbLFaR78rUoJci3tbBhrkpQe22JDuXLtDdYGkA6GVsDPGoEF6y7DWjYehqWQojRz3Fy1Gj",
  "key19": "4uv2Dht7jGCYdbDEyre7vxFrYnJa1kJbfignbAqu6o5JRDTCt2yUw9LZnj5pkCxkDMBixZwLixyeRs2WbCAF1gNd",
  "key20": "275WeGThBjVyUZTZKQtEQ4YkeH1xDDqWkmyf1BShD7jAiSAmmDaTrNRqSiqTUVEryoUXmzoqcpUsgV79wcn7bi65",
  "key21": "5JTUZbm3dvKateNogNXT3wR8Te3gPJniaZoC7yWPFppcBnkzG137HcNgKazCgiYQWDW1vK1A3GtK9weVd2ahSxj3",
  "key22": "5bbvLTvViEh44uf4RwV2PLAmoUgqe7aD5dZKUE3SB1H2ApuFB5F3xtozMDJMLE2Mgy38UexV17xbTQ94myTBH8dx",
  "key23": "1XdEzyQPVnkqBK3qSRAKrKURff1j4YdDS6CevjwztFMFdjnHwirw7wLHp1eW3YX9GxeBvmV4mLdLMekVX6VPBS4",
  "key24": "3aGXRWTSSzETM7wNjzfEBVVEjHy24G69YDtUxB5SkJ4GCfTbWobrZqihCaRuxoEr7Qic7dcmtAnJarBbs6X3J1Q",
  "key25": "4FkCAT92sTvkkNiE8xGwaByC6mQk5CANN6K39LXeSdY9MgmZCxULRQYboyXEchSDTgHdbqRsxhBf3G3V2i9pcZAc",
  "key26": "5JD64pdG6zVtGH9pYTpnYgF3xciA6vKL9wrfPi2exwnHXCwuPLdFEXb9iaMyTJuChmrne9oMvaNThKGttpCuHmbj",
  "key27": "iJnD79iLCiQofFvuNoCb8Ei21PZHxFbhtJu91wmv3jLXRntCZrMvMMtgYRFVhm6BESrwibhVF6oUdM38MfjuCNs",
  "key28": "5KBZCczySrJns52dpHUcHGBZuQsaHaAJaAPSLheUWNF1maKu73bgqGJJ8TtcBRFJxH1RcvqcLydJvquy6NsKLJYh",
  "key29": "274vP6LQQyEauZC2vDsLhxpHXDys4XmVe1QCHfVHoyaVAtMzdi75GG3Vk6UrAoRjyEgGBMr9RuGuTQmdMevL94Cn",
  "key30": "SfzW26rTkhcFrxiavsC9kDg6AnqScfJ1fk16AkGG2yMBGTgC8yvrY3uakLKGnLbQ3nyzRs5TPVdmx9zDzrJCpPw",
  "key31": "1JGgzhsVzhDugBgccKJcuydTzanHTAkdua589NejbYmmaxR1xW5hJSfb4PieJFhVGeRf3YSstAbUWcAYVoM7Gc4",
  "key32": "qTNpa9i6A6Er2riHB6R3rB9YpuVKYm6BUUHzhktZqgTkomxGDDVJvkNqHNbU47ZGouEb1bnew9anoz8iXb92EiT",
  "key33": "5kDyLEL3tQuYSwG9oF2GUtaxSzrYyCuJcKdj25t8odTPSLWXFYbA63ad6HVHMSRbyeesgYy4xYMXSE7t9cgMDFar",
  "key34": "2nLwnVtWmiT78hAiDV42CKm2DYhyY1NSk6ZLkQvWWChoKkTNHsmDPBFPd7AmKCJtJBjwiqfsjNm3eBwEcvisAzkX",
  "key35": "2bDp32ho4EtSKGNLzQjxfcg6z6GSnfdWnDE15HcjKQTz7DjjqBYtrgXh2wvaBMv4G5NoH3YXXNNengdU96xWyUai",
  "key36": "VyYQwBmjMDNUdpbab7Y3t79buKhx7fBvhGfJYa2jr2QZ17TrbnG9fZ2Sv9oc23EoBSA4crtnVC28EJ7pntJLpXV",
  "key37": "5aC9fmYBTsZkJAiKP58QGugxZiX7xbQSvxPsNJBJMyUqL9qszZktiRwnfrNndvjcRveGsTTVtMcwf6bZEhnhHuy1",
  "key38": "jNcGeuTzLYXfCoo2MK7PFA7ByA8GWcBdvxm3DddrFg9Lm7h4fP2mxgWMpPeHf1k6eWAKWySWFqzoiQjZU6zB9i3",
  "key39": "2vb7Rkm4aLgUfqYK6TN3JDQVSgAvhhVZtwqiC1sfapkWfDmLKyBAwFRFeyvZPUBZrFLDorvMPsy4ExfW1pwUvjgc",
  "key40": "6ZK1kuLXEi3NiMjLmBC6wUZX4uSjpKktAhMZ9xwJ5u6wdVxgWzQKmUs78vs52bbL4ZNXU7TMxqgZwu1i8guiDTs",
  "key41": "2GJfjBxm4HjfCjfAwSa55zRMYTuj7RUx9icnzhGcwYwTxJKwNRakojMXMEUPAfgpkoDWdUhjqDX9iyXMt2Qneybj",
  "key42": "3v29uCZoe6WU8KAqJHnGLw9mP1WC93cPM3iPb22oeNQ6F3iNyws7bzDaLGSEPN5GEhdUWYDFEUJQexfKQc1bzmEH",
  "key43": "5gVdjKpe2jGmnHv18jgvPXrSSjcKjwvKUyG5tukiFUSwQbaf366EovJucLZkByqfuceUfonyp5zQ2LN9MdjZZ45E",
  "key44": "3YPa6yW6AUsgfp6nuyZ2e3ufteS7FA3P4QGNa4VcupTRSrdqRiPYc2zEDPpfNDu2DKCJPRYrihC2cV6RNhGApZKX",
  "key45": "4pLuS2PYmyx7vFzThrvjg8PXmA5sFPFNyhciXbv63XHeCpy6A2yb7SPUgTCFNrRbfhVqvGjkaCMSazDHHrataQA7",
  "key46": "5wP7rUHxPNSoeHHWMYYvwsLZy1fXYY27k1XJDsT5z74KpEQ1TaYyoYtZ9momhsgccHy7rNa3rS3gGsXWfTTbiU9f",
  "key47": "5piYqAG2YoNg6G4aFtifgTB3L2fmhw9VRQ1wmrUhVnFFMqfckzNkiwyoFPhWr5dGtMMupavJxa8V7ygU1r43ayfW"
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
