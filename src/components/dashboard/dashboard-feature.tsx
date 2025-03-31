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
    "PVfWt9J4GEQbK8DvPyKPdhZswtNQiEM8gX5VFXrQVovpnNoxF5kMrbm1DkaM21dVPgoriDztXyJnsVvLD11PJ5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qXprMJMRXfk1HiM28GweUh6rvCRJ3bQ28ZSvMxiPRvsuPzQtKeF6uHv5vpZBjngicxjsaNy6XDUbxvAQWBQLswz",
  "key1": "3rrQHxq8CMMNKnMkm4oDB541ENZb7WHP1mqThoQV9JnTqNpyAXPAv2fSPWfyheQpx47G7xkw6u1ZAQkZn43EDUV5",
  "key2": "7vBuLTcnbL9gojkw34odLkBx8kwirBJYvALXUJwC7D1JD7izRfbmhtPxqo5y8c5p4VfnRy1Tpy5NBkLPzCEDVh9",
  "key3": "Dvznk5SM1dicseVN9wKfNbi5RepHRgKXooT3fXmNmdCiKv3PxnLFBp2ZwCDqY1i5xJPbju8cEnTwb4L1xRgDYAg",
  "key4": "2thcFq687FevVHHUnvvxR5hitRx3x8mcQa2eE9Go32zMQH4LwQCLwWyYtTUojbTRvuNeRFukmJ1dmSUAbFAZsKVB",
  "key5": "4pVao4RSZGgg3VpXEK5BPW2JAEwmZYnm8nBZh3WF2QP9oH8sL8WR1JnS5bi3Eg6C3ukd76SkUpGEFP2Hdc3KDiEy",
  "key6": "51phWSuvTLvz588A627qi6Faum4Y7PteCsFdXVJCUxoPX51NwraSE1qt4cRVRZzdmrW2cwsmdBwaaPZz3oV7HYze",
  "key7": "4DjXqo3vVLubaFZ1UYebVUC9yydL2FYt1HoezgU8QM3dvnAYFHQ77CJJzYt74ujYR1VmAe2ZCf63vpCTmgmv6YZ3",
  "key8": "4zz4FSfFA1Xpo3uaxF7TvnwUuoEmsxVzNbXxLPLv3ELFeC8x8wkw7jjnw2m7bR4Hcye51f8wSMbmHY12yNb2bVqP",
  "key9": "Yr6rcFLtG99c23HW9zvwQsGeXprPpNoMCRE5yDfHFpBxF5v2kL2sTSNQEVfR5EtFbLvDBKoRjmzCXyfHaStrm7b",
  "key10": "3aCWpQcHfrjWN2VQE7X6khBtx6hhFc3EuasgB1diiLi9wSbrTLWUqvZbWZPG95mRZ5BwakPrbboLjZM5dezku9n8",
  "key11": "5QY61Cg7d2nDhGipqVpvcnysC98ojmE2x8gvAryWuxRLX5bsrZCDtKBWtdoQafd9yYQMb9mBg9SR4N3YPbYM9Sq3",
  "key12": "4aBYd8pTyMdMAPY7XzcnaZFNchpXbLAZqPinU1eH4VyduZtB27kAFobuXw2tcQpPbn7FeZR5aXnWQCncxWZbF2S4",
  "key13": "2YZN4fawSc8ZR8LcVAhTiRzwGCvLfGvoCvUXRngi5GbXpGjgAwoLFnSZREfkeQBbyatTw9MXTuZ6DKp8CcDHaeSG",
  "key14": "5WM9oURe8fH6mZijwq6ctzhfFBUPQBx6nULUEzdXGFjuGPHNcThaajrwAx1Rq47NhpTswaevExndNt2BESCVHu3D",
  "key15": "3DKamxefsQnHhB26wNfEf5TS9HSDMafAA2XJQ6RVbcpnwuoof7fNGVGjaL8kXKDDgPRVekXMm4etdeD5ZbfcZ2WQ",
  "key16": "3zWHvSqEj1QpGYLXhSCjezfRtqxmhckDAhhma5YxTgGzEjbwH7tbkuNFjqrDwMLtEfDw1uVfjZn9ACknKGA7QAFB",
  "key17": "4m71eUyj2KgPC4GJ2hMC99eCQ8NEPVzP63VkfZ8mqNGzxBrTYDtHAG69exifsPAznWFrhcSy33LNyBLJ4zGDdDzm",
  "key18": "HK8xqCYwXnAnYs8gwxJ8mgnk1xtbYC8zSb5qzFHtqdBfv6j9NZsjLmHVVFDTJCQ5fjFnDDHHE1GRPnh71T2Nm6z",
  "key19": "fSwU6NTpFveKv4Z3wCyEM1s12a3Mze6dgyA2PjfUjowsSTVxz518hHG7zoBfr2Dej7YEoHyUH3vQjYHUpaJZJ8P",
  "key20": "KZg2qDN9R6LxP674ScwApUbDGJkkQkXjm2sKhwZiaTbaQryXhErTt1qXSiG9dtEJVLLEE1MyLMVZ4k3gatBdyC5",
  "key21": "5VCWp2zybpGSm8gky2UyYc2iriRMmQe8VWcmB41KH42AyGxVfjhubbvokzwSGLgtRwFk7yg6hVsdWpAy8sxhMMQC",
  "key22": "4L2k5D7U7CpnYdXxX9uimmFdCYA63JP1pMX1f6K5jHV8LNy5G4LAefGRVjtBy8AEVVVwimYyLUxxt64iXmpqiszj",
  "key23": "5Z961tvgD9sjZYLUvUWbqkE9CdmFAXoynM6GrFwFdWUgTcnZcJZe5awvqXsfS9Mg5k1foyKMT7cj9AH93JofXCfA",
  "key24": "4V2wVEhoH7AxtvuERu28mW2BCpPL4G1183tTTZZFvqnQ8RLgcDcavE5Uor1y8jue5k6bHW3UdpyZJDRYbhiwrgUH"
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
