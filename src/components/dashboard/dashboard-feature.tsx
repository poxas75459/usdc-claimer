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
    "23CDhwFQUTupwAN4xsawkNhZXk2PUH1XyvKu7pjbDeqAHVcsVY9A89bJxGRy6n4u58e8N7KS8bgvHYF9kgEKPqQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wLMMmpGJ8yjeToGaxF8kkeMYhfuTisAGrTqcpz2aNoDz4hmHCagpbkmTRktc3nd63fk8UY1Qk3uVx47XqBdbNtK",
  "key1": "5DP7xAjJCsAUZ7t88DJb39p9vXf7Rwzomfi6cEaaZKi2vhizZTqVSBvofHRnu8vqvJpgWWWwG2vFWJNqEtBjJb4S",
  "key2": "4N785RDS1XJ7DrffAwwPwReyrFxwLQnBjHuTcuQvYnf2TUByXQE4CZWfkvg8aLmzGzei8BPsrREwudcogR8cyBqR",
  "key3": "4ssoshSvULJ4FTk1aSBG68Vs97VoUfcvBnkhsFrcrXig45DHDaRKKukLMpcRwpop5bABpW9i26U8gXZVggmH68Fm",
  "key4": "2MQVPpoRMPstJUPPbkWatftt6Rs5UM6P73G5zjCXQVkYaruRbNLFGAdu2Gr7pKS51eqW4hJ2Lakou8xgihUMM23S",
  "key5": "2VqEHNDnRL5cYRT52rjaB4umJN51pjpeQ5c3LWaotzJSewKcsALTkRbHP8JauDZGrB8JkgT4qQb95u1vvET3mVRM",
  "key6": "2evcLBtaQpnYBAG77tJjB6QrVWPvqEcPUvis96fYLW5AePxxVAmfPrZaybhtJ3aSDT5HVN4AX7QzSx3w27ELgLNz",
  "key7": "4cUh2FB3xv2tn8eWif6xZAjKb3c7DQNAihx9atnMTsZBGxrATwG6UbLoQ2G8Wa5R1Ms28P7hFGvgw1bp4Cdjiug1",
  "key8": "4b2LGxtkN2eks15Scfq3BxgKYePrRc4qTWiG9ZvDmX3shbdU8CkbdAfksvM43bkNsf1kCySkRdYSc8fQ4T73AGdB",
  "key9": "4iXihHccoWUFdgJNYzaYhQKhLiz2ifqLwFQXwNoDfv3v1u3X6WFHeCzH4vJJeUQdvNfHZX6d4e4V8JsaSuLyjAqU",
  "key10": "4fEpkhdVC31cWhcAR34qxTzY22E44LiVEyw6gPV1UA14a4vZNWXkFq2k3uuJnAZwf1ZbhqUsXuF9nTFe531ckk5w",
  "key11": "3XeGVLLzTKn7x4dAWAWZQssC8eFLgYvJP8HcytdSWeyybaqGYH8EpLXu3Y4hbAJse3cnZWzBB48XwW8Thev849ab",
  "key12": "2RHw56ykuR2i1ws5bpFKBmh8eJ7am2f3L29rsCbccSG9YSWwjRT6M6c2EX2BQed58bmNBP1krvkVULZBQ16KR7yQ",
  "key13": "33YukBfDvpfPSAmD9xtL2dV6si5WDgkjdXYRVxcyLWjPW3VqDKkrXrzhkjBBays8Vsj62mrs8sPQ7fyikCZ7EaWU",
  "key14": "2TdcsYDHzjucGYiWsW3D3189isyeJVX8T6zRLoEQLsWvPUX2QbU53jebmc3p5NGt58M6TRpYt2ZQ9PgKGxKVoxAa",
  "key15": "3Xd3JY9amP5wUrkb3RcpuV8MeozyRWyfQQ2jjiEUB7p4v94KR23ejUvhAF966UdfDXZ77gA6xvq4tqvReYV16hRU",
  "key16": "STfH25FMvePMKnYgc1eejSHrj8PJxhfZRqEhuHhmx8oJthuJJFEBSbz6GwbGicqnMr2SRpC979sCTfTuTi2FXNp",
  "key17": "363XRakc7vzbUjVjtJkUc7o947osR6Yzjb1Nnpw1m1eAqp41wtCqT8VP65fvk3sH4hBm822RtK1ZEuUxykaJXf7K",
  "key18": "2paj4gyq2EbMWaoJUQSQQ5yabxnSVtNxx4HYZ6JhEoiFRA9DxvibTMWRD28p4ME5snKjnkniNQCN96vhw4JN8WH4",
  "key19": "2w574Z641UxAq8EHDgZorim5GjdkAKsxZmzNESxonaAujUHo77LdrSmZ4rzMf6XugYabGbyicewuckfK6Ftj4DCs",
  "key20": "2Q1kwe5maPHtwG8aVZf9kXnntDcMrFP2A8YjZc9WnTPKYQRZJZE1oTSJC1B1RP1yX89UfbHA32sZPM97kMzCzQCW",
  "key21": "5HY3pQVt1u6zAUTJnPNddKanJYLh3CG4ZrY4PwuczfLom5SCXUNJyhiewADxtbpHESUMMYfHrSiXyNxikYMtcgm",
  "key22": "27KjHDJP3dVBCVxMxN1ZXpmq4mDiLUqurFForoMHYJqL6CRPMZzrWonUqasgiL6WmgRe5GxXbhDnVN36nEsgFGRu",
  "key23": "UhWbgqEaYkvHCmC9D9aikyoC2MXGeGPH7ChBwBxUByJDEAQYLUnbDoDLtnDzBPJieQb4tTLnHpjwqaLpHrgntC9",
  "key24": "KpEXo2h8QrPxoqKR6KUzE6zY61vp5UAihTmeGvLBg7ASHKCYdLTnqW7nWsjdADDj2MYAfehKJGgFGRChLThuaZe",
  "key25": "4NLT71HnnMUVgVFigoGkGfWYxozRfVT1u95PCF3dMLw9aAGxbspSvs4TQo2Zzy3Ne2aNHLTkZwET4FEGiXbu68Cy",
  "key26": "3GKuT8pDet9Kn57v1vrCjV3F3rKvfPbYQK8nTu2ensFMzrwSciUv7gFSYhpaJkytKQCthWqWQ8E6ASxDLJSoRHAR",
  "key27": "2GvY6h5amXm1kjPTFPKMZnYA58bdD8Y7ZkaX7WEEsjY23SsXPwFEG3cWj278jLiK8ynyYZYxUWdy4HJ5J8VHh3GL",
  "key28": "5sTSGNNWQtA67SgrQMvQajRZ2GHkmSibCsbpvvGpJFCxA7GLKWVFaxmneqNJsSFQvuAuNgCWoinCuVPBebQe1PFq",
  "key29": "2iczAAceuvGiSo4c8aZVZVPAu8LSN3aqsECwrvxsVNqdmYnjDWn8nUTWh9sZPvVz6XzahwfCKUWmPTdeR8iMX1Np",
  "key30": "2zVBE85tSNrXpjsCdF8fFUrBHCWCCX6LBhxoKMiVKzeWsEpURSgNhaW89eQWcgTFF6s3ADHbhd8jdPAEn1FpyRhk",
  "key31": "2haHVDCq685HdKMeFjZSgsUoyYfm2z6djUJygAgvUDtLLBPi3mq81zKCFKWsQbivJfgXNLwqNg8osZnANXgQAiJB",
  "key32": "P1FJTat1Dp61ifdT7Brx8jqbX9LVwif3du7SsR22nJzNDJA4gQB8rJNzmhDDtvjRX8PZhe8JH6gW3khv6Qq6Wi8",
  "key33": "3baEo7oQZTZJeFkXHZSDmeJy7MA2KTAFT8zzgriRpBerekQFemVQDRckXEuRtUwWSXg3kyr1YTjM2dr1k8DogaDv",
  "key34": "4Qzf2hddrMcbZBEbRUaxgN8V92JzNv7Ka3s4XXWTzyzg8KkyceW5F5PWZKU6h85okSdgJByhKYXFgyBRJi8xDdW6",
  "key35": "2WLrEqwid4miFiouos4TP3bCoYoTgkbEz6QY6LsWz1gd1N8CtwZwxuiMTkdzHK2ft7W1dJZh1XLYvmrkaq7NFW2z",
  "key36": "2Xn9Hg5gknRaXUhfrh1DdBHwjxTykaqenHvhyx5Yc2us7E1jzzK5gAS726ULbSUu7dqXjk97pBkAdfptcuX7DtUV",
  "key37": "28S3CfdXQK9rMoUjNvGkQVTbCH39yW3t9soTQizjzhCv7YFxsUqoTJY4vTY8QvA8TQgzkmzhVE7HepK4pMJCBwCN",
  "key38": "2Dq3T6EHoMrKFZDFXeihwffpJhUzj9gA6EcMYhhYGNQdCcZp2BhvuTGRpUob2BznbZhS3LrdFjbMLsBBAL4gJPvH",
  "key39": "2YEXqVSe6FHRS5evHQhaPZD5ig4FTzXS94ACrzsDf7xWjNfTpbihBy99t2os32fi9Ds7GtFKySrGH9zhWHYpMXGz",
  "key40": "5F6GBauFUR2XpM8RSK8bgzNENdg6xYWfgTJLwTR3eumrzgxrKf7pLsrn9ugUW5cj4QoBSec8TXMKPmW8dxrGHYEP",
  "key41": "4F15vVmkf43DqkVbsQjjq6zUt15hAtSz1wj1cjxp9jVxpiYJ23b7qtJKD6gYSqoX2HLZanskbxjshNLBKFB2m51y",
  "key42": "2wwM2xQLVGbHP5oSBfVW37UgT1MqJkSGqMtkzdxvhsDfuWitrFmgEEEyVGYJ5q6Z2JfRuSNT6p84zm4k8dwJtHqG",
  "key43": "661Z1D4P4fkheJnERHHjPD3i87BRa4BiRN1RSFYjCGh45GB7iT6czwXZh9DkyPHutvVUdZ3zrr5gfFeFiMfhn1C",
  "key44": "4CYk2kfiu2yDam39f3ayA6g3u2gNtYyshdMzsG3qHG2JnGtkrb68isTiVGvrQjHFQrMPkwr2GQHNDiopuZcuUT3Y",
  "key45": "2sJ8MX6bYWZGrYALRmLigSdsQBGDbB9VjG2h6en3GrsX6VD21m59x7AiQdDFLdVhLL8kmgMjBTZYtqTEd4s5ie9y",
  "key46": "nu4rLP64VzBj5BT8vfWTs56xfJUoJY1yFQkVkeGA4WTLm7wP5cony3dzyRpydJiCBwGQjxjRPKGERN5NrFdvsD9"
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
