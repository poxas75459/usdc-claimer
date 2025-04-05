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
    "r2vwHyc5LvAjfy41vFfd7EsnsLUW8ZPEcSUB9Rmfu6nQTb49edeypd7k5kBUTceaKZg6BtkD1PPkdXiyRTbgAgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GdU939nreSCT94S6oUufDrhKbtN4rfSZ4SaZ6qBvpNaag2dmBZMEu8fB6KhiPhrJxxJk5pi7d6oakMw5A9YTTLF",
  "key1": "Umnh7TTF6HeAZDt1kZDQvzaGDFDuqS1B54HjSMoVHCmY6r3iAD8rGXRTDAaXHNsUpoR68rR675o2BnWYkivaTth",
  "key2": "4gB2NBkKDPPfeWoMWNk9YGnyaeyuGP6hMFW6LYgCsGevjEsKST4WZ7M44Gcn128u7LNAd5HT7GA2PWp61aRToXex",
  "key3": "651RAGFmYa899ru7nhPfcD1wZDvU68k7eaxApFacN1rq8CUnR1GfZcnfSWxZuXDFq4V5n3n5DFUCTjHJ2NvNJTAq",
  "key4": "4hgAnNqRj8XCkyVqpSdHJrByTi6sgot6Gyrs8gWmcV238QDErhoyDpNMK1xK5hk5dnqmx1gh5iu5KCBEYBssfce6",
  "key5": "5LDmw5KJCgJNQtXVbfkxzGhnuu4L1tA226xQS6SXDo29LfDJUi7GSBt3ksX39kU58L8GWyjRFpebgNSVPoxXPJf5",
  "key6": "4hDBtMF7xFdHpiuWasKPiDYrhoxb6aaoSc5SsXutqaXSf3pcyTxdEtd1Jjss8BWuhxgpPijG9oVRkG48FZctM6Kp",
  "key7": "5wtJ4mzHxGRAUNAvZf4zcPTyhDJNdoBTv1BfUUVmgLhTR2JfNhVBLseQS43Fefjs3gbb5pHRT9pExAt8C9skSbPF",
  "key8": "hFCWBHikyo6K9Fsc65KrDrNWYDdqDyRFNV7GcaympA8xJjbvwGAE1Qsg7rmjkrFLhBthn4e532pcT9onccu2rje",
  "key9": "3S6Jex53TSvMgUE9QYcNataPu6tA3Uwr6oS1W1bVddXUD44X3ssF7YUn2SAvHs8o4g72Skry6waRxg4K9h7GMDzF",
  "key10": "53TyutdK6hhpgJ9JE4djpqYFPDXSiiPQvrBaBuQ4CC2kw1W46nueEP8pPnw1BWKNyPoRiaA4bJUe253tyusBVcEW",
  "key11": "3b2ZmBJDzgk4ddEFVTTruokZhpA2EvgQpuW8vDnFeuzibpLG1Ddcxwz4o87EJs1erN38VArEfkuZcwtFtZ5PshZt",
  "key12": "4H6JH3j89Q4Zwhuv3Vnc56T4cR74RMJj5Z2Az3poi8H3JBjETSRE5mQRW593xbgPKaGDy1Hj2h1gPW5eFVBEStXv",
  "key13": "3DieQ5SYnwFxT6FRBAJv6uincSR22x1Pv9CzLEMnL6MEp8HEwTQReBR9hhUx7NjmNeRQrQpGLnCWSy7fouPsNdf6",
  "key14": "4WtuRH9ndz5UMf96gpxChDjC5ghH5mykw8k6SaipEUDd3rCs7rNLeL9FiJGr4g3MUxgBaz7HsDstYkLGiZjiqYvB",
  "key15": "CaAMKamjMMHhRKoHP4nSLvorz2YqBmLuFQ99Wc3q3a999sD7w2XqJLCaGwGAjBzAAu171cKzjUKAfVXMbpQhom4",
  "key16": "1xdxMNpcJBnqZU6XZhfEVAxQQamRWNVaz444bVoVAiL4XwAJ93kdCcoZzpYgvqBioqwftRBjwC1igSSsnX1LhWp",
  "key17": "2JdZmuo3GMtkmCbWGK3z4A8WLaoq8nYh6g148K1ivxME6GfvW6NrzYhw5pQVsupSZQZ69a6DmUtNMk36zZdGCZgT",
  "key18": "5SmKHcyiE8j95tsHcPuCQScedEHuDTd6MKkHcDvfR6pVij6G6mJP76427RCcip4DEykv2q8junc2kFSmCCxZ9xFN",
  "key19": "4TFEou5iDpZtAGGKQRC1wpLycNSRrF7rFiX4oAaHtz8eVR13TFt2YtEkCUvifGJW4rUgQibC4mUWHaR882EiSujC",
  "key20": "54JhM6LVvH4Ee4vJgWz2cdTL7nHfns5apsNjmapJhz22gmH5fuVFfWgizs6KH4VTvyayDFD9vZbjS3U7zSZ3YJEu",
  "key21": "5US3wwjKiaFkY4t6xBnzrZyrBV6dBxM6gH2ye9pgg612M1UyfcQping7Zg3bBNQsTLYxqrVvReNyGDcLMUMcSXJF",
  "key22": "4MWsYJnzsRuMbgUtpcCoDsTbBZ1W7KLBdzpKkYiFmMWotF49SPsrGW36Yi3ZnyY9xogf432S5jHQPtb7oJEggpiC",
  "key23": "3t5FN9hfbiadL8Z4FSadB1tA2EU5ahYcxLAhy2Vik5hyMjpqqqu6keu8qzTiEHLxMmz4Td1ECgvtzfLStuJD2p9g",
  "key24": "5dg7mRu9PhH8B4vs4xX44UekDzD4kUTVqiWsDJupDKSyjgzjZJkoBXYGLtqhYV5cZRxjG3uTLEHNbn6BRxpmeB4o",
  "key25": "3jxYd1Kcb9i2DfurSaGWrySxN8xnG1TEv23tasP7iBJZRYMEsg7JhAscVfRR6n3EJRJ7zeECLE4FNaskJj9jZA2E",
  "key26": "5cw1D1NLbPZEgAfR8DwXSaZsXfoFXCrc3kExgvgfEvJ4LBCnGSkGJVvjWERpJisMn3vEwhxdpe5bniqN2Ct4xDCJ",
  "key27": "4Kkjuz2TC74M1UCd1bLWZF3SUPQV94F4EC6e4PUSFcBMqmTauAeW7hsRNPa5fpR8cZXDfXPv4ySnVB4K8eG9whvJ",
  "key28": "4LPpy8rLn8jCZqTbY2VSbxh7SxmSFakZQSCnHpNqJmHHvxEtb15DeZyLTEdB5YRznmKxwZNgMeihGHhxciGMpVSR",
  "key29": "FGqFNiv7wrL5jWeh5bqn3t31Cv5LqSUUzj3PaXkWaCDEwtEms3LswDFYasDLNeb9tbzcFeHXpd6kxqn5UYYauNa",
  "key30": "E5djyzuwMDeezen8HpSXB3G4dtBdYAGU68mSVbZ3HRprHvC6c6jLAqGbtPeSbPb9rePS5UeDxfc6vxXT4D7dD8Z",
  "key31": "5Xrts9YqSZ8sku15Hraf8zEa2S9nwypH5rKTdPCsKBfA5DT2JNxqRmreu6efEcLE7vmmrKiS24Vz7EupxwsDbtZW",
  "key32": "4eZ3oEXpBeUyQocQkSU39yccH3HGtu27fiDzcFYpvJV5MQ5SogzVzeg1LYh8dGxAuP36ps5BsRy6tAYnya4Eqmwy",
  "key33": "48pgHPuN68TthNnE18JkWqR8igTG6SAvvGr8hzrdBMQXD4vVNNHUmZVD6SUQ2ffQ6rSmPzyYc4BQX56ncC3rpQoD",
  "key34": "2yCggTSEXSAixm2bPE2LwghGLTPci1NA1sWmaxC6CcqLoEuFiZwZVT7gjkiiKvKeRb5cNXDQPGapCy8QQBNNqZ7R",
  "key35": "MK3H5dBy6NUMVFXKqXboiTHEGvSscx7YBXzRejG8pQ8bUnKFFCS1nNSG4yUXNXNFzjyyfpc93rWPBmKgA3fErvS",
  "key36": "46J7DAj4qJRDzEBaxALo9o9WuxhzQC3cLEnrhHNp8uf9nvaFNRsJVp3cRzVYr2WYKyk11AovF8mTeSnX93ZT7GWX",
  "key37": "4DCJo7SjhDU43pXo4ynSRrGP97V9SZWWfyAcwt7QUJ3Ys8YSaf96GGUYMjufzTCamnByG36fzjqGFS1F4VGbNAXV"
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
