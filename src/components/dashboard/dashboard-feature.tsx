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
    "468MeLD9f4Jej4E7KB1JETE5n7rqB4tjvQ7gDACmxyfy7YzrP5VPLGwo71AAQUeHt7bH8RdsD34YmbFPADYzCec7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5494TBcKZH4RvPNX9yptCnWcdKKsxAexAr377rjQBRjWZe9iaXMZBhQho11EMvY67Nrj1Ce1bY3mm3a3nzzVTgX8",
  "key1": "4LkrXX8XrWd4tfhwHmSXeusUt3gDyhkr9P7rnPK1GiWwgvofSDHHBruvEC7eRdreD4RMhxoAPAqxRgd2AHXW2G7F",
  "key2": "2yBdabAyphCfwWXgiX177qWc8SzviW8dbamXc3smUs4mbn3zhK15mKaJjdwCnV3PvWn4wQCbUWJu9V96CZQwoQ1y",
  "key3": "GFQtBKox8p5Ch7vYSVmF7bLBEok2WjWACKF4SubiN6RcD5GAjbYoV8YYuMpwjaXMYgqeUCpLgioUGwwb1JSyr8a",
  "key4": "dBkg2oYokgm7iP9me7qJmmx8FxKdfxwb9JxdyecxUfJsTgrc7R1sahXMUkNo9kZGtejU8r5zRVTVhRkfFAsYLzH",
  "key5": "59bqKFfhFU31CRiHBPHkkyVXeH5bVRyEfPXk8QNoTD1m7TP2VTejESfB6GX56BmV6vkTXQrSiKY36VyK7wpeQ1i1",
  "key6": "2kwcskq3XESPPbbjD4bESRGtvzJVmLvmWNHgjWRyKVBCc2U2d1GCks5yLVzZNUxaZsTETkgGg1jWiv4PBuTeaDtX",
  "key7": "3UDageWZwQ7iN5aBy9L8JD1UyafZEeQvJBCMAd7DG5cYia8EB6sVkZwQQy3ctwj2tKaWicNHYg4Qv9waCe6awzoR",
  "key8": "W5uo61CeZMaoUA4VwLMwn6dmhvjh6s7cLcijE72iSbY1o2Bbtky1FDTgpFSxoJ7foqECsYchVF9dMeDVddhSZhq",
  "key9": "4geVTw1MVVZVJcvfVWLuXztgknwaAVzEQHVqQXsHwi8J1QS5XN3TigaoarJx2uDBGAELbL2Pb9wR7zyXUrcbHpes",
  "key10": "3FTMmqR2DSHnmDRYHiegsVtDf8PtAD6xfUaMSmsYLfZCTDVD96q1AeF154TeqxamW8nNUhESrdNPZQq14BWjMA37",
  "key11": "yLJzC4LFLVjAQA9ueHCjoLksJuJFSVpTF73fmyiGb986v8s1QENai8or7ZHtHGceXDSeJDqsafvZ3Z1yoMXr33Y",
  "key12": "45DzGV2ERbXrX4Aywd9DUgavmT4tKRF1o1NBpdQYJiCMDaMuwJYUiAVpPnaBzCaFH36SzAiKLhBTkzHZfzsHxAbY",
  "key13": "vzUxsMv155KG2XV189cw7rhmFvsbmaBJyLxHAutBtdyDuAj1omY7HoMsSYu4ipkGmYo6jc7Hb7cdgBwXX2oZKfU",
  "key14": "rP2WgRFG9tUcvwRiMtS9Mw3YqyPbJdCBd8WL2zNwrfrtf66QQTf2GCYXHPVjrH4nFsVRG4DzuFfx39zebAvMsvs",
  "key15": "mikyrLfs84SCJr9DhKnTujxhM3RjSudFtxFnZwipQftZUVFiK4zC7sjsrQbYGGEqmjGqZiTeiaTf53CatwT9EtK",
  "key16": "49KFCEiU8kLTXEWapiQpXVqSArV59zFtFR9LThVFDc5xN6Kxsi6vNH3JnBYb9bSBVSDR77nCyna6YWR1V3WQqRdc",
  "key17": "3vKYvDGW692cw2yRQZXpGhamhMJWXMs59tjvkCsqh6AZrgy31c6Ac9m2JhRFXA7Amri3PkjfMngK4Xg7A59YKGoW",
  "key18": "2asKMVLroFTwJtMdDXg5bH9ewHEFfSNaKsSoxPEbgQnDzvKhmyhHJKzWs2S3jZy2PNUesBTKtpqEuG8zEKRYDZEZ",
  "key19": "5wDrpJqUBYxm5hDPJf9yTnWh1ojL4kNt7C7Kut1z9ijAtTg9vkDqkrxv6gU34fwAd7axVNckxrqw3Ea479UPg9hn",
  "key20": "Pd61A6ok5GnACgnWFRZQG5Q8A1nf2J5ahPJ4nE3mgYmybvkdD7DvEVuHE4e41NZFLe9u2zx2wKpm9GJCE9bUeMk",
  "key21": "259bJHCAz3CQVbATT1pcKXCrz8dkkZN3DTYm5JKhMKQfHdgmgQbjcJYfvsELhgU9V9B8TDuWWn9ESNwScZRZpskd",
  "key22": "3z25Rj6jAgS1Yo73fhT6BKf7KwWq7F8P8VkhBP8P5S7WWz4MHi2pofCdRSj2E7HHGbVuYcEg46x4P6NQzPSLF59",
  "key23": "fSYAWtKRhUok9hQpJCmKxT2pMoJuryfRKkvb6zmUrPsByrFLc72UhiYnYBnKjtckxUXR5tFLtn88YXqD2iQoYyW",
  "key24": "4dn37siTjq4oKqupAxXVAMabnF1ZsWH9zjZmngm8qLhCbiDTmLtuU6UNmqcFxQvnMN1Cf3UnTvrxJDJNrTrAp9GT",
  "key25": "4EGAfzR3Q1XwAjq8PyraVnhifTbHGphMqxYiYdTxUXF8soeo1N2JyZicb3zqyXB5azhdjzEqrR3HAehvwB9QvLzb",
  "key26": "MyT6aTNq8i6C9SWhrpcBRNsMSYSfyzHAdjy25K8ALbTNdZYrvRRamNUMS333JE4yt1GuUqq1tWC5SGH8rZxPbGx",
  "key27": "4bj3BTkuWPpKmiXrqk2qtv1T1tSgxmdxcNV8R9LmeoMmjfGVPEcBoPMZTz9Hh3XdfoFCfmDuJ4Qyi32KFEymVMXA",
  "key28": "5kmseFDjXUuNiPx9z31EP7tqDNLEoUwK1iEGWNiMYVw4MMLnGFV5jnyWwQ9eQxGJj1Pw3yNoa4QtcpR2E7Px3CZY",
  "key29": "3BitQEG3CNfhT5VE848RYXyGJuja3NPY6hPFcqU85nP2zW8p5gpaafnD79TmLDn3RRctxngpHQvTRHouogRUcsJj",
  "key30": "SBuFxbE5yDW68y3HVX9mkR5gz7QEfSnTH5MSauhBbb9eG5ivY34ckf1zvthHLvSfoP3qqZFWW98oYkMc9awnjaQ",
  "key31": "3jauBv16naLXkUFDNJ3YD8Pwtzg4tRfUr42VTYDS4YTF6BwAxCDtTu1SVPX5tRsaeHh4BCnHbdvjRXjhRL59i6bi",
  "key32": "2VgrrZrPZxAB74pmoZ74eZNtjmLUmHx982FR4KLUqBrxuDnbiEAjJzQuJ6MLyM178EmpRgxzCsg44qyPCSaDVKgn"
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
