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
    "5oHqfAApEuimk9P2cKXU2sCJDPPn2W69LgXAGTY7rfAzRSSiCdxE2jgN7EaknQtkLszBT7dZCA7aqZyJbwbC15CA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RAMuAf4qCE8GQpQJHwZobMgqFkkUAsH1msyDVZbe7Vas7hM9dXPjYDodKPTNVLgoC8zPinRtNfJToT5NkRCXp38",
  "key1": "4FkzgkjbHQTr5wyAufmGbzumvVDSNziTPN9q3tyQRRPBAbumRr9kERmde8dYdHeF2Z4GJUnj6w3gWfZNpbtkYvoQ",
  "key2": "1Piw6mX3K6oz8sGhXXJijc79Q7zaHuo9GYMcihjRetpKxFgbUnhCFxQru7cURF7ohAwi8wiNS9DPZgtAHQCNMaE",
  "key3": "5zDX7Zg3A9f8wZZzi87K9oNrR7iTQPhJbW48NqtQGeEoDT6n9MKdX3j12HJ5GUx2PpgkG4gbJZMnejBB7d3MXoCe",
  "key4": "2VhKSDg1g7pcYB4c4Dc2RQrNHtpE68GnEQk3jJsZpbPWFzDWVynVCgX8ZtgYrs6AmZzGoxWqtk7CHiS52jRHXeWo",
  "key5": "BWskFjN9SfJnVr15HzYZiwZqK5apwixabiw13Bh2x6vk2eTBrCBsbELUjUjZi9etAC6FFbD77LFfQ1YvYEVJBHz",
  "key6": "5C6gDTQk5sjH1GKuUNuXT5nJGeJuF3ta3REBcrYEvDBANU27vMcKVww7Lr7XmxznP5hkLrrCpspzcsfv6UMzc8ny",
  "key7": "5Dn1cXfYkAtFndXP3bsh7Zy2nb8YZRcA52L8NU3RvtacNd1V7PphyCN9CmBHnZT6EXSRYToZS4HujtqpgtHE3VJi",
  "key8": "2S4WxJLA4sqeigWyMbc6FATURGBrxDKXkKLh6AkxvZs6P4rHXRmhSYZoWB4vggRFGkrDe2jujTNeVhmPeXxfbvU5",
  "key9": "4V3qUbmrxGPNfgWoQtpAgudL7Vh3ys4Q1D9pfKuR7Afa3Wr1er2mGQGFBHiHeyBVzWPfdxZrUfSRwM5xt9JDQc8K",
  "key10": "5H1nhQvjCd2953MdUgmi94y7KASo4pr5Nee818sF7ehBW5MgCwE51NhCDGmnGhuHZMe4CSKPKXCUGNEz8N7d19nN",
  "key11": "5esY6uCW8s1awtMUsUKocTzYHLzRQ4NnGKMprusvjngv6cmftUD7w6Qr9bGxHYrUS35hnui1f1n1sNmwWKhPqVLq",
  "key12": "zomFy8RKqMctSY8vQgiu8SgBusEZzSwbTsTKv3TufUp4my1uM4MhKp7nne2nyTDRaW6RMSWrfWYuUcxxGQDQaNp",
  "key13": "2ZJ5bAj7RtofkYRHPHhb81RhE2dC3jS9FGaRtb1rn5S2oD7zNBu6CYFy31kgto5ANcuzxdYorZ1eSMD8L1zUBBpD",
  "key14": "42WMfpx8jzd9kMaVF5CsG7RzahgSPxVrF3SPiamcSS4htALPnYrPuDHinEVZxnYJNeupVp8odq4J66cAsbLJoo7L",
  "key15": "23bAvMnVNRwwqU4HwezPVDeiFy6YGy4eu2ExidofYaQFp668FxA9GYpWyy61UCATY9W3ZbKtoMYYyr5HX8cxiw88",
  "key16": "4u5coyfocfAcEJ7iatdytXqsyJAqG7KBwNMz3gZ8KQb2N8vUah6WxKCMPYZvYz2oSY3Mcm3kjhewnB1wYgqU5CR2",
  "key17": "267KKFJXXukH1qCRqaPJq84kyhxLnsBdUEFcP2QRvX6t33VunkccUTG9ph2UNwAhwM5Kbc41kGVEHvcBZNGsvRST",
  "key18": "3jk34DcMiUDxuCwUaN3D9isdMVgkPRqJDKYy5NdvjNr2dRN82NAJ6z1JVkVXhedC3dm87wXhgmcV8cQk5TJLaUyE",
  "key19": "4YXMtsS4VjfRL4oUTRK6S9XkVgNMtxfCWWEtw3Jg1afB2cN3LAbur2myXAeYxW3TNj7umMNPE7ddxVJaYJH3MBcJ",
  "key20": "2s9DnQbjyqFmghY7BiCM3LK398AzNvCmcf6XsLBT21HtgC2aXJXGkuZq4Nvje2kFbe96TeBJ546bHt8zqspiZ5Jy",
  "key21": "F8ocANvGyK4r3fyDXMTrQqEpdBg7s7y552cHRXqWRPNWHzo1MyqgXVx9oEBvE75B24vT6n14Hn5w23AeTph9z8j",
  "key22": "5aCaBgs943KmJSdPxo8wjARGS5mNr1N8Fcs3JYqbE3BiC8FuycbrtYMX95JGjTfKtZZJ6kf7dyZT6RsUAFXm6zCg",
  "key23": "59dT7Dav4EvkERJ4h8JswKmTjTKGo3ydNFKAHcrujZLjh1V4NW3VDN51tPMBQa2zt1knhpJMWLBpwBePV7kF9px8",
  "key24": "2QZK6VZUWM48kJmrDLP3Bg3KrsxeSsGfafLzF8VoGVfLQjbijXhHzGedZuJn4stcADtBjkKZUDNnYdUnB4zV32yF",
  "key25": "3Tv3nkwbbvoBVcRb5E5XTJiNLKhFwvqUnzQU9CcVmUPpCx3mo2PvwQYm6tMcht39h3fZAZcPhMF8uWufvNGqitrc"
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
