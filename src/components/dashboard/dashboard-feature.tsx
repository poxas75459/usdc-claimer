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
    "PzvUwXBfi1HRGFsKFbkQcPwqcLt4QCAe5vzXF22RcpUV4R5pYiF1Kd8LvAQeewvKxpRQV3zgqc2ZKsLoAvuT2a5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bJonJtDkuWocnGf15BgXcyeAZUAk3i2j9hfBce81MVb9TDZSJqfXr8er3SVDnMCsB7GqGghfTS2XbaXxyCUXquW",
  "key1": "678LfdXb4XBCxs8WYqHBNmXaNiit6UbHz3rLdVFpxrVkbuFyXEGPrUez6Awsrs445AcS2dJxwv4SBMoyUAmJ5Y4E",
  "key2": "4cgwRmr37iQipUXaouXg1sWc4KZTjwdEPfNHddcCakUK7vzJSNds7rwjxjSeSWZAhBQMqcK5pyJhiFAfG4xP1B6W",
  "key3": "Jt6gEbzkABiyu1123TLaq6ygQj5HY1r3z3F5dbSbgMH8N1PLuaqx1189Lx96xVvSHu1D3YNrXyGk2xriVrxC7oh",
  "key4": "5fwQRKpgzD7XrbvbowDkdnnoDGViv2hguohDjLhmTWHLDSf9cLAsEvhZzVQfeZEWNRiRV1t5GmQXTTaCiXX3ZCC8",
  "key5": "5UY1tSVbUy2puBAsDvnF8BZrPYGGnidCW2waboABgLX7XECF7WAE5HPJyRsdzbP1Dhjx3U5nvxDKiNjTeAWCv6iv",
  "key6": "q2CvBkeoNKhANXetwa1UE4CXe2U9FvS4XXexbhHzfVwKUL7DrDWSenud3aDn4zMUFvPxoy3F7RitkFUxWKL4Lam",
  "key7": "632yLHUEJbUMnAEyskjC6ouH7c3PKYKvMThHGFN1LCVQc5ux77zJhNQqUu67VrNdA1sCbpGvsbxgrkRsKjPzFyv6",
  "key8": "4SGe9JGe46hD8ZqbAewdHTyDsKZktcfDL4gL75mTos3tPGqrhYS7VTm1dXtunE9XCbm21ofN34oPhh5XejurBDXM",
  "key9": "eCBYmzzHtCNcLfZd7JhQs4ih1VGqVgKDmwG14t1EVZfE6oroF3XTSXjsMfasXku7fAxqm2d9TWa6hznxhnTdzb7",
  "key10": "4xYhzUZBGCymtViLUwfNqxi8dBfHVyiwLNRhbatNmnW7eW75dRsuH5n3Z29NS27sgHgoXNgRK7pt4HoQsvQHi59W",
  "key11": "TL2Va47iDF9qvC2CDxrezJdtp7hpzZqcGciwSdHyMfwZX82adeQYPqMSuHstPuXWk7WYui9qyMZ9Tj8rj6BK3Q7",
  "key12": "Dn7UE9t5TdsjMSH9wiGg469ZvkZVz25qsBV9z5YSFo8wNmyW9MFAQoSeQdckvo7cfrKWtvHWZhPydnFaALVSGCC",
  "key13": "4TwyV8LKNxSLN3B6RqjTjeEJrEYAxgbHE2f9GB8v8Y69u1KivoUSPicu9gu8Q5Z6XQSNa6KYtN6D2gJoRttQxBkH",
  "key14": "2kuivLqHfgBoBmVL7MGNPhUJbBmSFDAxq7x9yf6qBLVsWBWxJDsup4EPjN1MNPEjcbrvK3W7sRhsQB5MQj2V6ixM",
  "key15": "2wNxjNfUzW9VDMSrVko3XJGJPYRoumpLDSjfCmbu1dkcGVwKdchNV7L2tdDNWa8EWQxLWe8yZPHpZEJyuxy6RhZy",
  "key16": "45LhP34uHWhjko9t7hNoZrGp8RGwKPKBuKLbPPsqWmWM7SFXHXLooJ2Ddr5bPkbLQvNNLcNg2a4E6AJMzxXZzM8K",
  "key17": "GRX9L7cMoeKe8MMDqN6dDcziC7LJgP4gr1DUwxkNy1WyRM3ChFMMwG9CvxLcKuCasSPserRzh7TpmDN7FqHnPrw",
  "key18": "5rsiMnEhSjsh5o92XceX1WzSv2Guyk3AkQWmTpTBRZ5Bb8qe1kF2cmXJRHo6PWc5aUQNbF89RDm2Y5uxXdZBF1hT",
  "key19": "3Sw3FQcAEq4pUw5ZRVejmMTUZT9wJxN5NjqhvaSkMy6fToRzoxargbwdMKeQ23JYdBpdUZ3vuRDFKhtGmMBy6mNo",
  "key20": "2DbCJdjcyrGo5h4H6myPSBdbatDfFfBKuTvoNtNyfKQWyvVZ3W6po1GGkajBQMJZEfsDfeqpSmYLA5T2KGCMbWCK",
  "key21": "EoiR1F7gSEEDmZqBFAh6nY1gMDsFgg5EhSVAD78xspd2NpaGf9KSzxuUhY2CWi8CaApiN6pCyVLAZkCJDKvAZaK",
  "key22": "2BAGWE1D53qwQWehDbUagtH5j5tPQLAMtXs6ybgKc2MU3H65tVzZukyoKPptumwKp3KmCkj5tcz7ZGSyxqZLXQ5q",
  "key23": "5pUPQL7P9VRWwS6pJetSAdGXNAeoLDYRKpwRYVmESmpnjJ4UzHGwz4SeYGVt5MPnepd48XnneZfLE4EL3SkS193J",
  "key24": "2jvbx71BYQuJzU8a2Kr4xgMjNsbtM2sZscUMadV7kvGskrxhzEbLdz4qPRMhfy4UKWkzL4orKgC8p7q1Adzseexp",
  "key25": "5fmbh3mfsWuuPz2T6TNTswxVabTwD69uh9uh5zYexCTmcHUPsR9jcoxYjjTFawdztxQKVSdgwGB2Ut6tHHSsq9es"
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
