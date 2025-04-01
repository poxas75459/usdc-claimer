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
    "29etGNCBHvMpw76pa6oKmaT4PH9AyUSdwEzFYkftCLV5vPaXDN1Ye6nhMGBZWVRseCVMvGAskVsz7k33wUDovKqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nJHmyov4ArUetgkrx4cL3SASaALXh97obBySNmr2E1EBYDRgoLtsJ6aGnRZT9CmTD226EKaMpux1jUumbUhHSeL",
  "key1": "3vDJ5fzu4DsbENPyMbBkdazM5yD4z5mnGV2XWbStTRvQzBj31G8vduV1qf8utCqRMDw6jNvfh6PGaSwn5Forstis",
  "key2": "fQRyKG8PJvSTbAYqhpeceh9h5nkEvfJNX4CS53fczjbDMC8pDj5Lh5MR1bx7E3Qj8rVL7WswEDqpoiGkcSZGQZ1",
  "key3": "2M6ZywfvzhGdHfsN9EHWXjESuWAUrLzpgXbvkD6JKRyYABeKnVpbZp6cU934SkfXC86yqJwRV5CtCnSepJLNFo1Z",
  "key4": "5hmpPgiZRCAr5gkfzSZRp65YkFU7p8nfCqTW7GSSQU4rLyKRunwbUespTfUcdA3dSDxp8z9wabAj1c9EfBqHeF4k",
  "key5": "2sbSw3YB2vRpRVt2BNQuFZ6rZg6eAVfXufJSiQvDtpCmK8835owqRsqs6jgNnKgo74vTYuMAoskS19UtNRgQyv74",
  "key6": "2NEX6RzW5wAk1M8Btwr2hTfrnjeQUxZq4nobN46Dda92na94yybqZDWJBnpU3pLwmWCurnkvfuCfdGtTcePWCY3M",
  "key7": "5ms7eqMMmJGFdg3eX8NUZvQZqNsnXBUmGbfrqgSTWt6LpTmPdCfes21hKcb1BZNteKtc3f3FHXu4yW2SNyxrVTPh",
  "key8": "FVFsTyX3vE86hpotyyfpL2ivhuWo9uFiREW8EVggf5HvNtjayyiGfPnKHCc7bLP46eZYNo7MECuqU4uF22tH4nZ",
  "key9": "2mBwot5Y2zkTyxu9D7A62J9akoZXu5cgm4Y7neDNBVnqeZrJrhJv58aTLt52zRMFFUCumaGF2fzgqbG27TFS2Zgw",
  "key10": "2NDobH8wRvhsdSktdMFE5zzBnxh1TQJEP48BSW6vFEZN8DcuVUxuNxoxQXoC9qs9ySRzTPHzYp5UEH3ULSbUoJR2",
  "key11": "2fxWK1rYADPaMuuqSXyKuzapRdFhzMZSgnbFoKgbUCa27Sn4A4BvmS36qkDEtbPjPPKo3SukUeh8xXwVUG2WRfUZ",
  "key12": "4TJRvwNoBo3knHJr33Cc632UDqbLLvi6iFtFQmfuovtL83u5mCTcUPh4ZKF4cJHjGBWHPrkPto1BPjugFKqst5kh",
  "key13": "3EZiQHS9C1YBwCw37VJL5aeDpudC68RgWBi33AC1k5KPJ6z9XM2h79NzMVg1LMLYg3nCAUxWkhVBeV6z3YFTHJp4",
  "key14": "4HSyUd7876eTca9KggJfFczyKxgayAoVXEWXZoEJvmD3413x8ijnUzS4otzjpaEfdTu5t8ieVrF7WtKppwY7C9yE",
  "key15": "3135qHS8DFBRnde8ADG3X2XByQJAf8xdYRU9RXrTePcZnTq3JTBQfe3xfo9ZPzt5PerawJZ3usKs2e6NqqTCKWXS",
  "key16": "545YLvGdMrKcTXqWZA2uB6SmwqYKzMPCSxDZ3PateED4gS6SQRexxZ1DxhmgiVyLPxkdR2bYULkc3RiRHPNFixu8",
  "key17": "4cvEanHJ2WLNeuM1SCkbCL7YB84Ei8yuTTMxcRGF8NSwLVPZNiw8Wp5SVYDcrzFDv2hr3wUZWDn46ker1EGD8ZVn",
  "key18": "4GLHvQYFHTMinEbEXDo6xqPnY7ZXbQ92n8eV4J7nYGq1hbEAnvuWo84665HZkqWzTfHKu7y2vicfbmhqb8SMnYBj",
  "key19": "7jRXnb9d8ZkCS2EB7zdrMw8tFH2jjKUSCxTcVYS7ngVkWDXppiimHZqBDEtSGhHaDxmivFHyBX7d3EryzHeGidb",
  "key20": "24nFr1kQoFvFTjovkz2nrnYw1GEEtmLss7fP9btkK5pgnNb9cDoGpntRTz5uujde2gwQRuBGHrVP2MVU3WfB6999",
  "key21": "3JmeaGcHRDe6motkr3xzheKEa7cwoGPmQzVTeLzN5sZgFep8TchhxWwk4HEoipbnZGKQPyXxJCGJnTkq9Ecmogrs",
  "key22": "3H57tCeVchiMjmnu7CSwmzeYtkP1DBz5ew7PCr1aCqWyNbKWhWXqLqviqgtWs1R2ZdoR12Dys1CvicsBKUwjkubZ",
  "key23": "2CLjYExzhEvsa4nsguKDJkCosZqExijoZiWdvayDMUvy9ETHuSUAxCVZ6aAc8v3LJXYs8rqGBCwgNrLzNjQE6ZKb",
  "key24": "48d5PH5UXctWmkc9idkXGPzTLyzqUrpREWCGe8bEy9nRj1bpGoPjwVmzRXrrH5VMjys8FKvaVRd4U5994nXro5kd",
  "key25": "5Nkfok6guLaDdRYwb6VLS3yfRseFgrck2KccPRSXt1ZdkytNTWemb16yaixvaNQ71F23LgpD5yXjUGi8hBtHSk5U",
  "key26": "1ywkaLssNYhXuRcppqvmy9zMYjCCGbYZ2vHYeC4eyhWYSrg9LqKJqYZszRuMJFtnGJ1ABQr8XT4vKjmFCUQ5XZC",
  "key27": "32oy7aXNdfFNuYhfyvnT6EnNjhSFTDAH7Kcpqr9vBzqyKYd7EzG6of4ut9s8oxiF7WKPHL6ZwRWs5pANWcci8DWE",
  "key28": "54bPPrUZvY38V1zvCCj2vczEhpuyWhDJSzgxJwofpvTHGdqgXaqptFAskpZCuT1qQTg3J5wLsCScYjD42p6gBfyR",
  "key29": "4LAWaJoJCrByvfjfG5XRYjeqUovNDL6vq3APFzYDa7NoidR6rKNcbv68zmYZwcqwxLDPin9DLyv3VFavnTmKU7qp",
  "key30": "3Rpb8YAUgJtedDdN1L38uJECPwvh6P2zZh8PEmDBCTQx5Acpyi9nERcJeg63MYS98qzVBYxzBgbVETzP2MtjNUT4",
  "key31": "5YzAh84kzanbcp4tbu8JTVUixFBdoiMQT2G8J273Yi94yRnT7oc19vjX7kg8aXe5URXD5rx3Y8WoKnSCSD6DbTGB",
  "key32": "f3M47TvdeFvL7zfhHgnaqW6tuY5jx42AfC6eZhukxpsAt7D5nsn3m6VaxWywjApVieFZcBSWhJfTUyZF2nXCXAf",
  "key33": "3Az1aEhFeBLahVJhZeNSR3wo55h4EX9cgK3uHmNeW2wSigvu7WCUYmWs6dDz5KUR7EuramBwbbErBDusPFiysciF"
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
