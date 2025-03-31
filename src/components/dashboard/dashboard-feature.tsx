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
    "3UQeweVvkShDzhpqYKCyGrSTJWDDgPAHEkbwu3sHqgddM5iHxWaJJJK1JgQzERJCsgZ5mfjBuc5mofQmTQ7FQVKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nGNrcKsVzoMuzRuE6fAKbzB1gPjS8YdLSMGBX8YixhH7rZrUUUiMp51GKwCRKcKXhKyooPAFRHeWJW7vTromswm",
  "key1": "5UMonQGKRs9wN8r3Fchda2jxZMnUZUrQq2ubChdWfyyoLu7NeAQAvHj7mdyo8yqkQKzE4X1bzFVimM2i1bmafCM9",
  "key2": "4KjwPYWXQWdg11LpXgjKeorr82i5VtLS3yPSHwJzRJkRTP4rGCHMq98eTJ3WGZgV7vqkrJagovU6AMzvB5PjSko1",
  "key3": "5ELEJKg8UWfMwGbRoUutRDxzwtPSmt2ScemYSsaiTK5YQBsk24M1WisFSn4HGBBDLaCpkNSTWQRbiMkaTzkCuoSf",
  "key4": "2Q8SQ1vyfbjKbYRx56USUrkDgKRvh1xCAuYAtZp7115P8qie5i5ftawwxzncwoWPE1N9NvJV9GnS2MXwkNiHDDwc",
  "key5": "5F7drb8rmVnW7cKbSqScsG33QcSXbFmvnSj3hVa123tkezyG4GbbmSUaYgS2MtYuu4TxvHdrfthqC2W13Be3jhSC",
  "key6": "RGDGKYqdCuiYYRXpC9Vwya5vgfHCxtekcyY6mN8Vy1E7377skwa4w9hKUR4UArjJEfVgo4BNQzQZUtxeUCuHgLR",
  "key7": "5C3ogYmcwgoJQ9P2w5Xr7QeBXdjUgTbRbM1eNDWYog1ehZ8GFozcafaK9nzeSzREmu2YjkhfkHkji4U2QjT8xzDG",
  "key8": "5DpDrKYMpU4XhCUL2RcztKcADAkzLqETqESQxMbxwZgrUZHJMbYE4qC4327KV85qeEMGKFSPrJGkzmKAViFNVPbo",
  "key9": "4kKYKnc7EioSewsgvbmMYBRDCqVj9gLQ292vNWtVP9CEzY5xgZo8X9ok7ftt3JXnJZC9wTqZdxHd9j8EydDvpfoG",
  "key10": "2UN5Mb537guNqSLjFqQ67g6SQnx8rrGNaELRMmRaA6XEayvfz8NeqR859ZTsvr9vD2LGFS3xba9EQ3x6f3e5zZwp",
  "key11": "5BLDP5ysaedAxP7B73pA5wtCrvJAvcJjFkCz6S6BhwxYN2nqcM8pnnK9Ksv3U2nx17NhJNFDHrEoyqejT7TE587s",
  "key12": "sEVtUGY1fRFfW1dvXS4QM1AcvDw5Wcg2qpHRVemR9ssFeS2iP3aLUB1YC2emt8xrD47K5tHMcvRKZB8HmTDZwj3",
  "key13": "3SnZy6bkhG6AN6HeouxXRBDCziF4tHgnJapMhz6fhEURgRgNmbakQXjCeQae4Ksi4ajqujU2PrrFugdGKz2cRMpc",
  "key14": "4PuRskppCEvar1RADyT8gTNBLES9cPLftHuE6PFeKGQ9S5NpXMHf8XpMnPushR273RKcxTaXkNv5Zsn9pNSX1yYD",
  "key15": "3phvF4v4VeKLAizkkNuWWfwh4tbjhh4doRCv4dhYVyMJyK2qDMxNKxQcFyHgMivnqWkacBa6uaLRJEi7x2DXkW9f",
  "key16": "4c9MU3bhH794zohfhFRzWrLXD49KyyzHWZ2QRsmcZN19mVA1wp58aQC1LzZi9SEdu9L5ZEPR42eQ7tu5Pdh5NYPB",
  "key17": "66siDaTT6XoU7oQ92k2DJ2YgdXXvDMQ7XNAFfCbPfNMG8CyX9RUA5VgapJiCxyABNL6wH9vDKpSEhNC8c6gfAq4L",
  "key18": "24pLttfJ7Lvz5mCVHqjHEEVSSY8yFqTimFM1Qg4rJ9vPz6j1MmT5F6FiBtPHP32NaqiaSdUY4LczRhXuHqSPxZRo",
  "key19": "51ky8yLRUpmwG5NU75auLT4b5yqGnxgsS6GnLWWvUVfBMP7p1YwN6KVsffAPSmcdLUWaHi6pjNp4BmxaQkFED79M",
  "key20": "4tbq69yhcoVXCDVoWoPLiVHEoAzLLmrizEzL54xJgYDxPzWjJLfofs2MX4UPHCoB8hVaFRw3TTjzJCErAvEPH71K",
  "key21": "5HoFQtLnLQM6XMm2rmFj8EyyECtj1GDPToaKiCv2kALMVk8V5PEhYwyNhcafojKUBouf66EAcyUXo6VsQoM19NY5",
  "key22": "3hZyW3vdXVvhcBuPUaFJrJJAUBjqjk8BkNYbyNwfvPRaZSgFUe1BZesXTWiedLcpHpYCq42tptCqCWaSmmjWBTZx",
  "key23": "2Mb7oKwEG8kZRYiE818dAEUkWZrJi1eMK88k5zhWHDbfwhuRhe1LphyxxmWiUrmgoS81bUu1Lt6Z7GbeVadhqbBQ",
  "key24": "2wpcKZrLvfastCYDWJ6NPXSZsHb8WhDBafh8rH8R8PUQqh3gKWfQvoMUida1YCDc2B5xS6HvyxaND56yRczRv9rb",
  "key25": "5ntbrnAJvpuc1YhmyoxHF1BJuv1EDgoruMCTbTZDxwiFmMkGWrMu6zkYWG8Qk1KDFoxzPP4NxGeuESHq7ga2mg49"
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
