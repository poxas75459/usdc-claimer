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
    "2UDZhG2bE1JXwcWDF5azUxW3hXw3uWz7ZNArC4H7bBP9GWoGXfQiMjGLVDh87g9DMggisUFmGXh4LcN984QHBgJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29aCTA93gHFcCTULqREmy9HCyozYtGpVVNJH2S17LkExygUghw5LThunreCtezYhta3WkX4fxnsELD8VAKvgDtei",
  "key1": "2t4iiAhoPf7Qn2Hexxi2hrKPHH12oVXxe6wNXEqd74cuhnoDkSdNunomdgJA41kPQMREyE2BKuT57U8t9Km8kqu9",
  "key2": "5JMGjvytEbpubivihnGLhb83K9nLQZ6L5eRkw5YHtvBjBfR9aDqfB6Fxw7WF1N5SvorsMJTLesMJ5LV2pQ49BnKu",
  "key3": "4Mss1KX14Kr5qQAmCLuGrLEyjsdviwm84X8Z1G6JvrxhX2CL9CjUxdoJ5gvH5f4BKvtBbsQY54Hfg4GtmLrdoPnv",
  "key4": "PahPeWr5qhXkeEKRMugh4BvX2yxUFYWs6vixRErAfCQh2FNn5Ntrfjr6vtcBefEnpuZPZTTnKBE21kvZEtat42b",
  "key5": "4C36ss92KzWS6hiABCebX98VLmTDnLzWvLtZSDpSQwa1cNPwmDptpRJjy7JaBq2iqfk3aPeWmUgQ3a4AtBr5J6zf",
  "key6": "5tK6wCZeV6DPkpT2AEFmRQtVdFNVGCinnU7TTG5R9mNmojGKB4eZ5DMhUxPbo34WLQ29a1nE6TqFZNoqcoDDWYJ2",
  "key7": "TRd3xJwMfX1Za1XiNSekezgm5MSDHGWmq4KoPnjZBYT5ZXwWjFtR8HPFFkVsWai7YnGPsunMyAdfcDKWxjk9yAD",
  "key8": "5nnbWKCD1fgik87N8b2Byd7DeJSmoNCXehsr9AgbGP28jztp8KsqoXe49AbGxobLP1EiprqvXy6bngFyeTEN7PmL",
  "key9": "4KcRSRodTTYYdBSHurPjePYZuGdKPRdgHBQzfCgxd9KTVrM9oy7QJsaGZRvrGcSMkiD59zX5UDEAmkbfAyRpypFg",
  "key10": "3xbyoCS7XBWfWAzArLg8EndnthaFvKbUMhDub3Byh795gCpNHqarQMCXNZubPdw5ko6VGuyC6NsVCfVqPPQRokb8",
  "key11": "fYU3Pzvo3TCjd9YJDcC55bRtgRhywbkEqct1CKSaxXwpMbrSepFpu3tknhM9dWxretQEXWvqQYHdaswSRJsoTaG",
  "key12": "LoQKS74igoi8TZxD2Mjvpvu7QXVWrwryPc63N3HfZAqWrwEg8xyrVXDwNAj1zZbN5H4nqzupeF3qLDK2Ms7AhkQ",
  "key13": "CRa2TNgJqgQVcVSTCKG3gW7rLP5tN1isB7KM1rPfDpmXJqXyCH41QDBMJiTpXS61PXGi2dQbh8m3KnSnUNa5WDH",
  "key14": "3msWYJwELRPxzkwm1yfUTG55JAbLaRBETNriirYH25WEatwM69ivBmJTCdDc4V3fgF31GqMCs9aYD2szf58mqfZ8",
  "key15": "2ADd5vuSJdZTxm6PtTeuE6Bhd3Wq7mDMxuwLjxTGWnm5xADHmfZZ834ragD4PiZmpPbAnvJDTXPjA9uZn16YGS5q",
  "key16": "25RtXhmArkjTBSN2rVMGJiNa5tU6H4SoyLN9guP5ksHFJAB5QUQEAxsdH9wkUACSr7X8HGWu1M8uUs3ZZGyeDbUW",
  "key17": "zL9RPZL2oirygpCUJAzD7gZtisWH91oJasJs4ip8UrHsRqDGycAXc2YJePB8Zh1NJiJoCr8HCEvPNVQsTzxPn1F",
  "key18": "2tG51Rrn8vAdRpp7FYUtNZ88UbUZceUpjXLKLHZp4L1dzcrsVuxnNBqEB28rNsnZBfG8FRS6WhpUWqzMFZgd84D9",
  "key19": "5fjbcX7tndK7df5GQ96SgVmxCr7XrS4z1P9ErxY5ybyNmnQ2tyuZuuUiVU2ACiMuX4pRzzGmZAiuPyPFzBpCt3T6",
  "key20": "mfGTYerYmvbr1KFc1LqosXvJ4FuY4ySrRpaQo4DaHNLqLMZby8JRhbREkTW9iAbUZAvKn5aPK58LLQMpnjkz3yC",
  "key21": "3mRfF14za5guDicW3FHHyo6GGzaHA1otH9CECpFhPjes3psbXXsEXbjYcSS2uF97Gca474uVW8maq7SpKuAJXMY",
  "key22": "5ezwNyu8YbQSpbTkxNQWXhSonxg2Q7fCSRFqgXQekze3vu3E9Ek7XD59pe68CasgNujiPVfso7WwSnTGVuECkkJ8",
  "key23": "51VSr1dB79Y1jnd4rwFNj74tgRPuNpP4Yv7pGFeX2H15reNusrW59Punhy4f1UrqHsQXZ98cjY3pdxAFBGuowjTK",
  "key24": "cwRqkqwu4PwTWnqJ7Vc9fAcosh2aDW4dPC9eCj9kfgN95AEaxiJomE3wAW5UekyUDkcJmSVQ9E8P9F9gnSS5AM4",
  "key25": "VmJNYc1RiJBmRzvtrJooefrSYfocTw4UjYUvFGcBNdkEQoXtAh2t4ZhFigHiZdohDjF5RKeWEA4rKchAVzKZapm",
  "key26": "2PBSV85EbKk44H2SspaeovG1pqAwoYByoTv3XWaV7derYeZ9BEzHjszSedY8BMvgXe254CLRJkSh9bn1DuBGHEB4",
  "key27": "3G6CwcnfsDpd4Y33xsGLTr74obQFVaMFX5zMBnxo7fcN9Mqw7zHgJNteJ3J6FYgY6Zg6N3yNrV8bGiT2fjyFdryS",
  "key28": "62KnFXCEvSwEG4okfqLpgsNVneaQqt6sKeQJ3eNJUG8AWTVyYJaKtS7kcsayKQ5BtM4j1azp4QaNcgDt9WxgMjFL",
  "key29": "5mP59RvobfDaUVWJYAYBNvbwnbhNTMuApRZwdBgB5SoLWL8S9A6EcpwPhhHafzdmYYo7rPBMmrxv2SBsa2eKy5RF",
  "key30": "3upfArGks6LXr76YDQtUH8x7xRGBcM9DSQJ6WtqDN3oioiY2NEsDqvfVgPuNrPtpFXJCvPiVzSCq8i1QoctStcrV",
  "key31": "5SHJuq6fPw2K7Kq9sNUgbKt5R82VxnkKApydX9groSi7MFFrwGtz4UYwrtRRWSaMXaPv2pRk3kuw5EfCKNaXUpwS",
  "key32": "28B7QgJS2sfEFFUePWvMcHkRNsaoeGnHTnkhuZT7ipt5cQzVJZRZDVeYHJS4ZjtEypu2qTAkv17XZ8CurRQme7si",
  "key33": "5LnzxohBspNxdMgUB5UK7gnqPKyiXKbgXsJqWmzsWgy9jGwsmHmuJovrncBCSjz3VbrVXSwJ7JnQXyv9BgaisGEJ",
  "key34": "4WysY2ENf2BJhYNDyy1xNhNBYe2k4RDRMFx8DkNXtZhFKA76EbCe3NdVscriXkARj2v7XdwetcAR5RpQpkDqCN3d",
  "key35": "262LgxTQnrL3PkKXUMfvSjr5w5uFB3LDhYg1Y7nJo1FrxoNKjgT6ePR2oMzjBjZdfaoF89qkNqMNAENuVHDjkEi8",
  "key36": "2EtPWwQwqgoK1U25nCSGba65noPbuc7eEmnyuh4EGuUS49Q1EYA8E6T3Jrr3bGGcDLic929W4Y1QNnM6snQo9y1R",
  "key37": "4YkM11FKoeoeJCCKo1LJT9RJQbAEMfEhMGz6VGGNsfgtopNhsRkLNx7yshBKKKux7WvpsVeeSEFbzpAJYsag7q5L",
  "key38": "3uAeKVS2zYGcjH8vX4qdthCRrWru3hAZ8TEryZrhx7nZuKAxZGWZop99zqjzGTWe45MFgMBD9HGPGtvFL2Xrqd4k",
  "key39": "8vyrTtfVLR1ZLsRaB9EmP1p4FU8XqJgBobFf9eeM7A9kjCVVz99cVjGB1VRTtDJQMJb7jLe8Zc9x1MCvmqD5VUu",
  "key40": "3Zt7NTx1Ydw5y6tgSSy5rPhYgEm19Vvmwt5crLKtsgdNiBoo1Vs9bJRkMiLpgKSSJvWMtrRWy15aipstnsZFDKDB",
  "key41": "4ZGWPkcKFKzMY9zSgvtpvco9eNu1bJmjiHNX5VCH5a9sSGNg3UGfMHLeK9tcYVbJALfCSRsx4T31JvrKjt79LqKJ",
  "key42": "521W45pC2rQnbm6ruFVyKfkrqPDCRkawaUEJL9nHB2ekV3iB1CsA48ijPZiHcCbF1X7DG6vM9idGcBUV3h7ZXrnY",
  "key43": "4h8fnSkFRfmPYT2s3Bn69ddweKwJ9AZELng6nUcSi4qDACAFBEVxxwYtp4cmixKDZDKQQzaFinSndZcZRK1d3zhQ",
  "key44": "cKUKpNMLBdW82KHmWmNJkrkFceHGzzoPxAzJG9JiJg4BkRDqiqWRa8uJ1HK3soAVBM1Vp3GUvwTSbcgi8YifTqu",
  "key45": "3LnTx4N645ZxsT5oCvwAgsyiUeQMCQGYvY31jw8XyvkHS9cz5y1CSt7MtpteEbzUGTey1qh2GnVDbaa4SCdREYVc",
  "key46": "54qsAbEFNPwvE19PRDnSaDbxy8U4BM5fnoX6ffi345n7gwAMgkygRdE1gz32BtPa3cVB3qkvX4aNLGD6vqHKuGJ7"
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
