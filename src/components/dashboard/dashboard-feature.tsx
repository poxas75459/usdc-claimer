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
    "5BuYV8S6h7n5UPgHuhMeLPbUCVGpf9NSisb7bmErQ3xSvQLgCrFpodBJkrakPTP3dat3jVf9cZn4XM6X1ZTyZpHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZvtobsoBfZWjW4FoWRbiYCvQP8C2rQGQ9xfwEtqEHPDPuGBcmN1RjcSiSC3dosMYJYkKzMP4178AnnH77R5eaVs",
  "key1": "5yebShkpCxKsHvn89syCr85tom6x4vVoe8p3vesFumuAeFuMbe7yyh3rwpwtyFdmPwr5DXiQu8m9QkVy4LPhjH8L",
  "key2": "ppu9ZFcwthDxJw4A6Du7JL7nciKfsN95yfvZ1VDQTLDLSJpqvCmciCXjH9dTrroaK2ZviDAHLoqyR1quGWDrGZa",
  "key3": "3qBtCM6KbGkdB7aZbn5JyZLwYHjgiMftGtR3QMqk8MCcuaJYBNKHc3abaNTiMaRonPwtL64o1H4JVwhfnu4SF7K9",
  "key4": "7Qj2BFQePCit36ye13fjjycdx18im9pbi3Ly3HD91tvY9q7AFacSVPj3S4U8BPbEB8u39nkujDU3UgFdQHf4yRs",
  "key5": "f2We6E6VeNE2DnZkcWbKxmsg7SNuCkb8yWEDm1uiv7UnzzXbJmiUiNXKvo3u6STPzEENcieBxMtZ3vzPu6w73SS",
  "key6": "3cd2TCEkMDitBwv6QrLoZNfBzkQq8mLaL82Y6mW1u4F2KKmmAqWPNAJHdaGK3Uzwc4turGXgUkD3BAnxnqLKTwv8",
  "key7": "2CeqWwia8wY4p4ib6ZDAgzDA7u8Xu152bmQmKzM4VTYB2PCvntVqSQzpXQnDunKY6EWrdPuojwrRwtYNRPdWFvXH",
  "key8": "57MHdZjMtTprLdqxythb8WeTh3G4hErArLk5AY4bNFszWR3HqP8c8N9218kCXLh6aPUXBehCGppZhZARy4DuSxb9",
  "key9": "3xLE4D4kLQ6ka9fTnA9QGAQT8S7EpQorkf2TWmkg4KJBZNfJXvAaNTG5BLXe9UHBjREJHpCg4vHBRJejn6SnMRxE",
  "key10": "6FpBAAoYi1E7gzPNTSNmA3dcLxSeE2VMBgaZdqBdSFRRkp7iuXnSXczjdYArwk8FiH1Pn8gKpGCxrJQQ9yXL9dt",
  "key11": "5mekzys4cQKUdDuPBbZKsMuQ3Q3ps5Sb5BhMZv7vkNmbamrX3m28nAJHRneo5cK342928AUmfTC4qsyDYLBQozbG",
  "key12": "dhdqkwXnmZN6bzCJdeXgumKqTjsixYZsp5YpbeXvkUt8yUpLhZKG7eJAsaPoRZsjV15L8MA9jm29iSmQ54BcxfP",
  "key13": "4QFbYzbTMqtX81KgvUy9UE6wzjR2o6vKCRWsAeHUGzfPbE88kAbBoWNiiGCjRVaVVdNp1wzJZfUfthNEarW4tK8p",
  "key14": "36eqQGUzoxeEXjymxi7uu6SHsSGCmkfANAphB5Wrs9Qi4u4LJECvvjnpumpN9mxd5ao6PQMufwKAJSZiEqqm3KCA",
  "key15": "4o9MxegxjgwYdzq46Wx3TN1iXBFdL77hcGKxpbqGtLi1sM7QWgsb36kDxogXY1esAfR2qjrSZcV4yXYAzrhoDrD4",
  "key16": "jDZUQGnx1cgswtTccJPof9YQ2jgQ3Fsq4bddXQ2dwmaWpqZ8MjVtWLwNQ6oemLgEDHedDzHnsAygVSV1rmtfGPU",
  "key17": "4cWabDXxAQNX8FWDmQfvYaYH8Zak1T8zNsQjNNjiALEbKGdtoUh2QoYCyvZqUTEkHJEbptiXHqRE7oVXq9AkU2em",
  "key18": "2rbp1hnDTfoP8BD56zXqwYfHRc1njVjmhAkd1XkocFGMnHTUiF1AHmkm8wh74T1eRFEUYTpXDagLiVFCvu9EGJRg",
  "key19": "5rG3h6vUv15whpeTut4jNdbVrLaf9sPKgAv7b2ZUsUD4aitgsucS9SiVxpaXocJniyfzH1RMyXN29jwzaTk9i8ZV",
  "key20": "2CMuG8UboKVMg81jNdmgFs6y7AsTa5uYV41nEWGLPDM339Ybm2gi45d79iSQQh4tPVR6c93mjhoUhXDVtpmfz7Tc",
  "key21": "2Qi7zPddowFr7ZiAwNS95FWp2Sc5M96vDKBCASyKFkPNCjsv8wTwPMSpNzwMKv94shkSN8ssJ3iFAS6ueciHKQPq",
  "key22": "4dWMkCQpqJvHXrbFVdjyhHYmjnrbpWRwqsUnnQMGTqBsq74XzKwF8vFwx9pab76Jr4s1cTNQPtTkKaVRmTkx5ckp",
  "key23": "dHFT7iwNXTo4zBkJES7HsypL2YYS969EHyJ1CoYrhBbEkmnPqFByZKeLo6VGWHHsVwXau1dJRrFnCjh3CwB3sXJ",
  "key24": "4HmfkjLoqU4Aepn7XVM5vRvzb3L5ZCj9ef5fFRzHZLRfMk5hZWxZ6K9DSs94SZq2GNgAyMm9viedjrvK9ay3Sn7L",
  "key25": "651FsaTGkVq78CaifEULcRGtzdmh8NGoY4rX6MkJVSwi78JqF4yEpaaRGUym39aZPGfpcRHqZe7fw923qqQP3e2K",
  "key26": "2biz7Xffaz4cqYfoyJ9eBYWFJpAHNX5qLAKiwmkWsVP8p5DutjXynTk98RYHkFKMsoFyo2Bs3q6LFQGEdEedhDCo",
  "key27": "HbwRd9DtzjPxZMsxzCjqPTmYyRrFFC4cp8nAwX71RMvfQbUXixpgz3TB5DZJyuu2cdi4S1zNRDEXNS4uzhSRkaw",
  "key28": "3ZQtYkvk7Eyyz5Hkt4ojCgAbAHaXr5m4Z9eREyUvJyV3wMR2LGC9iyEeKcAdjHe3J3LqBwU6VLs1Z8HSbt8a8zUf",
  "key29": "96W9gyeCjt1uPZFCx4fjrGuQxVYctsT81RVBF1CbvSrxWht3kbENHzbsvCey6pvXpKke1FBz5eJwP3bZTgBZJ5u",
  "key30": "LhZu5Aj2ET6PJQdGE8bc2eyCyQCtfV5yG3JR6J8mnzjx53U2nW4yAEwN71iNoBCPUYGKRXcceuGtuXyqwyya99v",
  "key31": "5Bjjai26DUiALJf6kCR5NibnyoT8U8xCiN4WqNVhkokeB1dgsW6zRxf2LY7LsRcDrUUZe1WcfpYVzWMApMUwwh95",
  "key32": "3J8BUaq5ar6v5YD96okAJ1TVWHLpffR92xKVQ7UxSWCfyh2TXQWVT4Fj6Fjkh2vaim14rNBposBLNnrrdoph7BkF",
  "key33": "3XnHnxcKworSGh8UQ1nGGHHWsqGvMsNafcgUXhjr8EFSVgqHKpXkvHYuQxNpKvXQmUfnZGigyaY1Xgv1JdTicx5n",
  "key34": "37UDbmXG7U34ZBkk3937jRygEAr7mMnCD6cLkRdMJHYemGmUAwm6mZcSufvnDcB78MXLh6XLuK9FivzAm2p9g9Av",
  "key35": "G5Gzmbvo2Rcey6rKbgDsjA15mvuzmH37zsPWbP4nEejtV3rNK5QqF4MU6G2o8MW2cgSMXX1DbMxnjkLTpp2xjUs",
  "key36": "3fLimvjf3Aon2qo4SRFg65H921XXQDwzsyqeHwX6Jk95VvWmxfv3uvmE52Lkdspe97RSLcKQ3Jc9KD7PL4ECShSy",
  "key37": "4ewbTrHuFUkg9kXj6bJ2Bg63FiybFuXYXzQPbZnqLvZmjgsN34KXWAtQwAggB1GwC24kkxqSKBnfimzSXdsKu539",
  "key38": "4TAbRStaP559FvYVJsbsE2PkugHemvNfkhnRV2G3CeKiPXtQZi5FBwthXpYBGAHWfRXa2XNyez44BXJfCJHSzJ1X",
  "key39": "DK8q5fPU9VMNhxRsdxX87CEvurT8w7NV7Uw26BDLHMpSYe6iPkkgbuuxktf5orSntbWTBUP6sM62cweurqenSti",
  "key40": "TWL12zXWGg17gzFW3LY1rgqwfKfZ4MK7DsPHqEqwyG8R96oXpLM8gQ39r3YQrpPKXRsStex9SUWAXgnMi7bdvA9",
  "key41": "4SKi8pLSo3wJ54MYTfrZMKiaZFFsZwvrDdCPy8Ka1n9eiuNoGjMVhDLo6r5NDgEo9CupbEFfNZbhFpCsTZvTVyih",
  "key42": "2bQ4cHwid9DH2fJDy4A9Y5HLmbBES25KavNZkh5YEV3xS5mutgQR6zv6rcgDwm3fnymuxJY4ALZd9Ts2oPDWNSQ1",
  "key43": "5GaTVGr45a7FEcJHV5D9bu2LohZfXC6dFxck5PQvnGrkcK9dA2fuNgnMyKCeoMuMxL4i4wam6SSA8oNH92jwyhWb",
  "key44": "4gMjhdb3Jg1gnjtg5Z8sg4viz8iY24F96FiFUaGZDUBLaCjuy515xDE7XXVUa1P2fMfN7VyimTSJBgDHcRSwiqkR",
  "key45": "3TeaS2AeviuUetkmxuUumufYHtMBaFUv9rFiQUf7amFDZY3rYFLr7rjZqiSwHzKkqzdxNwtXBkj2o8udoWWB321A",
  "key46": "4jqnHiRancNSKatFq1MgQagFap5iyci7aAAfBwwkZYGjqbTNaSo5hZywD8whg7da2VMYVp9ReTzoBfN3xFD2MncU",
  "key47": "5U21HdmNPgmjK15wMAVNsG52NFqEkRQnj4ekPHCwMDCs1TdqbeiuVTTbZXb7QbZiZAh9v4q7AHKQPnUUQB8qDRm3",
  "key48": "4sTzQ7usZRRw62GJZpZKF4PSiZjjV3sPYWRW1wYFzfFambr9qGRxW3geY5cc8S1ELhFiACkP6AFY1Wezxxj53tMT"
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
