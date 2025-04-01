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
    "fVRT4XxBnFSjnMQFasUErjKiQrdzQzu8yuPo9ahLe9JcshuuHjMfpKMKep2GS8Q7zMddcbZsuaEHZnzZwb9LDW3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WjtSNhXcJPu4swUahaCcqmioCQ6fiw71EMGUYgVFhQqyu6K5ARkfdcTF35BEkqdENpfprT4hsTxZTA9AMbs1N2U",
  "key1": "2Bhf9Lk22rDD1c2TGpJuCACSrsse5GBkz3qaL7Wa4vJcNhcK9CMJgXA47wUXbhteH2vTEBaGvm4LzCzDXByhb3Zj",
  "key2": "32yVr3kfYbuGzbLqiunGzTwjpbcxLpkfBpkzqxhQ1sZkMHSRMTrX11ShWGPuuCE8W8m4ne7zDD4LEBvJP6VvSxtU",
  "key3": "3fYfDwK5RGwJX1qvCA5tsUt47xwxGZPJK1rT92ZUWJtPJx2ZjbJ3EFssZXCbz4isfrZhTHdsVAu2KMZFMoN3AWaZ",
  "key4": "5HQRo2TzvwXoLSdk79e9dkftJWPJJWicpZVm1AjbJyssBf2w7axLFatikTvFEntWVvyEnbXegNFsnwNYi7rugTpk",
  "key5": "2ZsVRTR6sBWZY4LgUMTnCCAxinQdJFT3zG9HUHRJmJnquxGruqYHhb6y4kZ3WNGj7rmA1aNdAPJYRYVjmnVLik64",
  "key6": "3BD7gxzAUCSrHv73HnL5m84xXtg68mRvAZqCkNGYEcYGhVi3ngfFzWb9p6G2iJXuTCxi98sUxfRz4ppcuFVayop4",
  "key7": "5TiXRGiJX2BLhLfdE1UjB6bdkFdMFGuh2WWRBJ4Sw1yPPx1j3rprbKWGbLwXFyFzdY3VksUiYgKSJWeqH6VT8Ygh",
  "key8": "1TzS8uPST64cdxEo4eaXBAsS1psCEzgvTNCTb7jpbJKbzCMf89C7MjwyBwAhMLx4NzCen9jJsXFKvCnvWLPJKrn",
  "key9": "fp5zmTFe76adT8yDCwJD1GGCKZXciTsSDBhNuXEg6xraXxh7FMBNDSUgTRotTHs5265nHHRNc3HVmr7Ci7w691v",
  "key10": "ScYXuCtMnkcBXi4ftJUpPJHT9Yw6pBzvvcUNHcmwM7tuWPRtxYWixMaBK5UVuiGGiYphTok52VGUPxMGySHnkah",
  "key11": "3wn7ki6uRyu3QigsuwNdHivjvpUjKYEbynSoAvB3b6UAtVmf6QtanQ5g5b2Puvq2hxqgKcj3PL8qb3o28ZagTSPR",
  "key12": "58h4uQVGrK886QPWcPZscnz5zkw5eS7NCUXpaYC7PNmVH9DrMeFUUEjZ5Tr3JDMj8Ce9aigB7VrQ5PZDvLZUDqPw",
  "key13": "5K8ZmYCduNjMxmEjb9FkGeUYEWEzwogLjjtEH3vUmBi9Q9HjzWMc9vNCV1nSPJDpz8g3VemKk6HLiKLmhMFPHijx",
  "key14": "5M87PLEiNzGLDcChLVd4Ja6maic97UTjMGcMu63cScahow1G5P2dmNzd9nugUfkhvFwLfEE8k3VHRfKc1YnAUFCH",
  "key15": "5pQR9vc4yeyFeCGaQNTDnLKLbkgpJjVUiLUXBPVob9VLQf3x71coeYVEUK61RamraqarC379TESrBJVu4nWmRhUa",
  "key16": "T3DiuxBJ2jRxKv1zkURtkLxoYGhVdobM7QXUXn5kmwXXAYfTWdZp8xRXhTseQAqEeY6ZoZrEkr2TAXSmJELCvk7",
  "key17": "5c2y7jPgmmAdxq9mRbW9NKZSXUBHpvEBv66oEzfcpjmpazuzHhRAa3FieUfkB4WKVW3CvE4XtKRrgoaGqFhXz71m",
  "key18": "ksnGmfAEvSk9bshFUw44edbtnPvNjisZkbqzAfe3Y9kC95DhyzFyy8SzKQ4HBYg3ZzCqTHhNDDgWytfUXzN1YCk",
  "key19": "4wpWWB42jmCcZEqDvimf5iEidKRRz13C6G2XUsQbUjUGHUz2x1YUb7wxBM38ksa3g3HYecMPvhi9LLXkYftzWDVh",
  "key20": "3vi6eWFUWyfjafbbfN5hn3MtbXdWcKYxeVYotw25fG9BaJ1XnhLevW1YW4LBSydrwVKNFdvhKe2EnPgdFUYVACox",
  "key21": "29uM4b6LKyhVRhD2xEmJtRWj7HRmh9vHPSzuJp7xySj4S9r12BqemKxCsxGxx8q9tt72ogyoSgkYtDgXyi5nEoyQ",
  "key22": "3QtsLRyenxAJd1yz29BL3FHy8EfcZgKZAcYNaTWYshm9GRKxLN3kLjn2C6Qo59PGGjYKGjAypFhQz5embKfngyNb",
  "key23": "63BBtk9ZeaXcDX89fEzSdAaRKmyda1Hss5oZ9ABGy35VTiGfBfzx3QGoPmfFJwZKBJGEPPEQakhoHErU5f9o2F2G",
  "key24": "2VbZJUtHgGF5WHYmrjFxHs62gPE5jZ6Nrap91kxXdTmYTus4st3vuFJCCJzuGs1p7J3rEq77De1FAwhp1ahZnLw5",
  "key25": "5NTZwzZxGQ1fYYT7MFVBe3SZ3JzjkpTLMEU6wqcNCjzvxxFT6dPwpQnZ2tB8A9Q3RPLpPK9TmQa3HgqotrruJnVg",
  "key26": "56tRZBSCVdpGugH2R5rsvvVURazfsicwT9p2Nu6eVh8A1rikQnD5u7vZARrqAwJFZuT66WEWEdM9VvrTJ2xzeA3b",
  "key27": "439idwbfeTMfx4sPJ79XDcCmiJVMb5MrS7mi75KU9YyPPKCNxjKNqpb9mp1pN44N83SyjPEndYUBkvfZErjMtcW2",
  "key28": "2xrpnNWSvbuBQbuPgv7455q17cnFUt5Buo3qiRfGLD2xYYorMM4gk38fhwoiPHeBQZBTWyG65EbkxLu7SSuC9PLi",
  "key29": "3vijEgbUDDE3CWKFnd1u5QUKQQx5Vs8g22ZsZYoU7AUYeFz6fe6razphPFeBEm47pkPXZosvCtswL8tMJFR92Y8P",
  "key30": "4bPQxoGxzxXFppbiCBNDXGqJ96dZGxLWEThW5we5mZ39g8ZLqsZyQPsMnZ1uEwk7EC5QwyQScUUBQzsWQMxYutze",
  "key31": "2vnyx8p1t6mA1uj54cVCvzqD1j7maM9UscaAFrCGVs7iEjxhmPVPQKbHofGWq14w2Hd4JxRzCMipHn8e2V53s8wg",
  "key32": "35RRSNBJrWcj2v8wEgJ2RChq8kFNxDAkToERpJN3nadUPW1vxUc9y2eSaCnauFKNLv19H5Nq4hVLBX6kbZsHrvCd",
  "key33": "2VZP5VmqAsYA3gzA28CNGPCe6KejLiTaDDtLKGyzuoYSTzepcJJT87G1zG5aMyYSMt1KeR92uXzZHyyX21BspEae",
  "key34": "3nLPj8zgc6sHxySSR8oVjYvwrapgm7XyHdyv1vWguNaDA6VZZK7i669PbvcwBcCoNTGYVoY4hS1WBppUbRLjyAhr",
  "key35": "5jyUobZeNZXSwuD7zx6pTD369z8GRxDUZHahKvneaLZMtNJzPBjxXxAh1QiBe5JiU9skLiXNtvz2s2A6HA1nWiEz",
  "key36": "5S89GjB2KS78BjW7g3LJQNVfiXsxD61uydKHjyzUH7eLPKgbjwMYGouVpoSYDoEMomhyS5xRnm3MsSUsn5iEX28R",
  "key37": "4tPzi77qQzdJtTZgH52Tkekpc9HcUa6xxNSp5AajoVXYsj4WFnfjTYgrgKgpbSVqLcbbqiCwrHwDgeWaVg53336y",
  "key38": "5iMQPVbKonYEV3q1GuS2hXWjLrPSWhx2q6tsfB7kt5nkzHzGw2dNDRrzbrc7HQgtTJMG3NiEanvpfRFUS4SgjQey",
  "key39": "4Xoh3AM3EeVRFnt2XDqqYkKyzynxDgCdcGbL5cAXcx1pY7EyzxkXzQf3jmNooySc8engQ85C7noe5oUKpp23cGvJ",
  "key40": "3GPQjDhymCTMEy5ocYP4TfbxchksvBPdzq41jWu5nKke8o2xCS9ULJ6nW3S6mE99sBE1SzciDrWabXr1ADGr72My",
  "key41": "2TKh7nzHMwQfaRLvDKevXvn3wb6yA7VefHT9PpqT4h9vyMajgoG84YnPTCMFLoDvXpfLgj1qbZhtdmhG4Pj1KjAM"
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
