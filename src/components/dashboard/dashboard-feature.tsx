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
    "5crPrUVHQQ2sNA33UsYZp79Fi4meDNFV7QAWgwSucgfHXE2LegF2rrR4Xh28pRZtGGVSYqb6BnSYNvayV7VycCSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37d82y7bdyoj7R6Noz3qUxP9Y57ZbeT7rKEy7XTTRj47ehE1EMPnUL7BNQPTRLv2sw3c9yJJ8zB2HVxBcJ9AkHUb",
  "key1": "36tGwNWKhUQhv6zNWUwZEf9eXh6kpf8W651aD1nv2gN5WE3N88Kqzuf5ZRBNLMokScKnkisoqdXmYpZ6HvaoEfNt",
  "key2": "kyQAi6YLZJesAwwZNhPCHAY41A8PwjkLTw6cY15dxa5YjKiNzyxPRRbTLjWcCkfCnQMEpn2xA3MbKmhWSAGTRW6",
  "key3": "2VGDnoMKu2rJJ5Nk7kcZfeKSw5FknnZKJ2E7UjKi6e33hURBPzEuqBVQsLFsHDJGrsUgztqoi9Hey41Hq9bcgbai",
  "key4": "626coZM3h1Svn9MjFzp6gTuvFVgpxC2YNVPdzB7jRnCN5uqi8kM5Eg37hYorefGMECy3sJhggyQx8uAYMhFoCwGs",
  "key5": "2qmJ38WBGVWLT1y781ZxQqNjnbJyEcP6YaQhJDvbjzMHWZpJ4aacikeo3HNxsHZnH2WMfZ69m2i4CdRY6NKCB9k2",
  "key6": "2nKbBM8A4sd6vKKzF95tYJzqpmcH18mCYmHR3i2cZGTq6M7hFUunrqPRRNTby63DvWqDvGhg97ebtAdjL5iUuQ2k",
  "key7": "5kHzjVJXFZ54ubW5tqW8sFQGy4K9wPUW1bLSJYpdwPkFaHGHUjJSdwtCNkF9pTgfHC2qq7xBHXZTpvbTWVum1pyt",
  "key8": "4maw7bQVmKXRohKdWxWf8SMCnzchmV3mxz3CV3obFzNPR78LutP41EwfjhhZowDZv5gjRPj782t1ZdzWyKsVb7Ko",
  "key9": "4YLW3C7BJ4vdDbbLs5RoZmSkFmD92TEwbmQn2v1MenTaYxSqpwRYQ7U24bc1HnHZFsTKTo3uStnHRU1io5GbkKz5",
  "key10": "3FY2RihVimjJA3j945Bqrz4VKaSqkEaVAcrfHhA3b2mhV5ruPWheRdxNQ5j3yPeRQ7PCtAkY1HFt32QNMYh4BCMY",
  "key11": "33KveJDFhDtBxq4VH4k9C6kEvGTogmeau4oBbZipidj1z5nkPRUWLnWtwtRv5Ba8vyv1PqERqDaBVPqxv6L69g1C",
  "key12": "3E2Wx4WwKub2SdmMbaQp2q3JHptgQ86YYNR8uMyHM8DYy77gdB4urKCGmyfdHdDek9TT7Z5LV9HDtRGSSBBdEiNr",
  "key13": "5WwYRsupXHjSNeN6DRYYQNNkxqq5FMJjQKJKuNM6aQQeJSR1ru1qLiemyuJkufKc5J8WaZsBRdjxAPvVrzUg77LJ",
  "key14": "2AfpMAgndopUGpukZzdfdYm47ti1MbffXaEqXxWBKUXEd9qbNMkQJMUzH4nLyfug3NAEaUqi3hTQxDMsiTZYBxpY",
  "key15": "vSkgg93bEJu4UmCYMjnzRuDUjxdm5HUNnF6B3qGqkJass1DWe8LjywP8DrsXHU7FH1qm5vsK4C4N7ssVEqoizDh",
  "key16": "pt6gnj2FFWzVPhMDDBetoyWexzigFHrbcYyqe1GnJyNtuWy9aWQxMzsqW6iYjCJK2EG75uC9xeuzRVHHsrRhMiV",
  "key17": "AfMswT6kiKEL63RzeW3ZWGjnuq1LsB9fSoUNCvTWeWZu8Ag748nKHf69QzpGRF5ornY6YkFzZbCqSgqK2dTX8Lx",
  "key18": "Fa7xaBgYxnTaSgY8755R2xrLdn7cQwuyeP3SGMPqe58BZe16rdfuuTRURYo2HZt3wfhezwApV24nP5HawA3RiXM",
  "key19": "5DRNicoX88YgvrHaheLwwKRySQoVFQcjeJ7ddCdtjmMfcKxVjXfJXq1pkCY95S9fVK986cwaNaKF1EgTqfiZ9bW1",
  "key20": "fhkw9nLmyUwzesZX5zQ2cWBLSLXWNaKogwpTxH5fGDNiXgrgaq4s7Bod6cKVHEtHpS8ELFQ23RiAKRXW2aaFAgv",
  "key21": "2PtkwPSVnkCCrHiDjJz8SzqGpqPZmCAFhbvspHamhLs4HLBHDKAFdSs8FpNeES3LK8UxyqwhAnwarDPrPrUCsS8b",
  "key22": "535S8xQuCxKVuNX7e6ixPFyxyZST7dz8ZTy83dgadz5UHRHmSDq4Fnv5Am5oJng83syEPZFhBmZjmeemjMwmLVSR",
  "key23": "2qt2S4Nyp1mszxDNEevtEow1Mo2Sjg58RpX3xcU6mBwvdYPJSTmq7zvbTbEHWwHLeAtv7xpB2FPcsMrs4vmDG51P",
  "key24": "52VKAj2CGmjYtyzxLnyMttaBUNizyuNdovPryLiH8kfv3VYsiLZrp19JLSPDKP4FfeMoxoiL41CNvmrLJ27CDPyj",
  "key25": "qtX5wkFBTMnzS3Kodgxwzge45rAq72W3ggxCkX7JHfB37PU6rMT6huBein6V3Jp8cMq8NE9GKBQnpTwHrBMJBbS",
  "key26": "3hQJGxYeZiDhALoXU38QNf6fnDogH3x4QWPXpsAW9pATqKZ62JYLeVp1LWadwBzdeBH27kEq4D1rgVprrrMcU4pW",
  "key27": "5Q3n1AshyEyNwUzUvL8WTzPQW6SdBEz6HFZeaithikS1hf2MYHcpqMaAXFAgdYyHAmCwWpE5WsUPGe2SeNe8ua5q",
  "key28": "3zuA3STXvtrQXNTEi9sHrJK9dwDvV8miisDm7Dt4fpsJD1aLFk4wEXA2DaNBzvKvNH4bk7TQwA977tefgWZbkymv",
  "key29": "29y1oQ9ffD82ncXZBgWnRQTvq9cN4WZGyNeBvkCM1cvctLEDuUQM4nbDUj3KNMEUGXTE2z3QzZznxfHbhqksNb8P",
  "key30": "5hQ1TbokPr4LkwGAmZJrorzvXsiW9h4o6NyL67tHtmFRKdvN5ku3YTF82WoAxrdWW9yd523YUBi9TUUNQmx8RAQJ",
  "key31": "5k3e86iNWweweQxspTRdn9gGY1bFQyUmrEMVECCL2nRh2CUBV2fa58mc7ckZZ3vopkdQt7gZcWNmw8R23zjkdZ7P",
  "key32": "3Yv1bCxJ8945ndKUE92esRyDomyJn5dVCzpByojxhRuGwvPUdRUADAv1scZWWwWwKMiMw9UE1fzNMLi6ZqvDtFEd",
  "key33": "2VFa5bFsuXfKi7p3MaFN2EJuEvPRy8uncJ4QWQNVJP1ppLQmU3H7uPeEoW8inRm9F9HAhyXFehU4GoJhweQMkuku",
  "key34": "5t1CMZe4Hn1f2SUHUtEv4fAp6LzgSHXSiSbcVewgbeTyEh6TFUosLC5vCyPLtqZg99cohwaXx3TZyaJ3o14BFEJM",
  "key35": "TBtG5s3GqosQjs62xtPbD7HDCT9aFitZmvsiN8axBWCzHFyzsqxhUEBzfvFBpt9nxfJiaC3sybv7dAvjQh2RC1V",
  "key36": "2saiLWvjKwRjTaKPHpmSTNiNpG7BGRfDkRFrKXCXSyam3EwwQNuYmVzHYxFkbFNDanVcCtsdgfmvbaeGjjwH5UQw",
  "key37": "3cPQkVgNakViWZ5LZJoPuCQvbiMi61AYHXsFnWXDWve7unGp5C4FhrUtRLmDVXq6goVMoRQymtKx5e8FZNEsb419",
  "key38": "2NZ53d4cxJSqx9EgeGNLvSPv7S7ERcBc5XNx8R6roH8rm7aWQ5PEHVp5MQwudV3zAwzYLHoNi1CZ4CpQD99vk12t",
  "key39": "4C62Fz1kgXNSJEiN3Y3vdKUnWDS6xGdVNfNwR4ThCwgEAAfHEEoncBsvBdqXtpaDyvV9EaMniTqgnKQ6rkF42vVQ",
  "key40": "nBeoYCviH5hpVpEpnCUKJdsSt5cR2x2cSWnq8MzaXkZysfurPCFm5Uk6pxPAH3JAuDLuS4o1iGPYYZ5jWAikJux",
  "key41": "mZTc5TT2qK5h7cyyaQKWZwmcCWHGAy1baZBCHPUPcpdrS333Qd9R2nLZoGnbr1g9LDW23RJ5j2hBHoyrLQnnfmr",
  "key42": "3XptR8JcPeDnt86StiTNZ7Hu5PstyCXKRxxhAzTm4rKAPqdrpxbC2wzgoKaSKABamMQdaNHqmDN4ngJxgVYjaB8G",
  "key43": "2FJ3XuWLEkALzba3wwmE4kbGietv9fsp2vZvyRsLHKWzjJmB3JfuR53s8J7gtDW7PCEGBowKP8PkVDcR5scHE97B",
  "key44": "2451KKFtrVX1Fe2Sj6bfs2b5kby4BJx5ipg8iX8kxLwJqSjbFy6zbtnn5FCQNbPVCEmRW3Qfg4eoms93jrSzSrEG"
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
