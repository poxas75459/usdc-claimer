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
    "4kwubAJy8gnCru2KnYKHtd6hrjXTqAVuQc9V49b9KfxyZ7XgMPNBDfdsBHuhJwUv4NCJ19xpF1PjHYaxhX6E7Qii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LDDXJrBfn4rsWFvhZYxzScqEMtC2eBzRamKcnV9XJXiusySKM9LTjxvt1aNfLjmECBMPRUHAcSTJmMbYv56PpMv",
  "key1": "4pdEGDLMSqHTU3FZg1HJgDG7jvakB1cfY9Ccxa6xAA7K4wMSPMtRiFHh8XaDiJhBrkSi8dgwJviVAoHHGE1rzMdq",
  "key2": "3ZRvabuFueUBVZvuwaKvdqLx24xJGuWakR93UYfT7ES4MtjS9JBsKZMA3AdciP59WgJKZCuP8QBvNe2ix6XRjREq",
  "key3": "3Jo4Wq9Cb1f9xFFG1zGGEHLc8y5H5QwFRvN3rJ27ydhXNgxRL5LnraYLZ8M75f12VSZcSVz32PUUN7nmTFm53K3x",
  "key4": "5B3YiAFY3uonisrogbe1BPadJnHbZPQB6DgHcMzqKwxMsTA8jD5YdQwNfZYtpNqkV3UDJBHDNwYzZP31g5AZn3jC",
  "key5": "jTiLNLfDMCbMT8WENFfE1LE1YP8QQoheV5HnHYPX84pmCcp6vdHUeDAPAGaSMj88Dbbw93vfPGpUfPuUuqzf1Jj",
  "key6": "4JJUb4gb3fBfLtUQdr5mdbQCvqLcmeNQq7kkwsyp1xuqBC6Q16k7sFtYSpKdGrpipAxjdtkemzuKqKegGfH7Wqc2",
  "key7": "2Wu4P6cfJF83M2H29jJaw8k9SXcE7d1vUhvdtX663dgvjX9yc3MVYexAcYpqbVpsj8qm8h4nEgEM1AUaw11ADmtR",
  "key8": "yEP6bAFnEymE2nLM7Zq5q228Ai5hNMFhYGSa3gMM1hVndbdgTrfsvRgvjGNvvMeUW16ksjnRu9xaZPNvtHPbpov",
  "key9": "25fHEuErnPJ4tDxqUMCZjgN2qtJSLb2GpTvF8pvMTfMRF4XmMbmmS1BvztojJ6S8Gz6QsoCTtUSbiAyuJFVPNbpu",
  "key10": "4YFB4cdMGUwRe1ZmHPtqxSzWZedE8mdwebedsMJKMHkr2BnrqYPeHrops1NCLtE4WPGgLBSxnZv2GoesFuimkE7J",
  "key11": "57qrjtRe65ua571mk4ER4EmZfnT6C7228tGzTTxqXRfz91w8oTg2ZTQnTgkHJTjjTcWdmPQsnberRqaTqWJ9bnhV",
  "key12": "vKEpRjpjSCnHPSnRKvDkZqGpCFZefyeANMoWpqFcbmztBk3fUfWgEG5FgRdVPoiPGyauBvQPUNewXZSEZ2sYgfS",
  "key13": "4BgCV4eWUaaW6zDPm1Xo1Ae9HAHEN3buvt4sMFPMMM3RRiMXb9nAyBp9FB4W8V3GXVdN1CSkNSPqtmcKz5CbTUf6",
  "key14": "3CHfT9L9fMpnnzFXvPVxH1LgSD9kZj74xJuEkh6uXpsiaWdApthTV5XsggaaoMo2Ciwk8XK2hvxg6ixBM5pRmZyp",
  "key15": "prr4zmHZ6BfJ3cS4Vu4eAc5utA7pkTacZmKMrxAHJce5ucYgURTnew2N7NpL8MWRicatB4GfhDyEkrjYnej82jf",
  "key16": "2T9JEBPS3dzu7M5SV29gj4dYuQvkkmnJBGFjP8vLFL2SMRvWWkHkR5Prnudi35Qvf6ELkS53vxXvguQfCabrpdc7",
  "key17": "2DxKQcRTLSguLxmdmGJdPWjnkSF5vDtDfnbBMEZ8w6Y4nU3httzpcgY5BQzb9RCDhHw1uf4tDLHLBz62uLeHvhba",
  "key18": "2WMZ5N7s893niLrYEg55FVMCpcw9HxbFcx446rSRYecQyqPRpMPEGFPo3Q9PAuQsVtN39wJMeNCKjGjXP4XEQTm",
  "key19": "4WoTMFyoeHrKe6fX49Ah8cBcbXraz56UVxFMuRuXUzq2PeHq9Aq7MKKYKeaQpXcwDSERCCxyTqgifW5nUTiQiuRN",
  "key20": "4LWH2icQPr69dx5duppc1QA6LR6tvkU15BRYSSexHu1z176JjQvsvf2Qu3SUTJ8DNJGih7riow8KKn7BUyQZa2RZ",
  "key21": "NKDbq2hV5dzdfCriV1wvo9QQdH5t5MeMhMukREeEtxAdpSqmArTgr1SAY7qeE6vEb3u9qUrfj8i8y8YHiuE66Vc",
  "key22": "48vXgqh8aFYpRL79scNNXbN1yZH1QLRqAPff7PSbFgyRaZsiYmiqpVupfX8rJsccf6VS6zA17dT3fyJL5sq4Bw2t",
  "key23": "5eWSbhhXSNBhVcwRq4Y8zyCZnH4EiWPi7dyeHp4f9PdFjN7wupzgDXZPKKzwmN6mgnecubY1LU1351UVk5n7bChh",
  "key24": "65roCPJqTAhgMYBdbZF9Nipa5Q13BioJ1AfkrdzNSDrUZzUNfPHkLaEzAzgMQSSNuh1JcGsA3f435hTcdZdSnNe4",
  "key25": "4BdcPJ9cNaMFKACFEt3efKgutWpK39nC1nX7PoXVaLE18C8xMzgNs6JC4CbQnQEwy5ST1DJyMxrfiNYq2Q4nnFDj",
  "key26": "5cHjHXVFHYmbpUc8XuxArb21fNDF6bQxCSmuMbrGddmLAD2Cugomf6YxiL9mWsoHK9CDwyNSWBo12BnUjurd3nUr",
  "key27": "2zdyJxaj81eWzQw1ZKjQnAKpypgZ2DKWKXmfW1w5UNgkFRWRCAwhbn8UNKNetSRHDa5dEW5VjReFLjANCu1TYhYm"
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
