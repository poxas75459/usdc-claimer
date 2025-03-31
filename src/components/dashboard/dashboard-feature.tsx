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
    "5RWiSLUYZHNY6sE8HrRC4tM9b1Ud2aoDterTLeH7UQrkVeZqH2387PghSRdvbaYq4rGri3rRZ6aDroxCrHR2RqMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jqY5RizjHyfiVWwajE7CApcVEAsAd5wXeaRHupzuhTksUntKCz3eAMXZ5mWdxwisZAq9w1ncMHtTjqXFM8RX2Vr",
  "key1": "3hmBgDavXsV4hV8TsWCSyLMuruCXPpLf6DQUzYCjTT7R7gLKdnrdmZnBnjrChAZwojweryeRyYKLagjcz3kwVq2y",
  "key2": "3Un63PNRfdqeMQSK9KF2E5wyrQCidxRw2xMj6Fr8idgp4xs3Ez9ybZ7chqW3p13n8poFrvDkKSXTsSxSrYyF59vR",
  "key3": "2ReGRqc9dfptQUQbz9kwnEUTkMRCEuqFmaCNFucMJEHvqZShRhRRZMKfhHiUsjG498Gydjz7b36yNFGMwX7ECkUA",
  "key4": "5AGT3SXYRt4NkP4zQfcyWsTfhm8izpXNpxKzSCDmSarEB9d1zBXd5TbbMy5ciRvWvkaRL4ModVdsMkNxQbT2uWEz",
  "key5": "5CNMmCdpYHDctotq5pVvp6EiqtaF5RxXxYm3sXMbwyqhPugyH1GujA4ynenCsRyGP6YBFvud6qgdw7CA2VsaKpx3",
  "key6": "3Mj4g9k4DKiqjnYx44bEU982GfrBUdKPhYjfF2YgkREDE1tdFyKxwWRPgQCpMymPvv8xaa1WQ6F4U6bgPAZcPzni",
  "key7": "55XVipmQK1SonvXr4eWz5L3KTBDHhE5qphoAHVcgdQcFE8hKc41PcA9VsA7EdYi9UZHBDJpiiyE8ZEixxBvUHCh8",
  "key8": "32kzeNbhQUsAp3u2KXnR45NSfvDm714G7ixfud53NyLcwdGuGHrr6qQ6QpQ9pnVs8jtdyGRZs2oizJyniJLP6vN8",
  "key9": "3ZDxGYR4cxKduYJDsL6Vjg7mmjhVUHrLRoAJaJDAWv5kse3Dkm23eR52n7dHdwa93vXGgd9bLVwxtHFFHUDP6DDh",
  "key10": "5yo3UJFA2Muhh8igBSb1gx6LoxDgUBKwsYBKKZxNCq2Z2wZ2Srbh4VT4mpMTVBXStaEGtfooMEpLgC2x4LENGRSw",
  "key11": "2YFGp79P4nbbQEA8qG1bAcQ4a1FsEdYBJafMkPgeEhBT7UQuNu2QY2hGBZ4X4dix5A29Bt7uwHtwiGZStij4mYZp",
  "key12": "3uq63h8rY5Ww3Rj6h1Hj4BRxVtC4Rot8C4wCB8BZVVNyxE8RXCfXb4LzrN1QkotH5n9pqwZ9Wd1XhQPTj5GYXgK4",
  "key13": "5CdwkCXnkvuEymXeESTrwgV2fsFjsen72Vs4VwpEGtniJgC4RKknvMFWT59bK1s6x43muDsScb1Px5tD671LMMkq",
  "key14": "5Ex2tZHMkknZM3WmSpRdWmbhsVhMaukmoPo4qZSw7FqTmVaXdFcgboetJ31SmqsYpn7KPdPScgDZrxUp7yhAx1ZV",
  "key15": "jshYuKB4DEwarVUM7AZJu8zyGa8bmdg5iyZ2dBPxHxu2UKG6o4wtTyRsSM41Nyxb5mf5kXrfR9y7QTdRTNinpF7",
  "key16": "4E5FbevwtbmxiLfu4QN51A7xogfDPravp1xBG2n5tZw98NcTZX2SfLKb9KUxs11ztPXU5xAEfRtwTZzuuPsipLkS",
  "key17": "3AocfQyvn3SHfkXDE3AAuDrBtta648sjib7Afktc6FMbMCKzMkfvRRS5wWWnhcZ3YPpKJjiFUMFBWkhtv8tY96WK",
  "key18": "6575GNQXEnvSSNvviec3JiVBJc6ZspNu84PWswcHw93BN121Bgi1Sfn194afdz5bKZPiFtaTcJL377kjQjksmZdy",
  "key19": "4Yuj3weZGtEHuZVaN85eZYzCRbF7yDvPKn18saGnubf3HNvHLoYbJkCa3C3neyDsCMcvS2UQUz2touXTLAs3iS8S",
  "key20": "3vhxzqvygq6JSfMxzeYSU6dqiJzrxUzLTQ7DCfBn9DY6eXFhs8jQtqStYEcWYVrRMagMy7gwtC85jTVoE8ThsKS2",
  "key21": "2w1iimTC5B8QoRqc4SfMBREguJWA7wLVt7NYQM4vkMTmD5fYbu6eSwghv8aArSaHvCh4k4XJwbJvpgtcBCxBLaxA",
  "key22": "45QRgXo5pBbRQMQE6s2AkEyiDXQdrF1scKascaP2KtqGxFW46eRpv1WPTuUZB7ZBy3Cf86yCNpHUYDkAAjPjUJtB",
  "key23": "5RJs3LX51nLcSeEgC3RzUqVBL9bGzsjwxxa4BYdMbc6thqmjGPocdSaN1aZKgjpKFpR6NhrV43BZhq3m4SdDsc4t",
  "key24": "2mpmmKqBLYYBRDbjARij93nadq7HzWZqLmyifDXc2HeEX7y772UgPP4YZp6Xhb3B3JrbUMGWZfpuFPrJ79T84u2m",
  "key25": "4auVQYa8gYM7kDHpP5gVxcXMH3Zxeh371snH8NnZo46GiCVt9z9rbC1Uzy8RgEMWv1NTh7uSBNV8bkGSZ4azRUXU",
  "key26": "5gH6hrtoUYrp14ovHw56uAajzCxHGGQEus5SpwzmxGZKji4Z1kS5wnmPaXp4gfpqYXwsMX13Q96kVSY1eNDX1YnE",
  "key27": "2j4psxHnvJAxXAqQv9gZXEXa5oCKZNFhxumxRU8E2kFgbMndmSyvkm31wFX7DQqeRZ2h611TcybMrgtoWMgugewY",
  "key28": "3sSStT2tftmyNHSCzMmEiNJEPdhn2oPoGZhEWMrrfLTasBLxtAxiaKhTdutfWxwd3wa7jtoR7Q1FShwEJitoHb48",
  "key29": "4YiH2vf7B9HpMMjqG2PuAPeBmKPzWtA4qrKX3tkvLz7m4ZUSbHgx6kB9fN9mtx3wb6mfebyHuE6MtmHUwLKuVSi2",
  "key30": "2vSkTzATnTRBwhDqXKCUCGPRnSXe5aNo3Q5fWX6zgKpoHMSYYdn6ADsGMSsw4zeFLCiwVp1araVwdDU2ZGHY9x4T",
  "key31": "4ebYeqHkgWNkW6SUJczsZ4JZGxsJoL1qcEAR4chLaWJVag1iMzxKYzHt6BawT9WXkS5MfhVQtvqQgTY3EDThh6qD",
  "key32": "4hi34kGofpufS41wL59Y4Gz69frBUSmSc22pg99NGPMHoqg8X3Zs8A89Jaf4r78snWvR3zfynEV6HfRNrbSowcWs",
  "key33": "3DmQ4ybKjWfdfi4iZyvyrcsGQKkVFEj29SrWzMFufdsh1szo2sBUokkYBBbtbRYCezmkm5TVBbAfma2ZA8opn2br",
  "key34": "2QfGWpaYzceryEDaVkkVE76VHH7N1RTuqxchnGN1ogqkmmweSbtkft7LBcV2QengHJ8H1vCQ2fCEXCz91dLfZAu9",
  "key35": "4Sjp65dYH9vhGfMMTPaHz1eWPSHghS3YcG5G6dYBmiBy4u83TQjmUqBurb7emcweQaxE9g4zwGPBuRxJpGxVAqF7",
  "key36": "5jnTBg4FQmpRR6xWF5B9TZkXynjYRFmUJMAs2BfsWye9an812kMkmjRCJiobXvAUrX5tcie88UZpzHkSTtB1mpKN",
  "key37": "4c2twZqmYAfe6BdqvGu8PchxP1qvRuPBSXM4j2sYcatMxoFNeFBTzqUkGJftPG4YBHo8yzbUqcwV2vqF3DirsXno",
  "key38": "5LkXjqz155dLenWYEXVS8ApTkwcEiWeeige7KAjVug3Y6dApgLxnLaJpjM1xJwgcYPgKAgjWiThn49mbQAwNUFoD",
  "key39": "4x3zca4seGaiiMUjFFUSns9pnuy5ZSFM1iHZgB3BphH1cnsxMH6pYKPqJn1vBv7JetH8qc8xALjRF4gibBKwaVxx",
  "key40": "4cjLCQBS4mUqR2B7KdPuWx522zheKz7f85dz9snYtG2deUuQW7fyjzzrXJMsDBjVhxp19soTYC7qgABQBThJi1RC",
  "key41": "3U8FgX5x9Rbef8bqrbpPDWh7vn753p6XAGWaH7zrdqGfEdXc3q9TBtdfbh9xobWpXkSUCmRo1Nodq3tUxYXG9tqr",
  "key42": "25iuC1Zbon9QsxNYVqTWiDGic3HBoNRYY8CDccivZeoPoKDrpMVF2hVSTaGBbfugdvS5k1kNEo2kaPwAaKZRGD9Q",
  "key43": "cbZ49aAcE7PedsfJ9F3LDaxuNuz4g1r1EiqJeAWeuhyrTws5jPWpC2qwp1WU8T1mc7nqL1goLS9wWCYccMcX3gM",
  "key44": "5dDbBfaVaguZZXrNkX6q49xsj6t3jdcQTL9Ny4YdSpVZDWENinAbkqk27garRKx3nSvPWBAuNM3onmCZhgkeU9En",
  "key45": "2M8XMGB1Du4dUeVhpc7yu18dT8bh1Uvaa6fjgUVXvrKgejhs37XVwYHbVzade5iM5cHwHLFUeGDhZo8LAzQCWh2v",
  "key46": "34nqtJiHNt1xBDwj4S4Mpp6ghsMkdEscudiAFUfwe5TavLrVxRD2Y9rg3erwTCkkvhHj1W7fyik1pY5dTaGFqmQb"
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
