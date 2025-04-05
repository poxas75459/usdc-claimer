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
    "tNvXesVj6hQz6qbRPAAqwfsSETL6yGtZDeVBxe5atDMjUwxNy9shmsJjfxtAUGDS7wDinfDt59knkvHjqYeouUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gGMU4zkQavE2B98jE7qGPKfSnEgNXMwGxSb82oFP5TvxHkn3mzqwfGY3vYTQWW6m7YYGDF9b2oQkBCBfZTuYM5X",
  "key1": "67Gg3kmANTWS87aKTYSXE11JgnXBTXZjh4hXmXE4W5TnggKkdAQxW78ayPptpceXY8kwpEpvH43nqLtXxZ25TE5a",
  "key2": "NhTgbnvuXeMrGwtHbrnBSg1pTdpsvjQcPXZrKztQz7H6UkAate5RusxpFfe2Vxn1EhDHFw5vsiUsDSkJpjScCt8",
  "key3": "5tmvKzpJJBgcWng5iEqoMkZFDCPkZFknsG24ndwU5Fcqex8CiSpcLuES6GksewYgmjsBFPG9CApkGaKoPJ83BuJK",
  "key4": "2G8xAa6cXeycif4uEV4vnbQeN5QN22SgKuYgndQcMRSMRxYBAjUm9vRnraXrpvRxyS2tfMY9tM46RTtg26Ec7Ext",
  "key5": "1DC3qJCYyyAsBLomv4AFnQkMBSnKhM3yiDTEKijq8EeMVWJMFZtHNMphpXYNFmxVUa634TVveUMdfW7mcPqfRed",
  "key6": "5e6zxnBri3gq2FHHsWAATcyHcoCippmzh9ePi3mNvip6SUyQdci1nsyF3eEE89AHDnp2bX7dKR2iqpdiac8E9jEF",
  "key7": "3bodVdRb7Z4Xf25F9X2eoQRe814Aft6x6fiDPMBPbW8zVphaoMQgQLRfGpLddrHLhn4xVg9u5AoBt7pa4VMinm3x",
  "key8": "3F1wzufn8eT3cLRR3Ta3zSJSGna4LEx8ykvVjhLtFNcHTKFzTyLnBYchV2c7eVAkLxDbKFyWFkWkLuuxPx5knpgi",
  "key9": "5ppTM5mbByzZ7yqZQHFhz3xCJLXpSXipxSgQSrF6oXRXJnZ9gv1g1esph9gqhcCp5S7SLGb92MivRDw7W9woNu7S",
  "key10": "4FanQ7ozEWBoehYiRMvunskNNHTDpc3jsDN3Lc5AK6PvokK1srCUukGns2BbJehkrmvshfujnjpv81P7EouMFSQK",
  "key11": "3ho2entN5hUtHVhrCMSJxqfe2PqmsDnFmzdTF1NhQmn24fDyFEKirnwRfPhVhvgZiPifeJrpFAEcEyHawTU92R1L",
  "key12": "3ruUsfYs1CTt2uZtGc1x2hFXunRjCueaks2Xz858gKBkvdTvX2x89GnvanbzKE4cUd132mwYvg3Jew7W4ZKNKQ8s",
  "key13": "3gFUm842VVoKxcXAKEuZrxvVegVUueF1Aqn2iDio8YVFoqVzMaMqNs7zvAfyWsJiUEeC1PoAFPv47hLXaqkjcpvc",
  "key14": "2FYRujXsdPXaAnVPaV9ePcGQsh9EGAYEfnN4EuNf7ct5kaTSFPyacRXYuNxytYpAnRA3kJDaW7xdSkACvXvLZzy6",
  "key15": "3R7UaXqLyWWTzWs1BApZeZ9Egzbio2YrdZUwtDS6yiL2h9RfXeyggriHQHBPb1aFwakE7sRk1DcNwj1RNSpcuaCw",
  "key16": "XWopcbKzPtn1Td9SHPdmnkfRKCPWXF6ue1D7MhZEsSyeGCgHUmxiGYqhf9FESE7o1633GkdbVavGqQcj13d9wMh",
  "key17": "H5hjTMTybkhhUrtSD76C7T78YDg3BkGwF1c3natnNjRv6eKk7XWdXs69afcjCT1y5jPTBnJNfGCvHGwmvMCD4Yu",
  "key18": "FunKN5yuK5xSU3jLj5zR69VW8yAoMMcQREe9dAYuyeYdhv7Gouvu3UCpbwbBZf6fEe5UXxJ2WAetA4MaYQ8PNtX",
  "key19": "3oqV5SwtQQX5WfH64tNvuviKuGMsaqZMjheg2uVMrKjfzNLuj2Bp9yeaKwL3VWtJnoqxvo2Gp66JXGYm5xbCdCDc",
  "key20": "3ZXb6sBJyArDbUV4hCsTNqFttKn6h9sBf2GfV8rJa1iTFkBc7472JJSL2sCqodyK7RfiRfqywCnA4ez15kTApvSk",
  "key21": "3Fa2TuqnipVxKxewFeJYrmE93YRAbWpQoauBLWmgd2zfE3i6zShgsDYcvnTX6UP9xahBDwQCiiP1oKxoKPaXzr7B",
  "key22": "5jRKEg1kNTgXLXY3Q3NUvU28dCnqvRM62eeT9b22cvByqpJEPEreWSGYMDXKgcL1kR6WSiZ2Vok6eb8ZwnBoiRsE",
  "key23": "5VJDe9cZ4qo37jbtjao8yua1Ky6P3cRdbCtqRM2Dqa2gGGkFjnpruT8ZDBeHzr2Sku5SvxoyRZK3gXic9B6UqBWs",
  "key24": "fBh6jT4Ko8BPedeJirSERHLHPWwRoyBenhMKMT8ToXeCtsWRSd9GKx3TmGhb9QVATxbWr66xDT6enBc8iydaUfL",
  "key25": "2pPnMEnytcio6xcutmLNbjKsCGiFyUn8maqU6onsFSyBCjrwobaYYsrWiWkBAc9tws2G5gnHDEpFGbsq8ktcdXeV",
  "key26": "4Gimb7PKhrJ9wDbcgPoKTqJ3ujiYd93vfXsnN33DZvfF7PZhfBHrTXxoZgcpADeNxoLsdvGp5fzxkdMGJc6ZHAms",
  "key27": "tzLvyXvQ35y84F8nBPMwTY4es2UoS7vq6UnbbdbHAxheMvARMkQTDL9MqUskRaGxPoiz831nu1Fe6a4hhWUct6Z",
  "key28": "3gN6oRgix8DjmdZTaPbVDcKLKuYE4gEiSiAVbXNixHXbwZHwFXgyvmG6yDk7ocZLjdcdPaq9BbHehxjoGKGJfJFJ",
  "key29": "392ydafgDXcm2DNRtrFx9EhCurHB6N1A44XmxtsAyaeTZV6Dx8uAp1NGmc2LgzyQP6LDSYQQPXRgcVR4xsCanXvd",
  "key30": "3XiiCDAs4RFZT8eZNpPMhHpsB9xPutwUPh9po4BmFYMszZ1tztanz8m2WziPc6oqT34M6hTxScmrUEvU9J5reckt",
  "key31": "u3m1YUmTrhMCPMtr6XXpsCJ77MCEJNXBxJYcZeepvJB7UvrBcPBo3Q8drSfi7CQkzXnBncGokYKfx8BgQ7324tR",
  "key32": "2d5nFqaEvUcPnzSJ4WTsRZjHJ811nwWwRZWUUzrvyWMwzfkQ6eMoHaMZ4mGMaPHxkYF8ntNib48Y8AatSXzEMBaq",
  "key33": "2TKBDb61ZzdBL7cWJXu2ffyAh9PvpsY9jh9z3cbyavEgPtJDDC1oqU7gQQQX1soXjf6z4fSLXKi423CP5a1fzG18",
  "key34": "5vfGezv3uuUiRr9fwuBCrcjmcvYDr7E8CE4qKLsF9DBCeZUE3B8QVgYvGiCFYXxbgcKyuK9t5tJ4Uga2yXkimi2r",
  "key35": "65se3whUpnm6tYAAUo4cqFPmsKxna2RnpGg928QY2VrhbE1aVvrUtUcjFUHBgEmK82iqjNd2jG724C8fE9vD8k2R",
  "key36": "5SqC4qd9pvtWbfo12PEwpwraXTjjVNSNsPDg1uTasjeEDM6USPqAKEh94wBd3nqZPxp2jgxLecT3XhZG3ZY3nhqH",
  "key37": "5UYYdGNWcEp9CLQjKDVScGnes7raUvpj9FVmhFKv8YRsVvgAFNHEjh5LhNYeiDQFnkq1bzkxTAw1UtDf7YXGiK12",
  "key38": "2LdHD4WggEw4s1zFKUotHzH3TJrs5Zv18pzifr5e7HkZQJUcqFKAHht5bjMq8oCTPvoWoLXU7gVMT26GougsvYt4",
  "key39": "344QQVQrHwSc1T5q6dChJ4rCaJj6eAvzo5x877iFJ7oY5ka2PmDk4MeCTJKA6ieteUNHzK6agPtHBvVeNyQ63Wii"
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
