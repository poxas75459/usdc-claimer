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
    "3swvXq1gVUiB3cq5GKfyVztfoRt8B2uEdBZ8CAsZdeCjD9Zcko7KwuHHhsg51CqRc4jf2w1axLx2z7K3jNWTx6p8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eH51AnbPKeTcSq92mB2aKaXGXBWFNvgJyrSgTLs9QnU8A9u4ySKxkfvibvNRfAQkFoDzEfyxaa4XUa59oJnP8NR",
  "key1": "uSt2fwaREFmAmxrGd4vXo9DW6bYms24T4gBqGd8hguYrpuag7CqppVTpE1KdL4GMqW46u5W69oy5FnHhY9aFNbs",
  "key2": "5iBsAMKCk4V87bZHEEKtr92wgXgLj27mgmdUZ9xbsRwS4rg6DLiAk41vVk7Ny2aNxpkAWPT5HH5FEgWtUJ8ZpXV3",
  "key3": "5LTqiH5grRwezVHb5h19FejDSorrttLuMx24pSptRXjU8VfH8VGPD51ZqgewLh3B8nbSwU6rxEJwmHT5EiACe1Gb",
  "key4": "4NF5Jdjn5pWuLo4SQKMYTWj8PnZs68gjLsMAp4rJHpy8pqHRmWY1iYEVMLSHfo1Fv5KGFC5W2QobTKKTtCeC4rwT",
  "key5": "nQjdYJodn3njM9hYjCSaF3MogSVRQwDZdgqrJQtsgtcpm3XdnqPhScBVECkcFXs93iS7j2M5qWd4PYhkas6srAX",
  "key6": "4bRuYJWr1LgFFnJXcJUaExQvPfHVrUBxbcBQ4QZRbaFKH66z6gLY4b6FXk5zWX5Ch6upU1eKSd7v6Upa4okyxL6a",
  "key7": "4nJdQxmzjFXUCxZ6qvW2dAe7ceRQKcWtMn3KgSg8SdFp9vdtC8ypVumLadWsVCAYHeJmZsvDKkqCQ3rvYW1Pg73w",
  "key8": "4LVhfFegurSRoEk3HXzKXHCJyDLpujwJ12fsbtM5HDLPVXwBpjiDSSgyjjgXvoC3Dkyr3gUwc1FcCeaxipkfTt3X",
  "key9": "23q8Gaf3BsEPVJi9V4gYRh3kd3jspuYprbcgn5jHVtp9cbtjw9SNarDHEjRP88xw1f5hz691QnKeFmr7cLF2xtdn",
  "key10": "3NZK8SznmLowSFbj9Knzb7gmxfeL1bS9UdDWB1vseyChU5p2HPWse1KeYYDMiciqrXNRSWM478ZtSRoDQKAQKxgH",
  "key11": "3y5XVcdU8sZ5wHRstnv7TJH9wNfifZpddKB7Lzx9Y2VPeuMPGzY8EQc1i5Y3CiAgQ9Uhs67NjuT8cM6yGuFNji5u",
  "key12": "5mJnqqw7LQwCKQj3ikULpj8Z4nHZ5g2yfmF9h2gEybZGaXkVN1XAdL5VFghUGGbeVgtGaqSRc2xvyLmTZ1seSvQ7",
  "key13": "3DRqZr1DoEBHeF2zEJoKSn1YnN8fKKXSpcPr6M5PA2Lx9kA7hNAvDoa3AXV8Y83b2z24sCoek8q8WuUjpq9SpT2Y",
  "key14": "65MLGH1FQ4x6zFGYYa73gFnwVujbtfMwsrWCXLpkKXug8KSqeBFwgjffzfhmVkKPmtKTSAtfTyFMkBtc61VvxPTx",
  "key15": "2q6X8j9zfM6XmgLPbMw4tFd8SLBvUZXgob8fVzhDtTDx8yw89f14wTeiMXevdsDeVHmpHp45fNCDEDDAdHnyoG8Q",
  "key16": "5Y9u3k2zSD6sXerk6rQ2AsNVmgxFr8EynxC8k5gA1Trhp3GTv4YFQP2a7sEcdzaX9J19SdymdDWLLH4djGmXZMPP",
  "key17": "Bs3gsXP6YqQgaEsDYFcZRJTJWUzyuxEpNRREDbesi4zheKcKRNVSusHjhjiqfobtgghH7YGwygGqg46seZhDVEt",
  "key18": "5QmqR56nHn9paLw2xzBHS7iSf5s7WbJ6vmwpwkZtiRw3htDN7jLskqDsfpotzTnLoK8bPoXmvH7nt8PzgYPmPa8c",
  "key19": "4gTP1WiEymLws9mgnsQ3YaZa26jH57aPBQLoep3BwoiXh2vcuLfUF5XtcCKXKdiNj5yBMBVJ2xm1eJZZpmvA78rC",
  "key20": "5nUSC1AyM18k9FsS3WGbRsYbbsPd26bC6CtM7aif8Axx5korHxwGNUbwLqCBcZa1ejFanZZxe5uT6pz9qxnymR8e",
  "key21": "5B1V3GisGr85vH9djwCteGyfDfBLWhXBEaLDGndoTTptgfWGGawvZLxJL8L4FWvettY9MGMoW3joanEL6c76FNGo",
  "key22": "38yHH5a7F7Ca5PRFbUcw7mdJNCVbWJuv8kR7ixgg6HcRQwAXsxWDrqdWDFLXBTHCjfYWHtjMiiub65tHfUugHaBK",
  "key23": "3ZD83V2FnaU66enNRAQU2YyaB3pqcB9PfmS3cTLn8Lw8LxAixKBVFTweQu41onvwCXybNsmGpVLYSh3bbzRrfY84",
  "key24": "3gtkktkYEkGSN3EwExKoqGrLeZJtQ6yEwEQrrxAQAGwKVWYhHDkJDNXHwJPe5oMCk5EHx6yRN3XzZVutkVxE7ynA",
  "key25": "3gY9VYe2LFhx1fhW4gL2SwMDQ56AphvSGuFV3eWN25FUBYtJ6VTiLPwfSJsqoJtRSpLQiL7GN2eaZdvZD7cNZggR",
  "key26": "PUcCqeowfLfYPMfF4nGschNZNESWyNTibRXpa8wPcKBcvhNX1kGJPnYCdH3ArTDkfgsZ7wNK2Y3YHHGP6LMAr8G",
  "key27": "39ncwnbLtMGNBFMNohQUVFUL3HNwY4Znd9ncwHk95wSTkc32o49E1ntgr5Fo9564DP2KC9MKJX25Yy5dmxDAopnj",
  "key28": "4SiecHtScCjYm3Nt3EnxuUF6weVrJMBfTw4SaXnzXjUBtFw8BpEGu5zXjKzAGUZXjH6ZbfhxpJUb779kmyNxcuJT",
  "key29": "4hEbZLNJYog5wNxRwLKR8Jpd7AQUiJXNRzKKVTD3h7XNP3Pga7XVpwETbMmYTb6TFhh4TtEP89fkfpzQUasBUTbe",
  "key30": "3ku9XrY3dPGufRCmJDwRfKBaH53GhGAbHfdHCKh63uTapUC7dZ2fqfH5C5QoHGtTPC1YLp5QkbNkswKHzbjmt7SK",
  "key31": "4Etr8msQenvtaA2nXKF6zgrjm9cWZRfy71fW6NUJQKJPBEDU7ALbik99rRaqTijEid5Q7DipYQYKTDKauGXjLwx7",
  "key32": "5Cf4f1g4cDa9hPskQ6A8bJWDh7Sf3j6P3KzXun1geRwXQzoDR17cSJAFveuttNDw66v2cAqgEVBT45YkZGisWb6j",
  "key33": "3mPuxDiVp96NwpzM1S4mHYrfk25KZhTRHsjL2Ms3gW2CoNet9dMLNwEjjLUT4UhNF6UqnJUqzEkAX8wwnnKMGgzW"
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
