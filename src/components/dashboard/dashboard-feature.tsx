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
    "5fcDqk6To8uMFMf1Py9WakzzyF82mBsbUN4JuTMcYHuRheDp6z2EWQKyBr6vbcPkZvURTZJJTuLgMtVFbuLth642"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dkfJF88A5BCncLZopswUKRq5U1FKRFebGVHzz4T7z3XB4kvKfEDBkHyRZP87zDWNyEvcbR8i59D825heoPtWP5G",
  "key1": "5zPWGRTmATCDCp1xutuaEcQHLkEqoB1P95vYXxoc9psKydwACWN7V2x5JNjG3hG9rooUUxBzThnuxBPyMpC3Q4Wm",
  "key2": "25hyFEfqYSehnevHQqG5EweiB2d1tUypXi9muVrbBMA41xkDxGmQc4ZNjgi6XtFrqpvtdfMcqtD3NWXdHFukXSy2",
  "key3": "39uw2CJUHowQGLh5ed27Qmv3Ag1rqp8GKErnYgtkeAU1DwAz7FKqgvtqUUfdZA4N5pJhh7KUrcWpSG3JhrJ9eQZY",
  "key4": "3sfwxhJM6SUZb34eDYS7cKLiTQJg6ZXioqx8WfX8rKsxDoUFxoZ6BNEiMCnPP4hwBJ2gaqHh7BWfyJaW88V4sFi8",
  "key5": "2dRybqFNH7PatqMR4PzYW4mWdaCTDxT6yBLhsrkBG71Cd8mbs8K3U4tTrCMV2kzTVTWJj7VLhrEwAjQ98h9P94hc",
  "key6": "3GRqEVBMuPFinguPJQ9Mfzt4L4FMvUh5wnprgmFaSJf2twJ84FzzMCvJgX5YmmVLn1ipkrUdRQaLjK8Qepchjf35",
  "key7": "2qmvQE5eqzB8aZCVUCS22YBo6sLqrf9AD4zdEKS6VToyMtFamyBiYQxR7QDMYJwvjxZJkfEF1qbDJL4KjigbuM8K",
  "key8": "PuQXGkagNeo2WCMeH8rMBkMu5rXY4dhxXreMfwoRrPRA7PS69JLo6Erj7coJD3eTVFzsf6vNrFS1h4Av6j7RCr6",
  "key9": "3bKWSw6kedySuWjBNpnm4ercAZapVu7bdjqMiBo4SihfHRsaYwAA57sqcWxM2Wvc3tYXpJccqAGVfRtpRG3bd9fH",
  "key10": "5Q6iacZin1JF65Uq6XGD1nxDGSoXD58z1cd7MvT84fhNxKMETTvPYYr9fy43QFQht32vuE5kKgLd3Yu45mH8HWUs",
  "key11": "86vHbY8CZMLmvK7t7KWJxYabFwgbPwswHyby7sVVr7rXQDFuNms296wFug2gp2eUmbJzMXafGjpciZsGiKA5eaj",
  "key12": "5AFHtZApbuytRMVWuQA4AhLxsz1N38pVAxQ47vHfLsLPohKuSA2XzxSFAHuyDNKMvqapEptpjmmzVreyf4hy5uJ6",
  "key13": "2rjNoBqMpywt7rLifoZpgX7n8k4qC5NziLiu31BE9rWo5MNQNhHwtPQSHn89BKuFgbhqGcdpDo9tpzBEZtGsdgMD",
  "key14": "5mWHYQK3Pofi1kv2drQjatA8AnsxQT3GeFk7APT68fdeWS1BLQoX7s1JbjwQMAqeiakDAcAvsf9mABk7CmkfoPdm",
  "key15": "5unGFt713aDLAj4RZGdaPg3KgCyvxxDF65BagxuQTJxrXmHefaVCNBkS2L8zpwgKbSgFxfyYKvFt8Gy7sYvhxZQ8",
  "key16": "32rAjtGSKqjHwuNj543nDjxSsbRoLAECouRH46K5CPCBM12gJRmQLRaziBESwLdGBcjYWWpzTSmDVNrEkaEhv3gs",
  "key17": "41mZhJePHjyhhyAeuT87iLcum2xhzYX15QdACxFouJFRkUCqtZieV2H1ykp1TgvqcWyR8agKAKxQEjHdYeSLyx4X",
  "key18": "HBrSJqZ3sVhBZwwk9YGouAQwr15tQHPRt6cfoAQWYA8C6c1KQ14KSiQECQkRu1PbbLmhxD7iTy5cwmUNFKbBxWi",
  "key19": "4XU43DUijnY6sc2T7iBm74sHN1FVP39YUyo2b1tBQAvCGpsJPFTez3qoHeiiriKEbvSnF14TqngJAm3rzQJRer17",
  "key20": "5EnzuKSRR4bHUncs8RXD6HUribvrw6x3k9e9pQV3znvJgXLUz5kNaiMmPNQg3g6BZu7MzxdXbkhyvAFdEKdcYJ6D",
  "key21": "4qGCUBTqg271NTsL1BUWGXyvSnt6Zr7SHEzdGuqQYZvYhnzLq38iTHvHBn7iCULk6uVkcN7LEua7dKzJXHYtUrYn",
  "key22": "5Wm9xu2EdkEDQFCq2B97UhPwWSZfSmoXepmJnywqy3A8JUB7UwhmZh4kPhoaaRZCTbgwbnZWiewtJqzjU4qvJKV5",
  "key23": "5zMBbhe2nXpaAeyrBXxzAZsyRpNb1zswt3HvAJythatDCxD5s6fim6sQoXYn6bt8sKBNw7H5LwdgUbBSjmbDSxyQ",
  "key24": "Lzap495CLr5pKqb2KJ5kApSzo3k9z4ReJiDFK2U8zsM5ewFNujtvcNRWwVaoFkpZBzv1rNg8upjYkQkLHLy6vYB",
  "key25": "22C3eHfYS3JfgDuwPnhbpUuPV4VohhdTybwyecgSzMhG1wTevXfGCCxSjVSRVftpQJjLSq2oSRDrdqKdQ93Vg9pT",
  "key26": "5NzwA8E76vRtLqMHZ2khEZgyLAC2bPXMybKDAUAfQULruraGTMQBnqEkxJKMoc7FaPsF6kN5Hf89zf6U3ssRPQsa",
  "key27": "3namKaufAjKjaShwUaeWsetDwebEAXMrfgsKqVFCUtUoxALqux1L25LBw16hnSeQYxajWibzCMhhdUUEeiVdRXyX",
  "key28": "295LHGAYTCcYp6QJksdRmvKmtQcCz1NnqSkQG92gGiu2zXiveefFyHfcY1MMm5kzWf6J8ia3PZ1WZgq1T4xCBnoj",
  "key29": "Qbd2bgHh4D8bx8UEAhfrt56P2VCjR3DHmfXLipF8uem5zbHKNao14eoUBfFh9tDZg7XTpnq2MzmYttiiiUziRC8",
  "key30": "2yDL6AExE9KChxPB1ZD1PctMk2Qb96kABscRGGQRtMQU21BnLp2PgR8PW2JX3c7enqHGA883RG2LDujByqBKAmH",
  "key31": "5iecRC7U84Ja9ZJhQHPS91C92QBEzU4GVGPjT7ivYLTyHgmm83c6UeGTmyfBS93oMDi9uAVCoJty6epxx83pW7M2",
  "key32": "5CbiDT9SrasV4rXpxG3trSbWd61mtcanWYdjBKPEzk5jRCJLzAGLsUzLZALAu4phyYozNkt4H7J6ZGq2B9vk8VQq",
  "key33": "5vaFEiiGTeStzTpVZrNdV1vknBhfY6MTGNAxiXhvhHeooiUw1iUfeRvC5ybe69Af7sMGJgJsjksPwLXBQeCcawwJ",
  "key34": "3vDtBNNDbF8edSN2aQfZ8zX4QvJ4AwuizsK1iMq1DUeEpjrHRaHuUM1z5hbtAPH51MsoiGB1xb5TAet132xQaJ82",
  "key35": "3ros4i1H5HV4hhCBPsewnjAPP5GmSiWEPBVcjNfv3Gsrg2ph3dTg2H6wJvdvrYktTN5LB5id6bJ87MivydUXgm7N",
  "key36": "4dHA8Ee7h78sUKxW1MbJBScQCZknjBoEeqz1fb6YSPvQ9dYiJq7aMFVwnyLq7Q4kZaZian9ShZmGcMQfFwiodXxq",
  "key37": "3XCjaH2AmQcmVZFLbSsVFjZuk6d1AstLPGwFZnQ3Wd4Xr1CvSaqfWwaFveXWqiLN4eumiom3MeLWtfxMmVtpmWpY",
  "key38": "48EiniC67sy9TUinnUSMaA9Wik5J8CV6creUnH7DBdsE7NDEJCq7VCtyfUx7EPin9L5bVRHtdsP6MiiJc87uH5dD",
  "key39": "j9AR85Ht6LbwL1CBexHuMwCH5RPFAxRWM4xiQt7WfC9oCM7hM2pVMxeUzzhS3ukqCjwKdxkCAjCEDzHRBBbS1mr",
  "key40": "3drR4x5SH9f4BFjuW9VFX1eXHtZvqZR8efUX7obBnAjybpgXQTPW6gQkrwitoMo68Bm3v9XW8XYMLoTJ5rNJ7B64",
  "key41": "3ne6kywGXuRRTiTGXc1NBPzghXLqiK3WoSf2DsZZWDdJLV2Zu8nW7vb18kkrCrgSGbq6hsEBqFmH31MtafskXKLk",
  "key42": "2JR6wnCDcetcP4xaJFYMpqmUaxNQzKLBZkVyRsLK3fAg5T4Nn7TXFqpiTNhbAtzqXMYXxTDQrrVrr8FYtMgBNCjw",
  "key43": "65WtLqCXDq4Fg8izmNimFye2TTLLh5EuxzvFUgVZRgXsLDEfYxjaXa9K1MSWqEQfTN7EQZoX9sPR2iB2QjHizYGP",
  "key44": "5s1sAxQQYqgQMNk87NZ4rawpyR7uecDCVHjVXWHgGYdXCprC47ythKYMuFWg8hVBX9BeSSBMHf2i2CZcm61cGo2Q",
  "key45": "4hWXSJV8zkV7NSGSnX9VBEvH5rDPXKjmNCnqwbrrKUfDHfSuETRi4VtndCW5wt2S1NN4LdK9zpz98nmy3yAR5AXk",
  "key46": "61ukAZmZXgWJ7bg86Nw9ZSowG5PNaSrHQ1UKfPZyu7TDNcEb9o2hDH7XTdePhCxsbaQp2bd4RTeCNNvke6ooDKcP",
  "key47": "6568G2pCAY9apouDR3F4aVSKUXi21Nvrh23CjoGuBSPAdeZYUuxVE1aZSe714S1iWD4RejsmWHnFTgnzKzioVcPx"
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
