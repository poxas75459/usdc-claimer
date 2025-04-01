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
    "m7HB1gXbjZUguUAB4rf9jj7VAoLMYp7gY9cE56XwodVBN9oPJgaVU7b8dWdv9x13GGnx9UmL5oq2MkaThEgg5jL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fsVC1vL9oNc7EDPTp3QbL86RWzxNynR5atQFFPtKN8RuF7m48rPCjBvVD2EBAtjX4xCZTUJDYSvo61V4JLaawt2",
  "key1": "4cpZZSehi96Es5WdVxq2KxUjq31fXKQzhUZWwvTaxrsLpUbrXS6pytPAwpGXPgb3iPNhV9zPfd43jhpwbiqGsUBd",
  "key2": "5zRBaNS2VTFmFRnswYPJmaFGVSMr3tovadrYiZLiZyqJ1nHUfcfT4a5WpUrCKGvgHkCzHMqePDMmVs2xSd7SXTWU",
  "key3": "QhNL7uPm5hTMcTwMzLwhNx4iHbV8pKMqFd9Ey9GPSQKqXBGSYwzBJ5tWFqNNfck2L9q81rz1GANt4nQFTBoVhYB",
  "key4": "uLd2txkx3jMWMukJBg26H2gK2dmVvvRUonzUQtcqU3C6cCpgzE2pG5cZayDWTXohhEXmjC4Ta3Z7CcKGVrefhz9",
  "key5": "23HivWhPwptiwDZMZoH6TDKP3Y3kyK7umMZ5UdWAzKHmKkkYQPJ885EzMdzggjUnyCBzygFW5DttYNMFgyQ8ZcNZ",
  "key6": "3zzmiMm8GnpcpnkAPXYKBQH23TZUKt68HoJDsn5oPYVLuXsb7EfqLgqCyGAHYfdNuHimGug8oAXSQ42koVkR7w4G",
  "key7": "3CPoA37Kg7DFByn6ivUGfcBUuUt95EaqZ8bDxSTxrJAkFjxo7Mbp8yTPrwdrSrTcWeQL6gQ2Auzz1oN3RUSXTDdN",
  "key8": "3ew1h7ptWTezXRQdebDBqLxnsun3gYDv9D4aocAQLpQVjwSaruoNZ9wobaVUvuru8RqqYZKKZcK5uYZpDdKjoEkU",
  "key9": "5rANaFSFwUkPaGkpuUPFi7RYg5g7hPRXrW7i3x3N3LyUA1ksVBfrg2EqNqSxzan2HgSrA6HBJAfLS7kzNNBMbLVt",
  "key10": "5doL4dGAh5GBJFyYSiNQfTpAUbgJcnKrDEvsf849FG7kgQdiHr9joufnJrpNpUuCmND1AnfTn3HastkGieEodSBT",
  "key11": "4tZ94FmGy9koBP88ufdH2TnxHPZD5t6kDRSoeaapzcFJNK25vBZd4uX9xpxCTyMUSwJmmzg6QMtgKZVhH64ms9C",
  "key12": "vDMFmHLrfPiGsF9Y6CoTbdHhvBmasPrMperoZiYs8NNPLrip3rzQBf9iBRRWGw2ZyQjj9c5NqmqGGE99Y7pLBG8",
  "key13": "2Aj3PUn4498XAhb8KJ1tUUDxeGz2b63hF48m4TcpJ1ryuffWM6i6W3UZXPyEtYz8drgPTCYvCkK3d4Wpt5pu8iAG",
  "key14": "54dAH2kByg8s34AAqPqPLt3iRhkkVXWhMPx6Cz1eJrMEHoThbVJxNMR4dCEMDkpQdBm68kLZWs5xmNyPpVQDmtqb",
  "key15": "5ryyskDTpP6gbLpNnErbm9gmGtqucAseTKdfE2MLCfjLfmKsVaWDFyA9YqnUtBPobX5UYxhof3HHoDwxgVqfJFRT",
  "key16": "3bM9ojFW11HoTr64FoS7MTks3Xq1RFsLXGAKPw53HPjVLgBNmDFTUvsQELHL5ujQnpxuNqNKp1Se53hndLFTLYWB",
  "key17": "2cfUgBDv4pioGSeAU31BPuVFR3VGUejSuJQQLPF768BtR5nFPNcXh8ymnpMoRfxvn115n7By9porJorUkAJaWoCU",
  "key18": "2pXceDKQz197FPkAReg25ADFYQ5XbCunN8PWVykgc6cx5UrzTRH1Ai6GPg4WWtG27Vk28VhsaTgwNLJufvh2J1fK",
  "key19": "8KZBzaGy4U7Xt4fto5wrPuH3fu4n2b7p48QMAypMsxJJxW7xax4an3tvWU1NNr1LpjHuYZttwxehq1SEPt7Wek9",
  "key20": "3dJQGfYW74Tu1NiDE7Kh9ZMgfcKuT8eVweh1yUdEVJD87EPJTyHQt3sacF83L5xXuSnXMFgBUM7VTsf7nWzsJPYP",
  "key21": "5iicmtqG7v8KMVzUDGhBsZVJzgZBPkb3o5JbHnn1mds3YeKurKe2doATffrf7D3Y9SGe2eseC8DHKLNuiLALHMyw",
  "key22": "5XvA1fnSzVAumcirU2dw5SiRPCarjoFmYUMWv46LPJM3RZtZadKv5f6qK6yoMVBMc6kAeiQp8PaKnccbXjFupLoZ",
  "key23": "npRuTivehEehChLWFoKF327hGKbkvjdyVU3XSXwFccLrrTtiJMQVwFX52L18RvphCSdEyxD3SQGTfTwuk5H9UHL",
  "key24": "23SkftpBUnAHXDuD4uY9A2VvAqjAeM5pG8vV54w9wtyKSgLCZtDeWFBPcC86ufXPmU3udvCN1YzdeUZsijkahb41",
  "key25": "4ecXr92jUenfsJ8FwjzP41dwoZsxx9mP1Wuti12RedP8B1PvYnivRdDUUuMvSH6wtyFqFfSNcdFE8DXXYSFn2KXe"
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
