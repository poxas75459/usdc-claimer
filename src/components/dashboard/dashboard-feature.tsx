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
    "YvuAuJqQk2chz982BMmSEtvrdiUE8nvrUS4oqFqHfnLrYD1yBjKwboqRTiyC7gPG3YEgLYq7GfLJ4Yr59J6fTfX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K9kSJkJwLRwiFnkcMwYvY37LCEz85jemLaLufKsEfL7w6FVWKX5KH5BVPdZh4vBwm5B2G799vCFbdRRkh1sgyUD",
  "key1": "5Rfub88dUw3k46hmUwiPPjRjGhvspwdS2ZtTr4Dzj3chMZzMF3YcgS8GYL2VDVjAa56Zjb11pEf5kaxY5BfkCmmp",
  "key2": "38LoL5cLdFW1Dmxexyt8zKBPqoLEJDNcWnf42rkLMZzpvaVjDxHy81wnqJ3U4sJHMwvuEE4LdvmFv44ayZgbRLZ8",
  "key3": "4chF67tc8c8KdATdf9Uxn5jox8w67gdHr44zXTTk4xau3dyugLeU6Ar7imYRfUvKbchp3yUFgkohrkoUcnaBP5CZ",
  "key4": "rXws7hMacLjfvWCX8MEdtvsYgecrnfe1ugzeVuvUXNh32ymfNDjJNP7o1HwPXLWfWm5Nu9NhZRQ5cw1WzTSCtTo",
  "key5": "29PHBAesoRuTrdGdLQMcqtY8E6C9ehUufMpmxFyKaKYFx6zLYpsvXTk5Hao6xmiRaEMsgr4sksYRTLowUmFsgKBj",
  "key6": "2SWdZEMTjHqZrZLvzwiJwj1Kfvn9G87XQWMXhrsc6WpxyX8HnAywgJZcMUs22KxFrLy49uAo4Wp2xnVxK2mpy5nA",
  "key7": "gCfuNGejAeXT2fjmivY6ug75oJgvZGAJfgCmJ6BWF3smiVypo4mD7ybJE1P658ooC5iG6v5Hxq6utiELRaKujfR",
  "key8": "2NLXvBZ9VCo8fH81KttPPXk89UHdSXEUGR5qUSahaznXKifpayCDHiZMMUyrhjFJMXEwthkE72DQZcd5ChkKi6X2",
  "key9": "WV87PyeiDstpkc1n22GTCs48ybYruUGNgKXtBt9YLkhWBzRbGxubaquPRvAJbBqzhfVYTMsPHweFfAKKtnyP4hK",
  "key10": "5pjw21AM2GEN8paT7WADZXBiqKcTR3CxqQbwbb2VeCV5C4LBDYc8STiey2rd99jTDK2xn5934KdvcRhtmMaDQSm7",
  "key11": "4RtDWo3xV7ok5pADTeK67aQqmah9o1RMLHZMHu5WE152RkHCXZhhAJe63X48DxiaT1LUAVUURCHh3zsJQdBM5ExN",
  "key12": "2UsfhJ6kRA2vf1sGQor62vmEuxgU4Ks6beTJBjR7dC4n9SgXTy4y4tA61Z8AttpBEW9vWhGJpf8G2utmG8JBVNDf",
  "key13": "52K8137TWPFhu32fAqH2kH8B8y73e8RbWmFUXQMGQcAYchyneMzMB6ZUWQ6uLF4dfaEpJViQ716ngi6iGBVZUPfh",
  "key14": "4iUcRjkzRB12bQTfH4SkEKgbzMQ6pH2SxLtb73RX9kg8Mz2ABgZSZj1FMnCtKoFKEFAZemMn16RuFVbLAjpdMu9i",
  "key15": "251CoFxr8cMCrvdPF5rNgT4ZrAekNFcBqCAeeBxXBsUD9QFFQJHTsRNJCKgPJFY727FVSwDXtfftPFtaKyNyFZzG",
  "key16": "37tGtt4NiP1T8a6PEYqPzrF7FDoyRynA5tWBDWVqTu3LEkhp7K98YcFtdQufEhd7joZFx4wSM1Aw5b4MGKaGbPVX",
  "key17": "2spdpAFjGMp73aGEi7vavtY4QwRHHGS5g4pqb7GCWWxXP3r6xJWeLdf5u11G5pJb27jD6t2hkEA28jY5QYLTQp1N",
  "key18": "4oRYtG1n6sjrJ7a9q85haKZCL7EbGbLJXS1sC2kkYjgkVYkdz1rr6NNg1L8UsZy3MVs4LPuJSAYEsexbn8SmvyeJ",
  "key19": "qWvrqDxwwHFZoGzEXuBDiB7RtK19BY1SUmoxppTs32nSispLJKALVnCWA8bY35JRwJWSRnkaVjsNGff7cqrT8LQ",
  "key20": "2FybwkHWzAqSvt1YPWkaBg2xCu4rhNCpryt5dJKG8yjrUezrqcDA7C8nx9ZvHuaz3XYMwU41Tr7aDzkhC2ZgqJwC",
  "key21": "4gf3V54MPVrBRs5wcqJK4vjrSkkSAaXTV6k5azyC3Jie3AspxgFWvRqEGREBPfswKZZKY5ku1mSRam8A6egW19f1",
  "key22": "3dfgi5HqqpDhdVX7aNjy1YWBqGPLtsgkhAm8iACNvfn2bPCSJLP46NN1BPHFFUumdvo7napB8EMU8NjpH6augtPa",
  "key23": "2PooyokiQ7By1XQT4Byxij5dnbkWDhcBGwU9U3Bw5z92orNonewwdRM9fd6NqvTa49FtVuGquCThr4BBYFQNwbDP",
  "key24": "43uDmYujjz3r5F5geV2ehC2MUfhjjD4G4me2gt2TypDEKTNeFAM2SW7Y174Lf3okoDNtYsno2EemDuiwyGkiZFYU",
  "key25": "2wKvJQPZh2Qh8Umnb6A7G1dUQb3AJaceBJdEtaHhpConG38DbpTeZDum7taiiTu6qQadZHuncsbQSHrLuz1sUbbZ",
  "key26": "3HsmXi3X9aHKLWr43tAP7bsteaQKxptd3JCGhBpRpTxNRWMhzyKM48qJ7gHReWweDhK2Y2v891jbr74VQnkJcgd2",
  "key27": "4yfDiJem2kQtkMJgkvWLw1z77tchcFZhYQTzChm6Xbcw2caygjmRQmwe9uL91yKyKp3UYH38uAYoLF9DR1VHMQHS",
  "key28": "5ZdPvCTrdRfgcFgeTixsq24HR2kN6UXxPxFymtXJuqM6ALRGyi3U5ubH1EDsJ9XSH4FV2hXPkJWCWLMMRmyfp1tN",
  "key29": "2a7Gagh3oKuHUpyW7VoNPQTeWA5i14AxCJ7ZWF4GvxLy53bekgwsXS4SfKXWHXyxp5QxBGrMGghv1NYCudgPKgCg",
  "key30": "3BAkY9qttvELL8wnKopadCeME7gZgEKK4ACPRwvXJuMhsVkVT6ToVq7sf5B2kaoDDeX5uYkSHUpcmiTP72a247e4",
  "key31": "32bEBLGARRQQ8h1UYgw2Fw4PYPC4b2Lq7Y61focmPCNwpq5UAy6VGUGHpsuiWqBqpaCKZjAZkUUepGsizqqNnQeg",
  "key32": "5AwY4JnX57drjKAUrWTjaRo6TV9CuRGZQm2Tk2T8UTQDFUgLcyxDDFHndw9JoyiP8Gtxn3NBD71Q5By2tg1LgiuQ",
  "key33": "5nyX9GYy9Fu8ZbVesCpFtNSrBKx9ToKNH8uWYoaN5qtfrXrmm3fHKRNKnRqTbgZEuUFPDbkmYK8PRWsDsJ75tPy4",
  "key34": "2xMfwQ1BSDQombKE3xEKY3nowgBdaSDmzBaz69DUJcYAF4w1qggo9thsZ9LNa6DarxsHGPrrB8xSC8d6mW6s4Quf",
  "key35": "18iEbM8qR3GWeKuLEnmVf3EA3KPtcryAVScSQvicmop9QZ6JAK9LKbD7xX78CXPPDQceisSTWYoD5HbUoN7deNS",
  "key36": "eTTb5TznozfPnKDqRCPTYDt2DHiDWzJzWh7fKpjxLV1VJWh5GY97E6phVbjhWsu1s9v5F25kac6Abp1zR9vWMd9"
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
