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
    "2WvSLxb6DSa7UY9jHNSqkaFPkuUy8U5LTAE2ecGhCiM7TkYDonoGM4XpJ3v9Hx9wALDnc2fdmJ5V5GYEe1GhqxDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5j83EMjGMkMgRDF6XpQeip69tkQ4Eo1RrsYnMUp37ZT3fXyuJ6XHZHrwzVxzf2wA1j7E2eWjnuHj8jm9pk925E14",
  "key1": "2sqXDP5AJiwAGhn8QELog7XND6ZkBNuWD4i3HbNQce9T7yr5RSTCiQzWaUhKGkRD3ruppMyAFcewnmDzmfBdoN5q",
  "key2": "2UA5bbT4HDqw7pjdcocgk8tsm2GtmVSg1VW43BgLweSG5xWhuvoEkPQjNLgxngdFy4JodWFiHk9xv3JqrocYSHhA",
  "key3": "oLMSJo9PjtGzWASVorGEfLt19vNMtiYoHFpLmLRM1pHi62zU5z2fUXNSecP843beaevWqupaWNhV8ciJorkk1Qz",
  "key4": "2XEcpPaNE2jKxojjP1HcYkmPZSyAD3jwbQfj7WQmEaAFXroEad5RCQdcFuHE75jwUduQifuswGxEFdq2jacxmTK8",
  "key5": "4tfJsdzXufAyN8bp7NGeo4mWipsEDRKpBxjpw4rh5YL5455D4BuvadKJ4grQQ2PQKqQPBys5YCKUmzX8W6nkqp6b",
  "key6": "5hodLe3qoMwBTkc9kkG8kJJkpaKyUL8Lk8VUBDuyvktvAa8FK9f8Z4htjxqfPy7B8cWMeqj3cjzsfnUtHvn6e5nM",
  "key7": "51cbRTYLX2w5B7aeLVnUKfGCdEieG16tmwuXTDF2bAbuiuyj51uKWwJrWrdd862PVVUVErWB6zsidHCY6L5XWHNV",
  "key8": "5s8Umexv3N9uxCktH8nL1pCb8uHo19PySeSAYFCszkvK4HhaC8tU9GtFZmHqXjuHVmDjJzcspvK1CuYagc4aR3D6",
  "key9": "2ZBFAech5rhMLyHvvBGCc4TDLh5XssCdNvp5jPvLnsCNXCeLJ2yuP3ZpfRbboWzR7crudzeDfuiJFV5HKcK3y5oH",
  "key10": "4AdLNhZPHhK8C9SGLzinWQt2mwiyGhkGxntkHDq6AwYDLY6RCth4D3sNktLyssKKw3EscvmAdLsSYC9qXbASK9oM",
  "key11": "5AUqkT5nbQd3fLJwgpagtuarxrgZ1wEJBcuEbcKC5agzpT5iw9m5hrdBUX8MWJfzs62VyynKoF9y1MkDF3ebPsT1",
  "key12": "61cdrkfptvwGLwB6xeEz6WAbrinRN55kkEawM11BxeN9nfsDoUxyePAUZf8HDf1arF6onjo7WiFW5d69GBXQK56m",
  "key13": "4RFfFYZ61GrwCVBGmuK2FxjekrCXU9JXzFtCBCoopetrDTthVnTzU3Ukg11WGXvCWTk34MHAND6Gym5fFKhEPEzu",
  "key14": "55dZqotU6b4qo3nBeLRSp1WAbYhCqAA4N5TFNRE5rQ2GdtBrXAdFuG9GGmpnmXvk56WujzkXHktJvFjzCxnHJf5e",
  "key15": "Dz5mwbEYVVMUjaFyXSNzwmVweeo1sPi6ByjwTS89m8evPLtVcHTfdjeAqPffvpYRAAtjZUifdf1qeEeZ1paxyWi",
  "key16": "243Vnqs4UQ7MMULckoFF93NUVBBYef1L8ihPxZpkYs7ydsFExeyCRcDjfAhar4KkKuYCMBLwny7otzipujjujdWq",
  "key17": "5vxYpVVWwR2VZ4LXo94yvfyaso6WPm7mMkrNNUbkXCppuzAiiXv9sJRsUaAgsP2koAZw8QFqnyUabUM4PNhZCXXV",
  "key18": "3hJUEmqyxjeAF5Z5c7NUjKHSvRJ1mfUBDbmMSABYjWmk9iwjbzgMCf1QuNHisTXCkjoD3dSnvNeyYHryDYhe3Xi",
  "key19": "2CQ3PCGbnReGFZ5LGSsw4qmpeELDDxafgPtBdwXLzjxovdZqGGvSSpiC23dWAcqAaRpHrBz7svEPSJ7Hr5U9GXbW",
  "key20": "391g95WwzvPqQLUmDF6HVWvUd3kWBnFqpCfYZ9KqwL7ab1Jb5Asehxypq2iKbVpbuDZHPWJQoouV5a71CvLuEUtv",
  "key21": "3BU2cjzSbkpqHbfD89UprVqov9vpfQnY9BWk9sJxEfJrcrkG5CtjWRjBLfVYegPz9oNGaDjCbtfhKJpDcndF1uQM",
  "key22": "xr17Szfno17UJdfRkK4osKHc3greLsuMq3bXMfvAcYLCMebLRXrqmid9TcfG9f1aPWDpHp86RdjYaXA9uxYDyki",
  "key23": "2tAfvXm1PUHDnYSroywA4arFLRk3TGLge3jrdB3wQKa4yFwjAWdWht2EHFJjCgBELfb9TBMfVRaeFuUKDGLs5WgV",
  "key24": "TvKz7T96CRa5WyrqR95qbA1usT4WkUrfexQgeHJ6x4H7ebFBG5aQvipxuZ3KnEyGJTLeEnX5TyzRzsS1a6JhbH8",
  "key25": "4xTjnzMHcS6J1zuZJV9wXh8zWy4BRotgsPYM5Mhi6AXoFB2g6vcexZ7WaxTwLryoSAYwvhRhW2GLFcJJRtsNAfnW",
  "key26": "5AwBVqPBEAJwQSXoyomwZv8JC3Wwyt161iY6sWj41pCPm1viSboqe3S3LqLViSwLuKoiMuVfuYvJbC4d33ChxRDm",
  "key27": "5g62kSKpnj1GEvfCBiYML6p1oKtLqrdFvrJXJjR4YSkT3eZ2p1vnP38fNAUW8cnBf2W38kNYtENEr72UrFzv3M6h",
  "key28": "4qo2dVoo3zWCAJz2vCbUXxJkRqnVJY1BpRzJNs5SRwe1ZSXne3VcVbJtQbf5QJeSJBUvo864cXC34vxVYceYCFps",
  "key29": "2aMgxpqxGuTr2g8hUHGupqB7kyk7yEuHHhCPvEDt4WBZxKnw6boM57kD82i6Qy1jfsiAwXkR72LCS8EabdfUr6f5",
  "key30": "3HmPHxuKY2jRMQbmwpCj76Wrq713RXHEVx2Ck5Kh28Pitt8TsGXf1njZwwLAbtBncyDdR1usUDVacpK6KZ1kMYoU",
  "key31": "4kGDkh73PiZWiQLJTQVbojGShAt3mUSqERiQBFykVCgwHfGzkTjU8SDioJA6FMYFybeRjRkqggWjT55H86MPRU6g",
  "key32": "45V37VpbEQooi8TNKM1CUZHqQ71AZkmBo9x9htmp6xNoz5u4XxqMCNdXf2SXSCQQt6MLYBqVUFn9c6Kqs6cY3KSp",
  "key33": "2r8s4RmgUvA9y4pw2CqWbPM6c9BMYD8pGAXJtbppzwuwzyff4bYCBiCHZqgKgkDV1fZVAeUEPp64ScVHTkL838qQ",
  "key34": "2WcdPPUJUQK45oNCGmGftuSXq6fVEQg6rTMJuHqhUnkmfWDGovTdapfpdXfRSUZmkJhyBKCFzKZ642YPg5nt1frG",
  "key35": "2biXUpsMQctF2N7tc3xFbwun3roLVXSw94SCkkeh2d53hAD43ha9PzWM9chsL8TJM5figtK6xLPMwe2SkomqNSNb",
  "key36": "5xPTjUUN7YLABcSvxVNr51uxw6Ucsdjhf99FXozsJZNbCFkWqxEsTWcURarEU9FtE9pbGcW717hXyfY3YMXsrzSf",
  "key37": "3Dx1jS6juKxfBrfpksuPQVyubcyNG14NgMXU1esXaxKt4W9jyPbEc5wkQz9zocerfMbSjKowozC2suhLhMF1fqw3",
  "key38": "3CVMxCY9XjkzUZjE6jkSitmYAPR2FcfS3qNM5yFAPhMuTdMPzkrNpvktJEkMxjDbFz2xYKffhWANw1Ay7G317fBR"
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
