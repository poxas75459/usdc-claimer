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
    "5eaqtgEV4PusMUTxUUuigWB1QeLDbpmbdSQBMy2gM19swA2D84xbC53HAyUTJEgzpxygMGRjwKKzUmAR2vjAT9DN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KkpTTGsGYp6FCRuHuxWEJYNNsWRfXa9r5i18bJnF7MeS3sqkCLYkQAwJSimTv8R5ENh1WbJ3bpjgQaYA14eTAHj",
  "key1": "4YQSvSVQyp2CdE3WvZBQFydMBpfuL9c2XyVeKvx9c1bBPVfC9Fv7ZnYAHSNuL8C7rwxbqfga9RzZ5X1J6fdpjovX",
  "key2": "44wHbCBvQ3ZRoUXDE6if54vmDa4452Gmj8pvWtA4YEoaq8yFan4NBDcYQgV5oThz6of8cjnymax9WKz8XCyGoPRd",
  "key3": "4F4FoiZJfGu9vuUJnMRzkbskUS3MrHVaJhm6kxu7c79poeDGtuxrorF3bP3xMXgNxhg1J2vxWTVxdM8PxwVijgqJ",
  "key4": "53hLjVFk3eMxHnrjNkcjtF9sHuUiFfdkQebSUQksXU1WqgVjHYng7qAxzterhnwoDztU8yRo5V9KzcrFkS1x2BhH",
  "key5": "249ZktZ5izcdyzsL8X6U6sQVd79TvK5Hfq8VJ7zCwm2JgEvGi2HjBqZRy9bgZ1UZa5G7f9Gdt8RGvT4Ba97xKS4h",
  "key6": "3iJyRg9DbnxjuDRtfbWagWRyscKpPmbb8MWwcpia5nC9JnQ6pDHYJVfAA6eVGRufrZjBhZqDGdgbJ1JLDZWJuZ7a",
  "key7": "5NvH8ssr95idwNQVn6qhxKo9aC2CoeCcpJL8GhihoC5PXb9HmmpxkBJQXP81USZsph5hrhMXGFrLpiyhWZbW2yi6",
  "key8": "5Ur4q2x6ZPfVYEwcatafbLcs2BLUpAg9we3VXNVzAAaR13m31FBoSgDorTsZQFX6JFXkg5W5SuuA2mk8hLnP4tBA",
  "key9": "2AQ1Bjjdc3rnKNhV3NhnfZuhr1C92aWcvBSSKfFpEqtDWyoTBPH4D1nFgNcXpi6GMqKvhfWTBv9xWUuhBoMAZXg3",
  "key10": "4CHLSsPuNfitYDB5cqBr9gPnhxFzg5uxHBKt7KEtuupxRSWNUXEVjNh7DReLm9jegeMzWmEzRCFbhgJREJUNzY51",
  "key11": "5YYKXyYre9eE7otnUV742aDaKsXhPr21X57ZHGotsZTqDFLJuQ7QLU8qqCLmDZWNx24zZLkKQzwQ4FYJMa7ZY4zo",
  "key12": "58mWchD2T5Rm6DorfYVEzYZc57GJ8Hjy629ZJafGFcVaPyxzNczJ9pf4T6qmaKATWPm2um1t1ms34ruKuq38e5da",
  "key13": "iiHpvNoo38NUh9jYbFwehaG7JmRJDzg2pfrqGW88Cdwbxh3LyobfmLxfhBcaGaByaqVxXeAxWP151R33mjfQzTm",
  "key14": "3H2jfuReoZ6oziJnhLnRNdBw1oBhnTvVXyKCmY1JLEvq1xY4ufkAjCsajtbcQAKZQNKXcD8ajgnoCTCQQXpCnDFg",
  "key15": "iyfZvHz3g658ShSSK7ewbVEDvwnhxTsasVKwqoA6zqYxv9SXbSsAR5gnucUcaGyUeirnvmz4AEZJH6EGuP4SCoJ",
  "key16": "3ojfKj8o9ApB6T7xMvUnbNwBjSwC6LMF3orhVosr8qa6iXure1nHUVNySTzhPeoReSk8YzN1bFCciFax86dXv8Em",
  "key17": "5RMYEHG53uddVNoawvJ7PqN6eVQTAGGHr5aonMHBJdVk3fi13Bcj5Ti5LrTd1yCqbGQZe8cLKDoQGh5vRmVrVGxR",
  "key18": "252qJeLjL98ge38fzx443cNfVcyhmQDpB7YRJTjfhsmX4tsnbvrDbobaLACQhX8LquPBtpwM3TWKp7QyLo2mH2Jt",
  "key19": "odJYeKuJfHmkpn84snjnJTcdpj1ZZv1HuepbBC6ixaXUF3NMLBSKvkt96Utu43G8iLiZcagZ7y73SMmncgfVpaz",
  "key20": "2syfEV6ZtSxsMYYA7XyHPw38Myi8RDGHYAaeBYPEcKyjcezGQa5RR31gnRzMVSwzxVZfSnGKPg1WG3p7Q2bMFHdV",
  "key21": "2brgWSVfB6mqVUYSm9kBkp4tcD3GjpEvY1f1VFEdUCgxAE3Lt12U81c9iL343rJjGixoUTmzmNSuJuKRDFJKi1Yx",
  "key22": "4iFDzfHzCk1KHm86khwJuP1qYEfSQtozJn75D3urPRHKMesEZnb4MEjaSDRV3YsMmGDM7SEKfFvePftis7foBpzw",
  "key23": "3XQCTnTV7MzCZTg4xtVbAuv4z4vTHp9qpEcvFw4bzC9Cp4cnyXPwujrvnpVgL7jWvN4kZXAwkYHLF9pxgxaDsp94",
  "key24": "3eoAgLJCR3cP6E1h6QR5eVpvqNPGtUXcFizu7i4WWLGghj2SrYhjdq5ssSAJErufsDmgUf1q4hkbJ1VtzACNVgDh",
  "key25": "3ZVSq7hdKTVLRhfZeDs9d8K2ARPWrafBTco83KbuYEVCaVxhUfBMPqQYmbwZGqXBmnXMQVTeVqhpNcBQi8pBv7SJ",
  "key26": "29PZGkG3S4NFwKRaqfjpanRgz17eczcKZRy2YzBANXJGEUp3TZXDXrwPTLjtxxzn6fAo3erMdy6VY8RWftuvqYQs",
  "key27": "6uinFaeToFtPofadzdfzCXqHsCizrCi1kNzCvvUEVicpsor5En8U9Q8rCrCxsDYp2cQcxTJu8KMgi9JSrRBQ6a8",
  "key28": "2Vd77kVJ8h2tNQ3nMksoQnWiMzaePqbpenxocZduyvhZ6v1t437G779YiMDBqMnRTXMrQFygcgVBTiHx1Y5t725a",
  "key29": "nCYUmzifhVT74Qq2MN366JiRotJQKXML37yPpWFwt5CpAkjCu8jQau6ujpKfeNrjTNQ3sECQNku5xi4phtcPZ46",
  "key30": "244Mdwkhe9haJMrK4Snv7ztwCJWxZSM5A4wND19KPygqiPjzVjpyu5pAH4ynA639Vi96QtmvH9Wm7hE2e7h4WBn6",
  "key31": "4eBszk7oneWxGEQhTQB4hwH9idi6kuHJzeNPz9q519oepjNe23U41BgUXbcaMXAoW1WNZRz81R5j8fxropcb9Taf",
  "key32": "5RqTgvQkzwwibShvNDmwhXuobTtQeTyfjhZ7ru8JYZNkyLGsUpLTA5wv7cm6F23TzqqjS1kmmadKmwm4cjn6ALxV",
  "key33": "kJzXuDbqHyfJiHRfB4Sk56GH42jh5Jw3ehUZ6HRDN6y3GmBsJ8gnA1BqSJjUxXYGZaQvfaE8fRkEF1YCd5CKyMA",
  "key34": "27c1AXATaYCdkvuZJNsyxWEMQNMvxzd9pKGi2KyoUGEc1F2CnvHwxJbzUdUP1vAFBNug6Nf5YsnB3dqsX4enLjWn",
  "key35": "4qcz1ijoFJiKnu1d8pmUGkSTL5mpcauqtG648fD74Q6Zf8VPfYaXDfviuw5kcs3Hivn9DWVQGDqABQvv4apCtT91",
  "key36": "3DGvwUKZ5GF2fHDxTn591y1hhJ3RPgUWvxfw1ngtFhjkobqbKkagFiq5PFiyGaKdfC9M3iko3QMa7mKsue35kZRU",
  "key37": "31cx4EvdhmMEuQnw3SD74cbbjHVe3aynLaRkbCm2GHE6xan3wZAcRbTAyQhKY2cn1br7VcGdCdtaLcVH22iUjAgm",
  "key38": "3xJQqgaHigpg7RGxJebD4nnrTqoYhrgnCjM5kTv2g3JTRX1tzQg4s2nSBWaLnMKsEUbVz6Ed8eNhJAptGu4J1Uq",
  "key39": "4aw7R2zdS3BQ3KKLrfJHzpKxkNo96Q6KHBnRVHWmzeL3uZxiJCVGytosyG3AgAjycShfLXwTUv7AZN189DC2zYYE",
  "key40": "2Ri1sqv5ZtoBiopQv95swBgp51gQxHHxknCy4YHEuaGq53wHW3iywRcaqMMQ4kUByCettNAz7kkqjggARJkz1eP9",
  "key41": "2JmyVHAcRRsMv8hjn2nGH8DBm6dEwT7cRsKKBQMxjDwhPK1WmPFtbi6NbCkFH4VtjqK9EwdB5sBXsUoJ83s39P6F",
  "key42": "4JGk87WvXWf8ECyPfqcR5tMrCQiEGFtpqcP6VEuWTvjDdgM3MG8gZTtdXjQHdVspsbE87bh423opxhx2a1CZ4Hdw",
  "key43": "3cqPJGxQo766XKvetVCbjg7xH8xosiUaEd8M6RaoMprCEkieGsvnjm3hJSu5vVfYzScRnfmhp1y3FBdJQYEJH4M3",
  "key44": "2xEFoiTksV6dvE2AHqAYhwCCF84t7TLCZq3uoy8ogcY8jU3kLC8ASfxV6AJbUzYFUvMBoYrCMkTKChf9DUeQ1nWS",
  "key45": "5xtFhzyaQRUbz98vxRWxcoqJaxHjxdjbjq3wHVaZTaXd5DcpLSxn1hYvJkfEDChvyS85WkUC4KwSKRHHBvLKrJwG",
  "key46": "3ecwYsfPwzY9ZbQXx4Y5QWTMmxGdSTJVDwB8ocTUec5GGD8R1CUKegQkFe7BXf9SLdeio4P148Uuhcuus2s5F5of"
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
