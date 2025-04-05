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
    "4hg8Rhb2T7SRyRNXK5C7Nj3tu1fGnxj7wWyTrVkV5SgHvq7Hvo6otWGprCU81seUdxKoBrZXWJzpKeUXttan8ag1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EQjmCJov5TFzsRAK5ZwUsxBbDioGZzWueWAxh4otZJ8VCqPt7hBEf1rwpkCVDEKCjBpXVBjkfio5zguJj5qXXXD",
  "key1": "5B3pHV1aKkdeepsLSyQyPat8a242b4fTjSerURvHJt53fiqJCK9M6yGgivQTLUyeQRXMuAHNxszPuLr9kWX6je8c",
  "key2": "2qCu3v2QVzKWC9kbJBDxgRitDacR7TUAGWRKXURTJyeDf75Hsw7bf5aXTUXH7LPyzYJRN3XEvUrHRuthjh3Gbgw1",
  "key3": "4BtmyE3x36is5cbJpHZRj74n8i6wzpVUwBKp1kbph4ccHhNphogsJpofrZfcnuNhwEFi18VyTT788nRySckCte9a",
  "key4": "bYKLdF86Q8aKbnLCrrBUJvs3BErrjcQRGq8dSVtCPhrLu1pipq7SmvKMWpH6Qk58kyF516mtkGQ4sSwJM3ZRycq",
  "key5": "33YkU3aRfsFqrTNVtSFNALPkgeubDGKpKdB3EhsHrs6Bzra2TCeSc66fWLr7Tow87wYjkTTM6YBxfRzX3KyyEPba",
  "key6": "3YarZjs9XHG3Tku6KUvNS1gcgw2DiXUmWNZXwChrv7NUEmsFKRHP7FBMJr5tyXn9yoc2Wj59uoFDRU1HFVFmG762",
  "key7": "4GMoY6VzQ7NW6gqC5EfDTybzP7V9RYAiQHHHzpEqSd6DKTZxDGuZERdcUShUzHvz3eQoTCWgb1xcMdXQkfGYDxCv",
  "key8": "2tFq86z2XQmZcVAeWKrkBxJE3bLhZCBenmbkW4MrinfEWiFpSr4Dm7gZVhnaiCrqrRoerar6Rqtqe4m5XipYHsT6",
  "key9": "3KjSi3d1rTPMWw8BS3mQ6fpVeBLh8P8JPxXJg52BXgTtJ8N7br6KvAgPXxN8AvpcWKskpCVRMwTEUMQwJcCj2TMu",
  "key10": "3Y7XuYY9Mj8DJz4KZpgEqDRHY34HbsWCoE6DN8RGxaX6exryWn7ccKgirnJ7SJr2zP46MjQuVNpw36d8mypaXkeR",
  "key11": "37XXQ1MqmZ9RDsNpSdfnMnXtHqihHVnL3vJFgnk6ckkcednhPXmWiP9mbHEZzcDvJFJD6WJdqrxXj6YyxUce7SNH",
  "key12": "3C9pxmJXAikNf9UBfZA38uPaHN7dwyp1xnKgng8PfQbaKAR9HD37vLZvETR15dzCrJP6yuoFnX9uGBjMrxvPTEHu",
  "key13": "2pRs7zkiPC4wJd1GjqRB4M5ejXe1duT6LoPauP8h4eDhw9YxUub63VaE7WJrCzq13Ak3qrquZuXXvnH2gadYPtF9",
  "key14": "45S1CsifHcktGQbuWXEv6iknWrFPtr83GumFdpyy4LWHw1BgWQg1PzGfHvFq8JoGa4xU6kovTcNfyvcDG9LzHZ1S",
  "key15": "4av4rWJ5tRRbsrc9wb5rsFwxiEwEkAu78dBLed8UbQrXrZgVHmc2Erwvr6NiqCTH6h6xExJaLyamwNuDY6NrEtxK",
  "key16": "3wySGCTJ7QRSvqgMeBX8FDzUyn6yqEx6Naximcobtih3wnnXUVGACXaiDufDBRAQXvy3W6ph6M1oSL4tBYiTwoaT",
  "key17": "5DWuR2x8JYGwQDPpFoW8QmaYrjFn5mVVPNHhL4MwdAfKjRAddQkPjtNyn616WpYgTA93EPDLLWLpw9EiWj658C3X",
  "key18": "5V2PYDGGm297uMDPNQhhukVZrVk4FZJVzAtieTtxpMBqPBrrg4MLPcaPUdEvoNreefBrBXCDtArMmP4duFweQuJD",
  "key19": "A8nAjpuowMeqB86ZSxGC7dRZGsGhVZPd6kK7cktAT8LgWeQkmwrCyzPMHN9Y2NM6HiVTtMwHyeyydW1xa6g3QXX",
  "key20": "2CcCaRmcJ1wsgNYjzfVEDiJmEbpU95M7MmQni6YcHv8AkweCceZSJ3ZKkRLPsJRewzJxYv9gbg3ZXo6cQ3j1vp5C",
  "key21": "Ebo4bBf1c4tbaGYQVpRrWnRP1WoXqHMWwK7VMJD2ucKbudjeG7MTQB4qmcfPtMAaezDJHmxjWTvCEb4jkgzZZQC",
  "key22": "4pj2TPRLAzJCboEaCKVNHHeb8uwg1EcaBS8obSUyr6K4piw19ygS9sR2DcUfjb6YmsNhyQ8PD9KBxVu9yW2cTNgb",
  "key23": "485tAuovSKrtX7pJEqyEPSWEJDG8Kspr3GTMSt25j2Aks6MbaKKGqs5yWSttk1McBP4DHbiwK42BNDzxLmmKFYG8",
  "key24": "xqhg644var1ypog7a83nVwgt3TxgpPeVFBgFPBmJUoXrdiwkcfMH4jRgt3LDEnAKY7cfwCouoAU6Z8iovfcbWRt",
  "key25": "59Nn1y8FpT9fN3qkFjmkBMj3dA8RwdLo28TogpE6aE4DoQpbGvXq4orcWRop2LwoEDna5kyt93kjXRJRu6rwNkjv",
  "key26": "6umKB1au4rjBXMPAe6VFLNmJTxn6R6ULbDMBvzpF1BkGzzkVScefyeei1vU83SQrQKYy8eYPfgoLc31e5Z3Q64j",
  "key27": "4EfqEHWUaCcrQ8KkuPuCv5ErnWR8dLMiZehNz4VfDow7yNktZvXnXBJFaXTZK2K5xsJEgAJdb5FAJxNWVTZEzM8k",
  "key28": "53JAkChPoudZ4Mr82j6E6qbKuYfvwdthNYXSxb7VEMtDtPZ1jxo7k4gAe8Z7r6apX3Yqhe7jgTAVJ6msGDVu4KVU",
  "key29": "3NW1rNxMswZHMzJB5Y9A1EGiXJLCNojBZLYW1kYjDTbm8F5vtjWGDTVhYiYWFnzFmGFNbGsMQ36tFZNnHMaBMYP2",
  "key30": "2dPz2RPhg6njpht33ym5RfsXo8VD3ZnPcPw2Z1AsLmPeiVbzZDyy5HR1fkLtTPbmWqn4t7B8WksTQRyPAQYhq4Yd",
  "key31": "3NeGzv64G4dt6ejTgr6MDr7at2HaMmvih8PXeABBt5yr5nuLLRvM5oeQFeuT7FLH6dTCJLY13kZpcHz5L4jnwzBc",
  "key32": "HvP4P7pqp4J6QbUiUgAouCgfxfYuxkThEYwWxtcMnYXPH1T53LQqgCs9oXXXHbmyRifApstdxcsoKprx8Mg5Gdk",
  "key33": "HcbdBYFUoUGNj662bzSszViHZoVFPU3dUSUs18BLQSJBXZ4CVx5Q3cAMJdMJtytgdVxDL6o6NkAyGCRM5p25rjF",
  "key34": "J2v3LGHobhW5pfA4vELMZ9sYnXm3RKVDbwpHAoqqQopBEMDSYHDHeGwv6ijQ7qL2EUK1K1ENhBXyv15Bz1ttgEc",
  "key35": "66HfW6fQSepNs3S33SjSDs5qZeAVUmDz74LtVXqwE6pUtwHTHTJ5nVtvhESKFsyurFDkTRQMgB7vuwnFp1fuKv9P",
  "key36": "49HxEmDrFHT4spHGJGt2Y72CJny8iDQHttCs9pcxwq6tMsJ2yE2ac2coQFoKySGKv39aAroRLm3v4BYZd5Qfx2Ar",
  "key37": "2s6JQks964FtfmUKzpj7t7Asx3bKEqMaWpXdnnnrDJfiu56x9Q5WG7vqvnnBbNTA2iHM9jN3HW12WKoPv61w6YRZ",
  "key38": "3hKf5SBBUBjr4TcYkTdx3f1AhvnLN6MMvHisRicpzZzaN4rcqxbxmmdEQHdjd4kDCMTsibkPD8BNv3cHAUHmiskL",
  "key39": "s9f54UoyfHSRd5vHn3KsuuUij4ZhvkdDG2F3ptAWmsbTowVEDL6wxGzrN8W8bHGcukTsn3wShqKJUpxnuvio5B1",
  "key40": "3U96FUAhFNY8sca9eNg88AnQQm7v282F1CzcZUTRzWmpfagveeQKvTKVWPh9NnB4Xsx9sL32E4wUaM7ttVdiWDtU",
  "key41": "3CWjFrzxQD3baRCsaWgUKHrn1McLsFMPF8J3ypsEw7D1LAFUUa4H5pJ1vMqCsBkPoB28o8AzbEMP4xsTzoNH7vzC",
  "key42": "4JJdgWA2xDcyMDc9Jxj7Wxdfm8YY9gXGxsvdiQTEw2AURYpH5KgSwWoJnStMomcsaMhSWNY8zyv9MptsWUPSXL5T",
  "key43": "3Akk7U5Zaox7bqzpfbjTV91apoQnjmYHLzyBo2mMCk8NKTUX3AWbNQuAJ3Zpx6wzTq9ACgUv9DgwZbxfiR1NAXFK",
  "key44": "3FMKGEUETC2j2TwvBjp39V3KgMK7KzcjgxWe2ZNs51k8jDnuGm4zKYnJ6HAz1zTQAnH4cwM5mqHZbNqB8smLL3ub",
  "key45": "qvw8p1ebgWNPe9KuvxhaSN6WGYX9minRBQs3ksDJD273df9jSJ3VWVLXWxxUbaTHEy7nVcZfJfBtUXzJRgsVAxJ",
  "key46": "4Yd2ro1ivTvJEs4AAHkFg9ZNWuHYegzmMQhS8m8y9nodpxBnoUwGEZwQ1PeMVvF1MDCFs7ttf8rPuJvtYFg8wNhK",
  "key47": "2oUtkFs6DB31GpJYpp1jq5jwm61oX89smCfTJtfRWYjGVn41To5B2gysv5xDMXZXAe4qhd3FD7BjLKZFVHxxowc5",
  "key48": "4iTFk6WXuqwdXT2JdBcsfxpGKQckoQMDrSr1XZLhDYtv7oaArBqco3Y6k46zu2NrReJCXxiqz2B4fnTJKD28PQC5"
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
