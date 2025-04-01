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
    "5JQoXUPRNcseptjJBdFNTCfARdPZFnXUZWqH5jpTZeSdtiLvQW33NUz5LGowRr1Yp3NNmCakSD9irE94yb1cLHr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53kE5SR4zMhU8xNtPswVmvD2VSdevHSgAV4Gmd7ajDX3TWmDJ4gc13H4xk99soApy3w4AJvp5aBRW66mDfPpPME6",
  "key1": "2pigyHEAAWMpdLqb63aq5YwjJ7jxu7o5gte8HLoKkr37bK4ABmh66wXDdzrHMidKWmA7NYmJtx54FZhWT4PT7kWg",
  "key2": "rjvyi8zRwJbK2MpCJQL5hziFo331rxCcbpeEFguBWMiM6ARPyRM1HHhWrtubckCC16Wtua8dRSagjxxX8kp1FCC",
  "key3": "5t6DK1CqGUV3qv6fd4N9akDTpnSwViEQtSvKzTc4NwwZjVdN271gH4PwuquLE8EQt2aFJtLmaJgwKAWAP6UyxVKW",
  "key4": "Du63vZnVg2gKXeNe9brCaZNca4nVbtHg7ShWmzpZkTx5SP6Y6h9skrfH7kzX3GpGiMYu26Pdto4U2kpYmntzAMT",
  "key5": "3MPq8dJmGS4skesenRQL1VN5AxrmzogPpLvYamdoLf3GxbHE1gDcrTcdRUzjDCdpndvCAX7qNwz1aAv9BLMjNJQD",
  "key6": "TpyQvP1EV4267otb1qU3avACqZM7WnPXGxHAPRqHxyhzJTkb9omzyF8wyW5WZhvPzqNCDNn7w7JXeTRiBAuGbSJ",
  "key7": "5xMdbs6uvkvWzF7FAZ14PHfvNxc9ZLBaLCVhoKjJXof563PYbe66gXr7ERq7jkuvXV1AahDnERDuscxBC9Kh2Msh",
  "key8": "3hghCVXrGKZiESLg41MbcXYT4oCUbixQNwoxRvtE5mqQpAuyAqa7QqPRZMhW2v3bCWDMhcVcG7AsyUMYsAq6fR1L",
  "key9": "CKpfMnstXpJoPN5ANW6yeKTPFYg8GsRrisuDVc2gXMYpVmCEngjTzq14w7cpnFvoziW7ag2EXJfN9trgoMcsbUr",
  "key10": "5ymizHQhebxbviUJd7T5u6T42ERSjfDNoj345XHcz9fLJREgMy4UgrgQS8iRdPb46SZujVqpNFW9T1Neg6iBNoqG",
  "key11": "3dygJT6AvSKdCvct3tB9qzvKPAKwMszbMDjqxDfnSNs3NxFBYCsh7Pk8pBm6RXL6JVjxpVNHAs7GgzGqhAWxcR1i",
  "key12": "3rjzqbnFPhZoeJ6B7Hgk98JNNGUxptC6BuACevhvxAi4E2vPrBAJGZdRCBXdW9jTcKF6dkzH8KRuTX4VJnk9Zc7S",
  "key13": "vjofkfidKTniDQWyHzGbaeJbUUrPAW6vAXbvNbyh1Dbj9sKqBgu6DMC2Q8KYnsjfw8wrTQapsgT4Kyeoz7M2uNh",
  "key14": "3UZHCcaxa6VBvKFKAUZ1SP7vFS38WM5yo2NXWwXxH2BNuzAr1uAobnjkJTu3NnffniBWkzEJtGe6P5smLUPTZ52N",
  "key15": "5VSxEQisBnzr9HHrCV3BiqKxgNRhAd9dGVzHPxy8dWALjSS2p3apmteBtBDueoCFRVCSm4fUsMF9HnyXpWeqVy91",
  "key16": "2pJzws7BcfrNNyX5Wx2ryPMoDMEPHK9ho6F2SJP7FL3egpN8rnPZLNNXhnc8hLRbu3DjEcb4DzqnhPU2juoMB12Q",
  "key17": "5Zywks8U9dPbB6EHLBtnHoVeRst4Hfc7j2nMycBpJppSZThdazTdRjDe2uHmbipQho4yBUN6Rjyww6P8pmi6WKq",
  "key18": "5AQbRViFbZyC8f1DKkEYvxHFfcYFZzF9Jtdgvj2X7toGJggFzjsY6v3H6n3tafjyb6AVCZqYRMc2orcZY5iBZPSJ",
  "key19": "3w9QSUo8XCRDXGrrqyY7uHQYdbr45Pck4mnkxYhXYtZcsYM1MCHMtfZ1hVzz2GEPgxpn7s7JU3caq9dz7tAK48Qn",
  "key20": "5oieBCJXk729purmv3DxW17aZzfQPtcvX5EQLfQr6fNKDqoZBeL8dQMPPYXDcmxq3asHVz6mcHnZxr8oB4TjLdXw",
  "key21": "4PhftDPQrxtKTJxiMkcFhFa3oEKP1v9A9km6QM5cgzcpwRQwKYjb8opKX597JU58rZDqYqt4RfYEfKR89bDcTaqi",
  "key22": "5xGYtZ3mP3WC2CPicAuhQ3jajp3gwUbNUi7TvZqpRnBDevpvDXPiGovJWP1MHtxS7awBp7xWS31KfYDntT2BaM2e",
  "key23": "ciJyCXPBW8DaUMw4yWLVpe4ssXG7aNaAZKhjWhpTA1iLM8C5fCKFqcfmKnpsywbG5NY2ea1EKRC6HMDsfDySjGx",
  "key24": "2wvHkLgfTNVvaSeFYdC2Y26NkNVLAFMGWHUj3o3UG5XomHV5K1jNyb1s51ZhFBKND9nXxgVGTQf6dwd6pxrY4T2r",
  "key25": "3c834KHLgavcZbrLQx4RjwcYSwaYJd4qCcz6HKxe9aWUeGrtKAKDqEhgWAzpvqSPmv4VtKEtPmfLPwhQF49YL4LL",
  "key26": "2G7SaR8e7dLG1VeFbKavxzSXodCgt66Afs9oajEQpti6N2vQEhpT7Xx8n6pEAZTgjCCnVJEWbskKPwmanVk11jky",
  "key27": "Fgz1v5bBpZ6bBnNZfSi4CzxKLBL2FiDiU8XfQxG1JUc5zLhDABiAzUAm1QcTuW9rHFAr73Mu13b9gSLGG4jLRg8",
  "key28": "2duhMr11RPawg9JQM3vNf46XPfEiB6eawi5FEjTSd2z2edezVcSSchBsC9jwYCz3gYQh5ieZpspPdwpyEVByjqcG",
  "key29": "2oUrEqzC9T7Jx9BM6sMCg5gmVzaXWXJ9575kgCg2JfdANWJ2DbsMJffwaV6G3YANp58QnhvNAUQe1hLzcAyN8GWk",
  "key30": "4SabWARQdDbfycKfuZ3sjswEHXqD77stVjTFhzVgG4oPrBQTaCYkH81rgAy8wTFwWHVvLZnvPUoENUi9CTUcYkhY",
  "key31": "4EyJhxN3qVgWL5iwvJZrLDarWWovmSKUaP9oSzHURbGPRsNqgicZSXPN2yx4qM56mUMdPz2s4myg2iKcsFnw8VDx",
  "key32": "4T6fJSDKmopv13t2GCQMMc9RYqNRe7T5CnFW4EUk3TMLVBJVw9U6r6BWPYvDrVrvjc1RKG5Fz37c17SUszCa5GCN",
  "key33": "4ziLVTcxoBRV9n4ZMmZrDm2DPtsUenjeRUzkLxHMgnBC7ccPaRiuD7AE1qwdnfodkw4UZVhWKCEkWEhPmuJ9QLaJ",
  "key34": "3d7DZAyziHqVUUo9pEUV6YXpqJGNA6jecqqBgAnQehnc2YoWDQnP68bRkx3oXDMgSPDKCjBbtRN3axDpkfxVL1uk",
  "key35": "U8Wq8VmEck2NG3o7FMQRpGjikcF4DDK59j12WcWy5ukWV1o94B8eQBQS4rQH6PuuZxvtCFCGTpjabFAgo1ETpHM",
  "key36": "37QkgXToryQo88BdvVmNH448Ms7v9oi6WqD7G9PA2YTGSFmhBmbJV3EjrjyRpTfBLgneta4qsqXpRUhU5LFjddQn",
  "key37": "5RPdhhZJg4Z4FdE2hiAPGmb3SSURderNGqKzri2XUSrnjzHrSLqvgBLTXM95saMNB9jTS6TooVc2dbmkJoizhwsJ",
  "key38": "5xBdvjDHLyBQt4cxvUPAYfAAVed9pq3HF5PkgHDiNzHS2WqN79NyGRhcaBbJU2FvAurcWvcujtxmb4LcUzWAYpLK",
  "key39": "KiPDifGvkzvTCS4ijoNZiANocoLs9sSxYDxQw9eVCgmT8WLgCf7dTqfv16nUU7fhZvXrprFNnfxrGvAhrRpHC8V",
  "key40": "3LMRbzXtGUn3RZLyEPgSpRFinFhAJByNUknYFLrdCPotudJvZw76o6evinFbHy2BaZcFfkvUTAh9Udi5qRwgR22M",
  "key41": "RrDmib5k1LNVzkRWEY8wSZP8NAPQagTgMBHAw2CVNMhX9vKrKvjcDWqbWYeYXEKoJRpMp6KWbcQwRewC6HZyrc8",
  "key42": "5v19JbYWFrtTV2jgJAvFnGAHGTMXC8PfyxW9Pe3DQ1EPZHHjawDNAP8HMsyTNtJ2K15CiCraKMPqJM13x9eZgiDQ",
  "key43": "5dFgLwTccUBfRkfPK57qhPgZ6B8rd2SXwjPywQtf25Ju5UK6RzwrenbskPMmhqQT3gXJ5rDvViEeVT8Aio53mEk8"
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
