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
    "4YEXTr6BcF5Fk5BDHxecxMNMsWXXdik1bNkFi1YS1DVNr1LhtjoiAVD9NfLxWZhDua4Y53jsAVCqj2H5kheDq2PJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55mhbHk2eMck2BC7uVWjr8KCLWGmw6rr6RhAs4DjGazy5X1bi2vftRuu1gU6PK3swi6AkUTgyHBdCV6iPHZqSnuB",
  "key1": "2mUrfXGp2kJCJik7r2ZRL4W72G49Czzc2qf7AWkCkffoH6r3XPFBRbpnNjiGgr3uWxf7E3BpmzwBh67j8Mh1z9cG",
  "key2": "24PidZELXyByoQyLV4dJ3WRRir7oE9SEeN44cXFddKbJHZa9i4HCSLLvZ34ZdARkprzzepxLzttnJ7Ln9bVyoGf7",
  "key3": "4YxWUWW9fLYz2rNFHttyJ7ujLPq3zcpuD1pYGy2RBqxmkE7w1sNzJWyh4c4CEes2vcXhEXBsBuRVibPZD5X5ws9b",
  "key4": "3KTGWioXGFjurBVP4wJVvoTvJx2ymYPWKsymEUXsY3L8wt2h6QE2M53VJBRayGPnL92Tsnogn8BKXrh7JXpD18cG",
  "key5": "5zqMM2vHkXgQuZuyLzxVQDPxJ2o1cKF5ZLyHV1GuQvxKjaHxQeMEj6iZDu2mvNjfFGQC3zA7UugecZ7hKzgr2qr",
  "key6": "2eNFCjxBfTTKYQFMr1yFApT9yCUMceyurXv9MJFdwBeaPtmvBtk9TAPZZBjaBcuwVXtzyeapxu4otRFUNpcCTKwZ",
  "key7": "5NKJhZwtnYPuG2apzocBRxZwUu836LoByXfbBC361EZaiLveEfAVgYgDPoUrn3nc3c3xFNsBFYF99LpQbwj2tpbS",
  "key8": "4h6iCVSfdrbYTfQK9TgZbW4yx6TszPYjwUQEWitwGWNR1LuBrkkEuXGhRAWm32TXBpYhVAKoheLeCrzfkCtpSL9J",
  "key9": "oZ4w3iegiaaG2oNtWAmDeRiJemozPU9Yai7QNCbZXS6aBBitnc11MJNu5xPXUSEV6GUCCxA63AGSASRJgHFiHo4",
  "key10": "2ePVydJEsT9tkFotYHfyUA9UR27Q91TaivkWNk2xYoQfb3Nw6Hyy3EaN7msZF8cw7Hzf66jpaYr6G7rcHXxWAtE1",
  "key11": "4YuN8fQKyURb8RJ4c6eTby7Y6KwfpVbrwqhbNQtAshfdX5SVUarXoT3Uf3mkW1eEDb9BnWWtyGpC18BhZGkwuAa7",
  "key12": "4VJDu42yUndbj6XPAuFxiq3rvY1wJDC7a5Hp2jAtMcPNxNEezhE6bhvDScJXkMPSqaS1y9BxQkwHPB26AtVUiunM",
  "key13": "25o99e7RarSPZ2AMMm87GxdXZWhxFyvbg5jEZPSM9Gx8ajpkGxYdC38qNKyTuEUSoX9vZYzPsF1ZCbqq5HnDaNeE",
  "key14": "5nMVCQw4LmUt32RYxXL4aZttYhuP62vZbJbSL258SAoxuGCVZeeTAKZprN1JRnkiPPLZAvK4sG4SQRCswQrvmSh3",
  "key15": "2hguX9kg1e2dS8mGvzZXUKekcNgWH7YxmmBJBBiVHQXzLa6jDPunZfvT9gkHoDkwuvpPPHRYnEw2maV6zyYMiDNF",
  "key16": "43FMMv1Q9ybDNZdd1pZhnqHRYaAN2HD4VFCsL46PUFCSpNkcCaGDR3RJoZNkqrCmCUTTxRxkeKXPVd12NUdjqoje",
  "key17": "4ysYHuKmVoVgGuRn4tjc5fBopDmZs26yGJumCdP2HCnQiYKu1CZPvJzekBuFddDUcT28UKFXnTkxLEJnZbNxYGqr",
  "key18": "4hS87Sq3A3VSWggpK9RvzzU8K9YSnz1jyPH3vNuJYirvGx5zRjNuBJnStL1KdS6fFyJ2xGMzbw58PJzSPiAtNanm",
  "key19": "3rvCcqWNC2QLrfzvZqGDkSxtb8Y479voGiu5aEgRwJDf4Nme4WzrcFmQBxFzZVsfoWF1DB23JXRFuVLzZtu1BWg",
  "key20": "4C6iMirwWSbd8VUddC8dMvYKuDb3ZgyNccGEQJhQL1oCJD6CwWfketMm4MdWgWASTx41QFHCF2ZVTjy4CyPoXbzT",
  "key21": "4tD33evgkJUUqUdkZdoxh5fC78gq2SBBaqLXENeehhV6ecz8jSqb7zfBzKsDgUgXtqBbZh3zWH1PD9p3nJvsuxMp",
  "key22": "ZUj6x7YJzbtkqCeDdn3e3vAkJxaz8eqe2GbynWuSDuhk1uDLRRCE1SRC7hspRLnQkUy7RT8VHF8ufqQsXXsZKnf",
  "key23": "4JMctfgkShwwFKYVjL7yhFs58dF2Yy4WSr6tjpsBnyCnH6dR9kKSesf1aVTusn5ZjbjRaiF8riyQ1Pbb6EqqKvzD",
  "key24": "2YQCPxU1mWuApc2ufuvvrrthoYvPK919HepzU8Ypc4EiEQMp7nb9FQjhUJtSSGwLHiMCDHnq8FEPQkh2zCef4tEF",
  "key25": "2PASmbcEWrWFiU7EY2qtvAAhYDpY8v64t848vM262gvZERP7ffYTHsHMfRYcL8WuCUKWGfugjM8FhpWKaJESAXKB"
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
