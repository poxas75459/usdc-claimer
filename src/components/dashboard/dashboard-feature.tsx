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
    "3kwvMN5bTLRotmayMrb4sfM26QBqSKHYZ354eA9NxBTBpqAJhNNP5c8bjqXsFqtfw7T9jvqzDZZV3kLVyZfw7eyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MpaLFSHhUhUfUBAq7N4nxAtEcXtVS5dHidgg7XNubyCMHKNxqzv4i16YfrHs5Esvg77zAdsf7KL16dB3QUwLDAn",
  "key1": "4LRGkKPjjCHLQ4FN2QMs4QDoRJsmHBensGi6WpFGKSaKA2kFktvRx3nZJdpEqtAmHoXHf2JhEYMLuK17yZ9SioKW",
  "key2": "5kKa6VSk6BJ8ZspV41s65NAnA14zM5PKfEhJHSLL9LnAQ9bxhro4hC1r2sfE4CGH4nfMRpEaRBZU7jD4QSQ21wqc",
  "key3": "3dyoXUF2MRt43p3o5YrrXL7zZALC6zTd4zc2LTVDkHHu5PMUitEmCmzPx1ktcJFwh6cK12nAoMQszLcYvJ7SWeTH",
  "key4": "2pJFom5hCr3q57DjJaFVvm4MYyyw4WGGDqntbsB6FwiiN7cpp5ba34UEgQhwfr7wkRSgcM36Ed7EHDcfozZXxx6o",
  "key5": "h6F6smggYVShw77r41pkzAM8ZTAfFjYxAQm3yiC3V9XCkxF7d2wHcBN4hNZ5zokQPAV4tUP3BLtfuQUfrjaeEmy",
  "key6": "La63jkY8HyngafVWK8UrXZabHR2WR1JoRY7k2j1c8L4tMKcoU4Ubm4pzuTH5VecyxPpyWFdguBP4fvfztP3r9b7",
  "key7": "3HaZRX62Uxp4wLDusB6Gub6PaB2cPzEHs9HgQpy9VaL5N2fx16LMEbq77QvccVqndZvn2pg1aw6HLRBDaCHETtMG",
  "key8": "3ZEyRXRLBVt3fyzam2UPMKKYKbxqCHzXP3pSi8rG6E1ANUVVVvao4JJEhUuZDswKLygphnM1uCxKjhQ6MiR9RKCV",
  "key9": "3ubAM3hMJ39dFUtAcjqXUeHjjzSVWvz1r7vGD9qbEpYiuHY6MfpJQBaiKcYdf1Vv7uUfeVKjt9ZsD3ffKMCgHXkW",
  "key10": "3JzkQAsCXUCXjkLaqC67nkg5YYEcKWtD2VzybBQWiDoLfC7KLE7DpgPePk8UjXqH11yjkXrr2G6Ev2cHv6U3ghTE",
  "key11": "4QvjRApn3uXN5Nu98e6DdKezSyfjpwLmF7danXam4ZnW3XV1qc5J9MVZNkNocbfEwYfvjdx6gKoiPDtpqzdvE6gD",
  "key12": "5RAnzCbRFFxDfZjnPTJ2PAfT6sTuLqajoiskJE7yANLkKeSdAj2x9JxTkTvmxUsur3FEoVd97JZNYD7i9GEaR3W9",
  "key13": "3mByXhsqjooP2E5WsU2bnhGctcK7QpTB5VMVwaeektsYTrXevd8SxkFY4W4bJQwiG2K2JgrQDhnStNBCgcDrPQAN",
  "key14": "58JSPig5jGiCq7yN2tmXRcEqxvhAhduVvdcAybnscLcpqYYiEYgJeyENZL5UVcsBtG9npHwE7dVvHi2UAtTpLZh3",
  "key15": "5eoDbrQFgBjwGu6SJff8pD9JexKk8xUM6xFUV6dBzh73D3KLK8tc1CpG8MBLeFznWnR6W9e8bgcFCoetCPBWvLZY",
  "key16": "3aueBgTCbTkSiwMSFAyLpzTUp2yF1UbpMySCWkkkjuXHDT95hSNAPAeqBdAtoyixZHMbef32jewn9zU4CrfwBDgY",
  "key17": "5iDa7PPEmBMgxXoGEP4ViQT5byHzKBajCqGfgGZABBUirM7RZVfdbKpoYVbZATHGoxZCL2DgPWAnxx2g1z6fCjNn",
  "key18": "4aaUMudiCPjtNFkcor3Q6PKgysAJn3hPNU6825GKLiUWtCDEM479YUkjdbbJBZS5DY7SoMSrDjyTnaMNhN4j58uo",
  "key19": "4cybW56Kc6jDiWPM9ri2VuittLkAY8MWwM99g9m7kmiucbKQN4gYhudFygseQWVs1sGvP6AJd18vdvmaAxrU4Zuv",
  "key20": "5kST1zjxspDJXBz6c4wwsmLRpfj4vznRfGnE5jysdxNak2AUPt7TjoFVFGfRWFiWwgZZjSAwaMQWLpQVoshjPKtF",
  "key21": "2yn5SzHKzKbWatNHT6vs2hajkBnaVmt1b9Lmyx1m5FAhs3CtdUtSrPeFB2YAPqDvZy5PNxdqbmZcsDdFDWCsHbd8",
  "key22": "589vcisYMb4HP4jhxQARYJoysxWaHhNg4pGvrFjMk5wf5eoGWNg8UhTrXGMUESJL4Li2SaRhewyecrjy96x8feTP",
  "key23": "4bD535aaoMBkX9D6JgitTF9Q6nMirzNWRHnY5T5xany1Sseqi3PTTaRN3KdChhKEkRduuYr2cikjz65qvNUPzRdK",
  "key24": "43Unvqza6fvtmNTo3tC65xiRg6ndSqBY2DZmdVYUo7UER59DnNwLCKE3bHeVuEKoasg223jcKGbrgXJhtoqs9eXo",
  "key25": "9eUrzsrkyPNMSh27mJixJeBdGBcg6VPMuGcuLQqRJciGauGWS8GRAdAKKdhxhcFf6bSrNkRt8ZADAbHqpqynw1W",
  "key26": "4ccZFe2i2RXVy2feQjB5cxLD75X89RdwuAvSu2VnwWUqkhzisqYUjg8vEFRW4UoKUZAX1S7Xpx4JeSz4Vanwp2Bs",
  "key27": "5EmnsBkxEdqrhiUvkzUh5L71qMd4TEgmBQjaBMcagX942CpfvbcyByjKPpNLKKuzY27YCNJq51dSjpGFwGCGhqTu",
  "key28": "oQg8xB4hbhLv6afu1U3EJqDvR6Yiaj6RCKvTdL79CpzfjdkiF1vKwAm1Bbr99fPfNtdD6UnR9kWPPLnsXVDFmCW",
  "key29": "4CPLZxk9E1NaRQ5i94yi4xcPPBKVBb5y2dneYzhfZwtPmU4Wj6VuW5KkKzxh8f4gskwNTsCiBdvLArGZALeJMN7o",
  "key30": "2TkPjyxJKL58EbcCC6r6jTgZHeCpudZbjRCqj1hPo6hPBnPayLmY9zbr8ADK33poatZWefWUbdJzXKhNed2WmLKx",
  "key31": "3vV7vSj7cE1ZpaRrhAvjeyRjJs92TUm1EuogG3LXnyhmiWYYvZtwW7AzVzQz2AiDJ2p7d6PPCtoMnN7hzfLh21st",
  "key32": "5BXY5CS8pLg8AmKWFKV747ekHHev1FguYVwnhUA4c1cG8FvQpZjA4qAC2sQKsg7tvq8crPS919nDsnwg3cgPrLoB",
  "key33": "65bdUsUf4K4Ate6No24pAdZxTNv7aefFHyNBA5ZTWCg94G1P6eAJTucMSZ3r5yRz6f4SzyCt38nacJKzJowYM3pM",
  "key34": "fjhNfYD2ezmst2AF5XGWgPsQS5JqKiCgVrWkBPXjuxfyuWeLMZikmrV9VoCuay9rq51LKf5tXDn5jjGDx8vLJa6",
  "key35": "4qubNYsHSAk5T99bjnBKAnd3sxUYew9mX6Euqcjm3dQcnjnryUrNjbBmGZ9pdTudJ5STqQkeZF97Tpmb5N79STCS",
  "key36": "5BSQ1NPehpunQeE7Kst8QuhFJcK2YCamKfcP12c5njE9LiopXrD3FZcKyL9dD8shSk7AvGTNK8X8nsTxBgK9remd",
  "key37": "4uoP1PiUCEC23XkbvTL3rSzJF1cPm3yKVExeXRGSZsLZgeSSLYRrLPyXxHXfPyt4HXByShgMMwksvSU2da4Fikgs"
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
