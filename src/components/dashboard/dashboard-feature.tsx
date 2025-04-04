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
    "ShqKvRYzjVW7GiauRkKLrHb5TNBJSraDd6VuHfsF9ooHjMPcik9m5ekrWtVyLmxjXcjcNLuLphSZzt9U67zWqP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57fCyCAZhQdmbdNyiRrkAkvswaB1H6GoBLxShsPMiQQW4N6AgeeQWabti7Z2825EWi2enWV72HQWoczSE3VfgtQb",
  "key1": "3SwvApwb5pk3ysXHMvbacDf1tvPtVLuRXCuK3fyjom9UgbS1s4GdLvJnjNEo6VhJjDSq11g2Q86ANWbe4sKawLi3",
  "key2": "31BcFn8SqTyr9UYHL5J6hcLjiJsPifNiQZfyLA8ha8zTB8HRCxgjphA1oedWfpP37YthMapRV2Tu9NAyHsc8SJZe",
  "key3": "3bginiP9hagGBnoZdQwNG9KqfoWSRwJ51dkMvR7ZEEEMsR6Tqcti918yaECTaFV2PPstHuBu2wHndnW8u7255GDH",
  "key4": "zmk2oNmSvTBWBbyS8yMdStvGAkSLbKbv3K2SMwVinBY12KfBNcFYVDjmRsZyZC1FDQsAjetdhRbBk3Pr8LJWift",
  "key5": "32QPitk6t2Njrp5neix5Ung2VEaft3mCMxTey5fivD2xh8hUrNy8sMviyVAZePK6MbMU7Cd7LKpuP5kCQygjbKa7",
  "key6": "5ZPMHFFwuwmwtERcAeq7rKLQFkJ4qTdrj2WiscxYQPgkBF5CRXAADDMnGmtorNi5Pebi1aASDRBAXbxBjTnGL57w",
  "key7": "h1KMJ727u1SoWwPG5B6LDY69xRHp8AnSWN8G8iojWQaq3L2YfZCK5XvyAh2t5V2E6e4cHeKH3Y53J9iUJFLGTUb",
  "key8": "55ukPyBteJvAdmJexV8dpsAEfsZBj3gYcJead1S1jBEgyzBw8xuBfQDs24sBCKe6GqPqCdATomvmu3hvyduNK571",
  "key9": "2WocvMDtrwaKyo9jZjCaShc1KzfLydSKz4K7aitFy1Yc5bMCNwERr8EjLFMn2FjYEuRpioXhvm5TGcLWy3vbQJZ4",
  "key10": "3a6b1Gw2xXTjTZLbtG4XG9ZBvPdhMnx5mjyXamHAcvKMPn5v9dqbMeyfhq4AFEFgvSwfmBtb6PxsF91Ek7SRxK1W",
  "key11": "5CEk2vuvrvyXUoKnRXufbo8yVxwVP63p5NAkLbrEFrXBYAu8eh5BZajEGoY2CygAqCA8Xnj5uuCEgVQZ6pTLvyrU",
  "key12": "37NrJA6nmKFvDtrD9CsouXNrFYFrYExBDwTQPf24TUguBLPcp7WhCd5oNzaDSAtpWaJq4Wpg1vtUtWNC3yPUkkSp",
  "key13": "Z1U8b3huqakMhwT224ppcgsqKz1mjL6SYHQ8w4T9aapVv6RsRS9zsP68UotzgZk4M3ELJS6gUXiQw7Rkn4VpMs4",
  "key14": "1Nxkms1gG2YXUsbFXyqmznkS1n1KEHUUP2EfzTvrR4Q1j1thH6NnXFeAS9gFMzGpMB1EsE7tq2gaHtrkCGDqPAs",
  "key15": "2Py418SgLCsZ79edrB1eJXHQyaVQ9FPKq7fKS9Xr2EmJtbgRUyBafzr3roRZgnLXcAUdNptaJDCGvnw6Dob4haz1",
  "key16": "3DumM7Tfm2JmnJbk9yPVXBhmF7ZQwdVrWGwAMGA9ww2WRP1NUaFM4nmiQhwYpqqQ19q83iEG32pkSaPHRabBsXEp",
  "key17": "ZngZXVMid6kTLYsmGwbcyJWR6y4ZSH65YpaZStSuGYZXqnKaREKcEgKmTEin44tuy189Pa2QpG8DCfsdQaftdBV",
  "key18": "4jgVns73jsqRQpLUWxGqgygGLVPyEUaztdm3bLDY7DyfENFQP7zuAC7kWgpoSWHLTX6NobYoY1SKaWq6LH25h3br",
  "key19": "B3HsCgio5PEThzfFJVY7sjhcKbeu7HZK1r4mKDHhXmes8WGF6WPtFRuh8XWMHMrbtHDKrjspT4ANMZHSSxyywLg",
  "key20": "5eNJ2vkNhQQ2EAdh12AeyHkbgneRMVe6GeyGaZdH6oFZfNmVDCMjAhRgTZbnLpbuvg5tpY3hQ9hEYYd4x8c7a8Nu",
  "key21": "4eu1196QNjbSj9aXz19yGv4Vo3deSwH6a7PGvh6CoTaj89CcBiDf9f8aRneZA1PWWfrMJ91ZzT8gCgzWo7Gegyh",
  "key22": "24Tm2Lb46am5FwUWUK8HzyLDN8qqJpMgqzPFgvB6rTFkYBDtUNa3U4NBNDiUUarT72czCFGujzTHdHe92EhsU4ve",
  "key23": "2dmm9qJkgPH8sPQxuY7mtecRCt92t7ctx6Au9Ko6f9fV1ox8Kyw1mHmoU8ZZ6xMxxPSz3ULWTJVt7dFUo4MqqEtz",
  "key24": "AtAWTn64wH1vB8gd5SoBS2ops4svNVWdRsCZnQvW1SchDhLzuYiZTL3PifEytKT7e98crEgRFUPGoMhDVUgNXvj",
  "key25": "2NCR9q1Tg9aphFsE53LkMcFHZfGUE8C7CCLgrQ6e7B25zmNk9Qtd27mMcwmXtc7Ad47FPzuuVCspEPoDjA7ayjP4",
  "key26": "3aXT6iQCyz29wJzyJT6LSoSWJU1ugT3xTp6cn77KgEqLphFyhy3mzhk1EgmBroZBp886EbJfHcn8stSdicdYk1aw",
  "key27": "3yy2MeLQZx4DaP6SRsjyzwNdwokamUeBGU9qyZ7Rt58hFu6V2C5nBjL5UCuoWJodQFgFvuHceLbaGRwLN21JeXcv"
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
