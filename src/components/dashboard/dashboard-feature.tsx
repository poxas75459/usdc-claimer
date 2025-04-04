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
    "TS995VF6zbutM9Le3zwwyaE6bbz6DHMUrXA72SqX6iXbBtGusVwCPFXA3wpxpnr1M2a7c2B2urjM2X6brPWmVXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wMuj9Uodef3wkHDjQnev6YWRCbJjo1F5DnCykCscb1arJ7wKfG86vogvrynVHa1JRg9de8WWWdWYxvwh1FzB3rN",
  "key1": "38615SWDSE5rtbw3zRewY6coxAoDtPfKxrQyhhhQq7bQZ4x5SSGNxxJtffpZYc1ePLoNN2feTLQQJZzGpnEJuwDg",
  "key2": "vZ2LP7NboNucjvCDyjx5wdUGfDTwfndozyjHhbzUuokAjS9CFQKYVcuALdA8BNNd4qyNAFQSyVaC4sJfGEwfwaq",
  "key3": "2ZhypFXSsR12DBCbM3LLUyaXJKXY9Qu2Pa6kZKxAgnb2DXwf48koFE5MKkhUA3sgyPtXGVNuSreB2aaPoHnh237P",
  "key4": "5WEHQJjDGVWCurfXahbnctPFm5Kkrp6gi1TBhrPqLKPxEQN2mWcXxK729LvyXsfAmMPNDRYGcafd57oTwr5EJJhJ",
  "key5": "5QTiWMo6FaBfN6cViZswTnV9nJ6GpCTw3EDoiXsnpaoo9vCK74v6HMbHEK4L4My7U51wYzM8gmZvydKM3h9SoNE2",
  "key6": "2fRgFh5C3k1oLhzXuYSZetJkcPYckagDkRbUJZgm4Y9oH3mLHEdDV5rqE9ZZ8uYgXMkRv6TWmsZZSnHcP91kRoFX",
  "key7": "YwSifs8DqzDxitFPPVpjZiiGBDJnArfZL3dNZRXG4JFKjePytthUy5eoLeQgbKCUC2Xj5HNnbr9q8VNRwudnGsz",
  "key8": "Wx6sTRGKtVDzJjzkh3M8caAWKvu6KcJKgRM1EFGWJmWayNgRaveRekoaRWHP3JLzaPh63yno11zGDnbU9ybiKX3",
  "key9": "35EigQgwSk6ityckFvfPhsmfoESzaakusHn1BDxRmPvKLErDFxjXeVHXMEReFr18HzcYY445sEC8drf7TXbBQhpD",
  "key10": "uRJL465sMtYMvR5hejW4v4Fq1npdRcVKqGCnTMVRBMa9ri7XmbFgfSCv7cQtxLyExny2mKgUxDEwJ14FqXdCR5T",
  "key11": "nzfs2FZPRfjinTZVsxVMK7323V3oqLHRGfyFouVo4D9x5zN9gBqWnTgw9KUz242UErCoZtKXEUo78mqGBHtw2jD",
  "key12": "2K4cSq5ajLjH6RUJ8cW1DHzwe6JBdxBhHR1PSWgEBCGEMkazLMQbS4BMr1oSbzTsMKwoGqqFjfMRZYZ6fDMg2v5i",
  "key13": "GJsXT79xup69BVw1co7jkn3eWs96wnSCkB21oSDq4gB6a71t2xA3UvzFN9UHj6NKj5zZgXvfaWTe8d3Ypi8i1fp",
  "key14": "66Buqj5fBXj51ayuJJKFz1SwdejwYVfazMXFqwnfJE89aBHgy7PvKajzHfuzZMjkv5Wv1pGffvM4NRHgSxH9XiTp",
  "key15": "5eJ6dQjHvgVTUo52CYN7mpmtABxqynjySF6Ho5bvzCRqGnCg1EN1v4vS71hsrRGG1NektBrwNmALzQG5gLp5TuhK",
  "key16": "4a5ZqkQMALTcGSuFKwMifp9dPsGMhrWbRb3GkMLKqKwSv8f7qPffoL4iRZLR8tHJbq9vLM9EJtyMmoxZSnaxhxgB",
  "key17": "5HSvEqFL55NCG1hap3wVgJYn8CuJrxTvDMbjq3NAXNUVKXxJ4VmS5fUHmi2PydVrz5EPkSfdVw5Ro6tfj2zbce7a",
  "key18": "59t64RcNBuxm1EvDB6q3UvUYtQcAKziAjqDm223qef2ek8k24atPtUZLjk8YgGkASGWChgvHmSB5WV9HxMNRNCvW",
  "key19": "24arZeRaiZ3HgCyRUCX8ij9TsGf81HSZD2hJDGknF9zaDShRRk9rwMmimn3GRHuKRcwNwwHzwHyLf2jmzQZFJZii",
  "key20": "e4gaRqU7RnkQhhRFTcCcxDJpMBWDabFiPAzLmcWa2s6ZvMQU2pFGsXEZgC5hbb8YaafQ9Yc3dDieNxSXNdXcZGv",
  "key21": "5hgFLn3xP3MwH6krzr2R7TyUkqk4BTbPZr1c2pGLTGhMCg3Tx64BZbK2Ji7iyRJbFxEELzssnmB3Y8BR8RfFvwwN",
  "key22": "4xoZenZ3yBWVLdaHo4rX8Ri2EPz67zzryV2nFB4fCHRc3tpmV5RTPe3RC9XSLZUa8nywqnKaz4TrqSY6wK37Z2AM",
  "key23": "4CE12o9qASSC2ubeDMB2uDnQqTJLTz4oKe4MCnvqdFxtCjYPY6sh8PNS9m5WpjY7saQ8oABEsyTjS6SAgsXvbuDU",
  "key24": "29WKJMwhqb9DDQRHAJLtwNUi6v9uBWSqngoaKu54qQmmrfs8BCebvSZScWYFkn67DUH8r6juBHyRwT4j7HbLkdZx",
  "key25": "2xcSuK5QNuUZrtTSG5yvYJMK74WDgSSPUsHXQ8yCLfT7faaf7FkEBvMeTbgABxQZEQPTGRyedWuzkLmdxqVaDAvP"
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
