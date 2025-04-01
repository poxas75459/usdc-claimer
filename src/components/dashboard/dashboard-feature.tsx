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
    "4MDcf8w4D32VPeexq6d1vk1RJpCFAaYksztV1JNVRS5t6c6wBPMVM4TNyd5VavxhKDhXUXw57dYbUPW6Y5FYYMc6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4baga4BkGaadtSDs6ZVW4WMQwgf67y3JTPEBzsxTH3fHPdGtmkrBUX8HJk9QdiCZHsKBxRazjqTut9eCiPR6yYan",
  "key1": "4abtQFyTNNN3Exphgs67YQ3b2veFR3ALqYVaR2w5vqb1Q2PPXszm97gq7CTnSSKxXwgkjEA3VtWw25Q9WirkzPhp",
  "key2": "EpYYV7fq9YyC81TEuCy1H3EXSrawkPSSvpyS58mWXtpKSyhSvgdbWEsq6AZwo1k35gwZyNxYLwksTyhsXffZiFE",
  "key3": "4BB42iTQXutyNGcfigpfe5vsP8ubwYoUWiSFBTuT1wYc6FNQCouwJMVAvK6xMv7Z4pAJF6LRFTJN6A7wo8Qhus59",
  "key4": "z1EU694QtjyraWehHedpDHjGMeXpAQPYM2T2jySu3bgs8GfGQS3YwZZLkfJnw3zaa8Ffd1xFxd65bTEUKvbLSMn",
  "key5": "2DmDAeEvkbUiUgD3yvTtuXX7uqoTDBWDR3j2ooz881WBMPoEqqWULka3w2Km2TH85B5aoaYMyHFhRfwoqe3hCaff",
  "key6": "4LQTQJfu7QwfK2r7D8Q6qQY6g1H1zg2DCh5A9dp2S9X591sdYngi9NbTk34kx2aAvZ51mTxvYFmeEJRdkvyqUAh1",
  "key7": "25Fo5stCDBvJNX8r7Kr4N3vkio5z7n1neXxAcf1QTxoC5vVTYToT8pn16XyPohAL2ARJ2ZKcFwEcB3MYPVK4eyuT",
  "key8": "vvJZBVH6aPz5HLghyoN5hMkfuEJWWspU9ZCFTLWTjrjSPQgzDu326gPf4QqoQFr7Nva1PVMjvZrtbiXucVfuU96",
  "key9": "52dwfx1cBtm3fLb4oRaJUkQiHBiXpNRPdvWe32n3SUXkkkNMEhW5XY9LaYuzBc8qW9gNgv8K2VUfZRnAFyLneHx2",
  "key10": "2pfCf2inzssyHUneAL3HPfGhYgSLf3bZ888m6ryNviYTnhjHbSp1aJ9S8zyFmwx4aejSz6ZFon7qBC1HDHdJ3HcT",
  "key11": "56NAeQxBu5fkG3bVeuoXv4cGw1Mtnb8DyDUDjjvTKp7SCWPzDcrLYT6GoLaA5x5BukLa5qNR19JYNEkeL59XqYuW",
  "key12": "3AZRq77LdHv8wGENXhX18ARD2tB6j66PhcV1rF1kfwk2Tq8QXfzAVCMnuKuagKduVVyZcAWhvHv8ds6kpMVWd8d",
  "key13": "3q1qEkoHSxq2RCtqA8Gtgs8Lj79uMZunGAL32DFhqqFZe7Eg1emBRJPFu5PnmgHp7mEXn1RfkBFPt4RvctwfsveM",
  "key14": "36deniXxGBg5ULUMSwjkt3Ln7ivxhYzMT6x3PYV1mPT3xoaGisfLASLjFULnRvonrPhbjUkJrnR1VRdEmcUppWCe",
  "key15": "23bT9JbcLmPxjWdy9kc75KK96ju28RwThXsUykjqmn19wGrhfybzRGXQVLsqeaL7QW1PMfu8iBhCGG7ZGmsNuqvm",
  "key16": "5FyoFgBswjgtTPKB6LxWuSQk9kMxbKCZLDQhMSygjQ3qN4pJh5kGVu6o1SjJoAGEwvh6S4adbAKV9cTvk8TW6vSN",
  "key17": "2Kx6HrxAHgMu9ZB4Q55vSaPV1jrezTMURQYEDTiS2p8atW6w2s5A7LdVJtS999rF7iCVYnhU6XkBM7jDDoFBLNU1",
  "key18": "dmJivjSdEJhHF3YzWAhsnD1En7NHBqJ96dT6cUCS5EZcWoWHwkoLZqHQ9LgTPpwcc3bpKsfvqovScuBMZJQghcV",
  "key19": "2ARvCS2pSvDo1MssE7QZHVT9eNkJk4uDWFAQZcn4SGshuag6Zkq58o2QqfBf8DDWW7fuHAW8HqokA7HCFMPrqoUt",
  "key20": "4quW7hHw9T8bNtn1UTPZSJT5HryApjq576XMmYUoADZp9NqrBivXC52nZqR87SUngFcEHMbiQEy4ay5UQA1Ep5ZU",
  "key21": "3qWg15axbXMERMWncX5x4tN2oPpB65XPitfR8cfT9khwQWZNqirgx1GWjH4BHjwwLjCHSoHQnTTtJouddomhNGat",
  "key22": "3VtH18abYn7EnZL3K4Rua4zQzgiSMsrfVcwfPw2FeB8bnDyRBZqrwWS2ARzDBbBNvpc9XcvtcSKoGYqjQ5qg9VVy",
  "key23": "5Qzm7Fnj1qX7JssYdMeuv3WpcXSPXYvSC3hS4JtuAZFRWi9bvNxuTwzxzogckbkbfwcKkwurLiNhpGvUNRGzv5By",
  "key24": "43zsLf1KDP4q9KxJXZvWMY7VtTqbi2gQ6JkkRexZb4YEAkDeE8UA1KR21Gp42kMz2QAnFusDkGSgSJ9NLUptDEQh",
  "key25": "5Cq3AhvnP8Cj17ijVYHgKHMkTxppL4WxSeXS2ZCbF8efa4G2AZAd41B2BpoJYGrXBZnESizHjEkUQUpQt6U4CcrS",
  "key26": "f9YzepqyHmY1P8vXHprRBe4K1pp4eSqk8MUcxYEmz6SiHXPkumZ9rxm4eksmSeLe5nq8c7ZB8zf3cvPWddkv5Yg",
  "key27": "5FCCWLyxhRqDme16W2tbTnBC1u5DhVR3vghRQ3yNgcBRdfDFeAT15dxgpQL7TM11scLGXLjT8ZUKQAesvKLn2wTi",
  "key28": "inyuLuHi81b8utc2aYjfLnRBQgacabff4xdn1aTt5FzuJx8mYJzzTsyhH59wHA2FYrFKjej4Zk5yMuRvrSDuxwg",
  "key29": "2rPWTbEWjNqq4q4ESjzcaAvNjfrg8ojDy4q7CV4Wvrj61wPbeaRDEVb8KPr88nga2gLAzZadnTZfdrE9fMUST3Vq",
  "key30": "3mF8wb7rKKBCQnqRh7nyxvjY6ueMwdeAAnwAMAFu9E4rnFVRDLK54EUg1zp7hwGyThvD8ebQoqmGaEPXaWGTPtce",
  "key31": "trRhem9KFZh6XexrHkTY8KfwfZu8eUrgYSneXBMWk3HgZFMki4unqidkHyGZRedV8wra6w5jKi6U1FeM1F4SSsi",
  "key32": "46hfpr8gseHYkJUWbyCubqCr8pFzLwAR2p5LHct7t5SDNRJFPsaYTvHhtkg6bzxjMZ1cTDVY6NzXxheXRg95LX8W",
  "key33": "xbcMHJYEytEDY7wvxKZV2eqXH1LUG9EWT2QtDmMecVDN7MH5f1c3mTn67rJEaDEfQX3MdiyFGJ9hC5RDXj1W32V",
  "key34": "5Rkf26Hy5pGJnYk5QNpqsG6R94tGv1Q2R1BNYM3hcg7TYUi812Z5A9pwgNcM3PF8qADzpYAtELnhvRjmLg8HEwwM",
  "key35": "3b7t18EcAo86trFw4wMS8fjtXQhYz5Ae3DMPK9JXbVEbcKdtQJK1FFoatPp9dSQKPF1fFLuQ4DVzzGLMqwig4DqW",
  "key36": "2QNkEK8H3BDEN3ZVSTmVhpJAvvtWy3JGCf9CpDXw4dSsdDpdjfi79vJ2ATnMewfVQWofF92oQZKEtjY6A5rjs6Ro",
  "key37": "xBtEuPtVBG3f9m4VfsG9t9UratxEDosuv9gVD2xRKQNUQYYwEQAdmdU6RyCigyamEaFQ7XswJBV2oVH1nNTzYME",
  "key38": "4DWau58SNaKDAs7L4phmkghzv9rp3fuMEyoecteDywShrjEaUw5JhTxzQT7LkaifjmbMSk78oQS7GTZioknLz1tK",
  "key39": "5PSSPuxtNCKrbygexyHfpaZeBqYDuNifor2RZvgk4EcXMoP2Lb55UeRPwLSF6wbJdXcpwWqEfhgWB5QZ4e2y7FRc",
  "key40": "3WJXurV1no5cJsv45rfiURnf1kqsxyU7cQksznz9gkHFasVDvHFayNUyZ3McdAGEK7eqpU1ZR53aHTXk4dsPRRV3",
  "key41": "2DubUqUJHkMaotAxvnsxjjKEY6gBwa2B7vs4yyoVytFkfRXuAW2SZZ9zszuhZnBLLpXScGnyABhCgeuSbukeVGRb",
  "key42": "2Gj2ZWvqLcMDMcUYk4FV8NsT3JosPELx6yj9PduwaVwY1W1smYeicJ3LDbK8jR4P3u99nNKnzaJZV4xBzG6oMrw4",
  "key43": "431K4RkwEmNAJ4co5KodDUQScqZAeoSAqEkFasELsbR7aQKumXcgcdPf3mbASW6gcjqGAk9zHqbL7iVPruLdo6eW",
  "key44": "93qwrTNLzeXLH8rxx1sNZ7jGWJPGRTQp3mHXjeLQS3a3Zm7YCiGxS4uSzKK5W3auWr6Qwk4TJsDL5euQQW9g4cy",
  "key45": "2yhxZ49v2EEJcvCXimJbF2fsKXGuqUmi8YuN3Je1HEn4P5vrR6N8pCYFae1P3pfXSUdpsjsgTHEdSXFcDD1SSM69",
  "key46": "4Ef54MDSsYwCs21cG8YFEqxB5SEBgwUWrRJxbxXc9N5wUwfHxAmJ8dzxoa5ECLaWPpgR5LB59xpJUZfzYFxugCX3"
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
