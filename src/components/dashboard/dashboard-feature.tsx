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
    "5vsVLRjUBEynXHLRjq2hxbFbyvRzYSMkKSGRjdTcwrQaU4KeAFVWhKM6AApXTgxiB3h7Y7zpqJqg8sgjFQcPtfNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51M2zCA3hxiqrAsVMDuDgxhMBDRdGFUToc86P1K9tHkLcXfZ4awCahKEVEgGfmE8PQ5yWQZsTrffwA4ZAiEAgXBH",
  "key1": "XLxjiXEM8qSA2FqdRNnTis1K9FmpvirQ8Lp8TEJCE5K6mWk1E1bFJiLmY57fL7H8YL24NxYRzdz7Kzsfx6ZdjiJ",
  "key2": "271E6ig3AcyTK4BH18rX3y3T79ui8J3s58DCduNb8akihaJxWarUFkVv1aBX9PLESecg4Mk4RprdPHsHdK7JypqF",
  "key3": "3Tvk5UoHBjJmGkVkX4XyU8FknZT5NBVkDdho1vzQMpp7m8Uusm5KRuKWU4i9JpRgtvkpUBSq9XCwsCb3sR3RUPzF",
  "key4": "4LU11RuDdUW2HVgm1iQF41Z7uVzSanoNtKSZ3wbjULNhQ1G7skneZz1w6GrZ62f5tYQRGqWDojEPk5bxAvcZ5AZz",
  "key5": "5YKYS9E6scFUafnD5iJvTTT8bPmvMCiBixKtsCrUpV5Fzz6T1G2P67tRFeuezyNV5WoAVA5ZgRnVxA7cHb6sgvC9",
  "key6": "4TMNhU9y8oLvCar68tym9WQkHpGLWWz6ZDuBA9UsRCRktyP1EvV3H19sDriSVZMDYfc8qZHqsxQWys3XZwAzsGqb",
  "key7": "322F7tv4UXRZuxMvwfMG6Z9T9yPZWX2W7dFpSpPKnwpFBuzbJ4HSSBuwnCe9JgS31b81ZyMaeFYKUhrHN5eHu645",
  "key8": "67FeypMqJEKFe1GBk2ZzJLCLHw4R5aNmuteDFcHsLQamHNy1hRtpc6jYWuTvDTsUaPY3UuTnJDbDwDhX4fiDUS45",
  "key9": "LLGPYV2Jui4rnDm3rTfrJgrRip6fSs55hTcpBVjYwYvGiJnV7jgU1hmb2ZJTGyjirbCA3sSeHThXZUGXyGRuLpa",
  "key10": "4E46UvndRUWzvfPMzSNyB2YVSpHU454Z6Z79z7tYfTtYBzLZAmTwjV4vLg1SnJv8EMviDMEbacgADarSpse9XiE2",
  "key11": "2gYPd6e1k2zg5QudSzm5ESFVyzgpKbruPSS7L2gFgMmM69moZsya7eNaBNrMqV18fHH32TRbRh7QejkXkFsdxnXp",
  "key12": "4a74x9uRwTFvYJHBoXMprFGXqgwZuMr4gf8XWVAoQTsu2PzNDjweJfJ9Fn5iA5c6DyjBu2QGznrMdCvhCdtqqF2X",
  "key13": "3v2JnsUzkJvY4iHn18zQsXssqvRmupjzhXiSr6xs5GqZsTjAQXkUbUfBTr9zRygLpG2suM7sYxBaYV8wdbXd2x8a",
  "key14": "4dQ1E7qcgoaNjUVXdtLexz1hPEe99BuJRqRvpyKeLF3LHD7dyhdzD851ZpMZbNfGJNp8Q5Fy2aLFyDhsrwhLbDxw",
  "key15": "21AGNHfAd4wCpFiCZ7xb3W94Bj1irkUCCnYXeGLae7T5kzs84rtzcTwgQU2w36238xdmHNA3mzn8HHocMGsj1ZEL",
  "key16": "4yZ9HYGAcNczg75dPV2qS9XzvVocSwT67qgXqQR2CMCfSV5gzhnkkazpevUCwAnbj99pVuY74iJrXFDmgM6BdwzN",
  "key17": "2GiqjNymfyUqXxG4NJqYKsiPZYNvWVr1zKi1tWLPxBHRB74RT26RTCE1DmjhiQcidatUWjAUBwkgbmynUChouqj6",
  "key18": "4XLA3NioUyU4dzZxocjuBJhpFFnE89uRtZYPqve4UaicCABxBwTtJZ6qNfxioyQ9ejsaVTNjPmiDwPPVCW4mpWsS",
  "key19": "35395otaVwMvKsc3GURv5BrhurvjgZigJxMfr19VNNZbDYFGgdoaM4opkz8bMAymLeFwYic4xuCqw8mPwVZW1rTE",
  "key20": "3c48ivvSB2ijGcEqXY3NoefYj6QTmLfqdPr3DaNWkBrgwJRE8Z8UzS6ngbwShxoy2y6tHSJZorBVsWkCru4dQBLG",
  "key21": "o6QcwK9PCeTKV1R3HdeSoWb8Q4PhZQiwEN2yuD8CNWoRepG4AeEG41PLVmRDRbqJUMMxU7Bn4HpvKqzuFLsVEtt",
  "key22": "5PEjHtBX9bpBByzK8NfGx4zVwaNArdCWXzrx6UBBK9uXRxF1FeuLt9B1uEvnSoZZsnhhJuFJvus5wCxTkWC9h4bB",
  "key23": "5CSec5K5LGAhdumdmJGSZViDTUcABfUQarNSD1XBiMYzZUff6zkFcr99QJrJtHn2ec23vLkZPNvZhX1YHzNegkgr",
  "key24": "4DbMPDgPzbopgTmnzxjhGXjomuNtSTzFy24KV4kZPz1yZ1nXai5BsTNnmHPxRhdg8Nun4Qmt8ASPzhRXB9AyCZYR",
  "key25": "49kzyXoaHSopSFw3Q2EypPiqLYWRtWYEG24LMtxzvks9Bb1TYZC3om7J7tPq1M9dgRVwfYf2cwbZ217NsNyBLubC",
  "key26": "3r8dAB3Pda6qD3on6xiaei3JyDJCMFRMjn6dzsPGP2N3VwGDfuixr4uWragPQDnoYqnbzmXUDhAvVd6KVsFYw6hm",
  "key27": "2ZVA1ZSJ9brpuDGRnjKSet2xsQCFuoreTU3b7UjQGZvGXYXno7WEgLcsLmg3CG8LJqBFUQviTWWH928E13dtK9T7",
  "key28": "mYdmWZAm22teWMDqgMUwBFNcS7i9wkMxrfPifMfM4xCgdfmAX418rLbCe9dVxszNknc4JAEmWCP1oNi9ZWzZH8j",
  "key29": "3hznZ9GRqzJD9jNgDLkqoB6742Gq1cKrEysMrs5dKhspAv7non9rNrxNuVNE9rAkC2ZW6D2unnGjqMQtXVDpaj1p",
  "key30": "kQusq5sMud5dvsNJyXWVV7wtod9hN3Ztt6vMg7CaFyonQEndKduxHEtWLiibLV4dg3AoyLBsPdcVBeUVvbbo5Yx",
  "key31": "4aNp4jQm1q86LBp3EG7JDkAtYe28n5kb3cDUFXraMMrRe13E9ZVHAFxPtEePZU6GuDEeQAvV1Q3YP8KjV4SWiSSx",
  "key32": "4iqA4etpuhZDJnuj2iZdMmAMmYpRHcZasroQD5aigWi3CG8DghhLvu8tqPfjQtGjWx3K1bbGvBSmFXBsgkLmnTnm",
  "key33": "4VAt7VnEvnzwnjQzDPDubncbwTXrGd1iBXQne9s38BSbGjM925MVL6DKRn87Wi6n9ov394todVLptdDby7WMHyqp",
  "key34": "2CBJvX5chJWd2zugAC8pBEH1KmBDVoEf7qJY7etTvm5W2ukfUBxHDoqXFvsB3foNWLc5hCw8hCMW5gL2QygMkKya",
  "key35": "5Am8js1SSGBsJZuq4vdoqrgMvEhEqo3kRZdPWfxbRFySgkF31aQZfdcAsyA7MApiniyfWnx8RksRMjENa9Fqvu7y",
  "key36": "2UYYzZc5nEDyeXKBMhNyL2pssr8yECBbiEqRgWfXoDofvkSk3XZg43BJxhanHMSt7tseRwj37xohtX8BkYZahLV7",
  "key37": "3eW5X3RV21DpcH31kCYTKWRPkTHWXJyKUBVQ3D3889ygLw2BjoDoDqEbRE3tX7xPx1sFuXeqr1zZqq6SK6fLoJub",
  "key38": "5e9tiNG4yH1GfiNRowhsXnKTcMhbiwe1giaoa3SDNqtQqfRcGaQBu3515JcMt7fdMS15h1vRHNAiui1SKkcoSxUg",
  "key39": "53bcEHjtUoaGYhv8wcot2cdyL2u8mDbFpKpKPbPuHL6jz7jwdUCzKvGnCWUiEGWtMmkfdQqUNWXUWdpFkDQR8pRu",
  "key40": "5EfDZcsGgeDGvgW94TRA3biMjVr8irnDCzvAT3xA4yMkoQtaCmit84xCGJN35fuDHYD9wDfv4WmNVGuZQobBxDWE",
  "key41": "4jzPA8SSWGLBcFtUivawaVkxE2cbF1SbSUVo7R9yo1563RVyBJJ9ryaJLQbMCCbGurGGvRDyjUkFHT6tU7wLts3b",
  "key42": "59NKTTgK3GT6dztCKsEMtb8dKsorqj9VXyxwAQ2QVav4X8iVvKq4gqXTqkGEzySBRvGN4crArB87HAqd7mqizcBZ",
  "key43": "2wM4XpQVoRjUbP8VLhukjQ8eJKoFxoVQvespGQeQtU3xjJi2X8RSTUnswXub4dGNc2rb5jYAzuoZSudjZ4jLsKXh",
  "key44": "2vW2PQdXUdUBPGKm2tBnnVLgsY6MiN5Kc3ZWa268a1coV7PsgY8fxkECxzjWRUwhjVQ9rAowV6gYW45vAc8TukJ4",
  "key45": "2fhL3iEEUSVEQqSTRVKGqEpCvpSzsjW5kyM7Dk3Luk6vUhS3aMcbuYrmeDZHvJJLiawpw5krxbXhAFeiLiuhFRfP",
  "key46": "P2iQYt8XP86Jv3CPW6d2wy8mVRVA4yb3hHC8xpw42A5yXHdjCvfb4CBRKBhy3yMg3a9zvZgjCKdZ4t59oiHTwA5",
  "key47": "3UuNpgFuqZhghkn1SH16yoybMXgMEpNB9wNkS1kVEn3gfohEKgQRcsRVrgDoJzqMy85J4o8qh4XxPhDFa9rrs3av",
  "key48": "RwSXeVRCDvHCXrZ1TJhP5erF3PunMbSvyaersUxQFGvhgevNG8DXjSkt2hvmQk3fvEkhEVw7xBYcADc9T44DwsF",
  "key49": "2AHXJ2X6627uCpDdbvmFT4gVzs8MArDAVUYYqZeinMzfqLXWGLQb29RbReK2ARj3o32qFJqiBMawnRzNMgRn874R"
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
