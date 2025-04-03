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
    "5BBUHZn85b6pz8zffrdRkCDsYmifZK9vK1J3aW8QCzawNUjfg6SvuKUnsjNRKGDaCYds6XHsi6V7tk37wPVvBGZM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X7vgY6zo2EYVMf4GyksVthHkGwj1AZi4kVzkBEmUo8Mn1bH5ZAST16Keva84w54ayBYzPKPip3s93Lvfizaya32",
  "key1": "3bSWCQoztMHsj9nZ7rVqYeUWSbYxWbihM8RZrJuxCn9bEH5wJaReWtLyxuUxPSLBGNw5KwSTn5EDBSzFaJXTaHwv",
  "key2": "2juDHRdyQajzFNjjeW3nmmi8KfUL5jMWjYyYVwVj66P3nrerTYWhKGYzcM6giq5PbxMUJqxuzvtinD4Qg8FMKrJD",
  "key3": "5RqJDVEfSZq3FC6bEwCFvvfE7H88LMvM86GqNa9KxRaK1oajB1yPBjNo1HZ9LAuiLUMshbQLxFTAKXDF3pBJkfTY",
  "key4": "32zKtjLx32ESWTisdX37MXMZ2VyDteZ1VdE5WgfMNYEJnqjfYK3ByjCp88b9UkW7GAwJ53o4WHCqqHQEodK8wrvo",
  "key5": "5vuKL9N2r6xmN7xkRt6C6kRrcN7d29jqPT2iZ91S1sPeKTG3oKahCPmGdVDerPA7BEKpyx2QbgUdSjTubqyxNB9y",
  "key6": "4CkTLvvauvnbk8h6yWUZTWamYWxeHMYjrZaQm2H295GvpZKr9Zuttjg5qQ6jJHfq9WjB2pxddBXzc4ywWej4ifeg",
  "key7": "5PQNb7huwouLhQtFADM43v5mFoUv5DaFyts65jypNwBSfPZ4ce9sAEUmFSMfzAQmjUvhgV5w48VK95KZFQbn1gcs",
  "key8": "4ScijJSZcd7RUHeCCGeqrP8n1wW7Map4wUxQ3AaG4gSmSFkybpdhVN9MEafXxo9oXpofF9FDwMC2af7LgfCp4AbX",
  "key9": "cmYCXEiKcjoNME2rZxZMQAnoA6wpqc5Wq47wnMgNrWLX6kEqLj75PcwTz9G9Ja6QJY2ArZrENBbfcZdRSXZKAYi",
  "key10": "Cdp1FnRGvsgH9ZnNHTFJzsU3hTuFro7YjwSfXc5Epejib76cAEWtp4UBHjpffCnXE2AbMcuLFcMmCJDZYrJ7grG",
  "key11": "5yqpuiK5HzrwdB3UW46Rjk1Y6D6gLUBvsBN8vFCTkGUXXSS3Nxa3eCMXtrNWgWUfh4RN6mzk4W3KVz1gT7araTAJ",
  "key12": "2T7xwE5Fy626HX7PRbnEpQDikuFg3UwjsqDXAJuR82ttwKMYvA6XfDbqgQdCtrAU1KV5bpWf3G4MLTV1NQMPFxtB",
  "key13": "5R1X4an1N8q9Fzx3t9SJ6bDVfT58DnfVW62YqSiwypx7yptzLph4e7mqTi7ES7NGL4tLeY2RJXVXJUCMa5N97xWu",
  "key14": "4T54ifHjhxS7AjEs6FP838sd7bouw49NvkgPApftMikfK5kxXCqJeHGBKRDZayNb9BtyTCD6oNyif6Xwf3ypdrsc",
  "key15": "63EuVdAsQr8ScfZjp9L8EamQiGawXtNfoCCapF8pTqjqPskEjnfKDhU54bJQL4LmHzyL45NvWApjq8oQegKp2YR",
  "key16": "e2VDzzAXpv2xYpD2b28HRsSyFFHTx8xF8R3SZ27PpSi1mzduqAMiqj4DuDkJh9WigEG4PksR93Z8MyR8Die4Bxe",
  "key17": "4cL1QZ3hyKaSoehUAuWLwubCPtv5WPZ1vuT33bsKmnY5fY9HGa7Vdfp1g72wzTNsPGN8gvxjHciCMxuUZ54XrZ7E",
  "key18": "5iiJQv98bARaB5cLauvDvK9TJSEvLnx1czB1PsqmmLksM8ttwsqa6xtmvxikoT74MEhwSQ55c4C4JTuu6w8ZvsCZ",
  "key19": "4sAkdUScS58wqwgjd8MN5ENPNasEV2jqRoeLJoFDFZvXuQPs51JWm62d7nok6QnMAFMkyieQJMkfMfvudJUFfpq4",
  "key20": "56rtn5BWhNqT2DhvbCGbjhNgHcjd2C3owuvEfCt8yjED81xf77amYu6FnFDd9Vt9MvgipxvhoxK8s1tP2hMjMKVe",
  "key21": "3sKf3RGVR3ptKU9iD8iPoERQxhqfiXm9JDQ5JofnN37LLNW99zx4oJVLMrGVbP3RuU38sfYSHiNWEQZ1tWxsjgkv",
  "key22": "3fYseg3NLHQZTzUSJC6YkqQteUCbJA8MrdzLXqTShCoVoe9KETXgYJaY4ZKnfNq1VK1UhU6C7zv9jHJGhyBY9Toh",
  "key23": "5hi9TACqDH6zzasCSBSaMU1i5TpFuUmZk2bNKrNQszNTWcn1HHUYjTmrAf9BeGVmW8NZX1iU9vp423nQwvaEM17o",
  "key24": "25yTwCJAgudWeLYy8pbPw9dGLLafXbThBBpwnVSnHrfYcGAa8jTC5bwv9dFCZpXxnirbnCjAhfK3pugykUex51nP",
  "key25": "3CVX9f9rYUgv6j446iyrn1uHagjdiBLNp2EBPxUhSKMaiC41jwnxE22eTj4SruhYgVtE8wxN8YNcmGDzgHsz9owB",
  "key26": "1a1GLF6gbAUDnzbS5evJvwHBcKZgNiKQtBsUKYtiCXigfpFzzQh6JfdBAykN3tLNb7P2emAoZL3ytZfAjXPa9AN",
  "key27": "5rvRSAqpvrNaKz69gbS4bZoFdhjS7QMbBqMDhqRbZMPKdx8pxSwJwVF5JbjCBie9Jh1zkpsWim6P5zHNY9CtfiwS",
  "key28": "2cnXJLGpBKf9nTAk5vutuzaSH2kmgw832VW6Q1SzVTXzbsoCERzo9DBS45PfVK7kfTNu1KptC7cTpuxLryJBErTc",
  "key29": "5cgcQwnYpwdNoQeTfNSRCX57ZFvFYxoGvjkAJ6PanC1rATbkdiNyrLr61VPZCnZKE4Ce4zqZu3W3ziYveeCQZ7Er",
  "key30": "5inWjxMoNw4yVYSNDmEtEcC6V2jdP9D8H6bD7pq4miKRTp4eQWB8pfSgCUQrh399qyLpaimxopNmkSH6M98977n8",
  "key31": "4f1JdwAGQfkoJHMSdMZZ45abJHWtT1f1czw9xAJ5Uj517amhmkhAwT5dmzfQ3cjFpWuw17P2UGzyb5MQzPpqc5AG",
  "key32": "3hF3z1e8QrPycH7JmiaKWNRgnibiApvjW4hemzbWJDvxPduLbmwXrU6kCrGJkwGDizx7DTBEoLTykGhx5CBLaYTF",
  "key33": "3NNemhTnvdrPmvVmGcW3n5Rqj3YDvYwsjG9BdL4rGK8aF4oVbHD8tLx9LHom5vamysJ9EUzfoBcidbiZDrc8Rn6p",
  "key34": "4txJrYeM3aUYVc7fYKgcCMAXBRVqvCGie11LFcDhK4ZgtPWf5CqATQrZxjnjzDc3brMLunuh9ZpUFejXiPcE7gva",
  "key35": "5uvYEgGzNrby8S4q2UnVrtWqHtzeuhgCZvmUKQ5NdP875HdoveAxhbo92DgrYityWUqJXUnNY9MRqDFSWx33fS5p",
  "key36": "3AjutssoGZXFPVrqmdxxnqwoaAaUupaquEaJgwqFDEnLgrsWjxpvrRMeqhh6CJKD4X95W3GrCqKh8a96C64aWBbJ",
  "key37": "2VuL1ZedjWxmbSFfS83sZXrYnUEhv2wgTvdfZi2kUqeAQRLDrDNVfKXn7YEGzEpZBUMvbTQcNUKGc4iS8dm9vgL1",
  "key38": "4cb5w8tvCznuSbCThVsgLvn6f28ZbaDF7yE8V4ciSYhmZa56icFEt8B164tB9YFnJyQbtBbdu4A83EFGfLbPp88j",
  "key39": "2bVjxyGk6biyGWaPmRchUMDXwCUtnRtM5cz5r8ru6UxDq9b95oZFkT88MgaX3XXMiAA8yVCFVHC3AUuZnpVBXBY3",
  "key40": "5ANKwN58XW75CQsTRPaHhUzhkUx92jR5Mptj7ohfike2v2MX1sGp7LHTywq8puUDGPa6K9CPwcM3tfK2Ybjc3ZSX",
  "key41": "5CLTEARS1Wd59yTa3eenxeKUTmeHxdYsZdkxzBBu1np2PP1zWs6kL5DmWvAAtkSqMDnY355FBLaGBysNndaPV5K5",
  "key42": "55HgoD5xfhhZpZkSs8sQsvQYi1kgLBcwZFUuEe6AZz1mRpycYQvwGrCeLduUMiVK4TkFaR8r4cMSnP3h53uwM7VN",
  "key43": "5h9Z6NJZi1C6p1zPDmSVF4DRjnUcsXfFHxc4nMAuvvvfwZbfQszS7QgRJJ1w9k2BnssusGBCMDTu1oRmYeJnqCLh",
  "key44": "2wFbSeA6F8hx76kYwRq9PiRLuXh8npdf4tvus7gQyvzeqoAzeWkJyVMQqn5w5LCNgAwC5F2otPN34iRTi2T5Uq9u",
  "key45": "3bwnWQGBsRdkCYhNCDhMrqcBxYtiuoej1Lp5RPFEe72BMe43Fb5VQCHvkGrHrpa3ZF32xz4R73bJSAqMAQeHu3tQ",
  "key46": "4eCFfUGAynY4Set1sLmSuvhqzztgWTxTYCHtkJUpeLbDTbnAyfGpAp8tVy5U8Rz1TF3A5h1nqQib5xgiXWrBBQE3"
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
