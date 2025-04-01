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
    "5jCWcbJYBqibcmgeVA7NWVKCNx25HFMMgJNk8KKVPwzwTNE2CGwtpHpX8HFf1njdViPtTccP8a7gNrQvrMCHHiz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56dcC7Tb5YsjBjGAo42SXwdS6uigirqhjSZWBKnZvUDNdPPpiCCYV7VKvMeNTz4BYRor7a5FXvMav9sY2KY4ZLnv",
  "key1": "KJEz658KU2GFWv9T8Y7wMnJ2AdzY8baipcTQX1jxBxf5upi5Xkax6k5srX52N3CjmYi2QzCyWnTLPg2ysTJYvXt",
  "key2": "5o7Dyqj4VYRBS4RTLz42Le3E3rkvAWKbjMiN1HBay8cL3PEKsgtER9DUyaBsBACGjVJvbgoF7HsJ881K6BXZApTC",
  "key3": "3HBnfZLRFH7SZrFz5EZX2TTtWkUM2TcebJW156jqs47a6NhwCve71fwxjY75ZUNVWX1ufZdhUPe9zLVqknS7qrcZ",
  "key4": "5ZjAsb93EhthDdhsz8YyuULjNwSkMQNfszomk56qhviMuwpUCC9gPhLJM3ZEAQNXnEbsT9Ri8qKB4QvpNokXTsij",
  "key5": "5NRtATqapCZkprRjwuxiA8rbb4gPzs8JE2z9m3zk7FMtXzpNxgyjzDU2foQdSUgppPYBry2TJzCTvU95Ea5qs2K4",
  "key6": "5sbSWeXEB6GgGEenaAQ3iYN4Tob9SmZa7wi9CupFd25LMLhN7uDDUq1eMDWeLnSTb2vghZ5FTcex1uzFvEXbQqzb",
  "key7": "4LUFpj8adnkcigkZZbNDh4gWGgkzHFs5RaACJxHgLgBeZdCSewg3kVrJcBKqYuxjMoxaPqKJikkKPc8Cr1qbKTKz",
  "key8": "2DQpKUtaJrCcAp6b26PfpaowBKmmian1wPK3hZDq7DJJQkZcoBhBShhoR6doWWFTqFjwL4S2S7XqYvautGtfUb5B",
  "key9": "My9TX7mHmf6uD26AVzvqJiREXuG6p4fR1Pkd8Eo4P6vXHw6TDGhX1T1tLXqNKwVno3Gmd84YBersYxVfXYgWYZt",
  "key10": "4eH3kBLoH3Dbnj71dLoT7pq2QiAKKJqF6jp2jCSHBfCEfFJXdt4RZ6f3xr4XakFa88xHmEccS3yu23DE3vCWQtA9",
  "key11": "5intb4W9VzADFcoR4XvMcYSsdCE6SaRnwKgdBXYuhgsuczKoMK8qbnRXi9HR9VBNCTDitqqXsjC1j7Vjy7n6cbXL",
  "key12": "5QRcFMzbNs7WkvoMGMzwnBzyPCMp7yEdVq3bAGZPkiiykhTfkXPZaVBb84DeJcNUEDGpoqPQwrtYGFmKcPjacAqq",
  "key13": "4Jz84ctxETt9wVoSaskJFz2b4swekiT5f9aaP4oBVnuVz5pYKXmK25jKPB9cNxaUcjS17y8pFQVMKhfo8hnQEx6o",
  "key14": "2Y55gw49PSj7TG4hnN6Ht5rWgSupkoCAdVB5NAhxAdxaPV4NZ4XGe8Jxq2GFnG9reFzvc62FZHLmxYGFawaTKvn2",
  "key15": "4kr14uAPRriK5BHdEJbv9rXUPC8yyigfYg9xXRpNhmGkEjCN4g15D6BxSnQkWtzstGyYhiBNrrzfSvQTXYtVRxn",
  "key16": "2X4KE6eGr7ggJJL6PjkotLuEW8g3BG4y4TBaFWqDDY7jEkBbUbBFxL8bvf8prs9hiUfyYhASLwqQf2SP5jSahfup",
  "key17": "TMw2PEQrj7HWu5FtXvdVBjtsNFKeg3cLgVf6cp4vRQHyMnkFG6MBVVU1x6nc6cBM52sQD8Xoz22DsgFWKb5m58s",
  "key18": "2mK7oEG8Ffd29bpZGXpHfXLErpWtSgejzM2Ptg2Uob4HUkRpcUg7AsCThrRYzF6YoREQWtXHziYJu72RSQrWdEKm",
  "key19": "3kXaBJitS7Q1smPoEuAAkEAexxuckqTV1pKUyHymXXfSVvxDqEspS85QGQZe4EMWdRKcqFUhyRE4EWFm6y8Rg3py",
  "key20": "4dBz4zcpsfdAhAdn8pqDhAxmYhi391jyHXerxkVhKnACbshWELd9TTwVnPMWK9gtmvwfnF8vKZcqY6V3Uf9AEF1m",
  "key21": "WHD3nr1a4uWNdR4sUypkh8EJjQ5ENn6Jcpn4ZTjoUTjLGTUxmqLpW2DZv6XEiPkwQ4vx3pkuYrE3AZ3NywaZxLo",
  "key22": "rMehzYaRGi4oHuJtBxkfnaZLLj21jYKjxkBgdMrNGpDyRB27VT3GyJS92o6P1zaAqUY7robi71BfJDYhH1ej991",
  "key23": "5BEpexmf7q3nMK8SNzhc5rohVrXVSCdLsy4Ds46VJ9ULb9ceToov3pVfii1tE5MoZfeRfUNoyBDjEM81sCYk7y6g",
  "key24": "3TQUHieMV2mMR2bCJte4SMbGvEc3vXd629qV9AzjCL48JTqzfvAiAbJx79wUZqacNFskFkUFJJbugRxQgE7Z1UfX",
  "key25": "2yH2USjpRwWSKswj8AUnzc7a1ey4ckFMLoeKpMx5Bbr9crd17g9i7Hg3DAiaZCdjTLtdHPaFmkd1sS2EoSM9B6Yz",
  "key26": "5w5raPqkA4w2MTRNKKc734ztVUQCBSh5tZZUrp7a4Bd2u4ciXkxF1YDnNA1vfD4JUjarLBtDmuRERj2ajVDD5DJ1",
  "key27": "4EWoTCKpgkD39F9awmPw7eu7NGVHd73wBSbWcSg4HHyrqYre3M6f4ZcrX8J4RVXe7jZCpDUY2rQgqJQGeHBddHnK",
  "key28": "3RR4MpBBSpCdqPNuEMTVrt677kKt8SBuWoFYeNy2LnytrFEBRYhHmS8aNwGQaftE2rpw2dgk7HJRXNFYNf14muaK",
  "key29": "6HVbYCLpxgwvaDTuwjzs6CNoXkECyRrju7YKHL8BxQ8P17ax7b1WJBSaLssRXKTU9DGst3AWMw9nE73y26abZim",
  "key30": "4STHi8XK5kATe1RYvSoBshUHTG1BtrcdJyWGZiaBet9TxFAwpeZQh3ryHoRWCKfAEz2BwukmX857GCc79Dmky8qp",
  "key31": "3JAGYEEGdQMj2q7bbJmC2ag44SeRTogEbP2PbFBJVsGVzJDUrnrD5zUQcTZpraADDhyc77xTkLcJebk5ZKjMvJp5",
  "key32": "5WuNpXaR2Ksbt9wgzbGce8Trkkju9YS3suDgY94WNXMscmRbk8yiN9tBRxVKZnApdgrKkdNfBCq3xhe6qwR3rFnc",
  "key33": "572hkBKKMv9FKvoUtkx6UFo6SsLvoctJMAFi51EQaAtTCYSMaachDhDywjLjrs23Nh4ij42twWPJTXeVPtKgkoWC",
  "key34": "29Uq4AqYSTsNWRedginC4pTifkNGbCZaPsWdZFAeKfjLQfzZ2WEZKCwiJ927kvCMbFqfDgDVfVtE4kZ7HzpbBwS1",
  "key35": "5cfax6eVNkcSYK1e6quxzXBHc6XMXkFuFUpGsRUo1sKCBWWAfC6PCXxX4Yi5HhshZVSJfHqF11RsSgJ1idpU2z8D",
  "key36": "2cNmFvYYW3EebzJ2j1nQcSzK13CiS3rsgnfCuTVtoYAL3WhdvAUoCwk9wkjZ3yFNPdi5j5QBm9xQCzqK8pTjtPiQ",
  "key37": "3fDXDTYkUzb63uouSPpgymYpAJB6iwukrJSyTV34i31YYQLBWFbcVWodEHCaN2YtkfF95vv7zKhgX9FJBvuUGLR5",
  "key38": "3sStXsFmezSbpuH8nJEWMzhQYqPPf9rrnKY2DdNeWwGoynEF5BtzGqrb34WSB93RCrCi1B66sM8gu3E969QoNZ9W",
  "key39": "3bP7YMVf3RsCqi2YT8DmWPVGvmW6hcLFznJhXb3jQSxAvB4qrz8djrKMErtxtYzkgn1c5hLjWdgh883QVcyyv3QK",
  "key40": "4Zqt2RUEoF4m3hPWDsPs5KKjH3urvzBEfKCL1Six89Rk69Sqn3SpCNUrT8WsYVMKNBQ1qs3RxFchQ2VK4DxoSyfp",
  "key41": "h6nyDFR3wRoBetBS7yCWiCwRkzYFfG9JoMPzrANXZ7FdNRh4sv734S7W3QMteNkfdjCVhEmD2SN3yQ9V9faWLv6",
  "key42": "4B62HdziHCJRfx5qiwJYcQ6xgdJnV7xURFv86zUUhL3HXUPo3WU4BeCkiHoqqcqzu6YuBtzBT8kLR2u2diqroCMK",
  "key43": "2r7zWS5EvV1EU6ux598NXM8Gz3946bnXa5pwNKYLijWDrzvmPM76bKzPNCEkdosq94Bv3BscyUSSZTejbLtHcgfS"
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
