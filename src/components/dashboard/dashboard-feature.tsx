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
    "127ftLYkrFD2uCDL2xBC7aKyjzpHiDeT6dGpR4Gs4CDE3dAwi8h1Lagg1pUXEwnaMcESxmThFo3G1qdBWrUDhHAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59E3FqVPC241Z4zeKo7ZL6LbaQrn2Vu8vdxRTbqqdoK9U2xia2ShE4b2o8CBp1gPhLDuYNFhrVCsUtDmnPmmJLTb",
  "key1": "3ux7eRL77iCbXc6DadatDWzoqgsU8hD6DHZi4piubJfiXR2LtrnozC7XyDB5LfisTe62dfCVLRKEv6Wet7H3WN8U",
  "key2": "3xrhXDEhDDNFtZW1pDJvL4Jn3iS2BQMA5ccB2LpKFVtT4oxFnyHsSoRJbBUp6ydPkrSwQY3rTPiqLL3Y25BeTjV2",
  "key3": "5NxMCinpv1CevQYyhwXkdn4RhVVFv3CzdsZxvk5XdzKdaztCytjDMYzzBD9fhC1PoFBgnnCSK9TinGZ2Vf5Vpc9W",
  "key4": "2mZKrxLMGLmy2ZoJYi8WQqMuD29ANRC4DSDBMSukShwaUGYxcYY1XvSabDipCridsdKY5Y3uqaAip1RftC98dE4X",
  "key5": "5cL1FZnvgKZ8ZsYv6gnU28tvXzNmTxL5XKEmG52jHrPR2HYb6fjWx8NDcd9BqSAEGb4iWJCLbu9byFyKqENYSvQh",
  "key6": "z9sQ4fSdR6n5HuTz51zgWVDQteHMuDgPsTVRnkMifZP6NvdTrUdChaq46CqsEumhNnTp9BhATAUYvZtx1fB2zca",
  "key7": "MDxdW5WcHkNwGZGzbmY7yVQaaP9GrKA6t1Qe46dGZe9AMTB2R7RrPeBM8qkgvfRfvjtaSTRpYL4aC6cHH4KUy9b",
  "key8": "3PCuH5JLtHn92yhCpf9mpZHS5Sis2HWTy4WspjLvLTU7KasgQ1C8AXAhLx2qtAmkETUbtqm8R5WnHWHB6j6M413T",
  "key9": "3RoLmtVPEoB49cDrYc1hYkuJYAdyeFf1doBteyvLGha5qPxaeKNsZ6X65MbEZHUYQzu8VvGPmTk99Ba87Lokwyi2",
  "key10": "573BJ397wa7sZ6q1vaFkLWqosVnz7cYmxCd8TZViuMBYkT1rYTTJRKXUSxTeG9FHQ6qAwReMaiauYv3fAzXzhR6r",
  "key11": "3CTQJo8iV3x3V2RA7dYprsAWqUFK2trTDe5WveYmkdQP1CPHiUom6F22CEndsmz9JvuMVdqHm3Di1bAYZWosXA2Y",
  "key12": "d7RLJjdGRDw7n91ohQ6NhiFzzg5oABPDsoVmKdGDWyHSfYEALurzxxyDXaWRPHJW25ki5XCeTPwt9V1o4Ryf64C",
  "key13": "5GAv6shbLLixSP82USUm2y2QPaVogPt8WLJHP522UYTau4AENSXy1pCEk6RJK2q284pQHGcdyfMECXqZ1TfmHQge",
  "key14": "3azFf3S5epxH8y2HWKbJQhLcv8ZNNXFdjSMnMXCYhhfHPZSjfbqRsLa3UT1LYzURxGSLpSpafTybhfPBXJj7ZLr",
  "key15": "5kvqEXDYzp8JwFnVD63ovTvJQt29uWjThk13nwePCRfN8YPXQfBdPCq7EGh2LhQ7obBaionC9K2PLqJGMuwWgciE",
  "key16": "2femngS4hvrxLs16ZnS8gtRarTx7r4utV8mCfuvbwLX16bCTK75Adm5XkDJnrhj8wwMkxyj4kmGv4RKwDcn9WpRk",
  "key17": "5i7MKUWbVYpx8DwhDdY5vwsFHZhfabscwdht1oiq4E7bw4JTpYcjSv1QUi6KNwNn6frBryL6vtCTqPWEQ5m4w1L5",
  "key18": "2d8V8Ho1Go9zUMJbJaCjtxjYVrAPoTDQvYzm7jgTtFffXH2ZYsZjjvjmqqLPHHQnQJAGNcwdEyJS37NfPJwZN5nn",
  "key19": "5qUyxk74Jb6dpneAw3a81ve1n6AYbnTVjbCNFUHqofHjhHrD985Fka41sXzXnbV6bdysDV2kLMYFnNGWchFYNFWF",
  "key20": "4fW4wxydwPzvSAatYMe13mk1pt8kCxDd1SNvfmjviBj2B9JpTmZkobpuCHfePnsUP76udfmqJLutBg6n7HrmnXTp",
  "key21": "3WmL6nACtNwCd8MHGgxFV25WRPDN5PdADMk4vk6GfroskXPNMmwaWnp15WtvFd1kCDz16q2RMCKotQWKozitVZS2",
  "key22": "bVjFGuTJaoKNP3bA4bqAHYoDmP35PMc1HSmHX6nE8RJxQRz4QLmbixUE1niVzvYwfRoTgzQsTDWgd4EAy4367mt",
  "key23": "5AtvcLTe36WSCBmG4CB4Ktn5q5vE1JVHCZvBbSiYjQgwEC4NduKzenDXxb2mtwyvLRHrhZJRYH7uZUAXyzE2A2Hw",
  "key24": "5sD6eEbNLAep2sNv6JcqNnq2g76ufsXRr9FqikC86364qWqPr4xf5PoQujp498WThKQzXFyTmBzGopSPZLvpShPc",
  "key25": "5m2ppomc8tMbmC7o6SHsjbNCiXAEcCXbiTXV2pgMkTkeJW2665KiT92SVG1Z7b4sqLDPhBhNZLmXrQXvtXUUYixY",
  "key26": "3Z65ggNovnTvtLpf4UFakfXiMhNcMJpJ3UgjRucQEqWAH8djeR9hGEQNzaJE9eDoEaazWfL1nkDxjmQP34fGHgQk",
  "key27": "57WukWhB9KJPSkzvbzrgLJ9yjeS96oha9M1H2vRXf3RjKg7zErcGigcV7iG773y3ge9nnBZhoVS1gP47nhJDGQmn",
  "key28": "rRbv6XB4emuQBsxWSuuEnS2D8jxad9pXirqAufgxJWgpZoHEEPSdH4f3f52YyzKrmtiK4m925ythJdJDLbZ59gg",
  "key29": "4s1YYp6VcPVYxrGziczApBurFokxJ1kaTfqwXhyVQ2Dza3pMVohJLx5eYHDaMQetmtZYwq4Hqp9PqDgWmmq9TAM7",
  "key30": "49SGSLZjG3QPGYfuGBYMw6AExqHDvE2oDjuo1viXXobbsipwv3LNcaJnn8bzqVZzDuK7iAxQPud9Zj92wLi31yWs",
  "key31": "3G62DvjvDC9udRkcZowGQXiGoAaYANSVZyT7Ka1gq8DTWBmutmQyVQZWPnaLwfdTvCFzXgufN85PWLjc9EnEDqqv",
  "key32": "6d2qKsmyHBapbomc4ja3B5z6CYaUwRXVqrSWCZmbFZn3vupStD5fGJsCkofjoZKdrM9KuihHziGnJjL1SaFG1EE",
  "key33": "2YZGcP2nCKjWKG1ZRZA9qEQueWH43wUNrtBJAXQ22uzB5ANafgJuRR9DSHq964HYmLoLLEcQgX2XyD4JdSiviV4u",
  "key34": "3dJdzi1McEbVQxJoMjLwqVyaHo1n7d29S238HkutUa46KH4TpvrEjkeQ7tCCa11Mx7LjHFshk3PV6VCrjkwkMNWD",
  "key35": "RPLwGMg5x3fSrETCdLNHWf34vkyCCkHJFToqdNNwnng7a6z3jGogkQoPo8nAEu9pGaba6ZK6JP38gPNoasacnyj",
  "key36": "51vDzCFjSxK8ffr3HGQ7JA9XiWGWD2SSUdjPScR19JiN8HSUyEhZpHAoviCeGygy26T7iZ5kQFhU1ukuW8jZegBK",
  "key37": "2pqmx7rL4TYKA9E8kYpkrU4f2n3T4g62DQZTNJiYD1E4CqoYtKpBQSZdMV3JDNLa5c5U2oB5QQaRgrtPpHeP9zvB",
  "key38": "5U74p1JUmFta1Tx4Rh45jhaBz8S2m4mFar5NPh63kTdBhTX9o5U7zHaasn1jDzpVHee1WyWnbRAvW7FM63pjV4t2",
  "key39": "3WW2yVVvuH38gNUtEkK3i9ksALuTMHyXDp967ySfW9FEV5ZHSz6RF3XAFshuQ1e1jRWgX1AqxULDjFb4hBkqHfCy",
  "key40": "54RpfUm4Khuji3CtEJzLCK5jwHQxjVFMZzu1goAFK562G2duYBn1YWxjtoxExNAiE1yoDMFVwz4yMj5NZirE6yYQ",
  "key41": "29x6eefQT4L2HtLMT6PUDGyE8Yf1rjjFcW5JkxVdyZHyedPyyoFovgDc2557fnSvjXgyYkKwsk2cGt1ampPtvVcJ"
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
