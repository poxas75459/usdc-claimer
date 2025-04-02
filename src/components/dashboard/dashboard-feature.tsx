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
    "4yDMwpny4ZCYEmioKvx4QhogFZWbNG5DNKAJaNME4hcvnzmBxfg78dSHHK3SsXkKeSBzzKtPExtBzTUJQGH7VfD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Yp6Ptc2N7TxgAYv7wcV294VgLx6ATvD3citAprTFxnvNf7Mqn5y3uUaNCkWosRkG9hYEjxrAc2fHcJdCCWWGDZa",
  "key1": "Q2RKiHmV46eWVcSYKjNYrtTbzgsZ4We1Gz8RJcdzqdzigoNXfWSTN2uYtaGnae9EC6nhWkfGjB5hpbRgAamLJ6o",
  "key2": "2Yu1zjzy5C7rqZYPH34mdQqCrQd7M31EUUTaTgegJQnFVc8GVmZRAsTAQ8h7r8UTTskWfkEnuX7aNDBmzc8fPa67",
  "key3": "4n7oAZwTE3jnafqSB8UFAf3fUQQdaoNfprQCGS1uuphUEvbWrkVF4M5pLFSMg88vHLK8kRUqxyQHhd7XdM8f8h2w",
  "key4": "4catvsBJNM9A4HmXWp8zeScNexJMGy4jMpTcJ7Z5FLA7HjpNQEDdZD3TR3ZCK1iZruS2DQc9Ki1oVKGeYpyTSkj9",
  "key5": "3oky1cgmFkP716WFgAA41eeVdFYrSM69QYXtFmiQRkuqVcoUzmpHmmGFvEpm94bC9Gg5S6kx4zDasYGgotM4Mgw3",
  "key6": "27PRUN2f23eAYCJhTjx5AnBzaZ22D4teiQRZc8QiphqYdACHDdTo8ovtB4Ed3dBuR8GmvntAhAsFDoo55qckaLgE",
  "key7": "2Uvpb57BaGJR9iLQm2piPxxjgrBDJKw37u8YSaBWraXgTFr1T4hTiNg34UUh45D3tVgPAPZxwapWVHdzS5gnscnX",
  "key8": "2UDq7v9Hht2bvUS2uMf8yUCZKZ4WmaUZkDCXxRbnUsy3muaudUj2XnVkmZZVeEvcxy23uCcK1sboba97x5rkYcXv",
  "key9": "3owxJ7obavXSFh3DypcvFHGQ4GiMezyANWt6BYyADZJenoFqQcS3LDbUXvFVpAoPNvHXvMCdVXduCoNBfKFXY32n",
  "key10": "33tBc1zMGCGXkNawUT6NZtRjebAooP3uhbvU7vXRMjwZ2JcxrcjJ4x1yTz6Urx7zAuDnyZGaPNeK931NvNbL4E2X",
  "key11": "5g5pxtxFrYHXdSYQ3vNUVfACyL3H3Jm49nuV46WXdy5KdkaFBfT5spjX7ctMKEfSRdf9RsMw82AZZMtrvnvvoFrK",
  "key12": "JhLwc9oAxTFy3CwHXk7F8oBGjZhiz7wKKUYGe2Zrni39TjAimUBKFqencNcwZSEuPr1yMRdM32H9U4xXgeoA7wY",
  "key13": "UEfha9RLzDS1jbxvqeC2GHSMBpXnggUwZMNAqNzgApE6onuQMAwP1Rte9XusEy5X8FN1r4uAdCsyHyWUZP1F6Cj",
  "key14": "gZvA4wwYxySDbY5isiHR48yDYmKA46mUkkbHkQsetKQvH9Z9cgCfvyCu7gmQuRcjBvC8LfLuPZSEUqg9cbJPnfD",
  "key15": "44cLXLh3mgaBF1V35C8r6pSjsfbfcpzfyWe3VcGwRzvhAucCMmCDH92aVJicr7198uqpQgHAgiMgKy3SfzHBok2s",
  "key16": "4FjZLBv57ymSGGekNy8dGoTJCrmrs6Cw3xteK5ErQqgcTEJpLNpm8oE5DCzqQPNXd1o33KTiicG6xrtvL2zwzFFU",
  "key17": "2thaRfchGPH6af9PEECyNLPm9RSYTLGw1Tqtovr5CGSBv7yDKcFkxqAWnaHk7XJyoDjxJNvBqPqWZRN7827yM44p",
  "key18": "2EwZ297R47kE1GZP9CpXy623CUQqAYvANfGXECdDJJ1KmTteGcmhKSv59dWW552pxEH5SFMURmC6u9eWghawME1T",
  "key19": "4bsgisaR1jbo7HVCaLqLv2daf6k6xTRoR1BC4PsodnE7EQx5cACbeUiz1zcUYKu7sxBhC2V73LpjWZfr51niH7F1",
  "key20": "amf1zx6ipKfLrCxLbMP6qreRdS9pNdMrwvxGg1a6V3eN2wcuTS3CE1x6NHGjwWrRCRWbCXKejHpH8K8PuKkwSN6",
  "key21": "2qzoFHgBFXXGkgXgjqchDCkJhQNewHsvFEscWyS8oADezZ3Vr8Fdxw28LAXMPpbMKrFsDLzi37PEcM8UZReiBKP8",
  "key22": "5Vjcn5sd5XSnscccBMqUvM6RGnCzUpR1rWZ6nJWvq3SyUX9aTH7hjFsjgykUMoXQXBevEFNq3GA4tYQr5Tb2g31K",
  "key23": "4PPSjtLnNJ2439ARsAfmdpohhzySHaiUfpg6fEn3BV6kgt1wnB2rR6qoKCqqSFFcjHxrUXjut5MGLmQcC2ssw68b",
  "key24": "612iqCsuQwksiSzybrZwdn2x5STWzQKmcPk6NcZNoEiYjnuAj8d2PVQMGXCPzgGKunoyrMtBdcEqxzf5p6yhoJKe",
  "key25": "2SezqYS4D7cYGb3jFH2iYyRWqh4b4B91ebV53enJ3Azbwb2dx1g5mHBWb7AaXCYb14oYTGkNKYbPUtBig3mMwm7H",
  "key26": "3fqfzxxwe2U9iT2u6UR2SZsM34jjQZwkSu7BtfRvTkrXV1uprAqCJHfuGVYN6ATv9oQjTdnKgVNnuHJ8zUXRLraR",
  "key27": "4F7G3a2ohS6Nj6EkPMCuPX4tPAr4xac5JaSvyjWVUoeTHRWMDVLDVygi9eDp7zKFsMLin6hrjecPkuNNYNbDBG6m",
  "key28": "374KBnD4QjvJXeiBFN8ZnC3zZ3NMYEqgaP2LX6QW7qkNgWXHzeM51wWRtbd75dMbtidUpXJNsoCNGP1dMTyg8qvs",
  "key29": "wvM9Fntq7qJEPfJQpCrXF2AkRbxv8QH3guqJTLTZjNvwnyZe2aCHG6Kv2hkHhGtz82oqSEGjAo5kHMr59DYruMa"
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
