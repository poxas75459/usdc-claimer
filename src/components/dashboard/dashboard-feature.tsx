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
    "poFDTuLcaW4VzxRhmbUebkL5nd6cBiwec4EY1qJbv9oxjbhrTqo9uzfBC3mLsDSzG3r8sq5SMAdZUysiJzseiYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kGym5k8UXmsFnVDJgAbyBi6UPQhzBKR8T1knaTuyvu4HCvz2aXmUyV34iTyBh14F57SyadeJPC8xcE8h5DuBmuU",
  "key1": "2fNruvVWVcCpoh5ttuqXWm99v2bP4Z5SLtFvLG3v1XTzVDrX8b9xPxGRtyZXyctXsT3p4QRxyCqEdt2g6rzTZJZ9",
  "key2": "5pHftW4iqLuYzMCGFXHHU6yN7Q2HEuN5jsnUf7jJYkoRWGQ2yNvBeTTYbgUrdFjRG5A74Y9ycD8i7vWtUz7mNQSR",
  "key3": "5oHRfXFSFfPMQAta2EctGHYnQZp34h3j17xUz1FZsoUrYvkMuxqGz3wo6E4cBtypfonLYYmfgkx9phSSaSooy4nx",
  "key4": "2AVXi3EatAgRkvVfX9HyCBM7deRhPti1eHqnqA8BiU3S4heRDZF7nA7pcZEfaRdyYPR1XGNLs9Ko18hGSaSs9gjX",
  "key5": "8zvi3jtTTkWWdr3vtwReibiyzTpbCE29XHZALjCrEBDjtFNWn1YoyhWwpdHjEiABXrC9LukNQXKrsFcUqHGgDH9",
  "key6": "5ebkHyxxAjt6cpTbLs1uUf6zPAm45ne51wxQRy9juAG44NQoxQWhjNGh1HmkDBaCGp6rX8qTdg14AsFFB5t9r7et",
  "key7": "4UN7XModVEghHxrFUdrZ2ciFrW3Y7oNtaJrJ5pqUUZaVCh5dquPNmK5ioz4J69LVYfXhnArzqjKFqDjTnxFadPq7",
  "key8": "2VuXHaFCuKLkmYEeNwajJqCGLwKt4z3wYseKHcB9PHiUWossK3x4R6RVJ7KLJAawodVJwGVfnDZ2fAPJSDeetuc3",
  "key9": "14ZEGaUSTaggX3rtVxH8sRMETV2a5C8MHkxCoCKmTJVLaDW1egRjq9V2EeYm3LSB5Ra49EnLEeBLoQpuGdtCTuS",
  "key10": "2r8T8mc2e5YtKXj4RsmLDV5zMaZB85PwRHmtjLBHXc1rR2vm5Y4qaG9Z6iCraPKNiqWMXaY99g4UzweW7pCpFZvf",
  "key11": "5QZhTMCxcQSABh3aB341f1duUxvH3Crzd9CgLjRYWfGb7SxRLBPTN43gFfEpmiMq9G5Z3rbqFa5A66HnisVbNcvw",
  "key12": "2aDj2eQKF8FRKiaZSmyTkLquzzHR2uQ7nerqPPc395heVJVvbaCnJhUWCg6hyeehm9hHCyJS2N1GYDkwQcVWFWaQ",
  "key13": "43hq2CYPoWPUnLzUFXZATRJ84h67hpyrtrZRnCD8DSinskpL9vxLxCcL65LXS2uSpxmn3oACUs1eSXTFp9LkqZex",
  "key14": "2rFkzvFVSgYV4idAhQWGxV4C2ybUumGHnH9AfF2LqCdCWEy6ihTBcuKWP4hWt5QgVrSi7PyV9m49WW39xr3ztvby",
  "key15": "5fyfXfhzJes1sTEh2qmrE4A23Hczd9mBYBr75PUvQ2UTC12XWrLep9LpJdMWGwern7mbhf9gx2SfeH7Z32yZeJmw",
  "key16": "5pmnJ37NxgtpnDJFf4ZwqikyWsoh49yQB2dy3V8jN6gT8VZBD2MbUfjr7K8fCv2Cghissbob3Mmiiv7vvbkjmhqm",
  "key17": "3vHnNnRMUZzPPn4uYc4W4uNM5JfS3nGw12JUh7bPd4T7fMM2ksFLruPH8jtcJWpPojykAv1GKWcVQosk2kGzW7nw",
  "key18": "52g8vmqGptaL7hrTRoRWJocRsct7TbmFPifJCnjkasuiwg8MTKn2jgg6pcfZ2zdJPxwxoaePpPumTbGSqwr2PBGr",
  "key19": "4VPq1wWaHMwNVZZVR5DULV94GywQSfo2pUFREa5FVYi8i8LNUQvawx7GAaZdFvszLPKcsPtJFSWctA8Vx7EDrgZF",
  "key20": "3VpRY47EecUDmCkvwbanJwHRkwAfczBUA8Jz1ci1ii1PwvmLVpQZKAPynTqfreD2LPK7Hmg8AKw9swVgZvCNqgtT",
  "key21": "37tAMvKtQx5XxBcw6sGc42HW1XVpwPmUressi9RLXmZoeULQt6Z1AhSmPi4s2eHhw6nQHPon4vPMEykoAmYJdto5",
  "key22": "3c45J7xbt49fonPLf4AB1tKJPaA8yWDazUCXQPnnSwihVJaco4NxpMtzCPQhKS2kis7dxKdrU47yQf6GFx7dmxZc",
  "key23": "5ap2RDqX6ghCXFrAPbK3PrsjvG99C9K4ZPRFjpTpMypoxohJEUoXB5y8Kr4dacDdHKiLLWKq1P7A1kSwJ6877CbF",
  "key24": "4HAqVvJAd4KknkuanXiiQWFow7usGdg4UQ56jEUkU6CKjcvBkkxWLFBhhwTToWWjrUZLxqFyxgde3QrJ3FNVjVBi",
  "key25": "2bL7GYrWeu8vE8X1FFFae4UpBovtoaXn6z3zC7g5BWM2i5pHuXsre79GkKj95TatxVsMfyQudFnbFQE6CCgQVTCW",
  "key26": "4tr77DRnnKcN8WWr6JhwxNMSZU8DMjAfrwUSeGxMVwGkRWBZtHU7AACFS2mCYNGhiEo7xRCR6hy2sigbvoKGfAJU",
  "key27": "CTZGkQ5tZR1EyjHFJh6P7m85msYc4mbLo4ZDfyBZKqNjrmH2rPgRCb4FiutHcsA2RVBZNhZiufN2vYrSYfCtwFd",
  "key28": "gGpofkzY4DWtUwuEBjGzSVntxH92qJYgdiCFK6boRwoo9XBzBvnuoFBVWVjqhKGZD9LthHUz7m7u7xKyZZfxm9h",
  "key29": "4jQHmttc8bxpEeJak58H1Aq9uQsZkHf75scYnerFMz37WeWouiYjHp4DXL1uMgiPnpv5TAtC6fHaYFAVtYWr76kE",
  "key30": "4hv5CjF3rKX7N1Dr4oneLWck3GqbJhB9iyBa1mxnYEXJ35Syrf3ej9cMDYG458QUDR9YHGjFsz18Seca2GPx4hT5"
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
