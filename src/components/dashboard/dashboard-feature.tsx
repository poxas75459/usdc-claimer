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
    "5e3zKZv5atnqq3L8t2vpUhbEv6iQECYiMsCHDvax1E7fRSWH1p7BEATMWCTznVHi2bAniqi8XKg6EHLyKSadGwoU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3569UEqJiaY4f2uprx5GHF3VT3JaUhPaP5GESH5uLo8SwtYdaxaHo2wxgW5kwerDVjBymptnimprHKbV1dkWuCK6",
  "key1": "5y1qCjvEVK8vxnvzLRPJmrvMD4AJiaEmJMckuffSJtDRqY9tGqnLNXaKAwD4nmtwyiGVypGxBjtNPLnxeBCe5muF",
  "key2": "63yemxYi3SLTeKUELR3qVrLdDr8eVdfWhphnYCYN5TLEfpT5rRzZfr3YaxSUCiT8cGB6BAEjCJcoxa3i5Cvr6A3a",
  "key3": "2tNFVBEznSNMAAHxxbGtwiXBGrhRzDM2A3DpsBnomnTLdtjg9UU6Ae6k9pe88wNM32UGebC7YLVu9fNuVso4hanr",
  "key4": "2RChUnS9jKSk3QeAimFNSqUFeU2w3hV8pRCqSUSKdnB1AbRH1XnNQRnrJwhGavepj2m45mYpb7qNwkNgUKoXPRYr",
  "key5": "3uqjnAWXwqq6RcJuzGuus3JHuNu5VYD3UBDz88mjfTFJQqWNEgYvxE2JpK7Pa17eH8rPsbE7HA92FNGGznVkjsgc",
  "key6": "4YfKh5bwAjhUfumRD4pRdhwDiLxJavH4EFAFscfGxy5MzevxThnLriGgsZu9n8FLt2uvNaVVqTmX8Qa47W7tRuBS",
  "key7": "57r98dPYoh63W9VeusMXpFumNsi14YwJdjVSZis3Tv2PsjRKoTRJg8h6q3ut9hjwvxmBYEty1stUkyUsNp7daoe5",
  "key8": "2J7u2Ri8ee7phHynthTqhBeTaHbDegrmLbUxWaV2GGKiYbLJdcy7p1gLJBCkELeRjHDHw7zS6oNmmm9mdhYagjYw",
  "key9": "46jJ1QTyPy2aR2cm49WHwm7itjjRMH5Q1LPMNmi3WE8AAL7V3UBRvkBa6YeDFsyZYoztFdc5wqbZvXWcjiN6vZJr",
  "key10": "jYvVYpsSjduwv5c42BJRSLrFGD4KF4VayBU55PBGLpLS4o7oeZadjr6Tu6rspBGEWCQbQXBrowGgeHm1a9gguK3",
  "key11": "51iy1ccJrt4n8mnoxjTNZtJgT6sYSg4gkEPH6Fxj2pRP8WWgVmKfEmGBZVYv7ppFUonkyacHRwpGdCQ8antfUVJq",
  "key12": "39o1SLpERt8vni5Nwukrtaa9uF78aw3AtpvYonFnYscDKLve4Fk9bRSxVxnwqgLqrAeDg48UYZGyBXQmBsTQYnze",
  "key13": "4YEexp1KVD4QAYsCM2913NFUbksfcKLTpUXp2tDcx8Qj7KMQyzyDpxJtafdenXrJSryJxkAS8jz6XAp3ehShGx6j",
  "key14": "4ZfXvv9wTtaojymKS79mRxMJ34kM4qaeDwnTUNBZtGXSKwrchvwKWmEYba5kdvKdGMA93L6rJiwPCV5jugzNQ3aQ",
  "key15": "2syBXuNdAxeLa5G7VPJjoSpVe5kNkwyhbHvoztP3nJRdTeMUFe8PewHucqjjEDiKsXdtApVokUwiLNMJcRMCzfn4",
  "key16": "2SAArMmA8Yp8FudKmQ2YPiPn2YwjqDA6WaJz7xz3CrGZ4WJEhnLEhBtjcjfAa28BfoTcfySWz9eGooQTR13Qg2cT",
  "key17": "2fKopXeWZ1JAru7qfHqYSCSrUbFPLH6GnYuScN5C3WQM2PxoWFdgXvN44uJ5EpXsG9Gv9L6KeMF2z94PxC242rtL",
  "key18": "zGxnUccEUghgdJbyZx9ARpdjwrvTchk8fEqBJcatjwH6fPapzPiGCK3DEh55aC7mtLbJjdnAQmhdUCUMhJWuSL2",
  "key19": "3QHodCWVUkuCrx1huTxidkzQsmkcFrvwt2VAWEtDiRwARiZp1QFYZj37LCA3JdJQ3arqjHaDk5Wpo2YfHZcEKvyv",
  "key20": "4YfR3HbhuWfTbJYQhAMmjzi93Geh6hcNiVbgGGKpyFD6jqbtS56kM2mqpPqcm1AiwGJZPJqmsX91oCEy32ijjnpu",
  "key21": "4rta9ovvubkXWHWyNYbkvdzGGLYA28w2ea26Bunmy6P42n7cHYm1X1bxbb4Juyu2hKat1djgyaMpT6DRSQAGdHxb",
  "key22": "2h5dcmz2KuXiNwg1hCM4KpdyioNfLDRSxusWAtaSkDWQh3NPhk6y5vT5KYqWNMiYpYQf6DENp4vvwMXWFsF1F1KF",
  "key23": "4mhdKWmtLjQwPtz5V5176kMhzcbGDahRt4wkv4Nknpbg9pqWqsava4jRnfPkMQTTmAQvCKZsMatST4kyVLH8aASB",
  "key24": "4ajwdFW6vjJvYv2FJa3dLFwVzRdYy7Vvk8sZPztM6KVZtKYUhM6V1BJ8zvGyknfV3rxmLcr95EndcyVuJQuW1S6E",
  "key25": "5JBhDXK7CwrFfwM3mmwtyMsxwPVLVJTyW1dpw4K3AEApypsWhT9HV5HvzGk4QDyw76LbNkbs1Tq5YweWpjATx928",
  "key26": "cGy6WPc4pnoWe1tPBSP585qVT4WcorhcAeY13U7nY8YCt3GzVU7C1H1ZnULArnXgXZhDDNacXK32nwWhRELAaSd",
  "key27": "2PsRAwU2wMj4cm5Rt9aYs3kBx6vybuCgyZMFB6ZmB9xbYqdA2SZKRMHkPh9tQaQGUop7JJY5q39BANULHFWYfEPD",
  "key28": "4yAFs12PvEnSgs89U1qyEokCqXSksorfZTqkscrJVQ9os98kZyVjFg81n9yqvENApmJoqr9d6Fc6bx67jDzMjHGD",
  "key29": "5Y5qKvFs5ENJEnqgGCMWssXxYigVr1qHC6Zm5JDguLSQ3FM3zQXjzcAvMqDj8daufKLccFCiM56KDNYt2uTtksBb",
  "key30": "2fjPwNjADXxQcubFrUrUC5xCE3GpBgHmyRKypVyJ2jKpkCVtERipWYvLRYdY1s9UjuEnM8Aa245xXFTiuyCgmVTj",
  "key31": "22jNKNDxnLL3Y5dpPDzVRfvxi8JmkrmavPYvw4uNFCmwwS63hQgX3Y6HAf4Y4hiHDmSWEGdeRcNUReWnFqpsoA2b",
  "key32": "Hi77e2WErjSQ1c6kzfzc8r1Z8jPeeAb2x5JmoTfrP1jiAeEi9WwCJVkjLhijJ4o9YRjDuzbZ1bECJejUUxUXYBR",
  "key33": "4EvaXGYC3EX82vkAQAE6QWWqjDrUsMoSaZJAC5Xn45y33VX1LA6ZuMo9kDrieQhutbAyMTeYqsAXi1qsWuxwbDnB",
  "key34": "3oHhYLPwPKPZZE41Mq6UwBqazyCpqKFyzpfmgSmhKfu4BnnhCg3BPNX3a4vAWjHydv6zpgksNkfyFLcMxxBZP5oy",
  "key35": "GjGRoMq2NtYXGLHcjCy41pJ3U5VbLtSPpYXixxQ2SvYEvNbLeECFuNB9sv2SwpUjjTQs8XwyyvxsnH1kB3fKRiK",
  "key36": "48nssAsHHmWgyHNxrh12rrpTZFp2hxP143PuQGxgKRRYHprCj5sAWXuJe5WbX8NTXaXenR7E36d6KNRQZ1yLVxMn",
  "key37": "zHDJBPsaQJGCJmGqbzwvwcXPCMCHLP9mF5G5FT72ovbmfExkVu2gBJeEXtXSksXcs9auvAQvy62zAWaTq6ftXvh",
  "key38": "2cFV1JD2gqkkiisDsWdWQpnZhVpUsMJzPDG7nxjz9zeJHzQrTJMvttCsGoWy2QPTLAAZwA4fyp5iJTkoiJnQDAYm",
  "key39": "3fnip1PyPqk4zqQrhejiGZHKSsSErcJ7uhRBGX2gcK1DS9MCnSsZuTv9KiT6zJHZSVGCqXtt7PuwJsKwLpoMCTqB",
  "key40": "24jQsYQgTynkXJmhtZN4Nn3kJD47rtupkQ6S6unEhPXoWUWMhWfymuwTTaRbeLa8TWWBzz5Aep5sTnz29ogSK1MA"
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
