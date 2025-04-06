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
    "5wsqH9BEaNkosGTg2jDnWQgEMSmy8J5x4Ho1h82UrMRxhdYDS8PRfRwWcaYfuUBoSUgMwvgA5JePDPE3XdLsCg8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q3bDaSB7KwJPicZKg798rtvYNZ2HyKqT135A9TLSqqpBW58fvM74TQ4J1vLi8Jec8B5zFnhVGHzftkCNJ21kkBW",
  "key1": "4LJ2kY3ShFN7J1YNCXW8gCuYjwL6WJ1CSDuFsWTiLTjde4hQc14Pht5yghy94iPBYQ3pee9r9obLcjbKZ4xcP4ax",
  "key2": "2CtX5NnV6Aq1Bq1uY2ivL9Yggg2yNUQzERJJ8TaseSnz1ZfsyWdPoPs74rLbAirBayj3eQYLtKLNLn8m48QskMAi",
  "key3": "2YBwNBipK5S7mEWpTmKXjWnCmQZ9iT7mSKM3BQif7fs7e1abVFdYAK8VAxgrZYnZryDDFyUEvVTLWTXuKfzNPK28",
  "key4": "3aHvm6isSWSUoCKA2VsPywM8wY9nre839JbbURCLqeeNhgzPKeLyf1TdWkepSJLLiKRLrWm8QGjwKS846yozwf5q",
  "key5": "2AeHSL1mWrryN5DHamVu9ekp3PhH9F4DDthH3n6K3aGuG6om2EdB1WjjJ4soGEGtrVDCkzk5fm6F5zUk37hZdJkr",
  "key6": "66rnRvSczW8dAh2KBXuoF41tGaf93cRo4w6bkAGg6T5WdX2vbGCBvp6btarmoh2xW8heMHccdvmhCGQ9qM1Bxz6z",
  "key7": "3hHYT2PJtUYEPowaaFEBW3zZmMceFJcC6xM1KEUwhpWhS9ky4XxywJioRojYQoxeX9Fhz1wH4UtCF46cJT8CDfGj",
  "key8": "GiJzyWotZRdwBu4qd7KTpoNee1GLybrgqjCEYcrFTeRqYEJZ7UdBpvwxoShAApuUKYDxEaP7gDxPnrv5N6N6ykT",
  "key9": "4o6WadA6z6Ua5HA9qJp9PojRzuHHKTFoTCtYTH2ppoircdWZRmDY6krLcKfreoBnKJTUAFneFXNG8xp56iDHPsJ2",
  "key10": "2Cz7DjfrqFvLPDhUcfZ5j9EkeomRHqLm9S6nU7DQUCXQXZiER9yJuZyZQ1kQufY1iGpypVs8AJcRMxxDuuGKZdzw",
  "key11": "LCZWteWKpaP8yUXCYWVL25jsc8PU5QeSEAUshbWB3H2m9Vh7RWWMZ9eskNbpeo9BtFJycKEZ6cPDZFFDsJHd6oH",
  "key12": "4d6Bc8bbAZRZJEbSZxFSF5Z4vWsFGp9PMie1CRn4CZeN84PmvRJbmVy2BPCycEvTmQYeWS6ZUbHFZStAQGZT5rdj",
  "key13": "3KwEGg2DYmRBmPq5WjVgiZfvA7eY5QtsGxDJ6JMDtVwtq3cJ4Mme9dsGAQTorZp6Jaw6jvsrK7DPsrx1QnoKdDGv",
  "key14": "4MtBSzGdGMfVEZqAM6ynz1MwJANUUx6pCZyknPztBWhRsEedvaFxKPzSCyUBpsQLTpkbumoZFcdf657SU3svLTPX",
  "key15": "5HkTwoMH1ZkxWcdVEacfnvPUBnuupv5rUZzbcRdwi4W4qaxVwvUb2FWyMjxA2VLKpBMxgzipNVgynqjfPcKYrzoR",
  "key16": "oJZ8X1V9fh9zYMu9CnjgmN4heunrqxyhrMX827nRTebHaSzoqMQf4AYc2aFf52gB2Foqc3CHZaJoJJzWUY6wSoy",
  "key17": "3n4tteh8tLKpTeBWAj5q3qVPoqKpZz1dfFNuAskR1bey8K27oT5HB4zSNYAyD8J9BYiYc5RnsyCMzWdort3AyobF",
  "key18": "4QPr3QCDSXL5ueDeXCLjiMzrv16wcTn8T4gthHm1AZ5sWSw4CMMpXRdhABhhaix8KPiqXei4pLecXLFK21VvLkHE",
  "key19": "3atQPXHUHeFYjT6PMRU36yYewwv97d4XCNSJdLmfyMgC9kqck2Nfpk5cSEDFVU1Lrb1qzivKgvFf7mhnNgQVFt1t",
  "key20": "64mHQALgUR7PBXzM3fXhVNmqwCNdJrgrzj9hW7jyi6Ljc7MiXpduNq9K9U5bfzByazD8CUBKiWMagiCAZpgubMLP",
  "key21": "7hoTtDUXb77yk4zb5pYCQMKViCNSPrahcCFZeHKUwLHN7fputcPgs51fpKXYrpXGX2F8wdV83zfiadaQySS3YQC",
  "key22": "2RBJc4uwcWmxm55kEAwxEtq47Ro8pkk3hcFnYKX8W9gR9HEwmhG8uyKrwTCTMTHgCpoRTrzA95YuqrL9WwdpybS9",
  "key23": "5W9SKvefnA1Lz7i3DtUBLKfuNjqpoa1VRxd7tqMu1GmMxM9NT1szSadVmZm2yw4AABVEDDMTJcrfAKz6yFzTyysD",
  "key24": "LWFSomYtZkmPGVm1DgRJR73q79SEmZsVY25nui3p3eJAcC6EcbYySmpH4kzAGXKRK74Y6LotfnyNre5LgrteTFg",
  "key25": "3N7C6xm8iSgeAAXVsTqzG1c6UNAyzwpuKoDfq6o97dDn6iaJ6GNsyoa3yaCHhje56nomyRUWbzJVuCeds8N6hXib",
  "key26": "pjugUD9tPP11f6ConcfRWGqZmvi978pZ9Y9NdFuKavFLkqnqmC3y1UmmJ8BGzeqc6TKFHdBmmK4X9gYm4Ufu4ou",
  "key27": "39b7CyCWxFbfNNvNHMNgRFTNSmaNKDxg7joB3kEiNPLhaa8cMQ2UmWjrQ1FqGSEbEY5o8BMSbL4tC4dEFXhiPXwy",
  "key28": "5Gjzb2zthJeqb5dBb4AUscC1wkJ1zfKddunGJmZ6VwuezWSySPw5osCbd9YLx2LRZZyeRCiVJ7kaZPyFSHp6v1wb",
  "key29": "5pAXWf1kaBwpanDgAUyqb9qMR4N8K8iWZwLw3WL5M7o43s31JxGDKxA8UfcdXrLw5MDN98tbuQZSLY29UPTK38WZ",
  "key30": "BPox5BfScjwxmNVoAiBkitHf9j6DYKfG9NLpXn5PCpUCS4jPN7ULKrq8xbvUCVPESHmfpQPPubG3EmYT7NEXEEK",
  "key31": "2JWHEbM6cD3XZAhikHKAYXQ1pDoERhUjjVaPFsmsx4aP7SdWBrKZdPuQ4xNUWZbDzjEY86fX8gxRwrtUfEcuy5fG",
  "key32": "3MYdufcLjGqAf59XESfGqkvt2MKaFyRXc7VPe1bR5f2fbeUWSoMTbJyBx5xzF4fw6SLLRUEvR6z8hfpHN3uRBtmm",
  "key33": "4SjVNqxCynHtA4nsqZH9ieEzgWHybWUGMPGdbuEnzEiNNvi3VKDF84VR7PgxpxpJMxtmhJanCGW6sesG4J4wr9jV",
  "key34": "46fbbTjhWynw32FsypsVKvuqGkmBBcasCbhnn7mvtvy3LP7m63RrLeyVMKNkvNGaTudx8xKTsesjB3TyKRX29sZZ",
  "key35": "4HQ1gBWP4GhYPvfSGZ8wZ5cfjBtRVPvHgJcj6e8feGhbT5BnQj8fnWH3GFonSrMuCcA234kh4SKeDVbMj4JfvHem",
  "key36": "3WPwPHpZoBYsooo3mwy88PJAs1y9g3ote9kkEdg1QDsSgFb4s5xxsNQ4AerKhS4nQUgphLA82mM5Q7CjwmBmDcp8",
  "key37": "4RXfGaFZxqCPpbQduZA8mrRigMoS2GKbvRszmWZ2x8qLxCfzKShwEu12JKrhimRoL349wAhxXY9XU5t7i2LygufE",
  "key38": "3k1t3fjH9Vk7mWyBCTFouZ8fvsdSfzssy4jqXaHU5AQ3FMnrtdJFKXnZ8grKaD5nfgqWy2Ap3jRfzkvco2zAoAgW",
  "key39": "Fu8xUsHKGVs4ESUA6zSB6FUGHA6Zw2ZAstYsFGu28ncJjf6MVwDoRxYtCm5neiqrKb5jdyfLHWnn8vw4BZyELX6",
  "key40": "4PBRb6sY6aA1UEciZ3NUHjDg5b1Tz7yrn8uBdWg31HeuvYrbcdmqPuFCatdtK7P1KYS731GJZmatfsa5xdkqfJ9S",
  "key41": "4R6MQBJXnryoQ25Kt65JpS7tVqE7SRab3xi81zWzHZcQxRPDtPyTUVqKSk6MXEmHP8AsaGeHpAftKF84hT8GGwHK",
  "key42": "2JLyz1D79HHTR5sT2P6Du82m4UEHRkGXxgYFV9jRrgfaxsM4iRrEmMnZkdr8gnmuNJK9NZvKBmwDJx7etBYhKQ5p"
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
