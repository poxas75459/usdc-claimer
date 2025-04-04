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
    "kQjdWfxt177yncHCa4LV4C38WvduTV2SLeh3RTFhGkRX7unKX5JeZjgf1pSFT1syAMqhf8yLY1mS4ASzPfoaqPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51R5pXHUV5QmgwtUuPDiQQtvHPQpR7xa1PUoJJPS1CXaGH5FWYsKTBwSQ7LvfqydkjdpaV6m8fsq2yP8ZKCazggZ",
  "key1": "5NJG5bbXtgfsPfz3jZwtwK18BY6Xah25S7XVWmo7jQH4sFycgym6ANEA7QfVcwSutu9AHQmLwLLk2TykSwMxnbdn",
  "key2": "5dber9kXCseqBbfQ1FJcdH5hihCSUgDQ1eV8GtFaPgx7nRZSffZXaqPZySEFRXaJEf9TiAQCB5bqVm3u6JZXV1q7",
  "key3": "3m3w2Mhruyt6WKJkr2UeDMQ7ck46ukFrGd2FbAtXJtXYW2eT9Ztmenx7jLyAvp5b32d3JQAR9FgnddbRcdr4z67Y",
  "key4": "GDHfWvZBkhdxtCkfneF21fe5wgNY82fjwvRf3gxCZjp4XAN8qRRqg34XxLpMBxKriijAeXXF1gdquh6LcdLLqSx",
  "key5": "2spg1Nf9ir5pzgpAumeJEyHyb7GfdLycBrQhD7a4PBd2yAddHrmfAeCmUfBSqeeecnMcn25BMpTjtiMgsGWPVhYA",
  "key6": "5SNPjE91xaBTXUau2wyHr4YW7DrrHMd92syki6bUERkCtXwtwszrZEL3pdK3P43KrLLWRiNFct1mxUs3sDqPPeH4",
  "key7": "2yX3rZ847sF5DUmyrqQGB7Fnrxi7vL7ptiH5SwSXyK7YCGDJsMLoX8X3jnjeRuaWe67ui8jPTamRKX5dKNQR2p1U",
  "key8": "25Wjazf5cjCmcSeRWBvawksefAu4HmneJ7JeiYXH6zr3kAWXHt4X3RNvQArwsmPeKCyUfBtTijPTsm9bcbKN8C46",
  "key9": "3ieeTp2ZGfLC7ShbLTxDUFE1TM2GKR4wpJWbDsctLeP39kEc8MnGkoxB792d4cafoay3hSNoQi2CE8qU39saMFJU",
  "key10": "5E3CPRxohzyHmWU6kR9Kee699M8AindHAzdeVP4mvVf84UQK6homiUBRTd3e78wezrneRR4ZGFLLf2qN2ynYXELV",
  "key11": "4nd95CnJ9KuexQR7Rjh32dEh9jfZ6sPeaEaB5dwWgGqCWLrr6A3cQQgaU281AMPZ7gqVJT6wiREHbYX2WLKdZgpZ",
  "key12": "4mCq9PzNrBg4PuXJb5Kbjs5kJVx6K28S1GAvavJGJWqg2vWh6xaubE9xQL2KevSXsxh54VgfKUgKbqG346biiAvT",
  "key13": "3v83sD7jvEtp6KsmxrTpksGhGG6inAsdujaHbkQXwY9S8Brg6CJ5FaWkMSvrbc1h4nkCLV6YWhaN1rCBywRhrUZG",
  "key14": "cA8c52kUoPge2b7EoqKuqfXqrzhZ7dF6HoyM7n4MTz6hRmrnm4Fqk4Usr35FeJczXych7BodnFuoUCVCdjJ1aPi",
  "key15": "4FBvvYZEPqxQHHTji4oAuGYSSutoc2eEPUm2nR9Gmm2amFKrUhrAKuMirkrAWSvzNcAW6wVhXG9WgzfchEUK9rao",
  "key16": "3LG26DAoAVzEcQV4Bz9bdunnpcMz3Jgmfr6r93nvtRcjGACjVRroCwqFvrjyApLwjXHYGzwFQHQpMpztWpSYLht6",
  "key17": "5ZUe2dEaun2BEzXmvUFd5Sv9rdWhRxCei3WVK7wVxPDDjAnPHWDruNDHyhZXjD94yicVemTjKeYV2KMp3NL92XqB",
  "key18": "eGBoW9ao4wUqtensc8XL5UKaY4cHgrLieBneTe6D2JDe77BgCn1cddrHty9TuFSZbQnqAPQnXB4gASABGFsbh54",
  "key19": "2JmwrSHDg4SS6Rp68usCQQ9weineUmUEcf2c4rrBonXVQqp6c4YgmtQouwxLrcuB6oDbHNHhwyUWTJfqYVW2a4AW",
  "key20": "41AZEHWmHkXtzPFpwmPwhhqQUYUifkjcidnjMyWircq3AUfk57x9tJ23e7JDTdRCfve48RKxjinWKX4bWtoHjFX3",
  "key21": "5MmxvnF6XiHCiRsva2K2CcsA7CZRbivQjy48tLaGhseepLQSimQShprbDwkEAqN1Ao9VnfRhjjjERTjd3na9nmNY",
  "key22": "3J45TmYPDEEr77utJgfASrSFG3VHeEmgKGNnD5sDmZ56YW9qbv4XPT5Yp8EodJvxSafwW6JyfXfU2Rh139vtrGLS",
  "key23": "3GnSDd3nM9Wc5eu5MD3Jnb41vRQ5wXnLXU5iMa9yC9dxH5T88FLryz6y4Pm3AboxXvZR5uCcdo4cKuBqfdsGpYnh",
  "key24": "Az4RNg52Ky8HB2B4k7XTEu7fmRFUT46tBaxKB1fUkK5wxFKM6AwbrLuM4nBh6Gz6uMXzVDeuw7bVHDpFzTvjG96",
  "key25": "3FBuGkS6KpA2kR71VNa6rrAes6V63549Yp7b1z4xMY5HRqXUU2AH8rBsozwRBFAYtNZzMehEXWkU2XnKhSWdZtAf",
  "key26": "25bDagok7JxXxR2naW9rb2eGXs7r3DucJihGpzwiSE8tuZLgJvVnDKcY58J6u46NbN3zoAVQZfPBK7nhqDTTBUCc",
  "key27": "2JRs6YrQ4G8FPV4sKFoTi4SYzxa77rK3tgYibhPQ1xBjNaQ7vkJwrHsFxhMNNki3aTBkULrMPvY1BT4fQRY2etMS",
  "key28": "3ZVVju6YeURCp4LU9dvYRx6jRN6qAYdLv1QaiUgCb6ACeYDgZwKaPxU9J6aorSjmJ8nmHHahJAWstEGBSrKmWBY3",
  "key29": "2ceZ5HnPQu7f7kFxzzw4TNnxmp667jwyZzVnQPpsN6BECDvamv3wDgeX2REmDDjawvdicHFRiT2fiAxA6bfRYXg",
  "key30": "5vbPGp7GUUCDuDM8kFakjZMHw9yet3jPDTz1zuGuVyj23GbQHB55XAnCa9XUFTwn4F7q9BCJCT8qjPz2BzXxWbrt",
  "key31": "3oJHVemJpzS8MGeEcFq2b1JsvdoUrGXeVZjU48jT9rkLvEhERfemqDqTYbcrCMWFb53o2pqNaEvCiSh6Y2C1VdhB",
  "key32": "qLE2MVap3BkYPBAz42jLqm8jwvA8iQDLrfKtTu22fDBjh579RP9Q7wdBZiQH1xGhDchFvxF1xqyDM5guvTCAEof",
  "key33": "21gCmXEb8tCAGEdnFxAffqsj8z4HaLcuNDNMbTqf4w9bHohKGGnVr24PufezypG9oosHYB3Sf8VkKGd3YAGNpYZY",
  "key34": "2tYcXcaeTsUbSPGYsqjRzz23ZQxbbCpNFiAJdrXA6bASzLyHamPuJKMvRxH4AAD4jUFsgaN1pJ8vNCNTAQfcurxx",
  "key35": "2ML4muMU9LQLbVyQXL1TuJgx32nseVBA8owsnaVTgDLFUgrwdDaUXgbKDai35CqgBdmqXzsisRrDmpF1MLpf1Z1z",
  "key36": "49zw8hfWGP8FHJsFHAaZ7W9TCsXmLpoX6nh92c2F3SPvJT9PYbtB3oqhrYkgVP2eX5f7XtKx8BNnMMS3vuaFq9gp",
  "key37": "2Au37Vy1PhJFDGeCBeB6WTmC9dyzbnM2bEpmvL8GAo7RrswTKXuXC3bUXoffrm1EKk5rzKioUYJr5h4kTRe6UE9S",
  "key38": "bHVwr69ea5LLSWkcSHTAzyMVW54AS8Qtq6y5PXdiTMyV2JtiRxm9WKyiEFet3eSMhkQFvgzGzEBoifTqyDhzQyz",
  "key39": "5xDBoYBxmW1ziK7fyg124hgJggtUJfch3fUSphVyPwFUiyKwWeXLhzykDot91AtGk3BT16mt4izHProL1YqcCAkA",
  "key40": "5gFWZw2xRg7s9aBYeKzir9DCurivsVPDUqZynceUk2iugyHng5U3F4ji69Sy5MxmDNMGjTWPvSmyJPaEJHrAwQby",
  "key41": "5enQh8f9F52Vq1NDhnUU29Zq2cP5XoDwYNdcMc9wyYRLMjYCFYe4ok6uXCJrFKGMgB2d8fAjntnFW3gMfa1jwtGg",
  "key42": "3ZuXo5hdyoqsJpGRnfsLN46xSSiSH7XBtqEmfnkeeqezEMGqsMcFzexu8jxg3TMvzhEyBAyoNUX11t55tHQeQV17",
  "key43": "PS1en1urBCPcRbzPGuLu1MtEQKeifCipZ1zuM9e26851YmWPZMJgsbkoG3PrMEVC672YVptxYvHzvWoic6sXiD8",
  "key44": "4w4w5YexDPxjKe54pXaqaF6rqieXZykzyUVnczcvWhk35Z2KBWSLSVp9gBqo1Mu68DVhaZhEPHxQmUXmhcD6s1cA",
  "key45": "3dkzfeCjCgnpaYnh6Vc2Wc6rjiMgFmC8JbKF5X7QLqrssXrmZVXoirfnBguCgLMjLF5sbjnb1VvWC5U5HZGf2nvK",
  "key46": "3wv8TqQPJx2sFNfFewidK5FbunvGyYZsuMn8Fm9houio89ZtXYDWddHfckpFze8reEJDcJAkyr3cVNgaHjMfpnA4",
  "key47": "3pZ422FUBJv5SJ4AUH4gLRRispErb8YD5WFQ4x7kURqiyqZNo3o4GyZzaiVa2QERD7RtBRU4mWYraf9rBa1AAQNJ"
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
