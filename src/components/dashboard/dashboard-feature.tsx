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
    "ngsVQFNjRxxo7HzCoFWUDquXdsRDcNgmA8JYd64Unyg5SW7hATmcySqxYsXkRgrqtWGBmqmPrboWn9vB1jZE6se"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y7xgZy9VbpiXpAoqq4bB67H3v827QZf1g1eFe5nvR6B6wNCG1Fmd5JkvqpQuKuXNvJ9xGE2b4Ghb83A4wnjb6m5",
  "key1": "3MSeJqCYqbYysqRBkpRSKPfdSDSUgbsGkR9KQ9hVZsxgJALoJR8dctxHVuVyf9hjBGX5ndxa8UhoFaH86XkCfSia",
  "key2": "J2M1mXe9bgtav5KCFCE69jeELqCURK5iR7aYvSeGZJWncyaCPUGFrykZ3nCxYuQbkYp97ymntWTerC4LgfEiAqR",
  "key3": "5G3tEBCspLqzKQUiB5Ug8qv8ppMgLvzBD7SrPpfeiaP8C743DtpjTRHWhstLLN8cmVaSV9jwPu9CGBjH9CfT7ou4",
  "key4": "3EEyreonuPvSE8NsRotVCHNheHrfbkudkvwCJioEusnTxKaiQk43kR6bc2m45WbFbrK9654phcmvbU21sdZjk2En",
  "key5": "4PjTRRLtAJ8koywcsUGbgyY9uRRQMrweabhrsFTTypcc6fmSKREJYZCfcKPW1wUGKNcmYhe3SZ1DZnRZ355ehwWg",
  "key6": "2cZ79dCLUS6LkcG5JBG6JEqS1smzQg2kHF3aQHpQa4hrryuQTEUdA1k8171zm2CzgqAhYwFJa5WW3zVHhYWcTLvD",
  "key7": "3uTrDB4ake51vUdgRySd2b3K8a5C993deTcvyeeXfUQq8tecbvPBAk9A4dzvHjgYKpSBF6Z6jUb816uhfnFhdBEG",
  "key8": "wfTJ6WJnMqfyckiHFzFY27keLL9MMDGCijPjv8Fr4ihwH6f2wn1B69ka7XE8QLbrysdEZXXSPQqWZvJPbDiM2cq",
  "key9": "2e9mC9C4CqgdkZE7ikSgamtSAWnEzWDswFNzpnRxBygiiJnMoVMafXRzdZTGe4yADBqwSWkxYdMav36kfhc2rEAD",
  "key10": "52qejJJ2zeMqGSPh8TGwbXE1JRZhijWxFvRjc9EuDp45SYmbhZMoxftCnHAeoLjQy6bgMfCb8kfWY8MgX5nvD2Qa",
  "key11": "2BffG8AaMiQZZ6Vxu1TJUctdvujD6DWEC6SFH2o1vQzEfv3hm6uZANmPVuApFqf2xLGKxuYfQRiyCb2x1CUz21g1",
  "key12": "5gGht48v7ssFg1sZVZKfSZZNzK84shKpcgyzqoVNkgTvHaPFimeeXwQeXZtksHDtBwbutq3bvcuGoT5BvV5HFbpA",
  "key13": "5mbnf9vfhuVBrmRX3KZs9PfsdSTnjV17iqpQyZkEt4TQLnChvDYavTfcqapYSWKvBki361FpKZszQdP2QM18PRk2",
  "key14": "3Qhpx9e9VSQa1bJ9649mHXnuA2KZXTAiLg4fAoKfSfbnxivJK5CNZ58iZz7xFnMtSHvCpCPUVxxhpSsMGAJCfofu",
  "key15": "4n44zigjKvsqpTJPPTHvLMxzGfiEmTs9SwCcVgnopTiCtvgjaRGrRLvpQzyJoGR2E6ZqKHkuLhB4HBqtC2RNLvUX",
  "key16": "5RY3FHyJecGTuE6JHBMFxnVudMpU65CwEcAAYQGEoqEP2t3y9Gboq6H6cKJkw99TnoQgwFgZy5NSpgmq5ZpZWTQM",
  "key17": "3hKLYczkMnrxYnf7N4tyvkT5wGzVPhWdgtarcNs8L4m2Q9nVgWH4LxFvkwADsPwzTMo2PiKNJH66KYqpfMUEtQLM",
  "key18": "6773MxbJf5Pka2a4hvWtuQ3FByjHgKdLSC5KSAoPhDAfciebn4YodHMZ9Hj9AQiBukU1ow7e7B4otom77vxGuAV9",
  "key19": "2D7E6URXz6mDi5wYnrVBbNbxWncF8xLJijDZ8aoiX78UuAGk8ZUJofYyNcqD6Nv8GE2LPcKtSJEJWwK4GQrvt2Yd",
  "key20": "xFDnybfnqoSCeWHVAChu64wpv9StBXCKeiaMAFQFtfG4ar8acjXKBH1LaPatrHFa8RQ7eBF8vDNchFnU8FXnE2K",
  "key21": "65VgFuxavbJ4Per5mS4r5hMt9WEhYfsfnjv1p5fHbZARyKXdbf5uUocatz11N7GYJkdsd8vmdWbAkW2H3toYV7YN",
  "key22": "2s3pJGZ7H1RjZvwbh5N1NgYF6cSsL2qe9dsoYoAoPL2RERNMuW31iz5eFQDc7naMAghTrdbtp7AccrgeKk4BBfzQ",
  "key23": "4xkUtaBzmQA18dVUc2yRkibymYvg13M7LJrkbfwc7qTXhN2PmaPo1KkukFNN9YhnoBkmR9reWm27sGYBuwjXfDX3",
  "key24": "4G9UDAHMBfzhHoCcrBKYRrcNuP61LWHyH5zTt2Ma9RmiSvdtwHePdDbytwrDuHGZTPaC9eqRYerEb6qX4d3zrZq1",
  "key25": "2wuYVJMArerqbuC4edX2nPmq9UtgRXCKf8E9v4UXqbX4zdJRfmEFC63qYFQ6sPykS3k4pG93BjcrqSxuiZtgXQDA",
  "key26": "S8gniNuLrxrGLu3sSY3DWy3xLwKU25LvGDz99vCoXa7UmHCvuaFRphU1viQ9nGcxfzHcYuPrAzZCK78MLRXmNiS",
  "key27": "YMqgvoTz786C96zuyCtAB7ZAoUCQT5iBBmBe5Fws4Yxwd4Kxuhu1d5YHfe5pYPwRa3sU9CT6B3pgxzXffiroWRg",
  "key28": "Ht1JdtoF8TCxcgSWH8KDNH4CB8FzAQ7X5gywkxB2gViULeeaAE8yuGA37iQSHxm2Kp3c2X8xTR5KxKgTeZEjycS",
  "key29": "3m7cJdgqUistWTzGuMmcY9ze4gBjwMvqAoypDygi53wDmYmAT6LiPvDUHRW4XzWwa1AounbjbePwsMXRfZ85hQgt",
  "key30": "3BMcCv5HL5eNoquMc2sUkFRBD6zJ6vfg7VTvkiZHh4gecjkygMxp2qRrP49bH642JMFcGwu9yaXLbg2pn9Yf43B7",
  "key31": "5Ev9SoELcwJpgSXJcPPdezg5JxF1h8hbs7uVYrtaraCrFb4kJnuStLvzJWCn2YSEHibEyaBt9psZAMS1NFbXTXeu",
  "key32": "5U7ifW8KeVk5LJEiikGihFCNQkBKXY18MNzgwLDWjry17oQC7JSijyfX1p1DDLEsGP9MBEEKG6tghZgWX1ZnEvjD",
  "key33": "41TuXY9T1dHeiMN9j3oPCHgzJUWN4SVCscR3pekuu4QKpkU8WWepnTJtoZWSqgdhnpHXaP4DgxuzzuSwHpSq4hbn",
  "key34": "3kSdq8hBP4fjY1VcggALFNhbW8UMGbwPdpQZaeJm8beMrgszLj7eRgxAEma69yaYFC3qnp9Y4aY51G7Qa7ucmBew",
  "key35": "4JJzef4G5xAHazcGjURXFDroUnpmGsfE1kHXSG7oXATU62Tqk72QwmaEuDYTXpUeNbSebufhYXsuPaMJHHjF731j",
  "key36": "4W8DymyeknxR1uM3dxUHcjDA8R3vKEXVMPUmBYRuyJKgN3ARDq2vhxCCFjsbnZ2xfUG4SLdsPLRBacSHSwEQD46j",
  "key37": "4CqHueQc3fyM7nKygVwiEU2n6Pm8kVB73Z998TKdvnBccd1ST7EiJGq3crxyLERewBXRFKVYE9o3NndwTiTsVSSK",
  "key38": "4pHpvze8KKpCJdi87GFTwX552N483Yj4ELNNTzwgftyj7Z8ucteka7GoDxvjrujcBcwkM2JsoQ2imMif3DFPVnDQ",
  "key39": "4Y73j89x4gs6GQhATzzb53dirVPPTcTPgDYgLfwUwAXXB6hmyYwaMMq2CR5p6koxuCHeja6nQnqA9kkPjQA5evaW",
  "key40": "3wr36o8sRJcFEuEfw2xeeGiQjxjbM5XNtBgGsZGb21uybkLDkuFHmkg2kDxv4vN4cBCEFisnE7RJmF7bBpRTLG9o",
  "key41": "5qhVgdcVNaiCWmShZiKVDWMjdhStGPBFBDMhSnuLddpVSM8EnWDyYNnyfXxZs116KL3RdGZTzgvAGnf7ARCTQoVp",
  "key42": "4b4PpgSpwCqgoBZcRuGFsmN96iKPR5NmTWt6YZ6vxg95jDFmbLHobVAykRpq7dzUjCFwz6x42MUGfPiK1mZa9rUH",
  "key43": "5FyQyb8rybg3bk2gDSA2qdmpDwTZyRkHdrhfcLxSivWE2d337MrVMxm9afX9Myx9HtQzgpcM7FjTuXBJNTBXs836",
  "key44": "5dCZQGVLuF21GkjS7HdUSaVVwhUB172ad9kUjfs8gxtbfUFHdFsZdn1uBnGcucsQmfoe3CCZU4i8hyYL4MKcNsgV",
  "key45": "3MUt63erxSKyzaD1zWhLnzJk5gAnwQGwmwRbrUbSnWRDiu3R5HbgRVip7wmXGMjvyNu4yaUVDdv6L9SY3ikzgp8D"
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
