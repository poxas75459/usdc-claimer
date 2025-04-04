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
    "59WfsGc6Pv1X5B8na7AJEjQ8dLde3zz6YFgxZEMCdeKC8HuJZfuDwAMPfibLeDRkxWTb3wnry2U5J8yWe12Xeb6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "W3aV1LjWHvWJzQBVFShEe1RSonAfAxn8QvfBhQjF8yd3fS4nciUXF7xoYcZwvCNFrVL1VADY17o4TZKDZUKkU2M",
  "key1": "2fXv9CbeRkYQSPEN52taig1HpbCUCPbgivzgjsDHRfHunF8hddSnvHtNiKEHNvmoRcYrf3VuqSuH12vMUDkLShn4",
  "key2": "5xd1Z8MrJ7MSV41hB5aUA8uuXBYBd89WMBFNZJAG5iYxvRRE9s1tXj8PH8G4ya6HqJnu4fpmhWihi2FrTBHwHVcY",
  "key3": "5niyn9CJL4p9Yuwctkdkj5mXWj3BvJPFqNfm9V1DPApaL5ngBj4L7RsM6JKK5R9T3JFcQDZ9dTQ9q2bc8UzTzcWV",
  "key4": "3x7mgYprP8R2redYzcwTPivXfteo9YJWmrpFZsd6y4AfxbVxYLd66XxnkxS1qtRC8fdv94r8hoWVcJktxuMjj6h2",
  "key5": "5H3jLAx4ciXReQmT61GGXbVk4vpyxKHTg41uaAfTUgxsxVHPi9mAdEvuguLpXLSq9QZg48GqvicumvWAoaEXRdtB",
  "key6": "3RtfPVoHcW6jqckt9PTFH9NoLtVwzHyFJetGySfwbuf6Eppxp6RhnrZ4Yw6hKPNY3LGMfJyjE76bcU3vjxgfzHFs",
  "key7": "2XxZf8EmLzBToCS9TLwGqhAfqwjqg7ystkZyiBLcuBgipcEaYpbWhYCdwh7ewB8kmr3CW5hMhyLSDSEVRsrK5cGJ",
  "key8": "5xKFEv7uXt95TRfKTdGudenrzk6mKicKZbWjJGXA8YXj74CSPYAaGKAgjxsw3iXJNZ4KU7FkmHinKgb6yVpf7Xdq",
  "key9": "FNPoaCrQ4BWcKG5bn2Vaa8Y7m4w8EVti4vw3qCMVzxM4GEH1XrhLt6mJyTHF8hTood8eD8rp1cfghtxkPMf6DEL",
  "key10": "4Z93HkrTyrWpxcELwhZ8mbU2PULtcq6nrSDb62GFBZavKfRjywQiitK5FRKArEWvh9unqf8VLBStKXURokQf3Ze5",
  "key11": "26LsDMHzLVpZuFTLrbYaSvMdScKyA38348UytrpFTTHqq8jDuSZ9KAZA3Z89UcU7ZFrSXYastqLjU1SBvAVFAcsP",
  "key12": "2U4FhAPBh6zJCFHXv4dNyzgDC8sTWErr5pCqAGF5nBomcdHyeCqJAQNBgkE2KtHzcSsyxRCk9iVjLy6KB7GhMxQq",
  "key13": "4RaX3YP7jq2dV9Ri9cdWNnkwo3VsAkZiFpC9Mrt7LbpgPJsQLug9LymS4VyqH4nWSB1mSKguwYzmSwUHBvV8yhuE",
  "key14": "3nUNsdRLTsXg9RqQXPcPiAFvdB9XMgU7C27KwA9onsoxiw2sX9dVsMf1kx8AawPWxTUQxtQKxQoN76Heg1VERjV8",
  "key15": "4W2FcDV4s2VQrwZz2TsDVKrjcV4AyxHknkVs27LkRagRWCkyeiAc92vAuYsezE3eoVojiqSxBs8R17UD2SSHw8ry",
  "key16": "3xWLGw2qfvxe7ZjsXh86b86hqhYNVWVmzkGBXDUzU6MRQmSjaqk2KLDZnvDN9tTwC6Sh6htssYoQ2qoyVCZcavdv",
  "key17": "34dUeRYBj4UmCDEzxxckSEVEE5Vkj1hFn8zeZ7Doa5g6QgNQmPVpaUuU5NpzubRc9be8FW5ib5wnuG62Z3GB3ct8",
  "key18": "jZFJzyRdj5YP65bNAjp1ScQwoVU47bxzeGYAUrdfVfmyjknFq1hU7EywC69LSY9omS7TviQgcb5nhDXwcgZxXmW",
  "key19": "41r9wbTk3cKH1LzzsWXvvEzRpA5rxu3SPGKEHaNjxEtnEVvm4cQT1fU6Z8CqgvvDsSZfg15AvM8VXmtwjhZyutdh",
  "key20": "H4C5eG1FBQgx4pZWmt38cTPsqEFkeuFQ4gFWAK3eLoGNT31iZkqUCGaTppYMgVqsTLTSkTctPdvFaiqkhvwg34G",
  "key21": "4RJNyDyf4JSQEyRVn9WWsX3WZoTMLosYb9gozn6rD2PjLEMnB8xVa9Wu9shfPSyCnRWR41zEBSJTiyzrxbyxsHod",
  "key22": "5jyGgcYnxwbo5yxu1JnLBt2vFcc2VbckCKBbyTjQ4HKbrXtkW2Hti9h3KFhSL23YeR5ukV1bZTg93V7CrxUD27sn",
  "key23": "paB4cmFaX7AxTyQ2wYZmtvcpxx5rwy6YZnVZUkkyLFcnbocVQvzcULMAyWHmBbBQd6uo6ufAdHmW9bf18GmEBzG",
  "key24": "45gun4AkoTGEUtGUu6NsXvEXkz3LwBJbfN3mantijXdAq9EYavaRWCMjVnF6FASTnVcSY2wW6VF8jMko3dxpq5eQ",
  "key25": "uM2LPxgFZ6mX62PpiLqDU9xiJZJpEUZ782ZmExaniuGF5CtngV7mGr2WC3Ku5XQ9YxSrC167opiFB5Pinh9odRz",
  "key26": "65xxf1u2ySmt2jYEkiwoPtpFSoaDtfvZ6C54rDCW9xA4TiAC85MceCoGN2EnSwMyrjt3vBP9TXu7DqcjD2dqX8MV",
  "key27": "5Vwp6dYwfZZzNdYo2Tte2dngxTG6au3CpUEemZW1AJcyrB4D8rJGQMJcTV8EMzQ1DwHfK1Jxxoyv4621s5kpM7dx",
  "key28": "5P7PVMZZx29DxsAY6HPzbzQEQpJRqADM6PDZws7hkc1gmz2cNBC7uhPrxWNSd3i3wySkdq6avcFW1dsVvv2Wm1rc",
  "key29": "3yUTrLE388cD6WWeWJHsSohemGwmJ9xztgHnpdCT62ECPJjsoQQn57azUuWfe7o88LknAXNcmevbams4puK79zS9",
  "key30": "QzBppa4avzYj56EqPcLGWaHXU8VJFrtrA9f93Y4sb5fvNpxY3TVKgbWBdbWNUZznh3A8GjtYtds5ozaAzNTMr5Q",
  "key31": "5vphEVnn56g17Tc7931g1Ny1dex36dz8dVj7S6QNzcHcWp5s84LFn9yuVh4khFSpN4w6Zjy5eZi2rNE7SKqqkN4z",
  "key32": "4oYnHu8ZJFESXMX39NSEZbY46vAsfB11MRh6mF72WKyZYVtNNidTZTUwvumzoE7t2Srqrg2qr3xd4SPCsR7cHbJ9",
  "key33": "5ZYdFJhhtoBDx9BYSD98n7YhmD9e5NdG3uLaQC71oma2zrX5kLAUgviaiqRkMaq7UY3hVZrU4nti8Mq5LwSurT9e",
  "key34": "dV7x8QPERW8idgkCwn7xoRwAebg6gQsHgaycrnNTYspaVc8WQhGaMfyM1XaxNZwE3i3UHLyQhHh6SLYwSZDKH1q",
  "key35": "3mCisc6QdMhxmb8MVHtuz4hXdCs9kPYhRQpuWLENjHchba9oKWrSXBYK9Rbx13uLJUTVCFjx2G9ap7jocj9owFUt"
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
