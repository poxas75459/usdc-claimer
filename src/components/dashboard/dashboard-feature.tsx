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
    "kdqNKRJWQsBodagYqMHUy2QyBZWFw2Wjrvb3kuHg1bJbyJnPRVJ7a9LygkmSL2EuaXYYKabqqQ3DRmuSRyxpk2J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qtuDQp45HPmp72AZMzRoZepBq8aEb1ZY4FksUJJcAuK7GhiZVaxGkVWz7Y6Lp7qyJRxS1rEa75mYWRiDUGZFDmM",
  "key1": "4eVmM62RrBG1raBqCisYMmQuY7MtbYBT1k3TLWhVRXhasERepD8GKpLDCRbniEhQ81C2KccTweu1f2xMWkfyxWVF",
  "key2": "5JuuHsMaYH7Q1keC5LVJqbVb8yL1fU5JTyzPEqoQYLGisEXcB1esirK5xB2PD5qbecC23Muxby69kWdJMdH2d62Q",
  "key3": "5inBie7YujwXFP1i1sev77q6d7GvzwcZv523Ux9QEdy72UeiAHAoJvg2DZicdN2Kipi4PhJjRfEDTHeGTFcVCW8w",
  "key4": "2WcAbChBSpH1Lag1KXdmnyarwWBDFrdprJ9ytwidHCTiFeMsMkbVpX1YT9vTAJmFsua1wakZtHAXBznKNtFpSiKV",
  "key5": "387cC84kgbrSiAuK6yN2r2QyaAYPEThCiEFpSrMXL1mAG5hzDDZKt98NXjxEz1cbLrqPhFCMk3dEhd3gdqERAkTw",
  "key6": "34azf4XsNDn7WqNuyT3tdZmaJvrYQjgLPPYF1XTr8MjQoB6YrT7rFbYib8fHetYoN8od4rLaoxieAJLufC5SRSSs",
  "key7": "3CSREE7RTaEGsbzF6ucxZ4UPS12CCEXjbiVnZdjZnfWfQjb3TKBGRKPpGvdyArzD4hJqx8Yvr9jDi5p18phcgJhZ",
  "key8": "3z6QK8r1wtBYtJRKUa97DSeZSJZkqkj7ZMkJztfF8RH5y39D9oQrRCKkyEE6FLS1FKuBpQUt8oXFgxzgnAZSUp6r",
  "key9": "4yB1SzWS4pEX75sjqJPE4KimVdHC59h27RYu46DvBLaCDxDvMd8RW36tStmpZtNYMRgjAfXmeGTyqS3zucGnPQEX",
  "key10": "3getD9KWDZWMuwvfnL16qAFP2J6FG89pkt7Vx7trzXs4dXNgUPaVFt1y6jMUUBzVFbdAe4xfqw1ymJWVpyRBhf6Q",
  "key11": "4ZYzytSH9ZPYSqaUBb61QiheNVRxRnuCN3nuZGGcR2Jh4pfy3jvwWxuep3VYdo5kAiHxdL2tANmxWSJJmxhBX28N",
  "key12": "434vA9VgteuNTESqDvSvFHRFCxwwby5QX7EnHh3NJiy9U6cT2XBnSghSJzzK1CLr3Nr7WoydYCcAWCdBHC5Qw3kb",
  "key13": "4bS3uygv6hvBD2zHEG1VAz2QgGWmDmjSkb66HJSgEEsqufnUhrnNsT2BGY6beD5GpACf6xfHyM4uJfWPZp8K5gCp",
  "key14": "TozSrwg12DSK9ZQzh6QBNZUNnY3cbMPWb85d1C2zVgC2BZEhKsMp4FKu9FwhrvJ252CZeTc5owKfr2Vwo99FQg4",
  "key15": "4fAEFoEEsH9yq5c5aihT2ynPGMjB9jTreHX6N2DashsWjK4YRLLQnX471AD3eNMD48EtAnnmmhF6gLCefT6oWGCz",
  "key16": "355zn7pKkrb86tUrvZofbe6hsBT8d7JJmkNXcErFM3aUm6MxbhxYCHoTRu5qFnceJjAgb1khL8UD4bPJN8x9KhSW",
  "key17": "3xAukFjRgvAszqoXh3AWdPq8tUD63Y41cEJnPLVC2PQuzHZbsSg9U7Vzm6u5pa4svGjJ73aGQY6V8rQnr1xA4xFv",
  "key18": "5yRh8Mn74fagaUryVx9jJwFEpafM2HYJFhGMZxe47pRCgnYjwuvbz55TWjdw5ekBtg3VfjQCWjTBCHfwF8VGtLyj",
  "key19": "2nfdEGqqKh4Dpq4tbnjtXhWBL8pDt1eWKg5uxTb2xmzZ7s8oT6Eg4SFaJ7oSa2jgTt6NgMjJBdXZQxL1GeBmcH7M",
  "key20": "4N64YvBMrYKLafzGPocNRBoA8nA8WNui7Wbpv7DRtbsXnVfBwzjZssKWNMNgVNhrZ9gg8R54pnz6yfq213nsqPFB",
  "key21": "ZDfsjrpUoEJPD5mUqbPqWBzAm9RxC7mw7P7TxkbxQagPm1Kg7nY4pN4u6Xc3257ajdiqXFqZvYgc4aLt5XDPup5",
  "key22": "3NaAEzLmPyCNFQDqEuMhMAuZCNe5REB9xQZXik3awhcst7ZMJtdUBiScxREd8uJkKL8B9CqdXSnFXATP6rx9hcF5",
  "key23": "2ofmN5rqi5FasqrgimFM74obcisxg5uyAZLCQMMHCLXcTuWwgpNnVHCHvyH6u1pguaXsV4G1865MQCw1xP4a6syX",
  "key24": "5eTgZkf5bCr783kYvnUoNevhexeUbRrBk9jw3MbLSz4MAR5cfjWKizcCHdAjiEdQj2uzhZdSgNG1BJLyWDr9U37s",
  "key25": "2yg9a6zuv5CvmApLiKo2TgBh2ePVrudBkqxjsSssEGrUJrAEymJRRkdevF3ZukxhhdAcZvNGQvU4AWKu5cqDTj5T",
  "key26": "3nTmonij4fiyDiha5YU1tQu1oBbu7fnXXnjck4aLG6URVXL2ezKw6sQCU5XZaDhtPj2yK6uUjRFyDQG6eZVb13pQ",
  "key27": "4QqBXfTZ2czZwWeGGgkeSDkD6UC4tVVgTdWPpSGwjzs2UyFH64xYW7pesjUsNhKtFarA2hn27BZnZgnZm5A3xJ4P",
  "key28": "5nLv23krUjLiQ3GoJTbQgSDsk28UMiE1zMkFmhA6gxP7kza88Z6CMzwcTPcMBEKZh2rZrmN7rbotRrUpHPsYrEnM",
  "key29": "2KsytyV3z8HMUhPWhT2DH9NPU2LnNnrVfGU8iRSGjDVTgr4FCdD2ZD2B5RmThhEFsBPyJRtkb19jkHTLkh1xmfAa",
  "key30": "3JBW6ennfAZns3p1sQun31uaYHhHCnZ9NR9HNvcrxtNcxjvt2A4FidskHcugv13foeRf3A7DqVbRcV4zQqfBy7P3",
  "key31": "64u7pmGASNULDVsyjs6XjUf2Tbn17bLAKGWgHz3Srm9kAHcgWymQ2DguRstJuu9Me2sGQeyGvXYNpfLt9WuWVrvE",
  "key32": "NeM2X7PTETYeJE6cSmjaKAACmdtw3vsMkGyNQGHziAf3fv2Abpjj6ygP12xB8bjibcvVHNnJZxoibaTm8zj2dmt",
  "key33": "3ho617QTeZ1X864AZp4sndnVLxQpjwqyxKZWJMw3gftVro6tBn9q6YggJ7VYgWCcf93y8fx8qhSTMDkwhB2uvbUb",
  "key34": "4iWc2T4Wyo2DMFH6rGAf6ZVRn17Si55BDdwkvEYrXPSn6GH87nuaKXDeHuYP6CmWfZw7gCfzFyU5aM1y4NnDB7fN",
  "key35": "4nY1BDpdxGRRNSnCKMWSS44hrznqeBbHbUbGUpDrCd1ThHe3Kczsi5bwDJAnx24s2pynWGHcHFcMc6DchdjiETyN",
  "key36": "2shnUgq3uFb8RSAeEaFGPwtTNCPpkptYgfsTBecYoaXvitYsiz6UJCRerdzLf3m1obnQSUwiPmQVNTorLF6PzTyw",
  "key37": "42KieSSe4rXuBvfmtGMC7eWDdCUjnCQvUiqoV6KpSeTSCFWvKjzoyZsqZSEK3knb885ufQcGrJ3NtiMxdkAvmsjp",
  "key38": "4sfhfUtfHYqgo3g5gVPHRqc5jZ65iERv1afnUJCpjRkjEhMhbje9RY5MuQwEuVGPjZMVtyAv4q1WsFTtqGV8xEAy",
  "key39": "52oza2FgF6D5mFihJ1NE25JPe88dPNany3NEkiwHnitnrTG62Z4taJQvRFgR8nFwLYL1MJGbFF5VkspiTXPFeH36",
  "key40": "5vWbkKybrGoPZirXursL9o5q1YJBPuyZvYQ6j4XhDt7bPDEFv2uV3rEkZtXkSyhzNz14HSEHkbXsHVzwdfucX1kq",
  "key41": "3FhjQdD2cJWJAwDTeRpFWbN3GL4v4AzvHPFceTfx8hsyz9ZtqYGQWAS4q1uyBPnttnSuSPAEqGRjGoU9P6gdhrFK",
  "key42": "4L43XR4UtEinGXCkFn7T2c2vt1fccCEAsJKFGfBcXMCYdHXB1qqJWCTZSiQ9zGJ5c3xbf5nPZ2azQZW49qmkdAhJ",
  "key43": "3c6tcshtQuEgv8oHMqqr57Mm9uR22448YCABMtaEF8EXzjFRWyuYa1QLQ7TvPgc3AoLbtrkvymvLRUyfgSCtp2Qs",
  "key44": "2SC2b1zkFC47EwjsweJrJLB273bRNTLQeDQq8jGZvKQ6X4usnrevTgxgStttfuYUPtxvoJUcqM1uitWcqtmFrYzg",
  "key45": "4rwiFwgBVr3VzhLjcVQt5ki3kB3U6jSu2dw3uaFMiDQZUKoq95ZSpqnqwTkXXQq29tUxAZhWzHhQ64ipraESXJTS",
  "key46": "65D9aWyoCxsL5mLikpEd2LPXGDNRnrZYhJKYsR1v3Fn2G1zMBEFpfHKz2B3XjExsqxU1umvWa6VVHgErsqbB8VpZ",
  "key47": "5pcRmecmWez4s8CFphVqF3RZRz1GokKvCvGKSKFnvZ6Zn1mFtLeNcnQqdvJ8A4nPLsMywmqf9DNbFnuUZqcjELgq"
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
