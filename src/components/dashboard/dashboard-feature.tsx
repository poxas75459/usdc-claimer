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
    "4TqmcDLhquQde1U5M1VLp8eMc4v8rtyViqJmcZphvKrUw3XKAB9mV9j8EWQPvphynkXgWMzz4Vhi9JcoVTY7k2eF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q4uHrvm2KMX2rt8j5N1bwhmw1vAaQRiWH6o3EUwodumPPzasq1H3m6hdUJWRBTwMBSxyrQSHcByDcQs2mhR5jx7",
  "key1": "5vNMWsrot8dF74QPduCxPP84BtMQSCUco8VZhDxmWqGMaWopTnHvh1FrVm5oYAsWmdxhd8wQF66RoGSuMYYyW9HR",
  "key2": "61Bbvcj8FQv7SjA4TwB8VDLHrniKSKYK8ewibTZZTZMVns14bYVcFPytkbU8buubXsyvLX6UiUg97AaAgwGNo6o7",
  "key3": "4NBeY79oTheYd36mGDQ2r9D6VLut9mLSoUw81JYdKFk3HQezLoaQNS6ytH8pkJ4JmX5VfPnuN4ffb7zbwc7fmVC4",
  "key4": "4JNSRqPxcYftqWk2tR8jzdS25J2UCkQWQ4dpyMS16e49TejH42CkGJJneaFbVo7N4cHhGAsvtfVTjxwgXfgCW5bv",
  "key5": "3wDee9eHA7i8GmoLyytHCzHwDQiTnR8tMrYDs7Ds4f8PgfjFpFomsjqGuraek6VcTuAVUbgSPHGEpE3LkixSCT4b",
  "key6": "2VDxJEVwtyxvENMjNGuKNzYUZos76iZHB1wJzCXoWXutMoVyBCeWQezxHfQs6Xc1im7zPMXu2PzC7hA4rKwYMt5h",
  "key7": "3aen3fjzhpV7tSgTdyU9HuKenu7NxMrkHyQKs9995qdN7NFPQBowrMroPECoT92YJNtH2rb5X5EEawV3ZhfGjxAt",
  "key8": "y51y6w2gipym4oNU6wgdVWJjRt1gS4yL5nsivVv9yMdhXg83p5FasnqodHsyCSbeTURYtCZab9HQk3JK7iFZic1",
  "key9": "MZVjgaoitczmLmLDuKeJ4US4wM4e4GX6PdPrRo6v6Dr4jV7fpVFBZvU1w9wy3tgE6BoY9SxwSpXFHBfno8uPoqj",
  "key10": "45PyYEFU6fdgn92o4AMkw3qFGK8ofmzM8str2EWXcBcKqBPyoxTrHRoUSyV3vfB1T3sw8TRDCDtF2qx9yQLntnGC",
  "key11": "2Y77dhiZ9sEZCGNrVuLmrYG3YEPgw4DxaeeTjYJ9uhhGQYta11BS3A8RhoHqUpHssu4g4RYodsc8XuTJ1yQhDjPS",
  "key12": "5BRtxW5yj7QC1kUAmgVcgJkndxs8cz88JbW9htPqE6aySjgAzGhuH8oRcYKy9mKG9YnZaxMztAxZyAMawYAinrT8",
  "key13": "3JWoAcLeHYRaAuxZjNUBBzKWY3AqZFFefxfTBUJehz9BaqsJCaujr2pD793tYiv1gYqfMwV5zXQTZEatc4CVNU2P",
  "key14": "31oZJFXftrcjiigcDwQuazwcrGD7csgdCK4gFpf6qMYwQQartqVFkmuuTG3GeaVqBU6JXu93Ghk2eX6KdkvTAmvt",
  "key15": "4BoCiz4tEBZeTwQ2HzcVF1vsCf7cPFSpKmpbDg7SDQfyAL7zcnKyGisSz5AcMLG4mby5cf6g1WBazuAq32hNZGJN",
  "key16": "4d98kNCHZYvSHHY9D3jhmCDHKFMgtSK2XXeSfoucfKynNFL5S4stH62C1ErYoYmM5ar9FMQFNnzy97A5aDZfYREv",
  "key17": "FUyxFLCyeZsBiqgN5nxwGcc8foajvQc25CP1SoKUR13o84DopdBsdBmD8A3hEUfFqGTqMjUzmCJqQu2nvzQe2Jy",
  "key18": "3GjGtQRpsDAdbCBE5QFCqczi7G7KKHnjzz1xpnoX7PwZksKrJtHg8B9u5x4gKFPhUq1YiHVNJGK5dhLvwJr8v8t4",
  "key19": "5KvVYBd6k1SCRKa9jEPEGFvZzJmD9YFQNEXcTGfBheiut4XgLkkeXs4oNEMXBuXqtEGnH43AjdxMwwnuyWSo7SyP",
  "key20": "PewoLbQpXc5Nx2Y85gN7Mf7L5roQFVDZ6qFXdTk1obGbDFZDmkqwYNJGE8JUf2rmJRNGefeLcsyPog1LL7HViTu",
  "key21": "5HpLwXiRHYLuxx7vHn9pgLyLxKUYeMTUrwFu41qyQzGW1fUsTVYuaLLFgrLUJ3aHURMxYk6jLqa6eXFh88XPc4nL",
  "key22": "KkrQ9n8rWEyxhiSsD6zkutT2ckPN8LSCDHDK8MuvBt3tQjMTeg4x4A5dz5mrjqPzLHMiTyPsDzH7dnMjRDUg8x5",
  "key23": "5HzSBM1UFgAzRo1c47K9XdA8eU9vUu6GL22nM9r4WaPGTZsnhN2if3pNkyyERP8WvvtGnFiFxbq22Vgz7qLVrw8D",
  "key24": "oSaDPtKCiHTCRPJN6jMaEhqu3A1YudEKy6WXV3xFCUKC8zfh1vquQuKNh4ZehTYkpu1x3NCVqtTUtnZ3PrUfud7",
  "key25": "4WnEBw4hGhoECfC6W94jVDvdCsz2TxR7p8aZMTCNo4x9koPcGo6Rq8aNkcXPKJjgkg5NwZSRnqKMfu8gPp8wuado",
  "key26": "5XcPKmSaBGTyc4Pbmn8rDmyqEhHajdiZVsqo6PpqyAUXrcuWuJZp6De7cT9cuHdnre96HTanKEYfshc1H8ZHbsGZ",
  "key27": "5Nt9aLuPwhEWKPHxTLbDLKm2BfKNHe88ZqgzFiiAFF8WpG3TPM3YynKY9GgApm5fSbVUo9iQDbPaC7nmLtkAoLKA",
  "key28": "2NoGWb2SRnc7is3p5J6sCBSHWQbukycBPsYxF4HFUf6CyVHixeYbRWBpQEBNfs13xoTbfhvmbzxLYhUFZ3DFP6FP",
  "key29": "2KkzRL2DoC36o94YPukYVDr15RN2cPGXyorsV11oCeHBbzb77YbkxwkpqEn64uLVvgCegvhhP5zje26JAxADsYn9",
  "key30": "vUdK1YKaWTP8MeXZeDNPhtrV43kbpeR5jM2CLp4aEnfYLFG8Z7GSvtb1RuePDnZtcbG8XiKHjNsDn3WDVDycE9d",
  "key31": "JcWhaXEyFRGXLZhz2qXPWTN7qRxaEvXHBTCaXjaZD7sjfs4xwGepvk5EDcHc7WSDHn3rM9eTyZvokesNmiZEdQd",
  "key32": "44abn6rag9joksbZ6kem427UvhXxdDxWfnpm4Zq2yC5T3DEaud7QyPYMqd3DapXynrNrJ2EAWgzyZCbxeVR94a4L",
  "key33": "2k6zPCxpeQi8EoReo8HDTiMmwKEPLtvtA9wu5eY5FXS3ghhRTtTneJACboH5eZwYTg228PDbU5p2GAgHQvSUwRwS",
  "key34": "2ZwMYGVZJqVZheRKyausRW65yzfumMn2es5U1Qp5UYFTq2SHUHte9CTC9CZzXqJdoNTC7xSUn3NfKm8WYm1qgjoB",
  "key35": "2p6QCKVvvzbwdp3c9yiP43TQ42uYWn9yF7XdiVSJ6kkQJmWGg8k4SXtvo6nuDVWdvbAmHpRjGSPkFZT2E1juWowK",
  "key36": "5WVAxMKgg2sRw2vDmntW5FLb3r4AER9gXbHKpVFvphTaHwoVFYdRGayZYpy7LZJDHbPuWNdHxtUFvS1zP2xYTDWY",
  "key37": "L5SQZyJDGh6vALDMzH78fJ8bA7eW55v629vxNgsMXJguH1dHXhFJhcNB9RGeTsYqAPc6aQrKHDak1y6QTNUAmiK",
  "key38": "5YTWfW3EdqC43t7B3rA9iRHYCXbSS6qFCTFXNUBTRbZn99D42EbC5512646h5koDSFjtaKBDo6yGGgFThb1mMdTH",
  "key39": "4PP5t74PRNpL24Jq7mBHc2qSzKx3xFMoZaoZuvkakSZ8U2LNBNrFH7BG81t5o92uoXBn64JLFc76YjUZ3gnuEraN",
  "key40": "4PvKJoYXgAhbgPaS4fJMDtJmkFkejZHpyYZ2k77X3dqG7chpjrfDpAVWeAHeEPv1mQekhTaps4buFhiTuUpqpzUg",
  "key41": "3MrXcrDekNSJn9HLNeNpWvqVW4qnEQGbnA6yVq2WbqgixGUQihoyVP2mFJegcmLQFqGddUdF6n61F6AWKUpZLSEX",
  "key42": "3oU26v4nEdgMag6QWRiNdxKa2gdKnGYk4xxug7QM1iu3ZtiNmoruZPUjiegCEUESUrcFWzxYwy6dheEBrAyt67hz",
  "key43": "ecjbv9BSsQZfcV2Zfux96TQTd1WKLZw5TUBcf5Nmmo6tHasxSHc3jiTDxXf4PZdgvhywzba5WkpYHajYvwisMAQ"
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
