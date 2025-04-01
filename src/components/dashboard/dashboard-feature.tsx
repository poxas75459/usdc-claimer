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
    "5noCDF1grwtwRueMDTJNzPASpVb1yR8ry92qVQ7q3SHPcQCqmZ6QQPRc6dzpgQ1sfxGUFNPWF9mP4cpbzm4bvBzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uzJuA9XVPKsNZRNnPrEYgc7HNjtEmZrNwknvbqhdGUi3qdfTHQXb5JSMMY8Piv89pEDRiERXtFUvbUjAveWv4gX",
  "key1": "65Z5QqYXpTLQLc7YEyb5Qs3WEJhg9W8RUgRzYVaSL2WwaYm8omMPBhfmTfEFADQ5FEyzmFmHWDZ4sh4BGn7nhTcF",
  "key2": "2NGKYKrtRTdFz1gyc472MptyAZntZwibkvgwUNQQvU2TTe37tqpopFt3Swqg6RD5kZZbJK6ykokG9te4oT1xEfzx",
  "key3": "61PAj25kj8Ak7eQ6EyodumVuFgbU4iSyTWuxXN9zqsaEgoiu3thdmJ9CYMZTZGRMja7iLptYTmFSH5JjLvUQng8F",
  "key4": "3gqQrfAuSLvMEhPyorMB417RW6yTh71poHCrCCvC5m75usF5dnuivXn3fcZkWjvcwmQ1A4aXc8GxEZotPAJfkyyf",
  "key5": "2gchhTwy5QjVpRn7As4JboSx4PNfxMHyhyRz1QxH4avxwAAf9f5GuPHKpUU2HRFFQr7x4uaKRVjPRuLmzEyFaNoo",
  "key6": "2LcmgLuYbmiU1hqr3h8kn5rJDFs1SvVUPMuKqdPXY2WHqeCrViQEhos7w3iijuggNftuVL59jPbmDwfGKd4T2J4L",
  "key7": "5y7zcvF6F6io4K898PhdG8nPo2VcLmpjdeCHgAfF8D9f2qKKQt9TuQ5F2SAVWmfkHiHzhMmUwNS6syTWX4FCWdtP",
  "key8": "2mJGTxiwLz9pgQ48NKuRCZ1uzkvNh26HpusZc83bVSXiLXBzBY1mu162swbSUj6VupophfNWjRmBPr8xrzDzCqav",
  "key9": "o7QRZVvjvuVJxjMvGJ2LDakqHsmaf3jHgK3Cqu4TfbDpFFbVszwivmEPEoZkNAukwZ4hewyWTkEGiMnWGS1Ft2L",
  "key10": "2MB73o8wa9FNruYjkFDy4TPwHR6RCBFfi2fWqU1R9UJ26f3mgcisGgBoYAsEnfkAvWVNyAYQg4ifLYdAL4N5jLHo",
  "key11": "gRbZhNoWYHHUDhymDVcxQCRQpf7ontdUiMHBoGKE1yUnGZEFcv9TpKeqoGZ6gx39T9E3qN2PGBEaqiG1qiW2Zn9",
  "key12": "5arBgVMhi8AxrmGG5nYuHirf9Fhj5SDxHg3UpLrzNWfxAgGx1fKBhRgDqJmqnpAhVDgzteF1m5zwbmXfLN5B6SF6",
  "key13": "4jPSrJqZG9tvdjja42aRXH2u11uvhjfXee3wjdt3ayZdRbAx8y6TCJ7AA9dQ9rqy4NkiLzdhYhbhkj6FpTjsRQPa",
  "key14": "5Q7CyWMd6o1M748ZMYsMd2kTaBdRigwRKxrKLR5EBvwapYuk1i39RRFrDTmPJPDnryFfgfoGezJzxifhAW8MSW3E",
  "key15": "6gZsmMpyxwm11oWLhe7eHCy6efhu5SNDEwXYexYWcZvxQnzSbmxHU1uoaC9GTVXP363hpc1Hf8n4sfe7Wq86Bzo",
  "key16": "5pzNyhaQu1fW3j8MQCPwPZsNKZVP9nByU8Y3pu8hmw6ZHn1CUqgpebURCGydw92f4RjWy3ba6iQqBy26H6noi2oC",
  "key17": "Tc3NHikqBFe12sCG5X7u6BPH9SfwboUAhnrB4QzMdt6WmEVXzrJZTWRYdkz2SEeF4f6uiSeUvj3om9Kcanv3JRp",
  "key18": "4uAZrxvDrVjpvREapqysoMn26GrYqeYdgBPT2Vw3qTJMePEC3QHmmvuQtRnkYHrScpaUmMq5m5cF1NsRhrqjVuEm",
  "key19": "Ve27QMMq6TpgoKqo4qW2dvCyAK8H9zEeSegKAwCsU2SBtt7iZs6QF75zdDgasF43Giz9hg7XkUzT1doftK6578M",
  "key20": "6wKz5fJcRRyRNjq7Q4irTL8WwwSyVNzP2n3PoqdraW8iyHUPpaq2spzcmYa9w6EevQtTE7yirweze3zXQFpXMW3",
  "key21": "52JLCJ4wBV7AwaTgaMc4eo9HGCjXs7j8C31vs2NF9kCQ4PDeTANy3PSQy4qnWjQA7QFjyHEYiqHCh5uEtBHuV3QD",
  "key22": "gxguCdjLm9AnW3o92i5NYzTWQCiTsC6DhzJLp7qt8UJuNmjV5ckSe7p33nFrN4LUuXP15grwG22fz8stLPxJ7d2",
  "key23": "tRpJqPZUefhBytGDqrrUWxArZrxfSBbwSYEiAfbxJ29M7nyQn6rAm5KsokdMnTNmC3ZtY85gWRJ3VK3dMuUgFcb",
  "key24": "4DxjCAVnsCxNqTghEz6998y3LTgjyz8jFgM152uNVriANuizcXiUMGo2ScX7R2KMfeo7VyZdqbWBW83efqqQN5uE",
  "key25": "4UfT3rHNbTSvVudKVpPCdDzviqe6h9fjYHt6mMQ6qyPZ5qGHrnnjRdgPejn6QFsQMN1WJwXJo6hHzSiwytzNDFHw",
  "key26": "2Vxqd2AgiUB723Dj3xErAtzQ6G9egRSRG99MCvUzwnviVZnJ79CK6JpdTbPpQn9UDCbQJJaoM2SJvvq657a2bgwa"
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
