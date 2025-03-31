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
    "3QVVRMLTqeDyJirvWxCrMkW9RvWZsrpmcsYereWUT5MhykSrxvpGzdYVyFGy1DfMbedxiXEWf2EFemj9SZDV9KyM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sFytJGNWrzgPL4nDLBWquuKPiyYBPHwdRZsn7qn7j9j4L4HnFyE2hjpw2WkH5aFFrhJbQNhmSrxhTsi6tnZ9N3h",
  "key1": "5riLdKync595RKgg3bkDKjJkENQDMpTjKvmG1Msrk7NQzK2PcXRYbfq6AWFZ3mkYthjDqfb6YmhWCC9s2VCUD2tr",
  "key2": "5XuHyPXg19zYt1fgpPcmJiMXjiND2k7RrYeVQ3EXiVF74HxAJyf5xTjnNbenmcJGXHRwxiP9fXhhWLe1m3yez5F9",
  "key3": "2Uiv3kNmfxG8eNFy6Q6sfxt8GxUrwnFX9P7aaEZQLp6TVgLK1dvjaTTQMbW8HQrui5MbjinY3QsTmU2m3zxXLs9R",
  "key4": "55YT3EeDcY9bHLVwxpGSFiAkqWUoP5D4rFMVoasjiu7h999vneBaZWx32tcDp9D5ZVPCe2ZdBPcagFYtanJZSD1W",
  "key5": "gXdbFatuSNgg6czfpnEoLMCztsYwr8WrLLKLKuEovdyZW7BTdokDHTWXUEZuhxXkwKhFaGUrGognqJ7gv1YM7GK",
  "key6": "2MsCom8WB6YhRqwbkcYk9YTvnBBHRhJ4TNrd8uGzmZuaj4BAnjiaKbbBJpNzT9aLekYnrtu8HGqW6k4NGtezi4j8",
  "key7": "2j3xcG9JKeMSQS7AoZn2z26HJXL3jVr3EyCwo3uAyN32yCod4BMKeq82df2AxvC2htwkpZaHf5RnxRwTg3wPmFD1",
  "key8": "2yuZCLjnuroVc4o4Ezk3Bb8UXKvcaSg6qF2Pce3YDE13eAYjSWKUJXzV3ZoasjhvZJX3kQ13oi8JdKk12h88bZ86",
  "key9": "3g97nrB18MuuEGnvMUeBYv3wYv8pegFuMQ2YQmWPTCtDGGmBnunJvpXEuSexgyvwdEoDsfqF2SsUSMvfAoU3dw5a",
  "key10": "4eStPvygsQQswRLgdm4jdXPffMigQPHc4YFatueForXo9YcZtHPVfdasAkmRjXM9MnRdmg6nr1jzQDWqpKcAHtY3",
  "key11": "3YeyaZAK5Cxmi5eamYYRXtcdFurG3XhSfVrokga7sp3zTbKa5HN3Mr2hp3nYX72sW84ZZCNfDFVaLBDR11dKYCXD",
  "key12": "3vSA1UX8VEFHkQnbEeESmTp72zuAKqT3D7eqB4BvbRt3XBDZ45mdT9sYqVrhbvPc9rcFzTPErkRQVsioLpC8GUUy",
  "key13": "5KFYFTN2nD9M8RKefG2SGpZHDyYi271Bt7eNuRnaRoLxBxJzJftMosDcsEEYVoGvfZSPwLQxZEpfVoN7bJD6Pk9R",
  "key14": "2jFyfJEV2gTtz6dUkw14XEPi9GLFN2qs8BFUURJ11nhFtbwbYhFvCH9cdxFxjNQMp5cdTpfgG6ECjk2QVRHn8c72",
  "key15": "2D3KzxhYJMiz61EgMSm7U2VqxZMLFy14rQp7kRF5HyLMZZ8MTc3ee9PjyfZwPoSF1kUNo54SpksdAGqegXtiZWEm",
  "key16": "4xBcS4oBFf6UyfTwsdmTqB1ddqKmLqsd3RXtSZwyFowA8DoA7wQW1SsDKxY8KCQ7fx5h8Z3sFxsqy1h2hg6yPhFb",
  "key17": "34LdAMXv1vGQhRQTMt3Ke1ZrfmzRgAqgwbY6W7BRac35eVnUxpRq8v97wjHLL25Vp1xVKdLrFQ2HpDREVS1rYNRh",
  "key18": "5cXYata23ehEv54PCbYqm8xpAGp8zMA79gcZQwgirSwb9sFPy1GGWoAM6ZZkAVaad4mJDpqk93gTT5hjWHnaJcWm",
  "key19": "4NgNKGbb4287iuJGQpD8uWBob5Mfi2yZ8zoQEP8ktsr8AJoiMGEsj7qug2Lvh8c18M1T5ruKvRkdqRZgsoWJr1y",
  "key20": "2AgcmGcMMknNBjQfGH5gh6yHFVGm6qgverESJdqDsvyA3pHU3J34dhzToZpLnow5beSmi8jmP1FjQVUpqjh2GSa5",
  "key21": "5BjfLRtTRerjnZxALMsmUb3Crg5v5nban8nLDUYV1k4hDzPK7sFDKADEKEscKPF5V1du8UEPk5H43MokzcVic4Se",
  "key22": "3EggCNRFUArfsHrqhvstcc6kEzzUvG9U3LXF99naTUhmE69vbCFfmcc11TXvnSAh6xJ28NHXMEJs3ktsEgXrRnGq",
  "key23": "2G9kcY1hWFBm8Dij6kBtZRijn4Z2vWLfKEZQ8trC8Ew73XKqmqxD6fP1L1A6DBF8Z7rFBpdJ4irHpxLwoR9wzsrd",
  "key24": "Cyaa4pV6rqzQBQQmLH92YGtfm34KRfTkZjzHzR5hoiiTsXaTqap2kjUxu4HMESXs2hd8vH4Ch2ZrW2Y74XbBY9Y",
  "key25": "PS675H1q2HEQ3MHnLpBx46NdwJtYYTAvwynywtxk7dfFjDHWMy2GQnDhVJkeKyagFBW2jy2J34CrfnkpLXhGS8M",
  "key26": "3aJtAbCmGtDvJgeLQTw1ZczqfsuQHYUow74yt7HRVjdkUZYf8ZrDAZbNs47NNpJ8NFkC9VuNstf1WUyp5sPNtqzW",
  "key27": "5wUkHRe88ZcRJ83P7AS5dnSfQN9W2emBG3r6uBNZYkiJFRPF1VVMVBcdgMXEQG6ANDtq8iME2HU8MvoWmCYZhCdK",
  "key28": "mY8Avr69guCwxy9rUayyAGEBajA8PCFyfzXYfAZjnK4AVQWAZazQfocxXqECpTLoDu8mPrUCRaESXjsUWDEcavD",
  "key29": "4vB5LED4gELWfYcYvkAREp8txQXiH2z9AhQW2pC1oguAG2cUh5Y9GiWZPQodysRA4pMvSkEbBAAfxuDxGaP91GCL",
  "key30": "b5r4P8EEq9TG3VJVKoQVKcKAeMZiSmC1HKbJocshcjA7rgdPnHtcKKVZCgkUBncB4isFgqDvcHc7HZ7Xx92ZwgA",
  "key31": "5iss3aa1j1T2xc2zcAUv3BGyzTBjzqNBPhnTF2fhbQkUfH48jYfmXYYBjvBPpkG73q4hceb31UynhoF7AoJCuaKB",
  "key32": "2LtdeRpAKH43ZqVvsKmrPPEJVF8ZXzdhcc1K4DXN2HkF5KepTisWDJ62ECE5BKYx56EprbujuE1nbdZkLk8EqcnS",
  "key33": "2nqW2sBJ8bJ7aWyv7p61aL2o1NUSXepVDheSw3bQSyH5t9RBqfjrTKdx39kjN6b311tXC7FmB9J6oko6qdZ1MsKT",
  "key34": "4a1AAT5GaoRMTFaVbPoZ65anfjredvtMqZXCo7xCiCUu6yQyiAqqoEfGxVKKv8LxP4Yu5UxdxaPAvqXALxSBM6J5",
  "key35": "3UMZf8ZKh8Ut4hjMfbfXJ9XYCmgeXqCZaxtSk6JnKPma5q8LCpUPpJEPPDkPQSzNS3sjK4qB3TerFVfMsG12gq1g",
  "key36": "5SNKFRV1nr33jPYX5N6VUNX4PwB6FxEAw3nexNwoxcJcFrDrsX2SH4s2Pivuhq4FqSA3yXZzDv1ang1bXNX78L4d",
  "key37": "z2vNbdAZ679DnbebRGK7GdvNLJ6PSHejtHStSQAe28vDg4zMnA6oXcjHvGPNo2kaM9sCXHFWEmhEVkxyatD7Tua",
  "key38": "3yXGeiy5y8yyatFYSC4mxCayAjpjicWZbVwpUEczA9uQBFk6J2aYL71BVKGNhLicQnWfJ8Kbc9QmoDKVkyXXiKdg",
  "key39": "4LoYqf8Q8HAqFf2PyNuQ4AXPQsPyUi2MqWchsGVhFB1z8BzSspnmWM7DuVxxL6VY7hkDpuLaTR3YDwcBaJgiHPCb",
  "key40": "5nokWKcn3jaCEDGXDTLz94rJJQm3ZkxJ67wrVaF9H9RYgrpVve92vBuuggq8krKJbaMdYAABFvDNFHPUznVEdujV",
  "key41": "3gjhjo4bJCsiqe4N9N9Bu6Kf2eKDMxxZRhibzQtMab68kDWG5eT7MjdXdzfEPbst9uiE4NiQZsmQAbuJUPFa7Wzj",
  "key42": "3JDFHA7w14BasGUbT7CKf7SubpGiL6CM8WFmkJJvWj89bPHDcrTHpL4WY5uAcARMKaWLokvtFMvVkmZxiVh1XW6j"
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
