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
    "2K14rChtydfjQoKEcmY5LCDobrxSdz8BPWvkY1Jj4PHfjms3QUN4MwdpdpjRVAtov4j2wGmdj8QMvJ9oSpekG39e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4apvpkqYn24vNw1adq5EzjBHyfr5BCcnn3ADTsMm3hNvdgp3SyCV9Ff9vwZ51jMqYu2wq1kTEDCiPEjWzawYXXuj",
  "key1": "2wW1QXt6yfYj4dsf4sbPr31YC4wuFkuDrXTzxC1vHgNFZ1MCWXNQehue2HyHyyseDJFY2ieKnL2pohkP9xPNsHoX",
  "key2": "4TVFiU75voKXqysVs5qWFVffb95JB6GGJ6c111He2ZQ7Kex5gSFAgWjXifAYq7drxw2g6UXYL21dvHxCXnGtjFeW",
  "key3": "4YaXK3ywwwYmafS3ps5vpWeB2PwJz7zi1JBo7etw12Kz7HA135EwmviXNVJeqbfbq1d6QnsEPMnZXLMghuXgfJa2",
  "key4": "3vSnWn3uqvC74xrqGVfM99fN8V9dZm5h5EpFsV9M2k1BQerU5QDxwAKM3fPkPSYYnjEmgifZxgCd6V3P71Mwmhwt",
  "key5": "2gBL2U5twkgNcZmEaDBzVK5ZPz9zQzc39aLyKgwPpu2U4Hxd1oSpbr1iVWbs5hbCmwjQxLxKceK2rZKn3VtWksyj",
  "key6": "5mEnyizK1Nu1ZmugVaEyEmVKWoto7h9TnbbBkr7gR5KRAK16ESfsA4trwzKU9qEcEGh6TscqbDhuGYPk6Tpemsx9",
  "key7": "2AVbQU29aZSqyRbQs3jhKiaMG1BN4tN5ue7aUotFJZT42dExSvxYUMxTXjA5T5t3BcT1CaHeU3unE5cqXBXRi8iH",
  "key8": "3fuaTzwzKVVQ3EZqnaDkBmeVFBMzwVDf52UarL5jFDVXmy4FQikojzhJ3AED4aaoVLgVRYRXGWL8gHDBNEsBFA4k",
  "key9": "5knoQMwcPFYJuTG39KNeDJ4672myqhjjJWtwSqQLRRBqmHrtFYuTNtMJgiqdQVFfRp9orZtXMq41guBiuGj8ZDux",
  "key10": "3Y8sEiRXhpZFNwCrMMG9CSomSfEusNiTZ7nAWLa5hYdXH594SFZk3YuNx2PiUPUxCyubM3VTdxxn5BEK31Rtb4c8",
  "key11": "5WsAp9S8b5xcw8JzzTzWLxwkfCHnhw3Jh86o4quKKFimCnZAwPXpCUEZ8stJ8uP9DicMnCU5V1Wy3GZpFFtfGkmB",
  "key12": "2fT8PUc2x3CAJuNAhCULVvS17vkGBPYXPt8GexpMcLVhtCiMhraUmqXkLn83xeVcgGdPhTmkkwDobjX2sqHJLRpZ",
  "key13": "S7xsADdeDTP4WtPYHAkS8N7fJxsUbVGsdGXmsfw2k2YZFPgYYXkUcXyHoYHLuGam4aoGt4CCJxfUYfLPyGsX3qz",
  "key14": "2xGMKMh3Zx9QW3MxsJCBhjacuc6PppQbXEfyGovSE62x9mJXUyWa8mopty84o3qCCTBFhArGJtCnX6JujkvNs16T",
  "key15": "hBRtbYZ7hXgA2EufpKUqasGFxqh8EKLd2LwVUvczZs8c3XTeig9BspGnuatfZKx6hsW77kZyzFBZ2SbLbBcytHw",
  "key16": "2jjiuo1vMMsCLLZGTZMDPp94uYkRfzB6MyDogqYy1krwNVAJ9gC5qJKhgQNfKWEis44H19jaAWR43nZPjswuG6QX",
  "key17": "4mvL1ec3KMwWvzMMCqR7qigTiimf2JzKMBQXaK38RT1GaH3Ptvqx2kXyS5913becqBgmgN3D3DW42wbqw4P1SmcC",
  "key18": "eU7m7bFrUvYyYXStUaMkSo2YWbkbCF2YCDWHtdSnpSS3Q5CVkknzNcft2bRweNn56gq1StPzF57Mfy1CnZVfhhW",
  "key19": "3JV6JvkLryqVVUxJAAsjCf4SJfgavE4kGvaFBpkRdqeYEGKPDhmRFsQ6JamM5ZgDU7DsmttZWgzH9dZSCMke96aD",
  "key20": "35Z67S1FqrZ2wcSQtx8kDvjcYf47zRB2HanTxf5NRzcGX7VUKzjQvxWb5Nyw3ckHwzn7MLCaxEUFTxhsQLh5LTtW",
  "key21": "5ZTJEnDiCw6Efkp97eNQXAbUDKrz7ewaHS2kc4TvHw7KMRj2Vmnyzo7THvQUvt2JTYCT2YeAARRhmGthrQgJ7qeT",
  "key22": "3fAtkTszJaCVq4PQQyDMkYqn7PepMXukUnDuZVKZViLu9ewxk2AUyX5bYpYPGDjMfLabPZiGnz9t3MeQ9G4GaJgx",
  "key23": "Z6sAA1r85byHSn1e8mqNJjB6DF13AHTUqHyCdbsVF9yZSKCcpDp5L2f1cfNYyT7zJikHWcPDckE4UrZDM5Gmxsr",
  "key24": "43BgknjAyiC5qCDFvNrpBKo3doVmYBQUSaA3Aau5iPhY3gYFHf3WCoPkoWMutw9rAiZWwuDzcTrDpuwZzUKJjJAy",
  "key25": "5Uk1BdyKnFG6Xf2Tp3aCkZd2TNAjzr1RktE1Ffc9DrGm14NYJq9SNNzhh3siCtjiuvEQYgGYuPEi9QLzfWcp9sxq",
  "key26": "HQKNrW4SZrbWxTXZQDyC9UKpPvHTksq7UBsGxv3o1F2PiC8qrnWXJJpajsJfGQJqrxURLzwjDDVWJfcDekMgCTP",
  "key27": "42RT8qSZJjttcVNuE5YUwS54kip3WMTEYLdaPMx5rjDmAkYPDqquenx96PJLKTCvLiJ4UJ3rJ77Zb4FRnX7mjGRP",
  "key28": "5fPoy8koGQPxR6UMQwkWkwyvPBVstLDGBn4kQAiTbg983zZjDDjWHKkDNgzNesb18uKsQSSXdMNGzKgC5wuL6Q3H",
  "key29": "4jWmBSQFkt8YSN2MKiEnJmC8ZzSif6jpa3N2Zk3wjtwaha5hjCBv27KbtraQVDfE9fSUAz4B6hPXVEfvnR54fu5d",
  "key30": "445TwWUrkGrir19HQGcjCa4KqnAhX18o82fp4Zr9aN8PFW8EbmN3b88WL7LmhRTXdSCT8abUwVPSKHZbpPsEBdpn",
  "key31": "WwfJcGeD7dg6sfduAGuVFnbpThu44orD6pnJmYRYoy8YYvr3Av6E4zGhi7KbdLcRvVPjSMnXN3Q9CEPWQcGApuY",
  "key32": "64Hf5bNywRNWe2Q97LUQZG4p5uizhTmtg7G1EShLw7PdRavZyEhmhoCPN2aVzesUjhu3Ju7tcFJENzPc9Lqk3npp",
  "key33": "WRTpT1W31FUbpRGhQvMx7SCiqAHgT5nTDBReQe8wiXMNsdbjnKwzxbrL3LNXs9nRfUk7XNSdSGBNzqx8ZCXLPeD",
  "key34": "3cTERSSHW4Aor9FU8LUTc8mbN6wE8ivwGkmQWu5NaQbd5NqqdkJvBDJwSWVcqTDk6E9WDUXRnVjHvxDbLRWKKRN6",
  "key35": "27kFwBY7zBE27R9znL5zSMmbFir7ujWe3pXPct9U9EG2KAjSZXEVKuawfqdZdtxX5EY6e8RwGAzGT3oG4nMgVPWh",
  "key36": "4sPb5iBLtFbAm9dxNj1XL6Ao679oGE48F1NGaNjLt2nxXcTr4VvknJvceyPDXY3n2XeXGTKeo6WXXJBV4d32SWeS",
  "key37": "Hu5d2UU4UNEZ8P8WEXv3JbWgFtsGaFQqQxr3ov6dyii31sFYRLmSPR1usNsFqd7ojptRvRpWi1HiRsvTGLJohpN",
  "key38": "2AQZWWSVqEidh62H6sNErMLfyD9vL5YufgoYBY62FJB1XcmufoWfgRqmG6r4U62fmuf5MZbVKHaAxYX3Lzt8F1SS",
  "key39": "4V9vwr3qTPq88fjvwgvhNUca87uBHMACFLQsGzFQYtKiHtRPrsDKQEWNkR2fimM96CXKKBzGYtLALC2B1qtrYy1X",
  "key40": "5twZEsTLCD6JA7GES7uTwyAH6XgqaaafP8rKnd3xUKzRDDUrNpzkWCi3ggmMqwPQrGYpGQ9koNi99MHyjT1k1irg",
  "key41": "3QQSHorg7asETLUErn9RejZgDf76FE3TPwZbAV3i3FSDdYAMB3rE8AbaUGwhtzQieAAcDe3YodZPsYAbeNrTLP5c",
  "key42": "64Yj6G1iYVqvRg47wogALLjC4Tu8uLj9HKoYby21A1JyhbsELtz226zW2QeVKJUfo8xtAFABGr49irswsvg24iAG",
  "key43": "66KGVJgLrqQquf33DY7KdXxPBTEekX36vqM2kKwBE2g8K24a4u5JBgHHSNmMaKCwacBkN7XhjLrjj454CFT2kcz4",
  "key44": "3NRjEDSmx736vdbWcwuvK2oRiM4RbwgWMMeyKqn81hEuaysxPzjY8uEpJK6qJyS87qVdbznsujM7tvnUgZtLJ1ZY",
  "key45": "3ngdSYjrNDRE6ACiST7ppPmc2qpfSeWaqbkxaDgghtEqhFGfr9ffGMnyph6cR34ACz4Pi3aJHHMJeRCNUkXKFb8J",
  "key46": "5GWdY6qFfh4XjHQM3k8GbK8StYZCySRMcFnVFjeDRoCTXWv46ah1gUWcHxbPs5ebCHQ3XYM75JEpGbkeqApY8M67",
  "key47": "3WUW4WxM4CUgFQbCBtXFNeD3pRiP9yyt2g2hSW7WAX12QvjxXCTGVfbVZJ52WwFHsJJ4uiK7kTvtDsCS491YzJvi"
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
