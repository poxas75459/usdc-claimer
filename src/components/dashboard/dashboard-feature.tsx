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
    "b6XRGv93mRPfgRR7bb77z1p6MUrUgKTagtr7kkCVrkSmVHVBZnJxU21gsQE7a4h6rSjr1B2XF9Yh1YZdvHWzN9y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gmuixs1dvnAvkmdzfbwTX31ocYCMXW6nR1pqpe6Hcoac3vDfz5m36MK2YHwkJBHc5refwQQLxsTdSWJwoCQhQS1",
  "key1": "igi524VoAndAsv5soyx7pzVH4LJnAGcQJMEHAJmdF8v74SskjSxhDWttLjq8QHCP8dCdkZ5qVDKdeUvU5wfYB4X",
  "key2": "591ZSrcPc1M22oLvNVdBB1RbGDBWKzy1sr7YLkvcEaVLvLekmH8mSeFY4n3nmEm462PQyz8hx8oJqpavUiMnDbXh",
  "key3": "3eSwThTXefy7nHt5Ww2Ssb2sisHUXt96phQduKdz5WJ9fLC8q3ogWYL5tkcStSKEEUZNBXAhuwBBgXRzLpUE9xSG",
  "key4": "36PGdNRCPJTHnt5hpiiWmrieApYreCip9dR4Pi15WxFshfmuVfWkjP9NarurJTUhPTui9eaAJRpaqCHf1z35MdKn",
  "key5": "2qLKU3whnwXgMSiDjtja9xeTkeHL33t1sWLAdmiDZC2npRWnm8BB7oJhdUUsAQwJwvEX8wr9X4Z5N62bAb2dJwPy",
  "key6": "3hokHgyKKDEnoh5rC8isAGzFrUTuKsF1UsmZSnUaWUqMQxtBwuQw1ySNbVNfRPdnFaoDMmRhkmeE1bNiRotkbo9B",
  "key7": "2Ec1tXHv5ES77gBruPFSTzQaynP1ACSS7ytGZD6Eh98PLDWZJYc3WzVpkJt9Cd6B9ybwxNeYtxqgV9jC1hJFuP5",
  "key8": "4ZFk5hA11cSjMhzpLBDRouUX3DaZQr7KpFrQhbUNa1Pfb5heWcoLoXammxxeBRhn8dBnvACTKecYTSWdXK1Fn2uG",
  "key9": "4AUqgpGj7DF9cJoRuyXLahgPKyRRYdxi3r8aXo88AJX8CBXzsE6Sh9U6VQXttFcYMoUfGypbcXb5WgvG6WtYwXf8",
  "key10": "28My8ZU3HYotxfos6Eyg9LKuAsyWms4z41gQUYHZ8wijnnkz7Bxc1XMW1BkTC5Uztb5xUExGen3TxbnsMBjXGpVc",
  "key11": "5DYRYsuM2d3uvP1cZPkazEMHXoWQKRWJ4jkjDCy1Bm6HhdwtsCq2eKazvaVwte8F339d6wVVHEJivNHYZ7vCxQny",
  "key12": "3bhit9r8EUrQfMn2MSrDqxgbCg9QCthi8T9bYy3BjZjowtaR8tkGXR3AKVmbb1pAKND9L8rPHoQXm7iEQcqFk6Cd",
  "key13": "3Gz87Be9s8oJHxJAZR2iNuCExXPYr6RiVc2KozunUjo5icvomfmsyBsRscuwYWf9y4URFezgmvwTyvNW7tbAEh1P",
  "key14": "3JqddQyfVZWRDEcrWn3cutCS5tK5sU65EjdgNHSYKa7AEqzhBB4pU2ka7Y5AMrfFoRRgLnRoZ9S7ThFez81kdHck",
  "key15": "D98KbQufViPd9TGFEtzvvsfCU78BU1cmUAAyL2RUV612y8ZL8ZHna1CrXxx4VJCgCRktyo1ygazFteADPq8Jq5u",
  "key16": "22d8v2yJah5KS4FqteSBPiNXZ9dte3sWnznvqYtYih6gMXQSVka7AZ3t84spfni5DyNeamqLS23pCFoK3u8BdXMw",
  "key17": "2XkdbNQcBNLkAbp7zfbWPHteZBc9q7W85HEkF36GedKTN3WK7kWGa1tRi2ZPPHEXC1uetgWeaZdnM3gcbeD58HA3",
  "key18": "5NMUCSdQywETD6kfY294DYoZ3ujR5hrdNzpvJTtRBCWhmdpgLQQuHXi3uxn38vqkgSwY3GU6jevnsXgnr8xJmExf",
  "key19": "Qj5jmabHnjMjd1exwQU47ZqU2rXCTTJUw65YMM9BSjh1UpmZhaihueDYeX988uEENCt9iGCzaAMkBDHuy5mc3JX",
  "key20": "3JxbmkvNeRyrNnaMTBEMDQkgTT3KMAZHYpVAPcozDfKf52vzsvoDKvovjL5cfvtSES5WhipKb6QphrEyEiUcKYSw",
  "key21": "37VRFFjvxM2RvtLDpooPKLivC1rfMgzVua7bdSZjmgBD2Vq45nmuAQJTXF2HZM6LzU7rJ5KpNK27s3zQDvedShcJ",
  "key22": "3Qq74dCo5aWjwy63SteeCWHTiN56W5WuDL73VFWggftVAT3hrNZTP6ZD8eyTMuUJD26w1HXu7s5nE8tVUvbg7Zy2",
  "key23": "4m4DH7xucz5U4EmWgVgcwvedFs5T7uUeU128rfmr2d2cqgXWHbE6BsD1zhR5CLUXtnKzdcPyJUwXavXu5mojKL1R",
  "key24": "563QcP32daAtxaUYsa8ZyaLgfj8voMt1AyvEKt5BSkBkSdQWPGEsqwaXHt36iqT2w6gURL1ut9qFMJioMLwL45QD",
  "key25": "2EicYUtb4rdpikQe3Lb5qWHiisc3gKoWvCgemTkrWTs3VHcFScfxT1qR4wRG7GSAHJwi3fb7EN9wysatHm57aE6Q",
  "key26": "3R4nC978wfPed6k87pmunXKDHMDAyFuaHQMtEwTegiaSGPLPm8ffqwzrjYy3qXqCCMkjp2u9HHMSpgaddditXe3K",
  "key27": "KBp6pddPMLn7rD7CKPFgHS8bw7iiSVN1yubSby6H9qZBjerKLwCUB7bMcUuwsUz8YzBnUfjMN6Qo9jG7LtaWoNv",
  "key28": "39PZaxDVSfEte3hV1mcjVLZxUE4BgH3V8VpT9i6ZHHbq5oRoUov1jpR7UssiGcvssrASzrjcAfWgbTcRi5X3aRLA",
  "key29": "4utZsjT4tZtXBYHa9o5xmcjMoxLRsCM4jnGeVZuEp8eRUdAEYKfUtbNFeSS39wzpKaYhL6s6zYdxeWQ8AJxxtVAj",
  "key30": "3UqGJwhhkJSMYFt6qEpYmXeEfzVfXNWCG49waNyDo2U2HEhPSqP5hk8QNtchEbq3nGUEU5Up8n76UFB4CRvJqoDY",
  "key31": "3RMDkjsR3UAJ1ySWr93maiWkVHJXEeLtuVGF2eCDruPs29B314ipSM3b3cfAH6NnWEBC1s54r4gyeKN4mTjiZD39"
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
