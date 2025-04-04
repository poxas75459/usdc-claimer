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
    "5KM7n8a9zGrRJ9LQmFHfnFP5RB4TGZx6hio19c3hRdwcXogHs23rrQJvVdLvCRGkYYUK9uTRNLBE7VRHKHmsDkrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KkheEkn6RLNcYA7Pa3cYLRRmCxPrHiMvcE59gdtD9iZaWY81omz7zQacsL58gZFTUaKaeTHqRvEh25urAqFoXLC",
  "key1": "4YbaCzYwdtKhRNda7tX5NDYVqQTXh7KcCxCc1AJMVj2WPFTK88ETQ886MzYtz8wE8Y1A1xACG8iT67JBb5PUy6NL",
  "key2": "2XEEkrKqo6DU4uCyoFNGH4jj5L3BN3M8MH1NkV9DcCY6jgQ2aX4AJcSNkBGPdDSdadAfW9o5gxsfthwYW6AJXhAh",
  "key3": "32349jHqyB5QerwfRMeHTYWR8VbPMAPSo1ryxmV2DgZLGz1wuVtxe6metUqcc9tzw8JoLShVrkWk21LT2ku5fbpj",
  "key4": "21WUEPfXjtggp23iDTGV998yby2bkE2gAT1AnrGaajvSoT3VdPQeuaVzoSXgZvSZVgJEdCYzafu68c6zhYwQNF9C",
  "key5": "2JdveaogySkkDh9wYkt49vUiANjw898gEXp82r5ZUzbwYedNKoVTN3L1LEXsbnBEEgRNrXtzyqk54quXrwaa8Qt1",
  "key6": "yfn7hZHfAYdNUhTryHSv5fmhhV8Bx1SYJjtHqz1Nduzatzq5tg6hEUP5zScDKH128xWT2Coy5QCiAkmeqnK6nHd",
  "key7": "39wK7MLuto4qtsStXWTK5m3K5L8rtweG56TozMBeabZG3NYeDZANvqC7aN68GXqC1hA618wSLNSeiuSDyDWqxteA",
  "key8": "5g8WEdxULFBTdTzgUgj264WmdaGcFV1VVZiJ9CcqbWX6eDDF1SzXayWCevcusYoGCZTrBJkL4cUp6UjxYrsHMF2V",
  "key9": "5Dz7x2ySj3ia2GTz1VtCksy39xULrk92QdMRcv8DiPpjJqMsg6R7fsC6VvK832nM7GH6F6W3ixxCQ3Ke4VpWJrd7",
  "key10": "5hzbdz1DpMV5iYYf6eDrQPsfjsNrXNDXigCoS27NK5da8fxaxR6tyFkPFG7zVi7eyR7U3EDeK6KPaDDp6ocPLv5q",
  "key11": "Qsc7vkCn2Mqr9F6kb4gki1Pdz8tEgpHSCwGVbfEz6YYu2Dn2bJTtd8HnRCXX4VrVg3vVbu9uuqkNmMgeiPrfAHX",
  "key12": "5wc86CjqEzXnEZULjMrCUgYFT4N6kuSbKeHL2A88TcNJ7huQePKySHX6z6mx8xKNjaaaGBc59gmA99fKL1NsWRrA",
  "key13": "3zYiCBEwM4NPiFT2Qu3dAuBaKy8EGu4EdBaafMeQ7daKkSC2e7qRqY7TZALwc5oP17VbJduvJRXYSjb5Qkxc5mpj",
  "key14": "RUQ3Q5Z91YAb7U6YXueNMvmvqSbSfmzCGfc8HDKu8Tx4br6z2EFpEV2xQ8fkSTce9izhPFCeHt5DyhsxLL5rPnR",
  "key15": "5CRqVkkJke3yoFyetxeEhvofaJeMeJ4goafkJjFCScjV7fLiR5ppn5bUkkfSg4UZbhYACbp5eVDQnvjcfJ9QEuMH",
  "key16": "4L9P4imHoQEALVNBpVwTEj3oWjEycCk4SPEBkvv64Yw3Cy42fZZMXm4Mu8BZGt3ZTpfhBRWQbfaGC9A9ScRVbxhe",
  "key17": "3qJ9VsuvCaffX9SwSaRLz2oJswFqpuSLGxhBu9WqiXCsggtkzjupc5ZiJhuGDJCVWDRM4qSW5wWp2mPgh25sgSdK",
  "key18": "3adFzRryXWBbYKiahVPKaBhnai6mGyZokPrgapxU7iTm3qmsg2BBbg4ZHdKM4WB1NZdJDxR91pfhwxfxAt89JjcE",
  "key19": "HJarH9JkAyWRvT8JpRURL2iB8ZabGy2pduagRPskP81pcmCvhZMp6QwmcjvZJad7BaFx4ZR1jJJ8o7ub2upo3Jx",
  "key20": "5hGvqrQGCUVfzPL12L9e3uUPYjPvTpKW2fV7EWYuXmcbLDpx4a8xn1Sq4gavmG53qNrwGgCQkZEHtQo8JgeeXJAL",
  "key21": "r7A1rrafkqEgfw7yvwjqHNPUDSx1xDNzqcvMWnBWXqPiMeD7N2DjaLRx7iKbpWi1QLYGYhvmkrcsai8iCRZ7TKz",
  "key22": "4odj9nemaRmRmFueBn9cfKB8PUAb29eM2goXkvPHBaKUuTBRrUt7iCm5kDehd3JJfzxiunze2RShMmzZCTAGd3uw",
  "key23": "3eSzrfSohCXh6LcoDiTEzFh2uv6oQELNvMX86Q4EZSFfyohxgmRpigt3uGtEAukAPaQKEhVU1M86iZpoUxSdvBj7",
  "key24": "TqJXXEgCJr9NHquwjGP8imizw1rymE15K8qZYnbpzu2PmUYibSHYVSS2HWKrgAniSMzA2rPSNAEYy31Eguwji3u",
  "key25": "5sAbBdHcNoi7YUhixAg9B9VjrKTJUNcA5J2sPeTP2GZnPNCESLRjiXyszDKuV64er8yHCkpPZL9EE9JHrZ3AFo8A",
  "key26": "2YQZXNBi9ZsQgPss2WiVmQTbG65AGcQSKiJkuTZpG8e47Dab7gb2ZEGfRs6g1iT4gQwcsGCe1Nvhov1m6H1nD2xq",
  "key27": "Ewa1jYApwWxjHk3gkyaS6opDgcxgZtyW9kwWtgw5a22TifWKykVSAZea95wFgqRkSC3seGEfGCfNnnUU8bVfdjU",
  "key28": "rgo9ZoTEdFEcfhzu4d93zavQHAzkn6XN6YMxBjg5GQuKNxpqQ9wZLRVsG9UmWP2vzVe4nS3yAzmVhTYbFCgviQR",
  "key29": "2aWRvDeFtGPk2q1csFAznF75PMcaAfbgPCb6g3kkeh1kn9UNLau4bYUnDK3SjeCSfhLaBFG3kjyNyy1xHHGj8dfY",
  "key30": "5pYrxZ9WUMtXCKouncVQoV2KJRZMq7UrCEttXbHphK6h5j6PSDqch8UnWiriKjW34bwVLZBggdgyoR4k8KGze9oT",
  "key31": "2wPPPUrE54mUfyBE6Tt9hCLffWNAkthJUZAc6cAQUigkpXFd5jr8RGQGtRzqFCGqth4btYhVVyhSWpbhbeKWUwi7",
  "key32": "2R2js86nU6q3ZFdyiSL1fgWpm8n3s191dDoDDKiN6gWvjJBtav8F6tu1JmAWXioayWWZn9BCKPNJg8qLZZdZg5Wo"
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
