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
    "5wjDzobnoYbx5NqmVoHK5wELvWARqnoCHSgTioKKdqZF9LhKLwTnciq6WLF1MK9eKVTaiuQxfeBkrVoc1QK4LKj3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5esq5oYikSy2eFHDvZFZpUesWLFt1Vr3YN9X6YJzFTDhWy7H3aaz2dHfMa55d4CkBQkmNBYnLj1d4Gdke4QykUtE",
  "key1": "2v7rpg6cD2gqFAxzuYdsCSguBaACEbN6fSxM8P7yVZDLVyHXMUJnuqZ8w54vxFgdg9GVkFzVdidu5Es7rX4Jv4DN",
  "key2": "3uwYBd4dGH2sPv1LXgEDHMCeq1FDBhi2YVTFzRGh7jsiyH1UfiQQgKqjNXgPc4rmnETCBWS1Tm18BxiehnzRGcRz",
  "key3": "4ryQmEU7kXufVh6kmHFUfuswASXPVKuqXC7UcmzA4iHS8sQ8Dbre24QJSFwzkWBXse7upyx1FDm6LPANYcbEpd5D",
  "key4": "u4Dzp6VeagjZCXtyqL9GJB7ANyJTRdZC7rFPXcN6dasWFMeLQ9qR4hene82JTpfipAKWTdM4wDRfS1mY5BqEqrZ",
  "key5": "4EAL3YFbd2zsYodvh4msic515BKhUuGdgiTdrK1u8HsuNVcnX9FPM6TwBx88jxWXE3HkQDYJPq8YBXmWh7zV3pGH",
  "key6": "2j26Pkq8MVPiTrfh7Yi75L7oSHFQTVJQeCDBHZs7WJdDK2EPR7rr9Ym1ufNCZQDkwU8paiKNFDk4dSmwvw3jHUW",
  "key7": "2MkyhH4TnqmBMeRwBHJhxKHpdQvyG9GLMTmziwSepMtbghgimm7V4JEw2XEfT24mzgs22GKeTkN7eTvFJVfM4zzE",
  "key8": "2pjFTQCESvYCqusytj5Y22mEmcKMzGGTiZdSLCENDqRRJHkaffvFX5Ed8U6EK4FQ1m2ApSsakFt7cndmwWB3biXA",
  "key9": "5x6dnvH2makDi3ihZX1u4m8mxXgRa9m4nETaWRnZuNRTdWFLEBHb6T9kJVsLq8gpw6Rrd6WmTfPC383YUnCEAnA8",
  "key10": "4iyiPB9nKj7iwZZRix5512x9YAVEam47z8dD2bGohcHCiu5QQgd8jYMfxasFk3U9DbHE4cMJ8tTseyQ8GzakVSmj",
  "key11": "4sGY6HrVLxs7jGuN67H1DS7s6EUqEWhtxXXieCqoKCHGsWikhCSCQH6zjFzJnAR4zELmeLtN3mf8aFnJN4VZN4Ho",
  "key12": "4bdp89myLNrMWk8Es7Pkc7hLZYL52y6TZcD5JMnyiYcVBXvkcCQ8mZTDATXj4onVsu4MyMmWSFb1fxfts2N3nQxD",
  "key13": "2q8nD6jy2PcXLYsFmXgMgcP1xQA3rVCxGNEqJ4mDygAR9rnYcQTG5Y7huRFPa9uLKoYCzTYHj91LHLY4Ttwzw7jE",
  "key14": "4yfxdJeEzHbjttCTQoM7RH3URGb3X6VH1VPF6GtKdqqXXDUeD1WAa9zvecpauHawiEfKjKvFvBtoRFZGkgJYgZ6h",
  "key15": "3zai2FwSa4zi4TeuBpXNXoQPSGPtKEpjZfMeTGeXwBi6CdAZRkQ9efLTUT4HKe935WRrY4hU2BXu6x9DxsQQcLBC",
  "key16": "5nGjx449BmmPvGMNPDMGkXQnKDWCjcLgurLScZSyU8Xxi5W4SPAcGeqSWrAfpCNeKweGNg6dfhhSBy76fjcLhZWk",
  "key17": "4yY1yxQDC2ucGb36Wgm84s1xkr6SaVg1fbjWJRwkRq9NSLeqyfdyp5YvAiDKYPcLp7fvWip93qhSHjgyz73RRtfP",
  "key18": "2FAoB1u9iEFBEvHnA7Pju2b1P6vhGxSR5zNGoQ7oUU1R7JUn73wt7aGZhZGjVSsVeCyezcYa22JCuF9bvA9oxqzs",
  "key19": "2NHHM9ubT1d8Z5SjqhdTyQ74FoqarBN9aGVxe8S77tCcBRPHhpELF8AmX8byZEUwN3XJM9HHKLZcogEa4LQwZmmq",
  "key20": "5kCro3fhsnRXtFLMagFYpf27jeyAcQt9njvDHQ3fUy7qTdQaj22TX54mPoxXBCNS68NKrjKBExvdKHieFgQBL8kd",
  "key21": "3xY9ahGi98TQQSxB8yZyKXoWzBnk7jSMZE7h1dRGdVxfyAGyJWWkiysiBht3wcfg6CgDsVLzhHooWoUieVRsEYCD",
  "key22": "4fMirLe4PHRVBsuonzjDcVggCH1Kx2o98W39u5jVu5FseQSGRmFryFWmqBTV9XEcfoKs2BEm6ivdsR63kQDL1Qjt",
  "key23": "3gbbMwadKnnr33rELapsKfiUs6bBYfxZJaT822HX63BNKQk6pahUwo22nQx2DYZRZvUWhwRiMn8Fz8JVa2eg7Rnm",
  "key24": "3dYtu38cphEBEAiVFvtY4GHNp6Jj2ycL5xh6e5BRvvJPXEd8Z4WEWfHm1oN2pP2bycsESdEh1V9F46pgZqfYrpQV",
  "key25": "2SABcrdMu2JLuaf8Wi4o6JGDCHdWdU2Y6tiufPPpUvig7ZnPUfeKsvPhNf3BQkSGtQ5UtN8KKBKcnzKYe4hPNbcW",
  "key26": "4iaNv1FQh7r3furWv98KDzr85qSXC6Rfa9Vq4kUvs9Uv2jpTVNoxJzVKSN9VFhqTo3cb7LsSxXrbTgUPfuub9qi",
  "key27": "qLg6ku6Cu7HHHp9MeZg7pLBnqLAr63FFq2WGRJHhieVfhkDE5rDDyzMEkCKyPB33auK2LiVeq3T3HNSUk3YUPzP",
  "key28": "b7a67BRz3WhTMjh4dXua5oTj6xMhUgtLbeMAKTEYukLCX8VEmGv2ZNhUEzad41odmPmbYg6F66q2cTzsdxC68jt",
  "key29": "3ST4vbd4vEcST6dhcjA4WAd4DBwHkGkji1JnHjZeYrGry9VmqKWaug7FUftGL6TsRvxuT9mfCQk466tHLNvEqKgR"
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
