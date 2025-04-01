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
    "4yVdemFj4WBR94PeH8misaoDvFzQryAJbToXWZw8eJcQFhmmpzjfaBb44sMwF7UXkABVegZ8JPfhSWrxh7CXt6Zi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "233Jskz5kYpKMvT9WgrD7ZVbYpA9398YcrtokLhKLrSEdjZkNLb13phBY18oVkrVLPR2ZsQm1LdKyitcYL11SiNP",
  "key1": "2MFaNQLJXDb6WgjfYUHLwS9w4sMmwcYsLWNZmutxcGAfsVTBLdS5FEZYXFbZej1xE5B8swmmpgrHCvvFDczR7Acn",
  "key2": "37A71e9q8myrYmDuzMw815MNzbf3wKxF9e5xrMUmVxq9nv4UvvyXSMDSeZc6Dt64GaDCH84Tkt3uG7AD7gw2s91G",
  "key3": "rDQsUUH6yas3BeQsx7oUGAGen6ttm6zWEzbTsgCrevcsJs5y6XJyDcQzwbxq267BszRHML9viAKcYvddxRZ2o5Y",
  "key4": "A94R5t9FFBgpD4pLMqmGkHnPaxSyLC2JPp8gM5JoMnZU8apJPzYkyoE8sfyQzEE2nJ96UZjB8R9ShxXBydhCnVn",
  "key5": "5SFjf4d8dFLJJ5SEAzCRQRB8Gjfqp1paitoW7opxHqvEfJoUFhCEmkoaoz21fnYZDdUcJQQfXeqWsqVyPYiTzEjU",
  "key6": "4ALvLLRocoT6Mu8rbcUDBmhDjd1MXgtxRKjFxgEQUjT9E3KBQP6c9GsHzPviWroBU8PGpAFKFHLGRh8MosnHyQjv",
  "key7": "5G2F3mKjMtRnkQSC8rD9tHrYK2fDqSTy6USm1u7BrkDPENhXJrEwA55SgHRgHDofJpZk2c5uD4JsMZgEmUDsuUk4",
  "key8": "4VEsrMPxaVyav49wq2xQPqhwaadrUQRBmkAwB8P7BH6PBcLhjSJBHk99dLYP537FhBugajzATxtugKw4KTLWbcU1",
  "key9": "2KS7vrK5XXEgbz41FnptXuD2SkP28wifyL6cY4qcRVCiUBV9jhDdzjsjx3tu9yqMFkZs74W1fNbEj8MbMyxnENVb",
  "key10": "3J4rFFuKvEt2b6yQ9cW6tMgvfe3JwZtiZpcoDSytZEDGimDmxgthNUbrwaDBVRKVVDATeAkDD8fdSgx49pjEzcsY",
  "key11": "548jHwPofdhueuQBbe3dotL2UDoNTbSFgLZVxXvVaXtgpST3EhknetGoBu7RLSLqQpodFUGn3jTzVrNr4zVHaYs8",
  "key12": "3a8BkTkM35T3qKSjxGfo2XJqEmvZCkbayE5c1CJpjpn8jGvxFyusGmee1tvGCRsZKDdeKqZeiwkCBfEK3avepYpc",
  "key13": "Bn8b1dNPSgnXcQjSnjt3d5uAhC1VPrUHpPG61kKNAd88m9aPzqaQvTu4eRPfvaiZUvquFQhyNwyuZqwspJmcMFD",
  "key14": "2sv34LQNATqpTxEY8ujAGAXGS6nbfmzmaZgKEF1v5JEPQFdSFmyrdohMJ5ic4ihRkJKPwY8mhvMANk8zJPNy62ZC",
  "key15": "5DY5kDEezUZxteGaX71r3EMzE1s6fMG7AJ8Z2BwxfUcFV2Bz1EJ2PLdsm7mLRsp3hLEAxp4TUikksqPSzkaojM2x",
  "key16": "yquGU85c6aS7JbqcHGVAdLJxbUfJ8HWtcGjL54inY85VU54nMnxJPn9viW5L32Q4XyeQrdS7pF1YdPvFPLcoJzr",
  "key17": "2HzQYSWVqiLakatbjjdKHvMyS6pAZfL43YqocKUSzMPwSihPitAdBz4YvD1742PaFcXXHSTGBovzy83i8CLmyyEN",
  "key18": "22KGM6Bv2iKgh2YZ5oqVpRkhrRm1YyxRaZorMkodGXvPopXMxzdduBxHyimo3yQa23x6jVV7MNGHdZcaqLMLK4jB",
  "key19": "3HHHbYfr5zjcy9zaukNgXVuZmqBNHZi9oKhbJC39oD1LV3YaeKWEBQARJoEaRpi7g4PVftCfXBExaPaioavG9YCB",
  "key20": "2r53cCzSjrUhoXayeEAoZAHdVrCRsngQeDasbYB7W5NKnRRvhFQN6TyKj1F9Hew3rpSTbB5qJrpthJb3dfgHx35i",
  "key21": "2YWvrZwhfYCeL8gKhBEpfu13wvW5hrvGeeF763EcAFRMVGgeiSwxRKwVmkbQMFQ9kBartbkXx3mrDqzfzBwbVX5",
  "key22": "2mDfbcTAQmh7bHAqLFsH1c3wMMhm2JQLub4J2Daj1E6gLLtVPJmNV6KNSQG59WBifTRT5N1jPdFBJaw8SLArz11e",
  "key23": "2yFj9Pw5k3FJyxEJNqAkZkXic6qAwuoJYX7pucXoJR34bapDnEK4yFiJsvKu3abZ3SvS4g6Z1Ltco6y1zjR5iNPS",
  "key24": "65XwuGKxYEuPUCzWScyNSCKJdE8cyGquP14ZhooWn9557AkFHqddcC8tq7mWE6KyiZGKrhMHBbf9BXJXKB2vMuR",
  "key25": "2ivSVPAhNBYV2RF2NscqfoXtRDukzngQ1VWxmokCUhZUpsrjZopyESeYR3xA16s4juWCx6wtntuR3baxetk5MPwZ",
  "key26": "wNkg3B3Xx11NMi337iHw6bsCDGqoNckVW3aCvKeWdES7WtdDyjzLSygpoCbFV9DtZ8TPL5coj4B4prgPBUsXHCw",
  "key27": "48qhrVe7Xkdvf1Cg4trnouf5tTH9A2QiNCzXuGFgYL53nwKQLFVSAQEMbfx9hR917jHEEhKcpcXjzH96ajYEwLCA",
  "key28": "3CaZeyJnJnPaFLUeK1APT1JrpAm8aV2nJZ1gRqEHmzE7J6mK9tjywcZejFRZiEwxnRQD25mNXmY1CW7Xmrfecbkf",
  "key29": "43npFPNPHaEim6J2KxU95RqdfVVnMgnxDZ4PuZfSAHKM3GuewrDEsKV6nARZBWxigKNhKSZ3L8nMye6RuH22UyMp",
  "key30": "MFNnciDkCmPB3Ckhspu9ByUkqDJvEsTVc7x5tYqRpAarDf4K33shK56PVrXyzHrWDh7MK5EqzG2nFQVTpBbp2Pm",
  "key31": "32cxfcNRTWgCJJZGcnL3TCjtZvFAzSpgsYmPb9ovtVCHQ2C5MuxwWYzbimgtCntvUc1Pczd2ZSR3xFpfz6MTLHD6",
  "key32": "ECLcjzjZEaEHXPp1TH4PCbpvDU55rGPuf75q5mUx9A2mWogHpGW2XmJEP5To9M59syRJkREhR62u5XH74WUzsC3",
  "key33": "2LJgeRWfcHtQGg64LKZ3bfd9DDjSxwjHPypaAG3t2QdkYukbaFgUWJL3w7Fi9Bi6Jix4DKUAjAWQ4Vxz5Zu2cERb",
  "key34": "rupfbYuT6TFfrUb5FxQYivkEaXMSvMYBfYpxe4bozWXy5CWt2smCod8cjhGW6zP3ER5dtZH8T4dhrK5VD7hJTdy",
  "key35": "4T3twHDuHnBs3CEEpMZm5BEbenDsrh8DQmw3K1bV7Qs6YjMCfhYd7KVV16cvSgs4fX3MsDDQKBnVzBYJjuVwJZaa",
  "key36": "3ATbExSszZXH3auMk45Tf7UfJs3R9yJe49QoNSmKhfBqgytba2MR53rgbrxBTv2zqk59CbvomUvNe7Pey6o5cVer",
  "key37": "5m5EvqbaKdeVFGGkQYRuxXuR2kqwxESBRXA1S3Qpa2wQYEvoGuS6cuiYePJxhfoJvb7RBuuTMykWhsRvbLaAFzc4",
  "key38": "66ZTJNpajrnEX8rV83bj5ECJ9XXm9kmBXkb6vqy1e6zuLzfuiTrkwBbckSr7Qd5ttUaXuTz6ujpTvcX4LQU9RTWq",
  "key39": "53bCoMLLztuJkcRhrSv8ZyZ3k79g88EakwsX8LdhbVDzRniydnxmTWXNmA6sqKztpP5uugbtuLBWRJS5LKazi7kn",
  "key40": "3vg1TTBLX4FQJC1Jnxkq4k35zdn3kEKsskQRdpn2EfRn39EXKwF8C4xmgmCQJ9camUkGKGNr4UWjFu18qPBgFBRf",
  "key41": "4KbujAYVgiCD2RNdw482Y6EC3qyggT1kviTn69B8LanPfFU3vmn6fm2wfHvG5MNwxrK5uRzQa9QKEgJt5widV1vp",
  "key42": "4eoxoJKmaKRQV63BbEoY9pavnnRJAUmRaAjszq8nbrdYio2rprs3MZx6TPkHH7qyobmPZryhoyz63W8mztiEtZfk",
  "key43": "4HN3dBb9uGQZkhZajW8EbEEzptDWLBy1gjH6gFficWM3DNnQp8hBmbUUVh6gAHwx2jEv5xbtFv9kzS3GdVenoAts",
  "key44": "457fyJNwrYJCrvvsKXcrPKo6VDGrh9dkqYiGpPEwCW6tu2qiDAci57BL7hKpbzngzFUn6F49fGgF18wTwAw9RyJV",
  "key45": "2ubMM6hgz94LmXVVaK9E5zQMyWsro49fULsfyvwhbRtetPsf4gB39Fs94Nf6rpqVRdqcnPgNgr4AdmRFg6yhdmwR",
  "key46": "246GXRuTj8o4tqseFk7JrUac1tWP91EpeRpwrtbJsRgPEFVe4tkxGVu7QzCbkSWX4hkKJ1j7SC6GKLgkSn9UJTZ8"
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
