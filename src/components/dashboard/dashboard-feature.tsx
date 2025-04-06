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
    "5ykpt81yECMuiFYE2mcGoXDmo3fWnEH1hs5Qkm8mqeJgaqC4kRDWB2DZ9DtiDDmWYj61iAoUv9wsGssY3onNPeoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rReESMfQaLjR3dK7WP1UccX64Pfxr26Ardt8zxsFa1uYY8tvXxwyFGKJd2ykY1ugso8XxzdnuBPH72TmpybLEQw",
  "key1": "2Z59yEf1mK3UHdXkcbahSNqKHmQX4vyGaYZ8hehS7t4tnNWQBTMmjwgxRFPRTZaXFMJMpvxZTHaVQHbM6xisZh1j",
  "key2": "3sSabzZydqXq5XCdJiz3BecvxjyF9evnsPoRj2x4javTdGTxp3EHUqmRdQHDjBx5JK4P22ychnQx79kQmzkcQVfk",
  "key3": "5pfvEiBLinU4Pz2UW1YoekQXvUNeS3WdCGViPaaATqR6hbErLqb9ux3ge3vFTi65ew9ZWVLyZRY56TmfaGkeWGSw",
  "key4": "2m8SEhv2CF45fGi6iEJc68PwoPymWy3h7paT8AjJsENeiH4n4hsFUs5PaguRgAmdhYs6up3ctf6Tjt3fHPFvEuN4",
  "key5": "iB2wj2sn1ZXUup5EfgrCj3jX4v7op548C4pgkS7hKPBGiPwK7LdTBmMB2fBCPoGx66ACbNXsmRvzZCEhBdw4cnR",
  "key6": "2BopfCRKjC6dRqrhprmwoThCueure7Na7CdUNBz5hywqXi66ZQFvtQbfxBrQGxgXyAKDDtHLKLXf6NNjyb3KxbYf",
  "key7": "61RB2icCTPaLKhfQfs6zSu5JrQ8bPF4Em3pSzqWt9smESm6b9FKXi1tYGxSuep5KzwkjDdg2XKiCoBbKf7o9UGPN",
  "key8": "5MaMGqoZjoSsTs8EWedTM8kDXA9un7y8uab1TnZ13A59GxBu974V2DReKDnDvzUxUR9kqKRqR4bzRjkxDFyEvgN1",
  "key9": "4djQgNRDVrKjyxqueALLG8f69b743vCYCL9HnTcbC7HpN3gdxGnyJaXATz3NzTrTwkHbSUqHQArpwF6iEvSq3pW1",
  "key10": "5YX4bAPyMSK3eAosWCqfkMbca3KDz6XaHFEMRFLWbsG3MvfmzPFGHFQKJ9sEDoKjnW7L1bbbNxF7Td9zEnAAmr2E",
  "key11": "56ozre3nv9LTuqrz195ZHf2x8EjMC1eLepvPkLvnHfF3BzDvk3eY9fccNAAFpBjxGTDSCj3Jx1WVPfDVxAUYFq1X",
  "key12": "2DwCw5L3pAkNtX5Zpa6LmQoGBPr2YAELgkiWeDLKDwDgrwQStj3nPRMQ4HbvAm1B1k7cczoxJBo2sCZ5D7pgRKee",
  "key13": "4YuePG7NaURWNQ2A7a38TrBFoNFTKvCkiBqdhcEMwmixQpH6M1utrhayjeupdyuMHvNp5p1qrJXJPYNAsjn95KSv",
  "key14": "3rnpbpmcNoXDSDNu8BjM2UbnzGjjzxiFSzdSQYPMN3Ndgh8UvspSSH81BThT92t5a3ZeRZA6oWPyqHKbAPQz9T31",
  "key15": "4Vi6btwvKTwaMEambwq2mk3hpMHJrsJ6B6fSKCNib18G2xecvnTgnVR953SFPYbfzZbjBqsRdhArMh54b1d8qT7E",
  "key16": "3PED4TvFBsAuepm6F4G6H7tURf4vNb98pMJk4HYmm1K24xZbwGsfGbfZbYq5DvRLVJjuks9gbnCDM8DwegnMS8Ch",
  "key17": "4LoJHqTCmfebPXNSsv5Qhfm3cYSrkT6Vu4gLSxgo4DfQ1cYm7onGSXhjmaHXVyaSTih8ToCMk6YMmPzeztLyUSFq",
  "key18": "5wTG2c8p2WGm3wfEqaqidesSmeGTVbDuECryUioxZjDExUPMzFs2wK4UeWVywJ18NzjgQQ4K7sWWFsuKsuKFZMra",
  "key19": "5qawemcATsbEbxRqXx73ooGw5LzUL5BhVcpPHUbXkyEd2TCpReiLAqpLtkP9VUQcAZiFbVp9645hJR7Nb3nohNwu",
  "key20": "3zY4g4SepUW67hBbQ73t2E7K3nazttquhXdkrz6iy9RzQAcNqK5dxUDGp8FSLJ721cpaFknKKiMRDfacgNxKyFeB",
  "key21": "5knkkHmHYK7P4kjcPRPXWp4Fy3qn3XXNbp3hkTfLeKkHswGubs17cAWbXSgAguz4GG42Mios6u8GEP6ZyrSq3fsd",
  "key22": "46v2HjssXbS7CZ66jtC9mckD6LTvS9oeDzqyHuABXjdW9cr898fjxpCt1mZxkoKipCgVxvmp3yoWRdFBMoLnfuSf",
  "key23": "3S5J1pot1kFnywbHrvNUUGDoFa1gEMk8TFmKoEbRiikicu5qbThiu9dqDnsPnsZ7YxP5wCRwd6Lb7VG54EmtybmP",
  "key24": "gXQy7h8LeG6wx1Hh7YfM9bpGubNDk71cJSM87BwFciHt1JiGYyLmaxPnNLbLu6foLFjyQcUShwpYV6i3xZ6CnUn",
  "key25": "451KUjfjdeBEjcgUJPxzBvDCFtHK6q3NwdMW7nk8vu3iD2FTh64NEcYXzYN49bPm5itW8t5dWHvB8t8RZQg6Wzpd",
  "key26": "3KrFiQth6PbmkXCzKVrrrZc6NqufPgFjcv5DzT1Eov2G8usBMkoRmZbugvm7ozPcY4g7W8RfgbrDpGARSwK1DJf1",
  "key27": "2esZkWtoiCqLRVUTMAU4SP8Bv55YPVRFmbrzs2tdz8AvUwnRoBCfijQuPGSZdLKs5YfPtVjUU3ib58RZ7Sp8jDM3",
  "key28": "51rT8QPTDxq4yRXvDXXqkqeNdJD5QCXxzLoN61Yhh9tYZDVJUMcx2rzZwSYP69Ptfs1jrkAvgjeZXqZ7swKj7DXE",
  "key29": "4bo3gYrCDQJxtiY2s1TjaVNDDgdEMQVr52Pp8DGi5g6JtG8aP2rfRCq4Jq1evw8kX5p4JZXnBZbRgzBMh7TmWyhH",
  "key30": "5mQzZTDEHaVRU7u3qbzDgnDkn92wx82STynK8z3VRo3HHHt6TyP8z5GxyaBSEaSVYeixwvCZbHD6AsqbQ4jBECQ7",
  "key31": "X5CDZbk88GQVRdeBaL4CDUAd2LMPSJ4EJvF3xm4gUXSxmCmo3AVD8MBEFZYEzmkgLYjTa6dXDKiypyZovsGVHqr",
  "key32": "2ZYysJeZmXsY57DVFXgHi1Zth2KKPECqcpFjg1HEP11C4bQi4B5JQr2p4sxypGxhqiEc4Uo13JJEp95se1GF7Mvi",
  "key33": "3Z9dc8mVdEb4zFQcakLhXErmxw2zUSBhREFRctAAtwC3oeJuUT4zCtBEQzh26jA38HzRhErPCBeQVjvye8PXeCz4",
  "key34": "3A56Y6qqdPUQstt8MDFgCVP5516UYvs9ERwnJBWPTJTSLdqnwYkU93kdaFqF8DqkUvrE2D9xwuVsrkJSPvsVtNMA",
  "key35": "3mtQoCxPoZnpTFxaff5fs4XLzNcy1RPXC9XhxPRGUJyyZK38ffzaN6orbf1pJeYNuDr8CGdED4QxovidVcNrETJk",
  "key36": "371wNCfs2u4y1MvVYKXaSMHSsHkSKsWGa3QPWFvqSWKYZNHia5VACYm9NVyJVuRd4zaSpzG3HgQYYdqUxZq2bgyX",
  "key37": "2iQz2X2WuTE8m51fzrcVTJWt1FQpLkhtqnWyDbEETqtEWdyVuKUJkwbjMKnFtcKk7qNc5kdfMoaDxMsti3AJHD8z",
  "key38": "wiMcvioBYDmUiKiyWBLV8j85x3KWRq8FeM1ojZZ6ReFbD6Bu5JNJG3AAi6PuHJvDH82sK18GV755fqZj1K6uYyH",
  "key39": "5Tfx31WzDv9JPsNGxWssX4jsBkHaYHFkDoh1GKPbifp2LUSXSaHeqyHLgMrrzVhne2sPP5DphEUP3nDPmoFJonfx",
  "key40": "2NyhLktPWmydxYQhcDVRs1thTVU7LT2u3r7sy6CdviFLnRpoCrmh1uRRDMcgvQupYQbE7wQ2FshM9k9ZSQKBdxno",
  "key41": "4ZCjgrBCrxej7nKh6PscuqiLQHtjocEh8Lx2New9ERqYUJVCQSwQqmwsf7wXzp6hC446B7F5nt8AxMHSfymEoat6"
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
