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
    "3QbruruL9cQwDhCadJw1MXXP2v3VHqXTmhpHpo2M6ZwD4bN9t67MxgzjwExf1e9ssSWdVHgQESLe9ZsSFQBker2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kq5Uqw3qnjw7DvfAcS48CVAP1ZWCPRYM9Ckgi8yo9rt3pHhpuG7FB3cHXs7oy1PWSiEzncNDXfB6ZspxWh6K9kk",
  "key1": "3pg9byxzU9zxaQsv8iyoGFZDccwtCf9UkLVLuDphbUmicrrLwPLADewsHdJDuX22KnytaaKmtt1m5ddEHczS8Qop",
  "key2": "y77Tu7HzMbP8YtAwPTijAgsJtR24Gts1W9ZN6CBiKAPQGe2dS1jdK6fzZfniV3efajhEsLHTPm4MR4i2Lr7qC2G",
  "key3": "uFXfU6CM4GjNK2ZKKSy56ZRnqnpbAbrKNLQEepVk4V3muskZkb3N492eG5e39jCTps3K4kFtZy96n84KjhY4Ydn",
  "key4": "2Sg93ii64Kamf2PXceh5Vmm5NH66kodz5vZVtUiLD8a2SyTgsWcgUCqeV3Nn9dTxmuMd8D7ZefEqu33KGAgzuGVi",
  "key5": "2d8NMBeo2knxbWtGQzPpAoGCFKftec21aTWL3U627yd5NcQpnuimfJMtQ5EDmETJabT9mVjs7mQgTzFQCU4Rks36",
  "key6": "2h8gyhHXX3w5HSjtjPo9EREQXf75672RvpprXnbXziXKL181VSfaxWvc4jCJre1tUip81cJwjYHBB1ZyGSHejZSu",
  "key7": "32vJy7jeAdnnqh8TXNcTJGYF21riv9fhMQ1BzTtTZYtXgxZLmfv9GmNW8KG3XDnFDDGegQvHrmF9SEZcSoBhmsqX",
  "key8": "3FXmgGzyGQKk8bWhVy3GVxa6nrUwMYKszTKDD5pBwWYZCmDktDGsR64dj2iK1TfeyugYmhxCXwpENe6PcjSvAiYe",
  "key9": "5Z7SLBq6x9ZwHtS5VmVgAWnvEr7kdGCVFjQqLAtcVv1PYFs2zArJ3gwZVfPFtfoce1V8BwjLGCeSNihp7cXg6qaN",
  "key10": "3ccWJ6aN8UVffSpGU1qPMnJbDJ2oMDXvKBUN2Cjvwjs4xVTmu762NWw9WQwjQk5KogyoKkMZc1sz6J2P61MZ2vBF",
  "key11": "2go82gGBKjgNN5easzDsjXNg2V86HKkTLgEqE7PAoVBnU2RC9qEWgt8kCz3bK87Jm9mmSMaznMeKs3jQPxmaz98r",
  "key12": "5S7QRpnoQwqdZVuGqQ4eCZ3UZPxfTu2A16huJqL2fdGzWg3LcUW2VpxixPXBXuAbL5xm9EAN5Q3yjZbsd9FXBc6h",
  "key13": "2kNtkaEH7QP3GUAP3u95yUh7xYtRv5xtk1NHBQjjeNLpnTaywBAAKs3ZVXsGHQvQbM3Zj3MKBjm1JyiVfUEb2EAp",
  "key14": "3dUh7EGdUZQHyNJBwhNZQqHKpsiSMwBSsgakpoFKmsnWRbLpk56cX8RgTqovakvfrCdLvbtB6GmhUTQxZraMrJXp",
  "key15": "59AYuFRpbttUxakTbVt5oZaJmXQCZtbTBERKXPDz2qrDQU4bPK7123MsNLRfSkUdHLDqj8VV5qugoEhWtW47C9jB",
  "key16": "2RQDbuRZfmG7qKaNK7TUuqawAMWdeonfe2CQ2W6jpfh3gpx1KHDtjsGuea6P6ugq35P2oafAHy6rETjCv9TLcLcC",
  "key17": "2U3sfwxJczj3YcypMiJqctsSSy2Zn2u3t7xki5AHhoGG4ri9RSiSiKTbUgs72SPbecaAfUuuyqi3eCqStYZC9QjT",
  "key18": "5H67Ww1nywo5tgxmirzBAdbe9bUGKCki55UQRtEc1qtoQEGFHhhkaioKM4WoNUYYRp5LECkaL6isYwV76tEo3U7m",
  "key19": "4n1r3gkgQ7AKPcjLN1iEAssX4kUhBQgqbvpaAQtP7KiWhkPnC58Dg2KLm5D5H8sTvjZBw6DqBcuPU1PEKxKsmd6w",
  "key20": "3G91yNhkDBnuBsoVWYdNup2PUZ5CVuVcQorB9pDwUjhTz9Z2CqwJ6xgmNfnUVQDbaCLcCTFWLgXAPJiEpgqcpi78",
  "key21": "4x2tpMxmTmv1Qqs6NGee6T5MJt5hdemymNVJdgtkt1o54FDX91PXUQu3zH4dfF77uHx4XZckwMknUCyyTZNVneqz",
  "key22": "5bC7EKTNiqNVA58orju7yJRcpotFeVyQJceLvseUg6gLMTQUVkemr2ZpSscFq8sPtfKMmkn8m8ctHfiBurDMZvMU",
  "key23": "4ApZB8ftGhaD9zG7Xtmbmykuyaeq1Nd1x9ypFQbHQeUvaUhP4ZKSUKMx9Naqac9Q4QK35pNCyjuLwCnRdRHAsjN3",
  "key24": "DN5gXhc7ELdWA6FqSa25LbXZMHu9WdJMByj3DC52aCLQfTaek9pXExaLoRJ2UzC4P6CHKbbVeBYFu9nP8PmsVxK",
  "key25": "5NPX2gsRwTxC5Lw48k1MyCcwFzUg3mb9seEm2Pt5NWYg5cB7ZmpBmX4VS4MFHiqNUJRZY1fpx6REt2Gq2RvAcVZT",
  "key26": "3ACVi1gheLviEcfXYfNujmNKMbDVq7G8UUFcVXqjwaMH7rRHDW9ymLSQ7NjJa3SgAJtpFbcMYo2mxCV4TqCnbCii",
  "key27": "5uokhkiqWoxH1aJH1HFqdu1roFc77VPitaryAGK6t6FssTFdWsVii5yoyXRnfBeFmzpmr86Gs9a1BBF8mG4EF2JA"
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
