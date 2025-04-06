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
    "5zfV91yvED2wnY55hpkRrBo6b6SHBKVKEM5cgbNgB7E68yDmjofCwyxg8CrejLmsisKko8PM9pE3mNQSszoUkNxc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37CHUe1XzFwybPVCFUww1WBd8TV9RvJKaCWFnwReGqtbjXHzAphSxHgKGDfz2zk52SrZZAWky3yUyUZLK38rr7ef",
  "key1": "5c4a2aoQrC8tPeNjvz5q1wJdV7DiNcofGnV6QKTxtDG7LMWcpaTNCES3HTbxFQLkcMC6v1Q43fa7yqE89AMVQPkw",
  "key2": "3PixG6DJADaebaL5qS4zVUxj3JST28Q3hhSr5sXmiQcnGLwANWAmjYwMGhx352tzUqr1jtKCZAVyCsV7wJsGPcG7",
  "key3": "5G1hU4vKHps3mxbpCiBhg4uJi6HHFyWpgi8HcfidgGq7im2ZAVouhQCaapqqFa8HKCi1vKkfqHAKcT7B7xHGoE48",
  "key4": "cnSPoDmYGhVECgZX886DQarxX6KkjdygThMeoexsSV9CJkF7rMPowa45nenrSPVgLHz5jFw1jS9Co26PNUFoYpB",
  "key5": "27Y4kHhNGb2vuzSLtT67V7jLC7YESnvc36gDNEkYrE8ARXLPoMEG2rLmDdAAmWqKRXqWV7jkQMPps1Sxhf6SexBB",
  "key6": "Xggb8BgK8zxDCBsnwxbrKsHVsNrS8BSrQBteB35rsMQyr7aC2u8pUvsRfz5Ny8EJ6NLZdxCN99o1ULd7eTaXTSC",
  "key7": "5mnVPv2PHb9ggUaTWcnBFGtE6FSpfjeyNnaH22kPREqR9hdU7jPrnHhnYBgkTJ6PqzGULLpBR8RnwpcgCf5B74sz",
  "key8": "5DNxqLMnJC6gbHhsFvEvhkU2zbV62vA9u4N9pxA2piSxBNXfHHxDcFsL1GGpFTsTmRTmD7WSumQSkiwgjnJYP7MU",
  "key9": "5egSson3ABnbtxutN95rNF4VGXjcBHPWTnnM7GufavEsVHZ7BPv3dqyXwePZZiD6Zp4sTcV5u2MW6xsr62wFSkwW",
  "key10": "3KN4aBvaZt35biDWuYYixvRSBB3ebXvqhTbcepnSk9218ZnY3mHvtZJgbdQVNpZKD6ZaHCLLsaV18fdao6JSfsrw",
  "key11": "4wyAvtwH3oBw8rUoL7j4peudoE43F4iXMwMh4KYCsPHsR9MCzC9uoPNo9yktQJsqV38qZqDMtwPKkdTmcqxvgCmG",
  "key12": "3cijbqWimrwubjy7xFstiXv2nPzUUwAMy536siT3ttQ41rzASRjfohbnA7vKXHQBeXVbsVEMV1dX3rmdD9A458Qc",
  "key13": "3kNDDr5BZKErnUfXrrmgT3PeSxNQm4w7SBYMc9ktNYvaY5Qsf2GhLfk6WXUQNvjQfWp3cD5rtwEprQp3adHrSGfA",
  "key14": "51mVM28ohH4m5A3YypRSEaeYRFmXjH5A11RmtYRiQSHD8dSuHwgkfXoB2ABzgsgKDn4oZdEB8aj6ncUWyi33kGQA",
  "key15": "32AZZM4uQy3ocRbR6GWuaKyiSsVEa48Jy3EV1RBKUx8TQ8TohakFt6Q4KTw1tZNoE5c53oXRbGRwu5y2NtBTL5f9",
  "key16": "h5LfzRJ1tAAdoHbp36ntxk3UozhF6zYioHRKfwd4KErFzdGPrHK1EALB4D3FwzeozJSFqc82BbntXPvYX1sf2tU",
  "key17": "4R2dVCws1bwjPAE3kpzwtAujbR2BHLD452gQ9X9oQi4b7L7kjNxwFgwqH4qQr5hoc3Sec5KdXG46sfvvYXaURuV",
  "key18": "5UAFr1BBJ4DpAuXnanw2M2id5UGL6Th6LoaBRhoJdiUSruqSnQXQ2HJXdvMrMZ3TepF9vFzKo9EthQoqyJw3azm5",
  "key19": "3UhNH1Gi6c9ukyPUwg8QX65K28o4u612G6LKu1enxg8isNbYwK9sKuXm8XpnWmy3PKv2zLxHVWRjkECzp2ev3uMC",
  "key20": "tS4xqYGcEpPPN7czgxgyrC4PtoKsKSWTJsmTU8JVxwHbq2fpHi4BsmbCRsaRmfGoaPdkR9QmrongZjSvWW9aXzy",
  "key21": "2n8JKzyGYxmnskdL2vxiREsqZxvSsQCoSXx3r38rBEvf58oDBgLRTPWhpp1LTaiZb1d5rUtRXrSEKbsA7XtXKNY6",
  "key22": "2s7GudYVD9x69wJWgBi1cyicGrSSK1y4mWf4AVSFnt1pCnVT9eq6s4wxQY31Hu1f1uM7R6PNMEobkrzSJCWCZqxo",
  "key23": "39J2yfV1VT4ozdJR9CcGPZ1V3mkfpVWfdEsebRunMgSUSywwDqbQqPSoMynr6Y68TabkKkgMJGi9hcCSqocuex8P",
  "key24": "oHDW2KTXf85BVjqcrd4VecUs6NCayptZh7T6VBPS8j3oGUdN9V8td8PJxWiL49J5H6FM94JT4SH2HPqcttKnbri",
  "key25": "5E4imVVLGN39a7bzBwBu4py14eps6maoK1CMBYQDYJpzNJ3f49DaioSC44NiP9UDwPx1gGwK3mvmhKC51LWegvzs",
  "key26": "2P9D23STjJHEj1jUSKA45uAoWMdMwBGT5cyDLKHHP2iJY3wke39AvkwtNW42ZNWxT2S2XsxnCXHsru3gxrS2UV57",
  "key27": "ksdLpoCR3mfPek7hiEDYrjSsCJPf7hE5yt9xqrVawWk53ZvquXYawskVjKbCUMatPyee75Z2tXnnziAktn8jMqJ",
  "key28": "26bCKKYzy4mXvQcaw12d2vZ36T8jkpxkrmeten6NhDiXhrT6HET14W17G2hVfbJq9XknYUwPB192pbWZJKUK9L6r",
  "key29": "55D3z44YkyqndN8D9dsse8hRgq51CHncVk487a2LdpZ78MmczFM9tFucpPECgC5UKFPgphnduxYoRu9gPcP5u5ZX",
  "key30": "2UibTKNZtYeuHL1V3ZB3uT968ERxWrAiJEGcKjfcymNgVvkPmzYtU5fFMMGQxvgqhF5H9RP7q4dDCwXm1VZ4Hs3w",
  "key31": "3Vb47QPz7KaaiaccTHTayiFwurD2UFZdv9unQWUaAgAsNAzitQ39oihvNb5gg7E7vJ3dggqXRZRTQzwMVGyhk4Q1",
  "key32": "GV1DdDfFt7WVknE6yZSDENLqwPs2aNuLgFhUMpcb4VGFqSjqZVr78CPVfAYgVFeqczT2LezeyrdA7ntu5SDZAK2",
  "key33": "2oeVnWyC1WizqwhTTQDr5PN5SeBzvijQc65oKTTtkP91EYW98jF3T4X99g4EkDnV5LeyW7os5higxWn5K6H3TgJc",
  "key34": "5H9SeZwwDb3YrmNYfMCnANmzdzmUBqgWe45kcn4TjTebUCfgTVPLQ9RmEW98E9cgpUTiKDCyDnXAjnsJBNSwJTVE"
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
