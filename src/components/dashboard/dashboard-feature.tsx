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
    "CmrDooLy4LStnQFf2ieBRi172PTvZoWc5vjA7kLYdVQAbYUTpGDUhH7vicGAbML6zSAc2v5DsiUqWAQuF1SeyGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sPMFMY7MckQBs9CX4xmRumS6r4kX78LVGTTHyAAAFdAT7ardzQkh57G18JhuFqGbVdRpGDfxhrkuFEVnbthdtcU",
  "key1": "bWbSwJxnpgNfvu9yZj9WWQHUarUnAGQLJtSKSHLHAigJwMCWYd8U5uEssJuZLaPc2ya3dK4M94vuMi2sbnsG4G6",
  "key2": "5u2fQLL6mHYGKDNUTksFZAgeAC6hMCYrLRQTeLpttrBn5BkY9eQfT9gjmZ9HuguVTywG7exS4Y3HwxmNhFXqAGQ",
  "key3": "29bVwZANRvF4gRNTZ8mFbzWKt7x8E5eormyoTeX1P3eShHBEcFE7AUjG1PKnhpZKNrh5WDgmGAE3tsrWKV82kasy",
  "key4": "2mEa7RHjpBt2XDx72pRtiVsuTSNTLkCcpSqWFCzPv23jyDCuMWmh2FxEugCqh8rAuHxXy9XJEiJguPo4hUvJxYKC",
  "key5": "3Lqn5NR3grMn4Sq7PpcyTqsWokiZ6vGLbNeFexZt8CaWFkHTW2DxvH3JDGjEAahSD93b3A49aSXD22ezD2QgDBvB",
  "key6": "37n13M7TRSH8rw8iYGVyaMxavh83sAJWdkuSc6X3sXK2sr5XwsewehCdm1gEntMaDFNvFoaHN5EHVkGXBeXPsz6r",
  "key7": "eABQcdveDV1yL51PJnJh2Rn9xxbWHCszAbY49Js4h5ceUttb3YAPzDL6uuR7meUpzKKkcooPVbZCZ7NquihzHux",
  "key8": "5cpRcvUgVFHZBViaomcJBy94Vn9x8u6vjBpLiSEsd2vTCmTTarnBpDoGks5bppr9GSJWjxjeTV7QgyftAKKFRFSK",
  "key9": "2zyrHNRUZagvnWhcr75YUEcthsRrqFZnuV7vV7Xn64pBxeyn6cuXHyphjF8wW7r2MLuuJAZdvHvwuJ3mjeqUhWHp",
  "key10": "2FDPM8yxCHueSNa7SQPQAm38aanDKk2kJpPFgmbSKei8aLxEDepHT243BXYdbFSitM6qCbgFQrGR6M9nbRTEtMX1",
  "key11": "3feAxYJZQEvrvW2X6A6ecP7ur6sxawB2ApEMfYxQnToSkBR1mJZN3Ux38rqM5BcNfci7rBCeCv8Mey4Aj4bYH6Wq",
  "key12": "8W9aznj7HJ5N85FYoQMLyAaceD7DMTGJPXDVVLoa3t6v4L4yuFDHd95hBjwoX1xSYaViGMfT99LcVbkN1dcVhoJ",
  "key13": "337Fv5tm66p4L6jwVK46G2yWYq1vGM9jexUvTZkpVjsrX6tMC6ytmm27rk38SDiBBDjjhe5eMiBRZ1vQTihYrdfq",
  "key14": "NDtBoNbLKM6Twsuwqu6ENGfhfLeoRs11EfXMZy7u3dhpf3sYawonKuaPW9qN2LDxbwqHRhPshDYm5xou5JzT7fy",
  "key15": "2Ro27AsK37fzgGCY7EdmXcFpELWWLp5ApN5q4BjDgVUjbeRdW8q6pV3RNGKF5umAnHXgLADdSkEWtZw53zDjFiUH",
  "key16": "4zTamcJNDP7YBdhd9f7WnVTnBtPciBEaLfC1NtK1G4aKoCEHyGEagx8PNVjDQXFoVFNx4Mz3ePbBcuCS6PoVQFBJ",
  "key17": "RFztVLcTfx5cSoY9Tnd8WJX7Q2n7ScLo5B6GuqqGvSQWLE9df4rjRTPfcUfjsK9YADQJewqYaRXoigEcHyptLjE",
  "key18": "G6Dva8zUpj49dHuF2rG3KriKCNdQitdND4wWFBbZZ6r8PEodH39P9svrMuhjhB99yeMcNVXgvVKcDvAP1Bq7EK9",
  "key19": "3jFeT3L81AwYq8e9seX6ojSPrsqBLzexJQBUxRFTiLmmhro4VBVsKFeLduCetYGbUkFEBZbkxRP2gTqvj7NLSJmn",
  "key20": "2eTr7AtETHSThxERFdraWnpeQs3DLt4sfEaryjTku23Hu4NKKJhcKpYY6NTbxjLikRFABo417rHRHTbMQGmXNHTY",
  "key21": "5AkiMLKv1NUFpEnBEufikjQGJD5Hde3SPDfgQg2kk22RNZgrjcdNmn8uJEfkjW9kBf8Fp2SWyGStkZ3j9XYySpuw",
  "key22": "NBukKM1QuozWTcUUXpyWszojGkBJX2jZ9QGHiaQsoF3HSet7h8f9VPRYFuKwJrU7eJ1KKFS9bi6w3YaDn8gwDy2",
  "key23": "3rG47aUbvh2pt3Nsx9bGyd3TLmL9Yg4vbu92qHb5fY2wvRyCG326Y7oCtBhcvA56kg6ucSE6ikexUwjw8GWqSWm7",
  "key24": "29d1dUB4gmzegBZzdUbY3bphgkc8EzJXQ5E8z6ZrE1NmEdERQSL5bMNhQjxxjE1tkUkBaFKyF29KrWnnYNAZuMfA",
  "key25": "2iCpGwHy9ABn1og5JcYpzrbZbmqj3u3PBqNFu8doK3mtAEwQsX2872yAiKGEsbwduWbFsUS4xvL52CbMbFsPTUfG",
  "key26": "4nZfVhsq8V7SvwNy4bsmVjfsyzsB13SK1JCKC67r1Y4fXcpFvohYX38c7pUigyF1eAuZL5S16sVvxrbjg9QFNNuF",
  "key27": "JFtETDzBXhKu2hE3VpqTbsvi2WhsUzUX38r6zShbErFhtbHcK9V5dQ2MkbXasNoGhQnTmJ6aU54nG2C4FAcPy4Y",
  "key28": "62i2iCTJeFt7LAUA8V7SCCnvpPaB1DELeusKaAaxcDrb84dxstNxvC1wSCHQR1J3gtVexpxRdshrZMyEXq1BBiLj",
  "key29": "2rioDNyD8FMWJ6z4PPWhNi9gPBvWGRdaHo8e1EkZ6KWxqTAYyjWQDEGXABvj154DccPWx4qqZJpAV93p16fckhb3",
  "key30": "3vYFNinq7MKiPbQkBf2sdf7nh11EVcqHcT2ZYGqxXHE2QVdgPQRDpLkdVeWvVaT2upVn56FSvtFzStkavifhLYHQ",
  "key31": "4kDj7K1X2MiPYtx4rrgqoMLZ7GwamDj3zYeGo6eB4qcfEap3Etc72TaozRXpDcf6g6wo3Q8xtEWw4szogSG7ZJpa",
  "key32": "5SLjf2jCUCAPaagBrpbyZja1ndszuYYe4d52CX3qkY6XZTKL5cpFro36skUwGepUwBYjRqUStw6R1KmA5BcKtBiv",
  "key33": "c12DrwYHgYNyHDcYHuNJ62B6Hi8EbrvCZbTmGFC91dnbX3JCzeM75N642DQLzKF5eSvfi1tTrm6EWRMEjS6Ua6i",
  "key34": "Mhjs9dHLkrQwihrksAL4mzFBhZxTfFFDeYG7WWkPxoWHa8N8J19DtPCPx4x8LE8Eg4jJVUT3GRUn1nV3nRWAyLx",
  "key35": "39kvn4fP86dtScRVp2JBw5GPNom6TaMBQFTKQpBFx9fUiNG7ocVNk2eDZT4E82qLbBeKVdci9gMX8Roh6WYpSsxP"
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
