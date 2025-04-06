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
    "4CYNKJzBwTCNoaJRETo5By7eobdvwC5cVDxn5cG3Lez2vCawFwwMXWbTYvrDy4DDp2zuRvSajbyM3Ldr7VxtCCHu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dHz5v5gYdE7ZS86cjj8GCdWSYNXTVfS7b74tVK5TGd2RvbdVAgAxubDMhdm3fLT1gVnhSZL8HQ7LSib852Y2D6c",
  "key1": "2DEpPk5opdVBSeUXh2vzLyebWoUZtK8Xzmraqxr127TKHfzHbfBc1UnDsJRzPiBKKLidbpPtrZNMLMXqG2eYWyVc",
  "key2": "3NsRieFusM4i5a3KViTJrfjhpkyAP9jME5w4pywnKiKeaW4J1ojmDcJ55CcZg33cqm3EgLM7o9EVceFZjM2oSMaH",
  "key3": "2sVeEtyD84EVB4LT3v1p6hP3sA1cEgtejYDNsy9FQvQGYqJBbJuyx36dZRmWSQuRYAH97aTP6s4WCy8rJbhxxh7D",
  "key4": "59W3jxiRwJdtK5XJKSykDzFzRv6yCDjs6VpAjauwqhWgZ883CcTD5Rw2V1YoMVxMTsMNb33LgVG5Dyfgx3U838m6",
  "key5": "62VPZRZqodoppZkoBkY4kEF4gJwyqc6sTufPSvJrvjDtgF5wnhVUYeBALpjvciHCcEj1BpgA431hp4LYQTgpurC8",
  "key6": "5FNoq7PV4rsbk6JSEMjd2vAysT7CcAMMLvXsT6HsSVJZqkSnGxvMd2sdwSYRFt1SCfsRq4fvhVPVnaqBpTb2RFMU",
  "key7": "4X9mbtCLYwsi3ow9s8dpUZDVXv5tyiKP9vfGppPZWdecQWKQFppFQBh27EDJnHo5V3ZRLqhVRwreT2LPyHGfFAV5",
  "key8": "4feKroe8kseWhNnUXUXV6T2XWAcHgvT8qTLVZT8kHdDq6JenBQqopWAGg4NHf9JuHLDQ2eERM5gEhBofQSvMWx6a",
  "key9": "4r1j8sJZ5H14jfr1rtoVPK8cUqwdsP9g2hizRPYmP9VhX2LFq6Gf3wCU2UZsZysxgxcEfj2ocfiuvxrXfYf5mhUV",
  "key10": "33qJjHQVqreZuVCUQrjd5yX7W9tSuWNNBHwSDTMVHnGT8Qid6fxM8wig397MzvTPYYa6XVMxMZ6pvehjbegAtjUM",
  "key11": "4Kmr9AFK1kNme8c5WtxeDaL4ozaGwMittD9iRsMNQp85JwJpu4E7gtjXh7YMRzMBeciLGck5KEQfCgB8C5hMxC4t",
  "key12": "5a2zwqhYssJq2HK5YiKWTRhnzkyBU9EonUiskqzoK7u8AXQirduvMNtqyYS2dDpE5LMwbZ9Zm88q8LxEFDDbxGnU",
  "key13": "2uuJhWnLXt3SVVSPgPtkyRzGCDdSepfq8R3N4KDAPwwZJFJgnRZ6PVVQ7DoUNSRWCFJqEcPeFZkAkA63v4PdVPUi",
  "key14": "2SYKWQEidJKY1Pj1DbnHmhFd9cszCD5cGdEH2bkvtmSspxsarZMmSa2x3ExA6W7soSWBwte2omCizzXR34R4oy8L",
  "key15": "Am4SxRH4nwQTPvxeHb2wwDVKTE5sF614rppT8nmjT3jynrxj9o4h5VBxvKA9smfQLekqE8sm1c39CnhEqSbFFuf",
  "key16": "T6sfJwtkmmxy6YYnBALcRQAnZMHPqaFK5n1puHwjATiD433PJNFjro1KL3xfLzUSdnAeoYrtGpC482zyyRYby3R",
  "key17": "3hn47q16gBKXhWUDWjSnGzu4qrK9f2rJdBgUV74LEajNoRrK3nMy9XyraNDbtT5gNHrcMiw1mXD6j71vuHMjUpSG",
  "key18": "5ZFRge4FxY4d5RLW1muc9kvhaCx65nesP46qkmC3Cy6kRMNrinpsVynTcJ5ojzd1t4bQPoGYQReQbac264YR8PUt",
  "key19": "5gmnkULH3ySt73skqjqL6Fn5uxg8oJPrUdX2p3Zh7pogVnbU1bRn4CQXpFgbjnoym6zuqnP3ywF7NRArMCwgoAZ5",
  "key20": "bjzC9QjMdBiMzfRZ9ooGcKX4FUfSBVYem24Hjts3hsMydETxzW9vq57MmAc3gFwKEsSATB5AiHQxpvGv56y1ct3",
  "key21": "2Ri2MCrHWnu7fYhDDaR6ZWgwLqhefq2Nx5iovM1djv1jshDdbHSBrgyBRtWmf1bW3nNaq1jMdJMNFj7KpAhsYmcJ",
  "key22": "5B43c5rjKJbKxyp9mLPajy1GsgfffyHk2gFHuqN9cg6YHS415ZwM8uDPf3rGFyWHLdR6pYXA5JLbjKvhAPKTaMfm",
  "key23": "2cu34H62mYT22F37f2yDagYhKqTtsHBwdr5FhkwVotekMSdEaWvzjAdTo24thvt7iFUVfTpCihhZ1axUABNb72Jp",
  "key24": "3b2HsvEhPLNtKD27irS9GsVKgNPWKnnkutHxBPVewzHe6vX5f3eE8PW3QnrNLmDSP546HzyYptg77LbyxxNF8E5X",
  "key25": "23nubPMjzZ67zc8efoMYjGuWWwdwKiCZSgn2ZDdyNYzMjeA5QT4VvqwpGHy6aZGZbdaZqurVbNhoqkNY2ZU1STEg",
  "key26": "41fq2KKebbYVqeC366gRakjFdsibLBo1PdoV1Di6LC7SsoL5nEFvNK2WZurBNFdmgYQE1AhzhK3RXV4UTniWhnSv",
  "key27": "5qqzg8Ypy6yCRKkZh2su2djenVkPike2z6uv9erdxmbHUjJTbVP68GrP9STafFk4eGKt9D85bnszPPm67H3tBtc7",
  "key28": "3KiNmVupFrtEhg4jNcpVpCsKAmtMe5PPKFdB1P6iszgmc792gMs6cDByVVveKc49ZYco6gLeVCTjdgwPDtwBrDk6",
  "key29": "zqReLCyoSQ1J6jLfzfSykRkvG1FYtUuFt7aR8JumY7S4wc61rrfcsiv3yAkoDLtPqyagbvjJsLoiBWni6gSkxSS"
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
