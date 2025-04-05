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
    "4rTkwQNqLpU57VP7UfMT3zoxzkTexRVFBaukikQKdN4RTJYNXvZ9k8CcfrTobbkqY96BfH3K4UtBJcPGqPEx3iWU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4F6FjMiARrkzstCZvhLx4PCzajUPAki8f8vPgTF8k8WUZ9n8DQH9Cd6d97h59FtZshJZEM5FnY99XYGCKhF5kZU9",
  "key1": "mkjzrsmSvsLdB63NNVhfG2ESadtejV5zEihGu9czCzsYJU2ufUhFyeDi8bvbtYP2mBQZrp39XQDEbbBtbH8YiMh",
  "key2": "2pDx6LYwiL4V3zcmd92GTTe4RquQgnXFaH5J3ZdP9Msn2tmvZkJuS9QitKFRKf8NVHChnhh7duZEsvFpYMm86bof",
  "key3": "51trWUirLghh5KjNP9PGbqPAJVRjoGLrRCFW4FrnasarLNCRrU1ftuapVukhv2wbTRXXtF9GQMxhdMktfeW3Naju",
  "key4": "3ZhWZwtANrd6Ry488YwButWUN1uw54nvCVMfNpEZkMYRm6JMUbdKoc8R4JThqsr8BDjDQ5k2q5akZESJjrkzMojr",
  "key5": "vcPV3YwFSpCZAr5cqZAvj9LLaTHyUF8Y1HKTeV7QmBkkgFt5FvNxugLCn5cUpmkAqBUZRQgcwCeXUWJnCuUFJEo",
  "key6": "5KegKUcVRQ22dRxEc7EBUczKj9Te2HwjrApkccXp8M4tFtN2Ch5VTEG6hPHosto7F9ymNYhR4oiSaY8jDxGx9tNn",
  "key7": "4CWVo2PK4NKpxZDSeLQ3qQFctif85NgszBw3MdVmrRRMM1FRzbLvANinWgziDZvHkqyhDVcrmF2qt3JkSsTDmR57",
  "key8": "5coc1AJD7EcdUWo9XSvnrRAiTPpWPrpVBCff7KgrkDHyGbqAMFpWoqorwH9dKZHF9HwJR52XJmjzaMns4nVKPr5X",
  "key9": "3JGFJNqu85mDXvQzjtVHqeYLkFa2LWc2oY8YsoZZDKKRTjZAjxtH9YRdtedHxVZoTXvd4w6Rvko96kReJY2TceUH",
  "key10": "4fRVUiLLirRbc8HakcKA27ZcmnLhUasKRGGdpJM2taqdhWS3ShW1t9ZLLx169kkB8kHWjH268Ksw1yA65X28Jmpt",
  "key11": "49Uo79yngRiRsUe7dAyW7ZLQNkkesgEtxEk7aBY4sNSDLK8PKMGjeDfCZMcZzqBfUMUC5KrKg3enCBHUNhCR3Ctq",
  "key12": "5LYxYqMLEhwmFujmKjsb5w2thGJBdySS5dugdQstA9Zbn9naheZomNFhWZdEeFVBX1aftgqEZbYkpxDquREY5G9n",
  "key13": "5hKRYFyeWD8kPiX8xqYC9CXNNm2VipWzZbfA1A1vAt8ktmT4LDP5dZ6ULQLMxipsr8QvhBxrQtxudCLGnpQg4Ki9",
  "key14": "62nDWrbveoyVPBcHWYvtrjpfHQScGQ9NgD5vUxDjCpYv2KG4bQqstMmLh5yTJG7eTZPBoF6NokSjrUv1yZcm53hK",
  "key15": "4Hz4ZYedJMnm7XcRKj7ncvTU4Wme5EKHapVakot6XAC9Rmng5z9Fxs8Xp2HSTA9AcKi6SL7QVphBcjrZAq7A5QKw",
  "key16": "4XwE3gg84mCdyvyyt7aCBYxYdLiHYzJ5Z91SLprr8EE45NAe5P1pUCutACK1fYfEDnoMscTtTXmqAwdiw4GQjKB1",
  "key17": "2GQDfJcFXD5ocfFFPLHxFbsDoDfJBiWS7QbXUAwexXHenTrtPCQZaMdTPoMXrQ6hQnEd61fuUgnLdgbXqa6wWF3",
  "key18": "5y2UrdmcfxkT7hRp5qVESRTaQiLNfEJiWL6o5vN9vssJ5aVDD5LXkiW7ru1cLVMmaLc6hzYLFdPBkZ6TjzCFNg5",
  "key19": "34SKPBvkTcJhn9BdAxujsAqgZ3kGwUQSbiQEMHUKejKyyYvHyTdstHGA396sKdxz2b17XDzPUskHoHvMc7ZEoGw9",
  "key20": "4j1dF3zXziW8q98Br3dfvmRjdfn2vP3HjT3oV5qAwpNpJ53NNUjdecwsWuyBaTdU7hz3gZBr6EUsaoQp1gFsjPci",
  "key21": "3aiVKZDhpT7zBPPs96voFMebJ2H9oZN4wFXBKHCHkwkVybFDxzscNWqNH78exACDuZRTP1hMzeMbZ5DigLFzB6LH",
  "key22": "5NAi4uU7kABV5CzLuaVYTKsRLE3DZyZ7wNcibQEJm5Cd33pibKmegcXRuDUKtTWbByKvnYtNq7J4QmN7XxE6QGa1",
  "key23": "4PRyoJ9pkgMYw3uQAHPtiKK8DMZ6ge6DuiRkhow3DCeBDts8GTNNqi3XVzhC1CKMcoqpVmBdu358GA2rDXh2xV4K",
  "key24": "KuWSftN7dLjT3g1J9amSTN8nrP41FJ7GZMb1ZfeDYkrq8XKYq5dfcxrfBuPJ5T7wVK1zAeKRyd42XaJ9CXauJEV",
  "key25": "ubuGwrTgAkp3H8Yt22au7kTaJekZE7MShE254mjueRxicmTLXZzncX1Hhqv9YXHECQegynq8AGbARKtazLPLSsB",
  "key26": "4u1Ki4ub7TiiCoCYJGjh5PxdJjdkBXSfZt45Vc3JQUQDairAEyaesCtYbgZB52pa3CrCquZu6WK4rnBhCcQJ54Jz",
  "key27": "4TnQiUaXF4P6QsYVkF2kjzZ9hSnf4hUyQquTSk44rYkdn4uuiTnnLo9Pbw4Yaw2dfb1zUjefc86Bh7vPDjEBsNp3",
  "key28": "2qnyrvZaEuyZgtS14DgYwDwxDgfRQKWbR2X3NjC4EpbdGjj4YKWFn7ALyazwbmCRQyiy8mzePzsE7WGT4Vr2P8Gh",
  "key29": "54sGgowLes5wMjQC2gZHQEisr6m2iZPj1hBjV8S14BhrGcGnviLfR5GdThs6kc4vMtZq5bNY5X4EUJ64SYju94zY",
  "key30": "3Q6X3kDvirNXUB4k5y6HLcQoZ5FEtExk1kDCcQRAdmnFTJCi9uf6XTUWrBANSQG6EXUZGjRuY7krMuVomQBuqCuU",
  "key31": "4WnNs9vav8Y3tyQy5U7xN6jyPHZtC9h1Tw18ek6ktDUxWNeP89stCLvDnUeVxifp8G3U63PjSwQCBeGWZ8i5wCfA",
  "key32": "2bP7pgZF1Xhhm3E8Z8pvQZfoLen2SL4gy4GaiNYpnJ4zqeVtZsRLsVfwVAwnefNn2rRMY4oJKKPWN3mVWWTpg2a6",
  "key33": "4ZitpWQ3rETVw6XNGK9D7qRAZe9DDhniwJ8B9zwazKftEkiWGwPLxw1SfppggLA8JeTtMAte7b8P5vh9yt6oDB7Q",
  "key34": "2w6pEsAgitVvsoHA2pG3bFEfZCnmSNp2ZHX6sxFY1oxSL1RY9WRd1uh8GfidRC4xSFezdaSDjYt93ocXtQf9JK9L",
  "key35": "57t3M6ooP99X1FaJLBQcNwiLM8iifBBf7mskgYC6ZM8dNxePxGei57wLELu8XZYH4CW9KT9u1F31XuBX9wdYVf9F",
  "key36": "3jvq57tRh1PAXC3ZcNPAQ3feuLs6oQvNGDBJtr3jpeZddKRHPekzhkGpZS3C46yC81oGZ1xcHr5pTy9BgWKpKqS4",
  "key37": "2wuUQLWPtdFzP8AbzMzCUSXf6wZve2Duqb7xkmtwDz8zAmVSTJxHKPdR9oZ7Qt6yqZSL3S7sQhCyQTuEDno7a7gi",
  "key38": "2mo1ozpEfHdGKw5px8dYCNk9DfiPjosEKFbwxCnUgK1B57vXKtYkLjbWXBKRaqovSGBZ96kB7itnF315YEQ1WeAh",
  "key39": "3sAbG2VacqbWVoLN9X6pFbpDwLGWKCsoMtfXePw9ttMrBwSMHKekdD5A3DMdmVqaCiQLZ9djUnqvKjftaPYKjJPv",
  "key40": "4o1zUWt6gfKTkLeHWTXhUrkwGYLBDAKGSMEtsMVn1NdxmN36NtjDe1gRVJt8oRVaKhM2dhTZ2ZdNZyua1H8CUzih",
  "key41": "4A9LimdwQS7uBLUgwikJnvQTrDtspVDJ66VJ7bTX8Cc3F6EdWH9Kjpoiwk76MvNR4QmYGsSzQUu5unsiAA5GfXWh",
  "key42": "N2SAf4qdHsfWZundR5wAcSv4KSHq5EYLzTTALRSbJMqov964i6Bi7dqqJspBqKbAC2Tt8HYaDeDMyKsLy4a4ABN",
  "key43": "2kYn6F9mHVYZNBTmtz315rC6ViTP7Mq9mL4yGbuGJr6ogPsHNzA5SH16Cud4duQMuyqUEsyLcBqH1LLbKSrqV6ts",
  "key44": "4ZEFYWPbx6wGuQVJZCpkffUyQs48HkPcpxC486t9KAuty1H7rRYfER3Uz2juefKegtFr4yaH7mCYHxtKJMf8bXFD"
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
