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
    "3gBSiTbXSu8zYzfXA5jbJu9dEZ93SfGvpsw4dNVDnDo5kX15tHrmN7ZVuPgWuE1gswfgtMySVPVVAAg182sufSdj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wVX4BJMv37YUjqAgYxMVFoQ1T4ts6D8Adt3SWjTtjF1XFriASgDbXxSA32feBNwjex2soDtcYsRGbmHy4VKGrSY",
  "key1": "3YMyW2dioRZWQBLBuATWp39KWZm8x6fuJUrDbnZbT6gxxMXh7F9ma7YoAmQbbaFV9saZSxxhu1n6noytcs7WpHB8",
  "key2": "48iL5LptnsQxmpQKLWWe2ZtUmXWxZWQxMzScf9Thrubc1iqFToyt8YmCgGbV8HaUJN8MzRjbr45PSph9bagDxc9B",
  "key3": "2fKR6zBPwsm6z49ntuCo42M81p2u156oMUpCxQwRFgJaXbF9xtbdZb5uBQdBZYQot7udaQFCwbK3ZqpxUiSSF1VH",
  "key4": "32Nj1AUEgJUSSoNfjLiWfMjfbqFArNnByezzDusSiH82GVut9QEY9w2rdXLyaPHTt9pQxTMyS5UK1AP5XUAKBtNH",
  "key5": "3X7SM3pVUFWWjLzxUxbrdUAejEYcWHuLRmXPB1wcsFa6Np43H4ST3eymkHbpPRi9mezMSZgvyidxcSpQ47W3GgR7",
  "key6": "4TsWEYSGy2seJ6Q4XQ6n6gnbXs9JByMXY1gaXooc4dXnSvKw8c9UHpRAMm1zXjnfa59nTAnF9tTrJcP7EiEtQUwg",
  "key7": "6YrKFhKPsn3ViGvPnkQAq56zA3nHL3idZowpeZ8xrB2sH4QUtBvdomZ2VAZbxR4akTWJEKJBaWbcGhE5pNoRT1i",
  "key8": "5A3miYHBjVztou5aeanFa9DEaj59jYMSX95NJT4VmRkYWfawGQbJL5oUBmKVxbAA5KkrzzQfirhrnCYvaQrBYAba",
  "key9": "4if1oCbbafusYou4ENbNB4sWQ8RmQAR6mKT3rVKf9cFoYz54TJA6aK1qNXmVy4WAuBnKwZDg8MeZn9WVfwFJZH5F",
  "key10": "3mTtHD82S1YFJfEQnbm24AsNr9ZsLkiiUhRnchKmVmaagQ6adjYQN3i1xLYy4ac61433asoySxZmTnqUS1fxMV4x",
  "key11": "QJeQeHg6EMr9VzHwHK3pvd9BDmF5e9jwJMDb5XVEjD5JeszMe4KpvKbiC6KHzYzYp6Usruu2aMXw5u9k8D1AeBj",
  "key12": "3SVLRRoeD1BJchYVZK7y5qYrA2ePh7dinvmeVVuncueFNkEiv7sgnSibXR559Wx2AkC4Cd73oQ1J83g5rXi7orJW",
  "key13": "JCDn5dziRt1PYb41YQuHV5BAWwmTXjTVRPWVaZ1QRi8m6FxorU67mptyptriBVPt16M66JPnUp3D243rzeBfyuT",
  "key14": "5bAKPBkdL2iUQTe3GYxAwNMHoWVUNZgtAhdRZpnjDHWWJMpL8dPRUBvTQ118d2iweVH8M3WohmctbS4GgB2oyeZM",
  "key15": "672kcT4NVLFNYbbEJg5rtWNVBwhfyaiqQjM2J4HhXRmfS95dAD7UHmcxRMuymF5tfLRwHF2kaNTZmNURz4sbE2fB",
  "key16": "5FbeAdv6kdNnfwnAZJYkV4RGK7kZy9uPTBsLSSyTQxMWc9oFnWdyfBiKPtEsFwyC3qbtbnwF7zWJSZWPomMsyAwN",
  "key17": "4P8kujdgSNoRJn7pJVVS9HMXjXshmyF3xdTQyJ2K1jw7JFqtUWxghbfxgtSxP4kANwFfinjvr2Ed448gqJHd67ho",
  "key18": "35J4RjuXSbq7gxLbyaCH2y8U8NM7cm6BLMpmkaTThG5WxA2wkfQAVboWWthAzAkFNnY8sgQtw8GhXABhpugFgZJb",
  "key19": "2D8ruVJ2fSQNdSpLJtA46RnKmo268YzCsDLdnEvjQv4tk1PpomFiMksUR9h94982nnkv53XhawdDZBqmW4DcibDm",
  "key20": "4aFDMWdKeExhTwdt1WWXvuZ8Ax4DjLghMHDw9yGZjZJzHanUFwsyBs5zCEwCh5AkVw5KMqUq2axSt8NkyG9KyKes",
  "key21": "3seon3pQCR13Ti5F9RHNuys9mkgUT6byE9xqB2nvZLnNSNvfpxe7sqzKXBpcxosmTDvfV8E123dKsRYqTb579HTo",
  "key22": "5Pm5tfJH6V89mpLtxNxt9freiX7dc3pUUP5LFckuXMaqyj8xW5oKpp32foePTqdpo9WvZe4KMgJZMxrR23pSyn8J",
  "key23": "3TS97fFoCWRgfsr4AaSdMcHayr6zfdk5BbUYWHFagdeoHxXszHP9ujN8r7MJjC9JmeJeStvcnnvwWtMesUKtFQis",
  "key24": "5UigmVXBPccXkujRJPtJwCPjWLnta8iMBgb8iKdDyUChQMvQYRrYC3RW3mtmoogfWLeXKjYyZ9dayEnS5UuBPZbg",
  "key25": "5RzV2WLG3UnjKcpGsV6j8eoxBMz98VfsMHXorJyjvSQMUMRkxEXEY49sQ855ymV91cE5ppbPKPN19br4tKYQd5LD",
  "key26": "2qYDyv6KSmrCSBxnygkmshB5oodMmZAA7r3nkQuNFEvCgpTYvZhuSgBb5vgGRpTWuQJcxzKDsAkmHnAfUCFCnGLo",
  "key27": "543FrwoHDMBS9CjGV3QtrQEKH1XdknGnjxDez3F7puk5MrB114YxY3zJFPMi7AStABq6zTPHhuCj26tD1pQkWxLg",
  "key28": "nnrFncvCMpprHaitQQtVYr4whyXSE3fEx8WWkrskfscVhcq1tkNcPLEcwL9EJ4air9EbngjqtU9QYmqnkx1phX3",
  "key29": "3srExCFgKMEbVeQpUhhgh8avKfmA1VgtksbGmVEyUu1WWX8sHdASeDBWETWYco1sZijcP7YwWEsGxRFHvbQG2HK",
  "key30": "5rdAqYsLTM5VKyppr83rms1qgyY3zrgKpjr1DRcZzJqty9AmnYR7qfgycS8U4mTYartvg65SWLbGUMGHPX5Ab2bx",
  "key31": "39fmxTAkF8i9btLU1zD3H3qkafaZqjwQAX66QQzpZhoj4M9bqX65iR4QjonVMdpEYnU8ueVSDYNEgK6EmYtR4GMG",
  "key32": "5BaKzuwxgwCr3gdqvq5JSpbU66hG1skThbh7SyKMVEsuaEBxqofKkkTSuDyJBmhKu9irUKJ4AjNyau8Hb5ghsS3b",
  "key33": "2s7nnUWyJPkw5Ubt1ummRD63dV53rUGbg6Mb6x7HeXAVespEL2VQiMVnqVRfdVSJEmDTtj7Wu7aHGymEvbPVghrQ",
  "key34": "4DCumztWhaANU55mNeYVkswELE1ygLReniVd329dTE8oEWuDxsa724gcfGzHksL3REdfNLrii3m1UGJsuBAbdzuy",
  "key35": "5RJvRphCxZtsQfRDsAbdVS7uJfVcxVKuH4SNAmZHoMeqiKmGYJbgDhWLpm4jPvw7MmyqBVzZr1bvt4Z7sJuRW7FM",
  "key36": "9hfebBrE77ieNYkzRozF97SL29ZrcTTPVAhs9GsCjYMskJWxmpAMtipWWRH4mxR8TikH5dcYumxQpooeABMF5Yi",
  "key37": "3viasRLGJxKQpijpPMXATppePKBawRSQbRAQJ2yLzhBAe9tB1wMHUJzgJMVBoKkJtTzdQBNQJVcxhFEhXvzoykmi",
  "key38": "xU3ztjN4Q35Y1dHRTss5SexF3s94Zh1k9QNXDV3YFStAjfwupF67h1EUVVtabM26t7SUZzgw2Ss4g1MGaUApN2v",
  "key39": "NRDAyR6FADCvsqfRuyh7hz9vBfreAYTt7dSXUUjWXqLtimPyVTwDaqjTRkn1JfRe3FNATm1Jps1sE5oxfz78akA",
  "key40": "rjm7FeMopPRV3Lcic5zPzBMYqFjga1N5bwPaSG5Vn7iZVNJyNjP3vRVgs3Carsp7PBWACxusrJ3qtDSTFmyHGvx",
  "key41": "5qJDoDfrVS7T3sgoCHwkiNRAGHBWN1XpZWs8gVK6JH56sc2vt4XSnyKa5WaHYfwvsZ5NoVBdBMzu8Xwx4tXuxCZA"
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
