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
    "5kqfk619BhCaP2BqWSN2vUXRWaf7u62TTHAS4E1KBtfAeKNHtim9ss5pgDgZr16uaHr4CSQyzsPo9rptmfgQ9qAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K84HNPqTZj1G3mxggc4qezw5F3SjPyuKu4qycQRLJR4Ei2w66UUkZCKPNKGyN9tQGYL4awsjSdrTG6ZS3dAnPth",
  "key1": "4rM213yU75GNpVvXJUVncpS1X7qar1rZ7bXqRHWDn4fP2XPLpAqYSGBHvJMJaQ85xmXJvbU75USZFj2zLkKsRXma",
  "key2": "Vp9sL9y4moCg1gYU75EQxvaCncYnnZV2U3TvNqyE63B1tQgBbPy7o1XmYcT9PhC3b2aFCrFwfmMNBvW2MCZ93RJ",
  "key3": "2nxzi2nx1W558ZZPfwQrpH9w6AgMVK1yqwJCVmtrvXiGiSmco3UhmwHYcen3qgsHogAZDJnJ736H7HS3dSVkNwbF",
  "key4": "3sZa7b4pgY5he6N4QJQhFXbLuZxcydYYkaEwTsB3gHuvcgaZAtkd3JSM6KDAdAnhp5C9Go3maLToirV5r4zLV8uD",
  "key5": "39HYEfpjhWUGqTDmkJUc5ESTMzQxfNT5z3TRQT7C15T7bj57d3fRCZcJax4gSMh6a3Pyef9igdQVxzSi1MpQPZuv",
  "key6": "51a12HJQeL9xUnxxDrnYo2fNKEFGMmUJxWdJocJzNXQVgE2akoUykcALTSJxw4onCT2HUMbJUkH2pA9FAkutGxCL",
  "key7": "4dC7AXFhFvdksaLGmcBwQ1b74fXE2LBXuWmo8ghQYH8XvxbKUy51fF3Y94uKxWx1n2AD3Fu66gKpjqPSsZFdCKhj",
  "key8": "rhWUbShgnGiPrCWbV7ZHgJBV7t3chcMzAvcQ45bEXkBEuRNejtqFnquBD3MtmaJj76FRSdDox2RnvibA4PJqxfJ",
  "key9": "4Xi8sF3a661UqB3w4p34Vt6MrjTa9J2MiK3jqr2xr4cdiptoztRxd76KKuCxQ38xPgA4mxC81vgLQ2bc2qeXuv9j",
  "key10": "3RdN3d5rVKNC21zvMCgsJJghbF2poWVZQahDcJ6fJzGdkNoqep5biyVDPW6EswK2tSkYii783TNso1stZMjq4xfZ",
  "key11": "58R8Zo9pyFH8n6Raf5FqdCp9MGjXTfhPY7nAgLBViVErVAoaTMESkkD2WDTYjXkT6ErQEPF4Q66NKJaEfoWW8D5E",
  "key12": "3uKFLe5bMgBQdgCQ3Gpnr8v692TgBbpAAGVP6bZQEgX1dkbRGdiuz7fLpxaQn1inSFvW7f83KjD3BbR2mGg3R6S5",
  "key13": "2Ya3cCbytX8gJF67R42crBevdmhi6Yc8iF4bzpxCW8pfgCDkNi6PKuW7cdQwYieb8VM9cVa3Kvu6siYAyVVFcCpe",
  "key14": "4cwM6eayH9Gk9Gi2vpcjRRH8wZLfEo3odJJz8JWmrZtcitMGK9woRSex5g9vZcDbku8q1fVJ8XXY4D69BMwtBAP9",
  "key15": "5esz7kX31i3kcNTTNaSECEGmkTg9XG5kQwvnv2u431LGuuuzW35vF2M9KjhUxp24ygEMNw2B79r4Mwds8F2ukptv",
  "key16": "3N8WUskvoAqmumKiRLtcCWwjmG9idHtgaY5jLZKVqFVFw58FrcL2S7eVC5YmpxgBZwNbgyP81vPfW41pj5ApUwDN",
  "key17": "4KJ4ZFPXHfLBXQdY3itjnPVWGja2xnp9tV2xVZjNp5DBvmXqVgeeJUYa6GXCxsHXKmw43iJQD5cuMEjeoWcioVk9",
  "key18": "4tb8C1oKqd8CdQ3naJaZXq7ZPpHSooEEbGptRhLq71ti5GApmbCbVcpNnStyeUbNTggwPzSDV7pF7k5va8mBEWbc",
  "key19": "4rUzMT1hiGYxpsoV8Sets37B83mq7SAXcuQt8rpQuZNnCXiP7tfHFJDx1EgnVE9v8dvXjVm4j8WU1kwpBq8FiwCy",
  "key20": "4mu6Lz1PRinP4TmXFiiUJyygaW8b2wMsAT4TaunkRfhim6SFqD3qt4JvF7t6ET6x5cEaxBfZdjdqqzGL2hV3YWaP",
  "key21": "4igCRfc8sYUVGkxEZUkif5uGJg8Vk1ccq844vGZkGU1f8fvTr5ZGRKMwbF6no3Wz3uTAVLKCcyvuAbRRcsmF1hSn",
  "key22": "8tDcAzv3RYLN99BvrYPTt5STKz3G9xMh3U619USMwdNFgmwQMmJdkM22SC2N4n8sCx9JT69frcXj92b47HuXxe1",
  "key23": "5Z5xrLRue3bSRtZGmrZAZ6kCGdFYmKRHCFXWK8eVqoSFE1Jo7Uw7EemzCxLbmM8Tx73NPWju5fkNGcvuRUAkDCUk",
  "key24": "5STJU4vX25KmBFKrSYsjJNmTGqvVRVc6CBMtEAFMRwLKXxKJxnJBVfTdDsYUWarseJ5wdm2MN73x7YhD5mc7ZsGW",
  "key25": "53zsvBP76eAUZa8HLarT6MaZF996SSF3wJN9npz4qTTKYihBTFfd3SEDeZdfp6CLZLxGoV9XxKGDfcbBFPwhYH7e",
  "key26": "hfjKnpousuBPKfPGQBjueS2cLeg1YTUFiLgxVDTLPfdzkTKn3ZZghsua2qbHFnXrDpTgDgaag6xeExxoeAPHBK2",
  "key27": "JumCPo3Y41P23PEyZ7FszpFoaULCNo6SeU2dpJXj1yFcL8XeKZeNvWiND8QmYLQ9nYkJgymNDEgXDJZzJjZdiNV",
  "key28": "5QMvJKEZEYif5HbgTssxvAx6VCCMVZnoNtMSwR4RcFkmnwNdAae6Qesfi7WuZyaDS59BDrMTaHovavzZb5savhEf",
  "key29": "46YuUtFGifc9F2qaosASnEpfMG2FvG72zw4CaVGJfBPBmJTjJiFbBAgME98kPe2BKVMaDmCTTV8JKVd3YbscwUHh",
  "key30": "5V5XK6RZ1PvBbmKHtXBv7bsjekbHyaphBysuEtWquUK7rvai84A2jqq25q2D56MCNyraRs3sQS6w2fvzMJkdbPbf",
  "key31": "2zASa5x76MLXJPFFf1i7RLgj9g1zSkX8F6KJCEHsatRVeaMSsaFThvqeuBXZSvsKYyW5RLdcmAiSBgbm6mtgzb2j",
  "key32": "aTkqcgosoc3wfm2EQtt8H2YXsRKwXaqSoqr1jESr5e8PuNy7fUQSZaj7TASxzc817c7qGD2ujiohuoYvh2iWMfm"
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
