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
    "5AEELxhPEKczuaJmgMq2VxTbrtfke1TKcqp4GUBashitFFjGWmKh5jNJuygMQaqpErpVMxXtSH7zvy8thVLatXzp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iAcZGx8BQKwByXRjfSKMotTwmmVjGZkZ9Kp8ujoZBz3yUkJH5Za6fsozqbDszjTfU26zoHGXmpSvicdyicGmXK9",
  "key1": "5kuT9DnVK8TrE4FQUmuqrVSRSYJY5hscPhJyCfGgxPtzfCTHGeaYr17bUQpGm2yBSBeoRQ8VUrf9Cdvh45BYFrkT",
  "key2": "4yLT3foCYmtdJT4m22RjJNvKAKiikg1rUot7Tm1TN3GoBmkJvc5HzXuYggHXAcm8yq3GWydwHQgW3J6WER69jqhS",
  "key3": "34oFvfyYiCurDc5d3BJmZ8RXWpJdiGPDyNYJWXJxe3vC4j1ey4Dkjsua8JPh6Y3DW24Djz3dzM3fUFnMNvtbstdX",
  "key4": "5fTn1BQLiqteShE5dTSbK8sqTt2xhcNh3ZHo3zqvZS9dHmt5i8mGB4y8U4C5oevxQmVMJXtjbEzWZmQ5CGFn5vaL",
  "key5": "2593r5YPdAi6HroMftuAkmh2kNocHYkGfg3reS8JB1xNVvb9QkmNc2AGEuocZKaYdB1RHChKtRFWNKfuEBBJFvdt",
  "key6": "mYNQYTip5nR5Nc2dxMFoNHncraydDHi2Szs94G2MVTJyE84cGZYhtgEhKdDexo5GFEi78Wxm4U8XbwqRdNCnepa",
  "key7": "CffWkk2hN6EhQTTHWkdvRSVMYYyyHfvmHMJ5FmeTa8TbbRq81s5MkhfW17zHusF35P5wN1p2TnWpjABc1f1TKks",
  "key8": "2FfUBeXLmwTLbTWTj8s3yZxruvJELbtW6e1FHtdUB2ADJiEDCzqoojBSEBHVLAU7J4VH3kyGiF6zZrF3C4Paymd3",
  "key9": "2FpRg8bKnXY4Fb5EhBgAxKWEkxpceebayfbtFnDx7fK5QDACuhQQJxU8G48G4Sqo8Sj8SQSsfMCGgCStB4RMwTBr",
  "key10": "4Vees9APYPKM3KVf3Z6ctgYGmEJiesZ1dU98rHdB13Qq5RrUiCESXM1Hb6iSiThexige46gz24nTziBA1rraq3VM",
  "key11": "4YZysM83kpY8vcVakrK2m2139Hc5ZPDbmXBuHxJzukYhbWWqzDwW9hxgUCHWCrTApFUMrwcyhLk8HAYZYUU3DTzq",
  "key12": "8SkaGb1WMtYisofxK3cqhva13vwc1ymE4r6QQutoGsipF51quEcD2Qsh8CTphXcubfYccDJHEWcQvxuoJiGwf2J",
  "key13": "37Wn4AEY1wn8ubMzkvnDVCgwHAuoKYo83NXnMSHeNcr7GL9CUMR9jEEzbeHHPmgpm3JzyPfn7ajXGp9ruUQYWgvP",
  "key14": "5sD7p4vaYajiDvgKPxunfgVXCN5dZWy2y8XLTN34jhohhMhYEQy7TQQW3kYMdNcgiXXb1ADdKam5XcjT3WLvu86G",
  "key15": "2QXCGh6xy8Bc3DhCYwTfotSjzrxC6XnyCg7EYQ1r7dJKhPu51kHSqVK3gUdoz1ZWQP75PmPFc2VAKLouNaw5CW7Z",
  "key16": "4UvccW3gyueASTYh8WfJEcEjktPZ3fQLtztMdbsWkcUdHKCqxw1RmyYzNzwj5oXMRRPZyHaT9dNbkcWUnzxdzVmZ",
  "key17": "5BjS9LQFHFBRUweieLhRgwGqixXQQ1nG2YZxhhFyY5RJDtYmiuZV2639HSJo18AE7r97crpvMdvoX9BNFhY1hn4V",
  "key18": "2ehYjPqHA6Q4n3iP49LyqEHf2CXz74EvtjeJhvSjKtiJQyTFTH8NoiN6ajGUoU7tYk5RzFGXEJvFAC6GHKPiTKDk",
  "key19": "tjSTTbLfMpdvwCpBca5mHKu4AXS9QYqQB5JAmb36qJY1WTcR8BTD9Y7drAEQxUAE2pYoF78AoLbUUF9isNWVhEn",
  "key20": "2ahXXUvBmQJFNe6vkYcVeDtBFrQhhwmykhGbaEnuoDdK9cJTnAVcZVxRnxh5fM3sbZP87FU1AagzHZFoCqv323GY",
  "key21": "653MZV356Ugw4E9BHJPWgZ4SAazBfk63DGtLvqkBu53xZCmobzWeGEgJ19J78foqUPX64ke7zgraEQViTCzpJTAS",
  "key22": "2VkYZauopm4u5u9NFrL8ZbZJ3wH6bFbcqtU8ByW5Y2Sr2Yd68KXXhCbDvJ9e9QmDffrQdW1UGCgKHKS1h9hQzKXp",
  "key23": "32nV5cPUEyc9upBVGDSKESCPGiub6UXLr9ZjqqkfcGvBZG7xwqEGkXvobz5CYP1QDDbMjB2whBSyr1MJtLPD7ifY",
  "key24": "2UgobRZCFCBy4SHf3HyXgU1UDLLMernWExrMx6orpHfzfN4peVBPgLwHZ3S261Q6C6CHFh9Bmv1nZTu4Lfxy4d5L",
  "key25": "3xY66ofccib1cpM5eienQ7rWWKiAXTACz9BncSSxC9BfcaKJ71rwKVkpNzwtS8Fq2BwpMpzKehRASeNcUkDoLmCi",
  "key26": "375wkKDjYwY7tzxQ9N2bitTKdoyTXvv5vAGekvvjtatYH5rW3P447PWxLx6NUR9akC7Nk1D6j4d8LDGL1RQ17K3Q",
  "key27": "2zRhwxtP44YVofLq3S92x94uSEx1bacbT3ed3h299EViF9YxoieopkNxjySRRc17MCqFqTzmd8T7XAggStJNShTf",
  "key28": "4oPQEPYwBPeJPcz86MqwmnFx5t6G9jJrrTmf9h4hepentWs6qYVadknmnNYoDUSBvo3ho7xdV1N5BKMCfYXViTom",
  "key29": "5TwXPynmM2KWTgKHPGNMXXZCb7a2kdNDGJLVFwJuZky4FDcDo6V75rfLzgLyRxEVcw4ycsAarErV2WTuc3Z2PiW1",
  "key30": "3jJJmTeAjRk2nFRbovz995YECJYebzAwKEXUJ4STfWMzuJa1jHVyZPSqEeP2FHxsJNbCen7gjds9gnFNHCfMttFh",
  "key31": "3FdKGUHfLMjQxRrN9Qr7spVKBHHDmmHd2uduRyktP2pnvTb1DQ9EXZQPMNxbAiTaWFqyn6owXxQf642h2Pz6GAe1",
  "key32": "2hsT7joBHNBYuMy8c7P5892neJ84mNa2t5JppsVJEAcxuBNg2xXUgsrqMqGmzPfMPGMEvnWRe85wxnNhCZknvBa7",
  "key33": "5qec9uo7pJboZn7myhP8AG4ptdQq81bQJXHUegpXqCo4B4yDYkKwxyJLewbffyADn3GuGGTRWtgD9F4Pt5678EF3",
  "key34": "28usxSJa6DYVzhrPyxx36jDKYPWGQHdcm77xg6St5RCXQTYK8cZfYgSGmZ3jFbUAXwp277kwP2ze8Xby7ye6WEud",
  "key35": "2XoYTQdzPhbDXU9MwVtuDMwTXkhfKTZVeBWY2eNF1fexjMmUu4EHSCKWMuk2xD1EMa6K1fsjeED9j1FGpijqWcZd",
  "key36": "3764ogyatwCGanrUa3nDiqP9aFNEcH7U9fukJiPBa7JsakfDUTpNxhGaDC4DKxbF8uG1q2okCQZLYruHUWqPXTZz",
  "key37": "4LDCKUxsXbNRB6Gm12XMB7VPdco71V4ziyGxki1jv2D7mLq3GHovBQc9c8GakgnEFURGz3ruZWsjxssLToV4fM1x",
  "key38": "5mf1qgdvp3BbPJsuRmBAXY9UL8Q4FFppggLe1EkgNhETDUaM7sfJMkRhJoycvhLy6DyHPz6bpmvPWB9P1hyV2QoV",
  "key39": "3UTmS5qqcBJWZMMVjaKyMqPFT68GU6a3nuLWFPn7cK7z1qUhWLtgEsgJvGRbJWkm5D1JE27GJ35VyjeCEmM33ZZ",
  "key40": "5MmsgqtBrqKXEsdGuxEhM5WjUunSsD9dsi5pYdAMErvLzVMHHmdNU5UCEYKPCKTXWaC1SKYEVVRnbKNcYdTWpg7r",
  "key41": "4s2dfE5HzTg7n9Qtc1KSNB6ERY8KHH7TrcQwqk6BsjrvVeyRh4dRwKJfjocUqBzPVCsmQCa9ciXaSq7F18g7av5b"
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
