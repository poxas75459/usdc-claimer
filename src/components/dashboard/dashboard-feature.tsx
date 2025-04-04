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
    "8PWGveEmVYwg54oPG2pm9j5JskD5STEx4xuMsPwNRS88jw4p6uJ6MKGfz3awRrAy3ZiwE6PaCSRFjxES2za1G1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55fKmvL6aKaKfnjS2gEr3geR234unqAnqBTsK8LBLqw54ppQyTwZ5FWqucg6FeMhT2eESPdCBrduXs65jQ2vy2wK",
  "key1": "5v6fcZxhDZCFN37SrseLrCHv6qsM15ynU2QqidZBDKck5bpeAF6QjSBrkX3gyhPubWTE1U3o8v6sM3e8F1WVSbjJ",
  "key2": "5kmuF6ThsW4XXYuXF35ZBChqoRG4wWv54WmgqSLtnkMvYmF36uoPDkBZGDjkgzSFWYM2zFKdFeNsPsrk5LZ9usgY",
  "key3": "4ZChiPJDUxdqEckT48d4qSZyE7o3XMDdCvn3cHu4rouTTWGXszWKVbffVACr3B4rAVjddDY2GXXpAQFnh9iDkcai",
  "key4": "VCTKMmPXhhwxcCPqmJXr3Suh6fjhtSn1App4pCGzX7MLNyjEUN5pTQjXgggkXa4HcfHK2LyShWFwhtACCw5Vc8p",
  "key5": "ykFQRRG1S3zepfkYf3TeNPduT8LdbQ6oH4bkv9px5E9Sxj5C54BAw4n6hC8ecbNQGvpKNs3kRYwAbFetKnUJ4e3",
  "key6": "4nEFsBYCexHiNK2UgKSatt72dnUiX9Q1kUmTaz9CABkrfiW5z2VxjWhGUthn5LW6NTeZ3cfYhfgXKteCj9rG3ope",
  "key7": "4MsGQrpBNG8WG5fnG2E6SkZai3zujPf4KRE5QqerpC6i4qS9UvBimzsuWgigtmfhswtA38dZZpbszJFmcCgaM4Fy",
  "key8": "5nWyPg4CmyHKbbL5L7zDswUmc6X3eNq3UZ4qW2Nq1QXSXcLwsSux2wHws2pgymdsp2imshs4xq8c16vTmXTd8yEk",
  "key9": "53e1bpYF1oSm9XNMQPixmyjGSF5tMnspjgjKjjkp9QSd54GQvpxGPtPGhMS1GoiKXsqZz794MXHgc1wqtFFExGzR",
  "key10": "3B3pH2KcUu3L7YUaQePNc2PsMuKY71unhRvDdyb58nBwwsnq3inGq2g9vKzXCd5PBnuDR9LSTdMxaXYwe9x7GSeP",
  "key11": "4ZtrjbcQrkNhmJezaBhreBA226mThQd8LAvqtKRGCXinzPRXMPvT6P519NcGu9VNNYWWdqJNJoMjidgvVmB51bcp",
  "key12": "2sbNCzbw7nJUbKddb7xaWsDcFePgXRqKEQbY5Bvz1PgEE6CfkR5QWCSPBfNq7cg3K3Hc3zSJ2vZuBzDxLhmCN6Hs",
  "key13": "2Xjfv8eUp1s7YKRMVSLpQ6N4rZvrQgFbEn1WdP4dBifwgVBVi1JHSsArhQTaWpyKYQENu3TWCsPFEhqpDFteuPuv",
  "key14": "H7gPt7gfAqP4tL2frGbNvCErZMCSP6CyM5VAbzyLdDQh4mBwTFLqsoz1Auak5PMfVb39fucNsds7zsvag6pEiHE",
  "key15": "3X1rqCUCd9JAsNEGp4VoVhSy2UiofC5jM3Y5A3AnB9HZzCPaqTuLXSFKBe6vkvuSp6iNaxTYXwZfoDfpD5uiDViU",
  "key16": "2B1kdmDskgjoQRyeshw3Y7B1WJVzqkwiq4mF7n675EV6FdZ6bXpZ6FkJJ164CqFRqvy9Gfiz2iejx6177sRpBHyB",
  "key17": "5JaSi3aJpXUieSeKwhxxG66Ce33zbfveqtwRrrPLkW3NYhTuJXziXYc8XZs5FNTNi4ehAysibjEyy1Z2iFUKhgXq",
  "key18": "2PsyeDprXmyhvpjUz3cHHmc5QXNrDhRASfRDzWjuAfWtWnxtaSwRYn6DEpHbFssSJmfFVU3Nah8gqMwKdxfHuSfp",
  "key19": "61PS3uECNnvDeoHDve7sKX6jL64zUWo5rh7R8vqMtiQffh8gQsB23p8tWGg4qVDpqUbWBFhtsg5Qqs2T6BPktCcF",
  "key20": "3WwtnhjUSTv6sfbJt3sL4Ash9pGd1JRfGViJ3SmDuKV11y7JVjunn6SjC3jbzfRptCLDHiQL5ALT4aAejAA3A5Ga",
  "key21": "4KFBDNu5uJiwvRfPcAbjv96gfpL6BGRCdqx46oyFDWaD4SLAX1os3UxFvT9zQsjFbDDr7BsLhK2xZBvn26Ytaxa9",
  "key22": "KSRgATpbsJdnzfJcMtNbnoDq2pvqxG5TPU9wMi127bRYciBbhFqHL2BZQioyX7CyBVFzuqCpZ8U6k3uAVttZthr",
  "key23": "5CQs2hryE1saozth9aJQU3PJuRFB4e6JyWeNc3WMunUfaDrs2zMcW1L1iZ2Kb4cZDKWECs64EYnApqTmmMqmNYxM",
  "key24": "3B8TS2tHVncjHwor9XAaqw11WptU5YnbuiBZPpRPCMEt7WgecfAWTJMmBeAyFs64R52yJmuVEfZZa6eZAm28mCzN",
  "key25": "413bS27PZ8B6mnT3cWdHvf6ZximKER8sU6pasXeNyfJsRVTjSZV7nCUXd7xqZ79NcabpHhU7XC2KL9ii4cTDA5xY",
  "key26": "2oTdk7Hu4kXi3DqrN9KV5JM4WKRrdS5BqizHAWUCGFw8qxgiaC5kCvu7UoexEVmn9MPJKStFHozcd3pgAbCNdcYK",
  "key27": "4mXkBC1Sc7PXWq8FTXooWWETh1rJ9gFPhTeVoWipqUFZsEJs7U1Xad9GPpuoPSR2uxA42ZDEVzGcv1JXV2LaiFGG",
  "key28": "3Cbft6p2wynsBxQukvrJKwxEmZYrcBn5kh5UY1nN4Ssqpvekxfx5jEBG3BeAi4DsLd3mFS5tH9M1UAYy8u2sMGnH",
  "key29": "f8NaFYMQTx7pPcwaGkYfedUHXEVApuZawpbdG9K5mSLMebaapZNRfdqDUm8vdGzgJ8ZEWuHWAgzgyvB6xnCoSQy",
  "key30": "4VwcmegKA3ip9uV8TSnMtaqGeCuZBFXiPk5TzYvSsqBHswjo4eQYHC4tUtYEmN36q7Cp7cUv9Z8mJFhKYZkqS5oD"
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
