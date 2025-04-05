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
    "26xYFwJXrcvgHAiLs75oCjcYYgrjUZ1P7DmhBx9hQLMmSNKPjR9SmWL2TuZTG1FvxwBnwLE8GFvphdMXPLs2KW92"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RipLJpKtqZ1BrjXEtACzHiYf4KKPHHk5LCnaocyiac2PDzh8AudV7TtkvkP3iEF4Pj1MWdbicLKPe7R96mh3Cho",
  "key1": "5hu7xJS3338PrniQUa9AidkRhUkyq4RtTGapkuaaEiVatwWE46s1Hs3n33QgRHjjEg2HMMaVCWpgPzEqFrxnijWo",
  "key2": "2C8vZospxXAYd4FX932Bs34z3C8TesTtbU9N3kT1ttrfTNkDn7Tp5ZwJRpooLGFVwgRcLpf3LaFVwYLC5RrNBjEJ",
  "key3": "WQxUC1iVdvJR78x3aVudGzzxfPFChyA6tCk97mc4CQvbC8TBpw368J7ADxzUDQ9F4oyS8mbb68QBgq8vV8D39f4",
  "key4": "3KEt2ibxEmf4az9JASXYLGuqJYLQxhbMrxwW9NixiHCpqYADUCR5VyLYKerVeFtm2bunXbhWQ51V3RB8QyJe3gtn",
  "key5": "4W9PLbv7ehqHCAXkJMVPj3UF7oT2HSnwRRzRe5XPSHUMRSwjoB6mCs4PY9Ke5UmsktDwyp2MLGPJiAq41qTpFQgh",
  "key6": "62Hyb1whPed7J48gHeEM3N48rWiBqUqya9f2wuN95J2U2jCJFoVLjCZ3f6rqL47QeTBeXAAYTcHh439KsZcREzev",
  "key7": "4tb5kz7dnULQbYzG9cgAmfj7xHiqSrgEUfCRNLxVPtF9DCXQrZHCWPajRbH8zcAfGxVawB3RFcgoqd1VAUgRHjkD",
  "key8": "2zFbu9oCc7MJzFucXrSad3foumGjzvecpoCdxZBtbhWnm93UBBnarv63dRXTXDkd5rye9brFd8f53qbVsPUN5tDb",
  "key9": "4jrY3s9rcSG1Vfw3FewkWKgwoe1EP1QpSpdh9CXMEEq81D172VfyQuQLvidG9uKxp8HHgJmmnqdtL69zANyDK3fX",
  "key10": "2R8EbhhdkAZSwQ7hYvumKPK7VXvCfKpNdmM2AyH5Xz9Rodehyhiid7UMh8sYwkZ87AX6QmML1X2qksTbjAs84FoY",
  "key11": "14LGYY7uWGvwpDcVkooixJzt6r18pz9HBJHTpD8D3ob26fCbiCpErp3XALhcYX6fqUorhbPX6KPZTd8ZZKWg7D5",
  "key12": "5wMQp2zStsfnEFbC6m8CiVk7P1FJ2qDWEofP5T3goSUBtLhzdjMvbx7bE74jWPSbtpCC1BSkFYoQ5DNbuM15UuRB",
  "key13": "2CxKEPybAU2nnqjknfstwMbgNPnrYRAGENSMSk5snf7cg6CcU2rMveAPfrFGuJkvM7xyY9VoHRL89ZMR5aiy9Edm",
  "key14": "5MqowZpfqYWTFuk6CtPHpAVCUrhpdKABZcyiQnoF1Wu3adYW9dESaNFz1PTWwumQizNM3itbf8SH4x3cYjZqxypq",
  "key15": "44ut8EY6BjoH1CJTX4DZwFgQ8q6DcUKRuMyaB5rVkcDeQUYNXkyA7ncQ5Vyn9mhysk5DN5YbvAeLNmJ9HnuBHffq",
  "key16": "3aKBMe5c43qxDQcYGbc3cvopo5Zuz7HsNGtt6thgBygLLGiJMVLbC6DHJYFVYWmxAYWv7hfy3B5DsfXAuk5vPSd6",
  "key17": "3mpdG3fFsdpFUeBXbig8rXNN69jb7KeD4rxfdhzxGH4ZnZUEBYS9ivYoFz93836GQRoMotwMeFPo8WM2tmSAQ6k5",
  "key18": "49nF9iTDoqWaEFK2CJV3JzFXVZAKefHrbA4Du3mbcYQaCbnfheGRqZsAsQ31z5hyPhWcm1H2H42SPJfPhsDeQ5t1",
  "key19": "626ShPYuJy7AK5BKcnHsPm1nEFG39XeFMBFhTRcNSmpf5NFzFBp9Xc3bNKLxtgHsYGACX4FbV1SewYf9SgdgRuGS",
  "key20": "L7by1eSwqYCpzBYR2yoZbNctD8wNPzZBCQuzhVDHRQ4TqVFmr2snx5R8CUd8ott8UyQ8fbGuJKn392KjvgKbgdY",
  "key21": "31WZHHAWZiDCx7w78fBXXnj7tEvHGo6sJSbHAtBw8cFrhfRvteVTDfzordW4QrCxmYgsvLHizLSGAZokvGeVDrtu",
  "key22": "5v5vzgsmT28Sz82yz1iZkDYmGSy83p6pKFLr1Qs6DSuvKYuSANG55fQCm5CkhDuA7bTPMR3GVnDgArEwknda3PXW",
  "key23": "3WjRujfoALtpKunVC783TksQckXRvHF7YL5fR1k7YfcshPopXW2gYeGCsizwKejtcqG6D3E7AmkbDTgsDpDssvPc",
  "key24": "5H7gQjgv6bfmQEJL4eZGJR2npJoDHQGwVRhW77w9uS53ZVDsFskk1EPUWmzJdu6LEzJDxwbhKqPFa4tLfRvCdTw",
  "key25": "59fUuGiqM1DRcMVYFWwjcT6Ny6WY7EUR4muLhWzYhTYbm2MpWyoXVD6HyzRxiXD7WvZetHs9EDq7nDSY2Nd4t1hF",
  "key26": "5RFxsyywxSSYh7KDaSsB3b7yTFE2S3k3Zu88LSx4XSjs17it69cohnafdDRYvBBcX6ju9x2ihh546hTv6VFdGxFi",
  "key27": "3cS4wJ1fMtBoHqD2EKg9yProK5Vd7Lb324cvRAQkNzqHbuxZoRGCpsA4ZR2QX8oRi9ETZuvoHZSG7nsEtv5Rc4Ak",
  "key28": "2Z2pma76jTUUZ1wTEPVwqn4a3DuyPBs6fapAfSSNwqPYQfUT13YP6Uu8SFbKEqJ1Y7XhcaQojKMPyKRCwGNJegks",
  "key29": "5FrbueRZY27yGh2eyJ3okfBcxG463q6AspHoTDJuf62hrkJTc2rqe3pxUHy1tMMwTMUDzhVt5eZhpm6DMor8HkhK",
  "key30": "2wigNLC1JCJioAobxZ1AW9Zg9T4YB8D1QLGL5cnAboyyqSAArHM3cNWqQcEPfWNgfSTFxMbkphgCfrbLrTyVkBGP",
  "key31": "5o6fQs4CAQSqMhvfhznfCVCwyMvQCJPkkbqr7sZRKNPoZiM58zDsguQxo43YEuGaya33J6uFbxM4jBnbp1RBy4eX",
  "key32": "4wBVCRoKAHcoAcKVzvc9cJQD9Y8cG9CSZLdJqNyBPry6J3RWzkj3FxzEd5bkD6LSvdryEyEe2YkSFTh3mH3QAms1",
  "key33": "2u3J9JLwftFhtR7q51GS9M25w3t2rrpZjQ622bEA2rCLnTu1swWhyYXfkaPGHwWnWfC7vSSEeoPqBRRZVLdH9rn1",
  "key34": "5VJqKKMwmeZyxa1HnKMJNKnmr5LkLjX4uziLX4cEQ8Ts1RjKBNc8iWQ51sNmxR7XNvs9t9XchQMTonrENv9zAaPM",
  "key35": "4hhcY7wCNMbGswKs64599AWEe8nZAWgw9L9C6qxSebxDoTsemrxVtHhpXyrt1irMK2zVj7xdY17QEpgUzeFQYBCZ",
  "key36": "3pybX4UJ3gReJ9S3wbRLQgiZDkEcjX53xqyrHmeLNGKF8eTniXSqNJ5dW2GzPPLok5u52zQhWudr1oGXVzQRnPE3",
  "key37": "2nqtvC7NMjLiJi2RWf4SgqiodQ91BtyBVbU47nHesqigtoP1dNQ8Ee2cRjGPmwnAZP9VL2rNuP6F7r14po39jqzk",
  "key38": "5qk7myQx6XUgjxY4a2K8KiFpcQ4BVjW16Nt67zXWdX5grBdSTS9Q6c3TQqyzmEoUPrv6SrXwhdmnrVwina1VHYz7",
  "key39": "LrL8ozvqgmZw7RSqqHxwqby1g2tBB4NN3sKT9B1KbyXhGGtBEbAAgLhWGcsFc2FfJb2mjyigZgQr1D5w2Zsm1Le",
  "key40": "2BaN7iSiRPHYPUHdUHrAAvgA3VLSGTJ9n2GejqnJjStnHhD8RbnRdY7fav1TonUbSwqjg6q4qNx9Q1EdRkG91mie",
  "key41": "22Mx9ZkqduyU2vJFtteghhmBiLn4yS3799RGECXCmbB8bRRVnGt2MrDSZ4aCS774ZSxQWvNEZm49VNuFJsDpVYdb",
  "key42": "5BbcQMgbBupWiQyNZdauki5VZGGLeSb1qk51cxvYJrKGmzGVQy4ZQ4FCgZH4Fh2DqKsignn3AthhBK3vEV8bDQYg"
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
