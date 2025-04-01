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
    "jSmW7Nd6r7gwBTxmgZRBuhzBW9TwXAHaiypKAhRpzScNK64mv4fbh5wtU3FVDefbFBY4s8EVpRysgkSdx18nahA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GtPwW4HLTWiGG6JtBzWxUFhSZwTFhisC51cPWMPhDixe7fsPaqocJ1riUaeJ5nK3pVy4LGy2KJDcQk8kHrbFEjT",
  "key1": "2rUGTbr1mZajzYEShQ7JXCA8fraVtBp5cW9t9rpA9CRGSX6qnpCMyPDfK1kU37feoemENEZo5tN5KysgwrYzg2UP",
  "key2": "586bEs6ivmeYknBKA35J1fWQnogGmnGwdK5p4Gd1coVEGfq2sCbqwppNuYintfGEDqMVx25D2VihNFvKmZnTWmHf",
  "key3": "47zQxaa7ecJTQquZVczTL1GTvmVJcJbqNumPzkvi7FdsrNvzbuUdyRFZiZJGrWyDHAisLjHN1hUririCV3nHbDP2",
  "key4": "5yLATvVVE9x5frTxh321LaRsXNSKoYfuHG9miNExRaS5vCowEWYCFrHwjp2oyT49AjracRBXJu4dQUjKdVSu1StV",
  "key5": "5BphA2VoTaxNwrfbCfChJNdzgUk7zZDVGTD8w6Pyn7kckTmrjyumUYsR2Mh79YpYRcbJHeTEZ5qubixRvV26aJqz",
  "key6": "4oGS4uXg6XajxbbfNHWSQwMDFCdSfvAWP3Px46Wf2kVT3thprbYbtqpzKfdqwPcVoGxmb6KCTiTPPNmWgnKtwtrT",
  "key7": "5SeHd4VLnPbxesn93g838oZg3pcgJGmZUtixtR2pQF95KSSbHdpGrFgkHQjTswdKSGhLfVyQBWbGDjQRsKsd7aDA",
  "key8": "4ZthqBwWfaqKbTBoMgCM1fg7La4atiU3g72dfHVvFvayvqXPHX4iYoLf6vFMgXGGiU6Lwt8FQQ8FpJmy9cWvzu49",
  "key9": "xeQB2UyXyxjzP49GaFFmCs67HAyeN6CTtZDxP2KHavgxRaekh7NCSS4MCfzVd526d5wR2Jmi4oxbJkjY96412sh",
  "key10": "3itQyrR4BqaxEq56ttBCYpmtofBzu1pLgyKKzsKCtnJZiKaSbSvWc8uuPrVDdsryELmsgsVuhqBaPRfm1fQJBgqL",
  "key11": "7kHY6pckFXFZTg91YEarZ9FRWPxm4FfYDpS3e1XioMGsBiX3bjCn5GHgEyApt6oZaVaUfvzbWwEjgN7ubRGxtuF",
  "key12": "63y6dx997jCccKXJi85jDRRBJr3WQAtmgLcc7gdH6hgqbYaxGDyeathB8y28gmUddRAcMuupsKz5b31MgiPhFr5B",
  "key13": "3cGdB31nD3BLUe3Xmm7uJJDmADtUkuyhBuUqvDd8tkgLwDJW2yZKandZAmu3YEq7FSEfy98H5FvqBsvHqaPdcCSE",
  "key14": "2WnfQZzkC8VP4bBRwoXnMtyDhET11pKoddzPNW78gLZgPu3vyYape1zvjsMRxuGYQuEKQc7hsYHLVcTvTcPaZn9x",
  "key15": "4h8m5n2PdeBrFQDNrBQg8Rkaw21yEULydNtCaDRTL2sWsGeQGLLJFAPZfPkPBZGZ2J62VL3WxEXoakmG9ZAaoLy9",
  "key16": "2gbLvQgjSjoVbq1XaDDEqzToZoib6vPj8VgTArYwHpusYpbn4nnfEPSq3u7BAGuWWTNB2oraxDwc3EbbsTZBV231",
  "key17": "M7Qadkcq6PHCSrHQNgjGs7NqNed3pEja4TAhakwZRVFVDgeCXPTmCa3YvhBYAEeEBL4H59VkvZ4pekXAnJxMFtx",
  "key18": "4qFgNZWNhK1QamuZ9bw1b25oUbwW4zUyLvq7qHN3M6WQfLgPjzteVUikDJvQBhbanSDCmNdVX8XR9BywfhsWsdrM",
  "key19": "4AiJQjzm4CpsWErwVU4TPH2CYAsg1y4bU9nLJKLbyZtK3gZbzP2MhGNPp4qyoYULQgmSzTm3eKfm4KENKEDBqvM1",
  "key20": "3pfcQHd5QgcVi3PdGNHxkQ2xi7xfGT4k5egDGYJtxk8PM91d6VZFnEqa81Xxy7NFjH2dmN3ncXGe5bx1HXAdA6Fp",
  "key21": "5gGPRpjZkmxzsjyWmTkgUYSa4hbi7xrc8tDwxq9GFv3fiuEwS75txWBB9TiApxVgrXMKLDAupVRwV3n6chMjoRkf",
  "key22": "3fqG6Fr7HtisWJew12GjgnYAqxM7tJ5NFWYDgtTvv7vydhAu9dZs6SVWmDTtMVAG7PnrQGM84F1rb3PWDnAKzD88",
  "key23": "3f1xfhBPyMr3sSNeQ21M4XPEUwvRJRmTFacxbwhH5dtCkaKWK8oCJTpDXz3p49p574PAqy2f7J2PXTKfjnmWzJRE",
  "key24": "2YSTHvB2zEgEAps9Hz6qSWji4SCL9Bn84WKEndHJr7Ar5qFg2MpCMT9Worojj35CGjLePuCEUrBRk91Mn22AtFXo",
  "key25": "2xrfaB7akht6Rj4MmTqyAeUjpPXMEFyJa3crfP95qyKR8uHmRNDzNgXwdNGLMBvpa1AUW5zzA8rHVg6YChx41Ydg",
  "key26": "3AyKEUUAkg8GEMUJev9HzqQ9KquTLVcdzMgKxGKgRLUNqtyMHr7XdewtxTWzoD6JX9D7qMkrRLnKA1tKGKZ7rq3J",
  "key27": "4xnKHzE7MPCvy1AnpbvMLxV2vCjMrZebp9rT6rsQwaHe6Bj8CTSJn5b3BncgT9oPwDXr7vLZgMC9QfP9sGQhpjwM",
  "key28": "32HJdy9dkk4gseW3M8k4Jvk7MdaKAoYvndqKuPUCCxkFUnk7HoySXZCQ3cgdA2NHvsHmzpiPmJSJPorz5x9DQdDL",
  "key29": "39oX1kigAGQmrWhYufXCeqdEKahPGa8s1skQHDek5TCQ46HZCFeN76UMX3CE7QNrYKvC3LZTTCkNGqTorg7tFicK",
  "key30": "4eWzUCu3ny96ZVYZBgAJcjeedcn4M4CbwxooianFf4iWBAZSW4458uha26nNcLGK9oN631yBnpRWSyMtaapLWkMX",
  "key31": "59TkjyEU4HmG3j5M2bmqiFunHwbrT3YrzPfpETZHqwhkxxcHmLoEzMkEDWaQbrgPPUkzc7TtY6MYUiRVQV6PPaAt",
  "key32": "4t9XNMCBhobLAcSQ7HTz2nf4cfXGo8kks85mbb75QdfgcRry53tEQYBQ6KYgf8ywsEbb4MivoNLpxZ5GDbqDV9Pe",
  "key33": "328ape9u6guUmYTx88q2H6C7D7GJYhbiCjphUBLk1v786rv2WdNU3u6BtkUkzLzkYKZFAQucDwsr8Va9Y995K1LV",
  "key34": "4nCLwtiTWXRbm6GeR9DasJhhXJFqqKHio2Uk8TRK5qRtA5KnVQTBGq2R9RC9BQNPSPoRXEEnjXb6MokQm8v3spnx",
  "key35": "4JEGVDMU7vbJyYupC3fYgE86nfz4KHjppi2CbqvDeuX7v7y8HtFRRbjVYFm9SF8bA71cRxi11jrQy7c3QAiP6mN5",
  "key36": "5PG5aQogEFXq48pfAtugahN74HbD3Z83MKY8pjsPRkKS54ToiUcTrbAQeNNEkr9SJMASqdzzi44AZ8ZE82hVZRja"
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
