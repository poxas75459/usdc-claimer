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
    "53XQbjE8EMpitsDruuHWMencpzydYrVDm1khH1tvfMq9i6UN19uJRGy9LXCHDiUbuwswQ48WW5v2BUWWpS4mms25"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZCF3rnW3LwpbiG7Gh1Fcr7YXyTbNrymSzuVD1xerjTvQ6cVh1s5MFfaCnfvAjhv7UpMPYPJ4gm4fUQExisnN6Wg",
  "key1": "7izJPpMcUxypP3HCbrDaPBMuBny5vx5c1iuMUvkVh9rSJktcYcFwZECzyNBVisHb6dWYpusT75WDbAuaPi1R6EZ",
  "key2": "3R3QAYCxQKiXs2NjMZXFLmy7bZ2i1boK1c7ZLGYb8TF8DUGcmPfjaodLrvSB8vGK1qq6euWhYu9kCNeLouQDd7jX",
  "key3": "2vzTu5rU2JPGtAe8iyojuvd1xbPu6L5Vbmh3qxhVgs7P6GdKtQDw6DKAjwRXCaTEU55Lq36BpQPps2XJgtn8V3Gv",
  "key4": "5UefvBrqE9uFTBGrcWmmeutNH5uG84nsSSmDR7AVFUuBR1HBtjUABV5PodSSudXVPeicX3Yt8JpGGXrC1trRof9g",
  "key5": "4th2kNHdpKRqmkFRxoseX4N12P2UE2TGAeoVWzmT97LygQsyFVhgAdfQzyuisviaegNvZuYyMGjpzSeytks9Dn6n",
  "key6": "51S892EFBgW2XFgGvzd6X8Ax1VKMGZA9f8zupUcRs65FiB47YDNAcdJ8CgXcm7dDCLa11PeyLndF5nzVgqQ27ou5",
  "key7": "2Yxhp963Q3ohTnLJzzKN86D8oCoa9vWt6ZP6PyPYgMqcoQgyaU7wN6QxHEnssB1z2oS73qf2JHi24CJk9vqj6eu1",
  "key8": "V9me9jxempeGbVCa2b414To1tXZyfWyVF2rgPC2tyLQu3iHauD26BtKj1LjRCvCoPvfr38LQwmq9iN3RR2fvvrg",
  "key9": "4DNCVr5SnH7yQA3ThmzcaJA4DsYzjTPmbgvPVesFY6TTdrqb4oNzNHhd1kkvEwhSEtXCWRUEsDwT1FUL1sTH8Xe",
  "key10": "4sNLp2MsBxd4L5oiYxrHVZkQQnn8GnWSnd1toU5gwQ8C7AiuN4FJ9gwzDuiXmfExPvMgkbVf7Z5F1DipuFCCreSN",
  "key11": "2sUJRksrJusmX1rnATtBJrdANKWT5dwtGkynx3R2bpRPgxK3WTqn3kC9Nic9ZUvsbaTQHyHXHF9iyVwAWUWAfMcR",
  "key12": "5xzy25jxovXNnMGj6aoGwQ3ApJ68Esn4vTtC8P64rLbB7viEJeVDtv6FcK4SLifoTWEWX42Spxa3GLndDD8eTu9Q",
  "key13": "P2jfqa4kvYnPEdLZqpUB9kxW6y4iCwq73Qi9qj5XmigBXxhm5JHhSx4qeyahjCv2fRZsU4FXwUueFkYQhVsqWUy",
  "key14": "4fTECnLgFUPcKsLqN4Q1ALnBvsnijk2QnPCzSKSiuFT2yzmLxrHkhDH2CAH2sUf6k7yTy1hEquZEwnPVPPfKpBLN",
  "key15": "5yf7cLXzrT8rUSjGXXJKf2Dped3bbWvhpvvkuKxYNDrDi8gHHnNMRM2mhsSHAkAkGo3gYU4yY5cVNSY5jT1TdrJ8",
  "key16": "2CFKhUtdL4m5K2nGFrsB5hCR4EQL2ZxACNssnxjgDaqzSfhdaRAPp4DD3L4SM5jiqpBP2XFspDi7NAQwGwSdLqmw",
  "key17": "4iYhZ872JcMzowrXYgkfr2eCoLtJRxtqSWUAN7QsiCqmddAvGBWk3rBnVFLRb7RPC5myRn754jqsxpf62jPTwa3s",
  "key18": "3RzKyfQ3KnZWg8kTdxPgN6N3271sywffU4wcM3b3fwmLwrbaBzPmzBY96EaJKxFHvQjTk67j9qaKTD9ia7YHy6Ft",
  "key19": "thjTCuWoEvkKcvpzBsCEZ2gLTC5qpm3wrpFFHnVkGXMHBCNDkuhxBfW4Rhk54VSRFgc8ynaDh7zbv2ZU23qq4jv",
  "key20": "4ACXY3CbyKx5cZMCfxMaSCR1zJXsYfeMthHD8N2cRsod2m1hGCsHuA1GnR3TcZE1dhWFd2VwNMNvQq5ZmgnNzjPH",
  "key21": "f7zERs2FFRUdkCFP7L6wQDRGrkG437Xmk2oSdhCssJ5KBdt3XGWz6k2LdnuxtVDpEXC9mZBPb6XE6M6egXakKaH",
  "key22": "5SDm2wq6GBsMpNM6QZDNgcYx4enwNhxQbLoTWme4WWKuNkh4M5wPkb6r4LhfniVQFrkmXa7p5e4cxm55V468eGF5",
  "key23": "3Ai2x9CEaNikadQkLVcJk67W9RtxtNFChXrgPkiPLRv7PGtqrMNyWruLMYRfsXJVk2k95x1XwwdFELgsxN5N27x7",
  "key24": "ttKyfR1SjeNKpsR7xkAzFPMn2RJz9bk7CbVhvAVQ3tGkoU8QhAz5ahuq4NPD5FuKcw3sMU3qrabeaVW6swmJsSD",
  "key25": "5EQsz3XKgWz9HREhS84jTHdzvqL6jLsifM7Ub4S2fHo6QdKsZLWAcpY7CieHaABvowotRF4gXqyJvUbqKMs911T1",
  "key26": "52puoFNr78kkxM98xp4KGkTSNnP8WzhZ92NiQcLXrHLhrqTwjjbwRvPXD9Gkn44mkxi88BktSzfr7DjPvirVYjnk",
  "key27": "2ydVyupuCugNP4YQVbSPsnqFrwEJwJHmBCRxR3fMzyPyeZkmH1673TsmXkxGNkLSEcGxwcsPGozkXCyHeBfinwPY",
  "key28": "3kzZdQ1JsPANEnfgMVFzn3aXpScxV3GgSjZHrgFC31XJCpRpyUMrDER42FWa3LdzMT8BXB4Se8ebF8GBANZ46zzo",
  "key29": "53dP73f5DpeUjBCKmqCds87UJvLNhUFgizfWXd51zPAUdtXSW5t212BoZspgSLwf5RptTDk3qKiq5tcaL12uS43h",
  "key30": "5TbMnZ4bXUTQEMkEQZ8Ma5PADUe3d1zk8VsUtT4Sep7xTbo6dsaW7RBykAqdVRXNGiHTSLdmiir93JqWoDvuDRJT"
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
