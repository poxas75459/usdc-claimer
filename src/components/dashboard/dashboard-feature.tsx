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
    "4G3CzZFL2dFwUJ6G3cd21GFVsa56wHDr49bXYSGX4LDUaeJTJ7NAJKmcWsu9ynY2ZgBc3LZjZNk2U9SsKimoSDgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RzRb8pAAbWiELen3r2pz9ocBoDJQdHc25GwuGRhQyDUyxcgEUr44eSusCf8hU9Goy7Gr14d6WpVx1tJeJC1JvJ6",
  "key1": "3gXNHKZSAdiFVbTBa52noaZRvErXpN4aVnfbVufZdJMidyxfVf5898KayXz5qdrCPz2ukFJXvGZRmQkYqCpLDtw6",
  "key2": "8vF2bDRjVbod7GCmc9iWqo6yPcZPAksGh4ntqVmFNYbvt6hUcTm6hRgoC7gavCZ1177GNaL5it3yRfzrjSxVK55",
  "key3": "Bt44kJkahSSCQNMX9ubE56Qp445YmiHJrfHxp1ziw6sDAvTNLsqLytb1WXFDgb8fhfooSehZZ1ZuVYwb5v7cCLU",
  "key4": "3CUSCnrCbT1RAohH7r6eCLufim2TYvyVxubYYUU3Vvc5vaoq77C7AQhVCMBLYhuR7fBySQQPNKHGjDLyhGUfe9KU",
  "key5": "5yvuPFW8HXwU1HE79U3wZJtkPjwaAN1ymF4uzNjrHr9fue6MZxb5LTfFYjs81dPjPiNGs85ouJdqg78uArkho6oq",
  "key6": "4wcdYbFxQruQHdAAXZ9sxpBPJv4VX24UFvcM9bTXeKmH8MwVrrR8XXKGWZgZgx9KPb1HYFxtEPrdUdpmZuWTkwna",
  "key7": "3sVap8uvkGfZZ1RXCrx7Nv5bYMpv7tzQYuhrQvCNhBBnfWvcY2aWs64humVFwZTDkm1U6FaDs2VBnDiuhwVPd8ub",
  "key8": "5DvvqJUAmD5jfLSoTUPbtBmBx2ySt3jpAFs4pH5P8Tc7dQ1FkaaSqS4V6L9t9PQFhdCqnneMKn3Tey7QQV3xibZ9",
  "key9": "37f9W7CMo28MsM85jjmTzUJh9p9CE3zaGgDWQZHCHNQMWu2g3k9Z21v8MLjKuTpgeF2TcMGwPdcgwRSzZnybUfvP",
  "key10": "RaNzC3YG2NqYumSCoscBGffKDBVqiULPDnefCKwK6DgjJscgZWbAnhV5ksmV81s5FxaFX56dBABixbSAAS4o2uN",
  "key11": "3kx3NENKGMb8gZJuMba9eVntKvNGByJLZfgumUC9CSXX7GfHuKDjqqfscS4yhyZUjF18DiA8NvDdg55ftzMGaN2B",
  "key12": "gEUCGHCecXr4219NVuLkR4T8REwY2MmWNX5Txiy4VwAyatgLnRbqaMfnnNxBUoA3HrYQeJscA3yRwzPmbU1zyZ9",
  "key13": "3tvUJMESr9UmFsQfbDJMLLKVJiwWMbzHDCX8558c2b67mv5n6baGLxJjKg87eFQwZozL9mghmD9RUFRCogT77TWU",
  "key14": "3DnPQgCSeCWqacxJgM3RyMKbRxjaiYQz9NekBMSS9aT1Ht6zfTAgRdBQN8Ph9CVfQtfZ3kTpvEwZM8LPa9vB7sGt",
  "key15": "4Y3f3SgxyZfgRJKh3ozE8eQJmM8Ti4WLgdvx7HhewCzA9QfmXYYRoucMDQ45aGZwUpwSQqD4FF8gRSFw1qEotRNm",
  "key16": "5NRF5j3SunGBhkKtcdkcQZ4tXfj5isQDhaqj6j2NHm3fnQRRn61aQ9pR97nfCnkmqX1mhUCxUpXwPGLwd7i4nA1e",
  "key17": "5oxuPV7dqXDxzjpY99oCmxzmAC7bXn6xNszpSwardDATV7u1uMucB3XS5PGG93qzPKW6nzmdYvvpTkWxzHwVUvs6",
  "key18": "2KpKxLfNFRd2JryyUJGZYLmJLRXrZHw8nsGKYZ5WiixkngWXPznsi7DAPhu5JT1ce4LcVZ3mZC5VZtfEQqzAqNBr",
  "key19": "4a4jjPGHJ46dEp4iTYrkkR7AJ6SxJVaFte2JFf5cmXp47Wdo6z1XcCmo9TS1vHiZFFJfY8MY2fMgzib4sR7J7pvb",
  "key20": "3HNrK4wWGoQfTPsooNcvZoBCCkv1YMMP5NroLrXwonTb86Aqzyi2HRmcg7nCAgExJiefFp5jsh1HpspDo9bz6NiW",
  "key21": "4xU77JLhW3Vr83fPXX1G6ReHoHBmZb8Yvi7SiQ4K5EHqsRHtciwT7WNx2rUCCLA8GWiVwqV5DzVa71DF3gKvNWpq",
  "key22": "iWLMXN2faYxFtSQouYiNzApziwQm73rwjfMJaSTx9tj4pfTJpdRpRNpMUee2CuTWwNhKFybEGTg6dK6ShHzpqch",
  "key23": "5K34tBFQSeVGuwmQf25jiJgRAvPsRoqPkFC162EKwp8BSaWzzJghLf24XSo8RHRuqJcB4hsDWXx6Wyc1Gy5ueSKP",
  "key24": "2YoPAVzWKPMVZt1CSnpRsqCNtkJRFzXZsg3G7JbBm29kUFpQ87GzUzoL8ARYLPAYuY2JeDamQCBXRCTGWJG9xuuo",
  "key25": "2oVjBShkgMXd1QL8Gd9uPtbJPMf9FWRHTvtJMwDBCYtXdpWuqaCBPwURJ4GAwHALnvjogxYXtFAX3w23xm5pMqqQ",
  "key26": "5iaZWZLGtF1x4ARzgh2Nt13ApLFUfQi6N6JikyZxG9Cfzp1hNBdWP21QzS1mhqFVr9K436tefJtBZkh1kuXr8u6d",
  "key27": "4PoTrhWGE1LMSehm6azdxRVkGHe9QHKbENEWQTSPsVPiv8R74z8PWPerBxrQe7ojXTX5ZAghfM9Yk1NMgueKhGk7",
  "key28": "5JbcVNnJR6ojW1ReewSzxc2iSvxhrqVWRvkHxxgu26fTenY5enGb3XNdVPmRWWfxVDGJDxhz1fZ62MWjZib5BAru",
  "key29": "3a2m7qVNV1xMSnJrdBEw7JLoMG6YoNtBaAV7yR23UrmxqdxrZaEwWFdnZzDkXhURk8dcrLMrx7woNfCeHAD4Ydns",
  "key30": "3FX9Ku1F1Nnp8t24nqzXa4TotmqyjButBSFt5i6EdjKELfCiejAXUcf3FdpxMLVeUD2Sz5ZvBt1L6vhsmJab4REm",
  "key31": "5xyL9zDAJ5j31A1e81smMRHRYDJfh254JR5u6dhvvm37FXhHUR9t9CmGratyRyhU6xscEsNUPT8BH4TUQUAu3c8V",
  "key32": "yDffjxtRp9dhNTwvsM8mnmwbubcoMvvnW7H5fje49DgsNhS1fshpoVvpjNYFgJQGVJzW6LEc9Kt5HQMxgsTfYHY",
  "key33": "2Z9KFdn4kk7ryE9L1Kff2oquErYyhcEHNrdg5jxxpPW1uGD8nVsqiJ398GrP2c1oLwvHJ4h6ucJSTF1b1ntuoQjn",
  "key34": "5g4Fc88brPPpoQDEFiAjy5rk3yfe4KLopvzTQJfkdmU8Xjwtt9EG5YV6r7tSpDzZh6cXwqPAfrphhuLppKJXCjLM",
  "key35": "awYj3h2p9BD4A71maFtgqm31UeFqR1NBta1UpHCLXz1n76m8keBBP5tgEdV5vjcyRCZE1zYyjKPFgTJDR2BcCPE",
  "key36": "eSatvrkNyxXv12VyqJxfL9G1ko9FJqoFkpsgFKRgdEDJBu6Lyn68MJDX6E546jimYNh54sUg6DpykBi7D1qYDZW",
  "key37": "JWswQWRnK4SuDHbj56SLn5TLbbpF9BEmgwdzYNLo1TSTCzTYFZKBY7vnTQcSBTAuhT5eiYyoCMehoLuRPktK48D",
  "key38": "2X2SwVPQJrVhv3RxK74CHEtst6uTunPVKJHYoTb5kcDE2AxLqPt22kfj41izr7z42anBQrznfqUEnhC6KoYA7paZ",
  "key39": "tV5ZP32aN6HoX9gTEzpmfajRWvTBSTBBVRaAvzE7P8abGa545Up5kHwCx8Uqv75zWCtDXxiNovoiQ2DE7XUTV5u",
  "key40": "41G8gr79QQLB6iRs59DhcKKveHe4Zu3vysSGzigwn3UjVpZvyiZ6QRkMpa93EDmVApb6hvF9Bihx5VgTuRtX5gJz",
  "key41": "jWr1th3YXgVwiTSjNpVTp7AAGcui5adje8risRB7YB3j3FBrrdfGTjfRhiBR8oE5m3YXBoxa1AGBRG4VPQykrkr",
  "key42": "5ZSBSSDQYnHMnoT4jCH1VRxNS1TJRyhUgVksxDVr7dWRbPHftJ65deg2JGvjSDQ1XhRiadRqcvBoZ9vXarjtutfU",
  "key43": "3eib4tGTtuarspv86MjVbmKUrdkwScVTAdD6CC4K1cnh7jr4F9DgBWDTunAFyC2fhT82vYHvxKyiQTaMt7qne9EM",
  "key44": "8Dpm2m7QF21NnM3bqQdX6mBK8NrDeTE7oBcvoZzfAvv6SxcAxp7SYzFJfKLTxB3aMxXT9f8GnomtqmC2cdrj9vF",
  "key45": "4BSUaV4j547XpWNQPNCG7sv66tbvdCVFui1z6uc3z2CNhipuMqJgWUMDuFgMf3QT77GRfXNujMCFQ3yofrB6QyqX",
  "key46": "AV47EhUxck2i76Ae6tsrTV9ZEQyFA8YNffusQSZ9w4LMnDBx2eyTBBfy8bYriHCQ8FAsXgdRXBhziByCZ3ykuwG",
  "key47": "2uPYHJ7mSbkUHhY8k9LougK4F3VLYY5uJxRvtGUCUTLGbSgXPUHx3JYSU9enXUH5W87YP6wLWZbgEqhf9hN3TqEX",
  "key48": "xT4CeAc94rdZTchc6aQ42FTkhKEwFhNoExca9Dgf9GKxWvnHyRFSiTphYoY8FMigAta6tiePLRTyrkturXSyvFR"
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
