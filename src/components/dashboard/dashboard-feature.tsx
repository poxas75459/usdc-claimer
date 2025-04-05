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
    "2Lyhn2BNdE3XfCd8MfCop5sc7uAvZRLMTg5ce8QQ3dVTaRLVCmmtFSGX9At1KZHBNsYVwFhiejNQgkVuMzLJ5ZzM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QvkBTNU5Krc6dHRp67aZAYiqqLthkVLXrjAFe3isbALXkBpLGuPqnucR1v13ruMKpRj4RWoy74gXTmaeY8sELAb",
  "key1": "2VSqUHdkTYScsbALPEzgFPKbt7rEjogYCLxxrR78CjVL6zhR4HjKTYAoQQfHBcVWFsTe1mjsUPPudig4wKNomTPc",
  "key2": "K8mkF67RSZ8Evyws9u2qqs7sDJFxsAUQT5zdHzzJGhqR3gKhNXF6j1oSuHdScdhgLtj5tnXL9H56um3vCEv1wkp",
  "key3": "2YANk4SCQboconEehZnicHQBeBNWUdxiDUJ6qwPdg4uvZ3uDqA2VdDbMRWw21udvA8E9sxW4uUBGxMXFH4hVAyW7",
  "key4": "2S5eHyeVwrUZGbJ5KzV1uGE43dhBkRMhuWTY439tVabaPiek3D4WSareu52kH3vxhWEt64sDFpgc4Rf8qQaUf9iL",
  "key5": "4PeMLrFDsfgXANyAuuUFDoGpyBFyDmM8UjJs7MfKbdm7HiTFGBEqbgkgrVM9qThopVgAVEx3yfDno6ZrgHsCWfA6",
  "key6": "3oeFCiXEE8gJWiA5bd5PQ8X7sUd5bsD5sZk6KCaeSP1EhzRu7oXgzKENXBNR5AEbakUhgkuqM9yxDMbVxPK7qnmE",
  "key7": "3XaWeGnUey91cQfM5UFsYXwepgA9zmiwWa8akaxqpdscVFnptwj9s54jMyvzkGaDFsJve5DxyvZQGT2gh41fqVTD",
  "key8": "wDcR94ewmrC7npvvHw8nHQpZK2AS6A46Ukx9cJHAaFyTokfbtexwVd125dsZVnGHqYMWSjiRGL839HeeZKge7rP",
  "key9": "viwDs6CGxNQAZoCAHGpE1jJg9vt7mxrg9sT221H533i4B4Xp6BEsGqvwNMhHKALQxRMgbUKA79VjwJxb5hyZWXS",
  "key10": "4eyKmMLajQ7VWQKEHSCBJmXxG8gvv7X9jrXSBDh3mGmpHQdpmYGNCv4aK2zSF7DEJMbws3pd3RPQXKtRNYHRhkWA",
  "key11": "3xR6JUD8ocwKfnLNYvbPUJeQLanqhsm1VGQAVqq2MraFPxFnwGeJ76VCiun4vSMk6YviAtJgNHK4DgFiKWAb4Kos",
  "key12": "5rirGjjiGnJg4DdvWLhZUJv9cb4Tm2ymDUGG1iraCQMfinsPhgA5FWdfs56D9XZMywDwdksPHhXYGTshfEeQdNCT",
  "key13": "5jy24yehLUzMmtBpwM8Jbn34ygq8rDtZdsToBPGGSCi1i5ycFqge5VeKKyoetxzaUS27ZTNNGkwvQH1RKp9pCK7T",
  "key14": "EyR2wq317622eojxdpWd4F8wSMZ2woGVTLpGZKkFEfLChWgcUgerqXvkbsWHCoxzeX9oWZMfTWuAHLTVNxPcD63",
  "key15": "4ZwfRz11E5PR5e5uMDt9J8E7yabTtBpTenG7QNiV1NfZYU8dSWrur8LTkiD1ok3ijVnatCCAtcS53ZusguYzjM3x",
  "key16": "3x3MRt2JPbcH47DUGGgFSU2zdUmBmhWY3ksr2v3ZVpTmBEs5R1EKAtH3hegpGHqa2LF7mzC4Jaf4PRB82RkKLGSV",
  "key17": "FstihwedsK7JSVBUTihfvNZFbBUQ7Nz79TuGBMEssrwoBhSDGrdvMJth1HcavnSpAndkHg7ppLc1aYjN9KmYcF4",
  "key18": "5vSBHY9UwCcNTvjiT5oTWqtS8y5NG2b8XpdzW7zkLvfm9o6A5KL8wyxWbbXb5uXWkE3HH1Ai76mESRCV4ciyYzr6",
  "key19": "5FaAdDKZpG3u1dHYwy236C1M2UkaLWyBix8G7agksc64pa9XtLJvmZEyX5iQb1DRwLYpce879vyYDHM5J5WqieUj",
  "key20": "5bzunDZct5dUE9AfW5nFNkTzpbPJhMztyqJLxrcGrfrP2wXBWHsmcb7Sz9r9JzcJ1CGWUuVoMvxWktQ4nAeGQhCc",
  "key21": "2TKfFTh6ZRiQtbZrX5ZHvUYZoKFvoEU1oCunSGPoLBoyPMgvdnM1Rw36XqA1u5DpdXaXLtJNxQVhvuKKromcVK1w",
  "key22": "5vgYfwJVDvgA7MQPYXXHajYjMZoJqBrcvKqzRfNxJnb3b9TkAmjLoyT1BTKxLJwJmUB3skZ6n7PyEhusQUgVLsLw",
  "key23": "629RN8rDG1uRiT1E1DGBpha1iCJV4cFQP3WVNQzvHZFTdrUgvqAuD1o3pXWjxUvjAfaSUFeCcXtdX5Sv6demhoKn",
  "key24": "331NrTL7EYJDQFMB3ELzYKqAP9tdZAdwzCn5rWyUMd5pXMgzY3RgZTf8SqFmARfCwzFJ1H16HCw7ENQZzvG6SChs",
  "key25": "46jRJsW18YguSGYXLWEZgZi3oxUJwrSft51Koyrz76aCHW2k6Hfo4BFWbmp9vsy8JbiTeLrNzYeAwaZv6C87Jxit",
  "key26": "63auQzzdpGiYjs4ask3xSbcYXq7yk1Q4HRGhfH3kpY9Pan7B5x7ooYPKdSp5GDEu2vVFVMpkAouMMREqNBkBRnLb",
  "key27": "4ufcfgrAFRaeiz6eoMpdFt58C8NTxCnfshCAeQ7rjdMx9BjrB8MrE7fTmBGA2MrGbX5gmcvcbPwetCoPpot4PhDY",
  "key28": "48x9VHh7dg4SBND8c14W1ZHYTp9wd4uM3seFtX26UGJe8mztGYXcnrJVXnuk2FYn2b8NAND3TjcHR1YccQn9JwND",
  "key29": "4spwR8Zyeqs7DzguF6BCrEH5wx26oP6feNC9Q9Mu394BSJ7fTKSYsRw8jHXQGHFC3jv36RTspUm8d6oyZtaDuDaL",
  "key30": "64BjK3uU4CPBVka7pZ1k1XwRtHP7Ys4w6g5ME57UGLBph4srFcW5KEyqmviY6xMkCha3HEWg4PY9JhfrrNMc23GJ",
  "key31": "262vzcs6RmFSsE2RGsoX4ybapGMexE3eTRU58NS5iYHoHGatQtqzPGETHWdJe4RNhmeiCkjbyy2NqhiY16pMk8A2",
  "key32": "3evdgwQnzinJii7Rn2Kmp65234Di51KgzB2ZCVo4Zyd6kuUzCdL2sfvLVdudPYH7W82oFgiEGFWsTSVF7hwFyMRY",
  "key33": "4RyDNgoUbjfi3yMLqFiyTCpemyuuWEopEMzNRsXcjwSb4FPTEQzzbSuSu5toYKmxgL9kvvs5rYmdZhjmT9DEMr2r",
  "key34": "4YhCWD8MPp78qVv2NfkhLUKGLfV1aKNBbn3XFHuuTVrBs3wc8MpEW84R639YqLDPw9qUa9dbyoXi9f1r4q85RAGh",
  "key35": "uCnS4gtKJVYrSYmHieNtCMmUx5ME3ECm3RFkXduAuujrAJCL6Hg7TMvWKpvmXppruGTFYz7kSEXiszBJjXmk5b4",
  "key36": "5t7wU1mk2QFegvbtjku3xp9xDR9qTXCKUPpqhZACVPn4adhwYHDkC8SnFrXxPxUCX1PXWdCNUyRu3wwEzXLteiyi",
  "key37": "54KszQVUzHgLmhsL1YewayULUNsu4H4qHHZTtuenjY52kZZrc8LKnK1mKYNzGtnhE5pZusGUzaJH3DTWsvpePYgW",
  "key38": "3ZAy4MUE3Uy3xAJ98fit4BUcxDSSduKXhmF6ZYUvQvZMyS4d1g4aR2X9bdgAY1hAUxFzmaZDkTbYoxF7o624Df5x",
  "key39": "2Xh5stFSFac4zaYnb7zcWTZj4JbARHWDA1i7g9MJpf5HkULAkzfVM1WUPcDRehcLFXxuYgf15rkSPvMzVv9soWiX",
  "key40": "4ZhS4Rn81F6XKvHriPBhsQXjqDjTbr4nbYpYZvoNizyp2nxHyr5tDgYYua3W3j3JQpxNwAfb47aHzc47UZEgWH5U",
  "key41": "5mDzyaN34WdT2p1h1J4MxVu7ehidYW2P9MQWNUndnFKPrjqWXHZbsGdfhDAWWxFxHAS6fYzjyvhCX3Qbo5N6CnMG",
  "key42": "23tZeNMPQFZigSKerLvpnAU3NDz4cJ1PPbovwcDYftJPcGcJAvD84LXnZKGyV8SFzRTagi3vkSRpPmiqJDWf3EtK",
  "key43": "2CyBuoHtGR2WZTbaUUfgoy6o5zVMhGnaJ7ep5iSDauZgh4jnSTFBUoCkseD2XskB36C9gTcGirWie1j6WTjmBmtE",
  "key44": "4nvev98Yue6EaDtum4PAgpaySAH8HWQYhdE6YhHtuA7pLuU5yfys8nrQuAG6dip2TgsTeckwFiXxCKDpa9LdnQH3",
  "key45": "5cfbBPtRMo2cgLqwJ3SpP7biV6E9YN6Fs4j9krSkU1XSSL4c71tn7zGuXbU6hcapjR21S6EfCVU5MGucZC8sjKaq"
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
