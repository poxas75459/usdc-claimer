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
    "24ZU5UYZaHUigDQxRFiCanMP8K1RwxNTYDoUwEzPcJZbkXrZywaTX3R4i86ETcrWrPxRoDde9wiTwgBiN6arp3tK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XfMpPK9rHpf5YDNBA4PAUbQLAGbHzzcvPeryHTFhctNUke4wP9tKmX5JiLDxz4SaDpDCktWLEsZzvkgRhU85SuY",
  "key1": "tXk92jXe6V63ueUSsnaZfrftvR8q9XnU4ffqKo3TM5N9ckJuvyyQoS2Gbufy5W1khkrawtbLhkc84RFrBTysUrM",
  "key2": "5Vi82x2xfcR5itjAjWQycpuxa6PEwvhAn9Amvbc2L95dR5h4QtXjiMBhcNZuVusGKReCUqKTDWmhVybqQcHdRi8Q",
  "key3": "5en4exa71MHe6oX9xGAPHhixeEqdd427DmBtZx1Dm65MgnBtx247vewqCXWUu2iCKVa68Bo7pmHoEHwd1qydNbii",
  "key4": "3KjoRmJ4SQSighJPsDPaoM5xGZ1XT75bKi8uVLaLBQYXPhCPLZBDhKLCGjLeGPPYAHhPyirVxLDNuYyckZ1H8cJm",
  "key5": "vPaAYsLw1ghc8o8hbzrpeKq5VcaFa9vgheGjQrMeYRMaBK5HqQB9u3MWBSdYEeTFKzpXC6Tav5qTqLgmT74q56w",
  "key6": "3BkswptTxf8da5BGTqZbUipmBoW1wtMGsNhUdP6JzBJdaktvJnpp2SayjCqGmfRcBMu5q8VcR5m2JZRxSiW4C7NU",
  "key7": "5YLMzUtnVQTqPJw7onvT4oqFhhUZQAmgar9xozKG7877aL68AYSu1A2eHNWNQuzktoZF5v231Hs4zFtCzad3hGci",
  "key8": "4DEHdrsyf4RoST3yg6JRUBiYDXG5fZ68gEVxW4Bg4FS3YHtx8wLCSmjpabaBPTqN9ob7oDa2wGE9FisxrnFdJrUQ",
  "key9": "4J2WZbmAN2uzjhx7ExETegsBRN5fx2zjxR36uMFdcwTEcGVUUtfNeB85fYiVq4cGjvtYA7PTfXCZ72NifTheW9Ky",
  "key10": "4JkvfsUC3BXKSQw4cdAKUJGpWuCaJbYYosNGqAi9wDBi7yDxELZBL2R7CupUmiTYX8vUbBhvgekBNSDeYYASZz9n",
  "key11": "5JiSeUd6URSTtb8qq5B7byUob7KfmwC9THr5XsTLqVSq5PaUGF9NUF1e79BMWkbCMLTyAz6x2smSJnMrs4Uw3Xhx",
  "key12": "37raHcaNzn5bMHkroegZZdLV4JjCQ1fZudr6XBTFx12gkHtb6vEzyX5HBGWTvzpNTgeVBcowzL7xCber3jBUWbf5",
  "key13": "2YSRP7dD4wixn54x6MC7gcXTiGWcq6HNEcV51xxTDh6uNdXoe8MaEgG9ysqmsoVTdH7t3x6Uq8mgZLn2u3GPMWpG",
  "key14": "5qWdTUx6hvW6KPT762W7yTx11Dx28aApamMaMSkXjdVoLuxEwtNpkyos8L1pnp3Wxfyt4DmrBuTyXR6PwZa9Ky9W",
  "key15": "3H1Gf59bT9XyULffnSUxPpACbrX6A5MR9DN3Aum7m5QiRQM4RPpUTaqVJMmxg6P9Nta9sSHHQtJDnhptFRtA3dZe",
  "key16": "2kPKvMuVZutHbQ476pkSUApipXbVDCNMtaQ1KsRfcutAHdFb31GW7zKjUxHwPBvuHyYnxAhXDh9vBhxicxomrRAQ",
  "key17": "2XzCjgwj6yNZY5fAtaDL7LoEjLNkywzhEzMkQNRLCynf542dCUvR8y4c8cKPvhKHfRXa89p4S2xvmLoDNoL5FoWj",
  "key18": "42mMR6gVorwvw76JQ6iG9EBGf86HyUTZdbpDbjvgp9F2mv2VhV4CFoiM7HZNxERBAqBkhyC4okKjs1rATznYceLi",
  "key19": "3oH5LebkL4BS8kYDTn4dN7t8eC7NEhaL5DtLdZ5xW2sKxGP6SwkrHB9riDKSUS6iV6hvmSZrfcvJMaZ5PyRLZFeQ",
  "key20": "28sDETgELBSpdsjaWo3tPapAmpU8hBaFtv6wL5UbjdFQ5gwnXQb5ANgYZFBy86DJLyopDyNYn3YMVjAKh2MJfuYy",
  "key21": "BYr7qUfCNMiE5PauCxNsstFdVoBhFNaf4qjrLkm7nN1qazYAVg7vdqCcu1Jg36o8S6zHoeeKqPsngDSx8usyFPQ",
  "key22": "2HpDajhUC3cNZYkhdEfp8MgbVQrABHPHxGJJanax3fBr7ut3gi2YEEoT2CPiqbZ1qYqsEMy9NaFY7VCSDs9pJeHE",
  "key23": "sE21HGa9ecJdyiyVzvyeuunVdHXbo27KTEAqZx6oYnyAo7TFiUTygKp1NESy8ep6cvFraBbNz1zYx4wk7QNPHkD",
  "key24": "2xBYMxw51j3TpWw78r5XNYKZ8JBm2bX98sANnXSL8R3EjKsUcYAHTYqsEp4mHxX1BKhc6iXiWEYTTy4yT2M1VXgq",
  "key25": "3ZSoQBfZA3SX2i4A9jWWtDAnu4WFhDKr821KWYGVCUDCNssi5rcJPJVA1J3PKgAvWGtUxCCAHkQMDaLCjw8gToqR",
  "key26": "eC5EtM2oBuZb5D6W1VNvv6Q1yx3ysfJXyn1MPF5L1BQ9kXY1AHG2dNbukEkKrTMZER4KWxyUqanWUCQAwf9hHPb",
  "key27": "FiAo5ABtExKHRMDHDgynWShbqFBWCj6eACimMkQusb43ANKCCwaesuq7BumtVqsQrJYREqSxqZg7uDQY6o98fG1",
  "key28": "5ZcdQbHveqRkY8EZxFR2tVuHNSRmSRYr9q9kW2b5mA4wyV5WHZTfeU7PadJcPNs735jPKUttpBJFL691am1zcq8D",
  "key29": "3KNnBVAxhQZE3VKCwtxtAW9xEGsucrH1JoVpP2d8idTxSXdMmA823jZrKS2zQ14sNeq9c6FrxxUHeJz3SFEGrPUh",
  "key30": "3gwrBGE9ZVYQyzYDWzNejbvS9CkNi2Mf7ZRiUaZZnHS9EMZUa94eGNF5V6ybKMreqU3K5rBGL4RG3SzSHu2RDhgS"
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
