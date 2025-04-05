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
    "382Nk9fpz1isbPGAdyk7fRQdka7fZxWyGVFz21EyfqQScTkGwQxCzbSoyrqSgy2LEzn2YQSRwy1dVxhyCNSaYhzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25BUEU8YRjGCT4cS4ZfULyrx4kWmCBhrDxuwXE2bP7YT36e6qNFZRYUdb7icmfKNK4F5hsRC7aZ8tgmZYEmdzm2C",
  "key1": "3WS91BMP7wiRhmuFs5hg7FJ4oF1C6fmdsJJQvedzsTzrj6LX3A7aS5jne8RHpahnazDfMprprQwgQnvaSagLa6T6",
  "key2": "3k1jpmmGfLRXpfJzHrUPN9ng731EZVTrcLAt6YefD7sGQ7AAiAydPWPWN3FoC64uyGyydGZdSHL2reowkEyGrDXd",
  "key3": "3mpWMuXbmNhGQ4XSGVvVcVF88pacrYRP9oq9GQoV2StmbWyA3btZpFc9vanhjfGjiipkMGJUX2eETEUnkkNz55Am",
  "key4": "3czMyCwDuCsdydebS15xHWqRpg7CMnviW25xsPCTcTBYTF9fX7N5GfhHZtUfSHiQns3z1mdVXSa21Wn21mDDiyHY",
  "key5": "5ovwtSeaPdS6CV8fDVTT2vkdNW347LuyNNZbtTmVASV9io2bCYErgtAcbcAveEKbpr19ejoozNQJwHJ4WfymM392",
  "key6": "56B3dHv1cekt5KfHvi8z6W2GF3DctejriiMwiQMbzyCnAbV5o9zvYqWFURdtuwqTuLpBVDjWTqr1Z3QSc4w9QkFY",
  "key7": "94fq9oMTp95AsjxuiEGgwfuQKyU95AzBZbAPuaKMwfeSrsQukERo2ghASh8LgDSkmaNKEQf5j87KRRSzSHDini5",
  "key8": "5S9ZAC1uGCGogTThHPw9D2gdT97agfhKa7vzfj4H5ywwkKxiUaE554LtppjENuh6z5QJBcFZR1o4eypHRBqM22aF",
  "key9": "3nCZm55zqNMAFaZNUrBexXPtRAu8STxjB6jAgpV8snMmk97fn7HomvqN38hztRktJa4T8uHGpoug5HzQX7ZALj4T",
  "key10": "5Vyn4eo9qKdUuLcyAK97FdtM9wLxqCRCUwmqU4DTuFL4kguFBbvyPDtum84fn5LJ3ZvcoAhvjq6tnwCjjvCzR1Jo",
  "key11": "3wwu7LcngFpzBtA3DFJ5uV6mkMDZGx7ddL6tebJBRyvN4ype2SQzgESHkq8msDtguw9SSh3sJJGkk4Vo25f8pyhM",
  "key12": "3fPqeQcwc2Vc9Xb8WYtQeeRSABFXmotPc2Z4J3X8NUAuUeNcuT5Jw4W2qWxRucs2zsAfbPkJSvHCzTVSonJf29iq",
  "key13": "4DqAKPAPfWiGYXyiZJ8asz5fvR3kDNzCRwYXTp93h4a4hCBbLyeokmmDoTXgFLnM4ayvkxEsHSYSYhYCKsJ6WC7C",
  "key14": "3kueUinBUyfNZm42cLnTqzwgd6WncRMS4LRwVay5Sd6VD4kZz3wi1bdZVEZfXjAEJBknkAMHsq8tE21ZTQW9a2fX",
  "key15": "yjvgkvUBsE3xCSgDbqs8so25sgn5X9U7GSEMPoPo5UUVEMuaELkiE18CpCBy3TZr9gf3npwSx3PoxHzyPQC6Y9p",
  "key16": "3neTqUXg6BR8nML6wzQhMSHEis9UXqRkJNs8hJEu318ywCb5V1zMmg4sJ59RXjfqzDhjMswt8sQrVtPHoeQ5KSAn",
  "key17": "39Vr9EMEXq8bijp3e4NKeW6tX3MfruGLcpGv8ggvP8KYop1LmMMTJwWiEZGM4cVqUsW7wrRQqiJ4ZExz8B55nZ1m",
  "key18": "2Hdif42xaULdV74NsQeShm5j8PtuhHz3Wy7ouRz8SFR3prkuQKAED2RSM9PaXongQfqrFWSwACmY7VDS73ewq8Sz",
  "key19": "3Xdho3TRQp8CzWm5yG7TZQYfAPn4GS4D1aHz2M1n2KLhB28cF7mW7KBvunbm1vno1T1q56h3R3yTxK4tet13cixn",
  "key20": "346hGEk3PEyfJbbGxNVhohNbgtgymhWc5chcYjNEc88BRTgNeP8KXhyUx9ULx8tWCLZE6vLnMxWJZAU5hugh9DmN",
  "key21": "B11zvdvoNjpyjvT7CgR2Rs9xE9Qu7TMpfLn26vox8rAmYkVeaz2WwpZ82MgnoFKJC1rysfCFgyfyq3VTsSxyQpP",
  "key22": "2X9weo5FPmpxCJPmoXivE3ju3nJW8YK4uQ6eao8bwBor2ugpwTXG54m3jJFfNTGSDDd7BYXEbJ8meSkeWrUbJ5fG",
  "key23": "4Yp1ceXAtag6ZtsZ2YVPFXn7WsHyqvoc86YqvEQ1fHLg37wCgKxwVpqA8tBGtWFtJhHzZNSVeahUnf5RMQMv1d9M",
  "key24": "2Y9BMEfP37UpM7uEhozpoaNc5jYKm5iEAGJTW5dx6jtPeeknuSi2FVvWf5CPXu9yayKKCL4CW9hQkL6X8gSJSLs5",
  "key25": "bMWYfNYD84cWCZCfzEJRvvvKk2dAcdQNQqRPeDH3aB8MM73aRP2pxmGnfJ9PsUMqP2155xdjRmxaJ9w4bsBpbSL",
  "key26": "3V8fKfhsUDmRE3ZFFQDfZ4YCfGNhmaE5xRe5S8XwhzYUg6jxfbSQqjUHR7eE2mDqahigZsoVYu4FJGRoDdtGRwbV",
  "key27": "61cFMUb9XKgC4vjvyTgd3QKwKa11sKiXo4eoQdUT3nSqTSFHj5rct7aDRei9ae2Ca3LMoQKrsosFJtWhZ8JgEQKF",
  "key28": "5yYn6uzDyVjoPh2L6TG4PeuhqwM1JyCt8qYQ1aruBmc1f7vVvhQdwMn6bTQboeKvJSLg976kN1pjpDWEAGJgQSFj",
  "key29": "aDgCVFhSmFcvsVxV1x9rNc6JmkmumTJfNenTmYAAmKiM1CdVxJoFwxjdiXQydVRTpzGwwrk1ppQHPGiaPytWEER",
  "key30": "5AYCWiVGbYmsPu1TzXY1CkZBKPBmJXnB19GGb3hoGnW7uEugGh5xfwFqu6ECFhxoVocdmZQaQDimrEChveY2FMPn",
  "key31": "4Bvgrshgvgs2KYZ34esjp25dU5mnJcFskHPPGHpUTFcQugtdt4AAbYoh43KJ5Q1b9txzn5H74rceE54RhqZvtom1",
  "key32": "4WCD8desVLMqvdLJ8NhMabdEeUfpU9sXcob4na9YpZvPqQF1cQYSG4DSot32QWY7QVfQo4ZFvfV81awmJDsTa8fc"
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
