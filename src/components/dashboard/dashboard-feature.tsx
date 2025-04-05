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
    "4L9n3f9LAyRUEwGkek5i5xUTeQsyM7kwPfmWrAfTfCB7cjEZgaXoC75p7R5yfVRYwri3fH5Qq4YEH4nV7nK8ZmCh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BSN6y7c2pW2Ud8J8r5wj3tdUs1NfLqQqkyNm77jdQ5S6W98S6AfxQ5Y9PU1bMYb3s5YqoY9i9ykZHXVGH6Qcioj",
  "key1": "2TX919JTrzUiwG8qCiKv5GgX3uvp6h9uc88gN3x6UBZXdmZq3gHcdfSm9L2CSG2RoTVNa6wpne2XFyBDiDt2a67R",
  "key2": "4Z5BXWWA8QEVuaXT9ncDCdL5MHR3Khtu5wFE5oE5hnRdUF4513khcBoRrtFx4jfrMfxS67e3qFLJKnD5Y3S5aToq",
  "key3": "5iJx3Dht2J1eZh93MDvBPNmWKenBx4R3cAS8Dqh5RUk14UcGY6aKv7vCa9nrRzGUCTMb2HSYkoaq3jjRfwgRxiLH",
  "key4": "V5Doswgx81UPwFvUouF9ssoeaqVvPxqi8MkSrgMhu43DoTNyZ5CakT12qa6PHC5v5Be4JKNaA5GbqSL1kjVFFxy",
  "key5": "43fHKUfpQ9zaMTBrB2v7iiVN9LidUGDz2ZYE8SSGruU8rbKxUze4ve87SS2SVeUXuuNpu1cEnunF2s6Wsz1dKmSp",
  "key6": "5yX8o9xMaALQLc4LPviXXcXxPwxCvtA1CBVPseG8U4Q9XnLaDmvkdemds9v5tQUQKxr3VsfN7jn7ZxxSKcgHMx1p",
  "key7": "3bj1BypzWpM9NAibtxVmAAcrbR2Ynh3FMxVxamoEKXNvhQw7eqUR5gffGHNChjbwqSuiWYGV62vMQmZuF4rbztup",
  "key8": "2bRJ8ttZwGmCdQsC5Jvm6VtR332oUY98aCMfqofx8f9XkWpL3c6W12ogKnWWyVHkjYYTeArc2c4xF5GRtLAhkCM4",
  "key9": "Tsi48YNTXx3WhWfExsrtnzf8fPGfxZmdEzjdTDcJf6DX2GmJXdLDpga1NhQy9uSZYDSfrMB5DE9XBXwbtK86Bpm",
  "key10": "4XmQxdifvzK8riiXgk1sPDfNQhYD4BLgTpEgigg9NN6VkN3Ytstn2rMcAnJMsjf9NdYZ3KDq4batC2GSDASareod",
  "key11": "3MKG4vbo6sd8E2tzWRjut5kupaJkQHWbAgYt9W8LbKx98EMd7Nx562LmMUkKapjhHkr38McjaAiUS7CTxwQuuawD",
  "key12": "4Joo76PFXoxFihkhKPB3Vsqi1jmL7mUfXm7Ufm8BiKk9Rv38paEnexZKgAo9DQfXRUy22XGEFQTneGsFKX2zXoUq",
  "key13": "44kUXGpG7bKktaPx9Hh1fzmpWkGRmgdrLYcXpu38d3iab2EZSFZtQQmv5BDwRAoVPxXEWQPfQewUCLjmKC5XAUVk",
  "key14": "2BPhtFtFc9gqy3iKR7SgJWWWcFnbHP59KefJsBnbEJq6ig57QuWETwaZnBTroUGrE4WfLMpQxW57B2VXHesbDL6C",
  "key15": "52VHFRLRHBfANUM7N2Uy5MNWkmGVQ9JSYrz1TB6W8H1dUzvhepnwYzfnKsHdtqBZfq1VgT5321rtW9VhivTcwcGD",
  "key16": "4LjdmkmzEYmkdziiZRBXy7fjmpKrtnD5aqTjFHui3tHUHnZizsrL7ZKf7xn8YVxBAkSV8jy8tQEv3HcUiLgZvzT4",
  "key17": "2ftoM5LJxYrfEaBofFR3dtbcXhuGqiZBVTXcn6d6PVjmuRovdxajJ8AGQJytLnd1rwtW4McWXqqfWXzoXMtQ7VNw",
  "key18": "Lmr4qRW5YvkA5XA3CLUAiHLTYk1gUFihkJnNk4DFDBxouJdiJ42GXeV8aYLZWjiW3rsz2XuxWh5brpmRbm29PVH",
  "key19": "5YST2mR3R6Wf7GhHUJXCoJ5RTRvpP2sb2iHXMUeFtkhgD5DDUbLKPPACnFbcfNzDQE3pMQAmWq5EJQLP5VYT6Qeb",
  "key20": "4QYCzRPktxZo8sR3qswPYPxcwWZ6oVDY1q1YawKvFSVafNbF18ajR4GFNvyJFkK3i1faG5Paq6wGTbkzmZaoJdSy",
  "key21": "vS1AVjRLkkqdU9Jo93QwokGMsWQMmTYgo5RwTHUBBxTS6KwuXv4T7VbvuTdRB18GC7YB5zbbbMPkHr7Ct3Wc6eK",
  "key22": "3x4HR2SkLYYxhdQ5wsDtmtxBsVeTGRfyRUyR34pgNsF6qUkimKFnD3jHHUg93A7RcRouXnQNhXj5FeBiWmguQe5A",
  "key23": "5MRJMB76RzH59dMTuKmudHaswGWgERi7yGMyMPqVzw3bZgmpNMeZgmTSVMQyMtghWwaopGq6rgB84wbc13NBeeW2",
  "key24": "NtRRqDmXmihw76rDoPvGsn8ZvYrkU2NHWAAbMdLC9oaknDT4HA7CnrXydErGT3QhjNafeBo9j4aKbwEz5jPDebe",
  "key25": "qPfMXNwhZjoCznTu1DZzm1hdjDc6nxCVUVuu7jUW9Dy86SAWBwYPvH4V4WQ7ffdCokbQckNmcKJSFg1aNWfoofx",
  "key26": "4p5XHgzPtjbpLi29gFzmoVPbE2Mw5avfhmtWL18jAFHv1jd93nbQvpTRHhYg2y4AqP5fbmP1xx1wgQEkR8ySGcxv",
  "key27": "2poroPtPuHpokdCUY8wGPTWTnspLTEUyHRAqCFCeXR5PwHoDYw6isJQ9FCeSyNmy7VFi4GLf1imfH65d32ye8sg8",
  "key28": "2qRCdjVoPUCdBYaPBTfTqskSUE1sN74R4qn5KEHgSQkbwJ9SuCsT4Py8jfGxMoPjnfBzbHCtJYJ8twy3qah1Rxxc",
  "key29": "eQAWEFvZ5DsaP48prHoreZjWKt3tF5QM3x4L5XZu2FQuQnmMKguxXkzLhEgFWbPAArmxzyBQ4ygz2Vhu9GNpka4",
  "key30": "2dDzZSufNeFDgAKoPdr6aMzPeLBeuStpq55cZWfNm7WpLCyhCpEo96FLpRf34aUMp4ir2GLNtkyuKqwf3qjc5Dnp",
  "key31": "2Tr25UBWU4N594cEfrzn6X1kvUQMuH7MpQgxcVTJ97Nr7JdBkWNWRrEhXMY1HGsLxq3Yi3zjYby3BdAYFc5y9gHU",
  "key32": "5JH6MbpJuJT3josEMNB7VMyvPcZS2EApXGntHzTm3YECzu35B8ykUE1yKcCq2Pw1fa9vteQUZM37XR5ja13pNnFC",
  "key33": "3QCLJm1khcaUmB1LojhYbNwCA7LsZDwpRW93rfgztefv1fvAzo5jSfa4WmsWAjcv7a4Hf3NMFgmMjvjrAdeLtWq4",
  "key34": "25eouTTGkgiiBh1hV72537JjkrphRF5RP65Rdb5eXs7SSmGxdfeaFBSnid2hkTMdEGmmYoXtS6Ah8mVnbQ2hre1x",
  "key35": "gSUgPBAFkoAX97P6PZyJcWwf9pQP3hjp2HxWW9Yt6Z8ZYXvQVVpB49ZiqUCXgZCw4g1pA46ydozk5EBX1sJESgr"
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
