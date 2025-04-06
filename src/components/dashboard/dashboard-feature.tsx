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
    "4J8ELUphrrb6huVvLYuDZ2MDDRxazZS6vrXoMxBoXeUXnWpHNTsbmJTFD1aPtj8nAjMgYeYWimXwRZGEwevGCPb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nvEca1Y4Rg387Y1ZhSz2B1aUgnmLxixEJXjB1MDMzQjjRjiBqLd7Nji2DNttb6daYnjpKcYMuLP67nSpmcC319g",
  "key1": "3VbNLyRKoCH6ae1Zfx1Qn4pmKcsML5rQVxbp3byEjdDYoutvQCvPibQRgrERutFJHKGTV9Qm6CbyS5YG94D9rKri",
  "key2": "3zP4msmyRLWFWQmMNkqPfu2NfccFADbiYHTyMLLmt7EEjPzTtT4WEhh3M4X7BtKCNAKLnVXB1XkTHxAnYRzGdiqR",
  "key3": "3TMiuPF1pNKi2N5hLe1SDnT1APJVGghopexTBHoWvYo472iY1xaZVNv53MJQ5iu9eN6w58EVfXXU5Qryxb3MDVkK",
  "key4": "31i5GYMUjU6h6ufaZRgpnUAQm9Quz3jaG6db5dfS6MPdCtV6wtitkAdfBLoJQdNkGDgXBwoSuGNGoFoKRBLRLA2L",
  "key5": "2EaEH9xoq6VLfaQogyrRokZT3VtusVnmZYtwdWNG3RLrk3SHrUZ8FucCbkjbjKokrn3yrZYejzFpxaFWrtNsuZYP",
  "key6": "5ZX2wU31GTgUJSqqj6tHNm9BqYmtvWQZbqtCGfiRyg6yhiFHLaEKQyj2uJd9vvCpUhtunLjzqn5pRBq6dxwYQXpg",
  "key7": "4eV1qDgcc45oGgB2prq2E1LY2FYgza811WcNjuZb3hzMFoauAEswZAbdJxj7kmssGVKABbQG5o3QyJyNGXHGxMCt",
  "key8": "3WLFiBgqw5K4RbMeVZ8yR2VXTWAabNtC74XWAEwJhhgAMU33vyXPHMcCcmCV5zzUSf9p5tDZARCHFSxsNWkhYEzh",
  "key9": "NPyuKzJyKCMXvKeCPLLjSRyj49GSPKwQHAXj1SaMzS34HeTsg2766tYHKtF2zDW7qYeSeGL2zqXC3s2D64dLhH6",
  "key10": "3718HzzmoU1vjGFG7cvGx7pjZKuYJiUcfUmur3x11nAeMELW3PqugsJgSVSLbnPjJgfGXfgkzcGJbQv8hCz1sb2G",
  "key11": "2h2gHNsr5bxcuYFxzwud7FydwPdNLfeor52eCiz1wtseHV8r5TTRSyv4cA2s7bTy71D3ot4XhCSXbAsoANEPPQUL",
  "key12": "4N6QsHz4joxABySjEY3xNzDrjcEkgpjvGBHjsinb2wgkRsJAcuvJ39txcdgniRydE39R59WrPi4ocgkKASECmSyu",
  "key13": "4gBhSzws4FnfaahxnU4UsB1THcAMEFw4PytWwFGakxjxBVTjHmn8a8KYRGXRMvvQUXm1RK7XjSECUqd3zFkKEgvo",
  "key14": "47AHWWDipipqTWxsQc2av3vUpD6xpisyEc9ZREYFviyia64wpezhaBpXRpSZ4XRFo3tU2TZDtj6e8ngLb4U1JxbK",
  "key15": "3afGZz6kPuxy5gZMKUx84V8WvNKKmNVmvypV848R5o5CYLCq78tLwk4YLRDv7V3B9So8mvNhVqrDzvwYFtzX4VB1",
  "key16": "3RRURN7W2bMVjfH1YYpwmy5wGBoVC3WdZqJUSrxqkWx5GiyVerHA2EeQgsfvPXhSmETVFJGaTji1ERYLExMKbX2j",
  "key17": "LpUKa3pfhYoZHMxVLhBsWp4sc9yYzu191wzMtsSF9zkbsAmWXt1vLsqQH3JkUCrA3ec2Xtt8FUDqBymmtHE89BV",
  "key18": "2saSbsPNZqkFDKBdmRoGwt7Lo4EmbghyYbahcymdb5G6p5VSLY5PtyV2VUB2RgAqWrjeFbGGBUWRxPFsG4GP6JaR",
  "key19": "4rqUiDqt8uVEN2Ey6RCEeUYgzYYGUbKhpbceNUnNHQcKujJYoLprkvdgamPhjccPPaw6f9jF2aycQuCwM16Q1Vg9",
  "key20": "2QFd6zkSC4DvAk1WFz6jrgP9gZYiKDdor4XvsyfupGAEKFr5N3BPKPiQcETBPn1gNqFvEbGa8ZncnnCMqVMhdqfT",
  "key21": "58wchb2ayfSqwUU2bP5qCm4T57QgiNXkczUYA4dkzjwtt32hYYU5n7KePSPj3VtNYdoiHxv9GXKazUXuh3oRCueG",
  "key22": "3ZvDtpnWcz9vX8QNoX85KTBwgaUc3gKDETTppRnwzVou9m9V5cPryv6byhU9i69dFjrSftwRjbax4rp3UkQyErdB",
  "key23": "32DhvcbAbrtk9mUdyzPi9CUm9vk279wDu44ACzEKLEnoCyQZEWEZiNd8Mj7ZgmYfAZdTHgUr7pspQ3iMiE7jsRNq",
  "key24": "4Pe4fZfRSBuo1KD49wai2MWmG1UFgx4iJDUQQr2qabcRFXuTRTNQSATe43AC3SddEqpyyZaHViLrp4Z6czERyivj",
  "key25": "4y2VFomt63nXEE5JcrwvwQzFBb8BvEzHEgAAFzFZwkmiX4AoB85NxXuFjix2A9BQXCUQGwW6KCpufywWKZQ3eBws",
  "key26": "5vTxG1ZTDpRbej3uRMkNcN1tpYE2mh8BpQQyZwLdmN4MhQBcusJSL9fKyvrpaWaunuh4F7LFddoohCbmd6pWwAYz",
  "key27": "3Yx38PGcYys8eTbumXti3u28hTgStw6MiSvobcf9vGG1zgKYqx1nmqcVi2qxZYSrnTZgJxV2JxLpieyHD85y3CDi",
  "key28": "5vscb3FawKgn3s4LPratWiHRf8QAYWUqfC6N8TnE3m1oBCG4hxV4jFsZi5Mb8PfwrPKHTrVYp2AqcfK92W5qRmKh",
  "key29": "4FxXyNRbLAcEomXP9m8rV8njNznjVfzwhcKmkxUEuaqrnQokuwu2h356oif7AEWeNfseCE5LawQEHN8XqS6LuzMK",
  "key30": "51eW1K8YxaqEQkBbXz5bS3k7YFkGuBptZ9t8ZRDKXN7uTw73brYWMeRLnjajQF9YcHJvfPTMLuCcLL16sXMhWJsK",
  "key31": "5rQkvzFkJHsrEDDAi5ZcWPzn3HUUAWvE7b8AAbocMRbiE5Vcw2MnJYRegk42WjgvrxnmzBQTHBnp2ePccCgXjdrr",
  "key32": "4YbP4NLwJNfHvmbdtMrzXoHWJvvSVp8NPeMQUfhVeAmyG6LzXV5tNqNNj6Kuz5CkuUedtAEYCnxAiNt9M3ioGDbB",
  "key33": "58HCsHYoAgEMYJwkjNU41P6Tk85Pqqi59Thk2naRa6NsebH1h3CzywxEtr5iCK2Yo2jh2nf7WsbFdba3x5p3sPgQ",
  "key34": "5BQYXxeCdhqdcR3PrtVW5hoaLCDyizNHQRXmM2LXHNJzGXNCM4WM2ZYGwqd3GJo8xAZ3AKBD9uvj4qfxcvGMnR7P",
  "key35": "3rAVg6qJq92TRvG9Cy8JbarvDf6FJ2ZUYSjhukcSYXQyr5CiNTJxcczBwFSeWuouGsMwzYGKVKYnAozv5bPqAnwa",
  "key36": "4WW6J9yZpfpknPvHMPdujwHrn2H5Bj3CfFSRrBXVcs6yP8Q9P7PLH44dRFezAJuJQoGJvhd3E9CrTPvW8D4ESRJG",
  "key37": "25VokzSqD3CKFufrmkJMktpC5ZyL3GoQooVzzhYFTH3uzhzPvpa5zZPow9p1tJPukBDTd7srX3reUi2ZHsPwnHnt",
  "key38": "2m1GHNRqHTtsmS9Xmx2viNeN85ouczM1SRWfG6GAmD8dBpSG4LJ4RcAspzi2yVWKfGr2U5gUnUYPRFgGJaeSJoXv",
  "key39": "5jmBtRT4LZg6jnt3617XZHoMxAxRKhNU5Y9PSYUHS6vepR4SYuJqT6hZh5v5vqd2xzqyVKTm2z4jsBVmpExtR9Mi",
  "key40": "4LuoruUicoFVYaB6BbgVCf5hUY6i9Lh1dB1AhoRafcgrLrbxuUuK9rMFwAvHwg8kAUSRoowmwrhRDAVzKVdETeco",
  "key41": "4jVjimfjgPMyGWGFEgcu7nyRGU8Zmd8F3Eqb77BXcvPZfDkYPMPa1iDPpT7MSN7WBCM16z4Qzinuxtg1yvjX5XS2",
  "key42": "2q7ZABnGTptkuHHCDHi219f7kCxYHDHBquqjKMxNicaS6hSLuVpPiYFfpFsRrSAnL8YW1iwAKX34FHugbVk7hS77",
  "key43": "RkJkR6fypGqhmV2HJYNVyJA3mxchQWC2nc1XffpBzcjSkRYEw2F93V7NrhRuB6MgCn4vXENw24qaDjMBu9VjE9A",
  "key44": "kxomcJXWJLhun3tepVQ9MYa4vaUcsCB2v3yguPiVBazQbBYsecESbq8hZYvnWcBRoh6iw6uTuTMjCqPCexg5fbX",
  "key45": "5afCkZEjL9wv8iQLic979svfwtAzTHkRzGuUgpU9po2zv2UL7NdUxJmDdi4G42yQNEYGiZmfzbyDYNJeYYka1vpX",
  "key46": "64no75cPsvnBxums3jmZKasstBKkhR5td8gvwuyeWfk3JtJCJeCnxS8UR7ADucNDCrtWVLKDtudiyJnvKjp3TiB5",
  "key47": "knTPAxQQz3B66QLd5E1i8Ajmc8AjU1JYpZh4CWTreJQ8bDxosh6hTf7FyYMgsYy1jfm9Tg4v2tSWgrBVL8FFQNR",
  "key48": "5A8CMS39mQkZUrv5xqddPUccVkmBU5Y3rhYy5YfUUfwozTa4TQQfdycBhcpfDDTPgASac5of8cBkkMaUXsfbFfNX",
  "key49": "2jaeCHiu9uqTiGMkzWw8Z2NZSAPcGpYGC4zoJyc6qrBmF5zCLfpmnMAL5yjtkwpUzTUYEbxV5TgwVgVfRg6jcdsD"
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
