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
    "63om8SXuywNarnoTFtarruLTRcZScom9F47zjCqZ9d1A7tFyC8n76aRZXbT3egW7cqNUY3FNiG2pMo5fWscB9Fuu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LkNp5SDYVBzxMb716GcWrSwXQz8Dez4yiiCrijoQsw4dVKUKx4Ah6yLvK7nUcCC26CJZvQxHJmSYimydFYUpAhX",
  "key1": "3BCUcbF6TnZS2qR4jmV2LfcgDHU8gq2pZUunJXj2cvPq9joZgJGLZSUMJpbTESLi9Pdvi9fuhSSynTNGHb1APXuV",
  "key2": "5R1A5rCp6VHipfqJj3qtTQy9L34d4zN12FDcw31FrhYJ6Zfs3kQyBwj12mZYxMv8McyAjFiLAHGiiufnWSD27bMq",
  "key3": "2npZHeT3zNPfSX6AmcH2ExPCfpkWuepokU1oV8TmzVrroMcH9faE2vwwFm7dbmAguA2BatDkzCL5qrr2w7SrXBXK",
  "key4": "4UmeZW8VGfCQiDLheskfgommqpJiJpU4A4Gi4Z14DmGxFhtk7AR2qUiik7tTwniEgBH7hBKaHt4k9TNWVVLwapPj",
  "key5": "449nizEBqfoH6f311s3sqq5RfTxsbYbo5BnACGbTGyZTLCzrAfoBnbDB6J4jREoSUWPumUHd4e22p3dmzyCVJvWJ",
  "key6": "v4UY3D4fRn2YYv4y8PhQh9CNKTTJApMj1d3ZPfTo3Qq9HcUAiZGaStrpsknPCrncP547Y52u4hfvXwetSBsVPpU",
  "key7": "42uAq4niao3RLBgkaPNFhpGSfDWMW7uU7W1UbR7fXHKrkhbyGCD1hkM4WXEUP5Mrnx6FS4PLS2gvAVyN5gqPXZUn",
  "key8": "5aSYbZYSDzTLe8zDv1qeEUtVsCHbE79SVkB6XtziF11b2x4iPk6MYbQTnMcnEusRKYQ1ngij2TU94k1H4bDQ4twi",
  "key9": "jbtdMcXHWJJrqJqX6ttcYtVhd58dYz2ad486PahoUDpRNmD3WHzwgndAFgm3Rch1ysiS6z6StbtxyVmB7arNYts",
  "key10": "3KNRmpihqnp3e9TTESNzCe2yF1e8FsRB3nFrPysqK8zBFDZz2hYagkmLSdRfvyPdoAtVRkamVcoZLk6bT2L92PDL",
  "key11": "2ZM7CHMKjwL9oQ858gtGozww6txvok4fJbKJmfYozxnaqNB2QQgTnRWJ4xboxA1YauKT4Zt8r1zZQoR1hJzJCYgi",
  "key12": "2dVDASX4Gk41xUTaKMJNEiaC55athy7Zuo5NgioSf9hpRcydUG1vPv67jHqQkWpJKhLGjYfsj1v6bLXK53TxK5Lw",
  "key13": "5LrfVt6wKncz2DzkQetfZSZfBFfTgRpdN9NmAfEM7vo3encc61yECyHWbkiuA6xZUaKkYBPET8UfAQG4yyXXFgJm",
  "key14": "3Ktip6riS17tV8C55x63aU8By6YENV3ra49y6FzvMf9raCgSUSaJAZzF5vNg9iwFFqCT7f5vvzuC7ryzmMAdoYSU",
  "key15": "4mxJAHoW9yAvDMeWhM8LZTgB3pRzoJhZt1AwMiyjWdztVYAiduvzoo4ujMgXBz4vjZQtwxXMrA9sAvKNDTf6rHCB",
  "key16": "1qf2mk9ShNrMXJC3TY2XaqFA8jyh1pQHbLRbXkZsyCWcvrxFra3vsfjMidhnSPi6XfeV1H3hpfMDdHPugqU7fia",
  "key17": "5zgz5nXfcMGbfd6ArVYgz3TD15ygE1YNWujBeN5L3BDt2DJJvmriLdLDvKpg7zLg8o6xbqzNjQmrSr9ZkDdVBAno",
  "key18": "Xq8yHqAQVUHGwx7dy2fJupPWwjjS5G1Sr2C4EhtPjyJa7YyWSAvLRUiKDZwkr1exNfRpEp2bk1GK2iJQNgNaoEx",
  "key19": "3kSQpHJiNBBkbTDBtHdeGT1YeNXwzJVwLN5KQvVJ182DKWnzAGbaGUvVMPoVPkoawnLcE66tpxMUQKc6uSb8kWyc",
  "key20": "47GV4dh3FgwgMKWZ345s5WR9SJG42RPX2bogictpU88gzbWA6VckWs93iWAeNS7gWXdHJPFg5msqzBRY9DKdf63T",
  "key21": "5EG9mYXUpUvmFVbiT4mnyHPDc29sdjDmquHm4EVFwqB7cDeMFKUdTTms3sw3DP2ksdKcu6HJkds1zinGqbKk7AU9",
  "key22": "aqda2ve1h6UMhqiWGFK6zMhBcx8eDXi3bMv7D7gAyS18BgbJVGvx2wxK1vtQfHoW5L8RLDDZdZnwibfoz3k4r4L",
  "key23": "66HomFgBkyAtJaGiZSRwjDqnkrQwF3SitAmughFofi8Fwrxffk1AmzmFQuUfJVKsRCbbjPa3dRLxCrhpnqQDMURP",
  "key24": "WoCkC82B3q4oAVm88yFMYMbaVXGq9fLbq4eDq3wxA3rpeZaEGwGii6CL5Jg7za3Wsjt3KyYgeaiPAVD1P5fUbQy",
  "key25": "5obP3xc54MtUhAjF9VKizgm1Q4iLZ5Mpi2ERgxEGBrGj8LqhsvTiGrf2WFJbXsEfoK8NgkCQUcFnXxjZrRY1K9Vg",
  "key26": "2upPYcf9BjRZNukqPtGhZMVEPZShUifV3gG99n6HW9gTTgJ2cbTHmaMHAYns5Vcp8bd29QXs6Q7crnQLDz8rcgRN",
  "key27": "4WUqTfDRsMfm4rp4ouMu4fHeocRv2UWciUK7zCepbCAz1sQALddo8ZpyQYaRP3tHDcrVrPkY9jrQ7kT9j53i4tFt",
  "key28": "4Trmah3M3nnRv8RmKJXb8M58VR872a6Siu8CX4QBPD6h4X7iBe792iq1eNEuw8m2DdYLNv9JGsMzwwA7RchXaZdF",
  "key29": "4CNxEQMtoxPcjqn9JKmBLQEf2jAYg1QVmF2DUgTZczSfdNFpytovHRbkfmwLp3D3Hz3ZKYFWthKFC8ujFU3DbqLH",
  "key30": "2UsCM5Zd7oFxCdzP6kVFwRigmoQiqbnzay5xndfsQ8sZ2G5Z3UNG3Bt5r9cfQZbgd4Szc3tYLQvGpKjhefkqmQ95",
  "key31": "5azRSjZx7XGwEiQSBN8uGSTV1CPRbRpW4nMrKgFVsJ1TfYVLquCzXfqDunEezQFitryJaRa11LSM28zTTUuWLcNA",
  "key32": "5HxrESXoe7aAbK3cpmKidM4TcpFbKLUvtuHGXKTTMomBVpGfJJ9c97mjZaye6cdA5qZSDMJyKLGmfimcV1N2jTRg",
  "key33": "31jSB8z3QtiGpPvfmnUB52J1ELvQmBzCnKsLJoUHbVEGph2AFsUrNwB4ms2TfVs2vfioQPEC9oMHoEbhmfVU8DEJ",
  "key34": "3fBFiFuUkoLFUcPJU15ivMT85GhT1gfkbWmZapbf7RbfS9idTfyEMceYhhzzVFprQmZUduPp8KwmMxPVnXx76NQs",
  "key35": "x4yWC9WXdpvRfHRNyn8SdQAjZZ9XrNn3x5GvykERhWRvQRgmsmhTstNkxkLsSNnmkWiBSxi8yTfhD4s5ZuCfgWj",
  "key36": "4BZJKfTNfLq4iSbwmrb6bqmZmEwfbUJ15uERJEYNjhchM7n52EHBnSod1FK5xGwJ1goqbBGiconKJzcd8AEgnJj4",
  "key37": "49CZyvzixQaDQDmACLv6XvokoY9t8rVwmk1fRk6yrFJcfWAG7mtcKTD1BkuppjYDYgnHza7HEXtd1ng7imJ1RSii",
  "key38": "2UgXLLbrDuoeqrvQzAJCwKHZcsUk6bLxsNFHnYLpdfZ2mwzAmErnqqPEYqcYTfDdvV3AU1ZaHHVfjLTMr4A8iWNT",
  "key39": "42hZkzJUFfQE4ZDwmA69thXmF2L2i7JQV1SQ2yMcwQRgxWJWbnfcaLgeJCPdgmpDuRn5wizf4t7PNpu298VWyDmw",
  "key40": "456xrxSghhoFhSkBQrB8vz3pTt1fy2LUhPG9Qtrnzzd9KhY4Bc4qiSiEDNt3538r22dKp83A944ZViw5yvuuR5xV",
  "key41": "MBwhPPixrrkHrT7M2xUm2mH3fpLQqieykSbhf1SWA33fQq5RGLZ86oYPqCsswtLqvdceoWbvovy9A5DHJjtZ9q7",
  "key42": "42m5bSXpv9FtN8Jb1AmEwDTsttWtwUMwYpax1t2YxKBznZWiXKoUVYnLEKBoASUAnA6hEoR2yziZq5pmx4znnvvQ",
  "key43": "2h9BoaXpsa2WzhAjGy3Ck4kbjUmcHwLmfqtC9Qwwg2zakEz1tmUPKvgg2Z59VpXR5yea8TykX9ngiWnxVxXh7YWn",
  "key44": "1dq34JLSHJRT9s1fcBThWteCisSERWjmQ3V7QGJQ1MxpNgNJmpHYogQZtiTNfGeJkcj6k1VjTHcJuVnWU7EBHTc",
  "key45": "5Rd9QMdw7NYarov1KQAkU945eKAzHwVBRFwXRg5Zq1hUhvRRNBhSZkNyTPVanxDYP399j8rFqK2MBQr1nduvX11K"
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
