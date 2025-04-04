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
    "2kq8LniEMcW6LeNDZi8EmLoP7K2VK4igqvR9USjpJTMgXifAdQRPdvDhmUkEtukWpaMBYCLR6z1Ajh96XBtr3vif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h9swc3mat27DuUJv4zohoUcPCww8YYUgB8e3uJ4LN2aEw5PwWNB3JzuMq7Sbx6qn5W3NNBu5NiWBNX1ChoN9ciw",
  "key1": "3LyTN6RNWSkNKgYFZMXoJcmEzT7fsCk6QnH8fo8gv6HBHEW7PcTZpiJmXqv3vqMds7TrRpDdEmD8cpKQ6WQ7Ajcn",
  "key2": "54yfkrH9kkWRBX3uRduPXp8aqcuVKwUpa3LeT1H3ukxX35kq97iAcnno7vt5USjWRoVhVeG4tjyhwuDvGWQKAkcJ",
  "key3": "3jQPPMydnB5NcPUt4A4a9RuzrDw44nwwi2AtaYV2EUmMg8m1n6q9Ts9o5m9mTSmy2M81uhXav1SKoNscTNkGEtin",
  "key4": "5DEtd7BqZ9BBSMjpBFqUHTDENXgTzWiuQ4DY9V2xfHuFYtA8Ph6WVeNfB1LuaareVYEUBBmY641ksoMcLZzLR9AG",
  "key5": "2M6ha9RS1PkfrLLtmdexDJg2bwDmFEWm8UripVDjcKpsDs1385SJfADVePLNGVSjvsJHBvo4eAroTwGYrrhWs3iT",
  "key6": "3hkAsKvJvuUBcsBnwTFXHQXEmwPygfcWCWtBHK4a5S8pLew8EJ7UGLMaqJ5WJiKS82wZJCTtHupDYRRLWj9tLDov",
  "key7": "5SHsX9vU5qkSDwiQ3VpY3XcKAAvUe2hXfhGMK2D1wD1imcMTm9pMuzHEVyzs3VkkVjJiTN8d58om3FyrC3tFG8go",
  "key8": "4NxxspLnUHTF17KGcYiQmQENqKSSNjpg4Ce2LiP9DDjfjH5T66Jp1X68MnCN5V5oQNAnQY855WugFmtC46uzL9iU",
  "key9": "3B7CQdbjJEMhF5sbkovtRHVGB5nX8ML36mqDuEkq4dGpRtbRHqCxfVf1YqEeaCKJgR86SF98PDV2WgQQVkhJ18PQ",
  "key10": "5YgwsQdoH3bLNa92g2QntYscfe4eCK9u3kjtab4Br9etMdjUnvphsWRrc2sS3vYBx2fCptvL7wvYLmNW2vQZwnsw",
  "key11": "5cgmpkUnBaY4ZxoekBiAjU5DXbibpVKmWro8Hj41hZjKB3AMjAWJ4u3VorfvBMQJHAkpoocjVSzj37dpW2QYMBsa",
  "key12": "XWcxwD7upYrXspMfV76QbJcLftg9oNzBtFVD8VTWn2TtDMofkjhFaAP5uocsoCjExnrcqSWAd9R38V8EbP9s6z1",
  "key13": "2qHaMYYY8MVM9hVNrdgDopsxNVHXJPfAhaGLqtqj6GnqEKVGFVgbuY5mudg6nfdKarp3x28BbfxaNeUbGnhkeGTh",
  "key14": "5AVU3ZcE6wLUyoLXMXCyze8oxnNiuhuRB4qFNhLnjaGdXSZmRcsP5KRfXHnrV6D6LBw9JKPfYP4iEMxD6T6JUWjh",
  "key15": "66YZEtodCDq4ecC1pyQ594NBjf9m1hs7oxirHfMC8nNJqs5QDzRC4AUGy1kgNeqkrwpDeQREVLkcCSjojVwUn6hG",
  "key16": "5zpVU2zgTwDMTCAtnPzwhnVMRHdePAAug2pfJSAUHkiokj4dJ4F8AaFgP82c9Btz7Tz7bHE8euLhQd9wa2wDkVPp",
  "key17": "5NtiQ5ufnu6Na16eojGL3kkCJnLimgMjrxmX9Gt8j3JA1EFECm36fuuAGe1BwMgMbKtCK8YcU9Jq4XTC4sdRUAUM",
  "key18": "4xZ9iX6TePBjY7ijdjA2kBNe6pnY2xEAVkQhp2Y4wrRr7ka6NY1efdCqrVfHLFEDFZiMUZEYc88iu3LtwAr8ByXP",
  "key19": "5dtLNJX4JkfBKfbJbpu4vw6H9GkWy6ZZwSqCLrLQDo7WnRhuakZYQuywaQzALGpiTxaSS7EHgMjY7VcqwRWSatud",
  "key20": "4LMVjLGYDqXpunvG7gYvFQytJe9zQNqLhKScTZAm4tyz1DHEff1uQDzb3THgzdMj4HNoUHwSTP76UB6XfQMikYqe",
  "key21": "5jv2HfJteZMK5iFteZHAmPTK5r9tDmCgmzXFxtoECL2ea6WdDR2rp1fbWLR4mBsSvzKrqbkcsajvzwjUFvcAAxrW",
  "key22": "5nryfa84AKYFE6XrWoVzF3KPd8JUx2EzSwh8nMaHtv2KR39egSTjEfu4FxJyN2W2pzHeWRcggU4CDUtKx5iivtk8",
  "key23": "4W6k9oD9ixKUbssqCaX2B431tm6Nf2rNKJUMy7cjEKD6ZrJuS9LPWaJ86mPG1Lw3NAb39Bd4c9UBhdMgDXrLrzFA",
  "key24": "2EqYSPZFAfhsie98i5WETMCAwZCg3oi7L6cKnmfWmzAmCSdVbzGgvkDbh9dEnqr54fTHJGUFZfDckmrPJmHi5mDv",
  "key25": "4fKu2xNpfXz5rDfR5LuxRxAVz3BEdE5PtvcY81mqBTEfGfmQVVdZsvpQrMwLQBJrZm8hg4uJ8Vvi2wHTP216DwG3",
  "key26": "ybn4GQKtUSfgoNPDsUYPY2PhT4QRL6PFQVCw7QSV5mSTQyaRxbS2Lefa8DM7mZptHW3eG8EFrKioE6cTjSDmjub",
  "key27": "2cwjJiXU2suAWSn5VuBXvcEVKDn4ykLQ7LDkgS7WZp74z3LmKEucBoqrgrosHkS89Xc4wmhkLx3WopA1cK9y8Xwu",
  "key28": "26TXiqwSjqoGKAS8hNRvXumaJQpScM2GiRwqUkex8EbHkRjBmgSVzn2emhoEAYqQhqQBYwSWSwKB3hjDU3C7Fksm",
  "key29": "2LzZ8b7JUadiz2xr4Sdo1TpXWarFGiPha6kKRFgusYSRKNfCXu5a5Nbsq6khLM8Tzy3g9VRxiNk1Q4m5MAUy676q",
  "key30": "3D6i5AhTqECUEChougGe5WkYKikdXP6mtns4i97eStpsHEwKUxmAK8puZS5JKGhxBszJx5Jj7vnexriLVfwrQBf2",
  "key31": "rZYTUavaDa28hr71K49cdreyC45nkTLhGebYu9R8Ai3b6GjjbfS4srsjxbHNZA99wgEkst7ZNXBMUaMU8qH6USy",
  "key32": "2Jog1SMLGw1pKAgwF4jakgYpcKvtz3c86TBRrifeNfCubGTReq9taHbLoecDycctBujXYCbtsAxdfBz7W9xf6hyH",
  "key33": "2y1VrUdyapWJbXFvmntzbTKgWPA8MaM3dN6WUPwyoQJuGoEHEL5rPxCmt93jx45bxH818jsqyLsFek2jAjesQufu",
  "key34": "1qAZVf38nNwWr3usgVMHphY71KVKqHh2jTFqdGhyv6ga18a3AyKzq9zhTehgGp98Ve7hCyr5BQBJicFBzv5C1tX",
  "key35": "2RaW2PzhPCBSvDZnuY65R1iJiTNT3GTzi6yE8pB92R5Jzpg6Ura2GWNfuB3anqq75C36GfYrrjJWA3Zo2HyHzwfp",
  "key36": "332agxatFqyVQyDLBXMZ9mTgZxFaorR4Em4bYRuC121UXfE2DVSvXiodCyaW9wCXKHNh1e8Een36Wes6wGrq3uSk",
  "key37": "3K4wnkdLx2Nommq54etdcsm8YARrp1hDr44hJpMY4chX3NuDezFU8NmYpLFWvmkM4jruKvZnLQcvzRFy58cB5ToN",
  "key38": "4K42C1hE4CveFknhiDU7kPSvJAqQ2ToScAHmBLR3wYwCRjn5Z84EhQcw4JDdFhDg12DyGbo6tojA2T1tLV1HKUzs",
  "key39": "5uVyAkVx6ZoU9EvS6MdvhBSuyqtyDXDxB3XuueqZpreA2aSFqDuKVqv4pXQPFZznsdrgibyDUk8pYVRB35uiHAZW",
  "key40": "4G1YtRYFftyfkCLjeSJDws3rdefpHP7UNfkw91k1hjWg4S344gKwTuW2WrCwEDXzwEYHC716Nk2H8UedzkJ7NGzN",
  "key41": "3i51hKFjfzKmUqCmjFk7ESCWXQBKY8efTyKyBWZaazRPYLuURBRb9yEhNFzV13pHxPetBUvMVUF6wsStuWy1hEYF"
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
