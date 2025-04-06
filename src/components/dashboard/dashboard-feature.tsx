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
    "4MocLzRcR9iSTxDz85T1PmHz5sqWXXaDdDyVoyy4udabTf1cbBiPecbg7AP5xzDLmWEuvEAfMs2UZWrUJ6xJWsSq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hBeSuqPaMDSbUCYVqKe76MweRukmCgmQfV5TjBKCRBTto8kFzumbG7gpQpuP6R5ig4TgEKPZ2H6d51uAigK9Jxt",
  "key1": "3gx5dRGTi2eb5MHYjm4guXqBPa5MGoDYwgYci7mvFSnEMTeXzVpKUcN9kSNDkF2n5UjwaL9BBGd2QvWr3bqqzjWz",
  "key2": "4dx12rNb2x2tw66STrR5bEifTjknBgnDfuRaX4CJBSGYAAgCWG9SZRx1hWSXfmwp7RadEWoU6nMTRXAtK5azUNst",
  "key3": "3XkLXuxdJjRowYLwWKWepSH9bWafmMyUGNUbh2o8N5rHpew4zRhCaJdJp72rk5a4ybhGF7i52JhyU485LNiqkLKA",
  "key4": "3HnNExqytnRcWTUoBxxMnuLtRsvvbJiDevFfB8PqdWA8uAk8Rb6djrWZ2K68aLt32BF18pNiyNYPVvpoYUYhPDth",
  "key5": "3hCSETgDe99zEoexPvdV2WsEZzZvAo9GeNQgoRkcXsnEVJxJqh9wWsPr2jpevEkbkXgd75FGkNh5LXrKevZ9EPov",
  "key6": "5rQpHNQQ4BsdSUoJDK4wepeMUZTZ1JQymbFJsTQHXSDh1B2tTiNt1vnJ9vePSBWHziAx5ZUp3U4SMgaRVaPT834X",
  "key7": "Yo2TnPuYwHqj4NMej9Zy6eoFiUAwjQyMzu8n3KaNeWTLGjjohf8DcREGtWxE6cEGkDj7SRyHeN9abDXaa4c6vxf",
  "key8": "3YtsW4x7z9yvdBbdqZNm2TA5rat5uMEnTXF12MA4kDUdUiLLx2zA5PfCyK8VzEwXVmGYDLBQnhv6gVFJ69gUFiRF",
  "key9": "5C6aqRJ8CG2Ddd9VTfQcQphmo5M5Dov4BbMvMXD9zcXVCYG3EAK18iC16DkFAYdWGUdycZSituyQygPfECR1EnjQ",
  "key10": "5bP6wLmD321XMV8qCsg7C2sRoJsahLdammGg6FHs8WoAVpKGEAhzuyBvHqbeHNAu84a1N4QU2sdCTjaXBfqfmsHx",
  "key11": "3pe1wJZKPsjBMNRyv3yRzaA9uxj2LS3UUrg25e8MR6SVd4XwALMJWZU6kzY4M8ZQkr8iBmdLNtEK51Ey6dqQJfCd",
  "key12": "4Kqp6sAz5YVhjRnPXU5s61QyuxGCZkH7uQRNWSQi8Mjftrf6M1am3AZpbnHaUZbV7GDpQLhPrzSu3VYLr29xKd2k",
  "key13": "n8hTHmG9j4Gm8WqSttY9ycfc9E4xhWhrhshi2zHSS1E5QEdJhSkK6TFSNQqD8pgZC2vSLbZd38Tn4gs5hXF1m2F",
  "key14": "3o8tDtfVBS4oXHriVFqJqAyjsq8hcJTaBE1HMWbwJVxj5j5XJvA1dgPuZGmhXVANjvP6aTTtHfCp4ym4toMZnLDb",
  "key15": "qUEu6wdWPiTnSFLioLQszExTkGrmFcgxTzLKTy6CPX1H8DXptL1cDKZSGRbjiVaVbV7SW7bbYHNQEwVU9i1EjpG",
  "key16": "2Vur2McMD4tUcoYHVfzqaWfezXms2KEw9D6xBGP8YtcVvAqX7cDaQGKDgJUAbDBXoH2gtC3rwdb2ANjUiEZtNWRq",
  "key17": "52hTFfgte3xGN9866JT4AatrAJmd5P18DD3aKykRCdWwvc1vFKXsHwNBdQrY8BrTzqTyrNrdWekx8XUYN15wpn5G",
  "key18": "32VpjSmdHLDziTpMhwdmX6nbuZCuQKceJ9Yq7dp6HcvdtVVJh4YNGpfgRkjzprj133VgR8aVWtJHVXVZYra5YZpi",
  "key19": "337vPGE6gwrbaUG6TErz2KYkMZREgc3FU76Jzz8JW981sL9cr4wkXhwgSvMMSSDNMRnxAE7KEqiBGevjxSryHhB2",
  "key20": "5SwuHRx1xXE9tjTcT34FWjxAMvDEgs1SszDZVRWYHDfYSTebFxssvmTP1ApZruRn3JscFZxbwgmXoaFP6mufs2WN",
  "key21": "3TBgcaUKCg2RU1FRGiZ2idGbaTJq7zRAVrmTqqCPefimuaBMLPVft4JaaBqE3U89P2828JQ9pYaWpumoy7mGaosP",
  "key22": "4rooEfiFbP54HN6hHX2PVRjScrA3PBaupjPoC4SzZ3o3gqXH4L7drL3hKTFDn7MZRYBrW9so2dugB6iBnUWLRG2e",
  "key23": "51CeJ4yYH5yptzj8h7sqQtu52bJbbbfbGA9CGSMk28eKEwKX6CQf5kAnqW2XHzdyksFvNZDgfwoqx59iPDUMXdyf",
  "key24": "2TkgL5wuafTy3ZKmMbai9XgvQxnAjULXPF5wpbVqmojK2DvkCzF5eBEQPDHcoP9S4nCyiE1UJjL2Vy434kie82eD",
  "key25": "5D8Si5fVka7bPMCCq7KS7MTTcFrt5VsgZBRVgWYVuK3ySShYbqDHdtf5RDrmh9d8VjwBzAkcibKyWXhSWsR1JgFt",
  "key26": "2CUUk9imFcbTxVG8B7x8h4A4H1azgjKqGjt9YZ4YmRqEuw9Up7941EPXUSee7Si2gYrKSSUsePL36zjxHGvLLPnc"
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
