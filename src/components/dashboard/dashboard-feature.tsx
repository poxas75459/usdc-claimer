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
    "2vZ26w2vNz8cKV1G6zgSymVdmKyTcP2BVYbN8ABTKUX5DoJY9Be811zNcwxPFZnQVrxTdU4aRuyfj29kYftn1LuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VZeaiByHiMsK8r7QQcgTLf5t7g938GRo3MqhbNJ4byA9127faQ1yNwXY6trxLcurYbN2mNounCGEhDzK5vKWYQ8",
  "key1": "514EfvAwt76B6NhNsWq322tRoUTcmd1aKML91g7gjE2FHTDrNCH3Yhox9e244Z22MHfR7XpLhqoKijw33vd2dh4q",
  "key2": "5rGkFngtamuPeu26v7YpjiEEjxYbwi5SczvnmdgKcSNmqu9vdVRgpSDRurvTjRcGUebdscBakjjHFxnr7BKn8wa7",
  "key3": "31oowWByvVsFcUJnMxLy3n3LLDH4D1T7Zq3bihcrJKdE4oSTkd3yLNQU9VboL5QHqVaUxkwSoDLgFKcZcJVGzMuq",
  "key4": "5nWncpmeQecoqxFUdJ3H3P7gU1P1s6H28Bq62V3KX28tPBwm1HaB1S9C5wu2aiGLgqdiAuShtE2UULxyuwjv7Rev",
  "key5": "5J42EThsmggimMcrfasUNhzXA1GhYrUVnJfw1WRavYFhns1N3jeQ7danE5iNycmo5kGKSztUoS3gCp6c9LRgdtB7",
  "key6": "cFnaneGYEVFPfaRvcogGZsy1bUyzcSPjjLEvMSgY4DoN9vEjBGmc8Qjz9mewimjx64hUybvxJ9z63Zy6tQNEtMZ",
  "key7": "3WWE9ZvmhW2yUyuL1qLzg7RPphfCcWZAfpkSHZnssYUrYfa6vnJ3v3AZR2QnNj65jPA98XnuM5FUj2xuHEejm28V",
  "key8": "4MSGnHxyXmYYU5qUAiUDfuLDYukXCoVTW6ueGK7PdFESNWoDthB9he2oefwnF9xZQvKwxA1DuRqbAzcSNZwzaB5D",
  "key9": "5kRR8YDFHNQrLy1oprdXG6PtkcZGcFjmiwbjRiJ26uhTpb9fD35TaaKJNactzppLUAEvLVgPgGG8Za1sgdQ84Dwt",
  "key10": "4isdTkzN3WGcpBdAb6U4RrcqrHeHwsPSo3XZaYaPP3wxejN1ko3DA8o49Py4f7UyiFh8nGXZUUmdNJiyUubGhhqN",
  "key11": "43Zbowk7YKEKjb8QRZxWTWGy4w2czgxDuXFt9aGodfrxJ1byNt22AaGkR4gPKCe1iwafsguBHmgp768snU5LhXT3",
  "key12": "4aYkFcAmN3UCpv8JZ3PTZNqgrQpxcP4d2Y4MQCRZvDw6GrKLm6hjfd8khR84EB7BJy78QBZoM5fmEjKsGc5n1ivX",
  "key13": "wXXq7gPTk9kFLXQexnvDoBHqrJSA1S1z8QjBLKZF8EbS3PdjGXEEg74U6ZJBM7pCDLrzwdnWpv3TTqW3xpnhvvE",
  "key14": "2z5cehxPHS8Cyezmf4sPUeypGBRnCohaAJUes6B86xNxbMEJnyQgtYnu6f2ufzekZcrPKBbXXD9Ym786KKypaFL9",
  "key15": "5g8EFP26AnsXxCt361adaHkZFnnUrQwRHt3vaJp8Jt11zEXJLY5iaNGEsC6AgDc5mSWz7Ui6SwsVGcFRFDkMm54K",
  "key16": "2PepbdhMDpTfPRHPFzZbbDmvaiwne3kCH5BwYjy5adHD6TUHeajE8XCYaA15hDqV4rqcMJNrF3aB8CE4ftgpbWwG",
  "key17": "3aiEDeaeFqcZ5brxP7vurhNkym5hBUMPrN3pUFvZMVDwZGdtmCM1rzoXDkobvDP9hD9kqoNwh1Hkp2Sveudr1V5",
  "key18": "kGvLgCmBtf3ivE295M6sEwY1Fmh4RjX7wSZgU7xHL6TeZeoaftrXKknUHAeivi1bDhgH3fYicnGHGaH4urCnniD",
  "key19": "38RFQxuura3FP9kjTVTBykwsuz6VoY8QRALz9qHp9EB4BqYERQE68ufAgYSGU98MPabxs53ur1iafsBtLHN943Bn",
  "key20": "3sgpyNk6y8o3D2SVxK84teF4g5yr4gk96kQaCh7EjHCgdFAFPzowgTCTRhLwaCGdCy4uUjTEL9Pc9HpHbMMS7bGu",
  "key21": "34MziAoUnsPsr3VMSqZRDhs9bPCobYZKMGGmnexEFx88Nrsn5dGfVJ4SzDJrgMpJxXQoytqA1rGJk8et4m34P5AM",
  "key22": "5VCX2HNNqenmV4p2zd3ucWiz6SqXdzz5KwHH4wkvuT5uSZVn6xzTFya4XDCfJXoa6yqmKWU94f9fZvUfJ6Lf5Bjq",
  "key23": "42Sw7hAVoiyj5m1F2rfZDZgDqPTMqmRTH8gFXuWr68av8DkkTG2D3Fy4zTJbkhWGBPukrCWbVcUNsXbZ8LPUxbgd",
  "key24": "3RoUajMMRSgeqoi7sa7wDySqgrkGtpeikai7RYCTfWShnQaRUnRHwSjgUeccwihsGcnTpu7CJazrsxBz66FkwLXi",
  "key25": "4khc3hV47wZR4enDWKxbo9LMCnsWiV7DfnubYYvv146gdVgsUJoz292t36GtLYUoYxhCrk3YjeD2sKgvZ9qd6bAu",
  "key26": "5GZ19JHEzG32FkLwRNWhiQBD9an9Rfm5vqb7J6tynkHmi8pee6CMUw5AgieWx6s54ZUUcPUupzVHtvJ4kC7x3coG",
  "key27": "XyDtDFkLDKd4xBzmV94EZzirbpXKchtpFwJQNwnJzLc1Kaug3pEwC7De6HggHhdfubvoAsA6aotSziAHsbJH8dM",
  "key28": "5NBJtcBJgc9ZTTDgWRA1tDwiEqvuJGVbBnPsis6TN5dW7zBg6Mwx9HxYchawBBPGQSqU92vFRAWsUSxa6azwN7bt",
  "key29": "4hZzXMaWV1WtHo6t2QSS8L8f7Ab8ad7NFCg42t7vU19e1o4tdQVVYzEp5iSihGFS44gWhLag15u4a1i9LMxNWXER",
  "key30": "3gBHpqwmqDdKCgJdJ5fnYcMSi5Kndda8M348d2SgUadC7bhkmpqzry79XrHCE6gn5jJX4NiGVuVNiv3o6QUgz8F3",
  "key31": "5KDy9jbYEpsMx5N5KJwjNFbUVXZPd83Cgwmk1v5ZNrVDz73KrDcHUtVJM4kGYTYCcJDV62ZD3t8EqAaQb8tKqjmh"
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
