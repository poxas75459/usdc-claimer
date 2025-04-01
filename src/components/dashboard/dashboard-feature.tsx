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
    "3mXN94x8f8pXYVRyZVsgZuLDT2opkaUPEDfjGbSQdLqdUNMCj2PcLAUeSL4Jo9XEypVzSobBu4oZgh2vDa9qwpz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5crCKxrYW4RQKvzugGZ5DX7nT7c6esSVEcKyWRWo6EuYeZKRLAsHV9PhR1VB54SBgZoU6Rvmszpx6bRKAH9PfhA8",
  "key1": "F2CgeTrNSobyL9DhE9rrSMXhPp2MxevmhM64ZEey22siY6t5nzD4jHJMPE4XpwiWvU3Pu4buSf3ohYLXvhfLpSc",
  "key2": "4JdY2UA65hmgHNVXgpTfLwnfVNGvSSs8ypyTGcqoray78sUja6GouefSTmeNJVKf7Dz54c84FFZ2QncVQdmM1ZvR",
  "key3": "5MhWCt5t8niGBw3hkZ1DgZAJoFYfTtCLmqJVhXQ9kfCnegrrL9nCizt5unEXPEzyRufMxWQvMijdYU3FK8pW7PNG",
  "key4": "2c7tY3mpXmB3okgjVcwpvnUxg1Ty9jYSJSwh2LeA7hhrQN7WhVzez2WxEYMjwy97yP73rjD624eAyTqz4hXYW5vF",
  "key5": "2Gv8sLfFCMFnxxbkek1z5tKZ51tVLTVBfxNzbscS6aRzYV1nC13asWChNSLiHDNuV51xiuXDkdZ9xXsmRZ4k6vow",
  "key6": "5HcJPvt6PhtfYGsrfQNppyZDMuyxDo5b2Pwg1Y8FCNonSYs82k7rbmtD5XM1YuKcgRGEhFTjpzVTko3dvRMiA93x",
  "key7": "2CpjJe86A6QqMgiq25u3VzbDve8mLkhFTeviU9zjaKAzuwR5yN4uFq7sSMABeVb51ZysnETcE1y75nScPYntEqKt",
  "key8": "2CbqU3shq5MGnqzAN5zunDdwYo2y1RbnuKpPbPQxn4JkbM8aMwMoG62QpoB3MFctmyP5EXGTFhoCyGGNLf5HvRYT",
  "key9": "5mW2CBtbpqPKV31jB3wRkA8JqntZf6NTBN5Qz8G5yqKBPHrryCiYYULsRXR1HoPA6PL1u2x4xZC1xgWqXJPKy53s",
  "key10": "2qRC83Car8mTeXuAtuvADFBA76oCYYkPgrW6sa8kmyGeEKaaYLyN6bmdWJapKKocxZfNdU57zkyBmP59P8f2HKsg",
  "key11": "4ZwCCJtw7naBZvQuFE9nvLzYrA5h3jjXKRfdeEPswfh6FdogqXbtv5d5cK69sgHWnuPYGBTfB96BFfSJD6o6t7vW",
  "key12": "5YdAuyENm6aZ37e7qAVYxcfR91SSRU6CHURJbnCrGesnyCzEMzAutkaFR2nd5XRqcMyuCeuD1v6VtAUgCUAgfxHY",
  "key13": "4Pb7TqPTfhBj8gVrD3i5xgZDHnMqeFSPXH3Z5znzvRub8cFnCmVjFwM3rFj2PdMPRbCYaFKh2caD2fPPUt9uiYMr",
  "key14": "5QqsxEYUbB22Zyo7QJoJgxxtJ4wXPfi4N95xUyCRdr4TDKU68wuS8ZHR7KLsjCwvZBdhGi92DdbRafuZRcmQwXZb",
  "key15": "4gBz32GqScvFFmwjiTHdEVXL5xrLF2R8izcttFw1ufosABLKtPEtWhWBsfxkCJgxD75nb7ZDjFUu11uxeFmvkFxj",
  "key16": "2c1Ypj1eEGFEjMMUmUjsGQ6cWwMNuDruSwhd652hzHhqe5kaXTcrXZRP4vFxSFz3VVmGH5JRdVPAU9oYUhwNmKnJ",
  "key17": "5AeJHDdEES65W3r262ddAXYPHdpTuRPi6mMSoXBivzhBd62rxCNCkxS4aZdt7AuL79wQT1UJxUqgETGRKVLvmGyp",
  "key18": "2N2rrvwYe4T3D4J2EWFxyXW5dkjUy9gdMUHTU5yR1UwW15iCohW4ETC48Yo4SMKiuWFZfWXNXXMdMKLEw8Y4uAhp",
  "key19": "5cMPf1yNzHpwwrZQs1YcayhfPEez4xRNFqWVBDr8yx2sWnB7rFfeY9P3HbuUdkzEsUHSKia3jrk4eMbB4C1boSSE",
  "key20": "4kaxghrTthnrY2k2q11MNtTpnvkLq34Jz5EY9yvNa64aLYTy2igiSNH6nEwfV8wPSRtLXTNmLy3heSymhLcbXbkE",
  "key21": "78fnnXrxLb2GyKowaFgxMx2ZWxq7J39giY3ncuwQvz2y8JxdkAir9bBCcEm3NkuUQghdHGcXvLXjekKLkyEP19g",
  "key22": "29SqYAJThorbijMsBhusJWiGcVAMPATDAnb6nT3UqK3LnKfBAZcLUuLLFA4MhMNy8PJnof5B4usJzQqGj9VkSJXT",
  "key23": "2M2viWfqDUPeGANMqXHxEZNcUTHxiTCx2RqFGTu8qYM4x2DYYja4RyUoqXMQyQJwBbdyY7vgL51QnunmXNyDqtW1",
  "key24": "2DwErAhASdBcNPnypXmCrfom7Y8MWE1mggofmAYzPUcfgkmws6d8b1KcHhggSwKpoKXFpPCpcokVaVnBd14yTJwn",
  "key25": "Mg6tADrcFZff4pKq2UZKpoeyEL25tAkYWMyNTrWjaC3VNemaRR2XaJpKbsq8KVL3oye1hrkwtFve9J3c8WyG2z4",
  "key26": "2ur3Gqro9cCAbPwmTvMivtbtSgXNBChqS9Y4gNbw9fh1odXYqsVtqfZXmeFxWrYtJe1WNq2j8F3GmM1p1wDXv39a",
  "key27": "22W4fDD4nsGSb8YdW6iMFRFFrSGCbfQB76Jx2kZW4NpJ5h35DTgseHahe3Soy22e1CMHnMUoixp7VKWYLhkXu85B"
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
