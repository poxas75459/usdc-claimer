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
    "5h3hz8RYspLjvYsdT9LYRgxG2ZDaNuG4BQVmtFao3FhUdE4aTcziAP2kMq6FuziKqhQzMRn5eearPoRet2Lo61fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GpBDy7PCa2NumyizmJS9qQgyGKKaoJrZpWB1JWDqQ2njjhy6tomLhTyxqC1NhQoj7hRtMBKRHitGWNjUsP3qEZw",
  "key1": "2MCWpWm3FoxzehNeDiDTLLQBm6RtVfAjgprCJijWxfJuuucjtg2Jn9LSpLa74u37KPr76cFNrK4bAbakdGJtmjhz",
  "key2": "rzKQiJnTkhVexBfKgU7Dy1tvx2Vf64ASnag1ezFC9aX54kpM2jm5wnnLL4HLFfpnFAggMTkLrW5Too3bVGRuLUX",
  "key3": "2BKpMENekmuDr96Gq6saqJBtVFhhhJNK1nRKqSVwnyLM7iPTRZqqWpikYsLEkw4oQQz5DEbT3xe2AVyFJCKtu3ue",
  "key4": "2wRYRjWE8KGMTBuFfh5MVTpZHynd4TbsFZtsjHY7d25nU1Xyk4Nc4hiJBrAhLyrsCjuN4G7wCNFMNcfU3Bu1H9VU",
  "key5": "2ST3GrFgFVfsFqBkjEbRCaAmP6GbctiZzkq5ytAHXFjEp6JTyvih7nn8QD59T1dKhZNfREdg2DPR4sgRJnUnDJn6",
  "key6": "94262VhT6VUZFoVn6hDARDJyVtUYifFhCYo32Qw2pWzmxgzKmHHHe5aAkNGKQo3jxkTgJ6wkxZC2rfvnPEazgpi",
  "key7": "5R67X2YAQPvvWMDYJcRLuEGRjohRnjV4JdByWSiAvuB9P2veay61sLwACMzanQ2TgAV9RGdefaFggdLySjKQFhH8",
  "key8": "3ZMXLsBjsAS6VGPxT5PGhqXcJJ9BNeCqDc5MJgeg3H2vFghPurQSsiNWhUh7KxTSeuyjXLfR1wKp5GYVujtQnxwn",
  "key9": "5nf3tBDAsfLhWtP55By2rksY9RyBLQmSEcLjWmi3Dv1KSNJAX3CUeSBeMLwDrP1X3Ae5Xkr9AQRNN6pHhSw25XY4",
  "key10": "752MTLXg3rQobMaPD8m2VGtSCSFzsJM9TjdyXhkpJy2JzUwHK1yFP8hpUYS1eeWP8XDo2Pi5gPTku1JePQiV79q",
  "key11": "2KPnwvmmhoFqV7D1sd6Qdy7iHHtLuwemFvmNLTruc5T6oDzyN1jLuQKe6iuCA2Jr4k5756xotP2Upv3ZQzzDQCpo",
  "key12": "hM374No5cMn37qc94fVeLCU7cFpBjWwJsYwtzMZQxHdxUBhd2JVSSrKCrQeE5GPEtkoWL5H2J9gK6wNgCtwCXTg",
  "key13": "3aARymz2J6Uu3iW5pvDzhTwxc4AQ8C97ZHytShzGJzVLN9dduYtPnq64nHyL4mRqNQQfwK5AEhtkjg3zWKJusLNh",
  "key14": "4KiA3bBkm43sGNB78FtxXvjccpdf3zrg2958wEGazsb2ajnX9jNMt9knCR5zAzz8y5WdkJ8MZrboaiKkL4oaK9cs",
  "key15": "2weDVCqegyX6SYT92THEjuXiD2VbGQsNKipn8nuj7qufVpvz1HmhPBGjbEH5fdaym5EwztW5mm6oSminw2A23huu",
  "key16": "2BxYaxTjXQDws8RVqHg5EENnG1KYa5AksjwaQxwB5N5aoFBCfDZrwxJVKh2hDohbKwrGTKbrvhB7uxDKbiLtzdYZ",
  "key17": "2688Bfu9Po3yhD7qF97TaKWyjk1SGNvArRRqaSahcvPtkBQPjvcUJrGzNnvYnL8Eonzay6gipPsUu73wbvoFHpku",
  "key18": "4bxkkMztEPNdYMnsj9jBEVLzsgdwWHFV1BcmWD4oRsiTpv1APaLRj3PQqgT6oNjjKsesPqbWyZNvJbzaj5coQDjs",
  "key19": "53qnM69NWXZ2VUkRF9Q4i9npaivVv5qHzprUt5gxHeWLUcse9L62994QVR6KiiUUS192gVqxVsTGWsn6oxjcxDLy",
  "key20": "WLSAuNYCQz4ThJ1ZKMMjx75MtFJv812wDMVhVncBY74J19GYEw9qjBQzQPuGSQ7bMfWg3YUuxEWiLhzSb4bKahG",
  "key21": "4JpDC8UC4nmcpkGHDn2vAgZajeF57k5C43m3r1k6EYjhE5HJBQZUZGiNnLVq31W77M3zU6EcpC87gYyhtTK7no2s",
  "key22": "62Y239neFAsKtbPn6Z3DPEaKcWnW5itJ2JwLYxoCKXbDwFiQiVkXJYJpfwLLFTZb5V1vM1keWtcn32MSMfg4cHaK",
  "key23": "CTmTKocDKBGKFtBiSYXEZp311SWq6hisKcj8uZ2bYyJbxGtgbVpR5eWi5iPgyZQ9htrupXFSzfUNTeCyd5tQmWu",
  "key24": "xZN2yRqtoJ4VEPESMusMikjkMjywkjxA1fzoSKLSHgNTh9QwR8RuceVZPcSCRVnrTsGjNknFyfEUmG6NYKo251a",
  "key25": "5g2jAeGb21AijTJ3DAcxjtdVnLYjjkQ7wgfGow52iyDgoR3CnpHMrfAYnzSR9CbgRuWbzYEC1bKhLwuoHCiJxJfW"
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
