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
    "5ypVR9gR694BF72FdhF4BVkfckhQiaSnVryLPRXT39d1gq43KSEuq3pSTBG3jEBXofnX5VvYsRwGLkHrqZ7HseCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fe2K9Fz21xeoZ9wtADFbZHkFhWLo7neyk6UeGXmgtPgCEMJSRYrbwzabhbbYr8XWbzQqaoQ6pyvx3NirwL6jTCw",
  "key1": "5wf84gREcqmno89pd4FipNSeVSVrUJi8hmbPXKM6UGPVe1FA25F7ZPjMX5GSf5SHthW2Mrc2Ko9LGw6PVXE6NyNZ",
  "key2": "34xD3GggmdadkH78ksPwhqddPdYZTwGQQnnRyjLdAPZBdWbH4XwCuKTSiDwfJh1M57DsWeC1tzhbwn3MjXUSvWLo",
  "key3": "qynmsqohe1DQVZHx9fXEr7Xk2cSUZe41H8hAZyGfmR8VEgnRnq52mWgH77A61jkdJs8UokTg59RrmByAr69yfeD",
  "key4": "428jm1BhskqouovSzPYDsDE4srrXpEU2cxgaBMR33Nn2hPrge3u1K2Cxki4onf94EWr1vGzxFs7XTX9cHNsLdrGX",
  "key5": "hWg5N941zyFgTW85Lykmtxye4TptpE8RJk84MN84i5CmPKddE5UuT5BFdZf433CpThEqfmfajNc4k73gHBi5S97",
  "key6": "5ZysUGfJXgYJthmtVqV55UVEyuNEvyA8bdU3g5u3pGTQhDNkbBv2WgdkfY4otGuyN3foShaQA8wx113rzhYkFVAe",
  "key7": "p7sC8GgXe1NTfFsWentAzJPmo5iU4g3YPRC7iY6vcGPpKq9ZG52b8q94sEWFizDHXnmX8M4aeNpjqKhdDLNDXX2",
  "key8": "64wPAHUZdabR4uzMKivxYsTuXrsgKBtUqwuskratR42iMHPU5stmqg4hmseZYvAdrB4WXyBGGD89BeCbGQWiFph8",
  "key9": "3j3K3RgVMdmWDnR2S3iQSEcs2XDwF6FUiRew4WLybwVNua9euDcZCHDeTYif69RyY2U2PBxqNdQdbDz5GXKqjTNg",
  "key10": "478w7W12ZrirY7aLKUCYPz5Js7WHJrwcWnfkraGCDXrPFV9eCghkTKiNs8TBiBApMdctFXLSqYEKrXe3H7xdi1JG",
  "key11": "n8v3wKhcQQBDp7dtk2bhBgvz7xETbpp9XDVjVRf5HWU3nn2Cy8g1w6aV5xcFRPB5Rw7nhwiqLLediUgKDKQARrV",
  "key12": "4GYkvtB5LtDgT9qZv3TPZB3YjTxkDZt9QUhjR5i2Ne6nUhp8GT6wDm3xwH9ta2X9kXLwQzo4TpkXCXmPwtZbu3zv",
  "key13": "4Sm9hzUorxBc6VPDvPqtohrcxo6TdwvsYNAVpezsPSVVQG8oKUNVkEVonCFNTRHChK1DSkGYLVRLwrGfWhPgwiYx",
  "key14": "r6fKLimUk1CeSmWsKmktJmnmysfTJZ5Yxrt7Vq4zWBaMHFWFMvxkwu3WsFxpDNTU9NmX7ts92rfeZs4fYUoLj1F",
  "key15": "3nonBkThd6H3ff3ZoYKbWVQyyi2nS8ztoMhWAjb7oD6HJNTve32ycgQ42dERK7KvoeFva2K7atRR1gjpNJ9RVYJj",
  "key16": "4RMNG5MndB33w9UkJqe3T3BMBZHv2ANSFupeAmKHL6wDcunJuA29GBqdVUUR85qC383mKtLvxNuLmbWHeFV5cYiN",
  "key17": "4SUEB21nw8tQz5fWRmbbrFYhqMQXWCRRpA6zrnxPsR8VJowqduqjDSuER8X2GphVBkA8yjUwogJdnK6UDpFDSWyr",
  "key18": "5uuMGu2Go8BBeU9di4ZUXxYZ1xWNq2sr2WYx2LZokj5F2wRjjVCeA6c3jDGSb1dTPDEBsMAAXg3sZUQvkWq5qAam",
  "key19": "9DKdV4SzDkjMkexsHfsmnmcm4YBGshKntmPZKgtfK8ywENRdfk1fYmU3cHFuyxCQbFFXU13H66d6QMqm5RV8aSE",
  "key20": "4c1RuFwsT8k6fiGLAuAvo2PqMmLK2vsRd1L9k9s8LKu6NqhLLUYvpSYULZcARHyseC4thTey5G1eEBvnAU1PZtbk",
  "key21": "2HogfMVbB6Gj5F9sMKUwBdiJUrCfsQEbaCT4Zsb5vYRHdEfAVzT4BwL9ikKYGjhpHp1SkvHY65SwQ5qheQW2kCMr",
  "key22": "55uTH4JcxdATquMrzUdxLjMeP5hGDzf1rx355EBL1N34NfTfG7JBuFuwhA6DAt3KmSmoc6SxNq8idMh7fGAsDRqy",
  "key23": "5Shsajq71vqD9vVsxWUJrJFx7xH58wCTbAipkieTCwhJy5BrMoYhGhYbgN5XNPzjsooNPxmPjLt8xqzhHsZnqp6E",
  "key24": "5Qk4JojRAfvRGeq1PwnrC93JdUxwPxC5b2o15vi6qrwz1PX3ZPSLeQwY1QE4GUnGvDmonbjvrUJzo94iE3U2Zgyt",
  "key25": "3hSUSBEMc2eJAXoML2pETMFVwzuMGNPfjpgJ5ce7JXdQxka2ezdRCnURA5sQ3GSPAfoaBXpa9bkotznjkSZoskSD",
  "key26": "4nEy1PTDQVrBZco9co6GtEQ7xnYz2VT5vUwFPUzyiqEVpmhwtbf3ubCBnKreUj1Pjt7ovrZdWhR1gp5cCRNFs1oS",
  "key27": "315edgYfe8jV9XjCdYTrsXjNzJXum2pNCvccGWD42AYHW8FRvnKNX6zsNaBFTdKzfYvL5WJ5L9oyVVhqKM4pz9BJ",
  "key28": "eAkRDNmyFNVCnxYHXHGKk2gV4qxKvz2LxwmZfChX42Fj7Hxn3Zprhk1TCmXMCXDUDpwtJRu43axNPX3HGfLn4WU",
  "key29": "592yUtpkpKyoXugzWzUf4HvafjstN3UiLjmqytjSEGR56U6aWDSZy3RHTvAKxYbA1kP2cUqaXNPMxntEnci8w1K4",
  "key30": "cT7VGvdpxA6cL1hyf8vx6o3X1oMCHNvcnSdh8AVAwCoyZPnawnWPn3Mmu2be13gkjni7BMSJ9TQG7bF5b5gJtRF",
  "key31": "3xHKHpgd3Yf97z6d13yXxR8Nx9RKymqBVWa3H5L3kbmDHim6rm7mKjNDrsoV4tRGLgkNvKFokbBmFmcZvWecvP1b",
  "key32": "4x3FJ1G5KsrMC2QFM8yU18hB9c377BsmCZfxTWodusPCLnRnjdtyEshq32a9aKoaZrzrMFGQyjRVetZcwXKeQDZe",
  "key33": "mtcJDvyLjaWoskHipNTskJDipQYMgWeVNjKgTN5RG3zNmehnurHh6u1gJozaHyL9WovzvvTV4NPFfaFmdVnH61x",
  "key34": "e18JZJMU5eiEdyGGUK1DVGtjC9BkQMYbMzxz2NrjJT5B8DSVzt7h6WzAN3Ax2xbSrNpajLwRDzAQGw6bXDJYZtT"
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
