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
    "5abqeRgASV32Wr21poQeTNB5RQs22NWweTkg4SGV4sxt1r1yi1uz9r13bBcRU8ycRGYbAzYNmtS36vtoyGemfHPE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39MvSHyC4hApZVAnDrzYcsncX3xCmPPcnbeAECzdpAgc2iofsa32Mn4SEonxV3t4TysYRnJvNa4knmWauMxGbuAP",
  "key1": "5hT7QKw8DEtqyMoEh7W2bTacg3KWafUdfhzifx5hbPCbgVaTmGgjkk1GoLVeV12hnNxNBefzGSjqNaA8fB9YnQKo",
  "key2": "V9RRnMNhKYhSbbwkECGHEiWdpsyH3tjoeDa9Mt6NG4U56PaGaYxs12nnALw7LYYMTrsT5e9D34yEnV4VK8WNStG",
  "key3": "5XTCrofZigYGb16ty5LsUH2xEtoqJPWc1woUcadpGosADygmQU4pqNmsE66drMsXRre7SwRr84VDYjaqyfULQqNa",
  "key4": "5bJQwciJ6PcT1dAD6bpJfQey677AdCe8ef7pYSBwAYXVdgk5Zwg1tjDsCwvGRiaWH3pd9FQ2VfYmfpinHiJDtCC6",
  "key5": "4FrtwjU6mdLzedbATHypCtieKobnoAjH8XWWBdnADyu5AbksqNBn1SzrsrS9R6Vy7qgZwKhSpWzyAHd8Ugu2DdmL",
  "key6": "6V3zSDEqjQxE2SdBPSXTyrqnhteLfj6dNzm2sfhCUgrxhoBo9sD1meKVN2tfg4P7D6YiGgwfqmeZZxZRq6DPoqE",
  "key7": "QuwpBbB9Qv1gN7VDwe3gwt8opufoHdCpWFJf1tHF9hRMCK1B3EFE2hXynk7yfAQVJTCcbrshqud57DfjBozd6sv",
  "key8": "s9wQCJ2fYBp6BZRjCevDmFPriDYsKcEPZ67Bm5cVrhRviiDv6g2cS6iLLfcbu2eQcfTNNdhhZhmFL3iFMgoqAiH",
  "key9": "2DVptDVtujDX3b1k3x265ToHFwKBNBt8TQV9YnfpQhoNFx7ma8oz7FNadjV1tR4vEU6PDePLhz5Kqwu7sBYuZ6P3",
  "key10": "3xLwK5T5vyEYMPbdp8CNJtYcu9RnWX22NngBCRgyS6xwGDwV6GPdTfJUPs1eNfV2FpsC9t1x2UdQV1nWe88scY9P",
  "key11": "3Qzbwvn26AbRVHT4yecCZit3Wy29VsWufXsbU858HPQMz66tdZfQDXhk8jY666k7JxD9E8FnxrVJiCJWLRjDoLbu",
  "key12": "gxvLoxKcVUANnYy6pUQpd5B12vyNSJL2jpS1fbKZDwfh5dXWdqZrBmvmW582mfnKkF23YT6yzAhKEw2nVHzBjxj",
  "key13": "Zx5CnLdW38L5tx3kMwEEfbYhu9d7SadtmfrJ6FzSYgk3FLSTKTbNSs1xXrdF4cFG7UuicXqK9STAa8kG8bCcSwR",
  "key14": "26wcmkuymxWAC8dWLjtebuUV3ybz3iYpiXDrXHdGjB4GpNKw9R9HLsWHHcAoD37sjBrJTMciNSZZYWFwWQH3gMKJ",
  "key15": "3dPR5Rw31rt753ZKVdqz2aNZdE4r46KaVXPb5hkQtjz2EQF26he6ReLDBrrBcwkipxgSaKbg2rQdHmjH3zCdZXLg",
  "key16": "5sYzky278fnBao9F9pybnoeVJYvNiX9RiyFUXHg9H2bn13Yt6A2RjoV5XzgaULDZ8j8nG4NiLYUzQL3Rh2Ku49Vs",
  "key17": "213pnJspzPFckiqorwiPWEcveCvYDrssDrYv6sxbq8aW65C7BPSj7TQ2wt6w8ujvLQ8HfgE4FMtc86AJv6RUiVug",
  "key18": "3ujqHxMWAmCNBJuuujvnNUcgcn1HCr4eQuiiPJn3cJkP5peqJkQ1ZcfRuZ3sGgjwH5wbjLyPLcAM8EWkrK1u7QsU",
  "key19": "58EdQvA9MMFrBrxhhjqnZAeba4bM68jHRAsqeAvKrdqUjWBZQ7f78ogBzmnEqhNkGeRwvWGWpXk8stLSskBHVK81",
  "key20": "2CHC55YMVxqec9kQqqCJJwHSDijbAgyCzmQk7YJoqFrV5uSts86n3SBrdeTzML6TyGMqa6651ekTJZLkU4zYtAdm",
  "key21": "54YxRq2jx2cpsLzriEo4NQZUakBYUcyaPT3NXiZxj1zUBkLTeqLo3vYUHj4aJB2jDcY8M858YqwecraKJvF53hMw",
  "key22": "5ZwEHi6aBejngjUodciwmGRviR9jo4WwLMBZDP8ReTa8DDswsNu959Tf9ojTE4CVGbneC9SGDm3TUt8XxSeSQS1e",
  "key23": "4ry2SvRnj87DWFoz71n4eaBVJjjra3kedxA7Xo8a8fqggEKsDrfkyA6c7WpQjt5vYJibY5EYTSqQdzoV8a7RfbNK",
  "key24": "46RYoYcShjTS6GkkRvHiHctziMXm51Z2pFXtE9BgPJxbVDSUbg1vh5a4K1H7ED7UaJqA26PpWwaVZkR3iErRwynx",
  "key25": "Vz6jroh3hqi2VZxT9TA6MenZpWiPbbfDfFNfkkbuV4aoh65T7T8GUhF4msfZLhfRWKnQoAWoaxWEyc1MtsqQZAV",
  "key26": "4cYbcHTt5ngd8B3To954MnCEkBamCYhBVKSU918XHoYcZFopTJYCS2kkYD4rayL2qUYNqaD5cFhtznnnX7V1TUYC",
  "key27": "2MeQiUcDveRWMdiV2PHQydk8HbKGYbnW7iiJ59MxVyxN35VV92KQQWtVjK3Ahnf2bvtmAHiuSn8E7Vf3svKPJ5wV",
  "key28": "5Derget76VHLYbdioVX1fVBV9TX7dEXTtrmDnXLeCkbywm3wLixM5V5CYrMboiDZPuC83TDCNzVTBUt2Gfom5r56",
  "key29": "gwRazXUhR3RGEmwHT9hRE9vNa2MwEDVVARMuPvKL4BHQ83hgJKzdZUhgSTuvmB269xJb9HS5Sv5LdNxrhRxgbxT",
  "key30": "4rwF5hXFGsJwxpm7zTAW3RcWhHCyFGVs2Cyam2K6gM1BiYshLGDz7NzraPfRNVMw869t21Lnk6R1sLbwLFnpz2BM",
  "key31": "3bkWmZksvA3vKTBUKvDA2HTPXu1X4Ldgf9NgwzoYtVAGvrz3NwDK1iGHSVrdjAMggchTAjrCyFTGjp5ZqgN8Dcan",
  "key32": "3dabbd4uWDNJdwQQbJv96uGzsxUeCHPTTYPhYBsziLQ1rTE6ofBDSVCn4RgfAaRUXD9VUfHuxsjsHqvEEtAU5RE2",
  "key33": "48payRyAHLgWwPbvVGpgJKMw9CBTLwygiWxvHZfGoJrk6AbZxf9KQu5CgcG5kxrhLcTyhuUu2cAtahTH8Wfeq7Zi",
  "key34": "2M8MWA3Jb1S5fSmB89HPeuDFMo5V7UuEURFoYeDt3BpN5Zh6XwWYfUe66ses2JxZJHSUTZH4WCFRKSMZVaV1wzHr"
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
