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
    "e24ahVYfS4JKZGQZfykXGwHTX9vi5U8G1Fg245E6B2vgJnxadX3db4ssc6MJ73m3hKjWrtui8cxMrrgvxcoCvEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kKkwUgvMCbJ4bCNn8tJacMn9iJ9EZozeV9pNSKpKTHLCWue2oajiFFJUmSLSzzkfgpXxH2Eap16GhYqtgSdtWwL",
  "key1": "33WrUxzXKemyoUAg8ye6a9B34c3nzYKFdRHWDbqZL7MJQkxTkP9hxk7hMqqKxxGNpnpbXxXEN3Fy57KTj81C12oq",
  "key2": "5VJFWkGippyey93VF2seDQuFNLtURkJRWbpbbCzydbe1K1Gnf79jVromum6taRLdK3pqHhvcxHdkuriud3hoqhrG",
  "key3": "2GjDJZVLN26EV69Dz4iNXTrU37Hzs3yJ3GBtUxbyAR13TDfVKLWrpin9qxgRn21hXgyoyrWNWR8AbKV13Y1XFCED",
  "key4": "3zdGp1cn8pd4ihD3Mijix1xcuopYzZWm5CJYqAkx379cqc3MYDrcXAo2gLyBCkNkuQxttTidpGfg4PHZCRVPL4bh",
  "key5": "5eGtdVG5sSdxoE1ZoAb5Esy6Fz6GFj1NJLXM6QsqUWT9jQfygpzqCBeWNVHE6cpMFWYbL1SkghWgmAjkpa4epS6M",
  "key6": "4CHWMhseT8bvkJRMVsRGm9F8sAVEfzJFQtdWkJeM7mq8yGHuawan5EbGtLU1yGg3o5xmciuvRmQNn5Ykygyco3jq",
  "key7": "m1aNq95DfjhtsuEQBAG3ethRjoLCTW32b3P2biQ4K6osdqJooZYCfSUZvZLmcjYqpRxxrm4WQg8YgMnZNb5vNrh",
  "key8": "5yT1DtVWsbxUPY1NuivyZdqaAfEXaFVQPo4GXhD5A7KvSPtBiM9mTTM2v184f79UCzwJoTNJwdzEuVP9nEuVQsCJ",
  "key9": "2azTeaAb3hH5Xb8c8oaU6HT8UWk1bpnbMPHkKhT2Y9hABMmD7N7Pfxd8QbbBfp97JB65pFR9MtZ5AzbLVqtwtQZd",
  "key10": "2ne8nuQKcGzeLFFj5oCX5SCEzbqHNmmwSR7ndwXggjLMg4rAX4wSrZAV3gwDgeg8DcbMuNfzBJzbvJBJxb8A1bVT",
  "key11": "4wQG85wPSD85SNuyT58SUS5hSFF4eHKevaZCi3vv68RGsab6ZkG9i27HFE6CmQkGyxxhThcJG62GLaw1P6rN1282",
  "key12": "41atb1i6RiR93Fh3x4JTGVue6Ax1iyLsgfTAH883gXL39nWbRVDquH6G3sfucB8iRctZFLW9p3Z54vsWZnRnmRnj",
  "key13": "3ozPoak3BvMGzjR1oknfrFsAHi4E6jZhqXUwMUfG1v3vWCwS1JizghuayHBSGgfHrkXCoWrLmYr5AMeqgqgRAeH5",
  "key14": "63SXq8u4G3t3QEx3arK73CiErefpMjDEDv6jk1VQR5vs9nT1zK75juKpiEuPgCMdRiMvwMuz4YJ3t7KDP9pE1eTN",
  "key15": "5BYqLbPsqA4ogttNwNEH5qYQvziNxAWLT65RPN45wdDw9y3VtWQLFgY2s2mcoK5xYgKYojfdy86aas7cMJsJw1eK",
  "key16": "48kaEp3bbst4GQbBHvu7vh7UQyaJDBsC2TKm2pA8qehY93y74wmC1UeuHu6GhXu3WzCRU19Mv9DVoWwtXHauEhd8",
  "key17": "2x4AWEAtd1K5wWfZPCVKsWkLroBryD3D8iQrJiUCZbRckkMPXccm8d2og7U8srDGPyagF72HqVD1YC3oXH5nDq2p",
  "key18": "tjzXs1NZUZiwUh3QZy8xrSzHx4T3YruJ8Yd4xDiachZznDJYKQSis72PFiAk6a4d9pK575xZu5WUfmq8VWnQMSx",
  "key19": "2psEtzbWUHEVXFAzBquoKxdxofE1ZRGn7sQgMv5343YU7Wbg33k1eGo68WscVKeD8xEnPModPB2RSf7SdL1877hB",
  "key20": "2KeafdVcpTHNa5BpXfsGBMJkFQmirVnZx6QqB3qL38QaHjdYSpDTEuEdBAr6RiXzuTCcRiysZhF8SsXmh57vFx3k",
  "key21": "63Y8PrJE3a1VTbVNUyx8ZwrbY5UrgKPYewc29xV9XTWMbhzzsrmqGipnr53uqe9821Yo9kiGsU5ex5mQQ1MNUPto",
  "key22": "37jtuE9C7Hr5A7ktLHuWiwD1SeMTcV7NshecGobqyp364JxLFem8u6KeUc7cCP4MhPU3cM8c9spvY2jN53Zfi9Pp",
  "key23": "5c2rqH3x1Uk7Z7diYuydp6RaMuX8E9P7dJiqv1xa3E4tKRXnmb4rESLo3vpYho94ddBLBgg9mgef2xTwwGNk6J1h",
  "key24": "2Qig1VKspenG1Hy4VCgaMSy8ytWx9Rcduq4nUmDbU7pLARtFodqYYKKhYSbD6r9WL5QLczg4QnCMk158xh1s4bH7",
  "key25": "8G7xsqeBNdnViHvhpYXPcqnKRiAgB5cp2Lt7PPrZpxLj1ELWRAZc2WU6UcnqL8Ti5jZdb27J3Fzk3mp8rwEZ56U",
  "key26": "3pXSKi3oesVog5MSXr2zWLEv1mM4X9SJxqtD53X9bhCziybUqvPKYzkrZvyuXKdc1mrdLNU5LAomokzkYC2sjn1T",
  "key27": "5x2rsjJv2ttARuiVyaNe371WQqmL8UEfSYQL3GQyWLZTmVYk9cxrTqe76M8XskDzVNFyVWab1qthZe7YmyhALvgN",
  "key28": "4BAX8fMttbVSaZjqxghFTUuBddMp1J1s8Bt21hKxCurcWaKcFRvctxN3oPxYNqDUDwFtEswhHXU2VFFyj2xTX6mQ",
  "key29": "5VnYL8GJM5fpfrWjtVm6vjk5REdjYc85YHX21DNUEAaKqXzDfpew2v869jRUbwQj5bahHdejveMYdo8maZSWrSCe",
  "key30": "2S4QToC53S1BLsz6KYGww6YBTPx28Bgs7ZpfiuZQdJac13GZuXKERLWSJbt9GntmWCQgguFr7b78r5V81KYgv8mA",
  "key31": "43nWHxMXAHvDd14oGAgbMnD2zrdrfa6x14HTuDNW4VWNatSGPkYZCw6h4zZQmZaDuc7HuQk5DQy8dDfwhnF1coxG",
  "key32": "5SmzbakE6KGhyZRkAbhkx9fvC48p6VE2xGX8yUByday5gBsbutvCsf3nJ1xwLUiZshPZiKgQFdx3G8EXKh1aKzN7",
  "key33": "3QKRejmDNySUFUcLvN1Q8GsT96U1RkmK6xrreKC1927BaqPz9QDV3Vj4fqdzUS8HLNRAGodpZNoWiG4vUHfrANtY"
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
