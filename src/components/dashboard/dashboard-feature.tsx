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
    "5d6ttYw82EY7nquh6nrNJ7UwtEWujMLgFAHgEECFpRMKmSMe2cfGdmi5wzSPBzMPuDqXQJveiBFdZGcQ3eDBxNvY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aURMDNTXaUtNnWsn46zEG4LwTrwGD5ALJRCC1a9SWBvVMurQ7BpqyjDkHRfFWT7axMivjMW3fbSM8kLMrR9J3Zd",
  "key1": "2vB5MNBbewpHiZH79WsoLQLi8wdmy3SyK2kaq3qxpq7PAir4RSDGydKZuKgjC2TdsiatjdSSyJiBydMo6WncrSFk",
  "key2": "2nbQnJAPrd26Gowz2MqkSPSCbLYM9m2mcdVtQ8THxqSQ5zchWqpC4pVA3jaqZySdVmPDfEfExMfW9wFLv3zQR3EY",
  "key3": "4g3DLccp571NLq8p6dcqrZcdjuALcR8wgvKh37pa4UGTZqLXWzUi49U1NuWRTY7diid5THto3aubHmkeXZ5Z7ZXN",
  "key4": "2rt8fDJkikhjakJ2GWsUv7gBdrnESqfMxSoobMCd6YqJFR8UGg1Qg6DN9QHJB6cHc9sLuCq4UKvQZnuZtPQhKgKz",
  "key5": "2TQhd9oubWfhwEVPxQ3tFrS1Df7hyKyYL6jfFEChx32z9gWzgMyvcNUrotkYuwPeEB6FNMiPbbULFYbtnmUmkXaH",
  "key6": "2BhNA9LxVACRhnMGCR95sFLD8fWD9S3duhmEt8cB7LkAZBEsJta4cs3s2WWNPdQ8ouHmr14hxhHU3dRG4W1Q4FvH",
  "key7": "8JA4RA3VqNbQLNx3pg6vf4zs8FcAMUDdR8iL9JyebzuG4ZeyFvsVnzRD7LWhHu2Vo19WTeJDG6MTzwv7dgAErWZ",
  "key8": "5Tku6k7yXHfFrR6n5s1oN1WBikaZTLtS73CNWa4B43ATTM1R5zBFs9aT5E6QxLkHd1e4XJ6CfPE1ThLwGR8wTnoQ",
  "key9": "qzCHqEPFRyHoEAghNjV6in2bgFVdbvcWrYunYAz5JYPPirAtebNb2Gu6t8S9FvebWpKgBZNuvC1pfdNqKBYhYyw",
  "key10": "2DxX9EkDDYXcvtjZhQH6JKXUUpPnT7NfGBPRBnJo7XCUUSsgmBSVpx6dNRfR63GToCnABZDL3QGHDZ5bJK451QA5",
  "key11": "4ZbTidWnmJoo4kZuP3eChoJaZtAM4GiDvq6SYvUdRHMTjCbYWLYCyr9DydGAppnizDVhfgYBTjCC7ACAwBSatzXL",
  "key12": "5pGNKx2AEmcF712dEisKu5buGntbxYxdVQ3tuGX49Q2eGoNY3npiYY6NSyK4fQaCUz4VrwAsh4Gm4s27nSGYfAu2",
  "key13": "222waSfbThJEcM6KDP9Atzf5ddCCdm3Kn3E2tuAyufRTtEu5QGKGGd4gYD85kQwUyxHj94u2GPkuxXT2epbhZR2G",
  "key14": "2ak92EbJXNExTQx32JENrZY46A3FChHHC9M4kbNvn7u2fSqLgohSsEUGWvgGw2PtQR5aCwdqBoYAaX2YBR34L128",
  "key15": "5jU1PtXn5rXPNXxig2X215FjqcnzvnewN613QV2cNAxVu29oUbQeyfCoGZm8WHokUrjyaCY962UEJejX2HepGrRi",
  "key16": "3884ZLeJgMHDTDMatLGDoBuLCg7g3N7JmuUXVVw98e4h14e4tMAcDfdAvfHn1Ume2XeSW1Fcs83u3Hoi4aBKQKE",
  "key17": "5mU6zw2KqMWcCmyarn1xvhtUciA91hbR23fkuAW62zYTgH3Nkn391gqujkeyeYLkct1PWz9Fw3wYq8BdHbA7mzk3",
  "key18": "4y2aT1Pw152F5DKrhQxwppBkzTsdZF3trz4e889UoSQNTBt4DBe3hHqY74nMWBKexez9X2dmg7b8KVysMhGehP3H",
  "key19": "UuNhVUthUNUcLsSVEnVBq5knxuCN8x7Any4pQgEDkd6X2cL7GbyEZmz4ncxJ961oiz6xwojBMx3EFpbbVVHKH5r",
  "key20": "2H6UPxgPcF4dYom7o44KhCqu8d1XXePmu6BpkyrGDVVKj2Xn1AzW1xgUkboQ9eR8btV18fP7u6dYY2FfE7odt21k",
  "key21": "2numu19Ybbc49qZZzHMsknMHEZPVY1V2ZSuR9pZcWX47iDUQRMahD763scjykPbWuJcVAuyMHyfcBZHEJbzDdbG8",
  "key22": "3SjPGcLBraG46Ri9TTzAnc11YrDY17aYPUKrSgJVfSyE1Zp7epihcbbBNRwb21adriXantd5XxxxVuSVxCEDiVaH",
  "key23": "27NxSQurHqBWhvSGFBgqphbqQVRTzgwvgBKgSvwpAkbCCDedh4wP7XjB8ABfWy4QLpRkYM1Pr9nWjzH4YWEkei9K",
  "key24": "qrD6trmEQzaBP61M2nQnZRrG1WMzsvQGULrzQBvF2zb6SM89az3rZXdcxXz614PT8bwKuwBoxbojQnW4NWxKEpf",
  "key25": "2cgpAzDWXRRmJEyUuHm2GqaFzewiWKWgeXJqnd1oTVbFhY1oS5wXvu9HAoeT3XaVW9bPrDyWe3638LsUTrWSq7Rr",
  "key26": "2CQUjYRFCzkGBJu6cEfrwEVViEKgyTXySnqspmrk1pSi57qzX1MLVe3fnJveeGiAf9qtXpxUWxhehzL3CiakMa1n",
  "key27": "VZjPKm5rMHz2Q87Bz2vQpU7iivgK644bYnbjdtiwHadKm4FcG9retEUjHhFaHhAAxuAqCB2x9QEjt6MjKzqXXJw",
  "key28": "6bKMSDZch9nQh2Aiq2YFpDUefBBuBAvzmqqxDyyMqGcvSEBaaex6qS5TiKZUMQQWp6RHrLSd6ZYafCvqMQwnc2y",
  "key29": "NHaz99RhUCNRpc7vaZRNtMaQhVjs1fXjdqXg6z6XoYgKLWMpTFXWx5uexQX88cw2N8CF1yYTHnY8Rb5RvUEz3r6",
  "key30": "4Fdy7U2WUP8DXBre9v4Uv2A7sZcEkUty7JCCsmrhTBuqNUdgetKRukkuPYVaFfnsTanPbaVJtx3oANG6kFPqjscH",
  "key31": "7E8oiWAZJtqgZE6BiYJ1xQqPEBw1ooSsc7Kx4vLzLCBAqg2iDwf1SPcunBwpjfSq5BcZRZ9KDY8Hav2P58XyRPm",
  "key32": "5cgnkR81Vn9vR8zUEi7gpe48yooHVemvCV6oBZqecHPKsxPgy4FSDTkg5MkYCKQnS65rHPtrwTwYshKxhLqGwe1m",
  "key33": "46J27ciFe4wwEpKi4qG7tY3pD15R9ExdfcFa7mauDttypxzh639Kyg6RLTrP4vmQnArU5SUM4WpLoqBSEwWHRwPC"
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
