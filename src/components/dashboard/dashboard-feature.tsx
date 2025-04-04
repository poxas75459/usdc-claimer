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
    "4BJd2mv96EbeTPjihMGEhUMFRCLnddjZ3cSomd4PbAqY7Xb3zQoBsnMhYQ79abrEnpBfdC2NZ1q5TsNsR3SfCxuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nrHUpDz6phq1BsUKVdmMgNqHEKkdZDLukUQEw6yHL8qoXb9tgPtZ4LuLZbXXv5iKoRfvuoBg5jrgwQ868HuGVDe",
  "key1": "5MzJg93LzQT5puh7RB5EZTtEDxq11ybhPfq3p6Mqu58pXtkvrZdAV1wRbzj41SXeoDJCcmoTs6R2WKXi6eVYiPPJ",
  "key2": "4oWwu1QywmHAgFeVvTjLBDNpzytwfameHHJG6maoCpgC47vdwQYsPD8tsFX9uP5LjRTGw9eK4RiRjkHyC1WqFi1F",
  "key3": "2WBwAcuNTXfQCiBSHKFe9anrvEViTszkv6JMEnYGdPnvCUHUKbjzWre8UvV6cxbHh52MR9Yg5zjBgw9f4UcHBJQX",
  "key4": "qcP5FUQL6XNWg9YH6NCrhztwyjLdd9EfEZs9RaYyyHfXPFmQ25VHABqzY1AcxxZfWB5LzNp29KvxnwHAEkYTZez",
  "key5": "3sskupY3g5CkhA2gtCExYJNCG2QtwY68WCZJcWxVsPq1J9EwUTY6YNMiSKvsg8rGZynMeUcZwKkyqit6UA2n1G9b",
  "key6": "2ufxsWtxDCWKiLkzv5pYGBfomQrjyxt9yB5NbBw2ojzesCTdN5pyCNNPmxcifTL9jkS1WGwpSJ5f2RA5VDVQKCvr",
  "key7": "3v5aaiEcehQffoi1Vp7sQoGuA8uG5AseWV3zjeYXnbjRYhk7zYS5WJHeAG6LBiEyTqbjdaiKERci1B4QtzxkBZcp",
  "key8": "56KmCGrxwbCoKoSBKUS12YzFFpqesYs4jVELcisEz8HsEW5uzMZvZP6cTUa5CigspteSCJZcjKBFNiqDmM7tKw1j",
  "key9": "3qe7HxMAmnnHufSeaw13DmSZj1zVWSBq9mrNhrBcH4Y649kCi2gxE8cTobFJu5RT1Ubq1aN6oxqHKvYs27VLR3s9",
  "key10": "CYtNZwfCnuYbhYzCKwACFWfWv1LXM7tgH6kQegfwNzyhPqHVMTY8TbdtVJWV8F75yc177e2ocvmhKsXP3mcCsoZ",
  "key11": "34vYNSX43HghzdAt7CVQwtkJ1Piwo8PdGyu89K1FQmPdJFXjqzKdM681dXrshGzQMofsAn9J5vxGNXM9fDjsC23u",
  "key12": "3YD4ztwy3v6b2rhpwJ2gmbgGJ3Be1pK7nSw5htxWYZ8jT6XJu3hmYaL8cdDjb2v9sgDmFovziUyJ5Z7XEP1wDNSL",
  "key13": "5TepPoHcA58i7eJ7ByCqoWBTV6RHZHJuX1HLVLaC6crPVRPA5ny3LU8pBf8cysqx59oX1erP2hMdLz7S8K5yXfE",
  "key14": "49XpLY3USSiV5c2RT6oUspFy4CdrKW3mmsDaGD8rn3HF1At9e8jqr1Sap8xx8Aj9xh3e2CHHbDt8XZkDCBV4FGKs",
  "key15": "4T5AhJztg2Zd8V8upzLNE5kmTnXFrokYQjG7JUmoaG68aLf7A7ca1EMf6FdFtjKLGvanVioNvg9FxG9KWNf4N3ez",
  "key16": "2xTB6nAYafnL5y94HoG6dpQHpzMuXbr76TDh7ppH8VvTBkdo8B4241AHg38qoFYzdVvqysBeMnw7Z8p6h1VKvBrw",
  "key17": "4hN7K7WdVKxAFzKxdr7s6tqb2UopRxz3MUiWqusXY3AWLbC4KnH7fQABSdCnCTA5BxHubwGnG73wRXWrapdRgJed",
  "key18": "QcpWjfiG2dpS17pc8TbicvSg4hfngRyxfHuW2Y3kSu4fUPtfoKfeD7woeFn9vjoHjbjxKVcmqjTaRSqBzhGsMbd",
  "key19": "LPu3b99ZJ8SyN3SHctdpZYKMc53hEmXbVsuzZZ8SBWgLnyWNU3xVsEQ9esjFqi6omfuUypHAQHhZHfTkujsqWWQ",
  "key20": "2uX9yU3eUmAv6AYLo87sNFaFD989imN7xRKG2YeKAxaCr6ybk7SKKAs247qLaQ1kKo8nhxg2aoBieWZMfxgMnLqC",
  "key21": "4qU8bENCqf77vTJZtGCm2GwDLAwzE83X8KbUhKXibkdfmPYxYbXQAa3TfMc4u2sUzcZ3SNAcbo5QEma4hTy968Ke",
  "key22": "2UF43ZVWcCgSPcdkgwBYPXxHB11CFyLqtzwGWErR5A6VKuZyeZcdyQN4QAqLhQMdL6ahnKbrWFAn2qAXNcnBHAfS",
  "key23": "3BdAH2MidEJX7XtWqt774mQFnutp5P4bgNi5mfi3ZFHH2MhXhbjrup3FEtrv1G89DBnX832RVSVqLbxGF9STr3wu",
  "key24": "3quMHYDrgicEcWmRvvicZbPZ7LFDmQ8tTBsTGmBAMqRWaLLgNQhAM4FVoQaWVkQ5j4Z6RnbMJXSN4Ekg8LhCe4RG",
  "key25": "37XMj4ivM33kiHMNUcTroAQg4a1dv6fC24hm9dUPKfM5vGwg9P9hUp8yZ8AHA4Djf9tuJFeEWEgq6qMc4GyAUFuh",
  "key26": "4SmrGtgJXmvfKKPzHGDGeiE1kuqNwyuJDoJ5fEYtUrZASewGvTu8LCCjWYmkCypvJD3LDb3BDP29UGbatMuw1Kym",
  "key27": "3XpjK12dt9ABZeVNwH2r97VX85NuekxtbiuqThgc1CxkAWSNwS5STY7vwpTVVTA7duw7FMxdHrMvvC7u99nV9DCK",
  "key28": "4vYL1GK4Cwx7iit8w4h2QcLc6VWUhwziAQhJC51C7WS9dStTBp6XxyTpv4EJ55rLqAGqsZuBXjbBzZHTgfkmSium",
  "key29": "5MPEK6GCLLbf3BG5bJuox5on1mEMiTd28WQTDWzU6dW7jAXEBzyPKpKRYtXGCqjy3v8xocaUjGM1tTvWGDcuXF2a",
  "key30": "65niG3ZyJa9KLgb2wQxxwDB4em2nbf1cKuRug2qkVwZmhhBqo9XtD8GacvkYF4zACBHBu9XeszJjmmzHmgDRgsvb",
  "key31": "3Aw3Y7waqnKgEa3GSDTnRvDDPE1LN59VGDBs47nAuFX22Wp4BmpPQk7ApSS7CeijJJ1AcyrrKXFpEXXnZGKtPPsc",
  "key32": "2ShLvKyqMkfiR2MgPebMVQ3pBAG2tKsZVXf7UQcMUYgPogNSevURjtZL92igh46cQcim6vHbuy8egNCfmorivgbv",
  "key33": "4gNtxkpx66sjGKESyqMitfC17RVmz7nTtAJ8NCQCKeiVVMgY9ZLLP7YTVjvDiiee82zeb2pUsRFa1zBqMbsLMcAg",
  "key34": "4ZqoJ5sHsmL93MUfGkFyWiQVCN6gHiKtuyVJ6Yrs3aQFmNvNRMjedp7Gpp2XeKbKU7quhaQuDC21Cqye8wDzCfdg",
  "key35": "A7ejzKA9JgQo2kYsyTdcCJF7ZrTY2yTT2HZCK6LV1dfaZ7ztWahSsZaBGpDMfgpAr5bz5Lyopej9SxgojWWqtpG",
  "key36": "QgatQsXvM3hWVZ1GkvDAtnXMXqyp5LSQWM2TTM5BABXun8XDwzDLChhToHsaKsybCxWp8P9zBpVu5NUYzX3pzNW",
  "key37": "2eDWs6PQaxkc3vVkLAtGTn5wJPRBeBKP76XQkg3LoSNTkLCB9D9Jdn49qum3WNP2z8upgAPr41kbbepGzeSFiFfx",
  "key38": "57w9t446or5ABjku7TWKSrcXPYA8mSDdLyPwzqSttjxZ9dR7RVUq3shgGfPnvq3wkYvcRUmQfQ1hWRaWz348pYgq",
  "key39": "2R3DGKeDpASQ3hCUcEPdcuqkR4oVeokPZoCt7GkVyLWKkDtPYS4icdTtv7BYLf954jkYfm5aLE2gmK2NygVh8pa",
  "key40": "VZULwFTEPFQrhawFNLgCYqBug1tfmm1idUFStBuubkMCHnriPP7Mn5UnVCkQrB5WfJFuLp386HXHpaLvKEiU3Pd",
  "key41": "2D2kwgUmtAeCTnwXCTYVxWM9pWtEHL5rhe8xmUeYV9H8iqMqrpSBcVw3pbLLHv7J3dziVmnJ3cr5XmQ96rZAEgnm",
  "key42": "2PY8pNjhdV5Rmnci5ohAzhhGJ6V1ZCfia5xMtxSPuda3Jdt15os2ApNJf2YHuefRBZ19iqB2xj88ND7miJaTj1T6",
  "key43": "7pdx3S6VuBDp4ZWmsb34mmuUFZAL6uELo4S966TeXQq8Ho6D4WSA8o8rsQej26sFbZTwyij81W6cdTLJVe88avj",
  "key44": "2jitfHBtJo6WDcgkh7jPPGShEM647V7y6EieUKc1ptxd9XxigWQTzMyCs7PpFNQcEExwak4G627nS81oBfDbN9Gz"
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
