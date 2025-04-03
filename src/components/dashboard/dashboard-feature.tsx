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
    "5LGQXTVqFuyR6sh9jmp7a3xBFvaEC7hzViSYDnn8xo7Ny4kYGojEV5MmxpqyLu59t45E7bAze5FTUeyoGonfXaus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xhj4VdvoEtFh2AewSxHKWfiCQ7iC97cBEntAYGsw7vGK2NLRFeuGisn5xKsQAhEpe1j6AgRuEEQ4sjyAreDn7pt",
  "key1": "siB5QcNbrLfDirFhhrsPCRNmACFisY1ckBtmhw6yNgFNJNkW98RK1dWeB7UrJMsZ9BVxsPd7BevmhYjL1TpWVfD",
  "key2": "ZPKjpYVBBN5DbNeSiPA7bNxDjgXgaYVQ5PrBP6reipgsppPQGRn6PoxStT4mTb9LRFHxMm1e2aA7fy1w4bjXWHu",
  "key3": "3LKMrsrEmco1boz3ixPXk8eiXo8gUUfKEQaLDCqPpeQA5JzzgB5vifER29w53f13TowmmFXjYCmq8BK8ARZ7q5UD",
  "key4": "t4uEvz4ubbqWByK6pTFJ77FEA8EaMw32x29A2hXifkAq9LdAnw5WfQu8DhyXxwqhwMheyTJnfbFz3G1wVR16g6p",
  "key5": "7WVtnbaV7xGYz2GoQjwxnArRHLJanbjJzBtTRDmEoWiSLtKcBNFjUZodv6sirdAf13DGkgRL7Pm6FkiwdQaXMYF",
  "key6": "Tysh33KFGNUHTpRrXGKN6VV2szNgwkhhHha4ku8YkjfRDRmgbVgs8vfhpo4wP5r3FPUSXs5RHK26gHk84A6yueu",
  "key7": "ZLa7cHxthHuKMnGCWFXaV6e3RDacPbvK21zbkWix6PmBbPge3FfF9u1Z2AFTkEHDCaqWAduwtoHygbZ6mD4Yj13",
  "key8": "4xdpYgB2mDq7fR3BtbSgqPSeSovXhR6HwNFBnzDrghFGKzhgh9Pn7q8ZaiecKWPocFFyCWDE8kwkGfTR94MmB851",
  "key9": "2jWAqFe1Q1dDupMxHxzceJxzttXArYkjp5QEhKhpogiqtoxyo5wmkkxeMPqPMswYfnsVi3RmXeFwB1xV2CzKUwS1",
  "key10": "yUQKD4722btKDemo5ma9Yacd5WUc1SkRDY573ineE4Wzs4bi2xbzCYUjAMH8krYNbwT7SppnBaN1oJjcnVMFodg",
  "key11": "2qKkkxrfy3XWNXmqqX16NNyFa73TqHRrCurEdW462hDpn7Vtf5znq6ECpSAUkqMJpAHt8cYjxQVPAjhtNHcoAQmF",
  "key12": "5wbJhg2q2YkV2y9dqs7RjNrw2rxX2L5ocmm5aKQWMuxtECpuQRD5SCrBpxJD9Wrxmt358d9k652irisT1JW2Db3a",
  "key13": "53xRivafBDm5qFLksTgkw3k1YUnun2W6TDMAKeewXU4gjGKgdiwLVcdAd47W7Do5RKrSWHoLsg3s6AGyYaJwDKyb",
  "key14": "VboZmCdH4NhDaBRo3uweeuvo74ghdXJ1twb4sxE3J1yhcCuD3Swi7DmYyCiDaV97u8y7RsTch4LUT5oWuKzRpRb",
  "key15": "2GquWexg6EWyXRYrmLA32DGUxE5tJY8ZRJyz5y9SsoSFpDPtCYZcEBqbeok42EJunemuwXb76ZhHZBNmh8qhWipW",
  "key16": "4i5Bo8pENdcQ7sfK66ThJ6SEKUokoUropYNjAxXEyeAQfpST8L6a9gdNPigLXwKZLa2zeWZa783dV6vgwBNCiEeB",
  "key17": "4MDbq6xeS32QeLPEGSPSXsZ1bpLdWT6xtDQQ8wD7eTQxhGBC935UyR7gKor1btgYMD7t2xFhkEKzFnWVNHMmpP2r",
  "key18": "54thHFp6tSJhA9fWF5WqNh7Rn2Fm3mzE5Kdq1Jn3Zwbeke1NFyR8SwschcXC5qK2c2vgvmVYEkhgydgnaVJcezJM",
  "key19": "2zCxAczSo76dszmaSHkNBUPVEzhzeWtSirRm7hPB1djQVUSZbwsppSRUHHY9Ut5v5zhQEnLnSrXaHDrkzY4HP7qP",
  "key20": "5ySdpQNAm3D6bXMrBZnbTUbuDvcaPpk66bnagzE95KMCm2ETm2ryVV3dfUGAK4CLenHB8SzPhm9A9w8soTWYx22k",
  "key21": "3txvUUcRkndpp2BxCCfzqAiFfPpFCyih7kc3SjKkFkqJoNCKK98bNMszMkxQ1vY2PwE1P2CiuWN64FuLoyYgWTpH",
  "key22": "3HMAzGmaYALudcG45vrZ6qTdFPq5hfk1kyWd83csvb5hEeYZ3H1vhC5SJ26eJXn7W9gMvZBppYtbYQUfMkKHeNKA",
  "key23": "2RDg65FUYkCLhn3EBm7JS6mfS3sk5TiSbzp5Y7EFwy2fCvW2JKa2p8ieMLGqV7VrBG24QsaS8a6pyDekqyAdVR6t",
  "key24": "2Vc5ojBCHHvEhgNjA7H3224ZrJEqjvuMg5krViuXxb6Lad3Sa9KtPefZepabFACBDVNJF7XehS63SvdLFDfzyLhM"
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
