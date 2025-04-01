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
    "cQEhAxnGqg5DHny5ASqaA71ygAAThVk2EASkoueNGhMi2oaRAr5QqtsaMf8w3Npfcmvxzhx1joK2KkNKi4Ddpnt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oVu8jA8ac2iHMkhmFvaHVyudnuPRkoYNkdEn5WVdmQ55SfVckrqGdZXtAkZhme7Ce5aCamiftZ64TrkoLCQWbxh",
  "key1": "5eW95k3f6w7DppBMNRmnf1zndziy1Kazi3QK5cmQcZ8XtXaZ29hdVgFSZMFt4ZC6YfzkxDuvDdPT99PJnfw76DJ9",
  "key2": "4EKfdwoU1TZ2yi85eiqRSGRiQgYuXv5KpF7RTUKtMwtyvhCNaj8WkRsb6gKS1GPTyHZa6GMbRkqEYS5T47skUgzF",
  "key3": "9x9ThHcsZymrA8awqQFnKHCZBbNMMq8Fiqhdud59qMjS8q5QeYJnpUouzixagDqMcFMyFrb5eLnkfFT9uoMWoku",
  "key4": "XMnGM2S4TiK1xBjdTz2j3miQfKHYRekwcgErGfki44H5jiX9zd8PXd9SLfx1DrpQTmBbztsru5v42Wm24YiSLvv",
  "key5": "2xBZWcPULKexiLv4wV8HKFGZPNWYR47NEGpgQgN5b1z72yitXE1FeM4vbevMChT7CmxnywLSXqz7VVbXgej9aM5r",
  "key6": "3Hio5uuWZGvmX378HXW7VBsfAAh3H8EmFuzVqYYBCh6fMPhY7u3cdhupjEwSQ8WYkQBF3m5wgmVrPGd3g93AdgKf",
  "key7": "3n7cqdthEyPShu14ZWjQ7hYMgXEGZrK3RNrHdcwgYCKqjgHKqQyHnFyDpwAj1eUXeCRSKDfJuo8EJiMYaz6ecGzj",
  "key8": "58qx1eNtK9TzpstHbTZ9agqLbVDBbgjv34docRnJgwtLbA71Uycuyioo8jjGMg2CGSRRG4BPaScHuQ1TMmAswEen",
  "key9": "2G5HRP7BfdJeaAMeq3BLfQ2wo3azXpviiZJAWcNUDaQM7VTJruQ33iB5KnYNAF7UpjfhexWugPQWBnSoVHxEc2p6",
  "key10": "3yeW791Beyn55frHdjsR4QvVrfoeaaa37Nu8APyCaJYNSypWQKeMxExLdpM8jrKjN9NGj92wafy27d5k18Yepq4Q",
  "key11": "5dukgkjvtPXraqMAPsfoBaCjbi9pVvQDm3gJAPF9Kg6idjnUjYoMrmNzLUgseE3VKKCG4cgMBaj3uKgV4VpCQgDV",
  "key12": "4dANc3Rkgwhs2gZZfFGqXE3faFdTHeR3RodWDHNb9rLCxYenC1TmfamAZfAfCkAs9HSqmMhbTmJY3RApUMKoFxDC",
  "key13": "4nAHRUz6yxCAbSc36PB46m7CoesJC3w8RzgYEvYguQDYADSJSMYxUm8xS7PTaXS2psbWKci8NqFkU89UjsMs2a2t",
  "key14": "YV9kzn33mSY9SF9pgJYzujKFDdksakwGmyJg8bwZxFQhmbtjtzLxPv8uLjoiE9pFfnMNG48mdb4aGAQspwfFEoX",
  "key15": "2sY3pgDxNgjmBDW5woPJFjY7pRNgKey8GqMCAyPbrKCgUU1fa7ApmgP99yekwzQTAw9PuLHWptmziASG6hwX8z2B",
  "key16": "3ZNVzeREY614Pjb6vwMguXFApFHRYVGK6i1e87QiWrjryKTByXHAgiYJiQ6uQkkTYh4fSMomkXSZgyPpf8FpMxPm",
  "key17": "5C2qLtmJt8LzvRTHCNA2453DkQ3nCijTDmvtsfyn3WAfKNHBSNct3WyaV4mwGQUzAs6JxKhk1VHUWdb53k7LDmUY",
  "key18": "4x1V771jpwBkKngjSQfqaJ2iMkbHaUnsv9AJiohWbsuZSUvGdDH1zYoxuQVWhz7Gc5aUzR5891wFZ9TodoFEtaKj",
  "key19": "mccBHNJV2NYsJdJq4dBgtmhmzeFeqQH6bPTmkAefEAh7JHL7r2SXx8uPvFr7X8GEcc1SjpfKHk25m4VWdSmohrE",
  "key20": "3uECkFuxqmeXGbVJahqN7M1HGMSLe6LpZTn6Ftnos229Yvpo6KPUGQuzw9kuTEw9pVZ6cX1Ax3csgT97fzPgQ3tw",
  "key21": "2CGu1WW8FmQnctyrjVdSTXjqLW36ayMdc8bS9A4hMUXNW5dDcGoYubmqFkovHmWLQWqdJFkdcyHU5T7GEc5RNW92",
  "key22": "24ziUBhAa86uziLyfskCBc5nuY4XHeUTQSVP9CJZSQA9p9xxMXFjqrEXxCoCYTa92QUPCdPeeosjwxv3SGX9TtU1",
  "key23": "3vagh16x8n2AK9ibUL3Mp7NNJokVVyjVxPxa5RNHMXuxX9BqGgiR69CqqJHBo3nGCM2X8RdQu11GcqEkfUzZzbNh",
  "key24": "3XLKykATjFNZYRPwGCDMavADk73hnBVGaD4ssRsRAuVUsnRP2dRVWqSSkHKy8fUK9hLZTKJjxPRme61h96VAfYC6",
  "key25": "4U7RoMfRF2VXK2bRtmCK4PyNDTSzkhYiDVVqpszCQQ4eiyjFdWGvE9eF8XKPHMRb3KJ55ZjkGJZmK1EDqeHfECxS",
  "key26": "3k9UPjdUBSs34eYzuMGitQVURGP9Pi8eLhYmm91ar723gED63tJi52MnHFWWDLpQqmwx4tzHdctZ44oQKTWF8oz5",
  "key27": "25hu7s5JSiLKPMRQzA7Asg5oMdvSZi69XEGiPXY16ZhfREJXUMquqNAHBwXU3rHQWy6NR8obCYKhLVNoaP7WX1pT",
  "key28": "2zzXNRhv5MDuJrk36SUJ4CKcoaEYKQkxnGTap3GK6mEMMnLGSBrBsUfr4SMiWPjuYWZkGqb6QRPbxArKxPsXBJJD",
  "key29": "56BSCHZRxdTkcMM8VpfJXfK9PyN4QkwNV4xfuLR7fs88WUpT2N3LeW5VhnCrd1vTswAuJUz8oLvr1GtfzNVdjDcb",
  "key30": "5C1b6JbNa6yYRJvferPKEhbg44Kf4cqHV9XdmzZVFRNXMQZt8VgsNYzDj9hba2TgQaTuk9jXRMGiTN1Qh1SRi3pK",
  "key31": "iB5RRiWebth7zzxZrvPaGn5D9xYF3z9rxK3TBn74VLRKvaasakmYnBd6UDzi9KJmUE3jpNTmdt45DPhKRZWwBGv",
  "key32": "8LjhjgVNLa3uuP8kvNrarsfkPX77hWvoRyZfKK1qsYNmkUNDWsB5Y72EZf5XEBUh4z862gFYgv3UZ2LdnbXgWtC",
  "key33": "3uCUBkjw3gikdaTb6x4AHUAxh1D2zk1Q21X85FJ1eia73SQM23UXt6dQgawajg3WJAizXAYBYj4d6p2NYoaZAMuC",
  "key34": "3D6VBaHcfK52fin3a6pxcwdLqkdz98iJVKY8pCfnUvSYgWuVWzYhynZD2WdJdQaVnXDVhZajb49drr7UtdiZ5yrM",
  "key35": "haFKgupDxAgRfAmMXrpJihcg613ErCM7ZEQrt3NCB7rKzrexBQnTbNKd2aEiZ4ELPJ6jRYXvFuAEFVVRiJwtX1b",
  "key36": "4WVHSxcRuZWFg3afJX7KTZ92Y4DZFYUbZA9jGpotAxWMzPTUCU5VTj2g4sDmMdah9DfenBN6X3ka3eJmyuR5Zu5g",
  "key37": "vBonptQ7b6Uae3iFEPfQXPeUDAgPtxCuyTPKN4gi6C7x4A7jNxZnXK7Wt6Zr6b2CXRe4CimHcyomnEJaipomCFM"
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
