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
    "4ozhtjhBXNhqaoYAJoJdbYe1VawsrqBikHMJLdK2wXkRA9aN5VaW2ZxmG7H4fG4H2m6XN7RZ6w9TXtRa2No4fu35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C47B9hksvKULBPGLMZ4Z6GFjYJ5VM2xgrV6fiUqTzVRx68P8C2QFmxQpHmNV74qRGu669teE9eFQzdLpayz2k5s",
  "key1": "2sK4tf1Nin946uBszqyb1XDvcb9T45AKK44CvnX3SkQrTmxRXcrWV4rYEMFKpwhFq4vPrrxCGfz6keqhGxsJBaxM",
  "key2": "2TaVD9gG8rHAZuR9uv5sdvgN8eLtWMoiatMGcw1bYYmiC9qPbhdGR6j4PPXzNARL4jHehXmjvPtD1MBSNi9jvYS7",
  "key3": "3RgQC5eNp4ykwbLDgz2vaBZD8U38pHcgNg6EqN3ELUxeBMWjG9yox62CBjfuZrBJqPZiaHWHvM4vHT797FzxLJ36",
  "key4": "3s16WqJ3Tnakwa2Ui9HyyZxyAQN6bbewoRC7VGo8WQ8Pmv5WiefC8b5A2YUcz4e5bAqRb9Wh4cs42DJKBCG8kKGE",
  "key5": "42aLC8gSycZsj356V1JBVPNy33wNrHWJXzsxE2m4kFeqsFVQL3sdeXM7NVMzuVotDpPKnMJSP7iWdH52DPACvm95",
  "key6": "Ciu1Wt37k3cnkfQ5DpkyGgccBPALvTHWejGcinmWvHubmpoTRPspVfao23nHKcA75fTXL3mLpLaMU2qMQkPLKoU",
  "key7": "5haz8mQxnVn7NqeENWhV9PCXLJtLbjqHEaxJY9C99PG2vU1g9z9EjXEsZFXvNeJtCzw2zVo6mKvXTvxy38hm7D8p",
  "key8": "4SY71yXnRBMNdSgwxr1rZF6VqNKpdb1WoaxrEaDVTZ4teqsJpEJQ5cugdAAN1FDdFJZM83dZv5YvhCuifiJGjCrf",
  "key9": "35jJmNtsbJ1yvWwYhGswwTiQ8HJxwth8pnVT5r34GDPUxzvi9CJv7UMQKJM9TRZHAoCKFCAsW1hiwXpfSC8pp7t7",
  "key10": "4jNUhgaXhn4iGDV3atYFTAJaorsHz6j5REen71Q1JrsEejwC1SJf6hzSxEqAxrkb31hEnJWG9er22bW2gQZZfRKn",
  "key11": "5bdpd9CiHJZojz4spHxGkmLgXXDdrfMgrtXiu3oPxBdGVk16Qxs3kWPtwGPTSDAbimvY9fqJjNKvmyb1jdSQNDUe",
  "key12": "5oemG5E5cCnTiUHnV5gfxqVM6Uxib9Y1ouf5hT4KN683xHostLjPsNhBAx9EHNN1ehArNNeWqWUW1dTuMEpYgaKb",
  "key13": "4wMyCLjQwWrPhLnGUis79mZ1j1a4SxRNabJcwmxco4dEPDoBScXPKmzbMAxNvaW7bFPJFhA58adnyGDWKYMvumhF",
  "key14": "dFCAb3MX26k6VbniLdPqjU1TNvxBb8FtcJYRauRoeh8We14coESenVruQzF9ENUmCURfzTaGsXCVAyC5giet4HL",
  "key15": "4xzAxr9TXvfm4WRLviiCGPRRsvUeBeiFPSgMzigP9sdypFNVDBXphMqzecgX1MkrESR9BVXR5n4FeRLbSQDzEVz5",
  "key16": "5HaV7jagdkxKECiaWMPFiLJUBPk3fDZWUeXraxajw5G6sUMaWXrdMtUxgEy8hW5XXnnpDPQnj8f3DrDKL7n1Kw8H",
  "key17": "5DMZY6k1TM8FbtRuLEnpiScYPuzmwoCC2oyQm5Vto3Jo3XyxyEamRt6Usyt5Dbbowebx8qhnjmb5C1SfatyUp3T9",
  "key18": "2LTAZpRkGm319YECz5zajHUVWHZgwJcDDJpjgdticbQmHjMVYTATZYVLF5ogxMcu9ngtkthGi8iwH77pZhxHpFMV",
  "key19": "U41sJDFWUPabaLHom68WUMyfRjTzKzMghaKY9WEknobRv1PdhFfgpRD7aUnGDjCF5oAY3mk8C6gJeaPc69QCoRU",
  "key20": "PeT75HWjae4sNwALRXmFrW5WodKRzyBLWMWzhARdQiqjTDQW6KEtTPgM7CJGFzNXGDbNinufGBUp2GdAe4cjdvS",
  "key21": "GswfpRk6GL7tpuRr5f3MDV2i9XhdW1dECchoo2XiRKoUmZtsY1AL2AYuy6r3b4H64FobeEFJW26ic7PvEkQ83dj",
  "key22": "X2qn8uBejuujVn2jvpMtkwHsqikbMYbzEtf3xURvGUAF59oZ9Hpdj4VeTB6Ufkk3cAsQAaGgsXJMXNffYJ2AXdP",
  "key23": "cWJruX52EUnXtqDzQDBcWSbHHabEJzvn7tBVAsqF4PBx52zRLo7EibQA8Q9hffv9d443dAsuuxN1erjgLKtqCA5",
  "key24": "3m5ASQA6FKxVXkFccm73d8MfedExgEcDdCS6gvuJUMZgnDbDKSpwCypyB5Tzx2kF2qe23GsRGxjDCsSiebttEwd",
  "key25": "hDg3ifmEnK4jqoZrANvaa5iGco5upJNiRJ5XyGE1A8jXNs5afLdv6M4ygfFC3cFJvoeVBBiUDms5o6BNTu4hSpP",
  "key26": "5eUoM35kqiqZd9ZtRFJiJF9aNzNeVbsA6MU2kYf7MsEBMd2cpQQ244ocJNJv9c8cwa53ptW7pJJo2z2MAYLjf56D",
  "key27": "2LKWvpLx5zZguzyLUbcrsA1VjGD4DshYPZ5JA1EqWfFqzxgYeGaziH9gLuzbvF2H6zxPoZRAoPQs9njjJfw7PLdB",
  "key28": "3kGCgNuohVJY6SELfX3p7JCELKYdQp6Q4vrb1ww26A2BmMYEc4v3xCPsvdjskswBGm8gEGyv2bXRXZzfcETbDWwq",
  "key29": "3qwBwTPTmxbsza2ZuTutiufRG7FX3L8npH39FpQhEt6gKA5f2fRreyb51AbraKrwUKZgUiHtmP3uFXX4K6EEUran",
  "key30": "5DxQBYjJeUysKCncAv5hxuCjP4PVMSjtXxWFUbsBpzrSaqXfu2keMDMDrpM3pdRqaFDdMkWwSDJ6SEdwxQ5LVPMe",
  "key31": "3RSZBUhcUoaqP8KMxcYgg6mC48S2ak2Ecfa69cd5T5X3PyoY8ktjfZLexKz21M4WooL4yj1wxKQtPRxLia6b13G4",
  "key32": "45U5V4PdTCDW1YSg4DQFRLZ61JqxmpLrWLz4DtQHuxyoC5y8TYrUe7ACf3BcVo5zYirTUA1oDScmypqAzAV7tPWa",
  "key33": "pbBVaiupeQ54PwAaohuoAKUZQgZMrxdiwEcwcxqizvenTRemgvx7iUevqoRTZbmXQfyajC5EG5HwmT5obmdyJfp",
  "key34": "4Sfc6TGydamfcK7mKDXnk3Dgy9BkXHGTLjm3NAFcXaqb8GxBN3uUSBwtArnepYpWmJFV9Rh9jQF1g1YsN7LxaBc8",
  "key35": "5qwu3PMHRSnkDnUmyrS2yyAEcVXPmgz7Cd8ztGMbE8ZdCmfedAHpdyQaoUKDTRriN4RCL8nHvgbGKD9K798sue86",
  "key36": "35phRQhK2eE8RXRtHqQNo78v84kWbvt732N6dgcVa9PAoype5kmbPgLuRBJBnNje7GK8LGMqkR25gdNaYzb7Tt6Y",
  "key37": "3d7p1HExy23whqmJgZad9XRqhAjDFXic1Qmi2PHKAYo6S2Zr3JpPMsYh7MKd9bNeAtuj1Ei7qcja2TqNedHEMDku",
  "key38": "4MDg8cYQUuX7dbCsvZiRNak2m5grxdsQLNTmncLPdSfvXwABRd2b8z4XpEovmdXpoKb24vk6tVydGn1wFEbuPp7D"
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
