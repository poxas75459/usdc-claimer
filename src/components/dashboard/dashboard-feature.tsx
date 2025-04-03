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
    "4DDosgGcUiEVg77wQBkKApJSZm6rcxibRskhv8myng4Aer2xjdSkCV9Az5ccoddqRD6WEYG5GerYyi3o8LPL7VGa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZnpgKdws7BmNzrz8zG611H8EDNEoNZRccGRwiR4UAhCtfzDjckzHvPDrCRiUGiFoFCjddzuRGjjYVm8Yj2AK1ns",
  "key1": "65jwgV41NVyK6TS45Bx3VHbx5zE4s3L8RG3khufGg85tjFbp3xY2bUgfvuekXkQXzS6hKED7BawVRx8ncyEsWPsA",
  "key2": "3HXsXznNyamVPUfEsNxBgLiLAFJ185cMk14KpW2E7EGeW6jtftXEypyUgueUASU5HzeaFP6Kj1MEWDqsgBVShGVi",
  "key3": "4HUDFCupGFir8d7BLbexEprS3HxsrtzfmtMKYpyuqXiEGVPwBgXhquS5KgSbMJwtCDNRFZapdQExGoyroVrS4pcU",
  "key4": "i1jvxu7PPSDKprsiF3pyPBFS8KuDncdqTo1U1GHFcSXiDbY4UmfJEELyDE2FxiHSdJerqWDnzTJ2eYvcorEsSEq",
  "key5": "2mpYXiFnCEGbf52saHShdz7j6PagWec6bUpsZvtmtc5HdxYtY5DpEX3cW9b9aUzQUhxePCBrtcN1mqNWiPtLYKVn",
  "key6": "2AnA7khCVM3eLsCL7uL1rQdaUN9KNYmnoQaVnN5RcDKb8pXB7Nbndo2uR5gq834JQqP9mAf9t2mgSfaPXvmHBtNa",
  "key7": "3t5rXsT5QSFB9uym5bx4sHEp2wQo7BUWkqRNsrPEssFD3Hg83hS7GUtNbwfhKabfMG5iWu7L1C1so2D3n99anobV",
  "key8": "2FSG58eKRmiCccRPLJjmso2JprvsU8dNa9zD1kPX5SrEGsFcEq8r7cCc6bSXW6623W6s5kGhrYauA7m7Wx4ZXMkd",
  "key9": "3uGwZ5ddogzefyzY3YGmfnS6Ey7thKUNkSWahyHrZZ9c7wPRxF2Tyif8XacMCEbaY5pQHEwynpiPikQfu8WaeqFo",
  "key10": "jo3VBU5YazVcGZAkjq3DGgbErH7nxDVqf2tbtHaD3BxccDPvnbpEvHtuMwHDDEetKpA6mFWh9enrBGku8JKJjiz",
  "key11": "2pVYchoPR8CxgPZzbCMoEaJyBLWiqqkRvkPq1qUU4EMd5Lvzx448UdmPDfkiePHp3WksMq8LGvJVwymiuviTAkdf",
  "key12": "3YzS3M2dNtZvyRsuuTJ2WxRn1EzK1ZfF9YdahXPzfAhCmfpT83RpmVGmVTpMKiwMGoRDLAMt2zWkBtExtmreMciP",
  "key13": "5UnJdk2bsJixi53iBXD3H8f7DcCoWqBtTkQPGALD5rk3SmE8XfM49qqzTcnpBR1NgLz5kH1knh1i4kKUMS7sBGRC",
  "key14": "2qhS5BQBkS2XJ95NZJMNdJAH9Fi6UwVdRwirzoe3e26kt8D5CtaD2Er68yYChXcKL8TGHG5VLDiXN7C2dNi279MT",
  "key15": "AbQbEhUmN4aXbnAqJoPnhR6HTGh2TiwsN6w1NokBUgtbxo46Xg59BiGSSNNzDVTK1wo6CG825qQJb8C7PrcXwxD",
  "key16": "41TGb3McNHhbv3FSyfTQVCN9p5PPfbZxBbWrnpLzmGKmszsSvApQT8nNRMX8tNkb9EU9wuaGAurQTLj9py4meYKb",
  "key17": "23NZAXPe3Nqhro1JCgdvyXM87wvzL5RFbzrxj1qYTWxHWMVxWBN53qBxQMGDcVLAbPEdwzHgoZoFpRdNBLBzQbrE",
  "key18": "5AgTNbteD2aRjF2DSawnZNX7LqJeE1mqgEU2scuka4BfGtYvP255rpUAtZEzpg2BWb9pkjzGjkbri2LY2ZsWsX66",
  "key19": "46QuXV7U1YUDBiqLVKro2VTqPwn7VQcx7cn5VBxko9aaBsRJLSmDAge4neccbHBVVodMAwhHqXB613vfCn5ozSTC",
  "key20": "4M2EZ5eh9JaCsRmMueaHg4mYcUHzRxrdH5BGtmEWh51HaFAuszChE2kdZEwqK4DtUM3LZmB6THAAo5JWUr9CbidJ",
  "key21": "36yjybjqmK5VmmQcEX6vFtHoFUXMUFgMKVQoyXWukzY1DSK7oBsmdbcGbYknofWiWP8LNU3hFLev4eCDdQ7uNm1S",
  "key22": "23iXFap1m4Lv2f4zQzYjoHTnBxJwRSYXTmHeXxg1MTEZca1MwpHoZVkbfW4zHdzG36pxQoe97E5XifYXgPAe9mcn",
  "key23": "4XntMMkAoxaZzSLB9L7Car6QeLALd5ZN2asmicxUnXtBsCzmmpF9BFk8xEWxTiz5JyU95zPQEU9k4VuvPMFCo6ZT",
  "key24": "5PZRM849LxgxFtfaTvgEVxZ56cfwVNQ9bDGkGcyxcZCskjVM9oq4ZJJGkWJenD9SqVRpkPEQu9gDVQbUnk8uvzmh",
  "key25": "5FhCdYoXc5pRDXsBWPxNQ4216NDGzU4T6qZ9oivpr4v6Tn8DzXsXmYxojGAAADVDWUtnztgSgTmPA9ScoLFaBHfH",
  "key26": "2XZ4XpdQASAV4svKFu42x43JZAyyAoJpqsMcSxkL6xjuNxXeqc1ME9qdChPftsoS4HYJJ3pqDFvEHQpE37xdNx7m",
  "key27": "5n2nwvq2xbKSw12juXULhCXL37G23vhPpe9KDSxyqddxomdHGKFt3k3KsWVGxA6f6CbZjDRV6mLUtWVjmzVid9v1",
  "key28": "3iyB3bpJYdy6DcjZWQSydet9MgmAvB953kwKQ89R2TtUv94mzgRaNKc3dehKUx2gQy9zZWMAw3ZpquRXzEEEwVUK",
  "key29": "2Ui3r8ERjgpxyz1yrn1qtyWnuuhuRxQcPd4m9Vo2oPGfZb1q5eQVnfgUjsP4ydXaBKmWYeFBfFvw9PwbUB5knGkS",
  "key30": "2SWYi2YYswXVteFX25htjKuNTrQuBNXvbW3BmRcUdfDmFiWV8bnuxGAX1ABZdm3W1jMDWtWAtQAPznctRb1nfc5T",
  "key31": "5Qs6XtAV88yVM1ZhkNC4HGt8LcZ3wSkfBQJYuYYXuti9ehbS3qKmviAPMy9z4YBcf2H6q2sVViDWBWvN5yMsPF6R",
  "key32": "3UUQ4cn8p99aDqLryKBVWbbGbdxgNQcPamkdDmq69koTNmXRTGbpozbKTos1hpu9Kyhc77dFZfkbyWbSDXi7AU7N",
  "key33": "BCPipnb2tuMwk8cCmWxyvP6Z6SZvDmZAiGxF24VcGb3Ln9jeFgeRA3RwLw8iETccdeFAEyhFrqKS3jeX64esqAU"
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
