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
    "J3Atc2dFSrNfd61h3sCH4NBx6PNc8FBDNRZS8M6wfsuucFcTGmBoZAWkBqukKEfaFVMoqJKgxswJHod8GUnPUde"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FXbZcUfA5QMdFKg46J6evfKr7PEey5E1stiEE8dRWDzJvRxL14RMhE9epdgg582o5RnccZjjcKZ4VcNVNwVogjg",
  "key1": "2X8Pzf6m7TFu9EHKtXYv2Ne41Nuk8RCLHnxoNCYueLQoiTmDVVo5qJ1pVo9U2ZimYaJWTpCrXTTMXeiUvtySYeN1",
  "key2": "99uZhKginfNYnStF9UXnEhkkGaWdsx5PmvrAygy5Xqb3SCFXAyrg4g6f8SqUfWSQJXr2ofh3dRvbjBZwvczpmVC",
  "key3": "3Uz6MMdtedXWWUPUUsYrqtdgqmXCXRaCmFr7aCNa2hSgnniDN6zj2oGUbjgZF9VmHuYgdZbvzWMdetuZL48kDmNT",
  "key4": "4Ln1nn4855c1YqWxhXR51X34Tmr6SgSqUMZdHTbwRCpWBv6ZDdWsXPzW6xhjCjTazhHbCMDAPiXMQxt2HsEm2QW8",
  "key5": "5NGFTH6NcQyEFvoKHnd1HvFefPUJ72C8gSg4HEKdKHoewpZyZZjHcYVWXrT4BsBvN4KKCkdDiW5pEV4EydMZjngb",
  "key6": "2aAzMRoCCbSLsQGtRBcWnxPVTwnqiHgwURvmPXUa35G2cw8JjSNYeJb2Jts4uigEsaKFaxdQVsPfiWx3PTBcFNn9",
  "key7": "2WGx22FZCChNqSvwF5pXTZu8RefYa1qEuWaPByR1wDX24yerk19YgVUmaMiCTzmWZ4cp3Scc3sMmBhtMAVafGGcQ",
  "key8": "4x3s4JTwnCLzHFkxso5JJSRJgQ41AeYA8V86wnpt1HuK3jFSF9TXwHLmG9QE8iF2bftreV72TWpDNQ4pkH8NYSdk",
  "key9": "5vtofZEgUsUrqoL7whkw5bjS9xCSV69r8KnjmyuvKsUsGNYj2epdyjrhnYMQaEUq3WwErBy6Mq7SFDPugrkEzpV4",
  "key10": "2TSTaCpH4u9CTCD3UPhLDxUkuRmvzuC269QdQEGiHcjioJnzYLeiimXCoAyAD2qY7p13Rbp2XZZ9TcDyiSzvB2oN",
  "key11": "4JHnDMqqWphBpPAPTU7TVoNZs1Tm3vLqhza4QU8SmGrDpgZTiUqXneR9Kvpzp111QSiwPdhbLnxXfghpoH2gAdVQ",
  "key12": "52xrKSpqpqnzhmJikzqztTB1xmPEVZwT633XiuBNJ8tTuxCFnKEecaV7WBmzjKRrnpHnKJz9hSPQLmkAaCjoDtBd",
  "key13": "9sSLvHixEXrDXrWo6xu1yHsBCJsZpG4MvQY3oGqTJSzWJSfFywyXXE7T9HqDo2aPvaUc58rSZKKxnsNYZJpHJaq",
  "key14": "4aGM8Q1bnPAgVK6pb8jt2VCQJMAh6K539nvWhBX6B2bMZ2dcdu4C1PVBLqtKb54bN7zjUrDwtjiTsjwHS6QsEF9N",
  "key15": "4pm8oKLgTJuY1un2dWkZwhL5qU76mKnRyGEFTjsSxrEDdh57qHWGBpTodJChh5te5rg45yPDm9xwsU3ADxc5qn65",
  "key16": "2jGEcSphDjC5ok6FhGgsusLdRPqzssTZ2MM46X2vvEqxy2ZnKJLT5XNZ1ypNCBdWUMyJqmRprSawkMjFjY2mc6Nr",
  "key17": "2wwMeUN432p3g3qX4PpuKeA8HhUCFiRPm4BUKMeubCsxU9KctXNWYKoJhrY9Kxr91Udxc13Zrqnhgjike8E6r5ji",
  "key18": "EV4KuS4Yv2sPkERmZBxkkvqe513MZHGTqRhuYxvvSGpbMWbUEi7hR1Uc63HHk14oGiwWEijTsULupiWLNBXDXkC",
  "key19": "22Rpn6W7NGyD5v2Hno13jPXwyqdNbrVEkaonMAzoQJWgxhpBueD1ef8vvD2hJRF1vn9BZKjuezqT7pEM51AjaSZt",
  "key20": "5MRQ7UzjuyrmJ7VYY6PmSo8dqiBET93SiceG6Z8hdfruccWtWo4ejbeQd5Yt8eJRwvnLf2NEwLQAxNKeMmjKiP9d",
  "key21": "QU7QGZjeXxW6UPWVfpYPPvvw7SR9YsU1bYsoiWbxjvn5Q8nUEQjEHLAT9ESsTcow5MWavgBiCeHCFFb8HtMobj3",
  "key22": "2xw2rfjCbyxYVGd1GP3zAtvVJEjPYMyAFGBDHaEnyNA9HM9BmuN13m8xwDsBPZKWGC3HVvT2LkKE696cNHt4X4ri",
  "key23": "2TaDEQPd8Yhbi83gZxPu7wn1v8hzoJ56L4Mzr7fvJ4MLJMw5gHsayMwh2Gep7A5KZnJcw6rA1tKb1EmGsNnC44kT",
  "key24": "3Q3Y63xxPzGswAeDhRs6y7W8Pq2iWVNWHQUmm4FL6wadWmzLwjvnWHDyXeMgV2zGgtm2qRT6vsPnppZdroBruV5u"
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
