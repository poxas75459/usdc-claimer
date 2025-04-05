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
    "52Gsg4Tog4sUVsebtTLCbv4vs3qehdRJX9WeZrWA97zm9oJqJbznq7JiZsATT9B7E1rZEHJioWBkjp3utkwb1Qu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MZyuVv22TGfPwCKcAvzH9u4ZhwjTjoRpvirz2wL3ZJLxVoyM6jsp8qM3ZXkyLEiQ9YdArJLVkK93iiybBvt2dbE",
  "key1": "57FLdiqJwDvaWTmhc2YVhh4Tz6w4vRVrBhzuCvUS5MP7MrxknQmnggwAJkSirP5fT8iRyQ1o99rdpp2A5atKSx5c",
  "key2": "3bjtaBhxxJMgRLq5Thu49Joah5RBDqB81XVqFEAvbgxLxVPrkNabgiasNzMkDnw3u5ZTC5ixPqQbetycnceXGWf1",
  "key3": "wvJiLahwcwQjSNt2mp55Au9UETBk3q7SLeR7sCFNetNoKbqMZzfhA1UDEYm2fH5HpGfmsxRS7mBHFdDaKDx8R5t",
  "key4": "vksahMCsqcYtYj3Hfv5LYbvgt15oJr7JxGGuZnZP3S84ktXdh69upmBF9B2EYE2TVyBjtPXon6uhTE9wr8XPpS6",
  "key5": "3YRKnz9uotg262kpqSezkzxcsKFDHaPGJCVchM9uBvyBt6VpbKE4WksbpjqPD667ZTes2TRjeEL6ZssRZfMoot9A",
  "key6": "3DhwMATj37Gf8jaxxdbLkv8S2p2ADm6hPKE7nRupMQkCZbmQ6Yj6AGG1tfHrFTwAS2NrTvWMcdeNXhBNphkXLqt8",
  "key7": "67CBW7dNc4UAn6LAMbrmeWzJXSu13x7k3fcsD4k9WXEmoWC9mCrFUmZ1GKbqf2jKR3eAG3JEZBpR8mzu7CjMtr8A",
  "key8": "3XMyAszYhwQQyPefWvvKEARKidkrD6XqgYngyTVvuHrqXkzCD11PWUJGumG2RT27DiKu8B7nyRC8PYm7zLB1JBDk",
  "key9": "589WVNCbTvY1gW2iV2H33h25V4aNRWFBGK3p6f6Zshg3q4zwKZaQZzGaN35Zwk2quJbKiRYtwF7D5qQyV91Datpr",
  "key10": "59jGAtYhWqoFxZLtLEJyHdvLfHsLqD4eCsMZfCdeFrb7L2kGG4zNQx9ono4FANgZGHNbcmPCXbfHYdxXot23A7i6",
  "key11": "4BcUzCYYPwA7zhNyQUBrSNw9dvJrt3KeGQpwAB5TtsfDjwuxGtZcbxaL13Czr7RnzVUETTAx1Pfkhe61jwJPeogA",
  "key12": "4hXDe5rzDojr79oZgtY2uGBVcMGDFw6jmafhMZjKMSavDzFv1MBfKkBRpHkmHrXyr4C4DWmRLUz9y99SVHDCVrSa",
  "key13": "LejQMBUGp1u8fhaVrccCairkgrXNcXkkgdcoUUPvoGKeiDAkP1EDLjVmcm9tccmQGFiuwQ7KKSxhrjrHyrusf31",
  "key14": "53XJNybavqPBUb9CLbwmA4UaeZrgCMoNVutVRWLbiHjVLD3jK8mjjnzqM2jQsymuekfidpdsRMRHaymwBNA2t6ge",
  "key15": "5VJpscaUiWbdNZiSQ1VDuRRNKbFxm24C6TqzLnG1KrmW1kxCycs2ZZfcRnafmjncSaKNqxa8HkQ9bqmtebUVWTFM",
  "key16": "EJ3suF1YYo8dWKcT2jsNe6xwo1QSq11o5JdkFyZ5iqcnC3hjj4SZFnn4BsLUu86ntPd9yEWw96NJpuT3HB2hyBH",
  "key17": "Fbxjn9vQEm5zWXZBGzMVqDsdsEE4DW1yMihgXgwUYhPLKi7Nwtde8zmE4k6YGbDdWs8HyjoM8UpZycVt7MbLLE8",
  "key18": "2utQMLYi4LdJTu36ZWv3aCAaRKww1LAqEe9qYqBC4TonB2hdixr8o5zFekSiMTyjR6etgcLGkTWbsdUfqR716ifH",
  "key19": "2eG3GoChpy1KE5SabWjjxN16KFSRJP7a7r4ssZuUED3RLn2LPgXqreCikBYEe5ATWV16M7u4jP3PVvKY4efnGRbA",
  "key20": "3XFhsJ3PTrGAJPepu3QU2Kv9LnC9ZbG1Wj66Z4t3e1toyESoZFmU5NCMfaLGrY4YJV8xnsvYabdt1jeXGfxuKoey",
  "key21": "9tyN1sfuDZm1uvGjc1UWFtgER7vbhHEcMR4mPLByFKfQF7ac91JDEpXfiWpr3ejZLS9ngLeMk846LArGcEW3ReT",
  "key22": "pz3CxyenX2gXUHwXcap1Za3esv8eakMJ2hQEpDJC1T7M76oxVxrFTsbrKftj6DB4S8HfrAzS31zTQ1s5fLHL1xH",
  "key23": "4VVV2PrRF6QTDQGzgVhtGE1o3iHLx3QKknWejBZ7ABXU1PFnYyppT3qUn4jfWZoSgrSeSe8KxdLrtj84p47croHX",
  "key24": "NRdUwYBXoAkvZ9a9Mfjfk76FtvtYEVLy7JUFYHiXV23jvYk5wzvamv4Vtmcuk8NswsBnCbiFQKJkSerMqThTMiE",
  "key25": "3sKzW4XjAg1wNVjA8FG4Di7kmvHS9KYkGN7RbwsAqtCR371xXdr3AFqDywXp6zudeXaghkGUqCe7qxX25EG8kk2P",
  "key26": "hcnSJMbE7pEUwdEMiUsasxLq9mEQVG3k9Ps3STsRwxHcXSgQUt7azpuoY9LCu7WszvxFQFPCX68JHQAA2NNJCRB",
  "key27": "4ayUtHkLiJws1pi9TvyX1YxyqSpo4Cn2JNuJuqXqVZC6C6WA8Hq3LerQwkF4v6QRUSeTC6YTRnombuZQTFKXs6L5"
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
