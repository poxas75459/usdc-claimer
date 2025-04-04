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
    "3d216FRLRnHFUnhHdHFpGLHazRj3qEs6AeBFoBFSwxYnkv3mCKCH6yz8VA3sYfQsL8SDR9D3cnv6sb9ukoSwVV4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56qonxSW5FzHoPwcDJGdkobWQgXLjB8pzCp2NRrf8DVxHjThMaX3PKiT98WJNwNnrxzA1raFDar4MbwAkP7wkz4o",
  "key1": "5wzrnWqjUwfXsma85z2i8eBXLbFtBhESUTuCzhf6ezykhFf3xtSHPGpuW7S7QDxZL7RHTAwp8YYEEnrH6g1KSF1V",
  "key2": "iG7mDnnhWtzFcnjtTwmhSbXm9xRoCULziazm4npyVGanhLKk8whfSTBfNaJZP8SqaWdCz5s3LzBQrSJNxJuMeYb",
  "key3": "4nGzrhYqNe426oPNeyEG7r5Y9MMWYMsPauZxewoyZKPUALm2SBYCMnCXh3gFoy9bf3wKkyRxwiwcsFQJR8PoW1P4",
  "key4": "383fQ1q5tmz8Vfn5re4qnwgk5esuiCnbfRmTpeXqMxCKeX8kBG1xKYu1oLhHU9HE7FcZJYS4ConPvQtCTdUduU4W",
  "key5": "3fPPamuwgA4gfCPfjQP56GgJ7RyNmZFntm2BbFthgAaRxbsQnDALnaooHVgiP3pmSQRKysK9uXrc92MM91yfFENe",
  "key6": "34RA4V4JUMPRbb2FEW6fqocXfcvbjmwkvVpG7nKFgq6fQe4EEsKesKy69v1r2iC64sYnksAWPxUM3cncNh7WrCKx",
  "key7": "46qdW4skxRsGFMVruYHa6CSLCLT2218pdGWSQ43SgCEN779ktn8bC65MsaU9N2bsVdNNWC4CgUZ7H83BKHkeBP4j",
  "key8": "2jaSx3N53QEzWfqs2x8cXveMae8CcPGqQ3efzJSjGQ9AAexW9aTzoLDoDpca4fEw2TBJPX3TpLfxxSKtwkLatKMp",
  "key9": "4u1KeZ14QLggFFiY8zJMoYAyJYBikHF4Jygsm3f596uE5vGCisbmDCuWv3RCiDHjvqr18pXqFFaSrGVc6g3bByiF",
  "key10": "2qxdPHtbSRLKckcHF6cPZW6NiAzbQm8cwYVyyJ5gFeW9DSQE3ZFE1kwj7KbXXBjtMdu9kGWHqiAvUnu7Ad6LgiT",
  "key11": "655vkcNL7AdmmagHdqYMz8oXaDRbtgLrjE1kdTpPhv7KRSUxqvjfCurHyJZPNHxnpEqo9fDcT31oiosueLqiAh6u",
  "key12": "47EQ3EY8cH8KH2g6FARq29sTxTE6b6VzntVUXSJAekHTTdxdgYZjwVzgKkicBTDqRXeN6XtXrT2c2FhiQoi6LRJ1",
  "key13": "4NBW79iG2JJTpoYktrzjdfUow1rfwqbw96HLrMusj795Htu7YGkkZoXtLczCuLcFzasxaFRaLMccS43bLLSBHBfm",
  "key14": "eYU8sprRLRBVhvhbVm9eVHUB3nkvcnQ8TZLjHjDXwQPRRaeRZrdtWLLwbArwdGq6tu8iiXeQD8J7dBj4EpPvErk",
  "key15": "SkkbWoZkCRQRTjx5BuAgwU2pcnJyYuKsDVDHJ8HFqYYF22hCkugm4GWGwAPhfGLc6auFYBUpy5Ye6uXDagRep7A",
  "key16": "3DzcJkSu6Sa4X6Gqkfent6fa9D3r6UFcp9JUW8y87ec5RRajfqL2h4pPestKJ3oDReTVEEXZWA4T5rgo2vnYnJmy",
  "key17": "4mcVqTyYhj4Xfb7cXV1SqemHqzTBUCYuMktsw1Qv4jaTcvgXmv416MUR5bJnQKYUBozAVXKpE5d2iMHyAfSUJhtx",
  "key18": "S4iXgZw6oey2WLn26vm5pJzK1dNKAwX26eiD9HwGGuRU6UKwgP1yHxiyzDpQdy8vm7mPoAYKqfjgax8AYvxm5q6",
  "key19": "55ovAjAynW9q5eDR4WbN3Yjq4BJe8hpgShxkdCvfQJzBog2NDfVmykNkNFTnsFnmh7QpCP6Vb6bXTWDjjonTvnTW",
  "key20": "4GjkkSXTfQ4VVvDBWwupeW8fJW9DQVopujVMgxeTvSfnRgbZZHcqn2hcs9LzDmHPH9NYBteSNA9aN9yF5kTY4occ",
  "key21": "4TgfkbCMEov5Qn7cjxu7EZTpKs6sW5svQSthJytegzZybPLv7zXJu8Gu5Ftz8XuY5m8yvQ53hJN4GeQz68XfgV4j",
  "key22": "48v6SiehwbXL7c5DzwVksLKQoQF3D553E1ExKqFasfULyjGucF747c2tF77YvvKjWV6g2iTgbURVwEw4o8W5Ajge",
  "key23": "4KTWhuY9Js9v2cQNPZtQAQrdpWNdMZ1Yzgeef1s5du8JzRu46cRsBuNMcmDcK36WuNtcgdU2tgLT2ZYDUd2ZXBBb",
  "key24": "5sP9ZZmiS6SYL3DU6Ye9nk6z8DX4QDoz64ew2rwHJUwg9XZ1SEaMGekmYAac7R46fQVWdvRRGMeWPW8CFNrFmfWu",
  "key25": "JpHoAJex9Y2k99cAWSEbGXuJTX6yQh1QpYmdVanFhoS7E1McGE3s8DSSWPqNp7qsbp2ynEjsM7T56nCC6o2GkmC",
  "key26": "3t2c4RwQk7pq22zxBSsakVbPaBvNrhCUYj6N5G2XanAM36eanKVBbs9urvYeHTLT5f9Zp8Qy2YgrwvwyuUAvTL6y",
  "key27": "2BhUr9HhWqbT7Fj3J47kwSPGraLNqGGMxgV4TTt3Z41F1gP8xJmd6wVfnKfn3kn3XWbdgiZmxxRm3HZqFgJiziME",
  "key28": "2WvKM3iLDZyyttEVpZYueQBawTWwD2Mys3824FGYPE5o93XspYaWDE5a3A7e8LR2eT1cqNgnSYRUe1623EwQYVFo",
  "key29": "5PtRm46yMu51xwkCXp5Dk7DWLY6JuswZ1eWVANsWLNAJz47UyCkT1WHZ7282wQ55ZVrpnsWCJeH7ZB3KRJAHyJGr",
  "key30": "ddJ21zgpa6KkYZL2Vy4EwL6DbcXwZHKcCS2wqyimgkj9BNqsC1pvfe8aUd1BzgBG1AUjrn85zqncKNKDGBiD4Hb",
  "key31": "4gqn11yVwKbd4NQUtAD3c1k22EUzHMaPAio1XLUDnDZLwiYVmGDW8DHxXbgBnRgUVLnsKsFCmXMBipaWPkBAKX41",
  "key32": "3ejLZXEAyBM9gTDo3m3FWJT4NydJ4bY9tdV4jcDpEwwUmzNRrtYKEgJ3LGyBummdguJDwzvJ1nymx24uDkAJc3Q",
  "key33": "5xLJiePue2WQykmJUduGQSP8Vvruo4JQhqTSK5w44NxF7D1MyyfLcnHgKACafB5vGCSRhmvHEWZQ2vMBXqFamFAa",
  "key34": "2ETXambGV4dzjsAMoWEwVJfTQp68bd8J1NXacKfTeG1XccQXjB7tcZQQed61Npy1UxCHNQGFWjLMU1tS4BWHXxJ2",
  "key35": "tzRhDSsgMAPihpDMr4fwAWd75sQsRMBhw3wcuRqw3TW5Niret9F8neLJ6FxERSJ7bAkWZT23RHNiT8u4mLBw5jj",
  "key36": "qhyAsJ95EuDmoYbKsHRhFrfX1ohMKtkhJVmvYrQhN2X2X3sVALyKhwfjcp1dtjFFpotN4PfigR6MkAuTG7UQC79",
  "key37": "4AmpbT6zSGtW4ofEJK2K1pwYT1ajgBriSFr6bgnV3kZ8DSUVb12qNgpr8npFEfjdhyZhfXtxCd6KanDESKHy9UGY",
  "key38": "2WJztrUxUpDZSiLgsZWp5nbY9SvrzywL5P9ee8jdg1Wymb7G1msgsbZ52nswZp2XzQS7MBU5bAW74sc5amt3cGKq",
  "key39": "4328oVQTbUxBDEhXvnWzf1ZmrtpAAAetpgHSUfN2XpnbHxbcXwBun1zKeUMQFF8FpbAiWpRx7Xfe5rnWt5LDET6s",
  "key40": "4yE2GojPJHeZJV5M8x9KzzuiEib4xziPjJRSwXRq9HaLGCHwkWZv7UxsMNxGAWXYBCTg6MewM1Ty3o6FbjzhVaPs",
  "key41": "pdNY9CcS27KewRZAUuWVRmh16wDdef6rhc1mVeyHTTWpBzS4Wu4x8nm7u28XRKA3CAma33jyee6UjUjV7xfofoi",
  "key42": "5YoMEoRyAXoBWcaYsLRfg1aeEmi9g3Lmamut8pyCjh5gaXWt8Kk7ej7SDcrHjbmZJwyXuJAQpSEX3vcYHxDGPXtd",
  "key43": "32vMLqZ6LyWx4AVQ7B7QkioYWsRszwWSBbXoAFRvJpGTiTMHY9jDBzu7ig8dvv8BEzfVDyRCeRry5APTSFNe7dea",
  "key44": "45eDCrnUBJp54bDRR84TB4FQquvWV3Ch3fpmg6egKDekDjDVieggN1hQQPdTknp1H2S7A4wSFHYBjMkuVeU6g8wN",
  "key45": "4vY19gE1qdzTdm49PFMYXd59vNKVPwzC3E3C9EDEAnK2gQbk7rWSHm7AbEHb1GWJPJaQrKVHJmKkc6UmYrfUFbgd",
  "key46": "YAciLUw8YmpEYqFA7p8wAy8Ew3gf78SdA7CT5vCEbwvLrVYHN9VEL9JAsUDQRUUmR8uxaw9aYQUvZttUmUr9848",
  "key47": "4rfKEdtAADr4xCrnQxUMQ1gjEJUGnDFNZhNy7wTa5SWkREH5BfFoZgxnbe2NRLT8UjxvcY2QrT6Kx884XRRxzeRw",
  "key48": "3jpcKYdJs5two1VTXR9Pn62MRi2LgZSqPDMRtu8fr9YdYm3gqpZ2ydD1yahmLEs4beyG8Jn4tAB5dM6ik4Z5RwZi"
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
