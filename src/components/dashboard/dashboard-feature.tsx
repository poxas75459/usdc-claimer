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
    "36FgFTm7hz2UjY9HhgTDK2vQFgMGNm8GAr9cRvfZGjUDHagBAQBAseevA8482SZF5zA71swQjWMpqiaHj4QoTuMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wk6d3TRGris6UFrdiMHu8BEjU8LwUjUwMQ32Ahy3k43AQBoFE9VFsSb6FkeSCnGPSVgqswHnBbnLYAgSS2wwCgq",
  "key1": "AqxEgpoQM1z2NQJajLivCpYqq82Q9syVU6xNyqtQS7EkTVz8TQLSWDmfRL5HjzmXG4R2kPLfLw6v9CfTT1x3rGd",
  "key2": "56XqVRNem2Z8QhASyEMAuuU4xCFFvhAETggmtWQa1nUMpCy2PCSvDy42oHJDhALXuou44Li4Vrd2PSZJP7VqfcuU",
  "key3": "35u6ab1zeVjrUqNtPd1kCJRQqJKGgwp31VCJVhFS7MwZrTFC5L3FbdxbzBXfpZM4pgAHKQ18nPg6BkWKSNDUUNRB",
  "key4": "342hYsRWtBobeNgRNeRHaY1HgietgsQgRJZn9eD3kwPoZqzbMatWj2svuCW2DkZ3DbZRXvbuw31zHFa1PLLFP8o3",
  "key5": "Q1tdF3E4e1FAfrCRmEhXrYkHZwkLvJBeRkoQmhroWJSPdTkqdEhRS3tvvdXQNohfajGgQp8K2e9nZ43VNkELR7b",
  "key6": "3cXVrEnC19nhWME8KciS7FHSpMY1QqVLmkbtP4LMxie6PxTQxF1gL7jPZ5uUTET3KtKVNZHsnGBq2vCEuhQe59nZ",
  "key7": "5tzVHPgRrPfo25DKG4rxDJYtYPLYH2JEE5VDUcUGhYD4cpAYuvAoBbPa19wVwzorYY64jhVzVfAzC75GzcCmc2bD",
  "key8": "4hmwa7sZ2pZFb2uD1KjHKE1avTpojV31knxBLLiK23xFGZwdHoEDVxQ2pNpx3e7AjqxpxcxwMNtXBmL9xGKbQRnq",
  "key9": "4wsnVH1tqwuZbZWh17GzzuRhGu2rQx5avrBMq4Ka1aF5HAkr6CAVm7Tfwv7zrmxdUY64xGHGCepZRNDQ2hG4tfmP",
  "key10": "2ff6Xrn6rZp2DHJ3fHkNDa2G1ZFZj7gqnADbTWhjM8F4K998UipYBUFABjpsAB1fXMTE1iEFjYQ14avH7t2qRCHa",
  "key11": "5aa6aoUrKXDxqvbpNXWgQbJDsP7TRVEksUJzSomkB3179YoEhpF3unJjL2rDDut5AZhabtfJwWzMNXWh7aczMUU6",
  "key12": "56J8MEtfL1L1uoksNf4fLBtPKCMKz6n5Ls8RHVnLUXjgZHQM2FSy77LoeETNFbpNW7pT9KX2NcxLRVXn4CxAywC2",
  "key13": "3o7JUvaTevD8UTfTtUYxse2GDNyvNhgHkpLeNNZcsdYU1EVnbQYYMnhJxQrmmZTkT41iwirb858mzqNea7swAzfz",
  "key14": "eXz6LNnBk9jV7b3fR4dZaZzAmGm91A77crC4BNk5AryqVSbNsvHt3ZQ8AJByP6QGBwyc1rf5MoopqMRhkXFobXP",
  "key15": "38KQPr9cwAL2WfcKC8FrRzzk6Cnh4FuLd4DMRtDshE6GHaY1GLtdmWbyG31xR51i2VcwU7HkavPyqsRDsb1KFsvz",
  "key16": "3shzP6boeSNHgvx9iGVSvfCsXrDe5Z8VpHjqJvvhS3g3NyL5soxei7HCDQ3FTYyrw7RRJPE5d6y9A6XrhuaxVqo9",
  "key17": "5vGFZ1AU581YnZABD6UugdRabN68htwUN2yDvegZw5LjLrqGKYyeESLua4qs9s7dF7qeTtZWKuRa5HGET5VnKKso",
  "key18": "52y1oiMHHuW9Lh4FqNwFzXcKahRgzKVDjAQefp1RV2gwQthv7d5oPdJNjAVzHzDcsnyZX9kdNaKH5c76m3A1L7s9",
  "key19": "2PC8owihq7dEjyAMqKKFAyGhmKNWXgvbHAN72JKgwSkaEU7GwJeNUws4vHmfZNzUi3NUHHLbyrHmFefd4LYxpj7W",
  "key20": "28WByNWjgGbr96udGoKyhxCuZYv5ztsvoeVARqywavUgoYgjHKCbxRZyv14yynC9pNvgfGXCcTuXbZebPq2d5JsB",
  "key21": "MbE3fzcnLk9quDE1ZuCzKpQBardCTJFjgYCXXq8h9tzqNkFPwmWmv2zYQZ3FBSE9payc9xdLCn7fiPU8VXnkUdK",
  "key22": "54WL6pMtTCoSCbQi7GNKeiw3hmXNACRnLmA6mrvMWbh9wRE7gYmuS4y1ppvLmRMWjSfX24FU63jc6KSBrUCHsWFv",
  "key23": "5XiqNNTvWtbkSTpaf1uoEfcQAEtAYF7hf7apCdE2FLLkD7FhHsjV1hpE8tTv44f1Q9g2LSniCM7HvH4kcraZ2Tqu",
  "key24": "NAoHYhz7gENk5ULsXAQqCHEG7EqbTV3xvyupptj2fM3fuhYXUE1gkcSuQTJbEaDxWtu9nhv3HVfxgRVbwyhMg6T",
  "key25": "64fiquqzfYX6DRjTcARv3dYREiAbZGaFW52wvqCWfJFzFTSKN1CSdHWkxAJxxmE94nxSY1SibXXJry5k8BqQ1eRh",
  "key26": "57BFqyyMyJR9Byj7CjtzPoaSJJiqkrBgiNEXk4A8VNJpapdJ9boYpCggY1jW7NY9MEYPFLHyrJx5XYVigACvgyfK",
  "key27": "61ob6R7PJySoYMaEJsmQ7WYJXx69Mm4x3xPpLR9QcvDCCxUPoeUCctTd4MAipUpKoLxXrRgC93B2EQHESJcvcVb9",
  "key28": "4smeAQjprBfwsuPnr56CgveAvvCcRrPedxUY7FYYc16mXCJEfpMk1KQaXuMXTmTggmD1fhaQiu7gSAyLYc8wi4V2",
  "key29": "2ukN7PidBYkHRn2kTPYVJ7JYsQ3v7aXPDgAth2EHLHJ6xK78ja2iYNfzVpHm3z5ULsiCmzZM6k5CRCNtcrWkA8cr",
  "key30": "twjcRMiP8qF5tfDucXBD5Xo9wB5vRpLeUF7SMmfPBQuXSPQwobrnKL1ra3anNWAVJtZtjbXfmWBwAgUz9UoDCth",
  "key31": "2EwqNnm5uH3xJHgBPjo99pjSRYBtEK8zYRoXjueUPYmwZhnZepGnWehL1aJHi4VjVJYWvPHQeNtQUsukhTSkfkpw",
  "key32": "2AbCkQWXNQT3HKjaAH2qkkDsiQbrytH58CeL6XGeFsJQrRwNUoNv35vb8X3zLMhVRbhy4MRgGPACLmxjdnZZvqc",
  "key33": "3t4FkJgG5KwFsUomeoHNXEoPhwYWTajgf3zSTUjKuUJaadvtD21cx4JJd91NJxLtaC2nheJwdniR4a9sYD9ygapz",
  "key34": "2xSzsrWDhVHx9Fw3Ubc1tJ62XuqRMNdeWMnPtgxKshRsiZupAKonp1LSYXxHcaWC84dKeFRwu65q63Q7qyCCTQ6R"
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
