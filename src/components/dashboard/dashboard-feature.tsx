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
    "26yyYLtWBbFZ8tBTYMhNdra7ng2TZgsNwtttQEVbBvsWhwkE6eUjpe95RWQoKzJknhPGaaFaVZgeKkUFXgfNdQj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L2vmtFSsqtXAmNbRVTtQHLBTqTUBCY59EiAYEinH9HSfB7m7jYRiZrZfikcKjkeGgvsZTMbv388gps2HKHFAyge",
  "key1": "4eeHi32r4R1qCMRjE5vRdPkzqtVnY9K1bYRjzjcWEdcnm3JvQir9aM58hLe6eRsuRH66MiZzndFy5dic7jVWHbWh",
  "key2": "haZjsiyre4cMTpuJDLnJctbDVzCqc2viVuYR3hmgUFrvZu1qBMFDRncznGSRzV6uhUBACCVrq4MzqUbhdjMrdAC",
  "key3": "2GzrtwURkhHxqDkDBt5qSE16t5R5bCLmPkdcvjRqjJVr3VC8UAMVp2UxtfC3c7ZWLgW1hC6BAqpBhaHzGHVmPM44",
  "key4": "51V4nR2wchPtmpzJEpEbc9Gkc6UVnVvtNgJWwA37daw6b1ejvni5idKrrhp6hcqBUDbMw94ZyyzaJ6ce7PFeBGBZ",
  "key5": "6juepSzuFNTFpf5x5MHQHqbCgy51Tg1kGLB4dv9EAydvEdYFGtsnDzekpg4ZdJs8FHwmzC8E1SHPkoWnZhYCMm6",
  "key6": "5CdD5LfsnK7eXEG6m67AmAWeQVfq2putcnm3bXci7Dz4YL64fjRSdJVcUNnKLckdMPZKvgJ9dirpj3rMT2g4Jzxu",
  "key7": "2eZ27rRNtFr3hSdLiDkgCSCNNgLAVSJZWuh4tqD1qYfcg3HCbFunrNsbGh1UsadtNsD3WB1dEv2L4ogXKjb8FLWV",
  "key8": "4XMchFJGunSLNfh9xDwkR9wRHYAvghApdGgMpUDdCajerHXZ8EP4LvhUSixC3CgwRECUpC79idB8Fk29nZqv73tr",
  "key9": "28a8nr714NonEwn1kYP37CDZ95eEgLLczwotSGoriXJnus8mkQs9CyLBFZQJGqUBgb5ZHZnnGPbS8h4u7J3j3sRS",
  "key10": "4x4teAo5D5AccGKC7g7ynWjKyRvFQpDYugiQC791Fb1syzwh9ZgQdUNVTGAJTWL2AQ28jgEnecDJYi2ctUWjRuzQ",
  "key11": "2b1hUtg5JTfeU6GMmppjYUhb8rkMkgtJYfXaLsScu38Uc8Ny5kvs6n1B9VSGkbFZneWD6hZe3bQ1Bpf54ykMLBiS",
  "key12": "2ERQFmLVDhVYtfbauBYMasYwmpqHiUV1oWR9jXqu2isrNWEEZC7VERk591L5KGPK6fqcM3awNf5QZaXwC42gkAXL",
  "key13": "45ZYz8B1DeVDscHV2xmR1JGsvFEWeYQvfFWfxm91uqQatt1DNzkFtLt1tHYEgeCZ5QVTc1r8PED8666KUVGZzvRV",
  "key14": "3Vb9GJs78XmZCJBNaNioCcMzp7kaHkVV1JtEGBTNMku3qhYamnS6HFG3DwXTKcrRXc7YaoPJV4cJYafMYZmPMobq",
  "key15": "VxKFzoNvwyYbC7Vk1TTRfxoPRBdHQ3s2bYCg8g5Lxf3G4acSz4JDfkY2kGcNVvPYwLQBKYxyjuqcKCXa1mdAbz8",
  "key16": "2Wxh1qiYpa1nN6fgCTnhTDy436FVuYyq8bWFHMrNyKPvKDhygBfmb2QSKLJwNXw1XG4XFRLi447T9R5KKBnumtZ5",
  "key17": "2VTpppRjNQU39GW15qMHkxew9KnWjAc4gmtTfhzkZv9geaoEEbT61HeVkkeKqXLuhoewER3tyLsDcwTUt6e1vWN8",
  "key18": "2u8kmnsRBBdWTK2DkZPgQC17jRXsuFnpw5rRh5ZUua3SfHh2pnhe3U3YJREHcbaLjkYurwacMenSXHfh5B7uYoWm",
  "key19": "3kKjX41GmtPKCMhaDfU8uXeDsZ8Ubr4WvCdEaBno5oZTSi8ZdqqQKJiv7dFt4nuDhLg9oyFPbaB6vv3qjBrT1HwM",
  "key20": "5Pb4MpoBMQbbMbqUbH72QgD7BagxdJUagsP8R8grYegud2qMmMtveNye56HL9en7yZzWR9xUnNdh5DoTBMqtSS53",
  "key21": "4AiL3gSRzgFkYvJvjUEhbnP6bHB8J8Ky6E94qB99xLVdnPyyqfEi6ZZ76nPS5fbygpMFzft4mHbdsVvuwWKLbvDo",
  "key22": "ckCDSFv8nt5DCVpwPYtCxMLVieyaTu8nTyH394gXQqcrUbR8tFbBfW5Z5VcgaRPSUedSjxr75MDk4kjV6t9S8HQ",
  "key23": "2Jwj4YihYntgeYnAo9CducC8nGYrta4b2pse8LNyj7zGkaX7VTDV76bGcMLZn3qVPywbCuyzZq5w7YAFQ1pY6RLF",
  "key24": "2UWVwNrXAU9mXDERbiyLGp5Ppj8X8rr8KRfZtRHQMScW5rkqAEV6Ju3LCtySRWeZFsoL7aVGNq1fy2mdK6eGkcAu",
  "key25": "24eab2G2SwKFhw4eHc1kWXzAw5h6VYgheLt9VY6emx8PbLv13Ux1y4M9zLZ6NGE2Qb36CJ73pdSzmgDEFQcZQDLZ",
  "key26": "34teXuNen4a531p2za5dQVPUM4wvAhdhXQ2HSLX1NwP1U73kdDYUpubEsvqHHaV882peWUCgyi2ijn1JZYNNBPXC",
  "key27": "4NuQquSXQ32pbJBLFg68jcGds3Gu4ryvXZxdbVbxGFvyTSaTWXZyaiwUVCMjmSJwdPpfhHkooDicYnQGpLGkZ6K4",
  "key28": "49gZtfG7vbLosmpFV3pnj5t2A7wC3twnqAF2CKayYSs9ShSUdYJ79GYg3AAuhFFgKbfyK48cPRd33Qs8fekwcbr",
  "key29": "2JynSrE8iiuFNSnZ6JrPZ6LEVauFi3TJ2z32MbZg2xV5uoj4yHjMzULSvEYWKNzzRGjvCaKtCk1hAfunkF1d1jUF",
  "key30": "31661ePF9efn9mMCBjxzvVezFVT6LVDvByFpDX2FgwjdcuT45cZoRexMktoX9HdqRzdwrGvj9THSZiuNd4FThScR",
  "key31": "2wB9yNnmxppZoewm2Voitap8sJxL5fwbfdqB53EicxoSCo4datf9v3quPvVz1JBrjuEDndAW6VEobm5yDxi2r2M",
  "key32": "3ofR1VpLJTGFRRYMd5rutT8mAEAVJdzj8tfmfiXTXP8KXE6eLcPB2QL3ptpnXssWukvXtMcy5Vns8Hk2SPA3Z21q",
  "key33": "2W3YwAN31JzM2G73dvZFRMnopzRoJnymQucaCGMinGduVjRUANyrY8Pw58sC2RrCfXr2BL777QJ9nMeBuRMgiwEA",
  "key34": "1GWpPdkwj2HScQ46Ywxu4NbL3MyGcDEtLLyKrBWeAgbW3oPsPWoaADYzrePuZBBauUgxYb9KUrpJz3B8BDDq7NM",
  "key35": "4kS5dqwsCTamF6LiJYuYzdX4PuJxHoSWr81fP9fVd7K9ATQ7DgywPESmtoGkGLA43SBsadKZ2m7KwwTaXxwMQzQw",
  "key36": "7VoFsTgZ4JVmyKFzoosRxjD3n27e6xGbfvhWq1bUH8ZM9pXPmo3xnh4A2jinpHqHEXGPLWoU6URQ9TaLAk6CYG3",
  "key37": "39YmSQvjgAUeKRdAewxuNo3GcfuMSTjsBzt9g4Y9Wq62MSAidMJLLSrd4J6RLBcdy6ZCJxGHJazFP2yZ4eGPym5L",
  "key38": "cw5AULY38dDgvs65wK1PLXfddTgRV3XCzqkPDcj4wBQHwzLLuA98iDR2KpyW2Ec9yJD1GegtR4QSkwRkxipcAkq",
  "key39": "4tWNVDC6CrgkJKbUJJ9Ym7r6gK9ZhtqwYRBP9XuXVEtzkX7Xxph3ie5AQeasTNAeRbnQipaSkYL1XS7emGWyLAqF",
  "key40": "2Mk5WVz5bzj3Kf1hiu3GhEKLoKhFhgBZTbJRv1sAxMVMx7CAZepCU9x7jGMPqHEc65eiVPmgnu1v6FzSeKKfgpfa"
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
