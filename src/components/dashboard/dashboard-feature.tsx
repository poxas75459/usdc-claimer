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
    "5aymky2EFwUXvcLrmneAbHpsNyq57aJYnEymUNHCJo44GP4viDJMjbgaobxbWaC98ubpBUafpegpSuaMhYVaSWut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65b9jLpstzWg9DFVCB47oc2cK95Fp9RKrHGMbfSuxXKgHxk7GMp52V6XEipo96XTX9Kif2cNoQyJZVovex9e9BHU",
  "key1": "5ZxwfHB4KWDWwd1UCBDXkmUpyDfAaJcSYqAMn2hEP8Fzu6CKb7GFWVbexmhQMtjv63TCHei1cy6TTbFPp1oC2Thq",
  "key2": "5vFTUZ2PoqGZgggC6K2xGf5pCD851P5989fbq7fGGpWi48hAUr7NW1AS6xkzfn3e8AuRkphDY9hWqWtgy7own3Dt",
  "key3": "5Rs63EitcKmqy3s7NhoCnCbW6Muh32vihxgQi4LU2gR3ocxKsVSjwV98V3iZGtCL8jLFroYYPZ1stT3GnhUeQ9Z7",
  "key4": "4XdPbZhkcZ5WTVQXh1erpTFyBQo9nA8grnTiprxurxtRaqNuP8Us29mwDQpfrTpMJ4va8GpgMwcrk68eywzKe2fL",
  "key5": "4TBaMUmi2oXPpHutc7FYwv5eJWf1giC7az2NH8XthQ2jWyKiuTQ4ku3Bw1KwriuM1X7LNtero8GkdddMV2H8TBB2",
  "key6": "57ABgmaz3cX4h8ALzcNuUVYhBrGHRC8Dn4WEahZFDeKR6XLY8KLspWdeDVH8bZLZyGhmgUqWqFCwPpwnVzgW14y5",
  "key7": "3pchcfwAHrVGQUBVi9aeTC42HMksKdsNvLvARwk3bHePNeLN6eQbhBRWujrnx6bozAKaFCr2PchcCPRTVD2WEmpd",
  "key8": "4gSsNUhgBpZSjGtybEVw9esi25BW8L8H9R4YmGu5PyumzYRAHfKTDhvpLgZQRtUqY3enUcHuNrRZpHZ3DHeykDw2",
  "key9": "hKWFAYuxuXauUXt9r4zshKtzeVfRXaV8yTk7LDNnqYcHTaoR7wc5AkJ12sqTFzDLNT6CUskNEnGF6NuXe6bbq75",
  "key10": "4syaDLwSmDFwsHUPZa9P4gWuLrscdBoVW9dcWLbuZyKt682nkP972AxPKSkHQqSXoHU4QBvUyN5JRdFxGjHNWcMp",
  "key11": "4aCW9KWPNL5xcFukLiu3oeqqDbmwdccveFjGu6jtPqRCTaLYC6Ab6VY8BAAvymG3fCVTJ31eVz9JXtU7FxGjvF1F",
  "key12": "67aCVs8Vx9z9cVJscMwvmx3M9edLTMafxD1xnmssDKmxyi3NggL9SoBcw6gx934kgNRX4k8jKHyp7pwCGSZYxBoq",
  "key13": "56j6x9bcg7MUwyGX6Ys4ayTgAUL4v34ed32JcpZ3ot1cb7ULouqvJtBbXusmXgt3dEDt17tV8fhDA3zvZhMcfG1Q",
  "key14": "2Qp3p7gvSBgicXQr7CUaCw6KhMtDQwKRpmFMUBptWW1VUqgCWUGj8j6bdc8jf2N9nTzNjWFGW8j8Twn1kHAthFLb",
  "key15": "5FwxWbwgzcPViYHMV2eS1ymrRpstmjL4Q8SGaxwkhQbH29tJUEhx7cXvVuR3LUevio6x2FmbpSYsKiShMxEvGJhZ",
  "key16": "4gHLCyPcCAEhhee84AjbwsEaLWG8ZAtRws2Sxh27gYxwdcSLBpWYuAHa257DKYAPNF9fEKQdahPK6DAD2AGsY7i1",
  "key17": "31eyU9MXrvA4FEVHEK4W6svsLCQxnZCE9UJLaQRexuYYAsn6Xi3bjqn73vvE33D2yXrFgYFCT957qZCgG4R1Abuu",
  "key18": "2FXCgE46hNS51Yc5YCXpfqgFHZ9QgpJG8cq7c1Q2Y1HSrPfLDszcXtSZmcz8rDmRVK6uW4VE1MQGGq8RVDVtyCe",
  "key19": "2u4y7Q6rJSChBUqWm4PMF7xte7dEAi6p5tiRNjwvgCZV3Mx5bjd78cuV4PEJ13cgFJVDAgbpBSm7KKJXr7cMkeUm",
  "key20": "4542kXgZ3ePnk5JwL4K1ZZFt1LFZCrqwXfDpLNRLiRrLZh5zDiLWc6hT5GGf9PMZPwsxTXs4o35xg1Fezs7Npa14",
  "key21": "2nFwvNtmx8AMbnwycJRbGMj9SKxDMsxoMH7cEy5os4jdKjQLVwNzT1HKYvev6pqYBgAEartYAwkgodNP3UbB9eBH",
  "key22": "4xsVBSsDXiy2FNM83ic2SJBU5S5RVz9T27J6S2seVAazLwmv3JdKVJWPthtX6L1ZmFD3wA6iqUDKUHfgmA25LEvT",
  "key23": "3MK3p37jopPNLZ7aAvEBj5iUykzYtTMD7dig5tkdoABcukchnM1V4VWq9CyCsBZjq6i6cBVTuSXSnHmyMsavYJG6",
  "key24": "2xoitsPLbToyL53qgtBhSuRooUVAdjk7nUqknCAszWwM1bm3KjmMC8NqkshtbfUHVFdjNGn7aBt7UfKuW1VRz9U1",
  "key25": "61y8oWCaQJkX3g6fhuZGdbgks1E73rn5fzXz17hEZrPhj95nj1wijPEyhyuXkqzbMkr3Asc8LNgXrgnAhBsiMCvv",
  "key26": "2LeTATwS6P4oTsH9cGo3EQfJ2AyK7qVX5aFrSSsKcLbtWjAAmgPdGLU8gmkMrB9wAWHPrac5UN5v1GEa3ut37HUa",
  "key27": "5vrs7bnER6SDvnTQEMbUSQrtXLmDhYdR1f5VroqVoAoxA3JmtYc3j6NBJKmg3yzjZXscsHEsNtP8igT8HSb47Q2n",
  "key28": "5fsGdd8jqqSv1yZJ4EbKrgKbLWXvnnMbGgYTGtucWrYnH1bsnoe3WBsSezdNEdV3pK3rCeJzvFwDdcUzGUDU5ND1",
  "key29": "YepfekrcemjRhE7fEbFPbXaKmF7QqqcjK9qmGMP4X5w3Kgs6m7RixLFyp4kL5Q5HSokTKL2yUch9estSvxidDdk",
  "key30": "57gy6qaDrf8BU4iaqMiZRLTR4whoUi1TH1KM7HffHTSkybLikYNiCpzbbesk4MS8574sTuuC7Mc6VDuF8UFNQ87X",
  "key31": "2MeGj3aSCWmZAgMdZYrkbwYTbgZKPytJ5LxigrLYeJ3kFfmgiHDPJsDdi8SiroEQ5wq3XMkDjiKbQfm3eF4qC3MH",
  "key32": "2Q3KCSQhx7oXipFrPJdKXNAyhekW4SMyJVe9fTs5UGNwRLoFCJgS7JeGhZxGKq8d2bHUnZsPmxXjhuaZs6ftKYwi",
  "key33": "TLTS8AmXsxXo4u6C8wi3LCPph1Ayx65VjZQD2ijnyZnLLjjUpFed4KNZn5w4BkE78mC1U4zUivBf1Rgkp7swBX6",
  "key34": "4rjkGWnWmTNfTEABkgwA624qECRWFwVij38QfyrCdaSTBo9565epsAnRCZA99qRsEBvYGS3h59aFdu54eC6BeE25",
  "key35": "uLf2MWwDaSDUWEDw4xuT7dn229eQ7d8ApQYUXN5yNojDVBVAvo63VbWbGi8GmX6eLNJsHmCEeyNFnaiQbqXZ6mh",
  "key36": "2hjik7KJxmvC7bpQdcLvFMF6MTs59DxxBbJkuSoyGAauCQE2xAKCv1k5vSEPteizjPTeS4W62QCk29xRfZMxmu1m",
  "key37": "v9farb2ynh1jaczhcknF8QRi4LQACD9EZbHVERN6QsKzy56VbgVgvK7UNJePSttRrpXDyWaGarqWQGYgXeqRTGZ"
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
