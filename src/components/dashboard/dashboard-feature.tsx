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
    "3hqYDQCHvHY3fEzZKBxHHeoeYtvuqENHFJzhB6PVaDAuhzcjYBgNm7QGrgv4ihZFN9LpAPP7rEkBQnT5wPoPem6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28gVrYQ4ypnTBCmMxQZaPBGUxrEUg7kyBfQoZQnZpmZSgUHnaFAtoUuB56jkXccaHYorQVSC839usM9WPCjMSk5o",
  "key1": "5TrZBL7jtbqatAtMijxFMiNP5Pv1Ci8czW6SKpoRHCTpBBvmTuGA3mtDpwrnysybE1dSVrZoysZJTXhaFkigGEGE",
  "key2": "2bk2cEFjqMYpLCGyrJ9KTF8tBGH4DBjdeA3RsUFvLujc33VKzcXmg2zRpgFZ6P2hnDb1T22HtGrKZVpSr6ZqyMs6",
  "key3": "2tzdU3DXgih5quvntsaFpaXdYfBWGbcEHrPyqJjEAcbavsWbiX9Q3BWPLjdyRfj4euPN4T9LeQsJ2YYTyMtur6Ry",
  "key4": "3FcSEtuzsuGzzPGwdX11td1v9idbiEZDKFG5EwoMdG4enPATMcYNVoJAGP1NFzrxZY8uQ4FVuD6AFB5c66dMZpok",
  "key5": "5MTYDTaJwbWqFZjMctdW9UcQUDC4LxQYyCaXUZVaP2R5KbSSiLSDNPP9gMjbpXohybtCMmrxqmsQ5mLHf3km2JxB",
  "key6": "5rXR9JnmbaLVkd35qLVwwrkd5a12sL1cLA8gdfzgcsPifqaZN8XEqncaHwyzGFqmx3AZZ9N3gNQrJrs9VhJJnbC",
  "key7": "4dV5zQJt5sJTHhxParj9Ahbtox8ARHxCyiAxewtb7Z26EwZjY5AuhEfxJjQHcu2FGpySAoB6U2spvkX1AhmAgYDC",
  "key8": "3KABwpwNEgePghuZJu66HqKq7EVvhKc6J2qi5SCn9JWtY2nBkHVkHxVPPwj9LodAoKcXBteyacBxBw8YgVLysgmM",
  "key9": "2RhCbcvoBrpfVYHViMZ8VknGg6aFEFFp3hAMjuXPBhNpNnMMsKU8hgBfNguikcBxFD4JkfJXsP93CrGMdEmtUrjt",
  "key10": "hPLQQwujKbwWTk59SPpKhRhnUQ6BVhmMMTSsQ1NQbMzjNruWJbRTyuUNj8DPmbMLfaYey2S27SBfdG8qsonV3Mj",
  "key11": "8eurbqujhzJJirH5kwt8KuSTuRu8F1qfhdKHvSpeCFJ5KvdXboKSQvD1qFwjWUE7uwRYMWseUL7nMF4j7g3UtQV",
  "key12": "5Lo6vPbdFtedMcxjhgsyAcAjWgAhTG3taZkMHMUFKEngdrX56RdvKKzYfSNVAB7PYPND3KmgfDc5dXtJBGMUqBsa",
  "key13": "3tre4dzrCudgPVVkjtPWo6okaCY7KE94uAkuMCTEtPtqrggPpm1o3Z32X6DqyQBukiTarKSudSXUm58bKt1yTHH4",
  "key14": "EjyfBLfySUowDnXsnLSSpMBU8F443wfLYuH9XwKoyVriU9QyRueyydJmY4HmuSTKvsq5wYpMyZu7ffsXmAmeFi5",
  "key15": "5HP9cC4Yjp88aBpxcrM3rUsVL3peunWnj4BhWTjQL259DNk2eMNDrgWKqg6KLsb4Andwr4DXri6Z3Mko1sAfoXJ4",
  "key16": "2MbamkXvvoWhSwKquJZ8HCgHmSZFUY7Pf1ugegYxFG1SSUMoeFGh4a1y8Uzbp8jkVgwLwn5YqqPBkC7XpqFV8KK",
  "key17": "5bouMa3abNd9eTqdaYToMiwEcVBdhk2SWHp9CCRCFLFRnsXSpUZrhvn8MrY7eha6cGJUmg1SvuV7mRSzcH6YTEqR",
  "key18": "4RT8D1NX79voJQtprWZpSAdDjNTCkXwRa5ypdaSo5HjRFztwyJNYNYJfr8FaSeyMURyJKQA2VCBkTu3Sq1U4xs26",
  "key19": "9LLVHtweBe9JCruhqPV4XwAHdjfFg2bdtY7kituAmx1zaApdoYtZq8zVpRas5Zwv2xq84B9F3tfs7NRKX7nTMy3",
  "key20": "2qkzGpn1wKWhJrfnLXK5jQ1iZg8xjRF6LMZzBPG19KzsQgJvys4RRMVsmRCPDauaDAEE4UaC5fgyAXXNsEYmfBoA",
  "key21": "qxNU4xLAHipBX2Tb1gt8MzGWaqrWVvFZbTTvExhqfVfGwDsBGHme8zv4rbUUEcdoVsgSFVtggpvwCRAmAyQKCfF",
  "key22": "aSuF5moo96njm1V46vsUiRP1L2PENpzdNcNaScYkUua2ujY8G7d5JcNgE81NESavjJczkdu3rFoKtkseccu8rUD",
  "key23": "RS4M7Zrn86ev4AFpSuwen3qzyo9niDpKrcZoe8Y9DMq3iUrLH68SEMixUoNbxQxqBrfd1ZnNoT8mJaJTsijnUkv",
  "key24": "2qcxSkAca1r6SFq3GFHiS29cyJy6ETRd796MPtdCHFXDiCpFSTWLEFghjYBt66R8SLEidiyAjSYN3a7cSvZZDe6m",
  "key25": "3SqnvHU3q2MqtFzRo37MP8pAPJx7Fdc2reT6DZSkXi2iV4fBPEJv3941LWSbabzay8jNaHuEbevhafuz4V1nP2jh",
  "key26": "36rxqxANeivKZYZZP2MdkT1agDrm3LP75Wu9N3s19F22vs7Z5gG6TZWZjC8DVsxz6H6GwxMe7L9eAhtHLEcJPpfD",
  "key27": "3jykqkhBpkbRbzVEPCFRUC5vwSS6X5DfhARbrTB9dpTsmQQW4CPvRd7VksdcJFzQt52Mr6d6dXzr1gJFKMq54bwc",
  "key28": "4M1VfybtHypo5kkBeDFp6gGJ426doNGkbYQFGvWLbGASyyeEmjaC7s9CZ2UMB7bfrhWstAxd4RXokvfi6SqKHP3M",
  "key29": "5uvyo5pUGV1FkntRzRyJyKMorcEG2XazLQfZH5Wdfc8u2Tf6dY5c19WA7F4zaCZyAKG364bSfijAhdJewhVwvcLD",
  "key30": "53uS1WJds9MBHACy7jBTDKpdoNSuXuwW6fRu7B13fVK8ayj3xEiDSCdjGQN6Kcmk6Uz3qfawJ8TgtgUdLkc9RXvK",
  "key31": "5gtJey4TPKfv9k8HRoTMNEDMiarzJCdgGSsxP6pp5tKhTF5YuiycJJpRLYBNfi41VLoGHbJAsnMgVuphq67unHoR",
  "key32": "23wztWVSm3bzDuCm21BvPA75SCaWaVffhK2WakNJG2kvniXLSpxbag4SkigrTo3VcExPAxmCmqa3TH7zPtczV22L",
  "key33": "gfSPThb7uZh4cRZiswtSPGzSD9BfihLhXZH6VAmc5SMcvhTfQGbyjyvfYXyaZAuSrw5uapEbG4SWm7gWYHn3VAs",
  "key34": "KqdaF5GBVGZhNWPfKHJR9cxwyYKiNJNFccKc1H3xZDvh5tXbuxUmYJqc7Wi5WcoHwUeYyFf98aGPnR2NeeLYksp",
  "key35": "2695Lf7vazqrPhcmUU4HK3GpdmjRq6MX6vFCSNVFoyg1EyvPavBUp5mY2VU3MMtqCCefd4C4qcnRp5JSTBZhcov3",
  "key36": "4vE2hpSanKqYVUrPwyF1h1xHVEWwGtJDreanEZqnovEMU5f65RARYnLc1nv4W2ob7BLX5ZhcT6Ndo5KWW9zsznT4"
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
