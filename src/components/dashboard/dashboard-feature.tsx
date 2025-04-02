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
    "kSk1RyZmkHbBWBbsZXXitPDpa21eEWnSAYTuxJ7N2NbVzpXvr5qt1qiFxx4pHaDJvUgZxhZnz89xf2M5FDbdBY3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "buuWuQ4wQqWrDtWb62yfBN8btmp2e85Vxbdypx4Tj2ehSfBEPt9Gg1GbnWsfJzJZqR6xEwVEuo1UyyVJ5ogE2uL",
  "key1": "BHqbsQa8z6REVegNS4MbULTXcXKPy9tgRetGHMTB4VKbJkTm66sbj8tCeKawtL4mFZ4ZGkrubncRZeAF1wd3yqy",
  "key2": "ia7QXr1hXcd6PRrj3nNgvG8Q2E1vMb7teNDXTfRbyZbGoia2WmdNf7xxQkJgswX8tPURAkr5aXZaAaSVwPDpyeK",
  "key3": "2RCkkdcHCMeEDApo2pSCkh8n234DhN7HscGyQgtSRdAAe51S1rcHDtMpZ2LQdQiv9AMo97pzqGgBxoLuiTSrsbXr",
  "key4": "uysSrPMKju9X4Y3KDrbE3hYC7NW1D2Yich2Pa1fGMcAzGPgkXAzz2iDLLhx1YLuuRHSpjf6Ruakv9vUuq5RwQjQ",
  "key5": "5WnRr8UEMcgxATctr4gWDkGeZn2BfeuywBVshNcTTkqXR78riEyzWgxzZ9deZcx6w6TaqCBfFaQSWivc8Z47efhJ",
  "key6": "4BA75neXbrgD9AgAdb9QzgkfVdwZjssJBQC9J171iQf4H5cLKZMkF7LLaavXSirotveRD7biAzq2XVJaRJXwTbPf",
  "key7": "28AiLfYpbab2pVJsb5bwNTGassWgBMqWw6ye7MxYnVi8NZF6epCoWGgXSVxZiCYWBd8cGo9ACTde9yYQZQLEjKgA",
  "key8": "5J7eHfx3rchpGDU1ZnvBv6c3cyCGkuUmk4tpggp5CbyVNjZUuBXjMpi5utTbrXiP8vPd84f1TjDy5WYAHZb4u71K",
  "key9": "5G9Je7c54ugLQ9BmxvqiY2PApgpnVZ7GK5Tz8UQg2haGh9fYioaX5duwMhGqGbY8f6a7JormRQB5G7vVPM3o7jrb",
  "key10": "4ftme9qg6Ne23LtTpWiriXJCrr7f5BsiTSQVzJioTY4ZQFnoSLtFsbbuVRGpMnPhf3FeDuvmRYiFppiEbNvJGhPi",
  "key11": "3dhmgb8GmYutga9UwRNBaPuizmWDtw1EvaFk3JAYrivVPZXq5ywQZ8KnPjf5o5v191P3xA14mRECXBN1q4EWwKNr",
  "key12": "4rsGesvvfucUnN4GVe7KEAqTW7cUZoxCjqbD5xotRq3tdY9MEbkxrJr9fjJ7q6z7B3RnPEveFpBGvaDtmkWaCYKH",
  "key13": "4GtyRBdjSruePiCTxDtS3V3XVV8Etxh7FekAU5DPmL93BFUGQzHGFZL2n5ffsWTGd8QTT9b4faAynhq1FvSBFBy7",
  "key14": "4SVuwWZ1Fjhj91rU8oAgwCvemGo6F8jnmBytB882pWuwWtvCEtQPQL48Zx5FFTkpj8wb3LY9sbK8CbixHaH4YMk3",
  "key15": "5upzg7f95k9nvLenkprZ5dGpXSgeosA6dbcSFuyxjJZbHBJWBJmMpMNjkanArcjpZTfGVpQQnMxPMKUh5EEjWKpa",
  "key16": "4Kk35cg6952vvz8rVB2UqDNxEhcu2FwSyZYs9FG8fXQnKcgQusGeGS5ohR4yDYSHkSRSs4tZ5a22Lqd9m4n1mKuL",
  "key17": "4LxQtKEXja3H9PRqdGFiY6KSD7FVntAFXGuCUfqCYG3nLGUiY99JpZHB2UgyjKFCANQhyAad2jSTVGbUqHZCxAZ9",
  "key18": "3Zw98QwePrt8RvKAN1u9udzp1VYKnM6WpdwsFY8B9K3yNxZ2K635pL7DZNxXEzRrjwSWWLibgsSgRvWrGpzRvnWE",
  "key19": "1RZcMbAt2sxBJmQzX6EfYamNJBVsoX43PKDf3ArEykvsczW1ThE1297vEoGy4VfRww7cHRSfu3niPbnbbXsdmcq",
  "key20": "229k5wpk391tb9S4hpwpYJA19tzCV8URYVuwBHiBamUSGpZQRQ9ofCB6ppdpD4Uw7dHwfqQtsL4mKazFYSkRoao9",
  "key21": "34cT2ETnQktA8Y83RomJFrLrvE7ZaHXkNcx4YXxiQ8scvzfthrE767YMYdS6fd36jsBEv9MAxPCXGXtrWQLairzc",
  "key22": "xtBYz1kSJar7kESPC5v9heEV5uvzaa74b7sAVe5S32kwdE1gPABDXyNy3kJJvJmtJKS9nRFJo87tJMDnsaX2E2Z",
  "key23": "Z2aziaXr9yB3qnNrMsPkcPvhQAiMNKwVSEjgqhfrpNfaseyz6gBtSnJrxmpqvV5Cr2eBxDGvANPVH9JavZuNvf6",
  "key24": "4NoiZD8dCKNh5pZPGCcHUZ9qPQPQy5twCFvixRqTgFF88514KwmPYQo53B42fTibaCoejkr8aWZa5xh2wVJPyXGV",
  "key25": "2E2qJhX6Fj41Ho8b7p2EHWXmsQb8HUZmaYhsx7bmusyESrPpxSycFq34NYy6AMemro95rSSAtNbstnpdZDhjUxZR",
  "key26": "5duCxcfsd14JwtwRRRzVjxuAmvvmzywSdtEEcHNWXMvm71rLikL9va2zMkhzgHwHuMVRY9gfyeGLDtNgfQ3gxHb9",
  "key27": "YN4HeHVbyVKvzGe3g64yFLGWuaAeKhpZe1AqhEqaekkZd2DrQB1f5pwwFydJ4WrSNmYF8A82QqhswcubrtePSpL",
  "key28": "3RmMNhzvzPqFC7Dm5yBr2XbLa5swt6D7a4CuTyg79beKV6HRaf5iZufWYmSeMBbS7PDHEeq5effXkni1c7eAwyuY",
  "key29": "3VDZoi5AB9PTqcWDrMKy1smPMyDqNTXSjPimbs6NGX2C3X4zjQrbWbqhiLqREM7qJX92yvPzbspCvbcenWSM2Bu6",
  "key30": "2cCuDfp4hZvvw7L3HL4mevNgNfZ8wsR6mhDt9z8NLhXKXJLjTDNNwvpq6q8FdaGUccKy4QUCxMVpHwVnjXyRikn8",
  "key31": "4RHkUBAqWi3TUBYRfqfYdGy8uqV7hptmxdzimHLFdh4cJhouf2Ef8bESSX3D9xmTN56DM4haFmbjeNRaYnf4qpCz",
  "key32": "neAnbsWkTGBf9nicJLSxpEAjxrtbQk63aDyGo6pAYP68uNhvDU95rXckvhLxKzgA91knD3RoVjkBC4nLnrDuk6M",
  "key33": "3bGdSMrhtvEycmobAKUac1fk4VTKjp94ZFC5MU4vXnQA9skjvQ1dqUoZY9V5R1sawf4GdPXA4kkS21UF33D8bCeF",
  "key34": "QgAD1DixNZn11pFubhygdKWRVmwTmojwA4gpeadzYy2KAqJy3DYUoSy5yg9Hk5Px8u9ek8oG4Mv34anCv9iVr2J",
  "key35": "2BRXb4WvDT5BDFBpFZ1gkL8RKHJj8CJdp13bGbqQ7meaC7r1ZHpxeMaWK7uUgJwAmACGYCADoJ5txMZh9eQExcoY",
  "key36": "5tuQxRtn3eb9GqmAsQ7Nwgq87jtdiqr9SisfkErmkbW1qqH53QEhNH3bQYTqiBHrhoGCKsevC1wGLAP6rsNRXRei",
  "key37": "54jUCVW6j2tDR5A3Wy54zcQgw5i5Tt1ia2zkqptwLnXeWqZQCMY4eoMY4npPz9wmrkGRW2WHGHEEuHRpnMTXBsP3",
  "key38": "XeJ4HRvGb6dXZSuURGNXkVqxyE78LxtZQEvwGoyAw9uuKZg6yKtkxaV29jMedTB5frQGpwUG5gutbWavpVW3dxm",
  "key39": "2WSPL9QuGcetbwse5o41d8G6zEK4qedeP9zaEgCrC11UHSouLZ2zbSBUSAo7PmJ9fvdVRhBsucoKudKxirZSXfw3",
  "key40": "4wDvC6L8MdLVN1iXmAXkFo5kL1RRZ7aetak6cVTyP5rq9aE4zMfEMmFzkUgZUr2pUmgaikrrCn17DiEtcKK2R7BT",
  "key41": "isqjJxSaPGjep1D8JKTzNjbCwwJzWdddSUCp5iJRcV9TZ3sjQDjeYaVTGALaLANSn14MsGUJMh39SMvas1J3d5E"
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
