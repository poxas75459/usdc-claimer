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
    "4QcTc3rx95AB4Ver8VXhVwnxybM3FMiDUZ7C2kYfasJkqHJHpt5hLMPPJm5soHVHP67GEZbi7v2eMqqDLnPxqTH1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yTBVvorfogsFQc7WvDctsXsJ4irYceSZ2cVCZQbafufKKDLAcxGfLyMyLsUsPWbz32kXVmtKwA7LhSQAAUhBuVQ",
  "key1": "3evzxg5pfnHqemctBLT6pa9nwdmRHmaBpRyRbBmtxq4146dChFyp3cVnyaBA2e2SYYXsGnZ6E4pqSVAGSM2c9X9E",
  "key2": "591nRDGrNvS1bSef3Z9PoHsd6gQo3iMYiivAWuGGCpb9NjDmZjSgHUwNHhsdviZC4rP8WpbEdmzzHLxcQavsoNcE",
  "key3": "4fZkgMPHMVf5jCitGDkSm8HzVqmMceZidW4jtR79NXG9yZuohyNYxP7YYctoKZ4vmpS6YveJtMpaiJQsnwLaYZNc",
  "key4": "2YiB49811HRMrWTHLGWB7MhxCSNo1Vc3qeh9R5BQ5TwjP9WMNr2ZbJBjCSyYb3awMiaGsyLsHPpPu2VHMaYoGHc2",
  "key5": "GtwU2AmEhGNCs4bepk2VkyBQkCKgqVk914pn1i8sti29RScjP85j2P2eDveMpLd4Vfs6yK3iJbAvzidreGSnrnw",
  "key6": "5sqYyJmSFwXPESzTfzK4cbkzT1VZrB4PHRYx6p8DTj97qyTn8nZ6dcrQi2SWsH8SxBBQUixkjdaeP3TqpKdLW9wV",
  "key7": "KHKfC6uPdSWE3owv24XQHCckfjdN9Fu84shgGrLvaDiNpEz4Hd4Fkv85R7dk3Fz9ALwoHwtkfhoH5veeLPe83hT",
  "key8": "4Djkix616NsfUgpykbZchgCWnDStMYcbw9MGmHETuWWU4nb8MoS7P4xQZi9K1xDWHmEbYtegqUkTzpPBG9ts5eBp",
  "key9": "he6yJUFy1Hzc7SfEWLWz49gHE81t41Leqrv47RHXvRGhfdqzanHPuZp2ohTVfJgLmPPAy5x4GF8D1nGTnwDCsDh",
  "key10": "QL6dn6aL2NaLS5HSUYFWkcqzawRc1pb1RZASV7TzN9A2vpjMi3ka1adbHQX5pfnx82XCRVDFSAAheuc9oi3smyF",
  "key11": "2RLsckQ5nfwQoZsBsZLfP8Y2NpVT47PRS7NvhxWg3EAR4GzGo2xi9rz5LJ5Khp4aRCunhTTXqySRhAk1k1mDJcTT",
  "key12": "3JuAdKHr4UZNB17XcUTBTpFa3ZCQ9qZHXmNeKkukcM4metPRKdWjktKQgKmpoYd3brvcPyESmtdcRP6DTq5KSs5M",
  "key13": "2nDcU9ysjJRUvTnzHvsyCNoZ2GyrKzhjVgkBBtZMrifA8SqzPZLYCSRctoVcSXgGGjM6Ye5hb8i8ZhkKb7T3bGfY",
  "key14": "LeGn3krZXQF1VUuyGYTSRCuycu2BrN37YCwxnLdsEXGJV7Sr9hHkEKyVT353u5azbNhcxUyC2qERY1NPPV5BghR",
  "key15": "4yi21BQMLhpSN5fceRyMbssNwxnR6fUptWGqxStvYPNsaX1LGpGrP5vGbqbajJFT5TYz9ihyAdsojhfr2RxZvGoy",
  "key16": "Sm4KDGUESy4gz8WBhQUBHuMRqCquhF4kMtRK38zg5SPW1PShrpbuGaYR6bptZdV1ckCipHpsEFn1SSpEVqjkvd8",
  "key17": "UDfDtMVpF5pTR47CoethEtv6e1PBGh5nKxwaLE7nzEubmk7PwSeurEyaUGtHfiLqSFH6No378RPD8CJGqY8AQ9Z",
  "key18": "2maGepRmGQmMjHxmCHDnM976BznncahFJbcgeLz1wUXkfBo41vMHWBMmp4TYyPhnRFZ7wijjL5d2pFp7savKNCZJ",
  "key19": "2TKP9MZ1LNrrxVzTXvvFau9KE4oc1RT4LK7Rvg9yFy5vi7uw5AehnVs5Lzx4fLnx6nuHNJTdUD2D174DJ5EMWTkJ",
  "key20": "4eJE15uTTqWMYRvDCGzacftMoScCAN5T5FXDCsBfvLSc3Rk4M3JA2VhQhp8Ugxu9eT29J4PSeGHzAeD9gyLmgmu7",
  "key21": "53aTLDjQRu1SLF49MLziQz3QpWWSEUYkLZjGbjBjUWkTixF8g73eX1UdpWSRVraLnKmBULyMGrFeRwQVok86nro3",
  "key22": "3Arvf9N7Wq6AvsBdWos4epWch9dCDaeFAN2wLS4M5qmvqiy2e1KN9L5R6FfZVsrhejWzfyf8yoGuBwyoMDfTo5Mt",
  "key23": "j6zh4R4VcznAz6fRqXhbbvZt4U1vkmAgP213VtRQeXBZi2RdDTedyz3a2nJbCRcK5zn3WewPGekuUYJFKfX7XZN",
  "key24": "3KN6P9ATAd8QiSBPpqCqZMWYYjpWTR2qoXoAtkd4wYUcTtb4nWU1W4dAJWHNK7JD61PYnAHZ6bzrKb19syK7GsV7",
  "key25": "WaoDRFApWdubd5bpysSyc33KKoupk6k5N9p84EBiByKNa7VLw8xHPZTL6WuYxkgaCQuYcQzeTxtYTUN33F2SR3b",
  "key26": "3RbUFdVkCGB8KnH1tNXu7yj4AvPUt9hYHALNWTqShU7Q5k41mk79cYkLzBFmX6kFAA4TuUskbPDVsUDbBxpEVHGS",
  "key27": "3dXd1tcXS7UtzaH5BG4MUdKUwRoRoM74bbjuU1QuyvCWrkiyekmDBrarZ4ze2nHABP2AYpEvjx3RJdZRH87bMaEy",
  "key28": "45hoQtdHSUanQHLNAkKEbAxgV21djcnvpQb2R3T5J6PnJUVf4B1KXB9Pcdxn3Zp6MvLgmiuxD3i13NsNo1zGn9Bj",
  "key29": "52BFg1bkuqsZY6dk8ZRFjtP73LppDiou5ei4JeJVcTswEhHR3UYcyFCaBdn5ekyxGu2CyLFfD7c6RE5XrtdNwgzT",
  "key30": "2CGQj7ZSvUskcDQscK2xyqNRpBDuo412th3kR5B82RFCGGS6fZ3pbcpZ42ifq3RTqJevZQVnqadwCybApeygsdQD",
  "key31": "5tXLKSzjpGhEa7T4qrkEpu5M1FgVsxiKvaKP2RDese3HZBAFWUk1F5NS8GkhsQrdAt5S4nkvE6fp54R9WkxYnkgR",
  "key32": "3wAxH3xHw3fBeyCMNZMv2MF2wfxAPcFpVyLq9WXd2hMrqbhTGkv7kpsiGHH7Le1LD93wRsM4EwSUPrZaRK3G1nDU",
  "key33": "2CUqkEosT2bAv5oKBYcFCUdkZPe5T5jrfHDbkEk3wxaCf6FBGe7WEhayvDJ6RuB49nSMQjD7gcgGrJ5K1ru2tymH",
  "key34": "xuKq3cbzVoEa8HLrStfTP2DSPuDkgwfdVDuchQRNRKzNhikFj1pzLPJcL1Ksp2Uy9J4maGo1r3FoYZUbqkzraVL",
  "key35": "3gsbTg42VsUZBhpjPEJTZB6cDEJCVahogdEVy3VuT21s5rV2NQ9S4hMP83TyF9aocTS3VFJPiMrTPgVSmtyUYKcs",
  "key36": "5Jsc6BEgAvdYiSDWgp9jKKoudueXPqvYBBZ4rRHUjdWMNHegCxQed8xRr5TXBUkV2P2WMpftyWUNs8ZM29PTiHQy",
  "key37": "2XAv5AtFHANaJfpKg7mwc1SndHLo4jYqpzg7bMQZjsCZkrFNYHUDc3skEENB3m5mpnRgJRERweAQc4Zda3WjRKPW",
  "key38": "4cFcso8TfWbAmaMS89humWP81LBmGCRSWXVRL9FCr6C4mKKf6gtrcfFNR5vsndhCPaJv4ev7Zh1oNi233U1y9ZCC",
  "key39": "4eWE43bBt6v2K939PUNpfg4ndKCkfUu2MEjRLZ3ryYYi7ZVwVPnk6CDhQueiSCmpvcEuFUrWXB7GhJYetnJhpGEF",
  "key40": "Jert2fTtQ12PQT3vSCJD5udDzWyvk6e5g25GYSd6KuHzBiN9uH72uCVkY82VcTaYqTJ63q7mvsdeqTjj7VfQAfZ",
  "key41": "3d4uQt4sBBDB7KwpSXugjB8BwjiLujWj5QrBB2kNPexs4u99P4S72Gtic7TC3aJRL6D79tCnZaP3EvFK7ZCaURs6",
  "key42": "386zKSKvi9DRPK1oqPTyeQXtpiYRCxdW6JYQ5Hrhb7jtYVfMdRq1hbiCUWzVDd6n11GPfiYcYJzAx48u2hXzsu42",
  "key43": "4o47wanb7CLizmxZqTLke7rDTagrUv3XbXRVwRcP6EMeoi2rgxmQj1M8kXN366wPk9zXmZkeJAQVfbDVECy6Qyqu",
  "key44": "21ZgQA93cUqApDiRQaeaD7u1ZVzuo98g28DbRpUP39im398EWxyDkcvwsR4fVJr1advUUA7mBtyzQq2zQsjzCu24",
  "key45": "22bhdU3Rwr4CnPxtsEzoKcGz48rqPC2tBN3WYRnezfY87YbCvgN5wi4LViXiGZVsAYn1Z4Er49Yu9fGBRR5FBXs2",
  "key46": "hiJtpZ2R6v5nAyvy9ZV84J1qv88faGoajQsFCa7FdVJjRpZvppHupLmTQpz8Fe3vhiHjNrp48J8sGxZ7UYEMJ5d",
  "key47": "4YEqezF4MZb5nu51KFPsTM9jpbDpdgi73ftecrA53ZgnRSuCFV89T2tpPdjxaZhQATgACJWZnFmDxVCRVdNUR9pv",
  "key48": "x5oq3UafLLqsSiukyoiVkGbmSnicbnpV82r9rQTo4q9F6GSnP9U6zwLVHgXHd7nj1aJJBgTjq7B4oWpmkzaYZRA"
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
