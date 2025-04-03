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
    "2PgGrCuWaEwN12VjopBh7o8r8MkdLt9nyoueHS6qTh6ACjFRAJwagjH964mu84bRSEnZn5LNjEgk7cyj4Vh4nYqv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48NPTThGwR7TeA5hipxnu4b4DKhwy5iNWXts363Tmx8JDRchhDhRXbBFMg6RBKEnUPkG7P1H5XhH5QY5TBWBZZPC",
  "key1": "21xtqUoht9VgToYn8LwSsu8AzDizN5VBEC8enBUUG5kvYNBMMRnm5oH3z24ktmjUCa4GwkWM1ZLN3y6fZzFnhdrf",
  "key2": "3NGnj8h2HiFc5EDstKfGJEgxe6QgypnuSxbJXiDXZbeBvrGUWgd6bJb9Acu94dGvJRb1TcDFzoQvme9egxZdWgNZ",
  "key3": "5i9r2bEZWtGbwkuxXeLbd3H7VPQ6MgjzpM7Cz1GwiRaieNnay5hc7V1bNEgEMZoDeDwEN8tsoniwnQNbjBvVpEoA",
  "key4": "2o5YvrkBuCtBi2z6XpWD6LruCXe6vUGtRG8tci9bhRYWY1Znz6UU2xVzeaRCmNts7ha3D5Dey2YS1DF4pL4sw7pA",
  "key5": "NmQtYjHL6WUXM32vhPt3MTkPW8981rmzVnrnuwQGbmrPHx9HKCrSobUeq88sYrTjk7TPX2PkLuagthAUZ9Xkk4f",
  "key6": "5SkqenZNnh4oW44hJ552pTCfAjtwJXMHZM1cA3Brw9J96ya4wcLrxcycG94rrM7Q6r4h8cVj8xPiZ6CYV9g33JSU",
  "key7": "2meR2RnSrQFqsGNZfn7naKVYtxrAbebGv42niJsksv8Dfiy8NikNhbWAZgY6fY4mGULrLiHQa7gSPe45GxaGRefp",
  "key8": "KQaW5z64FaiM4cHthaKtNRWB6vEGHYcjDCmQKS6v2FFY9aSG6ZHZyXGzsZZQitkXLqsjTx7R7x4uiEiRYVEAjLb",
  "key9": "5pRFt42fpK3bdNTSCQxdtJ72hWvga8BQqFbWzreZzBUATszG82W516e3PjAQKYgyhKkpeJ7LWERQqo9AZDf91bLE",
  "key10": "4ydvmmPPY1oN6gwfovhpGpnVMY75Lw7KfRJFru3JJUaspRaCznEaSeJXo58S4C85rsHrHUzewCuP9SvVdS7eCTFD",
  "key11": "FK3F8voA9dGYZwxEhVisTX2HssZwTt9PkddipypzBATtt2fiQAqffL3Lrc4Cv77qmQEG7atYTKCxbfNrbKoMaNH",
  "key12": "3nWdCpasm5mBgvvHiwi2XyG4zJZWWZqBjbBARdhbUcDpYX7KSGuzdZaYt7HQm6a7okbWLA4MXbPULa6mp2sKoYk",
  "key13": "5dW9MhTZMYmcxGDXnsYjEYSgmSPG2aE9bNJ4TFoCm7LKNmhKodxvsziwC91BZSTw6yYCz8ndQH23aa3rbaYLG6iL",
  "key14": "SpXC8J2feuQ25ronUHkgEmzBrs3Lk2kVZAmnRyzADqFbQY7n8bTQe6cFHRHmsFfks3EuQVhfmhaNQZpqvr7RtBA",
  "key15": "3r6bnfQKaAtby1demFhkNbgJnXJtKJ3UPZXW8LnDxXqTGVamZKVeepWdQKvEm7Miz6CYdVDFdosHUmYtT9rBHzqb",
  "key16": "kTjTRspJpAVCk1nJDGQYfuPQbgkHrxBHGGBLDC5DSCw9S3UbBfwpj1Bz9kCmC1DvpXPNRKiubZZeAqUCpqLkSiJ",
  "key17": "Z8gXxeeBgNWjfW2qkSXcuspmNFYCVEMaqopwRYo8aTK8Kc1BrZ38527wWiG3ScRnYgJBr7LLiEjszNVjWgLqFhJ",
  "key18": "4LYbFt647mBsLAzdjhGtJUDU3aSYKynww2nrqWhBnzDSy8qURL13PBf3aB26Q1ttWTnfJw8Hs4VVz72ceWGFCJhv",
  "key19": "5494ie1GfKH8tPWU29gXVuyN29UDJXMiRDame5hinMZ4a2ft1i3wbDKcbBUTfZiz5spDR2jhvLTiXkFkVjxeDcF1",
  "key20": "4Ued7kMV9dRUL8n5MpSSxVRnoEP4bB8qh7wg27qjxU6F25tV8NejwaMBFzGcPZpvismcGjD2sWXnxt2zwseW1RGe",
  "key21": "62tLoh69kE4jyyctxuorwebYSrY2gKowBJdRCqmFjs8CZtwY3q5QimanCSiDU9JD1xqmfLHJT4x1ZoM88BPK8ZC9",
  "key22": "MycpHEhfURYmYUmDsTfBAiDUjc8wM9etkJLqUBfvtNZnhTnxqtPBvtd3yuiG17PgvvjPmHCnBSgSgCCrMrDRcm3",
  "key23": "pGycLGWC2jXQb2myETgq3gPCMd9Lp4oshjXV5DQYCdv4uM9cycrQSWwkqYNoWc47N3eL58Nue5pt3oU524DX7E8",
  "key24": "23V5Uipj4QiA7P13i5GdARGTgM6qcgCZtHdzsbhhBYGs7Z16nNGYDkEeCex4PU7SzfREpMQm1h2q69tdDd8V4T4f",
  "key25": "E82DeYLk4NvxesduFuofcWUpVEN8ULgiT97cHPRK5dqbaFw5B2vFm8LedBfVJHWGM3Mgwq1eqchUsTTXpPdmtfa",
  "key26": "2h1MbHSNZ4mwhvNwZr35ifUZHqkA1Vkfk7WCMAhbFvTFoGP8eqbAYr7qARFm9rGdyF4rCu1oMB3xqPYebNz6d7jB",
  "key27": "48yEwyexjdguzAUuefzbzGTybvEMffXLe86PUmVPcz2E8s2PuXBkxyaDucMJHF8Uv9TCaERvvqAWSYzNFLTPqXNm",
  "key28": "3e1rJWKsmhho4PrdoNh5VKLyxxxZz3z6bRz8shznU153evsm2xC8zgH9QSLikdggxHwY5VyQy4Tknbs7HDCVaWUu",
  "key29": "4dRkn72rAWhqKVWXAmecnSDJ5k5TRhYzGSoX7YhvoryJmP5qmBxFa4wQbvYAnVkLW9sHCCoPX1ndHcGNoSk5f7g9",
  "key30": "36cFDYjk5pVKq3PKQt77c9GvXFgtQSUbbj4c4s5NjpHK8GjxGur671C1PSwRXTFXuFpHCQHTE61GPQVmouiJagdz",
  "key31": "3FgoxBEfLqfrcAxiriYsaYGGy1ybigAPYrc8Y7JikBWmQFVUgcBLG15qgVqHhFNVG5TB24Tuj5CEUPAHAFD3qaG8",
  "key32": "3ZyoJxN91XYHZ88auCYjmEjxztYBpERDvKZUZaDxcNDVgyGrE3HatRP8vUJJuoErfcP8TCoUoTDnZeVueixuyU8d",
  "key33": "4sKHxvUJs9ZAvwMKYJQuJC1s7fogK5FWiu9n5Dh8BrSZXftz2tKZMAiX4h44Pac1pDf5FCzdbxN8NDUxL7vrYXRr",
  "key34": "4hNZ9rDsTzYhQ9aSS1Tu6V7YzCNEai9oZGS9P1aRgX9vk2iyx7YKV1B9AZS7KiyZNkNnsAWZrBWBhioGt1op9wRS",
  "key35": "4Gmd6Br2FqgspMFiGTKK8DmtyqyLLph6EbzLM38XQaz2TvaeoapzC78DEsy3LPK4Zj39aqmKw9vGGwjnMCDAkkgJ",
  "key36": "39dvMnkn5NuqzTdg7ibhqkMGo8ixeAvEWc5ScKYJ4AXAt3aadjUeV7mTGA5AYep3TMbv1jjQCXTVWGL7kweSpp7e",
  "key37": "dNDGow8FUoySPQRscxeLPZfV8wARVwSMXXq7ePQBGDZbYpdK3rB8vkG2pYwyBGCv8pMaWH7SqHnVCBjXra5u9YC",
  "key38": "4BrZhzFQRqjceevKd6ddHzNjc4vbfESJmSzWs9C1hxGc5RAzqAEXs1rNvT7VPXdrg6Xkehku9Kitcn46a9fza1Xe",
  "key39": "3ZZZJgrrPEgwjs1WWzz8g3kPZ1sz926TFBwUQE74rJvibJz4dxcVKDC7X2WyA149nC5Wi6vCAjXPN65rwAWkuRav",
  "key40": "41A9pB8PXHsnZ5F8uJEBGDDS3WvFPMhuksYGGrE78jNF5JrqP4DdmhbubNNSbMjLo7VucyHTkopfbQfHwemzi7zh"
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
