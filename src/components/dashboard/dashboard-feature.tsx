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
    "5Y8EzpmkiYpcn5BbR7EJcQMpbXzhUS452FDrajcBtrFo2wzbxMdSbUbRpqK2SxtVZJPyUU58Dn18QNSA6mbwWSaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pQVL4WFnw3MjSAp1RpuyFisEtewcWywyqWPHepT832qnAouUAqmcbnn3jXkdbbFsoKEASpC2r6KC2rAf4o9jU9Y",
  "key1": "35t62HfArSB5c2CUf5z6JY2fs3rR6XYwNMU4xp1b4K5zoDcstTiThHtB5u8NP6nSmBMacdEzycrVR3s6G8cep9dg",
  "key2": "5Lhjn8k6kkeQCoAqc97YxKdyEJyYo47wKVCFacwN1csmiLwALSffKNSBca7hjU747qRaYEEskXH1fa6aH3SYCFS6",
  "key3": "4VKbYHQL8jW598VGcksmcEVLuFnMK3PoXuDK9RPFP65HfXiNTAgupicEE9fBGsqZgvmSrav5vm83YK8ZiTdpWNXg",
  "key4": "3XMCbUUNqCzqmaSzAzQkUDSofzK2ecda48kgQQveJn3HzDmkgy775YAzpZJgVzQdbSDn1m1bjNuh72y2T4n2QuRh",
  "key5": "2U8Yx1iuYg28gUyiv7ZqdBHrYsJeQCsvyfnXm2wqZ68DigoBAjapXnWrQzGtkEEhELq78zAg8Z15EbYEboh7tGmE",
  "key6": "31oPDd3eRW52tQdfWcNRRNdqdA9cRa4SoDrkrATfq8roVrvxVv2K4g82efbhiRksdcwFRBr1PSypfWsLdh3UaL4G",
  "key7": "3SGV93z2ADEYzqVSwTtHwv1UVf2eo92adKyuwhz9HvwmQynsGTUrEZpt5u6gj2LsH7U2ThcudUSUrrVVVorMaLgM",
  "key8": "61fTiYUvvnMottCGLCwfz3GtSsfsciq2CGKiNuRiLhtZbkye2ZodUe8Pmw1gALedZfCXdBG1JAHgXCBPG9s2kvF8",
  "key9": "5ZT56YchZBUwiMthCRqTpqTgsmRW7b594pnc8BJf89pNmfBetJcFqTLRepPYj6WjSDRuRUWHGaeuQdTN5EAnNAyp",
  "key10": "4bFuZPkm5TTNvdgSCtmKXA5LEyrV5yRwcFXDGwXBxtQtfFVAgRUon6y5z1EtV17fEK7nKHX6DurYbYvqARPNuHfY",
  "key11": "3vnWjfreoXbGWg1kd2RG8bTwiHGZSJH74RfJNNwyp3B8C5gT9PJcuW4XhCRHJkJi2WxyadtG4u1SaToacAJcvrwm",
  "key12": "4aB2CH1BaQCXymGSs7m7bZMkoJ1notvXzgC2pZWQ7hpP2SnMHF1ds8nLgjATntW9t4AiHseScHxvAPCJafbDUNy8",
  "key13": "3fw1NuvQiXaHaYgK1dv1va4SkMDJjJXJS7PyBTZuZXmKSdAkRyDvtGn5acc1b1Z5Jij7MsVsHMBMQraNTtxbg81C",
  "key14": "5x2Aq15ri8dj4KMEbKL7jF5QCRqVaMhCZsjwVff7i71VFQoC1ytARZcZJrLaZQRvJ6GrRPYz8n68CkCSpxwxUWYq",
  "key15": "5fPgFXt8N9EPMrTjtz7mnRxJVnxLrt5LiSxmWbqxY9TKtEDLTsDcMZSWjYfcsZLaDgAzfabiNeXKLPAAHvEHqU6d",
  "key16": "48bgRJPa7BSZjWvRBn5Y8aRcRiTBRGX9QA9CfeuXenZPFadcMARmja5DbwXtZL8y7K7auJa819A25YYWyjbMdHjF",
  "key17": "4J1JnEr1PQCVgA2sHrv9tVYPxp9uYAzxtaLa8ZFtqq43vrJktzuNEYuk3vEdFWjbgRaxAqCGtLhC7LghgPdi45g4",
  "key18": "3JpKDwBcDtJXAc62uJsuSVUGEC7QA64YLtUH3EBm9yVTbnoKBWdrgiX6nKadkFdCEgNsx49EUjyv1qxWbNbdTMVU",
  "key19": "2C9242S4NK6CcpFcjot49eufijhpHEZNQY99XUdqqo6eNj9Mytsjqe5JxsyLcYaPWMHi9JnH5V7hwZrmtZPaiFxZ",
  "key20": "3izvGTgY3wLiEhYL9Qw66PMRpGuSqTUtt7mVj9NJDfB7Z18bdnahmsxEgAy1V2yAuKbDVR3WS7yphqut5VVuLNFB",
  "key21": "4U12xBG258zGx4hYzqj8zk2ipCYiZh7zE8dZSTJawExUu97tPvDgH5X2uUfeMo79vVHULqyfZaBxAhnV8UZFJLXa",
  "key22": "4jTSLUyoh8xPhxZzfvPePYq3gk94itpJe4oxAqVeUJ9CCRZq6CEuy85zPcE1M19YzJDhkfby3EE1DkjtLiUTkLBE",
  "key23": "47fMnLgFsZkW7Pvk1GnQAb1Uh7A1jeWF9XM3i5aoDWwa8kaKzbg4QW3X7qtgiDyU47o3GHFap8R213ot5YY1pRKA",
  "key24": "2xeXHXifDiX5B51NpxXxVSbkUHfZS1NFYkErQwVM4GnCh1mh3vXRkcsqMo1xwMpHjUfTaySkxcx3etLwyTsHntmw",
  "key25": "5rQ9ELzrNnoNzJNTUKfUzaQQe9Vf56x37rwhBhb2nXNfgEaP2AbYNyHF43vhoZT9BiQoYjNL6NDLfLKSjnhAE3r3",
  "key26": "4oMUiyv7CqhnpX2b2ZwsKV2hsRYjDmgTuwPm4MEYWPjVBEBLNx1gE7RftzQ2m8McCcYkMo9n1kWELiPTXkDqnXFM",
  "key27": "4tvQvxUhSdME3Mgnf9r68iVdZkkVX5W9o36QmbFwv5DbM1spTsrSixyf6tL9MpFbmVKV13yt566nR8b3r2GypGhC",
  "key28": "1q7d2kHEtQdiuLaJ4krxGMgTivorcFLH9ryTAx9LxM2jLgx5xtT8LmAuyaVVCaDYp3LhmaKXLpuDdPovk9Gtju3"
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
