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
    "4Y9BnBEhuRa1FjJHq7sCeXu9GJPbYyagQi2tHaYs94oFWYZbYkm2AMp4EMQpP5UgVmTZbaerUj9ZPTfiJLfkCmME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U1SS3Y1kJKkwenhmmxYiTfJZEoFf8VNTkXP5uxeUFgJrawcZniZTcmHDTXbQsfsEEnjk91cogCnuS4G5oePfUp1",
  "key1": "3KVVJU2Fa2fJtLnm75TBmWJEotxdGMtzuzTTk7b1JBdyDwCM3CazybPTNAy72HymkpLAQtcYu7vF228Kj3UdFLfr",
  "key2": "51zBjLS5aRvHEUABg87eMUvQ2HLh8bsrVBw2Hzqm8XmdKQJ6vxgtCHG3vT8rZJJjoZ62hoHUjE5VR7Yd53Toyixu",
  "key3": "2CxhMGpKZkXw472fNkgtCiyGcXgPj9fY7voLbPwemzZSnVTovQtGSZBb8rJymsnuN9cuP7LwXtnf8RCRAParKxZX",
  "key4": "4obtoZeT5wPwEbGJejbqJ5WY8r39vMHR4kS5eXDraTxGhETbDGfTqhest9URsxP9vJ52QVjR1yH91n8WLcXKbP2P",
  "key5": "4Cn1HvtjhYv4RYEwAQdaQeGGQZwqoGejG2TiZSZB4t6BrkwjVvd6pWXE1GAu6zKzCdE5kfVf5qMYfHUepZXDfDZ4",
  "key6": "3daenuibyA7tAuU8o744wmWsKHFhi43swgMxoMB39xcBYcMabqXrjQHsKCcp9XNAAQf2wnSrbmb9CP8w89bJjwxE",
  "key7": "55zMoLgYgdRgYXRAfK2w6A2AxXcaRFNQSUKeSpxo1wWfC2uzNKB75KTZZUKy396jVzRFwkTpJUMz92A6jCAsDVbh",
  "key8": "4BrTxqDxaQAa41K82TJSY7HGtyhgWBtdJPAXksBebZ2VWjDbpLMABLcmBdLzpnvmCH7nJGfJS5ZtoMPxECnsx44m",
  "key9": "3JRtKwGJ6qs3aiStGbHi5ZxwJEQGsRWLeMabwVF4CYWPreiXr5diFavkpneSgbeaGEVQEZ1dVUjRkcrc1SF6v7Tp",
  "key10": "SGoeyUggvBQhKYgzz2ZKmSF6eGdzdKxdTsFPEqQZuYANnfiiVJgdpzjv3eetLBbhnJ8fKp6YNPqV1faKpeKuRCT",
  "key11": "5wWpxrXfWsvCSRcRcMg6GNdqrW9DPdyZcNm2MD8jwUWPcDPYtpmNesB4CUReJ2M121pNFiVVy7vgyiHyyALmZpqJ",
  "key12": "4mJ3vuTZH7tWo2FCDjo8s4gfpvGhBrrY2X93mrRTrA6xWXiKu8hroPA3BivPDJGyGCaj8BS4sCPQpmzDgpD8qAHq",
  "key13": "2aL3h9sFLqiWKDpduRWeLPXGgMHE9SVYnmPdhuZziDVcAdna5QgsvPbiWj2jfhtanYbcGVi1aNStuyMiomL6VeFe",
  "key14": "5q9oa7PWh8FCaNkGnCosh71KAASnpGW6VMudsuHWYbN8MEZBzPkjRHaBs7Tv3Qy71NRV7aqw6GbHKh5YzdkNQFXF",
  "key15": "2r55UmRn2zJKH5hqEWxvEFhuoywqdAqWyyXRTJvwY5GxeUZZ9YP34ikjPPM2zEgJiNYAFaVPX9nrwif62vDeApWF",
  "key16": "2SsCaFH5bcSWfnqC5s6t9am2AZRaBS4C2NtEtFxQrqNuoesshHYw5rEVLm5b9VjKenbpNY1jFW9ZDBQh662ATTZL",
  "key17": "5HBjd87HhQo66N6rq5u77sBkdhJvxE4HsM2GsgKBaE4sWQoC1BwMqMz1eYcZWd3a9udz7LAy6RQ9w3KzSarSHuzT",
  "key18": "5yDx9VRsUXZdP5Uh3WxXDyAP4Vb8oQQqD52nu86iHSJY1s6YAfh5yVE2bczrF7EEdtkn53TKpHhdEuLJJcxKuuLN",
  "key19": "4ESkWccsV6jwrx5PbBGuTRryPX9g63bzZMbCxgtyhVemQa3XjTE7QuNQhCK89MHRooLW6a6wJggQtNixTYgVcMoE",
  "key20": "5wZyshTYeDbQpGZGfWuCZJKPpnuNTG15ehr1yuBTEYNdXYpW5Wkcy6jzPP3zsWd9GcD4Jz5iUKfr46WDasoZ4tgs",
  "key21": "4ZDqPMG5D3gZNWmSUYUwjha5ZHyNbV6nVr7LJpcjgqw7zQZxC5FcWeaLvwXUkqE1u2iUdRqe6HAV3W6QMmeDjhBW",
  "key22": "9MYsZ9xaBzNni3JFPohJHkLLmaDqjuzpqgFHe6WGs29u2ypSQQrbAbFzqPuqYoaa2oKLShqTRo2vUMovrxNvtLm",
  "key23": "4mm77P5MmL4zx7cDWn11QYvVvMwF99ZGHTJtjPM2EVNRk5C2LPiUbKR7389hEpJ4YTZGH32wuQ82vm7nwkXu5k7S",
  "key24": "4tcDkCDCK7Xu7wwD1PdHhHbPsjLh9QSb56yujBzS2GVx7MCghSYjfNJDvgnYUdmZgfqcxGpXXSP1RP6pJts5HzAr",
  "key25": "5gC4zcctbQGCcRy2Ujmz4oDpiHsgsAgG1ENSWz7RTVUpgShdC8k4vNzFcbAY9BRsqqGm8pQfK1PUvn86bBgXdD2v",
  "key26": "63JJu3Ze6cPHQtTTMgzrzEee43LQT1QwhSK5759WKbB5ouM4MGwSC95DJ5zeAjMMwt3kfaSkm4Xirf4njVvkVkDo",
  "key27": "4FbdCRQ6jvLGU3dVxbtcBxzu9UVDTjs6W4jw97scFVGEFmQqivD3xd7GSRc6U3B7tcHCFfePKTFpBkPvG6B7maV9",
  "key28": "3RoF7qp8Y9t2zr97RPi18kTYpcx3qmn29A7eWPJMVqL9qykUwT9aYLbTDniMYbR5JzBJGTYvpab7qCZAULwRgDAU",
  "key29": "9G673bgJk6Vgxd3nfZ1xQuoh458zWN61NZVjuAF8ed1tJP4HPRh3QCbPVM9Bk6yJP47a4GdD1fVoMkGsfy4jNS2",
  "key30": "4tmFtiS9ZRLr8TaDVV8cTeoY9xoHDjv8xzmJnUBdFMNB9pkqC12DYpLUHNATC5VtvRiagUP3KiaT1wDw4BHcsNnR",
  "key31": "5fyRryZisTcLvAdkEV5RTVwKF2nVXezrx47GN65W7KXBaiRFaCQc5Deu5Tx43PPMYM2YhorKwQxHZWSmztG6kjCE",
  "key32": "222QosF5y4T4VvzpF8dBXnog8hyx8aKvWMSqi6Xt8DFfcA9bvpuF3qy56aaxCGACQMHF8mcGUGa2ncG9k6iMjp3k"
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
