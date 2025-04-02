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
    "2oXsPHPduBEBSCjchPhCbwvPyikXAK15dpTYAYgsyNQv13GHbYz4Vxi11tzB4owErbXvNbjHbeuw4eqaZiwhtSoh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JLBySsgdcCQLhb98xygTciRJRQFsg3DZTEM46p4Kzo7hMm93Tg3X1AcdRTyN5gXZviu5hDCL6Fdrdf4rLFZdzfJ",
  "key1": "653mXRDPr1BHto1GxaqvTnzcEjwyXvD2ivoqPAGzyFUxnYrT4j1bW4RM8kCgf2x3QMxT1fckt6gfyGUY3f9yktb5",
  "key2": "3PaP5gXq6swk7UFKrDF9K91dj4gayx3sWMJktmCoxVpXSqywCWRhh4F1RuNaXCq4ZegjuQrd8y98xCARFUKzU7Qg",
  "key3": "2ykxuwWXGzgaJrLejBfaVby4HyADoGTKy6b62GftRD1mchNbMyiK2Y3whywovBnG6e9crXMc49tKuFuZPTUiM7Bd",
  "key4": "5kFYtFCw3NGZUJ7Dw1sxXsEm3YBGnaZo7FLvBVqzSTFvFFB4GgvBPCkANAWYgtbEraoz7a7uMvvtk6Ms3vBBnFwb",
  "key5": "LhrqwhXSRWvWorKDws2aU3UjghxRovqS61tiUgXMRhhbcuiKGgRtV2V9NcpQbsXw8HTBUuU4AMjrn3z6xg6CecG",
  "key6": "3CMqzrB7s8oHeQsgqH7eVCnFv55w2HAYaS2CjjcCK6yMcC5L4sg5UY8YQbYBWbH9NUSxyqLA1qaassbrFHESYKNh",
  "key7": "25yhHBHTe8VJGZbsJxxBK1SZ1gGzE7T48FD91WZGXhKRnwugmxfuS3FAwijeTh4orvxyUgbRyUnM44paWz5Q8uQh",
  "key8": "DCvdcPVLXQiJc6B5dJT4u46HMDMdnoePFfhUMGixcSW3XTG8RUsXnPCWbtDsWC2SNERGM5zacnTnhPXwM8ddDan",
  "key9": "LT54CTKHYsdJkyg77RJr1PFJ2t8Udu4u9YG3W9Dtetpbw9eDrtmAbLqju7oNrvgvnb4fGtfkK8EuVk3g57zFBrR",
  "key10": "31evgh9g9oVNcjP3vEYUACSvk1JYUSwEqPLSg1FEVAfkUireMD8ta1e2GXuxoYKFwzpmKCqFUPbTe6FdV4WezpjA",
  "key11": "3p8DUCqFMbuj71ffoYLoHYf4BHuDx2hYzxA5CmkMZQGcJL8qZxXuJPYnNa6CPzkzziqndWX8LFcnTH7L4D9f31jh",
  "key12": "4rM3wiRsMZbxibuwMYyZCDCnHy4bESCPXf1JZhTmLcXgrkRJgFyn4KJJWZvfsPXSg65WBjxBym9PSkpq7iGorKzJ",
  "key13": "4dP96Mv69kao7rbkMozCtrPsf6pc2RbCYw1GnjeLbvpdPCyr6CTSGhaj6UdSsTWAndGhJjk2DfyLbb9nrqMgBZSJ",
  "key14": "24ypw2r9JNYFaBs6mhKZ3b6HnvE4T67V89ACzxdYc9hfcJnCJrqinPgutF8pWSj8C5gNTZUU7PVs9TrzNTbKtELX",
  "key15": "3Z3RHahX6heH9EvTV3U89311bcrFSF7YLq4bX5GiCDHdHY9B3zEGGYV3kmuSpFxZq1wTfTG7yw8EcjZMbsLxRVBg",
  "key16": "ETKjazwJBt6rhHP88DQ9HVPPchjg3DFFSKaA4rxJgPVCupzCSVugWk8pwYDw6TV3Gr3jxZksXQBUGNkcWLri5RH",
  "key17": "4qPbboN3F7zoSnS3ZGog5X2s16SBZAwsxyMPTQRocsq33wyJA7tM84c2eh2vgx5NPi4VRH7q4PAAwnANZ9kzDsKo",
  "key18": "5Vfjxrpn7fK7W2dFRjXfZiYjaPH51Qt2SzCZgWpRsHNkZTDDgj5ur3ach9rpGkEkXVPgsm5sg8h32nhytaUZbiJX",
  "key19": "5U23aCZs3xpx5mVqsKGaiXN15brABzfD5F2dQvdmSMxqTWd5BZDZj9xeiXCpK68ky7XuJHC9Lb6okVLhLtrzJEAY",
  "key20": "4GY1jZPSbS2t55spLZYXyaFVc5TmBLMhEtoGuv837NwCs1FQvR7ABRKH9bwVMJB8Ve8EW6rjGqhsNmchpSSD97KB",
  "key21": "54i3EEd4zhbsXzicND61vNbiYZPsL1Br619JptyTRUwLxVX9x66o785FkZY1xbNxaw3Gy21iTfKY5KqMxUgukMQG",
  "key22": "9vhtNwm3hysZ4DjMHFgPkKdobZG9yoEzfMEqwf7oSPYurswkVXRNMDVRhit69atEjqqnGR3rDyrLhzY86tdsvcv",
  "key23": "47MemvUsurAchfx4451N8CmchPXavT4BAPVvUBn3doGQfpcrqUjQgFYa6jM7LULM7HrvBhm92YTY2EVP53d2myJb",
  "key24": "4QHjHs7VaafKZLdbudwB1qTLBfdwaocehv1M5JbuNK5iXczykyjR81etRErLTpP7RfAvUeEsgqtnYGFYzZREjwy5",
  "key25": "5oiYrC43dHjLHf6iScb4sFaWrTQ24VUCX1qnZuXrLFEhmogmQx6PDXXsSnRszz1H4CzD2bc1HJ2DgxBDMiic3295",
  "key26": "KgBk8ZQuj2prF7mhbPLGEZiYv6UrhPeXUqPA4NpVUxuQC6MzgegBDQM8vsuADHXWAhdEckcRUWG2b8Js1EvCuvZ",
  "key27": "5rieExS7DxgHt24YdCNHKC7RfW8BTQX151rKY2oFkUjTNUZTUmSafFp4NQbTCoVeQtBTbtV7oVKs8kbMRStouUZ3",
  "key28": "5SMeSsJA8TwDetK85qUgqaPrBhN1iUj2DkxoZUXfHdwTHvmyLTXydXhigZgMUiiPBARBUQePwRCe1czNPPKCb8xa"
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
