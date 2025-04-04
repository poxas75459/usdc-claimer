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
    "3XMVdcqUmGWUYYsJHrBkzHkAyXQT7gYVuvw9eJmfsgogC692e6FRNnPPdAiuZVrqamThXCL6et1XfbqXKGWDSFZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25AqNwhC1X9hLArANGugtHQpY6htqmEyFTLzkiLjkWPqt4PqXfUnbFh74BC9HDzBknS6PQT7H9EfuythMSpUk6y4",
  "key1": "2Wo3KAXW1GhE6eE4CC32nU8eUfdv7xxSdR4ek8JGena1bogeNYUZ2qnjzAjNbETQqSBNxNhzaKEen9NWHZxdxuYx",
  "key2": "2b4JxV4atp8PZqw75P5mbFfiJY1eTuETnBdMDJRUZLVKHaRENMQux4CyPemQfaxJgVjTf7AdXdh9YUQvwi2iSsdv",
  "key3": "2mR9WzR5zNqMUxPzWaL2JVn9KkSsCLGm2WmR6ffpofBFk8HY3x3TrMuKQU47pYvma6ZvyTpnQsdB4Lcmm1XXfJBt",
  "key4": "3TzKcaSvM6cUSVjcwCYSi1yHEx5xELaas2ue9Y1r67adjTzkraSgMUTpPYZ265mtB3NeqwVVnn3rPmadguQ8TYdj",
  "key5": "24kTPMM8n9sUR9KHQwiT1KZz7JWwoc2JcQdtag7Tx5B5B23JtDrvbmmgCi1uRxorUcNP7K27JYWdHD8v93iexgHz",
  "key6": "wkEJdoAixgZScWCsXMXNoZoCpoa9SR743Bzvq9mEm3MJuScor2Ro77VZ8ot1qmQxSLbrmkGmeZDhpEzScrEgqxg",
  "key7": "22YbfayjuUuiEdbmPhr1GaMtu8yUkkzTaPVi89NKs9a5ekdfaQjCyDC5qybYDG4wjHDC3Fhoc6rAQa6XD9TVxzK7",
  "key8": "3BG8ZiUhdJMJr514fRjHgUFVTtTKM6FUABA3GNccznHcWVYQntQp1RSu1HvMsTaxn5cfxk5qizaerE5TPzoEJBYG",
  "key9": "5wxD5Ps9eiPK5dgZxo6Zqwxn6M6JkimDoPnNWzfdbmLisHsNpFDxVNpFh5tztkBqf1vZN1J5D7Yw7x5stGmztjBb",
  "key10": "5ar7YeDvwU8hQaa4c2A2Taicm3HTCU1dQKxjGh6RXNzM5d8uNAmKHvwoGL4koEABXBj8eC8jCSnCB2ReZKAHgxGb",
  "key11": "2GAuPneivvfYtFkhjE7kiWFpWaViYj2xA5E87EfS2V4KEc8RZLvLTrwG8q5gE5rA4aaE4Ga5F44TokkYyxWebN7f",
  "key12": "3NsrqkuS8wVPwX5Z1i6JqCM2Dn6zgeYHdtYnaLpmYPQ7ni5HmJByuq1JmXTvVzvPYLgQi6K8nqUXgzyXRBahrii7",
  "key13": "3otQyESx8UweuGddM95ntEXK8TzTGHz6VZstAvg4DGdLw1no6jw4RksWtc9hABKyXdAwWxUB9nwYxUKZHEcgotxe",
  "key14": "ZxNDidCvUSKn9W1gxjXn7FXHYjsaz14aM9sbx3GxUV2uZkuBaA44AS8AE1poWHQLctEmLvMMKoqX5fhiXno3UPm",
  "key15": "5cgqEQKqSuK7ka2EqNTmgeciUyYmVcrqYYuTghtauqnA7SyQh7zs7yK2y9trqo7TEduJWnT1MySz8aAEPje3EHtU",
  "key16": "33PNwNAT75GGBp6RLbwLg27nedJos1u3t9jubaJKzmzK5314MAP4Vd6gN65DdzVphrVJH7wmbB7TxvT259Kjhuvd",
  "key17": "59sNxKa4oXimQ4vcNKBQFAahbSum5uKn6mer98h9DJJQcDT1r49U8GKik9bMc5quGLjY5JtvBuhkZsaxQDWFTFHS",
  "key18": "3L7zNPdGYk4LptQNcGb1Lq8oQv5v8eFbRuCs8Q2GsPYEqVWgACdXvJyQCeRko97cuFLR2jwcu2SASm7tpZ6RYfsE",
  "key19": "3A2ZgoyigMuPtjMk5pJBvBzxXB4wUa9xksPFyswqGFmmYhrXC18FzhWgVPmTNnwZhBENuwBtVCSeWSGY7u5E3goR",
  "key20": "2xPXuqaffoGLtFPLaJkzrLBBdeqRrMKR7SgpghpDDyvpRKdmzAw52ZUNEkyFmefAfqyEjrGPxSj8amwTkJoLDstM",
  "key21": "56hwNLMPxkshXrU1DxK1gcuyCbb5K9c6ayfjgJfR7cQnBowCfRpqNUSDxYvh6shPuL8kSffdzTPGtDpVjjtp3XfJ",
  "key22": "3jZ3ZXTvj1hMpE69WbRMjS8K381wh66JUzzxBprZUZZjPnuEMD3YBtxtcchHUzHESNmTsgKqzvg4me1tteH2aEMS",
  "key23": "58VvQy7LKTdjSkHFiE6HQHktRBdwsAuFrZNZiGbCdyY7rHyEVy8j45zF87kBg7T6kDh1CiCxvJNgFJhZHrqaPUXM",
  "key24": "43EJB1EC9yRGUmXhZoH4TbRSKiWEYKtoHPwHKg93WBU4RUDExSZdE3TMHK2eBhAFnHzAbxpRSHCkxCumDh5mbx3B",
  "key25": "nDpKVpgBUVFVWZtF8dqXhSLH74EfhVovd5EpQg4DHSv2TAEG8cGs18qzv5vTSutaD78sgEbMhW8Hp9hXYQma7GF",
  "key26": "5VNb7kJjt4NtC8yh2Xpn4fcsF67WaF6KbbxjAi8iotA2tJGQWmsCMdAP68waa51njHK2ZXTAVScmvptJZ8gYoSmu",
  "key27": "3m8P11CPEisUX93H1nFm5SJ5hwgEqJkmfVx3kPMb4PCBFPX3mY2msYTmSc4reVBhj9RQecWsRnRAvmTpZLevrz2Y",
  "key28": "34VLGQkG2p12u2vyzQbZuxJ6MZepswWD1Wv1Ucf7GrCF5yosCRpoLHo5jgod2DDr2naTDoFtYLW3PFb9gi8bA5UH",
  "key29": "2ptJVfeAEPiCK2TTApr6MXP5TAEh4itjRoT3C6jR6rgZGMKaT1NiBuJtbeyyZBg6vvUJYyeTXhZ44HMuUoZdULup",
  "key30": "5AqTj2u4jxtpA8fFf4m2o6oMX755JuiPBTK42pTFd3QrK8jvnfpnCFWSHjXKWSfesuFFKkg2HvcJSa9qETD6uCGU",
  "key31": "2CDRfdm8io2cCrDfjDA9E3JAHq5nBdv5WJtM38J4LfjMnn68YRR54awaGEtxo7p4Zi3iNEqVGyGez7WvmrFwUmVP",
  "key32": "3W56cvCQDknkQR3GGaxVwJD8GRwgkbNSPGm4F7LwckfdNtbHobhnVjErpAXB3gEboAxFiXgTuh3b4Jun2wuzvoQS",
  "key33": "2r1m9dVxHVYUM3X8nRFaN2owqSZVefUZ265sx7578SusXC6afKB1vfL7C4thEfuwbiN9mGXwnygePc9G55ftHh7m",
  "key34": "kvK48BaxJMPo1LPBEzKXXpRQzCVM7pqXDuV9jRe68m3VsXkHVBuKN1d6grZyZkhN8i58KoBZZDKtTvLm2CxarE4",
  "key35": "3hcXKH5XZqoTMLgb7AvwvAXtaZYeW6feabGQA4EE9rfwKytKf3NWLx5mx5Tc6SPuDRtoPHFjcYVQPcwnxD3xNziD",
  "key36": "UaD2isDhJ2mMv9nj19bzAnzABgNbA23BiHC1K7BZdKxc7s6b8QjdcKQco3TibHwsptw27gZ4NC1guAqP1wefsrM",
  "key37": "5YtSPHLjBxMRHRrV9pfEs3WLDy1dtfHQe38vzjkqZhxhE6nLoXS622tjj5TAAptt6LfFaSeHLedP4RjavgNXy18Y",
  "key38": "55JR4en61K1cvot1jWhdAF2xLZ4NGGTDmq6kUj4wbcnL7QfBwRsbvCuWdfB414r333DmxJmkkfsBvjFWiRkm5WbP",
  "key39": "xdKsrQhmdKA75DxNsvN4rCrJZmpg4AjmJocGuvdkqYcm7tX74CNDjZFKN6EL7wHgZTe9j6RLcC4uxGXN8teNZT3"
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
