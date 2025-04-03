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
    "22rSNCGgxwCrJnYKVFMDvdrgD5mARNdfnsBKRjuJa4WJLspUAyWEiYJg6PJRAC4fsihDKJTNgJS7DxMweNERiyNK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Vpi8QyemHjWVbiMyR64iKQCWC94bRovQrjFhf5X1epGsM2KMFunaKrqZcLCc31qWugiBVVHPMZRy7oaDoY1qtEd",
  "key1": "2KaB9ShhFeNnKeNmgWFE3SfnL5svco1VRQRZyQnBk7Uv4eca37MJnCv7JpmUcD7g1n7kXQEizPPDpxSwTtwHQ3ag",
  "key2": "5mE48KAKv3Frx8E9WkviaLj9qMwhBZQUsrXUtMKLfs3U3aBcL5mBxxEAN1XKhuN5SeeDuH4ZzdxN3ce44Mi48hFt",
  "key3": "61u4A5CQhZ13SDdhXYoxRhXuZWyAknx1wH8aPZQhN5ebaeEhXnYFaJBFSEHPmnbGCAF8PnvSaVVLiNTVK6bpauxB",
  "key4": "3oHXcc9MeDtUau11bETCi2G3hfWdemwTKNgv4MrXxcMg8kcDhZhbUmgZHDcG8X4YhVp32VVk53YyTnXkQbvLcQ2B",
  "key5": "3i6HnqetU27ThuM954QBCainumNuwzJDKjmrNHJs8A9iEcFzYG4NME5Ns6C6K1utZgHmgDCwtMJMNM7tT8jJ9EZC",
  "key6": "522G5TWBEcFZC4jWWYakT76c1tf84sTMRcm7EiZFEEwjoEevxkEKJtWG8DinsWJUhkx9Mx2KwiqVpQdy3qdRYzrJ",
  "key7": "3FR54kp4Ngzkro9C3wfksWMwjXJbiyBg5LDTwi875xJMV6oGqK3Jf2PqtCpQJcAbBosznE98AxKY3KuXDq7ExuVt",
  "key8": "2n89YeLFmEzQhBcDBsGJN2PJiRWcUjk7Qobi9kFNs1qJQQZvW7Pca2UGQQnEqoaTHadgA3BELrekse4fn3cF1cyK",
  "key9": "KV2q8Lf81kRRQY28CdQpfvaBDtpKS8HoZwCKCdVpESut7hUM4uwtPVkbbwXQSTMd4vCXqUCxbn49RiyXXwyfug6",
  "key10": "5nAr7SYUXhSVdDWMFaTyt9qQnQ37ysQ2yVKsJ7wBgpCEQMoLjZZcfix39wcMM4vbiypTiSFKDyX7W8p2KAh34xwA",
  "key11": "mNCQWbFykzDRXKcx6o2gq5xgL5zuMKxqSufj8823bUZ2b4DPtmoiKXo6PjNudsmh1F3Rwcu6F63e1KoVpWAmKPX",
  "key12": "W3VQNAD881qakZfNjCaLm3GdrEzGLeWzV7n1UUveF7a75vmtXPRB4aYuysRLVPvUBYoquzE7tDD2QMxVZMrxp9P",
  "key13": "3VkuiHPnYGk2c8YGd4jdEiMdzyyoaGY7qfVz2rUCoPMr3nuhgF52FNsAyCqpwntd3zrtbHet91eXCzsVX65wRSCB",
  "key14": "3BcUtfG3xMdh3HMfii9nNdaeDNyiApdoKwAStgv2r5Y7DMwq2dFd5CWmSNYMqfaqBqaC1UpkKYxrSH5zzUpFEu6z",
  "key15": "53SHJCwxt55TowkuVJU3tCS4jCoJRsBMgZGS5pB9rvPJnMGdtSXn4pPtGFugSk2cde3i8SxQGKsDiymA5HijwZvC",
  "key16": "2pL5NNQTWGYMNqMeejWKPdm8wd38VRiJsnBG1yka3P3Cmxuw6ZonCfDmY3uBA7vgXN4PgTiQP2QEP4yvPcFACdjW",
  "key17": "2x2DUJuCGGFHEuKqHYC294RN5Ddtx24KA9RFBQucCJbgZGNQCa3fbkJWgN5UZm2XBSyNJLU5S5YspyZh4L18hb5r",
  "key18": "4kuLQrsWPsu3LLTrSkTUPUN3nsFw4tbgDY3QM2ygmrN9opzDxetTDTZ9fxMoYQaUYPkHhpt3nPDwF1Z8vjqmaGmb",
  "key19": "2EScSaAR93TF737yWhWcF5tGXsjgXyWUrdCGsZGjEAsa2uwcQvQHcf8FUvFyjQkcNy8x55VLrVwcmA8AW6cKUbGP",
  "key20": "4q6hjhZdEHH6MwfqBa9dtqRupW33gqaup8FXApZF1cUvA4z9ch7f6HCnehFvMQDpDdYpWgWuP63pnuqHXtshF5Hh",
  "key21": "45VUwamdDez1aF34dEd6psPynBpVsDWyujJyKJK6MNnymqZpW5wMAetpd7rnAWZd4cZYnUBocek25JuBXiXoZSGJ",
  "key22": "91Csaq2sR2BVHJ7UXJx2T7HpXGscxthK9U1dARoQ4y9QtiXbt43MFZqpmMMjZMgNr41jdfuTNXhJa3eC6rvnvq4",
  "key23": "5LdzzcDjvrnu5NsFp9b333h8nnvy6KLw4jWJ1HakAFdtpwuw4BoHsr9ixUMJud9pFYs2ZPashoBsJUTcGxHJMmUN",
  "key24": "46vLtx2UCGxhMZgWnqkYzb3f21mNvemWJ1kYqbocnQ4Y91anstu5t3sWcSBmmpKceGAJmsM7iaMK7GEv3p2M54cr",
  "key25": "vSusDXwUn8PRWSH6ix1Re8v442DFr887WGRT4uhMWdgMXXZ9PwpSS5PgPp8U6yrCLCwKrFmqpLUg9PWUDyJM3KK",
  "key26": "3hrTDsRt8Y3pdXgu4o9wB7eR6JCZLhTuRx9a7p16yHGc7XATMR5vznYxnMNeHtcyDn1UfW7KgWXnCK9DM5EsJRVw",
  "key27": "3QtnpCd1jy1zeuYoLuabYdsH4Qu6h65Unv5VeskgXjt92zd6Pugbj9jV2sr3m7C3zM7UhtKYozLpqqyYRnw3ZpGj",
  "key28": "4KBdkg5tGxJB6ZDdovUXX9P4Rfcs73Gd4AD33rXcpJrpB1ASsR2fPK6sZqcNFNyYks8q1nZ53vPAq2FssZh25wxL",
  "key29": "2N6UJBnUJSt5vAwEMh9AGScfQpeo7HgLv3fXFvGG261dwk3miQiWwRcqxTft6wUyRXFQPX4tE4BvrDPD66tm83ui",
  "key30": "2sWHzmaqp6UJbd8tiwLVSQTJHHSXPEWaCrYtgghz9Xv41rQG3bBZFVaqpXp84LSenptQSQUKNoBhCFEiRmU63VJH",
  "key31": "4rqwNjqiVr6qVZDNMREe7r3wJg7xGPnGuDXmHV3MctFaspEfmFpWZ9uuW58NqrFwvhZyeeoN5CwfP12nBsKU9N7p",
  "key32": "2tA6gjtGmKnpQNPXfUzSmz2VnwHF3TNEyLY3oEtG9C2KHbJWcUR45rKYFfKxGfD7gQk2mGQJuHkdygbPTo5mFvEE",
  "key33": "3bt6aSD5wo1tDZvM2yt6Z5ZWSmeb9hX7Y9yqkNRkA8z3gXde5mJZRz2HfNX9fXw1UZ3wSZ3419GY62Upky4unUh6"
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
