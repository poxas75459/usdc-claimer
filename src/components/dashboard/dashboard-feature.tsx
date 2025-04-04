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
    "3jvnkC9hNh9gFx3vuWr1yGAZBz1Z5LLPsb9FWwLEGSCsfuMK1RA5CssX21g1GbRQxuWedpUBcvUJkjEiX2wFbRpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y9yV8BBZMKBRpFRehZzDaD67GqRfPTcHHpBiTSvtLSaADhTq2Qt7x8ApZw7GJhxDEtqdXLVkV5avPgKcQKidhec",
  "key1": "5QbUuNGsWiDpVf1BuGDUbg7VvqGx5nQfABzYS7Wzuwgm78ufADJqrJn5cktkxEMGgdyXs5orCRTBmfjPP5jVEcSm",
  "key2": "AHoNmdi5esDd8cezeBcDKuinVoKkKVFrqdtQWdDnvsJqvtM2xpvZSGVWJ3SccctqEa4VYsnNg9c9RrzFecrRxzs",
  "key3": "5okrsUmfdjvuyr3BVSvon6qrxfFc1wtHNrjaQy8Eg3jykCYRipB8HUTbXHbtETHb7hLdxfT7xHfrD9vV53cNcMuV",
  "key4": "3NLAsmj6AiYQPRRzmNZjzSRu63KexXRyFRtzcjhYnvMLT1ER8qF1DeBrmPWXe4YAo9PqnDJtmxF1FFijy5csW2XM",
  "key5": "2cfmeQDgeoes9nCYnJoYLCLSqvEFuoSqTFDNir4poqKZ7WB9qWv93SqBiD27xaUFfY49sjAU4EPUNfNcRcfuaT6Q",
  "key6": "4TddP5uXkYzmapV7N4Nyhdmryh7Ze8cfDyNxC5gsfxuYVQeq362uNfBoW37pSTEPYAyywZTzrvtXvZWRw9DKVGRM",
  "key7": "4MouahGA5kisk4Vr6JQ8HcNMR1QFH3a21rf6YXMy7C87rgfLD6rEcx9PLXUQcQRtyKV8KiJFXME8tmDzMBnefxc",
  "key8": "3X1YCzmgLETCqP9hNkNHB1d7etY7q4wMmue4MSnNWZtxmdNRwWRZC1MsgUrL6r4bKyT8oRgSQkxfS5SeBxWyDaMm",
  "key9": "4ZfwFac6T1LJ4nbutCoAJNC4qsoMpxDXSZ4XrRpNBktRC1gDHvvihx5UzVG4bf9dWbY5g8nARrvpNxRmezdvfuvm",
  "key10": "4sqa9ekky54XzqvmHBhZkrvKPG1214TUUFChfcpntdwMGKuJ8F3eiSmCWfN7gse2G8awP12ZNaS4gPyWmEe6ygJp",
  "key11": "QPcHLHapqTXKcTkcRe6UZHuvqq4NReU8YbDnyZrmbcv4nrPKkM3xuHBwUiQg3EqkYh7VwVGy8krQg8HEGqSbPT6",
  "key12": "3pLb44QHXm6toSVifJJhMB8rcXJ1v47UXxytN6ySQS66cVT7TfmSGRrJ3MKiDke6De3ngcWv91pruMJDgUUW5vvJ",
  "key13": "3prRFBG6nJqZr2moBxFRFavimupJ96EoXC8sKQ4oabJveLzMauwxiMBFF2PVJUTUbxrMuNXipb668ocShxefsEvt",
  "key14": "2PY3vUz159RyuLq3iUb7YQdRBN1mdSaizYFr5kYGkJ2iGehPinKk1zPAPaZ1dbL2AM6RPXnefDGoX7z4jVGgSWtg",
  "key15": "2GqsUBD493ncHW3XzDSvahgqiVaNmw7iHYBYGmKiXF1QKn3S5hS1WN2btyxav51XGSTfP1p5ArXwNJPg7wiXHSqe",
  "key16": "4unmVVKUzEmruKt35UXtjxB9eu25JoyMknSxJ2uhZqHh2giyUuRNx6AFFz4Uv41VjpgC2kmeHSUm7bfsjEGMZCkz",
  "key17": "4uZgWqwKSKjFKshXfnT4QVZjYCvEycoy1GmxPkixtWjo7r4thbCPk3rDtpxSF5yRMxZdtirZurRtaQAX1romDwAi",
  "key18": "5eJ9mLQ7eXiJVSshgnszioj7cvihv7WU1Eb81no42HdtPjqRAyyrU1Tk7cjmuMWWW8iPCLfuD64VAMjp5QzcqHy",
  "key19": "4KWa2whfz1GmTPr8vLtLv8bE4c1bjhzYPEuBEnRd2jfTwkc3CNzzSkhLZ44YAqqv35fUWe1dvEszq2Q6hTcwRqLH",
  "key20": "2CLTc8WwwvA2zNkjwHbvg47jSs7gPufNkuCSe4qYRqtz5SVrqg4hcGH6CJuD7FktS32GF4GgDrxYyVbzmFBuCXBE",
  "key21": "5TCfyXAzcE7sGsfW62fr3ueURaqpDDZ2W8cL7VFoFAuufsrAtesoGgy5Saiecn4pxDfM9qXE4S3GDZm8tJL8qAKq",
  "key22": "23jmHexbLs4hqtfo5yB9Z8ubzYXppMhST62kiZfxenYv98W7f4BX7xhpr53UGc1woYUUXPqQyfWvst355iTuySrH",
  "key23": "46kMnrkz5bQgrQtvxTQqhsZReBTDtwHc2n5fJ7kj9BaxPMC2DoRED1SVKJQCom8vA8gTibfGRsFyq6Xp4mw4pfFs",
  "key24": "4mbtXS1ZW82Xsve8WiZWLEZBD7pA74AwPcvYMs2KswoFLHmFFHgux1MdhKRpCX4Hsfmphcba6783aTXsWi29hWQ2",
  "key25": "5wJuZ2KjnG4wqEJEiekqkvEMGSfQcoawZPMbExQxzrBAxWqKvrCZjFUAXB31txRsAisQQD7MV48tQ8CHtYZfsJJF",
  "key26": "39BcBv1GfRCsakdVXJdM1K9L9fr7qFyb7oLL4inHgAkK6tbN3BrYrFc1oPRzkDazHuUzeWDXF4LuU7DS3oz3geSk",
  "key27": "49xPKTkQhe9q6C2xrGaPCjGMS4y1itJTY2im8MrTpEgmCa1RL3kDHg86rRdQpFvcZH1mnBySgFmCnmiDBze1A8En",
  "key28": "5MW7iZzvnAq1TfP8et5mVVyA1Ec4TdTekX7inV559beg2CAJzVLrFtp4tsxpGwwYhL5pgRd6Xta5CHMM2ejkWy6X"
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
