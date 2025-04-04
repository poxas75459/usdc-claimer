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
    "3fN4zY3wZSVsbr72wQFay4Mds76XUt21TBEi3EjCZkV32gpzKUTYzy1XMH1qUU1SVoKwVMEa3JReMMc1JZbDG1wf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oe3SZzcmQMtSe4rgzk91Diw3Yt13Yw1RfmBeSqdV49BzComm5c2L27HUikyKdXcKRgVvmm13eNyb3cxjJwUeVDN",
  "key1": "5TesQy6FVXoSo4uxxWsdEkm3YJNdGamjTGRKw5svNspwep8VhuRrSuFDL9vVxgAPitNRkfHHoTXvzANapfeWwidm",
  "key2": "4Yqhsabcec3Rt8CTSsjt9da1R7FFPDuyiw5ZFFdh2BhieUR3YAAXKS3kVaip1d7L9m8TKrTk8gnPrbwm7vTtkYtZ",
  "key3": "4WvAeAWZqm6T9GXENUrKJ95wPZVEAJnkfyHGAyH3Jzdg47TNGhCw6LmXj6pczXY8vi2KTDduHJTLJ4DC3255cgPJ",
  "key4": "4Xe5gxyGs3KCGuiHxqEXuXytvK1PKRaEFD5EgLZS9bLraub62UjduWmJqb8FY4gtbgy9inex1CmAzC3vUJELcgPJ",
  "key5": "2cJ4nDNt8yZaV9pEGJrmYM9Vpui6nC6EE5ibSSS977T1Nf2Q95FZ5ZbaGpmbZNXdrFJgoWPTjg3f3o91texhGs8o",
  "key6": "2YwhLJPqngVoC8J1RgLkuKQ5oFio3x4P3U1AdhFmSPxBVmr861A1QfvvHLS3YZJvtzNw9EBLYXWFoeH1eLiDhdTv",
  "key7": "5gKxgKwDf9EshSPCjfnXJyLzCLYTxSPFeFAfNzV1BW3DordJ9Sx8cABatn7QbCT6EStv1Rk1rT5MyiFEvN1WdoSe",
  "key8": "384ukdko25gMNBLErYNMRDsFwDHJKsrvZ7SkynKC8mh5sLxzwjUUP6LMrNAvGWSC2oLumsqe3EHVd6YTGDQU9Dsr",
  "key9": "oMrVSFE4tzzRuvhbi1VjPnG6yRdhX6oxkERFPUDajLz1Nbsx6FkVbfo6uuLU5MpZ2Cks1yuRFZz9ceoLXXe3XaN",
  "key10": "4L1de2pa2SjwXPoUuiqfwHvcfLp5rDHdQmogCFXtNpBrB5yVdY5YcGtAddM2mFaFrhoN1qd3LpUdqwCe3obJgkQ8",
  "key11": "YyS5n9zqM2qKCWz5v4VQAtprrpaJcNqd5nTkfmyBrJ8ea7D2qVDajAaLtLQmg1UjHKqR5FUBLo2ZsxpxfTtH4ju",
  "key12": "xbZzEFPNDj3jFZnhztV7BvmpjBp7hSvcgTYFAuKPsAQYNaH2bqgf4iPZfdJ2mp8WpDMUm2RDywMksZDkiEcGBHp",
  "key13": "2C8MEowwXNmcvkvfaLYEBhfmU8EkB6pCS9Y1Aqq6x8CnYtYXD5WQ6Acu5oaXq8mgzA5az2FvmyXZHj2yx6FUX8yg",
  "key14": "5wDU7Xe3spPsebrmabhrByjbTkqLxj9yRWJ7TpKchYzeSr9xCKHiKVQA6bhZNDtmzpr8cBgshS4nu8c5rz7s1aG3",
  "key15": "EN51h2EKigdcW2wy71mzzhCr1kQRa6LdVUHY98HisomNUX3QFe7zD9gbWUvLfb6a132QU7YGbjPenfScEbfnyAz",
  "key16": "3164zpatJKMQrKjjebL1JadWJnS5R9DTtqTKNZ5YjjizW3p5AfjxtvcudyMVAoHGdtamo5vBuwnzA6dQbFrbj4W3",
  "key17": "23VNLCX6VcwQRaKzXUUwN32jmp2tkKrF6jXTtLXTpSVhT3vtLtVNj5cX82dARQffhW8agmzXBFckYt5ZGg9Po7Au",
  "key18": "2ewoBXevx2GTZw6dNCeXz9cTM7p7HknwPodEPYeEbE4Ja1Z3tnTWpWGsP7r2gaKDu3EqeJkxHGRrACqgkz8duHM7",
  "key19": "323sESZ5ZWLjS9PjTEiXvRQWAN93iVnYhWCx4XxosKBS96Vykw6kW4jyCSJemeRFMB2Rj5RvJSCRgL4DTbZBDRxP",
  "key20": "2aPH5bfZ4NU2NgS5eE4vpacm7ZfZkZXpVWDo1xPFHJGT4L8dj4NoQAdBZ8512s2cuaz3Do65215gVJwya5M5etsh",
  "key21": "47L83gJ5gBneLAZVBp7nH72yyHun4wYgR47EN8Q9JRbYCpQPDVpCov8Lwo5VS6Hgo262BY4uw58s34A5FmMV5Dj5",
  "key22": "4vuhMjY9B651F7dBrLgpKumf6FGCvDdYiWUotaKBBoYXDfKsVDb2iHf8JLLS296r9Z8CpubnPuUipE2pBCPrYzgT",
  "key23": "2NbyBiknaGo2SkwsTwaRMe91wShAbszkc22WaGCXaJ2St713ZHTSD9iZ2k2A2MVhMuq1Pg9dy1qbs4Pw9NDgnzmw",
  "key24": "4N9gyZy4sLdv4fXHJpe1fC712hifn5eQxdLuip83arQNauJmqnmCgN1B25HAk9tRjf6X8wd1MMqLXRCqvC9jrfHB"
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
