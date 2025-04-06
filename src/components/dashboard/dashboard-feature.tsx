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
    "5yM4L2jeVWCxYNyBA2dMhMmgeEudQygg177NCvCED2bkuEKWKUb9VuhhS8dTmN3bYGbQtvxniaJPt42usm25yySv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ge2SP5pnRNA2oHB7k33sWR7CcJmPDCY2MaufwYqvAQCHVGRYNArZjoXVCCUW3EQYc6jk8j65VMusK6CC2WSs81J",
  "key1": "2F8fuLrodswiur34j8kkTt2DRRm6FNGRifqpz31PRPx4VFCqy6kn5Nb2CiJFNaowgiwxUUPv5eXoWnyXxrxifMg2",
  "key2": "5fGtsSjZ5HkAZCiABNCZine1HDDMuU29sSnVcKZ3nhVZYtpwhJmAGAu4CPorZghQmrjadVdx9vrqGweoyz2fhVBg",
  "key3": "4pMw9SnHWtBvGQFvWoTULKYmz9mtacJVyC1XLi8jqTj6A3RH1zm5DjEA8h6rYRGT4mKoY26uBhs1UVwgAJ6z9dL3",
  "key4": "4y2hTr1xyBuXpcHt61zjdpksD26BoVPLhHNANXhB8Yhk14LtFUa6EbhvUWMjLktAJm5TckhNmwriUJzJH6bvq47t",
  "key5": "DXNffissd3E9zAwf2Pe9m4T4FdMGki4JLqayrGXR4tY3Kij8b7WYoMUVpQ78P1Rert1KRxgT7jkRJvNgL1wUhDb",
  "key6": "RsjjL9k3DH7tJwmR7wCKnhE97K6xrLfykbg4NwraW81CAwPjkTRSvJRsmDwdcS8fjn22PMMRGY4cyXaqJQpkk34",
  "key7": "SCaKa2ZEsEg9rR7gVgBGq9w4d1nCgWjaQ7bGac6wkmuzxCPzqZDH6Je7ixDsb2CgWg4KtafztnzvB1Wzd5HvSHY",
  "key8": "3hzAfpnUtsv23U3Ma6NKEhw7D2wBySFBxoA5HK1WC5Y2sF7eZtwqfeT2xxZJJyJPWAKZNn713Q1mNYR1KyLBwwwo",
  "key9": "3R5CQ4WUJx5CHeJxYANoFBiPNtBrXxDJBZQYmMDDE6yuhb64m13QK8AfscgB47UxDntco4mS49WwSCttEJgktiwy",
  "key10": "3ieB8H2GqDEbNneavJHar1p1DfKHguhm9n3BJSCteDMSVFjMK9uBDR7QZYmp7dzWMrCgybPGd1G8vFAsVi7cgbpT",
  "key11": "4RKQ641qyZLaMpTeyD2bZoguXTNr3BxdNTjNNt4trDSmjNiP66bK7o2eVbeiwVBhmqHzPupC1YGunc7PLeMZ1uyz",
  "key12": "mEmrsX97TrMQQse8yT5QUQna7TmnvHgG1xLFhJsotLKXk8BgDzfVNG33Sn5LkyVneUYsfYfHaFf7NWSgz2mg1qV",
  "key13": "3rowMPqXsbBeih4YspTBDwP4tokmNmiJ2a812XHPAd17JKtoQPRNMe4ehXVTxKdS4SbD8vQ2fXdqAzR4WVo86EGr",
  "key14": "2RA8hNuJf4RhEWFwcPUJxnHDoupMcJbxv3s5qCJ4fMtAd36KzBKkxtvKUfNMs5NkiyqxgvPmWbMZecEB1sByRi5x",
  "key15": "33xa3T9SqgcrQjFjW6SBfkFWVkYSF1hkepHoqtBvLLq93BrKP55ytJZRZwwgrFbpyMNxgqJMTWe6NxYjGCZKBtuF",
  "key16": "5YHnPeqssMeLhGUzeKSUvcesCH9MRuLPuJyJdSnV7AvoMuYZhkCT36YPHHKhx5ZvAyzBNfnY3pPMXmvjrLW3XVjt",
  "key17": "2ARqiR6vtCgzHu8PzMDfddvRdMcvX1cHPsWBEEj5SpX7y3hA1gfp8uZ8LhXqLQmpSzo2vaDU6AXmEkWgxuBxButW",
  "key18": "645XURUZqW1NorTdPXN22FrRY5wLbHt6SovNJUW5QZqrjgL2twZh2z3iGo11SUhh1kbEKqPcXFVG7i38M8R725Vd",
  "key19": "3ExKVC3ZAtdQDRPKwx22G63G8YtdGvjhAVascCGeyQ4g1ESkQgidBpo8u299f6AjNvhSTb4tX9Tcf8mm85APRkf8",
  "key20": "4xhrKh4zsNCmqd5gmPyiVrFtwBWYrJMkPcKsTBN4ApVjZGxEXBgbgEDR3gdQzxeYWs28BYYrqDKLehKFQnz8KsD2",
  "key21": "BFbbg7HegbegrjVvDq7mCUGJ11D83dZmU7QYbsNqNT9cwjo5mMMnfuazy7CrEve8o6eumgkCKpxuQpHtwvByaX1",
  "key22": "xvC5XpEgEDrGVVyCJ8sjCnbucVLup2Nvqkis8mqHbTnRWZsrrYfvurpqkvsfhepdqKd3UXeNkf8nwSWAhy383MX",
  "key23": "2tv5YgJAcq7krpkyMNt6iQ1X3ApYGA3E3bXCTGpqYYgzzQ1UaZ1tWdt2TtgwmHWuqHDVpJDVQmnVGJz9AfZj1GMZ",
  "key24": "FHk5EjEz8cNuQN1Qon4Gw3yNfbCCjwKuxAnye4GNtaqC11oe4jk6hRYqKspuGUutg43eadCJuTdZ8DcpbJKq2yc",
  "key25": "5Nbz8io7RfJr7JJpDvQDKFeB53kVBBYvtRrJdCZVcLN5yEFrUgGFZV8KMgggTnRzvnRpUSs3UrSjMU5haUv1RSEc",
  "key26": "5VPB2z5cGYvsLTSoRU6niP2HuA21ZD6Vy7xbqYrwa6u9qsVs6BFMd6md3Lbvvt3Tge37SGQUQTsdnRJQ9uXA3zWQ"
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
