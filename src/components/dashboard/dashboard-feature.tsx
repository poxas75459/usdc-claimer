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
    "2ztfFXrrGKN5VdLNkyP1eTPS5rgZxzf6WNboSd3FFJzjGAsnW8iKD6vYZkUHXfytYA7XbQYnfCsX9e5nHMMgJTBS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UtmEYtsQdcZMzne8ZWgsEhrwcFJ7F6NBZBiWMAY65WcdsdcZQVjszMjY5qayddPJc6GQZNJiaHsmQjkFSvRNjq8",
  "key1": "3NdZj4CSJeU6WG7eqoRaN9dKYAgJAJS7Nprr1jZ8oMaq3yXoW5TSTa14aPcBminoYYAWzY7DNLv2zgMdJ9KvjHaB",
  "key2": "4h1RYhN7bpkn79eWwkUyYiSAosWTch8Fpywe3ws39JJ58jPaQcpFt8zoZRcstgVZrptzvwrSssfEQurKyL8S2wrE",
  "key3": "NL5mbKSUH2CHq6Q5APKt3SudkAwHXqkZ9W1RUAEkVz7etBiqGSRuBJRVkS4i25fbHpc43fVeAHH3p81M4cfB2Ei",
  "key4": "2FKgSyq8kH8HoPrEySoUp7WipxPLGMMt9A7aY5AzdguDAcBJejyetnRkypPvTUwUYfgmNVBKJysy2teogiyRP42a",
  "key5": "5LP774amdXWyoZZnyG5T8wtqqAZXLkXPcnJAujET25f3Lc6SC4bawVQm3HvspdgPGcdaA7vhK4rso46xR3gnKJEa",
  "key6": "5R54s989bNAXNgXBke5TShLaZ4SBufS939iyk6GwmVe8jrfBYMgtKunJDi8Pbd6DuiSzvdz9JJ4Dqu2JU6Ang5bf",
  "key7": "5Bu3AtrkSrqjs9sUd6xHykC4Qi1oqHDHBWBqMCkb451uq5qcUjpy2ToEyWdVbsJ2djWkhZ76xZXRiUVBbdYTpcQL",
  "key8": "2VLjXLCBZ1K4w4SGqSh2cn1QSx2wLPWzYeuYtDxiZUN3LTDrMu9nczMd6xdKS7FxnzzXg3Udup2KckcSa3kUtcHq",
  "key9": "HD9aowiEFyMMRyHh8xKtYGBnjtXcAqZeH3UZf7C9kJT4ifHHbS2QKqtUmtc98UvJEj4RHsv8pYfGHWcg1ixf34C",
  "key10": "3X6KJWuQ7iD6x7u9TQvrqEeX4owrUNdUUvz1GgB7YiBednm6tfx1ijqhCN3irWwKwTRrPo5EZXsozGfjrYCiBDgx",
  "key11": "4LCzzTjewrwa2dxfDRAaztiF1wEmFJtGPe89Z3iojANH33z78CnAc6JFK69i2gmKCbbvZVVdYMfFHa4Le4EcrMkV",
  "key12": "5D1SrMLkyJVUqKmTumWp8nYnu7Pf2aumpcnirwpuLaGbaC5U7zzt3Fkebwyw8zDgwX96cM3SnMiRCyv4PRja4PKb",
  "key13": "2E2nDby2gkUiNPmguE5NNz1DzPsK6AFxNk7FtgbxcdP3RCHmTxzFkEyekZMgbPAm7UM3Q8XQZnELBHVx33HesrFa",
  "key14": "3XxXy5mvPwCWj8oxsxpC7qhhwuPt1R8NWRFgjFfwxnR6ALcFXACi4PRPYwKrwBCTnPtQx1kpKoNsiEJjZyFqFVVm",
  "key15": "i1GBtyDpeTC9nyg7wRr3SMumMiARxEA4w2Us2tMVBg5rhrWMiborGLUQbhRR3LR9HAx7HCvHsraRS8PCiqYRvhH",
  "key16": "5bQD9xBodFoJhGfZX4Qpvv2mExsyqtzi1fcb9F4tD3GDodx569gqqkeNNnsXxieSFm9B77UKcqSsQDbkq3MJyqKd",
  "key17": "4vShrVWXxetsy9u1LBQvD6v3s43a5NoegyJ2qwpq7rwCqZJRkPXvVpCPiUwRHfToiuHt94yju5WaS1cHszeqkeN8",
  "key18": "3gFBgckRwxu4iLEMTKcrbB2SKZrs452A9bB5E9QqJwR6nsZVbMvbPWirA7HsNhBcb1uPV4ERzQWabSD1fuTPeuoy",
  "key19": "3bKYwSnqP2Dxw1CXM4VEz9BsL7dVsxMWY3p2L6iDxovMhh4tDKcM9YMuXWQ21znhxv9z583yDRmi6BhoeYFDucDU",
  "key20": "3YsVZLxwWojXwzyWTZw9pcLtP2kaqLZeJagsWYBWxzNWJa3S8fFy23sroW7WRQrdUN4HwX3xQwLnk5hKqYGJYMXu",
  "key21": "5zFJBTKnUnktmspVE4jT8CFsbyY4dMfx43pd6pL7gHPrVFavYmK8pMN2WEqGR6xUwvmgQAzYKr5mjHhptMSdxaUt",
  "key22": "64yaqQK8oS2ddYeMUggdM4jCtSGzGWurwbX1yifSqsNtc6AFdKwpEnDFCjHrGhUH4RiY7sA6mALC2rqZuQEgXY7A",
  "key23": "4wuv7Hv5XjW5rtn3CR48ohVrz3vva5HVxL3N9HRknNuad7Pyth3BTK5MGTsKH9aUFzxJ53ba72WXyUXfrcqYzaYJ",
  "key24": "5UUvixVjqQGqxjQmjNeEBtM3AL2PyDPjQwrSZJSZRRFg3wTfBwtDeJdhAJRDa6T8ird2oHxzkRHC3JFEddsKohfm",
  "key25": "3jTS6QZUSAogRUnVdg8brQdD6PN3hDGReDMxQkoyQy5mbCmVPMmB4rtrDFyzo3aT9kQ7HjtrukGJNtecruw45i2p",
  "key26": "4m4VtF6regFh8mRWtgqtVAmMCqPtdu82hW9QuEcXTpx4k3itaCxDhQNAMrdy5zKV559i3T7cjsPsQT47LXGZpNf1",
  "key27": "37KaFULa8wKvzCjFZAS2EU8HWtEHfbD5qthSr7e3BTSoFEDb3pkjDf4Xd2HzWksSgsNqm2VXXB9hD7teqycHdZAi"
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
