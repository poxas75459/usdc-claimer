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
    "3z63VsuUvuxQQD8pETFwQVyKyX3dTNHZrJeF5Z7zUXA5w45WVy8xkLMT5QGetZd1CssuMvEmYzAGqYXZPYpFM3WK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NpBwmgVnFjiy1DseFzQh2fFrKNf1AXs1gVvZFcRur7r1TWyPNi9tRcuugaeN5exnRBwbfx3Efhck799H3zWp3ve",
  "key1": "4kUUeRGAD5AVZqqAoAqVC9fyq2xJZCJyQr66Jzff1DUHPxbPc647Znk7SUw1mvBVjRZ2wJNAQjPoRNf9QzN1yq4k",
  "key2": "3hLGjddp5SoVhVtQTNsbvLkkqPed1LasSc3a22zGQehiQrdKMU9pRKT3d9pcuxZ823rDrgUiNA9azcf5aYbHGgQd",
  "key3": "2Cfnx3uuKXZ5MmjoepjiS8S8CHS5AgEtH2RcvG6cEA72QiiziHbiBCLUoSx1uemfM8NN2tg5ykD555K2NRmS5jnn",
  "key4": "5pRpuabSMRnMi4RY7k167SeaYza9j5w2rpYW3rW9ETBUBgb4WUj9MnH2qCWZJzjMXcB12gn3JmAEdC1LLP5KCSeR",
  "key5": "EYYfL5XLd4uZoreGSFmUR5TNfs54kAngBMLUBGPNHxoaZNofJNaDJ8PkuLBYg1seCCKzEqvHHjzoyJxXR7jSRgH",
  "key6": "2wZ6vTafx49PdmKVCfb4ST6Zr2C1TASfgvR3VFgy5EEa2kmrhmMCYRkiZWxTtojW4Bftf4FZqPhwLoEDDsmzB91o",
  "key7": "67kYegkVM5NPiBAytzWDmAbN6Dv4VT5CbbFZLj9FXSSreZRJkukaZfD2SNdFLyKfNqvqAeBYbHj6bDsapA7Tt11N",
  "key8": "3U4gNpn84GsG9P2Uw8DmuHbpTYqo3fYB7oqpQVZLFbGRSjjSCCRaEvtKLfWQRJ6YCSeQd8qnYYXNv9zY1UirueKg",
  "key9": "2WLmudetieT97X2zdJnbiZUefqNH919ybqZBcd9e7B8yzsfr16hbNX4ieXJ4HHSNGewrxtPa6tkyp6tXyrj2hKQJ",
  "key10": "3KKYrfHAvhZVnHgvXwBaawWYAuuATmgm5fqCgimYcNTVkFCUdNjuxLTXfPVi5hGkdWN2Y6YpckTRwd1gp8b6ZV82",
  "key11": "4famnAtQ5SnSLFg2usYuYAAJ9ZK5gSzojNQqmMoKrCvjNQUERrNdGWkG58dZPskcZSBvadhcC1z6f17daE7jgbKj",
  "key12": "577gX1g6sqt31oNa3YnwEoPvcPQmp5UBsPk7cQu9jNNdXLX59mPU5hJhZ7oguTJsVF7aV1ER7MVRKYTMhh51rDxo",
  "key13": "5rbXT5xRjQyKGDp4HnRXwGs2LYNWQ1TVMcVmqghwmsbTTS8scz1W3ZjDP1yKEfkTfDrmD1eg8uL12GAV3HzcRRRu",
  "key14": "3VwvHDukyPb86Gd6m4r8wVD4pxwLfAz7joUMVmZywSGy9ZDeJB4VE8pQM6QsDgz1DRoGDENfJYL8ARBBSZmkRsEp",
  "key15": "4SBResbnm8KkYicB1Hb1Hpc4sceZnCW7SLU7RqbAxdM86Zkcc9R3jn13c2c7PdgBmvEL83KnPeZUPXWb1k4gUkKq",
  "key16": "5w5RaQTPyEptmDtVN8LHP9k2vrrM7EGnZqf4vabAKgN358uHLNLJHKRnbWbCtpZ79xQF9D6vQ3Yxw5UAc6xWzBYC",
  "key17": "3gmE8TTMekv2cnfSomJTbrHhJjUbRBr6CWJ2ZGW2L4942DwdJS2XdS7F3WL2hmKHh97zfCEqqFs8g6ZQWszKMFxG",
  "key18": "4sDZGafC6pwdEjgcueYL7YvjHVdsWvLytG2FtMmouHsAUrBngPSkhhFUAJMK5ApGfGs3VUykRk341Yyde5YdfNtw",
  "key19": "RCfzoV7mHEfbXrPsGxeUqWNf6vMxUHECBVY5PSkB6K1n8HPGd68Fe1tFQoApzFYfw6xRWZYJgDFxYtvJRpQ8mqa",
  "key20": "58GnegEaZ71H3mcoRs4RqfoZNn5pFzK2jvuJYCi2XWjsx5TqbiHEhM3Agrbty5akKG1g2oX2d84rWcePM41eX7QD",
  "key21": "3HE8Vftd5LGq3oBhqjDoeMYmQsHvcsn4pNfgBrpoQwyCPTKhGcHkjZbBik5PPqBuS3mNd3PmD9T2ML3hj7wyVQGp",
  "key22": "3CgMycnqZKfeg1q5eMdRP5SYW3xmo6NSwnddszZfwyciaEcymaG8uYqsb3Equ1JTjnh2BHH6QuBzG1fh8o7qHFhH",
  "key23": "4ywkzXN6n4qRnjS2RCkiQMNK3XaXs1XP7ZMz98pd4qGfiynpCxEizbtQW6ArVVwD5NEjy8xCHUF5HGd9v8yHNJf9",
  "key24": "2ViQHegKevpftbxpz8PxkJ2ueymw7gUrkdhw7k6vwAE1fwmd6ck9zw6Vk6ugtAHGmmKiPGgRWfT3SkPyaNYpVn1W",
  "key25": "5boTs9U84ovgtpY5iTWGnwt1CWLa5Qje4QcFcgLairtB95tihzuMcTakRkL5oHLg9pbsyJTY8iouAoqVjxVe7Wcb",
  "key26": "5WFCzNRJjdsU8vDkaHHHG69PMs7j9uyeTYBb5XMNjyStoxw42qnZM7LWfPqfeM8bmUdFBs2gdaUzR17rjJfMySM1",
  "key27": "4GY4GV3JB2sBxBpUeLhy2hkxKLYdu15nWXAYLURyvaamFbHRiFyhpKzZiGjGsGocvNCzsVKmcLBf4hbX1BQd5dHK",
  "key28": "63XNbP2gzKdWExDGNefWB3aWUF5Yd9EdJ7qXEZeHckYrfbuYTXhWaShLt7dC1vL113av3ZAPwLyBRw4MrnWTVCUN",
  "key29": "5r8CaQooZ6X9nvrR9xYgxHJYAMeLHseXKLHvi9fFoo1FN7cfbTGT8wxF1Qr1SwQVXbGNNDVXNchmuQycvYpZ4WWw",
  "key30": "4q2Xq1JRzcj8kVBxbHwZ5j5waUS1yZ4AGkrBRu9i7EkcrxxHhy9qjhmgfBybi1gxCH1H6oh13NqGVJ2ry9xM3LsG",
  "key31": "5jKbjG6FQV2KbpKGkndSs5vvs2cAuoAT12Cnz9kgCe7QdGh7cRbwNsnUpgAuYLaCwWXPwPdZYGEh4q2aY4rL51ab",
  "key32": "3QHC6r68aXhZjcv2fhvHWe624rpVoyyGzTr8dVEdtDERh8nmEYfY43PQfg7JfatMRkKCfgojKo3HpzG7x2m8aAcj",
  "key33": "LEGbL4WtKZzT2wmFveKgFCJh6Ahw62psKXRd9dzDDMPaVi45p9Eo823prpU4dkYynDqxUo3VLaBwHv9bg7tLuCA",
  "key34": "26sHevJo8BKL5HLdMH3VXNnJKxCASKLbAbMrC8EPht1o35RKQhaY3KZ82VsXTjzNJdUZyZf7igZeNCApcoxUg3WP",
  "key35": "3QfYghseVMivyxdAdkhvcr5eB1pXPyuRUw7dtUBmM4espdBMDR2fnQD634H4AvmwK6rf4bSDm95LxLvjJG6L9wtm",
  "key36": "5ScZPQDWkhoUVktwHAcVCWd48Gkh5npxXYE7rTeEZ1a7ex3XTyjELecYSP1uYCnx4jU8kQQntVGeebxmwtbH9pYN",
  "key37": "2JFU9ZVpEN7ZiBfNfQ7h7vHuvCcF28Du2mNfbMM9QsFjycVw6VKzC2H2f1fMfvVLpkSwV8ivnRa3JfxJB4Peg9CK",
  "key38": "PAsnw1amewLZQ86n8oen56tr7s4yFVTRfrU6wKTeQzD8zyyuecWzTzjbCdE1a3xmwtrB83G5PCzcfwdzzPhjd8k",
  "key39": "2efvuFhXzcLBYuP9RooJxnL4M2mgzSPtFJJaDmh5kTRwuuxp27omKJa5uhJ44JEfvJbwnp6aSsDJ8caZjdt4Ukn5",
  "key40": "3STK785HChH1DufY2pyrBib8TLEvub1QxMv8MDRTHkVvCwMvoaChCY4juG6QBcBoeww5koir4CWBhpbPAeXae96m"
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
