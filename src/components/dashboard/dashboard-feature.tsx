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
    "4tCw1EVtfDxaU5ozyAMCxRUSARVu33a1yS7RvpQLJXJKjbjHbt1NJ7nscfygEWZnBbAyMgoDNxtNyLxD1ZJVhfnx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nXWYoXcDV34NeS3GX1L5FLo1rcmnuf11gxC67U34r3KyfLYz8T2vHPXsEn3UJb9p5JNyhDKwnA8bbmzGmnWaoai",
  "key1": "43SBZUAvJAFi5KtffwkbeBjDXyn1UTuMyX33Riac1CqFPQeURFhpyFgZ6wUPgwo5Xa5ZFaqcXP1shyHHuteUcGw3",
  "key2": "21kuYuFq6Qf91Mx5swTzBnfWuLmtERc4tHwHP5mSFsSanQDY9RNpB7nPkpxkNYRhzc5Hnavc4XEKGpiFHBatLxhD",
  "key3": "5qY2whmQyn6GpSfkoi6Y93wdo7Xw7KQeRL3hQf8ojdkjE3z4R5HF7hvW6g5pRsHMk8yA4A1c4hKwuNuozLAwFL93",
  "key4": "65whe2d6Nd2gvYgUbsM1XoRmeWB5YEVPbxaijzavMqT9cKXPt35U5H8xdWwFJ3EJZgJ5pZzoriVG77LgJqypJXEy",
  "key5": "XNt6wTDeGbYbN1mVC34EkMPJwkvrZThRgRgQCMvGpKgSJ9EbNAaTQevKnEMzZ9efwd9aansL4qGLdHNa3HzfdVv",
  "key6": "8y8jyZ1qScmnfH22NGPqK6fThQSqxUcPsSfMG2LKEjTuVhbZrZgKaLexquTeSaYgTfhgWr7uQUbWiP22LB9TbxK",
  "key7": "62FweBFWCBRBEFKwiquCeJf7FyyqHNvsGJqgAJWVZmqrMsAQ9BgpkQVF3rEbrgzwLtq5RyKnuAXzb8t5ioP6eZiB",
  "key8": "e4dZKaH9DNrKsnsqJPBqNjA4TTZMun68AMiqdvHBZp61kTMkorsgC5UF6oRYitx3x6w2eMgcmx8ggHv7i23eeb4",
  "key9": "2y8BPUz43KHhL2UZbU1WhLJqyxi5hpvuMtyoCqjHsTjg9yLjpkNVt9EGHkf8fSt1ZkExpS5tk5r6u9BnXhdVMMDC",
  "key10": "5BBCgR1LGKo5AD5tuPBmqeojvZp7U7Jz9QFbZsYvEtpAHVkUAKLSDWi16AfXTnn6m8Jm3CAfKhML4J456A9G4pHE",
  "key11": "W5vrf5Ci8hVzGTsUUjPpnsuPA3BBcwFjPbSHYAJ1kMuwHpSNnvWB6aMdX6eTAaDLHeGbwYAMTins7j2BnAfDqce",
  "key12": "64Hh5HZkxJzDmyYSFWEVMSC17QJp5TBsv3KC9vzHRrjQjMppTFT1m53sJA2jTC7deBiW2vvzLtSJs9SpmSwG75jE",
  "key13": "2NcAQ2M2w79BNXL1u5dt1kjpzc7CMck9jSv4Rfjd1PYa7ayZGb5UUeh9m31RLUBNw4Gy6cjomqprccpkSGVScHbV",
  "key14": "425p89wzXEK5AzyCmTqn95a1gZv9N8EyCdkhBHxoMQ6t2xRty8Q99MsdD8qReXbdra3Qie6PQgPUNkhD53GLmpRL",
  "key15": "32z8SWG4VjnvcpoWnFcPqib2CG26fthvtUTMnebkzySeQ46JA1VKN2tBTVE4aMj7Y9ZHEUtswEeKjGQ4ph8d4Y1S",
  "key16": "mmTkjGBYyVM3WXX9nUVZmmgiNhPpCjiTKG4iRcb31Q9WefcZfHybiL1HtG8Yyq19fN2sRPHByqhvdGiakubpizh",
  "key17": "3NrNw3AGEkYApRHKjejYEDoQgPaLDTM8MruQaqEQdr6ExuKsV2rTYrqPFz5oq2wrF4VCPEgvYnYFqVkezDPEwVp7",
  "key18": "3eS4fny8aFjerWyJKdR1fCkdhRb6vP4g4CJnZHWeArwLEdv198ZZythmux2LTM6eMY5rZJHj7t8PhPBZXSQTAcCA",
  "key19": "4kWmtF1LytAwySwLCsG6HVCPX3LznLtkL2rG1GnF1jfJBPsaCGJ5kR2LqCiEzZbvaV6jLiaJuTYt1UW4WABTfDgC",
  "key20": "4EFw9iE79V7fzg2UzsQMMteVEoGuyr8V5LQigPzgWNcbyL4PbyeLRzoRS4TJRGk2sqVudqr6v4amHa5jgT7WmCj9",
  "key21": "5UkZQxmHi439SpXid9QndTAewemNngGX6TBXVfkygA9hbbws8fkGkXJYcCjmDB6VW9zHHSaNiGBU4Wd6btoKcHru",
  "key22": "2Mh3KwqxdAC2Y6X6yYB7i4FUiUdt5z57uu6o2oPZoUu8FrcrNTxf2Ln22M8tp5x6jxV3wLYX5X6CtxfNPZVk1eMV",
  "key23": "2BFunsgzA3UzAAKte4qtxRQ3DtYy3uNca5McJfRiVbGa7CTV3YbGHgCU7rwWBgnxSXuN49HezHSN4sFq5mGZP1uN",
  "key24": "4NJyLteTJf2toVUik8s4U6Dnc6knaUBjYPhKGcjuPQaezF9eG5Bxvcnrkez6AqDmbJ8Qb5kLkPB2PAGbS6aLtnH1",
  "key25": "23YsrWhTTmtR16YYLm9rbxxEe4fGDEeTf89zixFuDkQ9fgwfN6kgTgAxrxYYqJeaVd3CaWRQbvPaQ4mBGofpYaKg",
  "key26": "3W3NpSvZJFZHgXgCdWogJ37EfbcNHZiqdPpP1Tnn1KDPVmE4LPgyMK5Ma8imtWCx9UTY1UxYeeb6yjnHsjpg9iLt",
  "key27": "41vrJXAGXFLZLfqkckubSnDZ7i8cvy2j7SqNqkXCF6PyP9xXMwjUzkBneoaWE6v3pyfLtUMAxQcFSABZYtZQvoRC",
  "key28": "5sxuyr8GdZrfpKWPU5j7gehHVGB6MgPvGLTDhmrXNz89c7f4RWyMXXGsX6gdfxSzLvRxcocpGv2DLkMXgkSjyXDB",
  "key29": "5QYZEL2LVowB8oHsGpxEkjAwZLK45Q1vCTU9rLpYTjyEY3EuqsWhtPqFeLG29DjJnf7QVcAd27K9fpuQSH7YSPe6",
  "key30": "4CRb4avxdu4PqejVD7MVsQZL3D96YjzMGg1JK7uXa31GkJW833tgaot3doWsUPgB9TV24P1dAxsLLDPqec9RfH98",
  "key31": "uffSqKEmjtnMX2a8UCPDNdneYkymH8U25jj33h5NWXkTqPyf4YvQqT6pQtRaan2HVxj7Rz4dQDsEJLHCriuBXzc",
  "key32": "2h8htbP6ka78BwkK7i1heToARcY7h7PsGTKtCPcZFTwtVy531vJSs1SHzipnuUA8NscbNE9jxotnFexP1Cnmxqbg",
  "key33": "2fFQgCciqfhg5eoEpEdkJVXp7MyarMFMeHHLtq5XpnqKiAnCFPNDkvy3eTBKn41DMcrGBLVhUxbMZaJ28XotqEgY",
  "key34": "4nPwWhX3bvdCXWaTb1HsrnoWgpy5t3AzLDmHK6GFLjZ1EhcjzPpjK3PghJ5jjdXHjtWbPoxfVAzy1pY1HuEdrXwG",
  "key35": "5ZxPey1J4zwcYkK36r787LQQNZ9GSdQsAgBir7R1y7y4k4YPUMb7xdB7QqMhzosRV1MVk7JB5CiEdU88B3FhQUEA",
  "key36": "4cUfJvRs6dfEYqfLfC9h5Phj1NxMpxp3EeXN9sJA5vj3MiDfQzZgRmHAFH9gb7QRcXW82jRpD9mS65GnLEffReyj",
  "key37": "5tbhgonNgMdpGaKwfY7MywuSjZbQUZ9ELyus4MgiJqUoX34GkxeLDgJvXYHQD1tecBKJq1SzXYdTX3dx5BEkwQ2M",
  "key38": "4xSXSFrF2qjdNunRuxL4LueRtMN2AK8qQDzpMqA7D2XXQAegQByiH6KyqTzrVETabRNijjsF7XXXnu1YqUzBt4yR",
  "key39": "4y3gJsEe4yQUKSB6gHQDnS82Xk4jnz9qbhQJoRnjGjGye7yMHLcmmNFvVXr2drR7mmgQBdpw2FYmRqdKJe8WhnUN",
  "key40": "4GoYic5Mn3vAYfNdoB4b3u51NjdjvBMRxD7m1AfwF9gW4v4hpr8gYitqHs1LdtN3MLR67jB93qo1qKfqcBBZ9KWf",
  "key41": "32qpLg44zMJ6csiXCFhGi357rm6EKXQWAhphXjt5Aaen2X2zW395KPftyy3fTvWxFMBtYt1GtdmSk58viy9uXt1Y",
  "key42": "3os9UreXrmg5iHaXrQ2HeBrEVACNL8QzprJncwsJ5BumH66yDGsJQbVkSLQ6VttwyQV646tyDFeuxK6zuQyhABk7",
  "key43": "psTTwDZjURUec2ADxE3CgCP6RBErY4tMCJ3f6c2dYfXsQgtdj8ZhXffKz8VCmiTEVtuRdngsrTgAfwkYfwD2KHV",
  "key44": "4NJvV61L1qaS9QP32ddrctM3XokL7vi4sb2JWrs89LR9B12Lmqw7a1vjyTCY4ph7qK5NCs5YV9CwEqLajaANQGYa",
  "key45": "21UkVx5DT1AZiKKqwZy4SSskVBSwD3GVZFj8qmxVEP9QW9T4CY7EFMZhCuYWqRb9711pbwd9FSGHSQ54UkXP7GoQ",
  "key46": "5UfK87Ghs1E8MbGBtjAybLgvK92USG6b4jTpojWMPbNiwN8FPvnfacxxJSsKLMp7CHSBn2utzqWkh9pNcbYXVw1F",
  "key47": "WsA36i5Y5uiSa73UuMZzV57BYpdDsNYw1tSSxXCGnRbt4Qrnmv8uL2vymca7ekmeNXnESGyhAgW96qiUQCsj9j4"
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
