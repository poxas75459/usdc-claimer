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
    "3BKcC4DNb8EnoFVfW7YWxSQ7FHRfx5H8Y9ZoRuvz8m4n1Z3RkmhwcKQj8LuwwSYZmSw5f4EWMs87cWKpQxdiJdbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LmEFxcdNM45JyFhTaDZ6tiRCKUhPH9XAkUGeojupZnpcawdntftQxVebMC1d7e1YRUyeET7kybw4XH6PRfTN1Y8",
  "key1": "5sj1T8MNgCFqw6FVvaPERWcT6XTfhthjEZmNJ6dvqa1pzKS72o7YN5pNe7sRQKhrbgpGx4UFngCoYrmmna1gaqoa",
  "key2": "2ZhSC5fcCYZ3fuVhe4HMD4fxLoXQRuoXoKPVA45FpMS7easawErxizj2NPJPpow3VRCi2hdZuammuDsg4LC5RNZb",
  "key3": "4jB61JiJr3dvaFsmg3G1AuC4jDwhBty2st4YSwqdeJ4nJKph6TTGebcaEHPXvakRqTMtqUvhioMKFu5G6KgX9tDp",
  "key4": "4eTvivRvvu4ZjBLYUgMEjR5gLYF8RAaCweUHTvWKAHGfUyk19EKWnsKiszTWwsApV2tue7ifZMG7vFzFCFXakkkh",
  "key5": "4PZkuSyAoJGbeJxqaZt7kqitc1eMebSbfKimP1tABjpDvcxNt4nkSMBaKBpPWEjb2WzWzdCF5BCo1WM95zA2PqfZ",
  "key6": "5fvzyKvnSzPLPv1wZ881Ag4Xz6opn6KjzfHAfUVBGsVJdQMkM2copFAXCvMs16QJ3XieEueiHzuTNHbCVnKmUBJ",
  "key7": "2LeCuzE5HuEU6gLbrCnGoCbKPGkAP1GnboSQtV66BjdRNZAAg9G7XVX9GkLFgHGsVpLyeMTDRPszYgBwo76VZPxP",
  "key8": "5Ge5WonRH8nHC6jdMkR8saaFxZLcYxw5DkrgnZYYeyjJ8cxgXWw4CbAf1UcntpxQT9KQeX1F29MoZAkRAtYy8R7S",
  "key9": "126kqbNorQJwqt74SVE3f6KTZQrSkra9RzY8RMJhXQ5tsqPAMPbG35nWv9mVeB6yZNyBochHRnzTebvqvwTCLUSP",
  "key10": "4tUyKbybAfTMMhNoQnq5pUHEt9J2efGHQWWPdKmYfHszF7Pmbs5sAsimB4V2yj9d6VFZ6uKyvxjmCTJi2BuwaBgF",
  "key11": "472JZBteccWEZbxa4ohg5WkePpQKnsukuJsxvXH9nFPA4egvCc1gEAiqd9xwCnCcw7wfPHwqdKpd3FoKCmxuhyWB",
  "key12": "2MdCmTaUE4o7uD79TaqHnjJjczX6uo7oiwHXvn5jCjAhr3kpsgHo4BzRp4JYfKUdmFSWuduyCaaXdLWusuwLiERz",
  "key13": "51MbRZ14zeB8Y9QAM5Gm6mkN4hFFwsdM5TPuxvWAbFXk6caGyANTdf2HZvdWATQdTpEwM7XkZQZ368EkcHoTwPoC",
  "key14": "PNDhcYB2ek4r3xNNqi3qa68occjYhHG1rWS2uafJKGmeNgBWcZUGahjy4xrtWDm5xP1Jc2TYcYqVJCie8W5HSwR",
  "key15": "3JbZmVGaDLTjriC3cLgkEBuHM4susU7WYU3fyodbfXUjGb8XWTB447AJz6MttVCrX9JjrgzmwB1uit6yYCPnmNax",
  "key16": "VUPsWWSSDc5TbNNnVbDX8HREAqURni1P8TFprRj7b5oM1Md1cBrx4w6UGBocQVZiUyhARPFba4VyVyPZQAUwBcT",
  "key17": "2AP55moaSuMdG4NT7X2dVTbzYca42bQzsb76tBSHNVkCALR1yYiQVHuQD3zdz1NpQMsPzCfMkhdwBKoCY5EXGkQx",
  "key18": "44NiHhw3ig3fSSuFRLHstYJFXxNWgF8kyUfDmnx2JDQT1ZrvT1EsAWxucvF4UBHKqrL7ie3nijN2Wm1boBuBCLR1",
  "key19": "22iNLLtk2hrijwTtsxyvimtYRncgKtHxqx7La1qVktuT8KmZ3WLAFwM4hmAzH1tysD5f75BB3C1MxndmQr6Dw7en",
  "key20": "32uLH1i1RgidNSNAAz5wDvgbXA1uYfMLz4PgDkkSw8A4wWJKCuGoTwVxv6mDB8VDFSX6wB9VtAS8jTCXyZUEMmow",
  "key21": "3NogtmEiMkS6DbRMTUJWxjpv9BuW1QnNZUoWSg113VjWNMSij6i138ntQmDgNWHv1Qc3nCcRHkD9ficARzS18bVS",
  "key22": "2j6cVTUoL5Rn2EZY55NA7HhVWgKzeT5WfCHjoTLPd2bzVG4B4jnnBJooM7qHUyNvry7rztrEMF2jcVv1eWiVUYkG",
  "key23": "22DhsSbL39bBkNVkCspWGMLMRBWJ9nRPKEDsygU9ZBEKwBcwcP4tYQeVuvNUQUWjRryftdcGWZH1CdThCABYpjzF",
  "key24": "3aHJ4KpYrcsdfmM9oiL4Q2ThZpE2Lapev9CXme1hy2B4Rsw5DBhdHjHyaLqGa3Mzvh7GGm19F29w7ujLk5y5sm45",
  "key25": "2WMArBCT8oVhDEHeuSuRS89zNsznnZmbGupNPXNRgFXtH73gXvPJSwocfixnGyBPKPGaXJ7vqMpti8wj5eTLJkAh",
  "key26": "5gcaApMNzCadiSPhqoBdPs1ELJrj4Phpe4qMe9ys2WkUys69TuLokntARQUrCU9dxSR1xDy6crdwHPs5CHmWngjt",
  "key27": "5Fm11FFukM16RkzqyabMrbkBuQ22g9tTddP1ZLL2m4MRE2Riu7eeYoqmFwPBSwSAZYgF6vkbPsSEnqLGbWs5nfri",
  "key28": "3C8GD9oPBYpTiadEtbtwuUbVaqfgeHrZG2TH2NRXA2iFipSCQbKG6KPdc2vS9XKN84U187fDZhoAyfqsYE1PKn2t",
  "key29": "5dDsurrRtSAJhj14WzYyfYEyJycNmpsPvMXFM7aa5D2Rs3efTp21Hz9JKxF3NQPBR7ipRdBD5E4UFDHQPmo4Qhwu",
  "key30": "5UjaT3U4zuJ8aYFTq5gQpt9LJBFimDEfGH12hrqgBusUnJ4BvMzZtTHEYQ1svGxmZD8w7TaubUoUFhmVm3WuUpiN",
  "key31": "4nN8BpQjioke2VFHRRzATJJCLyp5vbecz52rf8YhL7dBFLQJNKkwiMXPvkhZ1KoPE977X2Zq8hbkHf3XvdihiLVY",
  "key32": "4Dh44suy8yV7ZS25J2oQhAdSVMHXvXZQCdGbVb61mkousJ2yGvZeUPUsGQ2U6pebQ2wNFNLEYY9xB7o8A3hJFXQo",
  "key33": "3wZ5jptrZwHYu86pXykYZFMR9LnuTb4poEKPofhG2evTmujWioGcNNLxPfpQPrpXG5ED2uPbdt7mtZfsDemJyDE7",
  "key34": "5jfyoUnzECqtpx9WjW3tYwwxkUw6JjuJpvNjoqMZ1e9eLF7yPzK19vThYxQ7CCA97SKCqmXAiwnhKDvWzEQD9q5e",
  "key35": "25b7u3TzbT9Gq1CrDLhyj6UgETk7feyyBxvoSc89EZLK9KYdnugJQ4P8rjUuNuwHiQgRDXUvvFYemnhnqFWUrHVN",
  "key36": "58NWki9dX8SQ697R4mYKomhtQjp2t9ee1FUD98M9EdckFrURyzYPjMQQb83aXzywJ9yQckupjAsmbLD5szwPtbRd",
  "key37": "4MjWdBGso8sB5wpVv1KxnGfRoNATwbQHuXV7X7DY1pnd1zQYVTtd67x7dzr3VUzxmsBWGoh5Qr8jedcd7ejXTMj4",
  "key38": "T8Yi2M372nJdwn8heaMmPwZDNv6b58GoBreYbGtf3SLbBJAbpzeGemxkmF2ke8xeqi1bGY5xzY57sQPBPmHz7VT",
  "key39": "3hkuosgkvJH3RQ6PKsG3sq5vtcWR4DHTcygtZuvWrFyoeaZnUyqyrVEWE13Wdk9CRvfU63DzYk5a4rELQY1rAHn8",
  "key40": "4YZEGbJqmWYQyDEe25sgTiR7eVs7gptY2vDKPR7koDbdyNx7mQXyoERjxdmeYz7fL26UM88VpJfyEVbD99KuiN71",
  "key41": "2nsks9r77tyQ7tPysSc4N4DmhLF1KsrWXYTyr3omHMjDt3Fw8bYBuZtdMCgHSfAnhcSeYStov9HsPf3bZWWnAoQx",
  "key42": "5eUprtGhuZBfECGZBSoaBCFS1doBPuXntEhDUbNtSefXBG9oLaGKs9fsDgbZAfffMZdVL4RzDdStaECwKueRHMJo",
  "key43": "5FADLeQX7k9srrYU6k1kdY74nLJ55yVXkdzz3JBxMw8DBSp7594brEVTo9541b49AMGWNPmfa474tJK27DkGEN7k",
  "key44": "2QGy9Zg38GNp7KdyFjMSygQBhKPJtDFnGiKRya7XDkzPKVtCsZc2tGWARcvCkM9DwA6PY4CvbUjFdh7ymZJ62zA8",
  "key45": "4f928GArxawLovwmrPZjSVcckoTZph9q8HVkCHkvjDx1x431hrdgEHZS6B3uDgYdeZ7reYNdmZCF1D2rZznQwu7g"
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
