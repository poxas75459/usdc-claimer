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
    "2nWJNrhPosKcu7KNC1Ga3jFjifvx3VaFKVsycAHwiZjAtvtSi9zSiSspvXxfuU415nosmt3r8AZrdqVH1MLw1sE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3G1yoaf5DyZkBTwj3Jjbbwr7ZLh9y7f8pdkH3WkGJThyJqLqkUPRYfenDsAaadgYBN5ZgvpZwVLBt1M4CiG6bXZp",
  "key1": "5uXGWdbgysS5UPMvU2foVa1xfRvMBH2ZypdAGioyQVakv989HPc4sncuDAej6ShmNF7N18ohuLLZWJYQvMiPnTFv",
  "key2": "bVMe3Em3fYG8Ff3LcPauSNavGkehieoZ1EResB5CkMeEvfrt3gVtvFczZiALJy2V52eN5ezJhoKjhfq7vwnqvAd",
  "key3": "34iJkyEfe76MekbvT1Li1D9kHCRu4GpFkVQR8UTGM6vAjWfii2bx8Acc9VswecFDPw7nAvXoxCRgB9tqw8Zev6T7",
  "key4": "3mxF75fiCECiMmRiNjXw4uLk84YEYe9Wt6quP4d6R9ubPPF4HrHjccLHGo2n1CbzywoVqf4rC3NsHggHPsdnJKfA",
  "key5": "2DPTLQJ7EZsFGzCjw4TBmyjvRq6P6PvKumCizmyd6KZT5gowbfr4DgMV4vWqAotk79MgHWwzSLmS6kkZSa6ynCFF",
  "key6": "WA6xanoNaAHCqHqBD2Z2g1nmYsmuhsajooZs4Dpa1iaTAUWAc7cqdzANUJaYE6TdBcJxHpcgMvCJGQycEYHsKam",
  "key7": "2uubyWVWtUA6CioJ9hMSXtXACMpB16xzAjbeBxBteavVemBW54xr8TN2iCmT8RdNRFCRJmWqCV3a8QncGBDq6Ggb",
  "key8": "3ZDt5ffcNUmuKLauH7MTRiAnH9Nu9BkmaLk9B9xV4faMj5t4HeZL4ki7uG7DGgnvebreP9HYDsXkuPSHP8e81SC4",
  "key9": "vFXfiL896LNxCTZ81iMQuKx1eQoFqaqFwiwYsaXwQzwV46cLgmT5qfTsXJAqrsHoDr1tkpDqT4ksXLb7Ktkw5rg",
  "key10": "225Tmof6Aji6XYA3s6uhAbxy2AypFjVLR6bGYSksuDttwLdLfPkYjmtfvvTFhNFNaqYVWDofGhuCRKoGkANsWC6v",
  "key11": "3mux6xEUfX86dAqGpgXTV6GqPa66PUbaiirT1g5z1JGLcCeetM4Ekz4L9NpRnAfhftdfBgM95zzRx1R5i8YvD6Kz",
  "key12": "4WewwFmVU8VcGRFtgA19XHBhW3UP9CUJ9e4hzxyw2jJpUs8BfctZK34QTbnMTXj6ZBCs8nqJ7x1cP7m71wxPAUvL",
  "key13": "4vdd9X1BK26Uh5yozA6Q43MckKaVET8fEYj9h3gpfnpbjtRuEZ6gundvLPgFgScfn5bskryiZqxCttzSp7aYfra6",
  "key14": "5SwtVWxhrPAJ32skN1xqq7DQaLJAJWkYToHyJnf1qZbvnCYL41KC53kXnzBHhbU93AcDGDUHrRM2x6mYLZkHqV2x",
  "key15": "aQMa9TZNsSPT3KLeuatPop27iWecqtt2Q4Tqw5GUMcHdHbtWiPENE62VgPBdeRB6EHHmLPWjU5mN2i5XGTSBHP5",
  "key16": "57rSQiZ3Vkkyt98UT5pMNTRZ7fcqsdtZ5pbdJyW2QGeBLymcgtfTSeDBnYmKe7azV2WrY3tyh24igfSJjEkxgnb1",
  "key17": "5yR777pqa1CNSwBozRcJwXBo24bN9W8dD3qBSitUoZe9dnXEYSa14ZceB3n2MbXN7t42M1HEEY3QJcWx55eKKEvr",
  "key18": "3bjKPkAdVqhwSEcEhPgBTp1xzLStdqsN2rkBEJmBDUMBMFkHsjE1fJ1pXcuyZ4mcjpuaaPQuMNqBWU9ePn84G85R",
  "key19": "2gdsFivCTa91rpLJVoQ2sXSShfpyvF2eY18fH6NnhfRMWXxDgj5NFUmwTMC6zbc8c9W9FoLxUjw9eMZp5pYQJEmr",
  "key20": "ocgYhQSVYduj9zUH4JN1raWy5BAKxR7cerCmYQvQt7645S91HMUp1WHdukuBVQNM1UvUGpJeww5GUcebtms1X6M",
  "key21": "tfDkgxigk9dQnJjSKZuyfZ5J5Vq9z9nWSstxJjJ4zBUBKP8RLNFrHxYFDYQGEjFW968LzRiMyb73k6y7QMzKdoZ",
  "key22": "2v9YZ1RD3aUSfo39RM8rc9Kxq2UmBinNFtTht2kSrBen96tdX9exiwDg2H9htF8WjjcWZv4RHiUB7GxqdYGe1Sxy",
  "key23": "y4xkDGaBkfUDptA5ktzzTR322MUHfYhTtWcHTFNdg6g2hJmYxeeBzeKETz7Um1DnaWgGvAwKLeSPM2VX1JCs9Yb",
  "key24": "4kjW1j8Ma5SaeyNvwFTwRqJ94qJE2w4AYkQyWxUdFvNTS41tUtFqHS4cBsBC5v174jFjn7YxyEM4Wt1Z3Yjmaqss",
  "key25": "5JSr9CTM7AWbgqqBPzLokmN1gVydufmbiyBwZxtrpjnqoJHQ8FU1DXGgNX26nx9vvGdxHBVZgmruLQvt8xEnp5S6",
  "key26": "5M1DbTzsfgxumJPAaV7Q7WtHPMUniA7ZxKsbZYP5Nfh44KUFSFmZB52wNUs6GtaVyCFzUV4emL43D1zHYAyuPBbY",
  "key27": "mxhCeYP6PMXf6tCnec6bkfSoMZfFzZvQ3okYx7GFxLNjmYapMYhmWrDJgJ4vJkL2r63Ph8knJC4VQFPE79WLwGR",
  "key28": "5adv6ach3KQA8oGGDD8fYhmm14PchgaBDAki1P51NYJKBaLaNpEZTE93zS6XWq4jMn35PcnPnyckG6DPmMhEuKVq",
  "key29": "4tXzsdRMjghCRDE1tccsiPwQFgnXpnezEn9Y7G7mYjgKfF1YMzELJ9EGjDRLkAyu78bK5qTTM6aPFzviEzsi6wWu",
  "key30": "unBKqkGQRb91hxV8oJ4CZNMjuWM479PwR5mxkaeWcADuMoVPbERRsn4t5CZRCfoQFjYr9vM3kNXz38zCSQycQDg",
  "key31": "3YfqaVB3rXzh1wamu18EEfp3d8ynBtCGrCTQmpW3SYtmkZ9P3zP3zyvxrwzsbKWMJMkDfi5Cnj23CUWAbFYpu4Da",
  "key32": "3EUp1h4hPxRjABtKasFkB29waqBgZdMZfcUMPipyHN9mX3i9QaMfwaYtWGfZuVFWSEi5DXPPRbKGrkDzQhUK3jkb",
  "key33": "5QE3WSXgY1MPEyR2wknEyr1kRELJE9R9h5qMhfZ7supDbCUd3y2mivL5LAkabWhNrRhGTDCCFykRwpnVhhPmEAoJ",
  "key34": "33hV54uXES41Wp9murbWC6HDCFFPPFKtRqUvAbzQKYi8PUhge1hsgktpdFGDQb42gcRhpF4XN1mqpXGEaAXhoaAv",
  "key35": "28CjatKxGSh7Trmb1uD7FPKb8yYmXsHNKBy8WMteZZQ6RP9wXxXYecsFcCEQMbd7CAMJFW1yoRe1SieTN8pWypdB",
  "key36": "2W6MHNHDLivSfNZvdbxceNgRgdvSkZYo8Qy2yfHdvvpP2s3C6z8XMbw78XRsaCAD23H8AQqiU8ivDYm5hSw9YHZu",
  "key37": "2Zw9d8o9ZbsEF3fAbzLWLeqcaG7Qr4iyAKyVZaUoaMF2JqDsS6jov8j8jCDJK88L1oTFzfRRiU3i7R5tVNFM4ezh",
  "key38": "4dPej8RT7rLmmEhE4Q5zacv2f41b1ZBnFMUFCe8FHcknuaDJLo6buZZeyzuSRmyyinAvcL2uYGV8kk7ybRqhdcAT",
  "key39": "2ccCH7jE8xWjTALDXq7nwn6EPdvdBpLrSE62Ha4jYt2nRLVqd7hgNEcPaM68Y6f4yJJuLwev4HUSB3PUorbR86yW",
  "key40": "4ja6BAj9sqq7cNYFAb1byCowFYNnSnmFUpeyzBFWRQNxEXd2614rBBDGp79HPRm3PFXghZZ2JDQ16FUf9ZspTvz2",
  "key41": "26bpnwi5wivxz57oot7dYorAnG7cwFn6oYGLJGUKvxtqyqJcyFwPnBjDGyYGamYsbMCTHEQLk4god4nrpEJwLwQm",
  "key42": "3XeChBN4M56BnDapRWSsNMtkFTHgApKpaRsCzB3VVswWqauV9VcacqFBcSvVp4HSp3wdbvoWbLBEQjzBxdGzKKtU",
  "key43": "23Sq5PafuyhWfZ1z7PmaoRcotoQ2aRGrZXug5awHgoytvWiLJ6QiKHwN4gWcfu1dUn2TMAqwAeiRYQHLoudANDWP",
  "key44": "gkfs1isqqvRBNvSyVQGazk1ispsdwgkfJBnYGknk9o91oAwnt4URMK62HYj9vnfSfNYAr4gVvpL9hURRBAVZpFb"
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
