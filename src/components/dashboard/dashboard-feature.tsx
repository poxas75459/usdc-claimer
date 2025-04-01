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
    "2CTjREw9W6AGFbwpeP3PuNtDyf91Qfh96PiwFvYmabHL28mRJ53PRQvKDMvNchwcE4bs5StbXYA3WGsNWv8KkTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63xrYCxiWDEdP4Epwm3dsWRgz8EjKFt3ryQekZZVFrxXywsK929RHZcpFwtQknDToGWv4erHzji8wY84bdWAVBEf",
  "key1": "45uj6ecZaGuDKR9vZyRRhrZiSN9TmAC8FCMSDLprVsPQzBmQGZT2iNYAV9KpKpPqYCJsF22hNZKtccnFsFdPWv95",
  "key2": "5HKkkEdKEUzHPGvr3C8uc3gXS16ReP9sfiN3F1c2CsSioNmKB9Pv7n6DiDDRyhAYZ6iHPTW48cfxtK19ZQ9b87ev",
  "key3": "4b9fDBDS7v4VBjx8rejKdVycoHdcqr1Bt5kcE9R8EHdcC7zY4LPMDUTpoWR85vKtXkytnV7N4MveUcnMb2GR8HRn",
  "key4": "3k2xWhbPjuYSL4UZhuPNWyqdMaPUAiEWk4qRpYfQPjGkBSjU4Q3RGgo4NPoMDvXVZzaUbACWL85EZcouz3q7xnDQ",
  "key5": "2VRtWaRaginWNbGv3Fz5j7dhy4qW4oij6BPpugBni3DaE5hmbBUhmCG9k3aQjbGQzK28Vmtk1oCR5g2TRfxUYTEH",
  "key6": "zCTCJUusoUGSio9VnxLiuLHFTJxVxc6FNGHvRbqMjE3xuYSZfz13e5994iE5TJDTePhgvG8qMuhNdCr4FrZ4A8u",
  "key7": "2pEo1Sa2YX6j7N3gunbpMUmvMbAnv9xx7QvTT1NojhKbC9NGKC1ebHfY4JypzpcpVCjZvoLEXgn1vX6861d5ABkH",
  "key8": "2vJB39FhKd8KdU2LNvj9YEPQ4yt1rDoUZvFwGo8Sa1QCvf2fpg64Zoah36zQ77CEBVroaBfG1jZow2ox7MBBZYRV",
  "key9": "3cJipbE7Sftsg8JW2tJzdvJsDCsZQT46CZXKSHWi5Uaw5L9kGSPGqPfZAt7PeVErcP8DJTuwZ73tcbpNwMNsxByg",
  "key10": "2mCqm4CntJkUhsjTKdfoDxptFeUi8UWE8iQSjQ6pzTfnoMMu4uU6ZRUMTYfJ3Ke1k1gQXxh27eULk8U2j4borRqA",
  "key11": "2uZP73tCaujsCDUKGXu9ToahpzMWVq3DFRNFhyg6kcqXesvfApqW44h5kTkC6gH8LQ5FXkkWksX8kV7toUB1TRjc",
  "key12": "cZMp5Dv1E9t3z2GxZbxNFJTA5JFvobvyhhMBhv28SduzSP4NVyGsFnd9RvqDBgm7kgM9Lihr7cmNB2fR8Gas7KL",
  "key13": "2EfqqFg26yBTQ3JnSJTvdWNMqCtK8SEPQyYG3GaeJFkUAv6WwD4xmGUjL5io6XMBK3E6mt1QRCBLJGGTRw1xiTsW",
  "key14": "2tRMe4DYVzBrUtMbtfaFoUcZvFQxB53C98XKbGBVkxWAbsL6fWy2fdop2UbfuKRWzSAyKELzvN8gGzytQVPhZcg1",
  "key15": "3PFzhe11io24KfMwYGzj5zQKZcVDmUf1v4vDkrCR5yc9qnerXoAQehvD2ffmXrhVTyBfW44QKQfV5XjPSwY2nqcV",
  "key16": "3Ci82r6yNkwu7rRmdU2bV2iNN2K1y8QRQFA8apKwZbVSMTp1ZeE26n8H5M3diP2FFo7zDfudGkG9HhkJMEDnUQPg",
  "key17": "4UEsxFL3hp1PvFnnDaxJCVur48ax1xddm9hdr8AgMSpmcn2JxWVfRuqUYStwbSqUu1s5XnAYyG6KXgKs6kLDsZu4",
  "key18": "3zbd76eVqXiPtEKxyiJeaZ5SimWhCA8GZrQFHKAzy15yru1rEJWGjKSSE4Vz5xzXBSh4B5bmUN3RQYz7whXgLCCz",
  "key19": "49Reuwu5VXZWqm8eVBVTJiD3ziiQCWHQWCbGPNXwQUghgwtMsCK2dKSUFUHoyhtksuB3GJQYmf7E6gp8A61uiYg2",
  "key20": "ENL388huBTVYxTE6YR6u6DpCDG5s4npNAXvxJjKzubVFMwgSKRtRB5ydcTcRvscMLxYpgnfMZLsry9XsZNogezQ",
  "key21": "5uqFMUgCtPmHirivSfRH8kftGvwvjWJEjCKi8HfQjJD6S864DXWYWvSRFUvxKSugRb8SsiMGxSbScSRAvFD9jCRs",
  "key22": "4UMkMmWhAe8UjqX3CajyVxpwN2i4JTQUbA1VmvAuX8LhR1XSjqnAeJWZihfyBPdEhzgXuUCu926zayZnRG7dS6UT",
  "key23": "3HRo1MxiBa4BsxxwqqgpVa8LZvhfw2SeCD81whw2go8d1xTu85uHx8Uiy5Mi9YpXijSSnXjZ4MsAfNBPmoUied7w",
  "key24": "2WkeRPMXar23rzeQLE4cowSXKTVZDYJaCeEzdehPf497Luk8piCzvemvqqLXY6Es9hTWskXLcZsJy7vbtJHA8KJy",
  "key25": "2Yyie6J73Vpyd3pZw7nvHx34GtyDjqme9wdXoMWt3iaFmN4MZg8cMAzqkPd6KyeHPGs8Xggdk5QPVrXLYtZ7THbx",
  "key26": "5Cwjwd1s2QB9vThBg6ku5ZBQQ6WhK3ByUXA9oLCmZ1C7R5LDfBeRsbVjVifGQAzGRSjHXKSTp7X7rjPSW8XryXrW",
  "key27": "3zB1apk59NRhYUYorYPRR8n8vvaD6a7fDHK3VRMvoMiyp3WxLiW2B6yWoUU5DmtntX9U7KXFM8ADyrNHgMHktWpX",
  "key28": "32EVQ4mtvRhAynYifgDVu2RbZwY52koZDYxjEDiwUuCJBHZ6KJTQZXosbfpbzAV4pEKbxr6qU7qVyGcC8Z67vkvx"
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
