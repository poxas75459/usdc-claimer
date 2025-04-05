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
    "47Gq7y8Ko8Xu7urunPx1q6LvZYbBEdMJJQTkJJKjVJC2Hv8iLmaHGG8UZxcoQKxUoipgMCGzyHJXQqjpDCPb7Ak3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zemCK3QdE97jdppwriqg5vWBGYnWYRemtVCGF9EruwquZoY9RG2dc6XoDs8rUNsUHtieZFeJmuJuyrPdE3nYepa",
  "key1": "3sVjveMNcCxBfvgcLdnyhDx1ytV6EcwXDCWky3UvzF1fg58ikCK5xB7aBhe9h7PVkeRUSpiBWoEBtvyqqGmtZmJj",
  "key2": "5PQp98MCDPWx9jP3UAqBfg4To5N4gQNX5dXpLZjvvxiTz2BbguryAUN7nvkU884ytDviXrZJY4ksKCBY1Mpiv2f5",
  "key3": "AKvirmuKbTouTTWJJd4RDS4yQYeeL7RhPRyndpQqT7j7UTiKKgdKC9Uc3VZNtgDNSN1yDA7u8zTPVcosfnfnjsx",
  "key4": "3tdjXWmNya6ctceZLhJXTnum2JoePqPffEttnoABYNMVaF9qRedNv56Bwqei6Ps9TnwXEsneLFgZB8B1oNtzZ4UJ",
  "key5": "2rssyVYAdB5vakvw6MTdqSfZQJT8pYmtDspMFRnd5EMeFPqiETjkeBatFsvSeStEEENWXEfhvmqRHevFXSFqXPCw",
  "key6": "5KgWg6V1TyeakM1GvgtEdmpU9wKAiSZ66TXmMgRnz5GhTTuZu6g9Qy4Ao9pwVgVR3CbpRxgQZpMkQfdCnhAYy9Qb",
  "key7": "5MQxUnTfd3RJWANh7o45pcRLA9NAWTYovRSASpBJGU7T7vr2RKgok9L76sKjWmhR8gDuCMzoNdcnoZ6F9itXi9Ay",
  "key8": "4Uqph9UvnoSqzxuv7e6fqAMJtnMeojsdKv9JrVLFfHghrkcZ1gK7HgLaSxhsmPqFeJ2h7gET2hQGD6LCb1PW3yHJ",
  "key9": "5C8vJr45D94X2SDSy6PX3sqPQYvGey8cTd7PvHNmoYWMCVtL4HRaWf8syVqmiNj1CJzVxQSL1soWu5xEH8Hef8JV",
  "key10": "2VSomLM26NsvoyNnJD3Vxsaq2iZmSijJizKd74bC1uJzXjtadRUWXR5JYmXHRBe7EAi8xPpnJgWXXfuJKfL93RZx",
  "key11": "yj28xKbU5uK7eVvZ6xVW2WGoJWGFayT2Lojy6JsUszPeejuTzWwbWZdBLnP5dNhU9Bhod95Fze69oaCfbtiP9XN",
  "key12": "2SiFUbgT7WkJTzRDsqQUTr6uiLsc4iUUfipjhg1ohmnguob9S6yHy1Ny22F4Lk8rABhUYegZJUyVjDNVcyGfVCEv",
  "key13": "42617yrkcwi8q7CnqCgBiS4b4j6WxkatYBoYxVdoBsnMCXkp1wiNy7xJM5oVTiYE8FhGZ9BgWGX8Etmr55LxGWwh",
  "key14": "3t4iz1ktcERZNkbbzpnuzZbQ46zSFFf5pb9a73aQBZ6t3mA1M4bDq194jbiMSnUh2ybhj3H13evQVbKBkaSzC8hf",
  "key15": "379WgRearxUCWQ6GFnq2mnCmm3Stsje5sy8kLepc2ubp9KniDGLZBTuvoiKKov4npYHBfZtSDh58TPbjaq8vh1an",
  "key16": "5LUxfu3KS46dR1GvR3k1czUWKECweh497Np71H6255wLDY8yBnPdCMCPfxtR78buP8DDp6nwY1aDYgrmmUAZfqYz",
  "key17": "4wFX3UvFQFXLKDLupgQreePdmZLB4qrhbQ29UBFYyTCtF8At1TWtzXNmZXxJrJRgB8gxrpb3FozvphLpZSBViVeJ",
  "key18": "26hyVyBbv6xkNFAbVURXktyci2EWoXs814Px6jx5o6GDSNfCB3M9sWrfb2Y4nDNQUFARu9TwQVieGcRePX1Q9C3Z",
  "key19": "3mvhME72QJqNaL2rN9TKZLZoEuHboKAtViZL51jzoM4GRQkNrUreaDNGNnxT3SAhhX4yFcmhQfYAsZVyYaSzEvHV",
  "key20": "3jAsXPPRgzRAQnHczjvFCyi7grJ2sNMbqVrvifS9QRAFn7o1nxvnnUGBSQ794LMkaCDdyA1xokyEvqRSyy3HSuka",
  "key21": "5wjtUE9Ma3s5UTJN32hTyHGGfGfb8imZfaUyR1irMv6LtAUS3wGFsaKstxeSAWaxzeVrF4cffSNzcw6LSBu43QcV",
  "key22": "2jGPp7aociaD7x4Yj3zJ3LnjTextESeyfPqXSyWG8WEz9rGLw3geDADzQjQKNN23z6egBrvnHs3iWDcP58Exbx9Q",
  "key23": "MwMjiMpvWET2EB3sqzbvmM8QHrKWbsdkTYfMBEWm5fBeWDuFSFe1Bh9AGMhDSkgUR5srqwJ8WSQQiBTEgbRWJaw",
  "key24": "43GD1cTVt9wuL564E4dqb2iLigPawBTZxWxwwX1pbbfxC5YF6EciAhKudqZMcebjp15N9FowtdANSeiy7HFsRVsf",
  "key25": "32AQhcdKC8xnH8ZnrQV5VH9BL2otAL6wPLdjWkMT6EUjRzQwbw5zwRVKphRm4vFiaYmNKtRMRbmwpLZX7cFxyJca",
  "key26": "3Dyfg1x557NkJ4o9jMHgEyei38J1eiw6KQEhtoVjzPhKK3k48cu6M9PdhmJMjr2PNLR7PiCaQMDuJC865Yiiu59W",
  "key27": "395RcNE17g8RRVDhumxpUb2i1hjZdVXGhc2AgGT8xkQsZoJcmMo93Y275cTF3XCsxTAzSkTDk2YtXXb46tHYWmrb",
  "key28": "5WuapMTa6EgEVVEBHDv5zAqo5VCp8MJp8csMk9NH5AnEUKpsAtVaPv9j1tMWqybsJs2FASsCPQJdQMAj6oYqkvKH",
  "key29": "o7gUzGmZNjGZ1j4LhreKMJpQngiPmkV4mnobjcWe7x7hV6c31utodZYhLSfePHqXQbtQgev9U3cEH6okqHCZLEn",
  "key30": "44T6eziXv8oC1qYyeqeBGGqBu4zFkNDkbNMXpxvsM6zrASs46FZEkWuceELrH8ym8a9Ui1dLrnRrX6tv7AgCUerQ",
  "key31": "4LZRVVE4R93cctu2VuoM8A6BXgrcC3oGLE4P2zULQ8LZmkovUR7SrvUZVyJXfXUjkjV6ozvBj6yavKB5QMJBJfus",
  "key32": "3wXJ3KAD5Qa2J5eaM2MX53LQMbNT911CeKy1XEAMCQsw3tDFUvR9LTdpwvgZskfb5BQ8HQRTZS4jWh4fk9fPDEQi",
  "key33": "nR58XZYj1n2MHce4e5ZSrkHSDrvx87qurPGix5PgRLMPF1MJ8GUu93ouQbaow4kFAkbvHDxmCrLKxnGDNUY6RCz",
  "key34": "4Pki4Jk4Hb8LtgHJBa2AMP8ZmHzM3ne4nVWr3bqp9SD2hbaM4tn9MnjKJ2JiUTNzmAr3cTLLX4WygR6WArtmiSWj",
  "key35": "4BYWDsgFjqhCzYqspXhZjxkSpMESZS15mNgVbjRmm6AyUUvNxdqdEh87JtuurAHMdLZkpGeALY19WbQ4bPGYjch3",
  "key36": "3HWE1QF1nyy11bDHzZfEF26tSm5fWzcrrccQFqBeUJaQPE3nLE2mWbn5vPn2v3VA18pKHXwjEKMeSVhJbsZrjYYa",
  "key37": "59HA8vjyW2fGxYC8LK7zFEPDDe1asYNM4qCKu4Z1Thtcb5ycpV4gXRQPLMja4pK3U3tQRCs4MNEczMvKQnj48mVK",
  "key38": "3LMHi3Qsc8KbaoAsyYNx52C4YV18f97fiPpp8pBjobP5bCcyYa2dWRZuuyvQDcJpCGG3ytn9kQzqRAcnFt4MiF4j",
  "key39": "29XB5vy4S4ajpk8ysCEVpR5HcVge7ioiPHEjHKQJcn4XJESUGdLbqrCXK7QZ5AcdNdgDtQj8EV3Qzfr3Q8GJ1Tww",
  "key40": "5sLWaFcm1iq4tGs178XfqDBoENvb6E1Sv3HcvcWS2ysobjKzp2jbFNCKusE7ofJyvkVy34qGSW9AJfrFVxsxw6CE",
  "key41": "1s3u3Wcwc77zWVe8HiKuAa4pwMeDSy9wJzZphhEpxWnspo78CWzC5afdQ2Cd64UFBam7ZwMSLuPoLDMfFBzJXEG",
  "key42": "fK2qiKxaXU53WtX7Hcpwji6Twq5ybFELzGh3YED8K9f3RUcy3vwfXh7c79X564Eb2CLBCiZdDs7mjw6XMuvCFT5",
  "key43": "5QFMRDHwbCYSsSoQBos6ecXYA3xJVRirYq42iYWmnmbRA1mRmHPy7JnRAC8FY5nUMpWx15eaBwGPqewG9SrBmYX7",
  "key44": "2U9GTpWUe2ExsNTiGndjDQBiiZYzYH4G1W1ZnMuANmnbyFVsjVACuKx122bquNyDWVpaZ46hoQJawNefr6CVFDDB"
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
