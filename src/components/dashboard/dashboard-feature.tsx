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
    "3A9DUg9cJBG8wUmeCWZMZ847AZ1DgDKqgZsSHvbzfrL2t4D1T2TXpWhxduqofVkDLwRW8xKKXPnSzqWgKy99x74E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EGnFGy5jL6G8ePLpm8TtQC9HzC3zSAzTVKqAYJucYVAedSCnZfCgoWGV43jBzpJTz6j3xDWtVaQJCMaGbSM6SuZ",
  "key1": "53wrqv5LXQoC8DQJv3LkLHJa6S7HYX5ArV4hpn4HiS4VCqoEjhLuKrMAjQV62KXwqnZn2oXemLmq5E9QuzqtVXEw",
  "key2": "h2V4sSBZFWuFCmJdrKAV9n2typZzwxknRhEmwEsHFarEUEPj9ak8S9PHE1i2NgexL8B3kGkC5ok2vx7f5MpABPG",
  "key3": "KzWzfnFCmCHj8xqYw9vh47LMkArqnprSqimRgsxZEvPUfbRzGQPcQEfUDEXacFpp4VxiLNSXQGeifHwtn8F2dmx",
  "key4": "2xeN6RKa4NdoVLs9cmFXYpfA2fLNd8HNFTpwD1qQ6DXMTKdH65AoTsqnqXrsaQ7Ci1XnUrR23BgyBn2MgpY5g8dW",
  "key5": "66M5B8tHFuYBBeu8iMYQrQ1TjEZ7dqbUPTn45ZAw7zSM8fAY3u3PkRP3FUYzG216CKF4hkCchWTzGs3KZgoKwajk",
  "key6": "2ma7Qwf9vSvMH52VTzSCAKyw5EXHY5Si3YbPha2W69eEoMte7FUqp7R4dd6vbNuy1See6FCn7Awi6zG1EBkweXmj",
  "key7": "81gpBTnBYXtQySk9po7P8YS5zkWJg96p1PEvg51Nptu4BKPAHypsfsWcL2kd18vhgtzSum9MXXFQ7aVLcFqEvW2",
  "key8": "4iJiHGkcd8sovHz4FcfBbnARbRiGLp8W8b9A92T3hT9UoiHGK7Px87KDT5jTdpqiWG9zdvojp1E1uw4Dk8o8quGL",
  "key9": "51JrRFEi4KtdTwAFK8jFKeiQifHWaE5pkkq1kzZq1ekrQ8Q7ibciHZECVtMWakFGnFd3BwmL2TE1PdMBJcC5DEPQ",
  "key10": "3ZSnuGyZsqEU83FMoUbvDJDJy8cLW2df7EgnSbdVUh83hmt5YuffsuNx1oet82gdpz4mm6TLrnft5W8e9wLsFZXP",
  "key11": "5as2gszNPTSTpA5C3A5GSTM9m9LCPXFeHM1NiFvS9C4x3AZpk4pZLYGhEE43VHhkFKyQdNsZ3fomZvZD5jH6NYu7",
  "key12": "3MGKhpJrXbaGFgLmNR2o57ueDNVcFowVgtUxTuezVwg1PCeK3WYaXKrY1RC1vdmE2HeVi1cvV3aJ3zukqpjLPKsm",
  "key13": "4f9t51qHUXkxyaPb7Sxe6V4GCNcb2cH9keuC48pGE4FM2CiF8uFh9U8ARWC24gc1LknwVt9JyPGb8NuTJ2tjEkY",
  "key14": "4XG3iCWA6n7YbTzTXbwRQJY95wQrfhK7SrU9GgcSoLX2Y5peb3v3PDX1BciN9NKbbpv5FmKctx4G9qMB2ZYYEFWu",
  "key15": "5scZ3Nb7dfEgBBoxwgEXNpVwW4gwzrJJtM1vvEV4LEyZG7mGeKsibETbHbanp6mUoxsDBT2ECcjDVsWuvCLYFBxX",
  "key16": "5WdYjmWqGUnPmmepV5teiUuSeKv4VN3GrDtUG6NUA3pWRo8ZzCgpKpBDT31ipeowasSwexs9Ftc6BQXWAKNeDsXK",
  "key17": "3jTDtG9GjqT7aPbfdgdiXA31mTiEcyjYmJcu9FSYBMiXfJzkcoafEQCmPaDBBXr2sL6cWcj715pBNd5zpypWjU8x",
  "key18": "2QABX1R6GhpkqXLmr2k67gNXMt3GFhWE254h1aXSoxivQywPrAuG4hiaJnVqwJR6Cq6AEYM4iA9brS33dW94oTxH",
  "key19": "383EKLx2uEvJWkcLRTeF9sMw2Zd44ZuUT8UvCA1g9y6javKVWZiqv9QQV268GpBJnsfSyqkN4vt69yZ3HCAzPbYG",
  "key20": "3Dy4bVTEpmTfmJcXM634cWy2FQt7ue9Sq9Vii228f6afK5idKwRNuMdtVqiGrjznuvNygQk7iWo1gHWqGgrbf7DT",
  "key21": "5SxbXXfTsB1vEXBFSxqPYJZgDPehjHHsZUBsmH763vooPWN2vCBFbiz8iBgBwnpwZcPhUZnPKRatgFbxDQZ6TwvQ",
  "key22": "3EFZgAGDtEqKGQVDJEBQgQopRxmJjY7FNtm4kBL6E7Yz14Zeesx5DvnaH1ScbrHUZpWKrFJVVG79xMwE8gT4p2k4",
  "key23": "431V5YY9bTHMrzk269S3jqH4hk6CjNqMJ7czBkgjps4KuZATjtaotJN4exzGpDUFZ7kjL7SA26T8pDbGZDJKFz22",
  "key24": "EcGrWd3TMjoDEHtR1mTprwfpBjVCE7Si4FN6PrcQxRYPE2t5b616VM6D6DS43MwvuWE8EERkhq7FdKgnZZNV1Sr",
  "key25": "4AKg8Ga4f6jTV5DZEoT3Pzoa3crwxFGSaYrEdjPogZARfrxVYkJpprgVDFZ5DDYKS1SDwSY6n4SWvD8emqxqFZqT",
  "key26": "4PvernDZ8znGdrH8NDQoS3eJSVVhYXpJZnZvcXZFGA853x1kGv1oZDHEaEwR2Ck6mewwCTkufr2hANGgsLpUmhL3",
  "key27": "57o2RhZbqpKGVA4omYLgdVJW8owVKQLvcPRqJWqBcLSrjJzDL9sbf7AFYV8Y4NQ6wwDEqBociBRxJpGUY5TYZBeE",
  "key28": "5SYE3aNMcKpWoGnDNNkkjsdaRyc5k3Ns4dnb43SnsJ1ky7WJ7s3JQRffmE13yaMbntxPFAyNLH4A3wV3Wg1StGwz",
  "key29": "RPRS2zB7dUWcw7QXiiw94nP81Zp2AzHNBi9xqRo3V6q19mdVR1FnjYXp9C6KdCmHBZg6wGAFTd3h9PThqiYtH7D",
  "key30": "5LSjcmhkYsAeJGVCP7hvZ5Fy2t35TqU1vJ72zHvR8iFVF9i1wD1griMSmnQL38cL6eZhoqwiWsGmQviFn9UyUSmm",
  "key31": "s7t4mbHfsfsTFZyuggCkj7M8NYMS1VK69fLt8Hjgit8EBaAmssUGroP1csowhS3hZ4nuygWMW5AYfZx3Tp4YFx6",
  "key32": "2YU5KDF6ffE6vkBJC6Kh71c7fDDdY86UUafdfuFmpfaBy7GLeXwcfcU3kEZDUXiCgpj6u5NfD1hTKTxcWvs4mHp4",
  "key33": "5fYEMYCfPJjyLiXtCDN6aUSWLhmD7oi5jCmSxN7JrNSEyVKp96mVsbsg7Pq6zTEaw4iHoEYxGVrot667BNxwfiKT",
  "key34": "LvcYJaRu7KL2hVE6sMPGRFj7Sq5VP9VWCMBSJXot95gLWHCkkiXotUtXYpULHUGoS3H8FKMrFDFXsu9dsPnQjYF",
  "key35": "45J4NGW8xCeBPwdid868A4DxBSUJF2Nx27Uxehjxh32L5ff9ekELwiKEosjU4VsA8fkmxwxFuanGbEgjHbW1KoQ3"
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
