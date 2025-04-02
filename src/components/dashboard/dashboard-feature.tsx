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
    "4yRQGznoegHAXALHLC8E2UApipm6p1pNCE6mBfU5QQxPP3FY83duRRFbypvtsYKFBFeTodkZz1XRyEV7uhk8xYZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51PdjmcBsQRr6s4cPAKiY8jPPvg8xi3naTpRnQ1XFrTuKC7rUcGspw5XYsKhiYmDywN3taSdmEtFDULuPvvN1jXc",
  "key1": "2xDtAPdABxzEZKYD5XZZdmf9XAppQxRrPHF3qtgxFXSS1ZDWBbuoyghFqcAqJkXJrRFTrLHMxNF8k5yGwtyaMagF",
  "key2": "5Sabd5aLH1NvCRaHwK5jAoGpcBq7WycqQGt3fezkVWEQxDUt8FUvSyYB3VBUbdYioyrRG8pieEZzt3sAb62XJ5Cw",
  "key3": "2sk4FLCYQ15MYxwh97fq7wENsaHzFhwLXjwPfaAuLCw72azsZhPeJSkJbbuybn1NJUe7YoSBrBFDrRjDxRg4c5en",
  "key4": "2S8cK92cFVZRjeLwjBoun8HRgg6rGMSM8SKzWZmvzsXuGMJb3SLMWVgMrFKdMkYedzS6WtxP5P5qvc7mS4KX8qHE",
  "key5": "3RG7MUsQYNEeKVjN5aMuXAG9dKziFU3pwjhaygmwMZAzKcC1Ft6Xrdsc5ZS3FF6wtRUkQ17cTFnvgs5qZ6iMpy3o",
  "key6": "JK3hAZ4fMEEogVKNWRt45FMDoKnffBHSdjF8qQTcNum7bNbvuKGx4p9eDDqBFwUomK4e22edJFnz1G8PgVQfAz2",
  "key7": "291hp5egimpujcwbfjQNe7tG3KUxemD9psWpSTTHtd5GhvwsdwqppyLqkhgq1rFbBDe3qEVA8RbozgeLB4NvS7PQ",
  "key8": "2AYAMfBYacQFN12Qi4zUtUmL3Bx7Lro4foRW8n3mtocfMxEkcNAZCPoe6rV8BbL2L7sBd3Vigufo5rELi2tb9Jvm",
  "key9": "2axmDjJFMxGgLWdL6DR2jTYmnPxZCm7thUX5sCn5kyV2yju3tHbY4qtxKr5dMHJDp6dRemfTmedJ2dGH7pZmN6Tj",
  "key10": "27d5iVcKCVG9anx4RMhntE7hnTtmdtdSjtc2MzCt5umKthAYCvKprwR72swoypLBvhobGruG6MzamvLvgC42WhJ1",
  "key11": "5jSodqQwSToutU73vb6JuvK88epqoCPg8pRfVGsnystVqWWcwnbwCYmXFX9wXjbPy5hDN5TegJfDBLxWy4SjrwvK",
  "key12": "4MSovEcpBCsHhzUiCPeiZyeqZe5xmW613yNTGhDbDWKxS9qAFZyLYvtnFDgTxt4SECJYfQYsnB5TymqSMGySoGLR",
  "key13": "2gTeBx2CyUWFSPdyQDABpYHmr551t1hwoDsDkY99EtDQnvjKmY3kJM3mdgoaU4UCq78Qoqrhf6PWSckGiP3EcwcQ",
  "key14": "5qzPtxnWUC1zLCFVbe8YtRrqReBuQV7irkYHxPwUpwA3XijSoLzVNv1HuNx2jqEvAFT5Ya7QzYvtpYjcqfj13a8P",
  "key15": "4b11WgW8putwZYCUyjWkV7Hw99ZkaYjFe1M8B2na27BVLKetfhEpnmQibVFUiSturotrbBgbmbLBsoN6x2fybpWx",
  "key16": "5PyGbZavVa1GXakBqjREFqBvvhNoa2eFqq3HAapKZJ7fxcpeU2GmE2Bk7o1Bnz82zoPuaZBY7W3zsJrjKb5xLsV1",
  "key17": "PPEj6VskUSaK8DRsbmeXcxnTVKG3PP98JaZrub67TSz5FZumJ6gXYYepQzm6Mt7w6QQnczvfDn5L4HBwfT42DhS",
  "key18": "3uTJaBUdCpFsiKU4txT9Q2jcpG6VbMSqyCaLX5Fdv3bCi4F1igvfetEqb4sojJLJEKTF1j4cbSRXBVkhJvJZA1de",
  "key19": "51ibQoDFJhYTcWYCHp2mWA3o4bkx61dhScw5Nfu72JQPzNkqdbNcKW2EtRs27jTKpk9x7rnNAkRHZVJcYAWURxA4",
  "key20": "5putwz6heVS8t9JFuZXPH6PyTvpvYW56QQ8QdYrq4pGEAj37PRqrSELi7tSkWxUoPSr94HxqaXqMKYhV7LvLKdT6",
  "key21": "LefFw1uuKCnGe7XXVrkzUEXr26mXbNAcPLBRLDWm81yw8GPwkv7c9Fms15uBgKqfvLnthQ8C1HnTCP3fQYVZwCY",
  "key22": "53m2uuE2in5LicFKNi4hM6MeDWn9sAgEt842LBhW2v1GcxnDugmJnCJwht6oQyq483zouvnAbBjrShmsffWRHcm4",
  "key23": "2L9NsmiqdcoCgqQTZND7AsUHfeAPBGcy3Nc686XJyg48M1uzvZ9vDogK9DRXL3LbvgxekVRCoUaASx2PG8ps9C1V",
  "key24": "57UKAgUP5RKgQzsBkqt2eDv4Df6oQyEsxNvqm5Mco329EZ41oBjd7sFwnMgZEPpyyguJu1R5naehWrA5YWsVNUWM",
  "key25": "zVfZQst5T5M7gqWqURYT4WkZBZQ3YgCCKDuzS9zNZrjay6sb2YzJKupoFKWmPfkVF19c2KZv1fku5aYznUrTBNr",
  "key26": "C6Lp8RB8TyFabGK4ZgzibmK32GhjvnV3ywAntLsdtECYUcLB6pyPP481WnLukzfPMyGW7LmkD8DDfgdxEHqeuvU",
  "key27": "5DWJzj1UmS7Pf3hoTJHR2n1yqGgb9GBPYYvVyXnbDGpaK54BReAKh26b1kh1QUSEP9vBRKZMgcTLjQrgNQMHuuVn",
  "key28": "4dUV1A83CGBsfpq75JzpSQ7HD9dJehWADLCW6AiyGYSZnAFpuVb3g9vGRr4hGi9zg7UWvLQ5bUphN3f2Tshx9rZJ",
  "key29": "5utZvVATZ5Bop1GPuL3xdFkfTdptSFGRq25rBrvgmmZgaD3TLQEt1nCoKeX3J4CNP1MwPW6pZ1ST6q4pWJ6k1ADp",
  "key30": "368g4ZLLTWdiBPa9Ert4yKSeAcnbefewgjn9c5mNCMFGRdcoimnt1Us56UdzPnCLgF34pHs4nG5FPxxspe6QJY7Q",
  "key31": "4v1HKLLjefsuwXDaYwgQ8kKrMRxGKaw3ZjAWf2oMTy9PEDCGKQyvJu6DwCyPCKnea1432tweLdkbqq6UkPjjyynx",
  "key32": "3gUCwkkZbiNJ7wLyqRLmSEErGPsnJdquAuda7ZpnUL1ZgURw1VtH6Sovq4vz1oM2Y68KeTTC4RZnBeakE6Jempdc",
  "key33": "4zFSYv1FksLxmnYWNDr37tVWzxLVyd5yMqvmTYcEMeR11hu8k5Gq4eXfTcUvWKSZrKBZBy29yWQyGuyiC9ses9Xs",
  "key34": "3gbDCbUYB28Yxduurq6NCoiXtn4R1JpH6cgNWw4DFp8qBdT8A2hXSxmLGwZeWCwsnknM27sZ1rdjgWQkeJNNUVnn",
  "key35": "4EhnHqbQHtScg26Hj2ACWXNxaotcbcexXJjqeQNknfYz1GWhnTntDCNafMp8GjYNvQx2jH1tqtTNYVYGTbiWHJoP",
  "key36": "2aG3yMGntYAwrDMx9CEMSMPjqzcteEXU9xM658kBvnvPh7P6vuisfubhZEjmoDZZKDK6wRBH3GKHHLprW2kLfAXu",
  "key37": "4R73rF9uE5A8uggLoaMwRmNy6LBm2kkaMYLELq8JedSUxEbQKqSDHixjCZMZpvgaAjdPnXiSGehxRsVGg3yfYBAW",
  "key38": "4Kja6jhNVFkrznwcZR13es1aWQCfoeC85GwUqV3aPS3hX6yiq1vQ514yZnh7BgaiXFB2djb7YKzGAyCXmiQYJjuX"
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
