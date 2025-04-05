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
    "5BU1KmnWkxDngeafSeeX7VhkWaDx2gDCLetT94PswjWF3JfDn57cMT7TGwcGkJCkcVCotJ3geq6MwQnWxQELvDGi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AvBQqZDAfiG7N6HaQXQCvgK7qCMgSQzPxN8jt2SnyTgdZfNgxEykZFoH1exknFf8Hk96efHQL7oghoG1WntjDh9",
  "key1": "4v1VJqBeZRQd8zHSad7AXPUrik9sNGTKjRMJoX2tgJvNKVvEc9Uu5PTX8qGjKFN87JmGJ3uEuYUJEkDHjFX2Svii",
  "key2": "2xETp7tEznxJAzERcN9fGuVBZCDy4VmBs3W8qJBKikZe6a43pNhhet7DE8wgqvUohYD1gjpipHXvxjnpTzcwhbin",
  "key3": "3g2rfRZBgkRfrZBn3GhRJS2HorDgyeyDywVo7X341PWTSM7juEhhxoFFKdCAQfWp3kyL15c5TxDCQjb7YiBKLJ3U",
  "key4": "57TuAxAeyhVkXg87UDjE6hR7Thpx3doPpQ99yZ9krxCrpXjyJt35Zk6U2Nb81tQYPZdakSdLNPHEyJykT92SSNMJ",
  "key5": "ZrcX2iJSoy6x4o3DVdFvKk9qRNZeBvQWZTtXyodyH4Jm6V9FEn3aTed2JvLncvSjM55TT8M3f1AbskdCyCu1rDy",
  "key6": "K2MAyio9YJ8FFYpUHLj7HRGEuHsn2pbHU8yMTt5ojcUHR7iLe2nY1XqHk39tEDQR41xtXhuhktpoBhnyR5HV9Y8",
  "key7": "23GsZmWSTAchgfacCEsn7P56HaAk1AY4uufdagF4CwibfJvbB24Mpj6k8iRZGfitJheYjvRgAvWG9uYdtFVTLtdw",
  "key8": "3JEY2yoRj6JQ9EYcvZ21U1raWtGAh8Y89AkaASN4hLv3qQbJ3bRkB7mUZn4t8HRoAxSa8A7jdX6CM41hLT1ihkmQ",
  "key9": "4VhBpHW6hRsacH2NdcArPqFQaVCwgdogoHYix722UqRux4T5GKaeMvBZrNQLkwGkNNNVTeQEZQXuJvYB498fymBh",
  "key10": "4F91bguTUjQXgXvb4Tfm22oq8Zw6nAtEsJsLzhhhLZRqCbX6kv5yDqnY9oEKYpMwFPRT9phE8nHXb61CbjL4wpRS",
  "key11": "4RDbptQ6xz71j24DLDP3K375sBBmNwx71AmwDUf4o1hBFEwra4qGf1noLWHuQrBih3inxBhCRG76UdU6qrRkaFyS",
  "key12": "2mLAQo4ftcFPG2ww1gzgBhHNUUHanw4pYAaCny174rDttWX23xnKkVo7mpQmC3t6j1vHBmQozT3BiEgQwUQzws2m",
  "key13": "5Mx4NoP8E6uaewZQ9AVg9yZWY9dt2hEsK7wQxTAJU65bTTmpfbbuqCwvUo7T86kVe8bu5X5M4dEDf1NNS7Z19EtW",
  "key14": "3vNmcQ7ePAQZqTgurgujaqeB9WHqwcd7TsWK33TBSQv2Cv8HUin6XaffhfqP2uUN4C6Rcx1RLc8uCq1xBBc7A4Rq",
  "key15": "3vVbquXxgnofLdvsf3P2HYmtXMMP7H4yQGsdf5YRdkn8uEa5ZKfeJACid7oqsKBoJ4LYfHgdauwh8R1HeffxNyN7",
  "key16": "3r4vjrX6G2pd1LwQs1q8W3guzcTwfbC7TcWuiDXTbrpT4UT8aCfNUQrQDoXRT58t9Hg7K5XGAM7SxB1rcJehQC7o",
  "key17": "3CunZdR7ZTJGiwPeLWn9i9snfFeiSTxsmNzoPTTkzgx5FPxywaQi4MhztBzccKDagm4CpPYRXX2s6g9e4R5s9Uem",
  "key18": "3dxwMHZM977oSYQYB7uFcnWVP3rGmmwSG8S2Nw6pPQkdeKewhcwUaUch196pz7UkovzHoU2GVGkppz4CvLTqKqVL",
  "key19": "4v13sETzuEYKmA7gWz9Yq8iSqDCSpuBUakUDAa56mBfArXLTM8mL6ibG2bTkwCpcN95CHpi9sbExAkQxs7f68uZF",
  "key20": "5hfao6JeemXXbgJqEWHSnVuGbMGnA2C3ULeQnVgDdYQRnizWpJojdpuPvzydGhdhEaba8UxpNyrtnmLnwLcVHaDC",
  "key21": "3Fn61qVf3Kg4YcB6xBcQyUKqdDSMKWo7MHppiu1jibPuwe57LYMGWFFidCzbP6y1r2eDUqewqenDCdvaGeiEVP9R",
  "key22": "4BM2Mnd75yP9XGMnDwSLH7j1R9Z3wtgyNEeuTrisSGdz6savNciCyedRKWX5hPTCXZvi9T9v7WWG4yMn2aMKLu4y",
  "key23": "2wSqg2mE2u38VnNCRcUAhJKvquAckPMPjs2XiFiWZNiyLWeowfx5Vid2iPJTgeM6kVm261CTgeNrJrFqRFUYAjvz",
  "key24": "28qsYcafdY3ERR7ArkxJfy3k8yCsp2SqbBodZFxVNaKkzuStmC73pzkUi5bv4Vb3wLgHfYrsC1Ec1fyVbTU6NRRw",
  "key25": "5kLhfdjNhuDZh3SHmTjGsLn9Jz7VEmSKAQ7Sr1oTrw55E13AyEea9iNVDiBLGBS3mCBasDGHTdti6NLUrdTG5cvy",
  "key26": "5h6QHtVAuvupeVVWCraj79JBBZE4VG2nPkyiD6FiEyovdiT1tY1fuUYPw9wfMhRNF63VghvJaGW79VnGH1Zij13T",
  "key27": "3rXKFSSuGSuHCu4cfCPjbiTABqAiApWKQmvmKWo64V5R9mcPKLL1JL6NNGZ834jBGV5tvBivQJc9Scu6eTDkc542",
  "key28": "5quGVBYpWP1Z79EcvwLjsNPeC1zvKxDxSUZknNr7innqETQbHg1eoKeaK9q8LpbDi51kuVp3Qhzi4DKU1FSR2cgE",
  "key29": "4W4tYKyoQBL1Bg5h5CYqvPYUfNxSv3sC2KWsRDRcSEL7RoUjnhLhabuQUymSzfGk2NQuFvi67uZgWf8ktyUTLMvF",
  "key30": "e2by5NsuTgu4Dihg6aGAJVrMrSRMwc2md9FVzT6yfrNGfpnpCi1kPXAAMTSzDQ3aNotaKpLW7gwDFpAvTWHUhYr",
  "key31": "3HUmudr1w3NMiKiwHNYomJuxebVqbjucRVB9DDgQFbFoi8q35PP8UZPEhaj8oGvDHvuwBsBZSdkdL3V4jJ4SkXWB",
  "key32": "4gcQxf7vEEGxFYQYYHhQJ3o3AtvK27tN49q3YR8booA8Q986Sc7dteHUZkn6TBXqTMJctMxEUZFNcv9AcDw7nY7R",
  "key33": "5wgykGS7Jsa1Cs9NzAGtXQiGLsSsmZTBqwhT1KAPMfXRHbC9WHCaChitZQ12jQj4JsRAfDSuYGZ8fMcmqcYayvAC",
  "key34": "3cSqmcWZb2JtHXP28bZHbo7GMBk7m2Ufh7QrkTySYPvTeGDXu6y96dJXygS9zCBULbBvTkNQxziUu97dQD6Qda7z",
  "key35": "2L4rGjGBPiKtyb1ghkF5QeD47v3NtbSdEdYwmieZsGJbsZi8fLik3W9L1sWGb4hZ3p9y99sDYCLZjkaHyoH9k9aT",
  "key36": "3ZG9ack2FKfjzXj1KK8wDWLqjB8ndGEZWMNQfV6CXb93YCC3hixKAqjGTRRYQVa3pUhy67tZ5gsXdFRPoecWZWJ1",
  "key37": "3d1MtcGX9qGVNcFWXxSkdgY2p7cMju9hPXe5yXhUh46pjDaWK7W7qRNeZgm9XxyMm7U7TQAvuZ39zWQmXpgkUjGT",
  "key38": "5tvdr8sGnazviNfXXGTrY2eEbLs5iY34QWsB6yqu4M44i2P7JQRJdooJLodHESyxEfMGNnW7rfpUf1zdK1RwmZmb",
  "key39": "7iqoAUeV8WdJjsi1jceKEALYjndX6TQW4za3PNtgDPNCBsXdT2jxTGahw1dUJudJTHH6vLB6dzJvE6R7hRrq74L",
  "key40": "2HHeh4spNrFT4TQeSyBJVUt2PnfH4trxUAr9DUNuxdnZhZ2KaYZ8s5KHw3fS3j1ReKRugPN1mLsHfVHhnUpHSDFx",
  "key41": "zqYsGvKLeD5WEMFmVKdWKwAoqEALhw6ohm7tom5disCWR8LJMJBijsPnoeLTNqnmki3obNxgdsmNHNGr3c4SV99",
  "key42": "3jsug12d7dxxsdCZaZPdBhMYhTLqKQKyVebH5kZMzPskiuxYxsCkf8Pf6LdjjE9BXeKcNRDL2o1k4H5o4rB8iTTh",
  "key43": "5atM6wXsgzFAVfmvhqnfTzKPaxeYBnNQkNF1ySNhaBchnbKTBCjenzo12taVZta1wKEtmCaRnTeFkAkQvWPjTvyN",
  "key44": "2BZqE3N7Km4tVkVJq5V52EH2RfB3Q61xNPA8HmtZAAqnocpzsWC568fMseD5p8nBizurTARsRUXqkjhRDCVcdmao",
  "key45": "J3jXcmhFnjnaCLFPAfEqwsfzA78M37KZa3Ntzcf9JgucY86wpuCvAgpdjGNru2fXCNAavLtamLtuv6BZNQYWF6N"
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
