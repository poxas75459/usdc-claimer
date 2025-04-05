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
    "37oYw2n7Pe7tjDPJCJsFVXcf2GQGCq1hXv46TT21iDPxhJZvPyHpJD3fyNrit3QtmPvkJKVcd7QqjnzaEWUYD4Sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4f4hX9AMsfLXzR2KtHHKA29LVtzgmzRbaRa87YKANythgTmTXLNm68jm9jQiSHK1JZQoLFqQPbnZGBgM4Vu9N9zT",
  "key1": "5hzLCz7UXiUUoJZYsiLQB1sUtoj92urxmdZ5HzgR6UoBQLAMiPQ2B4t9v7ApoqJ7KuomRaCNJS6hHjZtvRbscK5b",
  "key2": "4cUsiEaV6ns2vSswZqJCwUh5Fg3eVvDUH6koYbx3gdAEF111b16P4gE5gbZkKodh35UJ3Q3Z9viHzyXLmzVpXBm8",
  "key3": "b8mjCL185FUSPpHCZv58ETQUN2HCfofaJjGSfQybrjq4uG2SxVFuT4UtzMWhAY9ANqYnSzZUoUG4B1C7AvBMha3",
  "key4": "on3XcQV8VMYtT75k7b9mA2pTR4HxK9UzbppLCdziMVQekLMD9855ftHEQHPxnjqgNV3xd8pfqEYhSHaTYtBFxgu",
  "key5": "3XCvLvEbUzo4U84gpjcP2pHYKvWTMgnrqmYsWzeWKA8quKzJUXKUKPQEFsM8JSKYDNn5b4L9M9w5baY4SMeWFK4X",
  "key6": "4BGgy3KquXmof6tXXtJ72wKJQxtpyeTaq6E2X6Rv4EBeRt34sAHS6kGQcqw7QPaeADnim3xGbJZebTrh7CQZRTJp",
  "key7": "4RtAMYdaYhvrZBRmNQMH8x3tuYA9mGNXUoURVUw6APr6RkT6yPu4qsdDeHMGsg5RS5K2LqZzGdgN31LeU2SJtHrd",
  "key8": "2L7DnyqJTxHsm1rEe6QD8NnUZtd7v9icGyYxp96KfjT7jMjHs8hYAedwYb5HTZHK8aArHAwExr3CAM3odLWmzUa1",
  "key9": "4xDSStGMZdg7gBBPYbs8baevsEFm9GrFVxFh1M7igPF4U1oac5pTqdxTTA1CQpT4fHxhABjp2DBrdAa7pX97JDVo",
  "key10": "4SJtYPjLzJyMwonJZ1E3Uig2Zgzr1fd6XmKivZUZSJpkE5GAgtvh3HgdJLZQrLkKtbtC88MqqUefTtJWGFeo2p9Q",
  "key11": "4qwaUfSa9D9HUoDEkGGR4Wgi28Mp3dZRHnCTJYSPd6ck4aCkZTwdMLuySP4qxBoAFd4ZSiir8fhYPHseeA8uCTGL",
  "key12": "5fpQejwZbAXW2Vnz7sD5obNrFcWqTMTp9N59A1PFwQ8HBjkaFMWpPXzLiwmEY4MgrWDWR3tTSDyELSjnzN6Aprxs",
  "key13": "aaQVz2VwW8h67vTWHFRKhBirbKV2eAChEe5QLxKsDvRnYfz4SnBbz8RgXFJcqSc29uVvWnFTZ6i1v8JuBbxCrBR",
  "key14": "3LdoHKvFLknSjU8iP6eLZo7V42eoEEZzXPVHtyzpbeF5guZJ48WtfG88qVGBvb1aEPc57U4QihwR7emDNTDvfDjM",
  "key15": "Fkqo1fAuPUbPo4YWb5L3icmgKH76WFHAojgNzbz9eRz9MPMGzK451bSz384mRg7NvKRbtHW9yXHRFzZ7DFkUP96",
  "key16": "BbLTZ2Qrvd4Pz8nFZHdwP9f7rmuMJifbqAq8wvDgL4T5oJ9yRvVoUh94T151YpJRubvZBM8ohiC6vmzy1HECvGT",
  "key17": "2yrX2JngSmL74jYnT3rj2PdpxKR9quDyZATMMPg8vR9upSNdGbLHdjqqHrJ5gWH3Zs7LmtLpX7pH5nGtphw5653k",
  "key18": "2t1G4XuLuw4rqnUXDX9FvGepZXQ4GxMqJ9f45itgBzt69cRjbLptwStNhFeUPNs366QtsoStENkCzto1PodQKhpe",
  "key19": "TXkydwvdYHEqjkHCkEuxatLAKh7WhD9xctPnKopKhgjg7Tq2pwbmYwuvS5xrUQUADNqK38UGo4x2bdEXaJWgrEn",
  "key20": "2iCxgn7gKGLLy2zjVgs1iX49Dp8sBJfUhta8TMY3431HqvbfHDmYPmf2p7YzDT3X4k18ArLa6MtGnsgtCW9oKyJq",
  "key21": "23f8keaB3YjDrqekcLQ9HGCQ3H8NuYx5624CxaET4hTWZYFX5jhwz2BJxDSiEg75vbUG4s5P6bR76vi3Efgfmn4d",
  "key22": "61nnVt6M7Zk8J3mfzQM3Khba3wL9xrxWy9CBc5XoYrSCdG9zRRVPXHVUg4EC7nwfYAKjDyFCAMmMGpGEi6sV6Tvu",
  "key23": "abtbsHqcLoLyqyQTPdaiBYH8MkGZtXkr6iWqisc23hGb1kWMuG9XFK6oFzcYEFLdtzRvLoKSuPCT71XF6XvTRk5",
  "key24": "5j18bh4dRGaN5jWJec1x4n6DcLBWxMi59dw1Q9sCCrbkZdf7191qYs3833XXz5wk5NUKhfZgsVwFeh94i112rnhV",
  "key25": "5CGS52CRA71WWx87rctUpZV5sCHKwPA3HS9xR5cejrG2NHX51h1sYhuAyPZF4uhWFpUQpRs4tL9v4f9n3McuC7Yu",
  "key26": "3tfAkHQtrkDFPVG5bVj1fZazNEEQaVTxDaERgGrwTHbof5EQszZV8DXsPNm8HttigNkSNi5zgo5mZekSpSQDqffM",
  "key27": "21gj8UwdWU9HGcUqxqnHKUCzjqbPD9M7hUJsTWz9sRz7AGqWTm3Ad69zi6qNJnqnZ2QY6bwjzSRotBskvknEUsWq",
  "key28": "2VqKHu3J6cuFvo25jm9U8W98S8Z6dxqum9BvvBmphVr3HcpKc9PYJiyg92uBHBPb5pubFBWNuGJvDbV78FNEYBuQ",
  "key29": "3pHZfTdq2mHbHvkaVUxGxfq4VmQ3JsCqhGJ5h4LfV7LntKA9ddY8qnyGc2VK4wMw9tRUx8cJxCvXRZX43DfRvvB6",
  "key30": "25xcDD5yxidmcoRk2xLN8rtBTTEbHFzg4r6RbEgY5HNzUcJaNJt4HzkB8D7puiTF2T3XSbkrqhwZC1TrCwS8ALDC",
  "key31": "5vJRKBNW4BEcJmxT5QF1ZiR3hTv5TyKkSV83aW6c6s72U1bHahFQqm1kwQGwAJ1EpnuKE5mdCYnLb3YknWaNpSL3",
  "key32": "2FDrBG7X2tKNcYvo9KAa9mCvMuypxfysEkQxSfgj7JSRqsUU4nNxZQgMQpHqUYeLCYwCb3dpumASxcS5xZHMnQLk",
  "key33": "3SFpT7wr5agbhWXcj6P3W5FKPnGCZKH5gW2YpFjo95ktzGqBHxWiCBhzvckVorDqfruHQ1xwPHEP1MLmZCzxQR5C",
  "key34": "ESyGiA5E16RX4DPu4JxkpStFQCZezM7HqTjfvxWgCXt8JqCBr1t4eVmniYBi4yAopzYCTUbsMcP3CYJcW4D7Gww",
  "key35": "GsTQegqmuPhgFCeZgHJVRw5NxeMxYemhamXoVWpza657S4o4tBwysUohvQQLyaRqzWKaiNRkKPs5iGU8QnqnsdZ",
  "key36": "4SeD7SKtGddWuYYcQVAXFbncqozZMxMRdjoJGgJXutPEDRPG46JDs4nj9a8x2LtaWo83t7RruYnjEak8QwUhkafh",
  "key37": "5xtYsWE4pVMiin3DXymNwqprM5VjSeAxpGaCtj5czCzDQQwBbNq61mdqf1kf1BCWLV39oKoaLtEAHWS9xxK3GBLW",
  "key38": "1LGtaYsWf4ycVTs8T5BcCFDL2WxbqL63wqYE5LWPujqCKV8v9M6479XWy7WnT9xDr9rUEiUSxbdDz1TxenH6kmi",
  "key39": "4cc6aB4cRQtA9RFSbpe7QYG3hoPDb5phWvfHvLV4R6nFVo9cLg42pY7gxDJPfzR1EAoW5p5hvUhBvd7N8hKpym57",
  "key40": "eV8NxSrGysWPY1FJ17AMAG3dgkQ8DmVrn23mX8UEy26g11itVkgi2d7hMAsZrCFhiivhwWzUNq1tB94fY5eDJdW",
  "key41": "geVLvt4HvY6yyC6rupaABigPYUpwBLFzNHYXCDw9TnXk65Mchmw13NZnwuKdQk7frGzkNji4eEWUn7mzKSpJ9XB",
  "key42": "3tbF5hRLAxS6wp2uGU93wXpyg4R4PAxG6maHjJjqqZDbByw8mvTtDddERHsXAUiGZ6DmiPbrDbWLiu8h83zLauBm",
  "key43": "2Reoxr7YMgBMo5mjga1vk65zzF8Dc8ikRBsJZD9rC8XWoNBmoP5z4c2snziiFsamXoedKGL4UdoJHJtbUqnDWksX",
  "key44": "5KJA2e1GPCri3ZTTULeSRj5nbuU9Aw2oR7YR7JdzduPfvT9ocZpY2ggoZpDRwWxBKByTAkNSqEjtQaAgpQzSrRRM",
  "key45": "3rQjghSdKSHnuTPXZr5aaRdeCdf6T1uueec2yV35u38qF6GNAr5S5GX6N5XBbYmtQESioBDLK9JGJZWp3fJehoVY"
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
