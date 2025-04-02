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
    "kAkn6VhN3Eov83hJmL6Kqboiw3G5KUSg6atuCmuiNuf6yaEtJtiHSpBhF71tiroRLeofaMaLHLCd8VUTx3ydsLo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jrDYFFup4wakjZWnAgTXYWbSbWQroyPcomfbUC1tXrw7p8pp5ozYy8uyM9a2BcJQsRqCnP4HSe77DnaaLUWDvbB",
  "key1": "4xZNB4CqecZ6UwHTZmWNrvtuSSeWdviMR12CEGvqYPyyCmKraAV3ZMaHwLRUDEW4nRwKPT2spmQX7oZxmGNdmBgp",
  "key2": "2YhdD71fTGJVtnUSBUcouMf3usZjnQJW6PAjPj4GiaQdu4SGBptZGCyEFmxNK9Rm5uSWYrewA8BXcyYtc2cEWHXS",
  "key3": "yYLzC88wmcxSi4cJ1amEAbpa827fXU3r3DwFuHW63Jv45naDjFKXKeobhZ18VQafSeCkddFnUjUt9DHARDSLtqP",
  "key4": "5MAMvpviyMWpxWuhfkEN4fT8AXTG7Y32jW5UHUHkeSSQiP1nmfiaL33AZ2JkjXFq2WLiBrv6xAopP4YTCboUGE9S",
  "key5": "CADwA2FDcZKMcqyTEXx2xKNTFxwHr7oHGk76EAiGvwgkcDYypFGr4wyZzLEWfJDAuw6zEGsdLNsaMwonfh4EHj5",
  "key6": "5TMAN75BuWpfA3SCeiqSkvqKGbzwF6aGs6jCEJA475odZUiGmcR5T7cTXrp1Tx69QYWYt2DMvSeJY1HqWAWvQW8y",
  "key7": "3VZbcXwsQczfHXpeqzeLZkHiagS3g7uXTSxYNJv78F6xbPKSmVkkjpS32dbGfrnBcsRpgJV8zsudAi5Fk2eRotcY",
  "key8": "3JUKaNH8tsHqeaCpKXmdyAQxT4KBJGvnoGYtjrSPXMCuywsHNnk4HGiwNTX3zVr1puLVvZrHECR1UyjEdYV8Xjka",
  "key9": "5ECxHtgdJNTZ7ExzSKbT2YNBhKhk4zUJkbm3QuftAQZm3TvP3faERWR9REshnytqG27P54QA35VMoRjm2dhxd6cd",
  "key10": "4UePUsZkbrYYNKdfa19fLvwbtYErKXosKXPv2ZLVEPMKQLUXwqrEJ7M2SM335vPP7cBkLfMcen7Ba2VcrkLVSGbn",
  "key11": "2hinwM6vCyCuZSZZJTRKGYxBrMFcSfjGMXg9VgZzAKtRzkJUarMfoLiSAFjfHg7B9ye5X7h41YfJW87KWSf1rimr",
  "key12": "inFUcC4pRvdGpdZfMXdHKZ4hCiCm2RsBuUHZDL5NJxVCuZ6TvQrDRksDNfAcUptmmKEmJEp4qZSifbqpM4ziWro",
  "key13": "395eqErDeNu2MXQTAjXaPSYRkF36Up5xazo5H8FjkeuvPaVsvjuBm43VtKb6QWZjsyrkUj6YUN941oXpHQvSmYLg",
  "key14": "2YCC6neHDHcSM78F9DGaVGs9Hmhj8Z3MB7eT3r3RSBVPkKM5fRX2WZz6AJyu3QCWLtBCUVnA19stCWDaevooRh9B",
  "key15": "2VHYSMKuz77ukahkG9MQP31L4t3zsopGNztDpfoFZZyA8jC6X1GWb9fZkgrHgJD9fgeARFNpfEpJoZgC38iDjm6N",
  "key16": "4KkBi7Je6ULo3vG8Gm1H6zRH1rpDAPkUzsYCr1oGeEgXEVR3DYAA6z6zckqbaVx8nbAGkH4xccj7hBWCBYFpQL31",
  "key17": "4oPbtWG7A2od9CRKZDwv4Mx7HtyAueqAuwUVE7RBtQ3PSF7nnMSpGnP1A1cuX4jpEDhFacujqLE6whiq1GKbX7Js",
  "key18": "24L93eFJqb8BVa7uwcUoq6FsNuh3qNCu6XkmLkDxaZt3c3uzmcUWkz2nEqXZ4YRjjC5tXFsf7NHsn8fHR1mQSh5x",
  "key19": "2RA2KmEwg93sqKPrZ1QXdu6c3rM5HVNd7VhMrY3hJ31skuMv9SWn1WLcFDNgiJgFzmTkhsPSNduGoM1j4iBxDyVt",
  "key20": "3vRztWf6nYoE7Y5GkBqX3Tn27GM2D1shwz3U6QtCLR847wiKxewRsPxV4EmMeqNePbHidCMoLtRDSF7SPhkM2q6N",
  "key21": "5bFzRaPt8gk47TZemicSz8W2A9e7SBptZMYnVzYoECvZNmv6hB2XFuhExfmv2ygPf5Jqgm5YoaFMhgvTTyt2xTbV",
  "key22": "2eMkcSLvhSptmiREjUbHMoDdsXTarnN9yakD8rTReXkGHVSma9UN4FzzjFEsXJzTzG2tsftVEaqboyzbE7L6hCpF",
  "key23": "3aymJ9GiSQ3kXvpx7cvH2BBvza1n8oTMoEU6AZtvK6rYdarrbBB8ivU2xT9ndeUVqsnfuER8ErPdHG2xWnBQWV31",
  "key24": "51NRX2e4AteJL5Yy8oE1pFrxSJjjkmhiAL1HjyTiVzB1pEgcBDujNMv5P4Dd9RXxyyy6hB5fgyCAy8nTWvD9sirB",
  "key25": "5We6Xs8MsJXbpcEnMQF4uBmd2dTTRVmwNv3HUzo46iGB68vBLjVA3gUi8bVDbiuy4XReXJkSkhDogyv1unMn1p2K",
  "key26": "tmgPFgwuzqjmWAW2cNWe8rm8xUkqD72DSNUG9qiizdkNxJdvfsZYwTYVUyBg5BnTt3h8Gu2SM7mAGGK3tL1v6zy",
  "key27": "35qq6JTpWjNEUWTF6c4UvenGm22YVytEP3Lt3t71ToB4YZDQaovMAVne9xawtRAsZucGbgnQp86F28THh4RQFSzB",
  "key28": "5vYL8bMGjypaHpjrsTm9bRxdLfQEad5fmM4ZzZggGkjUrVF3drNpMsUwfXRhGSeP7naA7EtEUZ1iaqeScqU2yNnG",
  "key29": "4f2MqT3LxTghNM5cAjCN28f3UY3LktzvnEphnKoXe5VGJy3H2wT7UXywEG6NAMbBiUw8opBP156fDSZTvGnnW7Gi",
  "key30": "3X5vNKi1BUPs2PkEeY9hxRkECRp98ahaA8VUKoyassFpMFTqnGwopdGHHkTdy5uGBBjGyToXhMmUk9fzPfVp2km7",
  "key31": "XQ9G5inUKeup7ukoArP9Tio6qamqsQCvrw3sPQpRii9io4iLcXtz1MxesMvALKv5wQi3v4Jx6Rkd1zkJHpkjMVV",
  "key32": "2oWwzmVuG1aQaWPgkQmLW3kGzd1wG7BSC613HNST1MeQHEaStnZpegtTEJiaD3WuMSnZU8a5Z4NXTUTnPwVNqnB4",
  "key33": "2uq1qBS8zbzypVhiPk1EWGeJagx8EP4AHTFcLJBfff59ttfYh82Pey8KBktTCMqN3w8duXkHNs4FSR5HGaaK6FV6",
  "key34": "4XQMJwzz4XxnUL6kJkyjEcL2iGwo2gNDzTTNZ9fkaqQGcyiCXPVaTqz55Y8u4JLDQarw9CXRZA7gxncMr4o5fhTr",
  "key35": "Zcu4jsPVUBdy7CYC94VXmri9m136vmbzrjsT4jifixegCCJ766rgud3EaEazzdNDRwP1gY5crcSYmL3VL23XTsm",
  "key36": "eLtryw72YTAiBVDf8xRo91syZ4FYWaU2X2LQwZjtUfsJLBT5fjPaRrsUntgCURMBSKYrUx9Jd3GbixFUFViLdNZ",
  "key37": "UxLVRZWh9HbVCGh7RWdECzmZw2PSdJtKsZVc35CmCQTQ4ZfxTsZFqz9s11xzDpsrpFdYQjwjtt6G2pckfhLzJxy"
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
