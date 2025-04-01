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
    "4nhBjzfcR4XesCYs8t2zeayjL3MtqTYbymfdJE5cpm4U2QgNV6Pv6QvTBbGn86KoDQobDvQA1W4WGUKgiTAc7RDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ac8HcDdjXP3fbRFGkJgP9EyUs9ufgXA7d7D1m7Jec7PrSBBiHQmpnnC26JrQJDqGtDF73APPtFC7XoHWqRUXCfb",
  "key1": "5SNFXtNXkaa1LS3pMDAeVoqWhp3UfTskEa647dekKTcXGMNX5KkNerQTMZ1qJA5Uoi1vJAux7dsTAY1JoeSFB2fY",
  "key2": "4Pj8UheoKQgu7p45CtrA1YxJ6BxSwzTE123CJw8XgpJQdd6gvwjinAfQGejMPWqfHq4xzgtQHoKEndWR1iwPFzDK",
  "key3": "5P7FrRePzK5XRKLoTqMoS79X6wwpxzuaWT4S7Zj9KPYWep2ybXE8JZHrcXQqdLHx49yWSVTzWu64H8WkcGDEzzoX",
  "key4": "VFsCr8Gg4CoLdSZ3Ykjqx9KHDNidP14UTPFNLkaZzxQXKJs7paEaPjpqisjhbHBNuuq6SHuwymwaecvMwThjQ5g",
  "key5": "JRBS3qUnKKraeJE9Hq4Td6AyRhNiT6qrC7mPr26mhH4GabisxoAmh3aMxKyHFPva59rysbmtBjTyvf9DMhGSWVx",
  "key6": "4gDuVGVgqhAUBFLrKPoRnFWAhaKL8xZP6eLrUkD1R6YKXqQWRFr9Bb4ik8Uja3KAKf4EsncTgzgmNwoZFErnJue",
  "key7": "4QENDedvVFyaSJakNTUCXf7Yvz1v3vfDMLXiJmGYDm8Cj4SSNZg4c6gxcAEEbmj5WHjFs9SX9REKRuXsq6txKLmA",
  "key8": "2Yax5xnNwj3hFSwsBgzRaYUVQguYSXpZ5W4vp3rRq6uhsC1tQD5r5o174dvnHz36feUsgMJ9TSKrAjQRcVinjNJj",
  "key9": "5PgdD8Ypu3MFZRbjXbojPrvmeY4fwKmCEXuMU7HnshaJhrxSXHKWnGGepzptfDFB6UJz5GsiDFUVwtpbPurKDPtu",
  "key10": "41D85PKryt5cYCFdGZKjxMTPSFW338viDrh3kVzPm5gUrkvdSDugbUPwLPydcceBTSJ8NvunTb5PjpahLWHTxTw5",
  "key11": "4jSE3QFqBCsrG5X7JrcfHhfwyJdcL8qbD1n4kBxPm2pTu2zyYieeKvUDQmzo3NiaiD3QTDVGeEFh3ci58HFnj3M3",
  "key12": "2QqhuXcxrtyDmRdjYYgZbh2xKZAGtjZH2PBrn74cohVS651msdRcR8Jaos7Nx3B8ZjZedq5LktVm3NMS4qVm5gfp",
  "key13": "3Jf7T9pptRsFTxjEqZo3nn8ocNputawvzT56ewAYHKDV4LiRA5treQMLc7Qh4ZEQF66aAH3ReiCAMxJh9A8Ntf27",
  "key14": "3VShYvxVQ8Fhds8WpzUuNSjX9vX1FNHCD3zrsK8FhcZtJNgPeMKPFtjMca8239Hb9qRYij6BwW9oMARVriht8zWE",
  "key15": "2AUgMJKZp5hxeEwNhsWjoj3hR1gjL1T6mHHw2hr9tjvm4KEKnUg2NJQs29gDZtAHy7qgC5U4HQeHAMZHvG8peQfA",
  "key16": "48qTTzG8fhAvYAHRCunUWtAEs33C1jjTkvNqvGdXKQoWzGDCbpNMbWcMg13YTDutGRsogAM12DC6bxzBZHYf8eko",
  "key17": "5HfhC6jLex2bunDFnbZi7VJr3QSwGRJk7kHujdqN7phjbMzkmcjB2FYTHkCuJoGBJfCgzmZWuKpeLJJZN3tovDXJ",
  "key18": "3tn7419Y7u5fAmgpAzy5YEphjGnaeGNuitXmaPHfEwiUsELRcaRoRJqXwimdfTSp3bFFmxeEaA5hDhsNkvuWRCW2",
  "key19": "Tk8QyjADaL3yWiCBDCZozQ5ZXpRqvh26W6rPcH8jw3kh6zZt2GUSpovpnYqjc7ockijX818Vr2if77QQng6DKxz",
  "key20": "3veSnLT8EVFJNvi6KghFHcUTw7TWEBBrWLCptidLZYEzig4pkRjBmEn3x9simVWh3G3RzrHWPzWfoExHKkTkSsZi",
  "key21": "4uqUi8G77WWw4rAVFnGk4tPmddoscQGT9wPZRTPaGvCoX6yayg6EPqSL2D95686WFemMMHeqKsdDbZjdoKEpxWnp",
  "key22": "3NwTBpfzYLwaWQ3V2VMTgMhyRRv8gbP5KPgxwU51QWu24qvxibyorkcjNxsb3UfNk2M8azxUKnh5z1byErW1yyqU",
  "key23": "4CgnQFJyWJmQaMreCFRnSRtEFbbVGQm9dpUrZC2g6S6SUgKa7rF4yoVQsnF8dYBADnS1KjdQocT1UwwYGpmbv7Qf",
  "key24": "5vEXSjikyHBqa1xyBkDBWyBBPsiGpYYFf8TwHYT3dK4tbbKzE4wg2jz5Z5wnKk5Pz7YXXxjQqrWTyBsKpk77hXJt",
  "key25": "5pEWXYCZF2QaGKzrwCSMVjV1YSG75f6CJPW5FpuGvMkW2AHrrKtEoKMTBoqjLjkgfMRZoKe9J2HJSFbdhJw33CNN",
  "key26": "aydvyCGippoPGPYsrFLZCNjsgAP8CbpfqauWBTc9Np3yeruTixCoyT94QpQaeAc7sEtvrT6knJgvW47kqbMwk1z",
  "key27": "56Tgy6UgqUfeAcDnqywM43zHtwZq5uUAZB6a1zQn7CJ4XQi8G1xojMAwtXFkCpSoqSnabhkKxUjP5kVitjhMDH8Z",
  "key28": "5WAZgfxSweYDsDBNmcYCvHNf3uc5TW7P8ibiMLV7QLLy6atNtd2AB9zDZeSzxEjtPf2PGejc4QiP9E4R2ugjmWtw",
  "key29": "2tYuXWiug3Zx5SBBWebL74X4CijZLG42oDJNKtaVfzt37MAHq1Eznc1iEWsYfeSyawmuQvEqGSyDauPysQrymKgt",
  "key30": "2X18WiBGK2D1c4b8RgLvi4xub1SicQKo4zMppq6dyP1G244wjpqM79UMox42vAQ1q7D1UmH5BfCnwdnQ6nBmYvCm",
  "key31": "2JrJWfsLGkj9fy17DMsyN4iAYqZwc4Y1u7sN6cnpUvyqYPiiUb7VKYmoM3bmyTr5NsNehH2Gg485XaesSXqsMRjp",
  "key32": "T9r5uk7dn6i7Sc1Sm224JZFGjhnQNp1UCnh1mNDTiV8G5twgLQA6V95gyH4kfgEzHTjtYSkhn62PmcqJuiJuQMR",
  "key33": "3uP71gt7P1WzD8LedLPuCwNQGAHLunEjjVp3Z5sLnqXVMgwH9aGPM2ZCBcdc4Y3f53PMgNe3XxAbUeJWqjQPUxvs",
  "key34": "3ugQNkEBqZWpacGChPhpA31S9y7wyk7RiCUES5fFudgqBwGvH1whosE8iSBLeScPGxezKyQfnGivS57g5g7sgvRu",
  "key35": "32et89qMbqH9cUmKNAa9j3e141LYFUSkoXk9GRmgk7XvP34DiEf7qPZAnE4fqUiLt15k1fEkrkanpvHg6LvEPiZR",
  "key36": "5nsRdm3qLui2U7a6JzN3TAk2dsYXCfE7u7yHfEEpmY4zKnswBymwfx2imj6MwTD9SSwa33QTkBn6LDd3UWVsh1pQ",
  "key37": "5TVw8JScgw25E7kVUKUh4dk7WAH62tfbUhbeL1D3FYnZPyhjom9o7TusdVehTGvMPZantXPPvmwkEVoPSU6MMqGK",
  "key38": "28cpHVk5nxNmxnSEm7MSHQmbqCgoWke7XyNNehPR4rezLEtYuhwveGgapHtNbTGzQFSRL4oKoGTQLtA7Xrew8hHx",
  "key39": "4HRd3RuhtmsF5sMSghhaBpoRotKyp3TRpSH1APrVcsf5ENY2z82aQ59Yq55Nns37n1veGAW3uBvYU2VpFjqfaNHn",
  "key40": "61WvU63WpqZC8XVz2qFNHiUfGinBsdx2KFGPg6HCo6FUN2ahN3YC8hsZbwoiy7vz6caXienkhdNtt4L3wLKkKzm9",
  "key41": "5KZAPE1f5K3HZ3dUBYKCTVgfRZUmacPSTFcYpqJj6pLpyuHqBCyghjxn1n1Vd5e59CzozUUdhEEeq7ZRQsCubZhR",
  "key42": "2iCMn7JBsosjCRPHieY8rKBcBuThYhVbjsnUBuLNgxjsJiuU5fP3hmRZ4ohU3hUUgHbmeYH588qvsyzMMzKQSajD",
  "key43": "1qNEE24rcK1q7maij59j9bmbY65LW8xEktR5p7Uei4NVC5f4beJHu5cuD9HSKgQYdRGVz2UFLECHNxqNTQXbN7x",
  "key44": "4KpEs3T5JDuhG549bEgV2h8E4GbHb1p2fBSVpnqnxZv8LdwtwD6ujoj9vgmg6GXmZo8SZB3gTgQryhszVBRrgC9p",
  "key45": "5xFUaMoVkNgPYFmi2nGFjhmk8umubVJRWWsNZeA8ABpkwYWpZNXWw7ySQu38w1KeTcer64cBFqCFmpVQC6RaKg4k",
  "key46": "2LJr237NC6sBkc2qrxbnhWK3s4REiwoLvjgYmgdyBpQtnQT9XwnEFLSYokCKP8Q48S6Y9rS4PKKdPXERszL3oaet"
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
