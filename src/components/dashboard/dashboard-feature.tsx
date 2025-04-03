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
    "2SYDkYbYgWs3cx6cbF9w3NWxAby2HenC2JMvTjezrXF5htik7MZBF1qqHn7143UqLLtEQUU1XN7tp7X44X59zmCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x1LUun3sYztudcnLGgKnYbAUSZ7P3mh34V64eB2gW5tZbaVSJ13T9CKcEwmvqvubr6E2iirUm2osk6RVe2V6LhS",
  "key1": "3y8Xt3UGJWnKpdWnDFTpGj1EEK5pqpY49ryySr7KjkCduZVN8SGxMC1NPSuH9Lscfos44it6SQTgfJzb41Ss9r6m",
  "key2": "5SZJFTPgiWrSgUHNkCvDEMv1PRecnMENia8xmFrn34TTKuRuSSNzAhwgwTK6VF1jmE7YUk7hLNg6e59fY4K1k9t9",
  "key3": "5Gj9znhsU6gGB1zGXnUSvGEcHxKp4jmcdaZso9rRmbN8njfwTzxddYSXpTavGz6Unf73rdqSoyQhL2FNGwgCcsYo",
  "key4": "4xfC1fTgnfZZsDuGQZqbcfBmVbfqThbmppDeqYY1uwed8N7L9tg8WrLmHF7ViSyG6N5o1BTBZD3vNoEazrBg5MwD",
  "key5": "5EokDyWEbRikJAXad5FpC4bTseELDon59mMt57K3qE94QPH3T9YPZQzQKPsCJDoLssY5otVTcTzKLzChcVxMZyZi",
  "key6": "51tzXbQ3JSEUUASBAwwMRMYCEwhug7ybULKkirp9cfaMtLVJ8SpKerFRvEK2ZVKpLoaxjLgHxxSBu3Lngr4FucPa",
  "key7": "RbuRHGqDMpyHC9vARRBkXA9Fjvdz17iKTmm2Q8ELUVz7o2PxdnSHJjS69BdeupmFfT7Gw3KLyaNVmQUpq1y3aeb",
  "key8": "5jRgNYXjNHkNw3k6rfnQFH9Crup2vTxEGW2TpPVJ3DaW2cCtAyJLeYq95SHEeKBH6GiLGEXVBThNbaRcJSLu7nQQ",
  "key9": "2Ekvv7yvKcM1wrg1N5Nc1mF8xWXXHAuPGnh7kH6FLCVqXnNkHwVpJ3JQV2cdKjosGeirZ3B9fd2CbkVLmgNmGDCK",
  "key10": "3PbMrRZ52Cebhg3i8x4T3SEgmdyAqBcijCvAhseNA8PcVKqgZTGzVVRx25Tr8tSrazRbabx9nj9jmruRRLsGCYrc",
  "key11": "3FJZsGHyfcmtWp8LzXaz666eRnsvJ2RdouLH8Mp6txHSoYo7TqysVXAzMeVPLZtqcWPkJqVfR6LMdM1HRuAeDZja",
  "key12": "3o9JsD1EnVQHhUr5Q4PSFDMHMPWVCri6vzbmK2STcwrcg9vo42NWuZfC2ga9bNeUy4xZPrntJ7pPsNM9FRTXsCC1",
  "key13": "J8FzXoAPrPhR5fLjsFp3mtcFEq1eNApcoQoaC21BdL1v7vmVuXTs9gktroh6DaatXbWxUwtd1GGSzHCdUZAxDPA",
  "key14": "4guU1uHmLMtf9VVMyTHS6jmy8PFrHH9fFgTEcthaGdkYRucZC5upSFz7mdZEb5RgVzQuekCG25MrUsqbz8JKWXrQ",
  "key15": "436JBMUPxoPtpteePtZmw4fS1QZJFGj8Ck1ZiT2Q1P5v38JXwY4KwRRAZA9zuxoj2DRq787cck3EQ5oqob2JsHYF",
  "key16": "2z1tF8HBH4dV6ZuXb2Wn19dHSBHmg7LaSL7iA8eJ6kcyAZZhZobwj5ZqChy8mj8zS6MAwarV1PPGBbzm7jLGzWsy",
  "key17": "4qFMBPzYDb468rXkAArjAm6rSLm5o4G4pTMVMG73JqTXRUJFBhEkgqMuniXs3zeKAwv6iZEsh4aX4XG2XMmaWL5t",
  "key18": "5xzQGy1dmK57347Suu5tKbWJx5NHwtD1hyh3JSLhzk6NkKR7BZFETj4jW9uWety7t7wMqMkZP9jZgMnGfCPySoKW",
  "key19": "4GeTgB8xj1q3VsVb8DSBtDnrdAZbw7YmJfetSkxVg87AxJo46Q3ida7ov6QchBqqS9FF966egD2duzsjs74WGoRb",
  "key20": "5Cp3P2rw89pLyuuWXNTivHpn5uzTYtnpa9myhvbBzbrP5VcXmrUVkcJY7xMHz6uvBbGFkiak87KAspTWPhwFbnmS",
  "key21": "hbeYf6pLmfK5ibqose8X9w6RMNKwkmr23xhP7eUEQKyUrhLiQegTz81SKr1TJEVgTsVQjijny53Pu95eapZGqYt",
  "key22": "3ixeajiGRn5wZ6ukCejTSdkaWjumdPyiKZ8GwrVDddSQiAjoD5XZFvvZhB8zsVDXnohuiV8Z9M9Ak59cDfcA2brF",
  "key23": "3TRcBygNNWUGkaWBGqMPHcrnFMDdceu2UEtdr4hssg2EPgA9XtSUc6UQzbPCRyMR58cbn3gLTEZwcoHF9B4dCmmn",
  "key24": "4o9RygrYhx2sjfgrCK4S44ReYbWu4tbAwNcrzKEEgVbNMAR9XWGgR1d4J8gZMo7i4wZXXbatewWMMCvhK5uwighF",
  "key25": "3oa2fEocwgeSpGctccFtD81aMSSEsEBE4L8v1bE7fphCC8nyzxrx4tV91ngpm8TR57xp7mRHs1XCaG4VuhFx9sWJ",
  "key26": "5XK6jEtERx6uSBN5G8dKJjRnWBK88BEuPEseJgYr35bccGVXf2jJsJtTGkpv8ubqPBhUCLW4RKadVQtCnCqR7yTS",
  "key27": "2UAi9j3dCb8iDTDyDRKo9gua2WVC26MvDcW1LS1kstk9cUpnnSoeyunTCK8sgrPaVLP4BRJJ1fBJfx9yaZ8KTLo7"
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
