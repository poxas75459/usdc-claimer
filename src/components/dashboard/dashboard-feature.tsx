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
    "39VBkouexSgSrtCeaHmkvNQ5L2vYP8XFtinCnorN33tU4cBB1kzSLsBsVkC2Fqnx6J8hmQJuZXvJ7JCboXg8VjjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bkdCcokvupaTCoPfo76iHXrNVM8THDk6admhH9zm8jD7qVunCQF9ejArTuKKv7gMXzjh3XLtLwxTdVzWEyGoNwp",
  "key1": "exeqL6Ge1b1kyBAAqXgGdXtUAJUVJqi7DsgACjRFRts32WU4jprsyj1adb1VWN2Nyc35ctkWh8Rgw25wzuAX4Y1",
  "key2": "3vZeQitTaZKtfFgJZ4TSNL8foLGVSA6HKaBQEn5Y6YihxncuSH5BEDg17cs1Zgy46XbXDzRbk8bGhL8arBcE2xpR",
  "key3": "dEXCj6GTzekAH5H6eMvMwpCrWwiWo6ouLnpcquZvbhKH2FJuDDkhhb5hXvAW4Zcxi23NeuYfkyXg12DHNA9DnzL",
  "key4": "2B3pN8yxjEkPHyrzmw2HGCUEsCEtXwxq9w9xDdE4Fv3d6Ns7nyBcSrf3jgiekjZb5esv5dP15o5vYxdJKNy1nQXa",
  "key5": "xSH95DvtAWySQgVQ8o45crtoG441YULrmrUvoWbeqFv2HhBaJ58wk6V5yxXKwYDXEcnFMPS59hArdW7Txs2eYQp",
  "key6": "523KwD1aHPTqPW2AoauBxoEufSx3znNn5ciPSKiZjUDbFZyducnPPk79rDXhJzXsMFEotfYdq5tpzffNuRYNZdcD",
  "key7": "4MYrZNhCvteA4X49nTpyhL4xbqjz4UCreNKhdAMaUoAiwHqU2W4bk7CWtk11ccqrknRh3YMCtmBpQXuL4EQAnD1",
  "key8": "258ywytYv1zWKuk3hU5Lrn3VMHN55MRm3SSRwRMccq5D2JVgBjTd5h1es4haCo2iQ1m9AkApe7PAF8JP1heAcZkv",
  "key9": "3YAc2XPZbgZX6LD4TFsgaBfuLx14v8nUdjKbzyNwA5gnSfAfdrX3porWk1i2QBUFghdRTVUqb4FRU8gbMuQX1SQU",
  "key10": "3ia17kDVULCNKKWRa9LfhfZug9dBYjnZT8jUM8DZArZJ9GLN715iHjh333jQq43pdGqeQg5qZg4rZMWnigJpp86K",
  "key11": "5ryxD1MF7Zq8ZeYdjzaNaLhWhqUhWVPHKwPcjkVPxzD95HxLTTySsVn5v4t8EymewQuPp3acwddT7cp7TVRFv52K",
  "key12": "5ne5KAiiobc5zJqoyMoWM2wPvqsA6jKBcGTWeyq2aEgNVJTumpi95w7Cm3idSxi3vpEk4EQi1QkxyZRXBCwAsXr8",
  "key13": "2cfnz44YHjpihburvAPk5rQVThRNJLHFkkdy2fNHSEDQogDdUmiimdWBrveJwtRPjxvFY86EgpX5LxKu5vRpvbgV",
  "key14": "2XtbBGGbQZEpLqZ4b6xu2ybwhrShrRbjfS1xK2YGueL5wTuuegHb1q9Fbnhvnjb76BHReZHAJ6wLCEd1QHweF1kg",
  "key15": "5mHSw9yPQqS2bzEg46E5CVj9Sdb5GBaMVtM6D9drrLWBJDCtwrpqMtLzui8MYUngUfkUjd8WKUyVGRqSRqa3rNJx",
  "key16": "5cyXbTND8UsjKNpM1xNvCdL5EqVc7VZWZbHn51JDuJQ9s6gTZVWAoy5wxkgPYkMfa6mdbxiP2MjMY3W2syYXESfx",
  "key17": "2u8LpWAM2oVDCrfxxyBg3dYoozhq9PMkvpjhZ3nPHnEPGVTvXaVSz7VB9DYecQ3Vo1AWgYAiNq5z2KWpfCYwNKFz",
  "key18": "54kLsgD79aAFCJNGrt99RQ5Zx9NguobZc11Po9Ewvctai2q7uCmTXQmwJzvH1EPr9o7qmK4JKLouisBjaSmtCZRU",
  "key19": "3dr8LYqXpt4YxgPfFhJMe5y4tmDJy4dnfMDKGAxXNZbHZsgLxsLZmNQADehC7nwwz7yMkZkBmkgtdipoDFZVkcX4",
  "key20": "4o5N1LWTF6rCqty9KzwWmEw6EGtYbcZHVF1p8oEGqv6VgBA9Pa1zNpoTsBZxwTaeTkNtMseNHvmUKkqs9G8Pu1ww",
  "key21": "5AnCg4g9mbzj7hvqrVKYu8Gxqb529znbVQLZ4fA5rCX9CouyeKypzpWCKoQmjtA9V3dkbysvj57EevLXv9a8SGKA",
  "key22": "24PD5kRbhsof3FZwPYdGyJ7qHSaEaJ4qNMFVgGhmWUo25BTyVBuLtBWrZTkTeCvLe4RGzYybL2Ty3oQDPg7goLwc",
  "key23": "4yoYFzjAPSg15nvXX4EeyZCRjajTcMDYzWxza1XXZJeVBjGbbBvKWMMmJy434xXc3PuPaL3PVQxYFdbhaK44bxp3",
  "key24": "2BNiqWpgCtnhSdFuDuaFZDBAC6kj1NCNyL5eVsyJv9fN7zXkbMRqAP9EMiLHgVWEQw3kGB7s5bRPxiyQVxcNRNAf"
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
