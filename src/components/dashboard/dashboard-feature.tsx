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
    "5r85RmPwGy7kPycFxziy8bwqbmBDkp8uUL91nxYoJf16236AyeWgR9QcZnxKdXp7prVsHjFgaqae7TeXYQSCmcN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PDdPPg7sNZMa3jNRZN1xDuTPdQX4Ep4T3Hw3NsVH3JiGTyL4fLYifcfeM65p66yVpv2PMfB2m9GxbQT76xZwk72",
  "key1": "2fRmpU33eARcw93nu746q76pniysTszbhcYVWCCUKRtGF9TUdeNQESKeEVyAVev9KZPWjeQ9V6FkrjEs4red3hBK",
  "key2": "bsDpqGgW57ZPxnhexx8wGUb6v8PZcKA2YB7e93XpokzJNrBu1muZRzVcLDf3wi2pu5Anp8wKmnMSjh649TY83bc",
  "key3": "KDnJFXNLrCx9PKeUGVJombidzSYCfHhxAwZNok1FYLVm9r38xzipKjTMcxqrD4LdsSKztUXieFdfN8rFbLR7VER",
  "key4": "2giki1iGa5FNhzwYMvKPhazvQ1n9hAhDKeJfPqW25EgCppBLowmxxFXb6epURpMfTdoz4AeHAL4ySMwQnsKNmsFr",
  "key5": "4oZc48s94kpAYMZVya8FKRjpCyDNNhaQGzLowqrwYMwoDrfBYTzzomVoycbLZ2voQCmCMh49zHYJ12pjaScZE7Co",
  "key6": "3YRTxUVT4vefbDD2zpGVoPh5egHu7tAG9ZRxXscNMM8nBCJgM4UtrkR8eqz4Eg9xSLAdwdNG2ogniP3fSVyf2c8Z",
  "key7": "JfwUKpnjTrRkXbg4vpYeejsd6LMBSkH85MbfR3VTEw51dSUAFB6BVBRP64QJ7L4pfNayq17rnvLASzoiXkQLE6N",
  "key8": "4XKpNMop6y34i6z6k8qUJJ7uNeUnjwFaT8QZ91YjLxm5qqnHKff17VLKyN3ffv8cYrQZ7G6S1iv2JPf9bu8c58SM",
  "key9": "2AjYSzLHFN9FhigEgYZSCkVMXwpg6GtbjFm4VZtCQF2XEfD8jRiWtUSu4Vc9bZZNjB873R4DLtzuFxhULEhXXY8U",
  "key10": "587KhHXfSFwPPDJJV2Dqgoyhnatei7Uv8kMfWz8KvW3vmwxRN9QBDUpL8k7dFdtdVDNqmRdCFFLXVLo8dMZeCXyL",
  "key11": "2ThNUyUfv8Q7w9jFigDJVMRzBrKGVSEdDUMVunSFWLzMDFFRZS7tgSg7jTL3Ki4peBbJvLL4UVPeh5S3SPd2htDt",
  "key12": "52MP6FTYfSSfTNskRkSbxbr1xFcPX7CsEFrrsEjJW678SfnK2wBK2HDeC57d3RBgmLhTRcTFjgD4rjtYM7jDzkRx",
  "key13": "5XdQb4NVL7ceLY7iX2ciVuv4TPyBdzpX1J1e1U5wUkZqEdbm8obaP5y2w9NsQ1DcrFsBTFhZ1tqhzY7Es56bEtkh",
  "key14": "2SZsEzhDiuUsHF9mVkuCCNPUBbwShuDGUn18oD22ydH68YSsR9fFELMs84RHkh5PRkMc96y8B71iqLzcu7Sy5eiY",
  "key15": "5DPU9GsWPZ6hCS3vC8fSBk2iPLgEE9vpXw9wEmL6kHHY7qcvrRmCiYUWr2zcBRMsWTRK4oyR7c6o5quUfhbEnAka",
  "key16": "28nodrehAigXUCju57DZsmsuxpsHNowAVuKDb8ssHPBR9SLkyWbZtWpXNLMkndBFmSyELAMDVAavoZd9dqp65iNK",
  "key17": "4g2kvBZuHFVSHZHy6H5uNAfbBWkFQHH1STmckNJGTRcacQ5q2iYLtA58YKTi5n9VwDYFdobTr5c8oxRAF5aq4Z6",
  "key18": "3Bt1SiFH96Z282pRkXQf4cCwAvYQa53DZDuVcoVAPBMA8DX4888nN8Z1J9YN5LrUPuwCAoiJM9eTivj9RYaWnroV",
  "key19": "4GVDnhAwKB2Af2XVPKD9HybFjswrm3pYkTmPHqE3RsGffQgKVzq2oZHK48pVDqMtxF9xEmqMehMLBoRk2n8fkigv",
  "key20": "5tT7cSrEoRZRXyEYefZe4rPV6BGYKvuTgymMLsMaJooYVaYfjh1hveaCZLWhvx3XutXnLY9Zf7e43S4PE13pwe5G",
  "key21": "4WewncQiwiQh13ZWP52tWaVsZFfXoCnQXkaQaz8Gn1HLK5HzHRUUsuQW8nYG6KmA2Bqb8og9Zmy6k3izTaDDgHKK",
  "key22": "yfkxkTwt9dBvfhaP4h76wWRkwJLRgxZdwFh8ENU8VSWQzBW2XMiuthMsWrznS8is8qZY4quW118CadZYnxYByQH",
  "key23": "hE7X7qyvv5p7PJXCVkjkFCNQX4nC3qA1YJFT61egfaQdooa9HXgqJSRQpnBoPUPS8FvRLp4GGjfunWzRcNZwiQN",
  "key24": "56ubH8138YXrtuTQ5EUKgq1ASmW7LKccVFaeD2ETZSfNxM6Wznz8sgfnBs7kwxnmxkwx8xq2QGyDf3YSyri6S85Z",
  "key25": "3khZqiqUFBmU7uEQMEjQedNPT4fxdcDt7Eski3Acwt4E6889CR5VZqXyXPxwJ4mFS61VT6PfeqxRoKG9nZES368A",
  "key26": "EC9v8uCXaX6D5rWm2fdYvkm8SwLX8pLi5AA8JnP7toKq5bZoKG66XJQgRcGq54ow33n6WMxh7UAF4xhonb7KXo5",
  "key27": "5Q5rE7Ge9jZs1H3U7ku3QnA9PLNfyeUNo9txyasonR5c8Jwz6GWBd3C2Rfb3m75Yy9k7hkM15FKh6vquabTZWUkK",
  "key28": "58TxixdVYUCswsPwC8s4ixxsX4sY4NkZcsei5UZxw5vEM9fk6uJwXByd8p85G2bNXZqL4eGKR3AeLR92gpYxjAFs",
  "key29": "2codU5j6brDgE2U1i5ZDAPbURtTGGrzQjkorpofYmuogNkGwHqs1gc4Ttt3FwEWV9T4bgXSy3r1gQymQ6e4qTMpi",
  "key30": "3vgGxPKcRp4pZo8VnuTj9SuFpFrdRH6fAvfVCTHQh7L5qcFdGhT1wxpZap4hv32reJJ9dt2apiXUZkpk85oqApb",
  "key31": "N2s2Vzjovkfxd1HcuXsjKFk7Grm2B3ty4yyJe1CmmnvRYuBepdeENqwmHeLENVZmTVqUR9pb4Ls38GZVCPxzZbj"
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
