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
    "42GnYWKkJUnVouxvnJS2QPYcjricfJ6jYzwiS2XyQ4Ga2txwhURNi5Qfzssa6m4y9ZSUfvzUtpQBXfpSN2Z1EMZJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bWx9EZx3f9fAeRNExhgqZHGDLw93MWZBgxnFvAuvHbctXbEEKwXHoJrvn6FpNTjpDjkyUBBictvkNt74rB1TXDT",
  "key1": "rvPeAqJiMNSem1SF79Nw1xrVP8GxjCoPkVTbafvBVz4iPmVr6SiU5o7vqQRNR7pxRoZxXo4BvmzSTYrRpdU2sxp",
  "key2": "38dGSoc5ZkbGMbqEHhgpLHoJFnTxauxn4DhC7PzPT5qAx1VwhDF4CD5mrLTrG9Rvp9XKiisk6i5yGSSUG4okbfxK",
  "key3": "5J17tMr4U8gM2skW6FrUmdwPaoTWVnWYAAi5HjMnJCZRJWYuyrmEuwrjujMDgvijA3iBJF3HE2e4FnfVJ4cPCtrC",
  "key4": "pwaPQBAoTKoMrSKJ2AcLjt7LkRMYYx6Xv4GixhtiRWpaU2zzrb1sBZ5YHwoeFQYAwJsCUmK2devAgWnwGFcHMCV",
  "key5": "5maCZBBm319oXKtNys6EVtFJV2oqgHNV1pKyMVnvdMzaVX1g7s3yD2LQVZfaRJggAZ6ktEmJ9tsHuxQ1fHDfD9nf",
  "key6": "3j3vcx6pDEjF6sEcn2wGsCjTgS3Ea1swiPkS9wnu9rUTLRq3XpRfAmum1K1ERJMjjU7AwmjAVLPd8gtSZzkvpYjA",
  "key7": "478pCqEN87K3kAkRzya11E6zQgk249g9VqBWYyibyf8UyyZNAqwR9UBewSAqyn79LadFQW9MDVwsXp9yKHhBSQk2",
  "key8": "3cjNBUmQLSSrmGJACsLed94nQYNejFkd1aSF22FvqgpwsFGx4fyZNo8Ssr4WWMhHfTXxv5xHZPa2EDst7TKdChaS",
  "key9": "57dT9hdfkrwZ3KeriJGEZePGWsCXLbPyxvfyyZYbtj9DYF5i5dkMwy8CAHVGcUMvMQ8F3TARGYgLW6kyJepT6fr9",
  "key10": "AKVAMKMfhFnacVYRFXCRfNRS3tVGmbpDciVkf58a8dPwjJMxyWg8XRZ55S3v5G2p5eTzGfqMcNbWFeemyCYWCPF",
  "key11": "3QVfsUVVCBoQGdK2tKmsc6Xb7wo77gnfQqqmcrRxx7fdHkT2Kv4fm7kiEiA5LJS9tJ1acG422pzvMukcLe37GJzX",
  "key12": "4gCKsBfUsAwUkd26qZ6xsv9Bh5FjWRYX5GcN91uJq2F8MWKRuSxARwysf3vW1LZ82jdZPW52gWgM5pwi3x4UsrKY",
  "key13": "2bW83X99RBHJP1NZpS4Hu8RPEi8AtuMxaBRW8rJtiqcwgiCa9YTXGnLSLzp68k7rtUSRRMJthnkKXpfHKaGH6no2",
  "key14": "Ur94RaVP2bUZrjz7gosGf7Tyc7ZmHgH17sRNzB7PfiEcnPyhdg2jXzVWAzU7hi3e5XAwRURnuaJyNRHiQFGViCU",
  "key15": "4xd3B5FpCvpbgcJDNA9jLsxYzhUs2fpetwz3s2RqD5c1yBv1HdLVgqFUAc91TUho2vVSQgDpvYaJCepST7XEwSXK",
  "key16": "2khWT7xUyXehfZdizw4gtHTsWCW3AMiuHneRewF5zsWmkSULkQp5dvMcKgYYPb5HNb9Mf98rtaiFJKk9FYFdGxFz",
  "key17": "24y1p5wFjJKZKVjyAXNzpj2QYZRRyHDqizT7tjDLYMMB7usGgBLHBsc4ywRjgMKzTrhctUCPNFcXNSr4evFNG34f",
  "key18": "2tk8oGU8rLbfQoTS7nRgHTi3dVr5riXzcU3dcyBTa469tP7HDhdLq7ijCsqeN5DtBH61xKdji4obxBqaYX9V91iL",
  "key19": "41qMdduqMh1yu3qYW24C2SQG3aNxRsUL18eNHXFtx5ZKskQ3KdCkdUTtJi8ARgLoScedfVswSF8k2aAMAMupmsgF",
  "key20": "4xRTtjx25ueovcxmxcDqjsMsY66tyvEbF1MteJenobFAH36MjLeaKNbCVHHdPFJBYcJxSU7VME318kJRsz4VxMvD",
  "key21": "3o7EiRf1EoiUAU5DbZbE7FTiSvKQuHbPaXXXBM5P5Gs47xKJmJnaFLpKFLgyuhqh3nrvZ5jMzEBH2SamEnadUbKq",
  "key22": "3YxHbdbZAA5pAnfEgZs9opFmae11SSM3KtFyPJLgMh75QhwEZ3mrUvBjrDDxrJ9xhuiJCP57NLH6RvFQA2YjYCkx",
  "key23": "21tWqhM5QnG5v38KyDw8eEfC2zmoCuwexcJYo4nwBXSunnKyrWDbBfs7fgvbU27Co1d2BEKdcrMKL4KJFxdHJhQH",
  "key24": "37cxR2xBTozsZ16N8kf1o8de9pit3Hi9P3NE5xFAcB9nEJ3rUtqZL2EF2hyhyZUWxr6BLgHu4tKyW6TMwArY7rQ1",
  "key25": "3kZcAstT7FW8Ds16UUbSiS7Fuymr71rLpf1iUaBPVw74JwbCV92QqGzgmJUv4yg9SiSHmgkxyXt92r5cBJyQL3aW",
  "key26": "4xybmTN6erFA8s51qdJvw5ZEBhcdXoUsHEfPVAmwCvgyeE22ZYXbdbrTuEUraBYJaMi9gT1kKMw3RGYAs5ahn4ZB",
  "key27": "4WyGoqi4P3temRALoRUHXYkLkibfinGYHEA9it6ns5UUFMYQNDTyA5YZcDCW2239hM1hsMaXEVryD1ntetKUsyZR",
  "key28": "5YfZdn3HpekCKRVDpo8TTCcxA9AnbZZmP7GuGUKC24ZWY6dHrua5Mw7g6uXyVER5BLUM4p98Fv4K4d8htWHtykPd",
  "key29": "Ph3WqtrAuxUXYgYC4RT3DiTESZNcKKDa6yFga9JXbK7ofoksrtYC6dt6QcNW4BaujL5ToMERwWRKQoPVj21pd5A",
  "key30": "3dMacwmkZMNusoaPiniUh5abDxVNPZer18a9Z2VYNs1hkG7s5MWARErmgC1tMgVcF3Nr2dpANh1RQNSuQtHHVdbn",
  "key31": "45LGuFDGcdoPhAs3AVEHBTaR1PdB5S5GMp78butWCJSiHLRKqsJWmCdbNjDkBAknJVfju4vECsWibQoP6PQ3qCdV",
  "key32": "5zqzpNXdWGwU8MqpRZkFpTfvMvJY9QWvjJomf2vXS7iFb54h6jjKWmiN2zAhpm7Fka7WC9LwooFqnnE2EHyTts9b",
  "key33": "3rdectNNNZkm2adFeaTmJHoXQebLWHJ29F932g4eY1d4JdDqQr486voaL9DzJCkx4cZPfV3ZXq2VGXEeS8jLUPGo",
  "key34": "2mqSKNuf8XzaEn4UovwUmTVThcjrHRuYX8oB3ZCjkVXrBwtqCnz915X5Pyjd7dzUECSykVGQXgWUX4NUCuCsxDeL",
  "key35": "47T56Amx8UsHJFr2jfwvjcm6FdDUxGDUPjRsLs7fuwHViduabF33DYbUmCR3Nf8emXXe1SFAGPqsYuJgwAMiL7Yz",
  "key36": "5CP7q8TNsmeJVWKyiBEdYvU9TNv3ewtxYg4e7vkQCYdiqgFchJTHseH3j42uD67dw5rWM6d7qsSbgxJfs98yqhAW",
  "key37": "3zyYRAUn4e5eDiAsSmYvPvmvmkXD7HdmZ6QeFu9qjAPR9VE5WzBdGVs1khaGzBza4TeaXxbQeN3MtJaxa4WXDjD",
  "key38": "3BS3dmyWXEwtZprZzaeyPQrgH7mTtiVNZ7oo1haKYu9A4PTTetinHfwJ1sPY6edd27DqXphiedBigWQGBamKGXyZ",
  "key39": "59UDHV4xTMgYebfnKrdcECspZzf8EZbWLXBdYyP4U1noBFcKNpUW97qGXMgZtuwnzMTiEyCkx1sczRe2wP4Z9Lmn",
  "key40": "xX7AMWbXziXTvuD1EYAcDoUjay45q7osSt5iueohsamskR9U3MVCpTaghvidKzjAupomNd8VW7Ju7hBWHA663Dq",
  "key41": "5BZFd4Lm2zeaiJh2amAfyvDsWeqbUjioEA2bu1tr2NECNwaEtXFDTd8NJbR91J7jJBkyXHNDMsrUTGkCZsUE3aw"
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
