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
    "2CAYNoEuTGQpyxYDqEEdUq8v7d6bJb2u2MuiLwdUh5fcLGoYRF8X3Kpqe6vaB6uP1ruHBPvtkDqgj65YQ5GP8kD9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ysZF2bfQq5xcpPAKbWYNWRkaE7JHDP8fzN2UThPvf6FffYnkDrUdHqwus7VMwU8mexctRKzjJj38FCch6wYUS3g",
  "key1": "3izVMZDvQbHegWUQQBNEeDpwgR1eEJfsNse6cX39K9pdP3sg1sUtEyvYxodJZyso9CnVaYqGKEfhMDYMKKup24qu",
  "key2": "4NEdpC4xmpqHrmGKWCisp6XUuPrSaSDn3CFwzsGkJgphp7GoE643FPFPkWRzec7ypWfAbFsKKPPFytYbSfX6nFMQ",
  "key3": "4CGprmFuqJJgauvdHLn8Xb14LguQAmCqPqXMapLbQ1wkosh5eRKyqVPsGvkf3XEMCtuqbWs9Zyt167wcyC4WtEnB",
  "key4": "7wBW9CzLteYTUTLiDf6Qtmr5X8rDzLAvEo1XWgLz6kkuxKK6SdqzbCq3m2bD8vhKQnYPFqRjFMdFTmJ6x5WuPmv",
  "key5": "4bj6cLCWBMUHLwZ7epmTHdsTHd2EaSAaeBMTtPgaPayWLQ3iJmeuDjiWbiiZsXfdXRWvtcwhQaUWVgHY6661GYMZ",
  "key6": "35GbJdu5L83kzkBwdAbfyK7kQvtzkXP2Kg66bJyt7EHhuVkMZBAWivwyvdDgAs3rmDzdNc78DM946qt8MYWtWMuk",
  "key7": "3zgqXKduVGfz8rNhVJisyLRpWnsFAd1QrVvG6T8GmK2vwGiJht4vEMaiX3DHpePnamwzUYLCruZXYZSChzhmgCFc",
  "key8": "kYawaqyaADYfF8VagKaBRn3jaVNw7TFpjibmMvxxecHpT7A7BKsNrQvKYq3XnKFgmoZaHXAS5cLfPZRpoKuRNru",
  "key9": "2CVyysFhfcybSs4TwC63rHbxgGDuaf6Lv2Jh581HwFZvJDsHxaACLS7psjPXd9VXG8mGmmvxqGfQd47c9MaYnrUD",
  "key10": "4bEcGZj6LZr8X9dxzQsBZswRVV1mftr6Tr8Bg6Q39gNWj9q2ScxVYE1zNyB7inoaPtGB27PNsXKSMX4KkKNPqPM",
  "key11": "51UgriCxSpCLs6UFFPgEYiNcUiXkf1TgzTgppcozygGnmS4oBXYEHGq56PZTe2TqAoPLwK2DuAWGT71MVDPuzbFx",
  "key12": "29KyDs2C398E9FdT1gRLSv1z4x8fqyNFgpyQke3RBpMqQ8M3xAeuXZMoK8tRBiAhqNpZNA6x2KGQdS3PL85taKgF",
  "key13": "3bkvx8R3b4L2sCVCPrGNW8M4tHYkZDYVWLks3NZrsmy11uGg5BdshGfQijYuvkY5F5F6jc4FbxaCafFG8vJ9SNuo",
  "key14": "572nUECi1ayMZGvbGJiF66UY8KVS9WQBaNwd8N7DTHXrC5BaEfACio8Dpx3goRjvLdjH6NNAvaL5L4kYrxxEuKBo",
  "key15": "4JN2DN5cNh6tgRP7SC4PLGi84Ly2AUxaeiog1Byo5MeCoxeDdqbgfV96inLFxZxE83Q2n56SZJRpQ7j1MuXj3yKf",
  "key16": "3nwfDbPMmHKEFhKZSfYx7gdjhTjo4EdodQT64LQknqQpoaLinmzYJETD6ppbpHVh5cA54ePbN6SEZoiCNofygHkV",
  "key17": "2AzGYrVxV6VJTtG33sdnyjrRRAqYd4niiEtXU3En6Q4MenmQSb2rnUrPzt8jgwNuhSzUijmfo814wULrzJqRYi1i",
  "key18": "2T3HVcpmEekb8M44FY51j6kRQN9WX2ACa4UQMXS8mHmwdemGFFkwCLcEbchVdpw71v2YTBKCCP5Lyug1LB4iHTKn",
  "key19": "2wob98F9vXTdqKekbjqWxt4BwYpKTLejkm6maNvY8S56uCoCfRAKtWuczNU3yJ8s74QjHbfCtuTbZpgzfosEevtK",
  "key20": "2LtatSJwUbX9HnnSMJnB2Yj1XQsVxmiq5bi2xGsM3rRfjkEhGhjNeVj16t58rhojmSQPGNAbjcrbFeESVXDZHMrK",
  "key21": "2EpgnxyTEfgbHCy5axZuZFeDFSFyYtN1TSTPxk9EJV9gNEs5nVQ7N1mey8o6yoJdUNhjswz4UDkN7GLq6DPTekD4",
  "key22": "88UvKiHs1pFR9feUiLvP4pqjRwuHBDT3F2H7rjzgUwdfGReZqGjCwqkBNQ7jB1M1Fs5rP3awjPVJJHmXvyKpBDk",
  "key23": "7zE74Jnbhip916HavSd6o4eGFZBvtSAD87E5LntXeTbZXFVLbPPKcBsU9r4E6aBe55GeZrqHcoMb7yP7FFk1YD1",
  "key24": "2eC3RMq9J4SnBpRRciMrBJ1BaVwEsWmN322b7TPQ7zAjtUGyNqipYoHe1oro4mZAtcyn224RGGdSPQwXeBPZVFKa",
  "key25": "5xMHRKk4r8Ykw9ZM6tvR2FNKTXJkg8NwBEKd85MRAmrGYkczYvsbRjeANx4Uk3BpsCzoEGbGxu25uxvxrsHzoQ3d",
  "key26": "53jd2TQgwYKvK2RWnUjmzMn31zeg2sVbC9fBwJVFyCcUUp8GmZ1NqVM1wWVdboGQ7SeB3v1Wc19dwgURfNX5grQW",
  "key27": "2xajXsqQyxK51YkF32dNSauXFPiokgvi3FEmaCbLPQEwRxAycu3Nqt73amBwQ3SE9sRYfWoG1Yy6Jx2TEVr6TEfm",
  "key28": "D7sLab9oXMm9Fkoz29pQmhkRUPBW5JPYCVnVKTKGbfsUKKD8qfuDHHdHM5D6fzRJA1MtsMTWZbwq2riDXxMQgbR",
  "key29": "2WPAG3vQ44gMwCSkdBKzfV5jCUiD5bh9UjvY8GGpm1q2yT3C6uRX7kjSGgWT7fnKjqGnUxhjRih4aMz4xzLBYJN",
  "key30": "2UN11E2YpvtYjtkhr7sqA2LRkYDtqmHo995n6gbziNhginttD2CH1UnYDMMM7nFzTSXB4n5UfAvQWTMmJaywx4jf",
  "key31": "2fcTz6GASM5pc1yMjwhCxotubu5u3LXMhGebjGKumaC2hrg4grLPVtMCYbxDqEVMJrkuwSuWTkRrK6GAy5D8BLPA",
  "key32": "3pZ5iTmH4iHjKpHc39DDxbyWRCEi9WouFadHEmbWgX3EPVuJTuUWhhV9gR3aDcymYRJUz9djy3jjJAZ5F22FPiRd",
  "key33": "5ry8cyUdEKjDebHNsrAsGkvfDa99vjB2f5UPW8QygfyGUdAADq9X6PBbEWJknUdkZhgHyo1KCXJMELmcim5DTcxg",
  "key34": "5jP3zVc3XkhtCzJGVYbwFBmGVSmqcF6F5aNtjbDaK7wjXq449sxPP2fRAadLpYZPnPFk6sudeNJAqZSmk7eAoW6k",
  "key35": "3jJ3f9hTaWs4osP1bWrXFyvBQMwyfDD6vc2qcx1usBhVnzdaB55brByCQaSNMiURQJpnP5vLpu5eq4kSRMr8qLXx",
  "key36": "53Fup1r4KEMAm2Yw48Sbf4udYKn7ad4SYnSCqKd5qJqEY1shr6G6xihhWW6cnG58PxdAoyHMTeJj8Px2JFKgTbKD",
  "key37": "5V6SKty9wLEaxQ92yLr7AB4XxcyrHFqp4UjkWHtTHz82B5ng5AhD6cRdHH6GXPbEoLqLT1inF76d33f2G9imJ6QJ",
  "key38": "44riBk2hm3Asd3QXwjTpb3n8q5kBEf2mBXwwHL5CzWUMH5GpaYpCNo8Ws2vEL8Rrur2ikMRLqNQfoApS7RAEG4XB",
  "key39": "4gkAWUd3RkEysurm9qmZu2LN92AgpxJ6vNcmuNu2vBVcUwdkyLdAkDtoA8x9QYeXQC85MmqVKfKDEKv3QWpcPQE1"
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
