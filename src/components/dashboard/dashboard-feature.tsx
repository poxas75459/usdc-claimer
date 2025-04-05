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
    "5BU2UjsaDfpoFgZmgSyCsJPrPRwQ3UrHM6ceE2Sp19jm6UoU6mf8i9TiLcK8HTyN9edeK9gv2zu1QvkHGsqZXZVJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XBGQCFresU3qsjJWLU78K5pGe5vsQRN61PMALPG9xakxGVFfBXAjg92vXLsHqviYdbfovELjAonZb42MZUaD66m",
  "key1": "44hsq6236rgWNTEhDgDHFzjXtZKB8gMqKGNAdBBs2gerntnkihSXVtYrrUEN7AsFRQTLqizoS7LfLNrJXbizeu4u",
  "key2": "4NpDbyTfpyKuA4CaeHR7AsWoqCghWt7zbX32uvwXUv6EknJAbbjRKr6wD2M37BVZDS3TQzBhmNEyBTUCvJokDG6H",
  "key3": "3qkZD4RhqHywbugkVGyA5YBWtuWU1sWDn7Xoa6n7KoQ93NmoBm1nyoyVG2JghxnsjUnxrKjUYukBtNhfNcTZw8ET",
  "key4": "n9ixq32qmHFKpUdJxHH67YAT2Nptbt82N99fJT1DiZoeiYxHU6RyMWnH4EirYUCTPLuK3jNnbmsE92GB7qm1Ujm",
  "key5": "QcdWWpLZwTiuQyQo14fo6sGutVzWYetTDnyodgrAUaW3NELN2K5cqqASMG6W9zPr6ZvC6G6eiQ6Zm6jmWtdMTvU",
  "key6": "2MYHK4QjafBg97LSgrmMWALSaDu5u6kvDQm6P8YtCTcaaeuFZUF67Shvef6mT8GFrdjsRXBS3H5poiTxAbcs6MC5",
  "key7": "2aCW3P9NGecsFou2C1V33o2JQFvgA3osvRb2QqKzoK1Vcudc9wSgfYUpR4xamN92AUbpKrkCVNW1WvZ3aHhSBtE1",
  "key8": "PsDgYS4T3WADQt56mLSSjctAVEfRa2w1TDuYvghPzY6twmpFsHzh1WSpn3sUWp31iwDoeLhFAgihWPhhduXi88Q",
  "key9": "24Nwb3aoLpqffnD5yzEwRyR6dedWNoECsw3MN4KTt9KvGWivtjyLXHUyA9GVjpEnv36rs8kdLhK6vxdaDR4ska7j",
  "key10": "64tYfHcaE9HzDmrA5UFrgX5NCeQpvRFanCFcQnkSAzHBfVXFvZ1q334dirYaNp5xs14aj5Z3d9hSCiodr9j5CYVM",
  "key11": "2KZhp3KfCeGSMgL7iVovAyEvvVA3osEaeaYAv1E9EqvnFPkd7rCNcgntrY2SGvYXC6cNnWBLs1z8YExDx2PznVXo",
  "key12": "3JRnjtmr75WgsQNzkBDExJJ6GFGbD8ydRmZkTbcCn5jXxSjdXjiaYdGcnh1aRhjhAerL27PKwkfSwZUKJUoMTQfj",
  "key13": "3KNUF4SH4eV9kxWBM8rKyeoUAxbs3CAdMoFJ8w8C9s1zn8Hs1WRpHQ5i3EZCNDPMPDK9cDLc6yidqHCUNr5jwCN2",
  "key14": "5aoJXX9SCeCjbFMxbsSQk1Wa5WF2XXcbXFZTkxb7W8AbzgZvXSY4AQdpi9znpfgh3AN3Vk654PnPBUBauMHAq65d",
  "key15": "5Vs9i9r4nzvXPuGidm2XLLqaWqNZRsyGwNDMxRRDVfxr2xKQUhPuAaj9QZaG7wuz6VS8id7f2oZXwbFgq5joaARZ",
  "key16": "5twX7BLB2qKFSRs2HoZ561RL5USwS6ignDBQt7mge7guo41RdfexwsbKuf3cz4mM2vMrEcee88LyvUeVe7T1xSC5",
  "key17": "2p2WsAAjmSfGAKGyuEJXY4qD23JHNHcqiEvSjYvVNZhAsy6aVsN6gv2EkkZTRjDYKeq6xfwH3PJPmxVrvG7rCub9",
  "key18": "2GWiDQ5CK8DsmHU5PuebMvL3HgDBztki2n6wMQM1oLRcHPqe91xwaDkVc74oHJWf7GYfYpMf1YvzU2aG4Zz8d6wU",
  "key19": "5MLqzhKWJSeotVo9uc7VsQQmS5TBQY72Xf5kMjGiBWnePHrhUzGvnWaE9DS2yXfurSM7dRzSE3SUTkVBSyCpNDfN",
  "key20": "4RPJBUvuUuMtAn5tc7ueminnw9DaFsz8s6C7uXVcmi1ZDnpqZGMsaRFLsQAgeZGymmcEJDAsciXHAz6mjtt5nFzz",
  "key21": "39DYP8BwkZLBYJpX8ZxwoXYX6exYixche6oQsDZzrfHZ18ncGbL3J3m491szFKS1mEhuS4TGtmDPruBTMa7DJk1Q",
  "key22": "5PZD4addGZv65JJhJ3gHZBnNFbR5cdwRWzWjR13K59nzf897Vev8RPofWbPyYUhhu8UwnzWkPDeUnscaZfhmTzVJ",
  "key23": "2KXeWf8JPVWxabz89oC4vmeLaE9bNiafVMf8sSWrtNri2xxVogFihYvEVZc38vXr3S9hgZQXsV1CvsRiRMRb226p",
  "key24": "5dTCcSALVQxZG6fCHerDwBfxDnbdnHeU6vHkVzxoGyMt91rPKXnTQckGKvRHMHdedNR7gharR8jmCB6kcn4sfRRA",
  "key25": "4wcj9RtdUghuJiej63NcusPtmoeMtGcWt3HRdAofRyHLp4P4QV1uNehYA6A6SAxLA2QHvb98BFXuHc76Zv3BSehE",
  "key26": "3tQmcZJbfiuwWYS5fjc7X6ggZgLfz1AbYtTaRnP86jJjVPuj5e8hRGhdXJM9uhWSbehFE8ZNfEoS5bZLGo8P6Jmz",
  "key27": "4PRPEUcW6EW6EXHZL2K4PJUXmjiaigFxXY75sL856cd3uYWom6YWbtQDxeEteXY6azeWZ8U2PZad4zzXHWe8QTVh",
  "key28": "5ntbcd55SwyA5SW7vRv3MmjA6vJ2VWmYE7gvY6FnUrWfyRWTYb7oY336vBTymMUuA21ULJT8oHgfr7XaQbutPrdM",
  "key29": "3xGHTQbevc1y6QXvJiL4PU48HVob9JAUXTmDUgXFtMhBwujjmCCw66qpH8uX3zNGUxUAbfmiuyJX86CaMsZNSYsh",
  "key30": "655EjNMMXa8SYvDCbk1w7E71ApDkMsZzQCvMg7X4TJpc7Yd7NawrticxyEjmSYm6euQjP1tGHmc8UovnZt4ceNtx",
  "key31": "3yAkE76NCAiLErsMw3dxRpULW9prv5vME1ZMzwrioUHWe4zpZSH4v2bSfm8CFLmK4LHK4MCedcCp9BJZaRgdv26a",
  "key32": "2AB4VswZhaXuHAQ1zfWVBANh9SE7aGNkbSQ1chFt2Fiyp9LmWwK4aHNCeM5pbhnT8ws4hDuh9F1NrK24Gq6FBm4B",
  "key33": "5iugYKgNpaWtFfTLL6iX2jrGCTu8GzMPajAnU8f1iRzbCNxcS6KEmKrVTKYvD45KWGa3WbkDn8HZ6Rcg7KvQygzT",
  "key34": "3NNUHAvJrW4RsMdAYFmSRqyPVFE3Aezd2NmEMLy8G4tQW6tbMUEAGLNzUZWpLP8yFwxWsQRaE86kGzF3hXdDz7kK",
  "key35": "2UQcBiKii7joRp6aK5oWTLAZbPv1WYXiAyNFPA75smXxxaGh9QpgV5huvHNHsKcqpcaXS9JNUtcBgtxXj3ParbaR",
  "key36": "UDXrCTzSrsYuUGoRzu2djjokkFTDjyxhygQLCXYw75BaysT1xAdpxfbyitrKp27wuVPsyf5KUgxFdS39MbHbvxz",
  "key37": "3TEmNkPnriwLvUexkyRhk6vAJ7bpYjZD7Ke4YB4SiEbzE4VYXeNVTufmnqrCX8MdX37KGFvWbMV7hEsUbpxbyKuw",
  "key38": "3aHB5AnH1bNWMcQQophDNK62VJEP5Ug4ort52pV67bof21fPAJXGSCs8SCaqG2tXrwUQQFxinUptyy6KKTwaScs1",
  "key39": "2JUfbpBAdhtv5tRiovFGykvmz6YXZDHoTTRrhmYYkrSgrT8xVnDZE4QihDcsCmneEMMXf2nbJppgDyffMbGPPFbv",
  "key40": "n6QfVYSGzxFrT4mmJH25kQdnXrCZBgf292MeYCBr7NiiYD7AybvtnTJoSSkNoydQmV1DtBzbQFJRdRAjGph2Ert",
  "key41": "3wmBSFFENznZNVLnGRQp5EEDMzQkX4Aw5rK7Kd9FiGavUf3a1HYtEWvnxdNYwxdfDgfS4xHk29BhhhormLEjGmr2",
  "key42": "21NnsKPKZYpeMsNfcr55793sFUGMywkWQZLRQe5AzJ83TeMteyR5KKdooDLHCbo8mNf3drNPn3NSpfd4Qy85GYzt",
  "key43": "qbYYctPLk47jhxQ98g4bfZgXY4Y6CSausVfz9yzVUrj5DYMorBPSK1RGhuJDyQjhVKHywxGWDKHf6sv5BfxW2Av",
  "key44": "3m9Sy6wuV7vESJQ3pSrQPbRhe45ShjnUBJe72mSyvVZ52bQi9YssJyhqKAeNTLAYcoDNJHc2HYLP9B4mxakiZCnQ",
  "key45": "58XpYVRSW39Lv6bj6SRv9ewn7ab7h5r7MEmUYkfuWu5VRqzPQCz7HT2PFDVjKczpsMHiG6DeA3RcL5XUjJPzYNAT",
  "key46": "49PD5CoteoRBuuHwJ1p8mg9j1kPm2j31GhPurEfHziHJhVK386ghksuvqVPLfTC3vk9Si6ybqcY8uXpeWbojQ7cp",
  "key47": "2ZKg4jghsTbwB7kUgguEuKpAnGtjLXmw7aVGoSKZbDxDs9a6dHvyHBhe7R7AVPT2WJAv4SNTkFFzvAr1g1FFwWj1"
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
