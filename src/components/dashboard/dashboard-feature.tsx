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
    "4TeuoBXL5nYixmU6P95bewDzTsMP8XvXzRZhcdrewKcheXgXuxpgtG9v8NpaY7g7z2qCgV5B4ZjrubEoSD2cYsAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PekFRoba26RjvGgcLYLDBvTG1aTXZeJC8dGUECY1tCQumB7rCBTHuyArV9nzLoczEE9o4VtybhywicP1u2DK4xS",
  "key1": "2uJ7nV1W5ioRWispvb72gnprizKhtXVRVG8Z3B8cRvk1wkDCL34mSMptRR5WqeLzZ4iowJcNPy1umQx81yUcoWC4",
  "key2": "2Ax9oq8AYDdxEw6Zk3u5vN1JvcqoEvFVz3Z7ei6K6KXhq4i2ZSzpaESuPdz6oJgj8FGpXfLrAyvUx6duHqDq7vws",
  "key3": "vhUZMoJbYRB1mEWbb37NQVJ35m3pJ8EsR5Za9vH7jEkhmTCN8czDsbJueYSscUEv3VybRD36oMzi1UQrtkweRFq",
  "key4": "3XUZBQqHmumxGQ7FfdzAx6JpXNiHk6HWg4vWM2dTnispxrUyZ4sMJTpLoPAE21eJFzJFhCGStjZgD7W1bAg6CT3b",
  "key5": "5b22wfPUtbxnfDWLiKu539Hod1PFpBv6nnnmGYFosvfXtjVF4nDRvDvx5MLnzAqPqfRwHQpHQg7FCPtESu48BD6C",
  "key6": "4ybMBFGEjmAsJMKYVDSbKJNBbUCT72W3zHzwJCPvxfPW9okaNcmEFoMkRXmABmL8iVAsQsu5pHwdTTJ1zFn57hVW",
  "key7": "3fySLqeYUsvWV2fX471fuMzCgtydHo9xkxNJauuV195NVKrgpQLKeC4KCfpN2epKn8dhd7YF9VWncp4Jk6xTwj9w",
  "key8": "5qvn4deHjpdsAVdN5naBqnBDFpgAACNZASkkay6r6MDDeZRqW6XX7CvwLdTqYWE3WqoUCfuejRzGz9FXUpgyMJG2",
  "key9": "4Qr9JsgsRhaJ8nv4QxTsH1YZ3vcxam8n11JzipaM3cJPDSbg2GcARc4Uw7Hzdp1zpgMM9N2pXCXZMjGqFyWNwS51",
  "key10": "3oayReZu6Agc3sHREXohbG2zYJeyVbLKt6Zpxmiufsk9mmwkf8n7mwrQWh1MgTUePtQrn6ujMLCah9ihzRb2Wxvk",
  "key11": "4QhLrRSFbM9UFGTP8XiiSawgDgmeWcprv9SVoUuW5i8ahboe4S9iNLeSHfhiZR1Jh423nPPooZxPEN7pgHMNfHhM",
  "key12": "4yxPtoMkdmXssjX7MGv8tUYhUsAbTTxP6ZrXpE5DSq5namYAN8KkRSQxyTEn1kj36CsCfdCyM8GTuBAtiSkF6RfP",
  "key13": "47t9s2hgVPUJcBePhPahBp2wMqqAPUZTAAzxKRZp3VRhoCU1pDqYcvEoh1o9F6hcn7d37uf5uVNA7iVzA7AM5FGF",
  "key14": "WbfpBHFSaK9EdL29SfkXSkaxNebPESXA5M3MAEbkQcgUsvmThpsejFuX6pWWADRdakNyfjz9rRbymQuNNw1pDrh",
  "key15": "4TYW82RPKZD6ZyFjGPGGQHTivYeoSNZMRFwAnosA8GgDyNAQ9g8gpDsdm26wdjWWiTjsdhhV7xtbpt8DLu8jaPte",
  "key16": "DyEmdnVzzHxtqUxkfRGutc9yS6G4etRfs9STs3zN1PuN8EYyGGdFgWVRwirwsc795odfwNm2KpTRUgAfoD8Erdv",
  "key17": "3rorsXHyVc2oVYm8pttFupvZNripyv5eAnJNWG5gs8Rm61aq2GiMddBt9ZQYE4VPBzAuuNec8uhRZwtTgQA2pfhe",
  "key18": "3sNMSUwvLnxTAXdd5T5RUVd3y12mcN1h7v1YToKiAVGdjvSLS8u2PBLhxfPpEEAsDMB4jNNx2DJeZFToyDZfJzQq",
  "key19": "3gAGuKRScumQotbjvjd74KfxYnLZA1NKv2iqugUy3Nx19EpoZvXqzejTHQ2QXnbzfGmn77w7mf9bSdxDDe5rx7a1",
  "key20": "4sBHwSajUUAyEbRiF1YYUm2dM2KENST6JGwkubLbZvRy7fRwdydA5g6fckCDtEHD8a7VXZ35P1ZLhQBHZdUBYrgA",
  "key21": "2oSsz7Q64xzBxjQLZpBYN8eHrDc9sj8wiWN3sh9fnTh1B53Uw7FE7r1JUD7LUKz6ZWVRXwTNJ9DCq34jwUGaSgsB",
  "key22": "6mqEfRgvk46C1oJWE5uWTssQZXTHYEkuHoKEMHs2K6KwLFaJmLyjMSPjp1CMKHy18HRQoJJPeGjYRGiGUxsiRNS",
  "key23": "BYkmxP3KbJTpe1hKAknCKanZsihM1JbbqxqVensgpYxCPQWgVRAL9NyhhNsbqgFfRtJiZoApfKwufTsTKwA7Xnd",
  "key24": "2Fk3Pz8aNaUQpcC5nymuTwJgFPP9LDg24HPzPsxPNMsRxb7RbNm1eVvMGMtaeY6XxVt26gG2JepupSXUrfJzMAYi",
  "key25": "4dES4DA6sJMHp9pdrMgGKj3JVYcHzN8h6hUeWwS5qtfc9kHuGm5UZPEah9sAhKRBYchnQmUkfz8aVsLngFzwZy8b",
  "key26": "5g1QVSuzWCx44cMQo3oaM7trZ8goVFEWHKoNu4hDSj2nkXqGVwGDeMiZN7JRDtz8Drf4UmjhaRNyvJ1XMzs5PBXz",
  "key27": "dhBemz2QhSG7wPTAXkvQ9SPBqLv6445WQgb4p2RiWM2ZFLMwmNfc6onWgEcJ6Pg3qtG1eB2Njr4JW6fXTKPJLLz",
  "key28": "4eyhSn4utJhVDsgxcZowJvfhrzzgCsRQUguiVCgujXAiniRgusyK1fW8X5GrKhkpX88abf2moPrdyxx3Q8ULw2Sb",
  "key29": "2nfomhYpXQ5oxng9qTbBxory4sJEJYQzGNmPZo2nVSi8bxE6gVJQ7AeEgBqVpvWVDQLmRvV76FodUTEDs9DaWgTp",
  "key30": "5Nq2zBqFZ66iqrAXaCsmEogNkRxmt2337acyo1C7iuHh63wDMaC78e8ndj3pCtMrtpECWCRt6Zd7qXnJt186bfi9",
  "key31": "2wHSfPVAsnQHGYb9Eu8bodfcnpXXkbkz4JfuGCxJf5chkUm5ypPXWH7xqpWyMDo9jcUTt5MXqAbjA5QWpqX91G5k",
  "key32": "3nCQ9iHrUvedfbik1uHopBkJykCLKcGX3G9VAyhWxJBySyw7i5gqpzugXBFHz3ekUdDpMFp1GpECrQrLzqRK6UkN"
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
