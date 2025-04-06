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
    "3tmTVrjZJLQ38isA6vb3MKaFKbxTURcyoE2nRHpcYH86WhjtNoZS5m1TyBaMM3qQM6crEPSVnbES98t5696ZSn8e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Abenbv9irj5ouFwutjsxQb2CXqqbdFJaKbSWB3UZgxxAVMCwxLZ3Pj2ebyMJBFT4p7sNXM2v4LYi9n9q1NJ9SW",
  "key1": "AjqCUKMxYzfA4yagHUcaZY81bQi35snW3faXYpsNFQNQbdGbDShdi9htpahG5dFVHRFfMGBZCLH7PaDevx9PZs9",
  "key2": "4h1uRaaQ1sVGdbmzyi1WwAmy2M6CTkcoJLJBgJGomq5wbPRf4vHezsADbaz3ckCpupdtNzfFaZYYEFksnrqdyM9h",
  "key3": "2TZDPRoMuGC8JvYhvMqR5GoSu5dA7SarPzJDSEzmHNefThS2hdMNGM5ztptDSoqrEytmBupQmMegHHTLdHuZ4QNN",
  "key4": "3mP18Mp9SawnVztQdm2jFYeWHNZMKip7LrJ4X8uwSxoc4BJf1ocsb293ubP27vAUMoCvSWHqKHATtmJZhJ2pXtxS",
  "key5": "4A9sCcE11XBJJfFfb6d8cpicP8924XV9Dj4K9mimgSHxvVzfLfVbYMinGGVP4Pdui7iKW8bDtGYxCH8kkhRaag6n",
  "key6": "3s9HguPU7Kt7ftottnoq8xmwkkpAmWgCor5n8sk9bgKVDjRMuq1n1nDqhgSffb4XBNRa5ucMJPduyN3PLhAeuigZ",
  "key7": "4RuDpW1w8Dg5qgJPcu6HugteARyDPLPMquNzxpH8Y4tNsYBqZPCH9ZCqw8qygpG8QJC6Kt26ZWeahm72rGMd8bAT",
  "key8": "3iXSjNaT1dhrXncboxUdGcihgEkVrs188jLZjR2XXWibHtPDrhyxqpE11QLqrVBDoYnLkHzDFro4nibQLgKPeUNA",
  "key9": "2JC5j6Gb7XawfWx57eg7mFaB98bZQsS517Y42DDiaoHns6T14b6Nnkk9ynCRTHXWpFBZVv6mvZTugUe3Qd63Wkwk",
  "key10": "4MWH7UFhfDR24XYhLu88XMuL635gf4UcAGM3eBP2MbzntzdmHtA79GFuufs51jm74iw1L9KXJiyv9Ta9bMXtd5Yt",
  "key11": "tx8zEv6GB6oP1VcQFW28FV7HuNGPa7MpAP8BqRfUsiKtazoqZhrvyz12zUGAay9kNs6RZmgyg3A5tLKe912asXj",
  "key12": "5cWg1QiYjTAdZ5jnQjAwSQX3fbPFDHYTJ7Bf2LioU3bG9ZaM4vu5kFtCHMyKJrKfbDs2stqLmr5L4ZbwdS9v1A4o",
  "key13": "54RppYhhHBfxfpopLvRHxEXMRcti39upGRHSxevNwva4S9emapspYwDShj7mSkCB7W9tRxXhipaVfgycjxRdUkyy",
  "key14": "41WZ61tfbjkHjEmd9ivG27nLryL9kJbAHYZW5fKjcqSHEA79ec45gH1yf9MhL41t1VT5bJntcJHXmR29kaXKpe7D",
  "key15": "F4sRqYNVjv2EjNHxgti2ekKnD58uY2dr9J8w68xpUXbNH3Q7SjkMqkcNzVGKHJqgV9BFqperm7vUQo8kgG9yYQJ",
  "key16": "2326McSCRgzsMW8gLeRhNSdQAZimuBRP8d7DcxHZKRNZvitqv1rrpmBCBN336KiKiQVnN1XygSRdfZcr5Uryk9bb",
  "key17": "NATjGqJ3LJ62hDX4bdB2eLyE1RdNBXqZpy1Yg9cEM1no1u6fbmtrbpnMMbPGnYLWTU7rBZn5aGXoW69psBKNJiX",
  "key18": "5Gem8f6XL684J8p9jw8nwHSCsiBfxxEngZkfkmehXfgaxjXjwLgsovdfGnsKgBdXUCdW3yHy7sbv2MJRzpapb52H",
  "key19": "HDuprPVn9JLzpZXyMN9N8jXhAY5p7FbDZAeir9Z5y4MXMUVrLpFbqiUTFuXkXTgaJAQ9VvpCseqwAjj4VjVF2Mb",
  "key20": "5gF3hhrT95fRH7wPzK4kmJJ3GDuy4RPVWxpzvYRaq7hX3r7Xg8wkTkbX4o9SGyiNVUErvLTahfahG4qfU1EYCn3S",
  "key21": "5rEMifL9tCBrzqokbN6gySbKhDXGJ95nBgEGNa3eXCDXz5fHp3muhrZX4AHYhxRSLN8PgKhR2Yxa5BDeSur3inuG",
  "key22": "5pQ2pC3eyqdgaMo7AhQeVUfFXLd8RiJ7LwsVcxSGb4erahsU4tGJnYd87ms3rWaZtrdYHEgqcyknjz2D8LobMyi5",
  "key23": "5eeNctNHDExWvbH51StoLDGWNAndrQ4X4LiQsD3tNtWCDMvLwBeCoMxnYP7VMGiQtSLveRByAfxXXEVUJMmt2deh",
  "key24": "4fgak3FdPFkK4zjPBstPpU5sEMojdLkkcuHL2ggFqY1aGEG2Gou4vjr3VwP4euhVSAnM8SSTxkWjbnvAFo1wjcNQ",
  "key25": "5UQEDTVMwXmnoYxxT9YzM1KzARMivWKVxVKJANQ1w8PrqLYQcNgoMRLNhDwDaFxvE1htHCCgRBbwciq7qVY1fZGh",
  "key26": "3bPj21NmBCg9KNPwtktHd7H5R7MbTbsbMeTxeYvujF7Jpz4kpZVL34qcRosF3b5GwrEZ5tnsdoJ5QoJ8nd2ceEfW",
  "key27": "5EMJtnMceWipexQX6RZSej6MAjfDHVGi5FziHazvdjMjpwDyfhsKygeNJ3SjfDwN2ae4zN3wj2ay4RDv7j9HSQr3"
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
