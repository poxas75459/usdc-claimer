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
    "2mJUBQicjNvQrVJsjCWtxWyKJgNni6h7YRJUZjPox8ToupFtpWSjxoHUVc9dQRBF7upsAMu66v3e6awf9A7jDuzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23AXWWUmBxRFWvSUXmUxGmVouH2j1rbYkYNi5GnoTADsN1Xn5G2co1U1t3BDL56wZHwLfQbrtu4h1BLH9C17gRKD",
  "key1": "3Bcy5WNU4bEbpTgUChS2M8sfJ4LXu9Zij7JotswaEceSS7YCjYw3Fb4p2ohTkFA3361WchJzhNhT1XyShhihZBAb",
  "key2": "3czbxKUR27dRQSnjoGJe8iaM58gQPMAM9hHpqEAe2DWhWG447ckJvz1ChHkChd32J6U1edQyW2xDcVuZ5KDbSUgm",
  "key3": "4V5CGEsfaMj87Q1ZUqJNjgPavtzVGhp7Sh7wL4HvgRAQ3TmG9e7V4NUWgG1gu4ozEdS6B4HbyVfcog6EgtkRZYHJ",
  "key4": "5BtoBZ89PynsvBww2FQc4tBx45zHaNGy8M6MosQRRw4GUexnrNfRMGoxiKdCQXQ812YwgenhbcPsr6h1MJffbrdV",
  "key5": "f9jpyLxxYnjrib9UzhZmchYKJNgCCEEyRFe33xP49CyFsERVRnSfEQeHcFWHEFHEMzjFxLRkNqwUtTRUCykjzp8",
  "key6": "5SKuSBRDnYErBdPqbyCwcyhjWKUZqAa2mSEf3eJ77XKMoqbzTuR9JksM7rEkXE5ozFpAqWm1wmubVCMNpJJw5gRi",
  "key7": "2hJRDSw7sH5Up3SSd1JFF2oUqpeTmM6BVdyzwxWBWFawXiCNWZNEkyzCEc7SRmGszK9VE9Hy9VkMijuT1WDpndg4",
  "key8": "5FS4FQbKSQjti6Crga79e1qTyd9o3qHa1iyHZTWYnbUr3sWnBnucMjiAYyz3d5gAwawCtLkJPryRdKnCRjj2hNfx",
  "key9": "HNFwDPbqosHBbtGpgorAA8QF8x2rRTGrPkV5NHweZN4mbM9uQ9fqfYLJcrVXTauH5hqZHaP6UeE3qkAU4omdfQD",
  "key10": "LTE9esZ8seRE3yTYvXTRJtPMYeoPkLQJ8cHfZcDE4grGS98jb5hVXYCCqppLnUCp5fzemA4xRtdymVa7bYzmnwk",
  "key11": "5pLs9uJZmCpLsLJQvFtPzjPu9A4BBPUzFmBnMFtyVmEbtFWXt8WpNkYWcyVnfvGVKhwJV71DDjbtNNZwJL9aKqEA",
  "key12": "3iwQiYktf7aNeAnYJAQR9Z7S88unbs5LGbaV5LUWT5UMyj9HqeENEaY4nD97q2Hz8EEXntxTGEX1aG9esTE6wr7M",
  "key13": "2UUXR1hQbZgu7q1cGGyn6XoTRvgsgpReso8shQTCTfji3HUTEa6YvvKpdw5o4m5L2jR5Nt4gJwx3JfoJTTZfQDJX",
  "key14": "3trA9iTUZCJRfBqc1sZXcKA7D9MjzargbCb9p4suU4SWtUovs38YKGri3jkUpKpnkKGfkNHbjKqVTbrBeVuHy5c1",
  "key15": "2v8wPFbAAGMwajp7yR2A1Q22SrKZaSLVmkN4QAAbcvvoiP9UrXyCBmGB88BXih13qWrr71NJnZf9odrm4E6orPeV",
  "key16": "3Z3KAw1DCADCnSZpL4aHJLCB9ccrVLrcXrYmG2PP2GQPBFBtQQYy994T9gsALwN328zCrJiBwNHkHe6AmUuKRuic",
  "key17": "3K3zjbRSUXLPm1NiQ8x6f3bjaxBALZzsW9TDJCJ9rVQ2rrVo2S45Pjbxh1r8GX4kv8GBeaCfAWBJcFRhsRiFN8ja",
  "key18": "fRbmtma3zJCdTAABqNVKhGkC2R4nCDaBYSwgYa8fkXxSU1RbzK7V9QxE5CkVEWqkuKt7Nu8jn8tJYcWRHQ3Hzt5",
  "key19": "aWLU46dyjQ7oViBH7AiEjSk2wNQVvRJ8daahkDCZwrhNpngjWzSsTTWkaWC9JL8yHwM8fFDvq7iLscwKvEdXa65",
  "key20": "422XbKsBGDX8TffX1XWNUxGMbwQfEvaTPrBesc9hKAnVdpZMQNdfRpFMt5k6pECWtU4rmfxcYprmpDuFDaEB6ph9",
  "key21": "4CADTw4CvBPybqnFm78CKz16HyJJQe5Q3d2tgg7fgXmphNeW27p8UsRD8otxCMG5sNtBkXyAdzgqfmrUKYZjWNgc",
  "key22": "2dhaKMTcdVuRbNbDPZnJrPmsqtoPGL4terj51vwd6TA5sGMJgkPUcuXT6Mf2wRMvKJ1qQw2YvPsbSSq5cnp2defb",
  "key23": "RR6RkCz7M4AZegasHiv7HH3wvEfKHMEB99dFVVVrTSmYpD9VUV75zc4dLTZdzjyr5sxNVv1sqW9kZxqSQmLdXLL",
  "key24": "P7FeViC3QmJHo3tdFky7kAxFfFYq18QMj2zBEuSYmLb6KtFvXJ6NTpBuomup4G69wh5LZz9WwUND6CmvDNgm4XF",
  "key25": "2Mm9zPayU2mpC1HwsqP3cVZoGp9Tamqm8eAv1yVWN18HRRiaAY89RMArjEmazYQ8t4y79SM7PK9W1wUU5wcJdFBu",
  "key26": "2DP4bmizwALYybv9mFjzkUFkc6sf6Prk7XYWTLSYFsHdRMdHeYqMjGBLquSPRr3MPGb8P3w7Gi81dWDyHHbjp4JH",
  "key27": "y8VT3bLtuSpvZQtCNcCYRxkyrc23gHBwC6S2NVWggUjUT4Gz4V9XVmAAFgWCxPVRtiznG4bGikFvGLzQUhAEgMU",
  "key28": "3GcfLPsSjWigpAvRsFY6JMcNbXS7FCHoaxhg38oXKdNnRbgiRHMpGuhHbfH9cVtzH5UFgwJujQvobJGGQNa56Eot",
  "key29": "jchorxXKa626yTcsXG5TZRjFRxWPji6Lpc7KZ7zDHLg6GKxPeen2fJWAHwtj4vR9azwfH7witDat1De3Za7Ne8k",
  "key30": "8VB13qAVE5ZUKKeeywNRJSosWLipTBqSAMfgAky1VA83zsgFUbzS9DwoyyfNwLMB5gTg6qXuaNTgemTEjyBc6p8",
  "key31": "36A8b3n5yxos4GxvHMpS6phTEQSJmWhnY4ATftaPGudCheefhQ4qGXzoNDA1rMEEBwEBUVi9YLHPTQWy1kk1J5ZK",
  "key32": "8kDfq4HXD4xPM6q2NCjFivK4RurLu1UWr3XyddwP8nB9n54iS9fpkPWzLiPCo8bfXTV7UNGipbRaUHjMhGfgcjW",
  "key33": "5vVotgzzssqMeZS2ELHbUyZ6SreoY7dSL3VQVLgtcizXstUPUnzLhYChAWwj2rQcGJofKLFJAF1xq6yiVGGNuGh1",
  "key34": "55vQt5BWj9nWA5suzPaXC5mN6w1GqaMDdgG7DdRhFDVdknegT26z8nhBxreU4RA3eX35tiHsukn67ACouWy2vg67",
  "key35": "4rCATsahUczg4ThSoHYJYAZ87rNgsij28A9DAiDECtxAAL6CDqNeKevG3Lk4LUGVeDu2uY1D4DRjQkX98NRQVSxk",
  "key36": "2nG6qi9M1b83ityeC7PErWuC2p7NKHsRcUYWtYZba7csvUp8WFg9WxdiLXDQYBSnR88e3X9bifz9PpYQtaLGZRkV",
  "key37": "4RNvhiaFwEfeoyUoZA3VJrf11nmsSnk6tUnfnjDsuA72j19kou3An3FfGsoAmGsrwbAFfKGkPjp2moR7B6GWWvNd",
  "key38": "4y4n16JPpHu5LaE4gu9ERdEmD9ePAgjTB485c3tEWKde1UZQ1grcTCYngoyA7YSxtfHr2EcfeZtoEjGHQUKZS3xK",
  "key39": "oLhTeFG7BwadL1w6MUyhg9DqMVdiijjhqjQwxvUr114SBuboQ87cmdQPqAnevcJ6deVmooP6sSHsirsTq6SQGSF",
  "key40": "4Uz5RHr5RyfausMt2JkbMLhheWg7CdN2kwoKwm7P9qWnnNp4Nb47MMocs24ALsrHZhwkYUJSrFVcNw9zvteDcH38",
  "key41": "BJJYcGjajZdtc5n2HHHo99Y2g2DMqm5bgsrjNH82GyPEkAeo4fjYpgFWzEMpzfRP7PT8hs2R6R7zhqpA9uTumsm",
  "key42": "51SX6Nn3q3TcAMRS8sfBBTowNZ7aGTvsHGrSNcVFZMV1XtdGJ7eNULN6xabJ9yyTooFS28Ycn4ExNVLS58KhA7da",
  "key43": "46gDvBJtmArrtVxCnnAq7reJCq7A38ccumBy3HFHqfejRGEtgJBg1SysTpzVGMkDPm2TwmddWnkZcr1M3LSGvhuD",
  "key44": "3mp1TGABwmwRvmhprUaRLFDqc4HaEjD3ATwJCxh2Zqb4BpC2NxGC5Rdjj4w3uKhsPCciBzY79pf737X96JkySucy",
  "key45": "3yBYzWCXXmHZVh4QPZGSvxwjot8GkiPR3rrjxehJyce1ikVsnrMJauwNfnZ8R2voakAq8bdqA5cd9cyT4okVtf1H",
  "key46": "3wLKKczVZoisZivPZ7coe6MjRjJfW6b4JW1mpx1idPZrDW2J88Q814RaxfdhVwg5JayUjeopgu3FPBzujA5yJnDw",
  "key47": "3a3b7PSMhM8eZ7NjwhmX4TPM5ui89FhwqvVWuEPDgUV6zdkRnHthzVX8Px8TA6git7WUCA9UZd8vSSX8XbUemUsu"
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
