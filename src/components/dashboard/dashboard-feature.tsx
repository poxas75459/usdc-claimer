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
    "ej41GBxGcWSwY7Mo99SNosX6ePmoKzTAgTmyEkaGcwop4uhnayqG8pePTgxxR55uuqf7YhsKYzu59M9SYDWEzEg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mycxEsRytKHpZGgmjgtHmtC1rDJ74vFNNKbE6Ume94x2QTBcrH1UvNkrKBaK4uTLBVDF7L6SzFetMhuCdQwYv3h",
  "key1": "5ducEEPc8j6XgwwyfXzbeLxuD6URZqseH6reVtcMkaq8g5EJ4Aakf7wwUAGshZFy9C4uFzbqbxPeo4zCQTRw44vV",
  "key2": "2xEnXm5vFUyUp2cYhysNFGTYWVKVtHuF9oqLQ1MRjBU6Sa2F78quHvJpGqEvWFyBcD3EeP3x1q9F5v8B9svacR6n",
  "key3": "3HJHgd1qWyLTbE4hcYYjUx6utz4A4UcnVdxPQF82JLrBow5JLjBFbXvCNFxNDUjzAWQJC77xQfV9tvgFCJuQHErK",
  "key4": "1DZ5qDCXMByG3KkxNQFSVg3QWVpBP3TLz3ZYroPTR2nuPGGCsLeTgKAS2R4GrjXhj64g42vLywXJ1yYT8TbbnNN",
  "key5": "41gxu1p1N9Mz4Sm7uS9H1LtSRTGYH373QUTfALP4khMSyD3h7m1x7LbfnD3znxCXod6hpNh3Nz8WbKDJnkffKpru",
  "key6": "2R1Ej3ELLtRziHsW3gUvFoeizZopBMTNrLkdmXJGDpn265TrWtuexHyUymBGd3UgDhvc7UWBbKcxWokfApjd7f4f",
  "key7": "4eKVWKUQM6Rin77iRVMbQmDDAxURkVJZdPVshjos7K6bgrSrekjY9Xjk4mFjPbsDTZ2KQSYpaUuQZ6bPdBBt4dG6",
  "key8": "3Z5ts7mV9VRaqyQBnAXydL8hTmaCpX8obpTQsU5EKERDfgTwEDcQTAqVhGSKdWF4jDUqK9Kanvk5TAuNEQfBQ46H",
  "key9": "vmqMyqig8m9NbiduEXo12TJSqH9fEhjWMusdgfubhf6nSXwkSWp4QH5unDSr23ndS45e3DaoZmZpF7R8cJWqMJk",
  "key10": "3bERCM7i8Griue1wsWEosZycRhMEvkSaubdFaXaobGkSPfPG7ww5Ssvi7KobcKPRvSQ5KgDuiRziao6CBtURMXUy",
  "key11": "3XPvqTF24CWoU8pSAn9QqZz7HZGF7kD6AvmT9ebd1yCyT2U7Ty8Pa9YZFj4bRMk36GR6RFGiGPDUDExgWGE5yML5",
  "key12": "2XtxEWatepwWfqWavey7NJ1GQfEqxtge3YRMLsw7QL9c9SLWTumkXFMJJAGHezSDmQLFHwUF6QoyPBmJ2wsdLfMN",
  "key13": "3wJWuigzKatDiaEv2c9oJqMBw6QNroYpobYyprD3uDt7bYipSanoYhScuF8TQdXAFhx5jXN5RYwdaz4KQNhJ7947",
  "key14": "4K2WMouqPcTHFhFr1CeaAqRB42pyLf2ugyiPwXkVs3boJkEWsji9GfWgn4BS75dT6CiPZiEu1jb9ZmZYy3Kh618h",
  "key15": "3apUuGFVug12HBzLJYJWkLyPE1t1XQm9mkqtmiFgrSQ4fqUUJVGvh7Bm68WgNvpqAYJVXGW95cShjKCncR74PyGp",
  "key16": "2uk4B47i2AJdTNU93Kovjohkid8gGsqsCD9i6v5MVTf3qXTAxV4CEzTe79x9Pa4MYMjFj8xgufhzqpRXBbfsaiax",
  "key17": "3xwm6Y5dokTpGqWyjpVHn1u6shasNhUyrGeoMN7cDZR2SPHcR9d1Pb9vFqbV9qfXPPbCcz2CmCydNr7sh7g6Zv68",
  "key18": "3nNpmu49iPKtKyPR4QktJUv9qJiWaY5wL932uXsMMcmyQHDorbqQ3wjUEHvgAFLgtwAi1Tka3phEX8LT5YJUPmKq",
  "key19": "22rdTkQtwVsyxgsGZcmU5eaCAJ5mNmQbgbrzztajaBdtGm1NmAPQ1p5xzdG3pyUk34iduQKVpJhUKtM9yrNA2L3r",
  "key20": "5GQbrKghYtUmt9TM3mwarFUsdoUTKxQAbKASTACmDJvSyRjhfBkm1jsMiA4jXG9xzQGeNTPd987b2KjQfYv54YyQ",
  "key21": "4foHjFGVqYzfUFjPw9SfGqHnTefWFW1B6EKM8iGUzzRNaezhRgaUH8Y8TRTaHn5BX13HKb4qi2Gxqgf3L2Zogj6A",
  "key22": "4GArZdsEtLL9n18f7Y24Narm8h24Xde1JHAqyVdcT1rDSMW4LFyhGtfQQFNkE3a3W62JzrqSqsR8bgaoDtPNPVT3",
  "key23": "4LXsayTMDcPs5KwGJgzh8Capx2PbWLuVf2tQrpyJPX38K6vJSbipXpezAfew8VyiRPgd4L9ruGAu18acCU4nB1P",
  "key24": "2ncYtgXuowAd6kSUj7LGGYWcF2f77h1npuqNRh3MSykW2BsPSKMrjKFmbVgY8vuse7J6bQycPn6yfBjQfoL5apDx",
  "key25": "45cBwQwUuPkXmemSJMtyiLkRCD6F2yEM1Mct4996RWXYfPMNnEy92NBgZuazAFhbiYyTmVGP9MEDT6SNCKLn83UP",
  "key26": "5GoSzV8Xu6WHVucoAuYMGqhxR3orUPyHVQZWteiAdE9UDV7HqaGjdrsbCkUb76WvfGoKDXJqtdGjWTiKSZ17ybbN",
  "key27": "2gnD8mjNXmBNRy4Evw6SZPkt6iVq5kPnPstX4UCMn7pgYCA2sVgBuQMgir3JAm8371xaCH5V7WpmFaX2u8ovUjqe",
  "key28": "5Zh25beEZzAmkXFDyt9qCpPFSUUsYyDdNg5aTfdPk4hiDQfxEbHmBASJDB7pyRdf97qWcaYvFiShHnJMAm5t44or",
  "key29": "5AKcBn9oQkuNLxPodxifHgtR2t34dPnhEwdw9q6h7oroyoLb9chcvBzpws9788jng1hnA4hAS1CoXXAkTbsMNB3p",
  "key30": "5rzgaBAixP38PALo24sjD3EGbrWyhHyVitbN7mTNUvL2dKP4PmXGBUaweUqzpaJ6zEFf1PhRvxR8vsBmEY1qy4cB",
  "key31": "6LqecUSqSoRQnsy1ju9Y4DDVFViGxMdqsEieLUeaMzAdh5APa8vZ96gbLqdxy8hAKDXd1dHujVHpCZx2ftHhWvY",
  "key32": "3BbPMn23t2sS47MhmizK4UqobaWMzdsZnbpbmrsdVogUFZWxNTnpK1SPvG6Jm6sJnxgqxNZjD1tiNy6FtQT3HTDN"
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
