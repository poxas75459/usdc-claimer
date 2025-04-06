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
    "4wzVrhXzdFMoihVgL7XfjzhPjyyWgRWgKK6Rfh3dz9GueN5NL6PDZomAisk6UVgCsUri3Q5YfDasjJAgcGVSpLEr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tFL3BrnFHFNFW6T2wmghtV758V3zris3iXLPBzGcJNDGDXAkQoRPKaWLLusWGwUpTkMxt4umdj1yTR5A6Nqs2BV",
  "key1": "4cXBESAwTA2vDAZRgNERELJefnyeqv12Ho1kxkbNm312AJ5xW4tw6BR5SJKz4B7zEQ42VmBq8xd5dufzDGJNPsRf",
  "key2": "5jP4PQmzdqAQ4Jztn7LCyqqsvxmt89nsURwHuopYJdQHuV3cA8j8CstsGxmV8DQJmUtTLXmvkvaJ35uSuStmeGez",
  "key3": "7tC1nJtBM3FyiG5qbsofuBB3M9TMd5SB6fSnvd44kCT4UB9HPdYybMtnx2w17dfFVWPhu5mDm5Y7gkbqXU8nYGo",
  "key4": "36UyLZhHDE7DN6MC1WngsFWvaY8nYit2bMPX8F2kc3mxEaPzN8REiVYG4Ttct9kNFuq34WuboA12KeMnN6tCUJer",
  "key5": "2hTTiHsQayjY5RbVbRFNzCxMwMEYZaxpsBf5UagGvZdYUfP69Wfrcmqoezrd8TFibyChi4Wx46cjfg9SgGaeX7J2",
  "key6": "2jHnxrCXicRsj7csBdrAevF79yxY3e9UqvcPf5kvzT3oJoSdkPBpKcEoaQXqVHqT1dRpiVWuX822uuH5AxAXMY2G",
  "key7": "51KbNbTydYhL7YynLBU3TqSS54DCQ6M1Ci7pswjNfEZ7Fm4PLyczMamuB2r8SgV89LBpeHA2SA7aEW3CMeGkE5Q7",
  "key8": "23iz31FJXZY3T2vQ25nUL5KUqZfr7UswJcacPuAoTk1Khc5YrRxiBQ9gPpxVqjXfuVWyBwBoMJ2815DsSRuakoC3",
  "key9": "2mRxP1QExH6NyqXjTT24u39iWt5RAu4HDqTXvhAX2ffvRCRKXLKAFhZGBpJxHhWKbiKWYDGQkM5zSbfCqymRkZzV",
  "key10": "2TK2d2DZjBMCQPZacwn9mfXdfnNGHTGWLRgLhsiST3HorrtewtME5ayWqwrKHUhWo8NnkpJMWRrYuAUmnp8HL6Po",
  "key11": "5FnCxXNKtaKvddLXFRjwvojM6ZTxeJVCe6Q9FqhZVt6kU6Kttzqb7uFST952jGBejnWrzix8jHkkitPxBguBbTK2",
  "key12": "4upapXFBcL5Jxdcefjb11MHidt2EFMFTNUqERQAq5NHPayv34f8EXYdoYJFaC2zjvg8XKDctY9GB9fLDDRfnLPHW",
  "key13": "5EqCFcpPeaQ9ig3naJWf3Trp3gJSkhS5dXzsUnFr6Seuso4S6UsXDyhWqX1tWhmAFSoyhAUJvjGctXjWJ7MwaLh3",
  "key14": "4h6WMjUaZUawz5EcEk4NJgszqrPLCnG3JxCBSwMCp8ZRhg2vvgdLqqJcAyHuafHVPznET7Fs4PDdGozVYEdFtVwS",
  "key15": "4SCZ55fJSDHQJyMr3oZqqfzacCzT59wEc32wcKtr3LBxtQopgAXBonAfxgoKJJELdayHGMLFff11wE5nhaS2GhRr",
  "key16": "vzkdVCPZHNLPdFhya3JyaCmnxnBaSGmYnUqjoWrQPkSGLtQ5ucYzyXYF7JfF3kGGGp51WrqZnV2HwMPGM97nMFr",
  "key17": "2CyqVnkdFRYkgjChM1kMkRSgDi17fJJnuJShVnMQd45S7iPAnWeAtjCDhRUr7qNu8GrHGPNvf7ZdecRvKRP8dLVa",
  "key18": "4un4fQfB2KZbVN44N91GQd978Gq6xc7RB3bgCwchrALU1sAqCtimLLkQdgQf6afpCZSQtiCDhszCJCrsyEyqBknJ",
  "key19": "5BRrFx5rgcE1snY9CeQHSVtJZjD1CFu1PToGWfBM9DdGdmXW2cPr8ZLUUXoJ8ebSXJomFU5uJnUWkx36QnK3nRjG",
  "key20": "3gssyeNgY6iDaQyLVzxspHo5gprKfpCr9DY4FyKS8kp8jMpKLhEYe6FxvGNtVjJ1mXZn9zuVvPyshVbMfC7seZJS",
  "key21": "4DBuQem9D4S1hiJNXrVq7p2sNeCSDa8nc77TkZ2mFdhGLbfNvU9gsbsGZv1qUAECRHzGCaVyCRE8hNYmWrQYbSXw",
  "key22": "ud8s6d43UXdWvwYSXgiAKDZXR1fP68HL59ScDyDe1TDPgCYXCdAugxVuEZEQcDyFCn7spPpe9dMEc1zh7TT4C2T",
  "key23": "3Q71dYsHEZ1p1AfKbZJ3BH8Vw6kESdR3Z1VfStdqJdXqL92ooUa8GcexpF38mw4xRkYxL3zzLa8K3e76knnZTpAc",
  "key24": "3MkLPdGLTbT3VWb8b4e18mMsDCxqN1qkBuqpvBeBGQg8QU2NmrkFt9pvjNPNRctfSpaeM6uYC7seqVcfGpqLt2hQ",
  "key25": "gKU4eU6dteNPjDQSHwMxP1scR88gAt7oH1PHmdkccnVut8fH4LnGAvh7CP2VjQ4Wzp8Zek9ZLZhPv36akY2hrkw",
  "key26": "4dnwCNAsfT8ri11Ws8VFrxXjug1XCihE7ED6qhspghdx7JU99N1zSe6JSnRXnmX77TCC8DptBSffaCAKrXksy9fJ",
  "key27": "4ZjzWQ3iwY1gDzEv3bbqPbn3FMHpAbWdoHv9mpu3YtYc47HmPZdHqxn2tWGPP26xtJRaLM16czmcvdvPz8dsqGUm",
  "key28": "2BsDb2dtRreGg6FnprMASmMCuMP9ajCtTB8gwac6Mfb1kinnec5UqyBkkEqqL35D3X2vfmRtaFxscjCu8FckD8AQ",
  "key29": "3hURcoh1SRV5qjNPVJjvmM36EDJeLx4FrSd2vqD1fTGxLBLu5xQVW6rdoS4hgfBitnZNKiSsF5AGr2t8tGWUf1KZ"
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
