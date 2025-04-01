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
    "5HrBdNb5E6wWAEFDJq8kp8zexjGaYL8mwbkRpudu2cpAUXx8d7wkY3UR6fq1vEFtJfs86Fta6JXdeeHfmShAbHg5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vbqMnTUGxVWjo7dzTJDsjpT1MFjAeU9iunqKGuBrGQtEJ8bqNLaJW4SCYeGYANnA8H6tCrmQgyJmwwpcEELe7f8",
  "key1": "46AdAUAgjsesvEHqVciLUGx5TTr9khp9dfGPsX71kubZt5UqQA7G4TxUnQ3PvtETEoS5ptWkVSykrp1XMGAFsULi",
  "key2": "4usLdz1CNuEkgHNwMxo2SRN8hv4w5DAwx88i3GCxUsxeAGhfYV7LHZMsi5qmmQKkgoGjqgzhUzzzoJJDrkHTr1yu",
  "key3": "2uAmv14SYB3qde1biUxYyEeqxxHKWPrEoQZbSat43KTxthaFCgLUSXvqi52ry7jRMbGPvFfaZXeNWMNaZ8a8w7iV",
  "key4": "2AKuZqKxddvE8Qz3kqR9Wh6qyZCNJu9gneM55mwFHS5LQRjVJhKuJytcexkW1oSA59KrKiRK89sahrdMFcADJH2P",
  "key5": "3KVjh9ZWH4QL7i7uxybzSAzCc7NNHPvS7e7kxoYzQ75DvFmeiLEjGnuSym44Y7AaWR6df5m4tdz7pscMxrpvuDvo",
  "key6": "5BoD4E1oXnSGY7XK3WC7bQ4qvDEMuq8Pt4HXL4EcLXyjMVf8ABo9Ra3txSLqbEDN8TPmLTUDGWbHyc84tB2B7vWg",
  "key7": "4tPDLzsUkSvArekHdNEdQZ85xyDoQyYH8zjmxQcRXjswe67gZvZycy25ur6EYzXM3Gk2pmJZ4KGiPyEKfWDsgvcT",
  "key8": "2sJkCiZirKHtEvKU6jGsDwTS6tz2ZqtSiYEGxih2HaMKeMToGHgZciicaXKB88Zyd63knAucLJkey8BNvLUKkFvc",
  "key9": "2dncsSF9qSz72a4njnMBkHZowH7LacvFU2g3VpKju4fdZRhqNgcNFaWhBArZnYsW5jjdDgXZjrnPGQz7oEU9D6nW",
  "key10": "5tyUQvdDPvjhkdSYHtN63FaCQwaEnQKrhDH81nAkH82CgBuRaQA3MzoP9n7jn5z2C5PoPrq2QKaWXfWB9eLNsMqv",
  "key11": "5CLyi1wg11Ecg7qBY81hAqPKG7NBwj1GDn2LyrKAQtUhRH4uFas59569SNciCzEJQqnDwvM69ezoVzdSMP69Ch2W",
  "key12": "3TQeLdsYxGZUBk62G4yp9FUEooNd9YF8HScSF2TG4NbAY5eGynwWvCA1VSb2Wcis1fJGjfsHFKEW41w9TpY9XmSn",
  "key13": "3FJ4whFbeJcMs7wvBnwiEPrpMujvkkPZbopmgYPrkEkbABZXSX1jhbFRj3d3s9q2KKeQmGK2CmeKm6uwjqDqiAFu",
  "key14": "4WJAYDwsqaiaCCw1cJHK3X8KMc7yFJH9tsi5MreoT5p62fTAG8HCfR67beXEGdvDUH3EDswfhWLp1r2UpoyYJvae",
  "key15": "3aviKamarpSWVKBLz888n6FYWiVTAF5VX2AYwDtHetLydJmfexWz3MJ7CZN4J8iuVcN2M5uScm9c6NuAvDYE9Z5i",
  "key16": "3F34Huh9964vjTiTHUwu5pdULGCoaRAo9oyjEzcnJ3DCKzvwyjCsoYkDT2owJLoRJ8onwdhZ6L68Za1FYQsc4fA7",
  "key17": "4fK5VreC5NP3T7rskCBmhxjkbG2k5FQKfAEQFr1hwmszgEBYdMmBvmL1EmeNr6YFyQeogrH2CdhqnHFed7GWeqXU",
  "key18": "3hUSuDkcDtxeMnrooN64CRDvPEahLMNnoryepSuEeFthcKAowufdXoEeUP5yTSEEpmQqs32oQDry34XNqMZ1t1D9",
  "key19": "5mFi3mFTBnoWBZHSZ6TpnKLhj8sP42GqGrmAUPBapnkzNQCzgVnt7qSWuwk6rDJWUugbWYYum8fs89wfJYZpGXrV",
  "key20": "g1z7REJKpPr8W1MMYjR7i9VddzN6t1X7wkimQTa56KaLpMLSFhaMo3CUCYKBkm6GeveNE58WX7XfnefvX4MyQCR",
  "key21": "aKJF7E1g3fiCe8Jw9DjNu8gp1qA6bAb7NYyx5L5rQxDa23dCLkyKEUN8ecy5PcMqHRbtNHNESGwZ1r9A7BtEXKy",
  "key22": "2JB5MhzwUhEPUFh6XtkNZVPe3dqciWvjRfpVvn8kjSw4V3NdrAQCfJs2gQKoBBgL2UAMx6eoxT7LhT7QTh2yg1oD",
  "key23": "5hfNmJKNz2EkPhGTmtp6T1eCHVfUwmcMeukot6hRm5hGFcjR6goCtqd4is7EtxjDEcDYQZhmJ1gdUPX3zi2iwfYR",
  "key24": "hW1TeQRy3BnNXSnw5mTGFy44FZWVBNCKVhtWHFdWF6NtEHRkgHk8coYiD1h59sNHiR4Cepi9ran9TxppXKxVJJh",
  "key25": "4g7639TmfriACddpKB4sSrvhWmCTbvCb9DSHeJQqNFdizvBEHLRdWDrRJbupKAFwVnK4XbXXSr1zTjdGeZu1mRE4",
  "key26": "3nLe7nJq5E5VSaow34BpZFRhEwGzwNHmXtbM1w9Zs1D8WtyjyAJAjWPPbPp7N1AMJcaFSSEpizExY9Ef4MSeu8jt",
  "key27": "2NgjitinLYpN6bndErUArAD342r2YW649a5WntF1Epzo2WWcvbJXL5bE5SUXSn4nYcv2rgJEaAEriB619TsaaYma",
  "key28": "5guKKSKXxy1HiCrjhHdwJdrujgPvi8bVjc4znoTKvhkKANxYbhxurGeYCopouJZZ25rV2zNmtS7KpmuNGBZh5Q1o",
  "key29": "3t7b9nS9xTVThQeLkzW7My2u4zmazgQmxVWYfnG78Qny9LeK9vXiksFvtsohGyxxVsNN6YXtTNa6uH2GbkNcG4AH",
  "key30": "5xrSmGVn2E1VRL1kDR81rY5PorL2NVKbSYjk4sdhicWYGzxfH23xDVR3XhBvJwxMgW6xXxoYpveLxeaG1uANMSeL",
  "key31": "5Mn2eacmqm1JrBSAoRpa5UvnsBkLjqS1kNrC7amZA4WVvusufwqp1YqV71d4FhSMqn7CB2DZCCnK9PCaitaxTUBp",
  "key32": "3bE7nwAbfA5z2pT27LWeTiG4G5z1yY5JxWpu3yiwUsoY3u93dy2fdptqsgRrnaonq3eo7YjZn6w9rUVMdYtnsAEs",
  "key33": "3zsW3Fj5naSzANA2Vjk7oC4h7HJ5jZEuX4K32RDe1EdNxDNnN4xXYK8eBLUcE7nduqK7ADNy1EECDqjBwUEm2uRY",
  "key34": "3c8ZTqiavtDbVJRYYQ3UATALA8JefcnVZgU4zAkBYX7PZAnksSsbXEnviSpNysZGzMaoU1Wv7ViAcGHcVFY6wPS5",
  "key35": "615HzC6Wx9bi7cXZsntFNivh5nHxTXm4yCXP9fYzW27GNAW7hJxkZpszUk7eCCHWTqYn8VzMTXEDELN1TaaH1p5T"
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
