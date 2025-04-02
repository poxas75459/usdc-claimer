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
    "4aUmbK9cz6PRsBWUja5b9FzRn635bS88pqvk3DrgCbCZCjFufMz8dGbD7WSMEWJ1igmMYeTN1qivJMeGNjDv3wur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BZxkaeS7WZWF9T4e3MDttv6BgaQScPTN1KRin3GcoEyuoU5HmfCWKFWgYPDj13e2dg49VQqxhWm1B49nk8jMTJq",
  "key1": "2EueQoygTod29d2JDyExVVzV1Nhe7W4DQyowFCVFZgrScEn4Quam8KgEqFgw37SGcUDnHdVXLhpuerjgjCZPdAdM",
  "key2": "2ZpjKHEUvHTRspdtHsLQzhJqpXh4KHgZ42SBPLNtpSyMHBe4Rd4DubAh6Es5UubALxhCutR7Qb5NDh7LxAxHxoEi",
  "key3": "5Y2pyQ2VS2ZaakZmYKLBrEturJgMJYLRYtXWrgng2dCMjVbqBpu95zmET2x5rvMAQRCY9g9EBeq3DSH94GnYoBpB",
  "key4": "2bP9qe7QquQQCMearCHqzdDTeTzcxpb6aUqcxCYEfKxY7QHZT6quoGxcw4tnbrg4UxXaPketpKRPeDGGzyyjJerf",
  "key5": "5hyeTsCgjKZi93tEi6fw8jfERWNMhWr6APdoZHXNVaC6u9pBiHicVVptzQES7Qs5zm2NBfx7PQMcCE5NCHkJzSBB",
  "key6": "5o2pzptuJU2nEtK9RcAL4RpqHV76GXNynKN8KTvRytVbQgL8V9a7VPY5n9MmSyjEALcuta7gzbdvDcTSDVx6G4uy",
  "key7": "3NvRz4D2JLiRujPRGdhAZamWwrRsgFHreh9xez4HNVwtHJ5fDXmpVEfASnPjPzGeh6tf98p1QzuLeakCWvutbZ9h",
  "key8": "5WNYhctEFtuJQUt9am3LB2wrU9vpmcKoUMnuxHeZmMSDo1CURma5Zae2KS9YPcASf1AXV6jkTkvHmTBwFBimB4ir",
  "key9": "6BiDzzbrPKaVMpAj8tHM9EjyXdkVWbbDQg1ktb56JAUdWhs47zL1mHRB8hnbnMq3i8yEJh6Tdqgwm2LRY3Y2hhp",
  "key10": "4LXmECaFxQy7FeeZdwAz1RM7PqJsUWihYNUSFZH788o8VXHTvjaTPEz7m1ysm3prmwx2WmgNhPVcuBfgXf3id43m",
  "key11": "3CSite1ZihQyZRFnXepUwXcBneiqCKg1M11e52zrgf5H6UpfGxfQUgAoKeY9E6B5EDDw6dmkcu9prmNNSyU2tBKR",
  "key12": "jfhGPgsS3sxNp3ofBkxFZvjn5qzELP3ckojqajCGZmu53Mp9F1473Guk8VoKGT91ozT3gDHbDekGgaUVZ7nkt8E",
  "key13": "SZu5e5SuqyeLmFzxXiTSNPAzsVx5rGF9nTY22Vh8q5eoPyX2PnRfJAof2bT6ZNnKMxWdirHLMURmy4L1zyGQ2By",
  "key14": "WrG4mwK4sYtj3vK8C4RaNPc5NDmPAM113yMmFQp5VMfR3DsKgMasshw1M1eRdLcyHUF4Ho3EDReopYaq3PeC3nR",
  "key15": "5XpEpXqL3nKrVC2UcPhrKhrnHbjLzCUgqREPEQ7oE9WXxLo2Kp4W5ZE9ezWDL9CFYaiL7svumRCmfiieecZsRzcF",
  "key16": "2EEptBQPbfqxNjU8BuMqS9nqhuj86S78W4CDVGELdRaLePdQ3aAViTzfE56LeJsdS5EAYqRQwgjPpJbz3n5LRvD8",
  "key17": "5vZrYcfwq6Y8uJ3anLe2eEtTYsSGGntJx6iC3YxHFjeaUutX7nEUuy7L1dpMr6XA5cmoeyWfSJyGF74sB4h1tK4S",
  "key18": "3ZgVLJ32qBUBLvNbcrvmATFYAssjTKH4MZN7cfNpY6r1vEfNbdjEuMjgjGQ6FZ3n2QWerVs6Qo4Rq5CwtZep2Mua",
  "key19": "2rMt5mzmnPzaCCB7qoLCUUyVbMBqv84KQtt7cqHSifJEgWCFRrmHS2xGgEgGMcwwiM282NqaXFdJt7oSYsZBKhm",
  "key20": "58LSim8LWxGRg84rNUnGos5PiXJWPnfXVoiYpzTZz6Ybt6DodmSQtpg9bbR3DJ9NPD8XVNkA52dJBLZ1p2fE8a5k",
  "key21": "4DEDYKQ5bZimUqErSRZmjGapcYJAAGCJH9Q6Xsq791RoUYYynF3kF51Q42QQXtgrPDcS2SV5QU8xz7U37utn16Vp",
  "key22": "xesCH4js9mVbnN3CwUwjEKgKQX5FK3bjX13MYuJwFhYq5a5sN5bXELMvGbuu1eLPZoANZ7zMyH26xvQw6HxFVH3",
  "key23": "5zziFsiAgt2WWHNrN6fPHj22cgcBmM8Y6rRTEXMNm4WDoetKvHpCfkADKVNT742r2eTd8zBotrasSxS5bAWDw6Es",
  "key24": "4aZZxD1VgvGLyzWcAshyCmnnmpLgLHc84rg1uT8q2r1kPhX1yT1USoB3SYraXwQzVK5CSk9B7DgN2BbXZQcM7NUx",
  "key25": "4r1B31nsu1pe6xPXBUzgLtjLxPHgXJxAPK2dyVEpwh8f7SoUen7wS6LGFm9yeWPAtrWqFdZuqp4hvh5Lg45WUvao",
  "key26": "39UboPKTqVQdk8UrtNez472p267QJaWh5KrEoS9YrSQpyYqjr8RGS8NpQFGSGXfg16mLKqnjw7Z9aB9c4zSmBkpf",
  "key27": "45BzHCT3mPcYU92XGZM2MA3mzDHws8qo7k6PjTqBscKvcx2GeigDaTvTWmsQifNdd48cxUKP9UR9YfxsKvTWcmjm",
  "key28": "2vwBi9vrjcxikRELTTwkieYtyDByb84P23FT5LRxCVD1M8YsqZ4PQ3mwvDhaG2a3PA2QbBhuKCcbN2uGwtSC6CgA",
  "key29": "2wdfgNmCCMu3y4RmBRYvxzYPcm7yTbyJdwwExL2mdamPr49odsnr4ThfgMyFqM1samSJ7YJz7FVySqVBXy3XJuzQ",
  "key30": "khiSVSeRGhMQ6Lc9hLXR2R7pPFnoFodcSN4hF5ZuVxZCWp6qcdxBia8SXBvcdKvMQvSXJGDsk6B1Rm7kLq5UaWY",
  "key31": "4z9pe7q9PHLPzFPzxAMS8SPGELkFnzmhYvgR5VksnJhuonnsVLFSmxFBpd4XwjLdrmjiGtpsJWzyqKMg41H6cWrr",
  "key32": "4Brqy6mTbfF3Q6pmTkF9obm34PJSQByzKoAiGCBFs6NVNkA7J6kmwUY1qfomnRu3sYKqcQfwY9t4FAnMLwCTXctc",
  "key33": "3mtejqz3Wa9gcHmGKhBESKfQjx5E1urVKsQ5RkZfWUjJL3MfPdTQpaptnamQFS3nQKZ78S68zqReT2LnisnHde4X",
  "key34": "3EwoaXw8CvN5ZNF6ziXC6honxSMgkoFeUboRFaQWpHPWUuux1go6r5ZZv4WEWMEJ8qNTDwdytnveP61KVtWXMWb8",
  "key35": "cAiDbfXZkPrJ1C49pFfi9rTNbGBoc5mq1RThFq78PJxfcTjEfyC5Qt3GP71wi82m2JcHszS4iJREso39NjzKxjx",
  "key36": "2p5Ufmf24URd2G53EvCRj9nSsfrTLQrtn65ypw9gTkAazSFFpddVR3PA273dBVXSdmFaDeNqGYccFm3QpjhQ5nRf",
  "key37": "2wy2FQTucoYdcn8gCcAVvx6f7CUkrjMPHFZWmHuCmTKe1DCFk2Z2A19BkbLa3ktW1FYim7v2MT9vi3b7KFe7cK8y",
  "key38": "3ys44JeDJMRhVK6T1wDP2jyUY9RnkJKn4j589EQ9bZqFPR7j6sFPtgdR7PECGAnPcW9cmtjFTV7p4E15FU6ddPRa",
  "key39": "2CwT4q7BCTs8sXc43MQSRudMiUVxgw7jGYmwYFTVU7RTn8A8zaQEFKCtYZz1ZAbFDBG3fzuS2hJaEy6MDNWvv4uo",
  "key40": "5y4kPai3NTN8K147SKEWJCR28yAzCBRpKcxKcW21k5MearYpSQK4y7yoLvUzo2afVTTqSXtMxEb5fk25odtsCEMc",
  "key41": "4jfa8nJtMuT1wzwhoiotHDYHPzfqo8oeNWWLdH7kgKUkWjsdWaoSgt43PwDNCjLcHEPfH4psXssdmmSiaTL2KRbU",
  "key42": "wRkz6i1sp3NJUoPtMDidjkdaAdchiT9Q17t7nA7vc9m5TKWXfmTuZgt478n7Tv8AsJUYH5EHQQhFw4DbctyCfAG",
  "key43": "xqqgGw5EG3vf8HfRdNjQK4V4Ywnou2UrSwa3DDivp4jagveM9eLfDXrB2jqQ7EYbaNvFvieNT9zy7DM8uDuH12W",
  "key44": "5VqeyS9z4fegsz4BoJgGEB1nrzRJu3cURegk3XXsYhRTMf787SEtMbPC8fVBTVYw6rNoK1F4LcEy2FThJGj538Ut",
  "key45": "4c9k5rCQoVqT8sJwgedvsNCexA7fb29mkzsdF3rDXioBo7pMQo3dsxi5M5v3LVCssvVbXMxtib2M2yHXRMFbMfY8",
  "key46": "48jsYGLc8wpZLdXfpRgcgsAuT59FNWmhxGRyDQGmcqxa3y9cs9dx6mS6X6YVV5PZDQEi9QznRjpFTLfDVmX1TMFa",
  "key47": "5JXMC8XVtr4rBaiP2xHEJUQP2ztyhatLmkgYxsdZJeJoYkuUJYTzgk15UNCfMSLhvCwUj1jJ1i3b4ke3EvrhNtYX",
  "key48": "5expb6dzDM7DN8n28j5ybDigxMMDxVRub4QVa7at3TnSdFq7nzb2N5TUmWfxVCoMUaR2qxCzsLr7RKWA1Bw2uxYC",
  "key49": "5xCoYxvjQbQyZWp2SLfpHNrc8JYarjKKMcVr8KbZQCVkiYffSMMxm9Smu82xkHAgQb9n6cogH6rsBQbjd8Jh5iJo"
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
