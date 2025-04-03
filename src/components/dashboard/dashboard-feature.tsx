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
    "4RGJvKRbsqYy9BLH88iLN1QiKchbFBmNR2p4w41RxCX3ZYFryuqS6Jgcd5owf8ekyHmmkrx9zYkKV4Gkct7ucKq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mJPFi4fHRv3c3HpjNnbzgHpeXZvGG8ytkxyvkEyNo1F4dNF2PSsCkesUizpRSpUR9F3bqFPPRdjqotw8vvVBDes",
  "key1": "4PueUqv82ZM3rjQpRi9nmv6yugxrjmJD6ocnc6LLDZsqris9LpNsDGx891cFryCximz9HV5zvCvKBP6CSbV65AVx",
  "key2": "4ixkiJ68MpnjCJwaAY3FaYhmyWEhzF3usyNZL5JkT7QKTDFQw83DVFtn8sUjLwCw5CXT9A3Go1BQGKNApywhvTxg",
  "key3": "4P9hmQHrgKpTessT3zpqA4YazBh2rJESKqKAkDmjy9de7YtSMxMoD2t3GopYW5hXwFwJqkLXGRQm7FgwzTgwP2MV",
  "key4": "5sad2rW1M6zfe79WqBnJBabbuQDfFG7vbrUfLQskoKGFV3fmdwDBS3pXKFoodSsJ1ScxJMEik5SsLUEoJ37JSQga",
  "key5": "3gBdQsxanreJQtDziwZuXSbEb2JLP64u4pHxCVBHPpe4k3qMGsejm1ZLd5qaGWmGsb7TAsmRkvzuaYcD4AfjBQ7E",
  "key6": "3XpCEnbLjvdsXZA6eehYEGrchWZKWx58zUMi9pE9FjsrCqDnGCHkaXVwyNaMrnMLuDmj24edm6gkx1WhWFNzSmkb",
  "key7": "4Fdh7amLWPQazYsU4kBiatgmHLVk6GyyELPuczsJCz74ti5TY7BBcehEb3BMq6TbxCez5SspY32yBrNkUg9wzzbS",
  "key8": "5YCVJGEs3HPDkM3PQikDbQWawTZaRii9ZanCmYH2poTTdfJa51KyEZ4nNn398vrMarxFJvP5cibJtFc96CHhu63Z",
  "key9": "4WRy23Uk84nAR6Zgbj477kozVcDZnjiRsENsQVMCTACMZeWFQSUV8MVJwjTgECsqKUo1DcBznrZUyfFHsX9Hczbp",
  "key10": "4GH4FzqojZF6GeSfdChh98LirnzPrRNUa1e1nQD6hTWMnpkzRjd8sn6Zv5aXNyArfdAPgV4zN6zEGXPDFXSNvLAE",
  "key11": "bzcFZnZr3aeNctXcZVVXFXGMUL7X7aAL1zH4ZDUNHD5EQaE437e3nWSfZeTiXdsSefaX7cneDvjXqpqkH13U3VN",
  "key12": "5iw4KEhKeMzSkUrBq8JGLhtq8aRpxTBLnRFMagEEvd6CVNwdGiy2WpvMxsvDxCSuD73wi6STcqgis2wzgttLYXsV",
  "key13": "3UHrKjzY1Gj6FE8fBnpJ3kyZ4tbRaT8KTQhboBP6yQZEyDHXs4Ex14UCVmwSZ5YmUbAShrss2KpKpwnKnVyEc7Gn",
  "key14": "2ypgvEmSKNw63W3gz3unx7eeY7QZ9FiFCFCFua3E2GvkBpiK33DDy8sJgNmRs7aT7m3CrrVoTQESW5HAPoPjE4L3",
  "key15": "43jyJs5necph12cB8zWAzMx6rLemX6CrMXreEeswFxSAXg9SFXj6E3jQRUunAYYE6mpkczEHT3AhjwEbexwbvvDw",
  "key16": "4nRKfzPTa7wmbBzcwzDQWk2HKTUcDgh8W5ePRooesJMin7qDAurcnGjzezecGmapiiJR7WKXMtVPv9LX97eK5hvT",
  "key17": "5JR2nwqpvYNGfAmGFifFugpKYgHKFK5Z89P4NsrWH5mN3VV58fcoacjkSgUqq4FYwAtfE84VixzYAtnrdBGjNavh",
  "key18": "47qqfwey6BhxAy6tugh5k4doYLRWmcNBsFjpdEqj6Bz7x92bDW6FxMCNWQ1SoS5Zq9QM3jptpDGphUvj88mJv5Fi",
  "key19": "fJyEGSpuo2XAkUuCZkt4i9xphmySPiPhLNmj59nCcYuUGXSmnaT3tkJuHmt4q4TrnAbFB5T4e4HkXme5hhsert6",
  "key20": "5iiGZajGihqZv6c3rhDNo9NAUMuFRjauQeRAE2sXsoJ63p8KxYTArLx8RQSgGLrXeRftvCx5GcytHU3vuiwQtP6A",
  "key21": "2a6C78T6HaZ2mZJg8p6CaFfzBeWFosnUCbEcPVzKCTQSGdVr8AAZVq57sZxemhUqUHQVjeSBMEGvtw6kQnuoKToq",
  "key22": "sr36Pp44RQzoMyfTJqHi31VDVKWYyJrKKyFQGsMupHnZQeyedDzNk5oUbNND48JQDzyzCXJqzzaJb5xZJQVzQb4",
  "key23": "3paw4wL4SjJA7WkSByUAB3yxmCERWhZyF8n1DEzGntfCtsL8T1pAwPesHYjh2LdZ2T2kU75n3Wh4ezDEUAkxMvSJ",
  "key24": "4X8pN9Nc83BQcrLK1Th8EVw1j5QduzK5a2AiaT3NL7KLnPZGta1kAS3QZjGkWz2r3xkpsnMFuh4vyj6EjzsWjV57",
  "key25": "3ybbdSo24hYkYM5KieiU4H8SmdGpGvENvcgF5NDVjGmP8tAZ9zwnhkAaWK8Ep1Y9P6bPeKtpNJ6TycvVvRMfbZHr",
  "key26": "zqp9oxygTbDhfK4scvByJt9hGHMhEiSuG7cTdA1nJA5Am4W8Qh92jmveZx5RaC54b41CVWVZhsUAiu2LuZTqYnh",
  "key27": "3k6xn1VLqKMfvEQqL4baq4T6N5zTEuSP9QWkfMDwUbc5Bwhqa7kyU79CeFyMYdpnf3FXQPF7tEaKLp3LDKShUnPf",
  "key28": "aBa33RDZ9fT7HesoS2EmVtV8eMuitNuAcvLVKwgqhdAB34xpiTzpHNwRQLJJnVXhU1nBP8exdjJvtGRDJ2nkL74",
  "key29": "aj6ddAciF97qLGXgVEm44DN75AhEd9erzCcrW3zhY1ENGoB5uvBqgppovKYpxWK14p1viMDQH3dPiVPF1YuDaTW"
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
