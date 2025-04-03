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
    "65dCieAWKsgy8F6SPaQsgFMsfcXf8VM2gmKyksKiEn9EtR6izAGPhqqCQyC4k2tpraKRdy7Jjt7ie5jrwxx6L77U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kgkJNkpmJmdRH9QdRj8TFcfvynYtJ9XkYwQMyKZsUtNKkk2h4NEvWaAeMcxbgwxvn2V2VYgfcVuuDft1gSEX85v",
  "key1": "3CCFHCzdCPkD3eVyVDXjmY79iG1r7vx6XfHdiXnEHoaJ6eCQjyjTMBnAkpHZiKCn68g35pN5HCvmn6CtLs22zJ7",
  "key2": "vzN6YkG93frrDm7wSgMVQHfMhqy69zFpsZNfyocVpo9xgeye1ZTf7NRUHoAF8Tmzy8mCU3HnVaBe8MMCAjcihdZ",
  "key3": "CADLZVR9dQakq4sW9WHBbEQGvxq3x6VrRXb7H9qAx8XrAtpeoWLKr4XHryVDT3PsgJsCyeAFcnKraPtG6RzRbBa",
  "key4": "5d2KQzuTgQjkx3XbcM54s9VnN5jioEGAHK8hLSph1Kaw6ppP9hduP5s7XfEq8rbLz5dZdY5wSaozoan29q9cYgrM",
  "key5": "427UM17A94gy4KCi3B5uti2omVkTKAkJMZz7PqKP7ZTzZvpmSPhSotFtetjfQikC9KNSxyy2ZDi4v3gr14K4vXau",
  "key6": "4NWLvknCeTBCCNsDZHuEbsGUGt8BJmHH2FY7JwoKxAZojG38D16iWwHAo1WCwpJZRwyP3vy5jmjdbJzRdy2AQUgT",
  "key7": "2H6xW5PjwJops6n4HfsiphFntCVWQfrtZxsbFiLDaPdYP3pSxHYDoo4s15qbuFf3LLTMDtTfcw3EiP19jTVdpxhC",
  "key8": "2kBipzwwJ6eDka5tmBB53L9CG2EV6FTZdi4pSXVpub2j4JtkEsykmZUoCTrdauzR2GZxjnSBx9vuWVdJY9D7hJvX",
  "key9": "3kDLGYzf7eicHYMFRmrdsao3CpyCvSr49QZ22WFCfEPgWgXLUiNZoYdBpe4Y7qFfZaq2hYn3VKuVrkZtrouSnCCA",
  "key10": "3uf42X7NarhUiB5NeBUgKWWJMpP49DnU5FruN3TX585NLma3jF7jAQy9NtayjQ5kPurhWzZCa9P7P323efJNNjEL",
  "key11": "FSJPWa5XHyDN9TFTiLemQi4ZDzTcyJ3Z5BZKxz2QYoG2zFMpDqHvJHjEv53QEdRsa3oywhtvF1wp1w2psWsp89m",
  "key12": "3MTTXHYWD82r6aaCPTwZ4ncEhk2fh5Lt6JXuYcxC6e6UAg3nxqVgzBfctKGrp73656UBS32fwai6CNWcz96zeXkY",
  "key13": "5KEFW9fW5wZvf2KVn4kvyyMsnijt6oyc3D8hvbG8ovm72oACXPdRUowwzhTpx1HWPYrmFCmXxbQTHyDwWY8qT1cW",
  "key14": "4BYa2QFpZM5W81TduiswxbQkv2nZvqD1JLCsDYSx9uT2cnF9rqXNxyeCSHz3zXEmokiuvA8miw3LYpGPGRkzfiL2",
  "key15": "5SrJYcCTKPpn2nWm8tgJ7oB3ruCmoF8E2H5XnKoXiuP1x9qyd3bxoRgbhQgdpFktLPnVsWfHDubamauu93CqWcgU",
  "key16": "2myHem3raU1crdLVKDh4j6uGYggf3uyUKzvtMntrJmCAX577qp4sEZXvyGdLTz4BDPvPbRA1gWKzgTvkZ2cDqfHs",
  "key17": "2u5ZTyJGtkTwgih3ZdgQBU4HPLs5cfUcFZwwu2xxn4rvQwVFjTi1UwtNaxzFtpiyESb8ghY2ZZek1CdQoadNoixn",
  "key18": "63UKHndtms3uWNjpGEG3eYWoXm3YWg982gJq1ktYmwY2uPtUGC37Mr2zTPtVBbY52KBS4wryDat5LQj9bFjXp2AW",
  "key19": "2j4N1Rn9vJXvg9bBpsmuwKDL3wymm5E3yqiTMUyfMYKy9LM7mt3vV1vWENapTDtg3pKwA29qE5dkNh2LjWat4j1T",
  "key20": "2jWectS1GHboefjDkjVKbQNngzwvzqGdaBUBKckPBEc4yNR7djzCTSvjKiAQifUh7x4jC1Q29nxD51jG9tm6wGxW",
  "key21": "42BbBXwUyTJDtPvePy7HMKxoMPcJbN5U3hhvzWdc35Am9hEEZwNnQPC8H8tdxLgZazCo5gW6Ptj89cVQUmTqBZ9b",
  "key22": "YX5Lu9K9C4BDwAMp11Qbr5wxzDjfxe7SSpPprrcKRdURugJC1ZvaraejUVKHFG5pqtivNxm7FMKsUu9CEWGq8F1",
  "key23": "4nhwkNUq651Q93tSTdhp3CDFXpzM3j9xLAPfjZ8j5aJ26ZVDjWdSfggDmwCFrStN36jdXi8CNPKatGhBqnTVkdBy",
  "key24": "4fEJQZFdPvZS338aQNvraM5nRB67DeG82PWSmTUFUGnYSwGiN9pEYjBQGZKW1vEsypoDSkNrJNM7xo9jBXEGm3TK",
  "key25": "4Pv4FAr1Joj2Vk4KfPziH7uAZcNqUH17JyPLdQ9Ud9bnCaDXoN419GyFnQ5S5xTtxNcDSM8k9n6Vj7pFq7xAPVEb",
  "key26": "dM9bBYY1iTXWjKzDcb1y9GvwqHAo1GVLegxgHbCiXfcKxuj5796kVLacuN6xGTZQy2gkX8MAWAo6jZDPzmwCBTP",
  "key27": "5RksTdgjgQ9Gm4D5VrGP2ahXuAb7m8u35dM2SyFxhX61p6J3AwiMCNX5T236jSrSawXN5DQxpRrmur7jQq4a8mZR",
  "key28": "2aJTvfhBTAvxVPNrnK3pvdBrmJ3gYheWGy86Aokuzybmju7fViB9u8LT1DASeKH3D2i7Enj5P5bwTTJy4qFJyYUu",
  "key29": "uVQ24AX8e4SX7E5rUokHEs9GZNxCv7KnwJdnBhWMsSpMXTdGb4Y4rMJ1TxZ8BycR1p4NxVfXx2eBLjVwvYWVA97",
  "key30": "aXT8B8dAACQ9VQt7vSyXHV3R2ZmTe57EwkZJQxbsfRbuBF3SBf7Xqe46v9WLjC37N3CmBdazG7L86Tv6xz9msqD",
  "key31": "5Z47isopNZQQxxeaYiyqFbYEdiMy1XcQeTKacK6BLCeuDMYDdiXvm1LXLSsrKjPZr559fXtBSg81cSQZstZNACqW",
  "key32": "4T7aGkuKfuNyqumS6M326Rzjpa5ZhJQ9Bp2iZf4M6hYmGH7zdxHjceWPeUfC2pPpGAU6b2fDjHVyLJWD3ok9BDQ7",
  "key33": "4VQKKsQQUkNXd5H5eVw2z3BVq2fxZp45AAqGuCD84DktBKaFgfjKzZnvzPhjJrmJBC4axPSWmFfCTu7XSTkWm9AG",
  "key34": "41tr8817roodBi5ZoYoWb2nSRQZEWvwLPsywmjhjQQ6tPfXfkw6JNeJoa9yDFm7YorDtJBw5Qw993XSuDkyBvKZA",
  "key35": "bV8TKvib7oZhu4S3bRgciPsGCG2mri5ahxSFxQ84FRNynrnsJVsEtjvJdwXHoGceobzFe2V8r9KP4TPS2QdsYTy",
  "key36": "2xgGxfeVA7XKT1fXUVssyLsvSkJrVcBpdmqDsNaXL4177V7u9HPPw9roLAYh6pNWaGz55XSjJ1EcdgCa1EJi1Aff",
  "key37": "s7JNRHaaxP8ZwKjr3nnp3NUEV5SqWfwLXTdF3LzFU1uUfoLobvJVycseHsQBpwggJzXCEGVZRZZkudZqdopq389",
  "key38": "4Z9dXUmjkkTNqkCoh5YRCJF3XVUHB7Lw9rWTqZUmBzMbeo5wAFWovDqohk8PRX5LUh1V1dwNCpyi9LriMKgX4rJd",
  "key39": "4dMxghA9WKLNz7rS4Esn4HXczXQH7iwzRPPEuRjvW4AfxMX9bjbkf1as1JJqUUpMxiqdUcNGkEs9PDcryTjTp58K",
  "key40": "2McDUgWWLRzk6TZZYjLQSF7SqU7gdiTx5jiYbcojh3h4CeSzdRTqqawCaBEE6WhhYZkoNDZdHzYQUbQ6ENvXav3a",
  "key41": "49QQ99daj5AChsugmnk5TNJRiaCmYP3PZYYcXx8n3ep2ABYeu2gZtaAxoBuxtzLV6rorQrnJrD6B92ifaKFSQzeh",
  "key42": "3k4AU1thwokBqHcQCbWmvTZksNGNpKsMRtfZTv5LiLUo3E7DbySWmJiAGfcxvjTHy8UpP4x2mm2aJ4VggfiM9Sek",
  "key43": "5HJqFNwUbmiQM5SRQUFpvZVTtjrU4cCjsQvaRvHnbCNfNAf9AjyJxYFHf4vmP9hkRa34Wh89qiBWnbspLecKaqrR",
  "key44": "5uLux5D45qN25UFLb89E5VX9Au3nyuxvxHxx76xQD8FfA7xy2W4FnHjXFxszcPYLB7VNEdC4oQmkGopyUSZ493fh",
  "key45": "J6q81Zzw1Jci1JeAF6pge3xkhHhXTXiVxhgu86oVijgfVpUnftEe4ghG8HA1A5c41hkd2evtuRK154jCKpR2kuo"
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
