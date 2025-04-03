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
    "36GoZ5jBAbo13UMnC53J37rKo3wy7rvFKK4e6MAP3baYwEDZPY243HteXvPbxFoFQCMuQFUdmahv6BHYfU4LCYnw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3phcj4YBXW1z7bM7f2LcH2MLSbqHwkB8sZCurrtawoxeTsH3PMXqFK27iCErRPTRnxQ5WKNxeF6WNoS2fHrfRgGb",
  "key1": "3topvCTyJKhtayvsMFfdDDYSmZUDSzaz152SHAFjhTuoACkWtAjgMqx8t7jREKdGFcsHDwe5CXL3rUiBEkU5y8Hj",
  "key2": "8CkhhhwBxReMiTfbD7V4Dsy1ENYuJq5CPHzpwUfSDCVPSvrZbBVscKDMSPmTN6hJop2RrxWTvJubbWsdqKBu9f8",
  "key3": "NC5WUTUfCMPFeeoX9RexeZhBqBDFbhHJUYRLn4syPr4AgWS9LEexrn3bwaJqQhXGT6uRkAWDpoKAFFyxRS7xakL",
  "key4": "aeRZ6w13bUnsQD5f8oq4hPFnsD1GQSRSS8TNqezr2WnFfx9FXsyne8MXz97iUChFAXQYaRRqrKJznab6wiiakCk",
  "key5": "5jLihaqrK6UcCRnKfunqm1MWgzHzixcvQCSYxbRntPuaHcmvmxhhwPKauX2UZ75VUYAQQHRu9Hgs4j81Hju3QMfZ",
  "key6": "4dUSJ65jTtBbVKWw6U2VqdJXYFjEW3ehH9GEaWTmfheE8t391MvvgiPQmafrTg1nd7hr718vfzmFrXBPZshpCmGB",
  "key7": "3UBT9CoMSsVnbbsVwJrLjwVUw5Lh2sA73amJaWtkXEDitgJ7mSL7tiA1dg11qxhvnvkG2QyjpXUZqvCDJ8AE4tVu",
  "key8": "2xAKLZKTwD5X9T59vwzUMwT8EPVgVFun6hMVt7KkT1n8SES58UkkM3MrV1fVGJkuFhVsJCEzUbLWAHmQjdSKfBnH",
  "key9": "2gt24u669WJiG4rBNV4Zo58AeTR775FTeLk6NKiqnsBcYAsyv5B16e2QNYvJyFa6NogrQxKSVQnaK4faK9fjv2vN",
  "key10": "5tNrriwLDrezpTiSQNRV6DbwZSjsNEvGKarPdMd6vavzfXC8oiAXYH4yqXcVYZCMEmqCJJjx5gvYwtzghCCj9821",
  "key11": "58S1oD12XXs43ZyWbfGqeH66Hetjcro3roxtYGRD9i6JPC1xSy5JxojUgopMfEgzDWWptnYvWk5aHvtHpntFwVkS",
  "key12": "4sCmP9tHQPpipqwLsR7gNxeWjX836D2yuCkNWdQhzy3tvCK1Jp5p4EfM3sT6hoWdtSJBkLKsDw6CNqbSM6vq7dgK",
  "key13": "4Ympvsd9L1kQUcN9kXh1SAduPom3TRuCaefcq1AiH2LnfvDm1peRFv2ZHwjU7CELG5C3t4CS8HnzuGX1ebhjZymB",
  "key14": "2AuumQi8etLUB8Zvzq4HETomhkrwC4465XqcWJSwy2xKnrpoEDzSLNfFbqdfshfKVmD7L85MKtBfGRb6RMwgiMtz",
  "key15": "8hCjPa3fXuvtXKZzu2XszvojJxm2R8YzHXEiRpVsiBK8s7HicoUFrtbcXgseT1FMcKP6RndoJZPvMTndAzhQVBj",
  "key16": "3bQokkps95mwA8JLvnCD4vd6ukmQbVGmUYwTVR7RNg1n5dLrHk818cdkpQwJTaMtTPTcmYrLPTpQery6DUscap6s",
  "key17": "65PptWfPQC473UcJDYHpQh55Dg8QyykUYpbMHNukU9F1JJxgv4q3eAPyYNhvRRCR4bqWg4XP9WqhXmQ2b7adCSCr",
  "key18": "4Km2oXN66C1ff5rmYAnMijgNMZUc2PUKqi3fYrtGJCvXxSG9FnpmXybH8ctPqNQJbW8h1zSvSbPd7RpqT6x3eUHg",
  "key19": "55B7e8M7M6VZfNL2fJmmP3Wd2fNxm128kQGawQLPGu1Ux4wAXtLFvwgCM7pT6MR1YPaBvJ9SWEX84KaECq5rti2E",
  "key20": "3pWDWm7saTmJmJmzPFbdVVxA4CtB4o16oP4as8BN4ePG6rGXXX6jLvFGmsYMUqFzSKvWhYNKJyovV79DgEvQ8dYF",
  "key21": "2Q2jQqWofeKf1Pg3RVvMuUREaz6XNfiqeTzU1yfvYYFbTTPEzTrCBKrwo9VQHoihMi9qD19R7KkS45EVfF3yngoB",
  "key22": "4siVWPyfzhShxKLt428ojcp135ArxjyBduHFy12KiPWo55qQzV3485UWTM1eCHWcTHUn4WoGwGnUKUGMxhTSj38A",
  "key23": "25pJexmKfipAmTuy4nkTDCgSpAbya52JfuVGzoZwSFCL2ohfH9iivNLwz6yFpPq1coiKtYqCTr93JFYi1Rg9QTyK",
  "key24": "3dHMJtumJT4F5AkeuKQJv9d3vNF1BU86xc41rVWDgY6tAzfX4eaaA8v6yUv8myHpYgZiYifryUJfhndhEKSt4s4a",
  "key25": "XQKjesKPtp7GDt9izkK2zkRp6o112GQzmDgEgPn4m9eiXErbw7eSUuakU7DHTPkys4sY9bbFxfDaZuX5QT9koJu",
  "key26": "4jxL8HPBjCPU1tEjVrVMNBMkfHPCa81bbCyzmLPqZLCWc2b7kvgph46AdCLpjk4NLxX91yWn6gbxXsxHrYQjWXyo",
  "key27": "FaCtJB3chu1P74A3aBtbkaXoFtLDCadyfrLd1LHJKJ1EQxXjjQA4cMtGKWdeemYdhN2wPje7DKBGHaYk3hkss8T",
  "key28": "2wNzyggp2mZh63M1YoPow9LeRu5M7DzA4UMcaCjHpnHSqHPcvUosmFvspGdMnGuzf2xsZNs395Hf3DXq8nnq5aR",
  "key29": "62wEWRJLzwNuuCvC6ytmy365PFeaFB3CTuLoDuNiRfMWJErydQdgB1qay2rRx1SP5Ush9QqBk8K39d15KsL6hMcV",
  "key30": "53xcADgo5mXWRgn19WXKLsn9NNYTmKroCKQcHarkjTFHbK56pPjzdrSd96rHJX3RDmrJhAq25zKZQoaf1MBSoXQA",
  "key31": "2F78gg5YKaoCNu5KyHMR8ae6Tk7EBfuwBw9rsrruu3xqccGfLwouJfjyLKmvPf4ra4C6VsN82biHFFB3bSbZrHZH",
  "key32": "4FE8UFh7ntTWvyLuMGCJ9K7Tit4SVGZbrjE6KDYCryXfDufKvfz4D8jvuqRjJwxQeYHuaP9cDcKiSsK612Hz5AUp",
  "key33": "CmKJPD3wyeTHDLqWE6A3SQtJF7LZxvRCSvT84aHps2fWuv7yixNCnRcBhfUZEs4VNQ1aHDUc4NdgdHQw952fEdM",
  "key34": "5Cxnoz1dTivHrRitUR7sw9HkBAHPZwwBwf2MKsaLQPCTFHH3Y8ce3ZBNk7ZUh65cp1SYfKdFcoR2YaagsH7wbVgG",
  "key35": "2gbFw3pEMF3Hf2GGUXATheRJNwEuPNv2jnmvook1XMoeYwhUXT56UCvBRKMSyNCRNrDBwyftQYFSCSB4AG2PtxRb",
  "key36": "3tG6Nx5dHQhvN7ifwU7QYbHLEPrkgMdbvKztrKxbVPymZJYhKcT3zhBkYycojMJvf43jPMSd1bgvxruFXoM9PBGd",
  "key37": "kwSUFp5hGB91GAwwkNL6Wt8JoABQevWjEqhoc5mWZcBBAT71CgJoECBtuQsTcVwist5ceDnZJpQrwG8bgXwonSF"
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
